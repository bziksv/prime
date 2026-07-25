<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const BV_MAX_SLUG_LEN = 120;
const BV_MAX_BATCH = 50;
const BV_COOKIE_TTL = 86400;
const BV_RATE_MAX = 60;
const BV_RATE_WINDOW = 60;

$dataDir = dirname(__DIR__) . '/data/blog-views';
$rateDir = $dataDir . '/.rate';

function bv_fail(int $code, string $message): void
{
    http_response_code($code);
    echo json_encode(['error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function bv_ok(array $payload): void
{
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function bv_valid_slug(string $slug): bool
{
    if ($slug === '' || strlen($slug) > BV_MAX_SLUG_LEN) {
        return false;
    }
    return (bool) preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $slug);
}

function bv_ensure_dir(string $dir): void
{
    if (is_dir($dir)) {
        return;
    }
    if (!mkdir($dir, 0755, true) && !is_dir($dir)) {
        bv_fail(500, 'storage unavailable');
    }
}

function bv_path(string $dir, string $slug): string
{
    return $dir . '/' . $slug . '.json';
}

function bv_read_views(string $path): int
{
    if (!is_file($path)) {
        return 0;
    }
    $raw = file_get_contents($path);
    if ($raw === false || $raw === '') {
        return 0;
    }
    $data = json_decode($raw, true);
    if (!is_array($data) || !isset($data['v'])) {
        return 0;
    }
    return max(0, (int) $data['v']);
}

function bv_write_views(string $path, int $views): void
{
    $tmp = $path . '.tmp.' . getmypid();
    $json = json_encode(['v' => $views], JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        bv_fail(500, 'encode failed');
    }
    if (file_put_contents($tmp, $json, LOCK_EX) === false) {
        @unlink($tmp);
        bv_fail(500, 'write failed');
    }
    if (!rename($tmp, $path)) {
        @unlink($tmp);
        bv_fail(500, 'rename failed');
    }
}

/** Atomic read/increment with flock on the slug file. */
function bv_increment(string $path): int
{
    $fh = fopen($path, 'c+');
    if ($fh === false) {
        bv_fail(500, 'open failed');
    }
    if (!flock($fh, LOCK_EX)) {
        fclose($fh);
        bv_fail(500, 'lock failed');
    }
    rewind($fh);
    $raw = stream_get_contents($fh);
    $views = 0;
    if (is_string($raw) && $raw !== '') {
        $data = json_decode($raw, true);
        if (is_array($data) && isset($data['v'])) {
            $views = max(0, (int) $data['v']);
        }
    }
    $views++;
    $json = json_encode(['v' => $views], JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        flock($fh, LOCK_UN);
        fclose($fh);
        bv_fail(500, 'encode failed');
    }
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, $json);
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
    return $views;
}

function bv_client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return preg_replace('/[^0-9a-fA-F:.]/', '', $ip) ?: '0.0.0.0';
}

function bv_rate_limit(string $rateDir): void
{
    bv_ensure_dir($rateDir);
    $ip = bv_client_ip();
    $bucket = $rateDir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $fh = fopen($bucket, 'c+');
    if ($fh === false) {
        return;
    }
    if (!flock($fh, LOCK_EX)) {
        fclose($fh);
        return;
    }
    rewind($fh);
    $raw = stream_get_contents($fh);
    $count = 0;
    $start = $now;
    if (is_string($raw) && $raw !== '') {
        $data = json_decode($raw, true);
        if (is_array($data)) {
            $start = (int) ($data['t'] ?? $now);
            $count = (int) ($data['n'] ?? 0);
            if ($now - $start >= BV_RATE_WINDOW) {
                $start = $now;
                $count = 0;
            }
        }
    }
    $count++;
    if ($count > BV_RATE_MAX) {
        flock($fh, LOCK_UN);
        fclose($fh);
        bv_fail(429, 'rate limit');
    }
    $json = json_encode(['t' => $start, 'n' => $count]);
    ftruncate($fh, 0);
    rewind($fh);
    if (is_string($json)) {
        fwrite($fh, $json);
    }
    fflush($fh);
    flock($fh, LOCK_UN);
    fclose($fh);
}

function bv_cookie_name(string $slug): string
{
    return 'bv_' . substr(hash('sha256', $slug), 0, 16);
}

function bv_has_cookie(string $slug): bool
{
    $name = bv_cookie_name($slug);
    return isset($_COOKIE[$name]) && $_COOKIE[$name] !== '';
}

function bv_set_cookie(string $slug): void
{
    $name = bv_cookie_name($slug);
    $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
    setcookie($name, '1', [
        'expires' => time() + BV_COOKIE_TTL,
        'path' => '/',
        'secure' => $secure,
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
}

bv_ensure_dir($dataDir);
bv_rate_limit($rateDir);

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    if (isset($_GET['slug']) && is_string($_GET['slug'])) {
        $slug = trim($_GET['slug']);
        if (!bv_valid_slug($slug)) {
            bv_fail(400, 'invalid slug');
        }
        bv_ok(['slug' => $slug, 'views' => bv_read_views(bv_path($dataDir, $slug))]);
    }

    if (isset($_GET['slugs']) && is_string($_GET['slugs'])) {
        $parts = array_values(array_filter(array_map('trim', explode(',', $_GET['slugs']))));
        if (count($parts) > BV_MAX_BATCH) {
            bv_fail(400, 'too many slugs');
        }
        $out = [];
        foreach ($parts as $slug) {
            if (!bv_valid_slug($slug)) {
                continue;
            }
            $out[$slug] = bv_read_views(bv_path($dataDir, $slug));
        }
        bv_ok(['views' => $out]);
    }

    bv_fail(400, 'slug or slugs required');
}

if ($method === 'POST') {
    $raw = file_get_contents('php://input');
    $body = is_string($raw) ? json_decode($raw, true) : null;
    if (!is_array($body) || !isset($body['slug']) || !is_string($body['slug'])) {
        bv_fail(400, 'json body with slug required');
    }
    $slug = trim($body['slug']);
    if (!bv_valid_slug($slug)) {
        bv_fail(400, 'invalid slug');
    }

    $path = bv_path($dataDir, $slug);
    if (bv_has_cookie($slug)) {
        bv_ok([
            'slug' => $slug,
            'views' => bv_read_views($path),
            'counted' => false,
        ]);
    }

    $views = bv_increment($path);
    bv_set_cookie($slug);
    bv_ok([
        'slug' => $slug,
        'views' => $views,
        'counted' => true,
    ]);
}

bv_fail(405, 'method not allowed');

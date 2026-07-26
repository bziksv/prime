<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const LEAD_TO = 'info@prime-ltd.su';
const LEAD_FROM = 'noreply@prime-ltd.su';
const LEAD_RATE_MAX = 8;
const LEAD_RATE_WINDOW = 600;

$dataDir = dirname(__DIR__) . '/data/leads';
$rateDir = $dataDir . '/.rate';

function lead_fail(int $code, string $message): void
{
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function lead_ok(): void
{
    echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
    exit;
}

function lead_ensure_dir(string $dir): void
{
    if (is_dir($dir)) {
        return;
    }
    if (!mkdir($dir, 0750, true) && !is_dir($dir)) {
        lead_fail(500, 'storage unavailable');
    }
}

function lead_client_ip(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return preg_match('/^[a-fA-F0-9:.]+$/', $ip) ? $ip : '0.0.0.0';
}

function lead_rate_ok(string $dir, string $ip): bool
{
    lead_ensure_dir($dir);
    $file = $dir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $raw = file_get_contents($file);
        $data = is_string($raw) ? json_decode($raw, true) : null;
        if (is_array($data) && isset($data['hits']) && is_array($data['hits'])) {
            foreach ($data['hits'] as $t) {
                if (is_int($t) && $t > $now - LEAD_RATE_WINDOW) {
                    $hits[] = $t;
                }
            }
        }
    }
    if (count($hits) >= LEAD_RATE_MAX) {
        return false;
    }
    $hits[] = $now;
    file_put_contents($file, json_encode(['hits' => $hits], JSON_UNESCAPED_UNICODE), LOCK_EX);
    return true;
}

function lead_clean(string $value, int $max): string
{
    $value = trim(str_replace(["\r", "\n"], ' ', $value));
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }
    return substr($value, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    lead_fail(405, 'method not allowed');
}

$raw = file_get_contents('php://input');
$payload = is_string($raw) && $raw !== '' ? json_decode($raw, true) : null;
if (!is_array($payload)) {
    lead_fail(400, 'invalid json');
}

// Honeypot — bots fill "company"
$honeypot = lead_clean((string) ($payload['company'] ?? ''), 80);
if ($honeypot !== '') {
    lead_ok();
}

$name = lead_clean((string) ($payload['name'] ?? ''), 80);
$phone = lead_clean((string) ($payload['phone'] ?? ''), 40);
$email = lead_clean((string) ($payload['email'] ?? ''), 120);
$service = lead_clean((string) ($payload['service'] ?? ''), 120);
$message = lead_clean((string) ($payload['message'] ?? ''), 2000);
$page = lead_clean((string) ($payload['page'] ?? ''), 200);
$source = lead_clean((string) ($payload['source'] ?? ''), 80);

$nameLen = function_exists('mb_strlen') ? mb_strlen($name) : strlen($name);
if ($name === '' || $nameLen < 2) {
    lead_fail(400, 'Укажите имя');
}
$digits = preg_replace('/\D+/', '', $phone);
if ($phone === '' || !is_string($digits) || !preg_match('/^\d{6,}$/', $digits)) {
    lead_fail(400, 'Укажите телефон');
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    lead_fail(400, 'Некорректный email');
}
if ($page !== '' && !preg_match('#^/[a-zA-Z0-9/_\\-\\.]*$#', $page)) {
    $page = '/';
}

$ip = lead_client_ip();
if (!lead_rate_ok($rateDir, $ip)) {
    lead_fail(429, 'Слишком много заявок. Попробуйте позже.');
}

$when = (new DateTimeImmutable('now', new DateTimeZone('Europe/Moscow')))->format('Y-m-d H:i:s');
$lines = [
    "Новая заявка с сайта prime-ltd.su",
    "",
    "Время: {$when} (МСК)",
    "Имя: {$name}",
    "Телефон: {$phone}",
    "Email: " . ($email !== '' ? $email : '—'),
    "Услуга: " . ($service !== '' ? $service : '—'),
    "Страница: " . ($page !== '' ? "https://prime-ltd.su{$page}" : '—'),
    "Источник: " . ($source !== '' ? $source : '—'),
    "IP: {$ip}",
    "",
    "Сообщение:",
    $message !== '' ? $message : '—',
];
$body = implode("\n", $lines);

$subject = '=?UTF-8?B?' . base64_encode('Заявка с сайта' . ($service !== '' ? ": {$service}" : '')) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: ПРАЙМ сайт <' . LEAD_FROM . '>',
    'Reply-To: ' . ($email !== '' ? $email : LEAD_TO),
    'X-Mailer: prime-ltd-su-lead',
];

$sent = @mail(LEAD_TO, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    lead_fail(500, 'Не удалось отправить. Позвоните или напишите на info@prime-ltd.su');
}

lead_ensure_dir($dataDir);
$logName = $dataDir . '/' . date('Ymd-His') . '-' . substr(hash('sha256', $ip . $phone . $when), 0, 8) . '.json';
@file_put_contents(
    $logName,
    json_encode(
        [
            'at' => $when,
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
            'service' => $service,
            'page' => $page,
            'source' => $source,
            'ip' => $ip,
        ],
        JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT
    ),
    LOCK_EX
);

lead_ok();

#!/usr/bin/env bash
# Low-memory production deploy for the shared VPS (MySQL + zram).
# Cap Node heap — do NOT raise above ~1G on this host (OOM kills mysqld).
set -euo pipefail

BUILD="${BUILD:-/var/www/prime_ltd_su_usr/data/prime-astro}"
ROOT="${ROOT:-/var/www/prime_ltd_su_usr/data/www/prime-ltd.su}"
# Ceiling only (~645 pages build fine under 768M locally). Keeps V8 from ballooning into OOM.
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=1024}"
export UV_THREADPOOL_SIZE="${UV_THREADPOOL_SIZE:-2}"
export ASTRO_TELEMETRY_DISABLED=1

git config --global --add safe.directory "$BUILD" 2>/dev/null || true

cd "$BUILD"
git fetch --depth 1 origin main
git reset --hard origin/main
echo "commit: $(git rev-parse --short HEAD) $(git log -1 --pretty=%s)"
echo "NODE_OPTIONS=$NODE_OPTIONS"

# Install deps without a fat heap; build under nice so PHP/MySQL keep CPU.
npm ci
nice -n 10 npm run build

test -f dist/index.html
test -f dist/blog/index.html

find "$ROOT" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
cp -a dist/. "$ROOT"/
chown -R prime_ltd_su_usr:prime_ltd_su_usr "$ROOT" "$BUILD"

echo "=== deployed ==="
ls -la "$ROOT" | head -12

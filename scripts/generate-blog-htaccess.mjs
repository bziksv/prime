#!/usr/bin/env node
/**
 * Generates public/.htaccess 301 rules from src/data/blog-redirects.json
 * Run: node scripts/generate-blog-htaccess.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(
  readFileSync(join(root, "src/data/blog-redirects.json"), "utf8"),
);

const cats = (data.wpCategories || [])
  .map((c) => c.replace(/[^a-z0-9_-]/gi, ""))
  .filter(Boolean);
const catGroup = cats.join("|");

const lines = [];
lines.push("# =============================================================================");
lines.push("# prime-ltd.su — generated redirects (do not edit by hand)");
lines.push("# Source: src/data/blog-redirects.json");
lines.push("# Regenerate: node scripts/generate-blog-htaccess.mjs");
lines.push(`# Posts: ${data.posts.length} · Pages: ${(data.pages || []).length}`);
lines.push("# =============================================================================");
lines.push("");
lines.push("# Branded Astro 404 (dist/404.html)");
lines.push("ErrorDocument 404 /404.html");
lines.push("");
lines.push("<IfModule mod_rewrite.c>");
lines.push("RewriteEngine On");
lines.push("RewriteBase /");
lines.push("");
lines.push("# --- Legacy service / utility pages (old WP) ---");
const seenPages = new Set();
for (const page of data.pages || []) {
  const from = String(page.from || "").replace(/^\//, "").replace(/\/$/, "");
  const to = page.to;
  if (!from || !to || seenPages.has(from)) continue;
  seenPages.add(from);
  const esc = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  lines.push(`RewriteRule ^${esc}/?$ ${to} [R=301,L]`);
}
lines.push("");
lines.push("# --- Blog posts: /{category}/{wp-slug}/ and /{wp-slug}/ → /blog/{astro}/ ---");
lines.push(`# Categories: ${catGroup}`);
for (const post of data.posts) {
  const wp = post.wpSlug.replace(/[^a-z0-9_-]/gi, "");
  const astro = post.astroSlug.replace(/[^a-z0-9_-]/gi, "");
  if (!wp || !astro) continue;
  const mark = post.dup ? " # dup" : "";
  // WP permalink /%category%/%postname%/: leaf or nested (child of blog →
  // /blog/seo-poleznosti/slug/). Also bare /slug/ and single /seo-poleznosti/slug/.
  lines.push(
    `RewriteRule ^(?:(?:${catGroup})/)*${wp}/?$ /blog/${astro}/ [R=301,L]${mark}`,
  );
}
lines.push("");
lines.push("# --- Legacy ?p={ID} (GUID / old permalinks) ---");
const byId = data.posts
  .filter((p) => p.wpId)
  .sort((a, b) => a.wpId - b.wpId);
for (const post of byId) {
  let dest = String(post.to || "").trim();
  if (!dest) {
    const astro = String(post.astroSlug || "").replace(/[^a-z0-9_-]/gi, "");
    if (!astro) continue;
    dest = `/blog/${astro}/`;
  }
  if (!dest.startsWith("/")) dest = `/${dest}`;
  lines.push(`RewriteCond %{QUERY_STRING} (^|&)p=${post.wpId}(&|$)`);
  lines.push(`RewriteRule ^$ ${dest}? [R=301,L]`);
}
lines.push("</IfModule>");
lines.push("");

const outPath = join(root, "public/.htaccess");
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${outPath} (${data.posts.length} posts, ${(data.pages || []).length} pages)`);

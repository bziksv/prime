#!/usr/bin/env node
/**
 * Convert public raster images (jpg/png/gif) → webp, rewrite refs, remove originals.
 * Keeps apple-touch-icon.png and favicon.ico for platform compatibility.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const KEEP_EXT = new Set([".svg", ".webp", ".ico", ".woff", ".woff2", ".ttf", ".otf"]);
const RASTER = new Set([".jpg", ".jpeg", ".png", ".gif"]);
const KEEP_AS_IS = new Set([
  "apple-touch-icon.png",
  "images/v6/apple-touch-icon.png",
]);

/** When jpg+png share a stem, prefer this order */
const PREFER = [".jpg", ".jpeg", ".png", ".gif"];

const TEXT_GLOBS = [
  "src",
  "scripts",
  "docs",
  "public/.htaccess",
];

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === "dist" || e.name === ".git") continue;
      await walk(full, out);
    } else {
      out.push(full);
    }
  }
  return out;
}

function relPublic(abs) {
  return path.relative(publicDir, abs).split(path.sep).join("/");
}

async function collectRasters() {
  const files = await walk(publicDir);
  const rasters = files.filter((f) => RASTER.has(path.extname(f).toLowerCase()));
  const byWebp = new Map();
  for (const f of rasters) {
    const rel = relPublic(f);
    if (KEEP_AS_IS.has(rel)) continue;
    const webpRel = rel.replace(/\.(jpe?g|png|gif)$/i, ".webp");
    if (!byWebp.has(webpRel)) byWebp.set(webpRel, []);
    byWebp.get(webpRel).push(f);
  }
  return byWebp;
}

function pickSource(candidates) {
  candidates.sort((a, b) => {
    const ea = path.extname(a).toLowerCase();
    const eb = path.extname(b).toLowerCase();
    return PREFER.indexOf(ea) - PREFER.indexOf(eb);
  });
  return candidates[0];
}

async function convertOne(srcAbs, destAbs) {
  const img = sharp(srcAbs, { animated: false });
  const meta = await img.metadata();
  const pipeline = meta.hasAlpha
    ? img.webp({ quality: 90, alphaQuality: 100, effort: 4 })
    : img.webp({ quality: 82, effort: 4 });
  await pipeline.toFile(destAbs);
}

async function rewriteRefs(mapping) {
  // mapping: old public path "/images/..." → new "/images/....webp"
  const files = [];
  for (const g of TEXT_GLOBS) {
    const abs = path.join(root, g);
    try {
      const st = await fs.stat(abs);
      if (st.isDirectory()) await walk(abs, files);
      else files.push(abs);
    } catch {
      /* missing */
    }
  }

  const exts = new Set([
    ".astro",
    ".ts",
    ".tsx",
    ".js",
    ".mjs",
    ".css",
    ".json",
    ".md",
    ".mdc",
    ".html",
    ".txt",
    ".htaccess",
  ]);

  let changedFiles = 0;
  for (const file of files) {
    if (!exts.has(path.extname(file).toLowerCase()) && !file.endsWith(".htaccess")) continue;
    let text = await fs.readFile(file, "utf8");
    let next = text;
    for (const [from, to] of mapping) {
      if (from === to) continue;
      // replace exact path occurrences
      next = next.split(from).join(to);
    }
    if (next !== text) {
      await fs.writeFile(file, next);
      changedFiles += 1;
    }
  }
  return changedFiles;
}

async function main() {
  const byWebp = await collectRasters();
  console.log(`Groups to convert: ${byWebp.size}`);

  const pathMap = []; // [oldPublicPath, newPublicPath]
  let converted = 0;
  let skipped = 0;
  let removedDupes = 0;

  const concurrency = 6;
  const jobs = [...byWebp.entries()];

  async function worker() {
    while (jobs.length) {
      const [webpRel, candidates] = jobs.shift();
      const src = pickSource(candidates);
      const dest = path.join(publicDir, webpRel);
      const srcRel = relPublic(src);

      try {
        await convertOne(src, dest);
        converted += 1;
        if (converted % 50 === 0) console.log(`… ${converted}/${byWebp.size}`);

        // map every old candidate path → webp
        for (const c of candidates) {
          const oldRel = "/" + relPublic(c);
          const newRel = "/" + webpRel;
          pathMap.push([oldRel, newRel]);
          // also without leading slash variants already covered
          if (c !== src) {
            await fs.unlink(c);
            removedDupes += 1;
          }
        }
        // remove primary original after convert
        await fs.unlink(src);
      } catch (err) {
        skipped += 1;
        console.error(`FAIL ${srcRel}:`, err.message);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  // Prefer longer paths first when replacing? Not needed for exact split.
  // Sort so .jpeg before .jpg? Exact strings only.
  pathMap.sort((a, b) => b[0].length - a[0].length);

  const changedFiles = await rewriteRefs(pathMap);

  // Explicit SiteSeo / apple-touch stay png — already excluded.
  console.log(
    JSON.stringify(
      {
        converted,
        skipped,
        removedDupes,
        refFilesUpdated: changedFiles,
        mappingPairs: pathMap.length,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

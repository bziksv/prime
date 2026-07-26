import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** blog path → lastmod ISO (max of JSON date and file mtime) — matches Article schema */
function loadBlogLastmod() {
  const dir = join(process.cwd(), "src/data/blog-posts");
  const map = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    const filePath = join(dir, file);
    try {
      const data = JSON.parse(readFileSync(filePath, "utf8"));
      if (!data?.slug || !data?.date) continue;
      const published = String(data.date);
      const mtime = statSync(filePath).mtime.toISOString().slice(0, 10);
      const lastmod = mtime > published ? mtime : published;
      map.set(`/blog/${data.slug}/`, lastmod);
    } catch {
      /* skip bad file */
    }
  }
  return map;
}

const blogLastmod = loadBlogLastmod();
const buildLastmod = new Date().toISOString();

export default defineConfig({
  site: "https://prime-ltd.su",
  server: {
    port: 3004,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path.startsWith("/blog/") && path !== "/blog/") {
          const date = blogLastmod.get(path);
          if (date) item.lastmod = new Date(date).toISOString();
          else item.lastmod = buildLastmod;
          item.changefreq = "monthly";
          item.priority = 0.6;
        } else if (path === "/" || path === "/blog/" || path === "/keysy/") {
          item.lastmod = buildLastmod;
          item.changefreq = "weekly";
          item.priority = path === "/" ? 1 : 0.8;
        } else {
          item.lastmod = buildLastmod;
          item.changefreq = "monthly";
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});

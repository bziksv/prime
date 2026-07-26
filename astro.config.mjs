import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** blog slug → ISO date from post JSON (for sitemap lastmod) */
function loadBlogLastmod() {
  const dir = join(process.cwd(), "src/data/blog-posts");
  const map = new Map();
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".json")) continue;
    try {
      const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
      if (data?.slug && data?.date) {
        map.set(`/blog/${data.slug}/`, String(data.date));
      }
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

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://prime-ltd.su",
  server: {
    port: 3004,
  },
  integrations: [sitemap()],
});

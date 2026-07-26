import type { APIRoute } from "astro";
import { blogPosts } from "../../data/blog";

const SITE = "https://prime-ltd.su";
/** Newest posts only — full archive is on /blog/. */
const LIMIT = 80;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: string): string {
  const d = new Date(`${date}T12:00:00+03:00`);
  return d.toUTCString();
}

export const GET: APIRoute = () => {
  const posts = blogPosts.slice(0, LIMIT);
  const lastBuild = posts[0] ? toRfc822(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE}/blog/${post.slug}/`;
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(post.date)}</pubDate>
      <category>${esc(post.category)}</category>
      <description>${esc(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Блог ПРАЙМ</title>
    <link>${SITE}/blog/</link>
    <description>SEO, контекст и интернет-маркетинг — практика агентства ПРАЙМ</description>
    <language>ru-ru</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

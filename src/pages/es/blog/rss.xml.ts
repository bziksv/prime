import type { APIRoute } from "astro";
import { blogPosts } from "../../../data/blog";
import { ES_BLOG_SLUGS, localizeBlogPost } from "../../../i18n/blog";

const SITE = "https://prime-ltd.su";
/** Solo posts ES recientes — archivo completo en /es/blog/. */
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
  const posts = blogPosts
    .filter((p) => (ES_BLOG_SLUGS as readonly string[]).includes(p.slug))
    .map((p) => localizeBlogPost(p, "es"))
    .slice(0, LIMIT);
  const lastBuild = posts[0] ? toRfc822(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE}/es/blog/${post.slug}/`;
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
    <title>Blog de PRIME</title>
    <link>${SITE}/es/blog/</link>
    <description>SEO, ads y marketing digital — notas prácticas de la agencia PRIME</description>
    <language>es</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE}/es/blog/rss.xml" rel="self" type="application/rss+xml" />
    <atom:link href="${SITE}/blog/rss.xml" rel="alternate" hreflang="ru" type="application/rss+xml" />
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

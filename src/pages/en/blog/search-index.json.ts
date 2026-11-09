import type { APIRoute } from "astro";
import { blogPosts, toSearchDoc } from "../../../data/blog";
import { EN_BLOG_SLUGS, localizeBlogPost } from "../../../i18n/blog";

export const GET: APIRoute = () => {
  const docs = blogPosts
    .filter((p) => (EN_BLOG_SLUGS as readonly string[]).includes(p.slug))
    .map((p) => toSearchDoc(localizeBlogPost(p, "en")));

  return new Response(JSON.stringify(docs), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};

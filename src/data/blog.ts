import semanticheskoeYadro from "./blog-posts/semanticheskoe-yadro.json";

export type BlogListItem = {
  intro?: string | null;
  items: string[];
};

export type BlogSection = {
  title: string;
  level: number;
  paras: string[];
  lists: BlogListItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  lead: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [semanticheskoeYadro as BlogPost];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatBlogDate(iso: string): string {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

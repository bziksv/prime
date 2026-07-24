import semanticheskoeYadro from "./blog-posts/semanticheskoe-yadro.json";
import seoStrukturaSayta from "./blog-posts/seo-struktura-sayta.json";
import tehnicheskiySeoAudit from "./blog-posts/tehnicheskiy-seo-audit.json";

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

/** Search document for client-side smart search */
export type BlogSearchDoc = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  readingMinutes: number;
  baseViews: number;
  /** Full searchable text (title + headings + body) */
  body: string;
  headings: string[];
};

/** Remove leaked WP newlines / junk from migrated text */
export function cleanBlogText(s: string): string {
  return s
    .replace(/\\n/g, " ")
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function sanitizePost(post: BlogPost): BlogPost {
  return {
    ...post,
    title: cleanBlogText(post.title),
    excerpt: cleanBlogText(post.excerpt),
    lead: post.lead.map(cleanBlogText).filter(Boolean),
    sections: post.sections.map((s) => ({
      ...s,
      title: cleanBlogText(s.title),
      paras: s.paras.map(cleanBlogText).filter(Boolean),
      lists: s.lists.map((list) => ({
        intro: list.intro ? cleanBlogText(list.intro) || null : null,
        items: list.items.map(cleanBlogText).filter(Boolean),
      })),
    })),
  };
}

/** Newest first */
export const blogPosts: BlogPost[] = [
  sanitizePost(semanticheskoeYadro as BlogPost),
  sanitizePost(seoStrukturaSayta as BlogPost),
  sanitizePost(tehnicheskiySeoAudit as BlogPost),
].sort((a, b) => b.date.localeCompare(a.date));

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

export function slugifyHeading(title: string): string {
  return (
    cleanBlogText(title)
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^a-zа-я0-9]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "section"
  );
}

export function getSectionId(title: string, index: number): string {
  return `s-${index}-${slugifyHeading(title)}`;
}

export function getPostNeighbors(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: blogPosts[i + 1] ?? null,
    next: blogPosts[i - 1] ?? null,
  };
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function getPostPlainText(post: BlogPost): string {
  const parts: string[] = [post.title, post.excerpt, ...post.lead];
  for (const s of post.sections) {
    parts.push(s.title, ...s.paras);
    for (const list of s.lists) {
      if (list.intro) parts.push(list.intro);
      parts.push(...list.items);
    }
  }
  return parts.join("\n");
}

/** ~180 wpm for RU longreads */
export function getReadingMinutes(post: BlogPost): number {
  const words = getPostPlainText(post).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

export function formatReadingTime(minutes: number): string {
  const n = Math.max(1, minutes);
  return `${n} мин чтения`;
}

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Stable baseline views (no backend). Grows with age of the post. */
export function getBaseViews(post: BlogPost): number {
  const published = new Date(`${post.date}T12:00:00`).getTime();
  const days = Math.max(
    1,
    Math.floor((Date.now() - published) / 86_400_000),
  );
  const salt = hashSlug(post.slug) % 180;
  return 240 + Math.floor(days * 1.35) + salt;
}

export function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")} млн`;
  if (n >= 10_000) return `${Math.round(n / 1000)} тыс.`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")} тыс.`;
  return new Intl.NumberFormat("ru-RU").format(n);
}

export function getBlogCategories(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of blogPosts) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "ru"));
}

export function toSearchDoc(post: BlogPost): BlogSearchDoc {
  const headings = post.sections.map((s) => s.title);
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    cover: post.cover,
    excerpt: post.excerpt,
    readingMinutes: getReadingMinutes(post),
    baseViews: getBaseViews(post),
    body: getPostPlainText(post),
    headings,
  };
}

export const blogSearchIndex: BlogSearchDoc[] = blogPosts.map(toSearchDoc);

export function getArticleCta(post: BlogPost): { title: string; text: string } {
  const bySlug: Record<string, { title: string; text: string }> = {
    "semanticheskoe-yadro": {
      title: "Нужна семантика под ваш сайт?",
      text: "Соберём ядро, кластеры и посадочные — как в этой статье, только под вашу нишу.",
    },
    "seo-struktura-sayta": {
      title: "Нужна структура сайта под SEO?",
      text: "Спроектируем иерархию, кластеры и перелинковку до старта разработки.",
    },
    "tehnicheskiy-seo-audit": {
      title: "Нужен технический SEO-аудит?",
      text: "Проверим индексацию, скорость и критические ошибки — с приоритетами, что чинить первым.",
    },
  };
  if (bySlug[post.slug]) return bySlug[post.slug];
  if (post.category === "SEO") {
    return {
      title: "Нужен SEO под ваш сайт?",
      text: "Разберём нишу и предложим план работ — без лишней воды.",
    };
  }
  return {
    title: "Обсудим задачу?",
    text: "Разберём, что сработает для вашего проекта — без обязательств.",
  };
}

/** Подпись на обложке (как на старых WP-превью) */
export function getCoverCaption(post: BlogPost): { title: string; subtitle: string } {
  const bySlug: Record<string, { title: string; subtitle: string }> = {
    "semanticheskoe-yadro": {
      title: "Собираем семантическое ядро сайта правильно",
      subtitle: "Как подобрать ключевые слова",
    },
    "seo-struktura-sayta": {
      title: "SEO-структура сайта",
      subtitle: "Иерархия, кластеры и перелинковка",
    },
    "tehnicheskiy-seo-audit": {
      title: "Технический SEO-аудит",
      subtitle: "Цели, задачи и самостоятельный запуск",
    },
  };
  return (
    bySlug[post.slug] ?? {
      title: post.title,
      subtitle: post.excerpt.slice(0, 90),
    }
  );
}

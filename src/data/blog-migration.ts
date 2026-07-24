import { blogPosts } from "./blog";

/**
 * Сводка из docs/BLOG-MIGRATION-CHECKLIST.md.
 *
 * Два разных счётчика:
 * - `migrated` — контент уже на Astro (текст + обложка)
 * - `newFormat` — статьи, которые уже сверстали в целевом «новом формате»
 *   (чеклист + квиз + вычитка; см. docs/BLOG-ARTICLE-STANDARD.md)
 *
 * totals — из чеклиста (old WP), обновлять при пересборке чеклиста.
 */
export const blogMigrationTotals = {
  /** Всего записей post в old WP */
  dbTotal: 830,
  /** Пригодных к переносу (≥800 симв., slug+title) */
  eligible: 813,
  /** Пустые / битые / дубли */
  skip: 17,
} as const;

/**
 * Slug статей, уже переведённых в целевой новый формат вёрстки.
 */
export const blogNewFormatSlugs: string[] = [
  "semanticheskoe-yadro",
  "seo-struktura-sayta",
  "tehnicheskiy-seo-audit",
  "chastotnost-zaprosov",
  "sohranennaya-kopiya-yandex",
  "avtonapolnenie-sayta",
  "podozritelnyy-trafik-google",
  "oformlenie-stranicy-instagram",
  "pryamoy-efir-instagram",
  "kommentarii-v-pablike-vk",
  "istorii-vkontakte",
  "menedzher-smm",
  "zarabotok-blogerov-instagram",
  "bloger-dlya-reklamy-instagram",
  "reklama-v-pablikah-vk",
  "gipertekst",
  "biznes-akkaunt-instagram",
  "verstka-saytov",
  "kontent-plan-instagram",
  "avatar-youtube",
  "avatar-instagram",
  "veb-server",
  "didzhital-agentstvo",
  "opisanie-youtube-kanala",
  "post-instagram",
  "raskrutka-youtube",
  "kopirayting",
  "nakrutka-laykov-instagram",
  "besplatnoe-razmeshchenie-statey",
  "reklama-instagram",
  "ssl-sertifikat",
  "dashboard",
  "parol-instagram",
  "prodvizhenie-internet-magazina",
  "prodazha-trafika",
  "parsing",
  "klikabelnaya-ssylka",
  "raskrutka-gruppy-vk",
  "zaspamlennost-teksta",
  "kontent-plan",
  "yukassa",
  "analiz-konkurentov",
  "prodayushchie-teksty",
  "domen-pervogo-urovnya",
  "statistika-instagram",
];
/** Основная рубрика в чеклисте (эвристика по WP) */
export const blogMigrationByCategory: { name: string; count: number }[] = [
  { name: "SEO", count: 297 },
  { name: "Интернет-маркетинг", count: 155 },
  { name: "Медиа сервисы", count: 95 },
  { name: "SMM", count: 94 },
  { name: "Блог", count: 52 },
  { name: "Контент-маркетинг", count: 51 },
  { name: "Контекстная реклама", count: 46 },
  { name: "E-mail маркетинг", count: 13 },
  { name: "Продвижение в картах и справочниках", count: 5 },
  { name: "Наши Сервисы", count: 3 },
  { name: "Без рубрики", count: 2 },
];

export function getBlogMigrationProgress() {
  const migrated = blogPosts.length;
  const newFormatSet = new Set(blogNewFormatSlugs);
  const newFormat = blogPosts.filter((p) => newFormatSet.has(p.slug)).length;
  const { eligible, skip, dbTotal } = blogMigrationTotals;
  const left = Math.max(0, eligible - migrated);
  const migratePct =
    eligible > 0 ? Math.min(100, Math.round((migrated / eligible) * 1000) / 10) : 0;
  const formatPct =
    eligible > 0 ? Math.min(100, Math.round((newFormat / eligible) * 1000) / 10) : 0;

  return {
    migrated,
    newFormat,
    left,
    eligible,
    skip,
    dbTotal,
    migratePct,
    formatPct,
    /** @deprecated use migrated */
    done: migrated,
    /** @deprecated use migratePct */
    pct: migratePct,
    byCategory: blogMigrationByCategory,
  };
}

import semanticheskoeYadro from "./blog-posts/semanticheskoe-yadro.json";
import seoStrukturaSayta from "./blog-posts/seo-struktura-sayta.json";
import tehnicheskiySeoAudit from "./blog-posts/tehnicheskiy-seo-audit.json";
import chastotnostZaprosov from "./blog-posts/chastotnost-zaprosov.json";
import sohranennayaKopiyaYandex from "./blog-posts/sohranennaya-kopiya-yandex.json";
import avtonapolnenieSayta from "./blog-posts/avtonapolnenie-sayta.json";
import podozritelnyyTrafikGoogle from "./blog-posts/podozritelnyy-trafik-google.json";
import oformlenieStranicyInstagram from "./blog-posts/oformlenie-stranicy-instagram.json";
import pryamoyEfirInstagram from "./blog-posts/pryamoy-efir-instagram.json";
import kommentariiVPablikeVk from "./blog-posts/kommentarii-v-pablike-vk.json";
import istoriiVkontakte from "./blog-posts/istorii-vkontakte.json";
import menedzherSmm from "./blog-posts/menedzher-smm.json";
import zarabotokBlogerovInstagram from "./blog-posts/zarabotok-blogerov-instagram.json";
import blogerDlyaReklamyInstagram from "./blog-posts/bloger-dlya-reklamy-instagram.json";
import reklamaVPablikahVk from "./blog-posts/reklama-v-pablikah-vk.json";
import gipertekst from "./blog-posts/gipertekst.json";
import biznesAkkauntInstagram from "./blog-posts/biznes-akkaunt-instagram.json";
import verstkaSaytov from "./blog-posts/verstka-saytov.json";
import kontentPlanInstagram from "./blog-posts/kontent-plan-instagram.json";
import avatarYoutube from "./blog-posts/avatar-youtube.json";
import avatarInstagram from "./blog-posts/avatar-instagram.json";
import vebServer from "./blog-posts/veb-server.json";
import didzhitalAgentstvo from "./blog-posts/didzhital-agentstvo.json";
import opisanieYoutubeKanala from "./blog-posts/opisanie-youtube-kanala.json";
import postInstagram from "./blog-posts/post-instagram.json";
import raskrutkaYoutube from "./blog-posts/raskrutka-youtube.json";
import kopirayting from "./blog-posts/kopirayting.json";
import nakrutkaLaykovInstagram from "./blog-posts/nakrutka-laykov-instagram.json";
import besplatnoeRazmeshchenieStatey from "./blog-posts/besplatnoe-razmeshchenie-statey.json";
import reklamaInstagram from "./blog-posts/reklama-instagram.json";
import sslSertifikat from "./blog-posts/ssl-sertifikat.json";
import dashboard from "./blog-posts/dashboard.json";
import parolInstagram from "./blog-posts/parol-instagram.json";
import prodvizhenieInternetMagazina from "./blog-posts/prodvizhenie-internet-magazina.json";
import prodazhaTrafika from "./blog-posts/prodazha-trafika.json";
import parsing from "./blog-posts/parsing.json";
import klikabelnayaSsylka from "./blog-posts/klikabelnaya-ssylka.json";
import raskrutkaGruppyVk from "./blog-posts/raskrutka-gruppy-vk.json";
import zaspamlennostTeksta from "./blog-posts/zaspamlennost-teksta.json";
import kontentPlan from "./blog-posts/kontent-plan.json";
import yukassa from "./blog-posts/yukassa.json";
import analizKonkurentov from "./blog-posts/analiz-konkurentov.json";
import prodayushchieTeksty from "./blog-posts/prodayushchie-teksty.json";
import domenPervogoUrovnya from "./blog-posts/domen-pervogo-urovnya.json";
import statistikaInstagram from "./blog-posts/statistika-instagram.json";

export type BlogListItem = {
  intro?: string | null;
  items: string[];
};

export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type BlogNote = {
  title: string;
  text: string;
  /** tip (default) | legal — правовой дисклеймер, как vc_message на old WP */
  kind?: "tip" | "legal";
};

export type BlogLegalNotice = {
  title?: string;
  text: string;
};

export type BlogFaqItem = {
  q: string;
  a: string;
};

export type BlogSection = {
  title: string;
  level: number;
  paras: string[];
  lists: BlogListItem[];
  tables?: BlogTable[];
  notes?: BlogNote[];
  links?: { label: string; href: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  lead: string[];
  /** Выделенный правовой дисклеймер (Meta / Instagram / Facebook / WhatsApp и т.п.) */
  legalNotice?: BlogLegalNotice;
  sections: BlogSection[];
  faq?: BlogFaqItem[];
};

/**
 * Стандартный дисклеймер по продуктам Meta (как розовый vc_message на old WP).
 * Обязателен в статьях про Instagram / Facebook / WhatsApp.
 */
export function metaProductsLegalNotice(
  products: Array<"Instagram" | "Facebook" | "WhatsApp"> = [
    "Instagram",
    "Facebook",
    "WhatsApp",
  ],
): BlogLegalNotice {
  const labeled = products.map((p) => `${p}*`).join(", ");
  const productWord = products.length === 1 ? "продукт" : "продукты";
  const serviceWord = products.length === 1 ? "сервиса" : "сервисов";
  return {
    title: "Уважаемые пользователи!",
    text: `Данная статья информационная и не содержит призывов к использованию платформы. ${labeled} — ${productWord} Meta Platforms Inc.; на территории РФ деятельность Meta признана экстремистской, использование ${serviceWord} может повлечь правовые последствия.`,
  };
}

type MetaProduct = "Instagram" | "Facebook" | "WhatsApp";

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

/** Какие продукты Meta упоминаются в тексте / slug статьи */
export function detectMetaProducts(post: BlogPost): MetaProduct[] {
  const chunks = [
    post.slug,
    post.title,
    post.excerpt,
    ...(post.lead ?? []),
    ...(post.faq ?? []).flatMap((f) => [f.q, f.a]),
    ...(post.sections ?? []).flatMap((s) => [
      s.title,
      ...(s.paras ?? []),
      ...(s.lists ?? []).flatMap((l) => [l.intro ?? "", ...(l.items ?? [])]),
      ...(s.notes ?? []).flatMap((n) => [n.title, n.text]),
      // links[] не сканируем: «Ещё по теме» / перекрёстные URL не должны вешать дисклеймер Meta
    ]),
  ];
  const blob = chunks.filter(Boolean).join("\n");
  const found: MetaProduct[] = [];
  if (/instagram|инстаграм/i.test(blob)) found.push("Instagram");
  if (/facebook|фейсбук/i.test(blob)) found.push("Facebook");
  if (/whatsapp|ватсап|вотсап/i.test(blob)) found.push("WhatsApp");
  return found;
}

function sanitizeLegalNotice(
  notice: BlogLegalNotice | undefined,
): BlogLegalNotice | undefined {
  if (!notice?.text) return undefined;
  return {
    title: notice.title ? cleanBlogText(notice.title) : undefined,
    text: cleanBlogText(notice.text),
  };
}

function sanitizePost(post: BlogPost): BlogPost {
  const cleaned: BlogPost = {
    ...post,
    title: cleanBlogText(post.title),
    excerpt: cleanBlogText(post.excerpt),
    lead: (post.lead ?? []).map(cleanBlogText).filter(Boolean),
    legalNotice: sanitizeLegalNotice(post.legalNotice),
    faq: post.faq?.map((item) => ({
      q: cleanBlogText(item.q),
      a: cleanBlogText(item.a),
    })),
    sections: (post.sections ?? []).map((s) => ({
      ...s,
      title: cleanBlogText(s.title),
      paras: (s.paras ?? []).map(cleanBlogText).filter(Boolean),
      lists: (s.lists ?? []).map((list) => ({
        intro: list.intro ? cleanBlogText(list.intro) || null : null,
        items: (list.items ?? []).map(cleanBlogText).filter(Boolean),
      })),
      tables: s.tables?.map((t) => ({
        caption: t.caption ? cleanBlogText(t.caption) : undefined,
        headers: (t.headers ?? []).map(cleanBlogText),
        rows: (t.rows ?? []).map((row) => (row ?? []).map(cleanBlogText)),
      })),
      notes: s.notes?.map((n) => ({
        title: cleanBlogText(n.title),
        text: cleanBlogText(n.text),
        kind: n.kind === "legal" ? "legal" : "tip",
      })),
      links: s.links?.map((l) => ({
        label: cleanBlogText(l.label),
        href: (l.href ?? "").trim(),
      })),
    })),
  };

  if (!cleaned.legalNotice) {
    const products = detectMetaProducts(cleaned);
    if (products.length) {
      cleaned.legalNotice = metaProductsLegalNotice(products);
    }
  }

  return cleaned;
}

/** Newest first */
export const blogPosts: BlogPost[] = [
  sanitizePost(semanticheskoeYadro as BlogPost),
  sanitizePost(seoStrukturaSayta as BlogPost),
  sanitizePost(tehnicheskiySeoAudit as BlogPost),
  sanitizePost(chastotnostZaprosov as BlogPost),
  sanitizePost(sohranennayaKopiyaYandex as BlogPost),
  sanitizePost(avtonapolnenieSayta as BlogPost),
  sanitizePost(podozritelnyyTrafikGoogle as BlogPost),
  sanitizePost(oformlenieStranicyInstagram as BlogPost),
  sanitizePost(pryamoyEfirInstagram as BlogPost),
  sanitizePost(kommentariiVPablikeVk as BlogPost),
  sanitizePost(istoriiVkontakte as BlogPost),
  sanitizePost(menedzherSmm as BlogPost),
  sanitizePost(zarabotokBlogerovInstagram as BlogPost),
  sanitizePost(blogerDlyaReklamyInstagram as BlogPost),
  sanitizePost(reklamaVPablikahVk as BlogPost),
  sanitizePost(gipertekst as BlogPost),
  sanitizePost(biznesAkkauntInstagram as BlogPost),
  sanitizePost(verstkaSaytov as BlogPost),
  sanitizePost(kontentPlanInstagram as BlogPost),
  sanitizePost(avatarYoutube as BlogPost),
  sanitizePost(avatarInstagram as BlogPost),
  sanitizePost(vebServer as BlogPost),
  sanitizePost(didzhitalAgentstvo as BlogPost),
  sanitizePost(opisanieYoutubeKanala as BlogPost),
  sanitizePost(postInstagram as BlogPost),
  sanitizePost(raskrutkaYoutube as BlogPost),
  sanitizePost(kopirayting as BlogPost),
  sanitizePost(nakrutkaLaykovInstagram as BlogPost),
  sanitizePost(besplatnoeRazmeshchenieStatey as BlogPost),
  sanitizePost(reklamaInstagram as BlogPost),
  sanitizePost(sslSertifikat as BlogPost),
  sanitizePost(dashboard as BlogPost),
  sanitizePost(parolInstagram as BlogPost),
  sanitizePost(prodvizhenieInternetMagazina as BlogPost),
  sanitizePost(prodazhaTrafika as BlogPost),
  sanitizePost(parsing as BlogPost),
  sanitizePost(klikabelnayaSsylka as BlogPost),
  sanitizePost(raskrutkaGruppyVk as BlogPost),
  sanitizePost(zaspamlennostTeksta as BlogPost),
  sanitizePost(kontentPlan as BlogPost),
  sanitizePost(yukassa as BlogPost),
  sanitizePost(analizKonkurentov as BlogPost),
  sanitizePost(prodayushchieTeksty as BlogPost),
  sanitizePost(domenPervogoUrovnya as BlogPost),
  sanitizePost(statistikaInstagram as BlogPost),
].sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
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
  if (post.legalNotice) {
    if (post.legalNotice.title) parts.push(post.legalNotice.title);
    parts.push(post.legalNotice.text);
  }
  for (const s of post.sections) {
    parts.push(s.title, ...s.paras);
    for (const list of s.lists) {
      if (list.intro) parts.push(list.intro);
      parts.push(...list.items);
    }
    for (const table of s.tables ?? []) {
      if (table.caption) parts.push(table.caption);
      parts.push(...table.headers);
      for (const row of table.rows) parts.push(...row);
    }
    for (const note of s.notes ?? []) {
      parts.push(note.title, note.text);
    }
  }
  for (const item of post.faq ?? []) {
    parts.push(item.q, item.a);
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
      text: "Разберём нишу, объём ядра и приоритет посадочных на коротком созвоне — без обязательств.",
    },
    "seo-struktura-sayta": {
      title: "Нужна структура сайта под SEO?",
      text: "Разберём иерархию, кластеры и глубину посадочных под вашу нишу — на коротком созвоне.",
    },
    "tehnicheskiy-seo-audit": {
      title: "Нужен технический SEO-аудит?",
      text: "Приоритизируем критичные ошибки индексации и скорости — что чинить первым, что можно позже.",
    },
    "chastotnost-zaprosov": {
      title: "Нужна семантика с нормальной частотностью?",
      text: "Соберём маркеры, снимем Wordstat и приоритизируем кластеры под ваши посадочные.",
    },
    "sohranennaya-kopiya-yandex": {
      title: "Нужна проверка индексации и техники?",
      text: "Разберём, что реально мешает обходу и кэшу — и что чинить в первую очередь.",
    },
    "avtonapolnenie-sayta": {
      title: "Нужен контент под SEO без автохлама?",
      text: "Соберём кластеры и редакционный план — тексты под посадочные, а не граббер ради объёма.",
    },
    "podozritelnyy-trafik-google": {
      title: "Нужна диагностика техники сайта?",
      text: "Проверим индекс, доступность и следы взлома — если капча Google оказалась симптомом большей проблемы.",
    },
    "oformlenie-stranicy-instagram": {
      title: "Нужен SMM под ваш бренд?",
      text: "Соберём визуальную концепцию и контент-рамку — без хаоса в ленте и с понятным оффером в шапке.",
    },
    "pryamoy-efir-instagram": {
      title: "Нужна стратегия контента и эфиров?",
      text: "Разберём цели, сценарии и регулярность — что снимать, чтобы эфиры вели к заявкам.",
    },
    "kommentarii-v-pablike-vk": {
      title: "Нужна модерация и SMM для VK?",
      text: "Настроим правила сообщества, ответы и контент так, чтобы комментарии работали на заявки, а не на хаос.",
    },
    "istorii-vkontakte": {
      title: "Нужен контент-план для VK?",
      text: "Соберём рубрики для стены и историй — с частотой и CTA под ваш бизнес.",
    },
    "menedzher-smm": {
      title: "Нужен SMM в команду или на аутсорс?",
      text: "Разберём задачи, KPI и формат работы — штат, подряд или сопровождение агентства.",
    },
    "zarabotok-blogerov-instagram": {
      title: "Нужна реклама у блогеров под ключ?",
      text: "Подберём площадки и форматы под оффер — с акцентом на аудиторию и измеримый результат.",
    },
    "bloger-dlya-reklamy-instagram": {
      title: "Нужен подбор блогеров под задачу?",
      text: "Соберём short-list, проверим аудиторию и согласуем интеграции с понятным замером.",
    },
    "reklama-v-pablikah-vk": {
      title: "Нужны посевы и SMM во ВКонтакте?",
      text: "Подберём паблики, креатив и замер — без оплаты «мёртвых» баз.",
    },
    "gipertekst": {
      title: "Нужна структура и перелинковка сайта?",
      text: "Разберём маршруты пользователя и внутренние ссылки — чтобы страницы вели к заявке.",
    },
    "biznes-akkaunt-instagram": {
      title: "Нужен SMM с нормальной аналитикой?",
      text: "Настроим профиль, контент и отчётность — чтобы статистика вела к заявкам, а не к «лайкам ради лайков».",
    },
    "verstka-saytov": {
      title: "Нужна вёрстка или доработка фронта?",
      text: "Соберём адаптивные страницы по макету — с упором на скорость, семантику и сдачу без сюрпризов.",
    },
    "kontent-plan-instagram": {
      title: "Нужен контент-план под заявки?",
      text: "Соберём рубрики, пропорции и календарь на месяц — без хаоса и сплошных продающих постов.",
    },
    "avatar-youtube": {
      title: "Нужен визуал для YouTube-канала?",
      text: "Соберём аватар, баннер и единый стиль превью — чтобы канал узнавали с первого кадра.",
    },
    "avatar-instagram": {
      title: "Нужна упаковка профиля в Instagram?",
      text: "Соберём аватар, шапку и визуальную константу ленты под ваш оффер.",
    },
    "veb-server": {
      title: "Нужен аудит хостинга и доступности сайта?",
      text: "Проверим ответы сервера, HTTPS и узкие места — чтобы техника не съедала SEO и рекламу.",
    },
    "didzhital-agentstvo": {
      title: "Нужен подрядчик под digital?",
      text: "Разберём задачи, KPI и формат работы — SEO, реклама, сайт или комплекс.",
    },
    "opisanie-youtube-kanala": {
      title: "Нужен текст и упаковка YouTube-канала?",
      text: "Соберём описание, ссылки и единый стиль с аватаром — чтобы зритель сразу понял оффер.",
    },
    "post-instagram": {
      title: "Нужны продающие посты под заявки?",
      text: "Соберём офферы, структуру и CTA — в связке с контент-планом и оформлением профиля.",
    },
    "raskrutka-youtube": {
      title: "Нужен рост YouTube-канала?",
      text: "Соберём нишу, контент-план и упаковку канала — без обещаний «вирус за неделю».",
    },
    "kopirayting": {
      title: "Нужны тексты под задачи сайта?",
      text: "Напишем или вычитаем посадочные, статьи и коммерческие блоки — с брифом и критериями приёмки.",
    },
    "nakrutka-laykov-instagram": {
      title: "Нужен честный рост в Instagram?",
      text: "Соберём контент и продвижение без ботов — с метриками, которые важны бизнесу.",
    },
    "besplatnoe-razmeshchenie-statey": {
      title: "Нужны гостевые публикации и контент-план?",
      text: "Подберём темы, площадки и тексты под трафик и аккуратный ссылочный рост.",
    },
    "reklama-instagram": {
      title: "Нужна реклама в Instagram под заявки?",
      text: "Разберём связку таргет + авторы, бюджет и метрики — без масслайкинга и пустых охватов.",
    },
    "ssl-sertifikat": {
      title: "Нужен HTTPS и аудит техники сайта?",
      text: "Проверим сертификат, редиректы и смешанный контент — чтобы замок в браузере не врал.",
    },
    "dashboard": {
      title: "Нужна сводка метрик для команды?",
      text: "Соберём дашборд под ваши KPI — реклама, сайт, CRM — без лишних виджетов.",
    },
    "parol-instagram": {
      title: "Нужна упаковка и безопасность соцсетей бренда?",
      text: "Поможем с процессами доступа, контентом и продвижением — без передачи паролей третьим лицам.",
    },
    "prodvizhenie-internet-magazina": {
      title: "Нужно SEO для интернет-магазина?",
      text: "Разберём каталог, технику и семантику — с реалистичными сроками по позициям.",
    },
    "prodazha-trafika": {
      title: "Нужна монетизация или рост трафика?",
      text: "Подскажем модель под вашу площадку — без агрессивных форматов, которые убивают аудиторию.",
    },
    "parsing": {
      title: "Нужен аудит конкурентов или каталога?",
      text: "Соберём легальную картину рынка и план работ — без серого копирования контента.",
    },
    "klikabelnaya-ssylka": {
      title: "Нужна перелинковка и структура сайта?",
      text: "Настроим понятные переходы и анкоры — чтобы пользователь и поиск находили нужные страницы.",
    },
    "raskrutka-gruppy-vk": {
      title: "Нужен рост сообщества ВКонтакте?",
      text: "Соберём оформление, контент-план и каналы привлечения — без накрутки подписчиков.",
    },
    "zaspamlennost-teksta": {
      title: "Нужна вычитка SEO-текстов?",
      text: "Приведём ключи к норме и читаемости — без воды и переспама.",
    },
    "kontent-plan": {
      title: "Нужен контент-план для сайта и каналов?",
      text: "Соберём рубрики, график и зоны ответственности — без хаоса в публикациях.",
    },
    "yukassa": {
      title: "Нужен приём оплат на сайте?",
      text: "Подскажем связку магазин + платежи + касса под вашу схему — с опорой на актуальные тарифы.",
    },
    "analiz-konkurentov": {
      title: "Нужен разбор конкурентов в нише?",
      text: "Соберём срез видимости, трафика и гипотез для вашего плана — без копирования чужих текстов.",
    },
    "prodayushchie-teksty": {
      title: "Нужны тексты, которые приводят к заявке?",
      text: "Напишем оффер, структуру и CTA под вашу аудиторию — с фактами, без штампов.",
    },
    "domen-pervogo-urovnya": {
      title: "Нужна помощь с доменом и запуском сайта?",
      text: "Подскажем зону, DNS и связку с хостингом — без мифов «зона = ТОП».",
    },
    "statistika-instagram": {
      title: "Нужен SMM с опорой на цифры?",
      text: "Соберём контент и отчётность по охвату, сохранениям и заявкам — не только по лайкам.",
    },
  };
  if (bySlug[post.slug]) return bySlug[post.slug];
  if (post.category === "SEO") {
    return {
      title: "Нужен SEO под ваш сайт?",
      text: "Разберём нишу и предложим план работ — без лишней воды.",
    };
  }
  if (post.category === "SMM") {
    return {
      title: "Нужен SMM?",
      text: "Разберём задачи канала и предложим понятный план контента.",
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
    "chastotnost-zaprosov": {
      title: "Частотность запросов",
      subtitle: "ВЧ, СЧ, НЧ и операторы Wordstat",
    },
    "sohranennaya-kopiya-yandex": {
      title: "Сохранённая копия Яндекса",
      subtitle: "Кэш страницы: зачем и как открыть",
    },
    "avtonapolnenie-sayta": {
      title: "Автонаполнение сайта",
      subtitle: "Как работает и где вредит SEO",
    },
    "podozritelnyy-trafik-google": {
      title: "Подозрительный трафик Google",
      subtitle: "Капча, причины и что делать",
    },
    "oformlenie-stranicy-instagram": {
      title: "Оформление Instagram",
      subtitle: "Визуал, шапка и единый стиль",
    },
    "pryamoy-efir-instagram": {
      title: "Прямой эфир Instagram",
      subtitle: "Подготовка, ведение, разбор",
    },
    "kommentarii-v-pablike-vk": {
      title: "Комментарии в VK",
      subtitle: "Стена, фильтры, модерация",
    },
    "istorii-vkontakte": {
      title: "Истории ВКонтакте",
      subtitle: "Публикация и идеи для бизнеса",
    },
    "menedzher-smm": {
      title: "SMM-менеджер",
      subtitle: "Обязанности, навыки, вход в профессию",
    },
    "zarabotok-blogerov-instagram": {
      title: "Заработок блогеров",
      subtitle: "Модели дохода и ориентиры",
    },
    "bloger-dlya-reklamy-instagram": {
      title: "Блогер для рекламы",
      subtitle: "Поиск и проверка профиля",
    },
    "reklama-v-pablikah-vk": {
      title: "Реклама в пабликах VK",
      subtitle: "Отбор сообществ и посевы",
    },
    "gipertekst": {
      title: "Гипертекст",
      subtitle: "Ссылки, HTML и навигация",
    },
    "biznes-akkaunt-instagram": {
      title: "Бизнес-аккаунт Instagram",
      subtitle: "Режим, статистика, контакты",
    },
    "verstka-saytov": {
      title: "Вёрстка сайтов",
      subtitle: "HTML/CSS, этапы, приёмка",
    },
    "kontent-plan-instagram": {
      title: "Контент-план Instagram",
      subtitle: "Рубрики, сетка, расписание",
    },
    "avatar-youtube": {
      title: "Аватар YouTube",
      subtitle: "Значок канала: идеи и установка",
    },
    "avatar-instagram": {
      title: "Аватар Instagram",
      subtitle: "Фото, логотип, читаемость в круге",
    },
    "veb-server": {
      title: "Веб-сервер",
      subtitle: "HTTP, хостинг, Apache/Nginx",
    },
    "didzhital-agentstvo": {
      title: "Digital-агентство",
      subtitle: "Услуги, отличие, как выбрать",
    },
    "opisanie-youtube-kanala": {
      title: "Описание YouTube",
      subtitle: "Первые строки, ключи, ссылки",
    },
    "post-instagram": {
      title: "Продающий пост Instagram",
      subtitle: "Структура, заголовок, CTA",
    },
    "raskrutka-youtube": {
      title: "Раскрутка YouTube",
      subtitle: "Ниша, ролики, рост канала",
    },
    "kopirayting": {
      title: "Копирайтинг",
      subtitle: "Виды текстов и работа с автором",
    },
    "nakrutka-laykov-instagram": {
      title: "Накрутка лайков",
      subtitle: "Риски ботов и живые альтернативы",
    },
    "besplatnoe-razmeshchenie-statey": {
      title: "Гостевые статьи",
      subtitle: "Бесплатные площадки и подготовка",
    },
    "reklama-instagram": {
      title: "Реклама Instagram",
      subtitle: "Таргет, блогеры, метрики",
    },
    "ssl-sertifikat": {
      title: "SSL-сертификат",
      subtitle: "HTTPS, виды, Let's Encrypt",
    },
    "dashboard": {
      title: "Дашборд",
      subtitle: "Метрики в одной панели",
    },
    "parol-instagram": {
      title: "Пароль Instagram",
      subtitle: "Сброс доступа и защита",
    },
    "prodvizhenie-internet-magazina": {
      title: "SEO интернет-магазина",
      subtitle: "Каталог, карточки, коммерция",
    },
    "prodazha-trafika": {
      title: "Продажа трафика",
      subtitle: "CPC, CPM, CPA и форматы",
    },
    "parsing": {
      title: "Парсинг данных",
      subtitle: "Сбор, сценарии, границы",
    },
    "klikabelnaya-ssylka": {
      title: "Кликабельная ссылка",
      subtitle: "HTML, CMS и анкоры",
    },
    "raskrutka-gruppy-vk": {
      title: "Раскрутка группы VK",
      subtitle: "Старт, контент, живой рост",
    },
    "zaspamlennost-teksta": {
      title: "Заспамленность текста",
      subtitle: "Переспам, тошнота, правки",
    },
    "kontent-plan": {
      title: "Контент-план",
      subtitle: "Рубрики, график, команда",
    },
    "yukassa": {
      title: "ЮKassa",
      subtitle: "Онлайн-платежи для бизнеса",
    },
    "analiz-konkurentov": {
      title: "Анализ конкурентов",
      subtitle: "Трафик, видимость, сверка",
    },
    "prodayushchie-teksty": {
      title: "Продающие тексты",
      subtitle: "Оффер, структура, CTA",
    },
    "domen-pervogo-urovnya": {
      title: "Домен первого уровня",
      subtitle: "TLD, зоны и влияние на SEO",
    },
    "statistika-instagram": {
      title: "Статистика Instagram",
      subtitle: "Охват, сохранения, аудитория",
    },
  };
  return (
    bySlug[post.slug] ?? {
      title: post.title,
      subtitle: post.excerpt.slice(0, 90),
    }
  );
}

/**
 * Client-side smart blog search:
 * - RU normalize (ё→е)
 * - token + fuzzy (edit distance)
 * - synonyms for SEO/marketing
 * - field weights: title > headings > excerpt > body
 * - snippet with <mark>
 */

export type BlogSearchDoc = {
  slug: string;
  title: string;
  date: string;
  category: string;
  cover: string;
  excerpt: string;
  readingMinutes: number;
  baseViews: number;
  body: string;
  headings: string[];
};

export type BlogSearchHit = {
  doc: BlogSearchDoc;
  score: number;
  snippet: string;
  matchedIn: ("title" | "heading" | "excerpt" | "body")[];
};

const SYNONYMS: Record<string, string[]> = {
  семантика: ["ядро", "ключи", "запросы", "ключевые"],
  ядро: ["семантика", "ключи", "запросы"],
  ключи: ["ключевые", "запросы", "семантика", "ядро"],
  ключевые: ["ключи", "запросы", "семантика"],
  seo: ["сео", "продвижение", "оптимизация", "поисковое"],
  сео: ["seo", "продвижение", "оптимизация"],
  продвижение: ["seo", "сео", "трафик", "позиции"],
  аудит: ["проверка", "анализ", "техника", "технический"],
  технический: ["аудит", "техника", "индексация"],
  структура: ["иерархия", "разделы", "архитектура", "перелинковка"],
  иерархия: ["структура", "древовидная", "разделы"],
  индексация: ["индекс", "робот", "поисковик"],
  яндекс: ["yandex", "поиск"],
  google: ["гугл", "поиск"],
  контент: ["текст", "статьи", "наполнение"],
  юзабилити: ["удобство", "ux", "интерфейс"],
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9\s-]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s: string): string[] {
  return normalize(s).split(" ").filter((t) => t.length > 1);
}

function expandQuery(qTokens: string[]): string[] {
  const out = new Set<string>(qTokens);
  for (const t of qTokens) {
    const syn = SYNONYMS[t];
    if (syn) syn.forEach((x) => out.add(normalize(x)));
    for (const [k, vals] of Object.entries(SYNONYMS)) {
      if (vals.some((v) => normalize(v) === t)) out.add(k);
    }
  }
  return [...out];
}

function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  if (Math.abs(a.length - b.length) > 2) return 99;
  const prev = new Array(b.length + 1);
  const cur = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    cur[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
  }
  return prev[b.length];
}

function tokenScore(queryTok: string, hayTok: string): number {
  if (hayTok === queryTok) return 1;
  if (queryTok.length >= 3 && hayTok.startsWith(queryTok)) {
    const rest = hayTok.slice(queryTok.length);
    // allow short RU endings; block «аудит»→«аудитории»
    if (!rest) return 1;
    if (rest.length <= 3 && /^(а|у|е|ы|и|ом|ов|ам|ами|ах|ный|ная|ное|ные|ия|ий|ие)?$/i.test(rest)) {
      return 0.85;
    }
    return 0;
  }
  if (hayTok.length >= 4 && queryTok.startsWith(hayTok)) {
    const rest = queryTok.slice(hayTok.length);
    if (!rest || (rest.length <= 3 && /^(а|у|е|ы|и|ом|ов|ам|ами|ах|ный|ная|ное|ные|ия|ий|ие)?$/i.test(rest))) {
      return 0.55;
    }
    return 0;
  }
  if (queryTok.length >= 4 && hayTok.length >= 4) {
    const d = editDistance(queryTok, hayTok);
    if (d === 1) return 0.55;
    if (d === 2 && queryTok.length >= 6) return 0.35;
  }
  return 0;
}

function fieldMatchScore(queryExpanded: string[], fieldText: string): number {
  const hay = tokens(fieldText);
  if (!hay.length) return 0;
  let total = 0;
  for (const qt of queryExpanded) {
    let best = 0;
    for (const ht of hay) {
      best = Math.max(best, tokenScore(qt, ht));
      if (best === 1) break;
    }
    total += best;
  }
  return total / queryExpanded.length;
}

function phraseBoost(query: string, text: string): number {
  const nq = normalize(query);
  const nt = normalize(text);
  if (!nq || nq.length < 3) return 0;
  if (nt.includes(nq)) return 0.35;
  return 0;
}

function makeSnippet(body: string, queryTokens: string[], excerpt: string): string {
  const plain = body.replace(/\s+/g, " ").trim();
  if (!plain) return excerpt;

  const lower = normalize(plain);
  let bestIdx = -1;
  let bestTok = "";
  for (const t of queryTokens) {
    if (t.length < 2) continue;
    const idx = lower.indexOf(t);
    if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
      bestIdx = idx;
      bestTok = t;
    }
  }

  let slice: string;
  if (bestIdx === -1) {
    slice = plain.slice(0, 160);
  } else {
    const start = Math.max(0, bestIdx - 40);
    const end = Math.min(plain.length, bestIdx + bestTok.length + 120);
    slice = (start > 0 ? "…" : "") + plain.slice(start, end) + (end < plain.length ? "…" : "");
  }

  // highlight tokens (original case preserved as much as possible)
  let html = escapeHtml(slice);
  const uniq = [...new Set(queryTokens.filter((t) => t.length > 2))].sort(
    (a, b) => b.length - a.length,
  );
  for (const t of uniq) {
    const re = new RegExp(`(?<![A-Za-zА-Яа-яЁё])(${escapeRegExp(t)})(?![A-Za-zА-Яа-яЁё])`, "gi");
    html = html.replace(re, "<mark>$1</mark>");
  }
  return html;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function searchBlog(
  docs: BlogSearchDoc[],
  query: string,
  opts: { category?: string | null; limit?: number } = {},
): BlogSearchHit[] {
  const q = query.trim();
  const cat = opts.category && opts.category !== "all" ? opts.category : null;
  const limit = opts.limit ?? 20;

  let pool = docs;
  if (cat) pool = pool.filter((d) => d.category === cat);

  if (!q) {
    return pool.slice(0, limit).map((doc) => ({
      doc,
      score: 0,
      snippet: escapeHtml(doc.excerpt),
      matchedIn: [],
    }));
  }

  const qTokens = tokens(q);
  if (!qTokens.length) return [];
  const expanded = expandQuery(qTokens);

  const hits: BlogSearchHit[] = [];
  for (const doc of pool) {
    const titleS = fieldMatchScore(expanded, doc.title);
    const headS = fieldMatchScore(expanded, doc.headings.join(" "));
    const excS = fieldMatchScore(expanded, doc.excerpt);
    const bodyS = fieldMatchScore(expanded, doc.body);

    let score =
      titleS * 5 +
      headS * 3.2 +
      excS * 2 +
      bodyS * 1.4 +
      phraseBoost(q, doc.title) * 2 +
      phraseBoost(q, doc.body);

    if (score < 0.28) continue;

    const matchedIn: BlogSearchHit["matchedIn"] = [];
    if (titleS > 0.3) matchedIn.push("title");
    if (headS > 0.3) matchedIn.push("heading");
    if (excS > 0.3) matchedIn.push("excerpt");
    if (bodyS > 0.3) matchedIn.push("body");

    hits.push({
      doc,
      score,
      snippet: makeSnippet(doc.body, expanded, doc.excerpt),
      matchedIn,
    });
  }

  hits.sort((a, b) => b.score - a.score || b.doc.date.localeCompare(a.doc.date));
  return hits.slice(0, limit);
}

export function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")} млн`;
  if (n >= 10_000) return `${Math.round(n / 1000)} тыс.`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")} тыс.`;
  return new Intl.NumberFormat("ru-RU").format(n);
}

export function formatReadingTime(minutes: number): string {
  const n = Math.max(1, minutes);
  return `${n} мин чтения`;
}

const VIEWS_API = "/api/blog-views.php";

export type BlogViewsResponse = {
  slug: string;
  views: number;
  counted?: boolean;
};

/** Read views without incrementing (null if API unavailable). */
export async function fetchBlogViews(slug: string): Promise<number | null> {
  try {
    const res = await fetch(`${VIEWS_API}?slug=${encodeURIComponent(slug)}`, {
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as BlogViewsResponse;
    return typeof data.views === "number" ? data.views : null;
  } catch {
    return null;
  }
}

/**
 * Record a view (server: once per browser/day via cookie) and return total.
 * Returns null if PHP API is missing (e.g. local `astro dev`).
 */
export async function recordBlogView(slug: string): Promise<number | null> {
  try {
    const res = await fetch(VIEWS_API, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as BlogViewsResponse;
    return typeof data.views === "number" ? data.views : null;
  } catch {
    return null;
  }
}

export async function sharePost(opts: {
  title: string;
  text: string;
  url: string;
}): Promise<"native" | "copied" | "failed"> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({
        title: opts.title,
        text: opts.text,
        url: opts.url,
      });
      return "native";
    } catch {
      /* fall through */
    }
  }
  try {
    await navigator.clipboard.writeText(opts.url);
    return "copied";
  } catch {
    return "failed";
  }
}

export function shareUrl(
  network: "tg" | "vk",
  url: string,
  title: string,
): string {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  if (network === "tg") return `https://t.me/share/url?url=${u}&text=${t}`;
  return `https://vk.com/share.php?url=${u}&title=${t}`;
}

import type { BlogPost } from "../../data/blog";
import type { BlogInteractConfig } from "../../data/blog-interact";
import type { Locale } from "../locales";
import { localePathPrefix } from "../locales";
import { blogInteractEn } from "./en-interact";
import { blogTranslationsEn } from "./en-posts";
import { blogTranslationsEs } from "./es-posts";
import { isEnBlogSlug, isEsBlogSlug } from "./slugs";

export { EN_BLOG_SLUGS, ES_BLOG_SLUGS, isEnBlogSlug, isEsBlogSlug } from "./slugs";

export function isBlogTranslated(slug: string, locale: Locale): boolean {
  if (locale === "ru") return true;
  if (locale === "en") return isEnBlogSlug(slug);
  if (locale === "es") return isEsBlogSlug(slug);
  return false;
}

function applyBlogOverlay(overlay: BlogPost, base: BlogPost): BlogPost {
  return {
    ...overlay,
    lead: overlay.lead ?? [],
    faq: overlay.faq ?? [],
    closing: overlay.closing ?? [],
    related: overlay.related ?? base.related ?? [],
    sections: (overlay.sections ?? []).map((s) => ({
      ...s,
      paras: s.paras ?? [],
      lists: s.lists ?? [],
    })),
  };
}

/** Full EN/ES post replaces RU base (EN cover often cover-en.webp). */
export function localizeBlogPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === "ru" || !isBlogTranslated(post.slug, locale)) return post;
  if (locale === "en") {
    const en = blogTranslationsEn[post.slug];
    if (!en) return post;
    return applyBlogOverlay(en, post);
  }
  if (locale === "es") {
    const es = blogTranslationsEs[post.slug];
    if (!es) return post;
    return applyBlogOverlay(es, post);
  }
  return post;
}

export function localizeBlogInteract(
  slug: string,
  locale: Locale,
): BlogInteractConfig | null {
  if (locale === "en") return blogInteractEn[slug] ?? null;
  return null;
}

export function blogPostPath(slug: string, locale: Locale = "ru"): string {
  return `${localePathPrefix(locale)}/blog/${slug}/`;
}

export function blogIndexPath(locale: Locale = "ru"): string {
  return `${localePathPrefix(locale)}/blog/`;
}

export type BlogUiChrome = {
  pageTitleSuffix: string;
  home: string;
  blog: string;
  leaveRequest: string;
  menu: string;
  newFormat: string;
  migrated: string;
  views: string;
  legalKicker: string;
  share: string;
  copyLink: string;
  toc: string;
  faq: string;
  discuss: string;
  earlier: string;
  later: string;
  related: string;
  pagerLabel: string;
  footerTagline: string;
  brand: string;
  rssTitle: string;
};

const uiEn: BlogUiChrome = {
  pageTitleSuffix: "PRIME Blog",
  home: "Home",
  blog: "Blog",
  leaveRequest: "Send a request",
  menu: "Menu",
  newFormat: "New format",
  migrated: "Migrated",
  views: "views",
  legalKicker: "Legal notice",
  share: "Share",
  copyLink: "Copy link",
  toc: "Contents",
  faq: "FAQ",
  discuss: "Discuss the task",
  earlier: "Earlier",
  later: "Next",
  related: "More on this topic",
  pagerLabel: "Other articles",
  footerTagline: "Blog · SEO · marketing",
  brand: "PRIME",
  rssTitle: "PRIME Blog",
};

const uiEs: BlogUiChrome = {
  pageTitleSuffix: "Blog de PRIME",
  home: "Inicio",
  blog: "Blog",
  leaveRequest: "Enviar solicitud",
  menu: "Menú",
  newFormat: "Formato nuevo",
  migrated: "Migrado",
  views: "visitas",
  legalKicker: "Aviso legal",
  share: "Compartir",
  copyLink: "Copiar enlace",
  toc: "Contenido",
  faq: "FAQ",
  discuss: "Hablar del proyecto",
  earlier: "Anterior",
  later: "Siguiente",
  related: "Más sobre el tema",
  pagerLabel: "Otros artículos",
  footerTagline: "Blog · SEO · marketing",
  brand: "PRIME",
  rssTitle: "Blog de PRIME",
};

const uiRu: BlogUiChrome = {
  pageTitleSuffix: "Блог ПРАЙМ",
  home: "Главная",
  blog: "Блог",
  leaveRequest: "Оставить заявку",
  menu: "Меню",
  newFormat: "Новый формат",
  migrated: "Перенос",
  views: "просмотров",
  legalKicker: "Правовая информация",
  share: "Поделиться",
  copyLink: "Скопировать ссылку",
  toc: "Содержание",
  faq: "Частые вопросы",
  discuss: "Обсудить задачу",
  earlier: "Ранее",
  later: "Далее",
  related: "Ещё по теме",
  pagerLabel: "Другие статьи",
  footerTagline: "Блог · SEO · маркетинг",
  brand: "ПРАЙМ",
  rssTitle: "Блог ПРАЙМ",
};

export function blogUi(locale: Locale): BlogUiChrome {
  if (locale === "en") return uiEn;
  if (locale === "es") return uiEs;
  return uiRu;
}

export function formatReadingTimeLocale(minutes: number, locale: Locale): string {
  const n = Math.max(1, minutes);
  if (locale === "en") return `${n} min read`;
  if (locale === "es") return `${n} min de lectura`;
  return `${n} мин чтения`;
}

export function formatViewsLocale(n: number, locale: Locale): string {
  if (locale === "en") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")}M`;
    if (n >= 10_000) return `${Math.round(n / 1000)}k`;
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
    return new Intl.NumberFormat("en-US").format(n);
  }
  if (locale === "es") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")} M`;
    if (n >= 10_000) return `${Math.round(n / 1000)} mil`;
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")} mil`;
    return new Intl.NumberFormat("es-ES").format(n);
  }
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")} млн`;
  if (n >= 10_000) return `${Math.round(n / 1000)} тыс.`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")} тыс.`;
  return new Intl.NumberFormat("ru-RU").format(n);
}

export {
  blogIndexI18n,
  pluralArticlesLocale,
  type BlogIndexI18n,
} from "./index-i18n";

const articleCtaEn: Record<string, { title: string; text: string }> = {
  "oformlenie-stranicy-instagram": {
    title: "Need SMM for your brand?",
    text: "We’ll build a visual concept and content frame — no feed chaos, with a clear offer in the header.",
  },
  "pryamoy-efir-instagram": {
    title: "Need a content and live-stream strategy?",
    text: "We’ll map goals, scripts, and cadence — what to shoot so lives turn into leads.",
  },
  "semanticheskoe-yadro": {
    title: "Need semantics for your site?",
    text: "We’ll review the niche, core size, and landing priorities on a short call — no commitment.",
  },
  "kommentarii-v-pablike-vk": {
    title: "Need moderation and SMM for VK?",
    text: "We’ll set community rules, replies, and content so comments drive leads — not chaos.",
  },
  "istorii-vkontakte": {
    title: "Need a content plan for VK?",
    text: "We’ll build wall and Stories rubrics — with cadence and CTAs for your business.",
  },
  "avtonapolnenie-sayta": {
    title: "Need SEO content without auto junk?",
    text: "We’ll build clusters and an editorial plan — copy for landings, not a grabber for volume.",
  },
  "menedzher-smm": {
    title: "Need SMM on staff or outsourced?",
    text: "We’ll map tasks, KPIs, and work format — in-house, contractor, or agency support.",
  },
  "zarabotok-blogerov-instagram": {
    title: "Need turnkey creator advertising?",
    text: "We’ll pick platforms and formats for your offer — with focus on audience and measurable results.",
  },
  "bloger-dlya-reklamy-instagram": {
    title: "Need creators matched to your brief?",
    text: "We’ll build a short-list, vet the audience, and align integrations with clear measurement.",
  },
  "reklama-v-pablikah-vk": {
    title: "Need VK community seeding and SMM?",
    text: "We’ll pick communities, creative, and measurement — without paying for dead bases.",
  },
  "gipertekst": {
    title: "Need site structure and internal linking?",
    text: "We’ll map user routes and internal links — so pages lead to a lead form.",
  },
  "biznes-akkaunt-instagram": {
    title: "Need SMM with real analytics?",
    text: "We’ll set up the profile, content, and reporting — so insights lead to leads, not likes for likes’ sake.",
  },
  "verstka-saytov": {
    title: "Need layout or front-end polish?",
    text: "We’ll build responsive pages from the mockup — with focus on speed, semantics, and handoff without surprises.",
  },
  "kontent-plan-instagram": {
    title: "Need a content plan that drives leads?",
    text: "We’ll set rubrics, mix, and a monthly calendar — without chaos or wall-to-wall selling posts.",
  },
  "avatar-youtube": {
    title: "Need visuals for a YouTube channel?",
    text: "We’ll build an avatar, banner, and a unified thumbnail style — so the channel is recognized from the first frame.",
  },
  "avatar-instagram": {
    title: "Need Instagram profile packaging?",
    text: "We’ll build the avatar, header, and a visual feed constant around your offer.",
  },
  "veb-server": {
    title: "Need a hosting and uptime audit?",
    text: "We’ll check server responses, HTTPS, and bottlenecks — so tech doesn’t eat SEO and ads.",
  },
  "didzhital-agentstvo": {
    title: "Need a digital contractor?",
    text: "We’ll map tasks, KPIs, and work format — SEO, ads, site, or a full stack.",
  },
  "opisanie-youtube-kanala": {
    title: "Need YouTube channel copy and packaging?",
    text: "We’ll craft the description, links, and a unified look with the avatar — so viewers get the offer at once.",
  },
  "post-instagram": {
    title: "Need selling posts that drive leads?",
    text: "We’ll build offers, structure, and CTAs — tied to the content plan and profile design.",
  },
  "raskrutka-youtube": {
    title: "Need YouTube channel growth?",
    text: "We’ll set niche, content plan, and channel packaging — without “viral in a week” promises.",
  },
  "kopirayting": {
    title: "Need copy for site jobs?",
    text: "We’ll write or edit landings, articles, and commercial blocks — with a brief and acceptance criteria.",
  },
  "nakrutka-laykov-instagram": {
    title: "Need honest Instagram growth?",
    text: "We’ll build content and promotion without bots — with metrics that matter to the business.",
  },
  "besplatnoe-razmeshchenie-statey": {
    title: "Need guest posts and a content plan?",
    text: "We’ll pick topics, outlets, and copy for traffic and careful link growth.",
  },
  "reklama-instagram": {
    title: "Need Instagram ads that drive leads?",
    text: "We’ll map targeting + creators, budget, and metrics — without mass-liking and empty reach.",
  },
  "ssl-sertifikat": {
    title: "Need HTTPS and a tech site audit?",
    text: "We’ll check the certificate, redirects, and mixed content — so the browser lock isn’t lying.",
  },
  "dashboard": {
    title: "Need a metrics summary for the team?",
    text: "We’ll build a dashboard around your KPIs — ads, site, CRM — without extra widgets.",
  },
  "parol-instagram": {
    title: "Need brand social packaging and security?",
    text: "We’ll help with access processes, content, and promotion — without handing passwords to third parties.",
  },
  "prodvizhenie-internet-magazina": {
    title: "Need SEO for your online store?",
    text: "We’ll map tech, catalog structure, and the core — prep and TOP timelines kept separate, no “launch = TOP” myth.",
  },
  "prodazha-trafika": {
    title: "Need traffic that converts — not just pageviews?",
    text: "We’ll map channels, quality, and monetization without killing UX or selling junk traffic.",
  },
  "parsing": {
    title: "Need competitor and catalog data without gray scraping?",
    text: "We’ll set a clean monitoring process — APIs, samples, and rules — not a dump of someone else’s site.",
  },
  "klikabelnaya-ssylka": {
    title: "Need clean site structure and internal links?",
    text: "We’ll check anchors, templates, and navigation — so every important page is one click away.",
  },
  "raskrutka-gruppy-vk": {
    title: "Need VK community growth without fake followers?",
    text: "We’ll set naming, content cadence, and acquisition — live audience, not empty numbers.",
  },
  "zaspamlennost-teksta": {
    title: "Need SEO copy without keyword stuffing?",
    text: "We’ll review briefs and texts so density stays readable — for people first, then search.",
  },
  "kontent-plan": {
    title: "Need a content plan that the team actually follows?",
    text: "We’ll set formats, rubrics, and a 2–4 week calendar — with owners and a backlog of ideas.",
  },
  yukassa: {
    title: "Need online payments without building acquiring yourself?",
    text: "We’ll help choose a stack for the store — modules, receipts, and a clean checkout path.",
  },
  "analiz-konkurentov": {
    title: "Need a clear read on competitors — not copied guesses?",
    text: "We’ll compare traffic order of magnitude, channels, and strong pages — then turn that into hypotheses for your site.",
  },
  "prodayushchie-teksty": {
    title: "Need sales copy that leads to a clear next step?",
    text: "We’ll frame audience, benefits, proof, and CTA — without fluff or fake discounts.",
  },
  "domen-pervogo-urovnya": {
    title: "Choosing a domain and not sure about the zone?",
    text: "We’ll help pick a pronounceable name and TLD for your audience — without expecting TOP from the zone alone.",
  },
  "statistika-instagram": {
    title: "Need Instagram Insights that tie to leads — not vanity likes?",
    text: "We’ll set a weekly metrics ritual: saves, replies, link taps, and goals in numbers.",
  },
  "stories-instagram-inkognito": {
    title: "Worried about Stories privacy without shady spy apps?",
    text: "We’ll help configure Close Friends and hide lists — and a clean way to watch open competitor content.",
  },
  "forma-obratnoy-svyazi": {
    title: "Need a site form that actually delivers leads?",
    text: "We’ll set short fields, antispam, and delivery to CRM/email — with a reply window the team can keep.",
  },
  "yandeks-toloka": {
    title: "Evaluating crowdsourced labeling for data or AI?",
    text: "We’ll help frame the brief and quality checks — without outdated “$ a day” promises from old guides.",
  },
  "serfing-saytov": {
    title: "Tempted to buy empty visits for “metrics”?",
    text: "We’ll set real channels instead — SEO, ads, content — without auto-surfing noise in analytics.",
  },
  "zakrytie-ot-indeksatsii": {
    title: "Need clean index hygiene without cloaking tricks?",
    text: "We’ll map robots vs noindex vs canonical — so utility URLs and duplicates don’t answer in search.",
  },
  "chto-takoe-ssylka": {
    title: "Need clean internal linking — not bought anchor spam?",
    text: "We’ll map important URLs, anchors, and outbound hygiene — for people and crawl alike.",
  },
  sklikivanie: {
    title: "Suspect click fraud burning the ads budget?",
    text: "We’ll help cut the bleed, read the anomaly combo, and tighten the campaign — without panic guesses.",
  },
  "kartinka-ssylka": {
    title: "Need image links that don’t kill page speed?",
    text: "We’ll wrap banners and logos cleanly — with alt, light files, and no hotlink surprises.",
  },
  "optimizatsiya-konversii": {
    title: "Traffic is fine but leads are thin?",
    text: "We’ll fix the funnel: form, CTA, speed, and trust — measured as CR, not vibes.",
  },
  "seo-s-nulya": {
    title: "Starting SEO and don’t want a “TOP in 30 days” myth?",
    text: "We’ll map a practice path: semantics, tech, content — with real timelines for prep vs rankings.",
  },
  skrinshoty: {
    title: "Need clean screenshots for guides and support?",
    text: "We’ll help set a simple capture ritual — crop, annotate, hide secrets.",
  },
  infografika: {
    title: "Need an infographic that reads on a phone — not pretty noise?",
    text: "We’ll frame one takeaway, the right format, and honest data — then export clean.",
  },
  lid: {
    title: "Leads look cheap but deals don’t follow?",
    text: "We’ll fix the lead definition, CRM handoff, and quality metrics — without buying someone else’s lists.",
  },
  "lichnyy-brend": {
    title: "Need a personal brand that brings leads — not empty followers?",
    text: "We’ll narrow the niche, pick one flagship channel, and set a personal/expert/selling mix.",
  },
  redirekt: {
    title: "Migrating URLs and don’t want redirect chains?",
    text: "We’ll map 301 vs temporary codes, merge https/www, and verify one-hop jumps after deploy.",
  },
  "strayk-youtube": {
    title: "Got a YouTube strike and unsure what type it is?",
    text: "We’ll help read Studio status, separate Guidelines vs copyright, and plan the appeal path.",
  },
  "menedzher-internet-magazina": {
    title: "Need store ops that don’t drop orders between chat and delivery?",
    text: "We’ll tighten CRM discipline, SLA, and the path from request to shipment.",
  },
  "rassylka-vk": {
    title: "Need a legal VK broadcast — not a ban from grey senders?",
    text: "We’ll set community opt-in, official widgets, and a calm send cadence.",
  },
  "viralnyy-ohvat-vk": {
    title: "Want posts that leave the follower bubble?",
    text: "We’ll pick share-worthy topics and formats — without reputation-killing shock content.",
  },
  "url-adres": {
    title: "Need clean readable URLs without keyword spam in the path?",
    text: "We’ll set human-readable slugs, HTTPS/www mirrors, and redirects when addresses change.",
  },
  "privetstvie-sayta": {
    title: "Homepage greets with noise instead of a clear offer?",
    text: "We’ll reshape the first screen, calm popups/chat, and one visible CTA.",
  },
  "top-instagram": {
    title: "Need reach beyond followers — without buying likes?",
    text: "We’ll build a content and ads plan around real saves, comments, and recommendations.",
  },
  "telegram-kanal": {
    title: "Want a Telegram channel that grows without fake subscribers?",
    text: "We’ll set up the channel, content rhythm, and traffic from site, socials, and honest seeding.",
  },
  "optimizatsiya-stranitsy": {
    title: "Landings don’t match the query and Title looks stuffed?",
    text: "We’ll align intent, Title/H1, copy, and internal links — without keyword spam myths.",
  },
  telegram: {
    title: "Need Telegram in the funnel — channel, bot, or both?",
    text: "We’ll pick the format for your audience and tie it to the site and traffic plan.",
  },
  "shablon-instagram": {
    title: "Feed looks messy and every post starts from scratch?",
    text: "We’ll lock a brand kit and post templates so the grid stays coherent.",
  },
  "tehnicheskiy-seo-audit": {
    title: "Site won’t move and you suspect tech, not “SERP luck”?",
    text: "We’ll run a technical audit: indexing, status codes, speed, duplicates — with a prioritized fix plan.",
  },
  "statya-vk": {
    title: "Need long-form guides in VK instead of wall walls of text?",
    text: "We’ll set up article format, covers, and a publish rhythm for the community.",
  },
  "logi-servera": {
    title: "Crawlers waste budget on junk URLs while money pages get rare hits?",
    text: "We’ll parse access logs, fix crawl noise, and align robots/sitemap with priorities.",
  },
  "svyazka-instagram-facebook": {
    title: "Need Instagram and Facebook linked for ads — without broken Pages?",
    text: "We’ll set Accounts Center correctly, pick the right Page, and document how to unlink safely.",
  },
  "oblozhka-vk": {
    title: "Community header looks random and the offer isn’t readable on mobile?",
    text: "We’ll design a cover with a clear offer, safe zone, and rights-safe visuals.",
  },
  "blokirovka-instagram": {
    title: "Account restricted and “guaranteed unlock” sellers are circling?",
    text: "We’ll map the official appeal path, hygiene after recovery, and how to avoid gray “helpers.”",
  },
  "otchet-klientu": {
    title: "Ad reports full of CTR but the client still asks “so what”?",
    text: "We’ll rebuild the report around goals, money, one-page summary, and clear next steps.",
  },
  "ishodnyy-kod": {
    title: "Need a quick source check for title, canonical, and console errors?",
    text: "We’ll walk the page in DevTools and fix what blocks SEO hygiene — without a full redesign.",
  },
  "obnovlenie-kontenta": {
    title: "Old posts still get impressions but lose to fresher competitors?",
    text: "We’ll prioritize the archive, refresh the winners, and reseed with before/after tracking.",
  },
  "onlayn-oplata": {
    title: "Need cards and SBP on the site without storing CVV yourself?",
    text: "We’ll pick aggregator vs acquiring, wire the CMS module, and align the cash-register scheme.",
  },
  "istoriya-poiska-instagram": {
    title: "Don’t want recent searches visible on a shared phone?",
    text: "We’ll show the official clear path and the hygiene that actually matters — sessions and 2FA.",
  },
  "pochtovyy-servis": {
    title: "Need a reliable work inbox — not a disposable spam trap?",
    text: "We’ll pick a permanent service, set 2FA/recovery, and plan corporate mail on your domain.",
  },
  snippet: {
    title: "SERP lines look dull and CTR lags behind the position?",
    text: "We’ll tune Title/description, breadcrumbs, and valid schema for rich results — without TOP myths.",
  },
  "kategorii-internet-magazina": {
    title: "Catalog sections fight each other and thin categories waste crawl?",
    text: "We’ll rebuild the category tree under demand, assortment, and clean indexing rules.",
  },
  "yandeks-dzen": {
    title: "Want Zen reach without copy-paste and fake monetization timelines?",
    text: "We’ll lock a niche, publishing rhythm, and current partner terms — with quality over volume.",
  },
  "chto-takoe-veb-sayt": {
    title: "Need a site that matches the job — not a random template?",
    text: "We’ll pick the type, build path, and structure for leads and growth — without “the site will sell itself.”",
  },
  "foto-instagram": {
    title: "Feed looks random and product shots don’t convert?",
    text: "We’ll lock a visual niche, shooting checklist, and a series preset — with captions that support the offer.",
  },
  "cpm-ili-cpc": {
    title: "Paying for impressions or clicks — and still unsure which wins?",
    text: "We’ll match the model to the goal, landing, and CPA — without “pretty CTR” as the only KPI.",
  },
  "otmetki-instagram": {
    title: "Tags feel random and collabs don’t move the profile?",
    text: "We’ll set mention rules, consent, and measurement — so tags serve navigation, not spam.",
  },
  "analogi-yandeks-market": {
    title: "All sales hang on one marketplace and margin is melting?",
    text: "We’ll map channels, feed hygiene, and unit economics — with a pilot before full assortment.",
  },
  "tenevoy-ban-instagram": {
    title: "Reach collapsed and “shadowban detectors” want your password?",
    text: "We’ll separate myths from limits, clean gray apps, and rebuild visibility with content hygiene — no mass actions.",
  },
  "seo-bitrix": {
    title: "Bitrix SEO fields are set, but duplicates and thin filters still leak?",
    text: "We’ll lock robots, meta templates, and clean URLs — without a Marketplace plugin pile as a strategy.",
  },
  "prosmotry-vk": {
    title: "High view counts but no actions — and the client still asks for “eyes”?",
    text: "We’ll read the counter with ER and community stats — without fake views or vanity KPIs.",
  },
  "karusel-instagram": {
    title: "Product details drown in a collage and nobody swipes the post?",
    text: "We’ll build a slide scenario, hook cover, and CTA — with one style across the carousel.",
  },
  "https-seo": {
    title: "HTTP still live, mixed content, and mirrors fighting each other?",
    text: "We’ll finish 301s, sitemap, and Webmaster setup — without treating HTTPS as a TOP guarantee.",
  },
  "biznes-v-instagram": {
    title: "Pretty grid, but the offer and replies don’t convert?",
    text: "We’ll lock bio, rubrics, and a weekly insights loop — before pouring budget into ads.",
  },
  "ssylki-vkontakte": {
    title: "Mentions don’t click and site previews look broken?",
    text: "We’ll set mention syntax, HTTPS previews, and exact post URLs — without spam tags.",
  },
  "snizhenie-trafika": {
    title: "Traffic crashed and the team is guessing “filter or season”?",
    text: "We’ll separate analytics glitches from real drops and fix tech/content — without “TOP tomorrow” promises.",
  },
  "piksel-vk": {
    title: "Retargeting burns budget on buyers and cold visits alike?",
    text: "We’ll install the pixel, split funnel segments, and set exclusions — with a real membership window.",
  },
  "pinterest-skachat": {
    title: "Mood boards turn into copyright claims in ads?",
    text: "We’ll keep references structured — and plan your own shoots or licensed assets for commercial use.",
  },
  "razblokirovka-instagram": {
    title: "Need to unblock without phishing “hidden profile” tools?",
    text: "We’ll walk the official blocked list and privacy checks — no third-party Instagram clients.",
  },
  "tekst-lendinga": {
    title: "Landing looks pretty, but the offer and form don’t convert?",
    text: "We’ll rebuild the first screen, proof path, and CTA — without keyword stuffing as a strategy.",
  },
  "blog-instagram": {
    title: "Want an author blog that doesn’t burn out in two weeks?",
    text: "We’ll lock niche, promise, and a realistic publish rhythm — without buying followers.",
  },
  "filtry-poiskovikov": {
    title: "Rankings crashed and the team is hunting “bypass schemes”?",
    text: "We’ll diagnose the drop and fix tech, content, and links — white-hat only, no TOP-date myths.",
  },
  "proverka-unikalnosti": {
    title: "Copy looks original until the match report shows whole paragraphs?",
    text: "We’ll set an editorial uniqueness check — without synonymizers or chasing empty 100%.",
  },
  "shapka-youtube": {
    title: "Channel looks generic and the banner crops wrong on phone?",
    text: "We’ll design a safe-zone banner that states the niche in seconds — without tiny price lists.",
  },
  "domen-rf": {
    title: "Choosing .рф and unsure about punycode, SSL, and mirrors?",
    text: "We’ll set a canonical host, HTTPS, and redirects — without zone myths as an SEO strategy.",
  },
  "instagram-s-kompyutera": {
    title: "Publishing from PC via random “Instagram for Windows” tools?",
    text: "We’ll set official web / Business Suite flow and team roles — without password-stealing clients.",
  },
  "kommentarii-instagram": {
    title: "Questions pile up under posts and negativity goes unanswered?",
    text: "We’ll lock reply SLA, moderation filters, and templates — without comment spam schemes.",
  },
  "knopki-youtube": {
    title: "Cards and end screens clutter the watch instead of guiding it?",
    text: "We’ll map a simple path: related video, playlist, subscribe — without annotation-era clutter.",
  },
  "taymkod-youtube": {
    title: "Long videos without a TOC and viewers scrubbing at random?",
    text: "We’ll structure chapters and timed links — UX navigation, not “algorithm secrets.”",
  },
  "yumoney": {
    title: "Need a wallet for paying — or Checkout for the store?",
    text: "We’ll separate YooMoney vs YooKassa scenarios and the ID level for your limits.",
  },
  "gaiq": {
    title: "Old GAIQ guides and UA dumps instead of real GA4 skill?",
    text: "We’ll map a Skillshop path plus events on a live property — certificate as a plus, not the goal.",
  },
  "metategi": {
    title: "Titles duplicated, descriptions empty, noindex on money pages?",
    text: "We’ll map title/description/robots across key URLs — without meta-keywords myths.",
  },
  "veb-interfeys": {
    title: "Hosting panel, webmail, or account UX confusing users?",
    text: "We’ll clarify roles, flows, and safe access — browser UI that people can actually use.",
  },
  "messendzher": {
    title: "Five chat channels and no one owns the reply SLA?",
    text: "We’ll pick 1–2 messengers where your audience already is and wire leads into CRM — without number spam.",
  },
  "ftp": {
    title: "Need SFTP access without risking live files on open FTP?",
    text: "We’ll set a proper client path, backups, and permissions — for emergencies, not everyday content edits.",
  },
  "runet": {
    title: "Entering a Russian-speaking market with a global SEO template?",
    text: "We’ll map audience, language, and local search/ads channels — without 2020 “Runet portrait” myths.",
  },
  "html-seo": {
    title: "Pretty layout but broken H1, title, and text missing from the DOM?",
    text: "We’ll align markup with SEO intent — structure for people and bots, not validator theater.",
  },
  "adult-trafik": {
    title: "Looking at 18+ traffic without a legal and platform map?",
    text: "We’ll help pick durable legal niches and white channels — without grey schemes or policy bypass.",
  },
  "negativnoe-seo": {
    title: "Suspect toxic links, copies, or a hack — and not a rival “ban button”?",
    text: "We’ll set monitoring, backups, and a defense path — grow your site, don’t wage SERP wars.",
  },
  "poiskovye-sistemy": {
    title: "Spreading SEO budget across exotic engines with no data?",
    text: "We’ll lock Yandex/Google (and Bing when it matters) from your analytics — not from a 2020 market-share myth.",
  },
  "rsya-metrika": {
    title: "YAN ads live, but revenue doesn’t line up with Metrica visits?",
    text: "We’ll match counters and publisher reports — income next to audience, without killing UX.",
  },
  "posmotret-avatar-instagram": {
    title: "Need a larger profile photo without shady “viewer” apps?",
    text: "We’ll stick to official web/feed paths — and help craft a readable avatar of your own.",
  },
  "glavnaya-stranitsa": {
    title: "Pretty homepage, but the offer and CTA don’t read in five seconds?",
    text: "We’ll rebuild the first screen and block frame — clarity first, slider last.",
  },
  "zapusk-internet-magazina": {
    title: "Launching a store without unit economics, supply, or a real checkout?",
    text: "We’ll map stages from plan to demand — prep vs TOP timelines kept honest (TOP planned 2–6 months).",
  },
  "napominanie-klientu": {
    title: "Win-back emails that sound like “you haven’t visited” spam?",
    text: "We’ll set consent-first occasions: cart, pause, holidays — usefulness over nagging.",
  },
  "kontent-i-nativnaya": {
    title: "Brief mixes “our blog post” with paid native as if they’re the same?",
    text: "We’ll split owned content vs paid integrations — KPIs, labeling, and where traffic should land.",
  },
  "tekst-glavnoy-stranitsy": {
    title: "Homepage full of “best / personalized / innovative” with no proof?",
    text: "We’ll cut the clichés and leave a short offer, facts, and one clear CTA.",
  },
  "kak-napisat-statyu": {
    title: "Drafts stall and SEO keywords wreck readability?",
    text: "We’ll lock goal, outline, and edit pass — SEO on top of useful text, not instead of it.",
  },
  "rss": {
    title: "Need a clean update feed without full-text scrapers emptying the blog?",
    text: "We’ll enable a stable CMS feed with teasers — distribution for readers, not “link mass” myths.",
  },
  "tz-kopiraytera": {
    title: "Vague “make it nice with keywords” briefs burning budget on rewrites?",
    text: "We’ll lock goal, audience, facts, and acceptance — so copy lands closer on the first pass.",
  },
  "zagolovki-4u": {
    title: "Headlines full of empty “#1 / unique” with no proof or CTR lift?",
    text: "We’ll rebuild H1 and subjects with benefit, specifics, and honest urgency — then test variants.",
  },
  "o-kompanii": {
    title: "About page full of “professionals / innovation” with nothing to prove it?",
    text: "We’ll cut the fluff and leave who you’re for, proof, and clear next steps for B2B and buyers.",
  },
  "avtovoronka-instagram": {
    title: "Instagram funnel stuck between likes and empty Direct — or worse, grey bots?",
    text: "We’ll map the path, profile CTA, and compliant auto-replies — scenario first, automation second.",
  },
  "avtovoronka-vk": {
    title: "VK community messages without opt-in — or a bot with no path to a human?",
    text: "We’ll set message subscription, a 3–5 step chain, and step metrics — consent first, automation second.",
  },
  "prodayushchiy-kontent": {
    title: "Feed full of “buy now” while leads and trust stay flat?",
    text: "We’ll mix offer, value, and proof for B2C/B2B — with honest CTAs and measurement beyond likes.",
  },
  "nazvanie-internet-magazina": {
    title: "Store name stuck between “we like it” and a taken domain?",
    text: "We’ll shortlist names that fit the audience, check domains and conflicts, and keep SEO timelines realistic.",
  },
  "parsing-python": {
    title: "Need a Python parser without grey anti-bot bypass recipes?",
    text: "We’ll pick the right stack (requests/BS4/Scrapy), set limits, and stay within ToS and official APIs.",
  },
  "json": {
    title: "API payloads breaking on commas, quotes, or risky eval parsing?",
    text: "We’ll lock strict JSON syntax, safe parse paths, and clean configs for front and integrations.",
  },
  "analiz-reklamnoy-kampanii": {
    title: "Lots of clicks, few leads — and bids still twisted by overall CTR?",
    text: "We’ll link analytics, walk keywords/placements/audience/landings, and leave a week of concrete fixes.",
  },
  "primery-email-rassylok": {
    title: "Copying pretty brand emails while open rates and trust stay flat?",
    text: "We’ll adapt one clear technique — choice, welcome tone, progress, or feedback — to your opt-in list.",
  },
  "nativnaya-reklama": {
    title: "Native posts that scream “ad” from the first line?",
    text: "We’ll fit product experience into the platform’s voice — with honest labeling, not fake excitement.",
  },
  "sayt-pered-reklamoy": {
    title: "Ads live, clicks coming in — and still zero leads?",
    text: "We’ll audit goals, forms, first screen, and mobile before you scale spend — landing first, bids second.",
  },
  "besplatnaya-reklama": {
    title: "Hunting “free ads” and landing in grey bots or spam lists?",
    text: "We’ll pick honest no-media channels for your niche — content, partnerships, demand platforms — then a small paid test.",
  },
  "amp": {
    title: "Still maintaining AMP “for SEO” while Core Web Vitals on the main site lag?",
    text: "We’ll focus speed and mobile UX on canonical URLs — AMP only if you already have a clear content case.",
  },
  "oshibki-smm": {
    title: "Social posts for the checkbox — no goal, no audience, no replies?",
    text: "We’ll lock one platform, one monthly goal, and a rhythm without spam or fake “five-star only” moderation.",
  },
  "infopovod": {
    title: "Need a reason to talk about the brand without empty hype or toxic newsjacking?",
    text: "We’ll package a planned hook — research, launch, collab — with an editor pack and metrics beyond noise.",
  },
  "autrich": {
    title: "Link marketplace spam filling the profile while editors ignore template pitches?",
    text: "We’ll shortlist topical donors, personalize outreach, and track mentions — without promising TOP from a mail blast.",
  },
  "programmy-seo": {
    title: "Paying for five SEO suites while tasks and KPIs stay fuzzy?",
    text: "We’ll map tools to jobs — semantics, crawl, analytics, copy — and cut subscriptions that don’t move the work.",
  },
  "email-marketing-2020": {
    title: "Chasing interactive email widgets while mobile subjects and triggers lag?",
    text: "We’ll lock readable HTML, welcome/triggers, and CRM segments — experiments only on a solid base.",
  },
  "operatory-poiska": {
    title: "Guessing what’s indexed — and treating old “magic operators” as strategy?",
    text: "We’ll use site:/intitle:/filetype: for diagnostics, then fix via GSC/Webmaster — not as a TOP shortcut.",
  },
  "parsing-email": {
    title: "Tempted by a “ready scraped list” that kills domain reputation?",
    text: "We’ll grow an opt-in CRM list with consent and easy unsubscribe — no mass email harvesting.",
  },
  "mixed-content": {
    title: "HTTPS live — but Console still screams Mixed Content?",
    text: "We’ll clean HTTP assets in templates and widgets so trust and UX match the certificate.",
  },
  "reklamnyy-banner": {
    title: "Pretty banners with no offer — and CTR that won’t convert?",
    text: "We’ll lock offer, hierarchy, CTA, and landing match — then test creatives without banner blindness theater.",
  },
  "crm": {
    title: "Picking a CRM from a 2020 “top-10” while deals still live in chats?",
    text: "We’ll map your funnel, compare systems on your scenarios, and roll out with discipline — not logo rankings.",
  },
  "meta-description": {
    title: "Writing meta descriptions like a TOP button — or leaving them empty?",
    text: "We’ll craft unique honest snippets tied to title and page — for CTR, not keyword sheets.",
  },
  "parsing-auditorii": {
    title: "Tempted by a “competitor audience dump” that risks bans?",
    text: "We’ll build segments from your CRM, pixel, and lookalikes — without scraping others’ profiles.",
  },
  "antitrendy-marketinga": {
    title: "Still betting on spam, one channel, and hard-sell in the first touch?",
    text: "We’ll trim anti-trends and rebuild measurable touches around offer, consent, and funnel.",
  },
  "analitika-telegram": {
    title: "Confusing Telegram “eye” views with engagement — and buying fake reach?",
    text: "We’ll set a weekly median-views dashboard with Insights and UTM — honest numbers, no view bots.",
  },
  "google-partner": {
    title: "Chasing a Partner badge from a 2018 spend threshold?",
    text: "We’ll align Skillshop certs, MCC quality, and current program criteria — badge as proof, not a CPA promise.",
  },
  "udalenie-botov-instagram": {
    title: "Pretty follower count — and ER killed by bots?",
    text: "We’ll batch-clean junk safely, skip password “auto-cleaners,” and rebuild live engagement without fake growth.",
  },
  "sayty-satellity": {
    title: "Vendors pitching a “secret satellite farm” for faster TOP?",
    text: "We’ll strengthen the main domain with content, tech, and honest mentions — no controlled link networks.",
  },
  "planirovshchik-rezultatov-google": {
    title: "Arguing seasonal budget “by eye” while Performance Planner sits unused?",
    text: "We’ll build CPA-aware scenarios from live campaigns — forecast as order of magnitude, not a Google promise.",
  },
  "utp": {
    title: "Landing and ads still say “quality and best prices”?",
    text: "We’ll lock a concrete, deliverable USP for your segment — proof on the first screen, not adjective soup.",
  },
  "sayt-ne-v-top": {
    title: "Expecting TOP-10 a month after launch — and chasing “accelerators”?",
    text: "We’ll diagnose prep vs ranking growth: tech, content, UX — with a real 2–6 month core horizon.",
  },
  "eat-kopirayting": {
    title: "Publishing YMYL advice under “Admin” with no sources?",
    text: "We’ll build expert bylines, verifiable facts, and site trust signals — E-E-A-T as quality, not a TOP button.",
  },
  "lestnitsa-hanta": {
    title: "Hard-selling Premium to people who don’t see the problem yet?",
    text: "We’ll map traffic temperature to awareness steps — right message, right CTA, fewer shouts into the void.",
  },
  "yandeks-vebmaster": {
    title: "Flying blind in Yandex Search — or treating recrawl as a TOP button?",
    text: "We’ll verify the property, clean diagnostics, and read index/query reports — prep and rankings stay separate.",
  },
  "tochki-kontakta": {
    title: "Pretty ads — and deals dying at chat, phone, or reception?",
    text: "We’ll map touch chains online and offline, fix weak joints, and measure conversion at each step.",
  },
  "trendy-seo": {
    title: "Chasing algorithm names while zero-click and thin pages eat CTR?",
    text: "We’ll tune snippets, intent pages, and panel rituals — trends as accents, not a one-week TOP myth.",
  },
  "tochki-vhoda": {
    title: "Guessing competitors’ landings — or copying their H1s?",
    text: "We’ll map entry points and query clusters into your own pages — hypotheses and tasks, not copy-paste.",
  },
  "ssylki-v-instagram": {
    title: "Posting URLs in captions that nobody can tap?",
    text: "We’ll set bio / link-in-bio, Stories stickers, and UTMs — measurable exits without a grey-tool zoo.",
  },
  "sarafannoe-radio": {
    title: "Hoping clients recommend you — without asking, measuring, or fixing service?",
    text: "We’ll build post-purchase asks, honest reviews, and referral tracking — real experience, no fake stars.",
  },
  "slogan": {
    title: "Stuck with “quality and innovation” — or a generator line that misses the brand?",
    text: "We’ll craft a short, speakable, deliverable slogan that fits name and logo — truth before pretty words.",
  },
  "crello": {
    title: "New template every day — and a feed with no brand?",
    text: "We’ll lock a small set of branded starters in VistaCreate/Crello — fast SMM visuals without designer chaos.",
  },
  "adaptivnyy-shablon-direkt": {
    title: "Drawing ten banner sizes by hand for every Direct test?",
    text: "We’ll assemble adaptive creatives with smart center and legal fields — previews first, then scale.",
  },
  "rassylka-whatsapp": {
    title: "Bought a “WhatsApp number base” — and got blocks instead of leads?",
    text: "We’ll set an opt-in path and official Business API templates — consent first, no grey senders.",
  },
  "podozritelnyy-trafik-google": {
    title: "Google captcha on every search — and it’s not clear if it’s you or the network?",
    text: "We’ll walk device → router → scrapers calmly — and separate network noise from a site issue.",
  },
  "sotsialnye-seti": {
    title: "Five empty social profiles — and still no clear channel?",
    text: "We’ll pick 1–2 platforms for your audience and job — with a site/CRM link, not a world TOP-10 copy.",
  },
  "chastotnost-zaprosov": {
    title: "Keyword set inflated by “pretty” head terms that never convert?",
    text: "We’ll pull exact Wordstat modes and prioritize clusters for real landings — base numbers won’t fool the forecast.",
  },
  "sohranennaya-kopiya-yandex": {
    title: "No Yandex cache — and panic that rankings are broken?",
    text: "We’ll check noarchive, indexing, and 200s first — cache is a diagnostic, not a TOP button.",
  },
  "seo-struktura-sayta": {
    title: "Texts already live on random URLs — and the tree is still a sketch?",
    text: "We’ll map sections to query clusters before content — tree hierarchy, clean URLs, no intent collisions.",
  },
  "instagram-direct": {
    title: "Cold Direct blasts — and limits instead of leads?",
    text: "We’ll set greetings, SLA, and warm CTAs — service automation without grey spam tools.",
  },
  "instagram-direct-gid": {
    title: "Team can’t find where chats live — and leads die in silence?",
    text: "We’ll map the messenger basics, quick replies, and an inbound queue — without hunting a “send to everyone” button.",
  },
  "dekorativnyy-shrift-instagram": {
    title: "Bio looks fancy — and nobody can read the offer in three seconds?",
    text: "We’ll keep one Unicode accent and a plain CTA — no password apps, checked on iOS and Android.",
  },
  "whatsapp-v-instagram": {
    title: "Clients ask for WhatsApp in Stories — and dig digits from the bio by hand?",
    text: "We’ll put a tested wa.me in the header with a short text= stub — inbound on click, no cold spam.",
  },
  "ssylki-na-forumah": {
    title: "Bought “100 forum posts a week” — and got deletions instead of traffic?",
    text: "We’ll pick live boards and useful replies first — a link only where it helps the thread.",
  },
  "lending": {
    title: "Pretty template online — and five CTAs with no clear offer?",
    text: "We’ll lock one conversion, a readable first screen, and short proof — then send traffic.",
  },
  "samostoyatelnoe-seo": {
    title: "Started DIY SEO with link packs — and still no foundation?",
    text: "We’ll set month-one tech, analytics, and a keyword map — TOP across the set is planned for 2–6 months, not a week.",
  },
  "metrika-ustanovka": {
    title: "Counter “installed” — and the report still shows zero visits?",
    text: "We’ll place one Metrica tag on every template, clear cache, and wire goals — not just a visit count.",
  },
  "youtube-monetizaciya": {
    title: "Planning channel income from someone else’s revenue screenshot?",
    text: "We’ll lock niche, retention, and legal income models — Partner Program thresholds from official Help, not old guides.",
  },
  "reklamnyy-kabinet": {
    title: "Ads live — and you still can’t tell clicks from leads?",
    text: "We’ll set goal, landing, tagging, and a readable campaign tree before scaling spend.",
  },
  "htaccess-301": {
    title: "Moved URLs — and the site fell to a redirect loop?",
    text: "We’ll map old→new with backups and one-hop 301s — no dumping everything to home.",
  },
  "futer-sayta": {
    title: "Footer packed with SEO anchors — and still no clear contacts?",
    text: "We’ll keep a short trusted footer: contacts, legal, key nav — without a keyword wall.",
  },
  "oblachnyy-servis": {
    title: "Moved the team to “the cloud” — and nobody owns backups or access?",
    text: "We’ll pick SaaS/IaaS by the job, lock 2FA and recovery tests — before a mass data move.",
  },
  "shaut-instagram": {
    title: "Weekly SFS with random accounts — and unfollows instead of leads?",
    text: "We’ll pick one relevant partner, fix the deal, and measure follows/inquiries — not shoutout count.",
  },
  "ssylka-instagram": {
    title: "Profile link in ads — and it opens Explore instead of your account?",
    text: "We’ll copy the correct profile URL, test it, and place it next to a clear header offer.",
  },
  "paginatsiya": {
    title: "Catalog page=200 in the index — and empty thin listings everywhere?",
    text: "We’ll set predictable URLs, sensible indexing, and facet rules — without cloning SEO text on every page.",
  },
  "bitye-ssylki": {
    title: "Menu and footer still dump users into 404 after a CMS move?",
    text: "We’ll crawl, prioritize templates and traffic URLs, then fix with edit / relevant 301 / 410 — no dump to home.",
  },
  "kontent-menedzher": {
    title: "Posts go live “as they came” — and mobile + links break every week?",
    text: "We’ll lock a brief, CMS checklist, and publish workflow — plan and quality on the live page, not just word count.",
  },
  "regionalnoe-seo": {
    title: "Need TOP in your city — and city pages are copy-paste with a name swap?",
    text: "We’ll build real regional landings, NAP, and map signals — prep first, then TOP planned over 2–6 months.",
  },
  "klyuchi-google-ads": {
    title: "Google Ads keywords burning budget on junk queries?",
    text: "We’ll structure groups, match types, and negatives around the offer and CPA — not a dump of the SEO core.",
  },
  "telegram-boty": {
    title: "Need a Telegram bot for leads — without a maze of dead-end buttons?",
    text: "We’ll design a short flow, handoff to a human, and safe token handling — no shady growth hacks.",
  },
  "stavki-direkt": {
    title: "Direct bids chasing first place while CPA goes sideways?",
    text: "We’ll set strategies and query control around conversions and margin — not ego positions.",
  },
  "molodoy-sayt": {
    title: "New domain — and someone promised TOP next week via “behavioral tricks”?",
    text: "We’ll set a first-month plan: tech, core, landings — prep first, TOP planned over 2–6 months.",
  },
  "oshibka-502": {
    title: "Site returns 502 and support only says “clear the cache”?",
    text: "We’ll localize gateway vs backend, read logs, and restore stable responses — no redirect masks.",
  },
  "feyk-stranitsa": {
    title: "Found a clone of your brand — and clients almost paid the wrong place?",
    text: "We’ll lock official URLs, monitoring, and an incident playbook — no “fake storefronts” for SEO.",
  },
  "lichnyy-kabinet": {
    title: "Need a personal account — without a 20-field signup maze?",
    text: "We’ll scope roles, auth, and the first self-serve flows — security and mobile UX from the brief.",
  },
  "spetsrazmeshchenie-direkt": {
    title: "Client still asks for “special placement” like it’s 2015?",
    text: "We’ll retune bids and creatives around CPA — not chasing an outdated block name.",
  },
  "viralnyy-kontent": {
    title: "Hoping every post goes viral — and buying share packs?",
    text: "We’ll build share-worthy formats into a content system — no fake virality KPIs.",
  },
  "pokupka-ssylok": {
    title: "Someone sold a “100 links / TOP in a week” pack?",
    text: "We’ll judge donors and placements by audience and risk — content and tech first, no package spam.",
  },
  "nisha-sayta": {
    title: "Picking a niche from an old “profitable niches” list?",
    text: "We’ll cross demand, margin, and your edge — one clear niche and a test channel before a big build.",
  },
  "internet-portal": {
    title: "Calling a 5-page brochure a “portal” — and budgeting like Yandex?",
    text: "We’ll separate portal vs site, lock an MVP of 1–3 flows, and plan support — not an empty zoo of sections.",
  },
  "kod-statusa-http": {
    title: "Soft 200 on deleted pages and redirect chains after a CMS move?",
    text: "We’ll map statuses, fix soft-404 and 5xx alerts — crawl hygiene before ranking work.",
  },
  "kod-200": {
    title: "Key URLs “succeed” with 200 but are empty shells in the index?",
    text: "We’ll separate real 200 from soft 404 and lock release smoke checks — statuses as hygiene, not TOP magic.",
  },
  "videoreklama-youtube": {
    title: "Thinking YouTube Ads will sell without a landing or conversion goals?",
    text: "We’ll set a measured creative test around CPA — views aren’t the finish line.",
  },
  "veb-stranitsa": {
    title: "Users hit “page unavailable” and “moved” after every CMS tweak?",
    text: "We’ll stabilize URLs, statuses, and redirects — page hygiene before ranking work.",
  },
  "klyuchi-internet-magazin": {
    title: "Store keyword dump spawning empty filter URLs in the index?",
    text: "We’ll cluster demand into category / filter / card — prep first, TOP planned over 2–6 months.",
  },
  "analitika-kontent-marketinga": {
    title: "Posting for likes — and no idea which piece brings leads?",
    text: "We’ll lock 5–7 KPIs to one goal and a weekly ritual — cost and conversion, not vanity views.",
  },
  "bazy-dannyh-sayta": {
    title: "CMS update tomorrow — and the only backup is “files on the same disk”?",
    text: "We’ll set DB+files backups offsite and a restore test — before the next migration.",
  },
  "dubli-stranits": {
    title: "Filters and UTM clones flooding the index while the real pages stall?",
    text: "We’ll pick a canon, merge mirrors, and stop the CMS from spawning more — crawl budget back to useful URLs.",
  },
  "teg-h1": {
    title: "Logo as H1 on every URL — and titles cloned sitewide?",
    text: "We’ll set one meaningful H1 per template and a sane H2–H3 hierarchy — readable, not stuffed.",
  },
  "google-biznes": {
    title: "Local pack empty — and NAP on the site doesn’t match Maps?",
    text: "We’ll claim the profile, verify, and keep hours and reviews honest — no keyword stuffing in the business name.",
  },
  "protokol-http": {
    title: "Debugging “site down” with robots.txt while TLS and 5xx are the real issue?",
    text: "We’ll read request → status → body first — HTTPS hygiene before fine on-page SEO.",
  },
  "adaptivnyy-sayt": {
    title: "Desktop looks fine — and the phone form needs horizontal scroll?",
    text: "We’ll fix viewport, tap targets, and key templates — one responsive URL, not a second m.site.",
  },
  "bezopasnost-sayta": {
    title: "Hosting antivirus on — and plugins from 2019 still on production?",
    text: "We’ll tighten updates, access, and backups — defense and recovery, not attack how-tos.",
  },
  "dlina-title": {
    title: "Titles cut mid-offer — and H1 cloned into every meta?",
    text: "We’ll set unique Titles with meaning first — pixels and CTR, not a 70-character dogma.",
  },
  "metrika-ne-rabotaet": {
    title: "Counter in the theme — and Network shows no mc.yandex hits?",
    text: "We’ll layer-check code, cache, blockers, and goals — before reinstalling from scratch.",
  },
  "sohranit-foto-instagram": {
    title: "Need a client-ready file — and only a feed screenshot left?",
    text: "We’ll set an archive habit outside the feed — rights first, no phishing downloaders.",
  },
  "vstavka-javascript": {
    title: "Pixel pasted in the visual editor — and the theme cache still serves old HTML?",
    text: "We’ll place one trusted snippet in the template or GTM — and verify source + Network.",
  },
  "seo-malyy-biznes": {
    title: "Promised “TOP in a week” — and still no landings or map listing?",
    text: "We’ll set a realistic SMB plan: prep in weeks, TOP growth planned over months — local pages first.",
  },
  "navigatsiya-sayta": {
    title: "Twenty equal menu items — and clients still ask “where are contacts”?",
    text: "We’ll rebuild clear labels and short paths — navigation for jobs, not keyword stuffing.",
  },
  "karta-sayta": {
    title: "Sitemap full of filter URLs — and Search Console filled with crawl noise?",
    text: "We’ll ship a clean canonical XML and submit it properly — map after structure, not instead of it.",
  },
  "ssylochnyy-profil": {
    title: "Thousands of backlinks on paper — and anchors scream “buy cheap”?",
    text: "We’ll screen donors and anchors in under an hour — quality and actions, not one vanity metric.",
  },
  "kanonicheskiy-teg": {
    title: "Three different canonicals in head — and filters still in the index?",
    text: "We’ll set one absolute https canon per entity — preference signal, not a fake 301.",
  },
  "napolnenie-sayta": {
    title: "Fifty thin posts planned — and still no service landings?",
    text: "We’ll queue money pages first, then briefs and a rhythm you can keep — meaning over volume.",
  },
  "seo-vkontakte": {
    title: "Keyword stuffed into the VK name — and still waiting for “buy” TOP?",
    text: "We’ll package the public for search next to SMM — community visibility, not a site replacement.",
  },
  "open-graph": {
    title: "Shared link shows a random crop — and the preview won’t refresh?",
    text: "We’ll set og:title/image/url to the canon and clear preview cache — CTR from shares, not ranking magic.",
  },
  "google-analytics": {
    title: "Pretty GA charts — and still no idea where checkout dies?",
    text: "We’ll wire ecommerce events and 2–3 segments — funnel insights, not average temperature.",
  },
  "razmer-stranitsy": {
    title: "Landing feels slow — and Network shows a 4MB hero plus chat widgets?",
    text: "We’ll cut transfer size by contribution — images and JS first, then cache and CDN.",
  },
  "katalogi-saytov": {
    title: "Bought “1000 directories” — and the backlink profile looks like a farm?",
    text: "We’ll whitelist live maps and niche listings — NAP first, no auto-submit spam.",
  },
  "otkazy-sayta": {
    title: "Bounce looks fine sitewide — and top landings still dump paid traffic?",
    text: "We’ll fix speed, offer match, and first screen by URL — action KPI, not average bounce.",
  },
  "yandeks-xml": {
    title: "Old XML scraper still in cron — and Cloud bills climbing on dead endpoints?",
    text: "We’ll migrate to Search API (or drop it) — official channel, quotas, no HTML SERP hacks.",
  },
  "ssylki-telegram": {
    title: "Ads send people to an expired invite — and support chats get the wrong room?",
    text: "We’ll lock one canonical t.me in the brand kit — public vs invite labeled clearly.",
  },
  "kartinki-vnimanie": {
    title: "Hero is stock coffee-and-laptop — and the offer lives only inside the JPEG?",
    text: "We’ll set contrast, meaning, and HTML-duplicated copy — visuals that stop the eye without clichés.",
  },
  "baidu": {
    title: "Registered in Baidu “just in case” — and the site still won’t load from China?",
    text: "We’ll decide if the PRC market is real first — then official Webmaster, Chinese content, no grey accounts.",
  },
  "cookies": {
    title: "Consent banner says Accept all — and optional tags still fire before choice?",
    text: "We’ll inventory cookies, set Secure/HttpOnly flags, and make optional scripts wait for consent.",
  },
  "alt-img": {
    title: "Gallery alts all say “buy cheap” — and decorative icons get read as noise?",
    text: "We’ll set meaningful alt (or empty for decor) — accessibility first, not keyword dumps in title.",
  },
  "uznat-cms": {
    title: "Need the stack for a bid — and detectors disagree while generator is stripped?",
    text: "We’ll cross-check public HTML markers only — recon for scoping, not admin attacks.",
  },
  "rozygrysh-instagram": {
    title: "Winner looks like an insider — and nobody recorded how the number was drawn?",
    text: "We’ll lock rules, numbered list, and public RNG on video — fair giveaways, no password tools.",
  },
  "google-search-console": {
    title: "No clear view of the Google index — and coverage errors pile up unnoticed?",
    text: "We’ll connect Search Console, sitemap, and a coverage-error playbook — reports, not a “TOP button”.",
  },
  "avtorskie-prava-instagram": {
    title: "Music and photo claims on the feed — and the team still grabs files from Google Images?",
    text: "We’ll set licensed music/stock and an official appeal path — no DRM bypass schemes.",
  },
  "golosovoy-poisk": {
    title: "Site doesn’t answer spoken “near me / how to” queries — and FAQ is a keyword dump?",
    text: "We’ll strengthen speed, short answers, and conversational clusters — classic SEO, not a voice cult.",
  },
  "statistika-google-prodazhi": {
    title: "Google demand exists — but no loop from keys to landings and sales goals?",
    text: "We’ll connect Planner, Trends, and Analytics into one cycle: keys → season → landings → goals.",
  },
  "toshnota-teksta": {
    title: "Brief demands a magic density % — and the draft reads like a keyword dump?",
    text: "We’ll set a tool corridor and natural edits — nausea metrics for the brief, not a ranking law.",
  },
  "opisanie-tovara": {
    title: "Pretty photo, empty card — and buyers ask size and material in chat?",
    text: "We’ll write lead, specs, and “why us” so doubts close before the manager replies.",
  },
  "metrika-tseli": {
    title: "Ads and SEO report visits — but no goal for thank-you, form, or Buy click?",
    text: "We’ll set URL goals, reachGoal events, and a clean funnel — then verify firing before scaling.",
  },
  "google-analytics-tseli": {
    title: "Still thinking in Universal “Goals” — and GA4 only shows traffic without key events?",
    text: "We’ll map thank-you, leads, and CTA events as key conversions — DebugView first, then Ads.",
  },
  "screaming-frog": {
    title: "Release shipped — and nobody crawled 404s, duplicate titles, or heavy images?",
    text: "We’ll run Screaming Frog, export priorities, and open tickets — tech crawl, not a TOP button.",
  },
  "podderzhka-yandeks": {
    title: "Want to “ask Yandex for TOP” — and the ticket has no URL, dates, or Webmaster screens?",
    text: "We’ll self-check first, then file a clear ticket — diagnostics, not manual ranking.",
  },
                    "vnutrennyaya-perelinkovka": {
    title: "Money pages sit as orphans — and every in-body link uses the same commercial anchor?",
    text: "We’ll crawl internals, mix anchors, and strengthen context links — structure first, not link magic.",
  },
  "nakrutka-pf": {
    title: "A vendor promises TOP via “behavioral boost” — and analytics shows visits without leads?",
    text: "We’ll audit UX, intent pages, and goals — real engagement, not fake-click schemes.",
  },
  "dlina-seo-teksta": {
    title: "Briefs chase character quotas — and pages still lose to clearer TOP answers?",
    text: "We’ll set volume from intent and SERP guides — substance over padding, timelines without TOP myths.",
  },
  "wordpress-bezopasnost": {
    title: "WP still runs on outdated plugins — and “secret login URL” is the whole security plan?",
    text: "We’ll harden updates, access, backups, and HTTPS — defense hygiene, not attack playbooks.",
  },
  "wordpress-seo-plaginy": {
    title: "Two SEO suites fight over meta — and green lights are treated as a ranking score?",
    text: "We’ll pick one suite plus a lean speed/redirect stack — setup convenience, not a TOP button.",
  },
  "seo-kopirayting": {
    title: "Briefs chase keyword density — and pages still read like bot bait?",
    text: "We’ll lock intent, LSI, and structure in the brief — human copy first, timelines without TOP myths.",
  },
  "veb-analitik": {
    title: "Reports pile up — and nobody owns the next hypothesis from the numbers?",
    text: "We’ll set goals, segments, and a decision loop — analytics for action, not a file for the shelf.",
  },
  "chrome-rasshireniya-seo": {
    title: "The browser is full of random SEO add-ons — and audits still take forever?",
    text: "We’ll trim a safe Chrome stack for snapshots, UTM, and semantics — tools for speed, not a TOP button.",
  },
  "otzyvy-dlya-prodazh": {
    title: "Map profiles look empty — and competitors win on trust before the call?",
    text: "We’ll set a real review ask-and-reply loop — honest ratings, no bought five-stars.",
  },
  "brendovyy-trafik": {
    title: "Non-brand organic jumps every update — and brand share isn’t even measured?",
    text: "We’ll lock naming, map NAP, and brand query segments — awareness as an asset, not a TOP myth.",
  },
  "diplinking": {
    title: "Ads promise a promo screen — and the click lands on home or broken onboarding?",
    text: "We’ll wire deeplink + deferred + fallback — shorter path to the offer, not a magic ROAS button.",
  },
  "seo-oshibki": {
    title: "Title duplicates and mixed content stack up — and the “green audit score” is treated as TOP?",
    text: "We’ll prioritize crawl-breaking fixes and a real backlog — cleanup as prep, not a week-to-TOP myth.",
  },
  "kannibalizatsiya-zaprosov": {
    title: "Two URLs swap in the SERP for one phrase — and link equity is split between them?",
    text: "We’ll pick a cluster canon, merge or separate intents — one strong landing per intent.",
  },
  "vnutrennie-faktory": {
    title: "Link building starts on a raw site — slow, mixed content, empty money landings?",
    text: "We’ll put on-page in order first: content, structure, HTTPS, speed — prep before the external track.",
  },
  "tselevaya-auditoriya": {
    title: "Ads and the core chase “everyone 25–45” — and leads stay random?",
    text: "We’ll lock jobs, anti-persona, and 2–5 segments — audience as a brief, not a gut-feel budget burn.",
  },
  "kloaking": {
    title: "Snippet promise doesn’t match the landing — and an agency hints at a “bot-only SERP”?",
    text: "We’ll compare bot vs browser HTML and harden the CMS — risk diagnostics, not a cloaking playbook.",
  },
  "effektivnost-seo": {
    title: "The client wants TOP tomorrow — and the report is only crawl green checks?",
    text: "We’ll agree organic, brand/non-brand, and lead KPIs — channel math on a 2–6 month horizon, not week-one panic.",
  },
  "kommercheskie-faktory": {
    title: "Money pages have copy but no prices, shipping, or a reachable phone?",
    text: "We’ll benchmark trust blocks against niche TOP — commercial prep, not a chat-widget TOP myth.",
  },
  "excel-google-tablitsy": {
    title: "Wordstat dumps still full of links, duplicates, and untagged negatives?",
    text: "We’ll set a Sheets/Excel cleanup template — core hygiene in hours, not a formula-to-TOP shortcut.",
  },
  "kontekst-i-seo": {
    title: "The team thinks Direct buys organic TOP — or that ads will “warm” behavioral signals?",
    text: "We’ll join paid and organic on shared goals — tests and demand data, not a pay-for-rank myth.",
  },
  "seo-yandex-google": {
    title: "Only one webmaster cabinet is watched — and the other engine quietly eats half the demand?",
    text: "We’ll run one site with both panels and shared clusters — accents differ, prep and TOP horizons stay honest.",
  },
  "prazdnichnyy-retargeting": {
    title: "Holiday traffic rises — and the same cold search ads chase people who already browsed?",
    text: "We’ll split retargeting into segments and a cascade — warm-base CPA control, not one banner for everyone.",
  },
  "seo-posle-topa": {
    title: "The site hit TOP — and the plan is to turn SEO off to “save the budget”?",
    text: "We’ll keep a hold-and-grow track: snippets, CR, new clusters — maintenance, not a forever checkbox retainer.",
  },
  "instrumenty-veb-analitiki": {
    title: "Counters are in — and weekly reports are still screenshots without goals?",
    text: "We’ll wire goals, UTMs, and a short KPI set — decisions from numbers, not from pretty graphs alone.",
  },
  "mobilnaya-reklama-google": {
    title: "Media plan copies someone else’s “average CTR 4%” — and mobile CPA keeps drifting?",
    text: "We’ll split Search/Display, lock your CPA, and read mobile slices in the cabinet — not vintage PDF benchmarks.",
  },
  "strategiya-prodvizheniya": {
    title: "SEO plan “like everyone else” doesn’t fit your site’s age and history?",
    text: "We’ll pick a scenario from diagnosis — new site, long tail, or rehab — without copying a competitor’s checklist.",
  },
  "user-intent": {
    title: "Keyword is in the title — and the SERP still rewards a different page type?",
    text: "We’ll map cluster intent from TOP formats and lock one intention per URL — density isn’t the strategy.",
  },
  "turbo-stranitsy": {
    title: "Plan still hangs on Turbo — and the format in search is already gone?",
    text: "We’ll move depth and monetization onto your responsive URLs — no strategy on a retired SERP format.",
  },
  "mobilnyy-poisk": {
    title: "Ranks look fine on desktop — and mobile SERP plus bounce tell another story?",
    text: "We’ll pull mobile ranks, fix templates on real phones, and treat speed as your site’s job — not Turbo/AMP by default.",
  },
  "utm-metki": {
    title: "Ads spend grows — and analytics still shows only “/cpc” without campaigns?",
    text: "We’ll lock a UTM dictionary and templates — source, medium, campaign readable in one report, not manager chaos.",
  },
  "retargeting": {
    title: "Cold search keeps paying for people who already browsed the cart?",
    text: "We’ll split warm segments, cap frequency, and exclude buyers — retarget as a funnel stage, not one banner forever.",
  },
  "poiskovye-podskazki": {
    title: "Core is built — and real tails from suggest never made it into the table?",
    text: "We’ll mine Yandex and Google autocomplete into clusters — ideas for wording, not a TOP button or inflate schemes.",
  },
  "zerkalo-sayta": {
    title: "www and non-www both answer 200 — and the index quietly doubles?",
    text: "We’ll pick one https canon, 301 the rest, and verify headers — prep hygiene, not a next-day TOP promise.",
  },
  "hlebnye-kroshki": {
    title: "Deep product pages from search — and users can’t climb back to the category?",
    text: "We’ll add a clean breadcrumb trail and BreadcrumbList — UX and linking, not a TOP button.",
  },
  "algoritm-korolyov": {
    title: "Still writing for keyword nausea because of a 2017 update name?",
    text: "We’ll shift briefs to intent and useful structure — meaning match outlives algorithm marketing labels.",
  },
  "strategii-yandeks-direkt": {
    title: "Direct strategies without a clear CPA — and the cabinet button keeps changing?",
    text: "We’ll lock goals, lead cost, and feedback first — then pick manual or auto mode from data, not auction fear.",
  },
  "relevantnost-sayta": {
    title: "Page “has the keyword” — and TOP still prefers a different answer type?",
    text: "We’ll match cluster intent to SERP page type and cut density cults — relevance is the base, not overnight TOP.",
  },
  "sotsseti-dlya-biznesa": {
    title: "Profiles exist — and clients still pick the competitor who answers in chat?",
    text: "We’ll pick 1–2 live channels, a reply rhythm, and a site/lead link — trust and service, not empty presence everywhere.",
  },
  "ctr-faktor-google": {
    title: "Plan still hangs on buying SERP clicks because “CTR is a factor”?",
    text: "We’ll read GSC CTR as snippet diagnostics and fix title/intent — no click-inflation schemes.",
  },
  "chto-takoe-seo": {
    title: "Still hearing “SEO = TOP in a month for everyone”?",
    text: "We’ll separate prep from core TOP horizons and set KPIs on leads — not magic ranking buttons.",
  },
    "razmery-bannera": {
    title: "Banner creative keeps cropping because the slot size was a guess?",
    text: "We’ll pull display vs file size via Inspect and set your own compressed creative — not a copy of someone else’s asset.",
  },
  "otsenka-stoimosti-sayta": {
    title: "Sale price hangs on a one-click domain calculator screenshot?",
    text: "We’ll pack P&L, traffic mix, and risks — online estimates as a trend draft, not the deal number.",
  },
  "tsena-klika-yandeks": {
    title: "Direct bids chase position — and the CPA math still isn’t done?",
    text: "We’ll lock goal CPA and click→goal conversion first — then set a CPC ceiling before the auction burns budget.",
  },
  "linkedin": {
    title: "LinkedIn profile is empty — and hiring or B2B still expects “presence”?",
    text: "We’ll fill headline, experience, and company page for a clear goal — Premium only when the task needs it.",
  },
  "reklama-odnoklassniki": {
    title: "OK ads copy VK creatives — and response stays noisy?",
    text: "We’ll lock a concrete offer, readable creative, and CPA goals — formats checked in the current account, not old guides.",
  },
  "roi-marketinga": {
    title: "CTR looks great — and nobody knows if marketing pays back?",
    text: "We’ll set one ROMI formula with CR and CPA — then shift budget to channels with a durable return.",
  },
  "prodvizhenie-brenda": {
    title: "Brand “promotion” is a pile of posts — and still no SMART goal?",
    text: "We’ll lock the result, SMART metrics, and a short SWOT — then pick 1–2 channels instead of doing everything at once.",
  },
  "gruppa-facebook": {
    title: "Facebook Page is empty — and ads are supposed to “rescue” it?",
    text: "We’ll set Page role, offer, and starter content first — then moderation and paid only when the chain works.",
  },
  "start-internet-magazina": {
    title: "Store launch plan is a book list — and unit economics still blank?",
    text: "We’ll lock niche, margin, payment, and logistics first — then storefront and demand tests without passive-income myths.",
  },
  "yml-fayl": {
    title: "Market feed is a hand-edited XLS — and stock is already wrong?",
    text: "We’ll wire YML from one inventory source with HTTPS auto-refresh — then fix moderation errors in the data, not only the file.",
  },
  "google-tag-manager": {
    title: "Tags live in the theme — and every pixel needs a deploy?",
    text: "We’ll put one GTM container on the site, map tags and triggers, and publish only after Preview — without double counters.",
  },
  "veb-prilozhenie": {
    title: "Brief says “just a site” — but you need roles, cart, and status?",
    text: "We’ll separate public landings from the product scenarios — stack after data, integrations, and acceptance criteria.",
  },
  "veb-servisy": {
    title: "Integrations are “just glue” — until the payment API goes dark?",
    text: "We’ll map the business scenario, contract, and failure plan — docs and monitoring before trendy acronyms.",
  },
  "adminka-sayta": {
    title: "Content waits for a developer — and one shared admin password?",
    text: "We’ll set roles, unique accounts, and update/backup hygiene — so the CMS speeds publishing without becoming a breach door.",
  },
  "oshibka-500": {
    title: "Key URLs return 500 — and someone wants a “fix plugin”?",
    text: "We’ll confirm from outside, read app/server logs, and roll back the last change — no redirects masking the symptom.",
  },
  "skript-sayta": {
    title: "A dozen widgets in the head — and nobody owns the snippets?",
    text: "We’ll keep trusted sources, one insert place, and a speed check — client vs server roles without forum “SEO scripts”.",
  },
  "pozdravlenie-klienta": {
    title: "Birthday emails say “Dear client!” — and feel like spam?",
    text: "We’ll set CRM dates, consent, and template rotation — warm by name, with VIP personal notes instead of generator poetry.",
  },
  "looker-studio": {
    title: "Pretty Looker charts — but ads, site, and CRM still don’t join?",
    text: "We’ll lock KPIs and source keys first — then a view-only dashboard that visualizes end-to-end data, not vanity clicks.",
  },
  "kviz-sayt": {
    title: "Quiz asks for a phone on step one — and drop-off kills the funnel?",
    text: "We’ll map 4–8 on-point questions, a useful outcome, and CRM handoff — progress without fake “you won” tricks.",
  },
  "http-zagolovki": {
    title: "HTTPS is on — and security headers are still empty?",
    text: "We’ll add HSTS, nosniff, frame limits, and a CSP draft in Report-Only — staging first, widgets checked after deploy.",
  },
  "retargeting-meta": {
    title: "Warm retarget shows one creative to cart and bare visits alike?",
    text: "We’ll split site, list, and engagement segments, exclude buyers, and cap frequency — CPA over reach theater.",
  },
  "interaktivnyy-kontent": {
    title: "Interactive “wow” on every page — and still no leads?",
    text: "We’ll pick one format for the user’s job — test, calculator, or configurator — and measure steps plus the next CTA.",
  },
  "istochniki-trafika": {
    title: "Every channel at once on pennies — and still no clear CPA?",
    text: "We’ll prep landing and tracking, then test 1–2 niche-fit sources — organic in parallel with a 2–6 month ranking horizon.",
  },
  "virusnyy-marketing": {
    title: "Hoping a view pack will buy a “virus” — and sales stay empty?",
    text: "We’ll lock idea, seeding, and a bridge to the product — shares and leads over fake view guarantees.",
  },
  "assotsiirovannye-konversii": {
    title: "Budget follows last click only — and helper channels get cut?",
    text: "We’ll compare path roles and 2–3 attribution models — so you don’t kill the top of the funnel that feeds brand closers.",
  },
  "sredniy-chek": {
    title: "AOV looks up — and margin quietly dies on free shipping?",
    text: "We’ll set one lever at a time — relevant cross-sell, a threshold just above current AOV — and watch order CR with margin.",
  },
  "sem-kasaniy": {
    title: "One “magic” channel — and the brand is still unknown at checkout?",
    text: "We’ll map a short multi-touch chain with different messages — 2–3 channels plus retarget, measured beyond last click.",
  },
  "prodazhi-internet-magazin": {
    title: "Twenty growth hacks at once — and still unclear what moved sales?",
    text: "We’ll pick 1–2 levers for the real bottleneck — traffic, conversion, or AOV — and measure revenue with margin.",
  },
  "linkbilder": {
    title: "Link “packs for a week” — and a TOP promise from backlinks alone?",
    text: "We’ll audit the profile and build mentions via quality donors and outreach — pace without a spam explosion, no TOP-tomorrow myths.",
  },
  "tz-na-sayt": {
    title: "Brief says “make it pretty” — and the build turns into endless taste edits?",
    text: "We’ll lock goals, structure, references, and stage deadlines — a prototype before polish, access stays with you.",
  },
  "project-manager": {
    title: "Strong specialists — and the project still spreads across chats?",
    text: "We’ll set scope, “done” criteria, and a status rhythm — coordination without a status-warden culture.",
  },
  "udalennaya-rabota": {
    title: "Remote team online all day — and still unclear what shipped?",
    text: "We’ll align KPIs, one task loop, and sync windows — manage by outcomes, not screen watching.",
  },
  "aydentika-brenda": {
    title: "Pretty logo on the site — and the card, ads, and packing look like three brands?",
    text: "We’ll lock palette, type, mark rules, and a short brand-book extract contractors can actually follow.",
  },
  "negativnyy-otzyv": {
    title: "Negative review online — and the reply either fights or says “sorry for the inconvenience”?",
    text: "We’ll set a calm reply frame: facts, a next step, and a real fix — without aggression or empty templates.",
  },
  "sms-rassylka": {
    title: "SMS blast to a bought list — and more complaints than orders?",
    text: "We’ll build consent-based segments, short copy, and measurement — rare touches, clear opt-out, no cold spam.",
  },
  "skvoznaya-analitika": {
    title: "Pretty dashboard — and still unclear which ad ruble paid for itself?",
    text: "We’ll join spend, UTM, calls, and CRM deals into ROMI — after CRM discipline, not before.",
  },
  "prodvizhenie-prilozheniy": {
    title: "Cheap installs — and day-1 churn eats the whole budget?",
    text: "We’ll set a success event, segments, deep links, and retention KPIs — scale only what stays.",
  },
  "glavnaya-internet-magazina": {
    title: "Homepage full of banners — and still unclear where to click to buy?",
    text: "We’ll assemble header, showcase, short trust copy, and a useful footer — path to catalog first.",
  },
  "razmeshchenie-lendinga": {
    title: "New domain “for the keyword” — and SEO starts from zero again?",
    text: "We’ll pick domain, subdomain, or an in-site URL for the offer and channel — isolation only when it pays off.",
  },
  "prognoz-trafika": {
    title: "One “guaranteed” SEO visit number — and a TOP-in-a-month plan on top?",
    text: "We’ll model demand, positions, and CTR as a range — potential separate from the planned 2–6 month TOP horizon.",
  },
  "metriki-reklamy": {
    title: "Campaign “works” because CTR looks nice — and still no margin?",
    text: "We’ll read the funnel from CTR/CPC to CPA and LTV — fix the landing before scaling spend.",
  },
  "onlayn-obuchenie": {
    title: "Another webinar tool — and the team still zones out in email?",
    text: "We’ll set a content rhythm, practice between sessions, and feedback — hybrid beats monologue slides.",
  },
  "marketingovaya-strategiya": {
    title: "Posts and one-off promos everywhere — and still no shared KPI?",
    text: "We’ll lock one main goal, 1–2 channels, matching landing, and a measurement calendar — before more creatives.",
  },
  "tochki-rosta-sayta": {
    title: "Traffic plateau — and it feels like the niche is already squeezed dry?",
    text: "We’ll diagnose demand, CRO, or channels first — then 1–2 levers, with SEO TOP planned over 2–6 months.",
  },
  "formy-zahvata": {
    title: "Popups everywhere — and still “I’ll think” with no contact left?",
    text: "We’ll set one form goal, minimal fields, consent, and CRM routing — value without exit-popup spam.",
  },
  "giperlokalnyy-targeting": {
    title: "City-wide ads — and still empty tables next door?",
    text: "We’ll set a geopolygon, a “why come here” offer, and measurement — no spy MAC-radar schemes.",
  },
  "omnikanalnyy-kontent-marketing": {
    title: "Site, chat, and ads promise different things — and the client retells their story every time?",
    text: "We’ll audit the journey, sync the offer and tone across 2–3 channels — omni before “yet another network”.",
  },
  "prodvizhenie-offlayn-biznesa": {
    title: "Storefront is fine — and the phone still can’t find you nearby?",
    text: "We’ll fix NAP, reviews, and hyperlocal with visit measurement — maps first, not MAC radar.",
  },
  "uchastie-v-tenderah": {
    title: "Weeks on a bid — and the tender already looks “decided”?",
    text: "We’ll check the contract, margin buffer, and red flags before you spend the team — no dump-to-win.",
  },
  "korporativnoe-obuchenie": {
    title: "“From Monday everyone studies” — and still no skill sticks?",
    text: "We’ll set a role-based plan, measurable module goals, and a mentor — voluntary practice over orders.",
  },
  "korporativnyy-blog": {
    title: "Blog “like a media giant” — and still no leads, only an expensive hobby?",
    text: "We’ll lock a business goal, rubrics, KPI, and an owner inside the company — value before vanity posts.",
  },
  "performance-marketing": {
    title: "Cheap clicks look great — and sales still don’t show up in CRM?",
    text: "We’ll set action KPIs, tracking, and landing–offer fit — optimize for money, not CTR alone.",
  },
  "avtovoronka": {
    title: "Bot on every step — and complex questions still die in the chat?",
    text: "We’ll map steps, fix drop-offs, and escalate to a human — automate routine, not the whole sale.",
  },
  "nayti-marketologa": {
    title: "Hiring “someone who knows ads” — and still no KPI or ownership?",
    text: "We’ll lock the brief, format (agency/in-house/hybrid), and measurable KPIs — cases over hour myths.",
  },
  "zashchita-ot-parsinga": {
    title: "Captcha on every page — and scrapers still hammer the catalog?",
    text: "We’ll set rate limits, risk challenges, and a crawler allowlist — raise scrape cost without killing SEO.",
  },
  "bystrye-otvety-google": {
    title: "Chasing “position zero in a week” — and the page still has no clear answer?",
    text: "We’ll gather question long-tails and put short answers under H2s — no featured-snippet guarantees.",
  },
  "potrebitelskiy-insayt": {
    title: "Audience as “women 25–45” — and ads still talk past the real barrier?",
    text: "We’ll dig into “I want…, but…” from data and reviews — then pack the conflict into the offer.",
  },
  "prognoz-trafika-google-ads": {
    title: "One Keyword Planner number — and the budget still misses CPA?",
    text: "We’ll clean semantics, group by economics, and set CTR/CPC as a range — assumptions before the auction.",
  },
  "audit-reklamnoy-kampanii": {
    title: "Ads spend grows — and still unclear why KPIs miss?",
    text: "We’ll audit tech, economics, and optimization rhythm — short strategy for the client, not only a bug list.",
  },
  "vrednye-sovety-rukovoditelyam": {
    title: "“I’m always right” meetings — and strong people quietly leave?",
    text: "We’ll flip the antipatterns: agenda, kept promises, and retaining the people who already deliver.",
  },
  promoaktsii: {
    title: "Promo runs — and margin melts while shoppers wait for −50%?",
    text: "We’ll pick a mechanic under a goal, count post-discount economics, and set measurement with codes and UTMs.",
  },
  "kartochka-tovara": {
    title: "Product page open — and buyers bounce without seeing price or Buy?",
    text: "We’ll assemble media, specs, price next to CTA, and trust blocks so the decision closes on the page.",
  },
  "vygoranie-sotrudnikov": {
    title: "Team exhausted — and another team-building won’t fix it?",
    text: "We’ll clarify load and goals, protect recovery boundaries, and keep feedback without toxic “positivity”.",
  },
  "kpi-menedzhera-prodazh": {
    title: "Sales KPIs pile up — and still unclear who sells with margin?",
    text: "We’ll set few metrics tied to deals and economics, close gaming loopholes, and control them in CRM.",
  },
  "akkaunt-menedzher": {
    title: "Clients stay — but nobody owns goals, reports, and renewals?",
    text: "We’ll clarify the account role vs sales/PM, set cadence and reporting, and grow the account from real needs.",
  },
  "oshibki-internet-magazina": {
    title: "Store “works” — yet catalog, filters, and pop-ups kill conversion?",
    text: "We’ll catch duplicates, messy categories, weak media, and first-screen blockers that audits often miss.",
  },
  "effektivnost-videoreklamy": {
    title: "Video looks “watched” — and still unclear if brand or sales moved?",
    text: "We’ll build a media → brand → business panel: viewability, lift signals, and paths beyond last-click.",
  },
  "broshennaya-korzina": {
    title: "Cart fills up — and checkout still loses buyers on shipping surprises?",
    text: "We’ll cut friction: guest checkout, trust, clear total earlier, cart bugs, then honest recovery.",
  },
  "kommercheskoe-predlozhenie": {
    title: "Proposals go out — and replies stall on vague price and soft CTA?",
    text: "We’ll match cold/warm/hot tone, put benefit and price up front, and end with one clear next step.",
  },
  "trafik-bez-lidov": {
    title: "Visits grow — and the form still stays empty?",
    text: "We’ll tighten offer, turn features into benefits, fix CTA/form, and check audience fit before more spend.",
  },
  "elektronnaya-kniga": {
    title: "Need an ebook lead magnet — without a designer budget?",
    text: "We’ll structure one theme, ship a solid PDF, and set distribution with consent and download tracking.",
  },
  roas: {
    title: "ROAS looks fine — and margin still doesn’t leave profit?",
    text: "We’ll set honest spend (media + production), tie revenue to attribution, and read ROAS next to unit economics.",
  },
  "ustarevshiy-sayt": {
    title: "Leads drop — and the site still feels like a shrunk desktop from 2012?",
    text: "We’ll diagnose IA, mobile, speed, and tech debt before you spend on a pretty redesign alone.",
  },
  "kognitivnye-iskazheniya": {
    title: "Offer is clear — yet choices stall on fear, framing, and weak trust?",
    text: "We’ll apply exposure, loss aversion, and tiers ethically — with real deadlines and trust signals, not dark patterns.",
  },
  "monitoring-pozitsiy": {
    title: "Green rankings in the report — and the funnel still empty?",
    text: "We’ll keep ranks as a trend sensor, set money KPIs first, and plan TOP growth over months — not a date promise.",
  },
  "cheklist-sayta": {
    title: "Launch near — and the site still misses speed, mobile, or a clear CTA?",
    text: "We’ll prioritize tech, trust, and the path to a lead — without copying a literal “50 must-haves” list.",
  },
  "intent-sotsialnye-prodazhi": {
    title: "Buyers ask in social — and replies turn into spam or lost leads?",
    text: "We’ll score intent levels, set CRM handoff and SLA, and reply ethically on lawful channels.",
  },
  "yuzabiliti-internet-magazina": {
    title: "Traffic hits the store — and checkout still loses on forms and surprises?",
    text: "We’ll fix search, mobile, cart persistence, and transparent totals before pouring more ad spend.",
  },
  "google-assessory": {
    title: "Chasing “rater scores” — and still unclear what E-E-A-T and YMYL demand?",
    text: "We’ll align page purpose, authorship, and trust signals — without myths that a rater hands you TOP.",
  },
  "povedencheskie-faktory": {
    title: "Bounce and weak snippet CTR — and someone suggests “buying” behavior?",
    text: "We’ll fix mobile UX, speed, structure, and honest titles — lawful improvements only, no gaming.",
  },
  "oshibki-reklamnoy-kampanii": {
    title: "Ads budget burns — and search demand or relevance was never checked?",
    text: "We’ll split Search vs Display, lock realistic test limits, and clean the query → ad → landing chain.",
  },
  "pered-zapuskom-sayta": {
    title: "Launch tomorrow — and robots, HTTPS, or analytics still untested?",
    text: "We’ll catch indexation, speed, mobile, and tracking blockers before ad traffic hits the site.",
  },
  "problemnye-klienty": {
    title: "Support chats escalate — and scripts only fuel the conflict?",
    text: "We’ll map client types, set a calm reply frame, and keep stop-lines without losing margin or reputation.",
  },
  "sozdanie-internet-magazina": {
    title: "Store mockup looks fine — and checkout, stock, or mobile still broken?",
    text: "We’ll close the storefront basics before ads: payment, catalog, search, speed, and real support.",
  },
  "tendentsii-veb-dizayna": {
    title: "Trendy UI shipped — and mobile speed or CTA clarity got worse?",
    text: "We’ll filter trends by path, Core Web Vitals, and brand fit — before animation for animation’s sake.",
  },
  "tsvet-internet-magazina": {
    title: "Palette fights the logo — and CTA still disappears on mobile?",
    text: "We’ll lock 2–3 brand colors, readable contrast, and CTA accent as a test — not a conversion myth.",
  },
  favikon: {
    title: "Tabs look unfinished — and the favicon is a stock mark or missing?",
    text: "We’ll ship a readable brand mark in PNG/SVG, wire it in head, and skip someone else’s gallery icons.",
  },
  "vovlechenie-polzovateley": {
    title: "Traffic arrives — and demos go quiet with no clear next step?",
    text: "We’ll map sources, react to passivity, and close onboarding friction before scaling more spend.",
  },
  "poseshhaemost-sayta": {
    title: "Want more visits — but the site is slow and channels are scattered?",
    text: "We’ll audit speed, navigation, and content first, then pick 1–2 white-hat channels without “TOP in a month” myths.",
  },
  serm: {
    title: "Brand SERP full of negativity — and no owner for replies?",
    text: "We’ll map brand results, strengthen owned URLs, and handle reviews ethically — without fake positivity farms.",
  },
  "kraud-marketing": {
    title: "Forum threads look right — but comments read as link spam?",
    text: "We’ll pick live platforms, answer on substance, and place mentions carefully — without review farms or TOP-in-a-month myths.",
  },
  "affiliat-filtr": {
    title: "Several near-identical domains fighting the same queries?",
    text: "We’ll separate real brands/offers or consolidate into one strong site — before an affiliate filter cuts the group.",
  },
  "agregatory-kontenta": {
    title: "Building an aggregator — but sources and empty pages are a legal risk?",
    text: "We’ll lock rights, filters, and page templates so the product serves real intent — not a link warehouse.",
  },
  yuzabiliti: {
    title: "Traffic comes — and people bounce before the lead or purchase?",
    text: "We’ll walk key scenarios on mobile and desktop, cut friction, and tighten the path to the target action.",
  },
  "den-v-prime": {
    title: "Promotion looks like “one line in the account” — and the team is invisible?",
    text: "We’ll show how SEO, paid search, and project prep actually share a day — without TOP-on-launch myths.",
  },
  "vidy-reklamy": {
    title: "Choosing ad types by trend — and teasers eat the brand?",
    text: "We’ll pick a channel mix for demand and unit economics: SEO + paid search as a frame, targeting and banners where they fit.",
  },
  "kluchi-youtube": {
    title: "Tags look perfect — and retention still kills the video in search?",
    text: "We’ll build a working keyword core for title and description, then measure watch-through — not tag spam against giants.",
  },
  ga4: {
    title: "Still reading UA bounce next to GA4 engagement on one chart?",
    text: "We’ll set the event model, key events, and DebugView so reports become a hypothesis tool — not a widget museum.",
  },
  adblock: {
    title: "Site looks broken — and Metrika/GA “dead” with AdBlock on?",
    text: "We’ll separate blocker side effects from real counter issues and keep analytics readable when part of traffic is invisible.",
  },
  "nakrutka-zriteley-youtube": {
    title: "Concurrent looks huge — and chat is empty with no returns?",
    text: "We’ll grow live audiences with announcements, schedule, and retention — without bots, proxy tools, or fake marketplace viewers.",
  },
  "tema-wordpress": {
    title: "Theme looks great on the demo — and slows the blog on real posts?",
    text: "We’ll match needs, speed, and a child theme path — then ship via staging without losing menus and SEO plugins.",
  },
  "veb-arhiv": {
    title: "Need an old page version — and there’s no hosting backup?",
    text: "We’ll use Wayback for history and lawful recovery of your content — without building a strategy on others’ archived copies.",
  },
  "vodyanoy-znak": {
    title: "Photos get copied — and a fat logo kills the frame and shares?",
    text: "We’ll place a careful watermark or switch to previews and licenses — without treating a corner mark as legal armor.",
  },
  "yandeks-disk": {
    title: "Files live on USB sticks — and Disk is a shared dump without 2FA?",
    text: "We’ll set folder structure, link rights, and sync — and keep Disk as a complement to site backups, not a replacement.",
  },
  "montazh-youtube": {
    title: "Effects pile up — and viewers leave on bad audio and dead pauses?",
    text: "We’ll lock a simple pipeline and one editor for your level — rhythm and sound first, not a 2020 tool catalog.",
  },
  "magnet-ssylka": {
    title: "Need to share a large file by hash — without confusing format with piracy?",
    text: "We’ll explain magnet URI structure and lawful use — with clear risks, rights, and no pirate-tracker guides.",
  },
  "virtualnyy-nomer": {
    title: "Need call tracking — and free public SMS numbers look tempting?",
    text: "We’ll pick a virtual line under contract for ads and CRM — without grey multi-account or shared inbox codes.",
  },
  "chrome-rasshireniya-marketing": {
    title: "Browser full of “top-25” extensions from 2020 — and half are dead?",
    text: "We’ll build a short stack by task: screenshots, UTM, passwords, one tracker — from the official store only.",
  },
  canva: {
    title: "Need posts every week — and every template screams another brand?",
    text: "We’ll lock a Brand Kit and a repeatable layout system in Canva — and call a designer when identity gets complex.",
  },
  "uskorenie-wordpress": {
    title: "WordPress crawls — and you’re chasing 100/100 while the cart breaks?",
    text: "We’ll measure TTFB and LCP, clean theme and plugins on staging, then add cache/CDN without killing business flows.",
  },
  pwa: {
    title: "Want an “app shortcut” — and expect PWA alone to lift rankings?",
    text: "We’ll ship HTTPS, manifest, and Service Worker where repeat visits pay off — after Core Web Vitals, not instead of them.",
  },
  "yandeks-spravochnik": {
    title: "Local queries go to Maps — and the Yandex card is empty or unverified?",
    text: "We’ll verify ownership, align NAP, fill photos and hours, and handle reviews — without fake ratings or someone else’s address.",
  },
  logotip: {
    title: "Need a logo — and only have a pretty PNG that fails as a favicon?",
    text: "We’ll pick mark vs wordmark, lock vector sources and rights, and fit the sign into identity — not one random Canva draft.",
  },
  "google-analytics-nastroyka": {
    title: "Still installing UA views — and Realtime shows nothing in GA4?",
    text: "We’ll create a GA4 property and web stream, wire gtag or GTM once, and verify in DebugView before chasing ecommerce.",
  },
  "google-otzyvy-klientov": {
    title: "Want seller stars in Shopping — and confuse them with Maps reviews?",
    text: "We’ll connect Customer Reviews via Merchant Center correctly — with GTINs, thank-you opt-in, and no fake ratings.",
  },
  "ip-telefoniya": {
    title: "Call center grows — and you’re still on one desk line without CRM?",
    text: "We’ll pick IP telephony for queues, recording, and CRM — after a voice quality test, not a “−15% for everyone” promise.",
  },
  "voronka-prodazh-gtm": {
    title: "Purchases are rare — and you only see visits, not where checkout breaks?",
    text: "We’ll map real checkout steps, ship GA4 events via one GTM container, and read Funnel drop-offs before more pixels.",
  },
  "retargeting-direkt": {
    title: "Warm traffic returns — and one retargeting ad burns frequency with no CPA control?",
    text: "We’ll split Direct retargeting by Metrika segments, exclude buyers, and optimize placements by your economics — not 2019 CTR myths.",
  },
  "google-kalendar": {
    title: "Meetings pile up — and one calendar mixes clients, deep work, and personal?",
    text: "We’ll set calendar layers, working hours, Meet, and sharing so invites stop eating the day.",
  },
  "vebvizor": {
    title: "Conversion drops — and you only see bounce %, not where people stuck?",
    text: "We’ll enable Webvisor correctly, check tech, and sample painful URLs for UX hypotheses — not endless random sessions.",
  },
  "google-alerts": {
    title: "Brand mentions appear — and you still find them by hand in search?",
    text: "We’ll set a narrow Google Alerts set for brand and topics so digests stay useful, not noisy.",
  },
  "istoriya-domena": {
    title: "Buying a “aged” domain — and you haven’t checked Wayback and backlinks?",
    text: "We’ll audit archive, links, and index before payment — so you don’t buy spam with a pretty name.",
  },
  "cms-internet-magazina": {
    title: "Picking a store CMS — and the “TOP engine” pitch ignored TCO and 1C?",
    text: "We’ll map catalog, integrations, and team, then shortlist Bitrix / Magento / OpenCart / Woo / CS-Cart without 2019 price myths.",
  },
  "facebook-ads": {
    title: "Testing Meta ads — and still no pixel, only CTR hope?",
    text: "We’ll set events, cold/look-alike/retarget contours, and creatives so the test is judged by CPA/ROI — not 2018 reach FOMO.",
  },
  "ab-testy-reklamy": {
    title: "Two ads fight on CTR — and you still crown a winner without CPA?",
    text: "We’ll set one-hypothesis rotation/experiments in Direct and Google Ads and read reports by money, not a one-day CTR.",
  },
  "novogodnyaya-rasprodazha": {
    title: "Holiday sale in ads — and last year’s US Trends is your only plan?",
    text: "We’ll forecast from your season, split buyer stages, and run a dated campaign with a clean post-holiday exit.",
  },
  "tilda": {
    title: "Landing in a week — and you started with pretty blocks before the offer?",
    text: "We’ll lock structure and copy first, then assemble Tilda blocks, domain, and forms without “TOP on publish day” myths.",
  },
  "strategii-google-ads": {
    title: "Smart Bidding on — and goals are empty or you flip strategy daily?",
    text: "We’ll match strategy class to KPI, verify conversions, and protect the learning window — not 2018 button-name folklore.",
  },
  "adaptivnye-mediynye-obyavleniya": {
    title: "RDA live — and one landscape banner still crops into nonsense?",
    text: "We’ll prep multi-ratio assets, logos, and copy, then review previews before scaling Display spend.",
  },
  "proverka-indeksatsii": {
    title: "Pages “gone” from search — and you only checked site: once?",
    text: "We’ll read GSC/Webmaster coverage, spot-check key URLs, and fix robots/noindex — crawl isn’t an index guarantee.",
  },
  "minus-slova-direkt": {
    title: "Search terms burn budget — and negatives are still a random web list?",
    text: "We’ll build negatives from your query report, place them by level, and cross-cut clusters without killing your own keywords.",
  },
  "videoset-yandeksa": {
    title: "Video Network on — and the plan still quotes 2018 average CPV?",
    text: "We’ll match format and length to KPI, test 1–2 audiences, and judge funnel contribution — not someone else’s VTR table.",
  },
  "kontent-marketing-metrika": {
    title: "Publishing weekly — and Metrika is only “visits went up after a repost”?",
    text: "We’ll set content goals, read engagement and sources over months, and edit the plan by conversions — not one-day spikes.",
  },
  "google-merchant-center": {
    title: "Shopping ads wanted — and the feed still mismatches price and stock?",
    text: "We’ll prep GMC, verify the site, clean diagnostics, and link Google Ads so Shopping launches on honest product data.",
  },
  "yandeks-iks": {
    title: "Still optimizing for a vanished SQI badge from 2018 guides?",
    text: "We’ll shift the brief to Webmaster diagnostics, indexing, and conversions — the working replacement for the old quality score.",
  },
  "mobile-first-indeks": {
    title: "Googlebot smartphone sees a cut-down mobile — while desktop looks “complete”?",
    text: "We’ll check content parity, markup, and Search Console so the mobile document is what ranking should trust.",
  },
  "perenos-direkta-google-ads": {
    title: "Dumping Direct Excel into Google Ads — and watching broad match burn budget?",
    text: "We’ll map match types, negatives, and geo, then check Editor before launch so the second channel doesn’t become a leak.",
  },
  "yandeks-dialogi": {
    title: "Want a Yandex search chat button — with nobody answering and no CRM?",
    text: "We’ll verify product status, set an operator SLA, and wire leads so the channel helps instead of hurting trust.",
  },
  "interfeys-yandeks-direkt": {
    title: "Still optimizing Direct from 2018 UI screenshots and “beta” guides?",
    text: "We’ll set the current cabinet around tables, filters, and weekly conversion reports — the redesign logic that still works.",
  },
  "metrika-posetiteli": {
    title: "Looking only at yesterday’s visits — and missing the multi-touch path to a lead?",
    text: "We’ll use visitor profiles, segments, and first-source cards so Metrika shows the lifecycle, not just daily traffic.",
  },
  "vzveshennyy-ctr-direkt": {
    title: "Crowning creatives by raw CTR while top positions inflate the score?",
    text: "We’ll add weighted CTR next to conversions so you compare ads fairly — and still decide by CPA, not clicks alone.",
  },
  "skorost-sayta": {
    title: "Chasing PageSpeed 100 while mobile LCP on key URLs is still red?",
    text: "We’ll measure lab and field, pick the real brake (TTFB or CWV), and ship fixes that move UX — not vanity scores.",
  },
  "yandeks-market": {
    title: "Applying to Yandex Market with a stale feed and missing return policy?",
    text: "We’ll align the site, YML, and delivery rules so moderation is about fit — not a reject loop.",
  },
  "turgenev": {
    title: "Chasing a zero Turgenev score while the page still reads like keyword soup?",
    text: "We’ll use the report as an editorial filter: cut clear overspam, keep useful terms, and write for people first.",
  },
  "proksi-server": {
    title: "Picking a “free proxy list” for logins — or mixing reverse proxy with ban bypass?",
    text: "We’ll separate infrastructure (gateway / reverse / CDN) from gray IP tricks and pick a provider you can actually trust.",
  },
  "pochta-dlya-domena": {
    title: "Still writing clients from a personal @mail while MX and SPF aren’t set?",
    text: "We’ll connect domain mail, auth records, and 2FA so brand addresses deliver — and the team stays secure.",
  },
  "wordstat": {
    title: "Planning SEO on a raw Wordstat number — and calling it “exact demand”?",
    text: "We’ll set region, operators, and seasons so frequency guides the core — without promising TOP from one big figure.",
  },
  "menedzher-paroley": {
    title: "Still sharing client logins in chat — or one password across every cabinet?",
    text: "We’ll pick a vault for your devices and team, move critical access, and lock it with 2FA instead of passwords.txt.",
  },
  "wordpress-admin": {
    title: "Locked out of wp-admin — and about to edit the DB without a backup?",
    text: "We’ll recover via email or the host panel first, then harden the admin account so login stops being a quest.",
  },
  "yandeks-brauzer": {
    title: "About to install Yandex Browser from a “free software + SMS” site?",
    text: "We’ll stick to the official installer, skip junk offers, and import bookmarks only when you actually need them.",
  },
  "robots-txt-joomla": {
    title: "Copying a Joomla 3.3 robots.txt wall onto Joomla 5 — and closing real landings?",
    text: "We’ll adapt Disallow to your version, keep Sitemap on HTTPS, and verify in webmaster panels before it hurts crawl.",
  },
  "modx-local": {
    title: "Installing MODX from a random “CMS pack” — or leaving /setup on the local host?",
    text: "We’ll use the official package, wire DB + virtual host, finish setup, and remove setup before you build templates.",
  },
  "obzor-brauzerov": {
    title: "Picking a browser from a 2018 “champion” list — while Edge and extensions moved on?",
    text: "We’ll match candidates to your scenarios, privacy needs, and official downloads — then keep a second engine for checks.",
  },
  "robots-txt-wordpress": {
    title: "About to Disallow all of /wp-content — and close theme CSS with it?",
    text: "We’ll close admin and clear junk, leave uploads/theme assets reachable, and set Sitemap over HTTPS with a panel check.",
  },
  "wordpress-plaginy": {
    title: "Installing every “popular” plugin — or a nulled ZIP from a random site?",
    text: "We’ll install from the catalog or a trusted ZIP, activate under a backup, and remove unused plugins instead of hoarding risk.",
  },
  "bitrix-publichnyy-razdel": {
    title: "Hunting Bitrix forms deep in Administration — while edit mode would fix the include area?",
    text: "We’ll use the public bar and area edit mode with the right roles so content updates don’t break the layout.",
  },
  "bitrix-svoystva-infoblokov": {
    title: "Pasting a 2017 Bitrix property snippet — and the card still shows empty fields?",
    text: "We’ll wire DISPLAY_PROPERTIES in a template copy, match the property code and type, and clear cache so specs actually render.",
  },
  "registratsiya-domena": {
    title: "Paying for a domain with extras in the cart — and no NS plan for hosting?",
    text: "We’ll lock the name, owner data, and name servers at a registrar you control — then put renewal on the calendar.",
  },
  "bitrix-admin": {
    title: "Can’t get into Bitrix?",
    text: "We’ll sort `/bitrix/admin` and password reset — without mixing it up with the on-site toolbar.",
  },
  hosting: {
    title: "Picking hosting for a site?",
    text: "We’ll match the type and criteria — without “uptime = TOP” myths and paid rankings.",
  },
  "metrika-karty": {
    title: "Metrica maps not giving hypotheses?",
    text: "We’ll unpack clicks, forms, and the Session Replay link — without outdated cabinet screenshots.",
  },
  "wordpress-ustanovka": {
    title: "Installing WordPress on hosting?",
    text: "We’ll walk DB, files, and the install wizard — without PHP 4.3 guides.",
  },
  "bitrix-plyusy-minusy": {
    title: "Choosing Bitrix — or having doubts?",
    text: "We’ll unpack pros, cons, and TCO — without 2017 rankings and the “CMS = TOP” myth.",
  },
  "yandeks-auditorii": {
    title: "Lost in Direct audiences?",
    text: "We’ll sort segments, Crypta, and remarketing — without other people’s “+35% conversion.”",
  },
  "obzor-cms": {
    title: "Picking a CMS for a site?",
    text: "We’ll match the job and TCO across popular engines — without a forever “#1” ranking.",
  },
  "obratnyy-zvonok": {
    title: "Need a callback from the site?",
    text: "We’ll suggest a form or widget and Metrica measurement — without aggressive popups.",
  },
  "skachat-stories-instagram": {
    title: "Saving Stories?",
    text: "We’ll cover archive and Highlights for yours — without a catalog of shady downloaders.",
  },
  "idei-storis-vk": {
    title: "Need ideas for VK Stories?",
    text: "We’ll assemble niche formats — without empty challenges “for thousands of views.”",
  },
  "aktivnost-vk": {
    title: "Checking logins or group ER on VK?",
    text: "We’ll separate security sessions from community stats — without panicking over IP.",
  },
  "ohvat-instagram": {
    title: "Don’t know where reach went?",
    text: "We’ll unpack reach vs impressions and white-hat growth — without bots or fake guarantees.",
  },
  vzaimopiar: {
    title: "Negotiating mutual promo?",
    text: "We’ll help with format and partners — without grey fake-engagement exchanges.",
  },
  "otlozhennyy-posting-instagram": {
    title: "Need a post queue on Instagram?",
    text: "We’ll set the plan and slots — without grey auto-posters or stealing other people’s content.",
  },
  "privetstvie-vk": {
    title: "Greeting in the VK community feels flat?",
    text: "We’ll craft the first step for guests — without spam pop-ups or promises that a widget alone grows the group.",
  },
  "generator-nikov": {
    title: "Stuck choosing a free username?",
    text: "We’ll help pick a readable brand handle — without reseller buys or “free everywhere” myths.",
  },
  "ohvat-podpischikov-vk": {
    title: "Follower reach stuck while the base is big?",
    text: "We’ll unpack delivery to your audience — without fake likes or “buy 50k” tricks.",
  },
  "podpis-foto-instagram": {
    title: "Captions under photos feel empty?",
    text: "We’ll tie copy to the frame and tone — without 30 random hashtags or gender clichés.",
  },
  "spam-vk": {
    title: "Spam flooding VK messages?",
    text: "We’ll help lock privacy and recover access — without grey bulk-mail “growth” tools.",
  },
  "url-youtube": {
    title: "Channel link still looks like an ID cipher?",
    text: "We’ll set a readable @handle and sync it everywhere — without outdated Studio screenshots.",
  },
  "vovlechennost-instagram": {
    title: "ER looks low and the feed feels quiet?",
    text: "We’ll pick one formula and grow reactions — without fake likes or the “mandatory 3%” myth.",
  },
  "soobshhestva-vk": {
    title: "Not sure which VK community format to pick?",
    text: "We’ll match public, group, or event to the goal — without bots on day one or growth guarantees.",
  },
  "keisy-facebook-ads": {
    title: "Meta Ads cases look impressive but unclear?",
    text: "We’ll turn the mechanics into your checklist — without copying someone else’s ROI as a promise.",
  },
  "zakazchiki-kopiraytera": {
    title: "Looking for copywriting clients without dumping?",
    text: "We’ll tighten portfolio and pitches — without spam blasts or outdated freelance-group catalogs.",
  },
  "nayti-cheloveka-instagram": {
    title: "Can’t find someone on Instagram?",
    text: "We’ll map username, search, and contacts — without shady “deanonymizer” services.",
  },
  "post-facebook": {
    title: "Publishing on Facebook feels messy?",
    text: "We’ll pick the surface and format — without outdated button screenshots or boosting empty posts.",
  },
  "video-stories-instagram": {
    title: "Stories video looks soft after upload?",
    text: "We’ll prep 9:16 and a clear CTA — without grey downloaders of other people’s Stories.",
  },
  "udalenie-akkaunta-instagram": {
    title: "Closing Instagram and unsure which path?",
    text: "We’ll separate pause, switch to personal, and full delete — before you confirm anything irreversible.",
  },
  "geymifikatsiya-socseti": {
    title: "Want engagement without prize hunters?",
    text: "We’ll pick a native mechanic for your audience — without “repost and win” spam or grey bots.",
  },
  "arhiv-instagram": {
    title: "Need to tidy the grid without deleting?",
    text: "We’ll show archive vs delete vs Stories archive — so valuable posts stay recoverable.",
  },
  "ssylka-stories-instagram": {
    title: "Still hunting for swipe-up in Stories?",
    text: "We’ll set the Link sticker and fallbacks — without grey “10k unlock” apps.",
  },
  "zarabotok-gruppy-vk": {
    title: "Want to sell ads in your VK group?",
    text: "We’ll build a honest media kit and price — without bots or “guaranteed 100k per post.”",
  },
  "neskolko-stories-instagram": {
    title: "Stories series feels messy or unfinished?",
    text: "We’ll set frame order and a first-screen hook — without grey emulators or empty spam frames.",
  },
  emodzi: {
    title: "Emoji helping or just cluttering the offer?",
    text: "We’ll match tone to the audience — without ranking myths or Title spam for a click.",
  },
  "vovlechennost-socseti": {
    title: "Audience quiet across social networks?",
    text: "We’ll grow dialogue with white levers — without fake likes or a cult of “normal ER.”",
  },
  "sekretnyy-chat-telegram": {
    title: "Need a Telegram secret chat without myths?",
    text: "We’ll separate E2E mode from cloud chats — without “absolute shield” illusions.",
  },
  pinterest: {
    title: "Not sure if Pinterest fits the funnel?",
    text: "We’ll set boards and pin links for traffic — without stolen images or “pretty pin = sales” myths.",
  },
  "vtoroy-akkaunt-instagram": {
    title: "Need a second Instagram without mixing feeds?",
    text: "We’ll split personal and brand roles — without grey multi-clients or empty extra pages.",
  },
  "prosmotry-stories-instagram": {
    title: "Stories views stuck despite a big base?",
    text: "We’ll fix the first frame and dialogue — without buying views or empty “ten stories a day.”",
  },
  "promo-instagram": {
    title: "Confused Promote with a store discount?",
    text: "We’ll set a test boost with one goal — after a clear offer, not instead of Ads Manager.",
  },
  "zakrytyy-akkaunt-instagram": {
    title: "Private account vs delete — mixed up?",
    text: "We’ll map privacy settings for personal or brand profiles — without fake “hacks.”",
  },
  "prosmotr-zakrytogo-akkaunta": {
    title: "Need content from a private profile?",
    text: "We’ll plan a request-and-dialogue path — without shady viewers or fake accounts.",
  },
  "sohranenie-efira-instagram": {
    title: "Live ended and the recording vanished?",
    text: "We’ll set a save-and-repurpose workflow — without shady “download any Live” tools.",
  },
  "muzyka-stories-instagram": {
    title: "Music sticker missing or rights unclear?",
    text: "We’ll pick a legal sound path for Stories — sticker or editor, no password phishing.",
  },
  "rekomendatsii-tiktok": {
    title: "For You not expanding beyond a tiny test pool?",
    text: "We’ll tighten the hook and watch-through — without fake likes or 2020 hashtag lists.",
  },
  "nazvanie-auditorii-instagram": {
    title: "Saved audiences a mess of slogan names?",
    text: "We’ll set a naming template for segments — geo, source, goal — readable a month later.",
  },
  "nastroika-reklamy-instagram": {
    title: "Promote isn’t enough for a full campaign system?",
    text: "We’ll wire Meta Ads with Instagram placements, one goal, and a clear test budget.",
  },
  "reklama-tiktok": {
    title: "Ready to test TikTok Ads without 2020 budget myths?",
    text: "We’ll set a vertical creative, one goal, and limits from Ads Manager — not old articles.",
  },
  "baza-email-socseti": {
    title: "Followers grow but the email list stays empty?",
    text: "We’ll set one subscribe landing with consent and UTM across networks — no scraping.",
  },
  "verifikatsiya-instagram": {
    title: "Chasing a blue check for reach — or for name protection?",
    text: "We’ll map official verification vs Meta Verified — without middlemen selling “turnkey badges.”",
  },
  "socseti-i-seo": {
    title: "Still betting SEO on likes and “social signals”?",
    text: "We’ll connect social traffic, brand, and landings with UTM — without fake engagement for rankings.",
  },
  "naym-smm": {
    title: "Hiring SMM from pretty screenshots?",
    text: "We’ll set a short audit test and lead-based KPIs — without TOP guarantees or password handoffs.",
  },
  "novostnoy-sayt": {
    title: "News portal drowning in duplicate URLs and slow mobile?",
    text: "We’ll clean tech templates and distribution — without promising audience ×2 next week.",
  },
  "vremya-posta-instagram": {
    title: "Still posting by a 2019 “best time” table?",
    text: "We’ll pick slots from your insights and a two-week test — content first, timing second.",
  },
  "inflyuenser-marketing": {
    title: "Paying creators because “everyone does influencers”?",
    text: "We’ll shortlist niche micros with live ER and a promo-code test — before scaling spend.",
  },
  "vidy-kontenta-socseti": {
    title: "Feed stuck between endless sales and empty memes?",
    text: "We’ll map five content types into a two-week mix — adapted per platform, measured by replies.",
  },
  "triggernye-rassylki": {
    title: "Still blasting the same digest while carts go cold?",
    text: "We’ll set welcome and abandoned-cart triggers with consent — before ten complex chains.",
  },
  "chat-bot-vk": {
    title: "VK community drowning in the same FAQ every day?",
    text: "We’ll script a FAQ + lead bot with an operator exit — without spam blasts.",
  },
  "idei-stories-instagram": {
    title: "Stories feel empty without paid templates?",
    text: "We’ll build a weekly mix — intro, FAQ, polls, soft CTA — measured by replies, not pretty frames.",
  },
  "heshtegi-instagram": {
    title: "Still stuffing 30 hashtags for a “TOP” promise?",
    text: "We’ll pick a short niche mix plus geo where it helps — and check Insights in two weeks.",
  },
  "smm-strategiya": {
    title: "Social busywork without a business goal?",
    text: "We’ll lock one monthly goal, three owned tasks, and a two-week cut of what doesn’t move the metric.",
  },
  "teksty-uzkaya-tematika": {
    title: "Niche copy sounding generic — or outdated on facts?",
    text: "We’ll rewrite for beginners with dated sources and real expertise — no fake “personal experience.”",
  },
  "video-obzor-tovara": {
    title: "Product pages still photo-only — and returns keep coming?",
    text: "We’ll script short reviews for top SKUs and place them next to add-to-cart — measured by conversion, not “cinema.”",
  },
  "zashchita-kontenta": {
    title: "Copies of your articles showing up on other domains?",
    text: "We’ll set monitoring, publication proof, and a removal playbook — not just disable right-click.",
  },
  "matritsa-kontenta": {
    title: "Publishing calendar full — journey gaps still empty?",
    text: "We’ll map persona × stage × goal × channel, then fill the holes before the next month’s dates.",
  },
  "videokontent": {
    title: "Need video but unsure which format actually helps?",
    text: "We’ll pick one funnel job, script a short clip with CTA, and decide in-house vs vendor from the result.",
  },
  "bystree-pisat-stati": {
    title: "Articles taking forever — and quality still slipping?",
    text: "We’ll lock a brief, H2 outline, and a draft-then-edit rhythm so pace rises without more rework.",
  },
  "longrid": {
    title: "Need depth that people actually finish — not a wall of text?",
    text: "We’ll shape one researched story with structure, layout, and a CTA that doesn’t break the read.",
  },
  "struktura-stati": {
    title: "Articles scanning poorly — or H2s just for “SEO”?",
    text: "We’ll rebuild the outline around reader questions so headings match the blocks — not keyword stuffing.",
  },
  "stranitsa-kontaktov": {
    title: "Contacts buried in the header — or NAP out of sync?",
    text: "We’ll clean a dedicated Contacts page: clickable reach, hours, map, and matching NAP across the site.",
  },
  "prizyv-k-deystviyu": {
    title: "Strong page — but the ask is vague or pushy?",
    text: "We’ll write one primary CTA with a real benefit, place it at the decision moment, and measure clicks.",
  },
  "idei-kontent-prodvizheniya": {
    title: "Need blog topics that match real demand — not trends?",
    text: "We’ll turn client questions into how-tos, guides, and honest reviews tied to your content matrix.",
  },
  "vizualizatsiya-dannyih": {
    title: "Reports stuck in spreadsheets — or dashboards nobody trusts?",
    text: "We’ll pick the right stack for your sources and build one report with clear metrics before paying for BI.",
  },
  "temy-dlya-statey": {
    title: "Blank page every week — and topics from nowhere?",
    text: "We’ll harvest client questions and search demand into a backlog with intent — no competitor copy-paste.",
  },
  "gostevoy-post": {
    title: "Guest posts stuck on junk write-for-us lists?",
    text: "We’ll shortlist live niche sites, pitch a content-gap topic, and write for their readers — not anchor spam.",
  },
  "besplatnye-ssylki": {
    title: "Chasing free links with directory blasts and forum fakes?",
    text: "We’ll build mentions from useful content, selective directories, and honest crowd — at a pace that won’t spike.",
  },
  "kontentnoe-prodvizhenie": {
    title: "Publishing a lot — still thin on usefulness and intent?",
    text: "We’ll tighten landings and a content cadence: facts, natural keywords, updates — no uniqueness-% cult.",
  },
  "kontent-b2b": {
    title: "B2B pages full of slogans — light on proof?",
    text: "We’ll add real reviews, a measurable case, and a contact path that answers in business hours.",
  },
  "kartinki-seo": {
    title: "Stock banners slowing the page — and alt stuffed with keywords?",
    text: "We’ll swap in own/AI visuals, compress for CWV, and set alt, captions, and og:image that match the offer.",
  },
  "klyuchi-yandeks-direkt": {
    title: "Direct keyword list growing — still no clear goal or KPI?",
    text: "We’ll size Search vs YAN sets to one landing and CPA/ROAS — not a magic phrase count.",
  },
  "byudzhet-yandeks-direkt": {
    title: "Burning Direct spend before you know if CPA fits?",
    text: "We’ll set a CPC ceiling from your economics, a daily/weekly cap, and a calm test window — no copied “minimum.”",
  },
  "mediaplan": {
    title: "Ads on five platforms — and no shared table of goals?",
    text: "We’ll build a light media plan: 1–2 test channels, budget, KPI, and a review date before you scale.",
  },
  "zabluzhdeniya-konteksta": {
    title: "PPC brief full of “TOP-1 or nothing” myths?",
    text: "We’ll lock KPI and CPA, drop the harmful stereotypes, and scale only after a stable test — not linear budget dreams.",
  },
  "moderatsiya-facebook-ads": {
    title: "Meta ads rejected — or approved with zero delivery?",
    text: "We’ll fix policy hits in the creative, then check bid and audience overlap before wasting another appeal.",
  },
  "target-vk": {
    title: "VK Ads test spreading across every interest and format?",
    text: "We’ll lock one format, a narrow audience, pixel if needed, and a daily cap — expanded only after CPA holds.",
  },
  "kogortnyy-analiz": {
    title: "Cheap clicks that never come back — and you only see “yesterday”?",
    text: "We’ll build one first-visit cohort by channel and read retention/LTV over weeks — not just CPC.",
  },
  "tipy-kampaniy-google-ads": {
    title: "Turning on every Google Ads type at once?",
    text: "We’ll pick 1–2 campaign types by funnel role, separate brand from the core, and test before spreading spend.",
  },
  "analiz-konkurentov-kontekst": {
    title: "Launching paid search without knowing who’s in the auction?",
    text: "We’ll map 3–7 paid competitors: keywords, ads, landings, and USP gaps — then size your test from your CPA.",
  },
  "moderatsiya-meditsina": {
    title: "Healthcare ads rejected — and the site still has red-flag claims?",
    text: "We’ll align licenses, neutral copy, and Search vs networks before spending on another resubmit cycle.",
  },
  "podryadchik-kontekst": {
    title: "Lots of clicks from the agency — still no clear CPA story?",
    text: "We’ll lock access, lead definition, and a monthly hypothesis report so you control results — not pretty screenshots.",
  },
  "tipy-ssylok": {
    title: "Buying link packs again — or building a channel map?",
    text: "We’ll audit the profile, pick 2–3 white-hat channels for your niche, and cut farm noise before you spend on placements.",
  },
  "algoritmy-google": {
    title: "After a Google update — chasing names or fixing signals?",
    text: "We’ll check content, links, and mobile hygiene against core principles so growth doesn’t rely on outdated uniqueness myths.",
  },
  "zagolovki-h1-h6": {
    title: "Keywords stuffed into every heading — or one clear H1?",
    text: "We’ll align H1–H2 with intent and title so the page outline helps people and search — without a keyword sheet in one tag.",
  },
  "oshibki-nastroyki-konteksta": {
    title: "Budget scaling — while Search and networks still share one mess?",
    text: "We’ll close extensions, geo, landing, and goals first so you don’t argue about “more keywords” on a broken setup.",
  },
  "indeksatsiya-sayta": {
    title: "Pages not in the index — still buying links “for the spider”?",
    text: "We’ll connect Webmaster/GSC, fix robots and sitemap, and check coverage so indexing becomes a URL status — not a myth.",
  },
  "bidder": {
    title: "Auto-bids 24/7 — and still no CPA control?",
    text: "We’ll decide if a bidder beats native strategies, lock limits and API rights, and compare before/after KPIs on a hard test.",
  },
  "klassifikatsiya-zaprosov": {
    title: "Chasing high-frequency keys — without labeling intent?",
    text: "We’ll mark info vs commercial vs navigational on your core so each cluster gets the right page — not one thin URL for everything.",
  },
  "rasshirenie-tseny-google": {
    title: "Ads without a price — while competitors show it in the SERP?",
    text: "We’ll sync honest prices with the landing, pick the right price-extension type, and test CTR/CPA before you scale.",
  },
  "brif-kontekst": {
    title: "Launching ads — with “grow sales” as the only KPI?",
    text: "We’ll lock goal, test budget, geo, USP, and lead definition on one page so reports don’t turn into blame games.",
  },
  "malo-pokazov": {
    title: "“Low impressions” on half the groups — deleting the whole long tail?",
    text: "We’ll export the status, merge related LF keywords, and clean excess negatives so demand can accumulate again.",
  },
  "formaty-izobrazheniy-rsya": {
    title: "One square creative for every YAN slot?",
    text: "We’ll match current size Help, add missing ratios to the working network campaign, and tag formats so reach doesn’t die.",
  },
  "baden-baden": {
    title: "Keyword sheets “for the bot” — still hoping for a filter day?",
    text: "We’ll cut stuffing, restore structure and reader value, and check risk without buying mythical “Baden-Baden removal.”",
  },
  "minusinsk": {
    title: "Bought link packs — and commercial rankings suddenly fell?",
    text: "We’ll separate season from a link hit, clean controllable junk, and rebuild a natural profile without “remove Minusinsk in a week.”",
  },
  "auktsion-direkt": {
    title: "Raising bids again — while ads and landing still lose on quality?",
    text: "We’ll fix negatives, creatives, and CPA math first so you compete in the auction without a price war “prop.”",
  },
  "vybor-domena": {
    title: "Picking a domain you’ll dictate for years — still guessing the spelling?",
    text: "We’ll check zone, uniqueness, spoken clarity, and history so the name helps marketing instead of confusing clients.",
  },
  "instrumenty-marketologa": {
    title: "Ten freemium tools — and still no clear stack for your KPIs?",
    text: "We’ll pick a minimal set: analytics, ESP, research, surveys, tasks — pilot free limits before you pay to expand.",
  },
  "email-strategiya": {
    title: "Sending pretty templates — without a map of goals and segments?",
    text: "We’ll audit the list, lock offer and segments, and pilot a welcome plus triggers before you scale frequency.",
  },
  "tekst-email-rassylki": {
    title: "Design polished — but the email still has no clear next step?",
    text: "We’ll fix one goal, audience language, and a pre-send checklist so the copy persuades instead of filling the inbox.",
  },
  "email-dlya-biznesa": {
    title: "Not sure if email fits your service, product, or B2B cycle?",
    text: "We’ll map repeat touches, opt-in, and personas so you don’t launch a blast where the channel can’t help.",
  },
  "verstka-email": {
    title: "Looks perfect in Chrome — broken in Outlook and on mobile?",
    text: "We’ll rebuild a table frame, inline critical CSS, and test clients so the send isn’t a layout lottery.",
  },
  "oformlenie-email": {
    title: "Pretty email — but the offer and CTA still get lost?",
    text: "We’ll fix hierarchy, series style, and above-the-fold offer so design helps CTR instead of fighting the inbox.",
  },
  "push-uvedomleniya": {
    title: "Push every hour — and subscribers hit Block?",
    text: "We’ll set permission timing, short copy, and frequency limits so push nudges instead of annoying.",
  },
  "uderzhanie-podpischikov": {
    title: "Unsubscribes climbing — and the list feels dead?",
    text: "We’ll fix touch quality, frequency, and an honest opt-out page so the base stays smaller but stronger.",
  },
  "otzyv-2gis": {
    title: "Negative 2GIS review — and “delete everything” won’t work?",
    text: "We’ll map reply, author dialogue, and rule-based reports so you don’t nuke the listing in panic.",
  },
  "yandeks-katalog": {
    title: "Still hunting Yandex.Catalog registration in 2020s quotes?",
    text: "We’ll rebuild local presence around the site, Webmaster, and live map listings — without a dead catalog ritual.",
  },
  "region-sayta": {
    title: "Region checkbox set — but local queries still ignore you?",
    text: "We’ll align NAP, Webmaster, and Business/Maps signals so locality matches where you actually work.",
  },
  "geotargeting-direkt": {
    title: "Direct geo too wide — budget leaking into other cities?",
    text: "We’ll tighten search vs network regions and advanced geotargeting so you pay for people you can actually serve.",
  },
  "chat-telegram": {
    title: "Need a Telegram group — without turning it into spam chaos?",
    text: "We’ll set privacy, admin rights, and pinned rules so the chat serves the team or clients, not noise.",
  },
};

const articleCtaEs: Record<string, { title: string; text: string }> = {
  ftp: {
    title: "¿Necesitas hosting y acceso al sitio sin dolores?",
    text: "Te ayudamos a montar SFTP, permisos y un flujo seguro — sin editar prod a ciegas.",
  },
  "start-internet-magazina": {
    title: "¿Vas a lanzar una tienda online?",
    text: "Te ayudamos a ordenar catálogo, pago y canales de demanda — sin promesas de millón pasivo.",
  },
  "chto-takoe-seo": {
    title: "¿Necesitas SEO sin magia de rankings?",
    text: "Te ayudamos a separar prep y primera página — con un plan claro y horizonte de meses.",
  },
  "semanticheskoe-yadro": {
    title: "¿Necesitas un núcleo semántico limpio?",
    text: "Montamos marcadores, clusters y landings — sin hinchar una hoja inútil.",
  },
  "kontent-plan": {
    title: "¿Necesitas un plan de contenidos que se cumpla?",
    text: "Ordenamos formatos, temas y calendario — sin el «¿qué publicamos hoy?» diario.",
  },
  "ssl-sertifikat": {
    title: "¿Necesitas HTTPS sin errores de certificado?",
    text: "Te ayudamos a montar TLS, redirects y mixed content — sin capturas de 2019.",
  },
  hosting: {
    title: "¿Necesitas hosting estable para el proyecto?",
    text: "Te ayudamos a elegir shared, VPS o cloud — con backups y SLA, no solo el precio del primer mes.",
  },
  "veb-server": {
    title: "¿Necesitas un stack de servidor claro?",
    text: "Te ayudamos a ordenar Apache/Nginx, HTTPS y el traslado — sin sorpresas de 5xx.",
  },
  "wordpress-ustanovka": {
    title: "¿Necesitas WordPress bien instalado?",
    text: "Te ayudamos con BD, archivos, HTTPS y la higiene del día uno — sin guías de PHP 4.",
  },
  "wordpress-bezopasnost": {
    title: "¿Necesitas endurecer WordPress sin drama?",
    text: "Te ayudamos con updates, 2FA, backups y HTTPS — sin how-tos de ataque.",
  },
  "wordpress-admin": {
    title: "¿Perdiste el acceso al admin de WordPress?",
    text: "Te ayudamos a recuperar el login y endurecer la cuenta — sin MD5 de capturas de 2018.",
  },
  "wordpress-plaginy": {
    title: "¿Necesitas instalar plugins sin acumular riesgo?",
    text: "Te ayudamos a elegir e instalar solo lo necesario — sin «todo lo popular por si acaso».",
  },
  "tema-wordpress": {
    title: "¿Necesitas un tema de WordPress sin lastre?",
    text: "Te ayudamos a elegir por velocidad, updates y plantillas reales — no por el demo más bonito.",
  },
  "uskorenie-wordpress": {
    title: "¿Necesitas acelerar WordPress sin romper formularios?",
    text: "Medimos TTFB y LCP, limpiamos tema y plugins — sin perseguir 100/100 a cualquier coste.",
  },
  "registratsiya-domena": {
    title: "¿Necesitas registrar un dominio sin líos?",
    text: "Te ayudamos con titular, NS y renovación — sin capturas de checkout de 2017.",
  },
  "skorost-sayta": {
    title: "¿Necesitas medir la velocidad sin culto al 100?",
    text: "Miramos lab y field, LCP y TTFB — y cerramos un freno real, no una lista de diez tools.",
  },
  "bezopasnost-sayta": {
    title: "¿Necesitas endurecer el sitio sin how-tos de ataque?",
    text: "Te ayudamos con higiene, backups y respuesta a incidentes — defensa y recuperación, no payloads.",
  },
  "https-seo": {
    title: "¿Vas a pasar a HTTPS sin perder el índice?",
    text: "Montamos 301s, canonicals y sitemap — sin mitos de «barra verde» ni vuelta a HTTP.",
  },
  gipertekst: {
    title: "¿Necesitas estructura y enlazado interno claros?",
    text: "Ordenamos rutas, anclas y menús — para que el hipertexto lleve a leads, no a callejones sin salida.",
  },
  "domen-pervogo-urovnya": {
    title: "¿Eligiendo zona y nombre de dominio?",
    text: "Te ayudamos a fijar TLD, DNS y HTTPS — sin magia de zona ni promesas de ranking solo por el `.com`.",
  },
  "domen-rf": {
    title: "¿Montas marca en `.рф` o un espejo `.ru`?",
    text: "Dejamos canónica, SSL e IDN en orden — sin mitos de que «.рф no rankea».",
  },
  "istoriya-domena": {
    title: "¿Vas a comprar un drop o dominio usado?",
    text: "Revisamos archivo, backlinks e índice — para no heredar ban y spam con un nombre bonito.",
  },
  "pochta-dlya-domena": {
    title: "¿Necesitas correo en tu dominio?",
    text: "Montamos MX, SPF/DKIM y buzones — sin capturas de «mil buzones gratis» de 2018.",
  },
  "menedzher-paroley": {
    title: "¿Contraseñas de clientes aún en el chat?",
    text: "Montamos un gestor de equipo con roles y revoke — sin `admin123` compartido ni listicles de 2018.",
  },
  "zerkalo-sayta": {
    title: "¿www, http y dominios sinónimo sin unificar?",
    text: "Pegamos espejos con 301 al canónico — sin cadenas largas ni «dos sitios» en el índice.",
  },
  "protokol-http": {
    title: "¿Quieres leer status, redirects y logs sin adivinar?",
    text: "Te ayudamos a sanar HTTP(S) del sitio — espejo canónico, 301 y respuestas claras para bots.",
  },
  "http-zagolovki": {
    title: "¿Headers de seguridad aún en cero?",
    text: "Montamos HSTS, CSP en Report-Only y el mínimo anti-clickjacking — sin romper widgets en prod.",
  },
  "mixed-content": {
    title: "¿HTTPS con avisos Mixed Content en Console?",
    text: "Cazamos http:// en plantillas y widgets — para que el candado no sea solo cosmética.",
  },
  "robots-txt-wordpress": {
    title: "¿Robots.txt de WordPress copiado de 2018?",
    text: "Ajustamos Disallow sin cerrar CSS/JS ni categorías útiles — Sitemap HTTPS y checks en Webmaster.",
  },
  "robots-txt-joomla": {
    title: "¿Robots.txt de Joomla pegado de un post 3.3?",
    text: "Adaptamos Disallow a tu versión y SEF — Sitemap HTTPS, sin muro a ciegas ni Host como único espejo.",
  },
  redirekt: {
    title: "¿301, 302 o cadenas de redirects?",
    text: "Ordenamos espejos y mudanzas — un salto al canónico, sin 302 eternos ni aterrizaje en 404.",
  },
  "htaccess-301": {
    title: "¿.htaccess con reglas 301 a ciegas?",
    text: "Montamos https/www y mudanzas con backup y un salto — sin loops ni todo a la home.",
  },
  "dubli-stranits": {
    title: "¿Filtros y espejos inflando el índice?",
    text: "Elegimos canónico, 301 y noindex donde toca — sin mandar todo a la home «por si acaso».",
  },
  "zakrytie-ot-indeksatsii": {
    title: "¿Staging o filtros aún en el índice?",
    text: "Separamos crawl y noindex con claridad — sin cloaking ni Disallow eterno en producción.",
  },
  "kanonicheskiy-teg": {
    title: "¿rel=canonical en conflicto o a la home?",
    text: "Fijamos un canónico por entidad y alineamos sitemap — sin cadenas 301 ni «todo a la homepage».",
  },
  "kod-statusa-http": {
    title: "¿Soft 404, cadenas 301 o 5xx en picos?",
    text: "Revisamos statuses clave y el mapa de mudanzas — higiene de crawl, no magia de un solo código.",
  },
  "kod-200": {
    title: "¿200 en fichas vacías o soft 404?",
    text: "Dejamos statuses honestos — 200 solo donde hay página útil, 404/410 o 301 donde toca.",
  },
  "url-adres": {
    title: "¿URLs ilegibles o espejos sin unificar?",
    text: "Ordenamos slugs, HTTPS y canónico — sin mitos de keyword en el path como atajo de ranking.",
  },
  "veb-stranitsa": {
    title: "¿Páginas lentas, soft 404 o mudanzas sin 301?",
    text: "Revisamos status, URLs y mensajes del navegador — cada página como canal, no como stub.",
  },
  "tehnicheskiy-seo-audit": {
    title: "¿El sitio se estanca pese a contenido y ads?",
    text: "Hacemos un pase técnico con prioridades — indexación, status y CWV primero, sin PDF sin arreglos.",
  },
  "seo-struktura-sayta": {
    title: "¿Secciones al azar y landings que se pisan?",
    text: "Diseñamos jerarquía y clusters antes del CMS — un intent comercial, una URL, sin profundidad absurda.",
  },
  metategi: {
    title: "¿Titles repetidos o meta keywords «por si acaso»?",
    text: "Afinamos title, description y robots por URL — sin secretos de 2010 ni límites mágicos de caracteres.",
  },
  paginatsiya: {
    title: "¿page=N vacías inflando el índice?",
    text: "Ordenamos canonical, facets y colas — sin 200 vacíos ni texto SEO clonado en cada página.",
  },
  "indeksatsiya-sayta": {
    title: "¿URLs abiertas pero fuera del índice?",
    text: "Revisamos cobertura en Webmaster/GSC, sitemap y noindex — sin bookmarks ni compra de enlaces «para indexar».",
  },
  "proverka-indeksatsii": {
    title: "¿site: vacío o caídas bruscas de cobertura?",
    text: "Cruzamos Webmaster/GSC con robots y status — crawl ≠ índice, sin pánico de toolbar.",
  },
  "karta-sayta": {
    title: "¿Sitemap con filtros y redirects dentro?",
    text: "Dejamos XML canónico y limpio — sin priority mágico ni mapa HTML spam de 5.000 enlaces.",
  },
  "bitye-ssylki": {
    title: "¿404s en menú o soft-404 en fichas?",
    text: "Priorizamos plantillas y 301 con sentido — sin mandar todos los 404 a la home.",
  },
  "vnutrennyaya-perelinkovka": {
    title: "¿Enlazado interno sin mapa de prioridades?",
    text: "Montamos híbrido menú + contextual a URLs comerciales — sin spam de la misma ancla en cada párrafo.",
  },
  "seo-oshibki": {
    title: "¿Titles duplicados, 404s y mixed content a la vez?",
    text: "Priorizamos crawl, HTTPS y snippets de páginas de dinero — sin checklist verde como meta final.",
  },
  "klikabelnaya-ssylka": {
    title: "¿Enlaces «muertos» en texto o anclas que no dicen nada?",
    text: "Revisamos markup, CMS y plantillas — URLs activas con anclas con sentido, no «clic aquí».",
  },
  "chto-takoe-ssylka": {
    title: "¿Enlazado interno flojo y anclas idénticas en todo el sitio?",
    text: "Ordenamos mapa de URLs, follow/nofollow con sentido y anclas legibles — sin comprar «paquetes» a ciegas.",
  },
  sklikivanie: {
    title: "¿Sospechas fraude de clics que quema el presupuesto de ads?",
    text: "Cortamos la hemorragia, leemos el combo de anomalías y apretamos la campaña — sin conjeturas de pánico.",
  },
  "kartinka-ssylka": {
    title: "¿Banners pesados o imágenes sin alt que no llevan a ningún sitio?",
    text: "Revisamos markup a+img, peso WebP y alt con sentido — sin hotlink ni lazy en el LCP.",
  },
  "tipy-ssylok": {
    title: "¿Otra vez paquetes de enlaces — o un mapa de canales white-hat?",
    text: "Auditamos el perfil, elegimos 2–3 canales para tu nicho y cortamos ruido de farms antes de gastar en colocaciones.",
  },
  "navigatsiya-sayta": {
    title: "¿Veinte ítems iguales en el menú — y aún preguntan «dónde está el contacto»?",
    text: "Rehacemos etiquetas claras y caminos cortos — navegación por trabajos del usuario, no keyword stuffing.",
  },
  "hlebnye-kroshki": {
    title: "¿Fichas profundas desde búsqueda — y no hay camino de vuelta a la categoría?",
    text: "Montamos un rastro limpio y BreadcrumbList — UX y enlazado, no un atajo mágico a rankings.",
  },
  "dlina-title": {
    title: "¿Titles cortados a mitad de oferta — y H1 clonado en cada meta?",
    text: "Fijamos Titles únicos con el sentido primero — píxeles y CTR, no el dogma de los 70 caracteres.",
  },
  "alt-img": {
    title: "¿Alts de galería que dicen «comprar barato» — e iconos decorativos leídos como ruido?",
    text: "Fijamos alt con sentido (o vacío para decor) — accesibilidad primero, no vertederos de keywords en title.",
  },
  snippet: {
    title: "¿Líneas de SERP flojas y CTR por detrás de la posición?",
    text: "Afinamos Title/description, breadcrumbs y schema válido para rich results — sin mitos de ranking mágico.",
  },
  "open-graph": {
    title: "¿Al compartir sale un recorte al azar — y el preview no se actualiza?",
    text: "Fijamos og:title/image/url al canon y limpiamos caché de preview — CTR del share, no magia de rankings.",
  },
  "google-analytics": {
    title: "¿Gráficos bonitos en GA — y aún no sabes dónde muere el checkout?",
    text: "Leemos funnel y 2–3 segmentos con sentido — hipótesis y tareas, no el culto a la media del sitio.",
  },
  "google-search-console": {
    title: "¿Sin vista clara del índice de Google — y errores de coverage que se acumulan?",
    text: "Conectamos Search Console, sitemap y un playbook de errores de coverage — informes, no un interruptor mágico.",
  },
  "razmer-stranitsy": {
    title: "¿Landing lenta — y Network enseña un hero de 4MB más widgets de chat?",
    text: "Cortamos transfer size por contribución — imágenes y JS primero, luego caché y CDN.",
  },
  "otkazy-sayta": {
    title: "¿Bounce «bien» en todo el sitio — y los landings clave siguen tirando el tráfico de pago?",
    text: "Arreglamos velocidad, match de oferta y primera pantalla por URL — KPI de acción, no bounce medio.",
  },
  "kartinki-vnimanie": {
    title: "¿Hero de café y portátil de stock — y la oferta vive solo dentro del JPEG?",
    text: "Fijamos contraste, sentido y copy duplicado en HTML — visuals que paran la mirada sin clichés.",
  },
  "ishodnyy-kod": {
    title: "¿Necesitas un chequeo rápido de source: title, canonical y errores de consola?",
    text: "Recorremos la página en DevTools y arreglamos lo que bloquea la higiene SEO — sin un rediseño completo.",
  },
  "optimizatsiya-stranitsy": {
    title: "¿Landings que no cuadran con la query y Title atiborrado?",
    text: "Alineamos intent, Title/H1, copy y enlaces internos — sin mitos de spam de keywords.",
  },
  "teg-h1": {
    title: "¿Logo como H1 en cada URL — y titles clonados en todo el sitio?",
    text: "Fijamos un H1 con sentido por plantilla y una jerarquía H2–H3 sensata — legible, no atiborrada.",
  },
  "screaming-frog": {
    title: "¿Release en vivo — y nadie crawleó 404s, titles duplicados o imágenes pesadas?",
    text: "Lanzamos Screaming Frog, exportamos prioridades y abrimos tickets — crawl técnico, no un interruptor mágico.",
  },
  cookies: {
    title: "¿El banner dice Accept all — y los tags opcionales disparan antes de elegir?",
    text: "Inventariamos cookies, ponemos flags Secure/HttpOnly y hacemos que los scripts opcionales esperen al consentimiento.",
  },
  "chrome-rasshireniya-seo": {
    title: "¿El navegador lleno de add-ons SEO al azar — y las auditorías siguen eternas?",
    text: "Recortamos un stack seguro de Chrome para snapshots, UTM y semántica — herramientas para velocidad, no un interruptor mágico.",
  },
  "obzor-brauzerov": {
    title: "¿Eliges navegador por un «campeón» de 2018 — mientras Edge y las extensiones ya cambiaron?",
    text: "Emparejamos candidatos con tus escenarios, privacidad y descargas oficiales — y dejamos un segundo motor para checks.",
  },
  "yandeks-brauzer": {
    title: "¿Vas a instalar Yandex Browser desde un sitio de «software gratis + SMS»?",
    text: "Nos quedamos con el instalador oficial, saltamos ofertas basura e importamos favoritos solo cuando de verdad los necesitas.",
  },
  "uznat-cms": {
    title: "¿Necesitas el stack para una propuesta — y los detectores no coinciden con el generator borrado?",
    text: "Cruzamos solo marcadores HTML públicos — recon para scoping, no ataques al admin.",
  },
  favikon: {
    title: "¿Pestaña con cuadrado vacío — o un icono de galería que también usa el competidor?",
    text: "Preparamos un favicon legible a 16×16 desde tu identidad — PNG/SVG, sin galerías ajenas.",
  },
  "cheklist-sayta": {
    title: "¿Lanzamiento cerca — y al sitio aún le faltan velocidad, móvil o un CTA claro?",
    text: "Priorizamos técnica, confianza y el camino al lead — sin copiar al pie una lista de «50 imprescindibles».",
  },
  "adaptivnyy-sayt": {
    title: "¿Desktop se ve bien — y el formulario del teléfono pide scroll horizontal?",
    text: "Arreglamos viewport, targets táctiles y plantillas clave — una URL responsive, no un segundo m.site.",
  },
  "ustarevshiy-sayt": {
    title: "¿Caen los leads — y el sitio sigue siendo un desktop encogido de 2012?",
    text: "Diagnosticamos IA, móvil, velocidad y deuda técnica antes de gastar solo en un rediseño bonito.",
  },
  "pered-zapuskom-sayta": {
    title: "¿Lanzamiento mañana — y robots, HTTPS o analytics aún sin probar?",
    text: "Pillamos blockers de indexación, velocidad, móvil y tracking antes de que el tráfico de ads llegue al sitio.",
  },
  "formy-zahvata": {
    title: "¿Popups por todas partes — y sigue el «lo pensaré» sin dejar contacto?",
    text: "Fijamos un objetivo de formulario, campos mínimos, consentimiento y enrutado a CRM — valor sin spam de exit-popup.",
  },
  "trafik-bez-lidov": {
    title: "¿Crecen las visitas — y el formulario sigue vacío?",
    text: "Apretamos la oferta, pasamos features a beneficios, arreglamos CTA/formulario y revisamos el encaje de audiencia antes de gastar más.",
  },
  "aydentika-brenda": {
    title: "¿Logo bonito en el sitio — y tarjeta, ads y packaging parecen tres marcas?",
    text: "Fijamos paleta, tipografía, reglas de marca y un extracto corto de brand book que los contratistas puedan seguir de verdad.",
  },
  utp: {
    title: "¿Landing y ads siguen diciendo «calidad y mejores precios»?",
    text: "Fijamos una USP concreta y cumplible para tu segmento — prueba en el primer pantallazo, no sopa de adjetivos.",
  },
  "tekst-lendinga": {
    title: "¿El landing se ve bonito, pero la oferta y el formulario no convierten?",
    text: "Rehacemos el primer pantallazo, el camino de prueba y el CTA — sin keyword stuffing como estrategia.",
  },
  "tselevaya-auditoriya": {
    title: "¿Ads y el núcleo persiguen «todos 25–45» — y los leads siguen aleatorios?",
    text: "Fijamos jobs, anti-persona y 2–5 segmentos — audiencia como brief, no quemar presupuesto a ojo.",
  },
  lending: {
    title: "¿Plantilla bonita en línea — y cinco CTAs sin oferta clara?",
    text: "Fijamos una conversión, un primer pantallazo legible y prueba corta — luego enviamos tráfico.",
  },
  "optimizatsiya-konversii": {
    title: "¿El tráfico va bien pero los leads son escasos?",
    text: "Arreglamos el funnel: formulario, CTA, velocidad y confianza — medido como CR, no por vibes.",
  },
  "lestnitsa-hanta": {
    title: "¿Hard-sell de Premium a quien aún no ve el problema?",
    text: "Mapeamos la temperatura del tráfico a peldaños de awareness — mensaje correcto, CTA correcto, menos gritos al vacío.",
  },
  "reklamnyy-banner": {
    title: "¿Banners bonitos sin oferta — y un CTR que no convierte?",
    text: "Fijamos oferta, jerarquía, CTA y encaje con el landing — luego testeamos creatives sin teatro de ceguera de banner.",
  },
  "potrebitelskiy-insayt": {
    title: "¿Audiencia como «mujeres 25–45» — y los ads siguen hablando al lado de la barrera real?",
    text: "Cavamos en «quiero…, pero…» desde datos y reseñas — luego empaquetamos el conflicto en la oferta.",
  },
  "analiz-konkurentov": {
    title: "¿Necesitas una lectura clara de la competencia — no conjeturas copiadas?",
    text: "Comparamos orden de magnitud de tráfico, canales y páginas fuertes — luego lo convertimos en hipótesis para tu sitio.",
  },
  "prodayushchie-teksty": {
    title: "¿Necesitas copy de venta que lleve a un siguiente paso claro?",
    text: "Enmarcamos audiencia, beneficios, prueba y CTA — sin relleno ni descuentos falsos.",
  },
  "marketingovaya-strategiya": {
    title: "¿Posts y promos sueltas por todas partes — y aún sin un KPI compartido?",
    text: "Fijamos un objetivo principal, 1–2 canales, landing que encaje y un calendario de medición — antes de más creatives.",
  },
  "skvoznaya-analitika": {
    title: "¿Dashboard bonito — y aún sin claro qué gasto en ads se pagó solo?",
    text: "Unimos gasto, UTM, llamadas y tratos del CRM en ROMI — tras disciplina de CRM, no antes.",
  },
  "brendovyy-trafik": {
    title: "¿El orgánico no de marca salta en cada update — y la cuota de marca ni se mide?",
    text: "Fijamos naming, NAP en mapas y segmentos de consultas de marca — awareness como activo, no un mito de rankings.",
  },
  "utm-metki": {
    title: "¿El gasto en ads crece — y analytics solo muestra «/cpc» sin campañas?",
    text: "Fijamos diccionario UTM y plantillas: source, medium, campaign legibles en un informe, no el caos de cada manager.",
  },
  "razmery-bannera": {
    title: "¿El creativo del banner se recorta porque el hueco era a ojo?",
    text: "Sacamos display vs tamaño de archivo con Inspect y montamos tu creativo comprimido — no una copia del asset ajeno.",
  },
  "reklamnyy-kabinet": {
    title: "¿Los ads ya corren — y aún no distingues clics de leads?",
    text: "Fijamos objetivo, landing, etiquetado y un árbol de campañas legible antes de escalar el gasto.",
  },
  "metrika-ustanovka": {
    title: "¿El contador «instalado» — y el informe sigue en cero visitas?",
    text: "Ponemos un solo tag de Metrica en cada plantilla, limpiamos caché y cableamos goals — no solo el conteo de visitas.",
  },
  "google-analytics-tseli": {
    title: "¿Sigues pensando en «Goals» de Universal — y GA4 solo muestra tráfico sin key events?",
    text: "Mapeamos thank-you, leads y CTAs como conversiones clave — DebugView primero, luego Ads.",
  },
  "kontekst-i-seo": {
    title: "¿El equipo cree que Direct compra la primera página orgánica — o que los ads «calientan» señales?",
    text: "Unimos pago y orgánico con goals compartidos — tests y datos de demanda, no el mito de pagar por rankings.",
  },
  "spetsrazmeshchenie-direkt": {
    title: "¿El cliente sigue pidiendo «emplazamiento especial» como si fuera 2015?",
    text: "Retocamos pujas y creativos alrededor del CPA — no perseguimos un nombre de bloque obsoleto.",
  },
  "cpm-ili-cpc": {
    title: "¿Pagas por impresiones o por clics — y aún no sabes cuál gana?",
    text: "Emparejamos el modelo con el objetivo, la landing y el CPA — sin un «CTR bonito» como único KPI.",
  },
  "istochniki-trafika": {
    title: "¿Todos los canales a la vez con cuatro duros — y aún sin CPA claro?",
    text: "Preparamos landing y tracking, luego testeamos 1–2 fuentes del nicho — orgánico en paralelo con horizonte de rankings a 2–6 meses.",
  },
  "analiz-reklamnoy-kampanii": {
    title: "¿Muchos clics, pocos leads — y las pujas aún se tuercen por el CTR global?",
    text: "Enlazamos analytics, recorremos keywords/emplazamientos/audiencia/landings y dejamos una semana de fixes concretos.",
  },
  "strategii-yandeks-direkt": {
    title: "¿Estrategias de Direct sin CPA claro — y el botón del gabinete no para de cambiar?",
    text: "Fijamos goals, coste del lead y feedback primero — luego elegimos modo manual o auto con datos, no con miedo a la subasta.",
  },
  retargeting: {
    title: "¿La búsqueda fría sigue pagando por quien ya miró el carrito?",
    text: "Partimos segmentos calientes, capamos frecuencia y excluimos compradores — retarget como etapa del funnel, no un banner eterno.",
  },
  "ab-testy-reklamy": {
    title: "¿Dos ads pelean por CTR — y aún coronas ganador sin CPA?",
    text: "Montamos rotación/experimentos de una hipótesis en Direct y Google Ads y leemos informes por dinero, no por el CTR de un día.",
  },
  "metrika-tseli": {
    title: "¿Ads y SEO informan visitas — pero no hay goal para gracias, formulario o clic Comprar?",
    text: "Montamos goals de URL, eventos reachGoal y un funnel limpio — y verificamos el disparo antes de escalar.",
  },
  "metriki-reklamy": {
    title: "¿La campaña «funciona» porque el CTR se ve bonito — y aún sin margen?",
    text: "Leemos el funnel de CTR/CPC a CPA y LTV — arreglamos la landing antes de escalar el gasto.",
  },
  "stavki-direkt": {
    title: "¿Las pujas de Direct persiguen el primer puesto mientras el CPA se va de lado?",
    text: "Fijamos estrategias y control de consultas alrededor de conversiones y margen — no de posiciones de ego.",
  },
  "minus-slova-direkt": {
    title: "¿Los search terms queman presupuesto — y las negativas siguen siendo una lista random de la web?",
    text: "Armamos negativas desde tu informe de consultas, las colocamos por nivel y cruzamos clusters sin matar tus propias keywords.",
  },
  "byudzhet-yandeks-direkt": {
    title: "¿Quemas gasto de Direct antes de saber si el CPA encaja?",
    text: "Fijamos techo de CPC desde tu economía, cap diario/semanal y una ventana de test tranquila — sin un «mínimo» copiado.",
  },
  "audit-reklamnoy-kampanii": {
    title: "¿El gasto en ads crece — y aún no está claro por qué fallan los KPIs?",
    text: "Auditamos tech, economía y ritmo de optimización — estrategia corta para el cliente, no solo una lista de bugs.",
  },
  "google-tag-manager": {
    title: "¿Los tags viven en el tema — y cada pixel necesita un deploy?",
    text: "Ponemos un contenedor GTM en el sitio, mapeamos tags y triggers y publicamos solo tras Preview — sin contadores dobles.",
  },
  ga4: {
    title: "¿Sigues leyendo bounce de UA junto a engagement de GA4 en un solo gráfico?",
    text: "Montamos el modelo de eventos, key events y DebugView para que los informes sean herramienta de hipótesis — no un museo de widgets.",
  },
  "looker-studio": {
    title: "¿Gráficos bonitos en Looker — pero ads, sitio y CRM aún no se unen?",
    text: "Fijamos KPIs y claves de fuente primero — luego un dashboard solo de vista que visualiza datos end-to-end, no clics de vanidad.",
  },
  dashboard: {
    title: "¿Necesitas un resumen de métricas para el equipo?",
    text: "Armamos un dashboard alrededor de tus KPIs — ads, sitio, CRM — sin widgets de más.",
  },
  "instrumenty-veb-analitiki": {
    title: "¿Los contadores están — y los informes semanales siguen siendo capturas sin goals?",
    text: "Cableamos goals, UTMs y un set corto de KPIs — decisiones desde números, no solo desde gráficos bonitos.",
  },
  "veb-analitik": {
    title: "¿Se acumulan informes — y nadie posee la siguiente hipótesis desde los números?",
    text: "Fijamos goals, segmentos y un bucle de decisión — analytics para actuar, no un archivo para la estantería.",
  },
  "assotsiirovannye-konversii": {
    title: "¿El presupuesto sigue solo last click — y se cortan los canales helpers?",
    text: "Comparamos roles en el camino y 2–3 modelos de atribución — para no matar el inicio del funnel que alimenta a los closers de marca.",
  },
  "roi-marketinga": {
    title: "¿El CTR se ve genial — y nadie sabe si el marketing se paga?",
    text: "Fijamos una fórmula ROMI con CR y CPA — luego movemos presupuesto a canales con retorno durable.",
  },
  "kogortnyy-analiz": {
    title: "¿Clics baratos que no vuelven — y solo miras «ayer»?",
    text: "Armamos una cohorte de primera visita por canal y leemos retención/LTV en semanas — no solo el CPC.",
  },
  "excel-google-tablitsy": {
    title: "¿Dumps de Wordstat aún llenos de enlaces, duplicados y negativas sin etiquetar?",
    text: "Dejamos una plantilla de limpieza en Sheets/Excel — higiene del core en horas, no un atajo de fórmula a posiciones.",
  },
  "vizualizatsiya-dannyih": {
    title: "¿Informes atrapados en hojas — o dashboards en los que nadie confía?",
    text: "Elegimos el stack según tus fuentes y armamos un informe con métricas claras antes de pagar por BI.",
  },
  "metrika-karty": {
    title: "¿Los mapas de Metrica no dan hipótesis?",
    text: "Desglosamos clics, formularios y el vínculo con Session Replay — sin screenshots obsoletos del panel.",
  },
  vebvizor: {
    title: "¿Cae la conversión — y solo ves % de bounce, no dónde se atascaron?",
    text: "Activamos Webvisor bien, revisamos la técnica y muestreamos URLs dolorosas para hipótesis UX — no sesiones al azar sin fin.",
  },
  "google-analytics-nastroyka": {
    title: "¿Sigues instalando vistas UA — y Realtime no muestra nada en GA4?",
    text: "Creamos property GA4 y stream web, cableamos gtag o GTM una vez y verificamos en DebugView antes de perseguir ecommerce.",
  },
  "samostoyatelnoe-seo": {
    title: "¿Empezaste SEO DIY con packs de enlaces — y aún no hay base?",
    text: "Fijamos técnica, analítica y mapa de keywords del mes uno — las posiciones del núcleo se planifican a 2–6 meses, no a una semana.",
  },
  "forma-obratnoy-svyazi": {
    title: "¿Necesitas un formulario del sitio que de verdad entregue leads?",
    text: "Dejamos campos cortos, antispam y entrega a CRM/email — con una ventana de respuesta que el equipo pueda cumplir.",
  },
  "yandeks-vebmaster": {
    title: "¿A ciegas en Yandex Search — o tratas el recrawl como botón mágico?",
    text: "Verificamos la property, limpiamos diagnostics y leemos informes de índice/consultas — prep y ranking quedan separados.",
  },
  "metrika-ne-rabotaet": {
    title: "¿Contador en el tema — y Network no muestra hits a mc.yandex?",
    text: "Chequeamos por capas código, caché, blockers y goals — antes de reinstalar desde cero.",
  },
  "effektivnost-seo": {
    title: "¿El cliente quiere primera página mañana — y el informe son solo checks verdes de crawl?",
    text: "Acordamos KPIs de orgánico, brand/non-brand y leads — matemáticas del canal a 2–6 meses, no pánico de la semana uno.",
  },
  "otchet-klientu": {
    title: "¿Informes de ads llenos de CTR y el cliente sigue preguntando «y qué»?",
    text: "Rehacemos el informe en torno a goals, dinero, resumen de una página y próximos pasos claros.",
  },
  "tsena-klika-yandeks": {
    title: "¿Las pujas de Direct persiguen posición — y la matemática del CPA aún no está hecha?",
    text: "Fijamos primero CPA objetivo y conversión clic→goal — luego el techo de CPC antes de que la subasta queme presupuesto.",
  },
  "povedencheskie-faktory": {
    title: "¿Bounce y CTR flojo del snippet — y alguien sugiere «comprar» comportamiento?",
    text: "Arreglamos UX móvil, velocidad, estructura y titles honestos — solo mejoras lícitas, sin gaming.",
  },
  "programmy-seo": {
    title: "¿Pagas cinco suites SEO mientras las tareas y KPIs siguen borrosos?",
    text: "Mapeamos tools a trabajos — semántica, crawl, analítica, copy — y cortamos suscripciones que no mueven el trabajo.",
  },
  "chastotnost-zaprosov": {
    title: "¿Set de keywords inflado con head terms «bonitos» que nunca convierten?",
    text: "Sacamos modos exactos de Wordstat y priorizamos clusters para landings reales — los números base no engañan el forecast.",
  },
  "logi-servera": {
    title: "¿Los crawlers gastan budget en URLs basura mientras las money pages reciben hits raros?",
    text: "Parseamos access logs, limpiamos ruido de crawl y alineamos robots/sitemap con prioridades.",
  },
  "oshibka-502": {
    title: "¿El sitio devuelve 502 y el soporte solo dice «vacía la caché»?",
    text: "Localizamos gateway vs backend, leemos logs y restauramos respuestas estables — sin tapar con redirects.",
  },
  "prodvizhenie-internet-magazina": {
    title: "¿Necesitas SEO para tu tienda online?",
    text: "Mapeamos técnica, estructura de catálogo y el núcleo — prep y plazos de posiciones quedan separados, sin el mito «lanzar = primera página».",
  },
  "verstka-saytov": {
    title: "¿Necesitas maquetación o pulido front-end?",
    text: "Armamos páginas responsive desde el mockup — con foco en velocidad, semántica y handoff sin sorpresas.",
  },
  "podozritelnyy-trafik-google": {
    title: "¿Captcha de Google en cada búsqueda — y no está claro si eres tú o la red?",
    text: "Recorremos dispositivo → router → scrapers con calma — y separamos ruido de red de un issue del sitio.",
  },
  "snizhenie-trafika": {
    title: "¿El tráfico se desplomó y el equipo adivina «filtro o temporada»?",
    text: "Separamos fallos de analítica de caídas reales y arreglamos técnica/contenido — sin promesas de «primera página mañana».",
  },
  "ssylochnyy-profil": {
    title: "¿Miles de backlinks en el papel — y los anchors gritan «comprar barato»?",
    text: "Cribamos donors y anchors en menos de una hora — calidad y acciones, no una métrica vanity.",
  },
  "molodoy-sayt": {
    title: "¿Dominio nuevo — y alguien prometió primera página la semana que viene con «trucos de comportamiento»?",
    text: "Fijamos el plan del mes uno: técnica, núcleo, landings — primero prep; posiciones planificadas a 2–6 meses.",
  },
  "wordpress-seo-plaginy": {
    title: "¿Dos suites SEO pelean por el meta — y las luces verdes se tratan como nota de ranking?",
    text: "Elegimos una suite más un stack lean de velocidad/redirects — comodidad de setup, no un botón mágico.",
  },
  "vstavka-javascript": {
    title: "¿Píxel pegado en el editor visual — y la caché del tema sigue sirviendo HTML viejo?",
    text: "Ponemos un solo snippet de confianza en la plantilla o GTM — y verificamos source + Network.",
  },
  "zaspamlennost-teksta": {
    title: "¿Necesitas copy SEO sin keyword stuffing?",
    text: "Revisamos briefs y textos para que la densidad se mantenga legible — primero para personas, luego para búsqueda.",
  },
  "nakrutka-pf": {
    title: "¿Un vendor promete posiciones vía «boost de comportamiento» — y la analítica muestra visitas sin leads?",
    text: "Auditamos UX, páginas de intención y goals — engagement real, no esquemas de clics falsos.",
  },
  "onlayn-oplata": {
    title: "¿Necesitas tarjetas y SBP en el sitio sin guardar el CVV tú mismo?",
    text: "Elegimos agregador vs acquiring, conectamos el módulo CMS y alineamos el esquema de caja registradora.",
  },
  "parsing": {
    title: "¿Necesitas datos de competidores y catálogo sin scraping gris?",
    text: "Montamos un monitoreo limpio — APIs, muestras y reglas — no un volcado del sitio ajeno.",
  },
  "regionalnoe-seo": {
    title: "¿Quieres visibilidad en tu ciudad — y las páginas de ciudad son copy-paste con cambio de nombre?",
    text: "Montamos landings regionales reales, NAP y señales en mapas — primero preparación, luego primera página planificada a 2–6 meses.",
  },
  "napolnenie-sayta": {
    title: "¿Cincuenta posts finos en el plan — y aún sin landings de servicio?",
    text: "Encolamos primero las páginas que dan dinero, luego briefs y un ritmo sostenible — sentido por encima del volumen.",
  },
  "prodazha-trafika": {
    title: "¿Necesitas tráfico que convierta — no solo pageviews?",
    text: "Mapeamos canales, calidad y monetización sin matar la UX ni vender tráfico basura.",
  },
  "ssylki-na-forumah": {
    title: "¿Compraste «100 posts en foros a la semana» — y te borraron en vez de tráfico?",
    text: "Elegimos tableros vivos y respuestas útiles primero — un enlace solo donde ayude al hilo.",
  },
  "pokupka-ssylok": {
    title: "¿Te vendieron un pack de «100 enlaces / primera página en una semana»?",
    text: "Juzgamos donors y placements por audiencia y riesgo — primero contenido y técnica, sin spam por paquete.",
  },
  "obnovlenie-kontenta": {
    title: "¿Posts antiguos aún tienen impresiones pero pierden frente a competidores más frescos?",
    text: "Priorizamos el archivo, refrescamos los que ganan y volvemos a promover con tracking antes/después.",
  },
  "filtry-poiskovikov": {
    title: "¿Se hundieron los rankings y el equipo busca «esquemas de bypass»?",
    text: "Diagnosticamos la caída y arreglamos técnica, contenido y enlaces — solo white-hat, sin mitos de fechas mágicas.",
  },
  "avtonapolnenie-sayta": {
    title: "¿Necesitas contenido SEO sin basura automática?",
    text: "Montamos clusters y un plan editorial — copy para landings, no un grabber por volumen.",
  },
  "proverka-unikalnosti": {
    title: "¿El copy parece original hasta que el informe de coincidencias muestra párrafos enteros?",
    text: "Montamos una comprobación editorial de unicidad — sin synonymizers ni perseguir un 100% vacío.",
  },
  "kannibalizatsiya-zaprosov": {
    title: "¿Dos URLs se intercambian en la SERP por una frase — y el equity de enlaces se parte entre ellas?",
    text: "Elegimos el canónico del cluster, fusionamos o separamos intents — una landing fuerte por intent.",
  },
  "google-biznes": {
    title: "¿Local pack vacío — y el NAP del sitio no coincide con Maps?",
    text: "Reclamamos el perfil, verificamos y mantenemos horario y reseñas honestos — sin keyword stuffing en el nombre del negocio.",
  },
  "otzyvy-dlya-prodazh": {
    title: "¿Perfiles de mapa vacíos — y los competidores ganan en confianza antes de la llamada?",
    text: "Montamos un circuito real de pedir y responder reseñas — valoraciones honestas, sin cinco estrellas compradas.",
  },
  "besplatnoe-razmeshchenie-statey": {
    title: "¿Necesitas guest posts y un plan de contenidos?",
    text: "Elegimos temas, medios y copy para tráfico y crecimiento cuidadoso de enlaces.",
  },
  "autrich": {
    title: "¿Spam de marketplace llenando el perfil mientras los editores ignoran pitches plantilla?",
    text: "Armamos una shortlist de donors temáticos, personalizamos el outreach y seguimos menciones — sin promesas mágicas por un blast de mail.",
  },
  "yukassa": {
    title: "¿Necesitas pagos online sin montar acquiring tú mismo?",
    text: "Ayudamos a elegir el stack para la tienda — módulos, recibos y un checkout limpio.",
  },
  "nisha-sayta": {
    title: "¿Eligiendo nicho desde una lista vieja de «nichos rentables»?",
    text: "Cruzamos demanda, margen y tu ventaja — un nicho claro y un canal de test antes de un build grande.",
  },
  "kopirayting": {
    title: "¿Necesitas copy para trabajos del sitio?",
    text: "Escribimos o editamos landings, artículos y bloques comerciales — con brief y criterios de aceptación.",
  },
  "katalogi-saytov": {
    title: "¿Compraste «1000 directorios» — y el perfil de backlinks parece una granja?",
    text: "Armamos una whitelist de mapas vivos y listings de nicho — primero NAP, sin spam de auto-submit.",
  },
  "sayt-ne-v-top": {
    title: "¿Esperabas los 10 primeros un mes tras el lanzamiento — y persigues «aceleradores»?",
    text: "Diagnosticamos preparación vs crecimiento de rankings: técnica, contenido, UX — con un horizonte real de 2–6 meses para el núcleo.",
  },
  "lichnyy-brend": {
    title: "¿Necesitas una marca personal que traiga leads — no followers vacíos?",
    text: "Acotamos el nicho, elegimos un canal insignia y montamos un mix personal/experto/venta.",
  },
  "tochki-vhoda": {
    title: "¿Adivinando las landings del competidor — o copiando sus H1?",
    text: "Mapeamos puntos de entrada y clusters de consultas a tus propias páginas — hipótesis y tareas, no copy-paste.",
  },
  "seo-s-nulya": {
    title: "¿Empiezas SEO y no quieres el mito de «primera página en 30 días»?",
    text: "Trazamos un camino de práctica: semántica, técnica, contenido — con plazos reales de preparación vs rankings.",
  },
  "gostevoy-post": {
    title: "¿Guest posts atascados en listas write-for-us basura?",
    text: "Armamos una shortlist de sitios de nicho vivos, pitchamos un tema de content gap y escribimos para sus lectores — no spam de anclas.",
  },
  "linkbilder": {
    title: "¿«Packs de enlaces por una semana» — y una promesa de primera página solo con backlinks?",
    text: "Auditamos el perfil y construimos menciones vía donors de calidad y outreach — ritmo sin explosión de spam, sin mitos de mañana mágico.",
  },
  "seo-vkontakte": {
    title: "¿Keyword metido en el nombre de VK — y sigues esperando rankings de «comprar»?",
    text: "Empaquetamos el público para búsqueda junto al SMM — visibilidad de la comunidad, no un reemplazo del sitio.",
  },
  "klyuchi-google-ads": {
    title: "¿Keywords de Google Ads quemando presupuesto en consultas basura?",
    text: "Estructuramos grupos, tipos de coincidencia y negativos alrededor de la oferta y el CPA — no un volcado del núcleo SEO.",
  },
  "algoritmy-google": {
    title: "¿Tras una update de Google — persiguiendo nombres o arreglando señales?",
    text: "Revisamos contenido, enlaces e higiene móvil frente a principios del core para que el crecimiento no dependa de mitos de unicidad.",
  },
  "algoritm-korolyov": {
    title: "¿Sigues escribiendo por náusea de keywords por un nombre de update de 2017?",
    text: "Movemos los briefs a intención y estructura útil — el match de sentido sobrevive a las etiquetas de marketing de algoritmos.",
  },
  "baden-baden": {
    title: "¿Hojas de keywords «para el bot» — aún esperando un día de filtro?",
    text: "Cortamos stuffing, restauramos estructura y valor para el lector, y revisamos riesgo sin comprar un mítico «quitar Baden-Baden».",
  },
  "minusinsk": {
    title: "¿Compraste packs de enlaces — y los rankings comerciales cayeron de golpe?",
    text: "Separamos temporada de un golpe de enlaces, limpiamos basura controlable y reconstruimos un perfil natural sin «quitar Minusinsk en una semana».",
  },
  "meta-description": {
    title: "¿Escribes meta descriptions como un botón mágico — o las dejas vacías?",
    text: "Redactamos snippets únicos y honestos atados al title y a la página — para CTR, no hojas de keywords.",
  },
  "html-seo": {
    title: "¿Layout bonito pero H1, title y texto rotos o ausentes del DOM?",
    text: "Alineamos el marcado con la intención SEO — estructura para personas y bots, no teatro de validador.",
  },
  "monitoring-pozitsiy": {
    title: "¿Rankings verdes en el informe — y el funnel sigue vacío?",
    text: "Dejamos los ranks como sensor de tendencia, fijamos primero KPIs de dinero y planificamos el crecimiento en primera página a meses — no una promesa de fecha.",
  },
  "kommercheskie-faktory": {
    title: "¿Páginas de dinero con copy pero sin precios, envío ni un teléfono alcanzable?",
    text: "Hacemos benchmark de bloques de confianza frente a líderes del nicho — preparación comercial, no el mito del widget de chat mágico.",
  },
  "region-sayta": {
    title: "¿Checkbox de región marcado — y las consultas locales aún te ignoran?",
    text: "Alineamos señales de NAP, Webmaster y Business/Maps para que la localidad encaje con donde trabajáis de verdad.",
  },
  "relevantnost-sayta": {
    title: "¿La página «tiene la keyword» — y la SERP sigue prefiriendo otro tipo de respuesta?",
    text: "Casamos la intención del cluster con el tipo de página de la SERP y cortamos cultos de densidad — la relevancia es la base, no primera página de la noche a la mañana.",
  },
  "bystrye-otvety-google": {
    title: "¿Persiguiendo «posición cero en una semana» — y la página aún sin respuesta clara?",
    text: "Reunimos long-tails de pregunta y ponemos respuestas cortas bajo H2 — sin garantías de featured snippet.",
  },
  "poiskovye-podskazki": {
    title: "¿Núcleo armado — y las colas reales del suggest nunca llegaron a la tabla?",
    text: "Sacamos autocomplete de Yandex y Google a clusters — ideas de wording, no un botón mágico ni esquemas de inflación.",
  },
  "operatory-poiska": {
    title: "¿Adivinando qué está indexado — y tratando viejos «operadores mágicos» como estrategia?",
    text: "Usamos site:/intitle:/filetype: para diagnóstico y luego arreglamos vía GSC/Webmaster — no como atajo a primera página.",
  },
  "besplatnye-ssylki": {
    title: "¿Persiguiendo enlaces gratis con blasts a directorios y fakes en foros?",
    text: "Construimos menciones desde contenido útil, directorios selectivos y crowd honesto — a un ritmo que no dispare picos.",
  },
  "kraud-marketing": {
    title: "¿Hilos de foro bien elegidos — pero los comentarios se leen como spam de enlaces?",
    text: "Elegimos plataformas vivas, respondemos con sustancia y colocamos menciones con cuidado — sin granjas de reseñas ni mitos de primera página en un mes.",
  },
  "kloaking": {
    title: "¿La promesa del snippet no encaja con el landing — y una agencia insinúa una «SERP solo para bots»?",
    text: "Comparamos HTML de bot vs navegador y endurecemos el CMS — diagnóstico de riesgo, no un playbook de cloaking.",
  },
  "baidu": {
    title: "¿Registrado en Baidu «por si acaso» — y el sitio aún no carga desde China?",
    text: "Primero decidimos si el mercado de la RPC es real — luego Webmaster oficial, contenido en chino, sin cuentas grises.",
  },
  "podderzhka-yandeks": {
    title: "¿Quieres «pedir a Yandex la primera página» — y el ticket no tiene URL, fechas ni pantallas de Webmaster?",
    text: "Primero hacemos self-check, luego abrimos un ticket claro — diagnóstico, no ranking manual.",
  },
  "kategorii-internet-magazina": {
    title: "¿Secciones del catálogo pelean entre sí y categorías finas gastan crawl?",
    text: "Rehacemos el árbol de categorías bajo demanda, surtido y reglas de indexación limpias.",
  },
  "klyuchi-internet-magazin": {
    title: "¿Volcado de keywords de tienda spawneando URLs de filtro vacías en el índice?",
    text: "Clusterizamos la demanda en categoría / filtro / ficha — primero preparación; rankings a 2–6 meses.",
  },
  "novostnoy-sayt": {
    title: "¿Portal de noticias ahogado en URLs duplicadas y móvil lento?",
    text: "Limpiamos plantillas técnicas y distribución — sin prometer audiencia ×2 la próxima semana.",
  },
  "sayty-satellity": {
    title: "¿Vendors pitchando una «granja secreta de satélites» para subir más rápido?",
    text: "Reforzamos el dominio principal con contenido, técnica y menciones honestas — sin redes de enlaces controladas.",
  },
  "socseti-i-seo": {
    title: "¿Sigues apostando el SEO a likes y «señales sociales»?",
    text: "Conectamos tráfico social, marca y landings con UTM — sin engagement falso por rankings.",
  },
  "sohranennaya-kopiya-yandex": {
    title: "¿Sin caché de Yandex — y pánico de que los rankings estén rotos?",
    text: "Primero revisamos noarchive, indexación y 200s — la caché es un diagnóstico, no un botón mágico.",
  },
  "top-instagram": {
    title: "¿Necesitas alcance más allá de los followers — sin comprar likes?",
    text: "Armamos un plan de contenido y ads alrededor de guardados reales, comentarios y recomendaciones.",
  },
  "toshnota-teksta": {
    title: "¿El brief exige un % mágico de densidad — y el borrador se lee como un volcado de keywords?",
    text: "Fijamos un corredor de herramienta y ediciones naturales — métricas de náusea para el brief, no una ley de ranking.",
  },
  "trendy-seo": {
    title: "¿Persigues nombres de algoritmos mientras el zero-click y las páginas finas se comen el CTR?",
    text: "Afinamos snippets, páginas por intención y rituales de panel — tendencias como acentos, no un mito de primera página en una semana.",
  },
  "turbo-stranitsy": {
    title: "¿El plan sigue colgando de Turbo — y el formato en búsqueda ya no existe?",
    text: "Movemos profundidad y monetización a tus URLs responsive — sin estrategia sobre un formato de SERP retirado.",
  },
  turgenev: {
    title: "¿Persigues un cero en Turgenev mientras la página sigue leyéndose como sopa de keywords?",
    text: "Usamos el informe como filtro editorial: cortamos overspam claro, mantenemos términos útiles y escribimos primero para personas.",
  },
  "user-intent": {
    title: "¿La keyword está en el title — y la SERP sigue premiando otro tipo de página?",
    text: "Mapeamos la intención del cluster desde los formatos dominantes y fijamos una intención por URL — la densidad no es la estrategia.",
  },
  wordstat: {
    title: "¿Planificas SEO con un número bruto de Wordstat — y lo llamas «demanda exacta»?",
    text: "Fijamos región, operadores y temporadas para que la frecuencia guíe el núcleo — sin prometer primera página con una cifra grande.",
  },
  "yandeks-iks": {
    title: "¿Sigues optimizando por una insignia SQI desaparecida de guías de 2018?",
    text: "Movemos el brief a diagnósticos de Webmaster, indexación y conversiones — el reemplazo operativo de la vieja puntuación de calidad.",
  },
  "yandeks-katalog": {
    title: "¿Sigues cazando el registro en Yandex.Catalog con cotizaciones de los 2020?",
    text: "Reconstruimos la presencia local en torno al sitio, Webmaster y fichas vivas en mapas — sin el ritual de un catálogo muerto.",
  },
  "yandeks-spravochnik": {
    title: "¿Las consultas locales van a Maps — y la ficha de Yandex está vacía o sin verificar?",
    text: "Verificamos ownership, alineamos NAP, rellenamos fotos y horario y gestionamos reseñas — sin ratings falsos ni la dirección de otro.",
  },
  "yandeks-xml": {
    title: "¿El scraper XML viejo sigue en el cron — y la factura de Cloud sube por endpoints muertos?",
    text: "Migramos a Search API (o lo quitamos) — canal oficial, cuotas, sin hacks del HTML de la SERP.",
  },
  "zagolovki-h1-h6": {
    title: "¿Keywords metidas en cada encabezado — o un H1 claro?",
    text: "Alineamos H1–H2 con la intención y el title para que el outline ayude a personas y a la búsqueda — sin una hoja de keywords en una sola etiqueta.",
  },
  "oformlenie-stranicy-instagram": {
    title: "¿Necesitas SMM para tu marca?",
    text: "Armamos un concepto visual y un marco de contenido — sin caos en el feed, con una oferta clara en la cabecera.",
  },
  "pryamoy-efir-instagram": {
    title: "¿Necesitas una estrategia de contenido y directos?",
    text: "Mapeamos objetivos, guiones y cadencia — qué rodar para que los lives se conviertan en leads.",
  },
  "kommentarii-v-pablike-vk": {
    title: "¿Necesitas moderación y SMM para VK?",
    text: "Fijamos reglas de comunidad, respuestas y contenido para que los comentarios traigan leads — no caos.",
  },
  "istorii-vkontakte": {
    title: "¿Necesitas un plan de contenido para VK?",
    text: "Armamos rúbricas de muro y Stories — con cadencia y CTAs para tu negocio.",
  },
  "menedzher-smm": {
    title: "¿Necesitas SMM en plantilla o externalizado?",
    text: "Mapeamos tareas, KPIs y formato de trabajo — in-house, contractor o apoyo de agencia.",
  },
  "zarabotok-blogerov-instagram": {
    title: "¿Necesitas publicidad con creators llave en mano?",
    text: "Elegimos plataformas y formatos para tu oferta — con foco en audiencia y resultados medibles.",
  },
  "bloger-dlya-reklamy-instagram": {
    title: "¿Necesitas creators alineados con tu brief?",
    text: "Armamos un short-list, vetamos la audiencia y alineamos integraciones con medición clara.",
  },
  "reklama-v-pablikah-vk": {
    title: "¿Necesitas ads en comunidades VK y SMM?",
    text: "Elegimos comunidades, creative y medición — sin pagar por bases muertas.",
  },
  "biznes-akkaunt-instagram": {
    title: "¿Necesitas SMM con analítica real?",
    text: "Montamos el perfil, el contenido y el reporting — para que los insights lleven a leads, no a likes por los likes.",
  },
  "kontent-plan-instagram": {
    title: "¿Necesitas un plan de contenido que traiga leads?",
    text: "Fijamos rúbricas, mix y un calendario mensual — sin caos ni posts de venta de pared a pared.",
  },
  "avatar-youtube": {
    title: "¿Necesitas visuales para un canal de YouTube?",
    text: "Armamos avatar, banner y un estilo unificado de thumbnails — para que el canal se reconozca desde el primer frame.",
  },
  "avatar-instagram": {
    title: "¿Necesitas packaging del perfil de Instagram?",
    text: "Armamos el avatar, la cabecera y una constante visual del feed alrededor de tu oferta.",
  },
  "didzhital-agentstvo": {
    title: "¿Necesitas un contratista digital?",
    text: "Mapeamos tareas, KPIs y formato de trabajo — SEO, ads, sitio o un stack completo.",
  },
  "opisanie-youtube-kanala": {
    title: "¿Necesitas copy y packaging del canal de YouTube?",
    text: "Redactamos la descripción, los enlaces y un look unificado con el avatar — para que el viewer entienda la oferta al momento.",
  },
  "post-instagram": {
    title: "¿Necesitas posts de venta que traigan leads?",
    text: "Armamos ofertas, estructura y CTAs — atados al plan de contenido y al diseño del perfil.",
  },
  "raskrutka-youtube": {
    title: "¿Necesitas crecimiento del canal de YouTube?",
    text: "Fijamos nicho, plan de contenido y packaging del canal — sin promesas de «viral en una semana».",
  },
  "nakrutka-laykov-instagram": {
    title: "¿Necesitas crecimiento honesto en Instagram?",
    text: "Armamos contenido y promoción sin bots — con métricas que importan al negocio.",
  },
  "reklama-instagram": {
    title: "¿Necesitas ads en Instagram que traigan leads?",
    text: "Mapeamos targeting + creators, presupuesto y métricas — sin mass-liking ni alcance vacío.",
  },
  "parol-instagram": {
    title: "¿Necesitas packaging social de marca y seguridad?",
    text: "Ayudamos con procesos de acceso, contenido y promoción — sin entregar contraseñas a terceros.",
  },
  "raskrutka-gruppy-vk": {
    title: "¿Necesitas crecer una comunidad de VK sin seguidores falsos?",
    text: "Montamos naming, cadencia de contenido y captación — audiencia viva, no números vacíos.",
  },
  "statistika-instagram": {
    title: "¿Necesitas Insights de Instagram ligados a leads — no a likes vanidosos?",
    text: "Montamos un ritual semanal de métricas: saves, respuestas, toques al enlace y objetivos en números.",
  },
  "stories-instagram-inkognito": {
    title: "¿Te preocupa la privacidad de Stories sin apps espía dudosas?",
    text: "Ayudamos a configurar Close Friends y listas de ocultar — y una forma limpia de ver contenido abierto de competidores.",
  },
  "yandeks-toloka": {
    title: "¿Evalúas labeling crowdsourced para datos o IA?",
    text: "Ayudamos a enmarcar el brief y los chequeos de calidad — sin promesas obsoletas de «$ al día» de guías antiguas.",
  },
  "serfing-saytov": {
    title: "¿Tentado a comprar visitas vacías por «métricas»?",
    text: "Montamos canales reales — SEO, ads, contenido — sin ruido de auto-surfing en la analítica.",
  },
  "skrinshoty": {
    title: "¿Necesitas capturas claras para guías y soporte?",
    text: "Ayudamos con documentación, anotaciones y un ritual de equipo — sin filtrar secretos en la nube.",
  },
  "infografika": {
    title: "¿Necesitas infografías que se lean en el móvil?",
    text: "Montamos jerarquía, datos y export — sin ruido de «wow» que mate la comprensión.",
  },
  "lid": {
    title: "¿Necesitas leads cualificados, no listas ajenas?",
    text: "Definimos el lead, montamos captación legal y el handoff al CRM — con CPL atado a deals.",
  },
  "strayk-youtube": {
    title: "¿Tienes un strike en YouTube y no sabes de qué tipo es?",
    text: "Ayudamos a leer el estado en Studio, separar Guidelines vs copyright y planear la vía de appeal.",
  },
  "menedzher-internet-magazina": {
    title: "¿Necesitas ops de tienda que no pierdan pedidos entre chat y entrega?",
    text: "Apretamos disciplina de CRM, SLA y el camino de la solicitud al envío.",
  },
  "rassylka-vk": {
    title: "¿Necesitas un broadcast legal en VK — no un ban por senders grises?",
    text: "Montamos opt-in de comunidad, widgets oficiales y una cadencia de envío calmada.",
  },
  "viralnyy-ohvat-vk": {
    title: "¿Quieres posts que salgan de la burbuja de seguidores?",
    text: "Elegimos temas y formatos dignos de compartir — sin contenido shock que mate la reputación.",
  },
  "privetstvie-sayta": {
    title: "¿La home saluda con ruido en lugar de una oferta clara?",
    text: "Reformamos la primera pantalla, calmamos popups/chat y dejamos un CTA visible.",
  },
  "telegram-kanal": {
    title: "¿Quieres un canal de Telegram que crezca sin suscriptores falsos?",
    text: "Montamos el canal, el ritmo de contenido y tráfico desde sitio, redes y placements honestos.",
  },
  "telegram": {
    title: "¿Evalúas Telegram como canal de negocio?",
    text: "Ayudamos a encajar messenger, canal y bots con el sitio y la medición — sin crecimiento falso.",
  },
  "shablon-instagram": {
    title: "¿El feed se ve caótico y cada post empieza de cero?",
    text: "Fijamos un brand kit y plantillas de post para que la grilla se mantenga coherente.",
  },
  "statya-vk": {
    title: "¿Necesitas guías long-form en VK en lugar de muros de texto?",
    text: "Montamos formato artículo, covers y un ritmo de publicación para la comunidad.",
  },
  "svyazka-instagram-facebook": {
    title: "¿Necesitas Instagram y Facebook vinculados para ads — sin Pages rotas?",
    text: "Montamos Accounts Center bien, elegimos la Page correcta y documentamos cómo desvincular con seguridad.",
  },
  "oblozhka-vk": {
    title: "¿El header de la comunidad se ve al azar y la oferta no se lee en el móvil?",
    text: "Diseñamos un cover con oferta clara, safe zone y visuales con derechos en regla.",
  },
  "blokirovka-instagram": {
    title: "¿Cuenta restringida y vendedores de «desbloqueo garantizado» rodeando?",
    text: "Mapeamos la vía oficial de appeal, higiene tras la recuperación y cómo evitar «ayudantes» grises.",
  },
  "istoriya-poiska-instagram": {
    title: "¿No quieres búsquedas recientes visibles en un teléfono compartido?",
    text: "Mostramos la vía oficial de clear y la higiene que de verdad importa — sesiones y 2FA.",
  },
  "pochtovyy-servis": {
    title: "¿Necesitas una bandeja de trabajo fiable — no una trampa de spam desechable?",
    text: "Elegimos un servicio permanente, montamos 2FA/recuperación y planificamos correo corporativo en tu dominio.",
  },
  "yandeks-dzen": {
    title: "¿Quieres alcance en Zen sin copy-paste ni plazos falsos de monetización?",
    text: "Fijamos nicho, ritmo de publicación y términos actuales de partners — calidad por encima del volumen.",
  },
  "chto-takoe-veb-sayt": {
    title: "¿Necesitas un sitio que encaje con el trabajo — no una plantilla al azar?",
    text: "Elegimos el tipo, la vía de construcción y la estructura para leads y crecimiento — sin «el sitio se venderá solo».",
  },
  "foto-instagram": {
    title: "¿El feed se ve al azar y las fotos de producto no convierten?",
    text: "Fijamos un nicho visual, un checklist de disparo y un preset de serie — con captions que sostienen la oferta.",
  },
  "otmetki-instagram": {
    title: "¿Las etiquetas se sienten al azar y los collabs no mueven el perfil?",
    text: "Fijamos reglas de mención, consentimiento y medición — para que los tags sirvan a la navegación, no al spam.",
  },
  "analogi-yandeks-market": {
    title: "¿Todas las ventas cuelgan de un marketplace y el margen se derrite?",
    text: "Mapeamos canales, higiene del feed y unit economics — con un piloto antes del surtido completo.",
  },
  "tenevoy-ban-instagram": {
    title: "¿El alcance se derrumbó y los «detectores de shadowban» quieren tu contraseña?",
    text: "Separamos mitos de límites, limpiamos apps grises y reconstruimos visibilidad con higiene de contenido — sin acciones masivas.",
  },
  "seo-bitrix": {
    title: "¿Los campos SEO de Bitrix están puestos, pero siguen filtrando duplicados y filtros finos?",
    text: "Fijamos robots, plantillas meta y URLs limpias — sin un montón de plugins del Marketplace como estrategia.",
  },
  "prosmotry-vk": {
    title: "¿Muchas vistas pero ninguna acción — y el cliente sigue pidiendo «ojos»?",
    text: "Leemos el contador con ER y stats de la comunidad — sin vistas falsas ni KPIs de vanidad.",
  },
  "karusel-instagram": {
    title: "¿Los detalles de producto se ahogan en un collage y nadie desliza el post?",
    text: "Montamos un escenario de slides, cover de gancho y CTA — con un estilo en todo el carrusel.",
  },
  "biznes-v-instagram": {
    title: "¿Grilla bonita, pero la oferta y las respuestas no convierten?",
    text: "Fijamos bio, rúbricas y un bucle semanal de insights — antes de echar presupuesto a ads.",
  },
  "ssylki-vkontakte": {
    title: "¿Las menciones no hacen clic y los previews del sitio se ven rotos?",
    text: "Montamos sintaxis de mención, previews HTTPS y URLs exactas de posts — sin tags de spam.",
  },
  "piksel-vk": {
    title: "¿El retargeting quema presupuesto en compradores y visitas frías por igual?",
    text: "Instalamos el píxel, partimos segmentos del embudo y fijamos exclusiones — con una ventana de membresía real.",
  },
  "pinterest-skachat": {
    title: "¿Los mood boards se convierten en reclamaciones de copyright en ads?",
    text: "Organizamos las referencias — y planificamos shootings propios o assets con licencia para uso comercial.",
  },
  "razblokirovka-instagram": {
    title: "¿Hay que desbloquear sin herramientas phishing de «perfil oculto»?",
    text: "Recorremos la lista oficial de bloqueados y la privacidad — sin clientes de Instagram de terceros.",
  },
  "blog-instagram": {
    title: "¿Quieres un blog de autor que no se queme en dos semanas?",
    text: "Fijamos nicho, promesa y un ritmo realista de publicación — sin comprar followers.",
  },
  "shapka-youtube": {
    title: "¿El canal se ve genérico y el banner se recorta mal en el móvil?",
    text: "Diseñamos un banner con zona segura que diga el nicho en segundos — sin listas de precios minúsculas.",
  },
  "instagram-s-kompyutera": {
    title: "¿Publicas desde el PC con herramientas random de «Instagram para Windows»?",
    text: "Montamos el flujo oficial web / Business Suite y roles de equipo — sin clientes que roban contraseñas.",
  },
  "kommentarii-instagram": {
    title: "¿Las preguntas se acumulan bajo los posts y la negatividad queda sin respuesta?",
    text: "Fijamos SLA de respuesta, filtros de moderación y plantillas — sin esquemas de spam en comentarios.",
  },
  "knopki-youtube": {
    title: "¿Las tarjetas y end screens saturan el visionado en lugar de guiarlo?",
    text: "Mapeamos un camino simple: vídeo relacionado, playlist, suscripción — sin el clutter de la era de anotaciones.",
  },
  "taymkod-youtube": {
    title: "¿Vídeos largos sin TOC y espectadores haciendo scrub al azar?",
    text: "Estructuramos capítulos y enlaces con tiempo — navegación UX, no «secretos del algoritmo».",
  },
  "yumoney": {
    title: "¿Necesitas monedero para pagar — o Checkout para la tienda?",
    text: "Separamos escenarios YooMoney vs YooKassa y el nivel de ID para tus límites.",
  },
  "gaiq": {
    title: "¿Guías viejas de GAIQ y dumps de UA en lugar de skill real en GA4?",
    text: "Mapeamos un camino Skillshop más eventos en una property viva — el certificado como plus, no como meta.",
  },
  "veb-interfeys": {
    title: "¿Panel de hosting, webmail o UX de cuenta confunden a los usuarios?",
    text: "Aclaramos roles, flujos y acceso seguro — UI de navegador que la gente pueda usar de verdad.",
  },
  "messendzher": {
    title: "¿Cinco canales de chat y nadie posee el SLA de respuesta?",
    text: "Elegimos 1–2 messengers donde ya está tu audiencia y conectamos leads al CRM — sin spam de números.",
  },
  "runet": {
    title: "¿Entras en un mercado de habla rusa con una plantilla SEO global?",
    text: "Mapeamos audiencia, idioma y canales locales de búsqueda/ads — sin mitos de «retrato de Runet» de 2020.",
  },
  "adult-trafik": {
    title: "¿Mirando tráfico 18+ sin mapa legal y de plataformas?",
    text: "Ayudamos a elegir nichos legales duraderos y canales white — sin esquemas grises ni saltarse políticas.",
  },
  "negativnoe-seo": {
    title: "¿Sospechas enlaces tóxicos, copias o un hack — y no un «botón de ban» del rival?",
    text: "Montamos monitoreo, backups y un camino de defensa — crece tu sitio, no guerras de SERP.",
  },
  "poiskovye-sistemy": {
    title: "¿Repartes presupuesto SEO en motores exóticos sin datos?",
    text: "Fijamos Yandex/Google (y Bing cuando importa) desde tu analítica — no desde un mito de cuota de 2020.",
  },
  "rsya-metrika": {
    title: "¿Ads de YAN activos, pero el ingreso no cuadra con las visitas de Metrica?",
    text: "Alineamos contadores e informes de publisher — ingreso junto a audiencia, sin matar la UX.",
  },
  "posmotret-avatar-instagram": {
    title: "¿Necesitas la foto de perfil más grande sin apps «viewer» dudosas?",
    text: "Nos quedamos en rutas oficiales de web/feed — y ayudamos a armar un avatar legible propio.",
  },
  "glavnaya-stranitsa": {
    title: "¿Homepage bonita, pero la oferta y el CTA no se leen en cinco segundos?",
    text: "Rehacemos la primera pantalla y el marco de bloques — claridad primero, slider al final.",
  },
  "zapusk-internet-magazina": {
    title: "¿Lanzas una tienda sin unit economics, suministro ni un checkout real?",
    text: "Mapeamos etapas del plan a la demanda — prep vs posiciones del núcleo con plazos honestos (2–6 meses).",
  },
  "napominanie-klientu": {
    title: "¿Emails de win-back que suenan a spam de «hace tiempo que no nos visitas»?",
    text: "Fijamos ocasiones con consentimiento primero: carrito, pausa, fiestas — utilidad por encima de insistir.",
  },
  "kontent-i-nativnaya": {
    title: "¿El brief mezcla «nuestro post del blog» con native de pago como si fueran lo mismo?",
    text: "Separamos contenido propio vs integraciones de pago — KPIs, etiquetado y a dónde debe aterrizar el tráfico.",
  },
  "tekst-glavnoy-stranitsy": {
    title: "¿Homepage llena de «mejor / personalizado / innovador» sin prueba?",
    text: "Cortamos los clichés y dejamos una oferta corta, hechos y un CTA claro.",
  },
  "kak-napisat-statyu": {
    title: "¿Los borradores se atascan y las keywords SEO destrozan la legibilidad?",
    text: "Fijamos objetivo, esquema y pase de edición — SEO encima de texto útil, no en su lugar.",
  },
  "rss": {
    title: "¿Necesitas un feed de updates limpio sin scrapers de texto completo vaciando el blog?",
    text: "Activamos un feed CMS estable con teasers — distribución para lectores, no mitos de «masa de enlaces».",
  },
  "tz-kopiraytera": {
    title: "¿Briefs vagos de «hazlo bonito con keywords» quemando presupuesto en rewrites?",
    text: "Fijamos objetivo, audiencia, hechos y aceptación — para que el copy aterrice más cerca en el primer pase.",
  },
  "zagolovki-4u": {
    title: "¿Titulares llenos de «nº 1 / único» vacío sin prueba ni subida de CTR?",
    text: "Rehacemos H1 y asuntos con beneficio, especificidad y urgencia honesta — luego probamos variantes.",
  },
  "o-kompanii": {
    title: "¿Página About llena de «profesionales / innovación» sin nada que lo pruebe?",
    text: "Cortamos el fluff y dejamos para quién eres, prueba y siguientes pasos claros para B2B y compradores.",
  },
  "avtovoronka-instagram": {
    title: "¿Embudo de Instagram atascado entre likes y Direct vacío — o peor, bots grises?",
    text: "Mapeamos el camino, el CTA del perfil y auto-respuestas conformes — escenario primero, automatización después.",
  },
  "avtovoronka-vk": {
    title: "¿Mensajes de comunidad VK sin opt-in — o un bot sin camino a un humano?",
    text: "Montamos suscripción a mensajes, una cadena de 3–5 pasos y métricas por etapa — consentimiento primero, automatización después.",
  },
  "prodayushchiy-kontent": {
    title: "¿Feed lleno de «compra ya» mientras leads y confianza se quedan planos?",
    text: "Mezclamos oferta, valor y prueba para B2C/B2B — con CTAs honestos y medición más allá de los likes.",
  },
  "nazvanie-internet-magazina": {
    title: "¿Nombre de tienda atrapado entre «nos gusta» y un dominio cogido?",
    text: "Armamos una shortlist que encaje con la audiencia, comprobamos dominios y conflictos, y mantenemos plazos SEO realistas.",
  },
  "parsing-python": {
    title: "¿Necesitas un parser en Python sin recetas grises anti-bot?",
    text: "Elegimos el stack adecuado (requests/BS4/Scrapy), fijamos límites y nos quedamos en ToS y APIs oficiales.",
  },
  json: {
    title: "¿Payloads de API que fallan por comas, comillas o parse con eval?",
    text: "Fijamos sintaxis JSON estricta, rutas de parse seguras y configs limpias para front e integraciones.",
  },
  "primery-email-rassylok": {
    title: "¿Copias emails bonitos de marcas mientras open rate y confianza se quedan planos?",
    text: "Adaptamos una técnica clara — elección, tono de welcome, progreso o feedback — a tu lista con opt-in.",
  },
  "nativnaya-reklama": {
    title: "¿Posts nativos que gritan «anuncio» desde la primera línea?",
    text: "Encajamos la experiencia de producto en la voz de la plataforma — con etiquetado honesto, no con emoción falsa.",
  },
  "sayt-pered-reklamoy": {
    title: "¿Ads en marcha, clics entrando — y sigue habiendo cero leads?",
    text: "Auditamos goals, formularios, primera pantalla y móvil antes de escalar el spend — landing primero, pujas después.",
  },
  "besplatnaya-reklama": {
    title: "¿Cazando «ads gratis» y acabando en bots grises o listas de spam?",
    text: "Elegimos canales honestos sin media para tu nicho — contenido, partnerships, plataformas de demanda — y luego un test de pago pequeño.",
  },
  amp: {
    title: "¿Sigues manteniendo AMP «por SEO» mientras los Core Web Vitals del sitio principal van atrasados?",
    text: "Centramos velocidad y UX móvil en las URLs canónicas — AMP solo si ya tienes un caso de contenido claro.",
  },
  "oshibki-smm": {
    title: "¿Posts en redes por checkbox — sin objetivo, sin audiencia, sin respuestas?",
    text: "Fijamos una plataforma, un objetivo del mes y un ritmo sin spam ni moderación falsa de «solo cinco estrellas».",
  },
  infopovod: {
    title: "¿Necesitas una razón para hablar de la marca sin hype vacío ni newsjacking tóxico?",
    text: "Empaquetamos un gancho planificado — investigación, lanzamiento, collab — con pack para editores y métricas más allá del ruido.",
  },
  "email-marketing-2020": {
    title: "¿Persiguiendo widgets interactivos de email mientras asuntos móviles y triggers van atrasados?",
    text: "Fijamos HTML legible, welcome/triggers y segmentos CRM — experimentos solo sobre una base sólida.",
  },
  "parsing-email": {
    title: "¿Tentado por una «lista scrapeada lista» que mata la reputación del dominio?",
    text: "Crecemos una lista CRM con opt-in, consentimiento y baja fácil — sin cosechar emails en masa.",
  },
  crm: {
    title: "¿Eliges CRM por una lista de 2020 mientras los deals siguen en chats?",
    text: "Mapeamos tu funnel, comparamos sistemas en tus escenarios y desplegamos con disciplina — no por logos en un ranking.",
  },
  "parsing-auditorii": {
    title: "¿Tentado por un «dump de audiencia del competidor» que arriesga bans?",
    text: "Construimos segmentos desde tu CRM, pixel y lookalikes — sin scrapear perfiles ajenos.",
  },
  "antitrendy-marketinga": {
    title: "¿Sigues apostando a spam, un solo canal y hard-sell en el primer toque?",
    text: "Recortamos anti-tendencias y reconstruimos toques medibles alrededor de oferta, consentimiento y funnel.",
  },
  "analitika-telegram": {
    title: "¿Confundes views de «ojos» en Telegram con engagement — y compras alcance falso?",
    text: "Montamos un dashboard semanal de mediana de views con Insights y UTM — números honestos, sin bots de views.",
  },
  "google-partner": {
    title: "¿Persiguiendo un badge Partner con un umbral de spend de 2018?",
    text: "Alineamos certs Skillshop, calidad del MCC y criterios actuales del programa — el badge como prueba, no como promesa de CPA.",
  },
  "udalenie-botov-instagram": {
    title: "¿Conteo bonito de followers — y ER matado por bots?",
    text: "Limpiamos basura por lotes con seguridad, saltamos «auto-cleaners» con contraseña y reconstruimos engagement vivo sin crecimiento fake.",
  },
  "planirovshchik-rezultatov-google": {
    title: "¿Discutiendo el presupuesto estacional «a ojo» mientras Performance Planner está sin usar?",
    text: "Armamos escenarios con CPA desde campañas vivas — el forecast como orden de magnitud, no como promesa de Google.",
  },
  "eat-kopirayting": {
    title: "¿Publicas consejos YMYL bajo «Admin» sin fuentes?",
    text: "Montamos bylines expertos, hechos verificables y señales de confianza del sitio — E-E-A-T como calidad, no como atajo mágico de posiciones.",
  },
  "tochki-kontakta": {
    title: "¿Ads bonitos — y deals que mueren en chat, teléfono o recepción?",
    text: "Mapeamos cadenas de toques online y offline, arreglamos juntas débiles y medimos la conversión en cada paso.",
  },
  "ssylki-v-instagram": {
    title: "¿Publicas URLs en captions que nadie puede tocar?",
    text: "Montamos bio / link-in-bio, stickers de Stories y UTMs — salidas medibles sin un zoo de herramientas grises.",
  },
  "sarafannoe-radio": {
    title: "¿Esperas que los clientes te recomienden — sin pedir, medir ni arreglar el servicio?",
    text: "Montamos asks post-compra, reseñas honestas y tracking de referidos — experiencia real, sin estrellas falsas.",
  },
  slogan: {
    title: "¿Atascado en «calidad e innovación» — o una línea de generador que falla la marca?",
    text: "Creamos un slogan corto, fácil de decir y cumplible que encaje con nombre y logo — verdad antes que palabras bonitas.",
  },
  crello: {
    title: "¿Plantilla nueva cada día — y un feed sin marca?",
    text: "Fijamos un set pequeño de starters con marca en VistaCreate/Crello — visuales SMM rápidos sin caos de diseñador.",
  },
  "adaptivnyy-shablon-direkt": {
    title: "¿Dibujando diez tamaños de banner a mano por cada test de Direct?",
    text: "Montamos creatives adaptativos con smart center y campos legales — previews primero, luego escala.",
  },
  "rassylka-whatsapp": {
    title: "¿Compraste una «base de números WhatsApp» — y te llegaron bloqueos en lugar de leads?",
    text: "Montamos un camino opt-in y plantillas oficiales de Business API — consentimiento primero, sin remitentes grises.",
  },
  "sotsialnye-seti": {
    title: "¿Cinco perfiles sociales vacíos — y aún sin un canal claro?",
    text: "Elegimos 1–2 plataformas para tu audiencia y trabajo — con vínculo sitio/CRM, no copiando una lista mundial de diez.",
  },
  "instagram-direct": {
    title: "¿Blasts fríos de Direct — y límites en lugar de leads?",
    text: "Montamos saludos, SLA y CTAs cálidos — automatización de servicio sin tools grises de spam.",
  },
  "instagram-direct-gid": {
    title: "¿El equipo no encuentra dónde viven los chats — y los leads mueren en silencio?",
    text: "Mapeamos lo básico del messenger, quick replies y una cola inbound — sin cazar un botón de «enviar a todos».",
  },
  "dekorativnyy-shrift-instagram": {
    title: "¿Bio fancy — y nadie lee la oferta en tres segundos?",
    text: "Dejamos un acento Unicode y un CTA plano — sin apps de contraseña, comprobado en iOS y Android.",
  },
  "whatsapp-v-instagram": {
    title: "¿Los clientes piden WhatsApp en Stories — y buscan dígitos en la bio a mano?",
    text: "Ponemos un wa.me probado en el header con un stub corto text= — inbound al clic, sin spam frío.",
  },
  "youtube-monetizaciya": {
    title: "¿Planificando el ingreso del canal desde el screenshot de revenue de otro?",
    text: "Fijamos nicho, retención y modelos legales de ingreso — umbrales del Partner Program del Help oficial, no de guías viejas.",
  },
  "futer-sayta": {
    title: "¿Footer lleno de anchors SEO — y sin contactos claros?",
    text: "Dejamos un footer corto y de confianza: contactos, legal, nav clave — sin muro de keywords.",
  },
  "oblachnyy-servis": {
    title: "¿Pasaste al equipo a «la nube» — y nadie es dueño de backups ni accesos?",
    text: "Elegimos SaaS/IaaS por el trabajo, fijamos 2FA y pruebas de recuperación — antes de mover datos en masa.",
  },
  "shaut-instagram": {
    title: "¿SFS semanal con cuentas al azar — y unfollows en lugar de leads?",
    text: "Elegimos un partner relevante, fijamos el acuerdo y medimos follows/consultas — no el conteo de shoutouts.",
  },
  "ssylka-instagram": {
    title: "¿Enlace del perfil en ads — y abre Explore en lugar de tu cuenta?",
    text: "Copiamos la URL correcta del perfil, la probamos y la colocamos junto a una oferta clara en el header.",
  },
  "kontent-menedzher": {
    title: "¿Los posts salen «como llegaron» — y cada semana se rompen móvil y enlaces?",
    text: "Fijamos brief, checklist de CMS y flujo de publicación — plan y calidad en la página en vivo, no solo conteo de palabras.",
  },
  "telegram-boty": {
    title: "¿Necesitas un bot de Telegram para leads — sin un laberinto de botones sin salida?",
    text: "Diseñamos un flow corto, handoff a un humano y manejo seguro del token — sin hacks dudosos de crecimiento.",
  },
  "feyk-stranitsa": {
    title: "¿Encontraste un clon de tu marca — y clientes casi pagaron en el sitio equivocado?",
    text: "Fijamos URLs oficiales, monitoreo y un playbook de incidente — sin «escaparates falsos» para SEO.",
  },
  "lichnyy-kabinet": {
    title: "¿Necesitas una cuenta personal — sin un laberinto de alta con 20 campos?",
    text: "Acotamos roles, auth y los primeros flows de autoservicio — seguridad y UX móvil desde el brief.",
  },
  "viralnyy-kontent": {
    title: "¿Esperando que cada post se vuelva viral — y comprando packs de shares?",
    text: "Metemos formatos dignos de share en un sistema de contenido — sin KPIs de viralidad falsa.",
  },
  "internet-portal": {
    title: "¿Llamas «portal» a un folleto de 5 páginas — y presupuestas como un gigante?",
    text: "Separamos portal vs sitio, fijamos un MVP de 1–3 flows y planificamos soporte — no un zoológico vacío de secciones.",
  },
  "videoreklama-youtube": {
    title: "¿Crees que YouTube Ads venderá sin landing ni objetivos de conversión?",
    text: "Montamos un test de creatives medido alrededor del CPA — las views no son la meta final.",
  },
  "analitika-kontent-marketinga": {
    title: "¿Publicas por likes — y no sabes qué pieza trae leads?",
    text: "Fijamos 5–7 KPIs a un objetivo y un ritual semanal — coste y conversión, no views de vanidad.",
  },
  "bazy-dannyh-sayta": {
    title: "¿Update del CMS mañana — y el único backup son «archivos en el mismo disco»?",
    text: "Montamos backups de DB+files offsite y una prueba de restore — antes de la siguiente migración.",
  },
  "sohranit-foto-instagram": {
    title: "¿Necesitas un archivo listo para el cliente — y solo queda un screenshot del feed?",
    text: "Dejamos el hábito de archivar fuera del feed — derechos primero, sin downloaders de phishing.",
  },
  "seo-malyy-biznes": {
    title: "¿Te prometieron «primera página en una semana» — y aún no hay landings ni ficha de mapa?",
    text: "Montamos un plan SMB realista: prep en semanas, crecimiento de rankings a meses — primero páginas locales.",
  },
  "ssylki-telegram": {
    title: "¿Los ads mandan a un invite caducado — y el soporte cae en el chat equivocado?",
    text: "Fijamos un t.me canónico en el brand kit — público vs invite etiquetados con claridad.",
  },
  "rozygrysh-instagram": {
    title: "¿El ganador parece un insider — y nadie grabó cómo se sacó el número?",
    text: "Fijamos reglas, lista numerada y RNG público en vídeo — sorteos justos, sin tools de contraseña.",
  },
  "avtorskie-prava-instagram": {
    title: "¿Claims de música y fotos en el feed — y el equipo sigue sacando archivos de Google Images?",
    text: "Fijamos música/stock con licencia y un camino oficial de appeal — sin esquemas de bypass de DRM.",
  },
  "golosovoy-poisk": {
    title: "¿El sitio no responde a queries habladas de «cerca / cómo» — y el FAQ es un dump de keywords?",
    text: "Reforzamos velocidad, respuestas cortas y clusters conversacionales — SEO clásico, no un culto a la voz.",
  },
  "statistika-google-prodazhi": {
    title: "¿Hay demanda en Google — pero no hay loop de keys a landings y objetivos de venta?",
    text: "Conectamos Planner, Trends y Analytics en un ciclo: keys → estación → landings → objetivos.",
  },
  "opisanie-tovara": {
    title: "¿Foto bonita, ficha vacía — y los compradores preguntan talla y material en el chat?",
    text: "Escribimos lead, specs y «por qué nosotros» para que las dudas se cierren antes de que responda el manager.",
  },
  "dlina-seo-teksta": {
    title: "¿Los briefs persiguen cuotas de caracteres — y las páginas siguen perdiendo frente a respuestas más claras?",
    text: "Fijamos el volumen por intención y guías del SERP — sustancia sobre relleno, plazos sin mitos de primera página al instante.",
  },
  "seo-kopirayting": {
    title: "¿Los briefs persiguen densidad de keywords — y las páginas siguen leyéndose como cebo para bots?",
    text: "Fijamos intención, LSI y estructura en el brief — copy humano primero, plazos sin mitos de primera página al instante.",
  },
  "diplinking": {
    title: "¿Los ads prometen una pantalla de promo — y el clic aterriza en home o en un onboarding roto?",
    text: "Cableamos deeplink + deferred + fallback — camino más corto a la oferta, no un botón mágico de ROAS.",
  },
  "vnutrennie-faktory": {
    title: "¿El link building arranca en un sitio crudo — lento, mixed content, landings vacías?",
    text: "Ordenamos primero el on-page: contenido, estructura, HTTPS, velocidad — prep antes de la vía externa.",
  },
  "seo-yandex-google": {
    title: "¿Solo se mira un panel de webmaster — y el otro motor se come en silencio la mitad de la demanda?",
    text: "Corremos un sitio con ambos paneles y clusters compartidos — los acentos difieren; prep y horizontes de primera página se mantienen honestos.",
  },
  "prazdnichnyy-retargeting": {
    title: "¿Sube el tráfico de fiestas — y los mismos ads fríos de search persiguen a quien ya navegó?",
    text: "Partimos el retargeting en segmentos y una cascada — control de CPA de la base cálida, no un banner para todos.",
  },
  "seo-posle-topa": {
    title: "¿El sitio llegó a primera página — y el plan es apagar el SEO para «ahorrar presupuesto»?",
    text: "Mantenemos una vía de hold-and-grow: snippets, CR, clusters nuevos — mantenimiento, no un retainer eterno de checkbox.",
  },
  "mobilnaya-reklama-google": {
    title: "¿El media plan copia el «CTR medio 4%» de otro — y el CPA móvil sigue derivando?",
    text: "Separamos Search/Display, fijamos tu CPA y leemos slices móviles en la cuenta — no benchmarks PDF vintage.",
  },
  "strategiya-prodvizheniya": {
    title: "¿El plan SEO «como todos» no encaja con la edad e historial de tu sitio?",
    text: "Elegimos escenario desde el diagnóstico — sitio nuevo, long tail o rehab — sin copiar el checklist del competidor.",
  },
  "mobilnyy-poisk": {
    title: "¿Los rankings se ven bien en desktop — y la SERP móvil más el bounce cuentan otra historia?",
    text: "Revisamos rankings móviles, arreglamos plantillas en teléfonos reales y tratamos la velocidad como trabajo del sitio — no Turbo/AMP por defecto.",
  },
  "sotsseti-dlya-biznesa": {
    title: "¿Hay perfiles — y los clientes siguen eligiendo al competidor que responde en el chat?",
    text: "Elegimos 1–2 canales vivos, un ritmo de respuesta y un enlace al sitio/lead — confianza y servicio, no presencia vacía en todas partes.",
  },
  "ctr-faktor-google": {
    title: "¿El plan sigue colgado de comprar clics en la SERP porque «el CTR es un factor»?",
    text: "Leemos el CTR de GSC como diagnóstico del snippet y arreglamos title/intención — sin esquemas de inflación de clics.",
  },
  "otsenka-stoimosti-sayta": {
    title: "¿El precio de venta cuelga de una captura de la calculadora de dominio en un clic?",
    text: "Armamos P&L, mix de tráfico y riesgos — estimaciones online como borrador de tendencia, no el número del trato.",
  },
  "linkedin": {
    title: "¿El perfil de LinkedIn está vacío — y hiring o B2B aún espera «presencia»?",
    text: "Completamos headline, experiencia y página de empresa con un objetivo claro — Premium solo cuando la tarea lo pide.",
  },
  "reklama-odnoklassniki": {
    title: "¿Los ads de OK copian creatives de VK — y la respuesta sigue ruidosa?",
    text: "Fijamos oferta concreta, creative legible y objetivos de CPA — formatos revisados en la cuenta actual, no en guías viejas.",
  },
  "prodvizhenie-brenda": {
    title: "¿La «promoción» de marca es un montón de posts — y aún no hay objetivo SMART?",
    text: "Fijamos el resultado, métricas SMART y un SWOT corto — luego elegimos 1–2 canales en lugar de hacerlo todo a la vez.",
  },
  "gruppa-facebook": {
    title: "¿La Page de Facebook está vacía — y los ads deberían «rescatarla»?",
    text: "Primero fijamos rol de la Page, oferta y contenido de arranque — luego moderación y pago solo cuando la cadena funciona.",
  },
  "yml-fayl": {
    title: "¿El feed de Market es un XLS editado a mano — y el stock ya está mal?",
    text: "Conectamos YML desde una sola fuente de inventario con auto-refresh HTTPS — y arreglamos errores de moderación en los datos, no solo en el archivo.",
  },
  "veb-prilozhenie": {
    title: "¿El brief dice «solo un sitio» — pero necesitas roles, carrito y estados?",
    text: "Separamos landings públicas de los escenarios de producto — stack después de datos, integraciones y criterios de aceptación.",
  },
  "veb-servisy": {
    title: "¿Las integraciones son «solo pegamento» — hasta que la API de pago se apaga?",
    text: "Mapeamos escenario de negocio, contrato y plan de fallo — docs y monitoring antes que acrónimos de moda.",
  },
  "adminka-sayta": {
    title: "¿El contenido espera a un desarrollador — y una sola contraseña de admin compartida?",
    text: "Fijamos roles, cuentas únicas e higiene de updates/backups — para que el CMS acelere la publicación sin volverse una puerta de breach.",
  },
  "oshibka-500": {
    title: "¿Las URLs clave devuelven 500 — y alguien quiere un «plugin de fix»?",
    text: "Confirmamos desde fuera, leemos logs de app/servidor y hacemos rollback del último cambio — sin redirects que enmascaren el síntoma.",
  },
  "skript-sayta": {
    title: "¿Una docena de widgets en el head — y nadie es dueño de los snippets?",
    text: "Mantenemos fuentes de confianza, un solo lugar de insert y un check de velocidad — roles cliente vs servidor sin «scripts SEO» de foros.",
  },
  "pozdravlenie-klienta": {
    title: "¿Los emails de cumpleaños dicen «¡Estimado cliente!» — y suenan a spam?",
    text: "Fijamos fechas en CRM, consentimiento y rotación de plantillas — cálido por nombre, con notas personales VIP en lugar de poesía de generador.",
  },
  "kviz-sayt": {
    title: "¿El quiz pide el teléfono en el paso uno — y el drop-off mata el funnel?",
    text: "Mapeamos 4–8 preguntas al punto, un outcome útil y handoff a CRM — progreso sin trucos falsos de «has ganado».",
  },
  "retargeting-meta": {
    title: "¿El retarget cálido muestra un solo creative a carrito y visitas peladas por igual?",
    text: "Separamos segmentos de sitio, lista y engagement, excluimos compradores y limitamos frecuencia — CPA por encima del teatro de reach.",
  },
  "interaktivnyy-kontent": {
    title: "¿«Wow» interactivo en cada página — y aún sin leads?",
    text: "Elegimos un formato para el trabajo del usuario — test, calculadora o configurador — y medimos pasos más el siguiente CTA.",
  },
  "virusnyy-marketing": {
    title: "¿Esperas que un pack de views compre un «virus» — y las ventas siguen vacías?",
    text: "Fijamos idea, primer push y un puente al producto — shares y leads por encima de garantías falsas de views.",
  },
  "sredniy-chek": {
    title: "¿El AOV sube — y el margen se muere en silencio con el envío gratis?",
    text: "Fijamos una palanca a la vez — cross-sell relevante, un umbral justo por encima del AOV actual — y miramos CR de pedido junto al margen.",
  },
  "sem-kasaniy": {
    title: "¿Un solo canal «mágico» — y la marca sigue desconocida en el checkout?",
    text: "Mapeamos una cadena corta multi-toque con mensajes distintos — 2–3 canales más retarget, medidos más allá del last click.",
  },
  "prodazhi-internet-magazin": {
    title: "¿Veinte growth hacks a la vez — y aún sin claridad de qué movió las ventas?",
    text: "Elegimos 1–2 palancas para el cuello real — tráfico, conversión o AOV — y medimos ingresos con margen.",
  },
  "tz-na-sayt": {
    title: "¿El brief dice «hazlo bonito» — y el build se vuelve ediciones eternas de gusto?",
    text: "Fijamos objetivos, estructura, referencias y plazos por etapa — prototipo antes del pulido, el acceso se queda contigo.",
  },
  "project-manager": {
    title: "¿Especialistas fuertes — y el proyecto aún se esparce por los chats?",
    text: "Fijamos scope, criterios de «hecho» y un ritmo de status — coordinación sin cultura de guardián de statuses.",
  },
  "udalennaya-rabota": {
    title: "¿Equipo remoto online todo el día — y aún sin claridad de qué se entregó?",
    text: "Alineamos KPIs, un solo loop de tareas y ventanas de sync — gestión por outcomes, no por mirar pantallas.",
  },
  "negativnyy-otzyv": {
    title: "¿Reseña negativa online — y la respuesta pelea o dice «disculpas por las molestias»?",
    text: "Fijamos un marco de respuesta calmado: hechos, un siguiente paso y un arreglo real — sin agresión ni plantillas vacías.",
  },
  "sms-rassylka": {
    title: "¿Blast SMS a una lista comprada — y más quejas que pedidos?",
    text: "Armamos segmentos con consentimiento, copy corto y medición — toques raros, opt-out claro, sin spam frío.",
  },
  "prodvizhenie-prilozheniy": {
    title: "¿Installs baratos — y el churn del día 1 se come todo el presupuesto?",
    text: "Fijamos evento de éxito, segmentos, deep links y KPIs de retention — escalamos solo lo que se queda.",
  },
  "glavnaya-internet-magazina": {
    title: "¿Homepage llena de banners — y aún sin claridad de dónde clic para comprar?",
    text: "Armamos header, escaparate, copy corto de trust y un footer útil — primero el camino al catálogo.",
  },
  "razmeshchenie-lendinga": {
    title: "¿Dominio nuevo «por la keyword» — y el SEO vuelve a empezar desde cero?",
    text: "Elegimos dominio, subdominio o URL interna según oferta y canal — aislamiento solo cuando compensa.",
  },
  "prognoz-trafika": {
    title: "¿Un número SEO «garantizado» de visitas — y un plan de primera página en un mes encima?",
    text: "Modelamos demanda, posiciones y CTR como rango — el potencial aparte del horizonte planificado de 2–6 meses hacia la primera página.",
  },
  "onlayn-obuchenie": {
    title: "¿Otra tool de webinar — y el equipo sigue en el email?",
    text: "Montamos ritmo de contenido, práctica entre sesiones y feedback — el híbrido gana al monólogo de slides.",
  },
  "tochki-rosta-sayta": {
    title: "¿Meseta de tráfico — y parece que el nicho ya está exprimido?",
    text: "Diagnosticamos primero demanda, CRO o canales — luego 1–2 palancas; el SEO hacia primera página se planea a 2–6 meses.",
  },
  "giperlokalnyy-targeting": {
    title: "¿Ads a toda la ciudad — y mesas vacías al lado?",
    text: "Montamos geopolígono, oferta de «por qué venir aquí» y medición — sin esquemas de radar MAC de espionaje.",
  },
  "omnikanalnyy-kontent-marketing": {
    title: "¿Sitio, chat y ads prometen cosas distintas — y el cliente cuenta su historia cada vez?",
    text: "Auditamos el journey, sincronizamos oferta y tono en 2–3 canales — omni antes que «otra red más».",
  },
  "prodvizhenie-offlayn-biznesa": {
    title: "¿El escaparate está bien — y el teléfono aún no te encuentra cerca?",
    text: "Arreglamos NAP, reseñas e hiperlocal con medición de visitas — primero mapas, no radar MAC.",
  },
  "uchastie-v-tenderah": {
    title: "¿Semanas en una oferta — y la licitación ya parece «decidida»?",
    text: "Revisamos contrato, buffer de margen y red flags antes de gastar al equipo — sin dumping para ganar.",
  },
  "korporativnoe-obuchenie": {
    title: "¿«Desde el lunes todos estudian» — y aún no pega ninguna skill?",
    text: "Montamos plan por rol, metas medibles por módulo y un mentor — práctica voluntaria por encima de órdenes.",
  },
  "korporativnyy-blog": {
    title: "¿Blog «como un media gigante» — y aún sin leads, solo un hobby caro?",
    text: "Fijamos meta de negocio, rúbricas, KPI y un dueño dentro de la empresa — valor antes que posts de vanidad.",
  },
  "performance-marketing": {
    title: "¿Los clics baratos se ven genial — y las ventas aún no aparecen en el CRM?",
    text: "Fijamos KPIs de acción, tracking y encaje landing–oferta — optimizamos por dinero, no solo por CTR.",
  },
  "avtovoronka": {
    title: "¿Bot en cada paso — y las preguntas complejas aún mueren en el chat?",
    text: "Mapeamos pasos, corregimos caídas y escalamos a un humano — automatizamos la rutina, no toda la venta.",
  },
  "nayti-marketologa": {
    title: "¿Contratar a «alguien que sabe de ads» — y aún sin KPI ni ownership?",
    text: "Fijamos brief, formato (agencia/in-house/híbrido) y KPIs medibles — casos por encima de mitos de horas.",
  },
  "zashchita-ot-parsinga": {
    title: "¿Captcha en cada página — y los scrapers siguen machacando el catálogo?",
    text: "Montamos rate limits, challenges por riesgo y allowlist de crawlers — subimos el coste del scrape sin matar el SEO.",
  },
  "prognoz-trafika-google-ads": {
    title: "¿Un número del Keyword Planner — y el presupuesto aún falla el CPA?",
    text: "Limpiamos semántica, agrupamos por economía y fijamos CTR/CPC como rango — supuestos antes de la subasta.",
  },
  "vrednye-sovety-rukovoditelyam": {
    title: "¿Reuniones de «siempre tengo razón» — y la gente fuerte se va en silencio?",
    text: "Damos la vuelta a los antipatrones: agenda, promesas cumplidas y retener a quien ya entrega.",
  },
  "promoaktsii": {
    title: "¿Corren promos — y el margen se derrite mientras la gente espera −50%?",
    text: "Elegimos mecánica bajo una meta, contamos la economía post-descuento y fijamos medición con códigos y UTM.",
  },
  "kartochka-tovara": {
    title: "¿Ficha abierta — y el comprador rebota sin ver precio ni Comprar?",
    text: "Armamos media, specs, precio junto al CTA y bloques de trust para que la decisión se cierre en la página.",
  },
  "vygoranie-sotrudnikov": {
    title: "¿Equipo agotado — y otro team-building no lo arregla?",
    text: "Aclaramos carga y metas, protegemos límites de recuperación y mantenemos feedback sin «positividad» tóxica.",
  },
  "kpi-menedzhera-prodazh": {
    title: "¿Se apilan KPIs de ventas — y aún no está claro quién vende con margen?",
    text: "Fijamos pocas métricas ligadas a deals y economía, cerramos huecos de gaming y las controlamos en el CRM.",
  },
  "akkaunt-menedzher": {
    title: "¿Los clientes se quedan — pero nadie posee metas, informes y renovaciones?",
    text: "Aclaramos el rol de account frente a sales/PM, fijamos cadencia y reporting, y crecemos la cuenta desde necesidades reales.",
  },
  "oshibki-internet-magazina": {
    title: "¿La tienda «funciona» — y aún catálogo, filtros y pop-ups matan la conversión?",
    text: "Pillamos duplicados, categorías caóticas, media débil y bloqueos de primera pantalla que las auditorías suelen pasar.",
  },
  "effektivnost-videoreklamy": {
    title: "¿El vídeo se ve «visto» — y aún no está claro si movió marca o ventas?",
    text: "Armamos un panel media → marca → negocio: viewability, señales de lift y caminos más allá del last-click.",
  },
  "broshennaya-korzina": {
    title: "¿El carrito se llena — y el checkout aún pierde compradores por sorpresas de envío?",
    text: "Cortamos fricción: guest checkout, trust, total claro antes, bugs del carrito y luego recuperación honesta.",
  },
  "kommercheskoe-predlozhenie": {
    title: "¿Salen propuestas — y las respuestas se traban en precio vago y CTA blando?",
    text: "Ajustamos tono frío/tibio/caliente, ponemos beneficio y precio al frente y cerramos con un siguiente paso claro.",
  },
  "elektronnaya-kniga": {
    title: "¿Necesitas un ebook lead magnet — sin presupuesto de diseñador?",
    text: "Estructuramos un tema, sacamos un PDF sólido y montamos distribución con consentimiento y tracking de descarga.",
  },
  "roas": {
    title: "¿El ROAS se ve bien — y el margen aún no deja beneficio?",
    text: "Fijamos gasto honesto (media + producción), ligamos revenue a la atribución y leemos ROAS junto a la unit economics.",
  },
  "kognitivnye-iskazheniya": {
    title: "¿La oferta está clara — y aún la elección se atasca en miedo, framing y trust débil?",
    text: "Aplicamos exposure, aversión a la pérdida y tramos con ética — con plazos reales y señales de trust, no dark patterns.",
  },
  "intent-sotsialnye-prodazhi": {
    title: "¿Los compradores preguntan en social — y las respuestas se vuelven spam o leads perdidos?",
    text: "Puntuamos niveles de intent, fijamos handoff a CRM y SLA, y respondemos con ética en canales lícitos.",
  },
  "yuzabiliti-internet-magazina": {
    title: "¿El tráfico llega a la tienda — y el checkout aún pierde en formularios y sorpresas?",
    text: "Arreglamos búsqueda, móvil, persistencia del carrito y totales transparentes antes de verter más gasto en ads.",
  },
  "google-assessory": {
    title: "¿Persigues «scores de rater» — y aún no está claro qué piden E-E-A-T e YMYL?",
    text: "Alineamos propósito de página, autoría y señales de trust — sin mitos de que un rater te regala la primera página.",
  },
  "oshibki-reklamnoy-kampanii": {
    title: "¿El presupuesto de ads se quema — y nunca se revisó demanda de búsqueda ni relevancia?",
    text: "Separamos Search vs Display, fijamos límites realistas de test y limpiamos la cadena consulta → ad → landing.",
  },
  "problemnye-klienty": {
    title: "¿Los chats de soporte escalan — y los scripts solo alimentan el conflicto?",
    text: "Mapeamos tipos de cliente, fijamos un marco de respuesta calmado y mantenemos líneas de stop sin perder margen ni reputación.",
  },
  "sozdanie-internet-magazina": {
    title: "¿El mockup de la tienda se ve bien — y checkout, stock o móvil siguen rotos?",
    text: "Cerramos lo básico del storefront antes de ads: pago, catálogo, búsqueda, velocidad y soporte real.",
  },
  "tendentsii-veb-dizayna": {
    title: "¿UI de moda enviada — y velocidad móvil o claridad del CTA empeoraron?",
    text: "Filtramos tendencias por camino, Core Web Vitals y encaje de marca — antes que animación por la animación.",
  },
  "tsvet-internet-magazina": {
    title: "¿La paleta pelea con el logo — y el CTA sigue desapareciendo en móvil?",
    text: "Fijamos 2–3 colores de marca, contraste legible y acento de CTA como test — no un mito de conversión.",
  },
  "vovlechenie-polzovateley": {
    title: "¿Llega tráfico — y las demos se apagan sin un siguiente paso claro?",
    text: "Mapeamos fuentes, reaccionamos a la pasividad y cerramos fricción de onboarding antes de escalar más gasto.",
  },
  "poseshhaemost-sayta": {
    title: "¿Quieres más visitas — pero el sitio es lento y los canales están dispersos?",
    text: "Primero auditamos velocidad, navegación y contenido; luego elegimos 1–2 canales white-hat sin mitos de «primera página en un mes».",
  },
  serm: {
    title: "¿SERP de marca llena de negatividad — y nadie responde?",
    text: "Mapeamos resultados de marca, reforzamos URLs propias y tratamos reviews con ética — sin granjas de positividad falsa.",
  },
  "affiliat-filtr": {
    title: "¿Varios dominios casi iguales peleando las mismas queries?",
    text: "Separamos marcas/ofertas reales o consolidamos en un sitio fuerte — antes de que el filtro de afiliados corte el grupo.",
  },
  "agregatory-kontenta": {
    title: "¿Montas un agregador — pero fuentes y páginas vacías son un riesgo legal?",
    text: "Fijamos derechos, filtros y plantillas de página para que el producto sirva intent real — no un almacén de enlaces.",
  },
  yuzabiliti: {
    title: "¿Llega tráfico — y la gente rebota antes del lead o la compra?",
    text: "Recorremos escenarios clave en móvil y desktop, cortamos fricción y apretamos el camino a la acción objetivo.",
  },
  "den-v-prime": {
    title: "¿La promoción parece «una línea en la cuenta» — y el equipo es invisible?",
    text: "Mostramos cómo SEO, paid search y la prep del proyecto se reparte un día — sin mitos de primera página al lanzar.",
  },
  "vidy-reklamy": {
    title: "¿Eliges tipos de ads por tendencia — y los teasers comen la marca?",
    text: "Elegimos el mix de canales por demanda y unit economics: SEO + paid search como marco, targeting y banners donde encajan.",
  },
  "kluchi-youtube": {
    title: "¿Los tags se ven perfectos — y la retención sigue matando el vídeo en búsqueda?",
    text: "Armamos un core de keywords que funcione para título y descripción, y luego medimos watch-through — no spam de tags contra gigantes.",
  },
  adblock: {
    title: "¿El sitio se ve roto — y Metrica/GA «muertas» con AdBlock encendido?",
    text: "Separamos efectos colaterales del blocker de fallos reales del contador y mantenemos analytics legibles cuando parte del tráfico es invisible.",
  },
  "nakrutka-zriteley-youtube": {
    title: "¿El concurrent se ve enorme — y el chat está vacío sin retornos?",
    text: "Crecemos audiencias en vivo con anuncios, schedule y retención — sin bots, tools de proxy ni espectadores falsos de marketplace.",
  },
  "veb-arhiv": {
    title: "¿Necesitas una versión vieja de página — y no hay backup de hosting?",
    text: "Usamos Wayback para historia y recuperación lícita de tu contenido — sin armar estrategia sobre copias ajenas archivadas.",
  },
  "vodyanoy-znak": {
    title: "¿Copian las fotos — y un logo gordo mata el frame y los shares?",
    text: "Colocamos una watermark cuidadosa o pasamos a previews y licencias — sin tratar una marca en la esquina como armadura legal.",
  },
  "yandeks-disk": {
    title: "¿Los archivos viven en USBs — y Disk es un dump compartido sin 2FA?",
    text: "Montamos estructura de carpetas, derechos de enlaces y sync — y dejamos Disk como complemento de backups del sitio, no como sustituto.",
  },
  "montazh-youtube": {
    title: "¿Se acumulan efectos — y los espectadores se van por mal audio y pausas muertas?",
    text: "Fijamos un pipeline simple y un editor a tu nivel — ritmo y sonido primero, no un catálogo de tools de 2020.",
  },
  "magnet-ssylka": {
    title: "¿Necesitas compartir un archivo grande por hash — sin confundir formato con piratería?",
    text: "Explicamos la estructura de la magnet URI y el uso lícito — con riesgos y derechos claros, sin guías de trackers piratas.",
  },
  "virtualnyy-nomer": {
    title: "¿Necesitas call tracking — y los números SMS públicos gratis parecen tentadores?",
    text: "Elegimos una línea virtual bajo contrato para ads y CRM — sin multi-cuenta gris ni códigos de bandeja compartida.",
  },
  "chrome-rasshireniya-marketing": {
    title: "¿El navegador lleno de «mejores 25» extensiones de 2020 — y la mitad muertas?",
    text: "Armamos un stack corto por tarea: screenshots, UTM, contraseñas, un tracker — solo desde la tienda oficial.",
  },
  canva: {
    title: "¿Necesitas posts cada semana — y cada plantilla grita otra marca?",
    text: "Fijamos un Brand Kit y un sistema de layouts repetible en Canva — y llamamos a un diseñador cuando la identidad se complica.",
  },
  pwa: {
    title: "¿Quieres un «atajo de app» — y esperas que la PWA sola suba rankings?",
    text: "Enviamos HTTPS, manifest y Service Worker donde las visitas repetidas lo pagan — después de Core Web Vitals, no en su lugar.",
  },
  logotip: {
    title: "¿Necesitas un logo — y solo tienes un PNG bonito que falla como favicon?",
    text: "Elegimos mark vs wordmark, fijamos archivos vectoriales y derechos, y encajamos el signo en la identidad — no un borrador Canva al azar.",
  },
  "google-otzyvy-klientov": {
    title: "¿Quieres estrellas de vendedor en Shopping — y las confundes con reviews de Maps?",
    text: "Conectamos Customer Reviews vía Merchant Center bien — con GTIN, opt-in en thank-you y sin ratings falsos.",
  },
  "ip-telefoniya": {
    title: "¿El call center crece — y sigues en una línea de mesa sin CRM?",
    text: "Elegimos telefonía IP para colas, grabación y CRM — tras un test de calidad de voz, no una promesa de «−15% para todos».",
  },
  "voronka-prodazh-gtm": {
    title: "¿Las compras son raras — y solo ves visitas, no dónde se rompe el checkout?",
    text: "Mapeamos pasos reales de checkout, enviamos eventos GA4 por un solo contenedor GTM y leemos drop-offs del Funnel antes de más píxeles.",
  },
  "retargeting-direkt": {
    title: "¿Vuelve tráfico cálido — y un ad de retargeting quema frecuencia sin control de CPA?",
    text: "Partimos el retargeting de Direct por segmentos de Metrika, excluimos compradores y optimizamos placements por tu economics — no mitos de CTR de 2019.",
  },
  "google-kalendar": {
    title: "¿Se acumulan reuniones — y un calendario mezcla clientes, deep work y lo personal?",
    text: "Montamos capas de calendario, horario laboral, Meet y sharing para que los invites dejen de comerse el día.",
  },
  "google-alerts": {
    title: "¿Aparecen menciones de marca — y aún las buscas a mano en search?",
    text: "Montamos un set estrecho de Google Alerts para marca y temas para que los digests sean útiles, no ruidosos.",
  },
  "cms-internet-magazina": {
    title: "¿Eliges CMS de tienda — y el pitch del «mejor motor» ignoró TCO y 1C?",
    text: "Mapeamos catálogo, integraciones y equipo, y acotamos Bitrix / Magento / OpenCart / Woo / CS-Cart sin mitos de precios de 2019.",
  },
  "facebook-ads": {
    title: "¿Testas ads Meta — y aún no hay píxel, solo esperanza de CTR?",
    text: "Montamos eventos, contornos frío/look-alike/retarget y creatividades para juzgar el test por CPA/ROI — no FOMO de reach de 2018.",
  },
  "novogodnyaya-rasprodazha": {
    title: "¿Rebaja de fiestas en ads — y Trends de EE. UU. del año pasado es tu único plan?",
    text: "Forecast desde tu temporada, separamos etapas de comprador y corremos una campaña fechada con una salida limpia post-fiestas.",
  },
  tilda: {
    title: "¿Landing en una semana — y empezaste por bloques bonitos antes que la oferta?",
    text: "Fijamos estructura y copy primero; luego armamos bloques Tilda, dominio y formularios sin mitos de «primera página el día de publicar».",
  },
  "strategii-google-ads": {
    title: "¿Smart Bidding encendido — y las metas están vacías o cambias de estrategia a diario?",
    text: "Encajamos la clase de estrategia con el KPI, verificamos conversiones y protegemos la ventana de learning — no folklore de nombres de botón de 2018.",
  },
  "adaptivnye-mediynye-obyavleniya": {
    title: "¿RDA en marcha — y un solo banner landscape aún se recorta en absurdo?",
    text: "Preparamos assets multi-ratio, logos y copy, y revisamos previews antes de escalar el gasto Display.",
  },
  "videoset-yandeksa": {
    title: "¿Red de vídeo encendida — y el plan aún cita el CPV medio de 2018?",
    text: "Encajamos formato y duración con el KPI, probamos 1–2 audiencias y juzgamos la contribución al embudo — no la tabla de VTR de otro.",
  },
  "kontent-marketing-metrika": {
    title: "¿Publicas cada semana — y Metrica solo dice «subieron las visitas tras un repost»?",
    text: "Definimos metas de contenido, leemos engagement y fuentes a lo largo de meses y editamos el plan por conversiones — no por picos de un día.",
  },
  "google-merchant-center": {
    title: "¿Quieres anuncios Shopping — y el feed aún desajusta precio y stock?",
    text: "Preparamos GMC, verificamos el sitio, limpiamos diagnósticos y enlazamos Google Ads para que Shopping arranque con datos de producto honestos.",
  },
  "mobile-first-indeks": {
    title: "¿Googlebot smartphone ve un móvil recortado — mientras desktop parece «completo»?",
    text: "Revisamos paridad de contenido, markup y Search Console para que el documento móvil sea en lo que el ranking debería confiar.",
  },
  "perenos-direkta-google-ads": {
    title: "¿Volcando Excel de Direct a Google Ads — y broad match quema el presupuesto?",
    text: "Mapeamos match types, negativos y geo, y revisamos Editor antes del lanzamiento para que el segundo canal no se convierta en una fuga.",
  },
  "yandeks-dialogi": {
    title: "¿Quieres un botón de chat en la búsqueda de Yandex — sin nadie que responda ni CRM?",
    text: "Verificamos el estado del producto, fijamos un SLA de operador y cableamos leads para que el canal ayude en vez de dañar la confianza.",
  },
  "interfeys-yandeks-direkt": {
    title: "¿Sigues optimizando Direct con screenshots de UI de 2018 y guías de «beta»?",
    text: "Montamos el cabinet actual alrededor de tablas, filtros e informes semanales de conversión — la lógica del rediseño que sigue funcionando.",
  },
  "metrika-posetiteli": {
    title: "¿Mirando solo las visitas de ayer — y perdiendo el camino multi-touch al lead?",
    text: "Usamos perfiles de visitantes, segmentos y fichas de primera fuente para que Metrica muestre el ciclo de vida, no solo el tráfico diario.",
  },
  "vzveshennyy-ctr-direkt": {
    title: "¿Coronando creativos por CTR crudo mientras las posiciones altas inflan la puntuación?",
    text: "Añadimos CTR ponderado junto a conversiones para comparar anuncios con justicia — y decidir por CPA, no solo por clics.",
  },
  "yandeks-market": {
    title: "¿Solicitando Yandex Market con un feed viejo y sin política de devoluciones?",
    text: "Alineamos sitio, YML y reglas de entrega para que la moderación sea por encaje — no un bucle de rechazos.",
  },
  "proksi-server": {
    title: "¿Eligiendo una «lista de proxies gratis» para logins — o mezclando reverse proxy con saltar bans?",
    text: "Separamos infraestructura (gateway / reverse / CDN) de trucos grises de IP y elegimos un provider en el que se pueda confiar de verdad.",
  },
  "modx-local": {
    title: "¿Instalando MODX desde un «pack de CMS» al azar — o dejando /setup en el host local?",
    text: "Usamos el paquete oficial, cableamos BD + virtual host, terminamos el setup y quitamos setup antes de montar plantillas.",
  },
  "bitrix-publichnyy-razdel": {
    title: "¿Cazando formularios de Bitrix en lo profundo de Administration — mientras el modo edición arreglaría el área include?",
    text: "Usamos la barra pública y el modo edición de áreas con los roles adecuados para que las actualizaciones de contenido no rompan el layout.",
  },
  "bitrix-svoystva-infoblokov": {
    title: "¿Pegando un snippet de propiedades Bitrix de 2017 — y la ficha sigue mostrando campos vacíos?",
    text: "Cableamos DISPLAY_PROPERTIES en una copia de plantilla, alineamos código y tipo de propiedad, y limpiamos caché para que las specs se rendericen de verdad.",
  },
  "bitrix-admin": {
    title: "¿No entras en Bitrix?",
    text: "Ordenamos `/bitrix/admin` y el reset de contraseña — sin confundirlo con la barra on-site.",
  },
  "bitrix-plyusy-minusy": {
    title: "¿Eligiendo Bitrix — o con dudas?",
    text: "Desglosamos pros, contras y TCO — sin rankings de 2017 ni el mito de «CMS = primera página».",
  },
  "yandeks-auditorii": {
    title: "¿Perdido en las audiencias de Direct?",
    text: "Ordenamos segmentos, Crypta y remarketing — sin el «+35% de conversión» de otros.",
  },
  "obzor-cms": {
    title: "¿Eligiendo un CMS para un sitio?",
    text: "Encajamos el trabajo y el TCO entre motores populares — sin un ranking eterno de «número uno».",
  },
  "obratnyy-zvonok": {
    title: "¿Necesitas un callback desde el sitio?",
    text: "Proponemos formulario o widget y medición en Metrica — sin popups agresivos.",
  },
  "skachat-stories-instagram": {
    title: "¿Guardando Stories?",
    text: "Cubrimos archivo y Highlights para las tuyas — sin un catálogo de downloaders dudosos.",
  },
  "idei-storis-vk": {
    title: "¿Necesitas ideas para Stories de VK?",
    text: "Armamos formatos de nicho — sin challenges vacíos «para miles de views».",
  },
  "aktivnost-vk": {
    title: "¿Revisando logins o el ER del grupo en VK?",
    text: "Separamos sesiones de seguridad de stats de comunidad — sin pánico por la IP.",
  },
  "ohvat-instagram": {
    title: "¿No sabes dónde se fue el alcance?",
    text: "Desglosamos alcance vs impresiones y crecimiento white-hat — sin bots ni garantías falsas.",
  },
  vzaimopiar: {
    title: "¿Negociando promo mutua?",
    text: "Ayudamos con formato y partners — sin exchanges grises de fake engagement.",
  },
  "otlozhennyy-posting-instagram": {
    title: "¿Necesitas una cola de posts en Instagram?",
    text: "Montamos el plan y los huecos — sin auto-posters grises ni robar contenido ajeno.",
  },
  "privetstvie-vk": {
    title: "¿El saludo de la comunidad VK se siente plano?",
    text: "Redactamos el primer paso para invitados — sin pop-ups spam ni promesas de que un widget solo hace crecer el grupo.",
  },
  "generator-nikov": {
    title: "¿Atascado eligiendo un username libre?",
    text: "Ayudamos a elegir un handle de marca legible — sin compras a resellers ni mitos de «libre en todas partes».",
  },
  "ohvat-podpischikov-vk": {
    title: "¿Alcance de followers atascado mientras la base es grande?",
    text: "Desglosamos la entrega a tu audiencia — sin likes falsos ni trucos de «compra 50k».",
  },
  "podpis-foto-instagram": {
    title: "¿Los captions bajo las fotos se sienten vacíos?",
    text: "Atamos el copy al frame y al tono — sin 30 hashtags al azar ni clichés de género.",
  },
  "spam-vk": {
    title: "¿Spam inundando los mensajes de VK?",
    text: "Ayudamos a cerrar privacy y recuperar el acceso — sin herramientas grises de bulk-mail «para crecer».",
  },
  "url-youtube": {
    title: "¿El enlace del canal sigue pareciendo un cifrado de ID?",
    text: "Dejamos un @handle legible y lo sincronizamos en todas partes — sin capturas obsoletas de Studio.",
  },
  "vovlechennost-instagram": {
    title: "¿El ER se ve bajo y el feed en silencio?",
    text: "Elegimos una fórmula y crecemos reacciones — sin likes falsos ni el mito del «3% obligatorio».",
  },
  "soobshhestva-vk": {
    title: "¿No sabes qué formato de comunidad VK elegir?",
    text: "Emparejamos público, grupo o evento con el objetivo — sin bots el día uno ni garantías de crecimiento.",
  },
  "keisy-facebook-ads": {
    title: "¿Los casos de Meta Ads impresionan pero no aclaran?",
    text: "Convertimos la mecánica en tu checklist — sin copiar el ROI de otro como promesa.",
  },
  "zakazchiki-kopiraytera": {
    title: "¿Buscas clientes de copywriting sin dumping?",
    text: "Afinamos portfolio y pitches — sin blasts de spam ni catálogos obsoletos de grupos freelance.",
  },
  "nayti-cheloveka-instagram": {
    title: "¿No encuentras a alguien en Instagram?",
    text: "Mapeamos username, búsqueda y contactos — sin servicios dudosos de «deanonymizer».",
  },
  "post-facebook": {
    title: "¿Publicar en Facebook se siente un lío?",
    text: "Elegimos la superficie y el formato — sin capturas obsoletas de botones ni boostear posts vacíos.",
  },
  "video-stories-instagram": {
    title: "¿El vídeo de Stories se ve suave tras subir?",
    text: "Preparamos 9:16 y un CTA claro — sin downloaders grises de Stories ajenas.",
  },
  "udalenie-akkaunta-instagram": {
    title: "¿Cierras Instagram y no sabes qué camino?",
    text: "Separamos pausa, pasar a personal y borrado completo — antes de confirmar algo irreversible.",
  },
  "geymifikatsiya-socseti": {
    title: "¿Quieres engagement sin cazadores de premios?",
    text: "Elegimos una mecánica nativa para tu audiencia — sin spam de «repost and win» ni bots grises.",
  },
  "arhiv-instagram": {
    title: "¿Necesitas ordenar la grid sin borrar?",
    text: "Mostramos archive vs delete vs archive de Stories — para que los posts valiosos sigan recuperables.",
  },
  "ssylka-stories-instagram": {
    title: "¿Sigues buscando el swipe-up en Stories?",
    text: "Configuramos el sticker Link y fallbacks — sin apps grises de «desbloqueo a 10k».",
  },
  "zarabotok-gruppy-vk": {
    title: "¿Quieres vender ads en tu grupo de VK?",
    text: "Armamos un media kit honesto y un precio — sin bots ni «100k garantizados por post».",
  },
  "neskolko-stories-instagram": {
    title: "¿La serie de Stories se siente un lío o a medias?",
    text: "Fijamos el orden de frames y un hook en el first screen — sin emuladores grises ni frames vacíos de spam.",
  },
  emodzi: {
    title: "¿Los emoji ayudan o solo ensucian la oferta?",
    text: "Ajustamos el tono a la audiencia — sin mitos de ranking ni spam de Title por un clic.",
  },
  "vovlechennost-socseti": {
    title: "¿Audiencia en silencio en las redes?",
    text: "Crecemos el diálogo con palancas blancas — sin likes falsos ni un culto al «ER normal».",
  },
  "sekretnyy-chat-telegram": {
    title: "¿Necesitas un chat secreto de Telegram sin mitos?",
    text: "Separamos el modo E2E de los chats cloud — sin ilusiones de «escudo absoluto».",
  },
  pinterest: {
    title: "¿No sabes si Pinterest encaja en el funnel?",
    text: "Montamos boards y enlaces de pins para tráfico — sin imágenes robadas ni mitos de «pin bonito = ventas».",
  },
  "vtoroy-akkaunt-instagram": {
    title: "¿Necesitas un segundo Instagram sin mezclar feeds?",
    text: "Separamos roles personal y marca — sin multi-clients grises ni páginas extra vacías.",
  },
  "prosmotry-stories-instagram": {
    title: "¿Las views de Stories atascadas pese a una base grande?",
    text: "Arreglamos el primer frame y el diálogo — sin comprar views ni «diez stories al día» vacías.",
  },
  "promo-instagram": {
    title: "¿Confundes Promote con un descuento de tienda?",
    text: "Montamos un boost de test con un objetivo — tras una oferta clara, no en lugar de Ads Manager.",
  },
  "zakrytyy-akkaunt-instagram": {
    title: "¿Cuenta privada vs borrar — mezclado?",
    text: "Mapeamos settings de privacy para perfiles personal o marca — sin «hacks» falsos.",
  },
  "prosmotr-zakrytogo-akkaunta": {
    title: "¿Necesitas contenido de un perfil privado?",
    text: "Planificamos un camino de request y diálogo — sin viewers dudosos ni cuentas falsas.",
  },
  "sohranenie-efira-instagram": {
    title: "¿Terminó el Live y desapareció la grabación?",
    text: "Montamos un flujo de guardar y reutilizar — sin herramientas dudosas de «download any Live».",
  },
  "muzyka-stories-instagram": {
    title: "¿Falta el sticker de música o no están claros los derechos?",
    text: "Elegimos un camino legal de sonido para Stories — sticker o editor, sin phishing de contraseña.",
  },
  "rekomendatsii-tiktok": {
    title: "¿For You no crece más allá de un pool de test diminuto?",
    text: "Afinamos el hook y el watch-through — sin likes falsos ni listas de hashtags de 2020.",
  },
  "nazvanie-auditorii-instagram": {
    title: "¿Saved audiences un lío de nombres-slogan?",
    text: "Fijamos una plantilla de naming para segmentos — geo, fuente, objetivo — legible un mes después.",
  },
  "nastroika-reklamy-instagram": {
    title: "¿Promote no basta para un sistema completo de campaña?",
    text: "Cableamos Meta Ads con placements de Instagram, un objetivo y un presupuesto de test claro.",
  },
  "reklama-tiktok": {
    title: "¿Listo para testear TikTok Ads sin mitos de presupuesto de 2020?",
    text: "Montamos un creativo vertical, un objetivo y límites desde Ads Manager — no desde artículos viejos.",
  },
  "baza-email-socseti": {
    title: "¿Los followers crecen pero la lista de email sigue vacía?",
    text: "Montamos un landing de subscribe con consentimiento y UTM en todas las redes — sin scraping.",
  },
  "verifikatsiya-instagram": {
    title: "¿Persigues el check azul por reach — o por protección del nombre?",
    text: "Mapeamos verificación oficial vs Meta Verified — sin intermediarios que vendan «badges llave en mano».",
  },
  "naym-smm": {
    title: "¿Contratas SMM por capturas bonitas?",
    text: "Montamos una prueba de audit corta y KPIs ligados a leads — sin garantías de primera página ni entrega de contraseñas.",
  },
  "vremya-posta-instagram": {
    title: "¿Sigues publicando con una tabla de «mejor hora» de 2019?",
    text: "Elegimos huecos con tus insights y un test de dos semanas — primero el contenido, después el timing.",
  },
  "inflyuenser-marketing": {
    title: "¿Pagas a creadores porque «todo el mundo hace influencers»?",
    text: "Armamos shortlist de micros del nicho con ER vivo y un test con código promo — antes de escalar el gasto.",
  },
  "vidy-kontenta-socseti": {
    title: "¿Feed atrapado entre ventas sin fin y memes vacíos?",
    text: "Mapeamos cinco tipos de contenido en un mix de dos semanas — adaptado por plataforma, medido por replies.",
  },
  "triggernye-rassylki": {
    title: "¿Sigues mandando el mismo digest mientras los carritos se enfrían?",
    text: "Montamos triggers de welcome y carrito abandonado con consentimiento — antes de diez cadenas complejas.",
  },
  "chat-bot-vk": {
    title: "¿Comunidad VK ahogada en el mismo FAQ cada día?",
    text: "Scriptamos un bot de FAQ + leads con salida a operador — sin blasts de spam.",
  },
  "idei-stories-instagram": {
    title: "¿Las Stories se sienten vacías sin plantillas de pago?",
    text: "Armamos un mix semanal — intro, FAQ, encuestas, CTA suave — medido por replies, no por frames bonitos.",
  },
  "heshtegi-instagram": {
    title: "¿Sigues metiendo 30 hashtags por una promesa de «descubrimiento»?",
    text: "Elegimos un mix corto de nicho más geo donde ayuda — y revisamos Insights en dos semanas.",
  },
  "smm-strategiya": {
    title: "¿Actividad en redes sin objetivo de negocio?",
    text: "Fijamos un objetivo mensual, tres tareas con owner y un corte a las dos semanas de lo que no mueve la métrica.",
  },
  "teksty-uzkaya-tematika": {
    title: "¿Copy de nicho que suena genérico — o desactualizado en los hechos?",
    text: "Reescribimos para principiantes con fuentes fechadas y expertise real — sin «experiencia personal» inventada.",
  },
  "video-obzor-tovara": {
    title: "¿Fichas solo con fotos — y las devoluciones no paran?",
    text: "Guionamos reviews cortos para los SKUs más vendidos y los colocamos junto a añadir al carrito — medido por conversión, no por «cine».",
  },
  "zashchita-kontenta": {
    title: "¿Copias de tus artículos aparecen en otros dominios?",
    text: "Montamos monitoreo, prueba de publicación y un playbook de retirada — no solo desactivar el clic derecho.",
  },
  "matritsa-kontenta": {
    title: "¿Calendario de publicación lleno — y huecos del journey aún vacíos?",
    text: "Mapeamos persona × etapa × objetivo × canal y cerramos los huecos antes de las fechas del mes siguiente.",
  },
  "videokontent": {
    title: "¿Necesitas vídeo pero no sabes qué formato ayuda de verdad?",
    text: "Elegimos un trabajo del funnel, guionamos un clip corto con CTA y decidimos in-house vs vendor según el resultado.",
  },
  "bystree-pisat-stati": {
    title: "¿Los artículos tardan una eternidad — y la calidad sigue cayendo?",
    text: "Fijamos brief, outline de H2 y un ritmo borrador-luego-edición para subir el ritmo sin más rework.",
  },
  "longrid": {
    title: "¿Necesitas profundidad que la gente termine de verdad — no un muro de texto?",
    text: "Damos forma a una historia investigada con estructura, layout y un CTA que no rompe la lectura.",
  },
  "struktura-stati": {
    title: "¿Artículos que se escanean mal — o H2s solo por «SEO»?",
    text: "Reconstruimos el outline alrededor de las preguntas del lector para que los headings encajen con los bloques — no keyword stuffing.",
  },
  "stranitsa-kontaktov": {
    title: "¿Contactos enterrados en el header — o NAP desincronizado?",
    text: "Limpiamos una página de Contactos dedicada: alcance clicable, horarios, mapa y NAP alineado en todo el sitio.",
  },
  "prizyv-k-deystviyu": {
    title: "¿Página fuerte — pero la petición es vaga o agresiva?",
    text: "Escribimos un CTA primario con un beneficio real, lo colocamos en el momento de decisión y medimos clics.",
  },
  "idei-kontent-prodvizheniya": {
    title: "¿Necesitas temas de blog que encajen con demanda real — no con trends?",
    text: "Convertimos preguntas de clientes en how-tos, guías y reviews honestos atados a tu matriz de contenido.",
  },
  "temy-dlya-statey": {
    title: "¿Página en blanco cada semana — y los temas de la nada?",
    text: "Cosechamos preguntas de clientes y demanda de búsqueda en un backlog con intent — sin copy-paste de competidores.",
  },
  "kontentnoe-prodvizhenie": {
    title: "¿Publicas mucho — y aún flojo en utilidad e intent?",
    text: "Apretamos landings y una cadencia de contenido: hechos, keywords naturales, updates — sin culto al % de unicidad.",
  },
  "kontent-b2b": {
    title: "¿Páginas B2B llenas de eslóganes — y flojas de prueba?",
    text: "Sumamos reviews reales, un caso medible y un path de contacto que responde en horario laboral.",
  },
  "kartinki-seo": {
    title: "¿Banners de stock frenan la página — y el alt lleno de keywords?",
    text: "Cambiamos a visuals propios/IA, comprimimos para CWV y fijamos alt, captions y og:image alineados a la oferta.",
  },
  "klyuchi-yandeks-direkt": {
    title: "¿La lista de keywords de Direct crece — y aún sin objetivo ni KPI claros?",
    text: "Dimensionamos sets de Búsqueda vs YAN a un landing y CPA/ROAS — no un conteo mágico de frases.",
  },
  "mediaplan": {
    title: "¿Ads en cinco plataformas — y sin tabla compartida de objetivos?",
    text: "Armamos un media plan ligero: 1–2 canales de test, presupuesto, KPI y fecha de review antes de escalar.",
  },
  "zabluzhdeniya-konteksta": {
    title: "¿Brief de PPC lleno de mitos de «posición 1 o nada»?",
    text: "Fijamos KPI y CPA, soltamos estereotipos dañinos y escalamos solo tras un test estable — no sueños de presupuesto lineal.",
  },
  "moderatsiya-facebook-ads": {
    title: "¿Ads de Meta rechazados — o aprobados con delivery cero?",
    text: "Corregimos hits de policy en la creatividad y luego chequeamos puja y overlap de audiencia antes de gastar otro appeal.",
  },
  "target-vk": {
    title: "¿Test de VK Ads repartido en todos los intereses y formatos?",
    text: "Fijamos un formato, una audiencia estrecha, pixel si hace falta y un tope diario — expandimos solo cuando el CPA aguanta.",
  },
  "tipy-kampaniy-google-ads": {
    title: "¿Encendiendo todos los tipos de Google Ads a la vez?",
    text: "Elegimos 1–2 tipos de campaña por rol en el funnel, separamos marca del core y testeamos antes de repartir el gasto.",
  },
  "analiz-konkurentov-kontekst": {
    title: "¿Lanzar búsqueda de pago sin saber quién está en la subasta?",
    text: "Mapeamos 3–7 competidores de pago: keywords, anuncios, landings y huecos de USP — y dimensionamos el test con tu CPA.",
  },
  "moderatsiya-meditsina": {
    title: "¿Anuncios de salud rechazados — y el sitio sigue con claims de bandera roja?",
    text: "Alineamos licencias, copy neutro y Search vs redes antes de gastar en otro ciclo de reenvío.",
  },
  "podryadchik-kontekst": {
    title: "¿Muchos clics de la agencia — y aún sin una historia clara de CPA?",
    text: "Fijamos acceso, definición de lead e informe mensual de hipótesis para que controles resultados — no capturas bonitas.",
  },
  "oshibki-nastroyki-konteksta": {
    title: "¿Escalando presupuesto — y Search y redes siguen en el mismo lío?",
    text: "Cerramos primero extensiones, geo, landing y objetivos para que no discutas «más keywords» sobre un setup roto.",
  },
  "bidder": {
    title: "¿Auto-pujas 24/7 — y aún sin control de CPA?",
    text: "Decidimos si un bidder supera las estrategias nativas, fijamos límites y derechos API, y comparamos KPI before/after en un test duro.",
  },
  "klassifikatsiya-zaprosov": {
    title: "¿Persiguiendo keywords de alta frecuencia — sin etiquetar intent?",
    text: "Marcamos info vs comercial vs navegacional en tu núcleo para que cada cluster tenga la página correcta — no una URL fina para todo.",
  },
  "rasshirenie-tseny-google": {
    title: "¿Anuncios sin precio — mientras los competidores lo muestran en el SERP?",
    text: "Sincronizamos precios honestos con la landing, elegimos el tipo correcto de extensión de precio y testeamos CTR/CPA antes de escalar.",
  },
  "brif-kontekst": {
    title: "¿Lanzar anuncios — con «crecer ventas» como único KPI?",
    text: "Fijamos objetivo, presupuesto de test, geo, USP y definición de lead en una página para que los informes no se conviertan en echar culpas.",
  },
  "malo-pokazov": {
    title: "¿«Pocas impresiones» en la mitad de los grupos — borrando todo el long tail?",
    text: "Exportamos el estado, fusionamos keywords LF relacionadas y limpiamos negativos de más para que la demanda vuelva a acumularse.",
  },
  "formaty-izobrazheniy-rsya": {
    title: "¿Una creatividad cuadrada para cada hueco de YAN?",
    text: "Encajamos la Help de tamaños actual, añadimos los ratios que faltan a la campaña de redes activa y etiquetamos formatos para que el alcance no muera.",
  },
  "auktsion-direkt": {
    title: "¿Subiendo pujas otra vez — mientras anuncio y landing siguen perdiendo en calidad?",
    text: "Arreglamos primero negativos, creatividades y la matemática de CPA para que compitas en la subasta sin un «prop» de guerra de precios.",
  },
  "vybor-domena": {
    title: "¿Eligiendo un dominio que dictarás años — y aún adivinando la ortografía?",
    text: "Revisamos zona, unicidad, claridad al dictarlo e historial para que el nombre ayude al marketing en lugar de confundir a los clientes.",
  },
  "instrumenty-marketologa": {
    title: "¿Diez herramientas freemium — y aún sin un stack claro para tus KPI?",
    text: "Elegimos un set mínimo: analítica, ESP, research, encuestas, tareas — piloto de límites gratis antes de pagar para ampliar.",
  },
  "email-strategiya": {
    title: "¿Enviando plantillas bonitas — sin un mapa de objetivos y segmentos?",
    text: "Auditamos la lista, fijamos oferta y segmentos, y pilotoamos un welcome más triggers antes de escalar la frecuencia.",
  },
  "tekst-email-rassylki": {
    title: "¿Diseño pulido — pero el email sigue sin un siguiente paso claro?",
    text: "Fijamos un objetivo, el lenguaje de la audiencia y un checklist previo al envío para que el copy persuada en lugar de llenar la bandeja.",
  },
  "email-dlya-biznesa": {
    title: "¿No sabes si el email encaja con tu servicio, producto o ciclo B2B?",
    text: "Mapeamos toques repetidos, opt-in y personas para que no lances un blast donde el canal no puede ayudar.",
  },
  "verstka-email": {
    title: "¿Se ve perfecto en Chrome — y roto en Outlook y en móvil?",
    text: "Rehacemos un marco de tablas, CSS crítico inline y pruebas en clientes para que el envío no sea una lotería de layout.",
  },
  "oformlenie-email": {
    title: "¿Email bonito — pero la oferta y el CTA siguen perdiéndose?",
    text: "Arreglamos jerarquía, estilo de serie y oferta above-the-fold para que el diseño ayude al CTR en lugar de pelear con la bandeja.",
  },
  "push-uvedomleniya": {
    title: "¿Push cada hora — y los suscriptores pulsan Block?",
    text: "Fijamos el momento del permiso, copy corto y límites de frecuencia para que el push empuje en lugar de molestar.",
  },
  "uderzhanie-podpischikov": {
    title: "¿Suben las bajas — y la lista se siente muerta?",
    text: "Arreglamos calidad del toque, frecuencia y una página de opt-out honesta para que la base se quede más pequeña pero más fuerte.",
  },
  "otzyv-2gis": {
    title: "¿Reseña negativa en 2GIS — y «borrarlo todo» no funciona?",
    text: "Mapeamos respuesta, diálogo con el autor y reportes basados en reglas para que no cargues el listing en pánico.",
  },
  "geotargeting-direkt": {
    title: "¿Geo de Direct demasiado amplio — presupuesto filtrándose a otras ciudades?",
    text: "Ajustamos regiones de search vs redes y el geotargeting avanzado para que pagues por gente a la que realmente puedes servir.",
  },
  "chat-telegram": {
    title: "¿Necesitas un grupo de Telegram — sin convertirlo en caos de spam?",
    text: "Fijamos privacidad, derechos de admin y reglas fijadas para que el chat sirva al equipo o a los clientes, no al ruido.",
  },
};

const articleCtaEsFallback = {
  title: "¿Hablamos de tu proyecto?",
  text: "Cuéntanos la tarea — te decimos qué tiene sentido hacer primero.",
};

export function getArticleCtaLocale(
  post: BlogPost,
  locale: Locale,
  fallback: { title: string; text: string },
): { title: string; text: string } {
  if (locale === "en") return articleCtaEn[post.slug] ?? fallback;
  if (locale === "es") return articleCtaEs[post.slug] ?? articleCtaEsFallback;
  return fallback;
}

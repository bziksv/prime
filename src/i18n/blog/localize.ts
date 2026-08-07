import type { BlogPost } from "../../data/blog";
import type { BlogInteractConfig } from "../../data/blog-interact";
import type { Locale } from "../locales";
import { localePathPrefix } from "../locales";
import { blogInteractEn } from "./en-interact";
import { blogTranslationsEn } from "./en-posts";
import { isEnBlogSlug } from "./slugs";

export { EN_BLOG_SLUGS, isEnBlogSlug } from "./slugs";

export function isBlogTranslated(slug: string, locale: Locale): boolean {
  if (locale === "ru") return true;
  if (locale === "en") return isEnBlogSlug(slug);
  return false;
}

/** Full EN post replaces RU base (cover points at cover-en.webp). */
export function localizeBlogPost(post: BlogPost, locale: Locale): BlogPost {
  if (locale === "ru" || !isBlogTranslated(post.slug, locale)) return post;
  if (locale === "en") {
    return blogTranslationsEn[post.slug] ?? post;
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
  return locale === "en" ? uiEn : uiRu;
}

export function formatReadingTimeLocale(minutes: number, locale: Locale): string {
  const n = Math.max(1, minutes);
  if (locale === "en") return `${n} min read`;
  return `${n} мин чтения`;
}

export function formatViewsLocale(n: number, locale: Locale): string {
  if (locale === "en") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".0", "")}M`;
    if (n >= 10_000) return `${Math.round(n / 1000)}k`;
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
    return new Intl.NumberFormat("en-US").format(n);
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
};

export function getArticleCtaLocale(
  post: BlogPost,
  locale: Locale,
  fallback: { title: string; text: string },
): { title: string; text: string } {
  if (locale === "en") return articleCtaEn[post.slug] ?? fallback;
  return fallback;
}

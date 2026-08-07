import type { Locale } from "./locales";
import {
  seoAdvantages,
  seoDemoRanks,
  seoFaq,
  seoNos,
  seoOutcomes,
  seoPillars,
  seoPlainSpeak,
  seoRegions,
  seoSteps,
  seoTariffs,
  type SeoRegion,
  type SeoTariff,
} from "../data/seo-service";

export type SeoChapter = { id: string; label: string };
export type SeoMarqueeItem = { t: string; e: string };

export type SeoContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceType: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  menuLabel: string;
  ctaTop: string;
  brandBefore: string;
  brandAccent: string;
  kicker: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroScroll: string;
  rankAria: string;
  rankLive: string;
  rankProto: string;
  rankInLabel: string;
  rankBillLabel: string;
  rankBillEmpty: string;
  rankNote: string;
  rankNoteDone: string;
  phrasesWord: string;
  currency: string;
  numberLocale: string;
  marquee: SeoMarqueeItem[];
  chapters: SeoChapter[];
  modelTitle: string;
  modelLead: string;
  modelMetrics: { value: string; label: string }[];
  aboutTitle: string;
  aboutLead: string;
  aboutCopy: string[];
  workTitle: string;
  workLead: string;
  pillarsAria: string;
  pillars: {
    id: string;
    title: string;
    lead: string;
    items: string[];
  }[];
  resultTitle: string;
  resultLead: string;
  outcomes: { title: string; text: string }[];
  startTitle: string;
  startLead: string;
  steps: { n: string; title: string; text: string }[];
  pricingTitle: string;
  pricingLead: string;
  priceNote: string;
  regionsAria: string;
  regions: { id: SeoRegion; label: string }[];
  tariffs: SeoTariff[];
  tariffFeatured: string;
  tariffPhrasesSuffix: string;
  tariffPeriod: string;
  tariffBackup: string;
  tariffContent: string;
  tariffTech: string;
  tariffAds: string;
  tariffCta: string;
  plainSpeak: { jargon: string; plain: string }[];
  advantagesTitle: string;
  advantagesLead: string;
  advantages: { title: string; text: string }[];
  showCases: boolean;
  casesTitle: string;
  casesLead: string;
  casesAll: string;
  honestTitle: string;
  honestLead: string;
  nos: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formSite: string;
  formRegion: string;
  formRegionOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
  demoRanks: { q: string; from: number; to: number }[];
};

const seoRu: SeoContent = {
  path: "/prodvizhenie-sayta/",
  metaTitle: "Продвижение сайта — ПРАЙМ",
  metaDescription:
    "SEO-продвижение сайта с оплатой по факту ТОП-10. Аналитика, аудит, внутренняя и внешняя оптимизация. Подготовка ~1 мес., выход в ТОП планово 2–6 мес. Тарифы для регионов, Москвы и СПб.",
  serviceName: "Продвижение сайта",
  serviceType: "SEO-продвижение сайта",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Продвижение сайта",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  kicker: "Pay per TOP-10 · без абонентской «воды»",
  heroTitleBefore: "Продвижение сайта с оплатой ",
  heroTitleAccent: "по факту ТОП-10",
  heroLead:
    "Выводим в первую десятку по ключевым запросам. Платите за фразы, которые реально закрепились в выдаче.",
  heroCtaPrimary: "Получить расчёт",
  heroCtaSecondary: "Смотреть тарифы",
  heroScroll: "Листать",
  rankAria: "Демо оплаты по факту ТОП-10",
  rankLive: "live ranks",
  rankProto: "PRIME · SERP",
  rankInLabel: "in TOP-10",
  rankBillLabel: "billable",
  rankBillEmpty: "0 фраз",
  rankNote: "Вне ТОП-10 = 0 ₽ · платите только за закреплённые фразы",
  rankNoteDone: "{n} фраз в ТОП-10 · остальное вне счёта",
  phrasesWord: "фраз",
  currency: "₽",
  numberLocale: "ru-RU",
  marquee: [
    { t: "ТОП-10", e: "по факту" },
    { t: "Яндекс", e: "Google" },
    { t: "Семантика", e: "без мусора" },
    { t: "Аудит", e: "до старта" },
    { t: "Отчёты", e: "прозрачно" },
    { t: "С 2015", e: "на рынке" },
  ],
  chapters: [
    { id: "about", label: "Суть" },
    { id: "work", label: "Работа" },
    { id: "result", label: "Результат" },
    { id: "start", label: "Старт" },
    { id: "pricing", label: "Тарифы" },
    { id: "advantages", label: "Плюсы" },
    { id: "cases", label: "Кейсы" },
    { id: "faq", label: "FAQ" },
    { id: "seo-cta", label: "Заявка" },
  ],
  modelTitle: "Не танцы с бубном — проектная работа",
  modelLead:
    "SEO — часть интернет-маркетинга: при соблюдении технологии вы получаете рост позиций, трафика и продаж. Чем больше сайт — тем сложнее работа. Ниже — что именно делаем.",
  modelMetrics: [
    { value: "ТОП-10", label: "оплата по факту фраз" },
    { value: "4 мес.", label: "стартовый период тарифа" },
    { value: "с 2015", label: "модель на практике" },
  ],
  aboutTitle: "Что это и зачем вам",
  aboutLead:
    "Комплекс внутренней и внешней оптимизации для вывода в ТОП-10 — больше посещений, заявок и звонков. Для максимального охвата рекомендуем связку с контекстной рекламой.",
  aboutCopy: [
    "Многие думают, что SEO — шаманство: платишь, специалист «что-то крутит», и сайт то выходит в ТОП, то нет. На деле это технология: аудит, семантика, правки на сайте, внешняя работа и постоянный контроль позиций.",
    "Мы не предлагаем продвижение по запросам, которые никто не ищет. В ядро попадают фразы с реальным спросом — те, что приводят клиентов, а не красивые цифры в отчёте.",
  ],
  workTitle: "Из чего состоит работа",
  workLead: "Четыре блока — от целей и аудита до внутренней и внешней оптимизации.",
  pillarsAria: "Этапы SEO",
  pillars: seoPillars.map((p) => ({
    id: p.id,
    title: p.title,
    lead: p.lead,
    items: [...p.items],
  })),
  resultTitle: "В результате от SEO вы получите",
  resultLead: "Три понятных эффекта — не «видимость ради видимости».",
  outcomes: seoOutcomes.map((o) => ({ title: o.title, text: o.text })),
  startTitle: "С чего начать",
  startLead: "Четыре шага — от заявки до коммерческого предложения.",
  steps: seoSteps.map((s) => ({ n: s.n, title: s.title, text: s.text })),
  pricingTitle: "Стоимость",
  pricingLead:
    "Расчёт индивидуальный: ниша и конкуренция в регионе. Частный сад в Воронеже и металлопрокат — разные бюджеты. Ниже — стартовые ориентиры.",
  priceNote:
    "* Первые 4 месяца по тарифу. Далее — оплата по факту нахождения фраз в ТОП-10.",
  regionsAria: "Регион тарифа",
  regions: seoRegions.map((r) => ({ id: r.id, label: r.label })),
  tariffs: seoTariffs.map((t) => ({
    ...t,
    features: t.features.map((f) => ({ ...f })),
    prices: { ...t.prices },
  })),
  tariffFeatured: "Частый выбор",
  tariffPhrasesSuffix: "фраз",
  tariffPeriod: "в месяц · стартовые 4 месяца",
  tariffBackup: "Бекап",
  tariffContent: "Контент",
  tariffTech: "Техподдержка",
  tariffAds: "Контекст",
  tariffCta: "Запросить тариф",
  plainSpeak: seoPlainSpeak.map((p) => ({ jargon: p.jargon, plain: p.plain })),
  advantagesTitle: "Наши преимущества",
  advantagesLead:
    "Цель — максимальная отдача от бюджета. Опыт в разных нишах помогает получать результат при разумных вложениях.",
  advantages: seoAdvantages.map((a) => ({ title: a.title, text: a.text })),
  showCases: true,
  casesTitle: "Кейсы по SEO",
  casesLead: "Реальные проекты с оплатой по позициям и понятными цифрами.",
  casesAll: "Все SEO-кейсы",
  honestTitle: "Чего не обещаем",
  honestLead: "Чтобы «запуск» не читался как гарантия ТОП-10 через месяц.",
  nos: seoNos.map((n) => ({ title: n.title, text: n.text })),
  faqTitle: "Частые вопросы",
  faqLead: "Оплата по факту, сроки ТОП, отличие от трафика и тарифы.",
  faq: seoFaq.map((f) => ({ q: f.q, a: f.a })),
  ctaTitle: "Нужны клиенты из поиска?",
  ctaLead:
    "Есть сайт — и нужны заявки. Оставьте контакты: разберём нишу, скажем, что реально продвигать, и пришлём расчёт.",
  ctaPoints: [
    "Разбор ниши и конкуренции в вашем регионе",
    "Подготовка ~1 мес. · ТОП планово 2–6 мес.",
    "Расчёт тарифа — без скрытых «пакетов»",
    "Оплата по факту позиций, не «за процесс»",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formRegion: "Регион продвижения",
  formRegionOptions: [
    "Регионы РФ",
    "Москва и Московская область",
    "Санкт-Петербург и Ленинградская область",
  ],
  formMessage: "Ниша и задача — коротко",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на продвижение принята — свяжемся с вами.",
  formSource: "prodvizhenie-sayta",
  footerBrand: "ПРАЙМ",
  footerTagline: "Продвижение сайта · оплата по факту ТОП-10",
  demoRanks: seoDemoRanks.map((r) => ({ q: r.q, from: r.from, to: r.to })),
};

const featureLabelsEn = [
  "Technical fixes from an SEO specialist",
  "Publishing optimized copy",
  "Conversion recommendations",
  "Responsive layout if missing",
  "Uptime monitoring",
  "Domain renewal when due",
  "On-page optimization",
  "Off-page optimization",
] as const;

function enTariff(
  base: (typeof seoTariffs)[number],
  prices: Record<SeoRegion, number>,
  ads: string,
): SeoTariff {
  return {
    ...base,
    ads,
    backup: base.backup.includes("2") ? "Every 2 months" : "Monthly",
    contentHours: base.contentHours.replace("ч", "h"),
    techHours: base.techHours.replace("ч", "h"),
    features: base.features.map((f, i) => ({
      label: featureLabelsEn[i] ?? f.label,
      ok: f.ok,
    })),
    prices,
  };
}

const seoEn: SeoContent = {
  path: "/en/seo/",
  metaTitle: "Website SEO — PRIME",
  metaDescription:
    "Performance SEO with pay-for-TOP-10 pricing. Audit, keyword research, on-page and off-page work. Prep ~1 month; TOP-10 growth planned over 2–6 months. Packages for local and competitive markets worldwide.",
  serviceName: "Website SEO",
  serviceType: "Performance SEO",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Website SEO",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  kicker: "Pay per TOP-10 · no retainer fluff",
  heroTitleBefore: "Website SEO paid ",
  heroTitleAccent: "for TOP-10 results",
  heroLead:
    "We grow Google TOP-10 visibility for the keywords that matter. You pay for phrases that actually stick in the SERP.",
  heroCtaPrimary: "Get a quote",
  heroCtaSecondary: "See packages",
  heroScroll: "Scroll",
  rankAria: "Pay-for-TOP-10 demo",
  rankLive: "live ranks",
  rankProto: "PRIME · SERP",
  rankInLabel: "in TOP-10",
  rankBillLabel: "billable",
  rankBillEmpty: "0 phrases",
  rankNote: "Outside TOP-10 = $0 · you pay only for locked-in phrases",
  rankNoteDone: "{n} phrases in TOP-10 · the rest stay off the bill",
  phrasesWord: "phrases",
  currency: "$",
  numberLocale: "en-US",
  marquee: [
    { t: "TOP-10", e: "pay for results" },
    { t: "Google", e: "Search first" },
    { t: "Keywords", e: "no junk" },
    { t: "Audit", e: "before kickoff" },
    { t: "Reports", e: "transparent" },
    { t: "Since 2015", e: "in market" },
  ],
  chapters: [
    { id: "about", label: "Idea" },
    { id: "work", label: "Work" },
    { id: "result", label: "Results" },
    { id: "start", label: "Start" },
    { id: "pricing", label: "Pricing" },
    { id: "advantages", label: "Pros" },
    { id: "faq", label: "FAQ" },
    { id: "seo-cta", label: "Request" },
  ],
  modelTitle: "Not guesswork — project delivery",
  modelLead:
    "SEO is a piece of digital marketing: with a clear process you get better rankings, traffic and sales. Larger sites need deeper work. Here’s exactly what we do.",
  modelMetrics: [
    { value: "TOP-10", label: "pay for ranked phrases" },
    { value: "4 mo.", label: "starter package period" },
    { value: "since 2015", label: "model in practice" },
  ],
  aboutTitle: "What it is and why it matters",
  aboutLead:
    "On-page and off-page work aimed at TOP-10 — more visits, leads and calls. For broader reach we often pair SEO with Google Ads.",
  aboutCopy: [
    "Many treat SEO as magic: you pay, someone “tweaks things,” and rankings come and go. In practice it’s a method: audit, keyword research, on-site fixes, authority work and ongoing rank tracking.",
    "We don’t push keywords nobody searches. The core is demand that brings customers — not vanity phrases for a pretty report.",
  ],
  workTitle: "What the work includes",
  workLead: "Four blocks — from goals and audit to on-page and off-page optimization.",
  pillarsAria: "SEO stages",
  pillars: [
    {
      id: "analytics",
      title: "Analytics",
      lead: "Goals, competitors, budget and keyword core — before the first on-site edit.",
      items: [
        "Define goals and what drives them",
        "Competitor analysis: links, queries, traffic",
        "Campaign budget estimate",
        "Keyword research with demand and competition scoring",
        "Google ranking analysis for your niche",
      ],
    },
    {
      id: "audit",
      title: "Audit",
      lead: "First we find what blocks rankings — then we run promotion.",
      items: [
        "SEO review of on-page and off-page factors",
        "Technical audit: indexing and speed issues",
        "Usability review — friction for potential buyers",
      ],
    },
    {
      id: "internal",
      title: "On-page optimization",
      lead: "Pages, copy, code and analytics — so Google and people read the site the same way.",
      items: [
        "Keyword clustering and entry points",
        "Content optimized for target queries",
        "Internal linking across relevant pages",
        "Code and speed improvements",
        "robots.txt, responsive layout, Google Analytics",
      ],
    },
    {
      id: "external",
      title: "Off-page optimization",
      lead: "Careful authority growth: links, articles, directories and maps.",
      items: [
        "Competitor backlink profile audit",
        "Natural link-building strategy",
        "Publications on topical sites",
        "Directory registrations",
        "Google Business Profile",
      ],
    },
  ],
  resultTitle: "What you get from SEO",
  resultLead: "Three clear outcomes — not “visibility for visibility’s sake.”",
  outcomes: [
    {
      title: "More sales",
      text: "A site in TOP-10 meaningfully increases potential buyers from search.",
    },
    {
      title: "Traffic growth",
      text: "Brand awareness plus new customers who were already looking for what you sell.",
    },
    {
      title: "Audience focus",
      text: "You get interested visitors — not random traffic for a vanity report.",
    },
  ],
  startTitle: "How we start",
  startLead: "Four steps — from request to a commercial proposal.",
  steps: [
    {
      n: "01",
      title: "Request",
      text: "Submit the form — we start with a conversation about the goal.",
    },
    {
      n: "02",
      title: "Site and demand review",
      text: "We check technical readiness and search demand. Not everything should be promoted — we’ll say so plainly.",
    },
    {
      n: "03",
      title: "Priorities and scope",
      text: "We set goals, directions and the order of work.",
    },
    {
      n: "04",
      title: "Proposal",
      text: "We lock actions that solve your needs — with clear economics.",
    },
  ],
  pricingTitle: "Pricing",
  pricingLead:
    "Quotes are individual: niche and competition in your market. A local service business and industrial B2B need different budgets. Below — starting package ranges.",
  priceNote:
    "* First 4 months on the package rate. After that — pay for days phrases stay in TOP-10.",
  regionsAria: "Market tier",
  regions: [
    { id: "region", label: "Local markets" },
    { id: "msk", label: "High-competition metros" },
    { id: "spb", label: "Mid-tier metros" },
  ],
  tariffs: [
    enTariff(seoTariffs[0], { region: 160, msk: 280, spb: 220 }, "Per ads package"),
    enTariff(seoTariffs[1], { region: 210, msk: 390, spb: 330 }, "Per ads package"),
    enTariff(seoTariffs[2], { region: 280, msk: 500, spb: 450 }, "Per ads package"),
    enTariff(seoTariffs[3], { region: 400, msk: 800, spb: 600 }, "1 ad system included"),
    enTariff(seoTariffs[4], { region: 540, msk: 1070, spb: 800 }, "2 ad systems included"),
    enTariff(seoTariffs[5], { region: 670, msk: 1330, spb: 1000 }, "3 ad systems included"),
  ],
  tariffFeatured: "Popular",
  tariffPhrasesSuffix: "phrases",
  tariffPeriod: "per month · first 4 months",
  tariffBackup: "Backup",
  tariffContent: "Content",
  tariffTech: "Support",
  tariffAds: "Ads",
  tariffCta: "Request this package",
  plainSpeak: [
    {
      jargon: "Keyword core",
      plain:
        "The list of phrases people actually search. We build it with demand scoring — no junk keys “for the report.”",
    },
    {
      jargon: "On-page optimization",
      plain:
        "We fix pages, copy, speed and structure so Google understands what the site is about.",
    },
    {
      jargon: "Pay for TOP-10",
      plain:
        "After the starter period you pay for days a phrase holds the first page. No position — no charge for it.",
    },
  ],
  advantagesTitle: "Why teams choose us",
  advantagesLead:
    "The goal is maximum return on budget. Cross-niche experience helps deliver results without overspend.",
  advantages: [
    {
      title: "Pay for results",
      text: "You pay for queries that are actually in TOP-10 — by day, no rounding and no empty retainer.",
    },
    {
      title: "Site safety",
      text: "Cloud backups: if needed we can restore the site on another host.",
    },
    {
      title: "Straight talk",
      text: "Simple contracts, clear reports, interest in long-term growth — not a one-off invoice.",
    },
    {
      title: "Working queries only",
      text: "We don’t sell phrases nobody searches. TOP work goes to keys that bring customers.",
    },
    {
      title: "Project support",
      text: "Content and technical support: edits, copy and small feature fixes within the package.",
    },
  ],
  showCases: false,
  casesTitle: "SEO case studies",
  casesLead: "Real projects with position-based billing and clear numbers.",
  casesAll: "All SEO cases",
  honestTitle: "What we don’t promise",
  honestLead: "So “kickoff” never reads as a guaranteed TOP-10 in one month.",
  nos: [
    {
      title: "We don’t mix prep with TOP-10",
      text: "In about a month we usually prepare the site for promotion. Core phrases reaching TOP-10 is planned over 2–6 months after work starts, with month-to-month gains.",
    },
    {
      title: "We don’t sell junk keywords",
      text: "The core gets queries with demand and business meaning — not report fillers nobody searches.",
    },
    {
      title: "No “pay for process” retainer",
      text: "After the starter period you pay for days a phrase is actually in TOP-10. No position — no charge for it.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Pay-for-results billing, TOP timelines, traffic SEO and packages.",
  faq: [
    {
      q: "What does pay-for-TOP-10 mean?",
      a: "After the package starter period you pay for days an agreed phrase holds the first page. No position for that phrase — no charge for it. No “hospital average” rounding.",
    },
    {
      q: "How long to reach TOP-10?",
      a: "Site prep is usually about a month (sometimes 2–6 weeks). Core phrases reaching TOP-10 is planned over 2–6 months after work starts: a noticeable share closer to months 2–3, the rest toward 4–6 — as it goes, not a guaranteed date.",
    },
    {
      q: "How is this different from traffic-based SEO?",
      a: "Here you pay for TOP-10 positions on agreed phrases. In a traffic model you pay for growth in search visits across a keyword list. Choice depends on the goal: precise queries or broader reach.",
    },
    {
      q: "What’s in the starter package period?",
      a: "Analytics, audit, keyword research, on-page and off-page work per the package plan. That’s prep and early rank building — not a promise of “full TOP in month one.”",
    },
    {
      q: "What drives the price?",
      a: "Market competition tier and core size (packages T-50…T-500). Packages include support, backups and on-page/off-page work within the plan.",
    },
  ],
  ctaTitle: "Need customers from Google Search?",
  ctaLead:
    "You have a site — and you need leads. Leave your contacts: we’ll review the niche, say what’s realistically promotable, and send a quote.",
  ctaPoints: [
    "Niche and competition review for your market",
    "Prep ~1 month · TOP planned over 2–6 months",
    "Package quote — no hidden “bundles”",
    "Pay for positions, not “for process”",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formRegion: "Target market",
  formRegionOptions: [
    "Local / regional markets",
    "High-competition metros",
    "Mid-tier metros",
  ],
  formMessage: "Niche and goal — briefly",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your SEO request is in — we’ll get back to you.",
  formSource: "en-seo",
  footerBrand: "PRIME",
  footerTagline: "Website SEO · pay for TOP-10 results",
  demoRanks: [
    { q: "buy with delivery", from: 47, to: 3 },
    { q: "turnkey services", from: 28, to: 6 },
    { q: "pricing near me", from: 19, to: 4 },
    { q: "request a quote", from: 35, to: 8 },
    { q: "nearby · reviews", from: 22, to: 5 },
  ],
};

export function getSeoContent(locale: Locale): SeoContent {
  if (locale === "en") return seoEn;
  return seoRu;
}

export function seoPath(locale: Locale): string {
  return getSeoContent(locale).path;
}

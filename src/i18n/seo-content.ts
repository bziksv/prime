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
  metaTitle: "SEO — PRIME",
  metaDescription:
    "SEO with pay-for-page-one pricing. Audit, keyword research, on-page and off-page work. Prep ~1 month; page-one growth planned over 2–6 months. Packages for local and competitive markets worldwide.",
  serviceName: "SEO",
  serviceType: "Performance SEO",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "SEO",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  kicker: "Pay when you rank · no retainer fluff",
  heroTitleBefore: "Website SEO you pay for ",
  heroTitleAccent: "when keywords hold page one",
  heroLead:
    "We grow Google visibility for the search terms that drive your business. You pay only for phrases that stay on the first page.",
  heroCtaPrimary: "Get a quote",
  heroCtaSecondary: "See packages",
  heroScroll: "Scroll",
  rankAria: "Pay-for-page-one demo",
  rankLive: "live ranks",
  rankProto: "PRIME · SERP",
  rankInLabel: "on page one",
  rankBillLabel: "billable",
  rankBillEmpty: "0 phrases",
  rankNote: "Off page one = $0 · you pay only for locked-in phrases",
  rankNoteDone: "{n} phrases on page one · the rest stay off the bill",
  phrasesWord: "phrases",
  currency: "$",
  numberLocale: "en-US",
  marquee: [
    { t: "Page one", e: "pay for results" },
    { t: "Google", e: "Search first" },
    { t: "Keywords", e: "no junk" },
    { t: "Audit", e: "before kickoff" },
    { t: "Reports", e: "transparent" },
    { t: "Since 2015", e: "in market" },
  ],
  chapters: [
    { id: "about", label: "Approach" },
    { id: "work", label: "Work" },
    { id: "result", label: "Results" },
    { id: "start", label: "Start" },
    { id: "pricing", label: "Pricing" },
    { id: "advantages", label: "Why us" },
    { id: "faq", label: "FAQ" },
    { id: "seo-cta", label: "Contact" },
  ],
  modelTitle: "Not guesswork — a delivery model",
  modelLead:
    "SEO is part of digital marketing. With a clear process you get better rankings, more traffic, and more sales. Larger sites need deeper work. Here’s how we run it.",
  modelMetrics: [
    { value: "Page 1", label: "pay for ranked phrases" },
    { value: "4 mo.", label: "starter package period" },
    { value: "since 2015", label: "model in practice" },
  ],
  aboutTitle: "How we approach SEO",
  aboutLead:
    "On-page and off-page work aimed at Google page one — more visits, leads, and calls. For broader reach we often pair SEO with Google Ads.",
  aboutCopy: [
    "A lot of teams treat SEO like magic: you pay, someone “tweaks things,” and rankings drift in and out. In reality it’s a method — audit, keyword research, on-site fixes, authority work, and steady rank tracking.",
    "We don’t chase keywords nobody searches. The focus is demand that brings customers — not vanity terms padded into a pretty report.",
  ],
  workTitle: "What’s included",
  workLead:
    "Four stages, from goals and audit through on-page and off-page work.",
  pillarsAria: "SEO stages",
  pillars: [
    {
      id: "analytics",
      title: "Analytics",
      lead: "Goals, competitors, budget, and keyword research — locked before the first on-site edit.",
      items: [
        "Define goals and what actually drives them",
        "Competitor analysis: links, search terms, traffic",
        "Campaign budget estimate",
        "Keyword research with demand and competition scoring",
        "Google ranking analysis for your niche",
      ],
    },
    {
      id: "audit",
      title: "Audit",
      lead: "First we find what holds rankings back — then we start the SEO work.",
      items: [
        "SEO review of on-page and off-page factors",
        "Technical audit: indexing and speed issues",
        "Usability review — friction that keeps buyers from converting",
      ],
    },
    {
      id: "internal",
      title: "On-page optimization",
      lead: "Pages, copy, code, and analytics — so Google and people read the site the same way.",
      items: [
        "Keyword clustering and landing-page mapping",
        "Content optimized for target search terms",
        "Internal linking across relevant pages",
        "Code and speed improvements",
        "robots.txt, responsive layout, Google Analytics",
      ],
    },
    {
      id: "external",
      title: "Off-page optimization",
      lead: "Careful authority growth: links, articles, directories, and maps.",
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
  resultLead: "Three clear outcomes — not visibility for its own sake.",
  outcomes: [
    {
      title: "More sales",
      text: "A site that holds page one for the right phrases brings more buyers from search.",
    },
    {
      title: "Traffic growth",
      text: "Stronger brand presence plus new customers already looking for what you sell.",
    },
    {
      title: "Audience focus",
      text: "You get interested visitors — not random traffic padded into a vanity report.",
    },
  ],
  startTitle: "How we start",
  startLead: "Four steps from first conversation to a clear proposal.",
  steps: [
    {
      n: "01",
      title: "Talk to us",
      text: "Fill out the form — we start with a conversation about the goal.",
    },
    {
      n: "02",
      title: "Site and demand review",
      text: "We check technical readiness and search demand. Not every keyword is worth chasing — we’ll say so plainly.",
    },
    {
      n: "03",
      title: "Priorities and scope",
      text: "We set goals, focus areas, and the order of work.",
    },
    {
      n: "04",
      title: "Proposal",
      text: "We lock a plan that solves the need — with clear economics.",
    },
  ],
  pricingTitle: "Pricing",
  pricingLead:
    "Quotes are custom: niche and competition in your market. A local service business and industrial B2B need different budgets. Starting package ranges are below.",
  priceNote:
    "* First 4 months on the package rate. After that, you pay for the days phrases stay on Google page one.",
  regionsAria: "Market tier",
  regions: [
    { id: "region", label: "Local markets" },
    { id: "msk", label: "High-competition metros" },
    { id: "spb", label: "Mid-tier metros" },
  ],
  tariffs: [
    enTariff(seoTariffs[0], { region: 480, msk: 840, spb: 660 }, "Per ads package"),
    enTariff(seoTariffs[1], { region: 630, msk: 1170, spb: 990 }, "Per ads package"),
    enTariff(seoTariffs[2], { region: 840, msk: 1500, spb: 1350 }, "Per ads package"),
    enTariff(seoTariffs[3], { region: 1200, msk: 2400, spb: 1800 }, "1 ad system included"),
    enTariff(seoTariffs[4], { region: 1620, msk: 3210, spb: 2400 }, "2 ad systems included"),
    enTariff(seoTariffs[5], { region: 2010, msk: 3990, spb: 3000 }, "3 ad systems included"),
  ],
  tariffFeatured: "Popular",
  tariffPhrasesSuffix: "phrases",
  tariffPeriod: "per month · first 4 months",
  tariffBackup: "Backup",
  tariffContent: "Content",
  tariffTech: "Support",
  tariffAds: "Ads",
  tariffCta: "Get this package",
  plainSpeak: [
    {
      jargon: "Keyword set",
      plain:
        "The list of search terms people actually type. We build it with demand scoring — no junk keywords “for the report.”",
    },
    {
      jargon: "On-page optimization",
      plain:
        "We fix pages, copy, speed, and structure so Google understands what the site is about.",
    },
    {
      jargon: "Pay for page one",
      plain:
        "After the starter period you pay for the days a phrase holds the first page. No position — no charge for it.",
    },
  ],
  advantagesTitle: "Why teams choose us",
  advantagesLead:
    "The goal is maximum return on budget. Cross-niche experience helps us deliver without overspend.",
  advantages: [
    {
      title: "Pay for results",
      text: "You pay for search terms that actually hold page one — by day, no rounding and no empty retainer.",
    },
    {
      title: "Site safety",
      text: "Cloud backups: if needed, we can restore the site on another host.",
    },
    {
      title: "Straight talk",
      text: "Simple contracts, clear reports, and a stake in long-term growth — not a one-off invoice.",
    },
    {
      title: "Demand-backed keywords only",
      text: "We don’t sell phrases nobody searches. Ranking work goes to keywords that bring customers.",
    },
    {
      title: "Project support",
      text: "Content and technical support: edits, copy, and small feature fixes within the package.",
    },
  ],
  showCases: false,
  casesTitle: "SEO case studies",
  casesLead: "Real projects with position-based billing and clear numbers.",
  casesAll: "All SEO cases",
  honestTitle: "What we don’t promise",
  honestLead: "So “kickoff” never reads as a guaranteed page-one win in one month.",
  nos: [
    {
      title: "We don’t mix prep with page-one results",
      text: "In about a month we usually prepare the site and get SEO underway. Core phrases reaching page one is planned over 2–6 months after work starts, with month-to-month gains.",
    },
    {
      title: "We don’t sell junk keywords",
      text: "The keyword set gets search terms with real demand and business meaning — not report fillers nobody searches.",
    },
    {
      title: "No “pay for process” retainer",
      text: "After the starter period you pay for the days a phrase is actually on page one. No position — no charge for it.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Pay-for-results billing, timelines, traffic SEO, and packages.",
  faq: [
    {
      q: "What does pay-for-page-one mean?",
      a: "After the package starter period you pay for the days an agreed phrase holds the first page. No position for that phrase — no charge for it. No blended averages that hide the misses.",
    },
    {
      q: "How long to reach page one?",
      a: "Site prep is usually about a month (sometimes 2–6 weeks). Core phrases reaching page one is planned over 2–6 months after work starts: a noticeable share closer to months 2–3, the rest toward 4–6 — as it goes, not a guaranteed date.",
    },
    {
      q: "How is this different from traffic-based SEO?",
      a: "Here you pay for page-one positions on agreed phrases. In a traffic model you pay for growth in search visits across a keyword list. Choice depends on the goal: precise search terms or broader reach.",
    },
    {
      q: "What’s in the starter package period?",
      a: "Analytics, audit, keyword research, on-page and off-page work per the package plan. That’s prep and early rank building — not a promise of “full page one in month one.”",
    },
    {
      q: "What drives the price?",
      a: "Market competition tier and keyword-set size (packages T-50…T-500). Packages include support, backups, and on-page/off-page work within the plan.",
    },
  ],
  ctaTitle: "Need customers from Google Search?",
  ctaLead:
    "You have a site — and you need leads. Share your details: we’ll review the niche, tell you what’s realistically worth ranking for, and send a quote.",
  ctaPoints: [
    "Niche and competition review for your market",
    "Prep ~1 month · page one planned over 2–6 months",
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
  formSubmit: "Get a quote",
  formSuccess: "Thanks! Your SEO inquiry is in — we’ll get back to you.",
  formSource: "en-seo",
  footerBrand: "PRIME",
  footerTagline: "Website SEO · pay when keywords hold page one",
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

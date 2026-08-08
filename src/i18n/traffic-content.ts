import type { Locale } from "./locales";
import {
  trafficFit,
  trafficSteps,
  trafficOutcomes,
  trafficIncludes,
  trafficPlans,
  trafficPricingNote,
  trafficStats,
  trafficMarquee,
  trafficDemoKeys,
  trafficNos,
  trafficFaq,
} from "../data/traffic-service";

export type TrafficPlan = {
  id: string;
  title: string;
  price: string;
  unit: string;
  min: string;
  minLabel: string;
  featured: boolean;
};

export type TrafficStat = {
  value: number;
  suffix: string;
  label: string;
  display?: string;
};

export type TrafficOutcome = {
  title: string;
  text: string;
  metric: string;
};

export type TrafficContent = {
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
  heroKicker: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  meterAria: string;
  meterLive: string;
  meterProto: string;
  meterBaseline: string;
  meterVisitsLabel: string;
  meterDeltaLabel: string;
  meterPayLabel: string;
  meterNoteStart: string;
  meterNotePay: string;
  meterRate: number;
  meterCurrency: string;
  demoKeys: readonly string[];
  stats: TrafficStat[];
  marquee: readonly string[];
  fitKicker: string;
  fitTitle: string;
  fitLead: string;
  fit: { title: string; text: string }[];
  stepsKicker: string;
  stepsTitle: string;
  stepsLead: string;
  steps: { n: string; title: string; text: string }[];
  outcomesKicker: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: TrafficOutcome[];
  includesKicker: string;
  includesTitle: string;
  includesLead: string;
  includes: readonly string[];
  pricingKicker: string;
  pricingTitle: string;
  pricingLead: string;
  plans: TrafficPlan[];
  planBadge: string;
  planCtaPrefix: string;
  pricingNote: string;
  nosKicker: string;
  nosTitle: string;
  nosLead: string;
  nos: { title: string; text: string }[];
  faqKicker: string;
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPickPrefix: string;
  ctaPickDefault: string;
  formName: string;
  formPhone: string;
  formSite: string;
  formRegion: string;
  formRegionOptions: { value: string; label: string; selected?: boolean }[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const trafficRu: TrafficContent = {
  path: "/prodvizhenie-sayta-po-trafiku/",
  metaTitle: "Продвижение по трафику — ПРАЙМ",
  metaDescription:
    "Продвижение сайта по трафику: оплата за переходы из поиска по списку фраз. Регионы от 3 ₽, Москва и СПб от 5 ₽ за переход. Базовый трафик до старта не учитывается.",
  serviceName: "Продвижение по трафику",
  serviceType: "Продвижение сайта по трафику",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Продвижение по трафику",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroKicker: "Pay per visit · только прирост из поиска",
  heroTitleBefore: "Платите за ",
  heroTitleAccent: "переходы",
  heroTitleAfter: ", а не за «воздух» в отчётах",
  heroLead:
    "Рост посещаемости по списку ключевых фраз. Базовый трафик до старта не учитывается — в счёт идёт только прирост из выдачи.",
  heroCtaPrimary: "Хочу в рост",
  heroCtaSecondary: "Смотреть цены",
  meterAria: "Демо оплаты за прирост трафика",
  meterLive: "live growth",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "baseline",
  meterVisitsLabel: "visits / month",
  meterDeltaLabel: "billable Δ",
  meterPayLabel: "to pay",
  meterNoteStart: "База до старта = 0 ₽ · платите только за прирост",
  meterNotePay: "К оплате только Δ {delta} визитов · база {base} = 0 ₽",
  meterRate: 5,
  meterCurrency: "₽",
  demoKeys: trafficDemoKeys,
  stats: trafficStats.map((s) => ({ ...s })),
  marquee: trafficMarquee,
  fitKicker: "Fit",
  fitTitle: "Для каких сайтов подходит",
  fitLead: "Там, где важнее объём целевых визитов, чем узкий ТОП по десятку фраз.",
  fit: trafficFit.map((f) => ({ ...f })),
  stepsKicker: "Процесс",
  stepsTitle: "Как мы работаем",
  stepsLead: "От целей и аудита до внутренней и внешней оптимизации.",
  steps: trafficSteps.map((s) => ({ ...s })),
  outcomesKicker: "Результат",
  outcomesTitle: "Что получите",
  outcomesLead: "Охват, конверсия и экономически прозрачная модель оплаты.",
  outcomes: trafficOutcomes.map((o) => ({ ...o })),
  includesKicker: "Состав",
  includesTitle: "Что входит в работу",
  includesLead: "Семантика, стоп-слова, тексты, техника и внешний контур.",
  includes: trafficIncludes,
  pricingKicker: "Цены",
  pricingTitle: "Стоимость услуг",
  pricingLead: "Расценки зависят от направления и конкуренции в регионе.",
  plans: trafficPlans.map((p) => ({ ...p })),
  planBadge: "Столицы",
  planCtaPrefix: "Выбрать ·",
  pricingNote: trafficPricingNote,
  nosKicker: "Честно",
  nosTitle: "Чего не путаем и не обещаем",
  nosLead: "Чтобы модель «оплата за переходы» не смешивалась с ТОП-10.",
  nos: trafficNos.map((n) => ({ ...n })),
  faqKicker: "FAQ",
  faqTitle: "Частые вопросы",
  faqLead: "Отличие от ТОП, базовый трафик, первые месяцы и цена за переход.",
  faq: trafficFaq.map((f) => ({ ...f })),
  ctaTitle: "Продвижение по трафику — интересно?",
  ctaLead:
    "Оставьте заявку — менеджер уточнит детали и подготовит индивидуальное коммерческое предложение.",
  ctaPickPrefix: "Выбран тариф:",
  ctaPickDefault: "Москва и Санкт-Петербург · от 5 ₽",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formRegion: "Регион продвижения",
  formRegionOptions: [
    { value: "region", label: "Регионы РФ · от 3 ₽" },
    { value: "capital", label: "Москва / СПб · от 5 ₽", selected: true },
    { value: "multi", label: "Несколько регионов" },
  ],
  formMessage: "Ниша и примерно какой трафик хотите",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на продвижение по трафику принята — свяжемся с вами.",
  formSource: "prodvizhenie-sayta-po-trafiku",
  footerBrand: "ПРАЙМ",
  footerTagline: "Продвижение по трафику · оплата за переходы",
};

const trafficEn: TrafficContent = {
  path: "/en/traffic/",
  metaTitle: "Pay-per-visit SEO — PRIME",
  metaDescription:
    "Pay-per-visit SEO: pay for Google Search visits from an agreed keyword list. Local markets from ~$0.09/visit, competitive metros from ~$0.18. Pre-launch baseline traffic isn’t billed.",
  serviceName: "Pay-per-visit SEO",
  serviceType: "Pay-per-visit SEO",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Pay-per-visit SEO",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Pay per visit · billable search growth only",
  heroTitleBefore: "Pay for ",
  heroTitleAccent: "visits",
  heroTitleAfter: " — not vanity metrics",
  heroLead:
    "Grow Google Search visits across an agreed keyword list. Traffic you already had before kickoff doesn’t count — you only pay for the incremental visits.",
  heroCtaPrimary: "Let’s grow traffic",
  heroCtaSecondary: "See pricing",
  meterAria: "Demo: pay for incremental traffic",
  meterLive: "live growth",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "baseline",
  meterVisitsLabel: "visits / month",
  meterDeltaLabel: "billable Δ",
  meterPayLabel: "to pay",
  meterNoteStart: "Baseline before launch = $0 · pay only for growth",
  meterNotePay: "Billable only Δ {delta} visits · baseline {base} = $0",
  meterRate: 0.18,
  meterCurrency: "$",
  demoKeys: [
    "buy · near me",
    "delivery · today",
    "services · local",
    "catalog · long-tail",
    "quote · request",
  ],
  stats: [
    { value: 0.09, suffix: "", label: "from · local markets per visit", display: "$0.09" },
    { value: 0.18, suffix: "", label: "from · competitive metros", display: "$0.18" },
    { value: 4, suffix: " mo.", label: "fixed fee before pay-per-growth" },
    { value: 0, suffix: "", label: "baseline visits not billed", display: "$0" },
  ],
  marquee: [
    "buy online",
    "services near me",
    "same-day delivery",
    "turnkey price",
    "catalog 2026",
    "request a quote",
    "compare models",
    "customer reviews",
    "in stock now",
    "book a visit",
  ],
  fitKicker: "Fit",
  fitTitle: "Who this is for",
  fitLead:
    "When you need volume of qualified visits more than a narrow page-one set on a handful of head terms.",
  fit: [
    {
      title: "Large e-commerce",
      text: "Hundreds or thousands of long-tail queries across brands and models — the traffic model covers a wide keyword tail.",
    },
    {
      title: "Broad service catalogs",
      text: "Big service menus and lots of pages: reach across queries beats chasing page one on two head terms.",
    },
    {
      title: "Content and media sites",
      text: "News, media, reference — where value is the volume of relevant visits from Google Search.",
    },
  ],
  stepsKicker: "Process",
  stepsTitle: "How we work",
  stepsLead: "From goals and audit through on-page and off-page SEO.",
  steps: [
    {
      n: "01",
      title: "Discovery",
      text: "Goals, competitors, keyword list, and a clear cost estimate.",
    },
    {
      n: "02",
      title: "Audit",
      text: "Technical health, on-page and off-page gaps, UX that keeps visitors around.",
    },
    {
      n: "03",
      title: "On-page SEO",
      text: "Keywords, content, internal links, conversion-minded design, Google Analytics.",
    },
    {
      n: "04",
      title: "Off-page SEO",
      text: "Link profile, guest content, and Google Business Profile where local search matters.",
    },
  ],
  outcomesKicker: "Outcome",
  outcomesTitle: "What you get",
  outcomesLead: "Reach, conversion, and a billing model you can explain to finance.",
  outcomes: [
    {
      title: "Wider reach",
      text: "More visits to the pages that matter across a broad keyword set.",
      metric: "reach",
    },
    {
      title: "Stronger conversion",
      text: "More first-time and repeat sales as qualified traffic grows.",
      metric: "leads",
    },
    {
      title: "Pay for growth",
      text: "You pay for search visitors from an agreed keyword list. Pre-launch baseline isn’t billed.",
      metric: "billable",
    },
    {
      title: "Faster signal",
      text: "We’re optimizing for visit volume — you’ll see movement sooner than “wait for page one only.”",
      metric: "visits",
    },
  ],
  includesKicker: "Scope",
  includesTitle: "What’s included",
  includesLead: "Keyword research, excluded terms, copy, technical work, and off-page support.",
  includes: [
    "Build and expand the keyword list",
    "Excluded terms kept off the bill (free, DIY, how-to…)",
    "Technical fixes from an SEO specialist",
    "Publishing optimized copy",
    "Conversion recommendations",
    "Site uptime monitoring",
    "Domain renewal when it’s due",
    "On-page SEO (internal links, sitemaps…)",
    "Off-page SEO (authority, social signals)",
  ],
  pricingKicker: "Pricing",
  pricingTitle: "Pricing",
  pricingLead: "Rates track market and how competitive the SERP is.",
  plans: [
    {
      id: "region",
      title: "Local markets",
      price: "from $0.09",
      unit: "per visit",
      min: "$165 — $330",
      minLabel: "minimum payment",
      featured: false,
    },
    {
      id: "capital",
      title: "Competitive metros",
      price: "from $0.18",
      unit: "per visit",
      min: "$330 — $510",
      minLabel: "minimum payment",
      featured: true,
    },
  ],
  planBadge: "Metros",
  planCtaPrefix: "Choose ·",
  pricingNote:
    "Price depends on market and competition. First 4 months: full contract fee. After that: pay for actual traffic growth.",
  nosKicker: "Straight talk",
  nosTitle: "What we won’t confuse or overpromise",
  nosLead: "Pay-per-visit isn’t the same as pay-for-page-one — and we keep that clear.",
  nos: [
    {
      title: "Not pay-for-page-one",
      text: "Here you pay for incremental visits from an agreed phrase list. Ranking fees for page-one positions are a separate SEO product.",
    },
    {
      title: "Baseline isn’t on the bill",
      text: "Traffic the site already had before launch isn’t charged. You pay for Google Search growth on the agreed keyword set.",
    },
    {
      title: "No overnight flood",
      text: "Early months are prep and ramp — often ~1 month of groundwork, then growth planned over months. First 4 months: fixed contract fee, then pay for real growth.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "FAQ",
  faqLead: "Vs. page-one billing, baseline traffic, the first months, and per-visit price.",
  faq: [
    {
      q: "How is this different from pay-for-page-one SEO?",
      a: "Pay-per-visit SEO bills Google Search visits from a keyword list. Classic pay-for-results SEO bills page-one positions. Pick based on keyword breadth and goal: reach vs. precise head terms.",
    },
    {
      q: "What does “baseline traffic not billed” mean?",
      a: "We lock the visit count before launch. Only incremental qualified search visits on agreed queries count — not every hit on the site.",
    },
    {
      q: "Why a fixed fee for the first 4 months?",
      a: "We need time for keyword work, technical fixes, content, and ramp. After that we switch to pay-for-growth — as written in the contract.",
    },
    {
      q: "Who is this model best for?",
      a: "Large catalogs, e-commerce with long-tail demand, broad service sites, and content portals — where visit volume matters more than a couple of phrases on page one.",
    },
    {
      q: "What sets the per-visit price?",
      a: "Market and competition. Guide: local markets from ~$0.09, competitive metros from ~$0.18 per visit; the minimum payment depends on the plan.",
    },
  ],
  ctaTitle: "Want pay-per-visit SEO that bills for growth?",
  ctaLead: "Tell us your niche — we’ll dig into the details and send a clear proposal.",
  ctaPickPrefix: "Selected plan:",
  ctaPickDefault: "Competitive metros · from $0.18",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formRegion: "Target market",
  formRegionOptions: [
    { value: "region", label: "Local markets · from $0.09" },
    { value: "capital", label: "Competitive metros · from $0.18", selected: true },
    { value: "multi", label: "Multiple markets" },
  ],
  formMessage: "Niche and the traffic you’re aiming for",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Send",
  formSuccess: "Thanks — we got your note. We’ll follow up shortly.",
  formSource: "en-traffic",
  footerBrand: "PRIME",
  footerTagline: "Pay-per-visit SEO · Google Search",
};

export function getTrafficContent(locale: Locale): TrafficContent {
  if (locale === "en") return trafficEn;
  return trafficRu;
}

export function trafficPath(locale: Locale): string {
  return getTrafficContent(locale).path;
}

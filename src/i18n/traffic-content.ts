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
  metaTitle: "Traffic-based SEO — PRIME",
  metaDescription:
    "Traffic-based SEO: pay for search visits from an agreed keyword list. Local markets from ~$0.03/visit, high-competition metros from ~$0.06. Baseline traffic before launch is not billed.",
  serviceName: "Traffic-based SEO",
  serviceType: "Traffic-based SEO",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Traffic-based SEO",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Pay per visit · billable search growth only",
  heroTitleBefore: "Pay for ",
  heroTitleAccent: "visits",
  heroTitleAfter: ", not vanity metrics in reports",
  heroLead:
    "Grow search visits across an agreed keyword list. Baseline traffic before launch is excluded — you pay only for incremental visits from Google Search.",
  heroCtaPrimary: "I want growth",
  heroCtaSecondary: "View pricing",
  meterAria: "Demo: pay for incremental traffic",
  meterLive: "live growth",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "baseline",
  meterVisitsLabel: "visits / month",
  meterDeltaLabel: "billable Δ",
  meterPayLabel: "to pay",
  meterNoteStart: "Baseline before launch = $0 · pay only for growth",
  meterNotePay: "Billable only Δ {delta} visits · baseline {base} = $0",
  meterRate: 0.06,
  meterCurrency: "$",
  demoKeys: [
    "buy · near me",
    "delivery · today",
    "services · local",
    "catalog · long-tail",
    "quote · request",
  ],
  stats: [
    { value: 0.03, suffix: "", label: "from · local markets per visit", display: "$0.03" },
    { value: 0.06, suffix: "", label: "from · high-competition metros", display: "$0.06" },
    { value: 4, suffix: " mo.", label: "fixed billing before pay-per-growth" },
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
  fitTitle: "Which sites it suits",
  fitLead: "When target visit volume matters more than a narrow TOP-10 on a handful of phrases.",
  fit: [
    {
      title: "Large e-commerce stores",
      text: "Hundreds and thousands of long-tail queries, many brands and models — the traffic model covers a wide semantic tail.",
    },
    {
      title: "Broad service catalogs",
      text: "Sites with large service ranges and many pages: query reach beats a narrow TOP-10 on a couple of phrases.",
    },
    {
      title: "Information portals",
      text: "News, media, reference sites — where value is in the volume of target visits from search.",
    },
  ],
  stepsKicker: "Process",
  stepsTitle: "How we work",
  stepsLead: "From goals and audit through on-site and off-site optimization.",
  steps: [
    {
      n: "01",
      title: "Analytics",
      text: "Goals, competitors, keyword core and campaign cost estimate.",
    },
    {
      n: "02",
      title: "Audit",
      text: "On-site and off-site optimization, technical health, UX for visitors.",
    },
    {
      n: "03",
      title: "On-site optimization",
      text: "Keywords, content, internal links, conversion-focused design, Google Analytics.",
    },
    {
      n: "04",
      title: "Off-site optimization",
      text: "Link profile, guest content, Google Business Profile (+ Yandex Business where relevant).",
    },
  ],
  outcomesKicker: "Outcome",
  outcomesTitle: "What you get",
  outcomesLead: "Reach, conversion and a transparent pay-for-growth model.",
  outcomes: [
    {
      title: "Maximum audience reach",
      text: "More visits to target pages across a broad keyword core.",
      metric: "reach",
    },
    {
      title: "Higher conversion",
      text: "More first-time and repeat sales as target traffic grows.",
      metric: "leads",
    },
    {
      title: "Pay for growth",
      text: "Pay for search visitors from an agreed keyword list. Baseline traffic before launch is not billed.",
      metric: "billable",
    },
    {
      title: "Faster visible effect",
      text: "The model targets visit volume — results show up sooner than “waiting for TOP only.”",
      metric: "visits",
    },
  ],
  includesKicker: "Scope",
  includesTitle: "What's included",
  includesLead: "Semantics, stop-words, copy, technical work and off-site support.",
  includes: [
    "Building and expanding the keyword list",
    "Stop-words excluded from billing (free, DIY, how-to…)",
    "Technical fixes from an SEO specialist",
    "Publishing optimized copy",
    "Conversion improvement recommendations",
    "Site uptime monitoring",
    "Domain renewal when the term ends",
    "On-site optimization (internal links, sitemaps…)",
    "Off-site optimization (authority, social signals)",
  ],
  pricingKicker: "Pricing",
  pricingTitle: "Service rates",
  pricingLead: "Rates depend on market and competition level.",
  plans: [
    {
      id: "region",
      title: "Local markets",
      price: "from $0.03",
      unit: "per visit",
      min: "$55 — $110",
      minLabel: "minimum payment",
      featured: false,
    },
    {
      id: "capital",
      title: "High-competition metros",
      price: "from $0.06",
      unit: "per visit",
      min: "$110 — $170",
      minLabel: "minimum payment",
      featured: true,
    },
  ],
  planBadge: "Metros",
  planCtaPrefix: "Choose ·",
  pricingNote:
    "Price depends on market and competition. First 4 months — 100% contract billing; after that — pay for actual traffic growth.",
  nosKicker: "Clear expectations",
  nosTitle: "What we don't mix up or promise",
  nosLead: "So pay-per-visit doesn't get confused with TOP-10 billing.",
  nos: [
    {
      title: "Not the same as pay-for-TOP-10",
      text: "Here you pay for incremental visits from an agreed phrase list. Pay-for-TOP positioning is a separate SEO service.",
    },
    {
      title: "Baseline traffic isn't billed",
      text: "What the site already received before launch isn't charged. You pay for search growth on the agreed keyword core.",
    },
    {
      title: "No instant traffic flood",
      text: "Early months are prep and ramp-up; first 4 months — fixed contract billing, then pay for actual growth.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  faqLead: "Difference from TOP billing, baseline traffic, first months and per-visit price.",
  faq: [
    {
      q: "How is this different from pay-for-TOP SEO?",
      a: "In the traffic model you pay for search visits from a keyword list. In classic pay-for-results SEO you pay for TOP-10 positions. Choice depends on semantic breadth and goal: reach or precise head terms.",
    },
    {
      q: "What does “baseline traffic not billed” mean?",
      a: "We record visits before launch. Only incremental target visits from search on agreed queries count — not all site traffic.",
    },
    {
      q: "Why fixed billing for the first 4 months?",
      a: "Time is needed for semantics, technical work, content and visit ramp-up. After that period we switch to pay-for-growth billing — as in the contract.",
    },
    {
      q: "Who is this model best for?",
      a: "Large catalogs, e-commerce with long-tail queries, broad service sites and information portals — where target visit volume matters more than a couple of phrases in TOP.",
    },
    {
      q: "What drives the per-visit price?",
      a: "Market and competition. Guide: local markets from ~$0.03, high-competition metros from ~$0.06 per visit; minimum payment depends on the plan.",
    },
  ],
  ctaTitle: "Interested in traffic-based SEO?",
  ctaLead:
    "Submit a request — we'll clarify details and prepare a tailored proposal.",
  ctaPickPrefix: "Selected plan:",
  ctaPickDefault: "High-competition metros · from $0.06",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formRegion: "Target market",
  formRegionOptions: [
    { value: "region", label: "Local markets · from $0.03" },
    { value: "capital", label: "High-competition metros · from $0.06", selected: true },
    { value: "multi", label: "Multiple markets" },
  ],
  formMessage: "Niche and roughly what traffic you want",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your traffic-based SEO request is in — we'll get back to you.",
  formSource: "en-traffic",
  footerBrand: "PRIME",
  footerTagline: "Traffic-based SEO · pay per visit",
};

export function getTrafficContent(locale: Locale): TrafficContent {
  if (locale === "en") return trafficEn;
  return trafficRu;
}

export function trafficPath(locale: Locale): string {
  return getTrafficContent(locale).path;
}

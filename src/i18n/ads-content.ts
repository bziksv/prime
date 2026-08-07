import type { Locale } from "./locales";
import {
  adsEdges,
  adsFaq,
  adsNotFit,
  adsOutcomes,
  adsPricing,
  adsPricingInclude,
  adsPricingTiers,
  adsProsCons,
  adsSteps,
} from "../data/ads-service";

export type AdsContent = {
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
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroPoints: string[];
  heroBids: { title: string; label: string; width: string }[];
  notFitTitle: string;
  notFitLead: string;
  notFitMark: string;
  notFit: { title: string; text: string }[];
  processTitle: string;
  processLead: string;
  steps: { n: string; title: string; text: string }[];
  edgesTitle: string;
  edgesLead: string;
  edges: { title: string; text: string }[];
  balanceTitle: string;
  balanceLead: string;
  prosTitle: string;
  consTitle: string;
  pros: string[];
  cons: string[];
  pricingEyebrow: string;
  pricingTitle: string;
  pricingNote: string;
  invoiceAgency: { label: string; value: string };
  invoiceMedia: { label: string; value: string };
  tiers: {
    id: string;
    budget: string;
    budgetHint: string;
    forWhom: string;
    fee: string;
    feeNote: string;
    accent: boolean;
  }[];
  tierCta: string;
  includeTitle: string;
  include: string[];
  showCases: boolean;
  casesTitle: string;
  casesLead: string;
  casesAll: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formSite: string;
  formSystem: string;
  formSystemOptions: string[];
  formBudget: string;
  formBudgetOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const adsRu: AdsContent = {
  path: "/kontekstnaya-reklama/",
  metaTitle: "Контекстная реклама — ПРАЙМ",
  metaDescription:
    "Контекстная реклама в Яндекс.Директе и Google Ads: стратегия, минус-слова, UTM, ставки. Ведение от 6 000 ₽ — по медиабюджету, не процент от пополнения. Два отдельных счёта.",
  serviceName: "Контекстная реклама",
  serviceType: "Контекстная реклама",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Контекстная реклама",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroTitleBefore: "Контекстная реклама — клиенты из поиска ",
  heroTitleAccent: "уже сегодня",
  heroLead:
    "Яндекс.Директ и Google Ads: стратегия, объявления, минус-слова и ставки. Ведение — фиксированная сумма от медиабюджета: от 6 000 ₽ в месяц. Медиабюджет и услуги — разными счетами.",
  heroCtaPrimary: "Получить консультацию",
  heroCtaSecondary: "Сколько стоит ведение",
  heroPoints: [
    "До 100 000 ₽ бюджета — ведение от 6 000 ₽",
    "100–300 000 ₽ — 12 000 ₽",
    "Свыше 300 000 ₽ — 20 000 ₽",
  ],
  heroBids: [
    { title: "Директ", label: "поиск", width: "78%" },
    { title: "Google", label: "Ads", width: "62%" },
    { title: "Ставка ↓", label: "оптимизация", width: "48%" },
  ],
  notFitTitle: "Кому контекст не подойдёт",
  notFitLead:
    "Честно на берегу: если узнаёте себя — сначала бизнес и продукт, потом реклама.",
  notFitMark: "стоп",
  notFit: adsNotFit.map((item) => ({ title: item.title, text: item.text })),
  processTitle: "Всё в порядке? Как работаем",
  processLead: "От заявки до отработанного канала продаж — без «запустили и пропали».",
  steps: adsSteps.map((s) => ({ n: s.n, title: s.title, text: s.text })),
  edgesTitle: "Чем отличаемся",
  edgesLead: "Не только «настроили Директ» — инфраструктура под результат.",
  edges: adsEdges.map((e) => ({ title: e.title, text: e.text })),
  balanceTitle: "Плюсы и честные минусы",
  balanceLead: "Контекст быстрый и прозрачный — но не волшебная кнопка.",
  prosTitle: "Плюсы",
  consTitle: "Минусы",
  pros: [...adsProsCons.pros],
  cons: [...adsProsCons.cons],
  pricingEyebrow: "Тарифы ведения",
  pricingTitle: "Сколько стоит ведение рекламы",
  pricingNote: adsPricing.note,
  invoiceAgency: { label: "Счёт 1 · услуги ПРАЙМ", value: "ведение кампаний" },
  invoiceMedia: { label: "Счёт 2 · Яндекс / Google", value: "медиабюджет" },
  tiers: adsPricingTiers.map((t) => ({ ...t })),
  tierCta: "Запросить ведение",
  includeTitle: "Что входит в ведение",
  include: [...adsPricingInclude],
  showCases: true,
  casesTitle: "Кейсы по контексту",
  casesLead: "Доверяйте не благодарственным письмам — реальным проектам.",
  casesAll: "Все кейсы по контексту",
  outcomesTitle: "Что получаете на практике",
  outcomesLead: "Не «показы ради отчёта», а управляемый канал заявок из поиска.",
  outcomes: adsOutcomes.map((o) => ({ title: o.title, text: o.text })),
  faqTitle: "Частые вопросы",
  faqLead: "Тарифы, системы, сроки и сайт под рекламу.",
  faq: adsFaq.map((f) => ({ q: f.q, a: f.a })),
  ctaTitle: "Хотите заявки из поиска уже сейчас?",
  ctaLead:
    "Напишите нишу и ориентир по медиабюджету — подскажем тариф ведения и реалистичный план запуска в Директе и Google Ads.",
  ctaPoints: [
    "Тариф ведения по медиабюджету — без % от пополнения",
    "Два счёта: услуги ПРАЙМ и медиабюджет отдельно",
    "Запуск в Яндекс.Директе и Google Ads",
    "Минус-слова, UTM и оптимизация ставок",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formSystem: "Интересует",
  formSystemOptions: ["Яндекс.Директ", "Google Ads", "Обе системы"],
  formBudget: "Медиабюджет в месяц",
  formBudgetOptions: [
    "до 100 000 ₽",
    "100–300 000 ₽",
    "свыше 300 000 ₽",
    "Пока не определили",
  ],
  formMessage: "Ниша и задача — коротко",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на контекст принята — свяжемся с вами.",
  formSource: "kontekstnaya-reklama",
  footerBrand: "ПРАЙМ",
  footerTagline: "Контекстная реклама · Директ и Google Ads",
};

const adsEn: AdsContent = {
  path: "/en/ads/",
  metaTitle: "Paid search ads — PRIME",
  metaDescription:
    "Google Ads management: strategy, negatives, UTM tracking and bids. Fixed management fee from $70/mo by media budget — not a % of spend. Agency fee and ad spend on separate invoices.",
  serviceName: "Paid search ads",
  serviceType: "Google Ads management",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Paid search",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Paid search — customers from Google ",
  heroTitleAccent: "starting today",
  heroLead:
    "Google Ads: strategy, ads, negatives and bids. Management is a fixed fee by media budget — from $70/month. Ad spend and agency work on separate invoices.",
  heroCtaPrimary: "Book a consult",
  heroCtaSecondary: "See management fees",
  heroPoints: [
    "Up to $1,100 budget — management from $70",
    "$1,100–$3,300 — $130",
    "Over $3,300 — $220",
  ],
  heroBids: [
    { title: "Google", label: "Search", width: "78%" },
    { title: "Display", label: "Network", width: "62%" },
    { title: "Bid ↓", label: "optimize", width: "48%" },
  ],
  notFitTitle: "When paid search won’t help",
  notFitLead:
    "Straight talk up front: if this is you — fix the business and offer first, then ads.",
  notFitMark: "stop",
  notFit: [
    {
      title: "Weak product quality",
      text: "If the offer or delivery is weak, ads only speed up customer disappointment.",
    },
    {
      title: "No analytics or feedback",
      text: "You don’t track ad spend vs profit and won’t share numbers with the agency.",
    },
    {
      title: "Margin under $25",
      text: "Net margin per sale below ~$25. Exception: subscription products with clear LTV.",
    },
  ],
  processTitle: "Ready? How we work",
  processLead: "From request to a working sales channel — not “launch and disappear.”",
  steps: [
    {
      n: "01",
      title: "Request",
      text: "Submit the form — we start with a talk about the goal and budget.",
    },
    {
      n: "02",
      title: "Needs discovery",
      text: "Priority directions, why CPC differs in one niche, how we cut cost-per-click early. Contract when scope is clear.",
    },
    {
      n: "03",
      title: "Site audit",
      text: "We check conversion: if the site needs work, we’ll say what. Some findings appear after the first analytics pass.",
    },
    {
      n: "04",
      title: "Campaign strategy",
      text: "Keyword core, ads, negatives, CPC targets, daily budget, formats and Google channels.",
    },
    {
      n: "05",
      title: "Alignment and invoices",
      text: "We finalize USP and formats. Two invoices: agency management and Google ad spend — every dollar is visible.",
    },
    {
      n: "06",
      title: "Launch in Google Ads",
      text: "Ads, placement exclusions, UTM on every ad, bid module via API, stats and call tracking when needed.",
    },
    {
      n: "07",
      title: "Analytics and split tests",
      text: "After ~2 weeks — review: formats, copy, negatives, exclusions, Analytics. Adjust and repeat.",
    },
  ],
  edgesTitle: "What sets us apart",
  edgesLead: "Not just “set up Ads” — infrastructure built for results.",
  edges: [
    {
      title: "Two invoices — clear",
      text: "PRIME management and Google media budget stay separate. No mixing into one opaque total.",
    },
    {
      title: "Placement blacklist",
      text: "A years-built list of partner sites that get clicks but don’t close deals.",
    },
    {
      title: "UTM on every ad",
      text: "See the path through the site — what worked and what burned budget.",
    },
    {
      title: "Bids via API",
      text: "Our module adjusts bids to strategy — not “set and forget.”",
    },
    {
      title: "Call tracking when needed",
      text: "We add call attribution when the channel should close by phone, not only forms.",
    },
    {
      title: "Fast channel",
      text: "Faster than SEO: hot search demand today, with transparent reporting.",
    },
  ],
  balanceTitle: "Pros and honest cons",
  balanceLead: "Paid search is fast and transparent — not a magic button.",
  prosTitle: "Pros",
  consTitle: "Cons",
  pros: [
    "Fast launch",
    "Transparent stats you can verify yourself",
    "Qualified visits with intent already formed",
  ],
  cons: [
    "CPC moves with competition",
    "People often compare a few sites — your offer has to hold up",
  ],
  pricingEyebrow: "Management fees",
  pricingTitle: "What management costs",
  pricingNote:
    "Media budget is paid separately to Google. Agency work is a separate invoice. Management fee depends on monthly media budget — not a percentage of top-ups.",
  invoiceAgency: { label: "Invoice 1 · PRIME services", value: "campaign management" },
  invoiceMedia: { label: "Invoice 2 · Google", value: "media budget" },
  tiers: [
    {
      id: "s",
      budget: "up to $1,100",
      budgetHint: "media budget / month",
      forWhom: "Small teams and local businesses",
      fee: "from $70",
      feeNote: "management / month",
      accent: true,
    },
    {
      id: "m",
      budget: "$1,100–$3,300",
      budgetHint: "media budget / month",
      forWhom: "Growing businesses with several lines",
      fee: "$130",
      feeNote: "management / month",
      accent: false,
    },
    {
      id: "l",
      budget: "over $3,300",
      budgetHint: "media budget / month",
      forWhom: "Large campaigns and competitive niches",
      fee: "$220",
      feeNote: "management / month",
      accent: false,
    },
  ],
  tierCta: "Request management",
  includeTitle: "What’s included",
  include: [
    "Strategy and campaign structure in Google Ads",
    "Ads, negatives, placement blacklist",
    "UTM tagging and stats control",
    "Bid adjustments and optimization from results",
    "Reports and changes after split tests",
  ],
  showCases: false,
  casesTitle: "Paid search case studies",
  casesLead: "Trust real projects — not thank-you letters.",
  casesAll: "All paid search cases",
  outcomesTitle: "What you get in practice",
  outcomesLead: "Not impressions for a report — a managed lead channel from search.",
  outcomes: [
    {
      title: "Leads from hot demand",
      text: "People already search for the product — the campaign brings intent, not empty reach.",
    },
    {
      title: "Clear economics",
      text: "Two invoices, UTM and reports: see media spend, management fee and what actually drives clicks and leads.",
    },
    {
      title: "Improvement loop",
      text: "Negatives, blacklist, bids and split tests — not “launch and forget,” but steady optimization.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Fees, platforms, timelines and site readiness.",
  faq: [
    {
      q: "Why isn’t management a % of spend?",
      a: "A fixed fee by media budget is fairer: we aren’t incentivized to inflate spend for our commission. Services and media stay on separate invoices.",
    },
    {
      q: "Is Google Ads the only option?",
      a: "For worldwide markets we lead with Google Ads (Search and Display). Other networks are discussed if they fit the niche and budget.",
    },
    {
      q: "How much media budget to start?",
      a: "Depends on niche and competition. On a consult we’ll estimate a sensible minimum; management from $70 with media budget up to $1,100/month.",
    },
    {
      q: "When should first leads appear?",
      a: "Paid search is faster than SEO: with real demand and a working site, leads can start in the first days after approval. Stable economics show after stats and the first round of fixes.",
    },
    {
      q: "What if the site converts poorly?",
      a: "We audit conversion before launch. If the site leaks — we’ll say what to fix; otherwise ads only warm someone else’s wallet.",
    },
  ],
  ctaTitle: "Want leads from Google Search now?",
  ctaLead:
    "Share your niche and media-budget range — we’ll suggest a management tier and a realistic Google Ads launch plan.",
  ctaPoints: [
    "Management fee by media budget — no % of top-ups",
    "Two invoices: PRIME services and media spend",
    "Launch in Google Ads",
    "Negatives, UTM and bid optimization",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formSystem: "Interested in",
  formSystemOptions: ["Google Ads Search", "Google Ads + Display", "Not sure yet"],
  formBudget: "Monthly media budget",
  formBudgetOptions: [
    "up to $1,100",
    "$1,100–$3,300",
    "over $3,300",
    "Not decided yet",
  ],
  formMessage: "Niche and goal — briefly",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your ads request is in — we’ll get back to you.",
  formSource: "en-ads",
  footerBrand: "PRIME",
  footerTagline: "Paid search · Google Ads management",
};

export function getAdsContent(locale: Locale): AdsContent {
  if (locale === "en") return adsEn;
  return adsRu;
}

export function adsPath(locale: Locale): string {
  return getAdsContent(locale).path;
}

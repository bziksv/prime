import type { Locale } from "./locales";
import {
  analyticsWhy,
  analyticsProblem,
  analyticsTrack,
  analyticsFeatures,
  analyticsExtra,
  analyticsPlans,
  analyticsNote,
  analyticsOutcomes,
  analyticsNos,
  analyticsFaq,
} from "../data/analytics-service";

export type AnalyticsPlan = {
  id: string;
  visits: string;
  projects: string;
  price: string;
  unit: string;
  featured: boolean;
};

export type AnalyticsContent = {
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
  flowLive: string;
  flowTag: string;
  flowNode0Title: string;
  flowNode0Sub: string;
  flowNode0Hit: string;
  flowNode1Title: string;
  flowNode1Sub: string;
  flowNode1Hit: string;
  flowNode2Title: string;
  flowNode2Sub: string;
  flowNode2Hit: string;
  flowStatRoas: string;
  flowStatDeals: string;
  flowStatAttr: string;
  whyTitle: string;
  why: { lead: string; channels: string; answer: string };
  whyStat: string;
  whyStatLabel: string;
  problemTitle: string;
  problemLead: string;
  problem: { title: string; text: string }[];
  trackTitle: string;
  trackLead: string;
  track: { title: string; text: string }[];
  featuresTitle: string;
  featuresLead: string;
  features: { title: string; text: string }[];
  extra: string[];
  plansTitle: string;
  plansLead: string;
  plans: AnalyticsPlan[];
  planBadge: string;
  planVisitsSuffix: string;
  planCta: string;
  planSitesSuffix: string;
  note: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: { title: string; text: string }[];
  nosTitle: string;
  nosLead: string;
  nos: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPhoneSuffix: string;
  formName: string;
  formPhone: string;
  formSite: string;
  formCrm: string;
  formCrmOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const analyticsRu: AnalyticsContent = {
  path: "/skvoznaya-analitika/",
  metaTitle: "Сквозная аналитика — ПРАЙМ",
  metaDescription:
    "Сквозная аналитика Roistat: реклама → сайт → CRM. Коллтрекинг, формы, email. Видно, какой канал даёт заявки и продажи. Интеграция и настройка.",
  serviceName: "Сквозная аналитика",
  serviceType: "Сквозная аналитика",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Сквозная аналитика",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroTitleBefore: "Сквозная аналитика — видно, какой канал ",
  heroTitleAccent: "даёт продажи",
  heroLead:
    "Связка рекламы, сайта и CRM на базе Roistat: звонки, формы и email с источником. Платите за каналы, которые реально работают.",
  heroCtaPrimary: "Подключить аналитику",
  heroCtaSecondary: "Смотреть тарифы",
  flowLive: "LIVE TRACE",
  flowTag: "ads → site → CRM",
  flowNode0Title: "Реклама",
  flowNode0Sub: "Директ · Ads · офлайн",
  flowNode0Hit: "клик",
  flowNode1Title: "Сайт",
  flowNode1Sub: "визит · форма · звонок",
  flowNode1Hit: "лид",
  flowNode2Title: "CRM · сделка",
  flowNode2Sub: "источник → результат",
  flowNode2Hit: "sale",
  flowStatRoas: "ROAS",
  flowStatDeals: "сделки / сут",
  flowStatAttr: "атрибуция",
  whyTitle: "Для чего нужна сквозная аналитика",
  why: { ...analyticsWhy },
  whyStat: "до 300%",
  whyStatLabel: "потенциал оптимизации рекламы при ясной атрибуции каналов",
  problemTitle: "Что ломается без сквозной связки",
  problemLead: "Косвенные цифры не отвечают, кто реально привёл клиента.",
  problem: analyticsProblem.map((p) => ({ ...p })),
  trackTitle: "Какие каналы отслеживаем",
  trackLead:
    "Roistat фиксирует обращения, которые обычная веб-аналитика «теряет» — и создаёт заявку в CRM с источником.",
  track: analyticsTrack.map((t) => ({ ...t })),
  featuresTitle: "Возможности системы",
  featuresLead: "Базовый контур и расширенный функционал под рост продаж.",
  features: analyticsFeatures.map((f) => ({ ...f })),
  extra: [...analyticsExtra],
  plansTitle: "Стоимость",
  plansLead: "Тарифы зависят от суммы визитов по всем проектам аккаунта.",
  plans: analyticsPlans.map((p) => ({ ...p })),
  planBadge: "Частый выбор",
  planVisitsSuffix: "визитов / мес",
  planCta: "Оставить заявку",
  planSitesSuffix: " · сайтов без ограничений",
  note: analyticsNote,
  outcomesTitle: "Что меняется после внедрения",
  outcomesLead: "Не ещё один отчёт — связка, по которой можно резать и усиливать бюджет.",
  outcomes: analyticsOutcomes.map((o) => ({ ...o })),
  nosTitle: "Чего не обещаем",
  nosLead: "Чтобы сквозная аналитика не звучала как «волшебная кнопка».",
  nos: analyticsNos.map((n) => ({ ...n })),
  faqTitle: "Частые вопросы",
  faqLead: "Метрика, CRM, коллтрекинг и сроки внедрения.",
  faq: analyticsFaq.map((f) => ({ ...f })),
  ctaTitle: "Предложение интересно?",
  ctaLead:
    "Оставьте заявку — свяжемся и подберём тариф под визиты и CRM.",
  ctaPhoneSuffix: " Или позвоните: +7 (473) 203-01-24.",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formCrm: "CRM / учёт",
  formCrmOptions: ["Bitrix24", "amoCRM", "1С", "Другая / пока нет"],
  formMessage: "Каналы и объём трафика — коротко",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на сквозную аналитику принята — свяжемся с вами.",
  formSource: "skvoznaya-analitika",
  footerBrand: "ПРАЙМ",
  footerTagline: "Сквозная аналитика · Roistat · CRM",
};

const analyticsEn: AnalyticsContent = {
  path: "/en/analytics/",
  metaTitle: "End-to-end analytics — PRIME",
  metaDescription:
    "Full-funnel analytics with Roistat: Google Ads → site → CRM. Call tracking, forms, email. See which channel drives leads and revenue. Setup and integration included.",
  serviceName: "End-to-end analytics",
  serviceType: "End-to-end analytics",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "End-to-end analytics",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Full-funnel analytics — see which channel ",
  heroTitleAccent: "actually sells",
  heroLead:
    "Wire Google Ads, your site, and CRM together with Roistat. Calls, forms, and email keep their source. Spend where it converts — cut what doesn’t.",
  heroCtaPrimary: "Get tracking set up",
  heroCtaSecondary: "See plans",
  flowLive: "LIVE TRACE",
  flowTag: "ads → site → CRM",
  flowNode0Title: "Ads",
  flowNode0Sub: "Google Ads · offline",
  flowNode0Hit: "click",
  flowNode1Title: "Site",
  flowNode1Sub: "visit · form · call",
  flowNode1Hit: "lead",
  flowNode2Title: "CRM · deal",
  flowNode2Sub: "source → outcome",
  flowNode2Hit: "sale",
  flowStatRoas: "ROAS",
  flowStatDeals: "deals / day",
  flowStatAttr: "attribution",
  whyTitle: "Why full-funnel analytics",
  why: {
    lead: "Most teams run more channels than they can explain. In a competitive market, guessing where budget goes is expensive.",
    channels:
      "Search, social, display, promos, offline — you have options. The hard part is knowing how to split spend across them.",
    answer:
      "You want more customers at a lower cost. Without closed-loop tracking, that’s a gut call. With Roistat you see which channel leads to a call, a form fill, and a closed deal — not just a click.",
  },
  whyStat: "up to 300%",
  whyStatLabel: "media optimization upside when channel attribution is clear",
  problemTitle: "What breaks without closed-loop tracking",
  problemLead: "Proxy metrics won’t tell you who actually brought the sale.",
  problem: [
    {
      title: "Proxy metrics",
      text: "Standard reports often can’t tie a call or an email back to the ad that brought the person in.",
    },
    {
      title: "Site → CRM gap",
      text: "Without the handoff, leads land with no source. Sales works blind; marketing can’t prove revenue.",
    },
    {
      title: "Offline goes dark",
      text: "Radio, signage, street banners — without dedicated numbers they’re invisible in the full picture.",
    },
  ],
  trackTitle: "Channels we track",
  trackLead:
    "Roistat catches leads that regular web analytics miss — and opens a CRM deal with the source attached.",
  track: [
    {
      title: "Dynamic call tracking",
      text: "Each visitor sees a unique number. The call routes to you and the source is logged.",
    },
    {
      title: "Static call tracking",
      text: "One number per channel — radio here, outdoor there. Every call becomes a CRM lead.",
    },
    {
      title: "Forms and email",
      text: "Site submissions and email inquiries keep where the lead came from — in CRM history.",
    },
    {
      title: "Path to the deal",
      text: "Full history with your sales team and the final outcome — not just the first click.",
    },
  ],
  featuresTitle: "What you get",
  featuresLead: "Core setup plus advanced tools built around revenue — not vanity traffic.",
  features: [
    {
      title: "Analytics",
      text: "Reports on the metrics that move the business — not session counts alone.",
    },
    {
      title: "Call tracking",
      text: "Dynamic and static — online and offline channels in one system.",
    },
    {
      title: "Speech analytics",
      text: "Flag problem calls across 20+ signals so quality doesn’t slip.",
    },
    {
      title: "Events",
      text: "Micro-conversions: what people do before they become a lead or pay.",
    },
    {
      title: "Cohort analysis",
      text: "How and when different customer groups come back and buy again.",
    },
    {
      title: "Multi-channel",
      text: "Credit across the acquisition path — not last-click only.",
    },
  ],
  extra: [
    "Exit intent — recover up to ~7% of visitors on their way out",
    "Callback in seconds",
    "Email tracking with leads straight into CRM",
    "Split tests aimed at profit, not just CTR",
    "Bid management — cut Google Ads waste by up to 30%",
    "Branded dashboard for your team",
  ],
  plansTitle: "Pricing",
  plansLead: "Plans scale with total visits across every project in the account.",
  plans: [
    {
      id: "p50",
      visits: "up to 50,000",
      projects: "1 project",
      price: "from $3",
      unit: "per day",
      featured: false,
    },
    {
      id: "p250",
      visits: "up to 250,000",
      projects: "3 projects",
      price: "from $13",
      unit: "per day",
      featured: true,
    },
    {
      id: "p500",
      visits: "up to 500,000",
      projects: "7 projects",
      price: "from $20",
      unit: "per day",
      featured: false,
    },
    {
      id: "p2m",
      visits: "up to 2,000,000",
      projects: "15 projects",
      price: "from $36",
      unit: "per day",
      featured: false,
    },
  ],
  planBadge: "Most popular",
  planVisitsSuffix: "visits / mo",
  planCta: "Talk to us",
  planSitesSuffix: " · unlimited sites",
  note: "Price covers CRM connection from the supported list, integration, and on-site setup. Unlimited sites per project. Visits are totaled across the whole account.",
  outcomesTitle: "What changes once it’s live",
  outcomesLead: "Not another dashboard — a system you can cut and scale budget against.",
  outcomes: [
    {
      title: "Budget against real sales",
      text: "See which channel drives leads and deals — not just clicks and impressions.",
    },
    {
      title: "Calls and forms in one stream",
      text: "Call tracking, site leads, and email land in CRM with source — sales isn’t flying blind.",
    },
    {
      title: "Less wasted spend",
      text: "Channels with no leads or deals get cut on purpose; winners get more budget.",
    },
  ],
  nosTitle: "What we won’t promise",
  nosLead: "Full-funnel analytics isn’t a magic button — here’s the line we draw.",
  nos: [
    {
      title: "We don’t swap CRM for a pretty chart",
      text: "The point is ads → site → deal. Without CRM or sales tracking, the picture stays full of holes.",
    },
    {
      title: "We don’t promise “+300% tomorrow”",
      text: "Upside depends on traffic volume, offer quality, and CRM discipline. Figures are a guide — not a guarantee.",
    },
    {
      title: "We don’t drop a black box and disappear",
      text: "You’ll see how attribution works: what counts as a visit, a lead, and a deal.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Google Analytics, CRM, call tracking, and how long setup takes.",
  faq: [
    {
      q: "How is this different from Google Analytics?",
      a: "Google Analytics is great for on-site behavior. Full-funnel analytics adds calls, offline channels, and CRM — so you see the path to revenue, not just sessions.",
    },
    {
      q: "Which CRMs do you connect?",
      a: "Usually Bitrix24, amoCRM, 1C, and others on Roistat’s supported list. We confirm at kickoff — connection is included in the price.",
    },
    {
      q: "Is call tracking required?",
      a: "If customers call you — yes, or those leads vanish from reports. Forms-only? Start with forms and CRM, add call tracking later.",
    },
    {
      q: "What sets the plan?",
      a: "Total visits across account projects. Sites per project aren’t capped; visits are summed.",
    },
    {
      q: "How long does setup take?",
      a: "Usually a few business days to a couple of weeks: access, numbers/scripts, CRM, first leads verified. Timeline depends on how ready your accounts and CRM are.",
    },
  ],
  ctaTitle: "Want clearer attribution?",
  ctaLead: "Tell us about your traffic and CRM — we’ll match a plan and get you set up.",
  ctaPhoneSuffix: "",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formCrm: "CRM / sales system",
  formCrmOptions: ["Bitrix24", "amoCRM", "1C", "Other / none yet"],
  formMessage: "Channels and rough traffic volume",
  formAgreeBefore: "I agree to personal data processing under",
  formAgreePolicy: "our privacy policy",
  formSubmit: "Send",
  formSuccess: "Thanks — we got your note. We’ll follow up shortly.",
  formSource: "en-analytics",
  footerBrand: "PRIME",
  footerTagline: "End-to-end analytics · Roistat · CRM",
};

export function getAnalyticsContent(locale: Locale): AnalyticsContent {
  if (locale === "en") return analyticsEn;
  return analyticsRu;
}

export function analyticsPath(locale: Locale): string {
  return getAnalyticsContent(locale).path;
}

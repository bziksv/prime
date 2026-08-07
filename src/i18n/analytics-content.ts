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
    "End-to-end analytics with Roistat: Google Ads → site → CRM. Call tracking, forms, email. See which channel drives leads and sales. Integration and setup.",
  serviceName: "End-to-end analytics",
  serviceType: "End-to-end analytics",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "End-to-end analytics",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "End-to-end analytics — see which channel ",
  heroTitleAccent: "drives sales",
  heroLead:
    "Connect Google Ads, your site and CRM with Roistat: calls, forms and email with source attribution. Pay for channels that actually convert.",
  heroCtaPrimary: "Connect analytics",
  heroCtaSecondary: "View plans",
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
  whyTitle: "Why end-to-end analytics",
  why: {
    lead: "Modern businesses use as many ad channels as possible — otherwise it's hard to survive in a competitive niche.",
    channels:
      "Online, offline, promos, banners, search, social — plenty of channels. The question is how to split budget between them.",
    answer:
      "It makes sense to pay where you get more customers at lower cost. Without end-to-end analytics that's guesswork. With a system like Roistat you see which channel actually leads to a call, lead and closed deal.",
  },
  whyStat: "up to 300%",
  whyStatLabel: "ad optimization potential when channel attribution is clear",
  problemTitle: "What breaks without end-to-end linkage",
  problemLead: "Indirect metrics don't answer who actually brought the customer.",
  problem: [
    {
      title: "Indirect metrics",
      text: "Classic reports often can't tell which ad brought the person who simply called or emailed.",
    },
    {
      title: "Site → CRM gap",
      text: "Without linkage a lead sits without a source. Sales work blind; marketing can't see revenue.",
    },
    {
      title: "Offline without numbers",
      text: "Radio, signage, street banners — without dedicated numbers and tracking they're invisible in the big picture.",
    },
  ],
  trackTitle: "Channels we track",
  trackLead:
    "Roistat captures leads that standard web analytics misses — and creates a CRM deal with the source.",
  track: [
    {
      title: "Dynamic call tracking",
      text: "Each visitor sees a unique number; the call forwards to you and the source is recorded.",
    },
    {
      title: "Static call tracking",
      text: "A dedicated number per channel: radio — one, street banner — another. The call creates a CRM lead.",
    },
    {
      title: "Forms and email",
      text: "Site leads and email inquiries carry where the client came from — into CRM history.",
    },
    {
      title: "Path to deal",
      text: "Full history with sales reps and the final outcome — not just the click.",
    },
  ],
  featuresTitle: "Platform capabilities",
  featuresLead: "Core setup and advanced features for revenue growth.",
  features: [
    {
      title: "Analytics",
      text: "Reports on key business metrics — not just traffic.",
    },
    {
      title: "Call tracking",
      text: "Dynamic and static — online and offline channels in one system.",
    },
    {
      title: "Speech analytics",
      text: "Problem calls across 20+ signals — to improve quality.",
    },
    {
      title: "Events",
      text: "Micro-conversions: what users do before a lead and payment.",
    },
    {
      title: "Cohort analysis",
      text: "How and when different customer groups make repeat purchases.",
    },
    {
      title: "Multi-channel",
      text: "Channel weight in the acquisition chain — not just last-click.",
    },
  ],
  extra: [
    "Lead catcher — recover up to ~7% of leaving visitors",
    "Callback in seconds",
    "Email tracking and leads straight to CRM",
    "Split tests focused on profit",
    "Bid management — save up to 30% of Google Ads budget",
    "Branded dashboard for your company",
  ],
  plansTitle: "Pricing",
  plansLead: "Plans depend on total visits across all projects in the account.",
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
  planBadge: "Popular choice",
  planVisitsSuffix: "visits / mo",
  planCta: "Submit a request",
  planSitesSuffix: " · unlimited sites",
  note: "Price includes CRM connection from the supported list, integration and on-site setup. Unlimited sites per project. Visits are counted across all account projects.",
  outcomesTitle: "What changes after rollout",
  outcomesLead: "Not another report — a linkage you can cut and scale budget against.",
  outcomes: [
    {
      title: "Budget by actual sales",
      text: "See which channel drives leads and deals — not just clicks and impressions.",
    },
    {
      title: "Calls and forms in one feed",
      text: "Call tracking, site leads and email land in CRM with source — sales aren't working blind.",
    },
    {
      title: "Less wasted spend",
      text: "Channels with no leads or deals get cut deliberately; strong ones get scaled.",
    },
  ],
  nosTitle: "What we don't promise",
  nosLead: "So end-to-end analytics doesn't sound like a magic button.",
  nos: [
    {
      title: "We don't replace CRM with a pretty dashboard",
      text: "The point is ads → site → deal. Without CRM or sales tracking the picture stays full of holes.",
    },
    {
      title: "We don't promise «+300% tomorrow»",
      text: "Optimization potential depends on traffic volume, offer quality and CRM discipline. Numbers are a guide, not a guarantee.",
    },
    {
      title: "We don't install a black box without access",
      text: "The dashboard and attribution logic should be clear to you: what counts as a visit, lead and deal.",
    },
  ],
  faqTitle: "Common questions",
  faqLead: "Google Analytics, CRM, call tracking and rollout timeline.",
  faq: [
    {
      q: "How is this different from Google Analytics?",
      a: "Google Analytics is strong for on-site behavior. End-to-end analytics adds calls, offline channels and CRM linkage — so you see the path to revenue, not just sessions.",
    },
    {
      q: "Which CRMs do you connect?",
      a: "Typically Bitrix24, amoCRM, 1C and others from Roistat's supported list. We confirm at kickoff — connection is included in the price.",
    },
    {
      q: "Is call tracking mandatory?",
      a: "If part of your clients call — yes, otherwise those leads vanish from reports. If you're forms-only, you can start with forms and CRM and add call tracking later.",
    },
    {
      q: "What determines the plan?",
      a: "Total visits across account projects. Sites per project aren't capped; visits are summed.",
    },
    {
      q: "How long does rollout take?",
      a: "Usually a few business days to a couple of weeks: access, numbers/scripts, CRM, checking first leads. Timeline depends on account and CRM readiness.",
    },
  ],
  ctaTitle: "Interested?",
  ctaLead: "Submit a request — we'll get in touch and match a plan to your visits and CRM.",
  ctaPhoneSuffix: "",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formCrm: "CRM / accounting",
  formCrmOptions: ["Bitrix24", "amoCRM", "1C", "Other / not yet"],
  formMessage: "Channels and traffic volume — briefly",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your end-to-end analytics request is in — we'll get back to you.",
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

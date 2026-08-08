import type { Locale } from "./locales";
import {
  auditPain,
  auditIncludes,
  auditDeliverables,
  auditColumns,
  auditPricing,
  auditTimeline,
  auditMarquee,
  auditStats,
  auditOutcomes,
  auditNos,
  auditFaq,
} from "../data/audit-service";

export type AuditFinding = { title: string; text: string };
export type AuditColumn = { id: string; title: string; items: AuditFinding[] };

export type AuditContent = {
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
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  consoleAria: string;
  consoleUrlPlaceholder: string;
  consoleLogIdle: string;
  consoleLogHost: string;
  consoleLogIndex: string;
  consoleLogWarn: string;
  consoleLogCheck: string;
  consoleLogOk: string;
  consoleLogDone: string;
  consoleScan: string;
  consoleScanning: string;
  consoleRescan: string;
  consoleMsgTyping: string;
  consoleMsgAccepted: string;
  consoleHostPrefix: string;
  stats: { value: number; suffix: string; label: string }[];
  marquee: string[];
  signalsKicker: string;
  signalsTitle: string;
  signalsLead: string;
  pain: { title: string; text: string }[];
  timelineKicker: string;
  timelineTitle: string;
  timelineLead: string;
  timeline: { n: string; title: string; text: string }[];
  includesKicker: string;
  includesTitle: string;
  includesLead: string;
  includes: { title: string; text: string }[];
  deliverables: { title: string; text: string }[];
  protocolKicker: string;
  protocolTitle: string;
  protocolLead: string;
  protocolTabsAria: string;
  columns: AuditColumn[];
  pricingFreeStamp: string;
  pricingFreeCta: string;
  pricingPaidLabel: string;
  pricingPaidCta: string;
  pricing: {
    free: { title: string; text: string; note: string };
    paid: { title: string; price: string; text: string; extra: string };
  };
  outcomesKicker: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: { title: string; text: string }[];
  nosKicker: string;
  nosTitle: string;
  nosLead: string;
  nos: { title: string; text: string }[];
  faqKicker: string;
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaKicker: string;
  ctaTitle: string;
  ctaLead: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formSite: string;
  formType: string;
  formTypeOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const auditRu: AuditContent = {
  path: "/audit-sayta/",
  metaTitle: "Аудит сайта — ПРАЙМ",
  metaDescription:
    "Аудит сайта: Метрика, юзабилити, конкуренты, техника и контент. Бесплатный мини-аудит и комплексный отчёт 30–79 тыс. ₽.",
  serviceName: "Аудит сайта",
  serviceType: "Аудит сайта",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Аудит сайта",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroKicker: "Протокол диагностики · SEO / UX / техника",
  heroTitleBefore: "Находим, что мешает сайту ",
  heroTitleAccent: "расти в выдаче",
  heroLead:
    "Не чек-лист «для галочки» — разбор метрики, поведения, конкурентов и техники. На выходе: текстовый отчёт и видео от специалиста.",
  heroCtaPrimary: "Заказать мини-аудит",
  heroCtaSecondary: "Как проходит",
  consoleAria: "Демо диагностики сайта",
  consoleUrlPlaceholder: "https://your-site.ru",
  consoleLogIdle: "Ожидание ввода адреса…",
  consoleLogHost: "Соединение с хостом…",
  consoleLogIndex: "Индекс · sitemap · коды ответов",
  consoleLogWarn: "видимость −18% за 90 дней",
  consoleLogCheck: "утечка в воронке заявки",
  consoleLogOk: "SSL · зеркала · редиректы",
  consoleLogDone: "Протокол готов · видео в работе",
  consoleScan: "Сканировать",
  consoleScanning: "Сканирование…",
  consoleRescan: "Сканировать ещё раз",
  consoleMsgTyping: "Печатаем адрес…",
  consoleMsgAccepted: "Адрес принят · наводим на «Сканировать»",
  consoleHostPrefix: "Соединение с ",
  stats: auditStats.map((s) => ({ ...s })),
  marquee: [...auditMarquee],
  signalsKicker: "Сигналы",
  signalsTitle: "Когда аудит нужен прямо сейчас",
  signalsLead: "Три маркера, что «просто подождать» уже не сработает.",
  pain: auditPain.map((p) => ({ ...p })),
  timelineKicker: "Таймлайн",
  timelineTitle: "Как проходит аудит",
  timelineLead: "От заявки до приоритетов — понятный протокол без сюрпризов.",
  timeline: auditTimeline.map((s) => ({ ...s })),
  includesKicker: "Состав",
  includesTitle: "Что входит в полный аудит",
  includesLead:
    "Специалист разбирает показатели именно вашего сайта — не шаблонный отчёт на всех.",
  includes: auditIncludes.map((i) => ({ ...i })),
  deliverables: auditDeliverables.map((d) => ({ ...d })),
  protocolKicker: "Протокол",
  protocolTitle: "На что обращает внимание специалист",
  protocolLead: "Примеры того, что держим в голове при работе с любым сайтом.",
  protocolTabsAria: "Разделы аудита",
  columns: auditColumns.map((col) => ({
    id: col.id,
    title: col.title,
    items: col.items.map((item) => ({ ...item })),
  })),
  pricingFreeStamp: "0 ₽",
  pricingFreeCta: "Заказать бесплатно",
  pricingPaidLabel: "Комплексный",
  pricingPaidCta: "Заказать комплексный",
  pricing: {
    free: { ...auditPricing.free },
    paid: { ...auditPricing.paid },
  },
  outcomesKicker: "Результат",
  outcomesTitle: "Что даёт аудит на практике",
  outcomesLead: "Понятные приоритеты — не простыня «исправьте 200 пунктов».",
  outcomes: auditOutcomes.map((o) => ({ ...o })),
  nosKicker: "Честно",
  nosTitle: "Чего не обещаем",
  nosLead: "Аудит — диагностика, не волшебный выход в ТОП.",
  nos: auditNos.map((n) => ({ ...n })),
  faqKicker: "FAQ",
  faqTitle: "Частые вопросы",
  faqLead: "Форматы, цена, доступы и связь с продвижением.",
  faq: auditFaq.map((f) => ({ ...f })),
  ctaKicker: "Заявка",
  ctaTitle: "Есть ли у сайта критические проблемы?",
  ctaLead:
    "Оставьте заявку — сделаем мини-аудит или рассчитаем комплексный разбор. Получите видео с основными рисками и точками роста.",
  ctaPoints: [
    "Мини-аудит бесплатно — видео с главными рисками",
    "Комплексный отчёт: Метрика, UX, конкуренты, техника",
    "План приоритетов — что чинить в первую очередь",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formType: "Тип аудита",
  formTypeOptions: [
    "Бесплатный мини-аудит",
    "Комплексный платный",
    "Оценить SEO-подрядчика",
  ],
  formMessage: "Что беспокоит: трафик, заявки, позиции?",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на аудит принята — свяжемся с вами.",
  formSource: "audit-sayta",
  footerBrand: "ПРАЙМ",
  footerTagline: "Аудит сайта · диагностика · точки роста",
};

const auditEn: AuditContent = {
  path: "/en/audit/",
  metaTitle: "Website audit — PRIME",
  metaDescription:
    "Website audit: Google Analytics, usability, competitors, technical SEO, and content. Free mini-audit and full report from $330–$880.",
  serviceName: "Website audit",
  serviceType: "Website audit",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Website audit",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Site diagnostic · SEO / UX / tech",
  heroTitleBefore: "Find what’s stopping your site from ",
  heroTitleAccent: "showing up in Google",
  heroLead:
    "Not a checkbox PDF. We dig into Google Analytics, behavior, competitors, and technical health — then hand you a written report plus a specialist walkthrough video.",
  heroCtaPrimary: "Request a mini-audit",
  heroCtaSecondary: "How it works",
  consoleAria: "Website diagnostic demo",
  consoleUrlPlaceholder: "https://your-site.com",
  consoleLogIdle: "Waiting for URL…",
  consoleLogHost: "Connecting to host…",
  consoleLogIndex: "Index · sitemap · response codes",
  consoleLogWarn: "visibility −18% over 90 days",
  consoleLogCheck: "drop-off in the lead funnel",
  consoleLogOk: "SSL · mirrors · redirects",
  consoleLogDone: "Report ready · video in progress",
  consoleScan: "Scan",
  consoleScanning: "Scanning…",
  consoleRescan: "Scan again",
  consoleMsgTyping: "Entering URL…",
  consoleMsgAccepted: "URL accepted · heading to Scan",
  consoleHostPrefix: "Connecting to ",
  stats: [
    { value: 50, suffix: "+", label: "checkpoints in the review" },
    { value: 2, suffix: "", label: "formats: mini and full" },
    { value: 1, suffix: "", label: "specialist walkthrough video" },
  ],
  marquee: [
    "Google Analytics",
    "Search Console",
    "Index",
    "Sitemap",
    "404 / codes",
    "Keywords & rankings",
    "Usability",
    "Competitors",
    "Meta & H1",
    "Internal links",
    "Core Web Vitals",
    "Mobile layout",
    "Mirrors / SSL",
    "Link profile",
  ],
  signalsKicker: "Signals",
  signalsTitle: "When you need an audit now",
  signalsLead: "Three signs that “just wait it out” isn’t a strategy anymore.",
  pain: [
    {
      title: "No visitors?",
      text: "Google can overlook a site for thousands of reasons. Stuck past page 3 for years? That’s usually a signal of deeper systemic issues — penalties, keyword gaps, and positioning mistakes.",
    },
    {
      title: "No leads?",
      text: "You may be getting informational traffic while UX blocks the path to a request. We find where users drop off.",
    },
    {
      title: "No growth?",
      text: "SEO doesn’t stand still. When growth stalls, decline usually follows. Algorithm updates don’t spare “legacy” sites either.",
    },
  ],
  timelineKicker: "Timeline",
  timelineTitle: "How the audit works",
  timelineLead: "From intake to priorities — a clear process, no surprises.",
  timeline: [
    {
      n: "01",
      title: "Request and access",
      text: "Site URL, Google Analytics, and a short brief on what’s broken. Mini-audit or full scope.",
    },
    {
      n: "02",
      title: "Scanning",
      text: "Technical health, index, sitemap, response codes, visibility, and traffic mix.",
    },
    {
      n: "03",
      title: "Specialist review",
      text: "UX, content, competitors, behavior — your site, not a template.",
    },
    {
      n: "04",
      title: "Report and video",
      text: "Written findings + video: what’s critical and where the opportunities are.",
    },
    {
      n: "05",
      title: "Priorities",
      text: "What to fix first, what can wait — a plan that doesn’t say “fix everything at once.”",
    },
  ],
  includesKicker: "Scope",
  includesTitle: "What’s in a full audit",
  includesLead:
    "A specialist reviews the numbers for your site — not a one-size-fits-all dump.",
  includes: [
    {
      title: "Google Analytics review",
      text: "Critical shifts in traffic mix and what they actually mean.",
    },
    {
      title: "Usability analysis",
      text: "How people interact with key interface elements.",
    },
    {
      title: "Competitor analysis",
      text: "Where you trail direct competitors in your niche.",
    },
    {
      title: "Responsive layout",
      text: "Desktop and mobile: how the site renders and device share in traffic.",
    },
    {
      title: "User behavior",
      text: "Paths to conversion, bottlenecks, and critical drop-off points.",
    },
  ],
  deliverables: [
    {
      title: "Written report",
      text: "Hard metrics and clear conclusions — no filler.",
    },
    {
      title: "Walkthrough video",
      text: "A specialist walks you through what we checked on your site and how.",
    },
  ],
  protocolKicker: "Checklist",
  protocolTitle: "What the specialist looks at",
  protocolLead: "A sample of what we keep in focus on every site.",
  protocolTabsAria: "Audit sections",
  columns: [
    {
      id: "traffic",
      title: "Traffic mix and visibility",
      items: [
        {
          title: "Traffic mix",
          text: "Visits, seasonality, landing pages, sources, devices.",
        },
        {
          title: "Google Search Console",
          text: "Is targeting set? Coverage and enhancement issues?",
        },
        {
          title: "Google Business Profile / Maps",
          text: "Profiles complete? Kept up to date?",
        },
        {
          title: "Keywords and rankings",
          text: "Is there a keyword set? Complete and current? Trend over time?",
        },
        {
          title: "Indexed pages",
          text: "What’s in the index? What should be blocked from indexing?",
        },
        {
          title: "Sitemap",
          text: "Sitemap complete? Any sections missing?",
        },
        {
          title: "Response codes",
          text: "404s on missing URLs? Other status codes?",
        },
        {
          title: "Outbound links",
          text: "Which resources does the site link out to?",
        },
      ],
    },
    {
      id: "content",
      title: "Content and on-page SEO",
      items: [
        {
          title: "Copy and content",
          text: "Does it show real expertise? Any keyword stuffing?",
        },
        {
          title: "Content relevance",
          text: "Falling behind direct competitors?",
        },
        {
          title: "Meta tags and headings",
          text: "Match search intent? Need location modifiers?",
        },
        {
          title: "Internal linking",
          text: "Pages with no inbound links?",
        },
        {
          title: "Images",
          text: "Resolution? Uniqueness? Attribution?",
        },
        {
          title: "Blog / articles",
          text: "Informational traffic accounted for? Updated regularly?",
        },
        {
          title: "Link profile",
          text: "Strong enough? Growing on a steady cadence?",
        },
        {
          title: "URL structure",
          text: "Flat hierarchy? Clean URL format?",
        },
      ],
    },
    {
      id: "tech",
      title: "Technical infrastructure",
      items: [
        {
          title: "Backups",
          text: "Backups in place? Where stored? How often?",
        },
        {
          title: "Stack and platform",
          text: "SSL? Cross-browser? Load speed?",
        },
        {
          title: "Primary domain / mirror",
          text: "Redirects configured? Double slashes in URLs?",
        },
        {
          title: "Responsive layout",
          text: "Rendering across breakpoints?",
        },
        {
          title: "Sitewide elements",
          text: "Do they strengthen or dilute relevance?",
        },
        {
          title: "Product catalog",
          text: "Complete? Internal links? Product pages?",
        },
        {
          title: "Thin content",
          text: "Close the pages or expand them?",
        },
        {
          title: "Internal links",
          text: "Broken links? Redirect loops?",
        },
      ],
    },
  ],
  pricingFreeStamp: "Free",
  pricingFreeCta: "Request free audit",
  pricingPaidLabel: "Full audit",
  pricingPaidCta: "Request full audit",
  pricing: {
    free: {
      title: "Free mini-audit",
      text: "Find out if you have critical issues. Specialist video covering the main problems and opportunities.",
      note: "Free audits are for product or service websites only.",
    },
    paid: {
      title: "Full website audit",
      price: "$330 — $880",
      text: "A deep dive into systemic issues, gaps, and opportunities. Final cost depends on niche and scope.",
      extra: "Often used as an outside look at an SEO contractor’s work.",
    },
  },
  outcomesKicker: "Outcome",
  outcomesTitle: "What you walk away with",
  outcomesLead: "Clear priorities — not a 200-item “fix everything” dump.",
  outcomes: [
    {
      title: "A clear problem map",
      text: "Not a generic checklist — priorities for your site: tech, content, UX, visibility.",
    },
    {
      title: "Video + written report",
      text: "The specialist shows what’s critical on your project — easy to hand to your team or contractor.",
    },
    {
      title: "A plan, not “fix all”",
      text: "What to do first, what can wait — so the fix budget doesn’t turn into chaos.",
    },
  ],
  nosKicker: "Straight talk",
  nosTitle: "What we don’t promise",
  nosLead: "An audit is a diagnosis — not a magic jump to page one.",
  nos: [
    {
      title: "Not a substitute for SEO",
      text: "An audit diagnoses. Rankings and traffic growth are separate work after the blockers come out — often planned over 2–6 months.",
    },
    {
      title: "Not a one-size-fits-all report",
      text: "We review Google Analytics, index, competitors, and UX for your site — not a universal laundry list.",
    },
    {
      title: "Mini-audit ≠ full review",
      text: "The free format covers critical risks and opportunities. The full write-up lives in the paid audit.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  faqLead: "Formats, pricing, access, and how this ties to SEO.",
  faq: [
    {
      q: "How is a mini-audit different from a full audit?",
      a: "Mini — a short video on critical issues and opportunities, free for product/service sites. Full — complete written findings across Google Analytics, UX, competitors, content, and tech.",
    },
    {
      q: "How much does a full audit cost?",
      a: "Roughly $330–$880. Final price depends on niche, site size, and depth — we quote after your request.",
    },
    {
      q: "Can you evaluate our current SEO contractor?",
      a: "Yes. Full audits are often ordered as an independent review: what got done, what got missed, where the risks are.",
    },
    {
      q: "Do you need Google Analytics access?",
      a: "For a solid review — yes (at least view-only). Without analytics, traffic and behavior conclusions will be thinner.",
    },
    {
      q: "Will the audit put us on page one?",
      a: "No. An audit shows what’s blocking growth. Rankings and traffic build in ongoing SEO — prep first, then page-one growth planned over 2–6 months, not “the week after the report.”",
    },
  ],
  ctaKicker: "Get started",
  ctaTitle: "Does the site have critical issues?",
  ctaLead:
    "Talk to us — we’ll run a mini-audit or scope a full review. You’ll get a video covering the main risks and opportunities.",
  ctaPoints: [
    "Free mini-audit — video with the main risks",
    "Full report: Google Analytics, UX, competitors, tech",
    "Priority plan — what to fix first",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formType: "Audit type",
  formTypeOptions: [
    "Free mini-audit",
    "Full paid audit",
    "Evaluate SEO contractor",
  ],
  formMessage: "What’s on your mind: traffic, leads, rankings?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Send request",
  formSuccess: "Thanks! Your audit request is in — we’ll be in touch.",
  formSource: "en-audit",
  footerBrand: "PRIME",
  footerTagline: "Website audit · diagnostics · opportunities",
};

export function getAuditContent(locale: Locale): AuditContent {
  if (locale === "en") return auditEn;
  return auditRu;
}

export function auditPath(locale: Locale): string {
  return getAuditContent(locale).path;
}

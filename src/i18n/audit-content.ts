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
    "Website audit: Google Analytics, usability, competitors, technical SEO and content. Free mini-audit and full report from $330–$880.",
  serviceName: "Website audit",
  serviceType: "Website audit",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Website audit",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Diagnostic protocol · SEO / UX / tech",
  heroTitleBefore: "Find what keeps your site from ",
  heroTitleAccent: "growing in search",
  heroLead:
    "Not a checkbox report — we review analytics, behavior, competitors and technical health. You get a written report and a specialist walkthrough video.",
  heroCtaPrimary: "Request a mini-audit",
  heroCtaSecondary: "How it works",
  consoleAria: "Website diagnostic demo",
  consoleUrlPlaceholder: "https://your-site.com",
  consoleLogIdle: "Waiting for URL input…",
  consoleLogHost: "Connecting to host…",
  consoleLogIndex: "Index · sitemap · response codes",
  consoleLogWarn: "visibility −18% over 90 days",
  consoleLogCheck: "leak in the lead funnel",
  consoleLogOk: "SSL · mirrors · redirects",
  consoleLogDone: "Protocol ready · video in progress",
  consoleScan: "Scan",
  consoleScanning: "Scanning…",
  consoleRescan: "Scan again",
  consoleMsgTyping: "Typing address…",
  consoleMsgAccepted: "Address accepted · moving to Scan",
  consoleHostPrefix: "Connecting to ",
  stats: [
    { value: 50, suffix: "+", label: "checkpoints in the protocol" },
    { value: 2, suffix: "", label: "formats: mini and full" },
    { value: 1, suffix: "", label: "specialist walkthrough video" },
  ],
  marquee: [
    "Analytics",
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
  signalsLead: "Three markers that “just wait” won’t fix it anymore.",
  pain: [
    {
      title: "No visitors?",
      text: "Search engines can ignore a site for thousands of reasons. If you’ve been stuck past page 3 for years — that’s a marker of hidden systemic issues: penalties, semantic gaps and positioning mistakes.",
    },
    {
      title: "No leads?",
      text: "Traffic may be informational while UX blocks the path to a request. We find where users drop off.",
    },
    {
      title: "No growth?",
      text: "SEO evolves. Where there’s no growth, decline follows. Algorithm updates don’t spare even “old” sites.",
    },
  ],
  timelineKicker: "Timeline",
  timelineTitle: "How the audit runs",
  timelineLead: "From request to priorities — a clear protocol without surprises.",
  timeline: [
    {
      n: "01",
      title: "Request and access",
      text: "Site URL, Analytics, brief on what hurts. Mini-audit or full format.",
    },
    {
      n: "02",
      title: "Scanning",
      text: "Technical health, index, sitemap, response codes, visibility and traffic structure.",
    },
    {
      n: "03",
      title: "Specialist review",
      text: "UX, content, competitors, behavior — your project, not a template.",
    },
    {
      n: "04",
      title: "Report and video",
      text: "Written protocol + video: what’s critical and where growth points are.",
    },
    {
      n: "05",
      title: "Priorities",
      text: "What to fix first, what can wait — a plan without “fix everything at once.”",
    },
  ],
  includesKicker: "Scope",
  includesTitle: "What’s in a full audit",
  includesLead:
    "A specialist reviews metrics for your site specifically — not a one-size-fits-all report.",
  includes: [
    {
      title: "Google Analytics review",
      text: "Critical shifts in traffic structure and what they mean.",
    },
    {
      title: "Usability analysis",
      text: "How users interact with interface elements.",
    },
    {
      title: "Competitor analysis",
      text: "Where you lag direct competitors in the niche.",
    },
    {
      title: "Responsive layout",
      text: "Desktop and mobile: how the site renders and device share in traffic.",
    },
    {
      title: "User behavior",
      text: "Paths to goal, bottlenecks and critical drop-off points.",
    },
  ],
  deliverables: [
    {
      title: "Written report",
      text: "Concrete metrics and conclusions — no filler.",
    },
    {
      title: "Walkthrough video",
      text: "A specialist shows what we analyze on your site and how.",
    },
  ],
  protocolKicker: "Protocol",
  protocolTitle: "What the specialist checks",
  protocolLead: "Examples of what we keep in mind on any site.",
  protocolTabsAria: "Audit sections",
  columns: [
    {
      id: "traffic",
      title: "Traffic structure and visibility",
      items: [
        {
          title: "Traffic structure",
          text: "Visits, seasonality, landing pages, sources, devices.",
        },
        {
          title: "Google Search Console",
          text: "Geographic targeting set? Coverage and enhancement issues?",
        },
        {
          title: "Google Business Profile / Maps",
          text: "Profiles complete? Kept up to date?",
        },
        {
          title: "Keywords and rankings",
          text: "Is there a semantic core? Complete and current? Dynamics?",
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
          text: "404 on missing URLs? Other status codes?",
        },
        {
          title: "Outbound links",
          text: "Which resources does the site link to?",
        },
      ],
    },
    {
      id: "content",
      title: "Content and optimization",
      items: [
        {
          title: "Text content",
          text: "Does it demonstrate expertise? Any keyword stuffing?",
        },
        {
          title: "Text relevance",
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
          text: "Sufficient? How regularly is it growing?",
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
          title: "Primary mirror",
          text: "Redirects configured? Double slashes in URLs?",
        },
        {
          title: "Responsive layout",
          text: "Rendering across breakpoints?",
        },
        {
          title: "Global elements",
          text: "Do they boost or dilute relevance?",
        },
        {
          title: "Product matrix",
          text: "Complete? Internal links? Product cards?",
        },
        {
          title: "Thin content",
          text: "Close pages or expand them?",
        },
        {
          title: "Internal links",
          text: "Broken links? Redirect loops?",
        },
      ],
    },
  ],
  pricingFreeStamp: "Free",
  pricingFreeCta: "Request for free",
  pricingPaidLabel: "Full audit",
  pricingPaidCta: "Request full audit",
  pricing: {
    free: {
      title: "Free mini-audit",
      text: "Find out if there are critical issues. Specialist video: main problems and growth points.",
      note: "Free audits are for product or service websites only.",
    },
    paid: {
      title: "Full website audit",
      price: "$330 — $880",
      text: "An exhaustive report on systemic issues, gaps and growth points. Final cost depends on niche and scope.",
      extra: "Often used to evaluate an SEO contractor from the outside.",
    },
  },
  outcomesKicker: "Outcome",
  outcomesTitle: "What an audit delivers in practice",
  outcomesLead: "Clear priorities — not a 200-item “fix everything” list.",
  outcomes: [
    {
      title: "A clear “where it hurts” map",
      text: "Not a generic checklist — priorities for your site: tech, content, UX, visibility.",
    },
    {
      title: "Video + text",
      text: "The specialist shows what’s critical on your project — easy to hand off to the team or contractor.",
    },
    {
      title: "A plan, not “fix all”",
      text: "What to do first, what can wait — so the fix budget doesn’t turn into chaos.",
    },
  ],
  nosKicker: "Honestly",
  nosTitle: "What we don’t promise",
  nosLead: "An audit is diagnostics — not a magic jump to page one.",
  nos: [
    {
      title: "Not a substitute for SEO",
      text: "An audit diagnoses. Rankings and traffic growth are separate services after blockers are removed.",
    },
    {
      title: "Not a one-size-fits-all report",
      text: "We review Analytics, index, competitors and UX for your site — not a universal laundry list.",
    },
    {
      title: "Mini-audit ≠ full protocol",
      text: "The free format covers critical risks and growth points. The full protocol is in the paid audit.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  faqLead: "Formats, pricing, access and how this ties to SEO.",
  faq: [
    {
      q: "How is a mini-audit different from a full audit?",
      a: "Mini — a short video on critical issues and growth points, free for product/service sites. Full — complete written protocol across Analytics, UX, competitors, content and tech.",
    },
    {
      q: "How much does a full audit cost?",
      a: "Roughly $330–$880. Final price depends on niche, site size and depth — we quote after your request.",
    },
    {
      q: "Can you evaluate our current SEO contractor?",
      a: "Yes. Full audits are often ordered as an independent review: what was done, what was missed, where the risks are.",
    },
    {
      q: "Do you need Analytics access?",
      a: "For a solid review — yes (at least view-only). Without analytics, traffic and behavior conclusions will be weaker.",
    },
    {
      q: "Will the audit put us in TOP rankings?",
      a: "No. An audit shows what blocks growth. Positions and traffic build in ongoing SEO — over months, not “the week after the report.”",
    },
  ],
  ctaKicker: "Request",
  ctaTitle: "Does the site have critical issues?",
  ctaLead:
    "Submit a request — we’ll run a mini-audit or scope a full review. You’ll get a video with main risks and growth points.",
  ctaPoints: [
    "Mini-audit free — video with main risks",
    "Full report: Analytics, UX, competitors, tech",
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
  formMessage: "What concerns you: traffic, leads, rankings?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your audit request is in — we’ll get back to you.",
  formSource: "en-audit",
  footerBrand: "PRIME",
  footerTagline: "Website audit · diagnostics · growth points",
};

export function getAuditContent(locale: Locale): AuditContent {
  if (locale === "en") return auditEn;
  return auditRu;
}

export function auditPath(locale: Locale): string {
  return getAuditContent(locale).path;
}

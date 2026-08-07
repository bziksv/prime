import type { Locale } from "./locales";
import { defaultLocale } from "./locales";

export type HomeService = {
  title: string;
  desc: string;
  cat: string;
};

export type HomeContent = {
  metaTitle: string;
  metaDescription: string;
  skipToContent: string;
  navAria: string;
  /** Visible brand wordmark (Cyrillic on RU, Latin on other locales). */
  brandName: string;
  /** Hero wordmark before the accent letter. */
  brandHeroBefore: string;
  /** Hero wordmark accent letter (styled). */
  brandHeroAccent: string;
  brandTagline: string;
  navAbout: string;
  navServices: string;
  navCases: string;
  navBlog: string;
  navPartnership: string;
  navContacts: string;
  menuLabel: string;
  breadcrumbHome: string;
  ctaTop: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroLead: string;
  kpiYears: string;
  kpiYearsSub: string;
  kpiTop100Sub: string;
  kpiTop5Sub: string;
  heroConsult: string;
  heroAllServices: string;
  hubLive: string;
  hubPipe: string;
  hubSeoTitle: string;
  hubSeoSub: string;
  hubAdsTitle: string;
  hubAdsSub: string;
  hubWebTitle: string;
  hubWebSub: string;
  hubResultTitle: string;
  hubResultSub: string;
  hubLeads: string;
  hubCpl: string;
  /** Currency mark for hub CPL demo (₽ on RU, $ on other locales). */
  hubCplCurrency: string;
  hubTop: string;
  /** Cert card titles in display order for about strip. */
  certTitles: [string, string, string];
  aboutTitle: string;
  aboutText: string;
  aboutBullets: string[];
  certYandexDesc: string;
  certGoogleDesc: string;
  certCmsDesc: string;
  servicesTitle: string;
  servicesLead: string;
  services: HomeService[];
  flagshipEyebrow: string;
  flagshipTitle: string;
  flagshipText: string;
  flagshipCta: string;
  flagshipReportAlt: string;
  flagshipSerpAlt: string;
  processTitle: string;
  processLead: string;
  process: { step: string; title: string; desc: string }[];
  achievementsTitle: string;
  achievementsLead: string;
  statTop5Sub: string;
  statTop100Sub: string;
  statClientsSub: string;
  cmsNote: string;
  allCases: string;
  clientsTitle: string;
  clientsLead: string;
  partnersSearch: string;
  industriesTitle: string;
  industriesLead: string;
  industries: { name: string; image: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaOfficeAlt: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formService: string;
  formServicePlaceholder: string;
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  footerTagline: string;
  langSwitchAria: string;
  localeOfferTitle: string;
  localeOfferText: string;
  localeOfferAccept: string;
  localeOfferDismiss: string;
};

const serviceHrefs: Record<string, string> = {
  seo: "/prodvizhenie-sayta/",
  ads: "/kontekstnaya-reklama/",
  web: "/razrabotka-saytov/",
  bots: "/razrabotka-botov-dlya-messendzherov/",
  orm: "/upravlenie-reputaciej/",
  audit: "/audit-sayta/",
  support: "/tehpodderzhka-sayta/",
  analytics: "/skvoznaya-analitika/",
  traffic: "/prodvizhenie-sayta-po-trafiku/",
};

const serviceHrefsEn: Partial<Record<string, string>> = {
  seo: "/en/seo/",
  ads: "/en/ads/",
  web: "/en/web/",
  bots: "/en/bots/",
  orm: "/en/reputation/",
  audit: "/en/audit/",
  support: "/en/support/",
  analytics: "/en/analytics/",
  traffic: "/en/traffic/",
};

export function homeServiceHref(cat: string, locale: Locale = defaultLocale): string {
  if (locale === "en" && serviceHrefsEn[cat]) return serviceHrefsEn[cat]!;
  return serviceHrefs[cat] ?? "#cta";
}

const industryImages = {
  production: "/images/v6/industries/proizvodstvo.webp",
  shops: "/images/v6/industries/magaziny.webp",
  b2b: "/images/v6/industries/b2b.webp",
} as const;

const homeRu: HomeContent = {
  metaTitle: "ПРАЙМ — интернет-маркетинг",
  metaDescription:
    "ПРАЙМ — интернет-маркетинг для бизнеса по всей России. SEO с оплатой по факту, контекст, разработка сайтов и аналитика.",
  skipToContent: "К содержанию",
  navAria: "Навигация сайта",
  brandName: "ПРАЙМ",
  brandHeroBefore: "ПРАЙ",
  brandHeroAccent: "М",
  brandTagline: "Интернет-маркетинг",
  navAbout: "О компании",
  navServices: "Наши услуги",
  navCases: "Наши кейсы",
  navBlog: "Блог",
  navPartnership: "Партнерство",
  navContacts: "Контакты",
  menuLabel: "Меню",
  breadcrumbHome: "Главная",
  ctaTop: "Оставить заявку",
  heroTitleBefore: "Интернет-маркетинг для бизнеса ",
  heroTitleAccent: "по всей России",
  heroLead:
    "SEO с оплатой по факту в ТОП-10, контекст, сайты и сквозная аналитика — с прозрачной экономикой и понятными отчётами.",
  kpiYears: "10+ лет",
  kpiYearsSub: "на рынке · с 2015",
  kpiTop100Sub: "агентств по РФ",
  kpiTop5Sub: "агентств · CMS Magazine",
  heroConsult: "Бесплатная консультация",
  heroAllServices: "Все услуги",
  hubLive: "LIVE HUB",
  hubPipe: "seo → ads → web → leads",
  hubSeoTitle: "SEO",
  hubSeoSub: "ТОП-10 · оплата по факту",
  hubAdsTitle: "Контекст",
  hubAdsSub: "Директ · Ads · CPL",
  hubWebTitle: "Сайт",
  hubWebSub: "заявки · звонки · CRM",
  hubResultTitle: "Результат",
  hubResultSub: "лиды · продажи · отчёт",
  hubLeads: "Лиды",
  hubCpl: "CPL",
  hubCplCurrency: "₽",
  hubTop: "ТОП",
  certTitles: ["Яндекс", "Google", "CMS Magazine"],
  aboutTitle: "О компании",
  aboutText:
    "ПРАЙМ — агентство интернет-маркетинга с 2015 года. Ведём проекты по всей России: от аудита и стратегии до заявок, звонков и продаж. Фокус на измеримом результате — позиции, трафик, CPL и связка с CRM.",
  aboutBullets: [
    "Более 10 лет на рынке — без смены вывески",
    "Официальные партнёры Яндекс и Google",
    "SEO с оплатой по факту нахождения фраз в ТОП-10",
  ],
  certYandexDesc: "Сертифицированный партнёр",
  certGoogleDesc: "Партнёр рекламных продуктов",
  certCmsDesc: "TOP-100 агентств РФ",
  servicesTitle: "Наши услуги",
  servicesLead: "Комплекс или отдельно — под задачи бизнеса",
  services: [
    {
      title: "Продвижение сайта",
      desc: "Выводим в ТОП-10 по ключевым словам. Оплата по факту нахождения фраз.",
      cat: "seo",
    },
    {
      title: "Контекстная реклама",
      desc: "Реклама в поисковых системах и у партнёров. Снижаем цену за переход, растим звонки.",
      cat: "ads",
    },
    {
      title: "Разработка сайтов",
      desc: "Современные коммерческие сайты: услуги и товары под заявки и продажи.",
      cat: "web",
    },
    {
      title: "Разработка ботов для мессенджеров",
      desc: "Telegram и другие каналы: меню, уведомления, записи и связка с сайтом или CRM.",
      cat: "bots",
    },
    {
      title: "Управление репутацией",
      desc: "Отзывы на Яндекс и Google Картах, сторонние отзовики. Улучшаем образ бренда.",
      cat: "orm",
    },
    {
      title: "Аудит сайта",
      desc: "Проверка на требования поисковых систем — находим, что мешает росту в выдаче.",
      cat: "audit",
    },
    {
      title: "Техподдержка сайта",
      desc: "Доработки, контент, оплата, счётчики и постоянное сопровождение проекта.",
      cat: "support",
    },
    {
      title: "Сквозная аналитика",
      desc: "Связка рекламы, сайта и CRM — видно, какой канал даёт заявки и продажи.",
      cat: "analytics",
    },
    {
      title: "Продвижение по трафику",
      desc: "Рост посещаемости с оплатой за переходы клиентов из поисковых систем.",
      cat: "traffic",
    },
  ],
  flagshipEyebrow: "Флагман · с 2015",
  flagshipTitle: "Продвижение сайта с оплатой по факту",
  flagshipText:
    "Модель, с которой мы работаем больше десяти лет: выводим в ТОП-10 по ключевым словам. Платите за фразы, которые реально закрепились в выдаче — без абонентской «воды».",
  flagshipCta: "Узнать условия",
  flagshipReportAlt: "Отчёт по позициям",
  flagshipSerpAlt: "Пример выдачи",
  processTitle: "Как мы работаем",
  processLead: "Четыре шага от аудита до роста заявок",
  process: [
    {
      step: "01",
      title: "Аудит и KPI",
      desc: "Смотрим сайт, нишу и конкурентов. Фиксируем фразы и целевые заявки.",
    },
    {
      step: "02",
      title: "Стратегия",
      desc: "План SEO, рекламы или разработки — с бюджетом и прогнозом по срокам.",
    },
    {
      step: "03",
      title: "Запуск",
      desc: "Ведём кампании и доработки сайта. Связка с CRM и счётчиками.",
    },
    {
      step: "04",
      title: "Отчёт и рост",
      desc: "Позиции, заявки, CPL. Корректируем каждый месяц по фактам.",
    },
  ],
  achievementsTitle: "Наши достижения",
  achievementsLead: "По версии CMS Magazine и результатам клиентов",
  statTop5Sub: "интернет-маркетинг · CMS Magazine",
  statTop100Sub: "агентств по РФ",
  statClientsSub: "клиентов в разных отраслях",
  cmsNote:
    "* Рейтинг CMS Magazine — один из старейших сервисов оценки в рунете; на его показатели опираются и гос. тендеры.",
  allCases: "Все кейсы",
  clientsTitle: "Наши клиенты",
  clientsLead: "Более 70 компаний — от автодилеров до медицины и ритейла",
  partnersSearch: "Официальные партнёры поисковых систем",
  industriesTitle: "Продвижение по направлениям бизнеса",
  industriesLead: "Отраслевой опыт — детали уточняйте по телефону",
  industries: [
    { name: "Производство", image: industryImages.production },
    { name: "Магазины", image: industryImages.shops },
    { name: "Бизнес / B2B", image: industryImages.b2b },
  ],
  faqTitle: "Частые вопросы",
  faq: [
    {
      q: "Как работает оплата SEO?",
      a: "После подготовки и стартового периода тарифа платите за дни, когда фраза реально в ТОП-10. Ядро фиксируем после аудита — без абонентской «воды».",
    },
    {
      q: "Сколько до первых заявок?",
      a: "Контекст — часто от 1–2 недель. SEO: подготовка ~1 мес., выход в ТОП планово 2–6 мес. с приростом от месяца к месяцу — не гарантия даты.",
    },
    {
      q: "Работаете только в одном городе?",
      a: "База и команда в регионе, TOP-5 по CMS Magazine. Проекты ведём по всей России — отчёты и созвоны онлайн.",
    },
    {
      q: "Можно заказать одну услугу?",
      a: "Да — SEO, Директ, сайт или аналитика отдельно. Сквозную связку предложим по аудиту.",
    },
    {
      q: "Что входит в техподдержку?",
      a: "Контент, доработки, счётчики, оплата хостинга и мелкие правки — без отдельного «разработчика на аутсорсе».",
    },
    {
      q: "Как начать?",
      a: "Оставьте заявку или позвоните — разбор ниши за 30 минут, без обязательств.",
    },
  ],
  ctaTitle: "Оставить заявку",
  ctaLead:
    "За 10+ лет рынок агентств сильно проредился — многие закрылись. Мы на месте: те же принципы, измеримый результат.",
  ctaOfficeAlt: "Офис ПРАЙМ",
  ctaPoints: [
    "С 2015 на рынке интернет-маркетинга",
    "Остались, когда другие ушли",
    "Разбор ниши за 30 минут · без обязательств",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formService: "Услуга",
  formServicePlaceholder: "Выберите услугу",
  formMessage: "Кратко о задаче (необязательно)",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с",
  formAgreePolicy: "нашей политикой",
  formSubmit: "Отправить",
  footerTagline: "Интернет-маркетинг · SEO · контекст · разработка",
  langSwitchAria: "Язык сайта",
  localeOfferTitle: "English version?",
  localeOfferText: "Your browser language looks like English. Open the English homepage?",
  localeOfferAccept: "Continue in English",
  localeOfferDismiss: "Stay on Russian",
};

const homeEn: HomeContent = {
  metaTitle: "PRIME — digital marketing agency",
  metaDescription:
    "PRIME is a digital marketing agency for businesses worldwide: performance SEO, Google Ads, websites and analytics.",
  skipToContent: "Skip to content",
  navAria: "Site navigation",
  brandName: "PRIME",
  brandHeroBefore: "PRIM",
  brandHeroAccent: "E",
  brandTagline: "Digital marketing",
  navAbout: "About",
  navServices: "Services",
  navCases: "Case studies",
  navBlog: "Blog",
  navPartnership: "Partnership",
  navContacts: "Contacts",
  menuLabel: "Menu",
  breadcrumbHome: "Home",
  ctaTop: "Submit a request",
  heroTitleBefore: "Digital marketing for business ",
  heroTitleAccent: "across the world",
  heroLead:
    "Performance SEO paid for TOP-10 results, Google Ads, websites and end-to-end analytics — with clear economics and reports.",
  kpiYears: "10+ years",
  kpiYearsSub: "in the market · since 2015",
  kpiTop100Sub: "digital agencies",
  kpiTop5Sub: "agency ranking",
  heroConsult: "Free consultation",
  heroAllServices: "All services",
  hubLive: "LIVE HUB",
  hubPipe: "seo → ads → web → leads",
  hubSeoTitle: "SEO",
  hubSeoSub: "TOP-10 · pay for results",
  hubAdsTitle: "Paid search",
  hubAdsSub: "Google Ads · CPL",
  hubWebTitle: "Website",
  hubWebSub: "leads · calls · CRM",
  hubResultTitle: "Outcome",
  hubResultSub: "leads · sales · reporting",
  hubLeads: "Leads",
  hubCpl: "CPL",
  hubCplCurrency: "$",
  hubTop: "TOP",
  certTitles: ["Google", "CMS Magazine", "Yandex"],
  aboutTitle: "About the agency",
  aboutText:
    "PRIME is a digital marketing agency founded in 2015. We run projects for businesses worldwide — from audit and strategy to leads, calls and sales. Focus on measurable outcomes: Google rankings, traffic, CPL and CRM attribution.",
  aboutBullets: [
    "10+ years on the market — same brand, same approach",
    "Google Partner for advertising products",
    "SEO billed for keywords that actually hold TOP-10",
  ],
  certYandexDesc: "Regional search partner",
  certGoogleDesc: "Advertising products partner",
  certCmsDesc: "TOP-100 digital agencies",
  servicesTitle: "Our services",
  servicesLead: "Full funnel or a single channel — matched to your goals",
  services: [
    {
      title: "SEO promotion",
      desc: "We grow Google TOP-10 visibility for target keywords. You pay for phrases that actually rank.",
      cat: "seo",
    },
    {
      title: "Paid search",
      desc: "Google Ads in Search and the Display Network. Lower cost per click, more qualified calls.",
      cat: "ads",
    },
    {
      title: "Website development",
      desc: "Modern commercial sites built for leads and sales — services and product catalogs.",
      cat: "web",
    },
    {
      title: "Messenger bots",
      desc: "Telegram and other channels: menus, alerts, bookings and CRM / website hooks.",
      cat: "bots",
    },
    {
      title: "Reputation management",
      desc: "Google Business Profile and Maps reviews plus review sites — strengthen brand perception.",
      cat: "orm",
    },
    {
      title: "Website audit",
      desc: "Check against Google Search requirements and find what blocks growth in SERP.",
      cat: "audit",
    },
    {
      title: "Website support",
      desc: "Updates, content, payments, counters and ongoing project care.",
      cat: "support",
    },
    {
      title: "End-to-end analytics",
      desc: "Connect Google Ads, the site and CRM — see which channel drives leads and revenue.",
      cat: "analytics",
    },
    {
      title: "Traffic-based SEO",
      desc: "Grow visits with payment tied to Google Search referrals.",
      cat: "traffic",
    },
  ],
  flagshipEyebrow: "Flagship · since 2015",
  flagshipTitle: "SEO billed for actual TOP-10 results",
  flagshipText:
    "The model we have used for over a decade: grow into Google TOP-10 for target keywords. You pay for phrases that hold in search — not a vague monthly retainer.",
  flagshipCta: "See how it works",
  flagshipReportAlt: "Rankings report",
  flagshipSerpAlt: "Search results example",
  processTitle: "How we work",
  processLead: "Four steps from audit to more leads",
  process: [
    {
      step: "01",
      title: "Audit & KPI",
      desc: "Review the site, niche and competitors. Lock keywords and lead goals.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "SEO, Google Ads or development plan — with budget and timing outlook.",
    },
    {
      step: "03",
      title: "Launch",
      desc: "Run campaigns and site improvements. Wire CRM and analytics.",
    },
    {
      step: "04",
      title: "Report & grow",
      desc: "Rankings, leads, CPL. Adjust every month based on facts.",
    },
  ],
  achievementsTitle: "Track record",
  achievementsLead: "Independent rankings and client outcomes",
  statTop5Sub: "digital marketing ranking",
  statTop100Sub: "digital agencies",
  statClientsSub: "clients across industries",
  cmsNote:
    "* Agency rankings referenced in public listings; we also work as a Google Partner on advertising products.",
  allCases: "All case studies",
  clientsTitle: "Our clients",
  clientsLead: "Automotive, healthcare, retail and more — selected partners",
  partnersSearch: "Google Partner · search & ads ecosystem",
  industriesTitle: "Industry experience",
  industriesLead: "Vertical know-how — ask us for details",
  industries: [
    { name: "Manufacturing", image: industryImages.production },
    { name: "Retail / stores", image: industryImages.shops },
    { name: "Business / B2B", image: industryImages.b2b },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "How does SEO billing work?",
      a: "After preparation and the starter period of the plan, you pay for days when a keyword actually holds Google TOP-10. The keyword set is fixed after the audit — no retainer filler.",
    },
    {
      q: "How soon until first leads?",
      a: "Google Ads — often within 1–2 weeks. SEO: preparation ~1 month; TOP growth is typically planned over 2–6 months month by month — not a guaranteed date.",
    },
    {
      q: "Do you only work in one market?",
      a: "No — we run projects for businesses worldwide. Reports and calls are online; our team can work across time zones.",
    },
    {
      q: "Can I order a single service?",
      a: "Yes — SEO, Google Ads, a website or analytics on their own. We can propose an end-to-end setup after the audit.",
    },
    {
      q: "What is included in support?",
      a: "Content, small builds, counters, hosting payments and routine fixes — without hiring a separate outsourced developer.",
    },
    {
      q: "How do we start?",
      a: "Send a request — a 30-minute niche review, no obligation.",
    },
  ],
  ctaTitle: "Submit a request",
  ctaLead:
    "Over 10+ years the agency market thinned out — many closed. We are still here: same principles, measurable Google-side results.",
  ctaOfficeAlt: "PRIME office",
  ctaPoints: [
    "In digital marketing since 2015",
    "Still here when others left",
    "30-minute niche review · no obligation",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formService: "Service",
  formServicePlaceholder: "Choose a service",
  formMessage: "Briefly about your task (optional)",
  formAgreeBefore: "I agree to personal data processing under",
  formAgreePolicy: "our privacy policy",
  formSubmit: "Send",
  footerTagline: "Digital marketing · SEO · Google Ads · development",
  langSwitchAria: "Site language",
  localeOfferTitle: "Русская версия",
  localeOfferText: "В браузере выбран русский. Открыть русскую главную?",
  localeOfferAccept: "На русском",
  localeOfferDismiss: "Остаться на English",
};

const byLocale: Record<"ru" | "en", HomeContent> = {
  ru: homeRu,
  en: homeEn,
};

export function getHomeContent(locale: Locale): HomeContent {
  if (locale === "en") return byLocale.en;
  return byLocale[defaultLocale];
}

export function homePath(locale: Locale): string {
  return locale === "en" ? "/en/" : "/";
}

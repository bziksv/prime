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
      desc: "Поиск и партнёры: снижаем цену клика и растим целевые звонки.",
      cat: "ads",
    },
    {
      title: "Разработка сайтов",
      desc: "Коммерческие сайты под заявки и продажи — услуги и каталоги.",
      cat: "web",
    },
    {
      title: "Боты для мессенджеров",
      desc: "Telegram и другие каналы: меню, уведомления, записи, связка с CRM.",
      cat: "bots",
    },
    {
      title: "Управление репутацией",
      desc: "Отзывы на Картах и отзовиках — поднимаем рейтинг и образ бренда.",
      cat: "orm",
    },
    {
      title: "Аудит сайта",
      desc: "Проверка под поисковики: находим, что мешает росту в выдаче.",
      cat: "audit",
    },
    {
      title: "Техподдержка сайта",
      desc: "Доработки, контент, оплата, счётчики и постоянное сопровождение.",
      cat: "support",
    },
    {
      title: "Сквозная аналитика",
      desc: "Реклама, сайт и CRM в одной связке — видно, что даёт заявки.",
      cat: "analytics",
    },
    {
      title: "Продвижение по трафику",
      desc: "Рост посещаемости с оплатой за переходы из поисковых систем.",
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
    "PRIME helps businesses grow online: SEO you pay for when keywords rank on page one, Google Ads, conversion-focused websites, and analytics that tie spend to revenue.",
  skipToContent: "Skip to content",
  navAria: "Site navigation",
  brandName: "PRIME",
  brandHeroBefore: "PRIM",
  brandHeroAccent: "E",
  brandTagline: "Digital marketing",
  navAbout: "About",
  navServices: "Services",
  navCases: "Work",
  navBlog: "Blog",
  navPartnership: "Partnership",
  navContacts: "Contact",
  menuLabel: "Menu",
  breadcrumbHome: "Home",
  ctaTop: "Talk to us",
  heroTitleBefore: "Digital marketing for ",
  heroTitleAccent: "business worldwide",
  heroLead:
    "SEO you pay for when target phrases hold page one, Google Ads aimed at real leads, websites built to convert, and analytics that connect spend to revenue — with clear reporting.",
  kpiYears: "10+ years",
  kpiYearsSub: "in market · since 2015",
  kpiTop100Sub: "agency listings",
  kpiTop5Sub: "public ranking",
  heroConsult: "Book a free consult",
  heroAllServices: "See services",
  hubLive: "LIVE HUB",
  hubPipe: "seo → ads → web → leads",
  hubSeoTitle: "SEO",
  hubSeoSub: "page one · pay for results",
  hubAdsTitle: "Google Ads",
  hubAdsSub: "Search · CPL",
  hubWebTitle: "Website",
  hubWebSub: "leads · calls · CRM",
  hubResultTitle: "Outcome",
  hubResultSub: "leads · sales · reporting",
  hubLeads: "Leads",
  hubCpl: "CPL",
  hubCplCurrency: "$",
  hubTop: "Page 1",
  certTitles: ["Google", "CMS Magazine", "Yandex"],
  aboutTitle: "Who we are",
  aboutText:
    "PRIME is a digital marketing agency founded in 2015. We take companies from the first audit through strategy, campaigns, and leads that land in CRM. What we optimize for: rankings, traffic, cost per lead, and attribution you can show a CFO.",
  aboutBullets: [
    "10+ years in market — same brand, same standards",
    "Google Partner for advertising products",
    "SEO fees tied to keywords that actually hold page one",
  ],
  certYandexDesc: "Search partner (regional markets)",
  certGoogleDesc: "Advertising products partner",
  certCmsDesc: "Listed among leading digital agencies",
  servicesTitle: "What we do",
  servicesLead: "Full funnel — or just the channel that matters now",
  services: [
    {
      title: "SEO",
      desc: "We work target keywords onto Google page one. You pay for the ones that hold — not a vague retainer.",
      cat: "seo",
    },
    {
      title: "Google Ads",
      desc: "Search and the wider network. Lower cost per click, more calls worth picking up.",
      cat: "ads",
    },
    {
      title: "Websites",
      desc: "Commercial sites built for leads and sales — service pages and catalogs included.",
      cat: "web",
    },
    {
      title: "Chatbots",
      desc: "Telegram and other channels: menus, alerts, bookings, and hooks into CRM or the site.",
      cat: "bots",
    },
    {
      title: "Online reputation",
      desc: "Google Business Profile, Maps, and review sites — so the brand looks as strong as it performs.",
      cat: "orm",
    },
    {
      title: "Website audit",
      desc: "A hard look at Google Search requirements and what’s blocking growth in results.",
      cat: "audit",
    },
    {
      title: "Website support",
      desc: "Updates, content, payments, tracking — day-to-day care without hiring another developer.",
      cat: "support",
    },
    {
      title: "Marketing analytics",
      desc: "Google Ads, the site, and CRM in one chain — so you see which channel pays for itself.",
      cat: "analytics",
    },
    {
      title: "Pay-per-visit SEO",
      desc: "Grow search visits and pay for the incremental traffic you actually earn.",
      cat: "traffic",
    },
  ],
  flagshipEyebrow: "Flagship · since 2015",
  flagshipTitle: "SEO you pay for when you rank",
  flagshipText:
    "The model we’ve run for over a decade: get target keywords onto Google page one. You pay for phrases that hold — not a vague monthly retainer.",
  flagshipCta: "See how it works",
  flagshipReportAlt: "Rankings report",
  flagshipSerpAlt: "Search results example",
  processTitle: "How we work",
  processLead: "Four steps from audit to more leads",
  process: [
    {
      step: "01",
      title: "Audit & KPIs",
      desc: "We review the site, niche, and competitors — then lock keywords and lead goals.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "An SEO, Google Ads, or build plan with budget and a realistic timeline.",
    },
    {
      step: "03",
      title: "Launch",
      desc: "Campaigns go live, the site improves, CRM and analytics get wired in.",
    },
    {
      step: "04",
      title: "Report & grow",
      desc: "Rankings, leads, CPL — we adjust every month based on the data.",
    },
  ],
  achievementsTitle: "Track record",
  achievementsLead: "Public listings and client results",
  statTop5Sub: "digital marketing listing",
  statTop100Sub: "agency listings",
  statClientsSub: "clients across industries",
  cmsNote:
    "* Agency listings from public rankings. We’re also a Google Partner for advertising products.",
  allCases: "See all work",
  clientsTitle: "Clients",
  clientsLead: "Automotive, healthcare, retail, and more — a few of the teams we work with",
  partnersSearch: "Google Partner · search & ads ecosystem",
  industriesTitle: "Industries we know",
  industriesLead: "Deep vertical experience — ask us for the shortlist",
  industries: [
    { name: "Manufacturing", image: industryImages.production },
    { name: "Retail", image: industryImages.shops },
    { name: "B2B services", image: industryImages.b2b },
  ],
  faqTitle: "FAQ",
  faq: [
    {
      q: "How does SEO billing work?",
      a: "After prep and the plan’s starter period, you pay for days a keyword actually holds Google page one. The keyword set is locked after the audit — no filler retainer.",
    },
    {
      q: "How soon until first leads?",
      a: "Google Ads often starts delivering in 1–2 weeks. SEO: about a month of prep; page-one growth is planned over 2–6 months, month by month — not a guaranteed date.",
    },
    {
      q: "Do you only work in one market?",
      a: "No. We run projects worldwide. Calls and reporting are online, and we work across time zones.",
    },
    {
      q: "Can I buy just one service?",
      a: "Yes — SEO, Google Ads, a website, or analytics on their own. After the audit we can also propose a full stack.",
    },
    {
      q: "What’s included in support?",
      a: "Content, small builds, tracking, hosting payments, and routine fixes — without spinning up a separate freelancer bench.",
    },
    {
      q: "How do we start?",
      a: "Send a note. We’ll spend 30 minutes on your niche — no hard sell.",
    },
  ],
  ctaTitle: "Let’s talk",
  ctaLead:
    "Plenty of agencies from the mid-2010s are gone. We’re still here — same principles, results you can measure in Google.",
  ctaOfficeAlt: "PRIME office",
  ctaPoints: [
    "In digital marketing since 2015",
    "Still standing while others closed",
    "30-minute niche review · no obligation",
  ],
  formName: "Name",
  formPhone: "Phone",
  formService: "Service",
  formServicePlaceholder: "Pick a service",
  formMessage: "What’s the job? (optional)",
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

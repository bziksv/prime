/** Визуальные ассеты v6 «Портал» — AI-фото локально (сток запрещён). */
export const v6Photos = {
  heroTeam: "/images/v6/photos/hero-team.jpg",
  heroOffice: "/images/v6/photos/hero-office.jpg",
  heroWorkspace: "/images/v6/photos/hero-workspace.jpg",
  caseManufacturing: "/images/v6/photos/case-manufacturing.jpg",
  caseAds: "/images/v6/photos/case-ads.jpg",
  caseEcom: "/images/v6/photos/case-ecom.jpg",
  flagSeo: "/images/v6/photos/flag-seo.jpg",
  contactOffice: "/images/v6/photos/contact-cta.jpg",
  clientsBanner: "/images/v6/photos/clients-banner.jpg",
  compareAfter: "/images/v6/photos/case-ads.jpg",
  compareBefore: "/images/v6/photos/compare-before.jpg",
  midCta: "/images/v6/photos/mid-cta.jpg",
  caseB2b: "/images/v6/photos/case-b2b.jpg",
  caseAutoservice: "/images/v6/photos/case-autoservice.jpg",
  industryBuild: "/images/v6/industries/stroitelstvo.jpg",
  industryBeauty: "/images/v6/industries/krasota.jpg",
  industryAuto: "/images/v6/industries/avto.jpg",
  industryMed: "/images/v6/industries/medicina.jpg",
  industryEdu: "/images/v6/industries/obrazovanie.jpg",
  industrySport: "/images/v6/industries/sport.jpg",
} as const;

export const v6CompareImages = {
  before: v6Photos.compareBefore,
  after: v6Photos.compareAfter,
} as const;

export const v6PhotoBand = [
  v6Photos.heroTeam,
  v6Photos.heroWorkspace,
  v6Photos.caseManufacturing,
  v6Photos.caseAds,
  v6Photos.caseEcom,
  v6Photos.heroOffice,
] as const;

export const v6Icons = {
  logoMark: "/images/v6/logo-mark.png",
  heroDashboard: "/images/v6/hero-dashboard.svg",
  screenSeo: "/images/v6/screen-seo.svg",
  screenAds: "/images/v6/screen-ads.svg",
  screenAnalytics: "/images/v6/screen-analytics.svg",
  screenSite: "/images/v6/screen-site.svg",
  badgeTop5: "/images/v6/badge-top5.svg",
  badgeTop100: "/images/v6/badge-top100.svg",
  serpMock: "/images/v6/serp-mock.svg",
  seoReport: "/images/v6/seo-report.svg",
  officeMap: "/images/v6/office-map.svg",
  ogCover: "/images/v6/og-cover.svg",
  checkPrime: "/images/v6/check-prime.svg",
  sparkMini: "/images/v6/spark-mini.svg",
  iconSeo: "/images/v6/icon-seo.svg",
  iconAds: "/images/v6/icon-ads.svg",
  iconWeb: "/images/v6/icon-web.svg",
  checklistCover: "/images/v6/checklist-cover.svg",
  iconVk: "/images/v6/icon-vk.svg",
  iconTelegram: "/images/v6/icon-telegram.svg",
  sitePreview: "/images/v6/site-preview.svg",
} as const;

export const v6ShowcaseScreens = [
  { src: v6Icons.screenSeo, label: "Позиции SEO", x: "4%", y: "8%", z: 2 },
  { src: v6Icons.screenAds, label: "Директ", x: "38%", y: "18%", z: 3 },
  { src: v6Icons.screenAnalytics, label: "Аналитика", x: "62%", y: "6%", z: 4 },
  { src: v6Icons.seoReport, label: "Отчёт", x: "22%", y: "42%", z: 5 },
] as const;

export const v6ModuleBanners: Record<string, string> = {
  seo: "/images/v6/covers/seo.svg",
  ads: "/images/v6/covers/ads.svg",
  web: "/images/v6/covers/web.svg",
  other: "/images/v6/covers/orm.svg",
  orm: "/images/v6/covers/orm.svg",
  audit: "/images/v6/covers/audit.svg",
  banner: "/images/v6/covers/banner.svg",
  support: "/images/v6/covers/support.svg",
  analytics: "/images/v6/covers/analytics.svg",
  traffic: "/images/v6/covers/traffic.svg",
};

export const v6ServiceIcons: Record<string, string> = {
  seo: v6Icons.screenSeo,
  ads: v6Icons.screenAds,
  web: v6Icons.screenSite,
  other: v6Icons.screenAnalytics,
  orm: v6Icons.screenAnalytics,
  audit: v6Icons.iconSeo,
  banner: v6Icons.screenAds,
  support: v6Icons.screenSite,
  analytics: v6Icons.screenAnalytics,
  traffic: v6Icons.screenSeo,
};

export const v6PartnerLogos = [
  "/images/v6/partner-yandex.svg",
  "/images/v6/partner-google.svg",
  "/images/v6/partner-cms.svg",
] as const;

export const v6ClientAvatars = [
  "/images/v6/avatar-1.jpg",
  "/images/v6/avatar-2.jpg",
  "/images/v6/avatar-3.jpg",
  "/images/v6/avatar-1.jpg",
  "/images/v6/avatar-2.jpg",
  "/images/v6/avatar-3.jpg",
] as const;

export const v6BlogPosts = [
  {
    title: "SEO в 2026: оплата по факту ТОП-10",
    excerpt: "Как фиксировать фразы и не платить за отчёты без позиций.",
    image: v6Photos.flagSeo,
    date: "12 мая",
  },
  {
    title: "Директ и CRM: цена звонка",
    excerpt: "Связка рекламы и CRM снижает CPL без потери объёма.",
    image: v6Photos.caseAds,
    date: "3 мая",
  },
  {
    title: "Сквозная аналитика для e-commerce",
    excerpt: "Видимость канала до оплаты заказа.",
    image: v6Photos.caseEcom,
    date: "28 апр",
  },
] as const;

/** Все направления — AI-фото локально, единая сетка без «пустых» карточек. */
export const v6IndustriesFeatured = [
  { name: "Производство", image: "/images/v6/industries/proizvodstvo.jpg" },
  { name: "Магазины", image: "/images/v6/industries/magaziny.jpg" },
  { name: "Бизнес / B2B", image: "/images/v6/industries/b2b.jpg" },
  { name: "Строительство", image: "/images/v6/industries/stroitelstvo.jpg" },
  { name: "Красота и здоровье", image: "/images/v6/industries/krasota.jpg" },
  { name: "Транспорт", image: "/images/v6/industries/transport.jpg" },
  { name: "Медицина", image: "/images/v6/industries/medicina.jpg" },
  { name: "Наука и образование", image: "/images/v6/industries/obrazovanie.jpg" },
  { name: "Спорт", image: "/images/v6/industries/sport.jpg" },
  { name: "Авто", image: "/images/v6/industries/avto.jpg" },
  { name: "Безопасность", image: "/images/v6/industries/bezopasnost.jpg" },
  { name: "Культура и искусство", image: "/images/v6/industries/kultura.jpg" },
  { name: "Отдых и туризм", image: "/images/v6/industries/turizm.jpg" },
  { name: "Реклама и полиграфия", image: "/images/v6/industries/reklama.jpg" },
  { name: "Семья и дети", image: "/images/v6/industries/semya.jpg" },
] as const;

export const v6ResultsWall = [
  { src: v6Photos.caseManufacturing, label: "+42% SEO" },
  { src: v6Photos.caseAds, label: "−28% CPL" },
  { src: v6Photos.heroTeam, label: "70+ клиентов" },
] as const;

export const v6Cases = [
  {
    id: "mfg",
    name: "Производство",
    metric: "+42% заявок",
    label: "SEO · 5 мес.",
    image: v6Photos.caseManufacturing,
    detail: "ТОП-10 по 80 фразам. Заявки +42%, CPL −19%.",
  },
  {
    id: "ads",
    name: "Услуги B2C",
    metric: "−28% CPL",
    label: "Директ · CRM",
    image: v6Photos.caseAds,
    detail: "Реструктура кампаний и минус-слова. CPL −28% при том же бюджете.",
  },
  {
    id: "b2b",
    name: "B2B",
    metric: "С нуля",
    label: "Сайт + SEO",
    image: v6Photos.caseB2b,
    detail: "Лендинг и SEO с нуля. Первые лиды с 3-го месяца.",
  },
  {
    id: "ecom",
    name: "E-commerce",
    metric: "+18% ROI",
    label: "Директ · фиды",
    image: v6Photos.caseEcom,
    detail: "Фиды и ретаргет. ROI +18% к прошлому кварталу.",
  },
] as const;

export const v6CompareRows = [
  { label: "Оплата SEO", prime: "По факту ТОП-10", other: "Абонент" },
  { label: "Отчёт", prime: "Позиции + заявки", other: "Только позиции" },
  { label: "Аналитика", prime: "Сквозная", other: "Разрозненно" },
  { label: "Связка CRM", prime: "Включена", other: "Отдельно" },
] as const;

export const v6Testimonials = [
  {
    quote: "Платим только за фразы в ТОП-10 — отчёты совпадают с заявками.",
    name: "Алексей К.",
    role: "Директор · производство",
    avatar: v6ClientAvatars[0],
  },
  {
    quote: "Снизили CPL без сокращения бюджета. Видим цену звонка в CRM.",
    name: "Марина С.",
    role: "Маркетинг · услуги",
    avatar: v6ClientAvatars[1],
  },
  {
    quote: "Запустили сайт и SEO с нуля — лиды пошли на третий месяц.",
    name: "Игорь В.",
    role: "Владелец · B2B",
    avatar: v6ClientAvatars[2],
  },
] as const;

export const v6AboutPhotos = [
  v6Photos.heroOffice,
  v6Photos.heroTeam,
  v6Photos.heroWorkspace,
] as const;

export const v6ClientBrands = [
  { name: "KIA Мотор Ленд", image: "/images/v6/clients/kia.png" },
  { name: "Jeep Воронеж", image: "/images/v6/clients/jeep.png" },
  { name: "Barokko", image: "/images/v6/clients/barokko.png" },
  { name: "Торгмаг", image: "/images/v6/clients/torgmag.png" },
  { name: "Volvo Мотор Ленд", image: "/images/v6/clients/volvo.png" },
  { name: "Аквасан", image: "/images/v6/clients/akvasan.png" },
  { name: "Альмамед", image: "/images/v6/clients/almamed.png" },
  { name: "Belgee Прагматика", image: "/images/v6/clients/belgee.png" },
  { name: "Omoda", image: "/images/v6/clients/omoda.png" },
  { name: "Geely Мотор Ленд", image: "/images/v6/clients/geely.png" },
  { name: "Nissan Мотор Ленд", image: "/images/v6/clients/nissan.png" },
  { name: "Проклимат", image: "/images/v6/clients/proclimate.png" },
  { name: "Полимер", image: "/images/v6/clients/polimer.png" },
  { name: "Химоптторг", image: "/images/v6/clients/himopttorg.png" },
  { name: "Вторма", image: "/images/v6/clients/vtorma.png" },
] as const;

export const v6Faq = [
  {
    q: "Как работает оплата SEO?",
    a: "После подготовки и стартового периода тарифа платите за дни, когда фраза реально в ТОП-10. Ядро фиксируем после аудита — без абонентской «воды».",
    icon: v6Icons.iconSeo,
  },
  {
    q: "Сколько до первых заявок?",
    a: "Контекст — часто от 1–2 недель. SEO: подготовка ~1 мес., выход в ТОП планово 2–6 мес. с приростом от месяца к месяцу — не гарантия даты.",
    icon: v6Icons.iconAds,
  },
  {
    q: "Работаете только в одном городе?",
    a: "База и команда в регионе, TOP-5 по CMS Magazine. Проекты ведём по всей России — отчёты и созвоны онлайн.",
    icon: v6Icons.checkPrime,
  },
  {
    q: "Можно заказать одну услугу?",
    a: "Да — SEO, Директ, сайт или аналитика отдельно. Сквозную связку предложим по аудиту.",
    icon: v6Icons.iconWeb,
  },
  {
    q: "Что входит в техподдержку?",
    a: "Контент, доработки, счётчики, оплата хостинга и мелкие правки — без отдельного «разработчика на аутсорсе».",
    icon: v6Icons.screenSite,
  },
  {
    q: "Как начать?",
    a: "Оставьте заявку или позвоните — разбор ниши за 30 минут, без обязательств.",
    icon: v6Icons.logoMark,
  },
] as const;

export const v6Jobs = [
  {
    title: "SEO-специалист",
    type: "Офис · Воронеж",
    image: v6Photos.flagSeo,
  },
  {
    title: "Менеджер контекстной рекламы",
    type: "Офис / гибрид",
    image: v6Photos.caseAds,
  },
  {
    title: "Веб-разработчик",
    type: "Удалённо",
    image: v6Photos.heroWorkspace,
  },
] as const;

export const v6Portfolio = [
  {
    title: "Металлоконструкции",
    cat: "SEO + сайт",
    image: v6Photos.caseManufacturing,
    screen: v6Icons.sitePreview,
  },
  {
    title: "Интернет-магазин",
    cat: "Директ + фиды",
    image: v6Photos.caseEcom,
    screen: v6Icons.screenAds,
  },
  {
    title: "B2B услуги",
    cat: "Лендинг + SEO",
    image: v6Photos.caseB2b,
    screen: v6Icons.screenSite,
  },
  {
    title: "Медицинский центр",
    cat: "SEO + репутация",
    image: v6Photos.heroTeam,
    screen: v6Icons.screenSeo,
  },
  {
    title: "Логистика",
    cat: "Контекст",
    image: v6Photos.compareAfter,
    screen: v6Icons.screenAnalytics,
  },
  {
    title: "Строительство",
    cat: "SEO",
    image: v6Photos.flagSeo,
    screen: v6Icons.seoReport,
  },
] as const;

export const v6IndustryPhotoPool = [
  v6Photos.heroOffice,
  v6Photos.heroWorkspace,
  v6Photos.caseAds,
  v6Photos.contactOffice,
  v6Photos.clientsBanner,
  v6Photos.caseEcom,
  v6Photos.caseManufacturing,
  v6Photos.heroTeam,
  v6Photos.compareAfter,
] as const;

export const v6NavIcons: Record<string, string> = {
  "#about": v6Icons.logoMark,
  "#cases": v6Icons.screenSeo,
  "#services": v6Icons.heroDashboard,
  "#partners": v6Icons.checkPrime,
  "#jobs": v6Icons.screenSite,
  "#cta": v6Icons.officeMap,
};

export const v6Process = [
  {
    step: "01",
    title: "Аудит и KPI",
    desc: "Смотрим сайт, нишу и конкурентов. Фиксируем фразы и целевые заявки.",
    icon: v6Icons.iconSeo,
    image: v6Photos.flagSeo,
  },
  {
    step: "02",
    title: "Стратегия",
    desc: "План SEO, рекламы или разработки — с бюджетом и прогнозом по срокам.",
    icon: v6Icons.heroDashboard,
    image: v6Photos.heroWorkspace,
  },
  {
    step: "03",
    title: "Запуск",
    desc: "Ведём кампании и доработки сайта. Связка с CRM и счётчиками.",
    icon: v6Icons.screenAds,
    image: v6Photos.caseAds,
  },
  {
    step: "04",
    title: "Отчёт и рост",
    desc: "Позиции, заявки, CPL. Корректируем каждый месяц по фактам.",
    icon: v6Icons.seoReport,
    image: v6Photos.heroTeam,
  },
] as const;

export const v6PartnershipCerts = [
  {
    title: "Яндекс",
    desc: "Сертифицированный партнёр",
    logo: v6PartnerLogos[0],
    badge: v6Icons.badgeTop5,
  },
  {
    title: "Google",
    desc: "Партнёр рекламных продуктов",
    logo: v6PartnerLogos[1],
    badge: v6Icons.badgeTop100,
  },
  {
    title: "CMS Magazine",
    desc: "TOP-100 агентств РФ",
    logo: v6PartnerLogos[2],
    badge: v6Icons.checkPrime,
  },
] as const;

export const v6ActivityFeed = [
  { text: "+12 фраз в ТОП-10", tag: "SEO", icon: v6Icons.screenSeo },
  { text: "Заявка из Директа", tag: "ADS", icon: v6Icons.screenAds },
  { text: "Отчёт отправлен клиенту", tag: "RPT", icon: v6Icons.seoReport },
] as const;

export const v6Team = [
  {
    name: "Анна",
    role: "SEO-стратег",
    photo: "/images/v6/testimonials/t1.jpg",
  },
  {
    name: "Дмитрий",
    role: "Контекст",
    photo: "/images/v6/testimonials/t2.jpg",
  },
  {
    name: "Елена",
    role: "Аналитика",
    photo: "/images/v6/testimonials/t3.jpg",
  },
  {
    name: "Павел",
    role: "Разработка",
    photo: "/images/v6/testimonials/t4.jpg",
  },
] as const;

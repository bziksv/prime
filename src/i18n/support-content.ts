import type { Locale } from "./locales";
import {
  supportWhy,
  supportServices,
  supportServiceGroups,
  supportRoles,
  supportTariffs,
  supportPerks,
  supportOutcomes,
  supportNos,
  supportFaq,
} from "../data/support-service";

export type SupportWhyItem = {
  id: string;
  title: string;
  text: string;
  staff: number;
  support: number;
  staffLabel: string;
  supportLabel: string;
};

export type SupportServiceGroup = { id: string; label: string };
export type SupportService = { text: string; group: string };
export type SupportTariff = {
  id: string;
  name: string;
  hours: number;
  rate: string;
  price: string;
  featured: boolean;
  fit: string;
};

export type SupportContent = {
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
  uptimeLabel: string;
  uptimeHint: string;
  latencyLabel: string;
  meterAvailability: string;
  meterAvailabilityValue: string;
  meterHoursPool: string;
  meterHoursPoolValue: string;
  meterTasks: string;
  meterTasksValue: string;
  whyTitle: string;
  whyLead: string;
  why: SupportWhyItem[];
  servicesTitle: string;
  servicesLead: string;
  serviceGroups: SupportServiceGroup[];
  services: SupportService[];
  servicesHintPrefix: string;
  filterLabels: Record<string, string>;
  perks: { id: string; title: string; text: string; metric: string; metricLabel: string }[];
  tariffsTitle: string;
  tariffsLeadBefore: string;
  roles: string[];
  rolesConjunction: string;
  rolesSeparator: string;
  hoursGaugeLabel: string;
  hoursUnit: string;
  hourFew: string;
  hourMany: string;
  monthSuffix: string;
  tariffs: SupportTariff[];
  tariffBadge: string;
  tariffChoosePrefix: string;
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
  ctaTitle: string;
  ctaLead: string;
  ctaPickPrefix: string;
  ctaPickDefault: string;
  formName: string;
  formPhone: string;
  formSite: string;
  formTariff: string;
  formTariffConsult: string;
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const supportRu: SupportContent = {
  path: "/tehpodderzhka-sayta/",
  metaTitle: "Техподдержка сайта — ПРАЙМ",
  metaDescription:
    "Техподдержка и сопровождение сайта: доработки, контент, дизайн, оплаты, ускорение. Тарифы от 3 до 50 часов с персональным PM и мониторингом.",
  serviceName: "Техподдержка сайта",
  serviceType: "Техподдержка сайта",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Техподдержка сайта",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroTitleBefore: "Техподдержка сайта — сопровождение ",
  heroTitleAccent: "без штата на зарплате",
  heroLead:
    "Доработки, контент, дизайн, оплаты и ускорение. Пул часов специалистов + персональный PM и мониторинг доступности.",
  heroCtaPrimary: "Смотреть тарифы",
  heroCtaSecondary: "Получить консультацию",
  uptimeLabel: "UPTIME · OK",
  uptimeHint: "сайт на сопровождении ·",
  latencyLabel: "latency",
  meterAvailability: "availability",
  meterAvailabilityValue: "99.9%",
  meterHoursPool: "hours pool",
  meterHoursPoolValue: "ready",
  meterTasks: "tasks / week",
  meterTasksValue: "steady",
  whyTitle: "Почему выгоднее отдать сайт в профильную команду",
  whyLead:
    "Наведите на карточку — сравните «штат» и поддержку на шкале затрат и сроков.",
  why: supportWhy.map((w) => ({ ...w })),
  servicesTitle: "Что входит в поддержку",
  servicesLead:
    "Фильтруйте по типу работ — от мелких правок до переноса CMS и ускорения.",
  serviceGroups: supportServiceGroups.map((g) => ({ ...g })),
  services: supportServices.map((s) => ({ ...s })),
  servicesHintPrefix: "Фильтр:",
  filterLabels: {
    all: "все направления",
    dev: "разработка",
    content: "контент",
    design: "дизайн",
    ops: "операции",
  },
  perks: supportPerks.map((p) => ({ ...p })),
  tariffsTitle: "Тарифные планы",
  tariffsLeadBefore: "Выберите объём часов — шкала покажет пул. В каждый тариф входят:",
  roles: [...supportRoles],
  rolesConjunction: " и ",
  rolesSeparator: ", ",
  hoursGaugeLabel: "Пул часов / месяц",
  hoursUnit: "ч",
  hourFew: "часа",
  hourMany: "часов",
  monthSuffix: "/ месяц",
  tariffs: supportTariffs.map((t) => ({ ...t })),
  tariffBadge: "Хит",
  tariffChoosePrefix: "Выбрать",
  outcomesKicker: "Результат",
  outcomesTitle: "Что меняется с сопровождением",
  outcomesLead: "Не штат на ФОТ — предсказуемый пул часов и одна точка входа.",
  outcomes: supportOutcomes.map((o) => ({ ...o })),
  nosKicker: "Честно",
  nosTitle: "Чего не обещаем",
  nosLead: "Чтобы тариф поддержки не путали с разработкой «с нуля» и безлимитом.",
  nos: supportNos.map((n) => ({ ...n })),
  faqKicker: "FAQ",
  faqTitle: "Частые вопросы",
  faqLead: "Часы, выбор тарифа, разовые задачи и CMS.",
  faq: supportFaq.map((f) => ({ ...f })),
  ctaTitle: "Нужен сайт на сопровождении?",
  ctaLead:
    "Перезвоним и проконсультируем по тарифу: подберём объём часов под ваши задачи — без раздувания штата.",
  ctaPickPrefix: "Выбран тариф:",
  ctaPickDefault: "Т-10 · 26 500 ₽",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formTariff: "Интересующий тариф",
  formTariffConsult: "Не знаю — нужна консультация",
  formMessage: "Какие задачи на сопровождении?",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на техподдержку принята — свяжемся с вами.",
  formSource: "tehpodderzhka-sayta",
  footerBrand: "ПРАЙМ",
  footerTagline: "Техподдержка · сопровождение · мониторинг",
};

const supportEn: SupportContent = {
  path: "/en/support/",
  metaTitle: "Website support — PRIME",
  metaDescription:
    "Website support and maintenance: updates, content, design, payments, performance. Plans from 3 to 50 hours with a dedicated PM and uptime monitoring.",
  serviceName: "Website support",
  serviceType: "Website support",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Website support",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Website support — ongoing care ",
  heroTitleAccent: "without an in-house payroll",
  heroLead:
    "Updates, content, design, payments and performance. A shared specialist pool + dedicated PM and uptime monitoring.",
  heroCtaPrimary: "View plans",
  heroCtaSecondary: "Get a consultation",
  uptimeLabel: "UPTIME · OK",
  uptimeHint: "site under care ·",
  latencyLabel: "latency",
  meterAvailability: "availability",
  meterAvailabilityValue: "99.9%",
  meterHoursPool: "hours pool",
  meterHoursPoolValue: "ready",
  meterTasks: "tasks / week",
  meterTasksValue: "steady",
  whyTitle: "Why a specialist team beats hiring in-house",
  whyLead: "Hover a card — compare in-house cost and timelines vs a support plan.",
  why: [
    {
      id: "hire",
      title: "Hiring is more expensive",
      text: "Proper site care often needs a developer, content manager, designer and project manager — not every company wants that payroll.",
      staff: 85,
      support: 32,
      staffLabel: "team payroll",
      supportLabel: "support plan",
    },
    {
      id: "tax",
      title: "Overhead and hidden costs",
      text: "Workstations, taxes, sick leave and benefits — the hidden cost of an internal team that is easy to underestimate.",
      staff: 70,
      support: 18,
      staffLabel: "hidden spend",
      supportLabel: "included in plan",
    },
    {
      id: "skill",
      title: "Skills and control",
      text: "Without experience it is hard to hire and scope work. In practice: an in-house developer spent six months on an optional ERP sync at $550+/mo — a specialist team closed the same scope in three weeks.",
      staff: 90,
      support: 28,
      staffLabel: "in-house timeline",
      supportLabel: "specialist timeline",
    },
  ],
  servicesTitle: "What support covers",
  servicesLead:
    "Filter by work type — from small edits to CMS migration and performance tuning.",
  serviceGroups: [
    { id: "all", label: "All" },
    { id: "dev", label: "Development" },
    { id: "content", label: "Content" },
    { id: "design", label: "Design" },
    { id: "ops", label: "Operations" },
  ],
  services: [
    { text: "Site updates and fixes", group: "dev" },
    { text: "New features", group: "dev" },
    { text: "Broken functionality repair", group: "dev" },
    { text: "CMS migration", group: "dev" },
    { text: "Performance optimization", group: "dev" },
    { text: "Payment gateway setup", group: "dev" },
    { text: "Copywriting", group: "content" },
    { text: "Product catalog updates", group: "content" },
    { text: "News, articles, images and tables", group: "content" },
    { text: "Design changes", group: "design" },
    { text: "Template refinements", group: "design" },
    { text: "Google Analytics and Tag Manager setup", group: "ops" },
  ],
  servicesHintPrefix: "Filter:",
  filterLabels: {
    all: "all areas",
    dev: "development",
    content: "content",
    design: "design",
    ops: "operations",
  },
  perks: [
    {
      id: "pm",
      title: "Dedicated project manager",
      text: "One point of contact — tasks do not get lost between specialists.",
      metric: "1",
      metricLabel: "point of contact",
    },
    {
      id: "monitor",
      title: "Site monitoring",
      text: "We watch uptime — so problems are not noticed only by your customers.",
      metric: "24/7",
      metricLabel: "observation",
    },
    {
      id: "pool",
      title: "Hour pool for every task",
      text: "Hours shared across developer, designer, content and PM.",
      metric: "4",
      metricLabel: "roles in the pool",
    },
  ],
  tariffsTitle: "Plans",
  tariffsLeadBefore: "Pick your hour volume — the gauge shows the pool. Every plan includes:",
  roles: ["Developer", "Designer", "Content manager", "Project manager"],
  rolesConjunction: " and ",
  rolesSeparator: ", ",
  hoursGaugeLabel: "Hour pool / month",
  hoursUnit: "h",
  hourFew: "hours",
  hourMany: "hours",
  monthSuffix: "/ month",
  tariffs: [
    {
      id: "t3",
      name: "T-3",
      hours: 3,
      rate: "$33/h",
      price: "$100",
      featured: false,
      fit: "Small edits and content",
    },
    {
      id: "t5",
      name: "T-5",
      hours: 5,
      rate: "$31/h",
      price: "$155",
      featured: false,
      fit: "Regular updates",
    },
    {
      id: "t10",
      name: "T-10",
      hours: 10,
      rate: "$29/h",
      price: "$295",
      featured: true,
      fit: "Best fit for most sites",
    },
    {
      id: "t20",
      name: "T-20",
      hours: 20,
      rate: "$28/h",
      price: "$555",
      featured: false,
      fit: "Active store / growth",
    },
    {
      id: "t50",
      name: "T-50",
      hours: 50,
      rate: "$26/h",
      price: "$1,305",
      featured: false,
      fit: "Large product / integrations",
    },
  ],
  tariffBadge: "Popular",
  tariffChoosePrefix: "Choose",
  outcomesKicker: "Outcome",
  outcomesTitle: "What changes with ongoing support",
  outcomesLead: "Not payroll overhead — a predictable hour pool and one point of contact.",
  outcomes: [
    {
      title: "The site does not stall",
      text: "Updates, content and small fixes go through one contact — no chasing freelancers.",
    },
    {
      title: "Predictable budget",
      text: "A monthly hour package instead of a bloated team: developer, design, content and PM in one plan.",
    },
    {
      title: "Live visibility",
      text: "Uptime monitoring and clear task status — issues do not surface only at your end.",
    },
  ],
  nosKicker: "Honestly",
  nosTitle: "What we do not promise",
  nosLead: "So support plans are not confused with greenfield builds or unlimited scope.",
  nos: [
    {
      title: "Not a full product build from scratch",
      text: "A major redesign or new product is a separate project. Support covers care and evolution of the current site.",
    },
    {
      title: "Not unlimited “do everything now”",
      text: "Work is capped by plan hours. Larger tasks are planned and the package can grow if needed.",
    },
    {
      title: "Not datacenter-grade SLA",
      text: "We monitor uptime and respond by process, but hosting and infrastructure stay the client’s responsibility unless agreed otherwise.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  faqLead: "Hours, plan choice, one-off tasks and CMS.",
  faq: [
    {
      q: "What counts toward plan hours?",
      a: "Updates, content, design, small fixes, payments, performance and related tasks. Hours are shared across developer, designer, content manager and PM.",
    },
    {
      q: "How to choose — T-3 or T-10?",
      a: "T-3 — small edits and content. T-10 — the usual sweet spot for regular work. Active stores or many integrations — look at T-20 / T-50. You can start with a consultation.",
    },
    {
      q: "Do unused hours roll over?",
      a: "Rollover and balance rules are fixed in the contract for your plan. At kickoff we explain how hours are tracked and reported.",
    },
    {
      q: "Can I request a one-off task without a plan?",
      a: "Yes — larger one-off work is often scoped separately. A plan makes sense when tasks are ongoing and you want one owner.",
    },
    {
      q: "Which CMS platforms do you support?",
      a: "Typically WordPress, Bitrix, Webasyst and custom stacks. Before onboarding we review access and your site stack.",
    },
  ],
  ctaTitle: "Need ongoing site care?",
  ctaLead:
    "Submit a request — we’ll recommend a plan and hour volume for your tasks without bloating headcount.",
  ctaPickPrefix: "Selected plan:",
  ctaPickDefault: "T-10 · $295",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formTariff: "Plan of interest",
  formTariffConsult: "Not sure — need a consultation",
  formMessage: "What tasks need ongoing support?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your support request is in — we’ll get back to you.",
  formSource: "en-support",
  footerBrand: "PRIME",
  footerTagline: "Website support · maintenance · monitoring",
};

export function getSupportContent(locale: Locale): SupportContent {
  if (locale === "en") return supportEn;
  return supportRu;
}

export function supportPath(locale: Locale): string {
  return getSupportContent(locale).path;
}

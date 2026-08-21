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
  formAgreeConsent: string;
  formAgreeMid: string;
  formAgreeData: string;
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
  formAgreeBefore: "Даю",
  formAgreeConsent: "согласие",
  formAgreeMid: "на обработку",
  formAgreeData: "персональных данных",
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
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Website support — keep the site moving ",
  heroTitleAccent: "without a full-time payroll",
  heroLead:
    "Updates, content, design, payments, and performance. A shared specialist hour pool, a dedicated PM, and uptime monitoring.",
  heroCtaPrimary: "View plans",
  heroCtaSecondary: "Talk to us",
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
  whyLead: "Hover a card — compare in-house cost and timelines vs. a support plan.",
  why: [
    {
      id: "hire",
      title: "Hiring costs more",
      text: "Solid site care usually needs a developer, content manager, designer, and project manager — not every company wants that on payroll.",
      staff: 85,
      support: 32,
      staffLabel: "team payroll",
      supportLabel: "support plan",
    },
    {
      id: "tax",
      title: "Overhead and hidden costs",
      text: "Workstations, taxes, PTO, and benefits — the quiet cost of an internal team that’s easy to underestimate.",
      staff: 70,
      support: 18,
      staffLabel: "hidden spend",
      supportLabel: "included in plan",
    },
    {
      id: "skill",
      title: "Skills and control",
      text: "Without the right experience, hiring and scoping are hard. Real example: an in-house developer spent six months on an optional ERP sync at $550+/mo — a specialist team closed the same scope in three weeks.",
      staff: 90,
      support: 28,
      staffLabel: "in-house timeline",
      supportLabel: "specialist timeline",
    },
  ],
  servicesTitle: "What’s covered",
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
    { text: "Bug and breakage fixes", group: "dev" },
    { text: "CMS migration", group: "dev" },
    { text: "Performance optimization", group: "dev" },
    { text: "Payment gateway setup", group: "dev" },
    { text: "Copywriting", group: "content" },
    { text: "Product catalog updates", group: "content" },
    { text: "News, articles, images, and tables", group: "content" },
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
      text: "One point of contact — tasks don’t get lost between specialists.",
      metric: "1",
      metricLabel: "point of contact",
    },
    {
      id: "monitor",
      title: "Site monitoring",
      text: "We watch uptime — so your customers aren’t the ones who notice first.",
      metric: "24/7",
      metricLabel: "monitoring",
    },
    {
      id: "pool",
      title: "Hour pool for every task",
      text: "Hours shared across developer, designer, content, and PM.",
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
      rate: "$50/h",
      price: "$150",
      featured: false,
      fit: "Small edits and content",
    },
    {
      id: "t5",
      name: "T-5",
      hours: 5,
      rate: "$47/h",
      price: "$233",
      featured: false,
      fit: "Regular updates",
    },
    {
      id: "t10",
      name: "T-10",
      hours: 10,
      rate: "$44/h",
      price: "$443",
      featured: true,
      fit: "Best fit for most sites",
    },
    {
      id: "t20",
      name: "T-20",
      hours: 20,
      rate: "$42/h",
      price: "$833",
      featured: false,
      fit: "Active store / growth",
    },
    {
      id: "t50",
      name: "T-50",
      hours: 50,
      rate: "$39/h",
      price: "$1,958",
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
      title: "The site doesn’t stall",
      text: "Updates, content, and small fixes go through one contact — no chasing freelancers.",
    },
    {
      title: "Predictable budget",
      text: "A monthly hour package instead of a bloated team: developer, design, content, and PM in one plan.",
    },
    {
      title: "Live visibility",
      text: "Uptime monitoring and clear task status — issues don’t only show up on your end.",
    },
  ],
  nosKicker: "Straight talk",
  nosTitle: "What we don’t promise",
  nosLead: "So a support plan isn’t confused with a greenfield build or unlimited scope.",
  nos: [
    {
      title: "Not a full product build from scratch",
      text: "A major redesign or new product is a separate project. Support covers care and evolution of the site you already have.",
    },
    {
      title: "Not unlimited “do everything now”",
      text: "Work is capped by plan hours. Larger tasks get planned — and the package can grow if you need it.",
    },
    {
      title: "Not datacenter-grade SLA",
      text: "We monitor uptime and respond by process, but hosting and infrastructure stay on you unless we agree otherwise.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  faqLead: "Hours, plan choice, one-off tasks, and CMS.",
  faq: [
    {
      q: "What counts toward plan hours?",
      a: "Updates, content, design, small fixes, payments, performance, and related work. Hours are shared across developer, designer, content manager, and PM.",
    },
    {
      q: "How do I choose — T-3 or T-10?",
      a: "T-3 — small edits and content. T-10 — the usual sweet spot for regular work. Active stores or lots of integrations — look at T-20 / T-50. Happy to start with a consult.",
    },
    {
      q: "Do unused hours roll over?",
      a: "Rollover and balance rules are set in the contract for your plan. At kickoff we walk through how hours are tracked and reported.",
    },
    {
      q: "Can I request a one-off task without a plan?",
      a: "Yes — larger one-off work is often scoped separately. A plan makes sense when tasks are ongoing and you want one owner.",
    },
    {
      q: "Which CMS platforms do you support?",
      a: "Typically WordPress and custom stacks — plus Bitrix or Webasyst when the project needs them. Before onboarding we review access and your stack.",
    },
  ],
  ctaTitle: "Need ongoing site care?",
  ctaLead:
    "Talk to us — we’ll recommend a plan and hour volume for your workload without bloating headcount.",
  ctaPickPrefix: "Selected plan:",
  ctaPickDefault: "T-10 · $443",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formTariff: "Plan of interest",
  formTariffConsult: "Not sure — need a consult",
  formMessage: "What do you need ongoing support for?",
  formAgreeBefore: "I give",
  formAgreeConsent: "consent",
  formAgreeMid: "to the processing of",
  formAgreeData: "personal data",
  formSubmit: "Send request",
  formSuccess: "Thanks! Your support request is in — we’ll be in touch.",
  formSource: "en-support",
  footerBrand: "PRIME",
  footerTagline: "Website support · maintenance · monitoring",
};

const supportEs: SupportContent = {
  path: "/es/support/",
  metaTitle: "Soporte de sitios web — PRIME",
  metaDescription:
    "Soporte y mantenimiento de sitios web: actualizaciones, contenido, diseño, pagos, rendimiento. Planes de 3 a 50 horas con un PM dedicado y monitoreo de disponibilidad.",
  serviceName: "Soporte de sitios web",
  serviceType: "Soporte de sitios web",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "Soporte de sitios web",
  menuLabel: "Menú",
  ctaTop: "Hablemos",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Soporte de sitios web — mantén todo funcionando ",
  heroTitleAccent: "sin armar un equipo interno",
  heroLead:
    "Actualizaciones, contenido, diseño, pagos y rendimiento. Una bolsa de horas compartida entre especialistas, un PM dedicado y monitoreo de disponibilidad.",
  heroCtaPrimary: "Ver planes",
  heroCtaSecondary: "Hablemos",
  uptimeLabel: "UPTIME · OK",
  uptimeHint: "sitio bajo soporte ·",
  latencyLabel: "latencia",
  meterAvailability: "disponibilidad",
  meterAvailabilityValue: "99,9%",
  meterHoursPool: "bolsa de horas",
  meterHoursPoolValue: "lista",
  meterTasks: "tareas / semana",
  meterTasksValue: "constante",
  whyTitle: "Por qué un equipo especializado sale mejor que contratar",
  whyLead:
    "Pasa el cursor sobre cada tarjeta — compara el costo y los plazos de un equipo interno frente a un plan de soporte.",
  why: [
    {
      id: "hire",
      title: "Contratar cuesta más",
      text: "Cuidar bien un sitio suele requerir programador, gestor de contenido, diseñador y project manager — no toda empresa quiere eso en nómina.",
      staff: 85,
      support: 32,
      staffLabel: "nómina del equipo",
      supportLabel: "plan de soporte",
    },
    {
      id: "tax",
      title: "Costos ocultos y gastos generales",
      text: "Equipos, impuestos, vacaciones y beneficios — el costo silencioso de un equipo interno que es fácil subestimar.",
      staff: 70,
      support: 18,
      staffLabel: "gasto oculto",
      supportLabel: "incluido en el plan",
    },
    {
      id: "skill",
      title: "Experiencia y control",
      text: "Sin la experiencia adecuada, contratar y definir el alcance es difícil. Ejemplo real: un programador interno pasó seis meses en una sincronización opcional con ERP de más de $550/mes — un equipo especializado resolvió lo mismo en tres semanas.",
      staff: 90,
      support: 28,
      staffLabel: "plazo interno",
      supportLabel: "plazo del especialista",
    },
  ],
  servicesTitle: "Qué incluye el soporte",
  servicesLead:
    "Filtra por tipo de trabajo — desde ajustes pequeños hasta migración de CMS y optimización de rendimiento.",
  serviceGroups: [
    { id: "all", label: "Todo" },
    { id: "dev", label: "Desarrollo" },
    { id: "content", label: "Contenido" },
    { id: "design", label: "Diseño" },
    { id: "ops", label: "Operaciones" },
  ],
  services: [
    { text: "Actualizaciones y correcciones del sitio", group: "dev" },
    { text: "Nuevas funciones", group: "dev" },
    { text: "Corrección de errores y fallos", group: "dev" },
    { text: "Migración de CMS", group: "dev" },
    { text: "Optimización de rendimiento", group: "dev" },
    { text: "Configuración de pasarelas de pago", group: "dev" },
    { text: "Redacción de textos", group: "content" },
    { text: "Actualización del catálogo de productos", group: "content" },
    { text: "Noticias, artículos, imágenes y tablas", group: "content" },
    { text: "Cambios de diseño", group: "design" },
    { text: "Ajustes de plantillas", group: "design" },
    { text: "Configuración de Google Analytics y Tag Manager", group: "ops" },
  ],
  servicesHintPrefix: "Filtro:",
  filterLabels: {
    all: "todas las áreas",
    dev: "desarrollo",
    content: "contenido",
    design: "diseño",
    ops: "operaciones",
  },
  perks: [
    {
      id: "pm",
      title: "Project manager dedicado",
      text: "Un solo punto de contacto — las tareas no se pierden entre especialistas.",
      metric: "1",
      metricLabel: "punto de contacto",
    },
    {
      id: "monitor",
      title: "Monitoreo del sitio",
      text: "Vigilamos la disponibilidad — así tus clientes no son los primeros en notar un problema.",
      metric: "24/7",
      metricLabel: "monitoreo",
    },
    {
      id: "pool",
      title: "Bolsa de horas para cada tarea",
      text: "Horas compartidas entre programador, diseñador, contenido y PM.",
      metric: "4",
      metricLabel: "roles en la bolsa",
    },
  ],
  tariffsTitle: "Planes",
  tariffsLeadBefore: "Elige el volumen de horas — el medidor muestra la bolsa. Cada plan incluye:",
  roles: ["Programador", "Diseñador", "Gestor de contenido", "Project manager"],
  rolesConjunction: " y ",
  rolesSeparator: ", ",
  hoursGaugeLabel: "Bolsa de horas / mes",
  hoursUnit: "h",
  hourFew: "horas",
  hourMany: "horas",
  monthSuffix: "/ mes",
  tariffs: [
    {
      id: "t3",
      name: "T-3",
      hours: 3,
      rate: "$50/h",
      price: "$150",
      featured: false,
      fit: "Ajustes pequeños y contenido",
    },
    {
      id: "t5",
      name: "T-5",
      hours: 5,
      rate: "$47/h",
      price: "$233",
      featured: false,
      fit: "Actualizaciones periódicas",
    },
    {
      id: "t10",
      name: "T-10",
      hours: 10,
      rate: "$44/h",
      price: "$443",
      featured: true,
      fit: "El mejor punto de partida para la mayoría de sitios",
    },
    {
      id: "t20",
      name: "T-20",
      hours: 20,
      rate: "$42/h",
      price: "$833",
      featured: false,
      fit: "Tienda activa / en crecimiento",
    },
    {
      id: "t50",
      name: "T-50",
      hours: 50,
      rate: "$39/h",
      price: "$1,958",
      featured: false,
      fit: "Producto grande / integraciones",
    },
  ],
  tariffBadge: "Popular",
  tariffChoosePrefix: "Elegir",
  outcomesKicker: "Resultado",
  outcomesTitle: "Qué cambia con soporte continuo",
  outcomesLead: "No es carga de nómina — es una bolsa de horas predecible y un solo punto de contacto.",
  outcomes: [
    {
      title: "El sitio no se estanca",
      text: "Actualizaciones, contenido y ajustes pequeños pasan por un solo contacto — sin perseguir freelancers.",
    },
    {
      title: "Presupuesto predecible",
      text: "Un paquete de horas mensual en vez de un equipo sobredimensionado: programador, diseño, contenido y PM en un solo plan.",
    },
    {
      title: "Visibilidad en tiempo real",
      text: "Monitoreo de disponibilidad y estado claro de las tareas — los problemas no se descubren solo de tu lado.",
    },
  ],
  nosKicker: "Sin rodeos",
  nosTitle: "Qué no prometemos",
  nosLead: "Para que un plan de soporte no se confunda con un desarrollo desde cero ni con un alcance ilimitado.",
  nos: [
    {
      title: "No es un producto nuevo desde cero",
      text: "Un rediseño mayor o un producto nuevo es un proyecto aparte. El soporte cubre el cuidado y la evolución del sitio que ya tienes.",
    },
    {
      title: "No es “todo ilimitado, ya mismo”",
      text: "El trabajo está acotado a las horas del plan. Las tareas grandes se planifican — y el paquete puede crecer si lo necesitas.",
    },
    {
      title: "No es un SLA de nivel datacenter",
      text: "Monitoreamos la disponibilidad y respondemos según un proceso definido, pero el hosting y la infraestructura siguen bajo tu responsabilidad salvo que acordemos otra cosa.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "Preguntas comunes",
  faqLead: "Horas, elección de plan, tareas puntuales y CMS.",
  faq: [
    {
      q: "¿Qué cuenta dentro de las horas del plan?",
      a: "Actualizaciones, contenido, diseño, ajustes pequeños, pagos, rendimiento y trabajo relacionado. Las horas se comparten entre programador, diseñador, gestor de contenido y PM.",
    },
    {
      q: "¿Cómo elijo entre T-3 o T-10?",
      a: "T-3 — ajustes pequeños y contenido. T-10 — el punto ideal para trabajo regular. Tiendas activas o muchas integraciones — mira T-20 / T-50. Con gusto empezamos con una consulta.",
    },
    {
      q: "¿Las horas no usadas se acumulan?",
      a: "Las reglas de acumulación y saldo se definen en el contrato de tu plan. Al arrancar revisamos cómo se registran y reportan las horas.",
    },
    {
      q: "¿Puedo pedir una tarea puntual sin un plan?",
      a: "Sí — el trabajo puntual más grande suele cotizarse aparte. Un plan tiene sentido cuando las tareas son continuas y quieres un solo responsable.",
    },
    {
      q: "¿Con qué plataformas de CMS trabajan?",
      a: "Normalmente WordPress y stacks a medida — además de Bitrix o Webasyst cuando el proyecto lo requiere. Antes de empezar revisamos accesos y tu stack actual.",
    },
  ],
  ctaTitle: "¿Necesitas cuidado continuo para tu sitio?",
  ctaLead:
    "Hablemos — te recomendamos un plan y un volumen de horas para tu carga de trabajo sin inflar el equipo.",
  ctaPickPrefix: "Plan seleccionado:",
  ctaPickDefault: "T-10 · $443",
  formName: "Tu nombre",
  formPhone: "Teléfono",
  formSite: "URL del sitio",
  formTariff: "Plan de interés",
  formTariffConsult: "No estoy seguro — necesito una consulta",
  formMessage: "¿Para qué necesitas soporte continuo?",
  formAgreeBefore: "Doy",
  formAgreeConsent: "consentimiento",
  formAgreeMid: "al tratamiento de",
  formAgreeData: "datos personales",
  formSubmit: "Enviar solicitud",
  formSuccess: "¡Gracias! Recibimos tu solicitud de soporte — te contactaremos.",
  formSource: "es-support",
  footerBrand: "PRIME",
  footerTagline: "Soporte de sitios · mantenimiento · monitoreo",
};

export function getSupportContent(locale: Locale): SupportContent {
  if (locale === "en") return supportEn;
  if (locale === "es") return supportEs;
  return supportRu;
}

export function supportPath(locale: Locale): string {
  return getSupportContent(locale).path;
}

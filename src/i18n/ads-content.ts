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
  metaTitle: "Google Ads — PRIME",
  metaDescription:
    "Google Ads management: strategy, negatives, UTM tracking, and bids. Fixed management fee from $70/mo by media budget — not a percent of spend. Agency fee and ad spend on separate invoices.",
  serviceName: "Google Ads",
  serviceType: "Google Ads management",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Google Ads",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Google Ads — customers from search ",
  heroTitleAccent: "while intent is hot",
  heroLead:
    "Google Ads: strategy, creatives, negatives, and bids. Management is a fixed fee by media budget — from $70 a month. Ad spend and agency work stay on separate invoices.",
  heroCtaPrimary: "Book a consult",
  heroCtaSecondary: "See management fees",
  heroPoints: [
    "Up to $1,100 media budget — management from $70",
    "$1,100–$3,300 — $130",
    "Over $3,300 — $220",
  ],
  heroBids: [
    { title: "Google", label: "Search", width: "78%" },
    { title: "Display", label: "Network", width: "62%" },
    { title: "Bid ↓", label: "optimize", width: "48%" },
  ],
  notFitTitle: "When Google Ads won’t help",
  notFitLead:
    "Straight talk first: if this is you, fix the offer and operations — then run ads.",
  notFitMark: "stop",
  notFit: [
    {
      title: "Weak product quality",
      text: "If the offer or delivery is weak, ads only speed up customer disappointment.",
    },
    {
      title: "No analytics or feedback",
      text: "You don’t tie ad spend to profit and won’t share numbers with the agency.",
    },
    {
      title: "Margin under $25",
      text: "Net margin per sale below ~$25. Exception: subscriptions with clear LTV.",
    },
  ],
  processTitle: "Ready? How we work",
  processLead:
    "From the first call to a working sales channel — not “launch and disappear.”",
  steps: [
    {
      n: "01",
      title: "Talk to us",
      text: "Fill out the form — we start with the goal and budget.",
    },
    {
      n: "02",
      title: "Discovery",
      text: "We map priorities, why CPC varies in your niche, and how we cut cost-per-click early. Contract once scope is clear.",
    },
    {
      n: "03",
      title: "Website audit",
      text: "We check conversion readiness. If the site needs work, we’ll say what. Some findings show up after the first analytics pass.",
    },
    {
      n: "04",
      title: "Campaign strategy",
      text: "Keywords, ads, negatives, CPC targets, daily budget, formats, and Google channels.",
    },
    {
      n: "05",
      title: "Alignment and invoices",
      text: "We lock the USP and formats. Two invoices: agency management and Google ad spend — every dollar stays visible.",
    },
    {
      n: "06",
      title: "Launch in Google Ads",
      text: "Ads live, placement exclusions, UTM on every ad, bid module via API, reporting, and call tracking when needed.",
    },
    {
      n: "07",
      title: "Analytics and split tests",
      text: "After about two weeks we review formats, copy, negatives, exclusions, and Analytics — then adjust and repeat.",
    },
  ],
  edgesTitle: "What sets us apart",
  edgesLead: "Not just “set up Ads” — plumbing built for results.",
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
      text: "Faster than SEO: search demand today, with transparent reporting.",
    },
  ],
  balanceTitle: "Pros and honest cons",
  balanceLead: "Google Ads is fast and transparent — not a magic button.",
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
    "Media budget is paid separately to Google. Agency work is a separate invoice. Management fee depends on monthly media budget — not a percentage of spend.",
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
  tierCta: "Book management",
  includeTitle: "What’s included",
  include: [
    "Strategy and campaign structure in Google Ads",
    "Ads, negatives, placement blacklist",
    "UTM tagging and reporting control",
    "Bid adjustments and optimization from results",
    "Reports and changes after split tests",
  ],
  showCases: false,
  casesTitle: "Google Ads case studies",
  casesLead: "Judge us on real projects — not thank-you notes.",
  casesAll: "All Google Ads cases",
  outcomesTitle: "What you get in practice",
  outcomesLead: "Not impressions for a report — a managed lead channel from search.",
  outcomes: [
    {
      title: "Leads from hot demand",
      text: "People already search for the product — the campaign brings intent, not empty reach.",
    },
    {
      title: "Clear economics",
      text: "Two invoices, UTM, and reports: see media spend, management fee, and what actually drives clicks and leads.",
    },
    {
      title: "Improvement loop",
      text: "Negatives, blacklist, bids, and split tests — not “launch and forget,” but steady optimization.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Fees, platforms, timelines, and site readiness.",
  faq: [
    {
      q: "Why isn’t management a percent of spend?",
      a: "A fixed fee by media budget is fairer: we aren’t incentivized to inflate spend for our commission. Services and media stay on separate invoices.",
    },
    {
      q: "Is Google Ads the only option?",
      a: "For worldwide markets we lead with Google Ads (Search and Display). Other networks are on the table if they fit the niche and budget.",
    },
    {
      q: "How much media budget to start?",
      a: "Depends on niche and competition. On a consult we’ll estimate a sensible minimum; management from $70 with media budget up to $1,100/month.",
    },
    {
      q: "When should first leads appear?",
      a: "Google Ads is faster than SEO: with real demand and a working site, leads can start in the first days after approval. Stable economics show after stats and the first round of fixes.",
    },
    {
      q: "What if the site converts poorly?",
      a: "We audit conversion before launch. If the site leaks, we’ll say what to fix — otherwise ads only burn budget for someone else’s benefit.",
    },
  ],
  ctaTitle: "Want leads from Google Search now?",
  ctaLead:
    "Share your niche and media-budget range — we’ll recommend a management tier and a realistic Google Ads launch plan.",
  ctaPoints: [
    "Management fee by media budget — no percent of spend",
    "Two invoices: PRIME services and media spend",
    "Launch in Google Ads",
    "Negatives, UTM, and bid optimization",
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
  formSubmit: "Book a consult",
  formSuccess: "Thanks! Your ads inquiry is in — we’ll get back to you.",
  formSource: "en-ads",
  footerBrand: "PRIME",
  footerTagline: "Google Ads · campaign management",
};

const adsEs: AdsContent = {
  path: "/es/ads/",
  metaTitle: "Google Ads — PRIME",
  metaDescription:
    "Gestión de Google Ads: estrategia, negativas, seguimiento UTM y pujas. Tarifa fija de gestión desde $70/mes según presupuesto — no un porcentaje del gasto. Honorarios de agencia y gasto en anuncios, en facturas separadas.",
  serviceName: "Google Ads",
  serviceType: "Gestión de Google Ads",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "Google Ads",
  menuLabel: "Menú",
  ctaTop: "Escríbenos",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Google Ads: clientes desde la búsqueda ",
  heroTitleAccent: "cuando la intención está caliente",
  heroLead:
    "Google Ads: estrategia, creativos, negativas y pujas. La gestión es una tarifa fija según presupuesto — desde $70 al mes. El gasto en anuncios y el trabajo de agencia van en facturas separadas.",
  heroCtaPrimary: "Reservar consulta",
  heroCtaSecondary: "Ver tarifas de gestión",
  heroPoints: [
    "Hasta $1,100 de presupuesto — gestión desde $70",
    "$1,100–$3,300 — $130",
    "Más de $3,300 — $220",
  ],
  heroBids: [
    { title: "Google", label: "Búsqueda", width: "78%" },
    { title: "Display", label: "Red", width: "62%" },
    { title: "Puja ↓", label: "optimizar", width: "48%" },
  ],
  notFitTitle: "Cuándo Google Ads no va a ayudar",
  notFitLead:
    "Primero, franqueza: si te reconoces aquí, arregla la oferta y la operación antes de anunciarte.",
  notFitMark: "alto",
  notFit: [
    {
      title: "Producto o servicio débil",
      text: "Si la oferta o la entrega tiene fallas, los anuncios solo aceleran la decepción del cliente.",
    },
    {
      title: "Sin analítica ni retroalimentación",
      text: "No conectas el gasto en anuncios con la rentabilidad ni compartes datos con la agencia.",
    },
    {
      title: "Margen menor a $25",
      text: "Margen neto por venta por debajo de ~$25. Excepción: suscripciones con LTV claro.",
    },
  ],
  processTitle: "¿Todo listo? Así trabajamos",
  processLead:
    "Desde la primera llamada hasta un canal de ventas en marcha — nada de «lanzar y desaparecer».",
  steps: [
    {
      n: "01",
      title: "Escríbenos",
      text: "Completa el formulario — empezamos hablando del objetivo y el presupuesto.",
    },
    {
      n: "02",
      title: "Descubrimiento",
      text: "Definimos prioridades, por qué el CPC varía en tu sector y cómo reducirlo desde el inicio. El contrato llega cuando el alcance está claro.",
    },
    {
      n: "03",
      title: "Auditoría de la web",
      text: "Revisamos si el sitio está listo para convertir. Si necesita ajustes, te lo decimos. Algunos hallazgos aparecen tras el primer análisis de datos.",
    },
    {
      n: "04",
      title: "Estrategia de campaña",
      text: "Palabras clave, anuncios, negativas, objetivos de CPC, presupuesto diario, formatos y canales de Google.",
    },
    {
      n: "05",
      title: "Acuerdo y facturación",
      text: "Cerramos la propuesta de valor y los formatos. Dos facturas: gestión de agencia y gasto en Google — cada dólar queda visible.",
    },
    {
      n: "06",
      title: "Lanzamiento en Google Ads",
      text: "Anuncios en marcha, exclusión de emplazamientos, UTM en cada anuncio, ajuste de pujas vía API, informes y seguimiento de llamadas cuando haga falta.",
    },
    {
      n: "07",
      title: "Analítica y pruebas A/B",
      text: "Tras unas dos semanas revisamos formatos, textos, negativas, exclusiones y Analytics — ajustamos y repetimos.",
    },
  ],
  edgesTitle: "Qué nos diferencia",
  edgesLead: "No solo «configuramos Ads» — infraestructura pensada para resultados.",
  edges: [
    {
      title: "Dos facturas, todo claro",
      text: "La gestión de PRIME y el presupuesto de medios en Google se mantienen separados. Nada se mezcla en un total opaco.",
    },
    {
      title: "Lista negra de emplazamientos",
      text: "Años construyendo una lista de sitios que generan clics pero no cierran ventas.",
    },
    {
      title: "UTM en cada anuncio",
      text: "Vemos el recorrido dentro del sitio — qué funcionó y qué solo quemó presupuesto.",
    },
    {
      title: "Pujas vía API",
      text: "Nuestro módulo ajusta las pujas según la estrategia — no «configurar y olvidar».",
    },
    {
      title: "Seguimiento de llamadas cuando hace falta",
      text: "Añadimos atribución de llamadas cuando el canal cierra por teléfono, no solo por formularios.",
    },
    {
      title: "Canal rápido",
      text: "Más rápido que el SEO: demanda de búsqueda desde hoy, con informes transparentes.",
    },
  ],
  balanceTitle: "Ventajas y desventajas, sin adornos",
  balanceLead: "Google Ads es rápido y transparente — no un botón mágico.",
  prosTitle: "Ventajas",
  consTitle: "Desventajas",
  pros: [
    "Lanzamiento rápido",
    "Estadísticas transparentes que puedes verificar tú mismo",
    "Visitas cualificadas con intención ya formada",
  ],
  cons: [
    "El CPC varía con la competencia",
    "La gente suele comparar varios sitios — tu oferta tiene que sostenerse",
  ],
  pricingEyebrow: "Tarifas de gestión",
  pricingTitle: "Cuánto cuesta la gestión",
  pricingNote:
    "El presupuesto de medios se paga aparte, directo a Google. El trabajo de agencia va en otra factura. La tarifa de gestión depende del presupuesto mensual — no es un porcentaje del gasto.",
  invoiceAgency: { label: "Factura 1 · servicios PRIME", value: "gestión de campañas" },
  invoiceMedia: { label: "Factura 2 · Google", value: "presupuesto de medios" },
  tiers: [
    {
      id: "s",
      budget: "hasta $1,100",
      budgetHint: "presupuesto de medios / mes",
      forWhom: "Equipos pequeños y negocios locales",
      fee: "desde $70",
      feeNote: "gestión / mes",
      accent: true,
    },
    {
      id: "m",
      budget: "$1,100–$3,300",
      budgetHint: "presupuesto de medios / mes",
      forWhom: "Negocios en crecimiento con varias líneas",
      fee: "$130",
      feeNote: "gestión / mes",
      accent: false,
    },
    {
      id: "l",
      budget: "más de $3,300",
      budgetHint: "presupuesto de medios / mes",
      forWhom: "Campañas grandes y sectores competitivos",
      fee: "$220",
      feeNote: "gestión / mes",
      accent: false,
    },
  ],
  tierCta: "Reservar gestión",
  includeTitle: "Qué incluye",
  include: [
    "Estrategia y estructura de campañas en Google Ads",
    "Anuncios, negativas y lista negra de emplazamientos",
    "Etiquetado UTM y control de informes",
    "Ajuste de pujas y optimización según resultados",
    "Informes y cambios tras las pruebas A/B",
  ],
  showCases: false,
  casesTitle: "Casos de éxito en Google Ads",
  casesLead: "Júzganos por proyectos reales, no por cartas de agradecimiento.",
  casesAll: "Ver todos los casos de Google Ads",
  outcomesTitle: "Qué obtienes en la práctica",
  outcomesLead: "No impresiones para un informe — un canal de leads gestionado desde la búsqueda.",
  outcomes: [
    {
      title: "Leads con demanda caliente",
      text: "La gente ya busca el producto — la campaña capta intención real, no alcance vacío.",
    },
    {
      title: "Números claros",
      text: "Dos facturas, UTM e informes: ves el gasto en medios, la tarifa de gestión y qué genera clics y leads de verdad.",
    },
    {
      title: "Mejora constante",
      text: "Negativas, lista negra, pujas y pruebas A/B — no «lanzar y olvidar», sino optimización continua.",
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqLead: "Tarifas, plataformas, plazos y qué tan lista debe estar tu web.",
  faq: [
    {
      q: "¿Por qué la gestión no es un porcentaje del gasto?",
      a: "Una tarifa fija según presupuesto es más justa: no tenemos incentivo para inflar el gasto por nuestra comisión. Servicios y medios quedan en facturas separadas.",
    },
    {
      q: "¿Google Ads es la única opción?",
      a: "Para mercados globales priorizamos Google Ads (Búsqueda y Display). Otras redes entran en juego si se ajustan al sector y al presupuesto.",
    },
    {
      q: "¿Cuánto presupuesto de medios necesito para empezar?",
      a: "Depende del sector y la competencia. En la consulta estimamos un mínimo razonable; la gestión arranca desde $70 con presupuestos de hasta $1,100 al mes.",
    },
    {
      q: "¿Cuándo aparecen los primeros leads?",
      a: "Google Ads es más rápido que el SEO: con demanda real y una web que funciona, los leads pueden llegar en los primeros días tras la aprobación. La economía se estabiliza después de los primeros datos y ajustes.",
    },
    {
      q: "¿Y si la web convierte poco?",
      a: "Auditamos la conversión antes de lanzar. Si el sitio tiene fugas, te decimos qué corregir — de lo contrario, los anuncios solo queman presupuesto para el beneficio de otro.",
    },
  ],
  ctaTitle: "¿Quieres leads desde Google ahora mismo?",
  ctaLead:
    "Cuéntanos tu sector y el rango de presupuesto de medios — te recomendamos un nivel de gestión y un plan de lanzamiento realista en Google Ads.",
  ctaPoints: [
    "Tarifa de gestión según presupuesto — sin porcentaje del gasto",
    "Dos facturas: servicios PRIME y gasto en medios",
    "Lanzamiento en Google Ads",
    "Negativas, UTM y optimización de pujas",
  ],
  formName: "Tu nombre",
  formPhone: "Teléfono",
  formSite: "URL de tu web",
  formSystem: "Te interesa",
  formSystemOptions: ["Google Ads Búsqueda", "Google Ads + Display", "Aún no lo sé"],
  formBudget: "Presupuesto de medios mensual",
  formBudgetOptions: [
    "hasta $1,100",
    "$1,100–$3,300",
    "más de $3,300",
    "Todavía sin decidir",
  ],
  formMessage: "Sector y objetivo — brevemente",
  formAgreeBefore: "Acepto el tratamiento de datos personales según nuestra",
  formAgreePolicy: "política de privacidad",
  formSubmit: "Reservar consulta",
  formSuccess: "¡Gracias! Recibimos tu solicitud — te contactaremos pronto.",
  formSource: "es-ads",
  footerBrand: "PRIME",
  footerTagline: "Google Ads · gestión de campañas",
};

export function getAdsContent(locale: Locale): AdsContent {
  if (locale === "en") return adsEn;
  if (locale === "es") return adsEs;
  return adsRu;
}

export function adsPath(locale: Locale): string {
  return getAdsContent(locale).path;
}

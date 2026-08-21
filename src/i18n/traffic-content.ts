import type { Locale } from "./locales";
import {
  trafficFit,
  trafficSteps,
  trafficOutcomes,
  trafficIncludes,
  trafficPlans,
  trafficPricingNote,
  trafficStats,
  trafficMarquee,
  trafficDemoKeys,
  trafficNos,
  trafficFaq,
} from "../data/traffic-service";

export type TrafficPlan = {
  id: string;
  title: string;
  price: string;
  unit: string;
  min: string;
  minLabel: string;
  featured: boolean;
};

export type TrafficStat = {
  value: number;
  suffix: string;
  label: string;
  display?: string;
};

export type TrafficOutcome = {
  title: string;
  text: string;
  metric: string;
};

export type TrafficContent = {
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
  heroTitleAfter: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  meterAria: string;
  meterLive: string;
  meterProto: string;
  meterBaseline: string;
  meterVisitsLabel: string;
  meterDeltaLabel: string;
  meterPayLabel: string;
  meterNoteStart: string;
  meterNotePay: string;
  meterRate: number;
  meterCurrency: string;
  demoKeys: readonly string[];
  stats: TrafficStat[];
  marquee: readonly string[];
  fitKicker: string;
  fitTitle: string;
  fitLead: string;
  fit: { title: string; text: string }[];
  stepsKicker: string;
  stepsTitle: string;
  stepsLead: string;
  steps: { n: string; title: string; text: string }[];
  outcomesKicker: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: TrafficOutcome[];
  includesKicker: string;
  includesTitle: string;
  includesLead: string;
  includes: readonly string[];
  pricingKicker: string;
  pricingTitle: string;
  pricingLead: string;
  plans: TrafficPlan[];
  planBadge: string;
  planCtaPrefix: string;
  pricingNote: string;
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
  formRegion: string;
  formRegionOptions: { value: string; label: string; selected?: boolean }[];
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

const trafficRu: TrafficContent = {
  path: "/prodvizhenie-sayta-po-trafiku/",
  metaTitle: "Продвижение по трафику — ПРАЙМ",
  metaDescription:
    "Продвижение сайта по трафику: оплата за переходы из поиска по списку фраз. Регионы от 3 ₽, Москва и СПб от 5 ₽ за переход. Базовый трафик до старта не учитывается.",
  serviceName: "Продвижение по трафику",
  serviceType: "Продвижение сайта по трафику",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Продвижение по трафику",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroKicker: "Pay per visit · только прирост из поиска",
  heroTitleBefore: "Платите за ",
  heroTitleAccent: "переходы",
  heroTitleAfter: ", а не за «воздух» в отчётах",
  heroLead:
    "Рост посещаемости по списку ключевых фраз. Базовый трафик до старта не учитывается — в счёт идёт только прирост из выдачи.",
  heroCtaPrimary: "Хочу в рост",
  heroCtaSecondary: "Смотреть цены",
  meterAria: "Демо оплаты за прирост трафика",
  meterLive: "live growth",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "baseline",
  meterVisitsLabel: "visits / month",
  meterDeltaLabel: "billable Δ",
  meterPayLabel: "to pay",
  meterNoteStart: "База до старта = 0 ₽ · платите только за прирост",
  meterNotePay: "К оплате только Δ {delta} визитов · база {base} = 0 ₽",
  meterRate: 5,
  meterCurrency: "₽",
  demoKeys: trafficDemoKeys,
  stats: trafficStats.map((s) => ({ ...s })),
  marquee: trafficMarquee,
  fitKicker: "Fit",
  fitTitle: "Для каких сайтов подходит",
  fitLead: "Там, где важнее объём целевых визитов, чем узкий ТОП по десятку фраз.",
  fit: trafficFit.map((f) => ({ ...f })),
  stepsKicker: "Процесс",
  stepsTitle: "Как мы работаем",
  stepsLead: "От целей и аудита до внутренней и внешней оптимизации.",
  steps: trafficSteps.map((s) => ({ ...s })),
  outcomesKicker: "Результат",
  outcomesTitle: "Что получите",
  outcomesLead: "Охват, конверсия и экономически прозрачная модель оплаты.",
  outcomes: trafficOutcomes.map((o) => ({ ...o })),
  includesKicker: "Состав",
  includesTitle: "Что входит в работу",
  includesLead: "Семантика, стоп-слова, тексты, техника и внешний контур.",
  includes: trafficIncludes,
  pricingKicker: "Цены",
  pricingTitle: "Стоимость услуг",
  pricingLead: "Расценки зависят от направления и конкуренции в регионе.",
  plans: trafficPlans.map((p) => ({ ...p })),
  planBadge: "Столицы",
  planCtaPrefix: "Выбрать ·",
  pricingNote: trafficPricingNote,
  nosKicker: "Честно",
  nosTitle: "Чего не путаем и не обещаем",
  nosLead: "Чтобы модель «оплата за переходы» не смешивалась с ТОП-10.",
  nos: trafficNos.map((n) => ({ ...n })),
  faqKicker: "FAQ",
  faqTitle: "Частые вопросы",
  faqLead: "Отличие от ТОП, базовый трафик, первые месяцы и цена за переход.",
  faq: trafficFaq.map((f) => ({ ...f })),
  ctaTitle: "Продвижение по трафику — интересно?",
  ctaLead:
    "Оставьте заявку — менеджер уточнит детали и подготовит индивидуальное коммерческое предложение.",
  ctaPickPrefix: "Выбран тариф:",
  ctaPickDefault: "Москва и Санкт-Петербург · от 5 ₽",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Адрес сайта",
  formRegion: "Регион продвижения",
  formRegionOptions: [
    { value: "region", label: "Регионы РФ · от 3 ₽" },
    { value: "capital", label: "Москва / СПб · от 5 ₽", selected: true },
    { value: "multi", label: "Несколько регионов" },
  ],
  formMessage: "Ниша и примерно какой трафик хотите",
  formAgreeBefore: "Даю",
  formAgreeConsent: "согласие",
  formAgreeMid: "на обработку",
  formAgreeData: "персональных данных",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на продвижение по трафику принята — свяжемся с вами.",
  formSource: "prodvizhenie-sayta-po-trafiku",
  footerBrand: "ПРАЙМ",
  footerTagline: "Продвижение по трафику · оплата за переходы",
};

const trafficEn: TrafficContent = {
  path: "/en/traffic/",
  metaTitle: "Pay-per-visit SEO — PRIME",
  metaDescription:
    "Pay-per-visit SEO: pay for Google Search visits from an agreed keyword list. Local markets from ~$0.09/visit, competitive metros from ~$0.18. Pre-launch baseline traffic isn’t billed.",
  serviceName: "Pay-per-visit SEO",
  serviceType: "Pay-per-visit SEO",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Pay-per-visit SEO",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Pay per visit · billable search growth only",
  heroTitleBefore: "Pay for ",
  heroTitleAccent: "visits",
  heroTitleAfter: " — not vanity metrics",
  heroLead:
    "Grow Google Search visits across an agreed keyword list. Traffic you already had before kickoff doesn’t count — you only pay for the incremental visits.",
  heroCtaPrimary: "Let’s grow traffic",
  heroCtaSecondary: "See pricing",
  meterAria: "Demo: pay for incremental traffic",
  meterLive: "live growth",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "baseline",
  meterVisitsLabel: "visits / month",
  meterDeltaLabel: "billable Δ",
  meterPayLabel: "to pay",
  meterNoteStart: "Baseline before launch = $0 · pay only for growth",
  meterNotePay: "Billable only Δ {delta} visits · baseline {base} = $0",
  meterRate: 0.18,
  meterCurrency: "$",
  demoKeys: [
    "buy · near me",
    "delivery · today",
    "services · local",
    "catalog · long-tail",
    "quote · request",
  ],
  stats: [
    { value: 0.09, suffix: "", label: "from · local markets per visit", display: "$0.09" },
    { value: 0.18, suffix: "", label: "from · competitive metros", display: "$0.18" },
    { value: 4, suffix: " mo.", label: "fixed fee before pay-per-growth" },
    { value: 0, suffix: "", label: "baseline visits not billed", display: "$0" },
  ],
  marquee: [
    "buy online",
    "services near me",
    "same-day delivery",
    "turnkey price",
    "catalog 2026",
    "request a quote",
    "compare models",
    "customer reviews",
    "in stock now",
    "book a visit",
  ],
  fitKicker: "Fit",
  fitTitle: "Who this is for",
  fitLead:
    "When you need volume of qualified visits more than a narrow page-one set on a handful of head terms.",
  fit: [
    {
      title: "Large e-commerce",
      text: "Hundreds or thousands of long-tail queries across brands and models — the traffic model covers a wide keyword tail.",
    },
    {
      title: "Broad service catalogs",
      text: "Big service menus and lots of pages: reach across queries beats chasing page one on two head terms.",
    },
    {
      title: "Content and media sites",
      text: "News, media, reference — where value is the volume of relevant visits from Google Search.",
    },
  ],
  stepsKicker: "Process",
  stepsTitle: "How we work",
  stepsLead: "From goals and audit through on-page and off-page SEO.",
  steps: [
    {
      n: "01",
      title: "Discovery",
      text: "Goals, competitors, keyword list, and a clear cost estimate.",
    },
    {
      n: "02",
      title: "Audit",
      text: "Technical health, on-page and off-page gaps, UX that keeps visitors around.",
    },
    {
      n: "03",
      title: "On-page SEO",
      text: "Keywords, content, internal links, conversion-minded design, Google Analytics.",
    },
    {
      n: "04",
      title: "Off-page SEO",
      text: "Link profile, guest content, and Google Business Profile where local search matters.",
    },
  ],
  outcomesKicker: "Outcome",
  outcomesTitle: "What you get",
  outcomesLead: "Reach, conversion, and a billing model you can explain to finance.",
  outcomes: [
    {
      title: "Wider reach",
      text: "More visits to the pages that matter across a broad keyword set.",
      metric: "reach",
    },
    {
      title: "Stronger conversion",
      text: "More first-time and repeat sales as qualified traffic grows.",
      metric: "leads",
    },
    {
      title: "Pay for growth",
      text: "You pay for search visitors from an agreed keyword list. Pre-launch baseline isn’t billed.",
      metric: "billable",
    },
    {
      title: "Faster signal",
      text: "We’re optimizing for visit volume — you’ll see movement sooner than “wait for page one only.”",
      metric: "visits",
    },
  ],
  includesKicker: "Scope",
  includesTitle: "What’s included",
  includesLead: "Keyword research, excluded terms, copy, technical work, and off-page support.",
  includes: [
    "Build and expand the keyword list",
    "Excluded terms kept off the bill (free, DIY, how-to…)",
    "Technical fixes from an SEO specialist",
    "Publishing optimized copy",
    "Conversion recommendations",
    "Site uptime monitoring",
    "Domain renewal when it’s due",
    "On-page SEO (internal links, sitemaps…)",
    "Off-page SEO (authority, social signals)",
  ],
  pricingKicker: "Pricing",
  pricingTitle: "Pricing",
  pricingLead: "Rates track market and how competitive the SERP is.",
  plans: [
    {
      id: "region",
      title: "Local markets",
      price: "from $0.09",
      unit: "per visit",
      min: "$165 — $330",
      minLabel: "minimum payment",
      featured: false,
    },
    {
      id: "capital",
      title: "Competitive metros",
      price: "from $0.18",
      unit: "per visit",
      min: "$330 — $510",
      minLabel: "minimum payment",
      featured: true,
    },
  ],
  planBadge: "Metros",
  planCtaPrefix: "Choose ·",
  pricingNote:
    "Price depends on market and competition. First 4 months: full contract fee. After that: pay for actual traffic growth.",
  nosKicker: "Straight talk",
  nosTitle: "What we won’t confuse or overpromise",
  nosLead: "Pay-per-visit isn’t the same as pay-for-page-one — and we keep that clear.",
  nos: [
    {
      title: "Not pay-for-page-one",
      text: "Here you pay for incremental visits from an agreed phrase list. Ranking fees for page-one positions are a separate SEO product.",
    },
    {
      title: "Baseline isn’t on the bill",
      text: "Traffic the site already had before launch isn’t charged. You pay for Google Search growth on the agreed keyword set.",
    },
    {
      title: "No overnight flood",
      text: "Early months are prep and ramp — often ~1 month of groundwork, then growth planned over months. First 4 months: fixed contract fee, then pay for real growth.",
    },
  ],
  faqKicker: "FAQ",
  faqTitle: "FAQ",
  faqLead: "Vs. page-one billing, baseline traffic, the first months, and per-visit price.",
  faq: [
    {
      q: "How is this different from pay-for-page-one SEO?",
      a: "Pay-per-visit SEO bills Google Search visits from a keyword list. Classic pay-for-results SEO bills page-one positions. Pick based on keyword breadth and goal: reach vs. precise head terms.",
    },
    {
      q: "What does “baseline traffic not billed” mean?",
      a: "We lock the visit count before launch. Only incremental qualified search visits on agreed queries count — not every hit on the site.",
    },
    {
      q: "Why a fixed fee for the first 4 months?",
      a: "We need time for keyword work, technical fixes, content, and ramp. After that we switch to pay-for-growth — as written in the contract.",
    },
    {
      q: "Who is this model best for?",
      a: "Large catalogs, e-commerce with long-tail demand, broad service sites, and content portals — where visit volume matters more than a couple of phrases on page one.",
    },
    {
      q: "What sets the per-visit price?",
      a: "Market and competition. Guide: local markets from ~$0.09, competitive metros from ~$0.18 per visit; the minimum payment depends on the plan.",
    },
  ],
  ctaTitle: "Want pay-per-visit SEO that bills for growth?",
  ctaLead: "Tell us your niche — we’ll dig into the details and send a clear proposal.",
  ctaPickPrefix: "Selected plan:",
  ctaPickDefault: "Competitive metros · from $0.18",
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website URL",
  formRegion: "Target market",
  formRegionOptions: [
    { value: "region", label: "Local markets · from $0.09" },
    { value: "capital", label: "Competitive metros · from $0.18", selected: true },
    { value: "multi", label: "Multiple markets" },
  ],
  formMessage: "Niche and the traffic you’re aiming for",
  formAgreeBefore: "I give",
  formAgreeConsent: "consent",
  formAgreeMid: "to the processing of",
  formAgreeData: "personal data",
  formSubmit: "Send",
  formSuccess: "Thanks — we got your note. We’ll follow up shortly.",
  formSource: "en-traffic",
  footerBrand: "PRIME",
  footerTagline: "Pay-per-visit SEO · Google Search",
};

const trafficEs: TrafficContent = {
  path: "/es/traffic/",
  metaTitle: "SEO por tráfico — PRIME",
  metaDescription:
    "SEO por tráfico: pagas por las visitas desde Google Search según una lista de palabras clave acordada. Mercados locales desde ~$0.09/visita, metrópolis competitivas desde ~$0.18. El tráfico base antes de empezar no se factura.",
  serviceName: "SEO por tráfico",
  serviceType: "SEO por tráfico",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "SEO por tráfico",
  menuLabel: "Menú",
  ctaTop: "Escríbenos",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroKicker: "Pago por visita · solo crecimiento facturable de búsqueda",
  heroTitleBefore: "Paga por ",
  heroTitleAccent: "visitas",
  heroTitleAfter: " — no por métricas de vanidad",
  heroLead:
    "Hacemos crecer las visitas desde Google Search en una lista de palabras clave acordada. El tráfico que ya tenías antes de empezar no cuenta — solo pagas por el crecimiento adicional.",
  heroCtaPrimary: "Quiero crecer",
  heroCtaSecondary: "Ver precios",
  meterAria: "Demo: pago por tráfico adicional",
  meterLive: "crecimiento en vivo",
  meterProto: "PRIME · TRAFFIC",
  meterBaseline: "base",
  meterVisitsLabel: "visitas / mes",
  meterDeltaLabel: "Δ facturable",
  meterPayLabel: "a pagar",
  meterNoteStart: "Base antes de empezar = $0 · pagas solo por el crecimiento",
  meterNotePay: "Facturable solo Δ {delta} visitas · base {base} = $0",
  meterRate: 0.18,
  meterCurrency: "$",
  demoKeys: [
    "comprar · cerca de mí",
    "envío · hoy",
    "servicios · locales",
    "catálogo · long-tail",
    "presupuesto · solicitar",
  ],
  stats: [
    { value: 0.09, suffix: "", label: "desde · mercados locales por visita", display: "$0.09" },
    { value: 0.18, suffix: "", label: "desde · metrópolis competitivas", display: "$0.18" },
    { value: 4, suffix: " meses", label: "tarifa fija antes del pago por crecimiento" },
    { value: 0, suffix: "", label: "visitas base sin facturar", display: "$0" },
  ],
  marquee: [
    "comprar online",
    "servicios cerca de mí",
    "envío el mismo día",
    "precio llave en mano",
    "catálogo 2026",
    "solicitar presupuesto",
    "comparar modelos",
    "opiniones de clientes",
    "disponible ahora",
    "reservar visita",
  ],
  fitKicker: "Encaje",
  fitTitle: "Para quién es",
  fitLead:
    "Cuando necesitas volumen de visitas cualificadas más que un puñado de frases en primera página.",
  fit: [
    {
      title: "E-commerce grande",
      text: "Cientos o miles de búsquedas de cola larga entre marcas y modelos — el modelo de tráfico cubre una cola de palabras clave amplia.",
    },
    {
      title: "Catálogos de servicios extensos",
      text: "Muchos servicios y páginas: el alcance en varias búsquedas gana más que perseguir dos frases en primera página.",
    },
    {
      title: "Sitios de contenido y medios",
      text: "Noticias, medios, referencia — donde el valor está en el volumen de visitas relevantes desde Google Search.",
    },
  ],
  stepsKicker: "Proceso",
  stepsTitle: "Cómo trabajamos",
  stepsLead: "Desde los objetivos y la auditoría hasta el SEO on-page y off-page.",
  steps: [
    {
      n: "01",
      title: "Descubrimiento",
      text: "Objetivos, competencia, lista de palabras clave y una estimación de costos clara.",
    },
    {
      n: "02",
      title: "Auditoría",
      text: "Salud técnica, brechas on-page y off-page, UX que retiene a los visitantes.",
    },
    {
      n: "03",
      title: "SEO on-page",
      text: "Palabras clave, contenido, enlaces internos, diseño enfocado en conversión, Google Analytics.",
    },
    {
      n: "04",
      title: "SEO off-page",
      text: "Perfil de enlaces, contenido de invitado y Google Business Profile donde la búsqueda local importa.",
    },
  ],
  outcomesKicker: "Resultado",
  outcomesTitle: "Qué obtienes",
  outcomesLead: "Alcance, conversión y un modelo de facturación que puedes explicarle a finanzas.",
  outcomes: [
    {
      title: "Más alcance",
      text: "Más visitas a las páginas que importan, en una lista amplia de palabras clave.",
      metric: "alcance",
    },
    {
      title: "Mejor conversión",
      text: "Más ventas nuevas y recurrentes a medida que crece el tráfico cualificado.",
      metric: "leads",
    },
    {
      title: "Pagas por crecimiento",
      text: "Pagas por visitantes de búsqueda desde una lista de palabras clave acordada. La base previa al lanzamiento no se factura.",
      metric: "facturable",
    },
    {
      title: "Señal más rápida",
      text: "Optimizamos por volumen de visitas — verás movimiento antes que si solo «esperas la primera página».",
      metric: "visitas",
    },
  ],
  includesKicker: "Alcance",
  includesTitle: "Qué incluye",
  includesLead: "Investigación de palabras clave, términos excluidos, contenido, trabajo técnico y apoyo off-page.",
  includes: [
    "Construir y ampliar la lista de palabras clave",
    "Términos excluidos fuera de la factura (gratis, DIY, cómo hacer…)",
    "Ajustes técnicos de un especialista SEO",
    "Publicación de contenido optimizado",
    "Recomendaciones de conversión",
    "Monitoreo de disponibilidad del sitio",
    "Renovación del dominio cuando vence",
    "SEO on-page (enlaces internos, sitemaps…)",
    "SEO off-page (autoridad, señales sociales)",
  ],
  pricingKicker: "Precios",
  pricingTitle: "Precios",
  pricingLead: "Las tarifas dependen del mercado y de qué tan competido está el SERP.",
  plans: [
    {
      id: "region",
      title: "Mercados locales",
      price: "desde $0.09",
      unit: "por visita",
      min: "$165 — $330",
      minLabel: "pago mínimo",
      featured: false,
    },
    {
      id: "capital",
      title: "Metrópolis competitivas",
      price: "desde $0.18",
      unit: "por visita",
      min: "$330 — $510",
      minLabel: "pago mínimo",
      featured: true,
    },
  ],
  planBadge: "Metrópolis",
  planCtaPrefix: "Elegir ·",
  pricingNote:
    "El precio depende del mercado y la competencia. Primeros 4 meses: tarifa fija del contrato. Después: pagas por el crecimiento real de tráfico.",
  nosKicker: "Sin rodeos",
  nosTitle: "Qué no confundimos ni prometemos de más",
  nosLead: "El pago por visita no es lo mismo que el pago por primera página — y lo dejamos claro.",
  nos: [
    {
      title: "No es pago por primera página",
      text: "Aquí pagas por visitas adicionales desde una lista de frases acordada. Las tarifas por posiciones en primera página son un producto de SEO distinto.",
    },
    {
      title: "La base no se factura",
      text: "El tráfico que el sitio ya tenía antes del lanzamiento no se cobra. Pagas por el crecimiento de Google Search en la lista de palabras clave acordada.",
    },
    {
      title: "Nada de crecimiento repentino de la noche a la mañana",
      text: "Los primeros meses son de preparación y arranque — suele ser ~1 mes de trabajo previo, y luego el crecimiento se planea a lo largo de varios meses. Primeros 4 meses: tarifa fija del contrato, después pagas por el crecimiento real.",
    },
  ],
  faqKicker: "Preguntas",
  faqTitle: "Preguntas frecuentes",
  faqLead: "Comparado con el pago por primera página, tráfico base, primeros meses y precio por visita.",
  faq: [
    {
      q: "¿En qué se diferencia del SEO con pago por primera página?",
      a: "El SEO por tráfico factura las visitas desde Google Search en una lista de palabras clave. El SEO clásico por resultados factura posiciones en primera página. La elección depende de la amplitud de las palabras clave y el objetivo: alcance frente a términos precisos.",
    },
    {
      q: "¿Qué significa que «la base no se factura»?",
      a: "Fijamos el número de visitas antes del lanzamiento. Solo cuentan las visitas de búsqueda cualificadas adicionales en los términos acordados — no cada visita al sitio.",
    },
    {
      q: "¿Por qué una tarifa fija los primeros 4 meses?",
      a: "Necesitamos tiempo para el trabajo de palabras clave, ajustes técnicos, contenido y arranque. Después pasamos al pago por crecimiento — tal como queda en el contrato.",
    },
    {
      q: "¿Para quién es mejor este modelo?",
      a: "Catálogos grandes, e-commerce con demanda de cola larga, sitios de servicios amplios y portales de contenido — donde el volumen de visitas importa más que un par de frases en primera página.",
    },
    {
      q: "¿Qué determina el precio por visita?",
      a: "El mercado y la competencia. Como referencia: mercados locales desde ~$0.09, metrópolis competitivas desde ~$0.18 por visita; el pago mínimo depende del plan.",
    },
  ],
  ctaTitle: "¿Quieres un SEO por tráfico que factura por crecimiento?",
  ctaLead: "Cuéntanos tu sector — revisamos los detalles y enviamos una propuesta clara.",
  ctaPickPrefix: "Plan seleccionado:",
  ctaPickDefault: "Metrópolis competitivas · desde $0.18",
  formName: "Tu nombre",
  formPhone: "Teléfono",
  formSite: "URL de tu web",
  formRegion: "Mercado objetivo",
  formRegionOptions: [
    { value: "region", label: "Mercados locales · desde $0.09" },
    { value: "capital", label: "Metrópolis competitivas · desde $0.18", selected: true },
    { value: "multi", label: "Varios mercados" },
  ],
  formMessage: "Sector y el tráfico que buscas",
  formAgreeBefore: "Doy",
  formAgreeConsent: "consentimiento",
  formAgreeMid: "al tratamiento de",
  formAgreeData: "datos personales",
  formSubmit: "Enviar",
  formSuccess: "Gracias — recibimos tu mensaje. Te contactaremos en breve.",
  formSource: "es-traffic",
  footerBrand: "PRIME",
  footerTagline: "SEO por tráfico · Google Search",
};

export function getTrafficContent(locale: Locale): TrafficContent {
  if (locale === "en") return trafficEn;
  if (locale === "es") return trafficEs;
  return trafficRu;
}

export function trafficPath(locale: Locale): string {
  return getTrafficContent(locale).path;
}

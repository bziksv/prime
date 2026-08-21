import type { Locale } from "./locales";
import {
  partnerBenefits,
  partnerCases,
  partnerFaq,
  partnerNos,
  partnerOutcomes,
  partnerStats,
  partnerSteps,
  partnerWhy,
} from "../data/partnerstvo";

export type PartnerCase = {
  name: string;
  tag: string;
  image: string;
  href: string;
};

export type PartnerContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  menuLabel: string;
  ctaTop: string;
  heroKicker: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  benefitsTitle: string;
  benefitsLead: string;
  benefits: { title: string; text: string; tone: string }[];
  whyTitle: string;
  whyLead: string;
  why: string[];
  showCases: boolean;
  casesTitle: string;
  casesLead: string;
  cases: PartnerCase[];
  casesViewAll: string;
  casesViewAllHref: string;
  stepsTitle: string;
  stepsLead: string;
  steps: { n: string; title: string; text: string }[];
  statsTitle: string;
  statsLead: string;
  stats: {
    value: number;
    suffix: string;
    label: string;
    desc: string;
    decimals?: number;
  }[];
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
  formName: string;
  formPhone: string;
  formEmail: string;
  formType: string;
  formTypeOptions: string[];
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

const partnerRu: PartnerContent = {
  path: "/partnerstvo/",
  metaTitle: "Партнерство — ПРАЙМ",
  metaDescription:
    "Партнёрство с ПРАЙМ: рекомендуйте интернет-маркетинг, получайте процент. Прозрачные отчёты, договор и выплаты раз в месяц.",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Партнерство",
  menuLabel: "Меню",
  ctaTop: "Стать партнёром",
  heroKicker: "Партнёрская программа",
  heroTitleBefore: "Рекомендуете ПРАЙМ — ",
  heroTitleAccent: "зарабатываете",
  heroTitleAfter: " вместе с нами",
  heroLead:
    "Приводите клиентов на SEO, контекст и разработку. Мы ведём проекты, отчитываемся каждый месяц и платим партнёрам по факту — официально и прозрачно.",
  heroCtaPrimary: "Стать партнёром",
  heroCtaSecondary: "Почему с нами",
  benefitsTitle: "Почему стоит сотрудничать с нами",
  benefitsLead:
    "Те же принципы, что на оригинальном сайте — только в упаковке, которой хочется делиться.",
  benefits: partnerBenefits.map((b) => ({ ...b })),
  whyTitle: "Что вы получаете как партнёр",
  whyLead: "Коротко и по делу — без скрытых условий.",
  why: [...partnerWhy],
  showCases: true,
  casesTitle: "Нам есть чем гордиться — кейсы",
  casesLead: "Проекты, которые мы ведём и которыми не стесняемся делиться с партнёрами.",
  cases: partnerCases.map((c) => ({ ...c })),
  casesViewAll: "Смотреть все кейсы",
  casesViewAllHref: "/keysy/",
  stepsTitle: "Как начать сотрудничество",
  stepsLead: "Четыре шага — от письма до первой передачи клиента.",
  steps: partnerSteps.map((s) => ({ ...s })),
  statsTitle: "И немного цифр",
  statsLead: "Инфографика партнёрской программы — ориентиры по срокам и выплатам.",
  stats: partnerStats.map((s) => ({ ...s })),
  outcomesTitle: "Что получаете как партнёр",
  outcomesLead: "Доход с рекомендаций — без ведения проектов и «серых» схем.",
  outcomes: partnerOutcomes.map((o) => ({ ...o })),
  nosTitle: "Чего здесь нет",
  nosLead: "Чтобы партнёрство не путали с MLM и обещаниями «с первого звонка».",
  nos: partnerNos.map((n) => ({ ...n })),
  faqTitle: "Частые вопросы",
  faqLead: "Кто подходит, как платим и нужно ли вести проект самому.",
  faq: partnerFaq.map((f) => ({ ...f })),
  ctaTitle: "Оставьте заявку — и мы свяжемся",
  ctaLead:
    "Мы на рынке с 2015 года — за это время немало агентств закрылось. Расскажите формат сотрудничества: ответим, разберём условия и пришлём договор.",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formEmail: "Email",
  formType: "Формат сотрудничества",
  formTypeOptions: [
    "Рекомендации клиентов",
    "Агентство / подрядчик",
    "Фриланс / консультант",
    "Другое",
  ],
  formMessage: "Коротко о себе и аудитории",
  formAgreeBefore: "Даю",
  formAgreeConsent: "согласие",
  formAgreeMid: "на обработку",
  formAgreeData: "персональных данных",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на партнёрство принята.",
  formSource: "partnerstvo",
  footerBrand: "ПРАЙМ",
  footerTagline: "Партнёрская программа · интернет-маркетинг",
};

const partnerEn: PartnerContent = {
  path: "/en/partnership/",
  metaTitle: "Partnership — PRIME",
  metaDescription:
    "Partner with PRIME: refer digital marketing clients and earn a commission. Clear monthly reports, a real contract, and payouts on actuals — worldwide.",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Partnership",
  menuLabel: "Menu",
  ctaTop: "Become a partner",
  heroKicker: "Referral partner program",
  heroTitleBefore: "Refer PRIME — ",
  heroTitleAccent: "earn",
  heroTitleAfter: " when clients pay",
  heroLead:
    "Send us clients for SEO, Google Ads, and web builds. We run the work, report every month, and pay partners on actual billings — under contract, no fog.",
  heroCtaPrimary: "Become a partner",
  heroCtaSecondary: "Why partner with us",
  benefitsTitle: "Why partner with us",
  benefitsLead: "The same standards we sell with — packaged so you’re proud to refer.",
  benefits: [
    {
      title: "We love the craft",
      text: "Not “just another agency” — a team that lives digital marketing and backs it with numbers.",
      tone: "p",
    },
    {
      title: "We own the project",
      text: "We take the client end to end: first call through monthly reports and your payout.",
      tone: "r",
    },
    {
      title: "Results you can show",
      text: "Case studies stay public. Page-one growth, leads, CPL — easy to point at when you refer.",
      tone: "m",
    },
    {
      title: "We share what we know",
      text: "SEO, Google Ads, and analytics — practice and updates so you stay sharp worldwide.",
      tone: "e",
    },
    {
      title: "Transparent payouts",
      text: "Paid on performance. Every month: a detailed report. You see what the client pays and what you earn.",
      tone: "e",
    },
  ],
  whyTitle: "What you get as a partner",
  whyLead: "Short and clear — no fine-print surprises.",
  why: [
    "Refer PRIME — earn a percentage of client payments",
    "We run the project: you don’t need to be an SEO specialist",
    "Transparent monthly reports — easy to track",
    "Written contract and regular payouts",
  ],
  showCases: true,
  casesTitle: "Work we’re proud to share",
  casesLead: "Live projects we run — and show partners without apology.",
  cases: [
    {
      name: "Motorland Body",
      tag: "Auto repair",
      image: "/images/v6/partner-cases/kuzovnoy.webp",
      href: "/en/keysy/seo/motorland-kuzov/",
    },
    {
      name: "Vtorma",
      tag: "Recycling",
      image: "/images/v6/partner-cases/vtorma.webp",
      href: "/en/keysy/seo/vtorma/",
    },
    {
      name: "Kabelmontazh",
      tag: "Electrical",
      image: "/images/v6/partner-cases/kabelmontazh.webp",
      href: "/en/keysy/seo/kabelmontazh/",
    },
    {
      name: "Fortuna",
      tag: "Auto repair",
      image: "/images/v6/partner-cases/fortuna.webp",
      href: "/en/keysy/ads/fortuna-avto/",
    },
    {
      name: "Svetlyachok",
      tag: "Kids center",
      image: "/images/v6/partner-cases/svetlyachok.webp",
      href: "/en/keysy/seo/det-zentr/",
    },
    {
      name: "Himopttorg",
      tag: "Chemicals",
      image: "/images/v6/partner-cases/himopttorg.webp",
      href: "/en/keysy/seo/himopttorg/",
    },
    {
      name: "Argument",
      tag: "Legal",
      image: "/images/v6/partner-cases/argument.webp",
      href: "/en/keysy/web/argument/",
    },
    {
      name: "Skazka",
      tag: "Confectionery",
      image: "/images/v6/partner-cases/skazka.webp",
      href: "/en/keysy/seo/skazka/",
    },
    {
      name: "Barokko",
      tag: "Curtains",
      image: "/images/v6/partner-cases/barokko.webp",
      href: "/en/keysy/seo/barokko/",
    },
    {
      name: "Motorland",
      tag: "Car dealership",
      image: "/images/v6/partner-cases/motorland.webp",
      href: "/en/keysy/seo/motor-lend-nissan/",
    },
  ],
  casesViewAll: "See all work",
  casesViewAllHref: "/en/keysy/",
  stepsTitle: "How to get started",
  stepsLead: "Four steps — from email to the first client handoff.",
  steps: [
    {
      n: "01",
      title: "Apply",
      text: "Email info@prime-ltd.su — tell us about your audience and how you want to work.",
    },
    {
      n: "02",
      title: "Review",
      text: "We talk niche, partnership shape, and any process questions you have.",
    },
    {
      n: "03",
      title: "Contract",
      text: "Paperwork done right. Companies and individuals both work. Payouts monthly.",
    },
    {
      n: "04",
      title: "Go live",
      text: "You pass contacts (the client knows we’re calling) — and we start.",
    },
  ],
  statsTitle: "A few numbers",
  statsLead: "Partner program benchmarks — timelines and payouts.",
  stats: [
    {
      value: 36,
      suffix: "+",
      label: "months",
      desc: "Typical minimum client engagement horizon with us",
    },
    {
      value: 13,
      suffix: "k $",
      label: "paid out",
      desc: "What we paid our top partner in a year",
    },
    {
      value: 40,
      suffix: "+",
      label: "partners",
      desc: "How far the partner network has grown in active years",
    },
  ],
  outcomesTitle: "What you earn as a partner",
  outcomesLead: "Referral income — without delivering the work or gray-area deals.",
  outcomes: [
    {
      title: "Income without delivery",
      text: "You refer — we take the client: SEO, Google Ads, websites. You’re not the contractor.",
    },
    {
      title: "Clear economics",
      text: "A cut of client payments, a detailed monthly report, and contract payouts — no gray schemes.",
    },
    {
      title: "Easy to recommend",
      text: "Case studies and numbers on the site — show how PRIME differs from a six-month fly-by-night shop.",
    },
  ],
  nosTitle: "What this is not",
  nosLead: "So nobody confuses this with MLM or “paid from the first call.”",
  nos: [
    {
      title: "Not multilevel or a pyramid",
      text: "Client referrals and a share of their payments. No recruiting a “downline.”",
    },
    {
      title: "No “paid from the first call” promise",
      text: "Reward ties to real client payments for services. Terms and percentage live in the contract.",
    },
    {
      title: "We don’t dump delivery on you",
      text: "You pass the contact (client is warned) — we handle strategy, reporting, and results.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Who fits, how we pay, and whether you have to run the work yourself.",
  faq: [
    {
      q: "Who can become a partner?",
      a: "Agencies, contractors, freelancers, consultants — anyone who refers clients. Companies and individuals both work; we lock the format up front.",
    },
    {
      q: "How is the reward calculated?",
      a: "A percentage of client payments for PRIME services. The contract covers base, timing, and payout order (usually monthly).",
    },
    {
      q: "Do I need to run SEO or ads myself?",
      a: "No. You refer and hand off the contact. Delivery, reporting, and client communication are on us.",
    },
    {
      q: "Should the client know I’m a partner?",
      a: "Yes. Before the call, they know PRIME will reach out. Cleaner start, fewer surprises.",
    },
    {
      q: "Which services does the program cover?",
      a: "Usually SEO, Google Ads, web development, and related agency work. On review we’ll confirm what fits your audience worldwide.",
    },
  ],
  ctaTitle: "Ready to partner?",
  ctaLead:
    "We’ve been at this since 2015 — plenty of agencies didn’t last. Tell us how you want to work: we’ll reply, walk through terms, and send a contract.",
  formName: "Your name",
  formPhone: "Phone",
  formEmail: "Email",
  formType: "Partnership type",
  formTypeOptions: [
    "Client referrals",
    "Agency / contractor",
    "Freelance / consultant",
    "Other",
  ],
  formMessage: "A bit about you and your audience",
  formAgreeBefore: "I give",
  formAgreeConsent: "consent",
  formAgreeMid: "to the processing of",
  formAgreeData: "personal data",
  formSubmit: "Send",
  formSuccess: "Thanks — we got your partnership note.",
  formSource: "en-partnership",
  footerBrand: "PRIME",
  footerTagline: "Partner program · digital marketing",
};

const partnerEs: PartnerContent = {
  path: "/es/partnership/",
  metaTitle: "Programa de partners — PRIME",
  metaDescription:
    "Hazte partner de PRIME: recomienda clientes de marketing digital y gana una comisión. Informes mensuales claros, contrato real y pagos sobre lo facturado — en todo el mundo.",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "Partners",
  menuLabel: "Menú",
  ctaTop: "Hazte partner",
  heroKicker: "Programa de partners",
  heroTitleBefore: "Recomienda PRIME — ",
  heroTitleAccent: "gana",
  heroTitleAfter: " cuando el cliente paga",
  heroLead:
    "Envíanos clientes para SEO, Google Ads y desarrollo web. Nosotros llevamos el proyecto, reportamos cada mes y pagamos sobre lo facturado — con contrato, sin letra pequeña.",
  heroCtaPrimary: "Hazte partner",
  heroCtaSecondary: "Por qué con nosotros",
  benefitsTitle: "Por qué asociarte con nosotros",
  benefitsLead: "Los mismos estándares con los que vendemos — empaquetados para que recomendarnos te dé orgullo.",
  benefits: [
    {
      title: "Nos apasiona el oficio",
      text: "No somos “una agencia más” — un equipo que vive el marketing digital y lo respalda con números.",
      tone: "p",
    },
    {
      title: "Nos hacemos cargo del proyecto",
      text: "Llevamos al cliente de punta a punta: desde la primera llamada hasta los informes mensuales y tu pago.",
      tone: "r",
    },
    {
      title: "Resultados que puedes mostrar",
      text: "Los casos de éxito son públicos. Crecimiento en Google, leads, CPL — fáciles de mostrar al recomendar.",
      tone: "m",
    },
    {
      title: "Compartimos lo que sabemos",
      text: "SEO, Google Ads y analítica — práctica y novedades para que estés al día en cualquier mercado.",
      tone: "e",
    },
    {
      title: "Pagos transparentes",
      text: "Se paga sobre resultados. Cada mes recibes un informe detallado: ves lo que paga el cliente y lo que ganas.",
      tone: "e",
    },
  ],
  whyTitle: "Qué obtienes como partner",
  whyLead: "Claro y sin sorpresas en la letra pequeña.",
  why: [
    "Recomienda PRIME — gana un porcentaje de lo que paga el cliente",
    "Nosotros llevamos el proyecto: no necesitas ser especialista en SEO",
    "Informes mensuales transparentes — fáciles de seguir",
    "Contrato por escrito y pagos regulares",
  ],
  showCases: true,
  casesTitle: "Trabajos que nos enorgullece mostrar",
  casesLead: "Proyectos activos que llevamos — y mostramos a los partners sin reservas.",
  cases: [
    {
      name: "Motorland Body",
      tag: "Taller de chapa y pintura",
      image: "/images/v6/partner-cases/kuzovnoy.webp",
      href: "/es/keysy/seo/motorland-kuzov/",
    },
    {
      name: "Vtorma",
      tag: "Reciclaje",
      image: "/images/v6/partner-cases/vtorma.webp",
      href: "/es/keysy/seo/vtorma/",
    },
    {
      name: "Kabelmontazh",
      tag: "Instalaciones eléctricas",
      image: "/images/v6/partner-cases/kabelmontazh.webp",
      href: "/es/keysy/seo/kabelmontazh/",
    },
    {
      name: "Fortuna",
      tag: "Taller mecánico",
      image: "/images/v6/partner-cases/fortuna.webp",
      href: "/es/keysy/ads/fortuna-avto/",
    },
    {
      name: "Svetlyachok",
      tag: "Centro infantil",
      image: "/images/v6/partner-cases/svetlyachok.webp",
      href: "/es/keysy/seo/det-zentr/",
    },
    {
      name: "Himopttorg",
      tag: "Química industrial",
      image: "/images/v6/partner-cases/himopttorg.webp",
      href: "/es/keysy/seo/himopttorg/",
    },
    {
      name: "Argument",
      tag: "Servicios legales",
      image: "/images/v6/partner-cases/argument.webp",
      href: "/es/keysy/web/argument/",
    },
    {
      name: "Skazka",
      tag: "Repostería",
      image: "/images/v6/partner-cases/skazka.webp",
      href: "/es/keysy/seo/skazka/",
    },
    {
      name: "Barokko",
      tag: "Cortinas",
      image: "/images/v6/partner-cases/barokko.webp",
      href: "/es/keysy/seo/barokko/",
    },
    {
      name: "Motorland",
      tag: "Concesionario",
      image: "/images/v6/partner-cases/motorland.webp",
      href: "/es/keysy/seo/motor-lend-nissan/",
    },
  ],
  casesViewAll: "Ver todos los trabajos",
  casesViewAllHref: "/es/keysy/",
  stepsTitle: "Cómo empezar",
  stepsLead: "Cuatro pasos — del email al primer cliente derivado.",
  steps: [
    {
      n: "01",
      title: "Postúlate",
      text: "Escribe a info@prime-ltd.su — cuéntanos tu audiencia y cómo quieres trabajar con nosotros.",
    },
    {
      n: "02",
      title: "Conversación",
      text: "Hablamos de tu nicho, el formato de colaboración y cualquier duda sobre el proceso.",
    },
    {
      n: "03",
      title: "Contrato",
      text: "Todo por escrito y en regla. Funciona para empresas y autónomos. Pagos mensuales.",
    },
    {
      n: "04",
      title: "En marcha",
      text: "Nos pasas el contacto (el cliente ya sabe que le llamaremos) — y arrancamos.",
    },
  ],
  statsTitle: "Algunos números",
  statsLead: "Referencias del programa de partners — plazos y pagos.",
  stats: [
    {
      value: 36,
      suffix: "+",
      label: "meses",
      desc: "Horizonte mínimo habitual de colaboración con un cliente",
    },
    {
      value: 13,
      suffix: "k $",
      label: "pagados",
      desc: "Lo que pagamos a nuestro mejor partner en un año",
    },
    {
      value: 40,
      suffix: "+",
      label: "partners",
      desc: "Cuánto ha crecido la red de partners en los años activos",
    },
  ],
  outcomesTitle: "Qué ganas como partner",
  outcomesLead: "Ingresos por recomendación — sin ejecutar el trabajo ni esquemas turbios.",
  outcomes: [
    {
      title: "Ingresos sin ejecución",
      text: "Tú recomiendas — nosotros nos encargamos del cliente: SEO, Google Ads, sitios web. Tú no eres el proveedor.",
    },
    {
      title: "Números claros",
      text: "Un porcentaje de lo que paga el cliente, un informe mensual detallado y pagos con contrato — sin esquemas turbios.",
    },
    {
      title: "Fácil de recomendar",
      text: "Casos de éxito y cifras publicadas en el sitio — muestran en qué se diferencia PRIME de una agencia efímera.",
    },
  ],
  nosTitle: "Lo que esto NO es",
  nosLead: "Para que nadie lo confunda con MLM ni con “se paga desde la primera llamada”.",
  nos: [
    {
      title: "No es multinivel ni una pirámide",
      text: "Recomiendas clientes y cobras un porcentaje de sus pagos. Sin reclutar una “red” debajo de ti.",
    },
    {
      title: "Sin promesa de “se paga desde la primera llamada”",
      text: "La comisión depende de pagos reales del cliente por servicios. Los términos y el porcentaje están en el contrato.",
    },
    {
      title: "No te dejamos la ejecución a ti",
      text: "Tú pasas el contacto (el cliente lo sabe) — nosotros nos encargamos de la estrategia, los informes y los resultados.",
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faqLead: "Quién puede unirse, cómo pagamos y si tienes que ejecutar el trabajo tú mismo.",
  faq: [
    {
      q: "¿Quién puede ser partner?",
      a: "Agencias, proveedores, freelancers, consultores — cualquiera que recomiende clientes. Funciona para empresas y autónomos; acordamos el formato desde el inicio.",
    },
    {
      q: "¿Cómo se calcula la comisión?",
      a: "Un porcentaje de los pagos del cliente por servicios de PRIME. El contrato recoge la base, los plazos y el orden de pago (normalmente mensual).",
    },
    {
      q: "¿Tengo que llevar el SEO o los anuncios yo mismo?",
      a: "No. Tú recomiendas y pasas el contacto. La ejecución, los informes y la comunicación con el cliente son responsabilidad nuestra.",
    },
    {
      q: "¿El cliente debe saber que soy partner?",
      a: "Sí. Antes de la llamada ya sabe que PRIME va a contactarle. Es un inicio más limpio y con menos sorpresas.",
    },
    {
      q: "¿Qué servicios cubre el programa?",
      a: "Normalmente SEO, Google Ads, desarrollo web y trabajos relacionados de agencia. En la conversación inicial confirmamos qué se ajusta mejor a tu audiencia en cualquier mercado.",
    },
  ],
  ctaTitle: "¿Listo para ser partner?",
  ctaLead:
    "Llevamos desde 2015 en esto — muchas agencias no han durado tanto. Cuéntanos cómo quieres trabajar: te respondemos, revisamos condiciones y enviamos el contrato.",
  formName: "Tu nombre",
  formPhone: "Teléfono",
  formEmail: "Email",
  formType: "Tipo de colaboración",
  formTypeOptions: [
    "Recomendación de clientes",
    "Agencia / proveedor",
    "Freelance / consultor",
    "Otro",
  ],
  formMessage: "Cuéntanos brevemente sobre ti y tu audiencia",
  formAgreeBefore: "Doy",
  formAgreeConsent: "consentimiento",
  formAgreeMid: "al tratamiento de",
  formAgreeData: "datos personales",
  formSubmit: "Enviar",
  formSuccess: "Gracias — recibimos tu solicitud de partnership.",
  formSource: "es-partnership",
  footerBrand: "PRIME",
  footerTagline: "Programa de partners · marketing digital",
};

export function getPartnerContent(locale: Locale): PartnerContent {
  if (locale === "en") return partnerEn;
  if (locale === "es") return partnerEs;
  return partnerRu;
}

export function partnerPath(locale: Locale): string {
  return getPartnerContent(locale).path;
}

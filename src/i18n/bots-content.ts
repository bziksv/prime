import type { Locale } from "./locales";
import {
  botsChaos,
  botsClean,
  botsFaq,
  botsFlow,
  botsNos,
  botsOutcomes,
  botsPillars,
  botsPlatforms,
  botsPricing,
  botsProblem,
  botsSteps,
} from "../data/bots-service";

export type BotsCleanRow =
  | { role: "bot" | "user"; text: string }
  | { role: "menu"; items: string[] };

export type BotsContent = {
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
  chatName: string;
  chatStatus: string;
  chatSteps: string[];
  chatMenu: string[];
  rail: string[];
  compareTitle: string;
  problemLead: string;
  chaosLabel: string;
  cleanLabel: string;
  chaos: string[];
  clean: BotsCleanRow[];
  distort: string;
  trust: string;
  cycle: string;
  pillarsTitle: string;
  pillarsLead: string;
  pillars: { n: string; title: string; text: string }[];
  platformsTitle: string;
  platformsLead: string;
  platforms: { title: string; text: string; tag: string }[];
  flowTitle: string;
  flow: { title: string; text: string }[];
  stepsTitle: string;
  stepsLead: string;
  stepPrefix: string;
  steps: { n: string; title: string; text: string }[];
  showCases: boolean;
  casesTitle: string;
  casesLead: string;
  casesAll: string;
  outcomesTitle: string;
  outcomesLead: string;
  outcomes: { title: string; text: string }[];
  nosTitle: string;
  nosLead: string;
  nos: { title: string; text: string }[];
  pricingTitle: string;
  pricingText: string;
  pricingMark: string;
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formBrand: string;
  formFocus: string;
  formFocusOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const botsRu: BotsContent = {
  path: "/razrabotka-botov-dlya-messendzherov/",
  metaTitle: "Разработка ботов для мессенджеров — ПРАЙМ",
  metaDescription:
    "Разработка ботов для Telegram и мессенджеров: сценарии, меню, уведомления, запись и связка с сайтом или CRM. Без спама и серых схем.",
  serviceName: "Разработка ботов для мессенджеров",
  serviceType: "Разработка чат-ботов",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Боты для мессенджеров",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroTitleBefore: "Боты, которые ведут сервис ",
  heroTitleAccent: "там, где клиент",
  heroLead:
    "Telegram и другие каналы: меню, уведомления, запись и вход — без отдельного приложения, со связкой с сайтом или CRM.",
  heroCtaPrimary: "Обсудить бота",
  heroCtaSecondary: "Как это выглядит",
  chatName: "Ваш бот",
  chatStatus: "в сети",
  chatSteps: [
    "Добро пожаловать — выберите действие",
    "Запись на завтра, 18:00",
    "Готово · напоминание придёт сюда",
  ],
  chatMenu: ["Запись", "Статус", "Поддержка"],
  rail: [
    "Telegram",
    "Меню",
    "Уведомления",
    "Запись",
    "Вход",
    "CRM",
    "Webhook",
    "WhatsApp",
    "Кабинет",
    "Без приложения",
  ],
  compareTitle: "Групповой чат vs бот",
  problemLead: botsProblem.lead,
  chaosLabel: "Как сейчас",
  cleanLabel: "С ботом",
  chaos: [...botsChaos],
  clean: botsClean.map((row) =>
    row.role === "menu"
      ? { role: "menu" as const, items: [...row.items] }
      : { role: row.role, text: row.text },
  ),
  distort: botsProblem.distort,
  trust: botsProblem.trust,
  cycle: botsProblem.cycle,
  pillarsTitle: "Что собираем",
  pillarsLead: "Сценарии, пуши, интеграции и админка — под задачу, не «универсальный чат».",
  pillars: botsPillars.map((p) => ({ ...p })),
  platformsTitle: "Каналы и связки",
  platformsLead: "От Telegram до CRM — без серых обходов площадок.",
  platforms: botsPlatforms.map((p) => ({ ...p })),
  flowTitle: "Один продукт, три точки",
  flow: botsFlow.map((f) => ({ ...f })),
  stepsTitle: "Как выстраиваем работу",
  stepsLead: "От задачи и каналов до запуска и доработок по факту.",
  stepPrefix: "Шаг",
  steps: botsSteps.map((s) => ({ ...s })),
  showCases: true,
  casesTitle: "Кейсы по ботам",
  casesLead: "Реальные продукты со слоем в мессенджере.",
  casesAll: "Все кейсы по ботам",
  outcomesTitle: "Что меняется",
  outcomesLead: "Не «бот ради галочки» — канал сервиса рядом с сайтом.",
  outcomes: botsOutcomes.map((o) => ({ ...o })),
  nosTitle: "Чего не делаем",
  nosLead: "Чтобы не путать бота со спам-рассылкой.",
  nos: botsNos.map((n) => ({ ...n })),
  pricingTitle: botsPricing.title,
  pricingText: botsPricing.text,
  pricingMark: "После разбора сценариев",
  faqTitle: "Частые вопросы",
  faqLead: "Каналы, сроки, CRM и роль менеджера.",
  faq: botsFaq.map((f) => ({ ...f })),
  ctaTitle: "Нужен бот под ваш сервис?",
  ctaLead:
    "Разберём канал, сценарии и связку с сайтом или CRM — и предложим план без обязательств.",
  ctaPoints: [
    "Telegram и официальные API",
    "Меню, уведомления, записи, вход",
    "Связка с сайтом и CRM",
    "Разбор задачи за 30 минут",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formBrand: "Компания / продукт",
  formFocus: "Что приоритетнее",
  formFocusOptions: [
    "Заявки и квалификация лида",
    "Запись / брони",
    "Уведомления и статусы",
    "Вход и кабинет через бота",
    "Комплекс · сайт + бот",
  ],
  formMessage: "Канал, сценарии, есть ли сайт или CRM?",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка по ботам принята — свяжемся с вами.",
  formSource: "razrabotka-botov-dlya-messendzherov",
  footerBrand: "ПРАЙМ",
  footerTagline: "Боты для мессенджеров · Telegram · интеграции",
};

const botsEn: BotsContent = {
  path: "/en/bots/",
  metaTitle: "Chatbots — PRIME",
  metaDescription:
    "Telegram and messenger chatbots: menus, alerts, bookings, and login — wired to your site or CRM. Official APIs only. No spam, no gray-area shortcuts.",
  serviceName: "Chatbots",
  serviceType: "Chatbot development",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Chatbots",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Bots that deliver service ",
  heroTitleAccent: "where customers already chat",
  heroLead:
    "Telegram and beyond: menus, alerts, booking, and login — no separate app, wired into your site or CRM.",
  heroCtaPrimary: "Discuss your bot",
  heroCtaSecondary: "See how it looks",
  chatName: "Your bot",
  chatStatus: "online",
  chatSteps: [
    "Welcome — pick an action",
    "Booked for tomorrow, 6:00 PM",
    "Done · reminder lands here",
  ],
  chatMenu: ["Book", "Status", "Support"],
  rail: [
    "Telegram",
    "Menus",
    "Notifications",
    "Booking",
    "Login",
    "CRM",
    "Webhook",
    "WhatsApp",
    "Account",
    "No app needed",
  ],
  compareTitle: "Group chat vs bot",
  problemLead:
    "Your customers already live in messengers. Leads, statuses, and reminders still bounce around email, forms, and group chats — and get lost.",
  chaosLabel: "How it looks now",
  cleanLabel: "With a bot",
  chaos: [
    "who’s free at 6??",
    "send the price list again",
    "order status?",
    "move it to tomorrow",
    "anyone there?",
  ],
  clean: [
    { role: "bot", text: "Pick an action" },
    { role: "menu", items: ["Book", "Status", "Support"] },
    { role: "user", text: "Book · tomorrow 6:00 PM" },
    { role: "bot", text: "Done. Reminder will land here." },
  ],
  distort:
    "The team replies late; the customer pings whoever answers first. You’ve got a website — but no real-time channel.",
  trust:
    "A bot isn’t a gimmick or a spam blast. It’s a product layer next to your site and CRM: login, menus, pushes, and bookings where people already are.",
  cycle:
    "More manual chats means more load and more chaos: the same questions, missed bookings, alerts only “if someone remembered.”",
  pillarsTitle: "What we build",
  pillarsLead:
    "Flows, pushes, integrations, and an admin — scoped to the job, not a catch-all chat toy.",
  pillars: [
    {
      n: "01",
      title: "Flows that match the job",
      text: "Login and confirmation, booking, order status, FAQ, lead qualification — clear branches, not one endless thread.",
    },
    {
      n: "02",
      title: "Menus and alerts",
      text: "Buttons instead of slash commands, an opt-in push catalog: bookings, statuses, updates — no cold DMs.",
    },
    {
      n: "03",
      title: "Wired to site and CRM",
      text: "One backend with a web account or CRM export — the bot doesn’t sit on its own island database.",
    },
    {
      n: "04",
      title: "Admin your team can own",
      text: "Who moderates, which flows run, how copy and roles get edited — without “only the developer can touch it.”",
    },
  ],
  platformsTitle: "Channels and connections",
  platformsLead: "From Telegram to CRM — official APIs only, no gray-area workarounds.",
  platforms: [
    {
      title: "Telegram",
      text: "Primary channel: webhook, menus, pushes, deep link into your web product.",
      tag: "usual start",
    },
    {
      title: "WhatsApp Business",
      text: "When your audience is already there and you have official API access.",
      tag: "as needed",
    },
    {
      title: "Site + bot",
      text: "Sign in on the site, confirm in messenger, keep account and alerts in sync.",
      tag: "one product",
    },
    {
      title: "CRM",
      text: "Leads and statuses land with your team; customers only see what they need.",
      tag: "integration",
    },
  ],
  flowTitle: "One product, three touchpoints",
  flow: [
    { title: "Site / form", text: "Lead, login, account" },
    { title: "Bot", text: "Menus, pushes, flows" },
    { title: "CRM / team", text: "Leads and escalations" },
  ],
  stepsTitle: "How we work",
  stepsLead: "From the job and channels to launch — then iterate on what real users do.",
  stepPrefix: "Step",
  steps: [
    {
      n: "01",
      title: "Job and channels",
      text: "What the bot should cover: leads, booking, statuses, login. Where the audience already is.",
    },
    {
      n: "02",
      title: "Flows and integrations",
      text: "Branches, roles, site/CRM wiring, notification catalog.",
    },
    {
      n: "03",
      title: "Build and test",
      text: "Webhook, menus, pushes, admin flows. Real paths before go-live.",
    },
    {
      n: "04",
      title: "Launch and iterate",
      text: "Ship to prod, watch reply metrics, fix copy and branches from live use.",
    },
  ],
  showCases: false,
  casesTitle: "Bot work",
  casesLead: "Real products with a messenger layer.",
  casesAll: "See all bot work",
  outcomesTitle: "What changes",
  outcomesLead: "Not a checkbox bot — a service channel that sits next to the site.",
  outcomes: [
    {
      title: "A channel without an app",
      text: "Customers message where they already have an account.",
    },
    {
      title: "Less busywork",
      text: "The bot handles common questions and reminders.",
    },
    {
      title: "One product with the site",
      text: "Session and pushes stay aligned — not two separate databases.",
    },
  ],
  nosTitle: "What we won’t do",
  nosLead: "So a bot never gets mistaken for a spam blast.",
  nos: [
    {
      title: "No cold spam",
      text: "Opt-in and useful flows only.",
    },
    {
      title: "No “weekend bot” promise",
      text: "Timeline depends on flows and integrations.",
    },
    {
      title: "No platform rule dodging",
      text: "Official APIs. Gray schemes aren’t on our map.",
    },
  ],
  pricingTitle: "Pricing is scoped to the build",
  pricingText:
    "We quote after we understand flows, channel, site/CRM wiring, and whether your team needs an admin panel.",
  pricingMark: "After flow discovery",
  faqTitle: "FAQ",
  faqLead: "Channels, timelines, CRM, and where people still matter.",
  faq: [
    {
      q: "Which messenger should we start with?",
      a: "Usually Telegram: faster flows, webhooks, and site wiring. WhatsApp and others when the audience is already there and official API access exists.",
    },
    {
      q: "Will the bot replace our team?",
      a: "No. The bot handles routine and routing. Complex questions, sales, and escalations stay with people.",
    },
    {
      q: "Can you connect our site or CRM?",
      a: "Yes. Typical path — one backend with a web account, or lead/status sync with CRM. We scope the integration at kickoff.",
    },
    {
      q: "How long to launch?",
      a: "A simple flow (menu + leads + notifications) is usually a few weeks. Complex roles, booking, and deep CRM take longer. We lock the timeline after discovery.",
    },
    {
      q: "Do you only build Telegram bots?",
      a: "Telegram is the main and most common channel. Other messengers when the job needs them and legal API access is available.",
    },
  ],
  ctaTitle: "Need a bot for your service?",
  ctaLead:
    "We’ll walk through channel, flows, and site/CRM wiring — then send a plan with no obligation.",
  ctaPoints: [
    "Telegram and official APIs",
    "Menus, alerts, bookings, login",
    "Wired to site and CRM",
    "30-minute discovery call",
  ],
  formName: "Name",
  formPhone: "Phone",
  formBrand: "Company / product",
  formFocus: "What’s the priority?",
  formFocusOptions: [
    "Leads and qualification",
    "Booking / reservations",
    "Notifications and statuses",
    "Login and account via bot",
    "Full stack · site + bot",
  ],
  formMessage: "Channel, flows — do you have a site or CRM?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Send",
  formSuccess: "Thanks — we got it. We’ll follow up about your bot.",
  formSource: "en-bots",
  footerBrand: "PRIME",
  footerTagline: "Chatbots · Telegram · integrations",
};

const botsEs: BotsContent = {
  path: "/es/bots/",
  metaTitle: "Chatbots — PRIME",
  metaDescription:
    "Chatbots para Telegram y otras apps de mensajería: menús, avisos, reservas y acceso — conectados a tu sitio o CRM. Solo APIs oficiales. Sin spam ni trucos de zona gris.",
  serviceName: "Chatbots",
  serviceType: "Desarrollo de chatbots",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "Chatbots",
  menuLabel: "Menú",
  ctaTop: "Hablemos",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Bots que dan servicio ",
  heroTitleAccent: "donde tus clientes ya están",
  heroLead:
    "Telegram y más allá: menús, avisos, reservas y acceso — sin una app aparte, conectado a tu sitio o CRM.",
  heroCtaPrimary: "Cuéntanos tu bot",
  heroCtaSecondary: "Ver cómo funciona",
  chatName: "Tu bot",
  chatStatus: "en línea",
  chatSteps: [
    "Bienvenida — elige una opción",
    "Reservado para mañana, 18:00",
    "Listo · el recordatorio llega aquí",
  ],
  chatMenu: ["Reservar", "Estado", "Soporte"],
  rail: [
    "Telegram",
    "Menús",
    "Notificaciones",
    "Reservas",
    "Acceso",
    "CRM",
    "Webhook",
    "WhatsApp",
    "Cuenta",
    "Sin app",
  ],
  compareTitle: "Chat grupal vs. bot",
  problemLead:
    "Tus clientes ya viven en apps de mensajería. Los leads, los estados y los recordatorios siguen rebotando entre correos, formularios y chats grupales — y se pierden.",
  chaosLabel: "Cómo es ahora",
  cleanLabel: "Con un bot",
  chaos: [
    "¿quién está libre a las 6??",
    "manda otra vez la lista de precios",
    "¿estado del pedido?",
    "pásalo para mañana",
    "¿hay alguien ahí?",
  ],
  clean: [
    { role: "bot", text: "Elige una opción" },
    { role: "menu", items: ["Reservar", "Estado", "Soporte"] },
    { role: "user", text: "Reservar · mañana 18:00" },
    { role: "bot", text: "Listo. El recordatorio llegará aquí." },
  ],
  distort:
    "El equipo responde tarde; el cliente escribe a quien conteste primero. Tienes un sitio web — pero no un canal en tiempo real.",
  trust:
    "Un bot no es un capricho ni una tanda de spam. Es una capa de producto junto a tu sitio y tu CRM: acceso, menús, avisos y reservas donde la gente ya está.",
  cycle:
    "Más chats manuales significa más carga y más caos: las mismas preguntas repetidas, reservas perdidas, avisos que solo llegan “si alguien se acordó”.",
  pillarsTitle: "Qué construimos",
  pillarsLead:
    "Flujos, avisos, integraciones y un panel — a medida del proyecto, no un chat genérico para todo.",
  pillars: [
    {
      n: "01",
      title: "Flujos según la necesidad",
      text: "Acceso y confirmación, reservas, estado de pedidos, FAQ, calificación de leads — ramas claras, no un único hilo interminable.",
    },
    {
      n: "02",
      title: "Menús y avisos",
      text: "Botones en vez de comandos con barra, un catálogo de notificaciones con opt-in: reservas, estados, novedades — sin mensajes fríos.",
    },
    {
      n: "03",
      title: "Conectado al sitio y al CRM",
      text: "Un solo backend con cuenta web o exportación a CRM — el bot no vive en una isla de datos aparte.",
    },
    {
      n: "04",
      title: "Un panel que tu equipo puede manejar",
      text: "Quién modera, qué flujos corren, cómo se editan textos y roles — sin depender siempre del programador.",
    },
  ],
  platformsTitle: "Canales y conexiones",
  platformsLead: "De Telegram al CRM — solo APIs oficiales, sin rodeos de zona gris.",
  platforms: [
    {
      title: "Telegram",
      text: "Canal principal: webhook, menús, avisos, enlace directo a tu producto web.",
      tag: "punto de partida habitual",
    },
    {
      title: "WhatsApp Business",
      text: "Cuando tu audiencia ya está ahí y tienes acceso a la API oficial.",
      tag: "según el caso",
    },
    {
      title: "Sitio + bot",
      text: "Inicio de sesión en el sitio, confirmación en la app de mensajería, cuenta y avisos siempre sincronizados.",
      tag: "un solo producto",
    },
    {
      title: "CRM",
      text: "Los leads y estados llegan a tu equipo; los clientes solo ven lo que necesitan.",
      tag: "integración",
    },
  ],
  flowTitle: "Un producto, tres puntos de contacto",
  flow: [
    { title: "Sitio / formulario", text: "Lead, acceso, cuenta" },
    { title: "Bot", text: "Menús, avisos, flujos" },
    { title: "CRM / equipo", text: "Leads y casos escalados" },
  ],
  stepsTitle: "Cómo trabajamos",
  stepsLead: "Del proyecto y los canales al lanzamiento — y luego ajustamos según el uso real.",
  stepPrefix: "Paso",
  steps: [
    {
      n: "01",
      title: "Proyecto y canales",
      text: "Qué debe cubrir el bot: leads, reservas, estados, acceso. Dónde ya está tu audiencia.",
    },
    {
      n: "02",
      title: "Flujos e integraciones",
      text: "Ramas, roles, conexión con sitio/CRM, catálogo de notificaciones.",
    },
    {
      n: "03",
      title: "Desarrollo y pruebas",
      text: "Webhook, menús, avisos, flujos de administración. Rutas reales antes de salir en vivo.",
    },
    {
      n: "04",
      title: "Lanzamiento y mejora continua",
      text: "Publicamos en producción, seguimos las métricas de respuesta y ajustamos textos y ramas con el uso real.",
    },
  ],
  showCases: false,
  casesTitle: "Trabajos con bots",
  casesLead: "Productos reales con una capa de mensajería.",
  casesAll: "Ver todos los trabajos con bots",
  outcomesTitle: "Qué cambia",
  outcomesLead: "No un bot de relleno — un canal de servicio junto al sitio.",
  outcomes: [
    { title: "Un canal sin app propia", text: "Los clientes escriben donde ya tienen una cuenta." },
    { title: "Menos trabajo manual", text: "El bot resuelve las preguntas y recordatorios habituales." },
    {
      title: "Un solo producto con el sitio",
      text: "La sesión y los avisos se mantienen sincronizados — no dos bases de datos separadas.",
    },
  ],
  nosTitle: "Qué no vamos a hacer",
  nosLead: "Para que un bot nunca se confunda con una tanda de spam.",
  nos: [
    { title: "Sin spam frío", text: "Solo flujos con opt-in y que aporten algo." },
    {
      title: "Sin promesas de “bot en un fin de semana”",
      text: "El plazo depende de los flujos y las integraciones.",
    },
    {
      title: "Sin saltarse las reglas de las plataformas",
      text: "Solo APIs oficiales. Los esquemas de zona gris no están en nuestro radar.",
    },
  ],
  pricingTitle: "El precio se ajusta al proyecto",
  pricingText:
    "Cotizamos después de entender los flujos, el canal, la conexión con sitio/CRM y si tu equipo necesita un panel de administración.",
  pricingMark: "Después de definir los flujos",
  faqTitle: "Preguntas frecuentes",
  faqLead: "Canales, plazos, CRM y el papel de las personas.",
  faq: [
    {
      q: "¿Con qué app de mensajería deberíamos empezar?",
      a: "Normalmente Telegram: flujos más rápidos, webhooks y conexión con el sitio. WhatsApp y otras cuando la audiencia ya está ahí y hay acceso a la API oficial.",
    },
    {
      q: "¿El bot va a reemplazar a nuestro equipo?",
      a: "No. El bot se encarga de lo rutinario y de dirigir las conversaciones. Las preguntas complejas, las ventas y los casos delicados siguen con personas.",
    },
    {
      q: "¿Pueden conectar nuestro sitio o CRM?",
      a: "Sí. El camino habitual es un solo backend con cuenta web, o sincronización de leads/estados con el CRM. Definimos el alcance de la integración al arrancar.",
    },
    {
      q: "¿Cuánto tarda el lanzamiento?",
      a: "Un flujo simple (menú + leads + notificaciones) suele tomar unas semanas. Roles complejos, reservas y CRM a fondo llevan más tiempo. Fijamos el plazo después de la fase de descubrimiento.",
    },
    {
      q: "¿Solo hacen bots para Telegram?",
      a: "Telegram es el canal principal y más habitual. Trabajamos con otras apps de mensajería cuando el proyecto lo pide y hay acceso legal a la API.",
    },
  ],
  ctaTitle: "¿Necesitas un bot para tu servicio?",
  ctaLead:
    "Revisamos canal, flujos y conexión con sitio/CRM — y te enviamos un plan sin compromiso.",
  ctaPoints: [
    "Telegram y APIs oficiales",
    "Menús, avisos, reservas, acceso",
    "Conectado a sitio y CRM",
    "Llamada de descubrimiento de 30 minutos",
  ],
  formName: "Nombre",
  formPhone: "Teléfono",
  formBrand: "Empresa / producto",
  formFocus: "¿Qué es prioritario?",
  formFocusOptions: [
    "Leads y calificación",
    "Reservas / turnos",
    "Notificaciones y estados",
    "Acceso y cuenta vía bot",
    "Todo junto · sitio + bot",
  ],
  formMessage: "Canal, flujos — ¿tienes sitio o CRM?",
  formAgreeBefore: "Acepto el tratamiento de datos personales conforme a nuestra",
  formAgreePolicy: "política de privacidad",
  formSubmit: "Enviar",
  formSuccess: "Gracias, lo recibimos. Te contactaremos sobre tu bot.",
  formSource: "es-bots",
  footerBrand: "PRIME",
  footerTagline: "Chatbots · Telegram · integraciones",
};

export function getBotsContent(locale: Locale): BotsContent {
  if (locale === "en") return botsEn;
  if (locale === "es") return botsEs;
  return botsRu;
}

export function botsPath(locale: Locale): string {
  return getBotsContent(locale).path;
}

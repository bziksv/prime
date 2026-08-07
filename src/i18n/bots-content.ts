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
  metaTitle: "Messenger bots — PRIME",
  metaDescription:
    "Telegram and messenger bots: menus, notifications, bookings and login — linked to your website or CRM. Official APIs only, no spam or grey schemes.",
  serviceName: "Messenger bots",
  serviceType: "Chatbot development",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Messenger bots",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Bots that run service ",
  heroTitleAccent: "where customers already are",
  heroLead:
    "Telegram and other channels: menus, notifications, booking and login — no separate app, wired to your site or CRM.",
  heroCtaPrimary: "Discuss a bot",
  heroCtaSecondary: "See how it looks",
  chatName: "Your bot",
  chatStatus: "online",
  chatSteps: [
    "Welcome — choose an action",
    "Book for tomorrow, 6:00 PM",
    "Done · reminder will land here",
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
    "Customers already live in messengers. Leads, statuses and reminders still sit in email, forms and group chats — and get lost.",
  chaosLabel: "How it is now",
  cleanLabel: "With a bot",
  chaos: [
    "who’s free at 6??",
    "send the price list again",
    "order status?",
    "move it to tomorrow",
    "manager, you there?",
  ],
  clean: [
    { role: "bot", text: "Choose an action" },
    { role: "menu", items: ["Book", "Status", "Support"] },
    { role: "user", text: "Book · tomorrow 6:00 PM" },
    { role: "bot", text: "Done. Reminder will arrive here." },
  ],
  distort:
    "The manager replies late, the customer leaves for whoever answers in Telegram. You have a site — but no “here and now” channel.",
  trust:
    "A bot isn’t a toy or a spam blast. It’s a product layer next to the site and CRM: login, menus, pushes and bookings where people already sit.",
  cycle:
    "The more manual chats, the more load and chaos: the same questions, forgotten bookings, notifications only “if someone remembered.”",
  pillarsTitle: "What we build",
  pillarsLead:
    "Flows, pushes, integrations and an admin panel — for your job, not a “universal chat.”",
  pillars: [
    {
      n: "01",
      title: "Flows for the job",
      text: "Login and confirmation, booking, order status, FAQ, lead qualification — clear branches, not a catch-all chat.",
    },
    {
      n: "02",
      title: "Menus and notifications",
      text: "Buttons instead of commands, an opt-in push catalog: matches, bookings, statuses — no spam DMs.",
    },
    {
      n: "03",
      title: "Wired to site and CRM",
      text: "One backend with a web account or CRM export: the bot doesn’t live on an island database.",
    },
    {
      n: "04",
      title: "Admin and support",
      text: "Who moderates, which flows, how to edit copy and roles — without “only via a developer.”",
    },
  ],
  platformsTitle: "Channels and links",
  platformsLead: "From Telegram to CRM — official APIs only, no grey workarounds.",
  platforms: [
    {
      title: "Telegram",
      text: "Primary channel: webhook, menus, pushes, deep link to your web service.",
      tag: "usual start",
    },
    {
      title: "WhatsApp Business",
      text: "When your audience is already there and official API access is available.",
      tag: "by need",
    },
    {
      title: "Site + bot",
      text: "Sign-in from the site, confirm in messenger, account and notifications.",
      tag: "one product",
    },
    {
      title: "CRM",
      text: "Leads and statuses go to the team; customers get only what they need.",
      tag: "integration",
    },
  ],
  flowTitle: "One product, three points",
  flow: [
    { title: "Site / form", text: "Lead, login, account" },
    { title: "Bot", text: "Menus, pushes, flows" },
    { title: "CRM / team", text: "Leads and escalations" },
  ],
  stepsTitle: "How we work",
  stepsLead: "From the job and channels to launch and real-world tweaks.",
  stepPrefix: "Step",
  steps: [
    {
      n: "01",
      title: "Job and channels",
      text: "What the bot should cover: leads, booking, statuses, login. Where the audience is.",
    },
    {
      n: "02",
      title: "Flows and integrations",
      text: "Branches, roles, site/CRM wiring, notification catalog.",
    },
    {
      n: "03",
      title: "Build and test",
      text: "Webhook, menus, pushes, admin flows. Real paths before launch.",
    },
    {
      n: "04",
      title: "Launch and iterate",
      text: "Prod, reply metrics, copy and branch fixes from live use.",
    },
  ],
  showCases: false,
  casesTitle: "Bot case studies",
  casesLead: "Real products with a messenger layer.",
  casesAll: "All bot cases",
  outcomesTitle: "What changes",
  outcomesLead: "Not a “bot for the checklist” — a service channel next to the site.",
  outcomes: [
    {
      title: "Channel without an app",
      text: "Customers message where they already have an account.",
    },
    {
      title: "Less routine",
      text: "The bot handles common questions and reminders.",
    },
    {
      title: "One product with the site",
      text: "Session and pushes stay aligned — not two databases.",
    },
  ],
  nosTitle: "What we don’t do",
  nosLead: "So a bot never gets confused with a spam blast.",
  nos: [
    {
      title: "No cold spam",
      text: "Opt-in and useful flows only.",
    },
    {
      title: "No “bot over a weekend” promise",
      text: "Timeline depends on flows and integrations.",
    },
    {
      title: "No platform rule dodging",
      text: "Official APIs. Grey schemes are off our map.",
    },
  ],
  pricingTitle: "Pricing is individual",
  pricingText:
    "We quote after we understand flows, channel, site/CRM wiring and whether your team needs an admin panel.",
  pricingMark: "After flow discovery",
  faqTitle: "FAQ",
  faqLead: "Channels, timelines, CRM and the manager’s role.",
  faq: [
    {
      q: "Which messenger should we start with?",
      a: "Most often Telegram: faster flows, webhooks and site wiring. WhatsApp and others when the audience is already there and official API access exists.",
    },
    {
      q: "Will the bot replace the manager?",
      a: "No. The bot covers routine and routing. Complex questions, sales and escalations stay with people.",
    },
    {
      q: "Can you connect our site or CRM?",
      a: "Yes. Typical path — one backend with a web account, or lead/status sync with CRM. We scope the integration at kickoff.",
    },
    {
      q: "How long to launch?",
      a: "A simple flow (menu + leads + notifications) is usually a few weeks. Complex roles, booking and deep CRM take longer. We lock the timeline after discovery.",
    },
    {
      q: "Do you only build Telegram bots?",
      a: "Telegram is the main and most common channel. Other messengers when the job needs them and legal API access is available.",
    },
  ],
  ctaTitle: "Need a bot for your service?",
  ctaLead:
    "We’ll review channel, flows and site/CRM wiring — and propose a plan with no obligation.",
  ctaPoints: [
    "Telegram and official APIs",
    "Menus, notifications, bookings, login",
    "Wired to site and CRM",
    "30-minute discovery call",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formBrand: "Company / product",
  formFocus: "What’s the priority",
  formFocusOptions: [
    "Leads and qualification",
    "Booking / reservations",
    "Notifications and statuses",
    "Login and account via bot",
    "Full stack · site + bot",
  ],
  formMessage: "Channel, flows, do you have a site or CRM?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your bots request is in — we’ll get back to you.",
  formSource: "en-bots",
  footerBrand: "PRIME",
  footerTagline: "Messenger bots · Telegram · integrations",
};

export function getBotsContent(locale: Locale): BotsContent {
  if (locale === "en") return botsEn;
  return botsRu;
}

export function botsPath(locale: Locale): string {
  return getBotsContent(locale).path;
}

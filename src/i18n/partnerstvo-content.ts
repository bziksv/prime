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
  formAgreePolicy: string;
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
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
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
    "Partner with PRIME: refer digital marketing clients, earn a commission. Transparent reports, contract and monthly payouts worldwide.",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Partnership",
  menuLabel: "Menu",
  ctaTop: "Become a partner",
  heroKicker: "Partner program",
  heroTitleBefore: "Refer PRIME — ",
  heroTitleAccent: "earn",
  heroTitleAfter: " together with us",
  heroLead:
    "Bring clients for SEO, Google Ads and web development. We run projects, report monthly and pay partners on actuals — officially and transparently.",
  heroCtaPrimary: "Become a partner",
  heroCtaSecondary: "Why work with us",
  benefitsTitle: "Why partner with us",
  benefitsLead:
    "The same principles as always — in packaging you’ll actually want to share.",
  benefits: [
    {
      title: "We love what we do",
      text: "Not “just another agency” — a team that lives digital marketing and proves it in numbers.",
      tone: "p",
    },
    {
      title: "Full project ownership",
      text: "We take the client end to end: from the first call to monthly reports and payouts.",
      tone: "r",
    },
    {
      title: "Proud of results",
      text: "Cases stay visible. Rankings, leads, CPL — on display so referrals are easy.",
      tone: "m",
    },
    {
      title: "We share expertise",
      text: "SEO, Google Ads and analytics news and practice — so you stay current worldwide.",
      tone: "e",
    },
    {
      title: "Transparent payouts",
      text: "Pay for performance. Each month — a detailed report. You see what the client pays and what you earn.",
      tone: "e",
    },
  ],
  whyTitle: "What you get as a partner",
  whyLead: "Short and clear — no hidden terms.",
  why: [
    "Refer PRIME — earn a percentage of client payments",
    "We run the project: you don’t need to be an SEO specialist",
    "Transparent monthly reports — easy to track",
    "Official contract and regular payouts",
  ],
  showCases: true,
  casesTitle: "Projects we’re proud to show",
  casesLead: "Work we run and share openly with partners.",
  cases: [
    {
      name: "Кузовной",
      tag: "Auto repair",
      image: "/images/v6/partner-cases/kuzovnoy.webp",
      href: "/keysy/seo/motorland-kuzov/",
    },
    {
      name: "Вторма",
      tag: "Recycling",
      image: "/images/v6/partner-cases/vtorma.webp",
      href: "/keysy/seo/vtorma/",
    },
    {
      name: "Кабельмонтаж",
      tag: "Electrical",
      image: "/images/v6/partner-cases/kabelmontazh.webp",
      href: "/keysy/seo/kabelmontazh/",
    },
    {
      name: "Фортуна",
      tag: "Auto repair",
      image: "/images/v6/partner-cases/fortuna.webp",
      href: "/keysy/ads/fortuna-avto/",
    },
    {
      name: "Светлячок",
      tag: "Kids center",
      image: "/images/v6/partner-cases/svetlyachok.webp",
      href: "/keysy/seo/det-zentr/",
    },
    {
      name: "Химоптторг",
      tag: "Chemicals",
      image: "/images/v6/partner-cases/himopttorg.webp",
      href: "/keysy/seo/himopttorg/",
    },
    {
      name: "Аргумент",
      tag: "Legal",
      image: "/images/v6/partner-cases/argument.webp",
      href: "/keysy/web/argument/",
    },
    {
      name: "Сказка",
      tag: "Confectionery",
      image: "/images/v6/partner-cases/skazka.webp",
      href: "/keysy/seo/skazka/",
    },
    {
      name: "Барокко",
      tag: "Curtains",
      image: "/images/v6/partner-cases/barokko.webp",
      href: "/keysy/seo/barokko/",
    },
    {
      name: "Моторленд",
      tag: "Car dealership",
      image: "/images/v6/partner-cases/motorland.webp",
      href: "/keysy/seo/motor-lend-nissan/",
    },
  ],
  casesViewAll: "View all case studies",
  casesViewAllHref: "/keysy/",
  stepsTitle: "How to start",
  stepsLead: "Four steps — from email to the first client handoff.",
  steps: [
    {
      n: "01",
      title: "Application",
      text: "Write to info@prime-ltd.su — tell us about your audience and format.",
    },
    {
      n: "02",
      title: "Review",
      text: "We discuss niche, partnership format and every process question.",
    },
    {
      n: "03",
      title: "Contract",
      text: "Official paperwork. We work with companies and individuals. Payouts — monthly.",
    },
    {
      n: "04",
      title: "Launch",
      text: "You pass contacts (client is warned about the call) — and we start work.",
    },
  ],
  statsTitle: "A few numbers",
  statsLead: "Partner program benchmarks — timelines and payouts.",
  stats: [
    {
      value: 36,
      suffix: "+",
      label: "months",
      desc: "Typical minimum client cooperation horizon with us",
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
      desc: "How much the partner network has grown over active years",
    },
  ],
  outcomesTitle: "What you earn as a partner",
  outcomesLead: "Income from referrals — without running projects or grey schemes.",
  outcomes: [
    {
      title: "Income without project delivery",
      text: "You refer — we take the client: SEO, Google Ads, websites. You don’t need to be the contractor.",
    },
    {
      title: "Clear economics",
      text: "Percentage of client payments, a detailed monthly report and contract payouts — no grey schemes.",
    },
    {
      title: "Easy to recommend",
      text: "Cases and numbers on the site — show how PRIME differs from a “six-month agency.”",
    },
  ],
  nosTitle: "What this is not",
  nosLead: "So partnership isn’t confused with MLM or “payout from the first call.”",
  nos: [
    {
      title: "Not multilevel or a “pyramid”",
      text: "The program is client referrals and a share of their payments. No recruiting “downline” partners.",
    },
    {
      title: "We don’t promise payout “from the first call”",
      text: "Reward ties to real client payments for services. Terms and percentage are fixed in the contract.",
    },
    {
      title: "We don’t push delivery onto you",
      text: "You pass the contact (client is warned) — we handle strategy, reports and results.",
    },
  ],
  faqTitle: "FAQ",
  faqLead: "Who fits, how we pay and whether you need to run the project yourself.",
  faq: [
    {
      q: "Who can become a partner?",
      a: "Agencies, contractors, freelancers, consultants and anyone who refers clients. We work with companies and individuals — format is agreed at the start.",
    },
    {
      q: "How is reward calculated?",
      a: "A percentage of client payments for PRIME services. Details in the contract: calculation base, timing and payout order (usually monthly).",
    },
    {
      q: "Do I need to run SEO or ads myself?",
      a: "No. You refer and pass the contact. Project delivery, reports and client communication are on us.",
    },
    {
      q: "Should the client know I’m a partner?",
      a: "Yes: before the call the client is told PRIME will reach out. It’s cleaner and avoids misunderstandings at start.",
    },
    {
      q: "Which services does the program cover?",
      a: "Typically SEO, Google Ads, web development and related agency services. On review we’ll confirm what fits your audience worldwide.",
    },
  ],
  ctaTitle: "Submit a request — we’ll get back to you",
  ctaLead:
    "We’ve been in market since 2015 — many agencies closed in that time. Tell us your cooperation format: we’ll reply, walk through terms and send a contract.",
  formName: "Your name",
  formPhone: "Phone",
  formEmail: "Email",
  formType: "Cooperation format",
  formTypeOptions: [
    "Client referrals",
    "Agency / contractor",
    "Freelance / consultant",
    "Other",
  ],
  formMessage: "Briefly about you and your audience",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit a request",
  formSuccess: "Thanks! Your partnership request is in.",
  formSource: "en-partnership",
  footerBrand: "PRIME",
  footerTagline: "Partner program · digital marketing",
};

export function getPartnerContent(locale: Locale): PartnerContent {
  if (locale === "en") return partnerEn;
  return partnerRu;
}

export function partnerPath(locale: Locale): string {
  return getPartnerContent(locale).path;
}

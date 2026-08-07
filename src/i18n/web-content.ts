import type { Locale } from "./locales";
import {
  webBrand,
  webCms,
  webDevice,
  webFaq,
  webNos,
  webPlatforms,
  webProducts,
  webProof,
  webSpectrum,
  webSpeed,
} from "../data/web-service";

export type WebProofChip =
  | string
  | { label: string; what: string; how: string };

export type WebProduct = {
  id: string;
  title: string;
  price: string;
  lead: string;
  note: string;
  tags: string[];
  screen: string;
  badge: string;
  discussCta: string;
};

export type WebPlatform = { name: string; text: string };

export type WebContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  serviceName: string;
  serviceType: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  menuLabel: string;
  ctaTop: string;
  heroWordmark: string;
  heroRotateWords: string;
  heroRotateInitial: string;
  heroTitleLine: string;
  heroLead: string;
  heroFlankStrictLabel: string;
  heroFlankStrictTitle: string;
  heroFlankStrictText: string;
  heroFlankConceptLabel: string;
  heroFlankConceptTitle: string;
  heroFlankConceptText: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroScrollLabel: string;
  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    hero: {
      label: string;
      value: number;
      suffix: string;
      prefix: string;
      title: string;
      text: string;
      meterBase: number;
      meterTune: number;
      meterBaseLabel: string;
      meterTuneLabel: string;
      steps: { n: string; title: string; text: string }[];
    };
    items: {
      label: string;
      value: number | null;
      display?: string;
      unit: string;
      title: string;
      text: string;
      chips: WebProofChip[];
    }[];
  };
  spectrum: {
    title: string;
    lead: string;
    strict: { label: string; title: string; text: string };
    live: { label: string; title: string; text: string };
    strictDemo: {
      navAbout: string;
      navServices: string;
      navContacts: string;
      kicker: string;
      headline: string;
      lead: string;
      cta: string;
      steps: string[];
    };
    liveDemo: {
      kicker: string;
      title: string;
      statSuffix: string;
      swapInitial: [{ value: string; label: string }, { value: string; label: string }];
    };
  };
  nosTitle: string;
  nosLead: string;
  nosMarkPrefix: string;
  nos: { title: string; text: string }[];
  speed: {
    title: string;
    lead: string;
    rest: string;
    statValue: string;
    statLabel: string;
    chips: [string, string, string];
    points: { title: string; text: string }[];
  };
  brandTitle: string;
  brandLead: string;
  brandWithBookTitle: string;
  brandWithBook: string;
  brandWithoutTitle: string;
  brandWithout: string;
  platformsTitle: string;
  platformsLead: string;
  platforms: WebPlatform[];
  railHint: string;
  railPrev: string;
  railNext: string;
  cms: { title: string; text: string }[];
  device: {
    eyebrow: string;
    title: string;
    lead: string;
    tabsAria: string;
    dotsAria: string;
    floats: { value: string; label: string }[];
    orbit: string[];
  };
  products: WebProduct[];
  showCases: boolean;
  casesTitle: string;
  casesLead: string;
  casesAll: string;
  faqTitle: string;
  faqLead: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaPoints: string[];
  formName: string;
  formPhone: string;
  formSite: string;
  formType: string;
  formTypeOptions: string[];
  formStyle: string;
  formStyleOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  footerBrand: string;
  footerTagline: string;
};

const webRu: WebContent = {
  path: "/razrabotka-saytov/",
  metaTitle: "Разработка сайтов — ПРАЙМ",
  metaDescription:
    "Разработка сайтов: лендинг, мультилендинг, визитка, корпоратив и магазин. Bitrix, Webasyst, WordPress, Next.js, Astro, Laravel, Vue, Node.js, 1С — быстрее и дешевле кастома с нуля.",
  serviceName: "Разработка сайтов",
  serviceType: "Разработка сайтов",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Разработка сайтов",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  heroWordmark: "ПРАЙМ",
  heroRotateWords: "собирают заявки|удивляют|продают|запоминаются",
  heroRotateInitial: "собирают заявки",
  heroTitleLine: "Сайты, которые",
  heroLead:
    "Живой 3D и чёткая структура. Лендинги, визитки, корпоративы и магазины — на готовых блоках или с обычной разработкой под задачу.",
  heroFlankStrictLabel: "Строгий стиль",
  heroFlankStrictTitle: "Классика<br />и строгость",
  heroFlankStrictText:
    "Корпоративный сайт без шума: спокойная типографика, сетка, доверие.",
  heroFlankConceptLabel: "Концепт",
  heroFlankConceptTitle: "Презентации<br />и удивление",
  heroFlankConceptText:
    "Живые эффекты, параллакс и 3D — когда сайт должен запомниться.",
  heroCtaPrimary: "Оставить заявку",
  heroCtaSecondary: "Смотреть стили",
  heroScrollLabel: "scroll down",
  proof: {
    eyebrow: webProof.eyebrow,
    title: webProof.title,
    lead: webProof.lead,
    hero: {
      ...webProof.hero,
      meterBaseLabel: "шаблонная база",
      meterTuneLabel: "донастройка",
      steps: webProof.hero.steps.map((s) => ({ ...s })),
    },
    items: webProof.items.map((item) => ({
      label: item.label,
      value: item.value,
      display: item.display,
      unit: item.unit,
      title: item.title,
      text: item.text,
      chips: [...item.chips] as WebProofChip[],
    })),
  },
  spectrum: {
    title: webSpectrum.title,
    lead: webSpectrum.lead,
    strict: { ...webSpectrum.strict },
    live: { ...webSpectrum.live },
    strictDemo: {
      navAbout: "О нас",
      navServices: "Услуги",
      navContacts: "Контакты",
      kicker: "Корпоративный сайт",
      headline: "Промышленные поставки<br />без лишнего шума",
      lead: "Чёткая структура. Спокойная типографика. Никакой анимации.",
      cta: "Оставить заявку",
      steps: ["Аудит", "Поставка", "Сервис"],
    },
    liveDemo: {
      kicker: "Живой блок",
      title: "Двигайте курсором",
      statSuffix: "заявок / мес.",
      swapInitial: [
        { value: "+46%", label: "к заявкам" },
        { value: "TOP", label: "в выдаче" },
      ],
    },
  },
  nosTitle: "Зачем строить с нуля то, что рынок уже решил",
  nosLead:
    "Не тратим месяцы на проектирование и ручную вёрстку — берём проверенную основу и собираем под ваш бренд.",
  nosMarkPrefix: "без",
  nos: webNos.map((n) => ({ title: n.title, text: n.text })),
  speed: {
    title: webSpeed.title,
    lead: webSpeed.lead,
    rest: webSpeed.rest,
    statValue: "−60%",
    statLabel: "времени программиста на шаблонной основе",
    chips: ["−60%", "быстрее", "без «с нуля»"],
    points: webSpeed.points.map((p) => ({ ...p })),
  },
  brandTitle: "Под ваш бренд — не «как у всех»",
  brandLead:
    "Компонентная система: хедеры, карточки, формы, футеры. От строгого до живого — под задачу бизнеса.",
  brandWithBookTitle: "Есть брендбук",
  brandWithBook: webBrand.withBook,
  brandWithoutTitle: "Пока нет материалов",
  brandWithout: webBrand.without,
  platformsTitle: "Платформы и удобство контента",
  platformsLead:
    "Bitrix, Webasyst, WordPress, мультилендинг, Next.js, Astro, Laravel, Vue, Node.js и 1С — стек под задачу.",
  platforms: webPlatforms.map((p) => ({ ...p })),
  railHint: "Листайте стек",
  railPrev: "Назад",
  railNext: "Вперёд",
  cms: webCms.map((c) => ({ ...c })),
  device: {
    eyebrow: webDevice.eyebrow,
    title: webDevice.title,
    lead: webDevice.lead,
    tabsAria: "Форматы сайта",
    dotsAria: "Форматы в телефоне",
    floats: webDevice.floats.map((f) => ({ ...f })),
    orbit: [...webDevice.orbit],
  },
  products: webProducts.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    lead: p.lead,
    note: p.note,
    tags: [...p.tags],
    screen: p.screen,
    badge: p.badge,
    discussCta: `Обсудить ${p.title.toLowerCase()}`,
  })),
  showCases: true,
  casesTitle: "Кейсы по разработке",
  casesLead: "От лендингов до магазинов — живые проекты, не макеты.",
  casesAll: "Все кейсы по разработке",
  faqTitle: "Частые вопросы",
  faqLead: "Шаблоны, сроки, форматы, стек и демо до старта.",
  faq: webFaq.map((f) => ({ q: f.q, a: f.a })),
  ctaTitle: "Хотите доверить создание сайта надёжным рукам?",
  ctaLead: "Оставьте заявку — подберём формат, покажем демо и оценим срок.",
  ctaPoints: [
    "Демо шаблона до старта работ",
    "Стиль: от строгого до эффектов",
    "Лендинг, визитка, корпоратив или магазин",
    "Срок — 1,5–3 мес. вместо 5–6 «с нуля»",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formSite: "Сайт или соцсеть (если есть)",
  formType: "Что нужно",
  formTypeOptions: [
    "Лендинг",
    "Сайт-визитка",
    "Корпоративный сайт",
    "Интернет-магазин",
    "Доработка текущего",
  ],
  formStyle: "Стиль сайта",
  formStyleOptions: [
    "Строгий / корпоративный",
    "С эффектами и анимацией",
    "Пока не определились",
  ],
  formMessage: "Ниша и задача — коротко",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка на разработку принята — свяжемся с вами.",
  formSource: "razrabotka-saytov",
  footerBrand: "ПРАЙМ",
  footerTagline: "Разработка сайтов · лендинг · магазин",
};

const webEn: WebContent = {
  path: "/en/web/",
  metaTitle: "Web development — PRIME",
  metaDescription:
    "Web development: landing pages, business cards, corporate sites and e-commerce. WordPress, Next.js, Astro, Laravel, Vue, Node.js — faster and more affordable than building from scratch.",
  serviceName: "Web development",
  serviceType: "Web development",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Web development",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  heroWordmark: "PRIME",
  heroRotateWords: "capture leads|delight|sell|get remembered",
  heroRotateInitial: "capture leads",
  heroTitleLine: "Sites that",
  heroLead:
    "Live 3D and clear structure. Landing pages, business cards, corporate sites and stores — on ready-made blocks or custom development for your goals.",
  heroFlankStrictLabel: "Strict style",
  heroFlankStrictTitle: "Classic<br />and restraint",
  heroFlankStrictText:
    "Corporate site without noise: calm typography, grid, trust.",
  heroFlankConceptLabel: "Concept",
  heroFlankConceptTitle: "Presentations<br />and surprise",
  heroFlankConceptText:
    "Live effects, parallax and 3D — when the site must be remembered.",
  heroCtaPrimary: "Submit a request",
  heroCtaSecondary: "See styles",
  heroScrollLabel: "scroll down",
  proof: {
    eyebrow: "Specification",
    title: "What you get in numbers",
    lead: "Not an abstract «turnkey site», but measurable time savings, clear formats and a stack for the job.",
    hero: {
      label: "Site foundation",
      value: 60,
      suffix: "%",
      prefix: "−",
      title: "fewer developer hours",
      text: "on a typical base: grid, responsive layout, forms and blocks are already built — you pay for brand tuning, not months from scratch.",
      meterBase: 60,
      meterTune: 40,
      meterBaseLabel: "template base",
      meterTuneLabel: "customization",
      steps: [
        { n: "01", title: "Foundation", text: "Grid, responsive, forms — already in the base" },
        { n: "02", title: "Brand", text: "Colors, copy, visuals for you" },
        { n: "03", title: "Launch", text: "1.5–3 mo. instead of 5–6 from scratch" },
      ],
    },
    items: [
      {
        label: "Formats",
        value: 4,
        unit: "",
        title: "site types",
        text: "Landing, business card, corporate or store — for the job, not one template for everyone.",
        chips: [
          {
            label: "Landing",
            what: "One page for an offer or campaign",
            how: "Built on multilanding: offer blocks, proof, form. Launch via ads in 1.5–3 mo.",
          },
          {
            label: "Business card",
            what: "Compact company presence online",
            how: "Services, about, contacts, lead form. No heavy admin — fill fast and take inquiries.",
          },
          {
            label: "Corporate",
            what: "Services showcase and catalog without a buyer account",
            how: "SEO-ready structure, sections, forms. Orders via phone or form. Ready for search promotion.",
          },
          {
            label: "Store",
            what: "Catalog, cart, checkout, inventory",
            how: "WordPress / Laravel / Bitrix + optional ERP sync when needed. After launch — SEO and support.",
          },
        ],
      },
      {
        label: "Stack",
        value: 10,
        unit: "",
        title: "platforms",
        text: "WordPress, Next.js, Astro, Laravel, Vue, Node.js, Bitrix, Webasyst and more — we pick what fits content and logic worldwide.",
        chips: [
          "WordPress",
          "Next.js",
          "Astro",
          "Laravel",
          "Vue",
          "Node.js",
          "Bitrix",
          "Webasyst",
          "Multilanding",
          "ERP sync",
        ],
      },
      {
        label: "Timeline",
        value: null,
        display: "1.5–3",
        unit: "mo.",
        title: "instead of 5–6 months",
        text: "Typical launch in one and a half to three months: the base is ready, brand, content and business specifics remain — not half a year from scratch.",
        chips: ["Fast start", "No from-scratch"],
      },
    ],
  },
  spectrum: {
    title: "From strict style — to live effects",
    lead: "The same site can be restrained or «alive». Drag the divider: left — static corporate, right — parallax and cursor effects.",
    strict: {
      label: "Strict",
      title: "Corporate restraint",
      text: "Grid, typography, zero animation. For B2B, legal, industry — when clarity and trust matter, not show.",
    },
    live: {
      label: "With effects",
      title: "Parallax and motion",
      text: "Background layers, floating elements, growing charts. For products that need emotion and engagement — move your cursor.",
    },
    strictDemo: {
      navAbout: "About",
      navServices: "Services",
      navContacts: "Contacts",
      kicker: "Corporate site",
      headline: "Industrial supply<br />without noise",
      lead: "Clear structure. Calm typography. No animation.",
      cta: "Leave a request",
      steps: ["Audit", "Supply", "Service"],
    },
    liveDemo: {
      kicker: "Live block",
      title: "Move your cursor",
      statSuffix: "leads / mo.",
      swapInitial: [
        { value: "+46%", label: "lead lift" },
        { value: "TOP", label: "in SERP" },
      ],
    },
  },
  nosTitle: "Why build from scratch what the market already solved",
  nosLead:
    "We don't spend months on design and hand-coded layout — we take a proven base and assemble it for your brand.",
  nosMarkPrefix: "no",
  nos: [
    {
      title: "No design from scratch",
      text: "We take a proven visual architecture and adapt it to your brand — without months to «draw everything again».",
    },
    {
      title: "No hand-coded layout",
      text: "Blocks are responsive from the start and work correctly on phones, tablets and desktop.",
    },
    {
      title: "No expensive custom backend",
      text: "Focus shifts from technical build to content and launching sales.",
    },
  ],
  speed: {
    title: "Fast development",
    lead: "Building on a template base cuts developer time on the project by about 60%.",
    rest: "The remaining 40% is nuance: payments, business specifics, small fixes after launch. A skilled developer closes them in hours, not weeks.",
    statValue: "−60%",
    statLabel: "developer time on a template foundation",
    chips: ["−60%", "faster", "no from-scratch"],
    points: [
      { title: "Lower cost", text: "Pay for hours, not weeks of developer time." },
      { title: "Higher speed", text: "The site doesn't need a from-scratch build — faster to market." },
      { title: "Budget for marketing", text: "Savings can go into traffic for the new site." },
    ],
  },
  brandTitle: "For your brand — not «like everyone else»",
  brandLead:
    "Component system: headers, cards, forms, footers. From strict to lively — for the business goal.",
  brandWithBookTitle: "You have a brand book",
  brandWithBook:
    "With a brand book — we align colors, fonts and visual elements to it. The template becomes a recognizable corporate face.",
  brandWithoutTitle: "No materials yet",
  brandWithout:
    "No brand assets yet — we'll pick a harmonious palette and typography for your niche and goals.",
  platformsTitle: "Platforms and easy content",
  platformsLead:
    "WordPress, Next.js, Astro, Laravel, Vue, Node.js — plus Bitrix and Webasyst when the project calls for them. Stack for the job, worldwide.",
  platforms: [
    {
      name: "WordPress",
      text: "Blogs, landing pages and corporate sites: familiar admin, themes and plugins for the job",
    },
    {
      name: "Next.js",
      text: "React sites with SSR/SSG: complex UI, accounts, high dynamics",
    },
    {
      name: "Astro",
      text: "Fast marketing sites. This PRIME site is built on Astro too",
    },
    {
      name: "Laravel",
      text: "Custom server logic, API, accounts and integrations when a template is not enough",
    },
    {
      name: "Vue",
      text: "Interactive dashboards and panels: forms, tables, realtime — without a heavy client monolith",
    },
    {
      name: "Node.js",
      text: "Services, parsers and Express APIs: background jobs, integrations and admin for the product",
    },
    {
      name: "Bitrix",
      text: "Corporate sites and stores with a flexible admin when the project needs it",
    },
    {
      name: "Webasyst",
      text: "E-commerce with catalog, cart and checkout",
    },
    {
      name: "Multilanding",
      text: "Ads and fast start: one template — different offers and landing pages per campaign",
    },
    {
      name: "ERP sync",
      text: "Optional catalog, price and stock sync with your ERP or warehouse — storefront stays live, not a manual price list",
    },
  ],
  railHint: "Browse the stack",
  railPrev: "Back",
  railNext: "Forward",
  cms: [
    {
      title: "Easy content publishing",
      text: "Text, photos and forms — through a clear panel. Base elements are already in the template. No technical knowledge.",
    },
    {
      title: "Easy platform updates",
      text: "Feature expansion, accounting, online payments — faster and cheaper in a template than custom from scratch.",
    },
    {
      title: "Template support",
      text: "Many solutions have their own support: small questions can be closed without waiting for a developer.",
    },
  ],
  device: {
    eyebrow: "Formats on phone",
    title: "How the site looks to your client",
    lead: "Not abstract cards — real project screens. Browse formats: landing, business card, corporate, store.",
    tabsAria: "Site formats",
    dotsAria: "Formats in phone",
    floats: [
      { value: "from $450", label: "landing start" },
      { value: "1.5–3 mo.", label: "instead of 5–6" },
      { value: "mobile-first", label: "phone-ready" },
    ],
    orbit: ["Landing", "Card", "Corporate", "Store", "Laravel", "SEO", "ERP", "Checkout"],
  },
  products: [
    {
      id: "landing",
      title: "Landing page",
      price: "$450–$670",
      lead: "Single page for one offer: new product, promo or ad campaign. Built on multilanding.",
      note: "Fast launch via ads. Not meant as an SEO foundation.",
      tags: ["multilanding", "ads", "fast start"],
      screen: "/images/web-phone/landing.webp?v=2",
      badge: "Promo / offer",
      discussCta: "Discuss landing page",
    },
    {
      id: "card",
      title: "Business card site",
      price: "$670–$890",
      lead: "Simple company presence when you need to be online and take inquiries.",
      note: "Compact, clear, without extra functionality.",
      tags: ["contacts", "services", "trust"],
      screen: "/images/web-phone/card.webp?v=5",
      badge: "Contacts & services",
      discussCta: "Discuss business card site",
    },
    {
      id: "corp",
      title: "Corporate site",
      price: "$1,100–$1,670",
      lead: "Showcase site: products and services without a buyer account. Orders by phone, form or visit.",
      note: "Ready for further SEO promotion.",
      tags: ["catalog", "showcase", "SEO-ready"],
      screen: "/images/web-phone/corp.webp?v=2",
      badge: "B2B showcase",
      discussCta: "Discuss corporate site",
    },
    {
      id: "shop",
      title: "Online store",
      price: "$2,780–$3,890",
      lead: "Full catalog, optional warehouse sync, orders and online checkout.",
      note: "After launch — search promotion and support.",
      tags: ["ERP / warehouse", "checkout", "catalog"],
      screen: "/images/web-phone/shop.webp?v=2",
      badge: "Catalog & cart",
      discussCta: "Discuss online store",
    },
  ],
  showCases: false,
  casesTitle: "Web development cases",
  casesLead: "From landing pages to stores — live projects, not mockups.",
  casesAll: "All web development cases",
  faqTitle: "FAQ",
  faqLead: "Templates, timelines, formats, stack and demo before start.",
  faq: [
    {
      q: "Is this a «ready template with no customization»?",
      a: "No. We take a proven base (grid, responsive, forms) and adapt it to brand, content and business logic. Savings are on the typical part, not on skipping your specifics.",
    },
    {
      q: "How long does launch take?",
      a: "Typically 1.5–3 months instead of 5–6 from scratch: the base is built, brand, content and nuance (payments, ERP sync, integrations) remain.",
    },
    {
      q: "Which format — landing or corporate?",
      a: "Landing — for one offer and ads. Business card — compact company face. Corporate — services/catalog showcase without a buyer account, SEO-ready. Store — catalog, cart, checkout and optional warehouse sync.",
    },
    {
      q: "What do you build sites on?",
      a: "WordPress, Next.js, Astro, Laravel, Vue, Node.js, plus Bitrix and Webasyst when needed — we pick the stack for the job and ongoing support.",
    },
    {
      q: "Can we see a demo before start?",
      a: "Yes. We show direction and a template/format demo before full work — to align style and expectations.",
    },
  ],
  ctaTitle: "Want a reliable team to build your site?",
  ctaLead: "Submit a request — we'll pick a format, show a demo and estimate timeline.",
  ctaPoints: [
    "Template demo before work starts",
    "Style: from strict to effects",
    "Landing, business card, corporate or store",
    "Timeline — 1.5–3 mo. instead of 5–6 from scratch",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formSite: "Website or social (if any)",
  formType: "What you need",
  formTypeOptions: [
    "Landing page",
    "Business card site",
    "Corporate site",
    "Online store",
    "Improve existing site",
  ],
  formStyle: "Site style",
  formStyleOptions: [
    "Strict / corporate",
    "With effects and animation",
    "Not sure yet",
  ],
  formMessage: "Niche and goal — briefly",
  formAgreeBefore: "I agree to the processing of personal data in accordance with our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thank you! Your web development request is received — we'll be in touch.",
  formSource: "en-web",
  footerBrand: "PRIME",
  footerTagline: "Web development · landing · store",
};

const byLocale: Record<Locale, WebContent> = {
  ru: webRu,
  en: webEn,
};

export function getWebContent(locale: Locale): WebContent {
  return byLocale[locale];
}

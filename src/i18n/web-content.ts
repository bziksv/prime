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
    "Websites that convert: landing pages, brochure sites, corporate sites, and e-commerce. WordPress, Next.js, Astro, Laravel, Vue, Node.js — shipped faster and leaner than a from-zero build.",
  serviceName: "Web development",
  serviceType: "Web development",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Web development",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  heroWordmark: "PRIME",
  heroRotateWords: "win leads|turn heads|convert|get remembered",
  heroRotateInitial: "win leads",
  heroTitleLine: "Sites that",
  heroLead:
    "Motion when it earns its keep, structure when it doesn’t. Landing pages, brochure sites, corporate sites, and stores — on proven blocks or custom code for the job.",
  heroFlankStrictLabel: "Clean corporate",
  heroFlankStrictTitle: "Classic<br />and quiet",
  heroFlankStrictText:
    "A corporate site without the noise: calm type, a clear grid, trust first.",
  heroFlankConceptLabel: "Motion-led",
  heroFlankConceptTitle: "Showpiece<br />energy",
  heroFlankConceptText:
    "Parallax, live effects, and 3D — when the site should stick with people.",
  heroCtaPrimary: "Discuss your build",
  heroCtaSecondary: "See styles",
  heroScrollLabel: "scroll down",
  proof: {
    eyebrow: "By the numbers",
    title: "What you actually get",
    lead: "Not a vague “turnkey website” — real time savings, clear formats, and a stack that fits the work.",
    hero: {
      label: "Build foundation",
      value: 60,
      suffix: "%",
      prefix: "−",
      title: "fewer developer hours",
      text: "on a battle-tested base: grid, responsive layout, forms, and blocks are already there — you pay for brand polish, not months reinventing the wheel.",
      meterBase: 60,
      meterTune: 40,
      meterBaseLabel: "proven base",
      meterTuneLabel: "brand polish",
      steps: [
        { n: "01", title: "Foundation", text: "Grid, responsive, forms — already in the base" },
        { n: "02", title: "Brand", text: "Colors, copy, and visuals dialed to you" },
        { n: "03", title: "Launch", text: "1.5–3 mo. instead of 5–6 from zero" },
      ],
    },
    items: [
      {
        label: "Formats",
        value: 4,
        unit: "",
        title: "site types",
        text: "Landing, brochure, corporate, or store — matched to the job, not one template for everyone.",
        chips: [
          {
            label: "Landing",
            what: "One page for an offer or campaign",
            how: "Built on multilanding: offer blocks, proof, form. Live with ads in 1.5–3 mo.",
          },
          {
            label: "Brochure",
            what: "A compact company presence online",
            how: "Services, about, contacts, lead form. Light CMS — publish fast and take inquiries.",
          },
          {
            label: "Corporate",
            what: "Services and catalog without a buyer account",
            how: "SEO-ready structure, sections, forms. Orders by phone or form. Ready for search.",
          },
          {
            label: "Store",
            what: "Catalog, cart, checkout, inventory",
            how: "WordPress / Laravel / Bitrix + optional ERP sync. After launch — SEO and support.",
          },
        ],
      },
      {
        label: "Stack",
        value: 10,
        unit: "",
        title: "platforms",
        text: "WordPress, Next.js, Astro, Laravel, Vue, Node.js, Bitrix, Webasyst, and more — we pick what fits content and logic, worldwide.",
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
        text: "Most launches land in one and a half to three months: the base is ready; brand, content, and business specifics remain — not half a year from zero.",
        chips: ["Faster start", "Not from zero"],
      },
    ],
  },
  spectrum: {
    title: "From clean corporate to live motion",
    lead: "Same site, two moods. Drag the divider: left is static corporate; right is parallax and cursor-driven effects.",
    strict: {
      label: "Clean",
      title: "Corporate calm",
      text: "Grid, type, zero animation. For B2B, legal, and industrial — when clarity and trust beat the show.",
    },
    live: {
      label: "With motion",
      title: "Parallax and interaction",
      text: "Layered backgrounds, floating UI, charts that grow. For products that need energy — move your cursor.",
    },
    strictDemo: {
      navAbout: "About",
      navServices: "Services",
      navContacts: "Contact",
      kicker: "Corporate site",
      headline: "Industrial supply<br />without the noise",
      lead: "Clear structure. Calm type. No animation.",
      cta: "Talk to us",
      steps: ["Audit", "Supply", "Service"],
    },
    liveDemo: {
      kicker: "Live block",
      title: "Move your cursor",
      statSuffix: "leads / mo.",
      swapInitial: [
        { value: "+46%", label: "more leads" },
        { value: "TOP", label: "in search" },
      ],
    },
  },
  nosTitle: "Why rebuild what the market already solved",
  nosLead:
    "We don’t burn months on greenfield design and hand-coded layout — we start from a proven base and shape it to your brand.",
  nosMarkPrefix: "no",
  nos: [
    {
      title: "No greenfield design",
      text: "We start from a proven visual system and adapt it to your brand — not months redrawing every screen.",
    },
    {
      title: "No hand-coded layout grind",
      text: "Blocks are responsive out of the box and behave on phone, tablet, and desktop.",
    },
    {
      title: "No bloated custom backend",
      text: "Spend shifts from plumbing to content and getting sales live.",
    },
  ],
  speed: {
    title: "Ship faster",
    lead: "Building on a proven base cuts developer time on the project by about 60%.",
    rest: "The other 40% is the nuance: payments, business rules, post-launch fixes. A sharp developer closes those in hours, not weeks.",
    statValue: "−60%",
    statLabel: "developer time on a proven foundation",
    chips: ["−60%", "faster", "not from zero"],
    points: [
      { title: "Lower cost", text: "You pay for focused hours — not weeks of reinvention." },
      { title: "Faster to market", text: "Skip the from-zero build and get live sooner." },
      { title: "Budget for growth", text: "Put the savings into traffic for the new site." },
    ],
  },
  brandTitle: "Your brand — not a generic theme",
  brandLead:
    "A component system: headers, cards, forms, footers. From clean corporate to high-motion — dialed to the business goal.",
  brandWithBookTitle: "You have brand guidelines",
  brandWithBook:
    "We lock colors, type, and visual language to your guidelines. The base becomes a site that actually looks like you.",
  brandWithoutTitle: "No assets yet",
  brandWithout:
    "No brand kit yet — we’ll pick a palette and type system that fit your niche and goals.",
  platformsTitle: "Platforms that stay editable",
  platformsLead:
    "WordPress, Next.js, Astro, Laravel, Vue, Node.js — plus Bitrix and Webasyst when the project needs them. Stack for the job, worldwide.",
  platforms: [
    {
      name: "WordPress",
      text: "Blogs, landing pages, and corporate sites: familiar admin, themes, and plugins that fit the job",
    },
    {
      name: "Next.js",
      text: "React sites with SSR/SSG: rich UI, accounts, and high-dynamics products",
    },
    {
      name: "Astro",
      text: "Fast marketing sites. This PRIME site runs on Astro too",
    },
    {
      name: "Laravel",
      text: "Custom server logic, APIs, accounts, and integrations when a theme isn’t enough",
    },
    {
      name: "Vue",
      text: "Interactive dashboards and panels: forms, tables, realtime — without a heavy client monolith",
    },
    {
      name: "Node.js",
      text: "Services, parsers, and Express APIs: background jobs, integrations, and product admin",
    },
    {
      name: "Bitrix",
      text: "Corporate sites and stores with a flexible admin when the project calls for it",
    },
    {
      name: "Webasyst",
      text: "E-commerce with catalog, cart, and checkout",
    },
    {
      name: "Multilanding",
      text: "Ads and a fast start: one base — different offers and landing pages per campaign",
    },
    {
      name: "ERP sync",
      text: "Optional catalog, price, and stock sync with your ERP or warehouse — storefront stays live, not a manual price list",
    },
  ],
  railHint: "Browse the stack",
  railPrev: "Back",
  railNext: "Next",
  cms: [
    {
      title: "Publish without a developer",
      text: "Copy, photos, and forms live in a clear admin. Core blocks ship with the base — no technical degree required.",
    },
    {
      title: "Extend without a rewrite",
      text: "New features, accounting hooks, online payments — faster and cheaper on a proven base than a custom rebuild.",
    },
    {
      title: "Support when you need it",
      text: "Many platforms include their own support — small questions get answered without waiting on a developer.",
    },
  ],
  device: {
    eyebrow: "On the phone",
    title: "What your customer actually sees",
    lead: "Not abstract cards — real project screens. Flip through formats: landing, brochure, corporate, store.",
    tabsAria: "Site formats",
    dotsAria: "Formats on phone",
    floats: [
      { value: "from $675", label: "landing start" },
      { value: "1.5–3 mo.", label: "instead of 5–6" },
      { value: "mobile-first", label: "phone-ready" },
    ],
    orbit: ["Landing", "Card", "Corporate", "Store", "Laravel", "SEO", "ERP", "Checkout"],
  },
  products: [
    {
      id: "landing",
      title: "Landing page",
      price: "$675–$1,005",
      lead: "One page, one offer: a new product, promo, or paid campaign. Built on multilanding.",
      note: "Fast launch with ads. Not meant as your long-term SEO foundation.",
      tags: ["multilanding", "ads", "fast start"],
      screen: "/images/web-phone/landing.webp?v=2",
      badge: "Promo / offer",
      discussCta: "Discuss this landing",
    },
    {
      id: "card",
      title: "Brochure site",
      price: "$1,005–$1,335",
      lead: "A simple company presence when you need to be online and take inquiries.",
      note: "Compact and clear — no extra bells and whistles.",
      tags: ["contacts", "services", "trust"],
      screen: "/images/web-phone/card.webp?v=5",
      badge: "Contacts & services",
      discussCta: "Discuss a brochure site",
    },
    {
      id: "corp",
      title: "Corporate site",
      price: "$1,650–$2,505",
      lead: "A services and catalog showcase without a buyer account. Orders by phone, form, or visit.",
      note: "Structured for SEO when you’re ready to grow search.",
      tags: ["catalog", "showcase", "SEO-ready"],
      screen: "/images/web-phone/corp.webp?v=2",
      badge: "B2B showcase",
      discussCta: "Discuss a corporate site",
    },
    {
      id: "shop",
      title: "Online store",
      price: "$4,170–$5,835",
      lead: "Full catalog, optional warehouse sync, orders, and online checkout.",
      note: "After launch — search growth and ongoing support.",
      tags: ["ERP / warehouse", "checkout", "catalog"],
      screen: "/images/web-phone/shop.webp?v=2",
      badge: "Catalog & cart",
      discussCta: "Discuss an online store",
    },
  ],
  showCases: false,
  casesTitle: "Web work",
  casesLead: "From landing pages to stores — live projects, not mockups.",
  casesAll: "See all web work",
  faqTitle: "FAQ",
  faqLead: "Bases, timelines, formats, stack, and demos before we start.",
  faq: [
    {
      q: "Is this just a stock theme with a logo slap?",
      a: "No. We start from a proven base (grid, responsive, forms) and adapt it to brand, content, and business logic. You save on the commodity work — not by skipping your specifics.",
    },
    {
      q: "How long until launch?",
      a: "Usually 1.5–3 months instead of 5–6 from zero: the base is built; brand, content, and nuance (payments, ERP sync, integrations) are what remain.",
    },
    {
      q: "Landing page or corporate site?",
      a: "Landing — one offer and ads. Brochure — a compact company face. Corporate — services/catalog showcase without a buyer account, SEO-ready. Store — catalog, cart, checkout, and optional warehouse sync.",
    },
    {
      q: "What do you build on?",
      a: "WordPress, Next.js, Astro, Laravel, Vue, Node.js — plus Bitrix and Webasyst when needed. We pick the stack for the job and for support over time.",
    },
    {
      q: "Can we see a demo before we commit?",
      a: "Yes. We walk through direction and a format demo before full build — so style and expectations line up.",
    },
  ],
  ctaTitle: "Let’s talk about your build",
  ctaLead: "Tell us the goal — we’ll recommend a format, show a demo, and sketch a timeline.",
  ctaPoints: [
    "Format demo before work starts",
    "Style range: clean corporate to motion",
    "Landing, brochure, corporate, or store",
    "Timeline — 1.5–3 mo. instead of 5–6 from zero",
  ],
  formName: "Name",
  formPhone: "Phone",
  formSite: "Website or social (if any)",
  formType: "What do you need?",
  formTypeOptions: [
    "Landing page",
    "Brochure site",
    "Corporate site",
    "Online store",
    "Improve an existing site",
  ],
  formStyle: "Site style",
  formStyleOptions: [
    "Clean / corporate",
    "Motion and effects",
    "Not sure yet",
  ],
  formMessage: "Niche and goal — short version",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Send",
  formSuccess: "Thanks — we got it. We’ll be in touch about your build.",
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

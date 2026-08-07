import type { Locale } from "./locales";
import {
  ormFaq,
  ormNos,
  ormOutcomes,
  ormPillars,
  ormPlatforms,
  ormPricing,
  ormProblem,
  ormSteps,
} from "../data/orm-service";

export type OrmContent = {
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
  heroTitleAfter: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  scoreLabel: string;
  scoreValue: string;
  scoreHint: string;
  reviews: { title: string; text: string }[];
  storyTitle: string;
  storyLead: string;
  problemLead: string;
  problemDistort: string;
  problemCycle: string;
  trustTitle: string;
  trustText: string;
  mechanismTitle: string;
  mechanismText: string;
  pillarsTitle: string;
  pillarsLead: string;
  pillars: { n: string; title: string; text: string }[];
  platformsTitle: string;
  platformsLead: string;
  platforms: { title: string; text: string }[];
  stepsTitle: string;
  stepsLead: string;
  stepPrefix: string;
  steps: { n: string; title: string; text: string }[];
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

const ormRu: OrmContent = {
  path: "/upravlenie-reputaciej/",
  metaTitle: "Управление репутацией — ПРАЙМ",
  metaDescription:
    "Управление репутацией: аудит, стратегия, мониторинг негатива и формирование позитивного имиджа на Яндекс и Google Картах и отзовиках. Без накрутки отзывов.",
  serviceName: "Управление репутацией",
  serviceType: "Управление репутацией",
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Управление репутацией",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  brandBefore: "ПРАЙ",
  brandAccent: "М",
  heroTitleBefore: "Управление репутацией — вернуть ",
  heroTitleAccent: "доверие",
  heroTitleAfter: " в ваши руки",
  heroLead:
    "Пока довольные молчат, негатив рисует портрет компании. Налаживаем процессы, мониторинг и честный баланс отзывов.",
  heroCtaPrimary: "Получить консультацию",
  heroCtaSecondary: "Что делаем",
  scoreLabel: "Баланс доверия",
  scoreValue: "4.8",
  scoreHint: "не рейтинг «нарисуем» — система, которая держит",
  reviews: [
    {
      title: "Довольный клиент",
      text: "Обычно молчит — пока его не попросить рассказать.",
    },
    {
      title: "Негатив",
      text: "Пишет первым и громко — и задаёт тон в выдаче.",
    },
    {
      title: "Наша задача",
      text: "Вернуть объективную картину и процессы внутри.",
    },
  ],
  storyTitle: "Порочный круг негатива",
  storyLead: "Почему «всё нормально у нас» не видно тем, кто выбирает вас в сети.",
  problemLead: ormProblem.lead,
  problemDistort: ormProblem.distort,
  problemCycle: ormProblem.cycle,
  trustTitle: "Доверие у меньшинства",
  trustText: ormProblem.trust,
  mechanismTitle: "Нужен механизм",
  mechanismText:
    "Не «залить пятёрками», а стратегия, обучение команды и ежедневная работа с площадками.",
  pillarsTitle: "Персональные консультации — и система, с которой вы работаете",
  pillarsLead:
    "Четыре направления внутреннего управления репутацией — от аудита до позитивного имиджа.",
  pillars: ormPillars.map((p) => ({ ...p })),
  platformsTitle: "Где репутация решает",
  platformsLead: "Карты, отзовики и поиск — точки, где клиент решает до звонка.",
  platforms: ormPlatforms.map((p) => ({ ...p })),
  stepsTitle: "Как выстраиваем работу",
  stepsLead: "От картины «как есть» до процессов, которые живут без хаоса.",
  stepPrefix: "Шаг",
  steps: ormSteps.map((s) => ({ ...s })),
  outcomesTitle: "Что меняется на практике",
  outcomesLead: "Не «звёздочки ради отчёта», а система, которую видно клиенту и команде.",
  outcomes: ormOutcomes.map((o) => ({ ...o })),
  nosTitle: "Чего не делаем",
  nosLead: "Чтобы не путать управление репутацией с серыми схемами.",
  nos: ormNos.map((n) => ({ ...n })),
  pricingTitle: ormPricing.title,
  pricingText: ormPricing.text,
  pricingMark: "После разбора ниши и площадок",
  faqTitle: "Частые вопросы",
  faqLead: "Коротко о сроках, площадках и том, с чего начать.",
  faq: ormFaq.map((f) => ({ ...f })),
  ctaTitle: "Готовы вернуть баланс отзывов?",
  ctaLead:
    "Оставьте заявку — разберём текущий фон и предложим план: аудит, процессы или сопровождение.",
  ctaPoints: [
    "Аудит карт и отзовиков без «накрутки»",
    "Работа с негативом и рост позитива",
    "Процессы для команды — ответы и контроль",
    "Разбор ниши за 30 минут · без обязательств",
  ],
  formName: "Ваше имя",
  formPhone: "Телефон",
  formBrand: "Название компании / бренд",
  formFocus: "Что приоритетнее",
  formFocusOptions: [
    "Аудит и стратегия",
    "Работа с негативом",
    "Рост положительных отзывов",
    "Обучение команды",
    "Комплекс",
  ],
  formMessage: "Где болит сильнее — карты, отзовики, поиск?",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить заявку",
  formSuccess: "Спасибо! Заявка по репутации принята — свяжемся с вами.",
  formSource: "upravlenie-reputaciej",
  footerBrand: "ПРАЙМ",
  footerTagline: "Управление репутацией · отзывы · доверие",
};

const ormEn: OrmContent = {
  path: "/en/reputation/",
  metaTitle: "Reputation management — PRIME",
  metaDescription:
    "Reputation management: audit, strategy, negative-review monitoring and honest positive social proof on Google Maps, Business Profile and review sites. No fake reviews.",
  serviceName: "Reputation management",
  serviceType: "Online reputation management",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Reputation management",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Reputation management — put ",
  heroTitleAccent: "trust",
  heroTitleAfter: " back in your hands",
  heroLead:
    "Happy customers stay quiet while negatives paint the company portrait. We set up processes, monitoring and an honest review balance.",
  heroCtaPrimary: "Book a consult",
  heroCtaSecondary: "What we do",
  scoreLabel: "Trust balance",
  scoreValue: "4.8",
  scoreHint: "not a rating we’ll “draw” — a system that holds",
  reviews: [
    {
      title: "Happy customer",
      text: "Usually stays silent — until asked to share.",
    },
    {
      title: "Negative voice",
      text: "Writes first and loud — and sets the tone in search.",
    },
    {
      title: "Our job",
      text: "Restore an objective picture and internal processes.",
    },
  ],
  storyTitle: "The negative feedback loop",
  storyLead: "Why “everything’s fine here” isn’t what people see when they choose you online.",
  problemLead:
    "Customers stay quiet while things go well. The moment something breaks, the first move is an angry review.",
  problemDistort:
    "The web paints a skewed picture: instead of an objective portrait, prospects see a stack of problems and frustration.",
  problemCycle:
    "New customers arrive biased, expectations drop, and every small miss reinforces the negative tone. Hundreds of happy clients stay silent — a few loud incidents set the narrative.",
  trustTitle: "Trust held by a minority",
  trustText:
    "Your main asset — trust — sits with a dissatisfied minority. There’s no mechanism to restore balance.",
  mechanismTitle: "You need a system",
  mechanismText:
    "Not “flood it with five-stars,” but strategy, team training and daily work across platforms.",
  pillarsTitle: "Personal consulting — and a system you can run",
  pillarsLead:
    "Four directions of internal reputation work — from audit to positive brand image.",
  pillars: [
    {
      n: "01",
      title: "Audit and reputation strategy",
      text: "See how you’re viewed now: maps, review sites, search. Build a plan your team can execute.",
    },
    {
      n: "02",
      title: "Training and process rollout",
      text: "Personal coaching on internal reputation ops — so the team can respond and collect feedback without chaos.",
    },
    {
      n: "03",
      title: "Monitoring and negative handling",
      text: "Track reviews, help reply with substance and cool escalations before they become the brand face.",
    },
    {
      n: "04",
      title: "Positive image",
      text: "Build a flow of honest positive reviews from happy customers — so the online picture matches reality.",
    },
  ],
  platformsTitle: "Where reputation decides",
  platformsLead: "Maps, review sites and search — where customers decide before they call.",
  platforms: [
    {
      title: "Google Maps / Business Profile",
      text: "Rating and reviews — often the first thing a local customer sees before contacting you.",
    },
    {
      title: "Review sites",
      text: "Third-party platforms and industry directories — where people compare and decide.",
    },
    {
      title: "Search",
      text: "What surfaces for your brand name sets expectations before the website.",
    },
    {
      title: "Social mentions",
      text: "Public threads and comments that amplify a single incident across the web.",
    },
  ],
  stepsTitle: "How we work",
  stepsLead: "From the “as-is” picture to processes that run without chaos.",
  stepPrefix: "Step",
  steps: [
    {
      n: "01",
      title: "Map the current picture",
      text: "Where you’re discussed, which tone dominates, which incidents linger longest.",
    },
    {
      n: "02",
      title: "Strategy and priorities",
      text: "What to fix first: replies, processes, prompts for happy customers.",
    },
    {
      n: "03",
      title: "Roll out inside",
      text: "Train the team: who replies, in what SLA, with what tone — no “someone will answer.”",
    },
    {
      n: "04",
      title: "Monitor and grow",
      text: "Stay on pulse: handle negatives, systematically strengthen positives.",
    },
  ],
  outcomesTitle: "What changes in practice",
  outcomesLead: "Not stars for a report — a system customers and the team can see.",
  outcomes: [
    {
      title: "An objective portrait",
      text: "Search and maps show the real picture: not only misses, but happy customers too.",
    },
    {
      title: "Replies without chaos",
      text: "Clear ownership, timelines and tone — negatives don’t hang for weeks.",
    },
    {
      title: "A process, not a one-off",
      text: "Feedback collection is built into customer work — rating doesn’t rely on luck.",
    },
  ],
  nosTitle: "What we don’t do",
  nosLead: "So reputation work never gets confused with grey schemes.",
  nos: [
    {
      title: "We don’t fake five-stars",
      text: "Fake reviews break trust and risk platform penalties. We work with real customers and processes.",
    },
    {
      title: "We don’t promise “5.0 in a week”",
      text: "Pace depends on starting negatives, niche and how ready the team is to change replies and service.",
    },
    {
      title: "We don’t replace service with pretty replies",
      text: "If the same failures repeat inside — we fix causes first; otherwise reputation drops again.",
    },
  ],
  pricingTitle: "Pricing is individual",
  pricingText:
    "We quote after we understand the niche, platform volume, current review tone and what you want to fix inside.",
  pricingMark: "After niche and platform review",
  faqTitle: "FAQ",
  faqLead: "Timelines, platforms and where to start — short answers.",
  faq: [
    {
      q: "Is this review farming?",
      a: "No. We build audit, replies, monitoring and honest feedback collection from happy customers. Fake reviews and grey schemes are out of scope.",
    },
    {
      q: "How long to a stable tone?",
      a: "Depends on the starting picture: sometimes organizing replies takes a few weeks; sometimes a quarter of systematic work. We estimate after a platform audit.",
    },
    {
      q: "Does the whole company need to join?",
      a: "At least someone owns reviews and customer contact. Without an internal process, external work fades fast.",
    },
    {
      q: "Which platforms do you cover?",
      a: "Google Maps / Business Profile, key review sites and what surfaces for the brand in search. We tune the set to your niche.",
    },
    {
      q: "Can we start with an audit only?",
      a: "Yes. We often begin with a current-tone review and priorities — then you choose: run processes in-house or continue with our support.",
    },
  ],
  ctaTitle: "Ready to rebalance reviews?",
  ctaLead:
    "Submit a request — we’ll review the current tone and propose a plan: audit, processes or ongoing support.",
  ctaPoints: [
    "Maps and review-site audit — no fake ratings",
    "Negative handling and positive growth",
    "Team processes — replies and control",
    "30-minute niche review · no obligation",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formBrand: "Company / brand name",
  formFocus: "What’s the priority",
  formFocusOptions: [
    "Audit and strategy",
    "Handling negatives",
    "Growing positive reviews",
    "Team training",
    "Full package",
  ],
  formMessage: "Where it hurts most — maps, review sites, search?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your reputation request is in — we’ll get back to you.",
  formSource: "en-reputation",
  footerBrand: "PRIME",
  footerTagline: "Reputation management · reviews · trust",
};

export function getOrmContent(locale: Locale): OrmContent {
  if (locale === "en") return ormEn;
  return ormRu;
}

export function ormPath(locale: Locale): string {
  return getOrmContent(locale).path;
}

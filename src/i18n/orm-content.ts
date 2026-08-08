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
  metaTitle: "Online reputation — PRIME",
  metaDescription:
    "Online reputation: audit, strategy, negative-review monitoring, and genuine positive social proof on Google Maps, Business Profile, and review sites. No fake reviews.",
  serviceName: "Online reputation",
  serviceType: "Online reputation management",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Online reputation",
  menuLabel: "Menu",
  ctaTop: "Talk to us",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Online reputation — take ",
  heroTitleAccent: "trust",
  heroTitleAfter: " back",
  heroLead:
    "Happy customers stay quiet. Angry ones don’t. We build monitoring, reply playbooks, and review habits so your online reputation matches how you actually operate.",
  heroCtaPrimary: "Book a consult",
  heroCtaSecondary: "What we do",
  scoreLabel: "Trust balance",
  scoreValue: "4.8",
  scoreHint: "not a rating we “paint” — a system that holds up",
  reviews: [
    {
      title: "Happy customer",
      text: "Usually stays quiet — until someone asks them to share.",
    },
    {
      title: "Negative voice",
      text: "Posts first, posts loud — and sets the tone in Google Search.",
    },
    {
      title: "Our job",
      text: "Restore a fair picture online — and the processes behind it.",
    },
  ],
  storyTitle: "The negative feedback loop",
  storyLead: "Why “we’re fine on our end” isn’t what people see when they look you up.",
  problemLead:
    "When things go well, customers stay quiet. The moment something breaks, the first move is often an angry review.",
  problemDistort:
    "The web paints a skewed picture: instead of a balanced view, prospects see a pile of problems and frustration.",
  problemCycle:
    "New customers show up already skeptical, expectations drop, and every small miss reinforces the negative tone. Hundreds of happy clients stay silent — a few loud incidents write the story.",
  trustTitle: "Trust sits with the wrong crowd",
  trustText:
    "Your most valuable asset — trust — is being defined by a dissatisfied minority. There’s no system pulling the balance back.",
  mechanismTitle: "You need a system",
  mechanismText:
    "Not “flood the page with five-stars” — strategy, team training, and day-to-day work across the platforms that matter.",
  pillarsTitle: "Hands-on consulting — and a system your team can run",
  pillarsLead:
    "Four pillars of in-house reputation work — from audit to a healthier brand image.",
  pillars: [
    {
      n: "01",
      title: "Audit and reputation strategy",
      text: "See how you’re perceived today across Google Maps, review sites, and search. Build a plan your team can actually execute.",
    },
    {
      n: "02",
      title: "Training and process rollout",
      text: "One-on-one coaching on reputation ops — so the team can reply and collect feedback without chaos.",
    },
    {
      n: "03",
      title: "Monitoring and negative handling",
      text: "Track reviews, help you reply with substance, and cool escalations before they become the face of the brand.",
    },
    {
      n: "04",
      title: "Positive social proof",
      text: "Build a steady stream of honest positive reviews from real customers — so the online picture matches reality.",
    },
  ],
  platformsTitle: "Where reputation closes the deal",
  platformsLead:
    "Google Maps, review sites, and search — the places customers decide before they ever call.",
  platforms: [
    {
      title: "Google Maps / Business Profile",
      text: "Rating and reviews — often the first thing a local customer sees before they reach out.",
    },
    {
      title: "Review sites",
      text: "Third-party platforms and industry directories — where people compare options and decide.",
    },
    {
      title: "Google Search",
      text: "What shows up for your brand name sets expectations before anyone hits your website.",
    },
    {
      title: "Social mentions",
      text: "Public threads and comments that can turn one incident into a web-wide story.",
    },
  ],
  stepsTitle: "How we work",
  stepsLead: "From a clear baseline to processes that run without chaos.",
  stepPrefix: "Step",
  steps: [
    {
      n: "01",
      title: "Map the current picture",
      text: "Where you’re talked about, what tone dominates, and which incidents stick around longest.",
    },
    {
      n: "02",
      title: "Strategy and priorities",
      text: "What to fix first: replies, internal process, and prompts for happy customers.",
    },
    {
      n: "03",
      title: "Roll it out in-house",
      text: "Train the team: who replies, on what SLA, in what tone — no more “someone will get to it.”",
    },
    {
      n: "04",
      title: "Monitor and grow",
      text: "Stay on it: handle negatives, and systematically strengthen the positives.",
    },
  ],
  outcomesTitle: "What actually changes",
  outcomesLead: "Not stars for a slide deck — a system customers and your team can see.",
  outcomes: [
    {
      title: "A fairer portrait",
      text: "Google Search and Maps show the real picture: not just the misses, but the happy customers too.",
    },
    {
      title: "Replies without chaos",
      text: "Clear ownership, timelines, and tone — negatives don’t sit unanswered for weeks.",
    },
    {
      title: "A process, not a one-off",
      text: "Feedback collection is built into how you serve customers — your rating isn’t left to luck.",
    },
  ],
  nosTitle: "What we don’t do",
  nosLead: "So reputation work never gets confused with shady shortcuts.",
  nos: [
    {
      title: "We don’t fake five-stars",
      text: "Fake reviews burn trust and risk platform penalties. We work with real customers and real processes.",
    },
    {
      title: "We don’t promise “5.0 in a week”",
      text: "Pace depends on your starting negatives, niche, and how ready the team is to change replies and service.",
    },
    {
      title: "We don’t paper over bad service",
      text: "If the same failures keep happening inside — we fix the root causes first. Otherwise the rating drops again.",
    },
  ],
  pricingTitle: "Custom pricing",
  pricingText:
    "We quote once we understand your niche, platform volume, current review tone, and what you want to fix internally.",
  pricingMark: "After niche and platform review",
  faqTitle: "FAQ",
  faqLead: "Timelines, platforms, and where to start — short answers.",
  faq: [
    {
      q: "Is this review farming?",
      a: "No. We build audit, replies, monitoring, and honest feedback collection from happy customers. Fake reviews and gray-hat tactics are out of scope.",
    },
    {
      q: "How long until the tone stabilizes?",
      a: "Depends on where you start: sometimes organizing replies takes a few weeks; sometimes it’s a quarter of steady work. We estimate after a platform audit.",
    },
    {
      q: "Does the whole company need to be involved?",
      a: "At least someone needs to own reviews and customer contact. Without an internal process, outside help fades fast.",
    },
    {
      q: "Which platforms do you cover?",
      a: "Google Maps / Business Profile, key review sites, and what surfaces for your brand in Google Search. We tune the mix to your niche.",
    },
    {
      q: "Can we start with an audit only?",
      a: "Yes. We often begin with a current-tone review and priorities — then you choose: run processes in-house or continue with our support.",
    },
  ],
  ctaTitle: "Ready to rebalance the reviews?",
  ctaLead:
    "Get in touch — we’ll review the current tone and propose a plan: audit, processes, or ongoing support.",
  ctaPoints: [
    "Google Maps and review-site audit — no fake ratings",
    "Negative handling and positive growth",
    "Team playbooks — replies and ownership",
    "30-minute niche review · no obligation",
  ],
  formName: "Your name",
  formPhone: "Phone",
  formBrand: "Company / brand name",
  formFocus: "What’s the priority?",
  formFocusOptions: [
    "Audit and strategy",
    "Handling negatives",
    "Growing positive reviews",
    "Team training",
    "Full package",
  ],
  formMessage: "Where does it hurt most — Maps, review sites, search?",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Send request",
  formSuccess: "Thanks! Your reputation request is in — we’ll be in touch.",
  formSource: "en-reputation",
  footerBrand: "PRIME",
  footerTagline: "Online reputation · reviews · trust",
};

export function getOrmContent(locale: Locale): OrmContent {
  if (locale === "en") return ormEn;
  return ormRu;
}

export function ormPath(locale: Locale): string {
  return getOrmContent(locale).path;
}

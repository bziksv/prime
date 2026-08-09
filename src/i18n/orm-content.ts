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

const ormEs: OrmContent = {
  path: "/es/reputation/",
  metaTitle: "Reputación online — PRIME",
  metaDescription:
    "Reputación online: auditoría, estrategia, monitorización de reseñas negativas y prueba social positiva genuina en Google Maps, Business Profile y sitios de reseñas. Sin reseñas falsas.",
  serviceName: "Reputación online",
  serviceType: "Gestión de reputación online",
  breadcrumbHome: "Inicio",
  breadcrumbCurrent: "Reputación online",
  menuLabel: "Menú",
  ctaTop: "Hablemos",
  brandBefore: "PRIM",
  brandAccent: "E",
  heroTitleBefore: "Reputación online — recupera la ",
  heroTitleAccent: "confianza",
  heroTitleAfter: " en tus manos",
  heroLead:
    "Los clientes contentos se quedan callados. Los enfadados, no. Construimos monitorización, guiones de respuesta y hábitos de reseñas para que tu reputación online refleje cómo trabajas de verdad.",
  heroCtaPrimary: "Reservar consulta",
  heroCtaSecondary: "Qué hacemos",
  scoreLabel: "Balance de confianza",
  scoreValue: "4.8",
  scoreHint: "no es una nota que «maquillamos» — es un sistema que se sostiene",
  reviews: [
    {
      title: "Cliente satisfecho",
      text: "Suele quedarse callado — hasta que alguien le pide que lo cuente.",
    },
    {
      title: "Voz negativa",
      text: "Escribe primero y en voz alta — y marca el tono en Google Search.",
    },
    {
      title: "Nuestro trabajo",
      text: "Devolver una imagen justa en internet — y los procesos que la sostienen.",
    },
  ],
  storyTitle: "El círculo vicioso de lo negativo",
  storyLead: "Por qué «por aquí todo va bien» no es lo que ve quien te busca en internet.",
  problemLead:
    "Cuando todo va bien, los clientes se quedan callados. En cuanto algo se rompe, lo primero suele ser una reseña enfadada.",
  problemDistort:
    "Internet dibuja una imagen sesgada: en vez de una visión equilibrada, los posibles clientes ven un montón de quejas y frustración.",
  problemCycle:
    "Los clientes nuevos llegan ya con desconfianza, las expectativas bajan y cada pequeño fallo refuerza el tono negativo. Cientos de clientes contentos guardan silencio — unos pocos incidentes ruidosos escriben la historia.",
  trustTitle: "La confianza queda en manos equivocadas",
  trustText:
    "Tu activo más valioso — la confianza — lo está definiendo una minoría insatisfecha. No hay ningún sistema que devuelva el equilibrio.",
  mechanismTitle: "Hace falta un sistema",
  mechanismText:
    "No se trata de «inundar de cinco estrellas», sino de estrategia, formación del equipo y trabajo diario en las plataformas que importan.",
  pillarsTitle: "Asesoría directa — y un sistema que tu equipo puede llevar",
  pillarsLead:
    "Cuatro pilares de gestión interna de la reputación — desde la auditoría hasta una imagen de marca más sana.",
  pillars: [
    {
      n: "01",
      title: "Auditoría y estrategia de reputación",
      text: "Descubre cómo te perciben hoy en Google Maps, sitios de reseñas y búsquedas. Construimos un plan que tu equipo pueda ejecutar de verdad.",
    },
    {
      n: "02",
      title: "Formación y puesta en marcha de procesos",
      text: "Acompañamiento uno a uno sobre gestión de reputación — para que el equipo responda y recoja opiniones sin caos.",
    },
    {
      n: "03",
      title: "Monitorización y gestión de lo negativo",
      text: "Seguimos las reseñas, te ayudamos a responder con fondo y enfriamos los conflictos antes de que se conviertan en la cara de la marca.",
    },
    {
      n: "04",
      title: "Prueba social positiva",
      text: "Construimos un flujo constante de reseñas positivas genuinas de clientes reales — para que la imagen online encaje con la realidad.",
    },
  ],
  platformsTitle: "Dónde la reputación cierra la venta",
  platformsLead:
    "Google Maps, sitios de reseñas y búsquedas — los lugares donde el cliente decide antes de llamar.",
  platforms: [
    {
      title: "Google Maps / Business Profile",
      text: "La puntuación y las reseñas — a menudo lo primero que ve un cliente local antes de contactar.",
    },
    {
      title: "Sitios de reseñas",
      text: "Plataformas externas y directorios del sector — donde la gente compara opciones y decide.",
    },
    {
      title: "Google Search",
      text: "Lo que aparece al buscar tu marca marca las expectativas antes de que nadie entre en tu web.",
    },
    {
      title: "Menciones en redes sociales",
      text: "Hilos y comentarios públicos que pueden convertir un incidente en una historia que corre por toda la red.",
    },
  ],
  stepsTitle: "Cómo trabajamos",
  stepsLead: "De una foto clara del punto de partida a procesos que funcionan sin caos.",
  stepPrefix: "Paso",
  steps: [
    {
      n: "01",
      title: "Mapear la situación actual",
      text: "Dónde se habla de ti, qué tono predomina y qué incidentes se quedan más tiempo dando vueltas.",
    },
    {
      n: "02",
      title: "Estrategia y prioridades",
      text: "Qué resolver primero: respuestas, proceso interno y cómo pedir opinión a los clientes contentos.",
    },
    {
      n: "03",
      title: "Implantación interna",
      text: "Formamos al equipo: quién responde, en qué plazo, con qué tono — se acaba el «ya lo verá alguien».",
    },
    {
      n: "04",
      title: "Monitorizar y crecer",
      text: "Seguimiento constante: gestionar lo negativo y reforzar lo positivo de forma sistemática.",
    },
  ],
  outcomesTitle: "Qué cambia de verdad",
  outcomesLead: "No son estrellas para una presentación — es un sistema que ven tus clientes y tu equipo.",
  outcomes: [
    {
      title: "Un retrato más justo",
      text: "Google Search y Maps muestran la imagen real: no solo los fallos, también a los clientes contentos.",
    },
    {
      title: "Respuestas sin caos",
      text: "Responsables, plazos y tono claros — lo negativo no se queda semanas sin respuesta.",
    },
    {
      title: "Un proceso, no algo puntual",
      text: "Recoger opiniones queda integrado en cómo atiendes a tus clientes — tu nota no depende de la suerte.",
    },
  ],
  nosTitle: "Qué no hacemos",
  nosLead: "Para que la gestión de reputación nunca se confunda con atajos poco claros.",
  nos: [
    {
      title: "No fabricamos cinco estrellas",
      text: "Las reseñas falsas queman la confianza y arriesgan penalizaciones de la plataforma. Trabajamos con clientes reales y procesos reales.",
    },
    {
      title: "No prometemos «un 5.0 en una semana»",
      text: "El ritmo depende de tu punto de partida, el nicho y cuánto esté dispuesto el equipo a cambiar respuestas y servicio.",
    },
    {
      title: "No tapamos un mal servicio",
      text: "Si los mismos fallos se repiten por dentro, primero corregimos la raíz. De lo contrario, la nota vuelve a caer.",
    },
  ],
  pricingTitle: "Presupuesto a medida",
  pricingText:
    "Cotizamos una vez entendemos tu nicho, el volumen de plataformas, el tono actual de las reseñas y qué quieres resolver internamente.",
  pricingMark: "Tras revisar el nicho y las plataformas",
  faqTitle: "FAQ",
  faqLead: "Plazos, plataformas y por dónde empezar — respuestas breves.",
  faq: [
    {
      q: "¿Esto es comprar reseñas?",
      a: "No. Construimos auditoría, respuestas, monitorización y recogida honesta de opiniones de clientes contentos. Las reseñas falsas y las tácticas turbias quedan fuera.",
    },
    {
      q: "¿Cuánto tarda en estabilizarse el tono?",
      a: "Depende de dónde partas: a veces organizar las respuestas lleva unas semanas; otras, un trimestre de trabajo constante. Lo estimamos tras auditar las plataformas.",
    },
    {
      q: "¿Tiene que implicarse toda la empresa?",
      a: "Al menos alguien debe encargarse de las reseñas y el contacto con clientes. Sin un proceso interno, la ayuda externa se diluye rápido.",
    },
    {
      q: "¿Qué plataformas cubren?",
      a: "Google Maps / Business Profile, los principales sitios de reseñas del sector y lo que aparece de tu marca en Google Search. Ajustamos la mezcla a tu nicho.",
    },
    {
      q: "¿Podemos empezar solo con la auditoría?",
      a: "Sí. A menudo empezamos con una revisión del tono actual y las prioridades — luego eliges: llevar los procesos dentro de casa o seguir con nuestro apoyo.",
    },
  ],
  ctaTitle: "¿Listo para reequilibrar las reseñas?",
  ctaLead:
    "Contáctanos — revisaremos el tono actual y proponemos un plan: auditoría, procesos o acompañamiento continuo.",
  ctaPoints: [
    "Auditoría de Google Maps y sitios de reseñas — sin notas falsas",
    "Gestión de lo negativo y crecimiento de lo positivo",
    "Guiones para el equipo — respuestas y responsables",
    "Revisión de nicho de 30 minutos · sin compromiso",
  ],
  formName: "Tu nombre",
  formPhone: "Teléfono",
  formBrand: "Nombre de la empresa / marca",
  formFocus: "¿Cuál es la prioridad?",
  formFocusOptions: [
    "Auditoría y estrategia",
    "Gestión de lo negativo",
    "Crecer en reseñas positivas",
    "Formación del equipo",
    "Paquete completo",
  ],
  formMessage: "¿Dónde duele más — Maps, sitios de reseñas, búsquedas?",
  formAgreeBefore: "Acepto el tratamiento de datos personales conforme a nuestra",
  formAgreePolicy: "política de privacidad",
  formSubmit: "Enviar solicitud",
  formSuccess: "¡Gracias! Hemos recibido tu solicitud sobre reputación — te contactaremos.",
  formSource: "es-reputation",
  footerBrand: "PRIME",
  footerTagline: "Reputación online · reseñas · confianza",
};

export function getOrmContent(locale: Locale): OrmContent {
  if (locale === "en") return ormEn;
  if (locale === "es") return ormEs;
  return ormRu;
}

export function ormPath(locale: Locale): string {
  return getOrmContent(locale).path;
}

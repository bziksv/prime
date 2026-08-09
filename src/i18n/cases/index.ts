import type { CaseCategory, CaseCategoryId, CaseStudy } from "../../data/cases";
import { caseCategories, caseStudies } from "../../data/cases";
import type { Locale } from "../locales";
import { defaultLocale, localePathPrefix } from "../locales";
import { localizeCase, localizeCategory, isCaseTranslated } from "./localize";

export { EN_CASE_SLUGS, isEnCaseSlug, ES_CASE_SLUGS, isEsCaseSlug } from "./slugs";
export {
  caseTranslationsEn,
  caseTranslationsEs,
  localizeCase,
  localizeCategory,
  isCaseTranslated,
} from "./localize";
export { getCasesCategoryUi } from "./category-ui";
export type { CasesCategoryUi } from "./category-ui";

export type CaseUi = {
  client: string;
  industry: string;
  period: string;
  site: string;
  aboutClient: string;
  painHeading: string;
  journeyHeading: string;
  plainSpeakHeading: string;
  plainSpeakLead: string;
  plainJargonLabel: string;
  plainHumanLabel: string;
  stepsHeading: string;
  stepsLead: string;
  evidenceHeading: string;
  evidenceLead: string;
  outcomeHeading: string;
  highlightsHeading: string;
  resultsHeading: string;
  relatedHeading: string;
  relatedLead: string;
  ctaDefaultTitle: string;
  ctaDefaultText: string;
  ctaSubmit: string;
  ctaMore: string;
  lightboxClose: string;
  lightboxPrev: string;
  lightboxNext: string;
  lightboxAria: string;
  footerBrand: string;
  footerTagline: string;
  footerCopy: string;
  pageTitleSuffix: string;
  breadcrumbHome: string;
  breadcrumbCases: string;
  zoomAria: string;
  openAria: string;
  liveView: string;
  startingPoint: string;
  journeyDefault: string;
  outcomeDefault: string;
  menuLabel: string;
  ctaTop: string;
  langSwitchAria: string;
  viewCase: string;
  showMore: string;
  showMoreCount: string;
};

const caseUiRu: CaseUi = {
  client: "Клиент",
  industry: "Отрасль",
  period: "Срок",
  site: "Сайт",
  aboutClient: "О клиенте",
  painHeading: "С какой болью пришли",
  journeyHeading: "Как мы провели",
  plainSpeakHeading: "Простыми словами",
  plainSpeakLead:
    "Сложные штуки из брифа — без жаргона. Так мы объясняли клиенту, зачем каждый шаг.",
  plainJargonLabel: "Как говорят специалисты",
  plainHumanLabel: "Как мы объясняли",
  stepsHeading: "Что сделали по шагам",
  stepsLead: "Каждый шаг — конкретное изменение. Слева смысл, справа экран.",
  evidenceHeading: "Ещё кадры с проекта",
  evidenceLead: "Не галерея ради галереи — пара экранов, которые закрывают картину.",
  outcomeHeading: "К чему пришли",
  highlightsHeading: "Что получили",
  resultsHeading: "В цифрах",
  relatedHeading: "Другие проекты",
  relatedLead: "Похожие кейсы и соседние направления",
  ctaDefaultTitle: "Нужен такой же результат?",
  ctaDefaultText:
    "С 2015 на рынке: за 10+ лет немало агентств закрылось — мы на месте. Разберём нишу за 30 минут и подскажем формат: SEO, Директ, сайт или бот.",
  ctaSubmit: "Оставить заявку",
  ctaMore: "Ещё",
  lightboxClose: "Закрыть",
  lightboxPrev: "Предыдущее",
  lightboxNext: "Следующее",
  lightboxAria: "Просмотр экранов",
  footerBrand: "ПРАЙМ",
  footerTagline: "Кейсы · SEO · контекст · разработка",
  footerCopy: "ПРАЙМ",
  pageTitleSuffix: "— кейс ПРАЙМ",
  breadcrumbHome: "Главная",
  breadcrumbCases: "Кейсы",
  zoomAria: "Увеличить",
  openAria: "Открыть",
  liveView: "Актуальный вид",
  startingPoint: "Точка старта",
  journeyDefault:
    "Вот как мы провели клиента от боли до рабочего результата — без воды и «магии».",
  outcomeDefault: "В конце пути — измеримый результат и понятные следующие шаги.",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  langSwitchAria: "Язык страницы",
  viewCase: "Смотреть кейс →",
  showMore: "Показать ещё",
  showMoreCount: "ещё",
};

const caseUiEn: CaseUi = {
  client: "Client",
  industry: "Industry",
  period: "Period",
  site: "Site",
  aboutClient: "About the client",
  painHeading: "The pain they came with",
  journeyHeading: "How we guided them",
  plainSpeakHeading: "In plain speak",
  plainSpeakLead:
    "Brief jargon — without the fog. How we explained each step to the client.",
  plainJargonLabel: "Specialist speak",
  plainHumanLabel: "How we explained it",
  stepsHeading: "What we did, step by step",
  stepsLead: "Each step is a concrete change. Meaning on the left, screen on the right.",
  evidenceHeading: "More frames from the project",
  evidenceLead: "Not a gallery for its own sake — a few screens that complete the picture.",
  outcomeHeading: "Where we landed",
  highlightsHeading: "What they got",
  resultsHeading: "In numbers",
  relatedHeading: "Other projects",
  relatedLead: "Similar cases and neighbouring directions",
  ctaDefaultTitle: "Need a similar result?",
  ctaDefaultText:
    "On the market since 2015. In 30 minutes we’ll map your niche and suggest the format: SEO, paid search, a site, or a bot.",
  ctaSubmit: "Send a request",
  ctaMore: "More",
  lightboxClose: "Close",
  lightboxPrev: "Previous",
  lightboxNext: "Next",
  lightboxAria: "Screen viewer",
  footerBrand: "PRIME",
  footerTagline: "Cases · SEO · paid search · web",
  footerCopy: "PRIME",
  pageTitleSuffix: "— PRIME case study",
  breadcrumbHome: "Home",
  breadcrumbCases: "Cases",
  zoomAria: "Zoom",
  openAria: "Open",
  liveView: "Live view",
  startingPoint: "Starting point",
  journeyDefault:
    "Here is how we took the client from pain to a working result — no fluff, no “magic”.",
  outcomeDefault: "At the end of the path — a measurable result and clear next steps.",
  menuLabel: "Menu",
  ctaTop: "Send a request",
  langSwitchAria: "Page language",
  viewCase: "View case →",
  showMore: "Show more",
  showMoreCount: "more",
};

const caseUiEs: CaseUi = {
  client: "Cliente",
  industry: "Sector",
  period: "Duración",
  site: "Sitio",
  aboutClient: "Sobre el cliente",
  painHeading: "Con qué problema llegaron",
  journeyHeading: "Cómo los acompañamos",
  plainSpeakHeading: "En palabras simples",
  plainSpeakLead:
    "La jerga del brief, sin humo. Así le explicamos cada paso al cliente.",
  plainJargonLabel: "Como lo dicen los especialistas",
  plainHumanLabel: "Como lo explicamos",
  stepsHeading: "Qué hicimos, paso a paso",
  stepsLead: "Cada paso es un cambio concreto. A la izquierda el sentido, a la derecha la pantalla.",
  evidenceHeading: "Más capturas del proyecto",
  evidenceLead: "No es una galería por gusto — unas pocas pantallas que completan el panorama.",
  outcomeHeading: "A dónde llegamos",
  highlightsHeading: "Qué consiguieron",
  resultsHeading: "En números",
  relatedHeading: "Otros proyectos",
  relatedLead: "Casos similares y áreas relacionadas",
  ctaDefaultTitle: "¿Buscas un resultado parecido?",
  ctaDefaultText:
    "En el mercado desde 2015. En 30 minutos revisamos tu nicho y te sugerimos el formato: SEO, Google Ads, un sitio web o un bot.",
  ctaSubmit: "Enviar solicitud",
  ctaMore: "Más",
  lightboxClose: "Cerrar",
  lightboxPrev: "Anterior",
  lightboxNext: "Siguiente",
  lightboxAria: "Visor de pantallas",
  footerBrand: "PRIME",
  footerTagline: "Casos · SEO · Google Ads · desarrollo web",
  footerCopy: "PRIME",
  pageTitleSuffix: "— caso de éxito de PRIME",
  breadcrumbHome: "Inicio",
  breadcrumbCases: "Casos",
  zoomAria: "Ampliar",
  openAria: "Abrir",
  liveView: "Vista actual",
  startingPoint: "Punto de partida",
  journeyDefault:
    "Así acompañamos al cliente desde el problema hasta un resultado real — sin relleno ni “magia”.",
  outcomeDefault: "Al final del camino — un resultado medible y próximos pasos claros.",
  menuLabel: "Menú",
  ctaTop: "Enviar solicitud",
  langSwitchAria: "Idioma de la página",
  viewCase: "Ver caso →",
  showMore: "Mostrar más",
  showMoreCount: "más",
};

export const caseUi: Record<"ru" | "en" | "es", CaseUi> = {
  ru: caseUiRu,
  en: caseUiEn,
  es: caseUiEs,
};

export function getCaseUi(locale: Locale): CaseUi {
  if (locale === "en") return caseUi.en;
  if (locale === "es") return caseUi.es;
  return caseUi.ru;
}

/** Path for a case: localized prefix only when a translation exists. */
export function casePath(c: CaseStudy, locale: Locale = defaultLocale): string {
  if (locale !== "ru" && isCaseTranslated(c.slug, locale)) {
    return `${localePathPrefix(locale)}/keysy/${c.category}/${c.slug}/`;
  }
  return `/keysy/${c.category}/${c.slug}/`;
}

export function categoryPath(id: CaseCategoryId, locale: Locale = defaultLocale): string {
  if (locale !== "ru") return `${localePathPrefix(locale)}/keysy/${id}/`;
  return `/keysy/${id}/`;
}

export function casesIndexPath(locale: Locale = defaultLocale): string {
  if (locale !== "ru") return `${localePathPrefix(locale)}/keysy/`;
  return "/keysy/";
}

/** Featured cases for the homepage. EN: only translated featured, localized. */
export function casesForHome(locale: Locale = defaultLocale): CaseStudy[] {
  const featured = caseStudies.filter((c) => c.featured);
  if (locale === "ru") return featured.slice(0, 6);
  return featured
    .filter((c) => isCaseTranslated(c.slug, locale))
    .map((c) => localizeCase(c, locale));
}

export function getLocalizedCategory(
  id: CaseCategoryId | string,
  locale: Locale = defaultLocale,
): CaseCategory | undefined {
  const cat = caseCategories.find((c) => c.id === id || c.slug === id);
  if (!cat) return undefined;
  return localizeCategory(cat, locale);
}

export function getRelatedCasesLocalized(
  current: CaseStudy,
  locale: Locale,
  limit = 3,
): CaseStudy[] {
  const pool = caseStudies.filter((c) => c.slug !== current.slug);
  const same = pool.filter((c) => c.category === current.category);
  const rest = pool.filter((c) => c.category !== current.category);
  const ordered = [...same, ...rest];
  const filtered =
    locale === "ru"
      ? ordered
      : ordered.filter((c) => isCaseTranslated(c.slug, locale));
  return filtered.slice(0, limit).map((c) => localizeCase(c, locale));
}

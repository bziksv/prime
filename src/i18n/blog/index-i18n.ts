import type { Locale } from "../locales";

/** Client strings for the blog index (search / filters / cards). */
export type BlogIndexI18n = {
  locale: Locale;
  basePath: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchHint: string;
  clearSearch: string;
  catsLabel: string;
  allLabel: string;
  readArticle: string;
  readShort: string;
  viewsShort: string;
  showMore: string;
  matchFallback: string;
  emptyQuery: string;
  emptyCat: string;
  statusNone: string;
  statusFound: string;
  statusCat: string;
  statusAll: string;
  shownOf: string;
  allCount: string;
  where: { title: string; heading: string; excerpt: string; body: string };
  kicker: string;
  lead: string;
  featuredRead: string;
};

export function blogIndexI18n(locale: Locale): BlogIndexI18n {
  if (locale === "en") {
    return {
      locale: "en",
      basePath: "/en/blog",
      searchLabel: "Search the blog",
      searchPlaceholder: "Semantics, audit, site structure…",
      searchHint: "Searches titles, sections, and body · handles typos and synonyms",
      clearSearch: "Clear",
      catsLabel: "Categories",
      allLabel: "All",
      readArticle: "Read article",
      readShort: "Read",
      viewsShort: "views",
      showMore: "Show more",
      matchFallback: "match",
      emptyQuery:
        "Nothing found for “{q}”. Try “semantics”, “audit”, or “structure”.",
      emptyCat: "No articles in this category yet.",
      statusNone: "No results",
      statusFound: "Found {n} · smart search across titles, sections, and body",
      statusCat: "Category “{cat}” · {n}",
      statusAll: "{n} {articles} · meaning, typos, and synonym search",
      shownOf: "Showing {shown} of {total}",
      allCount: "All {n} {articles}",
      where: {
        title: "title",
        heading: "section",
        excerpt: "excerpt",
        body: "body",
      },
      kicker: "Agency materials",
      lead: "Practical SEO and marketing articles — from PRIME project work.",
      featuredRead: "Read article",
    };
  }
  if (locale === "es") {
    return {
      locale: "es",
      basePath: "/es/blog",
      searchLabel: "Buscar en el blog",
      searchPlaceholder: "Semántica, auditoría, estructura del sitio…",
      searchHint: "Busca en títulos, secciones y cuerpo · tolera typos y sinónimos",
      clearSearch: "Limpiar",
      catsLabel: "Categorías",
      allLabel: "Todas",
      readArticle: "Leer artículo",
      readShort: "Leer",
      viewsShort: "visitas",
      showMore: "Ver más",
      matchFallback: "coincidencia",
      emptyQuery:
        "Nada para «{q}». Prueba «semántica», «auditoría» o «estructura».",
      emptyCat: "Aún no hay artículos en esta categoría.",
      statusNone: "Sin resultados",
      statusFound: "Encontrados {n} · búsqueda inteligente en títulos, secciones y cuerpo",
      statusCat: "Categoría «{cat}» · {n}",
      statusAll: "{n} {articles} · búsqueda por sentido, typos y sinónimos",
      shownOf: "Mostrando {shown} de {total}",
      allCount: "Todos {n} {articles}",
      where: {
        title: "título",
        heading: "sección",
        excerpt: "extracto",
        body: "cuerpo",
      },
      kicker: "Materiales de la agencia",
      lead: "Artículos prácticos de SEO y marketing — desde el trabajo de proyectos de PRIME.",
      featuredRead: "Leer artículo",
    };
  }
  return {
    locale: "ru",
    basePath: "/blog",
    searchLabel: "Поиск по блогу",
    searchPlaceholder: "Семантика, аудит, структура сайта…",
    searchHint: "Ищет по заголовкам, разделам и тексту · понимает опечатки и синонимы",
    clearSearch: "Очистить",
    catsLabel: "Рубрики",
    allLabel: "Все",
    readArticle: "Читать статью",
    readShort: "Читать",
    viewsShort: "просм.",
    showMore: "Показать ещё",
    matchFallback: "совпадение",
    emptyQuery:
      "Ничего не нашли по «{q}». Попробуйте «семантика», «аудит» или «структура».",
    emptyCat: "В этой рубрике пока нет статей.",
    statusNone: "Нет результатов",
    statusFound: "Нашли {n} · умный поиск по заголовкам, разделам и тексту",
    statusCat: "Рубрика «{cat}» · {n}",
    statusAll: "{n} {articles} · поиск по смыслу, опечаткам и синонимам",
    shownOf: "Показано {shown} из {total}",
    allCount: "Все {n} {articles}",
    where: {
      title: "заголовок",
      heading: "раздел",
      excerpt: "анонс",
      body: "текст",
    },
    kicker: "Материалы агентства",
    lead: "Практические статьи по SEO и маркетингу — из опыта проектов ПРАЙМ.",
    featuredRead: "Читать статью",
  };
}

export function pluralArticlesLocale(n: number, locale: Locale): string {
  if (locale === "en") return n === 1 ? "article" : "articles";
  if (locale === "es") return n === 1 ? "artículo" : "artículos";
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "статья";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "статьи";
  return "статей";
}

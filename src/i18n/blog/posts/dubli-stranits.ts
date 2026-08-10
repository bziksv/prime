import type { BlogPost } from "../../../data/blog";

/** EN overlay for dubli-stranits — same structure as RU JSON. */
export const dubliStranitsEn: BlogPost = {
  slug: "dubli-stranits",
  title: "Duplicate pages: why they hurt and how to fix them",
  date: "2021-01-11",
  category: "SEO",
  cover: "/images/blog/dubli-stranits/cover-en.webp",
  excerpt:
    "What counts as page duplicates, exact vs near-duplicates, where they come from on CMS and stores, what they do in search, and how to find and merge URLs.",
  lead: [
    "Duplicates are when the same or nearly the same meaning is available at different addresses. Search wastes crawl on copies, dilutes signals, and may show a version you don’t consider primary.",
    "Below: what counts as a duplicate, the common types and causes, SEO risks, and a practical order: find → choose a canon → merge or remove from the index. Redirects and deindexing tools are covered in sibling articles.",
  ],
  faq: [
    {
      q: "Is a duplicate always full HTML copy-paste?",
      a: "No. An exact duplicate is an almost identical document. A near-duplicate is strong overlap of meaning/blocks at different URLs (often filters, pagination, “similar” cards).",
    },
    {
      q: "How do duplicates differ from plagiarism off another site?",
      a: "Internal duplicates are your domain’s problem. External copy-paste is another story (uniqueness, complaints). Here it’s about internal URL hygiene.",
    },
    {
      q: "Should I use a redirect or a canonical?",
      a: "If the old URL shouldn’t open — 301. If both versions are needed for users but only one in the index — usually `rel=\"canonical\"` plus careful indexing. See the redirects article.",
    },
    {
      q: "Does robots.txt fix duplicates?",
      a: "Not as the main method. Disallow cuts crawl but doesn’t replace merging and canonical. To remove from the index — noindex while the document is reachable, or 301.",
    },
    {
      q: "Are UTM tags dangerous?",
      a: "As separate indexed URLs — yes, if the bot crawls and indexes them. Usually canonical to the clean URL + parameter settings in webmaster panels.",
    },
    {
      q: "How fast can I gauge the scale?",
      a: "A crawler (title/H1/canonical list), “pages in search” export in Webmaster/Search Console, `site:` search for repeated titles. On large catalogs — prioritize by section.",
    },
    {
      q: "Do duplicates mean a forever “duplicate filter”?",
      a: "More often it’s lost efficiency: crawl budget, cannibalization, weak snippets. Hard sanctions are a separate talk; first remove systemic duplicate causes.",
    },
    {
      q: "How long should I wait after merging?",
      a: "Recrawl and canon changes in the SERP aren’t instant: days–weeks, longer on big sites. Watch indexing reports — not overnight rankings.",
    },
  ],
  sections: [
    {
      title: "What duplicate pages are",
      level: 2,
      paras: [
        "In SEO a duplicate is several URLs that look like one document to search or compete for one intent with no clear value in splitting them. Users may open both; the bot chooses which is primary.",
        "Don’t confuse with intentional structure: different products, services, and articles aren’t duplicates even if the template looks similar. The problem starts when meaning and value nearly match — and there are many addresses.",
      ],
      lists: [
        {
          intro: "Signs:",
          items: [
            "one title/H1 on several URLs",
            "the same main copy with different parameters",
            "www and non-www / http and https both return 200 without merging",
            "filters and sorts spawn endless combinations in the index",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Exact and near-duplicates",
      level: 2,
      paras: [
        "Exact (or near-exact) — the same document at different addresses: case change, trailing slash, session id, mirrors. Near-duplicates — content overlap: category “as is” and the same with sorting, a card and a print version, thin filter intersections.",
        "Near-duplicates are sneakier: the crawler sees “different” pages while user value is almost zero. Those inflate online-store indexes.",
      ],
      lists: [
        {
          intro: "Exact examples:",
          items: [
            "`example.com` and `www.example.com` without 301",
            "http and https both in the index",
            "URLs with `?utm_…` next to the clean one",
            "a copy at `/index.php` and the pretty URL",
          ],
        },
        {
          intro: "Near-duplicate examples:",
          items: [
            "sort and pagination as separate “full” documents",
            "color+size filter vs color on the same listing",
            "a print page with the same text",
            "blog tag/category duplicates with the same collections",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Where duplicates come from",
      level: 2,
      paras: [
        "Most often it’s not a “malicious copywriter” but CMS, store, and marketing settings: session parameters, several paths to one card, ad landing generation, test copies on subdomains, catalog exports with parameters.",
        "Content near-duplicates appear when almost identical text is stamped under every keyword or when autofill spawns thin pages. Then you fix URL tech and editorial policy.",
      ],
      lists: [
        {
          intro: "Typical sources:",
          items: [
            "mirrors and protocols without a single merge",
            "GET parameters (sort, filter, tags, session)",
            "several templates for one entity",
            "section copies after a redesign without 301",
            "external links to “dirty” URLs that got indexed",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fix the systemic cause first (canon rule, mirror redirects), or manual URL cleanup never ends.",
        },
      ],
      links: [
        {
          label: "Site autofill",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
      ],
    },
    {
      title: "Why duplicates hurt SEO",
      level: 2,
      paras: [
        "Crawl budget goes to copies instead of new and important URLs. Link and behavioral signals spread across versions. An inconvenient or outdated address may stick in the SERP.",
        "Inside the site you get cannibalization: several URLs claim one query and none gain stability. For a store it’s also analytics noise: goals and assisted conversions get smeared.",
      ],
      lists: [
        {
          intro: "What you’ll notice:",
          items: [
            "thousands of URLs in the index for hundreds of useful ones",
            "canon flips in panels",
            "duplicate titles in the crawl",
            "weak indexing of new sections while filters are heavy",
          ],
        },
      ],
      links: [
        {
          label: "Server logs and crawl",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "How to find duplicates",
      level: 2,
      paras: [
        "Start with mirrors and protocol: do all variants 301 to one canon. Then crawl the site: group by title, H1, content hash; check canonical and status codes.",
        "In Yandex Webmaster and Google Search Console review indexed URL examples, duplicates, and the chosen canon. `site:domain.com` search and spot-checks of suspicious templates fill the picture.",
      ],
      lists: [
        {
          intro: "Mini audit order:",
          items: [
            "www / https / slash merge",
            "parameter sample (?sort, ?utm, session)",
            "catalog pagination and filters",
            "repeated title/H1",
            "subdomains and staging in the index",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "How to fix: canon, 301, noindex",
      level: 2,
      paras: [
        "Pick one preferred URL per entity. Internal links, sitemap, and ads should point to it. The rest — 301 (if not needed) or canonical / agreed noindex (if needed for UX).",
        "Don’t Disallow in robots.txt what you want cleaned with noindex without crawl — the bot may never see the directive. Don’t pile redirect chains. After fixes, recrawl and index monitoring are part of the job — not “click once and forget.”",
      ],
      lists: [
        {
          intro: "Merge tools:",
          items: [
            "301 between mirrors and outdated paths",
            "`rel=\"canonical\"` to the preferred document",
            "meta robots / X-Robots-Tag for utility and some parametric URLs",
            "URL parameter settings in webmaster panels",
            "CMS template fixes so new duplicates don’t spawn",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Merging everything to the homepage “just in case.” You lose landing meaning and dilute the home. Canon is the nearest meaningful URL of the same entity.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Deindexing / noindex",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "HTTPS and merging",
          href: "/en/blog/https-seo/",
        },
      ],
    },
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "redirekt",
    "paginatsiya",
    "tehnicheskiy-seo-audit",
    "url-adres",
  ],
};

/** ES overlay for dubli-stranits — same structure as RU JSON / EN. */
export const dubliStranitsEs: BlogPost = {
  slug: "dubli-stranits",
  title: "Páginas duplicadas: por qué duelen y cómo arreglarlas",
  date: "2021-01-11",
  category: "SEO",
  cover: "/images/blog/dubli-stranits/cover-es.webp",
  excerpt:
    "Qué cuenta como duplicado de página, exactos vs near-duplicates, de dónde salen en CMS y tiendas, qué hacen en la búsqueda y cómo encontrar y unificar URLs.",
  lead: [
    "Los duplicados son cuando el mismo sentido — o casi — está disponible en direcciones distintas. La búsqueda gasta crawl en copias, diluye señales y puede mostrar una versión que no consideras primaria.",
    "Abajo: qué cuenta como duplicado, tipos y causas habituales, riesgos SEO y un orden práctico: encontrar → elegir canónico → unificar o sacar del índice. Redirects y tools de desindexación están en artículos hermanos.",
  ],
  faq: [
    {
      q: "¿Un duplicado es siempre copy-paste completo de HTML?",
      a: "No. Un duplicado exacto es un documento casi idéntico. Un near-duplicate es un solapamiento fuerte de sentido/bloques en URLs distintas (a menudo filtros, paginación, fichas «parecidas»).",
    },
    {
      q: "¿En qué se diferencian los duplicados del plagio de otro sitio?",
      a: "Los duplicados internos son problema de tu dominio. El copy-paste externo es otra historia (unicidad, denuncias). Aquí va de higiene interna de URLs.",
    },
    {
      q: "¿Debo usar redirect o canonical?",
      a: "Si la URL vieja no debería abrirse — 301. Si ambas versiones hacen falta para usuarios pero solo una en el índice — suele ser `rel=\"canonical\"` más indexación cuidadosa. Ver el artículo de redirects.",
    },
    {
      q: "¿robots.txt arregla los duplicados?",
      a: "No como método principal. Disallow corta crawl pero no sustituye unificar y canonical. Para sacar del índice — noindex mientras el documento sea alcanzable, o 301.",
    },
    {
      q: "¿Las etiquetas UTM son peligrosas?",
      a: "Como URLs indexadas aparte — sí, si el bot las rastrea e indexa. Suele bastar canonical a la URL limpia + ajustes de parámetros en paneles de webmaster.",
    },
    {
      q: "¿Cómo estimar la escala rápido?",
      a: "Un crawler (lista title/H1/canonical), export de «páginas en búsqueda» en Webmaster/Search Console, búsqueda `site:` de titles repetidos. En catálogos grandes — prioriza por sección.",
    },
    {
      q: "¿Los duplicados significan un «filtro de duplicados» para siempre?",
      a: "Más a menudo es eficiencia perdida: crawl budget, canibalización, snippets flojos. Sanciones duras son otro tema; primero quita causas sistémicas de duplicados.",
    },
    {
      q: "¿Cuánto esperar tras unificar?",
      a: "El recrawl y los cambios de canónico en el SERP no son instantáneos: días–semanas, más en sitios grandes. Mira informes de indexación — no rankings de la noche a la mañana.",
    },
  ],
  sections: [
    {
      title: "Qué son las páginas duplicadas",
      level: 2,
      paras: [
        "En SEO un duplicado es varias URLs que a la búsqueda les parecen un documento o compiten por un intent sin valor claro en partirlas. Los usuarios pueden abrir ambas; el bot elige cuál es primaria.",
        "No lo confundas con estructura intencionada: productos, servicios y artículos distintos no son duplicados aunque la plantilla se parezca. El problema empieza cuando sentido y valor casi coinciden — y hay muchas direcciones.",
      ],
      lists: [
        {
          intro: "Señales:",
          items: [
            "un title/H1 en varias URLs",
            "el mismo copy principal con parámetros distintos",
            "www y sin-www / http y https ambos devuelven 200 sin unificar",
            "filtros y sorts generan combinaciones infinitas en el índice",
          ],
        },
      ],
      links: [
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
      ],
    },
    {
      title: "Exactos y near-duplicates",
      level: 2,
      paras: [
        "Exactos (o casi exactos) — el mismo documento en direcciones distintas: cambio de mayúsculas, trailing slash, session id, espejos. Near-duplicates — solapamiento de contenido: categoría «tal cual» y la misma con sorting, una ficha y una versión de impresión, intersecciones finas de filtros.",
        "Los near-duplicates son más taimados: el crawler ve páginas «distintas» mientras el valor para el usuario es casi cero. Esos inflan índices de tiendas online.",
      ],
      lists: [
        {
          intro: "Ejemplos exactos:",
          items: [
            "`example.com` y `www.example.com` sin 301",
            "http y https ambos en el índice",
            "URLs con `?utm_…` junto a la limpia",
            "una copia en `/index.php` y la URL bonita",
          ],
        },
        {
          intro: "Ejemplos near-duplicate:",
          items: [
            "sort y paginación como documentos «completos» aparte",
            "filtro color+talla vs color en el mismo listing",
            "una página de impresión con el mismo texto",
            "duplicados de tag/categoría de blog con las mismas colecciones",
          ],
        },
      ],
      links: [
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "De dónde salen los duplicados",
      level: 2,
      paras: [
        "Lo más habitual no es un «copywriter malvado» sino ajustes de CMS, tienda y marketing: parámetros de sesión, varios caminos a una ficha, generación de landings de ads, copias de test en subdominios, exports de catálogo con parámetros.",
        "Los near-duplicates de contenido aparecen cuando se estampa texto casi idéntico bajo cada keyword o cuando el autofill genera páginas finas. Entonces arreglas técnica de URL y política editorial.",
      ],
      lists: [
        {
          intro: "Fuentes típicas:",
          items: [
            "espejos y protocolos sin una sola unificación",
            "parámetros GET (sort, filtro, tags, sesión)",
            "varias plantillas para una entidad",
            "copias de sección tras un redesign sin 301",
            "enlaces externos a URLs «sucias» que se indexaron",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Arregla primero la causa sistémica (regla de canónico, redirects de espejo), o la limpieza manual de URLs no termina nunca.",
        },
      ],
      links: [
        {
          label: "Autofill del sitio",
          href: "/es/blog/avtonapolnenie-sayta/",
        },
      ],
    },
    {
      title: "Por qué los duplicados duelen al SEO",
      level: 2,
      paras: [
        "El crawl budget va a copias en lugar de URLs nuevas e importantes. Señales de enlaces y comportamiento se reparten entre versiones. Una dirección incómoda o desfasada puede quedarse pegada en el SERP.",
        "Dentro del sitio aparece canibalización: varias URLs pelean por una query y ninguna gana estabilidad. En una tienda también es ruido de analytics: goals y conversiones asistidas se emborronan.",
      ],
      lists: [
        {
          intro: "Qué notarás:",
          items: [
            "miles de URLs en el índice para cientos útiles",
            "giros de canónico en los paneles",
            "titles duplicados en el crawl",
            "indexación floja de secciones nuevas mientras los filtros pesan",
          ],
        },
      ],
      links: [
        {
          label: "Logs del servidor y crawl",
          href: "/es/blog/logi-servera/",
        },
      ],
    },
    {
      title: "Cómo encontrar duplicados",
      level: 2,
      paras: [
        "Empieza por espejos y protocolo: ¿todas las variantes hacen 301 a un canónico? Luego crawl del sitio: agrupa por title, H1, hash de contenido; revisa canonical y códigos de estado.",
        "En Yandex Webmaster y Google Search Console revisa ejemplos de URLs indexadas, duplicados y el canónico elegido. Búsqueda `site:domain.com` y checks puntuales de plantillas sospechosas completan el cuadro.",
      ],
      lists: [
        {
          intro: "Orden de mini-auditoría:",
          items: [
            "unificar www / https / slash",
            "muestra de parámetros (?sort, ?utm, sesión)",
            "paginación y filtros del catálogo",
            "title/H1 repetidos",
            "subdominios y staging en el índice",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Cómo arreglar: canónico, 301, noindex",
      level: 2,
      paras: [
        "Elige una URL preferida por entidad. Enlaces internos, sitemap y ads deben apuntar a ella. El resto — 301 (si no hace falta) o canonical / noindex acordado (si hace falta por UX).",
        "No hagas Disallow en robots.txt de lo que quieres limpiar con noindex sin crawl — el bot puede no ver nunca la directiva. No apiles cadenas de redirects. Tras los arreglos, recrawl y monitor de índice forman parte del trabajo — no «un clic y a olvidar».",
      ],
      lists: [
        {
          intro: "Herramientas de unificación:",
          items: [
            "301 entre espejos y paths desfasados",
            "`rel=\"canonical\"` al documento preferido",
            "meta robots / X-Robots-Tag para utilidad y algunas URLs paramétricas",
            "ajustes de parámetros de URL en paneles de webmaster",
            "arreglos de plantilla del CMS para que no nazcan duplicados nuevos",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Unificar todo a la homepage «por si acaso». Pierdes el sentido de la landing y diluyes la home. El canónico es la URL más cercana con sentido de la misma entidad.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "Desindexación / noindex",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "HTTPS y unificación",
          href: "/es/blog/https-seo/",
        },
      ],
    },
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "redirekt",
    "paginatsiya",
    "tehnicheskiy-seo-audit",
    "url-adres",
  ],
};

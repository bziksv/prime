import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-internet-magazin — same structure as RU JSON. */
export const klyuchiInternetMagazinEn: BlogPost = {
  slug: "klyuchi-internet-magazin",
  title: "Keywords for an online store: research and filtering",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/klyuchi-internet-magazin/cover-en.webp",
  excerpt:
    "How to build semantics for an online store: products and categories, keyword tools and junk filters, clusters for cards — without copying a competitor’s core “as is” or promising page one in a week.",
  lead: [
    "Store semantics are built around the catalog: categories, filters, cards, and informational articles. Demand and clusters first — then copy and structure, not the other way around.",
    "Below: where to get keywords, how to clean the list, and how to map queries to page types. General core theory is in the semantic-core article; this focuses on e-commerce.",
    "Keyword research and landing prep take weeks. Growing a commercial query core in the results is planned over 2–6 months after promotion starts.",
  ],
  faq: [
    {
      q: "Where to start: products or categories?",
      a: "From demand markers: what buyers search. Then decide whether you need a separate category, a filter, or cards are enough.",
    },
    {
      q: "How is this different from a regular keyword core?",
      a: "More SKUs, commercial tails (“buy,” “price,” “with delivery”), plus the risk of thin filter pages.",
    },
    {
      q: "Can you copy a competitor’s keywords?",
      a: "Studying competitors helps. Copying the whole core — no: different structure, assortment, and region.",
    },
    {
      q: "Is Wordstat required?",
      a: "For RU markets it is a handy start. Add search suggestions, Webmaster reports, ads data, and the store’s internal search. Elsewhere, planners and Search Console peers fill the same role.",
    },
    {
      q: "Do you need Key Collector?",
      a: "It speeds mass collection and cleanup. You can start manually; on large catalogs software saves time.",
    },
    {
      q: "What about zero frequency?",
      a: "Some long-tail still brings traffic. Do not spawn empty pages for every rare form.",
    },
    {
      q: "Are Ads and SEO keywords one list?",
      a: "They overlap. Ads lean harder on negatives and commercial intent; SEO on landings and content.",
    },
    {
      q: "When should product queries start ranking?",
      a: "After catalog prep — ranking growth is planned over months, not days.",
    },
  ],
  sections: [
    {
      title: "Why a store needs its own core",
      level: 2,
      paras: [
        "Without semantics the catalog grows “as purchasing prefers,” not as buyers search. Categories miss demand, cards lack tails, filters junk the index.",
        "The core links assortment to URLs: what to promote first, which texts to write, where to send ads.",
      ],
      lists: [
        {
          intro: "What a working store core gives:",
          items: [
            "priority of categories and brands",
            "briefs for cards and filters",
            "junk-query negatives",
            "a shared map with ads and SEO",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Where to find keywords",
      level: 2,
      paras: [
        "Markers: product names, categories, brands, synonyms, problems (“cheap,” “with installation”). Expand with Wordstat or a keyword planner, search suggestions, competitor exports as ideas — not as a final list.",
        "On-site search and ads reports often give live customer wording.",
      ],
      lists: [
        {
          intro: "Sources:",
          items: [
            "Yandex Wordstat (base and refined frequency)",
            "suggestions and “related queries”",
            "Key Collector / peers for mass work",
            "Webmaster: search queries",
            "internal search and support",
          ],
        },
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
      notes: [
        {
          title: "Tools",
          kind: "tip",
          text: "Service names and limits change. What matters is the process: marker → expand → clean → cluster → page.",
        },
      ],
    },
    {
      title: "Filtering junk",
      level: 2,
      paras: [
        "Drop off-target: another city, a competitor brand you do not carry, informational “what is” if you have no blog for it, non-purchase queries if the goal is sales now.",
        "Keep commercial markers and long-tail with a clear landing. Do not store in the core what you will not build a URL for.",
      ],
      lists: [
        {
          intro: "Typical store junk:",
          items: [
            "jobs and “download price list” without need",
            "competitor-brand queries outside your matrix",
            "kids/adult overlaps from the wrong niche",
            "typo duplicates with no traffic",
          ],
        },
      ],
    },
    {
      title: "Clusters: category, filter, card",
      level: 2,
      paras: [
        "High- and mid-frequency category queries go to listings. Modifiers (color, size, “with delivery”) go to filters or landings if demand and assortment support them. Exact models go to cards.",
        "Do not spawn a thousand nearly empty filter URLs for every checkbox. Facet indexing policy is a separate decision.",
      ],
      lists: [
        {
          intro: "Mapping rule:",
          items: [
            "one main intent — one priority page",
            "a card does not compete with a category for the same head term",
            "brand + product has its own section logic",
            "informational queries go to the blog, not the card",
          ],
        },
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to apply the core in work",
      level: 2,
      paras: [
        "The core is a living file: priority, frequency, URL, status “page exists / needed / in progress.” From it you write Title, H1, category copy, and briefs for writers.",
        "Ads take commercial clusters with negatives; SEO strengthens landings and snippets.",
      ],
      lists: [
        {
          intro: "Monthly ritual:",
          items: [
            "new products → new markers",
            "delisted items → redirects/cleanup",
            "Webmaster queries → into the core or negatives",
            "revisit top priorities by margin",
          ],
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Copying a competitor’s core, pages for every long-tail without stock, keyword stuffing on cards, expecting page one right after uploading Titles.",
        "Stronger than “secret parsers”: clean structure, stock, price/availability, decent photos, and commercial factors.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a 50k-row core with no clusters",
            "filters in the index with no content",
            "one text for all categories with a word swap",
            "bids only on head keywords with no long-tail matrix",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Collecting and first mapping a mid-size store core takes from a few days to a couple of weeks. Building rankings for competitive product queries is months of systematic work — typically planned over 2–6 months after promotion starts.",
        },
      ],
    },
  ],
};

/** ES overlay for klyuchi-internet-magazin — same structure as RU JSON / EN. */
export const klyuchiInternetMagazinEs: BlogPost = {
  slug: "klyuchi-internet-magazin",
  title: "Keywords para una tienda online: research y filtrado",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/klyuchi-internet-magazin/cover.webp",
  excerpt:
    "Cómo armar la semántica de una tienda online: productos y categorías, herramientas de keywords y filtros de basura, clusters para fichas — sin copiar el núcleo de un competidor «tal cual» ni prometer primera página en una semana.",
  lead: [
    "La semántica de una tienda se arma alrededor del catálogo: categorías, filtros, fichas y artículos informativos. Primero demanda y clusters — luego copy y estructura, no al revés.",
    "Abajo: de dónde sacar keywords, cómo limpiar la lista y cómo mapear consultas a tipos de página. La teoría general del núcleo está en el artículo del núcleo semántico; aquí el foco es e-commerce.",
    "La investigación de keywords y la preparación de landings llevan semanas. Crecer un núcleo comercial de consultas en los resultados se planifica a 2–6 meses tras el arranque de la promoción.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar: productos o categorías?",
      a: "Desde marcadores de demanda: qué buscan los compradores. Luego decides si hace falta una categoría aparte, un filtro o bastan las fichas.",
    },
    {
      q: "¿En qué se diferencia de un núcleo de keywords habitual?",
      a: "Más SKUs, colas comerciales («comprar», «precio», «con entrega»), más el riesgo de páginas de filtro finas.",
    },
    {
      q: "¿Se pueden copiar las keywords de un competidor?",
      a: "Estudiar competidores ayuda. Copiar todo el núcleo — no: estructura, surtido y región distintos.",
    },
    {
      q: "¿Es obligatorio Wordstat?",
      a: "Para mercados RU es un arranque útil. Suma sugerencias de búsqueda, informes de Webmaster, datos de ads y la búsqueda interna de la tienda. En otros sitios, planners y pares de Search Console cumplen el mismo rol.",
    },
    {
      q: "¿Hace falta Key Collector?",
      a: "Acelera la recogida masiva y la limpieza. Puedes empezar a mano; en catálogos grandes el software ahorra tiempo.",
    },
    {
      q: "¿Y la frecuencia cero?",
      a: "Parte del long-tail aún trae tráfico. No spawnees páginas vacías por cada forma rara.",
    },
    {
      q: "¿Ads y SEO son una sola lista de keywords?",
      a: "Se solapan. Ads aprieta más en negativos e intención comercial; SEO en landings y contenido.",
    },
    {
      q: "¿Cuándo deberían empezar a rankear las consultas de producto?",
      a: "Tras la preparación del catálogo — el crecimiento de rankings se planifica a lo largo de meses, no días.",
    },
  ],
  sections: [
    {
      title: "Por qué una tienda necesita su propio núcleo",
      level: 2,
      paras: [
        "Sin semántica el catálogo crece «como prefiere compras», no como buscan los compradores. Las categorías pierden demanda, las fichas carecen de colas, los filtros ensucian el índice.",
        "El núcleo une surtido con URLs: qué promover primero, qué textos escribir, a dónde mandar ads.",
      ],
      lists: [
        {
          intro: "Qué da un núcleo de tienda que funciona:",
          items: [
            "prioridad de categorías y marcas",
            "briefs para fichas y filtros",
            "negativos de consultas basura",
            "un mapa compartido con ads y SEO",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Dónde encontrar keywords",
      level: 2,
      paras: [
        "Marcadores: nombres de producto, categorías, marcas, sinónimos, problemas («barato», «con instalación»). Amplía con Wordstat o un keyword planner, sugerencias de búsqueda, exports de competidores como ideas — no como lista final.",
        "La búsqueda on-site y los informes de ads a menudo dan wording vivo del cliente.",
      ],
      lists: [
        {
          intro: "Fuentes:",
          items: [
            "Yandex Wordstat (frecuencia base y refinada)",
            "sugerencias y «consultas relacionadas»",
            "Key Collector / pares para trabajo masivo",
            "Webmaster: consultas de búsqueda",
            "búsqueda interna y soporte",
          ],
        },
      ],
      links: [
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
      notes: [
        {
          title: "Herramientas",
          kind: "tip",
          text: "Nombres de servicios y límites cambian. Lo que importa es el proceso: marcador → ampliar → limpiar → cluster → página.",
        },
      ],
    },
    {
      title: "Filtrar basura",
      level: 2,
      paras: [
        "Tira lo off-target: otra ciudad, una marca competidora que no llevas, informativo «qué es» si no tienes blog para ello, consultas sin compra si el objetivo son ventas ahora.",
        "Quédate con marcadores comerciales y long-tail con un landing claro. No guardes en el núcleo lo que no vas a construir como URL.",
      ],
      lists: [
        {
          intro: "Basura típica de tienda:",
          items: [
            "empleos y «descargar lista de precios» sin necesidad",
            "consultas de marca competidora fuera de tu matriz",
            "solapes kids/adult de un nicho equivocado",
            "duplicados de typo sin tráfico",
          ],
        },
      ],
    },
    {
      title: "Clusters: categoría, filtro, ficha",
      level: 2,
      paras: [
        "Las consultas de categoría de alta y media frecuencia van a listings. Los modificadores (color, talla, «con entrega») van a filtros o landings si la demanda y el surtido lo soportan. Los modelos exactos van a fichas.",
        "No spawnees mil URLs de filtro casi vacías por cada checkbox. La política de indexación de facets es una decisión aparte.",
      ],
      lists: [
        {
          intro: "Regla de mapeo:",
          items: [
            "una intención principal — una página prioritaria",
            "una ficha no compite con una categoría por el mismo head term",
            "marca + producto tiene su propia lógica de sección",
            "consultas informativas van al blog, no a la ficha",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Cómo aplicar el núcleo en el trabajo",
      level: 2,
      paras: [
        "El núcleo es un archivo vivo: prioridad, frecuencia, URL, estado «página existe / hace falta / en curso». De ahí escribes Title, H1, copy de categoría y briefs para writers.",
        "Ads toma clusters comerciales con negativos; SEO refuerza landings y snippets.",
      ],
      lists: [
        {
          intro: "Ritual mensual:",
          items: [
            "productos nuevos → marcadores nuevos",
            "ítems dados de baja → redirects/limpieza",
            "consultas de Webmaster → al núcleo o a negativos",
            "revisitar prioridades principales por margen",
          ],
        },
      ],
    },
    {
      title: "Qué evitar",
      level: 2,
      paras: [
        "Copiar el núcleo de un competidor, páginas por cada long-tail sin stock, stuffing de keywords en fichas, esperar primera página justo tras subir Titles.",
        "Más fuerte que «parsers secretos»: estructura limpia, stock, precio/disponibilidad, fotos decentes y factores comerciales.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "un núcleo de 50k filas sin clusters",
            "filtros en el índice sin contenido",
            "un texto para todas las categorías con un swap de palabra",
            "pujas solo en head keywords sin matriz de long-tail",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Recoger y mapear por primera vez el núcleo de una tienda mediana lleva de unos días a un par de semanas. Construir rankings para consultas de producto competitivas son meses de trabajo sistemático — típicamente planificados a 2–6 meses tras el arranque de la promoción.",
        },
      ],
    },
  ],
};

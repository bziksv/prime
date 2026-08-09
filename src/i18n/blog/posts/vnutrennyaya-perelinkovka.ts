import type { BlogPost } from "../../../data/blog";

/** EN overlay for vnutrennyaya-perelinkovka — same structure as RU JSON. */
export const vnutrennyayaPerelinkovkaEn: BlogPost = {
  slug: "vnutrennyaya-perelinkovka",
  title: "Internal linking: anchors, patterns, and practice",
  date: "2020-01-15",
  category: "SEO",
  cover: "/images/blog/vnutrennyaya-perelinkovka/cover-en.webp",
  excerpt:
    "Why internal linking matters, how keyword anchors differ from generic ones, automation vs. manual work, typical patterns for head/mid/long-tail keywords, and mistakes that hurt more than they help.",
  lead: [
    "Internal linking is links between pages on one site. For people, it’s a path to the right section and related materials; for search, it signals which URLs matter and how topics connect.",
    "Below: benefits, anchors, auto vs manual linking, patterns by keyword frequency, and a practical work order — without a cult of “magic link equity.” A clear section structure comes first; linking strengthens it, it doesn’t replace it.",
  ],
  faq: [
    {
      q: "How does linking differ from site structure?",
      a: "Structure is the hierarchy of sections and URLs. Linking is concrete links in the menu, breadcrumbs, body copy, and “related” blocks. See the SEO structure article.",
    },
    {
      q: "How many internal links are normal on a page?",
      a: "As many as help navigation. Dozens of similar anchors in one paragraph are spam risk. Menu + breadcrumbs + two to five contextual links usually suffice.",
    },
    {
      q: "Are exact keyword anchors required?",
      a: "No. A mix of brand, URL, “read more,” and occasional exact matches looks more natural than the same commercial anchor everywhere.",
    },
    {
      q: "Are auto plugins enough?",
      a: "For “related” blocks and breadcrumbs — yes as a base. Key commercial URLs are better linked by hand, by meaning.",
    },
    {
      q: "Should every outbound link be blocked from indexing?",
      a: "Not as dogma. Useful outbound links are fine; spammy and purely utility ones — nofollow/ugc by case. Don’t confuse that with internal hygiene.",
    },
    {
      q: "Do several links from one page to the same URL count?",
      a: "For passing signals, the first link in code/context usually matters most. Duplicating the same anchor in a pack adds little.",
    },
    {
      q: "Will linking put me on page one in a month?",
      a: "No. It’s an optimization layer. Site prep takes about a few weeks to a month; a meaningful share of the core set on page one is typically planned for 2–6 months after work starts.",
    },
    {
      q: "Where do I start on an old site?",
      a: "Scan internal links (crawler), map important URLs, fix broken and irrelevant ones, strengthen entries to commercial pages from related content.",
    },
  ],
  sections: [
    {
      title: "Why internal linking matters",
      level: 2,
      paras: [
        "It speeds crawling: the bot finds URLs via links, not only through the sitemap. Users reach a service, product page, or article faster and hit fewer dead ends — that supports behavioral signals without fake engagement.",
        "Links help distribute attention across important landing pages: categories, commercial pages, strong guides. For young sites this is one of the most available levers: external mentions are expensive, and you control internal links yourself.",
      ],
      lists: [
        {
          intro: "Effects with a sensible approach:",
          items: [
            "clearer navigation",
            "faster discovery of new URLs",
            "clearer topical clusters",
            "fewer “orphan” pages with no inbound links",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Keyword anchors and generic links",
      level: 2,
      paras: [
        "An anchor is the link text. A good anchor promises what’s on the target page and fits the paragraph. For a store that may be a category or model name; for an article — a related topic. “Related” and “you may like” blocks work if the list is relevant — not random.",
        "Generic anchors (“here,” “read more,” brand name, raw URL) reduce over-optimization of the anchor list. Keep balance: don’t turn the whole menu into the same commercial keyword.",
      ],
      lists: [
        {
          intro: "Anchor practice:",
          items: [
            "unique phrasing to important URLs",
            "relevance to surrounding text",
            "no spam of exact matches in every paragraph",
            "text links in the menu beat unlabeled image buttons",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Automatic and manual linking",
      level: 2,
      paras: [
        "Automation covers sitewide elements: menu, breadcrumbs, HTML sitemap, related blocks by tags or categories. Quickly builds a navigation frame on a CMS (including related/breadcrumb plugins). Downside — weak semantic control: “related” can lead past intent.",
        "Manual (contextual) linking — in-body links to related services, categories, and breakdowns. Slower, but more precise. On a new site, connect new materials with old ones after indexing; on an old site, strengthen commercial URLs from nearest-match documents.",
      ],
      lists: [
        {
          intro: "A working hybrid:",
          items: [
            "menu + breadcrumbs + sitemap as the base",
            "related blocks with category filters",
            "manual links to priority commercial pages",
            "a crawler for broken and orphan URLs",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Patterns by keyword type",
      level: 2,
      paras: [
        "Patterns are simplified models, not dogma. For head terms, people often strengthen the homepage and upper sections: lower pages link up the hierarchy. For mid-tail terms (typical store), second-level category weight: home → categories ← product pages/subsections. For long-tail, deeper landing pages matter more — linked from above and from neighboring content.",
        "Keyword map and URL hierarchy first, then the link pattern. Connecting different intents “for link equity” hurts: people and bots expect logic. Watch clicks and bounce — a click map shows which paths are alive.",
      ],
      lists: [
        {
          intro: "Pattern limits:",
          items: [
            "no universal “ring” magic",
            "link spam on a page hurts trust",
            "one strong contextual link beats five identical ones",
            "structure matters more than clever arrow geometry",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "A practical work order",
      level: 2,
      paras: [
        "1) List priority URLs from your keyword map. 2) Scan current internal links and broken ones. 3) Check: anchor and target page match in meaning. 4) Add contextual ties and fix the menu. 5) Recrawl and monitor index/traffic.",
        "Keep a simple table: URL → target keywords → inbound count → notes. That shows “light” pages with one or two inbounds and candidates to strengthen.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "the same anchor on every link",
            "links to irrelevant URLs",
            "ignoring broken links and redirect chains",
            "expecting page one from rearranging links alone",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Linking is a work layer — not a replacement for content and tech. Page one for a meaningful share of the core set typically builds over 2–6 months after promotion starts — not from rearranging links in week one.",
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "navigatsiya-sayta",
    "karta-sayta",
    "chto-takoe-ssylka",
    "screaming-frog",
    "semanticheskoe-yadro",
  ],
};

/** ES overlay for vnutrennyaya-perelinkovka — same structure as RU JSON / EN. */
export const vnutrennyayaPerelinkovkaEs: BlogPost = {
  slug: "vnutrennyaya-perelinkovka",
  title: "Enlazado interno: anclas, patrones y práctica",
  date: "2020-01-15",
  category: "SEO",
  cover: "/images/blog/vnutrennyaya-perelinkovka/cover.webp",
  excerpt:
    "Por qué importa el enlazado interno, cómo se diferencian las anclas de keyword de las genéricas, automatización vs. trabajo manual, patrones típicos para head/mid/long-tail y errores que restan más de lo que suman.",
  lead: [
    "El enlazado interno son los enlaces entre páginas de un mismo sitio. Para la gente, es un camino a la sección correcta y a materiales relacionados; para la búsqueda, señala qué URLs importan y cómo se conectan los temas.",
    "Abajo: beneficios, anclas, auto vs manual, patrones por frecuencia de keyword y un orden de trabajo práctico — sin culto al «equity mágico de enlaces». Primero va una estructura clara de secciones; el enlazado la refuerza, no la sustituye.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el enlazado de la estructura del sitio?",
      a: "La estructura es la jerarquía de secciones y URLs. El enlazado son enlaces concretos en menú, breadcrumbs, cuerpo del texto y bloques «relacionados». Ver el artículo de estructura SEO.",
    },
    {
      q: "¿Cuántos enlaces internos son normales en una página?",
      a: "Los que ayuden a navegar. Decenas de anclas parecidas en un párrafo son riesgo de spam. Menú + breadcrumbs + dos a cinco enlaces contextuales suelen bastar.",
    },
    {
      q: "¿Hacen falta anclas exactas de keyword?",
      a: "No. Una mezcla de marca, URL, «leer más» y matches exactos de vez en cuando se ve más natural que la misma ancla comercial en todas partes.",
    },
    {
      q: "¿Bastan los plugins automáticos?",
      a: "Para bloques «relacionados» y breadcrumbs — sí como base. Las URLs comerciales clave mejor enlazarlas a mano, por sentido.",
    },
    {
      q: "¿Hay que bloquear de la indexación todo enlace saliente?",
      a: "No como dogma. Los salientes útiles están bien; los spammy y puramente utilitarios — nofollow/ugc según el caso. No lo confundas con la higiene interna.",
    },
    {
      q: "¿Cuentan varios enlaces desde una página a la misma URL?",
      a: "Para pasar señales, suele importar más el primer enlace en código/contexto. Duplicar la misma ancla en un paquete aporta poco.",
    },
    {
      q: "¿El enlazado me pone en primera página en un mes?",
      a: "No. Es una capa de optimización. La prep del sitio lleva unas semanas a un mes; una cuota relevante del núcleo en primera página se planifica típicamente a 2–6 meses tras arrancar el trabajo.",
    },
    {
      q: "¿Por dónde empiezo en un sitio viejo?",
      a: "Escanea enlaces internos (crawler), mapea URLs importantes, arregla rotos e irrelevantes, refuerza entradas a páginas comerciales desde contenido afín.",
    },
  ],
  sections: [
    {
      title: "Por qué importa el enlazado interno",
      level: 2,
      paras: [
        "Acelera el crawl: el bot encuentra URLs por enlaces, no solo por el sitemap. Los usuarios llegan antes a un servicio, ficha de producto o artículo y chocan con menos callejones sin salida — eso sostiene señales de comportamiento sin engagement falso.",
        "Los enlaces ayudan a repartir atención entre landings importantes: categorías, páginas comerciales, guías fuertes. En sitios jóvenes es una de las palancas más a mano: las menciones externas salen caras, y los internos los controlas tú.",
      ],
      lists: [
        {
          intro: "Efectos con un enfoque sensato:",
          items: [
            "navegación más clara",
            "descubrimiento más rápido de URLs nuevas",
            "clusters temáticos más legibles",
            "menos páginas «huérfanas» sin enlaces entrantes",
          ],
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Anclas de keyword y enlaces genéricos",
      level: 2,
      paras: [
        "El ancla es el texto del enlace. Una buena ancla promete lo que hay en la página destino y encaja en el párrafo. En una tienda puede ser el nombre de categoría o modelo; en un artículo — un tema relacionado. Los bloques «relacionados» y «te puede gustar» funcionan si la lista es relevante — no al azar.",
        "Las anclas genéricas («aquí», «leer más», nombre de marca, URL cruda) bajan la sobreoptimización de la lista de anclas. Mantén el equilibrio: no conviertas todo el menú en la misma keyword comercial.",
      ],
      lists: [
        {
          intro: "Práctica de anclas:",
          items: [
            "redacción única hacia URLs importantes",
            "relevancia respecto al texto alrededor",
            "sin spam de matches exactos en cada párrafo",
            "enlaces de texto en el menú ganan a botones imagen sin etiqueta",
          ],
        },
      ],
      links: [
        {
          label: "Hipertexto",
          href: "/es/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Enlazado automático y manual",
      level: 2,
      paras: [
        "La automatización cubre elementos de todo el sitio: menú, breadcrumbs, sitemap HTML, bloques related por tags o categorías. Monta rápido un marco de navegación en un CMS (incluidos plugins de related/breadcrumb). El lado flojo — poco control semántico: lo «relacionado» puede llevar fuera del intent.",
        "El enlazado manual (contextual) — enlaces en el cuerpo a servicios, categorías y desgloses afines. Más lento, pero más preciso. En un sitio nuevo, conecta materiales nuevos con los viejos tras la indexación; en uno viejo, refuerza URLs comerciales desde documentos del match más cercano.",
      ],
      lists: [
        {
          intro: "Un híbrido que funciona:",
          items: [
            "menú + breadcrumbs + sitemap como base",
            "bloques related con filtros de categoría",
            "enlaces manuales a páginas comerciales prioritarias",
            "un crawler para URLs rotas y huérfanas",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap XML",
          href: "/es/blog/karta-sayta/",
        },
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Patrones por tipo de keyword",
      level: 2,
      paras: [
        "Los patrones son modelos simplificados, no dogma. Para términos head, a menudo se refuerzan la homepage y secciones altas: las páginas de abajo enlazan hacia arriba en la jerarquía. Para mid-tail (tienda típica), peso en categorías de segundo nivel: home → categorías ← fichas/subsecciones. Para long-tail, importan más landings profundas — enlazadas desde arriba y desde contenido vecino.",
        "Primero mapa de keywords y jerarquía de URLs, luego el patrón de enlaces. Conectar intents distintos «por equity» duele: gente y bots esperan lógica. Mira clics y bounce — un mapa de clics muestra qué caminos están vivos.",
      ],
      lists: [
        {
          intro: "Límites del patrón:",
          items: [
            "no hay magia universal de «anillo»",
            "el spam de enlaces en una página resta confianza",
            "un enlace contextual fuerte gana a cinco idénticos",
            "la estructura pesa más que la geometría ingeniosa de flechas",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Promoción de ecommerce",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Un orden de trabajo práctico",
      level: 2,
      paras: [
        "1) Lista URLs prioritarias desde tu mapa de keywords. 2) Escanea enlaces internos actuales y los rotos. 3) Comprueba: ancla y página destino coinciden en sentido. 4) Añade lazos contextuales y arregla el menú. 5) Recrawl y monitoriza índice/tráfico.",
        "Guarda una tabla simple: URL → keywords objetivo → conteo entrante → notas. Así se ven páginas «ligeras» con uno o dos inbounds y candidatas a reforzar.",
      ],
      lists: [
        {
          intro: "Errores habituales:",
          items: [
            "la misma ancla en cada enlace",
            "enlaces a URLs irrelevantes",
            "ignorar enlaces rotos y cadenas de redirects",
            "esperar primera página solo reordenando enlaces",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "El enlazado es una capa de trabajo — no sustituye contenido ni técnica. La primera página para una cuota relevante del núcleo suele construirse en 2–6 meses tras arrancar la promoción — no de reordenar enlaces en la semana uno.",
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "navigatsiya-sayta",
    "karta-sayta",
    "chto-takoe-ssylka",
    "screaming-frog",
    "semanticheskoe-yadro",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for tochki-vhoda — same structure as RU JSON. */
export const tochkiVhodaEn: BlogPost = {
  slug: "tochki-vhoda",
  title: "Competitor entry points: how to find them and why they matter",
  date: "2020-01-20",
  category: "SEO",
  cover: "/images/blog/tochki-vhoda/cover-en.webp",
  excerpt:
    "What an entry point is, why to study competitors’ search landings, how to export queries and expand your keyword core — without copying someone else’s site.",
  lead: [
    "An entry point is the page where a person most often starts a visit: from search, ads, a bookmark, or an external link. Competitors’ URLs show which topics and formats actually capture demand.",
    "Below: why to pull entry points, what to gather before analysis, how to export relevant queries, and a simple way to find competing sites. The goal is ideas for your landings and keyword core — not blind copying.",
  ],
  faq: [
    {
      q: "Is the entry point always the homepage?",
      a: "Often yes for brand and direct visits. From organic search, categories, articles, and product cards for a specific intent more often lead.",
    },
    {
      q: "How is this different from general competitor analysis?",
      a: "General analysis covers traffic, channels, and visibility. Here the focus is specific landing URLs and the queries that feed them. See also the competitor analysis article.",
    },
    {
      q: "Can you learn exact entry points without their analytics?",
      a: "Exactly — no. Estimates come from visibility tools, keyword exports by URL, and manually reviewing page-one results.",
    },
    {
      q: "Why export keywords from other people’s pages?",
      a: "To expand semantics and see which intent a strong landing closes. Then you write your own page better — with your offer and proof.",
    },
    {
      q: "Should you copy a competitor’s structure one-to-one?",
      a: "No. Take hypotheses: topic, format, trust blocks. Copy-pasting content and templates is a risk and a weak result.",
    },
    {
      q: "Do search operators help?",
      a: "Yes as a quick slice: site:, intitle:, checking sections. For scale — a crawler and SEO visibility tools.",
    },
    {
      q: "Will this speed up page-one results?",
      a: "It speeds understanding where to put effort. Rankings themselves come after work and time: prep about a month; core share in page-one visibility is planned over 2–6 months.",
    },
    {
      q: "What about your own entry points?",
      a: "In Metrica / Analytics watch organic landing pages: strengthen the strongest, fix bounce, do not spawn duplicates for the same intent.",
    },
  ],
  sections: [
    {
      title: "What an entry point is",
      level: 2,
      paras: [
        "An entry point (EP) is the HTML page a user hits first in a session. Sources differ: search results, ads, social, email, external link, direct visit. For SEO, organic landings matter more: they show which URLs search treats as the answer to demand.",
        "On your site, EPs show up in analytics (entry / landing pages). For a competitor — via visibility estimates, leading URLs in SEO tools, and manual results review on the niche core.",
      ],
      lists: [
        {
          intro: "Typical EPs:",
          items: [
            "homepage",
            "category / service",
            "product card",
            "article or guide for an informational intent",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Why study competitor EPs",
      level: 2,
      paras: [
        "Strong entry pages hint which content and offer keep people from the results: structure, proof, speed, query match. You transfer principles to your URLs — not someone else’s copy.",
        "Second goal — priorities: competitors invest in pages with better return. Third — semantics: from each strong landing you can pull a query cluster and close gaps in your core. Separately, EPs show where outreach or ads make more sense (pages with live traffic).",
      ],
      lists: [
        {
          intro: "What to log per EP:",
          items: [
            "URL and page type",
            "sample queries / intent",
            "strong blocks (prices, cases, FAQ, calculator)",
            "weaknesses (fluff, slow load, thin copy)",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "What to gather before the search",
      level: 2,
      paras: [
        "You need a draft of your own core (at least niche head and mid terms) and a results slice on them: who sits on page one, which URLs repeat. Without a query list, “finding competitors” becomes a random set of domains.",
        "Visibility tools automate page and keyword exports; a free quota often covers a pilot. Add manual results review and operators — less blind faith in one tool number.",
      ],
      lists: [
        {
          intro: "Data minimum:",
          items: [
            "20–100 priority queries",
            "screenshot or export of page-one results for them",
            "a list of candidate domains",
            "for each — 3–10 strong URLs",
          ],
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
        {
          label: "SEO software",
          href: "/en/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "Exporting keywords from landings",
      level: 2,
      paras: [
        "Pages that hold steady page-one visibility usually keep a coherent set of phrasing for one intent. An export of “queries → URL” shows what feeds the entry point: commercial, informational, or mixed demand.",
        "Add keywords to the core only after clustering: one landing — one main intent. Otherwise you get cannibalization and duplicate meanings on your site.",
      ],
      lists: [
        {
          intro: "How to use the export:",
          items: [
            "filter junk and irrelevance",
            "group by intent",
            "compare with current URLs",
            "assign tasks for new or stronger pages",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "An algorithm for finding competitors by visibility",
      level: 2,
      paras: [
        "Practical scheme: take a leader on important head terms → export keywords where they rank on page one → collect domains that most often overlap them in the results → score overlap share and rank “real” search competitors — not “a similar-looking site.”",
        "Then for the leading three to five domains pull a list of strong EPs and review content. In parallel mark your own organic entry points in analytics — compare drops and gaps.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "niche-core leader",
            "export of their visibility",
            "domain registry from overlaps",
            "scoring by % query overlap",
            "EP review and your landing plan",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "An EP map is a research stage. Page prep takes about weeks to a month; growing core visibility is planned over 2–6 months after work starts.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
      ],
    },
    {
      title: "How not to turn analysis into copying",
      level: 2,
      paras: [
        "A good EP review gives hypotheses: which format closes intent, which blocks lower bounce, which queries you lack. A bad review — copy-paste of H1s and someone else’s paragraphs.",
        "Lock the outcome in tasks: new URLs, title fixes, stronger offer, internal links. Over weeks watch your landing pages and leads — not someone else’s pretty ranking screenshots.",
      ],
      lists: [
        {
          intro: "Checklist after analysis:",
          items: [
            "table: competitor → EP → intent",
            "gaps in your core turned into tasks",
            "no new duplicates for the same demand",
            "KPIs: traffic and leads from strengthened landings",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Why pages aren’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "operatory-poiska",
    "programmy-seo",
    "seo-struktura-sayta",
    "samostoyatelnoe-seo",
  ],
};
/** ES overlay for tochki-vhoda — same structure as RU JSON / EN. */
export const tochkiVhodaEs: BlogPost = {
  slug: "tochki-vhoda",
  title: "Puntos de entrada del competidor: cómo encontrarlos y por qué importan",
  date: "2020-01-20",
  category: "SEO",
  cover: "/images/blog/tochki-vhoda/cover-es.webp",
  excerpt:
    "Qué es un punto de entrada, por qué estudiar las landings de búsqueda de los competidores, cómo exportar consultas y ampliar el núcleo de keywords — sin copiar el sitio ajeno.",
  lead: [
    "Un punto de entrada es la página donde una persona suele empezar la visita: desde búsqueda, anuncios, un favorito o un enlace externo. Las URLs de los competidores muestran qué temas y formatos capturan demanda de verdad.",
    "Abajo: por qué sacar puntos de entrada, qué reunir antes del análisis, cómo exportar consultas relevantes y una forma simple de encontrar sitios competidores. El objetivo son ideas para tus landings y el núcleo de keywords — no copiar a ciegas.",
  ],
  faq: [
    {
      q: "¿El punto de entrada es siempre la homepage?",
      a: "A menudo sí para marca y visitas directas. Desde búsqueda orgánica suelen liderar categorías, artículos y fichas de producto para un intent concreto.",
    },
    {
      q: "¿En qué se diferencia del análisis general de competidores?",
      a: "El análisis general cubre tráfico, canales y visibilidad. Aquí el foco son URLs de landing concretas y las consultas que las alimentan. Ver también el artículo de análisis de competidores.",
    },
    {
      q: "¿Se pueden saber puntos de entrada exactos sin su analítica?",
      a: "Exactos — no. Las estimaciones vienen de herramientas de visibilidad, exports de keywords por URL y revisión manual de resultados de primera página.",
    },
    {
      q: "¿Por qué exportar keywords de páginas ajenas?",
      a: "Para ampliar semántica y ver qué intent cierra una landing fuerte. Luego escribes tu propia página mejor — con tu oferta y prueba.",
    },
    {
      q: "¿Debes copiar la estructura del competidor uno a uno?",
      a: "No. Toma hipótesis: tema, formato, bloques de confianza. Copiar contenido y plantillas es un riesgo y un resultado flojo.",
    },
    {
      q: "¿Ayudan los operadores de búsqueda?",
      a: "Sí como corte rápido: site:, intitle:, revisar secciones. A escala — un crawler y herramientas SEO de visibilidad.",
    },
    {
      q: "¿Esto acelera resultados de primera página?",
      a: "Acelera entender dónde poner esfuerzo. Los rankings en sí llegan tras trabajo y tiempo: preparación alrededor de un mes; la cuota del núcleo en visibilidad de primera página se planifica a 2–6 meses.",
    },
    {
      q: "¿Y tus propios puntos de entrada?",
      a: "En Metrica / Analytics mira landing pages orgánicas: refuerza las más fuertes, arregla rebote, no generes duplicados para el mismo intent.",
    },
  ],
  sections: [
    {
      title: "Qué es un punto de entrada",
      level: 2,
      paras: [
        "Un punto de entrada (EP) es la página HTML a la que llega primero el usuario en una sesión. Las fuentes difieren: resultados de búsqueda, anuncios, redes, email, enlace externo, visita directa. Para SEO importan más las landings orgánicas: muestran qué URLs trata la búsqueda como respuesta a la demanda.",
        "En tu sitio, los EP aparecen en analítica (entry / landing pages). Para un competidor — vía estimaciones de visibilidad, URLs líderes en herramientas SEO y revisión manual de resultados sobre el núcleo del nicho.",
      ],
      lists: [
        {
          intro: "EP típicos:",
          items: [
            "homepage",
            "categoría / servicio",
            "ficha de producto",
            "artículo o guía para un intent informativo",
          ],
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
        {
          label: "Goals en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Por qué estudiar los EP del competidor",
      level: 2,
      paras: [
        "Las páginas de entrada fuertes insinúan qué contenido y oferta retienen a la gente desde los resultados: estructura, prueba, velocidad, encaje con la consulta. Trasladas principios a tus URLs — no el copy ajeno.",
        "Segundo objetivo — prioridades: los competidores invierten en páginas con mejor retorno. Tercero — semántica: de cada landing fuerte puedes sacar un cluster de consultas y cerrar huecos en tu núcleo. Aparte, los EP muestran dónde el outreach o los anuncios tienen más sentido (páginas con tráfico vivo).",
      ],
      lists: [
        {
          intro: "Qué registrar por EP:",
          items: [
            "URL y tipo de página",
            "muestra de consultas / intent",
            "bloques fuertes (precios, casos, FAQ, calculadora)",
            "debilidades (relleno, carga lenta, copy fino)",
          ],
        },
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
      ],
    },
    {
      title: "Qué reunir antes de la búsqueda",
      level: 2,
      paras: [
        "Necesitas un borrador de tu propio núcleo (al menos head y mid terms del nicho) y un corte de resultados sobre ellos: quién está en primera página, qué URLs se repiten. Sin lista de consultas, «encontrar competidores» se vuelve un set aleatorio de dominios.",
        "Las herramientas de visibilidad automatizan exports de páginas y keywords; una cuota gratis a menudo cubre un piloto. Suma revisión manual de resultados y operadores — menos fe ciega en un número de una sola herramienta.",
      ],
      lists: [
        {
          intro: "Mínimo de datos:",
          items: [
            "20–100 consultas prioritarias",
            "screenshot o export de resultados de primera página para ellas",
            "una lista de dominios candidatos",
            "por cada uno — 3–10 URLs fuertes",
          ],
        },
      ],
      links: [
        {
          label: "Operadores de búsqueda",
          href: "/es/blog/operatory-poiska/",
        },
        {
          label: "Software SEO",
          href: "/es/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "Exportar keywords desde landings",
      level: 2,
      paras: [
        "Las páginas que sostienen visibilidad estable en primera página suelen guardar un set coherente de phrasing para un intent. Un export de «consultas → URL» muestra qué alimenta el punto de entrada: demanda comercial, informativa o mixta.",
        "Añade keywords al núcleo solo tras clustering: una landing — un intent principal. Si no, tendrás canibalización y significados duplicados en tu sitio.",
      ],
      lists: [
        {
          intro: "Cómo usar el export:",
          items: [
            "filtrar basura e irrelevancia",
            "agrupar por intent",
            "comparar con las URLs actuales",
            "asignar tareas para páginas nuevas o más fuertes",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Contenido del sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Un algoritmo para encontrar competidores por visibilidad",
      level: 2,
      paras: [
        "Esquema práctico: toma un líder en head terms importantes → exporta keywords donde rankean en primera página → recoge dominios que más a menudo se solapan con ellos en los resultados → puntúa la cuota de solape y rankea competidores de búsqueda «reales» — no «un sitio de aspecto parecido».",
        "Luego, para los tres a cinco dominios líderes, saca una lista de EP fuertes y revisa el contenido. En paralelo marca tus propios puntos de entrada orgánicos en analítica — compara caídas y huecos.",
      ],
      lists: [
        {
          intro: "Pasos:",
          items: [
            "líder del núcleo del nicho",
            "export de su visibilidad",
            "registro de dominios por solapes",
            "scoring por % de solape de consultas",
            "revisión de EP y plan de tus landings",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Un mapa de EP es una etapa de research. La preparación de páginas lleva de semanas a un mes; crecer la visibilidad del núcleo se planifica a 2–6 meses tras el inicio del trabajo.",
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Náusea del texto",
          href: "/es/blog/toshnota-teksta/",
        },
      ],
    },
    {
      title: "Cómo no convertir el análisis en copia",
      level: 2,
      paras: [
        "Una buena revisión de EP da hipótesis: qué formato cierra el intent, qué bloques bajan el rebote, qué consultas te faltan. Una mala revisión — copy-paste de H1s y párrafos ajenos.",
        "Fija el resultado en tareas: URLs nuevas, fixes de title, oferta más fuerte, enlaces internos. Durante semanas mira tus landing pages y leads — no screenshots bonitos de rankings ajenos.",
      ],
      lists: [
        {
          intro: "Checklist tras el análisis:",
          items: [
            "tabla: competidor → EP → intent",
            "huecos de tu núcleo convertidos en tareas",
            "sin duplicados nuevos para la misma demanda",
            "KPIs: tráfico y leads desde landings reforzadas",
          ],
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Por qué las páginas no rankean",
          href: "/es/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "operatory-poiska",
    "programmy-seo",
    "seo-struktura-sayta",
    "samostoyatelnoe-seo",
  ],
};

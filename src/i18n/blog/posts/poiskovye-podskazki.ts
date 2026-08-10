import type { BlogPost } from "../../../data/blog";

/** EN overlay for poiskovye-podskazki — same structure as RU JSON. */
export const poiskovyePodskazkiEn: BlogPost = {
  slug: "poiskovye-podskazki",
  title: "Search suggestions: what they are and how to use them in SEO",
  date: "2018-02-19",
  category: "SEO",
  cover: "/images/blog/poiskovye-podskazki/cover-en.webp",
  excerpt:
    "How Yandex and Google suggestions form, how they help semantics and content, why you can’t “get into suggest” by faking queries, and how to collect ideas without spam.",
  lead: [
    "Search suggestions (autocomplete) are query variants that appear as you type in the search box. They reflect popular and fresh wording, region, and sometimes personal history.",
    "For SEO, suggestions are a source of ideas for the core and headlines — not a page-one button. Below: how they work, how Yandex and Google differ, and how to use them without query inflation.",
  ],
  faq: [
    {
      q: "Where do suggestions come from?",
      a: "From real user queries after filters (profanity, banned topics, and similar), with frequency, region, language, and trends.",
    },
    {
      q: "Are suggestions the same as a keyword set?",
      a: "No — they’re an extra wording source. The core is built systematically (Wordstat, accounts, exports) and clustered under URLs.",
    },
    {
      q: "Can I buy a place in suggestions?",
      a: "Query inflation is a risk and usually short-lived. Engines cut manipulation; bet on brand awareness and demand.",
    },
    {
      q: "Do suggestions help page ranking?",
      a: "Indirectly: you cover real wording with content. Being “in suggest” alone doesn’t put a URL on page one.",
    },
    {
      q: "Do Yandex and Google differ?",
      a: "Yes: update cadence, personalization, and sometimes answers or weather right in suggest. Collect ideas in both if both channels matter.",
    },
    {
      q: "How do I remove a suggestion in my Chrome?",
      a: "That’s browser history: highlight the item and Shift+Delete (Windows) or the macOS equivalent. Unrelated to site SEO.",
    },
    {
      q: "Do I need suggest parsers?",
      a: "Optional for volume. At the start, manual marker typing plus Wordstat or account suggestions is enough.",
    },
    {
      q: "Is brand in suggestions an SEO goal?",
      a: "More a result of demand and marketing. SEO covers pages for wording that already exists.",
    },
  ],
  sections: [
    {
      title: "What search suggestions are",
      level: 2,
      paras: [
        "Suggest offers continuations and refinements from the first characters. Users formulate the job easier; marketers see how people really search the topic.",
        "They appeared in Google (2000s), then in Yandex. Today it’s familiar search UX and a source of live wording for semantics.",
      ],
      lists: [
        {
          intro: "Formation is influenced by:",
          items: [
            "query frequency",
            "region and language",
            "freshness / trends",
            "personal history (if on)",
            "search policy filters",
          ],
        },
      ],
    },
    {
      title: "Yandex and Google: nuances",
      level: 2,
      paras: [
        "Yandex suggest often updates faster on news and hot topics; there can be quick answers, weather, brand jumps to a site.",
        "Google has its own expansion and synonym logic, and its own rules for hiding toxic suggestions. Don’t treat update cadence from old reviews as law — watch the live SERP.",
      ],
      lists: [
        {
          intro: "Collection practice:",
          items: [
            "private mode + needed region",
            "service/product markers by letter",
            "brand and competitors separately",
            "log into the core table",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Role in semantics and content",
      level: 2,
      paras: [
        "Suggestions hint at tails, refinements, and related questions: “price,” “reviews,” “DIY,” geo. Put them in the core, cluster, and cover with landings or FAQ blocks — not a separate “page per letter.”",
        "If the answer is already in suggest (a fact, weather), some info traffic may never reach the site — for commerce, landings under “buy / order / price” demand matter more.",
      ],
      lists: [
        {
          intro: "How to apply:",
          items: [
            "enrich clusters with suggest wording",
            "strengthen H2/FAQ with real questions",
            "don’t spawn duplicate URLs per suggestion",
            "match intent to the SERP",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
    {
      title: "“Getting into suggestions” without inflation",
      level: 2,
      paras: [
        "A brand or product appearing in suggest follows real demand — not a separate SEO button. Higher awareness and natural query frequency raise the odds.",
        "Artificial query inflation is a bad idea: short effect and risk of devaluing behavioral signals. The working path is content, ads, PR, and service people search by name themselves.",
      ],
      notes: [
        {
          title: "Not practiced here",
          kind: "tip",
          text: "We don’t describe or recommend suggest-inflation schemes. If you see a “guaranteed place in suggestions” pitch — that’s a red flag.",
        },
      ],
      lists: [
        {
          intro: "Clean demand levers:",
          items: [
            "useful content and social",
            "offline/online brand mentions",
            "stable product quality",
            "ads with a memorable name",
          ],
        },
      ],
    },
    {
      title: "Collection tools",
      level: 2,
      paras: [
        "Manual marker typing plus Wordstat or planners is the base. Suggest parsers (and Ubersuggest/Keyword Tool-class tools) speed volume but don’t replace cleanup and clustering.",
        "Keep a “suggest” source column in the table: easier not to mix Wordstat frequency with “just saw it in autocomplete.”",
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
        {
          label: "Excel and Google Sheets for SEO",
          href: "/en/blog/excel-google-tablitsy/",
        },
      ],
    },
    {
      title: "What not to confuse with SEO effect",
      level: 2,
      paras: [
        "Clearing suggestions in your own browser is local history, not the site’s SERP.",
        "Suggest doesn’t replace tech, intent, and content. Site prep takes weeks; core rank buildup is planned over 2–6 months. Suggestions only help hit demand language more precisely.",
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Expanding the core from suggest speeds wording coverage, but doesn’t guarantee page one after adding an H2.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "user-intent",
    "chastotnost-zaprosov",
    "seo-yandex-google",
    "excel-google-tablitsy",
    "golosovoy-poisk",
  ],
};

/** ES overlay for poiskovye-podskazki — same structure as RU JSON / EN. */
export const poiskovyePodskazkiEs: BlogPost = {
  slug: "poiskovye-podskazki",
  title: "Sugerencias de búsqueda: qué son y cómo usarlas en SEO",
  date: "2018-02-19",
  category: "SEO",
  cover: "/images/blog/poiskovye-podskazki/cover-es.webp",
  excerpt:
    "Cómo se forman las sugerencias de Yandex y Google, cómo ayudan a la semántica y al contenido, por qué no se puede «entrar en suggest» falsificando consultas, y cómo reunir ideas sin spam.",
  lead: [
    "Las sugerencias de búsqueda (autocomplete) son variantes de consulta que aparecen al escribir en el cuadro de búsqueda. Reflejan wording popular y fresco, región y a veces historial personal.",
    "Para SEO, las sugerencias son una fuente de ideas para el núcleo y los titulares — no un botón de primera página. Abajo: cómo funcionan, en qué se diferencian Yandex y Google, y cómo usarlas sin inflación de consultas.",
  ],
  faq: [
    {
      q: "¿De dónde salen las sugerencias?",
      a: "De consultas reales de usuarios tras filtros (insultos, temas prohibidos y similares), con frecuencia, región, idioma y tendencias.",
    },
    {
      q: "¿Las sugerencias son lo mismo que un set de keywords?",
      a: "No — son una fuente extra de wording. El núcleo se arma de forma sistemática (Wordstat, cuentas, exports) y se agrupa en clusters bajo URLs.",
    },
    {
      q: "¿Puedo comprar un sitio en las sugerencias?",
      a: "La inflación de consultas es un riesgo y suele ser de corta vida. Los motores cortan la manipulación; apuesta por awareness de marca y demanda.",
    },
    {
      q: "¿Las sugerencias ayudan al ranking de la página?",
      a: "Indirectamente: cubres wording real con contenido. Estar «en suggest» solo no pone una URL en primera página.",
    },
    {
      q: "¿Yandex y Google difieren?",
      a: "Sí: cadencia de updates, personalización y a veces respuestas o el tiempo justo en suggest. Reúne ideas en ambos si ambos canales importan.",
    },
    {
      q: "¿Cómo quito una sugerencia en mi Chrome?",
      a: "Eso es historial del navegador: resalta el ítem y Shift+Delete (Windows) o el equivalente en macOS. No tiene que ver con el SEO del sitio.",
    },
    {
      q: "¿Hacen falta parsers de suggest?",
      a: "Opcional para volumen. Al inicio basta escribir marcadores a mano más Wordstat o sugerencias de la cuenta.",
    },
    {
      q: "¿La marca en sugerencias es un objetivo SEO?",
      a: "Más un resultado de demanda y marketing. El SEO cubre páginas para wording que ya existe.",
    },
  ],
  sections: [
    {
      title: "Qué son las sugerencias de búsqueda",
      level: 2,
      paras: [
        "Suggest ofrece continuaciones y refinamientos desde los primeros caracteres. Los usuarios formulan el trabajo más fácil; los marketers ven cómo la gente busca de verdad el tema.",
        "Aparecieron en Google (años 2000), luego en Yandex. Hoy es UX familiar de búsqueda y una fuente de wording vivo para la semántica.",
      ],
      lists: [
        {
          intro: "La formación se ve influida por:",
          items: [
            "frecuencia de la consulta",
            "región e idioma",
            "frescura / tendencias",
            "historial personal (si está on)",
            "filtros de política de búsqueda",
          ],
        },
      ],
    },
    {
      title: "Yandex y Google: matices",
      level: 2,
      paras: [
        "El suggest de Yandex a menudo se actualiza más rápido en noticias y temas calientes; puede haber respuestas rápidas, el tiempo, saltos de marca a un sitio.",
        "Google tiene su propia lógica de expansión y sinónimos, y sus propias reglas para ocultar sugerencias tóxicas. No trates la cadencia de updates de reseñas viejas como ley — mira la SERP en vivo.",
      ],
      lists: [
        {
          intro: "Práctica de recogida:",
          items: [
            "modo privado + región necesaria",
            "marcadores de servicio/producto por letra",
            "marca y competidores por separado",
            "anota en la tabla del núcleo",
          ],
        },
      ],
      links: [
        {
          label: "SEO para Yandex y Google",
          href: "/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Rol en semántica y contenido",
      level: 2,
      paras: [
        "Las sugerencias apuntan a colas, refinamientos y preguntas relacionadas: «precio», «reseñas», «DIY», geo. Mételas en el núcleo, clustérizalas y cúbrelas con landings o bloques FAQ — no una «página por letra» aparte.",
        "Si la respuesta ya está en suggest (un hecho, el tiempo), parte del tráfico informativo puede no llegar al sitio — para comercio importan más landings bajo demanda de «comprar / pedir / precio».",
      ],
      lists: [
        {
          intro: "Cómo aplicar:",
          items: [
            "enriquecer clusters con wording de suggest",
            "reforzar H2/FAQ con preguntas reales",
            "no spawnear URLs duplicadas por sugerencia",
            "casar la intención con la SERP",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Intención del usuario",
          href: "/es/blog/user-intent/",
        },
      ],
    },
    {
      title: "«Entrar en sugerencias» sin inflación",
      level: 2,
      paras: [
        "Que una marca o producto aparezca en suggest sigue a la demanda real — no a un botón SEO aparte. Más awareness y frecuencia natural de consultas suben las odds.",
        "La inflación artificial de consultas es mala idea: efecto corto y riesgo de devaluar señales de comportamiento. El camino que funciona es contenido, ads, PR y un servicio que la gente busca por nombre sola.",
      ],
      notes: [
        {
          title: "Aquí no se practica",
          kind: "tip",
          text: "No describimos ni recomendamos esquemas de inflación de suggest. Si ves un pitch de «lugar garantizado en sugerencias» — eso es una bandera roja.",
        },
      ],
      lists: [
        {
          intro: "Palancas limpias de demanda:",
          items: [
            "contenido útil y redes",
            "menciones de marca offline/online",
            "calidad estable del producto",
            "ads con un nombre memorable",
          ],
        },
      ],
    },
    {
      title: "Herramientas de recogida",
      level: 2,
      paras: [
        "Escribir marcadores a mano más Wordstat o planners es la base. Los parsers de suggest (y herramientas tipo Ubersuggest/Keyword Tool) aceleran el volumen pero no sustituyen limpieza y clustering.",
        "Mantén una columna de fuente «suggest» en la tabla: más fácil no mezclar la frecuencia de Wordstat con «lo vi en autocomplete».",
      ],
      links: [
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
        {
          label: "Excel y Google Sheets para SEO",
          href: "/es/blog/excel-google-tablitsy/",
        },
      ],
    },
    {
      title: "Qué no confundir con efecto SEO",
      level: 2,
      paras: [
        "Borrar sugerencias en tu propio navegador es historial local, no la SERP del sitio.",
        "Suggest no sustituye técnica, intención y contenido. La preparación del sitio lleva semanas; el buildup de ranks del núcleo se planifica a 2–6 meses. Las sugerencias solo ayudan a acertar el lenguaje de la demanda con más precisión.",
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Ampliar el núcleo desde suggest acelera la cobertura de wording, pero no garantiza primera página tras añadir un H2.",
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "user-intent",
    "chastotnost-zaprosov",
    "seo-yandex-google",
    "excel-google-tablitsy",
    "golosovoy-poisk",
  ],
};

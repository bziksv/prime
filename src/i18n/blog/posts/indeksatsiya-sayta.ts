import type { BlogPost } from "../../../data/blog";

/** EN overlay for indeksatsiya-sayta — same structure as RU JSON. */
export const indeksatsiyaSaytaEn: BlogPost = {
  slug: "indeksatsiya-sayta",
  title: "What site indexing means",
  date: "2018-03-16",
  category: "SEO",
  cover: "/images/blog/indeksatsiya-sayta/cover-en.webp",
  excerpt:
    "How search engines crawl and add pages to the index: what affects getting into the database, robots and sitemap, Webmaster / Search Console, coverage checks — without 2010s social bookmarks or buying links “for indexing.”",
  lead: [
    "Indexing is when a bot crawls open URLs, parses the content, and puts (or updates) documents in the search database. Without an index a page almost never shows in organic results for queries.",
    "Below: how the process works, what a site needs to get found, and how to check status. Blocking from the index and robot log analysis are in related articles. We don’t recommend outdated social bookmarks or mass link buying just to get crawled.",
  ],
  faq: [
    {
      q: "Is indexing the same as page-one rankings?",
      a: "No. The index is entry into the database. Positions depend on relevance and competition.",
    },
    {
      q: "Does robots.txt “allow indexing”?",
      a: "User-agent: * without Disallow doesn’t block crawling. For indexing, URL availability, links, sitemap, and no accidental noindex matter more.",
    },
    {
      q: "Do I need to buy links to get indexed?",
      a: "Not as a required step. Adding the site to Webmaster/GSC, submitting a sitemap, and solid internal linking are enough. Buying for “speed” is risk and noise.",
    },
    {
      q: "How do I check that a page is indexed?",
      a: "The site: operator and coverage reports in Yandex Webmaster / Google Search Console — more reliable than third-party toolbars.",
    },
    {
      q: "Why isn’t part of the site indexed?",
      a: "noindex, Disallow, duplicates, thin content, bad response codes, weak discoverability, or crawl budget limits.",
    },
    {
      q: "Do social networks speed up indexing?",
      a: "They can bring visits and mentions, but they don’t replace Search Console and internal linking. Short redirect links are a weak signal for the bot.",
    },
    {
      q: "How is this different from blocking indexing?",
      a: "Here — how pages get into the database. There — when and how to keep them out on purpose.",
    },
  ],
  sections: [
    {
      title: "Index and crawl in plain words",
      level: 2,
      paras: [
        "The search database is a huge catalog of documents with addresses. A query doesn’t search the live internet — it searches this index.",
        "Bots (crawlers) follow links, fetch HTML and related resources, and pass data for processing. New and updated URLs enter the recrawl queue.",
        "Crawl depth and frequency depend on site quality, errors, crawl budget, and how you point to important URLs yourself.",
      ],
      links: [
        {
          label: "Server logs and bots",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Search engines",
          href: "/en/blog/poiskovye-sistemy/",
        },
      ],
    },
    {
      title: "What you need for the site to get indexed",
      level: 2,
      paras: [
        "Pages should return 200 (or a deliberate redirect), be available without mandatory login, and not be closed with noindex if the goal is organic.",
        "robots.txt mustn’t accidentally block needed sections. A sitemap helps discover URLs but doesn’t force junk into the index.",
        "Internal links and a normal structure beat external submission runs. Add the site to Yandex Webmaster and Google Search Console and submit the sitemap.",
      ],
      lists: [
        {
          intro: "A basic set:",
          items: [
            "reachable hosting and correct responses",
            "a sensible robots.txt",
            "sitemap in webmaster panels",
            "internal links to important URLs",
            "useful content without mass duplicates",
          ],
        },
      ],
      links: [
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What’s outdated and what to avoid",
      level: 2,
      paras: [
        "Social bookmarks, directory runs, and buying links “so the spider comes faster” are noisy 2010s habits. For indexing they don’t replace webmaster panels.",
        "Don’t confuse indexing with behavioral manipulation and link spam — different risks and different articles.",
        "If a page is indexed but doesn’t grow — look at relevance, tech, and competition, not “add to bookmarks again.”",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
      ],
    },
    {
      title: "How to check indexing",
      level: 2,
      paras: [
        "In Webmaster and Search Console look at coverage/pages: how many discovered, excluded, and why.",
        "A query like site:example.com/page gives a quick slice, but panels are more precise on exclusion reasons.",
        "Crawlers like Screaming Frog / Netpeak Spider help find noindex, broken responses, and internal-link gaps on your side — before blaming “search won’t take it.”",
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Time to index isn’t guaranteed. New sites and weak URLs wait longer. Don’t promise a client “indexing in N hours” without caveats.",
  },
  closing: [
    "Connect Webmaster and Search Console, submit a sitemap, and open one important page in the coverage report — so indexing stops being abstract and becomes a working URL status.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "logi-servera",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "screaming-frog",
    "poiskovye-sistemy",
  ],
};

/** ES overlay for indeksatsiya-sayta — same structure as RU JSON / EN. */
export const indeksatsiyaSaytaEs: BlogPost = {
  slug: "indeksatsiya-sayta",
  title: "Qué significa la indexación de un sitio",
  date: "2018-03-16",
  category: "SEO",
  cover: "/images/blog/indeksatsiya-sayta/cover.webp",
  excerpt:
    "Cómo los buscadores rastrean y meten páginas en el índice: qué afecta a entrar en la base, robots y sitemap, Webmaster / Search Console, checks de cobertura — sin social bookmarks de los 2010 ni compra de enlaces «para indexar».",
  lead: [
    "La indexación es cuando un bot rastrea URLs abiertas, parsea el contenido y mete (o actualiza) documentos en la base de búsqueda. Sin índice, una página casi nunca aparece en resultados orgánicos por queries.",
    "Abajo: cómo funciona el proceso, qué necesita un sitio para que lo encuentren y cómo comprobar el status. El bloqueo al índice y el análisis de logs de robots están en artículos relacionados. No recomendamos social bookmarks desfasados ni compra masiva de enlaces solo para que te rastreen.",
  ],
  faq: [
    {
      q: "¿Indexación es lo mismo que rankings en primera página?",
      a: "No. El índice es la entrada a la base. Las posiciones dependen de relevancia y competencia.",
    },
    {
      q: "¿robots.txt «permite indexar»?",
      a: "User-agent: * sin Disallow no bloquea el crawl. Para indexar importan más la disponibilidad de la URL, enlaces, sitemap y que no haya noindex accidental.",
    },
    {
      q: "¿Debo comprar enlaces para que me indexen?",
      a: "No como paso obligatorio. Añadir el sitio a Webmaster/GSC, enviar un sitemap y un enlazado interno sólido bastan. Comprar por «velocidad» es riesgo y ruido.",
    },
    {
      q: "¿Cómo compruebo que una página está indexada?",
      a: "El operador site: e informes de cobertura en Yandex Webmaster / Google Search Console — más fiables que toolbars de terceros.",
    },
    {
      q: "¿Por qué parte del sitio no está indexada?",
      a: "noindex, Disallow, duplicados, contenido fino, códigos de respuesta malos, poca discoverability o límites de crawl budget.",
    },
    {
      q: "¿Las redes sociales aceleran la indexación?",
      a: "Pueden traer visitas y menciones, pero no sustituyen Search Console ni el enlazado interno. Enlaces cortos de redirect son una señal floja para el bot.",
    },
    {
      q: "¿En qué se diferencia de bloquear la indexación?",
      a: "Aquí — cómo las páginas entran a la base. Allí — cuándo y cómo mantenerlas fuera a propósito.",
    },
  ],
  sections: [
    {
      title: "Índice y crawl en palabras claras",
      level: 2,
      paras: [
        "La base de búsqueda es un catálogo enorme de documentos con direcciones. Una query no busca en el internet en vivo — busca en este índice.",
        "Los bots (crawlers) siguen enlaces, traen HTML y recursos relacionados y pasan datos al procesamiento. URLs nuevas y actualizadas entran a la cola de recrawl.",
        "La profundidad y frecuencia de crawl dependen de la calidad del sitio, errores, crawl budget y de cómo apuntas tú mismo a las URLs importantes.",
      ],
      links: [
        {
          label: "Logs del servidor y bots",
          href: "/es/blog/logi-servera/",
        },
        {
          label: "Buscadores",
          href: "/blog/poiskovye-sistemy/",
        },
      ],
    },
    {
      title: "Qué necesitas para que el sitio se indexe",
      level: 2,
      paras: [
        "Las páginas deben devolver 200 (o un redirect deliberado), estar disponibles sin login obligatorio y no cerrarse con noindex si la meta es orgánico.",
        "robots.txt no debe bloquear por accidente secciones necesarias. Un sitemap ayuda a descubrir URLs pero no fuerza basura al índice.",
        "Enlaces internos y una estructura normal ganan a corridas externas de «submission». Añade el sitio a Yandex Webmaster y Google Search Console y envía el sitemap.",
      ],
      lists: [
        {
          intro: "Un set básico:",
          items: [
            "hosting alcanzable y respuestas correctas",
            "un robots.txt con sentido",
            "sitemap en paneles de webmaster",
            "enlaces internos a URLs importantes",
            "contenido útil sin duplicados masivos",
          ],
        },
      ],
      links: [
        {
          label: "Bloqueo a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Qué está desfasado y qué evitar",
      level: 2,
      paras: [
        "Social bookmarks, corridas por directorios y comprar enlaces «para que el spider venga más rápido» son hábitos ruidosos de los 2010. Para indexar no sustituyen los paneles de webmaster.",
        "No confundas indexación con manipulación de comportamiento y spam de enlaces — riesgos distintos y artículos distintos.",
        "Si una página está indexada pero no crece — mira relevancia, técnica y competencia, no «añadir otra vez a bookmarks».",
      ],
      links: [
        {
          label: "Tipos de enlaces",
          href: "/es/blog/tipy-ssylok/",
        },
      ],
    },
    {
      title: "Cómo comprobar la indexación",
      level: 2,
      paras: [
        "En Webmaster y Search Console mira cobertura/páginas: cuántas descubiertas, excluidas y por qué.",
        "Una query tipo site:example.com/page da un corte rápido, pero los paneles son más precisos en motivos de exclusión.",
        "Crawlers como Screaming Frog / Netpeak Spider ayudan a encontrar noindex, respuestas rotas y huecos de enlazado interno de tu lado — antes de culpar a «la búsqueda no lo toma».",
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "El tiempo hasta indexar no está garantizado. Sitios nuevos y URLs flojas esperan más. No prometas a un cliente «indexación en N horas» sin matices.",
  },
  closing: [
    "Conecta Webmaster y Search Console, envía un sitemap y abre una página importante en el informe de cobertura — así la indexación deja de ser abstracta y pasa a ser un status de URL de trabajo.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "logi-servera",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "screaming-frog",
    "poiskovye-sistemy",
  ],
};

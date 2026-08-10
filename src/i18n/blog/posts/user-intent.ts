import type { BlogPost } from "../../../data/blog";

/** EN overlay for user-intent — same structure as RU JSON. */
export const userIntentEn: BlogPost = {
  slug: "user-intent",
  title: "User intent in SEO: matching pages to search intention",
  date: "2018-08-29",
  category: "SEO",
  cover: "/images/blog/user-intent/cover-en.webp",
  excerpt:
    "User intent is what the person wants behind a query. How to read the results, avoid mixing intents on one URL, and build pages for real intention — not keyword density.",
  lead: [
    "Search ranks not a “page with a keyword,” but an answer to intention: buy, compare, understand, get inspired, find an address. If your URL answers something else — rankings and conversion suffer even with unique copy.",
    "Below: how to spot user intent from the results, when close intentions can share one page, and why forcing the wrong intent onto a commercial landing almost never works.",
  ],
  faq: [
    {
      q: "What is user intent?",
      a: "The user’s intention behind a search query: informational, navigational, commercial investigation, transactional, and mixed variants.",
    },
    {
      q: "How can you spot intent quickly?",
      a: "Open the first 10–20 results in private mode without personal history: which page types dominate — guides, product cards, aggregators, brands.",
    },
    {
      q: "Can one URL serve several intents?",
      a: "Only if they combine naturally and are mixed the same way in the results. Otherwise use separate landings, or you get cannibalization and a weak answer.",
    },
    {
      q: "Can your article change results intent?",
      a: "Rarely. The results reflect behavior. It is easier to match the dominant intent or take a rare but truly useful angle.",
    },
    {
      q: "How does this relate to the keyword core?",
      a: "Cluster = one main intent → one priority page. A core without intent is a word list without structure.",
    },
    {
      q: "Is intent the same in Yandex and Google?",
      a: "Often similar, not always: locality, commercial mix, and result blocks differ. Check both if both channels matter.",
    },
    {
      q: "Does voice search change intent?",
      a: "Often longer and fuzzier wording, but the logic is the same: understand the job and give a direct answer.",
    },
    {
      q: "How do you measure that you hit intent?",
      a: "Cluster rankings, snippet CTR, behavior, and organic conversion. High bounce on a “correct” keyword signals a miss.",
    },
  ],
  sections: [
    {
      title: "Why intent beats “the keyword”",
      level: 2,
      paras: [
        "The same word set hides different jobs. A query like “ecommerce design” may mean inspiration from examples, a UX guide, trends, or buying a service or template.",
        "The results mix those answers: roundups, long articles, images, commercial offers. Your page should clearly answer one main scenario — the one you compete for.",
      ],
      lists: [
        {
          intro: "Typical intention classes:",
          items: [
            "learn / understand",
            "compare / choose",
            "buy / order",
            "find a brand / site",
            "local “nearby / address”",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to read the results",
      level: 2,
      paras: [
        "Work without personalization (private mode / reset history influence). Watch not only competitor titles, but document type: blog, store category, product card, aggregator, video.",
        "Repeating formats in the first ten results signal dominant intent. A lone “foreign” type at positions 8–10 is a weak reason to build the whole URL around it.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "first 10–20 results on the cluster marker",
            "Yandex and Google separately",
            "lock one or two dominant page types",
            "compare to your landing",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Writing a commercial page for an informational cluster “because it is frequent.” Conversion stays low, rankings unstable.",
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Combine or split",
      level: 2,
      paras: [
        "Related informational angles (“design trends” + “good design principles”) sometimes live on one URL if the results mix them the same way. An “oil ranking” and “buy oil” usually need different pages: a ranking reader rarely is ready to check out in the same visit.",
        "Before a copy brief, check results overlap (analysis tools or manual review): if leading documents differ by type — do not glue clusters.",
      ],
      lists: [
        {
          intro: "Rule of thumb:",
          items: [
            "one main intent — one canonical URL",
            "mix — only when results match",
            "commerce and pure info — usually separate",
            "internal links between them instead of “everything in one sheet”",
          ],
        },
      ],
      links: [
        {
          label: "Query cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Intent is shaped by results and behavior",
      level: 2,
      paras: [
        "Search tunes the result mix to where people click and what satisfies them. If “red shoes” is dominated by stores and marketplaces — an informational longread is unlikely to displace a product card.",
        "Hence the practice: do not force intent to break — own your niche inside it — a stronger card, a fairer comparison, a more useful guide — depending on what the results already show.",
      ],
      lists: [
        {
          intro: "What to strengthen:",
          items: [
            "snippet = same intent promise",
            "H1 and first screen without bait-and-switch",
            "block structure for questions from the results",
            "CTA only where intention is commercial",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Fuzzy and voice queries",
      level: 2,
      paras: [
        "Short and imprecise wording grows: the user hopes search will figure it out. Voice phrases are longer, but intent logic is the same.",
        "Do not stretch every possible meaning into one article. Step away from your product: someone querying “how to lose weight” does not need “oriental dance” if they wanted a meal plan.",
      ],
      lists: [
        {
          intro: "Work algorithm:",
          items: [
            "unpack one to three readings of the query",
            "see what is already in the first 20 results",
            "pick one angle for your URL",
            "the rest — separate materials or skip",
          ],
        },
      ],
      links: [
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Practice in content and structure",
      level: 2,
      paras: [
        "Lock intent at the cluster level in the core and in the brief: page type, required blocks, what not to write. Otherwise the copywriter optimizes density, not the user job.",
        "After publish watch more than rankings: if people leave immediately — align snippet and content with dominant intent. Sometimes the right move is change page type, not “add another 2,000 characters.”",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "intent on the cluster card",
            "one canonical URL",
            "title/H1 aligned with intention",
            "no conflicting CTAs",
            "links to related intents",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Hitting intent speeds relevance, but competitive core visibility buildup is still planned for 2–6 months after promotion starts — not “page one after one title tweak.”",
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Entry points",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "kannibalizatsiya-zaprosov",
    "seo-kopirayting",
    "snippet",
    "seo-struktura-sayta",
    "golosovoy-poisk",
  ],
};

/** ES overlay for user-intent — same structure as RU JSON / EN. */
export const userIntentEs: BlogPost = {
  slug: "user-intent",
  title: "User intent en SEO: alinear páginas con la intención de búsqueda",
  date: "2018-08-29",
  category: "SEO",
  cover: "/images/blog/user-intent/cover-es.webp",
  excerpt:
    "User intent es lo que la persona quiere detrás de una consulta. Cómo leer los resultados, evitar mezclar intenciones en una URL y construir páginas para la intención real — no para la densidad de keywords.",
  lead: [
    "La búsqueda no rankea una «página con una keyword», sino una respuesta a la intención: comprar, comparar, entender, inspirarse, encontrar una dirección. Si tu URL responde otra cosa — sufren rankings y conversión aunque el copy sea único.",
    "Abajo: cómo detectar el user intent desde los resultados, cuándo intenciones cercanas pueden compartir una página, y por qué forzar la intención equivocada en una landing comercial casi nunca funciona.",
  ],
  faq: [
    {
      q: "¿Qué es el user intent?",
      a: "La intención del usuario detrás de una consulta de búsqueda: informativa, navegacional, investigación comercial, transaccional y variantes mixtas.",
    },
    {
      q: "¿Cómo detectar la intención rápido?",
      a: "Abre los primeros 10–20 resultados en modo privado sin historial personal: qué tipos de página dominan — guías, fichas de producto, agregadores, marcas.",
    },
    {
      q: "¿Puede una URL servir varias intenciones?",
      a: "Solo si se combinan de forma natural y se mezclan igual en los resultados. Si no, usa landings separadas, o tendrás canibalización y una respuesta débil.",
    },
    {
      q: "¿Puede tu artículo cambiar la intención de los resultados?",
      a: "Rara vez. Los resultados reflejan comportamiento. Es más fácil encajar con la intención dominante o tomar un ángulo raro pero de verdad útil.",
    },
    {
      q: "¿Cómo se relaciona con el núcleo de keywords?",
      a: "Cluster = una intención principal → una página prioritaria. Un núcleo sin intent es una lista de palabras sin estructura.",
    },
    {
      q: "¿La intención es igual en Yandex y en Google?",
      a: "A menudo similar, no siempre: localidad, mezcla comercial y bloques de resultados difieren. Revisa ambos si importan los dos canales.",
    },
    {
      q: "¿La búsqueda por voz cambia la intención?",
      a: "A menudo wording más largo y difuso, pero la lógica es la misma: entender el trabajo y dar una respuesta directa.",
    },
    {
      q: "¿Cómo medir que acertaste la intención?",
      a: "Rankings del cluster, CTR del snippet, comportamiento y conversión orgánica. Un bounce alto con una keyword «correcta» señala un fallo.",
    },
  ],
  sections: [
    {
      title: "Por qué la intención gana a «la keyword»",
      level: 2,
      paras: [
        "El mismo set de palabras esconde trabajos distintos. Una consulta como «diseño ecommerce» puede significar inspiración con ejemplos, una guía UX, tendencias, o comprar un servicio o plantilla.",
        "Los resultados mezclan esas respuestas: roundups, artículos largos, imágenes, ofertas comerciales. Tu página debe responder con claridad un escenario principal — el que compites.",
      ],
      lists: [
        {
          intro: "Clases típicas de intención:",
          items: [
            "aprender / entender",
            "comparar / elegir",
            "comprar / pedir",
            "encontrar una marca / sitio",
            "local «cerca / dirección»",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Cómo leer los resultados",
      level: 2,
      paras: [
        "Trabaja sin personalización (modo privado / sin influencia del historial). Mira no solo los titles de competidores, sino el tipo de documento: blog, categoría de tienda, ficha de producto, agregador, vídeo.",
        "Formatos que se repiten en los primeros diez resultados señalan la intención dominante. Un tipo «ajeno» suelto en posiciones 8–10 es una razón débil para construir toda la URL alrededor de él.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "primeros 10–20 resultados sobre el marcador del cluster",
            "Yandex y Google por separado",
            "fijar uno o dos tipos de página dominantes",
            "comparar con tu landing",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Escribir una página comercial para un cluster informativo «porque es frecuente». La conversión queda baja, los rankings inestables.",
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Combinar o separar",
      level: 2,
      paras: [
        "Ángulos informativos relacionados («tendencias de diseño» + «principios de buen diseño») a veces viven en una URL si los resultados los mezclan igual. Un «ranking de aceites» y «comprar aceite» suelen necesitar páginas distintas: quien lee un ranking rara vez está listo para checkout en la misma visita.",
        "Antes del brief de copy, revisa el solapamiento de resultados (herramientas de análisis o revisión manual): si los documentos líderes difieren por tipo — no pegues clusters.",
      ],
      lists: [
        {
          intro: "Regla práctica:",
          items: [
            "una intención principal — una URL canónica",
            "mezcla — solo cuando los resultados coinciden",
            "comercio e info pura — por lo general separados",
            "enlaces internos entre ellos en lugar de «todo en una hoja»",
          ],
        },
      ],
      links: [
        {
          label: "Canibalización de consultas",
          href: "/es/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "La intención la moldean resultados y comportamiento",
      level: 2,
      paras: [
        "La búsqueda afina la mezcla de resultados según dónde hace clic la gente y qué la satisface. Si «zapatos rojos» lo dominan tiendas y marketplaces — un longread informativo difícilmente desplaza una ficha de producto.",
        "De ahí la práctica: no fuerces la intención a romperse — domina tu nicho dentro de ella — una ficha más fuerte, una comparación más justa, una guía más útil — según lo que los resultados ya muestran.",
      ],
      lists: [
        {
          intro: "Qué reforzar:",
          items: [
            "snippet = la misma promesa de intención",
            "H1 y primera pantalla sin bait-and-switch",
            "estructura en bloques para preguntas de los resultados",
            "CTA solo donde la intención es comercial",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Consultas difusas y por voz",
      level: 2,
      paras: [
        "Crece el wording corto e impreciso: el usuario espera que la búsqueda lo entienda. Las frases de voz son más largas, pero la lógica de intención es la misma.",
        "No estires todos los significados posibles en un artículo. Aléjate de tu producto: quien busca «cómo adelgazar» no necesita «danza oriental» si quería un plan de comidas.",
      ],
      lists: [
        {
          intro: "Algoritmo de trabajo:",
          items: [
            "desempaquetar una a tres lecturas de la consulta",
            "ver qué hay ya en los primeros 20 resultados",
            "elegir un ángulo para tu URL",
            "el resto — materiales separados o skip",
          ],
        },
      ],
      links: [
        {
          label: "Búsqueda por voz",
          href: "/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Práctica en contenido y estructura",
      level: 2,
      paras: [
        "Fija la intención a nivel de cluster en el núcleo y en el brief: tipo de página, bloques obligatorios, qué no escribir. Si no, el copywriter optimiza densidad, no el trabajo del usuario.",
        "Tras publicar mira más que rankings: si la gente se va al momento — alinea snippet y contenido con la intención dominante. A veces el movimiento correcto es cambiar el tipo de página, no «añadir otros 2.000 caracteres».",
      ],
      lists: [
        {
          intro: "Checklist de rollout:",
          items: [
            "intent en la ficha del cluster",
            "una URL canónica",
            "title/H1 alineados con la intención",
            "sin CTAs en conflicto",
            "enlaces a intenciones relacionadas",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Acertar la intención acelera la relevancia, pero el buildup de visibilidad del núcleo competitivo sigue planificándose a 2–6 meses tras el arranque de la promoción — no «primera página tras un retoque de title».",
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Puntos de entrada",
          href: "/es/blog/tochki-vhoda/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "kannibalizatsiya-zaprosov",
    "seo-kopirayting",
    "snippet",
    "seo-struktura-sayta",
    "golosovoy-poisk",
  ],
};

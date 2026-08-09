import type { BlogPost } from "../../../data/blog";

/** ES overlay for klassifikatsiya-zaprosov — same structure as RU JSON. */
export const klassifikatsiyaZaprosovEs: BlogPost = {
  slug: "klassifikatsiya-zaprosov",
  title: "Clasificar consultas de búsqueda por objetivos",
  date: "2017-09-28",
  category: "SEO",
  cover: "/images/blog/klassifikatsiya-zaprosov/cover.webp",
  excerpt:
    "Cómo se parten las consultas: informativas, comerciales, transaccionales, navegacionales, geo y estacionales — y por qué importa para SEO y contenido. Frecuencia y competencia son ejes relacionados, no un sustituto de la intención.",
  lead: [
    "Una consulta no es solo una «keyword» — es la tarea de una persona: aprender, encontrar un sitio, comparar o comprar. El tipo decide qué página debe responder y qué contenido encaja.",
    "Abajo: un mapa de clasificación por objetivos y ejes relacionados (geo, temporada, frecuencia, competencia). Cómo leer el SERP y no mezclar intents en una URL — en el texto de user intent; HF/MF/LF — aparte en frecuencia.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del user intent?",
      a: "Este artículo es una taxonomía de tipos de consulta. Cómo leer la intención en el SERP y construir la página para ella se cubre aparte.",
    },
    {
      q: "¿Comercial y transaccional son lo mismo?",
      a: "Comercial está cerca de compra/precio. Transaccional es más amplio: descargar, suscribirse, ver — cualquier acción objetivo.",
    },
    {
      q: "¿Una consulta — un tipo para siempre?",
      a: "No. Un producto nuevo primero se busca como info y luego como compra. Revisa el SERP actual.",
    },
    {
      q: "¿Un sitio comercial necesita tráfico info del blog?",
      a: "Sí si el tema está junto a la oferta y construye confianza/enlaces internos. Temas off-topic hacen daño.",
    },
    {
      q: "¿Qué da la geo-dependencia?",
      a: "Sugiere si hacen falta landings locales, mapas y ciudad en la estructura. No lo confundas con consultas navegacionales de «nombre de marca».",
    },
    {
      q: "¿Alta frecuencia siempre importa más que baja?",
      a: "No. La frecuencia es volumen; intent y margen pesan más. Ver frecuencia de consultas.",
    },
    {
      q: "¿Por dónde empezar a clusterizar?",
      a: "Agrupa por intent principal → una página prioritaria por cluster, luego afina geo y comercio.",
    },
  ],
  sections: [
    {
      title: "Por qué partir las consultas",
      level: 2,
      paras: [
        "El buscador encaja el tipo de resultado con la tarea. Un sitio gana cuando la página encaja con el intent dominante del SERP.",
        "Los tipos se combinan: «comprar TV Madrid» es comercial/transaccional + geo. La clasificación es un mapa de trabajo, no una jaula rígida.",
      ],
      links: [
        {
          label: "User intent en SEO",
          href: "/es/blog/user-intent/",
        },
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Por objetivo: info, comercio, transacciones, navegación",
      level: 2,
      paras: [
        "Informativas — «cómo», «qué es», reseñas sin compra clara. Útiles para media y blogs; para un sitio comercial — si llevan a expertise y a la oferta.",
        "Comerciales — comprar, precio, pedir, alquilar. Tráfico caliente, suele haber más competencia.",
        "Transaccionales — cualquier acción objetivo: descargar, suscribirse, ver, comprar. Las comerciales son un subtipo habitual.",
        "Navegacionales — camino a una marca/sitio concreto («login sberbank»). Atacar la marca de un competidor con un artículo «sobre todo» suele ser inútil.",
        "Multimedia («ver», «escuchar», «fotos») — otro SERP; un catálogo comercial rara vez debe competir con plataformas de vídeo.",
      ],
      lists: [
        {
          intro: "Test rápido en la primera página de resultados:",
          items: [
            "guías y Wiki — probablemente info",
            "fichas de producto y listas de precios — comercio",
            "marca en los resultados — navegación",
            "tipos mezclados — intent mixto; cuidado con una sola landing",
          ],
        },
      ],
    },
    {
      title: "Geo, temporada, frecuencia y competencia",
      level: 2,
      paras: [
        "Las consultas geo-dependientes esperan respuesta local; las geo-independientes — una general. Para servicios on-site, el geo en la estructura es obligatorio.",
        "Los picos estacionales cambian la demanda y el SERP — prepara contenido y ads pronto, no en el pico.",
        "HF/MF/LF y el nivel de competencia son otros ejes de la misma semántica: volumen y dificultad de entrada. No sustituyen el intent.",
      ],
      links: [
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
        {
          label: "Wordstat",
          href: "/es/blog/wordstat/",
        },
      ],
    },
    {
      title: "Práctica para el sitio",
      level: 2,
      paras: [
        "Para el intent principal de cada cluster — su propia URL. No mezcles «cómo elegir» y «comprar» en una página fina si el SERP está partido.",
        "Mantén artículos info en un dominio comercial on-product: si no, arriesgas dilución y rankings débiles.",
        "Revisa el tipo de consulta con el tiempo: la misma consulta de marca puede pasar de info a compra.",
      ],
      links: [
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Toma 20 frases prioritarias del núcleo semántico y marca intent + geo: en ese paso ya ves qué landings faltan y dónde las tareas se mezclan sin motivo.",
  ],
  related: [
    "user-intent",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "wordstat",
    "optimizatsiya-stranitsy",
    "analiz-konkurentov",
  ],
};

/** EN overlay for klassifikatsiya-zaprosov — same structure as RU JSON. */
export const klassifikatsiyaZaprosovEn: BlogPost = {
  slug: "klassifikatsiya-zaprosov",
  title: "Classifying search queries by goals",
  date: "2017-09-28",
  category: "SEO",
  cover: "/images/blog/klassifikatsiya-zaprosov/cover-en.webp",
  excerpt:
    "How search queries are split: informational, commercial, transactional, navigational, geo, and seasonal — and why that matters for SEO and content. Frequency and competition are related axes, not a substitute for intent.",
  lead: [
    "A query isn’t just a “keyword” — it’s a person’s task: learn, find a site, compare, or buy. The type decides which page should answer and what content fits.",
    "Below: a map of classification by goals and related axes (geo, season, frequency, competition). How to read the SERP and not mix intents on one URL — in the user intent piece; HF/MF/LF — separately on frequency.",
  ],
  faq: [
    {
      q: "How is this different from user intent?",
      a: "This article is a taxonomy of query types. How to read intent from the SERP and build a page for it is covered separately.",
    },
    {
      q: "Are commercial and transactional the same?",
      a: "Commercial is close to purchase/price. Transactional is broader: download, subscribe, watch — any target action.",
    },
    {
      q: "One query — one type forever?",
      a: "No. A new product is first sought as info, then as a purchase. Check the current SERP.",
    },
    {
      q: "Does a commercial site need info traffic from a blog?",
      a: "Yes if the topic sits next to the offer and builds trust/internal links. Off-topic themes hurt.",
    },
    {
      q: "What does geo-dependence give?",
      a: "It hints whether you need local landings, maps, and city in the structure. Don’t confuse with navigational “brand name” queries.",
    },
    {
      q: "Is high frequency always more important than low?",
      a: "No. Frequency is volume; intent and margin matter more. See query frequency.",
    },
    {
      q: "Where to start clustering?",
      a: "Group by main intent → one priority page per cluster, then refine geo and commerce.",
    },
  ],
  sections: [
    {
      title: "Why split queries",
      level: 2,
      paras: [
        "Search matches result type to the task. A site wins when the page matches the dominant SERP intent.",
        "Types combine: “buy TV Moscow” is commercial/transactional + geo. Classification is a working map, not a rigid cage.",
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "By goal: info, commerce, transactions, navigation",
      level: 2,
      paras: [
        "Informational — “how,” “what is,” reviews without a clear purchase. Useful for media and blogs; for a commercial site — if they lead to expertise and the offer.",
        "Commercial — buy, price, order, rent. Hot traffic, usually higher competition.",
        "Transactional — any target action: download, subscribe, watch, buy. Commercial queries are a common subtype.",
        "Navigational — a path to a specific brand/site (“sberbank login”). Hitting a competitor’s brand with a “about everything” article is usually pointless.",
        "Multimedia (“watch,” “listen,” “photos”) — a separate SERP; a commercial catalog rarely should compete with video platforms.",
      ],
      lists: [
        {
          intro: "A quick test on the first page of results:",
          items: [
            "guides and Wiki — likely info",
            "product cards and price lists — commerce",
            "brand in the results — navigation",
            "mixed types — mixed intent; be careful with one landing",
          ],
        },
      ],
    },
    {
      title: "Geo, season, frequency, and competition",
      level: 2,
      paras: [
        "Geo-dependent queries expect a local answer; geo-independent ones — a general one. For on-site services, geo in the structure is required.",
        "Seasonal peaks change demand and the SERP — prepare content and ads early, not at the peak.",
        "HF/MF/LF and competition level are other axes of the same semantics: volume and entry difficulty. They don’t replace intent.",
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
        {
          label: "Wordstat",
          href: "/en/blog/wordstat/",
        },
      ],
    },
    {
      title: "Practice for the site",
      level: 2,
      paras: [
        "For each cluster’s main intent — its own URL. Don’t mix “how to choose” and “buy” on one thin page if the SERP is split.",
        "Keep info articles on a commercial domain on-product: otherwise you risk dilution and weak rankings.",
        "Revisit query type over time: the same brand query can shift from info to purchase.",
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Take 20 priority phrases from the keyword set and mark intent + geo: at that step you already see which landings are missing and where tasks are mixed for no reason.",
  ],
  related: [
    "user-intent",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "wordstat",
    "optimizatsiya-stranitsy",
    "analiz-konkurentov",
  ],
};

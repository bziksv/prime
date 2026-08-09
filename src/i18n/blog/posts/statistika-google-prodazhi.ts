import type { BlogPost } from "../../../data/blog";

/** EN overlay for statistika-google-prodazhi — same structure as RU JSON. */
export const statistikaGoogleProdazhiEn: BlogPost = {
  slug: "statistika-google-prodazhi",
  title: "Google stats for sales: Keyword Planner, Trends, and Analytics",
  date: "2020-07-30",
  category: "Digital marketing",
  cover: "/images/blog/statistika-google-prodazhi/cover-en.webp",
  excerpt:
    "How to use Keyword Planner, Google Trends, and Analytics to gauge demand, seasonality, and channel performance — for SEO, ads, and sales forecasting.",
  lead: [
    "Search and analytics numbers don’t sell by themselves, but they help with three jobs: what to push on the site, when to boost ads, and which queries actually lead to money. In Google’s stack that usually means Keyword Planner, Trends, and Analytics (today’s GA4 logic).",
    "Below: why search stats matter in marketing, how to read Planner and Trends without treating “exact” impression counts as gospel, where Analytics fits, and when third-party collectors help. For an RU audience, Yandex Wordstat stays a required parallel track next to Google — see also the keyword-set and frequency articles.",
  ],
  faq: [
    {
      q: "Does Keyword Planner replace Wordstat?",
      a: "No. Planner helps for Google Ads and Google demand estimates. For Yandex, use Wordstat. An RU project usually needs both.",
    },
    {
      q: "Do I need an active ad budget?",
      a: "Full Planner features are easier with a Google Ads account. Without campaigns some estimates are coarser — allow for error and cross-check other sources.",
    },
    {
      q: "Does Trends show absolute frequency?",
      a: "No. It’s relative interest (index up to 100) over time and regions. For volumes use Planner/Wordstat and your own data.",
    },
    {
      q: "Can I launch a new product from Trends alone?",
      a: "Trends shows rising interest in a theme or category. For a new SKU with no queries, check adjacent categories, then your sales and brand search.",
    },
    {
      q: "How is this different from a GA store deep-dive?",
      a: "Here the focus is demand and planning (Planner + Trends + Analytics’ role). Ecommerce funnel behavior is in the separate Google Analytics article.",
    },
    {
      q: "How accurate are Planner numbers?",
      a: "Estimates and ranges, often broad match. Don’t build a financial model on one cell — cross-check ad reports and organic.",
    },
    {
      q: "Are third-party tools required?",
      a: "No. Useful for export and clustering. Paid licenses pay off with regular keyword-set work — not for one spreadsheet.",
    },
    {
      q: "How does this tie to sales?",
      a: "Search demand → site and ad themes → traffic → conversions in Analytics/CRM. Without “query → landing → goal,” stats stay a picture.",
    },
  ],
  sections: [
    {
      title: "Why marketing needs search stats",
      level: 2,
      paras: [
        "Three practical uses: gather and prioritize site keywords, prep a Google Ads start, gauge seasonality and regional demand before buying or promos. Without numbers it’s easy to spend on a pretty theme with no demand.",
        "Example: a bike-accessories shop. Planner suggests volumes and related wording, Trends shows which months interest rises, Analytics shows which queries and channels already fill the cart. Decisions feed the content plan, bids, and assortment.",
      ],
      lists: [
        {
          intro: "Three data tracks:",
          items: [
            "Keyword Planner — key ideas and Ads demand/competition estimates",
            "Trends — interest over time and by region",
            "Analytics — what actually hit the site and converted",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Google Keyword Planner: demand and the keyword set",
      level: 2,
      paras: [
        "In Google Ads open Keyword Planner: ideas by product/site and forecasts for a keyword list. Watch average impressions, competition, bid guides, and wording variants. Numbers are planning estimates — not gospel down to the last digit.",
        "Set geo and language. Negatives and filters cut junk (“used,” competitor brands). Remember match types: broad estimates include variations — for a precise set, cluster by hand or in a collector.",
      ],
      lists: [
        {
          intro: "What to take from Planner:",
          items: [
            "candidate list for the keyword set",
            "rough competition and CPC",
            "seasonal hints from the chart (if available)",
            "landing ideas for mid/long-tail",
            "hypotheses for Ads creatives",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Grabbing head “buy …” terms with no landing or offer. Intent and page first, budget second.",
        },
      ],
      tables: [
        {
          caption: "How to read Planner fields",
          headers: ["Field", "Why it matters"],
          rows: [
            ["Impressions / month", "Demand guide, often a range"],
            ["Competition", "Ads density — not SEO difficulty"],
            ["Bid", "Auction forecast — not organic cost"],
            ["Keyword variants", "Cluster and negative ideas"],
          ],
        },
      ],
    },
    {
      title: "Google Trends: seasonality and regions",
      level: 2,
      paras: [
        "Trends shows relative interest in a topic: useful for comparing seasons, regions, and close categories. Peak “100” is the max in the selected period — not absolute visits. For bikes, interest may rise before “logical” spring — plan stock and creatives with lead time.",
        "For new products without a direct query, watch the parent category and adjacent themes. A sharp spike with no sales base is a reason to check hype and durability — not to scale buying immediately.",
      ],
      lists: [
        {
          intro: "Practical Trends scenarios:",
          items: [
            "when to boost ads and content",
            "which regions look stronger",
            "comparing two product categories",
            "checking a dead season",
            "monitoring interest after a launch",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Cross-check Trends with your sales and stock: search often leads or lags actual purchases — depends on the niche.",
        },
      ],
    },
    {
      title: "The role of Google Analytics",
      level: 2,
      paras: [
        "Planner and Trends speak to demand outside. Analytics shows what happened on the site: which sources and landings hit goals, where drop-off is. In GA4 lean on events and conversions — not Universal Analytics screenshots from old guides.",
        "The chain “query → ad/organic → page → purchase/lead” matters more than a pretty chart. For a deep store funnel, see the separate Google Analytics article.",
      ],
      lists: [
        {
          intro: "Minimum link to demand stats:",
          items: [
            "goals/key events configured",
            "UTMs on ads consistent",
            "landings match key intent",
            "weekly channel and conversion review",
            "content hypotheses for weak URLs",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics for ecommerce",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Dashboards and reports",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Third-party collectors and Wordstat",
      level: 2,
      paras: [
        "Key Collector and peers help with export, grouping, and several sources at once. License cost pays off with regular keyword-set work. A one-off project often needs only Wordstat + Planner + a spreadsheet.",
        "Don’t chase “exact Google query counts” from shady SERP scrapers — fragile and risky. Prefer official APIs/consoles and your own ad data.",
      ],
      lists: [
        {
          intro: "When the free track is enough:",
          items: [
            "small keyword set and one region",
            "niche hypothesis kickoff",
            "seasonality check in Trends",
            "cross-check with Wordstat for Yandex",
          ],
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
      title: "From numbers to sales: a working loop",
      level: 2,
      paras: [
        "Gather candidates in Planner/Wordstat → filter intent → check season in Trends → assign landings and offers → publish content and run Ads → measure in Analytics and CRM. Iteration beats one perfect spreadsheet.",
        "SEO landing prep takes weeks. Organic growth for the keyword set builds month to month — planned 2–6 months to noticeable page-one visibility. Ads give a faster learning sample on keywords, but don’t replace page quality.",
      ],
      lists: [
        {
          intro: "Loop checklist:",
          items: [
            "keyword set and negatives",
            "season and region",
            "landing per cluster",
            "goal in analytics",
            "review in one or two weeks and adjust",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Stats help pick a theme. Organic page-one visibility is a separate horizon after prep — Planner numbers are not rankings.",
        },
      ],
      links: [
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Keywords for an online store",
          href: "/en/blog/klyuchi-internet-magazin/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "dashboard",
    "prodvizhenie-internet-magazina",
  ],
};

/** ES overlay for statistika-google-prodazhi — same structure as RU JSON / EN. */
export const statistikaGoogleProdazhiEs: BlogPost = {
  slug: "statistika-google-prodazhi",
  title: "Stats de Google para ventas: Keyword Planner, Trends y Analytics",
  date: "2020-07-30",
  category: "Digital marketing",
  cover: "/images/blog/statistika-google-prodazhi/cover.webp",
  excerpt:
    "Cómo usar Keyword Planner, Google Trends y Analytics para medir demanda, estacionalidad y rendimiento de canal — para SEO, ads y previsión de ventas.",
  lead: [
    "Los números de búsqueda y analytics no venden solos, pero ayudan con tres trabajos: qué empujar en el sitio, cuándo subir ads y qué queries llevan de verdad a dinero. En el stack de Google eso suele ser Keyword Planner, Trends y Analytics (la lógica actual de GA4).",
    "Abajo: por qué importan las stats de búsqueda en marketing, cómo leer Planner y Trends sin tratar los conteos «exactos» de impresiones como evangelio, dónde encaja Analytics y cuándo ayudan los collectors de terceros. Para audiencia RU, Yandex Wordstat sigue siendo una vía paralela obligatoria junto a Google — ver también los artículos de set de keywords y frecuencia.",
  ],
  faq: [
    {
      q: "¿Keyword Planner sustituye a Wordstat?",
      a: "No. Planner ayuda para Google Ads y estimaciones de demanda de Google. Para Yandex, usa Wordstat. Un proyecto RU suele necesitar ambos.",
    },
    {
      q: "¿Hace falta un presupuesto de ads activo?",
      a: "Las features completas de Planner son más fáciles con una cuenta de Google Ads. Sin campañas algunas estimaciones son más gruesas — deja margen de error y cruza otras fuentes.",
    },
    {
      q: "¿Trends muestra frecuencia absoluta?",
      a: "No. Es interés relativo (índice hasta 100) en el tiempo y por regiones. Para volúmenes usa Planner/Wordstat y tus propios datos.",
    },
    {
      q: "¿Puedo lanzar un producto nuevo solo con Trends?",
      a: "Trends muestra interés creciente en un tema o categoría. Para un SKU nuevo sin queries, revisa categorías adyacentes, luego tus ventas y búsqueda de marca.",
    },
    {
      q: "¿En qué se diferencia de un deep-dive de GA para tienda?",
      a: "Aquí el foco es demanda y planificación (Planner + Trends + el rol de Analytics). El comportamiento del funnel ecommerce está en el artículo aparte de Google Analytics.",
    },
    {
      q: "¿Qué tan precisos son los números de Planner?",
      a: "Estimaciones y rangos, a menudo broad match. No armes un modelo financiero sobre una celda — cruza reportes de ads y orgánico.",
    },
    {
      q: "¿Son obligatorias las tools de terceros?",
      a: "No. Útiles para export y clustering. Las licencias de pago compensan con trabajo regular del set de keywords — no para una sola hoja.",
    },
    {
      q: "¿Cómo se liga esto a las ventas?",
      a: "Demanda de búsqueda → temas de sitio y ads → tráfico → conversiones en Analytics/CRM. Sin «query → landing → objetivo», las stats se quedan en una foto.",
    },
  ],
  sections: [
    {
      title: "Por qué el marketing necesita stats de búsqueda",
      level: 2,
      paras: [
        "Tres usos prácticos: reunir y priorizar keywords del sitio, preparar un arranque de Google Ads, medir estacionalidad y demanda regional antes de comprar o hacer promos. Sin números es fácil gastar en un tema bonito sin demanda.",
        "Ejemplo: una tienda de accesorios de bici. Planner sugiere volúmenes y wording relacionado, Trends muestra en qué meses sube el interés, Analytics muestra qué queries y canales ya llenan el carrito. Las decisiones alimentan el plan de contenido, las pujas y el surtido.",
      ],
      lists: [
        {
          intro: "Tres vías de datos:",
          items: [
            "Keyword Planner — ideas de keys y estimaciones de demanda/competencia de Ads",
            "Trends — interés en el tiempo y por región",
            "Analytics — qué llegó de verdad al sitio y convirtió",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de queries",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Google Keyword Planner: demanda y el set de keywords",
      level: 2,
      paras: [
        "En Google Ads abre Keyword Planner: ideas por producto/sitio y forecasts para una lista de keywords. Mira impresiones medias, competencia, guías de puja y variantes de wording. Los números son estimaciones de planificación — no evangelio hasta el último dígito.",
        "Fija geo e idioma. Negatives y filtros cortan basura («usado», marcas de competidor). Recuerda los match types: las estimaciones broad incluyen variaciones — para un set preciso, clusteriza a mano o en un collector.",
      ],
      lists: [
        {
          intro: "Qué sacar de Planner:",
          items: [
            "lista candidata para el set de keywords",
            "competencia y CPC aproximados",
            "pistas estacionales del gráfico (si está disponible)",
            "ideas de landing para mid/long-tail",
            "hipótesis para creatives de Ads",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Agarrar términos head «comprar …» sin landing ni oferta. Primero intención y página, después presupuesto.",
        },
      ],
      tables: [
        {
          caption: "Cómo leer los campos de Planner",
          headers: ["Campo", "Por qué importa"],
          rows: [
            ["Impresiones / mes", "Guía de demanda, a menudo un rango"],
            ["Competencia", "Densidad de ads — no dificultad SEO"],
            ["Puja", "Forecast de subasta — no coste orgánico"],
            ["Variantes de keyword", "Ideas de cluster y negatives"],
          ],
        },
      ],
    },
    {
      title: "Google Trends: estacionalidad y regiones",
      level: 2,
      paras: [
        "Trends muestra interés relativo en un tema: útil para comparar estaciones, regiones y categorías cercanas. El pico «100» es el máximo del periodo elegido — no visitas absolutas. En bicis, el interés puede subir antes de la primavera «lógica» — planifica stock y creatives con lead time.",
        "Para productos nuevos sin query directa, mira la categoría padre y temas adyacentes. Un pico brusco sin base de ventas es motivo para chequear hype y durabilidad — no para escalar la compra al momento.",
      ],
      lists: [
        {
          intro: "Escenarios prácticos de Trends:",
          items: [
            "cuándo subir ads y contenido",
            "qué regiones se ven más fuertes",
            "comparar dos categorías de producto",
            "chequear una temporada muerta",
            "monitorizar interés tras un lanzamiento",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Cruza Trends con tus ventas y stock: la búsqueda a menudo adelanta o atrasa las compras reales — depende del nicho.",
        },
      ],
    },
    {
      title: "El rol de Google Analytics",
      level: 2,
      paras: [
        "Planner y Trends hablan de la demanda fuera. Analytics muestra qué pasó en el sitio: qué fuentes y landings pegaron objetivos, dónde está el drop-off. En GA4 apóyate en eventos y conversiones — no en screenshots de Universal Analytics de guías viejas.",
        "La cadena «query → ad/orgánico → página → compra/lead» importa más que un gráfico bonito. Para un funnel profundo de tienda, ver el artículo aparte de Google Analytics.",
      ],
      lists: [
        {
          intro: "Mínimo de enlace a stats de demanda:",
          items: [
            "objetivos/eventos clave configurados",
            "UTMs de ads coherentes",
            "landings alineadas con la intención clave",
            "revisión semanal de canal y conversión",
            "hipótesis de contenido para URLs débiles",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics para ecommerce",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Dashboards y reportes",
          href: "/es/blog/dashboard/",
        },
      ],
    },
    {
      title: "Collectors de terceros y Wordstat",
      level: 2,
      paras: [
        "Key Collector y pares ayudan con export, agrupación y varias fuentes a la vez. El coste de licencia compensa con trabajo regular del set de keywords. Un proyecto puntual a menudo solo necesita Wordstat + Planner + una hoja.",
        "No persigas «conteos exactos de queries de Google» de scrapers SERP dudosos — frágiles y arriesgados. Prefiere APIs/consolas oficiales y tus propios datos de ads.",
      ],
      lists: [
        {
          intro: "Cuándo basta la vía gratis:",
          items: [
            "set de keywords pequeño y una región",
            "kickoff de hipótesis de nicho",
            "chequeo de estacionalidad en Trends",
            "cruce con Wordstat para Yandex",
          ],
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
      title: "De números a ventas: un loop que funciona",
      level: 2,
      paras: [
        "Reúne candidatos en Planner/Wordstat → filtra intención → chequea estación en Trends → asigna landings y ofertas → publica contenido y corre Ads → mide en Analytics y CRM. La iteración gana a una hoja perfecta de una sola vez.",
        "La prep de landings SEO lleva semanas. El crecimiento orgánico del set de keywords se construye mes a mes — planificado 2–6 meses hasta visibilidad notable en primera página. Los ads dan una muestra de aprendizaje más rápida sobre keywords, pero no sustituyen la calidad de página.",
      ],
      lists: [
        {
          intro: "Checklist del loop:",
          items: [
            "set de keywords y negatives",
            "estación y región",
            "landing por cluster",
            "objetivo en analytics",
            "revisión en una o dos semanas y ajuste",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Las stats ayudan a elegir un tema. La visibilidad orgánica en primera página es un horizonte aparte tras la prep — los números de Planner no son rankings.",
        },
      ],
      links: [
        {
          label: "Promoción ecommerce",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Keywords para una tienda online",
          href: "/es/blog/klyuchi-internet-magazin/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "dashboard",
    "prodvizhenie-internet-magazina",
  ],
};

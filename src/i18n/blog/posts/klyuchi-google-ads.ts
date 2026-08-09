import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-google-ads — same structure as RU JSON. */
export const klyuchiGoogleAdsEn: BlogPost = {
  slug: "klyuchi-google-ads",
  title: "Keyword research in Google Ads",
  date: "2021-03-09",
  category: "Paid search",
  cover: "/images/blog/klyuchi-google-ads/cover-en.webp",
  excerpt:
    "How to pick keywords for Google Ads (formerly AdWords): match types, planner stats, and intent checks — without mixing them up with an SEO keyword set.",
  lead: [
    "In Google Ads, keywords decide when an ad shows. Planner and reports help estimate demand, but you build the final list around the offer, click economics, and negatives.",
    "Below: research logic, match types, landings, and post-launch cleanup. The Google Ads UI changes; check current menu names in the account. For some markets, also check product availability and workable measurement alternatives.",
  ],
  faq: [
    {
      q: "Are AdWords and Google Ads the same?",
      a: "Yes — the product was renamed. Older “AdWords” articles mean the same Google ads account.",
    },
    {
      q: "Are Ads keywords the same as an SEO keyword set?",
      a: "They overlap, but aren’t equal. Ads care about bid, negatives, and commercial intent; SEO cares about landings, content, and rankings over time.",
    },
    {
      q: "Where do stats come from?",
      a: "Keyword Planner and campaign reports. Planner figures are estimates — not a guarantee of impressions or CPA.",
    },
    {
      q: "Do you need broad match?",
      a: "Carefully: more reach and more junk. Exact and phrase are often easier to control at the start until analytics and negatives are strong.",
    },
    {
      q: "What about negative keywords?",
      a: "Required — without them budget leaks to irrelevant impressions and clicks. Grow the list from the search terms report.",
    },
    {
      q: "How do you read query intent?",
      a: "Look at the SERP and wording. “How to choose” usually needs a different page and ad than “order with delivery.”",
    },
    {
      q: "How many keywords per ad group?",
      a: "As many as honestly share one intent and one ad. Dozens of mixed phrases in one group weaken Quality Score and blur the copy.",
    },
    {
      q: "Can you copy a competitor’s keyword set?",
      a: "As a draft — yes; as a final list — no. Their keywords don’t know your margin, geo, or landings; without cleanup you’ll burn budget.",
    },
  ],
  sections: [
    {
      title: "Keyword list concept",
      level: 2,
      paras: [
        "Start from services, products, and customer language — how they search, not how you name the product internally. Add synonyms and commercial modifiers: “price,” “order,” “with delivery,” “cheap” — and seed negatives for informational and off-offer demand.",
        "Don’t dump keywords into one group just because they share a word. Group phrases with the same intent and one fitting landing. Otherwise the ad says nothing and the page doesn’t match the click.",
      ],
      lists: [
        {
          intro: "Keyword layers:",
          items: [
            "offer core",
            "niche synonyms and jargon",
            "geo, if needed",
            "modifier tails (lead time, material, segment)",
            "negatives from search terms",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
        {
          label: "Semantic core (SEO)",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Match types and ad group structure",
      level: 2,
      paras: [
        "Match type controls how widely the system can map a query to a keyword. Wider reach means tighter search-term control and negatives — or you pay for “nearby,” not “the thing.”",
        "At the start, a clear structure helps: one group — one need, a tight keyword set, a relevant ad, and a fitting landing. When data accumulates, expand carefully where economics already work.",
      ],
      lists: [
        {
          intro: "For each group lock in:",
          items: [
            "user intent",
            "geography",
            "negatives",
            "landing page",
            "conversion goal and CPA target",
          ],
        },
      ],
      tables: [
        {
          caption: "Reach vs control (simplified)",
          headers: ["Approach", "Upside", "Risk"],
          rows: [
            ["Exact / phrase", "Easier click quality", "You may under-reach"],
            ["Broad without negatives", "Fast volume", "Junk and expensive CPA"],
            ["Broad + strict query review", "Scale with control", "Needs report discipline"],
          ],
        },
      ],
    },
    {
      title: "Planner stats and intent checks",
      level: 2,
      paras: [
        "Planner frequency and competition figures are a draft compass, not a verdict. After launch, the main decision source is the search terms report: real wording, wasted impressions, and negative candidates.",
        "Stats don’t guarantee sales. Cross-check with margin, geo, seasonality, and whether the landing can honestly answer the query. High volume at zero margin isn’t a golden keyword.",
      ],
      lists: [
        {
          intro: "Practice before scale:",
          items: [
            "test with a small budget",
            "weekly search-term review",
            "keyword → ad → landing chain",
            "don’t inflate groups without structure",
          ],
        },
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Negatives and the search terms report",
      level: 2,
      paras: [
        "Negatives are the filter without which broad — and even “medium” — keywords burn spend. Keep lists at campaign and group level: shared (jobs, free, DIY — if that’s not your offer) and niche-specific.",
        "Weekly (or more often at high spend), review search terms: what to add as keywords, what to negate, which ads and URLs missed the click. That’s performance routine — not a one-time launch setting.",
      ],
      lists: [
        {
          intro: "Typical junk for negatives (tune to niche):",
          items: [
            "informational “what is / DIY”",
            "competitor brands if you don’t want interception",
            "jobs and training if you sell a service",
            "free / download — if you have no freemium",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Over-aggressive negatives cut useful long-tail. Gather data first, then tighten — especially on phrases that already convert.",
        },
      ],
    },
    {
      title: "Tie-in with ad and landing",
      level: 2,
      paras: [
        "A keyword without a relevant ad and page is wasted spend. Headline and copy should promise what the person searched; the landing should close that offer — not dump them on the catalog home.",
        "Different intents need different URLs or at least different blocks/anchors. Sending all demand to one “about everything” sheet is usually worse than several narrow landings.",
      ],
      lists: [
        {
          intro: "Check before approving a group:",
          items: [
            "the keyword is audible in the ad",
            "URL loads and is fast on mobile",
            "CTA and form are visible without a quest",
            "no clash with price/terms from the ad",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Conversion rate optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Classics: one giant ungrouped list; ignoring negatives; “everything” keywords on one landing; copying an SEO keyword set without ad cleanup; bids without conversion tracking.",
        "Don’t twist bids and keywords every day without data. First make sure analytics goals fire and sales sees lead quality — or you’ll optimize a pretty CTR.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "bids without conversion analytics",
            "broad match without query control",
            "ads that don’t match the keyword",
            "mixing brand and generic demand without separate campaigns",
          ],
        },
      ],
      links: [
        {
          label: "Bidding in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Optimization after launch",
      level: 2,
      paras: [
        "Launch a test with a budget that can collect stats, and review reports on a schedule. Add negatives, refine groups, and improve the page for observed reasons — not “everything at once after a bad day.”",
        "Judge the campaign by conversions and their quality — not clicks or average position. If leads don’t fit sales, the issue may be query, offer, or user path — keywords are only one lever.",
      ],
      lists: [
        {
          intro: "Weekly control:",
          items: [
            "search terms",
            "spend, CPA, and conversion count",
            "irrelevant share",
            "ad–landing fit",
            "what to scale, what to cut",
          ],
        },
      ],
      notes: [
        {
          title: "SEO vs Ads",
          kind: "tip",
          text: "Ads give a fast demand test. Organic for a core grows separately: site prep — roughly weeks to a month; page-one share for the core is typically planned for two to six months of work after you start.",
        },
      ],
    },
  ],
  related: [
    "reklamnyy-kabinet",
    "chastotnost-zaprosov",
    "semanticheskoe-yadro",
    "tekst-lendinga",
    "stavki-direkt",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for klyuchi-google-ads — same structure as RU JSON / EN. */
export const klyuchiGoogleAdsEs: BlogPost = {
  slug: "klyuchi-google-ads",
  title: "Investigación de keywords en Google Ads",
  date: "2021-03-09",
  category: "Paid search",
  cover: "/images/blog/klyuchi-google-ads/cover.webp",
  excerpt:
    "Cómo elegir keywords para Google Ads (antes AdWords): tipos de coincidencia, stats del planner y checks de intención — sin mezclarlos con un set SEO.",
  lead: [
    "En Google Ads, las keywords deciden cuándo se muestra un anuncio. El Planner y los informes ayudan a estimar demanda, pero la lista final se arma alrededor de la oferta, la economía del clic y los negativos.",
    "Abajo: lógica de research, tipos de coincidencia, landings y limpieza post-lanzamiento. La UI de Google Ads cambia; revisa los nombres de menú actuales en la cuenta. En algunos mercados, también revisa disponibilidad del producto y alternativas de medición viables.",
  ],
  faq: [
    {
      q: "¿AdWords y Google Ads son lo mismo?",
      a: "Sí — el producto se renombró. Los artículos antiguos de «AdWords» hablan de la misma cuenta de anuncios de Google.",
    },
    {
      q: "¿Las keywords de Ads son lo mismo que un set SEO?",
      a: "Se solapan, pero no son iguales. Ads cuida puja, negativos e intención comercial; SEO cuida landings, contenido y rankings en el tiempo.",
    },
    {
      q: "¿De dónde salen las stats?",
      a: "Keyword Planner e informes de campaña. Las cifras del Planner son estimaciones — no una garantía de impresiones o CPA.",
    },
    {
      q: "¿Hace falta coincidencia amplia?",
      a: "Con cuidado: más alcance y más basura. Exacta y de frase suelen ser más fáciles de controlar al inicio hasta que la analítica y los negativos estén fuertes.",
    },
    {
      q: "¿Y las keywords negativas?",
      a: "Obligatorias — sin ellas el presupuesto se filtra a impresiones y clics irrelevantes. Crece la lista desde el informe de términos de búsqueda.",
    },
    {
      q: "¿Cómo se lee la intención de la consulta?",
      a: "Mira la SERP y el wording. «Cómo elegir» suele pedir una página y un anuncio distintos a «pedir con entrega».",
    },
    {
      q: "¿Cuántas keywords por grupo de anuncios?",
      a: "Las que compartan de verdad una intención y un anuncio. Decenas de frases mezcladas en un grupo debilitan el Quality Score y difuminan el copy.",
    },
    {
      q: "¿Se puede copiar el set de un competidor?",
      a: "Como borrador — sí; como lista final — no. Sus keywords no conocen tu margen, geo ni landings; sin limpieza quemarás presupuesto.",
    },
  ],
  sections: [
    {
      title: "Concepto de la lista de keywords",
      level: 2,
      paras: [
        "Empieza por servicios, productos y lenguaje del cliente — cómo buscan, no cómo nombráis el producto por dentro. Añade sinónimos y modificadores comerciales: «precio», «pedir», «con entrega», «barato» — y siembra negativos para demanda informativa y fuera de oferta.",
        "No tires keywords a un grupo solo porque comparten una palabra. Agrupa frases con la misma intención y un landing que encaje. Si no, el anuncio no dice nada y la página no cuadra con el clic.",
      ],
      lists: [
        {
          intro: "Capas de keywords:",
          items: [
            "núcleo de la oferta",
            "sinónimos y jerga del nicho",
            "geo, si hace falta",
            "colas de modificadores (plazo, material, segmento)",
            "negativos desde términos de búsqueda",
          ],
        },
      ],
      links: [
        {
          label: "Bases de la cuenta de Ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
        {
          label: "Núcleo semántico (SEO)",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Tipos de coincidencia y estructura de grupos",
      level: 2,
      paras: [
        "El tipo de coincidencia controla cuán amplio puede mapear el sistema una consulta a una keyword. Más alcance implica un control más estricto de términos de búsqueda y negativos — o pagas por «casi» en vez de «la cosa».",
        "Al inicio ayuda una estructura clara: un grupo — una necesidad, un set de keywords apretado, un anuncio relevante y un landing que encaje. Cuando hay datos, amplía con cuidado donde la economía ya funciona.",
      ],
      lists: [
        {
          intro: "Para cada grupo deja fijo:",
          items: [
            "intención del usuario",
            "geografía",
            "negativos",
            "página de destino",
            "objetivo de conversión y CPA objetivo",
          ],
        },
      ],
      tables: [
        {
          caption: "Alcance vs control (simplificado)",
          headers: ["Enfoque", "Ventaja", "Riesgo"],
          rows: [
            ["Exacta / frase", "Calidad de clic más fácil", "Puedes quedarte corto de alcance"],
            ["Amplia sin negativos", "Volumen rápido", "Basura y CPA caro"],
            ["Amplia + revisión estricta de consultas", "Escala con control", "Pide disciplina con informes"],
          ],
        },
      ],
    },
    {
      title: "Stats del Planner y checks de intención",
      level: 2,
      paras: [
        "La frecuencia y la competencia del Planner son una brújula de borrador, no un veredicto. Tras el lanzamiento, la fuente principal de decisión es el informe de términos de búsqueda: wording real, impresiones tiradas y candidatos a negativo.",
        "Las stats no garantizan ventas. Cruza con margen, geo, estacionalidad y si el landing puede responder la consulta con honestidad. Alto volumen a margen cero no es una keyword de oro.",
      ],
      lists: [
        {
          intro: "Práctica antes de escalar:",
          items: [
            "probar con un presupuesto pequeño",
            "revisión semanal de términos de búsqueda",
            "cadena keyword → anuncio → landing",
            "no inflar grupos sin estructura",
          ],
        },
      ],
      links: [
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Negativos y el informe de términos de búsqueda",
      level: 2,
      paras: [
        "Los negativos son el filtro sin el cual las keywords amplias — e incluso las «medias» — queman gasto. Mantén listas a nivel de campaña y de grupo: compartidas (empleos, gratis, DIY — si eso no es tu oferta) y específicas del nicho.",
        "Semanal (o más a menudo con gasto alto), revisa términos de búsqueda: qué añadir como keywords, qué negar, qué anuncios y URLs fallaron el clic. Eso es rutina de rendimiento — no un ajuste de lanzamiento de una sola vez.",
      ],
      lists: [
        {
          intro: "Basura típica para negativos (ajusta al nicho):",
          items: [
            "informativo «qué es / DIY»",
            "marcas de competidores si no quieres interceptar",
            "empleos y formación si vendes un servicio",
            "gratis / descargar — si no tienes freemium",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Negativos demasiado agresivos cortan long-tail útil. Reúne datos primero y luego aprieta — sobre todo en frases que ya convierten.",
        },
      ],
    },
    {
      title: "Encaje con anuncio y landing",
      level: 2,
      paras: [
        "Una keyword sin un anuncio y una página relevantes es gasto tirado. El titular y el copy deben prometer lo que la persona buscó; el landing debe cerrar esa oferta — no soltarlos en la home del catálogo.",
        "Intenciones distintas piden URLs distintas o al menos bloques/anclas distintos. Mandar toda la demanda a una hoja «de todo» suele ser peor que varios landings estrechos.",
      ],
      lists: [
        {
          intro: "Revisa antes de aprobar un grupo:",
          items: [
            "la keyword se oye en el anuncio",
            "la URL carga y es rápida en móvil",
            "CTA y formulario se ven sin una quest",
            "no hay choque con precio/condiciones del anuncio",
          ],
        },
      ],
      links: [
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
        {
          label: "Optimización de la tasa de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Errores habituales",
      level: 2,
      paras: [
        "Clásicos: una lista gigante sin agrupar; ignorar negativos; keywords de «todo» en un solo landing; copiar un set SEO sin limpieza para ads; pujas sin tracking de conversiones.",
        "No gires pujas y keywords cada día sin datos. Primero asegúrate de que los goals de analítica disparan y que ventas vee calidad de leads — o optimizarás un CTR bonito.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "pujas sin analítica de conversiones",
            "coincidencia amplia sin control de consultas",
            "anuncios que no encajan con la keyword",
            "mezclar demanda de marca y genérica sin campañas aparte",
          ],
        },
      ],
      links: [
        {
          label: "Pujas en Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Optimización tras el lanzamiento",
      level: 2,
      paras: [
        "Lanza un test con un presupuesto que pueda reunir stats, y revisa informes con calendario. Añade negativos, afina grupos y mejora la página por motivos observados — no «todo a la vez tras un mal día».",
        "Juzga la campaña por conversiones y su calidad — no por clics o posición media. Si los leads no encajan con ventas, el problema puede ser la consulta, la oferta o el recorrido — las keywords son solo una palanca.",
      ],
      lists: [
        {
          intro: "Control semanal:",
          items: [
            "términos de búsqueda",
            "gasto, CPA y conteo de conversiones",
            "cuota de irrelevante",
            "encaje anuncio–landing",
            "qué escalar, qué cortar",
          ],
        },
      ],
      notes: [
        {
          title: "SEO vs Ads",
          kind: "tip",
          text: "Ads dan un test rápido de demanda. Lo orgánico de un núcleo crece aparte: preparación del sitio — a grandes rasgos semanas a un mes; la cuota de primera página del núcleo se planifica típicamente a dos a seis meses de trabajo tras el arranque.",
        },
      ],
    },
  ],
  related: [
    "reklamnyy-kabinet",
    "chastotnost-zaprosov",
    "semanticheskoe-yadro",
    "tekst-lendinga",
    "stavki-direkt",
    "optimizatsiya-konversii",
  ],
};

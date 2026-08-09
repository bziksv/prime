import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-yandeks-direkt — same structure as RU JSON. */
export const klyuchiYandeksDirektEn: BlogPost = {
  slug: "klyuchi-yandeks-direkt",
  title: "How many keywords you need in Yandex Direct",
  date: "2020-12-02",
  category: "Paid search",
  cover: "/images/blog/klyuchi-yandeks-direkt/cover-en.webp",
  excerpt:
    "How to size keyword coverage for Search and the Yandex Advertising Network (YAN) in Direct: campaign goal, assortment, ad-group limits, and profitability — without a “universal keyword count” or mixing it up with SEO.",
  lead: [
    "There’s no universal “right number” of keywords in Yandex Direct: volume depends on goal, assortment, region, and channel (Search or YAN). Few phrases ≠ automatically cheaper; many phrases ≠ automatically more profitable.",
    "Below: what to base the keyword set on, how Search differs from YAN, and how not to bloat a campaign without analytics. Negatives and bid strategies live in related articles. Account limits (phrases per group, length) — check Help: they’ve changed.",
  ],
  faq: [
    {
      q: "Is there a “N keywords per store” norm?",
      a: "No. A wide catalog needs more groups and phrases; a narrow service — a compact set. Watch demand coverage and KPIs, not a row counter.",
    },
    {
      q: "Fewer keywords = lower spend?",
      a: "Not necessarily. A narrow set can cost more per click and leave demand to competitors. Profitability matters — not “saving on count.”",
    },
    {
      q: "How many phrases in one group?",
      a: "Keep the group thematically tight. Technical account limits exist — check current numbers in Direct Help, not 2020 guides.",
    },
    {
      q: "Same keyword set for Search and YAN?",
      a: "No. Search cares about query wording; YAN uses topical, often broader signals matched to site content.",
    },
    {
      q: "Bid on competitor brands?",
      a: "Possible, but carefully: higher CPC, questionable clicks, reputation and legal risk. Track separately from your own brand.",
    },
    {
      q: "Is this about an SEO keyword set?",
      a: "Demand meaning overlaps partly, but Direct is paid impressions with negatives, grouping, and bids. Don’t confuse it with organic.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a goal (lead/sale), a narrow commercial set, negatives, and separate Search/YAN campaigns — then expand from stats.",
    },
  ],
  sections: [
    {
      title: "Goal first, keyword volume second",
      level: 2,
      paras: [
        "Advertising a full e-commerce catalog means broad semantics and many groups by category/SKU. Pushing a narrow service or your brand — a compact phrase set.",
        "The goal also drives format mix: Search, YAN, different ad types. Without a goal, “collect more keywords” only makes management harder.",
      ],
      lists: [
        {
          intro: "Volume is driven by:",
          items: [
            "assortment width and number of landings",
            "region and delivery geography",
            "team experience (a wide set is harder to prune)",
            "budget and willingness to test",
            "channel: Search vs YAN",
          ],
        },
      ],
    },
    {
      title: "Search: how to think about count",
      level: 2,
      paras: [
        "In Search the user writes the query: account for synonyms, “specialist vs service,” regional modifiers, and cut irrelevance with negatives.",
        "High-volume generic phrases without region and qualifiers are often expensive and broad. Narrow commercial and local queries are easier to tie to the offer.",
        "Set budget with campaign/weekly caps and watch KPIs (CPA, ROAS/DRR) — not “how many keywords fit.” Minimum account-funding thresholds in the UI have changed — use the account as the guide.",
      ],
      notes: [
        {
          title: "Don’t confuse with SEO",
          kind: "tip",
          text: "Keywords in Direct don’t raise organic rankings by themselves. This is paid demand management.",
        },
      ],
      links: [
        {
          label: "Negative keywords in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "YAN: a different keyword set",
      level: 2,
      paras: [
        "In the Yandex Advertising Network, impressions tie to topics and interests around site content. Shorter topical phrases often work better than long “buy X in city cheap.”",
        "Take overlapping audience themes (not only direct competitors), test expansion, and cut placements/conditions from the stats.",
        "One phrase is too little for an experiment; bloating the set with no reports is also a mistake. Track by groups and conversions.",
      ],
      links: [
        {
          label: "YAN and Metrica",
          href: "/en/blog/rsya-metrika/",
        },
      ],
    },
    {
      title: "Practice and control",
      level: 2,
      paras: [
        "Group phrases by theme and landing. Watch group limits in Direct Help.",
        "Regularly review search terms, negative the junk, and strengthen what drives target actions. Cut or shrink budget on unprofitable combinations.",
        "Experience matters: a wide set without analytics burns money faster than it helps.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "volume = goal + assortment — not a “magic N”",
            "Search and YAN — different set logic",
            "profitability beats saving on phrase count",
            "account limits — from current Help",
            "negatives and reports are required",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Build a set for one goal and one landing, run a narrow Search test, review queries in a week, then expand — clearer than loading “every niche keyword” on day one.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "rsya-metrika",
    "stavki-direkt",
    "semanticheskoe-yadro",
    "kontekst-i-seo",
  ],
};

/** ES overlay for klyuchi-yandeks-direkt — same structure as RU JSON. */
export const klyuchiYandeksDirektEs: BlogPost = {
  slug: "klyuchi-yandeks-direkt",
  title: "Cuántas keywords necesitas en Yandex Direct",
  date: "2020-12-02",
  category: "Paid search",
  cover: "/images/blog/klyuchi-yandeks-direkt/cover.webp",
  excerpt:
    "Cómo dimensionar la cobertura de keywords para Búsqueda y la Red Publicitaria de Yandex (YAN) en Direct: objetivo de campaña, surtido, límites de grupos de anuncios y rentabilidad — sin un «conteo universal de keywords» ni mezclarlo con SEO.",
  lead: [
    "No hay un «número correcto» universal de keywords en Yandex Direct: el volumen depende del objetivo, el surtido, la región y el canal (Búsqueda o YAN). Pocas frases ≠ automáticamente más barato; muchas frases ≠ automáticamente más rentable.",
    "Abajo: en qué basar el set de keywords, en qué se diferencia Búsqueda de YAN y cómo no hinchar una campaña sin analytics. Negatives y estrategias de puja viven en artículos relacionados. Límites de cuenta (frases por grupo, longitud) — mira la Help: han cambiado.",
  ],
  faq: [
    {
      q: "¿Hay una norma de «N keywords por tienda»?",
      a: "No. Un catálogo amplio necesita más grupos y frases; un servicio estrecho — un set compacto. Mira cobertura de demanda y KPIs, no un contador de filas.",
    },
    {
      q: "¿Menos keywords = menos gasto?",
      a: "No necesariamente. Un set estrecho puede costar más por clic y dejar demanda a competidores. Importa la rentabilidad — no «ahorrar en el conteo».",
    },
    {
      q: "¿Cuántas frases en un grupo?",
      a: "Mantén el grupo temáticamente cerrado. Hay límites técnicos de cuenta — mira cifras actuales en la Help de Direct, no guías de 2020.",
    },
    {
      q: "¿El mismo set de keywords para Búsqueda y YAN?",
      a: "No. En Búsqueda importa el wording de la query; YAN usa señales tópicas, a menudo más amplias, alineadas al contenido del sitio.",
    },
    {
      q: "¿Pujar por marcas de competidores?",
      a: "Se puede, pero con cuidado: CPC más alto, clics dudosos, riesgo reputacional y legal. Trackea aparte de tu propia marca.",
    },
    {
      q: "¿Esto va de un set de keywords SEO?",
      a: "El sentido de la demanda se solapa en parte, pero Direct son impresiones de pago con negatives, grouping y pujas. No lo confundas con orgánico.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Con un objetivo (lead/venta), un set comercial estrecho, negatives y campañas Búsqueda/YAN separadas — luego expandir desde las stats.",
    },
  ],
  sections: [
    {
      title: "Primero el objetivo, después el volumen de keywords",
      level: 2,
      paras: [
        "Anunciar un catálogo e-commerce completo implica semántica amplia y muchos grupos por categoría/SKU. Empujar un servicio estrecho o tu marca — un set compacto de frases.",
        "El objetivo también marca el mix de formatos: Búsqueda, YAN, distintos tipos de anuncio. Sin objetivo, «recolectar más keywords» solo dificulta la gestión.",
      ],
      lists: [
        {
          intro: "El volumen lo impulsan:",
          items: [
            "amplitud del surtido y número de landings",
            "región y geografía de entrega",
            "experiencia del equipo (un set amplio es más duro de podar)",
            "presupuesto y ganas de testear",
            "canal: Búsqueda vs YAN",
          ],
        },
      ],
    },
    {
      title: "Búsqueda: cómo pensar el conteo",
      level: 2,
      paras: [
        "En Búsqueda el usuario escribe la query: cuenta sinónimos, «especialista vs servicio», modificadores regionales y corta irrelevancia con negatives.",
        "Frases genéricas de alto volumen sin región ni calificadores suelen ser caras y amplias. Queries comerciales y locales estrechas son más fáciles de atar a la oferta.",
        "Fija presupuesto con caps de campaña/semana y mira KPIs (CPA, ROAS/DRR) — no «cuántas keywords caben». Los umbrales mínimos de funding en la UI han cambiado — usa la cuenta como guía.",
      ],
      notes: [
        {
          title: "No lo confundas con SEO",
          kind: "tip",
          text: "Las keywords en Direct no suben por sí solas el ranking orgánico. Esto es gestión de demanda de pago.",
        },
      ],
      links: [
        {
          label: "Negative keywords en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "YAN: un set de keywords distinto",
      level: 2,
      paras: [
        "En la Red Publicitaria de Yandex, las impresiones se atan a temas e intereses alrededor del contenido del sitio. Frases tópicas más cortas suelen funcionar mejor que largas «compra X en ciudad barato».",
        "Toma temas de audiencia solapados (no solo competidores directos), testea expansión y corta placements/condiciones desde las stats.",
        "Una frase es poco para un experimento; hinchar el set sin informes también es un error. Trackea por grupos y conversiones.",
      ],
      links: [
        {
          label: "YAN y Métrica",
          href: "/es/blog/rsya-metrika/",
        },
      ],
    },
    {
      title: "Práctica y control",
      level: 2,
      paras: [
        "Agrupa frases por tema y landing. Mira los límites de grupo en la Help de Direct.",
        "Revisa con regularidad search terms, negativea la basura y refuerza lo que empuja acciones target. Corta o baja presupuesto en combinaciones no rentables.",
        "La experiencia importa: un set amplio sin analytics quema dinero más rápido de lo que ayuda.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "volumen = objetivo + surtido — no un «N mágico»",
            "Búsqueda y YAN — lógica de set distinta",
            "rentabilidad gana a ahorrar en el conteo de frases",
            "límites de cuenta — de la Help actual",
            "negatives e informes son obligatorios",
          ],
        },
      ],
      links: [
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Arma un set para un objetivo y un landing, corre un test estrecho de Búsqueda, revisa queries en una semana y luego expande — más claro que cargar «cada keyword del nicho» el día uno.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "rsya-metrika",
    "stavki-direkt",
    "semanticheskoe-yadro",
    "kontekst-i-seo",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for prognoz-trafika-google-ads — same structure as RU JSON. */
export const prognozTrafikaGoogleAdsEn: BlogPost = {
  slug: "prognoz-trafika-google-ads",
  title: "Traffic forecast for Google Ads search campaigns",
  date: "2019-07-10",
  category: "Digital marketing",
  cover: "/images/blog/prognoz-trafika-google-ads/cover-en.webp",
  excerpt:
    "How to estimate search demand and budget in Google Ads: gathering keywords in Keyword Planner, cleaning, CTR/CPC by groups, and a budget formula — without the illusion of an exact media plan.",
  lead: [
    "Before launching search in Google Ads it helps to know: is there enough demand for the goal, what order of clicks, and which budget covers the niche. Keyword Planner and a spreadsheet with assumptions give a range — not a guarantee.",
    "Below: gather, clean, frequency, CTR, CPC, budget. An organic forecast is in a separate piece; the Ads UI changes, the calculation logic stays.",
  ],
  faq: [
    {
      q: "How is this different from an SEO traffic forecast?",
      a: "Here the model builds around auction, bids, and ad impressions. In SEO — organic positions and SERP CTR. The numbers aren’t interchangeable.",
    },
    {
      q: "How accurate is Keyword Planner?",
      a: "A cue with error. Better on high-volume; weaker on long-tail and new niches. Check against account fact when you have it.",
    },
    {
      q: "Why not paste all starter keywords comma-separated?",
      a: "The tool often narrows variant output. Gathering one base phrase at a time is usually fuller — an old observation; verify on your topic.",
    },
    {
      q: "Which CTR should I assume?",
      a: "Not a universal “15% for everyone”. Take fact from similar campaigns/niche or calculate by groups (brand / commercial / info).",
    },
    {
      q: "Is there a simple budget formula?",
      a: "Simplified: impressions × CTR × CPC. Then CR and average order value for revenue/CPA. Group queries with different economics.",
    },
    {
      q: "Do I need goals before the media plan?",
      a: "Yes. Without KPIs the plan becomes “how many clicks we’ll buy”, not “will we hit CPA/ROMI”.",
    },
  ],
  sections: [
    {
      title: "Gathering and cleaning semantics",
      level: 2,
      paras: [
        "Build a full pool of relevant masks: different starter bases, language, and geo. In Keyword Planner expand with variants one input at a time and export a plan with stats (frequency, competition, CPC cue).",
        "Manually remove the most frequent off-target terms (“free”, rival brands, wrong region/product). Full cleaning of every long-tail at forecast stage isn’t required — cutting fat junk matters more.",
      ],
      links: [
        {
          label: "Google Ads keywords",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Frequency and grouping",
      level: 2,
      paras: [
        "Total frequency is demand capacity in the model — not “guaranteed clicks”. Count impressions/frequency by groups: commercial, info, adjacent — they have different CTR and CR.",
        "Example: “office rental” next to coworking can be pricier and weaker on conversion than direct service queries — in one pile the budget lies.",
      ],
    },
    {
      title: "CTR, CPC, and budget",
      level: 2,
      paras: [
        "CTR: better from your own / industry fact without rival brands than a “country average”. CPC: from Keyword Planner (cues by impression-share zones) or live stats; aiming “always #1” inflates cost a lot.",
        "Demand-coverage budget ≈ impressions × CTR × CPC. Cost grows nonlinearly at scale. Account for seasonality, share of new queries, and attribution when estimating revenue.",
      ],
      lists: [
        {
          intro: "Assumptions at the start:",
          items: [
            "not a goal of “always absolute #1 only”",
            "the campaign will be set up well",
            "bid adjustments refine after launch",
            "a budget range beats one figure",
          ],
        },
      ],
      notes: [
        {
          title: "Accuracy",
          kind: "tip",
          text: "Semantics quality and grouping matter more than a “pretty” Planner table. After launch, check the forecast against fact and update coefficients.",
        },
      ],
      links: [
        {
          label: "SEO traffic forecast",
          href: "/en/blog/prognoz-trafika/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "A Google Ads search forecast is semantics → cleaning → groups → CTR/CPC → budget with assumptions. Lock a range and a goal before the numbers; Keyword Planner helps estimate order of magnitude — it doesn’t promise the auction result.",
  ],
  related: [
    "prognoz-trafika",
    "klyuchi-google-ads",
    "metriki-reklamy",
    "performance-marketing",
    "roi-marketinga",
    "reklamnyy-kabinet",
  ],
};

/** ES overlay for prognoz-trafika-google-ads — same structure as RU JSON / EN. */
export const prognozTrafikaGoogleAdsEs: BlogPost = {
  slug: "prognoz-trafika-google-ads",
  title: "Pronóstico de tráfico para campañas de búsqueda en Google Ads",
  date: "2019-07-10",
  category: "Digital marketing",
  cover: "/images/blog/prognoz-trafika-google-ads/cover-es.webp",
  excerpt:
    "Cómo estimar demanda de búsqueda y presupuesto en Google Ads: reunir keywords en Keyword Planner, limpiar, CTR/CPC por grupos y una fórmula de presupuesto — sin la ilusión de un media plan exacto.",
  lead: [
    "Antes de lanzar búsqueda en Google Ads ayuda saber: ¿hay demanda suficiente para la meta, qué orden de clics y qué presupuesto cubre el nicho? Keyword Planner y una hoja con supuestos dan un rango — no una garantía.",
    "Abajo: reunir, limpiar, frecuencia, CTR, CPC, presupuesto. Un pronóstico orgánico está en otra pieza; la UI de Ads cambia, la lógica del cálculo se mantiene.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de un pronóstico de tráfico SEO?",
      a: "Aquí el modelo se arma alrededor de subasta, pujas e impresiones de ads. En SEO — posiciones orgánicas y CTR de la SERP. Los números no son intercambiables.",
    },
    {
      q: "¿Qué tan preciso es Keyword Planner?",
      a: "Una pista con error. Mejor en alto volumen; más débil en long-tail y nichos nuevos. Contrasta con el hecho de la cuenta cuando lo tengas.",
    },
    {
      q: "¿Por qué no pegar todas las keywords starter separadas por comas?",
      a: "La herramienta a menudo estrecha la salida de variantes. Reunir una frase base a la vez suele ser más completo — una observación antigua; verifícalo en tu tema.",
    },
    {
      q: "¿Qué CTR debo asumir?",
      a: "No un «15% para todos» universal. Toma hecho de campañas/nicho similares o calcula por grupos (marca / comercial / info).",
    },
    {
      q: "¿Hay una fórmula simple de presupuesto?",
      a: "Simplificado: impresiones × CTR × CPC. Luego CR y ticket medio para revenue/CPA. Agrupa consultas con economía distinta.",
    },
    {
      q: "¿Hacen falta metas antes del media plan?",
      a: "Sí. Sin KPIs el plan se vuelve «cuántos clics compraremos», no «¿golpearemos CPA/ROMI?».",
    },
  ],
  sections: [
    {
      title: "Reunir y limpiar semántica",
      level: 2,
      paras: [
        "Arma un pool completo de máscaras relevantes: distintas bases starter, idioma y geo. En Keyword Planner expande con variantes un input a la vez y exporta un plan con stats (frecuencia, competencia, pista de CPC).",
        "Quita a mano los términos off-target más frecuentes («gratis», marcas rivales, región/producto incorrectos). Limpiar a fondo cada long-tail en la etapa de pronóstico no es obligatorio — cortar basura gruesa importa más.",
      ],
      links: [
        {
          label: "Keywords de Google Ads",
          href: "/es/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Frecuencia y agrupación",
      level: 2,
      paras: [
        "La frecuencia total es capacidad de demanda en el modelo — no «clics garantizados». Cuenta impresiones/frecuencia por grupos: comercial, info, adyacente — tienen CTR y CR distintos.",
        "Ejemplo: «alquiler de oficina» junto a coworking puede ser más caro y más débil en conversión que consultas directas de servicio — en un solo montón el presupuesto miente.",
      ],
    },
    {
      title: "CTR, CPC y presupuesto",
      level: 2,
      paras: [
        "CTR: mejor desde tu propio hecho / de industria sin marcas rivales que un «promedio del país». CPC: desde Keyword Planner (pistas por zonas de impression-share) o stats en vivo; apuntar a «siempre #1» infla mucho el coste.",
        "Presupuesto de cobertura de demanda ≈ impresiones × CTR × CPC. El coste crece de forma no lineal al escalar. Cuenta estacionalidad, cuota de consultas nuevas y atribución al estimar revenue.",
      ],
      lists: [
        {
          intro: "Supuestos al inicio:",
          items: [
            "no una meta de «siempre solo #1 absoluto»",
            "la campaña estará bien montada",
            "los ajustes de puja se afinan tras el lanzamiento",
            "un rango de presupuesto gana a una sola cifra",
          ],
        },
      ],
      notes: [
        {
          title: "Precisión",
          kind: "tip",
          text: "La calidad de la semántica y la agrupación importan más que una tabla «bonita» del Planner. Tras el lanzamiento, contrasta el pronóstico con el hecho y actualiza coeficientes.",
        },
      ],
      links: [
        {
          label: "Pronóstico de tráfico SEO",
          href: "/es/blog/prognoz-trafika/",
        },
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "Un pronóstico de búsqueda en Google Ads es semántica → limpieza → grupos → CTR/CPC → presupuesto con supuestos. Fija un rango y una meta antes de los números; Keyword Planner ayuda a estimar el orden de magnitud — no promete el resultado de la subasta.",
  ],
  related: [
    "prognoz-trafika",
    "klyuchi-google-ads",
    "metriki-reklamy",
    "performance-marketing",
    "roi-marketinga",
    "reklamnyy-kabinet",
  ],
};

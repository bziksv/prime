import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-reklamnoy-kampanii — same structure as RU JSON. */
export const oshibkiReklamnoyKampaniiEn: BlogPost = {
  slug: "oshibki-reklamnoy-kampanii",
  title: "10 mistakes when running a paid search campaign",
  date: "2018-08-06",
  category: "Digital marketing",
  cover: "/images/blog/oshibki-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "Paid search with no demand, no competitor review, an unrealistic budget, weak limits, thin keywords, irrelevant ads, bad geo, unused extensions, no ongoing management, and mixing Search with Display.",
  lead: [
    "Typical paid-search mistakes burn budget before clean stats arrive: advertising what nobody searches, keywords by gut feel, one setup for Search and Display at once.",
    "Below: ten misses from audit practice and how to avoid them. Direct and Google Ads UIs change; the checklist logic stays. Budget figures and “normal” test length depend on the niche — a guide, not dogma.",
  ],
  faq: [
    {
      q: "No search demand — what then?",
      a: "Don’t burn search ads on zero-volume queries. Look at display, social, content, and interest networks if the product is new or niche.",
    },
    {
      q: "How much do you need for a test?",
      a: "Often weeks to a couple of months with a sane daily cap so stats can form. “Max leads for pennies from day one” is unrealistic in a competitive niche.",
    },
    {
      q: "One keyword — one ad?",
      a: "Aim for high relevance between cluster and ad. The rigid “exactly one keyword” formula is outdated in smart campaigns, but the meaning is the same: don’t dump everything in one pile.",
    },
    {
      q: "Search and Display together?",
      a: "Usually split: different semantics, creatives, bids, and KPIs. Mixing breaks optimization.",
    },
    {
      q: "Do you need ad extensions?",
      a: "Yes where available: they raise visibility and add detail. Check current types in the account.",
    },
    {
      q: "Can you set ads and forget them?",
      a: "No. You need negatives, off-target cleanup, creative tests, and limit control — or budget leaks.",
    },
  ],
  sections: [
    {
      title: "Demand, competitors, and budget",
      level: 2,
      paras: [
        "Launching a product with no search demand is a waste: there is no keyword set to buy. For new products, reach formats and networks often work better than hot search alone.",
        "Without reviewing competitor ads and offers it’s easy to lose on CPC and promise. Watch the results, USP, and landing — not only the bid.",
        "Inflated expectations on a tiny budget (“many leads at once in a competitive niche”) kill the test. Paid search needs regular spend and one to several weeks or months to learn — not a one-off payment. Daily campaign caps keep you from burning the whole budget in a day.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "are there real queries",
            "what competitors promise",
            "what daily cap and test KPI",
            "landing handles mobile traffic",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Keywords, ads, and geo",
      level: 2,
      paras: [
        "Weak semantics: jumping straight to head terms and near-topics without negatives. Start with tighter clusters, gather stats, expand on purpose.",
        "An irrelevant ad for the query drops quality and raises cost. Keep the chain query → ad → landing.",
        "Broken geography: impressions where you don’t deliver or serve, or a narrow city when nationwide shipping makes sense. Set geo to logistics and margin.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "ROAS",
          href: "/en/blog/roas/",
        },
      ],
    },
    {
      title: "Management, extensions, and strategies",
      level: 2,
      paras: [
        "Unused extensions and extra formats are missed visibility. Turn on what’s current in the account — sitelinks, callouts, images, and similar.",
        "“Set and forget” is a mistake: without ongoing work, off-target clicks grow and ads go stale.",
        "Different strategies for Search and Display: don’t copy one setup onto both channels. Split campaigns and KPIs.",
      ],
      notes: [
        {
          title: "Link to an audit",
          kind: "tip",
          text: "If chaos has already piled up, it’s easier to audit structure and economics than to tweak a bad launch.",
        },
      ],
    },
  ],
  closing: [
    "Most paid-search fails aren’t “expensive clicks” — they’re a start without demand, budget, and relevance, plus no ongoing management. Close these ten points before scaling bids.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "roas",
    "prognoz-trafika-google-ads",
    "performance-marketing",
    "trafik-bez-lidov",
  ],
};

/** ES overlay for oshibki-reklamnoy-kampanii — same structure as RU JSON / EN. */
export const oshibkiReklamnoyKampaniiEs: BlogPost = {
  slug: "oshibki-reklamnoy-kampanii",
  title: "10 errores al correr una campaña de paid search",
  date: "2018-08-06",
  category: "Digital marketing",
  cover: "/images/blog/oshibki-reklamnoy-kampanii/cover-es.webp",
  excerpt:
    "Paid search sin demanda, sin revisión de competidores, un presupuesto irrealista, límites débiles, keywords finas, ads irrelevantes, geo malo, extensiones sin usar, sin gestión continua y mezclar Search con Display.",
  lead: [
    "Los errores típicos de paid search queman presupuesto antes de que lleguen stats limpias: anunciar lo que nadie busca, keywords a ojo, un solo setup para Search y Display a la vez.",
    "Abajo: diez misses de la práctica de auditoría y cómo evitarlos. Las UIs de Direct y Google Ads cambian; la lógica del checklist se mantiene. Las cifras de presupuesto y la duración «normal» del test dependen del nicho — una guía, no dogma.",
  ],
  faq: [
    {
      q: "Sin demanda de búsqueda — ¿entonces qué?",
      a: "No quemes ads de búsqueda en consultas de volumen cero. Mira display, social, contenido y redes de interés si el producto es nuevo o de nicho.",
    },
    {
      q: "¿Cuánto hace falta para un test?",
      a: "A menudo semanas a un par de meses con un tope diario sensato para que se formen las stats. «Máximos leads por céntimos desde el día uno» es irrealista en un nicho competitivo.",
    },
    {
      q: "¿Una keyword — un ad?",
      a: "Apunta a alta relevancia entre cluster y ad. La fórmula rígida «exactamente una keyword» está desfasada en campañas smart, pero el sentido es el mismo: no tires todo en un montón.",
    },
    {
      q: "¿Search y Display juntos?",
      a: "Suele partirse: semántica, creativos, pujas y KPIs distintos. Mezclar rompe la optimización.",
    },
    {
      q: "¿Hacen falta extensiones de ad?",
      a: "Sí donde estén disponibles: suben visibilidad y añaden detalle. Comprueba los tipos actuales en la cuenta.",
    },
    {
      q: "¿Se pueden montar ads y olvidarlos?",
      a: "No. Hacen falta negatives, limpieza off-target, tests de creativo y control de límites — o el presupuesto se filtra.",
    },
  ],
  sections: [
    {
      title: "Demanda, competidores y presupuesto",
      level: 2,
      paras: [
        "Lanzar un producto sin demanda de búsqueda es un desperdicio: no hay conjunto de keywords que comprar. Para productos nuevos, los formatos de reach y las redes a menudo funcionan mejor que solo búsqueda caliente.",
        "Sin revisar ads y ofertas de competidores es fácil perder en CPC y promesa. Mira resultados, USP y landing — no solo la puja.",
        "Expectativas infladas con un presupuesto minúsculo («muchos leads de golpe en un nicho competitivo») matan el test. Paid search necesita gasto regular y de una a varias semanas o meses para aprender — no un pago único. Los caps diarios de campaña evitan quemar todo el presupuesto en un día.",
      ],
      lists: [
        {
          intro: "Antes de empezar:",
          items: [
            "¿hay consultas reales?",
            "qué prometen los competidores",
            "qué tope diario y KPI de test",
            "la landing aguanta tráfico móvil",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría de campaña de ads",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Pronóstico de tráfico Google Ads",
          href: "/es/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Keywords, ads y geo",
      level: 2,
      paras: [
        "Semántica débil: saltar directo a head terms y near-topics sin negatives. Empieza con clusters más estrechos, reúne stats, expande a propósito.",
        "Un ad irrelevante para la consulta baja la calidad y sube el coste. Mantén la cadena consulta → ad → landing.",
        "Geografía rota: impresiones donde no entregas ni atiendes, o una ciudad estrecha cuando el envío nacional tiene sentido. Fija el geo según logística y margen.",
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "ROAS",
          href: "/es/blog/roas/",
        },
      ],
    },
    {
      title: "Gestión, extensiones y estrategias",
      level: 2,
      paras: [
        "Extensiones y formatos extra sin usar son visibilidad perdida. Activa lo vigente en la cuenta — sitelinks, callouts, imágenes y similares.",
        "«Montar y olvidar» es un error: sin trabajo continuo crecen los clics off-target y los ads se quedan viejos.",
        "Estrategias distintas para Search y Display: no copies un setup a ambos canales. Parte campañas y KPIs.",
      ],
      notes: [
        {
          title: "Vínculo con una auditoría",
          kind: "tip",
          text: "Si el caos ya se ha acumulado, es más fácil auditar estructura y economía que retocar un mal lanzamiento.",
        },
      ],
    },
  ],
  closing: [
    "La mayoría de los fallos de paid search no son «clics caros» — son un inicio sin demanda, presupuesto y relevancia, más la falta de gestión continua. Cierra estos diez puntos antes de escalar pujas.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "roas",
    "prognoz-trafika-google-ads",
    "performance-marketing",
    "trafik-bez-lidov",
  ],
};

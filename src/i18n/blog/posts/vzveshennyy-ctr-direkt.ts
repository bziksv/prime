import type { BlogPost } from "../../../data/blog";

/** EN overlay for vzveshennyy-ctr-direkt — same structure as RU JSON. */
export const vzveshennyyCtrDirektEn: BlogPost = {
  slug: "vzveshennyy-ctr-direkt",
  title: "Weighted CTR in Yandex Direct: why compare creatives differently",
  date: "2018-07-05",
  category: "Paid search",
  cover: "/images/blog/vzveshennyy-ctr-direkt/cover-en.webp",
  excerpt:
    "What weighted CTR, weighted impressions, and traffic volume mean in Direct reports — how to compare ads on different positions without raw CTR misleading you.",
  lead: [
    "Raw CTR treats clicks and impressions the same even when one ad sat on a richer position and another sat lower. Yandex Direct’s Report Wizard added — and kept — metrics that account for traffic volume: weighted impressions and weighted CTR (wCTR).",
    "Below: what traffic volume means, how to read wCTR when comparing creatives, and why ROI still beats click-through rate. The “65 / 75 / 85 / 100” coefficients from 2018 guides illustrate the logic, not a live weight table: check columns in the current Report Wizard.",
  ],
  faq: [
    {
      q: "How is wCTR better than raw CTR?",
      a: "It normalizes impressions by position and traffic-volume value. Easier to compare creatives that ran in different places.",
    },
    {
      q: "Does wCTR replace CPA?",
      a: "No. wCTR is click-through rate with a position correction. Money and leads come from conversions and goal cost.",
    },
    {
      q: "What is traffic volume?",
      a: "An estimate of how much relative traffic a position or block delivers. Raising a bid can lift volume — that’s potential, not a lead guarantee.",
    },
    {
      q: "Is it search-only?",
      a: "Weighting helps most in search with different positions. In networks, also compare placements and show conditions.",
    },
    {
      q: "Where do you see the metrics?",
      a: "In Yandex Direct’s Report Wizard — add the columns. Names may have changed; look for weighted CTR and related metrics.",
    },
  ],
  sections: [
    {
      title: "Why raw CTR lies",
      level: 2,
      paras: [
        "An ad in a higher slot gets more attention and often more clicks with the same copy. CTR rises from position alone, not because the creative beats a lower rival.",
        "If you compare two formats or groups with different average traffic volume, the raw-CTR “winner” may actually be weaker on message.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Traffic volume and weighted impressions",
      level: 2,
      paras: [
        "Traffic volume is a coefficient for how valuable a position is versus the max. Average won volume shows potential: room to grow via bid or quality, or you’re near the ceiling.",
        "Weighted impressions fold that volume in: a show on a more valuable slot weighs more. That levels the click-through comparison.",
      ],
      notes: [
        {
          title: "Don’t confuse with business results",
          kind: "tip",
          text: "High traffic volume without conversions means expensive impressions. Tie it to Metrica goals.",
        },
      ],
      links: [
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "How the wCTR idea works",
      level: 2,
      paras: [
        "Simply put: clicks are related to weighted impressions, not raw ones. Historical examples used weights like 100 for the highest slot and less below — so an ad with less “position traffic” but a strong response wouldn’t lose visually in the table.",
        "In the current account UI the formula and column set may differ; the normalization idea is what matters. Exact definitions are in Yandex Help for reports.",
      ],
      tables: [
        {
          caption: "Comparison logic (schema, not a weight price list)",
          headers: ["Situation", "Raw CTR", "wCTR logic"],
          rows: [
            [
              "Highest slot, lots of attention",
              "Often higher",
              "Normalization removes the position bonus",
            ],
            [
              "Lower, less traffic",
              "Often lower",
              "Can win if people click more willingly",
            ],
            [
              "Different formats",
              "Hard to compare head-on",
              "Use wCTR + conversions",
            ],
          ],
        },
      ],
    },
    {
      title: "When to use wCTR in practice",
      level: 2,
      paras: [
        "A/B tests of copy and sitelinks, comparing groups on overlapping queries, judging whether a bid push for volume is worth it. Final decisions still need conversions, CPA, and lead quality.",
        "Don’t optimize the account for wCTR alone: you can grow click-through and waste budget on cheap curious clicks.",
      ],
      lists: [
        {
          intro: "Workflow:",
          items: [
            "build a report by ads or groups",
            "add CTR, wCTR, spend, conversions",
            "cut small stats",
            "keep 1–2 copy hypotheses",
            "check the landing and CPA",
          ],
        },
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Linking to ROI and reports",
      level: 2,
      paras: [
        "wCTR answers: “how well the ad hooks, adjusted for placement.” ROI, ROMI, and CPA answer: “is it worth the money.” Use both layers.",
        "In the Report Wizard combine slices: campaign, group, ad, show condition. Fix a period with comparable data volume.",
      ],
      links: [
        {
          label: "Yandex Direct interface",
          href: "/en/blog/interfeys-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Weighted CTR exists so you don’t crown a creative only for a higher position. Traffic volume is about show potential, not profit.",
        "Check column names in current Direct and always take the conclusion to conversions.",
      ],
    },
  ],
  closing: [
    "Add weighted CTR next to raw CTR and conversions in your Direct report — and compare creatives on different positions more fairly than by raw click-through rate alone.",
  ],
  related: [
    "metriki-reklamy",
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "ab-testy-reklamy",
    "audit-reklamnoy-kampanii",
    "interfeys-yandeks-direkt",
  ],
};

/** ES overlay for vzveshennyy-ctr-direkt — same structure as RU JSON / EN. */
export const vzveshennyyCtrDirektEs: BlogPost = {
  slug: "vzveshennyy-ctr-direkt",
  title: "CTR ponderado en Yandex Direct: por qué comparar creativos de otra forma",
  date: "2018-07-05",
  category: "Paid search",
  cover: "/images/blog/vzveshennyy-ctr-direkt/cover-es.webp",
  excerpt:
    "Qué significan CTR ponderado, impresiones ponderadas y volumen de tráfico en los informes de Direct — cómo comparar anuncios en distintas posiciones sin que el CTR crudo te engañe.",
  lead: [
    "El CTR crudo trata clics e impresiones igual aunque un anuncio estuviera en una posición más rica y otro más abajo. El Report Wizard de Yandex Direct añadió — y mantuvo — métricas que tienen en cuenta el volumen de tráfico: impresiones ponderadas y CTR ponderado (wCTR).",
    "Abajo: qué significa volumen de tráfico, cómo leer wCTR al comparar creativos y por qué el ROI sigue ganando al click-through rate. Los coeficientes «65 / 75 / 85 / 100» de guías de 2018 ilustran la lógica, no una tabla de pesos en vivo: revisa las columnas en el Report Wizard actual.",
  ],
  faq: [
    {
      q: "¿En qué es mejor wCTR que el CTR crudo?",
      a: "Normaliza las impresiones por posición y valor de volumen de tráfico. Más fácil comparar creativos que corrieron en sitios distintos.",
    },
    {
      q: "¿wCTR sustituye al CPA?",
      a: "No. wCTR es click-through rate con corrección de posición. El dinero y los leads vienen de conversiones y coste de meta.",
    },
    {
      q: "¿Qué es el volumen de tráfico?",
      a: "Una estimación de cuánto tráfico relativo entrega una posición o bloque. Subir una puja puede levantar el volumen — eso es potencial, no garantía de lead.",
    },
    {
      q: "¿Solo en búsqueda?",
      a: "La ponderación ayuda más en búsqueda con distintas posiciones. En redes, compara también placements y condiciones de show.",
    },
    {
      q: "¿Dónde se ven las métricas?",
      a: "En el Report Wizard de Yandex Direct — añade las columnas. Los nombres pueden haber cambiado; busca CTR ponderado y métricas relacionadas.",
    },
  ],
  sections: [
    {
      title: "Por qué el CTR crudo miente",
      level: 2,
      paras: [
        "Un anuncio en un slot más alto recibe más atención y a menudo más clics con el mismo copy. El CTR sube solo por la posición, no porque el creativo gane a un rival más abajo.",
        "Si comparas dos formatos o grupos con distinto volumen medio de tráfico, el «ganador» por CTR crudo puede ser en realidad más débil en mensaje.",
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Premium placement en Direct",
          href: "/es/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Volumen de tráfico e impresiones ponderadas",
      level: 2,
      paras: [
        "El volumen de tráfico es un coeficiente de cuán valiosa es una posición frente al máximo. El volumen medio ganado muestra potencial: margen para crecer vía puja o calidad, o estás cerca del techo.",
        "Las impresiones ponderadas pliegan ese volumen: un show en un slot más valioso pesa más. Eso nivela la comparación de click-through.",
      ],
      notes: [
        {
          title: "No lo confundas con resultados de negocio",
          kind: "tip",
          text: "Alto volumen de tráfico sin conversiones son impresiones caras. Átalo a metas de Metrica.",
        },
      ],
      links: [
        {
          label: "Pujas en Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Cómo funciona la idea del wCTR",
      level: 2,
      paras: [
        "En simple: los clics se relacionan con impresiones ponderadas, no con las crudas. Ejemplos históricos usaban pesos como 100 para el slot más alto y menos abajo — así un anuncio con menos «tráfico de posición» pero fuerte respuesta no perdía visualmente en la tabla.",
        "En la UI actual de la cuenta la fórmula y el set de columnas pueden diferir; lo que importa es la idea de normalización. Las definiciones exactas están en Yandex Help para informes.",
      ],
      tables: [
        {
          caption: "Lógica de comparación (esquema, no una lista de precios de pesos)",
          headers: ["Situación", "CTR crudo", "Lógica wCTR"],
          rows: [
            [
              "Slot más alto, mucha atención",
              "A menudo más alto",
              "La normalización quita el bonus de posición",
            ],
            [
              "Más abajo, menos tráfico",
              "A menudo más bajo",
              "Puede ganar si la gente hace clic con más ganas",
            ],
            [
              "Formatos distintos",
              "Difícil comparar de frente",
              "Usa wCTR + conversiones",
            ],
          ],
        },
      ],
    },
    {
      title: "Cuándo usar wCTR en la práctica",
      level: 2,
      paras: [
        "Tests A/B de copy y sitelinks, comparar grupos en queries que se solapan, juzgar si un empujón de puja por volumen vale la pena. Las decisiones finales siguen necesitando conversiones, CPA y calidad de leads.",
        "No optimices la cuenta solo por wCTR: puedes crecer el click-through y tirar presupuesto en clics curiosos baratos.",
      ],
      lists: [
        {
          intro: "Flujo de trabajo:",
          items: [
            "arma un informe por anuncios o grupos",
            "añade CTR, wCTR, gasto, conversiones",
            "corta stats pequeñas",
            "quédate con 1–2 hipótesis de copy",
            "revisa la landing y el CPA",
          ],
        },
      ],
      links: [
        {
          label: "Tests A/B de anuncios",
          href: "/es/blog/ab-testy-reklamy/",
        },
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Enlace con ROI e informes",
      level: 2,
      paras: [
        "wCTR responde: «qué tan bien engancha el anuncio, ajustado por placement». ROI, ROMI y CPA responden: «¿vale el dinero?». Usa ambas capas.",
        "En el Report Wizard combina cortes: campaña, grupo, anuncio, condición de show. Fija un periodo con volumen de datos comparable.",
      ],
      links: [
        {
          label: "Interfaz de Yandex Direct",
          href: "/es/blog/interfeys-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "El CTR ponderado existe para que no corones un creativo solo por una posición más alta. El volumen de tráfico va de potencial de show, no de beneficio.",
        "Revisa los nombres de columna en el Direct actual y lleva siempre la conclusión a conversiones.",
      ],
    },
  ],
  closing: [
    "Añade CTR ponderado junto al CTR crudo y las conversiones en tu informe de Direct — y compara creativos en distintas posiciones con más justicia que solo por el click-through rate crudo.",
  ],
  related: [
    "metriki-reklamy",
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "ab-testy-reklamy",
    "audit-reklamnoy-kampanii",
    "interfeys-yandeks-direkt",
  ],
};

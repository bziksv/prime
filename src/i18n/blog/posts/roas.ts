import type { BlogPost } from "../../../data/blog";

/** EN overlay for roas — same structure as RU JSON. */
export const roasEn: BlogPost = {
  slug: "roas",
  title: "ROAS: return on ad spend",
  date: "2019-03-04",
  category: "Digital marketing",
  cover: "/images/blog/roas/cover-en.webp",
  excerpt:
    "ROAS = ad revenue / ad spend: how it differs from ROI/ROMI (return on marketing investment), how to calculate it, why include creative in costs, and why in B2B without end-to-end analytics the metric lies.",
  lead: [
    "ROAS (return on ad spend) shows how much revenue you get per unit of ad budget. It’s a tactical money metric for a campaign — not a strategy substitute and not the “only brand KPI”.",
    "Below: the formula, how it differs from ROI/ROMI, a campaign comparison example, and B2B cases where the deal often closes outside the ad account. A “good” ROAS depends on margin and goal — there’s no universal “4:1 for everyone.”",
  ],
  faq: [
    {
      q: "Are ROAS and ROI the same?",
      a: "No. ROAS is usually revenue / ad spend (sometimes as 4:1 or 400%). ROI/ROMI (return on marketing investment) accounts for profit vs investment and sits closer to strategic payback.",
    },
    {
      q: "What ROAS counts as good?",
      a: "The one where after margin, returns, and operating costs you still get the profit you need. A thin-margin startup may need a higher ratio than mature e-com.",
    },
    {
      q: "What should I include in costs?",
      a: "Media budget and, honestly, creative/landing work without which ads don’t live. Otherwise ROAS is inflated.",
    },
    {
      q: "Are clicks and impressions enough?",
      a: "No. Many clicks with low revenue make weak ROAS. Compare campaigns on money — not only CTR.",
    },
    {
      q: "How do I calculate ROAS in B2B?",
      a: "You need the chain ads → lead → deal in CRM (end-to-end analytics). Otherwise you see clicks, not payment.",
    },
    {
      q: "Is ROAS 2:1 the same as profit?",
      a: "It’s “two units of revenue per one unit of ad spend”. Profit depends on margin: at 30% margin, 2:1 can be a loss.",
    },
  ],
  sections: [
    {
      title: "Formula and difference from ROI",
      level: 2,
      paras: [
        "Base: ROAS = revenue attributed to ads / ad spend. Example: spend 20,000, revenue 80,000 → ROAS = 4 (or 4:1). Each ad unit “brought” four units of turnover — not four units of net profit.",
        "ROI/ROMI sits closer to strategy: (revenue − cost) / cost or profit variants. Content and brand are often treated as lagged investments; ROAS is handy for fast performance campaigns.",
        "Traffic, visibility, and subscribers help as diagnostics — they don’t replace a money calculation.",
      ],
      lists: [
        {
          intro: "To keep ROAS honest:",
          items: [
            "one attribution model for the comparison period",
            "in spend — media + necessary production costs",
            "in revenue — what you really tied to the campaign",
            "returns and cancellations counted in e-com",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Comparing campaigns and B2B",
      level: 2,
      paras: [
        "A campaign with many clicks on the same budget can lose on ROAS to a narrower but higher-revenue one. For reach watch impressions; for profit — revenue per spend.",
        "In e-com the link is simpler: order and amount often show in analytics. In B2B leads go to telephony/CRM, the cycle is long — without end-to-end stitching, account ROAS will be understated or random.",
        "Budget decision: amplify what hits target ROAS at the lead quality you need; don’t confuse a brand job (reach) with a performance job (revenue).",
      ],
      notes: [
        {
          title: "Margin decides",
          text: "The same ROAS at different margins is a different cash outcome. Derive acceptable ROAS from unit economics — not from someone else’s benchmarks.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
      ],
    },
  ],
  closing: [
    "ROAS answers whether an ad unit pays back in revenue. Count it next to margin and ROI/ROMI; in B2B — only with an end-to-end link to the deal; and don’t chase someone else’s “ideal” ratio.",
  ],
  related: [
    "roi-marketinga",
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "audit-reklamnoy-kampanii",
    "effektivnost-videoreklamy",
  ],
};

/** ES overlay for roas — same structure as RU JSON / EN. */
export const roasEs: BlogPost = {
  slug: "roas",
  title: "ROAS: retorno del gasto en publicidad",
  date: "2019-03-04",
  category: "Digital marketing",
  cover: "/images/blog/roas/cover-es.webp",
  excerpt:
    "ROAS = revenue de ads / gasto en ads: en qué se diferencia de ROI/ROMI (retorno de la inversión en marketing), cómo calcularlo, por qué incluir creativo en costes y por qué en B2B sin analytics de extremo a extremo la métrica miente.",
  lead: [
    "ROAS (return on ad spend) muestra cuánto revenue obtienes por unidad de presupuesto publicitario. Es una métrica táctica de dinero para una campaña — no un sustituto de estrategia ni el «único KPI de marca».",
    "Abajo: la fórmula, en qué se diferencia de ROI/ROMI, un ejemplo de comparación de campañas y casos B2B donde el deal a menudo se cierra fuera de la cuenta de ads. Un ROAS «bueno» depende del margen y la meta — no hay un «4:1 para todos» universal.",
  ],
  faq: [
    {
      q: "¿ROAS y ROI son lo mismo?",
      a: "No. ROAS suele ser revenue / gasto en ads (a veces como 4:1 o 400%). ROI/ROMI (return on marketing investment) cuenta el beneficio frente a la inversión y está más cerca del payback estratégico.",
    },
    {
      q: "¿Qué ROAS cuenta como bueno?",
      a: "Aquel en el que tras margen, devoluciones y costes operativos aún tienes el beneficio que necesitas. Un startup de margen fino puede necesitar un ratio más alto que un e-com maduro.",
    },
    {
      q: "¿Qué debo incluir en costes?",
      a: "Presupuesto de media y, con honestidad, trabajo de creativo/landing sin el cual los ads no viven. Si no, el ROAS está inflado.",
    },
    {
      q: "¿Bastan clics e impresiones?",
      a: "No. Muchos clics con poco revenue dan un ROAS débil. Compara campañas por dinero — no solo por CTR.",
    },
    {
      q: "¿Cómo calculo ROAS en B2B?",
      a: "Hace falta la cadena ads → lead → deal en el CRM (analytics de extremo a extremo). Si no, ves clics, no el pago.",
    },
    {
      q: "¿ROAS 2:1 es lo mismo que beneficio?",
      a: "Es «dos unidades de revenue por una unidad de gasto en ads». El beneficio depende del margen: con 30% de margen, 2:1 puede ser una pérdida.",
    },
  ],
  sections: [
    {
      title: "Fórmula y diferencia respecto a ROI",
      level: 2,
      paras: [
        "Base: ROAS = revenue atribuido a ads / gasto en ads. Ejemplo: gasto 20.000, revenue 80.000 → ROAS = 4 (o 4:1). Cada unidad de ads «trajo» cuatro unidades de facturación — no cuatro unidades de beneficio neto.",
        "ROI/ROMI está más cerca de la estrategia: (revenue − coste) / coste o variantes de beneficio. Contenido y marca suelen tratarse como inversiones con lag; ROAS es útil para campañas de performance rápidas.",
        "Tráfico, visibilidad y suscriptores ayudan como diagnóstico — no sustituyen un cálculo de dinero.",
      ],
      lists: [
        {
          intro: "Para que el ROAS sea honesto:",
          items: [
            "un modelo de atribución para el periodo de comparación",
            "en el gasto — media + costes de producción necesarios",
            "en el revenue — lo que de verdad ligaste a la campaña",
            "devoluciones y cancelaciones contadas en e-com",
          ],
        },
      ],
      links: [
        {
          label: "ROI y ROMI",
          href: "/es/blog/roi-marketinga/",
        },
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Comparar campañas y B2B",
      level: 2,
      paras: [
        "Una campaña con muchos clics al mismo presupuesto puede perder en ROAS frente a una más estrecha pero de mayor revenue. Para reach mira impresiones; para beneficio — revenue por gasto.",
        "En e-com el vínculo es más simple: pedido e importe a menudo aparecen en analytics. En B2B los leads van a telefonía/CRM, el ciclo es largo — sin stitching de extremo a extremo, el ROAS de la cuenta estará infravalorado o será aleatorio.",
        "Decisión de presupuesto: amplifica lo que golpea el ROAS objetivo con la calidad de lead que necesitas; no confundas un trabajo de marca (reach) con uno de performance (revenue).",
      ],
      notes: [
        {
          title: "El margen decide",
          text: "El mismo ROAS con márgenes distintos es un outcome de caja distinto. Deriva el ROAS aceptable de la unit economics — no de benchmarks ajenos.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
        {
          label: "Performance marketing",
          href: "/es/blog/performance-marketing/",
        },
      ],
    },
  ],
  closing: [
    "ROAS responde si una unidad de ads se recupera en revenue. Cuéntalo junto al margen y ROI/ROMI; en B2B — solo con un vínculo de extremo a extremo al deal; y no persigas el ratio «ideal» de otro.",
  ],
  related: [
    "roi-marketinga",
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "audit-reklamnoy-kampanii",
    "effektivnost-videoreklamy",
  ],
};

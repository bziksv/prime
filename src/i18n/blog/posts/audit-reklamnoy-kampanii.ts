import type { BlogPost } from "../../../data/blog";

/** EN overlay for audit-reklamnoy-kampanii — same structure as RU JSON. */
export const auditReklamnoyKampaniiEn: BlogPost = {
  slug: "audit-reklamnoy-kampanii",
  title: "Ad campaign audit: why, stages, and what to check",
  date: "2019-07-08",
  category: "Paid search",
  cover: "/images/blog/audit-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "A paid search audit: when to order it, technical and analytical stages, ongoing optimization, and how to hand results to the client without a “doctor’s prescription.”",
  lead: [
    "An ad campaign audit diagnoses settings, stats, and optimization processes — why KPIs miss and what to change. It’s not only an error list; it should also call out what’s working in the account.",
    "Below: typical reasons to order one, three stages (tech → analytics → conclusions), and what to check in Google Ads and similar accounts. UIs change; the checklist by meaning stays.",
  ],
  faq: [
    {
      q: "When do you need an audit?",
      a: "KPIs don’t add up, it’s unclear where the money goes, results got worse over a period, you want a second pair of eyes, or a growth plan when the numbers already look fine.",
    },
    {
      q: "What if the account tech is a mess?",
      a: "Often it’s cheaper to rebuild the structure than to “tweak” chaos. Fix the base first, then dig into KPI analytics.",
    },
    {
      q: "Google Ads only?",
      a: "Same logic for Yandex Direct and other accounts: settings → economics → regular work → a clear report.",
    },
    {
      q: "What’s a “normal” conversion rate?",
      a: "It depends on the niche and how you define a conversion (lead vs purchase). Compare with your own past period and unit economics — not someone else’s “market average.”",
    },
    {
      q: "What should the client get?",
      a: "A short conclusion and strategy (a few slides) plus an appendix with details. No jargon wall on the first screen.",
    },
    {
      q: "Is an audit a one-off?",
      a: "It’s a snapshot. Next come regular jobs: queries, negatives, bid and ad tests, budget reallocation.",
    },
  ],
  sections: [
    {
      title: "Why people order an audit",
      level: 2,
      paras: [
        "Typical motives: CPA/ROMI not hit; the client can’t read the account and wants it profitable; it feels like it used to be better; checking their own team; wanting a fresh strategy when numbers already work.",
        "Motive sets depth: some need a tech review, others a strategy rebuild and budget priorities.",
      ],
    },
    {
      title: "Technical stage",
      level: 2,
      paras: [
        "Check account, campaign, ad group, ad, and keyword settings: geo, language, schedule, devices, negatives, extensions, goals/conversions, UTM, moderation status, duplicates and overlaps.",
        "Many critical errors mean rebuild the structure — don’t polish KPIs on top of noise. Otherwise analytics will count garbage.",
      ],
      lists: [
        {
          intro: "Tech-check base:",
          items: [
            "goals and conversion correctness",
            "geo and exclusions",
            "campaign structure by intent",
            "negatives and search terms",
            "ad → landing page match",
            "budgets and limits without accidental cutoffs",
          ],
        },
      ],
    },
    {
      title: "Analytical stage",
      level: 2,
      paras: [
        "See whether KPIs are hit, how budget is split across campaigns, and whether regular work happens. Account for seasonality, conversion lag, other channels, and assisted paths — not only last click.",
        "Account work should include: search-term review, bid strategy tests, display/placements, devices and geo, ad and extension updates, keyword quality, remarketing/audiences, turning off what’s ineffective.",
      ],
      lists: [
        {
          intro: "Checklist questions:",
          items: [
            "Are KPIs hit? If not — where’s the break",
            "is optimization regular or set-and-forget",
            "does budget follow priorities",
            "what will drive the next lift",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
      ],
    },
    {
      title: "How to deliver the result",
      level: 2,
      paras: [
        "Assemble short conclusions and a proposed strategy in plain language. Details go in the appendix. Note account strengths: that’s fairer and more useful for the next campaigns.",
        "An audit without an action plan is just a diagnosis. Lock fix priorities and expected effect in the client’s KPI terms.",
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "An ad audit is tech, economics, and optimization processes packed into a clear conclusion. Start with settings and goals, then KPIs and regular work; give the client a short strategy — not only a bug list.",
  ],
  related: [
    "metriki-reklamy",
    "performance-marketing",
    "otchet-klientu",
    "reklamnyy-kabinet",
    "prognoz-trafika-google-ads",
    "klyuchi-google-ads",
  ],
};

/** ES overlay for audit-reklamnoy-kampanii — same structure as RU JSON / EN. */
export const auditReklamnoyKampaniiEs: BlogPost = {
  slug: "audit-reklamnoy-kampanii",
  title: "Auditoría de campaña de ads: por qué, etapas y qué revisar",
  date: "2019-07-08",
  category: "Paid search",
  cover: "/images/blog/audit-reklamnoy-kampanii/cover.webp",
  excerpt:
    "Una auditoría de paid search: cuándo pedirla, etapas técnicas y analíticas, optimización continua y cómo entregar resultados al cliente sin «receta de médico».",
  lead: [
    "Una auditoría de campaña de ads diagnostica ajustes, stats y procesos de optimización — por qué fallan los KPIs y qué cambiar. No es solo una lista de errores; también debe señalar qué funciona en la cuenta.",
    "Abajo: motivos típicos para pedirla, tres etapas (tech → analytics → conclusiones) y qué revisar en Google Ads y cuentas similares. Las UIs cambian; el checklist por significado se mantiene.",
  ],
  faq: [
    {
      q: "¿Cuándo hace falta una auditoría?",
      a: "Los KPIs no cuadran, no está claro a dónde va el dinero, los resultados empeoraron en un periodo, quieres un segundo par de ojos, o un plan de crecimiento cuando los números ya se ven bien.",
    },
    {
      q: "¿Y si la tech de la cuenta es un desastre?",
      a: "A menudo sale más barato reconstruir la estructura que «retocar» el caos. Arregla la base primero, luego cava en analytics de KPIs.",
    },
    {
      q: "¿Solo Google Ads?",
      a: "Misma lógica para Yandex Direct y otras cuentas: ajustes → economía → trabajo regular → un informe claro.",
    },
    {
      q: "¿Qué es una tasa de conversión «normal»?",
      a: "Depende del nicho y de cómo defines una conversión (lead vs compra). Compara con tu propio periodo pasado y unit economics — no con el «promedio del mercado» de otro.",
    },
    {
      q: "¿Qué debe recibir el cliente?",
      a: "Una conclusión corta y una estrategia (unas pocas slides) más un apéndice con detalles. Sin muro de jerga en la primera pantalla.",
    },
    {
      q: "¿La auditoría es de una sola vez?",
      a: "Es una foto. Luego vienen trabajos regulares: consultas, negativas, tests de pujas y ads, reasignación de presupuesto.",
    },
  ],
  sections: [
    {
      title: "Por qué la gente pide una auditoría",
      level: 2,
      paras: [
        "Motivos típicos: CPA/ROMI no alcanzado; el cliente no lee la cuenta y la quiere rentable; da la sensación de que antes iba mejor; revisar al propio equipo; querer una estrategia fresca cuando los números ya funcionan.",
        "El motivo fija la profundidad: unos necesitan una revisión tech, otros un rebuild de estrategia y prioridades de presupuesto.",
      ],
    },
    {
      title: "Etapa técnica",
      level: 2,
      paras: [
        "Revisa ajustes de cuenta, campaña, grupo de anuncios, anuncio y keywords: geo, idioma, horario, dispositivos, negativas, extensiones, goals/conversiones, UTM, estado de moderación, duplicados y solapes.",
        "Muchos errores críticos significan reconstruir la estructura — no barnizar KPIs sobre ruido. Si no, analytics contará basura.",
      ],
      lists: [
        {
          intro: "Base del tech-check:",
          items: [
            "corrección de goals y conversiones",
            "geo y exclusiones",
            "estructura de campaña por intent",
            "negativas y search terms",
            "encaje anuncio → landing page",
            "presupuestos y límites sin cortes accidentales",
          ],
        },
      ],
    },
    {
      title: "Etapa analítica",
      level: 2,
      paras: [
        "Mira si se alcanzan los KPIs, cómo se parte el presupuesto entre campañas y si hay trabajo regular. Ten en cuenta estacionalidad, lag de conversión, otros canales y caminos asistidos — no solo last click.",
        "El trabajo de cuenta debería incluir: revisión de search terms, tests de estrategia de pujas, display/emplazamientos, dispositivos y geo, updates de ads y extensiones, calidad de keywords, remarketing/audiencias, apagar lo ineficaz.",
      ],
      lists: [
        {
          intro: "Preguntas del checklist:",
          items: [
            "¿Se alcanzan los KPIs? Si no — dónde está la rotura",
            "¿la optimización es regular o set-and-forget?",
            "¿el presupuesto sigue prioridades?",
            "¿qué impulsará el próximo lift?",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de ads",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Performance marketing",
          href: "/blog/performance-marketing/",
        },
      ],
    },
    {
      title: "Cómo entregar el resultado",
      level: 2,
      paras: [
        "Arma conclusiones cortas y una estrategia propuesta en lenguaje claro. Los detalles van al apéndice. Anota fortalezas de la cuenta: es más justo y más útil para las siguientes campañas.",
        "Una auditoría sin plan de acción es solo un diagnóstico. Fija prioridades de fix y efecto esperado en los términos de KPI del cliente.",
      ],
      links: [
        {
          label: "Informe al cliente",
          href: "/es/blog/otchet-klientu/",
        },
        {
          label: "Cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "Una auditoría de ads es tech, economía y procesos de optimización empaquetados en una conclusión clara. Empieza por ajustes y goals, luego KPIs y trabajo regular; da al cliente una estrategia corta — no solo una lista de bugs.",
  ],
  related: [
    "metriki-reklamy",
    "performance-marketing",
    "otchet-klientu",
    "reklamnyy-kabinet",
    "prognoz-trafika-google-ads",
    "klyuchi-google-ads",
  ],
};

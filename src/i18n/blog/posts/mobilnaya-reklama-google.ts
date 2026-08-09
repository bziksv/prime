import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobilnaya-reklama-google — same structure as RU JSON. */
export const mobilnayaReklamaGoogleEn: BlogPost = {
  slug: "mobilnaya-reklama-google",
  title: "Mobile ads in Google: how to read the numbers",
  date: "2018-10-23",
  category: "Paid search",
  cover: "/images/blog/mobilnaya-reklama-google/cover-en.webp",
  excerpt:
    "How CTR, CVR, CPC, and CPA differ for mobile Search vs Display, why industry benchmarks age fast, and how to measure efficiency in your own account.",
  lead: [
    "Mobile ads in Google aren’t one average market rate — Search and Display have different economics, plus a wide spread by niche. Public studies (including older WordStream-style reviews across verticals) give approximate ranges, not your CPA.",
    "Below: how to read those benchmarks, how Search differs from Display on mobile, and the minimum metrics to track yourself. Don’t paste 2010s dollar figures from old roundups into a 2020s media plan without recalculating.",
  ],
  faq: [
    {
      q: "Why is Search CTR usually higher than Display?",
      a: "Search has a query and intent. Display shows in content or apps — fewer clicks, cheaper reach, and different jobs.",
    },
    {
      q: "Can I treat someone else’s average CPC as the norm?",
      a: "Not as dogma. Watch your niche, region, ad quality, and landing. A benchmark is approximate, not an SLA.",
    },
    {
      q: "Is mobile conversion rate always worse than desktop?",
      a: "Often lower on complex forms, but not a law. Simplify checkout and call; compare device slices in the account.",
    },
    {
      q: "Should I mix Search and Display in one campaign?",
      a: "Better separate: different goals, bids, and creatives. Otherwise optimization eats one channel with the other.",
    },
    {
      q: "What matters more — CTR or CPA?",
      a: "For business — CPA, return on marketing investment, and lead quality. High CTR with expensive empty clicks is useless.",
    },
    {
      q: "Do I need separate ads for mobile?",
      a: "Often yes: shorter offer, call or messenger emphasis, fast landing. Validate in experiments.",
    },
    {
      q: "How often should I refresh benchmarks?",
      a: "Yours — continuously in the account. External studies — background only; market and auction shift.",
    },
    {
      q: "Is this tied to SEO?",
      a: "Not directly. Indirectly: the same landings and mobile UX affect organic and ads.",
    },
  ],
  sections: [
    {
      title: "What people usually call “efficiency”",
      level: 2,
      paras: [
        "Base set: CTR (click-through), CVR (click-to-conversion), CPC (cost per click), CPA (cost per goal). Sometimes mobile traffic share and lead quality.",
        "Multi-industry studies often show: Search delivers clearly higher CTR and CVR at a pricier click; Display — low CTR, cheap click, and another job profile (reach, retarget, top of funnel).",
      ],
      lists: [
        {
          intro: "Don’t mix:",
          items: [
            "Search campaigns and Display",
            "brand and non-brand queries",
            "mobile and desktop without a slice",
            "someone else’s average dollar figure and your region or currency",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Search vs Display on mobile",
      level: 2,
      paras: [
        "In Search the person already stated a need — warmer click, higher bid, usually better conversion with a decent landing. In Display you compete for attention in a feed or on a site — sub-percent CTR is normal; economics work differently.",
        "Historical agency summaries on Google accounts (for example WordStream-style reviews across ~18 verticals) illustrated the gap: Search CTR of a few percent versus fractions in Display, with very different CPC and CPA. Exact vintage numbers age out — the channel-gap logic stays.",
      ],
      lists: [
        {
          intro: "Practice in the account:",
          items: [
            "separate campaigns and budgets",
            "own goals (lead vs reach)",
            "frequency and placements in Display",
            "mobile-friendly landing for both",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Industries and number spread",
      level: 2,
      paras: [
        "Legal, finance, construction, and health usually cost more per click than mass retail or entertainment. Inside one “industry” the spread is huge: brand, region, offer, and site quality beat the average table.",
        "Use industry reports only so you don’t set an unrealistic CTR “like everyone.” Build the budget plan from your margin and target CPA.",
      ],
      lists: [
        {
          intro: "Before launch lock:",
          items: [
            "goal action and its value",
            "max CPA",
            "mobile share in your niche",
            "Search vs Display hypothesis",
          ],
        },
      ],
    },
    {
      title: "How to measure yourself, not by someone else’s PDF",
      level: 2,
      paras: [
        "In Google Ads watch device = mobile, Search/Display network, conversions by goal. Cross-check site analytics: bounces, speed, forms on a phone.",
        "Monthly compare mobile vs desktop CPA and budget share. If mobile is pricier at the same conversion — fix ads and landing, don’t copy someone else’s “average CTR 4%.”",
      ],
      lists: [
        {
          intro: "Mini report:",
          items: [
            "spend / clicks / CTR mobile",
            "conversions and CPA",
            "best ads and landings",
            "decisions: bid, negatives, creative, UX",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Site link and timeline expectations",
      level: 2,
      paras: [
        "Mobile ads don’t fix a slow or awkward site. Remove friction on the first screen and form first — otherwise any CPA benchmark will look inflated.",
        "Ads respond in days. Organic page-one visibility for a keyword set is a separate track: prep and rank buildup planned over months after SEO starts — often 2–6 months — not “after we improved ad CTR.”",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "mobile landing",
            "goals in analytics",
            "test Search, then Display or retarget",
            "don’t confuse ad CPA with an organic ranking promise",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
      notes: [
        {
          title: "About studies",
          kind: "tip",
          text: "CTR/CPC/CPA summaries from older English reports illustrate rough ranges. For planning use fresh data from your account and region.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "instrumenty-veb-analitiki",
    "reklamnyy-kabinet",
  ],
};

/** ES overlay for mobilnaya-reklama-google — same structure as RU JSON / EN. */
export const mobilnayaReklamaGoogleEs: BlogPost = {
  slug: "mobilnaya-reklama-google",
  title: "Ads móviles en Google: cómo leer los números",
  date: "2018-10-23",
  category: "Paid search",
  cover: "/images/blog/mobilnaya-reklama-google/cover.webp",
  excerpt:
    "Cómo difieren CTR, CVR, CPC y CPA en Search vs Display móvil, por qué los benchmarks de industria envejecen rápido y cómo medir la eficiencia en tu propia cuenta.",
  lead: [
    "Los ads móviles en Google no son una tarifa media del mercado — Search y Display tienen economías distintas, más una horquilla amplia por nicho. Estudios públicos (incluidos reviews viejos estilo WordStream entre verticales) dan rangos aproximados, no tu CPA.",
    "Abajo: cómo leer esos benchmarks, cómo difiere Search de Display en móvil y el mínimo de métricas que debes trackear tú. No pegues cifras en dólares de roundups de 2010 en un media plan de 2020s sin recalcular.",
  ],
  faq: [
    {
      q: "¿Por qué el CTR de Search suele ser más alto que el de Display?",
      a: "Search tiene una query e intención. Display se muestra en contenido o apps — menos clics, reach más barato y trabajos distintos.",
    },
    {
      q: "¿Puedo tratar el CPC medio de otro como norma?",
      a: "No como dogma. Mira tu nicho, región, calidad del ad y landing. Un benchmark es aproximado, no un SLA.",
    },
    {
      q: "¿La tasa de conversión móvil siempre es peor que desktop?",
      a: "A menudo más baja en formularios complejos, pero no es ley. Simplifica checkout y llamada; compara slices de dispositivo en la cuenta.",
    },
    {
      q: "¿Debo mezclar Search y Display en una campaña?",
      a: "Mejor separar: objetivos, pujas y creatives distintos. Si no, la optimización se come un canal con el otro.",
    },
    {
      q: "¿Qué importa más — CTR o CPA?",
      a: "Para el negocio — CPA, retorno de la inversión en marketing y calidad del lead. Un CTR alto con clics vacíos caros no sirve.",
    },
    {
      q: "¿Hacen falta ads aparte para móvil?",
      a: "A menudo sí: oferta más corta, énfasis en llamada o mensajero, landing rápida. Valida en experimentos.",
    },
    {
      q: "¿Con qué frecuencia refrescar benchmarks?",
      a: "Los tuyos — de continuo en la cuenta. Estudios externos — solo de fondo; el mercado y la subasta se mueven.",
    },
    {
      q: "¿Esto se liga al SEO?",
      a: "No de forma directa. De forma indirecta: las mismas landings y el UX móvil afectan orgánico y ads.",
    },
  ],
  sections: [
    {
      title: "Qué suele llamarse «eficiencia»",
      level: 2,
      paras: [
        "Set base: CTR (click-through), CVR (clic-a-conversión), CPC (coste por clic), CPA (coste por objetivo). A veces cuota de tráfico móvil y calidad del lead.",
        "Estudios multi-industria a menudo muestran: Search entrega CTR y CVR claramente más altos a un clic más caro; Display — CTR bajo, clic barato y otro perfil de trabajo (reach, retarget, parte alta del funnel).",
      ],
      lists: [
        {
          intro: "No mezcles:",
          items: [
            "campañas Search y Display",
            "queries de marca y no marca",
            "móvil y desktop sin slice",
            "la cifra media en dólares de otro y tu región o moneda",
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
      title: "Search vs Display en móvil",
      level: 2,
      paras: [
        "En Search la persona ya declaró una necesidad — clic más cálido, puja más alta, suele haber mejor conversión con una landing decente. En Display compites por atención en un feed o en un sitio — un CTR de fracciones de porcentaje es normal; la economía funciona distinto.",
        "Resúmenes históricos de agencias sobre cuentas de Google (por ejemplo reviews estilo WordStream en ~18 verticales) ilustraron la brecha: CTR de Search de unos pocos puntos frente a fracciones en Display, con CPC y CPA muy distintos. Las cifras exactas de vintage se quedan viejas — la lógica de la brecha entre canales se mantiene.",
      ],
      lists: [
        {
          intro: "Práctica en la cuenta:",
          items: [
            "campañas y presupuestos separados",
            "objetivos propios (lead vs reach)",
            "frecuencia y placements en Display",
            "landing mobile-friendly para ambos",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting de fiestas",
          href: "/es/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Industrias y horquilla de números",
      level: 2,
      paras: [
        "Legal, finanzas, construcción y salud suelen costar más por clic que retail masivo o entretenimiento. Dentro de una «industria» la horquilla es enorme: marca, región, oferta y calidad del sitio ganan a la tabla media.",
        "Usa reportes de industria solo para no fijar un CTR irreal «como todos». Arma el plan de presupuesto desde tu margen y CPA objetivo.",
      ],
      lists: [
        {
          intro: "Antes del lanzamiento fija:",
          items: [
            "acción objetivo y su valor",
            "CPA máximo",
            "cuota móvil en tu nicho",
            "hipótesis Search vs Display",
          ],
        },
      ],
    },
    {
      title: "Cómo medirte tú, no por el PDF de otro",
      level: 2,
      paras: [
        "En Google Ads mira dispositivo = móvil, red Search/Display, conversiones por objetivo. Cruza analytics del sitio: bounces, velocidad, formularios en un teléfono.",
        "Cada mes compara CPA móvil vs desktop y cuota de presupuesto. Si el móvil es más caro a la misma conversión — arregla ads y landing, no copies el «CTR medio 4%» de otro.",
      ],
      lists: [
        {
          intro: "Mini reporte:",
          items: [
            "spend / clics / CTR móvil",
            "conversiones y CPA",
            "mejores ads y landings",
            "decisiones: puja, negatives, creative, UX",
          ],
        },
      ],
      links: [
        {
          label: "Tools de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Enlace con el sitio y expectativas de plazo",
      level: 2,
      paras: [
        "Los ads móviles no arreglan un sitio lento o incómodo. Primero quita fricción en la primera pantalla y el formulario — si no, cualquier benchmark de CPA se verá inflado.",
        "Los ads responden en días. La visibilidad orgánica en primera página de un set de keywords es una vía aparte: prep y construcción de rankings planificadas a meses tras el arranque SEO — a menudo 2–6 meses — no «después de que mejoramos el CTR del ad».",
      ],
      lists: [
        {
          intro: "Orden:",
          items: [
            "landing móvil",
            "objetivos en analytics",
            "probar Search, luego Display o retarget",
            "no confundas CPA de ads con una promesa de ranking orgánico",
          ],
        },
      ],
      links: [
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
      ],
      notes: [
        {
          title: "Sobre estudios",
          kind: "tip",
          text: "Los resúmenes de CTR/CPC/CPA de reportes ingleses viejos ilustran rangos aproximados. Para planificar usa datos frescos de tu cuenta y región.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "instrumenty-veb-analitiki",
    "reklamnyy-kabinet",
  ],
};

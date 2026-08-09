import type { BlogPost } from "../../../data/blog";

/** EN overlay for roi-marketinga — same structure as RU JSON. */
export const roiMarketingaEn: BlogPost = {
  slug: "roi-marketinga",
  title:
    "Marketing ROI and ROMI: formulas and how to judge strategy efficiency",
  date: "2020-12-07",
  category: "Digital marketing",
  cover: "/images/blog/roi-marketinga/cover-en.webp",
  excerpt:
    "How ROI/ROMI differ from KPIs and conversion, which formulas to use for ads, and how numbers decide where to grow budget — and where to cut.",
  lead: [
    "Conversion shows how well the funnel catches. KPIs show whether you hit operational goals. ROI/ROMI answer a different question: did marketing spend return with profit.",
    "Below: why measure return on investment, the CR → CPA → ROMI chain, working formulas, and common mistakes — including the myth that “ROI 100%” is the only profitable threshold.",
  ],
  faq: [
    {
      q: "Are ROI and ROMI the same?",
      a: "In digital practice people often say ROMI (return on marketing investment): return on marketing costs specifically. ROI is broader — any investment. The formula idea is the same.",
    },
    {
      q: "At what ROI do ads pay off?",
      a: "With (revenue − costs) / costs × 100%, zero means marketing contribution broke even; above zero is profit. “100%” means you doubled the investment — not “the profitability threshold”.",
    },
    {
      q: "How do KPIs differ from ROI?",
      a: "KPIs are process targets (leads, CTR, response time). ROI is money payback. You can hit KPIs and still lose on margin.",
    },
    {
      q: "Is conversion rate (CR) enough?",
      a: "No. CR = goals / clicks (or visits) × 100%. Without traffic cost and margin you can’t see if the channel pays.",
    },
    {
      q: "How do I calculate CPA?",
      a: "CPA = channel spend / number of goal actions. Then compare to an allowed CPA from margin and LTV.",
    },
    {
      q: "Should I measure by channel or for all marketing?",
      a: "Both cuts help: channel — to optimize budget; all marketing — for strategy. Otherwise strong SEO can mask a losing paid channel.",
    },
    {
      q: "What about a long sales cycle?",
      a: "Account for lag and attribution. For SEO and content the horizon is months; one week after a publish is not strategy ROMI.",
    },
  ],
  sections: [
    {
      title: "Why measure ROI/ROMI",
      level: 2,
      paras: [
        "Without a money metric it’s easy to optimize pretty percentages: high CTR, many clicks, more followers — while leads lose money.",
        "ROMI helps decide: scale the channel, fix the funnel, or cut budget. It doesn’t replace strategy — it filters where not to pour more spend.",
      ],
      links: [
        {
          label: "Client ad report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "CR and CPA first, then return",
      level: 2,
      paras: [
        "Conversion: CR = goals / clicks (or visits) × 100%. Example: 100 orders from 1,000 visits → CR = 10%.",
        "CPA = spend / goals. CR speaks to funnel appeal; CPA to action cost. Payback still needs margin and revenue.",
      ],
      lists: [
        {
          intro: "KPI examples next to money:",
          items: [
            "CPA — cost per goal action",
            "CPL — cost per lead",
            "CAC — customer acquisition cost",
            "share of qualified leads / lead quality",
          ],
        },
      ],
      links: [
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "ROI/ROMI formulas",
      level: 2,
      paras: [
        "A simple working variant for ads: ROMI = (gross profit from attributed sales − ad spend) / ad spend × 100%.",
        "If you prefer revenue: subtract product/service cost of goods first, then marketing spend — otherwise “ROI on turnover” overstates the picture.",
        "For a period people often use: (period revenue − period marketing spend) / marketing spend × 100%. What matters is the same attribution logic and the same period bounds.",
      ],
      lists: [
        {
          intro: "How to read the result (for the formula above):",
          items: [
            "< 0% — marketing is negative under the chosen model",
            "0% — spend returned with no extra profit",
            "> 0% — positive; 100% — doubled marketing spend in profit contribution",
          ],
        },
      ],
    },
    {
      title: "Where to apply and how to decide from numbers",
      level: 2,
      paras: [
        "Count ROMI by tool (paid social, search ads, email), by product, and by channel mix. A losing piece doesn’t have to live “for brand” if brand isn’t measured separately.",
        "Shift budget toward channels with a stable plus; weak ones — fix first (offer, negatives, landing), then pause. Regularity beats one pretty report.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "confusing turnover with profit",
            "forgetting COGS and returns",
            "mixing periods and attribution models",
            "judging SEO/content on a single week",
            "optimizing CTR only without CPA/ROMI",
          ],
        },
      ],
      links: [
        {
          label: "SEO efficiency",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
  ],
  closing: [
    "Strategy efficiency in money is ROMI/ROI alongside CR and CPA. Zero on the formula is break-even; a plus is growth — then budget goes where return stays durable.",
  ],
};

/** ES overlay for roi-marketinga — same structure as RU JSON / EN. */
export const roiMarketingaEs: BlogPost = {
  slug: "roi-marketinga",
  title:
    "ROI y ROMI de marketing: fórmulas y cómo juzgar la eficiencia de la estrategia",
  date: "2020-12-07",
  category: "Digital marketing",
  cover: "/images/blog/roi-marketinga/cover.webp",
  excerpt:
    "En qué se diferencian ROI/ROMI de KPIs y conversión, qué fórmulas usar para ads y cómo los números deciden dónde crecer presupuesto — y dónde cortar.",
  lead: [
    "La conversión muestra qué tan bien atrapa el funnel. Los KPIs muestran si alcanzaste goals operativos. ROI/ROMI responden otra pregunta: ¿el gasto de marketing volvió con beneficio?",
    "Abajo: por qué medir el retorno de la inversión, la cadena CR → CPA → ROMI, fórmulas de trabajo y errores frecuentes — incluido el mito de que «ROI 100%» es el único umbral rentable.",
  ],
  faq: [
    {
      q: "¿ROI y ROMI son lo mismo?",
      a: "En la práctica digital a menudo se dice ROMI (return on marketing investment): retorno sobre costes de marketing en concreto. ROI es más amplio — cualquier inversión. La idea de la fórmula es la misma.",
    },
    {
      q: "¿Con qué ROI se pagan los ads?",
      a: "Con (ingresos − costes) / costes × 100%, cero significa que la aportación de marketing empató; por encima de cero hay beneficio. «100%» significa que duplicaste la inversión — no «el umbral de rentabilidad».",
    },
    {
      q: "¿En qué se diferencian los KPIs del ROI?",
      a: "Los KPIs son objetivos de proceso (leads, CTR, tiempo de respuesta). El ROI es payback en dinero. Puedes cumplir KPIs y aun así perder en margen.",
    },
    {
      q: "¿Basta la tasa de conversión (CR)?",
      a: "No. CR = goals / clics (o visitas) × 100%. Sin coste del tráfico y margen no ves si el canal se paga.",
    },
    {
      q: "¿Cómo calculo el CPA?",
      a: "CPA = gasto del canal / número de acciones goal. Luego compara con un CPA permitido desde margen y LTV.",
    },
    {
      q: "¿Debo medir por canal o para todo el marketing?",
      a: "Ayudan ambos cortes: canal — para optimizar presupuesto; todo el marketing — para estrategia. Si no, un SEO fuerte puede enmascarar un canal de pago perdedor.",
    },
    {
      q: "¿Y un ciclo de venta largo?",
      a: "Ten en cuenta lag y atribución. Para SEO y contenido el horizonte es de meses; una semana tras publicar no es el ROMI de la estrategia.",
    },
  ],
  sections: [
    {
      title: "Por qué medir ROI/ROMI",
      level: 2,
      paras: [
        "Sin una métrica de dinero es fácil optimizar porcentajes bonitos: CTR alto, muchos clics, más followers — mientras los leads pierden dinero.",
        "El ROMI ayuda a decidir: escalar el canal, arreglar el funnel o cortar presupuesto. No sustituye la estrategia — filtra dónde no echar más gasto.",
      ],
      links: [
        {
          label: "Informe de ads al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Primero CR y CPA, luego el retorno",
      level: 2,
      paras: [
        "Conversión: CR = goals / clics (o visitas) × 100%. Ejemplo: 100 pedidos de 1.000 visitas → CR = 10%.",
        "CPA = gasto / goals. El CR habla del atractivo del funnel; el CPA del coste de la acción. El payback aún necesita margen e ingresos.",
      ],
      lists: [
        {
          intro: "Ejemplos de KPI junto al dinero:",
          items: [
            "CPA — coste por acción goal",
            "CPL — coste por lead",
            "CAC — coste de adquisición de cliente",
            "cuota de leads cualificados / calidad del lead",
          ],
        },
      ],
      links: [
        {
          label: "Precio del clic en Yandex",
          href: "/es/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Fórmulas de ROI/ROMI",
      level: 2,
      paras: [
        "Una variante simple de trabajo para ads: ROMI = (beneficio bruto de ventas atribuidas − gasto en ads) / gasto en ads × 100%.",
        "Si prefieres ingresos: resta primero el coste de bienes del producto/servicio, luego el gasto de marketing — si no, el «ROI sobre facturación» infla la foto.",
        "Para un periodo a menudo se usa: (ingresos del periodo − gasto de marketing del periodo) / gasto de marketing × 100%. Lo que importa es la misma lógica de atribución y los mismos límites de periodo.",
      ],
      lists: [
        {
          intro: "Cómo leer el resultado (para la fórmula de arriba):",
          items: [
            "< 0% — el marketing es negativo bajo el modelo elegido",
            "0% — el gasto volvió sin beneficio extra",
            "> 0% — positivo; 100% — duplicaste el gasto de marketing en aportación de beneficio",
          ],
        },
      ],
    },
    {
      title: "Dónde aplicar y cómo decidir con números",
      level: 2,
      paras: [
        "Cuenta ROMI por herramienta (paid social, search ads, email), por producto y por mix de canales. Una pieza perdedora no tiene que vivir «por marca» si la marca no se mide aparte.",
        "Mueve presupuesto hacia canales con un plus estable; los flojos — arregla primero (oferta, negativas, landing), luego pausa. La regularidad gana a un informe bonito puntual.",
      ],
      lists: [
        {
          intro: "Errores frecuentes:",
          items: [
            "confundir facturación con beneficio",
            "olvidar COGS y devoluciones",
            "mezclar periodos y modelos de atribución",
            "juzgar SEO/contenido en una sola semana",
            "optimizar solo CTR sin CPA/ROMI",
          ],
        },
      ],
      links: [
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
      ],
    },
  ],
  closing: [
    "La eficiencia de la estrategia en dinero es ROMI/ROI junto a CR y CPA. Cero en la fórmula es break-even; un plus es crecimiento — entonces el presupuesto va donde el retorno se mantiene durable.",
  ],
};

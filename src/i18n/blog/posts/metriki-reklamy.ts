import type { BlogPost } from "../../../data/blog";

/** EN overlay for metriki-reklamy — same structure as RU JSON. */
export const metrikiReklamyEn: BlogPost = {
  slug: "metriki-reklamy",
  title: "Ad metrics: what to watch to know a campaign is working",
  date: "2019-10-15",
  category: "Digital marketing",
  cover: "/images/blog/metriki-reklamy/cover-en.webp",
  excerpt:
    "Which metrics to watch by funnel stage: CTR and CPC at the entrance, on-site behavior, CPA/CPO/CR at conversion, average order value and LTV — without judging ads by clicks alone.",
  lead: [
    "Ads “work” when they lead to money or a business goal — not when there are “lots of impressions.” To see that, read metrics by funnel steps: interest → site → action → repeat purchases.",
    "Below: a working set — CTR/CPC, bounce and engagement, CPA/CPO/CR, average order value and LTV. ROMI formulas and end-to-end CRM joins are in related articles; here — what to watch at each stage.",
  ],
  faq: [
    {
      q: "Is watching only CTR enough for ads?",
      a: "No. High CTR with expensive empty clicks and zero leads is a failure. CTR is interest in the ad — not profit.",
    },
    {
      q: "Are CPA and CPO the same metric?",
      a: "Close, but not always. CPA is cost per target action (lead, install). CPO is cost per order. You define the goal.",
    },
    {
      q: "Why does a high bounce rate kill “good” ads?",
      a: "People click and leave at once: misclick, irrelevant offer, or a weak landing. Fixing the site is often cheaper than pouring more budget.",
    },
    {
      q: "Can I compare display and search with one KPI?",
      a: "Carefully. Display is more often reach and awareness; search is hot demand. Look at the channel’s role in the funnel and assisted paths.",
    },
    {
      q: "Why track LTV if I already have CPA?",
      a: "CPA says what acquisition cost. LTV says what a client brings over their life. Acceptable CPA rises when repeat purchases are strong.",
    },
    {
      q: "Where should a beginner start?",
      a: "Lock the goal → CTR/CPC → landing bounces → CR and CPA → check against margin. Then average order value and LTV.",
    },
  ],
  sections: [
    {
      title: "The funnel as a frame for metrics",
      level: 2,
      paras: [
        "It’s handy to split the user path into reach, engagement, conversion, and loyalty. Each stage has its question: did they notice, get interested, take the target action, come back.",
        "Without a frame it’s easy to optimize a “pretty” metric at the wrong stage — e.g. chase banner CTR while the lead form is broken.",
      ],
      lists: [
        {
          intro: "Stages and focus:",
          items: [
            "reach — meeting the offer",
            "engagement — click and interest on the site",
            "conversion — lead/order",
            "loyalty — repeat and LTV",
          ],
        },
      ],
    },
    {
      title: "Entrance: CTR and CPC",
      level: 2,
      paras: [
        "CTR = clicks ÷ impressions × 100%. Low CTR often means: wrong audience, creative doesn’t stand out, weak offer, or off-season. CPC = budget ÷ clicks — average cost of an attracted visit; niche, competition, season, and platform affect it.",
        "CTR and CPC diagnose the ad and the auction. They don’t answer whether the ads paid for themselves.",
      ],
      lists: [
        {
          intro: "If CTR dropped, check:",
          items: [
            "audience and offer match",
            "creative readability",
            "seasonality and competitors",
            "landing match to the promise",
          ],
        },
      ],
    },
    {
      title: "On the site: bounce, depth, time",
      level: 2,
      paras: [
        "After the click, watch whether the person stays. High bounce: awkward navigation, misclick, thin offer, weak description. Heatmaps help see where people click — but first remove clear barriers (lead button, cart, speed).",
        "Depth and visit length help on multi-page sites. On a one-page landing they’re weaker as KPIs: someone may read fast and convert — or leave in 20 seconds with no lead. Watch goals and scroll to the offer.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Bad behavior metrics often get blamed on “ads”, while the landing needs fixing. Check ad–page relevance before scaling budget.",
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Conversion: CPA, CPO, and CR",
      level: 2,
      paras: [
        "CR = conversions ÷ sessions × 100%. CPA = budget ÷ target actions. CPO = budget ÷ orders (including failed ones if that’s how you account). The goal depends on the business: lead, call, install, payment.",
        "Geo, competition, and product complexity affect CPA. Compare display and search with role in mind: display more often feeds the upper funnel; search — hot demand. Otherwise “expensive” display looks useless only because of last click.",
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "Money: average order value and LTV",
      level: 2,
      paras: [
        "Average order value (and close ARPU/AOV) shows how much one target action brings in money. LTV is client value over the relationship: AOV × repeat purchase frequency × customer lifetime (simplified).",
        "Repeat purchases usually cost less than the first. So a channel with a slightly higher CPA can be better if it brings strong-LTV clients. For the full picture, join ads to CRM — end-to-end analytics.",
      ],
      links: [
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "Ads work when metrics align down the funnel: interest (CTR/CPC), visit quality, action cost, and client economics. Don’t stop at clicks — take the view to CPA, margin, and LTV.",
  ],
  related: [
    "roi-marketinga",
    "optimizatsiya-konversii",
    "assotsiirovannye-konversii",
    "sredniy-chek",
    "skvoznaya-analitika",
    "otkazy-sayta",
  ],
};

/** ES overlay for metriki-reklamy — same structure as RU JSON / EN. */
export const metrikiReklamyEs: BlogPost = {
  slug: "metriki-reklamy",
  title: "Métricas de ads: qué mirar para saber si una campaña funciona",
  date: "2019-10-15",
  category: "Digital marketing",
  cover: "/images/blog/metriki-reklamy/cover.webp",
  excerpt:
    "Qué métricas mirar por etapa del funnel: CTR y CPC a la entrada, comportamiento on-site, CPA/CPO/CR en la conversión, ticket medio y LTV — sin juzgar ads solo por clics.",
  lead: [
    "Los ads «funcionan» cuando llevan a dinero o a un goal de negocio — no cuando hay «muchas impresiones». Para verlo, lee métricas por pasos del funnel: interés → sitio → acción → compras repetidas.",
    "Abajo: un set de trabajo — CTR/CPC, bounce y engagement, CPA/CPO/CR, ticket medio y LTV. Las fórmulas de ROMI y los joins end-to-end con CRM están en artículos relacionados; aquí — qué mirar en cada etapa.",
  ],
  faq: [
    {
      q: "¿Basta mirar solo el CTR de los ads?",
      a: "No. Un CTR alto con clics vacíos caros y cero leads es un fracaso. El CTR es interés en el anuncio — no beneficio.",
    },
    {
      q: "¿CPA y CPO son la misma métrica?",
      a: "Cercanas, pero no siempre. CPA es coste por acción objetivo (lead, install). CPO es coste por pedido. Tú defines el goal.",
    },
    {
      q: "¿Por qué un bounce alto mata ads «buenos»?",
      a: "La gente hace clic y se va al momento: misclick, oferta irrelevante o landing floja. Arreglar el sitio a menudo sale más barato que echar más presupuesto.",
    },
    {
      q: "¿Puedo comparar display y búsqueda con un solo KPI?",
      a: "Con cuidado. Display es más a menudo alcance y awareness; búsqueda es demanda caliente. Mira el rol del canal en el funnel y los caminos asistidos.",
    },
    {
      q: "¿Por qué trackear LTV si ya tengo CPA?",
      a: "El CPA dice cuánto cuesta adquirir. El LTV dice cuánto trae un cliente a lo largo de su vida. El CPA aceptable sube cuando las compras repetidas son fuertes.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Fija el goal → CTR/CPC → bounces de landing → CR y CPA → cruza con el margen. Luego ticket medio y LTV.",
    },
  ],
  sections: [
    {
      title: "El funnel como marco de métricas",
      level: 2,
      paras: [
        "Es cómodo partir el camino del usuario en alcance, engagement, conversión y lealtad. Cada etapa tiene su pregunta: ¿notaron, se interesaron, hicieron la acción objetivo, volvieron?",
        "Sin marco es fácil optimizar una métrica «bonita» en la etapa equivocada — p. ej. perseguir el CTR del banner mientras el formulario de lead está roto.",
      ],
      lists: [
        {
          intro: "Etapas y foco:",
          items: [
            "alcance — encuentro con la oferta",
            "engagement — clic e interés en el sitio",
            "conversión — lead/pedido",
            "lealtad — repetición y LTV",
          ],
        },
      ],
    },
    {
      title: "Entrada: CTR y CPC",
      level: 2,
      paras: [
        "CTR = clics ÷ impresiones × 100%. Un CTR bajo a menudo significa: audiencia equivocada, creativo que no destaca, oferta floja o fuera de temporada. CPC = presupuesto ÷ clics — coste medio de una visita atraída; nicho, competencia, temporada y plataforma lo afectan.",
        "CTR y CPC diagnostican el anuncio y la subasta. No responden si los ads se pagaron solos.",
      ],
      lists: [
        {
          intro: "Si el CTR bajó, revisa:",
          items: [
            "encaje de audiencia y oferta",
            "legibilidad del creativo",
            "estacionalidad y competidores",
            "encaje de la landing con la promesa",
          ],
        },
      ],
    },
    {
      title: "En el sitio: bounce, profundidad, tiempo",
      level: 2,
      paras: [
        "Tras el clic, mira si la persona se queda. Bounce alto: navegación torpe, misclick, oferta fina, descripción floja. Los heatmaps ayudan a ver dónde cliclan — pero primero quita barreras claras (botón de lead, carrito, velocidad).",
        "Profundidad y duración de visita ayudan en sitios multi-página. En una landing de una página son KPIs más débiles: alguien puede leer rápido y convertir — o irse en 20 segundos sin lead. Mira goals y scroll hasta la oferta.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Las métricas de comportamiento malas a menudo se echan a «los ads», mientras la landing necesita arreglo. Revisa la relevancia anuncio–página antes de escalar presupuesto.",
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Tasa de rechazo del sitio",
          href: "/es/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Conversión: CPA, CPO y CR",
      level: 2,
      paras: [
        "CR = conversiones ÷ sesiones × 100%. CPA = presupuesto ÷ acciones objetivo. CPO = presupuesto ÷ pedidos (incluidos fallidos si así contabilizas). El goal depende del negocio: lead, llamada, install, pago.",
        "Geo, competencia y complejidad del producto afectan al CPA. Compara display y búsqueda con el rol en mente: display más a menudo alimenta el inicio del funnel; búsqueda — demanda caliente. Si no, el display «caro» parece inútil solo por el last click.",
      ],
      links: [
        {
          label: "ROI y ROMI",
          href: "/es/blog/roi-marketinga/",
        },
        {
          label: "Conversiones asistidas",
          href: "/es/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "Dinero: ticket medio y LTV",
      level: 2,
      paras: [
        "El ticket medio (y ARPU/AOV cercanos) muestra cuánto dinero trae una acción objetivo. LTV es el valor del cliente a lo largo de la relación: AOV × frecuencia de recompra × vida del cliente (simplificado).",
        "Las compras repetidas suelen costar menos que la primera. Así un canal con un CPA un poco más alto puede ser mejor si trae clientes de LTV fuerte. Para la foto completa, une ads al CRM — analytics end-to-end.",
      ],
      links: [
        {
          label: "Ticket medio",
          href: "/blog/sredniy-chek/",
        },
        {
          label: "Analytics end-to-end",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "Los ads funcionan cuando las métricas se alinean a lo largo del funnel: interés (CTR/CPC), calidad de la visita, coste de la acción y economía del cliente. No te quedes en los clics — lleva la vista a CPA, margen y LTV.",
  ],
  related: [
    "roi-marketinga",
    "optimizatsiya-konversii",
    "assotsiirovannye-konversii",
    "sredniy-chek",
    "skvoznaya-analitika",
    "otkazy-sayta",
  ],
};

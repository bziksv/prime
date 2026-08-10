import type { BlogPost } from "../../../data/blog";

/** EN overlay for byudzhet-yandeks-direkt — same structure as RU JSON. */
export const byudzhetYandeksDirektEn: BlogPost = {
  slug: "byudzhet-yandeks-direkt",
  title: "Minimum budget for Yandex Direct: how to calculate it",
  date: "2020-10-22",
  category: "Paid search",
  cover: "/images/blog/byudzhet-yandeks-direkt/cover-en.webp",
  excerpt:
    "How to estimate a starting budget in Yandex Direct: PPC and the auction, CPC ceiling from unit economics, daily and weekly caps, and ways not to burn money — without a universal sum for everyone.",
  lead: [
    "There’s no universal “minimum Yandex Direct budget” for every niche: the sum depends on goal, region, competition, site conversion, and acceptable CPA. An “N thousand a week” formula from someone else’s case rarely transfers one-to-one.",
    "Below: PPC logic, what drives click price, how to sketch a start via the forecast tool and unit economics, how daily/weekly caps help, and how to save without choking impressions. Strategy names and account thresholds — check current Yandex Help; the UI has changed since 2020.",
  ],
  faq: [
    {
      q: "Is there an official Direct launch minimum budget?",
      a: "The account may have technical thresholds (e.g. for a daily cap) — current figures only in Help. “Minimum for the business to pay off” is your economics, not a Direct button.",
    },
    {
      q: "How do you rough out a Direct budget fast?",
      a: "Compass: forecast tool on keywords × expected clicks, plus a CPC ceiling from target CPA and site conversion. Without goals in analytics the forecast stays blind.",
    },
    {
      q: "How is a daily budget different from the account balance?",
      a: "The account balance is the wallet. A daily/weekly cap is the campaign spend ceiling for the period so you don’t burn everything before noon.",
    },
    {
      q: "Does a tiny daily cap equal real savings?",
      a: "Not always. Too low a cap cuts statistics and hurts auto-strategy learning. Prefer a narrow keyword set and negatives over “a few dollars a day for the whole catalog.”",
    },
    {
      q: "Is watching CTR enough to manage budget?",
      a: "No. You need conversions, lead cost, and inquiry quality. High CTR with no leads burns budget.",
    },
    {
      q: "Is budget planning the same as click price and bids?",
      a: "Related, but the focus differs: here it’s spend horizon and caps. CPC math and bid control live in separate pieces.",
    },
    {
      q: "Can you copy a competitor’s Direct budget?",
      a: "No. Their numbers are incomplete and not about your margin. Calculate from your funnel.",
    },
  ],
  sections: [
    {
      title: "PPC and what builds spend",
      level: 2,
      paras: [
        "In classic Search and many Direct formats you pay per click (PPC): impressions alone don’t equal charge until the user clicks. Final CPC is the auction, ad quality, and competition; you set a bid ceiling or auto-strategy bounds.",
        "Rough campaign estimate: average CPC × click count. An example like “1000 clicks × $0.25 = $250” is useful as an order of magnitude, but average CPC floats by niche, keywords, region, and season — it isn’t a price list.",
      ],
      lists: [
        {
          intro: "Spend is driven by:",
          items: [
            "demand and competition on queries",
            "ad quality and landing relevance",
            "geography and impression schedule",
            "Search / YAN mix",
            "negatives and keyword hygiene",
          ],
        },
      ],
      links: [
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Click price: what matters more than “bid higher”",
      level: 2,
      paras: [
        "Seasonality lifts bids at demand peaks — sometimes it’s smarter to enter before the wave, not on the most expensive day. Placement and ad block also change economics: don’t confuse visibility with payback.",
        "Higher CTR and relevance often help you pay less for the same outcome. A headline with concrete benefit and price (where fitting) usually beats a vague “where to buy… with us.” The landing must match the ad promise — or you pay for a quick bounce.",
        "Sitelinks and callouts cut wrong clicks when a query has several readings. Account history and “keyword — ad — URL” quality enter the auction; don’t expect domain magic from old guides — watch current quality signals in the account.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Set the CPC ceiling from target CPA and site conversion — not from someone else’s market average. More in the click-price piece.",
        },
      ],
    },
    {
      title: "How to sketch a minimum start",
      level: 2,
      paras: [
        "Direct has a forecast tool: region, keywords, click and bid guides. For a draft the core set is enough — not a 10,000-phrase brief. Forecast numbers are order of magnitude, not a guarantee of next week’s spend.",
        "In parallel lock the goal (lead, call, order) and acceptable CPA. If ~1% of clicks convert and a lead can cost $25, the click ceiling is around $0.25 — then either the market fits the economics, or you narrow keywords and improve the landing — not throw budget at a loss.",
        "A weekly horizon helps cash planning: how many clicks and leads you really need in 7 days for a meaningful test. Strategy names (“optimize clicks,” packages, average CPC) have changed — pick the model for the goal in the current UI and Help.",
      ],
      lists: [
        {
          intro: "Minimum for a meaningful test:",
          items: [
            "goal and how it’s tracked in analytics",
            "narrow commercial set + negatives",
            "daily or weekly cap",
            "CPC ceiling / target CPA",
            "a horizon of several days without hourly bid twitching",
          ],
        },
      ],
      links: [
        {
          label: "Keywords in Direct",
          href: "/en/blog/klyuchi-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Account balance, daily and weekly caps",
      level: 2,
      paras: [
        "One account balance simplifies payment: campaigns draw from one wallet. Funding and autopay methods — check the account; the set has changed over time.",
        "A daily budget caps spend per day: useful at launch and with unstable keywords. Standard / distributed mode (or current analogs) affects whether the cap burns in the morning or stretches across the day and schedule. Technical minimums and change limits — only from Help, not 2020 articles.",
        "Too harsh a cap on a wide set yields few clicks and few conclusions. Prefer fewer keywords and a normal test volume over token money for the whole catalog.",
      ],
      notes: [
        {
          kind: "tip",
          text: "A cap is insurance against a burn — not a substitute for negatives and relevant landing pages. If clicks are expensive and empty, raising the daily budget is pointless.",
        },
      ],
    },
    {
      title: "How not to burn budget early",
      level: 2,
      paras: [
        "Impression schedule: align with hours when leads get handled and with niche specifics. Round-the-clock reach on a tiny budget often spreads clicks with no operator reply.",
        "Negatives cut junk wording and raise the share of target visits — reach drops, but you pay less beside the point. Split regions or at least don’t mix expensive and cheap geos in one pile without need: economics and tests are easier to read.",
        "Before launch lock goal, budget hypothesis, and success criterion. After — match spend to revenue/margin and watch the funnel (including e-commerce and call tracking if you have them). ROI = (revenue − ad cost) / cost × 100% — a channel payback compass, not a magic Direct button.",
      ],
      lists: [
        {
          intro: "Working control minimum:",
          items: [
            "analytics goals for lead/order/call",
            "search-term report and negatives",
            "CPA / ROAS next to CTR",
            "separate view of Search and YAN",
            "decision: narrow, improve ad/landing, or stop",
          ],
        },
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Verdict: what budget is “minimum”",
      level: 2,
      paras: [
        "A minimum meaningful budget is one where, over the chosen horizon, you gather enough clicks and conversions to see whether the channel fits the economics. Some need hundreds of leads a week; others — a dozen local-service inquiries.",
        "You can’t name an exact sum without niche, audience, and margin analysis. A competitor’s budget isn’t a benchmark. Check strategy names, cap thresholds, and account buttons in Help; lean on CPA, conversion, and negatives — not someone else’s “minimum from an article.”",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "no single Direct minimum sum",
            "calculate from goal and CPA — not outsider cases",
            "caps protect cash; keyword set and negatives protect traffic quality",
            "forecast ≈ order of magnitude",
            "current thresholds — only in Yandex Help",
          ],
        },
      ],
    },
  ],
  closing: [
    "Lock the goal and acceptable CPA, build a narrow set with negatives, set a daily or weekly cap, and give the test several calm days — then expand only what fits the economics.",
  ],
  related: [
    "tsena-klika-yandeks",
    "stavki-direkt",
    "strategii-yandeks-direkt",
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "kontekst-i-seo",
  ],
};

/** ES overlay for byudzhet-yandeks-direkt — same structure as RU JSON / EN. */
export const byudzhetYandeksDirektEs: BlogPost = {
  slug: "byudzhet-yandeks-direkt",
  title: "Presupuesto mínimo para Yandex Direct: cómo calcularlo",
  date: "2020-10-22",
  category: "Paid search",
  cover: "/images/blog/byudzhet-yandeks-direkt/cover-es.webp",
  excerpt:
    "Cómo estimar un presupuesto de arranque en Yandex Direct: PPC y la subasta, techo de CPC desde unit economics, caps diarios y semanales, y formas de no quemar dinero — sin una suma universal para todos.",
  lead: [
    "No hay un «presupuesto mínimo de Yandex Direct» universal para cada nicho: la suma depende del objetivo, región, competencia, conversión del sitio y CPA aceptable. Una fórmula de «N mil a la semana» del caso de otro rara vez se transfiere uno a uno.",
    "Abajo: lógica PPC, qué mueve el precio del clic, cómo esbozar el arranque vía herramienta de forecast y unit economics, cómo ayudan los caps diarios/semanales y cómo ahorrar sin ahogar impresiones. Nombres de estrategias y umbrales de cuenta — revisa la Ayuda actual de Yandex; la UI ha cambiado desde 2020.",
  ],
  faq: [
    {
      q: "¿Hay un presupuesto mínimo oficial de lanzamiento en Direct?",
      a: "La cuenta puede tener umbrales técnicos (p. ej. para un cap diario) — cifras actuales solo en la Ayuda. El «mínimo para que el negocio se pague» es tu economía, no un botón de Direct.",
    },
    {
      q: "¿Cómo esbozar rápido un presupuesto de Direct?",
      a: "Brújula: herramienta de forecast sobre keywords × clics esperados, más un techo de CPC desde CPA objetivo y conversión del sitio. Sin goals en analytics el forecast se queda ciego.",
    },
    {
      q: "¿En qué se diferencia un presupuesto diario del saldo de la cuenta?",
      a: "El saldo de la cuenta es la cartera. Un cap diario/semanal es el techo de gasto de la campaña en el periodo para no quemarlo todo antes del mediodía.",
    },
    {
      q: "¿Un cap diario minúsculo equivale a ahorro real?",
      a: "No siempre. Un cap demasiado bajo corta estadísticas y perjudica el aprendizaje de auto-estrategias. Prefiere un set estrecho de keywords y negativas a «unos pocos dólares al día para todo el catálogo».",
    },
    {
      q: "¿Basta mirar el CTR para gestionar el presupuesto?",
      a: "No. Necesitas conversiones, coste del lead y calidad de la consulta. Un CTR alto sin leads quema presupuesto.",
    },
    {
      q: "¿Planificar presupuesto es lo mismo que precio del clic y pujas?",
      a: "Relacionado, pero el foco difiere: aquí es horizonte de gasto y caps. La matemática del CPC y el control de pujas viven en piezas aparte.",
    },
    {
      q: "¿Puedo copiar el presupuesto de Direct de un competidor?",
      a: "No. Sus números están incompletos y no van de tu margen. Calcula desde tu funnel.",
    },
  ],
  sections: [
    {
      title: "PPC y qué construye el gasto",
      level: 2,
      paras: [
        "En Search clásico y muchos formatos de Direct pagas por clic (PPC): las impresiones solas no equivalen a cargo hasta que el usuario hace clic. El CPC final es la subasta, la calidad del anuncio y la competencia; tú fijas un techo de puja o límites de auto-estrategia.",
        "Estimación aproximada de campaña: CPC medio × cantidad de clics. Un ejemplo como «1000 clics × $0.25 = $250» sirve como orden de magnitud, pero el CPC medio flota por nicho, keywords, región y temporada — no es una lista de precios.",
      ],
      lists: [
        {
          intro: "El gasto lo impulsan:",
          items: [
            "demanda y competencia en consultas",
            "calidad del anuncio y relevancia de la landing",
            "geografía y horario de impresiones",
            "mix Search / YAN",
            "negativas e higiene de keywords",
          ],
        },
      ],
      links: [
        {
          label: "Precio del clic en Yandex",
          href: "/es/blog/tsena-klika-yandeks/",
        },
        {
          label: "Pujas en Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Precio del clic: qué importa más que «puja más alto»",
      level: 2,
      paras: [
        "La estacionalidad sube pujas en picos de demanda — a veces es más inteligente entrar antes de la ola, no el día más caro. Emplazamiento y bloque de ads también cambian la economía: no confundas visibilidad con payback.",
        "Un CTR y una relevancia más altos a menudo ayudan a pagar menos por el mismo resultado. Un titular con beneficio concreto y precio (donde encaje) suele ganar a un vago «dónde comprar… con nosotros». La landing debe coincidir con la promesa del anuncio — o pagas un bounce rápido.",
        "Sitelinks y callouts cortan clics equivocados cuando una consulta tiene varias lecturas. El historial de la cuenta y la calidad «keyword — anuncio — URL» entran en la subasta; no esperes magia de dominio de guías viejas — mira las señales de calidad actuales en la cuenta.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Fija el techo de CPC desde CPA objetivo y conversión del sitio — no desde el promedio de mercado de otro. Más en la pieza del precio del clic.",
        },
      ],
    },
    {
      title: "Cómo esbozar un arranque mínimo",
      level: 2,
      paras: [
        "Direct tiene una herramienta de forecast: región, keywords, guías de clics y pujas. Para un borrador basta el set del núcleo — no un brief de 10.000 frases. Los números del forecast son orden de magnitud, no garantía del gasto de la semana que viene.",
        "En paralelo fija el goal (lead, llamada, pedido) y un CPA aceptable. Si ~1% de los clics convierte y un lead puede costar $25, el techo del clic ronda $0.25 — entonces o el mercado encaja con la economía, o estrechas keywords y mejoras la landing — no tiras presupuesto a pérdida.",
        "Un horizonte semanal ayuda a planificar caja: cuántos clics y leads necesitas de verdad en 7 días para un test con sentido. Los nombres de estrategias («optimizar clics», paquetes, CPC medio) han cambiado — elige el modelo para el goal en la UI y la Ayuda actuales.",
      ],
      lists: [
        {
          intro: "Mínimo para un test con sentido:",
          items: [
            "goal y cómo se trackea en analytics",
            "set comercial estrecho + negativas",
            "cap diario o semanal",
            "techo de CPC / CPA objetivo",
            "un horizonte de varios días sin torcer pujas cada hora",
          ],
        },
      ],
      links: [
        {
          label: "Keywords en Direct",
          href: "/blog/klyuchi-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Saldo de cuenta, caps diarios y semanales",
      level: 2,
      paras: [
        "Un solo saldo de cuenta simplifica el pago: las campañas sacan de una cartera. Métodos de funding y autopago — revisa la cuenta; el set ha cambiado con el tiempo.",
        "Un presupuesto diario limita el gasto por día: útil al lanzar y con keywords inestables. El modo estándar / distribuido (o análogos actuales) afecta a si el cap se quema por la mañana o se estira a lo largo del día y del horario. Mínimos técnicos y límites de cambio — solo desde la Ayuda, no desde artículos de 2020.",
        "Un cap demasiado duro sobre un set amplio da pocos clics y pocas conclusiones. Prefiere menos keywords y un volumen de test normal a dinero simbólico para todo el catálogo.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Un cap es seguro contra una quema — no un sustituto de negativas y landings relevantes. Si los clics son caros y vacíos, subir el presupuesto diario no tiene sentido.",
        },
      ],
    },
    {
      title: "Cómo no quemar presupuesto pronto",
      level: 2,
      paras: [
        "Horario de impresiones: alinea con las horas en que se atienden leads y con las particularidades del nicho. Alcance 24/7 con presupuesto minúsculo a menudo reparte clics sin respuesta del operador.",
        "Las negativas cortan formulaciones basura y suben la cuota de visitas objetivo — baja el alcance, pero pagas menos al lado del punto. Separa regiones o al menos no mezcles geos caros y baratos en un montón sin necesidad: economía y tests se leen más fácil.",
        "Antes del lanzamiento fija goal, hipótesis de presupuesto y criterio de éxito. Después — cruza gasto con ingresos/margen y mira el funnel (incluido e-commerce y call tracking si los tienes). ROI = (ingresos − coste de ads) / coste × 100% — brújula de payback del canal, no un botón mágico de Direct.",
      ],
      lists: [
        {
          intro: "Mínimo de control de trabajo:",
          items: [
            "goals de analytics para lead/pedido/llamada",
            "informe de search terms y negativas",
            "CPA / ROAS junto al CTR",
            "vista aparte de Search y YAN",
            "decisión: estrechar, mejorar anuncio/landing o parar",
          ],
        },
      ],
      links: [
        {
          label: "Negativas en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
        {
          label: "Estrategias de Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Veredicto: qué presupuesto es «mínimo»",
      level: 2,
      paras: [
        "Un presupuesto mínimo con sentido es aquel con el que, en el horizonte elegido, reúnes clics y conversiones suficientes para ver si el canal encaja con la economía. Algunos necesitan cientos de leads a la semana; otros — una docena de consultas de servicio local.",
        "No puedes nombrar una suma exacta sin análisis de nicho, audiencia y margen. El presupuesto de un competidor no es un benchmark. Revisa nombres de estrategias, umbrales de cap y botones de cuenta en la Ayuda; apóyate en CPA, conversión y negativas — no en el «mínimo de un artículo» ajeno.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "no hay una sola suma mínima de Direct",
            "calcula desde goal y CPA — no desde casos ajenos",
            "los caps protegen la caja; el set de keywords y las negativas protegen la calidad del tráfico",
            "forecast ≈ orden de magnitud",
            "umbrales actuales — solo en la Ayuda de Yandex",
          ],
        },
      ],
    },
  ],
  closing: [
    "Fija el goal y un CPA aceptable, arma un set estrecho con negativas, pon un cap diario o semanal y da al test varios días tranquilos — luego escala solo lo que encaje con la economía.",
  ],
  related: [
    "tsena-klika-yandeks",
    "stavki-direkt",
    "strategii-yandeks-direkt",
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "kontekst-i-seo",
  ],
};

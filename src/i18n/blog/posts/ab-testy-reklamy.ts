import type { BlogPost } from "../../../data/blog";

/** EN overlay for ab-testy-reklamy — same structure as RU JSON. */
export const abTestyReklamyEn: BlogPost = {
  slug: "ab-testy-reklamy",
  title: "A/B testing ads in Yandex Direct and Google Ads",
  date: "2019-02-07",
  category: "Paid search",
  cover: "/images/blog/ab-testy-reklamy/cover-en.webp",
  excerpt:
    "How to run fair ad tests in Yandex Direct and Google Ads: rotation, reports, campaign experiments, and what to do when volume is low — without clinging to 2019 menu paths.",
  lead: [
    "A split test in paid search puts two (or a few) creatives or settings on comparable traffic so you can pick a winner on money metrics — not who won the CTR race.",
    "Both Direct and Google Ads can rotate ads and run campaign experiments. Labels in the UI shift over time; the loop doesn’t: equal chance → enough data → decide on CPA or ROI. Landing-page tests live in the conversion optimization piece.",
  ],
  faq: [
    {
      q: "Can I just run two ads in one group?",
      a: "Yes for headlines and body. For bids, strategies, or structure changes, use a campaign experiment if your account has it.",
    },
    {
      q: "Does the ad with the best CTR always win?",
      a: "No. A click magnet that burns budget on junk traffic loses to a quieter ad with a sane CPA. Score the business outcome.",
    },
    {
      q: "How long should a test run?",
      a: "Until conversions (or enough clicks) support a call — not a fixed “seven days from the handbook.” If traffic is tiny, don’t bother testing yet.",
    },
    {
      q: "Can I change several things at once?",
      a: "One hypothesis at a time: headline, or offer, or landing. Change everything and you’ll never know what moved.",
    },
    {
      q: "Do I need UTMs?",
      a: "For Metrica/GA4 side-by-side — yes, plus ad IDs in URL templates when the platform fills them.",
    },
  ],
  sections: [
    {
      title: "Why bother testing ads",
      level: 2,
      paras: [
        "Same query, different copy — and you can get different CTR, bounce, and cost per lead. Skip the test and you’re steering by gut or by one lucky week.",
        "Platform rotation helps share impressions fairly. Reports and experiments go further: strategies, negatives, even bid logic.",
      ],
      lists: [
        {
          intro: "Common test surfaces:",
          items: [
            "headlines and descriptions",
            "sitelinks and callouts",
            "offer and USP",
            "landing pages (one change at a time)",
            "bids and strategies through an experiment",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "What Direct already does for you",
      level: 2,
      paras: [
        "Several ads in one group: after stats build up, the system often leans impressions toward the more clickable ones — gradually. Exact toggle names live in the current account UI.",
        "Early on, variants usually share traffic. Don’t kill the “loser” after ten clicks.",
      ],
      lists: [
        {
          intro: "Working habits:",
          items: [
            "two or three variants, not a dozen",
            "one variable per test",
            "wait for real volume",
            "judge by goals, not CTR alone",
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
    {
      title: "Google Ads: rotation and experiments",
      level: 2,
      paras: [
        "Google long offered rotation modes — push the winners, or share more evenly. Names change; the choice is still “give everyone a shot” vs “favor what already works.”",
        "Campaign experiments (the old drafts-and-experiments path) split traffic so you can compare bids, keywords, negatives, and strategies. Use them when a second ad isn’t enough.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Following a 2019 screenshot path like “Additional settings → ad rotation.” Look up what the setting does in today’s UI or Google Help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Reading the reports",
      level: 2,
      paras: [
        "Direct: Report Wizard — cut by group and ad ID or text; pull clicks, conversions, CPA. Google Ads: ad reports and experiment reports.",
        "Money beats vanity: CPA, ROAS/ROI, qualified leads, closed deals. Mind attribution — last click can undervalue upper-funnel ads.",
      ],
      lists: [
        {
          intro: "Minimum columns:",
          items: [
            "impressions, clicks, CTR",
            "conversions and CPA",
            "spend",
            "bounce / depth in analytics when you can",
            "search and display viewed apart",
          ],
        },
      ],
    },
    {
      title: "Not enough data yet",
      level: 2,
      paras: [
        "If a single ad is too thin, roll up carefully: compare copy only where the one variable actually differs. Don’t mash unrelated group themes into one “best text forever” ranking.",
        "Broken UTMs and missing ad IDs wreck summary tables. Templates are covered in the UTM article.",
      ],
      lists: [
        {
          intro: "Stop the test early if:",
          items: [
            "conversions are still in single digits",
            "the week had weird demand",
            "you also changed bids and keywords",
            "search and display are mixed in one view",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Click costs in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "How to compare without fooling yourself",
      level: 2,
      paras: [
        "Same headline and keywords, only the body changes — grouping by text is fair. Headline plus different neighbor-group themes — “best text overall” will lie to you.",
        "Keep search and display separate: CTR and traffic quality aren’t the same game. End each test with an action: pause the weak, scale the strong, or start a new hypothesis.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A/B in Direct and Google Ads = rotation or experiments + money reports. One hypothesis, enough data, decide on CPA or ROI.",
        "Low volume — roll up carefully or keep collecting. Don’t crown a one-day CTR champ.",
      ],
    },
  ],
  closing: [
    "Ship two or three variants, change one thing, wait for stats, pick the winner on business goals — that’s when paid-search split tests save budget instead of cluttering every ad group.",
  ],
  related: [
    "optimizatsiya-konversii",
    "strategii-yandeks-direkt",
    "utm-metki",
    "tsena-klika-yandeks",
    "retargeting-direkt",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for ab-testy-reklamy — same structure as RU JSON / EN. */
export const abTestyReklamyEs: BlogPost = {
  slug: "ab-testy-reklamy",
  title: "Tests A/B de ads en Yandex Direct y Google Ads",
  date: "2019-02-07",
  category: "Paid search",
  cover: "/images/blog/ab-testy-reklamy/cover-es.webp",
  excerpt:
    "Cómo correr tests justos de anuncios en Yandex Direct y Google Ads: rotación, informes, experimentos de campaña y qué hacer cuando el volumen es bajo — sin aferrarte a rutas de menú de 2019.",
  lead: [
    "Un split test en paid search pone dos (o unos pocos) creativos o ajustes en tráfico comparable para elegir un ganador por métricas de dinero — no por quién ganó la carrera de CTR.",
    "Tanto Direct como Google Ads pueden rotar ads y correr experimentos de campaña. Las etiquetas de la UI cambian con el tiempo; el bucle no: oportunidad igual → datos suficientes → decidir por CPA o ROI. Los tests de landing viven en la pieza de optimización de conversión.",
  ],
  faq: [
    {
      q: "¿Puedo solo correr dos ads en un grupo?",
      a: "Sí para titulares y cuerpo. Para pujas, estrategias o cambios de estructura, usa un experimento de campaña si tu cuenta lo tiene.",
    },
    {
      q: "¿Siempre gana el anuncio con mejor CTR?",
      a: "No. Un imán de clics que quema presupuesto en tráfico basura pierde frente a un anuncio más callado con un CPA sensato. Puntúa el resultado de negocio.",
    },
    {
      q: "¿Cuánto debe durar un test?",
      a: "Hasta que las conversiones (o clics suficientes) sostengan una decisión — no un fijo «siete días del manual». Si el tráfico es minúsculo, aún no vale la pena testear.",
    },
    {
      q: "¿Puedo cambiar varias cosas a la vez?",
      a: "Una hipótesis a la vez: titular, u oferta, o landing. Cambia todo y nunca sabrás qué movió.",
    },
    {
      q: "¿Hacen falta UTMs?",
      a: "Para comparar lado a lado en Metrica/GA4 — sí, más IDs de anuncio en plantillas de URL cuando la plataforma los rellena.",
    },
  ],
  sections: [
    {
      title: "Por qué molestarse en testear ads",
      level: 2,
      paras: [
        "Misma consulta, copy distinto — y puedes obtener CTR, bounce y coste por lead distintos. Sin test te guias por intuición o por una semana de suerte.",
        "La rotación de la plataforma ayuda a repartir impresiones con justicia. Informes y experimentos van más lejos: estrategias, negativos, incluso lógica de pujas.",
      ],
      lists: [
        {
          intro: "Superficies habituales de test:",
          items: [
            "titulares y descripciones",
            "sitelinks y callouts",
            "oferta y USP",
            "landing pages (un cambio a la vez)",
            "pujas y estrategias vía experimento",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Qué hace Direct ya por ti",
      level: 2,
      paras: [
        "Varios ads en un grupo: cuando se acumulan stats, el sistema a menudo inclina las impresiones hacia los más clicables — de forma gradual. Los nombres exactos de los toggles viven en la UI actual de la cuenta.",
        "Al principio, las variantes suelen compartir tráfico. No mates al «perdedor» tras diez clics.",
      ],
      lists: [
        {
          intro: "Hábitos de trabajo:",
          items: [
            "dos o tres variantes, no una docena",
            "una variable por test",
            "esperar volumen real",
            "juzgar por goals, no solo por CTR",
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
    {
      title: "Google Ads: rotación y experimentos",
      level: 2,
      paras: [
        "Google ofreció durante mucho tiempo modos de rotación — empujar ganadores, o repartir más parejo. Los nombres cambian; la elección sigue siendo «dar a todos una oportunidad» vs «favorecer lo que ya funciona».",
        "Los experimentos de campaña (la vieja ruta de drafts-and-experiments) parten el tráfico para comparar pujas, keywords, negativos y estrategias. Úsalos cuando un segundo anuncio no basta.",
      ],
      notes: [
        {
          title: "Error frecuente",
          text: "Seguir una ruta de captura de 2019 tipo «Additional settings → ad rotation». Mira qué hace el ajuste en la UI de hoy o en la Ayuda de Google.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Leer los informes",
      level: 2,
      paras: [
        "Direct: Report Wizard — corta por grupo e ID o texto del anuncio; saca clics, conversiones, CPA. Google Ads: informes de ads e informes de experimentos.",
        "El dinero gana a la vanidad: CPA, ROAS/ROI, leads cualificados, tratos cerrados. Cuida la atribución — el last click puede infravalorar ads del inicio del funnel.",
      ],
      lists: [
        {
          intro: "Columnas mínimas:",
          items: [
            "impresiones, clics, CTR",
            "conversiones y CPA",
            "gasto",
            "bounce / profundidad en analytics cuando puedas",
            "búsqueda y display vistos por separado",
          ],
        },
      ],
    },
    {
      title: "Aún no hay datos suficientes",
      level: 2,
      paras: [
        "Si un solo anuncio es demasiado fino, agrega con cuidado: compara copy solo donde la variable realmente difiere. No mezcles temas de grupos no relacionados en un «mejor texto para siempre».",
        "UTMs rotas e IDs de anuncio que faltan destrozan las tablas resumen. Las plantillas están en el artículo de UTM.",
      ],
      lists: [
        {
          intro: "Para el test pronto si:",
          items: [
            "las conversiones siguen en un dígito",
            "la semana tuvo demanda rara",
            "también cambiaste pujas y keywords",
            "búsqueda y display están mezclados en una vista",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Coste del clic en Yandex",
          href: "/es/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Cómo comparar sin engañarte",
      level: 2,
      paras: [
        "Mismo titular y keywords, solo cambia el cuerpo — agrupar por texto es justo. Titular más temas distintos de grupos vecinos — el «mejor texto en global» te mentirá.",
        "Mantén búsqueda y display separados: CTR y calidad del tráfico no son el mismo juego. Cierra cada test con una acción: pausa lo flojo, escala lo fuerte, o arranca una hipótesis nueva.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "A/B en Direct y Google Ads = rotación o experimentos + informes de dinero. Una hipótesis, datos suficientes, decidir por CPA o ROI.",
        "Volumen bajo — agrega con cuidado o sigue acumulando. No corones un campeón de CTR de un día.",
      ],
    },
  ],
  closing: [
    "Lanza dos o tres variantes, cambia una cosa, espera stats, elige el ganador por goals de negocio — ahí es cuando los split tests de paid search ahorran presupuesto en lugar de llenar de ruido cada grupo de anuncios.",
  ],
  related: [
    "optimizatsiya-konversii",
    "strategii-yandeks-direkt",
    "utm-metki",
    "tsena-klika-yandeks",
    "retargeting-direkt",
    "skvoznaya-analitika",
  ],
};

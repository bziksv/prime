import type { BlogPost } from "../../../data/blog";

/** ES overlay for bidder — same structure as RU JSON. */
export const bidderEs: BlogPost = {
  slug: "bidder",
  title: "Bidder (gestor de pujas): para qué sirve y cómo elegirlo",
  date: "2018-03-14",
  category: "Paid search",
  cover: "/images/blog/bidder/cover.webp",
  excerpt:
    "Qué es un bidder para Direct y Google Ads: gestión automatizada de pujas vía API, pros y contras, cuándo encaja una herramienta externa y cómo comprobar el efecto — junto a las estrategias nativas de la cuenta.",
  lead: [
    "Un bidder (gestor de pujas) es un servicio que, por reglas y API, mueve las pujas en búsqueda de pago sin retocar a mano cada anuncio. La idea es reaccionar a la subasta más rápido que una persona.",
    "Abajo: por qué los equipos conectan uno, fortalezas y debilidades, y cómo elegir. Las listas de marcas de 2018 están desfasadas — mira las funciones actuales de Direct/Ads y de cuentas de agencia. Puja más alta ≠ primera posición para siempre: la calidad del anuncio y de la landing también entran en la subasta.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un bidder de las pujas en Direct?",
      a: "En la cuenta — estrategias nativas manuales y automáticas. Un bidder es una capa externa de reglas sobre la API. A menudo bastan las estrategias integradas.",
    },
    {
      q: "¿Un principiante necesita bidder?",
      a: "Primero estructura, negativos, anuncios y objetivos. El auto-bidding sin base solo acelera el desperdicio.",
    },
    {
      q: "Si el bidder corre 24/7, ¿se pueden olvidar las campañas?",
      a: "No. Hacen falta límites, monitorización de CPA/gasto y edición de reglas. Autopilot sin informes es peligroso.",
    },
    {
      q: "¿Una puja más alta siempre da mejor posición?",
      a: "No siempre. Cuentan la puja y la calidad. Perseguir solo la primera posición es caro y no siempre más rentable.",
    },
    {
      q: "¿Qué servicio de bidder elegir?",
      a: "Uno que soporte tus cuentas, ofrezca reglas/límites claros y un log de cambios. No compres por anuncios de «garantizamos la posición 1».",
    },
    {
      q: "¿Cómo saber que el bidder ayuda?",
      a: "Compara before/after a igualdad de condiciones: gasto, CPA/CPL, cuota de clics objetivo. Sin baseline, las conclusiones son conjeturas.",
    },
    {
      q: "¿Acceso API y permisos del bidder son un riesgo?",
      a: "Sí: concede los derechos mínimos necesarios, guarda el acceso de forma centralizada, revócalo al cambiar de contratista.",
    },
  ],
  sections: [
    {
      title: "Para qué un gestor de pujas",
      level: 2,
      paras: [
        "En keywords competitivas las pujas se mueven sin parar. A mano no das abasto con cientos de grupos: el bidder sube/baja pujas por reglas, mantiene una posición o un CPC objetivo dentro de límites.",
        "Tiene sentido con muchas keywords/grupos y economía clara. En un test corto con una docena de keywords, suelen bastar las estrategias de la cuenta.",
      ],
      links: [
        {
          label: "Pujas en Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
        {
          label: "Precio del clic en Yandex",
          href: "/es/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Pros",
      level: 2,
      paras: [
        "Velocidad de reacción a la subasta y reglas compartidas en lugar de caos manual en miles de filas.",
        "Límites de gasto y corredores de puja objetivo ayudan a no explotar en un pico nocturno sin control.",
        "Algunas herramientas dan resúmenes de cambios e informes — útiles para una agencia con muchas cuentas.",
      ],
      lists: [
        {
          intro: "Cuándo suelen conectar uno:",
          items: [
            "muchos grupos y keywords",
            "reglas compartidas en un portfolio",
            "objetivos en analítica ya midiendo",
            "un límite y KPI para el test",
          ],
        },
      ],
    },
    {
      title: "Contras y riesgos",
      level: 2,
      paras: [
        "Reglas malas escalan el error: un bidder quema presupuesto rápido en irrelevancia.",
        "Dependencia de un servicio de terceros, precios y estabilidad de la API. Cambiar de herramienta es un proyecto aparte.",
        "La ilusión de que todo va solo: sin negativos, anuncios sólidos y landing, las auto-pujas no te salvan.",
      ],
      links: [
        {
          label: "Estrategias de Google Ads",
          href: "/es/blog/strategii-google-ads/",
        },
        {
          label: "Errores de setup en búsqueda de pago",
          href: "/es/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "Cómo elegir y verificar",
      level: 2,
      paras: [
        "Comprueba soporte de Direct/Ads, tipos de reglas (posición, CPA, límite diario), transparencia del log y revocación de acceso.",
        "No te apoyes en scorecards viejos de Elama / Aori de artículos de 2018 — el mercado de herramientas se movió; mira ofertas actuales y el contrato.",
        "Antes de activar, fija una o dos semanas de baseline. Después — compara KPI. Sin mejora con reglas correctas — simplifica o vuelve a las estrategias de la cuenta.",
      ],
      links: [
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Presupuesto en Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Los nombres de bidders de terceros en roundups viejos pueden estar desfasados o renombrados. Elige herramienta por capacidades API actuales y tu proceso — no por una lista de 2018.",
  },
  closing: [
    "Si la estructura y los objetivos ya están sólidos y las pujas manuales no dan abasto con la subasta — prueba un bidder en parte de las campañas con un límite duro; si no, cierra primero la higiene de setup.",
  ],
  related: [
    "stavki-direkt",
    "tsena-klika-yandeks",
    "strategii-google-ads",
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "oshibki-nastroyki-konteksta",
  ],
};

/** EN overlay for bidder — same structure as RU JSON. */
export const bidderEn: BlogPost = {
  slug: "bidder",
  title: "Bidder (bid manager): why you need it and how to choose",
  date: "2018-03-14",
  category: "Paid search",
  cover: "/images/blog/bidder/cover-en.webp",
  excerpt:
    "What a bidder is for Direct and Google Ads: automated bid management via API, pros and cons, when a third-party tool fits, and how to check the effect — next to native account strategies.",
  lead: [
    "A bidder (bid manager) is a service that, by rules and API, turns bids in paid search without manually tweaking every ad. The idea is to react to the auction faster than a person.",
    "Below: why teams connect one, strengths and weaknesses, and how to choose. Brand lists from 2018 are outdated — check current Direct/Ads and agency-account features. Highest bid ≠ forever first place: ad and landing-page quality are in the auction too.",
  ],
  faq: [
    {
      q: "How is a bidder different from bids in Direct?",
      a: "In the account — native manual and auto strategies. A bidder is an external rules layer on top of the API. Built-in strategies are often enough.",
    },
    {
      q: "Does a beginner need a bidder?",
      a: "First structure, negatives, ads, and goals. Auto-bidding without a base only speeds up waste.",
    },
    {
      q: "If the bidder runs 24/7, can you forget the campaigns?",
      a: "No. You need limits, CPA/spend monitoring, and rule edits. Autopilot without reports is dangerous.",
    },
    {
      q: "Does a higher bid always mean a higher position?",
      a: "Not always. Bid and quality both count. Chasing only first place is expensive and not always more profitable.",
    },
    {
      q: "Which bidder service should you choose?",
      a: "One that supports your accounts, offers clear rules/limits and a change log. Don’t buy on “guaranteed #1” ads.",
    },
    {
      q: "How can you tell the bidder is helping?",
      a: "Compare before/after with other things equal: spend, CPA/CPL, share of target clicks. Without a baseline, conclusions are guesswork.",
    },
    {
      q: "Are API access and bidder permissions a risk?",
      a: "Yes: grant the minimum needed rights, store access centrally, revoke when you change contractors.",
    },
  ],
  sections: [
    {
      title: "Why a bid manager",
      level: 2,
      paras: [
        "On competitive keywords bids drift constantly. Manually you can’t keep up with hundreds of groups: a bidder raises/lowers bids by rules, holds a position or a target CPC within set bounds.",
        "It makes sense with many keywords/groups and clear economics. On a short test with a dozen keywords, account strategies are usually enough.",
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Pros",
      level: 2,
      paras: [
        "Speed of reaction to the auction and shared rules instead of manual chaos across thousands of rows.",
        "Spend limits and target bid corridors help you not blow up on a night bid spike without control.",
        "Some tools give change summaries and reports — handy for an agency with many accounts.",
      ],
      lists: [
        {
          intro: "When teams usually connect one:",
          items: [
            "many groups and keywords",
            "shared rules across a portfolio",
            "goals in analytics already tracking",
            "a limit and KPI for the test",
          ],
        },
      ],
    },
    {
      title: "Cons and risks",
      level: 2,
      paras: [
        "Bad rules scale the mistake: a bidder quickly burns budget on irrelevance.",
        "Dependence on a third-party service, pricing, and API stability. Switching tools is a separate project.",
        "The illusion that everything runs itself: without negatives, solid ads, and a landing, auto-bids won’t save you.",
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "How to choose and verify",
      level: 2,
      paras: [
        "Check Direct/Ads support, rule types (position, CPA, daily limit), log transparency, and access revocation.",
        "Don’t rely on outdated Elama / Aori scorecards from 2018 articles — the tool market moved; check current offers and the contract.",
        "Before enabling, lock one or two weeks of baseline. After — compare KPIs. No improvement with correct rules — simplify or return to account strategies.",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Budget in Direct",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Third-party bidder names in old roundups may be outdated or renamed. Pick a tool by current API capabilities and your process — not by a 2018 list.",
  },
  closing: [
    "If structure and goals are already solid and manual bids can’t keep up with the auction — test a bidder on part of the campaigns with a hard limit; otherwise close setup hygiene first.",
  ],
  related: [
    "stavki-direkt",
    "tsena-klika-yandeks",
    "strategii-google-ads",
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "oshibki-nastroyki-konteksta",
  ],
};

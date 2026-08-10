import type { BlogPost } from "../../../data/blog";

/** EN overlay for ga4 — same structure as RU JSON. */
export const ga4En: BlogPost = {
  slug: "ga4",
  title: "What changed in Google Analytics 4: from sessions to events",
  date: "2020-10-16",
  category: "Digital marketing",
  cover: "/images/blog/ga4/cover-en.webp",
  excerpt:
    "How GA4 differs from Universal Analytics: event model, site and app in one property, enhanced measurements, audiences, and explorations. No UA nostalgia and no 2020 button screenshots.",
  lead: [
    "Google Analytics 4 replaced Universal Analytics’ familiar logic: instead of hits and sessions as the main axis — events and parameters. Site and app can live in one data scheme.",
    "Below: the essence of the shift and what to check in practice. UI and report names change; the measurement model matters more than widget layout from the 2020 beta. Ecommerce behavior in GA is a separate piece; goals/key events are in the conversions guide.",
  ],
  faq: [
    {
      q: "Does Universal Analytics still work?",
      a: "As a foundation — no. Build tracking in GA4. Historical UA data won’t migrate one-to-one — plan parallel collection early.",
    },
    {
      q: "What is the event model?",
      a: "Almost everything is an event with parameters (page_view, scroll, purchase…). Sessions are counted differently; you can’t compare UA and GA4 figures directly.",
    },
    {
      q: "Is Firebase required?",
      a: "For apps, GA4 has historically been close to Firebase Analytics. Web can run without a separate “app world,” but cross-platform is a GA4 strength.",
    },
    {
      q: "What are enhanced measurements?",
      a: "Built-in collection of typical actions (views, scroll, outbound clicks, site search, and more) without hand-coding every click. Check the current help for the list and names.",
    },
    {
      q: "Where did UA goals go?",
      a: "In GA4 — key events (conversions) based on events. Full breakdown — in the goals/conversions setup article.",
    },
  ],
  sections: [
    {
      title: "Main model shifts",
      level: 2,
      paras: [
        "One scheme for web and app: you can see the user path across surfaces if streams and identity are set correctly. Before, web and app often lived in different report universes.",
        "Sessions are no longer the center of the universe. Analytics builds around events: what the user did, with which parameters, in which context. That’s more flexible for SPAs, video, clicks, and micro-conversions — and harder for people used only to bounce as in UA.",
        "Enhanced measurements remove some routine: basic interactions can be turned on in stream settings. That doesn’t replace a thoughtful ecommerce and CRM scheme — it’s a start without dozens of tiny tags.",
        "Before/after on one chart without caveats misleads: different session model, cookie consent, blockers, and sampling in explorations. Compare trends inside GA4 — not yesterday’s UA bounce with today’s engagement.",
      ],
      links: [
        {
          label: "Google Analytics for a store",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "GA4 goals and conversions",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Reports, audiences, and migration practice",
      level: 2,
      paras: [
        "In the UI — engagement overviews, events, audiences, funnels, and Explorations. Pathing, cohorts, and realtime help, but tab names drift: learn the meaning (events, audience, funnel), don’t memorize a 2020 screenshot.",
        "The audience builder replaces part of UA segments: conditions at event, session, and user level can combine (e.g. desktop + completed a purchase). Audiences also help in Google Ads if accounts are linked.",
        "Funnels are built from event sequences; skipping a step usually drops the user from the chain — normal for an open funnel, but needs careful checkout-step tagging.",
        "Migration practice: install GA4 in parallel with old tracking (if not yet), check DebugView/realtime, mark key events, set ecommerce or at least purchase, align consent mode/cookie policy. GTM makes tag upkeep easier.",
        "Bottom line: GA4 isn’t a new UA skin — it’s another model. Master events and parameters — reports and explorations become a hypothesis tool, not a widget museum.",
      ],
      lists: [
        {
          intro: "Checklist after creating a GA4 property:",
          items: [
            "tag on all templates, no duplicate",
            "enhanced measurements as needed",
            "key events/conversions",
            "ecommerce or purchase equivalent",
            "check in realtime / DebugView",
            "internal traffic filter",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "google-analytics-tseli",
    "google-tag-manager",
    "skvoznaya-analitika",
    "metrika-tseli",
  ],
};

/** ES overlay for ga4 — same structure as RU JSON / EN. */
export const ga4Es: BlogPost = {
  slug: "ga4",
  title: "Qué cambió en Google Analytics 4: de sesiones a eventos",
  date: "2020-10-16",
  category: "Digital marketing",
  cover: "/images/blog/ga4/cover-es.webp",
  excerpt:
    "En qué se diferencia GA4 de Universal Analytics: modelo de eventos, sitio y app en una property, enhanced measurements, audiencias y explorations. Sin nostalgia de UA ni capturas de botones de 2020.",
  lead: [
    "Google Analytics 4 sustituyó la lógica familiar de Universal Analytics: en lugar de hits y sesiones como eje principal — eventos y parámetros. Sitio y app pueden vivir en un mismo esquema de datos.",
    "Abajo: la esencia del cambio y qué revisar en la práctica. UI y nombres de informes cambian; el modelo de medición importa más que el layout de widgets de la beta de 2020. El comportamiento ecommerce en GA es otra pieza; goals/key events están en la guía de conversiones.",
  ],
  faq: [
    {
      q: "¿Universal Analytics sigue funcionando?",
      a: "Como base — no. Monta el tracking en GA4. Los datos históricos de UA no migran uno a uno — planifica recolección en paralelo pronto.",
    },
    {
      q: "¿Qué es el modelo de eventos?",
      a: "Casi todo es un evento con parámetros (page_view, scroll, purchase…). Las sesiones se cuentan distinto; no puedes comparar cifras de UA y GA4 de forma directa.",
    },
    {
      q: "¿Hace falta Firebase?",
      a: "Para apps, GA4 históricamente ha estado cerca de Firebase Analytics. Web puede correr sin un «mundo app» aparte, pero el cross-platform es una fuerza de GA4.",
    },
    {
      q: "¿Qué son enhanced measurements?",
      a: "Recogida integrada de acciones típicas (vistas, scroll, clics outbound, búsqueda del sitio y más) sin codear a mano cada clic. Revisa la ayuda actual para la lista y los nombres.",
    },
    {
      q: "¿Dónde fueron los goals de UA?",
      a: "En GA4 — key events (conversiones) basados en eventos. Desglose completo — en el artículo de setup de goals/conversiones.",
    },
  ],
  sections: [
    {
      title: "Principales cambios de modelo",
      level: 2,
      paras: [
        "Un esquema para web y app: puedes ver el camino del usuario entre superficies si streams e identity están bien puestos. Antes, web y app a menudo vivían en universos de informes distintos.",
        "Las sesiones ya no son el centro del universo. Analytics se construye alrededor de eventos: qué hizo el usuario, con qué parámetros, en qué contexto. Eso es más flexible para SPAs, vídeo, clics y microconversiones — y más duro para quien solo conocía bounce como en UA.",
        "Enhanced measurements quitan parte de la rutina: interacciones básicas se pueden activar en ajustes del stream. Eso no sustituye un esquema pensado de ecommerce y CRM — es un arranque sin docenas de tags minúsculos.",
        "Antes/después en un solo gráfico sin matices engaña: modelo de sesión distinto, consentimiento de cookies, bloqueadores y sampling en explorations. Compara tendencias dentro de GA4 — no el bounce de UA de ayer con el engagement de hoy.",
      ],
      links: [
        {
          label: "Google Analytics para una tienda",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Goals y conversiones en GA4",
          href: "/es/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Informes, audiencias y práctica de migración",
      level: 2,
      paras: [
        "En la UI — overviews de engagement, eventos, audiencias, funnels y Explorations. Pathing, cohorts y realtime ayudan, pero los nombres de pestañas se mueven: aprende el significado (eventos, audiencia, funnel), no memorices una captura de 2020.",
        "El audience builder sustituye parte de los segmentos de UA: condiciones a nivel evento, sesión y usuario se pueden combinar (p. ej. desktop + completó una compra). Las audiencias también ayudan en Google Ads si las cuentas están enlazadas.",
        "Los funnels se arman con secuencias de eventos; saltarse un paso suele sacar al usuario de la cadena — normal en un funnel abierto, pero necesita etiquetado cuidadoso de los pasos de checkout.",
        "Práctica de migración: instala GA4 en paralelo con el tracking viejo (si aún no), revisa DebugView/realtime, marca key events, configura ecommerce o al menos purchase, alinea consent mode/política de cookies. GTM facilita el mantenimiento de tags.",
        "En resumen: GA4 no es una piel nueva de UA — es otro modelo. Domina eventos y parámetros — informes y explorations se vuelven herramienta de hipótesis, no un museo de widgets.",
      ],
      lists: [
        {
          intro: "Checklist tras crear una property GA4:",
          items: [
            "tag en todas las plantillas, sin duplicado",
            "enhanced measurements según necesites",
            "key events/conversiones",
            "ecommerce o equivalente de purchase",
            "comprobar en realtime / DebugView",
            "filtro de tráfico interno",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
        {
          label: "Analytics end-to-end",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "google-analytics-tseli",
    "google-tag-manager",
    "skvoznaya-analitika",
    "metrika-tseli",
  ],
};

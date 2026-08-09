import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics — same structure as RU JSON. */
export const googleAnalyticsEn: BlogPost = {
  slug: "google-analytics",
  title: "Google Analytics for an online store: reading customer behavior",
  date: "2020-10-13",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics/cover-en.webp",
  excerpt:
    "How to read store audience behavior in Google Analytics: segments, funnel, reports, and hypotheses — in GA4 logic, without worshipping “average” metrics.",
  lead: [
    "A counter alone won’t tell you why people don’t buy. For a store, Google Analytics pays off in segments and the funnel: who reaches the cart, where they drop, how new and returning visitors differ.",
    "Below: what you need before analysis, how to read the base reports, and how to push segmentation further. Tag install and goals are neighboring topics; here the focus is ecommerce behavior. The GA4 UI moves — trust metric meaning, not 2020 button paths.",
  ],
  faq: [
    {
      q: "GA or Yandex Metrika?",
      a: "Often both. Metrika fits RU traffic and session replay; GA fits the Google Ads ecosystem and cross-product reports. Follow the job, not “counter religion.”",
    },
    {
      q: "Are the standard reports enough?",
      a: "To start — yes: traffic, pages, events/conversions, ecommerce. Next step: segments and Explorations.",
    },
    {
      q: "What is a segment here?",
      a: "An audience slice by condition: source, device, funnel step, new vs returning, bought vs didn’t.",
    },
    {
      q: "Why bother with a funnel?",
      a: "So you stop staring at a site-wide average conversion and see where the path to order actually breaks.",
    },
    {
      q: "Do I need ecommerce markup?",
      a: "Yes — or you won’t see products, revenue, and purchase steps. Without it you’re stuck on pageviews.",
    },
    {
      q: "How often should I open reports?",
      a: "Weekly for funnel and sources. Deep segments only under a hypothesis — not daily “for numbers.”",
    },
    {
      q: "What about personal data?",
      a: "Don’t push PII into GA against policy. Follow cookie consent and platform rules.",
    },
    {
      q: "Is Universal Analytics still fine?",
      a: "Not as a base. Work in GA4 (events, parameters). Don’t copy old Universal screenshots one-to-one.",
    },
  ],
  sections: [
    {
      title: "What you need before you analyze",
      level: 2,
      paras: [
        "A working GA4 property, a correct tag on every template, events for key actions (product view, cart, checkout, purchase), and ecommerce parameters where you can. Without filtering office traffic, the numbers get noisy.",
        "Agree on goals first: conversion, average order value, repeat purchases. Otherwise the report becomes a tour of charts.",
      ],
      lists: [
        {
          intro: "Setup minimum:",
          items: [
            "GA4 tag on the site",
            "conversions / key events",
            "ecommerce or at least purchase",
            "exclude your IP / office",
            "link ads when needed",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Basics: how to read behavior",
      level: 2,
      paras: [
        "Look past sessions: engagement, views of key catalog URLs, add-to-cart events, share reaching payment. Compare periods and channels under comparable traffic.",
        "A site-wide “average bounce” says little — home and product pages live differently. Slice by page type and device.",
      ],
      lists: [
        {
          intro: "First weekly pass:",
          items: [
            "traffic by channel",
            "top landings and products",
            "funnel events",
            "conversions and revenue",
            "mobile vs desktop",
          ],
        },
      ],
    },
    {
      title: "Segments instead of site-wide averages",
      level: 2,
      paras: [
        "Segments show that new paid visitors behave differently from organic; that one source drives views and another drives purchases. Compare two or three segments on one report — not ten at once.",
        "Useful cuts: new/returning, paid/organic, geo, device, “added to cart — didn’t buy.”",
      ],
      lists: [
        {
          intro: "Segment ideas:",
          items: [
            "sessions with ≥3 product views",
            "cart without purchase",
            "returning within 30 days",
            "blog traffic vs catalog",
            "high AOV vs low",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Optimizing the whole site to one average metric. A segment with 5% of sessions can drive 40% of revenue.",
        },
      ],
    },
    {
      title: "Funnel and deeper cuts",
      level: 2,
      paras: [
        "Map the path: list/search → product → cart → contacts/shipping → payment → thank you. Biggest drop = hypothesis zone (shipping price, form fields, speed, trust).",
        "Go deeper: repeat-purchase cohorts, products often in cart but rarely bought, landings with high traffic and low conversion.",
      ],
      lists: [
        {
          intro: "Ask the funnel:",
          items: [
            "which step loses the most",
            "is the drop worse on mobile",
            "which sources reach payment",
            "which products trigger checkout abandonment",
          ],
        },
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "From report to action",
      level: 2,
      paras: [
        "Every takeaway is a task: simplify checkout, strengthen the product page, change a channel creative, fix speed. Without tasks, analytics is a slide deck.",
        "Tie numbers to qualitative input: support, reviews, session recordings where you have them. Numbers show where; people show why.",
      ],
      lists: [
        {
          intro: "Hypothesis template:",
          items: [
            "segment / funnel step",
            "observation (the number)",
            "cause hypothesis",
            "the change",
            "how you’ll measure success",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
      ],
    },
    {
      title: "Limits and data hygiene",
      level: 2,
      paras: [
        "Ad blockers, cookie consent, incomplete ecommerce markup, duplicate tags, bots — all warp the picture. Reconcile orders with CRM or store admin: a revenue gap means fix events, don’t trust a pretty chart.",
        "Neighboring posts on GA setup and goals may overlap this one: store behavior lives here; narrow goal guides can be merged later.",
      ],
      lists: [
        {
          intro: "Quality control:",
          items: [
            "DebugView / event checks",
            "purchase vs orders reconciliation",
            "no double tag firing",
            "documented conversion definitions",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Funnel and three segments first. Custom Explorations later — or you’ll drown in them.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "analitika-kontent-marketinga",
    "prodvizhenie-internet-magazina",
    "metrika-ne-rabotaet",
    "kategorii-internet-magazina",
  ],
};

/** ES overlay for google-analytics — same structure as RU JSON / EN. */
export const googleAnalyticsEs: BlogPost = {
  slug: "google-analytics",
  title: "Google Analytics para una tienda online: leer el comportamiento del cliente",
  date: "2020-10-13",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics/cover.webp",
  excerpt:
    "Cómo leer el comportamiento de la audiencia de una tienda en Google Analytics: segmentos, funnel, informes e hipótesis — en lógica GA4, sin adorar métricas «medias».",
  lead: [
    "Un contador solo no te dice por qué la gente no compra. Para una tienda, Google Analytics renta en segmentos y funnel: quién llega al carrito, dónde cae, cómo difieren nuevos y recurrentes.",
    "Abajo: qué hace falta antes del análisis, cómo leer los informes base y cómo empujar la segmentación más lejos. Instalación del tag y goals son temas vecinos; aquí el foco es el comportamiento ecommerce. La UI de GA4 se mueve — confía en el sentido de la métrica, no en rutas de botones de 2020.",
  ],
  faq: [
    {
      q: "¿GA o Yandex Metrika?",
      a: "A menudo ambas. Metrika encaja con tráfico RU y session replay; GA con el ecosistema Google Ads e informes cross-product. Sigue el trabajo, no la «religión del contador».",
    },
    {
      q: "¿Bastan los informes estándar?",
      a: "Para empezar — sí: tráfico, páginas, eventos/conversiones, ecommerce. Siguiente paso: segmentos y Explorations.",
    },
    {
      q: "¿Qué es un segmento aquí?",
      a: "Un corte de audiencia por condición: fuente, dispositivo, paso del funnel, nuevo vs recurrente, compró vs no.",
    },
    {
      q: "¿Para qué molestarse con un funnel?",
      a: "Para dejar de mirar una conversión media de todo el sitio y ver dónde se rompe de verdad el camino al pedido.",
    },
    {
      q: "¿Hace falta markup de ecommerce?",
      a: "Sí — o no verás productos, revenue y pasos de compra. Sin eso te quedas en pageviews.",
    },
    {
      q: "¿Cada cuánto abro los informes?",
      a: "Semanal para funnel y fuentes. Segmentos profundos solo bajo hipótesis — no a diario «por los números».",
    },
    {
      q: "¿Y los datos personales?",
      a: "No metas PII en GA contra la política. Sigue el consentimiento de cookies y las reglas de la plataforma.",
    },
    {
      q: "¿Universal Analytics sigue bien?",
      a: "No como base. Trabaja en GA4 (eventos, parámetros). No copies capturas viejas de Universal uno a uno.",
    },
  ],
  sections: [
    {
      title: "Qué hace falta antes de analizar",
      level: 2,
      paras: [
        "Una property GA4 en marcha, un tag correcto en cada plantilla, eventos para acciones clave (vista de producto, carrito, checkout, purchase) y parámetros de ecommerce donde puedas. Sin filtrar el tráfico de oficina, los números se ensucian.",
        "Acuerda primero los goals: conversión, ticket medio, compras repetidas. Si no, el informe se vuelve un tour de gráficos.",
      ],
      lists: [
        {
          intro: "Mínimo de setup:",
          items: [
            "tag GA4 en el sitio",
            "conversiones / key events",
            "ecommerce o al menos purchase",
            "excluir tu IP / oficina",
            "vincular ads cuando haga falta",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrika",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Lo básico: cómo leer el comportamiento",
      level: 2,
      paras: [
        "Mira más allá de las sesiones: engagement, vistas de URLs clave del catálogo, eventos add-to-cart, cuota que llega al pago. Compara periodos y canales con tráfico comparable.",
        "Un «bounce medio» de todo el sitio dice poco — home y fichas de producto viven distinto. Corta por tipo de página y dispositivo.",
      ],
      lists: [
        {
          intro: "Primer pase semanal:",
          items: [
            "tráfico por canal",
            "landings y productos con más tráfico",
            "eventos del funnel",
            "conversiones y revenue",
            "móvil vs desktop",
          ],
        },
      ],
    },
    {
      title: "Segmentos en lugar de medias del sitio",
      level: 2,
      paras: [
        "Los segmentos muestran que los visitantes nuevos de pago se comportan distinto de los orgánicos; que una fuente trae vistas y otra compras. Compara dos o tres segmentos en un informe — no diez a la vez.",
        "Cortes útiles: nuevo/recurrente, paid/organic, geo, dispositivo, «añadió al carrito — no compró».",
      ],
      lists: [
        {
          intro: "Ideas de segmento:",
          items: [
            "sesiones con ≥3 vistas de producto",
            "carrito sin compra",
            "recurrentes en 30 días",
            "tráfico de blog vs catálogo",
            "AOV alto vs bajo",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Optimizar todo el sitio a una métrica media. Un segmento con el 5% de las sesiones puede traer el 40% del revenue.",
        },
      ],
    },
    {
      title: "Funnel y cortes más profundos",
      level: 2,
      paras: [
        "Mapea el camino: listado/búsqueda → producto → carrito → contactos/envío → pago → gracias. La caída mayor = zona de hipótesis (precio de envío, campos del formulario, velocidad, confianza).",
        "Ve más hondo: cohortes de compra repetida, productos a menudo en carrito pero rara vez comprados, landings con mucho tráfico y poca conversión.",
      ],
      lists: [
        {
          intro: "Pregunta al funnel:",
          items: [
            "qué paso pierde más",
            "¿la caída es peor en móvil?",
            "qué fuentes llegan al pago",
            "qué productos disparan el abandono de checkout",
          ],
        },
      ],
      links: [
        {
          label: "Promocionar una tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Del informe a la acción",
      level: 2,
      paras: [
        "Cada conclusión es una tarea: simplificar checkout, reforzar la ficha, cambiar un creativo de canal, arreglar velocidad. Sin tareas, la analítica es un deck de slides.",
        "Ata los números a input cualitativo: soporte, reviews, grabaciones de sesión donde las tengas. Los números muestran dónde; la gente muestra por qué.",
      ],
      lists: [
        {
          intro: "Plantilla de hipótesis:",
          items: [
            "segmento / paso del funnel",
            "observación (el número)",
            "hipótesis de causa",
            "el cambio",
            "cómo medirás el éxito",
          ],
        },
      ],
      links: [
        {
          label: "Analytics de content marketing",
          href: "/blog/analitika-kontent-marketinga/",
        },
      ],
    },
    {
      title: "Límites e higiene de datos",
      level: 2,
      paras: [
        "Ad blockers, consentimiento de cookies, markup de ecommerce incompleto, tags duplicados, bots — todo tuerce el cuadro. Cruza pedidos con CRM o admin de la tienda: un hueco de revenue significa arreglar eventos, no confiar en un gráfico bonito.",
        "Posts vecinos de setup de GA y goals pueden solaparse con este: el comportamiento de tienda vive aquí; guías estrechas de goals se pueden fusionar luego.",
      ],
      lists: [
        {
          intro: "Control de calidad:",
          items: [
            "DebugView / checks de eventos",
            "reconciliación purchase vs pedidos",
            "sin doble disparo de tag",
            "definiciones de conversión documentadas",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Funnel y tres segmentos primero. Custom Explorations después — o te ahogas en ellas.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "analitika-kontent-marketinga",
    "prodvizhenie-internet-magazina",
    "metrika-ne-rabotaet",
    "kategorii-internet-magazina",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for voronka-prodazh-gtm — same structure as RU JSON. */
export const voronkaProdazhGtmEn: BlogPost = {
  slug: "voronka-prodazh-gtm",
  title: "Sales funnel via GTM: events and checkout drop-offs",
  date: "2019-07-16",
  category: "Digital marketing",
  cover: "/images/blog/voronka-prodazh-gtm/cover-en.webp",
  excerpt:
    "How to tag an ecommerce funnel with Google Tag Manager and watch drop-offs in GA4: catalog → cart → checkout → order, using events instead of outdated Universal Analytics “virtual pages.”",
  lead: [
    "A sales funnel in analytics isn’t a “magic GTM button” — it’s an agreed chain of purchase steps and events that show where people drop off.",
    "Below: why the funnel matters, how to choose steps, how to send events to GA4 via GTM, and how to read drop-offs. Basic GTM (container, tags, Preview) is a separate article; here the focus is checkout. We don’t copy Universal Analytics screenshots or hard “virtual page” recipes from old guides.",
  ],
  faq: [
    {
      q: "Does GTM build the funnel by itself?",
      a: "No. GTM delivers tags and events. You view the funnel in GA4 (Explorations / Funnel) or in Metrika via goals — after correct tagging.",
    },
    {
      q: "Do I still need virtual pages like in UA?",
      a: "In GA4, rely on events (view_item, add_to_cart, begin_checkout, purchase, and your own). Virtual pageview is a UA legacy — not a required path.",
    },
    {
      q: "Is a thank-you URL enough?",
      a: "For a rough goal — sometimes. For a step funnel you need events on intermediate actions, or you only see “reached / didn’t.”",
    },
    {
      q: "Can I duplicate the tag in the theme and in GTM?",
      a: "No — you’ll get double hits. One delivery channel: either the template or GTM.",
    },
    {
      q: "Does this replace a marketing automation funnel?",
      a: "No. An automation funnel is a touch sequence (ads, bot, email). Here — measuring the path on the site.",
    },
  ],
  sections: [
    {
      title: "Why tag the funnel",
      level: 2,
      paras: [
        "Without steps you see visits and occasional purchases, but not where the path breaks: product page, cart, shipping, payment, or contact form.",
        "The funnel answers practical questions: how many reached the cart, where the biggest drop is, whether shipping and button fixes helped. It’s a base for UX and offer hypotheses — not a substitute for marketing strategy.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "track interest in catalog and product pages",
            "see add_to_cart and begin_checkout share",
            "catch exits before payment",
            "link drop-off to a specific page or error",
            "check the effect of A/B tests and releases",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
        {
          label: "Marketing automation funnel",
          href: "/en/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Path steps: from catalog to order",
      level: 2,
      paras: [
        "First describe your site’s real checkout — not an “ideal” textbook flow. A one-page landing has fewer steps; a store with variants and shipping has more.",
        "Common frame: category or product view → add to cart → cart → checkout (contacts, shipping, payment) → success page. Keep event names close to GA4 ecommerce recommendations so reports and ad pixels align.",
      ],
      lists: [
        {
          intro: "Example chain:",
          items: [
            "view_item / product view",
            "add_to_cart",
            "view_cart",
            "begin_checkout",
            "add_shipping_info / add_payment_info (if present)",
            "purchase / generate_lead on thank-you page",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Counting a “Buy” click as a purchase. A purchase is a confirmed order (or a reliable backend event) — otherwise the funnel lies.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Events via GTM instead of UA virtual pages",
      level: 2,
      paras: [
        "In Universal Analytics, people often faked steps with virtual pageviews. In GA4 it’s cleaner to send events with parameters (item_id, value, currency) and build the funnel from them.",
        "In GTM: trigger on click/submit/dataLayer.push → GA4 Event tag (or Google tag) → Preview → publish. If the CMS already pushes ecommerce into the dataLayer — reuse those fields; don’t invent a second layer of “fake URLs.”",
      ],
      lists: [
        {
          intro: "Container minimum:",
          items: [
            "GA4 / Google tag config without a theme duplicate",
            "triggers on key steps",
            "stable event names across releases",
            "check in Preview and DebugView",
            "cookie consent accounted for in tag conditions",
          ],
        },
      ],
      links: [
        {
          label: "GA4 setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "How to read the funnel in reports",
      level: 2,
      paras: [
        "In GA4 you usually build the funnel in Explorations (Funnel exploration) or watch ecommerce reports if the recommended scheme is in place. In Metrika — composite goals and step reports.",
        "Dashboard UI changes: what matters is the meaning (“event sequence,” “step drop-off”), not a 2019 account screenshot. Compare periods before and after fixes and segments (mobile vs. desktop, traffic source).",
      ],
      lists: [
        {
          intro: "What to watch first:",
          items: [
            "share reaching each step",
            "the step with the biggest drop",
            "device differences",
            "payment or form validation errors",
            "time on step (if available)",
          ],
        },
      ],
    },
    {
      title: "What to do with bottlenecks",
      level: 2,
      paras: [
        "Drop-off on shipping and payment often needs transparent pricing, timelines, and working payment methods — not “one more pixel.” Drop-off on contact fields — form length and trust (details, policy, phone).",
        "Catch broken buttons and redirects separately: an event that didn’t fire doesn’t mean the user “didn’t want to buy.” Match DebugView with a real session.",
      ],
      lists: [
        {
          intro: "Working hypotheses:",
          items: [
            "simplify checkout and cut extra exits",
            "show shipping and payment earlier",
            "fix broken buttons and validation",
            "speed up the mobile cart",
            "don’t treat retargeting as a substitute for decent UX",
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
      title: "What to remember",
      level: 2,
      paras: [
        "A funnel narrows at each step — that’s normal. The job is to find abnormal drop-offs and test hypotheses, not “flatten the chart at any cost.”",
        "GTM is event transport. Meaning comes from an agreed step map, clean names, and the habit of reading the report after every checkout release.",
      ],
      lists: [
        {
          intro: "Short takeaway:",
          items: [
            "describe the site’s real steps",
            "send GA4 events via GTM",
            "don’t duplicate counters",
            "read drop-offs and fix UX",
            "don’t copy UA-era pageview guides",
          ],
        },
      ],
    },
  ],
  closing: [
    "A funnel via GTM works when purchase steps are tagged with events and you regularly see where the path breaks. Start with a checkout map, one container without duplicates, and Funnel/goals in analytics — then site fixes, not the other way around.",
  ],
  related: [
    "google-tag-manager",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "ga4",
    "avtovoronka",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for voronka-prodazh-gtm — same structure as RU JSON / EN. */
export const voronkaProdazhGtmEs: BlogPost = {
  slug: "voronka-prodazh-gtm",
  title: "Funnel de ventas vía GTM: eventos y drop-offs de checkout",
  date: "2019-07-16",
  category: "Digital marketing",
  cover: "/images/blog/voronka-prodazh-gtm/cover.webp",
  excerpt:
    "Cómo etiquetar un funnel ecommerce con Google Tag Manager y ver drop-offs en GA4: catálogo → carrito → checkout → pedido, con eventos en vez de «páginas virtuales» caducadas de Universal Analytics.",
  lead: [
    "Un funnel de ventas en analytics no es un «botón mágico de GTM» — es una cadena acordada de pasos de compra y eventos que muestran dónde la gente se cae.",
    "Abajo: por qué importa el funnel, cómo elegir pasos, cómo enviar eventos a GA4 vía GTM y cómo leer drop-offs. GTM básico (contenedor, tags, Preview) es un artículo aparte; aquí el foco es el checkout. No copiamos screenshots de Universal Analytics ni recetas duras de «página virtual» de guías viejas.",
  ],
  faq: [
    {
      q: "¿GTM construye el funnel solo?",
      a: "No. GTM entrega tags y eventos. Ves el funnel en GA4 (Explorations / Funnel) o en Metrika vía metas — tras un tagging correcto.",
    },
    {
      q: "¿Siguen haciendo falta páginas virtuales como en UA?",
      a: "En GA4, apóyate en eventos (view_item, add_to_cart, begin_checkout, purchase y los tuyos). El virtual pageview es legado de UA — no un camino obligatorio.",
    },
    {
      q: "¿Basta una URL de thank-you?",
      a: "Para una meta tosca — a veces. Para un funnel por pasos necesitas eventos en acciones intermedias, o solo ves «llegó / no llegó».",
    },
    {
      q: "¿Puedo duplicar el tag en el tema y en GTM?",
      a: "No — tendrás hits dobles. Un canal de entrega: o la plantilla o GTM.",
    },
    {
      q: "¿Esto sustituye un funnel de marketing automation?",
      a: "No. Un funnel de automation es una secuencia de toques (ads, bot, email). Aquí — medir el camino en el sitio.",
    },
  ],
  sections: [
    {
      title: "Por qué etiquetar el funnel",
      level: 2,
      paras: [
        "Sin pasos ves visitas y compras ocasionales, pero no dónde se rompe el camino: ficha de producto, carrito, envío, pago o formulario de contacto.",
        "El funnel responde preguntas prácticas: cuántos llegaron al carrito, dónde está la mayor caída, si ayudaron arreglos de envío y botones. Es base para hipótesis de UX y oferta — no un sustituto de la estrategia de marketing.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "rastrear interés en catálogo y fichas",
            "ver la cuota de add_to_cart y begin_checkout",
            "pillar salidas antes del pago",
            "vincular el drop-off a una página o error concreto",
            "comprobar el efecto de A/B tests y releases",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
        {
          label: "Funnel de marketing automation",
          href: "/es/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Pasos del camino: del catálogo al pedido",
      level: 2,
      paras: [
        "Primero describe el checkout real de tu sitio — no un flujo «ideal» de manual. Una landing de una página tiene menos pasos; una tienda con variantes y envío tiene más.",
        "Marco habitual: vista de categoría o producto → añadir al carrito → carrito → checkout (contactos, envío, pago) → página de éxito. Mantén nombres de eventos cerca de las recomendaciones ecommerce de GA4 para alinear reports y píxeles de ads.",
      ],
      lists: [
        {
          intro: "Cadena de ejemplo:",
          items: [
            "view_item / vista de producto",
            "add_to_cart",
            "view_cart",
            "begin_checkout",
            "add_shipping_info / add_payment_info (si existen)",
            "purchase / generate_lead en thank-you page",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Contar un clic en «Comprar» como compra. Una compra es un pedido confirmado (o un evento fiable de backend) — si no, el funnel miente.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Eventos vía GTM en vez de páginas virtuales de UA",
      level: 2,
      paras: [
        "En Universal Analytics a menudo se fingían pasos con virtual pageviews. En GA4 es más limpio enviar eventos con parámetros (item_id, value, currency) y construir el funnel a partir de ellos.",
        "En GTM: trigger en clic/submit/dataLayer.push → tag GA4 Event (o Google tag) → Preview → publish. Si el CMS ya empuja ecommerce al dataLayer — reutiliza esos campos; no inventes una segunda capa de «URLs falsas».",
      ],
      lists: [
        {
          intro: "Mínimo del contenedor:",
          items: [
            "config GA4 / Google tag sin duplicado en el tema",
            "triggers en pasos clave",
            "nombres de eventos estables entre releases",
            "chequeo en Preview y DebugView",
            "consentimiento de cookies contabilizado en las condiciones del tag",
          ],
        },
      ],
      links: [
        {
          label: "Setup de GA4",
          href: "/es/blog/google-analytics-nastroyka/",
        },
        {
          label: "Metas en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Cómo leer el funnel en reports",
      level: 2,
      paras: [
        "En GA4 suele construirse el funnel en Explorations (Funnel exploration) o mirar reports ecommerce si el esquema recomendado está en su sitio. En Metrika — metas compuestas y reports por pasos.",
        "La UI del dashboard cambia: importa el sentido («secuencia de eventos», «drop-off por paso»), no un screenshot de cuenta de 2019. Compara periodos antes y después de arreglos y segmentos (móvil vs. desktop, fuente de tráfico).",
      ],
      lists: [
        {
          intro: "Qué mirar primero:",
          items: [
            "cuota que llega a cada paso",
            "el paso con la mayor caída",
            "diferencias por dispositivo",
            "errores de pago o validación de formulario",
            "tiempo en el paso (si está disponible)",
          ],
        },
      ],
    },
    {
      title: "Qué hacer con cuellos de botella",
      level: 2,
      paras: [
        "El drop-off en envío y pago a menudo pide precios transparentes, plazos y métodos de pago que funcionen — no «un píxel más». El drop-off en campos de contacto — longitud del formulario y trust (datos, política, teléfono).",
        "Pilla botones y redirects rotos aparte: un evento que no disparó no significa que el usuario «no quisiera comprar». Cruza DebugView con una sesión real.",
      ],
      lists: [
        {
          intro: "Hipótesis que funcionan:",
          items: [
            "simplificar checkout y cortar salidas de más",
            "mostrar envío y pago antes",
            "arreglar botones y validación rotos",
            "acelerar el carrito móvil",
            "no tratar el retargeting como sustituto de un UX decente",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de la conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Un funnel se estrecha en cada paso — es normal. El trabajo es hallar drop-offs anormales y testar hipótesis, no «aplanar el chart a cualquier precio».",
        "GTM es transporte de eventos. El sentido viene de un mapa de pasos acordado, nombres limpios y el hábito de leer el report tras cada release de checkout.",
      ],
      lists: [
        {
          intro: "Takeaway corto:",
          items: [
            "describe los pasos reales del sitio",
            "envía eventos GA4 vía GTM",
            "no dupliques contadores",
            "lee drop-offs y arregla UX",
            "no copies guías de pageview de la era UA",
          ],
        },
      ],
    },
  ],
  closing: [
    "Un funnel vía GTM funciona cuando los pasos de compra están etiquetados con eventos y ves con regularidad dónde se rompe el camino. Empieza con un mapa de checkout, un contenedor sin duplicados y Funnel/metas en analytics — luego arreglos del sitio, no al revés.",
  ],
  related: [
    "google-tag-manager",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "ga4",
    "avtovoronka",
    "optimizatsiya-konversii",
  ],
};

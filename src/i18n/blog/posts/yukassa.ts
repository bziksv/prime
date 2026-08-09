import type { BlogPost } from "../../../data/blog";

/** EN overlay for yukassa — same structure as RU JSON. */
export const yukassaEn: BlogPost = {
  slug: "yukassa",
  title: "YooKassa (Yandex.Checkout): what it is and why a store needs it",
  date: "2021-10-22",
  category: "Digital marketing",
  cover: "/images/blog/yukassa/cover-en.webp",
  excerpt:
    "What YooKassa (formerly Yandex.Checkout) is: online payments, pay-by-link invoices, cloud cash registers. How merchants connect and what to check in tariffs.",
  lead: [
    "YooKassa (formerly Yandex.Checkout) is a payment aggregator: a store or service takes card and other payments without building bank acquiring from scratch.",
    "Below: what the product does, a typical onboarding path, and what to watch in the contract. Fees, payment methods, and cabinet UI change — check current terms on the YooKassa site.",
  ],
  faq: [
    {
      q: "Are YooKassa and Yandex.Checkout the same?",
      a: "Yes — a rebrand of one payment product. Older contracts and copy may still use the old name.",
    },
    {
      q: "Who is it for?",
      a: "Sole traders and companies that need online pay: shops, services, subscriptions, pay-by-link invoices. Individuals without a business status usually need a different setup.",
    },
    {
      q: "Does it replace an online cash register?",
      a: "The aggregator takes the payment; receipt rules under 54-FZ are handled by a cash register (including partner cloud KKT). Confirm the stack for your scheme.",
    },
    {
      q: "What is the fee?",
      a: "It depends on the plan, volume, and payment method. Don’t treat old review numbers as a price list — use YooKassa’s current calculator.",
    },
    {
      q: "Can I invoice without a website?",
      a: "Often yes: a payment link or invoice to the client with a notification. Handy for services and one-off payments.",
    },
  ],
  sections: [
    {
      title: "What YooKassa does",
      level: 2,
      paras: [
        "It’s a middle layer between your site or invoice and payment methods: the buyer pays, you see the status in the cabinet, and funds land on your settlement account under the contract rules.",
        "Besides a Pay button on the site there are pay-by-link invoices, B2B flows, recurring charges (when enabled), and modules for popular shops and CMS platforms.",
      ],
    },
    {
      title: "Who needs it and why",
      level: 2,
      paras: [
        "Online retail and services need to take money without wiring every bank separately. An aggregator gives one cabinet, stats, and ready modules for common platforms.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "checkout on a product page or cart",
            "an invoice or link in a messenger",
            "payment status tracking",
            "tie-in with an online cash register for receipts",
          ],
        },
      ],
    },
    {
      title: "Pros and limits",
      level: 2,
      paras: [
        "Pros: fast path to accepting pay, many methods under one contract, cabinet and API or modules, invoices without a full storefront.",
        "Limits: a fee per payment, moderation and business requirements, dependence on cabinet and API uptime. Tariffs and option sets — only from the current price list.",
      ],
      lists: [
        {
          intro: "Before you choose, compare:",
          items: [
            "fee and minimum volume",
            "payout speed",
            "payment methods you need",
            "a module for your CMS",
            "refunds and dispute rules",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t paste “2.8% fee” from 2021 articles into client proposals. Open the service’s current tariff plan.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How merchants connect",
      level: 2,
      paras: [
        "Usual path: apply or sign up → questionnaire and docs → contract → shop setup in the cabinet → module or API → test payment → live.",
      ],
      lists: [
        {
          intro: "What to prepare:",
          items: [
            "sole trader or company details",
            "description of goods or services and a site (if any)",
            "CMS access or a developer",
            "clarity on whether you need a cloud cash register",
          ],
        },
      ],
    },
    {
      title: "Store tie-in and receipts",
      level: 2,
      paras: [
        "Payment without fiscalization doesn’t satisfy cash-register law if your scheme falls under it. YooKassa and partners help with cloud KKT — pick the scheme with your accountant.",
        "After go-live check a test and live payment, client emails, refunds, and order status display.",
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};

/** ES overlay for yukassa — same structure as RU JSON / EN. */
export const yukassaEs: BlogPost = {
  slug: "yukassa",
  title: "YooKassa (Yandex.Checkout): qué es y por qué la necesita una tienda",
  date: "2021-10-22",
  category: "Digital marketing",
  cover: "/images/blog/yukassa/cover.webp",
  excerpt:
    "Qué es YooKassa (antes Yandex.Checkout): pagos online, facturas pay-by-link, cajas registradoras en la nube. Cómo se conectan los comercios y qué revisar en las tarifas.",
  lead: [
    "YooKassa (antes Yandex.Checkout) es un agregador de pagos: una tienda o servicio cobra con tarjeta y otros métodos sin montar acquiring bancario desde cero.",
    "Abajo: qué hace el producto, un camino típico de onboarding y qué mirar en el contrato. Comisiones, métodos de pago y UI del panel cambian — revisa condiciones actuales en el sitio de YooKassa.",
  ],
  faq: [
    {
      q: "¿YooKassa y Yandex.Checkout son lo mismo?",
      a: "Sí — un rebrand de un mismo producto de pagos. Contratos y textos antiguos pueden seguir usando el nombre viejo.",
    },
    {
      q: "¿Para quién es?",
      a: "Autónomos y empresas que necesitan cobro online: tiendas, servicios, suscripciones, facturas pay-by-link. Particulares sin status de negocio suelen necesitar otro setup.",
    },
    {
      q: "¿Sustituye una caja registradora online?",
      a: "El agregador toma el pago; las reglas de recibo bajo 54-FZ las cubre una caja (incluida KKT en la nube de partners). Confirma el stack para tu esquema.",
    },
    {
      q: "¿Cuál es la comisión?",
      a: "Depende del plan, volumen y método de pago. No trates cifras de reviews viejos como lista de precios — usa la calculadora actual de YooKassa.",
    },
    {
      q: "¿Puedo facturar sin un sitio web?",
      a: "A menudo sí: un enlace de pago o factura al cliente con notificación. Práctico para servicios y pagos puntuales.",
    },
  ],
  sections: [
    {
      title: "Qué hace YooKassa",
      level: 2,
      paras: [
        "Es una capa intermedia entre tu sitio o factura y los métodos de pago: el comprador paga, ves el estado en el panel y los fondos llegan a tu cuenta de liquidación según las reglas del contrato.",
        "Además del botón Pagar en el sitio hay facturas pay-by-link, flujos B2B, cargos recurrentes (cuando están habilitados) y módulos para tiendas y plataformas CMS populares.",
      ],
    },
    {
      title: "Quién lo necesita y por qué",
      level: 2,
      paras: [
        "El retail online y los servicios necesitan cobrar sin cablear cada banco por separado. Un agregador da un panel, stats y módulos listos para plataformas habituales.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "checkout en una página de producto o carrito",
            "una factura o enlace en un messenger",
            "seguimiento del estado del pago",
            "vínculo con una caja registradora online para recibos",
          ],
        },
      ],
    },
    {
      title: "Pros y límites",
      level: 2,
      paras: [
        "Pros: camino rápido para aceptar pagos, muchos métodos bajo un contrato, panel y API o módulos, facturas sin una vitrina completa.",
        "Límites: comisión por pago, moderación y requisitos del negocio, dependencia del uptime del panel y la API. Tarifas y set de opciones — solo de la lista de precios actual.",
      ],
      lists: [
        {
          intro: "Antes de elegir, compara:",
          items: [
            "comisión y volumen mínimo",
            "velocidad de payout",
            "métodos de pago que necesitas",
            "un módulo para tu CMS",
            "reglas de reembolsos y disputes",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "No pegues «comisión 2,8%» de artículos de 2021 en propuestas a clientes. Abre el plan tarifario actual del servicio.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cómo se conectan los comercios",
      level: 2,
      paras: [
        "Camino habitual: solicitud o alta → cuestionario y docs → contrato → setup de la tienda en el panel → módulo o API → pago de prueba → producción.",
      ],
      lists: [
        {
          intro: "Qué preparar:",
          items: [
            "datos de autónomo o empresa",
            "descripción de bienes o servicios y un sitio (si lo hay)",
            "acceso al CMS o un desarrollador",
            "claridad sobre si necesitas una caja en la nube",
          ],
        },
      ],
    },
    {
      title: "Vínculo con la tienda y recibos",
      level: 2,
      paras: [
        "Cobrar sin fiscalización no cumple la ley de caja si tu esquema cae bajo ella. YooKassa y partners ayudan con KKT en la nube — elige el esquema con tu contable.",
        "Tras pasar a producción, revisa un pago de prueba y uno real, emails al cliente, reembolsos y la visualización del estado del pedido.",
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};

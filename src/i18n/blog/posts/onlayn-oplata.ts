import type { BlogPost } from "../../../data/blog";

/** EN overlay for onlayn-oplata — same structure as RU JSON. */
export const onlaynOplataEn: BlogPost = {
  slug: "onlayn-oplata",
  title: "Online payments on a site: acquiring, aggregator, and what to choose",
  date: "2021-07-08",
  category: "E-commerce",
  cover: "/images/blog/onlayn-oplata/cover-en.webp",
  excerpt:
    "How to accept payments on a site: card, Faster Payments (SBP), and wallets; how a gateway differs from an aggregator and a bank acquirer; what to watch on fees, security, and fiscal rules (54-FZ).",
  lead: [
    "Online payments on a site mean taking money by card, via SBP, and other methods — not “to a personal card in chat.” For a store or services it’s about buyer convenience, fees, security, and cash-register law.",
    "Below: payment methods, how a gateway differs from an aggregator and acquiring, and a typical connection path. Brands and tariffs change — check current terms; YooKassa is covered separately.",
  ],
  faq: [
    {
      q: "Aggregator or bank acquirer?",
      a: "An aggregator starts faster: one contract — many methods and CMS modules. Direct bank acquiring can be cheaper at scale, but takes longer for approval and integration.",
    },
    {
      q: "Do you need an online cash register?",
      a: "If your scheme falls under 54-FZ — yes, you need a receipt (including a cloud register). A payment service ≠ fiscalization closed automatically; confirm the scheme with an accountant.",
    },
    {
      q: "Can you use a payment link without a storefront?",
      a: "Yes — many aggregators offer a payment link / invoice — handy for services and one-off payments.",
    },
    {
      q: "Is SMS payment worth it?",
      a: "For micropayments it’s sometimes convenient for buyers, but the fee is often high. As a store’s main channel it’s usually worse than card/SBP.",
    },
    {
      q: "How is YooKassa different from “online payments in general”?",
      a: "YooKassa is one aggregator. This article is about choosing a payment-acceptance model; the YooKassa product is in a separate piece.",
    },
  ],
  sections: [
    {
      title: "Payment methods for the buyer",
      level: 2,
      paras: [
        "Card (with 3-D Secure) is the baseline expectation in e-commerce. SBP and bank-app pay reduce friction. E-wallets and “pay in parts” depend on niche and audience.",
        "The method set depends on the provider and store moderation. Don’t treat outdated “Qiwi/WebMoney only” lists as a 2026 checklist.",
      ],
      lists: [
        {
          intro: "What to watch when choosing methods:",
          items: [
            "share of audience with cards / SBP",
            "fee per method",
            "limits and currency",
            "refunds and holds",
            "mobile payment UX",
          ],
        },
      ],
    },
    {
      title: "Gateway, system, aggregator, acquirer",
      level: 2,
      paras: [
        "A payment gateway is the tech “terminal” in the chain: it encrypts data and routes the payment. By itself it’s rarely a “button on the site” without a bank/processing contract.",
        "A bank acquirer takes the card payment for the merchant; the card issuer and processing also sit in the scheme. Connection takes longer: documents, business review, contract.",
        "An aggregator unites methods under one dashboard and contract: cards, SBP, sometimes invoices and subscriptions. Upside — speed and CMS modules; downside — fees and platform rules.",
      ],
      tables: [
        {
          caption: "Rough model comparison",
          headers: ["Model", "Plus", "Minus"],
          rows: [
            ["Aggregator", "Fast start, many methods", "Fees, dependency on the service"],
            ["Bank acquiring", "Flexibility at scale", "Longer setup, your own integration"],
            ["Wallet/SBP only", "Simple niche scenario", "Narrow method coverage"],
          ],
        },
      ],
      links: [
        {
          label: "YooKassa",
          href: "/en/blog/yukassa/",
        },
      ],
    },
    {
      title: "How to connect payments on the site",
      level: 2,
      paras: [
        "Common loop: legal status and docs → application at aggregator or bank → contract → store setup in the dashboard → CMS module or API → test payment → live → link to register/accounting.",
        "In a CMS usually: payments section → add method → shop ID, secret, notification URL (callback), test mode. Exact fields depend on the module — follow the provider guide.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "HTTPS across the site",
            "successful and failed test payments",
            "emails/webhooks on order status",
            "refund scenario",
            "clarity on who sends the receipt to the buyer",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Security",
          text: "Card data must not be stored on your server “however.” Use a redirect/widget from a PCI-compliant provider and 3-D Secure. Don’t collect CVV in your own forms.",
        },
      ],
    },
    {
      title: "Fees, cash register, and common mistakes",
      level: 2,
      paras: [
        "Fees depend on volume, method, and plan — don’t copy numbers from old reviews into a proposal. Count full cost: fee + register + refund acquiring.",
        "Mistake — take payment without fiscalization when the law requires a receipt. Second — promise “instant connect in a day” without documents. Third — one payment method when the audience pays differently.",
      ],
      lists: [
        {
          intro: "Provider selection checklist:",
          items: [
            "needed methods and geo",
            "module for your CMS / API",
            "support and SLA",
            "dispute and chargeback terms",
            "link to an online cash register",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for onlayn-oplata — same structure as RU JSON / EN. */
export const onlaynOplataEs: BlogPost = {
  slug: "onlayn-oplata",
  title: "Pagos online en un sitio: acquiring, agregador y qué elegir",
  date: "2021-07-08",
  category: "E-commerce",
  cover: "/images/blog/onlayn-oplata/cover-es.webp",
  excerpt:
    "Cómo aceptar pagos en un sitio: tarjeta, Faster Payments (SBP) y wallets; en qué se diferencia un gateway de un agregador y un adquirente bancario; qué mirar en comisiones, seguridad y reglas fiscales (54-FZ).",
  lead: [
    "Pagos online en un sitio significa cobrar con tarjeta, vía SBP y otros métodos — no «a una tarjeta personal en el chat». Para una tienda o servicios es conveniencia del comprador, comisiones, seguridad y ley de caja registradora.",
    "Abajo: métodos de pago, en qué se diferencia un gateway de un agregador y del acquiring, y un camino típico de conexión. Marcas y tarifas cambian — revisa condiciones actuales; YooKassa se cubre aparte.",
  ],
  faq: [
    {
      q: "¿Agregador o adquirente bancario?",
      a: "Un agregador arranca más rápido: un contrato — muchos métodos y módulos CMS. El acquiring directo del banco puede ser más barato a escala, pero tarda más en aprobación e integración.",
    },
    {
      q: "¿Hace falta una caja registradora online?",
      a: "Si tu esquema cae bajo 54-FZ — sí, necesitas un recibo (incluida una caja en la nube). Un servicio de pago ≠ fiscalización cerrada automáticamente; confirma el esquema con un contable.",
    },
    {
      q: "¿Se puede usar un enlace de pago sin vitrina?",
      a: "Sí — muchos agregadores ofrecen enlace de pago / factura — práctico para servicios y pagos puntuales.",
    },
    {
      q: "¿Vale la pena el pago por SMS?",
      a: "Para micropagos a veces es cómodo para el comprador, pero la comisión suele ser alta. Como canal principal de una tienda suele ser peor que tarjeta/SBP.",
    },
    {
      q: "¿En qué se diferencia YooKassa de «pagos online en general»?",
      a: "YooKassa es un agregador. Este artículo va de elegir un modelo de aceptación de pagos; el producto YooKassa está en una pieza aparte.",
    },
  ],
  sections: [
    {
      title: "Métodos de pago para el comprador",
      level: 2,
      paras: [
        "Tarjeta (con 3-D Secure) es la expectativa base en e-commerce. SBP y pago desde la app del banco reducen fricción. E-wallets y «pagar a plazos» dependen del nicho y la audiencia.",
        "El conjunto de métodos depende del proveedor y la moderación de la tienda. No trates listas obsoletas de «solo Qiwi/WebMoney» como checklist de 2026.",
      ],
      lists: [
        {
          intro: "Qué mirar al elegir métodos:",
          items: [
            "cuota de audiencia con tarjetas / SBP",
            "comisión por método",
            "límites y moneda",
            "reembolsos y retenciones",
            "UX de pago móvil",
          ],
        },
      ],
    },
    {
      title: "Gateway, sistema, agregador, adquirente",
      level: 2,
      paras: [
        "Un payment gateway es el «terminal» técnico en la cadena: cifra datos y enruta el pago. Por sí solo rara vez es un «botón en el sitio» sin contrato con banco/procesamiento.",
        "Un adquirente bancario toma el pago con tarjeta para el comercio; el emisor de la tarjeta y el procesamiento también están en el esquema. La conexión tarda más: documentos, revisión del negocio, contrato.",
        "Un agregador une métodos bajo un panel y un contrato: tarjetas, SBP, a veces facturas y suscripciones. Ventaja — velocidad y módulos CMS; inconveniente — comisiones y reglas de la plataforma.",
      ],
      tables: [
        {
          caption: "Comparación aproximada de modelos",
          headers: ["Modelo", "Ventaja", "Inconveniente"],
          rows: [
            ["Agregador", "Arranque rápido, muchos métodos", "Comisiones, dependencia del servicio"],
            ["Acquiring bancario", "Flexibilidad a escala", "Setup más largo, integración propia"],
            ["Solo wallet/SBP", "Escenario de nicho simple", "Cobertura estrecha de métodos"],
          ],
        },
      ],
      links: [
        {
          label: "YooKassa",
          href: "/es/blog/yukassa/",
        },
      ],
    },
    {
      title: "Cómo conectar pagos en el sitio",
      level: 2,
      paras: [
        "Bucle habitual: situación jurídica y documentos → solicitud en agregador o banco → contrato → configuración de la tienda en el panel → módulo CMS o API → pago de prueba → producción → vínculo con caja/contabilidad.",
        "En un CMS suele ser: sección de pagos → añadir método → shop ID, secret, URL de notificación (callback), modo test. Los campos exactos dependen del módulo — sigue la guía del proveedor.",
      ],
      lists: [
        {
          intro: "Antes de pasar a producción:",
          items: [
            "HTTPS en todo el sitio",
            "pagos de prueba exitosos y fallidos",
            "emails/webhooks sobre el estado del pedido",
            "escenario de reembolso",
            "claridad sobre quién envía el recibo al comprador",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Seguridad",
          text: "Los datos de tarjeta no deben guardarse en tu servidor «como sea». Usa redirect/widget de un proveedor conforme a PCI y 3-D Secure. No recojas CVV en tus propios formularios.",
        },
      ],
    },
    {
      title: "Comisiones, caja registradora y errores frecuentes",
      level: 2,
      paras: [
        "Las comisiones dependen de volumen, método y plan — no copies cifras de reviews viejos a una propuesta. Cuenta el coste completo: comisión + caja + acquiring de reembolsos.",
        "Error — cobrar sin fiscalización cuando la ley exige recibo. Segundo — prometer «conexión instantánea en un día» sin documentos. Tercero — un solo método de pago cuando la audiencia paga de otra forma.",
      ],
      lists: [
        {
          intro: "Checklist de selección de proveedor:",
          items: [
            "métodos y geo necesarios",
            "módulo para tu CMS / API",
            "soporte y SLA",
            "términos de disputes y chargebacks",
            "vínculo a una caja registradora online",
          ],
        },
      ],
    },
  ],
};

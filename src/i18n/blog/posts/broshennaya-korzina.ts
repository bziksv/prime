import type { BlogPost } from "../../../data/blog";

/** EN overlay for broshennaya-korzina — same structure as RU JSON. */
export const broshennayaKorzinaEn: BlogPost = {
  slug: "broshennaya-korzina",
  title: "Why shoppers abandon the cart — and what to do about it",
  date: "2019-04-19",
  category: "E-commerce",
  cover: "/images/blog/broshennaya-korzina/cover-en.webp",
  excerpt:
    "Abandoned cart: registration, trust and payment, UX and bugs, hidden fees and delivery times, support, and recovery via email/retargeting — without the cult of “zero abandonment.”",
  lead: [
    "Items in the cart but no order is a normal part of e-commerce — not only a “broken site.” Some people compare prices, get distracted, or were “just looking.” But if checkout drop-off sits clearly above your niche baseline — fix the friction.",
    "Below: common reasons and what to fix — registration, trust, payment, usability, cart bugs, long checkout, hidden fees, delivery timing, and support. Figures like “70% abandon the cart” from old reviews are order-of-magnitude guides, not your store’s norm — watch your own funnel analytics.",
  ],
  faq: [
    {
      q: "Should you aim for zero abandoned carts?",
      a: "No. Some drop-off is inevitable. The goal is to remove extra friction and recover people you can still win with email/retargeting.",
    },
    {
      q: "Is mandatory registration always harmful?",
      a: "Often yes on the first order. Guest checkout or a field minimum (name + contact) usually converts better than a long form.",
    },
    {
      q: "When should you show shipping price?",
      a: "As early as possible: on the product page or before the final step. A surprise at payment is classic abandonment.",
    },
    {
      q: "Do abandoned-cart emails help?",
      a: "Yes if you have consent and a useful offer (availability, timing, help) — not only “you forgot.” Follow personal-data and advertising rules.",
    },
    {
      q: "Do you need a live chat?",
      a: "Not necessarily a chat widget: fast answers matter — FAQ at checkout, phone, messenger. The point is to clear doubt before they leave.",
    },
    {
      q: "Do HTTPS and reviews really matter?",
      a: "For trust — yes. Without a secure connection, contacts, and a clear return policy, expensive orders often don’t finish.",
    },
  ],
  sections: [
    {
      title: "Registration, trust, and payment",
      level: 2,
      paras: [
        "Long mandatory registration before pay irritates: people don’t want to leave extra data “just in case.” Keep a contact minimum or guest order with an option to create an account after.",
        "Security doubts raise drop-off: few reviews, no company details/contacts, broken links, no guarantees and returns, missing HTTPS and clear payment methods.",
        "A narrow payment set also cuts conversion — especially on expensive goods and little-known storefronts. Offer familiar methods and, where it fits, pay-on-delivery / partial prepay.",
      ],
      lists: [
        {
          intro: "Trust signals at checkout:",
          items: [
            "contacts and legal info",
            "reviews and return terms",
            "HTTPS and clear payment marks",
            "a short form without extra fields",
          ],
        },
      ],
      links: [
        {
          label: "Online payment",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "UX, cart bugs, and hidden surprises",
      level: 2,
      paras: [
        "Slow load, no mobile layout, link overload, and no way back to the product — people leave before payment. The cart should remove items one by one and sync tabs without “magic.”",
        "A long multi-step checkout with a dozen optional fields tires people out. Split steps; keep few controls on screen.",
        "Hidden fees (shipping, commission) and delivery time only on the last step are a common leave reason. Show full cost and a timing guide next to the price on the product page.",
      ],
      lists: [
        {
          intro: "Cart tech minimum:",
          items: [
            "remove individual line items",
            "correct total recalculation",
            "stability across several tabs",
            "clear checkout progress",
          ],
        },
      ],
      notes: [
        {
          title: "“Just browsing”",
          kind: "tip",
          text: "Not everything is fixed by UX. For the unsure — a soft promo code, emphasis on availability/delivery, retargeting and a reminder email (with consent). Not everyone returns — and that’s fine.",
        },
      ],
      links: [
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to measure and improve",
      level: 2,
      paras: [
        "Pull the funnel: product view → cart → contacts → payment. The biggest drop gets the fixes. “Recovery” rates via email/retargeting in old articles (tens of percent) depend on niche and list quality — measure your own A/B.",
        "Don’t try to remove every drop reason at once. First trust and transparent price/shipping, then form length and bugs, then recovery communications.",
      ],
    },
  ],
  closing: [
    "An abandoned cart signals friction or doubt — not a verdict. Simplify checkout, show full price and timing earlier, fix the cart, and bring some customers back with honest follow-up — without the illusion of zero abandonment.",
  ],
  related: [
    "oshibki-internet-magazina",
    "onlayn-oplata",
    "kartochka-tovara",
    "retargeting",
    "prodazhi-internet-magazin",
    "promoaktsii",
  ],
};

/** ES overlay for broshennaya-korzina — same structure as RU JSON / EN. */
export const broshennayaKorzinaEs: BlogPost = {
  slug: "broshennaya-korzina",
  title: "Por qué los compradores abandonan el carrito — y qué hacer",
  date: "2019-04-19",
  category: "E-commerce",
  cover: "/images/blog/broshennaya-korzina/cover.webp",
  excerpt:
    "Carrito abandonado: registro, trust y pago, UX y bugs, fees ocultos y plazos de entrega, soporte y recuperación vía email/retargeting — sin el culto del «cero abandono».",
  lead: [
    "Artículos en el carrito pero sin pedido es una parte normal del e-commerce — no solo un «sitio roto». Algunos comparan precios, se distraen o solo «estaban mirando». Pero si el drop-off del checkout está claramente por encima de la base de tu nicho — arregla la fricción.",
    "Abajo: motivos habituales y qué fijar — registro, trust, pago, usabilidad, bugs del carrito, checkout largo, fees ocultos, timing de entrega y soporte. Cifras como «el 70% abandona el carrito» de reseñas viejas son guías de orden de magnitud, no la norma de tu tienda — mira el analytics de tu propio embudo.",
  ],
  faq: [
    {
      q: "¿Hay que apuntar a cero carritos abandonados?",
      a: "No. Parte del drop-off es inevitable. La meta es quitar fricción extra y recuperar a quien aún puedes ganar con email/retargeting.",
    },
    {
      q: "¿El registro obligatorio siempre hace daño?",
      a: "A menudo sí en el primer pedido. Guest checkout o un mínimo de campos (nombre + contacto) suele convertir mejor que un formulario largo.",
    },
    {
      q: "¿Cuándo mostrar el precio de envío?",
      a: "Lo antes posible: en la ficha o antes del paso final. Una sorpresa en el pago es abandono clásico.",
    },
    {
      q: "¿Ayudan los emails de carrito abandonado?",
      a: "Sí si hay consentimiento y una oferta útil (disponibilidad, plazos, ayuda) — no solo «te olvidaste». Cumple reglas de datos personales y publicidad.",
    },
    {
      q: "¿Hace falta un live chat?",
      a: "No necesariamente un widget de chat: importan respuestas rápidas — FAQ en checkout, teléfono, messenger. El punto es despejar la duda antes de que se vayan.",
    },
    {
      q: "¿Importan de verdad HTTPS y las reseñas?",
      a: "Para trust — sí. Sin conexión segura, contactos y una política de devoluciones clara, los pedidos caros a menudo no terminan.",
    },
  ],
  sections: [
    {
      title: "Registro, trust y pago",
      level: 2,
      paras: [
        "Un registro obligatorio largo antes de pagar irrita: la gente no quiere dejar datos extra «por si acaso». Mantén un mínimo de contacto o pedido guest con opción de crear cuenta después.",
        "Las dudas de seguridad suben el drop-off: pocas reseñas, sin datos/contactos de la empresa, links rotos, sin garantías y devoluciones, sin HTTPS y métodos de pago claros.",
        "Un set de pago estrecho también corta la conversión — sobre todo en bienes caros y storefronts poco conocidos. Ofrece métodos familiares y, donde encaje, pago contra entrega / prepago parcial.",
      ],
      lists: [
        {
          intro: "Señales de trust en checkout:",
          items: [
            "contactos e info legal",
            "reseñas y condiciones de devolución",
            "HTTPS y marcas de pago claras",
            "un formulario corto sin campos extra",
          ],
        },
      ],
      links: [
        {
          label: "Pago online",
          href: "/es/blog/onlayn-oplata/",
        },
        {
          label: "Ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "UX, bugs del carrito y sorpresas ocultas",
      level: 2,
      paras: [
        "Carga lenta, sin layout móvil, sobrecarga de links y sin camino de vuelta al producto — la gente se va antes del pago. El carrito debe quitar ítems uno a uno y sincronizar pestañas sin «magia».",
        "Un checkout multi-paso largo con una docena de campos opcionales cansa. Parte los pasos; mantén pocos controles en pantalla.",
        "Fees ocultos (envío, comisión) y plazo de entrega solo en el último paso son un motivo habitual de irse. Muestra el coste completo y una guía de plazos junto al precio en la ficha.",
      ],
      lists: [
        {
          intro: "Mínimo tech del carrito:",
          items: [
            "quitar líneas individuales",
            "recalculo correcto del total",
            "estabilidad entre varias pestañas",
            "progreso de checkout claro",
          ],
        },
      ],
      notes: [
        {
          title: "«Solo mirando»",
          kind: "tip",
          text: "No todo se arregla con UX. Para los inseguros — un código promo suave, énfasis en disponibilidad/entrega, retargeting y un email de recordatorio (con consentimiento). No todos vuelven — y está bien.",
        },
      ],
      links: [
        {
          label: "Errores de tienda online",
          href: "/es/blog/oshibki-internet-magazina/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Cómo medir y mejorar",
      level: 2,
      paras: [
        "Saca el embudo: vista de producto → carrito → contactos → pago. La mayor caída recibe los fixes. Las tasas de «recuperación» vía email/retargeting en artículos viejos (decenas de por ciento) dependen del nicho y la calidad de la lista — mide tu propio A/B.",
        "No intentes quitar todos los motivos de caída a la vez. Primero trust y precio/envío transparentes, luego longitud del formulario y bugs, luego comunicaciones de recuperación.",
      ],
    },
  ],
  closing: [
    "Un carrito abandonado señala fricción o duda — no un veredicto. Simplifica el checkout, muestra precio completo y plazos antes, arregla el carrito y trae de vuelta a parte de los clientes con un follow-up honesto — sin la ilusión del cero abandono.",
  ],
  related: [
    "oshibki-internet-magazina",
    "onlayn-oplata",
    "kartochka-tovara",
    "retargeting",
    "prodazhi-internet-magazin",
    "promoaktsii",
  ],
};

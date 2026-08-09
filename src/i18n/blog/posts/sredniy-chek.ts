import type { BlogPost } from "../../../data/blog";

/** EN overlay for sredniy-chek — same structure as RU JSON. */
export const sredniyChekEn: BlogPost = {
  slug: "sredniy-chek",
  title: "Online store average order value: how to calculate and grow it",
  date: "2019-12-21",
  category: "Digital marketing",
  cover: "/images/blog/sredniy-chek/cover-en.webp",
  excerpt:
    "What average order value (AOV) is, what its dynamics say, and which levers really raise order size: cross-sell, upsell, bundles, shipping thresholds, and loyalty.",
  lead: [
    "Average order value (AOV) is how much a buyer pays on average per order. Revenue can grow without only new traffic: sometimes it’s smarter to raise cart size among people who already buy.",
    "Below: how to calculate the metric, what to read from the trend, and which tactics work in an online store. There’s no universal “+30% AOV in a week” — you pick a mix for assortment and margins.",
  ],
  faq: [
    {
      q: "How do I calculate AOV?",
      a: "Revenue for the period ÷ number of orders (invoices). Use the same period for comparisons: week to week, month to month.",
    },
    {
      q: "How does AOV differ from revenue?",
      a: "Revenue ≈ AOV × order count (simplified). You can grow via purchase frequency at the same AOV — watch both levers.",
    },
    {
      q: "What’s the difference between cross-sell and upsell?",
      a: "Cross-sell is an add-on to the chosen item (a case for a phone). Upsell is a more expensive or more complete version of the same solution.",
    },
    {
      q: "Does free shipping from a threshold always work?",
      a: "Often yes if the threshold is realistic versus current AOV. Too high annoys; too low eats margin.",
    },
    {
      q: "Are timers and “only 2 left” OK to use?",
      a: "Only if true. Fake urgency hurts trust more than it gives a one-off AOV bump.",
    },
    {
      q: "Do I need analytics to grow AOV?",
      a: "Yes: AOV before and after the test, margin, and cancel rate. Otherwise “AOV growth” may be a discount that killed profit.",
    },
  ],
  sections: [
    {
      title: "What average order value is",
      level: 2,
      paras: [
        "AOV shows the typical order sum for a chosen period. Formula: revenue ÷ order count. In a store it’s handy in ecommerce analytics or the accounting system — just keep one logic in numerator and denominator (with returns or without — lock the rule).",
        "Compare like-for-like periods and segments: wholesale vs retail, first vs repeat purchase move the number a lot.",
      ],
      lists: [
        {
          intro: "What dynamics can signal:",
          items: [
            "willingness to pay and upsell readiness",
            "promo effects (AOV up while margin down — a signal)",
            "manager or chat script quality",
            "the threshold where a “fill the cart” bonus makes sense",
          ],
        },
      ],
    },
    {
      title: "Cross-sell and upsell",
      level: 2,
      paras: [
        "Cross-sell — relevant add-ons on the product page, cart, and thank-you: accessories, consumables, install services. The add-on should be logical and not many times more expensive than the main order — or it feels pushy.",
        "Upsell — offer a better version: more volume, warranty, a fuller kit. Honestly describe the benefit difference; “just more expensive” with no meaning fails.",
      ],
      lists: [
        {
          intro: "Where to show it:",
          items: [
            "“bought with this” on the product page",
            "cart recommendations before payment",
            "manager script when confirming the order",
            "a personal offer after purchase",
          ],
        },
      ],
    },
    {
      title: "Bundles and wholesale logic",
      level: 2,
      paras: [
        "“Cheaper than separately” sets raise AOV when savings are clear and the buyer needs the contents. You can carefully include slower movers — without a “stuffed junk” feeling.",
        "Discounts on a second or third unit and light wholesale work for consumables and repeat goods. Calculate bundle margin in advance.",
      ],
    },
    {
      title: "Thresholds: shipping, bonuses, tiers",
      level: 2,
      paras: [
        "Free shipping from a sum is a classic cart-fill nudge. Set the threshold a bit above current AOV — not pulled from thin air.",
        "Loyalty programs and discount tiers (5% from X, 10% from Y) motivate the next step if steps are reachable. The thank-you page is for upsell and subscribe — not aggressive spam.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "threshold vs current AOV",
            "impact on shipping margin",
            "clarity of terms on mobile",
            "no pressure from a fake timer",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Payment variety (cards, instant bank pay, etc.) more often cuts checkout drop-off than it raises AOV by itself — but payment failures hit both AOV and conversion.",
        },
      ],
    },
    {
      title: "How to roll out without hurting margin",
      level: 2,
      paras: [
        "Test one lever at a time: a cross-sell block, a new shipping threshold, a bundle. Compare AOV, order conversion, and margin — AOV up with cart-to-pay down can be zero or negative.",
        "Not every tactic fits every store: B2B, subscription, and one-off premium live by other rules. Treat methods as hypotheses, not an “enable all” checklist.",
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "AOV is a revenue lever next to traffic and purchase frequency. Count it honestly, raise order size with relevant add-ons and thresholds — and always check growth against margin, not only a pretty report number.",
  ],
  related: [
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "menedzher-internet-magazina",
    "istochniki-trafika",
  ],
};

/** ES overlay for sredniy-chek — same structure as RU JSON / EN. */
export const sredniyChekEs: BlogPost = {
  slug: "sredniy-chek",
  title: "Ticket medio de la tienda online: cómo calcularlo y hacerlo crecer",
  date: "2019-12-21",
  category: "Digital marketing",
  cover: "/images/blog/sredniy-chek/cover.webp",
  excerpt:
    "Qué es el average order value (AOV), qué dice su dinámica y qué palancas suben de verdad el tamaño del pedido: cross-sell, upsell, bundles, umbrales de envío y loyalty.",
  lead: [
    "El average order value (AOV) es cuánto paga de media un comprador por pedido. Los ingresos pueden crecer sin solo tráfico nuevo: a veces es más inteligente subir el tamaño del carrito entre quien ya compra.",
    "Abajo: cómo calcular la métrica, qué leer de la tendencia y qué tácticas funcionan en una tienda online. No hay un «+30% AOV en una semana» universal — eliges un mix para surtido y márgenes.",
  ],
  faq: [
    {
      q: "¿Cómo calculo el AOV?",
      a: "Ingresos del periodo ÷ número de pedidos (facturas). Usa el mismo periodo para comparar: semana a semana, mes a mes.",
    },
    {
      q: "¿En qué se diferencia el AOV de los ingresos?",
      a: "Ingresos ≈ AOV × número de pedidos (simplificado). Puedes crecer vía frecuencia de compra con el mismo AOV — mira ambas palancas.",
    },
    {
      q: "¿Cuál es la diferencia entre cross-sell y upsell?",
      a: "Cross-sell es un add-on al ítem elegido (una funda para el teléfono). Upsell es una versión más cara o más completa de la misma solución.",
    },
    {
      q: "¿El envío gratis desde un umbral siempre funciona?",
      a: "A menudo sí si el umbral es realista frente al AOV actual. Demasiado alto molesta; demasiado bajo se come el margen.",
    },
    {
      q: "¿Está bien usar timers y «solo quedan 2»?",
      a: "Solo si es verdad. La urgencia falsa daña la confianza más de lo que da un bump puntual de AOV.",
    },
    {
      q: "¿Necesito analytics para subir el AOV?",
      a: "Sí: AOV antes y después del test, margen y tasa de cancelación. Si no, el «crecimiento de AOV» puede ser un descuento que mató el beneficio.",
    },
  ],
  sections: [
    {
      title: "Qué es el ticket medio",
      level: 2,
      paras: [
        "El AOV muestra la suma típica del pedido en un periodo elegido. Fórmula: ingresos ÷ número de pedidos. En una tienda es útil en analytics ecommerce o en el sistema de contabilidad — solo mantén una lógica en numerador y denominador (con devoluciones o sin ellas — fija la regla).",
        "Compara periodos y segmentos comparables: mayorista vs retail, primera compra vs repetida mueven mucho el número.",
      ],
      lists: [
        {
          intro: "Qué puede señalar la dinámica:",
          items: [
            "disposición a pagar y readiness de upsell",
            "efectos de promo (AOV arriba mientras el margen baja — una señal)",
            "calidad del script de manager o chat",
            "el umbral donde tiene sentido un bonus de «llenar el carrito»",
          ],
        },
      ],
    },
    {
      title: "Cross-sell y upsell",
      level: 2,
      paras: [
        "Cross-sell — add-ons relevantes en la ficha, el carrito y el thank-you: accesorios, consumibles, servicios de instalación. El add-on debe ser lógico y no muchas veces más caro que el pedido principal — o se siente pushy.",
        "Upsell — ofrecer una mejor versión: más volumen, garantía, un kit más completo. Describe con honestidad la diferencia de beneficio; «solo más caro» sin sentido falla.",
      ],
      lists: [
        {
          intro: "Dónde mostrarlo:",
          items: [
            "«compraron con esto» en la ficha",
            "recomendaciones en el carrito antes del pago",
            "script del manager al confirmar el pedido",
            "una oferta personal tras la compra",
          ],
        },
      ],
    },
    {
      title: "Bundles y lógica mayorista",
      level: 2,
      paras: [
        "Sets «más barato que por separado» suben el AOV cuando el ahorro es claro y el comprador necesita el contenido. Puedes incluir con cuidado slow movers — sin sensación de «basura metida».",
        "Descuentos en la segunda o tercera unidad y mayorista ligero funcionan para consumibles y bienes de repetición. Calcula el margen del bundle de antemano.",
      ],
    },
    {
      title: "Umbrales: envío, bonuses, tiers",
      level: 2,
      paras: [
        "Envío gratis desde una suma es un nudge clásico para llenar el carrito. Fija el umbral un poco por encima del AOV actual — no sacado de la nada.",
        "Programas de loyalty y tiers de descuento (5% desde X, 10% desde Y) motivan el siguiente paso si los peldaños son alcanzables. La thank-you page es para upsell y suscripción — no spam agresivo.",
      ],
      lists: [
        {
          intro: "Qué revisar:",
          items: [
            "umbral vs AOV actual",
            "impacto en el margen de envío",
            "claridad de términos en móvil",
            "sin presión de un timer falso",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La variedad de pago (tarjetas, pago bancario instantáneo, etc.) más a menudo corta el drop-off del checkout de lo que sube el AOV por sí sola — pero los fallos de pago golpean AOV y conversión.",
        },
      ],
    },
    {
      title: "Cómo desplegar sin dañar el margen",
      level: 2,
      paras: [
        "Prueba una palanca a la vez: un bloque de cross-sell, un umbral nuevo de envío, un bundle. Compara AOV, conversión a pedido y margen — AOV arriba con carrito-a-pago abajo puede ser cero o negativo.",
        "No toda táctica encaja en toda tienda: B2B, suscripción y premium puntual viven con otras reglas. Trata los métodos como hipótesis, no como un checklist de «activar todo».",
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Arrancar una tienda online",
          href: "/es/blog/start-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "El AOV es una palanca de ingresos junto al tráfico y la frecuencia de compra. Cuéntalo con honestidad, sube el tamaño del pedido con add-ons y umbrales relevantes — y siempre cruza el crecimiento con el margen, no solo con un número bonito del reporte.",
  ],
  related: [
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "menedzher-internet-magazina",
    "istochniki-trafika",
  ],
};

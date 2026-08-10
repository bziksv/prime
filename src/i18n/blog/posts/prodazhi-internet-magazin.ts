import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodazhi-internet-magazin — same structure as RU JSON. */
export const prodazhiInternetMagazinEn: BlogPost = {
  slug: "prodazhi-internet-magazin",
  title: "How to increase online store sales: working levers",
  date: "2019-12-16",
  category: "Digital marketing",
  cover: "/images/blog/prodazhi-internet-magazin/cover-en.webp",
  excerpt:
    "What really moves online store sales: traffic and storefronts, product cards and UX, reviews and chat, content and video, email and AOV — without an “enable everything at once” checklist.",
  lead: [
    "Online store sales growth is traffic × conversion × average order value. External factors (season, competition, prices) always matter; inside you still have the marketing mix, site convenience, and the team.",
    "Below: lever groups that most often move the needle. This isn’t “20 buttons in a week”: take 1–2 hypotheses and measure revenue, CR, and margin. Related topics — CRO, AOV, and store promotion — live in separate articles.",
  ],
  faq: [
    {
      q: "Where should I start on a small budget?",
      a: "At funnel bottlenecks: speed, search, cart, answers to questions. In parallel — one paid or free demand channel (listings, ads) for the niche.",
    },
    {
      q: "Do I need a mobile app?",
      a: "Not necessarily at the start. First a responsive site and a fast checkout. An app — when you have repeat purchases and resources to support it.",
    },
    {
      q: "Are popups always harmful?",
      a: "Pushy ones — yes. A relevant offer (subscribe discount, real promo, exit-intent) can help if it doesn’t block the first screen on mobile.",
    },
    {
      q: "Is advertising alone enough?",
      a: "No. Ads without cards, delivery, and service burn budget. Basic conversion first, then traffic scale.",
    },
    {
      q: "How do I know what worked?",
      a: "Compare the period before/after one change: orders, CR, AOV, margin. Don’t turn on ten edits at once.",
    },
    {
      q: "Should I raise AOV or get more orders?",
      a: "Both levers. Sometimes cart upsell beats expensive new traffic — see the AOV article.",
    },
  ],
  sections: [
    {
      title: "Traffic and storefronts",
      level: 2,
      paras: [
        "Fast growth often comes from ads and demand platforms: search, product listings, marketplaces, and classifieds — wherever your niche actually buys. Free listings help early in some categories, but without a card and service they don’t scale.",
        "Snippet and description affect search CTR; directories and maps affect local trust. Traffic without a landing for the query = expensive bounce.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "product campaigns / listings for the assortment",
            "consistent prices and stock",
            "a company card in directories",
            "UTMs and order goals",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Product cards, content, and video",
      level: 2,
      paras: [
        "Dry descriptions lose: photos, benefits, comparison, FAQ, video reviews of bestselling SKUs. Content cuts “not what I expected” returns and builds trust before “add to cart”.",
        "New arrivals and trends keep interest if stocking is intentional — not chaos for the showcase. Free “toys” (calculator, try-on) work when they help choose — not distract from buying.",
      ],
      links: [
        {
          label: "Interactive content",
          href: "/en/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "UX, cart, and service",
      level: 2,
      paras: [
        "Usability — search, filters, speed, clear structure, a readable mobile screen. A long or confusing checkout kills the order: cart → pay should be short and clear on delivery and terms.",
        "Live chat or a fast reply cuts switches to competitors. Forms with “only needed fields”; reviews with photos and store replies strengthen the decision.",
      ],
      lists: [
        {
          intro: "Common stop factors:",
          items: [
            "slow pages",
            "missing sizes/stock",
            "delivery surprise at the end",
            "no way to ask quickly",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Email, popups, and return",
      level: 2,
      paras: [
        "Consent-based email — bonuses, promos, usefulness, abandoned cart. This isn’t “three emails a day” spam: frequency must match subscriber expectations.",
        "A popup with an email discount or honest offer can grow the list; an aggressive full-screen banner more often hurts trust. Retarget brings back people who viewed a product but didn’t buy.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "AOV and assortment",
      level: 2,
      paras: [
        "Cross-sell, bundles, a free-shipping threshold, and convenient payment raise order size. Count margin: “AOV up — profit down” isn’t a win.",
        "External trends (season, fashion, niche news) suggest what to feature on home and in ads. Inside — manager professionalism: reply, competence, tone.",
      ],
      links: [
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "Don’t copy someone else’s “20 ways” list one-to-one. Pick a lever for the funnel bottleneck and lock the success metric before launch.",
        },
      ],
    },
  ],
  closing: [
    "Store sales grow when traffic meets an easy order and a clear offer. Strengthen the bottleneck, measure the effect, then scale the next lever — without chaotic “enable everything from the article”.",
  ],
  related: [
    "sredniy-chek",
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "istochniki-trafika",
    "otzyvy-dlya-prodazh",
    "start-internet-magazina",
  ],
};

/** ES overlay for prodazhi-internet-magazin — same structure as RU JSON / EN. */
export const prodazhiInternetMagazinEs: BlogPost = {
  slug: "prodazhi-internet-magazin",
  title: "Cómo aumentar las ventas de una tienda online: palancas que funcionan",
  date: "2019-12-16",
  category: "Digital marketing",
  cover: "/images/blog/prodazhi-internet-magazin/cover-es.webp",
  excerpt:
    "Qué mueve de verdad las ventas de una tienda online: tráfico y escaparates, fichas y UX, reseñas y chat, contenido y vídeo, email y AOV — sin un checklist de «activar todo a la vez».",
  lead: [
    "El crecimiento de ventas de una tienda online es tráfico × conversión × ticket medio. Los factores externos (temporada, competencia, precios) siempre importan; por dentro sigues teniendo el marketing mix, la comodidad del sitio y el equipo.",
    "Abajo: grupos de palancas que más a menudo mueven la aguja. Esto no es «20 botones en una semana»: toma 1–2 hipótesis y mide ingresos, CR y margen. Temas relacionados — CRO, AOV y promoción de tienda — viven en artículos aparte.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar con presupuesto pequeño?",
      a: "En los cuellos del funnel: velocidad, búsqueda, carrito, respuestas a preguntas. En paralelo — un canal de demanda de pago o gratis (listings, ads) para el nicho.",
    },
    {
      q: "¿Hace falta una app móvil?",
      a: "No necesariamente al inicio. Primero un sitio responsive y un checkout rápido. Una app — cuando hay compras repetidas y recursos para soportarla.",
    },
    {
      q: "¿Los popups siempre hacen daño?",
      a: "Los pushy — sí. Una oferta relevante (descuento por suscripción, promo real, exit-intent) puede ayudar si no bloquea la primera pantalla en móvil.",
    },
    {
      q: "¿Basta con la publicidad sola?",
      a: "No. Ads sin fichas, delivery y servicio queman presupuesto. Primero conversión básica, luego escala de tráfico.",
    },
    {
      q: "¿Cómo sé qué funcionó?",
      a: "Compara el periodo antes/después de un solo cambio: pedidos, CR, AOV, margen. No actives diez ediciones a la vez.",
    },
    {
      q: "¿Subir AOV u obtener más pedidos?",
      a: "Ambas palancas. A veces el upsell en el carrito gana a tráfico nuevo caro — ver el artículo de AOV.",
    },
  ],
  sections: [
    {
      title: "Tráfico y escaparates",
      level: 2,
      paras: [
        "El crecimiento rápido a menudo viene de ads y plataformas de demanda: búsqueda, listings de producto, marketplaces y clasificados — donde tu nicho compra de verdad. Los listings gratis ayudan al inicio en algunas categorías, pero sin ficha y servicio no escalan.",
        "Snippet y descripción afectan el CTR de búsqueda; directorios y mapas, la confianza local. Tráfico sin landing para la query = bounce caro.",
      ],
      lists: [
        {
          intro: "Revisa:",
          items: [
            "campañas/listings de producto para el surtido",
            "precios y stock consistentes",
            "una ficha de empresa en directorios",
            "UTMs y objetivos de pedido",
          ],
        },
      ],
      links: [
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Fichas de producto, contenido y vídeo",
      level: 2,
      paras: [
        "Las descripciones secas pierden: fotos, beneficios, comparación, FAQ, vídeo reviews de SKUs bestsellers. El contenido corta devoluciones de «no era lo que esperaba» y construye confianza antes de «añadir al carrito».",
        "Novedades y tendencias mantienen el interés si el stocking es intencional — no caos para el escaparate. «Juguetes» gratis (calculadora, try-on) funcionan cuando ayudan a elegir — no a distraer de comprar.",
      ],
      links: [
        {
          label: "Contenido interactivo",
          href: "/es/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "UX, carrito y servicio",
      level: 2,
      paras: [
        "Usabilidad — búsqueda, filtros, velocidad, estructura clara, pantalla móvil legible. Un checkout largo o confuso mata el pedido: carrito → pagar debe ser corto y claro en delivery y términos.",
        "Chat en vivo o una respuesta rápida corta los cambios a competidores. Formularios con «solo campos necesarios»; reseñas con fotos y respuestas de la tienda refuerzan la decisión.",
      ],
      lists: [
        {
          intro: "Factores de stop habituales:",
          items: [
            "páginas lentas",
            "faltan tallas/stock",
            "sorpresa de delivery al final",
            "sin forma de preguntar rápido",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Email, popups y retorno",
      level: 2,
      paras: [
        "Email con consentimiento — bonuses, promos, utilidad, carrito abandonado. Esto no es spam de «tres emails al día»: la frecuencia debe encajar con las expectativas del suscriptor.",
        "Un popup con descuento por email u oferta honesta puede crecer la lista; un banner full-screen agresivo más a menudo daña la confianza. El retarget trae de vuelta a quien vio un producto pero no compró.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "AOV y surtido",
      level: 2,
      paras: [
        "Cross-sell, bundles, umbral de envío gratis y pago cómodo suben el tamaño del pedido. Cuenta el margen: «AOV arriba — beneficio abajo» no es una victoria.",
        "Las tendencias externas (temporada, moda, noticias del nicho) sugieren qué destacar en home y en ads. Por dentro — profesionalismo del manager: respuesta, competencia, tono.",
      ],
      links: [
        {
          label: "Ticket medio",
          href: "/es/blog/sredniy-chek/",
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "No copies la lista «20 formas» de otro uno a uno. Elige una palanca para el cuello del funnel y fija la métrica de éxito antes del lanzamiento.",
        },
      ],
    },
  ],
  closing: [
    "Las ventas de la tienda crecen cuando el tráfico encuentra un pedido fácil y una oferta clara. Refuerza el cuello de botella, mide el efecto y luego escala la siguiente palanca — sin un caótico «activar todo del artículo».",
  ],
  related: [
    "sredniy-chek",
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "istochniki-trafika",
    "otzyvy-dlya-prodazh",
    "start-internet-magazina",
  ],
};

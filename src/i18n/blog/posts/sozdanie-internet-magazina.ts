import type { BlogPost } from "../../../data/blog";

/** EN overlay for sozdanie-internet-magazina — same structure as RU JSON. */
export const sozdanieInternetMagazinaEn: BlogPost = {
  slug: "sozdanie-internet-magazina",
  title: "10 things you can’t skip when building an online store",
  date: "2018-07-12",
  category: "E-commerce",
  cover: "/images/blog/sozdanie-internet-magazina/cover-en.webp",
  excerpt:
    "Clean design, mobile layout, photos, navigation, payment and SSL, assortment, search, support, speed, and reviews — a storefront checklist before you scale traffic.",
  lead: [
    "A pretty mockup doesn’t replace payment, stock, and a clear catalog. When you build an online store, the “boring” layers usually slip first: mobile storefront, product pages, search, and speed.",
    "Lock these ten points before heavy ad spend. We don’t recycle mobile-traffic share figures from old roundups — check your own analytics; the mobile experience is almost always critical.",
  ],
  faq: [
    {
      q: "Does this replace unit economics and purchasing?",
      a: "No. This is about the storefront and on-site service. Product, margin, and logistics are a separate loop — without them the site won’t save you.",
    },
    {
      q: "How is this different from “store optimization mistakes”?",
      a: "That piece covers hidden SEO and UX catalog traps (pagination, filters, pop-ups). This one is a base checklist when you build the storefront.",
    },
    {
      q: "Do I need chat from day one?",
      a: "Not a 24/7 widget. You need a clear contact channel and a reply SLA. Chat helps only if you actually answer.",
    },
    {
      q: "Is HTTPS required?",
      a: "Yes for a modern storefront with forms and payment — plus a privacy policy and current data-processing requirements.",
    },
    {
      q: "When should I connect SEO?",
      a: "After catalog structure, product pages, and tech basics. Prep usually takes weeks to about a month; ranking for the keyword set is planned over 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Design, mobile, and photos",
      level: 2,
      paras: [
        "Design: avoid originality for animation’s sake, visual noise, and a random palette. A calm storefront focused on the product usually wins; follow the audience — not the owner’s taste.",
        "Responsive is required from first release: catalog, product page, cart, and payment must work well on a phone. Mobile purchase share depends on niche — check analytics, not 2018 figures.",
        "Photos: quality, contrasting background, several angles; for apparel and accessories, on-model shots help. A video review is a plus — not a substitute for a proper gallery.",
      ],
      lists: [
        {
          intro: "Common design misses:",
          items: [
            "extra effects instead of focus on the product",
            "element overload and slow load",
            "a loud palette untested on the audience",
            "a layout “for yourself,” not for the buyer",
          ],
        },
      ],
      links: [
        {
          label: "Online store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Product page essentials",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Navigation, payment, and a live assortment",
      level: 2,
      paras: [
        "Structure: categories by type or use, a visible menu, catalog, and breadcrumbs — so people and search understand where things sit. Breadcrumbs help navigation; they don’t magically deliver rankings on their own.",
        "Payment: familiar methods, clear checkout, HTTPS. Privacy policy and data-processing clarity — not “later,” but by the time forms and payment launch.",
        "Assortment: current prices and stock, regular updates, meaningful promos. Dead cards and stale inventory hit trust harder than an imperfect banner.",
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
        {
          label: "Online store homepage",
          href: "/en/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "Search, support, speed, and reviews",
      level: 2,
      paras: [
        "Internal search with decent results by name or SKU saves bounce on large catalogs. Synonyms and frequent queries are worth setting up.",
        "Support: a live channel (chat, phone, messenger) with real replies helps people choose and buy more. An empty widget is worse than an honest “we reply in business hours.”",
        "Speed: a slow product page and cart cut conversion. Comfortable load times matter more than chasing an abstract score — check on a real phone.",
        "Reviews: ask happy customers to leave product and service feedback — trust and assortment insight. Fake reviews risk reputation and platforms.",
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "Store optimization mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "start-internet-magazina",
    "oshibki-internet-magazina",
    "yuzabiliti-internet-magazina",
    "prodvizhenie-internet-magazina",
    "kartochka-tovara",
  ],
};

/** ES overlay for sozdanie-internet-magazina — same structure as RU JSON / EN. */
export const sozdanieInternetMagazinaEs: BlogPost = {
  slug: "sozdanie-internet-magazina",
  title: "10 cosas que no puedes saltarte al crear una tienda online",
  date: "2018-07-12",
  category: "E-commerce",
  cover: "/images/blog/sozdanie-internet-magazina/cover.webp",
  excerpt:
    "Diseño limpio, layout móvil, fotos, navegación, pago y SSL, surtido, búsqueda, soporte, velocidad y reseñas — un checklist de storefront antes de escalar tráfico.",
  lead: [
    "Un mockup bonito no sustituye pago, stock y un catálogo claro. Al crear una tienda online, suelen fallar primero las capas «aburridas»: storefront móvil, fichas, búsqueda y velocidad.",
    "Fija estos diez puntos antes de un gasto fuerte en ads. No reciclamos cifras de cuota de tráfico móvil de roundups viejos — mira tu propio analytics; la experiencia móvil casi siempre es crítica.",
  ],
  faq: [
    {
      q: "¿Esto sustituye unit economics y compras?",
      a: "No. Esto va del storefront y el servicio en el sitio. Producto, margen y logística son un loop aparte — sin ellos el sitio no te salva.",
    },
    {
      q: "¿En qué se diferencia de «errores de optimización de tienda»?",
      a: "Aquella pieza cubre trampas ocultas de SEO y UX del catálogo (paginación, filtros, pop-ups). Esta es un checklist base al armar el storefront.",
    },
    {
      q: "¿Hace falta chat desde el día uno?",
      a: "No un widget 24/7. Hace falta un canal de contacto claro y un SLA de respuesta. El chat ayuda solo si respondes de verdad.",
    },
    {
      q: "¿Es obligatorio HTTPS?",
      a: "Sí para un storefront moderno con formularios y pago — más una política de privacidad y los requisitos vigentes de tratamiento de datos.",
    },
    {
      q: "¿Cuándo conectar SEO?",
      a: "Tras estructura de catálogo, fichas y bases técnicas. La prep suele llevar de semanas a ~1 mes; el ranking del conjunto de keywords se planea a 2–6 meses.",
    },
  ],
  sections: [
    {
      title: "Diseño, móvil y fotos",
      level: 2,
      paras: [
        "Diseño: evita originalidad por la animación, ruido visual y una paleta al azar. Un storefront calmado centrado en el producto suele ganar; sigue a la audiencia — no el gusto del dueño.",
        "Responsive es obligatorio desde el primer release: catálogo, ficha, carrito y pago deben funcionar bien en el teléfono. La cuota de compra móvil depende del nicho — mira analytics, no cifras de 2018.",
        "Fotos: calidad, fondo contrastado, varios ángulos; para ropa y accesorios, shots en modelo ayudan. Un vídeo review es un plus — no un sustituto de una galería decente.",
      ],
      lists: [
        {
          intro: "Misses habituales de diseño:",
          items: [
            "efectos extra en vez de foco en el producto",
            "sobrecarga de elementos y carga lenta",
            "una paleta ruidosa sin testear en la audiencia",
            "un layout «para ti», no para el comprador",
          ],
        },
      ],
      links: [
        {
          label: "Usabilidad de tienda online",
          href: "/es/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Esenciales de la ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Navegación, pago y surtido vivo",
      level: 2,
      paras: [
        "Estructura: categorías por tipo o uso, menú visible, catálogo y breadcrumbs — para que gente y búsqueda entiendan dónde está cada cosa. Los breadcrumbs ayudan a la navegación; no entregan rankings por magia solos.",
        "Pago: métodos familiares, checkout claro, HTTPS. Política de privacidad y claridad de tratamiento de datos — no «después», sino cuando formularios y pago lancen.",
        "Surtido: precios y stock actuales, updates regulares, promos con sentido. Fichas muertas e inventario viejo pegan más a la trust que un banner imperfecto.",
      ],
      links: [
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
        {
          label: "Homepage de tienda online",
          href: "/es/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "Búsqueda, soporte, velocidad y reseñas",
      level: 2,
      paras: [
        "Búsqueda interna con resultados decentes por nombre o SKU salva rebotes en catálogos grandes. Sinónimos y consultas frecuentes merecen setup.",
        "Soporte: un canal vivo (chat, teléfono, messenger) con respuestas reales ayuda a elegir y comprar más. Un widget vacío es peor que un «respondemos en horario laboral» honesto.",
        "Velocidad: una ficha y un carrito lentos cortan la conversión. Tiempos de carga cómodos importan más que perseguir un score abstracto — comprueba en un teléfono real.",
        "Reseñas: pide a clientes contentos feedback de producto y servicio — trust e insight de surtido. Reseñas falsas arriesgan reputación y plataformas.",
      ],
      links: [
        {
          label: "Empezar una tienda online",
          href: "/es/blog/start-internet-magazina/",
        },
        {
          label: "Errores de optimización de tienda",
          href: "/es/blog/oshibki-internet-magazina/",
        },
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "start-internet-magazina",
    "oshibki-internet-magazina",
    "yuzabiliti-internet-magazina",
    "prodvizhenie-internet-magazina",
    "kartochka-tovara",
  ],
};

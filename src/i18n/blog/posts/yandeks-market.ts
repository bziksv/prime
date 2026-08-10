import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-market — same structure as RU JSON. */
export const yandeksMarketEn: BlogPost = {
  slug: "yandeks-market",
  title: "Yandex Market: how to list an online store",
  date: "2018-06-13",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-market/cover-en.webp",
  excerpt:
    "How to connect a store to Yandex Market: site requirements, YML feed, delivery, and moderation — without outdated “20 million audience” claims and easy-sales promises.",
  lead: [
    "Yandex Market is a surface where shoppers compare products and store offers. For a seller it’s a demand channel next to your own site: card comparisons, search, and related Yandex surfaces.",
    "Below: store requirements, feed prep, connection steps, and ops after moderation. Placement models (CPA, CPC, marketplace logic) and cabinets have changed since 2018 — check current Market partner Help. Peer platforms live in a separate article.",
  ],
  faq: [
    {
      q: "Do I need my own site?",
      a: "For the classic storefront / click-out model — yes: a stable shop with cards, cart, and policies. FBY/FBS and other schemes — see current Help.",
    },
    {
      q: "Which feed format?",
      a: "YML most often; tabular formats were also accepted. Current list — in Help. The key is regular price and availability updates.",
    },
    {
      q: "How is this different from Google Merchant?",
      a: "Different ecosystem and rules. The idea is similar: feed plus policy fit plus ads/display. See the Merchant Center article.",
    },
    {
      q: "Does Market guarantee sales?",
      a: "No. You need competitive price, availability, reviews, order-handling speed, and margin after fees.",
    },
    {
      q: "Can I sell used goods?",
      a: "Historically new original goods were required. Banned assortment and exceptions — by current platform rules.",
    },
  ],
  sections: [
    {
      title: "Why a store needs Market",
      level: 2,
      paras: [
        "Shoppers often compare prices and delivery in one catalog. Appearing in Market results and related search surfaces brings demand you’d otherwise buy entirely with ads.",
        "Downsides: price competition, dependence on rules and the product card, fees / click cost by model. Don’t put 2018 audience figures in the plan — use your pilot and unit economics.",
      ],
      lists: [
        {
          intro: "When the channel fits:",
          items: [
            "B2C retail, legal assortment",
            "margin left after fees",
            "catalog with decent photos and descriptions",
            "ready to confirm orders quickly",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Market alternatives",
          href: "/en/blog/analogi-yandeks-market/",
        },
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
      ],
    },
    {
      title: "Site and business requirements",
      level: 2,
      paras: [
        "Typical minimum: sole trader or legal entity, retail of new original goods, legal compliance, working HTTPS site without malware, cart and checkout, a card per SKU with photo and description.",
        "On the site in the open: legal details and contacts, current prices and availability, payment, delivery, and returns. Orders in business hours are handled fast — historically about an hour; check current SLA in the rules.",
      ],
      lists: [
        {
          intro: "Checklist before applying:",
          items: [
            "legal details on the site",
            "returns and delivery policy",
            "prices match the feed",
            "availability synced",
            "test purchase as a buyer",
          ],
        },
      ],
      links: [
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Product feed: YML and updates",
      level: 2,
      paras: [
        "Prices go as a file or URL: YML is preferred for large catalogs (CMS module or 1C export). For a small assortment a table sometimes works — if the format is still accepted.",
        "Update the feed regularly: a stale price or “available” at zero inventory hits store rating and moderation. After upload, check the error report in the partner cabinet.",
      ],
      notes: [
        {
          title: "One feed isn’t for every platform",
          text: "Attribute bases overlap, but Market, Merchant, and marketplaces need their own fields and categories. Plan for adaptation.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Connection and moderation",
      level: 2,
      paras: [
        "Create or sign into the Market partner cabinet, fill store data, upload the feed, set delivery regions, warehouses, and pickup methods. The store goes to review: staff or automation check rule fit; sometimes they run control purchase scenarios.",
        "Timelines and checklists changed — clarify the old “a few business days” guide. After a reject, read the reason, fix site or feed, and apply again.",
      ],
      lists: [
        {
          intro: "Common reject causes:",
          items: [
            "no returns or contacts",
            "broken cart",
            "price mismatch",
            "banned or gray assortment",
            "unstable site",
          ],
        },
      ],
    },
    {
      title: "After launch: price, availability, reviews",
      level: 2,
      paras: [
        "Keep the feed live, watch error share, order confirmation speed, and reviews. Poor service discipline hurts visibility more than one more banner.",
        "Count CPA and margin by SKU: dumping for impressions without profit is a dead end. In parallel strengthen your site and other channels.",
      ],
      links: [
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
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Market is a channel with strict site and feed requirements — not a “list and forget” button.",
        "Check the placement model and rules against current Help; don’t copy 2018 audience figures into the business plan.",
      ],
    },
  ],
  closing: [
    "Prep the site and YML for Market rules, upload the feed, finalize delivery and legal details — and pass moderation before scaling budget into the channel.",
  ],
  related: [
    "analogi-yandeks-market",
    "google-merchant-center",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};

/** ES overlay for yandeks-market — same structure as RU JSON / EN. */
export const yandeksMarketEs: BlogPost = {
  slug: "yandeks-market",
  title: "Yandex Market: cómo listar una tienda online",
  date: "2018-06-13",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-market/cover-es.webp",
  excerpt:
    "Cómo conectar una tienda a Yandex Market: requisitos del sitio, feed YML, entrega y moderación — sin claims obsoletos de «audiencia de 20 millones» ni promesas de ventas fáciles.",
  lead: [
    "Yandex Market es una superficie donde los compradores comparan productos y ofertas de tiendas. Para un vendedor es un canal de demanda junto a tu propio sitio: comparaciones de fichas, búsqueda y superficies relacionadas de Yandex.",
    "Abajo: requisitos de la tienda, preparación del feed, pasos de conexión y ops tras la moderación. Los modelos de placement (CPA, CPC, lógica marketplace) y los cabinets han cambiado desde 2018 — mira Help actual de partner de Market. Las plataformas pares viven en un artículo aparte.",
  ],
  faq: [
    {
      q: "¿Hace falta un sitio propio?",
      a: "Para el modelo clásico de escaparate / click-out — sí: una tienda estable con fichas, carrito y políticas. Esquemas FBY/FBS y otros — mira Help actual.",
    },
    {
      q: "¿Qué formato de feed?",
      a: "YML la mayoría de las veces; también se aceptaban formatos tabulares. Lista actual — en Help. La clave son actualizaciones regulares de precio y disponibilidad.",
    },
    {
      q: "¿En qué se diferencia de Google Merchant?",
      a: "Ecosistema y reglas distintos. La idea es similar: feed más encaje con políticas más ads/display. Ver el artículo de Merchant Center.",
    },
    {
      q: "¿Market garantiza ventas?",
      a: "No. Hace falta precio competitivo, disponibilidad, reseñas, velocidad de manejo de pedidos y margen tras fees.",
    },
    {
      q: "¿Se pueden vender bienes usados?",
      a: "Históricamente se exigían bienes nuevos originales. Surtido prohibido y excepciones — según las reglas actuales de la plataforma.",
    },
  ],
  sections: [
    {
      title: "Por qué una tienda necesita Market",
      level: 2,
      paras: [
        "Los compradores a menudo comparan precios y entrega en un solo catálogo. Aparecer en resultados de Market y superficies de búsqueda relacionadas trae demanda que de otro modo comprarías por completo con ads.",
        "Contras: competencia de precio, dependencia de reglas y de la ficha de producto, fees / coste de clic según el modelo. No metas cifras de audiencia de 2018 en el plan — usa tu piloto y unit economics.",
      ],
      lists: [
        {
          intro: "Cuando el canal encaja:",
          items: [
            "retail B2C, surtido legal",
            "margen que queda tras fees",
            "catálogo con fotos y descripciones decentes",
            "listo para confirmar pedidos rápido",
          ],
        },
      ],
      links: [
        {
          label: "Alternativas a Yandex Market",
          href: "/es/blog/analogi-yandeks-market/",
        },
        {
          label: "Google Merchant Center",
          href: "/es/blog/google-merchant-center/",
        },
      ],
    },
    {
      title: "Requisitos del sitio y del negocio",
      level: 2,
      paras: [
        "Mínimo típico: autónomo o persona jurídica, retail de bienes nuevos originales, cumplimiento legal, sitio HTTPS que funcione sin malware, carrito y checkout, una ficha por SKU con foto y descripción.",
        "En el sitio a la vista: datos legales y contactos, precios y disponibilidad actuales, pago, entrega y devoluciones. Los pedidos en horario laboral se manejan rápido — históricamente alrededor de una hora; mira el SLA actual en las reglas.",
      ],
      lists: [
        {
          intro: "Checklist antes de solicitar:",
          items: [
            "datos legales en el sitio",
            "política de devoluciones y entrega",
            "precios que coinciden con el feed",
            "disponibilidad sincronizada",
            "compra de prueba como comprador",
          ],
        },
      ],
      links: [
        {
          label: "Errores de la tienda online",
          href: "/es/blog/oshibki-internet-magazina/",
        },
        {
          label: "Ficha de producto",
          href: "/es/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Feed de productos: YML y actualizaciones",
      level: 2,
      paras: [
        "Los precios van como archivo o URL: YML se prefiere para catálogos grandes (módulo CMS o export 1C). Para un surtido pequeño a veces sirve una tabla — si el formato sigue aceptado.",
        "Actualiza el feed con regularidad: un precio viejo o «disponible» con inventario a cero pega al rating de la tienda y a la moderación. Tras subir, revisa el informe de errores en el cabinet partner.",
      ],
      notes: [
        {
          title: "Un feed no sirve para todas las plataformas",
          text: "Las bases de atributos se solapan, pero Market, Merchant y marketplaces necesitan sus propios campos y categorías. Planifica la adaptación.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Conexión y moderación",
      level: 2,
      paras: [
        "Crea o inicia sesión en el cabinet partner de Market, rellena datos de la tienda, sube el feed, configura regiones de entrega, almacenes y métodos de pickup. La tienda pasa a revisión: staff o automatización comprueban el encaje con reglas; a veces corren escenarios de compra de control.",
        "Plazos y checklists cambiaron — aclara la guía vieja de «unos pocos días hábiles». Tras un rechazo, lee el motivo, arregla sitio o feed y solicita de nuevo.",
      ],
      lists: [
        {
          intro: "Causas habituales de rechazo:",
          items: [
            "sin devoluciones ni contactos",
            "carrito roto",
            "desajuste de precios",
            "surtido prohibido o gris",
            "sitio inestable",
          ],
        },
      ],
    },
    {
      title: "Tras el lanzamiento: precio, disponibilidad, reseñas",
      level: 2,
      paras: [
        "Mantén el feed vivo, mira la cuota de errores, la velocidad de confirmación de pedidos y las reseñas. Mala disciplina de servicio duele a la visibilidad más que un banner más.",
        "Cuenta CPA y margen por SKU: dumping por impresiones sin beneficio es un callejón sin salida. En paralelo refuerza tu sitio y otros canales.",
      ],
      links: [
        {
          label: "Promoción de la tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Arrancar una tienda online",
          href: "/es/blog/start-internet-magazina/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Market es un canal con requisitos estrictos de sitio y feed — no un botón de «lista y olvida».",
        "Revisa el modelo de placement y las reglas contra Help actual; no copies cifras de audiencia de 2018 al plan de negocio.",
      ],
    },
  ],
  closing: [
    "Prepara el sitio y el YML para las reglas de Market, sube el feed, cierra entrega y datos legales — y pasa la moderación antes de escalar presupuesto al canal.",
  ],
  related: [
    "analogi-yandeks-market",
    "google-merchant-center",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};

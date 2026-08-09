import type { BlogPost } from "../../../data/blog";

/** EN overlay for analogi-yandeks-market — same structure as RU JSON. */
export const analogiYandeksMarketEn: BlogPost = {
  slug: "analogi-yandeks-market",
  title: "Yandex Market alternatives: why diversify and how to choose",
  date: "2021-06-24",
  category: "E-commerce",
  cover: "/images/blog/analogi-yandeks-market/cover-en.webp",
  excerpt:
    "Why an online store shouldn’t lean only on Yandex Market, which nearby platform types exist, and how to pick sales channels — without a 2021 catalog of dead services.",
  lead: [
    "Yandex Market is a major channel for comparing and selling goods. The catalog is competitive, terms and visibility shift, and buyers also shop on marketplaces and other price aggregators.",
    "Below: why to diversify placement, which platform types sit nearby, and what to check in the contract and feed. Don’t copy 2021 brand lists and rate cards — the market moved on.",
  ],
  faq: [
    {
      q: "Do you need to leave Yandex Market entirely?",
      a: "Not necessarily. More often you add channels: your site + Market + marketplaces / price aggregators — by SKU economics.",
    },
    {
      q: "How does a price aggregator differ from a marketplace?",
      a: "An aggregator more often sends people to a comparison card and then to the seller’s store. A marketplace may take the order itself (FBO/FBS and its own rules).",
    },
    {
      q: "Is one YML feed enough for every platform?",
      a: "One product base, but platforms have their own fields, categories, and moderation. Plan feed adaptation and error monitoring.",
    },
    {
      q: "Why are old “Goods@Mail / Wikimart” lists outdated?",
      a: "Many services closed or changed model. Use the platform’s current status and a pilot test.",
    },
    {
      q: "Where should a beginner start?",
      a: "Count margin after fees, check niche demand, export a clean feed, and measure CPA/ROI by channel.",
    },
  ],
  sections: [
    {
      title: "Why look beyond Market",
      level: 2,
      paras: [
        "In one big catalog it’s easy to get lost: price wars, dependence on algorithms and the product card, fights over stock and delivery. An extra channel cushions demand and lowers the “all eggs in one basket” risk.",
        "Buyers don’t compare only on Market: marketplaces, search, price aggregators, and your own site cover different choice paths.",
      ],
      lists: [
        {
          intro: "Typical triggers to diversify:",
          items: [
            "high competition and dumping in the niche",
            "visibility or moderation limits",
            "need reach on another platform’s audience",
            "testing FBO/FBS vs your own store",
          ],
        },
      ],
    },
    {
      title: "Platform types next to Market",
      level: 2,
      paras: [
        "Not every “alternative” is a Market clone. Some are marketplaces with logistics, some are price comparison that exits to the seller’s site, some are ad networks for product ads.",
        "Don’t treat name lists from 2021 guides (dead aggregators, closed projects) as a launch plan. Check whether the platform is alive, which feeds it takes, and the unit economics.",
      ],
      lists: [
        {
          intro: "Type map:",
          items: [
            "price aggregators / comparison",
            "marketplaces with a storefront and fulfillment",
            "product ads / affiliate networks",
            "your own online store as a controlled channel",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "How to choose a channel",
      level: 2,
      paras: [
        "Don’t chase “millions of users in the ads.” Look at your unit economics: fees, CPC/CPA, returns, photo and copy requirements, moderation speed, regional delivery support.",
        "Technically what matters: feed format (often YML and analogues), stable price/stock updates, reports on clicks and orders.",
      ],
      lists: [
        {
          intro: "Checklist before connecting:",
          items: [
            "margin after fees and logistics",
            "category and attribute compatibility",
            "content rules and penalties",
            "pilot on part of the assortment",
            "end-to-end order analytics",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One “dead” catalog with stale prices is worse than two channels with a clean feed and measured ROI.",
        },
      ],
    },
    {
      title: "How to fit it into the sales system",
      level: 2,
      paras: [
        "Keep one source of truth for prices and stock (ERP/CRM/accounting) and build feeds per platform from it. Otherwise mismatch kills rating and budget.",
        "Compare channels on the same metrics: acquisition cost, margin, return rate, support load. Turn off what doesn’t pay back after the test.",
      ],
      lists: [
        {
          intro: "Process minimum:",
          items: [
            "fresh feed and error alerts",
            "an owner for cards and reviews",
            "weekly channel report",
            "pricing rules without racing discounts into the red",
          ],
        },
      ],
      links: [
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
};

/** ES overlay for analogi-yandeks-market — same structure as RU JSON / EN. */
export const analogiYandeksMarketEs: BlogPost = {
  slug: "analogi-yandeks-market",
  title: "Alternativas a Yandex Market: por qué diversificar y cómo elegir",
  date: "2021-06-24",
  category: "E-commerce",
  cover: "/images/blog/analogi-yandeks-market/cover.webp",
  excerpt:
    "Por qué una tienda online no debería apoyarse solo en Yandex Market, qué tipos de plataformas cercanas existen y cómo elegir canales de venta — sin un catálogo 2021 de servicios muertos.",
  lead: [
    "Yandex Market es un canal mayor para comparar y vender bienes. El catálogo es competitivo, términos y visibilidad cambian, y los compradores también compran en marketplaces y otros agregadores de precios.",
    "Abajo: por qué diversificar la colocación, qué tipos de plataforma hay cerca y qué revisar en el contrato y el feed. No copies listas de marcas ni tarifas de 2021 — el mercado se movió.",
  ],
  faq: [
    {
      q: "¿Hay que dejar Yandex Market por completo?",
      a: "No necesariamente. Más a menudo se añaden canales: tu sitio + Market + marketplaces / agregadores de precios — según la economía del SKU.",
    },
    {
      q: "¿En qué se diferencia un agregador de precios de un marketplace?",
      a: "Un agregador suele mandar a la gente a una tarjeta de comparación y luego a la tienda del vendedor. Un marketplace puede tomar el pedido él mismo (FBO/FBS y sus propias reglas).",
    },
    {
      q: "¿Basta un feed YML para todas las plataformas?",
      a: "Una base de producto, pero las plataformas tienen campos, categorías y moderación propias. Planifica adaptación del feed y monitoreo de errores.",
    },
    {
      q: "¿Por qué están obsoletas las listas antiguas de «Goods@Mail / Wikimart»?",
      a: "Muchos servicios cerraron o cambiaron de modelo. Usa el estado actual de la plataforma y un test piloto.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Cuenta el margen tras comisiones, revisa la demanda del nicho, exporta un feed limpio y mide CPA/ROI por canal.",
    },
  ],
  sections: [
    {
      title: "Por qué mirar más allá de Market",
      level: 2,
      paras: [
        "En un catálogo grande es fácil perderse: guerras de precio, dependencia de algoritmos y de la ficha de producto, peleas por stock y entrega. Un canal extra amortigua la demanda y baja el riesgo de «todos los huevos en una cesta».",
        "Los compradores no comparan solo en Market: marketplaces, búsqueda, agregadores de precios y tu propio sitio cubren caminos de elección distintos.",
      ],
      lists: [
        {
          intro: "Triggers típicos para diversificar:",
          items: [
            "alta competencia y dumping en el nicho",
            "límites de visibilidad o moderación",
            "necesidad de alcance en la audiencia de otra plataforma",
            "probar FBO/FBS vs tu propia tienda",
          ],
        },
      ],
    },
    {
      title: "Tipos de plataforma junto a Market",
      level: 2,
      paras: [
        "No toda «alternativa» es un clon de Market. Unas son marketplaces con logística, otras comparación de precios que sale al sitio del vendedor, otras redes de ads de producto.",
        "No trates listas de nombres de guías 2021 (agregadores muertos, proyectos cerrados) como plan de lanzamiento. Revisa si la plataforma está viva, qué feeds acepta y la unit economics.",
      ],
      lists: [
        {
          intro: "Mapa de tipos:",
          items: [
            "agregadores de precios / comparación",
            "marketplaces con escaparate y fulfillment",
            "ads de producto / redes de afiliados",
            "tu propia tienda online como canal controlado",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Cómo elegir un canal",
      level: 2,
      paras: [
        "No persigas «millones de usuarios en los ads». Mira tu unit economics: comisiones, CPC/CPA, devoluciones, requisitos de foto y copy, velocidad de moderación, soporte de entrega regional.",
        "Técnicamente importa: formato del feed (a menudo YML y análogos), updates estables de precio/stock, informes de clics y pedidos.",
      ],
      lists: [
        {
          intro: "Checklist antes de conectar:",
          items: [
            "margen tras comisiones y logística",
            "compatibilidad de categoría y atributos",
            "reglas de contenido y penalizaciones",
            "piloto en parte del surtido",
            "analítica de pedidos de extremo a extremo",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Un catálogo «muerto» con precios viejos es peor que dos canales con un feed limpio y ROI medido.",
        },
      ],
    },
    {
      title: "Cómo encajarlo en el sistema de ventas",
      level: 2,
      paras: [
        "Mantén una fuente de verdad para precios y stock (ERP/CRM/contabilidad) y construye feeds por plataforma desde ahí. Si no, el desajuste mata rating y presupuesto.",
        "Compara canales con las mismas métricas: coste de adquisición, margen, tasa de devolución, carga de soporte. Apaga lo que no se paga tras el test.",
      ],
      lists: [
        {
          intro: "Mínimo de proceso:",
          items: [
            "feed fresco y alertas de error",
            "un dueño de fichas y reseñas",
            "informe semanal por canal",
            "reglas de pricing sin correr descuentos a números rojos",
          ],
        },
      ],
      links: [
        {
          label: "Pago online en el sitio",
          href: "/es/blog/onlayn-oplata/",
        },
        {
          label: "Reporting al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
  ],
};

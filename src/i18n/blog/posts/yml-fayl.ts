import type { BlogPost } from "../../../data/blog";

/** EN overlay for yml-fayl — same structure as RU JSON. */
export const ymlFaylEn: BlogPost = {
  slug: "yml-fayl",
  title: "YML file for Yandex Market: why you need it and how to prepare it",
  date: "2020-10-20",
  category: "Digital marketing",
  cover: "/images/blog/yml-fayl/cover-en.webp",
  excerpt:
    "What an online store YML feed is, why it beats CSV/XLS on a large catalog, which fields matter, and how to load a price list into Market — without outdated cabinet screenshots.",
  lead: [
    "YML (Yandex Market Language) is an XML product feed for Yandex Market and related scenarios. The platform uses it for names, prices, availability, links, and attributes to show the storefront and take orders under its rules.",
    "Below: why YML beats hand-edited tables, what the feed contains, and how to build and refresh it. Market cabinet menu items change — check current Yandex Help.",
  ],
  faq: [
    {
      q: "YML, CSV, or XLS?",
      a: "For a small manual catalog a spreadsheet can be enough. At hundreds of SKUs YML is easier: auto-refresh from CMS or accounting and richer attribute fields.",
    },
    {
      q: "Can one feed serve every marketplace?",
      a: "The base can be shared, but fields and categories differ by platform. Teams often keep one source and separate exports or mapping. See Market alternatives.",
    },
    {
      q: "How often should I update the price list?",
      a: "The more price and inventory change — the more often. Stale availability hurts rating and returns. Aim for automatic updates, not once a month by hand.",
    },
    {
      q: "Do I need to write XML by hand?",
      a: "Rarely. Usually a CMS module, plugin, or ERP export. Hand edits are for tests and spot fixes — not thousands of cards.",
    },
    {
      q: "What breaks moderation most often?",
      a: "Empty required fields, broken links or photos, wrong categories, price or availability from the past, forbidden wording in the title.",
    },
    {
      q: "Is YML the same as a Turbo feed?",
      a: "No. YML is a product price list for Market or ads. Turbo was a separate accelerated-pages story — and that product format is outdated.",
    },
    {
      q: "Where can I see errors?",
      a: "In the partner or Market cabinet after feed upload and in moderation emails. Fix the data source, not only the file on disk.",
    },
  ],
  sections: [
    {
      title: "Why a store needs a Market feed",
      level: 2,
      paras: [
        "Market shows products in comparison catalogs and related surfaces. Without a correct price list, cards won’t appear or will show wrong price and availability.",
        "The feed is the bridge between your inventory system and the platform storefront: update price on site or warehouse → file updates → listing updates.",
      ],
      lists: [
        {
          intro: "Price-list formats:",
          items: [
            "CSV — simple delimited text",
            "XLS or spreadsheet — easy to edit by hand on a small set",
            "YML — XML for Market, better for auto-export and attributes",
          ],
        },
      ],
    },
    {
      title: "How YML is structured",
      level: 2,
      paras: [
        "The file usually describes the shop, currencies, categories, and offers (`offer`): id, url, price, currencyId, categoryId, picture, name/description, availability, and parameters.",
        "Exact required fields and schemas (simplified or custom type) are in current Yandex docs — requirements keep expanding.",
      ],
      lists: [
        {
          intro: "Keep each offer in order:",
          items: [
            "stable product id",
            "working product-card url on your site",
            "current price and availability",
            "clear name (type plus model, no junk)",
            "photos per platform rules",
            "category and key param fields",
          ],
        },
      ],
    },
    {
      title: "How to create and upload the file",
      level: 2,
      paras: [
        "Preferred path: store module or scheduled export from accounting, file available at an HTTPS URL. Market then pulls updates itself.",
        "Alternative — manual file upload in the cabinet. Fine for tests, poor as the only process on a live catalog.",
      ],
      lists: [
        {
          intro: "Order without old button names:",
          items: [
            "assemble assortment and categories in the source of truth",
            "generate YML and validate XML",
            "open the feed URL from the server",
            "connect the price list in the Market cabinet",
            "read moderation errors and fix the source",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Errors and ongoing care",
      level: 2,
      paras: [
        "After upload watch reports: unreachable URLs, empty images, duplicate ids, wrong currency. Moderation emails are a work signal, not spam.",
        "Keep one source for prices and inventory. Site and feed mismatch hurts trust more than missing another marketplace.",
      ],
      links: [
        {
          label: "Yandex Market alternatives",
          href: "/en/blog/analogi-yandeks-market/",
        },
      ],
    },
  ],
  closing: [
    "YML is the working language of a Market product price list: auto-updates, attributes, and less manual grind than spreadsheets. Build the feed from inventory, refresh often, and fix errors in the data source.",
  ],
};

/** ES overlay for yml-fayl — same structure as RU JSON / EN. */
export const ymlFaylEs: BlogPost = {
  slug: "yml-fayl",
  title: "Archivo YML para Yandex Market: para qué sirve y cómo prepararlo",
  date: "2020-10-20",
  category: "Digital marketing",
  cover: "/images/blog/yml-fayl/cover-es.webp",
  excerpt:
    "Qué es un feed YML de tienda online, por qué gana a CSV/XLS en un catálogo grande, qué campos importan y cómo cargar un price list en Market — sin capturas obsoletas del cabinet.",
  lead: [
    "YML (Yandex Market Language) es un feed XML de productos para Yandex Market y escenarios relacionados. La plataforma lo usa para nombres, precios, disponibilidad, enlaces y atributos para mostrar el escaparate y tomar pedidos bajo sus reglas.",
    "Abajo: por qué YML gana a tablas editadas a mano, qué contiene el feed y cómo armarlo y refrescarlo. Los ítems del menú del cabinet de Market cambian — revisa la Help actual de Yandex.",
  ],
  faq: [
    {
      q: "¿YML, CSV o XLS?",
      a: "Para un catálogo pequeño manual puede bastar una hoja. Con cientos de SKUs YML es más fácil: auto-refresh desde CMS o contabilidad y campos de atributos más ricos.",
    },
    {
      q: "¿Un feed sirve para todo marketplace?",
      a: "La base puede compartirse, pero campos y categorías difieren por plataforma. Los equipos a menudo mantienen una fuente y exports o mapping aparte. Ver alternativas a Market.",
    },
    {
      q: "¿Con qué frecuencia actualizar el price list?",
      a: "Cuanto más cambian precio e inventario — más a menudo. Disponibilidad stale daña rating y devoluciones. Apunta a updates automáticos, no una vez al mes a mano.",
    },
    {
      q: "¿Hay que escribir XML a mano?",
      a: "Rara vez. Suele ser un módulo CMS, plugin o export ERP. Ediciones a mano son para tests y fixes puntuales — no para miles de fichas.",
    },
    {
      q: "¿Qué rompe la moderación con más frecuencia?",
      a: "Campos obligatorios vacíos, enlaces o fotos rotos, categorías incorrectas, precio o disponibilidad del pasado, redacción prohibida en el title.",
    },
    {
      q: "¿YML es lo mismo que un feed Turbo?",
      a: "No. YML es un price list de productos para Market o ads. Turbo fue otra historia de páginas aceleradas — y ese formato de producto está obsoleto.",
    },
    {
      q: "¿Dónde veo los errores?",
      a: "En el cabinet de partner o Market tras subir el feed y en emails de moderación. Arregla la fuente de datos, no solo el archivo en disco.",
    },
  ],
  sections: [
    {
      title: "Por qué una tienda necesita un feed de Market",
      level: 2,
      paras: [
        "Market muestra productos en catálogos de comparación y superficies relacionadas. Sin un price list correcto, las fichas no aparecen o muestran precio y disponibilidad equivocados.",
        "El feed es el puente entre tu sistema de inventario y el escaparate de la plataforma: actualizas precio en sitio o almacén → se actualiza el archivo → se actualiza el listing.",
      ],
      lists: [
        {
          intro: "Formatos de price list:",
          items: [
            "CSV — texto delimitado simple",
            "XLS u hoja — fácil de editar a mano en un set pequeño",
            "YML — XML para Market, mejor para auto-export y atributos",
          ],
        },
      ],
    },
    {
      title: "Cómo se estructura el YML",
      level: 2,
      paras: [
        "El archivo suele describir la tienda, monedas, categorías y offers (`offer`): id, url, price, currencyId, categoryId, picture, name/description, availability y parameters.",
        "Los campos obligatorios exactos y los schemas (tipo simplificado o custom) están en la docs actual de Yandex — los requisitos siguen ampliándose.",
      ],
      lists: [
        {
          intro: "Mantén cada offer en orden:",
          items: [
            "id de producto estable",
            "url de ficha que funcione en tu sitio",
            "precio y disponibilidad actuales",
            "nombre claro (tipo más modelo, sin basura)",
            "fotos según reglas de la plataforma",
            "categoría y campos param clave",
          ],
        },
      ],
    },
    {
      title: "Cómo crear y subir el archivo",
      level: 2,
      paras: [
        "Camino preferido: módulo de tienda o export programado desde contabilidad, archivo disponible en una URL HTTPS. Market entonces recoge las actualizaciones solo.",
        "Alternativa — subir el archivo a mano en el cabinet. Vale para tests, malo como único proceso en un catálogo vivo.",
      ],
      lists: [
        {
          intro: "Orden sin nombres viejos de botones:",
          items: [
            "arma surtido y categorías en la fuente de verdad",
            "genera YML y valida el XML",
            "abre la URL del feed desde el servidor",
            "conecta el price list en el cabinet de Market",
            "lee errores de moderación y arregla la fuente",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Errores y cuidado continuo",
      level: 2,
      paras: [
        "Tras subir, mira reportes: URLs inalcanzables, imágenes vacías, ids duplicados, moneda incorrecta. Los emails de moderación son señal de trabajo, no spam.",
        "Mantén una sola fuente para precios e inventario. El desajuste sitio/feed daña más la confianza que faltar a otro marketplace.",
      ],
      links: [
        {
          label: "Alternativas a Yandex Market",
          href: "/es/blog/analogi-yandeks-market/",
        },
      ],
    },
  ],
  closing: [
    "YML es el lenguaje de trabajo de un price list de productos en Market: auto-updates, atributos y menos trabajo manual que las hojas. Arma el feed desde el inventario, refresca a menudo y arregla errores en la fuente de datos.",
  ],
};

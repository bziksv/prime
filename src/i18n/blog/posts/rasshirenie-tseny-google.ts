import type { BlogPost } from "../../../data/blog";

/** ES overlay for rasshirenie-tseny-google — same structure as RU JSON. */
export const rasshirenieTsenyGoogleEs: BlogPost = {
  slug: "rasshirenie-tseny-google",
  title: "Extensiones de precio en Google Ads",
  date: "2017-05-27",
  category: "Paid search",
  cover: "/images/blog/rasshirenie-tseny-google/cover.webp",
  excerpt:
    "Por qué los anuncios de Google Ads muestran un bloque de precio: tipos (productos, servicios, eventos, marcas), cuándo activarlo y qué vigilar — un clic en un precio se factura, y la UI puede haber cambiado desde 2017.",
  lead: [
    "Las extensiones de precio muestran el coste de servicios o productos en el propio anuncio: el usuario ve una guía antes del clic, y el anuncio ocupa más espacio en los resultados.",
    "Abajo: por qué importa, a qué tipos de trabajo encaja y qué comprobar al configurarlo. Nombres y pasos en la cuenta han cambiado desde 2017 — verifica la Help actual de Google Ads. Un clic en una fila de precio suele contar como clic de anuncio.",
  ],
  faq: [
    {
      q: "¿Los precios en el anuncio son gratis?",
      a: "Mostrar la extensión en sí no es una tarifa aparte, pero un clic en un precio/enlace suele facturarse como un clic normal.",
    },
    {
      q: "¿Cuándo tiene sentido una extensión de precio?",
      a: "Cuando los precios son claros y competitivos: un catálogo, servicios con lista de precios clara, eventos con entradas. El «precio bajo consulta» oculto funciona mal en este formato.",
    },
    {
      q: "¿Es obligatoria la extensión de precio en cada campaña?",
      a: "No. Es una extensión junto a sitelinks y callouts. Prueba donde el precio decide el clic.",
    },
    {
      q: "¿Se puede escribir «desde …» en el precio?",
      a: "A menudo sí en categorías con rango de precio — pero no engañes: las reglas del anuncio y las políticas de Ads prohíben el engaño.",
    },
    {
      q: "¿En qué se diferencia de Shopping?",
      a: "Shopping tira de un feed. Las extensiones de precio son un añadido de texto a anuncios de Search (y relacionados). No sustituyen el feed.",
    },
    {
      q: "¿La UI sigue como en el artículo de 2017?",
      a: "Probablemente no. La lógica de «mostrar precio en el anuncio» sigue viva; botones y tipos en la cuenta — mira Help.",
    },
    {
      q: "¿Siguen haciendo falta otras extensiones?",
      a: "Sí: sitelinks, callouts, teléfono — juntas suben la visibilidad. No te apoyes solo en los precios.",
    },
  ],
  sections: [
    {
      title: "Para qué un bloque de precio",
      level: 2,
      paras: [
        "La extensión responde «¿cuánto cuesta?» antes de la visita. Filtra parte de los clics no objetivo y sube el CTR de quienes aceptan el precio.",
        "El anuncio se ve más grande que vecinos sin extensiones — pero ganan relevancia y oferta, no solo el «real estate».",
      ],
      links: [
        {
          label: "Tipos de campaña en Google Ads",
          href: "/es/blog/tipy-kampaniy-google-ads/",
        },
        {
          label: "Errores de setup en búsqueda de pago",
          href: "/es/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "Tipos de trabajo",
      level: 2,
      paras: [
        "Categorías de producto — líneas con un precio mínimo «desde»: útil para tiendas con surtido claro.",
        "Servicios y clases de servicio — un precio por trabajos típicos si puedes nombrar una suma con honestidad.",
        "Eventos — nombre, fecha y coste de entrada/participación.",
        "Lugares / viajes y marcas — destinos o fabricantes con guía de precio; elige el tipo para el negocio, no «todo a la vez».",
      ],
      lists: [
        {
          intro: "Antes de rellenarlo:",
          items: [
            "los precios están al día y son legales",
            "la landing encaja con la promesa",
            "tienes capacidad para actualizar la lista de precios",
            "no prometes lo que no hay en stock",
          ],
        },
      ],
    },
    {
      title: "Práctica de setup",
      level: 2,
      paras: [
        "Añade la extensión a nivel de cuenta/campaña según las reglas de la cuenta y vincúlala a grupos relevantes.",
        "Compara CTR y CPA before/after en un cluster. Si el precio asusta la demanda caliente — arregla primero la oferta y la landing, no solo la extensión.",
        "Mantén los precios sincronizados con el sitio: desajuste = quejas y clics tirados.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "El artículo de 2017 describía una extensión «nueva». Comprueba nombres de tipos y pasos de UI actuales en la Help de Google Ads; el punto es mostrar un precio honesto en el anuncio.",
        },
      ],
      links: [
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  closing: [
    "Si el precio es el filtro principal del nicho, activa la extensión en 1–2 campañas prioritarias y mira CTR/CPA un par de semanas — más rápido que discutir «si hace falta o no».",
  ],
  related: [
    "tipy-kampaniy-google-ads",
    "oshibki-nastroyki-konteksta",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "strategii-google-ads",
    "adaptivnyy-shablon-direkt",
  ],
} as BlogPost;

/** EN overlay for rasshirenie-tseny-google — same structure as RU JSON. */
export const rasshirenieTsenyGoogleEn: BlogPost = {
  slug: "rasshirenie-tseny-google",
  title: "Price extensions in Google Ads",
  date: "2017-05-27",
  category: "Paid search",
  cover: "/images/blog/rasshirenie-tseny-google/cover-en.webp",
  excerpt:
    "Why Google Ads ads show a price block: types (products, services, events, brands), when to enable it, and what to watch — a click on a price is billed, and the UI may have changed since 2017.",
  lead: [
    "Price extensions show the cost of services or products right in the ad: the user sees a guide before the click, and the ad takes more space in the results.",
    "Below: why it matters, which job types it fits, and what to check when setting up. Names and steps in the account have changed since 2017 — verify current Google Ads Help. A click on a price row usually counts as an ad click.",
  ],
  faq: [
    {
      q: "Are prices in the ad free?",
      a: "Showing the extension itself isn’t a separate fee, but a click on a price/link usually bills like a normal click.",
    },
    {
      q: "When does a price extension make sense?",
      a: "When prices are clear and competitive: a catalog, services with a clear price list, events with tickets. Hidden “price on request” works poorly in this format.",
    },
    {
      q: "Is a price extension required for every campaign?",
      a: "No. It’s one extension next to sitelinks and callouts. Test where price is a deciding click factor.",
    },
    {
      q: "Can I write “from …” in the price?",
      a: "Often yes for categories with a price range — but don’t mislead: ad rules and Ads policies forbid deception.",
    },
    {
      q: "How is this different from Shopping?",
      a: "Shopping pulls a feed. Price extensions are a text add-on to Search (and related) ads. Not a feed replacement.",
    },
    {
      q: "Is the UI still like the 2017 article?",
      a: "Probably not. The logic of “show price in the ad” is alive; buttons and types in the account — check Help.",
    },
    {
      q: "Do I still need other ad extensions?",
      a: "Yes: sitelinks, callouts, phone — together they raise visibility. Don’t rely on prices alone.",
    },
  ],
  sections: [
    {
      title: "Why a price block",
      level: 2,
      paras: [
        "The extension answers “how much does it cost?” before the visit. It filters some non-target clicks and lifts CTR for those who accept the price.",
        "The ad looks larger than neighbors without extensions — but relevance and offer win, not only “real estate.”",
      ],
      links: [
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "Job types",
      level: 2,
      paras: [
        "Product categories — lines with a minimum “from” price: handy for stores with a clear assortment.",
        "Services and service classes — a price for typical jobs if you can name a sum honestly.",
        "Events — name, date, and ticket/participation cost.",
        "Places / travel and brands — destinations or makers with a price guide; pick the type for the business, not “everything at once.”",
      ],
      lists: [
        {
          intro: "Before filling it in:",
          items: [
            "prices are current and lawful",
            "the landing matches the promise",
            "you have capacity to update the price list",
            "you don’t promise what’s out of stock",
          ],
        },
      ],
    },
    {
      title: "Setup practice",
      level: 2,
      paras: [
        "Add the extension at account/campaign level per account rules and tie it to relevant groups.",
        "Compare CTR and CPA before/after on one cluster. If price scares hot demand — fix the offer and landing first, not only the extension.",
        "Keep prices in sync with the site: mismatch = complaints and wasted clicks.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "The 2017 article described a “new” extension. Check current type names and UI steps in Google Ads Help; the point is to show an honest price in the ad.",
        },
      ],
      links: [
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  closing: [
    "If price is the main filter in the niche, enable the extension on 1–2 priority campaigns and check CTR/CPA for a couple of weeks — faster than arguing “whether it’s needed at all.”",
  ],
  related: [
    "tipy-kampaniy-google-ads",
    "oshibki-nastroyki-konteksta",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "strategii-google-ads",
    "adaptivnyy-shablon-direkt",
  ],
} as BlogPost;

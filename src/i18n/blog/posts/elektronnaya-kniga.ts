import type { BlogPost } from "../../../data/blog";

/** EN overlay for elektronnaya-kniga — same structure as RU JSON. */
export const elektronnayaKnigaEn: BlogPost = {
  slug: "elektronnaya-kniga",
  title: "An ebook for your audience: how to make one fast without a designer",
  date: "2019-03-07",
  category: "Digital marketing",
  cover: "/images/blog/elektronnaya-kniga/cover-en.webp",
  excerpt:
    "An ebook as a lead magnet and proof of expertise: PDF vs ePub, building in Word or a builder, how to distribute — without promising “zero cost and a masterpiece in an hour.”",
  lead: [
    "An ebook packs experience into one file: teach the audience, gently remind them of the brand, and collect contacts in exchange for useful material. The budget path is to build it yourself; the paid path is to hand it to a designer and layout specialist.",
    "Below: why an ebook, how PDF differs from ePub, two build paths (fast from a text editor and cleaner in a builder), and how to share it. Service rates and storefront rules change — check current terms; for a lead magnet, follow personal-data rules.",
  ],
  faq: [
    {
      q: "Should I use PDF or ePub?",
      a: "PDF is easier to make and more stable for tables and diagrams; on a phone, page scale can be awkward. ePub reflows better on readers, but formulas and complex layouts suffer.",
    },
    {
      q: "How much time do you need?",
      a: "Layout of ready copy — from a couple of hours in an editor to notably longer in a builder. Writing the content is separate and usually takes longer.",
    },
    {
      q: "Can I do it without a designer at all?",
      a: "Yes for a working PDF guide. For storefront sales and a polished cover, a builder or specialist still helps.",
    },
    {
      q: "Must I give the book for an email?",
      a: "Not required, but as a lead magnet it’s a common pattern. You need consent to process data and clear value in the file.",
    },
    {
      q: "What if someone steals the text?",
      a: "The risk is real. If the goal is reach and a niche standard, partial copying can still aid awareness; keep critical parts behind closed formats or shorten the public version.",
    },
    {
      q: "Is gluing old articles enough?",
      a: "You need one theme and a story, or you get a post dump. Select carefully, rewrite transitions, and update what’s stale.",
    },
  ],
  sections: [
    {
      title: "Why an ebook and which format",
      level: 2,
      paras: [
        "A book covers volume that doesn’t fit one article: a guide, checklist, or method deep-dive. For the brand it’s closer to useful content than a banner: the reader gets value, the company gets a touch and a reason to subscribe.",
        "Digital format upsides: relatively low “print run” cost, easy updates, simple link distribution, and — if needed — a base for a printed giveaway.",
        "PDF is the familiar choice for manuals with tables. ePub is more flexible on mobile but holds complex geometry worse. For a first book, PDF is usually enough.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "one theme and a promise to the reader",
            "a table of contents of 5–12 chapters",
            "current facts (not a 2017 paste)",
            "goal: downloads, leads, or expert status",
          ],
        },
      ],
    },
    {
      title: "Two ways to make the book",
      level: 2,
      paras: [
        "Fast: text editor (title page, headers/footers, illustrations) → export to PDF. Fits an “from experience” manual. Downsides — modest design and sometimes store or reader pickiness about a simple Word PDF.",
        "Cleaner: an online builder with cover and page templates (Canva-style and similar tools). Longer per page, but it looks cohesive. Free limits and paid packs are enough to start; prices and plan names change.",
        "Images — your own screens, diagrams, or materials with a clear license. Don’t use someone else’s media library assets without rights; for the brand, own illustrations and AI/graphics under project rules work better.",
      ],
      notes: [
        {
          title: "Content beats “pretty”",
          kind: "tip",
          text: "A weak book in a beautiful cover won’t collect leads. Value and structure first, then design.",
        },
      ],
      links: [
        {
          label: "Corporate blog",
          href: "/en/blog/korporativnyy-blog/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "How to distribute",
      level: 2,
      paras: [
        "Announce on the blog, email your subscribers, post in communities and niche channels, pitch partner blogs. As a lead magnet — a page with a form: the book for a contact with clear consent.",
        "Don’t promise “it goes viral by itself.” Distribution is separate work: where the audience lives, what hook is in the announce, what someone gets in 15 minutes of reading.",
      ],
      lists: [
        {
          intro: "Mini launch plan:",
          items: [
            "landing with contents and a form",
            "email/post with one main benefit",
            "UTM and an analytics goal on download",
            "a follow-up email series plan after download",
          ],
        },
      ],
    },
  ],
  closing: [
    "An ebook without a designer is doable: build strong copy, pick PDF, design in an editor or builder, and share it where your audience already is. Pretty amplifies — it doesn’t replace value.",
  ],
  related: [
    "korporativnyy-blog",
    "formy-zahvata",
    "omnikanalnyy-kontent-marketing",
    "analitika-kontent-marketinga",
    "avtovoronka",
    "kopirayting",
  ],
};

/** ES overlay for elektronnaya-kniga — same structure as RU JSON / EN. */
export const elektronnayaKnigaEs: BlogPost = {
  slug: "elektronnaya-kniga",
  title: "Un ebook para tu audiencia: cómo hacerlo rápido sin diseñador",
  date: "2019-03-07",
  category: "Digital marketing",
  cover: "/images/blog/elektronnaya-kniga/cover.webp",
  excerpt:
    "Un ebook como lead magnet y prueba de expertise: PDF vs ePub, armarlo en Word o un builder, cómo distribuirlo — sin prometer «coste cero y una obra maestra en una hora».",
  lead: [
    "Un ebook empaqueta experiencia en un archivo: enseña a la audiencia, recuerda con suavidad la marca y recoge contactos a cambio de material útil. El camino de presupuesto es armarlo tú; el de pago es entregarlo a un diseñador y un especialista de layout.",
    "Abajo: por qué un ebook, en qué se diferencia PDF de ePub, dos caminos de construcción (rápido desde un editor de texto y más limpio en un builder) y cómo compartirlo. Tarifas de servicios y reglas de storefronts cambian — comprueba términos actuales; para un lead magnet, sigue las reglas de datos personales.",
  ],
  faq: [
    {
      q: "¿Debo usar PDF o ePub?",
      a: "PDF es más fácil de hacer y más estable para tablas y diagramas; en el teléfono, la escala de página puede ser incómoda. ePub reflujo mejor en readers, pero fórmulas y layouts complejos sufren.",
    },
    {
      q: "¿Cuánto tiempo hace falta?",
      a: "El layout de copy listo — desde un par de horas en un editor hasta notablemente más en un builder. Escribir el contenido es aparte y suele llevar más.",
    },
    {
      q: "¿Se puede sin diseñador del todo?",
      a: "Sí para una guía PDF que funciona. Para ventas en storefront y una portada pulida, un builder o especialista aún ayuda.",
    },
    {
      q: "¿Debo dar el libro a cambio de un email?",
      a: "No es obligatorio, pero como lead magnet es un patrón habitual. Hace falta consentimiento para tratar datos y valor claro en el archivo.",
    },
    {
      q: "¿Y si alguien roba el texto?",
      a: "El riesgo es real. Si la meta es reach y un estándar del nicho, la copia parcial aún puede ayudar al awareness; guarda partes críticas en formatos cerrados o acorta la versión pública.",
    },
    {
      q: "¿Basta pegar artículos viejos?",
      a: "Hace falta un tema y una historia, o te queda un vertedero de posts. Selecciona con cuidado, reescribe transiciones y actualiza lo obsoleto.",
    },
  ],
  sections: [
    {
      title: "Por qué un ebook y qué formato",
      level: 2,
      paras: [
        "Un libro cubre volumen que no cabe en un artículo: una guía, checklist o deep-dive de método. Para la marca está más cerca de contenido útil que de un banner: el lector obtiene valor, la empresa un touch y un motivo para suscribirse.",
        "Pluses del formato digital: coste de «tirada» relativamente bajo, updates fáciles, distribución por link simple y — si hace falta — una base para un giveaway impreso.",
        "PDF es la elección familiar para manuals con tablas. ePub es más flexible en móvil pero aguanta peor la geometría compleja. Para un primer libro, PDF suele bastar.",
      ],
      lists: [
        {
          intro: "Antes de empezar:",
          items: [
            "un tema y una promesa al lector",
            "una tabla de contenidos de 5–12 capítulos",
            "hechos actuales (no un paste de 2017)",
            "meta: descargas, leads o estatus experto",
          ],
        },
      ],
    },
    {
      title: "Dos formas de hacer el libro",
      level: 2,
      paras: [
        "Rápido: editor de texto (portada, headers/footers, ilustraciones) → export a PDF. Encaja un manual «desde la experiencia». Minus — diseño modesto y a veces pickiness de store o reader ante un PDF simple de Word.",
        "Más limpio: un builder online con plantillas de portada y página (estilo Canva y tools similares). Más largo por página, pero se ve cohesivo. Límites free y packs de pago bastan para empezar; precios y nombres de plan cambian.",
        "Imágenes — tus propios screens, diagramas o materiales con licencia clara. No uses assets de media library ajenos sin derechos; para la marca, ilustraciones propias e IA/gráficos bajo las reglas del proyecto funcionan mejor.",
      ],
      notes: [
        {
          title: "El contenido gana a lo «bonito»",
          kind: "tip",
          text: "Un libro débil en una portada bonita no recoge leads. Primero valor y estructura, luego diseño.",
        },
      ],
      links: [
        {
          label: "Blog corporativo",
          href: "/es/blog/korporativnyy-blog/",
        },
        {
          label: "Formularios de captura",
          href: "/es/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Cómo distribuir",
      level: 2,
      paras: [
        "Anuncia en el blog, escribe a tus suscriptores, publica en comunidades y canales del nicho, pitch a blogs partner. Como lead magnet — una página con formulario: el libro a cambio de un contacto con consentimiento claro.",
        "No prometas «se vuelve viral solo». La distribución es trabajo aparte: dónde vive la audiencia, qué hook hay en el anuncio, qué obtiene alguien en 15 minutos de lectura.",
      ],
      lists: [
        {
          intro: "Mini plan de lanzamiento:",
          items: [
            "landing con contenidos y un formulario",
            "email/post con un beneficio principal",
            "UTM y un objetivo de analytics en la descarga",
            "un plan de serie de follow-up tras la descarga",
          ],
        },
      ],
    },
  ],
  closing: [
    "Un ebook sin diseñador es factible: arma copy fuerte, elige PDF, diseña en un editor o builder y compártelo donde ya está tu audiencia. Lo bonito amplifica — no sustituye el valor.",
  ],
  related: [
    "korporativnyy-blog",
    "formy-zahvata",
    "omnikanalnyy-kontent-marketing",
    "analitika-kontent-marketinga",
    "avtovoronka",
    "kopirayting",
  ],
};

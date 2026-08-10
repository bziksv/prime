import type { BlogPost } from "../../../data/blog";

/** EN overlay for glavnaya-stranitsa — same structure as RU JSON. */
export const glavnayaStranitsaEn: BlogPost = {
  slug: "glavnaya-stranitsa",
  title: "Website homepage: attract attention without confusing people",
  date: "2020-12-01",
  category: "Websites",
  cover: "/images/blog/glavnaya-stranitsa/cover-en.webp",
  excerpt:
    "What a homepage needs: who you are, what you offer, how you differ; header, blocks, CTA, and footer — without a wall of text or outdated pretty design for design’s sake.",
  lead: [
    "The homepage is the entry point: in seconds people should know where they landed, what value they get, and what to click next. Beauty without clarity annoys as much as an outdated look.",
    "Below: a frame for a corporate/services site. A separate storefront breakdown is in the e‑commerce homepage piece; which phrases not to put on the homepage — in the homepage-copy article.",
  ],
  faq: [
    {
      q: "Is the homepage the whole site?",
      a: "No. It introduces and directs. Services, cases, pricing, blog — on their own URLs, or you get a wall of text.",
    },
    {
      q: "How much copy does the homepage need?",
      a: "Keep it short: offer, 3–5 benefits, trust, CTA. Details belong on inner pages.",
    },
    {
      q: "Is a slider required?",
      a: "No. It often hurts. One strong first screen with an offer and a button beats a carousel of ten banners.",
    },
    {
      q: "Where do phone and CTA go?",
      a: "In the header and/or first screen — visible on mobile. A footer duplicate is fine.",
    },
    {
      q: "Does SEO matter on the homepage?",
      a: "Brand, navigation, internal links. Don’t dump the whole commercial keyword core here — landings matter more for many queries.",
    },
    {
      q: "How often should it update?",
      a: "When the offer, season, or promos change. A “live” homepage beats a forever 2015 stub.",
    },
    {
      q: "How is it different from a store homepage?",
      a: "A shop leans harder on showcase, search, categories, and cart. Services/B2B — offer, proof, path to a lead.",
    },
    {
      q: "Does “company history” belong on the first screen?",
      a: "Usually no. A short meaning — yes; the founder’s biography — in About.",
    },
  ],
  sections: [
    {
      title: "What people must grasp immediately",
      level: 2,
      paras: [
        "Who you are and for whom. What you sell or which problem you solve. How you differ from lookalikes. What to do next (call, form, catalog).",
        "Wherever traffic came from, some people click the logo and land on the homepage — it should assemble the site’s meaning.",
      ],
      lists: [
        {
          intro: "Minimum on the first screen:",
          items: [
            "the offer in plain words",
            "a visible CTA",
            "navigation to key sections",
            "a contact or messenger",
          ],
        },
      ],
    },
    {
      title: "Block frame",
      level: 2,
      paras: [
        "Header: logo (to home), menu, phone/contact. Don’t invent exotic unlabeled navigation.",
        "Content blocks: services/directions, proof (figures, cases, reviews — no fakes), benefits.",
        "CTA: one primary goal per screen; secondary links stay quieter.",
        "Footer: site map, legal block, contacts, sometimes a form — see a separate piece.",
      ],
      links: [
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
        {
          label: "Online store homepage",
          href: "/en/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "What to keep in mind while designing",
      level: 2,
      paras: [
        "Walls of “about everything” kill scanning. Cut.",
        "Offers and promos should be visible — without blinking chaos.",
        "Images — yours or licensed; decorative filler art isn’t required.",
        "Benefits in moderation: three strong ones beat ten clichés.",
        "Update season and offer; a dead homepage erodes trust.",
      ],
      notes: [
        {
          title: "Design ≠ usability",
          kind: "tip",
          text: "A modern look helps, but without clear buttons and hierarchy people leave. See usability.",
        },
      ],
      links: [
        {
          label: "Usability",
          href: "/en/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "SEO on the homepage without overload",
      level: 2,
      paras: [
        "Unique title and description for the brand/main intent.",
        "One H1 with the company’s meaning — not a keyword dump.",
        "Internal links to money sections.",
        "Don’t turn the homepage into a dump of the whole keyword core.",
      ],
      links: [
        {
          label: "Meta tags",
          href: "/en/blog/metategi/",
        },
        {
          label: "H1",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "The homepage explains and leads on — it doesn’t tell the whole biography.",
        "Header, offer, proof, CTA, footer — a sufficient frame.",
        "For a store, see the separate showcase guide.",
      ],
    },
  ],
  closing: [
    "Open the homepage on a phone for five seconds: if the offer and button don’t read — fix that first, not a new slider.",
  ],
  related: [
    "glavnaya-internet-magazina",
    "tekst-glavnoy-stranitsy",
    "futer-sayta",
    "yuzabiliti",
    "metategi",
    "formy-zahvata",
  ],
};

/** ES overlay for glavnaya-stranitsa — same structure as RU JSON / EN. */
export const glavnayaStranitsaEs: BlogPost = {
  slug: "glavnaya-stranitsa",
  title: "Homepage del sitio: captar atención sin confundir",
  date: "2020-12-01",
  category: "Sitios web",
  cover: "/images/blog/glavnaya-stranitsa/cover-es.webp",
  excerpt:
    "Qué necesita una homepage: quién eres, qué ofreces, en qué te diferencias; header, bloques, CTA y footer — sin un muro de texto ni diseño bonito obsoleto por el diseño mismo.",
  lead: [
    "La homepage es el punto de entrada: en segundos la gente debería saber dónde aterrizó, qué valor obtiene y qué clic dar después. La belleza sin claridad molesta tanto como un look anticuado.",
    "Abajo: un marco para un sitio corporativo/de servicios. Un desglose aparte de escaparate está en la pieza de homepage de e‑commerce; qué frases no poner en la homepage — en el artículo de copy de homepage.",
  ],
  faq: [
    {
      q: "¿La homepage es todo el sitio?",
      a: "No. Presenta y dirige. Servicios, casos, precios, blog — en sus propias URLs, o te queda un muro de texto.",
    },
    {
      q: "¿Cuánto copy necesita la homepage?",
      a: "Córtalo: oferta, 3–5 beneficios, confianza, CTA. El detalle va en páginas internas.",
    },
    {
      q: "¿Hace falta un slider?",
      a: "No. A menudo hace daño. Una primera pantalla fuerte con oferta y botón gana a un carrusel de diez banners.",
    },
    {
      q: "¿Dónde van el teléfono y el CTA?",
      a: "En el header y/o la primera pantalla — visibles en móvil. Un duplicado en el footer está bien.",
    },
    {
      q: "¿Importa el SEO en la homepage?",
      a: "Marca, navegación, enlaces internos. No vuelques aquí todo el núcleo comercial de keywords — para muchas queries importan más los landings.",
    },
    {
      q: "¿Cada cuánto actualizarla?",
      a: "Cuando cambian la oferta, la temporada o las promos. Una homepage «viva» gana a un stub eterno de 2015.",
    },
    {
      q: "¿En qué se diferencia de la homepage de una tienda?",
      a: "Una tienda se apoya más en escaparate, búsqueda, categorías y carrito. Servicios/B2B — oferta, prueba, camino al lead.",
    },
    {
      q: "¿La «historia de la empresa» pertenece a la primera pantalla?",
      a: "Suele no. Un sentido corto — sí; la biografía del fundador — en About.",
    },
  ],
  sections: [
    {
      title: "Qué debe pillar la gente al instante",
      level: 2,
      paras: [
        "Quién eres y para quién. Qué vendes o qué problema resuelves. En qué te diferencias de los parecidos. Qué hacer después (llamada, formulario, catálogo).",
        "Venga de donde venga el tráfico, algunos hacen clic en el logo y aterrizan en la homepage — debe armar el sentido del sitio.",
      ],
      lists: [
        {
          intro: "Mínimo en la primera pantalla:",
          items: [
            "la oferta en palabras claras",
            "un CTA visible",
            "navegación a secciones clave",
            "un contacto o messenger",
          ],
        },
      ],
    },
    {
      title: "Marco de bloques",
      level: 2,
      paras: [
        "Header: logo (a home), menú, teléfono/contacto. No inventes navegación exótica sin etiquetas.",
        "Bloques de contenido: servicios/direcciones, prueba (cifras, casos, reseñas — sin fakes), beneficios.",
        "CTA: un objetivo primario por pantalla; los enlaces secundarios se quedan más quietos.",
        "Footer: mapa del sitio, bloque legal, contactos, a veces un formulario — ver una pieza aparte.",
      ],
      links: [
        {
          label: "Footer del sitio",
          href: "/blog/futer-sayta/",
        },
        {
          label: "Homepage de tienda online",
          href: "/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "Qué tener en cuenta al diseñar",
      level: 2,
      paras: [
        "Los muros de «sobre todo» matan el escaneo. Corta.",
        "Ofertas y promos deben verse — sin caos parpadeante.",
        "Imágenes — propias o con licencia; el filler decorativo no es obligatorio.",
        "Beneficios con moderación: tres fuertes ganan a diez clichés.",
        "Actualiza temporada y oferta; una homepage muerta erosiona la confianza.",
      ],
      notes: [
        {
          title: "Diseño ≠ usabilidad",
          kind: "tip",
          text: "Un look moderno ayuda, pero sin botones claros y jerarquía la gente se va. Ver usabilidad.",
        },
      ],
      links: [
        {
          label: "Usabilidad",
          href: "/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "SEO en la homepage sin sobrecarga",
      level: 2,
      paras: [
        "Title y description únicos para la marca/intención principal.",
        "Un H1 con el sentido de la empresa — no un dump de keywords.",
        "Enlaces internos a secciones de dinero.",
        "No conviertas la homepage en un vertedero de todo el núcleo de keywords.",
      ],
      links: [
        {
          label: "Meta tags",
          href: "/es/blog/metategi/",
        },
        {
          label: "H1",
          href: "/es/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "La homepage explica y conduce — no cuenta toda la biografía.",
        "Header, oferta, prueba, CTA, footer — un marco suficiente.",
        "Para una tienda, ver la guía de escaparate aparte.",
      ],
    },
  ],
  closing: [
    "Abre la homepage en el teléfono cinco segundos: si la oferta y el botón no se leen — arregla eso primero, no un slider nuevo.",
  ],
  related: [
    "metategi",
    "formy-zahvata",
    "teg-h1",
    "lending",
    "forma-obratnoy-svyazi",
    "glavnaya-internet-magazina",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for glavnaya-internet-magazina — same structure as RU JSON. */
export const glavnayaInternetMagazinaEn: BlogPost = {
  slug: "glavnaya-internet-magazina",
  title: "How to design an online store homepage",
  date: "2019-10-23",
  category: "E-commerce",
  cover: "/images/blog/glavnaya-internet-magazina/cover-en.webp",
  excerpt:
    "Online store homepage structure: header, menu, showcase and slider, short copy, trust, footer — without feature overload and without the company story on the whole first screen.",
  lead: [
    "An online store homepage isn’t a showcase for beauty’s sake — it’s an entrance: help find a product, remove doubts, and get people to the catalog or cart. Banner overload and “everything at once” confuse more often than they sell.",
    "Below: the working blocks — header, menu, visual showcase, copy, trust, and footer. Category and product-card SEO live in separate pieces; here the focus is first-page composition.",
  ],
  faq: [
    {
      q: "Should the homepage sell by itself?",
      a: "It should lead to a purchase: show assortment, promos, and a path into the catalog. A long “brand story” belongs on About — not the whole first screen.",
    },
    {
      q: "How many products should be on the showcase?",
      a: "A cue is up to ~10 items/cards in the first block: hits, promos, new arrivals, unique SKUs. Then categories and the catalog.",
    },
    {
      q: "Do I need an auto-slider?",
      a: "Yes if slides are readable: ~3–5 sec per frame, pause on hover, no flashing. Fewer slides beat a carousel of ten banners.",
    },
    {
      q: "What’s required in the header?",
      a: "Logo, search, cart, phone/messenger, key sections. Hours and delivery timing — if that’s a critical niche question.",
    },
    {
      q: "Should I duplicate contacts in the footer?",
      a: "Yes, but don’t copy the header one-to-one: footer is navigation, legal, delivery/payment, a form or CTA for people still thinking.",
    },
    {
      q: "Is the homepage more important than categories for SEO?",
      a: "For commerce, categories and product cards usually matter more. The homepage holds brand, navigation, and internal links — don’t stuff the whole keyword core there alone.",
    },
  ],
  sections: [
    {
      title: "Homepage role and block frame",
      level: 2,
      paras: [
        "A visitor should quickly see: what you sell, how to find it, and why they can trust you. Intuitive structure beats decorative “wow”.",
        "Typical frame: header → menu/catalog → visual showcase (promos/hits) → short benefit copy → trust (certificates, reviews) → extra block (news/picks) → footer.",
      ],
      lists: [
        {
          intro: "Structural elements:",
          items: [
            "header with logo and contacts",
            "catalog menu and service sections",
            "showcase/slider",
            "short text block",
            "trust block",
            "footer with navigation and CTA",
          ],
        },
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "Online store sales",
          href: "/en/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Header and menu",
      level: 2,
      paras: [
        "Header space is limited: don’t dump the whole price list and history here. Logo, a short positioning line (or slogan), search, cart, phone/messenger, and quick contact are enough. For some niches — hours and a delivery cue.",
        "The menu is navigation, not an ad showcase. Include a catalog by clear categories, payment, delivery, contacts, and About. The simpler the path to a category, the fewer homepage bounces.",
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Visuals: slider and showcase",
      level: 2,
      paras: [
        "Banners and cards sell faster than a wall of text — if they don’t become a kaleidoscope. A slider under the header shows promos and key categories; rotation speed should be moderate (cue up to ~5 seconds per slide) so the offer can be read.",
        "Put best-sellers, strong deals, new arrivals, and what competitors don’t have on the showcase. Don’t inflate the first block with dozens of SKUs: a strong pick plus a clear path to the catalog is better.",
      ],
      lists: [
        {
          intro: "What to put on the showcase:",
          items: [
            "hit categories",
            "promo items",
            "new arrivals",
            "unique store offers",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Each slide — one idea and one button. “Promo + 5 categories + subscribe” on one frame doesn’t read on a phone.",
        },
      ],
    },
    {
      title: "Copy, trust, and empty space below",
      level: 2,
      paras: [
        "Homepage copy is short: the benefit of working with you, what’s useful — no founder biography. Structure: headings, paragraphs, lists; selling lines without fluff; SEO in moderation, not a keyword sheet.",
        "An “about the business” block: certificates, licenses, awards, reviews — removes objections. If there’s air under the showcase, fill it with news, a pick, or a case — not a random banner “to fill space”.",
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Footer as a second chance",
      level: 2,
      paras: [
        "The footer doesn’t copy the header. It’s a logical close: contacts, payment/delivery, a form or CTA, socials (if you run them), policy, and logo. For multi-brand — a neat brand list, not a logo dump.",
        "The job of the page bottom is to hold people who scrolled without ordering: give a next step, not “end of feed”.",
      ],
      links: [
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
  ],
  closing: [
    "An online store homepage works when it leads into the catalog and removes doubts without visual noise. Assemble header, menu, a strong showcase, short copy, trust, and a useful footer — and measure clicks into categories and add-to-carts, not only “beauty”.",
  ],
  related: [
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "prodazhi-internet-magazin",
    "prodvizhenie-internet-magazina",
    "futer-sayta",
    "otzyvy-dlya-prodazh",
  ],
};

/** ES overlay for glavnaya-internet-magazina — same structure as RU JSON / EN. */
export const glavnayaInternetMagazinaEs: BlogPost = {
  slug: "glavnaya-internet-magazina",
  title: "Cómo diseñar la homepage de una tienda online",
  date: "2019-10-23",
  category: "E-commerce",
  cover: "/images/blog/glavnaya-internet-magazina/cover.webp",
  excerpt:
    "Estructura de la homepage de una tienda online: header, menú, escaparate y slider, copy corto, trust, footer — sin sobrecarga de features y sin la historia de la empresa en toda la primera pantalla.",
  lead: [
    "La homepage de una tienda online no es un escaparate por belleza — es una entrada: ayudar a encontrar un producto, quitar dudas y llevar a la gente al catálogo o al carrito. La sobrecarga de banners y «todo a la vez» confunde más a menudo de lo que vende.",
    "Abajo: los bloques que funcionan — header, menú, escaparate visual, copy, trust y footer. El SEO de categorías y fichas vive en piezas aparte; aquí el foco es la composición de la primera página.",
  ],
  faq: [
    {
      q: "¿La homepage debe vender sola?",
      a: "Debe llevar a una compra: mostrar surtido, promos y un camino al catálogo. Una «historia de marca» larga pertenece a Sobre nosotros — no a toda la primera pantalla.",
    },
    {
      q: "¿Cuántos productos deben estar en el escaparate?",
      a: "Una pista es hasta ~10 ítems/fichas en el primer bloque: hits, promos, novedades, SKUs únicos. Luego categorías y el catálogo.",
    },
    {
      q: "¿Hace falta un auto-slider?",
      a: "Sí si las slides se leen: ~3–5 s por frame, pausa al hover, sin parpadeo. Menos slides ganan a un carrusel de diez banners.",
    },
    {
      q: "¿Qué es obligatorio en el header?",
      a: "Logo, búsqueda, carrito, teléfono/mensajero, secciones clave. Horario y timing de delivery — si esa es una pregunta crítica del nicho.",
    },
    {
      q: "¿Debo duplicar contactos en el footer?",
      a: "Sí, pero no copies el header uno a uno: el footer es navegación, legal, delivery/pago, un formulario o CTA para quien aún piensa.",
    },
    {
      q: "¿La homepage importa más que las categorías para SEO?",
      a: "Para comercio, suelen importar más categorías y fichas. La homepage sostiene marca, navegación y enlaces internos — no metas ahí solo todo el núcleo de keywords.",
    },
  ],
  sections: [
    {
      title: "Rol de la homepage y frame de bloques",
      level: 2,
      paras: [
        "Un visitante debería ver rápido: qué vendes, cómo encontrarlo y por qué puede confiar. La estructura intuitiva gana al «wow» decorativo.",
        "Frame típico: header → menú/catálogo → escaparate visual (promos/hits) → copy corto de beneficio → trust (certificados, reseñas) → bloque extra (noticias/picks) → footer.",
      ],
      lists: [
        {
          intro: "Elementos estructurales:",
          items: [
            "header con logo y contactos",
            "menú de catálogo y secciones de servicio",
            "escaparate/slider",
            "bloque de texto corto",
            "bloque de trust",
            "footer con navegación y CTA",
          ],
        },
      ],
      links: [
        {
          label: "Arrancar una tienda online",
          href: "/es/blog/start-internet-magazina/",
        },
        {
          label: "Ventas de tienda online",
          href: "/es/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Header y menú",
      level: 2,
      paras: [
        "El espacio del header es limitado: no vuelques aquí toda la lista de precios y la historia. Bastan logo, una línea corta de posicionamiento (o slogan), búsqueda, carrito, teléfono/mensajero y contacto rápido. Para algunos nichos — horario y una pista de delivery.",
        "El menú es navegación, no un escaparate de ads. Incluye un catálogo por categorías claras, pago, delivery, contactos y Sobre nosotros. Cuanto más simple el camino a una categoría, menos bounces de homepage.",
      ],
      links: [
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Visuales: slider y escaparate",
      level: 2,
      paras: [
        "Banners y fichas venden más rápido que un muro de texto — si no se vuelven un caleidoscopio. Un slider bajo el header muestra promos y categorías clave; la velocidad de rotación debe ser moderada (pista hasta ~5 segundos por slide) para que se lea la oferta.",
        "Pon bestsellers, deals fuertes, novedades y lo que los competidores no tienen en el escaparate. No infles el primer bloque con docenas de SKUs: un pick fuerte más un camino claro al catálogo es mejor.",
      ],
      lists: [
        {
          intro: "Qué poner en el escaparate:",
          items: [
            "categorías hit",
            "ítems en promo",
            "novedades",
            "ofertas únicas de la tienda",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Cada slide — una idea y un botón. «Promo + 5 categorías + suscripción» en un frame no se lee en un teléfono.",
        },
      ],
    },
    {
      title: "Copy, trust y espacio vacío abajo",
      level: 2,
      paras: [
        "El copy de homepage es corto: el beneficio de trabajar contigo, qué es útil — sin biografía del fundador. Estructura: headings, párrafos, listas; líneas de venta sin fluff; SEO con moderación, no una hoja de keywords.",
        "Un bloque «sobre el negocio»: certificados, licencias, premios, reseñas — quita objeciones. Si hay aire bajo el escaparate, llénalo con noticias, un pick o un case — no un banner al azar «para llenar espacio».",
      ],
      links: [
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "El footer como segunda chance",
      level: 2,
      paras: [
        "El footer no copia el header. Es un cierre lógico: contactos, pago/delivery, un formulario o CTA, redes (si las llevas), política y logo. Para multi-marca — una lista de marcas limpia, no un vertedero de logos.",
        "El trabajo del fondo de página es retener a quien scrolleó sin pedir: dar un siguiente paso, no «fin del feed».",
      ],
      links: [
        {
          label: "Footer del sitio",
          href: "/es/blog/futer-sayta/",
        },
      ],
    },
  ],
  closing: [
    "La homepage de una tienda online funciona cuando lleva al catálogo y quita dudas sin ruido visual. Arma header, menú, un escaparate fuerte, copy corto, trust y un footer útil — y mide clics a categorías y add-to-carts, no solo «belleza».",
  ],
  related: [
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "prodazhi-internet-magazin",
    "prodvizhenie-internet-magazina",
    "futer-sayta",
    "otzyvy-dlya-prodazh",
  ],
};

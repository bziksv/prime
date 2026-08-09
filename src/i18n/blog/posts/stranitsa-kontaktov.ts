import type { BlogPost } from "../../../data/blog";

/** EN overlay for stranitsa-kontaktov — same structure as RU JSON. */
export const stranitsaKontaktovEn: BlogPost = {
  slug: "stranitsa-kontaktov",
  title: "How to design a website contact page",
  date: "2019-11-07",
  category: "Content marketing",
  cover: "/images/blog/stranitsa-kontaktov/cover-en.webp",
  excerpt:
    "A dedicated Contacts page: what to list, how not to overload the header, clickable phones, map and form — without turning the block into a dump of legal details.",
  lead: [
    "The contact page is a trust and quick-reach point: address, phones, email, map, hours, and a way to write. Mistakes and empty fields push people away harder here than on About.",
    "Below: why a dedicated page, what minimum data to show, usefulness for the visitor, mobile comfort, and one visual system. Lead forms are covered separately; About-page copy has its own article.",
  ],
  faq: [
    {
      q: "Are phones in the header enough?",
      a: "In the header — 1–2 main numbers and a link to Contacts. Full addresses, branches, and legal details belong on a dedicated page.",
    },
    {
      q: "Do I need legal / company details?",
      a: "For e-commerce and B2B — yes: legal name, address, registration/tax IDs as required. Accuracy beats pretty layout.",
    },
    {
      q: "Is a map required?",
      a: "If there’s pickup or an office visit — yes; interactive beats a static sketch. For a pure online service with no address — not required.",
    },
    {
      q: "Should I SEO-optimize the page?",
      a: "Not to “stuff keywords.” A normal Contacts title/H1 plus brand/city and accurate NAP is enough. Traffic more often comes via brand and the menu.",
    },
    {
      q: "Should the phone be an image or text?",
      a: "As text and clickable (`tel:` / `mailto:`). An image hurts copying and accessibility.",
    },
    {
      q: "Where should messengers go?",
      a: "To live support channels with a clear response expectation. Don’t duplicate a dozen dead icons.",
    },
    {
      q: "How is this different from a contact form?",
      a: "Contacts — all reach points and NAP. The form is one channel on this page or on service pages.",
    },
  ],
  sections: [
    {
      title: "A dedicated page — not a wall in the header",
      level: 2,
      paras: [
        "The header already carries logo, menu, cart, login. Stuffing every branch, legal line, and hours there scatters attention and bloats the bar.",
        "A separate Contacts page lightens the header: in the bar — one or two phones and a short hours hint; in the menu and footer — a link to the full page.",
        "In one place the client finds service phones, addresses, map, email, and contact terms — without a scavenger hunt. Open NAP reduces the “fly-by-night” feel.",
      ],
      notes: [
        {
          title: "Not a place to “cram more ads”",
          kind: "tip",
          text: "Space freed in the header is better spent on navigation and the offer — not another banner.",
        },
      ],
      links: [
        {
          label: "About the company",
          href: "/en/blog/o-kompanii/",
        },
      ],
    },
    {
      title: "Complete and truthful data",
      level: 2,
      paras: [
        "On the page, include: phones labeled by who answers (office, delivery, support); service emails; working social and messenger profiles; office/warehouse/pickup addresses; hours and operator reply windows.",
        "For trust — legal name, registered address when needed, bank details for wire transfers. Nearby — a contact form or chat if the team actually replies.",
        "Update any change immediately: a stale number or “phantom” address hits trust harder than an empty page.",
      ],
      lists: [
        {
          intro: "Commerce minimum:",
          items: [
            "phone and/or messenger with reply expectation",
            "email or form",
            "NAP (name, address, phone) aligned with maps and footer",
            "business hours",
            "map or clear “how to get here” if visits happen",
          ],
        },
      ],
    },
    {
      title: "Usefulness — not a field dump",
      level: 2,
      paras: [
        "Highlight what most people need: payment, delivery, pickup, returns — briefly or via links to dedicated pages. Facade photos and a route sketch help an offline location.",
        "Don’t turn Contacts into an SEO wall for “buy X cheap.” The page’s job is to connect and verify the company — not compete with a product page.",
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Comfort on any device",
      level: 2,
      paras: [
        "The page should read well on a phone: large clickable phones and email, copyable details as text (not a screenshot).",
        "An interactive map beats an image: routes by transit and car. Watch that the widget doesn’t kill speed or cover buttons on mobile.",
      ],
      notes: [
        {
          title: "NAP consistency",
          kind: "tip",
          text: "Same name, address, and phone — in the footer, on Contacts, and on the business profile. Mismatches confuse people and local SEO.",
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Style and hierarchy",
      level: 2,
      paras: [
        "Match the site style: fonts, color, spacing, logo. Data in blocks: Reach us, Addresses, Legal details, Write to us.",
        "Copy without errors, keep it short. Links to About, reviews, delivery are fine if the page doesn’t become a second homepage.",
        "Contacts aren’t a “minor utility”: clear reach drives leads and the sense of reliability.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "dedicated page + compact header",
            "current NAP and legal details as needed",
            "clickable text — not images",
            "map and form — when they truly help",
            "one style and clear blocks",
          ],
        },
      ],
    },
  ],
  closing: [
    "Open Contacts on a phone: one-tap call, email copies, map opens, form submits cleanly — if any of that breaks, fix it first.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "o-kompanii",
    "google-biznes",
    "molodoy-sayt",
    "regionalnoe-seo",
    "tekst-lendinga",
  ],
};

/** ES overlay for stranitsa-kontaktov — same structure as RU JSON. */
export const stranitsaKontaktovEs: BlogPost = {
  slug: "stranitsa-kontaktov",
  title: "Cómo diseñar la página de contacto de un sitio",
  date: "2019-11-07",
  category: "Content marketing",
  cover: "/images/blog/stranitsa-kontaktov/cover.webp",
  excerpt:
    "Una página de Contactos dedicada: qué listar, cómo no sobrecargar el header, teléfonos clicables, mapa y formulario — sin convertir el bloque en un vertedero de datos legales.",
  lead: [
    "La página de contacto es un punto de confianza y alcance rápido: dirección, teléfonos, email, mapa, horarios y una vía para escribir. Los errores y los campos vacíos ahuyentan aquí más que en Sobre nosotros.",
    "Abajo: por qué una página dedicada, qué mínimo mostrar, utilidad para el visitante, comodidad móvil y un sistema visual. Los formularios de leads van aparte; el copy de Sobre nosotros tiene su propio artículo.",
  ],
  faq: [
    {
      q: "¿Bastan los teléfonos en el header?",
      a: "En el header — 1–2 números principales y un enlace a Contactos. Direcciones completas, sucursales y datos legales van en una página dedicada.",
    },
    {
      q: "¿Hacen falta datos legales / de empresa?",
      a: "Para e-commerce y B2B — sí: razón social, dirección, IDs de registro/fiscales según corresponda. La precisión gana a un layout bonito.",
    },
    {
      q: "¿Hace falta un mapa?",
      a: "Si hay pickup o visita a oficina — sí; interactivo gana a un croquis estático. Para un servicio 100% online sin dirección — no es obligatorio.",
    },
    {
      q: "¿Hay que optimizar la página para SEO?",
      a: "No para «meter keywords». Bastan un title/H1 normal de Contactos más marca/ciudad y un NAP preciso. El tráfico suele llegar por marca y el menú.",
    },
    {
      q: "¿El teléfono como imagen o como texto?",
      a: "Como texto y clicable (`tel:` / `mailto:`). Una imagen dificulta copiar y la accesibilidad.",
    },
    {
      q: "¿Dónde van los mensajeros?",
      a: "A canales de soporte vivos con una expectativa clara de respuesta. No dupliques una docena de iconos muertos.",
    },
    {
      q: "¿En qué se diferencia de un formulario de contacto?",
      a: "Contactos — todos los puntos de alcance y el NAP. El formulario es un canal en esta página o en páginas de servicio.",
    },
  ],
  sections: [
    {
      title: "Una página dedicada — no un muro en el header",
      level: 2,
      paras: [
        "El header ya lleva logo, menú, carrito, login. Meter ahí cada sucursal, línea legal y horario dispersa la atención e hincha la barra.",
        "Una página de Contactos aparte aligera el header: en la barra — uno o dos teléfonos y una pista corta de horarios; en el menú y el footer — enlace a la página completa.",
        "En un solo sitio el cliente encuentra teléfonos de servicio, direcciones, mapa, email y condiciones de contacto — sin scavenger hunt. Un NAP abierto reduce la sensación de «empresa fantasma».",
      ],
      notes: [
        {
          title: "No es sitio para «meter más ads»",
          kind: "tip",
          text: "El espacio liberado en el header es mejor para navegación y oferta — no otro banner.",
        },
      ],
      links: [
        {
          label: "Sobre la empresa",
          href: "/es/blog/o-kompanii/",
        },
      ],
    },
    {
      title: "Datos completos y verdaderos",
      level: 2,
      paras: [
        "En la página incluye: teléfonos etiquetados por quién responde (oficina, delivery, soporte); emails de servicio; perfiles sociales y mensajeros activos; direcciones de oficina/almacén/pickup; horarios y ventanas de respuesta del operador.",
        "Para confianza — razón social, domicilio registrado cuando haga falta, datos bancarios para transferencias. Cerca — un formulario o chat si el equipo responde de verdad.",
        "Actualiza cualquier cambio al momento: un número viejo o una dirección «fantasma» pega a la confianza más que una página vacía.",
      ],
      lists: [
        {
          intro: "Mínimo comercial:",
          items: [
            "teléfono y/o mensajero con expectativa de respuesta",
            "email o formulario",
            "NAP (nombre, dirección, teléfono) alineado con mapas y footer",
            "horario comercial",
            "mapa o un «cómo llegar» claro si hay visitas",
          ],
        },
      ],
    },
    {
      title: "Utilidad — no un vertedero de campos",
      level: 2,
      paras: [
        "Destaca lo que más gente necesita: pago, entrega, pickup, devoluciones — en breve o vía enlaces a páginas dedicadas. Fotos de fachada y un croquis de ruta ayudan a una ubicación offline.",
        "No conviertas Contactos en un muro SEO de «compra X barato». El trabajo de la página es conectar y verificar la empresa — no competir con una ficha de producto.",
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Comodidad en cualquier dispositivo",
      level: 2,
      paras: [
        "La página debe leerse bien en el móvil: teléfonos y email grandes y clicables, datos copiables como texto (no una captura).",
        "Un mapa interactivo gana a una imagen: rutas en transporte y coche. Vigila que el widget no mate la velocidad ni tape botones en móvil.",
      ],
      notes: [
        {
          title: "Consistencia del NAP",
          kind: "tip",
          text: "Mismo nombre, dirección y teléfono — en el footer, en Contactos y en el perfil de negocio. Los desajustes confunden a la gente y al SEO local.",
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Estilo y jerarquía",
      level: 2,
      paras: [
        "Encaja con el estilo del sitio: tipografías, color, spacing, logo. Datos en bloques: Contáctanos, Direcciones, Datos legales, Escríbenos.",
        "Copy sin errores, corto. Enlaces a Sobre nosotros, reviews, entrega están bien si la página no se vuelve una segunda homepage.",
        "Contactos no son una «utilidad menor»: un alcance claro empuja leads y la sensación de fiabilidad.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "página dedicada + header compacto",
            "NAP al día y datos legales según haga falta",
            "texto clicable — no imágenes",
            "mapa y formulario — cuando ayudan de verdad",
            "un estilo y bloques claros",
          ],
        },
      ],
    },
  ],
  closing: [
    "Abre Contactos en el móvil: llamada a un toque, el email se copia, el mapa abre, el formulario envía limpio — si algo de eso falla, arréglalo primero.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "o-kompanii",
    "google-biznes",
    "molodoy-sayt",
    "regionalnoe-seo",
    "tekst-lendinga",
  ],
};

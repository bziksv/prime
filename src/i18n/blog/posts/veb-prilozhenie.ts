import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-prilozhenie — same structure as RU JSON. */
export const vebPrilozhenieEn: BlogPost = {
  slug: "veb-prilozhenie",
  title: "Web application: how it differs from a site and why business needs it",
  date: "2020-09-22",
  category: "Digital marketing",
  cover: "/images/blog/veb-prilozhenie/cover-en.webp",
  excerpt:
    "What a web app is, how it differs from a showcase site, how the browser–server chain works, and when business needs an account, cart, or SPA — not only a landing page.",
  lead: [
    "A web application is a program in the browser: the user doesn’t only read pages — they act: search, fill forms, buy, work in an account. Data lives on the server; the UI opens by URL.",
    "Below: how it differs from a simple site, static vs dynamic, interface types, and typical business scenarios. This isn’t a framework-picking guide or a substitute for a development brief.",
  ],
  faq: [
    {
      q: "Are a site and a web app the same thing?",
      a: "They overlap. A brochure site is almost static. A store, browser CRM, or personal account is already an app: state, roles, operations.",
    },
    {
      q: "Do you need desktop software?",
      a: "Usually no: a browser is enough. Install a native app when you need offline, push, or deep device integration.",
    },
    {
      q: "What is an SPA?",
      a: "Single Page Application: the UI updates without a full reload. Useful for accounts; for SEO and analytics you still need correct URLs and hits.",
    },
    {
      q: "Is Ajax required?",
      a: "Not as a 2010s brand, but as an idea: load data without redrawing the whole page. Today the same is done with fetch/API and modern frameworks.",
    },
    {
      q: "When is a landing page enough?",
      a: "When the job is to explain an offer and collect a lead. If you need orders, roles, calculations, integrations — design it as an application.",
    },
    {
      q: "Does this affect SEO?",
      a: "Yes: indexable URLs, speed, SSR/prerender when needed matter. A pretty account with no public landings doesn’t deliver page-one visibility by itself.",
    },
    {
      q: "Where should I start when buying development?",
      a: "With user scenarios and roles — not the stack. Then data, integrations, access rights, and acceptance criteria.",
    },
  ],
  sections: [
    {
      title: "What makes a web application",
      level: 2,
      paras: [
        "Logic is split between server and browser: the server stores and calculates; the client shows the UI and takes input. The user works through a browser — without installing a thick client in most cases.",
        "A static page is served almost the same to everyone. A dynamic one is built for the request, session, cart, or role: after login a person sees their data, not a shared showcase.",
      ],
      lists: [
        {
          intro: "App signals:",
          items: [
            "actions with a result (order, save, calculate)",
            "user state (session, cart, permissions)",
            "talk with the server and often external APIs",
            "UI reacts to input, not only shows text",
          ],
        },
      ],
      links: [
        {
          label: "What a website is",
          href: "/en/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
    {
      title: "The technical side without framework dogma",
      level: 2,
      paras: [
        "Browser and server can run on different OSes and languages — a web plus. What matters isn’t which framework is trendy, but contracts: API, security, response speed, clear errors.",
        "Partial UI updates (once often called Ajax) cut needless reloads. On SPAs watch analytics and reachable URLs: otherwise counters/goals and SEO break on client-side navigation.",
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Types by business job",
      level: 2,
      paras: [
        "Roughly: storefronts with catalog and cart, accounts (client/staff), editors and builders, collaboration tools, embedded widgets. Boundaries blur: one product can mix several roles.",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "online store with payment and order statuses",
            "service personal account or B2B portal",
            "CRM/accounting in the browser",
            "online booking, calculators, estimate builders",
            "site admin as a separate application",
          ],
        },
      ],
    },
    {
      title: "When to plan an app, not “just a site”",
      level: 2,
      paras: [
        "If value is in the process (order, status, documents, roles), budget and timeline as a product: scenarios, data, integrations, rights, tests. Marketing landings stay — their structure and SEO are designed separately from a closed account.",
        "For the public part, speed and clear URLs matter; for the account — security, action audit, and daily usability.",
      ],
    },
  ],
  closing: [
    "A web application is a site where the user works, not only reads. The difference from a brochure is state, roles, and operations; pick the stack after scenarios — not before.",
  ],
};

/** ES overlay for veb-prilozhenie — same structure as RU JSON / EN. */
export const vebPrilozhenieEs: BlogPost = {
  slug: "veb-prilozhenie",
  title: "Aplicación web: en qué se diferencia de un sitio y por qué la necesita el negocio",
  date: "2020-09-22",
  category: "Digital marketing",
  cover: "/images/blog/veb-prilozhenie/cover.webp",
  excerpt:
    "Qué es una web app, en qué se diferencia de un sitio escaparate, cómo funciona la cadena browser–servidor, y cuándo el negocio necesita cuenta, carrito o SPA — no solo una landing.",
  lead: [
    "Una aplicación web es un programa en el navegador: el usuario no solo lee páginas — actúa: busca, rellena formularios, compra, trabaja en una cuenta. Los datos viven en el servidor; la UI se abre por URL.",
    "Abajo: en qué se diferencia de un sitio simple, estático vs dinámico, tipos de interfaz y escenarios típicos de negocio. Esto no es una guía para elegir framework ni un sustituto del brief de desarrollo.",
  ],
  faq: [
    {
      q: "¿Sitio y web app son lo mismo?",
      a: "Se solapan. Un sitio brochure es casi estático. Una tienda, un CRM en el navegador o una cuenta personal ya es una app: estado, roles, operaciones.",
    },
    {
      q: "¿Hace falta software de escritorio?",
      a: "Suele no: basta el navegador. Instala una app nativa cuando necesites offline, push o integración profunda con el dispositivo.",
    },
    {
      q: "¿Qué es una SPA?",
      a: "Single Page Application: la UI se actualiza sin un reload completo. Útil para cuentas; para SEO y analytics aún hacen falta URLs correctas y hits.",
    },
    {
      q: "¿Es obligatorio Ajax?",
      a: "No como marca de los 2010, sino como idea: cargar datos sin redibujar toda la página. Hoy lo mismo se hace con fetch/API y frameworks modernos.",
    },
    {
      q: "¿Cuándo basta una landing?",
      a: "Cuando el trabajo es explicar una oferta y recoger un lead. Si necesitas pedidos, roles, cálculos, integraciones — diséñalo como aplicación.",
    },
    {
      q: "¿Esto afecta al SEO?",
      a: "Sí: importan URLs indexables, velocidad, SSR/prerender cuando hace falta. Una cuenta bonita sin landings públicas no entrega sola la visibilidad en primera página.",
    },
    {
      q: "¿Por dónde empezar al comprar desarrollo?",
      a: "Por escenarios de usuario y roles — no por el stack. Luego datos, integraciones, derechos de acceso y criterios de aceptación.",
    },
  ],
  sections: [
    {
      title: "Qué hace una aplicación web",
      level: 2,
      paras: [
        "La lógica se parte entre servidor y navegador: el servidor guarda y calcula; el cliente muestra la UI y recibe input. El usuario trabaja por el navegador — sin instalar un cliente grueso en la mayoría de casos.",
        "Una página estática se sirve casi igual a todos. Una dinámica se construye para la request, sesión, carrito o rol: tras el login una persona ve sus datos, no un escaparate compartido.",
      ],
      lists: [
        {
          intro: "Señales de app:",
          items: [
            "acciones con resultado (pedido, guardar, calcular)",
            "estado de usuario (sesión, carrito, permisos)",
            "habla con el servidor y a menudo APIs externas",
            "la UI reacciona al input, no solo muestra texto",
          ],
        },
      ],
      links: [
        {
          label: "Qué es un sitio web",
          href: "/es/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
    {
      title: "La parte técnica sin dogma de framework",
      level: 2,
      paras: [
        "Navegador y servidor pueden correr en distintos SO y lenguajes — un plus de la web. Lo que importa no es qué framework esté de moda, sino contratos: API, seguridad, velocidad de respuesta, errores claros.",
        "Las actualizaciones parciales de UI (antes a menudo llamadas Ajax) cortan reloads innecesarios. En SPAs vigila analytics y URLs alcanzables: si no, contadores/objetivos y SEO se rompen en la navegación client-side.",
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Tipos por trabajo de negocio",
      level: 2,
      paras: [
        "A grosso modo: escaparates con catálogo y carrito, cuentas (cliente/staff), editores y builders, tools de colaboración, widgets embebidos. Los bordes se difuminan: un producto puede mezclar varios roles.",
      ],
      lists: [
        {
          intro: "Ejemplos:",
          items: [
            "tienda online con pago y estados de pedido",
            "cuenta personal de servicio o portal B2B",
            "CRM/contabilidad en el navegador",
            "reservas online, calculadoras, builders de presupuestos",
            "admin del sitio como aplicación aparte",
          ],
        },
      ],
    },
    {
      title: "Cuándo planificar una app, no «solo un sitio»",
      level: 2,
      paras: [
        "Si el valor está en el proceso (pedido, estado, documentos, roles), presupuesta y calendariza como producto: escenarios, datos, integraciones, derechos, tests. Las landings de marketing se quedan — su estructura y SEO se diseñan aparte de una cuenta cerrada.",
        "Para la parte pública importan velocidad y URLs claras; para la cuenta — seguridad, auditoría de acciones y usabilidad del día a día.",
      ],
    },
  ],
  closing: [
    "Una aplicación web es un sitio donde el usuario trabaja, no solo lee. La diferencia con un brochure es estado, roles y operaciones; elige el stack después de los escenarios — no antes.",
  ],
};

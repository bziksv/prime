import type { BlogPost } from "../../../data/blog";

/** EN overlay for navigatsiya-sayta — same structure as RU JSON. */
export const navigatsiyaSaytaEn: BlogPost = {
  slug: "navigatsiya-sayta",
  title: "Website navigation: requirements, types, and conversion impact",
  date: "2020-10-30",
  category: "SEO",
  cover: "/images/blog/navigatsiya-sayta/cover-en.webp",
  excerpt:
    "What usable navigation means: menus, breadcrumbs, footer, catalog filters. How to keep users from getting lost — and how navigation ties to SEO and leads.",
  lead: [
    "Navigation is the system of moves across the site: menu, links, breadcrumbs, search, filters. If a person finds a service or product on autopilot, navigation works. If they wander and leave — you lose UX and part of the SEO signal.",
    "Below: requirements for usable navigation, the main types, and the conversion link. URL structure and section meaning for SEO are in the SEO structure piece; here the focus is user orientation.",
  ],
  faq: [
    {
      q: "How does navigation differ from site structure?",
      a: "Structure is the logic of sections and URLs. Navigation is how users walk them: menu, breadcrumbs, internal links, search.",
    },
    {
      q: "How many items belong in the main menu?",
      a: "Aim for 5–7 clear sections. Short and clear beats a sheet of 20 equal-weight items.",
    },
    {
      q: "Do you need breadcrumbs?",
      a: "Yes for catalogs and nested sections: orientation plus extra internal links. On a one-pager they’re often excess.",
    },
    {
      q: "Does the menu affect SEO?",
      a: "Yes indirectly: internal links, crawl, topic clarity. But “a keyword in every menu item” is a path to spam.",
    },
    {
      q: "Is a hamburger menu okay on desktop?",
      a: "On phone — yes. On a wide screen hiding everything important behind an icon often cuts section discovery.",
    },
    {
      q: "Does the footer count as navigation?",
      a: "Yes, secondary: contacts, legal links, section map. Don’t duplicate the main menu as a giant list for SEO.",
    },
    {
      q: "Are catalog filters navigation — or duplicate pages?",
      a: "For the user — navigation. For SEO you need an indexing policy, or endless URLs. See duplicates and pagination.",
    },
    {
      q: "How do you check navigation quality?",
      a: "Run “find service / product / contacts” scenarios on phone and desktop, review session replay, and listen to support questions like “where is your…”.",
    },
  ],
  sections: [
    {
      title: "Requirements for usable navigation",
      level: 2,
      paras: [
        "Clear labels, predictable placement, a short path to the goal, visible contacts/cart. Users shouldn’t guess what’s behind a creative label.",
        "Same rules sitewide: where the menu is, how submenus open, where the logo goes. Broken mobile navigation kills the journey faster than an “imperfect” desktop.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "the goal is found in 1–3 clicks",
            "items read without explanations",
            "the current section is visually clear",
            "search and contacts are in view",
            "no dead ends or broken links in the menu",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Main types of navigation",
      level: 2,
      paras: [
        "Horizontal/vertical menu, mega-menu for large catalogs, breadcrumbs, footer, blog side categories, tags, on-site search, pagination and filters, scroll-up controls, product-card tabs.",
        "You don’t need everything at once. Pick a set for the site type: services — clear menu + CTA; store — catalog, search, filters, cart; media — categories and search.",
      ],
      lists: [
        {
          intro: "Common set:",
          items: [
            "main menu",
            "breadcrumbs (catalog)",
            "search",
            "footer with contacts",
            "persistent lead/phone link",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Menu and information architecture",
      level: 2,
      paras: [
        "Menu items reflect real client jobs, not the company’s org chart. Vague “Products / Solutions / About” is weaker than “Services / Pricing / Cases / Contacts” if that’s how people look.",
        "Keep nesting shallow: two–three levels max for most SMBs. Deep “sub-sub-sections” hide pages from bots and people.",
      ],
      lists: [
        {
          intro: "Anti-patterns:",
          items: [
            "an “More” item with half the site",
            "identical names for different sections",
            "menu as images only, no text",
            "links to empty “coming soon” pages",
          ],
        },
      ],
    },
    {
      title: "Catalog: search, filters, pagination",
      level: 2,
      paras: [
        "In e-commerce navigation also means on-site search and facets. They should speed choice — not create thousands of indexed copies of one listing.",
        "Align UX and SEO: which filter combos are indexed, which are closed, how canonical and pagination behave.",
      ],
      lists: [
        {
          intro: "Align with the team:",
          items: [
            "which filters become landings",
            "what’s in noindex / canonical",
            "is there a “clear filters” control",
            "does the mobile menu break with open facets",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Navigation and conversion",
      level: 2,
      paras: [
        "The shorter the path to a lead or purchase, the fewer losses. Navigation doesn’t replace the offer, but it removes friction: “where’s pricing,” “how to contact,” “do you deliver to my city.”",
        "Watch session replay and click maps: if people hunt in the footer for what’s missing in the header — move the important stuff higher on the page.",
      ],
      lists: [
        {
          intro: "Conversion boosters:",
          items: [
            "clickable phone in the header",
            "lead button on key screens",
            "breadcrumbs and “back to catalog”",
            "don’t cover the menu with an aggressive chat",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "How to check and improve",
      level: 2,
      paras: [
        "Walk 5 newbie scenarios on a phone. Collect sales questions “clients can’t find…”. Crawl broken links in the menu and footer.",
        "After a redesign, retest: burger, landing anchors, and filters often break. Small label tweaks sometimes beat a new “creative” menu design.",
      ],
      lists: [
        {
          intro: "Release checklist:",
          items: [
            "main sections in 1 click from home",
            "logo goes home",
            "mobile menu closes and doesn’t break scroll",
            "no duplicate items",
            "contacts found in ≤2 clicks",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Design navigation from user jobs — not from stuffing every keyword into the menu.",
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "adaptivnyy-sayt",
    "futer-sayta",
    "optimizatsiya-konversii",
    "paginatsiya",
  ],
};

/** ES overlay for navigatsiya-sayta — same structure as RU JSON / EN. */
export const navigatsiyaSaytaEs: BlogPost = {
  slug: "navigatsiya-sayta",
  title: "Navegación del sitio: requisitos, tipos e impacto en la conversión",
  date: "2020-10-30",
  category: "SEO",
  cover: "/images/blog/navigatsiya-sayta/cover.webp",
  excerpt:
    "Qué significa una navegación usable: menús, breadcrumbs, footer, filtros de catálogo. Cómo evitar que el usuario se pierda — y cómo la navegación se ata al SEO y a los leads.",
  lead: [
    "La navegación es el sistema de movimientos por el sitio: menú, enlaces, breadcrumbs, búsqueda, filtros. Si una persona encuentra un servicio o producto en piloto automático, la navegación funciona. Si deambula y se va — pierdes UX y parte de la señal SEO.",
    "Abajo: requisitos de una navegación usable, los tipos principales y el vínculo con la conversión. La estructura de URLs y el sentido de las secciones para SEO están en la pieza de estructura SEO; aquí el foco es la orientación del usuario.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia la navegación de la estructura del sitio?",
      a: "La estructura es la lógica de secciones y URLs. La navegación es cómo las recorre el usuario: menú, breadcrumbs, enlaces internos, búsqueda.",
    },
    {
      q: "¿Cuántos ítems caben en el menú principal?",
      a: "Apunta a 5–7 secciones claras. Corto y claro gana a una hoja de 20 ítems con el mismo peso.",
    },
    {
      q: "¿Hacen falta breadcrumbs?",
      a: "Sí en catálogos y secciones anidadas: orientación más enlaces internos extra. En un one-pager a menudo sobran.",
    },
    {
      q: "¿El menú afecta al SEO?",
      a: "Sí de forma indirecta: enlaces internos, crawl, claridad temática. Pero «una keyword en cada ítem del menú» es camino al spam.",
    },
    {
      q: "¿Un menú hamburguesa está bien en desktop?",
      a: "En el teléfono — sí. En una pantalla ancha esconder todo lo importante detrás de un icono a menudo corta el descubrimiento de secciones.",
    },
    {
      q: "¿El footer cuenta como navegación?",
      a: "Sí, secundaria: contactos, enlaces legales, mapa de secciones. No dupliques el menú principal como una lista gigante por SEO.",
    },
    {
      q: "¿Los filtros del catálogo son navegación — o páginas duplicadas?",
      a: "Para el usuario — navegación. Para SEO hace falta una política de indexación, o URLs sin fin. Ver duplicados y paginación.",
    },
    {
      q: "¿Cómo compruebas la calidad de la navegación?",
      a: "Corre escenarios «encuentra servicio / producto / contactos» en teléfono y desktop, revisa session replay y escucha preguntas de soporte tipo «¿dónde está vuestro…?».",
    },
  ],
  sections: [
    {
      title: "Requisitos de una navegación usable",
      level: 2,
      paras: [
        "Etiquetas claras, colocación predecible, camino corto al objetivo, contactos/carrito visibles. El usuario no debería adivinar qué hay detrás de una etiqueta creativa.",
        "Las mismas reglas en todo el sitio: dónde está el menú, cómo se abren los submenús, a dónde va el logo. Una navegación móvil rota mata el journey más rápido que un desktop «imperfecto».",
      ],
      lists: [
        {
          intro: "Criterios de calidad:",
          items: [
            "el objetivo se encuentra en 1–3 clics",
            "los ítems se leen sin explicaciones",
            "la sección actual se ve clara",
            "búsqueda y contactos a la vista",
            "sin callejones sin salida ni enlaces rotos en el menú",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Tipos principales de navegación",
      level: 2,
      paras: [
        "Menú horizontal/vertical, mega-menú para catálogos grandes, breadcrumbs, footer, categorías laterales del blog, tags, búsqueda on-site, paginación y filtros, controles de scroll-up, tabs en ficha de producto.",
        "No hace falta todo a la vez. Elige un set según el tipo de sitio: servicios — menú claro + CTA; tienda — catálogo, búsqueda, filtros, carrito; media — categorías y búsqueda.",
      ],
      lists: [
        {
          intro: "Set habitual:",
          items: [
            "menú principal",
            "breadcrumbs (catálogo)",
            "búsqueda",
            "footer con contactos",
            "enlace persistente a lead/teléfono",
          ],
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Menú y arquitectura de la información",
      level: 2,
      paras: [
        "Los ítems del menú reflejan trabajos reales del cliente, no el organigrama de la empresa. Un vago «Productos / Soluciones / Sobre» es más flojo que «Servicios / Precios / Casos / Contactos» si así es como busca la gente.",
        "Mantén el anidamiento poco profundo: dos–tres niveles como máximo para la mayoría de pymes. Las «sub-sub-secciones» profundas esconden páginas de bots y de personas.",
      ],
      lists: [
        {
          intro: "Anti-patrones:",
          items: [
            "un ítem «Más» con media web",
            "nombres idénticos para secciones distintas",
            "menú solo con imágenes, sin texto",
            "enlaces a páginas vacías «próximamente»",
          ],
        },
      ],
    },
    {
      title: "Catálogo: búsqueda, filtros, paginación",
      level: 2,
      paras: [
        "En e-commerce la navegación también es búsqueda on-site y facetas. Deben acelerar la elección — no crear miles de copias indexadas de un mismo listado.",
        "Alinea UX y SEO: qué combos de filtros se indexan, cuáles se cierran, cómo se comportan canonical y paginación.",
      ],
      lists: [
        {
          intro: "Alinea con el equipo:",
          items: [
            "qué filtros se vuelven landings",
            "qué va en noindex / canonical",
            "hay un control de «limpiar filtros»",
            "el menú móvil se rompe con facetas abiertas",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Navegación y conversión",
      level: 2,
      paras: [
        "Cuanto más corto el camino a un lead o una compra, menos pérdidas. La navegación no sustituye la oferta, pero quita fricción: «dónde está el precio», «cómo contactar», «entregáis a mi ciudad».",
        "Mira session replay y mapas de clics: si la gente busca en el footer lo que falta en el header — sube lo importante más arriba en la página.",
      ],
      lists: [
        {
          intro: "Impulsores de conversión:",
          items: [
            "teléfono clicable en el header",
            "botón de lead en pantallas clave",
            "breadcrumbs y «volver al catálogo»",
            "no tapes el menú con un chat agresivo",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de la conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Footer del sitio",
          href: "/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "Cómo comprobar y mejorar",
      level: 2,
      paras: [
        "Recorre 5 escenarios de novato en el teléfono. Recoge preguntas de ventas «los clientes no encuentran…». Crawl de enlaces rotos en menú y footer.",
        "Tras un rediseño, retestea: burger, anclas de landing y filtros a menudo se rompen. A veces un ajuste pequeño de etiquetas gana a un menú «creativo» nuevo.",
      ],
      lists: [
        {
          intro: "Checklist de release:",
          items: [
            "secciones principales en 1 clic desde la home",
            "el logo va a la home",
            "el menú móvil se cierra y no rompe el scroll",
            "sin ítems duplicados",
            "contactos encontrados en ≤2 clics",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Diseña la navegación desde los trabajos del usuario — no desde meter cada keyword en el menú.",
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "adaptivnyy-sayt",
    "futer-sayta",
    "optimizatsiya-konversii",
    "paginatsiya",
  ],
};

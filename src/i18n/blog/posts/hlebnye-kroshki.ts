import type { BlogPost } from "../../../data/blog";

/** EN overlay for hlebnye-kroshki — same structure as RU JSON. */
export const hlebnyeKroshkiEn: BlogPost = {
  slug: "hlebnye-kroshki",
  title: "Breadcrumbs on a website: navigation and SEO",
  date: "2017-12-19",
  category: "SEO",
  cover: "/images/blog/hlebnye-kroshki/cover-en.webp",
  excerpt:
    "What breadcrumbs are, why they matter for UX and SEO, which types exist, and how to build the trail: none on the homepage, markup for the snippet, no “rankings via breadcrumbs” promises.",
  lead: [
    "Breadcrumbs are the “where am I” trail: Home → Section → Subsection → Page. Someone from search sees the hierarchy at once and can move one level up in a click.",
    "Below: breadcrumb types, design rules, and the SEO link (internal linking, snippet). This is a navigation layer — not a separate “#1 guarantee” factor.",
  ],
  faq: [
    {
      q: "Do I need breadcrumbs on a one-pager?",
      a: "Usually no. They make sense on catalogs, nested services, blogs, and portals.",
    },
    {
      q: "Should I put breadcrumbs on the homepage?",
      a: "No. On the home page the trail is redundant and often looks odd.",
    },
    {
      q: "Is the current page clickable?",
      a: "No: the last item is text without a link to itself. Levels above get links.",
    },
    {
      q: "Do breadcrumbs get you rankings?",
      a: "Not as a “ranking button”. They help UX, internal linking, and sometimes the snippet look with correct markup.",
    },
    {
      q: "Do you need Schema BreadcrumbList?",
      a: "Preferably: raises the chance of breadcrumbs in SERP. It doesn’t replace clear HTML navigation on the page.",
    },
    {
      q: "Where should I place them?",
      a: "Usually above the content, in one place on all templates, contrasty and readable on mobile.",
    },
    {
      q: "How do they differ from the menu?",
      a: "The menu is a section map. Breadcrumbs are the path to the current page in the hierarchy (or a view path — rarer).",
    },
    {
      q: "Is a long trail bad?",
      a: "On deep catalogs shorten the middle (“…”), but keep hierarchy meaning. Better simplify structure than hide chaos.",
    },
  ],
  sections: [
    {
      title: "What they are and where the name comes from",
      level: 2,
      paras: [
        "The term comes from English breadcrumbs — path markers from the fairy tale. In UI it’s a string of levels showing where the page sits in the site structure.",
        "Especially useful when someone lands from search straight on a product card or deep article: breadcrumbs explain “which section I’m in” and open a way to the category without wandering the menu.",
      ],
      lists: [
        {
          intro: "Breadcrumb jobs:",
          items: [
            "orientation (“system status visibility”)",
            "quick move one level up",
            "extra internal links up the hierarchy",
            "structure hint in the snippet (with markup)",
          ],
        },
      ],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "UX and SEO: what they really give",
      level: 2,
      paras: [
        "For people breadcrumbs shorten the path: from a vacuum cleaner card into “Vacuum cleaners”, not through the whole catalog again. That cuts friction and supports depth without faking engagement.",
        "For search — extra relevant internal links up the hierarchy and a chance to show the path in the snippet. Don’t confuse with “PageRank magic”: breadcrumbs strengthen a clear structure; they don’t replace content and tech.",
      ],
      lists: [
        {
          intro: "SEO effect that matters:",
          items: [
            "section ↔ page linking",
            "clearer clusters in structure",
            "rich breadcrumbs in SERP with valid markup",
            "no instant-ranking promises",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Adding breadcrumbs is part of UX/structure prep. Core rank buildup is planned for 2–6 months of systemic work — not “added breadcrumbs — rankings tomorrow”.",
        },
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "What kinds exist",
      level: 2,
      paras: [
        "**Linear (location-based)** — reflect hierarchy: Home → Catalog → Category → Product. The most common and useful option for SEO.",
        "**“Back to…”** — one button to the previous context (handy after on-site search, weaker as a site map). **Hybrid** — trail + a point “back to results” where the path doesn’t match hierarchy.",
      ],
      lists: [
        {
          intro: "What to choose:",
          items: [
            "stores and services — linear hierarchy",
            "search/filter results — extra “back to results”",
            "don’t build path-based breadcrumbs just to spam links",
          ],
        },
      ],
    },
    {
      title: "How to design them right",
      level: 2,
      paras: [
        "Don’t show breadcrumbs on the homepage. The current item isn’t a link. Separators (“/”, “›”) aren’t clickable. The same block on all templates above the content.",
        "Level text — human section names, not “page-id=17”. On mobile the trail shouldn’t break layout: wrapping or careful middle shortening is fine.",
      ],
      lists: [
        {
          intro: "Rules:",
          items: [
            "no breadcrumbs on home",
            "last item without href to itself",
            "contrast and a stable place",
            "names = real sections",
            "match URL/menu logic",
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
      title: "Markup for the snippet",
      level: 2,
      paras: [
        "Add `BreadcrumbList` (JSON-LD or microdata) aligned with the visible trail. Search isn’t obliged to show breadcrumbs, but without markup the odds drop.",
        "Check with validators and how it looks in SERP. Markup must match HTML: mismatches hurt trust in the data.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "JSON-LD = what’s on screen",
            "absolute canonical URLs in markup",
            "no breadcrumbs “for the bot only” without UI",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and schema",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Breadcrumbs on home, link to the current page, chaotic order, duplicating the whole menu in breadcrumbs, missing on mobile, markup without real navigation.",
        "If site hierarchy is a mess, breadcrumbs only show the mess. Structure sections first — then the trail.",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "catalog/card/article templates",
            "check landing from search",
            "mobile layout",
            "BreadcrumbList valid",
            "crawler sees upper-level links",
          ],
        },
      ],
      links: [
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "vnutrennyaya-perelinkovka",
    "seo-struktura-sayta",
    "snippet",
    "karta-sayta",
    "gipertekst",
  ],
};

/** ES overlay for hlebnye-kroshki — same structure as RU JSON / EN. */
export const hlebnyeKroshkiEs: BlogPost = {
  slug: "hlebnye-kroshki",
  title: "Breadcrumbs en un sitio: navegación y SEO",
  date: "2017-12-19",
  category: "SEO",
  cover: "/images/blog/hlebnye-kroshki/cover.webp",
  excerpt:
    "Qué son los breadcrumbs, por qué importan para UX y SEO, qué tipos existen y cómo montar el rastro: nada en la homepage, markup para el snippet, sin promesas de «rankings vía breadcrumbs».",
  lead: [
    "Los breadcrumbs son el rastro de «dónde estoy»: Inicio → Sección → Subsección → Página. Quien llega desde la búsqueda ve la jerarquía de golpe y puede subir un nivel con un clic.",
    "Abajo: tipos de breadcrumbs, reglas de diseño y el vínculo SEO (enlazado interno, snippet). Es una capa de navegación — no un factor aparte de «garantía de primera posición».",
  ],
  faq: [
    {
      q: "¿Hacen falta breadcrumbs en un one-pager?",
      a: "Suele no. Tienen sentido en catálogos, servicios anidados, blogs y portales.",
    },
    {
      q: "¿Debo poner breadcrumbs en la homepage?",
      a: "No. En la home el rastro sobra y a menudo se ve raro.",
    },
    {
      q: "¿La página actual es clicable?",
      a: "No: el último ítem es texto sin enlace a sí mismo. Los niveles de arriba sí llevan enlaces.",
    },
    {
      q: "¿Los breadcrumbs dan rankings?",
      a: "No como un «botón de ranking». Ayudan a la UX, al enlazado interno y a veces al aspecto del snippet con markup correcto.",
    },
    {
      q: "¿Hace falta Schema BreadcrumbList?",
      a: "Preferible: sube la probabilidad de breadcrumbs en la SERP. No sustituye una navegación HTML clara en la página.",
    },
    {
      q: "¿Dónde los coloco?",
      a: "Suele ser encima del contenido, en un solo sitio en todas las plantillas, con contraste y legibles en móvil.",
    },
    {
      q: "¿En qué se diferencian del menú?",
      a: "El menú es un mapa de secciones. Los breadcrumbs son el camino a la página actual en la jerarquía (o un camino de vista — más raro).",
    },
    {
      q: "¿Un rastro largo es malo?",
      a: "En catálogos profundos acorta el medio («…»), pero mantén el sentido de la jerarquía. Mejor simplificar estructura que esconder el caos.",
    },
  ],
  sections: [
    {
      title: "Qué son y de dónde viene el nombre",
      level: 2,
      paras: [
        "El término viene del inglés breadcrumbs — marcas de camino del cuento. En la UI es una cadena de niveles que muestra dónde se sienta la página en la estructura del sitio.",
        "Especialmente útil cuando alguien aterriza desde la búsqueda directo en una ficha de producto o un artículo profundo: los breadcrumbs explican «en qué sección estoy» y abren un camino a la categoría sin deambular por el menú.",
      ],
      lists: [
        {
          intro: "Trabajos de los breadcrumbs:",
          items: [
            "orientación («visibilidad del estado del sistema»)",
            "subir un nivel rápido",
            "enlaces internos extra hacia arriba en la jerarquía",
            "pista de estructura en el snippet (con markup)",
          ],
        },
      ],
      links: [
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "UX y SEO: qué dan de verdad",
      level: 2,
      paras: [
        "Para la gente los breadcrumbs acortan el camino: de una ficha de aspiradora a «Aspiradoras», no otra vez por todo el catálogo. Eso corta fricción y sostiene profundidad sin fingir engagement.",
        "Para la búsqueda — enlaces internos relevantes extra hacia arriba en la jerarquía y una chance de mostrar el camino en el snippet. No lo confundas con «magia de PageRank»: los breadcrumbs refuerzan una estructura clara; no sustituyen contenido ni técnica.",
      ],
      lists: [
        {
          intro: "Efecto SEO que importa:",
          items: [
            "enlace sección ↔ página",
            "clusters más claros en la estructura",
            "breadcrumbs enriquecidos en SERP con markup válido",
            "sin promesas de ranking al instante",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Añadir breadcrumbs forma parte de la prep de UX/estructura. El crecimiento de rankings del núcleo se planifica a 2–6 meses de trabajo sistemático — no «añadí breadcrumbs — rankings mañana».",
        },
      ],
      links: [
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "Snippet",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Qué tipos existen",
      level: 2,
      paras: [
        "**Lineales (location-based)** — reflejan la jerarquía: Inicio → Catálogo → Categoría → Producto. La opción más habitual y útil para SEO.",
        "**«Volver a…»** — un botón al contexto anterior (cómodo tras búsqueda on-site, más flojo como mapa del sitio). **Híbrido** — rastro + un punto «volver a resultados» donde el camino no cuadra con la jerarquía.",
      ],
      lists: [
        {
          intro: "Qué elegir:",
          items: [
            "tiendas y servicios — jerarquía lineal",
            "resultados de búsqueda/filtros — «volver a resultados» extra",
            "no montes breadcrumbs path-based solo para spamear enlaces",
          ],
        },
      ],
    },
    {
      title: "Cómo diseñarlos bien",
      level: 2,
      paras: [
        "No muestres breadcrumbs en la homepage. El ítem actual no es un enlace. Los separadores («/», «›») no son clicables. El mismo bloque en todas las plantillas encima del contenido.",
        "El texto de nivel — nombres humanos de sección, no «page-id=17». En móvil el rastro no debe romper el layout: wrap o un acortado cuidadoso del medio están bien.",
      ],
      lists: [
        {
          intro: "Reglas:",
          items: [
            "sin breadcrumbs en la home",
            "último ítem sin href a sí mismo",
            "contraste y un sitio estable",
            "nombres = secciones reales",
            "que cuadre con la lógica de URL/menú",
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
      title: "Markup para el snippet",
      level: 2,
      paras: [
        "Añade `BreadcrumbList` (JSON-LD o microdata) alineado con el rastro visible. La búsqueda no está obligada a mostrar breadcrumbs, pero sin markup bajan las probabilidades.",
        "Comprueba con validadores y cómo se ve en la SERP. El markup debe coincidir con el HTML: los desajustes duelen a la confianza en los datos.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "JSON-LD = lo que hay en pantalla",
            "URLs canónicas absolutas en el markup",
            "sin breadcrumbs «solo para el bot» sin UI",
          ],
        },
      ],
      links: [
        {
          label: "Snippet y schema",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Errores típicos",
      level: 2,
      paras: [
        "Breadcrumbs en la home, enlace a la página actual, orden caótico, duplicar todo el menú en breadcrumbs, ausentes en móvil, markup sin navegación real.",
        "Si la jerarquía del sitio es un lío, los breadcrumbs solo enseñan el lío. Ordena las secciones primero — luego el rastro.",
      ],
      lists: [
        {
          intro: "Checklist de rollout:",
          items: [
            "plantillas de catálogo/ficha/artículo",
            "comprobar aterrizaje desde búsqueda",
            "layout móvil",
            "BreadcrumbList válido",
            "el crawler ve enlaces de niveles superiores",
          ],
        },
      ],
      links: [
        {
          label: "Duplicados de página",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "vnutrennyaya-perelinkovka",
    "seo-struktura-sayta",
    "snippet",
    "karta-sayta",
    "gipertekst",
  ],
};

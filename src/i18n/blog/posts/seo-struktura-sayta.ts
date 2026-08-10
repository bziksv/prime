import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-struktura-sayta — same structure as RU JSON. */
export const seoStrukturaSaytaEn: BlogPost = {
  slug: "seo-struktura-sayta",
  title: "SEO site structure: how to design the hierarchy that ranks",
  date: "2021-12-27",
  category: "SEO",
  cover: "/images/blog/seo-struktura-sayta/cover-en.webp",
  excerpt:
    "How to design a site structure for SEO: page hierarchy, keyword clusters, and internal linking — before you flood the CMS with random pages.",
  lead: [
    "Site structure isn’t a pretty diagram for a pitch deck. It’s the system of pages and links that helps people and search engines find services, catalog, and articles without getting lost.",
    "Below: hierarchy patterns, what Yandex and Google care about, examples for different project types, and a practical order — section logic first, content second.",
  ],
  faq: [
    {
      q: "What is SEO site structure?",
      a: "A hierarchy of sections and URLs plus the internal links between them, aligned with keyword clusters and real user journeys.",
    },
    {
      q: "Which model is better — linear or tree?",
      a: "For most commercial sites, a tree. Linear fits short landings. A flat grid with no hierarchy rarely works for a service business.",
    },
    {
      q: "Should I design structure before writing copy?",
      a: "Yes. Otherwise content spreads across random URLs, sections duplicate, and internal linking stays weak.",
    },
    {
      q: "How do structure and keyword research connect?",
      a: "Query clusters tell you which landings you need. Structure is the map of those landings and the paths between them.",
    },
    {
      q: "What should I check after approving the scheme?",
      a: "Clean URLs, breadcrumbs, XML sitemap, robots.txt, click depth to key sections, and no overlapping intents on one URL.",
    },
  ],
  sections: [
    {
      title: "What “structure for SEO” actually means",
      level: 2,
      paras: [
        "In SEO, structure is a concrete system for placing pages, sections, and posts. It follows hierarchy you can draw as a block diagram and sanity-check with a user’s eye.",
        "A clear hierarchy helps people find a service or product faster and helps search engines see topical relationships. It’s also easier to build a keyword set: clusters map onto real landings, not thin air.",
      ],
      lists: [
        {
          intro: "Two layers people usually mean:",
          items: [
            "internal structure — how sections connect, navigation, the user path",
            "internal linking — links between pages that strengthen important URLs and help crawlers",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dump texts “wherever they fit,” invent structure later. That almost always creates duplicate sections and pages with no clear intent.",
        },
      ],
    },
    {
      title: "Page hierarchy in simple diagrams",
      level: 2,
      paras: [
        "Structure implies hierarchy: some elements sit under others. These are the base models most sites use.",
      ],
    },
    {
      title: "Linear",
      level: 3,
      paras: [
        "Pages go in sequence — links to neighbors and home. Bad for a complex catalog; fine for a short landing or a simple brochure site.",
        "Indexing is weaker than a tree: weight often stays on the homepage. It only makes sense if the whole offer really lives on one screen.",
      ],
    },
    {
      title: "Block / network",
      level: 3,
      paras: [
        "Elements are nearly equal; there’s no rigid pyramid. Common on compact single-product or personal pages where blocks (description, prices, reviews, order) cross-link.",
        "As the only model for a large commercial site it’s usually not enough: without section levels it’s hard to scale assortment and articles.",
      ],
    },
    {
      title: "Tree",
      level: 3,
      paras: [
        "The default for commercial projects: several levels; each section has subsections and service, product, or article pages. Keep depth reasonable — don’t bury key commercial URLs five clicks down.",
      ],
    },
    {
      title: "How to work with hierarchy",
      level: 2,
      paras: [
        "Simple rule: scheme first, content second. Otherwise you’ll clean up a pile of unlinked pages that index poorly and confuse visitors.",
        "Lock the structure on paper or in Miro/FigJam. Look at the future site through the customer’s eyes — where they go for price, service, contacts.",
        "To group queries under sections, teams use clustering tools — Rush Analytics, Key Collector, Titlo, and similar. Pick what matches your keyword-set size and workflow.",
      ],
      tables: [
        {
          caption: "Mini example: services → sections (fragment)",
          headers: ["Query cluster", "Section", "URL", "Depth"],
          rows: [
            ["pvc windows, buy windows", "PVC windows", "/okna-pvh/", "2"],
            ["window installation", "Installation", "/ustanovka-okon/", "2"],
            ["window repair", "Repair", "/remont-okon/", "2"],
            [
              "how to choose windows",
              "Blog / guide",
              "/blog/kak-vybrat-okna/",
              "3",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "What to watch",
          text: "One commercial intent — one landing. Informational clusters belong in a blog or knowledge base, not mixed into a “buy” page.",
        },
      ],
    },
    {
      title: "What search engines need for clean indexing",
      level: 2,
      paras: [
        "A clear hierarchy is the base. Next come technical signals: sitemap, crawl rules, human-readable URLs, and no duplicate chaos.",
      ],
    },
    {
      title: "Yandex",
      level: 3,
      paras: [
        "For many Russia-focused projects Yandex is the priority engine. It wants a clear hierarchy, topical sections, an XML sitemap, and a correct robots.txt so utility areas don’t enter the index.",
        "Breadcrumbs and logical navigation help users and make section nesting easier to understand.",
      ],
    },
    {
      title: "Google",
      level: 3,
      paras: [
        "Requirements sit close to Yandex’s, with emphasis on a simple hierarchy, readable word-based URLs (not IDs), careful path length, and predictable internal linking.",
        "Quality content on landings still decides outcomes. Structure without substance on the pages won’t carry rankings by itself.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "strict but simple section hierarchy",
            "short, readable URLs",
            "sitemap.xml and an up-to-date robots.txt",
            "internal linking without dead ends",
          ],
        },
      ],
    },
    {
      title: "Building structure: examples",
      level: 2,
      paras: [
        "There’s no universal scheme for every site. Here are base frames you then adapt to niche and keywords.",
      ],
    },
    {
      title: "Commercial services site",
      level: 3,
      paras: [
        "From home — service sections and about; from services — landings and articles if needed. Medium depth, breadcrumbs, and a block linking related services.",
      ],
    },
    {
      title: "Brochure site",
      level: 3,
      paras: [
        "Two levels: home with offer and contacts, plus a few support pages (services briefly, cases, legal details). Linear or a very shallow tree.",
      ],
    },
    {
      title: "Informational project",
      level: 3,
      paras: [
        "Rubrics and materials. Even “equal” articles belong in topical sections — easier to grow internal links and avoid orphans.",
      ],
    },
    {
      title: "Online store",
      level: 3,
      paras: [
        "Categories → subcategories → product cards, plus filters without endless URL duplicates. Split the catalog the way people search (product type, job to be done) — not only how the warehouse is organized.",
        "Before you fill it: niche and keyword work, an internal link map, a sitemap, and a section scheme under the clusters.",
      ],
      lists: [
        {
          intro: "Before content starts:",
          items: [
            "analyze niche and demand",
            "plan internal linking",
            "build a sitemap",
            "approve the section scheme against the keyword set",
          ],
        },
      ],
    },
    {
      title: "What to do after the structure is set",
      level: 2,
      paras: [
        "Next: keywords per landing, copy and meta, then tech (indexing, speed, status codes). Structure without a keyword set and audits ages fast. Getting the frame ready can take weeks; ranking growth across the set is planned over 2–6 months after work starts — hierarchy alone doesn’t deliver page one.",
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

/** ES overlay for seo-struktura-sayta — same structure as RU JSON / EN. */
export const seoStrukturaSaytaEs: BlogPost = {
  slug: "seo-struktura-sayta",
  title: "Estructura SEO del sitio: cómo diseñar la jerarquía que rankea",
  date: "2021-12-27",
  category: "SEO",
  cover: "/images/blog/seo-struktura-sayta/cover-es.webp",
  excerpt:
    "Cómo diseñar la estructura de un sitio para SEO: jerarquía de páginas, clusters de keywords y enlazado interno — antes de inundar el CMS con páginas al azar.",
  lead: [
    "La estructura del sitio no es un diagrama bonito para un pitch. Es el sistema de páginas y enlaces que ayuda a personas y buscadores a encontrar servicios, catálogo y artículos sin perderse.",
    "Abajo: patrones de jerarquía, qué miran Yandex y Google, ejemplos para distintos tipos de proyecto y un orden práctico — primero la lógica de secciones, después el contenido.",
  ],
  faq: [
    {
      q: "¿Qué es la estructura SEO del sitio?",
      a: "Una jerarquía de secciones y URLs más los enlaces internos entre ellas, alineada con clusters de keywords y journeys reales de usuario.",
    },
    {
      q: "¿Qué modelo es mejor — lineal o árbol?",
      a: "Para la mayoría de sitios comerciales, un árbol. Lo lineal encaja en landings cortas. Una rejilla plana sin jerarquía rara vez funciona para un negocio de servicios.",
    },
    {
      q: "¿Debo diseñar la estructura antes de escribir el copy?",
      a: "Sí. Si no, el contenido se reparte en URLs al azar, las secciones se duplican y el enlazado interno se queda flojo.",
    },
    {
      q: "¿Cómo se conectan estructura y research de keywords?",
      a: "Los clusters de queries te dicen qué landings necesitas. La estructura es el mapa de esas landings y los caminos entre ellas.",
    },
    {
      q: "¿Qué revisar tras aprobar el esquema?",
      a: "URLs limpias, breadcrumbs, sitemap XML, robots.txt, profundidad de clics a secciones clave y sin intents solapados en una URL.",
    },
  ],
  sections: [
    {
      title: "Qué significa de verdad «estructura para SEO»",
      level: 2,
      paras: [
        "En SEO, estructura es un sistema concreto para colocar páginas, secciones y posts. Sigue una jerarquía que puedes dibujar como diagrama de bloques y validar con ojo de usuario.",
        "Una jerarquía clara ayuda a la gente a encontrar un servicio o producto más rápido y a los buscadores a ver relaciones temáticas. También es más fácil montar un set de keywords: los clusters se mapean a landings reales, no al aire.",
      ],
      lists: [
        {
          intro: "Dos capas que suele querer decir la gente:",
          items: [
            "estructura interna — cómo se conectan las secciones, navegación, el camino del usuario",
            "enlazado interno — enlaces entre páginas que refuerzan URLs importantes y ayudan a los crawlers",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Tirar textos «donde quepan» e inventar la estructura después. Casi siempre crea secciones duplicadas y páginas sin intent claro.",
        },
      ],
    },
    {
      title: "Jerarquía de páginas en diagramas simples",
      level: 2,
      paras: [
        "La estructura implica jerarquía: unos elementos cuelgan de otros. Estos son los modelos base que usan la mayoría de sitios.",
      ],
    },
    {
      title: "Lineal",
      level: 3,
      paras: [
        "Las páginas van en secuencia — enlaces a vecinos y a la home. Malo para un catálogo complejo; bien para una landing corta o un brochure simple.",
        "La indexación es más débil que un árbol: el peso suele quedarse en la homepage. Solo tiene sentido si toda la oferta vive de verdad en una pantalla.",
      ],
    },
    {
      title: "Bloque / red",
      level: 3,
      paras: [
        "Los elementos son casi iguales; no hay pirámide rígida. Habitual en páginas compactas de un solo producto o personales donde los bloques (descripción, precios, reviews, pedido) se enlazan entre sí.",
        "Como único modelo para un sitio comercial grande suele no bastar: sin niveles de sección cuesta escalar surtido y artículos.",
      ],
    },
    {
      title: "Árbol",
      level: 3,
      paras: [
        "El default para proyectos comerciales: varios niveles; cada sección tiene subsecciones y páginas de servicio, producto o artículo. Mantén la profundidad razonable — no entierres URLs comerciales clave a cinco clics.",
      ],
    },
    {
      title: "Cómo trabajar con la jerarquía",
      level: 2,
      paras: [
        "Regla simple: primero el esquema, después el contenido. Si no, limpiarás un montón de páginas sin enlazar que indexan mal y confunden a los visitantes.",
        "Fija la estructura en papel o en Miro/FigJam. Mira el sitio futuro con ojos de cliente — dónde va por precio, servicio, contactos.",
        "Para agrupar queries bajo secciones, los equipos usan tools de clustering — Rush Analytics, Key Collector, Titlo y similares. Elige lo que encaje con el tamaño de tu set de keywords y el workflow.",
      ],
      tables: [
        {
          caption: "Mini ejemplo: servicios → secciones (fragmento)",
          headers: ["Cluster de query", "Sección", "URL", "Profundidad"],
          rows: [
            ["ventanas pvc, comprar ventanas", "Ventanas PVC", "/okna-pvh/", "2"],
            ["instalación de ventanas", "Instalación", "/ustanovka-okon/", "2"],
            ["reparación de ventanas", "Reparación", "/remont-okon/", "2"],
            [
              "cómo elegir ventanas",
              "Blog / guía",
              "/blog/kak-vybrat-okna/",
              "3",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Qué vigilar",
          text: "Un intent comercial — una landing. Los clusters informativos van a un blog o base de conocimiento, no mezclados en una página de «comprar».",
        },
      ],
    },
    {
      title: "Qué necesitan los buscadores para una indexación limpia",
      level: 2,
      paras: [
        "Una jerarquía clara es la base. Luego vienen señales técnicas: sitemap, reglas de crawl, URLs legibles y sin caos de duplicados.",
      ],
    },
    {
      title: "Yandex",
      level: 3,
      paras: [
        "Para muchos proyectos enfocados a Rusia, Yandex es el motor prioritario. Quiere jerarquía clara, secciones temáticas, un sitemap XML y un robots.txt correcto para que áreas de utilidad no entren al índice.",
        "Breadcrumbs y navegación lógica ayudan a los usuarios y hacen más fácil entender el nesting de secciones.",
      ],
    },
    {
      title: "Google",
      level: 3,
      paras: [
        "Los requisitos se acercan a los de Yandex, con énfasis en jerarquía simple, URLs legibles basadas en palabras (no IDs), longitud de path cuidadosa y enlazado interno predecible.",
        "El contenido de calidad en las landings sigue decidiendo. La estructura sin sustancia en las páginas no lleva rankings sola.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "jerarquía de secciones estricta pero simple",
            "URLs cortas y legibles",
            "sitemap.xml y un robots.txt al día",
            "enlazado interno sin callejones sin salida",
          ],
        },
      ],
    },
    {
      title: "Montar la estructura: ejemplos",
      level: 2,
      paras: [
        "No hay un esquema universal para cada sitio. Aquí van marcos base que luego adaptas a nicho y keywords.",
      ],
    },
    {
      title: "Sitio de servicios comerciales",
      level: 3,
      paras: [
        "Desde la home — secciones de servicio y about; desde servicios — landings y artículos si hace falta. Profundidad media, breadcrumbs y un bloque que enlace servicios afines.",
      ],
    },
    {
      title: "Sitio brochure",
      level: 3,
      paras: [
        "Dos niveles: home con oferta y contactos, más unas pocas páginas de apoyo (servicios en breve, casos, detalles legales). Lineal o un árbol muy poco profundo.",
      ],
    },
    {
      title: "Proyecto informativo",
      level: 3,
      paras: [
        "Rúbricas y materiales. Incluso artículos «iguales» pertenecen a secciones temáticas — más fácil crecer enlaces internos y evitar huérfanos.",
      ],
    },
    {
      title: "Tienda online",
      level: 3,
      paras: [
        "Categorías → subcategorías → fichas de producto, más filtros sin duplicados infinitos de URL. Parte el catálogo como busca la gente (tipo de producto, job to be done) — no solo como está organizado el almacén.",
        "Antes de rellenarlo: trabajo de nicho y keywords, un mapa de enlaces internos, un sitemap y un esquema de secciones bajo los clusters.",
      ],
      lists: [
        {
          intro: "Antes de arrancar el contenido:",
          items: [
            "analizar nicho y demanda",
            "planificar el enlazado interno",
            "montar un sitemap",
            "aprobar el esquema de secciones contra el set de keywords",
          ],
        },
      ],
    },
    {
      title: "Qué hacer cuando la estructura está fijada",
      level: 2,
      paras: [
        "Siguiente: keywords por landing, copy y meta, luego técnica (indexación, velocidad, códigos de estado). La estructura sin set de keywords y auditorías envejece rápido. Preparar el marco puede llevar semanas; el crecimiento de ranking del set se planifica en 2–6 meses tras arrancar el trabajo — la jerarquía sola no te pone en primera página.",
      ],
      links: [
        {
          label: "Research de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

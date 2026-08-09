import type { BlogPost } from "../../../data/blog";

/** EN overlay for paginatsiya — same structure as RU JSON. */
export const paginatsiyaEn: BlogPost = {
  slug: "paginatsiya",
  title: "Website pagination: how to build it without hurting SEO",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/paginatsiya/cover-en.webp",
  excerpt:
    "What catalog and blog pagination is, how numbering works, and how to set indexing so pages 2, 3, 4… don’t spawn duplicates.",
  lead: [
    "Pagination splits a long list into pages: catalog, blog, search results. Useful for readers, but without rules you easily get thin duplicate pages in the index.",
    "Below: why you need it, how to build it, SEO settings, the link with filters, and audit. Exact attributes like rel prev/next are no longer universal — rely on canonical tags and whether each page is useful.",
  ],
  faq: [
    {
      q: "Do you need pagination instead of “show more”?",
      a: "Either approach works. Infinite scroll is convenient but worse for sharing deep URLs. Classic ?page=2 is easier to control.",
    },
    {
      q: "Should page=2, 3… be indexed?",
      a: "If there’s unique useful content or products — yes, on purpose. If they’re almost empty copies — noindex or canonicalize deliberately.",
    },
    {
      q: "Does rel=prev/next help?",
      a: "Google long ago stopped treating them as a hard signal. Canonical, structure, and quality matter more.",
    },
    {
      q: "What about filters and sorts?",
      a: "Don’t create indexable filter combos you don’t need — those are facets, not pagination. Give them a separate parameter policy.",
    },
    {
      q: "How many products per page?",
      a: "Balance UX and page weight: usually dozens of cards, not hundreds of heavy blocks at once.",
    },
    {
      q: "Should you always canonicalize to page 1?",
      a: "Not always — it depends on listing uniqueness. Don’t hide needed cards by blindly canonicalizing everything to page=1.",
    },
    {
      q: "Should a nonexistent page=100 return 200?",
      a: "If the page doesn’t exist, return 404 (or a correct “end of list”), not an empty 200.",
    },
    {
      q: "Do all pages belong in the sitemap?",
      a: "Not required. Include the listings that should be indexed; a long page=N tail is often extra.",
    },
  ],
  sections: [
    {
      title: "Why pagination exists",
      level: 2,
      paras: [
        "Pagination speeds load, simplifies navigation of large lists, and gives stable URLs for return visits and linking. You need it wherever people compare many similar items.",
        "Numbered pages are crawlable and available without JavaScript. A “Show more” button can complement them, but must not hide content behind JavaScript alone.",
      ],
      lists: [
        {
          intro: "Where it shows up:",
          items: [
            "online store catalogs",
            "blog and news feeds",
            "on-site search",
            "archives and tags",
          ],
        },
      ],
    },
    {
      title: "How to build it on a site",
      level: 2,
      paras: [
        "Server or frontend returns a batch of items and navigation: numbers, next/back. Make URLs predictable — `/catalog/page/2/` or `?page=2` — and consistent across the section.",
        "Each existing page needs a correct status code and links to neighbors. Paging past the end must not return an empty 200 as if content exists.",
      ],
      lists: [
        {
          intro: "UX practice:",
          items: [
            "current page is visible",
            "large tap targets on mobile",
            "filters persist across pages",
            "sort doesn’t reset",
            "path to first and neighbors exists",
          ],
        },
      ],
    },
    {
      title: "SEO setup",
      level: 2,
      paras: [
        "Title and H1 on pagination pages must not be meaningless clones. Choose canonical by catalog strategy and usefulness of deep listings — not a blanket “everything to first” template.",
        "In the sitemap, include listings that should index. Separately control filters, sorts, and parameter duplicates: they often hurt more than numbering itself.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "thousands of nearly empty page=N in the index",
            "duplicates with/without slash and different parameters",
            "200 on nonexistent pages",
            "the same SEO text above the list on every page",
          ],
        },
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Pagination vs filters and sorts",
      level: 2,
      paras: [
        "Pagination pages through the same set. Filters and sorts create new selections and easily balloon the index to hundreds of thousands of URLs.",
        "Decide ahead: which combinations to index (strong landings), which to close (noindex / robots / canonical). Otherwise pagination SEO won’t save you from a facet explosion.",
      ],
      lists: [
        {
          intro: "Split in policy:",
          items: [
            "page=N inside a clean category",
            "filter color + size + brand",
            "sort by price or newness",
            "UTM and utility parameters",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "“Show more” and infinite scroll",
      level: 2,
      paras: [
        "Classic numbering is better for a catalog when you need to return to a specific slice. “Show more” cuts clicks, but next-batch URLs must still be available to bots and people.",
        "Infinite scroll fits news feeds, but is worse when people need to return to a position. If you use JavaScript, provide server-rendered output and a no-script path.",
      ],
      lists: [
        {
          intro: "Check UX:",
          items: [
            "current page or position is visible",
            "filters persist",
            "keyboard control exists",
            "after browser Back, list place isn’t lost",
          ],
        },
      ],
    },
    {
      title: "Content on pages 2+",
      level: 2,
      paras: [
        "Category SEO copy usually stays on the first page. Copying it onto page 2, 3, and beyond is pointless and strengthens the duplicate feel.",
        "On deep pages a list, navigation, and clear title (“Page 2” / product range — per store template) are enough. What matters is a unique set of cards and correct links.",
      ],
      lists: [
        {
          intro: "Good practice:",
          items: [
            "unique product/post set per page",
            "don’t duplicate long SEO text",
            "internal links to key categories from page 1",
            "don’t index an empty tail",
          ],
        },
      ],
      tables: [
        {
          caption: "Indexing page=N (simplified)",
          headers: ["Situation", "Common approach"],
          rows: [
            ["Many products, useful listing", "Index deliberately"],
            ["Nearly empty tails", "Don’t index / keep out of sitemap"],
            ["Strong filter landings", "Separate URLs, don’t confuse with page"],
            ["Sort only", "Usually not for the index"],
          ],
        },
      ],
    },
    {
      title: "Audit after launch",
      level: 2,
      paras: [
        "Crawl the section: status codes, canonical, link chain, items per page. Compare desktop and mobile templates.",
        "In Webmaster/GSC watch index and crawl errors. Changing filters or the catalog template can create thousands of URLs — repeat the audit after releases.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "empty pages with 200",
            "different URLs for the same result set",
            "parameter duplicates",
            "content only via JavaScript",
            "page=N explosion in the index report",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Pagination setup is part of technical prep. Rankings on a commercial keyword set grow over the planned months after work starts — typically 2–6 months, not from pagination alone.",
        },
      ],
    },
  ],
  related: [
    "kategorii-internet-magazina",
    "kanonicheskiy-teg",
    "dubli-stranits",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "prodvizhenie-internet-magazina",
  ],
};

/** ES overlay for paginatsiya — same structure as RU JSON / EN. */
export const paginatsiyaEs: BlogPost = {
  slug: "paginatsiya",
  title: "Paginación del sitio: cómo montarla sin dañar el SEO",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/paginatsiya/cover.webp",
  excerpt:
    "Qué es la paginación de catálogo y blog, cómo funciona la numeración y cómo fijar la indexación para que las páginas 2, 3, 4… no generen duplicados.",
  lead: [
    "La paginación parte una lista larga en páginas: catálogo, blog, resultados de búsqueda. Útil para lectores, pero sin reglas fácilmente obtienes páginas finas duplicadas en el índice.",
    "Abajo: por qué hace falta, cómo montarla, ajustes SEO, el vínculo con filtros y la auditoría. Atributos exactos como rel prev/next ya no son universales — apóyate en tags canónicos y en si cada página es útil.",
  ],
  faq: [
    {
      q: "¿Hace falta paginación en lugar de «mostrar más»?",
      a: "Cualquiera de los dos enfoques vale. Infinite scroll es cómodo pero peor para compartir URLs profundas. El clásico `?page=2` es más fácil de controlar.",
    },
    {
      q: "¿Deben indexarse page=2, 3…?",
      a: "Si hay contenido o productos únicos y útiles — sí, a propósito. Si son casi copias vacías — noindex o canonicalize con criterio.",
    },
    {
      q: "¿Ayuda rel=prev/next?",
      a: "Google dejó hace tiempo de tratarlos como señal dura. Canonical, estructura y calidad pesan más.",
    },
    {
      q: "¿Y los filtros y sorts?",
      a: "No crees combos de filtro indexables que no necesitas — eso son facets, no paginación. Dales una política de parámetros aparte.",
    },
    {
      q: "¿Cuántos productos por página?",
      a: "Equilibra UX y peso de página: suelen ser docenas de fichas, no cientos de bloques pesados de golpe.",
    },
    {
      q: "¿Siempre hay que canonicalizar a la página 1?",
      a: "No siempre — depende de la unicidad del listing. No escondas fichas necesarias canonicalizando todo a page=1 a ciegas.",
    },
    {
      q: "¿Una page=100 inexistente debe devolver 200?",
      a: "Si la página no existe, devuelve 404 (o un «fin de lista» correcto), no un 200 vacío.",
    },
    {
      q: "¿Todas las páginas van en el sitemap?",
      a: "No es obligatorio. Incluye los listings que deben indexarse; una cola larga de page=N a menudo sobra.",
    },
  ],
  sections: [
    {
      title: "Por qué existe la paginación",
      level: 2,
      paras: [
        "La paginación acelera la carga, simplifica la navegación de listas grandes y da URLs estables para volver y enlazar. Hace falta donde la gente compara muchos ítems parecidos.",
        "Las páginas numeradas son rastreables y disponibles sin JavaScript. Un botón «Mostrar más» puede complementarlas, pero no debe esconder el contenido solo detrás de JS.",
      ],
      lists: [
        {
          intro: "Dónde aparece:",
          items: [
            "catálogos de tienda online",
            "feeds de blog y noticias",
            "búsqueda on-site",
            "archivos y tags",
          ],
        },
      ],
    },
    {
      title: "Cómo montarla en un sitio",
      level: 2,
      paras: [
        "El servidor o el frontend devuelve un lote de ítems y navegación: números, siguiente/atrás. Haz URLs predecibles — `/catalog/page/2/` o `?page=2` — y consistentes en toda la sección.",
        "Cada página existente necesita un código de estado correcto y enlaces a vecinos. Paginar más allá del final no debe devolver un 200 vacío como si hubiera contenido.",
      ],
      lists: [
        {
          intro: "Práctica UX:",
          items: [
            "la página actual se ve",
            "targets de toque grandes en móvil",
            "los filtros persisten entre páginas",
            "el sort no se resetea",
            "existe camino a la primera y a vecinos",
          ],
        },
      ],
    },
    {
      title: "Setup SEO",
      level: 2,
      paras: [
        "Title y H1 en páginas de paginación no deben ser clones sin sentido. Elige canonical según estrategia de catálogo y utilidad de listings profundos — no una plantilla «todo a la primera» a manta.",
        "En el sitemap, incluye listings que deben indexar. Controla aparte filtros, sorts y duplicados de parámetros: a menudo duelen más que la numeración misma.",
      ],
      lists: [
        {
          intro: "Errores habituales:",
          items: [
            "miles de page=N casi vacías en el índice",
            "duplicados con/sin slash y parámetros distintos",
            "200 en páginas inexistentes",
            "el mismo texto SEO encima de la lista en cada página",
          ],
        },
      ],
      links: [
        {
          label: "Categorías de tienda online",
          href: "/es/blog/kategorii-internet-magazina/",
        },
        {
          label: "Tag canónico",
          href: "/es/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Paginación vs filtros y sorts",
      level: 2,
      paras: [
        "La paginación avanza por el mismo set. Filtros y sorts crean selecciones nuevas y fácilmente hinchan el índice a cientos de miles de URLs.",
        "Decide de antemano: qué combinaciones indexar (landings fuertes), cuáles cerrar (noindex / robots / canonical). Si no, el SEO de paginación no te salva de una explosión de facets.",
      ],
      lists: [
        {
          intro: "Separa en la política:",
          items: [
            "page=N dentro de una categoría limpia",
            "filtro color + precio + marca",
            "sort por precio o novedad",
            "UTM y parámetros de utilidad",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "«Mostrar más» e infinite scroll",
      level: 2,
      paras: [
        "La numeración clásica es mejor para un catálogo cuando necesitas volver a un slice concreto. «Mostrar más» corta clics, pero las URLs del siguiente lote deben seguir disponibles para bots y personas.",
        "Infinite scroll encaja en feeds de noticias, pero es peor cuando la gente necesita volver a una posición. Si usas JavaScript, ofrece salida renderizada en servidor y un camino sin script.",
      ],
      lists: [
        {
          intro: "Revisa UX:",
          items: [
            "se ve la página o posición actual",
            "los filtros persisten",
            "existe control por teclado",
            "tras Atrás del navegador, no se pierde el lugar en la lista",
          ],
        },
      ],
    },
    {
      title: "Contenido en páginas 2+",
      level: 2,
      paras: [
        "El copy SEO de categoría suele quedarse en la primera página. Copiarlo a la 2, 3 y siguientes no sirve y refuerza la sensación de duplicado.",
        "En páginas profundas bastan una lista, navegación y un title claro («Página 2» / rango de productos — según plantilla de tienda). Lo que importa es un set único de fichas y enlaces correctos.",
      ],
      lists: [
        {
          intro: "Buena práctica:",
          items: [
            "set único de productos/posts por página",
            "no duplicar texto SEO largo",
            "enlaces internos a categorías clave desde la página 1",
            "no indexar una cola vacía",
          ],
        },
      ],
      tables: [
        {
          caption: "Indexar page=N (simplificado)",
          headers: ["Situación", "Enfoque habitual"],
          rows: [
            ["Muchos productos, listing útil", "Indexar a propósito"],
            ["Colas casi vacías", "No indexar / fuera del sitemap"],
            ["Landings fuertes de filtro", "URLs aparte, no confundir con page"],
            ["Solo sort", "Suele no ir al índice"],
          ],
        },
      ],
    },
    {
      title: "Auditoría tras el lanzamiento",
      level: 2,
      paras: [
        "Crawl de la sección: códigos de estado, canonical, cadena de enlaces, ítems por página. Compara plantillas desktop y móvil.",
        "En Webmaster/GSC vigila errores de índice y crawl. Cambiar filtros o la plantilla del catálogo puede crear miles de URLs — repite la auditoría tras releases.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "páginas vacías con 200",
            "URLs distintas para el mismo set de resultados",
            "duplicados de parámetros",
            "contenido solo vía JavaScript",
            "explosión de page=N en el informe de índice",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Montar la paginación forma parte de la prep técnica. Los rankings de un set comercial de keywords crecen en los meses planificados tras arrancar el trabajo — típicamente 2–6 meses, no solo por la paginación.",
        },
      ],
    },
  ],
  related: [
    "kategorii-internet-magazina",
    "kanonicheskiy-teg",
    "dubli-stranits",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "prodvizhenie-internet-magazina",
  ],
};

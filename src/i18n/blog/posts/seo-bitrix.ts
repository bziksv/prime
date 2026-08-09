import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-bitrix — same structure as RU JSON. */
export const seoBitrixEn: BlogPost = {
  slug: "seo-bitrix",
  title: "SEO in 1C-Bitrix: robots, meta, and baseline setup",
  date: "2021-06-22",
  category: "SEO",
  cover: "/images/blog/seo-bitrix/cover-en.webp",
  excerpt:
    "What the built-in 1C-Bitrix SEO module gives you, how to handle robots.txt, meta templates, and counters carefully — without treating Marketplace paid modules as the only path.",
  lead: [
    "1C-Bitrix covers many jobs out of the box, but SEO doesn’t configure itself: you need robots/sitemap, title/description templates, clean URLs, counters, and duplicate control.",
    "Below is a baseline for a Bitrix portal. Menu labels and module names shift between editions — follow the current admin UI and docs.",
  ],
  faq: [
    {
      q: "Is the built-in SEO module enough without Marketplace?",
      a: "For a start, often yes: meta, properties, some reports. Take paid modules only for a specific gap — not “a pack for SEO.”",
    },
    {
      q: "Should I edit robots.txt in Bitrix by hand?",
      a: "Yes, if the template or module serves a wrong file. After edits, check in Webmaster tools. See also the article on closing pages from the index.",
    },
    {
      q: "Are meta keywords still needed?",
      a: "As a ranking factor for major search engines — no. Focus on Title, Description, H1, and useful text.",
    },
    {
      q: "How is this different from a tech audit?",
      a: "Here — CMS settings. A tech audit looks at server responses, speed, and the index more broadly, not only the Bitrix panel.",
    },
    {
      q: "Can I promote a site with modules alone?",
      a: "No. Modules help manage fields; rankings come from content, links, tech, and demand.",
    },
  ],
  sections: [
    {
      title: "What to set up first",
      level: 2,
      paras: [
        "Enable and check clean URLs, sitemap, robots.txt, and a home/sections setup without duplicates (www/HTTPS, trailing slash, filter params). Then — meta templates for sections and infoblock items.",
        "Put Yandex Metrica / Analytics counters once in the template or via the stock mechanism — no double inserts.",
      ],
      lists: [
        {
          intro: "Launch minimum:",
          items: [
            "HTTPS and mirror consolidation",
            "current robots.txt and XML sitemap",
            "Title/Description templates without junk",
            "canonical where duplicates exist",
            "Yandex Webmaster and Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Closing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "robots.txt and crawling",
      level: 2,
      paras: [
        "Bitrix serves robots from a file or settings; after updates and custom edits, verify needed sections aren’t blocked and service paths aren’t open (`/bitrix/`, admin, service scripts — per project policy).",
        "Disallow ≠ “remove from the index.” To drop from results you need noindex or URL removal, and the bot must still fetch the document.",
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "A check in Webmaster tools and a test crawl beat a “pretty” robots file copied from someone else’s guide.",
        },
      ],
    },
    {
      title: "Meta, infoblocks, and clean URLs",
      level: 2,
      paras: [
        "A solid path is SEO-property templates at section or infoblock-type level with inheritance — not hand-editing hundreds of cards. Build Title and Description from meaningful fields, not a keyword sheet.",
        "Set symbolic codes (clean URLs) to be readable and stable. A sharp URL change without 301s breaks rankings.",
      ],
      lists: [
        {
          intro: "Meta control list:",
          items: [
            "Title uniqueness within a section",
            "Description without “buy buy” template paste",
            "H1 aligned with Title",
            "no indexing of empty/thin filters without need",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Marketplace modules: go carefully",
      level: 2,
      paras: [
        "Marketplace has many SEO extensions (meta, redirects, text blocks). Take them for a concrete gap in the built-in module; check Bitrix edition support and catalog load.",
        "Don’t replace a promotion strategy by installing “one more SEO plugin.” Content, structure, and tech come first.",
      ],
    },
    {
      title: "Analytics and Webmaster tools",
      level: 2,
      paras: [
        "Metrica and Search Console / Webmaster show what is actually indexed and how users behave. Internal SEO-module reports are an extra layer, not a replacement.",
        "Bitrix doesn’t “rank itself”: field setup is faster than on a custom CMS, but results depend on the specialist and the process.",
      ],
      lists: [
        {
          intro: "After baseline setup:",
          items: [
            "reconcile sitemap with the index",
            "close service duplicates",
            "smoke-test key card templates",
            "lock a Bitrix update checklist",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for seo-bitrix — same structure as RU JSON / EN. */
export const seoBitrixEs: BlogPost = {
  slug: "seo-bitrix",
  title: "SEO en 1C-Bitrix: robots, meta y setup base",
  date: "2021-06-22",
  category: "SEO",
  cover: "/images/blog/seo-bitrix/cover.webp",
  excerpt:
    "Qué da el módulo SEO integrado de 1C-Bitrix, cómo manejar robots.txt, plantillas meta y contadores con cuidado — sin tratar los módulos de pago del Marketplace como el único camino.",
  lead: [
    "1C-Bitrix cubre muchos trabajos de fábrica, pero el SEO no se configura solo: hacen falta robots/sitemap, plantillas de title/description, URLs limpias, contadores y control de duplicados.",
    "Abajo hay una base para un portal Bitrix. Las etiquetas del menú y los nombres de módulos cambian entre ediciones — sigue la UI de admin y la docs actuales.",
  ],
  faq: [
    {
      q: "¿Basta el módulo SEO integrado sin Marketplace?",
      a: "Para empezar, a menudo sí: meta, propiedades, algunos informes. Coge módulos de pago solo por un hueco concreto — no «un pack para SEO».",
    },
    {
      q: "¿Debo editar robots.txt en Bitrix a mano?",
      a: "Sí, si la plantilla o el módulo sirve un archivo equivocado. Tras editar, revisa en herramientas de Webmaster. Ver también el artículo sobre cerrar páginas del índice.",
    },
    {
      q: "¿Siguen haciendo falta meta keywords?",
      a: "Como factor de ranking en los buscadores mayores — no. Enfócate en Title, Description, H1 y texto útil.",
    },
    {
      q: "¿En qué se diferencia de un audit técnico?",
      a: "Aquí — ajustes del CMS. Un audit técnico mira respuestas del servidor, velocidad y el índice de forma más amplia, no solo el panel de Bitrix.",
    },
    {
      q: "¿Se puede promover un sitio solo con módulos?",
      a: "No. Los módulos ayudan a gestionar campos; las posiciones vienen de contenido, enlaces, técnica y demanda.",
    },
  ],
  sections: [
    {
      title: "Qué configurar primero",
      level: 2,
      paras: [
        "Activa y revisa URLs limpias, sitemap, robots.txt y un setup de home/secciones sin duplicados (www/HTTPS, trailing slash, params de filtro). Luego — plantillas meta para secciones e ítems de infoblock.",
        "Pon los contadores de Yandex Metrica / Analytics una sola vez en la plantilla o vía el mecanismo de stock — sin inserts dobles.",
      ],
      lists: [
        {
          intro: "Mínimo de lanzamiento:",
          items: [
            "HTTPS y consolidación de espejos",
            "robots.txt y XML sitemap actuales",
            "plantillas Title/Description sin basura",
            "canonical donde haya duplicados",
            "Yandex Webmaster y Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Cerrar páginas del índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Audit técnico de SEO",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "robots.txt y crawling",
      level: 2,
      paras: [
        "Bitrix sirve robots desde un archivo o ajustes; tras updates y ediciones custom, verifica que no se bloqueen secciones necesarias y que las rutas de servicio no queden abiertas (`/bitrix/`, admin, scripts de servicio — según política del proyecto).",
        "Disallow ≠ «sacar del índice». Para bajar de resultados hace falta noindex o retirada de URL, y el bot aún debe poder fetch del documento.",
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Un chequeo en herramientas de Webmaster y un crawl de prueba ganan a un robots «bonito» copiado de la guía de otro.",
        },
      ],
    },
    {
      title: "Meta, infoblocks y URLs limpias",
      level: 2,
      paras: [
        "Una vía sólida son plantillas de propiedades SEO a nivel de sección o tipo de infoblock con herencia — no editar a mano cientos de fichas. Construye Title y Description desde campos con sentido, no desde una hoja de keywords.",
        "Fija códigos simbólicos (URLs limpias) para que sean legibles y estables. Un cambio brusco de URL sin 301s rompe posiciones.",
      ],
      lists: [
        {
          intro: "Lista de control meta:",
          items: [
            "unicidad de Title dentro de una sección",
            "Description sin pegar plantilla «compra compra»",
            "H1 alineado con Title",
            "sin indexar filtros vacíos/finos sin necesidad",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Módulos del Marketplace: con cuidado",
      level: 2,
      paras: [
        "Marketplace tiene muchas extensiones SEO (meta, redirects, bloques de texto). Cógelas por un hueco concreto del módulo integrado; revisa soporte de la edición de Bitrix y carga del catálogo.",
        "No sustituyas una estrategia de promoción instalando «un plugin SEO más». Primero contenido, estructura y técnica.",
      ],
    },
    {
      title: "Analítica y herramientas de Webmaster",
      level: 2,
      paras: [
        "Metrica y Search Console / Webmaster muestran qué está indexado de verdad y cómo se comportan los usuarios. Los informes internos del módulo SEO son una capa extra, no un reemplazo.",
        "Bitrix no «se posiciona solo»: el setup de campos es más rápido que en un CMS custom, pero los resultados dependen del especialista y del proceso.",
      ],
      lists: [
        {
          intro: "Tras el setup base:",
          items: [
            "reconciliar sitemap con el índice",
            "cerrar duplicados de servicio",
            "smoke-test de plantillas clave de ficha",
            "fijar un checklist de update de Bitrix",
          ],
        },
      ],
    },
  ],
};

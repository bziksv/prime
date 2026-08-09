import type { BlogPost } from "../../../data/blog";

/** EN overlay for karta-sayta — same structure as RU JSON. */
export const kartaSaytaEn: BlogPost = {
  slug: "karta-sayta",
  title: "Sitemap: XML and HTML — why you need them and how to make one",
  date: "2020-10-29",
  category: "SEO",
  cover: "/images/blog/karta-sayta/cover-en.webp",
  excerpt:
    "How an XML sitemap differs from an HTML map, how to create and submit the file to search engines, which URLs to include, and which mistakes hurt indexing.",
  lead: [
    "A sitemap helps search engines learn about important URLs faster. Most often that means `sitemap.xml` for bots; an HTML map is an orientation aid for people. It’s not a ranking switch — crawl hygiene next to solid structure and internal links.",
    "Below: the difference between formats, how to build XML, how to tell Yandex and Google, and what to avoid. Treat this as the main take on sitemaps among related posts.",
  ],
  faq: [
    {
      q: "Are XML and HTML sitemaps the same?",
      a: "No. XML is for bots (a URL list). HTML is a page of links for people. For SEO a correct XML plus internal linking matters more.",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only way to discover URLs, but on mid-size and large sites it greatly helps crawling new and deep pages.",
    },
    {
      q: "Where should I put the file?",
      a: "Usually `/sitemap.xml` at the root or a sitemap index `/sitemap_index.xml`. Point to it in robots.txt and Search Console / webmaster panels.",
    },
    {
      q: "Do I need priority and changefreq?",
      a: "Engines have long relied on them weakly. What matters more is an up-to-date list of canonical URLs without junk.",
    },
    {
      q: "What not to include?",
      a: "Utility pages, cart, filter duplicates, noindex pages, test URLs, redirect chains — only final 200 canonicals.",
    },
    {
      q: "How do I update it?",
      a: "CMS/plugin auto-generation or a script when URLs appear. After large sections — resubmit in the panels.",
    },
    {
      q: "How many URLs per file?",
      a: "Protocol limits: about 50k URLs or ~50 MB per file; more — use a sitemap index. In practice split by section for convenience.",
    },
    {
      q: "Does a sitemap replace the menu?",
      a: "No. Navigation and internal links matter more for people and often for crawl. XML is a complement.",
    },
  ],
  sections: [
    {
      title: "XML and HTML: two different maps",
      level: 2,
      paras: [
        "An XML sitemap is a machine-readable URL list (often with lastmod). The bot uses it as a hint of what to crawl. An HTML map is a normal page linking sections; useful for people and as extra internal links, but it doesn’t replace XML on a large site.",
        "Don’t confuse it with a ten-link “map in the footer” or a visual IA diagram for design.",
      ],
      lists: [
        {
          intro: "Who needs what:",
          items: [
            "XML — index and crawl",
            "HTML — human orientation",
            "neither fixes duplicates or thin content",
          ],
        },
      ],
      links: [
        {
          label: "Website navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Why you need sitemap.xml",
      level: 2,
      paras: [
        "New sections, deep nesting, weak internal linking — the bot may take long to reach a URL. A sitemap speeds discovery. On a five-page brochure site the effect is smaller than on a catalog of thousands.",
        "A sitemap doesn’t guarantee indexing: robots-blocked, noindex, soft 404s, and duplicates still get filtered.",
      ],
      lists: [
        {
          intro: "Especially useful if:",
          items: [
            "many landings and product cards",
            "you publish new URLs often",
            "media/docs live on separate URLs",
            "some pages are weakly linked from the menu",
          ],
        },
      ],
    },
    {
      title: "How to create an XML sitemap",
      level: 2,
      paras: [
        "On a CMS — built-in module or plugin (generate + auto-update). On static/custom — generate on deploy or a script over canonical URLs. Confirm the file has https addresses without redirect chains.",
        "Sitemap index: products, blog, categories separately — easier to diagnose errors by type.",
      ],
      lists: [
        {
          intro: "Mini requirements for URLs in the map:",
          items: [
            "canonical (one www/https variant)",
            "200 response",
            "allowed for indexing",
            "no sessions or UTM",
            "current, not deleted",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping every catalog filter into the sitemap. You get bloated crawl and index noise.",
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
      title: "How to tell search engines",
      level: 2,
      paras: [
        "In `robots.txt`: a `Sitemap: https://example.com/sitemap.xml` line. Plus add the file in Yandex Webmaster and Google Search Console. After a domain/HTTPS change, update the paths.",
        "Recrawl isn’t instant: a sitemap is a queue, not a command to “index everything tomorrow.”",
      ],
      lists: [
        {
          intro: "After publishing:",
          items: [
            "open the sitemap in a browser — valid XML",
            "check error reports in the panels",
            "reconcile URL count with expectations",
            "remove from the map what you closed from the index",
          ],
        },
      ],
      links: [
        {
          label: "Closing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "HTML map: when it makes sense",
      level: 2,
      paras: [
        "For people: a large portal, public services, a catalog with unclear structure. Make a readable hierarchy — not a sheet of 5,000 links on one page; use sections.",
        "For SEO an HTML map is a weak substitute for a normal menu and breadcrumbs. Don’t spawn a separate “seo-sitemap.html” with spammy anchors.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "a “Sitemap” link in the footer",
            "grouping by section",
            "only important public URLs",
          ],
        },
      ],
      links: [
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "Typical mistakes and control",
      level: 2,
      paras: [
        "Broken XML, http on an https site, redirects inside the map, a stale file after migration, mixing indexable and closed URLs, one giant file without an index.",
        "Quarterly reconcile: crawler vs sitemap vs pages in search. A gap is a reason to clean the generator.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "sitemap errors in Search Console / webmaster tools",
            "share of 404/301 among map URLs",
            "last file update time",
            "no test subdomain on production",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Canonicals and structure first, then the map. Otherwise you automate chaos.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "zakrytie-ot-indeksatsii",
    "seo-struktura-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};

/** ES overlay for karta-sayta — same structure as RU JSON / EN. */
export const kartaSaytaEs: BlogPost = {
  slug: "karta-sayta",
  title: "Sitemap: XML y HTML — por qué hacen falta y cómo hacer uno",
  date: "2020-10-29",
  category: "SEO",
  cover: "/images/blog/karta-sayta/cover.webp",
  excerpt:
    "En qué se diferencia un sitemap XML de un mapa HTML, cómo crear y enviar el archivo a los buscadores, qué URLs incluir y qué errores duelen a la indexación.",
  lead: [
    "Un sitemap ayuda a los buscadores a conocer URLs importantes más rápido. Lo más habitual es `sitemap.xml` para bots; un mapa HTML es ayuda de orientación para personas. No es un interruptor de ranking — higiene de crawl junto a estructura sólida y enlaces internos.",
    "Abajo: la diferencia entre formatos, cómo montar XML, cómo avisar a Yandex y Google, y qué evitar. Trátalo como la toma principal sobre sitemaps entre posts relacionados.",
  ],
  faq: [
    {
      q: "¿Son lo mismo sitemap XML y HTML?",
      a: "No. XML es para bots (una lista de URLs). HTML es una página de enlaces para personas. Para SEO importan más un XML correcto más el enlazado interno.",
    },
    {
      q: "¿Es obligatorio un sitemap?",
      a: "No es la única forma de descubrir URLs, pero en sitios medianos y grandes ayuda mucho a rastrear páginas nuevas y profundas.",
    },
    {
      q: "¿Dónde debo poner el archivo?",
      a: "Suele ser `/sitemap.xml` en la raíz o un índice `/sitemap_index.xml`. Apúntalo en robots.txt y en Search Console / paneles de webmaster.",
    },
    {
      q: "¿Hacen falta priority y changefreq?",
      a: "Los motores llevan tiempo apoyándose poco en ellos. Importa más una lista al día de URLs canónicas sin basura.",
    },
    {
      q: "¿Qué no incluir?",
      a: "Páginas de utilidad, carrito, duplicados de filtros, páginas noindex, URLs de test, cadenas de redirects — solo canónicos finales con 200.",
    },
    {
      q: "¿Cómo lo actualizo?",
      a: "Autogeneración del CMS/plugin o un script cuando aparecen URLs. Tras secciones grandes — reenvía en los paneles.",
    },
    {
      q: "¿Cuántas URLs por archivo?",
      a: "Límites del protocolo: unas 50k URLs o ~50 MB por archivo; más — usa un sitemap index. En la práctica parte por sección por comodidad.",
    },
    {
      q: "¿Un sitemap sustituye al menú?",
      a: "No. La navegación y los enlaces internos importan más para personas y a menudo para el crawl. XML es un complemento.",
    },
  ],
  sections: [
    {
      title: "XML y HTML: dos mapas distintos",
      level: 2,
      paras: [
        "Un sitemap XML es una lista de URLs legible por máquinas (a menudo con lastmod). El bot la usa como pista de qué rastrear. Un mapa HTML es una página normal que enlaza secciones; útil para personas y como enlaces internos extra, pero no sustituye XML en un sitio grande.",
        "No lo confundas con un «mapa en el footer» de diez enlaces o un diagrama visual de IA para diseño.",
      ],
      lists: [
        {
          intro: "Quién necesita qué:",
          items: [
            "XML — índice y crawl",
            "HTML — orientación humana",
            "ninguno arregla duplicados ni contenido fino",
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
      title: "Por qué hace falta sitemap.xml",
      level: 2,
      paras: [
        "Secciones nuevas, nesting profundo, enlazado interno flojo — el bot puede tardar en llegar a una URL. Un sitemap acelera el discovery. En un brochure de cinco páginas el efecto es menor que en un catálogo de miles.",
        "Un sitemap no garantiza indexación: lo bloqueado por robots, noindex, soft 404s y duplicados sigue filtrándose.",
      ],
      lists: [
        {
          intro: "Especialmente útil si:",
          items: [
            "hay muchas landings y fichas de producto",
            "publicas URLs nuevas a menudo",
            "media/docs viven en URLs aparte",
            "algunas páginas están poco enlazadas desde el menú",
          ],
        },
      ],
    },
    {
      title: "Cómo crear un sitemap XML",
      level: 2,
      paras: [
        "En un CMS — módulo o plugin integrado (generar + auto-update). En estático/custom — genera en el deploy o un script sobre URLs canónicas. Confirma que el archivo tenga direcciones https sin cadenas de redirects.",
        "Sitemap index: productos, blog, categorías aparte — más fácil diagnosticar errores por tipo.",
      ],
      lists: [
        {
          intro: "Mini requisitos para URLs en el mapa:",
          items: [
            "canónica (una variante www/https)",
            "respuesta 200",
            "permitida para indexar",
            "sin sesiones ni UTM",
            "actual, no borrada",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Tirar todos los filtros del catálogo al sitemap. Obtienes crawl hinchado y ruido en el índice.",
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
      title: "Cómo avisar a los buscadores",
      level: 2,
      paras: [
        "En `robots.txt`: una línea `Sitemap: https://example.com/sitemap.xml`. Además añade el archivo en Yandex Webmaster y Google Search Console. Tras un cambio de dominio/HTTPS, actualiza los paths.",
        "El recrawl no es instantáneo: un sitemap es una cola, no un comando de «indexa todo mañana».",
      ],
      lists: [
        {
          intro: "Tras publicar:",
          items: [
            "abre el sitemap en el navegador — XML válido",
            "revisa informes de errores en los paneles",
            "cruza el conteo de URLs con lo esperado",
            "quita del mapa lo que cerraste al índice",
          ],
        },
      ],
      links: [
        {
          label: "Cerrar páginas al índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Mapa HTML: cuándo tiene sentido",
      level: 2,
      paras: [
        "Para personas: un portal grande, servicios públicos, un catálogo con estructura poco clara. Haz una jerarquía legible — no una hoja de 5.000 enlaces en una página; usa secciones.",
        "Para SEO un mapa HTML es un sustituto flojo de un menú normal y breadcrumbs. No generes un «seo-sitemap.html» aparte con anclas spam.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "un enlace «Sitemap» en el footer",
            "agrupación por sección",
            "solo URLs públicas importantes",
          ],
        },
      ],
      links: [
        {
          label: "Footer del sitio",
          href: "/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "Errores típicos y control",
      level: 2,
      paras: [
        "XML roto, http en un sitio https, redirects dentro del mapa, archivo obsoleto tras migración, mezclar URLs indexables y cerradas, un archivo gigante sin índice.",
        "Trimestralmente cruza: crawler vs sitemap vs páginas en búsqueda. Un hueco es motivo para limpiar el generador.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "errores de sitemap en Search Console / tools de webmaster",
            "cuota de 404/301 entre URLs del mapa",
            "hora de la última actualización del archivo",
            "sin subdominio de test en producción",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Primero canónicos y estructura, luego el mapa. Si no, automatizas el caos.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "zakrytie-ot-indeksatsii",
    "seo-struktura-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};

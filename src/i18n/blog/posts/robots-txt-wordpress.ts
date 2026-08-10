import type { BlogPost } from "../../../data/blog";

/** EN overlay for robots-txt-wordpress — same structure as RU JSON. */
export const robotsTxtWordpressEn: BlogPost = {
  slug: "robots-txt-wordpress",
  title: "Robots.txt for WordPress: rules without a blind template",
  date: "2018-01-29",
  category: "SEO",
  cover: "/images/blog/robots-txt-wordpress/cover-en.webp",
  excerpt:
    "How to set robots.txt on WordPress: wp-admin, system paths, Sitemap, Webmaster checks — without banning all of wp-content or blindly closing categories.",
  lead: [
    "The `robots.txt` file in the WordPress root tells bots which paths are better not to crawl. There is no universal ideal for every site: pretty permalinks, SEO plugins, and which sections you want in search get in the way.",
    "Below: working WordPress logic and a careful frame. Don’t copy old templates that `Disallow: /wp-` everything, block `/category/`, or treat Host as sacred — you can easily block CSS/JS or useful listings. Disallow ≠ noindex — see the guide on closing from indexing.",
  ],
  faq: [
    {
      q: "Where is robots.txt in WordPress?",
      a: "In the site root: `https://example.com/robots.txt`. Some rules may be served virtually by core or a plugin — check what actually answers at the URL.",
    },
    {
      q: "Can I block all of /wp-content?",
      a: "Usually no: themes, styles, and scripts needed for rendering live there. More often you close plugins/cache surgically and leave uploads open.",
    },
    {
      q: "Should I ban /category/ and /tag/?",
      a: "Only if listings are truly junk for your strategy. For many blogs categories are normal landings. Don’t copy a ban because a 2018 template said so.",
    },
    {
      q: "Is the Host directive required?",
      a: "Historically for Yandex. Today 301s and an HTTPS mirror matter more. Don’t replace redirects with a Host line.",
    },
    {
      q: "How is this different from robots.txt for Joomla?",
      a: "Same directives, different system paths. General deindexing principles — in the indexing article.",
    },
  ],
  sections: [
    {
      title: "Why robots.txt on WordPress",
      level: 2,
      paras: [
        "WP serves admin, includes, feeds, trackbacks, system query parameters. Without rules the bot spends crawl budget on junk. A Disallow mistake can close needed things — including theme assets.",
        "The file doesn’t lift rankings by itself. It’s crawl hygiene; share of the core in search is separate work over months.",
      ],
      lists: [
        {
          intro: "Usually closed from crawl:",
          items: [
            "`/wp-admin/` (often with Allow on admin-ajax when needed)",
            "`/wp-includes/`",
            "cache and plugin system directories",
            "feeds/trackbacks — case by case",
            "`?` tech parameters — carefully, don’t cut needed shop filters",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Robots.txt for Joomla",
          href: "/en/blog/robots-txt-joomla/",
        },
      ],
    },
    {
      title: "What not to copy from old templates",
      level: 2,
      paras: [
        "A broad `Disallow: /wp-` also closes all of `wp-content` — with styles and scripts. For modern search engines that’s a bad idea: they understand the page worse.",
        "Auto-banning categories, tags, pagination, and every URL with `?` breaks normal catalog and blog sections. Decide by site: what should answer demand, don’t cut in robots.",
      ],
      notes: [
        {
          title: "Disallow ≠ “remove from the index”",
          kind: "tip",
          text: "If a URL is already in the SERP, a crawl ban can block serving noindex. To drop from the index use meta robots / X-Robots-Tag and the deindexing guide.",
        },
      ],
    },
    {
      title: "Path landmarks for WordPress",
      level: 2,
      paras: [
        "Base: close admin and core, don’t mute uploads and theme files without cause, point Sitemap over HTTPS. Account for the pretty-permalink prefix (`/blog/`, shop) in masks.",
        "SEO plugins (Yoast, Rank Math, etc.) often help with robots and the sitemap — but still check the final file with your eyes.",
      ],
      tables: [
        {
          caption: "Common paths",
          headers: ["Path", "Note"],
          rows: [
            ["/wp-admin/", "Close crawl; ajax — Allow if needed"],
            ["/wp-includes/", "System core"],
            ["/wp-content/plugins/", "Usually closed"],
            ["/wp-content/uploads/", "Often left open"],
            ["/wp-content/themes/", "Don’t cut blindly: CSS/JS needed"],
            ["Sitemap:", "HTTPS URL of the XML map"],
          ],
        },
      ],
    },
    {
      title: "Sample frame (not dogma)",
      level: 2,
      paras: [
        "A teaching frame of ideas — adapt to permalinks and plugins. Don’t duplicate a Disallow wall just in case.",
      ],
      lists: [
        {
          intro: "Line ideas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /wp-admin/`",
            "`Allow: /wp-admin/admin-ajax.php`",
            "`Disallow: /wp-includes/`",
            "`Disallow: /wp-content/plugins/`",
            "`Disallow: /wp-content/cache/`",
            "`Sitemap: https://example.com/sitemap_index.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "Host and http://",
          kind: "tip",
          text: "2018 guides wrote Host and Sitemap over http. Today — a canonical HTTPS mirror via redirects and the current map URL in webmaster panels.",
        },
      ],
    },
    {
      title: "Checks",
      level: 2,
      paras: [
        "Open `/robots.txt` in the browser; run analysis in Yandex Webmaster and the robots report in Google Search Console. Make sure main landings and CSS/JS of key templates aren’t under Disallow.",
        "After changing theme or plugin, recheck the file — generation may have changed.",
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "On WordPress robots.txt is surgical crawl hygiene — not “close all wp- and categories.” Sitemap over HTTPS, panel checks, no Host directive obsession.",
        "General Disallow/noindex theory — in the deindexing guide; the Joomla template — in the related article.",
      ],
    },
  ],
  closing: [
    "Build robots.txt for your WordPress: admin and clear tech junk closed, theme and uploads not cut by accident, Sitemap over HTTPS set — and check the file in Webmaster, not against a 2018 template screenshot.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "robots-txt-joomla",
    "wordpress-bezopasnost",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "wordpress-seo-plaginy",
  ],
};

/** ES overlay for robots-txt-wordpress — same structure as RU JSON / EN. */
export const robotsTxtWordpressEs: BlogPost = {
  slug: "robots-txt-wordpress",
  title: "Robots.txt para WordPress: reglas sin plantilla a ciegas",
  date: "2018-01-29",
  category: "SEO",
  cover: "/images/blog/robots-txt-wordpress/cover-es.webp",
  excerpt:
    "Cómo configurar robots.txt en WordPress: wp-admin, rutas del sistema, Sitemap, checks en Webmaster — sin banear todo wp-content ni cerrar categorías a ciegas.",
  lead: [
    "El archivo `robots.txt` en la raíz de WordPress indica a los bots qué rutas es mejor no rastrear. No hay un ideal universal para cada sitio: se interponen permalinks bonitos, plugins SEO y qué secciones quieres en búsqueda.",
    "Abajo: lógica de WordPress que funciona y un marco cuidadoso. No copies plantillas viejas que hacen `Disallow: /wp-` a todo, bloquean `/category/` o tratan Host como sagrado — puedes cerrar CSS/JS o listados útiles con facilidad. Disallow ≠ noindex — ver la guía de cierre a la indexación.",
  ],
  faq: [
    {
      q: "¿Dónde está robots.txt en WordPress?",
      a: "En la raíz del sitio: `https://example.com/robots.txt`. Algunas reglas las puede servir de forma virtual el core o un plugin — comprueba qué responde de verdad en la URL.",
    },
    {
      q: "¿Puedo bloquear todo /wp-content?",
      a: "Normalmente no: ahí viven temas, estilos y scripts necesarios para el render. Más a menudo cierras plugins/cache de forma quirúrgica y dejas uploads abiertos.",
    },
    {
      q: "¿Debo banear /category/ y /tag/?",
      a: "Solo si los listados son realmente basura para tu estrategia. En muchos blogs las categorías son landings normales. No copies un ban porque lo decía una plantilla de 2018.",
    },
    {
      q: "¿Es obligatoria la directiva Host?",
      a: "Históricamente para Yandex. Hoy importan más los 301 y un espejo HTTPS. No sustituyas redirects por una línea Host.",
    },
    {
      q: "¿En qué se diferencia de robots.txt para Joomla?",
      a: "Las mismas directivas, rutas de sistema distintas. Principios generales de desindexación — en el artículo de indexación.",
    },
  ],
  sections: [
    {
      title: "Por qué robots.txt en WordPress",
      level: 2,
      paras: [
        "WP sirve admin, includes, feeds, trackbacks, parámetros de query del sistema. Sin reglas el bot gasta crawl budget en basura. Un Disallow mal puesto puede cerrar lo necesario — incluidos assets del tema.",
        "El archivo no sube rankings por sí solo. Es higiene de crawl; la cuota del core en búsqueda es trabajo aparte a lo largo de meses.",
      ],
      lists: [
        {
          intro: "Suele cerrarse al crawl:",
          items: [
            "`/wp-admin/` (a menudo con Allow en admin-ajax cuando hace falta)",
            "`/wp-includes/`",
            "directorios de cache y sistema de plugins",
            "feeds/trackbacks — caso a caso",
            "parámetros tech `?` — con cuidado, no cortes filtros útiles de tienda",
          ],
        },
      ],
      links: [
        {
          label: "Cierre a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Robots.txt para Joomla",
          href: "/es/blog/robots-txt-joomla/",
        },
      ],
    },
    {
      title: "Qué no copiar de plantillas viejas",
      level: 2,
      paras: [
        "Un `Disallow: /wp-` amplio también cierra todo `wp-content` — con estilos y scripts. Para buscadores modernos es mala idea: entienden peor la página.",
        "Banear automáticamente categorías, tags, paginación y toda URL con `?` rompe secciones normales de catálogo y blog. Decide por sitio: lo que debe responder a la demanda, no lo cortes en robots.",
      ],
      notes: [
        {
          title: "Disallow ≠ «sacar del índice»",
          kind: "tip",
          text: "Si una URL ya está en el SERP, un ban de crawl puede bloquear servir noindex. Para salir del índice usa meta robots / X-Robots-Tag y la guía de desindexación.",
        },
      ],
    },
    {
      title: "Hitos de rutas para WordPress",
      level: 2,
      paras: [
        "Base: cierra admin y core, no silencies uploads ni archivos del tema sin motivo, apunta Sitemap por HTTPS. Cuenta con el prefijo de pretty-permalinks (`/blog/`, tienda) en las máscaras.",
        "Los plugins SEO (Yoast, Rank Math, etc.) a menudo ayudan con robots y el sitemap — pero sigue revisando el archivo final con tus ojos.",
      ],
      tables: [
        {
          caption: "Rutas habituales",
          headers: ["Ruta", "Nota"],
          rows: [
            ["/wp-admin/", "Cierra crawl; ajax — Allow si hace falta"],
            ["/wp-includes/", "Core del sistema"],
            ["/wp-content/plugins/", "Suele cerrarse"],
            ["/wp-content/uploads/", "A menudo se deja abierto"],
            ["/wp-content/themes/", "No cortes a ciegas: hace falta CSS/JS"],
            ["Sitemap:", "URL HTTPS del mapa XML"],
          ],
        },
      ],
    },
    {
      title: "Marco de ejemplo (no dogma)",
      level: 2,
      paras: [
        "Un marco didáctico de ideas — adáptalo a permalinks y plugins. No dupliques un muro de Disallow «por si acaso».",
      ],
      lists: [
        {
          intro: "Ideas de líneas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /wp-admin/`",
            "`Allow: /wp-admin/admin-ajax.php`",
            "`Disallow: /wp-includes/`",
            "`Disallow: /wp-content/plugins/`",
            "`Disallow: /wp-content/cache/`",
            "`Sitemap: https://example.com/sitemap_index.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "Host y http://",
          kind: "tip",
          text: "Las guías de 2018 escribían Host y Sitemap por http. Hoy — espejo canónico HTTPS vía redirects y la URL actual del mapa en los paneles de webmaster.",
        },
      ],
    },
    {
      title: "Comprobaciones",
      level: 2,
      paras: [
        "Abre `/robots.txt` en el navegador; lanza el análisis en Yandex Webmaster y el informe de robots en Google Search Console. Asegúrate de que landings principales y CSS/JS de plantillas clave no estén bajo Disallow.",
        "Tras cambiar tema o plugin, vuelve a revisar el archivo — la generación puede haber cambiado.",
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Seguridad WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "En WordPress robots.txt es higiene quirúrgica de crawl — no «cerrar todo wp- y categorías». Sitemap por HTTPS, checks en paneles, sin obsesión por la directiva Host.",
        "Teoría general Disallow/noindex — en la guía de desindexación; la plantilla Joomla — en el artículo relacionado.",
      ],
    },
  ],
  closing: [
    "Monta robots.txt para tu WordPress: admin y basura tech clara cerrados, tema y uploads no cortados por accidente, Sitemap por HTTPS fijado — y revisa el archivo en Webmaster, no contra una captura de plantilla de 2018.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "robots-txt-joomla",
    "wordpress-bezopasnost",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "wordpress-seo-plaginy",
  ],
};

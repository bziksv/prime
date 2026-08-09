import type { BlogPost } from "../../../data/blog";

/** EN overlay for kod-200 — same structure as RU JSON. */
export const kod200En: BlogPost = {
  slug: "kod-200",
  title: "Response code 200 OK: what it means for the site and indexing",
  date: "2021-01-29",
  category: "SEO",
  cover: "/images/blog/kod-200/cover-en.webp",
  excerpt:
    "What HTTP 200 OK means, how it relates to indexing, why soft 404 behind a 200 is dangerous, and how to check that important URLs really return success.",
  lead: [
    "200 OK means the server successfully handled the request and returned content. For a page in search that’s the basic green light: the document can be read and considered for the index.",
    "Below: how 200 works, what it means for crawl, and traps when the status says “success” but the page effectively isn’t there. Other codes are covered in the HTTP status article.",
    "200 alone doesn’t guarantee page one: it only says the response succeeded. Content, links, commercial factors, and competition do the rest.",
  ],
  faq: [
    {
      q: "Is a 200 status a good sign?",
      a: "For existing useful pages — yes. For removed or empty ones — no: better 404/410 or a 301 to a relevant URL.",
    },
    {
      q: "If it’s 200, is the page definitely indexed?",
      a: "No. 200 enables indexing, but the bot may skip the URL due to quality, noindex, duplicates, or crawl limits.",
    },
    {
      q: "What is a soft 404?",
      a: "A 200 response with “page not found” / empty results content. It confuses users and search.",
    },
    {
      q: "How does 200 differ from 304?",
      a: "304 — “not modified,” use the cache. For SEO checks, look at both 200 and correct caching.",
    },
    {
      q: "Do you need 200 on a redirect?",
      a: "No. Redirects should be 3xx. A meta-refresh “redirect” at 200 is weaker for search than an explicit 301.",
    },
    {
      q: "Why does the crawler see 200 but the browser shows an error?",
      a: "Different geo/CDN, auth, a JS error after HTML loads, bot blocking. Compare headers and body.",
    },
    {
      q: "How often to check 200 on key URLs?",
      a: "Continuously via uptime monitoring + after every release. Full crawl — on events.",
    },
  ],
  sections: [
    {
      title: "How 200 OK works",
      level: 2,
      paras: [
        "The client requested a resource; the server found it and returned it with code 200. The body may be HTML, API JSON, a file — depending on the URL.",
        "For a site that’s the normal response for a product card, article, or homepage. Abnormal — when “success” masks a missing entity.",
      ],
      lists: [
        {
          intro: "Alongside headers, check:",
          items: [
            "Content-Type",
            "cache (Cache-Control / ETag)",
            "encoding",
            "unexpected Set-Cookie on static assets",
          ],
        },
      ],
      links: [
        {
          label: "HTTP status code",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "200 and indexing",
      level: 2,
      paras: [
        "Bots prefer crawling available documents. Stable 200 on canonical URLs is a condition for normal crawl. Then robots, meta robots, quality, and duplicates decide.",
        "After a move, make sure new addresses themselves return 200 and old ones return 301 — not both 200 with the same content.",
      ],
      lists: [
        {
          intro: "So 200 “works” for SEO:",
          items: [
            "canonical points to this same URL",
            "no noindex on important pages",
            "content is unique and useful",
            "the page is in the sitemap if it should be indexed",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Fixing statuses is part of technical prep. Appearance and growth of rankings for a core after that is planned months — not the result of “everything is 200.”",
        },
      ],
    },
    {
      title: "The soft 404 trap",
      level: 2,
      paras: [
        "The store removed a product, but the template says “out of stock” or “not found” at code 200. Or a catalog filter with no results returns success with an empty grid.",
        "Search may treat the document as useless or keep junk in the index. An honest 404/410 or a 301 to the category is usually cleaner.",
      ],
      lists: [
        {
          intro: "Where soft 404 shows up most:",
          items: [
            "deleted product cards",
            "pagination past the end",
            "on-site search with no results",
            "outdated promo landings",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "`curl -I`, DevTools, a crawler, monitoring. For SPAs, check whether the server returns a 200 stub for every route while the client shows a real 404.",
        "Compare the status in Webmaster / URL Inspection with the actual server response — sometimes you’re seeing a CDN cache.",
      ],
      lists: [
        {
          intro: "Mini check for a landing:",
          items: [
            "final code 200",
            "one canonical host",
            "content matches the query",
            "no hidden noindex",
          ],
        },
      ],
    },
    {
      title: "Tie-in with other codes",
      level: 2,
      paras: [
        "The chain should end meaningfully: old URL → 301 → new with 200. Don’t keep important documents on a forever 302.",
        "During outages prefer an honest 503 with Retry-After over a half-alive 200 with broken layout — but fix long 5xx quickly too.",
      ],
      lists: [
        {
          intro: "Pairs “when what”:",
          items: [
            "page is alive → 200",
            "permanent move → 301 + 200 on the target",
            "gone for good → 404/410",
            "maintenance → 503",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Practice for the team",
      level: 2,
      paras: [
        "In the release Definition of Done: key templates return expected statuses. In the content process: removing a piece = a 301/410 decision, not “just drop it from the menu.”",
        "That way 200 stays a signal that the page exists and is useful — not a universal stub.",
      ],
      lists: [
        {
          intro: "Put in place:",
          items: [
            "a URL list for smoke checks",
            "CMS rules for entity deletion",
            "an alert if home/catalog ≠ 200",
            "a soft-404 review in the audit quarterly",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for kod-200 — same structure as RU JSON / EN. */
export const kod200Es: BlogPost = {
  slug: "kod-200",
  title: "Código de respuesta 200 OK: qué significa para el sitio y la indexación",
  date: "2021-01-29",
  category: "SEO",
  cover: "/images/blog/kod-200/cover.webp",
  excerpt:
    "Qué significa HTTP 200 OK, cómo se relaciona con la indexación, por qué un soft 404 detrás de un 200 es peligroso y cómo comprobar que las URLs importantes realmente devuelven éxito.",
  lead: [
    "200 OK significa que el servidor gestionó el request con éxito y devolvió contenido. Para una página en búsqueda es la luz verde básica: el documento se puede leer y considerar para el índice.",
    "Abajo: cómo funciona el 200, qué implica para el crawl y trampas cuando el status dice «éxito» pero la página en la práctica no está. Otros códigos se cubren en el artículo de status HTTP.",
    "Un 200 solo no garantiza primera página: solo dice que la respuesta tuvo éxito. Contenido, enlaces, factores comerciales y competencia hacen el resto.",
  ],
  faq: [
    {
      q: "¿Un status 200 es buena señal?",
      a: "Para páginas útiles existentes — sí. Para quitadas o vacías — no: mejor 404/410 o un 301 a una URL relevante.",
    },
    {
      q: "Si es 200, ¿la página está indexada seguro?",
      a: "No. El 200 habilita la indexación, pero el bot puede saltar la URL por calidad, noindex, duplicados o límites de crawl.",
    },
    {
      q: "¿Qué es un soft 404?",
      a: "Una respuesta 200 con contenido de «página no encontrada» / resultados vacíos. Confunde a usuarios y a la búsqueda.",
    },
    {
      q: "¿En qué se diferencia 200 de 304?",
      a: "304 — «no modificado», usa la cache. Para checks SEO mira tanto el 200 como un caching correcto.",
    },
    {
      q: "¿Hace falta 200 en un redirect?",
      a: "No. Los redirects deben ser 3xx. Un «redirect» por meta-refresh a 200 es más débil para la búsqueda que un 301 explícito.",
    },
    {
      q: "¿Por qué el crawler ve 200 pero el navegador muestra error?",
      a: "Geo/CDN distinto, auth, un error JS tras cargar el HTML, bloqueo de bots. Compara headers y body.",
    },
    {
      q: "¿Cada cuánto comprobar 200 en URLs clave?",
      a: "De continuo vía monitor de uptime + tras cada release. Crawl completo — en eventos.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona 200 OK",
      level: 2,
      paras: [
        "El cliente pidió un recurso; el servidor lo encontró y lo devolvió con código 200. El body puede ser HTML, JSON de API, un archivo — según la URL.",
        "Para un sitio es la respuesta normal de una ficha de producto, un artículo o la homepage. Anormal — cuando el «éxito» enmascara una entidad que ya no existe.",
      ],
      lists: [
        {
          intro: "Junto a los headers, revisa:",
          items: [
            "Content-Type",
            "cache (Cache-Control / ETag)",
            "encoding",
            "Set-Cookie inesperado en assets estáticos",
          ],
        },
      ],
      links: [
        {
          label: "Código de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "200 e indexación",
      level: 2,
      paras: [
        "Los bots prefieren rastrear documentos disponibles. Un 200 estable en URLs canónicas es condición para un crawl normal. Luego deciden robots, meta robots, calidad y duplicados.",
        "Tras una mudanza, asegúrate de que las direcciones nuevas ellas mismas devuelven 200 y las viejas 301 — no ambas 200 con el mismo contenido.",
      ],
      lists: [
        {
          intro: "Para que el 200 «funcione» en SEO:",
          items: [
            "canonical apunta a esta misma URL",
            "sin noindex en páginas importantes",
            "el contenido es único y útil",
            "la página está en el sitemap si debe indexarse",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Arreglar statuses forma parte de la prep técnica. La aparición y el crecimiento de rankings de un núcleo después se planifica en meses — no es el resultado de «todo está en 200».",
        },
      ],
    },
    {
      title: "La trampa del soft 404",
      level: 2,
      paras: [
        "La tienda quitó un producto, pero la plantilla dice «sin stock» o «no encontrado» con código 200. O un filtro de catálogo sin resultados devuelve éxito con una grilla vacía.",
        "La búsqueda puede tratar el documento como inútil o dejar basura en el índice. Un 404/410 honesto o un 301 a la categoría suele ser más limpio.",
      ],
      lists: [
        {
          intro: "Dónde aparece más el soft 404:",
          items: [
            "fichas de producto borradas",
            "paginación más allá del final",
            "búsqueda on-site sin resultados",
            "landings promo desfasadas",
          ],
        },
      ],
      links: [
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Cómo comprobar",
      level: 2,
      paras: [
        "`curl -I`, DevTools, un crawler, monitorización. En SPAs, revisa si el servidor devuelve un stub 200 para cada ruta mientras el cliente muestra un 404 real.",
        "Compara el status en Webmaster / URL Inspection con la respuesta real del servidor — a veces estás viendo cache de CDN.",
      ],
      lists: [
        {
          intro: "Mini check de una landing:",
          items: [
            "código final 200",
            "un solo host canónico",
            "el contenido encaja con la query",
            "sin noindex oculto",
          ],
        },
      ],
    },
    {
      title: "Encaje con otros códigos",
      level: 2,
      paras: [
        "La cadena debe terminar con sentido: URL vieja → 301 → nueva con 200. No mantengas documentos importantes en un 302 eterno.",
        "En caídas prefiere un 503 honesto con Retry-After a un 200 a medias con layout roto — pero también arregla 5xx largos rápido.",
      ],
      lists: [
        {
          intro: "Pares «cuándo qué»:",
          items: [
            "la página vive → 200",
            "mudanza permanente → 301 + 200 en el destino",
            "fuera para siempre → 404/410",
            "mantenimiento → 503",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "Error 502",
          href: "/es/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Práctica para el equipo",
      level: 2,
      paras: [
        "En el Definition of Done del release: las plantillas clave devuelven los statuses esperados. En el proceso de contenido: quitar una pieza = decisión 301/410, no «solo sacarla del menú».",
        "Así el 200 sigue siendo señal de que la página existe y es útil — no un stub universal.",
      ],
      lists: [
        {
          intro: "Pon en marcha:",
          items: [
            "una lista de URLs para smoke checks",
            "reglas del CMS para borrar entidades",
            "una alerta si home/catálogo ≠ 200",
            "una revisión de soft-404 en la auditoría trimestral",
          ],
        },
      ],
    },
  ],
};

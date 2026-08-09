import type { BlogPost } from "../../../data/blog";

/** EN overlay for kod-statusa-http — same structure as RU JSON. */
export const kodStatusaHttpEn: BlogPost = {
  slug: "kod-statusa-http",
  title: "HTTP status codes: classes, meaning, and how to check them",
  date: "2021-02-01",
  category: "SEO",
  cover: "/images/blog/kod-statusa-http/cover-en.webp",
  excerpt:
    "What an HTTP response status is, how to read classes 1xx–5xx, which codes matter for SEO, and how to check one URL or the whole site.",
  lead: [
    "An HTTP status code is a three-digit number in the server response: whether the page was served, a redirect is needed, or something failed. Browsers and search bots read it before they touch the HTML.",
    "Below: code classes, what a webmaster should watch, and how to check URLs one by one or in bulk. Separate deep-dives on 200 and 502 are in related articles.",
    "Wrong statuses (soft 200 on a removed page, redirect chains, mass 5xx) hurt crawl and indexing more than a typo in the footer.",
  ],
  faq: [
    {
      q: "Where can I see the status code?",
      a: "DevTools → Network, `curl -I`, online checkers, crawlers (Screaming Frog and similar), and hosting or CDN reports.",
    },
    {
      q: "What status is “normal” for an indexed page?",
      a: "Usually 200. Permanent move — 301. Temporary — 302/307. Removed with no replacement — 404 or 410.",
    },
    {
      q: "How does a 404 differ from a 410?",
      a: "404 means “not found” (it may come back). 410 means “gone on purpose.” For permanently removed URLs, 410 is clearer for bots.",
    },
    {
      q: "Why do status codes matter for SEO?",
      a: "The bot decides whether to index a URL, whether to pass signals on redirect, and how much crawl budget to spend on errors.",
    },
    {
      q: "What is a soft 404?",
      a: "The page returns 200 but essentially says “nothing here.” For search that is worse than an honest 404: junk enters the index.",
    },
    {
      q: "Should I check the whole site?",
      a: "Yes after a move, CMS change, or mass URL edits. On a regular cadence — sample key templates plus a crawl.",
    },
    {
      q: "Do 5xx errors kill rankings immediately?",
      a: "A brief blip usually does not. Long downtime and mass 5xx do hurt crawl and trust in availability.",
    },
  ],
  sections: [
    {
      title: "How a server response works",
      level: 2,
      paras: [
        "The client requests a URL. The server replies with a line like `HTTP/1.1 200 OK`, headers, and a body. The code is a fast signal of what happened.",
        "Search relies on status while crawling: 200 can be parsed as a document, 301 means follow the new address, 404 means do not expect content.",
      ],
      lists: [
        {
          intro: "In the status line:",
          items: [
            "protocol version",
            "three-digit code",
            "short text phrase (OK, Not Found…)",
          ],
        },
      ],
      links: [
        {
          label: "Web server basics",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Classes 1xx–5xx",
      level: 2,
      paras: [
        "Codes group by the first digit. In SEO practice you mostly meet 2xx, 3xx, 4xx, and 5xx.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "1xx — intermediate (rare on typical sites)",
            "2xx — success (200 — page served)",
            "3xx — redirect (301/302/307…)",
            "4xx — client error (404, 403, 410…)",
            "5xx — server error (500, 502, 503, 504…)",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t memorize every code. Keep a cheat sheet of common ones and know how to check the real response — not “what the admin panel should show.”",
        },
      ],
      links: [
        {
          label: "301 and 302 redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "502 Bad Gateway",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "What matters to webmasters and SEO",
      level: 2,
      paras: [
        "Key landings should stably return 200. After a move — direct 301s without long chains. Removed URLs — don’t mask them with a homepage 200.",
        "Watch 404 spikes in Webmaster and logs: broken internal links, outdated backlinks, export errors.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "product or service removed but still 200 with an empty template",
            "A→B→C→D redirect chains",
            "homepage returning 302 “somewhere”",
            "mass 5xx at night during bot peaks",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "How to check one URL",
      level: 2,
      paras: [
        "The most honest way is the response header: `curl -I https://example.com/page/` or the Network tab in the browser. Check the final code after redirects and the Location chain.",
        "Online tools are handy, but for disputed cases check from a server or CI and account for CDN and geo.",
      ],
      lists: [
        {
          intro: "One-URL checklist:",
          items: [
            "final response code",
            "number of redirect hops",
            "www/https match the canonical",
            "no soft 404 by content",
          ],
        },
      ],
    },
    {
      title: "Checking the whole site",
      level: 2,
      paras: [
        "A crawler follows internal links and builds a status table. After a structure change, compare the list to the sitemap and priority URLs from Webmaster.",
        "Bulk-checking external backlinks is separate: not everything should redirect to the homepage.",
      ],
      lists: [
        {
          intro: "When to run a full crawl:",
          items: [
            "domain or HTTPS move",
            "CMS or URL scheme change",
            "major template redesign",
            "error spikes in webmaster panels",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "How to build it into routine",
      level: 2,
      paras: [
        "Alerts on 5xx for main hosts, a monthly look at 404s, a check after every release. Statuses are hygiene — not one-shot SEO magic.",
        "Fixing tech is part of site prep. Ranking growth for a keyword set after things stabilize is a separate, months-long process.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "uptime monitoring",
            "crawl of key templates",
            "top-404 review from logs",
            "a 301 map when URLs are removed",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for kod-statusa-http — same structure as RU JSON / EN. */
export const kodStatusaHttpEs: BlogPost = {
  slug: "kod-statusa-http",
  title: "Códigos de estado HTTP: clases, significado y cómo comprobarlos",
  date: "2021-02-01",
  category: "SEO",
  cover: "/images/blog/kod-statusa-http/cover.webp",
  excerpt:
    "Qué es un status de respuesta HTTP, cómo leer las clases 1xx–5xx, qué códigos importan para el SEO y cómo comprobar una URL o todo el sitio.",
  lead: [
    "Un código de estado HTTP es un número de tres dígitos en la respuesta del servidor: si se sirvió la página, hace falta un redirect o algo falló. Navegadores y bots de búsqueda lo leen antes de tocar el HTML.",
    "Abajo: clases de códigos, qué debe vigilar un webmaster y cómo comprobar URLs una a una o en lote. Deep-dives aparte sobre 200 y 502 están en artículos relacionados.",
    "Statuses equivocados (soft 200 en una página quitada, cadenas de redirects, 5xx masivos) duelen al crawl y a la indexación más que un typo en el footer.",
  ],
  faq: [
    {
      q: "¿Dónde veo el código de estado?",
      a: "DevTools → Network, `curl -I`, checkers online, crawlers (Screaming Frog y similares) e informes de hosting o CDN.",
    },
    {
      q: "¿Qué status es «normal» para una página indexada?",
      a: "Suele ser 200. Mudanza permanente — 301. Temporal — 302/307. Quitada sin reemplazo — 404 o 410.",
    },
    {
      q: "¿En qué se diferencia un 404 de un 410?",
      a: "404 significa «no encontrado» (puede volver). 410 significa «fuera a propósito». Para URLs quitadas de forma permanente, 410 es más claro para los bots.",
    },
    {
      q: "¿Por qué importan los códigos de estado para el SEO?",
      a: "El bot decide si indexar una URL, si pasar señales en un redirect y cuánto crawl budget gastar en errores.",
    },
    {
      q: "¿Qué es un soft 404?",
      a: "La página devuelve 200 pero en esencia dice «aquí no hay nada». Para la búsqueda es peor que un 404 honesto: basura entra al índice.",
    },
    {
      q: "¿Debo comprobar todo el sitio?",
      a: "Sí tras una mudanza, cambio de CMS o ediciones masivas de URL. En ritmo habitual — muestra de plantillas clave más un crawl.",
    },
    {
      q: "¿Los errores 5xx matan rankings al instante?",
      a: "Un blip breve normalmente no. Un downtime largo y 5xx masivos sí duelen al crawl y a la confianza en disponibilidad.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona una respuesta del servidor",
      level: 2,
      paras: [
        "El cliente pide una URL. El servidor responde con una línea tipo `HTTP/1.1 200 OK`, headers y un body. El código es una señal rápida de qué pasó.",
        "La búsqueda se apoya en el status al rastrear: 200 se puede parsear como documento, 301 significa seguir la dirección nueva, 404 significa no esperar contenido.",
      ],
      lists: [
        {
          intro: "En la línea de status:",
          items: [
            "versión del protocolo",
            "código de tres dígitos",
            "frase corta de texto (OK, Not Found…)",
          ],
        },
      ],
      links: [
        {
          label: "Bases del servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Clases 1xx–5xx",
      level: 2,
      paras: [
        "Los códigos se agrupan por el primer dígito. En la práctica SEO sueles encontrar sobre todo 2xx, 3xx, 4xx y 5xx.",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "1xx — intermedios (raros en sitios típicos)",
            "2xx — éxito (200 — página servida)",
            "3xx — redirect (301/302/307…)",
            "4xx — error de cliente (404, 403, 410…)",
            "5xx — error de servidor (500, 502, 503, 504…)",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "No memorices todos los códigos. Guarda una chuleta de los habituales y sabe cómo comprobar la respuesta real — no «lo que debería mostrar el panel de admin».",
        },
      ],
      links: [
        {
          label: "Redirects 301 y 302",
          href: "/es/blog/redirekt/",
        },
        {
          label: "502 Bad Gateway",
          href: "/es/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Qué importa a webmasters y SEO",
      level: 2,
      paras: [
        "Las landings clave deberían devolver 200 de forma estable. Tras una mudanza — 301s directos sin cadenas largas. URLs quitadas — no las enmascares con un 200 de homepage.",
        "Vigila picos de 404 en Webmaster y logs: enlaces internos rotos, backlinks desfasados, errores de export.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "producto o servicio quitado pero aún 200 con plantilla vacía",
            "cadenas de redirects A→B→C→D",
            "homepage devolviendo 302 «a algún sitio»",
            "5xx masivos de noche en picos de bots",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Cómo comprobar una URL",
      level: 2,
      paras: [
        "La forma más honesta es el header de respuesta: `curl -I https://example.com/page/` o la pestaña Network del navegador. Revisa el código final tras redirects y la cadena Location.",
        "Las tools online son cómodas, pero en casos dudosos comprueba desde un servidor o CI y cuenta con CDN y geo.",
      ],
      lists: [
        {
          intro: "Checklist de una URL:",
          items: [
            "código de respuesta final",
            "número de saltos de redirect",
            "www/https coinciden con el canónico",
            "sin soft 404 por contenido",
          ],
        },
      ],
    },
    {
      title: "Comprobar todo el sitio",
      level: 2,
      paras: [
        "Un crawler sigue enlaces internos y arma una tabla de status. Tras un cambio de estructura, compara la lista con el sitemap y URLs prioritarias de Webmaster.",
        "Comprobar en lote backlinks externos es aparte: no todo debería redirigir a la homepage.",
      ],
      lists: [
        {
          intro: "Cuándo lanzar un crawl completo:",
          items: [
            "mudanza de dominio o HTTPS",
            "cambio de CMS o esquema de URLs",
            "rediseño mayor de plantillas",
            "picos de errores en paneles de webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
      ],
    },
    {
      title: "Cómo meterlo en la rutina",
      level: 2,
      paras: [
        "Alertas de 5xx en hosts principales, un vistazo mensual a 404s, un check tras cada release. Los statuses son higiene — no magia SEO de un solo golpe.",
        "Arreglar la técnica forma parte de la prep del sitio. El crecimiento de ranking de un set de keywords tras estabilizar es un proceso aparte, de meses.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "monitor de uptime",
            "crawl de plantillas clave",
            "revisión de los 404 más frecuentes en logs",
            "mapa de 301 cuando se quitan URLs",
          ],
        },
      ],
    },
  ],
};

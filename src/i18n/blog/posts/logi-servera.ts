import type { BlogPost } from "../../../data/blog";

/** EN overlay for logi-servera — same structure as RU JSON. */
export const logiServeraEn: BlogPost = {
  slug: "logi-servera",
  title: "Server logs and search crawler behavior",
  date: "2021-07-19",
  category: "SEO",
  cover: "/images/blog/logi-servera/cover-en.webp",
  excerpt:
    "How to read site access logs: crawler User-Agents, status codes, crawl budget, duplicates, and scan errors — alongside Webmaster tools and Search Console.",
  lead: [
    "Server logs record who requested what: people, CDN, monitoring, and search bots. They show real crawl activity — not only what Search Console and Webmaster panels summarize.",
    "Below: what to watch in access logs, how to estimate crawl budget, find wasteful URLs, and catch scan errors. Closing pages from the index and a full tech audit are related topics in separate articles.",
  ],
  faq: [
    {
      q: "Why use logs if I already have Webmaster / Search Console?",
      a: "Panels give summaries and samples. Logs are the full request stream to the server: rare bots, media, odd URLs, and exact status codes.",
    },
    {
      q: "Where do I get access.log?",
      a: "On hosting / VPS: the web server log directory (often `/var/log/nginx/` or the hosting panel). Format depends on Apache/Nginx and settings.",
    },
    {
      q: "What is crawl budget?",
      a: "A rough limit of crawler attention to the site over a period. Duplicates, parameters, heavy sections, and 4xx/5xx eat it. The goal — the bot visits important URLs more often.",
    },
    {
      q: "Can I fix SEO with logs alone?",
      a: "No. Logs diagnose crawl. Next — robots/canonical/structure fixes, content, and tech. See the tech audit and closing-from-indexing articles.",
    },
    {
      q: "Do I need a paid Log File Analyzer?",
      a: "At the start, an export + Excel/Google Sheets or a script is enough. Analyzers speed up large volumes; names and plans change.",
    },
  ],
  sections: [
    {
      title: "What server logs are",
      level: 2,
      paras: [
        "An access log is a chronology of HTTP requests: IP, time, method, URL, status code, User-Agent, sometimes referrer and response size. An error log is app/server failures; for SEO, access usually matters more.",
        "Crawlers leave characteristic User-Agents (Googlebot, YandexBot, and others). Not every “bot-like” string is an official crawler: verify IP/search-engine docs when in doubt.",
      ],
      lists: [
        {
          intro: "Typical fields:",
          items: [
            "date and time",
            "requested URL",
            "HTTP code (200, 301, 404, 500…)",
            "User-Agent",
            "GET/POST method",
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
      title: "How to open and parse a log",
      level: 2,
      paras: [
        "`.log` files are easy to view in an editor or import into a sheet (often CSV / space-separated). Several daily files are joined (`cat` / panel merge) before analyzing a period.",
        "Filter lines for the needed User-Agent, sort by URL and status code. Pivot tables: hits per URL, share of 404s for the bot, paths that burn the most crawl budget.",
      ],
      lists: [
        {
          intro: "Quick order:",
          items: [
            "take a week–month slice",
            "filter Googlebot / YandexBot",
            "URLs with the highest request counts",
            "share of non-200 responses",
            "URLs with `?` and clear duplicates",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t store or publish raw logs with user IPs without need — that’s personal data and disk load. For SEO analysis, anonymized aggregates are enough.",
        },
      ],
    },
    {
      title: "Crawl budget and priorities",
      level: 2,
      paras: [
        "If the bot constantly hits filters, sessions, favicons, and empty pagination, important service pages update less often. In logs that looks like frequent hits on “junk” paths and rare visits to money pages.",
        "Cut noise: canonicals and unified URLs, close utility paths from crawl/index as needed, faster responses, fewer redirect chains, solid internal links to priorities.",
      ],
      lists: [
        {
          intro: "What usually eats budget:",
          items: [
            "parameter duplicates",
            "endless filters and sorts",
            "broken links (mass 404s)",
            "heavy media that doesn’t need to be indexed",
            "admin areas left open to crawl",
          ],
        },
      ],
      links: [
        {
          label: "Excluding pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Crawl errors and what to fix",
      level: 2,
      paras: [
        "Watch 4xx/5xx for bots: broken internal links, stale redirects, timeouts. Cross-check with crawl reports in Google Search Console and other webmaster tools — CDN and sampling can cause gaps.",
        "Heavy crawl of a catalog with empty content is a signal to simplify structure or close the section. Rare important URLs — strengthen internal links and the sitemap.",
      ],
      lists: [
        {
          intro: "Checklist after log review:",
          items: [
            "fix the most frequent 404s that have internal links",
            "remove/merge parameter duplicates",
            "align robots.txt and noindex with the goal",
            "update the sitemap of priority URLs",
            "re-check a log slice in 2–4 weeks",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Cleaning crawl is part of technical prep. Ranking growth for the keyword set is planned for 2–6 months after systematic work starts — not the result of one log cleanup.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

/** ES overlay for logi-servera — same structure as RU JSON / EN. */
export const logiServeraEs: BlogPost = {
  slug: "logi-servera",
  title: "Logs del servidor y comportamiento de los crawlers",
  date: "2021-07-19",
  category: "SEO",
  cover: "/images/blog/logi-servera/cover.webp",
  excerpt:
    "Cómo leer access logs del sitio: User-Agents de crawlers, códigos de estado, crawl budget, duplicados y errores de escaneo — junto a tools de Webmaster y Search Console.",
  lead: [
    "Los logs del servidor registran quién pidió qué: personas, CDN, monitoring y bots de búsqueda. Muestran la actividad real de crawl — no solo lo que resumen los paneles de Search Console y Webmaster.",
    "Abajo: qué mirar en access logs, cómo estimar crawl budget, encontrar URLs que desperdician y pillar errores de escaneo. Cerrar páginas del índice y una auditoría técnica completa son temas relacionados en artículos aparte.",
  ],
  faq: [
    {
      q: "¿Para qué logs si ya tengo Webmaster / Search Console?",
      a: "Los paneles dan resúmenes y muestras. Los logs son el stream completo de peticiones al servidor: bots raros, media, URLs raras y códigos de estado exactos.",
    },
    {
      q: "¿Dónde saco access.log?",
      a: "En hosting / VPS: el directorio de logs del web server (a menudo `/var/log/nginx/` o el panel del hosting). El formato depende de Apache/Nginx y los ajustes.",
    },
    {
      q: "¿Qué es crawl budget?",
      a: "Un límite aproximado de atención del crawler al sitio en un periodo. Duplicados, parámetros, secciones pesadas y 4xx/5xx lo comen. El goal — que el bot visite URLs importantes con más frecuencia.",
    },
    {
      q: "¿Puedo arreglar SEO solo con logs?",
      a: "No. Los logs diagnostican el crawl. Luego — arreglos de robots/canonical/estructura, contenido y técnica. Ver los artículos de auditoría técnica y cierre de indexación.",
    },
    {
      q: "¿Necesito un Log File Analyzer de pago?",
      a: "Al empezar basta un export + Excel/Google Sheets o un script. Los analyzers aceleran volúmenes grandes; nombres y planes cambian.",
    },
  ],
  sections: [
    {
      title: "Qué son los logs del servidor",
      level: 2,
      paras: [
        "Un access log es una cronología de peticiones HTTP: IP, hora, método, URL, código de estado, User-Agent, a veces referrer y tamaño de respuesta. Un error log son fallos de app/servidor; para SEO suele importar más el access.",
        "Los crawlers dejan User-Agents característicos (Googlebot, YandexBot y otros). No toda cadena «tipo bot» es un crawler oficial: verifica IP/docs del buscador cuando haya duda.",
      ],
      lists: [
        {
          intro: "Campos típicos:",
          items: [
            "fecha y hora",
            "URL pedida",
            "código HTTP (200, 301, 404, 500…)",
            "User-Agent",
            "método GET/POST",
          ],
        },
      ],
      links: [
        {
          label: "Bases del web server",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Cómo abrir y parsear un log",
      level: 2,
      paras: [
        "Los archivos `.log` se ven fácil en un editor o se importan a una hoja (a menudo CSV / separados por espacios). Varios archivos diarios se unen (`cat` / merge del panel) antes de analizar un periodo.",
        "Filtra líneas del User-Agent necesario, ordena por URL y código de estado. Tablas dinámicas: hits por URL, cuota de 404 para el bot, paths que queman más crawl budget.",
      ],
      lists: [
        {
          intro: "Orden rápido:",
          items: [
            "toma un corte de semana–mes",
            "filtra Googlebot / YandexBot",
            "URLs con más conteo de peticiones",
            "cuota de respuestas no-200",
            "URLs con `?` y duplicados claros",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "No guardes ni publiques logs crudos con IPs de usuarios sin necesidad — son datos personales y carga de disco. Para análisis SEO bastan agregados anonimizados.",
        },
      ],
    },
    {
      title: "Crawl budget y prioridades",
      level: 2,
      paras: [
        "Si el bot pega sin parar a filtros, sesiones, favicons y paginación vacía, las páginas de servicio importantes se actualizan menos. En logs eso se ve como hits frecuentes a paths «basura» y visitas raras a money pages.",
        "Corta ruido: canonicals y URLs unificadas, cierra paths de utilidad del crawl/índice según haga falta, respuestas más rápidas, menos cadenas de redirect, linking interno sólido a prioridades.",
      ],
      lists: [
        {
          intro: "Qué suele comer presupuesto:",
          items: [
            "duplicados por parámetros",
            "filtros y sorts sin fin",
            "enlaces rotos (404 masivos)",
            "media pesada que no necesita indexarse",
            "áreas admin dejadas abiertas al crawl",
          ],
        },
      ],
      links: [
        {
          label: "Excluir páginas del índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Errores de crawl y qué arreglar",
      level: 2,
      paras: [
        "Mira 4xx/5xx para bots: enlaces internos rotos, redirects obsoletos, timeouts. Cruza con informes de crawl en Google Search Console y otras tools de webmaster — CDN y sampling pueden dejar huecos.",
        "Crawl pesado de un catálogo con contenido vacío es señal de simplificar estructura o cerrar la sección. URLs importantes raras — refuerza linking interno y el sitemap.",
      ],
      lists: [
        {
          intro: "Checklist tras revisar el log:",
          items: [
            "arreglar los 404 más frecuentes que tienen enlaces internos",
            "quitar/fusionar duplicados por parámetros",
            "alinear robots.txt y noindex con el goal",
            "actualizar el sitemap de URLs prioritarias",
            "volver a chequear un corte de log en 2–4 semanas",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Limpiar el crawl es parte de la prep técnica. El crecimiento de ranking del set de keywords se planifica a 2–6 meses tras empezar el trabajo sistemático — no el resultado de una sola limpieza de log.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

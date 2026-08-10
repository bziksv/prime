import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibka-502 — same structure as RU JSON. */
export const oshibka502En: BlogPost = {
  slug: "oshibka-502",
  title: "502 Bad Gateway: what it means and what to do",
  date: "2021-03-02",
  category: "SEO",
  cover: "/images/blog/oshibka-502/cover-en.webp",
  excerpt:
    "What HTTP 502 Bad Gateway means, the usual causes on site and hosting, and a calm diagnosis order — without panic or “magic” plugins.",
  lead: [
    "502 Bad Gateway means a proxy or gateway (often nginx or a CDN) did not get a valid response from the upstream — PHP, Apache, or your app.",
    "It is not an “SEO penalty.” A site that stays down still loses traffic and crawl while the error hangs. Below: common causes and what to check.",
  ],
  faq: [
    {
      q: "Is 502 an SEO problem?",
      a: "Indirectly: bots and visitors cannot see the page. Long downtime hurts. The code itself is about infrastructure, not a ranking filter.",
    },
    {
      q: "How is it different from 500 and 504?",
      a: "500 is an application error. 504 means the gateway timed out waiting. 502 means the backend response was missing or broken.",
    },
    {
      q: "Can a visitor see it when I don’t?",
      a: "Yes — local cache, another CDN POP, or a short blip. Check in a private window and with an external uptime check.",
    },
    {
      q: "Will changing DNS fix it right away?",
      a: "Rarely as first aid. Start with logs, backend status, and PHP or worker limits.",
    },
    {
      q: "Should you redirect around a 502?",
      a: "No. Fix the server or app. Do not paper over 502 with a redirect.",
    },
    {
      q: "Should you clear cache on a 502?",
      a: "Only if you have reason to think a bad response was cached. Clearing cache does not replace checking the backend, logs, and limits.",
    },
    {
      q: "When should you contact hosting support?",
      a: "Immediately if you lack server access or logs show infrastructure faults. Send the error time, URL, status code, and what you already checked.",
    },
  ],
  sections: [
    {
      title: "Typical causes",
      level: 2,
      paras: [
        "PHP-FPM or the app is down or not answering, an upstream timeout expired, the server is overloaded, the proxy config is broken, the CDN is glitching, or SSL between proxy and backend is failing.",
        "The same page may return 502 only under load — for example a heavy database query that ties up every worker. Note the exact time and URL; a screenshot of the error page alone is not enough.",
      ],
      lists: [
        {
          intro: "Often shows up after:",
          items: [
            "a deploy or config change",
            "a traffic spike",
            "stuck CMS plugins",
            "hitting hosting limits",
          ],
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: [
        "Check hosting status and your uptime monitor. Read nginx or Apache logs and PHP logs. Restart the PHP pool or container only by your usual procedure. Disable a recently installed CMS plugin if the timing lines up with the error.",
        "Do not start by randomly changing DNS, PHP version, or a dozen settings. Localize the layer first: CDN, web server, app, database, or an external API. That way the fix does not hide the cause — or create a new one.",
      ],
      lists: [
        {
          intro: "Order of checks:",
          items: [
            "confirm 502 from outside (`curl -I`)",
            "gateway and application logs",
            "CPU, RAM, and disk load",
            "upstream timeouts",
            "roll back the last change",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "Prevention",
      level: 2,
      paras: [
        "You need uptime monitoring, sane limits, staging before release, cache and queues for heavy jobs, and some resource headroom.",
        "Do not watch only the homepage. Include checkout, login, forms, APIs, and a few key category pages — they often stress the app differently than a static home.",
      ],
      lists: [
        {
          intro: "For the SEO team:",
          items: [
            "alert when key URLs return 5xx",
            "do not confuse 502 with a search filter",
            "after recovery, check indexing of important pages",
          ],
        },
      ],
    },
    {
      title: "Diagnosis via logs and metrics",
      level: 2,
      paras: [
        "In the proxy log, find the request by time, URI, and request id, then match it to the app log. Messages about connect() failed, premature response, timeout, or exhausted workers tell you where to dig next.",
        "Metrics help tell a one-off blip from a systemic issue. Watch CPU and memory, disk space, process count, database response time, and the request queue before, during, and after the incident.",
      ],
      lists: [
        {
          intro: "Before you ping a developer or host, prepare:",
          items: [
            "exact URL and time with timezone",
            "status code and how often it repeats",
            "log snippets without passwords or tokens",
            "list of recent releases and config changes",
          ],
        },
      ],
    },
    {
      title: "What to check after recovery",
      level: 2,
      paras: [
        "After the fix, hit the URLs again from outside, in a private window, and via monitoring. Make sure the error did not vanish on one node or in local cache only — and that key user flows still work.",
        "If bots and visitors saw 502 for a long stretch, check webmaster reports and crawl trends. Do not auto-request a recrawl of thousands of URLs until the server response is stable.",
      ],
      lists: [
        {
          intro: "Close the incident when:",
          items: [
            "several checks return the expected codes",
            "load and log errors look normal again",
            "cause and actions are written down",
            "a clear alert is set for a repeat",
          ],
        },
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "Clearing 502 restores crawl and UX. It is not a shortcut to page one: once the site is stable, ranking work for a query core is still planned over roughly 2–6 months.",
        },
      ],
    },
  ],
};

/** ES overlay for oshibka-502 — same structure as RU JSON / EN. */
export const oshibka502Es: BlogPost = {
  slug: "oshibka-502",
  title: "502 Bad Gateway: qué significa y qué hacer",
  date: "2021-03-02",
  category: "SEO",
  cover: "/images/blog/oshibka-502/cover-es.webp",
  excerpt:
    "Qué significa HTTP 502 Bad Gateway, las causas habituales en sitio y hosting, y un orden de diagnóstico tranquilo — sin pánico ni plugins «mágicos».",
  lead: [
    "502 Bad Gateway significa que un proxy o gateway (a menudo nginx o un CDN) no recibió una respuesta válida del upstream — PHP, Apache o tu app.",
    "No es una «penalización SEO». Un sitio que se queda caído sigue perdiendo tráfico y crawl mientras el error cuelga. Abajo: causas comunes y qué revisar.",
  ],
  faq: [
    {
      q: "¿El 502 es un problema SEO?",
      a: "De forma indirecta: bots y visitantes no pueden ver la página. Un downtime largo duele. El código en sí habla de infraestructura, no de un filtro de ranking.",
    },
    {
      q: "¿En qué se diferencia de 500 y 504?",
      a: "500 es un error de aplicación. 504 significa que el gateway agotó el tiempo de espera. 502 significa que la respuesta del backend faltaba o estaba rota.",
    },
    {
      q: "¿Puede verlo un visitante y yo no?",
      a: "Sí — caché local, otro POP del CDN o un blip corto. Revisa en ventana privada y con un check externo de uptime.",
    },
    {
      q: "¿Cambiar DNS lo arregla al momento?",
      a: "Rara vez como primeros auxilios. Empieza por logs, estado del backend y límites de PHP o workers.",
    },
    {
      q: "¿Debes hacer redirect alrededor de un 502?",
      a: "No. Arregla el servidor o la app. No tapes un 502 con un redirect.",
    },
    {
      q: "¿Debes vaciar caché ante un 502?",
      a: "Solo si tienes motivo para pensar que se cacheó una respuesta mala. Vaciar caché no sustituye revisar backend, logs y límites.",
    },
    {
      q: "¿Cuándo contactar al soporte del hosting?",
      a: "De inmediato si no tienes acceso al servidor o los logs muestran fallos de infraestructura. Envía la hora del error, URL, código de estado y lo que ya revisaste.",
    },
  ],
  sections: [
    {
      title: "Causas típicas",
      level: 2,
      paras: [
        "PHP-FPM o la app está caída o no responde, expiró un timeout de upstream, el servidor está sobrecargado, la config del proxy está rota, el CDN falla, o el SSL entre proxy y backend se rompe.",
        "La misma página puede devolver 502 solo bajo carga — por ejemplo una query pesada a la base que ata todos los workers. Anota la hora exacta y la URL; un screenshot de la página de error solo no basta.",
      ],
      lists: [
        {
          intro: "A menudo aparece después de:",
          items: [
            "un deploy o cambio de config",
            "un pico de tráfico",
            "plugins de CMS atascados",
            "tocar límites del hosting",
          ],
        },
      ],
    },
    {
      title: "Cómo arreglarlo",
      level: 2,
      paras: [
        "Revisa el estado del hosting y tu monitor de uptime. Lee logs de nginx o Apache y logs de PHP. Reinicia el pool PHP o el contenedor solo según tu procedimiento habitual. Desactiva un plugin de CMS recién instalado si el timing encaja con el error.",
        "No empieces cambiando DNS, versión de PHP o una docena de ajustes al azar. Localiza primero la capa: CDN, web server, app, base de datos o una API externa. Así el arreglo no oculta la causa — ni crea una nueva.",
      ],
      lists: [
        {
          intro: "Orden de chequeos:",
          items: [
            "confirma 502 desde fuera (`curl -I`)",
            "logs del gateway y de la aplicación",
            "carga de CPU, RAM y disco",
            "timeouts de upstream",
            "rollback del último cambio",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/es/blog/veb-server/",
        },
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
      ],
    },
    {
      title: "Prevención",
      level: 2,
      paras: [
        "Necesitas monitoring de uptime, límites sensatos, staging antes del release, caché y colas para trabajos pesados, y algo de holgura de recursos.",
        "No mires solo la home. Incluye checkout, login, formularios, APIs y unas cuantas páginas de categoría clave — a menudo estresan la app distinto que una home estática.",
      ],
      lists: [
        {
          intro: "Para el equipo SEO:",
          items: [
            "alerta cuando URLs clave devuelven 5xx",
            "no confundas 502 con un filtro de búsqueda",
            "tras la recuperación, revisa la indexación de páginas importantes",
          ],
        },
      ],
    },
    {
      title: "Diagnóstico vía logs y métricas",
      level: 2,
      paras: [
        "En el log del proxy, encuentra la petición por hora, URI e id de request, luego crúzala con el log de la app. Mensajes sobre connect() failed, premature response, timeout o workers agotados te dicen dónde cavar después.",
        "Las métricas ayudan a separar un blip puntual de un issue sistémico. Mira CPU y memoria, espacio en disco, conteo de procesos, tiempo de respuesta de la base y la cola de peticiones antes, durante y después del incidente.",
      ],
      lists: [
        {
          intro: "Antes de avisar a un developer o al host, prepara:",
          items: [
            "URL exacta y hora con timezone",
            "código de estado y con qué frecuencia se repite",
            "trozos de log sin contraseñas ni tokens",
            "lista de releases recientes y cambios de config",
          ],
        },
      ],
    },
    {
      title: "Qué revisar tras la recuperación",
      level: 2,
      paras: [
        "Tras el arreglo, vuelve a pegar las URLs desde fuera, en ventana privada y vía monitoring. Asegura que el error no desapareció solo en un nodo o en caché local — y que los flujos clave de usuario siguen funcionando.",
        "Si bots y visitantes vieron 502 durante un tramo largo, revisa informes de webmaster y tendencias de crawl. No pidas recrawl automático de miles de URLs hasta que la respuesta del servidor sea estable.",
      ],
      lists: [
        {
          intro: "Cierra el incidente cuando:",
          items: [
            "varios checks devuelven los códigos esperados",
            "carga y errores de log vuelven a verse normales",
            "causa y acciones quedan anotadas",
            "hay una alerta clara ante una repetición",
          ],
        },
      ],
      notes: [
        {
          title: "Nota SEO",
          kind: "tip",
          text: "Limpiar un 502 restaura crawl y UX. No es un atajo a primera página: una vez el sitio está estable, el trabajo de ranking de un núcleo de consultas sigue planificado a unos 2–6 meses.",
        },
      ],
    },
  ],
};

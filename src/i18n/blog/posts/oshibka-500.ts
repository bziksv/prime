import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibka-500 — same structure as RU JSON. */
export const oshibka500En: BlogPost = {
  slug: "oshibka-500",
  title: "HTTP 500 Internal Server Error: what it means and how to fix it",
  date: "2020-07-21",
  category: "SEO",
  cover: "/images/blog/oshibka-500/cover-en.webp",
  excerpt:
    "What HTTP 500 means, how it differs from 502/504, typical CMS and hosting causes, and a clear diagnosis order — without “magic” fix plugins.",
  lead: [
    "500 Internal Server Error means the request reached the server, but the app or its config crashed while handling it. Users and bots don’t get the page.",
    "Below: how 500 differs from nearby 5xx codes, where to look, and in what order to fix. It isn’t a “search penalty,” but long downtime still cuts traffic and crawl.",
  ],
  faq: [
    {
      q: "Is a 500 an SEO problem?",
      a: "Indirectly — the page is down. Long or widespread 5xx hurts UX and indexing. The code itself is about server/app failure, not a ranking filter.",
    },
    {
      q: "How does 500 differ from 502 and 504?",
      a: "500 — the app or its environment failed. 502 — the gateway got a bad backend reply. 504 — the gateway timed out waiting. More on gateways in the 502 article.",
    },
    {
      q: "Can only some visitors see a 500?",
      a: "Yes: one URL, a form, a heavy report, cache, or another node in a cluster. Check in a private window and from outside (`curl -I`).",
    },
    {
      q: "Should I switch the WordPress theme blindly?",
      a: "Sometimes as a test — if you have a backup and staging. Better start with logs and the last change (plugin, deploy, `.htaccess`).",
    },
    {
      q: "Should I redirect away from a 500?",
      a: "No. Fix the cause. A redirect masks the symptom and muddies diagnosis.",
    },
    {
      q: "When do I call hosting?",
      a: "When you lack log or server access, the disk is full, PHP/memory limits are maxed out, or the provider shows an incident. Send time, URL, and status code.",
    },
    {
      q: "Do rankings drop immediately?",
      a: "A short blip usually passes. Days of downtime on key URLs risk crawl and conversions. Stabilize first, then request recrawl.",
    },
  ],
  sections: [
    {
      title: "What 500 Internal Server Error means",
      level: 2,
      paras: [
        "A 5xx code: the server accepted the request but couldn’t finish it cleanly. Unlike 404 (missing resource) or 403 (forbidden), the cause is almost always inside — code, config, resources, dependencies.",
        "The browser shows a generic error page; details live in app and web-server logs. Users only need “the site is broken”; owners need where exactly.",
      ],
      lists: [
        {
          intro: "Typical context:",
          items: [
            "after a CMS or plugin update",
            "after editing `.htaccess` or nginx",
            "on a specific form or report under load",
            "when memory is short or PHP times out",
          ],
        },
      ],
      links: [
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Common causes",
      level: 2,
      paras: [
        "The list is long, but recent changes and environment limits win most often. Ask what changed in the last hour or day: deploy, plugin, file permissions, PHP version.",
        "A broken `.htaccess`, rewrite syntax error, module conflict, outdated plugin after a core update — classics for WordPress and similar CMS.",
      ],
      lists: [
        {
          intro: "Check first:",
          items: [
            "PHP / app logs and the web-server error_log",
            "the last deploy and DB migrations",
            "new or updated plugins and theme",
            "`.htaccess` and rewrite config",
            "memory_limit, max_execution_time, disk space",
            "permissions on cache and upload folders",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Don’t install a random “500 fix plugin” on production. Backup first, read logs, and disable the last change on staging or via FTP/SSH.",
        },
      ],
    },
    {
      title: "How to diagnose",
      level: 2,
      paras: [
        "Confirm the code from outside: `curl -I https://example.com/problem-url/`. Lock time, URL, and whether it reproduces. Without that, hosting and developers guess.",
        "Match the error time to the logs. Fatal error, Allowed memory size, syntax error, rewrite loop point to the layer. If 500 hits only one scenario — look at that form’s code or heavy SQL, not “the whole server.”",
      ],
      lists: [
        {
          intro: "Order of operations:",
          items: [
            "confirm 500 from outside and in a private window",
            "open app and web-server logs",
            "roll back or disable the last change",
            "check disk, inodes, PHP limits",
            "on a CMS — temporarily disable fresh plugins via files if admin is down",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: [
        "A fix removes the cause from the log — it isn’t changing DNS “just in case.” Restore a broken `.htaccess` from backup or rebuild with the CMS’s stock rules. A Fatal-error plugin: rename its folder to disable it.",
        "If a script exceeds limits — optimize the query/code or raise adequate plan limits (not infinitely). Cheap hosting with constant 500 at peaks is a resource problem, not only a “file to patch.”",
      ],
      lists: [
        {
          intro: "Working steps:",
          items: [
            "backup before edits",
            "roll back deploy / plugin / config change",
            "fix syntax and dependencies",
            "check permissions and file ownership",
            "re-run `curl` and the user path",
          ],
        },
      ],
    },
    {
      title: "CMS traps",
      level: 2,
      paras: [
        "On WordPress and similar tools the admin itself can return 500 — then fix via FTP/SSH: rename the fresh plugin folder, switch to a spare theme, temporarily simplify `.htaccess`.",
        "After recovery, restore pretty-URL rules and check forms, cart, and login: “home opened” ≠ “everything works.”",
      ],
      lists: [
        {
          intro: "After the incident:",
          items: [
            "update core and plugins on staging",
            "remove abandoned modules",
            "monitor key URLs",
            "write the cause in a ticket or team chat",
          ],
        },
      ],
      links: [
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prevention and an SEO view",
      level: 2,
      paras: [
        "Staging before release, backups, uptime alerts on home and key paths, CPU/RAM headroom — basic hygiene. For SEO teams, 5xx in Search Console / webmaster tools means fix availability — not buy more links.",
        "After long downtime, check indexation of important URLs and crawl. A mass “recrawl everything” before the response is stable only adds load.",
      ],
      lists: [
        {
          intro: "Control minimum:",
          items: [
            "alert if main URLs return 5xx",
            "don’t confuse 500 with a search filter",
            "releases via staging",
            "logs rotate and stay available to the team",
          ],
        },
      ],
    },
  ],
  closing: [
    "500 is a signal to fix the app and environment — not to mask the response with a redirect. Logs, the last change, and an outside check close most cases faster than switching host “for luck.”",
  ],
};

/** ES overlay for oshibka-500 — same structure as RU JSON / EN. */
export const oshibka500Es: BlogPost = {
  slug: "oshibka-500",
  title: "HTTP 500 Internal Server Error: qué significa y cómo arreglarlo",
  date: "2020-07-21",
  category: "SEO",
  cover: "/images/blog/oshibka-500/cover-es.webp",
  excerpt:
    "Qué significa HTTP 500, en qué se diferencia de 502/504, causas típicas de CMS y hosting, y un orden claro de diagnóstico — sin plugins «mágicos» de fix.",
  lead: [
    "500 Internal Server Error significa que la request llegó al servidor, pero la app o su config falló al manejarla. Usuarios y bots no reciben la página.",
    "Abajo: cómo difiere el 500 de códigos 5xx cercanos, dónde mirar y en qué orden arreglar. No es una «penalización de búsqueda», pero un downtime largo igual corta tráfico y crawl.",
  ],
  faq: [
    {
      q: "¿Un 500 es un problema de SEO?",
      a: "De forma indirecta — la página está caída. Un 5xx largo o generalizado daña UX e indexación. El código en sí habla de fallo de servidor/app, no de un filtro de ranking.",
    },
    {
      q: "¿En qué se diferencia el 500 del 502 y del 504?",
      a: "500 — falló la app o su entorno. 502 — el gateway recibió una mala respuesta del backend. 504 — el gateway agotó el tiempo de espera. Más sobre gateways en el artículo del 502.",
    },
    {
      q: "¿Solo algunos visitantes pueden ver un 500?",
      a: "Sí: una URL, un formulario, un reporte pesado, caché u otro nodo en un cluster. Revisa en ventana privada y desde fuera (`curl -I`).",
    },
    {
      q: "¿Debo cambiar el theme de WordPress a ciegas?",
      a: "A veces como test — si tienes backup y staging. Mejor empezar por logs y el último cambio (plugin, deploy, `.htaccess`).",
    },
    {
      q: "¿Debo redirigir lejos de un 500?",
      a: "No. Arregla la causa. Un redirect enmascara el síntoma y ensucia el diagnóstico.",
    },
    {
      q: "¿Cuándo llamo al hosting?",
      a: "Cuando no tienes acceso a logs o al servidor, el disco está lleno, los límites de PHP/memoria están al máximo, o el proveedor muestra un incidente. Envía hora, URL y código de estado.",
    },
    {
      q: "¿Los rankings caen de inmediato?",
      a: "Un blip corto suele pasar. Días de downtime en URLs clave arriesgan crawl y conversiones. Primero estabiliza, luego pide recrawl.",
    },
  ],
  sections: [
    {
      title: "Qué significa 500 Internal Server Error",
      level: 2,
      paras: [
        "Un código 5xx: el servidor aceptó la request pero no pudo terminarla limpia. A diferencia de 404 (recurso ausente) o 403 (prohibido), la causa casi siempre está dentro — código, config, recursos, dependencias.",
        "El navegador muestra una página de error genérica; el detalle vive en los logs de la app y del web server. Al usuario solo le basta «el sitio está roto»; al dueño le hace falta el dónde exacto.",
      ],
      lists: [
        {
          intro: "Contexto típico:",
          items: [
            "tras un update de CMS o plugin",
            "tras editar `.htaccess` o nginx",
            "en un formulario o reporte concreto bajo carga",
            "cuando falta memoria o PHP hace timeout",
          ],
        },
      ],
      links: [
        {
          label: "Códigos de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
        {
          label: "Error 502",
          href: "/es/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Causas habituales",
      level: 2,
      paras: [
        "La lista es larga, pero ganan con más frecuencia los cambios recientes y los límites del entorno. Pregunta qué cambió en la última hora o día: deploy, plugin, permisos de archivo, versión de PHP.",
        "Un `.htaccess` roto, error de sintaxis en rewrite, conflicto de módulos, plugin desactualizado tras un update del core — clásicos de WordPress y CMS similares.",
      ],
      lists: [
        {
          intro: "Revisa primero:",
          items: [
            "logs de PHP / app y el error_log del web server",
            "el último deploy y migraciones de DB",
            "plugins y theme nuevos o actualizados",
            "`.htaccess` y config de rewrite",
            "memory_limit, max_execution_time, espacio en disco",
            "permisos en carpetas de caché y upload",
          ],
        },
      ],
      notes: [
        {
          title: "Error común",
          kind: "tip",
          text: "No instales un «plugin fix 500» al azar en producción. Primero backup, lee logs y desactiva el último cambio en staging o vía FTP/SSH.",
        },
      ],
    },
    {
      title: "Cómo diagnosticar",
      level: 2,
      paras: [
        "Confirma el código desde fuera: `curl -I https://example.com/problem-url/`. Fija hora, URL y si se reproduce. Sin eso, hosting y desarrolladores adivinan.",
        "Cruza la hora del error con los logs. Fatal error, Allowed memory size, syntax error, rewrite loop apuntan a la capa. Si el 500 solo pega en un escenario — mira el código de ese formulario o el SQL pesado, no «todo el servidor».",
      ],
      lists: [
        {
          intro: "Orden de operaciones:",
          items: [
            "confirma 500 desde fuera y en ventana privada",
            "abre logs de app y web server",
            "haz rollback o desactiva el último cambio",
            "revisa disco, inodes, límites de PHP",
            "en un CMS — desactiva temporalmente plugins frescos vía archivos si el admin está caído",
          ],
        },
      ],
      links: [
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Cómo arreglarlo",
      level: 2,
      paras: [
        "Un fix quita la causa del log — no es cambiar DNS «por si acaso». Restaura un `.htaccess` roto desde backup o reconstrúyelo con las reglas stock del CMS. Un plugin con Fatal error: renombra su carpeta para desactivarlo.",
        "Si un script supera límites — optimiza la query/código o sube límites adecuados del plan (no al infinito). Hosting barato con 500 constante en picos es un problema de recursos, no solo un «archivo que parchear».",
      ],
      lists: [
        {
          intro: "Pasos que funcionan:",
          items: [
            "backup antes de editar",
            "rollback de deploy / plugin / cambio de config",
            "arreglar sintaxis y dependencias",
            "revisar permisos y ownership de archivos",
            "volver a correr `curl` y el path del usuario",
          ],
        },
      ],
    },
    {
      title: "Trampas del CMS",
      level: 2,
      paras: [
        "En WordPress y tools similares el propio admin puede devolver 500 — entonces arregla vía FTP/SSH: renombra la carpeta del plugin fresco, cambia a un theme de repuesto, simplifica temporalmente `.htaccess`.",
        "Tras la recuperación, restaura reglas de pretty-URL y revisa formularios, carrito y login: «abrió la home» ≠ «todo funciona».",
      ],
      lists: [
        {
          intro: "Tras el incidente:",
          items: [
            "actualiza core y plugins en staging",
            "quita módulos abandonados",
            "monitoriza URLs clave",
            "escribe la causa en un ticket o chat del equipo",
          ],
        },
      ],
      links: [
        {
          label: "Panel de admin del sitio",
          href: "/es/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prevención y mirada SEO",
      level: 2,
      paras: [
        "Staging antes del release, backups, alertas de uptime en home y paths clave, headroom de CPU/RAM — higiene básica. Para equipos SEO, 5xx en Search Console / webmaster tools significa arreglar disponibilidad — no comprar más enlaces.",
        "Tras un downtime largo, revisa indexación de URLs importantes y crawl. Un «recrawl de todo» masivo antes de que la respuesta sea estable solo añade carga.",
      ],
      lists: [
        {
          intro: "Mínimo de control:",
          items: [
            "alerta si las URLs principales devuelven 5xx",
            "no confundas 500 con un filtro de búsqueda",
            "releases vía staging",
            "los logs rotan y quedan disponibles para el equipo",
          ],
        },
      ],
    },
  ],
  closing: [
    "500 es una señal para arreglar la app y el entorno — no para enmascarar la respuesta con un redirect. Logs, el último cambio y un check desde fuera cierran la mayoría de casos más rápido que cambiar de host «por suerte».",
  ],
};

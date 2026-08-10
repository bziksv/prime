import type { BlogPost } from "../../../data/blog";

/** EN overlay for http-zagolovki — same structure as RU JSON. */
export const httpZagolovkiEn: BlogPost = {
  slug: "http-zagolovki",
  title: "HTTP security headers: what to configure on a site",
  date: "2020-01-13",
  category: "SEO",
  cover: "/images/blog/http-zagolovki/cover-en.webp",
  excerpt:
    "Which HTTP headers strengthen site security: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy — how to check and where to set them without breaking the layout.",
  lead: [
    "HTTP headers are service fields in the server response: they tell the browser how to treat the page (content type, cache, redirect, security rules). Some of them directly cut XSS, clickjacking, and data-leak risks.",
    "Below: a practical security-header set. The general request/response picture is in the HTTP protocol article; here the focus is protection. Before edits — config backup and a staging check.",
  ],
  faq: [
    {
      q: "Where do you view headers?",
      a: "DevTools → Network → document response, `curl -I https://site/`, online security-header scanners. Check the live HTTPS host.",
    },
    {
      q: "Where do you set them?",
      a: "In the web-server config (nginx, Apache/`.htaccess`), sometimes in the app (PHP `header()`, middleware). Prefer server/CDN — once for the whole site.",
    },
    {
      q: "Is X-XSS-Protection still needed?",
      a: "In modern browsers it’s outdated and can hurt. Rely on CSP, not the old XSS filter. Don’t treat it as the base of protection.",
    },
    {
      q: "Will CSP break the site?",
      a: "A strict CSP that ignores scripts — yes. Start with Report-Only or a soft policy, watch reports, then tighten.",
    },
    {
      q: "Can you use HSTS without HTTPS?",
      a: "No. First stable HTTPS and http→https redirect, then HSTS.",
    },
    {
      q: "Does this affect SEO?",
      a: "Indirectly: security and trust, less risk of hacks/spam. There’s no direct “header for page one.” Rankings follow site work; planned months after SEO starts.",
    },
    {
      q: "Feature-Policy or Permissions-Policy?",
      a: "The current name is Permissions-Policy (limits camera, geolocation, etc.). Older Feature-Policy still appears in guides.",
    },
  ],
  sections: [
    {
      title: "What HTTP headers are",
      level: 2,
      paras: [
        "When a URL opens, the browser gets not only HTML but response metadata: `Content-Type`, `Location`, `Cache-Control`, cookie flags, security directives. Without them the protocol doesn’t know how to show the page safely.",
        "Security headers don’t replace CMS updates and passwords. They’re a browser protection layer on top of normal server hygiene.",
      ],
      lists: [
        {
          intro: "Before setup:",
          items: [
            "backup nginx/Apache/`.htaccess`",
            "test on a site copy",
            "list your domains, CDN, analytics, widgets",
          ],
        },
      ],
      links: [
        {
          label: "HTTP protocol",
          href: "/en/blog/protokol-http/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "HSTS: HTTPS only",
      level: 2,
      paras: [
        "`Strict-Transport-Security` tells the browser: for this host, use HTTPS only for a set time. It cuts risk of falling back to open HTTP and some downgrade attacks.",
        "Enable after the certificate and redirects are stable. `includeSubDomains` and `preload` — on purpose: a bad preload is hard to undo.",
      ],
    },
    {
      title: "Clickjacking and MIME: X-Frame-Options, X-Content-Type-Options",
      level: 2,
      paras: [
        "`X-Frame-Options` (and CSP `frame-ancestors`) limits embedding the site in other pages’ iframes — clickjacking protection. Typical values: `DENY` or `SAMEORIGIN`.",
        "`X-Content-Type-Options: nosniff` stops the browser guessing a file type past the declared `Content-Type` — fewer surprises with script execution.",
      ],
    },
    {
      title: "CSP: content policy",
      level: 2,
      paras: [
        "`Content-Security-Policy` sets where scripts, styles, images, and frames may load from. It’s the main modern tool against many XSS cases when set correctly.",
        "Start by inventorying domains (your host, CDN, analytics, chat). Report-Only helps see violations without breakage. A sudden `default-src 'none'` without prep almost always breaks widgets.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Inline scripts and `eval` make CSP harder. Plan nonces/hashes or move scripts to files — or the policy stays a leaky `unsafe-inline`.",
        },
      ],
    },
    {
      title: "Referrer-Policy and Permissions-Policy",
      level: 2,
      paras: [
        "`Referrer-Policy` limits how much URL goes into `Referer` on navigations — less path and query leakage. A common balance: `strict-origin-when-cross-origin`.",
        "`Permissions-Policy` (formerly Feature-Policy) disables or limits powerful browser APIs (camera, mic, geolocation) when the site doesn’t need them.",
      ],
      lists: [
        {
          intro: "Minimum set to start:",
          items: [
            "HSTS (after HTTPS)",
            "X-Content-Type-Options: nosniff",
            "frame-ancestors / X-Frame-Options",
            "Referrer-Policy",
            "a CSP draft in Report-Only",
          ],
        },
      ],
    },
    {
      title: "How to roll out and verify",
      level: 2,
      paras: [
        "Set headers in nginx/`add_header`, Apache/`Header set`, or the hosting panel. PHP in the template is a fallback — worse for static and cache.",
        "After deploy check home, login pages, forms, and pages with widgets. Watch the console for CSP errors. Document the policy for the team so a new analytics script doesn’t break prod by surprise.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: ".htaccess and 301",
          href: "/en/blog/htaccess-301/",
        },
      ],
    },
  ],
  closing: [
    "Security headers are an invisible but useful layer: HSTS, anti-frame, nosniff, careful CSP, and referrer/permissions policies. Roll out gradually, test with widgets, and don’t confuse them with full CMS security.",
  ],
};

/** ES overlay for http-zagolovki — same structure as RU JSON / EN. */
export const httpZagolovkiEs: BlogPost = {
  slug: "http-zagolovki",
  title: "Headers HTTP de seguridad: qué configurar en un sitio",
  date: "2020-01-13",
  category: "SEO",
  cover: "/images/blog/http-zagolovki/cover-es.webp",
  excerpt:
    "Qué headers HTTP refuerzan la seguridad del sitio: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy — cómo comprobarlos y dónde fijarlos sin romper el layout.",
  lead: [
    "Los headers HTTP son campos de servicio en la respuesta del servidor: dicen al navegador cómo tratar la página (tipo de contenido, cache, redirect, reglas de seguridad). Algunos cortan de forma directa riesgos de XSS, clickjacking y fugas de datos.",
    "Abajo: un set práctico de headers de seguridad. El panorama general request/response está en el artículo del protocolo HTTP; aquí el foco es protección. Antes de editar — backup del config y prueba en staging.",
  ],
  faq: [
    {
      q: "¿Dónde se ven los headers?",
      a: "DevTools → Network → response del documento, `curl -I https://sitio/`, scanners online de security headers. Revisa el host HTTPS en vivo.",
    },
    {
      q: "¿Dónde se configuran?",
      a: "En el config del servidor web (nginx, Apache/`.htaccess`), a veces en la app (PHP `header()`, middleware). Mejor servidor/CDN — una vez para todo el sitio.",
    },
    {
      q: "¿Sigue haciendo falta X-XSS-Protection?",
      a: "En navegadores modernos está desfasado y puede molestar. Apóyate en CSP, no en el filtro XSS viejo. No lo trates como base de la protección.",
    },
    {
      q: "¿CSP romperá el sitio?",
      a: "Un CSP estricto que ignore scripts — sí. Empieza con Report-Only o una política suave, mira reports y luego aprieta.",
    },
    {
      q: "¿Se puede usar HSTS sin HTTPS?",
      a: "No. Primero HTTPS estable y redirect http→https; luego HSTS.",
    },
    {
      q: "¿Esto afecta al SEO?",
      a: "De forma indirecta: seguridad y confianza, menos riesgo de hacks/spam. No hay un «header para primera página». Los rankings siguen al trabajo en el sitio; meses planificados tras arrancar el SEO.",
    },
    {
      q: "¿Feature-Policy o Permissions-Policy?",
      a: "El nombre actual es Permissions-Policy (limita cámara, geolocalización, etc.). Feature-Policy viejo aún aparece en guías.",
    },
  ],
  sections: [
    {
      title: "Qué son los headers HTTP",
      level: 2,
      paras: [
        "Al abrir una URL, el navegador recibe no solo HTML sino metadata de respuesta: `Content-Type`, `Location`, `Cache-Control`, flags de cookies, directivas de seguridad. Sin ellos el protocolo no sabe cómo mostrar la página con seguridad.",
        "Los headers de seguridad no sustituyen updates del CMS ni contraseñas. Son una capa de protección del navegador encima de la higiene normal del servidor.",
      ],
      lists: [
        {
          intro: "Antes de configurar:",
          items: [
            "backup de nginx/Apache/`.htaccess`",
            "probar en una copia del sitio",
            "listar dominios, CDN, analytics, widgets",
          ],
        },
      ],
      links: [
        {
          label: "Protocolo HTTP",
          href: "/es/blog/protokol-http/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
    {
      title: "HSTS: solo HTTPS",
      level: 2,
      paras: [
        "`Strict-Transport-Security` dice al navegador: para este host, usa solo HTTPS durante un tiempo fijado. Corta el riesgo de volver a HTTP abierto y parte de los ataques de downgrade.",
        "Actívalo cuando el certificado y los redirects estén estables. `includeSubDomains` y `preload` — a propósito: un preload malo cuesta deshacer.",
      ],
    },
    {
      title: "Clickjacking y MIME: X-Frame-Options, X-Content-Type-Options",
      level: 2,
      paras: [
        "`X-Frame-Options` (y CSP `frame-ancestors`) limita embeber el sitio en iframes de otras páginas — protección contra clickjacking. Valores típicos: `DENY` o `SAMEORIGIN`.",
        "`X-Content-Type-Options: nosniff` evita que el navegador adivine el tipo de archivo más allá del `Content-Type` declarado — menos sorpresas con ejecución de scripts.",
      ],
    },
    {
      title: "CSP: política de contenido",
      level: 2,
      paras: [
        "`Content-Security-Policy` fija desde dónde pueden cargarse scripts, estilos, imágenes y frames. Es la herramienta moderna principal contra muchos casos XSS cuando está bien puesta.",
        "Empieza inventariando dominios (tu host, CDN, analytics, chat). Report-Only ayuda a ver violaciones sin roturas. Un `default-src 'none'` de golpe sin prep casi siempre rompe widgets.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Los scripts inline y `eval` complican CSP. Planifica nonces/hashes o mueve scripts a archivos — o la política se queda en un `unsafe-inline` con fugas.",
        },
      ],
    },
    {
      title: "Referrer-Policy y Permissions-Policy",
      level: 2,
      paras: [
        "`Referrer-Policy` limita cuánta URL va en `Referer` en las navegaciones — menos fuga de path y query. Un equilibrio habitual: `strict-origin-when-cross-origin`.",
        "`Permissions-Policy` (antes Feature-Policy) desactiva o limita APIs potentes del navegador (cámara, mic, geolocalización) cuando el sitio no las necesita.",
      ],
      lists: [
        {
          intro: "Set mínimo para empezar:",
          items: [
            "HSTS (tras HTTPS)",
            "X-Content-Type-Options: nosniff",
            "frame-ancestors / X-Frame-Options",
            "Referrer-Policy",
            "un borrador de CSP en Report-Only",
          ],
        },
      ],
    },
    {
      title: "Cómo desplegar y verificar",
      level: 2,
      paras: [
        "Fija headers en nginx/`add_header`, Apache/`Header set` o el panel del hosting. PHP en la plantilla es un fallback — peor para estáticos y cache.",
        "Tras el deploy revisa home, páginas de login, formularios y páginas con widgets. Mira la consola por errores CSP. Documenta la política para el equipo: un script nuevo de analytics no debería romper prod por sorpresa.",
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
        {
          label: ".htaccess y 301",
          href: "/es/blog/htaccess-301/",
        },
      ],
    },
  ],
  closing: [
    "Los headers de seguridad son una capa invisible pero útil: HSTS, anti-frame, nosniff, CSP con cuidado y políticas de referrer/permissions. Despliega poco a poco, prueba con widgets y no los confundas con la seguridad completa del CMS.",
  ],
};

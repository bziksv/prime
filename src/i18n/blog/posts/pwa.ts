import type { BlogPost } from "../../../data/blog";

/** EN overlay for pwa — same structure as RU JSON. */
export const pwaEn: BlogPost = {
  slug: "pwa",
  title: "PWA: what Progressive Web Apps are and when you need them",
  date: "2019-09-10",
  category: "Digital marketing",
  cover: "/images/blog/pwa/cover-en.webp",
  excerpt:
    "What a PWA is: a site with a manifest and Service Worker, home-screen install, offline cache, and push. Pros for stores and the limits — without promising an automatic Google ranking boost.",
  lead: [
    "A PWA (Progressive Web App) is a website that behaves closer to an app: you can add it to the home screen, work partly offline, and send notifications where the browser and OS allow.",
    "Below: what a PWA is made of, why business needs it, and site requirements. It doesn’t replace a native store app and isn’t a button to lift SEO — start with a fast responsive site on HTTPS.",
  ],
  faq: [
    {
      q: "Is a PWA installed from the App Store / Google Play?",
      a: "Usually no: the user adds the site from the browser to the home screen. Store publishing scenarios exist, but classic PWA is web + installable.",
    },
    {
      q: "Does a PWA raise search rankings?",
      a: "There’s no direct “PWA bonus.” Indirectly HTTPS, speed, and solid mobile UX help — and you can improve those without a full PWA.",
    },
    {
      q: "What’s technically required?",
      a: "HTTPS, a web manifest (name, icons, start_url), and a Service Worker for cache/offline. Without that, Install won’t work as intended.",
    },
    {
      q: "Does offline mode work fully?",
      a: "Only what you cached and designed for. Cart and order without a network need separate design — not PWA checkbox magic.",
    },
    {
      q: "Do all sites need a PWA?",
      a: "No. It fits repeat visits, catalogs, app-like services. A one-off service landing often only needs a fast mobile layout.",
    },
  ],
  sections: [
    {
      title: "What a PWA can do",
      level: 2,
      paras: [
        "A home-screen icon, launch almost without the browser chrome, static and partial data cache via Service Worker, push notifications where the platform allows.",
        "Large-web examples (maps, media, retail) show a “site = habit” scenario — not a mandatory stack for every business-card site.",
      ],
      lists: [
        {
          intro: "Strengths:",
          items: [
            "one codebase across devices via the browser",
            "faster path to install than native development",
            "less space than a heavy APK",
            "server updates without store moderation",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Pros and cons for business",
      level: 2,
      paras: [
        "For a store and a service with repeat visits, a PWA can cut friction: faster return entry, offline viewing of cached sections, reminders with consent.",
        "Downsides: feature support depends on browser and iOS/Android; push and background jobs are limited; Service Worker build and upkeep is separate engineering. “Install a plugin and forget” on a complex store is risky.",
      ],
      lists: [
        {
          intro: "When to look at PWA:",
          items: [
            "high return traffic",
            "you need a light shortcut without a native app",
            "the site is already fast and on HTTPS",
            "you have capacity to maintain cache and updates",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t promise yourself “PWA = higher in the SERP.” First Core Web Vitals and clear mobile UX; PWA is the next convenience layer.",
        },
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
        {
          label: "AMP pages",
          href: "/en/blog/amp/",
        },
      ],
    },
    {
      title: "Basic site requirements",
      level: 2,
      paras: [
        "HTTPS is mandatory. You need responsive or a solid mobile version. The manifest describes name, icons, and start URL. The Service Worker registers and carefully caches resources without breaking cart and account areas.",
        "Every important page needs a stable URL. Test install and offline on real devices — not only in Lighthouse.",
      ],
      lists: [
        {
          intro: "Checklist before rollout:",
          items: [
            "SSL works on all URLs",
            "mobile UX is acceptable without PWA",
            "manifest and icons are ready",
            "cache strategy is agreed with engineering",
            "there’s a plan to update the SW without sticking on an old version",
          ],
        },
      ],
    },
  ],
  closing: [
    "A PWA turns a site into an installable web experience with cache and (where allowed) notifications. Build one when repeat visits and UX pay for the upkeep; don’t let it replace site speed and honest SEO.",
  ],
  related: [
    "adaptivnyy-sayt",
    "uskorenie-wordpress",
    "amp",
    "mobilnyy-poisk",
    "pered-zapuskom-sayta",
    "bezopasnost-sayta",
  ],
};

/** ES overlay for pwa — same structure as RU JSON / EN. */
export const pwaEs: BlogPost = {
  slug: "pwa",
  title: "PWA: qué son las Progressive Web Apps y cuándo las necesitas",
  date: "2019-09-10",
  category: "Digital marketing",
  cover: "/images/blog/pwa/cover-es.webp",
  excerpt:
    "Qué es una PWA: un sitio con manifest y Service Worker, instalación en la pantalla de inicio, cache offline y push. Pros para tiendas y los límites — sin prometer un boost automático de rankings en Google.",
  lead: [
    "Una PWA (Progressive Web App) es un sitio web que se comporta más cerca de una app: puedes añadirla a la pantalla de inicio, trabajar en parte offline y enviar notificaciones donde el navegador y el OS lo permiten.",
    "Abajo: de qué está hecha una PWA, por qué la necesita el negocio y requisitos del sitio. No sustituye una app nativa de store ni es un botón para subir SEO — empieza con un sitio responsive rápido en HTTPS.",
  ],
  faq: [
    {
      q: "¿Una PWA se instala desde App Store / Google Play?",
      a: "Suele no: el usuario añade el sitio desde el navegador a la pantalla de inicio. Existen escenarios de publicación en stores, pero la PWA clásica es web + instalable.",
    },
    {
      q: "¿Una PWA sube los rankings de búsqueda?",
      a: "No hay un «bonus PWA» directo. De forma indirecta ayudan HTTPS, velocidad y un UX móvil sólido — y eso se puede mejorar sin una PWA completa.",
    },
    {
      q: "¿Qué se requiere técnicamente?",
      a: "HTTPS, un web manifest (nombre, iconos, start_url) y un Service Worker para cache/offline. Sin eso, Install no funcionará como toca.",
    },
    {
      q: "¿El modo offline funciona del todo?",
      a: "Solo lo que cacheaste y diseñaste. Carrito y pedido sin red necesitan un diseño aparte — no magia de checkbox PWA.",
    },
    {
      q: "¿Todos los sitios necesitan una PWA?",
      a: "No. Encaja en visitas repetidas, catálogos, servicios tipo app. Una landing de servicio puntual a menudo solo necesita un layout móvil rápido.",
    },
  ],
  sections: [
    {
      title: "Qué puede hacer una PWA",
      level: 2,
      paras: [
        "Un icono en la pantalla de inicio, lanzamiento casi sin chrome del navegador, cache de datos estáticos y parciales vía Service Worker, push notifications donde la plataforma lo permite.",
        "Ejemplos de la web grande (mapas, media, retail) muestran un escenario «sitio = hábito» — no un stack obligatorio para cada tarjeta de visita.",
      ],
      lists: [
        {
          intro: "Fortalezas:",
          items: [
            "un codebase en dispositivos vía el navegador",
            "camino más rápido a instalar que el desarrollo nativo",
            "menos espacio que un APK pesado",
            "updates de servidor sin moderación de store",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Pros y contras para el negocio",
      level: 2,
      paras: [
        "Para una tienda y un servicio con visitas repetidas, una PWA puede cortar fricción: entrada de vuelta más rápida, vista offline de secciones cacheadas, recordatorios con consentimiento.",
        "Contras: el soporte de features depende del navegador y de iOS/Android; push y jobs en background están limitados; construir y mantener el Service Worker es ingeniería aparte. «Instalar un plugin y olvidar» en una tienda compleja es arriesgado.",
      ],
      lists: [
        {
          intro: "Cuándo mirar PWA:",
          items: [
            "tráfico de retorno alto",
            "necesitas un atajo ligero sin app nativa",
            "el sitio ya es rápido y está en HTTPS",
            "tienes capacidad para mantener cache y updates",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No te prometas «PWA = más alto en la SERP». Primero Core Web Vitals y un UX móvil claro; la PWA es la siguiente capa de comodidad.",
        },
      ],
      links: [
        {
          label: "Acelerar WordPress",
          href: "/es/blog/uskorenie-wordpress/",
        },
        {
          label: "Páginas AMP",
          href: "/es/blog/amp/",
        },
      ],
    },
    {
      title: "Requisitos básicos del sitio",
      level: 2,
      paras: [
        "HTTPS es obligatorio. Hace falta responsive o una versión móvil sólida. El manifest describe nombre, iconos y URL de inicio. El Service Worker se registra y cachea recursos con cuidado sin romper carrito y áreas de cuenta.",
        "Cada página importante necesita una URL estable. Prueba install y offline en dispositivos reales — no solo en Lighthouse.",
      ],
      lists: [
        {
          intro: "Checklist antes del rollout:",
          items: [
            "SSL funciona en todas las URLs",
            "el UX móvil es aceptable sin PWA",
            "manifest e iconos están listos",
            "la estrategia de cache está acordada con ingeniería",
            "hay un plan para actualizar el SW sin quedarse en una versión vieja",
          ],
        },
      ],
    },
  ],
  closing: [
    "Una PWA convierte un sitio en una experiencia web instalable con cache y (donde se permite) notificaciones. Ármala cuando las visitas repetidas y el UX pagan el mantenimiento; no dejes que sustituya la velocidad del sitio y un SEO honesto.",
  ],
  related: [
    "adaptivnyy-sayt",
    "uskorenie-wordpress",
    "amp",
    "mobilnyy-poisk",
    "pered-zapuskom-sayta",
    "bezopasnost-sayta",
  ],
};

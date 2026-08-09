import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-arhiv — same structure as RU JSON. */
export const vebArhivEn: BlogPost = {
  slug: "veb-arhiv",
  title: "What a web archive is: Wayback Machine and why you need it",
  date: "2020-09-17",
  category: "Digital marketing",
  cover: "/images/blog/veb-arhiv/cover-en.webp",
  excerpt:
    "How Internet Archive / Wayback Machine works: find an old page version, understand snapshot gaps, restore your content legally, and limit archiving via robots — without schemes to “steal texts from other domains.”",
  lead: [
    "A web archive stores historical page snapshots. The best-known public service is the Wayback Machine on archive.org: a bot periodically saves URL copies you can open “as it was” on a chosen date.",
    "Below: how to view a site’s history, why a snapshot is sometimes missing, and what to do when you need to recover your own old content. You can’t simply move others’ materials from the archive onto a new domain “to avoid paying authors” — that’s a copyright question.",
  ],
  faq: [
    {
      q: "Is this the same as Yandex or Google cache?",
      a: "Related in idea, different service. Search cache is a fresh snapshot for the index; Wayback is a long snapshot history, often with gaps.",
    },
    {
      q: "Why isn’t the site in the archive?",
      a: "Not crawled yet, blocked by robots or exclusions, removed after a rights complaint, or the owner requested deletion. Not every URL gets archived.",
    },
    {
      q: "Can you restore a whole site with one click?",
      a: "Rarely perfectly: some assets, forms, and scripts weren’t saved. For your project — manual transfer of key pages or specialized exports; vet third-party “restorers” for risk.",
    },
    {
      q: "How do you forbid archiving?",
      a: "Via archive-bot rules in robots.txt and/or Internet Archive exclusion tools. There’s no absolute “never” guarantee, but for many cases it’s enough.",
    },
    {
      q: "Is it legal to copy someone else’s text from the archive?",
      a: "For your own deleted content — usually yes as recovery. For someone else’s — you need rights or a lawful exception; “free copy-paste from an expired domain” is a bad idea.",
    },
  ],
  sections: [
    {
      title: "How to use the Wayback Machine",
      level: 2,
      paras: [
        "Internet Archive (since 1996; Wayback Machine public since the early 2000s) saves web snapshots as a digital library. Volumes and data centers grow; we don’t copy specific “billions of pages” from old press releases as an eternal figure.",
        "Open archive.org, paste a site or page URL. The calendar shows snapshot dates: denser dots mean more frequent crawls. Pick a date — you’ll see HTML and some images/files that were saved.",
        "Save Page Now lets you manually capture a current URL — useful before a major redesign or deleting an important page. It doesn’t replace hosting and database backups.",
        "Gaps happen: a new site wasn’t crawled yet, aggressive robots, legal takedown, crawler glitches. Then try nearby dates or other URLs in the same section.",
      ],
      lists: [
        {
          intro: "Typical marketing and SEO jobs:",
          items: [
            "see a competitor’s old offer",
            "recover your deleted text",
            "check domain history before buying",
            "document proof of publication on a date",
          ],
        },
      ],
      links: [
        {
          label: "Yandex cached copy",
          href: "/en/blog/sohranennaya-kopiya-yandex/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Recovery, rights, and blocking archiving",
      level: 2,
      paras: [
        "If your site went down and there’s no backup: open key URLs in the archive, save text and media, fix internal links by hand. A full clone with all scripts from Wayback doesn’t always work — the archive isn’t obliged to store everything.",
        "Third-party “one-click restorers” appear and vanish; before use, assess security and license. Don’t count on magic: legally and technically it’s simpler to keep your own backups.",
        "Content from abandoned others’ domains in the archive doesn’t become “public domain” just because the site closed. Moving others’ articles to save on copywriting risks claims. Use the archive for research and recovering your own.",
        "To reduce archiving: robots.txt rules for the archive user-agent and current Internet Archive exclusion tools (wording in their help). After a block, old snapshots may remain until the request is processed.",
        "Bottom line: a web archive is a powerful web-history tool. View, recover yours, capture what matters — and don’t build a content strategy on others’ copies without rights.",
      ],
      lists: [
        {
          intro: "Before deleting an important page:",
          items: [
            "file and DB backup",
            "Save Page Now on key URLs",
            "export text into your own repository",
            "301 to a current replacement if the URL leaves the index",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
      ],
    },
  ],
  related: [
    "sohranennaya-kopiya-yandex",
    "analiz-konkurentov",
    "bitye-ssylki",
    "bazy-dannyh-sayta",
    "avtorskie-prava-instagram",
  ],
};

/** ES overlay for veb-arhiv — same structure as RU JSON / EN. */
export const vebArhivEs: BlogPost = {
  slug: "veb-arhiv",
  title: "Qué es un archivo web: Wayback Machine y por qué lo necesitas",
  date: "2020-09-17",
  category: "Digital marketing",
  cover: "/images/blog/veb-arhiv/cover.webp",
  excerpt:
    "Cómo funciona Internet Archive / Wayback Machine: hallar una versión vieja de página, entender huecos de snapshot, recuperar tu contenido con legalidad y limitar el archivado vía robots — sin esquemas para «robar textos de otros dominios».",
  lead: [
    "Un archivo web guarda snapshots históricos de páginas. El servicio público más conocido es Wayback Machine en archive.org: un bot guarda periódicamente copias de URL que puedes abrir «como era» en una fecha elegida.",
    "Abajo: cómo ver la historia de un sitio, por qué a veces falta un snapshot y qué hacer cuando necesitas recuperar tu propio contenido viejo. No puedes simplemente mover materiales ajenos del archivo a un dominio nuevo «para no pagar autores» — eso es una cuestión de copyright.",
  ],
  faq: [
    {
      q: "¿Es lo mismo que la cache de Yandex o Google?",
      a: "Relacionado en idea, servicio distinto. La cache de búsqueda es un snapshot fresco para el índice; Wayback es una historia larga de snapshots, a menudo con huecos.",
    },
    {
      q: "¿Por qué el sitio no está en el archivo?",
      a: "Aún no lo crawlearon, bloqueado por robots o exclusiones, retirado tras una reclamación de derechos, o el dueño pidió borrado. No toda URL se archiva.",
    },
    {
      q: "¿Se puede restaurar un sitio entero con un clic?",
      a: "Rara vez perfecto: algunos assets, formularios y scripts no se guardaron. Para tu proyecto — transferencia manual de páginas clave o exports especializados; evalúa el riesgo de «restauradores» de terceros.",
    },
    {
      q: "¿Cómo se prohíbe el archivado?",
      a: "Vía reglas de archive-bot en robots.txt y/o tools de exclusión de Internet Archive. No hay garantía absoluta de «nunca», pero en muchos casos basta.",
    },
    {
      q: "¿Es legal copiar el texto de otro desde el archivo?",
      a: "Para tu propio contenido borrado — suele sí como recuperación. Para el de otro — necesitas derechos o una excepción lícita; «copy-paste gratis de un dominio caducado» es mala idea.",
    },
  ],
  sections: [
    {
      title: "Cómo usar Wayback Machine",
      level: 2,
      paras: [
        "Internet Archive (desde 1996; Wayback Machine público desde principios de los 2000) guarda snapshots web como biblioteca digital. Volúmenes y data centers crecen; no copiamos «miles de millones de páginas» concretas de press releases viejos como cifra eterna.",
        "Abre archive.org, pega la URL de un sitio o página. El calendario muestra fechas de snapshot: puntos más densos significan crawls más frecuentes. Elige una fecha — verás HTML y algunas imágenes/archivos que se guardaron.",
        "Save Page Now permite capturar a mano una URL actual — útil antes de un rediseño grande o de borrar una página importante. No sustituye backups de hosting y base de datos.",
        "Hay huecos: un sitio nuevo aún no crawleado, robots agresivos, takedown legal, glitches del crawler. Entonces prueba fechas cercanas u otras URLs de la misma sección.",
      ],
      lists: [
        {
          intro: "Trabajos típicos de marketing y SEO:",
          items: [
            "ver la oferta vieja de un competidor",
            "recuperar tu texto borrado",
            "revisar la historia del dominio antes de comprar",
            "documentar prueba de publicación en una fecha",
          ],
        },
      ],
      links: [
        {
          label: "Copia cacheada de Yandex",
          href: "/es/blog/sohranennaya-kopiya-yandex/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Recuperación, derechos y bloquear el archivado",
      level: 2,
      paras: [
        "Si tu sitio cayó y no hay backup: abre URLs clave en el archivo, guarda texto y media, arregla enlaces internos a mano. Un clon completo con todos los scripts desde Wayback no siempre funciona — el archivo no está obligado a guardar todo.",
        "Los «restauradores de un clic» de terceros aparecen y desaparecen; antes de usarlos, evalúa seguridad y licencia. No cuentes con magia: legal y técnicamente es más simple mantener tus propios backups.",
        "El contenido de dominios ajenos abandonados en el archivo no se vuelve «dominio público» solo porque el sitio cerró. Mover artículos ajenos para ahorrar en copywriting arriesga reclamaciones. Usa el archivo para research y recuperar lo tuyo.",
        "Para reducir el archivado: reglas en robots.txt para el user-agent del archive y las tools actuales de exclusión de Internet Archive (wording en su help). Tras un bloqueo, los snapshots viejos pueden quedar hasta que se procese la petición.",
        "En resumen: un archivo web es una tool potente de historia de la web. Mira, recupera lo tuyo, captura lo que importa — y no armes una estrategia de contenido sobre copias ajenas sin derechos.",
      ],
      lists: [
        {
          intro: "Antes de borrar una página importante:",
          items: [
            "backup de archivos y DB",
            "Save Page Now en URLs clave",
            "exportar texto a tu propio repositorio",
            "301 a un reemplazo actual si la URL sale del índice",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
        {
          label: "Bases de datos del sitio",
          href: "/es/blog/bazy-dannyh-sayta/",
        },
      ],
    },
  ],
  related: [
    "sohranennaya-kopiya-yandex",
    "analiz-konkurentov",
    "bitye-ssylki",
    "bazy-dannyh-sayta",
    "avtorskie-prava-instagram",
  ],
};

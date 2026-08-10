import type { BlogPost } from "../../../data/blog";

/** EN overlay for zakrytie-ot-indeksatsii — same structure as RU JSON. */
export const zakrytieOtIndeksatsiiEn: BlogPost = {
  slug: "zakrytie-ot-indeksatsii",
  title: "Blocking a site or pages from indexing: robots, meta, and when you need it",
  date: "2021-09-22",
  category: "SEO",
  cover: "/images/blog/zakrytie-ot-indeksatsii/cover-en.webp",
  excerpt:
    "When to block pages from indexing, how robots.txt, meta robots, and X-Robots-Tag differ, how to remove duplicates and utility sections — without cloaking or outdated tricks.",
  lead: [
    "Not everything on a site should enter the index: utility sections, drafts, filter duplicates, test subdomains. Blocking from indexing is a normal SEO tool — not a hide-and-seek game to trick robots.",
    "Below: why you block URLs, which methods work in 2026, and what to avoid (JS cloaking, “hiding” content from bots). The backbone is robots.txt, meta robots / X-Robots-Tag, canonical, and response codes.",
  ],
  faq: [
    {
      q: "Does robots.txt forbid indexing?",
      a: "No: Disallow asks not to crawl a URL. The page can still appear in results via links without a snippet. For “don’t index,” meta robots / X-Robots-Tag noindex (when crawlable) or restricted access is more reliable.",
    },
    {
      q: "How is noindex different from Disallow?",
      a: "Disallow — don’t crawl. noindex — may crawl, but don’t put in the index (or remove). Often combined on purpose: utility URLs closed from crawl and with noindex.",
    },
    {
      q: "Do I still need the old Yandex <noindex> tag?",
      a: "Obsolete practice. The modern standard is meta name=\"robots\" content=\"noindex\" and/or the HTTP header X-Robots-Tag.",
    },
    {
      q: "How do I block the whole site during development?",
      a: "Better password / IP allowlist / a separate staging host. Temporary noindex on all pages is OK, but easy to forget to remove. Don’t rely on robots.txt alone.",
    },
    {
      q: "Can I hide text from robots with JavaScript?",
      a: "Not as an SEO tactic. Showing different content to people and bots is cloaking — sanction risk. Needed content is either in the index, or the page is honestly blocked.",
    },
  ],
  sections: [
    {
      title: "When to block from indexing",
      level: 2,
      paras: [
        "The goal is not to pollute the index or compete with yourself via duplicates. Block what shouldn’t answer search demand.",
      ],
      lists: [
        {
          intro: "Typical cases:",
          items: [
            "cart, account area, site search, filters with endless URLs",
            "drafts, thank-you pages, technical landings",
            "duplicates (www/non-www, http/https, UTM params — better canonical/redirects)",
            "staging and demo subdomains",
            "outdated sections until a 301 to current ones",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "robots.txt: crawl rules, not index magic",
      level: 2,
      paras: [
        "The `/robots.txt` file sets crawl rules per User-agent. It’s handy for blocking folders (`/admin/`, `/cgi-bin/`), utility scripts, and sometimes heavy sections from extra crawling.",
        "Limit: a crawl ban ≠ a guarantee of absence from the index. If search already knows the URL, Disallow can block delivering noindex.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "don’t block CSS/JS needed to render key pages",
            "check the file after deploy (a Disallow typo breaks crawl)",
            "for the whole site on production almost never use `Disallow: /` without a hard need",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "After robots edits, check crawl reports in Yandex Webmaster and Google Search Console — you’ll see what is actually cut.",
        },
      ],
    },
    {
      title: "meta robots and X-Robots-Tag",
      level: 2,
      paras: [
        "On an HTML page: `<meta name=\"robots\" content=\"noindex, follow\">` (or `noindex, nofollow` — on purpose). For PDF and non-HTML, the `X-Robots-Tag: noindex` header is easier.",
        "For noindex to work, the robot must get the document. Don’t block such URLs in robots.txt if the goal is to remove them from the index.",
      ],
      lists: [
        {
          intro: "Common directives:",
          items: [
            "`noindex` — don’t show in results",
            "`nofollow` — don’t pass link equity from the page (meaning evolved; don’t confuse with rel on a single link)",
            "`noarchive` — no cached copy",
            "`none` — shorthand for noindex, nofollow",
          ],
        },
      ],
      links: [
        {
          label: "Yandex cached page copy",
          href: "/en/blog/sohranennaya-kopiya-yandex/",
        },
      ],
    },
    {
      title: "Duplicates, sections, folders, subdomains",
      level: 2,
      paras: [
        "Duplicates are better not hidden forever, but collapsed to one URL: 301, `rel=\"canonical\"`, unified params. robots/noindex is a backup if the duplicate can’t be removed yet.",
        "A section or folder is blocked with robots rules and/or a meta template on all section URLs. A subdomain is a separate host for search: set rules there too.",
      ],
      tables: [
        {
          caption: "What to choose",
          headers: ["Job", "Preferred method"],
          rows: [
            ["Utility folder", "Disallow in robots.txt"],
            ["Page “not in search”", "noindex (+ crawlable)"],
            ["Content duplicate", "301 or canonical"],
            ["Staging", "Auth / IP, plus noindex"],
            ["Gone forever", "410 or 301 to a replacement"],
          ],
        },
      ],
    },
    {
      title: "Links, images, and outdated tricks",
      level: 2,
      paras: [
        "Individual outbound links get `rel=\"nofollow\"` / `sponsored` / `ugc` by meaning — that isn’t blocking the site from indexing. Images: `noimageindex` is rarely needed; more important not to steal photos and to serve sensible sizes.",
        "Old guides suggested `<noindex>`, SEOhide, and Base64/JS-encoded blocks “so the bot doesn’t see them.” Don’t: that’s cloaking and a fragile scheme. Show needed content the same to everyone, or honestly block the URL.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "different HTML for bots and people",
            "hiding commercial text only from robots",
            "forever Disallow of the whole production site just in case",
            "forgotten noindex after launch",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Blocking important services in robots during development and not opening them after release. Symptom — “the site exists, search is empty.”",
        },
      ],
    },
    {
      title: "Server responses and passwords",
      level: 2,
      paras: [
        "403/401 with auth is a hard block: the robot won’t get content. 410 — gone forever. 404 — not found (OK for temporary holes; for moves prefer 301).",
        "A password on staging beats hoping for robots: random links and scanners won’t drag a draft into the index.",
      ],
      lists: [],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Blocking from indexing is site hygiene: utility URLs and duplicates shouldn’t answer in search. Use robots for crawl, noindex/X-Robots-Tag for the index, canonical/301 for duplicates. No cloaking and no clever JS hide tricks.",
      ],
      lists: [],
    },
  ],
};

/** ES overlay for zakrytie-ot-indeksatsii — same structure as RU JSON / EN. */
export const zakrytieOtIndeksatsiiEs: BlogPost = {
  slug: "zakrytie-ot-indeksatsii",
  title: "Bloquear un sitio o páginas a la indexación: robots, meta y cuándo hace falta",
  date: "2021-09-22",
  category: "SEO",
  cover: "/images/blog/zakrytie-ot-indeksatsii/cover-es.webp",
  excerpt:
    "Cuándo bloquear páginas a la indexación, en qué se diferencian robots.txt, meta robots y X-Robots-Tag, cómo sacar duplicados y secciones de utilidad — sin cloaking ni trucos desfasados.",
  lead: [
    "No todo en un sitio debe entrar al índice: secciones de utilidad, borradores, duplicados de filtros, subdominios de test. Bloquear a la indexación es una herramienta SEO normal — no un escondite para engañar a los robots.",
    "Abajo: por qué bloqueas URLs, qué métodos funcionan en 2026 y qué evitar (cloaking con JS, «esconder» contenido a los bots). La columna vertebral es robots.txt, meta robots / X-Robots-Tag, canonical y códigos de respuesta.",
  ],
  faq: [
    {
      q: "¿robots.txt prohíbe indexar?",
      a: "No: Disallow pide no rastrear una URL. La página aún puede aparecer en resultados vía enlaces sin snippet. Para «no indexar», meta robots / X-Robots-Tag noindex (cuando es crawlable) o acceso restringido es más fiable.",
    },
    {
      q: "¿En qué se diferencia noindex de Disallow?",
      a: "Disallow — no rastrear. noindex — puede rastrear, pero no meter en el índice (o sacar). A menudo se combinan a propósito: URLs de utilidad cerradas al crawl y con noindex.",
    },
    {
      q: "¿Sigue haciendo falta el viejo tag Yandex <noindex>?",
      a: "Práctica obsoleta. El estándar moderno es meta name=\"robots\" content=\"noindex\" y/o el header HTTP X-Robots-Tag.",
    },
    {
      q: "¿Cómo bloqueo todo el sitio durante el desarrollo?",
      a: "Mejor contraseña / allowlist de IP / un host staging aparte. Temporary noindex en todas las páginas vale, pero es fácil olvidar quitarlo. No te apoyes solo en robots.txt.",
    },
    {
      q: "¿Puedo esconder texto a los robots con JavaScript?",
      a: "No como táctica SEO. Mostrar contenido distinto a personas y bots es cloaking — riesgo de sanción. El contenido necesario o está en el índice, o la página se bloquea con honestidad.",
    },
  ],
  sections: [
    {
      title: "Cuándo bloquear a la indexación",
      level: 2,
      paras: [
        "La meta no es contaminar el índice ni competir contigo mismo vía duplicados. Bloquea lo que no debería responder a la demanda de búsqueda.",
      ],
      lists: [
        {
          intro: "Casos típicos:",
          items: [
            "carrito, área de cuenta, búsqueda del sitio, filtros con URLs infinitas",
            "borradores, thank-you pages, landings técnicas",
            "duplicados (www/sin-www, http/https, params UTM — mejor canonical/redirects)",
            "subdominios staging y demo",
            "secciones desfasadas hasta un 301 a las actuales",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "robots.txt: reglas de crawl, no magia de índice",
      level: 2,
      paras: [
        "El archivo `/robots.txt` fija reglas de crawl por User-agent. Es práctico para bloquear carpetas (`/admin/`, `/cgi-bin/`), scripts de utilidad y a veces secciones pesadas de crawl extra.",
        "Límite: un ban de crawl ≠ garantía de ausencia del índice. Si la búsqueda ya conoce la URL, Disallow puede bloquear entregar noindex.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "no bloquees CSS/JS necesarios para renderizar páginas clave",
            "revisa el archivo tras el deploy (un typo en Disallow rompe el crawl)",
            "para todo el sitio en producción casi nunca uses `Disallow: /` sin necesidad dura",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Tras editar robots, revisa informes de crawl en Yandex Webmaster y Google Search Console — verás qué se corta de verdad.",
        },
      ],
    },
    {
      title: "meta robots y X-Robots-Tag",
      level: 2,
      paras: [
        "En una página HTML: `<meta name=\"robots\" content=\"noindex, follow\">` (o `noindex, nofollow` — a propósito). Para PDF y no-HTML, el header `X-Robots-Tag: noindex` es más fácil.",
        "Para que noindex funcione, el robot debe obtener el documento. No bloquees esas URLs en robots.txt si la meta es sacarlas del índice.",
      ],
      lists: [
        {
          intro: "Directivas habituales:",
          items: [
            "`noindex` — no mostrar en resultados",
            "`nofollow` — no pasar equity de enlaces desde la página (el sentido evolucionó; no lo confundas con rel en un enlace suelto)",
            "`noarchive` — sin copia en caché",
            "`none` — atajo de noindex, nofollow",
          ],
        },
      ],
      links: [
        {
          label: "Copia en caché de Yandex",
          href: "/es/blog/sohranennaya-kopiya-yandex/",
        },
      ],
    },
    {
      title: "Duplicados, secciones, carpetas, subdominios",
      level: 2,
      paras: [
        "Los duplicados es mejor no esconderlos para siempre, sino colapsarlos a una URL: 301, `rel=\"canonical\"`, params unificados. robots/noindex es respaldo si el duplicado aún no se puede quitar.",
        "Una sección o carpeta se bloquea con reglas robots y/o una plantilla meta en todas las URLs de la sección. Un subdominio es un host aparte para la búsqueda: fija reglas también ahí.",
      ],
      tables: [
        {
          caption: "Qué elegir",
          headers: ["Trabajo", "Método preferido"],
          rows: [
            ["Carpeta de utilidad", "Disallow en robots.txt"],
            ["Página «no en búsqueda»", "noindex (+ crawlable)"],
            ["Duplicado de contenido", "301 o canonical"],
            ["Staging", "Auth / IP, más noindex"],
            ["Fuera para siempre", "410 o 301 a un reemplazo"],
          ],
        },
      ],
    },
    {
      title: "Enlaces, imágenes y trucos desfasados",
      level: 2,
      paras: [
        "Los enlaces salientes individuales llevan `rel=\"nofollow\"` / `sponsored` / `ugc` por sentido — eso no es bloquear el sitio a la indexación. Imágenes: `noimageindex` rara vez hace falta; más importante no robar fotos y servir tamaños sensatos.",
        "Guías viejas sugerían `<noindex>`, SEOhide y bloques codificados en Base64/JS «para que el bot no los vea». No: eso es cloaking y un esquema frágil. Muestra el contenido necesario igual a todos, o bloquea la URL con honestidad.",
      ],
      lists: [
        {
          intro: "Qué evitar:",
          items: [
            "HTML distinto para bots y personas",
            "esconder texto comercial solo a los robots",
            "Disallow eterno de todo el sitio de producción «por si acaso»",
            "noindex olvidado tras el lanzamiento",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "warning",
          text: "Bloquear servicios importantes en robots durante el desarrollo y no abrirlos tras el release. Síntoma — «el sitio existe, la búsqueda está vacía».",
        },
      ],
    },
    {
      title: "Respuestas del servidor y contraseñas",
      level: 2,
      paras: [
        "403/401 con auth es un bloqueo duro: el robot no obtendrá contenido. 410 — fuera para siempre. 404 — no encontrado (OK para huecos temporales; para mudanzas prefiere 301).",
        "Una contraseña en staging gana a esperar a robots: enlaces aleatorios y scanners no arrastrarán un borrador al índice.",
      ],
      lists: [],
    },
    {
      title: "Resumen corto",
      level: 2,
      paras: [
        "Bloquear a la indexación es higiene del sitio: URLs de utilidad y duplicados no deberían responder en búsqueda. Usa robots para crawl, noindex/X-Robots-Tag para el índice, canonical/301 para duplicados. Sin cloaking ni trucos ingeniosos de escondite con JS.",
      ],
      lists: [],
    },
  ],
};

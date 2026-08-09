import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-seo-plaginy — same structure as RU JSON. */
export const wordpressSeoPlaginyEn: BlogPost = {
  slug: "wordpress-seo-plaginy",
  title: "SEO plugins for WordPress: what you actually need",
  date: "2019-12-16",
  category: "SEO",
  cover: "/images/blog/wordpress-seo-plaginy/cover-en.webp",
  excerpt:
    "Which WordPress SEO plugins earn their keep: all-in-ones (Yoast, Rank Math, AIOSEO), sitemap, redirects, speed, images, and links — without installing the whole catalog at once.",
  lead: [
    "The WordPress catalog has tens of thousands of extensions; for SEO a small stack is enough: one main SEO suite, plus focused tools for speed, redirects, and media. Extra plugins raise breach and slowdown risk.",
    "Below: plugin groups with popular examples and selection rules. Names and plans change — check current features in the official catalog. A plugin doesn’t replace keyword research, copy, or months of ranking work.",
  ],
  faq: [
    {
      q: "Should I run Yoast and Rank Math together?",
      a: "No. Pick one SEO suite. Two at once means meta conflicts, sitemap duplicates, and extra load.",
    },
    {
      q: "Do green lights in Yoast mean rankings?",
      a: "No. They’re readability and keyword heuristics. Chasing “100 points” often ruins the text.",
    },
    {
      q: "How many SEO plugins are enough?",
      a: "Usually one suite plus two to four focused tools (redirects, cache or optimize, image compression, broken links on a schedule).",
    },
    {
      q: "Does a plugin replace Webmaster and Search Console?",
      a: "No. The plugin helps on-site; search panels are separate.",
    },
    {
      q: "Is an SSL plugin required?",
      a: "The certificate is set on hosting. Plugins like Really Simple SSL only ease the HTTPS redirect — not the only path.",
    },
    {
      q: "Can Broken Link Checker stay always on?",
      a: "Carefully — high load. Prefer rare runs or an external crawler.",
    },
    {
      q: "Do speed plugins conflict?",
      a: "Yes — especially several caches and aggressive minify. One stack; test after enabling.",
    },
    {
      q: "Will plugins get me rankings fast?",
      a: "No. They’re setup convenience. Site prep takes about a month; core rankings usually build over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "How to choose SEO plugins",
      level: 2,
      paras: [
        "Start with jobs: meta and sitemap, markup, redirects, speed, images, multilingual. Then — one tool per job from the official repo or a trusted author, with recent updates.",
        "Don’t install “the whole top-15 from an article.” Each plugin is attack surface and a potential conflict. Tie it to WP security: fewer extensions, regular updates, a backup before experiments.",
      ],
      lists: [
        {
          intro: "Selection criteria:",
          items: [
            "last update date",
            "compatibility with your WP version",
            "reviews and install count as a rough signal",
            "no pirated “nulled” builds",
          ],
        },
      ],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "SEO tools",
          href: "/en/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "SEO suites: meta, sitemap, markup",
      level: 2,
      paras: [
        "Yoast SEO, All in One SEO (AIOSEO), Rank Math, and The SEO Framework cover the usual set: title and description, XML sitemap, noindex, social previews, often schema and search-panel integrations. Rank Math and AIOSEO are strong on redirects and stores; The SEO Framework leans quieter and more automatic.",
        "Keyword and “readability” tips are a checklist, not a ranking law. One suite per site is enough for most blogs and corporate sites.",
      ],
      lists: [
        {
          intro: "Configure first:",
          items: [
            "title and description templates",
            "sitemap and excluding utility URLs",
            "canonicals / noindex where needed",
            "basic schema by page type",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and schema",
          href: "/en/blog/snippet/",
        },
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Navigation, links, and redirects",
      level: 2,
      paras: [
        "Easy Table of Contents — a heading TOC for long articles (enable selectively: TOC jumps sometimes cut depth). Broken Link Checker finds dead URLs — run rarely or replace with a crawler like Screaming Frog.",
        "Redirection — 301/302 rules and 404 monitoring. Rel NoFollow Checkbox — outbound markup convenience in the editor; don’t nofollow every link without a reason.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "redirects on URL changes and duplicate merges",
            "broken links — into an edit backlog",
            "TOC — for guides, not short cards",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Speed, images, SSL",
      level: 2,
      paras: [
        "ShortPixel (and peers) compress images and can do WebP. A3 Lazy Load defers off-screen media — check that the LCP image isn’t lazily loaded for no reason. WP Super Cache and Autoptimize — HTML cache and CSS/JS minify; don’t enable two caches at once without a test.",
        "Really Simple SSL eases the move to HTTPS after the host issues a certificate. Speed affects UX and crawl; it’s not a ranking switch, but a required tech layer.",
      ],
      lists: [
        {
          intro: "Speed order:",
          items: [
            "backup",
            "media compression",
            "one cache + careful minify",
            "check key URLs on mobile",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Multilingual, spam, and a sane minimum",
      level: 2,
      paras: [
        "HREFLANG Tags Lite and peers matter if you truly have several languages or regions. Comment anti-spam plugins cut junk and moderation load — hygiene, not a direct SEO factor.",
        "Build the stack: one suite + redirects + (cache or code optimize) + image compression. Everything else — by real need. Update plugins with core; remove deleted extensions completely.",
      ],
      lists: [
        {
          intro: "Final minimum:",
          items: [
            "one SEO suite",
            "redirects / 404",
            "speed (cache + media)",
            "HTTPS",
            "Yandex / Google panels outside plugins",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Installing plugins takes hours. Site and content prep — weeks to about a month; core rankings planned 2–6 months after work starts. Prep ≠ page one.",
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "wordpress-bezopasnost",
    "programmy-seo",
    "snippet",
    "karta-sayta",
    "redirekt",
    "screaming-frog",
  ],
};

/** ES overlay for wordpress-seo-plaginy — same structure as RU JSON / EN. */
export const wordpressSeoPlaginyEs: BlogPost = {
  slug: "wordpress-seo-plaginy",
  title: "Plugins SEO para WordPress: qué necesitas de verdad",
  date: "2019-12-16",
  category: "SEO",
  cover: "/images/blog/wordpress-seo-plaginy/cover.webp",
  excerpt:
    "Qué plugins SEO de WordPress merecen la pena: all-in-ones (Yoast, Rank Math, AIOSEO), sitemap, redirects, velocidad, imágenes y enlaces — sin instalar todo el catálogo de golpe.",
  lead: [
    "El catálogo de WordPress tiene decenas de miles de extensions; para SEO basta un stack pequeño: una suite SEO principal, más tools enfocadas en velocidad, redirects y media. Plugins de más suben el riesgo de breach y ralentización.",
    "Abajo: grupos de plugins con ejemplos populares y reglas de selección. Nombres y planes cambian — revisa features actuales en el catálogo oficial. Un plugin no sustituye la investigación de keywords, el copy ni meses de trabajo de ranking.",
  ],
  faq: [
    {
      q: "¿Debo correr Yoast y Rank Math juntos?",
      a: "No. Elige una suite SEO. Dos a la vez significan conflictos de meta, duplicados de sitemap y carga extra.",
    },
    {
      q: "¿Las luces verdes de Yoast significan rankings?",
      a: "No. Son heurísticas de legibilidad y keywords. Perseguir «100 puntos» a menudo arruina el texto.",
    },
    {
      q: "¿Cuántos plugins SEO bastan?",
      a: "Normalmente una suite más dos a cuatro tools enfocadas (redirects, caché u optimize, compresión de imágenes, broken links con calendario).",
    },
    {
      q: "¿Un plugin sustituye Webmaster y Search Console?",
      a: "No. El plugin ayuda on-site; los paneles de búsqueda son aparte.",
    },
    {
      q: "¿Hace falta un plugin SSL?",
      a: "El certificado se pone en el hosting. Plugins como Really Simple SSL solo facilitan el redirect HTTPS — no son el único camino.",
    },
    {
      q: "¿Broken Link Checker puede quedarse siempre encendido?",
      a: "Con cuidado — carga alta. Prefiere corridas raras o un crawler externo.",
    },
    {
      q: "¿Los plugins de velocidad chocan?",
      a: "Sí — sobre todo varias cachés y minify agresivo. Un solo stack; prueba tras activar.",
    },
    {
      q: "¿Los plugins me dan rankings rápido?",
      a: "No. Son comodidad de setup. La prep del sitio toma cerca de un mes; los rankings del núcleo suelen construirse a 2–6 meses tras empezar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Cómo elegir plugins SEO",
      level: 2,
      paras: [
        "Empieza por trabajos: meta y sitemap, markup, redirects, velocidad, imágenes, multilingual. Luego — una tool por trabajo del repo oficial o un autor de confianza, con updates recientes.",
        "No instales «los quince de un artículo». Cada plugin es superficie de ataque y un conflicto potencial. Átalo a la seguridad WP: menos extensions, updates regulares, un backup antes de experimentos.",
      ],
      lists: [
        {
          intro: "Criterios de selección:",
          items: [
            "fecha del último update",
            "compatibilidad con tu versión de WP",
            "reseñas y conteo de installs como señal aproximada",
            "sin builds «nulled» piratas",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
        {
          label: "Tools SEO",
          href: "/es/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "Suites SEO: meta, sitemap, markup",
      level: 2,
      paras: [
        "Yoast SEO, All in One SEO (AIOSEO), Rank Math y The SEO Framework cubren el set habitual: title y description, XML sitemap, noindex, previews sociales, a menudo schema e integraciones con paneles de búsqueda. Rank Math y AIOSEO son fuertes en redirects y tiendas; The SEO Framework va más silencioso y automático.",
        "Los tips de keywords y «readability» son un checklist, no una ley de ranking. Una suite por sitio basta para la mayoría de blogs y sitios corporativos.",
      ],
      lists: [
        {
          intro: "Configura primero:",
          items: [
            "plantillas de title y description",
            "sitemap y exclusión de URLs de utilidad",
            "canonicals / noindex donde haga falta",
            "schema básico por tipo de página",
          ],
        },
      ],
      links: [
        {
          label: "Snippet y schema",
          href: "/es/blog/snippet/",
        },
        {
          label: "Sitemap",
          href: "/es/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Navegación, enlaces y redirects",
      level: 2,
      paras: [
        "Easy Table of Contents — un TOC de headings para artículos largos (activa con criterio: los saltos del TOC a veces cortan profundidad). Broken Link Checker encuentra URLs muertas — córrelo poco o sustitúyelo por un crawler como Screaming Frog.",
        "Redirection — reglas 301/302 y monitoreo de 404. Rel NoFollow Checkbox — comodidad de markup outbound en el editor; no pongas nofollow a cada enlace sin motivo.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "redirects en cambios de URL y merges de duplicados",
            "enlaces rotos — al backlog de edición",
            "TOC — para guías, no para fichas cortas",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Velocidad, imágenes, SSL",
      level: 2,
      paras: [
        "ShortPixel (y pares) comprimen imágenes y pueden hacer WebP. A3 Lazy Load aplaza media fuera de pantalla — revisa que la imagen LCP no se cargue lazy sin motivo. WP Super Cache y Autoptimize — caché HTML y minify CSS/JS; no actives dos cachés a la vez sin un test.",
        "Really Simple SSL facilita el paso a HTTPS tras que el host emita el certificado. La velocidad afecta UX y crawl; no es un interruptor de ranking, pero sí una capa técnica necesaria.",
      ],
      lists: [
        {
          intro: "Orden de velocidad:",
          items: [
            "backup",
            "compresión de media",
            "una caché + minify con cuidado",
            "revisar URLs clave en móvil",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
    {
      title: "Multilingual, spam y un mínimo sensato",
      level: 2,
      paras: [
        "HREFLANG Tags Lite y pares importan si de verdad tienes varios idiomas o regiones. Plugins anti-spam de comentarios cortan basura y carga de moderación — higiene, no un factor SEO directo.",
        "Arma el stack: una suite + redirects + (caché u optimize de código) + compresión de imágenes. Todo lo demás — por necesidad real. Actualiza plugins con el core; quita extensions borradas por completo.",
      ],
      lists: [
        {
          intro: "Mínimo final:",
          items: [
            "una suite SEO",
            "redirects / 404",
            "velocidad (caché + media)",
            "HTTPS",
            "paneles Yandex / Google fuera de plugins",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Instalar plugins toma horas. Prep del sitio y contenido — semanas hasta cerca de un mes; rankings del núcleo planificados a 2–6 meses tras empezar el trabajo. Prep ≠ primera página.",
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "wordpress-bezopasnost",
    "programmy-seo",
    "snippet",
    "karta-sayta",
    "redirekt",
    "screaming-frog",
  ],
};

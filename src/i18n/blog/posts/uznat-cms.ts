import type { BlogPost } from "../../../data/blog";

/** EN overlay for uznat-cms — same structure as RU JSON. */
export const uznatCmsEn: BlogPost = {
  slug: "uznat-cms",
  title: "How to tell a site’s CMS: code, clues, and tools",
  date: "2020-08-24",
  category: "SEO",
  cover: "/images/blog/uznat-cms/cover-en.webp",
  excerpt:
    "How to identify a site engine from HTML, meta generator, paths, cookies, and online detectors — and what to do if the CMS is hidden or custom.",
  lead: [
    "Knowing a competitor’s or another project’s CMS helps estimate the stack, plugins, and typical SEO limits. That’s open-signal reconnaissance — not hacking.",
    "Below: manual code review, what to check in robots and URLs, online detectors, and why “nothing found” often means custom code or a well-hidden generator. For a nearby WP article without the `-2` suffix, treat this as the canon.",
  ],
  faq: [
    {
      q: "Why know the CMS?",
      a: "To understand URL templates, typical SEO modules, how fast edits go live, and risks (outdated plugins). For a bid — estimate work complexity.",
    },
    {
      q: "Is it legal?",
      a: "Reading public HTML and headers is normal practice. Breaking into admin, brute force, and exploits are not.",
    },
    {
      q: "Is meta generator always there?",
      a: "No. WordPress and others often disable it. Missing generator doesn’t mean “not a CMS.”",
    },
    {
      q: "Which CMS get detected most?",
      a: "WordPress, Bitrix, OpenCart, Joomla, MODX, Tilda/builders — via asset paths and typical markers.",
    },
    {
      q: "Do tools get it wrong?",
      a: "Yes. Cross-check two sources and the code by eye. Custom Laravel/Next may show as “unknown.”",
    },
    {
      q: "Does robots.txt help?",
      a: "Sometimes: `/wp-admin`, `/bitrix/`, `/catalog/` paths reveal the ecosystem. Not always.",
    },
    {
      q: "What do cookies show?",
      a: "Names like `PHPSESSID`, `BITRIX_SM_…`, `wp-settings-` are hints, not a verdict.",
    },
    {
      q: "What if nothing is visible?",
      a: "Likely custom, headless, or heavily cleaned markers. Then look at the stack via JS bundles and server headers — carefully, without vulnerability scanning.",
    },
  ],
  sections: [
    {
      title: "Manual HTML review",
      level: 2,
      paras: [
        "Open the source (View Source / Ctrl+U). Look for `meta name=\"generator\"`, paths `/wp-content/`, `/bitrix/`, `/skin/frontend/`, template comments, typical body classes.",
        "In DevTools → Network check static URLs: `wp-includes`, `catalog/view/theme`, `tildacdn` and similar. One marker isn’t proof — collect matches.",
      ],
      lists: [
        {
          intro: "Quick Ctrl+F:",
          items: [
            "`generator`",
            "`wp-content` / `wp-includes`",
            "`bitrix`",
            "`opencart` / `catalog/view`",
            "`tilda`, `wix`, `shopify`",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Seeing jQuery and deciding it’s a “jQuery engine.” A library ≠ a CMS.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "URL, robots, and headers",
      level: 2,
      paras: [
        "`/robots.txt` and the sitemap sometimes contain admin paths or system directories. Pretty URLs like `/index.php?route=` hint at OpenCart; `/blog/2020/05/post/` often WP — but not always.",
        "`X-Powered-By`, cookie names, login redirects — extra clues. Don’t mix up the web server (nginx) with the CMS.",
      ],
      lists: [
        {
          intro: "What to record:",
          items: [
            "public paths from robots",
            "product/article URL pattern",
            "cookie names in Application",
            "login/admin response without password guessing — only that a public URL exists if it’s open",
          ],
        },
      ],
    },
    {
      title: "Online tools and extensions",
      level: 2,
      paras: [
        "Detectors (WhatCMS, BuiltWith, Wappalyzer and similar) speed screening: CMS, CDN, analytics, JS frameworks. Results diverge — cross-check.",
        "Browser extensions help across a series of sites. Don’t rely on one verdict for a client contract.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "run the URL in 1–2 tools",
            "confirm with code markers",
            "record a version only if it’s explicit",
            "don’t scan the admin with vulnerability scanners “while you’re at it”",
          ],
        },
      ],
    },
    {
      title: "If the CMS is hidden or custom",
      level: 2,
      paras: [
        "Framework sites (Laravel, Django, Next.js) often have no classic CMS. Builders may mask traces. Then front/back stack and hosting matter more than a “WordPress” label.",
        "For an SEO audit it’s enough to know limits: normal Title templates, filters, speed, code access.",
      ],
      lists: [
        {
          intro: "Takeaway for the work:",
          items: [
            "does the client have code/admin access",
            "need a CMS or custom developer",
            "typical SEO modules yes/no",
            "hour estimate for the stack",
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
      title: "Typical markers of popular systems",
      level: 2,
      paras: [
        "WordPress: `/wp-content/`, `/wp-json/`, sometimes generator. 1C-Bitrix: `/bitrix/`, `BITRIX_*` cookies. OpenCart: `route=product/`, themes in `catalog/view`. Joomla: `/components/`, `/media/jui/`. Tilda: `tildacdn.com`, `t-` classes.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "markers get faked and stripped",
            "multisite and headless confuse detection",
            "CMS version in generator meta can be stale",
            "plugins ≠ proof of the core, but strengthen the hypothesis",
          ],
        },
      ],
    },
    {
      title: "Ethics and boundaries",
      level: 2,
      paras: [
        "The goal is to understand the platform for analysis and scoping. Don’t use CMS knowledge to hunt holes, guess passwords, or attack. For your own site, check the admin and hosting docs — more reliable than any detector.",
        "In a client report write: “markers X look like Y; confirm with access.”",
      ],
      lists: [
        {
          intro: "Recon checklist:",
          items: [
            "View Source + Network",
            "robots/sitemap",
            "1–2 external detectors",
            "CMS hypothesis + confidence",
            "no vulnerability scans",
          ],
        },
      ],
      notes: [
        {
          title: "In practice",
          kind: "tip",
          text: "“Detect CMS” ≠ get access. Public markers are the ceiling of legal recon.",
        },
      ],
      links: [
        {
          label: "Website security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
  ],
  related: [
    "ishodnyy-kod",
    "tehnicheskiy-seo-audit",
    "bezopasnost-sayta",
    "seo-bitrix",
    "zakrytie-ot-indeksatsii",
  ],
};

/** ES overlay for uznat-cms — same structure as RU JSON / EN. */
export const uznatCmsEs: BlogPost = {
  slug: "uznat-cms",
  title: "Cómo saber el CMS de un sitio: código, pistas y herramientas",
  date: "2020-08-24",
  category: "SEO",
  cover: "/images/blog/uznat-cms/cover-es.webp",
  excerpt:
    "Cómo identificar el motor de un sitio por el HTML, meta generator, rutas, cookies y detectores online — y qué hacer si el CMS está oculto o es a medida.",
  lead: [
    "Saber el CMS de un competidor o de otro proyecto ayuda a estimar el stack, plugins y límites SEO típicos. Es reconocimiento por señales públicas — no hacking.",
    "Abajo: revisión manual del código, qué mirar en robots y URLs, detectores online y por qué «nada encontrado» suele ser código custom o un generator bien oculto. Para un artículo WP cercano sin el sufijo `-2`, trata este como el canónico.",
  ],
  faq: [
    {
      q: "¿Para qué saber el CMS?",
      a: "Para entender plantillas de URL, módulos SEO típicos, qué tan rápido salen los cambios y riesgos (plugins desactualizados). Para una propuesta — estimar la complejidad del trabajo.",
    },
    {
      q: "¿Es legal?",
      a: "Leer HTML público y headers es práctica normal. Entrar al admin, fuerza bruta y exploits — no.",
    },
    {
      q: "¿Meta generator está siempre?",
      a: "No. WordPress y otros a menudo lo desactivan. Que falte el generator no significa «no es un CMS».",
    },
    {
      q: "¿Qué CMS se detectan más?",
      a: "WordPress, Bitrix, OpenCart, Joomla, MODX, Tilda/builders — por rutas de assets y marcadores típicos.",
    },
    {
      q: "¿Las herramientas se equivocan?",
      a: "Sí. Cruza dos fuentes y el código a ojo. Laravel/Next a medida pueden salir como «unknown».",
    },
    {
      q: "¿Ayuda robots.txt?",
      a: "A veces: rutas `/wp-admin`, `/bitrix/`, `/catalog/` delatan el ecosistema. No siempre.",
    },
    {
      q: "¿Qué muestran las cookies?",
      a: "Nombres como `PHPSESSID`, `BITRIX_SM_…`, `wp-settings-` son pistas, no un veredicto.",
    },
    {
      q: "¿Y si no se ve nada?",
      a: "Probable custom, headless o marcadores muy limpios. Entonces mira el stack por bundles JS y headers del servidor — con cuidado, sin escaneo de vulnerabilidades.",
    },
  ],
  sections: [
    {
      title: "Revisión manual del HTML",
      level: 2,
      paras: [
        "Abre el código fuente (Ver código / Ctrl+U). Busca `meta name=\"generator\"`, rutas `/wp-content/`, `/bitrix/`, `/skin/frontend/`, comentarios de plantilla, clases típicas del body.",
        "En DevTools → Network revisa URLs estáticas: `wp-includes`, `catalog/view/theme`, `tildacdn` y similares. Un marcador no basta — junta coincidencias.",
      ],
      lists: [
        {
          intro: "Ctrl+F rápido:",
          items: [
            "`generator`",
            "`wp-content` / `wp-includes`",
            "`bitrix`",
            "`opencart` / `catalog/view`",
            "`tilda`, `wix`, `shopify`",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Ver jQuery y decidir que es un «motor jQuery». Una librería ≠ un CMS.",
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "URL, robots y headers",
      level: 2,
      paras: [
        "`/robots.txt` y el sitemap a veces llevan rutas de admin o directorios de sistema. URLs tipo `/index.php?route=` apuntan a OpenCart; `/blog/2020/05/post/` a menudo WP — pero no siempre.",
        "`X-Powered-By`, nombres de cookies, redirects de login — pistas extra. No mezcles el servidor web (nginx) con el CMS.",
      ],
      lists: [
        {
          intro: "Qué anotar:",
          items: [
            "rutas públicas de robots",
            "patrón de URL de producto/artículo",
            "nombres de cookies en Application",
            "respuesta de login/admin sin adivinar contraseñas — solo que existe una URL pública si está abierta",
          ],
        },
      ],
    },
    {
      title: "Herramientas online y extensiones",
      level: 2,
      paras: [
        "Los detectores (WhatCMS, BuiltWith, Wappalyzer y similares) aceleran el screening: CMS, CDN, analytics, frameworks JS. Los resultados divergen — cruza.",
        "Las extensiones del navegador ayudan en una serie de sitios. No te fíes de un solo veredicto para un contrato con el cliente.",
      ],
      lists: [
        {
          intro: "Consejos prácticos:",
          items: [
            "pasa la URL por 1–2 herramientas",
            "confirma con marcadores del código",
            "anota versión solo si es explícita",
            "no escanees el admin con scanners de vulnerabilidades «de paso»",
          ],
        },
      ],
    },
    {
      title: "Si el CMS está oculto o es a medida",
      level: 2,
      paras: [
        "Sitios en frameworks (Laravel, Django, Next.js) a menudo no tienen CMS clásico. Los builders pueden enmascarar rastros. Entonces el stack front/back y el hosting importan más que la etiqueta «WordPress».",
        "Para una auditoría SEO basta saber los límites: plantillas normales de Title, filtros, velocidad, acceso al código.",
      ],
      lists: [
        {
          intro: "Para el trabajo:",
          items: [
            "¿tiene el cliente acceso a código/admin?",
            "¿hace falta un CMS o un developer a medida?",
            "módulos SEO típicos sí/no",
            "estimación de horas según el stack",
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
      title: "Marcadores típicos de sistemas populares",
      level: 2,
      paras: [
        "WordPress: `/wp-content/`, `/wp-json/`, a veces generator. 1C-Bitrix: `/bitrix/`, cookies `BITRIX_*`. OpenCart: `route=product/`, themes en `catalog/view`. Joomla: `/components/`, `/media/jui/`. Tilda: `tildacdn.com`, clases `t-`.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "los marcadores se falsifican y se quitan",
            "multisite y headless confunden la detección",
            "la versión del CMS en meta generator puede estar obsoleta",
            "plugins ≠ prueba del core, pero refuerzan la hipótesis",
          ],
        },
      ],
    },
    {
      title: "Ética y límites",
      level: 2,
      paras: [
        "El objetivo es entender la plataforma para análisis y scoping. No uses el conocimiento del CMS para cazar huecos, adivinar contraseñas o atacar. En tu propio sitio, revisa el admin y la documentación del hosting — más fiable que cualquier detector.",
        "En un informe al cliente escribe: «los marcadores X parecen Y; confirmar con acceso».",
      ],
      lists: [
        {
          intro: "Checklist de recon:",
          items: [
            "View Source + Network",
            "robots/sitemap",
            "1–2 detectores externos",
            "hipótesis de CMS + confianza",
            "sin escaneos de vulnerabilidades",
          ],
        },
      ],
      notes: [
        {
          title: "En la práctica",
          kind: "tip",
          text: "«Detectar CMS» ≠ obtener acceso. Los marcadores públicos son el techo del recon legal.",
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
      ],
    },
  ],
  related: [
    "ishodnyy-kod",
    "tehnicheskiy-seo-audit",
    "bezopasnost-sayta",
    "seo-bitrix",
    "zakrytie-ot-indeksatsii",
  ],
};

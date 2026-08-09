import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-vebmaster — same structure as RU JSON. */
export const yandeksVebmasterEn: BlogPost = {
  slug: "yandeks-vebmaster",
  title: "Yandex Webmaster: how to connect and what to watch",
  date: "2020-01-23",
  category: "SEO",
  cover: "/images/blog/yandeks-vebmaster/cover-en.webp",
  excerpt:
    "Why Yandex Webmaster matters, how to verify a site, which sections to watch (overview, diagnostics, index, queries, links, tools), and how not to confuse reports with a ranking switch.",
  lead: [
    "Yandex Webmaster is the panel that connects your site to Yandex Search: indexing, errors, queries, sitemap, security, and service settings. Without it, site fixes often stay blind — the bot crawls differently than you think.",
    "Below: how to add a property, which blocks to check regularly, and how to read data without obsessing over positions. Menus and tab names move — lean on report meaning and current Yandex Help. Webmaster does not manually push a site up the results.",
  ],
  faq: [
    {
      q: "Does Webmaster replace Google Search Console?",
      a: "No. For an RU audience you usually need both tracks: Yandex and Google.",
    },
    {
      q: "Do I need a Yandex email?",
      a: "You need a Yandex account. Verification — meta tag, HTML file, or DNS TXT (current methods are listed in the UI when you add the site).",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only URL source, but it helps mid-size and large sites. List it in robots.txt and add it in Webmaster.",
    },
    {
      q: "Does a recrawl request mean instant page-one rankings?",
      a: "No. It’s a request to look at a URL sooner. Rankings depend on page quality, competition, and time; planned share of the core on page one often grows over two to six months after work starts — prep is not the same as rankings.",
    },
    {
      q: "Does IQS still matter?",
      a: "Yandex’s public Site Quality Index badge is long gone from the familiar view. Watch diagnostics, index, clicks, and security — don’t chase outdated badges from old guides.",
    },
    {
      q: "Are Turbo pages required?",
      a: "No. They historically sped content in results; the product and priorities changed. First make a fast, usable main site; add Turbo only if current Help still makes it relevant.",
    },
    {
      q: "Where should I write if a status is unclear?",
      a: "Self-check reports first. Then support via Webmaster Help. A separate article on tickets — Yandex support.",
    },
    {
      q: "How often should I check?",
      a: "After releases — right away. On a plan, weekly: diagnostics, index, queries. Not hourly for a rank jump.",
    },
  ],
  sections: [
    {
      title: "Why Webmaster matters",
      level: 2,
      paras: [
        "You see how Yandex crawls and indexes the site, which URLs are in search, where errors and violations are, which queries drive impressions and clicks, and how external links and service files look. That’s a base for tech and content — not a replacement for semantics and copy.",
        "The panel helps at launch (verify the site, submit a sitemap, catch mirrors) and in ongoing work (index drops, malware, moves, query rises and falls). Without it it’s hard to prove the problem is in search — not only in gut feel.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "verify ownership and set the region",
            "watch the index and exclusions",
            "catch diagnostic and security errors",
            "review query stats",
            "manage moves, crawl rate, notifications",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Setup and ownership verification",
      level: 2,
      paras: [
        "Sign in to a Yandex account, add the site URL, and verify ownership. Usually available: meta tag in `<head>`, HTML file in the root, or DNS TXT. After verification, reports and tools open.",
        "Add the canonical host (https, www or non-www — as you’ll live going forward) and check mirror gluing right away. Mistakes here later hurt moves and stats.",
      ],
      lists: [
        {
          intro: "Right after adding:",
          items: [
            "submit a sitemap",
            "check robots.txt with the tool",
            "turn on email notifications",
            "delegate access to a vendor if needed",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Overview, quality, and diagnostics",
      level: 2,
      paras: [
        "Overview is a quick pulse: issues, search updates, clicks, crawls, links. Don’t dig everything at once: critical and fatal errors, security and violations first, then possible notes.",
        "Diagnostics flags typical holes (empty descriptions, availability, certificate, and the like) and points to fixes. It’s a health checklist — not a score of how high you rank. Some old quality badges and IQS from 2019–2020 guides are obsolete — lean on current screens.",
      ],
      lists: [
        {
          intro: "Triage priority:",
          items: [
            "security and violations",
            "errors that block crawl or index",
            "mass page exclusions",
            "then snippet cosmetics and tips",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Indexing: crawls, sitemap, moves",
      level: 2,
      paras: [
        "The indexing section shows what the bot crawled, what’s in search, why a URL is excluded, and how structure looks from search’s view. CSV and XLS exports help catch duplicates, utility pages, and sudden dropouts.",
        "Useful: recrawl important URLs, monitor key pages, manage crawl rate under server load, and the move wizard (domain, www, https) — only to verified addresses. Linking Metrica can hint popular sections for crawl — a signal, not a ranking guarantee.",
      ],
      lists: [
        {
          intro: "Check regularly:",
          items: [
            "pages in search vs expectation",
            "exclusion reasons",
            "sitemap status",
            "status codes on key URLs",
            "the mirror after a release or move",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Search queries and links",
      level: 2,
      paras: [
        "Query stats: impressions, clicks, CTR, average positions. Query groups help watch the core and landings. Recommended tips are ideas for semantics and ads, not an autopilot for rankings — check intent and competition.",
        "In links, watch external donor growth and anchors; internals help find broken links. A sharp spammy spike is a reason to audit the profile — not to celebrate “we’re being linked.”",
      ],
      lists: [
        {
          intro: "How to read queries:",
          items: [
            "impressions up, clicks flat — snippet or intent",
            "clicks down at the same impressions — SERP or competitors",
            "commercial-core groups — separate monitoring",
            "don’t confuse average position with a forever place",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Site info and tools",
      level: 2,
      paras: [
        "Region, original texts, how the name shows in results, sitelinks, products and prices (YML) — ways to describe the site more clearly to search. For stores, Market and feed links often matter more than clicking every button by hand.",
        "Tools: check robots.txt, sitemap, server response, mobile usability, markup and feed validators, URL removal from search. Use them after fixes and before a support ticket — requests get shorter and more useful.",
      ],
      lists: [
        {
          intro: "Post-release mini set:",
          items: [
            "robots and sitemap error-free",
            "200/301 checks on key URLs",
            "mobile fitness of critical landings",
            "structured data if you claim rich snippets",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
      notes: [
        {
          title: "Turbo and outdated blocks",
          kind: "tip",
          text: "Sections like Turbo pages and old quality badges are detailed in old guides; in the 2020s Yandex priorities changed. Before implementing, check Help — don’t copy a 2019 checklist verbatim.",
        },
      ],
    },
    {
      title: "Settings, support, and place in SEO",
      level: 2,
      paras: [
        "In settings turn on critical-issue notifications, delegate access to an agency, link Metrica if needed. Don’t give full access to everyone — only people who actually run the site.",
        "Webmaster is a diagnostic track. Site prep (tech, semantics, copy) may take about a month; ranking buildup for the core is a different horizon — more often two to six months after work starts. If a panel status is unclear after self-check — write support with facts, not a demand to “put us on page one.”",
      ],
      lists: [
        {
          intro: "Weekly ritual:",
          items: [
            "diagnostics and security",
            "pages-in-search dynamics",
            "leading queries and CTR anomalies",
            "open tickets from findings",
          ],
        },
      ],
      links: [
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Why the site isn’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Webmaster reports are not page-one rankings. Prep and index are one thing; lasting core rankings build over months — typically two to six after work starts.",
        },
      ],
    },
  ],
  related: [
    "google-search-console",
    "podderzhka-yandeks",
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "metrika-ustanovka",
  ],
};

/** ES overlay for yandeks-vebmaster — same structure as RU JSON / EN. */
export const yandeksVebmasterEs: BlogPost = {
  slug: "yandeks-vebmaster",
  title: "Yandex Webmaster: cómo conectar y qué mirar",
  date: "2020-01-23",
  category: "SEO",
  cover: "/images/blog/yandeks-vebmaster/cover.webp",
  excerpt:
    "Por qué importa Yandex Webmaster, cómo verificar un sitio, qué secciones mirar (overview, diagnostics, índice, consultas, enlaces, tools) y cómo no confundir informes con un interruptor de ranking.",
  lead: [
    "Yandex Webmaster es el panel que conecta tu sitio con Yandex Search: indexación, errores, consultas, sitemap, seguridad y ajustes del servicio. Sin él, los arreglos del sitio a menudo van a ciegas — el bot rastrea distinto de lo que crees.",
    "Abajo: cómo añadir una property, qué bloques revisar con regularidad y cómo leer datos sin obsesionarte con posiciones. Menús y nombres de pestaña se mueven — apóyate en el significado del informe y en la Ayuda actual de Yandex. Webmaster no sube el sitio a mano en los resultados.",
  ],
  faq: [
    {
      q: "¿Webmaster sustituye a Google Search Console?",
      a: "No. Para una audiencia RU normalmente hacen falta ambas pistas: Yandex y Google.",
    },
    {
      q: "¿Necesito un email de Yandex?",
      a: "Necesitas una cuenta Yandex. La verificación — meta tag, archivo HTML o DNS TXT (los métodos actuales aparecen en la UI al añadir el sitio).",
    },
    {
      q: "¿Hace falta un sitemap?",
      a: "No es la única fuente de URLs, pero ayuda en sitios medianos y grandes. Lístalo en robots.txt y añádelo en Webmaster.",
    },
    {
      q: "¿Una solicitud de recrawl significa ranking inmediato en primera página?",
      a: "No. Es una petición de mirar una URL antes. El ranking depende de calidad de página, competencia y tiempo; la cuota planificada del núcleo en primera página a menudo crece en dos a seis meses tras empezar el trabajo — la prep no es lo mismo que el ranking.",
    },
    {
      q: "¿El IQS sigue importando?",
      a: "La insignia pública del Índice de Calidad del Sitio de Yandex hace tiempo que desapareció de la vista familiar. Mira diagnostics, índice, clics y seguridad — no persigas badges obsoletos de guías viejas.",
    },
    {
      q: "¿Las páginas Turbo son obligatorias?",
      a: "No. Históricamente aceleraban contenido en resultados; el producto y las prioridades cambiaron. Primero haz un sitio principal rápido y usable; añade Turbo solo si la Ayuda actual aún lo hace relevante.",
    },
    {
      q: "¿Dónde escribo si un estado no está claro?",
      a: "Primero auto-chequea los informes. Luego soporte vía Ayuda de Webmaster. Un artículo aparte sobre tickets — soporte Yandex.",
    },
    {
      q: "¿Con qué frecuencia revisar?",
      a: "Tras releases — al momento. En plan, semanal: diagnostics, índice, consultas. No cada hora por un salto de posición.",
    },
  ],
  sections: [
    {
      title: "Por qué importa Webmaster",
      level: 2,
      paras: [
        "Ves cómo Yandex rastrea e indexa el sitio, qué URLs están en búsqueda, dónde hay errores y violaciones, qué consultas traen impresiones y clics, y cómo se ven enlaces externos y archivos de servicio. Eso es base para técnica y contenido — no un sustituto de semántica y copy.",
        "El panel ayuda en el lanzamiento (verificar el sitio, enviar sitemap, pillar espejos) y en el trabajo continuo (caídas de índice, malware, mudanzas, subidas y bajadas de consultas). Sin él es difícil demostrar que el problema está en búsqueda — no solo en la intuición.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "verificar ownership y fijar la región",
            "mirar el índice y las exclusiones",
            "pillar errores de diagnostics y seguridad",
            "revisar stats de consultas",
            "gestionar mudanzas, crawl rate, notificaciones",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Setup y verificación de ownership",
      level: 2,
      paras: [
        "Entra con una cuenta Yandex, añade la URL del sitio y verifica ownership. Suele haber: meta tag en `<head>`, archivo HTML en la raíz o DNS TXT. Tras la verificación se abren informes y tools.",
        "Añade el host canónico (https, www o non-www — como vivirás hacia adelante) y revisa el pegado de espejos de inmediato. Los errores aquí luego duelen en mudanzas y stats.",
      ],
      lists: [
        {
          intro: "Justo después de añadir:",
          items: [
            "enviar un sitemap",
            "revisar robots.txt con la tool",
            "activar notificaciones por email",
            "delegar acceso a un vendor si hace falta",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap XML",
          href: "/es/blog/karta-sayta/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
    {
      title: "Overview, calidad y diagnostics",
      level: 2,
      paras: [
        "Overview es un pulso rápido: issues, updates de búsqueda, clics, crawls, enlaces. No caves todo a la vez: primero errores críticos y fatales, seguridad y violaciones; luego notas posibles.",
        "Diagnostics marca agujeros típicos (descriptions vacías, disponibilidad, certificado y similares) y apunta a arreglos. Es un checklist de salud — no una nota de lo alto que rankeas. Algunos badges viejos de calidad e IQS de guías 2019–2020 están obsoletos — apóyate en pantallas actuales.",
      ],
      lists: [
        {
          intro: "Prioridad de triage:",
          items: [
            "seguridad y violaciones",
            "errores que bloquean crawl o índice",
            "exclusiones masivas de páginas",
            "luego cosmética de snippet y tips",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
        {
          label: "Snippets",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Indexación: crawls, sitemap, mudanzas",
      level: 2,
      paras: [
        "La sección de indexación muestra lo que el bot rastreó, qué está en búsqueda, por qué una URL está excluida y cómo se ve la estructura desde la búsqueda. Exports CSV y XLS ayudan a pillar duplicados, páginas de utilidad y caídas repentinas.",
        "Útil: pedir recrawl de URLs importantes, monitorear páginas clave, gestionar crawl rate bajo carga del servidor y el wizard de mudanza (dominio, www, https) — solo a direcciones verificadas. Vincular Metrica puede sugerir secciones populares para crawl — una señal, no una garantía de ranking.",
      ],
      lists: [
        {
          intro: "Revisa con regularidad:",
          items: [
            "páginas en búsqueda vs expectativa",
            "motivos de exclusión",
            "estado del sitemap",
            "códigos de estado en URLs clave",
            "el espejo tras un release o mudanza",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Tag canónico",
          href: "/es/blog/kanonicheskiy-teg/",
        },
        {
          label: "Instalar Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Consultas de búsqueda y enlaces",
      level: 2,
      paras: [
        "Stats de consultas: impresiones, clics, CTR, posiciones medias. Los grupos de consultas ayudan a mirar el núcleo y las landings. Los tips recomendados son ideas para semántica y ads, no un autopiloto de ranking — revisa intención y competencia.",
        "En enlaces, mira el crecimiento de donors externos y anchors; los internos ayudan a encontrar enlaces rotos. Un pico spammy brusco es motivo para auditar el perfil — no para celebrar «nos están linkeando».",
      ],
      lists: [
        {
          intro: "Cómo leer consultas:",
          items: [
            "impresiones arriba, clics planos — snippet o intención",
            "clics abajo con las mismas impresiones — SERP o competidores",
            "grupos del núcleo comercial — monitoreo aparte",
            "no confundas posición media con un sitio eterno",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Info del sitio y tools",
      level: 2,
      paras: [
        "Región, textos originales, cómo se muestra el nombre en resultados, sitelinks, productos y precios (YML) — formas de describir el sitio con más claridad a la búsqueda. Para tiendas, enlaces a Market y feeds suelen importar más que pulsar cada botón a mano.",
        "Tools: revisar robots.txt, sitemap, respuesta del servidor, usabilidad móvil, validadores de markup y feed, eliminación de URL de búsqueda. Úsalas tras arreglos y antes de un ticket de soporte — las solicitudes salen más cortas y útiles.",
      ],
      lists: [
        {
          intro: "Mini set post-release:",
          items: [
            "robots y sitemap sin error",
            "checks 200/301 en URLs clave",
            "aptitud móvil de landings críticas",
            "datos estructurados si reclamas rich snippets",
          ],
        },
      ],
      links: [
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
      notes: [
        {
          title: "Turbo y bloques obsoletos",
          kind: "tip",
          text: "Secciones como páginas Turbo y badges viejos de calidad se detallan en guías antiguas; en los 2020 las prioridades de Yandex cambiaron. Antes de implementar, revisa la Ayuda — no copies un checklist de 2019 al pie de la letra.",
        },
      ],
    },
    {
      title: "Ajustes, soporte y lugar en el SEO",
      level: 2,
      paras: [
        "En ajustes activa notificaciones de issues críticos, delega acceso a una agencia, vincula Metrica si hace falta. No des acceso completo a todos — solo a quien de verdad opera el sitio.",
        "Webmaster es una pista de diagnóstico. La prep del sitio (técnica, semántica, copy) puede tomar cerca de un mes; el crecimiento de ranking del núcleo es otro horizonte — más a menudo dos a seis meses tras empezar el trabajo. Si un estado del panel no está claro tras el auto-chequeo — escribe a soporte con hechos, no con una exigencia de «ponednos en primera página».",
      ],
      lists: [
        {
          intro: "Ritual semanal:",
          items: [
            "diagnostics y seguridad",
            "dinámica de páginas en búsqueda",
            "consultas líderes y anomalías de CTR",
            "tickets abiertos desde hallazgos",
          ],
        },
      ],
      links: [
        {
          label: "Soporte Yandex",
          href: "/es/blog/podderzhka-yandeks/",
        },
        {
          label: "Por qué el sitio no rankea",
          href: "/es/blog/sayt-ne-v-top/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Los informes de Webmaster no son posiciones en primera página. Prep e índice son una cosa; el ranking duradero del núcleo se construye en meses — típicamente dos a seis tras empezar el trabajo.",
        },
      ],
    },
  ],
  related: [
    "google-search-console",
    "podderzhka-yandeks",
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "metrika-ustanovka",
  ],
};

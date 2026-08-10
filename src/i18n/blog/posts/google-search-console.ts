import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-search-console — same structure as RU JSON. */
export const googleSearchConsoleEn: BlogPost = {
  slug: "google-search-console",
  title: "Google Search Console: what it is and why you need it",
  date: "2020-08-17",
  category: "SEO",
  cover: "/images/blog/google-search-console/cover-en.webp",
  excerpt:
    "What Google Search Console (formerly Webmaster Tools) does: verify the site, submit a sitemap, read index and error reports, and review queries — without treating it like a ranking switch.",
  lead: [
    "Google Search Console (formerly Google Webmaster Tools) is a free panel that connects your site to Google Search: indexing, crawl errors, search queries, sitemaps, and URL checks.",
    "Below: why it matters, how to verify a property, what to watch after setup, and how not to confuse reports with a ranking guarantee. The UI moves; report meaning matters more than where the buttons sit.",
  ],
  faq: [
    {
      q: "Are Webmaster Tools and Search Console the same?",
      a: "Essentially yes — the old name became Search Console. Older articles still say Webmaster.",
    },
    {
      q: "Do I need a Google account?",
      a: "Yes. Verification uses an HTML file, meta tag, DNS, or a link through Analytics / Tag Manager when those are connected.",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only way Google finds URLs, but it helps a lot on mid-size and large sites. List it in robots.txt and in GSC.",
    },
    {
      q: "Does GSC replace Yandex Webmaster?",
      a: "No. For a Russian audience you usually run both panels.",
    },
    {
      q: "Are impressions and clicks the same as rankings?",
      a: "They’re Google Search data for your URLs. Average position is a guide — not an exact “#1 every day.”",
    },
    {
      q: "How often should I check it?",
      a: "After releases — right away. On a plan, weekly: errors, coverage, queries. Not hourly.",
    },
    {
      q: "What does URL Inspection do?",
      a: "Shows how Google sees the page; you can request indexing. It doesn’t push you onto page one overnight.",
    },
    {
      q: "Security and malware warnings?",
      a: "GSC can flag hacks and issues. That’s a cue to investigate — not an automatic forever ban without review.",
    },
  ],
  sections: [
    {
      title: "Why Search Console matters",
      level: 2,
      paras: [
        "You see which queries drive impressions and clicks, which URLs are indexed, where 404s and server errors appear, how mobile usability and Core Web Vitals look (in current reports), and where markup breaks.",
        "Without the panel you’re flying blind: the site changed, but Google hasn’t picked it up — or errors are quietly stacking.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "verify domain or URL-prefix ownership",
            "track index and errors",
            "submit a sitemap",
            "review queries and pages",
            "inspect a specific URL",
          ],
        },
      ],
    },
    {
      title: "Setup and verification",
      level: 2,
      paras: [
        "Add a property. Prefer a domain property via DNS — it covers all subdomains and protocols. Alternative: a URL prefix (`https://www.example.com/`).",
        "Verification methods: DNS record, HTML file in the root, meta in `<head>`, or a link with GA4/GTM. Use what you can access. Don’t leave test meta on someone else’s template.",
      ],
      lists: [
        {
          intro: "After verification:",
          items: [
            "users and team permissions",
            "preferred host already via 301, not only in the panel",
            "link Analytics if needed",
            "add a sitemap",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Verifying only `http://` or only non-www while the canon is different. Glue mirrors with 301 first.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Sitemaps and crawling",
      level: 2,
      paras: [
        "In Sitemaps, add the `sitemap.xml` URL or a sitemap index. Watch processing status and errors. A map doesn’t force junk into the index — submit canons only.",
        "Coverage / pages reports show excluded URLs and why. Fix systemic issues (duplicates, noindex, 404s), not every single URL by hand.",
      ],
      lists: [
        {
          intro: "Cross-check:",
          items: [
            "sitemap in GSC and in robots.txt",
            "discovered vs expected counts",
            "server and redirect errors in the map",
            "mobile issues on templates",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Queries, pages, and URL Inspection",
      level: 2,
      paras: [
        "Search performance: queries, pages, countries, devices. Hunt pages with impressions but no clicks (weak snippet) and clicks landing on the wrong URLs.",
        "URL Inspection (older guides said “Fetch as Google”) checks one address and lets you request indexing after important edits.",
      ],
      lists: [
        {
          intro: "Weekly minimum:",
          items: [
            "new coverage errors",
            "click drops on key URLs",
            "manual actions (if any)",
            "CWV / usability by template priority",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "HTML issues and what the panel won’t do",
      level: 2,
      paras: [
        "Historically Webmaster flagged title/description problems. Same idea today: duplicate titles, too long or too short, missing. Fix in the CMS, then wait for recrawl.",
        "Don’t expect the panel to write SEO for you. It diagnoses; content and structure are your job.",
      ],
      lists: [
        {
          intro: "Tied back to the site:",
          items: [
            "unique Title and H1",
            "canonicals",
            "template speed",
            "clean filter indexing",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "Practice and limits",
      level: 2,
      paras: [
        "GSC is the source of truth for Google, not for Yandex. Data lags and can be sampled on large sites. Cross-check with logs and analytics.",
        "Prep can take weeks; ranking and traffic growth is planned over 2–6 months after that work — the panel shows progress and problems; it doesn’t flip on a “rankings mode.”",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "domain verified",
            "sitemap added",
            "team with the right permissions",
            "error-review playbook",
            "mirror setup in Yandex Webmaster",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fix mass coverage errors first — then spot-request indexing for key URLs.",
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
  related: [
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "snippet",
    "kanonicheskiy-teg",
  ],
};

/** ES overlay for google-search-console — same structure as RU JSON / EN. */
export const googleSearchConsoleEs: BlogPost = {
  slug: "google-search-console",
  title: "Google Search Console: qué es y por qué lo necesitas",
  date: "2020-08-17",
  category: "SEO",
  cover: "/images/blog/google-search-console/cover-es.webp",
  excerpt:
    "Qué hace Google Search Console (antes Webmaster Tools): verificar el sitio, enviar un sitemap, leer informes de índice y errores, y revisar queries — sin tratarlo como un interruptor de rankings.",
  lead: [
    "Google Search Console (antes Google Webmaster Tools) es un panel gratis que conecta tu sitio con Google Search: indexación, errores de crawl, queries de búsqueda, sitemaps y chequeos de URL.",
    "Abajo: por qué importa, cómo verificar una property, qué mirar tras el setup y cómo no confundir informes con una garantía de ranking. La UI se mueve; el sentido del informe pesa más que dónde están los botones.",
  ],
  faq: [
    {
      q: "¿Webmaster Tools y Search Console son lo mismo?",
      a: "En esencia sí — el nombre viejo pasó a Search Console. Artículos antiguos aún dicen Webmaster.",
    },
    {
      q: "¿Hace falta una cuenta de Google?",
      a: "Sí. La verificación usa un archivo HTML, meta tag, DNS o un enlace vía Analytics / Tag Manager cuando están conectados.",
    },
    {
      q: "¿Es obligatorio un sitemap?",
      a: "No es la única vía por la que Google encuentra URLs, pero ayuda mucho en sitios medianos y grandes. Lístalo en robots.txt y en GSC.",
    },
    {
      q: "¿GSC sustituye a Yandex Webmaster?",
      a: "No. Para una audiencia rusa suele correr ambos paneles.",
    },
    {
      q: "¿Impresiones y clics son lo mismo que rankings?",
      a: "Son datos de Google Search para tus URLs. La posición media es una guía — no un «nº 1 cada día» exacto.",
    },
    {
      q: "¿Cada cuánto lo reviso?",
      a: "Tras releases — al momento. En plan, semanal: errores, coverage, queries. No cada hora.",
    },
    {
      q: "¿Qué hace URL Inspection?",
      a: "Muestra cómo Google ve la página; puedes pedir indexación. No te pone en primera página de la noche a la mañana.",
    },
    {
      q: "¿Avisos de seguridad y malware?",
      a: "GSC puede marcar hacks e incidencias. Es una pista para investigar — no un ban eterno automático sin revisión.",
    },
  ],
  sections: [
    {
      title: "Por qué importa Search Console",
      level: 2,
      paras: [
        "Ves qué queries traen impresiones y clics, qué URLs están indexadas, dónde aparecen 404s y errores de servidor, cómo se ven la usabilidad móvil y Core Web Vitals (en los informes actuales), y dónde se rompe el markup.",
        "Sin el panel vuelas a ciegas: el sitio cambió, pero Google no lo ha recogido — o los errores se apilan en silencio.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "verificar ownership de dominio o URL-prefix",
            "seguir índice y errores",
            "enviar un sitemap",
            "revisar queries y páginas",
            "inspeccionar una URL concreta",
          ],
        },
      ],
    },
    {
      title: "Setup y verificación",
      level: 2,
      paras: [
        "Añade una property. Prefiere domain property vía DNS — cubre todos los subdominios y protocolos. Alternativa: un URL prefix (`https://www.example.com/`).",
        "Métodos de verificación: registro DNS, archivo HTML en la raíz, meta en `<head>`, o un enlace con GA4/GTM. Usa a lo que tengas acceso. No dejes meta de test en la plantilla de otro.",
      ],
      lists: [
        {
          intro: "Tras la verificación:",
          items: [
            "usuarios y permisos del equipo",
            "host preferido ya vía 301, no solo en el panel",
            "vincular Analytics si hace falta",
            "añadir un sitemap",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Verificar solo `http://` o solo non-www mientras el canon es otro. Pega los mirrors con 301 primero.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Sitemaps y crawl",
      level: 2,
      paras: [
        "En Sitemaps, añade la URL de `sitemap.xml` o un índice de sitemaps. Mira estado de procesamiento y errores. Un mapa no mete basura a la fuerza en el índice — envía solo canons.",
        "Los informes de Coverage / pages muestran URLs excluidas y por qué. Arregla problemas sistémicos (duplicados, noindex, 404s), no cada URL a mano.",
      ],
      lists: [
        {
          intro: "Cruza:",
          items: [
            "sitemap en GSC y en robots.txt",
            "conteos discovered vs expected",
            "errores de servidor y redirects en el mapa",
            "issues móviles en plantillas",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap XML",
          href: "/es/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Queries, páginas y URL Inspection",
      level: 2,
      paras: [
        "Search performance: queries, páginas, países, dispositivos. Caza páginas con impresiones pero sin clics (snippet flojo) y clics que aterrizan en las URLs equivocadas.",
        "URL Inspection (guías viejas decían «Fetch as Google») chequea una dirección y te deja pedir indexación tras cambios importantes.",
      ],
      lists: [
        {
          intro: "Mínimo semanal:",
          items: [
            "errores nuevos de coverage",
            "caídas de clics en URLs clave",
            "manual actions (si hay)",
            "CWV / usabilidad por prioridad de plantilla",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Issues de HTML y lo que el panel no hace",
      level: 2,
      paras: [
        "Históricamente Webmaster marcaba problemas de title/description. La misma idea hoy: titles duplicados, demasiado largos o cortos, ausentes. Arregla en el CMS, luego espera al recrawl.",
        "No esperes que el panel escriba SEO por ti. Diagnostica; contenido y estructura son tu trabajo.",
      ],
      lists: [
        {
          intro: "Atado de vuelta al sitio:",
          items: [
            "Title y H1 únicos",
            "canonicals",
            "velocidad de plantilla",
            "indexación limpia de filtros",
          ],
        },
      ],
      links: [
        {
          label: "Optimización on-page",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "Práctica y límites",
      level: 2,
      paras: [
        "GSC es la fuente de verdad para Google, no para Yandex. Los datos van con lag y pueden estar sampled en sitios grandes. Cruza con logs y analytics.",
        "La prep puede llevar semanas; el crecimiento de rankings y tráfico se planifica a 2–6 meses tras ese trabajo — el panel muestra progreso y problemas; no enciende un «modo rankings».",
      ],
      lists: [
        {
          intro: "Checklist de rollout:",
          items: [
            "dominio verificado",
            "sitemap añadido",
            "equipo con los permisos correctos",
            "playbook de revisión de errores",
            "setup espejo en Yandex Webmaster",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Arregla primero los errores masivos de coverage — luego pide indexación puntual de URLs clave.",
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
  related: [
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "snippet",
    "kanonicheskiy-teg",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for operatory-poiska — same structure as RU JSON. */
export const operatoryPoiskaEn: BlogPost = {
  slug: "operatory-poiska",
  title: "Search operators in SEO",
  date: "2020-03-03",
  category: "SEO",
  cover: "/images/blog/operatory-poiska/cover-en.webp",
  excerpt:
    "How to use Google and Yandex operators in SEO: site:, intitle:, inurl:, filetype: and combos — for index, duplicates, and research, without outdated “magic” commands.",
  lead: [
    "Operators (query language) refine results: pages of one site, a word in the title, a PDF, an exact phrase. For SEO that’s a quick manual slice of the index and competitors — slower than an API/crawler, but with no subscription.",
    "Below: syntax, working operators, and scenarios — index checks, duplicates, files, linking. Some old Google commands weakened or vanished (`related:`, `cache:` behavior changes) — always verify on the live SERP. This doesn’t replace an audit and isn’t a page-one button.",
  ],
  faq: [
    {
      q: "Does site: show every indexed page?",
      a: "No — it’s a sample. The number in the SERP header is an estimate. For completeness use Webmaster / Search Console and a crawler.",
    },
    {
      q: "Does cache: still work?",
      a: "Behavior has changed; more reliable is crawl date in webmaster panels and saved copies where available.",
    },
    {
      q: "How does Yandex differ from Google?",
      a: "The operator set is narrower and the syntax differs. Basic ideas (site, exact phrase, filetype) are similar — check Yandex Help.",
    },
    {
      q: "Can you combine operators?",
      a: "Yes: `site:example.com intitle:\"delivery\" -cart`. Mind spaces/quotes; test short queries.",
    },
    {
      q: "Is related: useful for finding link donors?",
      a: "The operator is unstable/weakened. For sites, prefer topical search, outreach, and backlink tools.",
    },
    {
      q: "Is using search operators legal?",
      a: "Yes for researching public SERPs of your and others’ sites. Don’t use operators as cover for hacking, scraping against rules, or spam.",
    },
    {
      q: "Why use operators if you have Screaming Frog?",
      a: "A crawler sees your HTML. Operators show what’s already in the search index — a different slice.",
    },
    {
      q: "Will search operators raise rankings?",
      a: "No. They’re diagnostics. Fixes and content are separate; core page-one share is planned 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "How the syntax works",
      level: 2,
      paras: [
        "Typical form: `operator:value` with no space after the colon. Exact phrase — in quotes. Minus `-word` excludes a term. Parentheses and `OR` group alternatives (`OR` case matters in Google).",
        "Combine carefully: simple query first, then refine. If results are empty — drop an extra operator and check typos.",
      ],
      lists: [
        {
          intro: "Basic moves:",
          items: [
            "`\"exact phrase\"`",
            "`-minusword`",
            "`OR` / `|` for alternatives",
            "`*` as a wildcard (where it still works)",
            "parentheses for grouping",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "A space after `site:` or curly quotes instead of straight ones — the query breaks.",
        },
      ],
    },
    {
      title: "Key Google operators for SEO",
      level: 2,
      paras: [
        "`site:` — domain/path pages in results. `intitle:` / `allintitle:` — word or phrase in the title. `inurl:` / `allinurl:` — in the URL. `intext:` / `allintext:` — in the body (noisier).",
        "`filetype:pdf` (and others) — file search. `before:` / `after:` — document date limits (where supported). Prices via `$` — a narrow unstable case, almost unused for RU stores.",
      ],
      tables: [
        {
          caption: "Common set",
          headers: ["Operator", "Why in SEO"],
          rows: [
            ["site:", "Index slice for a domain/section"],
            ["intitle:", "Pages with a key in the title"],
            ["inurl:", "Pretty URLs, filters, parameters"],
            ["filetype:", "PDF/DOC in the index"],
            ["\"…\"", "Exact match / text duplicates"],
            ["-word", "Minus noise in results"],
          ],
        },
      ],
      notes: [
        {
          title: "Currency",
          kind: "tip",
          text: "Google’s command list shrank for years. Don’t copy “42 operators” from old guides without checking.",
        },
      ],
    },
    {
      title: "Yandex: what to use",
      level: 2,
      paras: [
        "Yandex also has query refiners (site, filetype, exact phrase, and more), but the set and details differ. For an RU project check both tracks: `site:` in Google ≠ the full Yandex picture.",
        "Index counts are more reliable in Yandex Webmaster. Operators are a quick manual check after releases.",
      ],
      lists: [
        {
          intro: "Practice for RU:",
          items: [
            "site: slice in both search engines",
            "Webmaster + GSC as sources of truth",
            "Yandex Help on query language — before rare operators",
          ],
        },
      ],
      links: [
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Scenarios: index, duplicates, files",
      level: 2,
      paras: [
        "After launching a section: `site:example.com/catalog/` — are URLs in results. Suspect duplicate titles: `site:example.com intitle:\"same heading\"`. An exact quote in quotes helps find text copies.",
        "Extra PDFs/price lists: `site:example.com filetype:pdf`. Utility paths in the index: `site:example.com inurl:session` or `inurl:sort=` — a reason to close/glue filters.",
      ],
      lists: [
        {
          intro: "Practical checks:",
          items: [
            "new section appears in results",
            "no pile of duplicate titles",
            "cart/account not indexed",
            "extra files aren’t sitting in search",
            "www and non-www don’t double (after gluing)",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Scenarios: competitors and content",
      level: 2,
      paras: [
        "`site:competitor.com intitle:review` — which content formats they have indexed. Structure ideas, not copy-paste. For internal linking on your site, find strong URLs with `site:` + a key and link deliberately.",
        "Hunting guest sites via `inurl:guest-post` is noisy and often leads to link spam. Prefer topical outreach and live media.",
      ],
      lists: [
        {
          intro: "Ethical boundaries:",
          items: [
            "research the public SERP",
            "don’t scrape aggressively against rules",
            "don’t hunt “holes” for hacking",
            "don’t build strategy on dead operators",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "Limits and place in the process",
      level: 2,
      paras: [
        "Results are personalized and capped. Operators don’t replace a crawler, logs, and webmaster panels. Use them as a cheat sheet on audits and after releases.",
        "Found an issue with an operator — fix with canonical, 301, robots/meta, content. Fix prep — days/weeks; visibility growth for the core — month to month.",
      ],
      lists: [
        {
          intro: "Checklist after a check:",
          items: [
            "log the query and a screenshot",
            "cross-check Webmaster/GSC",
            "open a fix ticket",
            "rerun site:/intitle: after the fix",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "SEO software",
          href: "/en/blog/programmy-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Operator diagnostics ≠ page one. Core page-one share is a separate horizon after the work.",
        },
      ],
    },
  ],
  related: [
    "dubli-stranits",
    "kanonicheskiy-teg",
    "zakrytie-ot-indeksatsii",
    "screaming-frog",
    "google-search-console",
    "analiz-konkurentov",
  ],
};

/** ES overlay for operatory-poiska — same structure as RU JSON / EN. */
export const operatoryPoiskaEs: BlogPost = {
  slug: "operatory-poiska",
  title: "Operadores de búsqueda en SEO",
  date: "2020-03-03",
  category: "SEO",
  cover: "/images/blog/operatory-poiska/cover.webp",
  excerpt:
    "Cómo usar operadores de Google y Yandex en SEO: site:, intitle:, inurl:, filetype: y combos — para índice, duplicados e investigación, sin comandos «mágicos» obsoletos.",
  lead: [
    "Los operadores (lenguaje de consulta) afinan resultados: páginas de un sitio, una palabra en el title, un PDF, una frase exacta. Para SEO es un corte manual rápido del índice y de competidores — más lento que un API/crawler, pero sin suscripción.",
    "Abajo: sintaxis, operadores que funcionan y escenarios — checks de índice, duplicados, archivos, linking. Algunos comandos viejos de Google se debilitaron o desaparecieron (`related:`, el comportamiento de `cache:`) — verifica siempre en la SERP en vivo. Esto no sustituye una auditoría y no es un botón de primera página.",
  ],
  faq: [
    {
      q: "¿site: muestra cada página indexada?",
      a: "No — es una muestra. El número en la cabecera de la SERP es una estimación. Para completitud usa Webmaster / Search Console y un crawler.",
    },
    {
      q: "¿cache: sigue funcionando?",
      a: "El comportamiento ha cambiado; más fiable es la fecha de crawl en paneles de webmaster y copias guardadas donde existan.",
    },
    {
      q: "¿En qué se diferencia Yandex de Google?",
      a: "El set de operadores es más estrecho y la sintaxis difiere. Las ideas básicas (site, frase exacta, filetype) son parecidas — revisa la Ayuda de Yandex.",
    },
    {
      q: "¿Se pueden combinar operadores?",
      a: "Sí: `site:example.com intitle:\"delivery\" -cart`. Cuida espacios/comillas; prueba consultas cortas.",
    },
    {
      q: "¿related: sirve para encontrar donors de enlaces?",
      a: "El operador es inestable/debilitado. Para sitios, prefiere búsqueda temática, outreach y herramientas de backlinks.",
    },
    {
      q: "¿Usar operadores de búsqueda es legal?",
      a: "Sí para investigar SERPs públicas de tu sitio y de otros. No uses operadores como tapadera de hacking, scraping contra reglas o spam.",
    },
    {
      q: "¿Para qué operadores si tienes Screaming Frog?",
      a: "Un crawler ve tu HTML. Los operadores muestran lo que ya está en el índice de búsqueda — un corte distinto.",
    },
    {
      q: "¿Los operadores de búsqueda suben rankings?",
      a: "No. Son diagnóstico. Los arreglos y el contenido van aparte; la cuota de primera página del núcleo se planifica a 2–6 meses tras el arranque del trabajo.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona la sintaxis",
      level: 2,
      paras: [
        "Forma típica: `operator:value` sin espacio tras los dos puntos. Frase exacta — entre comillas. El menos `-word` excluye un término. Paréntesis y `OR` agrupan alternativas (en Google importa mayúsculas/minúsculas de `OR`).",
        "Combina con cuidado: primero una consulta simple, luego afina. Si no hay resultados — quita un operador extra y revisa typos.",
      ],
      lists: [
        {
          intro: "Movimientos básicos:",
          items: [
            "`\"frase exacta\"`",
            "`-minusword`",
            "`OR` / `|` para alternativas",
            "`*` como comodín (donde aún funciona)",
            "paréntesis para agrupar",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Un espacio tras `site:` o comillas tipográficas en vez de rectas — la consulta se rompe.",
        },
      ],
    },
    {
      title: "Operadores clave de Google para SEO",
      level: 2,
      paras: [
        "`site:` — páginas de dominio/ruta en resultados. `intitle:` / `allintitle:` — palabra o frase en el title. `inurl:` / `allinurl:` — en la URL. `intext:` / `allintext:` — en el cuerpo (más ruidoso).",
        "`filetype:pdf` (y otros) — búsqueda de archivos. `before:` / `after:` — límites de fecha del documento (donde se soporta). Precios vía `$` — un caso estrecho e inestable, casi sin uso para tiendas RU.",
      ],
      tables: [
        {
          caption: "Set habitual",
          headers: ["Operador", "Para qué en SEO"],
          rows: [
            ["site:", "Corte de índice de un dominio/sección"],
            ["intitle:", "Páginas con una clave en el title"],
            ["inurl:", "URLs bonitas, filtros, parámetros"],
            ["filetype:", "PDF/DOC en el índice"],
            ["\"…\"", "Exact match / duplicados de texto"],
            ["-word", "Quitar ruido en resultados"],
          ],
        },
      ],
      notes: [
        {
          title: "Actualidad",
          kind: "tip",
          text: "La lista de comandos de Google se ha reducido durante años. No copies «42 operadores» de guías viejas sin comprobar.",
        },
      ],
    },
    {
      title: "Yandex: qué usar",
      level: 2,
      paras: [
        "Yandex también tiene refinadores de consulta (site, filetype, frase exacta y más), pero el set y los detalles difieren. Para un proyecto RU revisa ambas vías: `site:` en Google ≠ el cuadro completo de Yandex.",
        "Los conteos de índice son más fiables en Yandex Webmaster. Los operadores son un check manual rápido tras releases.",
      ],
      lists: [
        {
          intro: "Práctica para RU:",
          items: [
            "corte site: en ambos buscadores",
            "Webmaster + GSC como fuentes de verdad",
            "Ayuda de Yandex sobre lenguaje de consulta — antes de operadores raros",
          ],
        },
      ],
      links: [
        {
          label: "Soporte de Yandex",
          href: "/es/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Escenarios: índice, duplicados, archivos",
      level: 2,
      paras: [
        "Tras lanzar una sección: `site:example.com/catalog/` — ¿están las URLs en resultados? Sospecha de titles duplicados: `site:example.com intitle:\"mismo heading\"`. Una cita exacta entre comillas ayuda a encontrar copias de texto.",
        "PDFs/listas de precios de más: `site:example.com filetype:pdf`. Rutas de utilidad en el índice: `site:example.com inurl:session` o `inurl:sort=` — motivo para cerrar/pegar filtros.",
      ],
      lists: [
        {
          intro: "Checks prácticos:",
          items: [
            "la sección nueva aparece en resultados",
            "no hay un montón de titles duplicados",
            "carrito/cuenta no indexados",
            "archivos de más no se quedan en la búsqueda",
            "www y non-www no duplican (tras pegar)",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Cerrar a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Escenarios: competidores y contenido",
      level: 2,
      paras: [
        "`site:competitor.com intitle:review` — qué formatos de contenido tienen indexados. Ideas de estructura, no copy-paste. Para enlazado interno en tu sitio, encuentra URLs fuertes con `site:` + una clave y enlaza a propósito.",
        "Cazar sitios guest vía `inurl:guest-post` es ruidoso y a menudo lleva a spam de enlaces. Prefiere outreach temático y medios vivos.",
      ],
      lists: [
        {
          intro: "Límites éticos:",
          items: [
            "investigar la SERP pública",
            "no scrapear de forma agresiva contra las reglas",
            "no cazar «agujeros» para hacking",
            "no armar estrategia sobre operadores muertos",
          ],
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
      ],
    },
    {
      title: "Límites y lugar en el proceso",
      level: 2,
      paras: [
        "Los resultados están personalizados y topeados. Los operadores no sustituyen un crawler, logs y paneles de webmaster. Úsalos como chuleta en auditorías y tras releases.",
        "Encontraste un problema con un operador — arréglalo con canonical, 301, robots/meta, contenido. La preparación del fix — días/semanas; el crecimiento de visibilidad del núcleo — de mes a mes.",
      ],
      lists: [
        {
          intro: "Checklist tras un check:",
          items: [
            "anota la consulta y un screenshot",
            "cruza con Webmaster/GSC",
            "abre un ticket de fix",
            "vuelve a correr site:/intitle: tras el arreglo",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Tag canonical",
          href: "/es/blog/kanonicheskiy-teg/",
        },
        {
          label: "Software SEO",
          href: "/es/blog/programmy-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Diagnóstico con operadores ≠ primera página. La cuota de primera página del núcleo es un horizonte aparte tras el trabajo.",
        },
      ],
    },
  ],
  related: [
    "dubli-stranits",
    "kanonicheskiy-teg",
    "zakrytie-ot-indeksatsii",
    "screaming-frog",
    "google-search-console",
    "analiz-konkurentov",
  ],
};

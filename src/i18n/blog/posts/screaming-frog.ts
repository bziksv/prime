import type { BlogPost } from "../../../data/blog";

/** EN overlay for screaming-frog — same structure as RU JSON. */
export const screamingFrogEn: BlogPost = {
  slug: "screaming-frog",
  title: "Screaming Frog SEO Spider: a technical site crawl",
  date: "2020-07-07",
  category: "SEO",
  cover: "/images/blog/screaming-frog/cover-en.webp",
  excerpt:
    "How to run a technical crawl in Screaming Frog: spider settings, status codes, title/H1, images, internal links, broken URLs, and Excel export — without an “one-button audit” cult.",
  lead: [
    "Screaming Frog SEO Spider is a desktop crawler: it walks your site like a bot and collects URLs, statuses, meta, headings, links, and page weight. The free version covers a basic audit; paid removes the URL cap and adds integrations.",
    "Below: key Spider settings, how to read reports, and what to fix from the results. Full audit methodology lives in the technical SEO audit guide; here the focus is the tool. Crawl your own projects or sites you have permission for — don’t hammer servers with crawl speed.",
  ],
  faq: [
    {
      q: "Is the free version enough?",
      a: "For small sites — often yes. On large catalogs you hit the URL limit: then a paid license, segmented Include/Exclude crawls, or a URL list export.",
    },
    {
      q: "Should I disable JS and CSS?",
      a: "For classic HTML audits people sometimes exclude heavy assets to speed the crawl. If JS templates and client render matter — use the rendering mode in your current version.",
    },
    {
      q: "Can I ignore robots.txt?",
      a: "On your staging — yes if utility sections are closed. On production first understand why URLs are blocked; don’t open everything with the crawler “for luck.”",
    },
    {
      q: "Does Screaming Frog replace an SEO audit?",
      a: "No. It collects tech. Next — priorities, content, UX, semantics. See the technical SEO audit article.",
    },
    {
      q: "What crawl speed is safe?",
      a: "One that doesn’t flood 5xx and No Response. On weak hosting lower threads/speed. You can filter your own visits in analytics during the audit.",
    },
    {
      q: "What should I do about duplicate titles?",
      a: "Make templates unique or glue duplicates with 301/canonical. Mass identical titles signal thin/template pages.",
    },
    {
      q: "Are broken external links critical?",
      a: "External 404s hurt UX and trust. Fix or remove. Internal broken links rank higher in priority.",
    },
    {
      q: "Does an audit mean page-one rankings in a week?",
      a: "No. Crawl and fixes are prep. Rankings for the core grow month to month; share of the core is typically planned for two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why a crawler and where to start",
      level: 2,
      paras: [
        "A crawler finds what the eye misses: 404s in the menu, duplicate titles, empty HTML, heavy images, odd URLs. Run after major releases and on a schedule.",
        "Set the start URL (prefer canonical https), wait for the queue to stabilize. Export tabs to CSV/Excel — easier to hand tasks to engineering.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "access to your site / permission",
            "clear canonical host",
            "lower speed on a weak server",
            "a plan: what you check first",
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
      title: "Spider settings: Basic, Limits, Advanced",
      level: 2,
      paras: [
        "Configuration → Spider: exclude resource types you don’t need if auditing HTML (legacy Flash/SWF is definitely out). Limits: Search Depth saves huge catalogs — key branches first.",
        "Include/Exclude — crawl only `/blog/` or exclude `/cart/` and infinite filter URLs. Preferences: title, H1, description, URL, alt length thresholds — for your briefs, not as a Google law.",
      ],
      lists: [
        {
          intro: "Practical settings minimum:",
          items: [
            "sensible speed / thread count",
            "depth or Include segment",
            "respect/ignore robots by task",
            "meta length thresholds for filters",
            "check No Response after the run",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Maxing crawl speed on shared hosting and concluding the site died because of SEO.",
        },
      ],
    },
    {
      title: "Status codes, meta, and duplicates",
      level: 2,
      paras: [
        "Response Codes: collect 4xx/5xx, redirect chains, Unexpected. Lots of No Response — lower speed and rerun. Internal → HTML: titles, meta descriptions, H1/H2, duplicates and gaps.",
        "Duplicate URLs — Duplicate filter. Empty pages — low Word Count at 200 OK. Don’t blanket-block everything in robots “to hide it”: prefer 301/removal/a proper canonical. Title/description length is a snippet guide, not ranking magic.",
      ],
      lists: [
        {
          intro: "First pass of the report:",
          items: [
            "internal 4xx / 5xx",
            "missing title / H1",
            "duplicate title and description",
            "duplicate URLs",
            "thin/zero content",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Images, page weight, internal links",
      level: 2,
      paras: [
        "Images: heavy files and Missing Alt. Compress and set meaningful alt — see the alt guide. Size / Response Time under Internal help find bricks, but absolute thresholds like “strictly 200 KB HTML / 6 seconds” are outdated: watch Core Web Vitals and real devices.",
        "Inlinks / Outlinks: important URLs should be reachable from the homepage in a sensible number of clicks and not be islands. Outbound spam and broken externals — External tab by status codes.",
      ],
      lists: [
        {
          intro: "What to turn into tickets:",
          items: [
            "images over a sensible weight",
            "empty alt on informational imgs",
            "pages with abnormal TTFB/size",
            "orphans with no internal links",
            "broken external",
          ],
        },
      ],
      links: [
        {
          label: "Alt and title on img",
          href: "/en/blog/alt-img/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "URLs: hyphens, length, dynamics",
      level: 2,
      paras: [
        "URL tab: Non-ASCII, underscores, dynamic (`?`, `&`), overly long addresses, duplicates. Hyphens beat `_` in pretty URLs; non-Latin in URLs is possible, but Latin is easier for the team — decide by project standard.",
        "Any URL change — 301 to the new canon and fix internal links. Otherwise the crawler shows the same 404s a month later.",
      ],
      lists: [
        {
          intro: "URL filters worth checking:",
          items: [
            "Duplicate",
            "Underscores",
            "Non ASCII",
            "Over N characters",
            "Parameters / Dynamic",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "How to fold the crawl into the workflow",
      level: 2,
      paras: [
        "Make a checklist: crawl → export → priorities (5xx/404 → duplicates → meta → weight) → tickets → recrawl. Screaming Frog covers the tech layer; keywords, content, and off-site links are other stages.",
        "Prep and fixes — days/weeks. Visibility growth for the core after removing blockers — month to month, planned two to six months. Don’t promise rankings after one Frog run.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "crawl after a release",
            "scheduled monthly/quarterly",
            "CSV archive with tickets",
            "recheck closed bugs",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Parsing: boundaries",
          href: "/en/blog/parsing/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A technical crawl is not page-one rankings. Remove blockers first, then grow visibility. Prep is not rankings; share of the core usually takes two to six months after work starts.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "bitye-ssylki",
    "dubli-stranits",
    "kanonicheskiy-teg",
    "razmer-stranitsy",
    "alt-img",
  ],
};

/** ES overlay for screaming-frog — same structure as RU JSON / EN. */
export const screamingFrogEs: BlogPost = {
  slug: "screaming-frog",
  title: "Screaming Frog SEO Spider: un crawl técnico del sitio",
  date: "2020-07-07",
  category: "SEO",
  cover: "/images/blog/screaming-frog/cover.webp",
  excerpt:
    "Cómo lanzar un crawl técnico en Screaming Frog: ajustes del spider, códigos de estado, title/H1, imágenes, enlaces internos, URLs rotas y export a Excel — sin culto a la «auditoría de un botón».",
  lead: [
    "Screaming Frog SEO Spider es un crawler de escritorio: recorre tu sitio como un bot y recoge URLs, estados, meta, headings, enlaces y peso de página. La versión gratis cubre una auditoría básica; la de pago quita el tope de URLs y añade integraciones.",
    "Abajo: ajustes clave del Spider, cómo leer informes y qué arreglar desde los resultados. La metodología completa de auditoría vive en la guía de auditoría SEO técnica; aquí el foco es la herramienta. Crawl tus propios proyectos o sitios con permiso — no machaques servidores con la velocidad de crawl.",
  ],
  faq: [
    {
      q: "¿Basta la versión gratis?",
      a: "En sitios pequeños — a menudo sí. En catálogos grandes chocas con el límite de URLs: entonces licencia de pago, crawls segmentados Include/Exclude o un export de lista de URLs.",
    },
    {
      q: "¿Debo desactivar JS y CSS?",
      a: "Para auditorías HTML clásicas a veces se excluyen assets pesados para acelerar el crawl. Si importan plantillas JS y render en cliente — usa el modo de rendering de tu versión actual.",
    },
    {
      q: "¿Puedo ignorar robots.txt?",
      a: "En tu staging — sí si hay secciones utilitarias cerradas. En producción primero entiende por qué están bloqueadas las URLs; no abras todo con el crawler «por suerte».",
    },
    {
      q: "¿Screaming Frog sustituye una auditoría SEO?",
      a: "No. Recoge técnica. Luego — prioridades, contenido, UX, semántica. Ver el artículo de auditoría SEO técnica.",
    },
    {
      q: "¿Qué velocidad de crawl es segura?",
      a: "La que no inunde 5xx y No Response. En hosting flojo baja threads/speed. Puedes filtrar tus propias visitas en analytics durante la auditoría.",
    },
    {
      q: "¿Qué hago con titles duplicados?",
      a: "Haz plantillas únicas o pega duplicados con 301/canonical. Titles idénticos en masa señalan páginas finas/de plantilla.",
    },
    {
      q: "¿Los enlaces externos rotos son críticos?",
      a: "Los 404 externos duelen a la UX y a la confianza. Arregla o quita. Los internos rotos van más arriba en prioridad.",
    },
    {
      q: "¿Una auditoría significa rankings en primera página en una semana?",
      a: "No. Crawl y arreglos son prep. Los rankings del núcleo crecen de mes a mes; la cuota del núcleo se planifica típicamente a dos a seis meses tras arrancar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Por qué un crawler y por dónde empezar",
      level: 2,
      paras: [
        "Un crawler encuentra lo que el ojo no ve: 404s en el menú, titles duplicados, HTML vacío, imágenes pesadas, URLs raras. Lánzalo tras releases grandes y con calendario.",
        "Fija la URL de inicio (preferible https canónico), espera a que la cola se estabilice. Exporta pestañas a CSV/Excel — más fácil pasar tareas a ingeniería.",
      ],
      lists: [
        {
          intro: "Antes de empezar:",
          items: [
            "acceso a tu sitio / permiso",
            "host canónico claro",
            "baja la velocidad en un servidor flojo",
            "un plan: qué revisas primero",
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
      title: "Ajustes del Spider: Basic, Limits, Advanced",
      level: 2,
      paras: [
        "Configuration → Spider: excluye tipos de recurso que no necesites si auditas HTML (Flash/SWF legacy fuera seguro). Limits: Search Depth salva catálogos enormes — primero las ramas clave.",
        "Include/Exclude — crawl solo `/blog/` o excluye `/cart/` y URLs de filtros infinitas. Preferences: umbrales de longitud de title, H1, description, URL, alt — para tus briefs, no como ley de Google.",
      ],
      lists: [
        {
          intro: "Mínimo práctico de ajustes:",
          items: [
            "velocidad / conteo de threads sensato",
            "profundidad o segmento Include",
            "respetar/ignorar robots según la tarea",
            "umbrales de longitud de meta para filtros",
            "revisar No Response tras el run",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "warning",
          text: "Poner la velocidad de crawl al máximo en shared hosting y concluir que el sitio murió por SEO.",
        },
      ],
    },
    {
      title: "Códigos de estado, meta y duplicados",
      level: 2,
      paras: [
        "Response Codes: recoge 4xx/5xx, cadenas de redirects, Unexpected. Muchos No Response — baja velocidad y vuelve a lanzar. Internal → HTML: titles, meta descriptions, H1/H2, duplicados y huecos.",
        "URLs duplicadas — filtro Duplicate. Páginas vacías — Word Count bajo con 200 OK. No bloquees todo en robots «para esconderlo»: mejor 301/quitar/un canonical correcto. La longitud de title/description es guía de snippet, no magia de rankings.",
      ],
      lists: [
        {
          intro: "Primer pase del informe:",
          items: [
            "4xx / 5xx internos",
            "title / H1 ausentes",
            "title y description duplicados",
            "URLs duplicadas",
            "contenido fino/cero",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Etiqueta canonical",
          href: "/es/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Imágenes, peso de página, enlaces internos",
      level: 2,
      paras: [
        "Images: archivos pesados y Missing Alt. Comprime y pon alt con sentido — ver la guía de alt. Size / Response Time bajo Internal ayudan a encontrar ladrillos, pero umbrales absolutos tipo «HTML estrictamente 200 KB / 6 segundos» están desfasados: mira Core Web Vitals y dispositivos reales.",
        "Inlinks / Outlinks: las URLs importantes deben alcanzarse desde la homepage en un número sensato de clics y no ser islas. Spam saliente y externos rotos — pestaña External por códigos de estado.",
      ],
      lists: [
        {
          intro: "Qué convertir en tickets:",
          items: [
            "imágenes por encima de un peso sensato",
            "alt vacío en imgs informativas",
            "páginas con TTFB/size anómalo",
            "huérfanas sin enlaces internos",
            "externos rotos",
          ],
        },
      ],
      links: [
        {
          label: "Alt y title en img",
          href: "/es/blog/alt-img/",
        },
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "URLs: guiones, longitud, dinámicas",
      level: 2,
      paras: [
        "Pestaña URL: Non-ASCII, underscores, dinámicas (`?`, `&`), direcciones demasiado largas, duplicados. Los guiones ganan a `_` en URLs bonitas; no-latín en URLs es posible, pero el latín es más fácil para el equipo — decide según el estándar del proyecto.",
        "Cualquier cambio de URL — 301 al nuevo canon y arreglar enlaces internos. Si no, el crawler enseña los mismos 404s un mes después.",
      ],
      lists: [
        {
          intro: "Filtros de URL que conviene revisar:",
          items: [
            "Duplicate",
            "Underscores",
            "Non ASCII",
            "Over N characters",
            "Parameters / Dynamic",
          ],
        },
      ],
      links: [
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Cómo plegar el crawl al workflow",
      level: 2,
      paras: [
        "Arma un checklist: crawl → export → prioridades (5xx/404 → duplicados → meta → peso) → tickets → recrawl. Screaming Frog cubre la capa técnica; keywords, contenido y enlaces off-site son otras etapas.",
        "Prep y arreglos — días/semanas. El crecimiento de visibilidad del núcleo tras quitar bloqueadores — de mes a mes, planificado a dos a seis meses. No prometas rankings tras un solo run de Frog.",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "crawl tras un release",
            "calendario mensual/trimestral",
            "archivo CSV con tickets",
            "recheck de bugs cerrados",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Parsing: límites",
          href: "/es/blog/parsing/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Un crawl técnico no son rankings en primera página. Primero quita bloqueadores, luego crece la visibilidad. Prep no es rankings; la cuota del núcleo suele llevar dos a seis meses tras arrancar el trabajo.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "bitye-ssylki",
    "dubli-stranits",
    "kanonicheskiy-teg",
    "razmer-stranitsy",
    "alt-img",
  ],
};

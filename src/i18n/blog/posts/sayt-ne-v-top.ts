import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayt-ne-v-top — same structure as RU JSON. */
export const saytNeVTopEn: BlogPost = {
  slug: "sayt-ne-v-top",
  title: "Why your pages aren’t ranking: 10 common reasons",
  date: "2020-01-31",
  category: "SEO",
  cover: "/images/blog/sayt-ne-v-top/cover-en.webp",
  excerpt:
    "Ten reasons pages miss page one: age, filters, content, tech, UX, security, hosting, domain, code, and the instant-results myth — with prep timelines separate from ranking growth.",
  lead: [
    "Strong copy and a clear menu help, but they are not enough. Pages can sit far down the results because the domain is young, under a filter, weak on tech, hard to use — or because someone expected miracles in a week.",
    "Below: ten frequent causes and what to check. Prep for promotion (tech, keywords, copy) usually takes weeks or about a month. Growing a solid share of the commercial core into page-one visibility is a different horizon — typically 2–6 months after work starts, improving month to month, with no guaranteed calendar date.",
  ],
  faq: [
    {
      q: "Can you reach page one in a month?",
      a: "In about a month it is realistic to prepare the site and start work. Ranking a commercial core on page one more often takes 2–6 months of buildup. “Launch equals page one” is a harmful myth.",
    },
    {
      q: "Does the sandbox officially exist?",
      a: "Search engines do not promise a separate “sandbox mode” for every new site. In practice new domains gather trust and signals longer — that is normal, not a CMS bug.",
    },
    {
      q: "If the content is unique, is page one guaranteed?",
      a: "No. You still need intent match, structure, tech, competition, and time. Uniqueness is a baseline — not a ticket to the first ten results.",
    },
    {
      q: "How do you tell a filter is to blame?",
      a: "A sharp drop across a query group, messages in Webmaster or Search Console, anomalies in the backlink profile. Do not diagnose from one phrase — watch trends and reports.",
    },
    {
      q: "Does malware on the site affect rankings?",
      a: "Yes: browser warnings, removal from results, lost trust. Clean and secure first; SEO expectations later.",
    },
    {
      q: "Can bad hosting really hurt rankings?",
      a: "Frequent downtime, slow TTFB, and a server far from the audience hurt crawl and UX. It is not a “penalty for the host brand” — it is availability and speed.",
    },
    {
      q: "Are hyphen, IDN, or digit domains a dead end?",
      a: "Not always. History, brand, query match, and trust matter more. Renaming for looks without proper 301s is a separate risk.",
    },
    {
      q: "Where should diagnosis start?",
      a: "Indexing and panel errors → tech (speed, mobile, status codes) → content and keywords → links and filters → UX and conversion. In parallel, lock the timeline: prep is not the same as ranking growth.",
    },
  ],
  sections: [
    {
      title: "How to read “we’re not ranking”",
      level: 2,
      paras: [
        "First clarify which queries: brand, informational, or commercial head terms. One URL does not have to sit on page one for every phrase in the niche. Watch core share, traffic, and leads — not one pretty position in a screenshot.",
        "Split the stages: the site is ready for promotion (prep) versus the site is building rankings (work plus time). Mixing them up is the main source of disappointment — and of dangerous “accelerators” like spam links and satellite networks.",
      ],
      lists: [
        {
          intro: "Mini-checklist before panic:",
          items: [
            "the page is indexed and returns 200",
            "query and intent match the landing",
            "there is real competition and a realistic horizon",
            "work has already run longer than a couple of weeks",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "1–2. Young site and filters",
      level: 2,
      paras: [
        "A new domain needs time for crawl and for behavioral and link signals to accumulate. A piece that “took off” on an old authoritative site often grows slower on a fresh name — that is expected. Strengthen the core (head, mid, and long-tail), structure, uniqueness, and tech; claim the property in Webmaster and Search Console.",
        "Filters and sanctions are a different story: a sharp collapse, warnings, a toxic backlink profile, over-optimization. Remove the cause first (spam, cloaking, fake engagement) — do not buy more links. See the filters and buying-links pieces for more.",
      ],
      lists: [
        {
          intro: "Useful at the start:",
          items: [
            "build the core and a relevance map",
            "clear critical tech errors",
            "do not expect page one two weeks after launch",
            "do not build “accelerators” like satellite networks",
          ],
        },
      ],
      links: [
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Satellite sites",
          href: "/en/blog/sayty-satellity/",
        },
      ],
    },
    {
      title: "3–4. Content and crawler-facing optimization",
      level: 2,
      paras: [
        "Weak, non-unique, or watery copy fails intent. Copy-paste and thin template cards lose to pages with facts, structure, and a real answer. Write for people; compare competitors on meaning — not only a uniqueness score in a tool.",
        "“Not enough optimization” does not mean stuffing a keyword into every paragraph. It means clear title and H1, sensible URLs, internal links, indexing the right sections, and keeping junk out. The crawler should see the main pages and not drown in parameter duplicates.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "uniqueness and a complete answer to the query",
            "title, H1, and snippet without stuffing",
            "sitemap, robots, canonicals",
            "duplicates and thin pages in the index",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "5–6. User behavior and security",
      level: 2,
      paras: [
        "Ignoring UX is a common reason for “traffic, no results” and weak engagement signals: slow load, aggressive popups, confusing navigation, a mobile layout that barely works. Watch bounce, depth, and goals in analytics — then fix the path to a lead.",
        "Malware, phishing, and hacks kill trust faster than any SEO audit. Browsers and search may show warnings or scrub pages. Cleanup, password resets, CMS and plugin updates, HTTPS, and backups come first — rankings second.",
      ],
      lists: [
        {
          intro: "Action signals:",
          items: [
            "high bounce on key landings",
            "virus or Safe Browsing complaints",
            "unknown redirects and scripts",
            "Metrica / Analytics goals that do not add up",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "7–9. Hosting, domain, and code errors",
      level: 2,
      paras: [
        "Unreliable hosting means downtime, limits, and slow server response. The bot crawls successfully less often; users leave. Pick a stable platform closer to the audience; watch uptime and caching.",
        "An “awkward” name rarely bans a site by itself, but a domain with a bad history, endless redirects, or a full brand mismatch makes life harder. Before buying a used name, check archives and sanctions. Broken HTML, missing assets, mixed content, wrong redirects, and bad status codes hurt indexing — catch them with a crawler and webmaster panels.",
      ],
      lists: [
        {
          intro: "Tech minimum:",
          items: [
            "uptime and speed (including mobile)",
            "domain history on change or purchase",
            "valid 301s between mirrors",
            "crawl for 4xx/5xx, broken CSS/JS, duplicates",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "10. Expecting instant page-one results",
      level: 2,
      paras: [
        "The most common “reason” is wrong expectations. Prep — keywords, copy, tech, analytics — is on the order of a month (sometimes 2–6 weeks). Ranking buildup is planned over 2–6 months after work starts; a noticeable chunk of the core more often appears near 2–3 months, the rest later — “as it goes,” not a calendar guarantee.",
        "If a vendor promises turnkey page one “in 30 days” with no caveats on competition and stages — treat it as a red flag. An honest report shows core-share growth and/or leads month to month — not one magic date.",
      ],
      lists: [
        {
          intro: "How to phrase timelines:",
          items: [
            "Prep: ~1 month (sometimes 2–6 weeks)",
            "Page-one share of the core: planned 2–6 months after work starts",
            "KPIs: core share, traffic, leads — not “#1 tomorrow”",
            "no “acceleration” via networks and link bursts",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Starting work is not the same as reaching page one. Confusing prep with ranking buildup is the main brief mistake.",
        },
      ],
      links: [
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "A practical diagnosis order",
      level: 2,
      paras: [
        "Move from facts to hypotheses: indexing panels → availability and speed → page–query match → content quality → links and filters → UX and conversion. Log changes and watch trends over weeks, not overnight.",
        "In parallel, remove toxic “accelerators.” Lasting growth comes from content, tech, and normal mentions — plus time. The ten reasons above usually stack: rarely is only one checklist line to blame.",
      ],
      lists: [
        {
          intro: "In one line:",
          items: [
            "first make the site worth indexing and clicking",
            "then work systematically for months",
            "do not confuse prep with ranking growth",
            "measure leads, not only positions",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster / support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "filtry-poiskovikov",
    "samostoyatelnoe-seo",
    "sayty-satellity",
    "napolnenie-sayta",
    "bezopasnost-sayta",
  ],
};
/** ES overlay for sayt-ne-v-top — same structure as RU JSON / EN. */
export const saytNeVTopEs: BlogPost = {
  slug: "sayt-ne-v-top",
  title: "Por qué tus páginas no rankean: 10 motivos habituales",
  date: "2020-01-31",
  category: "SEO",
  cover: "/images/blog/sayt-ne-v-top/cover-es.webp",
  excerpt:
    "Diez motivos por los que las páginas no llegan a la primera página: antigüedad, filtros, contenido, técnica, UX, seguridad, hosting, dominio, código y el mito de resultados instantáneos — con plazos de preparación separados del crecimiento de rankings.",
  lead: [
    "Un copy fuerte y un menú claro ayudan, pero no bastan. Las páginas pueden quedarse lejos en los resultados porque el dominio es joven, está bajo un filtro, flojea en técnica, es difícil de usar — o porque alguien esperaba milagros en una semana.",
    "Abajo: diez causas frecuentes y qué revisar. La preparación para la promoción (técnica, keywords, copy) suele llevar semanas o alrededor de un mes. Crecer una cuota sólida del núcleo comercial hacia visibilidad en primera página es otro horizonte — típicamente 2–6 meses tras el inicio del trabajo, mejorando mes a mes, sin fecha de calendario garantizada.",
  ],
  faq: [
    {
      q: "¿Se puede llegar a la primera página en un mes?",
      a: "En alrededor de un mes es realista preparar el sitio y arrancar el trabajo. Rankear un núcleo comercial en primera página suele llevar 2–6 meses de construcción. «Lanzamiento igual a primera página» es un mito dañino.",
    },
    {
      q: "¿Existe oficialmente la sandbox?",
      a: "Los buscadores no prometen un «modo sandbox» aparte para cada sitio nuevo. En la práctica los dominios nuevos acumulan confianza y señales más tiempo — es normal, no un bug del CMS.",
    },
    {
      q: "Si el contenido es único, ¿hay garantía de primera página?",
      a: "No. Siguen haciendo falta encaje de intent, estructura, técnica, competencia y tiempo. La unicidad es la base — no un ticket a los diez primeros resultados.",
    },
    {
      q: "¿Cómo saber si un filtro tiene la culpa?",
      a: "Una caída brusca en un grupo de consultas, mensajes en Webmaster o Search Console, anomalías en el perfil de backlinks. No diagnostiques desde una frase — mira tendencias e informes.",
    },
    {
      q: "¿El malware en el sitio afecta a los rankings?",
      a: "Sí: avisos del navegador, retirada de resultados, pérdida de confianza. Primero limpia y asegura; las expectativas SEO después.",
    },
    {
      q: "¿Un hosting malo puede dañar de verdad los rankings?",
      a: "Caídas frecuentes, TTFB lento y un servidor lejos de la audiencia dañan crawl y UX. No es una «sanción por la marca del host» — es disponibilidad y velocidad.",
    },
    {
      q: "¿Dominios con guion, IDN o dígitos son un callejón sin salida?",
      a: "No siempre. Importan más historial, marca, encaje con la consulta y confianza. Renombrar por estética sin 301 correctos es un riesgo aparte.",
    },
    {
      q: "¿Por dónde empezar el diagnóstico?",
      a: "Indexación y errores de panel → técnica (velocidad, móvil, códigos de estado) → contenido y keywords → enlaces y filtros → UX y conversión. En paralelo, fija el timeline: preparación no es lo mismo que crecimiento de rankings.",
    },
  ],
  sections: [
    {
      title: "Cómo leer «no rankeamos»",
      level: 2,
      paras: [
        "Primero aclara qué consultas: marca, informativas o head terms comerciales. Una URL no tiene que estar en primera página por cada frase del nicho. Mira la cuota del núcleo, tráfico y leads — no una posición bonita en un screenshot.",
        "Separa las etapas: el sitio está listo para la promoción (prep) versus el sitio está construyendo rankings (trabajo más tiempo). Mezclarlas es la principal fuente de decepción — y de «aceleradores» peligrosos como spam de enlaces y redes de satélites.",
      ],
      lists: [
        {
          intro: "Mini-checklist antes del pánico:",
          items: [
            "la página está indexada y responde 200",
            "la consulta y el intent encajan con la landing",
            "hay competencia real y un horizonte realista",
            "el trabajo ya lleva más de un par de semanas",
          ],
        },
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "1–2. Sitio joven y filtros",
      level: 2,
      paras: [
        "Un dominio nuevo necesita tiempo para el crawl y para que se acumulen señales de comportamiento y de enlaces. Una pieza que «despegó» en un sitio antiguo con autoridad a menudo crece más lento en un nombre fresco — es de esperar. Refuerza el núcleo (head, mid y long-tail), estructura, unicidad y técnica; reclama la propiedad en Webmaster y Search Console.",
        "Filtros y sanciones son otra historia: un colapso brusco, avisos, un perfil de backlinks tóxico, sobreoptimización. Primero quita la causa (spam, cloaking, engagement falso) — no compres más enlaces. Ver las piezas de filtros y compra de enlaces.",
      ],
      lists: [
        {
          intro: "Útil al inicio:",
          items: [
            "montar el núcleo y un mapa de relevancia",
            "limpiar errores técnicos críticos",
            "no esperar primera página dos semanas tras el lanzamiento",
            "no montar «aceleradores» tipo redes de satélites",
          ],
        },
      ],
      links: [
        {
          label: "Sitio joven",
          href: "/es/blog/molodoy-sayt/",
        },
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Sitios satélite",
          href: "/es/blog/sayty-satellity/",
        },
      ],
    },
    {
      title: "3–4. Contenido y optimización de cara al crawler",
      level: 2,
      paras: [
        "Copy flojo, no único o aguado falla el intent. El copy-paste y las fichas plantilla finas pierden frente a páginas con hechos, estructura y una respuesta real. Escribe para personas; compara competidores por sentido — no solo por una puntuación de unicidad en una herramienta.",
        "«Falta de optimización» no significa meter una keyword en cada párrafo. Significa title y H1 claros, URLs sensatas, enlaces internos, indexar las secciones correctas y dejar fuera la basura. El crawler debería ver las páginas principales y no ahogarse en duplicados por parámetros.",
      ],
      lists: [
        {
          intro: "Revisa:",
          items: [
            "unicidad y una respuesta completa a la consulta",
            "title, H1 y snippet sin stuffing",
            "sitemap, robots, canonicals",
            "duplicados y páginas finas en el índice",
          ],
        },
      ],
      links: [
        {
          label: "Contenido del sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
      ],
    },
    {
      title: "5–6. Comportamiento del usuario y seguridad",
      level: 2,
      paras: [
        "Ignorar la UX es un motivo habitual de «tráfico, sin resultados» y señales de engagement flojas: carga lenta, popups agresivos, navegación confusa, un layout móvil que apenas funciona. Mira rebote, profundidad y goals en analítica — luego arregla el camino al lead.",
        "Malware, phishing y hacks matan la confianza más rápido que cualquier auditoría SEO. Navegadores y búsqueda pueden mostrar avisos o limpiar páginas. Primero limpieza, reset de contraseñas, updates de CMS y plugins, HTTPS y backups — rankings después.",
      ],
      lists: [
        {
          intro: "Señales de acción:",
          items: [
            "rebote alto en landings clave",
            "quejas de virus o Safe Browsing",
            "redirects y scripts desconocidos",
            "goals de Metrica / Analytics que no cuadran",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
        {
          label: "Goals en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "7–9. Hosting, dominio y errores de código",
      level: 2,
      paras: [
        "Hosting poco fiable significa downtime, límites y respuesta lenta del servidor. El bot crawlea con éxito con menos frecuencia; los usuarios se van. Elige una plataforma estable más cerca de la audiencia; vigila uptime y caching.",
        "Un nombre «raro» rara vez banea un sitio por sí solo, pero un dominio con mal historial, redirects interminables o un desajuste total de marca complica la vida. Antes de comprar un nombre usado, revisa archivos y sanciones. HTML roto, assets que faltan, mixed content, redirects incorrectos y malos códigos de estado dañan la indexación — píllalos con un crawler y paneles de webmaster.",
      ],
      lists: [
        {
          intro: "Mínimo técnico:",
          items: [
            "uptime y velocidad (incluido móvil)",
            "historial del dominio al cambiar o comprar",
            "301 válidos entre espejos",
            "crawl de 4xx/5xx, CSS/JS rotos, duplicados",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Códigos de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "10. Esperar resultados de primera página al instante",
      level: 2,
      paras: [
        "El «motivo» más habitual son expectativas equivocadas. La preparación — keywords, copy, técnica, analítica — ronda un mes (a veces 2–6 semanas). La construcción de rankings se planifica a 2–6 meses tras el inicio del trabajo; un trozo notable del núcleo suele aparecer cerca de 2–3 meses, el resto después — «como vaya», no una garantía de calendario.",
        "Si un vendor promete primera página llave en mano «en 30 días» sin matices sobre competencia y etapas — trátalo como bandera roja. Un informe honesto muestra crecimiento de cuota del núcleo y/o leads mes a mes — no una fecha mágica.",
      ],
      lists: [
        {
          intro: "Cómo formular plazos:",
          items: [
            "Preparación: ~1 mes (a veces 2–6 semanas)",
            "Cuota del núcleo en primera página: planificada 2–6 meses tras el inicio del trabajo",
            "KPIs: cuota del núcleo, tráfico, leads — no «el nº 1 mañana»",
            "nada de «aceleración» vía redes y ráfagas de enlaces",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Arrancar el trabajo no es lo mismo que llegar a la primera página. Confundir preparación con construcción de rankings es el principal error del brief.",
        },
      ],
      links: [
        {
          label: "SEO para pequeños negocios",
          href: "/blog/seo-malyy-biznes/",
        },
        {
          label: "Comprar enlaces",
          href: "/es/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Un orden práctico de diagnóstico",
      level: 2,
      paras: [
        "Pasa de hechos a hipótesis: paneles de indexación → disponibilidad y velocidad → encaje página–consulta → calidad de contenido → enlaces y filtros → UX y conversión. Registra cambios y mira tendencias en semanas, no de un día para otro.",
        "En paralelo, quita «aceleradores» tóxicos. El crecimiento duradero viene de contenido, técnica y menciones normales — más tiempo. Los diez motivos de arriba suelen apilarse: rara vez culpa a una sola línea del checklist.",
      ],
      lists: [
        {
          intro: "En una línea:",
          items: [
            "primero haz que el sitio merezca indexarse y clicar",
            "luego trabaja de forma sistemática durante meses",
            "no confundas preparación con crecimiento de rankings",
            "mide leads, no solo posiciones",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster / soporte",
          href: "/es/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "filtry-poiskovikov",
    "samostoyatelnoe-seo",
    "sayty-satellity",
    "napolnenie-sayta",
    "bezopasnost-sayta",
  ],
};

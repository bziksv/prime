import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylochnyy-profil — same structure as RU JSON. */
export const ssylochnyyProfilEn: BlogPost = {
  slug: "ssylochnyy-profil",
  title: "Backlink profile analysis: what to check in half an hour",
  date: "2020-10-23",
  category: "SEO",
  cover: "/images/blog/ssylochnyy-profil/cover-en.webp",
  excerpt:
    "How to quickly assess backlinks for a page and domain: referring domains, anchors, toxicity, trends, and competitor comparison — without “page one in a week” magic.",
  lead: [
    "A backlink profile is not “how many backlinks are in the report.” It is a picture: who links, from which domains and IPs, with which anchors, how natural it looks, and what to do with obvious junk.",
    "Below: a practical 30–60 minute pass — take a snapshot, compare with competitors, and separate noise from signal. Tool numbers diverge; trends and quality matter more than chasing one metric.",
  ],
  faq: [
    {
      q: "Are page and domain profiles the same?",
      a: "No. A URL has its own inbound set; a domain is the site sum. For a landing, check both the page and the competitor’s domain.",
    },
    {
      q: "Which tool is mandatory?",
      a: "No single one is “truth.” Ahrefs, Majestic, Semrush, Serpstat, webmaster panels — different indexes. To start, one paid tool plus Search Console is enough; with budget, cross-check two sources.",
    },
    {
      q: "Is link count the main metric?",
      a: "Referring domains or roots and donor quality usually matter more than thousands of links from one satellite.",
    },
    {
      q: "Should you disavow everything “toxic”?",
      a: "Do not mass-disavow “just in case.” First remove what you control (your networks, bought junk). Use Disavow surgically and deliberately.",
    },
    {
      q: "What does the anchor list show?",
      a: "Skew toward commercial keywords, brand, URL, or “click here” — a signal of naturalness or over-optimization risk.",
    },
    {
      q: "Why compare with a competitor?",
      a: "To see order of magnitude and donor types in the niche. Do not copy someone else’s spam one-to-one.",
    },
    {
      q: "Is half an hour realistic?",
      a: "For a screen — yes: summary, top donors, anchors, spam flags, dynamics. A deep audit of thousands of links takes hours and exports.",
    },
    {
      q: "Do links guarantee growth?",
      a: "No. Without content, tech, and relevance, links barely help. The profile is one signal next to page quality.",
    },
  ],
  sections: [
    {
      title: "What’s in a “profile” and why audit",
      level: 2,
      paras: [
        "A profile usually covers: volume and growth of links and domains, donor types (media, directories, forums, guest posts, UGC), anchors, dofollow/nofollow share, geography, and suspicious clusters (same IP or C-class, template sites).",
        "Audit before promotion, after a spike or drop, when buying a domain, and when you suspect negatives or an old link tail.",
      ],
      lists: [
        {
          intro: "In half an hour you want to answer:",
          items: [
            "is there obvious spam and networks",
            "how loudly do anchors scream commerce",
            "are we growing versus competitors",
            "what 5–10 actions go to the backlog",
          ],
        },
      ],
    },
    {
      title: "Data snapshot: where to start",
      level: 2,
      paras: [
        "Enter the domain (and a specific URL if needed) in your chosen tool. For the whole site, use a mode that covers subpaths, not only the homepage. Lock the report date — compare dynamics in a month.",
        "In parallel, open Search Console / webmaster tools: external links there are incomplete, but useful as “what the engine definitely saw.”",
      ],
      lists: [
        {
          intro: "Minimum numbers on a sheet:",
          items: [
            "referring domains / roots",
            "new and lost over 30–90 days",
            "dofollow share",
            "top-20 donors by the tool’s “weight”",
            "top anchors",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Comparing one tool’s “links” to another’s “domains” and celebrating a win. Compare the same entities.",
        },
      ],
    },
    {
      title: "Donor quality and spam signals",
      level: 2,
      paras: [
        "A good niche donor: live traffic or brand, topical proximity, normal indexing, a contextual link. A bad one: template “300-word articles,” farms, hacked sites, endless link directories, a sharp spike from identical templates.",
        "Review the top and the tail: sometimes “pretty” numbers sit on dozens of junk domains. Separately check IP and hosting clusters — mass links from one network look unnatural.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "growth explosion without PR or content",
            "anchors = pure commercial keywords in batches",
            "donors with noindex / not in search",
            "one CMS theme on hundreds of “sites”",
            "links only from directory footers or sidebars",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Anchors, traffic, and the target page",
      level: 2,
      paras: [
        "Anchor list: a healthy mix of brand, URL, neutral (“here,” “source”), and a moderate keyword share. If 80% is “buy X cheap” from different domains, risk is higher than with a calm branded profile.",
        "For an important landing, see where links actually go: homepage, article, product. Sometimes the domain profile is strong while the target URL has almost no mentions — then work content and internal links, not only acquisition.",
      ],
      lists: [
        {
          intro: "Quick sorts:",
          items: [
            "new links this month — what appeared",
            "donors with traffic versus “dead”",
            "shared donors with two or three competitors (outreach ideas)",
            "broken or redirecting donors — hygiene",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Competitor comparison",
      level: 2,
      paras: [
        "Take two or three URLs or domains from page one for target queries. Compare referring-domain order of magnitude, branded-anchor share, media and industry sites. Goal — niche “norm,” not copying spam.",
        "If a competitor is stronger via old editorial links, your plan is content and mentions — not a link exchange. If everyone has tons of directories, judge whether that still works in your niche or it is legacy.",
      ],
      lists: [
        {
          intro: "What to write in the takeaway:",
          items: [
            "domain gap (order of magnitude)",
            "site types you lack",
            "suspicious practices you will not repeat",
            "one or two hypotheses for the month (content, PR, cleanup)",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "What to do after the screen",
      level: 2,
      paras: [
        "Split actions: (1) remove or fix controlled junk; (2) strengthen the page and internal links; (3) a plan for natural mentions; (4) monthly monitoring. Do not mix “buy 500 links” with an audit — different jobs.",
        "Treat this as the canonical quick profile screen among related link-mass posts: same depth, angle — fast screening.",
      ],
      lists: [
        {
          intro: "Week checklist:",
          items: [
            "top-donor table + status",
            "list to remove or disavow (if yours)",
            "future anchor policy",
            "alert on abnormal growth",
            "tie-in to tech audit and content plan",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "A link report without conclusions as tasks is scrap paper. Every flag needs an owner and a deadline.",
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
    "analiz-konkurentov",
    "ssylki-na-forumah",
    "bitye-ssylki",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
  ],
};

/** ES overlay for ssylochnyy-profil — same structure as RU JSON / EN. */
export const ssylochnyyProfilEs: BlogPost = {
  slug: "ssylochnyy-profil",
  title: "Análisis del perfil de backlinks: qué revisar en media hora",
  date: "2020-10-23",
  category: "SEO",
  cover: "/images/blog/ssylochnyy-profil/cover-es.webp",
  excerpt:
    "Cómo evaluar rápido backlinks de una página y un dominio: referring domains, anchors, toxicidad, tendencias y comparación con competidores — sin magia de «primera página en una semana».",
  lead: [
    "Un perfil de backlinks no es «cuántos backlinks hay en el informe». Es una foto: quién linkea, desde qué dominios e IPs, con qué anchors, cuán natural se ve y qué hacer con la basura obvia.",
    "Abajo: un pase práctico de 30–60 minutos — toma un snapshot, compara con competidores y separa ruido de señal. Los números de las tools divergen; importan más tendencias y calidad que perseguir una sola métrica.",
  ],
  faq: [
    {
      q: "¿Perfil de página y de dominio son lo mismo?",
      a: "No. Una URL tiene su propio set de inbound; un dominio es la suma del sitio. Para una landing, revisa tanto la página como el dominio del competidor.",
    },
    {
      q: "¿Qué tool es obligatoria?",
      a: "Ninguna sola es «la verdad». Ahrefs, Majestic, Semrush, Serpstat, paneles de webmaster — índices distintos. Para empezar, una tool de pago más Search Console basta; con presupuesto, cruza dos fuentes.",
    },
    {
      q: "¿El conteo de enlaces es la métrica principal?",
      a: "Referring domains o roots y la calidad del donor suelen importar más que miles de enlaces desde un solo satélite.",
    },
    {
      q: "¿Debes hacer disavow de todo lo «tóxico»?",
      a: "No hagas disavow masivo «por si acaso». Primero quita lo que controlas (tus redes, basura comprada). Usa Disavow con cirugía y criterio.",
    },
    {
      q: "¿Qué muestra la lista de anchors?",
      a: "Sesgo hacia keywords comerciales, marca, URL o «haz clic aquí» — señal de naturalidad o riesgo de sobre-optimización.",
    },
    {
      q: "¿Por qué comparar con un competidor?",
      a: "Para ver orden de magnitud y tipos de donor en el nicho. No copies el spam ajeno uno a uno.",
    },
    {
      q: "¿Media hora es realista?",
      a: "Para una pantalla — sí: resumen, donors principales, anchors, flags de spam, dinámica. Una auditoría profunda de miles de enlaces toma horas y exports.",
    },
    {
      q: "¿Los enlaces garantizan crecimiento?",
      a: "No. Sin contenido, técnica y relevancia, los enlaces apenas ayudan. El perfil es una señal junto a la calidad de la página.",
    },
  ],
  sections: [
    {
      title: "Qué hay en un «perfil» y por qué auditar",
      level: 2,
      paras: [
        "Un perfil suele cubrir: volumen y crecimiento de enlaces y dominios, tipos de donor (media, directorios, foros, guest posts, UGC), anchors, cuota dofollow/nofollow, geografía y clusters sospechosos (misma IP o C-class, sitios plantilla).",
        "Audita antes de promover, tras un pico o caída, al comprar un dominio y cuando sospechas negativos o una cola vieja de enlaces.",
      ],
      lists: [
        {
          intro: "En media hora quieres responder:",
          items: [
            "¿hay spam y redes obvios?",
            "¿cuán alto gritan los anchors comercio?",
            "¿crecemos frente a competidores?",
            "qué 5–10 acciones van al backlog",
          ],
        },
      ],
    },
    {
      title: "Snapshot de datos: por dónde empezar",
      level: 2,
      paras: [
        "Introduce el dominio (y una URL concreta si hace falta) en la tool elegida. Para todo el sitio, usa un modo que cubra subpaths, no solo la homepage. Fija la fecha del informe — compara dinámica en un mes.",
        "En paralelo, abre Search Console / tools de webmaster: los enlaces externos ahí están incompletos, pero sirven como «lo que el motor sí vio».",
      ],
      lists: [
        {
          intro: "Números mínimos en una hoja:",
          items: [
            "referring domains / roots",
            "nuevos y perdidos en 30–90 días",
            "cuota dofollow",
            "los 20 donors principales por el «peso» de la tool",
            "anchors principales",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error frecuente",
          text: "Comparar «enlaces» de una tool con «dominios» de otra y celebrar una victoria. Compara las mismas entidades.",
        },
      ],
    },
    {
      title: "Calidad del donor y señales de spam",
      level: 2,
      paras: [
        "Un buen donor de nicho: tráfico vivo o marca, proximidad temática, indexación normal, un enlace contextual. Uno malo: «artículos de 300 palabras» plantilla, farms, sitios hackeados, directorios sin fin, un pico brusco desde plantillas idénticas.",
        "Revisa la cabeza y la cola: a veces números «bonitos» se apoyan en docenas de dominios basura. Chequea aparte clusters de IP y hosting — enlaces masivos desde una red se ven antinaturales.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "explosión de crecimiento sin PR ni contenido",
            "anchors = keywords comerciales puras en lotes",
            "donors con noindex / fuera de búsqueda",
            "un mismo tema CMS en cientos de «sitios»",
            "enlaces solo desde footers o sidebars de directorios",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces en foros",
          href: "/es/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Anchors, tráfico y la página objetivo",
      level: 2,
      paras: [
        "Lista de anchors: una mezcla sana de marca, URL, neutros («aquí», «fuente») y una cuota moderada de keywords. Si el 80% es «comprar X barato» desde dominios distintos, el riesgo es mayor que con un perfil de marca calmado.",
        "Para una landing importante, mira adónde van de verdad los enlaces: homepage, artículo, producto. A veces el perfil del dominio es fuerte mientras la URL objetivo casi no tiene menciones — entonces trabaja contenido y linking interno, no solo adquisición.",
      ],
      lists: [
        {
          intro: "Cortes rápidos:",
          items: [
            "enlaces nuevos este mes — qué apareció",
            "donors con tráfico versus «muertos»",
            "donors compartidos con dos o tres competidores (ideas de outreach)",
            "donors rotos o con redirect — higiene",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "Comparación con competidores",
      level: 2,
      paras: [
        "Toma dos o tres URLs o dominios de primera página para consultas objetivo. Compara orden de magnitud de referring domains, cuota de anchors de marca, media y sitios de industria. Goal — la «norma» del nicho, no copiar spam.",
        "Si un competidor es más fuerte vía enlaces editoriales viejos, tu plan es contenido y menciones — no un exchange de enlaces. Si todos tienen montones de directorios, juzga si eso aún funciona en tu nicho o es legado.",
      ],
      lists: [
        {
          intro: "Qué escribir en el takeaway:",
          items: [
            "gap de dominio (orden de magnitud)",
            "tipos de sitio que te faltan",
            "prácticas sospechosas que no repetirás",
            "una o dos hipótesis para el mes (contenido, PR, limpieza)",
          ],
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Qué hacer tras la pantalla",
      level: 2,
      paras: [
        "Parte acciones: (1) quitar o arreglar basura controlada; (2) reforzar la página y el linking interno; (3) un plan de menciones naturales; (4) monitoreo mensual. No mezcles «comprar 500 enlaces» con una auditoría — trabajos distintos.",
        "Trata esto como la pantalla canónica rápida de perfil entre posts relacionados de masa de enlaces: misma profundidad, ángulo — screening rápido.",
      ],
      lists: [
        {
          intro: "Checklist de la semana:",
          items: [
            "tabla de donors principales + estado",
            "lista para quitar o disavow (si es tuya)",
            "política futura de anchors",
            "alerta ante crecimiento anormal",
            "amarre a auditoría técnica y plan de contenido",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Un informe de enlaces sin conclusiones como tareas es papel mojado. Cada flag necesita dueño y plazo.",
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
    "analiz-konkurentov",
    "ssylki-na-forumah",
    "bitye-ssylki",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
  ],
};

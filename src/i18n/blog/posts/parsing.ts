import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing — same structure as RU JSON. */
export const parsingEn: BlogPost = {
  slug: "parsing",
  title: "Data scraping: what it is, why teams use it, and the limits",
  date: "2021-11-05",
  category: "SEO",
  cover: "/images/blog/parsing/cover-en.webp",
  excerpt:
    "What website scraping is: collecting and structuring data, legitimate SEO/marketing uses, and limits from robots.txt and copyright.",
  lead: [
    "Scraping (often called “parsing” in marketing jargon) is automated collection of page data into a table or database: prices, titles, stock, mentions. Then you compare and decide — collection alone isn’t analysis.",
    "Below: why web teams use it, common scenarios, and lines you should not cross. No guides on bypassing protection or ignoring platform rules.",
  ],
  faq: [
    {
      q: "Is scraping legal?",
      a: "Depends on what, how, and why. Open data plus ToS/robots/copyright compliance is more often OK. Copying someone else’s content wholesale, bypassing protection, and personal data are risk zones.",
    },
    {
      q: "How is it different from end-to-end analytics?",
      a: "End-to-end analytics joins your ads, site, and CRM. Scraping is more often about external sources: competitors, catalogs, storefronts.",
    },
    {
      q: "Can I ignore robots.txt?",
      a: "You shouldn’t. The file sets rules for bots; ignoring it conflicts with the site owner and risks blocks/claims.",
    },
    {
      q: "Why would an SEO specialist scrape?",
      a: "Price and assortment monitoring, competitor titles/snippets, checking your own URLs’ indexing — as input for strategy, not for stealing copy.",
    },
    {
      q: "What replaces aggressive scraping?",
      a: "Official APIs, exports, manual samples, licensed monitoring tools, data from ad accounts and your own logs.",
    },
  ],
  sections: [
    {
      title: "What scraping is",
      level: 2,
      paras: [
        "A script or service opens a URL, reads HTML/JSON, pulls needed fields, and stores them in a structured form. Then — filters, matching, reports.",
        "Common mix-up: scraping ≠ “steal the site.” The legitimate goal is facts for analysis — not republishing someone else’s content as yours.",
      ],
    },
    {
      title: "Legality and ethics",
      level: 2,
      paras: [
        "A freely viewable storefront doesn’t cancel the site’s rules, copyright on text/photos, or personal-data laws.",
        "Risky: mass block bypasses, ignoring robots.txt, scraping closed areas, reselling others’ databases, scraping to autofill with copies.",
      ],
      lists: [
        {
          intro: "Safer approach:",
          items: [
            "read ToS and robots.txt",
            "don’t overload someone else’s server (limits, pauses)",
            "don’t take personal data without a legal basis",
            "don’t copy unique content onto your site",
            "prefer official APIs where they exist",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Thinking “if the page opens in a browser, I can automate and republish everything.” Viewing in a browser ≠ a license for the database and content.",
        },
      ],
      links: [
        {
          label: "Auto-filling a site",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
      ],
    },
    {
      title: "Why teams use it",
      level: 2,
      paras: [
        "Typical jobs: compare competitor prices, see category structure, gather URLs for an audit, track new products in a niche.",
      ],
      lists: [
        {
          intro: "Useful outcomes:",
          items: [
            "pricing against the market",
            "hypotheses for catalog structure",
            "checking your pages (status, title)",
            "inputs for a content plan — without copy-paste",
          ],
        },
      ],
    },
    {
      title: "What people usually collect",
      level: 2,
      paras: [
        "Text fields (name, price, availability), URLs, sometimes meta tags. Media and others’ photos need extra care — they fall under a separate legal regime.",
      ],
      lists: [
        {
          intro: "Typical tool flow:",
          items: [
            "start URL list / section map",
            "field extraction rules",
            "save to a table/DB",
            "clean and match",
            "human or dashboard analysis",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Scenarios without gray-area tricks",
      level: 2,
      paras: [
        "Compare your stats with public competitor signals: assortment, promos, visible prices — and adjust the offer.",
        "For SEO, a selective review of strong pages and the keyword set often beats dumping an entire competitor site. Tools that pull search suggestions and frequencies are a narrower track.",
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};

/** ES overlay for parsing — same structure as RU JSON / EN. */
export const parsingEs: BlogPost = {
  slug: "parsing",
  title: "Scraping de datos: qué es, para qué lo usan los equipos y dónde está el límite",
  date: "2021-11-05",
  category: "SEO",
  cover: "/images/blog/parsing/cover.webp",
  excerpt:
    "Qué es el scraping de sitios: recopilar y estructurar datos, usos legítimos en SEO/marketing y límites de robots.txt y copyright.",
  lead: [
    "El scraping (en jerga de marketing a menudo «parsing») es la recogida automatizada de datos de páginas en una tabla o base: precios, títulos, stock, menciones. Luego comparas y decides — la recogida sola no es análisis.",
    "Abajo: por qué lo usan los equipos web, escenarios habituales y líneas que no conviene cruzar. Sin guías para saltar protecciones o ignorar las reglas de la plataforma.",
  ],
  faq: [
    {
      q: "¿Es legal el scraping?",
      a: "Depende de qué, cómo y para qué. Datos abiertos más cumplimiento de ToS/robots/copyright suele ser más aceptable. Copiar el contenido ajeno a granel, saltar protecciones y datos personales son zonas de riesgo.",
    },
    {
      q: "¿En qué se diferencia de la analítica end-to-end?",
      a: "La analítica end-to-end une tus anuncios, sitio y CRM. El scraping suele ir sobre fuentes externas: competidores, catálogos, vitrinas.",
    },
    {
      q: "¿Puedo ignorar robots.txt?",
      a: "No deberías. El archivo fija reglas para bots; ignorarlo choca con el dueño del sitio y arriesga bloqueos/reclamaciones.",
    },
    {
      q: "¿Por qué un SEO haría scraping?",
      a: "Monitorizar precios y surtido, títulos/snippets de competidores, comprobar la indexación de tus propias URLs — como input para la estrategia, no para robar copy.",
    },
    {
      q: "¿Qué sustituye al scraping agresivo?",
      a: "APIs oficiales, exports, muestras manuales, herramientas de monitoreo con licencia, datos de cuentas publicitarias y tus propios logs.",
    },
  ],
  sections: [
    {
      title: "Qué es el scraping",
      level: 2,
      paras: [
        "Un script o servicio abre una URL, lee HTML/JSON, extrae los campos necesarios y los guarda de forma estructurada. Luego — filtros, matching, informes.",
        "Confusión habitual: scraping ≠ «robar el sitio». El objetivo legítimo son hechos para analizar — no republicar contenido ajeno como propio.",
      ],
    },
    {
      title: "Legalidad y ética",
      level: 2,
      paras: [
        "Que una vitrina se vea libremente no anula las reglas del sitio, el copyright de textos/fotos ni las leyes de datos personales.",
        "Riesgo: saltos masivos de bloqueos, ignorar robots.txt, scrapear zonas cerradas, revender bases ajenas, scrapear para rellenar con copias.",
      ],
      lists: [
        {
          intro: "Enfoque más seguro:",
          items: [
            "leer ToS y robots.txt",
            "no saturar el servidor ajeno (límites, pausas)",
            "no tomar datos personales sin base legal",
            "no copiar contenido único a tu sitio",
            "preferir APIs oficiales donde existan",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Pensar «si la página abre en el navegador, puedo automatizar y republicar todo». Ver en el navegador ≠ licencia sobre la base y el contenido.",
        },
      ],
      links: [
        {
          label: "Autorelleno de un sitio",
          href: "/es/blog/avtonapolnenie-sayta/",
        },
      ],
    },
    {
      title: "Por qué lo usan los equipos",
      level: 2,
      paras: [
        "Trabajos típicos: comparar precios de competidores, ver la estructura de categorías, reunir URLs para una auditoría, seguir productos nuevos en un nicho.",
      ],
      lists: [
        {
          intro: "Resultados útiles:",
          items: [
            "precios frente al mercado",
            "hipótesis de estructura de catálogo",
            "comprobar tus páginas (status, title)",
            "inputs para un plan de contenidos — sin copy-paste",
          ],
        },
      ],
    },
    {
      title: "Qué se suele recopilar",
      level: 2,
      paras: [
        "Campos de texto (nombre, precio, disponibilidad), URLs, a veces meta tags. Medios y fotos ajenas piden cuidado extra — caen bajo un régimen legal aparte.",
      ],
      lists: [
        {
          intro: "Flujo típico de herramientas:",
          items: [
            "lista inicial de URLs / mapa de secciones",
            "reglas de extracción de campos",
            "guardar en tabla/BD",
            "limpiar y emparejar",
            "análisis humano o en dashboard",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
      ],
    },
    {
      title: "Escenarios sin trucos grises",
      level: 2,
      paras: [
        "Compara tus métricas con señales públicas del competidor: surtido, promos, precios visibles — y ajusta la oferta.",
        "En SEO, una revisión selectiva de páginas fuertes y del set de keywords suele ganar a volcar todo el sitio del competidor. Las herramientas que sacan sugerencias y frecuencias de búsqueda son una vía más estrecha.",
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};

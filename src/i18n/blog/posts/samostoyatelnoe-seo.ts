import type { BlogPost } from "../../../data/blog";

/** EN overlay for samostoyatelnoe-seo — same structure as RU JSON. */
export const samostoyatelnoeSeoEn: BlogPost = {
  slug: "samostoyatelnoe-seo",
  title: "DIY website SEO: where to start",
  date: "2021-04-30",
  category: "SEO",
  cover: "/images/blog/samostoyatelnoe-seo/cover-en.webp",
  excerpt:
    "A step-by-step DIY SEO plan for a site owner: prep, tech, keywords, content, and off-site factors — without “page one in a week” promises or buying spam links.",
  lead: [
    "You can promote a site yourself: it’s work and discipline, not a secret button. Beginners often rush into links and forget tech, the keyword set, and pages.",
    "Below: a practical work order plus links to deeper guides. Getting a commercial keyword set onto page one is planned in months, not days.",
  ],
  faq: [
    {
      q: "Is DIY SEO realistic?",
      a: "For a simple site and a local niche — yes, if you have time to learn. Tough competitive topics more often need a specialist.",
    },
    {
      q: "What should I start with in month one?",
      a: "Indexing, Webmaster/Search Console, analytics, tech, a draft keyword set, and priority landings. Not buying links.",
    },
    {
      q: "When should I expect page-one rankings?",
      a: "Site prep takes weeks. Building positions across the set is planned for two to six months of work. Prep is not a ranking date.",
    },
    {
      q: "Do I need to buy links?",
      a: "Mass buying is a risk. Content and natural mentions first; links — deliberately and with quality.",
    },
    {
      q: "How is this different from “SEO from scratch”?",
      a: "That article is a path into the profession. This one is an owner checklist of work steps.",
    },
    {
      q: "How often should I check results?",
      a: "Tech and critical errors — regularly; positions and traffic — usually monthly. Judge dynamics by query clusters and inquiries, not one phrase.",
    },
  ],
  sections: [
    {
      title: "Prep and diagnosis",
      level: 2,
      paras: [
        "Lock goals (leads, calls, sales), region, and a priority service list. Check whether the site is open for indexing and free of critical errors.",
      ],
      lists: [
        {
          intro: "Start:",
          items: [
            "Webmaster and Search Console",
            "Yandex Metrika / analytics",
            "regional signals and contacts",
            "a tech look: speed, mobile, 404s, redirects",
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
      title: "On-page optimization",
      level: 2,
      paras: [
        "Build a keyword set, section structure, and content for queries. Title, description, headings, internal linking — after a clear page map.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "keyword set and clusters",
            "URL structure and menu",
            "copy and media on landings",
            "snippets without stuffing",
            "internal linking",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO from scratch",
          href: "/en/blog/seo-s-nulya/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep (tech, keywords, copy) often takes about a month. Page-one share of the core is a separate stage — typically two to six months of growing positions after work starts.",
        },
      ],
    },
    {
      title: "Off-site and analytics",
      level: 2,
      paras: [
        "Mentions, partnerships, and quality publications beat packs of exchange links. Once a month review core positions, traffic, conversions, and Webmaster errors.",
      ],
      lists: [
        {
          intro: "Don’t do early on:",
          items: [
            "mass automatic link buying",
            "cloning someone else’s copy",
            "expecting page one a week after Title edits",
            "ignoring the mobile version",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Check the technical base",
      level: 2,
      paras: [
        "Search engines must crawl and index useful pages without blockers. Check robots.txt, sitemap, status codes, parameter duplicates, mobile, speed, and correct canonical URLs. Don’t fix everything at once without priorities: first remove errors that block access to important pages.",
        "Collect basics in Yandex Webmaster and Google Search Console if the service fits your audience. They show crawl issues, excluded pages, and queries where the site is already visible.",
      ],
      lists: [
        {
          intro: "Critical minimum:",
          items: [
            "pages return correct 200, 301, 404 codes",
            "no accidental indexing block",
            "the site is usable and loads on mobile",
            "HTTPS and the main mirror are set consistently",
          ],
        },
      ],
    },
    {
      title: "Build keywords and a page map",
      level: 2,
      paras: [
        "A keyword set isn’t a word list for frequency’s sake — it’s a map of user intent. Split informational, commercial, and navigational queries; don’t try to push every demand variant with one service page without shared intent.",
        "After clustering, map each group to an existing page or a task to create a new one. Then you see where a landing is missing, where a useful piece is needed, and where improving a working URL is enough.",
      ],
      lists: [
        {
          intro: "For each group lock:",
          items: [
            "intent and query region",
            "target page",
            "key user questions",
            "priority by demand and business value",
          ],
        },
      ],
    },
    {
      title: "Run the work and timelines realistically",
      level: 2,
      paras: [
        "Build a backlog: tech tasks, landing updates, content, internal linking, and analytics. Note change dates and expected effect — easier to see what moved traffic instead of repeating actions at random.",
        "Site prep — tech, keywords, copy, and CTAs — often takes about a month. Rankings grow later and unevenly: a noticeable chunk of the set may start moving around months two to three, and the planned page-one horizon is two to six months, with no guaranteed date.",
      ],
      lists: [
        {
          intro: "A healthy monthly report includes:",
          items: [
            "organic traffic and conversions",
            "cluster visibility, not one “main” phrase",
            "fixed errors and new tasks",
            "lead quality and sales feedback",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for samostoyatelnoe-seo — same structure as RU JSON / EN. */
export const samostoyatelnoeSeoEs: BlogPost = {
  slug: "samostoyatelnoe-seo",
  title: "SEO del sitio por tu cuenta: por dónde empezar",
  date: "2021-04-30",
  category: "SEO",
  cover: "/images/blog/samostoyatelnoe-seo/cover.webp",
  excerpt:
    "Plan SEO DIY paso a paso para el dueño del sitio: prep, técnica, keywords, contenido y factores off-site — sin promesas de «primera página en una semana» ni compra de enlaces spam.",
  lead: [
    "Puedes promover un sitio tú mismo: es trabajo y disciplina, no un botón secreto. Los principiantes a menudo se lanzan a enlaces y olvidan la técnica, el set de keywords y las páginas.",
    "Abajo: un orden de trabajo práctico más enlaces a guías más profundas. Llevar un set comercial a primera página se planifica en meses, no en días.",
  ],
  faq: [
    {
      q: "¿Es realista el SEO DIY?",
      a: "Para un sitio simple y un nicho local — sí, si tienes tiempo para aprender. Temas muy competitivos suelen necesitar un especialista.",
    },
    {
      q: "¿Con qué empiezo en el mes uno?",
      a: "Indexación, Webmaster/Search Console, analítica, técnica, un borrador del set de keywords y landings prioritarias. No comprar enlaces.",
    },
    {
      q: "¿Cuándo esperar posiciones en primera página?",
      a: "La prep del sitio toma semanas. Construir posiciones en el set se planifica a dos a seis meses de trabajo. La prep no es una fecha de ranking.",
    },
    {
      q: "¿Necesito comprar enlaces?",
      a: "La compra masiva es un riesgo. Primero contenido y menciones naturales; enlaces — con criterio y calidad.",
    },
    {
      q: "¿En qué se diferencia de «SEO desde cero»?",
      a: "Ese artículo es un camino hacia la profesión. Este es un checklist del dueño con pasos de trabajo.",
    },
    {
      q: "¿Con qué frecuencia revisar resultados?",
      a: "Técnica y errores críticos — con regularidad; posiciones y tráfico — normalmente al mes. Juzga la dinámica por clusters de consultas e inquiries, no por una sola frase.",
    },
  ],
  sections: [
    {
      title: "Prep y diagnóstico",
      level: 2,
      paras: [
        "Fija goals (leads, llamadas, ventas), región y una lista de servicios prioritarios. Comprueba si el sitio está abierto a indexación y libre de errores críticos.",
      ],
      lists: [
        {
          intro: "Arranque:",
          items: [
            "Webmaster y Search Console",
            "Yandex Metrika / analítica",
            "señales regionales y contactos",
            "mirada técnica: velocidad, móvil, 404, redirects",
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
      title: "Optimización on-page",
      level: 2,
      paras: [
        "Arma el set de keywords, la estructura de secciones y el contenido para las consultas. Title, description, headings, linking interno — tras un mapa claro de páginas.",
      ],
      lists: [
        {
          intro: "Orden:",
          items: [
            "set de keywords y clusters",
            "estructura de URL y menú",
            "copy y media en landings",
            "snippets sin stuffing",
            "linking interno",
          ],
        },
      ],
      links: [
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO desde cero",
          href: "/es/blog/seo-s-nulya/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "La prep (técnica, keywords, copy) a menudo toma cerca de un mes. La cuota del núcleo en primera página es una etapa aparte — típicamente dos a seis meses de crecimiento de posiciones tras empezar el trabajo.",
        },
      ],
    },
    {
      title: "Off-site y analítica",
      level: 2,
      paras: [
        "Menciones, partnerships y publicaciones de calidad ganan a packs de enlaces de exchange. Una vez al mes revisa posiciones del núcleo, tráfico, conversiones y errores de Webmaster.",
      ],
      lists: [
        {
          intro: "No hagas al principio:",
          items: [
            "compra masiva automática de enlaces",
            "clonar el copy de otro",
            "esperar primera página una semana tras editar Title",
            "ignorar la versión móvil",
          ],
        },
      ],
      links: [
        {
          label: "Caída de tráfico",
          href: "/es/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Revisa la base técnica",
      level: 2,
      paras: [
        "Los buscadores deben rastrear e indexar páginas útiles sin bloqueos. Revisa robots.txt, sitemap, códigos de estado, duplicados por parámetros, móvil, velocidad y URLs canónicas correctas. No arregles todo a la vez sin prioridades: primero quita errores que bloquean el acceso a páginas importantes.",
        "Reúne lo básico en Yandex Webmaster y Google Search Console si el servicio encaja con tu audiencia. Muestran problemas de crawl, páginas excluidas y consultas donde el sitio ya es visible.",
      ],
      lists: [
        {
          intro: "Mínimo crítico:",
          items: [
            "las páginas devuelven códigos 200, 301, 404 correctos",
            "sin bloqueo accidental de indexación",
            "el sitio es usable y carga en móvil",
            "HTTPS y el espejo principal están alineados",
          ],
        },
      ],
    },
    {
      title: "Arma keywords y un mapa de páginas",
      level: 2,
      paras: [
        "Un set de keywords no es una lista de palabras por frecuencia — es un mapa de intención del usuario. Separa consultas informativas, comerciales y de navegación; no intentes empujar cada variante de demanda con una sola página de servicio sin intención compartida.",
        "Tras el clustering, mapea cada grupo a una página existente o a una tarea de crear una nueva. Entonces ves dónde falta landing, dónde hace falta una pieza útil y dónde basta mejorar una URL que ya funciona.",
      ],
      lists: [
        {
          intro: "Para cada grupo fija:",
          items: [
            "intención y región de la consulta",
            "página objetivo",
            "preguntas clave del usuario",
            "prioridad por demanda y valor de negocio",
          ],
        },
      ],
    },
    {
      title: "Ejecuta el trabajo y los plazos con realismo",
      level: 2,
      paras: [
        "Arma un backlog: tareas técnicas, updates de landings, contenido, linking interno y analítica. Anota fechas de cambio y efecto esperado — más fácil ver qué movió el tráfico en vez de repetir acciones al azar.",
        "La prep del sitio — técnica, keywords, copy y CTAs — a menudo toma cerca de un mes. Los rankings crecen después y de forma desigual: un trozo notable del set puede empezar a moverse hacia los meses dos o tres, y el horizonte planificado de primera página es de dos a seis meses, sin fecha garantizada.",
      ],
      lists: [
        {
          intro: "Un informe mensual sano incluye:",
          items: [
            "tráfico orgánico y conversiones",
            "visibilidad por cluster, no una frase «principal»",
            "errores corregidos y tareas nuevas",
            "calidad de leads y feedback de ventas",
          ],
        },
      ],
    },
  ],
};

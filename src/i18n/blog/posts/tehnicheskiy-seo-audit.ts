import type { BlogPost } from "../../../data/blog";

/** EN overlay for tehnicheskiy-seo-audit — same structure as RU JSON. */
export const tehnicheskiySeoAuditEn: BlogPost = {
  slug: "tehnicheskiy-seo-audit",
  title: "Technical SEO audit: goals, scope, and a DIY start",
  date: "2021-07-22",
  category: "SEO",
  cover: "/images/blog/tehnicheskiy-seo-audit/cover-en.webp",
  excerpt:
    "Why a technical SEO audit matters, what to check, and whether you can run a basic pass yourself.",
  lead: [
    "If the site stalls despite content and ad spend, it’s often not “SERP magic” but tech: indexing, speed, duplicates, status codes, mobile layout.",
    "Below: how a technical audit differs from other checks, what you can inspect yourself, and when it’s smarter to hand the work to specialists.",
  ],
  faq: [
    {
      q: "What is a technical SEO audit?",
      a: "A check of how the site is served to crawlers and users: crawl, indexing, status codes, speed, mobile readiness, utility files, and critical layout/server errors.",
    },
    {
      q: "How is it different from a full SEO audit?",
      a: "Tech is the foundation. Separately you review keywords, copy, links, and usability. Without tech, even a strong keyword set rarely becomes stable rankings.",
    },
    {
      q: "Can I audit it myself?",
      a: "A basic loop — yes: webmaster panels, a crawler, PageSpeed/CWV, robots and sitemap checks. Deep niche work and prioritization is usually faster with an experienced specialist.",
    },
    {
      q: "Where should I start if time is short?",
      a: "Indexing and duplicates, 4xx/5xx, redirects, mobile version, LCP/INP, HTTPS, and access to key landings.",
    },
    {
      q: "When is it better to postpone an audit?",
      a: "If there’s no budget for fixes, the site is obsolete and easier to rebuild, or the priority is a short paid cycle without relying on organic.",
    },
  ],
  sections: [
    {
      title: "What a site audit is for",
      level: 2,
      paras: [
        "An audit is a systematic review: tech, structure, content, usability, and search visibility. The goal — see if the resource is ready for promotion or needs fixes first.",
        "The technical loop answers: can a crawler stably crawl and index the right URLs, and can a user get the page quickly without failures.",
      ],
      lists: [],
    },
    {
      title: "What an SEO audit should deliver",
      level: 2,
      paras: [
        "The main job is to gather facts about the site’s state and weak spots — not to “find someone to blame.”",
        "Afterwards you prioritize fixes: what blocks indexing and conversion now, what can wait. Demand, competition, and UX are assessed too — but those sit next to pure tech.",
      ],
      lists: [
        {
          intro: "An audit usually delivers:",
          items: [
            "a list of critical errors with priority",
            "a map of what blocks traffic and lead growth",
            "a clear work plan for the next iterations",
          ],
        },
      ],
    },
    {
      title: "Audit types",
      level: 2,
      paras: [
        "In practice there are several types. Usability and marketing are narrow slices. Technical looks at hosting, code, crawl, and page delivery. Search (on-page / SEO) — meta, headings, internal links, content duplicates — more often after tech isn’t in the way.",
        "An express check before promotion covers only critical issues. A full review needs a crawler and webmaster panels. Tools include Screaming Frog, Netpeak Spider, Titlo, plus Google Search Console and Yandex Webmaster.",
      ],
      lists: [
        {
          intro: "Basic classification:",
          items: [
            "technical",
            "search (on-page / SEO)",
            "usability",
            "marketing / competitive",
          ],
        },
      ],
    },
    {
      title: "Technical (under the hood)",
      level: 3,
      paras: [
        "A technical audit checks how the site works under the hood. Server errors, a broken robots file, duplicates, and a slow mobile version hurt visibility more than one missing paragraph of copy.",
      ],
      lists: [
        {
          intro: "What is usually checked:",
          items: [
            "2xx / 3xx / 4xx / 5xx status codes and redirect chains",
            "robots.txt and XML sitemap",
            "indexing of key URLs (webmaster / Search Console)",
            "canonicals and duplicates (WWW, HTTP/HTTPS, parameters)",
            "speed and Core Web Vitals (LCP, INP, CLS)",
            "mobile layout and viewport",
            "HTTPS and mixed content",
            "availability of important resources (JS/CSS), critical layout errors",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping brand metrics, the link profile, and “ranking factors” into “tech” all at once. Those are related report blocks; first remove what breaks crawl and indexing.",
        },
      ],
      tables: [
        {
          caption: "Express-audit mini-checklist",
          headers: ["Check", "Where to look", "Severity"],
          rows: [
            ["Homepage and services indexed", "Webmaster / GSC", "high"],
            ["404 on important URLs", "Crawler", "high"],
            ["robots blocks needed URLs", "robots.txt", "high"],
            ["Slow mobile LCP", "PageSpeed / CWV", "medium/high"],
            ["Duplicates without canonical", "Crawler", "high"],
          ],
        },
      ],
    },
    {
      title: "Search audit (on-page)",
      level: 3,
      paras: [
        "After tech, check how ready pages are to rank: meta, headings, internal linking, content duplicates, image optimization.",
      ],
      lists: [
        {
          intro: "Typical scope:",
          items: [
            "indexing settings and duplicate hunt",
            "Title / Description meta tags",
            "H1–H3 hierarchy",
            "internal linking",
            "alt on meaningful images",
            "filters and sharp drops — separately, by evidence",
            "positions and traffic vs competitors — as context, not as “tech”",
          ],
        },
      ],
    },
    {
      title: "Usability",
      level: 3,
      paras: [
        "Usability is convenience for people: speed, mobile readiness, clear navigation, no empty sections. Some metrics overlap with tech (speed, SSL), some with the product (lead flow).",
      ],
      lists: [
        {
          intro: "What to look at:",
          items: [
            "load speed and UI stability",
            "display on phone and tablet",
            "HTTPS",
            "logical hierarchy and no placeholders",
            "bounces, depth, devices, and browsers — in analytics",
          ],
        },
      ],
    },
    {
      title: "Content and site fill",
      level: 3,
      paras: [
        "A separate slice: uniqueness and freshness of copy, information gaps, keyword effectiveness on landings, outdated pages to delete or update.",
        "Strong content doesn’t cancel tech: if a page isn’t indexed or returns 500, the text won’t save it.",
      ],
      lists: [],
    },
    {
      title: "Basic vs full audit",
      level: 2,
      paras: [
        "A basic (express) pass covers critical issues: server errors, 404/redirects, meta on key URLs, indexing. It doesn’t claim a full competition or design review.",
        "A full audit — tech + on-page + keywords/structure + usability and competitive context. That’s a turnkey work plan, not one checklist.",
      ],
      lists: [
        {
          intro: "When an audit is especially useful:",
          items: [
            "site launch or relaunch",
            "the site hasn’t been maintained for a long time",
            "promotion stopped and metrics dropped",
            "you need vendor oversight",
            "low traffic, high bounce, rising 404s",
          ],
        },
        {
          intro: "When an SEO audit can wait:",
          items: [
            "no budget for fixes afterward",
            "the resource is obsolete and better replaced",
            "priority is a short paid cycle without organic",
          ],
        },
      ],
    },
    {
      title: "DIY or with a vendor",
      level: 2,
      paras: [
        "Your own loop helps: learn to read webmaster tools, crawl the site, fix robots and meta. It takes time and someone who will finish the fixes.",
        "A vendor spots systemic errors faster, separates critical issues from noise, and ties tech to keywords and structure. It makes sense when downtime costs more than the audit.",
      ],
      lists: [
        {
          intro: "Arguments for an external audit:",
          items: [
            "an independent view without habit blindness",
            "work priorities, not an endless list of tiny issues",
            "practical alignment with search-engine requirements",
          ],
        },
      ],
      notes: [
        {
          title: "Practical compromise",
          kind: "tip",
          text: "Run an express pass yourself and log critical issues. Order a deep report and roadmap if growth still hits a ceiling after basic fixes.",
        },
      ],
    },
    {
      title: "What to do after the audit",
      level: 2,
      paras: [
        "An audit without implementation is just a PDF. Next: fix critical issues, then structure and landing keywords, then content and growth work.",
      ],
      lists: [],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A technical audit is a fast way to see if the site is breaking its own promotion. Start with indexing, status codes, and speed; go deeper as resources allow. If you need a second pair of eyes — review the report with a specialist and budget for fixes right away.",
      ],
      lists: [],
    },
  ],
};

/** ES overlay for tehnicheskiy-seo-audit — same structure as RU JSON / EN. */
export const tehnicheskiySeoAuditEs: BlogPost = {
  slug: "tehnicheskiy-seo-audit",
  title: "Auditoría SEO técnica: objetivos, alcance y un arranque DIY",
  date: "2021-07-22",
  category: "SEO",
  cover: "/images/blog/tehnicheskiy-seo-audit/cover.webp",
  excerpt:
    "Por qué importa una auditoría SEO técnica, qué revisar y si puedes hacer un pase básico tú mismo.",
  lead: [
    "Si el sitio se estanca pese a contenido y gasto en ads, a menudo no es «magia del SERP» sino técnica: indexación, velocidad, duplicados, códigos de estado, layout móvil.",
    "Abajo: en qué se diferencia una auditoría técnica de otros checks, qué puedes inspeccionar tú y cuándo conviene pasar el trabajo a especialistas.",
  ],
  faq: [
    {
      q: "¿Qué es una auditoría SEO técnica?",
      a: "Una revisión de cómo se sirve el sitio a crawlers y usuarios: crawl, indexación, códigos de estado, velocidad, readiness móvil, archivos de utilidad y errores críticos de layout/servidor.",
    },
    {
      q: "¿En qué se diferencia de una auditoría SEO completa?",
      a: "La técnica es la base. Por separado revisas keywords, copy, enlaces y usabilidad. Sin técnica, ni un set fuerte de keywords suele volverse rankings estables.",
    },
    {
      q: "¿Puedo auditarlo yo?",
      a: "Un loop básico — sí: paneles de webmaster, un crawler, PageSpeed/CWV, checks de robots y sitemap. El trabajo profundo de nicho y la priorización suele ir más rápido con un especialista experimentado.",
    },
    {
      q: "¿Por dónde empezar si el tiempo es corto?",
      a: "Indexación y duplicados, 4xx/5xx, redirects, versión móvil, LCP/INP, HTTPS y acceso a landings clave.",
    },
    {
      q: "¿Cuándo es mejor posponer una auditoría?",
      a: "Si no hay presupuesto para arreglos, el sitio está obsoleto y es más fácil reconstruirlo, o la prioridad es un ciclo paid corto sin apoyarte en orgánico.",
    },
  ],
  sections: [
    {
      title: "Para qué sirve una auditoría del sitio",
      level: 2,
      paras: [
        "Una auditoría es una revisión sistemática: técnica, estructura, contenido, usabilidad y visibilidad en búsqueda. La meta — ver si el recurso está listo para promoción o necesita arreglos primero.",
        "El loop técnico responde: ¿puede un crawler rastrear e indexar de forma estable las URLs correctas, y puede un usuario obtener la página rápido sin fallos?",
      ],
      lists: [],
    },
    {
      title: "Qué debe entregar una auditoría SEO",
      level: 2,
      paras: [
        "El trabajo principal es reunir hechos sobre el estado del sitio y los puntos débiles — no «buscar a quién culpar».",
        "Después priorizas arreglos: qué bloquea ahora la indexación y la conversión, qué puede esperar. Demanda, competencia y UX también se valoran — pero van al lado de la técnica pura.",
      ],
      lists: [
        {
          intro: "Una auditoría suele entregar:",
          items: [
            "una lista de errores críticos con prioridad",
            "un mapa de qué bloquea el crecimiento de tráfico y leads",
            "un plan de trabajo claro para las siguientes iteraciones",
          ],
        },
      ],
    },
    {
      title: "Tipos de auditoría",
      level: 2,
      paras: [
        "En la práctica hay varios tipos. Usabilidad y marketing son cortes estrechos. La técnica mira hosting, código, crawl y entrega de páginas. La de búsqueda (on-page / SEO) — meta, headings, enlaces internos, duplicados de contenido — más a menudo cuando la técnica no estorba.",
        "Un check express antes de promover cubre solo lo crítico. Una revisión completa necesita crawler y paneles de webmaster. Tools: Screaming Frog, Netpeak Spider, Titlo, más Google Search Console y Yandex Webmaster.",
      ],
      lists: [
        {
          intro: "Clasificación básica:",
          items: [
            "técnica",
            "búsqueda (on-page / SEO)",
            "usabilidad",
            "marketing / competitiva",
          ],
        },
      ],
    },
    {
      title: "Técnica (bajo el capó)",
      level: 3,
      paras: [
        "Una auditoría técnica revisa cómo funciona el sitio bajo el capó. Errores de servidor, un robots roto, duplicados y una versión móvil lenta duelen a la visibilidad más que un párrafo de copy que falta.",
      ],
      lists: [
        {
          intro: "Qué se suele revisar:",
          items: [
            "códigos de estado 2xx / 3xx / 4xx / 5xx y cadenas de redirects",
            "robots.txt y sitemap XML",
            "indexación de URLs clave (webmaster / Search Console)",
            "canónicos y duplicados (WWW, HTTP/HTTPS, parámetros)",
            "velocidad y Core Web Vitals (LCP, INP, CLS)",
            "layout móvil y viewport",
            "HTTPS y mixed content",
            "disponibilidad de recursos importantes (JS/CSS), errores críticos de layout",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Meter de golpe métricas de marca, perfil de enlaces y «factores de ranking» en «técnica». Son bloques de informe relacionados; primero quita lo que rompe crawl e indexación.",
        },
      ],
      tables: [
        {
          caption: "Mini-checklist de auditoría express",
          headers: ["Check", "Dónde mirar", "Severidad"],
          rows: [
            ["Homepage y servicios indexados", "Webmaster / GSC", "alta"],
            ["404 en URLs importantes", "Crawler", "alta"],
            ["robots bloquea URLs necesarias", "robots.txt", "alta"],
            ["LCP móvil lento", "PageSpeed / CWV", "media/alta"],
            ["Duplicados sin canonical", "Crawler", "alta"],
          ],
        },
      ],
    },
    {
      title: "Auditoría de búsqueda (on-page)",
      level: 3,
      paras: [
        "Tras la técnica, revisa qué tan listas están las páginas para rankear: meta, headings, enlazado interno, duplicados de contenido, optimización de imágenes.",
      ],
      lists: [
        {
          intro: "Alcance típico:",
          items: [
            "ajustes de indexación y caza de duplicados",
            "meta tags Title / Description",
            "jerarquía H1–H3",
            "enlazado interno",
            "alt en imágenes con sentido",
            "filtros y caídas bruscas — aparte, con evidencia",
            "posiciones y tráfico vs competidores — como contexto, no como «técnica»",
          ],
        },
      ],
    },
    {
      title: "Usabilidad",
      level: 3,
      paras: [
        "Usabilidad es comodidad para personas: velocidad, readiness móvil, navegación clara, sin secciones vacías. Algunas métricas se solapan con técnica (velocidad, SSL), otras con el producto (flujo de leads).",
      ],
      lists: [
        {
          intro: "Qué mirar:",
          items: [
            "velocidad de carga y estabilidad de UI",
            "visualización en teléfono y tablet",
            "HTTPS",
            "jerarquía lógica y sin placeholders",
            "bounces, profundidad, dispositivos y navegadores — en analytics",
          ],
        },
      ],
    },
    {
      title: "Contenido y relleno del sitio",
      level: 3,
      paras: [
        "Un corte aparte: unicidad y frescura del copy, huecos de información, efectividad de keywords en landings, páginas desfasadas a borrar o actualizar.",
        "Un contenido fuerte no cancela la técnica: si una página no se indexa o devuelve 500, el texto no la salva.",
      ],
      lists: [],
    },
    {
      title: "Auditoría básica vs completa",
      level: 2,
      paras: [
        "Un pase básico (express) cubre lo crítico: errores de servidor, 404/redirects, meta en URLs clave, indexación. No pretende una revisión completa de competencia o diseño.",
        "Una auditoría completa — técnica + on-page + keywords/estructura + usabilidad y contexto competitivo. Eso es un plan de trabajo llave en mano, no un solo checklist.",
      ],
      lists: [
        {
          intro: "Cuándo una auditoría es especialmente útil:",
          items: [
            "lanzamiento o relanzamiento del sitio",
            "el sitio lleva mucho sin mantenimiento",
            "la promoción se paró y las métricas cayeron",
            "necesitas oversight del vendor",
            "tráfico bajo, bounce alto, 404s al alza",
          ],
        },
        {
          intro: "Cuándo una auditoría SEO puede esperar:",
          items: [
            "sin presupuesto para arreglos después",
            "el recurso está obsoleto y es mejor reemplazarlo",
            "la prioridad es un ciclo paid corto sin orgánico",
          ],
        },
      ],
    },
    {
      title: "DIY o con un vendor",
      level: 2,
      paras: [
        "Tu propio loop ayuda: aprender a leer tools de webmaster, crawlear el sitio, arreglar robots y meta. Lleva tiempo y alguien que termine los arreglos.",
        "Un vendor ve errores sistémicos más rápido, separa lo crítico del ruido y ata la técnica a keywords y estructura. Tiene sentido cuando el downtime cuesta más que la auditoría.",
      ],
      lists: [
        {
          intro: "Argumentos para una auditoría externa:",
          items: [
            "una mirada independiente sin ceguera de hábito",
            "prioridades de trabajo, no una lista infinita de minucias",
            "alineación práctica con requisitos de buscadores",
          ],
        },
      ],
      notes: [
        {
          title: "Compromiso práctico",
          kind: "tip",
          text: "Haz un pase express tú y anota lo crítico. Encarga un informe profundo y roadmap si el crecimiento sigue chocando con un techo tras los arreglos básicos.",
        },
      ],
    },
    {
      title: "Qué hacer tras la auditoría",
      level: 2,
      paras: [
        "Una auditoría sin implementación es solo un PDF. Siguiente: arreglar lo crítico, luego estructura y keywords de landings, luego contenido y trabajo de crecimiento.",
      ],
      lists: [],
      links: [
        {
          label: "Research de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Una auditoría técnica es una forma rápida de ver si el sitio rompe su propia promoción. Empieza por indexación, códigos de estado y velocidad; profundiza según recursos. Si necesitas un segundo par de ojos — revisa el informe con un especialista y presupuesta arreglos ya.",
      ],
      lists: [],
    },
  ],
};

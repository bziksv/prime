import type { BlogPost } from "../../../data/blog";

/** EN overlay for tselevaya-auditoriya — same structure as RU JSON. */
export const tselevayaAuditoriyaEn: BlogPost = {
  slug: "tselevaya-auditoriya",
  title: "How to define your target audience: questions and segments",
  date: "2019-07-12",
  category: "SEO",
  cover: "/images/blog/tselevaya-auditoriya/cover-en.webp",
  excerpt:
    "A practical audience breakdown: demographics, jobs, anti-persona, segments, and data sources — so ads and content don’t shoot into the void.",
  lead: [
    "Target audience is people whose problem your product actually solves. Without it, keyword research, ads, and copy live on “gut feel”: budget goes to clicks, leads are random.",
    "Below: a set of questions and steps to build a portrait in a reasonable time, cut non-targets, and split the audience into segments. It’s a base for both the SEO keyword set and creatives — not a full market-study replacement.",
  ],
  faq: [
    {
      q: "Where should I start if I still have few clients?",
      a: "Hypotheses plus competitor and niche data: who buys from leaders, which phrasing shows up in reviews and queries. Then refine with surveys and analytics from your first sales.",
    },
    {
      q: "Is the audience for SEO and ads the same?",
      a: "The core is the same; cuts can differ: search cares about intents and query phrasing, social ads — interests and lookalikes. One portrait, different channels.",
    },
    {
      q: "Do I need a detailed persona?",
      a: "A persona helps the team speak one language. For a start, 2–4 segments with a job, barrier, and channel are enough; “name and hobby” is optional.",
    },
    {
      q: "What is an anti-persona?",
      a: "Who is definitely not your client: another city or budget, a rival brand, freebie hunters, B2C when you sell B2B. Exclusions save budget and analytics noise.",
    },
    {
      q: "Where do I get audience data?",
      a: "CRM and leads, Yandex Metrika/Analytics, Webmaster/GSC, Wordstat and the keyword set, surveys, reviews, social stats, sales-manager interviews.",
    },
    {
      q: "Are demographics required?",
      a: "Often yes as a filter, but the job and purchase context matter more. “Women 25–45” without pain and triggers is a weak brief.",
    },
    {
      q: "How does audience tie to keyword research?",
      a: "Segments suggest query clusters and landing tone. A keyword set without an audience easily fills with non-target phrasing.",
    },
    {
      q: "How many segments is normal?",
      a: "Usually 2–5 working ones. Dozens of “micro-personas” without different offers and creatives is bureaucracy.",
    },
  ],
  sections: [
    {
      title: "Why describe the audience explicitly",
      level: 2,
      paras: [
        "A good product sold to the wrong person performs poorly: wrong offer, off-tone voice, useless keywords in ads. An audience description is a shared language for SEO, content, paid search, and sales.",
        "The goal isn’t to “guess everyone” — it’s to lock who you promise a result to and who you consciously leave out of focus.",
      ],
      lists: [
        {
          intro: "Without an audience, usually suffer:",
          items: [
            "keywords and copy — noise and cannibalization",
            "ads — expensive non-target clicks",
            "landings — weak first-screen response",
            "analytics — unclear what counts as success",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Basic questions: who and where",
      level: 2,
      paras: [
        "Start with demographics and geography — as a frame, not the whole truth. Gender, age, city/region, device (mobile/desktop) cut obvious junk and help set targeting.",
        "If your own stats are thin — look at competitors with the same product: community audiences, reviews, site phrasing. In niches with a non-obvious buyer (gifts, B2B) lean on surveys and interviews, not only “it seems”.",
      ],
      lists: [
        {
          intro: "Sources at the start:",
          items: [
            "client and lead surveys",
            "owner hypothesis plus data check",
            "social stats and lookalikes from niche leaders",
            "geo and devices in Yandex Metrika/Analytics",
          ],
        },
      ],
    },
    {
      title: "Jobs, adjacent demand, and anti-persona",
      level: 2,
      paras: [
        "Ask: which service or product they seek and what else covers the same need. Sushi delivery competes not only with other sushi but with pizza “for dinner at home” — indirect competitors for attention.",
        "Separately lock who will walk past: vegetarians at a meat shop, another delivery region, freebie hunters, competitors’ staff. An anti-persona saves negatives and budget.",
      ],
      lists: [
        {
          intro: "Useful to add to the brief:",
          items: [
            "direct competitors (same product)",
            "indirect (same job, different way)",
            "what else interests the buyer next to you",
            "who we exclude from targeting and the keyword set",
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
      title: "Profile and segments",
      level: 2,
      paras: [
        "Build a segment profile: role (who pays / who uses), job, barrier, touch channel, typical query. On social, see what people follow and write about — as an interest hint, not absolute truth.",
        "Segmentation matters when the offer or creative actually changes: beginner vs expert, B2B vs B2C, “urgent” vs “compare”. One averaged portrait for the whole catalog is often weaker than two or three clear ones.",
      ],
      lists: [
        {
          intro: "Segment fields:",
          items: [
            "who and in what role",
            "job / JTBD",
            "barrier and objection",
            "when the need appears",
            "where they go for advice (search, chats, creators)",
            "main keyword or cluster for SEO",
          ],
        },
      ],
    },
    {
      title: "Triggers: when and why they buy",
      level: 2,
      paras: [
        "Purchase ties to a moment: season, breakdown, project launch, gift, deadline. For B2B you often need an existing business or equipment fleet — without that, cold reach is useless.",
        "Map which jobs the product closes (lose weight / gain mass / maintain shape for fitness) — that yields different landings, ads, and query clusters.",
      ],
      lists: [
        {
          intro: "Check questions:",
          items: [
            "what must happen for someone to start searching for you",
            "which “job” they hire your product for",
            "whose example or expert influences the choice",
            "what must be on the first screen for the segment",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "How to lock it in and not lose it",
      level: 2,
      paras: [
        "The outcome is a short segment table in one place (Notion/sheet), tied to negatives, keyword clusters, and creatives. Once a quarter, check against real leads: the audience drifts if the product or market moved.",
        "Don’t mix up reach with quality: traffic growth without segment match is noise. Better fewer visits with a clear job and conversion.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "audience draft in one question session",
            "check against 20–50 real leads/orders",
            "fix negatives and landings",
            "repeat after an offer or region change",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "analiz-konkurentov",
    "lending",
    "tekst-lendinga",
    "brendovyy-trafik",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for tselevaya-auditoriya — same structure as RU JSON / EN. */
export const tselevayaAuditoriyaEs: BlogPost = {
  slug: "tselevaya-auditoriya",
  title: "Cómo definir tu audiencia objetivo: preguntas y segmentos",
  date: "2019-07-12",
  category: "SEO",
  cover: "/images/blog/tselevaya-auditoriya/cover.webp",
  excerpt:
    "Un desglose práctico de audiencia: demografía, jobs, anti-persona, segmentos y fuentes de datos — para que ads y contenido no disparen al vacío.",
  lead: [
    "La audiencia objetivo son personas cuyo problema tu producto resuelve de verdad. Sin ella, el keyword research, los ads y el copy viven de «intuición»: el presupuesto se va en clics y los leads son aleatorios.",
    "Abajo: un set de preguntas y pasos para armar un retrato en un tiempo razonable, cortar no-targets y dividir la audiencia en segmentos. Es base tanto para el núcleo SEO como para creatividades — no sustituye un estudio de mercado completo.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si aún tengo pocos clientes?",
      a: "Hipótesis más datos de competidores y del nicho: quién compra a los líderes, qué formulaciones aparecen en reseñas y consultas. Luego afina con encuestas y analytics de las primeras ventas.",
    },
    {
      q: "¿La audiencia para SEO y ads es la misma?",
      a: "El núcleo es el mismo; los cortes pueden diferir: la búsqueda cuida intents y formulación de consultas, los ads sociales — intereses y lookalikes. Un retrato, canales distintos.",
    },
    {
      q: "¿Hace falta una persona detallada?",
      a: "Una persona ayuda al equipo a hablar el mismo idioma. Para empezar bastan 2–4 segmentos con job, barrera y canal; «nombre y hobby» es opcional.",
    },
    {
      q: "¿Qué es una anti-persona?",
      a: "Quién definitivamente no es tu cliente: otra ciudad o presupuesto, una marca rival, cazadores de gangas, B2C cuando vendes B2B. Las exclusiones ahorran presupuesto y ruido en analytics.",
    },
    {
      q: "¿De dónde saco datos de audiencia?",
      a: "CRM y leads, Yandex Metrika/Analytics, Webmaster/GSC, Wordstat y el núcleo de keywords, encuestas, reseñas, stats sociales, entrevistas a managers de ventas.",
    },
    {
      q: "¿Es obligatoria la demografía?",
      a: "A menudo sí como filtro, pero importan más el job y el contexto de compra. «Mujeres 25–45» sin dolor ni triggers es un brief flojo.",
    },
    {
      q: "¿Cómo se liga la audiencia al keyword research?",
      a: "Los segmentos sugieren clusters de consultas y tono de landing. Un núcleo de keywords sin audiencia se llena fácil de formulaciones no objetivo.",
    },
    {
      q: "¿Cuántos segmentos es normal?",
      a: "Suele ser 2–5 que funcionen. Docenas de «micro-personas» sin ofertas y creatividades distintas es burocracia.",
    },
  ],
  sections: [
    {
      title: "Por qué describir la audiencia con claridad",
      level: 2,
      paras: [
        "Un buen producto vendido a la persona equivocada rinde mal: oferta incorrecta, tono descentrado, keywords inútiles en ads. Una descripción de audiencia es un lenguaje compartido para SEO, contenido, paid search y ventas.",
        "El objetivo no es «adivinar a todo el mundo» — es fijar a quién prometes un resultado y a quién dejas conscientemente fuera de foco.",
      ],
      lists: [
        {
          intro: "Sin audiencia, suelen sufrir:",
          items: [
            "keywords y copy — ruido y canibalización",
            "ads — clics caros no objetivo",
            "landings — respuesta floja en el primer pantallazo",
            "analytics — poco claro qué cuenta como éxito",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Preguntas básicas: quién y dónde",
      level: 2,
      paras: [
        "Empieza por demografía y geografía — como marco, no como toda la verdad. Género, edad, ciudad/región, dispositivo (móvil/desktop) cortan basura obvia y ayudan a fijar targeting.",
        "Si tus propias stats son flojas — mira competidores con el mismo producto: audiencias de comunidad, reseñas, formulaciones del sitio. En nichos con comprador no obvio (regalos, B2B) apóyate en encuestas y entrevistas, no solo en «parece que».",
      ],
      lists: [
        {
          intro: "Fuentes al inicio:",
          items: [
            "encuestas a clientes y leads",
            "hipótesis del dueño más chequeo con datos",
            "stats sociales y lookalikes de líderes del nicho",
            "geo y dispositivos en Yandex Metrika/Analytics",
          ],
        },
      ],
    },
    {
      title: "Jobs, demanda adyacente y anti-persona",
      level: 2,
      paras: [
        "Pregunta: qué servicio o producto buscan y qué más cubre la misma necesidad. El delivery de sushi compite no solo con otro sushi sino con pizza «para cenar en casa» — competidores indirectos por atención.",
        "Por separado fija quién se irá de largo: vegetarianos en una carnicería, otra región de delivery, cazadores de gangas, personal de competidores. Una anti-persona ahorra negativos y presupuesto.",
      ],
      lists: [
        {
          intro: "Útil añadir al brief:",
          items: [
            "competidores directos (mismo producto)",
            "indirectos (mismo job, otra vía)",
            "qué más interesa al comprador junto a ti",
            "a quién excluimos del targeting y del núcleo de keywords",
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
      title: "Perfil y segmentos",
      level: 2,
      paras: [
        "Arma un perfil de segmento: rol (quién paga / quién usa), job, barrera, canal de contacto, consulta típica. En redes mira qué siguen y escriben — como pista de interés, no verdad absoluta.",
        "La segmentación importa cuando la oferta o la creatividad cambian de verdad: principiante vs experto, B2B vs B2C, «urgente» vs «comparar». Un retrato promedio para todo el catálogo suele ser más débil que dos o tres claros.",
      ],
      lists: [
        {
          intro: "Campos del segmento:",
          items: [
            "quién y en qué rol",
            "job / JTBD",
            "barrera y objeción",
            "cuándo aparece la necesidad",
            "dónde piden consejo (búsqueda, chats, creators)",
            "keyword o cluster principal para SEO",
          ],
        },
      ],
    },
    {
      title: "Triggers: cuándo y por qué compran",
      level: 2,
      paras: [
        "La compra se liga a un momento: temporada, avería, lanzamiento de proyecto, regalo, deadline. En B2B a menudo hace falta un negocio o flota de equipos ya existentes — sin eso, el reach frío no sirve.",
        "Mapea qué jobs cierra el producto (adelgazar / ganar masa / mantener forma en fitness) — eso da landings, ads y clusters de consultas distintos.",
      ],
      lists: [
        {
          intro: "Preguntas de chequeo:",
          items: [
            "qué debe pasar para que alguien empiece a buscarte",
            "para qué «job» contratan tu producto",
            "qué ejemplo o experto influye en la elección",
            "qué debe haber en el primer pantallazo para el segmento",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
      ],
    },
    {
      title: "Cómo fijarlo y no perderlo",
      level: 2,
      paras: [
        "El resultado es una tabla corta de segmentos en un solo sitio (Notion/hoja), ligada a negativos, clusters de keywords y creatividades. Una vez al trimestre, contrasta con leads reales: la audiencia deriva si el producto o el mercado se movieron.",
        "No mezcles reach con calidad: crecimiento de tráfico sin encaje de segmento es ruido. Mejor menos visitas con un job claro y conversión.",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "borrador de audiencia en una sesión de preguntas",
            "chequeo contra 20–50 leads/pedidos reales",
            "fijar negativos y landings",
            "repetir tras un cambio de oferta o región",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "analiz-konkurentov",
    "lending",
    "tekst-lendinga",
    "brendovyy-trafik",
    "optimizatsiya-konversii",
  ],
};

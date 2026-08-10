import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-plan — same structure as RU JSON. */
export const kontentPlanEn: BlogPost = {
  slug: "kontent-plan",
  title: "Content plan: what it is and how to build one",
  date: "2021-10-26",
  category: "Content marketing",
  cover: "/images/blog/kontent-plan/cover-en.webp",
  excerpt:
    "What a content plan is, how it differs from an editorial calendar and a media plan, and a clear build process: formats, topics, keywords, categories, schedule, and headlines.",
  lead: [
    "A content plan is your publishing calendar: what goes out, where, and when. Without one, a site, blog, and social channels drift into silence — or random posts with no thread.",
    "Below: the terms, why the plan exists, and a step-by-step way to build it. Instagram has its own guide with feed mix ratios; this piece is the general frame for the website and other channels.",
  ],
  faq: [
    {
      q: "How is a content plan different from an editorial plan?",
      a: "They’re close cousins: a queue of pieces with deadlines. “Editorial plan” is more newsroom language; “content plan” is what most businesses and blogs call it.",
    },
    {
      q: "Is a media plan the same thing?",
      a: "No. A media plan maps ad campaigns and budgets. A content plan maps the editorial feed — articles, posts, video, email.",
    },
    {
      q: "Where should we keep the plan?",
      a: "Sheets, Notion, Trello, a shared calendar — whatever the team will actually open. One source of truth and clear access matter more than the tool.",
    },
    {
      q: "Do site content plans need keyword research?",
      a: "Yes if search is a goal: group topics into clusters, write one strong piece per cluster, and skip stuffing.",
    },
    {
      q: "How far ahead should I plan?",
      a: "Start with 2–4 weeks. Then stretch to a month with a backlog of ideas. A rigid quarter only helps once production is stable.",
    },
  ],
  sections: [
    {
      title: "Content plan vs editorial plan vs media plan",
      level: 2,
      paras: [
        "A content plan is the publishing schedule for your project goals — articles, posts, video, newsletters. An editorial plan is the same idea inside a publication. A media plan is mostly advertising activity and spend.",
        "A company blog and a magazine have different owners and roles, but the logic is the same: you know what’s going live and who’s accountable before the day starts.",
      ],
      lists: [
        {
          intro: "A useful plan usually tracks:",
          items: [
            "topic and format",
            "channel (site, VK, blog, YouTube…)",
            "date or slot",
            "owner",
            "status and a link to the draft",
          ],
        },
      ],
    },
    {
      title: "Why bother with a content plan",
      level: 2,
      paras: [
        "It kills the daily “what do we post?” scramble, steadies your cadence, gives freelancers a real brief, and makes series and internal linking much easier to run.",
      ],
      lists: [
        {
          intro: "What you gain:",
          items: [
            "steady rhythm instead of chaos",
            "one concept and clear categories",
            "an idea backlog in one place",
            "an easier read on what actually worked",
          ],
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "How to build the plan",
      level: 2,
      paras: [
        "Start with goal and audience. Then lock formats and topics. For the website, layer in keyword research. After that: categories, schedule, and headlines.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "choose content types (guides, reviews, how-tos, comparisons, case studies, video)",
            "set tone and length",
            "gather topics from your audience, forums, support questions, and brainstorms",
            "for SEO — keyword clusters; roughly one strong piece per cluster",
            "sort into categories",
            "assign dates and owners",
            "draft working headlines without fake clickbait",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Keep 5–7 evergreen topics in reserve. If a slot slips, you reschedule — you don’t go dark for two weeks.",
        },
      ],
    },
    {
      title: "Where to run it — and how not to abandon it",
      level: 2,
      paras: [
        "A spreadsheet is great for filters and color coding; paper still works for a tiny team. Updating statuses beats hunting for a “perfect” template you’ll never open again.",
      ],
      lists: [
        {
          intro: "Signs the plan is alive:",
          items: [
            "statuses stay current",
            "someone owns the process",
            "you review what landed on a regular cadence",
            "categories don’t turn into wall-to-wall selling",
          ],
        },
      ],
    },
  ],
  closing: [
    "Open the plan two weeks ahead. If the topics don’t fit your stage or strategy matrix, fix those gaps first — then lock the dates.",
  ],
  related: [
    "matritsa-kontenta",
    "kontent-plan-instagram",
    "prodayushchiy-kontent",
    "korporativnyy-blog",
    "semanticheskoe-yadro",
    "analitika-kontent-marketinga",
  ],
};

/** ES overlay for kontent-plan — same structure as RU JSON / EN. */
export const kontentPlanEs: BlogPost = {
  slug: "kontent-plan",
  title: "Plan de contenidos: qué es y cómo montarlo",
  date: "2021-10-26",
  category: "Content marketing",
  cover: "/images/blog/kontent-plan/cover-es.webp",
  excerpt:
    "Qué es un plan de contenidos, en qué se diferencia de un calendario editorial y un plan de medios, y un proceso claro: formatos, temas, keywords, categorías, calendario y titulares.",
  lead: [
    "Un plan de contenidos es tu calendario de publicación: qué sale, dónde y cuándo. Sin él, un sitio, un blog y los canales sociales derivan al silencio — o a posts al azar sin hilo.",
    "Abajo: los términos, para qué existe el plan y una forma paso a paso de montarlo. Instagram tiene su propia guía con ratios del feed; esta pieza es el marco general para el sitio web y otros canales.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un plan de contenidos de un plan editorial?",
      a: "Son primos cercanos: una cola de piezas con plazos. «Plan editorial» suena más a redacción; «plan de contenidos» es lo que llaman la mayoría de negocios y blogs.",
    },
    {
      q: "¿Un plan de medios es lo mismo?",
      a: "No. Un plan de medios mapea campañas de ads y presupuestos. Un plan de contenidos mapea el feed editorial — artículos, posts, vídeo, email.",
    },
    {
      q: "¿Dónde conviene guardar el plan?",
      a: "Sheets, Notion, Trello, un calendario compartido — lo que el equipo abra de verdad. Una sola fuente de verdad y acceso claro importan más que la herramienta.",
    },
    {
      q: "¿Los planes de contenido del sitio necesitan investigación de keywords?",
      a: "Sí si la búsqueda es un objetivo: agrupa temas en clusters, escribe una pieza fuerte por cluster y evita el stuffing.",
    },
    {
      q: "¿Con cuánta antelación planificar?",
      a: "Empieza con 2–4 semanas. Luego estira a un mes con un backlog de ideas. Un trimestre rígido solo ayuda cuando la producción ya es estable.",
    },
  ],
  sections: [
    {
      title: "Plan de contenidos vs plan editorial vs plan de medios",
      level: 2,
      paras: [
        "Un plan de contenidos es el calendario de publicación para los objetivos del proyecto — artículos, posts, vídeo, newsletters. Un plan editorial es la misma idea dentro de una publicación. Un plan de medios es sobre todo actividad publicitaria y gasto.",
        "Un blog de empresa y una revista tienen dueños y roles distintos, pero la lógica es la misma: sabes qué sale al aire y quién responde antes de que empiece el día.",
      ],
      lists: [
        {
          intro: "Un plan útil suele registrar:",
          items: [
            "tema y formato",
            "canal (sitio, VK, blog, YouTube…)",
            "fecha o slot",
            "responsable",
            "estado y un enlace al borrador",
          ],
        },
      ],
    },
    {
      title: "Para qué molestarse con un plan de contenidos",
      level: 2,
      paras: [
        "Mata el «¿qué publicamos hoy?» diario, estabiliza el ritmo, da a freelancers un brief real y hace mucho más fácil correr series y enlazado interno.",
      ],
      lists: [
        {
          intro: "Qué ganas:",
          items: [
            "ritmo estable en lugar de caos",
            "un concepto y categorías claras",
            "un backlog de ideas en un solo sitio",
            "una lectura más fácil de lo que de verdad funcionó",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenidos de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Cómo montar el plan",
      level: 2,
      paras: [
        "Empieza por objetivo y audiencia. Luego fija formatos y temas. Para el sitio web, añade investigación de keywords. Después: categorías, calendario y titulares.",
      ],
      lists: [
        {
          intro: "Pasos:",
          items: [
            "elige tipos de contenido (guías, reviews, how-tos, comparativas, casos, vídeo)",
            "define tono y longitud",
            "reúne temas de tu audiencia, foros, preguntas de soporte y brainstorms",
            "para SEO — clusters de keywords; más o menos una pieza fuerte por cluster",
            "ordena en categorías",
            "asigna fechas y responsables",
            "redacta titulares de trabajo sin clickbait falso",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing",
          href: "/es/blog/zaspamlennost-teksta/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Consejo práctico",
          text: "Guarda 5–7 temas evergreen de reserva. Si un slot se cae, reprogramas — no te quedas a oscuras dos semanas.",
        },
      ],
    },
    {
      title: "Dónde llevarlo — y cómo no abandonarlo",
      level: 2,
      paras: [
        "Una hoja de cálculo va bien para filtros y colores; el papel sigue sirviendo a un equipo minúsculo. Actualizar estados gana a cazar la plantilla «perfecta» que nunca volverás a abrir.",
      ],
      lists: [
        {
          intro: "Señales de que el plan está vivo:",
          items: [
            "los estados se mantienen al día",
            "alguien es dueño del proceso",
            "revisas lo publicado con una cadencia regular",
            "las categorías no se convierten en venta de pared a pared",
          ],
        },
      ],
    },
  ],
  closing: [
    "Abre el plan con dos semanas de antelación. Si los temas no encajan con tu etapa o matriz de estrategia, arregla esos huecos primero — luego fija las fechas.",
  ],
  related: [
    "matritsa-kontenta",
    "kontent-plan-instagram",
    "prodayushchiy-kontent",
    "korporativnyy-blog",
    "semanticheskoe-yadro",
    "analitika-kontent-marketinga",
  ],
};

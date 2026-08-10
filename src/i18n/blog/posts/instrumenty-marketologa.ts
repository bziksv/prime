import type { BlogPost } from "../../../data/blog";

/** ES overlay for instrumenty-marketologa — same structure as RU JSON. */
export const instrumentyMarketologaEs: BlogPost = {
  slug: "instrumenty-marketologa",
  title: "Herramientas gratis para marketers: por dónde empezar",
  date: "2019-12-19",
  category: "Digital marketing",
  cover: "/images/blog/instrumenty-marketologa/cover-es.webp",
  excerpt:
    "Qué servicios gratis (o freemium) cubren el trabajo del marketer: research de competidores, planificación de posts, encuestas, email, monitorización de menciones y tareas — sin prometer gratis para siempre.",
  lead: [
    "El «stack gratis» de un marketer suele ser freemium: límites, watermarks e informes recortados. Basta para arrancar una auditoría, un plan de contenido, encuestas y el primer newsletter.",
    "Abajo: clases de tareas y servicios de ejemplo de un roundup de 2019 (SimilarWeb, Buffer, Mailchimp y otros). Precios y nombres han cambiado — mira el sitio actual de cada producto antes de adoptar nada.",
  ],
  faq: [
    {
      q: "¿Los planes gratis bastan para trabajo real?",
      a: "Para un piloto — a menudo sí. Para un equipo y volumen real de datos chocas con los límites rápido.",
    },
    {
      q: "¿Es preciso el SimilarWeb gratis?",
      a: "Las estimaciones de tráfico son aproximadas. Cruza tendencias con Métrica o GA en tu propio sitio.",
    },
    {
      q: "¿Hace falta Mailchimp para email?",
      a: "No. Es un ejemplo de ESP. Mira límites, deliverability e integraciones para tu región.",
    },
    {
      q: "¿Hace falta un task tracker aparte?",
      a: "Sí, o el contenido y las campañas se ahogan en chats. Todoist y similares son un inicio; equipos mayores suelen usar Asana, Jira o Notion.",
    },
    {
      q: "¿Son seguras las automatizaciones IFTTT?",
      a: "Revisa el acceso a cuentas y no empujes datos personales por cadenas dudosas.",
    },
    {
      q: "¿Qué sustituye a una suite all-in-one?",
      a: "Arma un set mínimo: analítica del sitio, ESP, planificador de tareas, una herramienta de research.",
    },
    {
      q: "¿Comprar reseñas o engagement falso vía herramientas?",
      a: "No. Las herramientas sirven para medir y organizar — no para trucos gray-hat.",
    },
  ],
  sections: [
    {
      title: "Research de competidores y analítica",
      level: 2,
      paras: [
        "Herramientas tipo SimilarWeb estiman fuentes de tráfico, solape de audiencia y benchmarks de competidores. La capa gratis es fina; las cifras son órdenes de magnitud, no contabilidad.",
        "Suma tus propios datos: Métrica o GA, Search Console / Webmaster y exports de cuentas de ads. Si no, las decisiones descansan en la estimación de otro.",
      ],
      links: [
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Contenido, social y encuestas",
      level: 2,
      paras: [
        "Schedulers como Buffer ayudan a mantener una cola de posts entre canales. Las reglas de plataforma y la disponibilidad del servicio por región cambian — elige lo que puedas usar de forma legal.",
        "Las encuestas (SurveyMonkey y similares) testean hipótesis antes de una campaña grande. Formularios cortos con un objetivo ganan a cuestionarios largos.",
        "La monitorización de menciones de marca (clase Brand24) ayuda a la reputación; las cuotas gratis se agotan rápido.",
      ],
    },
    {
      title: "Email, automatizaciones y tareas",
      level: 2,
      paras: [
        "ESP como Mailchimp cubren plantillas, segmentos y stats básicas. Para direcciones corporativas mira también el correo del dominio y la deliverability (SPF/DKIM).",
        "Enlaces tipo IFTTT ahorran rutina (guardaste un link → cayó en una hoja), pero no sustituyen un CRM.",
        "Un gestor de tareas (Todoist y similares) sostiene plazos de newsletter y creatividades. Sin él las «herramientas gratis» se vuelven caos de pestañas.",
      ],
      lists: [
        {
          intro: "Set mínimo de arranque:",
          items: [
            "tag de analítica en el sitio",
            "ESP con lista opt-in",
            "una herramienta de research de competidores",
            "encuestas/formularios",
            "lista de tareas del equipo",
          ],
        },
      ],
      links: [
        {
          label: "Estrategia de email",
          href: "/es/blog/email-strategiya/",
        },
        {
          label: "Correo del dominio",
          href: "/es/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Roundup de 2019: precios ($199 etc.), límites y nombres de producto están desfasados. El artículo es informativo; no es una llamada a usar plataformas extranjeras concretas contra la ley o las reglas del servicio.",
  },
  closing: [
    "Arma un stack estrecho para tus KPI, prueba los límites gratis en un piloto de una semana y solo entonces paga para ampliar — así las herramientas gratis ahorran presupuesto en lugar de criar suscripciones.",
  ],
  related: [
    "email-strategiya",
    "instrumenty-veb-analitiki",
    "pochta-dlya-domena",
    "triggernye-rassylki",
    "email-marketing-2020",
    "primery-email-rassylok",
  ],
};

/** EN overlay for instrumenty-marketologa — same structure as RU JSON. */
export const instrumentyMarketologaEn: BlogPost = {
  slug: "instrumenty-marketologa",
  title: "Free tools for marketers: where to start",
  date: "2019-12-19",
  category: "Digital marketing",
  cover: "/images/blog/instrumenty-marketologa/cover-en.webp",
  excerpt:
    "Which free (or freemium) services cover marketer jobs: competitor research, post planning, surveys, email, mention monitoring, and tasks — without promising free forever.",
  lead: [
    "A marketer’s “free stack” is usually freemium: limits, watermarks, and cut-down reports. That’s enough to start an audit, content plan, surveys, and a first newsletter.",
    "Below: task classes and example services from a 2019 roundup (SimilarWeb, Buffer, Mailchimp, and others). Pricing and names have changed — check each product’s current site before you adopt anything.",
  ],
  faq: [
    {
      q: "Are free plans enough for real work?",
      a: "For a pilot — often yes. For a team and real data volume you hit limits fast.",
    },
    {
      q: "Is free SimilarWeb accurate?",
      a: "Traffic estimates are approximate. Cross-check trends with Metrica or GA on your own site.",
    },
    {
      q: "Is Mailchimp required for email?",
      a: "No. It’s one ESP example. Check limits, deliverability, and integrations for your region.",
    },
    {
      q: "Do you need a separate task tracker?",
      a: "Yes, or content and campaigns drown in chats. Todoist and similar tools are a start; larger teams often use Asana, Jira, or Notion.",
    },
    {
      q: "Are IFTTT automations safe?",
      a: "Review account access and don’t push personal data through shady chains.",
    },
    {
      q: "What replaces an all-in-one suite?",
      a: "Build a minimal set: site analytics, ESP, task planner, one research tool.",
    },
    {
      q: "Should you buy reviews or fake engagement via tools?",
      a: "No. Tools are for measurement and organization — not gray-hat tricks.",
    },
  ],
  sections: [
    {
      title: "Competitor research and analytics",
      level: 2,
      paras: [
        "SimilarWeb-class tools estimate traffic sources, audience overlap, and competitor benchmarks. The free layer is thin; figures are orders of magnitude, not accounting.",
        "Add your own data: Metrica or GA, Search Console / Webmaster, and ad-account exports. Otherwise decisions rest on someone else’s estimate.",
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Content, social, and surveys",
      level: 2,
      paras: [
        "Schedulers like Buffer help keep a post queue across channels. Platform rules and service availability by region change — pick what you can actually use legally.",
        "Surveys (SurveyMonkey and similar) test hypotheses before a big campaign. Short forms with one goal beat long questionnaires.",
        "Brand mention monitoring (Brand24-class) helps reputation; free quotas run out fast.",
      ],
    },
    {
      title: "Email, automations, and tasks",
      level: 2,
      paras: [
        "ESPs like Mailchimp cover templates, segments, and basic stats. For corporate addresses also look at domain mail and deliverability (SPF/DKIM).",
        "IFTTT-like links save routine (saved a link → landed in a sheet), but don’t replace a CRM.",
        "A task manager (Todoist and similar) holds newsletter and creative deadlines. Without it “free tools” become tab chaos.",
      ],
      lists: [
        {
          intro: "Minimal starter set:",
          items: [
            "analytics tag on the site",
            "ESP with an opt-in list",
            "one competitor research tool",
            "surveys/forms",
            "a team task list",
          ],
        },
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
        {
          label: "Domain email",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "2019 roundup: prices ($199 etc.), limits, and product names are outdated. The article is informational; not a call to use specific foreign platforms against law or service rules.",
  },
  closing: [
    "Build a narrow stack for your KPIs, test free limits on a one-week pilot, and only then pay to expand — so free tools save budget instead of breeding subscriptions.",
  ],
  related: [
    "email-strategiya",
    "instrumenty-veb-analitiki",
    "pochta-dlya-domena",
    "triggernye-rassylki",
    "email-marketing-2020",
    "primery-email-rassylok",
  ],
};

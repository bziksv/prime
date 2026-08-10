import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-analitik — same structure as RU JSON. */
export const vebAnalitikEn: BlogPost = {
  slug: "veb-analitik",
  title: "Web analyst: role, skills, and career path",
  date: "2019-12-04",
  category: "SEO",
  cover: "/images/blog/veb-analitik/cover-en.webp",
  excerpt:
    "What a web analyst does, which skills matter, where to learn, how careers usually grow, and why the job is more than exporting a Metrica report.",
  lead: [
    "A web analyst studies how people move through the site and paid channels, then turns that into decisions: what to fix, what to test, where budget should go. Pulling a dashboard is not the deliverable.",
    "Below: duties, skills, learning paths, where analysts sit, career steps, and the trade-offs of the role. Salary bands move fast — check live openings. What matters here is the shape of the work.",
  ],
  faq: [
    {
      q: "Is a web analyst the same as an SEO specialist?",
      a: "No. SEO leans into search, content, and tech. An analyst spans the funnel, channels, experiments, and reporting. The skill sets overlap, but the jobs are not identical.",
    },
    {
      q: "Is Yandex Metrica enough?",
      a: "Enough to start. Next come goals, segments, GA or peers, marketing basics, A/B testing, and explaining findings to non-analysts.",
    },
    {
      q: "Do you need English?",
      a: "Technical English helps a lot: tool docs, courses, and research.",
    },
    {
      q: "Where should a beginner start?",
      a: "Put counters on a training or personal project, set goals, break down sources and bounce, then ship two or three mini-cases with recommendations.",
    },
    {
      q: "Where do analysts work?",
      a: "In-house (especially larger companies), in agencies and studios, or freelance on projects. Small businesses more often hire for a short engagement when sales slip.",
    },
    {
      q: "Is the analyst responsible for search rankings?",
      a: "Not as a one-button KPI. They show what blocks conversion and growth; SEO, content, and engineering ship the fixes. Organic visibility still takes its own timeline — often months of steady work after promotion starts.",
    },
    {
      q: "Do you need a technical degree?",
      a: "Not required. Systems thinking and comfort with numbers matter more. Employers weigh practice and a case portfolio.",
    },
    {
      q: "What makes the role hard?",
      a: "Vague briefs, debates that “we already did everything right,” repetitive reporting, and work dumped outside analytics.",
    },
  ],
  sections: [
    {
      title: "Who a web analyst is",
      level: 2,
      paras: [
        "Someone who collects and interprets visitor and channel data to improve site outcomes: traffic quality, conversion, UX. The role is not “the person with Metrica access.”",
        "The real output is clear conclusions and priorities for marketing, product, and engineering: what you measured, what you changed, what to test next.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "data → hypotheses → recommendations → validation",
            "not a report for its own sake",
            "tied to business goals, not only session counts",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica: install",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Duties",
      level: 2,
      paras: [
        "Choosing and wiring data tools, goals and events, behavior analysis (bounce, paths, forms), funnel audits, A/B tests, site KPIs, reports for different roles, improvement proposals, checks against market research, and input into strategy.",
        "The day-to-day mix depends on the company: closer to performance in some places, closer to product in others. Translating numbers into the stakeholder’s language without losing accuracy is part of the job.",
      ],
      lists: [
        {
          intro: "Typical task set:",
          items: [
            "counters, goals, call tracking",
            "segments and sources",
            "UX and offer hypotheses",
            "A/B tests and impact measurement",
            "regular and ad-hoc reporting",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Skills and learning",
      level: 2,
      paras: [
        "Core stack: Metrica and Google Analytics (or whatever the company uses), internet marketing basics, A/B testing, reporting, ideally call tracking, and enough SEO/paid search to speak the same language. Technical English is a plus.",
        "Paths include university or school courses, webinars, and hands-on work. Prefer a current curriculum with at least half practice. Books and case reviews help, but they do not replace your own before/after projects.",
      ],
      lists: [
        {
          intro: "Beginner checklist:",
          items: [
            "install a counter and goals",
            "break down sources and landings",
            "find three problems with evidence",
            "propose fixes and a way to verify them",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Career and the market",
      level: 2,
      paras: [
        "Larger companies keep analysts in-house or as teams; small business more often hires by project. In agencies and studios the ladder is usually junior → middle → senior → lead → head of practice.",
        "Pay tracks experience, project scale, adjacent skills (SEO, paid media, SQL/BI), and region. Figures from old articles age fast — check current openings and market ranges.",
      ],
      lists: [
        {
          intro: "What raises a candidate’s value:",
          items: [
            "cases with measurable impact",
            "adjacent skills (SEO / ads)",
            "clear communication with non-analysts",
            "experience prioritizing a backlog",
          ],
        },
      ],
    },
    {
      title: "Pros and costs of the role",
      level: 2,
      paras: [
        "Upsides: visible business impact, room to grow, remote and flexible schedules in many setups, a solid digital-role profile, and paths into product, performance, or SEO.",
        "Downsides: resistance to change (“we’ve always done it this way”), fuzzy client briefs, blurry duty borders, and monotony in some reporting. A clear brief and agreed KPIs cut a lot of friction.",
      ],
      lists: [
        {
          intro: "Takeaway:",
          items: [
            "the role is about decisions from data",
            "practice and communication matter",
            "demand for openings stays steady",
            "a report is not the same as a result",
          ],
        },
      ],
      notes: [
        {
          title: "Effect timelines",
          kind: "tip",
          text: "Analytics speeds up the right decisions. Search visibility after fixes still needs its own runway — often months of systematic work after promotion starts.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "google-analytics",
    "metrika-tseli",
    "analitika-kontent-marketinga",
    "otkazy-sayta",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for veb-analitik — same structure as RU JSON / EN. */
export const vebAnalitikEs: BlogPost = {
  slug: "veb-analitik",
  title: "Web analyst: rol, skills y camino de carrera",
  date: "2019-12-04",
  category: "SEO",
  cover: "/images/blog/veb-analitik/cover-es.webp",
  excerpt:
    "Qué hace un web analyst, qué skills importan, dónde aprender, cómo suele crecer la carrera y por qué el trabajo es más que exportar un informe de Metrica.",
  lead: [
    "Un web analyst estudia cómo se mueve la gente por el sitio y los canales de pago, y lo convierte en decisiones: qué arreglar, qué testear, a dónde debe ir el presupuesto. Sacar un dashboard no es el entregable.",
    "Abajo: deberes, skills, caminos de aprendizaje, dónde se sientan los analysts, pasos de carrera y los trade-offs del rol. Las bandas salariales se mueven rápido — revisa ofertas en vivo. Aquí importa la forma del trabajo.",
  ],
  faq: [
    {
      q: "¿Un web analyst es lo mismo que un especialista SEO?",
      a: "No. El SEO se inclina a búsqueda, contenido y tech. Un analyst abarca el funnel, canales, experimentos e informes. Los skill sets se solapan, pero los trabajos no son idénticos.",
    },
    {
      q: "¿Basta Yandex Metrica?",
      a: "Basta para empezar. Luego vienen goals, segmentos, GA o pares, bases de marketing, A/B testing y explicar hallazgos a no-analysts.",
    },
    {
      q: "¿Hace falta inglés?",
      a: "El inglés técnico ayuda mucho: docs de herramientas, cursos e investigación.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Pon contadores en un proyecto de entrenamiento o personal, configura goals, desglosa fuentes y bounce, y entrega dos o tres mini-casos con recomendaciones.",
    },
    {
      q: "¿Dónde trabajan los analysts?",
      a: "In-house (sobre todo empresas más grandes), en agencias y estudios, o freelance por proyecto. Los pequeños negocios más a menudo contratan un engagement corto cuando se caen las ventas.",
    },
    {
      q: "¿El analyst es responsable de los rankings de búsqueda?",
      a: "No como un KPI de un botón. Muestran qué bloquea conversión y crecimiento; SEO, contenido e ingeniería entregan los fixes. La visibilidad orgánica sigue su propio plazo — a menudo meses de trabajo constante tras arrancar la promoción.",
    },
    {
      q: "¿Hace falta un título técnico?",
      a: "No es obligatorio. Importan más el pensamiento de sistemas y la comodidad con números. Los empleadores pesan la práctica y un portfolio de casos.",
    },
    {
      q: "¿Qué hace duro el rol?",
      a: "Briefs vagos, debates de «ya lo hicimos todo bien», reporting repetitivo y trabajo volcado fuera de analytics.",
    },
  ],
  sections: [
    {
      title: "Quién es un web analyst",
      level: 2,
      paras: [
        "Alguien que recoge e interpreta datos de visitantes y canales para mejorar resultados del sitio: calidad del tráfico, conversión, UX. El rol no es «la persona con acceso a Metrica».",
        "El output real son conclusiones claras y prioridades para marketing, producto e ingeniería: qué mediste, qué cambiaste, qué testear después.",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "datos → hipótesis → recomendaciones → validación",
            "no un informe por el informe",
            "atado a goals de negocio, no solo a conteos de sesión",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica: instalar",
          href: "/es/blog/metrika-ustanovka/",
        },
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Deberes",
      level: 2,
      paras: [
        "Elegir y cablear herramientas de datos, goals y eventos, análisis de comportamiento (bounce, caminos, formularios), auditorías de funnel, tests A/B, KPIs del sitio, informes para roles distintos, propuestas de mejora, chequeos frente a research de mercado e input a la estrategia.",
        "El mix del día a día depende de la empresa: más cerca de performance en unos sitios, más cerca de producto en otros. Traducir números al lenguaje del stakeholder sin perder precisión es parte del trabajo.",
      ],
      lists: [
        {
          intro: "Set típico de tareas:",
          items: [
            "contadores, goals, call tracking",
            "segmentos y fuentes",
            "hipótesis de UX y oferta",
            "tests A/B y medición de impacto",
            "reporting regular y ad-hoc",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Goals en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "Tasa de rechazo del sitio",
          href: "/es/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Skills y aprendizaje",
      level: 2,
      paras: [
        "Stack núcleo: Metrica y Google Analytics (o lo que use la empresa), bases de internet marketing, A/B testing, reporting, idealmente call tracking, y SEO/paid search suficiente para hablar el mismo idioma. El inglés técnico es un plus.",
        "Los caminos incluyen cursos universitarios o de escuela, webinars y trabajo hands-on. Prefiere un currículum actual con al menos la mitad de práctica. Libros y reviews de casos ayudan, pero no sustituyen tus propios proyectos before/after.",
      ],
      lists: [
        {
          intro: "Checklist de principiante:",
          items: [
            "instalar un contador y goals",
            "desglosar fuentes y landings",
            "encontrar tres problemas con evidencia",
            "proponer fixes y una forma de verificarlos",
          ],
        },
      ],
      links: [
        {
          label: "Analytics de content marketing",
          href: "/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Metrica no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Carrera y el mercado",
      level: 2,
      paras: [
        "Las empresas más grandes mantienen analysts in-house o como equipos; el pequeño negocio más a menudo contrata por proyecto. En agencias y estudios la escalera suele ser junior → middle → senior → lead → head of practice.",
        "El sueldo sigue experiencia, escala del proyecto, skills adyacentes (SEO, paid media, SQL/BI) y región. Las cifras de artículos viejos envejecen rápido — revisa ofertas actuales y rangos de mercado.",
      ],
      lists: [
        {
          intro: "Qué sube el valor de un candidato:",
          items: [
            "casos con impacto medible",
            "skills adyacentes (SEO / ads)",
            "comunicación clara con no-analysts",
            "experiencia priorizando un backlog",
          ],
        },
      ],
    },
    {
      title: "Pros y costes del rol",
      level: 2,
      paras: [
        "Ventajas: impacto de negocio visible, espacio para crecer, remote y horarios flexibles en muchos setups, un perfil sólido de rol digital, y caminos hacia producto, performance o SEO.",
        "Contras: resistencia al cambio («siempre lo hemos hecho así»), briefs difusos del cliente, fronteras de deberes borrosas y monotonía en algo de reporting. Un brief claro y KPIs acordados cortan mucha fricción.",
      ],
      lists: [
        {
          intro: "Conclusión:",
          items: [
            "el rol va de decisiones desde datos",
            "importan la práctica y la comunicación",
            "la demanda de openings se mantiene",
            "un informe no es lo mismo que un resultado",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos del efecto",
          kind: "tip",
          text: "La analytics acelera las decisiones correctas. La visibilidad en búsqueda tras los fixes sigue necesitando su propia pista — a menudo meses de trabajo sistemático tras arrancar la promoción.",
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "google-analytics",
    "metrika-tseli",
    "analitika-kontent-marketinga",
    "otkazy-sayta",
    "optimizatsiya-konversii",
  ],
};

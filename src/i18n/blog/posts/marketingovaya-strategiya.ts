import type { BlogPost } from "../../../data/blog";

/** EN overlay for marketingovaya-strategiya — same structure as RU JSON. */
export const marketingovayaStrategiyaEn: BlogPost = {
  slug: "marketingovaya-strategiya",
  title: "How to plan and build a marketing strategy",
  date: "2019-10-07",
  category: "Digital marketing",
  cover: "/images/blog/marketingovaya-strategiya/cover-en.webp",
  excerpt:
    "How to assemble a marketing strategy: goal and KPIs, audience, channels, content, and a schedule — without chaotic gut-feel campaigns and without swapping strategy for a single SEO plan.",
  lead: [
    "Without a plan, marketing often slides into situational posts and one-off promos. A strategy locks the goal, stages, channels, and ways to measure — so the team moves in sync, not “wherever yesterday worked.”",
    "Below: the frame — why you need a plan, how to set a measurable goal, know the audience, pick platforms, tie content to the brand, and put deadlines on the calendar. ROMI and site SEO strategy are related topics.",
  ],
  faq: [
    {
      q: "Are strategy and a marketing plan the same?",
      a: "In practice they often merge: strategy sets course and priorities; the plan sets dates, tasks, and owners. Having a goal and linked actions matters more than arguing over the name.",
    },
    {
      q: "How is this different from an SEO strategy?",
      a: "An SEO strategy is about search and the site. Marketing is broader: brand, content, ads, email, offline — with shared KPIs.",
    },
    {
      q: "How many goals should I set at once?",
      a: "One main goal for the campaign period plus 2–3 intermediate ones. “Awareness + sales + PR + survey” with no priority dilutes the budget.",
    },
    {
      q: "Do I need SMART goals?",
      a: "Yes: specifics, a metric, a deadline, realism. “Become better known” without a number can’t be measured.",
    },
    {
      q: "Where should I start if there are many channels?",
      a: "With audience and goal, then 1–2 strong channels you already know. Scale after the first measurable results.",
    },
    {
      q: "How do I know the plan worked?",
      a: "Check KPIs set before launch: leads, sales, mentions, CR. Money via ROMI; the customer path via assisted conversions when the cycle is long.",
    },
  ],
  sections: [
    {
      title: "Why you need a marketing plan",
      level: 2,
      paras: [
        "A plan turns “we want growth” into a chain of actions with KPIs. Campaigns and touches across platforms sound like one brand proposition — awareness builds faster that way (often several touches before a decision).",
        "Chaos costs more: without a plan it’s harder to foresee slips, align creative, and not burn budget on unrelated activities.",
      ],
      links: [
        {
          label: "Seven touches",
          href: "/en/blog/sem-kasaniy/",
        },
        {
          label: "Brand promotion",
          href: "/en/blog/prodvizhenie-brenda/",
        },
      ],
    },
    {
      title: "Goal and measurable result",
      level: 2,
      paras: [
        "First state the end result: product launch, awareness, audience growth, an event, collecting reviews. Then break it into intermediate tasks and metrics: pre-orders, deals, mentions, CR after click, profit.",
        "The wording must be specific and dated: not “raise awareness,” but “grow metric X by date.” Realism matters: if you had no email list or press contacts, don’t bake in thousands of pre-sales and dozens of media pieces at once.",
      ],
      lists: [
        {
          intro: "Examples of goal → metric links:",
          items: [
            "product launch — pre-orders and deals",
            "awareness — mentions and brand demand",
            "event — registrations and attendance",
            "reviews — number of honest ratings on maps/site",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Before target numbers, lock the baseline: current conversions, budget, team strengths, what you outsource. Otherwise KPIs float free of resources.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Audience and channels",
      level: 2,
      paras: [
        "Brilliant content fails if the right audience never sees it. Research segment interests and barriers — companies that do this systematically hit sales goals more often.",
        "Pick platforms where the audience actually is and where you have ways to talk. Lean on channels you already know: SMM, paid search, SEO, email. Beginners should deepen a strong direction rather than spray across every network at once.",
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Content, landing, and brand",
      level: 2,
      paras: [
        "Content and design should read as your brand: tone, palette, templates. Each campaign strengthens one story, not a pile of random creatives. Think through format (text, video, image), mailings, and — mandatory — a destination page for the action.",
        "Strategy sets the job; the landing closes the action: lead, purchase, registration. If the ad offer and the page diverge, the plan breaks at conversion.",
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Schedule and measurement",
      level: 2,
      paras: [
        "Tie macro and micro goals to dates: team planning, content production, promotion period, measurement points. Decide what you change if the plan slips — or the “strategy” stays a file in the cloud.",
        "Judge effectiveness by pre-chosen KPIs and, where needed, in money (ROMI). For a long deal cycle, account for intermediate channels’ contribution — not only last click.",
      ],
      lists: [
        {
          intro: "Blocks on the calendar:",
          items: [
            "planning and approvals",
            "creative production",
            "campaign launch and support",
            "measurement and correction",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "A marketing strategy is a goal, audience, channels, coherent content, and a calendar with KPIs. Build the frame before creatives: it’s easier to scale what works and cut what doesn’t in time.",
  ],
  related: [
    "prodvizhenie-brenda",
    "roi-marketinga",
    "metriki-reklamy",
    "sem-kasaniy",
    "tselevaya-auditoriya",
    "strategiya-prodvizheniya",
  ],
};

/** ES overlay for marketingovaya-strategiya — same structure as RU JSON / EN. */
export const marketingovayaStrategiyaEs: BlogPost = {
  slug: "marketingovaya-strategiya",
  title: "Cómo planificar y construir una estrategia de marketing",
  date: "2019-10-07",
  category: "Digital marketing",
  cover: "/images/blog/marketingovaya-strategiya/cover.webp",
  excerpt:
    "Cómo armar una estrategia de marketing: objetivo y KPIs, audiencia, canales, contenido y calendario — sin campañas caóticas a ojo y sin sustituir la estrategia por un solo plan SEO.",
  lead: [
    "Sin un plan, el marketing suele derivar a posts situacionales y promos sueltas. Una estrategia fija el objetivo, las etapas, los canales y cómo medir — para que el equipo avance al unísono, no «donde ayer funcionó».",
    "Abajo: el marco — por qué hace falta un plan, cómo fijar un objetivo medible, conocer la audiencia, elegir plataformas, ligar el contenido a la marca y poner plazos en el calendario. ROMI y la estrategia SEO del sitio son temas relacionados.",
  ],
  faq: [
    {
      q: "¿Estrategia y plan de marketing son lo mismo?",
      a: "En la práctica a menudo se fusionan: la estrategia marca rumbo y prioridades; el plan fija fechas, tareas y responsables. Tener un objetivo y acciones ligadas importa más que pelear por el nombre.",
    },
    {
      q: "¿En qué se diferencia de una estrategia SEO?",
      a: "Una estrategia SEO va de búsqueda y del sitio. El marketing es más amplio: marca, contenido, ads, email, offline — con KPIs compartidos.",
    },
    {
      q: "¿Cuántos objetivos fijo a la vez?",
      a: "Un objetivo principal para el periodo de campaña más 2–3 intermedios. «Awareness + ventas + PR + encuesta» sin prioridad diluye el presupuesto.",
    },
    {
      q: "¿Hacen falta objetivos SMART?",
      a: "Sí: concreción, métrica, plazo, realismo. «Ser más conocidos» sin un número no se puede medir.",
    },
    {
      q: "¿Por dónde empiezo si hay muchos canales?",
      a: "Por audiencia y objetivo, luego 1–2 canales fuertes que ya conoces. Escala tras los primeros resultados medibles.",
    },
    {
      q: "¿Cómo sé que el plan funcionó?",
      a: "Revisa los KPIs fijados antes del lanzamiento: leads, ventas, menciones, CR. El dinero vía ROMI; el camino del cliente vía conversiones asistidas cuando el ciclo es largo.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta un plan de marketing",
      level: 2,
      paras: [
        "Un plan convierte «queremos crecimiento» en una cadena de acciones con KPIs. Campañas y toques en plataformas suenan como una sola propuesta de marca — así el awareness crece más rápido (a menudo varios toques antes de la decisión).",
        "El caos cuesta más: sin plan es más difícil prever deslizamientos, alinear creative y no quemar presupuesto en actividades sin relación.",
      ],
      links: [
        {
          label: "Siete toques",
          href: "/blog/sem-kasaniy/",
        },
        {
          label: "Promoción de marca",
          href: "/blog/prodvizhenie-brenda/",
        },
      ],
    },
    {
      title: "Objetivo y resultado medible",
      level: 2,
      paras: [
        "Primero formula el resultado final: lanzamiento de producto, awareness, crecimiento de audiencia, un evento, recoger reseñas. Luego pártelo en tareas intermedias y métricas: pre-pedidos, tratos, menciones, CR tras el clic, beneficio.",
        "La redacción debe ser concreta y con fecha: no «subir awareness», sino «crecer la métrica X para la fecha». El realismo importa: si no tenías lista de email ni contactos de prensa, no metas miles de preventas y docenas de piezas en medios de golpe.",
      ],
      lists: [
        {
          intro: "Ejemplos de enlaces objetivo → métrica:",
          items: [
            "lanzamiento de producto — pre-pedidos y tratos",
            "awareness — menciones y demanda de marca",
            "evento — registros y asistencia",
            "reseñas — número de valoraciones honestas en mapas/sitio",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "Antes de los números objetivo, fija la línea base: conversiones actuales, presupuesto, fortalezas del equipo, qué externalizas. Si no, los KPIs flotan sin anclarse a recursos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Audiencia y canales",
      level: 2,
      paras: [
        "El contenido brillante falla si la audiencia correcta nunca lo ve. Investiga intereses y barreras del segmento — las empresas que lo hacen de forma sistemática alcanzan objetivos de ventas con más frecuencia.",
        "Elige plataformas donde la audiencia está de verdad y donde tienes vías para hablar. Apóyate en canales que ya conoces: SMM, paid search, SEO, email. Quien empieza debería profundizar una dirección fuerte en lugar de rociar todas las redes a la vez.",
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Contenido, landing y marca",
      level: 2,
      paras: [
        "Contenido y diseño deben leerse como tu marca: tono, paleta, plantillas. Cada campaña refuerza una historia, no un montón de creatives al azar. Piensa el formato (texto, vídeo, imagen), mailings y — obligatorio — una página de destino para la acción.",
        "La estrategia fija el job; el landing cierra la acción: lead, compra, registro. Si la oferta del anuncio y la página divergen, el plan se rompe en la conversión.",
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Calendario y medición",
      level: 2,
      paras: [
        "Liga macro y micro objetivos a fechas: planning del equipo, producción de contenido, periodo de promoción, puntos de medición. Decide qué cambias si el plan se desliza — o la «estrategia» se queda en un archivo en la nube.",
        "Juzga la efectividad por KPIs elegidos de antemano y, donde haga falta, en dinero (ROMI). En un ciclo de trato largo, cuenta la contribución de canales intermedios — no solo el last click.",
      ],
      lists: [
        {
          intro: "Bloques en el calendario:",
          items: [
            "planning y aprobaciones",
            "producción de creative",
            "lanzamiento y soporte de campaña",
            "medición y corrección",
          ],
        },
      ],
      links: [
        {
          label: "ROI y ROMI",
          href: "/es/blog/roi-marketinga/",
        },
        {
          label: "Métricas de ads",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "Una estrategia de marketing es un objetivo, audiencia, canales, contenido coherente y un calendario con KPIs. Arma el marco antes de los creatives: es más fácil escalar lo que funciona y cortar a tiempo lo que no.",
  ],
  related: [
    "prodvizhenie-brenda",
    "roi-marketinga",
    "metriki-reklamy",
    "sem-kasaniy",
    "tselevaya-auditoriya",
    "strategiya-prodvizheniya",
  ],
};

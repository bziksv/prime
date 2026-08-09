import type { BlogPost } from "../../../data/blog";

/** EN overlay for smm-strategiya — same structure as RU JSON. */
export const smmStrategiyaEn: BlogPost = {
  slug: "smm-strategiya",
  title:
    "SMM strategy: goals, priorities, and how not to sprawl into random posts",
  date: "2018-06-01",
  category: "SMM",
  cover: "/images/blog/smm-strategiya/cover-en.webp",
  excerpt:
    "How to build an SMM strategy: tie social goals to the business, break them into tasks, prioritize, assign owners and deadlines, and adjust by metrics — without a “golden algorithm.”",
  lead: [
    "An SMM strategy is an agreement on why the brand is on social and what to do first. Without it the feed turns into checkbox posts, and budget goes to pretty but useless touches.",
    "Below: a five-step frame — goals → tasks → priorities → owners and deadlines → review. The broader marketing plan sits above this; the content calendar is the next layer after strategy.",
  ],
  faq: [
    {
      q: "How is this different from a marketing strategy?",
      a: "Marketing sets the course across channels. An SMM strategy is a slice: which platforms, which goals in feed/ads/service, and how that plugs into business KPIs.",
    },
    {
      q: "Do I need a separate strategy per network?",
      a: "One shared frame; formats and tone adapt per platform. Don’t copy one post to every channel without adaptation.",
    },
    {
      q: "How many goals should I set?",
      a: "One primary for the period (leads, nurture, HR, service) and two or three supporting ones. “Everything at once” spreads resources thin.",
    },
    {
      q: "Does strategy replace a content plan?",
      a: "No. Strategy answers “why and what matters more”; the plan answers “what ships when.”",
    },
    {
      q: "Is there a universal SMM algorithm?",
      a: "No. There’s a frame and tests. Other people’s “secrets of the year” age faster than you can ship them.",
    },
  ],
  sections: [
    {
      title: "Tie SMM goals to the business",
      level: 2,
      paras: [
        "Write one to three corporate goals for the period (new market, product launch, repeat purchases, hiring). For each ask: how can social really help — traffic, trust, leads, support, partnerships?",
        "If “being on social” doesn’t hit any business goal, you’re running a channel for its own sake. Then either narrow the channel or revise expectations.",
        "Typical SMM goals: awareness, site traffic, leads/sales, community, audience research. Pick a primary — subordinate the rest.",
      ],
      links: [
        {
          label: "Social for business",
          href: "/en/blog/sotsseti-dlya-biznesa/",
        },
        {
          label: "Marketing strategy",
          href: "/en/blog/marketingovaya-strategiya/",
        },
      ],
    },
    {
      title: "Break goals into concrete tasks",
      level: 2,
      paras: [
        "“Enter a new market via influencers” without steps is a slogan. Translate into actions: candidate list, selection criteria, collaboration offer, collab frequency, reporting format.",
        "Tasks must be checkable: not “raise engagement,” but “run four Stories polls and process replies by Friday” or “get 30 qualified dialogues a month.”",
        "Conditions change — change tactics; don’t hide failure behind pretty wording.",
      ],
      lists: [
        {
          intro: "Mini task template:",
          items: [
            "result (what we get)",
            "action (what we do)",
            "platform and format",
            "success metric",
            "deadline and owner",
          ],
        },
      ],
    },
    {
      title: "Priorities: value versus effort",
      level: 2,
      paras: [
        "Budget and time are limited. Score each initiative by business value and implementation difficulty. First — high value at moderate effort (“low-hanging fruit”).",
        "Park or cut expensive ideas with doubtful return down to a pilot. Don’t hunt a “golden algorithm” — test hypotheses with a budget and time cap.",
        "A value/effort matrix is a product-planning tool; in SMM it equally sobers “let’s also do Reels, a podcast, and a daily Live.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Doing everything at once: content + ads + creators + contests with no ranking. Then no line reaches a measurable result.",
        },
      ],
    },
    {
      title: "Owners and deadlines",
      level: 2,
      paras: [
        "Every task needs a name and a deadline. “The SMM team” with no owner means nobody. For collabs, lock who writes, who approves, who publishes, and who replies in comments.",
        "Tie deadlines to campaign calendars and seasonality — not an abstract “this quarter.” A short sprint with a retro beats a year plan with no control points.",
        "If you use a contractor — the same KPIs and reporting rhythm go in the contract and brief as inside the team.",
      ],
      links: [
        {
          label: "Hiring SMM",
          href: "/en/blog/naym-smm/",
        },
        {
          label: "SMM mistakes",
          href: "/en/blog/oshibki-smm/",
        },
      ],
    },
    {
      title: "Review and adjust",
      level: 2,
      paras: [
        "Strategy is a route, not dogma. Every two to four weeks check: are we toward the goal, which tasks signaled, what to shut off.",
        "Watch metrics tied to the chosen goal: leads, dialogues, site clicks, saves, reply share — not only likes. Compare periods honestly: creative changes and seasonality beat “algorithm magic.”",
        "Lock takeaways in a short retro and refresh priorities. Fit the content plan to the new hypothesis — not the other way around.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Engagement on social",
          href: "/en/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "SMM with no link to a business goal is activity for the report.",
        "Priorities and owners beat a long idea wishlist.",
        "Adjust by your numbers, not someone else’s trends of the year.",
      ],
    },
  ],
  closing: [
    "Write one business goal for the month, three SMM tasks under it with owners, and in two weeks shut off everything that doesn’t move the metric — strategy appears faster than a “40-slide deck.”",
  ],
  related: [
    "sotsseti-dlya-biznesa",
    "oshibki-smm",
    "marketingovaya-strategiya",
    "kontent-plan",
    "naym-smm",
    "vovlechennost-socseti",
  ],
};

/** ES overlay for smm-strategiya — same structure as RU JSON. */
export const smmStrategiyaEs: BlogPost = {
  slug: "smm-strategiya",
  title:
    "Estrategia SMM: objetivos, prioridades y cómo no dispersarse en posts al azar",
  date: "2018-06-01",
  category: "SMM",
  cover: "/images/blog/smm-strategiya/cover.webp",
  excerpt:
    "Cómo armar una estrategia SMM: atar los objetivos de redes al negocio, partirlos en tareas, priorizar, asignar owners y plazos, y ajustar por métricas — sin un «algoritmo de oro».",
  lead: [
    "Una estrategia SMM es un acuerdo sobre por qué la marca está en redes y qué hacer primero. Sin ella el feed se vuelve posts por obligación, y el presupuesto va a toques bonitos pero inútiles.",
    "Abajo: un marco de cinco pasos — objetivos → tareas → prioridades → owners y plazos → review. El plan de marketing más amplio va por encima; el calendario de contenido es la capa siguiente tras la estrategia.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de una estrategia de marketing?",
      a: "El marketing marca el rumbo entre canales. Una estrategia SMM es un corte: qué plataformas, qué objetivos en feed/ads/servicio y cómo encaja en los KPIs del negocio.",
    },
    {
      q: "¿Hace falta una estrategia aparte por red?",
      a: "Un marco compartido; formatos y tono se adaptan por plataforma. No copies un post a todos los canales sin adaptar.",
    },
    {
      q: "¿Cuántos objetivos fijar?",
      a: "Uno principal para el periodo (leads, nurture, HR, servicio) y dos o tres de apoyo. «Todo a la vez» estira los recursos.",
    },
    {
      q: "¿La estrategia sustituye al plan de contenido?",
      a: "No. La estrategia responde «por qué y qué importa más»; el plan responde «qué se publica cuándo».",
    },
    {
      q: "¿Hay un algoritmo SMM universal?",
      a: "No. Hay un marco y tests. Los «secretos del año» ajenos envejecen más rápido de lo que puedes publicarlos.",
    },
  ],
  sections: [
    {
      title: "Ata los objetivos SMM al negocio",
      level: 2,
      paras: [
        "Escribe de uno a tres objetivos corporativos del periodo (nuevo mercado, lanzamiento de producto, compras repetidas, hiring). Por cada uno pregunta: ¿cómo pueden ayudar de verdad las redes — tráfico, confianza, leads, soporte, partnerships?",
        "Si «estar en redes» no toca ningún objetivo de negocio, estás llevando un canal por el canal. Entonces estrecha el canal o revisa las expectativas.",
        "Objetivos SMM típicos: awareness, tráfico al sitio, leads/ventas, comunidad, research de audiencia. Elige uno principal — subordina el resto.",
      ],
      links: [
        {
          label: "Redes para negocio",
          href: "/es/blog/sotsseti-dlya-biznesa/",
        },
        {
          label: "Estrategia de marketing",
          href: "/es/blog/marketingovaya-strategiya/",
        },
      ],
    },
    {
      title: "Parte los objetivos en tareas concretas",
      level: 2,
      paras: [
        "«Entrar a un mercado nuevo vía influencers» sin pasos es un eslogan. Traduce a acciones: lista de candidatos, criterios de selección, oferta de colaboración, frecuencia de collabs, formato de reporting.",
        "Las tareas deben ser chequeables: no «subir engagement», sino «correr cuatro encuestas en Stories y procesar replies para el viernes» o «conseguir 30 diálogos cualificados al mes».",
        "Las condiciones cambian — cambia la táctica; no escondas el fallo detrás de un wording bonito.",
      ],
      lists: [
        {
          intro: "Mini plantilla de tarea:",
          items: [
            "resultado (qué obtenemos)",
            "acción (qué hacemos)",
            "plataforma y formato",
            "métrica de éxito",
            "plazo y owner",
          ],
        },
      ],
    },
    {
      title: "Prioridades: valor frente a esfuerzo",
      level: 2,
      paras: [
        "Presupuesto y tiempo son limitados. Puntúa cada iniciativa por valor de negocio y dificultad de implementación. Primero — alto valor con esfuerzo moderado («fruta baja»).",
        "Aparca o corta ideas caras con retorno dudoso hasta un piloto. No persigas un «algoritmo de oro» — prueba hipótesis con tope de presupuesto y tiempo.",
        "Una matriz valor/esfuerzo es una tool de product planning; en SMM también sobria el «hagamos también Reels, un podcast y un Live diario».",
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Hacerlo todo a la vez: contenido + ads + creadores + concursos sin ranking. Entonces ninguna línea llega a un resultado medible.",
        },
      ],
    },
    {
      title: "Owners y plazos",
      level: 2,
      paras: [
        "Cada tarea necesita un nombre y un plazo. «El equipo SMM» sin owner significa nadie. En collabs, fija quién escribe, quién aprueba, quién publica y quién responde en comentarios.",
        "Ata los plazos a calendarios de campaña y estacionalidad — no a un «este trimestre» abstracto. Un sprint corto con retro gana a un plan anual sin puntos de control.",
        "Si usas un contractor — los mismos KPIs y ritmo de reporting van al contrato y al brief como dentro del equipo.",
      ],
      links: [
        {
          label: "Contratar SMM",
          href: "/es/blog/naym-smm/",
        },
        {
          label: "Errores de SMM",
          href: "/es/blog/oshibki-smm/",
        },
      ],
    },
    {
      title: "Review y ajuste",
      level: 2,
      paras: [
        "La estrategia es una ruta, no dogma. Cada dos a cuatro semanas chequea: ¿vamos hacia el objetivo, qué tareas señalaron, qué apagar?",
        "Mira métricas atadas al objetivo elegido: leads, diálogos, clics al sitio, saves, share de replies — no solo likes. Compara periodos con honestidad: cambios creativos y estacionalidad ganan a la «magia del algoritmo».",
        "Fija takeaways en una retro corta y refresca prioridades. Encaja el plan de contenido a la nueva hipótesis — no al revés.",
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
        {
          label: "Engagement en redes",
          href: "/es/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "SMM sin vínculo a un objetivo de negocio es actividad para el informe.",
        "Prioridades y owners ganan a una wishlist larga de ideas.",
        "Ajusta con tus números, no con las tendencias del año de otro.",
      ],
    },
  ],
  closing: [
    "Escribe un objetivo de negocio para el mes, tres tareas SMM debajo con owners, y en dos semanas apaga todo lo que no mueva la métrica — la estrategia aparece más rápido que un «deck de 40 slides».",
  ],
  related: [
    "sotsseti-dlya-biznesa",
    "oshibki-smm",
    "marketingovaya-strategiya",
    "kontent-plan",
    "naym-smm",
    "vovlechennost-socseti",
  ],
};

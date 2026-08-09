import type { BlogPost } from "../../../data/blog";

/** EN overlay for udalennaya-rabota — same structure as RU JSON. */
export const udalennayaRabotaEn: BlogPost = {
  slug: "udalennaya-rabota",
  title: "Remote work for employees: how to organize it without chaos",
  date: "2019-12-09",
  category: "Digital marketing",
  cover: "/images/blog/udalennaya-rabota/cover-en.webp",
  excerpt:
    "How to run a remote team: hiring outside the office, managing by outcomes, communication and task tools, motivation and team feeling — without total surveillance.",
  lead: [
    "Remote work stopped being a backup for people who didn’t get an office seat. For many roles the result doesn’t depend on a desk in an open space: you need clear tasks, communication, and agreements on deadlines.",
    "Below: why companies use a distributed model, how to manage without micromanagement, which classes of tools hold the process together, and how not to lose team feeling. Share-of-remote stats by year float; principles of organization matter more.",
  ],
  faq: [
    {
      q: "Is remote always cheaper than an office?",
      a: "Often you save on rent and location-based salaries. But you need strong processes, onboarding, and sometimes hardware or software — otherwise “cheap” is eaten by chaos.",
    },
    {
      q: "How do you manage people you can’t see?",
      a: "By outcomes and transparent statuses: plan, metrics, regular reports. Watching minutes in a chair demotivates and poorly predicts value.",
    },
    {
      q: "Do you need the whole staff in one city?",
      a: "Not for every function. Searching across the country or a shared-language market widens the pool of strong candidates.",
    },
    {
      q: "Which roles fit remote worse?",
      a: "Roles that need constant physical access to equipment, a warehouse, or a sales floor. Office digital roles usually adapt better.",
    },
    {
      q: "Are daily sync calls required?",
      a: "Not always. Async statuses plus short syncs on blockers often suffice. Extra meetings kill focus.",
    },
    {
      q: "How do you train remote newcomers?",
      a: "Knowledge base, recorded guides, a mentor, regular 1:1s. Video and messengers are a channel — not a substitute for onboarding structure.",
    },
  ],
  sections: [
    {
      title: "Why companies go remote",
      level: 2,
      paras: [
        "A wider hiring funnel: not only “an hour to the office,” but strong specialists in regions and abroad when language is shared. Some roles never needed a capital open space.",
        "Saving on square meters helps, but the main win is access to people and flexibility. The myth that remote means unserious is outdated: durable remote usually demands above-average discipline.",
      ],
      lists: [
        {
          intro: "Who often likes the model:",
          items: [
            "people who stay in their city or with family",
            "people who combine work with moves",
            "companies with a digital product and clear KPIs",
          ],
        },
      ],
    },
    {
      title: "Manage by outcomes, not by “sitting”",
      level: 2,
      paras: [
        "In an office it’s easy to mistake presence for value. At a distance that fails — and that’s good: you have to agree on numbers and dates.",
        "Everyone needs a clear performance metric, a work plan, and a regular status. The manager sees blockers and progress; which chair someone sits in is secondary.",
      ],
      lists: [
        {
          intro: "Minimum transparency:",
          items: [
            "goals and “done” criteria",
            "a board or task list with owners",
            "a short status rhythm",
            "risk escalation without drama",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Total screen monitoring and default distrust break loyalty. If there’s no result — decide on facts and process, not by turning up surveillance.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Tools: classes, not brand cults",
      level: 2,
      paras: [
        "You need four layers: tasks (tracker), documents (co-editing), communication (chat + video), knowledge base (guides and decisions). Specific products change — what matters is that the whole team lives in one loop.",
        "Office and remote staff should see the same tasks and rules. Otherwise “remote” becomes second-class work with side deals in DMs.",
      ],
      lists: [
        {
          intro: "Basic process stack:",
          items: [
            "task and deadline tracker",
            "shared docs and templates",
            "video meetings that earn their time",
            "wiki / instruction base",
            "shared escalation channels",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Project manager",
          href: "/en/blog/project-manager/",
        },
      ],
    },
    {
      title: "Motivation and team feeling",
      level: 2,
      paras: [
        "A remote person can more easily feel like a contractor outside the culture. Shared rituals help: result demos, visible wins, onboarding, occasional offline meetups if budget allows.",
        "Team-building for its own sake without clear work won’t save you. Process and respect for outcomes first — social formats second.",
      ],
    },
    {
      title: "Hiring and expectations",
      level: 2,
      paras: [
        "An attractive remote role gets many applications: competition is higher, but you can pick stronger. Honestly describe time zones, sync windows, tools, and KPIs.",
        "Not everyone works well without external control — it’s fair to filter that on probation by results, not by “was online 9 to 6.”",
      ],
      lists: [
        {
          intro: "Lock in the offer:",
          items: [
            "overlap hours with the team",
            "how results are delivered",
            "which calls are mandatory",
            "how the probation period works",
          ],
        },
      ],
    },
  ],
  closing: [
    "Remote work works when the company manages outcomes, not presence. Build one loop for tasks and communication, hire by skill without a geo filter — and don’t replace trust with total surveillance.",
  ],
  related: [
    "project-manager",
    "dashboard",
    "menedzher-smm",
    "veb-analitik",
    "tz-na-sayt",
    "didzhital-agentstvo",
  ],
};

/** ES overlay for udalennaya-rabota — same structure as RU JSON / EN. */
export const udalennayaRabotaEs: BlogPost = {
  slug: "udalennaya-rabota",
  title: "Trabajo remoto para empleados: cómo organizarlo sin caos",
  date: "2019-12-09",
  category: "Digital marketing",
  cover: "/images/blog/udalennaya-rabota/cover.webp",
  excerpt:
    "Cómo llevar un equipo remoto: hiring fuera de la oficina, gestión por outcomes, tools de comunicación y tareas, motivación y feeling de equipo — sin vigilancia total.",
  lead: [
    "El trabajo remoto dejó de ser un backup para quien no conseguía plaza en la oficina. Para muchos roles el resultado no depende de un escritorio en un open space: hacen falta tareas claras, comunicación y acuerdos de plazos.",
    "Abajo: por qué las empresas usan un modelo distribuido, cómo gestionar sin micromanagement, qué clases de tools sostienen el proceso y cómo no perder el feeling de equipo. Las stats de cuota remota por año flotan; importan más los principios de organización.",
  ],
  faq: [
    {
      q: "¿Lo remoto siempre es más barato que la oficina?",
      a: "A menudo ahorras en alquiler y sueldos ligados a la ubicación. Pero hacen falta procesos fuertes, onboarding y a veces hardware o software — si no, lo «barato» se lo come el caos.",
    },
    {
      q: "¿Cómo gestionas a gente que no ves?",
      a: "Por outcomes y statuses transparentes: plan, métricas, reportes regulares. Vigilar minutos en la silla desmotiva y predice mal el valor.",
    },
    {
      q: "¿Hace falta todo el staff en una ciudad?",
      a: "No para toda función. Buscar en el país o en un mercado de lengua compartida amplía el pool de candidatos fuertes.",
    },
    {
      q: "¿Qué roles encajan peor con lo remoto?",
      a: "Roles que necesitan acceso físico constante a equipos, almacén o piso de ventas. Los roles digitales de oficina suelen adaptarse mejor.",
    },
    {
      q: "¿Son obligatorias las sync calls diarias?",
      a: "No siempre. A menudo bastan statuses async más syncs cortos sobre blockers. Las meetings de más matan el foco.",
    },
    {
      q: "¿Cómo formas a newcomers remotos?",
      a: "Base de conocimiento, guías grabadas, un mentor, 1:1 regulares. Vídeo y mensajeros son un canal — no un sustituto de la estructura de onboarding.",
    },
  ],
  sections: [
    {
      title: "Por qué las empresas van a remoto",
      level: 2,
      paras: [
        "Un funnel de hiring más amplio: no solo «una hora a la oficina», sino especialistas fuertes en regiones y en el extranjero cuando hay lengua compartida. Algunos roles nunca necesitaron un open space capitalino.",
        "Ahorrar metros cuadrados ayuda, pero la ganancia principal es acceso a gente y flexibilidad. El mito de que remoto = poco serio está obsoleto: un remoto durable suele pedir disciplina por encima de la media.",
      ],
      lists: [
        {
          intro: "A quién suele gustarle el modelo:",
          items: [
            "gente que se queda en su ciudad o con la familia",
            "gente que combina trabajo con mudanzas",
            "empresas con producto digital y KPIs claros",
          ],
        },
      ],
    },
    {
      title: "Gestiona por outcomes, no por «estar sentado»",
      level: 2,
      paras: [
        "En una oficina es fácil confundir presencia con valor. A distancia eso falla — y está bien: hay que acordar números y fechas.",
        "Cada uno necesita una métrica de performance clara, un plan de trabajo y un status regular. El manager ve blockers y progreso; en qué silla se sienta alguien es secundario.",
      ],
      lists: [
        {
          intro: "Mínimo de transparencia:",
          items: [
            "objetivos y criterios de «hecho»",
            "un board o lista de tareas con owners",
            "un ritmo corto de status",
            "escalado de riesgos sin drama",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "El monitoring total de pantalla y la desconfianza por defecto rompen la lealtad. Si no hay resultado — decide con hechos y proceso, no subiendo la vigilancia.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Tools: clases, no cultos de marca",
      level: 2,
      paras: [
        "Hacen falta cuatro capas: tareas (tracker), documentos (co-edición), comunicación (chat + vídeo), base de conocimiento (guías y decisiones). Los productos concretos cambian — lo que importa es que todo el equipo viva en un solo loop.",
        "Staff de oficina y remoto deberían ver las mismas tareas y reglas. Si no, lo «remoto» se vuelve trabajo de segunda con tratos laterales en DMs.",
      ],
      lists: [
        {
          intro: "Stack básico de proceso:",
          items: [
            "tracker de tareas y plazos",
            "docs compartidos y plantillas",
            "video meetings que se ganan su tiempo",
            "wiki / base de instrucciones",
            "canales compartidos de escalado",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Project manager",
          href: "/es/blog/project-manager/",
        },
      ],
    },
    {
      title: "Motivación y feeling de equipo",
      level: 2,
      paras: [
        "Una persona remota puede sentirse más fácil como contractor fuera de la cultura. Ayudan rituales compartidos: demos de resultado, wins visibles, onboarding, meetups offline ocasionales si el presupuesto lo permite.",
        "El team-building por sí mismo sin trabajo claro no te salva. Primero proceso y respeto por los outcomes — formatos sociales después.",
      ],
    },
    {
      title: "Hiring y expectativas",
      level: 2,
      paras: [
        "Un rol remoto atractivo recibe muchas applications: la competencia es mayor, pero puedes elegir más fuerte. Describe con honestidad zonas horarias, ventanas de sync, tools y KPIs.",
        "No todo el mundo trabaja bien sin control externo — es justo filtrar eso en probation por resultados, no por «estuvo online de 9 a 6».",
      ],
      lists: [
        {
          intro: "Fija en la oferta:",
          items: [
            "horas de overlap con el equipo",
            "cómo se entregan los resultados",
            "qué calls son obligatorias",
            "cómo funciona el periodo de probation",
          ],
        },
      ],
    },
  ],
  closing: [
    "El trabajo remoto funciona cuando la empresa gestiona outcomes, no presencia. Arma un solo loop para tareas y comunicación, contrata por skill sin filtro geo — y no sustituyas la confianza por vigilancia total.",
  ],
  related: [
    "project-manager",
    "dashboard",
    "menedzher-smm",
    "veb-analitik",
    "tz-na-sayt",
    "didzhital-agentstvo",
  ],
};

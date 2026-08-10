import type { BlogPost } from "../../../data/blog";

/** EN overlay for korporativnoe-obuchenie — same structure as RU JSON. */
export const korporativnoeObuchenieEn: BlogPost = {
  slug: "korporativnoe-obuchenie",
  title: "Corporate training and motivation: system, goals, expert",
  date: "2019-08-16",
  category: "Digital marketing",
  cover: "/images/blog/korporativnoe-obuchenie/cover-en.webp",
  excerpt:
    "Why employees don’t learn “on their own,” how to build a development system, set a goal and the expert’s role — and how online format differs from the motivation to learn.",
  lead: [
    "Corporate training helps both sides: the employee grows in the craft, the business gets stronger people and less dependence on external hiring. But an announcement “from Monday everyone studies” with no system almost never works.",
    "Below: barriers to learning alone and principles that work — a plan, a measurable goal, an expert, an outside perspective, events. How to run an online format is in a separate article; this piece is about motivation and the model.",
  ],
  faq: [
    {
      q: "Why build a system if market courses exist?",
      a: "The market gives fragments of uneven difficulty. An internal plan ties skills to company roles and keeps people from drowning in material chaos.",
    },
    {
      q: "How do I motivate beyond “develop yourselves”?",
      a: "A clear link to pay, role, project, or certification. Abstract “be better in the industry” barely holds attention.",
    },
    {
      q: "Must the employee pay for the course?",
      a: "Not dogma. What matters is voluntary engagement and a “stake” — time, a project, defending a module. Co-pay sometimes helps, but “pay or leave” pressure breaks culture.",
    },
    {
      q: "Why is an expert better than a textbook?",
      a: "Currency and unpacking mistakes on real cases. Books age; a mentor answers “how it works here.”",
    },
    {
      q: "When do I need an external skill audit?",
      a: "In stagnation and overconfidence without feedback. Pick a calm fact review — not an “audit-sale” with drama and self-promo.",
    },
    {
      q: "How does this link to online training?",
      a: "Online is a delivery channel. Without a goal, plan, and practice even a perfect platform won’t hold people.",
    },
  ],
  sections: [
    {
      title: "Why people don’t learn alone",
      level: 2,
      paras: [
        "School had a plan, control, and a teacher. At work without a frame, learning becomes hunting articles at random: too simple, then too narrow — motivation burns out.",
        "Without a clear benefit people spare their time. Without progress checks it’s unclear whether the material stuck. Without an expert it’s easy to lock in outdated tricks.",
      ],
    },
    {
      title: "System and goal",
      level: 2,
      paras: [
        "Build an individual or role-based learning plan: modules, deadlines, practice. Not “read something about ads,” but “by module end can launch and review N campaigns.”",
        "State the goal in skills and prospects: role, grade, ownership area. Watch inclinations: sometimes strong growth is a track change, not “yet another course for the current job.”",
      ],
      lists: [
        {
          intro: "System minimum:",
          items: [
            "role → needed skills",
            "module plan and practice",
            "“done” criteria",
            "link to career / pay / project",
          ],
        },
      ],
    },
    {
      title: "Expert and an outside perspective",
      level: 2,
      paras: [
        "Access to a more experienced specialist speeds growth more than cramming: questions, mistake reviews, cases. The expert is an internal mentor or an external consultant with verifiable experience.",
        "Stagnation often hides behind “I’ve done this a thousand times.” A calm work audit helps: facts and recommendations — not “horror/nightmare” pressure to sell services. A normal review has no half-file of self-promo and is open to dialogue.",
      ],
      notes: [
        {
          title: "External events",
          text: "Conferences and trainings help benchmark against the market and bring ideas into the company. Plan a handoff: a short report or internal debrief after the trip.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Online employee training",
          href: "/en/blog/onlayn-obuchenie/",
        },
      ],
    },
    {
      title: "Two conditions of the model",
      level: 2,
      paras: [
        "Adults learn by choice: force without meaning gives “sat through a webinar.” Second — readiness to invest a resource: time, attention, practice on a live project. The employee’s money is one “stake” option — not the only or mandatory one.",
        "Businesses that level skill to “average” and leave people on routine without growth lose the ambitious. Systematic training cuts churn where a real development track exists.",
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
  ],
  closing: [
    "Corporate training works as a system with a goal, an expert, and voluntary engagement — not as an order to “go learn.” Format (online or in-person) is secondary; without a plan and practice the budget is wasted.",
  ],
  related: [
    "onlayn-obuchenie",
    "udalennaya-rabota",
    "marketingovaya-strategiya",
    "kontent-menedzher",
    "tochki-rosta-sayta",
    "korporativnyy-blog",
  ],
};

/** ES overlay for korporativnoe-obuchenie — same structure as RU JSON / EN. */
export const korporativnoeObuchenieEs: BlogPost = {
  slug: "korporativnoe-obuchenie",
  title: "Formación corporativa y motivación: sistema, metas, experto",
  date: "2019-08-16",
  category: "Digital marketing",
  cover: "/images/blog/korporativnoe-obuchenie/cover-es.webp",
  excerpt:
    "Por qué los empleados no aprenden «por su cuenta», cómo armar un sistema de desarrollo, fijar una meta y el rol del experto — y en qué se diferencia el formato online de la motivación para aprender.",
  lead: [
    "La formación corporativa ayuda a ambos lados: el empleado crece en el oficio, el negocio obtiene gente más fuerte y menos dependencia de contratación externa. Pero un anuncio «desde el lunes todos estudian» sin sistema casi nunca funciona.",
    "Abajo: barreras al aprendizaje en solitario y principios que funcionan — un plan, una meta medible, un experto, una mirada externa, eventos. Cómo correr un formato online está en otro artículo; esta pieza es sobre motivación y el modelo.",
  ],
  faq: [
    {
      q: "¿Por qué armar un sistema si existen cursos de mercado?",
      a: "El mercado da fragmentos de dificultad desigual. Un plan interno liga habilidades a roles de la empresa y evita que la gente se ahogue en caos de material.",
    },
    {
      q: "¿Cómo motivar más allá de «desarrollaos»?",
      a: "Un vínculo claro con sueldo, rol, proyecto o certificación. El «sé mejor en el sector» abstracto apenas sostiene la atención.",
    },
    {
      q: "¿Debe el empleado pagar el curso?",
      a: "No es dogma. Lo que importa es engagement voluntario y una «puesta» — tiempo, un proyecto, defender un módulo. El copago a veces ayuda, pero la presión «paga o te vas» rompe la cultura.",
    },
    {
      q: "¿Por qué un experto es mejor que un libro de texto?",
      a: "Actualidad y desempaquetar errores en casos reales. Los libros envejecen; un mentor responde «cómo funciona aquí».",
    },
    {
      q: "¿Cuándo hace falta una auditoría externa de skills?",
      a: "En estancamiento y exceso de confianza sin feedback. Elige una revisión calmada de hechos — no una «auditoría-venta» con drama y autopromo.",
    },
    {
      q: "¿Cómo se liga esto a la formación online?",
      a: "Online es un canal de entrega. Sin meta, plan y práctica ni la plataforma perfecta retiene a la gente.",
    },
  ],
  sections: [
    {
      title: "Por qué la gente no aprende sola",
      level: 2,
      paras: [
        "En la escuela había plan, control y un profesor. En el trabajo sin marco, aprender se vuelve cazar artículos al azar: demasiado simple, luego demasiado estrecho — la motivación se quema.",
        "Sin un beneficio claro la gente escatima su tiempo. Sin chequeos de progreso no está claro si el material pegó. Sin experto es fácil fijar trucos obsoletos.",
      ],
    },
    {
      title: "Sistema y meta",
      level: 2,
      paras: [
        "Arma un plan de aprendizaje individual o por rol: módulos, plazos, práctica. No «lee algo sobre ads», sino «al final del módulo puede lanzar y revisar N campañas».",
        "Enuncia la meta en skills y perspectivas: rol, grade, área de ownership. Mira inclinaciones: a veces el crecimiento fuerte es un cambio de track, no «otro curso más para el puesto actual».",
      ],
      lists: [
        {
          intro: "Mínimo del sistema:",
          items: [
            "rol → skills necesarios",
            "plan de módulos y práctica",
            "criterios de «hecho»",
            "vínculo con carrera / sueldo / proyecto",
          ],
        },
      ],
    },
    {
      title: "Experto y una mirada externa",
      level: 2,
      paras: [
        "El acceso a un especialista más experimentado acelera el crecimiento más que el empollar: preguntas, revisión de errores, casos. El experto es un mentor interno o un consultor externo con experiencia verificable.",
        "El estancamiento a menudo se esconde detrás de «lo he hecho mil veces». Una auditoría calmada del trabajo ayuda: hechos y recomendaciones — no presión de «horror/pesadilla» para vender servicios. Una revisión normal no tiene medio archivo de autopromo y está abierta al diálogo.",
      ],
      notes: [
        {
          title: "Eventos externos",
          text: "Conferencias y formaciones ayudan a contrastar con el mercado y traer ideas a la empresa. Planea un handoff: un informe corto o debrief interno tras el viaje.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Formación online de empleados",
          href: "/es/blog/onlayn-obuchenie/",
        },
      ],
    },
    {
      title: "Dos condiciones del modelo",
      level: 2,
      paras: [
        "Los adultos aprenden por elección: forzar sin sentido da «aguanté un webinar». Segunda — disposición a invertir un recurso: tiempo, atención, práctica en un proyecto vivo. El dinero del empleado es una opción de «puesta» — no la única ni la obligatoria.",
        "Los negocios que nivelan el skill a «promedio» y dejan a la gente en la rutina sin crecimiento pierden a los ambiciosos. La formación sistemática corta la rotación donde existe un track real de desarrollo.",
      ],
      links: [
        {
          label: "Trabajo remoto",
          href: "/es/blog/udalennaya-rabota/",
        },
      ],
    },
  ],
  closing: [
    "La formación corporativa funciona como un sistema con meta, experto y engagement voluntario — no como una orden de «id a aprender». El formato (online o presencial) es secundario; sin plan y práctica el presupuesto se tira.",
  ],
  related: [
    "onlayn-obuchenie",
    "udalennaya-rabota",
    "marketingovaya-strategiya",
    "kontent-menedzher",
    "tochki-rosta-sayta",
    "korporativnyy-blog",
  ],
};

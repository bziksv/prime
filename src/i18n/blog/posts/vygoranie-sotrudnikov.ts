import type { BlogPost } from "../../../data/blog";

/** EN overlay for vygoranie-sotrudnikov — same structure as RU JSON. */
export const vygoranieSotrudnikovEn: BlogPost = {
  slug: "vygoranie-sotrudnikov",
  title: "Employee burnout: how to lower the risk",
  date: "2019-06-07",
  category: "Digital marketing",
  cover: "/images/blog/vygoranie-sotrudnikov/cover-en.webp",
  excerpt:
    "Burnout prevention in a team: trust and feedback, healthy humor, clear tasks, breaks and workload boundaries — without the cult of \"meditation instead of pay.\"",
  lead: [
    "Burnout isn’t laziness or a personal weakness. It’s exhaustion from chronic stress, unclear goals, overload, and missing recognition. For the business that means turnover, sick leave, and a drop in quality.",
    "Below: practical prevention levers — trust, culture, and stress reduction. Figures from individual studies are a guide, not a guarantee of “+50% productivity” from one joke.",
  ],
  faq: [
    {
      q: "Is burnout just tiredness after a deadline?",
      a: "No. Tiredness fades after rest. Burnout is lasting emptiness, cynicism about work, and lower effectiveness even after a weekend.",
    },
    {
      q: "Are parties and memes enough?",
      a: "No. Humor helps the atmosphere, but it doesn't replace clear tasks, fair load, and fair pay.",
    },
    {
      q: "Is a flexible schedule required?",
      a: "Not everywhere. What matters is predictable recovery: breaks, limits on endless crunch, and the right to disconnect off-shift where possible.",
    },
    {
      q: "Will meditation save the team?",
      a: "It can be a personal tool. It doesn't replace fixing overload, a toxic management style, or impossible KPIs.",
    },
    {
      q: "How is burnout linked to trust?",
      a: "Where people can't make mistakes or raise problems, they stay silent until they break. Feedback and recognition lower that risk.",
    },
    {
      q: "What should a manager do at the first signs?",
      a: "Clarify load and priorities, cut useless multitasking, give rest or redistribute work — don't \"motivate\" with shame.",
    },
  ],
  sections: [
    {
      title: "Trust and meaning at work",
      level: 2,
      paras: [
        "Recognizing wins, honest feedback, hard but doable tasks (a stretch, not an impossible plan), freedom within the role, and visible growth — that's the prevention base.",
        "Managers do better not playing infallible: owning mistakes lowers fear culture. Skill growth (training, task rotation) retains people better than \"we're a family\" slogans.",
      ],
      lists: [
        {
          intro: "Trust minimum:",
          items: [
            "regular feedback and recognition",
            "a clear goal for each task",
            "influence on your own work area",
            "a development track, not only routine",
          ],
        },
      ],
      links: [
        {
          label: "Corporate training",
          href: "/en/blog/korporativnoe-obuchenie/",
        },
        {
          label: "Bad advice for managers",
          href: "/en/blog/vrednye-sovety-rukovoditelyam/",
        },
      ],
    },
    {
      title: "Culture without toxic \"fun\"",
      level: 2,
      paras: [
        "Kind humor and self-irony lower tension and help ideas surface without self-censorship. Drop jokes at the expense of gender, religion, politics, or someone's vulnerability.",
        "\"Positivity\" doesn't cancel exhaustion from 12-hour shifts. Load and clarity first — memes second.",
      ],
    },
    {
      title: "Stress, breaks, focus",
      level: 2,
      paras: [
        "People need to know what they do and why. Flexible hours (where it fits), regular short breaks, less pointless multitasking and endless notifications — practical moves.",
        "Nonstop work raises anxiety and errors. Protect deep-work blocks and evening boundaries, especially on remote teams.",
      ],
      notes: [
        {
          title: "Meditation and personal practices",
          text: "Short breathing or meditation breaks help some people. They're an add-on to organizational measures — not a substitute for pay, headcount, and a realistic plan.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
        {
          label: "Online learning",
          href: "/en/blog/onlayn-obuchenie/",
        },
      ],
    },
  ],
  closing: [
    "Burnout prevention is trust, clear tasks, and recovery — not \"one more team-building.\" Remove chronic overload and toxic rituals, and productivity and retention improve on their own.",
  ],
  related: [
    "vrednye-sovety-rukovoditelyam",
    "korporativnoe-obuchenie",
    "udalennaya-rabota",
    "onlayn-obuchenie",
    "nayti-marketologa",
    "project-manager",
  ],
};

/** ES overlay for vygoranie-sotrudnikov — same structure as RU JSON / EN. */
export const vygoranieSotrudnikovEs: BlogPost = {
  slug: "vygoranie-sotrudnikov",
  title: "Burnout de empleados: cómo bajar el riesgo",
  date: "2019-06-07",
  category: "Digital marketing",
  cover: "/images/blog/vygoranie-sotrudnikov/cover-es.webp",
  excerpt:
    "Prevención del burnout en un equipo: confianza y feedback, humor sano, tareas claras, pausas y límites de carga — sin el culto de «meditación en vez de sueldo».",
  lead: [
    "El burnout no es pereza ni una debilidad personal. Es agotamiento por estrés crónico, metas poco claras, sobrecarga y falta de reconocimiento. Para el negocio eso significa rotación, bajas y una caída de calidad.",
    "Abajo: palancas prácticas de prevención — confianza, cultura y reducción de estrés. Las cifras de estudios sueltos son una guía, no una garantía de «+50% de productividad» por un chiste.",
  ],
  faq: [
    {
      q: "¿El burnout es solo cansancio tras un deadline?",
      a: "No. El cansancio se va tras el descanso. El burnout es vacío duradero, cinismo hacia el trabajo y menor eficacia incluso tras un fin de semana.",
    },
    {
      q: "¿Bastan fiestas y memes?",
      a: "No. El humor ayuda a la atmósfera, pero no sustituye tareas claras, carga justa y un sueldo justo.",
    },
    {
      q: "¿Es obligatorio un horario flexible?",
      a: "No en todas partes. Lo que importa es una recuperación previsible: pausas, límites al crunch infinito y el derecho a desconectar fuera de turno donde sea posible.",
    },
    {
      q: "¿La meditación salvará al equipo?",
      a: "Puede ser una tool personal. No sustituye corregir sobrecarga, un estilo de management tóxico o KPIs imposibles.",
    },
    {
      q: "¿Cómo se liga el burnout a la confianza?",
      a: "Donde la gente no puede equivocarse ni plantear problemas, se calla hasta romperse. Feedback y reconocimiento bajan ese riesgo.",
    },
    {
      q: "¿Qué debe hacer un manager ante las primeras señales?",
      a: "Aclarar carga y prioridades, cortar multitasking inútil, dar descanso o redistribuir trabajo — no «motivar» con vergüenza.",
    },
  ],
  sections: [
    {
      title: "Confianza y sentido en el trabajo",
      level: 2,
      paras: [
        "Reconocer victorias, feedback honesto, tareas duras pero factibles (un stretch, no un plan imposible), libertad dentro del rol y crecimiento visible — esa es la base de la prevención.",
        "Los managers hacen mejor no fingir infalibilidad: asumir errores baja la cultura del miedo. El crecimiento de skills (formación, rotación de tareas) retiene mejor que eslóganes de «somos una familia».",
      ],
      lists: [
        {
          intro: "Mínimo de confianza:",
          items: [
            "feedback y reconocimiento regulares",
            "una meta clara por cada tarea",
            "influencia sobre tu propia área de trabajo",
            "un track de desarrollo, no solo rutina",
          ],
        },
      ],
      links: [
        {
          label: "Formación corporativa",
          href: "/es/blog/korporativnoe-obuchenie/",
        },
        {
          label: "Malos consejos para managers",
          href: "/es/blog/vrednye-sovety-rukovoditelyam/",
        },
      ],
    },
    {
      title: "Cultura sin «diversión» tóxica",
      level: 2,
      paras: [
        "El humor amable y la autoironía bajan la tensión y ayudan a que las ideas salgan sin autocensura. Descarta chistes a costa de género, religión, política o la vulnerabilidad de alguien.",
        "La «positividad» no cancela el agotamiento de turnos de 12 horas. Primero carga y claridad — los memes después.",
      ],
    },
    {
      title: "Estrés, pausas, foco",
      level: 2,
      paras: [
        "La gente necesita saber qué hace y por qué. Horario flexible (donde encaje), pausas cortas regulares, menos multitasking sin sentido y notificaciones infinitas — movimientos prácticos.",
        "El trabajo sin parar sube la ansiedad y los errores. Protege bloques de deep-work y límites por la noche, sobre todo en equipos remotos.",
      ],
      notes: [
        {
          title: "Meditación y prácticas personales",
          text: "Pausas cortas de respiración o meditación ayudan a algunas personas. Son un complemento a medidas organizativas — no un sustituto de sueldo, headcount y un plan realista.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Trabajo remoto",
          href: "/es/blog/udalennaya-rabota/",
        },
        {
          label: "Formación online",
          href: "/es/blog/onlayn-obuchenie/",
        },
      ],
    },
  ],
  closing: [
    "La prevención del burnout es confianza, tareas claras y recuperación — no «otro team-building más». Quita sobrecarga crónica y rituales tóxicos, y la productividad y la retención mejoran solas.",
  ],
  related: [
    "vrednye-sovety-rukovoditelyam",
    "korporativnoe-obuchenie",
    "udalennaya-rabota",
    "onlayn-obuchenie",
    "nayti-marketologa",
    "project-manager",
  ],
};

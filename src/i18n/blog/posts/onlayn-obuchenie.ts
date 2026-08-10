import type { BlogPost } from "../../../data/blog";

/** EN overlay for onlayn-obuchenie — same structure as RU JSON. */
export const onlaynObuchenieEn: BlogPost = {
  slug: "onlayn-obuchenie",
  title: "How to organize online training for employees",
  date: "2019-10-10",
  category: "Digital marketing",
  cover: "/images/blog/onlayn-obuchenie/cover-en.webp",
  excerpt:
    "How to move corporate training online: adapting materials, preparing the speaker, engagement, feedback, and a hybrid with in-person sessions — without a series of boring webinars.",
  lead: [
    "Online training saves logistics and removes geography: one strong speaker can lead a large group, and a recording catches those who missed the live session. But “just put a deck into a call” almost always fails on engagement.",
    "Below: practical rules — how to adapt content, prep the host, pull people into practice, collect feedback, and not throw away in-person entirely. Specific platform vendors are secondary — process and rhythm matter more.",
  ],
  faq: [
    {
      q: "Is online always cheaper than in-person?",
      a: "Often yes on logistics and group scale. But you need hours to adapt materials, coordinate, and handle tech — put that in the plan.",
    },
    {
      q: "Which platform is best?",
      a: "The one the company already has and where recordings, chat, and access are easy. Switching tools rarely saves a weak script.",
    },
    {
      q: "How long should a good webinar block last?",
      a: "Change activity every few minutes: slide → question → poll → short clip. A 40-minute monologue kills attention.",
    },
    {
      q: "Are homework assignments needed?",
      a: "Yes if the goal is a skill, not “they listened.” Mini-research, KPI calc, project defense keep engagement.",
    },
    {
      q: "Can you skip in-person meetings entirely?",
      a: "For team energy and bonding, hybrid is usually stronger. Fully remote makes culture and informal ties harder.",
    },
    {
      q: "How do you measure the effect?",
      a: "Not only “watched the live”: module completion, scores, on-the-job application, quality of project defenses.",
    },
  ],
  sections: [
    {
      title: "Why move training online",
      level: 2,
      paras: [
        "A remote format reduces dependence on the speaker’s and participants’ city, speeds group scaling, and simplifies repeat access via recording. A small team can move a pilot online in tens of work hours — if there’s a script, not only a call link.",
        "Typical formats: a short learning club under current business tasks, and a longer “marathon” with webinars, tests, practice, and project defense. The platform (Teams, Zoom, and similar) is a shell; content and rhythm create the value.",
      ],
      lists: [
        {
          intro: "Pluses with solid organization:",
          items: [
            "one speaker — a large group",
            "recording for those not live",
            "fewer business trips",
            "one hub for materials",
          ],
        },
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Adapt materials for the screen",
      level: 2,
      paras: [
        "Online leans on the visual channel. Slides and clips should feel alive — no bureaucratese and filler “handshakes.” Change format every 3–5 minutes: new block, question, mini-poll, short clip — or attention drifts even with a strong speaker.",
        "In-person handouts don’t transfer “as is” into a webinar. Shorten, strengthen headlines, cut walls of text.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "If a block runs longer than 15–20 minutes without an activity change — part of the group is almost certainly in email. Put switch points into the script in advance.",
        },
      ],
    },
    {
      title: "Prepare the speaker for going live",
      level: 2,
      paras: [
        "An online monologue needs more dynamics than an in-person lecture: voice, frame changes, hooking headlines, video inserts. Address participants by name from the attendance list, ask for a short chat reply — that brings attention back.",
        "You can hire an external speaker, but an internal expert with prep is often more useful: they know the company context. Rehearsal and timing are mandatory.",
      ],
    },
    {
      title: "Pull people into creation and practice",
      level: 2,
      paras: [
        "Passive listeners drop off fast. Give assignments: mini-research of a region/process, KPI calc, project defense, even informal activities with nominations — people value what they made themselves.",
        "Let participants suggest topics for next sessions. That raises the sense of “our training,” not a broadcast from above.",
      ],
      lists: [
        {
          intro: "What drives engagement:",
          items: [
            "practical cases between live sessions",
            "polls and chat questions",
            "project defense",
            "peer content from employees",
          ],
        },
      ],
    },
    {
      title: "Feedback and a hybrid with in-person",
      level: 2,
      paras: [
        "Without feedback the program goes blind. Collect module scores, keep a chat/community for questions, appoint a coordinator who actually replies — not a “bot for show.” Company internal channels beat random external tools with data-access risks.",
        "Don’t cancel in-person entirely: short offline sessions give energy and ties a screen struggles to replace. Hybrid usually saves travel days but keeps contact. Social media as a “showcase” for participants is optional under company rules; for learning, work chats and an LMS matter more.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
      ],
    },
  ],
  closing: [
    "Employee online training works when there’s content rhythm, a prepared speaker, practice, and feedback — not when you bought “yet another webinar tool.” Combine live with in-person touchpoints and measure knowledge use, not only attendance.",
  ],
  related: [
    "udalennaya-rabota",
    "project-manager",
    "tochki-kontakta",
    "interaktivnyy-kontent",
    "sem-kasaniy",
    "aydentika-brenda",
  ],
};

/** ES overlay for onlayn-obuchenie — same structure as RU JSON / EN. */
export const onlaynObuchenieEs: BlogPost = {
  slug: "onlayn-obuchenie",
  title: "Cómo organizar la formación online de empleados",
  date: "2019-10-10",
  category: "Digital marketing",
  cover: "/images/blog/onlayn-obuchenie/cover-es.webp",
  excerpt:
    "Cómo pasar la formación corporativa a online: adaptar materiales, preparar al ponente, engagement, feedback e híbrido con sesiones presenciales — sin una serie de webinars aburridos.",
  lead: [
    "La formación online ahorra logística y quita geografía: un ponente fuerte puede liderar un grupo grande, y la grabación atrapa a quien se perdió el live. Pero «meter un deck en una call» casi siempre falla en engagement.",
    "Abajo: reglas prácticas — cómo adaptar el contenido, preparar al host, involucrar a la gente en la práctica, recoger feedback y no tirar del todo lo presencial. Los vendors concretos de plataforma son secundarios — importan más el proceso y el ritmo.",
  ],
  faq: [
    {
      q: "¿Online siempre es más barato que presencial?",
      a: "A menudo sí en logística y escala del grupo. Pero hacen falta horas para adaptar materiales, coordinar y manejar la tech — mételo en el plan.",
    },
    {
      q: "¿Qué plataforma es la mejor?",
      a: "La que la empresa ya tiene y donde grabaciones, chat y acceso son fáciles. Cambiar de herramienta rara vez salva un guion débil.",
    },
    {
      q: "¿Cuánto debe durar un buen bloque de webinar?",
      a: "Cambia de actividad cada pocos minutos: slide → pregunta → encuesta → clip corto. Un monólogo de 40 minutos mata la atención.",
    },
    {
      q: "¿Hacen falta deberes?",
      a: "Sí si el objetivo es una habilidad, no «escucharon». Mini-investigación, cálculo de KPI, defensa de proyecto mantienen el engagement.",
    },
    {
      q: "¿Se pueden saltar del todo las reuniones presenciales?",
      a: "Para energía de equipo y vínculo, el híbrido suele ser más fuerte. Del todo remoto pone más difícil la cultura y los lazos informales.",
    },
    {
      q: "¿Cómo mides el efecto?",
      a: "No solo «vieron el live»: completion de módulos, scores, aplicación en el puesto, calidad de las defensas de proyecto.",
    },
  ],
  sections: [
    {
      title: "Por qué pasar la formación a online",
      level: 2,
      paras: [
        "El formato remoto reduce la dependencia de la ciudad del ponente y de los participantes, acelera la escala del grupo y simplifica el acceso repetido vía grabación. Un equipo pequeño puede mover un piloto a online en decenas de horas de trabajo — si hay guion, no solo un link de call.",
        "Formatos típicos: un club de aprendizaje corto bajo tareas actuales del negocio, y un «maratón» más largo con webinars, tests, práctica y defensa de proyecto. La plataforma (Teams, Zoom y similares) es la cáscara; el contenido y el ritmo crean el valor.",
      ],
      lists: [
        {
          intro: "Pluses con organización sólida:",
          items: [
            "un ponente — un grupo grande",
            "grabación para quien no está en live",
            "menos viajes de negocio",
            "un hub para materiales",
          ],
        },
      ],
      links: [
        {
          label: "Trabajo remoto",
          href: "/es/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Adaptar materiales a la pantalla",
      level: 2,
      paras: [
        "Online se apoya en el canal visual. Slides y clips deben sentirse vivos — sin burocratés y «handshakes» de relleno. Cambia de formato cada 3–5 minutos: bloque nuevo, pregunta, mini-encuesta, clip corto — o la atención se va aunque el ponente sea fuerte.",
        "Los handouts presenciales no se transfieren «tal cual» a un webinar. Acorta, refuerza titulares, corta muros de texto.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Si un bloque dura más de 15–20 minutos sin cambio de actividad — parte del grupo casi seguro está en el email. Pon puntos de cambio en el guion de antemano.",
        },
      ],
    },
    {
      title: "Preparar al ponente para el live",
      level: 2,
      paras: [
        "Un monólogo online necesita más dinámica que una clase presencial: voz, cambios de encuadre, titulares que enganchen, inserts de vídeo. Dirígete a los participantes por nombre desde la lista de asistencia, pide una respuesta corta en el chat — eso devuelve la atención.",
        "Puedes contratar un ponente externo, pero un experto interno con prep suele ser más útil: conoce el contexto de la empresa. Ensayo y timing son obligatorios.",
      ],
    },
    {
      title: "Involucrar en creación y práctica",
      level: 2,
      paras: [
        "Los oyentes pasivos se caen rápido. Da encargos: mini-investigación de una región/proceso, cálculo de KPI, defensa de proyecto, incluso actividades informales con nominaciones — la gente valora lo que hizo ella misma.",
        "Deja que los participantes propongan temas para las siguientes sesiones. Eso sube la sensación de «nuestra formación», no un broadcast desde arriba.",
      ],
      lists: [
        {
          intro: "Qué impulsa el engagement:",
          items: [
            "casos prácticos entre lives",
            "encuestas y preguntas en el chat",
            "defensa de proyecto",
            "contenido peer de empleados",
          ],
        },
      ],
    },
    {
      title: "Feedback e híbrido con presencial",
      level: 2,
      paras: [
        "Sin feedback el programa va a ciegas. Recoge scores de módulos, mantén un chat/comunidad para preguntas, nombra un coordinador que responda de verdad — no un «bot de escaparate». Los canales internos de la empresa ganan a tools externas al azar con riesgos de acceso a datos.",
        "No canceles del todo lo presencial: sesiones offline cortas dan energía y lazos que la pantalla cuesta reemplazar. El híbrido suele ahorrar días de viaje pero mantiene el contacto. Las redes como «escaparate» de participantes son opcionales bajo las reglas de la empresa; para aprender importan más los chats de trabajo y un LMS.",
      ],
      links: [
        {
          label: "Puntos de contacto",
          href: "/es/blog/tochki-kontakta/",
        },
      ],
    },
  ],
  closing: [
    "La formación online de empleados funciona cuando hay ritmo de contenido, un ponente preparado, práctica y feedback — no cuando compraste «otra tool de webinar más». Combina live con puntos de contacto presenciales y mide el uso del conocimiento, no solo la asistencia.",
  ],
  related: [
    "udalennaya-rabota",
    "project-manager",
    "tochki-kontakta",
    "interaktivnyy-kontent",
    "sem-kasaniy",
    "aydentika-brenda",
  ],
};

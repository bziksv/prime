import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-kalendar — same structure as RU JSON. */
export const googleKalendarEn: BlogPost = {
  slug: "google-kalendar",
  title: "Google Calendar for work: how to organize meetings and tasks",
  date: "2019-06-19",
  category: "Digital marketing",
  cover: "/images/blog/google-kalendar/cover-en.webp",
  excerpt:
    "How to use Google Calendar at work: multiple calendars by purpose, meetings with guests, video, attachments, working hours, and sharing — without outdated clicks and Hangouts.",
  lead: [
    "Google Calendar is a planner for meetings, reminders, and focus blocks in the Google ecosystem. It works for solo operators and teams: shared calendars, invites, Drive attachments, working hours.",
    "Below: practical settings for a work flow. Menu labels and button names change; follow the meaning of features, not a 2019 screenshot. Video meetings today usually go through Google Meet, not Hangouts.",
  ],
  faq: [
    {
      q: "Is one calendar enough?",
      a: "For a simple day — yes. When clients, internal calls, and personal mix, several colored calendars plus a visibility filter work better.",
    },
    {
      q: "Do I need Google Workspace?",
      a: "Basic planning works on a regular account. Some corporate options (appointment slots, access policies) are on work/school plans — check Google’s current list.",
    },
    {
      q: "What replaces Hangouts from old guides?",
      a: "Google Meet: add a meeting link to the calendar event.",
    },
    {
      q: "Is this the same as a content plan for a blog?",
      a: "No. Calendar is about time and meetings. An editorial publishing plan lives in a separate content-plan article.",
    },
    {
      q: "Can I open a calendar to the whole company?",
      a: "Yes, via sharing settings. Give edit rights only to people who must change events; others get free/busy view.",
    },
  ],
  sections: [
    {
      title: "Several calendars for different goals",
      level: 2,
      paras: [
        "One “everything in a row” stream quickly becomes noise: important items drown among reminders. Create separate calendars — e.g. Clients, Internal, Personal, Deadlines — and assign colors.",
        "In the sidebar, turn on only the layers you need for the day. It’s easier to prepare for calls and not miss hard deadlines.",
      ],
      lists: [
        {
          intro: "A typical set:",
          items: [
            "client meetings",
            "internal syncs",
            "deep work (focus blocks)",
            "recurring reminders",
            "personal events (optionally a hidden layer)",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Scheduling meetings with participants",
      level: 2,
      paras: [
        "Create an event, set the time, and add guests with Google accounts. If you can see their busy times, Calendar highlights conflicts — easier to find a shared slot.",
        "Without access to someone else’s schedule you can still send an invite: people accept, decline, or propose another time. For external clients it’s often better to agree a slot in chat first, then lock the event.",
      ],
      lists: [
        {
          intro: "Before sending the invite:",
          items: [
            "a clear subject and meeting goal",
            "timezone and duration",
            "video link or address",
            "agenda in the description",
            "needed attachments already on the event",
          ],
        },
      ],
    },
    {
      title: "Video and materials on the event",
      level: 2,
      paras: [
        "Add a video meeting (Meet) to the event. Remote guests get the link with the invite — no separate “here’s Zoom” email.",
        "Attach files from your computer or Google Drive: deck, brief, estimate. Guests see materials on the meeting card and prepare ahead.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t put personal-data documents in a shared calendar “just in case.” Drive access and event access are separate permission layers.",
        },
      ],
    },
    {
      title: "Working hours and booking slots",
      level: 2,
      paras: [
        "Working hours show colleagues when you’re usually free for meetings. An invite outside the window may show a warning — fewer midnight calls.",
        "For consults and teaching slots, work accounts often have appointment intervals: you publish windows, people book. Names and availability depend on account type — see Google Help.",
      ],
      lists: [
        {
          intro: "Agency / freelance practice:",
          items: [
            "set working hours",
            "leave a buffer between meetings",
            "deep-work blocks without invites",
            "a separate calendar for sales / interviews",
          ],
        },
      ],
    },
    {
      title: "Sharing and shortcuts",
      level: 2,
      paras: [
        "In calendar settings, choose who sees details, who only sees free/busy, and who can edit. For a team, a shared project calendar with editors works well; keep personal view limited.",
        "Keyboard shortcuts speed up creating events and moving through the week. The list is in Calendar Help — no need to memorize “as in 2019.”",
      ],
      lists: [
        {
          intro: "Sharing minimum:",
          items: [
            "don’t make a personal calendar public without need",
            "editors — selectively",
            "for externals — a separate calendar or one-off invites",
            "periodically revoke access for people who left",
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
      title: "Takeaways",
      level: 2,
      paras: [
        "Calendar saves time when layers are split, meetings have an agenda and materials, and sharing isn’t blurry. It’s a discipline tool — not a substitute for priorities.",
        "Linking with tasks (Tasks, the team tracker) and closing follow-ups after a call matters more than a perfect color scheme.",
      ],
    },
  ],
  closing: [
    "Split calendars by goals, set working hours and sharing, add Meet and files on the event itself — that’s when Google Calendar starts saving coordination instead of growing chaos in one endless stream.",
  ],
  related: [
    "kontent-plan",
    "udalennaya-rabota",
    "kpi-menedzhera-prodazh",
    "dashboard",
    "marketingovaya-strategiya",
    "otchet-klientu",
  ],
};

/** ES overlay for google-kalendar — same structure as RU JSON / EN. */
export const googleKalendarEs: BlogPost = {
  slug: "google-kalendar",
  title: "Google Calendar para el trabajo: cómo organizar reuniones y tareas",
  date: "2019-06-19",
  category: "Digital marketing",
  cover: "/images/blog/google-kalendar/cover.webp",
  excerpt:
    "Cómo usar Google Calendar en el trabajo: varios calendarios por propósito, reuniones con invitados, vídeo, adjuntos, horario laboral y sharing — sin clics caducados ni Hangouts.",
  lead: [
    "Google Calendar es un planner de reuniones, recordatorios y bloques de foco en el ecosistema Google. Funciona para operadores solos y equipos: calendarios compartidos, invites, adjuntos de Drive, horario laboral.",
    "Abajo: ajustes prácticos para un flujo de trabajo. Las etiquetas de menú y los nombres de botones cambian; sigue el sentido de las features, no un screenshot de 2019. Las videollamadas hoy suelen ir por Google Meet, no Hangouts.",
  ],
  faq: [
    {
      q: "¿Basta un solo calendario?",
      a: "Para un día simple — sí. Cuando se mezclan clientes, calls internas y lo personal, varios calendarios de color más un filtro de visibilidad funcionan mejor.",
    },
    {
      q: "¿Hace falta Google Workspace?",
      a: "La planificación básica funciona en una cuenta habitual. Algunas opciones corporativas (appointment slots, políticas de acceso) están en planes work/school — mira la lista actual de Google.",
    },
    {
      q: "¿Qué sustituye Hangouts de las guías viejas?",
      a: "Google Meet: añade un enlace de reunión al evento del calendario.",
    },
    {
      q: "¿Es lo mismo que un content plan de blog?",
      a: "No. Calendar va de tiempo y reuniones. Un plan editorial de publicación vive en un artículo aparte de content plan.",
    },
    {
      q: "¿Puedo abrir un calendario a toda la empresa?",
      a: "Sí, vía ajustes de sharing. Da derechos de edición solo a quien deba cambiar eventos; el resto ve free/busy.",
    },
  ],
  sections: [
    {
      title: "Varios calendarios para metas distintas",
      level: 2,
      paras: [
        "Un stream de «todo en fila» se vuelve ruido rápido: lo importante se ahoga entre recordatorios. Crea calendarios aparte — p. ej. Clientes, Interno, Personal, Deadlines — y asigna colores.",
        "En la sidebar, enciende solo las capas que necesitas para el día. Es más fácil prepararse para calls y no perder deadlines duros.",
      ],
      lists: [
        {
          intro: "Un set típico:",
          items: [
            "reuniones con clientes",
            "syncs internas",
            "deep work (bloques de foco)",
            "recordatorios recurrentes",
            "eventos personales (opcionalmente una capa oculta)",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Agendar reuniones con participantes",
      level: 2,
      paras: [
        "Crea un evento, fija la hora y añade invitados con cuentas Google. Si puedes ver sus busy times, Calendar destaca conflictos — más fácil hallar un slot compartido.",
        "Sin acceso al schedule de otro aún puedes enviar un invite: la gente acepta, declina o propone otra hora. Con clientes externos a menudo conviene acordar el slot en chat primero y luego fijar el evento.",
      ],
      lists: [
        {
          intro: "Antes de enviar el invite:",
          items: [
            "asunto claro y meta de la reunión",
            "zona horaria y duración",
            "enlace de vídeo o dirección",
            "agenda en la descripción",
            "adjuntos necesarios ya en el evento",
          ],
        },
      ],
    },
    {
      title: "Vídeo y materiales en el evento",
      level: 2,
      paras: [
        "Añade una videollamada (Meet) al evento. Los invitados remotos reciben el enlace con el invite — sin un email aparte de «aquí va Zoom».",
        "Adjunta archivos desde el ordenador o Google Drive: deck, brief, presupuesto. Los invitados ven los materiales en la ficha de la reunión y se preparan antes.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No pongas documentos con datos personales en un calendario compartido «por si acaso». El acceso a Drive y el acceso al evento son capas de permiso distintas.",
        },
      ],
    },
    {
      title: "Horario laboral y slots de booking",
      level: 2,
      paras: [
        "El horario laboral muestra a los colegas cuándo sueles estar libre para reuniones. Un invite fuera de la ventana puede mostrar un aviso — menos calls a medianoche.",
        "Para consultorías y slots de enseñanza, las cuentas de trabajo a menudo tienen intervalos de appointment: publicas ventanas, la gente reserva. Nombres y disponibilidad dependen del tipo de cuenta — ver Google Help.",
      ],
      lists: [
        {
          intro: "Práctica de agencia / freelance:",
          items: [
            "fija horario laboral",
            "deja un buffer entre reuniones",
            "bloques de deep work sin invites",
            "un calendario aparte para ventas / entrevistas",
          ],
        },
      ],
    },
    {
      title: "Sharing y atajos",
      level: 2,
      paras: [
        "En los ajustes del calendario, elige quién ve detalles, quién solo free/busy y quién puede editar. Para un equipo, un calendario de proyecto compartido con editores funciona bien; mantén la vista personal limitada.",
        "Los atajos de teclado aceleran crear eventos y moverte por la semana. La lista está en Calendar Help — no hace falta memorizar «como en 2019».",
      ],
      lists: [
        {
          intro: "Mínimo de sharing:",
          items: [
            "no hagas público un calendario personal sin necesidad",
            "editores — de forma selectiva",
            "para externos — un calendario aparte o invites puntuales",
            "revoca periódicamente el acceso a quien se fue",
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
      title: "Takeaways",
      level: 2,
      paras: [
        "Calendar ahorra tiempo cuando las capas están separadas, las reuniones tienen agenda y materiales, y el sharing no es borroso. Es una tool de disciplina — no un sustituto de prioridades.",
        "Vincular con tareas (Tasks, el tracker del equipo) y cerrar follow-ups tras una call importa más que un esquema de color perfecto.",
      ],
    },
  ],
  closing: [
    "Separa calendarios por metas, fija horario laboral y sharing, añade Meet y archivos en el propio evento — ahí Google Calendar empieza a ahorrar coordinación en vez de crecer el caos en un stream infinito.",
  ],
  related: [
    "kontent-plan",
    "udalennaya-rabota",
    "kpi-menedzhera-prodazh",
    "dashboard",
    "marketingovaya-strategiya",
    "otchet-klientu",
  ],
};

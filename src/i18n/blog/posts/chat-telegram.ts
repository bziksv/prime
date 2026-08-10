import type { BlogPost } from "../../../data/blog";

/** ES overlay for chat-telegram — same structure as RU JSON. */
export const chatTelegramEs: BlogPost = {
  slug: "chat-telegram",
  title: "Cómo crear un chat (grupo) en Telegram",
  date: "2020-11-16",
  category: "SMM",
  cover: "/images/blog/chat-telegram/cover-es.webp",
  excerpt:
    "Cómo crear un grupo de Telegram: en qué se diferencia de un canal y un bot, enlaces públicos vs privados, fijar chats, encuestas y setups de negocio — sin mitos obsoletos de límites de miembros.",
  lead: [
    "Un chat (grupo) de Telegram es donde escriben varias personas: un equipo, clientes, padres de clase, una comunidad. No es un canal (feed unidireccional) ni un bot (un programa), aunque puedes añadir un bot al grupo para trabajo rutinario.",
    "Abajo: por qué importan los grupos, qué tipos hay, cómo crear uno, fijar chats importantes y lanzar una encuesta. Los límites de miembros y las etiquetas de menú cambian — mira la Help de Telegram. Un chat secreto es un modo one-to-one aparte, no un «supergrupo secreto».",
  ],
  faq: [
    {
      q: "¿Chat, grupo y canal son lo mismo?",
      a: "Un canal son posts de admins a suscriptores. Un grupo (chat) es discusión entre miembros. Las marcas a menudo llevan un canal más un grupo de discusión.",
    },
    {
      q: "¿En qué se diferencia un grupo de un bot?",
      a: "En un grupo habla la gente. Un bot es automatización (FAQ, leads, moderación). Puedes añadir un bot al grupo, pero no sustituye una conversación viva.",
    },
    {
      q: "¿Un chat secreto puede ser un grupo?",
      a: "No. El modo secreto es one-to-one. Para equipos, usa un grupo normal con permisos y una política de retención.",
    },
    {
      q: "¿Cuánta gente cabe en un grupo?",
      a: "Los límites han crecido años: sigue la help actual de Telegram, no «200 / 10.000» de guías viejas.",
    },
    {
      q: "¿Hace falta @PollBot para una encuesta?",
      a: "Para encuestas simples suele bastar el Poll integrado en el menú de adjuntos. Los bots de terceros son para flujos más complejos.",
    },
    {
      q: "¿Es obligatorio un grupo público para negocio?",
      a: "No. Los chats de clientes suelen ser solo por invitación; un username público ayuda al discovery de la comunidad.",
    },
    {
      q: "¿Dónde leer sobre canales y chats secretos?",
      a: "Arrancar un canal y el modo secreto se cubren en textos aparte.",
    },
  ],
  sections: [
    {
      title: "Por qué importan los grupos de Telegram",
      level: 2,
      paras: [
        "Los grupos cubren trabajos donde importa el diálogo bidireccional: hobbies y comunidades, equipos de trabajo, chats de colegio o padres, compartir archivos y aprobaciones rápidas.",
        "En un chat grande es difícil hablar a todos a la vez — aparecen hilos, topics, reglas y moderadores. Para un stream de noticias de marca, la gente suele tomar un canal y pasar la discusión a un grupo aparte.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "equipo interno y contratistas",
            "soporte a clientes o comunidad",
            "chat de discusión ligado a un canal",
            "salas de proyecto con archivos y enlaces",
          ],
        },
      ],
    },
    {
      title: "Qué tipos de chats hay",
      level: 2,
      paras: [
        "Un diálogo privado es mensajería one-to-one. Un grupo tiene muchos miembros, derechos de admin e historial en la nube (dentro de chats normales).",
        "Un chat secreto es un modo protegido aparte solo para dos personas; no lo confundas con un grupo cerrado. Un grupo público se encuentra por username o búsqueda; uno privado es solo por invitación.",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "one-to-one normal — mensajería cotidiana",
            "grupo / supergrupo — charla de equipo y clientes",
            "secreto — temas sensibles one-to-one",
            "canal — no es un chat, es un feed",
          ],
        },
      ],
      links: [
        {
          label: "Chat secreto de Telegram",
          href: "/es/blog/sekretnyy-chat-telegram/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Claims del tipo «un chat secreto de grupo no se puede hackear» son marketing. Expectativas realistas y límites están en el artículo de chat secreto.",
        },
      ],
    },
    {
      title: "Cómo crear un grupo",
      level: 2,
      paras: [
        "En el cliente móvil: crea un grupo nuevo (New Group), elige miembros de contactos o añádelos después, pon nombre y opcionalmente una foto.",
        "En ajustes del grupo elige: enlace de invitación privado o username público; quién puede escribir, añadir miembros y editar info. Para crecer sin spam, empieza con enlace privado y moderación.",
        "Los límites de miembros y pasar de un «grupo normal» a un supergrupo grande han evolucionado — no copies cifras de 2020. Usa las pistas actuales del cliente y la help.",
      ],
      lists: [
        {
          intro: "Tras crear:",
          items: [
            "describe las reglas en un mensaje fijado",
            "nombra admins con los derechos mínimos que necesitan",
            "guarda el enlace de invitación en un sitio seguro",
            "apaga «todos pueden escribir» si es una discusión moderada para un canal",
          ],
        },
      ],
    },
    {
      title: "Fijar chats",
      level: 2,
      paras: [
        "Con muchos diálogos, los grupos importantes se pierden en el feed. Fija un chat: long-press o clic derecho → Pin. Los chats fijados se quedan arriba del resto de la lista.",
        "El número de pins depende del cliente y del plan (incluido Premium) — sigue lo que muestra tu Telegram ahora, no «exactamente cinco» de instrucciones viejas.",
      ],
    },
    {
      title: "Encuestas en un chat",
      level: 2,
      paras: [
        "Para una votación rápida, abre el menú de adjuntos del chat y crea una encuesta: pregunta, opciones, anonimato y multi-select si hace falta. Basta para la mayoría de decisiones de equipo y clientes.",
        "Los bots de encuestas de terceros importaban antes o para quizzes complejos. No compliques de más: otro bot es otro punto de acceso al chat.",
      ],
      lists: [
        {
          intro: "Práctica de encuesta:",
          items: [
            "una pregunta — un tema",
            "opciones de respuesta cortas",
            "un plazo en el texto («vota hasta el viernes»)",
            "fija el resultado en un mensaje de seguimiento",
          ],
        },
      ],
    },
    {
      title: "Chats para negocio",
      level: 2,
      paras: [
        "Los grupos dan al negocio feedback rápido, coordinación interna y comunidad. Pero un chat público sin moderación se vuelve spam y conflicto con facilidad.",
        "Setups habituales: un chat cerrado de clientes por invitación; un canal de noticias más grupo de discusión; un bot para FAQ, con casos duros pasados a un manager en vivo. Catálogos de producto y pagos funcionan mejor en un sitio o en un bot con reglas claras que en el caos del chat solo.",
      ],
      lists: [
        {
          intro: "Decide de antemano:",
          items: [
            "quién es admin y quién responde a clientes",
            "qué no se puede publicar (insultos, datos personales)",
            "cómo escalar a un ticket o CRM",
            "si hace falta un bot o basta un FAQ fijado",
          ],
        },
      ],
      links: [
        {
          label: "Bots de Telegram",
          href: "/es/blog/telegram-boty/",
        },
        {
          label: "Canal de Telegram",
          href: "/es/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Fortalezas y expectativas realistas",
      level: 2,
      paras: [
        "Fortalezas: velocidad, uso multiplataforma, archivos, llamadas de voz y vídeo, clientes desktop y móvil sólidos. La confidencialidad depende del tipo de chat y de la disciplina de los miembros — los grupos no prometen protección absoluta.",
        "En resumen: crea un grupo para el trabajo, fija derechos y el enlace, fija las reglas. Para noticias unidireccionales — un canal; para charla sensible entre dos — un chat secreto.",
      ],
      tables: [
        {
          caption: "Formato → trabajo",
          headers: ["Formato", "Cuándo usarlo"],
          rows: [
            ["Grupo", "Discusión, equipo, comunidad"],
            ["Canal", "Noticias y ofertas sin ruido"],
            ["Bot", "FAQ, leads, automatización"],
            ["Chat secreto", "Diálogo sensible one-to-one"],
          ],
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "sekretnyy-chat-telegram",
    "telegram-boty",
  ],
};

/** EN overlay for chat-telegram — same structure as RU JSON. */
export const chatTelegramEn: BlogPost = {
  slug: "chat-telegram",
  title: "How to create a chat (group) in Telegram",
  date: "2020-11-16",
  category: "SMM",
  cover: "/images/blog/chat-telegram/cover-en.webp",
  excerpt:
    "How to create a Telegram group: how it differs from a channel and a bot, public vs private links, pinning chats, polls, and business setups — without outdated member-limit myths.",
  lead: [
    "A Telegram chat (group) is where several people write: a team, clients, class parents, a community. It isn’t a channel (one-way feed) or a bot (a program), though you can add a bot to a group for routine work.",
    "Below: why groups matter, which kinds exist, how to create one, pin important chats, and run a poll. Member limits and menu labels change — check Telegram Help. A secret chat is a separate one-to-one mode, not a “secret supergroup.”",
  ],
  faq: [
    {
      q: "Are a chat, a group, and a channel the same thing?",
      a: "A channel is posts from admins to subscribers. A group (chat) is member discussion. Brands often run a channel plus a discussion group.",
    },
    {
      q: "How does a group differ from a bot?",
      a: "People talk in a group. A bot is automation (FAQ, leads, moderation). You can add a bot to a group, but it doesn’t replace a live conversation.",
    },
    {
      q: "Can a secret chat be a group?",
      a: "No. Secret mode is one-to-one. For teams, use a normal group with permissions and a retention policy.",
    },
    {
      q: "How many people can a group hold?",
      a: "Limits have grown for years: follow current Telegram help, not “200 / 10,000” from old guides.",
    },
    {
      q: "Do I need @PollBot for a poll?",
      a: "For simple polls, the built-in Poll in the attachment menu is usually enough. Third-party bots are for more complex flows.",
    },
    {
      q: "Is a public group required for business?",
      a: "No. Client chats are often invite-only; a public username helps community discovery.",
    },
    {
      q: "Where can I read about channels and secret chats?",
      a: "Starting a channel and secret mode are covered in separate pieces.",
    },
  ],
  sections: [
    {
      title: "Why Telegram groups matter",
      level: 2,
      paras: [
        "Groups cover jobs where two-way talk matters: hobbies and communities, work teams, school or parent chats, file sharing, and fast approvals.",
        "In a large chat it’s hard to speak to everyone at once — threads, topics, rules, and moderators appear. For a brand news stream, people usually take a channel and move discussion to a separate group.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "internal team and contractors",
            "client support or community",
            "a discussion chat tied to a channel",
            "project rooms with files and links",
          ],
        },
      ],
    },
    {
      title: "What kinds of chats there are",
      level: 2,
      paras: [
        "A private dialog is one-to-one messaging. A group has many members, admin rights, and cloud history (within normal chats).",
        "A secret chat is a separate protected mode for two people only; don’t confuse it with a closed group. A public group is findable by username or search; a private one is invite-only.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "one-to-one normal — everyday messaging",
            "group / supergroup — team and client talk",
            "secret — sensitive topics one-to-one",
            "channel — not a chat, a feed",
          ],
        },
      ],
      links: [
        {
          label: "Telegram secret chat",
          href: "/en/blog/sekretnyy-chat-telegram/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Claims like “a secret group chat can’t be hacked” are marketing. Realistic expectations and limits are in the secret-chat article.",
        },
      ],
    },
    {
      title: "How to create a group",
      level: 2,
      paras: [
        "In the mobile client: create a new group (New Group), pick members from contacts or add them later, set a name and optionally a photo.",
        "In group settings choose: private invite link or public username; who can write, add members, and edit info. For growth without spam, start with a private link and moderation.",
        "Member limits and turning a “normal group” into a large supergroup have evolved — don’t copy 2020 numbers. Use current client hints and help.",
      ],
      lists: [
        {
          intro: "After creating:",
          items: [
            "describe rules in a pinned message",
            "appoint admins with the minimum rights they need",
            "store the invite link somewhere safe",
            "turn off “everyone can write” if it’s a moderated discussion for a channel",
          ],
        },
      ],
    },
    {
      title: "Pinning chats",
      level: 2,
      paras: [
        "With many dialogs, important groups get lost in the feed. Pin a chat: long-press or right-click → Pin. Pinned chats stay above the rest of the list.",
        "Pin count depends on the client and plan (including Premium) — follow what your Telegram shows now, not “exactly five” from old instructions.",
      ],
    },
    {
      title: "Polls in a chat",
      level: 2,
      paras: [
        "For a quick vote, open the chat attachment menu and create a poll: question, options, anonymity, and multi-select if needed. That’s enough for most team and client decisions.",
        "Third-party poll bots mattered earlier or for complex quizzes. Don’t overcomplicate: another bot is another access point to the chat.",
      ],
      lists: [
        {
          intro: "Poll practice:",
          items: [
            "one question — one topic",
            "short answer options",
            "a deadline in the text (“vote by Friday”)",
            "pin the result in a follow-up message",
          ],
        },
      ],
    },
    {
      title: "Chats for business",
      level: 2,
      paras: [
        "Groups give business fast feedback, internal coordination, and community. But a public chat without moderation turns into spam and conflict easily.",
        "Common setups: a closed client chat by invite; a news channel plus discussion group; a bot for FAQ, with hard cases handed to a live manager. Product catalogs and payments work better on a site or in a bot with clear rules than in chat chaos alone.",
      ],
      lists: [
        {
          intro: "Decide in advance:",
          items: [
            "who is admin and who answers clients",
            "what can’t be posted (insults, personal data)",
            "how to escalate into a ticket or CRM",
            "whether you need a bot or a pinned FAQ is enough",
          ],
        },
      ],
      links: [
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
        {
          label: "Telegram channel",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Strengths and realistic expectations",
      level: 2,
      paras: [
        "Strengths: speed, cross-platform use, files, voice and video calls, solid desktop and mobile clients. Confidentiality depends on chat type and member discipline — groups don’t promise absolute protection.",
        "Bottom line: create a group for the job, set rights and the link, pin the rules. For one-way news — a channel; for sensitive two-person talk — a secret chat.",
      ],
      tables: [
        {
          caption: "Format → job",
          headers: ["Format", "When to use"],
          rows: [
            ["Group", "Discussion, team, community"],
            ["Channel", "News and offers without noise"],
            ["Bot", "FAQ, leads, automation"],
            ["Secret chat", "Sensitive one-to-one dialog"],
          ],
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "sekretnyy-chat-telegram",
    "telegram-boty",
  ],
};

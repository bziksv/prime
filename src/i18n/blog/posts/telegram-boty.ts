import type { BlogPost } from "../../../data/blog";

/** EN overlay for telegram-boty — same structure as RU JSON. */
export const telegramBotyEn: BlogPost = {
  slug: "telegram-boty",
  title: "Telegram bots: why they matter and how they work",
  date: "2021-03-05",
  category: "SMM",
  cover: "/images/blog/telegram-boty/cover-en.webp",
  excerpt:
    "What Telegram bots can do for business and channels: replies, leads, compliant broadcasts, finding bots, and basic command logic — without a catalog of shady growth hacks.",
  lead: [
    "A Telegram bot is an account driven by a program via the Bot API: it answers commands, takes leads, sends notifications, and helps a channel or site.",
    "Below: how a bot works, why businesses use one, how to design a flow, security, and launch. Channel setup is a sibling article; we don’t cover shady growth bots.",
  ],
  faq: [
    {
      q: "How is a bot different from a channel?",
      a: "A channel is a post feed. A bot is dialogue and automation: buttons, forms, integrations, notifications.",
    },
    {
      q: "Do I need a developer?",
      a: "For simple FAQ/leads, builders often suffice. Complex CRM, payments, and custom logic — yes, a developer.",
    },
    {
      q: "How do I find a bot?",
      a: "Telegram search, directories, a t.me/… link. Check reviews and the permissions the bot asks for.",
    },
    {
      q: "Can I spam from a bot?",
      a: "No. Follow Telegram rules and user consent. Mass spam risks a ban.",
    },
    {
      q: "Can a bot replace a website?",
      a: "It can complement a site for support and leads. Legal pages, SEO, and a large catalog usually stay on the website.",
    },
    {
      q: "How do I measure value?",
      a: "Flow starts and completions, leads, handoff to a manager, inquiry quality. Channel subscribers ≠ bot results.",
    },
    {
      q: "Where should the token live?",
      a: "In server/builder secrets — not a public repo or client code. Limit who can reissue the token.",
    },
    {
      q: "Do I need a “live operator” button?",
      a: "Almost always yes. Otherwise a hard question hits a menu dead end and the user leaves.",
    },
  ],
  sections: [
    {
      title: "How a bot works",
      level: 2,
      paras: [
        "Via @BotFather you create a bot and get a token. A server or no-code platform receives updates (messages, button callbacks) and replies with text, menus, files, or cards.",
        "The token is full control of the bot: don’t publish it in open code or hand it to a “contractor for an hour” without a contract. Describe the flow before build: what the user chooses and when a human joins.",
      ],
      lists: [
        {
          intro: "Basic pieces:",
          items: [
            "`/start` — greeting and menu",
            "buttons with clear next steps",
            "contact / lead capture",
            "notify a manager or CRM",
            "error messages and “back”",
          ],
        },
      ],
    },
    {
      title: "Why a business needs a bot",
      level: 2,
      paras: [
        "A bot covers repeatable work: 24/7 FAQ, booking, order status, price list, lead qualification, chat moderation, alerts from the site or analytics.",
        "Automate routine — don’t hide the manager behind an endless button tree. For non-standard questions, leave a visible path to a human and state the reply window.",
      ],
      lists: [
        {
          intro: "Strong flows:",
          items: [
            "qualify a lead in 3–5 questions",
            "appointment reminders",
            "FAQ instead of a queue of identical messages",
            "alerts on site form submissions",
            "documents / instructions on a button",
          ],
        },
      ],
      links: [
        {
          label: "Telegram channel",
          href: "/en/blog/telegram-kanal/",
        },
        {
          label: "Telegram overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Flow before development",
      level: 2,
      paras: [
        "Don’t start with “pretty buttons” — start with one business job: qualify a lead, take a booking, answer a frequent question, or return a status. The shorter the first flow, the faster you prove value.",
        "Draw the path from `/start` to the outcome: branches, required fields, errors, handoff. That document is the brief for client and for the developer or builder.",
      ],
      lists: [
        {
          intro: "Lock in the flow:",
          items: [
            "user goal",
            "minimum questions",
            "moment of handoff to a human",
            "consent for data processing",
            "copy for failure / timeout",
          ],
        },
      ],
      tables: [
        {
          caption: "Builder vs custom development",
          headers: ["Task", "Usually enough"],
          rows: [
            ["FAQ + lead to chat", "Builder"],
            ["CRM / ERP link", "Custom build or strong integration"],
            ["Payments and complex order status", "Custom build"],
            ["One-off promo quiz", "Builder"],
          ],
        },
      ],
    },
    {
      title: "Tie-in with channel and site",
      level: 2,
      paras: [
        "The channel warms and carries content; the bot closes the action: lead, booking, access to a material. On the site, “Message on Telegram” should open the bot with a clear `/start` — not an empty chat.",
        "Don’t mirror the whole site catalog in the bot unnecessarily. Bots shine on a short path; deep choice and SEO stay on landings.",
      ],
      lists: [
        {
          intro: "Good pairings:",
          items: [
            "channel post → bot with an offer",
            "site form → confirmation in the bot",
            "bot → manager in CRM with a source tag",
            "bot doesn’t replace policy and offer on the site",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Security and choosing services",
      level: 2,
      paras: [
        "Don’t share the token unnecessarily, and read integration permissions. Avoid “subscriber / view boost” services: they break the rules and trash audience quality.",
        "If the bot collects phone, name, or a lead — explain the purpose, limit staff access, delete what you don’t need. Don’t promise in chat what the flow can’t do.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "asking for excess permissions",
            "no service policy / contacts",
            "promises to bypass Telegram rules",
            "token in a public Git repo",
            "keeping personal data “forever” with no reason",
          ],
        },
      ],
    },
    {
      title: "Launch, metrics, and improvement",
      level: 2,
      paras: [
        "Before launch, walk the flow on a phone: buttons, copy, manager alerts, cancel and “back”. Broadcasts — only with consent and per platform rules.",
        "After launch, see where users drop, which replies aren’t recognized, and how many leads are really handled. Improve one narrow step at a time, or you won’t know what moved the metrics.",
      ],
      lists: [
        {
          intro: "Useful metrics:",
          items: [
            "dialog start",
            "flow completion",
            "handoff to a manager",
            "quality leads / bookings",
            "time to a human reply",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "A bot is a service and lead channel — not a substitute for marketing strategy. Without an offer and traffic (site, channel, ads), a button menu doesn’t sell on its own.",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "A 20-item overloaded menu, no exit to a human, collecting extra fields “just in case”, a silent bot after a lead, spam to a list without consent.",
        "Another mistake — launching “everything at once”: payments, quiz, catalog, support. First one flow with a measurable result, then expand.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "a dead end with no operator",
            "promises in copy that aren’t in the logic",
            "shady audience inflation",
            "bots with unclear data policies",
          ],
        },
      ],
    },
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "forma-obratnoy-svyazi",
    "menedzher-smm",
    "kontent-plan",
    "reklamnyy-kabinet",
  ],
};

/** ES overlay for telegram-boty — same structure as RU JSON / EN. */
export const telegramBotyEs: BlogPost = {
  slug: "telegram-boty",
  title: "Bots de Telegram: por qué importan y cómo funcionan",
  date: "2021-03-05",
  category: "SMM",
  cover: "/images/blog/telegram-boty/cover.webp",
  excerpt:
    "Qué pueden hacer los bots de Telegram para negocio y canales: respuestas, leads, broadcasts con consentimiento, encontrar bots y lógica básica de comandos — sin un catálogo de hacks dudosos de crecimiento.",
  lead: [
    "Un bot de Telegram es una cuenta impulsada por un programa vía la Bot API: responde a comandos, toma leads, envía notificaciones y ayuda a un canal o sitio.",
    "Abajo: cómo funciona un bot, por qué lo usa un negocio, cómo diseñar un flow, seguridad y lanzamiento. La configuración del canal es un artículo hermano; no cubrimos bots de crecimiento dudosos.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un bot de un canal?",
      a: "Un canal es un feed de posts. Un bot es diálogo y automatización: botones, formularios, integraciones, notificaciones.",
    },
    {
      q: "¿Hace falta un developer?",
      a: "Para FAQ/leads simples, a menudo bastan builders. CRM complejo, pagos y lógica custom — sí, un developer.",
    },
    {
      q: "¿Cómo encuentro un bot?",
      a: "Búsqueda de Telegram, directorios, un enlace t.me/…. Revisa reseñas y los permisos que pide el bot.",
    },
    {
      q: "¿Puedo hacer spam desde un bot?",
      a: "No. Sigue las reglas de Telegram y el consentimiento del usuario. El spam masivo arriesga un ban.",
    },
    {
      q: "¿Puede un bot sustituir un sitio web?",
      a: "Puede complementar un sitio para soporte y leads. Páginas legales, SEO y un catálogo grande suelen quedarse en el website.",
    },
    {
      q: "¿Cómo mido el valor?",
      a: "Inicios y cierres de flow, leads, handoff a un manager, calidad de consultas. Suscriptores del canal ≠ resultados del bot.",
    },
    {
      q: "¿Dónde debe vivir el token?",
      a: "En secrets del servidor/builder — no en un repo público ni en código de cliente. Limita quién puede reemitir el token.",
    },
    {
      q: "¿Hace falta un botón de «operador en vivo»?",
      a: "Casi siempre sí. Si no, una pregunta dura choca con un callejón sin salida del menú y el usuario se va.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona un bot",
      level: 2,
      paras: [
        "Vía @BotFather creas un bot y obtienes un token. Un servidor o plataforma no-code recibe updates (mensajes, callbacks de botones) y responde con texto, menús, archivos o cards.",
        "El token es control total del bot: no lo publiques en código abierto ni se lo des a un «contractor por una hora» sin contrato. Describe el flow antes de construir: qué elige el usuario y cuándo entra un humano.",
      ],
      lists: [
        {
          intro: "Piezas básicas:",
          items: [
            "`/start` — saludo y menú",
            "botones con siguientes pasos claros",
            "captura de contacto / lead",
            "avisar a un manager o CRM",
            "mensajes de error y «atrás»",
          ],
        },
      ],
    },
    {
      title: "Por qué un negocio necesita un bot",
      level: 2,
      paras: [
        "Un bot cubre trabajo repetible: FAQ 24/7, reservas, estado de pedido, lista de precios, cualificación de leads, moderación de chat, alertas del sitio o analytics.",
        "Automatiza la rutina — no escondas al manager detrás de un árbol infinito de botones. Para preguntas no estándar, deja un camino visible a un humano y di la ventana de respuesta.",
      ],
      lists: [
        {
          intro: "Flows fuertes:",
          items: [
            "cualificar un lead en 3–5 preguntas",
            "recordatorios de cita",
            "FAQ en lugar de una cola de mensajes idénticos",
            "alertas al enviar formularios del sitio",
            "documentos / instrucciones con un botón",
          ],
        },
      ],
      links: [
        {
          label: "Canal de Telegram",
          href: "/es/blog/telegram-kanal/",
        },
        {
          label: "Panorama de Telegram",
          href: "/es/blog/telegram/",
        },
      ],
    },
    {
      title: "Flow antes del desarrollo",
      level: 2,
      paras: [
        "No empieces por «botones bonitos» — empieza por un trabajo de negocio: cualificar un lead, tomar una reserva, responder una pregunta frecuente o devolver un estado. Cuanto más corto el primer flow, más rápido demuestras valor.",
        "Dibuja el camino desde `/start` hasta el resultado: ramas, campos obligatorios, errores, handoff. Ese documento es el brief para el cliente y para el developer o builder.",
      ],
      lists: [
        {
          intro: "Fija en el flow:",
          items: [
            "objetivo del usuario",
            "mínimo de preguntas",
            "momento de handoff a un humano",
            "consentimiento para el tratamiento de datos",
            "copy para fallo / timeout",
          ],
        },
      ],
      tables: [
        {
          caption: "Builder vs desarrollo custom",
          headers: ["Tarea", "Suele bastar"],
          rows: [
            ["FAQ + lead al chat", "Builder"],
            ["Enlace CRM / ERP", "Build custom o integración fuerte"],
            ["Pagos y estado de pedido complejo", "Build custom"],
            ["Quiz promo puntual", "Builder"],
          ],
        },
      ],
    },
    {
      title: "Encaje con canal y sitio",
      level: 2,
      paras: [
        "El canal calienta y lleva contenido; el bot cierra la acción: lead, reserva, acceso a un material. En el sitio, «Escribir en Telegram» debe abrir el bot con un `/start` claro — no un chat vacío.",
        "No espejees todo el catálogo del sitio en el bot sin necesidad. Los bots brillan en un camino corto; la elección profunda y el SEO se quedan en landings.",
      ],
      lists: [
        {
          intro: "Buenos emparejamientos:",
          items: [
            "post del canal → bot con una oferta",
            "formulario del sitio → confirmación en el bot",
            "bot → manager en CRM con tag de fuente",
            "el bot no sustituye política y oferta en el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Seguridad y elección de servicios",
      level: 2,
      paras: [
        "No compartas el token sin necesidad y lee los permisos de integración. Evita servicios de «boost de suscriptores / views»: rompen las reglas y tiran la calidad de audiencia.",
        "Si el bot recoge teléfono, nombre o un lead — explica el propósito, limita el acceso del staff, borra lo que no necesitas. No prometas en el chat lo que el flow no puede hacer.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "pedir permisos de más",
            "sin política / contactos del servicio",
            "promesas de saltar las reglas de Telegram",
            "token en un repo Git público",
            "guardar datos personales «para siempre» sin motivo",
          ],
        },
      ],
    },
    {
      title: "Lanzamiento, métricas y mejora",
      level: 2,
      paras: [
        "Antes del lanzamiento, recorre el flow en un teléfono: botones, copy, alertas al manager, cancelar y «atrás». Broadcasts — solo con consentimiento y según las reglas de la plataforma.",
        "Tras el lanzamiento, mira dónde abandonan los usuarios, qué respuestas no se reconocen y cuántos leads se atienden de verdad. Mejora un paso estrecho a la vez, o no sabrás qué movió las métricas.",
      ],
      lists: [
        {
          intro: "Métricas útiles:",
          items: [
            "inicio de diálogo",
            "cierre del flow",
            "handoff a un manager",
            "leads / reservas de calidad",
            "tiempo hasta respuesta humana",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Un bot es un canal de servicio y leads — no un sustituto de la estrategia de marketing. Sin oferta y tráfico (sitio, canal, ads), un menú de botones no vende solo.",
        },
      ],
    },
    {
      title: "Errores habituales",
      level: 2,
      paras: [
        "Un menú sobrecargado de 20 ítems, sin salida a un humano, recolectar campos de más «por si acaso», un bot en silencio tras un lead, spam a una lista sin consentimiento.",
        "Otro error — lanzar «todo a la vez»: pagos, quiz, catálogo, soporte. Primero un flow con resultado medible, luego ampliar.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "un callejón sin salida sin operador",
            "promesas en el copy que no están en la lógica",
            "inflar audiencia de forma dudosa",
            "bots con políticas de datos poco claras",
          ],
        },
      ],
    },
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "forma-obratnoy-svyazi",
    "menedzher-smm",
    "kontent-plan",
    "reklamnyy-kabinet",
  ],
};

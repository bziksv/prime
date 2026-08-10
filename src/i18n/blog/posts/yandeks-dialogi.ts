import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-dialogi — same structure as RU JSON. */
export const yandeksDialogiEn: BlogPost = {
  slug: "yandeks-dialogi",
  title: "Chat with a company in Yandex: Dialogs and contact from search",
  date: "2018-08-15",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-dialogi/cover-en.webp",
  excerpt:
    "How business chat works in the Yandex ecosystem: contact from search and the snippet, the operator’s role, and API — without promising an eternal “Alice button forever.”",
  lead: [
    "“Chat with a company” in Yandex’s stack is a way to start a dialogue with a business not only from the site, but from search surfaces: the snippet, related voice-assistant scenarios where the product is still available.",
    "Below: why it helps a business, what’s needed to connect, and how not to confuse it with a regular on-site widget. Cabinet names (historically Dialogs), partner CMS options, and display points have changed since 2018 — check current Yandex Help and product status at the moment you implement.",
  ],
  faq: [
    {
      q: "Is this a replacement for the site form?",
      a: "No. Chat from search complements the site: a quick here-and-now question. Forms and CRM still handle structured leads.",
    },
    {
      q: "Do I need my own chat operator?",
      a: "Yes — someone must answer during business hours, or you set up a bot and routing. A dead chat hurts more than no button.",
    },
    {
      q: "Does it only work on Bitrix?",
      a: "Historically there were ready integrations with several platforms; others connected via API. Check the current partner list in Help.",
    },
    {
      q: "Does chat show for every site in the results?",
      a: "No. You need a connection, moderation / rule fit, and display conditions. Not every URL gets a button automatically.",
    },
    {
      q: "How is it different from Jivo or Carrot?",
      a: "A third-party widget lives on your domain. Yandex Dialogs is also a channel from the search ecosystem; Yandex sets the rules and entry points.",
    },
  ],
  sections: [
    {
      title: "Why a business wants chat from search",
      level: 2,
      paras: [
        "Some demand closes before a site visit: “in stock?”, “how much is delivery?”, “open today?” If you can answer from the results, you shorten the path to contact.",
        "The channel especially helps services and local businesses with a short sales cycle. For complex B2B with a long proposal, chat is an entry — not a replacement for a manager and a brief form.",
      ],
      lists: [
        {
          intro: "When the channel earns the attention:",
          items: [
            "someone answers during peak hours",
            "typical questions close in one to three replies",
            "leads go to CRM, not lost in DMs",
            "the site already has a privacy policy and offer",
          ],
        },
      ],
      links: [
        {
          label: "Lead capture forms",
          href: "/en/blog/formy-zahvata/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Where the button may appear",
      level: 2,
      paras: [
        "2018 announcements mentioned the search snippet and assistant scenarios (Alice). Surfaces have narrowed and expanded since — don’t treat an old screenshot as a display guarantee.",
        "Practical cue: connect the channel → check whether a contact option shows on your commercial queries and on the organization card if it’s linked to the site.",
      ],
      notes: [
        {
          title: "Product status",
          text: "The Dialogs / chat-with-company line has evolved. Before development, confirm in Yandex Help which entry points and APIs are live right now.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How people connected it — and what to check now",
      level: 2,
      paras: [
        "Classic path: Yandex account → Dialogs or business-chat cabinet → unique chat ID → embed in CMS or hand off to an integrator. Some platforms had ready modules; others used the API.",
        "If your chat provider still doesn’t speak Yandex’s channel, ask about a ready hookup or webhooks. Don’t promise a client a “button in the results tomorrow” without checking eligibility.",
      ],
      lists: [
        {
          intro: "Checklist before you turn it on:",
          items: [
            "named operator and schedule",
            "scripts for typical answers",
            "lead handoff to CRM or email",
            "personal-data consent in the flow",
            "test from a real smartphone and PC",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Yandex Business Directory",
          href: "/en/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Operator, bot, and dialogue quality",
      level: 2,
      paras: [
        "A button without a response SLA hurts trust more than its absence. Set first-response time, human escalation, and a ban on copy-paste “we’ll call you back” with no next step.",
        "Bots cover FAQ; complex orders go to a person immediately. Dialogue logs feed site FAQ and ad keyword ideas.",
      ],
    },
    {
      title: "Search chat vs on-site widget",
      level: 2,
      paras: [
        "You control the on-site widget: design, flows, A/B. The Yandex channel adds an entry point but depends on platform rules and moderation.",
        "Best base: form plus messenger or widget on the site; search chat only if the product is available and the team can answer. Don’t spawn five chats with different queues and no shared CRM.",
      ],
      links: [
        {
          label: "CRM",
          href: "/en/blog/crm/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Chat with a company in Yandex is a dialogue channel from the search ecosystem — not one more icon for fashion.",
        "Connect only with an answer process and a check of current product status; a thin 2018 announcement alone is not a setup.",
      ],
    },
  ],
  closing: [
    "Check current Yandex Help to see whether chat with a company is available for your site type, assign an operator and CRM — and only then embed the chat ID in your CMS or via API.",
  ],
  related: [
    "formy-zahvata",
    "forma-obratnoy-svyazi",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "crm",
    "trafik-bez-lidov",
  ],
};

/** ES overlay for yandeks-dialogi — same structure as RU JSON / EN. */
export const yandeksDialogiEs: BlogPost = {
  slug: "yandeks-dialogi",
  title: "Chat con una empresa en Yandex: Dialogs y contacto desde la búsqueda",
  date: "2018-08-15",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-dialogi/cover-es.webp",
  excerpt:
    "Cómo funciona el chat de negocio en el ecosistema Yandex: contacto desde la búsqueda y el snippet, el rol del operador y la API — sin prometer un eterno «botón de Alice para siempre».",
  lead: [
    "«Chat con una empresa» en el stack de Yandex es una forma de empezar un diálogo con un negocio no solo desde el sitio, sino desde superficies de búsqueda: el snippet, escenarios relacionados del asistente de voz donde el producto sigue disponible.",
    "Abajo: por qué ayuda a un negocio, qué hace falta para conectar y cómo no confundirlo con un widget on-site habitual. Los nombres de cabinet (históricamente Dialogs), las opciones de CMS partner y los puntos de display han cambiado desde 2018 — mira Yandex Help actual y el estado del producto en el momento de implementar.",
  ],
  faq: [
    {
      q: "¿Esto sustituye el formulario del sitio?",
      a: "No. El chat desde la búsqueda complementa el sitio: una pregunta rápida aquí y ahora. Formularios y CRM siguen manejando leads estructurados.",
    },
    {
      q: "¿Hace falta un operador de chat propio?",
      a: "Sí — alguien debe responder en horario laboral, o montas un bot y routing. Un chat muerto duele más que no tener botón.",
    },
    {
      q: "¿Solo funciona en Bitrix?",
      a: "Históricamente había integraciones listas con varias plataformas; otras se conectaban vía API. Revisa la lista actual de partners en Help.",
    },
    {
      q: "¿El chat se muestra para cada sitio en los resultados?",
      a: "No. Hace falta conexión, moderación / encaje con reglas y condiciones de display. No toda URL recibe un botón automáticamente.",
    },
    {
      q: "¿En qué se diferencia de Jivo o Carrot?",
      a: "Un widget de terceros vive en tu dominio. Yandex Dialogs es también un canal del ecosistema de búsqueda; Yandex fija las reglas y los puntos de entrada.",
    },
  ],
  sections: [
    {
      title: "Por qué un negocio quiere chat desde la búsqueda",
      level: 2,
      paras: [
        "Parte de la demanda se cierra antes de visitar el sitio: «¿hay stock?», «¿cuánto cuesta el envío?», «¿abren hoy?». Si puedes responder desde los resultados, acortas el camino al contacto.",
        "El canal ayuda especialmente a servicios y negocios locales con ciclo de venta corto. En B2B complejo con propuesta larga, el chat es una entrada — no un sustituto del manager y un formulario de brief.",
      ],
      lists: [
        {
          intro: "Cuando el canal merece la atención:",
          items: [
            "alguien responde en horas pico",
            "las preguntas típicas se cierran en una a tres respuestas",
            "los leads van al CRM, no se pierden en DMs",
            "el sitio ya tiene política de privacidad y oferta",
          ],
        },
      ],
      links: [
        {
          label: "Formularios de captura de leads",
          href: "/es/blog/formy-zahvata/",
        },
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Dónde puede aparecer el botón",
      level: 2,
      paras: [
        "Los anuncios de 2018 mencionaban el snippet de búsqueda y escenarios del asistente (Alice). Las superficies se han reducido y ampliado desde entonces — no trates un screenshot viejo como garantía de display.",
        "Señal práctica: conecta el canal → comprueba si aparece una opción de contacto en tus queries comerciales y en la ficha de organización si está ligada al sitio.",
      ],
      notes: [
        {
          title: "Estado del producto",
          text: "La línea Dialogs / chat-with-company ha evolucionado. Antes de desarrollar, confirma en Yandex Help qué puntos de entrada y APIs están vivos ahora mismo.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cómo se conectaba — y qué revisar ahora",
      level: 2,
      paras: [
        "Camino clásico: cuenta Yandex → cabinet Dialogs o de chat de negocio → chat ID único → embed en CMS o pasar a un integrador. Algunas plataformas tenían módulos listos; otras usaban la API.",
        "Si tu proveedor de chat aún no habla el canal de Yandex, pregunta por un hookup listo o webhooks. No prometas a un cliente un «botón en los resultados mañana» sin comprobar elegibilidad.",
      ],
      lists: [
        {
          intro: "Checklist antes de activarlo:",
          items: [
            "operador con nombre y horario",
            "scripts para respuestas típicas",
            "paso de leads a CRM o email",
            "consentimiento de datos personales en el flujo",
            "test desde un smartphone y un PC reales",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Directorio de negocios de Yandex",
          href: "/es/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Operador, bot y calidad del diálogo",
      level: 2,
      paras: [
        "Un botón sin SLA de respuesta daña la confianza más que su ausencia. Fija tiempo de primera respuesta, escalado a humano y una prohibición de copy-paste «te llamamos» sin siguiente paso.",
        "Los bots cubren FAQ; los pedidos complejos van a una persona de inmediato. Los logs de diálogo alimentan el FAQ del sitio e ideas de keywords para ads.",
      ],
    },
    {
      title: "Chat de búsqueda vs widget on-site",
      level: 2,
      paras: [
        "Tú controlas el widget on-site: diseño, flujos, A/B. El canal de Yandex añade un punto de entrada pero depende de reglas de plataforma y moderación.",
        "Mejor base: formulario más messenger o widget en el sitio; chat de búsqueda solo si el producto está disponible y el equipo puede responder. No spawnes cinco chats con colas distintas y sin CRM compartido.",
      ],
      links: [
        {
          label: "CRM",
          href: "/es/blog/crm/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Chat con una empresa en Yandex es un canal de diálogo del ecosistema de búsqueda — no un icono más por moda.",
        "Conecta solo con un proceso de respuesta y una revisión del estado actual del producto; un anuncio fino de 2018 solo no es un setup.",
      ],
    },
  ],
  closing: [
    "Revisa Yandex Help actual para ver si el chat con una empresa está disponible para tu tipo de sitio, asigna operador y CRM — y solo entonces embebe el chat ID en tu CMS o vía API.",
  ],
  related: [
    "formy-zahvata",
    "forma-obratnoy-svyazi",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "crm",
    "trafik-bez-lidov",
  ],
};

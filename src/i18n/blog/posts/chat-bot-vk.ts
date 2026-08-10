import type { BlogPost } from "../../../data/blog";

/** EN overlay for chat-bot-vk — same structure as RU JSON. */
export const chatBotVkEn: BlogPost = {
  slug: "chat-bot-vk",
  title: "VK chat bot: why you need one and how to launch it",
  date: "2018-12-19",
  category: "SMM",
  cover: "/images/blog/chat-bot-vk/cover-en.webp",
  excerpt:
    "How a chat bot helps in VK community messages: FAQ, leads, catalog — when a builder is enough, when you need a developer, and why a bot with no exit to a human operator drives people away.",
  lead: [
    "A VK chat bot answers community messages by script: greeting, FAQ, lead capture, service matching. It isn’t a live manager — it’s automation for repetitive dialogues.",
    "Below: who benefits, simple and complex scenarios, and how to launch without clinging to outdated 2018 builder screenshots. We don’t recommend spam blasts from a bot.",
  ],
  faq: [
    {
      q: "How does a VK bot differ from a Telegram bot?",
      a: "The logic is similar (commands, buttons, leads); the platform and API differ. On VK the bot lives in community messages; on Telegram it’s a separate @bot account.",
    },
    {
      q: "Does a small business need a bot?",
      a: "If questions are few and varied, a human often suffices. A bot pays off with a stream of repetitive asks: delivery, booking, order status.",
    },
    {
      q: "Should I use a builder or hire a developer?",
      a: "FAQ and a simple funnel — a builder. CRM, payments, or complex logic — custom development or a solid integration.",
    },
    {
      q: "Can I blast ads to all followers through the bot?",
      a: "Only under VK rules and with consent. Mass spam leads to reports and limits.",
    },
    {
      q: "Is a “live operator” button required?",
      a: "Almost always. Otherwise a hard question hits a menu wall and the customer leaves.",
    },
  ],
  sections: [
    {
      title: "What a VK bot can do",
      level: 2,
      paras: [
        "Simple bots run on keywords and buttons: match a phrase — return a prepared reply. Complex ones connect AI, external databases, and CRM — but cost and support go up.",
        "Typical jobs: FAQ answers, order and lead intake, service navigation, status notifications.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "delivery and service booking",
            "stores with recurring questions",
            "support with a large FAQ",
            "not a micro-business with one-off unique talks",
          ],
        },
      ],
    },
    {
      title: "Why businesses automate",
      level: 2,
      paras: [
        "It takes repetitive load off operators and speeds the first reply at night and during peaks. A manager steps in when the script can’t handle the case.",
        "We don’t treat savings figures from 2018–2019 case studies as a guarantee. Watch your FAQ share and response time before and after the bot.",
      ],
      links: [
        {
          label: "VK messaging and mailings",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Scenarios to start with",
      level: 2,
      paras: [
        "Greeting + menu: Price / Delivery / Lead / Operator.",
        "FAQ: address, timing, payment, returns — short answers and a link to a post or site.",
        "Lead: name, contact, need → into a manager chat or CRM.",
        "Catalog / match: two or three clarifying questions and a service card.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Don’t promise in the bot what isn’t in stock or on the site. A mismatch kills trust faster than a slow human reply.",
        },
      ],
    },
    {
      title: "How to approach building it",
      level: 2,
      paras: [
        "List about 20 frequent messages from chat history — that’s the script core. Draw a tree: start → branches → exit to an operator.",
        "Connect the bot to the community via the current VK account and your chosen builder or API. Service UIs have changed: follow platform help, not 2018 screenshots.",
        "Write keyword variants (“price,” “how much,” “pricing”). Add a reaction to unknowns: “Didn’t catch that — talk to an operator” plus a button.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "goals and KPIs (auto-reply share, leads)",
            "menu and FAQ aligned with the offer",
            "handoff to a human",
            "test on 10–20 real phrasings",
            "review misunderstood phrases weekly",
          ],
        },
      ],
      links: [
        {
          label: "VK community greeting",
          href: "/en/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Limits and risks",
      level: 2,
      paras: [
        "A bot handles complex and emotional cases poorly. A rigid menu with no exit annoys people.",
        "Don’t store unnecessary personal data. Don’t use the bot as a channel for gray “blast everyone” mailings.",
        "Builders and pricing change — budget for maintenance, not set-and-forget for years.",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "A VK chat bot automates typical community dialogues — it doesn’t replace service.",
        "Start with FAQ and leads, and always give an exit to a human.",
        "Measure value by leads and support load — not by how trendy the bot looks.",
      ],
    },
  ],
  closing: [
    "Collect the ten most common questions from community messages and cover them with a bot menu plus an operator button — faster than debating advanced AI.",
  ],
  related: [
    "telegram-boty",
    "rassylka-vk",
    "privetstvie-vk",
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "instagram-direct",
  ],
};

/** ES overlay for chat-bot-vk — same structure as RU JSON. */
export const chatBotVkEs: BlogPost = {
  slug: "chat-bot-vk",
  title: "Chat bot de VK: para qué sirve y cómo lanzarlo",
  date: "2018-12-19",
  category: "SMM",
  cover: "/images/blog/chat-bot-vk/cover-es.webp",
  excerpt:
    "Cómo ayuda un chat bot en los mensajes de una comunidad VK: FAQ, leads, catálogo — cuándo basta un builder, cuándo hace falta un developer y por qué un bot sin salida a un operador humano ahuyenta a la gente.",
  lead: [
    "Un chat bot de VK responde mensajes de la comunidad por script: saludo, FAQ, captura de leads, matching de servicio. No es un manager en vivo — es automatización de diálogos repetitivos.",
    "Abajo: a quién le sirve, escenarios simples y complejos, y cómo lanzar sin aferrarse a capturas de builders de 2018. No recomendamos blasts de spam desde un bot.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un bot de VK de uno de Telegram?",
      a: "La lógica es similar (comandos, botones, leads); cambian la plataforma y la API. En VK el bot vive en mensajes de la comunidad; en Telegram es una cuenta @bot aparte.",
    },
    {
      q: "¿Un pequeño negocio necesita un bot?",
      a: "Si las preguntas son pocas y variadas, a menudo basta un humano. El bot se paga con un flujo de asks repetitivos: entrega, reserva, estado del pedido.",
    },
    {
      q: "¿Usar un builder o contratar un developer?",
      a: "FAQ y un funnel simple — builder. CRM, pagos o lógica compleja — desarrollo a medida o una integración sólida.",
    },
    {
      q: "¿Puedo bombardear ads a todos los followers vía bot?",
      a: "Solo bajo las reglas de VK y con consentimiento. El spam masivo trae reports y límites.",
    },
    {
      q: "¿Hace falta el botón de «operador en vivo»?",
      a: "Casi siempre. Si no, una pregunta dura choca con un muro de menú y el cliente se va.",
    },
  ],
  sections: [
    {
      title: "Qué puede hacer un bot de VK",
      level: 2,
      paras: [
        "Los bots simples van por keywords y botones: matchea una frase — devuelve una reply preparada. Los complejos conectan AI, bases externas y CRM — pero suben coste y soporte.",
        "Trabajos típicos: respuestas FAQ, intake de pedidos y leads, navegación de servicios, notificaciones de estado.",
      ],
      lists: [
        {
          intro: "Especialmente útil para:",
          items: [
            "delivery y reserva de servicios",
            "tiendas con preguntas recurrentes",
            "soporte con un FAQ grande",
            "no un micro-negocio con charlas únicas puntuales",
          ],
        },
      ],
    },
    {
      title: "Por qué el negocio automatiza",
      level: 2,
      paras: [
        "Quita carga repetitiva a los operadores y acelera la primera reply de noche y en picos. Un manager entra cuando el script no puede con el caso.",
        "No tratamos las cifras de ahorro de casos 2018–2019 como garantía. Mira tu share de FAQ y el tiempo de respuesta antes y después del bot.",
      ],
      links: [
        {
          label: "Mensajería y mailings en VK",
          href: "/es/blog/rassylka-vk/",
        },
        {
          label: "Bots de Telegram",
          href: "/es/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Escenarios para empezar",
      level: 2,
      paras: [
        "Saludo + menú: Precio / Entrega / Lead / Operador.",
        "FAQ: dirección, timing, pago, devoluciones — respuestas cortas y enlace a un post o al sitio.",
        "Lead: nombre, contacto, necesidad → a un chat de manager o CRM.",
        "Catálogo / match: dos o tres preguntas aclaratorias y una ficha de servicio.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No prometas en el bot lo que no hay en stock o en el sitio. El desajuste mata la confianza más rápido que una reply humana lenta.",
        },
      ],
    },
    {
      title: "Cómo plantear la construcción",
      level: 2,
      paras: [
        "Lista unos 20 mensajes frecuentes del historial del chat — ese es el núcleo del script. Dibuja un árbol: inicio → ramas → salida a un operador.",
        "Conecta el bot a la comunidad con la cuenta actual de VK y el builder o API que elijas. Las UIs de los servicios han cambiado: sigue la ayuda de la plataforma, no capturas de 2018.",
        "Escribe variantes de keywords («precio», «cuánto», «tarifas»). Añade reacción a desconocidos: «No lo pillé — habla con un operador» más un botón.",
      ],
      lists: [
        {
          intro: "Checklist de lanzamiento:",
          items: [
            "objetivos y KPIs (share de auto-reply, leads)",
            "menú y FAQ alineados con la oferta",
            "handoff a un humano",
            "test con 10–20 frases reales",
            "revisar semanalmente las frases malentendidas",
          ],
        },
      ],
      links: [
        {
          label: "Saludo de comunidad VK",
          href: "/es/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Límites y riesgos",
      level: 2,
      paras: [
        "Un bot lleva mal los casos complejos y emocionales. Un menú rígido sin salida irrita.",
        "No guardes datos personales innecesarios. No uses el bot como canal de mailings grises «a todos».",
        "Builders y precios cambian — presupuesta mantenimiento, no set-and-forget por años.",
      ],
    },
    {
      title: "Conclusiones clave",
      level: 2,
      paras: [
        "Un chat bot de VK automatiza diálogos típicos de la comunidad — no sustituye el servicio.",
        "Empieza con FAQ y leads, y da siempre salida a un humano.",
        "Mide el valor por leads y carga de soporte — no por lo trendy que se vea el bot.",
      ],
    },
  ],
  closing: [
    "Junta las diez preguntas más frecuentes de los mensajes de la comunidad y cúbrelas con un menú de bot más botón de operador — más rápido que debatir AI avanzada.",
  ],
  related: [
    "telegram-boty",
    "rassylka-vk",
    "privetstvie-vk",
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "instagram-direct",
  ],
};

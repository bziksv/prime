import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtovoronka-vk — same structure as RU JSON. */
export const avtovoronkaVkEn: BlogPost = {
  slug: "avtovoronka-vk",
  title: "VKontakte autofunnel: community messages and a sales scenario",
  date: "2020-04-15",
  category: "Content marketing",
  cover: "/images/blog/avtovoronka-vk/cover-en.webp",
  excerpt:
    "How to build a VKontakte autofunnel: community, opt-in messaging, lead magnet, and a touch chain — without outdated service catalogs or cold spam.",
  lead: [
    "A VKontakte autofunnel is a sequence of community messages and touches: meet the product → warm-up → offer → upsell. The scenario is written in advance; a manager joins on complex branches.",
    "General funnel logic is in a separate article. Here: VK specifics — message opt-in, bot/broadcast, personalization. Old “70–80% open rate” figures aren’t universal — use your own stats.",
  ],
  faq: [
    {
      q: "How is it different from an email funnel?",
      a: "The channel is VK community messages (after consent). Notifications are often easier to notice, but platform rules and limits differ.",
    },
    {
      q: "Can you message all friends and wall subscribers?",
      a: "Cold mass spam leads to complaints. You need community message opt-in or a dialogue the person started.",
    },
    {
      q: "Is a bot required?",
      a: "Not always. For FAQ and a simple funnel a bot helps; for rare complex sales a human + templates can be enough.",
    },
    {
      q: "Which service should you pick?",
      a: "Official apps/builders from the VK catalog and current ToS. We don’t copy 2019–2020 pricing catalogs — brands and prices age out.",
    },
    {
      q: "Which businesses fit best?",
      a: "Info products, services, B2B, and long cycles. Broad e-com “whole catalog in one chain” is usually weaker.",
    },
    {
      q: "Do you need a tripwire?",
      a: "Useful for warm-up, not mandatory. The key is linking the lead magnet to the core offer.",
    },
    {
      q: "How do you measure?",
      a: "Message opt-ins, open/click if available, step→step conversion, lead quality — not only post reach.",
    },
  ],
  sections: [
    {
      title: "Why a funnel in VK",
      level: 2,
      paras: [
        "A wall post is easy to miss. A notified message is a channel for people who opted in: warm-up, offer, order status.",
        "Automation cuts load on typical replies. Fully “no humans” doesn’t fit every niche — expensive deals need dialogue.",
      ],
      links: [
        {
          label: "Autofunnel: basics",
          href: "/en/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Chain elements",
      level: 2,
      paras: [
        "Lead magnet (value for message opt-in) → entry paid / soft-paid offer → core product → upsell. Between them — useful content and honest bonuses, not pressure.",
      ],
      lists: [
        {
          intro: "What to strengthen with VK attachments:",
          items: [
            "product photo/video",
            "a document or guide",
            "a link to a landing/product",
            "quick-reply buttons in the bot",
          ],
        },
      ],
    },
    {
      title: "How to build it",
      level: 2,
      paras: [
        "Community with a clear offer and content → product matrix and step texts → message opt-in (widget/bot) → broadcast or bot scenario → traffic (ads, posts, lead forms) → measure and revise.",
        "A retarget reminder “opened, didn’t click” fits at moderate frequency. Spamming every 20 minutes leads to opt-outs.",
      ],
      links: [
        {
          label: "VK messaging legally",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "VK chatbot",
          href: "/en/blog/chat-bot-vk/",
        },
      ],
    },
    {
      title: "Tools without a catalog",
      level: 2,
      paras: [
        "Pick a solution for volume and integrations (CRM, UTM, segments), checking current VK limits and rules.",
        "We don’t treat unofficial “senders” for cold chats as a how-to — ban zone. More in the messaging article.",
      ],
      notes: [
        {
          title: "Personalization",
          kind: "tip",
          text: "Name and city from the profile help if it doesn’t feel like spam-script. Text value beats emoji “for creativity.”",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Consent and offer first, automation second.",
        "Step metrics beat someone else’s open-rate %.",
        "A bot with no path to an operator annoys on hard questions.",
      ],
    },
  ],
  closing: [
    "Check: does the community have a clear message entry and a 3–5 step chain with measurement — if not, fixing that beats switching “another broadcast tool.”",
  ],
  related: [
    "avtovoronka",
    "rassylka-vk",
    "chat-bot-vk",
    "privetstvie-vk",
    "soobshhestva-vk",
    "formy-zahvata",
  ],
};

/** ES overlay for avtovoronka-vk — same structure as RU JSON / EN. */
export const avtovoronkaVkEs: BlogPost = {
  slug: "avtovoronka-vk",
  title: "Autofunnel en VKontakte: mensajes de comunidad y escenario de ventas",
  date: "2020-04-15",
  category: "Content marketing",
  cover: "/images/blog/avtovoronka-vk/cover.webp",
  excerpt:
    "Cómo armar un autofunnel en VKontakte: comunidad, mensajería con opt-in, lead magnet y cadena de toques — sin catálogos de servicios obsoletos ni spam frío.",
  lead: [
    "Un autofunnel en VKontakte es una secuencia de mensajes de comunidad y toques: conocer el producto → calentamiento → oferta → upsell. El escenario se escribe de antemano; un manager entra en las ramas complejas.",
    "La lógica general del embudo está en un artículo aparte. Aquí: especificidades de VK — opt-in a mensajes, bot/broadcast, personalización. Las cifras antiguas de «70–80% de open rate» no son universales — usa tus propias stats.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de un embudo de email?",
      a: "El canal son mensajes de comunidad VK (tras el consentimiento). Las notificaciones a menudo se notan más fácil, pero las reglas y límites de la plataforma difieren.",
    },
    {
      q: "¿Se puede escribir a todos los amigos y suscriptores del muro?",
      a: "El spam masivo en frío lleva a quejas. Hace falta opt-in a mensajes de la comunidad o un diálogo que la persona inició.",
    },
    {
      q: "¿Es obligatorio un bot?",
      a: "No siempre. Para FAQ y un embudo simple un bot ayuda; para ventas complejas y raras pueden bastar un humano + plantillas.",
    },
    {
      q: "¿Qué servicio elegir?",
      a: "Apps/builders oficiales del catálogo de VK y el ToS actual. No copiamos catálogos de precios de 2019–2020 — marcas y precios envejecen.",
    },
    {
      q: "¿Qué negocios encajan mejor?",
      a: "Productos de info, servicios, B2B y ciclos largos. El e-com amplio «todo el catálogo en una cadena» suele ser más débil.",
    },
    {
      q: "¿Hace falta un tripwire?",
      a: "Útil para calentar, no obligatorio. La clave es vincular el lead magnet a la oferta núcleo.",
    },
    {
      q: "¿Cómo mides?",
      a: "Opt-ins a mensajes, open/click si están disponibles, conversión paso a paso, calidad del lead — no solo el alcance del post.",
    },
  ],
  sections: [
    {
      title: "Por qué un embudo en VK",
      level: 2,
      paras: [
        "Un post del muro es fácil de perder. Un mensaje notificado es un canal para quien optó: calentamiento, oferta, estado del pedido.",
        "La automatización baja la carga en respuestas típicas. Del todo «sin humanos» no encaja en todos los nichos — los deals caros necesitan diálogo.",
      ],
      links: [
        {
          label: "Autofunnel: básicos",
          href: "/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Elementos de la cadena",
      level: 2,
      paras: [
        "Lead magnet (valor a cambio del opt-in a mensajes) → oferta de entrada de pago / soft-paid → producto núcleo → upsell. Entre ellos — contenido útil y bonuses honestos, no presión.",
      ],
      lists: [
        {
          intro: "Qué reforzar con adjuntos de VK:",
          items: [
            "foto/vídeo del producto",
            "un documento o guía",
            "un enlace a un landing/producto",
            "botones de respuesta rápida en el bot",
          ],
        },
      ],
    },
    {
      title: "Cómo armarlo",
      level: 2,
      paras: [
        "Comunidad con oferta y contenido claros → matriz de producto y textos por paso → opt-in a mensajes (widget/bot) → broadcast o escenario de bot → tráfico (ads, posts, formularios de lead) → medir y revisar.",
        "Un recordatorio de retarget «abrió, no hizo clic» encaja a frecuencia moderada. Spamear cada 20 minutos lleva a opt-outs.",
      ],
      links: [
        {
          label: "Mensajería en VK legalmente",
          href: "/es/blog/rassylka-vk/",
        },
        {
          label: "Chatbot de VK",
          href: "/blog/chat-bot-vk/",
        },
      ],
    },
    {
      title: "Herramientas sin catálogo",
      level: 2,
      paras: [
        "Elige una solución por volumen e integraciones (CRM, UTM, segmentos), comprobando límites y reglas actuales de VK.",
        "No tratamos «senders» no oficiales para chats fríos como how-to — zona de ban. Más en el artículo de mensajería.",
      ],
      notes: [
        {
          title: "Personalización",
          kind: "tip",
          text: "Nombre y ciudad del perfil ayudan si no se siente como script de spam. El valor del texto gana a emoji «por creatividad».",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Consentimiento y oferta primero, automatización después.",
        "Las métricas por paso ganan al % de open rate de otro.",
        "Un bot sin camino a un operador molesta en preguntas duras.",
      ],
    },
  ],
  closing: [
    "Comprueba: ¿la comunidad tiene una entrada clara a mensajes y una cadena de 3–5 pasos con medición? Si no, arreglar eso gana a cambiar «otra herramienta de broadcast».",
  ],
  related: [
    "rassylka-vk",
    "formy-zahvata",
    "avtovoronka-instagram",
    "raskrutka-gruppy-vk",
    "reklama-v-pablikah-vk",
    "kommentarii-v-pablike-vk",
  ],
};

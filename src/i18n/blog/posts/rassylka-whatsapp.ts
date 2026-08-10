import type { BlogPost } from "../../../data/blog";

/** EN overlay for rassylka-whatsapp — same structure as RU JSON. */
export const rassylkaWhatsappEn: BlogPost = {
  slug: "rassylka-whatsapp",
  title: "WhatsApp broadcasts: Business API, consent, and no spam",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/rassylka-whatsapp/cover-en.webp",
  excerpt:
    "How a business can message on WhatsApp legally: manual broadcast lists, official Business API, templates and sessions — without bought number lists or gray “agency” senders. Meta note is on the page.",
  lead: [
    "WhatsApp for business is a channel for service and marketing messages to people who agreed to hear from you. Mass spam to strangers breaks trust and hits platform rules.",
    "Below: when a manual app broadcast is enough, why Business API and templates matter, and which topics you must not promote. Don’t treat “billions of users” or 2022 menu screenshots as fixed norms: check current WhatsApp Business rules. Meta note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can I advertise to everyone in the phone book?",
      a: "Only if people expect messages from you and it doesn’t break platform rules or advertising/personal-data law. Cold spam to other people’s contacts leads to blocks and complaints.",
    },
    {
      q: "How is Business API better than a manual broadcast?",
      a: "Scale, templates, CRM integrations, reporting. A manual list suits small volume to your own warm contacts.",
    },
    {
      q: "Do I need business verification?",
      a: "For full API work and profile trust — follow current WhatsApp/Meta requirements. Without confirmation some options stay unavailable.",
    },
    {
      q: "Should I buy a “number base” from an agency?",
      a: "Not as a strategy. Opaque lists without consent = spam, complaints, and brand risk. Work with your own opt-in base.",
    },
    {
      q: "How is WhatsApp different from SMS?",
      a: "Different channel and rules. Consent and usefulness logic is the same; choose where the customer actually replies. See also the SMS piece.",
    },
  ],
  sections: [
    {
      title: "When WhatsApp fits",
      level: 2,
      paras: [
        "The channel is strong for order status, appointment reminders, support, and short offers to a warm base. People read messages fast — and block pushy spam just as fast.",
        "It doesn’t replace a site, email, or search ads. It’s a messenger touch next to other channels.",
      ],
      links: [
        {
          label: "SMS broadcasts",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "VK community broadcasts",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Manual broadcast from the app",
      level: 2,
      paras: [
        "In WhatsApp you can build a recipient list from your contacts and send one message to the group (broadcast UI wording depends on the app version).",
        "Plus — control and no “agency” layer. Downside — manual work, limited to your contact book, harder scale and analytics.",
        "Forwarding limits and anti-spam mechanics change: don’t build a process on bypassing restrictions.",
      ],
      lists: [
        {
          intro: "Minimum before send:",
          items: [
            "recipients expect messages from the brand",
            "copy is short, with value or a status update",
            "there is a way to opt out / not write again after a block",
            "don’t mix personal chats and an ad stream without a clear label",
          ],
        },
      ],
    },
    {
      title: "Business API and templates",
      level: 2,
      paras: [
        "The official business path is WhatsApp Business Platform / API via vetted providers: message templates, dialogue sessions, catalogs, CRM linking.",
        "If the customer wrote first, a free-form reply window usually opens for a limited time (check exact rules in Help). To start a dialogue yourself, approved templates are usually required.",
        "Business registration and verification, a number not casually mixed with a personal account — part of access. Verification details and profile badges have changed: follow current Meta/WhatsApp Help, not a 2022 guide.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "We don’t describe gray senders or “bases from a telecom payment.” The legal path is consent, your own base, official API, or manual work with warm contacts.",
        },
      ],
    },
    {
      title: "What to write — and what to avoid",
      level: 2,
      paras: [
        "Order status, visit reminders, booking confirmation, and a useful FAQ bot with a human handoff work well.",
        "Threats, deception, and pushy ads without context land badly. Some niches (prescription drugs, alcohol, gambling, and others) are limited by WhatsApp advertising rules — check the current prohibited list.",
        "Tone: respectful, without “buy now or else.” A bot fits routine questions; complex cases go to a person.",
      ],
      links: [
        {
          label: "VK chatbots",
          href: "/en/blog/chat-bot-vk/",
        },
        {
          label: "Trigger campaigns",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Agencies and vendors",
      level: 2,
      paras: [
        "A vendor can help with templates, API integration, and reporting. Ask: where the base comes from, whether there is consent, which API provider, who owns the number and templates after the contract.",
        "A “ready base of millions of numbers” is a red flag. Check reputation, the contract, and a pilot on your own opt-in sample.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "WhatsApp runs on consent and usefulness — not cold spam.",
        "Scale — through official Business API and templates; small volume — manual broadcast to your contacts.",
        "Rules and UI change: check platform Help before launch.",
      ],
    },
  ],
  closing: [
    "Build an opt-in client list, pick one service template (order status or reminder), and run a pilot through the official path — more honest than buying someone else’s “WhatsApp base.”",
  ],
  related: [
    "sms-rassylka",
    "rassylka-vk",
    "triggernye-rassylki",
    "chat-bot-vk",
    "spam-vk",
    "baza-email-socseti",
  ],
};

/** ES overlay for rassylka-whatsapp — same structure as RU JSON / EN. */
export const rassylkaWhatsappEs: BlogPost = {
  slug: "rassylka-whatsapp",
  title: "Broadcasts de WhatsApp: Business API, consentimiento y sin spam",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/rassylka-whatsapp/cover-es.webp",
  excerpt:
    "Cómo puede un negocio escribir en WhatsApp de forma legal: listas de broadcast manuales, Business API oficial, plantillas y sesiones — sin listas de números compradas ni remitentes «de agencia» grises. Nota Meta en la página.",
  lead: [
    "WhatsApp para negocio es un canal de mensajes de servicio y marketing a gente que aceptó oírte. El spam masivo a desconocidos rompe la confianza y golpea las reglas de la plataforma.",
    "Abajo: cuándo basta un broadcast manual desde la app, por qué importan Business API y plantillas, y qué temas no debes promocionar. No trates «miles de millones de usuarios» ni screenshots de menú de 2022 como normas fijas: revisa las reglas actuales de WhatsApp Business. Nota Meta en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. WhatsApp* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Puedo anunciar a todos en la agenda del teléfono?",
      a: "Solo si la gente espera mensajes tuyos y no rompe las reglas de la plataforma ni la ley de publicidad/datos personales. Spam frío a contactos ajenos lleva a bloqueos y quejas.",
    },
    {
      q: "¿En qué es mejor Business API que un broadcast manual?",
      a: "Escala, plantillas, integraciones CRM, reporting. Una lista manual encaja con volumen pequeño a tus propios contactos cálidos.",
    },
    {
      q: "¿Hace falta verificación business?",
      a: "Para trabajo API completo y confianza del perfil — sigue los requisitos actuales de WhatsApp/Meta. Sin confirmación algunas opciones quedan no disponibles.",
    },
    {
      q: "¿Debo comprar una «base de números» a una agencia?",
      a: "No como estrategia. Listas opacas sin consentimiento = spam, quejas y riesgo de marca. Trabaja con tu propia base opt-in.",
    },
    {
      q: "¿En qué se diferencia WhatsApp de SMS?",
      a: "Canal y reglas distintos. La lógica de consentimiento y utilidad es la misma; elige dónde responde de verdad el cliente. Ver también la pieza de SMS.",
    },
  ],
  sections: [
    {
      title: "Cuándo encaja WhatsApp",
      level: 2,
      paras: [
        "El canal es fuerte para estado de pedido, recordatorios de cita, soporte y ofertas cortas a una base cálida. La gente lee mensajes rápido — y bloquea el spam insistente igual de rápido.",
        "No sustituye un sitio, email o ads de búsqueda. Es un toque de messenger junto a otros canales.",
      ],
      links: [
        {
          label: "Broadcasts SMS",
          href: "/blog/sms-rassylka/",
        },
        {
          label: "Broadcasts de comunidad VK",
          href: "/es/blog/rassylka-vk/",
        },
      ],
    },
    {
      title: "Broadcast manual desde la app",
      level: 2,
      paras: [
        "En WhatsApp puedes armar una lista de destinatarios desde tus contactos y enviar un mensaje al grupo (el wording de la UI de broadcast depende de la versión de la app).",
        "Plus — control y sin capa de «agencia». Downside — trabajo manual, limitado a tu agenda, escala y analytics más difíciles.",
        "Los límites de forward y las mecánicas anti-spam cambian: no armes un proceso sobre saltar restricciones.",
      ],
      lists: [
        {
          intro: "Mínimo antes de enviar:",
          items: [
            "los destinatarios esperan mensajes de la marca",
            "el copy es corto, con valor o un update de estado",
            "hay forma de opt-out / no escribir otra vez tras un bloqueo",
            "no mezcles chats personales y un stream de ads sin etiqueta clara",
          ],
        },
      ],
    },
    {
      title: "Business API y plantillas",
      level: 2,
      paras: [
        "El camino business oficial es WhatsApp Business Platform / API vía providers validados: plantillas de mensaje, sesiones de diálogo, catálogos, enlace a CRM.",
        "Si el cliente escribió primero, suele abrirse una ventana de respuesta en texto libre por un tiempo limitado (revisa las reglas exactas en Help). Para iniciar el diálogo tú, suelen hacer falta plantillas aprobadas.",
        "Registro y verificación business, un número no mezclado a la ligera con una cuenta personal — parte del acceso. Detalles de verificación y badges del perfil han cambiado: sigue el Help actual de Meta/WhatsApp, no una guía de 2022.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No describimos remitentes grises ni «bases de un pago de telecom». El camino legal es consentimiento, tu propia base, API oficial o trabajo manual con contactos cálidos.",
        },
      ],
    },
    {
      title: "Qué escribir — y qué evitar",
      level: 2,
      paras: [
        "Estado de pedido, recordatorios de visita, confirmación de reserva y un bot FAQ útil con handoff a humano funcionan bien.",
        "Amenazas, engaño y ads insistentes sin contexto aterrizan mal. Algunos nichos (medicamentos con receta, alcohol, gambling y otros) están limitados por las reglas de publicidad de WhatsApp — revisa la lista prohibida actual.",
        "Tono: respetuoso, sin «compra ya o si no». Un bot encaja en preguntas rutinarias; los casos complejos van a una persona.",
      ],
      links: [
        {
          label: "Chatbots VK",
          href: "/blog/chat-bot-vk/",
        },
        {
          label: "Campañas triggered",
          href: "/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Agencias y vendors",
      level: 2,
      paras: [
        "Un vendor puede ayudar con plantillas, integración API y reporting. Pregunta: de dónde sale la base, si hay consentimiento, qué provider de API, quién es dueño del número y las plantillas tras el contrato.",
        "Una «base lista de millones de números» es bandera roja. Revisa reputación, contrato y un piloto en tu propia muestra opt-in.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "WhatsApp corre sobre consentimiento y utilidad — no spam frío.",
        "Escala — vía Business API oficial y plantillas; volumen pequeño — broadcast manual a tus contactos.",
        "Reglas y UI cambian: revisa el Help de la plataforma antes del lanzamiento.",
      ],
    },
  ],
  closing: [
    "Arma una lista de clientes con opt-in, elige una plantilla de servicio (estado de pedido o recordatorio) y corre un piloto por el camino oficial — más honesto que comprar la «base WhatsApp» de otro.",
  ],
  related: [
    "rassylka-vk",
    "sms-rassylka",
    "triggernye-rassylki",
    "chat-bot-vk",
    "spam-vk",
    "baza-email-socseti",
  ],
};

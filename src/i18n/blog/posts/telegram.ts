import type { BlogPost } from "../../../data/blog";

/** EN overlay for telegram — same structure as RU JSON. */
export const telegramEn: BlogPost = {
  slug: "telegram",
  title: "Telegram: features, pros, and how it compares to other messengers",
  date: "2021-07-27",
  category: "SMM",
  cover: "/images/blog/telegram/cover-en.webp",
  excerpt:
    "What Telegram can do: chats, channels, bots, cloud, and security. Pros and cons, comparison with other messengers, and why a business channel helps — without outdated “forever” stats.",
  lead: [
    "Telegram is a cross-platform messenger: personal and group chats, channels, bots, large files, and sync between phone and desktop. For marketing it’s also a media surface with direct delivery into notifications.",
    "Below: purpose, strengths and weaknesses, how it compares with other messengers, and business scenarios. Limits and features update — check current numbers in Telegram Help. How to run a channel from scratch is in a separate article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a channel different from a group?",
      a: "A channel is a feed from author to subscribers. A group is participant chat. Often you run a channel + discussion chat.",
    },
    {
      q: "Does a business need Telegram if it already has a site?",
      a: "As an extra channel: news, support, warm-up, messages to people who opted in. It doesn’t replace the site and SEO — it adds communication.",
    },
    {
      q: "Are secret chats the default for every dialogue?",
      a: "No. Regular cloud chats sync across devices. Secret chats are a separate mode focused on local encryption and auto-delete; details are in the client Help.",
    },
    {
      q: "Is Telegram free?",
      a: "Basic use is free. Paid options (including Premium) and ad formats appear and change — don’t treat 2017–2021 guides as a price list.",
    },
    {
      q: "Where should a channel start?",
      a: "Setup, rubrics, starter posts, and a traffic plan. A deeper walkthrough is in the channel launch article.",
    },
  ],
  sections: [
    {
      title: "Purpose and core features",
      level: 2,
      paras: [
        "Sign-up with a phone number; clients for mobile OSes, desktop, and web. Communication: text, voice, video calls, groups and supergroups, username without showing the number in every chat.",
        "Content strengths: channels, bots, forwarding, hashtags in search, cloud media storage within the service. File-size and group-member limits have changed — check current ones.",
      ],
      lists: [
        {
          intro: "Typical set:",
          items: [
            "personal and group chats",
            "channels as media",
            "bots and mini apps",
            "stickers, voice notes, large attachments",
            "history sync across devices",
          ],
        },
      ],
    },
    {
      title: "Pros and cons",
      level: 2,
      paras: [
        "Pros: speed, solid desktop, flexibility for media and automation, active feature development.",
        "Cons: in-app channel search is weaker than social networks; public content moderation sits with authors and the platform; support and UI were historically English-first (better now, nuances remain); the sign-up number is a sensitive account-security point.",
      ],
      lists: [
        {
          intro: "Worth remembering:",
          items: [
            "two-factor auth and the sessions list",
            "caution with unknown bots and files",
            "a public channel ≠ full anonymity",
          ],
        },
      ],
    },
    {
      title: "Comparison with other messengers",
      level: 2,
      paras: [
        "WhatsApp* and similar messengers are often stronger on contact network: higher chance the other person is already there. Telegram is more often chosen for desktop, channels, bots, and file work. Viber and others have their niches in calls and communities.",
        "The comparison below is a scenario guide, not a forever ranking. Interfaces and limits change; the legal status of some products is in the notice at the top of the article.",
      ],
      tables: [
        {
          caption: "Rough scenario comparison",
          headers: ["Scenario", "Telegram", "WhatsApp* / peers"],
          rows: [
            ["Channel / media", "Strong side", "More statuses, less often a full channel"],
            ["Bots and automation", "Broad ecosystem", "Depends on the platform"],
            ["Desktop without the phone nearby", "Full client", "Often tied to the phone"],
            ["“Everyone already has it” reach", "Lower in some audiences", "Often higher"],
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "This material describes platform features. Choosing a messenger for business is a decision that accounts for audience, policy, and law in your jurisdiction.",
        },
      ],
    },
    {
      title: "Channels, bots, and business",
      level: 2,
      paras: [
        "A channel is a news and offer storefront with push. Bots — leads, FAQ, order status, simple funnels. Growing subscribers almost always needs external sources and ads in related channels.",
        "Don’t mix up “we have a messenger” with a marketing strategy: you need rubrics, tone, measurement, and dialogue support.",
      ],
      lists: [
        {
          intro: "Business scenarios:",
          items: [
            "company and product news",
            "support and order status",
            "warm-up before a launch",
            "closed content for clients",
            "paid placements and partnerships with other channels",
          ],
        },
      ],
      links: [
        {
          label: "Telegram channel from scratch",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
  ],
};

/** ES overlay for telegram — same structure as RU JSON / EN. */
export const telegramEs: BlogPost = {
  slug: "telegram",
  title: "Telegram: funciones, pros y cómo se compara con otros messengers",
  date: "2021-07-27",
  category: "SMM",
  cover: "/images/blog/telegram/cover-es.webp",
  excerpt:
    "Qué puede hacer Telegram: chats, canales, bots, nube y seguridad. Pros y contras, comparación con otros messengers y por qué un canal de negocio ayuda — sin stats «para siempre» obsoletas.",
  lead: [
    "Telegram es un messenger multiplataforma: chats personales y de grupo, canales, bots, archivos grandes y sync entre móvil y escritorio. Para marketing también es una superficie media con entrega directa a notificaciones.",
    "Abajo: propósito, fortalezas y debilidades, cómo se compara con otros messengers y escenarios de negocio. Límites y funciones se actualizan — revisa cifras actuales en la Help de Telegram. Cómo llevar un canal desde cero está en un artículo aparte.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. WhatsApp* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un canal de un grupo?",
      a: "Un canal es un feed del autor a suscriptores. Un grupo es chat entre participantes. A menudo se lleva canal + chat de discusión.",
    },
    {
      q: "¿Un negocio necesita Telegram si ya tiene sitio?",
      a: "Como canal extra: noticias, soporte, calentamiento, mensajes a quien optó in. No sustituye el sitio ni el SEO — añade comunicación.",
    },
    {
      q: "¿Los secret chats son el default de cada diálogo?",
      a: "No. Los chats cloud normales se sincronizan entre dispositivos. Los secret chats son un modo aparte centrado en cifrado local y auto-borrado; los detalles están en la Help del cliente.",
    },
    {
      q: "¿Telegram es gratis?",
      a: "El uso básico es gratis. Aparecen y cambian opciones de pago (incluido Premium) y formatos de ads — no trates las guías 2017–2021 como lista de precios.",
    },
    {
      q: "¿Por dónde debe empezar un canal?",
      a: "Setup, rúbricas, posts de arranque y un plan de tráfico. Un recorrido más profundo está en el artículo de lanzamiento del canal.",
    },
  ],
  sections: [
    {
      title: "Propósito y funciones centrales",
      level: 2,
      paras: [
        "Registro con número de teléfono; clientes para SO móviles, escritorio y web. Comunicación: texto, voz, videollamadas, grupos y supergroups, username sin mostrar el número en cada chat.",
        "Fortalezas de contenido: canales, bots, reenvíos, hashtags en búsqueda, almacenamiento cloud de media dentro del servicio. Los límites de tamaño de archivo y de miembros de grupo han cambiado — revisa los actuales.",
      ],
      lists: [
        {
          intro: "Set típico:",
          items: [
            "chats personales y de grupo",
            "canales como media",
            "bots y mini apps",
            "stickers, notas de voz, adjuntos grandes",
            "sync del historial entre dispositivos",
          ],
        },
      ],
    },
    {
      title: "Pros y contras",
      level: 2,
      paras: [
        "Pros: velocidad, escritorio sólido, flexibilidad para media y automatización, desarrollo activo de funciones.",
        "Contras: la búsqueda de canales in-app es más débil que en redes sociales; la moderación de contenido público queda en autores y plataforma; el soporte y la UI históricamente fueron English-first (mejor ahora, quedan matices); el número de registro es un punto sensible de seguridad de la cuenta.",
      ],
      lists: [
        {
          intro: "Conviene recordar:",
          items: [
            "auth en dos factores y la lista de sesiones",
            "cuidado con bots y archivos desconocidos",
            "un canal público ≠ anonimato total",
          ],
        },
      ],
    },
    {
      title: "Comparación con otros messengers",
      level: 2,
      paras: [
        "WhatsApp* y messengers similares suelen ser más fuertes en red de contactos: más chance de que la otra persona ya esté ahí. Telegram se elige más a menudo por escritorio, canales, bots y trabajo con archivos. Viber y otros tienen sus nichos en llamadas y comunidades.",
        "La comparación de abajo es una guía de escenarios, no un ranking eterno. Interfaces y límites cambian; el estatus legal de algunos productos está en la nota al inicio del artículo.",
      ],
      tables: [
        {
          caption: "Comparación aproximada por escenario",
          headers: ["Escenario", "Telegram", "WhatsApp* / pares"],
          rows: [
            ["Canal / media", "Lado fuerte", "Más statuses, menos a menudo un canal completo"],
            ["Bots y automatización", "Ecosistema amplio", "Depende de la plataforma"],
            ["Escritorio sin el teléfono cerca", "Cliente completo", "A menudo atado al teléfono"],
            ["Alcance «ya lo tiene todo el mundo»", "Más bajo en algunas audiencias", "A menudo más alto"],
          ],
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "Este material describe funciones de la plataforma. Elegir un messenger para negocio es una decisión que tiene en cuenta audiencia, política y ley en tu jurisdicción.",
        },
      ],
    },
    {
      title: "Canales, bots y negocio",
      level: 2,
      paras: [
        "Un canal es un escaparate de noticias y ofertas con push. Los bots — leads, FAQ, estado del pedido, embudos simples. Crecer en suscriptores casi siempre necesita fuentes externas y ads en canales afines.",
        "No confundas «tenemos un messenger» con una estrategia de marketing: hacen falta rúbricas, tono, medición y soporte del diálogo.",
      ],
      lists: [
        {
          intro: "Escenarios de negocio:",
          items: [
            "noticias de empresa y producto",
            "soporte y estado del pedido",
            "calentamiento antes de un lanzamiento",
            "contenido cerrado para clientes",
            "placements de pago y partnerships con otros canales",
          ],
        },
      ],
      links: [
        {
          label: "Canal de Telegram desde cero",
          href: "/es/blog/telegram-kanal/",
        },
      ],
    },
  ],
};

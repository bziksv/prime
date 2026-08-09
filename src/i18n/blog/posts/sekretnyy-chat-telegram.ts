import type { BlogPost } from "../../../data/blog";

/** EN overlay for sekretnyy-chat-telegram — same structure as RU JSON. */
export const sekretnyyChatTelegramEn: BlogPost = {
  slug: "sekretnyy-chat-telegram",
  title: "Telegram secret chat: how it differs and how to turn it on",
  date: "2020-08-05",
  category: "SMM",
  cover: "/images/blog/sekretnyy-chat-telegram/cover-en.webp",
  excerpt:
    "What a Telegram secret chat is: end-to-end, delete timer, forwarding and screenshot limits — without the myth of “absolute invulnerability.”",
  lead: [
    "A Telegram secret chat is a separate one-to-one messaging mode focused on end-to-end encryption, auto-delete, and limited forwarding. It’s not the same as a regular cloud dialogue.",
    "Below: how the mode differs, how to create it, why the timer matters, and which expectations are realistic. Menus change; check Telegram Help. There’s no absolute protection from everything: device access, social engineering, and a second camera still exist.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a secret chat the same as all Telegram chats?",
      a: "No. Regular chats go through the cloud and sync across devices. Secret is a separate session, usually tied to specific devices.",
    },
    {
      q: "Can I open a secret chat on a PC?",
      a: "Historically the focus was mobile clients. Check current platform support in Telegram Help — not 2020 screenshots.",
    },
    {
      q: "Are screenshots fully banned?",
      a: "The client may block/notify about screenshots on some OSes. You can still photograph the screen with another device — it’s not an “invisible shield.”",
    },
    {
      q: "Do I need a secret chat for business?",
      a: "For sensitive files and personal data — sometimes yes. For customer support a regular chat/bot with a retention policy is usually better.",
    },
    {
      q: "How is it different from self-destruct in a regular chat?",
      a: "Regular chats can also have timers and deletion. Secret mode is a separate dialogue type with a different set of limits (forwarding, device binding, etc.).",
    },
  ],
  sections: [
    {
      title: "How a secret chat differs from a regular one",
      level: 2,
      paras: [
        "A regular dialogue syncs across your clients through Telegram’s infrastructure. A secret chat is created as a separate protected session with the other person.",
        "Typical mode differences: E2E focus, limits on forwarding messages to other chats, an auto-delete timer, different UX (often marked with a lock).",
        "Don’t confuse “most secret messenger” marketing with the job: pick the mode for the risk. For a public channel or support you don’t need a secret chat.",
      ],
      links: [
        {
          label: "Telegram: overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Capabilities and limits",
      level: 2,
      paras: [
        "Delete timer: messages vanish after a chosen interval (from seconds to days — the set depends on the version).",
        "Delete for both: handy for sensitive text, but it doesn’t replace a policy of “don’t send what shouldn’t be shown.”",
        "Forwarding from a secret chat is usually limited — fewer accidental leaks into group chats.",
        "Screenshot attempt notices are a signal, not a guarantee. A physical camera and malware on the device sit outside the “UI lock” threat model.",
      ],
      notes: [
        {
          title: "Realism",
          kind: "tip",
          text: "We don’t copy EFF ratings, bounties, and WhatsApp/Viber comparisons from old roundups as eternal truth. Check current reports and client Help.",
        },
      ],
    },
    {
      title: "How to create a secret chat",
      level: 2,
      paras: [
        "In the app open new chat / pencil menu → “Secret chat” (wording may differ) → pick a contact.",
        "The other person must accept/open the invite. Until the session is set, there’s no protected correspondence.",
        "Create a separate secret chat per task; you can have several with different people.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "confirm you’re writing the right contact",
            "agree on the timer and what can be sent",
            "an updated official client",
            "understand that changing phones may break an old session",
          ],
        },
      ],
    },
    {
      title: "Auto-delete timer",
      level: 2,
      paras: [
        "In an open secret chat open the menu (⋯) → timed delete / self-destruct → pick an interval.",
        "The timer is usually visible to both. Change it deliberately: too short hurts working with files; too long weakens the point of the mode.",
      ],
    },
    {
      title: "When it fits",
      level: 2,
      paras: [
        "Sharing sensitive drafts, access details (better still via a password manager), personal chat with elevated risk.",
        "Not a substitute for corporate DLP and legal NDAs. Don’t use it as cover for illegal activity — this article is about a tool, not bypassing the law.",
        "For marketing and public communities, channels, regular chats, and bots are enough.",
      ],
      links: [
        {
          label: "Links in Telegram",
          href: "/en/blog/ssylki-telegram/",
        },
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A secret chat is a mode for sensitive one-to-one messaging, not the “default for all of Telegram.”",
        "Timers and forwarding limits help, but security starts with the device and discipline.",
      ],
    },
  ],
  closing: [
    "If you need sensitive chat — create a secret chat with a timer and agree on rules first; for ordinary support keep a cloud dialogue or a bot.",
  ],
  related: [
    "telegram",
    "ssylki-telegram",
    "telegram-kanal",
    "telegram-boty",
    "instagram-direct",
    "parol-instagram",
  ],
};

/** ES overlay for sekretnyy-chat-telegram — same structure as RU JSON / EN. */
export const sekretnyyChatTelegramEs: BlogPost = {
  slug: "sekretnyy-chat-telegram",
  title: "Chat secreto de Telegram: en qué se diferencia y cómo activarlo",
  date: "2020-08-05",
  category: "SMM",
  cover: "/images/blog/sekretnyy-chat-telegram/cover.webp",
  excerpt:
    "Qué es un chat secreto de Telegram: end-to-end, timer de borrado, límites de forwarding y capturas — sin el mito de la «invulnerabilidad absoluta».",
  lead: [
    "Un chat secreto de Telegram es un modo aparte de mensajería uno a uno centrado en cifrado end-to-end, auto-borrado y forwarding limitado. No es lo mismo que un diálogo cloud habitual.",
    "Abajo: en qué se diferencia el modo, cómo crearlo, por qué importa el timer y qué expectativas son realistas. Los menús cambian; consulta Telegram Help. No hay protección absoluta frente a todo: el acceso al dispositivo, la ingeniería social y una segunda cámara siguen existiendo.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. WhatsApp* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Un chat secreto es lo mismo que todos los chats de Telegram?",
      a: "No. Los chats habituales van por la nube y se sincronizan entre dispositivos. El secreto es una sesión aparte, suele ir ligada a dispositivos concretos.",
    },
    {
      q: "¿Puedo abrir un chat secreto en un PC?",
      a: "Históricamente el foco estaba en clientes móviles. Revisa el soporte actual de plataformas en Telegram Help — no capturas de 2020.",
    },
    {
      q: "¿Las capturas están totalmente prohibidas?",
      a: "El cliente puede bloquear/avisar sobre screenshots en algunos SO. Aun así puedes fotografiar la pantalla con otro dispositivo — no es un «escudo invisible».",
    },
    {
      q: "¿Hace falta un chat secreto para negocio?",
      a: "Para archivos sensibles y datos personales — a veces sí. Para soporte al cliente suele ser mejor un chat/bot habitual con política de retention.",
    },
    {
      q: "¿En qué se diferencia del self-destruct en un chat habitual?",
      a: "Los chats habituales también pueden tener timers y borrado. El modo secreto es un tipo de diálogo aparte con otro set de límites (forwarding, vínculo al dispositivo, etc.).",
    },
  ],
  sections: [
    {
      title: "En qué se diferencia un chat secreto de uno habitual",
      level: 2,
      paras: [
        "Un diálogo habitual se sincroniza entre tus clientes por la infraestructura de Telegram. Un chat secreto se crea como una sesión protegida aparte con la otra persona.",
        "Diferencias típicas del modo: foco E2E, límites al reenviar mensajes a otros chats, timer de auto-borrado, UX distinta (a menudo marcada con un candado).",
        "No confundas el marketing de «el messenger más secreto» con el trabajo: elige el modo según el riesgo. Para un canal público o soporte no necesitas un chat secreto.",
      ],
      links: [
        {
          label: "Telegram: overview",
          href: "/es/blog/telegram/",
        },
      ],
    },
    {
      title: "Capacidades y límites",
      level: 2,
      paras: [
        "Timer de borrado: los mensajes desaparecen tras un intervalo elegido (de segundos a días — el set depende de la versión).",
        "Borrar para ambos: útil para texto sensible, pero no sustituye la política de «no envíes lo que no debería mostrarse».",
        "El forwarding desde un chat secreto suele estar limitado — menos fugas accidentales a grupos.",
        "Los avisos de intento de screenshot son una señal, no una garantía. Una cámara física y malware en el dispositivo quedan fuera del threat model del «candado de UI».",
      ],
      notes: [
        {
          title: "Realismo",
          kind: "tip",
          text: "No copiamos ratings de EFF, bounties y comparaciones WhatsApp/Viber de roundups viejos como verdad eterna. Revisa informes actuales y Help del cliente.",
        },
      ],
    },
    {
      title: "Cómo crear un chat secreto",
      level: 2,
      paras: [
        "En la app abre nuevo chat / menú del lápiz → «Secret chat» (la redacción puede diferir) → elige un contacto.",
        "La otra persona debe aceptar/abrir la invitación. Hasta que la sesión esté montada, no hay correspondencia protegida.",
        "Crea un chat secreto aparte por tarea; puedes tener varios con personas distintas.",
      ],
      lists: [
        {
          intro: "Antes de empezar:",
          items: [
            "confirma que escribes al contacto correcto",
            "acuerda el timer y qué se puede enviar",
            "un cliente oficial actualizado",
            "entiende que cambiar de teléfono puede romper una sesión antigua",
          ],
        },
      ],
    },
    {
      title: "Timer de auto-borrado",
      level: 2,
      paras: [
        "En un chat secreto abierto abre el menú (⋯) → timed delete / self-destruct → elige un intervalo.",
        "El timer suele ser visible para ambos. Cámbialo a propósito: demasiado corto perjudica trabajar con archivos; demasiado largo debilita el sentido del modo.",
      ],
    },
    {
      title: "Cuándo encaja",
      level: 2,
      paras: [
        "Compartir borradores sensibles, detalles de acceso (mejor aún vía un gestor de contraseñas), chat personal con riesgo elevado.",
        "No sustituye DLP corporativo ni NDAs legales. No lo uses como tapadera de actividad ilegal — este artículo va de una herramienta, no de saltarse la ley.",
        "Para marketing y comunidades públicas bastan canales, chats habituales y bots.",
      ],
      links: [
        {
          label: "Enlaces en Telegram",
          href: "/es/blog/ssylki-telegram/",
        },
        {
          label: "Bots de Telegram",
          href: "/es/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Un chat secreto es un modo para mensajería sensible uno a uno, no el «default de todo Telegram».",
        "Timers y límites de forwarding ayudan, pero la seguridad empieza en el dispositivo y la disciplina.",
      ],
    },
  ],
  closing: [
    "Si necesitas chat sensible — crea un chat secreto con timer y acuerda las reglas primero; para soporte ordinario mantén un diálogo cloud o un bot.",
  ],
  related: [
    "telegram",
    "ssylki-telegram",
    "telegram-kanal",
    "telegram-boty",
    "instagram-direct",
    "parol-instagram",
  ],
};

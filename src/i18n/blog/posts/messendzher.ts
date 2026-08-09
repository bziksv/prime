import type { BlogPost } from "../../../data/blog";

/** EN overlay for messendzher — same structure as RU JSON. */
export const messendzherEn: BlogPost = {
  slug: "messendzher",
  title: "What a messenger is: types, features, and business use",
  date: "2021-01-15",
  category: "SMM",
  cover: "/images/blog/messendzher/cover-en.webp",
  excerpt:
    "A messenger is an app or web client for instant messages, calls, and files. How WhatsApp*, Telegram, and workplace chats differ — and how to roll them out without spam.",
  lead: [
    "A messenger is a program or web client for instant messaging over the internet: text, media, files, often calls and groups. Both people need the same service and a network connection.",
    "Below: what the format means, a look at popular apps without treating “billions of users from a 2021 article” as gospel, and how companies adopt them. Audience numbers and UI change — check current data. Meta* products are mentioned for information only.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. WhatsApp*, Facebook Messenger*, and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a messenger different from SMS?",
      a: "It runs over data/Wi‑Fi, usually cheaper and richer in media. SMS stays a fallback and for service codes.",
    },
    {
      q: "Can I message from WhatsApp* into Telegram?",
      a: "No: chats don’t cross messengers. Both people need the same service.",
    },
    {
      q: "Does a browser version count as a messenger?",
      a: "Yes, if it’s the official web client of the same service. Often it needs a phone link or a separate sign-in.",
    },
    {
      q: "What should a business in Russia pick?",
      a: "Wherever customers and the team already are: often Telegram, MAX, and others by niche; WhatsApp* if the audience is there. Don’t open five channels without a reply playbook.",
    },
    {
      q: "Is a work chat the same as a personal messenger?",
      a: "Similar UX, but a company needs policies: what you may send, where files live, who admins, what happens when staff leave.",
    },
    {
      q: "Are messenger broadcasts legal?",
      a: "Only with consent and under platform/law rules. Spamming a number list risks blocks and complaints.",
    },
    {
      q: "Does a messenger replace CRM?",
      a: "No. Chats are a channel. Deals, statuses, and ownership belong in CRM or a shared tracker.",
    },
    {
      q: "Do I need a separate Facebook Messenger*?",
      a: "If the audience is there and you can answer. Mind platform rules and jurisdiction; this article is informational.",
    },
  ],
  sections: [
    {
      title: "How a messenger works",
      level: 2,
      paras: [
        "After install or sign-in you see a chat list. Messages go to the service’s servers (or another architecture) and reach the other person when they’re online.",
        "Typical kit: text, photo/video, documents, read receipts, groups, sometimes channels, bots, calls. Exact features depend on the product and version.",
        "A separate class is on-site live-chat widgets: still chat, but inside your domain and support flow — not a consumer “world” messenger.",
      ],
    },
    {
      title: "Popular consumer services",
      level: 2,
      paras: [
        "WhatsApp* — a mass messenger tied to a phone number, with chats, calls, and a business track. Multi-account and device limits change — check current Help, not a 2021 guide.",
        "Telegram — chats, channels, bots, strong for content and support; policies and availability by region are a separate story.",
        "Viber — chats and calls; some users dislike ad noise — judge for yourself.",
        "Signal — privacy-first; less of a “business storefront,” more private messaging.",
        "Skype — historically strong on calls; many teams moved to other stacks.",
        "Facebook Messenger* — chats in the Meta* ecosystem; mind legal status and platform rules in your jurisdiction. This material does not urge bypassing restrictions.",
      ],
      notes: [
        {
          title: "“Billion users” figures",
          text: "Stats from 2021 roundups age fast. For channel choice, where your audience is matters more than someone else’s global scoreboard.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "WhatsApp in Instagram*",
          href: "/en/blog/whatsapp-v-instagram/",
        },
        {
          label: "WhatsApp* broadcasts",
          href: "/en/blog/rassylka-whatsapp/",
        },
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
    {
      title: "Corporate use",
      level: 2,
      paras: [
        "Inside a company a messenger speeds approvals and files — if rules exist: work chats ≠ endless off-topic, secrets not in a contractor’s DMs without a contract.",
        "For customers — channel links on the site and one reply SLA. Otherwise “they wrote in three places — nobody answered.”",
        "Rollout: check whether the audience uses the channel → pick 1–2 services → write scenarios → train → link to CRM when you can.",
      ],
      lists: [
        {
          intro: "Mini playbook:",
          items: [
            "hours and reply speed",
            "what you may promise in chat",
            "where leads go",
            "who owns the corporate number/bot",
            "no spam broadcasts without consent",
          ],
        },
      ],
      links: [
        {
          label: "CRM",
          href: "/en/blog/crm/",
        },
        {
          label: "Callback and contact channels",
          href: "/en/blog/obratnyy-zvonok/",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Spamming strangers’ numbers “because the messenger is free.”",
        "Five channels with no owner and no CRM — chaos, not omnichannel.",
        "Storing passwords and client card data in the chat.",
        "Expecting “we added WhatsApp* — sales grew by themselves” without an offer and reply speed.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A messenger is instant chat over the internet inside one service.",
        "For business what matters is audience channel, playbook, and lead tracking — not a collection of icons.",
        "Follow platform rules and consent for messages.",
      ],
    },
  ],
  closing: [
    "Pick one primary messenger where customers already are, put it on the site with a clear CTA, and set a reply rule into CRM — more useful than arguing whose “billion users” is bigger.",
  ],
  related: [
    "rassylka-whatsapp",
    "whatsapp-v-instagram",
    "telegram-boty",
    "sekretnyy-chat-telegram",
    "crm",
    "obratnyy-zvonok",
  ],
};

/** ES overlay for messendzher — same structure as RU JSON / EN. */
export const messendzherEs: BlogPost = {
  slug: "messendzher",
  title: "Qué es un messenger: tipos, funciones y uso en negocio",
  date: "2021-01-15",
  category: "SMM",
  cover: "/images/blog/messendzher/cover.webp",
  excerpt:
    "Un messenger es una app o cliente web para mensajes instantáneos, llamadas y archivos. En qué se diferencian WhatsApp*, Telegram y los chats de trabajo — y cómo desplegarlos sin spam.",
  lead: [
    "Un messenger es un programa o cliente web para mensajería instantánea por internet: texto, media, archivos, a menudo llamadas y grupos. Ambas personas necesitan el mismo servicio y conexión de red.",
    "Abajo: qué significa el formato, un vistazo a apps populares sin tomar por dogma «miles de millones de usuarios de un artículo de 2021», y cómo las adoptan las empresas. Cifras de audiencia y UI cambian — revisa datos actuales. Los productos de Meta* se mencionan solo a título informativo.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar las plataformas. WhatsApp*, Facebook Messenger* e Instagram* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un messenger del SMS?",
      a: "Va por datos/Wi‑Fi, suele ser más barato y más rico en media. El SMS queda como fallback y para códigos de servicio.",
    },
    {
      q: "¿Puedo escribir desde WhatsApp* a Telegram?",
      a: "No: los chats no cruzan messengers. Ambas personas necesitan el mismo servicio.",
    },
    {
      q: "¿Una versión de navegador cuenta como messenger?",
      a: "Sí, si es el cliente web oficial del mismo servicio. A menudo necesita vínculo con el teléfono o un login aparte.",
    },
    {
      q: "¿Qué debería elegir un negocio en Rusia?",
      a: "Donde ya estén clientes y equipo: a menudo Telegram, MAX y otros según el nicho; WhatsApp* si la audiencia está ahí. No abras cinco canales sin un playbook de respuesta.",
    },
    {
      q: "¿Un chat de trabajo es lo mismo que un messenger personal?",
      a: "UX parecida, pero una empresa necesita políticas: qué se puede enviar, dónde viven los archivos, quién administra, qué pasa cuando sale personal.",
    },
    {
      q: "¿Son legales las broadcasts por messenger?",
      a: "Solo con consentimiento y bajo las reglas de la plataforma/ley. Spamear una lista de números arriesga bloqueos y quejas.",
    },
    {
      q: "¿Un messenger sustituye al CRM?",
      a: "No. Los chats son un canal. Deals, estados y ownership van en CRM o un tracker compartido.",
    },
    {
      q: "¿Hace falta un Facebook Messenger* aparte?",
      a: "Si la audiencia está ahí y puedes responder. Atiende a las reglas de la plataforma y la jurisdicción; este artículo es informativo.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona un messenger",
      level: 2,
      paras: [
        "Tras instalar o iniciar sesión ves una lista de chats. Los mensajes van a los servidores del servicio (u otra arquitectura) y llegan a la otra persona cuando está online.",
        "Kit típico: texto, foto/vídeo, documentos, confirmaciones de lectura, grupos, a veces canales, bots, llamadas. Las funciones exactas dependen del producto y la versión.",
        "Una clase aparte son los widgets de live-chat en el sitio: sigue siendo chat, pero dentro de tu dominio y flujo de soporte — no un messenger «mundial» de consumo.",
      ],
    },
    {
      title: "Servicios de consumo populares",
      level: 2,
      paras: [
        "WhatsApp* — un messenger masivo ligado a un número de teléfono, con chats, llamadas y una pista business. Los límites de multi-cuenta y dispositivos cambian — revisa la Help actual, no una guía de 2021.",
        "Telegram — chats, canales, bots, fuerte para contenido y soporte; políticas y disponibilidad por región son otra historia.",
        "Viber — chats y llamadas; a algunos usuarios les molesta el ruido de ads — júzgalo tú.",
        "Signal — privacy-first; menos «escaparate de negocio», más mensajería privada.",
        "Skype — históricamente fuerte en llamadas; muchos equipos pasaron a otros stacks.",
        "Facebook Messenger* — chats en el ecosistema Meta*; atiende al estatus legal y a las reglas de la plataforma en tu jurisdicción. Este material no invita a saltarse restricciones.",
      ],
      notes: [
        {
          title: "Cifras de «mil millones de usuarios»",
          text: "Las estadísticas de roundups de 2021 envejecen rápido. Para elegir canal importa más dónde está tu audiencia que el marcador global de otro.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "WhatsApp en Instagram*",
          href: "/blog/whatsapp-v-instagram/",
        },
        {
          label: "Broadcasts por WhatsApp*",
          href: "/blog/rassylka-whatsapp/",
        },
        {
          label: "Bots de Telegram",
          href: "/blog/telegram-boty/",
        },
        {
          label: "Telegram",
          href: "/es/blog/telegram/",
        },
      ],
    },
    {
      title: "Uso corporativo",
      level: 2,
      paras: [
        "Dentro de una empresa un messenger acelera aprobaciones y archivos — si hay reglas: chats de trabajo ≠ off-topic infinito, secretos no en los DMs de un contratista sin contrato.",
        "Para clientes — enlaces de canal en el sitio y un solo SLA de respuesta. Si no, «escribieron en tres sitios — nadie contestó».",
        "Despliegue: comprueba si la audiencia usa el canal → elige 1–2 servicios → escribe escenarios → forma → vincula a CRM cuando puedas.",
      ],
      lists: [
        {
          intro: "Mini playbook:",
          items: [
            "horario y velocidad de respuesta",
            "qué puedes prometer en el chat",
            "dónde van los leads",
            "quién posee el número/bot corporativo",
            "sin broadcasts de spam sin consentimiento",
          ],
        },
      ],
      links: [
        {
          label: "CRM",
          href: "/blog/crm/",
        },
        {
          label: "Callback y canales de contacto",
          href: "/blog/obratnyy-zvonok/",
        },
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Errores frecuentes",
      level: 2,
      paras: [
        "Spamear números de desconocidos «porque el messenger es gratis».",
        "Cinco canales sin dueño y sin CRM — caos, no omnichannel.",
        "Guardar contraseñas y datos de la ficha del cliente en el chat.",
        "Esperar «añadimos WhatsApp* — las ventas crecieron solas» sin oferta ni velocidad de respuesta.",
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Un messenger es chat instantáneo por internet dentro de un mismo servicio.",
        "Para negocio importa el canal de la audiencia, el playbook y el tracking de leads — no una colección de iconos.",
        "Sigue las reglas de la plataforma y el consentimiento para los mensajes.",
      ],
    },
  ],
  closing: [
    "Elige un messenger principal donde ya estén los clientes, ponlo en el sitio con un CTA claro y fija una regla de respuesta hacia el CRM — más útil que discutir de quién es más grande el «mil millones de usuarios».",
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "forma-obratnoy-svyazi",
    "rassylka-whatsapp",
    "telegram-boty",
    "crm",
  ],
};

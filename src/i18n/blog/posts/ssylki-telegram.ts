import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-telegram — same structure as RU JSON. */
export const ssylkiTelegramEn: BlogPost = {
  slug: "ssylki-telegram",
  title: "Telegram links: profile, channel, chat, and invite",
  date: "2020-09-15",
  category: "SMM",
  cover: "/images/blog/ssylki-telegram/cover-en.webp",
  excerpt:
    "How to create and share links to a Telegram profile, channel, and chat: t.me, usernames, invite links, in-message hyperlinks, and opening URLs in the app.",
  lead: [
    "In Telegram, almost everything is a link: a public `@username`, a `t.me/…` URL, or a one-time or permanent invite to a private space. Get the format wrong and people never reach the channel or support chat.",
    "Below: links to a profile, channel, and chat, how invites differ from public URLs, and how to hyperlink text in a message. For a messenger overview and launching a channel, see the related posts.",
  ],
  faq: [
    {
      q: "How does t.me differ from @username?",
      a: "Two ways to write the same public address. In a browser, `https://t.me/name` is convenient; in chat, `@name` is usually enough.",
    },
    {
      q: "How do I grant access to a private channel?",
      a: "Use an invite link from channel settings — not a public username if the channel doesn’t have one.",
    },
    {
      q: "Where do I get a profile link?",
      a: "If a username is set, use `t.me/username`. Without one, share a contact from the app or ask people to find you in a chat.",
    },
    {
      q: "Can I turn a word into a link?",
      a: "Yes: desktop and mobile clients let you turn selected text into a link. Useful when you want a site URL without showing a long string.",
    },
    {
      q: "Is an invite always permanent?",
      a: "No. You can cap join counts and set an expiry. For lasting showcases, prefer a public username plus moderation.",
    },
    {
      q: "Can I link to a specific post?",
      a: "Public channels use URLs like `t.me/channel/123`. Private channels use the client’s own post-share flows.",
    },
    {
      q: "Will t.me open without the app?",
      a: "In a browser you’ll get the web version or a prompt to open the app. On a website, prefer a full https link.",
    },
    {
      q: "How is this different from the channel article?",
      a: "That one covers launch and content. This one is only link formats and sharing.",
    },
  ],
  sections: [
    {
      title: "Public links: username and t.me",
      level: 2,
      paras: [
        "Set a unique username in settings. The public channel or profile address is `https://t.me/username`. In messages you can write `@username` — the client makes it clickable.",
        "Pick a free, readable username: brand beats a random string. Renaming breaks old bookmarks, so change it rarely.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "username matches on the site and business card",
            "link opens on phone and desktop",
            "no typos in print or QR",
            "URL case usually doesn’t matter, but copy it from the client",
          ],
        },
      ],
      links: [
        {
          label: "Telegram overview",
          href: "/en/blog/telegram/",
        },
      ],
    },
    {
      title: "Profile link",
      level: 2,
      paras: [
        "A personal profile with a username shares the same way via `t.me/…`. If the username is hidden or unset, people add you from a chat, by number (if allowed), or via a contact card.",
        "For business support, use a separate account, bot, or chat — not the founder’s personal profile.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "in the site footer — t.me to the channel or bot",
            "in email signatures — a short https link",
            "don’t publish a personal number more than you need to",
          ],
        },
      ],
    },
    {
      title: "Channel: public URL and invite",
      level: 2,
      paras: [
        "Public channel: `t.me/channelname`. Private: create an invite link in channel management. You can limit it by time and user count.",
        "For landings and ads you almost always want a stable public address. Save invites for closed communities and tests.",
      ],
      lists: [
        {
          intro: "Before you announce:",
          items: [
            "description and avatar ready",
            "3–5 posts ready",
            "link points to that exact channel",
            "UTM on the site if you track clicks",
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
    {
      title: "Chats and groups",
      level: 2,
      paras: [
        "Groups can also have a username or be invite-only. Channel discussion groups often get a separate “chat” link next to the channel.",
        "Don’t mix up channel and chat links in ads: people should land where they expect content or conversation.",
      ],
      lists: [
        {
          intro: "Label creatives clearly:",
          items: [
            "“channel” vs “support chat”",
            "rules in the pinned message",
            "anti-spam bot if needed",
          ],
        },
      ],
    },
    {
      title: "Hyperlink in text and sharing",
      level: 2,
      paras: [
        "In a message, select a word → Link / Create link → paste the URL. The post looks cleaner than a wall of `https://…`.",
        "In channel posts, link the site, other posts, and docs. Keep anchor text honest — no clickbait “here” pointing at phishing.",
      ],
      lists: [
        {
          intro: "Message checklist:",
          items: [
            "one main link",
            "link preview looks right (site Open Graph)",
            "a mobile tap hits the target",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph tags",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Opening URLs and typical mistakes",
      level: 2,
      paras: [
        "From the site and email, use `https://t.me/…`. From another messenger, same format. Bot deep-link parameters (`t.me/bot?start=…`) are a separate funnel topic.",
        "Common mistakes: expired invite, username change with no redirect, link to a draft or wrong chat, QR with broken encoding.",
      ],
      lists: [
        {
          intro: "Before a campaign:",
          items: [
            "click the link on iOS and Android",
            "check invite limits",
            "lock the URL in a shared table",
            "don’t copy from lookalike fake channels",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "One canonical link in the brand kit saves an hour of support every month.",
        },
      ],
      links: [
        {
          label: "Telegram bots",
          href: "/en/blog/telegram-boty/",
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "telegram-boty",
    "open-graph",
    "seo-vkontakte",
  ],
};

/** ES overlay for ssylki-telegram — same structure as RU JSON / EN. */
export const ssylkiTelegramEs: BlogPost = {
  slug: "ssylki-telegram",
  title: "Enlaces de Telegram: perfil, canal, chat e invite",
  date: "2020-09-15",
  category: "SMM",
  cover: "/images/blog/ssylki-telegram/cover-es.webp",
  excerpt:
    "Cómo crear y compartir enlaces a un perfil, canal y chat de Telegram: t.me, usernames, invites, hiperenlaces en mensajes y abrir URLs en la app.",
  lead: [
    "En Telegram casi todo es un enlace: un `@username` público, una URL `t.me/…` o un invite puntual o permanente a un espacio privado. Si fallas el formato, la gente no llega al canal ni al chat de soporte.",
    "Abajo: enlaces a perfil, canal y chat, cómo difieren los invites de las URLs públicas y cómo hipervincular texto en un mensaje. Para un panorama del mensajero y lanzar un canal, ver los posts relacionados.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia t.me de @username?",
      a: "Dos formas de escribir la misma dirección pública. En el navegador, `https://t.me/name` es cómodo; en el chat, `@name` suele bastar.",
    },
    {
      q: "¿Cómo doy acceso a un canal privado?",
      a: "Usa un invite desde los ajustes del canal — no un username público si el canal no tiene uno.",
    },
    {
      q: "¿Dónde saco el enlace del perfil?",
      a: "Si hay username, usa `t.me/username`. Sin uno, comparte un contacto desde la app o pide que te encuentren en un chat.",
    },
    {
      q: "¿Puedo convertir una palabra en enlace?",
      a: "Sí: los clientes de escritorio y móvil permiten convertir el texto seleccionado en enlace. Útil cuando quieres una URL del sitio sin mostrar una cadena larga.",
    },
    {
      q: "¿Un invite es siempre permanente?",
      a: "No. Puedes limitar el número de joins y fijar caducidad. Para escaparates duraderos, prefiere un username público más moderación.",
    },
    {
      q: "¿Puedo enlazar a un post concreto?",
      a: "Los canales públicos usan URLs como `t.me/channel/123`. Los privados usan los flujos propios del cliente para compartir posts.",
    },
    {
      q: "¿Abrirá t.me sin la app?",
      a: "En el navegador verás la versión web o un prompt para abrir la app. En un sitio web, prefiere un enlace https completo.",
    },
    {
      q: "¿En qué se diferencia del artículo del canal?",
      a: "Ese cubre lanzamiento y contenido. Este solo va de formatos de enlace y cómo compartirlos.",
    },
  ],
  sections: [
    {
      title: "Enlaces públicos: username y t.me",
      level: 2,
      paras: [
        "Fija un username único en ajustes. La dirección pública del canal o perfil es `https://t.me/username`. En mensajes puedes escribir `@username` — el cliente lo hace clicable.",
        "Elige un username libre y legible: la marca gana a una cadena al azar. Renombrar rompe bookmarks viejos, así que cámbialo poco.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "el username coincide en el sitio y la tarjeta de visita",
            "el enlace abre en teléfono y escritorio",
            "sin typos en impresión o QR",
            "las mayúsculas de la URL suelen no importar, pero cópiala del cliente",
          ],
        },
      ],
      links: [
        {
          label: "Panorama de Telegram",
          href: "/es/blog/telegram/",
        },
      ],
    },
    {
      title: "Enlace del perfil",
      level: 2,
      paras: [
        "Un perfil personal con username se comparte igual vía `t.me/…`. Si el username está oculto o no existe, la gente te añade desde un chat, por número (si está permitido) o vía una ficha de contacto.",
        "Para soporte de negocio, usa una cuenta aparte, un bot o un chat — no el perfil personal del founder.",
      ],
      lists: [
        {
          intro: "Tips prácticos:",
          items: [
            "en el footer del sitio — t.me al canal o bot",
            "en firmas de email — un enlace https corto",
            "no publiques un número personal más de lo necesario",
          ],
        },
      ],
    },
    {
      title: "Canal: URL pública e invite",
      level: 2,
      paras: [
        "Canal público: `t.me/channelname`. Privado: crea un invite en la gestión del canal. Puedes limitarlo por tiempo y número de usuarios.",
        "Para landings y ads casi siempre quieres una dirección pública estable. Guarda los invites para comunidades cerradas y tests.",
      ],
      lists: [
        {
          intro: "Antes de anunciar:",
          items: [
            "descripción y avatar listos",
            "3–5 posts listos",
            "el enlace apunta a ese canal exacto",
            "UTM en el sitio si trackeas clics",
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
    {
      title: "Chats y grupos",
      level: 2,
      paras: [
        "Los grupos también pueden tener username o ser solo por invite. Los grupos de discusión de un canal a menudo tienen un enlace de «chat» aparte junto al canal.",
        "No mezcles enlaces de canal y chat en ads: la gente debería aterrizar donde espera contenido o conversación.",
      ],
      lists: [
        {
          intro: "Etiqueta los creatives con claridad:",
          items: [
            "«canal» vs «chat de soporte»",
            "reglas en el mensaje anclado",
            "bot anti-spam si hace falta",
          ],
        },
      ],
    },
    {
      title: "Hiperenlace en el texto y sharing",
      level: 2,
      paras: [
        "En un mensaje, selecciona una palabra → Link / Create link → pega la URL. El post se ve más limpio que un muro de `https://…`.",
        "En posts del canal, enlaza el sitio, otros posts y docs. Mantén el texto del anchor honesto — sin clickbait «aquí» apuntando a phishing.",
      ],
      lists: [
        {
          intro: "Checklist del mensaje:",
          items: [
            "un enlace principal",
            "el link preview se ve bien (Open Graph del sitio)",
            "un toque en móvil llega al destino",
          ],
        },
      ],
      links: [
        {
          label: "Tags Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
    {
      title: "Abrir URLs y errores típicos",
      level: 2,
      paras: [
        "Desde el sitio y el email, usa `https://t.me/…`. Desde otro mensajero, el mismo formato. Los parámetros deep-link de bots (`t.me/bot?start=…`) son un tema de funnel aparte.",
        "Errores habituales: invite caducado, cambio de username sin redirect, enlace a un draft o al chat equivocado, QR con encoding roto.",
      ],
      lists: [
        {
          intro: "Antes de una campaña:",
          items: [
            "haz clic en el enlace en iOS y Android",
            "revisa límites del invite",
            "fija la URL en una tabla compartida",
            "no copies de canales fake lookalike",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Un enlace canónico en el brand kit ahorra una hora de soporte cada mes.",
        },
      ],
      links: [
        {
          label: "Bots de Telegram",
          href: "/es/blog/telegram-boty/",
        },
      ],
    },
  ],
  related: [
    "telegram",
    "telegram-kanal",
    "telegram-boty",
    "open-graph",
    "seo-vkontakte",
  ],
};

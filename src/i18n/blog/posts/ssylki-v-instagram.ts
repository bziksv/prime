import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-v-instagram — same structure as RU JSON. */
export const ssylkiVInstagramEn: BlogPost = {
  slug: "ssylki-v-instagram",
  title: "Instagram links: bio, Stories, Direct, and profile buttons",
  date: "2020-01-20",
  category: "SMM",
  cover: "/images/blog/ssylki-v-instagram/cover-en.webp",
  excerpt:
    "Where to put links on Instagram: bio and link-in-bio, post captions, Stories stickers, Direct, and contact buttons — without outdated IGTV tips or a catalog of shady tools.",
  lead: [
    "On Instagram, clickable URLs are scarce: you mostly get the bio link, a Stories sticker, business-profile buttons, and ad destinations. In a regular post caption, the link often isn’t tappable in the app.",
    "Below: a map of places where links still work — and how not to confuse them with the profile URL itself. Menus change; check Meta Help. Stories stickers get their own deep dive. Product note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can I make a caption link tappable?",
      a: "In the app, usually no: people copy the text or go to the bio (“link in bio”). In ads and on the web, a URL behaves differently.",
    },
    {
      q: "How is link-in-bio different from one bio URL?",
      a: "One link is a direct URL. A multi-link tool (Linktree and peers) opens a mini-page with several destinations. Factor in dependence on a third-party service.",
    },
    {
      q: "Do I need a business account for links?",
      a: "For Call / Email / Website buttons and proper ads — usually yes. A bio link works on a personal profile too.",
    },
    {
      q: "Where can I dig into Stories only?",
      a: "See the article on the Link / CTA sticker in Stories — it focuses on swipe behavior and limits.",
    },
    {
      q: "Is IGTV still relevant for links?",
      a: "Standalone IGTV was shut down. Long videos and descriptions live in Feed/Reels — follow the current video fields.",
    },
  ],
  sections: [
    {
      title: "Link in the profile header",
      level: 2,
      paras: [
        "Edit profile → website/link field. That’s the main permanent exit to a landing, shop, or form.",
        "Change the URL for a promo and write “link in bio” in posts — a familiar pattern when there’s no Stories sticker.",
        "Don’t mix it up with the account URL itself (`instagram.com/handle`) — that one goes on the site and business cards.",
      ],
      links: [
        {
          label: "How to copy an Instagram profile link",
          href: "/en/blog/ssylka-instagram/",
        },
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Multi-link (link-in-bio)",
      level: 2,
      paras: [
        "A service gathers several buttons: site, Telegram, price list, booking. Useful for shops that change offers often.",
        "Downsides: an extra click, dependence on service uptime, and sometimes ads on free plans.",
        "Pick a brand (Linktree, Later, and so on) by data policy and stability — a “best of 2020” catalog doesn’t age well.",
      ],
    },
    {
      title: "Post caption and short URLs",
      level: 2,
      paras: [
        "Caption text often isn’t tappable on phone. Give a memorable path (“site → Promos”) or send people to the bio.",
        "Short links with UTM help measurement, but in high-trust scenarios a full domain sometimes reads better.",
        "On the web, copying is easier — don’t build strategy only for desktop.",
      ],
    },
    {
      title: "Stories, Direct, contact buttons",
      level: 2,
      paras: [
        "Stories: link / CTA sticker — a quick jump from the frame. Details and the “swipe” replacement are in a separate guide.",
        "Direct: send a URL in chat; useful for support and warm-up after Stories.",
        "Business profile: email, call, address, and website buttons — also “links,” just shaped as actions. Don’t clutter the block.",
      ],
      links: [
        {
          label: "Links in Instagram Stories",
          href: "/en/blog/ssylka-stories-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Ads and shopping",
      level: 2,
      paras: [
        "In Ads / Promote, the destination URL is set in the creative — that’s the main paid exit to the site.",
        "Product tags and shopping mechanics depend on catalog and region; check current Commerce rules.",
        "Always plan UTM or a promo code for measurement — or you won’t tell bio traffic from Stories and paid social.",
      ],
      links: [
        {
          label: "Instagram ads setup via Meta Ads",
          href: "/en/blog/nastroika-reklamy-instagram/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Permanent exit — bio or link-in-bio; tactical — Stories and ads.",
        "A post caption rarely replaces a tappable URL.",
        "Count clicks — don’t stop at “we put a link somewhere.”",
      ],
    },
  ],
  closing: [
    "Check the bio, one multi-link for current offers, and a sticker in upcoming Stories with UTM — that set is usually enough without a pile of outdated workarounds.",
  ],
  related: [
    "ssylka-stories-instagram",
    "ssylka-instagram",
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "nastroika-reklamy-instagram",
    "promo-instagram",
  ],
};

/** ES overlay for ssylki-v-instagram — same structure as RU JSON / EN. */
export const ssylkiVInstagramEs: BlogPost = {
  slug: "ssylki-v-instagram",
  title: "Enlaces en Instagram: bio, Stories, Direct y botones del perfil",
  date: "2020-01-20",
  category: "SMM",
  cover: "/images/blog/ssylki-v-instagram/cover-es.webp",
  excerpt:
    "Dónde poner enlaces en Instagram: bio y link-in-bio, captions de posts, stickers de Stories, Direct y botones de contacto — sin tips obsoletos de IGTV ni un catálogo de herramientas grises.",
  lead: [
    "En Instagram las URLs clicables escasean: sobre todo tienes el enlace de la bio, un sticker de Stories, botones del perfil business y destinos de ads. En el caption de un post habitual, el enlace a menudo no es tappable en la app.",
    "Abajo: un mapa de lugares donde los enlaces aún funcionan — y cómo no confundirlos con la URL del perfil mismo. Los menús cambian; revisa Meta Help. Los stickers de Stories tienen un deep dive aparte. La nota de producto está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Puedo hacer tappable un enlace del caption?",
      a: "En la app, suele no: la gente copia el texto o va a la bio («link in bio»). En ads y en la web, una URL se comporta distinto.",
    },
    {
      q: "¿En qué se diferencia link-in-bio de una sola URL en la bio?",
      a: "Un enlace es una URL directa. Una herramienta multi-link (Linktree y similares) abre una mini-página con varios destinos. Cuenta con la dependencia de un servicio de terceros.",
    },
    {
      q: "¿Necesito cuenta business para enlaces?",
      a: "Para botones Call / Email / Website y ads en condiciones — suele sí. Un enlace en la bio también funciona en un perfil personal.",
    },
    {
      q: "¿Dónde profundizar solo en Stories?",
      a: "Ver el artículo sobre el sticker Link / CTA en Stories — se centra en el comportamiento de swipe y los límites.",
    },
    {
      q: "¿IGTV sigue siendo relevante para enlaces?",
      a: "El IGTV standalone se cerró. Vídeos largos y descripciones viven en Feed/Reels — sigue los campos de vídeo actuales.",
    },
  ],
  sections: [
    {
      title: "Enlace en la cabecera del perfil",
      level: 2,
      paras: [
        "Editar perfil → campo website/link. Esa es la salida permanente principal a un landing, tienda o formulario.",
        "Cambia la URL para una promo y escribe «link in bio» en los posts — un patrón familiar cuando no hay sticker de Stories.",
        "No lo mezcles con la URL de la cuenta misma (`instagram.com/handle`) — esa va al sitio y a las tarjetas de visita.",
      ],
      links: [
        {
          label: "Cómo copiar el enlace del perfil de Instagram",
          href: "/blog/ssylka-instagram/",
        },
        {
          label: "Diseño de la página de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Multi-link (link-in-bio)",
      level: 2,
      paras: [
        "Un servicio reúne varios botones: sitio, Telegram, lista de precios, reserva. Útil para tiendas que cambian ofertas a menudo.",
        "Inconvenientes: un clic extra, dependencia del uptime del servicio y a veces ads en planes gratis.",
        "Elige una marca (Linktree, Later, etc.) por política de datos y estabilidad — un catálogo «mejores de 2020» no envejece bien.",
      ],
    },
    {
      title: "Caption del post y URLs cortas",
      level: 2,
      paras: [
        "El texto del caption a menudo no es tappable en el teléfono. Da un camino memorable («sitio → Promos») o manda a la gente a la bio.",
        "Los enlaces cortos con UTM ayudan a medir, pero en escenarios de alta confianza a veces se lee mejor el dominio completo.",
        "En la web copiar es más fácil — no armes la estrategia solo para desktop.",
      ],
    },
    {
      title: "Stories, Direct, botones de contacto",
      level: 2,
      paras: [
        "Stories: sticker link / CTA — un salto rápido desde el frame. Detalles y el reemplazo del «swipe» están en una guía aparte.",
        "Direct: envía una URL en el chat; útil para soporte y warm-up tras Stories.",
        "Perfil business: botones de email, llamada, dirección y website — también son «enlaces», solo con forma de acciones. No satures el bloque.",
      ],
      links: [
        {
          label: "Enlaces en Instagram Stories",
          href: "/blog/ssylka-stories-instagram/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Ads y shopping",
      level: 2,
      paras: [
        "En Ads / Promote, la URL de destino se fija en el creative — esa es la salida de pago principal al sitio.",
        "Tags de producto y mecánicas de shopping dependen del catálogo y la región; revisa las reglas actuales de Commerce.",
        "Planifica siempre UTM o un código promo para medir — o no distinguirás tráfico de bio del de Stories y social de pago.",
      ],
      links: [
        {
          label: "Setup de ads de Instagram vía Meta Ads",
          href: "/blog/nastroika-reklamy-instagram/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Salida permanente — bio o link-in-bio; táctica — Stories y ads.",
        "Un caption de post rara vez sustituye una URL tappable.",
        "Cuenta los clics — no te quedes en «pusimos un enlace en algún sitio».",
      ],
    },
  ],
  closing: [
    "Revisa la bio, un multi-link para ofertas actuales y un sticker en las próximas Stories con UTM — ese set suele bastar sin un montón de workarounds obsoletos.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "ssylka-stories-instagram",
    "ssylka-instagram",
    "nastroika-reklamy-instagram",
    "promo-instagram",
  ],
};

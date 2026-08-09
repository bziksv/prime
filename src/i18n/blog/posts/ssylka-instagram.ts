import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylka-instagram — same structure as RU JSON. */
export const ssylkaInstagramEn: BlogPost = {
  slug: "ssylka-instagram",
  title: "How to copy an Instagram profile link",
  date: "2021-04-08",
  category: "SMM",
  cover: "/images/blog/ssylka-instagram/cover-en.webp",
  excerpt:
    "How to get an Instagram profile URL: from the browser, from the app, and manually by username — where to paste the link and what it doesn’t guarantee.",
  lead: [
    "An Instagram profile link is for the site, business card, ads, and chat: the person lands straight on the account. The format is simple — an address like `https://www.instagram.com/username/`.",
    "Below: how to copy the URL and where to place it. The three-dot menu and labels change; the idea stays. Meta product note is on the page. (The original WP title was about “several stories,” but the body was about the profile link — we keep the actual content.)",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and WhatsApp* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is a profile link different from a link in Stories?",
      a: "A profile URL opens the whole account. A Story link or sticker is a separate mechanic with account-type limits.",
    },
    {
      q: "Does username capitalization matter?",
      a: "In the URL, use the login as it appears in the profile address. Don’t invent spaces or characters — copy from the address bar.",
    },
    {
      q: "Will the link bring followers by itself?",
      a: "No. It only opens the profile. You need an offer, design, and traffic. More external links ≠ automatic sales growth.",
    },
    {
      q: "Can I shorten the profile link?",
      a: "Yes, via short URLs — but for trust a full official address is often better, especially in ads and on the site.",
    },
    {
      q: "Where else can I get a contact?",
      a: "On a business profile — contact buttons, WhatsApp/email where available. See profile design and business account.",
    },
  ],
  sections: [
    {
      title: "What the URL is made of",
      level: 2,
      paras: [
        "Base: Instagram domain + unique username. Example: `https://www.instagram.com/your_username/`. The nick is unique on the network; if the profile was renamed, the old link may stop opening the same way.",
        "Don’t confuse it with links to a single post or Reel — those have a different path after the username.",
      ],
    },
    {
      title: "Copy in the browser",
      level: 2,
      paras: [
        "Open Instagram in a browser, go to the needed profile (yours or someone else’s if it’s open). The address bar has the full URL — copy it.",
        "Make sure it’s the profile page, not the feed, Explore, or settings.",
      ],
    },
    {
      title: "Copy in the app",
      level: 2,
      paras: [
        "Open the profile → menu (⋯ or similar) → an item like “Copy profile link” / Share profile. Paste where you need it.",
        "Labels have changed; look for copy link or “share profile,” then “copy.”",
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Build the link by hand",
      level: 2,
      paras: [
        "If you know the exact username: `https://www.instagram.com/` + nick + `/`. Test the tap in incognito — you see whether the profile opens without your session.",
        "A typo in the nick leads to someone else’s or a missing account — always test after building by hand.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Putting a Story or post link in ads instead of the profile — or the reverse when you need a specific offer.",
        },
      ],
    },
    {
      title: "Where to put it and how to present it",
      level: 2,
      paras: [
        "Site (footer, contacts, buttons), other socials, email signature, business card, deck, QR. In copy, a short CTA (“Instagram profile” + link) beats a bare URL in the middle of a paragraph.",
        "For ads and landings, send people to an account with a clear header offer and current content — otherwise the tap doesn’t convert.",
      ],
      lists: [
        {
          intro: "Before publishing the link:",
          items: [
            "profile is open or access rules are clear",
            "username matches the brand",
            "header and avatar are in order",
            "there’s a next step (Direct, site, product)",
            "link tested from another device",
          ],
        },
      ],
      links: [
        {
          label: "Business on Instagram",
          href: "/en/blog/biznes-v-instagram/",
        },
        {
          label: "Ads on Instagram",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "A profile link is an account address, not promotion magic. Copy from browser or app and verify the tap.",
        "Consistent content and offer beat the count of external URL mentions.",
      ],
    },
  ],
  closing: [
    "Copy the profile URL, test it, and place it where the audience actually clicks. What they see after the tap decides the rest.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "biznes-v-instagram",
    "reklama-instagram",
    "avatar-instagram",
    "instagram-direct",
  ],
};

/** ES overlay for ssylka-instagram — same structure as RU JSON / EN. */
export const ssylkaInstagramEs: BlogPost = {
  slug: "ssylka-instagram",
  title: "Cómo copiar el enlace del perfil de Instagram",
  date: "2021-04-08",
  category: "SMM",
  cover: "/images/blog/ssylka-instagram/cover.webp",
  excerpt:
    "Cómo obtener la URL del perfil de Instagram: desde el navegador, desde la app y a mano por username — dónde pegar el enlace y qué no garantiza.",
  lead: [
    "El enlace del perfil de Instagram sirve para el sitio, la tarjeta de visita, los ads y el chat: la persona llega directo a la cuenta. El formato es simple — una dirección como `https://www.instagram.com/username/`.",
    "Abajo: cómo copiar la URL y dónde colocarla. El menú de tres puntos y las etiquetas cambian; la idea se mantiene. La nota del producto Meta está en la página. (El título original de WP hablaba de «varias stories», pero el cuerpo era sobre el enlace del perfil — conservamos el contenido real.)",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Instagram* y WhatsApp* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia el enlace del perfil de un enlace en Stories?",
      a: "Una URL de perfil abre la cuenta entera. Un enlace o sticker de Story es otra mecánica con límites según el tipo de cuenta.",
    },
    {
      q: "¿Importa mayúsculas en el username?",
      a: "En la URL, usa el login tal como aparece en la dirección del perfil. No inventes espacios ni caracteres — copia de la barra de dirección.",
    },
    {
      q: "¿El enlace trae followers por sí solo?",
      a: "No. Solo abre el perfil. Hacen falta oferta, diseño y tráfico. Más enlaces externos ≠ crecimiento automático de ventas.",
    },
    {
      q: "¿Puedo acortar el enlace del perfil?",
      a: "Sí, vía URLs cortas — pero para confianza a menudo es mejor la dirección oficial completa, sobre todo en ads y en el sitio.",
    },
    {
      q: "¿Dónde más puedo obtener un contacto?",
      a: "En un perfil business — botones de contacto, WhatsApp/email donde estén disponibles. Ver diseño del perfil y cuenta business.",
    },
  ],
  sections: [
    {
      title: "De qué está hecha la URL",
      level: 2,
      paras: [
        "Base: dominio de Instagram + username único. Ejemplo: `https://www.instagram.com/your_username/`. El nick es único en la red; si el perfil se renombró, el enlace viejo puede dejar de abrir igual.",
        "No lo confundas con enlaces a un solo post o Reel — esos tienen otra ruta tras el username.",
      ],
    },
    {
      title: "Copiar en el navegador",
      level: 2,
      paras: [
        "Abre Instagram en un navegador, ve al perfil necesario (el tuyo o el de otra persona si está abierto). En la barra de dirección está la URL completa — cópiala.",
        "Asegúrate de que sea la página del perfil, no el feed, Explore o ajustes.",
      ],
    },
    {
      title: "Copiar en la app",
      level: 2,
      paras: [
        "Abre el perfil → menú (⋯ o similar) → un ítem tipo «Copiar enlace del perfil» / Compartir perfil. Pega donde lo necesites.",
        "Las etiquetas han cambiado; busca copiar enlace o «compartir perfil», luego «copiar».",
      ],
      links: [
        {
          label: "Diseño del perfil de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Armar el enlace a mano",
      level: 2,
      paras: [
        "Si conoces el username exacto: `https://www.instagram.com/` + nick + `/`. Prueba el toque en incógnito — ves si el perfil abre sin tu sesión.",
        "Un typo en el nick lleva a la cuenta de otro o a una inexistente — siempre prueba tras armarlo a mano.",
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Poner en ads un enlace de Story o post en lugar del perfil — o al revés cuando necesitas una oferta concreta.",
        },
      ],
    },
    {
      title: "Dónde ponerlo y cómo presentarlo",
      level: 2,
      paras: [
        "Sitio (footer, contactos, botones), otras redes, firma de email, tarjeta de visita, deck, QR. En el copy, un CTA corto («Perfil de Instagram» + enlace) gana a una URL pelada en medio de un párrafo.",
        "Para ads y landings, envía a una cuenta con oferta clara en el header y contenido actual — si no, el toque no convierte.",
      ],
      lists: [
        {
          intro: "Antes de publicar el enlace:",
          items: [
            "el perfil está abierto o las reglas de acceso están claras",
            "el username encaja con la marca",
            "header y avatar están en orden",
            "hay un siguiente paso (Direct, sitio, producto)",
            "enlace probado desde otro dispositivo",
          ],
        },
      ],
      links: [
        {
          label: "Negocio en Instagram",
          href: "/es/blog/biznes-v-instagram/",
        },
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "El enlace del perfil es una dirección de cuenta, no magia de promoción. Copia del navegador o de la app y verifica el toque.",
        "Contenido y oferta coherentes ganan al conteo de menciones externas de la URL.",
      ],
    },
  ],
  closing: [
    "Copia la URL del perfil, pruébala y colócala donde la audiencia realmente hace clic. Lo que ven tras el toque decide el resto.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "biznes-v-instagram",
    "reklama-instagram",
    "avatar-instagram",
    "instagram-direct",
  ],
};

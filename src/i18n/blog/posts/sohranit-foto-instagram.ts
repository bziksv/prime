import type { BlogPost } from "../../../data/blog";

/** EN overlay for sohranit-foto-instagram — same structure as RU JSON. */
export const sohranitFotoInstagramEn: BlogPost = {
  slug: "sohranit-foto-instagram",
  title: "How to save a photo from Instagram to your phone or computer",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/sohranit-foto-instagram/cover-en.webp",
  excerpt:
    "How to download your own or permitted Instagram photos: in-app save, browser, iPhone and Android quirks, and Direct — plus copyright basics and why shady “downloaders” are risky.",
  lead: [
    "You usually save an Instagram frame for your archive, client approval, or another channel. The app UI keeps changing, so this guide covers the methods — not outdated 2020 button screenshots.",
    "Others’ photos are copyrighted. Downloading them “to repost without asking” is bad practice. Below: legal paths for your own content and careful boundaries for everyone else’s. This piece is informational only.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can I save any photo that isn’t mine?",
      a: "Technically, methods exist — but legally and ethically you should only save your own work, licensed assets, or content with the author’s clear permission. For commercial use, get consent in writing.",
    },
    {
      q: "Is there a Save button in the app?",
      a: "For your own posts and within current app features, check the post menu (⋯). Labels change; look for save to gallery or download.",
    },
    {
      q: "Why is it hard to save someone else’s post on iPhone?",
      a: "The platform limits direct saving of others’ content. A screenshot isn’t a full-quality file; for someone else’s work, ask the author.",
    },
    {
      q: "Are third-party Instagram downloaders safe?",
      a: "Many are phishing: they ask for your login or install malware. Never enter your Instagram password on shady sites.",
    },
    {
      q: "How do I save a photo from Direct?",
      a: "It depends on the sender’s settings (including view-once photos) and your OS. One-time vanishing attachments often can’t be saved officially — that’s by design.",
    },
    {
      q: "Do I need a computer to save photos?",
      a: "For your own posts, a browser or Meta Business Suite (if available for your account type) is handy. On phone, use the app and a file manager.",
    },
    {
      q: "Is image quality preserved when I save?",
      a: "The platform may serve a compressed version. For print, keep originals yourself — don’t rely only on a feed download.",
    },
    {
      q: "Is this a guide on how to steal photos?",
      a: "No. The focus is your own content and legal scenarios. Don’t use others’ commercial content without rights.",
    },
  ],
  sections: [
    {
      title: "First: your photos vs. others’",
      level: 2,
      paras: [
        "Your posts and Stories (when the feature is available) are fine to export for an archive. Others’ work — only with permission or within fair use and local law; for ads and the site, agree with the author first.",
        "A screenshot of someone else’s post doesn’t make you the rights holder. For brand content, prefer the photographer’s original file.",
      ],
      lists: [
        {
          intro: "Legal scenarios:",
          items: [
            "archive of your own posts",
            "export for a client per brief",
            "content with written permission",
            "licensed assets or your own shoots instead of “downloaded from the feed”",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t enter your Instagram login and password on third-party “download” sites — account-takeover risk.",
        },
      ],
    },
    {
      title: "Saving from the app (general principle)",
      level: 2,
      paras: [
        "Open the post → actions menu (⋯ or similar) → save or download if it exists for that content type and author. For your own posts the option is usually more available than for others’.",
        "If there’s no option, that’s a platform limit — not a “broken phone.” Then take the original from cloud or camera roll, or ask the author.",
      ],
      lists: [
        {
          intro: "Before saving:",
          items: [
            "update the app",
            "confirm the post is yours or you have rights",
            "for carousels, save the frame you need separately if the UI offers it",
          ],
        },
      ],
      links: [
        {
          label: "Photos for Instagram: shooting tips",
          href: "/en/blog/foto-instagram/",
        },
      ],
    },
    {
      title: "iPhone: practical options",
      level: 2,
      paras: [
        "For your media: save via the post menu to the gallery, or export through linked business tools if you use them. A screenshot is a fallback for draft approval — not for print.",
        "Third-party IPA or jailbreak utilities aren’t recommended: they’re unstable and unsafe. Keep originals in Photos or the cloud right after shooting.",
      ],
      lists: [
        {
          intro: "Habit for creators:",
          items: [
            "shoot → back up to album or cloud immediately",
            "the feed gets a copy, not the only file",
            "send the client the original, not a crop from Instagram",
          ],
        },
      ],
    },
    {
      title: "Android: practical options",
      level: 2,
      paras: [
        "Same idea: officially save your posts via the menu, then use a file manager for the app folder (paths depend on Android version and OEM). Don’t install “Instagram mods” from unknown APKs — a common account-theft vector.",
        "If you save for SMM work, keep a project folder on disk or in the cloud with dates and usage rights.",
      ],
      lists: [
        {
          intro: "Security:",
          items: [
            "official client or app store only",
            "no “cracked” clients",
            "2FA on the account",
          ],
        },
      ],
      links: [
        {
          label: "Instagram password basics",
          href: "/en/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Browser and computer",
      level: 2,
      paras: [
        "In a desktop browser, Instagram often disables “Save image as…” for others’ posts. For your own content, a business account or an official account-data archive download is better when you need a batch.",
        "An account archive is a legal way to pull your media in bulk; prep time and format depend on current Meta help.",
      ],
      lists: [
        {
          intro: "When a PC helps:",
          items: [
            "bulk archive of your data",
            "client approval by email",
            "moving files to the team drive",
          ],
        },
      ],
      links: [
        {
          label: "Using Instagram from a computer",
          href: "/en/blog/instagram-s-kompyutera/",
        },
      ],
    },
    {
      title: "Direct and vanishing attachments",
      level: 2,
      paras: [
        "Regular Direct photos can sometimes be saved if the sender didn’t restrict it. View-once items are designed without a save option — workarounds via third-party apps break the rules and raise security risks.",
        "For work approvals, send files via cloud or email with the original — don’t keep the only copy in Direct.",
      ],
      lists: [
        {
          intro: "For the team:",
          items: [
            "brief and originals on a shared drive",
            "Direct — for quick comments",
            "don’t keep the only version only in the messenger",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "If the content matters for business, the source of truth always lives outside the Instagram feed: RAW or JPEG on your disk.",
        },
      ],
    },
  ],
  related: [
    "foto-instagram",
    "instagram-s-kompyutera",
    "parol-instagram",
    "pinterest-skachat",
    "karusel-instagram",
  ],
};

/** ES overlay for sohranit-foto-instagram — same structure as RU JSON / EN. */
export const sohranitFotoInstagramEs: BlogPost = {
  slug: "sohranit-foto-instagram",
  title: "Cómo guardar una foto de Instagram en el teléfono o el ordenador",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/sohranit-foto-instagram/cover-es.webp",
  excerpt:
    "Cómo descargar fotos propias o permitidas de Instagram: guardar en la app, navegador, rarezas de iPhone y Android, y Direct — más básicos de copyright y por qué los «downloaders» dudosos son arriesgados.",
  lead: [
    "Sueles guardar un frame de Instagram para tu archivo, aprobación del cliente u otro canal. La UI de la app cambia sin parar, así que esta guía cubre los métodos — no screenshots de botones de 2020 obsoletos.",
    "Las fotos ajenas están protegidas por copyright. Descargarlas «para repostear sin pedir» es mala práctica. Abajo: caminos legales para tu propio contenido y límites cuidadosos con el de los demás. Esta pieza es solo informativa.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Puedo guardar cualquier foto que no sea mía?",
      a: "Técnicamente hay métodos — pero legal y éticamente solo deberías guardar tu trabajo, assets con licencia o contenido con permiso claro del autor. Para uso comercial, pide consentimiento por escrito.",
    },
    {
      q: "¿Hay un botón Guardar en la app?",
      a: "Para tus propios posts y dentro de las features actuales de la app, revisa el menú del post (⋯). Las etiquetas cambian; busca guardar en galería o descargar.",
    },
    {
      q: "¿Por qué es difícil guardar el post de otro en iPhone?",
      a: "La plataforma limita el guardado directo del contenido ajeno. Un screenshot no es un archivo a calidad completa; para el trabajo de otro, pide al autor.",
    },
    {
      q: "¿Son seguros los downloaders de Instagram de terceros?",
      a: "Muchos son phishing: piden tu login o instalan malware. Nunca introduzcas tu contraseña de Instagram en sitios dudosos.",
    },
    {
      q: "¿Cómo guardo una foto de Direct?",
      a: "Depende de los ajustes del remitente (incluidas fotos view-once) y de tu OS. Los adjuntos que desaparecen a menudo no se pueden guardar de forma oficial — es por diseño.",
    },
    {
      q: "¿Necesito un ordenador para guardar fotos?",
      a: "Para tus propios posts, un navegador o Meta Business Suite (si está disponible para tu tipo de cuenta) es práctico. En el teléfono, usa la app y un gestor de archivos.",
    },
    {
      q: "¿Se conserva la calidad de imagen al guardar?",
      a: "La plataforma puede servir una versión comprimida. Para impresión, guarda originales tú — no dependas solo de una descarga del feed.",
    },
    {
      q: "¿Esto es una guía para robar fotos?",
      a: "No. El foco es tu propio contenido y escenarios legales. No uses contenido comercial ajeno sin derechos.",
    },
  ],
  sections: [
    {
      title: "Primero: tus fotos vs. las de otros",
      level: 2,
      paras: [
        "Tus posts y Stories (cuando la feature está disponible) se pueden exportar bien para un archivo. El trabajo ajeno — solo con permiso o dentro del uso legítimo y la ley local; para ads y el sitio, acuerda primero con el autor.",
        "Un screenshot del post de otro no te convierte en titular de derechos. Para contenido de marca, prefiere el archivo original del fotógrafo.",
      ],
      lists: [
        {
          intro: "Escenarios legales:",
          items: [
            "archivo de tus propios posts",
            "exportar para un cliente según brief",
            "contenido con permiso por escrito",
            "assets con licencia o tus propias tomas en lugar de «descargado del feed»",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No introduzcas login y contraseña de Instagram en sitios de «descarga» de terceros — riesgo de toma de cuenta.",
        },
      ],
    },
    {
      title: "Guardar desde la app (principio general)",
      level: 2,
      paras: [
        "Abre el post → menú de acciones (⋯ o similar) → guardar o descargar si existe para ese tipo de contenido y autor. En tus propios posts la opción suele estar más disponible que en los ajenos.",
        "Si no hay opción, es un límite de la plataforma — no un «teléfono roto». Entonces toma el original de la nube o del carrete, o pide al autor.",
      ],
      lists: [
        {
          intro: "Antes de guardar:",
          items: [
            "actualiza la app",
            "confirma que el post es tuyo o que tienes derechos",
            "en carruseles, guarda el frame que necesitas aparte si la UI lo ofrece",
          ],
        },
      ],
      links: [
        {
          label: "Fotos para Instagram: tips de disparo",
          href: "/es/blog/foto-instagram/",
        },
      ],
    },
    {
      title: "iPhone: opciones prácticas",
      level: 2,
      paras: [
        "Para tu media: guarda vía el menú del post a la galería, o exporta con tools de business enlazadas si las usas. Un screenshot es un fallback para aprobar un borrador — no para impresión.",
        "Utilidades IPA o jailbreak de terceros no se recomiendan: son inestables e inseguras. Guarda originales en Photos o en la nube justo después de disparar.",
      ],
      lists: [
        {
          intro: "Hábito para creators:",
          items: [
            "disparar → backup al álbum o la nube al momento",
            "el feed recibe una copia, no el único archivo",
            "envía al cliente el original, no un crop de Instagram",
          ],
        },
      ],
    },
    {
      title: "Android: opciones prácticas",
      level: 2,
      paras: [
        "Misma idea: guarda oficialmente tus posts vía el menú, luego usa un gestor de archivos para la carpeta de la app (las rutas dependen de la versión de Android y el OEM). No instales «mods de Instagram» desde APKs desconocidos — un vector habitual de robo de cuenta.",
        "Si guardas para trabajo de SMM, mantén una carpeta de proyecto en disco o en la nube con fechas y derechos de uso.",
      ],
      lists: [
        {
          intro: "Seguridad:",
          items: [
            "solo cliente oficial o app store",
            "sin clientes «cracked»",
            "2FA en la cuenta",
          ],
        },
      ],
      links: [
        {
          label: "Básicos de la contraseña de Instagram",
          href: "/es/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Navegador y ordenador",
      level: 2,
      paras: [
        "En un navegador de escritorio, Instagram a menudo desactiva «Guardar imagen como…» en posts ajenos. Para tu propio contenido, una cuenta business o una descarga oficial del archivo de datos de la cuenta es mejor cuando necesitas un lote.",
        "Un archivo de cuenta es una vía legal para sacar tu media en bloque; el tiempo de prep y el formato dependen de la ayuda actual de Meta.",
      ],
      lists: [
        {
          intro: "Cuándo ayuda un PC:",
          items: [
            "archivo masivo de tus datos",
            "aprobación del cliente por email",
            "mover archivos al drive del equipo",
          ],
        },
      ],
      links: [
        {
          label: "Usar Instagram desde el ordenador",
          href: "/es/blog/instagram-s-kompyutera/",
        },
      ],
    },
    {
      title: "Direct y adjuntos que desaparecen",
      level: 2,
      paras: [
        "Las fotos normales de Direct a veces se pueden guardar si el remitente no lo restringió. Los ítems view-once están diseñados sin opción de guardar — los workarounds vía apps de terceros rompen las reglas y suben riesgos de seguridad.",
        "Para aprobaciones de trabajo, envía archivos por nube o email con el original — no dejes la única copia en Direct.",
      ],
      lists: [
        {
          intro: "Para el equipo:",
          items: [
            "brief y originales en un drive compartido",
            "Direct — para comentarios rápidos",
            "no guardes la única versión solo en el mensajero",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Si el contenido importa al negocio, la fuente de verdad vive siempre fuera del feed de Instagram: RAW o JPEG en tu disco.",
        },
      ],
    },
  ],
  related: [
    "foto-instagram",
    "instagram-s-kompyutera",
    "parol-instagram",
    "pinterest-skachat",
    "karusel-instagram",
  ],
};

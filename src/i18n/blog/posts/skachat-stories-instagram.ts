import type { BlogPost } from "../../../data/blog";

/** EN overlay for skachat-stories-instagram — same structure as RU JSON. */
export const skachatStoriesInstagramEn: BlogPost = {
  slug: "skachat-stories-instagram",
  title: "How to save Instagram Stories: yours and others’",
  date: "2021-03-01",
  category: "SMM",
  cover: "/images/blog/skachat-stories-instagram/cover-en.webp",
  excerpt:
    "How to save your Instagram Stories to the archive and Highlights, what about other people’s stories, screenshots, and risks of third-party “downloaders” — without an app catalog or rule workarounds.",
  lead: [
    "Your own Stories are easiest to keep with built-in tools: archive, Highlights, export to the gallery from the story menu. Other people’s are copyright and platform-limits territory: “download everything anonymously” usually means third-party software with risks.",
    "Below: the lawful path for your own content and a careful take on other people’s. We don’t recycle 2021 app catalogs or extensions that ask for your login. Meta product note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from saving a feed photo?",
      a: "Stories last 24 hours (unless in Highlights). Archive mechanics differ. Feed posts — in the save-photo article.",
    },
    {
      q: "Can I officially download someone else’s story?",
      a: "There is usually no “download theirs” button — by design. A screenshot/screen recording does not cancel the author’s rights or ethics.",
    },
    {
      q: "Are StorySaver and similar apps safe?",
      a: "Many ask for a login or carry ads/malware. Don’t enter your Instagram password on shady sites or unknown apps.",
    },
    {
      q: "Does saving to Highlights equal downloading to the phone?",
      a: "No. Highlights keep the story on the profile. Exporting a file to the gallery is a separate menu item when available.",
    },
    {
      q: "Are vanishing Direct items the same as Stories?",
      a: "No. One-time Direct attachments often can’t be saved natively. See the photo and Direct article.",
    },
  ],
  sections: [
    {
      title: "Your Stories: archive and Highlights",
      level: 2,
      paras: [
        "After publish a story usually lands in the Stories archive (unless you turned that off). From there you can rewatch it and often save to the device via the ⋯ menu.",
        "Keep important ones in Highlights: the block stays on the profile longer than a day. That’s a showcase, not a substitute for source files on disk.",
      ],
      lists: [
        {
          intro: "Working order for yours:",
          items: [
            "turn on save to archive",
            "important ones — into Highlights",
            "keep sources yourself before publish",
            "for clients — cloud/drive, not only an export from the app",
          ],
        },
      ],
      links: [
        {
          label: "Save a photo from the feed",
          href: "/en/blog/sohranit-foto-instagram/",
        },
      ],
    },
    {
      title: "Exporting your story to the gallery",
      level: 2,
      paras: [
        "Open your active story or archive → menu → “Save” / “Save to gallery” (wording depends on version). On iPhone and Android file paths differ — check Photos / Gallery / Downloads.",
        "Quality may be compressed. For print and ads shoot and keep the original separately.",
      ],
    },
    {
      title: "Other people’s Stories: ethics and rights",
      level: 2,
      paras: [
        "A screenshot or screen recording is technically possible, but the content isn’t yours. For reshare, ads, and commerce you need the author’s permission; tagging @ is not always consent.",
        "Anonymous viewing and mass-downloading others’ stories via bots is a separate risk (access, bans, phishing). Incognito viewing is a separate article.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Logging into Instagram inside a “story downloader” — that’s how accounts often get stolen.",
        },
      ],
      links: [
        {
          label: "Stories incognito",
          href: "/en/blog/stories-instagram-inkognito/",
        },
        {
          label: "Copyright on Instagram",
          href: "/en/blog/avtorskie-prava-instagram/",
        },
      ],
    },
    {
      title: "Third-party apps and extensions",
      level: 2,
      paras: [
        "Old roundups listed Instastory, StorySaver, IG Helper, and dozens of clones. The app market and platform rules change; some services break ToS or harvest data.",
        "If the goal is your archive, built-in features are enough. If you need someone else’s content for work — ask the author for the file. We don’t catalog or recommend gray downloaders.",
      ],
      lists: [
        {
          intro: "Software red flags:",
          items: [
            "asks for Instagram password",
            "no policy or legal entity",
            "promises a “full anonymous archive of anyone”",
            "aggressive phone permissions",
            "ratings full of ads",
          ],
        },
      ],
    },
    {
      title: "Phone and computer",
      level: 2,
      paras: [
        "On phone, the app is easier for your own stories. On desktop, business profiles often run through official Meta tools — media export depends on available tools, not a random Chrome extension.",
        "Browser “download all friends’ stories” plugins are the same risk class as mobile savers.",
      ],
      links: [
        {
          label: "Instagram from a computer",
          href: "/en/blog/instagram-s-kompyutera/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Your Stories — archive, Highlights, save to gallery, and your own sources. Others’ — author consent, not a hunt for an “anonymous download” app.",
        "Don’t type Instagram passwords on downloader sites.",
      ],
    },
  ],
  closing: [
    "Turn on the archive, keep important ones in Highlights, and store sources yourself. For other people’s stories ask the author for the file — safer for the account and for the law.",
  ],
  related: [
    "sohranit-foto-instagram",
    "stories-instagram-inkognito",
    "avtorskie-prava-instagram",
    "instagram-s-kompyutera",
    "parol-instagram",
    "blokirovka-instagram",
  ],
};

/** ES overlay for skachat-stories-instagram — same structure as RU JSON / EN. */
export const skachatStoriesInstagramEs: BlogPost = {
  slug: "skachat-stories-instagram",
  title: "Cómo guardar Stories de Instagram: las tuyas y las de otros",
  date: "2021-03-01",
  category: "SMM",
  cover: "/images/blog/skachat-stories-instagram/cover-es.webp",
  excerpt:
    "Cómo guardar tus Stories de Instagram en el archivo y Highlights, qué pasa con las de otros, capturas de pantalla y riesgos de «downloaders» de terceros — sin un catálogo de apps ni workarounds de reglas.",
  lead: [
    "Tus propias Stories se guardan más fácil con herramientas integradas: archivo, Highlights, export a la galería desde el menú de la story. Las de otros son territorio de copyright y límites de plataforma: «descargar todo anónimamente» suele significar software de terceros con riesgos.",
    "Abajo: el camino lícito para tu propio contenido y una mirada cuidadosa a lo ajeno. No reciclamos catálogos de apps de 2021 ni extensiones que piden tu login. La nota sobre el producto Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia de guardar una foto del feed?",
      a: "Las Stories duran 24 horas (salvo en Highlights). La mecánica del archivo difiere. Posts del feed — en el artículo de guardar foto.",
    },
    {
      q: "¿Puedo descargar oficialmente la story de otro?",
      a: "Suele no haber botón de «descargar la suya» — por diseño. Una captura/grabación de pantalla no cancela los derechos del autor ni la ética.",
    },
    {
      q: "¿Son seguros StorySaver y apps similares?",
      a: "Muchas piden un login o llevan ads/malware. No introduzcas tu contraseña de Instagram en sitios dudosos o apps desconocidas.",
    },
    {
      q: "¿Guardar en Highlights equivale a descargar al teléfono?",
      a: "No. Highlights mantienen la story en el perfil. Exportar un archivo a la galería es un ítem de menú aparte cuando está disponible.",
    },
    {
      q: "¿Los ítems que desaparecen de Direct son lo mismo que Stories?",
      a: "No. Los adjuntos one-time de Direct a menudo no se pueden guardar de forma nativa. Ver el artículo de foto y Direct.",
    },
  ],
  sections: [
    {
      title: "Tus Stories: archivo y Highlights",
      level: 2,
      paras: [
        "Tras publicar, una story suele caer en el archivo de Stories (salvo que lo hayas apagado). Desde ahí puedes volver a verla y a menudo guardarla en el dispositivo vía el menú ⋯.",
        "Guarda las importantes en Highlights: el bloque se queda en el perfil más de un día. Eso es un escaparate, no un sustituto de los archivos fuente en disco.",
      ],
      lists: [
        {
          intro: "Orden de trabajo para las tuyas:",
          items: [
            "activa guardar en archivo",
            "las importantes — a Highlights",
            "guarda las fuentes tú mismo antes de publicar",
            "para clientes — cloud/drive, no solo un export desde la app",
          ],
        },
      ],
      links: [
        {
          label: "Guardar una foto del feed",
          href: "/es/blog/sohranit-foto-instagram/",
        },
      ],
    },
    {
      title: "Exportar tu story a la galería",
      level: 2,
      paras: [
        "Abre tu story activa o el archivo → menú → «Guardar» / «Guardar en galería» (el wording depende de la versión). En iPhone y Android las rutas de archivo difieren — mira Photos / Gallery / Downloads.",
        "La calidad puede comprimirse. Para impresión y ads dispara y guarda el original aparte.",
      ],
    },
    {
      title: "Stories ajenas: ética y derechos",
      level: 2,
      paras: [
        "Una captura o grabación de pantalla es técnicamente posible, pero el contenido no es tuyo. Para reshare, ads y comercio hace falta permiso del autor; etiquetar @ no siempre es consentimiento.",
        "Ver anónimo y descargar en masa stories ajenas vía bots es un riesgo aparte (acceso, bans, phishing). La vista en incógnito es un artículo aparte.",
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Iniciar sesión en Instagram dentro de un «story downloader» — así a menudo se roban cuentas.",
        },
      ],
      links: [
        {
          label: "Stories en incógnito",
          href: "/es/blog/stories-instagram-inkognito/",
        },
        {
          label: "Copyright en Instagram",
          href: "/es/blog/avtorskie-prava-instagram/",
        },
      ],
    },
    {
      title: "Apps y extensiones de terceros",
      level: 2,
      paras: [
        "Los roundups viejos listaban Instastory, StorySaver, IG Helper y docenas de clones. El mercado de apps y las reglas de la plataforma cambian; algunos servicios rompen el ToS o cosechan datos.",
        "Si la meta es tu archivo, las features integradas bastan. Si necesitas contenido ajeno para trabajo — pide el archivo al autor. No catalogamos ni recomendamos downloaders grises.",
      ],
      lists: [
        {
          intro: "Red flags de software:",
          items: [
            "pide la contraseña de Instagram",
            "sin política ni entidad legal",
            "promete un «archivo anónimo completo de cualquiera»",
            "permisos agresivos del teléfono",
            "ratings llenos de ads",
          ],
        },
      ],
    },
    {
      title: "Teléfono y ordenador",
      level: 2,
      paras: [
        "En el teléfono, la app es más fácil para tus propias stories. En desktop, los perfiles business suelen ir por herramientas oficiales de Meta — el export de media depende de las herramientas disponibles, no de una extensión random de Chrome.",
        "Los plugins de navegador «descarga todas las stories de amigos» son la misma clase de riesgo que los savers móviles.",
      ],
      links: [
        {
          label: "Instagram desde un ordenador",
          href: "/es/blog/instagram-s-kompyutera/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Tus Stories — archivo, Highlights, guardar en galería y tus propias fuentes. Las de otros — consentimiento del autor, no una caza de una app de «descarga anónima».",
        "No escribas contraseñas de Instagram en sitios de downloaders.",
      ],
    },
  ],
  closing: [
    "Activa el archivo, guarda las importantes en Highlights y almacena las fuentes tú mismo. Para stories ajenas pide el archivo al autor — más seguro para la cuenta y para la ley.",
  ],
  related: [
    "sohranit-foto-instagram",
    "stories-instagram-inkognito",
    "avtorskie-prava-instagram",
    "instagram-s-kompyutera",
    "parol-instagram",
    "blokirovka-instagram",
  ],
};

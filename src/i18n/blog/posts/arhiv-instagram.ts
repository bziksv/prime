import type { BlogPost } from "../../../data/blog";

/** EN overlay for arhiv-instagram — same structure as RU JSON. */
export const arhivInstagramEn: BlogPost = {
  slug: "arhiv-instagram",
  title: "Instagram archive: hide a post and put it back on the profile",
  date: "2020-09-28",
  category: "SMM",
  cover: "/images/blog/arhiv-instagram/cover-en.webp",
  excerpt:
    "Why the Instagram post archive exists, how it differs from deletion and the Stories archive, how to hide a post and show it again — without outdated screenshots.",
  lead: [
    "The Instagram post archive hides a photo or video from the profile grid but keeps likes, comments, and the caption. It’s not a forever trash bin and not the same as the 24-hour Stories archive.",
    "Below: why to archive, how to hide a post, and how to bring it back. Menu labels move — check the wording in the current app. Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is archive the same as delete?",
      a: "No. Deletion removes the post. Archive hides it from the profile; stats and comments usually stay until you delete from the archive.",
    },
    {
      q: "Can followers see your archive?",
      a: "No — nobody else can open your post archive. It’s your private shelf of hidden posts.",
    },
    {
      q: "Will the post return to its old place in the grid?",
      a: "Usually yes: the post date stays, so it slots back into profile chronology. Check exact behavior in the current version.",
    },
    {
      q: "Is the post archive the same as the Stories archive?",
      a: "No. After 24 hours Stories go to their own story archive (if save is on). This is the feed/grid post archive.",
    },
    {
      q: "Can you share a post from the archive?",
      a: "Often you can send it to yourself or Direct from the archived entry menu — without showing it on the profile. Depends on the app version.",
    },
  ],
  sections: [
    {
      title: "Why archive posts",
      level: 2,
      paras: [
        "Keep a clean profile look: remove frames that break the style without destroying them.",
        "Niche or offer change: old “personal” photos clash with a business storefront — archive, don’t delete.",
        "Timed offers and paid integrations: hide the post after the window but keep likes/comments as proof of result.",
        "Promo and marathon templates: return to the copy and structure without rewriting from scratch.",
        "Don’t confuse with scheduled posting: archive is for what’s already live. Planning new posts is a separate toolkit — see the scheduling article.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "“A celebrity hid a post” intrigue is a side effect, not a strategy. For business a clear grid and a current offer matter more.",
        },
      ],
    },
    {
      title: "How to hide a post",
      level: 2,
      paras: [
        "Open the post fully (not only the grid preview) → “⋯” menu → “Archive.” Confirmation usually isn’t needed — the post leaves the profile right away.",
        "Carousels and video archive the same way as single photos.",
      ],
      lists: [
        {
          intro: "Before archiving, it’s useful to:",
          items: [
            "save the source if you need it outside Instagram",
            "copy caption text/links if you’re editing the offer",
            "for ad posts — lock metrics in a report; don’t rely on the archive alone",
          ],
        },
      ],
    },
    {
      title: "Where to find the archive",
      level: 2,
      paras: [
        "Entry is usually from your profile: an archive icon (often a clock-with-arrow) or a profile-menu item. The section is private — others don’t see it.",
        "There’s no post “expiry” while it sits in the archive — as long as the account and Meta policy allow. It’s not a substitute for a backup on your own disk.",
      ],
    },
    {
      title: "How to bring a post back to the profile",
      level: 2,
      paras: [
        "Open the entry in the archive → “⋯” → “Show on profile.” The post appears in the grid again.",
        "“Delete” from the archive is permanent (like a normal delete). If unsure — restore to the profile first or save the file yourself.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "You can’t archive someone else’s content — only your posts. Saving someone else’s photo to the device is a different subject.",
        },
      ],
    },
    {
      title: "Stories archive is separate",
      level: 2,
      paras: [
        "So Stories don’t vanish forever after 24 hours, Stories settings can save them to the story archive. That’s a different section from the feed post archive.",
        "More on saving your Stories and risks of third-party “downloaders” — in a separate article.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Post archive = hide from the profile while keeping reactions; deletion = lose the post.",
        "Keep the grid current, and park valuable frames either in the archive or in your own file backup.",
      ],
    },
  ],
  closing: [
    "Hide one extra post in the archive and check how the grid looks — easier to keep the profile storefront without burning content.",
  ],
  related: [
    "skachat-stories-instagram",
    "sohranit-foto-instagram",
    "post-instagram",
    "oformlenie-stranicy-instagram",
    "otlozhennyy-posting-instagram",
    "video-stories-instagram",
  ],
};

/** ES overlay for arhiv-instagram — same structure as RU JSON / EN. */
export const arhivInstagramEs: BlogPost = {
  slug: "arhiv-instagram",
  title: "Archivo de Instagram: ocultar un post y volver a ponerlo en el perfil",
  date: "2020-09-28",
  category: "SMM",
  cover: "/images/blog/arhiv-instagram/cover-es.webp",
  excerpt:
    "Para qué existe el archivo de posts de Instagram, en qué se diferencia del borrado y del archive de Stories, cómo ocultar un post y mostrarlo otra vez — sin capturas obsoletas.",
  lead: [
    "El archivo de posts de Instagram oculta una foto o vídeo de la grid del perfil pero conserva likes, comentarios y el caption. No es una papelera eterna ni lo mismo que el archive de Stories de 24 horas.",
    "Abajo: por qué archivar, cómo ocultar un post y cómo traerlo de vuelta. Las etiquetas de menú se mueven — revisa la redacción en la app actual. El disclaimer de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Archivar es lo mismo que borrar?",
      a: "No. Borrar elimina el post. Archivar lo oculta del perfil; stats y comentarios suelen quedarse hasta que borres desde el archive.",
    },
    {
      q: "¿Pueden los followers ver tu archive?",
      a: "No — nadie más puede abrir tu archive de posts. Es tu estantería privada de posts ocultos.",
    },
    {
      q: "¿El post vuelve a su lugar antiguo en la grid?",
      a: "Suele ser que sí: la fecha del post se mantiene, así que encaja de nuevo en la cronología del perfil. Revisa el comportamiento exacto en la versión actual.",
    },
    {
      q: "¿El archive de posts es lo mismo que el de Stories?",
      a: "No. Tras 24 horas las Stories van a su propio story archive (si el guardado está activo). Este es el archive de posts del feed/grid.",
    },
    {
      q: "¿Se puede compartir un post desde el archive?",
      a: "A menudo puedes enviártelo a ti o a Direct desde el menú de la entrada archivada — sin mostrarlo en el perfil. Depende de la versión de la app.",
    },
  ],
  sections: [
    {
      title: "Por qué archivar posts",
      level: 2,
      paras: [
        "Mantener un look limpio del perfil: quitar frames que rompen el estilo sin destruirlos.",
        "Cambio de nicho u oferta: fotos «personales» viejas chocan con un escaparate business — archiva, no borres.",
        "Ofertas con plazo e integraciones de pago: oculta el post tras la ventana pero conserva likes/comentarios como prueba de resultado.",
        "Plantillas de promo y maratón: vuelve al copy y a la estructura sin reescribir desde cero.",
        "No lo confundas con posting programado: el archive es para lo que ya está live. Planificar posts nuevos es otro toolkit — ver el artículo de scheduling.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La intriga de «un celebrity ocultó un post» es un efecto secundario, no una estrategia. Para negocio importan más una grid clara y una oferta actual.",
        },
      ],
    },
    {
      title: "Cómo ocultar un post",
      level: 2,
      paras: [
        "Abre el post completo (no solo el preview de la grid) → menú «⋯» → «Archive». Suele no hacer falta confirmación — el post sale del perfil al momento.",
        "Carruseles y vídeo se archivan igual que las fotos sueltas.",
      ],
      lists: [
        {
          intro: "Antes de archivar, conviene:",
          items: [
            "guardar la fuente si la necesitas fuera de Instagram",
            "copiar texto/enlaces del caption si estás editando la oferta",
            "en posts de ads — fijar métricas en un informe; no te fíes solo del archive",
          ],
        },
      ],
    },
    {
      title: "Dónde encontrar el archive",
      level: 2,
      paras: [
        "La entrada suele estar en tu perfil: un icono de archive (a menudo un reloj con flecha) o un ítem del menú de perfil. La sección es privada — los demás no la ven.",
        "No hay «caducidad» del post mientras esté en el archive — mientras la cuenta y la política de Meta lo permitan. No sustituye un backup en tu propio disco.",
      ],
    },
    {
      title: "Cómo devolver un post al perfil",
      level: 2,
      paras: [
        "Abre la entrada en el archive → «⋯» → «Show on profile». El post vuelve a aparecer en la grid.",
        "«Delete» desde el archive es permanente (como un borrado normal). Si dudas — restaura al perfil primero o guarda el archivo tú.",
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "No puedes archivar el contenido de otro — solo tus posts. Guardar la foto de otro en el dispositivo es otro tema.",
        },
      ],
    },
    {
      title: "El archive de Stories es aparte",
      level: 2,
      paras: [
        "Para que las Stories no desaparezcan para siempre tras 24 horas, los settings de Stories pueden guardarlas en el story archive. Es una sección distinta del archive de posts del feed.",
        "Más sobre guardar tus Stories y riesgos de «downloaders» de terceros — en un artículo aparte.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Archive de posts = ocultar del perfil conservando reacciones; borrado = perder el post.",
        "Mantén la grid actual y aparca frames valiosos en el archive o en tu propio backup de archivos.",
      ],
    },
  ],
  closing: [
    "Oculta un post de más en el archive y mira cómo queda la grid — más fácil mantener el escaparate del perfil sin quemar contenido.",
  ],
  related: [
    "skachat-stories-instagram",
    "sohranit-foto-instagram",
    "post-instagram",
    "oformlenie-stranicy-instagram",
    "otlozhennyy-posting-instagram",
    "video-stories-instagram",
  ],
};

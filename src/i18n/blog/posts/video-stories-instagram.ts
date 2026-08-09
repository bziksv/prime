import type { BlogPost } from "../../../data/blog";

/** EN overlay for video-stories-instagram — same structure as RU JSON. */
export const videoStoriesInstagramEn: BlogPost = {
  slug: "video-stories-instagram",
  title: "Video in Instagram Stories: publish without killing quality",
  date: "2020-10-08",
  category: "SMM",
  cover: "/images/blog/video-stories-instagram/cover-en.webp",
  excerpt:
    "How to add video to Instagram Stories, save your own clips, prep a 9:16 file, and what’s wrong with third-party downloaders of other people’s Stories.",
  lead: [
    "Stories are a vertical ~24-hour format with photos and short video. For business they’re fast announcements, behind-the-scenes, polls, and warm-up without a “forever” feed post.",
    "Below: publishing, deleting, saving your own clips, and prepping the file so Instagram compresses less. Clip length and shooting modes change — use Meta Help. We don’t list shady savers of other people’s Stories. See the Meta note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How many seconds per Stories segment?",
      a: "Historically about 15 seconds per chunk; longer clips split into several. Check the current limit in the app.",
    },
    {
      q: "How do you save your own Stories?",
      a: "Archive and/or save to gallery in settings or the story menu. Other people’s — only with rights and ethics; see a separate article.",
    },
    {
      q: "Why does video look soft after upload?",
      a: "Often wrong aspect, resolution, or bitrate: the network recompresses. Prep 9:16 and decent H.264 ahead of time.",
    },
    {
      q: "Do you need third-party editors?",
      a: "For cuts and color — yes, if you like. Built-in effects are often enough for simple Stories.",
    },
    {
      q: "How is this different from “download Stories”?",
      a: "That piece focuses on saving. This one is about shooting and publishing video in Stories.",
    },
  ],
  sections: [
    {
      title: "How to add video to Stories",
      level: 2,
      paras: [
        "Create a story from the avatar or plus in the feed: shoot or pick from the gallery. You can select several files in a batch. In recipients choose Stories, not DMs.",
        "After sharing, the story is visible ~24 hours, then goes to the archive (if enabled).",
      ],
      links: [
        {
          label: "Save Stories",
          href: "/en/blog/skachat-stories-instagram/",
        },
      ],
    },
    {
      title: "Deleting and saving your own",
      level: 2,
      paras: [
        "While viewing your story, open the “⋯” menu → delete. Deleted items usually don’t stay in the archive.",
        "To keep content: turn on archive save and, if needed, “save to gallery.” For other people’s stories, third-party sites and extensions bring account and rights risk.",
      ],
      notes: [
        {
          title: "Don’t",
          text: "Don’t feed your Instagram login to shady “download others’ Stories” services.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Stories “incognito”: risks",
          href: "/en/blog/stories-instagram-inkognito/",
        },
      ],
    },
    {
      title: "Why quality drops",
      level: 2,
      paras: [
        "Instagram recompresses clips for its pipeline. If the source isn’t 9:16 or the codec is heavy or weird, artifacts show more.",
        "Meta Help cues: vertical, sensible resolution (often around 720p+), H.264. Check exact numbers in current guidance.",
      ],
    },
    {
      title: "Shooting and modes",
      level: 2,
      paras: [
        "Shoot straight into Stories or prep the clip ahead. Modes like boomerang, zoom, and text appear and vanish — don’t build strategy on one effect.",
        "Live without the “15 second” limit is a separate format; see the Live article.",
      ],
      lists: [
        {
          intro: "Checklist before posting:",
          items: [
            "vertical frame",
            "face/product readable on a small screen",
            "text large and short",
            "sound OK without headphones",
            "CTA: reply / swipe / poll",
          ],
        },
      ],
      links: [
        {
          label: "Instagram Live",
          href: "/en/blog/pryamoy-efir-instagram/",
        },
      ],
    },
    {
      title: "How Stories help reach",
      level: 2,
      paras: [
        "Consistency, replies to reactions, and interactive stickers (poll, question) keep dialogue going. Empty challenges for views burn the audience out.",
        "Check professional-account stats: reach, replies, exits. Compare formats; don’t chase someone else’s “thousands.”",
      ],
      links: [
        {
          label: "Instagram reach",
          href: "/en/blog/ohvat-instagram/",
        },
        {
          label: "Instagram engagement",
          href: "/en/blog/vovlechennost-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Publish vertical video in Stories, keep yours in the archive, and skip shady savers for other people’s Stories.",
        "Quality starts with file prep and a clear frame, not a dozen editing apps.",
      ],
    },
  ],
  closing: [
    "Shoot or prep one 9:16 clip, post it to Stories with a simple CTA, and save to archive — so the format becomes a working tool, not a quality lottery.",
  ],
  related: [
    "skachat-stories-instagram",
    "stories-instagram-inkognito",
    "pryamoy-efir-instagram",
    "ohvat-instagram",
    "vovlechennost-instagram",
    "idei-storis-vk",
  ],
};

/** ES overlay for video-stories-instagram — same structure as RU JSON / EN. */
export const videoStoriesInstagramEs: BlogPost = {
  slug: "video-stories-instagram",
  title: "Vídeo en Instagram Stories: publicar sin matar la calidad",
  date: "2020-10-08",
  category: "SMM",
  cover: "/images/blog/video-stories-instagram/cover.webp",
  excerpt:
    "Cómo añadir vídeo a Instagram Stories, guardar tus propios clips, preparar un archivo 9:16 y qué falla con downloaders de terceros de Stories ajenas.",
  lead: [
    "Stories es un formato vertical de ~24 horas con fotos y vídeo corto. Para negocio son anuncios rápidos, behind-the-scenes, polls y warm-up sin un post del feed «para siempre».",
    "Abajo: publicar, borrar, guardar tus propios clips y preparar el archivo para que Instagram comprima menos. La duración del clip y los modos de grabación cambian — usa Meta Help. No listamos savers dudosos de Stories ajenas. Ver la nota de Meta en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Cuántos segundos por segmento de Stories?",
      a: "Históricamente unos 15 segundos por trozo; los clips más largos se parten en varios. Revisa el límite actual en la app.",
    },
    {
      q: "¿Cómo guardas tus propias Stories?",
      a: "Archive y/o guardar en la galería en settings o en el menú de la story. Las ajenas — solo con derechos y ética; ver un artículo aparte.",
    },
    {
      q: "¿Por qué el vídeo se ve suave tras subir?",
      a: "A menudo aspecto, resolución o bitrate incorrectos: la red recomprime. Prepara 9:16 y un H.264 decente de antemano.",
    },
    {
      q: "¿Hacen falta editores de terceros?",
      a: "Para cortes y color — sí, si te gustan. Los efectos built-in suelen bastar para Stories simples.",
    },
    {
      q: "¿En qué se diferencia de «descargar Stories»?",
      a: "Esa pieza se centra en guardar. Esta va de grabar y publicar vídeo en Stories.",
    },
  ],
  sections: [
    {
      title: "Cómo añadir vídeo a Stories",
      level: 2,
      paras: [
        "Crea una story desde el avatar o el plus del feed: graba o elige de la galería. Puedes seleccionar varios archivos en un lote. En destinatarios elige Stories, no DMs.",
        "Tras compartir, la story es visible ~24 horas y luego va al archive (si está activo).",
      ],
      links: [
        {
          label: "Guardar Stories",
          href: "/es/blog/skachat-stories-instagram/",
        },
      ],
    },
    {
      title: "Borrar y guardar las tuyas",
      level: 2,
      paras: [
        "Mientras ves tu story, abre el menú «⋯» → delete. Lo borrado normalmente no se queda en el archive.",
        "Para conservar contenido: activa guardar en archive y, si hace falta, «save to gallery». Para stories ajenas, sitios y extensiones de terceros traen riesgo de cuenta y de derechos.",
      ],
      notes: [
        {
          title: "No hagas",
          text: "No des tu login de Instagram a servicios dudosos de «descargar Stories ajenas».",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Stories «incógnito»: riesgos",
          href: "/es/blog/stories-instagram-inkognito/",
        },
      ],
    },
    {
      title: "Por qué cae la calidad",
      level: 2,
      paras: [
        "Instagram recomprime clips para su pipeline. Si la fuente no es 9:16 o el codec es pesado o raro, se ven más artefactos.",
        "Pistas de Meta Help: vertical, resolución razonable (a menudo alrededor de 720p+), H.264. Revisa números exactos en la guía actual.",
      ],
    },
    {
      title: "Grabación y modos",
      level: 2,
      paras: [
        "Graba directo a Stories o prepara el clip antes. Modos como boomerang, zoom y texto aparecen y desaparecen — no armes estrategia sobre un solo efecto.",
        "Live sin el límite de «15 segundos» es un formato aparte; ver el artículo de Live.",
      ],
      lists: [
        {
          intro: "Checklist antes de publicar:",
          items: [
            "frame vertical",
            "cara/producto legible en pantalla pequeña",
            "texto grande y corto",
            "sonido OK sin auriculares",
            "CTA: reply / swipe / poll",
          ],
        },
      ],
      links: [
        {
          label: "Instagram Live",
          href: "/es/blog/pryamoy-efir-instagram/",
        },
      ],
    },
    {
      title: "Cómo Stories ayudan al reach",
      level: 2,
      paras: [
        "Consistencia, replies a reacciones y stickers interactivos (poll, question) mantienen el diálogo. Challenges vacíos por views queman a la audiencia.",
        "Revisa stats de cuenta profesional: reach, replies, exits. Compara formatos; no persigas los «miles» de otro.",
      ],
      links: [
        {
          label: "Reach en Instagram",
          href: "/es/blog/ohvat-instagram/",
        },
        {
          label: "Engagement en Instagram",
          href: "/es/blog/vovlechennost-instagram/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Publica vídeo vertical en Stories, guarda lo tuyo en el archive y salta savers dudosos de Stories ajenas.",
        "La calidad empieza con la preparación del archivo y un frame claro, no con una docena de apps de edición.",
      ],
    },
  ],
  closing: [
    "Graba o prepara un clip 9:16, publícalo en Stories con un CTA simple y guárdalo en archive — para que el formato sea una herramienta de trabajo, no una lotería de calidad.",
  ],
  related: [
    "skachat-stories-instagram",
    "stories-instagram-inkognito",
    "pryamoy-efir-instagram",
    "ohvat-instagram",
    "vovlechennost-instagram",
    "idei-storis-vk",
  ],
};

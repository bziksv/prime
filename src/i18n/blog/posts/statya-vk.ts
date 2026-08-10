import type { BlogPost } from "../../../data/blog";

/** EN overlay for statya-vk — same structure as RU JSON. */
export const statyaVkEn: BlogPost = {
  slug: "statya-vk",
  title: "VK article: how to prepare and publish",
  date: "2021-07-20",
  category: "SMM",
  cover: "/images/blog/statya-vk/cover-en.webp",
  excerpt:
    "How to use the VK articles editor: title, formatting, cover, drafts, stats, and publishing on a wall or in a community.",
  lead: [
    "A VK article is a long-form piece with a title, paragraphs, lists, and a cover — not a single-wall post. It’s better for breakdowns, guides, and expert texts in a community.",
    "Below: prep in the editor, text and media layout, publishing, and stats. VK menu labels change — rely on the meaning of “Articles” / the editor blocks, not outdated screenshots.",
  ],
  faq: [
    {
      q: "How is an article different from a wall post?",
      a: "A post is a short entry with attachments. An article is a separate document with layout, a cover, and easier reading; the wall shows a teaser.",
    },
    {
      q: "Where should I write: community or personal page?",
      a: "For business — in a community: subscriber reach and public stats. A personal page — for an author blog.",
    },
    {
      q: "Do I need a cover?",
      a: "Preferably: it lifts teaser clicks. If you skip it, VK may pick an image from the body. Aim for about 16:9; check the exact size in the editor hints.",
    },
    {
      q: "Are drafts saved?",
      a: "Yes, the editor usually autosaves. The drafts section lets you return after closing the tab.",
    },
    {
      q: "Does an article replace a content plan?",
      a: "No. It’s a format. Rhythm and topics are separate; see community growth and management materials.",
    },
  ],
  sections: [
    {
      title: "When you need an article, not a post",
      level: 2,
      paras: [
        "An article fits when the piece is longer than a few paragraphs: a guide, case, roundup, or how-to. A short promo teaser is better as a post with a link to the article or product.",
        "A strong teaser title decides whether people open the text. Without value in the first screens, long-form won’t save it.",
      ],
      links: [
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Editor: text and media",
      level: 2,
      paras: [
        "Open create post and switch to article mode (text icon / “Article” — the label may differ). Fill in the title and body.",
        "Formatting on selection: bold, italic, strikethrough, link, headings, quote. Lists often start on a new line with `1.` or `-` and Enter — if the gesture changed, use the toolbar buttons.",
      ],
      lists: [
        {
          intro: "Media inside the article:",
          items: [
            "photos from an album, device, or drag-and-drop",
            "video in supported formats",
            "illustrations with a readable scene — not filler for filler’s sake",
            "a cover separate from in-body images",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Hotkeys",
          text: "The usual set like Ctrl+B / Ctrl+I and undo Ctrl+Z often works in the web editor; the exact list depends on the browser. Don’t rely on them alone — toolbar buttons are more reliable.",
        },
      ],
    },
    {
      title: "Cover, drafts, and stats",
      level: 2,
      paras: [
        "The cover is the wall teaser banner. Set it explicitly if CTR and brand matter. Reading theme (light/dark) is reader comfort, not SEO.",
        "Drafts and autosave protect against losing text. After publish, watch views, reactions, shares, and link clicks in the material/community stats.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "the title is clear without context",
            "there’s a cover or a strong first illustration",
            "links open",
            "no wall of text without subheads",
            "wall teaser preview checked",
          ],
        },
      ],
    },
    {
      title: "Publishing on the wall and in a community",
      level: 2,
      paras: [
        "In the publish menu pick the cover, adjust the URL slug if needed, author byline, and placement (wall / community). After save, the article appears in the feed with a teaser.",
        "Removing from published often leaves a draft copy — you can republish. For engagement, “share” and reader bookmarks help.",
      ],
      lists: [
        {
          intro: "After it goes live:",
          items: [
            "pin a strong article if needed",
            "announce in community Stories/newsletter",
            "reply to the first comments",
            "a day later review stats and hypotheses",
          ],
        },
      ],
      links: [
        {
          label: "VK newsletter",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
  ],
};

/** ES overlay for statya-vk — same structure as RU JSON / EN. */
export const statyaVkEs: BlogPost = {
  slug: "statya-vk",
  title: "Artículo en VK: cómo prepararlo y publicarlo",
  date: "2021-07-20",
  category: "SMM",
  cover: "/images/blog/statya-vk/cover-es.webp",
  excerpt:
    "Cómo usar el editor de artículos de VK: título, formato, cover, borradores, stats y publicación en el muro o en una comunidad.",
  lead: [
    "Un artículo de VK es una pieza long-form con título, párrafos, listas y cover — no un post de un solo muro. Encaja mejor para desgloses, guías y textos expert en una comunidad.",
    "Abajo: prep en el editor, layout de texto y media, publicación y stats. Las etiquetas del menú de VK cambian — apóyate en el sentido de «Artículos» / los bloques del editor, no en capturas obsoletas.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un artículo de un post en el muro?",
      a: "Un post es una entrada corta con adjuntos. Un artículo es un documento aparte con layout, cover y lectura más fácil; el muro muestra un teaser.",
    },
    {
      q: "¿Dónde escribir: comunidad o página personal?",
      a: "Para negocio — en una comunidad: alcance de suscriptores y stats públicas. Una página personal — para un blog de autor.",
    },
    {
      q: "¿Hace falta un cover?",
      a: "Preferible: sube los clics del teaser. Si lo omites, VK puede elegir una imagen del cuerpo. Apunta a unos 16:9; revisa el tamaño exacto en las pistas del editor.",
    },
    {
      q: "¿Se guardan los borradores?",
      a: "Sí, el editor suele hacer autosave. La sección de borradores deja volver tras cerrar la pestaña.",
    },
    {
      q: "¿Un artículo sustituye un plan de contenido?",
      a: "No. Es un formato. Ritmo y temas van aparte; ver materiales de crecimiento y gestión de comunidad.",
    },
  ],
  sections: [
    {
      title: "Cuándo hace falta un artículo, no un post",
      level: 2,
      paras: [
        "Un artículo encaja cuando la pieza es más larga que unos párrafos: una guía, un caso, un roundup o un how-to. Un teaser promo corto va mejor como post con enlace al artículo o al producto.",
        "Un título de teaser fuerte decide si la gente abre el texto. Sin valor en las primeras pantallas, el long-form no lo salva.",
      ],
      links: [
        {
          label: "Crecer un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Editor: texto y media",
      level: 2,
      paras: [
        "Abre crear post y pasa a modo artículo (icono de texto / «Artículo» — la etiqueta puede diferir). Rellena el título y el cuerpo.",
        "Formato al seleccionar: negrita, cursiva, tachado, enlace, encabezados, cita. Las listas a menudo empiezan en una línea nueva con `1.` o `-` y Enter — si el gesto cambió, usa los botones de la toolbar.",
      ],
      lists: [
        {
          intro: "Media dentro del artículo:",
          items: [
            "fotos de un álbum, del dispositivo o drag-and-drop",
            "vídeo en formatos soportados",
            "ilustraciones con una escena legible — no relleno por rellenar",
            "un cover aparte de las imágenes del cuerpo",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Atajos",
          text: "El set habitual tipo Ctrl+B / Ctrl+I y deshacer Ctrl+Z suele funcionar en el editor web; la lista exacta depende del navegador. No te apoyes solo en ellos — los botones de la toolbar son más fiables.",
        },
      ],
    },
    {
      title: "Cover, borradores y stats",
      level: 2,
      paras: [
        "El cover es el banner teaser del muro. Fíjalo de forma explícita si importan el CTR y la marca. El tema de lectura (claro/oscuro) es comodidad del lector, no SEO.",
        "Borradores y autosave protegen contra perder el texto. Tras publicar, mira vistas, reacciones, shares y clics a enlaces en las stats del material/comunidad.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "el título se entiende sin contexto",
            "hay un cover o una primera ilustración fuerte",
            "los enlaces abren",
            "no hay muro de texto sin subtítulos",
            "preview del teaser en el muro revisado",
          ],
        },
      ],
    },
    {
      title: "Publicar en el muro y en una comunidad",
      level: 2,
      paras: [
        "En el menú de publicación elige el cover, ajusta el slug de la URL si hace falta, byline del autor y ubicación (muro / comunidad). Tras guardar, el artículo aparece en el feed con un teaser.",
        "Quitar de publicados a menudo deja una copia en borrador — puedes republicar. Para engagement ayudan «compartir» y los bookmarks de lectores.",
      ],
      lists: [
        {
          intro: "Tras salir en vivo:",
          items: [
            "fijar un artículo fuerte si hace falta",
            "anunciar en Stories/newsletter de la comunidad",
            "responder a los primeros comentarios",
            "un día después revisar stats e hipótesis",
          ],
        },
      ],
      links: [
        {
          label: "Newsletter de VK",
          href: "/es/blog/rassylka-vk/",
        },
      ],
    },
  ],
};

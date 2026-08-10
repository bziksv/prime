import type { BlogPost } from "../../../data/blog";

/** EN overlay for oblozhka-vk — same structure as RU JSON. */
export const oblozhkaVkEn: BlogPost = {
  slug: "oblozhka-vk",
  title: "VK community cover: idea, mockup, and upload",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/oblozhka-vk/cover-en.webp",
  excerpt:
    "How to design a VK public or group cover: meaning and offer, safe zone, image rights, Canva/Figma, and upload in settings — without outdated pixel grids.",
  lead: [
    "A VK community cover is the first thing a guest sees next to the name and avatar. It decides whether they stay to read the wall or leave in a second.",
    "Below: what to put in the mockup, how to handle cropping on different screens, and how to upload the file. Exact sizes and header widgets change — check VK Help, not numbers from 2021 guides.",
  ],
  faq: [
    {
      q: "Does a cover raise reach?",
      a: "Indirectly: it clarifies brand and trust. Growth comes from content, replies, and ads when needed — not from one image alone.",
    },
    {
      q: "What size should you prepare?",
      a: "VK’s guide is a wide community header banner; pixel recommendations have changed. Take current numbers from VK Help and leave margins at the edges.",
    },
    {
      q: "Do you need text on the cover?",
      a: "A short offer or niche — yes. Tiny prices, address, and ten promos don’t read on mobile.",
    },
    {
      q: "Can you use a random photo from search?",
      a: "Only with your own rights or a license. A random frame from image search risks complaints and claims.",
    },
    {
      q: "How is a cover different from an avatar?",
      a: "The avatar is the round mark in the feed and chats. The cover is the wide community page header.",
    },
    {
      q: "Is an animated header worth it?",
      a: "If your community type supports it and it doesn’t distract from the offer. Start with a clear static mockup, then experiment.",
    },
    {
      q: "How often should you change it?",
      a: "When positioning, season, or a major promo changes. Weekly swaps without a reason break recognition.",
    },
    {
      q: "Where should you build the mockup?",
      a: "Figma, Canva, Photoshop, and similar tools with a set size and safe zone. Keep the source file for edits.",
    },
  ],
  sections: [
    {
      title: "Why you need a cover",
      level: 2,
      paras: [
        "In seconds a guest decides: “are these my people?” The cover with the name and avatar answers: niche, tone, seriousness level.",
        "For a store — product and benefit; for media — topic and character; for a local service — geo and a clear CTA (“book,” “price in the menu”).",
        "An empty or random image hurts trust more than a modest but coherent brand background.",
      ],
      links: [
        {
          label: "VK communities: formats",
          href: "/en/blog/soobshhestva-vk/",
        },
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Sizes and safe zone",
      level: 2,
      paras: [
        "The header crops differently on desktop and in the app. Prepare a wide mockup and keep logo, slogan, and faces in the central “safe” area — edges often fall off-screen.",
        "Don’t rely on pixel grids from old articles: VK has changed recommended resolutions and zones. Before finalizing, open VK Help and the preview in community settings.",
        "Check the phone view: if the main text only reads on a 27\" monitor, the mockup failed.",
      ],
      lists: [
        {
          intro: "Frame mini-rules:",
          items: [
            "important content in the center, not at the very edges",
            "enough contrast between text and background",
            "no more than one main accent",
            "source kept in an editable file",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Stuffing the header with a phone, address, price list, and three promos in tiny type. The menu, description, and posts already do that — the cover needs one idea.",
        },
      ],
    },
    {
      title: "Idea and visuals",
      level: 2,
      paras: [
        "Tie the image to the community theme: product, process, niche atmosphere, a recognizable brand pattern. An abstract filler “handshake” with no content link doesn’t stick.",
        "Align the cover with the avatar: one palette and tone. Chaos of “bright banner + different logo” looks like someone else’s template.",
        "Text on the image — large and short. Leave long paragraphs for the community description and pinned post.",
      ],
      lists: [
        {
          intro: "Usually enough:",
          items: [
            "niche or offer in 3–7 words",
            "logo or brand face",
            "one visual anchor (product / place / style)",
          ],
        },
      ],
    },
    {
      title: "Image rights",
      level: 2,
      paras: [
        "Use your photos, product shoots, licensed illustrations, or generation with clear rights. Copy-paste from image search risks complaints and content blocks.",
        "If people are in the frame — make sure you can publish them in a commercial community context.",
        "Partner logos — only with permission; otherwise you look like a storefront no one should trust.",
      ],
    },
    {
      title: "Building in an editor",
      level: 2,
      paras: [
        "Set the canvas to the current size from VK Help, enable safe-zone guides, stack layers: background → photo/illustration → text/logo.",
        "Export: JPG/PNG without excess weight; a too-heavy file may fail upload or slow the page.",
        "Header widgets (menu, timers, buttons), if available for your community, don’t replace a clear banner: picture meaning first, modules second.",
      ],
      links: [
        {
          label: "Canva for marketing",
          href: "/en/blog/canva/",
        },
      ],
    },
    {
      title: "How to upload in VK",
      level: 2,
      paras: [
        "In community management open design / cover settings (menu labels change) and upload the file. Nudge the crop in preview if the editor allows it.",
        "Save and check the page under another account and on a phone. Make sure avatar and cover don’t clash by color.",
        "After a positioning change, also update the description, menu, and pin — otherwise the header promises one thing and the wall shows another.",
      ],
      lists: [
        {
          intro: "Checklist before publish:",
          items: [
            "size matched to VK Help",
            "text reads on mobile",
            "photo rights are covered",
            "avatar in the same style",
            "community description doesn’t contradict the banner offer",
          ],
        },
      ],
      links: [
        {
          label: "VK community greeting",
          href: "/en/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The cover is a niche and offer calling card — not a dump of contacts.",
        "Safe zone and current sizes beat copying pixels from an old guide.",
        "Your own image rights and a unified style with the avatar hold trust until the first post.",
      ],
    },
  ],
  closing: [
    "Build one clear mockup with the offer in the center, upload it in community settings, and check on a phone — faster than fitting an outdated pixel grid.",
  ],
  related: [
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "privetstvie-vk",
    "shapka-youtube",
    "canva",
    "aydentika-brenda",
  ],
};

/** ES overlay for oblozhka-vk — same structure as RU JSON / EN. */
export const oblozhkaVkEs: BlogPost = {
  slug: "oblozhka-vk",
  title: "Cover de comunidad VK: idea, mockup y subida",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/oblozhka-vk/cover-es.webp",
  excerpt:
    "Cómo diseñar el cover de un público o grupo de VK: sentido y oferta, safe zone, derechos de imagen, Canva/Figma y subida en ajustes — sin grids de píxeles obsoletos.",
  lead: [
    "El cover de una comunidad de VK es lo primero que ve un invitado junto al nombre y el avatar. Decide si se quedan a leer el muro o se van en un segundo.",
    "Abajo: qué poner en el mockup, cómo manejar el recorte en distintas pantallas y cómo subir el archivo. Tamaños exactos y widgets del header cambian — revisa la Help de VK, no cifras de guías de 2021.",
  ],
  faq: [
    {
      q: "¿Un cover sube el alcance?",
      a: "De forma indirecta: aclara marca y confianza. El crecimiento viene del contenido, las respuestas y los ads cuando hacen falta — no de una sola imagen.",
    },
    {
      q: "¿Qué tamaño preparar?",
      a: "La guía de VK es un banner ancho de header de comunidad; las recomendaciones de píxeles han cambiado. Toma las cifras actuales de la Help de VK y deja márgenes en los bordes.",
    },
    {
      q: "¿Hace falta texto en el cover?",
      a: "Una oferta corta o el nicho — sí. Precios diminutos, dirección y diez promos no se leen en el móvil.",
    },
    {
      q: "¿Se puede usar una foto al azar de búsqueda?",
      a: "Solo con derechos propios o licencia. Un frame al azar de búsqueda de imágenes arriesga quejas y reclamaciones.",
    },
    {
      q: "¿En qué se diferencia un cover de un avatar?",
      a: "El avatar es la marca redonda en el feed y los chats. El cover es el header ancho de la página de la comunidad.",
    },
    {
      q: "¿Merece la pena un header animado?",
      a: "Si tu tipo de comunidad lo soporta y no distrae de la oferta. Empieza con un mockup estático claro, luego experimenta.",
    },
    {
      q: "¿Con qué frecuencia cambiarlo?",
      a: "Cuando cambian el posicionamiento, la temporada o una promo grande. Cambios semanales sin motivo rompen el reconocimiento.",
    },
    {
      q: "¿Dónde montar el mockup?",
      a: "Figma, Canva, Photoshop y herramientas similares con tamaño fijado y safe zone. Guarda el archivo fuente para ediciones.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta un cover",
      level: 2,
      paras: [
        "En segundos un invitado decide: «¿son mi gente?». El cover con el nombre y el avatar responde: nicho, tono, nivel de seriedad.",
        "Para una tienda — producto y beneficio; para media — tema y carácter; para un servicio local — geo y un CTA claro («reserva», «precio en el menú»).",
        "Una imagen vacía o al azar daña más la confianza que un fondo de marca modesto pero coherente.",
      ],
      links: [
        {
          label: "Comunidades VK: formatos",
          href: "/blog/soobshhestva-vk/",
        },
        {
          label: "Crecer un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Tamaños y safe zone",
      level: 2,
      paras: [
        "El header se recorta distinto en escritorio y en la app. Prepara un mockup ancho y mantén logo, eslogan y caras en el área «segura» central — los bordes a menudo salen de pantalla.",
        "No te apoyes en grids de píxeles de artículos viejos: VK ha cambiado resoluciones y zonas recomendadas. Antes de cerrar, abre la Help de VK y el preview en ajustes de la comunidad.",
        "Revisa la vista en el móvil: si el texto principal solo se lee en un monitor de 27\", el mockup falló.",
      ],
      lists: [
        {
          intro: "Mini-reglas del frame:",
          items: [
            "contenido importante en el centro, no en los bordes extremos",
            "contraste suficiente entre texto y fondo",
            "no más de un acento principal",
            "fuente guardada en un archivo editable",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Llenar el header con teléfono, dirección, lista de precios y tres promos en tipografía diminuta. El menú, la descripción y los posts ya hacen eso — el cover necesita una idea.",
        },
      ],
    },
    {
      title: "Idea y visuales",
      level: 2,
      paras: [
        "Ata la imagen al tema de la comunidad: producto, proceso, atmósfera del nicho, un patrón de marca reconocible. Un «apretón de manos» abstracto de relleno sin enlace al contenido no pega.",
        "Alinea el cover con el avatar: una paleta y un tono. El caos de «banner chillón + logo distinto» parece plantilla ajena.",
        "Texto en la imagen — grande y corto. Deja los párrafos largos para la descripción de la comunidad y el post fijado.",
      ],
      lists: [
        {
          intro: "Suele bastar:",
          items: [
            "nicho u oferta en 3–7 palabras",
            "logo o cara de marca",
            "un ancla visual (producto / lugar / estilo)",
          ],
        },
      ],
    },
    {
      title: "Derechos de imagen",
      level: 2,
      paras: [
        "Usa tus fotos, shoots de producto, ilustraciones con licencia o generación con derechos claros. Copy-paste de búsqueda de imágenes arriesga quejas y bloqueos de contenido.",
        "Si hay personas en el frame — asegúrate de poder publicarlas en un contexto comercial de comunidad.",
        "Logos de partners — solo con permiso; si no, pareces un escaparate en el que nadie debería confiar.",
      ],
    },
    {
      title: "Montaje en un editor",
      level: 2,
      paras: [
        "Fija el canvas al tamaño actual de la Help de VK, activa guías de safe zone, apila capas: fondo → foto/ilustración → texto/logo.",
        "Export: JPG/PNG sin peso de más; un archivo demasiado pesado puede fallar la subida o ralentizar la página.",
        "Los widgets del header (menú, timers, botones), si están disponibles para tu comunidad, no sustituyen un banner claro: primero el sentido de la imagen, luego los módulos.",
      ],
      links: [
        {
          label: "Canva para marketing",
          href: "/blog/canva/",
        },
      ],
    },
    {
      title: "Cómo subir en VK",
      level: 2,
      paras: [
        "En la gestión de la comunidad abre diseño / ajustes de cover (las etiquetas del menú cambian) y sube el archivo. Ajusta el recorte en preview si el editor lo permite.",
        "Guarda y revisa la página con otra cuenta y en un móvil. Asegúrate de que avatar y cover no chocan por color.",
        "Tras un cambio de posicionamiento, actualiza también la descripción, el menú y el pin — si no, el header promete una cosa y el muro muestra otra.",
      ],
      lists: [
        {
          intro: "Checklist antes de publicar:",
          items: [
            "tamaño alineado con la Help de VK",
            "el texto se lee en el móvil",
            "los derechos de la foto están cubiertos",
            "avatar en el mismo estilo",
            "la descripción de la comunidad no contradice la oferta del banner",
          ],
        },
      ],
      links: [
        {
          label: "Saludo de comunidad VK",
          href: "/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "El cover es una tarjeta de nicho y oferta — no un vertedero de contactos.",
        "Safe zone y tamaños actuales ganan a copiar píxeles de una guía antigua.",
        "Derechos de imagen propios y un estilo unificado con el avatar sostienen la confianza hasta el primer post.",
      ],
    },
  ],
  closing: [
    "Monta un mockup claro con la oferta en el centro, súbelo en ajustes de la comunidad y revisa en el móvil — más rápido que encajar un grid de píxeles obsoleto.",
  ],
  related: [
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "privetstvie-vk",
    "shapka-youtube",
    "canva",
    "aydentika-brenda",
  ],
};

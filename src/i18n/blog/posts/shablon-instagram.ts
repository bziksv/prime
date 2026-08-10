import type { BlogPost } from "../../../data/blog";

/** EN overlay for shablon-instagram — same structure as RU JSON. */
export const shablonInstagramEn: BlogPost = {
  slug: "shablon-instagram",
  title: "Instagram templates: a unified feed and post style",
  date: "2021-07-23",
  category: "SMM",
  cover: "/images/blog/shablon-instagram/cover-en.webp",
  excerpt:
    "Why Instagram post and profile-grid templates matter, which layout schemes work, how to build a mockup in an editor, and which apps help — without clinging to outdated UI buttons.",
  lead: [
    "An Instagram template is a preset visual frame: size, margins, fonts, color palette. The feed looks coherent, and each post isn’t built from scratch.",
    "Below: why mockups help, grid layout schemes, and how to build a template on desktop and phone. App UIs change — a consistent style matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a template different from profile design?",
      a: "Design is the header image, avatar, bio, and overall tone. A template is a reusable post/Stories frame and grid planning. See also the profile design article.",
    },
    {
      q: "Is a checkerboard grid required?",
      a: "No. It’s one technique among many. For many brands, one palette and recognizable fonts matter more than strict geometry.",
    },
    {
      q: "Is Canva enough for Instagram templates?",
      a: "For most tasks, yes: brand kit, post/Stories sizes, export. Use Photoshop if you need fine layer control.",
    },
    {
      q: "Do I need a separate Stories template?",
      a: "Yes, if you often make highlight covers and Stories series. Same logic: consistent style and readability.",
    },
    {
      q: "Does a template replace a content plan?",
      a: "No. The mockup speeds up design; what to publish and why lives in the content plan.",
    },
  ],
  sections: [
    {
      title: "Why templates",
      level: 2,
      paras: [
        "A unified style boosts recognition and cuts time per post: filter, margins, and font are already chosen. New visitors grasp what the account is about faster.",
        "A grid mockup (feed preview) helps you keep the composition intact: color alternation, collage, rows — planned, not whatever happens.",
      ],
      lists: [
        {
          intro: "What a template system gives you:",
          items: [
            "less time per design",
            "a predictable profile grid",
            "less font and color chaos",
            "easier to delegate — “drop the photo into this mockup”",
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Feed layout schemes",
      level: 2,
      paras: [
        "A 3×N grid reads downward in rows of three. A sharp style change every three posts hurts recognition — evolve gradually rather than looking like a different brand every week.",
      ],
      lists: [
        {
          intro: "Popular schemes:",
          items: [
            "basic — one palette and preset on every frame",
            "checkerboard — alternating light/dark or photo/text cards",
            "rows or columns — meaning blocks of three",
            "orientation contrast — carefully: the feed still crops in preview",
            "multi-post collage — rarely, and only if you can finish the series",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "A store often prefers rows like “product / review / tip.” A personal blog — a basic palette without rigid geometry.",
        },
      ],
    },
    {
      title: "How to build a template",
      level: 2,
      paras: [
        "On desktop: Canva, Figma, Photoshop, or similar. Set size for the current post format (square / vertical — check the platform’s current guidance), safe margins, 1–2 fonts, a color pair, space for photo and short text.",
        "On phone: the same Canva / Lightroom presets / template editors. Save a brand kit: colors and fonts not “from scratch” each time.",
        "Grid preview: apps like Preview and peers let you rearrange drafts before publish — handy to check checkerboards and rows.",
      ],
      lists: [
        {
          intro: "Lock in the template:",
          items: [
            "canvas size",
            "margins and text zones",
            "palette (2–3 colors)",
            "headline and body fonts",
            "color/grain preset",
            "CTA button/badge style, if any",
          ],
        },
      ],
    },
    {
      title: "Tools and ready mockups",
      level: 2,
      paras: [
        "Canva and peers — a fast start with an “Instagram post” catalog. Creative Market and paid template packs — check the license. Mobile editors (VSCO, Snapseed, PixelLab, etc.) — for finishing a frame, not instead of brand logic.",
        "App names and plans change (old guides with Adobe Spark / Crello read as brand history). Pick what exports without a watermark and stores your brand kit.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "text reads in preview",
            "faces and prices aren’t cropped",
            "a grid of the last 9 posts looks coherent",
            "the template doesn’t clash with the avatar and highlights",
          ],
        },
      ],
      links: [
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for shablon-instagram — same structure as RU JSON / EN. */
export const shablonInstagramEs: BlogPost = {
  slug: "shablon-instagram",
  title: "Plantillas de Instagram: un feed unificado y estilo de post",
  date: "2021-07-23",
  category: "SMM",
  cover: "/images/blog/shablon-instagram/cover-es.webp",
  excerpt:
    "Por qué importan las plantillas de posts y de la grilla del perfil en Instagram, qué esquemas de layout funcionan, cómo montar un mockup en un editor y qué apps ayudan — sin aferrarse a botones de UI obsoletos.",
  lead: [
    "Una plantilla de Instagram es un marco visual prefijado: tamaño, márgenes, fuentes, paleta de color. El feed se ve coherente y cada post no se construye desde cero.",
    "Abajo: por qué ayudan los mockups, esquemas de layout de la grilla y cómo montar una plantilla en escritorio y móvil. Las UIs de las apps cambian — un estilo consistente importa más que capturas de botones.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia una plantilla del diseño del perfil?",
      a: "El diseño es la imagen de cabecera, el avatar, el bio y el tono general. Una plantilla es un marco reutilizable de post/Stories y la planificación de la grilla. Ver también el artículo de diseño del perfil.",
    },
    {
      q: "¿Hace falta una grilla de damero?",
      a: "No. Es una técnica entre muchas. Para muchas marcas importan más una paleta y fuentes reconocibles que una geometría estricta.",
    },
    {
      q: "¿Basta Canva para plantillas de Instagram?",
      a: "Para la mayoría de tareas, sí: brand kit, tamaños de post/Stories, export. Usa Photoshop si necesitas control fino de capas.",
    },
    {
      q: "¿Hace falta una plantilla aparte para Stories?",
      a: "Sí, si sueles hacer covers de highlights y series de Stories. Misma lógica: estilo consistente y legibilidad.",
    },
    {
      q: "¿Una plantilla sustituye un plan de contenido?",
      a: "No. El mockup acelera el diseño; qué publicar y por qué vive en el plan de contenido.",
    },
  ],
  sections: [
    {
      title: "Por qué las plantillas",
      level: 2,
      paras: [
        "Un estilo unificado sube el reconocimiento y corta el tiempo por post: filtro, márgenes y fuente ya están elegidos. Los visitantes nuevos entienden más rápido de qué va la cuenta.",
        "Un mockup de grilla (preview del feed) ayuda a mantener la composición: alternancia de color, collage, filas — planificado, no lo que salga.",
      ],
      lists: [
        {
          intro: "Qué te da un sistema de plantillas:",
          items: [
            "menos tiempo por diseño",
            "una grilla de perfil predecible",
            "menos caos de fuentes y colores",
            "más fácil delegar — «mete la foto en este mockup»",
          ],
        },
      ],
      links: [
        {
          label: "Diseño del perfil de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Plan de contenido de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Esquemas de layout del feed",
      level: 2,
      paras: [
        "Una grilla 3×N se lee hacia abajo en filas de tres. Un cambio brusco de estilo cada tres posts daña el reconocimiento — evoluciona poco a poco en lugar de parecer otra marca cada semana.",
      ],
      lists: [
        {
          intro: "Esquemas populares:",
          items: [
            "básico — una paleta y preset en cada frame",
            "damero — alternar claro/oscuro o tarjetas foto/texto",
            "filas o columnas — bloques de sentido de tres",
            "contraste de orientación — con cuidado: el feed aún recorta en preview",
            "collage multi-post — rara vez, y solo si puedes terminar la serie",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Una tienda suele preferir filas tipo «producto / reseña / tip». Un blog personal — una paleta básica sin geometría rígida.",
        },
      ],
    },
    {
      title: "Cómo montar una plantilla",
      level: 2,
      paras: [
        "En escritorio: Canva, Figma, Photoshop o similares. Fija el tamaño del formato de post actual (cuadrado / vertical — revisa la guía actual de la plataforma), márgenes seguros, 1–2 fuentes, un par de colores, espacio para foto y texto corto.",
        "En el móvil: los mismos presets de Canva / Lightroom / editores de plantillas. Guarda un brand kit: colores y fuentes no «desde cero» cada vez.",
        "Preview de grilla: apps como Preview y pares dejan reordenar borradores antes de publicar — útil para revisar dameros y filas.",
      ],
      lists: [
        {
          intro: "Fija en la plantilla:",
          items: [
            "tamaño del canvas",
            "márgenes y zonas de texto",
            "paleta (2–3 colores)",
            "fuentes de titular y cuerpo",
            "preset de color/grano",
            "estilo de botón/badge CTA, si lo hay",
          ],
        },
      ],
    },
    {
      title: "Herramientas y mockups listos",
      level: 2,
      paras: [
        "Canva y pares — un arranque rápido con un catálogo «Instagram post». Creative Market y packs de plantillas de pago — revisa la licencia. Editores móviles (VSCO, Snapseed, PixelLab, etc.) — para acabar un frame, no en lugar de la lógica de marca.",
        "Nombres y planes de apps cambian (las guías antiguas con Adobe Spark / Crello se leen como historia de marca). Elige lo que exporte sin watermark y guarde tu brand kit.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "el texto se lee en preview",
            "caras y precios no quedan recortados",
            "una grilla de los últimos 9 posts se ve coherente",
            "la plantilla no choca con el avatar y los highlights",
          ],
        },
      ],
      links: [
        {
          label: "Post de venta en Instagram",
          href: "/es/blog/post-instagram/",
        },
      ],
    },
  ],
};

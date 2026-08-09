import type { BlogPost } from "../../../data/blog";

/** EN overlay for karusel-instagram — same structure as RU JSON. */
export const karuselInstagramEn: BlogPost = {
  slug: "karusel-instagram",
  title: "Instagram carousel: several photos in one post",
  date: "2021-06-18",
  category: "SMM",
  cover: "/images/blog/karusel-instagram/cover-en.webp",
  excerpt:
    "How to build an Instagram post from several photos or videos, why a carousel beats a collage, slide order and a unified style — without outdated click-paths or tools that download other people’s content.",
  lead: [
    "A carousel is a post with several slides: people swipe the dots under the preview. Use it for product angles, a step-by-step guide, or before/after without a tiny collage.",
    "Below: why the format works, how to assemble it, and common mistakes. In-app buttons change; slide order and a unified style matter more than menu screenshots.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How many slides can you add?",
      a: "Platform limits have changed. Follow the current media picker; don’t pack a carousel to the max without a storyline.",
    },
    {
      q: "Can you mix photos and video?",
      a: "Usually yes. Keep one tone and a clear order: hook → substance → CTA.",
    },
    {
      q: "Several photos in one Stories as a single file?",
      a: "Classic Stories are separate frames in a row. For a lasting feed series, use a carousel post.",
    },
    {
      q: "How is a carousel different from a template?",
      a: "Carousel is the publication format. A template is the slide layout. See the posts on templates and selling posts.",
    },
    {
      q: "Do you need third-party “download from Instagram” sites?",
      a: "To run your own account — no. Other people’s content without rights is a risk; for your archive use official export methods.",
    },
  ],
  sections: [
    {
      title: "Why a carousel, not a collage",
      level: 2,
      paras: [
        "A full-screen slide reads better than a tiny grid in one frame. A carousel holds attention longer and fits instructions, catalogs, and comparisons.",
        "The first slide decides whether people swipe: a strong frame or a cover thesis.",
      ],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Selling post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "How to build a multi-media post",
      level: 2,
      paras: [
        "When creating a post, pick several files from the gallery. Selection order usually sets slide order — put the hook first.",
        "Crop and light-edit per slide; one preset across the carousel looks cohesive. Caption and location come after assembly.",
      ],
      lists: [
        {
          intro: "Before you share:",
          items: [
            "a slide scenario from 1→N",
            "the first frame is clear without swiping",
            "unified color and type style",
            "last slide with a CTA or offer",
            "app updated if multi-select is missing",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "For a product: overall view → details → size/materials → in use → ask to message in Direct.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Stories and series",
      level: 2,
      paras: [
        "Several Stories publish in a row and last a day; that doesn’t replace a feed carousel. For an evergreen guide, prefer a carousel post plus a Highlights pin if needed.",
        "Mass-deleting a pile of old posts in one tap often isn’t available — clean one by one or via content tools if you have them.",
      ],
      links: [
        {
          label: "Instagram templates",
          href: "/en/blog/shablon-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for karusel-instagram — same structure as RU JSON / EN. */
export const karuselInstagramEs: BlogPost = {
  slug: "karusel-instagram",
  title: "Carrusel de Instagram: varias fotos en un post",
  date: "2021-06-18",
  category: "SMM",
  cover: "/images/blog/karusel-instagram/cover.webp",
  excerpt:
    "Cómo montar un post de Instagram con varias fotos o vídeos, por qué un carrusel gana a un collage, el orden de slides y un estilo unificado — sin rutas de clics obsoletas ni herramientas que descarguen contenido ajeno.",
  lead: [
    "Un carrusel es un post con varios slides: la gente desliza los puntos bajo el preview. Úsalo para ángulos de producto, una guía paso a paso o before/after sin un collage diminuto.",
    "Abajo: por qué funciona el formato, cómo armarlo y errores habituales. Los botones in-app cambian; el orden de slides y un estilo unificado importan más que capturas de menú.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Cuántos slides se pueden añadir?",
      a: "Los límites de la plataforma han cambiado. Sigue el selector de media actual; no llenes el carrusel al máximo sin un storyline.",
    },
    {
      q: "¿Se pueden mezclar fotos y vídeo?",
      a: "Suele sí. Mantén un tono y un orden claro: gancho → sustancia → CTA.",
    },
    {
      q: "¿Varias fotos en una sola Story como un archivo?",
      a: "Las Stories clásicas son frames separados en fila. Para una serie durable en el feed, usa un post carrusel.",
    },
    {
      q: "¿En qué se diferencia un carrusel de una plantilla?",
      a: "Carrusel es el formato de publicación. Una plantilla es el layout del slide. Ver los posts sobre plantillas y posts de venta.",
    },
    {
      q: "¿Hacen falta sitios de terceros «descargar de Instagram»?",
      a: "Para llevar tu propia cuenta — no. Contenido ajeno sin derechos es un riesgo; para tu archivo usa métodos oficiales de export.",
    },
  ],
  sections: [
    {
      title: "Por qué un carrusel, no un collage",
      level: 2,
      paras: [
        "Un slide a pantalla completa se lee mejor que una grilla diminuta en un frame. Un carrusel sostiene la atención más tiempo y encaja con instrucciones, catálogos y comparaciones.",
        "El primer slide decide si la gente desliza: un frame fuerte o una tesis de cover.",
      ],
      links: [
        {
          label: "Fotos para Instagram",
          href: "/es/blog/foto-instagram/",
        },
        {
          label: "Post de venta",
          href: "/es/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Cómo montar un post multi-media",
      level: 2,
      paras: [
        "Al crear un post, elige varios archivos de la galería. El orden de selección suele fijar el orden de slides — pon el gancho primero.",
        "Recorta y edita ligero por slide; un preset en todo el carrusel se ve cohesivo. Caption y ubicación vienen tras el montaje.",
      ],
      lists: [
        {
          intro: "Antes de compartir:",
          items: [
            "un escenario de slides de 1→N",
            "el primer frame se entiende sin deslizar",
            "estilo unificado de color y tipografía",
            "último slide con un CTA u oferta",
            "app actualizada si falta multi-select",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "Para un producto: vista general → detalles → talla/materiales → en uso → pedir mensaje en Direct.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Stories y series",
      level: 2,
      paras: [
        "Varias Stories se publican en fila y duran un día; eso no sustituye un carrusel del feed. Para una guía evergreen, preferible un post carrusel más un pin en Highlights si hace falta.",
        "Borrar en masa un montón de posts viejos de un toque a menudo no está disponible — limpia uno a uno o vía herramientas de contenido si las tienes.",
      ],
      links: [
        {
          label: "Plantillas de Instagram",
          href: "/es/blog/shablon-instagram/",
        },
        {
          label: "Diseño de la página",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
  ],
};

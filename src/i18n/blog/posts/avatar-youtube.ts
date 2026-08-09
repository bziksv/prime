import type { BlogPost } from "../../../data/blog";

/** EN overlay for avatar-youtube — same structure as RU JSON. */
export const avatarYoutubeEn: BlogPost = {
  slug: "avatar-youtube",
  title: "YouTube channel avatar: requirements, ideas, and how to set it",
  date: "2022-01-12",
  category: "SMM",
  cover: "/images/blog/avatar-youtube/cover-en.webp",
  excerpt:
    "Why a YouTube channel needs an avatar, image requirements, what to show, and how to change the icon from a computer or phone.",
  lead: [
    "A YouTube avatar is the round channel icon under videos, in search, and in comments. People recognize the brand from it faster than from a long name.",
    "Below: what the mark is for, quality criteria, and how to update the image. Studio menu items move — look for channel customization.",
  ],
  faq: [
    {
      q: "How is the avatar different from the channel banner?",
      a: "The avatar is a small permanent mark. The banner is a wide header cover. Both should share one visual system.",
    },
    {
      q: "What size should you prepare?",
      a: "Guide — a high-resolution square (often 800×800 px or more). Check exact limits in YouTube Studio Help.",
    },
    {
      q: "Face photo or logo?",
      a: "A face — for a personal channel. A logo/mark — for a brand and studio. What matters is readability in a small circle.",
    },
    {
      q: "Can you use random images from the web?",
      a: "Only if you have rights. Someone else’s stock/character without a license — risk of complaints and bans.",
    },
    {
      q: "What happens without your own avatar?",
      a: "Google account photo or initials fill in — weaker for channel recognition.",
    },
  ],
  sections: [
    {
      title: "Why you need an avatar",
      level: 2,
      paras: [
        "The icon helps people spot the channel in recommendations, under videos, and in comments. A click on the avatar opens the channel page.",
        "A strong mark works like a mini-logo: viewers remember shape and color faster than the name text.",
      ],
    },
    {
      title: "Image requirements",
      level: 2,
      paras: [
        "Prepare a square with margin: edges may crop under the mask. Put what matters in the center of the frame.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "uniqueness — not a clone of another channel",
            "readability at small size",
            "a clear link to the niche (animals, cars, learning…)",
            "contrast between background and subject",
            "your rights to the image",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Check a preview: shrink the image to ~40–60 px. If meaning disappears — simplify.",
        },
      ],
    },
    {
      title: "What to depict",
      level: 2,
      paras: [
        "Three workable types: host photo, logo/letter mark, illustration. Style should match the tone of the videos.",
      ],
      lists: [
        {
          intro: "Niche tips:",
          items: [
            "personal expert channel — portrait",
            "brand / media — logo",
            "kids / entertainment — bright character (with your rights)",
            "travel / nature — a recognizable niche symbol, not a random licensed fill-in",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Using someone else’s face or a meme without rights “because it looks good.” That’s ethics and legal risk.",
        },
      ],
    },
    {
      title: "How to make your avatar",
      level: 2,
      paras: [
        "Best source — your own shoot or brand logo. Editors (Canva, Figma, Photoshop and analogues) are for crop and contrast, not stealing other people’s work.",
      ],
      lists: [
        {
          intro: "Short pipeline:",
          items: [
            "pick the subject (face / mark)",
            "crop to a square with a safe zone",
            "raise contrast, remove tiny text",
            "export high-quality PNG/JPG",
            "check on dark and light UI themes",
          ],
        },
      ],
    },
    {
      title: "How to set it in YouTube",
      level: 2,
      paras: [
        "In YouTube Studio open channel customization / profile picture and upload the file. On a phone the path is the same via the Studio app or channel settings — look for the channel profile photo block.",
        "After upload wait for cache refresh: the icon in the feed may not change instantly.",
      ],
      lists: [
        {
          intro: "After changing, check:",
          items: [
            "avatar on the channel page",
            "under a fresh video",
            "in a comment",
            "consistency with the banner",
          ],
        },
      ],
      links: [
        {
          label: "Instagram avatar",
          href: "/en/blog/avatar-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for avatar-youtube — same structure as RU JSON / EN. */
export const avatarYoutubeEs: BlogPost = {
  slug: "avatar-youtube",
  title: "Avatar del canal de YouTube: requisitos, ideas y cómo configurarlo",
  date: "2022-01-12",
  category: "SMM",
  cover: "/images/blog/avatar-youtube/cover.webp",
  excerpt:
    "Por qué un canal de YouTube necesita un avatar, requisitos de imagen, qué mostrar y cómo cambiar el icono desde el ordenador o el teléfono.",
  lead: [
    "Un avatar de YouTube es el icono redondo del canal bajo los vídeos, en la búsqueda y en los comentarios. La gente reconoce la marca por él más rápido que por un nombre largo.",
    "Abajo: para qué sirve la marca, criterios de calidad y cómo actualizar la imagen. Los ítems del menú de Studio se mueven — busca la personalización del canal.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el avatar del banner del canal?",
      a: "El avatar es una marca pequeña permanente. El banner es una cover ancha de cabecera. Ambos deberían compartir un sistema visual.",
    },
    {
      q: "¿Qué tamaño preparar?",
      a: "Guía — un cuadrado en alta resolución (a menudo 800×800 px o más). Revisa los límites exactos en la Help de YouTube Studio.",
    },
    {
      q: "¿Foto de cara o logo?",
      a: "Una cara — para un canal personal. Un logo/marca — para una marca y un estudio. Lo que importa es la legibilidad en un círculo pequeño.",
    },
    {
      q: "¿Se pueden usar imágenes al azar de la web?",
      a: "Solo si tienes derechos. Stock/personaje ajeno sin licencia — riesgo de quejas y bans.",
    },
    {
      q: "¿Qué pasa sin avatar propio?",
      a: "Se rellena la foto de la cuenta de Google o las iniciales — más débil para el reconocimiento del canal.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas un avatar",
      level: 2,
      paras: [
        "El icono ayuda a la gente a reconocer el canal en recomendaciones, bajo los vídeos y en comentarios. Un clic en el avatar abre la página del canal.",
        "Una marca fuerte funciona como un mini-logo: los viewers recuerdan forma y color más rápido que el texto del nombre.",
      ],
    },
    {
      title: "Requisitos de la imagen",
      level: 2,
      paras: [
        "Prepara un cuadrado con margen: los bordes pueden recortarse bajo la máscara. Pon lo que importa en el centro del frame.",
      ],
      lists: [
        {
          intro: "Criterios de calidad:",
          items: [
            "unicidad — no un clon de otro canal",
            "legibilidad a tamaño pequeño",
            "un vínculo claro con el nicho (animales, coches, aprendizaje…)",
            "contraste entre fondo y sujeto",
            "tus derechos sobre la imagen",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Revisa un preview: reduce la imagen a ~40–60 px. Si desaparece el sentido — simplifica.",
        },
      ],
    },
    {
      title: "Qué representar",
      level: 2,
      paras: [
        "Tres tipos workable: foto del host, logo/letter mark, ilustración. El estilo debería encajar con el tono de los vídeos.",
      ],
      lists: [
        {
          intro: "Tips por nicho:",
          items: [
            "canal personal de experto — retrato",
            "marca / media — logo",
            "niños / entretenimiento — personaje brillante (con tus derechos)",
            "viajes / naturaleza — un símbolo reconocible del nicho, no un relleno con licencia al azar",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Usar la cara de otro o un meme sin derechos «porque queda bien». Eso es riesgo ético y legal.",
        },
      ],
    },
    {
      title: "Cómo hacer tu avatar",
      level: 2,
      paras: [
        "La mejor fuente — tu propio rodaje o el logo de marca. Los editores (Canva, Figma, Photoshop y análogos) son para crop y contraste, no para robar trabajo ajeno.",
      ],
      lists: [
        {
          intro: "Pipeline corto:",
          items: [
            "elegir el sujeto (cara / marca)",
            "recortar a un cuadrado con safe zone",
            "subir contraste, quitar texto diminuto",
            "exportar PNG/JPG de alta calidad",
            "revisar en temas de UI oscuros y claros",
          ],
        },
      ],
    },
    {
      title: "Cómo configurarlo en YouTube",
      level: 2,
      paras: [
        "En YouTube Studio abre personalización del canal / foto de perfil y sube el archivo. En el teléfono el camino es el mismo vía la app Studio o los ajustes del canal — busca el bloque de foto de perfil del canal.",
        "Tras subir, espera el refresh de cache: el icono en el feed puede no cambiar al instante.",
      ],
      lists: [
        {
          intro: "Tras el cambio, revisa:",
          items: [
            "avatar en la página del canal",
            "bajo un vídeo fresco",
            "en un comentario",
            "coherencia con el banner",
          ],
        },
      ],
      links: [
        {
          label: "Avatar de Instagram",
          href: "/es/blog/avatar-instagram/",
        },
      ],
    },
  ],
};

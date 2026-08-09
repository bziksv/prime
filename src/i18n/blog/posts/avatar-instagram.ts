import type { BlogPost } from "../../../data/blog";

/** EN overlay for avatar-instagram — same structure as RU JSON. */
export const avatarInstagramEn: BlogPost = {
  slug: "avatar-instagram",
  title: "Instagram avatar: how to make a unique profile picture",
  date: "2022-01-04",
  category: "SMM",
  cover: "/images/blog/avatar-instagram/cover-en.webp",
  excerpt:
    "How to choose and make an Instagram avatar: photo or drawing, readability in a circle, editors, and swapping the image without rights headaches.",
  lead: [
    "An Instagram avatar is the first thing people see in the feed, Stories, and comments. On a tiny circle a face, logo, or simple mark has to read clearly.",
    "Below: criteria for commerce and blogs, how to build the image yourself, and what to avoid. This is about the avatar; the full profile is covered in the design article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Photo or logo?",
      a: "Personal blog — usually a face. Brand or shop — a logo or service mark. What matters is recognition at small size.",
    },
    {
      q: "Do you need text on the avatar?",
      a: "Usually no: letters in a 40 px circle turn into mush. Put text in the name and bio.",
    },
    {
      q: "Can you use stock images?",
      a: "Only with a license that allows it. Other people’s photos without rights are a risk. Safer: your photo, logo, or generation with clear rights.",
    },
    {
      q: "What file size should it be?",
      a: "A high-resolution square (guide 1080×1080 and up). Exact limits are in the app Help.",
    },
    {
      q: "How often should you change it?",
      a: "Rarely. Frequent swaps break recognition. Exception — a rebrand or seasonal offer with a return to the main mark.",
    },
  ],
  sections: [
    {
      title: "Why an avatar “works”",
      level: 2,
      paras: [
        "For commerce, the image should answer in a second: who you are and what the profile is about. A pretty frame isn’t enough — it must tie to the offer.",
        "For a personal account “just so something is there” the bar is softer; for a brand the avatar is part of packaging.",
      ],
      lists: [
        {
          intro: "A good avatar:",
          items: [
            "reads in a circle",
            "stands apart from competitors in the niche",
            "matches the feed tone",
            "doesn’t violate others’ rights",
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Photo avatar",
      level: 2,
      paras: [
        "Portrait to chest/face, even light, calm background. A natural expression — skip the grimace. A product in frame only if it doesn’t fight the face and still reads small.",
      ],
      lists: [
        {
          intro: "Shoot checklist:",
          items: [
            "eyes in the upper third of the frame",
            "background without visual noise",
            "no tiny shirt text in the crop zone",
            "same color tone as the feed",
          ],
        },
      ],
    },
    {
      title: "Drawn avatar and logo",
      level: 2,
      paras: [
        "Illustration and a mark suit brands. Keep the background simple and contrast high. Effects sparingly: complex art becomes a blob in a circle.",
      ],
      lists: [
        {
          intro: "Mark rules:",
          items: [
            "one dominant object",
            "large shapes, few details",
            "check on light and dark UI backgrounds",
            "don’t copy someone else’s logo “almost 1:1”",
          ],
        },
      ],
    },
    {
      title: "What to build the image with",
      level: 2,
      paras: [
        "Online editors and desktop apps with crop and layers work. Specific services come and go — look for current Canva, Photopea, or mobile-editor analogues.",
        "A template is a start, not the finish: replace stock faces with your own materials.",
      ],
      lists: [
        {
          intro: "Minimum steps in the editor:",
          items: [
            "square canvas",
            "subject centered",
            "crop with margin for the mask",
            "export without heavy compression",
          ],
        },
      ],
      notes: [
        {
          title: "On rights",
          kind: "tip",
          text: "Don’t download “free avatars” from shady sites: often that’s someone else’s content and malware wrappers. Your photo, brand book, or a licensed asset is safer.",
        },
      ],
    },
    {
      title: "Image sources",
      level: 2,
      paras: [
        "Priority: your own shoot and logo. Licensed libraries — only if the license covers avatar/social use, and the image isn’t already on half your competitors’ profiles.",
        "AI generation is fine if you understand the service rules and don’t imitate another brand.",
      ],
      lists: [
        {
          intro: "Preference order:",
          items: [
            "your photo / logo",
            "designer work",
            "licensed asset / generation",
            "never — other people’s photos from other profiles",
          ],
        },
      ],
    },
    {
      title: "How to change the avatar",
      level: 2,
      paras: [
        "In the profile open the photo → edit / upload new. The path in the app drifts a bit — look for edit profile photo.",
      ],
      lists: [
        {
          intro: "After upload:",
          items: [
            "check the circle on the preview",
            "match highlight covers",
            "make sure the header CTA doesn’t fight the new mark",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel avatar",
          href: "/en/blog/avatar-youtube/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for avatar-instagram — same structure as RU JSON / EN. */
export const avatarInstagramEs: BlogPost = {
  slug: "avatar-instagram",
  title: "Avatar de Instagram: cómo hacer una foto de perfil única",
  date: "2022-01-04",
  category: "SMM",
  cover: "/images/blog/avatar-instagram/cover.webp",
  excerpt:
    "Cómo elegir y hacer un avatar de Instagram: foto o dibujo, legibilidad en círculo, editores y cambiar la imagen sin dolores de derechos.",
  lead: [
    "Un avatar de Instagram es lo primero que la gente ve en el feed, Stories y comentarios. En un círculo minúsculo una cara, un logo o una marca simple tiene que leerse con claridad.",
    "Abajo: criterios para comercio y blogs, cómo armar la imagen tú mismo y qué evitar. Esto va del avatar; el perfil completo está en el artículo de diseño.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Foto o logo?",
      a: "Blog personal — por lo general una cara. Marca o tienda — un logo o marca de servicio. Lo que importa es el reconocimiento a tamaño pequeño.",
    },
    {
      q: "¿Hace falta texto en el avatar?",
      a: "Por lo general no: las letras en un círculo de 40 px se vuelven papilla. Pon el texto en el nombre y la bio.",
    },
    {
      q: "¿Se pueden usar imágenes de stock?",
      a: "Solo con una licencia que lo permita. Fotos ajenas sin derechos son un riesgo. Más seguro: tu foto, logo o generación con derechos claros.",
    },
    {
      q: "¿De qué tamaño debe ser el archivo?",
      a: "Un cuadrado en alta resolución (guía 1080×1080 y más). Los límites exactos están en la Help de la app.",
    },
    {
      q: "¿Con qué frecuencia cambiarlo?",
      a: "Poco. Los cambios frecuentes rompen el reconocimiento. Excepción — un rebrand o una oferta estacional con vuelta a la marca principal.",
    },
  ],
  sections: [
    {
      title: "Por qué un avatar «funciona»",
      level: 2,
      paras: [
        "Para comercio, la imagen debería responder en un segundo: quién eres y de qué va el perfil. Un marco bonito no basta — debe atarse a la oferta.",
        "Para una cuenta personal «solo para que haya algo» el listón es más suave; para una marca el avatar es parte del packaging.",
      ],
      lists: [
        {
          intro: "Un buen avatar:",
          items: [
            "se lee en un círculo",
            "se distingue de competidores del nicho",
            "encaja con el tono del feed",
            "no viola derechos ajenos",
          ],
        },
      ],
      links: [
        {
          label: "Diseño del perfil de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Avatar con foto",
      level: 2,
      paras: [
        "Retrato a pecho/cara, luz pareja, fondo calmado. Expresión natural — salta la mueca. Un producto en frame solo si no pelea con la cara y aún se lee pequeño.",
      ],
      lists: [
        {
          intro: "Checklist de rodaje:",
          items: [
            "ojos en el tercio superior del frame",
            "fondo sin ruido visual",
            "sin texto diminuto de camiseta en la zona de crop",
            "mismo tono de color que el feed",
          ],
        },
      ],
    },
    {
      title: "Avatar dibujado y logo",
      level: 2,
      paras: [
        "Ilustración y marca encajan a las marcas. Mantén el fondo simple y el contraste alto. Efectos con mesura: el arte complejo se vuelve una mancha en un círculo.",
      ],
      lists: [
        {
          intro: "Reglas de la marca:",
          items: [
            "un objeto dominante",
            "formas grandes, pocos detalles",
            "revisar en fondos de UI claros y oscuros",
            "no copies el logo de otro «casi 1:1»",
          ],
        },
      ],
    },
    {
      title: "Con qué armar la imagen",
      level: 2,
      paras: [
        "Funcionan editores online y apps de escritorio con crop y capas. Servicios concretos van y vienen — busca análogos actuales de Canva, Photopea o editores móviles.",
        "Una plantilla es el inicio, no el final: sustituye caras de stock por tus propios materiales.",
      ],
      lists: [
        {
          intro: "Pasos mínimos en el editor:",
          items: [
            "lienzo cuadrado",
            "sujeto centrado",
            "crop con margen para la máscara",
            "exportar sin compresión pesada",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre derechos",
          kind: "tip",
          text: "No descargues «avatars gratis» de sitios dudosos: a menudo es contenido ajeno y wrappers de malware. Tu foto, brand book o un asset con licencia es más seguro.",
        },
      ],
    },
    {
      title: "Fuentes de imagen",
      level: 2,
      paras: [
        "Prioridad: tu propio rodaje y logo. Bibliotecas con licencia — solo si la licencia cubre uso en avatar/redes, y la imagen no está ya en la mitad de los perfiles de tus competidores.",
        "La generación con IA está bien si entiendes las reglas del servicio y no imitas otra marca.",
      ],
      lists: [
        {
          intro: "Orden de preferencia:",
          items: [
            "tu foto / logo",
            "trabajo de diseñador",
            "asset con licencia / generación",
            "nunca — fotos ajenas de otros perfiles",
          ],
        },
      ],
    },
    {
      title: "Cómo cambiar el avatar",
      level: 2,
      paras: [
        "En el perfil abre la foto → editar / subir nueva. El camino en la app se mueve un poco — busca editar foto de perfil.",
      ],
      lists: [
        {
          intro: "Tras subir:",
          items: [
            "revisar el círculo en el preview",
            "encajar las covers de highlights",
            "asegurarte de que el CTA de la cabecera no pelea con la nueva marca",
          ],
        },
      ],
      links: [
        {
          label: "Avatar del canal de YouTube",
          href: "/es/blog/avatar-youtube/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
  ],
};

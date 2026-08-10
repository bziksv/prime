import type { BlogPost } from "../../../data/blog";

/** EN overlay for post-facebook — same structure as RU JSON. */
export const postFacebookEn: BlogPost = {
  slug: "post-facebook",
  title: "How to publish on Facebook: formats and settings",
  date: "2020-10-27",
  category: "SMM",
  cover: "/images/blog/post-facebook/cover-en.webp",
  excerpt:
    "How to publish Facebook posts on a personal wall, in a group, and on a Page: formats, pinning, scheduling, and boosting — without outdated button screenshots.",
  lead: [
    "Publishing on Facebook starts with the “What’s on your mind” field on a profile, in a group, or on a business Page. Formats differ: text, photo/video, poll, event, Live — and you can combine them.",
    "Below: how to create a post, useful settings, and when a paid boost makes sense. Meta menus change; check image sizes and limits in Help. The Meta disclaimer is on the page. Starting a Page or group is covered in a separate article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is a Page post different from a group post?",
      a: "A Page has more brand tools (notes, jobs, products — where available). In a group, community rules and member moderation matter more.",
    },
    {
      q: "Can I turn comments off completely?",
      a: "Often you can only limit them (word filters, who can comment). Exact options depend on profile type and region.",
    },
    {
      q: "Is scheduling available to everyone?",
      a: "Scheduling is usually easier on Pages with editor or admin roles. Personal profiles have a thinner feature set.",
    },
    {
      q: "Can I boost any Facebook post?",
      a: "No. You need a business Page, ads permissions, and a format the ads account accepts for promotion.",
    },
    {
      q: "Is 1200×630 the required image size?",
      a: "It’s a common cue for link previews. Check current recommendations in Meta Ads/Pages Help.",
    },
  ],
  sections: [
    {
      title: "Where people publish: profile, group, Page",
      level: 2,
      paras: [
        "Personal profile — for personal and expert content in friends’ feeds. Group — discussion inside a community. Business Page — brand storefront and entry to ads.",
        "The create-post field is usually under the header. From there you add media, a poll, background, tags, and emoji.",
      ],
      links: [
        {
          label: "Facebook group and Page",
          href: "/en/blog/gruppa-facebook/",
        },
      ],
    },
    {
      title: "Post formats",
      level: 2,
      paras: [
        "Text, photo and video, Live, event, poll, list — the base set. On a Page you may also see notes, products, and jobs — if enabled in the region.",
        "Write so the point reads in the preview: long walls of text rarely get finished. Structure, paragraphs, and fitting emoji help scanning.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "one main idea",
            "media of reasonable weight",
            "tags — before publish if the UI requires it",
            "link and preview check",
            "tone audit: not spam and not clickbait without an offer",
          ],
        },
      ],
    },
    {
      title: "Settings after publishing",
      level: 2,
      paras: [
        "You can edit a post via the “⋯” menu. On Pages, pinning and scheduling are often available.",
        "Comments are limited with unwanted-word filters and rules on who can write. A full ban may be unavailable — check current timeline and public-post settings.",
      ],
    },
    {
      title: "Scheduled posts and a link to the entry",
      level: 2,
      paras: [
        "Scheduling: compose the post → pick publish time. Handy for a Page editorial team.",
        "A post link is usually copied from the publish date or the share menu. Sometimes Page post dates can be shifted — be careful with audience trust.",
      ],
    },
    {
      title: "Boosting a post",
      level: 2,
      paras: [
        "The “Boost” button on a Page post opens a simplified or full ads flow: audience, duration, budget. You need admin rights and linked ads access.",
        "Organic without an offer and engagement rarely flies from one button alone. Content first, then scale. Campaign mistake breakdowns live in Facebook Ads cases.",
      ],
      links: [
        {
          label: "Facebook Ads cases",
          href: "/en/blog/keisy-facebook-ads/",
        },
        {
          label: "Facebook Ads: how it works",
          href: "/en/blog/facebook-ads/",
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "Facebook/Meta Ads availability depends on the ads account and region. This material is informational.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Pick the surface (profile / group / Page), build a clear post, and set what’s needed before or right after publishing.",
        "Paid boost amplifies a ready post; it doesn’t replace meaning.",
      ],
    },
  ],
  closing: [
    "Make one post with a strong first screen on the right surface, check preview and comments — and only then decide if a boost is needed.",
  ],
  related: [
    "gruppa-facebook",
    "keisy-facebook-ads",
    "facebook-ads",
    "svyazka-instagram-facebook",
    "reklama-instagram",
    "nativnaya-reklama",
  ],
};

/** ES overlay for post-facebook — same structure as RU JSON / EN. */
export const postFacebookEs: BlogPost = {
  slug: "post-facebook",
  title: "Cómo publicar en Facebook: formatos y settings",
  date: "2020-10-27",
  category: "SMM",
  cover: "/images/blog/post-facebook/cover-es.webp",
  excerpt:
    "Cómo publicar posts de Facebook en un muro personal, en un grupo y en una Page: formatos, pinning, scheduling y boosting — sin capturas obsoletas de botones.",
  lead: [
    "Publicar en Facebook empieza con el campo «What’s on your mind» en un perfil, en un grupo o en una Page de negocio. Los formatos difieren: texto, foto/vídeo, poll, evento, Live — y se pueden combinar.",
    "Abajo: cómo crear un post, settings útiles y cuándo tiene sentido un boost de pago. Los menús de Meta cambian; revisa tamaños de imagen y límites en Help. El disclaimer de Meta está en la página. Arrancar una Page o grupo se cubre en un artículo aparte.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un post de Page de uno de grupo?",
      a: "Una Page tiene más herramientas de marca (notes, jobs, products — donde estén disponibles). En un grupo importan más las reglas de comunidad y la moderación de miembros.",
    },
    {
      q: "¿Puedo apagar los comentarios por completo?",
      a: "A menudo solo puedes limitar (filtros de palabras, quién puede comentar). Las opciones exactas dependen del tipo de perfil y la región.",
    },
    {
      q: "¿El scheduling está disponible para todos?",
      a: "El scheduling suele ser más fácil en Pages con roles de editor o admin. Los perfiles personales tienen un set de funciones más fino.",
    },
    {
      q: "¿Puedo boostear cualquier post de Facebook?",
      a: "No. Necesitas una Page de negocio, permisos de ads y un formato que la cuenta de ads acepte para promoción.",
    },
    {
      q: "¿1200×630 es el tamaño de imagen obligatorio?",
      a: "Es una pista habitual para previews de enlace. Revisa las recomendaciones actuales en Meta Ads/Pages Help.",
    },
  ],
  sections: [
    {
      title: "Dónde se publica: perfil, grupo, Page",
      level: 2,
      paras: [
        "Perfil personal — para contenido personal y de experto en el feed de amigos. Grupo — discusión dentro de una comunidad. Page de negocio — escaparate de marca y entrada a ads.",
        "El campo de create-post suele estar bajo el header. Desde ahí añades media, un poll, fondo, tags y emoji.",
      ],
      links: [
        {
          label: "Grupo y Page de Facebook",
          href: "/es/blog/gruppa-facebook/",
        },
      ],
    },
    {
      title: "Formatos de post",
      level: 2,
      paras: [
        "Texto, foto y vídeo, Live, evento, poll, lista — el set base. En una Page también puedes ver notes, products y jobs — si están habilitados en la región.",
        "Escribe para que el punto se lea en el preview: los muros largos de texto rara vez se terminan. Estructura, párrafos y emoji bien puestos ayudan a escanear.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "una idea principal",
            "media de peso razonable",
            "tags — antes de publicar si la UI lo exige",
            "comprobar enlace y preview",
            "auditoría de tono: no spam y no clickbait sin oferta",
          ],
        },
      ],
    },
    {
      title: "Settings tras publicar",
      level: 2,
      paras: [
        "Puedes editar un post vía el menú «⋯». En Pages, a menudo hay pinning y scheduling.",
        "Los comentarios se limitan con filtros de palabras no deseadas y reglas sobre quién puede escribir. Un ban total puede no estar disponible — revisa los settings actuales de timeline y posts públicos.",
      ],
    },
    {
      title: "Posts programados y enlace a la entrada",
      level: 2,
      paras: [
        "Scheduling: compón el post → elige la hora de publicación. Útil para un equipo editorial de Page.",
        "El enlace del post suele copiarse desde la fecha de publicación o el menú share. A veces las fechas de posts de Page se pueden mover — ten cuidado con la confianza de la audiencia.",
      ],
    },
    {
      title: "Boostear un post",
      level: 2,
      paras: [
        "El botón «Boost» en un post de Page abre un flujo de ads simplificado o completo: audiencia, duración, presupuesto. Necesitas derechos de admin y acceso a ads vinculado.",
        "Lo orgánico sin oferta y engagement rara vez vuela solo con un botón. Primero contenido, luego escala. Los desgloses de errores de campaña viven en casos de Facebook Ads.",
      ],
      links: [
        {
          label: "Casos de Facebook Ads",
          href: "/es/blog/keisy-facebook-ads/",
        },
        {
          label: "Facebook Ads: cómo funciona",
          href: "/es/blog/facebook-ads/",
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "La disponibilidad de Facebook/Meta Ads depende de la cuenta de ads y la región. Este material es informativo.",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Elige la superficie (perfil / grupo / Page), arma un post claro y configura lo necesario antes o justo después de publicar.",
        "El boost de pago amplifica un post listo; no sustituye el sentido.",
      ],
    },
  ],
  closing: [
    "Haz un post con un first screen fuerte en la superficie correcta, revisa preview y comentarios — y solo entonces decide si hace falta un boost.",
  ],
  related: [
    "gruppa-facebook",
    "keisy-facebook-ads",
    "facebook-ads",
    "svyazka-instagram-facebook",
    "reklama-instagram",
    "nativnaya-reklama",
  ],
};

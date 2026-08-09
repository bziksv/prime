import type { BlogPost } from "../../../data/blog";

/** EN overlay for otmetki-instagram — same structure as RU JSON. */
export const otmetkiInstagramEn: BlogPost = {
  slug: "otmetki-instagram",
  title: "Instagram tags: rules, mistakes, and real value",
  date: "2021-06-25",
  category: "SMM",
  cover: "/images/blog/otmetki-instagram/cover-en.webp",
  excerpt:
    "Why tag accounts in Instagram Stories and posts, which limits and mistakes get in the way, and how to use tags for collaborations — without outdated click-path tutorials.",
  lead: [
    "A tag (@handle or a photo tag) gives a quick jump to another profile and notifies the tagged person. For business that’s collaborations, partner mentions, and navigation across your own accounts.",
    "Below: what the feature is for, typical rules and mistakes, and useful scenarios. The app UI changes; check limits and menu labels in the current Instagram version.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a Stories mention the same as a photo tag?",
      a: "Same idea (link to a profile), different mechanics. In Stories it’s usually @ in text or a mention sticker; in a post it’s a tag on the image. Check the current UI.",
    },
    {
      q: "How many accounts can you tag at once?",
      a: "Limits have changed (historically Stories were often around a dozen). Need more — split across several Stories or posts.",
    },
    {
      q: "Can you tag someone who blocked you?",
      a: "Usually no: without access to the profile, the tag won’t stick.",
    },
    {
      q: "Do you need a third-party scheduler?",
      a: "No. Schedulers help with timing, but tags work in the app too. Don’t give your password to shady services.",
    },
    {
      q: "How is tagging different from profile design?",
      a: "Design is the header and grid. Tags are cross-links inside content. See also Stories and business-account posts.",
    },
  ],
  sections: [
    {
      title: "Why tag others",
      level: 2,
      paras: [
        "With one tap a follower can jump to a partner, branch, expert, or product account. The tagged person sees the mention and may reply with a Story or reshare — when it fits.",
        "For a brand it’s not “follower magic,” but a navigation and cross-promo tool when both sides agree.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "collaboration with a partner",
            "mentioning a supplier or expert",
            "linking several of your own profiles",
            "navigation to a shop or landing account",
          ],
        },
      ],
      links: [
        {
          label: "Instagram Stories",
          href: "/en/blog/stories-instagram-inkognito/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Rules and limits",
      level: 2,
      paras: [
        "Tag only real handles without extra characters around @. Don’t exceed the tag limit per post. A private profile — or one that blocked you — is usually unavailable for tagging.",
        "If someone was tagged against their will, they can report it or limit mentions in privacy settings — factor that into collaborations.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "handle copied correctly",
            "profile not on a block list",
            "consent for commercial mention",
            "don’t spam dozens of random tags",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Wrong handle, a space after @, over the limit, a tag “for show” with no context — common reasons the link fails or adds no value.",
        "Emulators and third-party SMM dashboards aren’t required. If you use a scheduler, pick a trusted one and don’t store the password in shady forms.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "One meaningful tag with context in the frame beats ten random handles “for reach.”",
        },
      ],
    },
    {
      title: "How tags help growth",
      level: 2,
      paras: [
        "Tags strengthen collaborations and cross-promo and help move a follower along a chain of accounts (series, quest, branches). They don’t replace ads or a content plan.",
        "Measure the result: profile visits, replies, saves — not only the fact that “a tag was placed.”",
      ],
      lists: [
        {
          intro: "What to measure:",
          items: [
            "replies and reshares from tagged people",
            "follower growth after a collab",
            "sticker/mention taps (if stats are available)",
            "audience quality, not a raw counter",
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram Insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for otmetki-instagram — same structure as RU JSON / EN. */
export const otmetkiInstagramEs: BlogPost = {
  slug: "otmetki-instagram",
  title: "Etiquetas en Instagram: reglas, errores y valor real",
  date: "2021-06-25",
  category: "SMM",
  cover: "/images/blog/otmetki-instagram/cover.webp",
  excerpt:
    "Por qué etiquetar cuentas en Stories y posts de Instagram, qué límites y errores estorban, y cómo usar tags en colaboraciones — sin tutoriales de clics obsoletos.",
  lead: [
    "Una etiqueta (@handle o un tag en la foto) da un salto rápido a otro perfil y notifica a la persona etiquetada. Para negocio son colaboraciones, menciones a partners y navegación entre tus propias cuentas.",
    "Abajo: para qué sirve la función, reglas y errores típicos, y escenarios útiles. La UI de la app cambia; revisa límites y etiquetas del menú en la versión actual de Instagram.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Una mención en Stories es lo mismo que un tag en la foto?",
      a: "Misma idea (enlace a un perfil), mecánica distinta. En Stories suele ser @ en el texto o un sticker de mención; en un post es un tag sobre la imagen. Revisa la UI actual.",
    },
    {
      q: "¿Cuántas cuentas se pueden etiquetar a la vez?",
      a: "Los límites han cambiado (históricamente en Stories a menudo rondaban la docena). Si necesitas más — parte en varias Stories o posts.",
    },
    {
      q: "¿Se puede etiquetar a quien te bloqueó?",
      a: "Suele no: sin acceso al perfil, el tag no pega.",
    },
    {
      q: "¿Hace falta un scheduler de terceros?",
      a: "No. Los schedulers ayudan con el timing, pero los tags también funcionan en la app. No des tu contraseña a servicios dudosos.",
    },
    {
      q: "¿En qué se diferencia etiquetar del diseño del perfil?",
      a: "El diseño es el header y la grilla. Los tags son cross-links dentro del contenido. Ver también posts de Stories y cuenta business.",
    },
  ],
  sections: [
    {
      title: "Por qué etiquetar a otros",
      level: 2,
      paras: [
        "Con un toque un seguidor puede saltar a un partner, sucursal, expert o cuenta de producto. La persona etiquetada ve la mención y puede responder con una Story o reshare — cuando encaja.",
        "Para una marca no es «magia de seguidores», sino una herramienta de navegación y cross-promo cuando ambas partes están de acuerdo.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "colaboración con un partner",
            "mencionar a un proveedor o expert",
            "enlazar varios de tus propios perfiles",
            "navegación a una cuenta de tienda o landing",
          ],
        },
      ],
      links: [
        {
          label: "Stories de Instagram",
          href: "/es/blog/stories-instagram-inkognito/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Reglas y límites",
      level: 2,
      paras: [
        "Etiqueta solo handles reales sin caracteres de más alrededor de @. No pases el límite de tags por post. Un perfil privado — o uno que te bloqueó — suele no estar disponible para etiquetar.",
        "Si alguien fue etiquetado contra su voluntad, puede reportarlo o limitar menciones en ajustes de privacidad — tenlo en cuenta en colaboraciones.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "handle copiado correctamente",
            "perfil no en una lista de bloqueo",
            "consentimiento para mención comercial",
            "no spamear docenas de tags al azar",
          ],
        },
      ],
    },
    {
      title: "Errores típicos",
      level: 2,
      paras: [
        "Handle equivocado, un espacio tras @, pasar el límite, un tag «de escaparate» sin contexto — motivos habituales de que el enlace falle o no aporte valor.",
        "Emuladores y dashboards SMM de terceros no son obligatorios. Si usas un scheduler, elige uno de confianza y no guardes la contraseña en formularios dudosos.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Un tag con sentido y contexto en el frame gana a diez handles al azar «por alcance».",
        },
      ],
    },
    {
      title: "Cómo ayudan los tags al crecimiento",
      level: 2,
      paras: [
        "Los tags refuerzan colaboraciones y cross-promo y ayudan a mover a un seguidor por una cadena de cuentas (serie, quest, sucursales). No sustituyen ads ni un plan de contenido.",
        "Mide el resultado: visitas al perfil, respuestas, saves — no solo el hecho de que «se puso un tag».",
      ],
      lists: [
        {
          intro: "Qué medir:",
          items: [
            "respuestas y reshares de personas etiquetadas",
            "crecimiento de seguidores tras un collab",
            "toques a sticker/mención (si hay stats)",
            "calidad de audiencia, no un contador crudo",
          ],
        },
      ],
      links: [
        {
          label: "Diseño del perfil de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Insights de Instagram",
          href: "/es/blog/statistika-instagram/",
        },
      ],
    },
  ],
};

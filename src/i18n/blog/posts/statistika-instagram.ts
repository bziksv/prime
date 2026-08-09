import type { BlogPost } from "../../../data/blog";

/** EN overlay for statistika-instagram — same structure as RU JSON. */
export const statistikaInstagramEn: BlogPost = {
  slug: "statistika-instagram",
  title: "Instagram statistics: which metrics to watch and why",
  date: "2021-10-08",
  category: "SMM",
  cover: "/images/blog/statistika-instagram/cover-en.webp",
  excerpt:
    "Why Instagram statistics matter: reach, impressions, saves, audience, and Stories. How to read business-account Insights and not confuse likes with results.",
  lead: [
    "Built-in Instagram statistics (Insights) show what actually works in a profile: reach, actions, audience. Without them it’s easy to chase likes and miss leads.",
    "Below: what to watch on posts, Stories, and followers. Menu labels change; you need a professional or business profile. Informational overview only — not a call to use the platform.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why don’t I see statistics?",
      a: "You often need a professional account. Some data appears only after the switch and only on new posts.",
    },
    {
      q: "Are reach and impressions the same?",
      a: "No. Reach is unique accounts; impressions are all views, including repeats.",
    },
    {
      q: "Which metrics matter more than likes?",
      a: "Saves, replies, profile or site taps, messages; for ads — cost per action. Likes are only one signal.",
    },
    {
      q: "Do Stories keep stats for long?",
      a: "The Insights window for Stories is limited (historically about two weeks). Screenshot or export in time.",
    },
    {
      q: "Are third-party stats tools OK?",
      a: "Be careful: don’t give passwords to shady apps. For your own account, built-in Insights plus UTM to the site usually suffice.",
    },
  ],
  sections: [
    {
      title: "Why look at statistics",
      level: 2,
      paras: [
        "To see growth pace, which formats land, when the audience is online, and where to steer the content plan. Bloggers’ ad metrics are separate — check someone else’s ER independently.",
      ],
      lists: [
        {
          intro: "Typical Insights questions:",
          items: [
            "which posts drive saves and replies",
            "whether reach grows without fake boosts",
            "who followers are (gender, age, cities — if available)",
            "which time slots are livelier",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to open Insights",
      level: 2,
      paras: [
        "Switch the profile to professional mode and open the statistics section in the app. Exact button labels depend on the version.",
        "Historically a Facebook link was often required — the path may differ by region now. If the item is missing, follow the wizard in account settings.",
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Data on old posts before the profile-type change may be incomplete. Rely on publications after Insights are enabled.",
        },
      ],
    },
    {
      title: "Profile and post metrics",
      level: 2,
      paras: [
        "At profile level, people watch visits, reach, link taps, and follower trend. Per post — reach, impressions, likes, comments, saves, shares, sometimes clicks.",
      ],
      lists: [
        {
          intro: "How to read them:",
          items: [
            "high reach + few saves — scrolled past",
            "saves and replies — a strong value signal",
            "compare similar formats with each other",
            "separate ad boost from organic",
          ],
        },
      ],
    },
    {
      title: "Stories, Lives, audience",
      level: 2,
      paras: [
        "In Stories, replies, taps, sticker answers, and exits from the sequence matter. For Lives — peak viewers and retention, not only “how many joined at the start.”",
        "For audience (if the follower threshold allows), watch gender, age, cities, and hourly activity — then shift the posting schedule.",
      ],
      links: [
        {
          label: "Instagram Live",
          href: "/en/blog/pryamoy-efir-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Limits and external tools",
      level: 2,
      paras: [
        "Built-in stats are free, but they don’t replace site and CRM analytics. It’s useful to copy trends into a sheet once a week.",
        "“Spy” tools for other accounts often need risky access and shaky accuracy. For competitors, open signals and a manual review are enough.",
      ],
      lists: [
        {
          intro: "Minimum discipline:",
          items: [
            "once a week — best and weakest posts",
            "UTM on the bio link",
            "a goal in numbers (leads), not only reach",
            "don’t log into shady apps",
          ],
        },
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
  ],
};

/** ES overlay for statistika-instagram — same structure as RU JSON / EN. */
export const statistikaInstagramEs: BlogPost = {
  slug: "statistika-instagram",
  title: "Estadísticas de Instagram: qué métricas mirar y por qué",
  date: "2021-10-08",
  category: "SMM",
  cover: "/images/blog/statistika-instagram/cover.webp",
  excerpt:
    "Por qué importan las estadísticas de Instagram: alcance, impresiones, saves, audiencia y Stories. Cómo leer Insights de cuenta business y no confundir likes con resultados.",
  lead: [
    "Las estadísticas integradas de Instagram (Insights) muestran qué funciona de verdad en un perfil: alcance, acciones, audiencia. Sin ellas es fácil perseguir likes y perder leads.",
    "Abajo: qué mirar en posts, Stories y seguidores. Las etiquetas del menú cambian; hace falta un perfil profesional o business. Solo overview informativo — no una invitación a usar la plataforma.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por qué no veo estadísticas?",
      a: "A menudo hace falta una cuenta profesional. Algunos datos aparecen solo tras el cambio y solo en posts nuevos.",
    },
    {
      q: "¿Alcance e impresiones son lo mismo?",
      a: "No. El alcance son cuentas únicas; las impresiones son todas las vistas, incluidas las repeticiones.",
    },
    {
      q: "¿Qué métricas importan más que los likes?",
      a: "Saves, respuestas, toques al perfil o al sitio, mensajes; en ads — coste por acción. Los likes son solo una señal.",
    },
    {
      q: "¿Las Stories guardan stats mucho tiempo?",
      a: "La ventana de Insights para Stories es limitada (históricamente unas dos semanas). Haz captura o exporta a tiempo.",
    },
    {
      q: "¿Están bien las herramientas de stats de terceros?",
      a: "Con cuidado: no des contraseñas a apps dudosas. Para tu propia cuenta suelen bastar Insights integrados más UTM al sitio.",
    },
  ],
  sections: [
    {
      title: "Por qué mirar estadísticas",
      level: 2,
      paras: [
        "Para ver el ritmo de crecimiento, qué formatos encajan, cuándo la audiencia está online y hacia dónde llevar el plan de contenido. Las métricas de ads de bloggers van aparte — revisa el ER ajeno por tu cuenta.",
      ],
      lists: [
        {
          intro: "Preguntas típicas de Insights:",
          items: [
            "qué posts impulsan saves y respuestas",
            "si el alcance crece sin impulsos falsos",
            "quiénes son los seguidores (género, edad, ciudades — si hay datos)",
            "qué franjas horarias están más vivas",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Cómo abrir Insights",
      level: 2,
      paras: [
        "Pasa el perfil a modo profesional y abre la sección de estadísticas en la app. Las etiquetas exactas de los botones dependen de la versión.",
        "Históricamente a menudo hacía falta un enlace a Facebook — la ruta puede diferir por región ahora. Si falta el ítem, sigue el asistente en ajustes de cuenta.",
      ],
      notes: [
        {
          title: "Consejo",
          kind: "tip",
          text: "Los datos de posts antiguos antes del cambio de tipo de perfil pueden estar incompletos. Apóyate en publicaciones tras activar Insights.",
        },
      ],
    },
    {
      title: "Métricas de perfil y de post",
      level: 2,
      paras: [
        "A nivel de perfil se miran visitas, alcance, toques al enlace y tendencia de seguidores. Por post — alcance, impresiones, likes, comentarios, saves, shares, a veces clics.",
      ],
      lists: [
        {
          intro: "Cómo leerlas:",
          items: [
            "alto alcance + pocos saves — pasaron de largo",
            "saves y respuestas — señal fuerte de valor",
            "compara formatos similares entre sí",
            "separa el impulso de ads de lo orgánico",
          ],
        },
      ],
    },
    {
      title: "Stories, Lives, audiencia",
      level: 2,
      paras: [
        "En Stories importan respuestas, toques, respuestas a stickers y salidas de la secuencia. En Lives — pico de viewers y retención, no solo «cuántos entraron al inicio».",
        "Para audiencia (si el umbral de seguidores lo permite), mira género, edad, ciudades y actividad por hora — luego ajusta el horario de publicación.",
      ],
      links: [
        {
          label: "Directo de Instagram",
          href: "/es/blog/pryamoy-efir-instagram/",
        },
        {
          label: "Plan de contenido de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Límites y herramientas externas",
      level: 2,
      paras: [
        "Las stats integradas son gratis, pero no sustituyen la analítica del sitio y el CRM. Conviene copiar tendencias a una hoja una vez a la semana.",
        "Las herramientas de «espionaje» de otras cuentas a menudo piden acceso arriesgado y precisión dudosa. Para competidores bastan señales abiertas y una revisión manual.",
      ],
      lists: [
        {
          intro: "Disciplina mínima:",
          items: [
            "una vez a la semana — posts mejores y más débiles",
            "UTM en el enlace del bio",
            "un objetivo en números (leads), no solo alcance",
            "no iniciar sesión en apps dudosas",
          ],
        },
      ],
      links: [
        {
          label: "Likes falsos: riesgos",
          href: "/es/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
  ],
};

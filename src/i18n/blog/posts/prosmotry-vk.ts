import type { BlogPost } from "../../../data/blog";

/** EN overlay for prosmotry-vk — same structure as RU JSON. */
export const prosmotryVkEn: BlogPost = {
  slug: "prosmotry-vk",
  title: "VK view counter: how to read reach signals",
  date: "2021-06-22",
  category: "SMM",
  cover: "/images/blog/prosmotry-vk/cover-en.webp",
  excerpt:
    "How the view counter under VKontakte posts works, what counts as a view, how it differs from full community stats, and why fake views hurt.",
  lead: [
    "Under VKontakte posts you see a view counter — a quick sense of how often a post actually “caught” attention, not only likes.",
    "Below: what gets counted, limits of the public counter, and how to use the numbers in a content plan. VK may change algorithm details — check platform help.",
  ],
  faq: [
    {
      q: "Does a view mean appearing in the feed?",
      a: "No. Usually you need a show with a pause/stop on the post, not an instant scroll past.",
    },
    {
      q: "Can I hide the view counter?",
      a: "The public indicator under a post is generally visible to everyone. Deeper stats live in community statistics for admins.",
    },
    {
      q: "Can one person generate several views?",
      a: "For a post usually one view per account counts. Whether a new meaningful show recounts depends on platform rules.",
    },
    {
      q: "Do fake views actually help?",
      a: "No: they distort analytics, spoil ad decisions, and may break the rules. Watch engagement and goals, not “eye” vanity.",
    },
    {
      q: "How is it different from reach in stats?",
      a: "The counter under a post is a fast public signal. Community stats go deeper: reach, demographics, sources — use both layers.",
    },
  ],
  sections: [
    {
      title: "Why the counter exists",
      level: 2,
      paras: [
        "Likes and comments don’t show full interest: people may read silently. The counter gives an order of magnitude for attention to a post in the feed, on the wall, and in recommendations.",
        "It’s not an A/B replacement or a sales guarantee — a guide for comparing formats inside your community.",
      ],
      lists: [
        {
          intro: "Where a view may count:",
          items: [
            "news feed",
            "community / profile wall",
            "recommendations block (if the post got there)",
          ],
        },
      ],
      links: [
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "How a view is counted",
      level: 2,
      paras: [
        "Per platform statements and practice, what matters isn’t an instant scroll but an actual show of the post to the user. Exact “dwell” length isn’t published as a hard SLA.",
        "The counter works for different attachment types (text, photo, clips/video — with accounting nuances). Older posts may have behaved differently when the feature launched.",
      ],
      lists: [
        {
          intro: "Practical traits:",
          items: [
            "the number under the post is public",
            "viewer identity isn’t revealed",
            "handy for comparing posts to each other",
            "bot inflation distorts the picture",
          ],
        },
      ],
    },
    {
      title: "How to use it in work",
      level: 2,
      paras: [
        "Compare views with ER (likes, comments, shares, link clicks). High “eyes” with zero actions signal a weak offer or clickbait.",
        "For ads and client reports lean on account/community stats and goals (leads), not only the public counter.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Keep a table: topic × format × views × goal actions. After 10–20 posts you’ll see what actually works for your audience.",
        },
      ],
      links: [
        {
          label: "VK article",
          href: "/en/blog/statya-vk/",
        },
        {
          label: "Viral reach on VK",
          href: "/en/blog/viralnyy-ohvat-vk/",
        },
      ],
    },
    {
      title: "Media and limits",
      level: 2,
      paras: [
        "Photos and video have a counter too; for video, access rules matter (including for logged-out users). Don’t confuse clip views with ad-campaign reach.",
        "Third-party “who viewed” tools often show only people who left a reaction — don’t treat them as an exact viewer list.",
      ],
      lists: [
        {
          intro: "Don’t:",
          items: [
            "buy fake views",
            "judge quality from a single post",
            "ignore full community stats",
            "promise clients “guaranteed reach” from eye counts",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for prosmotry-vk — same structure as RU JSON / EN. */
export const prosmotryVkEs: BlogPost = {
  slug: "prosmotry-vk",
  title: "Contador de vistas en VK: cómo leer las señales de alcance",
  date: "2021-06-22",
  category: "SMM",
  cover: "/images/blog/prosmotry-vk/cover-es.webp",
  excerpt:
    "Cómo funciona el contador de vistas bajo los posts de VKontakte, qué cuenta como vista, en qué se diferencia de las stats completas de la comunidad y por qué las vistas falsas dañan.",
  lead: [
    "Bajo los posts de VKontakte ves un contador de vistas — una sensación rápida de cuántas veces un post «atrapó» atención de verdad, no solo likes.",
    "Abajo: qué se cuenta, límites del contador público y cómo usar los números en un plan de contenido. VK puede cambiar detalles del algoritmo — revisa la help de la plataforma.",
  ],
  faq: [
    {
      q: "¿Una vista significa aparecer en el feed?",
      a: "No. Suele hacer falta una muestra con una pausa/parada en el post, no un scroll instantáneo de paso.",
    },
    {
      q: "¿Puedo ocultar el contador de vistas?",
      a: "El indicador público bajo un post suele ser visible para todos. Stats más profundas viven en la estadística de la comunidad para admins.",
    },
    {
      q: "¿Puede una persona generar varias vistas?",
      a: "Para un post suele contar una vista por cuenta. Si una nueva muestra con sentido se vuelve a contar depende de las reglas de la plataforma.",
    },
    {
      q: "¿Las vistas falsas ayudan de verdad?",
      a: "No: distorsionan la analítica, estropean decisiones de ads y pueden romper las reglas. Mira engagement y objetivos, no vanidad de «ojos».",
    },
    {
      q: "¿En qué se diferencia del alcance en stats?",
      a: "El contador bajo un post es una señal pública rápida. Las stats de la comunidad van más hondo: alcance, demografía, fuentes — usa ambas capas.",
    },
  ],
  sections: [
    {
      title: "Por qué existe el contador",
      level: 2,
      paras: [
        "Likes y comentarios no muestran el interés completo: la gente puede leer en silencio. El contador da un orden de magnitud de atención a un post en el feed, en el muro y en recomendaciones.",
        "No es un reemplazo de A/B ni una garantía de ventas — una guía para comparar formatos dentro de tu comunidad.",
      ],
      lists: [
        {
          intro: "Dónde puede contar una vista:",
          items: [
            "feed de noticias",
            "muro de la comunidad / perfil",
            "bloque de recomendaciones (si el post llegó ahí)",
          ],
        },
      ],
      links: [
        {
          label: "Crecer un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Cómo se cuenta una vista",
      level: 2,
      paras: [
        "Según declaraciones de la plataforma y la práctica, lo que importa no es un scroll instantáneo sino una muestra real del post al usuario. La duración exacta de «dwell» no se publica como un SLA duro.",
        "El contador funciona para distintos tipos de adjuntos (texto, foto, clips/vídeo — con matices de contabilización). Los posts más antiguos pueden haberse comportado distinto cuando se lanzó la función.",
      ],
      lists: [
        {
          intro: "Rasgos prácticos:",
          items: [
            "el número bajo el post es público",
            "no se revela la identidad del viewer",
            "útil para comparar posts entre sí",
            "la inflación con bots distorsiona la imagen",
          ],
        },
      ],
    },
    {
      title: "Cómo usarlo en el trabajo",
      level: 2,
      paras: [
        "Compara vistas con ER (likes, comentarios, shares, clics a enlaces). Muchos «ojos» con cero acciones señalan una oferta débil o clickbait.",
        "Para ads e informes a clientes apóyate en stats de cuenta/comunidad y objetivos (leads), no solo en el contador público.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Mantén una tabla: tema × formato × vistas × acciones objetivo. Tras 10–20 posts verás qué funciona de verdad para tu audiencia.",
        },
      ],
      links: [
        {
          label: "Artículo en VK",
          href: "/es/blog/statya-vk/",
        },
        {
          label: "Alcance viral en VK",
          href: "/es/blog/viralnyy-ohvat-vk/",
        },
      ],
    },
    {
      title: "Media y límites",
      level: 2,
      paras: [
        "Fotos y vídeo también tienen contador; en vídeo importan las reglas de acceso (también para usuarios sin login). No confundas vistas de clips con el alcance de una campaña de ads.",
        "Las herramientas de terceros «quién vio» a menudo muestran solo a quien dejó una reacción — no las trates como una lista exacta de viewers.",
      ],
      lists: [
        {
          intro: "No hagas:",
          items: [
            "comprar vistas falsas",
            "juzgar la calidad por un solo post",
            "ignorar las stats completas de la comunidad",
            "prometer a clientes «alcance garantizado» por conteos de ojos",
          ],
        },
      ],
    },
  ],
};

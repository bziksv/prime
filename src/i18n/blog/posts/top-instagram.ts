import type { BlogPost } from "../../../data/blog";

/** EN overlay for top-instagram — same structure as RU JSON. */
export const topInstagramEn: BlogPost = {
  slug: "top-instagram",
  title: "Instagram Explore and recommendations: what they do for reach",
  date: "2021-08-10",
  category: "SMM",
  cover: "/images/blog/top-instagram/cover-en.webp",
  excerpt:
    "What it means to surface in hashtag results, Explore, and Instagram recommendations, which engagement signals matter, and why buying likes hurts more than it helps.",
  lead: [
    "People still say “Instagram top” for visible placements: the head of a tag feed, Explore, and recommendation surfaces where the algorithm pushes posts with strong audience response. For business that means reach beyond existing followers.",
    "Below: which signals count, why that reach helps, and why a sharp like-buy spike is a bad bet. UI labels change; engagement logic matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is there one official “Instagram top”?",
      a: "It is more a set of surfaces: search by tag or place, recommendations, similar accounts. In-app names change; the point is the same — people who do not follow you still see the post.",
    },
    {
      q: "How many likes do you need to get in?",
      a: "There is no fixed threshold. Results depend on competition for the tag or niche and the speed of live reactions. Narrow topics are often more reachable than mass tags.",
    },
    {
      q: "Does fake engagement help?",
      a: "Numbers can rise briefly, but anti-fraud and dead profiles hit reach and trust. See the separate article on fake likes.",
    },
    {
      q: "What matters more than likes?",
      a: "Saves, comments, shares or sends, watch-through — signals the content is useful. Steady growth from your audience beats a bot spike.",
    },
    {
      q: "Do you need geotags?",
      a: "For local business (salon, cafe, service) — yes: they help “nearby” discovery. For a pure online niche, geo is secondary.",
    },
  ],
  sections: [
    {
      title: "What people mean by “the top”",
      level: 2,
      paras: [
        "People used to talk mostly about the head of a hashtag feed: a post with strong response stayed higher for tag searchers. Now visibility is more tied to recommendations and interest from a similar audience.",
        "Think bestsellers in a store: the system shows what people already react to. Getting there is an organic bonus — not a substitute for a content plan and ads.",
      ],
      lists: [
        {
          intro: "Where a post can surface:",
          items: [
            "results for a relevant tag or place",
            "recommendations / similar content",
            "sharing in Direct and Stories among followers",
          ],
        },
      ],
      links: [
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Engagement signals",
      level: 2,
      paras: [
        "Algorithms do not look only at heart counts. Reaction pace in the first hours, audience quality, and depth of interest matter.",
      ],
      lists: [
        {
          intro: "What usually boosts visibility:",
          items: [
            "steady growth in views and reactions without a bot “sawtooth”",
            "comments and replies (real dialogue, not emoji spam)",
            "saves — a strong usefulness signal",
            "relevant tags and a caption that matches the post",
            "geo — for offline locations and local services",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Narrow niche",
          text: "On narrow tags competition is lower: it is easier to earn a relative lead and stay longer. Mass tags with millions of posts are an endurance race.",
        },
      ],
    },
    {
      title: "Fake engagement and why it hurts",
      level: 2,
      paras: [
        "A sharp like spike in minutes then silence, likes from empty foreign accounts, likes without saves — typical red flags. The platform cuts that activity; advertisers also see odd engagement rates.",
        "Working alternative: strong visuals and offer, Stories warm-up, collabs, legitimate ads or seeding, replies in comments.",
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "What recommendation visibility gives you",
      level: 2,
      paras: [
        "A wider circle of people who do not follow yet: awareness, trial traffic to the site or Direct, live follower growth if the content matches the profile promise.",
        "For a newcomer it is a faster hypothesis test; for a brand — an organic layer next to ads. Success still rests on material quality and consistency, not one viral post.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "a finished profile and a clear offer",
            "content for the audience, not “every tag in the world”",
            "a reason to save or reply that fits the topic",
            "stats review: which posts drive saves and clicks",
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
  ],
};

/** ES overlay for top-instagram — same structure as RU JSON / EN. */
export const topInstagramEs: BlogPost = {
  slug: "top-instagram",
  title: "Explore y recomendaciones de Instagram: qué hacen por el alcance",
  date: "2021-08-10",
  category: "SMM",
  cover: "/images/blog/top-instagram/cover.webp",
  excerpt:
    "Qué significa aparecer en resultados de hashtags, Explore y recomendaciones de Instagram, qué señales de engagement importan y por qué comprar likes perjudica más de lo que ayuda.",
  lead: [
    "La gente sigue hablando de «puestos destacados» en Instagram para placements visibles: la cabecera del feed de un tag, Explore y superficies de recomendación donde el algoritmo empuja posts con fuerte respuesta de audiencia. Para el negocio eso significa alcance más allá de los followers actuales.",
    "Abajo: qué señales cuentan, por qué ese alcance ayuda y por qué un pico brusco de likes comprados es una mala apuesta. Las etiquetas de UI cambian; la lógica de engagement importa más que screenshots de botones.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Hay un único «puesto destacado» oficial en Instagram?",
      a: "Es más un conjunto de superficies: búsqueda por tag o lugar, recomendaciones, cuentas similares. Los nombres in-app cambian; el punto es el mismo — gente que no te sigue aún ve el post.",
    },
    {
      q: "¿Cuántos likes hacen falta para entrar?",
      a: "No hay un umbral fijo. Los resultados dependen de la competencia del tag o nicho y de la velocidad de reacciones vivas. Los temas estrechos a menudo son más alcanzables que los tags masivos.",
    },
    {
      q: "¿Ayuda el engagement falso?",
      a: "Los números pueden subir un rato, pero el anti-fraude y los perfiles muertos golpean alcance y confianza. Mira el artículo aparte sobre likes falsos.",
    },
    {
      q: "¿Qué importa más que los likes?",
      a: "Guardados, comentarios, shares o envíos, watch-through — señales de que el contenido es útil. El crecimiento constante desde tu audiencia gana a un pico de bots.",
    },
    {
      q: "¿Hacen falta geotags?",
      a: "Para negocio local (salón, café, servicio) — sí: ayudan al discovery «cerca». Para un nicho puro online, el geo es secundario.",
    },
  ],
  sections: [
    {
      title: "Qué se entiende por puestos visibles",
      level: 2,
      paras: [
        "Antes se hablaba sobre todo de la cabecera del feed de un hashtag: un post con fuerte respuesta se quedaba más alto para quienes buscaban el tag. Ahora la visibilidad está más ligada a recomendaciones e interés de una audiencia similar.",
        "Piensa en bestsellers de una tienda: el sistema muestra lo que la gente ya reacciona. Llegar ahí es un bonus orgánico — no un sustituto de un plan de contenido y ads.",
      ],
      lists: [
        {
          intro: "Dónde puede aparecer un post:",
          items: [
            "resultados de un tag o lugar relevante",
            "recomendaciones / contenido similar",
            "compartir en Direct y Stories entre followers",
          ],
        },
      ],
      links: [
        {
          label: "Post de Instagram que vende",
          href: "/es/blog/post-instagram/",
        },
        {
          label: "Insights de Instagram",
          href: "/es/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Señales de engagement",
      level: 2,
      paras: [
        "Los algoritmos no miran solo el conteo de corazones. Importan el ritmo de reacción en las primeras horas, la calidad de la audiencia y la profundidad del interés.",
      ],
      lists: [
        {
          intro: "Qué suele subir la visibilidad:",
          items: [
            "crecimiento constante de views y reacciones sin «sierra» de bots",
            "comentarios y respuestas (diálogo real, no spam de emoji)",
            "guardados — una señal fuerte de utilidad",
            "tags relevantes y un caption que encaja con el post",
            "geo — para ubicaciones offline y servicios locales",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Nicho estrecho",
          text: "En tags estrechos la competencia es menor: es más fácil ganar una ventaja relativa y quedarse más tiempo. Los tags masivos con millones de posts son una carrera de fondo.",
        },
      ],
    },
    {
      title: "Engagement falso y por qué perjudica",
      level: 2,
      paras: [
        "Un pico brusco de likes en minutos y luego silencio, likes de cuentas extranjeras vacías, likes sin guardados — banderas rojas típicas. La plataforma corta esa actividad; los anunciantes también ven rates de engagement raros.",
        "Alternativa que funciona: visuales y oferta fuertes, calentamiento con Stories, collabs, ads legítimos o menciones en cuentas afines, respuestas en comentarios.",
      ],
      links: [
        {
          label: "Likes falsos: riesgos",
          href: "/es/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Qué te da la visibilidad en recomendaciones",
      level: 2,
      paras: [
        "Un círculo más amplio de gente que aún no te sigue: awareness, tráfico de prueba al sitio o a Direct, crecimiento vivo de followers si el contenido encaja con la promesa del perfil.",
        "Para un recién llegado es un test de hipótesis más rápido; para una marca — una capa orgánica junto a ads. El éxito sigue apoyándose en la calidad del material y la consistencia, no en un solo post viral.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "un perfil acabado y una oferta clara",
            "contenido para la audiencia, no «cada tag del mundo»",
            "un motivo para guardar o responder que encaje con el tema",
            "revisión de stats: qué posts impulsan guardados y clics",
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
  ],
};

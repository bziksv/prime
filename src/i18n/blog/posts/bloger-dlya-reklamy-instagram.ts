import type { BlogPost } from "../../../data/blog";

/** EN overlay for bloger-dlya-reklamy-instagram — same structure as RU JSON. */
export const blogerDlyaReklamyInstagramEn: BlogPost = {
  slug: "bloger-dlya-reklamy-instagram",
  title: "How to find a blogger for Instagram ads: search and vetting",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/bloger-dlya-reklamy-instagram/cover-en.webp",
  excerpt:
    "How to pick a creator for ads: why integrations, where to look, how to check the audience, and what to avoid. A checklist for the client.",
  lead: [
    "Creator ads work when the audience matches the offer and the profile is alive. Below: how to find authors and vet them before you pay.",
    "Interfaces and marketplaces change: rely on quality criteria, not “tap the down arrow in an old app version.”",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Should you hire a blogger or only run paid ads?",
      a: "They often reinforce each other: a creator builds trust and warm-up; paid ads bring scale and control. Choice depends on budget and goal.",
    },
    {
      q: "Does follower count or engagement matter more?",
      a: "Engagement and relevance. Better 15 thousand live followers than 200 thousand empty ones.",
    },
    {
      q: "Should you hire creators from a marketplace?",
      a: "You can, if you vet manually. Marketplaces have many inflated profiles — check ER, comments, and growth dynamics.",
    },
    {
      q: "How do you spot fake engagement?",
      a: "Follower spikes, likes without views/comments, identical bots in comments, odd geography for the niche.",
    },
    {
      q: "What should you lock in the agreement?",
      a: "Format, deadlines, banned words, rights to the asset, how you measure results (promo code, UTM, DMs), revisions and cancellation.",
    },
  ],
  sections: [
    {
      title: "Why advertise with creators",
      level: 2,
      paras: [
        "Paid ads scale reach. A creator adds social proof: a recommendation from someone people already trust.",
        "Platforms cut fake engagement and mass tactics — a bet on live influence and shared interests beats bought bots.",
      ],
      lists: [
        {
          intro: "What a solid integration usually delivers:",
          items: [
            "access to an already gathered niche audience",
            "brand awareness and click growth",
            "expert context (“I recommend because…”)",
            "sales — if the offer and CTA are clear",
          ],
        },
      ],
    },
    {
      title: "Where to start the search",
      level: 2,
      paras: [
        "Start with a brief: product, geo, budget, desired action (follow, lead, purchase). Without a brief it’s easy to buy pretty but wrong reach.",
      ],
      lists: [
        {
          intro: "Working ways to find candidates:",
          items: [
            "niche hashtags and search",
            "similar profiles next to creators you already know",
            "niche communities/roundups where creators offer ads",
            "recommendations from peers and past contractors",
            "analytics tools and marketplaces (with manual checks)",
          ],
        },
      ],
      notes: [
        {
          title: "Link to monetization",
          kind: "tip",
          text: "How creators price deals and which income models exist — in the article on creator earnings. Here the focus is the client side.",
        },
      ],
      links: [
        {
          label: "How much Instagram bloggers earn",
          href: "/en/blog/zarabotok-blogerov-instagram/",
        },
      ],
    },
    {
      title: "Marketplaces and tools",
      level: 2,
      paras: [
        "Marketplaces are handy as a shop window, but they don’t replace vetting. Platform names and analytics pricing change — read reviews and terms before you pay.",
        "Third-party profile analytics (growth, ER, anomalies) save budget: they cut fake engagement before you message anyone.",
      ],
      lists: [
        {
          intro: "On a marketplace, check right away:",
          items: [
            "whether regular posts have live comments",
            "whether the feed looks like wall-to-wall ads",
            "whether the creator’s tone matches the brand",
            "whether they can report reach/clicks",
          ],
        },
      ],
    },
    {
      title: "How to vet a profile",
      level: 2,
      paras: [
        "Open the last 15–20 posts and the Stories archive (if any): what the creator talks about, who comments, how they reply.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "live audience, no obvious fake engagement",
            "video/Stories views in line with likes",
            "tidy content, not chaos",
            "creator and audience match the product",
            "ads no more often than feed trust allows",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Hiring a “star” account with an irrelevant audience. A fitness blog rarely helps a lawyer without overlapping interests — even with big reach.",
        },
      ],
      tables: [
        {
          caption: "Quick candidate filter",
          headers: ["Signal", "Healthy", "Red flag"],
          rows: [
            ["Followers vs reactions", "Stable ER for the niche", "Likes exist, dialogue doesn’t"],
            ["Comments", "Different people, relevant replies", "Identical bots / emoji spam"],
            ["Growth", "Smooth or explainable", "Sharp steps with no reason"],
            ["Ads in the feed", "Rare, disclosed", "Every other post is an ad"],
          ],
        },
      ],
    },
    {
      title: "Who not to work with",
      level: 2,
      paras: [
        "Skip profiles with obvious fake engagement, toxic tone, scandal reputation, or zero replies to the audience.",
        "Be careful with creators who won’t share an integration brief, won’t name deadlines, and won’t agree to a measurable result.",
      ],
    },
    {
      title: "Agreements and risks",
      level: 2,
      paras: [
        "Plan for missed deadlines, revisions, post deletion, comment conflict. Lock format (post / Stories / series), date, copy/banned words, and ad labeling under the law if required.",
      ],
      lists: [
        {
          intro: "Minimum in writing before payment:",
          items: [
            "brand, offer, CTA",
            "format and number of units",
            "draft and publish deadlines",
            "how you measure effect",
            "what happens in a force majeure",
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
  ],
};

/** ES overlay for bloger-dlya-reklamy-instagram — same structure as RU JSON / EN. */
export const blogerDlyaReklamyInstagramEs: BlogPost = {
  slug: "bloger-dlya-reklamy-instagram",
  title: "Cómo encontrar un blogger para ads en Instagram: búsqueda y vetting",
  date: "2022-02-01",
  category: "SMM",
  cover: "/images/blog/bloger-dlya-reklamy-instagram/cover-es.webp",
  excerpt:
    "Cómo elegir un creator para ads: por qué las integraciones, dónde buscar, cómo revisar la audiencia y qué evitar. Un checklist para el cliente.",
  lead: [
    "Los ads con creators funcionan cuando la audiencia encaja con la oferta y el perfil está vivo. Abajo: cómo encontrar autores y vetearlos antes de pagar.",
    "Interfaces y marketplaces cambian: apóyate en criterios de calidad, no en «toca la flecha abajo en una versión vieja de la app».",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Contratas a un blogger o solo corres paid ads?",
      a: "A menudo se refuerzan: un creator construye confianza y calentamiento; los paid ads traen escala y control. La elección depende del presupuesto y del objetivo.",
    },
    {
      q: "¿Importa más el conteo de followers o el engagement?",
      a: "Engagement y relevancia. Mejor 15 mil followers vivos que 200 mil vacíos.",
    },
    {
      q: "¿Contratas creators desde un marketplace?",
      a: "Puedes, si vetas a mano. En los marketplaces hay muchos perfiles inflados — revisa ER, comentarios y dinámica de crecimiento.",
    },
    {
      q: "¿Cómo detectar engagement falso?",
      a: "Picos de followers, likes sin views/comentarios, bots idénticos en comentarios, geografía rara para el nicho.",
    },
    {
      q: "¿Qué fijar en el acuerdo?",
      a: "Formato, plazos, palabras prohibidas, derechos sobre el asset, cómo mides resultados (código promo, UTM, DMs), revisiones y cancelación.",
    },
  ],
  sections: [
    {
      title: "Por qué anunciar con creators",
      level: 2,
      paras: [
        "Los paid ads escalan el alcance. Un creator añade social proof: una recomendación de alguien en quien la gente ya confía.",
        "Las plataformas cortan engagement falso y tácticas masivas — apostar por influencia viva e intereses compartidos gana a bots comprados.",
      ],
      lists: [
        {
          intro: "Qué suele entregar una integración sólida:",
          items: [
            "acceso a una audiencia de nicho ya reunida",
            "awareness de marca y crecimiento de clics",
            "contexto experto («recomiendo porque…»)",
            "ventas — si la oferta y el CTA están claros",
          ],
        },
      ],
    },
    {
      title: "Por dónde empezar la búsqueda",
      level: 2,
      paras: [
        "Empieza con un brief: producto, geo, presupuesto, acción deseada (seguir, lead, compra). Sin brief es fácil comprar alcance bonito pero equivocado.",
      ],
      lists: [
        {
          intro: "Formas que funcionan para encontrar candidatos:",
          items: [
            "hashtags de nicho y búsqueda",
            "perfiles similares junto a creators que ya conoces",
            "comunidades/roundups de nicho donde creators ofrecen ads",
            "recomendaciones de peers y contratistas pasados",
            "herramientas de analytics y marketplaces (con chequeos manuales)",
          ],
        },
      ],
      notes: [
        {
          title: "Vínculo con la monetización",
          kind: "tip",
          text: "Cómo cotizan los creators y qué modelos de ingreso existen — en el artículo de ingresos de creators. Aquí el foco es el lado del cliente.",
        },
      ],
      links: [
        {
          label: "Cuánto ganan los bloggers de Instagram",
          href: "/es/blog/zarabotok-blogerov-instagram/",
        },
      ],
    },
    {
      title: "Marketplaces y herramientas",
      level: 2,
      paras: [
        "Los marketplaces son útiles como escaparate, pero no sustituyen el vetting. Nombres de plataformas y precios de analytics cambian — lee reseñas y términos antes de pagar.",
        "La analytics de perfil de terceros (crecimiento, ER, anomalías) ahorra presupuesto: corta engagement falso antes de escribir a nadie.",
      ],
      lists: [
        {
          intro: "En un marketplace, revisa al momento:",
          items: [
            "si los posts regulares tienen comentarios vivos",
            "si el feed parece ads de pared a pared",
            "si el tono del creator encaja con la marca",
            "si pueden reportar alcance/clics",
          ],
        },
      ],
    },
    {
      title: "Cómo vetear un perfil",
      level: 2,
      paras: [
        "Abre los últimos 15–20 posts y el archivo de Stories (si hay): de qué habla el creator, quién comenta, cómo responde.",
      ],
      lists: [
        {
          intro: "Criterios de calidad:",
          items: [
            "audiencia viva, sin engagement falso obvio",
            "views de vídeo/Stories alineados con likes",
            "contenido ordenado, no caos",
            "creator y audiencia encajan con el producto",
            "ads no más a menudo de lo que permite la confianza del feed",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Contratar una cuenta «estrella» con audiencia irrelevante. Un blog de fitness rara vez ayuda a un abogado sin intereses solapados — aunque el alcance sea grande.",
        },
      ],
      tables: [
        {
          caption: "Filtro rápido de candidatos",
          headers: ["Señal", "Sano", "Red flag"],
          rows: [
            ["Followers vs reacciones", "ER estable para el nicho", "Hay likes, no hay diálogo"],
            ["Comentarios", "Gente distinta, replies relevantes", "Bots idénticos / spam de emoji"],
            ["Crecimiento", "Suave o explicable", "Saltos bruscos sin motivo"],
            ["Ads en el feed", "Raros, con disclosure", "Uno de cada dos posts es un ad"],
          ],
        },
      ],
    },
    {
      title: "Con quién no trabajar",
      level: 2,
      paras: [
        "Salta perfiles con engagement falso obvio, tono tóxico, reputación de escándalo o cero replies a la audiencia.",
        "Ten cuidado con creators que no comparten un brief de integración, no nombran plazos y no aceptan un resultado medible.",
      ],
    },
    {
      title: "Acuerdos y riesgos",
      level: 2,
      paras: [
        "Planifica plazos fallidos, revisiones, borrado del post, conflicto en comentarios. Fija formato (post / Stories / serie), fecha, copy/palabras prohibidas y etiquetado del ad según la ley si hace falta.",
      ],
      lists: [
        {
          intro: "Mínimo por escrito antes del pago:",
          items: [
            "marca, oferta, CTA",
            "formato y número de unidades",
            "plazos de borrador y de publicación",
            "cómo mides el efecto",
            "qué pasa en un force majeure",
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
  ],
};

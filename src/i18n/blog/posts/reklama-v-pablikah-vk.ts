import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-v-pablikah-vk — same structure as RU JSON. */
export const reklamaVPablikahVkEn: BlogPost = {
  slug: "reklama-v-pablikah-vk",
  title: "Ads in VKontakte communities: how to pick a page and place a post",
  date: "2022-01-25",
  category: "SMM",
  cover: "/images/blog/reklama-v-pablikah-vk/cover-en.webp",
  excerpt:
    "How to run ads via VK communities: audience fit, picking pages, bot and engagement-rate checks, the post itself, comments, and measuring results.",
  lead: [
    "Ads in VKontakte communities means placing a post in someone else’s (or your own) communities. It works when you hit the right audience and pick a live community — not a bot graveyard.",
    "VK dashboards and marketplaces update often. Below: the order of actions and selection criteria, without tying you to outdated UI buttons.",
  ],
  faq: [
    {
      q: "How is a community placement different from paid targeting?",
      a: "A placement puts the post with a specific community audience. Targeting runs ads by segments in the ad account. They’re often used together.",
    },
    {
      q: "How can I tell a community has many bots?",
      a: "Dead or abandoned profiles, abnormal engagement rate, sharp unfollow spikes, identical comments. Tools help, but also read the feed yourself.",
    },
    {
      q: "What matters more — follower count or post reach?",
      a: "Reach and reaction on recent posts. A large dead base is useless.",
    },
    {
      q: "Who should I contact about placement?",
      a: "The community admin or via a VK marketplace/ad platform — whatever that page uses.",
    },
    {
      q: "How do I measure results?",
      a: "UTM or promo code, leads, cost per inquiry, comment quality. Not only likes under the ad post.",
    },
  ],
  sections: [
    {
      title: "When community ads make sense",
      level: 2,
      paras: [
        "The format fits when your audience sits in topic communities: local business, hobbies, B2C services, events.",
        "If the audience is scattered or you need tight bid control — plan targeting in parallel. Community placements warm people up well and add social context.",
      ],
    },
    {
      title: "Target audience",
      level: 2,
      paras: [
        "Build a portrait: gender, age, geo, interests, pain, what they’ve already tried. One clear segment beats “everyone.”",
        "Surveys, reviews, forum research, and audience tools (the set changes) help refine interests.",
      ],
      lists: [
        {
          intro: "Before picking communities, answer:",
          items: [
            "who should see the post",
            "what action you want",
            "what test budget you have",
            "which community topics overlap the offer",
          ],
        },
      ],
    },
    {
      title: "How to shortlist communities",
      level: 2,
      paras: [
        "Build a long list: VK search by topic, recommendations, lists from the account or marketplace, community-finder tools.",
        "Then shortlist with five checks: audience fit, activity, bots, reach, other ads.",
      ],
      lists: [
        {
          intro: "Quick community review:",
          items: [
            "stats: gender/age/city match the segment",
            "engagement rate: likes, comments, shares on regular posts",
            "bot share is moderate (not an inflated dead base)",
            "recent post reach fits the size",
            "the feed isn’t packed with competitor ads every post",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Taking the city’s biggest page without checking engagement rate. Post reach there can be lower than in a compact live community.",
        },
      ],
      tables: [
        {
          caption: "Community filter before payment",
          headers: ["Criterion", "Look at", "Stop signal"],
          rows: [
            [
              "Audience",
              "Gender/age/geo in stats",
              "Wrong city/age with no overlap",
            ],
            [
              "Activity",
              "Comments under regular posts",
              "Silence despite “loud” reach",
            ],
            ["Bots", "Base check + feed", "Mass dead accounts"],
            ["Ads", "Density of ad posts", "Every post is a paid placement"],
          ],
        },
      ],
    },
    {
      title: "How to place the ad",
      level: 2,
      paras: [
        "Two paths: direct to the admin or via a marketplace/VK tools for community ads. Confirm format (post / reshare / pin), date, comment moderation, and what’s in the price.",
      ],
      lists: [
        {
          intro: "Lock with the admin in writing:",
          items: [
            "copy and creative (or brief)",
            "date and time",
            "whether a community comment is needed",
            "whether you can reply under the post",
            "how you’ll get reach stats",
          ],
        },
      ],
      links: [
        {
          label: "Comments in a VKontakte community",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "How to write the post",
      level: 2,
      paras: [
        "In someone else’s community people skim: first line — benefit, then facts, then the ask. Clean visual, no tiny text on the image.",
      ],
      lists: [
        {
          intro: "Ad post frame:",
          items: [
            "hook under the audience’s pain or desire",
            "what you offer and for whom",
            "proof (figure, deadline, terms)",
            "CTA: message / click / visit",
            "contacts or a short link",
          ],
        },
      ],
    },
    {
      title: "Comments and follow-up",
      level: 2,
      paras: [
        "After the post goes live, watch comments: answer questions, kill spam, don’t argue toxically. Agree with the admin who moderates junk.",
      ],
      lists: [
        {
          intro: "In the first hours:",
          items: [
            "answer price or delivery clarifications",
            "pin a useful reply if possible",
            "save stats screenshots",
            "tag leads in CRM or a spreadsheet",
          ],
        },
      ],
    },
    {
      title: "Results and budget",
      level: 2,
      paras: [
        "Count cost per desired action, not likes. Compare communities on the same offer and creative.",
        "Placement prices depend on reach, niche, and city — ask for rates and a test budget on two or three placements before scaling.",
      ],
      lists: [
        {
          intro: "Mini report after a placement:",
          items: [
            "reach and post engagement rate",
            "clicks / leads / cost",
            "comment dialogue quality",
            "decision: repeat, change creative, or switch community",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsibilities",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
};

/** ES overlay for reklama-v-pablikah-vk — same structure as RU JSON / EN. */
export const reklamaVPablikahVkEs: BlogPost = {
  slug: "reklama-v-pablikah-vk",
  title: "Ads en comunidades de VKontakte: cómo elegir la página y colocar un post",
  date: "2022-01-25",
  category: "SMM",
  cover: "/images/blog/reklama-v-pablikah-vk/cover.webp",
  excerpt:
    "Cómo hacer ads vía comunidades de VK: encaje de audiencia, elegir páginas, chequeos de bots y engagement rate, el post en sí, comentarios y medir resultados.",
  lead: [
    "Ads en comunidades de VKontakte significa colocar un post en comunidades ajenas (o propias). Funciona cuando das con la audiencia correcta y eliges una comunidad viva — no un cementerio de bots.",
    "Los dashboards y marketplaces de VK se actualizan a menudo. Abajo: el orden de acciones y criterios de selección, sin atarte a botones de UI obsoletos.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una colocación en comunidad del targeting de pago?",
      a: "Una colocación pone el post ante la audiencia de una comunidad concreta. El targeting corre ads por segmentos en la cuenta de ads. A menudo se usan juntos.",
    },
    {
      q: "¿Cómo saber que una comunidad tiene muchos bots?",
      a: "Perfiles muertos o abandonados, engagement rate anormal, picos bruscos de unfollow, comentarios idénticos. Las herramientas ayudan, pero también lee el feed tú mismo.",
    },
    {
      q: "¿Qué importa más — el conteo de followers o el alcance del post?",
      a: "Alcance y reacción en posts recientes. Una base grande y muerta no sirve.",
    },
    {
      q: "¿Con quién contacto para la colocación?",
      a: "El admin de la comunidad o vía un marketplace/plataforma de ads de VK — lo que use esa página.",
    },
    {
      q: "¿Cómo mido resultados?",
      a: "UTM o código promo, leads, coste por consulta, calidad de comentarios. No solo likes bajo el post del ad.",
    },
  ],
  sections: [
    {
      title: "Cuándo tienen sentido los ads en comunidades",
      level: 2,
      paras: [
        "El formato encaja cuando tu audiencia está en comunidades temáticas: negocio local, hobbies, servicios B2C, eventos.",
        "Si la audiencia está dispersa o necesitas control estrecho de pujas — planifica targeting en paralelo. Las colocaciones en comunidades calientan bien y añaden contexto social.",
      ],
    },
    {
      title: "Audiencia objetivo",
      level: 2,
      paras: [
        "Arma un retrato: género, edad, geo, intereses, dolor, qué han probado ya. Un segmento claro gana a «todo el mundo».",
        "Encuestas, reseñas, investigación en foros y herramientas de audiencia (el set cambia) ayudan a afinar intereses.",
      ],
      lists: [
        {
          intro: "Antes de elegir comunidades, responde:",
          items: [
            "quién debería ver el post",
            "qué acción quieres",
            "qué presupuesto de test tienes",
            "qué temas de comunidad solapan la oferta",
          ],
        },
      ],
    },
    {
      title: "Cómo armar el shortlist de comunidades",
      level: 2,
      paras: [
        "Arma una lista larga: búsqueda de VK por tema, recomendaciones, listas de la cuenta o del marketplace, herramientas de búsqueda de comunidades.",
        "Luego shortlist con cinco chequeos: encaje de audiencia, actividad, bots, alcance, otros ads.",
      ],
      lists: [
        {
          intro: "Revisión rápida de la comunidad:",
          items: [
            "stats: género/edad/ciudad encajan con el segmento",
            "engagement rate: likes, comentarios, shares en posts regulares",
            "cuota de bots moderada (no una base muerta inflada)",
            "alcance de posts recientes encaja con el tamaño",
            "el feed no está saturado de ads de competidores en cada post",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Tomar la página más grande de la ciudad sin revisar el engagement rate. El alcance del post ahí puede ser más bajo que en una comunidad compacta y viva.",
        },
      ],
      tables: [
        {
          caption: "Filtro de comunidad antes del pago",
          headers: ["Criterio", "Mira", "Señal de stop"],
          rows: [
            [
              "Audiencia",
              "Género/edad/geo en stats",
              "Ciudad/edad equivocadas sin solape",
            ],
            [
              "Actividad",
              "Comentarios bajo posts regulares",
              "Silencio pese a un alcance «ruidoso»",
            ],
            ["Bots", "Chequeo de base + feed", "Cuentas muertas en masa"],
            ["Ads", "Densidad de posts de ads", "Cada post es una colocación de pago"],
          ],
        },
      ],
    },
    {
      title: "Cómo colocar el ad",
      level: 2,
      paras: [
        "Dos caminos: directo al admin o vía marketplace/herramientas de VK para ads en comunidades. Confirma formato (post / reshare / pin), fecha, moderación de comentarios y qué incluye el precio.",
      ],
      lists: [
        {
          intro: "Fija por escrito con el admin:",
          items: [
            "copy y creative (o brief)",
            "fecha y hora",
            "si hace falta un comentario de la comunidad",
            "si puedes responder bajo el post",
            "cómo recibirás stats de alcance",
          ],
        },
      ],
      links: [
        {
          label: "Comentarios en una comunidad de VKontakte",
          href: "/es/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Cómo escribir el post",
      level: 2,
      paras: [
        "En una comunidad ajena la gente hojea: primera línea — beneficio, luego hechos, luego la petición. Visual limpio, sin texto diminuto en la imagen.",
      ],
      lists: [
        {
          intro: "Marco del post de ad:",
          items: [
            "gancho bajo el dolor o deseo de la audiencia",
            "qué ofreces y para quién",
            "prueba (cifra, deadline, términos)",
            "CTA: mensaje / clic / visita",
            "contactos o un enlace corto",
          ],
        },
      ],
    },
    {
      title: "Comentarios y follow-up",
      level: 2,
      paras: [
        "Tras publicar el post, mira comentarios: responde preguntas, mata spam, no discutas con toxicidad. Acuerda con el admin quién modera la basura.",
      ],
      lists: [
        {
          intro: "En las primeras horas:",
          items: [
            "responder aclaraciones de precio o entrega",
            "fijar una reply útil si es posible",
            "guardar screenshots de stats",
            "etiquetar leads en CRM o una hoja",
          ],
        },
      ],
    },
    {
      title: "Resultados y presupuesto",
      level: 2,
      paras: [
        "Cuenta el coste por la acción deseada, no los likes. Compara comunidades con la misma oferta y creative.",
        "Los precios de colocación dependen del alcance, nicho y ciudad — pide tarifas y un presupuesto de test en dos o tres colocaciones antes de escalar.",
      ],
      lists: [
        {
          intro: "Mini informe tras una colocación:",
          items: [
            "alcance y engagement rate del post",
            "clics / leads / coste",
            "calidad del diálogo en comentarios",
            "decisión: repetir, cambiar creative o cambiar de comunidad",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsabilidades",
          href: "/es/blog/menedzher-smm/",
        },
      ],
    },
  ],
};

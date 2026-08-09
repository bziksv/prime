import type { BlogPost } from "../../../data/blog";

/** EN overlay for telegram-kanal — same structure as RU JSON. */
export const telegramKanalEn: BlogPost = {
  slug: "telegram-kanal",
  title: "Telegram channel from scratch: setup, content, and growth",
  date: "2021-08-06",
  category: "SMM",
  cover: "/images/blog/telegram-kanal/cover-en.webp",
  excerpt:
    "How to launch a Telegram channel: avatar and description, post mix, helper bots, schedule, ads, and traffic from other platforms — without betting on fake growth.",
  lead: [
    "Telegram is both a messenger and a media surface: channels deliver news and offers into the notification feed, bypassing “smart” social ranking. For business that’s a direct line to a warm audience.",
    "Below: where to start, how to set up the channel, what content keeps readers, how bots help, and where traffic comes from. In-app search is weak — growth almost always needs external sources and ads in related channels.",
  ],
  faq: [
    {
      q: "Should I use a channel or a group?",
      a: "A channel is a one-way feed from the author (useful for media/brand). A group is conversation. Often channel + discussion chat.",
    },
    {
      q: "How many posts per day should I publish?",
      a: "Aim for 1–3 by view stats, not fill-the-feed for its own sake. Watch when your audience reads; regional peaks are often morning / lunch / evening local time.",
    },
    {
      q: "Do I need bots immediately?",
      a: "No. First rhythm and value. Bots help with autoposting, polls, long texts (Telegraph), and funnels when routine gets in the way.",
    },
    {
      q: "How do I grow subscribers?",
      a: "Cross-posts from the site and other socials, paid placements and ads in topical channels, collabs, organic sharing of strong posts. Fake growth breaks ER and ad prices.",
    },
    {
      q: "How much do channel ads cost?",
      a: "Depends on niche, reach, and engagement. Old price ranges age fast — check current rates and vet the channel in analytics (e.g. TGStat).",
    },
  ],
  sections: [
    {
      title: "Why a channel and where to start",
      level: 2,
      paras: [
        "A channel makes sense if you have something to publish regularly: expertise, niche news, product behind-the-scenes. An empty “another blog with no ideas” burns out fast.",
        "Create the channel, set a public @username, add 5–10 starter posts before a loud launch — a guest shouldn’t land on a blank wall.",
      ],
      lists: [
        {
          intro: "Basic launch:",
          items: [
            "topic and tone (who reads, why subscribe)",
            "name and @username without typos",
            "avatar + description + contacts",
            "rubric plan for 2–4 weeks",
          ],
        },
      ],
    },
    {
      title: "Setup: avatar and description",
      level: 2,
      paras: [
        "The avatar in the chat list is small and round: a large mark readable on dark and light themes, no tiny text. Copying someone else’s logo confuses and annoys.",
        "Description in 2–4 lines: what the channel is about, what will be in the feed, who it helps, where to write. A site or support-bot link is a plus.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "unreadable detail on the icon",
            "a “channel about everything” description",
            "no contact for ads or outreach",
            "header offer that doesn’t match the posts",
          ],
        },
      ],
    },
    {
      title: "Content, headlines, and rhythm",
      level: 2,
      paras: [
        "Borrowed memes without commentary work poorly in Telegram. You need your own materials: breakdowns, news with a takeaway, short tips, less often long reads (easy to put on Telegraph).",
        "Clickbait without substance burns trust. Better a calm headline and dense value. Alternate text, photos, video, polls — a same-type wall tires people out.",
      ],
      lists: [
        {
          intro: "Schedule guidelines:",
          items: [
            "fixed slots (e.g. morning / day / evening) checked against stats",
            "weekdays usually read more actively than weekends",
            "don’t repost the same piece five times in a row “for reach”",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Helper bots",
      level: 2,
      paras: [
        "Bots speed up routine; they don’t replace an editor. The service set changes — pick current ones in the Telegram catalog and by reviews.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "Telegraph / similar — long formatted text",
            "autoposting and scheduled publishing",
            "polls and reactions beyond the basics",
            "lead capture and simple funnels",
          ],
        },
      ],
      notes: [
        {
          title: "Caution",
          kind: "tip",
          text: "“Buy subscribers” bots and shady audience scraping hurt reputation and stats. For growth — live traffic and honest ads.",
        },
      ],
    },
    {
      title: "Traffic and advertising",
      level: 2,
      paras: [
        "Organic discovery inside Telegram is limited: you bring the channel from the site, YouTube, newsletters, other socials, and via paid placements with related authors.",
        "Before buying ads, check reach, ER, subscriber jumps, and sources in open analytics. Hidden posts and fake views are a reason to walk away.",
        "Watch where competitors advertise (dashboards like TGStat) and test small budgets before large buys.",
      ],
      lists: [
        {
          intro: "Ads mini-checklist:",
          items: [
            "the channel’s audience matches yours",
            "no sharp sawtooth in the subscriber graph",
            "the post isn’t deleted an hour later",
            "UTM or a promo code exists for measurement",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for telegram-kanal — same structure as RU JSON / EN. */
export const telegramKanalEs: BlogPost = {
  slug: "telegram-kanal",
  title: "Canal de Telegram desde cero: setup, contenido y crecimiento",
  date: "2021-08-06",
  category: "SMM",
  cover: "/images/blog/telegram-kanal/cover.webp",
  excerpt:
    "Cómo lanzar un canal de Telegram: avatar y descripción, mix de posts, bots de ayuda, horario, ads y tráfico desde otras plataformas — sin apostar por crecimiento falso.",
  lead: [
    "Telegram es messenger y superficie media a la vez: los canales entregan noticias y ofertas al feed de notificaciones, saltándose el ranking «inteligente» de las redes. Para negocio eso es una línea directa a una audiencia tibia.",
    "Abajo: por dónde empezar, cómo montar el canal, qué contenido retiene lectores, cómo ayudan los bots y de dónde viene el tráfico. La búsqueda in-app es débil — el crecimiento casi siempre necesita fuentes externas y ads en canales afines.",
  ],
  faq: [
    {
      q: "¿Canal o grupo?",
      a: "Un canal es un feed unidireccional del autor (útil para media/marca). Un grupo es conversación. A menudo canal + chat de discusión.",
    },
    {
      q: "¿Cuántos posts al día publicar?",
      a: "Apunta a 1–3 según stats de vistas, no a llenar el feed por llenarlo. Mira cuándo lee tu audiencia; los picos regionales suelen ser mañana / mediodía / tarde-noche hora local.",
    },
    {
      q: "¿Hacen falta bots de inmediato?",
      a: "No. Primero ritmo y valor. Los bots ayudan con autoposting, encuestas, textos largos (Telegraph) y embudos cuando la rutina estorba.",
    },
    {
      q: "¿Cómo crecer en suscriptores?",
      a: "Cross-posts desde el sitio y otras redes, placements de pago y ads en canales temáticos, collabs, sharing orgánico de posts fuertes. El crecimiento falso rompe el ER y los precios de ads.",
    },
    {
      q: "¿Cuánto cuestan los ads en canales?",
      a: "Depende del nicho, alcance y engagement. Los rangos de precio antiguos envejecen rápido — revisa tarifas actuales y valida el canal en analítica (p. ej. TGStat).",
    },
  ],
  sections: [
    {
      title: "Por qué un canal y por dónde empezar",
      level: 2,
      paras: [
        "Un canal tiene sentido si tienes algo que publicar con regularidad: expertise, noticias del nicho, detrás de cámaras del producto. Un «otro blog sin ideas» vacío se quema rápido.",
        "Crea el canal, fija un @username público, añade 5–10 posts de arranque antes de un lanzamiento ruidoso — un invitado no debería aterrizar en un muro en blanco.",
      ],
      lists: [
        {
          intro: "Lanzamiento básico:",
          items: [
            "tema y tono (quién lee, por qué suscribirse)",
            "nombre y @username sin typos",
            "avatar + descripción + contactos",
            "plan de rúbricas para 2–4 semanas",
          ],
        },
      ],
    },
    {
      title: "Setup: avatar y descripción",
      level: 2,
      paras: [
        "El avatar en la lista de chats es pequeño y redondo: una marca grande legible en temas oscuro y claro, sin texto diminuto. Copiar el logo de otro confunde y molesta.",
        "Descripción en 2–4 líneas: de qué va el canal, qué habrá en el feed, a quién ayuda, dónde escribir. Un enlace al sitio o a un bot de soporte es un plus.",
      ],
      lists: [
        {
          intro: "Errores habituales:",
          items: [
            "detalle ilegible en el icono",
            "una descripción de «canal sobre todo»",
            "sin contacto para ads u outreach",
            "oferta del header que no encaja con los posts",
          ],
        },
      ],
    },
    {
      title: "Contenido, titulares y ritmo",
      level: 2,
      paras: [
        "Los memes prestados sin comentario funcionan mal en Telegram. Hace falta material propio: desgloses, noticias con takeaway, tips cortos, menos a menudo long reads (fáciles de poner en Telegraph).",
        "El clickbait sin sustancia quema confianza. Mejor un titular calmado y valor denso. Alterna texto, fotos, vídeo, encuestas — un muro del mismo tipo cansa.",
      ],
      lists: [
        {
          intro: "Pautas de horario:",
          items: [
            "slots fijos (p. ej. mañana / día / noche) contrastados con stats",
            "entre semana suele leerse más activo que el fin de semana",
            "no repostees la misma pieza cinco veces seguidas «por alcance»",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Bots de ayuda",
      level: 2,
      paras: [
        "Los bots aceleran la rutina; no sustituyen a un editor. El set de servicios cambia — elige los actuales en el catálogo de Telegram y por reviews.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "Telegraph / similares — texto largo formateado",
            "autoposting y publicación programada",
            "encuestas y reacciones más allá de lo básico",
            "captura de leads y embudos simples",
          ],
        },
      ],
      notes: [
        {
          title: "Precaución",
          kind: "tip",
          text: "Los bots de «comprar suscriptores» y el scraping dudoso de audiencia dañan reputación y stats. Para crecer — tráfico vivo y ads honestos.",
        },
      ],
    },
    {
      title: "Tráfico y publicidad",
      level: 2,
      paras: [
        "El discovery orgánico dentro de Telegram es limitado: traes el canal desde el sitio, YouTube, newsletters, otras redes y vía placements de pago con autores afines.",
        "Antes de comprar ads, revisa alcance, ER, saltos de suscriptores y fuentes en analítica abierta. Posts ocultos y vistas falsas son motivo para irse.",
        "Mira dónde anuncian los competidores (dashboards tipo TGStat) y prueba presupuestos pequeños antes de compras grandes.",
      ],
      lists: [
        {
          intro: "Mini-checklist de ads:",
          items: [
            "la audiencia del canal encaja con la tuya",
            "sin dientes de sierra fuertes en el gráfico de suscriptores",
            "el post no se borra una hora después",
            "hay UTM o un código promo para medir",
          ],
        },
      ],
    },
  ],
};

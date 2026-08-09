import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-instagram — same structure as RU JSON. */
export const reklamaInstagramEn: BlogPost = {
  slug: "reklama-instagram",
  title: "Instagram advertising: types, budget, and how to measure results",
  date: "2021-11-19",
  category: "SMM",
  cover: "/images/blog/reklama-instagram/cover-en.webp",
  excerpt:
    "Instagram ad types: paid targeting, creators, and paid placements — what drives price, which “free” growth tricks are risky, and how to track real results.",
  lead: [
    "Instagram advertising isn’t one tool — it’s a mix: the ads manager, creator integrations, and paid placements in topical accounts. Budget and results depend on the offer, creative, and audience quality.",
    "Below: placement types, what drives cost, metrics, and what not to confuse with paid promotion. Ads UIs change — focus on the meaning of settings, not old button screenshots.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is for information only and is not an invitation to use the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Should I use paid targeting or a creator?",
      a: "Targeting gives control and scale. A creator builds trust and warms the audience. They’re often combined. Choosing a creator is covered in a separate article.",
    },
    {
      q: "How much does Instagram advertising cost?",
      a: "No fixed “price per click forever”: auction, niche, season, creative. Creator fees depend on reach, format, and engagement rate — 2021 benchmarks aren’t a live price list.",
    },
    {
      q: "Do mass-liking and mass-following still work?",
      a: "As a growth strategy — no: you risk limits and a noisy audience. Better: solid content plus legitimate ads.",
    },
    {
      q: "What counts as success?",
      a: "Not likes alone: CTR, leads, cost per lead, sales, dialogue quality. Set UTM or promo codes in advance.",
    },
    {
      q: "Do I need a business account?",
      a: "For the ads manager and proper insights — yes, professional or business mode is usually required.",
    },
  ],
  sections: [
    {
      title: "Ad types",
      level: 2,
      paras: [
        "Three working tracks: official ads (targeting), creator ads, and placements in topical communities or bulletin-style accounts.",
      ],
      lists: [
        {
          intro: "Quick overview:",
          items: [
            "targeting — feed/Stories/Reels impressions by segment, bid and budget in the ads manager",
            "creator — post, Stories, Reels, series; strength is the recommendation",
            "communities / paid placements — often cheaper, but ad attention drops if the feed feels like a classifieds board",
          ],
        },
      ],
      links: [
        {
          label: "How to find and vet a creator",
          href: "/en/blog/bloger-dlya-reklamy-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "What drives price",
      level: 2,
      paras: [
        "In targeting, price is an auction: niche competition, ad quality, campaign goal (reach, traffic, leads). You set daily budget and bid; “from $1 to $100 a day” from old guides is only a spread illustration.",
        "With creators, price grows with audience, format (Stories vs Reels integration), and demand. The “$10 = 10k followers” rule hasn’t been universal for a long time — look at reach and engagement rate, not follower count alone.",
      ],
      lists: [
        {
          intro: "What affects the fee:",
          items: [
            "audience size and quality",
            "geo and season",
            "format and rights to the asset",
            "urgency and revision count",
            "fake engagement in the profile — better not to buy it at all",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Compare cost per desired action (lead or sale), not “cheap reach.” Cheap bots cost more in the end.",
        },
      ],
    },
    {
      title: "“Free” methods — where the catch is",
      level: 2,
      paras: [
        "At the start people look for growth with no budget. Some methods are legitimate (barter, collabs); some are harmful.",
      ],
      lists: [
        {
          intro: "Watch out for:",
          items: [
            "mass-liking / mass-following — sanction risk and junk audience",
            "DM spam — reports and blocks",
            "“follow everyone” contests — a spike of dead followers",
          ],
        },
        {
          intro: "What actually works:",
          items: [
            "barter with a relevant creator (product ↔ integration)",
            "mutual shoutouts with a nearby audience, without being pushy",
            "strong organic + a clear offer in the header",
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
    {
      title: "Why the platform works for ads",
      level: 2,
      paras: [
        "Mobile traffic, visual format, flexible segmentation in the ads manager, audience habit with native integrations — if the profile is live and the offer is clear.",
        "Downside: rising competition for attention and cost in hot niches. Without a landing (site, messenger, form) budget burns on vanity views.",
      ],
    },
    {
      title: "How to track effectiveness",
      level: 2,
      paras: [
        "Before launch set the goal and tracking method. Otherwise you argue about reach, not money.",
      ],
      lists: [
        {
          intro: "Minimum control:",
          items: [
            "UTMs on links / separate promo codes per creator",
            "ads manager stats: CTR, CPC/CPA, frequency",
            "with a creator — reach, saves, replies, clicks, screenshots",
            "lead quality (not only lead count)",
            "compare creatives and creators on the same offer",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Judging a creator only by follower count. Look at dynamics, comments, and audience fit — see the checklist in the article on finding a creator.",
        },
      ],
    },
  ],
};

/** ES overlay for reklama-instagram — same structure as RU JSON / EN. */
export const reklamaInstagramEs: BlogPost = {
  slug: "reklama-instagram",
  title: "Publicidad en Instagram: tipos, presupuesto y cómo medir resultados",
  date: "2021-11-19",
  category: "SMM",
  cover: "/images/blog/reklama-instagram/cover.webp",
  excerpt:
    "Tipos de ads en Instagram: targeting de pago, creators y colocaciones de pago — qué impulsa el precio, qué trucos de crecimiento «gratis» son arriesgados y cómo trackear resultados reales.",
  lead: [
    "La publicidad en Instagram no es una sola herramienta — es un mix: el ads manager, integraciones con creators y colocaciones de pago en cuentas temáticas. Presupuesto y resultados dependen de la oferta, el creative y la calidad de la audiencia.",
    "Abajo: tipos de placement, qué impulsa el coste, métricas y qué no confundir con promoción de pago. Las UI de ads cambian — céntrate en el sentido de los ajustes, no en screenshots viejos de botones.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es solo informativo y no es una invitación a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Usar targeting de pago o un creator?",
      a: "El targeting da control y escala. Un creator construye confianza y calienta la audiencia. A menudo se combinan. Elegir un creator está en un artículo aparte.",
    },
    {
      q: "¿Cuánto cuesta la publicidad en Instagram?",
      a: "No hay un «precio por clic para siempre» fijo: subasta, nicho, temporada, creative. Las tarifas de creators dependen del alcance, formato y engagement rate — los benchmarks de 2021 no son una lista de precios viva.",
    },
    {
      q: "¿Siguen funcionando el mass-liking y el mass-following?",
      a: "Como estrategia de crecimiento — no: arriesgas límites y una audiencia ruidosa. Mejor: contenido sólido más ads legítimos.",
    },
    {
      q: "¿Qué cuenta como éxito?",
      a: "No solo likes: CTR, leads, coste por lead, ventas, calidad del diálogo. Fija UTM o códigos promo de antemano.",
    },
    {
      q: "¿Hace falta una cuenta business?",
      a: "Para el ads manager e insights adecuados — sí, suele hacer falta el modo professional o business.",
    },
  ],
  sections: [
    {
      title: "Tipos de ads",
      level: 2,
      paras: [
        "Tres tracks que funcionan: ads oficiales (targeting), ads con creators y colocaciones en comunidades temáticas o cuentas tipo tablón.",
      ],
      lists: [
        {
          intro: "Overview rápido:",
          items: [
            "targeting — impresiones en feed/Stories/Reels por segmento, puja y presupuesto en el ads manager",
            "creator — post, Stories, Reels, serie; la fuerza es la recomendación",
            "comunidades / colocaciones de pago — a menudo más baratas, pero la atención al ad cae si el feed se siente como un tablón de clasificados",
          ],
        },
      ],
      links: [
        {
          label: "Cómo encontrar y vetear a un creator",
          href: "/es/blog/bloger-dlya-reklamy-instagram/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Qué impulsa el precio",
      level: 2,
      paras: [
        "En targeting, el precio es una subasta: competencia del nicho, calidad del ad, objetivo de campaña (alcance, tráfico, leads). Fijas presupuesto diario y puja; «desde $1 a $100 al día» de guías viejas es solo una ilustración del rango.",
        "Con creators, el precio crece con la audiencia, el formato (Stories vs integración en Reels) y la demanda. La regla «$10 = 10k followers» hace tiempo que no es universal — mira alcance y engagement rate, no solo el conteo de followers.",
      ],
      lists: [
        {
          intro: "Qué afecta la tarifa:",
          items: [
            "tamaño y calidad de la audiencia",
            "geo y temporada",
            "formato y derechos sobre el asset",
            "urgencia y número de revisiones",
            "engagement falso en el perfil — mejor no comprarlo en absoluto",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Compara el coste por la acción deseada (lead o venta), no el «alcance barato». Los bots baratos salen más caros al final.",
        },
      ],
    },
    {
      title: "Métodos «gratis» — dónde está el truco",
      level: 2,
      paras: [
        "Al inicio la gente busca crecimiento sin presupuesto. Algunos métodos son legítimos (trueque, collabs); otros son dañinos.",
      ],
      lists: [
        {
          intro: "Cuidado con:",
          items: [
            "mass-liking / mass-following — riesgo de sanción y audiencia basura",
            "spam por DM — reports y bloqueos",
            "concursos de «seguir a todos» — un pico de followers muertos",
          ],
        },
        {
          intro: "Lo que de verdad funciona:",
          items: [
            "trueque con un creator relevante (producto ↔ integración)",
            "shoutouts mutuos con audiencia cercana, sin ser pesado",
            "orgánico fuerte + una oferta clara en la cabecera",
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
    {
      title: "Por qué la plataforma funciona para ads",
      level: 2,
      paras: [
        "Tráfico móvil, formato visual, segmentación flexible en el ads manager, hábito de la audiencia con integraciones nativas — si el perfil está vivo y la oferta está clara.",
        "El reverso: sube la competencia por la atención y el coste en nichos calientes. Sin landing (sitio, messenger, formulario) el presupuesto se quema en views vanidosas.",
      ],
    },
    {
      title: "Cómo trackear la efectividad",
      level: 2,
      paras: [
        "Antes del lanzamiento fija el objetivo y el método de tracking. Si no, discutiréis por el alcance, no por el dinero.",
      ],
      lists: [
        {
          intro: "Control mínimo:",
          items: [
            "UTMs en enlaces / códigos promo separados por creator",
            "stats del ads manager: CTR, CPC/CPA, frecuencia",
            "con un creator — alcance, saves, replies, clics, screenshots",
            "calidad del lead (no solo el conteo)",
            "comparar creatives y creators con la misma oferta",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Juzgar a un creator solo por el conteo de followers. Mira dinámica, comentarios y encaje de audiencia — ver el checklist en el artículo de cómo encontrar un creator.",
        },
      ],
    },
  ],
};

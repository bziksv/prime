import type { BlogPost } from "../../../data/blog";

/** EN overlay for ohvat-instagram — same structure as RU JSON. */
export const ohvatInstagramEn: BlogPost = {
  slug: "ohvat-instagram",
  title: "Instagram reach: what it is and how it differs from impressions",
  date: "2021-01-26",
  category: "SMM",
  cover: "/images/blog/ohvat-instagram/cover-en.webp",
  excerpt:
    "What Instagram reach is: unique accounts vs impressions, why reach drops, and how to grow with legitimate methods — without bots and a catalog of gray-hat services.",
  lead: [
    "Reach is how many unique accounts saw a post or profile in a period. Impressions count every view, including repeats by the same person.",
    "Below: why watch reach, why it jumps, and what to do legally. We don’t recommend bought likes and bots: risk of limits and a dead audience. Meta product disclaimer is on the page. Full Insights walkthrough — in the stats article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are reach and impressions the same?",
      a: "No. Reach is unique viewers. Impressions are all views. One person can add 1 to reach and 10 to impressions.",
    },
    {
      q: "Is reach the same as follower count?",
      a: "No. Non-followers see content too (recommendations, hashtags, story shares). Some followers never see the post.",
    },
    {
      q: "Why did reach drop?",
      a: "Format change, weak hook, posting frequency, feed competition, account limits, seasonality. Watch several posts’ dynamics, not one miss.",
    },
    {
      q: "Will bought reach help?",
      a: "Not for sales. Bots and purchased actions hurt algorithm trust and risk bans. Don’t use them.",
    },
    {
      q: "Where do you see the number?",
      a: "In professional account Insights and post/story insights. You need a business/creator mode.",
    },
  ],
  sections: [
    {
      title: "In plain English",
      level: 2,
      paras: [
        "Think of a street sign: reach is how many different people noticed it; impressions are how many looks, including repeats; customers are a separate conversion story.",
        "On Instagram reach helps estimate how many people the content reached — not how many times the same reel was scrolled.",
      ],
      links: [
        {
          label: "Instagram Insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Reach vs impressions vs activity",
      level: 2,
      paras: [
        "High impressions with low reach — many repeat views from a narrow group. High reach with zero saves and DMs — a shop window with no demand.",
        "For business the chain matters: reach → actions (profile, site, messages) → leads. Likes are easy to fake; reach is harder to fake, but chasing only reach without an offer is pointless.",
      ],
      lists: [
        {
          intro: "Watch next to reach:",
          items: [
            "saves and replies",
            "profile visits",
            "link/sticker clicks",
            "messages and leads",
            "share of reach from followers",
          ],
        },
      ],
    },
    {
      title: "What changes reach",
      level: 2,
      paras: [
        "The algorithm ranks the feed and recommendations: does the reel hold attention, do people save and reply, is the topic relevant. Posting time only matters relative to when your audience is online.",
        "A sharp drop after bots, DM spam, or shadow limits is a separate track. See the shadowban and block articles.",
      ],
      links: [
        {
          label: "Shadowban",
          href: "/en/blog/tenevoy-ban-instagram/",
        },
        {
          label: "Account block",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "How to grow without gray-hat tactics",
      level: 2,
      paras: [
        "A strong first frame and caption hook, Reels/video series where they fit, honest giveaways by the rules, Stories with polls, collabs with relevant creators, ads with a clear audience.",
        "News and trends — only if tied to the niche. A content plan beats a one-off “viral” burst.",
      ],
      lists: [
        {
          intro: "White checklist:",
          items: [
            "timing from your own “when online” stats",
            "formats that already get saves",
            "CTA to profile/DM/site",
            "reply to comments in the first hours",
            "ads or a collab instead of bots",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Buying “reach and likes” in a pack. The number grows, leads don’t, sanction risk does.",
        },
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Giveaway",
          href: "/en/blog/rozygrysh-instagram/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Why we don’t treat bots as a method",
      level: 2,
      paras: [
        "Exchange services and bot shops promise fast growth. The platform cuts those signals; the audience doesn’t buy. We don’t repeat “Nakrutka / Socgain” catalogs from old articles.",
        "If metrics are already spoiled by bots — stop them, strengthen live content, and don’t mix blindly with ad budget.",
      ],
    },
    {
      title: "Where to look in the account",
      level: 2,
      paras: [
        "Professional account → profile Insights and a single post/story. Menu labels changed; look for Insights / “View insights.”",
        "Screenshot key weeks — easier to compare series launches and ads.",
      ],
      links: [
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Reach is unique viewers; impressions are all views. Grow with white content and ads, measure actions — not only reach.",
        "Bots don’t replace an offer and trust.",
      ],
    },
  ],
  closing: [
    "Cross-check reach with impressions and leads in Insights, strengthen formats with saves and replies — and don’t spend budget on bots. Live reach is slower, but it feeds sales.",
  ],
  related: [
    "statistika-instagram",
    "tenevoy-ban-instagram",
    "reklama-instagram",
    "kontent-plan-instagram",
    "biznes-akkaunt-instagram",
    "rozygrysh-instagram",
  ],
};

/** ES overlay for ohvat-instagram — same structure as RU JSON / EN. */
export const ohvatInstagramEs: BlogPost = {
  slug: "ohvat-instagram",
  title: "Alcance en Instagram: qué es y en qué se diferencia de las impresiones",
  date: "2021-01-26",
  category: "SMM",
  cover: "/images/blog/ohvat-instagram/cover.webp",
  excerpt:
    "Qué es el alcance de Instagram: cuentas únicas vs impresiones, por qué cae el alcance y cómo crecer con métodos legítimos — sin bots ni un catálogo de servicios gray-hat.",
  lead: [
    "El alcance es cuántas cuentas únicas vieron un post o perfil en un periodo. Las impresiones cuentan cada vista, incluidos los repeats de la misma persona.",
    "Abajo: por qué mirar el alcance, por qué salta y qué hacer de forma legal. No recomendamos likes comprados ni bots: riesgo de límites y audiencia muerta. El disclaimer del producto Meta está en la página. Walkthrough completo de Insights — en el artículo de stats.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Alcance e impresiones son lo mismo?",
      a: "No. El alcance son viewers únicos. Las impresiones son todas las vistas. Una persona puede sumar 1 al alcance y 10 a las impresiones.",
    },
    {
      q: "¿El alcance es lo mismo que el número de followers?",
      a: "No. Los no-followers también ven contenido (recomendaciones, hashtags, shares de story). Algunos followers nunca ven el post.",
    },
    {
      q: "¿Por qué cayó el alcance?",
      a: "Cambio de formato, gancho flojo, frecuencia de posting, competencia en el feed, límites de cuenta, estacionalidad. Mira la dinámica de varios posts, no un solo fallo.",
    },
    {
      q: "¿Ayuda el alcance comprado?",
      a: "No para ventas. Los bots y las acciones compradas dañan la confianza del algoritmo y arriesgan bans. No los uses.",
    },
    {
      q: "¿Dónde se ve el número?",
      a: "En Insights de la cuenta profesional y en insights de post/story. Hace falta modo business/creator.",
    },
  ],
  sections: [
    {
      title: "En palabras simples",
      level: 2,
      paras: [
        "Piensa en un cartel en la calle: el alcance es cuántas personas distintas lo notaron; las impresiones son cuántas miradas, incluidos los repeats; los clientes son una historia de conversión aparte.",
        "En Instagram el alcance ayuda a estimar a cuántas personas llegó el contenido — no cuántas veces se scrolleó el mismo reel.",
      ],
      links: [
        {
          label: "Instagram Insights",
          href: "/es/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Alcance vs impresiones vs actividad",
      level: 2,
      paras: [
        "Muchas impresiones con poco alcance — muchas vistas repetidas de un grupo estrecho. Mucho alcance con cero saves y DMs — un escaparate sin demanda.",
        "Para negocio importa la cadena: alcance → acciones (perfil, sitio, mensajes) → leads. Los likes son fáciles de falsificar; el alcance es más difícil, pero perseguir solo alcance sin oferta no tiene sentido.",
      ],
      lists: [
        {
          intro: "Mira junto al alcance:",
          items: [
            "saves y respuestas",
            "visitas al perfil",
            "clics en link/sticker",
            "mensajes y leads",
            "cuota de alcance desde followers",
          ],
        },
      ],
    },
    {
      title: "Qué cambia el alcance",
      level: 2,
      paras: [
        "El algoritmo rankea el feed y las recomendaciones: ¿el reel retiene atención?, ¿la gente guarda y responde?, ¿el tema es relevante? La hora de publicar solo importa relativa a cuándo está online tu audiencia.",
        "Una caída brusca tras bots, spam de DM o límites shadow es una vía aparte. Ver los artículos de shadowban y bloqueo.",
      ],
      links: [
        {
          label: "Shadowban",
          href: "/es/blog/tenevoy-ban-instagram/",
        },
        {
          label: "Bloqueo de cuenta",
          href: "/es/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "Cómo crecer sin tácticas gray-hat",
      level: 2,
      paras: [
        "Un primer frame y gancho de caption fuertes, series de Reels/vídeo donde encajen, giveaways honestos según las reglas, Stories con encuestas, collabs con creators relevantes, ads con audiencia clara.",
        "Noticias y tendencias — solo si van atadas al nicho. Un plan de contenido gana a un estallido «viral» suelto.",
      ],
      lists: [
        {
          intro: "Checklist blanco:",
          items: [
            "timing desde tus propias stats de «cuándo online»",
            "formatos que ya obtienen saves",
            "CTA a perfil/DM/sitio",
            "responder comentarios en las primeras horas",
            "ads o un collab en vez de bots",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Comprar «alcance y likes» en un pack. El número crece, los leads no, el riesgo de sanción sí.",
        },
      ],
      links: [
        {
          label: "Ads de Instagram",
          href: "/es/blog/reklama-instagram/",
        },
        {
          label: "Giveaway",
          href: "/es/blog/rozygrysh-instagram/",
        },
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Por qué no tratamos los bots como método",
      level: 2,
      paras: [
        "Los servicios de intercambio y las tiendas de bots prometen crecimiento rápido. La plataforma corta esas señales; la audiencia no compra. No repetimos catálogos «Nakrutka / Socgain» de artículos viejos.",
        "Si las métricas ya están estropeadas por bots — párarlos, reforzar contenido vivo y no mezclar a ciegas con presupuesto de ads.",
      ],
    },
    {
      title: "Dónde mirar en la cuenta",
      level: 2,
      paras: [
        "Cuenta profesional → Insights del perfil y de un post/story suelto. Las etiquetas del menú cambiaron; busca Insights / «View insights».",
        "Screenshot semanas clave — más fácil comparar lanzamientos de series y ads.",
      ],
      links: [
        {
          label: "Cuenta business",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "El alcance son viewers únicos; las impresiones son todas las vistas. Crece con contenido blanco y ads, mide acciones — no solo el alcance.",
        "Los bots no sustituyen una oferta y la confianza.",
      ],
    },
  ],
  closing: [
    "Cruza el alcance con impresiones y leads en Insights, refuerza formatos con saves y respuestas — y no gastes presupuesto en bots. El alcance vivo es más lento, pero alimenta ventas.",
  ],
  related: [
    "statistika-instagram",
    "tenevoy-ban-instagram",
    "reklama-instagram",
    "kontent-plan-instagram",
    "biznes-akkaunt-instagram",
    "rozygrysh-instagram",
  ],
};

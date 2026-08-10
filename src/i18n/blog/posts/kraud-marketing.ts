import type { BlogPost } from "../../../data/blog";

/** EN overlay for kraud-marketing — same structure as RU JSON. */
export const kraudMarketingEn: BlogPost = {
  slug: "kraud-marketing",
  title: "Crowd marketing: what it is and how it affects SEO",
  date: "2018-03-06",
  category: "Digital marketing",
  cover: "/images/blog/kraud-marketing/cover-en.webp",
  excerpt:
    "Crowd marketing means joining discussions on forums, review sites, and Q&A: useful answers, fitting mentions, spam risks — how it ties to SEO and how it differs from outreach.",
  lead: [
    "Crowd marketing is work in communities where people already ask and advise: forums, review sites, Q&A, niche groups. The goal is to help with the task and, when it fits, mention the product — not flood a thread with links.",
    "Below: goals, choosing platforms, and careful link formats. This is not a magic page-one shortcut and does not replace content on your own site. Mass paid reviews and undisclosed ads hurt reputation and platform rules.",
  ],
  faq: [
    {
      q: "How does crowd marketing differ from outreach?",
      a: "Outreach is emailing an editor or blog for a piece. Crowd is answering in live discussions. They often complement each other.",
    },
    {
      q: "How is it different from “forum links”?",
      a: "Forums are one crowd channel. Crowd is wider: reviews, Q&A, social communities, sometimes marketplaces.",
    },
    {
      q: "Will crowd links put me on page one in a month?",
      a: "No promise. Targeted visits and brand mentions — yes. Growing a query core takes planned months of systemic work (typically 2–6 after promotion starts) — not a batch of comments.",
    },
    {
      q: "Do you need dofollow links at any cost?",
      a: "No. Links are often nofollow. Value is audience and trust; “link equity” is secondary.",
    },
    {
      q: "Can you buy review packs?",
      a: "Bad idea: removals, platform claims, brand damage. Better real service and honest replies.",
    },
  ],
  sections: [
    {
      title: "Goals and when crowd fits",
      level: 2,
      paras: [
        "Typical goals: brand presence in niche discussions, qualified clicks, natural mentions, reputation support. SEO effect is a side effect and unstable without a strong site and demand.",
        "It works better where people read others’ experience before buying (complex choice, mid ticket) than for impulse micro-purchases. Premium brands with a narrow audience often fit PR and outreach better.",
        "Work frame: audience → live platforms → real pains → tone → KPI (post survival, clicks, inquiries) → an expert executor, not “100 comments a day.”",
        "Pattern: find a thread with a problem → answer on substance → link only if it truly helps. An account with activity history passes moderation better than a fresh spam profile.",
      ],
      lists: [
        {
          intro: "Crowd helps if:",
          items: [
            "you have something useful to say — not only a URL",
            "the platform is alive and in your niche",
            "you are ready to answer follow-ups",
            "you do not mask ads as a “neutral tip” against the rules",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "Platforms and links without spam",
      level: 2,
      paras: [
        "Review sites (iRecommend, Flamp, Tripadvisor and peers) are about customer experience; faking reviews is risky. Forums fit expert answers. Social communities need platform rules and local regulation in mind.",
        "Q&A: some older services closed or changed; look for current niche question platforms. An “intriguing” question just for a link with no value is spam.",
        "Marketplaces and price comparisons are more a seller card or review than a classic crowd comment; follow platform rules.",
        "On links: brand and naked anchors feel more natural than a commercial keyword in every post. UTM — if moderation allows (it often strips it). A text mention without a clickable link can still help. nofollow/noindex on the platform is normal, not a “bypass.” Links to authoritative sources next to your tip raise moderator trust.",
        "Anti-link-spam algorithms (historically Penguin, Minusinsk and successors) hit manipulation; “naked anchors will save you from a filter for 2 months” is an outdated myth. Crowd’s main cost is time: without niche study and a live tone, results stay weak.",
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "Crowd supports presence and referrals. It does not replace site prep: ranking work for a core is still planned over roughly 2–6 months after SEO work starts.",
        },
      ],
      links: [
        {
          label: "SERM",
          href: "/en/blog/serm/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  related: [
    "ssylki-na-forumah",
    "autrich",
    "serm",
    "pokupka-ssylok",
    "otzyvy-dlya-prodazh",
  ],
};

/** ES overlay for kraud-marketing — same structure as RU JSON / EN. */
export const kraudMarketingEs: BlogPost = {
  slug: "kraud-marketing",
  title: "Crowd marketing: qué es y cómo afecta al SEO",
  date: "2018-03-06",
  category: "Digital marketing",
  cover: "/images/blog/kraud-marketing/cover-es.webp",
  excerpt:
    "Crowd marketing es entrar en discusiones en foros, sitios de reseñas y Q&A: respuestas útiles, menciones que encajan, riesgos de spam — cómo se liga al SEO y en qué se diferencia del outreach.",
  lead: [
    "Crowd marketing es trabajo en comunidades donde la gente ya pregunta y aconseja: foros, sitios de reseñas, Q&A, grupos de nicho. El objetivo es ayudar con la tarea y, cuando encaja, mencionar el producto — no inundar un hilo con enlaces.",
    "Abajo: objetivos, elección de plataformas y formatos de enlace con cuidado. No es un atajo mágico a primera página y no sustituye el contenido en tu propio sitio. Las reseñas masivas de pago y la publicidad sin declarar dañan la reputación y las reglas de la plataforma.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el crowd marketing del outreach?",
      a: "Outreach es escribir a un editor o blog por una pieza. Crowd es responder en discusiones vivas. A menudo se complementan.",
    },
    {
      q: "¿En qué se diferencia de «enlaces en foros»?",
      a: "Los foros son un canal de crowd. Crowd es más amplio: reseñas, Q&A, comunidades sociales, a veces marketplaces.",
    },
    {
      q: "¿Los enlaces de crowd me ponen en primera página en un mes?",
      a: "Sin promesa. Visitas con intención y menciones de marca — sí. Crecer un núcleo de consultas lleva meses planificados de trabajo sistémico (típicamente 2–6 tras el inicio de la promoción) — no un lote de comentarios.",
    },
    {
      q: "¿Hacen falta enlaces dofollow a cualquier precio?",
      a: "No. Los enlaces a menudo son nofollow. El valor es audiencia y confianza; el «equity de enlace» es secundario.",
    },
    {
      q: "¿Se pueden comprar packs de reseñas?",
      a: "Mala idea: bajas, reclamaciones de la plataforma, daño de marca. Mejor servicio real y respuestas honestas.",
    },
  ],
  sections: [
    {
      title: "Objetivos y cuándo encaja el crowd",
      level: 2,
      paras: [
        "Objetivos típicos: presencia de marca en discusiones de nicho, clics cualificados, menciones naturales, apoyo a la reputación. El efecto SEO es un side effect e inestable sin un sitio fuerte y demanda.",
        "Funciona mejor donde la gente lee la experiencia ajena antes de comprar (elección compleja, ticket medio) que para microcompras de impulso. Las marcas premium con audiencia estrecha a menudo encajan mejor con PR y outreach.",
        "Marco de trabajo: audiencia → plataformas vivas → dolores reales → tono → KPI (supervivencia del post, clics, consultas) → un ejecutor experto, no «100 comentarios al día».",
        "Patrón: encuentra un hilo con un problema → responde con sustancia → enlaza solo si de verdad ayuda. Una cuenta con historial de actividad pasa la moderación mejor que un perfil spam fresco.",
      ],
      lists: [
        {
          intro: "Crowd ayuda si:",
          items: [
            "tienes algo útil que decir — no solo una URL",
            "la plataforma está viva y en tu nicho",
            "estás listo para responder follow-ups",
            "no enmascaras ads como un «tip neutro» contra las reglas",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces en foros",
          href: "/es/blog/ssylki-na-forumah/",
        },
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
      ],
    },
    {
      title: "Plataformas y enlaces sin spam",
      level: 2,
      paras: [
        "Sitios de reseñas (iRecommend, Flamp, Tripadvisor y pares) van de experiencia del cliente; falsificar reseñas es riesgoso. Los foros encajan con respuestas de experto. Las comunidades sociales piden reglas de la plataforma y regulación local en mente.",
        "Q&A: algunos servicios viejos cerraron o cambiaron; busca plataformas actuales de preguntas de nicho. Una pregunta «intrigante» solo por un enlace sin valor es spam.",
        "Marketplaces y comparadores de precio son más una ficha de vendedor o reseña que un comentario crowd clásico; sigue las reglas de la plataforma.",
        "Sobre enlaces: anclas de marca y desnudas se sienten más naturales que una keyword comercial en cada post. UTM — si la moderación lo permite (a menudo lo quita). Una mención en texto sin enlace clicable aún puede ayudar. nofollow/noindex en la plataforma es normal, no un «bypass». Enlaces a fuentes con autoridad junto a tu tip suben la confianza del moderador.",
        "Los algoritmos anti-spam de enlaces (históricamente Penguin, Minusinsk y sucesores) golpean la manipulación; «las anclas desnudas te salvan de un filtro 2 meses» es un mito obsoleto. El coste principal del crowd es tiempo: sin estudio del nicho y un tono vivo, los resultados se quedan flojos.",
      ],
      notes: [
        {
          title: "Nota SEO",
          kind: "tip",
          text: "Crowd apoya presencia y referidos. No sustituye la preparación del sitio: el trabajo de rankings de un núcleo se planifica aún a unos 2–6 meses tras el arranque del SEO.",
        },
      ],
      links: [
        {
          label: "SERM",
          href: "/blog/serm/",
        },
        {
          label: "Comprar enlaces",
          href: "/es/blog/pokupka-ssylok/",
        },
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
  ],
  related: [
    "ssylki-na-forumah",
    "autrich",
    "serm",
    "pokupka-ssylok",
    "otzyvy-dlya-prodazh",
  ],
};

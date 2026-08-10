import type { BlogPost } from "../../../data/blog";

/** EN overlay for sotsialnye-seti — same structure as RU JSON. */
export const sotsialnyeSetiEn: BlogPost = {
  slug: "sotsialnye-seti",
  title: "Social networks: history, types, and why business needs them",
  date: "2022-01-27",
  category: "SMM",
  cover: "/images/blog/sotsialnye-seti/cover-en.webp",
  excerpt:
    "What social networks are: a short history, platform types, benefits and risks, and trends — without outdated MAU roundups or dead Google+. Meta disclaimer on the page.",
  lead: [
    "A social network is an online platform where people create profiles, connect, and share content. For business it’s a channel for touchpoints, service, and demand — next to the site, not instead of it.",
    "Below: where social networks came from, how platforms differ by job, why they hold attention, which risks to plan for, and where audience attention is shifting. We don’t recycle 2021–2022 MAU rankings — platforms and laws change. A Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is for information only and is not an invitation to use the platform. Instagram*, Facebook*, and WhatsApp* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a social network the same as a messenger?",
      a: "They often overlap: networks have chats, messengers have channels and statuses. For strategy, what matters more is where your audience is and what job the channel does.",
    },
    {
      q: "Does a business need every major platform?",
      a: "No. One or two strong channels beat five empty ones. See the piece on social for business.",
    },
    {
      q: "Is Google+ still relevant?",
      a: "No — the service is closed. Don’t build a plan on dead platforms from old roundups.",
    },
    {
      q: "How do local networks differ from global ones?",
      a: "Audience, ad accounts, rules, and availability. Choose for geography and legal context — not someone else’s global league table.",
    },
    {
      q: "Do social networks kill the site?",
      a: "No. The site is the base for SEO, trust, and conversion; networks are traffic and dialogue. You need a clear link between them.",
    },
  ],
  sections: [
    {
      title: "A short history",
      level: 2,
      paras: [
        "The idea of “networks of ties” was discussed in sociology long before the web. Early 1990s online spaces (classmate finders, profiles, messages) set the frame: profile → connections → feed.",
        "In the 2000s came business and media networks, then mass chat and video platforms. In the Russian-speaking segment, VK and Odnoklassniki grew separately; later came photo/video formats and short clips.",
        "Important: the landscape didn’t freeze. Platforms get bought, closed, or change algorithms and ad rules — business strategy should rest on the current audience, not nostalgia for a “golden year.”",
      ],
    },
    {
      title: "Platform types by job",
      level: 2,
      paras: [
        "Conversation and communities: profiles, feed, groups. Media: photo, video, streams. Reviews: choosing products and services. Discussion and Q&A. Blogs and microblogs. Niche networks by interest or profession.",
        "One platform often mixes several roles. For marketing it’s clearer to think in jobs — reach, trust, service, leads, HR — and pick the channel for the job.",
      ],
      lists: [
        {
          intro: "A practical map:",
          items: [
            "awareness and content",
            "dialogue and support",
            "video and learning",
            "reviews and reputation",
            "B2B contacts",
          ],
        },
      ],
      links: [
        {
          label: "Social networks for business",
          href: "/en/blog/sotsseti-dlya-biznesa/",
        },
        {
          label: "Content types in social media",
          href: "/en/blog/vidy-kontenta-socseti/",
        },
      ],
    },
    {
      title: "Why people use them",
      level: 2,
      paras: [
        "Easy conversation without distance barriers, a familiar mobile UI, fast access to news and entertainment, and finding people and communities by interest.",
        "Business valued targeting, content marketing, and service in comments. Users valued comparing sellers and getting a quick reply.",
      ],
    },
    {
      title: "Risks",
      level: 2,
      paras: [
        "Leaks and account takeovers, phishing, oversharing personal data, harassment, feed addiction, disinformation, and fake engagement.",
        "For brands, add reputation crises, blocks for rule breaks, and dependence on someone else’s algorithm.",
        "Mitigation: strong passwords and 2FA, minimal extra data in the profile, moderation, and owned channels (site, email, CRM) — don’t keep the only “truth about the company” only on social.",
      ],
      links: [
        {
          label: "Engagement in social media",
          href: "/en/blog/vovlechennost-socseti/",
        },
        {
          label: "SMM strategy",
          href: "/en/blog/smm-strategiya/",
        },
      ],
    },
    {
      title: "Major platforms: how to read league tables",
      level: 2,
      paras: [
        "Global roundups often mix messengers, video hosts, and classic networks. Audience figures age within a quarter — use fresh reports for your market, not a 2022 article screenshot.",
        "For content plans, go where your customers already are: for many niches in Russia that’s VK and messengers; for visual brands — photo/video platforms; for B2B — professional networks.",
        "Mind the legal status of platforms in your jurisdiction and whether ad accounts exist. Strike dead services (like closed Google+) from old rankings.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying a “global top ten” as a media plan for a local business. Audience and geography first, then the platform.",
        },
      ],
    },
    {
      title: "Trends worth watching",
      level: 2,
      paras: [
        "Mobile traffic dominates. Short video and vertical formats compete with the long feed for attention. Demand for trustworthy sources grows against fakes and bots.",
        "Platforms tighten ad and moderation rules. For brands, owned bases (email, CRM) and a site are more durable than betting on one algorithm.",
        "New formats appear faster than guides age — keep strategy on goals, and refresh format tactics from your own stats.",
      ],
      links: [
        {
          label: "Common SMM mistakes",
          href: "/en/blog/oshibki-smm/",
        },
        {
          label: "Social networks and SEO",
          href: "/en/blog/socseti-i-seo/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "Social networks are a tool for ties and content — not a magic sales button.",
        "Pick platforms for the job and audience, not someone else’s ranking.",
        "Build data and reputation risks into the process the same way you build a content plan.",
      ],
    },
  ],
  closing: [
    "Write down two business jobs for the quarter and one platform where customers already are — more useful than collecting “social history” with no touchpoint plan.",
  ],
  related: [
    "sotsseti-dlya-biznesa",
    "smm-strategiya",
    "vidy-kontenta-socseti",
    "vovlechennost-socseti",
    "oshibki-smm",
    "socseti-i-seo",
  ],
};

/** ES overlay for sotsialnye-seti — same structure as RU JSON / EN. */
export const sotsialnyeSetiEs: BlogPost = {
  slug: "sotsialnye-seti",
  title: "Redes sociales: historia, tipos y por qué las necesita el negocio",
  date: "2022-01-27",
  category: "SMM",
  cover: "/images/blog/sotsialnye-seti/cover-es.webp",
  excerpt:
    "Qué son las redes sociales: una historia corta, tipos de plataformas, beneficios y riesgos, y tendencias — sin roundups de MAU obsoletos ni Google+ muerto. Disclaimer Meta en la página.",
  lead: [
    "Una red social es una plataforma online donde la gente crea perfiles, se conecta y comparte contenido. Para el negocio es un canal de toques, servicio y demanda — junto al sitio, no en su lugar.",
    "Abajo: de dónde vinieron las redes, cómo difieren las plataformas por trabajo, por qué retienen la atención, qué riesgos planificar y hacia dónde se mueve la atención de la audiencia. No reciclamos rankings de MAU 2021–2022 — plataformas y leyes cambian. Un disclaimer Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es solo informativo y no es una invitación a usar la plataforma. Instagram*, Facebook* y WhatsApp* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Una red social es lo mismo que un messenger?",
      a: "A menudo se solapan: las redes tienen chats, los messengers tienen canales y estados. Para la estrategia importa más dónde está tu audiencia y qué trabajo hace el canal.",
    },
    {
      q: "¿Un negocio necesita todas las plataformas grandes?",
      a: "No. Uno o dos canales fuertes ganan a cinco vacíos. Ver la pieza sobre redes para negocio.",
    },
    {
      q: "¿Google+ sigue siendo relevante?",
      a: "No — el servicio está cerrado. No armes un plan sobre plataformas muertas de roundups viejos.",
    },
    {
      q: "¿En qué se diferencian las redes locales de las globales?",
      a: "Audiencia, cuentas de ads, reglas y disponibilidad. Elige por geografía y contexto legal — no por la tabla de liga global de otro.",
    },
    {
      q: "¿Las redes matan el sitio?",
      a: "No. El sitio es la base de SEO, confianza y conversión; las redes son tráfico y diálogo. Hace falta un vínculo claro entre ellos.",
    },
  ],
  sections: [
    {
      title: "Una historia corta",
      level: 2,
      paras: [
        "La idea de «redes de vínculos» se discutió en sociología mucho antes de la web. Los espacios online de principios de los 90 (buscadores de compañeros, perfiles, mensajes) fijaron el marco: perfil → conexiones → feed.",
        "En los 2000 llegaron redes de negocio y media, luego plataformas masivas de chat y vídeo. En el segmento rusohablante, VK y Odnoklassniki crecieron aparte; después vinieron formatos foto/vídeo y clips cortos.",
        "Importante: el paisaje no se congeló. Las plataformas se compran, se cierran o cambian algoritmos y reglas de ads — la estrategia de negocio debe apoyarse en la audiencia actual, no en la nostalgia de un «año dorado».",
      ],
    },
    {
      title: "Tipos de plataforma por trabajo",
      level: 2,
      paras: [
        "Conversación y comunidades: perfiles, feed, grupos. Media: foto, vídeo, streams. Reseñas: elegir productos y servicios. Discusión y Q&A. Blogs y microblogs. Redes de nicho por interés o profesión.",
        "Una plataforma a menudo mezcla varios roles. Para marketing es más claro pensar en trabajos — alcance, confianza, servicio, leads, HR — y elegir el canal para el trabajo.",
      ],
      lists: [
        {
          intro: "Un mapa práctico:",
          items: [
            "awareness y contenido",
            "diálogo y soporte",
            "vídeo y aprendizaje",
            "reseñas y reputación",
            "contactos B2B",
          ],
        },
      ],
      links: [
        {
          label: "Redes sociales para negocio",
          href: "/blog/sotsseti-dlya-biznesa/",
        },
        {
          label: "Tipos de contenido en redes",
          href: "/blog/vidy-kontenta-socseti/",
        },
      ],
    },
    {
      title: "Por qué la gente las usa",
      level: 2,
      paras: [
        "Conversación fácil sin barreras de distancia, una UI móvil familiar, acceso rápido a noticias y entretenimiento, y encontrar gente y comunidades por interés.",
        "El negocio valoró el targeting, el content marketing y el servicio en comentarios. Los usuarios valoraron comparar vendedores y obtener una respuesta rápida.",
      ],
    },
    {
      title: "Riesgos",
      level: 2,
      paras: [
        "Filtraciones y tomas de cuenta, phishing, sobreexposición de datos personales, acoso, adicción al feed, desinformación y fake engagement.",
        "Para marcas, suma crisis de reputación, bloqueos por romper reglas y dependencia del algoritmo ajeno.",
        "Mitigación: contraseñas fuertes y 2FA, mínimos datos extra en el perfil, moderación y canales propios (sitio, email, CRM) — no dejes la única «verdad sobre la empresa» solo en redes.",
      ],
      links: [
        {
          label: "Engagement en redes",
          href: "/blog/vovlechennost-socseti/",
        },
        {
          label: "Estrategia SMM",
          href: "/blog/smm-strategiya/",
        },
      ],
    },
    {
      title: "Plataformas mayores: cómo leer las tablas",
      level: 2,
      paras: [
        "Los roundups globales a menudo mezclan messengers, hosts de vídeo y redes clásicas. Las cifras de audiencia envejecen en un trimestre — usa informes frescos de tu mercado, no un screenshot de un artículo de 2022.",
        "Para planes de contenido, ve donde tus clientes ya están: en muchos nichos de Rusia eso es VK y messengers; para marcas visuales — plataformas foto/vídeo; para B2B — redes profesionales.",
        "Ten en cuenta el estatus legal de las plataformas en tu jurisdicción y si existen cuentas de ads. Saca de listas viejas los servicios muertos (como Google+ cerrado).",
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Copiar una «lista global de diez» como media plan para un negocio local. Primero audiencia y geografía, luego la plataforma.",
        },
      ],
    },
    {
      title: "Tendencias que vale la pena mirar",
      level: 2,
      paras: [
        "El tráfico móvil domina. El vídeo corto y los formatos verticales compiten con el feed largo por la atención. Crece la demanda de fuentes fiables frente a fakes y bots.",
        "Las plataformas endurecen las reglas de ads y moderación. Para marcas, las bases propias (email, CRM) y un sitio son más duraderas que apostar a un solo algoritmo.",
        "Los formatos nuevos aparecen más rápido de lo que envejecen las guías — mantén la estrategia en objetivos y refresca la táctica de formato desde tus propias stats.",
      ],
      links: [
        {
          label: "Errores frecuentes de SMM",
          href: "/es/blog/oshibki-smm/",
        },
        {
          label: "Redes sociales y SEO",
          href: "/es/blog/socseti-i-seo/",
        },
      ],
    },
    {
      title: "Claves a recordar",
      level: 2,
      paras: [
        "Las redes son una herramienta de vínculos y contenido — no un botón mágico de ventas.",
        "Elige plataformas por el trabajo y la audiencia, no por el ranking de otro.",
        "Integra riesgos de datos y reputación en el proceso igual que un plan de contenido.",
      ],
    },
  ],
  closing: [
    "Anota dos trabajos de negocio para el trimestre y una plataforma donde los clientes ya están — más útil que coleccionar «historia social» sin plan de toques.",
  ],
  related: [
    "oshibki-smm",
    "socseti-i-seo",
    "sotsseti-dlya-biznesa",
    "smm-strategiya",
    "vidy-kontenta-socseti",
    "vovlechennost-socseti",
  ],
};

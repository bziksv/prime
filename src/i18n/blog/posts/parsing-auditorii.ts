import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing-auditorii — same structure as RU JSON. */
export const parsingAuditoriiEn: BlogPost = {
  slug: "parsing-auditorii",
  title: "Audience scraping: what it is and what to use instead",
  date: "2020-02-25",
  category: "Digital marketing",
  cover: "/images/blog/parsing-auditorii/cover-en.webp",
  excerpt:
    "What marketers mean by audience scraping on social networks, risks of mass profile harvesting, and how to segment legally — via ad accounts, your own list, and research.",
  lead: [
    "“Audience parsing” in marketing jargon means automatically collecting user and community lists by gender, geo, follows, and activity — then using them to target ads or message people in DMs.",
    "Below: why the idea looks convenient, where ToS and the law draw the line, and working alternatives without scraper catalogs or “export a competitor’s list” how-tos. Separately: a target-audience portrait without dumping other people’s profiles — in the related piece.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Mentions of Instagram* and Facebook* are illustrative. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is it different from defining a target audience?",
      a: "Target audience is who your customer is and what job they have. Audience scraping in the narrow sense is mass export of other people’s profiles or IDs. The first is always needed; the second often breaks platform rules.",
    },
    {
      q: "Can I scrape a competitor’s followers?",
      a: "Tools promise a lot. Under platform rules and personal-data law it’s a risk zone: bans, claims, a junk list. Safer: official ads and your own consent.",
    },
    {
      q: "What replaces a scraper for targeting?",
      a: "Pixel/account audiences, lookalikes from your customers, site retargeting, CRM segments, surveys and content tests — without dumping other people’s contacts into Excel.",
    },
    {
      q: "Is an online scraper better than a desktop one?",
      a: "For gray schemes the question is secondary. What matters is whether you break ToS and why you need other people’s personal data. We don’t recommend tools meant to bypass protections.",
    },
    {
      q: "Do I need scraping if I already have a list?",
      a: "Your own list with consent and deal history beats any bought dump. Scraping doesn’t replace it.",
    },
  ],
  sections: [
    {
      title: "What marketers usually mean by audience scraping",
      level: 2,
      paras: [
        "A service crawls open or semi-open social data, filters people by criteria, and returns a table: IDs, links, sometimes contacts and demographics. Then the list goes into ads, email, or manual outreach.",
        "Separately, people hunt communities where a similar audience lives — to advertise there or build interest hypotheses. The hypothesis itself is useful; mass profile export is a different risk level.",
      ],
      lists: [
        {
          intro: "Typical promises of such tools:",
          items: [
            "collect a community’s followers",
            "find audience overlaps",
            "filter by city/age",
            "export the result to a file",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Data scraping: boundaries",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Risks: platform rules and personal data",
      level: 2,
      paras: [
        "Social networks ban automated collection that bypasses APIs and protections. Accounts and domains tied to such schemes get blocked. “Everyone does it” doesn’t cancel ToS.",
        "Personal data and contacts can’t be piled into a list for cold ads without control. That hits reputation harder than saving on research.",
        "We don’t publish roundups of specific scrapers or step-by-step bypass guides — not for Instagram/Facebook, not for other platforms.",
      ],
      lists: [
        {
          intro: "What breaks in practice:",
          items: [
            "ad or personal account ban",
            "complaints and personal-data claims",
            "stale and fake profiles in the dump",
            "team time on a dirty list instead of the offer",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "If a vendor sells a “ready competitor audience as a file” — that’s a red flag, not a faster launch.",
        },
      ],
      links: [
        {
          label: "Email scraping: risks",
          href: "/en/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Legal ways to segment an audience",
      level: 2,
      paras: [
        "Official ad accounts offer interests, geo, retargeting, and lookalikes from your uploaded customers (per platform rules). A site pixel builds visitor audiences without scraping other people’s profiles.",
        "Your CRM, leads, email/SMS with consent, surveys, and manager interviews beat an ID dump. For “where the audience lives” hypotheses, use open community stats, competitor content, and search demand — without exporting people.",
        "First answer who the customer is and what job they have (audience portrait), then pick the delivery channel — not the other way around.",
      ],
      lists: [
        {
          intro: "A working setup without a scraper:",
          items: [
            "audience portrait and who is not a fit",
            "site events → retargeting audiences",
            "lookalikes from quality customers",
            "creative and offer tests",
            "regular cleanup of your own list",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
  ],
  closing: [
    "Audience scraping as mass export of other people’s profiles is a short path to bans and a toxic list. Segment via official ad tools, your analytics, and a real audience portrait — the channel lasts longer than one scraped warm-up list.",
  ],
  related: [
    "tselevaya-auditoriya",
    "parsing",
    "parsing-email",
    "retargeting",
    "formy-zahvata",
    "zashchita-ot-parsinga",
  ],
};

/** ES overlay for parsing-auditorii — same structure as RU JSON / EN. */
export const parsingAuditoriiEs: BlogPost = {
  slug: "parsing-auditorii",
  title: "Scraping de audiencia: qué es y qué usar en su lugar",
  date: "2020-02-25",
  category: "Marketing digital",
  cover: "/images/blog/parsing-auditorii/cover-es.webp",
  excerpt:
    "Qué entienden los marketers por scraping de audiencia en redes, riesgos de cosechar perfiles en masa y cómo segmentar de forma legal — vía cuentas de ads, tu propia lista e investigación.",
  lead: [
    "«Parsing de audiencia» en la jerga de marketing significa recoger automáticamente listas de usuarios y comunidades por género, geo, follows y actividad — y luego usarlas para targetear ads o escribir a la gente en DMs.",
    "Abajo: por qué la idea parece cómoda, dónde ToS y la ley dibujan la línea, y alternativas que funcionan sin catálogos de scrapers ni how-tos de «exportar la lista de un competidor». Aparte: un retrato de audiencia objetivo sin volcar perfiles ajenos — en la pieza relacionada.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Las menciones a Instagram* y Facebook* son ilustrativas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia de definir una audiencia objetivo?",
      a: "La audiencia objetivo es quién es tu cliente y qué trabajo tiene. El scraping de audiencia en sentido estrecho es exportar en masa perfiles o IDs ajenos. Lo primero siempre hace falta; lo segundo a menudo rompe las reglas de la plataforma.",
    },
    {
      q: "¿Puedo scrapear los followers de un competidor?",
      a: "Las herramientas prometen mucho. Bajo las reglas de la plataforma y la ley de datos personales es zona de riesgo: bans, reclamaciones, lista basura. Más seguro: ads oficiales y tu propio consentimiento.",
    },
    {
      q: "¿Qué sustituye a un scraper para el targeting?",
      a: "Audiencias de pixel/cuenta, lookalikes de tus clientes, retargeting del sitio, segmentos CRM, encuestas y tests de contenido — sin volcar contactos ajenos a Excel.",
    },
    {
      q: "¿Un scraper online es mejor que uno de escritorio?",
      a: "Para esquemas grises la pregunta es secundaria. Lo que importa es si rompes el ToS y por qué necesitas datos personales ajenos. No recomendamos herramientas pensadas para saltar protecciones.",
    },
    {
      q: "¿Necesito scraping si ya tengo una lista?",
      a: "Tu propia lista con consentimiento e historial de deals gana a cualquier dump comprado. El scraping no la sustituye.",
    },
  ],
  sections: [
    {
      title: "Qué suelen entender los marketers por scraping de audiencia",
      level: 2,
      paras: [
        "Un servicio rastrea datos sociales abiertos o semiabiertos, filtra gente por criterios y devuelve una tabla: IDs, enlaces, a veces contactos y demografía. Luego la lista va a ads, email o outreach manual.",
        "Por separado, la gente caza comunidades donde vive una audiencia similar — para anunciar ahí o armar hipótesis de interés. La hipótesis en sí es útil; exportar perfiles en masa es otro nivel de riesgo.",
      ],
      lists: [
        {
          intro: "Promesas típicas de esas herramientas:",
          items: [
            "recoger los followers de una comunidad",
            "encontrar solapes de audiencia",
            "filtrar por ciudad/edad",
            "exportar el resultado a un archivo",
          ],
        },
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
        {
          label: "Scraping de datos: límites",
          href: "/es/blog/parsing/",
        },
      ],
    },
    {
      title: "Riesgos: reglas de plataforma y datos personales",
      level: 2,
      paras: [
        "Las redes prohíben la recogida automatizada que salta APIs y protecciones. Cuentas y dominios ligados a esos esquemas se bloquean. «Todo el mundo lo hace» no cancela el ToS.",
        "Los datos personales y contactos no se pueden amontonar en una lista para ads fríos sin control. Eso golpea la reputación más que ahorrar en investigación.",
        "No publicamos roundups de scrapers concretos ni guías paso a paso de bypass — ni para Instagram/Facebook, ni para otras plataformas.",
      ],
      lists: [
        {
          intro: "Qué se rompe en la práctica:",
          items: [
            "ban de cuenta de ads o personal",
            "quejas y reclamaciones de datos personales",
            "perfiles caducos y falsos en el dump",
            "tiempo del equipo en una lista sucia en lugar de la oferta",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Si un vendor vende una «audiencia de competidor lista como archivo» — es una bandera roja, no un lanzamiento más rápido.",
        },
      ],
      links: [
        {
          label: "Scraping de emails: riesgos",
          href: "/es/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Formas legales de segmentar una audiencia",
      level: 2,
      paras: [
        "Las cuentas oficiales de ads ofrecen intereses, geo, retargeting y lookalikes de tus clientes subidos (según reglas de la plataforma). Un pixel del sitio construye audiencias de visitantes sin scrapear perfiles ajenos.",
        "Tu CRM, leads, email/SMS con consentimiento, encuestas y entrevistas a managers ganan a un dump de IDs. Para hipótesis de «dónde vive la audiencia», usa stats abiertas de comunidades, contenido de competidores y demanda de búsqueda — sin exportar personas.",
        "Primero responde quién es el cliente y qué trabajo tiene (retrato de audiencia), luego elige el canal de entrega — no al revés.",
      ],
      lists: [
        {
          intro: "Un setup que funciona sin scraper:",
          items: [
            "retrato de audiencia y quién no encaja",
            "eventos del sitio → audiencias de retargeting",
            "lookalikes de clientes de calidad",
            "tests de creative y oferta",
            "limpieza regular de tu propia lista",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
        {
          label: "Formularios de captación",
          href: "/es/blog/formy-zahvata/",
        },
      ],
    },
  ],
  closing: [
    "El scraping de audiencia como exportación masiva de perfiles ajenos es un camino corto a bans y a una lista tóxica. Segmenta vía herramientas oficiales de ads, tu analytics y un retrato real de audiencia — el canal dura más que una lista scrapeada de warm-up.",
  ],
  related: [
    "tselevaya-auditoriya",
    "parsing",
    "parsing-email",
    "retargeting",
    "formy-zahvata",
    "zashchita-ot-parsinga",
  ],
};

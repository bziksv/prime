import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-alerts — same structure as RU JSON. */
export const googleAlertsEn: BlogPost = {
  slug: "google-alerts",
  title: "Google Alerts: how to track mentions and topics",
  date: "2019-06-03",
  category: "Digital marketing",
  cover: "/images/blog/google-alerts/cover-en.webp",
  excerpt:
    "What Google Alerts is: email alerts for Google search queries. How to set it up, what brand and content tasks it covers, and where the limits are — without “speed up SEO” promises or dead social networks.",
  lead: [
    "Google Alerts is a free notification service: you set a query, Google emails a digest of new results it found on that topic.",
    "Below: who it’s useful for, how to create an alert, and which business scenarios make sense. It’s Google SERP monitoring, not a full social listening suite and not a site-analytics replacement. UI labels may differ — use alerts.google.com and the meaning of each setting.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is Google Alerts a paid product?",
      a: "The basic service is free. Limits on alert count and frequency are in current Google Help.",
    },
    {
      q: "Does it catch social posts?",
      a: "Weakly and unpredictably: not everything is indexed. For social, use platform search and dedicated mention tools.",
    },
    {
      q: "Does it replace an SEO audit?",
      a: "No. Alerts helps notice mentions and topic news; it doesn’t fix tech or move your rankings.",
    },
    {
      q: "Do I need a Google account?",
      a: "Easier from an account: simpler to edit the alert list. Email still gets confirmation/digests.",
    },
    {
      q: "Why so few emails?",
      a: "Narrow query, rare topic, “best results only” filter, or weak indexing. Broaden the wording or change region/language.",
    },
  ],
  sections: [
    {
      title: "Who needs Google Alerts and why",
      level: 2,
      paras: [
        "The service saves manual “what’s written about us / the niche” searching. Once a day or as results appear you get links — and decide whether to react.",
        "It’s a complement to other tools: Search Console / Webmaster, analytics, review monitoring. Don’t expect Alerts to give dashboards or “100% coverage of every article”.",
      ],
      lists: [
        {
          intro: "Typical tasks:",
          items: [
            "brand and domain mentions",
            "reviews and write-ups by company name",
            "niche and competitor news (watch volume)",
            "new materials on a key topic",
            "watching copycats / URL mentions",
          ],
        },
      ],
    },
    {
      title: "How to create an alert",
      level: 2,
      paras: [
        "Open Google Alerts, enter a query, preview results, and save the alert. Set frequency (as-it-happens / daily / weekly — options change), sources, language, region, and result type (“best” or a wider stream).",
        "Confirm email if asked. Later you can edit and delete alerts — don’t spawn hundreds of near-identical queries.",
      ],
      lists: [
        {
          intro: "Practical settings:",
          items: [
            "start with 3–7 important queries, not “a thousand keys”",
            "for brand — exact name and spelling variants",
            "exclude your site with `-site:` when needed",
            "language and region for your audience",
            "frequency for topic volume (noisy topics — digest)",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Queries that are too broad (“marketing”, “SEO”) drown the inbox. Narrow the wording or add brand/niche.",
        },
      ],
    },
    {
      title: "Scenarios for a company",
      level: 2,
      paras: [
        "Brand: queries with company and product name; optionally exclude your domain to catch external mentions. Respond to negatives by platform rules — no fake reviews.",
        "Content and PR: topics you write expert pieces on — an alert surfaces fresh angles. Don’t turn “guest-post sites via Alerts” into mass spam: site quality and placement rules beat speed.",
      ],
      lists: [
        {
          intro: "Example wordings (idea):",
          items: [
            "exact brand name in quotes",
            "brand + “review” / “overview”",
            "niche topic + language limit",
            "`site:example.com` — if you watch someone else’s section",
            "`-site:your-domain` — external mentions",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
      ],
    },
    {
      title: "Operators and social",
      level: 2,
      paras: [
        "Familiar Google search tricks work in queries: quotes, `-site:`, sometimes `OR` for spelling variants. Don’t rely on dead domains like Google+ from old guides.",
        "Monitoring VK/Telegram/Instagram* via Alerts is unreliable: much content never hits web search. For social, use built-in search and dedicated mention services.",
      ],
      lists: [
        {
          intro: "What Alerts doesn’t replace:",
          items: [
            "real-time social listening",
            "GA4/Metrika reports",
            "index checks in Webmaster / Search Console",
            "full enterprise media monitoring",
          ],
        },
      ],
      links: [
        {
          label: "Google search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "Limits and list hygiene",
      level: 2,
      paras: [
        "The service has a ceiling on alert count and is sensitive to overly broad queries. We don’t lock 2019 guide numbers (“exactly 1000”) — check current Google limits.",
        "Once a quarter, clean dead alerts, tighten wordings, and turn off what you no longer read. Otherwise important mail drowns in noise.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Google Alerts is a simple radar on Google’s web results. Strong for brand and topic, weak as the only monitoring channel and as a “ranking accelerator”.",
        "Set a narrow query set, confirm email, and react to signals — don’t expect the service to improve positions by itself.",
      ],
    },
  ],
  closing: [
    "Create a few precise alerts for brand and key topics, exclude your site where needed, and keep the list short — that’s how Google Alerts saves time on manual mention hunting.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "negativnyy-otzyv",
    "operatory-poiska",
    "kontent-plan",
    "analiz-konkurentov",
    "prodvizhenie-brenda",
  ],
};

/** ES overlay for google-alerts — same structure as RU JSON / EN. */
export const googleAlertsEs: BlogPost = {
  slug: "google-alerts",
  title: "Google Alerts: cómo rastrear menciones y temas",
  date: "2019-06-03",
  category: "Digital marketing",
  cover: "/images/blog/google-alerts/cover.webp",
  excerpt:
    "Qué es Google Alerts: avisos por email para queries de búsqueda de Google. Cómo configurarlo, qué tareas de marca y contenido cubre y dónde están los límites — sin promesas de «acelerar SEO» ni redes sociales muertas.",
  lead: [
    "Google Alerts es un servicio gratis de notificaciones: fijas una query, Google envía por email un digest de resultados nuevos que encontró sobre ese tema.",
    "Abajo: a quién le sirve, cómo crear un alert y qué escenarios de negocio tienen sentido. Es monitoreo de la SERP de Google, no un suite completo de social listening ni un sustituto de analytics del sitio. Las etiquetas de UI pueden diferir — usa alerts.google.com y el sentido de cada ajuste.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Google Alerts es un producto de pago?",
      a: "El servicio básico es gratis. Los límites de cantidad de alerts y frecuencia están en la Help actual de Google.",
    },
    {
      q: "¿Pilla posts de social?",
      a: "Débil e impredecible: no todo está indexado. Para social, usa la búsqueda de la plataforma y tools dedicadas de menciones.",
    },
    {
      q: "¿Sustituye una auditoría SEO?",
      a: "No. Alerts ayuda a notar menciones y noticias del tema; no arregla la técnica ni mueve tus rankings.",
    },
    {
      q: "¿Hace falta una cuenta Google?",
      a: "Más fácil desde una cuenta: más simple editar la lista de alerts. El email sigue recibiendo confirmación/digests.",
    },
    {
      q: "¿Por qué tan pocos emails?",
      a: "Query estrecha, tema raro, filtro «solo mejores resultados» o indexación débil. Amplía el wording o cambia región/idioma.",
    },
  ],
  sections: [
    {
      title: "Quién necesita Google Alerts y por qué",
      level: 2,
      paras: [
        "El servicio ahorra la búsqueda manual de «qué se escribe de nosotros / el nicho». Una vez al día o cuando aparecen resultados recibes enlaces — y decides si reaccionar.",
        "Es un complemento de otras tools: Search Console / Webmaster, analytics, monitoreo de reviews. No esperes que Alerts dé dashboards ni «cobertura del 100% de cada artículo».",
      ],
      lists: [
        {
          intro: "Tareas típicas:",
          items: [
            "menciones de marca y dominio",
            "reviews y write-ups por nombre de empresa",
            "noticias de nicho y competidores (mira el volumen)",
            "materiales nuevos sobre un tema clave",
            "vigilar copycats / menciones de URL",
          ],
        },
      ],
    },
    {
      title: "Cómo crear un alert",
      level: 2,
      paras: [
        "Abre Google Alerts, introduce una query, previsualiza resultados y guarda el alert. Fija frecuencia (al momento / diario / semanal — las opciones cambian), fuentes, idioma, región y tipo de resultado («mejores» o un stream más amplio).",
        "Confirma el email si te lo piden. Luego puedes editar y borrar alerts — no generes cientos de queries casi idénticas.",
      ],
      lists: [
        {
          intro: "Ajustes prácticos:",
          items: [
            "empieza con 3–7 queries importantes, no «mil keys»",
            "para marca — nombre exacto y variantes de escritura",
            "excluye tu sitio con `-site:` cuando haga falta",
            "idioma y región para tu audiencia",
            "frecuencia según volumen del tema (temas ruidosos — digest)",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Queries demasiado amplias («marketing», «SEO») ahogan el inbox. Estrecha el wording o añade marca/nicho.",
        },
      ],
    },
    {
      title: "Escenarios para una empresa",
      level: 2,
      paras: [
        "Marca: queries con nombre de empresa y producto; opcionalmente excluye tu dominio para pillar menciones externas. Responde a negativos según reglas de plataforma — sin reviews falsas.",
        "Contenido y PR: temas sobre los que escribes piezas expertas — un alert saca ángulos frescos. No conviertas «sitios de guest-post vía Alerts» en spam masivo: calidad del sitio y reglas de placement ganan a la velocidad.",
      ],
      lists: [
        {
          intro: "Wordings de ejemplo (idea):",
          items: [
            "nombre exacto de marca entre comillas",
            "marca + «review» / «overview»",
            "tema de nicho + límite de idioma",
            "`site:example.com` — si miras la sección de otro",
            "`-site:your-domain` — menciones externas",
          ],
        },
      ],
      links: [
        {
          label: "Reviews para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Review negativa",
          href: "/es/blog/negativnyy-otzyv/",
        },
      ],
    },
    {
      title: "Operadores y social",
      level: 2,
      paras: [
        "Los trucos familiares de búsqueda de Google funcionan en las queries: comillas, `-site:`, a veces `OR` para variantes de escritura. No te apoyes en dominios muertos como Google+ de guías viejas.",
        "Monitorear VK/Telegram/Instagram* vía Alerts es poco fiable: mucho contenido nunca llega a la búsqueda web. Para social, usa la búsqueda integrada y servicios dedicados de menciones.",
      ],
      lists: [
        {
          intro: "Lo que Alerts no sustituye:",
          items: [
            "social listening en tiempo real",
            "reports de GA4/Metrika",
            "chequeos de índice en Webmaster / Search Console",
            "monitoreo de media enterprise completo",
          ],
        },
      ],
      links: [
        {
          label: "Operadores de búsqueda de Google",
          href: "/es/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "Límites e higiene de la lista",
      level: 2,
      paras: [
        "El servicio tiene un techo de cantidad de alerts y es sensible a queries demasiado amplias. No fijamos cifras de guías de 2019 («exactamente 1000») — mira los límites actuales de Google.",
        "Una vez al trimestre, limpia alerts muertos, aprieta wordings y apaga lo que ya no lees. Si no, el mail importante se ahoga en ruido.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Google Alerts es un radar simple sobre resultados web de Google. Fuerte para marca y tema, débil como único canal de monitoreo y como «acelerador de rankings».",
        "Fija un set estrecho de queries, confirma el email y reacciona a las señales — no esperes que el servicio mejore posiciones solo.",
      ],
    },
  ],
  closing: [
    "Crea unos alerts precisos para marca y temas clave, excluye tu sitio donde haga falta y mantén la lista corta — así Google Alerts ahorra tiempo en la caza manual de menciones.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "negativnyy-otzyv",
    "operatory-poiska",
    "kontent-plan",
    "analiz-konkurentov",
    "prodvizhenie-brenda",
  ],
};

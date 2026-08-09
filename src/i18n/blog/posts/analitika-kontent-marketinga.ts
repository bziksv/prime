import type { BlogPost } from "../../../data/blog";

/** EN overlay for analitika-kontent-marketinga — same structure as RU JSON. */
export const analitikaKontentMarketingaEn: BlogPost = {
  slug: "analitika-kontent-marketinga",
  title: "Content marketing analytics: metrics and how to read them",
  date: "2021-01-15",
  category: "Digital marketing",
  cover: "/images/blog/analitika-kontent-marketinga/cover-en.webp",
  excerpt:
    "How to evaluate content marketing: reach, retention, shares, leads, and editorial ops metrics — without obsessing over likes or confusing this with installing a counter.",
  lead: [
    "Content without numbers becomes “we post because that’s what you do.” Analytics answers a different question: which format and topic move toward the goal — subscribe, lead, sale, or retention — and which only makes noise.",
    "Below: a metric frame — consumption, engagement and sharing, lead gen, and editorial ops. Installing analytics and building a dashboard are sibling topics; here the focus is what to measure and how not to get fooled by pretty stats.",
  ],
  faq: [
    {
      q: "Which metrics should a small project start with?",
      a: "Five to seven indicators under one goal: reach/visits to target URLs, finish rate or time, CTA CTR, leads, cost per content unit. The rest later.",
    },
    {
      q: "Are likes and views good KPIs?",
      a: "Usually helper signals. KPIs are why you write: leads, sales, retention, list growth. Views without a goal are easy to inflate with viral but useless pieces.",
    },
    {
      q: "How is this different from installing analytics?",
      a: "The counter is the collection tool. This article is about the indicator set and how to judge content. Without goals and tagging, the counter explains nothing alone.",
    },
    {
      q: "Do I need a separate dashboard?",
      a: "When there are more than two sources and a weekly report — yes. At the start a table plus analytics reports is enough. See the dashboard article.",
    },
    {
      q: "How do I compare a blog post and a social post?",
      a: "Don’t mix raw views across platforms. Compare contribution to one goal (lead, subscribe) and production cost per unit of result.",
    },
    {
      q: "What is content ROI?",
      a: "Effect (revenue/leads in money) versus cost to create and distribute. Rough — but better than “it felt like it worked.”",
    },
    {
      q: "How often should I pull metrics?",
      a: "Editorial ops — weekly; funnel and ROI — monthly/quarterly. A one-off spike after publish ≠ lasting effect.",
    },
    {
      q: "Can I judge SEO articles by traffic alone?",
      a: "Traffic is the entry. Also watch behavior, conversion to goal, and lead quality. Ranking growth is planned over 2–6 months — don’t confuse publishing a piece with “page one in a week.”",
    },
  ],
  sections: [
    {
      title: "Why measure content",
      level: 2,
      paras: [
        "Without metrics the editorial team optimizes taste: “pretty,” “long,” “like the competitor.” With metrics you get priority: what to amplify, what to cut, where to put author and design budget.",
        "Lock the channel goal first: blog traffic, leads, nurture, brand support, SEO demand. One article rarely covers everything — and the KPI set should reflect that.",
      ],
      lists: [
        {
          intro: "Typical traps:",
          items: [
            "measuring everything and deciding nothing",
            "comparing unlike platforms by raw views",
            "taking viral reach for a business result",
            "ignoring production cost",
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
      title: "Consumption metrics: did it reach people",
      level: 2,
      paras: [
        "The base layer — how many people saw and opened the piece. On the site: visits and unique URL views; in email: opens/CTR; on social: reach and link clicks (with caveats for algorithms and platform limits).",
        "Watch not only absolutes but the share of target traffic: search, email, ads. A bot spike or a random share with no site clicks is a weak signal.",
      ],
      lists: [
        {
          intro: "Site minimum:",
          items: [
            "views and users by URL",
            "sources (search / direct / referral / campaigns)",
            "bounce and depth — carefully, in context of page type",
            "return visits to key pieces",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Retention, engagement, and sharing",
      level: 2,
      paras: [
        "“Reached” ≠ “read and reacted.” For long copy: finish rate, time on page, scroll (if set), clicks on TOC and internal links. For video: completion %, not starts alone.",
        "Shares and saves show willingness to recommend. Not a KPI by themselves, but a good “pass-along” signal — especially if referral traffic grows after.",
      ],
      lists: [
        {
          intro: "What to log:",
          items: [
            "finish rate / time / scroll events",
            "CTA and anchor clicks",
            "comments and meaningful replies (quality over quantity)",
            "shares/saves and referral traffic after publish",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "High reach with zero site clicks and zero leads means rethink format or offer — not “success for likes.”",
        },
      ],
    },
    {
      title: "Leads, sales, and funnel contribution",
      level: 2,
      paras: [
        "Business layer: leads, signups, demos, purchases attributed to content. You need analytics goals and an agreed attribution model (at least last click plus common sense on assisted).",
        "Separate “content brought” from “content helped.” A mid-funnel article may not give a direct lead but lower ad CAC or speed a deal — that’s a result if you can see it in CRM.",
      ],
      lists: [
        {
          intro: "Practical set:",
          items: [
            "goals: form, phone click, catalog visit",
            "URL → goal conversion",
            "lead quality (if CRM statuses exist)",
            "revenue/deals with a content touch in the period",
          ],
        },
      ],
      links: [
        {
          label: "Conversion rate optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Editorial ops metrics",
      level: 2,
      paras: [
        "Team throughput: how many pieces on time, average brief-to-publish cycle, revision share, cost of author/editor/design hour. Without that a “cheap” zero-effect post looks better than an expensive guide that closes deals.",
        "ROI is rough: (value of results − cost) / cost, or cost per content lead versus other channels. Imperfect numbers — but they cut the illusion of a “free” blog.",
      ],
      lists: [
        {
          intro: "Ops:",
          items: [
            "plan vs published",
            "production time",
            "costs (people + freelancers + distribution)",
            "cost per result unit (lead / qualified lead)",
            "share of updating old URLs vs new (often cheaper to improve than write from scratch)",
          ],
        },
      ],
      links: [
        {
          label: "Updating content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
        {
          label: "Content manager",
          href: "/en/blog/kontent-menedzher/",
        },
      ],
    },
    {
      title: "How to turn numbers into decisions",
      level: 2,
      paras: [
        "Build one table or a simple dashboard: URL / topic / format / goal / visits / engagement / conversion / cost / conclusion. Weekly: what to amplify, stop, or update.",
        "For SEO pieces set a horizon: prep and publish — weeks; building rankings and steady traffic — planned months (often 2–6 after work starts), not “article live — instant page one.”",
      ],
      lists: [
        {
          intro: "Report ritual:",
          items: [
            "one goal for the period",
            "top and bottom pieces",
            "hypotheses for the next sprint",
            "what to reuse (series, updates, email)",
          ],
        },
      ],
      links: [
        {
          label: "Business dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "metrika-ustanovka",
    "dashboard",
    "obnovlenie-kontenta",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for analitika-kontent-marketinga — same structure as RU JSON / EN. */
export const analitikaKontentMarketingaEs: BlogPost = {
  slug: "analitika-kontent-marketinga",
  title: "Analytics de content marketing: métricas y cómo leerlas",
  date: "2021-01-15",
  category: "Digital marketing",
  cover: "/images/blog/analitika-kontent-marketinga/cover.webp",
  excerpt:
    "Cómo evaluar el content marketing: reach, retención, shares, leads y métricas de ops editorial — sin obsesionarte con likes ni confundir esto con instalar un contador.",
  lead: [
    "El contenido sin números se vuelve «publicamos porque toca». La analytics responde otra pregunta: qué formato y tema mueven hacia el objetivo — suscripción, lead, venta o retención — y qué solo hace ruido.",
    "Abajo: un marco de métricas — consumo, engagement y sharing, lead gen y ops editorial. Instalar analytics y armar un dashboard son temas hermanos; aquí el foco es qué medir y cómo no dejarte engañar por stats bonitas.",
  ],
  faq: [
    {
      q: "¿Con qué métricas debería empezar un proyecto pequeño?",
      a: "Cinco a siete indicadores bajo un objetivo: reach/visitas a URLs objetivo, finish rate o tiempo, CTR del CTA, leads, coste por unidad de contenido. El resto después.",
    },
    {
      q: "¿Likes y views son buenos KPIs?",
      a: "Suelen ser señales auxiliares. Los KPIs son el porqué escribes: leads, ventas, retención, crecimiento de lista. Views sin objetivo se inflan fácil con piezas virales pero inútiles.",
    },
    {
      q: "¿En qué se diferencia de instalar analytics?",
      a: "El contador es la herramienta de recolección. Este artículo va del set de indicadores y cómo juzgar el contenido. Sin objetivos y tagging, el contador solo no explica nada.",
    },
    {
      q: "¿Hace falta un dashboard aparte?",
      a: "Cuando hay más de dos fuentes y un reporte semanal — sí. Al inicio basta una tabla más reportes de analytics. Ver el artículo de dashboard.",
    },
    {
      q: "¿Cómo comparo un post del blog y uno de social?",
      a: "No mezcles views crudas entre plataformas. Compara la contribución a un objetivo (lead, suscripción) y el coste de producción por unidad de resultado.",
    },
    {
      q: "¿Qué es el ROI de contenido?",
      a: "Efecto (revenue/leads en dinero) frente al coste de crear y distribuir. Aproximado — pero mejor que «parecía que funcionaba».",
    },
    {
      q: "¿Con qué frecuencia sacar métricas?",
      a: "Ops editorial — semanal; funnel y ROI — mensual/trimestral. Un pico puntual tras publicar ≠ efecto duradero.",
    },
    {
      q: "¿Puedo juzgar artículos SEO solo por tráfico?",
      a: "El tráfico es la entrada. Mira también comportamiento, conversión al objetivo y calidad del lead. El crecimiento de rankings se planifica a 2–6 meses — no confundas publicar una pieza con «primera página en una semana».",
    },
  ],
  sections: [
    {
      title: "Por qué medir el contenido",
      level: 2,
      paras: [
        "Sin métricas el equipo editorial optimiza por gusto: «bonito», «largo», «como el competidor». Con métricas llega la prioridad: qué amplificar, qué cortar, dónde poner presupuesto de autor y diseño.",
        "Fija primero el objetivo del canal: tráfico del blog, leads, nurture, soporte de marca, demanda SEO. Un artículo rara vez cubre todo — y el set de KPIs debería reflejarlo.",
      ],
      lists: [
        {
          intro: "Trampas típicas:",
          items: [
            "medir todo y no decidir nada",
            "comparar plataformas distintas por views crudas",
            "tomar reach viral por un resultado de negocio",
            "ignorar el coste de producción",
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
      title: "Métricas de consumo: ¿llegó a la gente?",
      level: 2,
      paras: [
        "La capa base — cuántas personas vieron y abrieron la pieza. En el sitio: visitas y views únicas de URL; en email: opens/CTR; en social: reach y clics al enlace (con matices por algoritmos y límites de plataforma).",
        "Mira no solo absolutos sino la cuota de tráfico objetivo: búsqueda, email, ads. Un pico de bots o un share al azar sin clics al sitio es una señal débil.",
      ],
      lists: [
        {
          intro: "Mínimo del sitio:",
          items: [
            "views y usuarios por URL",
            "fuentes (búsqueda / directo / referral / campañas)",
            "bounce y profundidad — con cuidado, en contexto del tipo de página",
            "visitas de retorno a piezas clave",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrika",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Retención, engagement y sharing",
      level: 2,
      paras: [
        "«Llegó» ≠ «leyó y reaccionó». Para copy largo: finish rate, tiempo en página, scroll (si está configurado), clics en TOC y enlaces internos. Para vídeo: % de completion, no solo starts.",
        "Shares y saves muestran disposición a recomendar. No son un KPI solos, pero son una buena señal de «pase» — sobre todo si después crece el tráfico referral.",
      ],
      lists: [
        {
          intro: "Qué registrar:",
          items: [
            "finish rate / tiempo / eventos de scroll",
            "clics en CTA y anchors",
            "comentarios y respuestas con sentido (calidad sobre cantidad)",
            "shares/saves y tráfico referral tras publicar",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Mucho reach con cero clics al sitio y cero leads significa replantear formato u oferta — no «éxito por likes».",
        },
      ],
    },
    {
      title: "Leads, ventas y contribución al funnel",
      level: 2,
      paras: [
        "Capa de negocio: leads, altas, demos, compras atribuidas al contenido. Necesitas objetivos de analytics y un modelo de atribución acordado (al menos last click más sentido común en assisted).",
        "Separa «el contenido trajo» de «el contenido ayudó». Un artículo mid-funnel puede no dar un lead directo pero bajar el CAC de ads o acelerar un deal — eso es un resultado si lo ves en el CRM.",
      ],
      lists: [
        {
          intro: "Set práctico:",
          items: [
            "objetivos: formulario, clic a teléfono, visita al catálogo",
            "conversión URL → objetivo",
            "calidad del lead (si hay estados en CRM)",
            "revenue/deals con un touch de contenido en el periodo",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Métricas de ops editorial",
      level: 2,
      paras: [
        "Throughput del equipo: cuántas piezas a tiempo, ciclo medio brief-a-publicar, cuota de revisiones, coste de hora de autor/editor/diseño. Sin eso, un post «barato» de cero efecto parece mejor que una guía cara que cierra deals.",
        "El ROI es aproximado: (valor de resultados − coste) / coste, o coste por lead de contenido frente a otros canales. Números imperfectos — pero cortan la ilusión de un blog «gratis».",
      ],
      lists: [
        {
          intro: "Ops:",
          items: [
            "plan vs publicado",
            "tiempo de producción",
            "costes (gente + freelancers + distribución)",
            "coste por unidad de resultado (lead / lead cualificado)",
            "cuota de actualizar URLs viejas vs nuevas (a menudo sale más barato mejorar que escribir de cero)",
          ],
        },
      ],
      links: [
        {
          label: "Actualizar contenido",
          href: "/es/blog/obnovlenie-kontenta/",
        },
        {
          label: "Content manager",
          href: "/es/blog/kontent-menedzher/",
        },
      ],
    },
    {
      title: "Cómo convertir números en decisiones",
      level: 2,
      paras: [
        "Arma una tabla o un dashboard simple: URL / tema / formato / objetivo / visitas / engagement / conversión / coste / conclusión. Semanal: qué amplificar, parar o actualizar.",
        "Para piezas SEO fija un horizonte: prep y publicar — semanas; construir rankings y tráfico estable — meses planificados (a menudo 2–6 tras el arranque del trabajo), no «artículo en vivo — primera página al instante».",
      ],
      lists: [
        {
          intro: "Ritual de reporte:",
          items: [
            "un objetivo para el periodo",
            "mejores y peores piezas",
            "hipótesis para el siguiente sprint",
            "qué reutilizar (series, updates, email)",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard de negocio",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Reporte al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "metrika-ustanovka",
    "dashboard",
    "obnovlenie-kontenta",
    "optimizatsiya-konversii",
  ],
};

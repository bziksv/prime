import type { BlogPost } from "../../../data/blog";

/** EN overlay for performance-marketing — same structure as RU JSON. */
export const performanceMarketingEn: BlogPost = {
  slug: "performance-marketing",
  title: "Performance marketing: what it is, how it differs from branding, and how it works",
  date: "2019-08-05",
  category: "Digital marketing",
  cover: "/images/blog/performance-marketing/cover-en.webp",
  excerpt:
    "Performance marketing is about measurable funnel results: leads, sales, CPA, and ROAS. How it differs from branding, which channels fit, and why data and an agency matter.",
  lead: [
    "Performance marketing judges ads and channels by a target action: lead, purchase, install, or call. The point is not pretty reach on its own, but the chain from budget to action to economics.",
    "Below: definition, contrast with branding, and the role of data and agencies. Market figures from 2018–2019 in older reviews are outdated; the logic of the approach is not.",
  ],
  faq: [
    {
      q: "Is performance only paid search?",
      a: "No. Paid search was the core, but the loop also includes other channels with a measurable action: parts of social, email, SEO when leads are tracked, and apps — as long as end-to-end measurement exists.",
    },
    {
      q: "How does it differ from branding?",
      a: "Branding sits closer to awareness and creative. Performance sits closer to a countable user result. In practice they often share one budget split.",
    },
    {
      q: "Is clicking a button in the ad account enough?",
      a: "No. Auto-bidding helps, but without a goal, analytics, landing page, and offer, the budget leaks. Technology doesn’t replace problem framing.",
    },
    {
      q: "Which KPIs are typical?",
      a: "CPA/CPL, CPO, conversion rate, ROAS/ROMI, cost per lead or sale. Lock the set in the brief before launch.",
    },
    {
      q: "Do I need an agency?",
      a: "Not always. You need expertise, a data stack, and time. In-house works; an agency helps at the channel join, audit, and scale.",
    },
    {
      q: "How does this connect to end-to-end analytics?",
      a: "Directly. Without joining ads, site, and CRM, performance easily slides into optimizing clicks — not profit.",
    },
  ],
  sections: [
    {
      title: "What performance marketing is",
      level: 2,
      paras: [
        "Digital performance means managing paid and adjacent traffic so each touch leads to a measurable action and countable economics. The channel can be anything; the criterion is a transparent link to the business goal.",
        "Historically, performance grew from pay-per-click search, then expanded into social, display with post-click metrics, email, and apps. The essence stays the same: the user’s result, not impressions alone.",
      ],
      lists: [
        {
          intro: "Usually in the loop:",
          items: [
            "goal and KPIs before launch",
            "channels with tracking",
            "landing page and offer",
            "optimization by action or revenue",
            "a report the business understands",
          ],
        },
      ],
    },
    {
      title: "Performance and branding",
      level: 2,
      paras: [
        "Branding solves awareness and creative; performance connects tools to a tangible result. Cheap clicks without quality and a clear goal devalue the work: a low CPO on paper with zero sales isn’t a win.",
        "A useful loop is possible when the agency understands the client’s business and the advertiser states the goal clearly. Otherwise tenders on “who has the cheaper click” hurt both the agency and the outcome.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Marketing ROI",
          href: "/en/blog/roi-marketinga/",
        },
      ],
    },
    {
      title: "Data, technology, reporting",
      level: 2,
      paras: [
        "From the first launch to a multichannel report you need data: ad accounts, site, calls, CRM. Heterogeneous sources and external optimization platforms help only if they converge into one picture.",
        "The myth that “everything automates with one button” is dangerous: automation speeds routine, but it doesn’t replace strategy, creative for the offer, or lead-quality control.",
      ],
      lists: [
        {
          intro: "What to connect:",
          items: [
            "spend and clicks from ad accounts",
            "on-site behavior",
            "leads, calls, and sales",
            "assisted paths across channels",
          ],
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Agency role and audit",
      level: 2,
      paras: [
        "An agency brings expertise across niches, inventory, and reporting for different client requirements. The value is connecting mismatched pieces: process, data, channels, and SLA.",
        "As brands buy more inventory directly from platforms, demand for independent audit and recommendations grows. A one-off “check for show” is weaker than a regular strategy and tactics review.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Picking a vendor",
          text: "The word “performance” in the name isn’t a guarantee. Look at the contract, KPIs, data transparency, and readiness to talk about business money — not only CTR.",
        },
      ],
      links: [
        {
          label: "Marketing strategy",
          href: "/en/blog/marketingovaya-strategiya/",
        },
      ],
    },
  ],
  closing: [
    "Performance marketing is about a measurable action and economics across the funnel. Lock the goal and KPIs, gather data, don’t confuse a cheap click with profit — and don’t expect an ad-account button to replace strategy.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "roi-marketinga",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "looker-studio",
  ],
};

/** ES overlay for performance-marketing — same structure as RU JSON / EN. */
export const performanceMarketingEs: BlogPost = {
  slug: "performance-marketing",
  title: "Performance marketing: qué es, en qué se diferencia del branding y cómo funciona",
  date: "2019-08-05",
  category: "Digital marketing",
  cover: "/images/blog/performance-marketing/cover-es.webp",
  excerpt:
    "El performance marketing va de resultados medibles del embudo: leads, ventas, CPA y ROAS. En qué se diferencia del branding, qué canales encajan y por qué importan los datos y una agencia.",
  lead: [
    "El performance marketing juzga ads y canales por una acción objetivo: lead, compra, install o llamada. El punto no es un reach bonito por sí solo, sino la cadena de presupuesto a acción a economía.",
    "Abajo: definición, contraste con branding y el rol de datos y agencias. Las cifras de mercado de 2018–2019 en reseñas viejas están desfasadas; la lógica del enfoque no.",
  ],
  faq: [
    {
      q: "¿Performance es solo paid search?",
      a: "No. Paid search fue el núcleo, pero el loop también incluye otros canales con una acción medible: partes de social, email, SEO cuando se trackean leads, y apps — mientras exista medición de extremo a extremo.",
    },
    {
      q: "¿En qué se diferencia del branding?",
      a: "El branding está más cerca de awareness y creativo. El performance está más cerca de un resultado de usuario contable. En la práctica a menudo comparten un split de presupuesto.",
    },
    {
      q: "¿Basta pulsar un botón en la cuenta de ads?",
      a: "No. El auto-bidding ayuda, pero sin meta, analytics, landing y oferta el presupuesto se filtra. La tecnología no sustituye enmarcar el problema.",
    },
    {
      q: "¿Qué KPIs son típicos?",
      a: "CPA/CPL, CPO, conversion rate, ROAS/ROMI, coste por lead o venta. Fija el set en el brief antes del lanzamiento.",
    },
    {
      q: "¿Hace falta una agencia?",
      a: "No siempre. Hacen falta expertise, un stack de datos y tiempo. In-house funciona; una agencia ayuda en el join de canales, la auditoría y la escala.",
    },
    {
      q: "¿Cómo se conecta esto con analytics de extremo a extremo?",
      a: "Directamente. Sin unir ads, sitio y CRM, el performance se desliza fácil a optimizar clics — no beneficio.",
    },
  ],
  sections: [
    {
      title: "Qué es el performance marketing",
      level: 2,
      paras: [
        "Performance digital significa gestionar tráfico de pago y adyacente para que cada touch lleve a una acción medible y a una economía contable. El canal puede ser cualquiera; el criterio es un vínculo transparente con la meta de negocio.",
        "Históricamente el performance creció del pay-per-click en búsqueda, luego se expandió a social, display con métricas post-click, email y apps. La esencia sigue igual: el resultado del usuario, no solo impresiones.",
      ],
      lists: [
        {
          intro: "Suele estar en el loop:",
          items: [
            "meta y KPIs antes del lanzamiento",
            "canales con tracking",
            "landing page y oferta",
            "optimización por acción o revenue",
            "un informe que el negocio entiende",
          ],
        },
      ],
    },
    {
      title: "Performance y branding",
      level: 2,
      paras: [
        "El branding resuelve awareness y creativo; el performance conecta tools a un resultado tangible. Clics baratos sin calidad y una meta clara devalúan el trabajo: un CPO bajo en papel con cero ventas no es una victoria.",
        "Un loop útil es posible cuando la agencia entiende el negocio del cliente y el anunciante enuncia la meta con claridad. Si no, las licitaciones de «quién tiene el clic más barato» hacen daño a la agencia y al resultado.",
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "ROI del marketing",
          href: "/es/blog/roi-marketinga/",
        },
      ],
    },
    {
      title: "Datos, tecnología, reporting",
      level: 2,
      paras: [
        "Desde el primer lanzamiento hasta un informe multicanal hacen falta datos: cuentas de ads, sitio, llamadas, CRM. Fuentes heterogéneas y plataformas externas de optimización ayudan solo si convergen en un cuadro.",
        "El mito de que «todo se automatiza con un botón» es peligroso: la automatización acelera la rutina, pero no sustituye estrategia, creativo para la oferta ni control de calidad de leads.",
      ],
      lists: [
        {
          intro: "Qué conectar:",
          items: [
            "gasto y clics de las cuentas de ads",
            "comportamiento en el sitio",
            "leads, llamadas y ventas",
            "caminos asistidos entre canales",
          ],
        },
      ],
      links: [
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
        {
          label: "Reporting al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Rol de la agencia y auditoría",
      level: 2,
      paras: [
        "Una agencia aporta expertise entre nichos, inventario y reporting para requisitos distintos del cliente. El valor es conectar piezas que no encajan: proceso, datos, canales y SLA.",
        "A medida que las marcas compran más inventario directo a las plataformas, crece la demanda de auditoría independiente y recomendaciones. Un «chequeo de escaparate» puntual es más débil que una revisión regular de estrategia y táctica.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Elegir un vendor",
          text: "La palabra «performance» en el nombre no es garantía. Mira el contrato, los KPIs, la transparencia de datos y la disposición a hablar del dinero del negocio — no solo del CTR.",
        },
      ],
      links: [
        {
          label: "Estrategia de marketing",
          href: "/es/blog/marketingovaya-strategiya/",
        },
      ],
    },
  ],
  closing: [
    "El performance marketing va de una acción medible y de la economía a lo largo del embudo. Fija meta y KPIs, reúne datos, no confundas un clic barato con beneficio — y no esperes que un botón de la cuenta de ads sustituya la estrategia.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "roi-marketinga",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "looker-studio",
  ],
};

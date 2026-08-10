import type { BlogPost } from "../../../data/blog";

/** EN overlay for otsenka-stoimosti-sayta — same structure as RU JSON. */
export const otsenkaStoimostiSaytaEn: BlogPost = {
  slug: "otsenka-stoimosti-sayta",
  title: "Website valuation: what to check and why online calculators lie",
  date: "2021-02-25",
  category: "Digital marketing",
  cover: "/images/blog/otsenka-stoimosti-sayta/cover-en.webp",
  excerpt:
    "Why people value sites, why pr-cy-style numbers diverge from a real deal, and which factors beat a one-click “magic” estimate.",
  lead: [
    "Online valuators promise a “site price” by domain in seconds. In practice it’s a rough order of magnitude with a huge spread: the same project can get wildly different figures across services — and still miss market price.",
    "Below: why people look at those figures at all, what really moves price in a sale, and how not to confuse valuation with a growth audit. We skip outdated metrics like TIC/PageRank.",
  ],
  faq: [
    {
      q: "Can you trust pr-cy and similar tools?",
      a: "As a rough order of magnitude — sometimes. As a deal price — no. Algorithms are closed, inputs are incomplete, and strategic value for the buyer gets ignored.",
    },
    {
      q: "What affects site price more?",
      a: "Clean profit and its stability, traffic quality, risks (filters, single-channel dependence), assets (brand, email list, content, code), and niche demand.",
    },
    {
      q: "Then why use an online estimate?",
      a: "To see how a service “sees” the project over time and compare to market drafts. For a sale, prepare P&L, traffic, and docs — not a calculator screenshot.",
    },
    {
      q: "Is a site marketplace more accurate than a calculator?",
      a: "Often yes: you see real deals and income multiples. But liquidity and “market average” aren’t the price of your unique asset.",
    },
    {
      q: "Why do services diverge so much?",
      a: "Different weights for age, links, traffic, and “forecast income.” Without your books and risks, the model guesses.",
    },
    {
      q: "If the online estimate went up, is the site better?",
      a: "Not necessarily. The service method or external data noise may have changed. Watch your metrics: revenue, margin, traffic sources, conversion.",
    },
    {
      q: "Should a corporate company site be valued?",
      a: "As a sale asset — rarely. Better count contribution to leads and brand. Calculators are tuned for monetized projects and media, not a factory brochure.",
    },
  ],
  sections: [
    {
      title: "Why sites get valued",
      level: 2,
      paras: [
        "Some projects are built for resale; some run as media with ads and affiliates. Valuation matters for a sale, investor talk, asset split, or simply to see: is the project growing as a business, or only looking strong in search?",
        "An online figure is handy as a quick check, but a deal almost always rests on income, risks, and negotiation — not one widget.",
      ],
    },
    {
      title: "Why calculators disagree so wildly",
      level: 2,
      paras: [
        "A typical online valuator takes open signals: domain age, traffic estimates, backlink profile, sometimes a “forecast” from paid search. Closed models and different data sources create multi-fold spreads.",
        "A classic from older reviews: the same large portal got estimates from a few million rubles to tens of millions — while a strategic deal could be another order entirely. The takeaway isn’t “everyone lies the same way”; it’s “don’t confuse the model with the market.”",
      ],
      lists: [
        {
          intro: "Typical weak spots of one-click valuation:",
          items: [
            "no access to real profit and costs",
            "panel traffic ≠ your analytics",
            "legal and reputation risks invisible",
            "brand value for a specific buyer ignored",
            "outdated signals in methods (old SEO metrics)",
          ],
        },
      ],
    },
    {
      title: "What to look at instead of a magic number",
      level: 2,
      paras: [
        "For a sale or internal valuation, assemble a pack a buyer or partner will understand.",
      ],
      lists: [
        {
          intro: "Base for a price conversation:",
          items: [
            "revenue and profit for 6–12 months, seasonality",
            "channel share (search, direct, ads, social) and single-source dependence",
            "audience quality and conversion to money",
            "tech state, content, support team",
            "risks: filters, claims, licenses, personal data",
            "compare to deal multiples in the niche (exchanges/brokers), not only a widget",
          ],
        },
      ],
    },
    {
      title: "How to use online services without illusions",
      level: 2,
      paras: [
        "You can periodically pull estimates from 2–3 services and watch the trend, not the absolute. A sharp jump with no business change is a reason to check the method, not celebrate.",
        "Buy/sell marketplaces are more useful as a market guide: you see listings, seller income, and real ranges. Names and terms change — verify currency and contract before a deal.",
      ],
      links: [
        {
          label: "What a website is",
          href: "/en/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
  ],
  closing: [
    "An online site valuation is a draft order of magnitude, not a deal price. Count income, traffic stability, and risks; leave the calculator as a supporting trend indicator.",
  ],
};

/** ES overlay for otsenka-stoimosti-sayta — same structure as RU JSON / EN. */
export const otsenkaStoimostiSaytaEs: BlogPost = {
  slug: "otsenka-stoimosti-sayta",
  title: "Valoración de un sitio: qué revisar y por qué mienten las calculadoras online",
  date: "2021-02-25",
  category: "Digital marketing",
  cover: "/images/blog/otsenka-stoimosti-sayta/cover-es.webp",
  excerpt:
    "Por qué se valoran sitios, por qué las cifras estilo pr-cy divergen de un trato real, y qué factores ganan a un «precio mágico» en un clic.",
  lead: [
    "Los valuadores online prometen un «precio del sitio» por dominio en segundos. En la práctica es un orden de magnitud aproximado con una horquilla enorme: el mismo proyecto puede sacar cifras muy distintas entre servicios — y aun así fallar el precio de mercado.",
    "Abajo: por qué la gente mira esas cifras, qué mueve de verdad el precio en una venta, y cómo no confundir valoración con una auditoría de crecimiento. Nos saltamos métricas obsoletas como TIC/PageRank.",
  ],
  faq: [
    {
      q: "¿Se puede confiar en pr-cy y tools similares?",
      a: "Como orden de magnitud aproximado — a veces. Como precio de trato — no. Los algoritmos están cerrados, los inputs incompletos, y el valor estratégico para el comprador se ignora.",
    },
    {
      q: "¿Qué afecta más al precio del sitio?",
      a: "Beneficio limpio y su estabilidad, calidad del tráfico, riesgos (filtros, dependencia de un solo canal), activos (marca, lista de email, contenido, código) y demanda del nicho.",
    },
    {
      q: "¿Para qué sirve entonces una estimación online?",
      a: "Para ver cómo un servicio «ve» el proyecto en el tiempo y comparar con borradores de mercado. Para una venta, prepara P&L, tráfico y docs — no una captura de la calculadora.",
    },
    {
      q: "¿Un marketplace de sitios es más preciso que una calculadora?",
      a: "A menudo sí: ves tratos reales y múltiplos de ingresos. Pero la liquidez y la «media del mercado» no son el precio de tu activo único.",
    },
    {
      q: "¿Por qué divergen tanto los servicios?",
      a: "Pesos distintos para edad, enlaces, tráfico y «ingresos previstos». Sin tus libros y riesgos, el modelo adivina.",
    },
    {
      q: "Si la estimación online subió, ¿el sitio es mejor?",
      a: "No necesariamente. Puede haber cambiado el método del servicio o el ruido de datos externos. Mira tus métricas: ingresos, margen, fuentes de tráfico, conversión.",
    },
    {
      q: "¿Hay que valorar el sitio corporativo de una empresa?",
      a: "Como activo de venta — rara vez. Mejor cuenta la contribución a leads y marca. Las calculadoras están afinadas para proyectos monetizados y media, no para el brochure de una fábrica.",
    },
  ],
  sections: [
    {
      title: "Por qué se valoran sitios",
      level: 2,
      paras: [
        "Algunos proyectos se construyen para reventa; otros corren como media con ads y afiliados. La valoración importa para una venta, hablar con inversores, partir activos, o simplemente ver: ¿el proyecto crece como negocio, o solo se ve fuerte en búsqueda?",
        "Una cifra online es útil como check rápido, pero un trato casi siempre se apoya en ingresos, riesgos y negociación — no en un widget.",
      ],
    },
    {
      title: "Por qué las calculadoras discrepan tanto",
      level: 2,
      paras: [
        "Un valuador online típico toma señales abiertas: edad del dominio, estimaciones de tráfico, perfil de backlinks, a veces un «forecast» desde paid search. Modelos cerrados y fuentes de datos distintas crean horquillas de varias veces.",
        "Un clásico de reviews viejos: el mismo portal grande sacaba estimaciones de unos pocos millones de rublos a decenas de millones — mientras un trato estratégico podía ser otro orden del todo. El takeaway no es «todos mienten igual»; es «no confundas el modelo con el mercado».",
      ],
      lists: [
        {
          intro: "Puntos débiles típicos de la valoración en un clic:",
          items: [
            "sin acceso al beneficio y costes reales",
            "tráfico del panel ≠ tu analytics",
            "riesgos legales y de reputación invisibles",
            "valor de marca para un comprador concreto ignorado",
            "señales obsoletas en los métodos (métricas SEO viejas)",
          ],
        },
      ],
    },
    {
      title: "Qué mirar en lugar de un número mágico",
      level: 2,
      paras: [
        "Para una venta o una valoración interna, arma un pack que un comprador o socio entienda.",
      ],
      lists: [
        {
          intro: "Base para una conversación de precio:",
          items: [
            "ingresos y beneficio de 6–12 meses, estacionalidad",
            "cuota de canales (búsqueda, directo, ads, social) y dependencia de una sola fuente",
            "calidad de audiencia y conversión a dinero",
            "estado técnico, contenido, equipo de soporte",
            "riesgos: filtros, reclamaciones, licencias, datos personales",
            "compara con múltiplos de tratos del nicho (exchanges/brokers), no solo un widget",
          ],
        },
      ],
    },
    {
      title: "Cómo usar servicios online sin ilusiones",
      level: 2,
      paras: [
        "Puedes sacar periódicamente estimaciones de 2–3 servicios y mirar la tendencia, no el absoluto. Un salto brusco sin cambio de negocio es motivo para revisar el método, no para celebrar.",
        "Los marketplaces de compra/venta son más útiles como guía de mercado: ves listings, ingresos del vendedor y rangos reales. Nombres y términos cambian — verifica moneda y contrato antes de un trato.",
      ],
      links: [
        {
          label: "Qué es un sitio web",
          href: "/es/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
  ],
  closing: [
    "Una valoración online del sitio es un borrador de orden de magnitud, no el precio del trato. Cuenta ingresos, estabilidad del tráfico y riesgos; deja la calculadora como indicador de tendencia de apoyo.",
  ],
};

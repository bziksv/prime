import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-tiktok — same structure as RU JSON. */
export const reklamaTiktokEn: BlogPost = {
  slug: "reklama-tiktok",
  title: "TikTok ads: how to launch a campaign in Ads Manager",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/reklama-tiktok/cover-en.webp",
  excerpt:
    "When TikTok Ads makes sense, and how a launch works in Ads Manager: goal, budget, targeting, and creative — without outdated “from $500” minimums and 2018 app catalogs.",
  lead: [
    "TikTok Ads means paid impressions in the For You feed and related formats through the official ads account. Creator integrations and challenges live separately: different budget and agreements.",
    "Below: when the channel fits, how campaigns work in Ads Manager, and creative requirements. Menus and budget minimums change — check TikTok for Business Help. Organic For You is covered in a related article.",
  ],
  faq: [
    {
      q: "How do Ads differ from For You recommendations?",
      a: "For You is organic, driven by viewer behavior. Ads is a paid auction with a goal, budget, and targeting.",
    },
    {
      q: "What’s the minimum budget?",
      a: "It depends on region, currency, and campaign type. We don’t copy “from $500” figures from old guides — check current limits in Ads Manager.",
    },
    {
      q: "Does TikTok work for an “older” niche?",
      a: "The audience is broader than teens of 2018–2020. A test decides: offer + vertical creative. If your audience doesn’t watch short video, the channel is weak.",
    },
    {
      q: "Do I need the pixel and events?",
      a: "For websites and apps — yes, by task. Without events, conversion optimization is weak.",
    },
    {
      q: "Should I use a creator instead of Ads Manager?",
      a: "An integration brings trust and native feel. Ads Manager brings control and scale. Often you combine both.",
    },
  ],
  sections: [
    {
      title: "When to test TikTok Ads",
      level: 2,
      paras: [
        "You have a vertical creative that hooks in the first seconds and an offer clear without a long copy block.",
        "You’re ready to count results: installs, leads, sales — not only views.",
        "You understand the auction and moderation aren’t a “cheap banner forever”: creatives burn out fast.",
      ],
      links: [
        {
          label: "TikTok recommendations (organic)",
          href: "/en/blog/rekomendatsii-tiktok/",
        },
      ],
    },
    {
      title: "Ads Manager: goal and structure",
      level: 2,
      paras: [
        "Sign up for TikTok Ads / Business Center, create an ad account, add a payment method.",
        "Campaign → ad group → ad. Pick a goal for the job: traffic, conversions, installs, reach, leads — the set depends on the account.",
        "Name entities with a template: offer · geo · goal · date — like any paid channel.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          text: "Don’t train people on “click Create an Ad in the center of a 2020 screen.” Train the chain: goal → audience → budget → vertical clip → preview → moderation.",
        },
      ],
    },
    {
      title: "Targeting, budget, schedule",
      level: 2,
      paras: [
        "Geo, age, language, interests, custom lists (under upload rules) — without scraping other people’s IDs via gray services.",
        "Daily or lifetime budget, dates and hours. Standard or accelerated delivery — choose for the test.",
        "Placements: TikTok alone is often enough; third-party apps from old guides may have vanished or renamed — don’t copy a 2018 list.",
      ],
    },
    {
      title: "Creative to spec",
      level: 2,
      paras: [
        "Vertical, hook in the first second, captions, sound as part of the format — but meaning should still read without it.",
        "Check current Video Ads Specifications: length, file size, and aspect ratio have changed.",
        "Ads Manager preview is mandatory: a cropped logo and tiny text kill CTR.",
      ],
      lists: [
        {
          intro: "Before moderation:",
          items: [
            "offer without forbidden claims",
            "landing opens on mobile",
            "UTM or promo code for measurement",
            "a spare creative for burnout",
          ],
        },
      ],
    },
    {
      title: "Creators and native alongside Ads",
      level: 2,
      paras: [
        "A commissioned clip, a series mention, a challenge — separate agreements and a brief. Price depends on reach and engagement rate, not a “2019 rate card.”",
        "Native Ads Manager formats (including creator-authorized code/Spark when available) bring ads closer to organic — confirm current TikTok products.",
        "Don’t mix “creator reach” and “Ads CPA” in one report without a shared attribution model.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "TikTok Ads is a paid auction with vertical creative — not a replacement for organic For You.",
        "Take budget minimums and menus from Ads Manager, not from 2020 articles.",
        "Count the target action; views without a lead aren’t success yet.",
      ],
    },
  ],
  closing: [
    "Build one vertical clip with a clear offer, set one goal and a test budget in TikTok Ads — and decide in parallel whether you also need a creator native placement.",
  ],
  related: [
    "rekomendatsii-tiktok",
    "reklama-instagram",
    "nastroika-reklamy-instagram",
    "facebook-ads",
    "vovlechennost-socseti",
    "kontent-plan",
  ],
};

/** ES overlay for reklama-tiktok — same structure as RU JSON / EN. */
export const reklamaTiktokEs: BlogPost = {
  slug: "reklama-tiktok",
  title: "Ads de TikTok: cómo lanzar una campaña en Ads Manager",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/reklama-tiktok/cover-es.webp",
  excerpt:
    "Cuándo tiene sentido TikTok Ads y cómo funciona un lanzamiento en Ads Manager: objetivo, presupuesto, targeting y creativo — sin mínimos obsoletos «desde $500» ni catálogos de apps de 2018.",
  lead: [
    "TikTok Ads significa impresiones de pago en el feed For You y formatos relacionados a través de la cuenta oficial de ads. Las integraciones con creators y challenges viven aparte: presupuesto y acuerdos distintos.",
    "Abajo: cuándo encaja el canal, cómo funcionan las campañas en Ads Manager y requisitos de creativo. Los menús y mínimos de presupuesto cambian — consulta TikTok for Business Help. El For You orgánico se cubre en un artículo relacionado.",
  ],
  faq: [
    {
      q: "¿En qué se diferencian los Ads de las recomendaciones For You?",
      a: "For You es orgánico, impulsado por el comportamiento del viewer. Ads es una subasta de pago con objetivo, presupuesto y targeting.",
    },
    {
      q: "¿Cuál es el presupuesto mínimo?",
      a: "Depende de la región, la moneda y el tipo de campaña. No copiamos cifras «desde $500» de guías viejas — revisa los límites actuales en Ads Manager.",
    },
    {
      q: "¿TikTok funciona para un nicho «más adulto»?",
      a: "La audiencia es más amplia que los teens de 2018–2020. Un test decide: oferta + creativo vertical. Si tu audiencia no ve vídeo corto, el canal es débil.",
    },
    {
      q: "¿Necesito el pixel y events?",
      a: "Para sitios y apps — sí, según la tarea. Sin events, la optimización a conversiones es floja.",
    },
    {
      q: "¿Debería usar un creator en lugar de Ads Manager?",
      a: "Una integración trae confianza y feeling nativo. Ads Manager trae control y escala. A menudo se combinan ambos.",
    },
  ],
  sections: [
    {
      title: "Cuándo testear TikTok Ads",
      level: 2,
      paras: [
        "Tienes un creativo vertical que engancha en los primeros segundos y una oferta clara sin un bloque largo de copy.",
        "Estás listo para contar resultados: installs, leads, ventas — no solo views.",
        "Entiendes que la subasta y la moderación no son un «banner barato para siempre»: los creativos se queman rápido.",
      ],
      links: [
        {
          label: "Recomendaciones de TikTok (orgánico)",
          href: "/es/blog/rekomendatsii-tiktok/",
        },
      ],
    },
    {
      title: "Ads Manager: objetivo y estructura",
      level: 2,
      paras: [
        "Regístrate en TikTok Ads / Business Center, crea una cuenta de ads, añade un método de pago.",
        "Campaign → ad group → ad. Elige un objetivo para el trabajo: traffic, conversions, installs, reach, leads — el set depende de la cuenta.",
        "Nombra las entidades con una plantilla: oferta · geo · objetivo · fecha — como en cualquier canal de pago.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          text: "No entrenes a la gente en «haz clic en Create an Ad en el centro de una pantalla de 2020». Entrena la cadena: objetivo → audiencia → presupuesto → clip vertical → preview → moderación.",
        },
      ],
    },
    {
      title: "Targeting, presupuesto, schedule",
      level: 2,
      paras: [
        "Geo, edad, idioma, intereses, listas custom (bajo reglas de upload) — sin scraping de IDs ajenos vía servicios grises.",
        "Presupuesto diario o lifetime, fechas y horas. Entrega standard o accelerated — elige según el test.",
        "Placements: a menudo basta TikTok solo; apps de terceros de guías viejas pueden haber desaparecido o renombrado — no copies una lista de 2018.",
      ],
    },
    {
      title: "Creativo a especificación",
      level: 2,
      paras: [
        "Vertical, hook en el primer segundo, captions, sonido como parte del formato — pero el sentido debería leerse sin él.",
        "Revisa las Video Ads Specifications actuales: duración, tamaño de archivo y aspect ratio han cambiado.",
        "El preview de Ads Manager es obligatorio: un logo cortado y texto diminuto matan el CTR.",
      ],
      lists: [
        {
          intro: "Antes de la moderación:",
          items: [
            "oferta sin claims prohibidos",
            "el landing abre en móvil",
            "UTM o código promo para medir",
            "un creativo de repuesto para el burnout",
          ],
        },
      ],
    },
    {
      title: "Creators y nativo junto a Ads",
      level: 2,
      paras: [
        "Un clip por encargo, una mención en serie, un challenge — acuerdos y brief aparte. El precio depende de reach y engagement rate, no de una «rate card de 2019».",
        "Formatos nativos de Ads Manager (incluido código/Spark autorizado por creator cuando esté disponible) acercan los ads a lo orgánico — confirma los productos actuales de TikTok.",
        "No mezcles «reach de creator» y «CPA de Ads» en un solo informe sin un modelo compartido de atribución.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "TikTok Ads es una subasta de pago con creativo vertical — no un sustituto del For You orgánico.",
        "Toma mínimos de presupuesto y menús de Ads Manager, no de artículos de 2020.",
        "Cuenta la acción objetivo; views sin lead aún no son éxito.",
      ],
    },
  ],
  closing: [
    "Arma un clip vertical con una oferta clara, fija un objetivo y un presupuesto de test en TikTok Ads — y decide en paralelo si también necesitas un placement nativo con creator.",
  ],
  related: [
    "rekomendatsii-tiktok",
    "reklama-instagram",
    "nastroika-reklamy-instagram",
    "facebook-ads",
    "vovlechennost-socseti",
    "kontent-plan",
  ],
};

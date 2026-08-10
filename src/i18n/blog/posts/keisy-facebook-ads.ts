import type { BlogPost } from "../../../data/blog";

/** EN overlay for keisy-facebook-ads — same structure as RU JSON. */
export const keisyFacebookAdsEn: BlogPost = {
  slug: "keisy-facebook-ads",
  title: "Facebook Ads case studies: mistakes and lessons that travel",
  date: "2020-11-03",
  category: "SMM",
  cover: "/images/blog/keisy-facebook-ads/cover-en.webp",
  excerpt:
    "Typical Meta/Facebook ads mistakes and practical lessons from other people’s campaigns: goal, segment, tests, landing, and remarketing — without copying someone else’s ROI as a guarantee.",
  lead: [
    "Winning Facebook Ads / Meta Ads campaigns rarely hang on one genius creative. More often you win with a clear goal, a narrow segment, ad→landing fit, tests, and bringing warm audiences back.",
    "Below: common mistakes and lessons from public cases (Hubbard, Fernandez, MyBike Cycles, Green Arrow, Webris and similar). Revenue and CPA figures from other reports illustrate someone else’s period, not your plan. How the ads manager works is a separate article. The Meta notice is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you repeat someone else’s 8x ROI?",
      a: "No guarantee. Take the mechanics (offer, fit, test), not someone else’s dollar amount.",
    },
    {
      q: "Where should a beginner start?",
      a: "Campaign goal, one audience, 2–3 creatives, a landing that matches the ad, pixel/events, and a week-long test with a budget cap.",
    },
    {
      q: "Is remarketing required?",
      a: "For ecommerce and long decision cycles — often yes. Traffic and events first, then site/video audiences.",
    },
    {
      q: "Is one ad enough?",
      a: "No. Without iterations you and the account won’t learn what works. Cut the weak, scale the strong.",
    },
    {
      q: "How is this different from the Facebook Ads guide?",
      a: "That one covers how the channel works. This one breaks down case mistakes and lessons.",
    },
  ],
  sections: [
    {
      title: "Common mistakes before the “pretty cases”",
      level: 2,
      paras: [
        "Wrong goal: you optimize for likes when you need leads — learning the wrong signal. A broad “everyone” audience dilutes learning. One or two ads with no rotation is flying blind.",
        "Without tests of creative, headline, offer, and placements you lock in luck. Ignoring an already warm base and lacking a landing that matches the ad kills conversion even with a cheap click.",
      ],
      lists: [
        {
          intro: "Pre-launch checklist:",
          items: [
            "goal = business metric (lead, purchase, booking)",
            "segment narrower than “all internet interests”",
            "2+ creatives and hypotheses",
            "landing answers the ad’s promise",
            "events/pixel checked",
            "remarketing plan for people who bounced",
          ],
        },
      ],
      links: [
        {
          label: "Facebook Ads: how the channel works",
          href: "/en/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Lesson: a question in the creative + landing in the same key",
      level: 2,
      paras: [
        "In cases like Andrew Hubbard a strong move is a question the audience already asks themselves, plus a visual that guides the eye to the offer. On the landing the answer should start with the same wording.",
        "Ad ↔ first-screen fit cuts post-click disappointment. Don’t copy someone else’s revenue multiplier into your KPI — copy the consistency principle.",
      ],
      notes: [
        {
          title: "Important",
          text: "Historic “$4k → $36k” sums are someone else’s auction and niche. You have different prices, competition, and traffic quality.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Lesson: lead magnet and a human tone",
      level: 2,
      paras: [
        "Short videos and a personal tone in the spirit of Mary Fernandez’s case often bring subscribers cheaper than a dry banner. A lead magnet must solve a clear pain, not be an empty PDF “for the form.”",
        "A low CPA per subscriber isn’t profit: count how many from the list reach payment.",
      ],
    },
    {
      title: "Lesson: remarketing and an offer with a bonus",
      level: 2,
      paras: [
        "MyBike Cycles and similar stories show the power of a second touch: people who visited the site but didn’t buy. Emoji and a friendly tone are secondary next to a clear offer (delivery, discount, deadline).",
        "Show the product so people want to own it. A bonus works if it’s relevant to the purchase, not covering a weak product.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Lesson: small budget and a clear deadline",
      level: 2,
      paras: [
        "Cases with budgets in the hundreds of dollars hang on a short offer: benefit, deadline, next step (book/pay). An image about the audience — not generic filler.",
        "A small budget needs a hard CPA stop and fast iterations. Don’t stretch a test for weeks with no conclusions.",
      ],
    },
    {
      title: "Lesson: a funnel through content, not “buy” first",
      level: 2,
      paras: [
        "A webinar/video series (as in Webris stories) builds trust: value first, offer later. Segment people who saw the content and cut the uninterested.",
        "A multi-step funnel doesn’t cancel analytics: watch cost per warmed lead, not only video reach.",
      ],
      links: [
        {
          label: "Facebook group and page",
          href: "/en/blog/gruppa-facebook/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Goal → segment → test → landing → remarketing. Other people’s cases are about mechanics, not a promise of the same profit.",
        "A non-standard creative only helps if the offer and landing are honest and measurable.",
      ],
    },
  ],
  closing: [
    "Write down one goal and two creative hypotheses, check the landing matches the ad, and plan remarketing — so lessons from other campaigns become your checklist, not a scrapbook of someone else’s numbers.",
  ],
  related: [
    "facebook-ads",
    "retargeting",
    "gruppa-facebook",
    "reklama-instagram",
    "svyazka-instagram-facebook",
    "nativnaya-reklama",
  ],
};

/** ES overlay for keisy-facebook-ads — same structure as RU JSON / EN. */
export const keisyFacebookAdsEs: BlogPost = {
  slug: "keisy-facebook-ads",
  title: "Casos de Facebook Ads: errores y lecciones que viajan",
  date: "2020-11-03",
  category: "SMM",
  cover: "/images/blog/keisy-facebook-ads/cover-es.webp",
  excerpt:
    "Errores típicos de ads de Meta/Facebook y lecciones prácticas de campañas ajenas: objetivo, segmento, tests, landing y remarketing — sin copiar el ROI de otro como garantía.",
  lead: [
    "Las campañas ganadoras de Facebook Ads / Meta Ads rara vez cuelgan de un creativo genial. Más a menudo ganas con un objetivo claro, un segmento estrecho, encaje ad→landing, tests y traer de vuelta a audiencias calientes.",
    "Abajo: errores habituales y lecciones de casos públicos (Hubbard, Fernandez, MyBike Cycles, Green Arrow, Webris y similares). Las cifras de revenue y CPA de otros informes ilustran el periodo de otro, no tu plan. Cómo funciona el ads manager es un artículo aparte. El aviso de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* e Instagram* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Puedes repetir el ROI 8x de otro?",
      a: "Sin garantía. Quédate con la mecánica (oferta, encaje, test), no con la cifra en dólares de otro.",
    },
    {
      q: "¿Por dónde debería empezar un principiante?",
      a: "Objetivo de campaña, una audiencia, 2–3 creativos, un landing que coincida con el ad, pixel/events y un test de una semana con tope de presupuesto.",
    },
    {
      q: "¿El remarketing es obligatorio?",
      a: "Para ecommerce y ciclos de decisión largos — a menudo sí. Primero tráfico y events, luego audiencias de sitio/vídeo.",
    },
    {
      q: "¿Basta con un ad?",
      a: "No. Sin iteraciones tú y la cuenta no aprenderéis qué funciona. Corta lo débil, escala lo fuerte.",
    },
    {
      q: "¿En qué se diferencia de la guía de Facebook Ads?",
      a: "Esa cubre cómo funciona el canal. Esta desmenuza errores y lecciones de casos.",
    },
  ],
  sections: [
    {
      title: "Errores habituales antes de los «casos bonitos»",
      level: 2,
      paras: [
        "Objetivo equivocado: optimizas por likes cuando necesitas leads — aprendes la señal equivocada. Una audiencia amplia de «todos» diluye el aprendizaje. Uno o dos ads sin rotación es volar a ciegas.",
        "Sin tests de creativo, headline, oferta y placements te quedas con suerte. Ignorar una base ya caliente y no tener un landing que coincida con el ad mata la conversión aunque el clic sea barato.",
      ],
      lists: [
        {
          intro: "Checklist pre-lanzamiento:",
          items: [
            "objetivo = métrica de negocio (lead, compra, reserva)",
            "segmento más estrecho que «todos los intereses de internet»",
            "2+ creativos e hipótesis",
            "el landing responde a la promesa del ad",
            "events/pixel comprobados",
            "plan de remarketing para quien rebotó",
          ],
        },
      ],
      links: [
        {
          label: "Facebook Ads: cómo funciona el canal",
          href: "/es/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Lección: una pregunta en el creativo + landing en la misma clave",
      level: 2,
      paras: [
        "En casos como el de Andrew Hubbard un movimiento fuerte es una pregunta que la audiencia ya se hace, más un visual que guía la mirada a la oferta. En el landing la respuesta debería empezar con la misma formulación.",
        "El encaje ad ↔ first screen reduce la decepción post-click. No copies el multiplicador de revenue de otro a tu KPI — copia el principio de consistencia.",
      ],
      notes: [
        {
          title: "Importante",
          text: "Sumas históricas «$4k → $36k» son la subasta y el nicho de otro. Tú tienes precios, competencia y calidad de tráfico distintos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Lección: lead magnet y tono humano",
      level: 2,
      paras: [
        "Vídeos cortos y un tono personal al estilo del caso de Mary Fernandez a menudo traen subscribers más barato que un banner seco. Un lead magnet debe resolver un dolor claro, no ser un PDF vacío «para el formulario».",
        "Un CPA bajo por subscriber no es beneficio: cuenta cuántos de la lista llegan al pago.",
      ],
    },
    {
      title: "Lección: remarketing y una oferta con bonus",
      level: 2,
      paras: [
        "MyBike Cycles e historias similares muestran el poder del segundo toque: gente que visitó el sitio pero no compró. Emoji y tono amable son secundarios frente a una oferta clara (entrega, descuento, deadline).",
        "Muestra el producto de forma que la gente quiera tenerlo. Un bonus funciona si es relevante a la compra, no si tapa un producto débil.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Lección: presupuesto pequeño y deadline claro",
      level: 2,
      paras: [
        "Casos con presupuestos de cientos de dólares cuelgan de una oferta corta: beneficio, deadline, siguiente paso (reservar/pagar). Una imagen sobre la audiencia — no relleno genérico.",
        "Un presupuesto pequeño necesita un stop duro de CPA e iteraciones rápidas. No estires un test semanas sin conclusiones.",
      ],
    },
    {
      title: "Lección: un funnel por contenido, no «compra» primero",
      level: 2,
      paras: [
        "Una serie de webinar/vídeo (como en historias Webris) construye confianza: primero valor, luego oferta. Segmenta a quien vio el contenido y corta a los desinteresados.",
        "Un funnel multi-paso no cancela la analítica: mira el coste por lead calentado, no solo el reach de vídeo.",
      ],
      links: [
        {
          label: "Grupo y página de Facebook",
          href: "/es/blog/gruppa-facebook/",
        },
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Objetivo → segmento → test → landing → remarketing. Los casos ajenos van de mecánica, no de una promesa del mismo beneficio.",
        "Un creativo no estándar solo ayuda si la oferta y el landing son honestos y medibles.",
      ],
    },
  ],
  closing: [
    "Anota un objetivo y dos hipótesis creativas, comprueba que el landing coincida con el ad y planifica remarketing — para que las lecciones de otras campañas sean tu checklist, no un scrapbook de cifras ajenas.",
  ],
  related: [
    "facebook-ads",
    "retargeting",
    "gruppa-facebook",
    "reklama-instagram",
    "svyazka-instagram-facebook",
    "nativnaya-reklama",
  ],
};

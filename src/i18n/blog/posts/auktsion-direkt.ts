import type { BlogPost } from "../../../data/blog";

/** ES overlay for auktsion-direkt — same structure as RU JSON. */
export const auktsionDirektEs: BlogPost = {
  slug: "auktsion-direkt",
  title: "Subasta de Yandex Direct: pujas, CTR y competencia",
  date: "2017-04-10",
  category: "Paid search",
  cover: "/images/blog/auktsion-direkt/cover-es.webp",
  excerpt:
    "Cómo funciona la subasta de Yandex Direct: puja y calidad del anuncio, lógica de second-price, por qué el «premium placement» de guías de 2017 es un término histórico y por qué los «props» de puja de competidores son mala idea.",
  lead: [
    "En Direct, quién se muestra y cuánto cuesta el clic salen de una subasta: cuentan la puja, la clickability prevista y la calidad del anuncio más la landing. Una puja mayor no siempre es mejor valor — ni siempre un mejor hueco.",
    "Abajo: la lógica básica de pujas y por qué las guerras de precio («props») hacen daño a todos. La etiqueta «premium placement» y las cifras de paso de materiales de 2017 están desfasadas — mira la subasta actual en la Help de Yandex.",
  ],
  faq: [
    {
      q: "¿Qué decide la subasta de Direct?",
      a: "Quién se muestra y cuánto paga por clic para una consulta, dispositivo y audiencia dados — ponderando puja y calidad.",
    },
    {
      q: "¿Yandex Direct es una subasta de second-price?",
      a: "La idea de «pagar no tu puja máxima, sino lo suficiente para ganar» está cerca del modelo clásico. Fórmulas y pasos exactos han cambiado — ver Help de Direct.",
    },
    {
      q: "¿El CTR importa más que la puja?",
      a: "Importan ambos. Un anuncio débil con puja alta a menudo pierde frente a un competidor relevante.",
    },
    {
      q: "¿Qué es un «prop» de puja en Direct?",
      a: "Una táctica gris histórica: fijar la puja en el límite de un bloque para inflar el CPC de los vecinos. No la recomendamos: cara, arriesgada e invita a contraguerras.",
    },
    {
      q: "¿El premium placement sigue comprándose como tarifa aparte?",
      a: "Como tarifa antigua — no. Hay posiciones en el SERP y estrategias; los detalles están en el texto de premium placement.",
    },
    {
      q: "¿Cómo competir de forma justa?",
      a: "Oferta, negativos, copy, landing, economía de CPA. No una carrera por el hueco a cualquier precio.",
    },
    {
      q: "¿Dónde mirar en lugar de guerras de puja?",
      a: "El texto de pujas en Direct y las conversiones en Yandex Métrica/CRM.",
    },
  ],
  sections: [
    {
      title: "Cómo se puntúa al ganador",
      level: 2,
      paras: [
        "En corto: el sistema compara más que la puja en rublos — pondera la respuesta esperada. Un anuncio con mejor CTR y relevancia puede vencer a una puja más cara pero débil.",
        "La puntuación vive en la consulta y las condiciones de impresión. Por eso las mismas keywords se comportan distinto por la mañana y por la noche, en móvil y en desktop.",
      ],
      links: [
        {
          label: "Pujas en Direct",
          href: "/es/blog/stavki-direkt/",
        },
        {
          label: "Premium placement: qué era",
          href: "/es/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Precio del clic y «second price»",
      level: 2,
      paras: [
        "El ganador a menudo no paga el techo de su puja, sino lo suficiente para superar al siguiente participante (más el paso mínimo de la plataforma — ha cambiado con el tiempo).",
        "Conclusión práctica: inflar la puja «con colchón» sin economía de CPA quema presupuesto. Mejora el anuncio y la landing antes de perseguir para siempre a un competidor con dinero.",
      ],
      lists: [
        {
          intro: "Qué revisar antes de subir la puja:",
          items: [
            "negativos y demanda basura",
            "titulares y sitelinks",
            "velocidad de landing y oferta",
            "CPA objetivo y margen",
          ],
        },
      ],
    },
    {
      title: "«Props» y guerras de precio",
      level: 2,
      paras: [
        "Guías viejas describían una táctica: clavar la puja en el límite del bloque premium para subir el CPC de los vecinos. Formalmente es manipulación de subasta para dañar a un competidor.",
        "Los contras son obvios: contragolpe en tus keywords, presupuesto tirado cuando se mueve el umbral de entrada, escalada de guerra de marca. Direct y el soporte no tienen por qué proteger esos esquemas.",
        "La competencia justa es calidad de campaña y producto — no «castigar a un novato con una puja inflada».",
      ],
      links: [
        {
          label: "Presupuesto en Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Estrategias de Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Los ejemplos con «premium placement», «garantías» y un paso de 0,30 ₽ son un corte de 2017. Subasta, bloques y estrategias se han actualizado. No uses este texto como guía para dañar a competidores.",
  },
  closing: [
    "Si los clics se encarecen y los leads no llegan — primero desmonta la calidad del anuncio y de la landing, no busques un «prop»: la subasta de Direct premia la relevancia más que una guerra de pujas.",
  ],
  related: [
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "byudzhet-yandeks-direkt",
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "klyuchi-yandeks-direkt",
  ],
};

/** EN overlay for auktsion-direkt — same structure as RU JSON. */
export const auktsionDirektEn: BlogPost = {
  slug: "auktsion-direkt",
  title: "Yandex Direct auction: bids, CTR, and competition",
  date: "2017-04-10",
  category: "Paid search",
  cover: "/images/blog/auktsion-direkt/cover-en.webp",
  excerpt:
    "How the Yandex Direct auction works: bid and ad quality, second-price logic, why “premium placement” from 2017 guides is a historical term, and why competitor “bid props” are a bad idea.",
  lead: [
    "In Direct, who shows and what a click costs come from an auction: bid, predicted clickability, and ad-plus-landing quality all count. A bigger bid is not always better value — and not always a better slot.",
    "Below: the basic bidding logic and why price wars (“props”) hurt everyone. The “premium placement” label and step figures from 2017 materials are outdated — check the current auction in Yandex Help.",
  ],
  faq: [
    {
      q: "What does the Direct auction decide?",
      a: "Who shows and how much they pay per click for a given query, device, and audience — weighing bid and quality.",
    },
    {
      q: "Is Yandex Direct a second-price auction?",
      a: "The idea of “paying not your max bid, but enough to win” is close to the classic model. Exact formulas and steps have changed — see Direct Help.",
    },
    {
      q: "Is CTR more important than the bid?",
      a: "Both matter. A weak ad with a high bid often loses to a relevant competitor.",
    },
    {
      q: "What is a bid “prop” in Direct?",
      a: "A historical grey tactic: hold the bid at a block boundary to inflate neighbors’ CPC. We don’t recommend it: expensive, risky, and invites counter-wars.",
    },
    {
      q: "Is premium placement still bought as a separate tariff?",
      a: "As an old tariff — no. There are SERP positions and strategies; details are in the premium-placement piece.",
    },
    {
      q: "How should you compete fairly?",
      a: "Offer, negatives, copy, landing, CPA economics. Not a race for the slot at any cost.",
    },
    {
      q: "Where should you look instead of bid wars?",
      a: "The bids-in-Direct piece and conversions in Yandex Metrica/CRM.",
    },
  ],
  sections: [
    {
      title: "How the winner is scored",
      level: 2,
      paras: [
        "Simply put: the system compares more than the bid in rubles — it weighs expected response. An ad with better CTR and relevance can beat a more expensive but weak bid.",
        "The score sits in the query and show conditions. So the same keywords behave differently morning and evening, on phone and desktop.",
      ],
      links: [
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Premium placement: what it was",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Click price and “second price”",
      level: 2,
      paras: [
        "The winner often doesn’t pay their bid ceiling, but enough to beat the next participant (plus the platform’s minimum step — it has changed over time).",
        "Practical takeaway: inflating the bid “with a buffer” without CPA economics burns budget. Improve the ad and landing page before you forever chase a competitor with money.",
      ],
      lists: [
        {
          intro: "What to check before raising the bid:",
          items: [
            "negatives and junk demand",
            "headlines and sitelinks",
            "landing speed and offer",
            "target CPA and margin",
          ],
        },
      ],
    },
    {
      title: "“Props” and price wars",
      level: 2,
      paras: [
        "Old guides described a tactic: pin the bid to a premium-block boundary to raise neighbors’ CPC. Formally it’s auction manipulation to harm a competitor.",
        "Downsides are obvious: a counterstrike on your keywords, budget waste when the entry threshold shifts, brand-war escalation. Direct and support don’t have to protect such schemes.",
        "Fair competition is campaign and product quality — not “punishing a newbie with an inflated bid.”",
      ],
      links: [
        {
          label: "Budget in Direct",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Examples with “premium placement,” “guarantees,” and a ₽0.30 step are a 2017 slice. Auction, blocks, and strategies have updated. Don’t use this piece as a guide to harm competitors.",
  },
  closing: [
    "If clicks get more expensive and leads don’t — first unpack ad and landing-page quality, don’t hunt for a “prop”: Direct’s auction rewards relevance more than a bid war.",
  ],
  related: [
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "byudzhet-yandeks-direkt",
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "klyuchi-yandeks-direkt",
  ],
};

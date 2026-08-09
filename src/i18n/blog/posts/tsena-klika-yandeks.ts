import type { BlogPost } from "../../../data/blog";

/** EN overlay for tsena-klika-yandeks — same structure as RU JSON. */
export const tsenaKlikaYandeksEn: BlogPost = {
  slug: "tsena-klika-yandeks",
  title: "Click price in Yandex: how to calculate a suitable bid",
  date: "2021-02-19",
  category: "Paid search",
  cover: "/images/blog/tsena-klika-yandeks/cover-en.webp",
  excerpt:
    "How to derive an acceptable CPC from target CPA and site conversion, why Yandex Metrika matters, and why an “average market click price” without economics is useless.",
  lead: [
    "In Yandex Direct it’s easy to chase auction rank and forget what a click can cost the business. If you’re ready to pay X per lead and the site converts Y% of clicks, the bid ceiling is calculated before launch — not after burning the budget.",
    "Below: a simple formula from CPA and conversion, a numeric example, and limits (season, competition, lead quality). CPM/CPC models and bid control are in related posts.",
  ],
  faq: [
    {
      q: "What is the click-price formula?",
      a: "Guide: acceptable CPC ≈ target CPA × (conversion to goal / 100). Conversion is the share of clicks that became a lead or order.",
    },
    {
      q: "Where does conversion come from?",
      a: "From Yandex Metrika/analytics on ad traffic with goals set. No data — start with a cautious hypothesis (often around 1%) and refine from facts.",
    },
    {
      q: "What is CPA in this formula?",
      a: "How much you’re ready to pay for a useful action: lead, call, order. Higher margin and LTV — higher ceiling; otherwise ads lose money even with a “pretty” CTR.",
    },
    {
      q: "Why doesn’t the calc match the auction?",
      a: "The market may demand above your ceiling. Then cut irrelevant traffic, improve the ad and landing, or narrow the keyword set — don’t raise the bid at a loss.",
    },
    {
      q: "Should I calculate for the whole site or per product?",
      a: "Better by segments: categories differ in conversion and margin. Sometimes it’s smarter to run strong ad groups, not the whole catalog.",
    },
    {
      q: "Is CTR enough to judge?",
      a: "No. You need conversions and lead cost. High CTR with no leads burns budget.",
    },
    {
      q: "Does this replace Direct strategies?",
      a: "No. The formula sets an economic ceiling. How to run bids and auto-strategies is separate — see the Direct bids post.",
    },
  ],
  sections: [
    {
      title: "Economics first, then the bid",
      level: 2,
      paras: [
        "Paid search speeds leads only if ads and budget align with profit. Paying 600–700 ₽ per lead at 300 ₽ average profit is a path to pretty stats and an empty till.",
        "Before fine-tuning the auction, lock: what counts as the goal, what CPA is acceptable, and what conversion the landing has on ad traffic.",
      ],
      lists: [
        {
          intro: "Minimum data:",
          items: [
            "Yandex Metrika goal (lead, call, purchase)",
            "target CPA from margin / LTV",
            "click → goal conversion",
            "niche seasonality awareness",
          ],
        },
      ],
      links: [
        {
          label: "CPM or CPC",
          href: "/en/blog/cpm-ili-cpc/",
        },
      ],
    },
    {
      title: "How to calculate click price",
      level: 2,
      paras: [
        "Basic link: the higher the conversion, the more you can pay per click at the same CPA.",
        "Working guide formula: acceptable CPC = CPA × CR / 100, where CR is conversion in percent. Equivalent: CPC = CPA × (goals / clicks).",
      ],
      lists: [
        {
          intro: "Related definitions:",
          items: [
            "conversion CR = goals / clicks × 100%",
            "CPA (cost per goal) = ad spend / number of goals",
            "in planning: spend ≈ CPC × clicks → hence the CPC ceiling",
          ],
        },
      ],
    },
    {
      title: "Calculation example",
      level: 2,
      paras: [
        "Gear ecommerce: ad conversion 1.5% (1.5 orders per 100 clicks). Target CPA — 150 ₽ per order.",
        "Acceptable CPC ≈ 150 × 1.5 / 100 = 2.25 ₽. On 200 clicks at that bid, spend is about 450 ₽ and roughly three orders expected — if conversion holds.",
        "If the auction asks 8 ₽ at the same conversion, order cost jumps above 500 ₽ — either improve the funnel, narrow queries, or admit the channel doesn’t pencil out for that keyword set.",
      ],
    },
    {
      title: "Formula limits",
      level: 2,
      paras: [
        "The figure is an “on average” ceiling, not a guarantee. Competition, season, and lead quality move actual CPC and payback.",
        "Calculate strong and weak ad groups separately: overall site conversion can hide losing keywords. Bid and strategy control is the next layer after economics.",
      ],
      lists: [
        {
          intro: "Check if the calc “won’t fit” the auction:",
          items: [
            "ad and landing relevance",
            "negatives and junk demand",
            "landing speed and offer clarity",
            "segment margin — is target CPA overstated",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
  ],
  closing: [
    "A suitable click price in Yandex is calculated from CPA and conversion, not from a “market average”. The formula sets the ceiling; next — traffic quality, ads, and the landing.",
  ],
};

/** ES overlay for tsena-klika-yandeks — same structure as RU JSON / EN. */
export const tsenaKlikaYandeksEs: BlogPost = {
  slug: "tsena-klika-yandeks",
  title: "Precio del clic en Yandex: cómo calcular una puja adecuada",
  date: "2021-02-19",
  category: "Paid search",
  cover: "/images/blog/tsena-klika-yandeks/cover.webp",
  excerpt:
    "Cómo derivar un CPC aceptable desde el CPA objetivo y la conversión del sitio, por qué importa Yandex Metrika y por qué un «precio medio de clic del mercado» sin economía no sirve.",
  lead: [
    "En Yandex Direct es fácil perseguir el puesto en la subasta y olvidar cuánto puede costar un clic al negocio. Si estás dispuesto a pagar X por lead y el sitio convierte Y% de los clics, el techo de puja se calcula antes del lanzamiento — no después de quemar el presupuesto.",
    "Abajo: una fórmula simple desde CPA y conversión, un ejemplo numérico y límites (temporada, competencia, calidad del lead). Modelos CPM/CPC y control de pujas están en posts relacionados.",
  ],
  faq: [
    {
      q: "¿Cuál es la fórmula del precio del clic?",
      a: "Guía: CPC aceptable ≈ CPA objetivo × (conversión a goal / 100). La conversión es la cuota de clics que se volvieron lead o pedido.",
    },
    {
      q: "¿De dónde sale la conversión?",
      a: "De Yandex Metrika/analítica sobre tráfico de ads con goals puestos. Sin datos — empieza con una hipótesis prudente (a menudo cerca del 1%) y afina con hechos.",
    },
    {
      q: "¿Qué es el CPA en esta fórmula?",
      a: "Cuánto estás dispuesto a pagar por una acción útil: lead, llamada, pedido. Más margen y LTV — más techo; si no, los ads pierden dinero aunque el CTR se vea «bonito».",
    },
    {
      q: "¿Por qué el cálculo no encaja con la subasta?",
      a: "El mercado puede pedir por encima de tu techo. Entonces corta tráfico irrelevante, mejora el anuncio y la landing, o estrecha el set de keywords — no subas la puja a pérdida.",
    },
    {
      q: "¿Calculo para todo el sitio o por producto?",
      a: "Mejor por segmentos: las categorías difieren en conversión y margen. A veces es más inteligente correr grupos fuertes, no todo el catálogo.",
    },
    {
      q: "¿Basta el CTR para juzgar?",
      a: "No. Necesitas conversiones y coste del lead. Un CTR alto sin leads quema presupuesto.",
    },
    {
      q: "¿Esto sustituye las estrategias de Direct?",
      a: "No. La fórmula fija un techo económico. Cómo correr pujas y auto-estrategias es aparte — ver el post de pujas en Direct.",
    },
  ],
  sections: [
    {
      title: "Primero la economía, luego la puja",
      level: 2,
      paras: [
        "El paid search acelera leads solo si ads y presupuesto se alinean con el beneficio. Pagar 600–700 ₽ por lead con 300 ₽ de beneficio medio es camino a stats bonitas y caja vacía.",
        "Antes de afinar la subasta, fija: qué cuenta como goal, qué CPA es aceptable y qué conversión tiene la landing en tráfico de ads.",
      ],
      lists: [
        {
          intro: "Datos mínimos:",
          items: [
            "goal de Yandex Metrika (lead, llamada, compra)",
            "CPA objetivo desde margen / LTV",
            "conversión clic → goal",
            "conciencia de estacionalidad del nicho",
          ],
        },
      ],
      links: [
        {
          label: "CPM o CPC",
          href: "/es/blog/cpm-ili-cpc/",
        },
      ],
    },
    {
      title: "Cómo calcular el precio del clic",
      level: 2,
      paras: [
        "Vínculo básico: cuanto más alta la conversión, más puedes pagar por clic al mismo CPA.",
        "Fórmula guía de trabajo: CPC aceptable = CPA × CR / 100, donde CR es la conversión en por ciento. Equivalente: CPC = CPA × (goals / clics).",
      ],
      lists: [
        {
          intro: "Definiciones relacionadas:",
          items: [
            "conversión CR = goals / clics × 100%",
            "CPA (coste por goal) = gasto en ads / número de goals",
            "en planificación: gasto ≈ CPC × clics → de ahí el techo de CPC",
          ],
        },
      ],
    },
    {
      title: "Ejemplo de cálculo",
      level: 2,
      paras: [
        "Ecommerce de engranajes: conversión de ads 1,5% (1,5 pedidos por 100 clics). CPA objetivo — 150 ₽ por pedido.",
        "CPC aceptable ≈ 150 × 1,5 / 100 = 2,25 ₽. Con 200 clics a esa puja, el gasto es unos 450 ₽ y se esperan unos tres pedidos — si la conversión se mantiene.",
        "Si la subasta pide 8 ₽ con la misma conversión, el coste del pedido salta por encima de 500 ₽ — o mejoras el funnel, estrechas consultas, o admites que el canal no cuadra para ese set de keywords.",
      ],
    },
    {
      title: "Límites de la fórmula",
      level: 2,
      paras: [
        "La cifra es un techo «en promedio», no una garantía. Competencia, temporada y calidad del lead mueven el CPC real y el payback.",
        "Calcula grupos de anuncios fuertes y flojos por separado: la conversión global del sitio puede ocultar keywords perdedoras. El control de pujas y estrategias es la capa siguiente tras la economía.",
      ],
      lists: [
        {
          intro: "Revisa si el cálculo «no cabe» en la subasta:",
          items: [
            "relevancia de anuncio y landing",
            "negativas y demanda basura",
            "velocidad de la landing y claridad de la oferta",
            "margen del segmento — ¿está sobreestimado el CPA objetivo?",
          ],
        },
      ],
      links: [
        {
          label: "Pujas en Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Un precio de clic adecuado en Yandex se calcula desde CPA y conversión, no desde una «media del mercado». La fórmula fija el techo; después — calidad del tráfico, ads y la landing.",
  ],
};

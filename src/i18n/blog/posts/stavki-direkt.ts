import type { BlogPost } from "../../../data/blog";

/** EN overlay for stavki-direkt — same structure as RU JSON. */
export const stavkiDirektEn: BlogPost = {
  slug: "stavki-direkt",
  title: "Bids in Yandex Direct: setup and management",
  date: "2021-03-05",
  category: "Paid search",
  cover: "/images/blog/stavki-direkt/cover-en.webp",
  excerpt:
    "How bidding works in Yandex Direct: manual and automated control, impressions, click price, and what to watch beyond “bid higher.”",
  lead: [
    "A bid in Direct affects show chance and click price, but doesn’t lock a position forever. Auction, ad quality, and landing relevance decide together.",
    "Below: the logic of managing bids and impressions. The Direct UI changes — check current strategy names in Yandex Help.",
  ],
  faq: [
    {
      q: "Does a higher bid always mean a higher position?",
      a: "Not always. Bid, quality, and predicted CTR all count. Sometimes a more relevant competitor wins.",
    },
    {
      q: "Should I use manual or auto strategies?",
      a: "At the start, often manual control or simple autos with caps. When you have conversions — you can lean more on auto-optimization.",
    },
    {
      q: "What matters more than the bid?",
      a: "Offer, negatives, ad, and landing. An expensive bid on a weak landing burns budget.",
    },
    {
      q: "Do I need bid adjustments?",
      a: "Yes: device, region, time — if you have data. Without data, don’t change everything at once.",
    },
    {
      q: "How do I choose CPC?",
      a: "From economics: margin, site conversion, target CPA — not from a vague “market average.”",
    },
    {
      q: "How often should I revisit bids?",
      a: "After enough data: usually every few days for active campaigns and weekly for calmer ones. Don’t change dozens of parameters at once.",
    },
    {
      q: "Can I judge a campaign by CTR alone?",
      a: "No. High CTR without leads doesn’t pay for ads. Match clicks to conversions, cost per lead, and inquiry quality.",
    },
  ],
  sections: [
    {
      title: "Setting bids",
      level: 2,
      paras: [
        "Set strategy at campaign or group level, cap the daily budget, check geo and schedule. Keep keywords, ads, and landing aligned in meaning.",
        "Before launch, define what counts as a result: lead, call, order, or signup. Then the bid isn’t a visibility number — it’s part of an acceptable acquisition-cost calc.",
      ],
      lists: [
        {
          intro: "Before raising a bid:",
          items: [
            "are there conversions from this keyword",
            "is budget leaking into irrelevance",
            "does the landing load fast",
            "is the ad approved and clickable",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Managing impressions",
      level: 2,
      paras: [
        "Impressions depend on bid, competition, and keyword status. Check rare-show reasons in stats: budget, bid, negatives, moderation.",
        "Don’t try to recover reach with one sharp raise. First separate commercial from research queries, check ad–query fit, and exclude off-target wording.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "bid / strategy",
            "budget",
            "adjustments",
            "ad quality",
            "negatives and placement exclusions (for networks)",
          ],
        },
      ],
    },
    {
      title: "Tools and common sense",
      level: 2,
      paras: [
        "Direct wizards and recommendations are hints, not orders. Cross-check them with unit economics. Don’t chase the top ad slot at any cost.",
        "Compare not average position, but spend → conversions → revenue. Sometimes a less visible impression brings cheaper leads, while the most expensive traffic only builds pretty stats.",
      ],
      lists: [
        {
          intro: "Mistakes:",
          items: [
            "bidding for bidding’s sake without goals",
            "one bid for all keywords of different value",
            "ignoring mobile traffic",
            "no link to Yandex Metrika",
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
      title: "Manual control and auto strategies",
      level: 2,
      paras: [
        "Manual control helps when campaigns are new, conversions are scarce, or keyword value differs a lot. You can see which queries burn budget and set priorities carefully.",
        "Auto strategies shine when analytics sends correct goals and you have a stable data volume. Set a clear conversion-cost or budget target — then don’t change the goal every day.",
      ],
      lists: [
        {
          intro: "Before turning on an auto strategy, check:",
          items: [
            "Metrika goals match real inquiries",
            "duplicate goals and test leads are excluded",
            "the campaign has enough budget to learn",
            "traffic types aren’t mixed without a reason",
          ],
        },
      ],
    },
    {
      title: "How to control results",
      level: 2,
      paras: [
        "Keep a short regular report: spend, clicks, conversions, CPA, share of qualified inquiries, and revenue if you can pass it. Prefer breakdowns by campaign, device, region, and demand groups.",
        "Change by hypothesis: pause an unprofitable keyword, improve the mobile landing, or tweak the schedule. After a change, let the campaign gather stats and write down the conclusion.",
      ],
      lists: [
        {
          intro: "Weekly checks that help:",
          items: [
            "search terms and new negatives",
            "gap between spend and target CPA",
            "forms, call tracking, and goals",
            "competition and seasonality shifts",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for stavki-direkt — same structure as RU JSON / EN. */
export const stavkiDirektEs: BlogPost = {
  slug: "stavki-direkt",
  title: "Pujas en Yandex Direct: configuración y gestión",
  date: "2021-03-05",
  category: "Paid search",
  cover: "/images/blog/stavki-direkt/cover.webp",
  excerpt:
    "Cómo funcionan las pujas en Yandex Direct: control manual y automático, impresiones, precio del clic y qué mirar más allá de «puja más alto».",
  lead: [
    "Una puja en Direct afecta la chance de mostrar y el precio del clic, pero no fija una posición para siempre. Subasta, calidad del anuncio y relevancia de la landing deciden juntos.",
    "Abajo: la lógica de gestionar pujas e impresiones. La UI de Direct cambia — revisa los nombres actuales de estrategias en la Ayuda de Yandex.",
  ],
  faq: [
    {
      q: "¿Una puja más alta siempre significa una posición más alta?",
      a: "No siempre. Cuentan puja, calidad y CTR previsto. A veces gana un competidor más relevante.",
    },
    {
      q: "¿Debo usar estrategias manuales o automáticas?",
      a: "Al inicio, a menudo control manual o autos simples con caps. Cuando hay conversiones — puedes inclinarte más a la auto-optimización.",
    },
    {
      q: "¿Qué importa más que la puja?",
      a: "Oferta, negativos, anuncio y landing. Una puja cara en una landing floja quema presupuesto.",
    },
    {
      q: "¿Hacen falta ajustes de puja?",
      a: "Sí: dispositivo, región, hora — si tienes datos. Sin datos, no cambies todo a la vez.",
    },
    {
      q: "¿Cómo elijo el CPC?",
      a: "Desde la economía: margen, conversión del sitio, CPA objetivo — no desde un vago «promedio del mercado».",
    },
    {
      q: "¿Cada cuánto revisitar las pujas?",
      a: "Tras datos suficientes: suele ser cada pocos días en campañas activas y semanal en las más tranquilas. No cambies docenas de parámetros a la vez.",
    },
    {
      q: "¿Puedo juzgar una campaña solo por CTR?",
      a: "No. Un CTR alto sin leads no paga los ads. Cruza clics con conversiones, coste por lead y calidad de la consulta.",
    },
  ],
  sections: [
    {
      title: "Fijar pujas",
      level: 2,
      paras: [
        "Fija la estrategia a nivel campaña o grupo, limita el presupuesto diario, revisa geo y horario. Mantén keywords, ads y landing alineados en significado.",
        "Antes del lanzamiento, define qué cuenta como resultado: lead, llamada, pedido o alta. Entonces la puja no es un número de visibilidad — es parte de un cálculo de coste de adquisición aceptable.",
      ],
      lists: [
        {
          intro: "Antes de subir una puja:",
          items: [
            "¿hay conversiones de esta keyword?",
            "¿el presupuesto se fuga a irrelevancia?",
            "¿la landing carga rápido?",
            "¿el anuncio está aprobado y es clicable?",
          ],
        },
      ],
      links: [
        {
          label: "Bases de la cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Gestionar impresiones",
      level: 2,
      paras: [
        "Las impresiones dependen de puja, competencia y estado de la keyword. Revisa motivos de pocas impresiones en stats: presupuesto, puja, negativos, moderación.",
        "No intentes recuperar alcance con una subida brusca. Primero separa consultas comerciales de investigación, revisa el encaje anuncio–consulta y excluye formulaciones fuera de target.",
      ],
      lists: [
        {
          intro: "Palancas:",
          items: [
            "puja / estrategia",
            "presupuesto",
            "ajustes",
            "calidad del anuncio",
            "negativos y exclusiones de emplazamiento (para redes)",
          ],
        },
      ],
    },
    {
      title: "Herramientas y sentido común",
      level: 2,
      paras: [
        "Los wizards y recomendaciones de Direct son pistas, no órdenes. Crúzalos con unit economics. No persigas el bloque alto a cualquier coste.",
        "Compara no la posición media, sino gasto → conversiones → ingresos. A veces una impresión menos visible trae leads más baratos, mientras el tráfico más caro solo arma stats bonitas.",
      ],
      lists: [
        {
          intro: "Errores:",
          items: [
            "pujar por pujar sin goals",
            "una sola puja para todas las keywords de distinto valor",
            "ignorar el tráfico móvil",
            "sin enlace a Yandex Metrika",
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
      title: "Control manual y auto-estrategias",
      level: 2,
      paras: [
        "El control manual ayuda cuando las campañas son nuevas, las conversiones escasean o el valor de las keywords difiere mucho. Puedes ver qué consultas queman presupuesto y fijar prioridades con cuidado.",
        "Las auto-estrategias brillan cuando analytics envía goals correctos y hay un volumen de datos estable. Fija un objetivo claro de coste de conversión o presupuesto — y no cambies el goal cada día.",
      ],
      lists: [
        {
          intro: "Antes de activar una auto-estrategia, revisa:",
          items: [
            "los goals de Metrika coinciden con consultas reales",
            "goals duplicados y leads de test están excluidos",
            "la campaña tiene presupuesto suficiente para aprender",
            "los tipos de tráfico no se mezclan sin motivo",
          ],
        },
      ],
    },
    {
      title: "Cómo controlar resultados",
      level: 2,
      paras: [
        "Mantén un informe corto regular: gasto, clics, conversiones, CPA, cuota de consultas cualificadas e ingresos si puedes pasarlos. Prefiere desgloses por campaña, dispositivo, región y grupos de demanda.",
        "Cambia por hipótesis: pausa una keyword no rentable, mejora la landing móvil o retoca el horario. Tras un cambio, deja que la campaña reúna stats y anota la conclusión.",
      ],
      lists: [
        {
          intro: "Chequeos semanales que ayudan:",
          items: [
            "términos de búsqueda y nuevos negativos",
            "brecha entre gasto y CPA objetivo",
            "formularios, call tracking y goals",
            "cambios de competencia y estacionalidad",
          ],
        },
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for spetsrazmeshchenie-direkt — same structure as RU JSON. */
export const spetsrazmeshchenieDirektEn: BlogPost = {
  slug: "spetsrazmeshchenie-direkt",
  title:
    "Special placement in Yandex Direct: what it was and what to watch now",
  date: "2021-02-19",
  category: "Paid search",
  cover: "/images/blog/spetsrazmeshchenie-direkt/cover-en.webp",
  excerpt:
    "What “special placement” meant in old Yandex Direct, why the term is outdated, and how to think today about ad blocks, bids, and ad quality.",
  lead: [
    "“Special placement” was the historic name for premium ad blocks above Yandex search results. The UI and auction have changed a lot since then.",
    "Below: what the old term meant and how things work now. Position depends on bid, quality, and predicted CTR — not one magic checkbox. Aim for CPA and revenue, not a legendary block name.",
  ],
  faq: [
    {
      q: "Does special placement still exist as a tariff?",
      a: "As a separate “buy special placement” product in the old sense — no. Check current formats and strategies in Direct help.",
    },
    {
      q: "How do I get into the top block?",
      a: "Compete in the auction: relevant keywords, strong ads, a sane bid or strategy, and a good landing page.",
    },
    {
      q: "Does a higher bid always put me on top?",
      a: "Not always. Quality and clickability affect cost and access to impressions.",
    },
    {
      q: "How does this relate to bids?",
      a: "The bid is one lever. See the separate article on Direct bidding.",
    },
    {
      q: "Do I need a separate budget “for special placement”?",
      a: "Plan budget for goals and CPA — not an outdated block name.",
    },
    {
      q: "Can I guarantee a top impression?",
      a: "No. Auction outcomes shift with the query, competitors, ad quality, and campaign limits.",
    },
    {
      q: "What should I show the client instead of position?",
      a: "Spend, conversions, CPA, lead quality, and revenue — business results, not “we’re in special placement.”",
    },
    {
      q: "Is lower on the page always worse?",
      a: "Not necessarily. Sometimes the click is cheaper and leads are better. Count economics, not only block height.",
    },
  ],
  sections: [
    {
      title: "What people remember as “special placement”",
      level: 2,
      paras: [
        "It used to mean noticeable ads above organic. Hence the habit “I want special placement” = “I want to be on top.”",
        "Old guides often describe a UI and math that no longer exist. The term is handy when talking to a client from the 2010s, but you set campaigns from current reports and Yandex help.",
      ],
      lists: [
        {
          intro: "Important to understand:",
          items: [
            "block names changed",
            "the auction got more complex",
            "there’s no forever #1 guarantee",
            "old account screenshots aren’t instructions",
          ],
        },
      ],
    },
    {
      title: "How impressions work now",
      level: 2,
      paras: [
        "Position and premium slots are auction outcomes: bid or strategy, predicted CTR, ad quality, and relevance. The system picks a set of ads for the query — it doesn’t sell a special package like old guides claimed.",
        "Average position and impression share reports help as diagnostics, not as KPIs by themselves. A drop in height may be a budget cap, moderation, or demand shift — not only “we bid too low.”",
      ],
      lists: [
        {
          intro: "What you actually adjust:",
          items: [
            "keywords and negatives",
            "ad copy and extensions",
            "landing page",
            "bid or auto strategy",
            "geo, schedule, devices",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Levers instead of chasing a name",
      level: 2,
      paras: [
        "Treat impression stats as a consequence of settings. Improve ads and negatives; count click economics. One bid doesn’t fit every phrase: brand, hot, and research demand behave differently.",
        "Before raising the bid for the top, make sure the landing meets the query expectation: offer, price or next step, working form. Otherwise an expensive top only accelerates burn.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "bid / auto strategy",
            "ad and extension quality",
            "relevant landing",
            "geo and schedule",
            "budget without leak into irrelevance",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads keywords (list logic)",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Strategy: goals → structure → economics",
      level: 2,
      paras: [
        "Goals → keywords → ads → landing → analytics. The top block makes sense if it pays back. Sometimes a lower, cheaper impression yields better ROI.",
        "Split campaigns by demand meaning so you see what brings leads. Blindly copying a competitor’s bids is a path to their economics — not your margin.",
      ],
      lists: [
        {
          intro: "Mistakes from old guides:",
          items: [
            "chasing “special” at any cost",
            "ignoring conversions",
            "copying a competitor’s bids",
            "measuring success only by average position",
          ],
        },
      ],
      tables: [
        {
          caption: "What to measure instead of “we’re in special placement”",
          headers: ["Metric", "Why"],
          rows: [
            ["CPA / CPO", "Cost of the target action"],
            ["Lead quality", "Not all leads are equal"],
            ["Brand vs generic share", "Different economics"],
            ["Landing conversion", "Top is useless with a leaky landing"],
          ],
        },
      ],
    },
    {
      title: "How to assess search visibility",
      level: 2,
      paras: [
        "Look at slices by device, time, queries, and impression share (if available in the account). A sharp visibility drop often ties to budget limits, moderation, geo edits, or broken conversion tracking — not only the bid.",
        "Compare periods with seasonality and promos in mind. One good week doesn’t prove an optimum; one dip isn’t a reason to rewrite every campaign in a day.",
      ],
      lists: [
        {
          intro: "Before concluding, check:",
          items: [
            "ad and extension status",
            "budget remaining and daily caps",
            "geo and schedule",
            "goal correctness in Metrika and Direct",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Campaign optimization plan",
      level: 2,
      paras: [
        "First goals and structure, then search terms and negatives, then copy and landings, and only then aggressive bids. Log every change.",
        "After enough data, keep decisions that improve CPA or revenue — not ones that only restore the familiar feeling of “we’re on top again.”",
      ],
      lists: [
        {
          intro: "Sequence:",
          items: [
            "lock in goals and an acceptable CPA",
            "review search terms",
            "fix ads and landings",
            "adjust strategy from data",
            "revisit the top only through economics",
          ],
        },
      ],
    },
    {
      title: "How to talk to the client",
      level: 2,
      paras: [
        "A client from the special-placement era often wants a first-place guarantee. Honest answer: auction, competitors, and quality shift daily; we sell outcomes (leads, sales), not a block label.",
        "Show a report: spend, conversions, CPA, lead examples. If the top is expensive and doesn’t pay — argue for a lower bid or a better offer, not “we must be in special.”",
      ],
      lists: [
        {
          intro: "In the client report:",
          items: [
            "period goals",
            "numbers and lead quality",
            "what you changed and why",
            "what you’ll check next week",
          ],
        },
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
      notes: [
        {
          title: "SEO alongside",
          kind: "tip",
          text: "Paid search covers demand fast. Organic for a core is a separate horizon: prep around a month; page-one share of the core is typically planned for two to six months of work after start.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "reklamnyy-kabinet",
    "klyuchi-google-ads",
    "metrika-tseli",
    "otchet-klientu",
    "tekst-lendinga",
  ],
};

/** ES overlay for spetsrazmeshchenie-direkt — same structure as RU JSON / EN. */
export const spetsrazmeshchenieDirektEs: BlogPost = {
  slug: "spetsrazmeshchenie-direkt",
  title:
    "Emplazamiento especial en Yandex Direct: qué era y qué mirar ahora",
  date: "2021-02-19",
  category: "Paid search",
  cover: "/images/blog/spetsrazmeshchenie-direkt/cover.webp",
  excerpt:
    "Qué significaba el «emplazamiento especial» en el Direct antiguo, por qué el término está desfasado y cómo pensar hoy en bloques de ads, pujas y calidad del anuncio.",
  lead: [
    "«Emplazamiento especial» era el nombre histórico de los bloques premium de ads encima de los resultados de búsqueda de Yandex. La UI y la subasta han cambiado mucho desde entonces.",
    "Abajo: qué significaba el término viejo y cómo funciona ahora. La posición depende de puja, calidad y CTR previsto — no de un checkbox mágico. Apunta a CPA e ingresos, no al nombre legendario de un bloque.",
  ],
  faq: [
    {
      q: "¿Sigue existiendo el emplazamiento especial como tarifa?",
      a: "Como producto aparte «comprar emplazamiento especial» en el sentido antiguo — no. Revisa formatos y estrategias actuales en la ayuda de Direct.",
    },
    {
      q: "¿Cómo entro en el bloque alto?",
      a: "Compites en la subasta: keywords relevantes, ads fuertes, una puja o estrategia sensata y una buena landing.",
    },
    {
      q: "¿Una puja más alta siempre me pone arriba?",
      a: "No siempre. La calidad y la clicabilidad afectan al coste y al acceso a impresiones.",
    },
    {
      q: "¿Cómo se relaciona esto con las pujas?",
      a: "La puja es una palanca. Ver el artículo aparte sobre pujas en Direct.",
    },
    {
      q: "¿Necesito un presupuesto aparte «para emplazamiento especial»?",
      a: "Planifica presupuesto por objetivos y CPA — no por un nombre de bloque obsoleto.",
    },
    {
      q: "¿Puedo garantizar una impresión en el bloque alto?",
      a: "No. Los resultados de la subasta cambian con la consulta, competidores, calidad del anuncio y límites de campaña.",
    },
    {
      q: "¿Qué le muestro al cliente en lugar de la posición?",
      a: "Gasto, conversiones, CPA, calidad del lead e ingresos — resultados de negocio, no «estamos en emplazamiento especial».",
    },
    {
      q: "¿Más abajo en la página siempre es peor?",
      a: "No necesariamente. A veces el clic es más barato y los leads mejores. Cuenta economía, no solo la altura del bloque.",
    },
  ],
  sections: [
    {
      title: "Lo que la gente recuerda como «emplazamiento especial»",
      level: 2,
      paras: [
        "Antes significaba ads notables encima del orgánico. De ahí el hábito «quiero emplazamiento especial» = «quiero estar arriba».",
        "Las guías viejas a menudo describen una UI y una matemática que ya no existen. El término sirve al hablar con un cliente de los 2010, pero las campañas se configuran con informes actuales y la ayuda de Yandex.",
      ],
      lists: [
        {
          intro: "Importante entender:",
          items: [
            "los nombres de bloques cambiaron",
            "la subasta se volvió más compleja",
            "no hay garantía eterna del puesto nº 1",
            "capturas viejas de la cuenta no son instrucciones",
          ],
        },
      ],
    },
    {
      title: "Cómo funcionan las impresiones ahora",
      level: 2,
      paras: [
        "Posición y slots premium son resultados de subasta: puja o estrategia, CTR previsto, calidad del anuncio y relevancia. El sistema elige un set de ads para la consulta — no vende un paquete especial como afirmaban las guías antiguas.",
        "Los informes de posición media y cuota de impresión ayudan como diagnóstico, no como KPIs por sí solos. Una bajada de altura puede ser tope de presupuesto, moderación o un cambio de demanda — no solo «pujamos poco».",
      ],
      lists: [
        {
          intro: "Lo que de verdad ajustas:",
          items: [
            "keywords y negativos",
            "copy del anuncio y extensiones",
            "landing page",
            "puja o estrategia automática",
            "geo, horario, dispositivos",
          ],
        },
      ],
      links: [
        {
          label: "Pujas en Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
        {
          label: "Cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Palancas en lugar de perseguir un nombre",
      level: 2,
      paras: [
        "Trata las stats de impresión como consecuencia de los ajustes. Mejora ads y negativos; cuenta la economía del clic. Una puja no vale para cada frase: marca, demanda caliente e investigación se comportan distinto.",
        "Antes de subir la puja por el bloque alto, asegúrate de que la landing cumple la expectativa de la consulta: oferta, precio o siguiente paso, formulario que funciona. Si no, un premium caro solo acelera la quema.",
      ],
      lists: [
        {
          intro: "Palancas:",
          items: [
            "puja / estrategia automática",
            "calidad del anuncio y extensiones",
            "landing relevante",
            "geo y horario",
            "presupuesto sin fuga a irrelevancia",
          ],
        },
      ],
      links: [
        {
          label: "Keywords en Google Ads (lógica de listas)",
          href: "/es/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Estrategia: goals → estructura → economía",
      level: 2,
      paras: [
        "Goals → keywords → ads → landing → analytics. El bloque alto tiene sentido si se paga solo. A veces una impresión más baja y barata da mejor ROI.",
        "Separa campañas por sentido de la demanda para ver qué trae leads. Copiar a ciegas las pujas del competidor es el camino a su economía — no a tu margen.",
      ],
      lists: [
        {
          intro: "Errores de las guías antiguas:",
          items: [
            "perseguir «especial» a cualquier coste",
            "ignorar conversiones",
            "copiar pujas del competidor",
            "medir el éxito solo por la posición media",
          ],
        },
      ],
      tables: [
        {
          caption: "Qué medir en lugar de «estamos en emplazamiento especial»",
          headers: ["Métrica", "Por qué"],
          rows: [
            ["CPA / CPO", "Coste de la acción objetivo"],
            ["Calidad del lead", "No todos los leads son iguales"],
            ["Cuota marca vs genérico", "Economía distinta"],
            ["Conversión de landing", "El premium no sirve con una landing que pierde"],
          ],
        },
      ],
    },
    {
      title: "Cómo valorar la visibilidad en búsqueda",
      level: 2,
      paras: [
        "Mira cortes por dispositivo, hora, consultas y cuota de impresión (si está en la cuenta). Una caída brusca de visibilidad a menudo liga con límites de presupuesto, moderación, edits de geo o tracking de conversión roto — no solo la puja.",
        "Compara periodos con estacionalidad y promos en mente. Una semana buena no prueba un óptimo; un bajón no es motivo para reescribir todas las campañas en un día.",
      ],
      lists: [
        {
          intro: "Antes de concluir, revisa:",
          items: [
            "estado del anuncio y extensiones",
            "presupuesto restante y caps diarios",
            "geo y horario",
            "corrección de goals en Metrika y Direct",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Yandex Metrika",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Plan de optimización de campaña",
      level: 2,
      paras: [
        "Primero goals y estructura, luego términos de búsqueda y negativos, luego copy y landings, y solo entonces pujas agresivas. Registra cada cambio.",
        "Tras datos suficientes, quédate con decisiones que mejoren CPA o ingresos — no las que solo restauran la sensación familiar de «otra vez estamos arriba».",
      ],
      lists: [
        {
          intro: "Secuencia:",
          items: [
            "fijar goals y un CPA aceptable",
            "revisar términos de búsqueda",
            "arreglar ads y landings",
            "ajustar la estrategia con datos",
            "revisitar el bloque alto solo a través de la economía",
          ],
        },
      ],
    },
    {
      title: "Cómo hablar con el cliente",
      level: 2,
      paras: [
        "Un cliente de la era del emplazamiento especial a menudo quiere garantía del primer puesto. Respuesta honesta: la subasta, los competidores y la calidad cambian cada día; vendemos resultados (leads, ventas), no la etiqueta de un bloque.",
        "Muestra un informe: gasto, conversiones, CPA, ejemplos de leads. Si el premium es caro y no se paga — argumenta una puja más baja o una oferta mejor, no «hay que estar en especial».",
      ],
      lists: [
        {
          intro: "En el informe al cliente:",
          items: [
            "goals del periodo",
            "números y calidad del lead",
            "qué cambiaste y por qué",
            "qué revisarás la semana que viene",
          ],
        },
      ],
      links: [
        {
          label: "Informe al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
      notes: [
        {
          title: "SEO en paralelo",
          kind: "tip",
          text: "El paid search cubre demanda rápido. El orgánico de un núcleo es un horizonte aparte: prep alrededor de un mes; la cuota del núcleo en primera página suele planificarse a dos–seis meses de trabajo tras el arranque.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "reklamnyy-kabinet",
    "klyuchi-google-ads",
    "metrika-tseli",
    "otchet-klientu",
    "tekst-lendinga",
  ],
};

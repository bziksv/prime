import type { BlogPost } from "../../../data/blog";

/** EN overlay for prognoz-trafika — same structure as RU JSON. */
export const prognozTrafikaEn: BlogPost = {
  slug: "prognoz-trafika",
  title: "Website traffic forecast: how to estimate SEO potential",
  date: "2019-10-17",
  category: "Digital marketing",
  cover: "/images/blog/prognoz-trafika/cover-en.webp",
  excerpt:
    "How to estimate potential organic traffic: keyword set, frequency, realistic positions, and CTR — without the illusion of an “exact” forecast and without swapping prep for page-one rankings.",
  lead: [
    "Owners want a number: “how many visits will SEO bring?” There’s no exact answer: seasonality, competition, and demand shift. But you can estimate approximate potential — enough not to plan on maybe.",
    "Below: the estimation logic — keyword set → frequency → expected positions → CTR by SERP place → sum. Site prep for promotion and page-one visibility for the keyword set are different horizons: rankings are planned over 2–6 months after work starts.",
  ],
  faq: [
    {
      q: "Can I forecast traffic exactly?",
      a: "No. There’s a model with assumptions. Use a range and scenarios (cautious / base), not one “guaranteed” figure.",
    },
    {
      q: "How does an SEO forecast differ from Google Ads?",
      a: "In Ads the planner leans on auction and bids. In SEO — on demand, competition, and achievable positions. Different models.",
    },
    {
      q: "Is summing keyword frequencies enough?",
      a: "No. You must account for duplicates and merged queries, click share by position, and that you won’t take page one across the whole set at once.",
    },
    {
      q: "Why not sum “buy car” and “car buy”?",
      a: "Planners often show the same demand pool. Adding them double-counts.",
    },
    {
      q: "When should I forecast — before launch or on a live site?",
      a: "Both. At strategy stage — order of magnitude; on a live site — check against fact and find growth points.",
    },
    {
      q: "Is a forecast the same as time to page one?",
      a: "No. A forecast is visit potential at certain positions. Time to build rankings for the keyword set is separate — usually planned 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Why estimate if accuracy isn’t perfect",
      level: 2,
      paras: [
        "An approximate estimate answers practical questions: what traffic order is realistic, where to put content and budget, which clusters to pull first. Without a model it’s easy to promise “a million” or, conversely, underrate a niche.",
        "Unpredictable factors (updates, season, new competitors) remain. So a forecast is a decision cue — not a contractual visit guarantee.",
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Four pillars of the model",
      level: 2,
      paras: [
        "A working scheme comes down to four blocks: relevant queries, demand volume for each, expected position (or a position corridor), and CTR for those positions. Then — the sum of expected clicks across the keyword set.",
        "On large sites you may calculate priority sections and extrapolate — accuracy falls, order of magnitude usually holds.",
      ],
      lists: [
        {
          intro: "Inputs:",
          items: [
            "keyword set / clusters",
            "frequency (no double counting)",
            "achievable position estimate",
            "CTR by SERP place",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Step-by-step calculation",
      level: 2,
      paras: [
        "Gather queries from demand stats, not “as the owner feels.” Planners and keyword tools give frequency order of magnitude but poorly catch season and sometimes merge close phrasings — don’t sum duplicates.",
        "Estimate competition: who’s on page one now, how heavy the landings are. That decides whether to assume positions 1–3, 1–5, or 1–10 in scenarios. CTR doesn’t fall linearly: the gap between 2nd and 10th is multiplicative, not “a bit less.”",
        "For each cluster: frequency × expected position CTR (or a corridor average) = expected visits. Sum across the keyword set. You get a ceiling under the chosen position scenario — not tomorrow’s analytics fact.",
      ],
      lists: [
        {
          intro: "Step order:",
          items: [
            "keyword set and clusters",
            "clean frequency",
            "position scenario",
            "CTR and click sum",
            "check against fact (if the site is live)",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t confuse “potential at positions 1–3 across the whole set” with a quarterly plan. Prep is about a month. Building rankings across the set is planned 2–6 months — page-one share grows gradually.",
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "How to read the result",
      level: 2,
      paras: [
        "The model’s output is growth points: which clusters drive most volume, where positions are already close and you need CTR/snippet work, where the keyword set is thin. Sometimes it’s better to strengthen 20 phrases near positions 8–10 than spray across hundreds of zeros.",
        "Check the forecast against actual traffic and visibility. A big gap is a signal: wrong positions in the model, cannibalization, tech issues, or inflated frequency. Then you fix the model and priorities — not “more budget at random.”",
      ],
      lists: [
        {
          intro: "After the calculation, lock:",
          items: [
            "cautious and base scenarios",
            "priority clusters",
            "what blocks fact from catching the model",
            "work horizon separate from the visit figure",
          ],
        },
      ],
    },
  ],
  closing: [
    "An SEO traffic forecast is a demand-and-positions model, not a visit promise. Count the keyword set honestly, use realistic CTR and scenarios — and separate potential from time to page one.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "istochniki-trafika",
    "analiz-konkurentov",
    "effektivnost-seo",
    "snizhenie-trafika",
  ],
};

/** ES overlay for prognoz-trafika — same structure as RU JSON / EN. */
export const prognozTrafikaEs: BlogPost = {
  slug: "prognoz-trafika",
  title: "Pronóstico de tráfico web: cómo estimar el potencial SEO",
  date: "2019-10-17",
  category: "Digital marketing",
  cover: "/images/blog/prognoz-trafika/cover-es.webp",
  excerpt:
    "Cómo estimar el tráfico orgánico potencial: conjunto de keywords, frecuencia, posiciones realistas y CTR — sin la ilusión de un pronóstico «exacto» y sin confundir la preparación con aparecer en la primera página.",
  lead: [
    "Los dueños quieren un número: «¿cuántas visitas traerá el SEO?». No hay respuesta exacta: estacionalidad, competencia y demanda se mueven. Pero puedes estimar un potencial aproximado — suficiente para no planear a ciegas.",
    "Abajo: la lógica de estimación — conjunto de keywords → frecuencia → posiciones esperadas → CTR por puesto en la SERP → suma. La preparación del sitio para promocionar y la visibilidad en primera página del conjunto son horizontes distintos: las posiciones se planean a 2–6 meses tras empezar el trabajo.",
  ],
  faq: [
    {
      q: "¿Se puede pronosticar el tráfico con exactitud?",
      a: "No. Hay un modelo con supuestos. Usa un rango y escenarios (prudente / base), no una cifra «garantizada».",
    },
    {
      q: "¿En qué se diferencia un pronóstico SEO de Google Ads?",
      a: "En Ads el planificador se apoya en subasta y pujas. En SEO — en demanda, competencia y posiciones alcanzables. Modelos distintos.",
    },
    {
      q: "¿Basta sumar las frecuencias de las keywords?",
      a: "No. Hay que contar duplicados y consultas fusionadas, la cuota de clic por posición y que no vas a llevar a primera página todo el conjunto de golpe.",
    },
    {
      q: "¿Por qué no sumar «comprar coche» y «coche comprar»?",
      a: "Los planificadores a menudo muestran el mismo pool de demanda. Sumarlos cuenta dos veces.",
    },
    {
      q: "¿Cuándo pronosticar — antes del lanzamiento o en un sitio vivo?",
      a: "En ambos. En estrategia — orden de magnitud; en un sitio vivo — contrastar con el hecho y hallar puntos de crecimiento.",
    },
    {
      q: "¿Un pronóstico es lo mismo que el tiempo hasta la primera página?",
      a: "No. Un pronóstico es potencial de visitas a ciertas posiciones. El tiempo para construir rankings del conjunto es aparte — suele planearse a 2–6 meses.",
    },
  ],
  sections: [
    {
      title: "Por qué estimar si la precisión no es perfecta",
      level: 2,
      paras: [
        "Una estimación aproximada responde preguntas prácticas: qué orden de tráfico es realista, dónde poner contenido y presupuesto, qué clusters priorizar primero. Sin modelo es fácil prometer «un millón» o, al revés, infravalorar un nicho.",
        "Quedan factores imprevisibles (updates, temporada, nuevos competidores). Así que un pronóstico es una pista para decidir — no una garantía contractual de visitas.",
      ],
      links: [
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
        {
          label: "Caída de tráfico",
          href: "/es/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Cuatro pilares del modelo",
      level: 2,
      paras: [
        "Un esquema que funciona se reduce a cuatro bloques: consultas relevantes, volumen de demanda de cada una, posición esperada (o un corredor de posiciones) y CTR para esas posiciones. Luego — la suma de clics esperados del conjunto de keywords.",
        "En sitios grandes puedes calcular secciones prioritarias y extrapolar — baja la precisión, el orden de magnitud suele mantenerse.",
      ],
      lists: [
        {
          intro: "Inputs:",
          items: [
            "conjunto de keywords / clusters",
            "frecuencia (sin doble conteo)",
            "estimación de posición alcanzable",
            "CTR por puesto en la SERP",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Cálculo paso a paso",
      level: 2,
      paras: [
        "Reúne consultas desde estadísticas de demanda, no «como siente el dueño». Planificadores y herramientas de keywords dan orden de magnitud de frecuencia pero captan mal la temporada y a veces fusionan formulaciones cercanas — no sumes duplicados.",
        "Estima la competencia: quién está en primera página ahora, qué tan pesadas son las landings. Eso decide si asumir posiciones 1–3, 1–5 o 1–10 en los escenarios. El CTR no cae de forma lineal: el hueco entre el 2.º y el 10.º es multiplicativo, no «un poco menos».",
        "Por cada cluster: frecuencia × CTR de la posición esperada (o la media de un corredor) = visitas esperadas. Suma el conjunto. Obtienes un techo bajo el escenario de posiciones elegido — no el hecho de analytics de mañana.",
      ],
      lists: [
        {
          intro: "Orden de pasos:",
          items: [
            "conjunto de keywords y clusters",
            "frecuencia limpia",
            "escenario de posiciones",
            "CTR y suma de clics",
            "contraste con el hecho (si el sitio está vivo)",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No confundas «potencial en posiciones 1–3 de todo el conjunto» con un plan trimestral. La preparación es ~1 mes. Construir rankings del conjunto se planea a 2–6 meses — la cuota en primera página crece poco a poco.",
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "Cómo leer el resultado",
      level: 2,
      paras: [
        "La salida del modelo son puntos de crecimiento: qué clusters mueven más volumen, dónde las posiciones ya están cerca y hace falta trabajo de CTR/snippet, dónde el conjunto es fino. A veces es mejor reforzar 20 frases cerca de las posiciones 8–10 que dispersarse en cientos de ceros.",
        "Contrasta el pronóstico con el tráfico y la visibilidad reales. Un hueco grande es señal: posiciones mal puestas en el modelo, canibalización, problemas técnicos o frecuencia inflada. Entonces corriges el modelo y las prioridades — no «más presupuesto al azar».",
      ],
      lists: [
        {
          intro: "Tras el cálculo, fija:",
          items: [
            "escenarios prudente y base",
            "clusters prioritarios",
            "qué bloquea que el hecho alcance el modelo",
            "horizonte de trabajo aparte de la cifra de visitas",
          ],
        },
      ],
    },
  ],
  closing: [
    "Un pronóstico de tráfico SEO es un modelo de demanda y posiciones, no una promesa de visitas. Cuenta el conjunto de keywords con honestidad, usa CTR y escenarios realistas — y separa el potencial del tiempo hasta la primera página.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "istochniki-trafika",
    "analiz-konkurentov",
    "effektivnost-seo",
    "snizhenie-trafika",
  ],
};

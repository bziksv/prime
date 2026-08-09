import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-marketing-metrika — same structure as RU JSON. */
export const kontentMarketingMetrikaEn: BlogPost = {
  slug: "kontent-marketing-metrika",
  title: "Content marketing in Yandex Metrica: which reports to watch",
  date: "2018-10-15",
  category: "Content marketing",
  cover: "/images/blog/kontent-marketing-metrika/cover-en.webp",
  excerpt:
    "How to analyze content marketing in Yandex Metrica: visits and engagement, maps, sources, goals and conversions — without bounce cults and one-off spikes after publish.",
  lead: [
    "A content strategy without numbers quickly becomes “we post because everyone does.” Metrica will not replace editorial judgment, but it shows which pieces people read, where they come from, and whether they reach a goal.",
    "Below: a practical reporting loop — traffic and engagement, judging a piece, sources, conversions. Which KPIs to pick in principle is in the content-marketing analytics article; here the focus is what to watch in the Metrica dashboard. Menu labels update — go by what each report means.",
  ],
  faq: [
    {
      q: "How is this different from the content metrics article?",
      a: "That one covers KPI sets and evaluation logic. This covers how to pull those signals via Metrica reports and goals.",
    },
    {
      q: "Does a high bounce rate mean a bad article?",
      a: "Not always. A short answer to an informational query can finish the job in a minute. Read the bundle: bounce + time + scroll + goal.",
    },
    {
      q: "Does a scroll map mean people finished reading?",
      a: "Approximately. Someone may scroll without reading. Add a goal for an end anchor / time on page or a read-through event.",
    },
    {
      q: "Which reporting period should I use?",
      a: "For blog trends — several months so one spike does not warp the picture. Editorial ops — weekly.",
    },
    {
      q: "Are visits enough without goals?",
      a: "For “write and forget” — no. Without goals and UTM you cannot tell useful traffic from noise.",
    },
  ],
  sections: [
    {
      title: "Content goal first — reports later",
      level: 2,
      paras: [
        "Before the dashboard, lock why the piece exists: lead, signup, SEO cluster support, warm-up to purchase. The goal decides success — URL visit, finish reading, CTA click, or micro-conversion.",
        "Without a goal Metrica shows pretty charts without a decision. Chain: business goal → Metrica goal → report that explains it.",
      ],
      lists: [
        {
          intro: "Minimum before analysis:",
          items: [
            "working counter on templates",
            "1–3 goals for content",
            "UTM on newsletters and paid traffic",
            "list of key blog / guide URLs",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Traffic and engagement",
      level: 2,
      paras: [
        "Traffic reports show visit dynamics by day and source. Compare periods (week to week, month to month) and watch dips next to publishes, seasonality, and site outages.",
        "Engagement: bounce, time on site, depth. In Metrica bounce is a short visit with few pageviews (threshold may be refined in Help). Rising bounce on an article can be bad UX or a “fast answer” — read it in query-type context.",
      ],
      lists: [
        {
          intro: "What to watch per article:",
          items: [
            "visits to the URL and post-publish dynamics",
            "time and depth",
            "bounce share vs similar pieces",
            "return visits / loyalty when available",
          ],
        },
      ],
      notes: [
        {
          title: "Don’t fix strategy in one day",
          kind: "tip",
          text: "A one-off spike after a social reshare is not a lasting effect. Watch the trend over weeks and months.",
        },
      ],
    },
    {
      title: "Maps, scroll, and “did they finish?”",
      level: 2,
      paras: [
        "Scroll and click maps hint how far people go and where they press. CTA zones, TOC, and tables are good check candidates. Data is coarse: scroll ≠ attentive reading.",
        "More precise — a goal on an end-of-article anchor, a “read N%” event, or time on page. That separates “scrolled past” from “reached the takeaway.”",
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Shares, likes, and comments",
      level: 2,
      paras: [
        "Share buttons, social counters, and comments are interest signals — not KPIs by themselves. In Metrica watch share parameter/event reports if clicks are tagged; otherwise use platform stats as a supplement.",
        "Comments help qualitatively: tone, questions, objections. Reply — loyalty and fuel for next pieces. On-site “like/dislike” is a rough poll, not a conversion substitute.",
      ],
    },
    {
      title: "Where the reader comes from",
      level: 2,
      paras: [
        "Traffic sources show what to grow: search, direct, social, email, referral. Organic growth on useful URLs signals the cluster and content work; a drop at the same publish volume is a reason to check indexing and cannibalization.",
        "Compare sources not only by visits but by goals: cheap traffic without leads loses to smaller but targeted volume.",
      ],
      lists: [
        {
          intro: "Practical monthly review:",
          items: [
            "top URLs by visits and by conversions",
            "sources → goal",
            "high-traffic pieces with a weak CTA",
            "what to amplify in distribution, what to rewrite",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Indexing check",
          href: "/en/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "Conversions and strategy success",
      level: 2,
      paras: [
        "Content success is goal-completion rate on key URLs and contribution to assisted conversions. Rough ROI: effect (leads/revenue) vs production and distribution cost.",
        "Change strategy in steps: hypothesis → headline/CTA/structure fix → measure again. A global editorial redesign without data often breaks what already worked.",
      ],
      lists: [
        {
          intro: "Ten analysis anchors (meaning checklist):",
          items: [
            "visit dynamics",
            "engagement",
            "scroll / finish reading",
            "shares and response",
            "comments",
            "sources",
            "top successful pieces",
            "conversions by goals",
            "period comparison",
            "decisions: amplify / rewrite / drop from the plan",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Metrica for content is a bundle of traffic, map, source, and goal reports under a pre-chosen KPI. Bounce and likes alone do not answer “does the strategy work.”",
        "A long trend horizon + weekly editorial ops + data-driven spot fixes beat one-off spikes after a reshare.",
      ],
    },
  ],
  closing: [
    "Set content goals in Metrica, pull a report on key URLs and sources over several months — and edit the plan by conversions and finish-reading, not by one day with a visit peak.",
  ],
  related: [
    "analitika-kontent-marketinga",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-plan",
    "proverka-indeksatsii",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for kontent-marketing-metrika — same structure as RU JSON / EN. */
export const kontentMarketingMetrikaEs: BlogPost = {
  slug: "kontent-marketing-metrika",
  title: "Content marketing en Yandex Metrica: qué informes mirar",
  date: "2018-10-15",
  category: "Content marketing",
  cover: "/images/blog/kontent-marketing-metrika/cover.webp",
  excerpt:
    "Cómo analizar content marketing en Yandex Metrica: visitas y engagement, mapas, fuentes, metas y conversiones — sin culto al bounce ni picos sueltos tras publicar.",
  lead: [
    "Una estrategia de contenido sin números se convierte rápido en «publicamos porque todos lo hacen». Metrica no sustituye el criterio editorial, pero muestra qué piezas se leen, de dónde vienen y si llegan a una meta.",
    "Abajo: un loop práctico de reporting — tráfico y engagement, juzgar una pieza, fuentes, conversiones. Qué KPIs elegir en principio está en el artículo de analítica de content marketing; aquí el foco es qué mirar en el dashboard de Metrica. Las etiquetas del menú cambian — ve por lo que significa cada informe.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo de métricas de contenido?",
      a: "Aquel cubre sets de KPI y lógica de evaluación. Este cubre cómo sacar esas señales vía informes y metas de Metrica.",
    },
    {
      q: "¿Un bounce alto significa un artículo malo?",
      a: "No siempre. Una respuesta corta a una query informativa puede cerrar el trabajo en un minuto. Lee el paquete: bounce + tiempo + scroll + meta.",
    },
    {
      q: "¿Un mapa de scroll significa que terminaron de leer?",
      a: "Aprox. Alguien puede hacer scroll sin leer. Añade una meta en un ancla final / tiempo en página o un evento de lectura completa.",
    },
    {
      q: "¿Qué periodo de reporting usar?",
      a: "Para tendencias del blog — varios meses para que un pico no tuerza la foto. Ops editorial — semanal.",
    },
    {
      q: "¿Bastan las visitas sin metas?",
      a: "Para «escribir y olvidar» — no. Sin metas y UTM no distingues tráfico útil de ruido.",
    },
  ],
  sections: [
    {
      title: "Primero la meta del contenido — luego los informes",
      level: 2,
      paras: [
        "Antes del dashboard, fija por qué existe la pieza: lead, registro, soporte de cluster SEO, calentamiento a compra. La meta decide el éxito — visita a URL, terminar de leer, clic en CTA o microconversión.",
        "Sin meta, Metrica muestra gráficos bonitos sin decisión. Cadena: meta de negocio → meta de Metrica → informe que la explica.",
      ],
      lists: [
        {
          intro: "Mínimo antes del análisis:",
          items: [
            "contador funcionando en las plantillas",
            "1–3 metas para contenido",
            "UTM en newsletters y tráfico de pago",
            "lista de URLs clave del blog / guías",
          ],
        },
      ],
      links: [
        {
          label: "Analítica de content marketing",
          href: "/es/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Metas en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Tráfico y engagement",
      level: 2,
      paras: [
        "Los informes de tráfico muestran la dinámica de visitas por día y fuente. Compara periodos (semana a semana, mes a mes) y mira caídas junto a publicaciones, estacionalidad y caídas del sitio.",
        "Engagement: bounce, tiempo en el sitio, profundidad. En Metrica el bounce es una visita corta con pocas pageviews (el umbral puede afinarse en Help). Un bounce al alza en un artículo puede ser UX mala o una «respuesta rápida» — léelo en contexto del tipo de query.",
      ],
      lists: [
        {
          intro: "Qué mirar por artículo:",
          items: [
            "visitas a la URL y dinámica post-publicación",
            "tiempo y profundidad",
            "cuota de bounce vs piezas similares",
            "visitas de retorno / lealtad cuando esté disponible",
          ],
        },
      ],
      notes: [
        {
          title: "No fijes estrategia en un día",
          kind: "tip",
          text: "Un pico suelto tras un reshare en redes no es un efecto duradero. Mira la tendencia en semanas y meses.",
        },
      ],
    },
    {
      title: "Mapas, scroll y «¿terminaron?»",
      level: 2,
      paras: [
        "Los mapas de scroll y clics insinúan hasta dónde llegan y dónde pulsan. Zonas de CTA, TOC y tablas son buenos candidatos a revisar. Los datos son gruesos: scroll ≠ lectura atenta.",
        "Más preciso — una meta en un ancla al final del artículo, un evento «leyó N%» o tiempo en página. Eso separa «pasó de largo» de «llegó al takeaway».",
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Shares, likes y comentarios",
      level: 2,
      paras: [
        "Botones de share, contadores sociales y comentarios son señales de interés — no KPIs por sí solos. En Metrica mira informes de parámetros/eventos de share si los clics están etiquetados; si no, usa stats de plataforma como complemento.",
        "Los comentarios ayudan en cualitativo: tono, preguntas, objeciones. Responde — lealtad y combustible para las siguientes piezas. El «like/dislike» on-site es una encuesta gruesa, no un sustituto de conversión.",
      ],
    },
    {
      title: "De dónde viene el lector",
      level: 2,
      paras: [
        "Las fuentes de tráfico muestran qué crecer: búsqueda, directo, social, email, referral. El crecimiento orgánico en URLs útiles señala el trabajo de cluster y contenido; una caída con el mismo volumen de publicación es motivo para revisar indexación y canibalización.",
        "Compara fuentes no solo por visitas sino por metas: tráfico barato sin leads pierde frente a un volumen menor pero más dirigido.",
      ],
      lists: [
        {
          intro: "Revisión mensual práctica:",
          items: [
            "URLs líderes por visitas y por conversiones",
            "fuentes → meta",
            "piezas de alto tráfico con CTA débil",
            "qué amplificar en distribución, qué reescribir",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
        {
          label: "Comprobar indexación",
          href: "/es/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "Conversiones y éxito de la estrategia",
      level: 2,
      paras: [
        "El éxito del contenido es la tasa de cumplimiento de meta en URLs clave y la contribución a conversiones asistidas. ROI aproximado: efecto (leads/ingresos) vs coste de producción y distribución.",
        "Cambia la estrategia por pasos: hipótesis → arreglo de titular/CTA/estructura → mide otra vez. Un rediseño editorial global sin datos a menudo rompe lo que ya funcionaba.",
      ],
      lists: [
        {
          intro: "Diez anclas de análisis (checklist de sentido):",
          items: [
            "dinámica de visitas",
            "engagement",
            "scroll / terminar de leer",
            "shares y respuesta",
            "comentarios",
            "fuentes",
            "piezas más exitosas",
            "conversiones por metas",
            "comparación de periodos",
            "decisiones: amplificar / reescribir / sacar del plan",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Metrica para contenido es un paquete de informes de tráfico, mapa, fuente y meta bajo un KPI elegido de antemano. Bounce y likes solos no responden «¿funciona la estrategia?».",
        "Un horizonte largo de tendencia + ops editorial semanal + arreglos puntuales guiados por datos ganan a picos sueltos tras un reshare.",
      ],
    },
  ],
  closing: [
    "Define metas de contenido en Metrica, saca un informe de URLs clave y fuentes a lo largo de varios meses — y edita el plan por conversiones y lectura completa, no por un día con pico de visitas.",
  ],
  related: [
    "analitika-kontent-marketinga",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-plan",
    "proverka-indeksatsii",
    "skvoznaya-analitika",
  ],
};

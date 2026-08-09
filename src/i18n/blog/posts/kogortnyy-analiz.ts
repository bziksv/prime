import type { BlogPost } from "../../../data/blog";

/** EN overlay for kogortnyy-analiz — same structure as RU JSON. */
export const kogortnyyAnalizEn: BlogPost = {
  slug: "kogortnyy-analiz",
  title: "Cohort analysis in marketing: what it is and why it matters",
  date: "2019-12-23",
  category: "Analytics",
  cover: "/images/blog/kogortnyy-analiz/cover-en.webp",
  excerpt:
    "What a cohort is and how it differs from a segment: retention, LTV, channel ROI, and reading A/B over time — in Analytics/GA4 and spreadsheets, without promising “automatic magic.”",
  lead: [
    "Cohort analysis compares groups of people who did the same action in the same period — first session, first purchase, install — and watches how a metric changes over time.",
    "Below: definitions, how a cohort differs from a segment, and why cohorts matter for channels, LTV/ROI, and tests. Google Analytics Universal had a dedicated report; in GA4 cohorts live in Explorations and related reports — check tab names in the current UI.",
  ],
  faq: [
    {
      q: "How is a cohort different from a segment?",
      a: "A cohort is one unifying trait plus a start time (everyone who bought in January). A segment can combine many traits at once (spent >$100 and live in London).",
    },
    {
      q: "Which action should start the cohort?",
      a: "Whatever matters to the business: first visit, signup, first purchase, install. That choice defines what retention means.",
    },
    {
      q: "Why use it for ads?",
      a: "To see which channel brings people who return and pay later — not only a cheap first click.",
    },
    {
      q: "Can I run it in GA4?",
      a: "Yes, via Explorations and related reports. Don’t expect a one-to-one Universal Analytics screen from 2019 guides.",
    },
    {
      q: "Do cohorts replace A/B tests?",
      a: "No. A/B compares variants now; cohorts show how a chosen group’s behavior stretches across weeks.",
    },
    {
      q: "Which cohort period should I pick?",
      a: "Day, week, or month — by purchase frequency. Little data — go wider; lots of data — you can go finer.",
    },
    {
      q: "Is LTV from cohorts 100% accurate?",
      a: "It’s an estimate from history. New products and season shift the picture — refresh the calc.",
    },
  ],
  sections: [
    {
      title: "Cohort vs segment",
      level: 2,
      paras: [
        "A cohort is people with one start event in a time window. Then you track one metric (retention, revenue, sessions) by cohort “age”: week 0, 1, 2…",
        "A segment answers “who are they now by a set of properties.” A cohort answers “how do people who started then behave.” Both tools matter; mixing them up is a common brief mistake.",
        "Analyst parameters: start event, cohort window size, observation horizon, comparison metric.",
      ],
      lists: [
        {
          intro: "Example:",
          items: [
            "segment: spent >$100 in January and live in London",
            "cohort: everyone with a first purchase in January (then watch repeat purchases by month)",
          ],
        },
      ],
    },
    {
      title: "Acquisition channels and retention",
      level: 2,
      paras: [
        "Build a “first visits in a month” cohort, slice by channel (paid search, social, organic, email). Compare the share who returned and bought in 1–4 weeks.",
        "A channel with a cheap click but zero retention is often costlier than a slightly more expensive channel with repeat purchases. Cohorts show that better than yesterday’s report.",
        "Weak channels get fixed or cut; strong ones scale carefully — without forgetting lead quality.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "LTV, ROI, and payback over time",
      level: 2,
      paras: [
        "From first-buyer cohorts you compute cumulative revenue and group ARPU. Comparing cohorts from different start months estimates median LTV and room for acquisition cost.",
        "Channel ROI in month one is often understated: the customer is still in the funnel. A monthly cohort view shows when payback catches up — important for long deal cycles.",
        "The formulas stay the same — (revenue − cost) / cost; the value is the time and channel cut — not one “launch = success” cell.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Without full-funnel analytics and CRM, revenue cohorts will be incomplete — at least join leads and payments.",
        },
      ],
    },
    {
      title: "Apps, A/B, and seasonality",
      level: 2,
      paras: [
        "For apps, an install cohort plus a source cut helps you not confuse “many installs” with living retention.",
        "A/B gives instant variant conversion; cohorts of A and B users show whether the effect holds weeks later. Otherwise you may pick a design that flared and burned out.",
        "Compare “arrived at New Year” vs “arrived in spring” cohorts: seasonality and promo promises change behavior.",
      ],
    },
    {
      title: "Where to look and how not to overcomplicate",
      level: 2,
      paras: [
        "In GA4 — Explorations (cohort template, funnels, path), plus exports to Sheets or BI when needed. Don’t expect “Google Sheets will calculate everything” without your model.",
        "Start with one retention metric and one channel cut. When the team can read the table — add LTV and tests.",
        "Cohorts don’t replace daily CPA control: they’re a mid- and long-horizon view next to operational paid search.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "one start event plus time",
            "a metric over time — not only “yesterday”",
            "compare channels by retention and LTV",
            "GA4 is not a Universal Analytics 2019 screenshot",
            "A/B plus cohorts beat either alone",
          ],
        },
      ],
      links: [
        {
          label: "GA4 (Google Analytics 4)",
          href: "/en/blog/ga4/",
        },
      ],
    },
  ],
  closing: [
    "Build one first-visit cohort for last month, slice by channel, and watch retention at 2–4 weeks — the fastest way to separate cheap traffic from traffic that pays again.",
  ],
  related: [
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
    "ga4",
    "utm-metki",
    "zabluzhdeniya-konteksta",
    "mediaplan",
  ],
};

/** ES overlay for kogortnyy-analiz — same structure as RU JSON / EN. */
export const kogortnyyAnalizEs: BlogPost = {
  slug: "kogortnyy-analiz",
  title: "Análisis de cohortes en marketing: qué es y por qué importa",
  date: "2019-12-23",
  category: "Analytics",
  cover: "/images/blog/kogortnyy-analiz/cover.webp",
  excerpt:
    "Qué es una cohorte y en qué se diferencia de un segmento: retención, LTV, ROI por canal y lectura de A/B en el tiempo — en Analytics/GA4 y hojas, sin prometer «magia automática».",
  lead: [
    "El análisis de cohortes compara grupos de personas que hicieron la misma acción en el mismo periodo — primera sesión, primera compra, install — y observa cómo cambia una métrica con el tiempo.",
    "Abajo: definiciones, en qué se diferencia una cohorte de un segmento y por qué las cohortes importan para canales, LTV/ROI y tests. Google Analytics Universal tenía un informe dedicado; en GA4 las cohortes viven en Explorations e informes relacionados — revisa los nombres de pestaña en la UI actual.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una cohorte de un segmento?",
      a: "Una cohorte es un rasgo unificador más un momento de inicio (todos los que compraron en enero). Un segmento puede combinar muchos rasgos a la vez (gastó >$100 y vive en Londres).",
    },
    {
      q: "¿Qué acción debe iniciar la cohorte?",
      a: "La que importe al negocio: primera visita, signup, primera compra, install. Esa elección define qué significa retención.",
    },
    {
      q: "¿Por qué usarlo para ads?",
      a: "Para ver qué canal trae gente que vuelve y paga después — no solo un primer clic barato.",
    },
    {
      q: "¿Puedo hacerlo en GA4?",
      a: "Sí, vía Explorations e informes relacionados. No esperes una pantalla uno a uno de Universal Analytics de las guías de 2019.",
    },
    {
      q: "¿Las cohortes sustituyen los tests A/B?",
      a: "No. El A/B compara variantes ahora; las cohortes muestran cómo se estira el comportamiento de un grupo elegido a lo largo de semanas.",
    },
    {
      q: "¿Qué periodo de cohorte elijo?",
      a: "Día, semana o mes — según la frecuencia de compra. Poco dato — más amplio; mucho dato — puedes ir más fino.",
    },
    {
      q: "¿El LTV de cohortes es 100% exacto?",
      a: "Es una estimación desde la historia. Productos nuevos y temporada cambian la foto — refresca el cálculo.",
    },
  ],
  sections: [
    {
      title: "Cohorte vs segmento",
      level: 2,
      paras: [
        "Una cohorte son personas con un evento de inicio en una ventana de tiempo. Luego sigues una métrica (retención, ingresos, sesiones) por «edad» de cohorte: semana 0, 1, 2…",
        "Un segmento responde «quiénes son ahora por un conjunto de propiedades». Una cohorte responde «cómo se comportan quienes empezaron entonces». Ambos importan; mezclarlos es un error frecuente del brief.",
        "Parámetros del analista: evento de inicio, tamaño de ventana de cohorte, horizonte de observación, métrica de comparación.",
      ],
      lists: [
        {
          intro: "Ejemplo:",
          items: [
            "segmento: gastó >$100 en enero y vive en Londres",
            "cohorte: todos con primera compra en enero (luego miras compras repetidas por mes)",
          ],
        },
      ],
    },
    {
      title: "Canales de adquisición y retención",
      level: 2,
      paras: [
        "Arma una cohorte de «primeras visitas en un mes», córtala por canal (paid search, social, organic, email). Compara la cuota que volvió y compró en 1–4 semanas.",
        "Un canal con clic barato pero retención cero a menudo sale más caro que uno un poco más caro con compras repetidas. Las cohortes lo muestran mejor que el informe de ayer.",
        "Los canales flojos se arreglan o se cortan; los fuertes se escalan con cuidado — sin olvidar la calidad del lead.",
      ],
      links: [
        {
          label: "Métricas de ads",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "LTV, ROI y payback en el tiempo",
      level: 2,
      paras: [
        "Desde cohortes de primeros compradores calculas ingreso acumulado y ARPU del grupo. Comparar cohortes de distintos meses de inicio estima el LTV mediano y el margen para coste de adquisición.",
        "El ROI del canal en el mes uno a menudo se queda corto: el cliente aún está en el funnel. Una vista mensual de cohorte muestra cuándo alcanza el payback — importante en ciclos de venta largos.",
        "Las fórmulas siguen igual — (ingresos − coste) / coste; el valor está en el corte por tiempo y canal — no en una celda «lanzamiento = éxito».",
      ],
      notes: [
        {
          kind: "tip",
          text: "Sin analítica de funnel completo y CRM, las cohortes de ingresos quedarán incompletas — al menos une leads y pagos.",
        },
      ],
    },
    {
      title: "Apps, A/B y estacionalidad",
      level: 2,
      paras: [
        "En apps, una cohorte de installs más un corte por fuente ayuda a no confundir «muchos installs» con retención viva.",
        "El A/B da conversión instantánea de variante; las cohortes de usuarios A y B muestran si el efecto se sostiene semanas después. Si no, puedes elegir un diseño que brilló y se apagó.",
        "Compara cohortes «llegaron en Año Nuevo» vs «llegaron en primavera»: la estacionalidad y las promesas de promo cambian el comportamiento.",
      ],
    },
    {
      title: "Dónde mirar y cómo no complicarlo de más",
      level: 2,
      paras: [
        "En GA4 — Explorations (plantilla de cohortes, funnels, path), más exports a Sheets o BI cuando haga falta. No esperes que «Google Sheets lo calcule todo» sin tu modelo.",
        "Empieza con una métrica de retención y un corte por canal. Cuando el equipo sepa leer la tabla — añade LTV y tests.",
        "Las cohortes no sustituyen el control diario de CPA: son una vista de medio y largo horizonte junto al paid search operativo.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "un evento de inicio más tiempo",
            "una métrica en el tiempo — no solo «ayer»",
            "compara canales por retención y LTV",
            "GA4 no es un screenshot de Universal Analytics 2019",
            "A/B más cohortes gana a cualquiera solo",
          ],
        },
      ],
      links: [
        {
          label: "GA4 (Google Analytics 4)",
          href: "/es/blog/ga4/",
        },
      ],
    },
  ],
  closing: [
    "Arma una cohorte de primera visita del mes pasado, córtala por canal y mira retención a 2–4 semanas — la forma más rápida de separar tráfico barato del que vuelve a pagar.",
  ],
  related: [
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
    "ga4",
    "utm-metki",
    "zabluzhdeniya-konteksta",
    "mediaplan",
  ],
};

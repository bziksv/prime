import type { BlogPost } from "../../../data/blog";

/** EN overlay for effektivnost-seo — same structure as RU JSON. */
export const effektivnostSeoEn: BlogPost = {
  slug: "effektivnost-seo",
  title: "How to measure SEO effectiveness: KPIs and reporting",
  date: "2019-07-03",
  category: "SEO",
  cover: "/images/blog/effektivnost-seo/cover-en.webp",
  excerpt:
    "Organic, brand/non-brand, ranks, and economics: which KPIs to watch, how to compare periods, and how not to confuse site prep with instant page-one rankings.",
  lead: [
    "SEO rarely gives you a “results button” next week. To know whether the channel works, you need KPIs agreed up front: organic volume and quality, a brand/non-brand cut, rank movement on the keyword set, and a clear link to leads and revenue.",
    "Below: a practical evaluation frame for both client and vendor. The first noticeable shifts in the keyword set usually show up around 2–3 months of steady work; page-one visibility is planned for 2–6 months — prep weeks are not the same as ranking timelines.",
  ],
  faq: [
    {
      q: "Where should I start an SEO report?",
      a: "Organic (visits/users), search goals/conversions, visibility or page-one share of the keyword set, brand vs non-brand, SEO spend vs CPA/ROMI. Without analytics goals, the report is blind.",
    },
    {
      q: "Are ranks the main KPI?",
      a: "Important, but not the only one. Watch clusters and the trend; don’t panic over ±2 spots in a day. Business cares more about traffic and organic leads.",
    },
    {
      q: "What comparison period is normal?",
      a: "Use week-over-week for ops, month-over-month and year-over-year for seasonality. Judge SEO on weeks and months — not “yesterday vs. today.”",
    },
    {
      q: "Do I need both Metrika and Analytics?",
      a: "One reliable counter plus Search Console (or Webmaster) is enough. Two tools are fine if the team already lives in both; the key is one attribution method.",
    },
    {
      q: "What brand share is “right”?",
      a: "It depends on niche and maturity. Trend and brand conversion matter more than “25% from an article”. Details are in the branded traffic piece.",
    },
    {
      q: "When should I expect economic effect?",
      a: "After prep and once work starts, ranks and leads build over months. Counting ROMI in week one is pointless; plan on a 2–6 month horizon for the keyword set.",
    },
    {
      q: "What if traffic grows but leads don’t?",
      a: "Check page intent, audience, UX, and goals. Informational traffic growth without commercial URLs is a common vanity-organic trap.",
    },
    {
      q: "How do SEO KPIs differ from paid search?",
      a: "Paid search responds faster and is easier to steer with bids. SEO has more lag, but cost per lead often improves over time with a stable keyword set.",
    },
  ],
  sections: [
    {
      title: "Why lock KPIs upfront",
      level: 2,
      paras: [
        "Without agreed metrics, the client expects “page one tomorrow” and the vendor shows crawl reports — conflict is almost inevitable. KPIs give a shared language: what success means at 30 / 90 / 180 days.",
        "Connect Metrica or Analytics with goals, Search Console (or Webmaster), and a keyword table with priority URLs. Otherwise you’re left with gut feel.",
      ],
      lists: [
        {
          intro: "Base set:",
          items: [
            "organic: visits, users, bounce/engagement",
            "conversions and revenue/leads from organic",
            "brand vs non-brand",
            "ranks / visibility for the keyword set",
            "SEO budget and cost per lead",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Web analyst",
          href: "/en/blog/veb-analitik/",
        },
      ],
    },
    {
      title: "Organic traffic volume",
      level: 2,
      paras: [
        "The clearest cut: Organic Search (or a “free traffic” segment) for the period vs last month/year. Watch not only the total but landings: which URLs pull demand, which stay quiet.",
        "Growth for growth’s sake misleads: bot spikes, a seasonal news hook, or cannibalization can inflate visits without leads. Always keep conversions and quality nearby.",
      ],
      lists: [
        {
          intro: "Report practice:",
          items: [
            "organic month-over-month and year-over-year",
            "highest-traffic search landings",
            "new vs old URLs",
            "exclude clear anomalies (attacks, counter issues)",
          ],
        },
      ],
      links: [
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Branded and non-brand demand",
      level: 2,
      paras: [
        "For known brands, split organic into brand and non-brand: company-name queries find “already yours”; generic phrases bring new demand. Brand-only growth with non-brand falling is a different diagnosis than the reverse.",
        "In Metrica/Analytics — segments or query/page reports; in GSC/Webmaster — brand query cuts. There’s no universal “ideal share”: watch trend and economics.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "brand share of organic",
            "brand visit conversion",
            "non-brand commercial cluster dynamics",
            "brand defense in ads when needed",
          ],
        },
      ],
      links: [
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Ranks and core visibility",
      level: 2,
      paras: [
        "A rank tracker or Webmaster/GSC exports show how the core moves. Judge share of phrases in the first 10 / first 3 results by priority clusters — not one phrase “in the moment”.",
        "Daily 1–3 spot jumps are noise. Panic fits sustained cluster drops, deindexing, or a SERP intent shift.",
      ],
      lists: [
        {
          intro: "In the report lock:",
          items: [
            "priority URL × query list",
            "% of keyword set in the first 10 vs last period",
            "new page-one entries and losses",
            "informational and commercial clusters separately",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Economics: leads, CPA, ROMI",
      level: 2,
      paras: [
        "For business the outcome is leads, sales, and margin — not “green ranks”. Tie SEO spend (work, content, links, tools) to the number and quality of organic leads.",
        "Compare organic CPA with paid search on comparable goals. SEO is slower at the start, but with a stable core often lowers acquisition cost. Don’t demand payback in week one after an audit.",
      ],
      lists: [
        {
          intro: "Finance minimum:",
          items: [
            "period budget",
            "leads/orders from organic",
            "CPA and ROMI when possible",
            "SEO share of total revenue/leads",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "How to read dynamics without panic",
      level: 2,
      paras: [
        "Build a simple rhythm: weekly smoke check (traffic, account errors), monthly KPI review, quarterly core and priority rethink. A couple of spots down on one key isn’t a reason to break the strategy.",
        "If there’s no organic at all — tech and indexing first. If traffic exists but money doesn’t — audience, landings, and offer. SEO effectiveness is a metric bundle, not one chart.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "organic grows, conversions fall",
            "only brand grows, commercial stalls",
            "ranks exist, clicks don’t (snippet/intent)",
            "sharp collapse after a release or breach",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Site prep — usually weeks to about a month. Core ranking buildup after work starts — planned 2–6 months.",
        },
      ],
    },
  ],
  related: [
    "brendovyy-trafik",
    "dashboard",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "optimizatsiya-konversii",
    "veb-analitik",
  ],
};

/** ES overlay for effektivnost-seo — same structure as RU JSON / EN. */
export const effektivnostSeoEs: BlogPost = {
  slug: "effektivnost-seo",
  title: "Cómo medir la eficacia del SEO: KPIs e informes",
  date: "2019-07-03",
  category: "SEO",
  cover: "/images/blog/effektivnost-seo/cover.webp",
  excerpt:
    "Orgánico, brand/non-brand, ranks y economía: qué KPIs mirar, cómo comparar periodos y cómo no confundir la prep del sitio con rankings inmediatos en primera página.",
  lead: [
    "El SEO rara vez te da un «botón de resultados» la semana siguiente. Para saber si el canal funciona, necesitas KPIs acordados de antemano: volumen y calidad del orgánico, un corte brand/non-brand, movimiento de ranks en el set de keywords y un vínculo claro con leads e ingresos.",
    "Abajo: un marco práctico de evaluación para cliente y vendor. Los primeros cambios notables en el set suelen aparecer hacia los 2–3 meses de trabajo constante; la visibilidad en primera página se planifica a 2–6 meses — las semanas de prep no son lo mismo que los plazos de ranking.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo un informe SEO?",
      a: "Orgánico (visitas/usuarios), goals/conversiones de búsqueda, visibilidad o cuota del set en primera página, brand vs non-brand, gasto SEO vs CPA/ROMI. Sin goals en analítica, el informe va a ciegas.",
    },
    {
      q: "¿Los ranks son el KPI principal?",
      a: "Importantes, pero no los únicos. Mira clusters y tendencia; no entres en pánico por ±2 puestos en un día. Al negocio le importan más el tráfico y los leads orgánicos.",
    },
    {
      q: "¿Qué periodo de comparación es normal?",
      a: "Usa semana contra semana para ops, mes contra mes y año contra año para estacionalidad. Juzga el SEO en semanas y meses — no «ayer vs hoy».",
    },
    {
      q: "¿Necesito Metrika y Analytics a la vez?",
      a: "Basta un contador fiable más Search Console (o Webmaster). Dos tools están bien si el equipo ya vive en ambas; la clave es un solo método de atribución.",
    },
    {
      q: "¿Qué cuota de brand es «la correcta»?",
      a: "Depende del nicho y la madurez. La tendencia y la conversión de brand importan más que «25% de un artículo». El detalle está en la pieza de tráfico de marca.",
    },
    {
      q: "¿Cuándo esperar efecto económico?",
      a: "Tras la prep y una vez arranca el trabajo, ranks y leads se construyen en meses. Contar ROMI en la semana uno no tiene sentido; planifica un horizonte de 2–6 meses para el set de keywords.",
    },
    {
      q: "¿Y si el tráfico crece pero los leads no?",
      a: "Revisa intención de página, audiencia, UX y goals. Crecimiento de tráfico informativo sin URLs comerciales es una trampa vanity-orgánica habitual.",
    },
    {
      q: "¿En qué se diferencian los KPIs de SEO del paid search?",
      a: "El paid search responde más rápido y es más fácil de dirigir con pujas. El SEO tiene más lag, pero el coste por lead a menudo mejora con el tiempo con un set estable.",
    },
  ],
  sections: [
    {
      title: "Por qué fijar KPIs de antemano",
      level: 2,
      paras: [
        "Sin métricas acordadas, el cliente espera «primera página mañana» y el vendor enseña informes de crawl — el conflicto es casi inevitable. Los KPIs dan un lenguaje compartido: qué significa el éxito a 30 / 90 / 180 días.",
        "Conecta Metrika o Analytics con goals, Search Console (o Webmaster) y una tabla de keywords con URLs prioritarias. Si no, te quedas con la intuición.",
      ],
      lists: [
        {
          intro: "Set base:",
          items: [
            "orgánico: visitas, usuarios, bounce/engagement",
            "conversiones e ingresos/leads desde orgánico",
            "brand vs non-brand",
            "ranks / visibilidad del set de keywords",
            "presupuesto SEO y coste por lead",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Analista web",
          href: "/es/blog/veb-analitik/",
        },
      ],
    },
    {
      title: "Volumen de tráfico orgánico",
      level: 2,
      paras: [
        "El corte más claro: Organic Search (o un segmento de «tráfico gratis») del periodo vs el mes/año pasado. Mira no solo el total sino las landings: qué URLs tiran demanda, cuáles se quedan calladas.",
        "Crecer por crecer engaña: picos de bots, un gancho de noticias estacional o canibalización pueden inflar visitas sin leads. Mantén siempre conversiones y calidad cerca.",
      ],
      lists: [
        {
          intro: "Práctica de informe:",
          items: [
            "orgánico mes a mes y año a año",
            "landings de búsqueda con más tráfico",
            "URLs nuevas vs viejas",
            "excluir anomalías claras (ataques, fallos del contador)",
          ],
        },
      ],
      links: [
        {
          label: "Tráfico sospechoso de Google",
          href: "/es/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Demanda de marca y non-brand",
      level: 2,
      paras: [
        "En marcas conocidas, parte el orgánico en brand y non-brand: las consultas con nombre de empresa encuentran a «los que ya son tuyos»; las frases genéricas traen demanda nueva. Crecer solo en brand con non-brand cayendo es otro diagnóstico que lo inverso.",
        "En Metrika/Analytics — segmentos o informes de consulta/página; en GSC/Webmaster — cortes de consultas de marca. No hay una «cuota ideal» universal: mira tendencia y economía.",
      ],
      lists: [
        {
          intro: "Qué mirar:",
          items: [
            "cuota de brand en el orgánico",
            "conversión de visitas de brand",
            "dinámica del cluster comercial non-brand",
            "defensa de brand en ads cuando haga falta",
          ],
        },
      ],
      links: [
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Ranks y visibilidad del núcleo",
      level: 2,
      paras: [
        "Un rank tracker o exports de Webmaster/GSC muestran cómo se mueve el núcleo. Juzga la cuota de frases en los primeros 10 / primeros 3 resultados por clusters prioritarios — no una frase «en el momento».",
        "Saltos diarios de 1–3 puestos son ruido. El pánico encaja con caídas sostenidas de cluster, desindexación o un cambio de intención en el SERP.",
      ],
      lists: [
        {
          intro: "En el informe fija:",
          items: [
            "lista URL prioritaria × consulta",
            "% del set de keywords en los primeros 10 vs el periodo anterior",
            "nuevas entradas a primera página y pérdidas",
            "clusters informativos y comerciales por separado",
          ],
        },
      ],
      links: [
        {
          label: "Set de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Economía: leads, CPA, ROMI",
      level: 2,
      paras: [
        "Para el negocio el resultado son leads, ventas y margen — no «ranks verdes». Vincula el gasto SEO (trabajo, contenido, enlaces, tools) al número y calidad de leads orgánicos.",
        "Compara el CPA orgánico con paid search en goals comparables. El SEO es más lento al inicio, pero con un núcleo estable a menudo baja el coste de adquisición. No exijas payback en la semana uno tras una auditoría.",
      ],
      lists: [
        {
          intro: "Mínimo financiero:",
          items: [
            "presupuesto del periodo",
            "leads/pedidos desde orgánico",
            "CPA y ROMI cuando sea posible",
            "cuota SEO del ingreso/leads totales",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Cómo leer la dinámica sin pánico",
      level: 2,
      paras: [
        "Arma un ritmo simple: smoke check semanal (tráfico, errores de cuenta), revisión mensual de KPIs, replanteo trimestral del núcleo y prioridades. Un par de puestos abajo en una key no es motivo para romper la estrategia.",
        "Si no hay orgánico en absoluto — primero técnica e indexación. Si hay tráfico pero no dinero — audiencia, landings y oferta. La eficacia del SEO es un paquete de métricas, no un solo gráfico.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "crece el orgánico, caen las conversiones",
            "solo crece brand, el comercial se estanca",
            "hay ranks, no hay clics (snippet/intención)",
            "colapso brusco tras un release o un breach",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Prep del sitio — normalmente semanas hasta cerca de un mes. Crecimiento de ranking del núcleo tras empezar el trabajo — planificado a 2–6 meses.",
        },
      ],
    },
  ],
  related: [
    "brendovyy-trafik",
    "dashboard",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "optimizatsiya-konversii",
    "veb-analitik",
  ],
};

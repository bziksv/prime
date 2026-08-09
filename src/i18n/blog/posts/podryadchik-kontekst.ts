import type { BlogPost } from "../../../data/blog";

/** ES overlay for podryadchik-kontekst — same structure as RU JSON. */
export const podryadchikKontekstEs: BlogPost = {
  slug: "podryadchik-kontekst",
  title: "Cómo elegir un contratista de búsqueda de pago",
  date: "2018-12-06",
  category: "Paid search",
  cover: "/images/blog/podryadchik-kontekst/cover.webp",
  excerpt:
    "Cómo ver que un contratista de Direct y Google Ads trabaja por resultados: tráfico y objetivos en Métrica/Analytics, economía (ROI, CPA, LTV), brief e informes — y cuándo cifras flojas aún no son motivo para cambiar de agencia.",
  lead: [
    "Externalizas la búsqueda de pago para no vivir en las cuentas — y al mes ves «muchos clics» sin leads, o silencio. Sin métricas propias y brief es difícil distinguir un ramp-up normal de un fracaso.",
    "Abajo: qué mirar en analítica, cómo calcular retorno y coste de cliente, qué brief e informes fijar, y qué excepciones aparecen los primeros meses. Encontrar un marketer en general es otro texto; aquí el foco es controlar la búsqueda de pago en sí.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de buscar un marketer?",
      a: "Ese texto cubre agencia vs in-house y stacks de skills. Aquí — cómo números y proceso muestran que un contratista de Direct/Ads lleva el canal con honestidad.",
    },
    {
      q: "¿Qué sistemas mirar?",
      a: "Yandex Métrica y/o Google Analytics con objetivos, más las cuentas de Direct y Ads. El acceso del cliente es obligatorio.",
    },
    {
      q: "¿Qué ROI es «normal»?",
      a: "No hay cifra universal. Mira la dinámica frente a tu margen y ciclo de venta — no el caso ajeno de un pitch deck.",
    },
    {
      q: "¿Cuánto esperar resultados?",
      a: "Las primeras semanas son datos y correcciones. Si tras dos o tres meses con brief claro y presupuesto no hay movimiento hacia el KPI — revisa hipótesis y contratista.",
    },
    {
      q: "¿Hace falta microcontrol semanal?",
      a: "Suele bastar un plan mensual y un informe regular. La supervisión diaria frena el trabajo cuando no hay incidente.",
    },
    {
      q: "¿Una facturación floja siempre es culpa de la agencia?",
      a: "No. Temporada, brief borroso, sitio u oferta débiles, nicho estrecho. Pero sin hipótesis e informes opacos ya es bandera roja.",
    },
    {
      q: "¿Qué exigir en el contrato?",
      a: "Acceso, alcance del trabajo, definición de lead y KPI, plazos de informe, reglas de presupuesto. Una garantía de posiciones sin métricas es ruido vacío.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas tu propio marco de control",
      level: 2,
      paras: [
        "El contratista gestiona pujas y anuncios; tú conoces la economía del deal. Sin acceso a analítica y KPI juzgas el trabajo por sensaciones y capturas bonitas de la cuenta.",
        "El memo de abajo no sustituye el brief — es un checklist: tráfico → economía → brief/informes → excepciones cuando los números aún no son veredicto.",
      ],
      links: [
        {
          label: "Cómo encontrar un marketer",
          href: "/es/blog/nayti-marketologa/",
        },
        {
          label: "Informes al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Dinámica de visitas y objetivos",
      level: 2,
      paras: [
        "Revisa Métrica y Analytics tú mismo: sesiones de búsqueda de pago, rebote, objetivos (lead, llamada, pago). Un catálogo amplio necesita un set de keywords más amplio; un servicio estrecho, precisión de frase — no alcance por alcance.",
        "Visitas al alza sin acciones objetivo al alza significa revisar relevancia y landing — no solo «ajustar pujas».",
      ],
      links: [
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Economía: ROI, CPA, LTV",
      level: 2,
      paras: [
        "La búsqueda de pago está más cerca de leads rápidos que del SEO acumulativo, pero el retorno sigue dependiendo del margen y del ciclo de venta. Si el gasto se queda por encima de su contribución a beneficio pasado una ventana de test razonable — revisa el canal y el contratista.",
        "El ROI conviene como (beneficio − gasto publicitario) / gasto × 100%. Los ejemplos redondos ilustran el método — no un benchmark del sector.",
        "Para compras repetidas compara CPA con LTV, o el beneficio bruto por cliente en el horizonte que realmente ves. «CPA muy por debajo del LTV» depende del margen; la regla del «triple» de guías viejas es heurística gruesa, no ley.",
      ],
      lists: [
        {
          intro: "Números mínimos en el informe:",
          items: [
            "gasto y clics/impresiones por campaña",
            "objetivos y CPA/CPL",
            "dinámica vs el periodo anterior",
            "qué cambió y por qué",
          ],
        },
      ],
      links: [
        {
          label: "Presupuesto de Yandex Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Media plan",
          href: "/es/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Brief, informes y plan mensual",
      level: 2,
      paras: [
        "Sin un objetivo («leads a CPL hasta N», «ventas con atribución») el contratista optimiza lo fácil de mostrar: clics baratos o alcance amplio.",
        "Ciclo sano: brief → plan de trabajo mensual → acceso → informe regular con conclusiones y el siguiente paso. Cuando suben los KPI — escala; cuando bajan — cambia hipótesis, no solo «hace falta más presupuesto».",
        "Micromanagement de cada clic hace daño. Escala cuando no hay informes, no hay hipótesis o la cuenta está bloqueada para ti.",
      ],
    },
    {
      title: "Cuando cifras flojas aún no son veredicto",
      level: 2,
      paras: [
        "El primer mes en un nicho estrecho se va en el set de keywords y negativos — espera progreso transparente de estructura, no un ROI milagroso.",
        "Un brief borroso («más ventas») y bajadas estacionales distorsionan el cuadro. Fija estacionalidad y definición de lead pronto.",
        "La bandera roja no es una pérdida puntual — es no tener plan de corrección, negarse a explicar números y garantías sin métricas. Entonces busca otro equipo.",
      ],
      links: [
        {
          label: "Mitos de la búsqueda de pago",
          href: "/es/blog/zabluzhdeniya-konteksta/",
        },
      ],
    },
  ],
  closing: [
    "Abre la analítica y el último informe del contratista: si ves objetivos, dinámica de CPA y una lista mensual de hipótesis — el control ya es más fuerte que discutir «caro/barato» a ojo.",
  ],
  related: [
    "nayti-marketologa",
    "otchet-klientu",
    "analiz-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "mediaplan",
    "didzhital-agentstvo",
  ],
};

/** EN overlay for podryadchik-kontekst — same structure as RU JSON. */
export const podryadchikKontekstEn: BlogPost = {
  slug: "podryadchik-kontekst",
  title: "How to choose a paid search contractor",
  date: "2018-12-06",
  category: "Paid search",
  cover: "/images/blog/podryadchik-kontekst/cover-en.webp",
  excerpt:
    "How to tell that a Direct and Google Ads contractor works for results: traffic and goals in Metrika/Analytics, economics (ROI, CPA, LTV), brief and reports — and when weak numbers aren’t yet a reason to switch agencies.",
  lead: [
    "You hand paid search to a contractor so you don’t live in the accounts — and a month later you see “lots of clicks” with no leads, or silence. Without your own metrics and brief it’s hard to tell a normal ramp from a failure.",
    "Below: what to watch in analytics, how to count payback and customer cost, which brief and reporting to set, and which exceptions show up in the first months. Finding a marketer in general is a separate piece; here the focus is controlling paid search itself.",
  ],
  faq: [
    {
      q: "How is this different from finding a marketer?",
      a: "That piece covers agency vs in-house and skill stacks. Here — how numbers and process show a Direct/Ads contractor runs the channel honestly.",
    },
    {
      q: "Which systems should I watch?",
      a: "Yandex Metrika and/or Google Analytics with goals, plus Direct and Ads accounts. Client access is required.",
    },
    {
      q: "What’s a “normal” ROI?",
      a: "There’s no universal figure. Watch dynamics vs your margin and deal cycle — not someone else’s case from a pitch deck.",
    },
    {
      q: "How long should I wait for results?",
      a: "The first weeks are data and fixes. If after two or three months with a clear brief and budget there’s no movement toward KPI — review hypotheses and the contractor.",
    },
    {
      q: "Do I need weekly micro-control?",
      a: "Usually a monthly plan and a regular report are enough. Daily oversight slows work when there’s no incident.",
    },
    {
      q: "Is weak revenue always the agency’s fault?",
      a: "No. Season, a fuzzy brief, a weak site or offer, a narrow niche. But no hypotheses and opaque reports are already a red flag.",
    },
    {
      q: "What should I require in the contract?",
      a: "Access, scope of work, lead and KPI definitions, report deadlines, budget rules. A ranking guarantee with no metrics is empty noise.",
    },
  ],
  sections: [
    {
      title: "Why you need your own control frame",
      level: 2,
      paras: [
        "The contractor manages bids and ads; you know deal economics. Without analytics access and KPIs you judge the work by feelings and pretty account screenshots.",
        "The memo below isn’t a brief replacement — it’s a checklist: traffic → economics → brief/reports → exceptions when numbers aren’t a verdict yet.",
      ],
      links: [
        {
          label: "How to find a marketer",
          href: "/en/blog/nayti-marketologa/",
        },
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Visit and goal dynamics",
      level: 2,
      paras: [
        "Check Metrika and Analytics yourself: sessions from paid search, bounce, goals (lead, call, payment). A wide catalog needs a wider keyword set; a narrow service needs phrase precision — not reach for reach’s sake.",
        "Growing visits without growing target actions means check relevance and the landing — not only “tweak bids.”",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Economics: ROI, CPA, LTV",
      level: 2,
      paras: [
        "Paid search is closer to fast leads than accumulating SEO, but payback still depends on margin and deal cycle. If spend stays above its profit contribution past a reasonable test window — review the channel and the contractor.",
        "ROI is handy as (profit − ad spend) / spend × 100%. Round-number examples illustrate the method — not an industry benchmark.",
        "For repeat purchases compare CPA with LTV, or gross profit per customer over the horizon you actually see. “CPA well below LTV” depends on margin; the “three times” rule from old guides is a rough heuristic, not law.",
      ],
      lists: [
        {
          intro: "Minimum numbers in the report:",
          items: [
            "spend and clicks/impressions by campaign",
            "goals and CPA/CPL",
            "dynamics vs the prior period",
            "what changed and why",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Brief, reporting, and the monthly plan",
      level: 2,
      paras: [
        "Without a goal (“leads at CPL up to N,” “sales with attribution”) the contractor optimizes what’s easy to show: cheap clicks or broad reach.",
        "A healthy cycle: brief → monthly work plan → access → regular report with conclusions and the next step. When KPIs rise — scale; when they drop — change hypotheses, not only “need more budget.”",
        "Micromanaging every click hurts. Escalate when there are no reports, no hypotheses, or the account is locked from you.",
      ],
    },
    {
      title: "When weak numbers aren’t a verdict yet",
      level: 2,
      paras: [
        "The first month in a narrow niche goes to the keyword set and negatives — expect transparent structure progress, not miracle ROI.",
        "A fuzzy brief (“more sales”) and seasonal dips distort the picture. Lock seasonality and the lead definition early.",
        "A red flag isn’t a one-off loss — it’s no fix plan, refusal to explain numbers, and guarantees with no metrics. Then look for another team.",
      ],
      links: [
        {
          label: "Paid search myths",
          href: "/en/blog/zabluzhdeniya-konteksta/",
        },
      ],
    },
  ],
  closing: [
    "Open analytics and the contractor’s latest report: if you see goals, CPA dynamics, and a monthly hypothesis list — control is already stronger than arguing “expensive/cheap” by feel.",
  ],
  related: [
    "nayti-marketologa",
    "otchet-klientu",
    "analiz-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "mediaplan",
    "didzhital-agentstvo",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for mediaplan — same structure as RU JSON. */
export const mediaplanEn: BlogPost = {
  slug: "mediaplan",
  title: "Ad campaign media plan: why you need one and how to build it",
  date: "2020-08-15",
  category: "Paid search",
  cover: "/images/blog/mediaplan/cover-en.webp",
  excerpt:
    "What an advertising media plan is, how it differs from a content calendar, how to build a table of channels, budget, and timelines, and where to start testing paid search — without copying someone else’s template line for line.",
  lead: [
    "A media plan is your working sheet for paid media: channels, budgets, timelines, KPIs, and who’s accountable. Without it, multi-platform campaigns turn into spend chaos and “here’s how it went” screenshot dumps.",
    "Below: why small and large businesses need a plan, which blocks to assemble, how it differs from a content plan, and how to sketch paid search with a forecast tool. A competitor template without adapting to your margins and sales capacity almost always misses.",
  ],
  faq: [
    {
      q: "How is a media plan different from a content plan?",
      a: "A content plan is the queue of posts and articles. A media plan covers ad channels, impression and click budgets, campaign timelines, and KPIs. They overlap, but they’re different tables.",
    },
    {
      q: "Do I need a media plan for a single channel?",
      a: "Yes, in a light form: goal, budget, timeline, KPI, owner. Otherwise it’s hard to stop on time or explain the spend.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a numeric goal, an audience profile, and one or two channels for a test. Don’t split budget across ten platforms in week one.",
    },
    {
      q: "Can I copy a competitor’s media plan?",
      a: "As a structure guide — yes. As ready-made numbers and channels — no: you have different awareness, margins, and funnel.",
    },
    {
      q: "How do I estimate a paid-search budget?",
      a: "Use Direct/Ads forecasts by geo and keywords, plus your own economics (CPA, conversion). Forecast figures are approximate, not a promise.",
    },
    {
      q: "Can the media plan change mid-flight?",
      a: "It can and should — based on tests: cut weak channels, fund what works, refine the audience. Log why you edited.",
    },
    {
      q: "Does a media plan replace bid strategies?",
      a: "No. The media plan sets the channel and budget frame; bids and caps inside Direct/Ads are a separate layer.",
    },
  ],
  sections: [
    {
      title: "Why you need a media plan",
      level: 2,
      paras: [
        "Without a plan, timelines drift, budgets blur, and a report to the client or owner becomes a stack of screenshots. Several channels (Search, Display/YAN, social, offline) with no summary table almost guarantee forgotten launches and double spend.",
        "A media plan locks expectations early: how many leads or sales, in what time, at what cost. Then it’s easier to move money from a platform with no response to one that delivers.",
      ],
      lists: [
        {
          intro: "The plan covers:",
          items: [
            "budget transparency by channel",
            "launch calendar and reporting checkpoints",
            "actuals vs KPI comparison",
            "a shared language with the agency or team",
            "a history of why you changed a channel",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "What to build the plan from: analysis and goals",
      level: 2,
      paras: [
        "Start with the market: who the product is for, how competitors differ, which USPs and reviews already work. Without an audience profile you can’t write copy, set targeting, or pick search keywords.",
        "State the ad goal in numbers: lead growth, revenue, traffic, subscribers, awareness. “Just get the word out” doesn’t belong in a media plan — there’s nothing to measure against.",
      ],
      lists: [
        {
          intro: "Typical campaign goals:",
          items: [
            "sales and upsells",
            "leads and calls",
            "reach and awareness",
            "community engagement",
            "promo and launch announcements",
          ],
        },
      ],
    },
    {
      title: "Platforms, strategy, and timelines",
      level: 2,
      paras: [
        "Channels split into online (search, networks, partner sites) and offline (TV, OOH, print). There’s no universal “best” platform: watch where the audience decides to buy.",
        "Search ads meet already-formed demand (“buy…”). Social targeting more often works a colder audience by demographics and interests. Mixing high-intent search expectations with cold targeting in one KPI cell is a common mistake.",
        "On duration, three modes help: always-on (long horizon), burst (promos up to a month), pulsing (seasonal). Lock each media-plan row’s end date — or you get an endless campaign with no review.",
      ],
      notes: [
        {
          kind: "tip",
          text: "“First search-result rows are always ads” and exact purchase shares like “60% in the evening” are simplifications from old guides. Trust your own reports by time and device.",
        },
      ],
    },
    {
      title: "Schedule, test, and budget",
      level: 2,
      paras: [
        "The plan needs not only campaign start/stop dates, but also creative cadence, email sends, and reporting cuts. Universal “best posting hours” are weaker than your audience stats: watch your data, not someone else’s averages.",
        "Testing is required: hypothesis on platform, USP, audience → small budget → decision (keep / fix / kill). A test with no analysis is wasted spend. When learning stalls, scale what works — don’t launch ten more hypotheses at once.",
        "Test budget depends on niche and cost per click or contact. Outside case studies are rough guides, not templates to copy. For paid search, Direct/Ads forecasts help: geo, keywords, duration → order of clicks and bids; your economics (CPA, conversion) decide whether the numbers fit.",
      ],
      lists: [
        {
          intro: "Minimum table columns:",
          items: [
            "channel / format",
            "goal and KPI",
            "budget and period",
            "audience / keywords",
            "owner",
            "status: test / live / stop",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Table structure: channel, schedule, summary",
      level: 2,
      paras: [
        "Three layers work well. Channel sheet — what you run, which content or offer, cost per contact. Schedule — launch and touch dates so nothing falls off the calendar. Project summary — actuals vs plan on KPIs for the client or board.",
        "Online templates are fine as a frame. Always rebuild numbers, audience, and channel mix for your business: offline footprint, brand awareness, and sales maturity change the plan more than a pretty spreadsheet.",
      ],
    },
    {
      title: "Paid search in the media plan and common mistakes",
      level: 2,
      paras: [
        "Paid search is often the first test: high-intent demand, relatively fast lead feedback. In the media-plan row, state geo, keyword set, budget cap, target CPA, and test window — or “we just launched Direct” has nothing to compare against.",
        "Audience profiles work better as several segments than “everyone 18–65.” Changing the plan is normal: audiences, platform budgets, timelines — when you have data. A rigid “wrote once for a year” plan usually drifts from the market.",
      ],
      lists: [
        {
          intro: "Keep in mind:",
          items: [
            "media plan ≠ content plan",
            "goals only in numbers",
            "test → conclusion → scale",
            "forecast ≈ estimate, not a guarantee",
            "plan edits — with a reason in the note",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Build one table: goal, one or two channels for a test, budget and KPIs for two weeks — then expand only what fits the economics, not “the whole market at once.”",
  ],
  related: [
    "kontent-plan",
    "byudzhet-yandeks-direkt",
    "prognoz-trafika-google-ads",
    "strategii-yandeks-direkt",
    "stavki-direkt",
    "kontekst-i-seo",
  ],
};

/** ES overlay for mediaplan — same structure as RU JSON. */
export const mediaplanEs: BlogPost = {
  slug: "mediaplan",
  title: "Media plan de campaña publicitaria: para qué sirve y cómo armarlo",
  date: "2020-08-15",
  category: "Paid search",
  cover: "/images/blog/mediaplan/cover.webp",
  excerpt:
    "Qué es un media plan publicitario, en qué se diferencia de un calendario de contenido, cómo armar una tabla de canales, presupuesto y plazos, y por dónde empezar a testear paid search — sin copiar la plantilla de otro línea a línea.",
  lead: [
    "Un media plan es tu hoja de trabajo de paid media: canales, presupuestos, plazos, KPIs y quién es accountable. Sin él, las campañas multiplataforma se vuelven caos de gasto y dumps de capturas de «así fue».",
    "Abajo: por qué lo necesita un negocio pequeño y uno grande, qué bloques armar, en qué se diferencia de un plan de contenido y cómo bocetar paid search con una tool de forecast. Una plantilla de competidor sin adaptar a tus márgenes y capacidad de ventas casi siempre falla.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un media plan de un plan de contenido?",
      a: "El plan de contenido es la cola de posts y artículos. El media plan cubre canales de ads, presupuestos de impresiones y clics, timelines de campaña y KPIs. Se solapan, pero son tablas distintas.",
    },
    {
      q: "¿Hace falta un media plan para un solo canal?",
      a: "Sí, en forma ligera: objetivo, presupuesto, plazo, KPI, owner. Si no, cuesta parar a tiempo o explicar el gasto.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Con un objetivo numérico, un perfil de audiencia y uno o dos canales para un test. No partas el presupuesto en diez plataformas la primera semana.",
    },
    {
      q: "¿Puedo copiar el media plan de un competidor?",
      a: "Como guía de estructura — sí. Como números y canales listos — no: tienes awareness, márgenes y funnel distintos.",
    },
    {
      q: "¿Cómo estimar un presupuesto de paid search?",
      a: "Usa forecasts de Direct/Ads por geo y keywords, más tu propia economía (CPA, conversión). Las cifras de forecast son aproximadas, no una promesa.",
    },
    {
      q: "¿Puede cambiar el media plan a mitad de vuelo?",
      a: "Puede y debe — según tests: corta canales flojos, financia lo que funciona, afina la audiencia. Anota por qué editaste.",
    },
    {
      q: "¿El media plan sustituye las estrategias de puja?",
      a: "No. El media plan fija el marco de canal y presupuesto; pujas y caps dentro de Direct/Ads son otra capa.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta un media plan",
      level: 2,
      paras: [
        "Sin plan, los plazos se deslizan, los presupuestos se emborronan y el informe al cliente o al owner se vuelve un stack de capturas. Varios canales (Búsqueda, Display/YAN, social, offline) sin tabla resumen casi garantizan lanzamientos olvidados y gasto duplicado.",
        "Un media plan fija expectativas pronto: cuántos leads o ventas, en qué tiempo, a qué coste. Luego es más fácil mover dinero de una plataforma sin respuesta a una que entrega.",
      ],
      lists: [
        {
          intro: "El plan cubre:",
          items: [
            "transparencia de presupuesto por canal",
            "calendario de lanzamiento y checkpoints de reporting",
            "comparación actuals vs KPI",
            "un lenguaje compartido con la agencia o el equipo",
            "un historial de por qué cambiaste un canal",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "De qué armar el plan: análisis y objetivos",
      level: 2,
      paras: [
        "Empieza por el mercado: para quién es el producto, en qué se diferencian los competidores, qué USPs y reviews ya funcionan. Sin perfil de audiencia no puedes escribir copy, fijar targeting ni elegir keywords de búsqueda.",
        "Enuncia el objetivo de ads en números: crecimiento de leads, revenue, tráfico, suscriptores, awareness. «Solo dar a conocer» no cabe en un media plan — no hay contra qué medir.",
      ],
      lists: [
        {
          intro: "Objetivos típicos de campaña:",
          items: [
            "ventas y upsells",
            "leads y llamadas",
            "reach y awareness",
            "engagement de la comunidad",
            "anuncios de promo y lanzamiento",
          ],
        },
      ],
    },
    {
      title: "Plataformas, estrategia y plazos",
      level: 2,
      paras: [
        "Los canales se parten en online (búsqueda, redes, sitios partner) y offline (TV, OOH, print). No hay plataforma «mejor» universal: mira dónde la audiencia decide comprar.",
        "Los ads de búsqueda encuentran demanda ya formada («comprar…»). El targeting social a menudo trabaja audiencia más fría por demografía e intereses. Mezclar expectativas de búsqueda de alto intent con targeting frío en una misma celda de KPI es un error habitual.",
        "En duración ayudan tres modos: always-on (horizonte largo), burst (promos hasta un mes), pulsing (estacional). Fija la fecha de fin de cada fila del media plan — o tienes una campaña infinita sin review.",
      ],
      notes: [
        {
          kind: "tip",
          text: "«Las primeras filas de resultados de búsqueda siempre son ads» y shares exactos de compra tipo «60% por la tarde» son simplificaciones de guías viejas. Confía en tus propios informes por hora y dispositivo.",
        },
      ],
    },
    {
      title: "Schedule, test y presupuesto",
      level: 2,
      paras: [
        "El plan necesita no solo fechas de start/stop de campaña, sino también cadencia creativa, envíos de email y cortes de reporting. Las «mejores horas de publicación» universales son más débiles que las stats de tu audiencia: mira tus datos, no promedios ajenos.",
        "El testing es obligatorio: hipótesis de plataforma, USP, audiencia → presupuesto pequeño → decisión (mantener / arreglar / matar). Un test sin análisis es gasto tirado. Cuando el aprendizaje se atasca, escala lo que funciona — no lances diez hipótesis más a la vez.",
        "El presupuesto de test depende del nicho y del coste por clic o contacto. Los case studies ajenos son guías rough, no plantillas a copiar. Para paid search ayudan los forecasts de Direct/Ads: geo, keywords, duración → orden de clics y pujas; tu economía (CPA, conversión) decide si los números encajan.",
      ],
      lists: [
        {
          intro: "Columnas mínimas de la tabla:",
          items: [
            "canal / formato",
            "objetivo y KPI",
            "presupuesto y periodo",
            "audiencia / keywords",
            "owner",
            "estado: test / live / stop",
          ],
        },
      ],
      links: [
        {
          label: "Presupuesto de Yandex Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Forecast de tráfico de Google Ads",
          href: "/es/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Estructura de la tabla: canal, schedule, resumen",
      level: 2,
      paras: [
        "Tres capas funcionan bien. Hoja de canal — qué corres, qué contenido u oferta, coste por contacto. Schedule — fechas de lanzamiento y toques para que nada se caiga del calendario. Resumen del proyecto — actuals vs plan en KPIs para el cliente o el board.",
        "Las plantillas online valen como marco. Siempre reconstruye números, audiencia y mix de canales para tu negocio: footprint offline, awareness de marca y madurez de ventas cambian el plan más que un spreadsheet bonito.",
      ],
    },
    {
      title: "Paid search en el media plan y errores habituales",
      level: 2,
      paras: [
        "Paid search suele ser el primer test: demanda de alto intent, feedback de leads relativamente rápido. En la fila del media plan, indica geo, set de keywords, tope de presupuesto, CPA target y ventana de test — o «acabamos de lanzar Direct» no tiene contra qué comparar.",
        "Los perfiles de audiencia funcionan mejor como varios segmentos que «todos 18–65». Cambiar el plan es normal: audiencias, presupuestos de plataforma, plazos — cuando hay datos. Un plan rígido «escrito una vez para un año» suele desviarse del mercado.",
      ],
      lists: [
        {
          intro: "Ten en cuenta:",
          items: [
            "media plan ≠ plan de contenido",
            "objetivos solo en números",
            "test → conclusión → escala",
            "forecast ≈ estimación, no garantía",
            "edits del plan — con motivo en la nota",
          ],
        },
      ],
      links: [
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Arma una tabla: objetivo, uno o dos canales para un test, presupuesto y KPIs para dos semanas — luego expande solo lo que encaje en la economía, no «todo el mercado de golpe».",
  ],
  related: [
    "kontent-plan",
    "byudzhet-yandeks-direkt",
    "prognoz-trafika-google-ads",
    "strategii-yandeks-direkt",
    "stavki-direkt",
    "kontekst-i-seo",
  ],
};

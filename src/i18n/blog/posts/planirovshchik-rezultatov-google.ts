import type { BlogPost } from "../../../data/blog";

/** EN overlay for planirovshchik-rezultatov-google — same structure as RU JSON. */
export const planirovshchikRezultatovGoogleEn: BlogPost = {
  slug: "planirovshchik-rezultatov-google",
  title: "Performance Planner in Google Ads: how to use it",
  date: "2020-02-05",
  category: "Paid search",
  cover: "/images/blog/planirovshchik-rezultatov-google/cover-en.webp",
  excerpt:
    "Performance Planner in Google Ads: forecast budget and conversions from live campaigns, plan for seasonality, and reallocate spend across campaigns — and how it differs from Keyword Planner.",
  lead: [
    "Performance Planner helps estimate what happens to clicks, conversions, and CPA if you change budget or move money between Google Ads campaigns that are already running.",
    "Below: why the tool exists, which campaigns can enter a plan, typical scenarios, and accuracy limits. It isn’t Keyword Planner, and it isn’t a from-scratch forecast by search volume. Ads UI paths change — check the current labels.",
  ],
  faq: [
    {
      q: "How is it different from Keyword Planner?",
      a: "Keyword Planner estimates demand and phrases before or outside deep account stats. Performance Planner builds budget scenarios for campaigns with history.",
    },
    {
      q: "Why doesn’t a campaign appear in the plan?",
      a: "Often not enough data: short run time, few clicks or conversions, or an unsupported strategy or type. Eligibility rules change — follow the tool’s hints.",
    },
    {
      q: "Is the forecast the same as reality?",
      a: "No. It’s a model. In practice deviation can be noticeable; use it as an order of magnitude and for scenario comparison — not a contract with Google.",
    },
    {
      q: "Can I edit the plan directly in Ads?",
      a: "The plan itself doesn’t change campaigns. To implement, apply changes deliberately (manually or via upload tools) after review.",
    },
    {
      q: "What is it used for most often?",
      a: "Seasonal budget growth at a target CPA; estimating growth ceiling; reallocating budget across campaigns for more conversions.",
    },
    {
      q: "Should campaigns in one plan share the same goals?",
      a: "Preferably yes: otherwise the optimizer pours money between incomparable KPIs. Group similar goals.",
    },
    {
      q: "Does it replace a media plan?",
      a: "It complements one: numbers for campaigns already running. You still set channel strategy and KPIs.",
    },
  ],
  sections: [
    {
      title: "What Performance Planner can do",
      level: 2,
      paras: [
        "The tool builds a forecast: what spend you need for a clicks, conversions, or value goal; how the budget → result curve shifts; and how to allocate spend more sensibly across selected campaigns.",
        "For a meaningful plan, campaigns usually need to be live with a minimum of stats (days, clicks, conversions) and a supported bidding strategy. Exact thresholds live in help and account hints — not old “3 days / 3 clicks / 1 conversion” dogma.",
        "Creating a plan: pick campaigns → set period and target metric → get a chart and scenario table. It’s handy to compare current mode with “max reach” and a CPA goal.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "season: how much budget to add at the same CPA",
            "growth ceiling for Search or dynamic campaigns",
            "moving budget between campaigns",
            "a client argument for “why we ask +X% this quarter”",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Season and target CPA",
      level: 2,
      paras: [
        "Set the peak period and a limit on average conversion cost. The planner shows which spend fits your CPA and how many conversions to expect versus the baseline.",
        "If some campaigns lack history, the system may offer a seasonality coefficient — use a similar period last year, not a “six-month average,” if the niche is clearly seasonal.",
        "A “max conversions at any cost” scenario often breaks your CPA ceiling: move the goal by hand and watch a point on the curve — not the chart edge.",
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Don’t copy numbers from other people’s case studies (or old currency figures). Look at your own curve in the account.",
        },
      ],
    },
    {
      title: "Search growth and campaigns Keyword Planner can’t estimate",
      level: 2,
      paras: [
        "Sometimes Keyword Planner struggles with narrow or special setups, while Performance Planner still shows growth headroom from live campaign history.",
        "Don’t look only at the “maximum” edge: the middle of the curve often balances conversions and CPA better. The comparison tab helps visualize current vs proposed spend.",
        "Dynamic and other formats can enter budget scenarios too — but first make sure the conversion column is the one you need now (imported goals go stale).",
      ],
    },
    {
      title: "Reallocating budget across campaigns",
      level: 2,
      paras: [
        "Spend-optimization mode at the same total budget looks for a shift toward campaigns with a better forecast return. That’s a system hypothesis: check which campaigns it wants to boost and why.",
        "Review by hand: does the plan cut learning campaigns, brand, or strategically important regions for a short-term “+N conversions” in the model?",
        "After picking a scenario, lock bid and budget changes deliberately. A plan in the library doesn’t rebuild the account by itself.",
      ],
      links: [
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Limits and common sense",
      level: 2,
      paras: [
        "Not every campaign type and strategy enters a plan. Default period windows and metric sets don’t always match your job — set them manually.",
        "If Conversions includes outdated or utility goals, the forecast will lie: clean tracking before planning. Plan vs fact can diverge several times when demand, the site, or competition shifts.",
        "Use the tool as a negotiation and scenario layer over your economics — next to the media plan and lead unit economics.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "this is not Keyword Planner",
            "you need live campaign stats",
            "forecast ≠ guarantee",
            "CPA goal beats the chart edge",
            "applying changes is a separate step",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build a plan from campaigns with one goal, lock a target CPA, and compare 2–3 points on the curve — easier to agree a seasonal budget than arguing by gut feel.",
  ],
  related: [
    "prognoz-trafika-google-ads",
    "mediaplan",
    "strategii-google-ads",
    "byudzhet-yandeks-direkt",
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
  ],
};

/** ES overlay for planirovshchik-rezultatov-google — same structure as RU JSON / EN. */
export const planirovshchikRezultatovGoogleEs: BlogPost = {
  slug: "planirovshchik-rezultatov-google",
  title: "Performance Planner en Google Ads: cómo usarlo",
  date: "2020-02-05",
  category: "Búsqueda de pago",
  cover: "/images/blog/planirovshchik-rezultatov-google/cover-es.webp",
  excerpt:
    "Performance Planner en Google Ads: prever presupuesto y conversiones desde campañas vivas, planificar estacionalidad y reasignar spend entre campañas — y en qué se diferencia del Keyword Planner.",
  lead: [
    "Performance Planner ayuda a estimar qué pasa con clics, conversiones y CPA si cambias el presupuesto o mueves dinero entre campañas de Google Ads que ya están en marcha.",
    "Abajo: por qué existe la herramienta, qué campañas pueden entrar en un plan, escenarios típicos y límites de precisión. No es Keyword Planner, ni un forecast desde cero por volumen de búsqueda. Las rutas de la UI de Ads cambian — revisa las etiquetas actuales.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del Keyword Planner?",
      a: "Keyword Planner estima demanda y frases antes o fuera de stats profundas de la cuenta. Performance Planner arma escenarios de presupuesto para campañas con historial.",
    },
    {
      q: "¿Por qué una campaña no aparece en el plan?",
      a: "A menudo faltan datos: poco tiempo en marcha, pocos clics o conversiones, o una estrategia o tipo no soportado. Las reglas de elegibilidad cambian — sigue las pistas de la herramienta.",
    },
    {
      q: "¿El forecast es igual a la realidad?",
      a: "No. Es un modelo. En la práctica la desviación puede notarse; úsalo como orden de magnitud y para comparar escenarios — no como un contrato con Google.",
    },
    {
      q: "¿Puedo editar el plan directamente en Ads?",
      a: "El plan en sí no cambia las campañas. Para implementar, aplica cambios a propósito (a mano o vía herramientas de upload) tras revisarlos.",
    },
    {
      q: "¿Para qué se usa más a menudo?",
      a: "Crecimiento estacional de presupuesto a un CPA objetivo; estimar el techo de crecimiento; reasignar presupuesto entre campañas para más conversiones.",
    },
    {
      q: "¿Las campañas de un plan deben compartir los mismos objetivos?",
      a: "Preferible sí: si no, el optimizador vierte dinero entre KPIs incomparables. Agrupa objetivos similares.",
    },
    {
      q: "¿Sustituye a un media plan?",
      a: "Lo complementa: números para campañas ya en marcha. La estrategia de canal y los KPIs los sigues fijando tú.",
    },
  ],
  sections: [
    {
      title: "Qué puede hacer Performance Planner",
      level: 2,
      paras: [
        "La herramienta arma un forecast: qué spend necesitas para un objetivo de clics, conversiones o valor; cómo se desplaza la curva presupuesto → resultado; y cómo asignar el spend con más sentido entre las campañas elegidas.",
        "Para un plan con sentido, las campañas suelen necesitar estar vivas con un mínimo de stats (días, clics, conversiones) y una estrategia de pujas soportada. Los umbrales exactos viven en la ayuda y las pistas de la cuenta — no en el dogma viejo de «3 días / 3 clics / 1 conversión».",
        "Crear un plan: elige campañas → fija periodo y métrica objetivo → obtén un gráfico y una tabla de escenarios. Es cómodo comparar el modo actual con «max reach» y un objetivo de CPA.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "temporada: cuánto presupuesto sumar al mismo CPA",
            "techo de crecimiento para Search o campañas dinámicas",
            "mover presupuesto entre campañas",
            "un argumento al cliente de «por qué pedimos +X% este trimestre»",
          ],
        },
      ],
      links: [
        {
          label: "Forecast de tráfico Google Ads",
          href: "/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Temporada y CPA objetivo",
      level: 2,
      paras: [
        "Fija el periodo pico y un límite al coste medio de conversión. El planner muestra qué spend encaja con tu CPA y cuántas conversiones esperar frente a la baseline.",
        "Si a algunas campañas les falta historial, el sistema puede ofrecer un coeficiente de estacionalidad — usa un periodo similar del año pasado, no un «promedio de seis meses», si el nicho es claramente estacional.",
        "Un escenario de «máx. conversiones a cualquier coste» a menudo rompe tu techo de CPA: mueve el objetivo a mano y mira un punto de la curva — no el borde del gráfico.",
      ],
      notes: [
        {
          title: "Consejo",
          kind: "tip",
          text: "No copies cifras de casos ajenos (ni cifras viejas de moneda). Mira tu propia curva en la cuenta.",
        },
      ],
    },
    {
      title: "Crecimiento en Search y campañas que Keyword Planner no estima",
      level: 2,
      paras: [
        "A veces Keyword Planner se atasca con setups estrechos o especiales, mientras Performance Planner aún muestra margen de crecimiento desde el historial vivo de la campaña.",
        "No mires solo el borde «máximo»: el medio de la curva a menudo equilibra mejor conversiones y CPA. La pestaña de comparación ayuda a visualizar spend actual vs propuesto.",
        "Formatos dinámicos y otros también pueden entrar en escenarios de presupuesto — pero primero asegúrate de que la columna de conversión sea la que necesitas ahora (los goals importados se quedan viejos).",
      ],
    },
    {
      title: "Reasignar presupuesto entre campañas",
      level: 2,
      paras: [
        "El modo de optimización de spend con el mismo presupuesto total busca un desplazamiento hacia campañas con mejor retorno previsto. Es una hipótesis del sistema: comprueba qué campañas quiere potenciar y por qué.",
        "Revisa a mano: ¿el plan corta campañas en learning, brand o regiones estratégicamente importantes por un «+N conversiones» a corto plazo en el modelo?",
        "Tras elegir un escenario, fija a propósito los cambios de pujas y presupuesto. Un plan en la biblioteca no reconstruye la cuenta solo.",
      ],
      links: [
        {
          label: "Media plan",
          href: "/blog/mediaplan/",
        },
        {
          label: "Estrategias Google Ads",
          href: "/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Límites y sentido común",
      level: 2,
      paras: [
        "No todo tipo de campaña y estrategia entra en un plan. Las ventanas de periodo por defecto y los sets de métricas no siempre encajan con tu trabajo — fíjalos a mano.",
        "Si Conversiones incluye goals obsoletos o de utilidad, el forecast mentirá: limpia el tracking antes de planificar. Plan vs hecho puede divergir varias veces cuando cambian la demanda, el sitio o la competencia.",
        "Usa la herramienta como capa de negociación y escenarios sobre tu economía — junto al media plan y la unit economics del lead.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "esto no es Keyword Planner",
            "hacen falta stats de campañas vivas",
            "forecast ≠ garantía",
            "el objetivo de CPA gana al borde del gráfico",
            "aplicar cambios es un paso aparte",
          ],
        },
      ],
    },
  ],
  closing: [
    "Arma un plan desde campañas con un objetivo, fija un CPA target y compara 2–3 puntos de la curva — más fácil acordar un presupuesto estacional que discutir a ojo.",
  ],
  related: [
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "prognoz-trafika-google-ads",
    "mediaplan",
    "strategii-google-ads",
  ],
};

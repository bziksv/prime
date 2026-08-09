import type { BlogPost } from "../../../data/blog";

/** EN overlay for novogodnyaya-rasprodazha — same structure as RU JSON. */
export const novogodnyayaRasprodazhaEn: BlogPost = {
  slug: "novogodnyaya-rasprodazha",
  title: "New Year sale campaigns in Yandex Direct and Google Ads",
  date: "2019-01-10",
  category: "Paid search",
  cover: "/images/blog/novogodnyaya-rasprodazha/cover-en.webp",
  excerpt:
    "How to prep paid search for a New Year sale: demand and forecast, buyer types, creatives, separate campaigns, and what to do after the holidays — without blindly copying 2017 US stats.",
  lead: [
    "The New Year season in paid search isn’t only “−30% in December.” You need a demand forecast, different messages for early and late buyers, separate creatives, and a careful exit after the holidays.",
    "Below: a working frame for Yandex Direct and Google Ads. NRF/Trends figures from old reviews are rough examples of curve shape — not law for your niche in Russia. Holiday retargeting at peak is covered separately.",
  ],
  faq: [
    {
      q: "When should you start gift ads?",
      a: "Check your past years and Wordstat/Trends for the niche. For many, demand rises weeks before the peak — not only on Dec 31.",
    },
    {
      q: "Should you run a separate campaign for the sale?",
      a: "Yes, it’s cleaner: own ads, negatives, budget, and end date. Don’t mix the main campaign with a seasonal offer.",
    },
    {
      q: "Is retargeting mandatory for a holiday sale?",
      a: "It helps a lot at peak, but doesn’t replace search and shopping campaigns. Holiday retargeting tactics are covered separately.",
    },
    {
      q: "What should you do after the holidays?",
      a: "Change creatives, lower bids when competition drops, communicate working hours, and turn off sale ads on schedule.",
    },
    {
      q: "Is sales growth guaranteed with holiday ads?",
      a: "No. Paid search amplifies demand and offer; without stock, logistics, and a sale landing, budget burns.",
    },
  ],
  sections: [
    {
      title: "Demand analysis and forecast",
      level: 2,
      paras: [
        "Lean on last year’s season stats: clicks, CPA, product categories, bounce. Drop one-off spikes that won’t repeat.",
        "Add industry context: how demand behaved this year before the season. Click forecasts guide budget — not a revenue promise. Other people’s Trends charts help with curve shape, not for copying “US percentages”.",
      ],
      lists: [
        {
          intro: "Forecast minimum:",
          items: [
            "last year’s season in Direct/Ads and Metrika",
            "leading gift categories and queries",
            "warehouse capacity and delivery SLAs",
            "budget cap for peak days",
          ],
        },
      ],
      links: [
        {
          label: "Traffic forecast",
          href: "/en/blog/prognoz-trafika/",
        },
      ],
    },
    {
      title: "Buyer types in the season",
      level: 2,
      paras: [
        "Roughly split the audience: early planners, discount hunters (sale peaks), rationals (compare longer), last-minute (time-poor).",
        "Different types need different messages and timing: early — assortment and sets; discount seekers — a clear USP in the noise; last-minute — fast delivery and “in stock today”.",
      ],
      lists: [
        {
          intro: "Practical move:",
          items: [
            "separate groups/campaigns by season stage",
            "ad schedules for peaks",
            "“for myself” vs “as a gift” — different creatives",
            "don’t promise delivery your warehouse can’t meet",
          ],
        },
      ],
    },
    {
      title: "Creatives and landings for the sale",
      level: 2,
      paras: [
        "In the ad — sale dates, benefit, limits. On the landing — the same terms, stock, delivery before the holiday. Promise vs page mismatch kills conversion and traffic quality.",
        "Prep 2–3 creative sets early: pre-peak, peak, post-holiday. Test headlines carefully — see the paid-search A/B piece.",
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
        {
          label: "Landing copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Campaign setup in Direct and Google Ads",
      level: 2,
      paras: [
        "Move the sale into a separate campaign with an end date. Pause or narrow the main line so budget doesn’t leak into ordinary ads without the seasonal offer.",
        "Google Ads often has rules/schedules for auto-stop; in Direct plan the date manually or via a separate timed campaign — check current account options. Peak bids are usually higher: set CPA expectations in advance.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "gift/sale semantics + negatives",
            "separate seasonal budget",
            "UTM and goals in analytics",
            "warm retargeting",
            "alerts on stock and delivery SLAs",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "After the holidays",
      level: 2,
      paras: [
        "Demand doesn’t hit zero in one day: some purchases and catch-up orders come after. Change creative themes, communicate the schedule, lower bids as the auction cools.",
        "Turn off sale ads on plan and restore the main campaign. Otherwise people click “−50% until Dec 31” while the site already shows regular prices.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Legally correct sale terms (dates, limits, availability) beat a pretty banner. Don’t promise what you can’t deliver.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A seasonal sale in paid search = forecast + buyer segments + separate campaigns + an honest offer. Someone else’s “when Americans buy” percentages won’t replace your numbers.",
        "After the peak, discipline matters too: creative swap and stopping the sale on date.",
      ],
    },
  ],
  closing: [
    "Build a forecast from your data, split early and late buyers, put the sale in its own campaign, and plan the post-holiday exit — that’s how New Year paid search wastes less budget.",
  ],
  related: [
    "prazdnichnyy-retargeting",
    "prognoz-trafika",
    "ab-testy-reklamy",
    "strategii-yandeks-direkt",
    "promoaktsii",
    "retargeting-direkt",
  ],
};

/** ES overlay for novogodnyaya-rasprodazha — same structure as RU JSON / EN. */
export const novogodnyayaRasprodazhaEs: BlogPost = {
  slug: "novogodnyaya-rasprodazha",
  title: "Campañas de rebajas de Año Nuevo en Yandex Direct y Google Ads",
  date: "2019-01-10",
  category: "Paid search",
  cover: "/images/blog/novogodnyaya-rasprodazha/cover.webp",
  excerpt:
    "Cómo preparar paid search para una rebaja de Año Nuevo: demanda y forecast, tipos de comprador, creatividades, campañas aparte y qué hacer tras las fiestas — sin copiar a ciegas stats de EE. UU. de 2017.",
  lead: [
    "La temporada de Año Nuevo en paid search no es solo «−30% en diciembre». Hace falta un forecast de demanda, mensajes distintos para compradores tempranos y tardíos, creatividades aparte y una salida cuidadosa tras las fiestas.",
    "Abajo: un marco que funciona para Yandex Direct y Google Ads. Las cifras NRF/Trends de reviews viejas son ejemplos toscos de forma de curva — no ley para tu nicho en Rusia. El retargeting de fiestas en el pico se cubre aparte.",
  ],
  faq: [
    {
      q: "¿Cuándo empezar ads de regalos?",
      a: "Mira tus años pasados y Wordstat/Trends del nicho. Para muchos, la demanda sube semanas antes del pico — no solo el 31 de diciembre.",
    },
    {
      q: "¿Debes correr una campaña aparte para la rebaja?",
      a: "Sí, es más limpio: ads propios, negativos, presupuesto y fecha de fin. No mezcles la campaña principal con una oferta de temporada.",
    },
    {
      q: "¿El retargeting es obligatorio para una rebaja de fiestas?",
      a: "Ayuda mucho en el pico, pero no sustituye campañas de búsqueda y shopping. Las tácticas de retargeting de fiestas se cubren aparte.",
    },
    {
      q: "¿Qué hacer tras las fiestas?",
      a: "Cambia creatividades, baja pujas cuando cae la competencia, comunica horario laboral y apaga ads de rebaja según plan.",
    },
    {
      q: "¿El crecimiento de ventas está garantizado con ads de fiestas?",
      a: "No. Paid search amplifica demanda y oferta; sin stock, logística y una landing de rebaja, el presupuesto se quema.",
    },
  ],
  sections: [
    {
      title: "Análisis de demanda y forecast",
      level: 2,
      paras: [
        "Apóyate en stats de la temporada del año pasado: clics, CPA, categorías de producto, rebote. Quita picos puntuales que no se repetirán.",
        "Añade contexto de industria: cómo se comportó la demanda este año antes de la temporada. Los forecasts de clics guían el presupuesto — no una promesa de ingresos. Los charts Trends ajenos ayudan con la forma de la curva, no para copiar «porcentajes de EE. UU.».",
      ],
      lists: [
        {
          intro: "Mínimo de forecast:",
          items: [
            "la temporada del año pasado en Direct/Ads y Metrika",
            "categorías y queries de regalos líderes",
            "capacidad de almacén y SLAs de entrega",
            "tope de presupuesto para días pico",
          ],
        },
      ],
      links: [
        {
          label: "Forecast de tráfico",
          href: "/es/blog/prognoz-trafika/",
        },
      ],
    },
    {
      title: "Tipos de comprador en la temporada",
      level: 2,
      paras: [
        "A grosso modo parte la audiencia: planificadores tempranos, cazadores de descuento (picos de rebaja), racionales (comparan más), last-minute (sin tiempo).",
        "Tipos distintos necesitan mensajes y timing distintos: tempranos — surtido y sets; buscadores de descuento — un USP claro en el ruido; last-minute — entrega rápida y «en stock hoy».",
      ],
      lists: [
        {
          intro: "Movimiento práctico:",
          items: [
            "grupos/campañas aparte por etapa de temporada",
            "horarios de ads para picos",
            "«para mí» vs «como regalo» — creatividades distintas",
            "no prometas una entrega que el almacén no puede cumplir",
          ],
        },
      ],
    },
    {
      title: "Creatividades y landings para la rebaja",
      level: 2,
      paras: [
        "En el ad — fechas de rebaja, beneficio, límites. En la landing — los mismos términos, stock, entrega antes de la fiesta. Desajuste promesa vs página mata conversión y calidad de tráfico.",
        "Prepara 2–3 sets de creatividades pronto: pre-pico, pico, post-fiestas. Testa titulares con cuidado — ver la pieza de A/B de paid search.",
      ],
      links: [
        {
          label: "Tests A/B de ads",
          href: "/es/blog/ab-testy-reklamy/",
        },
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Setup de campañas en Direct y Google Ads",
      level: 2,
      paras: [
        "Mueve la rebaja a una campaña aparte con fecha de fin. Pausa o estrecha la línea principal para que el presupuesto no se filtre a ads ordinarios sin la oferta de temporada.",
        "Google Ads a menudo tiene rules/schedules de auto-stop; en Direct planifica la fecha a mano o vía una campaña temporizada aparte — mira opciones actuales de la cuenta. Las pujas en el pico suelen ser más altas: fija expectativas de CPA de antemano.",
      ],
      lists: [
        {
          intro: "Checklist de lanzamiento:",
          items: [
            "semántica de regalos/rebaja + negativos",
            "presupuesto de temporada aparte",
            "UTM y metas en analytics",
            "retargeting cálido",
            "alertas de stock y SLAs de entrega",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting de fiestas",
          href: "/es/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Tras las fiestas",
      level: 2,
      paras: [
        "La demanda no llega a cero en un día: algunas compras y pedidos de catch-up llegan después. Cambia temas creativos, comunica el horario, baja pujas al enfriarse la subasta.",
        "Apaga ads de rebaja según plan y restaura la campaña principal. Si no, la gente hace clic en «−50% hasta el 31 de dic.» mientras el sitio ya muestra precios normales.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Términos de rebaja legalmente correctos (fechas, límites, disponibilidad) ganan a un banner bonito. No prometas lo que no puedes entregar.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Una rebaja de temporada en paid search = forecast + segmentos de comprador + campañas aparte + una oferta honesta. Los porcentajes ajenos de «cuándo compran los americanos» no sustituyen tus cifras.",
        "Tras el pico, la disciplina también importa: cambio creativo y parar la rebaja en fecha.",
      ],
    },
  ],
  closing: [
    "Arma un forecast con tus datos, separa compradores tempranos y tardíos, pon la rebaja en su propia campaña y planifica la salida post-fiestas — así el paid search de Año Nuevo malgasta menos presupuesto.",
  ],
  related: [
    "prazdnichnyy-retargeting",
    "prognoz-trafika",
    "ab-testy-reklamy",
    "strategii-yandeks-direkt",
    "promoaktsii",
    "retargeting-direkt",
  ],
};

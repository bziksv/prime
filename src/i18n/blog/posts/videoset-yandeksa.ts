import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoset-yandeksa — same structure as RU JSON. */
export const videosetYandeksaEn: BlogPost = {
  slug: "videoset-yandeksa",
  title:
    "Yandex Video Network: formats, targeting, and how to evaluate a campaign",
  date: "2018-10-18",
  category: "Paid search",
  cover: "/images/blog/videoset-yandeksa/cover-en.webp",
  excerpt:
    "How the Yandex Video Network works: prerolls and in-page placements, targeting, VTR, and tying results to business goals — without treating 2018 industry-share and CPV reports as today’s price list.",
  lead: [
    "The Yandex Video Network runs video on partner sites and across the Yandex ecosystem: before, during, and after content, plus in-page and mobile interstitial formats. It’s not “just another banner” — it’s video media with its own completion and cost-per-contact logic.",
    "Below: formats, what to watch in setup, and how to read results. Industry budget shares, average CPV, and targeting leaderboards from 2018 half-year reviews are a historical snapshot — not a current media plan. Check formats and bids in the live account.",
  ],
  faq: [
    {
      q: "Are the Video Network and the Display Network the same thing?",
      a: "They’re related parts of the same ecosystem, but video formats and metrics (VTR, completion) differ from standard banners. Check campaign type and display conditions in the current interface.",
    },
    {
      q: "What matters more: VTR or clicks?",
      a: "It depends on the goal. For brand and reach, watch completion and frequency. For performance, watch conversions and cost per action. VTR alone, without a funnel, proves nothing.",
    },
    {
      q: "Is a short video always better?",
      a: "Short clips complete more often; longer ones can explain the offer better. Match length to the job and test creative — don’t copy a “market average length.”",
    },
    {
      q: "How is this different from YouTube Ads?",
      a: "Different inventory, auction, and attribution. Compare each channel’s contribution to your funnel — not an abstract “whose CPM is lower.”",
    },
    {
      q: "Can I rely on old industry rankings?",
      a: "Only as background. Five-year-old auto and finance share data and old targeting leaderboards don’t replace your own test and current account reports.",
    },
  ],
  sections: [
    {
      title: "What the Video Network is and why businesses use it",
      level: 2,
      paras: [
        "Video handles jobs text ads do poorly: show the product in action, put a face on the brand, convey emotion. The Video Network extends reach beyond a single host — to partner inventory and devices, including Smart TV where the format is available.",
        "It makes sense when you have a clear creative (even a short one) and a defined goal: awareness, warm retargeting, or warming prospects before search or performance campaigns. Without conversion tracking or brand proxy metrics, it’s easy to buy “pretty views.”",
      ],
      lists: [
        {
          intro: "Typical use cases:",
          items: [
            "product or season launch",
            "brand support alongside search",
            "retargeting site visitors",
            "warming B2C niches where the buying decision is emotional",
          ],
        },
      ],
      links: [
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Placement formats",
      level: 2,
      paras: [
        "Classic in-stream: preroll at the start, midroll in the middle, postroll at the end. Historically prerolls dominated — the viewer hasn’t settled into the content yet. On Smart TV, completion is often higher: people watch longer and skip less.",
        "Separately — in-page (video next to text) and interstitial in apps. Account settings and format names change over time: follow the current Yandex Direct / video product list, not a screenshot from an old review.",
      ],
      lists: [
        {
          intro: "What to weigh when choosing a format:",
          items: [
            "length and skip rules: can you land the offer",
            "device: mobile vs. desktop vs. TV",
            "goal: reach vs. click through to the site",
            "creative: do you have a version built for a short contact",
          ],
        },
      ],
      notes: [
        {
          title: "On old average CPV figures",
          kind: "tip",
          text: "Numbers like “preroll 0.29 ₽ per completed view” from 2018 reports can’t be copied into a 2026 plan. Cost per contact depends on niche, competition, and creative quality right now.",
        },
      ],
    },
    {
      title: "Video length and VTR",
      level: 2,
      paras: [
        "VTR (view-through rate) is usually higher for short videos — easier to hold attention. Advertisers often prefer 8–15 seconds as a balance of completion and message.",
        "Don’t chase max VTR at the cost of the message. A video people “finished” but don’t remember — or never click through from — is weaker than a slightly longer clip with a clear CTA and tracking.",
      ],
      tables: [
        {
          caption: "Length choice logic (not a price list)",
          headers: ["Length", "Strength", "Risk"],
          rows: [
            ["Up to ~7 s", "High completion", "Little room for the offer"],
            ["~8–15 s", "Message/VTR balance", "Needs a strong hook in the first seconds"],
            ["Longer", "Story or product detail", "More skips and lower VTR"],
          ],
        },
      ],
    },
    {
      title: "Targeting: from demographics to retargeting",
      level: 2,
      paras: [
        "Market reviews often led with socio-demographic segments, interests (film, sports), and search retargeting / user categories. For your campaign, what matters isn’t an industry leaderboard of five but the link: who buys → which account signal is closest → which creative.",
        "Start with a narrow, relevant segment and site or CRM retargeting (where available), then expand from the data. A broad “entertainment interest” audience without an offer and landing page is a classic way to burn reach budget.",
      ],
      lists: [
        {
          intro: "A practical order:",
          items: [
            "goal and KPI (reach / traffic / conversion)",
            "one or two audience hypotheses",
            "creative matched to format length",
            "UTM + Metrika goals",
            "a one- to two-week test → refine segments",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to evaluate results",
      level: 2,
      paras: [
        "Media layer: impressions, reach, frequency, VTR, viewability by placement rules, CPV/CPM in your auction. Marketing layer: brand search, direct visits, Brand Lift where available. Business layer: Metrika goals, leads, assisted conversions — last-click often undervalues video.",
        "Don’t compare “Video Network vs. YouTube” by CTR alone. Compare cost per goal action and funnel contribution with comparable creative and time period.",
      ],
      links: [
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The Yandex Video Network is a reach and video-contact tool on partner inventory. Match format and length to the job, targeting to your buyer, and evaluation to media → brand → business layers.",
        "Industry “figures and trends” from old reports are useful as market history — not a ready-made media plan.",
      ],
    },
  ],
  closing: [
    "Build a short creative for the chosen format, set KPIs and analytics goals, test one or two audiences — and watch funnel contribution, not just VTR from someone else’s half-year review.",
  ],
  related: [
    "effektivnost-videoreklamy",
    "videoreklama-youtube",
    "strategii-yandeks-direkt",
    "retargeting",
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
  ],
};

/** ES overlay for videoset-yandeksa — same structure as RU JSON / EN. */
export const videosetYandeksaEs: BlogPost = {
  slug: "videoset-yandeksa",
  title:
    "Red de vídeo de Yandex: formatos, targeting y cómo evaluar una campaña",
  date: "2018-10-18",
  category: "Paid search",
  cover: "/images/blog/videoset-yandeksa/cover-es.webp",
  excerpt:
    "Cómo funciona la Red de vídeo de Yandex: prerolls y placements in-page, targeting, VTR y amarrar resultados a metas de negocio — sin tratar shares de industria y CPV de 2018 como la lista de precios de hoy.",
  lead: [
    "La Red de vídeo de Yandex sirve vídeo en sitios partner y en el ecosistema Yandex: antes, durante y después del contenido, más formatos in-page e interstitial móvil. No es «otro banner más» — es media de vídeo con su propia lógica de completion y coste por contacto.",
    "Abajo: formatos, qué mirar en el setup y cómo leer resultados. Shares de presupuesto por industria, CPV medio y rankings de targeting de reviews de mitad de año 2018 son una foto histórica — no un media plan actual. Revisa formatos y pujas en la cuenta en vivo.",
  ],
  faq: [
    {
      q: "¿La Red de vídeo y la Red de display son lo mismo?",
      a: "Son partes relacionadas del mismo ecosistema, pero los formatos de vídeo y las métricas (VTR, completion) difieren de los banners estándar. Revisa el tipo de campaña y las condiciones de display en la interfaz actual.",
    },
    {
      q: "¿Qué importa más: VTR o clics?",
      a: "Depende de la meta. Para marca y alcance, mira completion y frecuencia. Para performance, conversiones y coste por acción. VTR solo, sin embudo, no prueba nada.",
    },
    {
      q: "¿Un vídeo corto siempre es mejor?",
      a: "Los clips cortos completan más a menudo; los más largos pueden explicar mejor la oferta. Encaja la duración con el trabajo y prueba creativo — no copies una «longitud media del mercado».",
    },
    {
      q: "¿En qué se diferencia de YouTube Ads?",
      a: "Inventario, subasta y atribución distintos. Compara la contribución de cada canal a tu embudo — no un «CPM de quién es más bajo» abstracto.",
    },
    {
      q: "¿Puedo fiarme de rankings viejos de industria?",
      a: "Solo como fondo. Datos de share de auto y finanzas de hace cinco años y leaderboards de targeting viejos no sustituyen tu propio test y los informes actuales de la cuenta.",
    },
  ],
  sections: [
    {
      title: "Qué es la Red de vídeo y por qué la usan los negocios",
      level: 2,
      paras: [
        "El vídeo hace trabajos que los anuncios de texto hacen mal: mostrar el producto en acción, poner cara a la marca, transmitir emoción. La Red de vídeo amplía el alcance más allá de un solo host — a inventario partner y dispositivos, incluido Smart TV donde el formato está disponible.",
        "Tiene sentido cuando tienes un creativo claro (aunque sea corto) y una meta definida: awareness, retargeting cálido o calentar prospectos antes de campañas de búsqueda o performance. Sin tracking de conversión o métricas proxy de marca, es fácil comprar «views bonitas».",
      ],
      lists: [
        {
          intro: "Casos típicos de uso:",
          items: [
            "lanzamiento de producto o temporada",
            "soporte de marca junto a búsqueda",
            "retargeting de visitantes del sitio",
            "calentar nichos B2C donde la decisión de compra es emocional",
          ],
        },
      ],
      links: [
        {
          label: "Eficacia de la publicidad en vídeo",
          href: "/es/blog/effektivnost-videoreklamy/",
        },
        {
          label: "Anuncios de vídeo en YouTube",
          href: "/es/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Formatos de placement",
      level: 2,
      paras: [
        "In-stream clásico: preroll al inicio, midroll en medio, postroll al final. Históricamente dominaban los prerolls — el espectador aún no se ha asentado en el contenido. En Smart TV, la completion suele ser más alta: la gente mira más y salta menos.",
        "Aparte — in-page (vídeo junto al texto) e interstitial en apps. Settings de cuenta y nombres de formato cambian con el tiempo: sigue la lista actual de producto de Yandex Direct / vídeo, no un screenshot de un review viejo.",
      ],
      lists: [
        {
          intro: "Qué pesar al elegir formato:",
          items: [
            "duración y reglas de skip: puedes aterrizar la oferta",
            "dispositivo: móvil vs. desktop vs. TV",
            "meta: alcance vs. clic hacia el sitio",
            "creativo: tienes una versión pensada para un contacto corto",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre cifras medias viejas de CPV",
          kind: "tip",
          text: "Números como «preroll 0,29 ₽ por view completada» de informes de 2018 no se copian a un plan de 2026. El coste por contacto depende del nicho, la competencia y la calidad del creativo ahora mismo.",
        },
      ],
    },
    {
      title: "Duración del vídeo y VTR",
      level: 2,
      paras: [
        "El VTR (view-through rate) suele ser más alto en vídeos cortos — más fácil retener atención. Los anunciantes a menudo prefieren 8–15 segundos como equilibrio entre completion y mensaje.",
        "No persigas el VTR máximo a costa del mensaje. Un vídeo que la gente «terminó» pero no recuerda — o desde el que nunca hace clic — es más débil que un clip un poco más largo con CTA claro y tracking.",
      ],
      tables: [
        {
          caption: "Lógica de elección de duración (no una lista de precios)",
          headers: ["Duración", "Fuerza", "Riesgo"],
          rows: [
            ["Hasta ~7 s", "Alta completion", "Poco espacio para la oferta"],
            ["~8–15 s", "Equilibrio mensaje/VTR", "Necesita un gancho fuerte en los primeros segundos"],
            ["Más largo", "Historia o detalle de producto", "Más skips y VTR más bajo"],
          ],
        },
      ],
    },
    {
      title: "Targeting: de demografía a retargeting",
      level: 2,
      paras: [
        "Los reviews de mercado a menudo lideraban con segmentos sociodemográficos, intereses (cine, deporte) y retargeting de búsqueda / categorías de usuario. Para tu campaña, lo que importa no es un leaderboard de industria de cinco sino el vínculo: quién compra → qué señal de cuenta está más cerca → qué creativo.",
        "Empieza con un segmento estrecho y relevante y retargeting de sitio o CRM (donde esté disponible), luego amplía desde los datos. Una audiencia amplia de «interés en entretenimiento» sin oferta ni landing es una forma clásica de quemar presupuesto de alcance.",
      ],
      lists: [
        {
          intro: "Un orden práctico:",
          items: [
            "meta y KPI (alcance / tráfico / conversión)",
            "una o dos hipótesis de audiencia",
            "creativo encajado a la duración del formato",
            "UTM + metas de Metrika",
            "un test de una a dos semanas → afinar segmentos",
          ],
        },
      ],
      links: [
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Cómo evaluar resultados",
      level: 2,
      paras: [
        "Capa media: impresiones, alcance, frecuencia, VTR, viewability según reglas de placement, CPV/CPM en tu subasta. Capa marketing: búsqueda de marca, visitas directas, Brand Lift donde esté. Capa negocio: metas de Metrika, leads, conversiones asistidas — last-click a menudo infravalora el vídeo.",
        "No compares «Red de vídeo vs. YouTube» solo por CTR. Compara coste por acción de meta y contribución al embudo con creativo y periodo comparables.",
      ],
      links: [
        {
          label: "Eficacia de la publicidad en vídeo",
          href: "/es/blog/effektivnost-videoreklamy/",
        },
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "La Red de vídeo de Yandex es una herramienta de alcance y contacto en vídeo sobre inventario partner. Encaja formato y duración con el trabajo, targeting con tu comprador y evaluación con las capas media → marca → negocio.",
        "Las «cifras y tendencias» de industria de informes viejos sirven como historia de mercado — no como un media plan listo.",
      ],
    },
  ],
  closing: [
    "Arma un creativo corto para el formato elegido, fija KPIs y metas de analítica, prueba una o dos audiencias — y mira la contribución al embudo, no solo el VTR de un review de mitad de año ajeno.",
  ],
  related: [
    "effektivnost-videoreklamy",
    "videoreklama-youtube",
    "strategii-yandeks-direkt",
    "retargeting",
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
  ],
};

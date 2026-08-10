import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklamnyy-kabinet — same structure as RU JSON. */
export const reklamnyyKabinetEn: BlogPost = {
  slug: "reklamnyy-kabinet",
  title: "Ad account: what it is and where to start",
  date: "2021-04-16",
  category: "Paid search",
  cover: "/images/blog/reklamnyy-kabinet/cover-en.webp",
  excerpt:
    "What an ad account is, which entities almost always exist (campaign, budget, audience, stats), and how to approach a launch in Yandex Direct and social ad accounts.",
  lead: [
    "An ad account is the interface where you create campaigns, set budget and audience, and read stats. Each platform has its own UI, but the logic is similar.",
    "Below: shared vocabulary and a sensible launch order. Menus change; for Meta platforms this article is informational and does not urge you to use the service.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Where should a beginner in Russia start?",
      a: "Often with Yandex Direct and/or VK ads — check current access and platform documents. Elsewhere, pick the accounts your audience and legal context actually allow.",
    },
    {
      q: "How is an ad account different from a site?",
      a: "The account manages ad delivery. The site/landing receives traffic and converts.",
    },
    {
      q: "Do I need Yandex Metrica?",
      a: "Yes for judging leads and ROI on Yandex traffic. Platform pixels/counters — by task.",
    },
    {
      q: "What are a campaign and an ad?",
      a: "A campaign is budget and strategy level. Groups/ad sets set targeting. Ads are creatives.",
    },
    {
      q: "Can I run everything by gut feel?",
      a: "No. Without goals and tagging you can’t tell clicks from leads.",
    },
    {
      q: "What budget do I need for a test?",
      a: "It depends on niche, CPC, and goal. Set an amount enough to gather data, and decide in advance when to stop or scale.",
    },
  ],
  sections: [
    {
      title: "How an ad account is structured",
      level: 2,
      paras: [
        "Almost everywhere: account → campaigns → groups → ads → stats. Plus billing, moderation, and audience settings.",
      ],
      lists: [
        {
          intro: "Before the first launch:",
          items: [
            "goal (lead, purchase, traffic)",
            "landing page",
            "budget and test period",
            "analytics counter",
            "creatives and offer",
          ],
        },
      ],
    },
    {
      title: "Platforms: Direct, VK, and others",
      level: 2,
      paras: [
        "Yandex Direct — Yandex search and networks. VK — its own ad account. Other platforms have separate accounts and access rules.",
        "Facebook and Instagram ads historically ran through Meta Ads Manager; for users in Russia, mind the legal status of Meta products.",
      ],
      lists: [
        {
          intro: "Working minimum in any account:",
          items: [
            "clear campaign structure",
            "UTM or tagging",
            "daily/total budget",
            "negatives / audience exclusions",
            "regular stats review",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "Typical start mistakes",
      level: 2,
      paras: [
        "Sending traffic to home with no offer, mixing goals in one campaign, ignoring bounce and leads, expecting miracles without creative tests.",
      ],
      lists: [
        {
          intro: "Checklist after moderation:",
          items: [
            "ads are actually delivering",
            "landing opens on mobile",
            "analytics goals fire",
            "budget isn’t burning on irrelevance",
          ],
        },
      ],
    },
    {
      title: "Prepare measurement before launch",
      level: 2,
      paras: [
        "An ad account doesn’t create demand or fix a weak landing. Before topping up, check that the form works, calls are answered, prices and terms are current, and the target action is visible in analytics.",
        "Tie ads to outcomes via goals and UTM tags. Then you can split campaigns, creatives, and audiences in reports — not argue about ad quality from total clicks alone.",
      ],
      lists: [
        {
          intro: "Minimum prep:",
          items: [
            "campaign goal and acceptable cost per inquiry",
            "analytics set up and a test conversion",
            "landing with a clear offer",
            "someone responsible for lead handling",
          ],
        },
      ],
    },
    {
      title: "Build a readable campaign structure",
      level: 2,
      paras: [
        "Don’t mix different products, regions, and goals in one campaign if you want readable stats. Structure should show what worked: query, audience, creative, placement, or landing.",
        "Start with a small number of logical groups. Over-splitting starves each group of data; one huge group hides demand differences. Name campaigns and ads so the team can read them.",
      ],
      lists: [
        {
          intro: "Split campaigns by:",
          items: [
            "different products or offers",
            "audience geography and language",
            "search, networks, or placement formats",
            "funnel stage and communication goal",
          ],
        },
      ],
    },
    {
      title: "Test and optimize without sharp conclusions",
      level: 2,
      paras: [
        "After launch, confirm impressions, clicks, and goals log correctly. Then let the campaign gather enough data within the agreed budget. Early edits to every parameter hide what actually moved the result.",
        "Cut clear irrelevance, refine queries and audiences, refresh weak creatives. Don’t chase a cheap click alone: value is leads, sales, and lead quality.",
      ],
      lists: [
        {
          intro: "In a regular review include:",
          items: [
            "spend, impressions, clicks, and conversions",
            "search queries or placement sites",
            "cost and quality of inquiries",
            "landing state and manager reply speed",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for reklamnyy-kabinet — same structure as RU JSON / EN. */
export const reklamnyyKabinetEs: BlogPost = {
  slug: "reklamnyy-kabinet",
  title: "Cuenta de ads: qué es y por dónde empezar",
  date: "2021-04-16",
  category: "Paid search",
  cover: "/images/blog/reklamnyy-kabinet/cover-es.webp",
  excerpt:
    "Qué es una cuenta de ads, qué entidades casi siempre existen (campaña, presupuesto, audiencia, stats) y cómo plantear un lanzamiento en Yandex Direct y cuentas de ads social.",
  lead: [
    "Una cuenta de ads es la interfaz donde creas campañas, fijas presupuesto y audiencia y lees stats. Cada plataforma tiene su UI, pero la lógica se parece.",
    "Abajo: vocabulario compartido y un orden sensato de lanzamiento. Los menús cambian; para plataformas Meta este artículo es informativo y no te empuja a usar el servicio.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* e Instagram* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por dónde debería empezar un principiante en Rusia?",
      a: "A menudo con Yandex Direct y/o ads de VK — revisa accesos actuales y documentos de la plataforma. En otros sitios, elige las cuentas que tu audiencia y el contexto legal permitan de verdad.",
    },
    {
      q: "¿En qué se diferencia una cuenta de ads de un sitio?",
      a: "La cuenta gestiona la entrega de anuncios. El sitio/landing recibe el tráfico y convierte.",
    },
    {
      q: "¿Hace falta Yandex Metrica?",
      a: "Sí para juzgar leads y ROI del tráfico de Yandex. Píxeles/contadores de plataforma — según la tarea.",
    },
    {
      q: "¿Qué son una campaña y un anuncio?",
      a: "La campaña es el nivel de presupuesto y estrategia. Los grupos/ad sets fijan el targeting. Los ads son los creativos.",
    },
    {
      q: "¿Puedo llevarlo todo a ojo?",
      a: "No. Sin goals y etiquetado no distingues clics de leads.",
    },
    {
      q: "¿Qué presupuesto hace falta para un test?",
      a: "Depende del nicho, el CPC y el objetivo. Fija un importe suficiente para reunir datos y decide de antemano cuándo parar o escalar.",
    },
  ],
  sections: [
    {
      title: "Cómo se estructura una cuenta de ads",
      level: 2,
      paras: [
        "Casi en todas partes: cuenta → campañas → grupos → ads → stats. Más billing, moderación y ajustes de audiencia.",
      ],
      lists: [
        {
          intro: "Antes del primer lanzamiento:",
          items: [
            "objetivo (lead, compra, tráfico)",
            "landing page",
            "presupuesto y periodo de test",
            "contador de analytics",
            "creativos y oferta",
          ],
        },
      ],
    },
    {
      title: "Plataformas: Direct, VK y otras",
      level: 2,
      paras: [
        "Yandex Direct — búsqueda y redes de Yandex. VK — su propia cuenta de ads. Otras plataformas tienen cuentas y reglas de acceso aparte.",
        "Los ads de Facebook e Instagram históricamente iban por Meta Ads Manager; si operas desde Rusia, ten en cuenta el estatus legal de los productos Meta.",
      ],
      lists: [
        {
          intro: "Mínimo de trabajo en cualquier cuenta:",
          items: [
            "estructura de campaña clara",
            "UTM o etiquetado",
            "presupuesto diario/total",
            "negativos / exclusiones de audiencia",
            "revisión regular de stats",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
      ],
    },
    {
      title: "Errores típicos al empezar",
      level: 2,
      paras: [
        "Mandar tráfico a la home sin oferta, mezclar goals en una campaña, ignorar bounce y leads, esperar milagros sin tests de creativos.",
      ],
      lists: [
        {
          intro: "Checklist tras la moderación:",
          items: [
            "los ads se están sirviendo de verdad",
            "la landing abre en móvil",
            "los goals de analytics disparan",
            "el presupuesto no se quema en irrelevancia",
          ],
        },
      ],
    },
    {
      title: "Prepara la medición antes del lanzamiento",
      level: 2,
      paras: [
        "Una cuenta de ads no crea demanda ni arregla una landing floja. Antes de recargar, comprueba que el formulario funciona, se responden las llamadas, precios y condiciones están al día y la acción objetivo se ve en analytics.",
        "Ata los ads a resultados con goals y etiquetas UTM. Así puedes partir campañas, creativos y audiencias en informes — no discutir la calidad del anuncio solo con clics totales.",
      ],
      lists: [
        {
          intro: "Prep mínimo:",
          items: [
            "objetivo de campaña y coste aceptable por consulta",
            "analytics montada y una conversión de prueba",
            "landing con oferta clara",
            "alguien responsable del manejo de leads",
          ],
        },
      ],
    },
    {
      title: "Arma una estructura de campaña legible",
      level: 2,
      paras: [
        "No mezcles productos, regiones y goals distintos en una campaña si quieres stats legibles. La estructura debe mostrar qué funcionó: consulta, audiencia, creativo, emplazamiento o landing.",
        "Empieza con pocos grupos lógicos. Fragmentar de más deja cada grupo sin datos; un grupo enorme oculta diferencias de demanda. Nombra campañas y ads para que el equipo los lea.",
      ],
      lists: [
        {
          intro: "Separa campañas por:",
          items: [
            "productos u ofertas distintas",
            "geografía e idioma de la audiencia",
            "búsqueda, redes o formatos de emplazamiento",
            "etapa del funnel y objetivo de comunicación",
          ],
        },
      ],
    },
    {
      title: "Testea y optimiza sin conclusiones precipitadas",
      level: 2,
      paras: [
        "Tras el lanzamiento, confirma que impresiones, clics y goals se registran bien. Luego deja que la campaña reúna datos suficientes dentro del presupuesto acordado. Editar pronto cada parámetro oculta qué movió el resultado.",
        "Corta irrelevancia clara, afina consultas y audiencias, refresca creativos flojos. No persigas solo el clic barato: el valor son leads, ventas y calidad del lead.",
      ],
      lists: [
        {
          intro: "En una revisión regular incluye:",
          items: [
            "gasto, impresiones, clics y conversiones",
            "consultas de búsqueda o sitios de emplazamiento",
            "coste y calidad de las consultas",
            "estado de la landing y velocidad de respuesta del manager",
          ],
        },
      ],
    },
  ],
};

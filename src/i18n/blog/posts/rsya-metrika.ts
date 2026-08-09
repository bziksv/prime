import type { BlogPost } from "../../../data/blog";

/** EN overlay for rsya-metrika — same structure as RU JSON. */
export const rsyaMetrikaEn: BlogPost = {
  slug: "rsya-metrika",
  title: "YAN revenue metrics in Yandex Metrica",
  date: "2018-07-06",
  category: "Digital marketing",
  cover: "/images/blog/rsya-metrika/cover-en.webp",
  excerpt:
    "Yandex Advertising Network (YAN) revenue in Metrica: why publishers watch income and ad views, which metrics matter, and how to connect reports — without outdated 2018 account screenshots.",
  lead: [
    "If your site is in the Yandex Advertising Network (YAN) as a publisher, Metrica can show more than visits: ad revenue, block performance, and cuts by source and device.",
    "Below: what the reports mean for a publisher and the connection logic. Menu names and metric sets change — check current Yandex Help. This piece is about publisher revenue analytics, not buying ads in Yandex Direct.",
  ],
  faq: [
    {
      q: "Who needs YAN revenue metrics?",
      a: "Site/app owners who show YAN ads and want income next to audience data in Metrica.",
    },
    {
      q: "Is this the same as advertiser spend in Direct?",
      a: "No. Here it’s publisher income, not an advertiser account with CPC/CPA campaigns.",
    },
    {
      q: "Do I need to be a YAN partner?",
      a: "Yes: without network participation and consent to share data, revenue reports won’t appear.",
    },
    {
      q: "What should I look at first?",
      a: "Revenue and ad views/renders by pages and sources: where audience exists but monetization is weak — and the reverse.",
    },
    {
      q: "Why CPM and ARPU?",
      a: "CPM is yield per impressions; ARPU is per user. They help compare sections and periods, not only absolute money.",
    },
    {
      q: "Do ad blockers matter?",
      a: "Yes: some impressions never happen. Reports may include fields about ad unavailability — see current Help fields.",
    },
    {
      q: "Is connecting paid?",
      a: "Metrica reports for partners are usually free. YAN partnership terms are separate.",
    },
    {
      q: "Do the counters have to match?",
      a: "Yes: the ID in the partner interface and on the site/in Metrica must match Yandex’s instructions, or data won’t join.",
    },
  ],
  sections: [
    {
      title: "Why link YAN + Metrica",
      level: 2,
      paras: [
        "The YAN partner account shows money. Metrica shows behavior. Together you see which traffic feeds revenue and which pages are empty on ads despite a good audience.",
        "That makes it easier to decide where to strengthen units, where not to overload with ads, and which sources bring valuable vs empty views.",
      ],
      lists: [
        {
          intro: "Typical cuts:",
          items: [
            "revenue and ad views",
            "pages and sections",
            "devices and geo",
            "traffic sources / channels",
            "ad density vs interest in content",
          ],
        },
      ],
    },
    {
      title: "Which metrics make sense",
      level: 2,
      paras: [
        "Actual impressions and revenue are the base. Without them you can’t talk about monetization.",
        "CPM / renders / ad requests help judge the technical yield of units.",
        "ARPU and similar per-user metrics help compare sections and seasonality.",
        "Check the exact field glossary in Help: Yandex renamed and expanded reports since 2018.",
      ],
      notes: [
        {
          title: "Don’t memorize 2018 screenshots",
          kind: "tip",
          text: "The “checkbox in site settings” path may have changed. Look up the current revenue-transfer scenario in Metrica / YAN Help.",
        },
      ],
    },
    {
      title: "How connection works (step logic)",
      level: 2,
      paras: [
        "A working Metrica counter on the site.",
        "A site in the YAN partner interface with consent to send data to Metrica.",
        "Align counter/site IDs per the instructions.",
        "Set access rights to financial reports (don’t show revenue to every editor).",
        "Confirm data appears in reports after stats accumulate — not in a minute.",
      ],
      links: [
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "How to read for decisions",
      level: 2,
      paras: [
        "Pages with high traffic and low revenue — hypothesis: few/poor units or strong adblock on the segment.",
        "High revenue with falling depth — maybe ad overload; balance UX and money.",
        "Check season and layout changes: a new template often breaks unit rendering.",
      ],
      links: [
        {
          label: "Yandex Video Network",
          href: "/en/blog/videoset-yandeksa/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "YAN revenue in Metrica is publisher reports, not a Direct advertiser account.",
        "You need a YAN partnership, matched counters, and current Help for connection.",
        "Read revenue next to audience so monetization doesn’t kill UX.",
      ],
    },
  ],
  closing: [
    "If you’re already in YAN — confirm revenue flows into Metrica, and once a week compare top pages by money vs visits; faster than guessing from the partner account alone.",
  ],
  related: [
    "metrika-ustanovka",
    "metrika-tseli",
    "metrika-posetiteli",
    "videoset-yandeksa",
    "istochniki-trafika",
    "looker-studio",
  ],
};

/** ES overlay for rsya-metrika — same structure as RU JSON / EN. */
export const rsyaMetrikaEs: BlogPost = {
  slug: "rsya-metrika",
  title: "Métricas de ingresos de YAN en Yandex Metrica",
  date: "2018-07-06",
  category: "Marketing digital",
  cover: "/images/blog/rsya-metrika/cover.webp",
  excerpt:
    "Ingresos de la Red Publicitaria de Yandex (YAN) en Metrica: por qué los publishers miran ingresos e impresiones de ads, qué métricas importan y cómo conectar informes — sin capturas obsoletas de cuentas de 2018.",
  lead: [
    "Si tu sitio está en la Red Publicitaria de Yandex (YAN) como publisher, Metrica puede mostrar más que visitas: ingresos de ads, rendimiento de bloques y cortes por fuente y dispositivo.",
    "Abajo: qué significan los informes para un publisher y la lógica de conexión. Los nombres de menú y sets de métricas cambian — revisa la Help actual de Yandex. Esta pieza es sobre analítica de ingresos del publisher, no sobre comprar anuncios en Yandex Direct.",
  ],
  faq: [
    {
      q: "¿Quién necesita métricas de ingresos de YAN?",
      a: "Dueños de sitio/app que muestran ads de YAN y quieren el ingreso junto a los datos de audiencia en Metrica.",
    },
    {
      q: "¿Es lo mismo que el gasto del anunciante en Direct?",
      a: "No. Aquí es ingreso del publisher, no una cuenta de anunciante con campañas CPC/CPA.",
    },
    {
      q: "¿Hay que ser partner de YAN?",
      a: "Sí: sin participación en la red y consentimiento para compartir datos, los informes de ingresos no aparecen.",
    },
    {
      q: "¿Qué miro primero?",
      a: "Ingresos e impresiones/renders de ads por páginas y fuentes: dónde hay audiencia pero la monetización es débil — y lo contrario.",
    },
    {
      q: "¿Para qué CPM y ARPU?",
      a: "CPM es yield por impresiones; ARPU es por usuario. Ayudan a comparar secciones y periodos, no solo el dinero absoluto.",
    },
    {
      q: "¿Importan los bloqueadores de ads?",
      a: "Sí: algunas impresiones nunca ocurren. Los informes pueden incluir campos sobre indisponibilidad de ads — ver campos actuales de Help.",
    },
    {
      q: "¿Conectar es de pago?",
      a: "Los informes de Metrica para partners suelen ser gratis. Los términos de partnership de YAN son aparte.",
    },
    {
      q: "¿Los contadores tienen que coincidir?",
      a: "Sí: el ID en la interfaz de partner y en el sitio/en Metrica debe cuadrar con las instrucciones de Yandex, o los datos no se unen.",
    },
  ],
  sections: [
    {
      title: "Por qué vincular YAN + Metrica",
      level: 2,
      paras: [
        "La cuenta de partner de YAN muestra el dinero. Metrica muestra el comportamiento. Juntos ves qué tráfico alimenta ingresos y qué páginas están vacías de ads pese a una buena audiencia.",
        "Así es más fácil decidir dónde reforzar unidades, dónde no sobrecargar con ads y qué fuentes traen views valiosas vs vacías.",
      ],
      lists: [
        {
          intro: "Cortes típicos:",
          items: [
            "ingresos e impresiones de ads",
            "páginas y secciones",
            "dispositivos y geo",
            "fuentes / canales de tráfico",
            "densidad de ads vs interés en el contenido",
          ],
        },
      ],
    },
    {
      title: "Qué métricas tienen sentido",
      level: 2,
      paras: [
        "Impresiones reales e ingresos son la base. Sin ellos no se puede hablar de monetización.",
        "CPM / renders / ad requests ayudan a juzgar el yield técnico de las unidades.",
        "ARPU y métricas similares por usuario ayudan a comparar secciones y estacionalidad.",
        "Revisa el glosario exacto de campos en Help: Yandex renombró y amplió informes desde 2018.",
      ],
      notes: [
        {
          title: "No memorices capturas de 2018",
          kind: "tip",
          text: "La ruta del «checkbox en ajustes del sitio» puede haber cambiado. Busca el escenario actual de transferencia de ingresos en Help de Metrica / YAN.",
        },
      ],
    },
    {
      title: "Cómo funciona la conexión (lógica por pasos)",
      level: 2,
      paras: [
        "Un contador de Metrica funcionando en el sitio.",
        "Un sitio en la interfaz de partner de YAN con consentimiento para enviar datos a Metrica.",
        "Alinea IDs de contador/sitio según las instrucciones.",
        "Fija derechos de acceso a informes financieros (no muestres ingresos a cada editor).",
        "Confirma que los datos aparecen en los informes tras acumular stats — no en un minuto.",
      ],
      links: [
        {
          label: "Instalar Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
        {
          label: "Objetivos en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Cómo leer para decidir",
      level: 2,
      paras: [
        "Páginas con mucho tráfico y poco ingreso — hipótesis: pocas/malas unidades o adblock fuerte en el segmento.",
        "Alto ingreso con profundidad en caída — tal vez sobrecarga de ads; equilibra UX y dinero.",
        "Revisa temporada y cambios de layout: una plantilla nueva a menudo rompe el render de unidades.",
      ],
      links: [
        {
          label: "Red de Vídeo de Yandex",
          href: "/blog/videoset-yandeksa/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Los ingresos de YAN en Metrica son informes de publisher, no una cuenta de anunciante de Direct.",
        "Hace falta partnership de YAN, contadores alineados y Help actual para la conexión.",
        "Lee el ingreso junto a la audiencia para que la monetización no mate la UX.",
      ],
    },
  ],
  closing: [
    "Si ya estás en YAN — confirma que los ingresos fluyen a Metrica y una vez a la semana compara las páginas líderes por dinero vs visitas; más rápido que adivinar solo desde la cuenta de partner.",
  ],
  related: [
    "metrika-ustanovka",
    "metrika-tseli",
    "istochniki-trafika",
    "looker-studio",
    "metrika-posetiteli",
    "videoset-yandeksa",
  ],
};

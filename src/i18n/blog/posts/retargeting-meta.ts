import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting-meta — same structure as RU JSON. */
export const retargetingMetaEn: BlogPost = {
  slug: "retargeting-meta",
  title: "Retargeting on Instagram and Facebook: audience types",
  date: "2020-01-13",
  category: "Digital marketing",
  cover: "/images/blog/retargeting-meta/cover-en.webp",
  excerpt:
    "Custom audiences for retargeting: site visitors, customer lists, and Instagram / Facebook engagement — how segments work, without an outdated Ads Manager click-path.",
  lead: [
    "Social retargeting leans on warm segments: people who already visited the site, sit in your CRM, or engaged with content. In the Instagram and Facebook ecosystem those groups were historically called custom audiences.",
    "Ads account UIs change. Below: audience-type logic and sensible setup — not clicks on outdated screenshots. The general retargeting foundation is in a separate article. This piece is informational and does not urge use of Meta platforms.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How does this differ from ordinary retargeting?",
      a: "Same idea: bring back people you already know. The difference is the signal source — site pixel/tag, list upload, in-account engagement events — not only Metrica or display networks.",
    },
    {
      q: "Do I need a pixel on the site?",
      a: "For a “visited the site” segment — yes: without a visit or cart event the audience is empty. For a customer list or account engagement a pixel is not required.",
    },
    {
      q: "Can I upload a customer list?",
      a: "In account logic — yes, with a lawful basis and consent. In practice data quality, platform hashing rules, and excluding buyers from chase campaigns matter.",
    },
    {
      q: "What’s stronger: 3 seconds of video or 95% watched?",
      a: "Deeper watch = narrower and warmer segment. A wide threshold gives volume; a tight one gives quality. Test both and watch CPA — not gut feel.",
    },
    {
      q: "Why not copy old Ads Manager screenshots?",
      a: "Menus and tab names update. Focus on audience source type and events — not “button on the left → third icon.”",
    },
    {
      q: "Does this connect to search ads and SEO?",
      a: "Directly — no. Indirectly: the same landings, offer, and conversion exclusions affect any retarget. General theory is in the retargeting article.",
    },
  ],
  sections: [
    {
      title: "Why custom audiences",
      level: 2,
      paras: [
        "Cold reach is more expensive to convert. “Already touched” segments let you remind about a cart, promo, or unfinished form — with creative matched to the funnel stage.",
        "Typical signals: visit and site actions, lead form without submit, video view, post reactions. Retarget does not replace product quality and checkout convenience.",
      ],
      lists: [
        {
          intro: "Three working segment families:",
          items: [
            "site visitors (and events: view, cart, lead)",
            "your customers and lookalikes (lists / lookalike logic)",
            "engagement in Instagram and Facebook accounts",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: the base",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Site visitors",
      level: 2,
      paras: [
        "The segment is built from counter events: all visits in N days, specific URL views, add to cart, checkout start. The narrower the event, the more relevant the offer.",
        "It makes sense to remind about an abandoned cart, promo deadline, or free shipping — if that is true for the segment. Exclude buyers and hard refusals, or the brand chases for nothing.",
      ],
      lists: [
        {
          intro: "What to watch when building:",
          items: [
            "lookback window (often 7–30 days, rarely longer)",
            "frequency caps — so you don’t annoy",
            "separate creatives per stage",
            "exclude conversions and staff",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Without a correct tag install and consent for data processing the segment is either empty or legally risky. Measurement and policy first — then the campaign.",
        },
      ],
    },
    {
      title: "Customers and lookalike audiences",
      level: 2,
      paras: [
        "A CRM list (email, phone — in the format the account accepts) gives an “already bought / left a contact” segment. Use it for upsell, reactivation, or as a seed for lookalikes.",
        "Lookalikes are not magic — they are a statistical expansion from seed traits. Seed quality beats size: a junk list yields expensive noise.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "separate payers from mere leads",
            "refresh exports",
            "don’t mix different products in one seed",
            "count segment CPA, not only reach",
          ],
        },
      ],
    },
    {
      title: "Engagement on Instagram and Facebook",
      level: 2,
      paras: [
        "A separate class — people who watched video, opened a profile, reacted to posts, started a lead form, or marked interest in an event. An interest signal without a site visit.",
        "For video, compare short views vs deep ones (50%+ / full watch): volume vs temperature. For forms — opened vs completed; for events — page view vs “going.”",
      ],
      lists: [
        {
          intro: "Typical engagement sources:",
          items: [
            "video views by time or percent threshold",
            "profile and content interactions",
            "lead forms (started / completed)",
            "interest in an event / ticket",
          ],
        },
      ],
    },
    {
      title: "How not to break the campaign",
      level: 2,
      paras: [
        "One creative for all warm people is a common mistake. Cart, bare visit, and video completion need different messages. Frequency and segment lifetime limit burnout.",
        "Don’t confuse audience setup with campaign objective: the segment answers “who,” creative and offer answer “why come back.” Legal limits on platforms in Russia are separate from marketing logic.",
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  closing: [
    "Instagram and Facebook retarget rests on three pillars: site events, quality lists, and account engagement. Build tight segments, exclude conversions, refresh creatives — without chasing outdated Ads Manager clicks.",
  ],
  related: [
    "retargeting",
    "prazdnichnyy-retargeting",
    "tselevaya-auditoriya",
    "reklama-instagram",
    "utm-metki",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for retargeting-meta — same structure as RU JSON / EN. */
export const retargetingMetaEs: BlogPost = {
  slug: "retargeting-meta",
  title: "Retargeting en Instagram y Facebook: tipos de audiencia",
  date: "2020-01-13",
  category: "Digital marketing",
  cover: "/images/blog/retargeting-meta/cover.webp",
  excerpt:
    "Custom audiences para retargeting: visitantes del sitio, listas de clientes y engagement en Instagram / Facebook — cómo funcionan los segmentos, sin un click-path obsoleto de Ads Manager.",
  lead: [
    "El retargeting en redes se apoya en segmentos cálidos: gente que ya visitó el sitio, está en tu CRM o interactuó con el contenido. En el ecosistema de Instagram y Facebook esos grupos se llamaron históricamente custom audiences.",
    "Las UIs de las cuentas de ads cambian. Abajo: lógica de tipos de audiencia y un setup sensato — no clics en capturas obsoletas. La base general del retargeting está en un artículo aparte. Esta pieza es informativa y no empuja al uso de plataformas Meta.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación de Rusia la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia del retargeting ordinario?",
      a: "La misma idea: traer de vuelta a gente que ya conoces. La diferencia es la fuente de la señal — píxel/tag del sitio, upload de lista, eventos de engagement en la cuenta — no solo Métrica o redes display.",
    },
    {
      q: "¿Hace falta un píxel en el sitio?",
      a: "Para un segmento «visitó el sitio» — sí: sin evento de visita o carrito la audiencia está vacía. Para una lista de clientes o engagement en la cuenta un píxel no es obligatorio.",
    },
    {
      q: "¿Puedo subir una lista de clientes?",
      a: "En la lógica de la cuenta — sí, con base legal y consentimiento. En la práctica importan la calidad de los datos, las reglas de hashing de la plataforma y excluir compradores de campañas de persecución.",
    },
    {
      q: "¿Qué es más fuerte: 3 segundos de vídeo o 95% visto?",
      a: "Más profundidad de visionado = segmento más estrecho y cálido. Un umbral amplio da volumen; uno estrecho da calidad. Prueba ambos y mira CPA — no la intuición.",
    },
    {
      q: "¿Por qué no copiar capturas viejas de Ads Manager?",
      a: "Los menús y nombres de tabs se actualizan. Fócate en el tipo de fuente de audiencia y los eventos — no en «botón a la izquierda → tercer icono».",
    },
    {
      q: "¿Esto se conecta a ads de búsqueda y SEO?",
      a: "De forma directa — no. De forma indirecta: las mismas landings, oferta y exclusiones de conversión afectan cualquier retarget. La teoría general está en el artículo de retargeting.",
    },
  ],
  sections: [
    {
      title: "Por qué custom audiences",
      level: 2,
      paras: [
        "El reach frío es más caro de convertir. Los segmentos «ya tocados» permiten recordar un carrito, una promo o un formulario a medias — con creative alineado a la etapa del funnel.",
        "Señales típicas: visita y acciones en el sitio, formulario de lead sin enviar, view de vídeo, reacciones a posts. El retarget no sustituye la calidad del producto ni la comodidad del checkout.",
      ],
      lists: [
        {
          intro: "Tres familias de segmento que funcionan:",
          items: [
            "visitantes del sitio (y eventos: view, carrito, lead)",
            "tus clientes y lookalikes (listas / lógica lookalike)",
            "engagement en cuentas de Instagram y Facebook",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: la base",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Visitantes del sitio",
      level: 2,
      paras: [
        "El segmento se arma con eventos del contador: todas las visitas en N días, views de URL concretas, add to cart, inicio de checkout. Cuanto más estrecho el evento, más relevante la oferta.",
        "Tiene sentido recordar un carrito abandonado, el plazo de una promo o envío gratis — si eso es verdad para el segmento. Excluye compradores y rechazos duros, o la marca persigue por nada.",
      ],
      lists: [
        {
          intro: "Qué vigilar al armar:",
          items: [
            "ventana de lookback (a menudo 7–30 días, rara vez más)",
            "topes de frecuencia — para no molestar",
            "creatives aparte por etapa",
            "excluir conversiones y staff",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Sin un install correcto del tag y consentimiento para el tratamiento de datos el segmento está vacío o es legalmente arriesgado. Primero medición y política — luego la campaña.",
        },
      ],
    },
    {
      title: "Clientes y audiencias lookalike",
      level: 2,
      paras: [
        "Una lista CRM (email, teléfono — en el formato que acepta la cuenta) da un segmento «ya compró / dejó un contacto». Úsala para upsell, reactivación o como semilla para lookalikes.",
        "Los lookalikes no son magia — son una expansión estadística a partir de rasgos de la semilla. La calidad de la semilla gana al tamaño: una lista basura da ruido caro.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "separa pagadores de meros leads",
            "refresca los exports",
            "no mezcles productos distintos en una semilla",
            "cuenta CPA del segmento, no solo reach",
          ],
        },
      ],
    },
    {
      title: "Engagement en Instagram y Facebook",
      level: 2,
      paras: [
        "Una clase aparte — gente que vio vídeo, abrió un perfil, reaccionó a posts, empezó un lead form o marcó interés en un evento. Una señal de interés sin visita al sitio.",
        "Para vídeo, compara views cortas vs profundas (50%+ / visionado completo): volumen vs temperatura. Para formularios — abierto vs completado; para eventos — view de página vs «voy».",
      ],
      lists: [
        {
          intro: "Fuentes típicas de engagement:",
          items: [
            "views de vídeo por tiempo o umbral de porcentaje",
            "interacciones con perfil y contenido",
            "lead forms (empezado / completado)",
            "interés en un evento / ticket",
          ],
        },
      ],
    },
    {
      title: "Cómo no romper la campaña",
      level: 2,
      paras: [
        "Un solo creative para toda la gente cálida es un error habitual. Carrito, visita pelada y completion de vídeo necesitan mensajes distintos. La frecuencia y la vida del segmento limitan el burnout.",
        "No confundas el setup de audiencia con el objetivo de campaña: el segmento responde «quién», el creative y la oferta responden «por qué volver». Los límites legales de plataformas en Rusia van aparte de la lógica de marketing.",
      ],
      links: [
        {
          label: "Retargeting de fiestas",
          href: "/es/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Audiencia target",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  closing: [
    "El retarget en Instagram y Facebook se apoya en tres pilares: eventos del sitio, listas de calidad y engagement en la cuenta. Arma segmentos estrechos, excluye conversiones, refresca creatives — sin perseguir clics obsoletos de Ads Manager.",
  ],
  related: [
    "retargeting",
    "prazdnichnyy-retargeting",
    "tselevaya-auditoriya",
    "reklama-instagram",
    "utm-metki",
    "optimizatsiya-konversii",
  ],
};

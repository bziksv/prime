import type { BlogPost } from "../../../data/blog";

/** EN overlay for videokontent — same structure as RU JSON. */
export const videokontentEn: BlogPost = {
  slug: "videokontent",
  title: "Video content: formats and types for marketing",
  date: "2019-12-20",
  category: "Content marketing",
  cover: "/images/blog/videokontent/cover-en.webp",
  excerpt:
    "Types of marketing video: review, how-to, testimonial, webinar, teaser, and more — plus script, shoot, and placement without the “80% of traffic will be video” cult or 2019 price lists.",
  lead: [
    "Video covers what text handles poorly: process, emotion, product scale, a live answer to an objection. It’s not a mandatory replacement for articles — it’s a format matched to the job and audience.",
    "Below: clip types, when to shoot in-house or with a vendor, script, and placement. “Video will be 80% of traffic” figures and other people’s watch-hours from old roundups aren’t universal. Mentions of Instagram* are informational.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Do you need video for every product?",
      a: "No. Prioritize bestselling SKUs, complex services, training, and funnel stages where text stalls.",
    },
    {
      q: "Is a smartphone enough?",
      a: "For many formats yes: light, stability, and sound beat camera brand. A studio fits staged brand films.",
    },
    {
      q: "How much does a vendor cost?",
      a: "Wide range: from a simple edit to full production. Anchor on brief and portfolio, not a “2019 average price.”",
    },
    {
      q: "Is a script required?",
      a: "For selling, training, and staged pieces — yes. A greeting or short live can run on talking points.",
    },
    {
      q: "Where should you publish video?",
      a: "On the site/product page + hosting (YouTube and similar) + channels where the audience is. One file “only on the site” is often too little.",
    },
    {
      q: "How is this different from video ads?",
      a: "Here — content types and production. Campaign metrics and CPV/VTR live in the video-ad effectiveness piece.",
    },
    {
      q: "Is MP4 mandatory?",
      a: "A common, convenient container for the web. Check platform requirements and file weight on the site.",
    },
  ],
  sections: [
    {
      title: "Pros and cons",
      level: 2,
      paras: [
        "Pros: clarity, emotion, easier to show product and process, higher share chance with a strong story.",
        "Cons: time, light/sound/edit, script, updating stale clips. Bad video is worse than none.",
      ],
    },
    {
      title: "Types of marketing video",
      level: 2,
      paras: [
        "Greeting and company intro.",
        "Product/service review and demo.",
        "Customer testimonials (only with consent — no staged fakes).",
        "Teaser, event invite.",
        "Interview and expert breakdown.",
        "How-to and training; screen-record for software.",
        "Webinar / live; process footage.",
        "Short selling clip with a CTA.",
      ],
      links: [
        {
          label: "Product video review",
          href: "/en/blog/video-obzor-tovara/",
        },
      ],
      notes: [
        {
          title: "One clip — one job",
          kind: "tip",
          text: "Don’t mix a greeting with a hard catalog pitch. Goal and audience set length and tone.",
        },
      ],
    },
    {
      title: "Vendor or in-house",
      level: 2,
      paras: [
        "Vendor: portfolio, clear brief, stages (script → shoot → edit), rights to source files.",
        "In-house: script, light, tripod, clean audio, short edit. For product pages and FAQ that’s often enough.",
      ],
    },
    {
      title: "Script and placement",
      level: 2,
      paras: [
        "Selling arc: hook → need → solution → proof → objections → CTA. Training — steps without fluff.",
        "Title and description with useful intent keywords; thumbnail; link to site/product; measure completion and clicks.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "clip with no goal or CTA",
            "bad audio under a pretty picture",
            "too long with no structure",
            "published and never reviewed",
            "promises in the video that aren’t on the site",
          ],
        },
      ],
      links: [
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Format for the job — not “video for video’s sake.”",
        "Script and sound decide more often than the camera.",
        "Site + hosting + audience channels.",
      ],
    },
  ],
  closing: [
    "Pick one funnel job (bestselling-SKU review, how-to, or testimonial) and shoot one short clip with a clear CTA — that’s the easiest way to learn whether you need a vendor.",
  ],
  related: [
    "video-obzor-tovara",
    "videoreklama-youtube",
    "effektivnost-videoreklamy",
    "matritsa-kontenta",
    "prodayushchiy-kontent",
    "video-stories-instagram",
  ],
};

/** ES overlay for videokontent — same structure as RU JSON. */
export const videokontentEs: BlogPost = {
  slug: "videokontent",
  title: "Contenido en vídeo: formatos y tipos para marketing",
  date: "2019-12-20",
  category: "Content marketing",
  cover: "/images/blog/videokontent/cover-es.webp",
  excerpt:
    "Tipos de vídeo de marketing: review, how-to, testimonial, webinar, teaser y más — más guion, rodaje y colocación sin el culto a «el 80% del tráfico será vídeo» ni tarifas de 2019.",
  lead: [
    "El vídeo cubre lo que el texto lleva mal: proceso, emoción, escala del producto, una respuesta en vivo a una objeción. No es un sustituto obligatorio de los artículos — es un formato alineado al trabajo y a la audiencia.",
    "Abajo: tipos de clip, cuándo grabar in-house o con un vendor, guion y colocación. Las cifras de «el vídeo será el 80% del tráfico» y las horas de visionado ajenas de roundups viejos no son universales. Las menciones de Instagram* son informativas.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Hace falta vídeo para cada producto?",
      a: "No. Prioriza SKUs bestseller, servicios complejos, formación y etapas del funnel donde el texto se atasca.",
    },
    {
      q: "¿Basta un smartphone?",
      a: "Para muchos formatos sí: luz, estabilidad y sonido ganan a la marca de la cámara. Un estudio encaja en films de marca puestos en escena.",
    },
    {
      q: "¿Cuánto cuesta un vendor?",
      a: "Rango amplio: de un edit simple a producción completa. Ancla en brief y portfolio, no en un «precio medio de 2019».",
    },
    {
      q: "¿Hace falta un guion?",
      a: "Para piezas de venta, formación y puestas en escena — sí. Un saludo o un live corto puede ir con talking points.",
    },
    {
      q: "¿Dónde publicar el vídeo?",
      a: "En el sitio/ficha + hosting (YouTube y similares) + canales donde está la audiencia. Un solo archivo «solo en el sitio» suele ser poco.",
    },
    {
      q: "¿En qué se diferencia de la publicidad en vídeo?",
      a: "Aquí — tipos de contenido y producción. Las métricas de campaña y CPV/VTR viven en el artículo de efectividad de la videoreclama.",
    },
    {
      q: "¿MP4 es obligatorio?",
      a: "Un contenedor habitual y cómodo para la web. Revisa requisitos de la plataforma y el peso del archivo en el sitio.",
    },
  ],
  sections: [
    {
      title: "Pros y contras",
      level: 2,
      paras: [
        "Pros: claridad, emoción, más fácil mostrar producto y proceso, más chance de share con una historia fuerte.",
        "Contras: tiempo, luz/sonido/edit, guion, actualizar clips viejos. Un vídeo malo es peor que ninguno.",
      ],
    },
    {
      title: "Tipos de vídeo de marketing",
      level: 2,
      paras: [
        "Saludo e intro de la empresa.",
        "Review y demo de producto/servicio.",
        "Testimonials de clientes (solo con consentimiento — sin fakes puestos en escena).",
        "Teaser, invitación a evento.",
        "Entrevista y desglose de experto.",
        "How-to y formación; screen-record para software.",
        "Webinar / live; footage de proceso.",
        "Clip corto de venta con CTA.",
      ],
      links: [
        {
          label: "Review en vídeo de producto",
          href: "/es/blog/video-obzor-tovara/",
        },
      ],
      notes: [
        {
          title: "Un clip — un trabajo",
          kind: "tip",
          text: "No mezcles un saludo con un pitch duro de catálogo. Objetivo y audiencia marcan duración y tono.",
        },
      ],
    },
    {
      title: "Vendor o in-house",
      level: 2,
      paras: [
        "Vendor: portfolio, brief claro, etapas (guion → rodaje → edit), derechos sobre los source files.",
        "In-house: guion, luz, trípode, audio limpio, edit corto. Para fichas y FAQ suele bastar.",
      ],
    },
    {
      title: "Guion y colocación",
      level: 2,
      paras: [
        "Arco de venta: gancho → necesidad → solución → prueba → objeciones → CTA. Formación — pasos sin relleno.",
        "Título y descripción con keywords de intent útiles; thumbnail; enlace a sitio/producto; mide completion y clics.",
      ],
      lists: [
        {
          intro: "Errores típicos:",
          items: [
            "clip sin objetivo ni CTA",
            "audio malo bajo una imagen bonita",
            "demasiado largo sin estructura",
            "publicado y nunca revisado",
            "promesas en el vídeo que no están en el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Videoreclama en YouTube",
          href: "/es/blog/videoreklama-youtube/",
        },
        {
          label: "Efectividad de la videoreclama",
          href: "/es/blog/effektivnost-videoreklamy/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Formato para el trabajo — no «vídeo por el vídeo».",
        "Guion y sonido deciden más a menudo que la cámara.",
        "Sitio + hosting + canales de audiencia.",
      ],
    },
  ],
  closing: [
    "Elige un trabajo del funnel (review de SKU bestseller, how-to o testimonial) y graba un clip corto con CTA claro — es la forma más fácil de saber si necesitas un vendor.",
  ],
  related: [
    "video-obzor-tovara",
    "videoreklama-youtube",
    "effektivnost-videoreklamy",
    "matritsa-kontenta",
    "prodayushchiy-kontent",
    "video-stories-instagram",
  ],
};

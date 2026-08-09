import type { BlogPost } from "../../../data/blog";

/** ES overlay for formaty-izobrazheniy-rsya — same structure as RU JSON. */
export const formatyIzobrazheniyRsyaEs: BlogPost = {
  slug: "formaty-izobrazheniy-rsya",
  title: "Formatos de imagen en la Red publicitaria de Yandex",
  date: "2017-05-15",
  category: "Paid search",
  cover: "/images/blog/formaty-izobrazheniy-rsya/cover.webp",
  excerpt:
    "Por qué la Red publicitaria de Yandex necesita varios tamaños de imagen y anuncios gráficos: cobertura de publishers, formatos panorámicos, cómo no cortar el alcance con una campaña aparte y cómo etiquetar tamaños en UTM.",
  lead: [
    "En YAN una creatividad vive en bloques de distintas formas: cuadrado, vertical, panorama. Un solo tamaño no cubre todos los publishers — el sistema necesita un set para elegir el hueco que encaje.",
    "Abajo: lógica de formatos y práctica. Los píxeles exactos de guías 2016–2017 se quedan obsoletos: toma requisitos actuales de la Help de Direct. La «novedad» del formato ya no es noticia — importa más un kit creativo completo.",
  ],
  faq: [
    {
      q: "¿Basta un cuadrado 1:1?",
      a: "Para un test — a veces. Para alcance quieres varios ratios: si no, algunos publishers se quedan sin impresión.",
    },
    {
      q: "¿Es obligatorio un formato panorámico?",
      a: "Útil para bloques anchos y algunas campañas de apps. Comprueba los requisitos de tamaño actuales.",
    },
    {
      q: "¿Pongo los tamaños nuevos en una campaña aparte?",
      a: "A menudo empeora: cae el alcance. Suele ser mejor añadirlos a una campaña de redes que ya funciona, no partir sin necesidad.",
    },
    {
      q: "¿Puedo lanzar un anuncio gráfico sin texto?",
      a: "Posible como formato banner, pero hacen falta marca, oferta y legibilidad en móvil. No te apoyes solo en la imagen.",
    },
    {
      q: "¿Cómo comparar tamaños?",
      a: "UTM (p. ej. utm_content con el tamaño) o etiquetas de la cuenta — mira clics y conversiones por creatividad.",
    },
    {
      q: "¿La facturación es distinta por estos formatos?",
      a: "Normalmente el mismo modelo de campaña (clics/objetivos). El formato de imagen en sí no es una tarifa especial.",
    },
    {
      q: "¿Cuántos formatos subir?",
      a: "Tantos como exija el checklist actual de Direct para tu tipo de anuncio — sin subir con fanatismo «los 11» si el tipo es otro.",
    },
  ],
  sections: [
    {
      title: "Por qué hay tantos tamaños",
      level: 2,
      paras: [
        "Los publishers de YAN ofrecen huecos distintos. Cuantos más archivos fuente correctos aportes, más a menudo el sistema encuentra sitio para mostrar.",
        "El autoajuste es posible, pero mejor entregar archivos en proporciones recomendadas — menos recorte y pérdida de sentido.",
      ],
      links: [
        {
          label: "Errores de setup en búsqueda de pago",
          href: "/es/blog/oshibki-nastroyki-konteksta/",
        },
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Panorama y gráficos",
      level: 2,
      paras: [
        "Las creatividades panorámicas cubren bloques anchos; en algunos escenarios (incluidas apps) los requisitos son más estrictos — solo tamaños actuales de Help.",
        "Los anuncios gráficos meten la oferta en el visual: producto, precio, CTA en el propio banner. Aun así revisa el texto cercano para moderación y legibilidad.",
      ],
    },
    {
      title: "Práctica de lanzamiento",
      level: 2,
      paras: [
        "Añade formatos nuevos a campañas de redes que ya funcionan si el objetivo es alcance — no un A/B aislado de un solo tamaño.",
        "No te conformes con un archivo «para todos los casos». Un set de ratios más UTM de tamaño da analítica clara.",
        "Vigila calidad: texto minúsculo en el banner, watermarks y creatividades con marca ajena hieren CTR y moderación.",
      ],
      lists: [
        {
          intro: "Mini checklist para una creatividad YAN:",
          items: [
            "tamaños actuales de Help",
            "oferta legible en móvil",
            "landing encaja con la imagen",
            "etiquetas para comparar formatos",
            "no partas el alcance sin una hipótesis",
          ],
        },
      ],
      links: [
        {
          label: "Qué son las etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "No copies resoluciones exactas (1080×607 y similares) de artículos de 2017 como norma. La lista actual está en la Help de Yandex Direct / YAN.",
  },
  closing: [
    "Abre la Help de tamaños, añade los ratios que faltan a una campaña YAN activa y pon utm_content en el tamaño — así los formatos sirven al alcance y al reporting, no como «noticia de 2016».",
  ],
  related: [
    "oshibki-nastroyki-konteksta",
    "utm-metki",
    "analiz-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "adaptivnyy-shablon-direkt",
    "rsya-metrika",
  ],
};

/** EN overlay for formaty-izobrazheniy-rsya — same structure as RU JSON. */
export const formatyIzobrazheniyRsyaEn: BlogPost = {
  slug: "formaty-izobrazheniy-rsya",
  title: "Image formats in the Yandex Advertising Network",
  date: "2017-05-15",
  category: "Paid search",
  cover: "/images/blog/formaty-izobrazheniy-rsya/cover-en.webp",
  excerpt:
    "Why the Yandex Advertising Network needs several image sizes and graphic ads: publisher coverage, widescreen formats, how not to cut reach with a separate campaign, and how to tag sizes in UTMs.",
  lead: [
    "In YAN a creative lives in blocks of different shapes: square, vertical, panorama. One size won’t cover every publisher — the system needs a set to pick a fitting slot.",
    "Below: format logic and practice. Exact pixels from 2016–2017 guides go stale: take current requirements from Direct Help. Format “novelty” isn’t news anymore — a full creative kit matters more.",
  ],
  faq: [
    {
      q: "Is one 1:1 square enough?",
      a: "For a test — sometimes. For reach you want several ratios: otherwise some publishers stay without a show.",
    },
    {
      q: "Is a widescreen format required?",
      a: "Useful for panoramic blocks and some app campaigns. Check current size requirements.",
    },
    {
      q: "Should I put new sizes in a separate campaign?",
      a: "Often worse: reach drops. Usually add them to a working network campaign instead of splitting without need.",
    },
    {
      q: "Can I run a graphic ad with no text?",
      a: "Possible as a banner format, but brand, offer, and mobile readability are required. Don’t rely on the image alone.",
    },
    {
      q: "How should I compare sizes?",
      a: "UTMs (e.g. utm_content with the size) or account labels — watch clicks and conversions by creative.",
    },
    {
      q: "Is billing different for these formats?",
      a: "Usually the same campaign model (clicks/goals). The image format itself isn’t a special tariff.",
    },
    {
      q: "How many formats should I upload?",
      a: "As many as the current Direct checklist requires for your ad type — without fanatically uploading “all 11” if the type is different.",
    },
  ],
  sections: [
    {
      title: "Why there are many sizes",
      level: 2,
      paras: [
        "YAN publishers offer different slots. The more correct source files you provide, the more often the system finds a place to show.",
        "Auto-fit is possible, but better deliver files in recommended proportions — less crop and lost meaning.",
      ],
      links: [
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Widescreen and graphics",
      level: 2,
      paras: [
        "Panoramic creatives cover wide blocks; for some scenarios (including apps) requirements are stricter — only current sizes from Help.",
        "Graphic ads put the offer into the visual: product, price, CTA on the banner itself. Still check nearby text for review and readability.",
      ],
    },
    {
      title: "Launch practice",
      level: 2,
      paras: [
        "Add new formats to already working network campaigns if the goal is reach — not an isolated A/B of one size.",
        "Don’t settle for one file “for every case.” A set of ratios plus size UTMs gives clear analytics.",
        "Watch quality: tiny banner text, watermarks, and creatives with someone else’s brand hurt CTR and review.",
      ],
      lists: [
        {
          intro: "Mini checklist for a YAN creative:",
          items: [
            "current sizes from Help",
            "offer readable on mobile",
            "landing matches the image",
            "tags to compare formats",
            "don’t split reach without a hypothesis",
          ],
        },
      ],
      links: [
        {
          label: "What UTM tags are",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Don’t copy exact resolutions (1080×607 and so on) from 2017 articles as a norm. The current list is in Yandex Direct / YAN Help.",
  },
  closing: [
    "Open the size Help, add missing ratios to a working YAN campaign, and put utm_content on the size — so formats work for reach and reporting, not as “2016 news.”",
  ],
  related: [
    "oshibki-nastroyki-konteksta",
    "utm-metki",
    "analiz-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "adaptivnyy-shablon-direkt",
    "rsya-metrika",
  ],
};

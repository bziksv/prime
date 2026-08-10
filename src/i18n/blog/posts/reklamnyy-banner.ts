import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklamnyy-banner — same structure as RU JSON. */
export const reklamnyyBannerEn: BlogPost = {
  slug: "reklamnyy-banner",
  title: "Ad banner: principles of effective creative",
  date: "2020-02-28",
  category: "Digital marketing",
  cover: "/images/blog/reklamnyy-banner/cover-en.webp",
  excerpt:
    "How to make an ad banner people notice: offer, hierarchy, CTA, sizes, fighting banner blindness, and careful pop-ups — without outdated “trends for trends’ sake.”",
  lead: [
    "A banner is one of the oldest online ad formats: an image or HTML5 block linking to an offer. It’s still used in networks, on sites, and in media — but attention is shorter and blockers are more common.",
    "Below: creative principles that drive clicks without annoying people. Measuring a competitor’s banner size is a separate article; here we focus on message, composition, and UX.",
  ],
  faq: [
    {
      q: "What matters more: design or offer?",
      a: "Offer and clarity. A pretty banner with no clear benefit loses to a simple one with a strong proposition.",
    },
    {
      q: "Which size should I pick?",
      a: "Whatever the platform or site slot requires. In ad networks check current account specs; “IAB standards” are a guide, not dogma. How to read a size on someone else’s site — in the banner sizes article.",
    },
    {
      q: "What is banner blindness?",
      a: "The habit of ignoring zones that look like ads. Fix it with relevance, meaningful contrast (not only flashing), and creative tests.",
    },
    {
      q: "Is a pop-up instead of a banner the answer?",
      a: "Sometimes for an important message or lead, but aggressive windows hurt UX and trust. Use rarely, with easy close and no tricks.",
    },
    {
      q: "Do I need animation?",
      a: "A short one can help noticeability. Endless flashing and a “screaming” GIF more often hurt the brand and page weight.",
    },
    {
      q: "How much text fits on a banner?",
      a: "One offer, one benefit, one button/ask. People don’t read a tiny sheet in a fraction of a second.",
    },
    {
      q: "Is a banner on my site the same as in an ad network?",
      a: "Principles are similar; size, moderation, and file rules differ. Always check the account rules.",
    },
  ],
  sections: [
    {
      title: "The banner’s job in a second",
      level: 2,
      paras: [
        "Users barely “study” ads: the eye slides. In a fraction of a second the banner must answer: what’s offered, who needs it, what to do next.",
        "Effectiveness isn’t “beauty in a portfolio” — it’s CTR, click/lead cost, and whether the creative breaks brand trust.",
      ],
      lists: [
        {
          intro: "On the banner people should read:",
          items: [
            "the offer or promo essence",
            "the brand or a recognizable product",
            "a call to action",
            "where the click goes (landing match)",
          ],
        },
      ],
    },
    {
      title: "Design principles that work",
      level: 2,
      paras: [
        "Hierarchy: main meaning larger than secondary. Text/background contrast — readability beats a trendy gradient. One visual anchor (product, face, benefit icon) beats a collage of ten elements.",
        "CTA — a separate accent: a button or clear phrase (“Get a quote,” “View catalog”). Avoid clickbait that doesn’t match the landing: disappointment kills conversion.",
      ],
      lists: [
        {
          intro: "Layout checklist:",
          items: [
            "little text, large key words",
            "brand not hidden in a 5 px corner",
            "button/ask is noticeable",
            "file is light, type isn’t mushy",
            "safe margins: text not at the crop edge",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying someone else’s banner pixel-for-pixel without rights isn’t allowed. You can mirror slot size and offer logic — not their assets.",
        },
      ],
      links: [
        {
          label: "Banner sizes",
          href: "/en/blog/razmery-bannera/",
        },
        {
          label: "Image link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Sizes and placement context",
      level: 2,
      paras: [
        "In ad accounts the format set is defined by the platform: horizontal “leaderboards,” rectangles, feed squares. Check current pixels and file weight in network help — 2015–2020 guides often age out.",
        "On your own site the layout sets the size. The banner should be noticeable but not crowd content or inflate LCP. Below the fold, lazy-loading fits.",
      ],
      lists: [
        {
          intro: "Before launch confirm:",
          items: [
            "allowed sizes and weight",
            "static / HTML5 / video",
            "text and branding rules",
            "where the UTM goes and which landing",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Ad account setup",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Banner blindness",
      level: 2,
      paras: [
        "People learned not to see “ad-like” zones. Flashing and acid colors rarely cure blindness — they more often annoy. Stronger: relevance (the banner matches what the person is viewing), fresh creative, and match to site expectations.",
        "Test 2–3 offer and visual variants. Don’t change “everything at once” — change a hypothesis: benefit, headline, product in frame.",
      ],
    },
    {
      title: "Pop-up: when it fits, when it doesn’t",
      level: 2,
      paras: [
        "A modal guarantees attention but easily breaks experience — especially on entry or on every click. Rare scenarios fit: an important promo, email capture with clear value, a warning.",
        "Make closing obvious, don’t block content forever, mind mobile screens. For lead gen a widget or in-content block often beats an aggressive overlay.",
      ],
      lists: [
        {
          intro: "If you still use a pop-up:",
          items: [
            "trigger by time/scroll, not instantly",
            "one offer",
            "easy to close",
            "not more often than a sensible per-session limit",
          ],
        },
      ],
    },
    {
      title: "Landing link and measurement",
      level: 2,
      paras: [
        "A click isn’t the goal. Banner and page must say the same thing: same promo, same product, same tone. Otherwise bounce rises and traffic quality drops.",
        "Tag campaigns with UTM; watch not only CTR but conversion and lead cost. High CTR with zero leads — a candidate to pause.",
      ],
      lists: [
        {
          intro: "Before scaling:",
          items: [
            "landing matches the offer",
            "an analytics goal exists",
            "creatives rotate",
            "page weight and speed are fine",
          ],
        },
      ],
    },
  ],
  closing: [
    "A strong banner is a clear offer, readable hierarchy, and an honest path to the landing. Size and trends are secondary; blindness is beaten by relevance and tests — not endless flashing.",
  ],
};

/** ES overlay for reklamnyy-banner — same structure as RU JSON / EN. */
export const reklamnyyBannerEs: BlogPost = {
  slug: "reklamnyy-banner",
  title: "Banner publicitario: principios de un creative efectivo",
  date: "2020-02-28",
  category: "Digital marketing",
  cover: "/images/blog/reklamnyy-banner/cover-es.webp",
  excerpt:
    "Cómo hacer un banner publicitario que la gente note: oferta, jerarquía, CTA, tamaños, combatir la ceguera de banner y pop-ups con cuidado — sin «tendencias por las tendencias» obsoletas.",
  lead: [
    "Un banner es uno de los formatos de ads online más antiguos: una imagen o bloque HTML5 que enlaza a una oferta. Sigue usándose en redes, sitios y medios — pero la atención es más corta y los blockers son más habituales.",
    "Abajo: principios de creative que impulsan clics sin molestar. Medir el tamaño del banner de un competidor es otro artículo; aquí el foco es mensaje, composición y UX.",
  ],
  faq: [
    {
      q: "¿Qué importa más: diseño u oferta?",
      a: "Oferta y claridad. Un banner bonito sin beneficio claro pierde frente a uno simple con una propuesta fuerte.",
    },
    {
      q: "¿Qué tamaño elijo?",
      a: "El que exija la plataforma o el slot del sitio. En redes de ads revisa las specs actuales de la cuenta; los «estándares IAB» son guía, no dogma. Cómo leer un tamaño en el sitio de otro — en el artículo de tamaños de banner.",
    },
    {
      q: "¿Qué es la ceguera de banner?",
      a: "El hábito de ignorar zonas que parecen ads. Se arregla con relevancia, contraste con sentido (no solo parpadeo) y tests de creative.",
    },
    {
      q: "¿Un pop-up en lugar de banner es la respuesta?",
      a: "A veces para un mensaje importante o un lead, pero las ventanas agresivas duelen a la UX y a la confianza. Úsalo poco, con cierre fácil y sin trucos.",
    },
    {
      q: "¿Hace falta animación?",
      a: "Una corta puede ayudar a la notoriedad. El parpadeo infinito y un GIF «que grita» suelen dañar la marca y el peso de la página.",
    },
    {
      q: "¿Cuánto texto cabe en un banner?",
      a: "Una oferta, un beneficio, un botón/petición. La gente no lee una hoja diminuta en una fracción de segundo.",
    },
    {
      q: "¿Un banner en mi sitio es lo mismo que en una red de ads?",
      a: "Los principios se parecen; tamaño, moderación y reglas de archivo difieren. Revisa siempre las reglas de la cuenta.",
    },
  ],
  sections: [
    {
      title: "El trabajo del banner en un segundo",
      level: 2,
      paras: [
        "Los usuarios apenas «estudian» los ads: el ojo se desliza. En una fracción de segundo el banner debe responder: qué se ofrece, a quién le hace falta, qué hacer después.",
        "La efectividad no es «belleza de portfolio» — es CTR, coste de clic/lead y si el creative rompe la confianza de marca.",
      ],
      lists: [
        {
          intro: "En el banner la gente debería leer:",
          items: [
            "la esencia de la oferta o promo",
            "la marca o un producto reconocible",
            "una llamada a la acción",
            "adónde va el clic (encaje con el landing)",
          ],
        },
      ],
    },
    {
      title: "Principios de diseño que funcionan",
      level: 2,
      paras: [
        "Jerarquía: el sentido principal más grande que lo secundario. Contraste texto/fondo — la legibilidad gana a un degradado de moda. Un ancla visual (producto, cara, icono de beneficio) gana a un collage de diez elementos.",
        "CTA — un acento aparte: un botón o una frase clara («Pedir presupuesto», «Ver catálogo»). Evita clickbait que no encaja con el landing: la decepción mata la conversión.",
      ],
      lists: [
        {
          intro: "Checklist de layout:",
          items: [
            "poco texto, palabras clave grandes",
            "marca no escondida en una esquina de 5 px",
            "botón/petición notables",
            "archivo ligero, tipografía que no se vea pasta",
            "márgenes seguros: texto no al borde del recorte",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Copiar el banner de otro píxel a píxel sin derechos no está permitido. Puedes espejar tamaño de slot y lógica de oferta — no sus assets.",
        },
      ],
      links: [
        {
          label: "Tamaños de banner",
          href: "/es/blog/razmery-bannera/",
        },
        {
          label: "Imagen-enlace",
          href: "/es/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Tamaños y contexto de placement",
      level: 2,
      paras: [
        "En las cuentas de ads el set de formatos lo define la plataforma: «leaderboards» horizontales, rectángulos, cuadrados de feed. Revisa píxeles y peso de archivo actuales en la ayuda de la red — las guías de 2015–2020 a menudo quedan viejas.",
        "En tu propio sitio el layout fija el tamaño. El banner debe notarse pero no ahogar el contenido ni inflar el LCP. Bajo el fold encaja lazy-loading.",
      ],
      lists: [
        {
          intro: "Antes del lanzamiento confirma:",
          items: [
            "tamaños y peso permitidos",
            "estático / HTML5 / vídeo",
            "reglas de texto y branding",
            "adónde va el UTM y qué landing",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Setup de cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Ceguera de banner",
      level: 2,
      paras: [
        "La gente aprendió a no ver zonas «tipo anuncio». El parpadeo y los colores ácidos rara vez curan la ceguera — más a menudo molestan. Más fuerte: relevancia (el banner encaja con lo que la persona está viendo), creative fresco y encaje con las expectativas del sitio.",
        "Prueba 2–3 variantes de oferta y visual. No cambies «todo a la vez» — cambia una hipótesis: beneficio, titular, producto en el frame.",
      ],
    },
    {
      title: "Pop-up: cuándo encaja y cuándo no",
      level: 2,
      paras: [
        "Un modal garantiza atención pero rompe fácil la experiencia — sobre todo a la entrada o en cada clic. Encajan escenarios raros: una promo importante, captación de email con valor claro, un aviso.",
        "Haz el cierre obvio, no bloquees el contenido para siempre, cuida las pantallas móviles. Para lead gen un widget o un bloque in-content suele ganar a un overlay agresivo.",
      ],
      lists: [
        {
          intro: "Si aún usas un pop-up:",
          items: [
            "trigger por tiempo/scroll, no al instante",
            "una oferta",
            "fácil de cerrar",
            "no más a menudo que un límite sensato por sesión",
          ],
        },
      ],
    },
    {
      title: "Enlace al landing y medición",
      level: 2,
      paras: [
        "Un clic no es el objetivo. Banner y página deben decir lo mismo: misma promo, mismo producto, mismo tono. Si no, sube el bounce y baja la calidad del tráfico.",
        "Etiqueta campañas con UTM; mira no solo CTR sino conversión y coste del lead. CTR alto con cero leads — candidato a pausar.",
      ],
      lists: [
        {
          intro: "Antes de escalar:",
          items: [
            "el landing encaja con la oferta",
            "existe un goal de analytics",
            "los creatives rotan",
            "peso y velocidad de la página están bien",
          ],
        },
      ],
    },
  ],
  closing: [
    "Un banner fuerte es una oferta clara, jerarquía legible y un camino honesto al landing. Tamaño y tendencias son secundarios; la ceguera se vence con relevancia y tests — no con parpadeo infinito.",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-shablon-direkt — same structure as RU JSON. */
export const adaptivnyyShablonDirektEn: BlogPost = {
  slug: "adaptivnyy-shablon-direkt",
  title: "Adaptive templates in Yandex Direct: why they exist and how to build one",
  date: "2020-01-16",
  category: "Paid search",
  cover: "/images/blog/adaptivnyy-shablon-direkt/cover-en.webp",
  excerpt:
    "What an adaptive creative template in Yandex Direct does: fit one asset set to many block sizes, set a smart center, write short copy and legal lines — without clinging to 2019 click-paths.",
  lead: [
    "An adaptive template in Direct’s creative builder lets one set of materials reshape for different ad-block sizes — useful in networks where placements crop banners in every direction.",
    "Below: what the format is for, which layers you fill, and what to check in tests. Menu names and character limits live in the live account — the UI has moved since 2019. This is not a responsive website, and it is not Google Ads Responsive Display Ads.",
  ],
  faq: [
    {
      q: "Is this the same as a responsive site?",
      a: "No. Here you’re building an ad creative for different blocks. Responsive design is about the landing page layout.",
    },
    {
      q: "Why bother with a smart center?",
      a: "So a narrow or tiny block still shows what matters — the product face or the price — instead of cropping it away.",
    },
    {
      q: "Can one creative replace every size?",
      a: "It covers more formats with less handwork, but you still judge image and copy in previews. A weak background stays weak at every size.",
    },
    {
      q: "Do age and legal labels matter?",
      a: "If the niche requires them (alcohol, medicine, supplements, and similar) — yes. Skip them and moderation rejects or throttles delivery.",
    },
    {
      q: "Will it raise conversion on its own?",
      a: "No. You get cleaner coverage and less layout grind. Conversion still rides on the offer and the landing page.",
    },
    {
      q: "Where do you create it?",
      a: "In the creatives / ad builder area of the Direct account. Exact buttons — current UI and Yandex Help.",
    },
    {
      q: "Does it work with retargeting?",
      a: "Indirectly: you can run the same creative on retargeting. Audience logic itself is a separate Direct retargeting topic.",
    },
  ],
  sections: [
    {
      title: "Why use an adaptive template",
      level: 2,
      paras: [
        "Network blocks come square, long, and skinny. Teams used to cut a layout per shape; an adaptive template scales and composes the content so you lose fewer impressions to “didn’t fit.”",
        "The real win is speed and less busywork. It is not a “make the campaign profitable” switch: without a strong offer and a decent landing page, adaptive only presents a weak creative more neatly.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "you run many placements with different ratios",
            "you need a fast hypothesis test without a pile of PSDs",
            "the team is small and design time is scarce",
            "photos and copy are already strong — you need packaging for blocks",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Google Responsive Display Ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
      ],
    },
    {
      title: "How the creative is assembled",
      level: 2,
      paras: [
        "In the builder you pick an adaptive template from the standard set and fill layers: background, smart-center focal point, frame/accent colors, short texts, domain, and when needed age rating, warnings, and a legal line.",
        "The background has to survive compression and crop: no tiny text on the image, no critical details hugging the edges. Set the smart center by hand on the product, face, or price — whatever the ad loses without in a small block.",
        "Text fields are short (limits show in the UI) — write the offer, not a wall of text. Extra lines cover address, promo, or clarifications when the format shows them.",
      ],
      lists: [
        {
          intro: "Checklist before you hit Create:",
          items: [
            "background without critical text at the edges",
            "smart center on the main object",
            "headline contrast against the background",
            "domain and USP aligned with the landing page",
            "age/medical labels filled for the niche rules",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "After assembly, open previews of every format. If a size looks muddy or crops the offer — change the photo or smart center. Adaptive will not magically repair a bad frame.",
        },
      ],
    },
    {
      title: "Testing and reuse",
      level: 2,
      paras: [
        "A saved creative lives in the library and can become a base for later ads — handy for seasonal copy edits on the same visual.",
        "In the campaign watch more than CTR: bounce, conversions, placements. Adaptive raises the chance of showing; traffic quality still depends on negatives, bids, and landing relevance.",
        "Don’t borrow expectations from Google Responsive Display wholesale: the idea is similar (many assets → auto assembly), but accounts and rules differ.",
      ],
      links: [
        {
          label: "Retargeting in Direct",
          href: "/en/blog/retargeting-direkt/",
        },
      ],
    },
    {
      title: "Limits and common sense",
      level: 2,
      paras: [
        "Automation does not cancel moderation or advertising law. Legal and age fields are not decorative checkboxes.",
        "Claims like “+conversion for everyone who turned it on” from 2019 launch write-ups are novelty marketing, not your guarantee. Run your own A/B and CPA.",
        "If the niche needs strict static layouts (brand book, pharma disclaimers across the field), treat adaptive as a helper — not the only format.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "adaptive = fit the block, not magic ROI",
            "always verify the smart center",
            "preview every size before go-live",
            "text limits come from the current UI",
            "don’t confuse with site responsive design or Google RDA",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build one strong asset set, check previews on narrow and wide blocks, then scale — faster than drawing ten banners “just in case.”",
  ],
  related: [
    "adaptivnye-mediynye-obyavleniya",
    "adaptivnyy-sayt",
    "retargeting-direkt",
    "rsya-metrika",
    "stavki-direkt",
    "analiz-reklamnoy-kampanii",
  ],
};

/** ES overlay for adaptivnyy-shablon-direkt — same structure as RU JSON / EN. */
export const adaptivnyyShablonDirektEs: BlogPost = {
  slug: "adaptivnyy-shablon-direkt",
  title: "Plantillas adaptativas en Yandex Direct: para qué existen y cómo armar una",
  date: "2020-01-16",
  category: "Búsqueda de pago",
  cover: "/images/blog/adaptivnyy-shablon-direkt/cover-es.webp",
  excerpt:
    "Qué hace una plantilla creativa adaptativa en Yandex Direct: encajar un set de assets a muchos tamaños de bloque, fijar un smart center, escribir copy corto y líneas legales — sin aferrarse a rutas de clics de 2019.",
  lead: [
    "Una plantilla adaptativa en el builder creativo de Direct deja que un set de materiales se reforme para distintos tamaños de bloque de ads — útil en redes donde los placements recortan banners en todas las direcciones.",
    "Abajo: para qué es el formato, qué capas rellenas y qué comprobar en tests. Los nombres de menú y los límites de caracteres viven en la cuenta viva — la UI se ha movido desde 2019. Esto no es un sitio responsive, ni Google Ads Responsive Display Ads.",
  ],
  faq: [
    {
      q: "¿Es lo mismo que un sitio responsive?",
      a: "No. Aquí armas un creative de ads para distintos bloques. El diseño responsive va del layout del landing.",
    },
    {
      q: "¿Para qué molestarse con un smart center?",
      a: "Para que un bloque estrecho o pequeño siga mostrando lo que importa — la cara del producto o el precio — en lugar de recortarlo.",
    },
    {
      q: "¿Puede un creative sustituir todos los tamaños?",
      a: "Cubre más formatos con menos trabajo a mano, pero sigues juzgando imagen y copy en previews. Un fondo flojo sigue flojo a cualquier tamaño.",
    },
    {
      q: "¿Importan las etiquetas de edad y legales?",
      a: "Si el nicho las exige (alcohol, medicina, suplementos y similares) — sí. Sáltatelas y la moderación rechaza o frena la entrega.",
    },
    {
      q: "¿Subirá la conversión solo?",
      a: "No. Ganas cobertura más limpia y menos molino de layouts. La conversión sigue yendo de la oferta y del landing.",
    },
    {
      q: "¿Dónde se crea?",
      a: "En el área de creatives / ad builder de la cuenta Direct. Botones exactos — UI actual y Yandex Help.",
    },
    {
      q: "¿Funciona con retargeting?",
      a: "Indirectamente: puedes correr el mismo creative en retargeting. La lógica de audiencia en sí es un tema aparte de retargeting en Direct.",
    },
  ],
  sections: [
    {
      title: "Por qué usar una plantilla adaptativa",
      level: 2,
      paras: [
        "Los bloques de red vienen cuadrados, largos y estrechos. Los equipos solían cortar un layout por forma; una plantilla adaptativa escala y compone el contenido para perder menos impresiones por «no cabía».",
        "La victoria real es velocidad y menos trabajo pesado. No es un interruptor de «haz la campaña rentable»: sin una oferta fuerte y un landing decente, lo adaptativo solo presenta un creative flojo con más orden.",
      ],
      lists: [
        {
          intro: "Especialmente útil cuando:",
          items: [
            "corres muchos placements con ratios distintos",
            "necesitas un test rápido de hipótesis sin un montón de PSDs",
            "el equipo es pequeño y el tiempo de diseño escasea",
            "fotos y copy ya son fuertes — necesitas packaging para bloques",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Google Responsive Display Ads",
          href: "/blog/adaptivnye-mediynye-obyavleniya/",
        },
      ],
    },
    {
      title: "Cómo se arma el creative",
      level: 2,
      paras: [
        "En el builder eliges una plantilla adaptativa del set estándar y rellenas capas: fondo, punto focal del smart center, colores de marco/acento, textos cortos, dominio y, cuando haga falta, clasificación por edad, avisos y una línea legal.",
        "El fondo tiene que sobrevivir a la compresión y al crop: sin texto diminuto en la imagen, sin detalles críticos pegados a los bordes. Fija el smart center a mano en el producto, la cara o el precio — lo que el ad pierde sin eso en un bloque pequeño.",
        "Los campos de texto son cortos (los límites se ven en la UI) — escribe la oferta, no un muro de texto. Líneas extra cubren dirección, promo o aclaraciones cuando el formato las muestra.",
      ],
      lists: [
        {
          intro: "Checklist antes de pulsar Create:",
          items: [
            "fondo sin texto crítico en los bordes",
            "smart center en el objeto principal",
            "contraste del titular frente al fondo",
            "dominio y USP alineados con el landing",
            "etiquetas de edad/médicas rellenas según las reglas del nicho",
          ],
        },
      ],
      notes: [
        {
          title: "Consejo",
          kind: "tip",
          text: "Tras el montaje, abre previews de cada formato. Si un tamaño se ve turbio o recorta la oferta — cambia la foto o el smart center. Lo adaptativo no repara mágicamente un frame malo.",
        },
      ],
    },
    {
      title: "Testing y reutilización",
      level: 2,
      paras: [
        "Un creative guardado vive en la biblioteca y puede ser base de ads posteriores — cómodo para ediciones estacionales de copy sobre el mismo visual.",
        "En la campaña mira más que el CTR: bounce, conversiones, placements. Lo adaptativo sube la chance de mostrar; la calidad del tráfico sigue dependiendo de negativos, pujas y relevancia del landing.",
        "No tomes expectativas al por mayor de Google Responsive Display: la idea es similar (muchos assets → ensamblaje auto), pero cuentas y reglas difieren.",
      ],
      links: [
        {
          label: "Retargeting en Direct",
          href: "/blog/retargeting-direkt/",
        },
      ],
    },
    {
      title: "Límites y sentido común",
      level: 2,
      paras: [
        "La automatización no cancela la moderación ni la ley de publicidad. Los campos legales y de edad no son checkboxes decorativos.",
        "Afirmaciones como «+conversión para todos los que lo encendieron» de escritos de lanzamiento de 2019 son marketing de novedad, no tu garantía. Corre tus propios A/B y CPA.",
        "Si el nicho necesita layouts estáticos estrictos (brand book, disclaimers pharma a lo largo del campo), trata lo adaptativo como ayuda — no como el único formato.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "adaptativo = encajar el bloque, no ROI mágico",
            "verifica siempre el smart center",
            "preview de cada tamaño antes del go-live",
            "los límites de texto vienen de la UI actual",
            "no confundas con diseño responsive del sitio ni con Google RDA",
          ],
        },
      ],
    },
  ],
  closing: [
    "Arma un set fuerte de assets, comprueba previews en bloques estrechos y anchos, y luego escala — más rápido que dibujar diez banners «por si acaso».",
  ],
  related: [
    "adaptivnyy-sayt",
    "rsya-metrika",
    "stavki-direkt",
    "analiz-reklamnoy-kampanii",
    "adaptivnye-mediynye-obyavleniya",
    "retargeting-direkt",
  ],
};

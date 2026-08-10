import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinki-vnimanie — same structure as RU JSON. */
export const kartinkiVnimanieEn: BlogPost = {
  slug: "kartinki-vnimanie",
  title: "How images earn attention on a site and in content",
  date: "2020-09-11",
  category: "Content marketing",
  cover: "/images/blog/kartinki-vnimanie/cover-en.webp",
  excerpt:
    "Which images actually stop the eye: contrast, color, meaning, and metaphor — without generic clichés and copy that lives only inside the picture.",
  lead: [
    "An image is read faster than a paragraph: it sets emotion, topic, and an attention anchor before anyone finishes the lead. Random filler photos, tiny visual noise, and offer text locked inside a JPEG often hurt UX and accessibility.",
    "Below: working moves — color and contrast, rest for the eye, a less obvious frame, metaphors, and the rule never to hide meaning only in the image. Making an image clickable is a separate article.",
  ],
  faq: [
    {
      q: "Is a pretty face photo always better than a diagram?",
      a: "No. For B2B and how-tos a diagram or product shot is often stronger. A glossy smile with no link to the offer is empty filler.",
    },
    {
      q: "How many images per screen?",
      a: "As many as reinforce meaning. One strong visual in the first viewport beats a carousel for its own sake.",
    },
    {
      q: "Can you put the offer on a banner?",
      a: "A short accent — yes; the whole meaning only in the image — no. Duplicate the text in HTML for search and screen readers.",
    },
    {
      q: "Does bright color always work?",
      a: "An accent on a calm background works. Acidic chaos tires people and cuts trust.",
    },
    {
      q: "Do you need a “mystery effect”?",
      a: "In moderation: an unusual angle or detail intrigues. A mystery with no payoff just irritates.",
    },
    {
      q: "Animals and kids in commerce?",
      a: "Only if the niche fits. Otherwise they distract from the offer and feel manipulative.",
    },
    {
      q: "Are stock photos banned?",
      a: "On our materials — yes (site policy). For a client, prefer your own photos, brand-fit AI generation, or a checked license.",
    },
    {
      q: "Does an image affect SEO?",
      a: "Indirectly: behavior, snippets, Image Search, speed. Don’t expect a pretty photo alone to lift rankings.",
    },
  ],
  sections: [
    {
      title: "Why visuals matter",
      level: 2,
      paras: [
        "An image confirms the page topic, lowers cognitive load, and sets brand tone. In social feeds and blogs the preview decides whether people click further.",
        "A bad visual is worse than none: blur, watermarks, someone else’s logo, “handshake in suits” clichés.",
      ],
      lists: [
        {
          intro: "Jobs an image can do:",
          items: [
            "show the product or result",
            "explain a process with a diagram",
            "set the emotion of the offer",
            "break up long text",
          ],
        },
      ],
    },
    {
      title: "Color, contrast, and rest for the eye",
      level: 2,
      paras: [
        "A bright accent on a neutral background pulls the eye to the CTA or the hero of the frame. Text-to-background contrast matters on photos with captions too: pale gray on gray doesn’t read.",
        "The eye needs air — margins, not an overloaded collage. Alternate dense blocks with calm ones, or fatigue means people scroll past.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "one dominant color accent",
            "UI and caption contrast",
            "no noise from ten tiny objects",
            "on mobile, face or product isn’t cropped out",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Mixing every brand color into one banner. The accent disappears.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Obvious vs curiosity",
      level: 2,
      paras: [
        "Template “laptop + coffee” frames get skipped. Stronger: a process detail, before/after, an unexpected product angle, honest material texture.",
        "Mystery works if context is clear within a second (caption, H2). Otherwise it’s clickbait that doesn’t pay for attention.",
      ],
      lists: [
        {
          intro: "Ideas instead of clichés:",
          items: [
            "close-up of a product detail",
            "UI with a real task",
            "the work result, not a model pose",
            "a simple step infographic",
          ],
        },
      ],
    },
    {
      title: "Text inside the image",
      level: 2,
      paras: [
        "Critical offer, price, legally important copy — duplicate as normal text on the page. The image may fail to load, not index as text, or not be read by a screen reader.",
        "On the banner leave a short punchy accent; put the expansion next to it in HTML.",
      ],
      lists: [
        {
          intro: "Rule:",
          items: [
            "meaningful alt",
            "offer in a nearby headline",
            "don’t shrink type on the photo",
            "treat file weight separately from “text for SEO”",
          ],
        },
      ],
      links: [
        {
          label: "Image as a link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Metaphors and fit",
      level: 2,
      paras: [
        "A metaphor (rocket = growth, bridge = integration) speeds understanding if the audience reads it. A too-distant metaphor confuses.",
        "Don’t lean on the outdated idea that “only a pretty face sells”: in many niches expertise, product, and clarity convince — not someone else’s gloss.",
      ],
      lists: [
        {
          intro: "Fit filter:",
          items: [
            "linked to the offer in two seconds",
            "doesn’t insult the audience",
            "can be replaced with your own photo",
            "doesn’t break page speed",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "Build a guideline: style, palette, bans (generic filler clichés), sizes for hero/article/social. Before release, check the first screen on mobile — not only the “wow” from a designer at a laptop.",
        "Measure: preview CTR, time to scroll, banner clicks. Beauty without metrics is taste, not marketing.",
      ],
      lists: [
        {
          intro: "Visual checklist:",
          items: [
            "own or licensed file",
            "compression and a modern format",
            "meaning duplicated in text",
            "contrast and air",
            "aligned with the brand",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "One strong product photo often beats a collage of five filler shots.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "open-graph",
    "razmer-stranitsy",
    "napolnenie-sayta",
    "otkazy-sayta",
  ],
};

/** ES overlay for kartinki-vnimanie — same structure as RU JSON / EN. */
export const kartinkiVnimanieEs: BlogPost = {
  slug: "kartinki-vnimanie",
  title: "Cómo las imágenes ganan atención en un sitio y en el contenido",
  date: "2020-09-11",
  category: "Content marketing",
  cover: "/images/blog/kartinki-vnimanie/cover-es.webp",
  excerpt:
    "Qué imágenes detienen de verdad la mirada: contraste, color, sentido y metáfora — sin clichés genéricos ni copy que vive solo dentro de la foto.",
  lead: [
    "Una imagen se lee más rápido que un párrafo: fija emoción, tema y un ancla de atención antes de que nadie termine el lead. Fotos de relleno al azar, ruido visual minúsculo y texto de oferta encerrado en un JPEG a menudo duelen a la UX y a la accesibilidad.",
    "Abajo: movimientos que funcionan — color y contraste, descanso para el ojo, un encuadre menos obvio, metáforas y la regla de no esconder el sentido solo en la imagen. Hacer una imagen clicable es un artículo aparte.",
  ],
  faq: [
    {
      q: "¿Una foto de cara bonita siempre gana a un diagrama?",
      a: "No. En B2B y how-tos un diagrama o un product shot a menudo es más fuerte. Una sonrisa glossy sin vínculo a la oferta es relleno vacío.",
    },
    {
      q: "¿Cuántas imágenes por pantalla?",
      a: "Las que refuercen el sentido. Un visual fuerte en el primer viewport gana a un carrusel por el carrusel.",
    },
    {
      q: "¿Se puede poner la oferta en un banner?",
      a: "Un acento corto — sí; todo el sentido solo en la imagen — no. Duplica el texto en HTML para la búsqueda y los lectores de pantalla.",
    },
    {
      q: "¿El color brillante siempre funciona?",
      a: "Un acento sobre fondo calmado funciona. El caos ácido cansa y corta la confianza.",
    },
    {
      q: "¿Hace falta un «efecto misterio»?",
      a: "Con moderación: un ángulo o detalle inusual intrigúa. Un misterio sin payoff solo irrita.",
    },
    {
      q: "¿Animales y niños en comercio?",
      a: "Solo si el nicho encaja. Si no, distraen de la oferta y se sienten manipulativos.",
    },
    {
      q: "¿Están prohibidas las stock photos?",
      a: "En nuestros materiales — sí (política del sitio). Para un cliente, prefiere fotos propias, generación AI alineada a marca o una licencia comprobada.",
    },
    {
      q: "¿Una imagen afecta al SEO?",
      a: "De forma indirecta: comportamiento, snippets, Image Search, velocidad. No esperes que una foto bonita sola mejore los rankings.",
    },
  ],
  sections: [
    {
      title: "Por qué importa lo visual",
      level: 2,
      paras: [
        "Una imagen confirma el tema de la página, baja la carga cognitiva y fija el tono de marca. En feeds sociales y blogs el preview decide si la gente hace clic más allá.",
        "Un visual malo es peor que ninguno: blur, watermarks, logo ajeno, clichés de «apretón de manos en traje».",
      ],
      lists: [
        {
          intro: "Trabajos que puede hacer una imagen:",
          items: [
            "mostrar el producto o el resultado",
            "explicar un proceso con un diagrama",
            "fijar la emoción de la oferta",
            "romper texto largo",
          ],
        },
      ],
    },
    {
      title: "Color, contraste y descanso para el ojo",
      level: 2,
      paras: [
        "Un acento brillante sobre fondo neutro lleva la mirada al CTA o al héroe del encuadre. El contraste texto-fondo también importa en fotos con captions: gris pálido sobre gris no se lee.",
        "El ojo necesita aire — márgenes, no un collage sobrecargado. Alterna bloques densos con calmados, o la fatiga hace que la gente haga scroll de largo.",
      ],
      lists: [
        {
          intro: "Comprueba:",
          items: [
            "un acento de color dominante",
            "contraste de UI y caption",
            "sin ruido de diez objetos minúsculos",
            "en móvil, cara o producto no quedan recortados",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Meter todos los colores de marca en un banner. El acento desaparece.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Lo obvio vs la curiosidad",
      level: 2,
      paras: [
        "Los encuadres plantilla «portátil + café» se saltan. Más fuerte: un detalle de proceso, before/after, un ángulo inesperado del producto, textura honesta del material.",
        "El misterio funciona si el contexto queda claro en un segundo (caption, H2). Si no, es clickbait que no paga la atención.",
      ],
      lists: [
        {
          intro: "Ideas en lugar de clichés:",
          items: [
            "close-up de un detalle de producto",
            "UI con una tarea real",
            "el resultado del trabajo, no una pose de modelo",
            "una infografía de pasos simple",
          ],
        },
      ],
    },
    {
      title: "Texto dentro de la imagen",
      level: 2,
      paras: [
        "Oferta crítica, precio, copy legalmente importante — duplícalo como texto normal en la página. La imagen puede no cargar, no indexarse como texto o no ser leída por un lector de pantalla.",
        "En el banner deja un acento corto y contundente; pon la expansión al lado en HTML.",
      ],
      lists: [
        {
          intro: "Regla:",
          items: [
            "alt con sentido",
            "oferta en un titular cercano",
            "no encogas el tipo en la foto",
            "trata el peso del archivo aparte del «texto para SEO»",
          ],
        },
      ],
      links: [
        {
          label: "Imagen como enlace",
          href: "/es/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Metáforas y encaje",
      level: 2,
      paras: [
        "Una metáfora (cohete = crecimiento, puente = integración) acelera la comprensión si la audiencia la lee. Una metáfora demasiado lejana confunde.",
        "No te apoyes en la idea desfasada de que «solo una cara bonita vende»: en muchos nichos convencen la expertise, el producto y la claridad — no el gloss ajeno.",
      ],
      lists: [
        {
          intro: "Filtro de encaje:",
          items: [
            "ligado a la oferta en dos segundos",
            "no insulta a la audiencia",
            "se puede sustituir por una foto propia",
            "no rompe la velocidad de la página",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Práctica de despliegue",
      level: 2,
      paras: [
        "Arma un guideline: estilo, paleta, prohibiciones (clichés de relleno genérico), tamaños para hero/artículo/social. Antes del release, revisa la primera pantalla en móvil — no solo el «wow» del diseñador en el portátil.",
        "Mide: CTR del preview, tiempo hasta el scroll, clics del banner. Belleza sin métricas es gusto, no marketing.",
      ],
      lists: [
        {
          intro: "Checklist visual:",
          items: [
            "archivo propio o con licencia",
            "compresión y formato moderno",
            "sentido duplicado en texto",
            "contraste y aire",
            "alineado con la marca",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "Una foto fuerte de producto a menudo gana a un collage de cinco shots de relleno.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "open-graph",
    "razmer-stranitsy",
    "napolnenie-sayta",
    "otkazy-sayta",
  ],
};

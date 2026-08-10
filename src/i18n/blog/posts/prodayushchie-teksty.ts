import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodayushchie-teksty — same structure as RU JSON. */
export const prodayushchieTekstyEn: BlogPost = {
  slug: "prodayushchie-teksty",
  title: "Sales copy: principles and structure",
  date: "2021-10-15",
  category: "SEO",
  cover: "/images/blog/prodayushchie-teksty/cover-en.webp",
  excerpt:
    "How to write sales copy: audience and product, tone, headline, intro, arguments, price, and a CTA without clichés.",
  lead: [
    "Sales copy drives an action: a lead, a purchase, a call. Readers rarely care that “the company is growing” — they care which problem the offer solves.",
    "Below: principles, structure from headline to CTA, and ways to talk about price. Social posts and general copywriting have sibling articles; this piece is the commercial-text frame.",
  ],
  faq: [
    {
      q: "How is sales copy different from informational copy?",
      a: "Info explains a topic. Sales copy closes a pain/benefit and ends with a clear next step.",
    },
    {
      q: "Do I need a rigid AIDA framework?",
      a: "As a frame — yes (attention → interest → desire → action). You don’t have to label the blocks with letters in the text.",
    },
    {
      q: "Can I hide the downsides?",
      a: "Honesty wins. Limits said calmly build trust; lies kill conversion on the next step.",
    },
    {
      q: "How do I write about a high price?",
      a: "Break it into clear units, compare with an alternative, show value and what’s included. Don’t fake a discount.",
    },
    {
      q: "How much fluff is OK?",
      a: "Almost none. Facts, benefits, proof, CTA. Lyric only if it truly warms the audience.",
    },
  ],
  sections: [
    {
      title: "Sales copy principles",
      level: 2,
      paras: [
        "Write in the audience’s plain language, give benefit and proof, keep logic, respect the reader. The main message is solving their job — not brand self-praise.",
      ],
      lists: [
        {
          intro: "Basics:",
          items: [
            "clear audience and scenario",
            "accurate product facts",
            "benefits instead of bare features",
            "coherence and tact",
            "one main CTA",
          ],
        },
      ],
    },
    {
      title: "Audience and product",
      level: 2,
      paras: [
        "Build a portrait: jobs, objections, language, competitors. Learn the product: properties, differences, limits. Without that the copy is “about everything and no one.”",
      ],
      lists: [
        {
          intro: "Before the draft:",
          items: [
            "who reads and which action you need",
            "which pain/desire",
            "how you differ from peers",
            "what proof you have (cases, numbers, guarantees)",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting: text types",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Tone and headline",
      level: 2,
      paras: [
        "Tone is the audience’s language: simpler for a broad public, precise terms without legalese for pros. Facts beat exclamation marks.",
        "The headline promises benefit or intrigue without lying. After it people should want to keep reading — not feel clickbait.",
      ],
    },
    {
      title: "Intro, body, close",
      level: 2,
      paras: [
        "Intro is short: problem → hope → hint of a solution. Devices: questions the audience answers “yes” to; “if… then…”; an explicit benefit.",
        "Body: features through benefits, proof, usage scenario, objection answers. Close: summary, price/terms, and a clear CTA.",
      ],
      lists: [
        {
          intro: "Article frame:",
          items: [
            "headline with a benefit",
            "reader’s problem",
            "solution and product",
            "proof",
            "price and terms",
            "CTA: call / get in touch / buy",
          ],
        },
      ],
      links: [
        {
          label: "Instagram sales post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "How to talk about price",
      level: 2,
      paras: [
        "Price can be clearer: break it by period, compare with a costlier alternative, show the package. An honest discount from a real base is fine; a fake “was 99999” is not.",
      ],
      lists: [
        {
          intro: "Moves without manipulation:",
          items: [
            "price per day/month on a long term",
            "what’s included in the sum",
            "compare with the cost of the problem unsolved",
            "clear payment and refund terms",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Starting with “we are market leaders” instead of the client’s pain. Prove leadership with cases after the benefit is clear.",
        },
      ],
    },
  ],
};

/** ES overlay for prodayushchie-teksty — same structure as RU JSON / EN. */
export const prodayushchieTekstyEs: BlogPost = {
  slug: "prodayushchie-teksty",
  title: "Textos de venta: principios y estructura",
  date: "2021-10-15",
  category: "SEO",
  cover: "/images/blog/prodayushchie-teksty/cover-es.webp",
  excerpt:
    "Cómo escribir textos de venta: audiencia y producto, tono, titular, intro, argumentos, precio y un CTA sin clichés.",
  lead: [
    "El texto de venta impulsa una acción: lead, compra, llamada. Al lector rara vez le importa que «la empresa crece» — le importa qué problema resuelve la oferta.",
    "Abajo: principios, estructura del titular al CTA y formas de hablar del precio. Posts en redes y copywriting general tienen artículos hermanos; esta pieza es el marco del texto comercial.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el texto de venta del informativo?",
      a: "Lo informativo explica un tema. El de venta cierra un dolor/beneficio y termina con un siguiente paso claro.",
    },
    {
      q: "¿Hace falta un marco AIDA rígido?",
      a: "Como marco — sí (atención → interés → deseo → acción). No tienes que etiquetar los bloques con letras en el texto.",
    },
    {
      q: "¿Puedo ocultar los inconvenientes?",
      a: "Gana la honestidad. Los límites dichos con calma construyen confianza; la mentira mata la conversión en el siguiente paso.",
    },
    {
      q: "¿Cómo escribo sobre un precio alto?",
      a: "Pártelo en unidades claras, compara con una alternativa, muestra valor y qué incluye. No inventes un descuento.",
    },
    {
      q: "¿Cuánto relleno está bien?",
      a: "Casi nada. Hechos, beneficios, prueba, CTA. Lírica solo si de verdad calienta a la audiencia.",
    },
  ],
  sections: [
    {
      title: "Principios del texto de venta",
      level: 2,
      paras: [
        "Escribe en el lenguaje claro de la audiencia, da beneficio y prueba, mantén la lógica, respeta al lector. El mensaje principal es resolver su job — no el autoelogio de marca.",
      ],
      lists: [
        {
          intro: "Lo básico:",
          items: [
            "audiencia y escenario claros",
            "hechos precisos del producto",
            "beneficios en lugar de features sueltas",
            "coherencia y tacto",
            "un CTA principal",
          ],
        },
      ],
    },
    {
      title: "Audiencia y producto",
      level: 2,
      paras: [
        "Arma un retrato: jobs, objeciones, lenguaje, competidores. Conoce el producto: propiedades, diferencias, límites. Sin eso el copy va «de todo y de nadie».",
      ],
      lists: [
        {
          intro: "Antes del borrador:",
          items: [
            "quién lee y qué acción necesitas",
            "qué dolor/deseo",
            "en qué te diferencias de los pares",
            "qué prueba tienes (casos, cifras, garantías)",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting: tipos de texto",
          href: "/es/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Tono y titular",
      level: 2,
      paras: [
        "El tono es el lenguaje de la audiencia: más simple para un público amplio, términos precisos sin legalese para pros. Los hechos ganan a los signos de exclamación.",
        "El titular promete beneficio o intriga sin mentir. Tras él la gente debería querer seguir leyendo — no sentir clickbait.",
      ],
    },
    {
      title: "Intro, cuerpo, cierre",
      level: 2,
      paras: [
        "La intro es corta: problema → esperanza → pista de una solución. Recursos: preguntas a las que la audiencia responde «sí»; «si… entonces…»; un beneficio explícito.",
        "Cuerpo: features a través de beneficios, prueba, escenario de uso, respuestas a objeciones. Cierre: resumen, precio/condiciones y un CTA claro.",
      ],
      lists: [
        {
          intro: "Marco del artículo:",
          items: [
            "titular con un beneficio",
            "problema del lector",
            "solución y producto",
            "prueba",
            "precio y condiciones",
            "CTA: llamar / contactar / comprar",
          ],
        },
      ],
      links: [
        {
          label: "Post de venta en Instagram",
          href: "/es/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Cómo hablar del precio",
      level: 2,
      paras: [
        "El precio puede ser más claro: pártelo por periodo, compara con una alternativa más cara, muestra el paquete. Un descuento honesto desde una base real está bien; un «antes 99999» falso no.",
      ],
      lists: [
        {
          intro: "Movimientos sin manipulación:",
          items: [
            "precio por día/mes en un plazo largo",
            "qué incluye la suma",
            "comparar con el coste del problema sin resolver",
            "condiciones claras de pago y reembolso",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Empezar con «somos líderes del mercado» en lugar del dolor del cliente. Prueba el liderazgo con casos cuando el beneficio ya esté claro.",
        },
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for lending — same structure as RU JSON. */
export const lendingEn: BlogPost = {
  slug: "lending",
  title: "Landing page: what it is and how to build one",
  date: "2021-05-06",
  category: "Digital marketing",
  cover: "/images/blog/lending/cover-en.webp",
  excerpt:
    "What a landing page is, why teams build one, which blocks to assemble, and which mistakes kill conversion — separate from writing the offer copy.",
  lead: [
    "A landing page is a page you send traffic to for one target action: lead, purchase, call, signup. It can be a one-pager or a target URL inside a larger site.",
    "Below: why a landing exists, section logic, and typical failures. How to write offer copy is in the landing-copy article.",
  ],
  faq: [
    {
      q: "Is a landing always a one-page site?",
      a: "No. A catalog/service page on a multi-page site can be a landing if you intentionally send traffic there.",
    },
    {
      q: "Is a landing the same as a sales page?",
      a: "Not necessarily. The goal can be a lead, signup, or download — not only payment.",
    },
    {
      q: "How is this different from the landing-copy article?",
      a: "This article covers the page’s role and section frame. Offer copy, CTAs, and wording are in a separate article.",
    },
    {
      q: "Does a landing need SEO?",
      a: "If you expect organic — yes: Title, structure, speed. For pure paid traffic, offer and load speed matter more.",
    },
    {
      q: "How many CTAs should I place?",
      a: "One main scenario. You can repeat buttons, but don’t spawn competing goals.",
    },
    {
      q: "Do I need a separate landing for every ad?",
      a: "Not always. A separate landing is justified when the campaign has its own segment, offer, or scenario. For close queries, adapting one page and measuring is enough.",
    },
  ],
  sections: [
    {
      title: "Why landings get built",
      level: 2,
      paras: [
        "To focus attention: one offer, minimal distracting links, a clear next step. Handy for ad campaigns and promos.",
      ],
      lists: [
        {
          intro: "Typical goals:",
          items: [
            "lead / call",
            "purchase",
            "signup / demo",
            "download a resource",
          ],
        },
      ],
    },
    {
      title: "Page frame",
      level: 2,
      paras: [
        "Above the fold: offer, audience, CTA. Next come benefits, proof, how it works, objections, CTA again, contacts.",
      ],
      lists: [
        {
          intro: "What to check in the layout:",
          items: [
            "readable on mobile",
            "button visible without “where do I tap”",
            "short form",
            "no extra nav that sends people “to the blog”",
            "load speed",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Strong and weak patterns",
      level: 2,
      paras: [
        "Strong pages clearly answer “what / for whom / why you / what to do.” Weak ones — fluff, tiny type, hidden price with no reason, five different CTAs.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "offer unreadable on a phone screen",
            "no proof (cases, numbers, reviews)",
            "a 15-field form",
            "keyword stuffing instead of meaning",
            "slow load from heavy banners",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Start with goal and audience",
      level: 2,
      paras: [
        "You don’t design a landing from a pretty template — from a concrete action and audience segment. One page may explain a service well for small business but poorly answer a buyer at a large company — different criteria, timelines, and objections.",
        "Before design, state the offer in one sentence: what the person gets, who it fits, and what next step you propose. If the answer is vague, blocks and buttons won’t fix it.",
      ],
      lists: [
        {
          intro: "Mini brief for a landing:",
          items: [
            "traffic source and visitor expectation",
            "one main conversion",
            "audience and their job",
            "real advantages and limits of the offer",
          ],
        },
      ],
    },
    {
      title: "How to build a convincing first screen",
      level: 2,
      paras: [
        "The first screen doesn’t have to hold all sales copy. Its job is to confirm the person landed in the right place and give a reason to scroll or submit. A clear headline, short explanation, obvious button, and visual context usually beat a slogan with no meaning.",
        "Don’t hide important terms behind the form. If price depends on the job, name a range or explain how it’s calculated. Transparency filters random inquiries and builds trust with people who actually fit.",
      ],
      lists: [
        {
          intro: "On the first screen check:",
          items: [
            "is it clear what’s offered",
            "is it clear who it’s for",
            "does the CTA match the next step",
            "is the content readable on a phone",
          ],
        },
      ],
    },
    {
      title: "Proof and objections",
      level: 2,
      paras: [
        "After the offer, visitors need reasons to trust: work examples, measurable results, process, team, reviews with context. Don’t add decorative logos and “10,000 clients” if you can’t explain or prove them.",
        "Close objections where they arise. Delivery terms near the product, scope near the service, legal details before form submit. That shortens the path to a decision and makes the page more honest.",
      ],
      lists: [
        {
          intro: "Fitting proof:",
          items: [
            "a case with task, process, and result",
            "real reviews with client permission",
            "a clear work scheme and timelines",
            "certificates and documents if they affect the choice",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for lending — same structure as RU JSON / EN. */
export const lendingEs: BlogPost = {
  slug: "lending",
  title: "Landing page: qué es y cómo construir una",
  date: "2021-05-06",
  category: "Digital marketing",
  cover: "/images/blog/lending/cover.webp",
  excerpt:
    "Qué es una landing page, por qué los equipos la montan, qué bloques ensamblar y qué errores matan la conversión — aparte de escribir el copy de la oferta.",
  lead: [
    "Una landing page es una página a la que envías tráfico para una acción objetivo: lead, compra, llamada, alta. Puede ser un one-pager o una URL objetivo dentro de un sitio más grande.",
    "Abajo: por qué existe un landing, lógica de secciones y fallos típicos. Cómo escribir el copy de la oferta está en el artículo de copy de landing.",
  ],
  faq: [
    {
      q: "¿Un landing es siempre un sitio de una página?",
      a: "No. Una página de catálogo/servicio en un sitio multipágina puede ser landing si envías tráfico ahí a propósito.",
    },
    {
      q: "¿Un landing es lo mismo que una página de venta?",
      a: "No necesariamente. El objetivo puede ser un lead, un alta o una descarga — no solo el pago.",
    },
    {
      q: "¿En qué se diferencia del artículo de copy de landing?",
      a: "Este artículo cubre el rol de la página y el marco de secciones. Copy de oferta, CTAs y redacción van en un artículo aparte.",
    },
    {
      q: "¿Un landing necesita SEO?",
      a: "Si esperas orgánico — sí: Title, estructura, velocidad. Para tráfico pago puro importan más la oferta y la velocidad de carga.",
    },
    {
      q: "¿Cuántos CTAs coloco?",
      a: "Un escenario principal. Puedes repetir botones, pero no generes objetivos que compiten.",
    },
    {
      q: "¿Hace falta un landing aparte para cada anuncio?",
      a: "No siempre. Un landing aparte se justifica cuando la campaña tiene su propio segmento, oferta o escenario. Para consultas cercanas, adaptar una página y medir basta.",
    },
  ],
  sections: [
    {
      title: "Por qué se construyen landings",
      level: 2,
      paras: [
        "Para enfocar la atención: una oferta, mínimos enlaces que distraigan, un siguiente paso claro. Útil para campañas de ads y promos.",
      ],
      lists: [
        {
          intro: "Objetivos típicos:",
          items: [
            "lead / llamada",
            "compra",
            "alta / demo",
            "descargar un recurso",
          ],
        },
      ],
    },
    {
      title: "Marco de la página",
      level: 2,
      paras: [
        "Above the fold: oferta, audiencia, CTA. Luego vienen beneficios, prueba, cómo funciona, objeciones, CTA otra vez, contactos.",
      ],
      lists: [
        {
          intro: "Qué revisar en el layout:",
          items: [
            "legible en móvil",
            "botón visible sin «¿dónde toco?»",
            "formulario corto",
            "sin nav extra que mande gente «al blog»",
            "velocidad de carga",
          ],
        },
      ],
      links: [
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Patrones fuertes y débiles",
      level: 2,
      paras: [
        "Las páginas fuertes responden con claridad «qué / para quién / por qué vosotros / qué hacer». Las débiles — relleno, tipografía diminuta, precio oculto sin motivo, cinco CTAs distintos.",
      ],
      lists: [
        {
          intro: "Errores habituales:",
          items: [
            "oferta ilegible en la pantalla del teléfono",
            "sin prueba (casos, cifras, reseñas)",
            "un formulario de 15 campos",
            "keyword stuffing en lugar de sentido",
            "carga lenta por banners pesados",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Empieza por objetivo y audiencia",
      level: 2,
      paras: [
        "No diseñas un landing desde una plantilla bonita — desde una acción concreta y un segmento de audiencia. Una página puede explicar bien un servicio para pequeños negocios y responder mal a un comprador de una gran empresa — criterios, plazos y objeciones distintos.",
        "Antes del diseño, formula la oferta en una frase: qué obtiene la persona, a quién encaja y qué siguiente paso propones. Si la respuesta es vaga, bloques y botones no lo arreglan.",
      ],
      lists: [
        {
          intro: "Mini brief para un landing:",
          items: [
            "fuente de tráfico y expectativa del visitante",
            "una conversión principal",
            "audiencia y su job",
            "ventajas reales y límites de la oferta",
          ],
        },
      ],
    },
    {
      title: "Cómo construir un primer pantallazo convincente",
      level: 2,
      paras: [
        "El primer pantallazo no tiene que cargar todo el copy de venta. Su trabajo es confirmar que la persona llegó al sitio correcto y dar un motivo para hacer scroll o enviar. Un titular claro, explicación corta, botón obvio y contexto visual suelen ganar a un eslogan sin sentido.",
        "No escondas condiciones importantes detrás del formulario. Si el precio depende del trabajo, nombra un rango o explica cómo se calcula. La transparencia filtra consultas al azar y genera confianza en quien de verdad encaja.",
      ],
      lists: [
        {
          intro: "En el primer pantallazo revisa:",
          items: [
            "¿está claro qué se ofrece?",
            "¿está claro para quién es?",
            "¿el CTA encaja con el siguiente paso?",
            "¿el contenido se lee en el teléfono?",
          ],
        },
      ],
    },
    {
      title: "Prueba y objeciones",
      level: 2,
      paras: [
        "Tras la oferta, los visitantes necesitan motivos para confiar: ejemplos de trabajo, resultados medibles, proceso, equipo, reseñas con contexto. No añadas logos decorativos y «10.000 clientes» si no puedes explicarlos o probarlos.",
        "Cierra las objeciones donde surgen. Condiciones de entrega junto al producto, alcance junto al servicio, datos legales antes de enviar el formulario. Eso acorta el camino a la decisión y hace la página más honesta.",
      ],
      lists: [
        {
          intro: "Prueba que encaja:",
          items: [
            "un caso con tarea, proceso y resultado",
            "reseñas reales con permiso del cliente",
            "un esquema de trabajo y plazos claros",
            "certificados y documentos si afectan a la elección",
          ],
        },
      ],
    },
  ],
};

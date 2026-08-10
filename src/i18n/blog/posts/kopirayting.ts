import type { BlogPost } from "../../../data/blog";

/** EN overlay for kopirayting — same structure as RU JSON. */
export const kopiraytingEn: BlogPost = {
  slug: "kopirayting",
  title: "Copywriting: text types, jobs, and how to choose a writer",
  date: "2021-11-30",
  category: "Content marketing",
  cover: "/images/blog/kopirayting/cover-en.webp",
  excerpt:
    "What copywriting is: informational and selling texts, LSI, landings, SMM, writer requirements, pay, and tips for clients.",
  lead: [
    "Copywriting is writing for a job: explain, warm up, drive a lead, or help search find the page. It’s not “fill characters” — it’s solving a business goal with words.",
    "Below: directions, formats, what to check in a contractor, and how to brief. Market rates move — these are guides, not an agency price list.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is copywriting different from rewriting?",
      a: "Rewriting retells someone else’s text. Copywriting builds material for a job, audience, and often for keywords — with facts and structure.",
    },
    {
      q: "Does every text need SEO?",
      a: "Not every one. Landings and demand articles — yes (keywords, LSI, structure). Social posts care more about tone and CTA.",
    },
    {
      q: "How much does good copy cost?",
      a: "Depends on niche, length, research depth, and format (product card vs expert article). Cheap “per 1000 characters” often means no expertise.",
    },
    {
      q: "What should I put in the writer’s brief?",
      a: "Goal, audience, offer, required facts, keywords/cluster, length, tone, competitor examples, deadline, and acceptance criteria.",
    },
    {
      q: "Can one universal writer cover the whole site?",
      a: "Sometimes. But selling landings, legal copy, and narrow expertise often need different skills.",
    },
  ],
  sections: [
    {
      title: "Two big directions",
      level: 2,
      paras: [
        "Informational texts answer questions and build trust and expertise. Commercial ones lead to an action: lead, purchase, call.",
        "In practice a site needs both: articles and help feed demand; cards and landings convert.",
      ],
    },
    {
      title: "How people enter the craft",
      level: 2,
      paras: [
        "“Writing smoothly” isn’t enough. You need literacy, genre range, fact-gathering, keyword work, and sane edits from feedback.",
      ],
      lists: [
        {
          intro: "Core skills:",
          items: [
            "tell info, sales, and entertainment apart",
            "literacy and proofreading",
            "uniqueness and interest in the topic",
            "finding sources and checking facts",
            "formatting and deadlines",
          ],
        },
      ],
    },
    {
      title: "Types of copywriting",
      level: 2,
      paras: [
        "Format sets the text’s job. One writer is rarely equally strong at everything — check a portfolio for the type you need.",
      ],
      lists: [
        {
          intro: "Common formats:",
          items: [
            "site section copy (About, services)",
            "LSI / SEO articles for a query cluster",
            "selling copy and offers",
            "news, announcements, press releases",
            "ad slogans and promo",
            "SMM posts and Stories scripts",
            "print and offline promo",
            "landings (blocks built for conversion)",
            "e-commerce product and category cards",
            "reviews and cases — only honest, no fabrication",
          ],
        },
      ],
      notes: [
        {
          title: "LSI in brief",
          text: "Search engines look not only at “keyword density,” but meaning, related terms, structure. Write for humans within the topic — not a query list.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Pay and finding a writer",
      level: 2,
      paras: [
        "People pay by volume, by project, by result (rarer), or on an editorial retainer. Cheap copy with no brief almost always costs more in rewrites.",
        "Search on marketplaces, via referrals, in agencies, and with in-house editors. For the client, a niche portfolio beats a star rating.",
      ],
      lists: [
        {
          intro: "What to check in a writer:",
          items: [
            "examples of similar jobs",
            "how they clarify the brief",
            "willingness to revise within the brief",
            "deadlines and communication",
          ],
        },
      ],
    },
    {
      title: "Quality requirements",
      level: 2,
      paras: [
        "Good copy solves the job, reads without fluff, matches facts and brand tone. Uniqueness is baseline — not the only KPI.",
      ],
      lists: [
        {
          intro: "Acceptance criteria:",
          items: [
            "literacy",
            "structure (headings, paragraphs, lists)",
            "facts and offer without filler",
            "keywords used appropriately, no stuffing",
            "deadline and revisions per brief",
          ],
        },
      ],
    },
    {
      title: "Tips for clients",
      level: 2,
      paras: [
        "A vague brief gets a vague result. Clearer goal and audience mean fewer iterations.",
      ],
      lists: [
        {
          intro: "Minimum in the brief:",
          items: [
            "clear parameters and text goal",
            "portfolio before paying a large block",
            "agreed terms and revision count",
            "feedback in process, not “rewrite everything on the last day”",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Asking for an “SEO text of 10,000 characters with 20 keywords” with no cluster and page structure. Meaning and landing logic first — length second.",
          kind: "tip",
        },
      ],
    },
  ],
};

/** ES overlay for kopirayting — same structure as RU JSON / EN. */
export const kopiraytingEs: BlogPost = {
  slug: "kopirayting",
  title: "Copywriting: tipos de texto, trabajos y cómo elegir un redactor",
  date: "2021-11-30",
  category: "Content marketing",
  cover: "/images/blog/kopirayting/cover-es.webp",
  excerpt:
    "Qué es el copywriting: textos informativos y de venta, LSI, landings, SMM, requisitos del redactor, pago y tips para clientes.",
  lead: [
    "El copywriting es escribir para un trabajo: explicar, calentar, traer un lead o ayudar a que la búsqueda encuentre la página. No es «rellenar caracteres» — es resolver un objetivo de negocio con palabras.",
    "Abajo: direcciones, formatos, qué revisar en un contratista y cómo briefar. Las tarifas del mercado se mueven — esto son guías, no una lista de precios de agencia.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no incentiva el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia el copywriting del rewriting?",
      a: "El rewriting retoma el texto de otro. El copywriting construye material para un trabajo, audiencia y a menudo keywords — con hechos y estructura.",
    },
    {
      q: "¿Todo texto necesita SEO?",
      a: "No todos. Landings y artículos de demanda — sí (keywords, LSI, estructura). En posts sociales importan más el tono y el CTA.",
    },
    {
      q: "¿Cuánto cuesta un buen copy?",
      a: "Depende del nicho, longitud, profundidad de research y formato (ficha de producto vs artículo experto). El barato «por 1000 caracteres» a menudo significa sin expertise.",
    },
    {
      q: "¿Qué meter en el brief del redactor?",
      a: "Objetivo, audiencia, oferta, hechos necesarios, keywords/cluster, longitud, tono, ejemplos de competidores, deadline y criterios de aceptación.",
    },
    {
      q: "¿Un redactor universal puede cubrir todo el sitio?",
      a: "A veces. Pero landings de venta, copy legal y expertise estrecha a menudo piden skills distintas.",
    },
  ],
  sections: [
    {
      title: "Dos grandes direcciones",
      level: 2,
      paras: [
        "Los textos informativos responden preguntas y construyen confianza y expertise. Los comerciales llevan a una acción: lead, compra, llamada.",
        "En la práctica un sitio necesita ambos: artículos y ayuda alimentan demanda; fichas y landings convierten.",
      ],
    },
    {
      title: "Cómo se entra en el oficio",
      level: 2,
      paras: [
        "«Escribir fluido» no basta. Hacen falta corrección ortográfica, rango de géneros, recogida de hechos, trabajo con keywords y edits sensatos a partir del feedback.",
      ],
      lists: [
        {
          intro: "Skills centrales:",
          items: [
            "distinguir info, ventas y entretenimiento",
            "ortografía y revisión",
            "unicidad e interés por el tema",
            "encontrar fuentes y comprobar hechos",
            "formato y deadlines",
          ],
        },
      ],
    },
    {
      title: "Tipos de copywriting",
      level: 2,
      paras: [
        "El formato fija el trabajo del texto. Un redactor rara vez es igual de fuerte en todo — revisa el portfolio del tipo que necesitas.",
      ],
      lists: [
        {
          intro: "Formatos habituales:",
          items: [
            "copy de secciones del sitio (Nosotros, servicios)",
            "artículos LSI / SEO para un cluster de consultas",
            "copy de venta y ofertas",
            "noticias, anuncios, notas de prensa",
            "eslóganes publicitarios y promo",
            "posts SMM y guiones de Stories",
            "promo impresa y offline",
            "landings (bloques pensados para conversión)",
            "fichas y categorías de e-commerce",
            "reseñas y casos — solo honestos, sin fabricar",
          ],
        },
      ],
      notes: [
        {
          title: "LSI en breve",
          text: "Los buscadores miran no solo la «densidad de keywords», sino sentido, términos relacionados, estructura. Escribe para humanos dentro del tema — no una lista de consultas.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Post de venta en Instagram",
          href: "/es/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Pago y cómo encontrar un redactor",
      level: 2,
      paras: [
        "Se paga por volumen, por proyecto, por resultado (más raro) o con un retainer editorial. Copy barato sin brief casi siempre cuesta más en rewrites.",
        "Busca en marketplaces, por referidos, en agencias y con editores in-house. Para el cliente, un portfolio de nicho gana a una valoración estrella.",
      ],
      lists: [
        {
          intro: "Qué revisar en un redactor:",
          items: [
            "ejemplos de trabajos similares",
            "cómo aclaran el brief",
            "disposición a revisar dentro del brief",
            "deadlines y comunicación",
          ],
        },
      ],
    },
    {
      title: "Requisitos de calidad",
      level: 2,
      paras: [
        "Un buen copy resuelve el trabajo, se lee sin relleno, encaja con hechos y tono de marca. La unicidad es la base — no el único KPI.",
      ],
      lists: [
        {
          intro: "Criterios de aceptación:",
          items: [
            "corrección ortográfica",
            "estructura (titulares, párrafos, listas)",
            "hechos y oferta sin filler",
            "keywords usadas con sentido, sin stuffing",
            "deadline y revisiones según el brief",
          ],
        },
      ],
    },
    {
      title: "Tips para clientes",
      level: 2,
      paras: [
        "Un brief vago da un resultado vago. Cuanto más claros el objetivo y la audiencia, menos iteraciones.",
      ],
      lists: [
        {
          intro: "Mínimo en el brief:",
          items: [
            "parámetros claros y objetivo del texto",
            "portfolio antes de pagar un bloque grande",
            "términos y número de revisiones acordados",
            "feedback en proceso, no «reescribe todo el último día»",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Pedir un «texto SEO de 10.000 caracteres con 20 keywords» sin cluster ni estructura de página. Primero sentido y lógica de landing — la longitud después.",
          kind: "tip",
        },
      ],
    },
  ],
};

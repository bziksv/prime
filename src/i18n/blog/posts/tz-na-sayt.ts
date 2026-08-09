import type { BlogPost } from "../../../data/blog";

/** EN overlay for tz-na-sayt — same structure as RU JSON. */
export const tzNaSaytEn: BlogPost = {
  slug: "tz-na-sayt",
  title: "Website specification: brief, structure, and common mistakes",
  date: "2019-12-11",
  category: "Digital marketing",
  cover: "/images/blog/tz-na-sayt/cover-en.webp",
  excerpt:
    "How to write a website technical specification: why the document matters, how a short brief differs from a full spec, what to cover by block, and which client mistakes cost the most.",
  lead: [
    "A website technical specification locks what should be delivered: goals, audience, pages, design direction, responsive rules, integrations, and timelines. Without it the contractor leans on their own taste — and the result often misses yours.",
    "Below: how to reach shared understanding through a brief, what to put in the document, why a prototype helps, and which mistakes most often lead to rework. This isn’t a “sign and forget” template — it’s a working contract of meaning between both sides.",
  ],
  faq: [
    {
      q: "Are a brief and a full spec the same thing?",
      a: "No. A brief is a short questionnaire and discussion. The spec is the final action guide once details are agreed.",
    },
    {
      q: "Can freelancers work without a spec?",
      a: "They can, but dispute risk is higher. At minimum lock goals, structure, references, responsive rules, access, and deadlines.",
    },
    {
      q: "Do you need a prototype?",
      a: "Preferably yes: it shows block placement before polished design and cuts “the button isn’t there” revisions.",
    },
    {
      q: "How should you describe design?",
      a: "Not “make it pretty” — share reference links, palette, fonts, and tone. Vague words mean different things to everyone.",
    },
    {
      q: "Who writes the spec — the client or the studio?",
      a: "Often together: the client brings business and goals; the contractor structures and clarifies tech. Both sides approve the final.",
    },
    {
      q: "Is a copy brief different from a site spec?",
      a: "Yes. The site spec covers development. A separate copy brief describes volume, keywords, and page tone.",
    },
  ],
  sections: [
    {
      title: "Why a spec at all",
      level: 2,
      paras: [
        "The document cuts “I meant something else.” The contractor follows agreed requirements; the client checks stages instead of arguing about button color at the end.",
        "Without a spec you hand the business to someone with another taste and another picture of success. Small tweaks are normal; a concept change at the finish almost always means a leaky brief.",
      ],
      lists: [
        {
          intro: "Each side’s jobs:",
          items: [
            "client — goals, limits, materials, acceptance",
            "contractor — delivery to the spec, questions on ambiguity",
            "both — timelines and “done” criteria",
          ],
        },
      ],
    },
    {
      title: "Brief first, then the document",
      level: 2,
      paras: [
        "A long requirements wall before a conversation often scares people and still stays leaky. A brief is a short questionnaire: business, audience, site goal, examples, style and feature wishes.",
        "In dialogue the contractor offers workable options (for example, menu type); the client accepts or rejects. From the answers you build a structured spec — no longer a negotiation room, but instructions.",
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "What to include in the spec",
      level: 2,
      paras: [
        "Describe the company and product so someone outside your industry gets the point. Lock audience and site goal: lead, purchase, subscribe, signup — that drives UI emphasis.",
        "If a site already exists — the URL, strengths and weaknesses, what to keep. Then: page and menu structure, integrations (CRM, payment, analytics), style and references, materials (copy, photos), responsive and devices, questions and limits.",
      ],
      lists: [
        {
          intro: "Document blocks:",
          items: [
            "company and offer",
            "audience and site goals",
            "current site (if any)",
            "structure and key screens",
            "design references and tone",
            "content and who prepares it",
            "responsive and integrations",
            "timelines, stages, access",
          ],
        },
      ],
      tables: [
        {
          caption: "Sample brief fields",
          headers: ["Item", "What to write"],
          rows: [
            ["Company", "What you do, product, differences"],
            ["Audience", "Who buys, job, barriers"],
            ["Site goal", "Lead / purchase / other CTA"],
            ["Structure", "Pages, menu, required blocks"],
            ["Look & feel", "References, colors, fonts, tone"],
            ["Tech", "Responsive, CRM, analytics, payments"],
          ],
        },
      ],
    },
    {
      title: "Prototype before “pretty”",
      level: 2,
      paras: [
        "A prototype shows the frame: where the headline, offer, form, and reviews sit. It isn’t polished design. Without references and clear placement rules the contractor guesses — and “light tones” mean different things to everyone.",
        "It helps to review competitors and strong third-party sites as structure orientation, not copy-paste. A prototype is especially useful with many blocks and contested accents.",
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Common client mistakes",
      level: 2,
      paras: [
        "No stage deadlines — the project drifts. No references — endless taste revisions. No saved hosting and domain access — risk of losing control after a contractor change.",
        "Another mistake is staying silent about doubts. If a spec line is unclear, clarify before layout. The client may be weak in design or code — that’s fine; what matters is locking the business outcome and acceptance criteria.",
      ],
      lists: [
        {
          intro: "Checklist before work starts:",
          items: [
            "goals and CTA agreed",
            "references exist, not only “pretty”",
            "stage deadlines written",
            "who provides copy and photos is clear",
            "domain and hosting access stays with the client",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "A spec doesn’t replace a contract and acceptance act. Legal terms and rights to layouts and code should be locked separately.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "A good website spec starts with a brief and ends with testable requirements: goals, structure, references, responsive rules, timelines. The clearer the document, the fewer reworks — and the closer the result to what you pictured.",
  ],
  related: [
    "tselevaya-auditoriya",
    "tekst-lendinga",
    "start-internet-magazina",
    "analiz-konkurentov",
    "lending",
    "verstka-saytov",
  ],
};

/** ES overlay for tz-na-sayt — same structure as RU JSON / EN. */
export const tzNaSaytEs: BlogPost = {
  slug: "tz-na-sayt",
  title: "Especificación del sitio: brief, estructura y errores habituales",
  date: "2019-12-11",
  category: "Digital marketing",
  cover: "/images/blog/tz-na-sayt/cover.webp",
  excerpt:
    "Cómo escribir una especificación técnica de sitio: por qué importa el documento, en qué se diferencia un brief corto de una spec completa, qué cubrir por bloque y qué errores del cliente cuestan más.",
  lead: [
    "Una especificación técnica de sitio fija qué debe entregarse: objetivos, audiencia, páginas, dirección de diseño, reglas responsive, integraciones y plazos. Sin ella el contractor se apoya en su propio gusto — y el resultado a menudo no encaja con el tuyo.",
    "Abajo: cómo llegar a un entendimiento compartido con un brief, qué meter en el documento, por qué ayuda un prototipo y qué errores llevan más a menudo a rework. Esto no es una plantilla de «firma y olvida» — es un contrato de sentido de trabajo entre ambas partes.",
  ],
  faq: [
    {
      q: "¿Brief y spec completa son lo mismo?",
      a: "No. Un brief es un cuestionario corto y una conversación. La spec es la guía de acción final cuando los detalles están acordados.",
    },
    {
      q: "¿Los freelancers pueden trabajar sin spec?",
      a: "Pueden, pero el riesgo de disputa es mayor. Como mínimo fija objetivos, estructura, referencias, reglas responsive, accesos y plazos.",
    },
    {
      q: "¿Hace falta un prototipo?",
      a: "Preferible sí: muestra la colocación de bloques antes del diseño pulido y corta revisiones de «el botón no está ahí».",
    },
    {
      q: "¿Cómo describir el diseño?",
      a: "No «hazlo bonito» — comparte enlaces de referencia, paleta, fuentes y tono. Las palabras vagas significan cosas distintas para cada uno.",
    },
    {
      q: "¿Quién escribe la spec — el cliente o el estudio?",
      a: "A menudo juntos: el cliente aporta negocio y objetivos; el contractor estructura y aclara la técnica. Ambas partes aprueban el final.",
    },
    {
      q: "¿Un brief de copy es distinto de la spec del sitio?",
      a: "Sí. La spec del sitio cubre desarrollo. Un brief de copy aparte describe volumen, keywords y tono de página.",
    },
  ],
  sections: [
    {
      title: "Por qué una spec en absoluto",
      level: 2,
      paras: [
        "El documento corta el «yo quería decir otra cosa». El contractor sigue requisitos acordados; el cliente revisa etapas en lugar de discutir el color del botón al final.",
        "Sin spec entregas el negocio a alguien con otro gusto y otra foto del éxito. Ajustes pequeños son normales; un cambio de concepto al cierre casi siempre significa un brief con fugas.",
      ],
      lists: [
        {
          intro: "Trabajos de cada parte:",
          items: [
            "cliente — objetivos, límites, materiales, aceptación",
            "contractor — entrega según la spec, preguntas ante ambigüedad",
            "ambos — plazos y criterios de «hecho»",
          ],
        },
      ],
    },
    {
      title: "Primero brief, luego el documento",
      level: 2,
      paras: [
        "Un muro largo de requisitos antes de una conversación a menudo asusta y aun así se queda con fugas. Un brief es un cuestionario corto: negocio, audiencia, objetivo del sitio, ejemplos, deseos de estilo y features.",
        "En el diálogo el contractor ofrece opciones viables (por ejemplo, tipo de menú); el cliente acepta o rechaza. Con las respuestas armas una spec estructurada — ya no una sala de negociación, sino instrucciones.",
      ],
      links: [
        {
          label: "Audiencia target",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Qué incluir en la spec",
      level: 2,
      paras: [
        "Describe la empresa y el producto para que alguien fuera de tu industria entienda el punto. Fija audiencia y objetivo del sitio: lead, compra, suscripción, signup — eso mueve el énfasis de UI.",
        "Si ya existe un sitio — la URL, fortalezas y debilidades, qué conservar. Luego: estructura de páginas y menú, integraciones (CRM, pago, analytics), estilo y referencias, materiales (copy, fotos), responsive y dispositivos, preguntas y límites.",
      ],
      lists: [
        {
          intro: "Bloques del documento:",
          items: [
            "empresa y oferta",
            "audiencia y objetivos del sitio",
            "sitio actual (si hay)",
            "estructura y pantallas clave",
            "referencias de diseño y tono",
            "contenido y quién lo prepara",
            "responsive e integraciones",
            "plazos, etapas, accesos",
          ],
        },
      ],
      tables: [
        {
          caption: "Campos de ejemplo del brief",
          headers: ["Ítem", "Qué escribir"],
          rows: [
            ["Empresa", "Qué haces, producto, diferencias"],
            ["Audiencia", "Quién compra, trabajo, barreras"],
            ["Objetivo del sitio", "Lead / compra / otro CTA"],
            ["Estructura", "Páginas, menú, bloques obligatorios"],
            ["Look & feel", "Referencias, colores, fuentes, tono"],
            ["Tech", "Responsive, CRM, analytics, pagos"],
          ],
        },
      ],
    },
    {
      title: "Prototipo antes de «bonito»",
      level: 2,
      paras: [
        "Un prototipo muestra el frame: dónde van el headline, la oferta, el formulario y las reseñas. No es diseño pulido. Sin referencias y reglas claras de colocación el contractor adivina — y «tonos claros» significan cosas distintas para cada uno.",
        "Ayuda revisar competidores y sitios fuertes de terceros como orientación de estructura, no copy-paste. Un prototipo es especialmente útil con muchos bloques y acentos en disputa.",
      ],
      links: [
        {
          label: "Copy de landing page",
          href: "/es/blog/tekst-lendinga/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Errores habituales del cliente",
      level: 2,
      paras: [
        "Sin plazos por etapa — el proyecto deriva. Sin referencias — revisiones eternas de gusto. Sin accesos guardados de hosting y dominio — riesgo de perder el control tras un cambio de contractor.",
        "Otro error es callar las dudas. Si una línea de la spec no está clara, aclara antes del layout. El cliente puede ser débil en diseño o código — está bien; lo que importa es fijar el outcome de negocio y los criterios de aceptación.",
      ],
      lists: [
        {
          intro: "Checklist antes de empezar el trabajo:",
          items: [
            "objetivos y CTA acordados",
            "existen referencias, no solo «bonito»",
            "plazos por etapa escritos",
            "quién aporta copy y fotos está claro",
            "el acceso a dominio y hosting se queda con el cliente",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "Una spec no sustituye un contrato y un acta de aceptación. Los términos legales y los derechos sobre layouts y código deben fijarse aparte.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "Una buena spec de sitio empieza con un brief y termina con requisitos testeables: objetivos, estructura, referencias, reglas responsive, plazos. Cuanto más claro el documento, menos reworks — y más cerca el resultado de lo que imaginaste.",
  ],
  related: [
    "tselevaya-auditoriya",
    "tekst-lendinga",
    "start-internet-magazina",
    "analiz-konkurentov",
    "lending",
    "verstka-saytov",
  ],
};

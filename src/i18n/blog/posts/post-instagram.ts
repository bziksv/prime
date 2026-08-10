import type { BlogPost } from "../../../data/blog";

/** EN overlay for post-instagram — same structure as RU JSON. */
export const postInstagramEn: BlogPost = {
  slug: "post-instagram",
  title: "A selling Instagram post: structure and headline",
  date: "2021-12-07",
  category: "SMM",
  cover: "/images/blog/post-instagram/cover-en.webp",
  excerpt:
    "How to build a selling Instagram post: offer, USP, copy structure, headline, CTA, and handling comments.",
  lead: [
    "A selling post is copy plus visuals about a specific product or service with a clear benefit and a call to action. It’s not a “pretty paragraph” — it’s a step in the dialogue with the buyer.",
    "Below: audience, positioning, copy frame, and handling negativity. Instagram’s UI changes — copy logic matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a selling post different from a value post?",
      a: "A value post teaches or entertains. A selling post leads to an action: lead, purchase, click, booking. In the feed, sales are usually a minority — see the content plan.",
    },
    {
      q: "Do I need keywords in the first line?",
      a: "Meaning and benefit beat query density. A keyword is fine if it sounds human; otherwise the first line pushes people away.",
    },
    {
      q: "How much caption text is normal?",
      a: "Enough to handle an objection and give a CTA. Long posts work if there’s air, lists, and a strong hook in the preview.",
    },
    {
      q: "Should I delete negative comments?",
      a: "Mass-deleting criticism kills trust. Move the argument to DMs; spam and insults — per moderation rules.",
    },
    {
      q: "Is one strong post enough?",
      a: "No. You need rhythm, warm-up, and profile packaging. One post is a hypothesis test, not the whole funnel.",
    },
  ],
  sections: [
    {
      title: "What a selling post is",
      level: 2,
      paras: [
        "It’s a publication that grabs attention, clearly describes the offer, and nudges a step: message, click, buy, book.",
        "A strong post stands out in the feed, hits an audience need, and doesn’t hide the next step.",
      ],
      lists: [
        {
          intro: "Signs of a working post:",
          items: [
            "noticeable visual and first line",
            "a concrete product / service / offer",
            "benefits, not only “specs”",
            "a clear CTA",
          ],
        },
      ],
    },
    {
      title: "Goal and what to write",
      level: 2,
      paras: [
        "The goal is leads and sales, not “likes for likes.” Copy is a precise tool: features, benefits, difference from analogues.",
      ],
      lists: [
        {
          intro: "The text usually includes:",
          items: [
            "key features",
            "benefits for the client",
            "options / offer formats",
            "proof (figures, case, guarantee) — when possible",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Ask yourself: “Why buy from us, not the neighbor?” That answer is the post’s core.",
        },
      ],
    },
    {
      title: "Audience and competitors",
      level: 2,
      paras: [
        "Without an audience portrait the post is written “for everyone” and hooks no one. Gender, age, city, income, activities, pains — the basic frame.",
        "Look at competitors: topics, tone, what gets response. Copying their texts is off — the platform and audience notice. Take meanings and repackage for your offer.",
      ],
    },
    {
      title: "Positioning and USP",
      level: 2,
      paras: [
        "The same product sells better when the difference is clear: delivery, timeline, service, expertise, guarantee, format.",
        "Example: two confectioners in one city — you don’t win with “tastier in words,” but with a clear edge (delivery, giveaway, lead time).",
      ],
      lists: [
        {
          intro: "Positioning jobs in the post:",
          items: [
            "show the benefit",
            "differentiate from analogues",
            "warm interest in the next step",
          ],
        },
      ],
    },
    {
      title: "Headline and copy structure",
      level: 2,
      paras: [
        "The first line is the feed headline. Without a hook the post won’t expand.",
      ],
      lists: [
        {
          intro: "First-line requirements:",
          items: [
            "concise and not banal",
            "offer or pain clear right away",
            "a keyword — only if it sounds natural",
          ],
        },
        {
          intro: "Post frame:",
          items: [
            "intro — 2–3 sentences, hook questions",
            "body — features, benefits, use cases, soft proof",
            "close — a clear CTA (what to do and where)",
          ],
        },
        {
          intro: "CTA examples:",
          items: [
            "“DM us the word … — we’ll call back”",
            "“Book — link in bio / reply to the operator”",
            "“Contacts in profile — name a convenient time”",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Dumping the whole point in the intro and repeating it in the middle. The intro is a lead-in; value lives in the body.",
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Comments and negativity",
      level: 2,
      paras: [
        "Reply speed matters: a hot lead goes to a competitor. Active accounts need someone owning DMs and comments.",
        "Negativity is better moved to private messages and handled calmly. Spam and toxicity — per moderation rules; mass-scrubbing criticism “for looks” isn’t worth it.",
      ],
    },
  ],
};

/** ES overlay for post-instagram — same structure as RU JSON / EN. */
export const postInstagramEs: BlogPost = {
  slug: "post-instagram",
  title: "Un post de venta en Instagram: estructura y titular",
  date: "2021-12-07",
  category: "SMM",
  cover: "/images/blog/post-instagram/cover-es.webp",
  excerpt:
    "Cómo armar un post de venta en Instagram: oferta, USP, estructura del copy, titular, CTA y gestión de comentarios.",
  lead: [
    "Un post de venta es copy más visuales sobre un producto o servicio concreto con un beneficio claro y una llamada a la acción. No es un «párrafo bonito» — es un paso en el diálogo con el comprador.",
    "Abajo: audiencia, posicionamiento, marco de copy y manejo de negatividad. La UI de Instagram cambia — la lógica del copy importa más que screenshots de botones.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un post de venta de uno de valor?",
      a: "Un post de valor enseña o entretiene. Uno de venta lleva a una acción: lead, compra, clic, reserva. En el feed las ventas suelen ser minoría — ver el plan de contenido.",
    },
    {
      q: "¿Hacen falta keywords en la primera línea?",
      a: "Sentido y beneficio ganan a la densidad de consultas. Una keyword está bien si suena humana; si no, la primera línea aleja a la gente.",
    },
    {
      q: "¿Cuánto texto de caption es normal?",
      a: "El suficiente para manejar una objeción y dar un CTA. Los posts largos funcionan si hay aire, listas y un gancho fuerte en el preview.",
    },
    {
      q: "¿Debo borrar comentarios negativos?",
      a: "Borrar críticas en masa mata la confianza. Lleva la discusión a DMs; spam e insultos — según reglas de moderación.",
    },
    {
      q: "¿Basta un post fuerte?",
      a: "No. Hacen falta ritmo, calentamiento y packaging del perfil. Un post es un test de hipótesis, no todo el embudo.",
    },
  ],
  sections: [
    {
      title: "Qué es un post de venta",
      level: 2,
      paras: [
        "Es una publicación que captura atención, describe con claridad la oferta y empuja un paso: mensaje, clic, comprar, reservar.",
        "Un post fuerte destaca en el feed, da en una necesidad de la audiencia y no esconde el siguiente paso.",
      ],
      lists: [
        {
          intro: "Señales de un post que funciona:",
          items: [
            "visual y primera línea notables",
            "un producto / servicio / oferta concretos",
            "beneficios, no solo «specs»",
            "un CTA claro",
          ],
        },
      ],
    },
    {
      title: "Objetivo y qué escribir",
      level: 2,
      paras: [
        "El objetivo son leads y ventas, no «likes por los likes». El copy es una herramienta precisa: features, beneficios, diferencia frente a análogos.",
      ],
      lists: [
        {
          intro: "El texto suele incluir:",
          items: [
            "features clave",
            "beneficios para el cliente",
            "opciones / formatos de oferta",
            "prueba (cifras, caso, garantía) — cuando sea posible",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Pregúntate: «¿Por qué comprar con nosotros y no con el vecino?» Esa respuesta es el núcleo del post.",
        },
      ],
    },
    {
      title: "Audiencia y competidores",
      level: 2,
      paras: [
        "Sin un retrato de audiencia el post se escribe «para todos» y no engancha a nadie. Género, edad, ciudad, ingresos, actividades, dolores — el marco básico.",
        "Mira a competidores: temas, tono, qué obtiene respuesta. Copiar sus textos está fuera — la plataforma y la audiencia lo notan. Toma sentidos y reempaqueta para tu oferta.",
      ],
    },
    {
      title: "Posicionamiento y USP",
      level: 2,
      paras: [
        "El mismo producto vende mejor cuando la diferencia es clara: entrega, plazos, servicio, expertise, garantía, formato.",
        "Ejemplo: dos confiteros en una ciudad — no ganas con «más rico en palabras», sino con una ventaja clara (entrega, sorteo, lead time).",
      ],
      lists: [
        {
          intro: "Trabajos de posicionamiento en el post:",
          items: [
            "mostrar el beneficio",
            "diferenciarse de análogos",
            "calentar el interés en el siguiente paso",
          ],
        },
      ],
    },
    {
      title: "Titular y estructura del copy",
      level: 2,
      paras: [
        "La primera línea es el titular del feed. Sin gancho el post no se expande.",
      ],
      lists: [
        {
          intro: "Requisitos de la primera línea:",
          items: [
            "concisa y no banal",
            "oferta o dolor claros de inmediato",
            "una keyword — solo si suena natural",
          ],
        },
        {
          intro: "Marco del post:",
          items: [
            "intro — 2–3 frases, preguntas gancho",
            "cuerpo — features, beneficios, casos de uso, prueba suave",
            "cierre — un CTA claro (qué hacer y dónde)",
          ],
        },
        {
          intro: "Ejemplos de CTA:",
          items: [
            "«Escríbenos por DM la palabra … — te llamamos»",
            "«Reserva — enlace en bio / responde al operador»",
            "«Contactos en el perfil — di una hora conveniente»",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Volcar todo el punto en el intro y repetirlo en el medio. El intro es un lead-in; el valor vive en el cuerpo.",
        },
      ],
      links: [
        {
          label: "Plan de contenido de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
        {
          label: "Diseño de la página",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Comentarios y negatividad",
      level: 2,
      paras: [
        "La velocidad de respuesta importa: un lead caliente se va al competidor. Las cuentas activas necesitan a alguien dueño de DMs y comentarios.",
        "La negatividad se mueve mejor a mensajes privados y se maneja con calma. Spam y toxicidad — según reglas de moderación; limpiar críticas en masa «por imagen» no vale la pena.",
      ],
    },
  ],
};

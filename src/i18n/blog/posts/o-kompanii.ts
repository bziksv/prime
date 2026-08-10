import type { BlogPost } from "../../../data/blog";

/** EN overlay for o-kompanii — same structure as RU JSON. */
export const oKompaniiEn: BlogPost = {
  slug: "o-kompanii",
  title: "About the company: what to write and what to avoid",
  date: "2020-06-23",
  category: "Content marketing",
  cover: "/images/blog/o-kompanii/cover-en.webp",
  excerpt:
    "How to write an About page without a founder novel and empty “we’re the best”: facts, proof, tone for the audience — and when almost nobody reads the text.",
  lead: [
    "About pages often get a template: years on the market, a team of professionals, rapid growth. Clients care more about who you’re for and what proves the claims.",
    "Below: what to cut, what to keep, and why the page exists at all. Homepage copy is separate; here the focus is the brand section.",
  ],
  faq: [
    {
      q: "Do people actually read the About page?",
      a: "Less than services and reviews. Still useful for trust, legal details, B2B, and anyone checking the vendor before a deal.",
    },
    {
      q: "Do you need a long founding story?",
      a: "Usually no. Short context — since when and why — yes; kilometers of “three friends met…” — rarely.",
    },
    {
      q: "Should you publish the whole team’s photos?",
      a: "Optional, depends on brand culture. For e-com, product and service often matter more; for an agency or clinic, faces and expertise fit.",
    },
    {
      q: "Can I claim “best prices / delivery in an hour”?",
      a: "Only if you deliver. False promises hurt reviews and ad compliance.",
    },
    {
      q: "Is About a keyword-target page?",
      a: "Not the goal. Cover keywords with services and articles; About is trust and facts — not a keyword sheet.",
    },
    {
      q: "How is it different from the homepage?",
      a: "Homepage — offer and next steps. About — who you are, proof, values, contacts and legal details.",
    },
    {
      q: "Should case studies live on the About page?",
      a: "Briefly yes, or link to a cases section. Numbers without context (“+150% conversion”) read like fluff.",
    },
    {
      q: "How long should it be?",
      a: "As long as needed to answer audience doubts. Often one to three screens beat a novel.",
    },
  ],
  sections: [
    {
      title: "What not to do",
      level: 2,
      paras: [
        "A founding story sheet with no help for choosing you.",
        "Impossible promises and cheap “gift” pathos instead of a brand position.",
        "Template “why us”: professionals, innovation, personalized approach — with no facts.",
        "A CTA like “write articles for us / become a partner” instead of answering the client.",
      ],
    },
    {
      title: "What is useful to write",
      level: 2,
      paras: [
        "Who you serve and which job you solve — in the client’s language.",
        "Proof: years or geo if needed, certificates, cases with links, real numbers with explanation.",
        "How the service works: stages, guarantees, responsibility zones — what lowers deal fear.",
        "Legal details and contacts for B2B: entity, address, how to reach you.",
      ],
      lists: [
        {
          intro: "Match tone to the audience:",
          items: [
            "B2B — reliability, processes, cases",
            "mass service — clarity, prices or terms, reviews",
            "local business — geo, atmosphere, neighborhood specifics",
          ],
        },
      ],
      links: [
        {
          label: "Homepage copy",
          href: "/en/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "Homepage",
          href: "/en/blog/glavnaya-stranitsa/",
        },
      ],
    },
    {
      title: "When the page is required",
      level: 2,
      paras: [
        "Before an expensive deal the client checks the vendor.",
        "Transparency is expected (healthcare, finance, B2B tenders).",
        "You need a trust anchor next to reviews and cases — not “so we’re not worse than competitors.”",
      ],
      notes: [
        {
          title: "Trust priority",
          kind: "tip",
          text: "Reviews, cases, and clear service terms often convert better than a lyrical About. The page complements them — it doesn’t replace them.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Facts and help choosing beat biography.",
        "Promises = obligations.",
        "Tone and length follow the audience — not a 2015 “best About pages” template.",
      ],
    },
  ],
  closing: [
    "Open About and cut everything that doesn’t help answer “can I trust you with this order” — the text usually gets shorter and stronger right away.",
  ],
  related: [
    "tekst-glavnoy-stranitsy",
    "glavnaya-stranitsa",
    "tz-kopiraytera",
    "kopirayting",
    "otzyvy-dlya-prodazh",
    "korporativnyy-blog",
  ],
};

/** ES overlay for o-kompanii — same structure as RU JSON / EN. */
export const oKompaniiEs: BlogPost = {
  slug: "o-kompanii",
  title: "Sobre la empresa: qué escribir y qué evitar",
  date: "2020-06-23",
  category: "Content marketing",
  cover: "/images/blog/o-kompanii/cover-es.webp",
  excerpt:
    "Cómo escribir una página About sin novela del fundador y «somos los mejores» vacío: hechos, prueba, tono para la audiencia — y cuándo casi nadie lee el texto.",
  lead: [
    "Las páginas About a menudo reciben una plantilla: años en el mercado, un equipo de profesionales, crecimiento rápido. A los clientes les importa más para quién eres y qué prueba las afirmaciones.",
    "Abajo: qué cortar, qué conservar y por qué existe la página. El copy de homepage es aparte; aquí el foco es la sección de marca.",
  ],
  faq: [
    {
      q: "¿La gente de verdad lee la página About?",
      a: "Menos que servicios y reseñas. Aun así es útil para confianza, detalles legales, B2B y quien comprueba al proveedor antes de un deal.",
    },
    {
      q: "¿Hace falta una larga historia de fundación?",
      a: "Suele no. Contexto corto — desde cuándo y por qué — sí; kilómetros de «tres amigos se conocieron…» — rara vez.",
    },
    {
      q: "¿Debo publicar las fotos de todo el equipo?",
      a: "Opcional, depende de la cultura de marca. En e-com suelen importar más producto y servicio; en una agencia o clínica, caras y expertise encajan.",
    },
    {
      q: "¿Puedo afirmar «mejores precios / entrega en una hora»?",
      a: "Solo si lo cumples. Las promesas falsas dañan reseñas y el cumplimiento de ads.",
    },
    {
      q: "¿About es una página objetivo de keywords?",
      a: "No es el objetivo. Cubre keywords con servicios y artículos; About es confianza y hechos — no una hoja de keywords.",
    },
    {
      q: "¿En qué se diferencia de la homepage?",
      a: "Homepage — oferta y siguientes pasos. About — quién eres, prueba, valores, contactos y detalles legales.",
    },
    {
      q: "¿Los casos deberían vivir en About?",
      a: "En breve sí, o enlaza a una sección de casos. Números sin contexto («+150% de conversión») se leen como fluff.",
    },
    {
      q: "¿De qué longitud debería ser?",
      a: "La necesaria para responder las dudas de la audiencia. A menudo una a tres pantallas ganan a una novela.",
    },
  ],
  sections: [
    {
      title: "Qué no hacer",
      level: 2,
      paras: [
        "Una hoja de historia de fundación sin ayuda para elegirte.",
        "Promesas imposibles y pathos barato de «regalo» en lugar de una posición de marca.",
        "Plantilla de «por qué nosotros»: profesionales, innovación, enfoque personalizado — sin hechos.",
        "Un CTA tipo «escribe artículos para nosotros / sé partner» en lugar de responder al cliente.",
      ],
    },
    {
      title: "Qué es útil escribir",
      level: 2,
      paras: [
        "A quién sirves y qué trabajo resuelves — en el lenguaje del cliente.",
        "Prueba: años o geo si hace falta, certificados, casos con enlaces, números reales con explicación.",
        "Cómo funciona el servicio: etapas, garantías, zonas de responsabilidad — lo que baja el miedo al deal.",
        "Detalles legales y contactos para B2B: entidad, dirección, cómo contactarte.",
      ],
      lists: [
        {
          intro: "Cuadra el tono con la audiencia:",
          items: [
            "B2B — fiabilidad, procesos, casos",
            "servicio masivo — claridad, precios o términos, reseñas",
            "negocio local — geo, atmósfera, especificidades del barrio",
          ],
        },
      ],
      links: [
        {
          label: "Copy de homepage",
          href: "/es/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "Homepage",
          href: "/es/blog/glavnaya-stranitsa/",
        },
      ],
    },
    {
      title: "Cuándo la página es necesaria",
      level: 2,
      paras: [
        "Antes de un deal caro el cliente comprueba al proveedor.",
        "Se espera transparencia (salud, finanzas, licitaciones B2B).",
        "Necesitas un ancla de confianza junto a reseñas y casos — no «para no estar peor que los competidores».",
      ],
      notes: [
        {
          title: "Prioridad de confianza",
          kind: "tip",
          text: "Reseñas, casos y términos claros de servicio a menudo convierten mejor que un About lírico. La página los complementa — no los sustituye.",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Hechos y ayuda para elegir ganan a la biografía.",
        "Promesas = obligaciones.",
        "Tono y longitud siguen a la audiencia — no una plantilla de «mejores About» de 2015.",
      ],
    },
  ],
  closing: [
    "Abre About y corta todo lo que no ayude a responder «¿puedo confiarte este pedido?» — el texto suele quedar más corto y fuerte al instante.",
  ],
  related: [
    "tekst-glavnoy-stranitsy",
    "glavnaya-stranitsa",
    "tz-kopiraytera",
    "kopirayting",
    "otzyvy-dlya-prodazh",
    "formy-zahvata",
  ],
};

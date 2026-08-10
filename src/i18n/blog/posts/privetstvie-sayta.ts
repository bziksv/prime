import type { BlogPost } from "../../../data/blog";

/** EN overlay for privetstvie-sayta — same structure as RU JSON. */
export const privetstvieSaytaEn: BlogPost = {
  slug: "privetstvie-sayta",
  title: "Website greeting: how to welcome visitors without annoying them",
  date: "2021-08-10",
  category: "Digital marketing",
  cover: "/images/blog/privetstvie-sayta/cover-en.webp",
  excerpt:
    "How to shape the first contact on the homepage: hero copy, careful popups, and chat. What builds trust and conversion — and what pushes people away in seconds.",
  lead: [
    "The homepage is the site’s face: in the first seconds people decide to stay or leave. A greeting here isn’t necessarily “hello” — it’s a clear signal: who you are, who you help, and what to do next.",
    "Below: the first-screen text block, popups, and chat. Focus on benefit and tone; aggressive pop-unders and a chat one second after entry hurt more often than they help.",
  ],
  faq: [
    {
      q: "Must the homepage literally say “Hello”?",
      a: "No. A clear offer and audience matter more. A formal greeting with no substance is fluff. A working pattern: benefit + who you are + CTA.",
    },
    {
      q: "How is a greeting different from SEO copy?",
      a: "Greeting / hero is for a human here and now. SEO paragraphs lower down or on landings cover queries; don’t dump a keyword sheet into the first screen.",
    },
    {
      q: "Should chat open immediately?",
      a: "Usually no. A passive chat button is calmer. Auto-open fits selectively (promo, abandoned cart) with an easy close.",
    },
    {
      q: "Do I need keywords in the greeting?",
      a: "Meaningful words — yes; keyword spam in the hero — no. Keep linking and the keyword set in page structure, not in one “greeting” paragraph.",
    },
    {
      q: "How does the greeting tie to conversion?",
      a: "A clear first screen and calm UX are CRO hypotheses. See the separate conversion optimization article.",
    },
  ],
  sections: [
    {
      title: "Why greet on the homepage",
      level: 2,
      paras: [
        "The first screen sets expectations. If it’s unclear how the site helps, bounce rises — for ads and organic alike.",
        "A good greeting sparks interest, differentiates from competitors, and leads to action: catalog, request, call. A bad one praises the company with no facts or covers content with popups.",
      ],
      lists: [
        {
          intro: "What a clear first contact gives:",
          items: [
            "interest and trust",
            "clear benefits",
            "a next-step hint",
            "a tone that matches the niche (B2B drier, culture warmer, store toward purchase)",
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
      title: "Text greeting in the first screen",
      level: 2,
      paras: [
        "Classic — a hero block: headline, 1–2 sentences, CTA. Style for the audience: clinic — restrained; creative blog — warmer OK; store — toward choice and price.",
        "The pattern attention → interest → conviction → ask works. What doesn’t: fluff about “quality service,” a slogan with no meaning, owner biography instead of an offer.",
      ],
      lists: [
        {
          intro: "Signs of a strong block:",
          items: [
            "clear what the site is right away",
            "a concrete benefit or offer",
            "prices/timelines/facts when relevant",
            "one main action button",
            "no clichés or “high art” for beauty’s sake",
          ],
        },
        {
          intro: "What to avoid in the first paragraph:",
          items: [
            "a global mission with no product",
            "leadership hobbies",
            "copy-paste and empty slogans",
            "an SEO sheet layered over the hero",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "In ad and service copy, “you” is usually lowercase unless it starts a sentence. What matters is benefit and clarity — not an orthography ritual.",
        },
      ],
    },
    {
      title: "Pop-up windows",
      level: 2,
      paras: [
        "Pop-ups and especially pop-unders often annoy: they cover content, interrupt reading, hurt trust. If you use them — rarely, on a trigger (scroll, exit, cart), with a clear close and one idea in the window.",
        "Mass “We’re waiting for you!” one second after entry is a bad norm. Better strengthen the first screen and the lead form themselves.",
      ],
      lists: [
        {
          intro: "Mini rules if a popup is still needed:",
          items: [
            "one offer, not a banner carousel",
            "easy close",
            "no more than once per session",
            "not on every funnel step in a row",
          ],
        },
      ],
      links: [
        {
          label: "Feedback form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Greeting in chat",
      level: 2,
      paras: [
        "Live chat helps with quick questions. A passive button (“Message”) is usually friendlier than auto-open after 1 second with “have you chosen yet?”",
        "Active chat fits selectively: a promo, a complex B2B product, return to an abandoned cart — and only if an operator really replies fast.",
      ],
      lists: [
        {
          intro: "Chat tone:",
          items: [
            "greet and introduce yourself",
            "photo/name of a real consultant if you have one",
            "ask for a name without interrogation",
            "stay on point, no pressure",
            "offer to continue by email/messenger if they want",
            "say goodbye and leave a next step",
          ],
        },
      ],
    },
    {
      title: "Good-tone rules",
      level: 2,
      paras: [
        "One style across the site: homepage, cards, emails. First impression doesn’t repeat — one clear offer beats five shouting widgets.",
      ],
      lists: [
        {
          intro: "Short checklist before publish:",
          items: [
            "hero is clear without scrolling",
            "one CTA, and it’s visible",
            "popups don’t smother content",
            "chat doesn’t yell immediately",
            "no empty praise instead of facts",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for privetstvie-sayta — same structure as RU JSON / EN. */
export const privetstvieSaytaEs: BlogPost = {
  slug: "privetstvie-sayta",
  title: "Saludo del sitio: cómo recibir visitantes sin molestarlos",
  date: "2021-08-10",
  category: "Digital marketing",
  cover: "/images/blog/privetstvie-sayta/cover-es.webp",
  excerpt:
    "Cómo moldear el primer contacto en la home: copy del hero, popups con cuidado y chat. Qué construye confianza y conversión — y qué espanta en segundos.",
  lead: [
    "La home es la cara del sitio: en los primeros segundos la gente decide quedarse o irse. Un saludo aquí no es necesariamente «hola» — es una señal clara: quién eres, a quién ayudas y qué hacer después.",
    "Abajo: el bloque de texto de la primera pantalla, popups y chat. Enfócate en beneficio y tono; pop-unders agresivos y un chat un segundo tras entrar dañan más a menudo de lo que ayudan.",
  ],
  faq: [
    {
      q: "¿La home debe decir literalmente «Hola»?",
      a: "No. Importan más una oferta clara y la audiencia. Un saludo formal sin sustancia es fluff. Patrón que funciona: beneficio + quién eres + CTA.",
    },
    {
      q: "¿En qué se diferencia un saludo del copy SEO?",
      a: "El saludo / hero es para una persona aquí y ahora. Los párrafos SEO más abajo o en landings cubren queries; no vuelques una hoja de keywords en la primera pantalla.",
    },
    {
      q: "¿Debe abrirse el chat al momento?",
      a: "Suele no. Un botón de chat pasivo es más calmado. El auto-open encaja de forma selectiva (promo, carrito abandonado) con un cierre fácil.",
    },
    {
      q: "¿Hacen falta keywords en el saludo?",
      a: "Palabras con sentido — sí; spam de keywords en el hero — no. Deja el linking y el set de keywords en la estructura de la página, no en un solo párrafo de «saludo».",
    },
    {
      q: "¿Cómo se ata el saludo a la conversión?",
      a: "Una primera pantalla clara y un UX calmado son hipótesis de CRO. Ver el artículo aparte de optimización de conversión.",
    },
  ],
  sections: [
    {
      title: "Por qué saludar en la home",
      level: 2,
      paras: [
        "La primera pantalla fija expectativas. Si no está claro cómo ayuda el sitio, sube el bounce — tanto en ads como en orgánico.",
        "Un buen saludo despierta interés, diferencia de competidores y lleva a la acción: catálogo, solicitud, llamada. Uno malo alaba la empresa sin hechos o tapa el contenido con popups.",
      ],
      lists: [
        {
          intro: "Qué da un primer contacto claro:",
          items: [
            "interés y confianza",
            "beneficios claros",
            "una pista del siguiente paso",
            "un tono que encaja con el nicho (B2B más seco, cultura más cálida, tienda hacia la compra)",
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
      title: "Saludo en texto en la primera pantalla",
      level: 2,
      paras: [
        "Clásico — un bloque hero: titular, 1–2 frases, CTA. Estilo según la audiencia: clínica — contenido; blog creativo — más cálido OK; tienda — hacia elección y precio.",
        "El patrón atención → interés → convicción → pedir funciona. Lo que no: fluff sobre «servicio de calidad», un eslogan sin sentido, biografía del dueño en lugar de oferta.",
      ],
      lists: [
        {
          intro: "Señales de un bloque fuerte:",
          items: [
            "claro de qué va el sitio al momento",
            "un beneficio u oferta concreta",
            "precios/plazos/hechos cuando aporten",
            "un botón de acción principal",
            "sin clichés ni «alto arte» por belleza",
          ],
        },
        {
          intro: "Qué evitar en el primer párrafo:",
          items: [
            "una misión global sin producto",
            "hobbies del liderazgo",
            "copy-paste y eslóganes vacíos",
            "una hoja SEO encima del hero",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "En copy de ads y servicios, el «tú» suele ir en minúscula salvo que empiece frase. Lo que importa es beneficio y claridad — no un ritual de ortografía.",
        },
      ],
    },
    {
      title: "Ventanas pop-up",
      level: 2,
      paras: [
        "Los pop-ups y sobre todo los pop-unders a menudo molestan: tapan el contenido, interrumpen la lectura, dañan la confianza. Si los usas — poco, con un trigger (scroll, exit, carrito), con cierre claro y una idea en la ventana.",
        "Un «¡Te esperamos!» masivo un segundo tras entrar es una mala norma. Mejor reforzar la primera pantalla y el formulario de lead en sí.",
      ],
      lists: [
        {
          intro: "Mini reglas si aun así hace falta un popup:",
          items: [
            "una oferta, no un carrusel de banners",
            "cierre fácil",
            "no más de una vez por sesión",
            "no en cada paso del embudo seguido",
          ],
        },
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Saludo en el chat",
      level: 2,
      paras: [
        "El chat en vivo ayuda con preguntas rápidas. Un botón pasivo («Mensaje») suele ser más amable que el auto-open tras 1 segundo con «¿ya elegiste?».",
        "El chat activo encaja de forma selectiva: una promo, un producto B2B complejo, vuelta a un carrito abandonado — y solo si un operador responde de verdad rápido.",
      ],
      lists: [
        {
          intro: "Tono del chat:",
          items: [
            "saludar y presentarte",
            "foto/nombre de un consultor real si lo hay",
            "pedir el nombre sin interrogatorio",
            "ir al grano, sin presión",
            "ofrecer seguir por email/messenger si quieren",
            "despedirse y dejar un siguiente paso",
          ],
        },
      ],
    },
    {
      title: "Reglas de buen tono",
      level: 2,
      paras: [
        "Un estilo en todo el sitio: home, fichas, emails. La primera impresión no se repite — una oferta clara gana a cinco widgets que gritan.",
      ],
      lists: [
        {
          intro: "Checklist corto antes de publicar:",
          items: [
            "el hero se entiende sin scroll",
            "un CTA, y se ve",
            "los popups no ahogan el contenido",
            "el chat no grita al momento",
            "sin alabanzas vacías en lugar de hechos",
          ],
        },
      ],
    },
  ],
};

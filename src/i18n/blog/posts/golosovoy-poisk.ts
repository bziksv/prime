import type { BlogPost } from "../../../data/blog";

/** EN overlay for golosovoy-poisk — same structure as RU JSON. */
export const golosovoyPoiskEn: BlogPost = {
  slug: "golosovoy-poisk",
  title: "Optimizing a site for voice search",
  date: "2020-08-01",
  category: "SEO",
  cover: "/images/blog/golosovoy-poisk/cover-en.webp",
  excerpt:
    "How to prep a site for voice queries: conversational long-tail, FAQ and short answers, mobile speed, HTTPS, local search — without a cult of “separate SEO” or page-one guarantees.",
  lead: [
    "Voice search still runs on the same engines, but the query is often longer, more conversational, and more often from a phone: “pharmacy open near me,” “how to fix a kitchen faucet.” Assistants and quick answers favor clear fragments, FAQs, and pages that already work well in regular results.",
    "Below: what really affects visibility in voice scenarios, which query types to cover, and how to gather keywords and structure answers. Voice-traffic share figures in old roundups diverge — follow your audience and Search Console, not a magic percentage from a 2018 article. Page-one visibility for the keyword set is planned over months after prep — not a “voice SEO” button.",
  ],
  faq: [
    {
      q: "Do I need separate “voice SEO”?",
      a: "There’s no magic separate discipline. It’s stronger classic SEO: mobile, speed, conversational long-tail, FAQ, local profiles. Without a base in text results, voice answers almost never appear.",
    },
    {
      q: "Does a voice query always match the title?",
      a: "Rarely. Meaning often sits in the body, an H2, or FAQ. Don’t spawn thin duplicates for every pronunciation variant — one strong page per cluster is better.",
    },
    {
      q: "Is a 30-word short answer enough?",
      a: "A short direct answer near the start helps snippets/assistants, but the page must go deeper. One paragraph with no context rarely builds trust.",
    },
    {
      q: "Is Schema.org markup required for voice?",
      a: "Not a guarantee of a voice answer, but FAQ/HowTo/LocalBusiness and correct markup help systems read structure. Add it where the page warrants it — not “every type at once.”",
    },
    {
      q: "What matters more — links or speed?",
      a: "For voice scenarios, speed and a relevant answer are critical. Link profile still builds site authority overall, but one “exact answer” can beat a more linked URL.",
    },
    {
      q: "How do voice search and local business connect?",
      a: "“Near me”, “open now”, “address” pull maps and profiles. Keep Google Business Profile / Yandex Business, NAP consistency, and city landings current.",
    },
    {
      q: "Will I get into a voice answer in a week?",
      a: "Not as a promise. First prep pages and tech; rankings and featured answers grow month to month. The planned horizon for the keyword set is usually 2–6 months after work starts.",
    },
    {
      q: "How is this different from a normal site FAQ?",
      a: "Same format, but with wording closer to spoken language and one question per block. FAQ helps people and assistants; don’t turn it into a keyword dump.",
    },
  ],
  sections: [
    {
      title: "What changes in voice queries",
      level: 2,
      paras: [
        "People dictate full phrases: question words, place, context. Frequency of those tails is lower; competition differs from short head terms. Some scenarios end with one assistant answer and no click — so page value is accuracy and trust, not only chasing a session.",
        "Studies like Backlinko-style voice sample breakdowns are useful as factor guidance (speed, HTTPS, overlap with strong classic rankings), not a “do this → you’re in” checklist. Assistant UIs change; check your URLs in Search Console and on real devices.",
      ],
      lists: [
        {
          intro: "Typical voice-query traits:",
          items: [
            "longer than the typed analogue",
            "more often a question or how/where/when",
            "more local context",
            "expectation of a short clear answer",
            "start from a mobile device",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Writing thin articles for every spoken variant of one meaning. Prefer a cluster and one strong page.",
        },
      ],
    },
    {
      title: "Foundation: speed, HTTPS, mobile",
      level: 2,
      paras: [
        "Voice scenarios don’t forgive heavy pages: the user already asked and wants an answer now. Compress images, cut blocking JS, set cache and server. For commerce, HTTPS is the norm, not optional.",
        "Mobile-first is the crawl standard. Responsive layout, large tap targets, readable text without horizontal scroll. Check key templates (article, category, product, contacts) — not only the homepage.",
      ],
      lists: [
        {
          intro: "Tech minimum for voice scenarios:",
          items: [
            "fast LCP/TTFB on mobile networks",
            "HTTPS sitewide",
            "responsive and readable",
            "stable URLs without extra redirects",
            "clear navigation to the answer",
          ],
        },
      ],
      links: [
        {
          label: "Page size and weight",
          href: "/en/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Content: long page and short answer",
      level: 2,
      paras: [
        "A strong combo: first paragraphs — a direct answer to the main question (short, on point), then depth, nuances, lists, tables. Useful for people and for systems that extract a fragment.",
        "Write plainly: less bureaucratese, more natural phrasing. Triggers like how/where/how much/best fit when you really answer — not when you stuff H2s with keywords.",
      ],
      lists: [
        {
          intro: "Structure that helps assistants:",
          items: [
            "H2/H3 as questions or clear topics",
            "lists and tables where that’s the answer",
            "FAQ with natural audience questions",
            "one cluster — one strong URL",
            "no synonym copy-paste on neighboring URLs",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "FAQ, snippets, and markup",
      level: 2,
      paras: [
        "FAQ on landings and in articles raises the chance of matching a spoken query. For a store — delivery, payment, warranty, product choice — not generic “what is SEO”.",
        "Featured snippets and assistant answers aren’t guaranteed. FAQPage/HowTo/Product/LocalBusiness markup helps machines — it isn’t a ticket to position zero. Don’t mark up what isn’t on the page.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "6–10 real audience questions",
            "short answer + “more detail” in the body",
            "valid JSON-LD without spam",
            "text and markup stay aligned",
            "rich-result checks in webmaster panels",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Gather questions from support and analytics/forms first, then write FAQ — not the other way around.",
        },
      ],
    },
    {
      title: "Semantics: long-tail and clusters",
      level: 2,
      paras: [
        "Collect low-frequency conversational phrasing: Keyword Planner/Wordstat, suggest, “related questions”, support logs. Group into clusters and map to strong existing URLs or create one new page per cluster — see the keyword set playbook.",
        "Don’t expect exact title = voice query. Cover meaning and give a clear answer. Split commercial markers (buy/price/order) and informational (how/what means) by intent.",
      ],
      lists: [
        {
          intro: "Idea sources for voice tails:",
          items: [
            "search suggest and People Also Ask",
            "questions from chats and calls",
            "local city/district refinements",
            "comparisons and “what’s better”",
            "step-by-step how-tos",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Local search and business profiles",
      level: 2,
      paras: [
        "“Near me”, “address”, “hours” often go to maps. A Google Business Profile and Yandex Business listing, consistent NAP on the site, current phones and photos — required for offline services and locations.",
        "City landings should answer the local question, not be thin homepage clones. Link the profile to the site’s canonical URL.",
      ],
      lists: [
        {
          intro: "Local checklist:",
          items: [
            "up-to-date map profile",
            "matching name/address/phone",
            "hours without surprises",
            "reviews and replies without fake engagement",
            "local landings with real value, not spam",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "A joined-up approach and timelines",
      level: 2,
      paras: [
        "Voice visibility almost always inherits strong classic rankings: first tech and content for people, then FAQ and local reinforcement. Social signals and “virality” are a weak, unstable lever — don’t build strategy on reposts.",
        "Page and fix prep — weeks. Visibility for the keyword set grows month to month; a planned horizon for noticeable page-one presence on a cluster is usually 2–6 months after work starts. You can’t promise “voice rankings in a week”.",
      ],
      lists: [
        {
          intro: "Work order:",
          items: [
            "fix speed and mobile",
            "gather conversational clusters",
            "strengthen answers and FAQ on strong URLs",
            "add local coverage when needed",
            "monitor queries and CTR in Search Console / Webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep ≠ page one. Visibility for the keyword set builds over months after work starts.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "google-search-console",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
  ],
};

/** ES overlay for golosovoy-poisk — same structure as RU JSON / EN. */
export const golosovoyPoiskEs: BlogPost = {
  slug: "golosovoy-poisk",
  title: "Optimizar un sitio para búsqueda por voz",
  date: "2020-08-01",
  category: "SEO",
  cover: "/images/blog/golosovoy-poisk/cover.webp",
  excerpt:
    "Cómo preparar un sitio para queries de voz: long-tail conversacional, FAQ y respuestas cortas, velocidad móvil, HTTPS, búsqueda local — sin culto al «SEO aparte» ni garantías de primera página.",
  lead: [
    "La búsqueda por voz sigue corriendo en los mismos motores, pero la query suele ser más larga, más conversacional y más a menudo desde un teléfono: «farmacia abierta cerca», «cómo arreglar un grifo de cocina». Los assistants y las respuestas rápidas favorecen fragmentos claros, FAQs y páginas que ya funcionan bien en resultados normales.",
    "Abajo: qué afecta de verdad a la visibilidad en escenarios de voz, qué tipos de query cubrir y cómo reunir keywords y estructurar respuestas. Las cifras de cuota de tráfico de voz en roundups viejos divergen — sigue a tu audiencia y Search Console, no un porcentaje mágico de un artículo de 2018. La visibilidad en primera página del set de keywords se planifica a meses tras la prep — no un botón de «SEO de voz».",
  ],
  faq: [
    {
      q: "¿Hace falta un «SEO de voz» aparte?",
      a: "No hay una disciplina mágica aparte. Es SEO clásico más fuerte: móvil, velocidad, long-tail conversacional, FAQ, perfiles locales. Sin base en resultados de texto, las respuestas de voz casi no aparecen.",
    },
    {
      q: "¿Una query de voz siempre coincide con el title?",
      a: "Rara vez. El sentido a menudo está en el cuerpo, un H2 o el FAQ. No spawnees duplicados thin por cada variante de pronunciación — mejor una página fuerte por cluster.",
    },
    {
      q: "¿Basta una respuesta corta de 30 palabras?",
      a: "Una respuesta directa corta cerca del inicio ayuda a snippets/assistants, pero la página debe ir más profundo. Un párrafo sin contexto rara vez construye confianza.",
    },
    {
      q: "¿Es obligatorio el markup Schema.org para voz?",
      a: "No garantiza una respuesta de voz, pero FAQ/HowTo/LocalBusiness y un markup correcto ayudan a los sistemas a leer la estructura. Añádelo donde la página lo justifique — no «todos los tipos a la vez».",
    },
    {
      q: "¿Qué importa más — enlaces o velocidad?",
      a: "En escenarios de voz, velocidad y una respuesta relevante son críticos. El perfil de enlaces sigue construyendo autoridad del sitio en general, pero una «respuesta exacta» puede ganar a una URL más enlazada.",
    },
    {
      q: "¿Cómo se conectan búsqueda por voz y negocio local?",
      a: "«Cerca de mí», «abierto ahora», «dirección» tiran de mapas y perfiles. Mantén Google Business Profile / Yandex Business, coherencia NAP y landings de ciudad al día.",
    },
    {
      q: "¿Entraré en una respuesta de voz en una semana?",
      a: "No como promesa. Primero prep de páginas y tech; rankings y featured answers crecen mes a mes. El horizonte planificado para el set de keywords suele ser 2–6 meses tras el arranque del trabajo.",
    },
    {
      q: "¿En qué se diferencia de un FAQ normal del sitio?",
      a: "Mismo formato, pero con redacción más cercana al habla y una pregunta por bloque. El FAQ ayuda a personas y assistants; no lo conviertas en un dump de keywords.",
    },
  ],
  sections: [
    {
      title: "Qué cambia en las queries de voz",
      level: 2,
      paras: [
        "La gente dicta frases completas: palabras interrogativas, lugar, contexto. La frecuencia de esas colas es menor; la competencia difiere de los head cortos. Algunos escenarios terminan con una respuesta del assistant y sin clic — así que el valor de la página es precisión y confianza, no solo perseguir una sesión.",
        "Estudios tipo desglose de muestras de voz (estilo Backlinko) sirven como guía de factores (velocidad, HTTPS, solape con rankings clásicos fuertes), no como checklist de «haz esto → entras». Las UIs de assistants cambian; revisa tus URLs en Search Console y en dispositivos reales.",
      ],
      lists: [
        {
          intro: "Rasgos típicos de una query de voz:",
          items: [
            "más larga que el análogo escrito",
            "más a menudo una pregunta o cómo/dónde/cuándo",
            "más contexto local",
            "expectativa de una respuesta corta y clara",
            "arranque desde un dispositivo móvil",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Escribir artículos thin por cada variante hablada de un mismo sentido. Prefiere un cluster y una página fuerte.",
        },
      ],
    },
    {
      title: "Base: velocidad, HTTPS, móvil",
      level: 2,
      paras: [
        "Los escenarios de voz no perdonan páginas pesadas: el usuario ya preguntó y quiere respuesta ahora. Comprime imágenes, corta JS bloqueante, fija cache y servidor. En comercio, HTTPS es la norma, no opcional.",
        "Mobile-first es el estándar de crawl. Layout responsive, áreas de toque grandes, texto legible sin scroll horizontal. Revisa plantillas clave (artículo, categoría, producto, contactos) — no solo la home.",
      ],
      lists: [
        {
          intro: "Mínimo técnico para escenarios de voz:",
          items: [
            "LCP/TTFB rápidos en redes móviles",
            "HTTPS en todo el sitio",
            "responsive y legible",
            "URLs estables sin redirects de más",
            "navegación clara hacia la respuesta",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño y peso de página",
          href: "/es/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Contenido: página larga y respuesta corta",
      level: 2,
      paras: [
        "Una combo fuerte: primeros párrafos — respuesta directa a la pregunta principal (corta, al punto), luego profundidad, matices, listas, tablas. Útil para personas y para sistemas que extraen un fragmento.",
        "Escribe en claro: menos burocracia, más phrasing natural. Triggers como cómo/dónde/cuánto/mejor encajan cuando de verdad respondes — no cuando rellenas H2s de keywords.",
      ],
      lists: [
        {
          intro: "Estructura que ayuda a los assistants:",
          items: [
            "H2/H3 como preguntas o temas claros",
            "listas y tablas donde esa sea la respuesta",
            "FAQ con preguntas naturales de la audiencia",
            "un cluster — una URL fuerte",
            "sin copy-paste de sinónimos en URLs vecinas",
          ],
        },
      ],
      links: [
        {
          label: "Optimización on-page",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "FAQ, snippets y markup",
      level: 2,
      paras: [
        "El FAQ en landings y artículos sube la chance de encajar con una query hablada. Para una tienda — envío, pago, garantía, elección de producto — no un genérico «qué es SEO».",
        "Featured snippets y respuestas de assistant no están garantizados. El markup FAQPage/HowTo/Product/LocalBusiness ayuda a las máquinas — no es un ticket a posición cero. No marques lo que no está en la página.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "6–10 preguntas reales de la audiencia",
            "respuesta corta + «más detalle» en el cuerpo",
            "JSON-LD válido sin spam",
            "texto y markup alineados",
            "chequeos de rich results en paneles de webmaster",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Reúne preguntas de soporte y analytics/formularios primero, luego escribe el FAQ — no al revés.",
        },
      ],
    },
    {
      title: "Semántica: long-tail y clusters",
      level: 2,
      paras: [
        "Recoge phrasing conversacional de baja frecuencia: Keyword Planner/Wordstat, suggest, «preguntas relacionadas», logs de soporte. Agrupa en clusters y mapea a URLs fuertes existentes o crea una página nueva por cluster — ver el playbook del set de keywords.",
        "No esperes title exacto = query de voz. Cubre el sentido y da una respuesta clara. Separa marcadores comerciales (comprar/precio/pedir) e informativos (cómo/qué significa) por intención.",
      ],
      lists: [
        {
          intro: "Fuentes de ideas para colas de voz:",
          items: [
            "suggest de búsqueda y People Also Ask",
            "preguntas de chats y llamadas",
            "refinamientos locales de ciudad/distrito",
            "comparaciones y «qué es mejor»",
            "how-tos paso a paso",
          ],
        },
      ],
      links: [
        {
          label: "Set de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de queries",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Búsqueda local y perfiles de negocio",
      level: 2,
      paras: [
        "«Cerca de mí», «dirección», «horario» a menudo van a mapas. Un Google Business Profile y una ficha Yandex Business, NAP coherente en el sitio, teléfonos y fotos actuales — obligatorios para servicios offline y locales.",
        "Las landings de ciudad deben responder a la pregunta local, no ser clones thin de la home. Enlaza el perfil a la URL canónica del sitio.",
      ],
      lists: [
        {
          intro: "Checklist local:",
          items: [
            "perfil de mapa al día",
            "nombre/dirección/teléfono coincidentes",
            "horario sin sorpresas",
            "reseñas y respuestas sin fake engagement",
            "landings locales con valor real, no spam",
          ],
        },
      ],
      links: [
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Un enfoque unido y plazos",
      level: 2,
      paras: [
        "La visibilidad de voz casi siempre hereda rankings clásicos fuertes: primero tech y contenido para personas, luego FAQ y refuerzo local. Señales sociales y «viralidad» son un lever débil e inestable — no armes estrategia sobre reposts.",
        "Prep de páginas y fixes — semanas. La visibilidad del set de keywords crece mes a mes; un horizonte planificado para presencia notable en primera página de un cluster suele ser 2–6 meses tras el arranque del trabajo. No puedes prometer «rankings de voz en una semana».",
      ],
      lists: [
        {
          intro: "Orden de trabajo:",
          items: [
            "arreglar velocidad y móvil",
            "reunir clusters conversacionales",
            "reforzar respuestas y FAQ en URLs fuertes",
            "añadir cobertura local cuando haga falta",
            "monitorizar queries y CTR en Search Console / Webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Prep ≠ primera página. La visibilidad del set de keywords se construye a meses tras el arranque del trabajo.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "google-search-console",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
  ],
};

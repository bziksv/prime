import type { BlogPost } from "../../../data/blog";

/** EN overlay for tekst-lendinga — same structure as RU JSON. */
export const tekstLendingaEn: BlogPost = {
  slug: "tekst-lendinga",
  title: "Landing page copy: structure, offer, and CTA",
  date: "2021-06-07",
  category: "Content marketing",
  cover: "/images/blog/tekst-lendinga/cover-en.webp",
  excerpt:
    "How to write landing page copy: offer, benefit blocks, proof, form, and CTA — without keyword stuffing in every alt and the myth of “keywords in the domain.”",
  lead: [
    "A landing works when it has one clear job: get a lead, book a consult, buy a product, or schedule a service. The copy should take the visitor from recognizing their situation to a safe next step.",
    "Below: landing structure, argumentation, the form, and SEO hygiene. What matters isn’t magic formulas, but a clear offer, proof, and mobile comfort.",
  ],
  faq: [
    {
      q: "How does a landing differ from a selling article?",
      a: "An article can teach. A landing focuses on one offer and a short path to the CTA.",
    },
    {
      q: "How many screens of copy do you need?",
      a: "As many as it takes to clear objections. A cheap simple offer — shorter; expensive/complex — more proof.",
    },
    {
      q: "Are keywords in every alt and in the domain required?",
      a: "No. Alt is about accessibility and image meaning. The domain is brand and convenience, not a keyword sheet.",
    },
    {
      q: "How many form fields?",
      a: "The minimum for a lead: usually name + phone/email. Extra fields cut conversion.",
    },
    {
      q: "Do I need reviews?",
      a: "Yes if they’re real: cases, numbers, client logos, fuller stories. Fakes kill trust.",
    },
    {
      q: "Can all ad traffic go to one landing?",
      a: "Only if campaigns share the same demand and offer. Different segments and services usually need separate landings with a matching message.",
    },
    {
      q: "How do I know the copy hurts conversion?",
      a: "Watch session recordings, scroll depth, CTA clicks, and lead quality. Test one hypothesis at a time — don’t rewrite the whole screen at once.",
    },
  ],
  sections: [
    {
      title: "Offer and first screen",
      level: 2,
      paras: [
        "The first screen answers four questions: what’s offered, who it fits, what result the visitor gets, and what to do next. H1 doesn’t have to be a keyword pile: name the service and a concrete benefit in plain language.",
        "The subhead adds conditions, geography, format, or a limit that filters non-target demand. Nearby you need a clear CTA with an action: “Get an estimate,” “Get the program,” “Book a site visit” — not a vague “Learn more.”",
        "Don’t hide the key benefit behind company history or animation. On phone the visitor should grasp the offer and open the form without a long scroll.",
      ],
      lists: [
        {
          intro: "The first screen covers:",
          items: [
            "who you are and for whom",
            "the main benefit",
            "difference from alternatives",
            "the next step (button/form)",
          ],
        },
      ],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Build a persuasion path",
      level: 2,
      paras: [
        "Next the visitor needs answers to natural doubts: what’s included, how work runs, what it costs, who it fits, and why you’re trustworthy. Order blocks by decision logic, not by how staff usually tell the company story.",
        "For a simple purchase a short structure is enough. For an expensive service, construction, B2B, or medicine the path is longer: stages, limits, documents, cases, and a fuller FAQ help. Length alone doesn’t sell — each block should reduce a specific doubt.",
        "Short paragraphs, image captions, and bullet lists help scanning. A phone number in the header matters, but doesn’t replace a clear button or form for people who won’t call.",
      ],
      lists: [
        {
          intro: "Typical block order:",
          items: [
            "offer and main CTA",
            "result and client benefits",
            "service scope or product specs",
            "stages, timelines, and terms",
            "cases, reviews, guarantees, and documents",
            "FAQ and a repeated call to action",
          ],
        },
      ],
    },
    {
      title: "Write benefits without empty promises",
      level: 2,
      paras: [
        "“Quality and affordable” explains almost nothing — everyone writes that. Verifiable details work better: scope of work, manager response time, report format, industry experience, a price range with what drives it.",
        "Separate feature from benefit. Example: “engineer site visit” is a feature; “checks measurements before the contract so you don’t redo the project” is a benefit. Don’t promise a guaranteed outcome where it depends on outside factors or the client’s actions.",
        "Tone should match the audience. For a complex service — calm expertise and term explanations; for a clear product — more specifics on choice and delivery.",
      ],
      notes: [
        {
          title: "Check",
          kind: "tip",
          text: "Read each block and ask: “Which visitor worry disappears after this?” If there’s no answer, rewrite, shorten, or replace with proof.",
        },
      ],
    },
    {
      title: "Proof and objections",
      level: 2,
      paras: [
        "Trust comes from coherent details: real cases, clear legal details, process photos, reviews with context, certificates, and transparent terms. One logo without permission or an anonymous five-star review doesn’t add trust.",
        "Don’t paper over objections. If price is custom, explain the pricing inputs and offer a range. If there are region, timeline, or stock limits, state them before the form — you’ll get fewer empty leads.",
        "Place proof next to the claim. After promising fast delivery, show the terms; after experience — a relevant case; next to the form — what happens after submit.",
      ],
    },
    {
      title: "Form and CTA: cut friction",
      level: 2,
      paras: [
        "The form starts a conversation, not a full visitor dossier. Keep fields a manager needs to reply: usually name and a contact channel. A task question can be optional or moved to the next step.",
        "Under the button briefly say when and how you’ll reply. If you collect personal data, link the privacy policy and add a checkbox when required. Don’t replace consent with a pre-ticked box.",
        "CTAs repeat on a long page, but each matches context: after price — “Get a quote,” after the program — “Request a consult.” Several different actions on one screen dilute focus.",
      ],
      lists: [
        {
          intro: "Check before launch:",
          items: [
            "the form submits and shows a clear result",
            "phone and email are tappable on mobile",
            "the right person gets the notification",
            "analytics goals track submits and calls",
            "the page reads without horizontal scroll",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "SEO without stuffing",
      level: 2,
      paras: [
        "Before writing, gather queries with one intent: order, compare, calculate, or learn terms. One landing doesn’t have to cover every market phrasing — separate pages fit different services and segments better.",
        "Use audience language in Title, H1, subheads, and body naturally. Don’t repeat the exact keyword in every paragraph or replace useful copy with a city list. Alt describes the image for accessibility — it isn’t a keyword dump.",
        "For a local service state the real region, contacts, address, and visit terms. Connect analytics goals so you measure not only visits but form submits, calls, and lead quality.",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "one main intent per URL",
            "Title/Description by the offer",
            "a fast mobile page",
            "honest reviews and legal details when needed",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Validate the page after launch",
      level: 2,
      paras: [
        "Launch starts the check, it isn’t the finish line. First confirm the form, telephony, goals, privacy policy, and mobile version work. Then collect managers’ first questions — they often show which explanation the page lacks.",
        "Test one hypothesis at a time: first-screen clarity, block order, button text, proof, or field count. Compare changes on enough traffic and watch not only conversion but the share of qualified leads.",
        "Revisit the landing when product, prices, season, or audience change. Regular honest updates beat a yearly cosmetic redesign with no behavior analysis.",
      ],
    },
  ],
};

/** ES overlay for tekst-lendinga — same structure as RU JSON / EN. */
export const tekstLendingaEs: BlogPost = {
  slug: "tekst-lendinga",
  title: "Copy de landing: estructura, oferta y CTA",
  date: "2021-06-07",
  category: "Content marketing",
  cover: "/images/blog/tekst-lendinga/cover.webp",
  excerpt:
    "Cómo escribir copy de landing: oferta, bloques de beneficio, prueba, formulario y CTA — sin keyword stuffing en cada alt ni el mito de las «keywords en el dominio».",
  lead: [
    "Un landing funciona cuando tiene un trabajo claro: conseguir un lead, reservar una consulta, comprar un producto o programar un servicio. El copy debe llevar al visitante de reconocer su situación a un siguiente paso seguro.",
    "Abajo: estructura del landing, argumentación, formulario e higiene SEO. No importan fórmulas mágicas, sino una oferta clara, prueba y comodidad en móvil.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un landing de un artículo de venta?",
      a: "Un artículo puede enseñar. Un landing se centra en una oferta y un camino corto al CTA.",
    },
    {
      q: "¿Cuántas pantallas de copy hacen falta?",
      a: "Las que haga falta para despejar objeciones. Oferta barata y simple — más corto; cara/compleja — más prueba.",
    },
    {
      q: "¿Hacen falta keywords en cada alt y en el dominio?",
      a: "No. El alt va de accesibilidad y sentido de la imagen. El dominio es marca y comodidad, no una hoja de keywords.",
    },
    {
      q: "¿Cuántos campos en el formulario?",
      a: "El mínimo para un lead: suele ser nombre + teléfono/email. Campos de más cortan la conversión.",
    },
    {
      q: "¿Hacen falta reseñas?",
      a: "Sí si son reales: casos, cifras, logos de clientes, historias más completas. Las falsas matan la confianza.",
    },
    {
      q: "¿Puede todo el tráfico de ads ir a un solo landing?",
      a: "Solo si las campañas comparten la misma demanda y oferta. Segmentos y servicios distintos suelen necesitar landings aparte con un mensaje que encaje.",
    },
    {
      q: "¿Cómo sé que el copy duele a la conversión?",
      a: "Mira grabaciones de sesión, profundidad de scroll, clics en CTA y calidad de leads. Prueba una hipótesis a la vez — no reescribas toda la pantalla de golpe.",
    },
  ],
  sections: [
    {
      title: "Oferta y primer pantallazo",
      level: 2,
      paras: [
        "El primer pantallazo responde cuatro preguntas: qué se ofrece, a quién encaja, qué resultado obtiene el visitante y qué hacer después. El H1 no tiene que ser un montón de keywords: nombra el servicio y un beneficio concreto en lenguaje claro.",
        "El subhead añade condiciones, geografía, formato o un límite que filtra demanda no objetivo. Cerca hace falta un CTA claro con acción: «Pedir presupuesto», «Pedir el programa», «Reservar visita» — no un vago «Saber más».",
        "No escondas el beneficio clave detrás de la historia de la empresa o de una animación. En el teléfono el visitante debe pillar la oferta y abrir el formulario sin un scroll largo.",
      ],
      lists: [
        {
          intro: "El primer pantallazo cubre:",
          items: [
            "quiénes sois y para quién",
            "el beneficio principal",
            "diferencia frente a alternativas",
            "el siguiente paso (botón/formulario)",
          ],
        },
      ],
      links: [
        {
          label: "Textos de venta",
          href: "/es/blog/prodayushchie-teksty/",
        },
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Construir un camino de persuasión",
      level: 2,
      paras: [
        "Después el visitante necesita respuestas a dudas naturales: qué incluye, cómo corre el trabajo, cuánto cuesta, a quién encaja y por qué confiar en vosotros. Ordena los bloques por lógica de decisión, no por cómo el equipo suele contar la historia de la empresa.",
        "Para una compra simple basta una estructura corta. Para un servicio caro, obra, B2B o medicina el camino es más largo: etapas, límites, documentos, casos y un FAQ más completo ayudan. La longitud sola no vende — cada bloque debe reducir una duda concreta.",
        "Párrafos cortos, pies de imagen y listas con viñetas ayudan al escaneo. Un teléfono en el header importa, pero no sustituye un botón o formulario claro para quien no va a llamar.",
      ],
      lists: [
        {
          intro: "Orden típico de bloques:",
          items: [
            "oferta y CTA principal",
            "resultado y beneficios del cliente",
            "alcance del servicio o specs del producto",
            "etapas, plazos y condiciones",
            "casos, reseñas, garantías y documentos",
            "FAQ y una llamada a la acción repetida",
          ],
        },
      ],
    },
    {
      title: "Escribir beneficios sin promesas vacías",
      level: 2,
      paras: [
        "«Calidad y asequible» casi no explica nada — eso lo escribe todo el mundo. Funcionan mejor detalles verificables: alcance del trabajo, tiempo de respuesta del manager, formato de informe, experiencia de sector, un rango de precio con qué lo mueve.",
        "Separa feature de beneficio. Ejemplo: «visita del ingeniero» es una feature; «comprueba medidas antes del contrato para que no rehagas el proyecto» es un beneficio. No prometas un resultado garantizado donde depende de factores externos o de las acciones del cliente.",
        "El tono debe encajar con la audiencia. Para un servicio complejo — expertise calmada y explicación de términos; para un producto claro — más concreción en elección y entrega.",
      ],
      notes: [
        {
          title: "Check",
          kind: "tip",
          text: "Lee cada bloque y pregunta: «¿Qué preocupación del visitante desaparece tras esto?». Si no hay respuesta, reescribe, acorta o sustituye por prueba.",
        },
      ],
    },
    {
      title: "Prueba y objeciones",
      level: 2,
      paras: [
        "La confianza viene de detalles coherentes: casos reales, datos legales claros, fotos de proceso, reseñas con contexto, certificados y condiciones transparentes. Un logo sin permiso o una reseña anónima de cinco estrellas no suman confianza.",
        "No tapes las objeciones. Si el precio es a medida, explica los inputs de pricing y ofrece un rango. Si hay límites de región, plazo o stock, dilo antes del formulario — tendrás menos leads vacíos.",
        "Coloca la prueba junto a la afirmación. Tras prometer entrega rápida, muestra las condiciones; tras la experiencia — un caso relevante; junto al formulario — qué pasa tras enviar.",
      ],
    },
    {
      title: "Formulario y CTA: quita fricción",
      level: 2,
      paras: [
        "El formulario arranca una conversación, no un dossier completo del visitante. Quédate con los campos que un manager necesita para responder: suele ser nombre y un canal de contacto. La pregunta de tarea puede ser opcional o pasar al siguiente paso.",
        "Bajo el botón di en breve cuándo y cómo responderéis. Si recoges datos personales, enlaza la política de privacidad y añade un checkbox cuando toque. No sustituyas el consentimiento con una casilla premarcada.",
        "Los CTA se repiten en una página larga, pero cada uno encaja con el contexto: tras el precio — «Pedir presupuesto», tras el programa — «Pedir consulta». Varias acciones distintas en una pantalla diluyen el foco.",
      ],
      lists: [
        {
          intro: "Revisa antes del lanzamiento:",
          items: [
            "el formulario envía y muestra un resultado claro",
            "teléfono y email son tocables en móvil",
            "la persona correcta recibe la notificación",
            "los goals de analytics rastrean envíos y llamadas",
            "la página se lee sin scroll horizontal",
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
      title: "SEO sin stuffing",
      level: 2,
      paras: [
        "Antes de escribir, junta consultas con un solo intent: pedir, comparar, calcular o aprender términos. Un landing no tiene que cubrir cada formulación del mercado — páginas aparte encajan mejor con servicios y segmentos distintos.",
        "Usa el lenguaje de la audiencia en Title, H1, subheads y cuerpo de forma natural. No repitas la keyword exacta en cada párrafo ni sustituyas copy útil por una lista de ciudades. El alt describe la imagen para accesibilidad — no es un vertedero de keywords.",
        "Para un servicio local indica la región real, contactos, dirección y condiciones de visita. Conecta goals de analytics para medir no solo visitas sino envíos de formulario, llamadas y calidad de leads.",
      ],
      lists: [
        {
          intro: "Higiene:",
          items: [
            "un intent principal por URL",
            "Title/Description según la oferta",
            "una página móvil rápida",
            "reseñas honestas y datos legales cuando haga falta",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Validar la página tras el lanzamiento",
      level: 2,
      paras: [
        "El lanzamiento arranca la comprobación, no es la meta. Primero confirma que funcionan formulario, telefonía, goals, política de privacidad y versión móvil. Luego recoge las primeras preguntas de los managers — a menudo muestran qué explicación falta en la página.",
        "Prueba una hipótesis a la vez: claridad del primer pantallazo, orden de bloques, texto del botón, prueba o número de campos. Compara cambios con tráfico suficiente y mira no solo conversión sino la cuota de leads cualificados.",
        "Revisa el landing cuando cambien producto, precios, temporada o audiencia. Actualizaciones honestas y regulares ganan a un rediseño cosmético anual sin análisis de comportamiento.",
      ],
    },
  ],
};

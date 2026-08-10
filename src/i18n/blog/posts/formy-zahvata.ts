import type { BlogPost } from "../../../data/blog";

/** EN overlay for formy-zahvata — same structure as RU JSON. */
export const formyZahvataEn: BlogPost = {
  slug: "formy-zahvata",
  title: "Lead capture forms on a site: types, goals, and how not to annoy",
  date: "2019-09-17",
  category: "Digital marketing",
  cover: "/images/blog/formy-zahvata/cover-en.webp",
  excerpt:
    "Lead forms on a site: why they exist, closed/open/double layouts, signup, callback, calculator, and chat scenarios — with personal-data consent and without popup spam.",
  lead: [
    "Traffic without a contact often ends in “I’ll think and forget.” A capture form (lead form) collects consent and a way to reach someone so you can return with an offer — not hope for a random revisit.",
    "Below: form types, job-based scenarios, and rules so the module helps instead of annoying. The basic “question/lead” form is also in the feedback piece; here the focus is capturing a lead for different goals.",
  ],
  faq: [
    {
      q: "Is a capture form the same as a feedback form?",
      a: "Close. “Feedback” is more about a question/complaint. “Capture” is about getting a contact for nurture and sales. In practice it’s one module — goal and fields change.",
    },
    {
      q: "How many fields should I put?",
      a: "The minimum for the next step. For a callback a phone is often enough; an operator can clarify the name. Extra required fields cut conversion.",
    },
    {
      q: "Do I need an exit pop-up?",
      a: "Only if there’s real value (discount, checklist). Empty “wait!” annoys and raises bounce.",
    },
    {
      q: "Is personal-data consent required?",
      a: "Yes if you collect personal data. A checkbox/link to the policy isn’t decoration — it’s a process requirement.",
    },
    {
      q: "Does chat replace the form?",
      a: "It complements it. Chat is good for quick questions; the form logs a lead when no operator is available or you need a structured request.",
    },
    {
      q: "Where should leads go?",
      a: "Into CRM, or at least email/messenger with an owner. A form with no handling = lost leads.",
    },
  ],
  sections: [
    {
      title: "Why a lead form is needed",
      level: 2,
      paras: [
        "A site’s goal isn’t visits, it’s actions: lead, call, signup, quote. A form lowers the barrier: someone leaves a contact when they’re not ready to buy yet, and you can remind them legally and on purpose.",
        "Without a contact, “compare competitors” often means they simply forget you. With a contact and consent you get the right to follow up.",
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Closed, open, and double",
      level: 2,
      paras: [
        "Closed: fields appear after a button click (“Request a call,” “Get a price list”). Less noise on the page. Open: fields visible at once — handy on a landing with hot traffic. Double: offer + fields in one block — fits promos and limited deals.",
        "Choice depends on design, promo, audience maturity, and product. Hot demand tolerates an open form; cold informational traffic more often needs a button and a soft path.",
      ],
    },
    {
      title: "Scenarios by goal",
      level: 2,
      paras: [
        "Signup: email or push with regular content/sales — one field and clear value. Callback: phone and preferably a time slot; the team must actually call back. Consultation: briefly describe the question so you can route a specialist.",
        "Get a price: a short calculator/quiz instead of “leave a phone into the void.” Chat: quick questions with a live operator in business hours. Registration/login: minimal fields and password recovery. Exit-intent: only a strong offer — otherwise don’t add it.",
      ],
      lists: [
        {
          intro: "What to check in every scenario:",
          items: [
            "one main form goal",
            "clear button copy",
            "personal-data processing consent",
            "who answers the lead and how fast",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
      ],
    },
    {
      title: "How to make the form usable",
      level: 2,
      paras: [
        "The form helps the user choose and get in touch — not rip a phone at any cost. Don’t cover content with a swarm of popups. The button is readable, style matches the site, after submit — “thanks” and a real reply horizon.",
        "Say thank you: email, bonus, next step. Test that leads arrive. Pushiness hits bounce harder than under-collecting leads.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Fewer required fields + clear benefit usually convert better than a long “just in case” questionnaire.",
        },
      ],
      links: [
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
        {
          label: "Personal account",
          href: "/en/blog/lichnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "A working capture form matches the page goal, collects minimum data with consent, and feeds a live sales process. Make it easy for the person — and leads stop being a number in analytics with no call.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "optimizatsiya-konversii",
    "lending",
    "otkazy-sayta",
    "lichnyy-kabinet",
    "metriki-reklamy",
  ],
};

/** ES overlay for formy-zahvata — same structure as RU JSON / EN. */
export const formyZahvataEs: BlogPost = {
  slug: "formy-zahvata",
  title: "Formularios de captación en un sitio: tipos, objetivos y cómo no molestar",
  date: "2019-09-17",
  category: "Digital marketing",
  cover: "/images/blog/formy-zahvata/cover-es.webp",
  excerpt:
    "Formularios de leads en un sitio: para qué existen, layouts cerrados/abiertos/dobles, escenarios de alta, callback, calculadora y chat — con consentimiento de datos personales y sin spam de popups.",
  lead: [
    "El tráfico sin un contacto a menudo acaba en «lo pensaré y me olvido». Un formulario de captación (lead form) recoge consentimiento y una vía de contacto para volver con una oferta — no esperar una revisitación al azar.",
    "Abajo: tipos de formulario, escenarios por trabajo y reglas para que el módulo ayude en lugar de molestar. El formulario básico de «pregunta/lead» también está en la pieza de feedback; aquí el foco es captar un lead para distintos objetivos.",
  ],
  faq: [
    {
      q: "¿Un formulario de captación es lo mismo que uno de feedback?",
      a: "Cercanos. «Feedback» va más de pregunta/queja. «Captación» va de conseguir un contacto para nurture y ventas. En la práctica es un módulo — cambian el objetivo y los campos.",
    },
    {
      q: "¿Cuántos campos pongo?",
      a: "El mínimo para el siguiente paso. Para un callback a menudo basta el teléfono; el operador puede aclarar el nombre. Campos obligatorios de más cortan la conversión.",
    },
    {
      q: "¿Hace falta un pop-up de salida?",
      a: "Solo si hay valor real (descuento, checklist). Un «¡espera!» vacío molesta y sube el bounce.",
    },
    {
      q: "¿Es obligatorio el consentimiento de datos personales?",
      a: "Sí si recoges datos personales. Un checkbox/enlace a la política no es decoración — es un requisito de proceso.",
    },
    {
      q: "¿El chat sustituye al formulario?",
      a: "Lo complementa. El chat va bien para preguntas rápidas; el formulario registra un lead cuando no hay operador o necesitas una solicitud estructurada.",
    },
    {
      q: "¿Adónde deben ir los leads?",
      a: "A CRM, o al menos email/messenger con un responsable. Un formulario sin atención = leads perdidos.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta un lead form",
      level: 2,
      paras: [
        "El objetivo de un sitio no son las visitas, son las acciones: lead, llamada, alta, presupuesto. Un formulario baja la barrera: alguien deja un contacto cuando aún no está listo para comprar, y tú puedes recordarle de forma legal y a propósito.",
        "Sin contacto, «comparar competidores» a menudo significa que simplemente te olvidan. Con contacto y consentimiento tienes derecho a hacer follow-up.",
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Cerrado, abierto y doble",
      level: 2,
      paras: [
        "Cerrado: los campos aparecen tras un clic en el botón («Pedir llamada», «Pedir tarifa»). Menos ruido en la página. Abierto: campos visibles de golpe — útil en un landing con tráfico caliente. Doble: oferta + campos en un bloque — encaja con promos y ofertas limitadas.",
        "La elección depende del diseño, la promo, la madurez de la audiencia y el producto. La demanda caliente tolera un formulario abierto; el tráfico informativo frío suele necesitar un botón y un camino suave.",
      ],
    },
    {
      title: "Escenarios por objetivo",
      level: 2,
      paras: [
        "Alta: email o push con contenido/ventas regulares — un campo y valor claro. Callback: teléfono y preferible franja horaria; el equipo debe devolver la llamada de verdad. Consulta: describe en breve la pregunta para enrutar a un especialista.",
        "Pedir precio: una calculadora/quiz corta en lugar de «deja el teléfono al vacío». Chat: preguntas rápidas con operador en horario. Registro/login: campos mínimos y recuperación de contraseña. Exit-intent: solo una oferta fuerte — si no, no lo añadas.",
      ],
      lists: [
        {
          intro: "Qué revisar en cada escenario:",
          items: [
            "un objetivo principal del formulario",
            "copy claro del botón",
            "consentimiento de tratamiento de datos personales",
            "quién atiende el lead y con qué rapidez",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
      ],
    },
    {
      title: "Cómo hacer el formulario usable",
      level: 2,
      paras: [
        "El formulario ayuda al usuario a elegir y contactar — no a arrancar un teléfono a cualquier precio. No cubras el contenido con un enjambre de popups. El botón se lee, el estilo encaja con el sitio, tras enviar — «gracias» y un horizonte real de respuesta.",
        "Da las gracias: email, bonus, siguiente paso. Prueba que los leads llegan. La insistencia pega más al bounce que recolectar leads de menos.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Menos campos obligatorios + beneficio claro suelen convertir mejor que un cuestionario largo «por si acaso».",
        },
      ],
      links: [
        {
          label: "Tasa de rebote del sitio",
          href: "/es/blog/otkazy-sayta/",
        },
        {
          label: "Cuenta personal",
          href: "/blog/lichnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "Un formulario de captación que funciona encaja con el objetivo de la página, recoge el mínimo de datos con consentimiento y alimenta un proceso de ventas vivo. Hazlo fácil para la persona — y los leads dejan de ser un número en analytics sin llamada.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "optimizatsiya-konversii",
    "lending",
    "otkazy-sayta",
    "lichnyy-kabinet",
    "metriki-reklamy",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for pozdravlenie-klienta — same structure as RU JSON. */
export const pozdravlenieKlientaEn: BlogPost = {
  slug: "pozdravlenie-klienta",
  title: "How to wish a client happy birthday: email, SMS, and B2B",
  date: "2020-06-29",
  category: "Email marketing",
  cover: "/images/blog/pozdravlenie-klienta/cover-en.webp",
  excerpt:
    "How to write client birthday greetings: tone, personalization, email and SMS templates, a manager’s personal note, and B2B — without pushy ads.",
  lead: [
    "A client’s birthday is a chance to stay in touch without a hard sell. Template “Dear client!” lines and generator poetry annoy more often than they build loyalty.",
    "Below: four working scenarios — a company email, a manager’s personal message, a short SMS, and a partner-company greeting. Focus on tone and personalization, not a checkbox discount.",
  ],
  faq: [
    {
      q: "Do I need a discount in every greeting?",
      a: "No. Sometimes a warm text is enough. A promo code fits when it doesn’t drown the greeting or read like spam.",
    },
    {
      q: "Is a name in the subject and body required?",
      a: "Yes if the data is correct. A wrong name is worse than a generic greeting. Check the CRM before an auto-send.",
    },
    {
      q: "When should I send a greeting?",
      a: "On the birthday in the client’s convenient time zone, preferably morning. Being a week late kills the point.",
    },
    {
      q: "Should I use email or SMS?",
      a: "Email for longer copy. SMS/messenger for short notes if the client already talks to you there and you have message consent.",
    },
    {
      q: "Can I mass-send the same text?",
      a: "Technically yes; by effect — weak. Build blocks (intro / wish / closing) so combinations don’t repeat.",
    },
    {
      q: "What about personal data in greetings?",
      a: "A birth date is personal data. Store and use it under consent and company policy; don’t buy “birthday databases”.",
    },
    {
      q: "Is a poetry generator OK for business greetings?",
      a: "For business mail usually no: it sounds fake. Simple living language works better.",
    },
  ],
  sections: [
    {
      title: "Why greet — and where the line is",
      level: 2,
      paras: [
        "The goal is to show the client isn’t “a CRM row” and gently keep contact. A greeting doesn’t replace service and doesn’t fix a weak product.",
        "The line: don’t get overly familiar with a cold list, don’t push a purchase in every paragraph, don’t write to people who didn’t consent to mailings.",
      ],
      lists: [
        {
          intro: "Before an auto-send check:",
          items: [
            "consent and a current contact exist",
            "name and date are correct",
            "tone fits the niche (B2B ≠ kids’ store)",
            "email has an unsubscribe path",
          ],
        },
      ],
    },
    {
      title: "A letter from the company",
      level: 2,
      paras: [
        "A corporate greeting scales well. To avoid sounding like copy-paste, collect 8–12 variants per part and combine: intro, wish, closing.",
        "Use the name. “Dear client” instantly reads as a bot. Keep language simple; “high style” feels fake. Humor — carefully and on-brand.",
      ],
      lists: [
        {
          intro: "Email structure:",
          items: [
            "name and greeting in the first line",
            "1–2 warm, on-point wishes (success, rest, team)",
            "a short closing from the team / headcount",
            "optionally — a soft offer without pressure",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Tone example",
          text: "“Happy birthday, Anastasia! From our team — success in your work and more quiet weekends. May the day be spent with people who value you. The “… ” team, 12 people.”",
        },
      ],
    },
    {
      title: "A personal greeting from the manager",
      level: 2,
      paras: [
        "A personal note beats a template when it has specifics: a client strength, a shared work moment, a sincere wish. Without that it becomes a stub again.",
        "Simple algorithm: write why you value the person → recall a live collaboration moment → add a wish in your own words and a signature.",
      ],
      lists: [
        {
          intro: "What to add in a personal letter:",
          items: [
            "a concrete thank-you (not “for cooperation in general”)",
            "a project or conversation detail",
            "a wish without bureaucratic fluff",
            "sender name and role",
          ],
        },
      ],
    },
    {
      title: "SMS and short messages",
      level: 2,
      paras: [
        "SMS space is tight: name, greeting, one wish, brand sign-off. Long “may all dreams come true” lines and poetry almost always look templated.",
        "Write about this day, not an abstract “bright future”. If the channel is a messenger, the same brevity rules apply; don’t attach a heavy deck “as a gift”.",
      ],
      lists: [
        {
          intro: "Better not to:",
          items: [
            "poetry and generator rhymes",
            "a wall of wishes for every life case",
            "an aggressive discount with no context",
            "sending without SMS consent",
          ],
        },
      ],
    },
    {
      title: "B2B: company anniversary or decision-maker birthday",
      level: 2,
      paras: [
        "For a legal entity two tracks fit: a personal greeting for the decision-maker and a company anniversary note. In the second, show you know their product and service — not generic “success and prosperity”.",
        "Mention real collaboration: events, quality, deadlines. Owners prefer specifics over corporate clichés.",
      ],
      lists: [
        {
          intro: "In a B2B letter these work well:",
          items: [
            "name (and patronymic if that’s the local norm)",
            "a fact about their business (not invented)",
            "thanks for shared projects",
            "a development wish without lectures",
          ],
        },
      ],
    },
    {
      title: "Process in CRM and email tools",
      level: 2,
      paras: [
        "Automation helps you not forget dates. Automation without cleaning the base creates wrong names and “greetings” to churned clients.",
        "Set a segment “has date + consent + active client”, several text variants, and a human spot-check. For VIP — a manager task for a personal message, not only an email trigger.",
      ],
      lists: [
        {
          intro: "Mini process:",
          items: [
            "birth-date field in CRM",
            "consent for the channel",
            "trigger N hours before the date",
            "A/B or template rotation",
            "report: open/click without pushing a “sell on birthday” KPI",
          ],
        },
      ],
      links: [
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "A good greeting is on time, by name, and without fakeness. Scale comes from template blocks and CRM; warmth comes from specifics and living language — not poetry and an aggressive promo code.",
  ],
};

/** ES overlay for pozdravlenie-klienta — same structure as RU JSON / EN. */
export const pozdravlenieKlientaEs: BlogPost = {
  slug: "pozdravlenie-klienta",
  title: "Cómo felicitar el cumpleaños a un cliente: email, SMS y B2B",
  date: "2020-06-29",
  category: "Email marketing",
  cover: "/images/blog/pozdravlenie-klienta/cover.webp",
  excerpt:
    "Cómo escribir felicitaciones de cumpleaños a clientes: tono, personalización, plantillas de email y SMS, nota personal del manager y B2B — sin ads agresivos.",
  lead: [
    "El cumpleaños de un cliente es una oportunidad de mantener el contacto sin una venta dura. Líneas plantilla «¡Estimado cliente!» y poesía de generador molestan más a menudo de lo que construyen lealtad.",
    "Abajo: cuatro escenarios que funcionan — un email de la empresa, un mensaje personal del manager, un SMS corto y una felicitación a empresa partner. Foco en tono y personalización, no en un descuento de checkbox.",
  ],
  faq: [
    {
      q: "¿Hace falta un descuento en cada felicitación?",
      a: "No. A veces basta un texto cálido. Un código promo encaja cuando no ahoga la felicitación ni se lee como spam.",
    },
    {
      q: "¿Es obligatorio el nombre en el subject y el body?",
      a: "Sí si los datos son correctos. Un nombre equivocado es peor que una felicitación genérica. Revisa el CRM antes de un auto-envío.",
    },
    {
      q: "¿Cuándo enviar la felicitación?",
      a: "El día del cumpleaños en la zona horaria cómoda del cliente, preferible por la mañana. Llegar una semana tarde mata el sentido.",
    },
    {
      q: "¿Email o SMS?",
      a: "Email para copy más largo. SMS/mensajero para notas cortas si el cliente ya habla contigo ahí y tienes consentimiento de mensajes.",
    },
    {
      q: "¿Puedo enviar el mismo texto en masa?",
      a: "Técnicamente sí; por efecto — débil. Arma bloques (intro / deseo / cierre) para que las combinaciones no se repitan.",
    },
    {
      q: "¿Y los datos personales en las felicitaciones?",
      a: "La fecha de nacimiento es dato personal. Guárdala y úsala bajo consentimiento y política de la empresa; no compres «bases de cumpleaños».",
    },
    {
      q: "¿Un generador de poesía vale para felicitaciones de negocio?",
      a: "Para mail de negocio suele no: suena falso. Un lenguaje vivo y simple funciona mejor.",
    },
  ],
  sections: [
    {
      title: "Por qué felicitar — y dónde está la línea",
      level: 2,
      paras: [
        "El objetivo es mostrar que el cliente no es «una fila del CRM» y mantener el contacto con suavidad. Una felicitación no sustituye el servicio ni arregla un producto débil.",
        "La línea: no te pongas excesivamente familiar con una lista fría, no empujes una compra en cada párrafo, no escribas a quien no consintió mailings.",
      ],
      lists: [
        {
          intro: "Antes de un auto-envío revisa:",
          items: [
            "existen consentimiento y un contacto actual",
            "nombre y fecha son correctos",
            "el tono encaja con el nicho (B2B ≠ tienda infantil)",
            "el email tiene camino de baja",
          ],
        },
      ],
    },
    {
      title: "Una carta de la empresa",
      level: 2,
      paras: [
        "Una felicitación corporativa escala bien. Para no sonar a copy-paste, reúne 8–12 variantes por parte y combina: intro, deseo, cierre.",
        "Usa el nombre. «Estimado cliente» se lee al instante como bot. Mantén el lenguaje simple; el «estilo alto» se siente falso. Humor — con cuidado y on-brand.",
      ],
      lists: [
        {
          intro: "Estructura del email:",
          items: [
            "nombre y saludo en la primera línea",
            "1–2 deseos cálidos y al punto (éxito, descanso, equipo)",
            "un cierre corto del equipo / headcount",
            "opcional — una oferta suave sin presión",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Ejemplo de tono",
          text: "«¡Feliz cumpleaños, Ana! De nuestro equipo — éxito en el trabajo y más fines de semana tranquilos. Que el día sea con personas que te valoran. El equipo de «…», 12 personas.»",
        },
      ],
    },
    {
      title: "Una felicitación personal del manager",
      level: 2,
      paras: [
        "Una nota personal gana a una plantilla cuando hay concretos: una fortaleza del cliente, un momento compartido de trabajo, un deseo sincero. Sin eso vuelve a ser un stub.",
        "Algoritmo simple: escribe por qué valoras a la persona → recuerda un momento vivo de colaboración → añade un deseo con tus palabras y una firma.",
      ],
      lists: [
        {
          intro: "Qué añadir en una carta personal:",
          items: [
            "un agradecimiento concreto (no «por la cooperación en general»)",
            "un detalle del proyecto o de una conversación",
            "un deseo sin fluff burocrático",
            "nombre y rol del remitente",
          ],
        },
      ],
    },
    {
      title: "SMS y mensajes cortos",
      level: 2,
      paras: [
        "El espacio del SMS es estrecho: nombre, saludo, un deseo, firma de marca. Líneas largas de «que se cumplan todos los sueños» y poesía casi siempre se ven plantilla.",
        "Escribe sobre este día, no sobre un «futuro brillante» abstracto. Si el canal es un mensajero, valen las mismas reglas de brevedad; no adjuntas un deck pesado «como regalo».",
      ],
      lists: [
        {
          intro: "Mejor no:",
          items: [
            "poesía y rimas de generador",
            "un muro de deseos para cada caso de la vida",
            "un descuento agresivo sin contexto",
            "enviar sin consentimiento de SMS",
          ],
        },
      ],
    },
    {
      title: "B2B: aniversario de empresa o cumpleaños del decision-maker",
      level: 2,
      paras: [
        "Para una persona jurídica encajan dos vías: una felicitación personal al decision-maker y una nota de aniversario de la empresa. En la segunda, muestra que conoces su producto y servicio — no un genérico «éxito y prosperidad».",
        "Menciona colaboración real: eventos, calidad, plazos. Los dueños prefieren concretos a clichés corporativos.",
      ],
      lists: [
        {
          intro: "En una carta B2B funcionan bien:",
          items: [
            "nombre (y forma de trato local si aplica)",
            "un hecho sobre su negocio (no inventado)",
            "gracias por proyectos compartidos",
            "un deseo de desarrollo sin sermones",
          ],
        },
      ],
    },
    {
      title: "Proceso en CRM y tools de email",
      level: 2,
      paras: [
        "La automatización ayuda a no olvidar fechas. La automatización sin limpiar la base crea nombres equivocados y «felicitaciones» a clientes churned.",
        "Monta un segmento «tiene fecha + consentimiento + cliente activo», varias variantes de texto y un spot-check humano. Para VIP — una tarea al manager para un mensaje personal, no solo un trigger de email.",
      ],
      lists: [
        {
          intro: "Mini proceso:",
          items: [
            "campo de fecha de nacimiento en CRM",
            "consentimiento del canal",
            "trigger N horas antes de la fecha",
            "A/B o rotación de plantillas",
            "reporte: open/click sin empujar un KPI de «vender en el cumpleaños»",
          ],
        },
      ],
      links: [
        {
          label: "Reporting al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Una buena felicitación llega a tiempo, por nombre y sin falsedad. La escala viene de bloques de plantilla y CRM; el calor, de concretos y lenguaje vivo — no de poesía y un código promo agresivo.",
  ],
};

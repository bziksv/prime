import type { BlogPost } from "../../../data/blog";

/** EN overlay for forma-obratnoy-svyazi — same structure as RU JSON. */
export const formaObratnoySvyaziEn: BlogPost = {
  slug: "forma-obratnoy-svyazi",
  title: "Website feedback form: goals, fields, and placement rules",
  date: "2021-10-01",
  category: "Websites",
  cover: "/images/blog/forma-obratnoy-svyazi/cover-en.webp",
  excerpt:
    "Why you need a feedback form, which fields to use, where to place the block, how to fight spam, and how to raise the share of completed requests.",
  lead: [
    "A feedback form is a simple module: name, contact, request gist. In practice it drives leads, response speed, and trust in the site.",
    "Below: form goals, field structure, placement, antispam, and handling rules — with a focus on clear UX and message delivery, not another widget for the checklist.",
  ],
  faq: [
    {
      q: "Where’s the best place for the form?",
      a: "On Contacts, on a service card, and at the end of strong landings. On a landing — next to the offer. Duplicating a full form on every page usually adds noise.",
    },
    {
      q: "How many fields should the form have?",
      a: "The minimum for the job: name + phone or email + gist. Extra required fields cut conversion; details can wait until after first contact.",
    },
    {
      q: "Where do submissions go: email or CRM?",
      a: "Both work. More reliable: write to CMS/CRM + email/notification to the manager. Make sure mail doesn’t land in spam.",
    },
    {
      q: "Do I need a captcha?",
      a: "Yes if there’s spam. Modern bots beat simple image captchas — better honeypot, rate-limit, server checks, and current protection (including invisible captcha from a provider).",
    },
    {
      q: "What should I show after submit?",
      a: "A short confirmation and a real reply window (“we reply in business hours within N hours”). Promising “within an hour” without a process kills trust.",
    },
  ],
  sections: [
    {
      title: "Form goals and jobs",
      level: 2,
      paras: [
        "The form is a “visitor → team” channel. It doesn’t replace phone and messengers, but it logs the request in one place and lowers the barrier to reach out.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "questions, complaints, suggestions",
            "product or service requests",
            "callback",
            "contact capture for a list (with personal-data consent)",
            "lead qualification surveys (topic, budget, region)",
          ],
        },
      ],
    },
    {
      title: "How messages are delivered",
      level: 2,
      paras: [
        "Classic path: after submit, mail goes to the admin via hosting SMTP or a transactional service. Set SPF/DKIM/DMARC or leads die in spam.",
        "Second path — write to a CMS or CRM database: handy for shops, queues, and reports. CRM + notification is usually safer than email alone.",
      ],
      lists: [
        {
          intro: "Check at launch:",
          items: [
            "a test request reaches the inbox and/or CRM",
            "a backup channel (messenger/phone) exists if mail fails",
            "send errors are logged on the server",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Once a quarter send a test request from an external address. Half of “lost leads” are dead SMTP and a full inbox — not “bad traffic.”",
        },
      ],
    },
    {
      title: "Field structure",
      level: 2,
      paras: [
        "Mark required fields clearly. Validate in the browser and on the server. Name, contact, and request text are the base; phone for a call — only if you actually call.",
      ],
      lists: [
        {
          intro: "Common set:",
          items: [
            "name",
            "email and/or phone",
            "topic (dropdown)",
            "message / task description",
            "optional attachment (size and format limits)",
            "personal-data processing consent checkbox",
          ],
        },
      ],
      tables: [
        {
          caption: "Form type and field focus",
          headers: ["Scenario", "Minimum fields", "Don’t overcomplicate"],
          rows: [
            ["Callback", "Name + phone + convenient time", "A long essay"],
            ["Support question", "Contact + gist + page/order", "Ten required fields"],
            ["Service request", "Contact + service + city/deadline", "Full brief before first reply"],
          ],
        },
      ],
    },
    {
      title: "Where to place the block",
      level: 2,
      paras: [
        "A dedicated contacts page suits a full form. On commercial pages — a short “leave a request” block next to the offer.",
        "On a landing the form often sits in the first screen or right after the benefit. A full form in every footer rarely helps: better a compact “call me back” or a button to contacts.",
      ],
      lists: [
        {
          intro: "Working placements:",
          items: [
            "Contacts",
            "service and category cards",
            "end of a blog article with an offer",
            "landing — by the CTA",
            "modal on click (don’t pop aggressively on entry)",
          ],
        },
      ],
      links: [
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Spam protection",
      level: 2,
      paras: [
        "Captcha, honeypot field, per-IP rate limits, server checks on required fields — the base set. Old captcha scripts get bypassed; update protection with the CMS.",
      ],
      lists: [
        {
          intro: "Antispam minimum:",
          items: [
            "server checks, not only JS",
            "honeypot or invisible captcha",
            "submit rate limit",
            "filter links/stop-words in the message (carefully, avoid false positives)",
          ],
        },
      ],
    },
    {
      title: "How to raise completion rate",
      level: 2,
      paras: [
        "A short headline (“Leave a request” / “Ask a question”), a clear reply window, and a live contact nearby. After submit — a thank-you with expectations, not an empty “success.”",
      ],
      lists: [
        {
          intro: "What strengthens the form:",
          items: [
            "few required fields",
            "mobile layout and large inputs",
            "a reply-time promise you keep",
            "a backup channel (phone, messenger)",
            "a polite auto-reply and a real manager response",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Ignoring requests past the promised window. Interest was already there — silence hurts trust more than having no form.",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "A form works when it has a clear goal, short fields, a sensible place on the site, spam protection, and a reply process. Technically it’s HTML + server handling; in meaning — a dialogue promise the team must keep.",
      ],
    },
  ],
};

/** ES overlay for forma-obratnoy-svyazi — same structure as RU JSON / EN. */
export const formaObratnoySvyaziEs: BlogPost = {
  slug: "forma-obratnoy-svyazi",
  title: "Formulario de contacto del sitio: goals, campos y reglas de ubicación",
  date: "2021-10-01",
  category: "Websites",
  cover: "/images/blog/forma-obratnoy-svyazi/cover.webp",
  excerpt:
    "Para qué sirve un formulario de contacto, qué campos usar, dónde colocar el bloque, cómo combatir el spam y cómo subir la cuota de solicitudes completadas.",
  lead: [
    "Un formulario de contacto es un módulo simple: nombre, contacto, esencia de la solicitud. En la práctica mueve leads, velocidad de respuesta y confianza en el sitio.",
    "Abajo: goals del formulario, estructura de campos, ubicación, antispam y reglas de atención — con foco en UX clara y entrega del mensaje, no otro widget para el checklist.",
  ],
  faq: [
    {
      q: "¿Dónde queda mejor el formulario?",
      a: "En Contactos, en la ficha de servicio y al final de landings fuertes. En un landing — junto a la oferta. Duplicar un formulario completo en cada página suele añadir ruido.",
    },
    {
      q: "¿Cuántos campos debe tener el formulario?",
      a: "El mínimo para el trabajo: nombre + teléfono o email + esencia. Campos obligatorios de más cortan la conversión; los detalles pueden esperar tras el primer contacto.",
    },
    {
      q: "¿A dónde van los envíos: email o CRM?",
      a: "Ambos valen. Más fiable: escribir en CMS/CRM + email/notificación al manager. Asegura que el correo no caiga en spam.",
    },
    {
      q: "¿Hace falta captcha?",
      a: "Sí si hay spam. Los bots modernos vencen captchas de imagen simples — mejor honeypot, rate-limit, checks de servidor y protección actual (incluida captcha invisible de un proveedor).",
    },
    {
      q: "¿Qué muestro tras el envío?",
      a: "Una confirmación breve y una ventana de respuesta real («respondemos en horario laboral en N horas»). Prometer «en una hora» sin proceso mata la confianza.",
    },
  ],
  sections: [
    {
      title: "Goals y trabajos del formulario",
      level: 2,
      paras: [
        "El formulario es un canal «visitante → equipo». No sustituye teléfono y mensajeros, pero registra la solicitud en un solo sitio y baja la barrera para escribir.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "preguntas, quejas, sugerencias",
            "solicitudes de producto o servicio",
            "callback",
            "captura de contacto para una lista (con consentimiento de datos personales)",
            "encuestas de cualificación del lead (tema, presupuesto, región)",
          ],
        },
      ],
    },
    {
      title: "Cómo se entregan los mensajes",
      level: 2,
      paras: [
        "Camino clásico: tras el envío, el correo va al admin vía SMTP del hosting o un servicio transaccional. Configura SPF/DKIM/DMARC o los leads mueren en spam.",
        "Segundo camino — escribir en una base CMS o CRM: práctico para tiendas, colas e informes. CRM + notificación suele ser más seguro que solo email.",
      ],
      lists: [
        {
          intro: "Revisa al lanzar:",
          items: [
            "una solicitud de prueba llega al inbox y/o CRM",
            "existe un canal de respaldo (mensajero/teléfono) si falla el mail",
            "los errores de envío se registran en el servidor",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Una vez al trimestre envía una solicitud de prueba desde una dirección externa. La mitad de los «leads perdidos» son SMTP muerto e inbox lleno — no «tráfico malo».",
        },
      ],
    },
    {
      title: "Estructura de campos",
      level: 2,
      paras: [
        "Marca con claridad los campos obligatorios. Valida en el navegador y en el servidor. Nombre, contacto y texto de la solicitud son la base; teléfono para llamar — solo si de verdad llamas.",
      ],
      lists: [
        {
          intro: "Set habitual:",
          items: [
            "nombre",
            "email y/o teléfono",
            "tema (desplegable)",
            "mensaje / descripción de la tarea",
            "adjunto opcional (límites de tamaño y formato)",
            "checkbox de consentimiento al tratamiento de datos personales",
          ],
        },
      ],
      tables: [
        {
          caption: "Tipo de formulario y foco de campos",
          headers: ["Escenario", "Campos mínimos", "No compliques de más"],
          rows: [
            ["Callback", "Nombre + teléfono + hora conveniente", "Un ensayo largo"],
            ["Pregunta de soporte", "Contacto + esencia + página/pedido", "Diez campos obligatorios"],
            ["Solicitud de servicio", "Contacto + servicio + ciudad/plazo", "Brief completo antes de la primera respuesta"],
          ],
        },
      ],
    },
    {
      title: "Dónde colocar el bloque",
      level: 2,
      paras: [
        "Una página de contactos dedicada encaja con un formulario completo. En páginas comerciales — un bloque corto «deja una solicitud» junto a la oferta.",
        "En un landing el formulario suele ir en la primera pantalla o justo después del beneficio. Un formulario completo en cada footer rara vez ayuda: mejor un «llámame» compacto o un botón a contactos.",
      ],
      lists: [
        {
          intro: "Ubicaciones que funcionan:",
          items: [
            "Contactos",
            "fichas de servicio y categoría",
            "final de un artículo de blog con oferta",
            "landing — junto al CTA",
            "modal al clic (no pops agresivos al entrar)",
          ],
        },
      ],
      links: [
        {
          label: "Textos de venta",
          href: "/es/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Protección antispam",
      level: 2,
      paras: [
        "Captcha, campo honeypot, rate limits por IP, checks de servidor en campos obligatorios — el set base. Los scripts viejos de captcha se saltan; actualiza la protección con el CMS.",
      ],
      lists: [
        {
          intro: "Mínimo antispam:",
          items: [
            "checks de servidor, no solo JS",
            "honeypot o captcha invisible",
            "límite de tasa de envío",
            "filtrar enlaces/stop-words en el mensaje (con cuidado, evita falsos positivos)",
          ],
        },
      ],
    },
    {
      title: "Cómo subir la tasa de completado",
      level: 2,
      paras: [
        "Un titular corto («Deja una solicitud» / «Haz una pregunta»), una ventana de respuesta clara y un contacto vivo cerca. Tras el envío — un gracias con expectativas, no un «success» vacío.",
      ],
      lists: [
        {
          intro: "Qué refuerza el formulario:",
          items: [
            "pocos campos obligatorios",
            "layout móvil e inputs grandes",
            "una promesa de tiempo de respuesta que cumples",
            "un canal de respaldo (teléfono, mensajero)",
            "un auto-reply educado y una respuesta real del manager",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Ignorar solicitudes pasada la ventana prometida. El interés ya estaba — el silencio duele más a la confianza que no tener formulario.",
        },
      ],
    },
    {
      title: "Conclusión breve",
      level: 2,
      paras: [
        "Un formulario funciona cuando tiene un goal claro, campos cortos, un lugar sensato en el sitio, protección antispam y un proceso de respuesta. Técnicamente es HTML + manejo en servidor; en significado — una promesa de diálogo que el equipo debe cumplir.",
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for podderzhka-yandeks — same structure as RU JSON. */
export const podderzhkaYandeksEn: BlogPost = {
  slug: "podderzhka-yandeks",
  title: "How to contact Yandex support: Mail, Webmaster, and Help",
  date: "2020-06-25",
  category: "SEO",
  cover: "/images/blog/podderzhka-yandeks/cover-en.webp",
  excerpt:
    "When to write Yandex support, how to file Mail and Webmaster tickets, what to attach, and which jobs to fix yourself first — without waiting for a ranking button.",
  lead: [
    "Yandex support helps with ecosystem products: Mail, Webmaster, Direct, Metrica, and more. It is not a team that manually ranks you on page one: on ranking they usually give diagnostics and policy links — not a manual boost.",
    "Below: where to go (Help → form), what to write, typical webmaster cases (index, mirrors, migration), and how not to waste a ticket. UIs and phone numbers change — use the official “Write” buttons and chats in Yandex Help when you contact them.",
  ],
  faq: [
    {
      q: "Will support put the site on page one?",
      a: "No. They fix product issues, explain Webmaster statuses, and help with migration or security. Rankings come from site quality and time; growing a query core is often planned over 2–6 months after work starts.",
    },
    {
      q: "Who is Platon Shchukin in Yandex support?",
      a: "A historical “face” of Yandex support and help replies. Today it is more often a chatbot and forms; same idea — gather data and route to a human or an article.",
    },
    {
      q: "Should I search Help first or open a ticket right away?",
      a: "Search Help and product statuses first. Open a ticket when self-checks are exhausted and you have a reproducible case.",
    },
    {
      q: "Which phone number should I call?",
      a: "Numbers and hours change. Take the current contact only from Help for that service (Webmaster, Mail, Direct). Do not copy phones from old articles.",
    },
    {
      q: "What should I attach to a ticket?",
      a: "URL, problem start date, what you already tried, screenshots of errors or Webmaster reports, and browser and OS for UI bugs.",
    },
    {
      q: "Should I write about filters and “competitors colluded”?",
      a: "State facts: traffic drop from a date, Webmaster messages, what you changed on the site. Emotional theories without data do not speed the reply.",
    },
    {
      q: "Is Webmaster support separate?",
      a: "Yes — products have their own help tracks. For index and search messages, use Help or a form tied to Webmaster and a verified site.",
    },
    {
      q: "How long should I wait for a reply?",
      a: "Depends on queue and product. Do not duplicate one case with a stack of emails — that slows triage.",
    },
  ],
  sections: [
    {
      title: "When to write vs fix it yourself",
      level: 2,
      paras: [
        "A ticket fits a product bug, unclear account status, security, domain migration, or tool errors. “Not on page one” with no technical signals — audit and content first, not search support.",
        "Before writing: robots/sitemap, speed, status codes, Webmaster messages, Search Console if needed. If after self-check the picture is clear and you need a status interpretation — then contact them.",
      ],
      lists: [
        {
          intro: "Do yourself first:",
          items: [
            "200/301/404 on key URLs",
            "robots.txt and sitemap",
            "Webmaster reports (index, security)",
            "recent releases and CMS changes",
            "Yandex Help for your error",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Help, bot, and contact form",
      level: 2,
      paras: [
        "Entry point — Help for the right service: search by symptoms, then “Write” / chat. The bot gathers context; a human gets a structured case.",
        "Name the product, login (no password), URL, reproduction steps, screenshots. For browser diagnostics Yandex sometimes offers an environment check page — use it if the form asks.",
      ],
      lists: [
        {
          intro: "Ticket template:",
          items: [
            "what broke (one sentence)",
            "since when",
            "expected vs actual behavior",
            "what you already checked",
            "links and attachments",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Writing “the site isn’t ranking, do something” with no URL, dates, or account screenshots.",
        },
      ],
    },
    {
      title: "Yandex Mail support",
      level: 2,
      paras: [
        "Login, mail, spam, and filter issues — via Mail Help and the feedback form. Before a ticket, check password/2FA, another device, Spam folder, and blockers.",
        "Do not send passwords or email codes in open replies. Average reply time depends on load — check current Help, not 2020 articles.",
      ],
      lists: [
        {
          intro: "Before writing Mail support:",
          items: [
            "reset or verify access",
            "another device or network",
            "error screenshot",
            "sample message (no secrets)",
          ],
        },
      ],
    },
    {
      title: "Webmaster: index, mirrors, migration",
      level: 2,
      paras: [
        "For a site, verify ownership in Yandex Webmaster. Typical topics: indexing, security, region, preferred host, domain move, odd snippets. Check panel reports first — then the help form for that question branch.",
        "Domain migration: 301s, consistent HTTPS, update Webmaster/Search Console, sitemap. Support can guide the “Move site” tool — redirects and content are on you.",
      ],
      lists: [
        {
          intro: "Webmaster cases:",
          items: [
            "mass index drop with live 200s",
            "hack/malware messages",
            "gluing www/non-www mirrors",
            "domain migration",
            "crawl tool errors",
          ],
        },
      ],
      tables: [
        {
          caption: "Before a ticket vs in the ticket",
          headers: ["Situation", "First", "Then"],
          rows: [
            ["Weak index", "robots, codes, sitemap", "Form + report screenshots"],
            ["Rank drop", "Audit and demand logic", "Ticket only if a tool is broken"],
            ["New domain", "301s and canon", "Move tool + question"],
            ["Suspected hack", "Password reset, cleanup", "Security in Webmaster"],
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Phone and chat: current channels",
      level: 2,
      paras: [
        "Some products have phone or chat. Blog numbers go stale. Open service Help → support contacts. For Webmaster a written form with attachments is often better.",
        "Prep talking points before a call: URL, date, what you tried. Do not discuss passwords aloud in public; do not demand “put us on page one” — that is outside support’s role.",
      ],
      lists: [
        {
          intro: "Contact etiquette:",
          items: [
            "one ticket — one problem",
            "no spam of repeat emails",
            "polite and on point",
            "full description, no hiding your own site edits",
          ],
        },
      ],
    },
    {
      title: "What support won’t replace",
      level: 2,
      paras: [
        "Page quality, semantics, speed, commercial factors, and link profile will not be “fixed by a letter.” After the reply, implement recommendations and watch Webmaster.",
        "Expecting manual ranking is a common trap. Site prep takes weeks; visibility for the core builds month to month.",
      ],
      lists: [
        {
          intro: "After the reply:",
          items: [
            "do the steps from the email",
            "log the edit date",
            "recheck reports in a few days",
            "follow up once if needed",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A support reply is not page one. Prep is separate from ranking; growing a query core is often a 2–6 month horizon after work on the site.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "screaming-frog",
    "redirekt",
    "samostoyatelnoe-seo",
    "molodoy-sayt",
  ],
};

/** ES overlay for podderzhka-yandeks — same structure as RU JSON / EN. */
export const podderzhkaYandeksEs: BlogPost = {
  slug: "podderzhka-yandeks",
  title: "Cómo contactar el soporte de Yandex: Mail, Webmaster y Help",
  date: "2020-06-25",
  category: "SEO",
  cover: "/images/blog/podderzhka-yandeks/cover-es.webp",
  excerpt:
    "Cuándo escribir al soporte de Yandex, cómo abrir tickets de Mail y Webmaster, qué adjuntar y qué trabajos arreglar tú primero — sin esperar un botón de rankings.",
  lead: [
    "El soporte de Yandex ayuda con productos del ecosistema: Mail, Webmaster, Direct, Metrica y más. No es un equipo que te rankee a mano en primera página: sobre rankings suelen dar diagnóstico y enlaces a políticas — no un boost manual.",
    "Abajo: a dónde ir (Help → formulario), qué escribir, casos típicos de webmaster (índice, espejos, migración) y cómo no gastar un ticket. Las UIs y los teléfonos cambian — usa los botones oficiales «Escribir» y los chats en la Ayuda de Yandex cuando contactes.",
  ],
  faq: [
    {
      q: "¿El soporte pone el sitio en primera página?",
      a: "No. Arreglan problemas de producto, explican estados de Webmaster y ayudan con migración o seguridad. Los rankings vienen de la calidad del sitio y del tiempo; crecer un núcleo de consultas a menudo se planifica a 2–6 meses tras el arranque del trabajo.",
    },
    {
      q: "¿Quién es Platon Shchukin en el soporte de Yandex?",
      a: "Una «cara» histórica del soporte de Yandex y de las respuestas de ayuda. Hoy suele ser un chatbot y formularios; la misma idea — reunir datos y enrutar a un humano o a un artículo.",
    },
    {
      q: "¿Busco primero en Help o abro un ticket de inmediato?",
      a: "Busca primero en Help y en los estados del producto. Abre un ticket cuando los self-checks se agoten y tengas un caso reproducible.",
    },
    {
      q: "¿A qué teléfono llamar?",
      a: "Números y horarios cambian. Toma el contacto actual solo de Help de ese servicio (Webmaster, Mail, Direct). No copies teléfonos de artículos viejos.",
    },
    {
      q: "¿Qué adjuntar a un ticket?",
      a: "URL, fecha de inicio del problema, qué ya probaste, screenshots de errores o informes de Webmaster, y navegador y SO para bugs de UI.",
    },
    {
      q: "¿Escribir sobre filtros y «los competidores se pusieron de acuerdo»?",
      a: "Di hechos: caída de tráfico desde una fecha, mensajes de Webmaster, qué cambiaste en el sitio. Las teorías emocionales sin datos no aceleran la respuesta.",
    },
    {
      q: "¿El soporte de Webmaster es aparte?",
      a: "Sí — los productos tienen sus propias vías de ayuda. Para índice y mensajes de búsqueda, usa Help o un formulario ligado a Webmaster y a un sitio verificado.",
    },
    {
      q: "¿Cuánto esperar una respuesta?",
      a: "Depende de la cola y del producto. No dupliques un caso con una pila de emails — eso ralentiza el triage.",
    },
  ],
  sections: [
    {
      title: "Cuándo escribir vs arreglarlo tú",
      level: 2,
      paras: [
        "Un ticket encaja con un bug de producto, un estado de cuenta poco claro, seguridad, migración de dominio o errores de herramienta. «No estoy en primera página» sin señales técnicas — primero auditoría y contenido, no el soporte de búsqueda.",
        "Antes de escribir: robots/sitemap, velocidad, códigos de estado, mensajes de Webmaster, Search Console si hace falta. Si tras el self-check el cuadro está claro y necesitas interpretar un estado — entonces contacta.",
      ],
      lists: [
        {
          intro: "Haz tú primero:",
          items: [
            "200/301/404 en URLs clave",
            "robots.txt y sitemap",
            "informes de Webmaster (índice, seguridad)",
            "releases recientes y cambios de CMS",
            "Ayuda de Yandex para tu error",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Help, bot y formulario de contacto",
      level: 2,
      paras: [
        "Punto de entrada — Help del servicio correcto: busca por síntomas, luego «Escribir» / chat. El bot reúne contexto; un humano recibe un caso estructurado.",
        "Nombra el producto, login (sin contraseña), URL, pasos de reproducción, screenshots. Para diagnóstico de navegador Yandex a veces ofrece una página de check de entorno — úsala si el formulario lo pide.",
      ],
      lists: [
        {
          intro: "Plantilla de ticket:",
          items: [
            "qué se rompió (una frase)",
            "desde cuándo",
            "comportamiento esperado vs real",
            "qué ya revisaste",
            "enlaces y adjuntos",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Escribir «el sitio no rankea, haced algo» sin URL, fechas ni screenshots de la cuenta.",
        },
      ],
    },
    {
      title: "Soporte de Yandex Mail",
      level: 2,
      paras: [
        "Problemas de login, correo, spam y filtros — vía Mail Help y el formulario de feedback. Antes de un ticket, revisa contraseña/2FA, otro dispositivo, carpeta Spam y blockers.",
        "No envíes contraseñas ni códigos de email en respuestas abiertas. El tiempo medio de respuesta depende de la carga — mira Help actual, no artículos de 2020.",
      ],
      lists: [
        {
          intro: "Antes de escribir al soporte de Mail:",
          items: [
            "resetear o verificar el acceso",
            "otro dispositivo o red",
            "screenshot del error",
            "mensaje de muestra (sin secretos)",
          ],
        },
      ],
    },
    {
      title: "Webmaster: índice, espejos, migración",
      level: 2,
      paras: [
        "Para un sitio, verifica la propiedad en Yandex Webmaster. Temas típicos: indexación, seguridad, región, host preferido, mudanza de dominio, snippets raros. Revisa primero los informes del panel — luego el formulario de ayuda de esa rama de pregunta.",
        "Migración de dominio: 301s, HTTPS coherente, actualizar Webmaster/Search Console, sitemap. El soporte puede orientar la herramienta «Mover sitio» — redirects y contenido son tuyos.",
      ],
      lists: [
        {
          intro: "Casos de Webmaster:",
          items: [
            "caída masiva de índice con 200 vivos",
            "mensajes de hack/malware",
            "pegar espejos www/non-www",
            "migración de dominio",
            "errores de la herramienta de crawl",
          ],
        },
      ],
      tables: [
        {
          caption: "Antes del ticket vs en el ticket",
          headers: ["Situación", "Primero", "Luego"],
          rows: [
            ["Índice flojo", "robots, códigos, sitemap", "Formulario + screenshots de informes"],
            ["Caída de ranks", "Auditoría y lógica de demanda", "Ticket solo si una herramienta está rota"],
            ["Dominio nuevo", "301s y canon", "Herramienta Move + pregunta"],
            ["Sospecha de hack", "Reset de contraseñas, limpieza", "Seguridad en Webmaster"],
          ],
        },
      ],
      links: [
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Teléfono y chat: canales actuales",
      level: 2,
      paras: [
        "Algunos productos tienen teléfono o chat. Los números de blog se quedan viejos. Abre Help del servicio → contactos de soporte. Para Webmaster a menudo es mejor un formulario escrito con adjuntos.",
        "Prepara puntos de conversación antes de una llamada: URL, fecha, qué probaste. No hables contraseñas en voz alta en público; no exijas «ponednos en primera página» — eso está fuera del rol del soporte.",
      ],
      lists: [
        {
          intro: "Etiqueta de contacto:",
          items: [
            "un ticket — un problema",
            "sin spam de emails repetidos",
            "educado y al grano",
            "descripción completa, sin ocultar tus propias ediciones del sitio",
          ],
        },
      ],
    },
    {
      title: "Qué no sustituye el soporte",
      level: 2,
      paras: [
        "La calidad de la página, la semántica, la velocidad, los factores comerciales y el perfil de enlaces no se «arreglan con una carta». Tras la respuesta, aplica las recomendaciones y mira Webmaster.",
        "Esperar ranking manual es una trampa habitual. La preparación del sitio lleva semanas; la visibilidad del núcleo se construye de mes a mes.",
      ],
      lists: [
        {
          intro: "Tras la respuesta:",
          items: [
            "haz los pasos del email",
            "anota la fecha de la edición",
            "vuelve a revisar informes en unos días",
            "haz follow-up una vez si hace falta",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Sitio joven",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Una respuesta del soporte no es primera página. La preparación es aparte del ranking; crecer un núcleo de consultas a menudo es un horizonte de 2–6 meses tras el trabajo en el sitio.",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "screaming-frog",
    "redirekt",
    "samostoyatelnoe-seo",
    "molodoy-sayt",
  ],
};

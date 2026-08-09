import type { BlogPost } from "../../../data/blog";

/** EN overlay for lid — same structure as RU JSON. */
export const lidEn: BlogPost = {
  slug: "lid",
  title: "What a lead is: contact, quality, and the funnel",
  date: "2021-08-30",
  category: "Digital marketing",
  cover: "/images/blog/lid/cover-en.webp",
  excerpt:
    "A lead in marketing is a potential customer with a contact and interest: how it differs from audience and traffic, cold/warm/hot, capture channels, CPL, and why buying someone else’s lists is a mistake.",
  lead: [
    "A lead is a person or company that showed interest in the offer and left a way to connect: a form, a call, a chat, a signup with consent. Not a payment yet — but a reason for the next sales step.",
    "Below: definition, how warm the lead is, channels, and metrics. We don’t cover buying others’ contacts without consent: that’s a legal, reputation, and deal-quality risk.",
  ],
  faq: [
    {
      q: "Are a lead and a target audience the same?",
      a: "No. Audience is who could fit. A lead is who already responded and gave a contact (or another target action by your rules).",
    },
    {
      q: "How does a lead differ from traffic?",
      a: "Traffic is visits. A lead is a request/contact from those visits (or offline). You can have many clicks and zero leads.",
    },
    {
      q: "Is a phone number required?",
      a: "No. You set the criterion: phone, email, messenger account, demo booking. What matters is being able to continue the dialogue legally.",
    },
    {
      q: "What are MQL and SQL?",
      a: "Common labels: marketing qualified (MQL) — interest confirmed by marketing; sales qualified (SQL) — sales accepted it. Thresholds differ by company.",
    },
    {
      q: "What is CPL?",
      a: "Cost per lead: cost to acquire one lead. Watch it with quality (share of qualified, conversion to deal), or cheap junk beats an expensive order.",
    },
    {
      q: "Can I buy a lead list?",
      a: "Buying others’ contacts without consent is a legal and reputation risk, plus low conversion. Build your own list via opt-in forms and agreed channels.",
    },
    {
      q: "Is a cold lead useless?",
      a: "Not always: it needs more touches and content. Treating it as equal to a hot request with a budget is a planning error.",
    },
    {
      q: "Where should leads be logged?",
      a: "In a CRM or at least a sheet with an owner and status. A form with no handling = lost requests.",
    },
  ],
  sections: [
    {
      title: "Definition: what a lead is not",
      level: 2,
      paras: [
        "In marketing a lead is a potential customer with recorded interest and a contact. A passerby who took a flyer and left silently isn’t a lead yet: no data to continue the talk.",
        "A lead ≠ a paying customer. The deal can fall through; marketing and sales must qualify and move them through funnel stages.",
        "A lead ≠ a prize-hunt subscriber unless you agreed that counts as the target action. Otherwise reports show “leads” and the CRM has empty numbers.",
      ],
      notes: [
        {
          title: "Your company definition",
          text: "Write it down: which action counts as a lead (form, 30+ sec call, chat asking about price). Otherwise marketing and sales argue about the numbers.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Temperature: cold, warm, hot",
      level: 2,
      paras: [
        "Cold: contact exists, intent is weak or unclear — needs warming, education, need clarification.",
        "Warm: comparing options, asking concrete questions, hasn’t chosen yet. Cases, estimates, demos help.",
        "Hot: ready to move toward a purchase — terms, timeline, payment. Manager response speed is critical here.",
      ],
      lists: [
        {
          intro: "Don’t mix in one KPI:",
          items: [
            "a checklist signup",
            "a “call me about the project” request",
            "a repeat order from a regular client",
          ],
        },
      ],
      links: [
        {
          label: "Traffic exists, no leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
      ],
    },
    {
      title: "Capture channels (legal)",
      level: 2,
      paras: [
        "Site and landing: capture forms, callback, chat, quiz. Personal-data consent is part of the process, not decoration.",
        "Ads and content: search ads, social ads, SEO, email to people who opted in. Word of mouth and partnerships bring warmer inquiries when the product already resonates.",
        "Offline: exhibition with a form, QR to a form, a call after a visit — same logic of contact + consent.",
      ],
      lists: [
        {
          intro: "What not to use as a strategy:",
          items: [
            "scraping others’ emails/phones",
            "buying “lead lists” with no consent origin",
            "faking interest with boosted fake requests",
          ],
        },
      ],
      links: [
        {
          label: "Capture forms",
          href: "/en/blog/formy-zahvata/",
        },
        {
          label: "Callback",
          href: "/en/blog/obratnyy-zvonok/",
        },
      ],
    },
    {
      title: "Qualification and path to a deal",
      level: 2,
      paras: [
        "After landing in the CRM a lead is checked: budget, timeline, decision-maker, product fit. Some drop as unqualified — that’s normal, not a “marketing fail.”",
        "Marketing may hand off MQLs; sales accept SQLs. Without a shared dictionary reports lie.",
        "First-response speed on a hot lead often beats a perfect script: warm interest cools.",
      ],
      notes: [
        {
          title: "Quality over volume",
          text: "100 leads at CPL 50 with zero deals is worse than 15 leads at CPL 800 with five payments. Count the funnel to revenue.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Metrics: CPL, conversion, ROMI",
      level: 2,
      paras: [
        "CPL = channel spend / leads by your definition. Compare channels only with the same lead definition.",
        "Lead → deal conversion and average order value show quality. Without a CRM it’s guesswork.",
        "Marketing ROI / ROMI looks at money, not “pretty” requests. Process KPIs (leads, response speed) and cash payback are different levels.",
      ],
      links: [
        {
          label: "Marketing ROI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "How to find leads in practice",
      level: 2,
      paras: [
        "Offer and landing first: if visits exist but no requests — fix meaning and CTA, not only budget.",
        "Pick 1–2 channels for unit economics, set CRM handoff, assign an owner for response speed.",
        "Improve qualification with form fields and a script — not spam volume. Scale what produces qualified deals.",
      ],
      lists: [
        {
          intro: "Mini launch order:",
          items: [
            "lead definition on one page",
            "form/call with consent",
            "CRM + owner",
            "CPL and qualified share in the report",
            "no buying others’ lists",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A lead is interest + contact (or another target action), not an abstract “audience” and not a payment.",
        "Temperature, channel, and quality beat racing for cheap CPL.",
        "You build your own list through consent; other people’s contacts “in bulk” is a bad strategy.",
      ],
    },
  ],
  closing: [
    "Write your company’s lead definition, check that requests land in the CRM with an owner, and compare two channels not by “count” but by deals — then the term stops being a slide buzzword.",
  ],
  related: [
    "trafik-bez-lidov",
    "formy-zahvata",
    "obratnyy-zvonok",
    "roi-marketinga",
    "skvoznaya-analitika",
    "kviz-sayt",
  ],
};

/** ES overlay for lid — same structure as RU JSON / EN. */
export const lidEs: BlogPost = {
  slug: "lid",
  title: "Qué es un lead: contacto, calidad y el embudo",
  date: "2021-08-30",
  category: "Digital marketing",
  cover: "/images/blog/lid/cover.webp",
  excerpt:
    "Un lead en marketing es un cliente potencial con contacto e interés: en qué se diferencia de audiencia y tráfico, frío/tibio/caliente, canales de captación, CPL y por qué comprar listas ajenas es un error.",
  lead: [
    "Un lead es una persona o empresa que mostró interés en la oferta y dejó una forma de contactar: un formulario, una llamada, un chat, un alta con consentimiento. Aún no es un pago — pero sí un motivo para el siguiente paso comercial.",
    "Abajo: definición, qué tan tibio está el lead, canales y métricas. No cubrimos comprar contactos ajenos sin consentimiento: es riesgo legal, de reputación y de calidad de deals.",
  ],
  faq: [
    {
      q: "¿Un lead y una audiencia objetivo son lo mismo?",
      a: "No. La audiencia es quién podría encajar. Un lead es quien ya respondió y dio un contacto (u otra acción objetivo según tus reglas).",
    },
    {
      q: "¿En qué se diferencia un lead del tráfico?",
      a: "Tráfico son visitas. Un lead es una solicitud/contacto de esas visitas (o offline). Puedes tener muchos clics y cero leads.",
    },
    {
      q: "¿Hace falta un teléfono?",
      a: "No. Tú fijas el criterio: teléfono, email, cuenta de messenger, reserva de demo. Lo que importa es poder continuar el diálogo de forma legal.",
    },
    {
      q: "¿Qué son MQL y SQL?",
      a: "Etiquetas habituales: marketing qualified (MQL) — interés confirmado por marketing; sales qualified (SQL) — ventas lo aceptó. Los umbrales difieren por empresa.",
    },
    {
      q: "¿Qué es el CPL?",
      a: "Cost per lead: coste de adquirir un lead. Míralo con la calidad (cuota de cualificados, conversión a deal), o la basura barata gana a un pedido caro.",
    },
    {
      q: "¿Puedo comprar una lista de leads?",
      a: "Comprar contactos ajenos sin consentimiento es riesgo legal y de reputación, más baja conversión. Construye tu propia lista vía formularios opt-in y canales acordados.",
    },
    {
      q: "¿Un lead frío no sirve?",
      a: "No siempre: necesita más toques y contenido. Tratarlo igual que una solicitud caliente con presupuesto es un error de planning.",
    },
    {
      q: "¿Dónde deben registrarse los leads?",
      a: "En un CRM o al menos una hoja con dueño y estado. Un formulario sin manejo = solicitudes perdidas.",
    },
  ],
  sections: [
    {
      title: "Definición: qué no es un lead",
      level: 2,
      paras: [
        "En marketing un lead es un cliente potencial con interés registrado y un contacto. Un transeúnte que cogió un flyer y se fue en silencio aún no es lead: no hay datos para seguir la conversación.",
        "Un lead ≠ un cliente que paga. El deal puede caer; marketing y ventas deben cualificarlo y moverlo por las etapas del embudo.",
        "Un lead ≠ un suscriptor cazapremios salvo que acordasteis que eso cuenta como acción objetivo. Si no, los informes muestran «leads» y el CRM tiene números vacíos.",
      ],
      notes: [
        {
          title: "Definición de tu empresa",
          text: "Escríbela: qué acción cuenta como lead (formulario, llamada de 30+ s, chat preguntando por precio). Si no, marketing y ventas pelean por los números.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Temperatura: frío, tibio, caliente",
      level: 2,
      paras: [
        "Frío: hay contacto, la intención es débil o poco clara — hace falta calentar, educar, aclarar la necesidad.",
        "Tibio: compara opciones, hace preguntas concretas, aún no ha elegido. Ayudan casos, estimaciones, demos.",
        "Caliente: listo para avanzar hacia la compra — términos, plazos, pago. Aquí la velocidad de respuesta del manager es crítica.",
      ],
      lists: [
        {
          intro: "No mezcles en un solo KPI:",
          items: [
            "un alta a un checklist",
            "una solicitud «llámame por el proyecto»",
            "un pedido repetido de un cliente habitual",
          ],
        },
      ],
      links: [
        {
          label: "Hay tráfico, no hay leads",
          href: "/es/blog/trafik-bez-lidov/",
        },
      ],
    },
    {
      title: "Canales de captación (legales)",
      level: 2,
      paras: [
        "Sitio y landing: formularios de captura, callback, chat, quiz. El consentimiento de datos personales es parte del proceso, no decoración.",
        "Ads y contenido: ads de búsqueda, ads sociales, SEO, email a quien optó in. El boca a boca y las partnerships traen consultas más tibias cuando el producto ya resuena.",
        "Offline: feria con formulario, QR a un form, una llamada tras una visita — misma lógica de contacto + consentimiento.",
      ],
      lists: [
        {
          intro: "Qué no usar como estrategia:",
          items: [
            "scraping de emails/teléfonos ajenos",
            "comprar «listas de leads» sin origen de consentimiento",
            "fingir interés con solicitudes falsas impulsadas",
          ],
        },
      ],
      links: [
        {
          label: "Formularios de captura",
          href: "/es/blog/formy-zahvata/",
        },
        {
          label: "Callback",
          href: "/blog/obratnyy-zvonok/",
        },
      ],
    },
    {
      title: "Cualificación y camino al deal",
      level: 2,
      paras: [
        "Tras aterrizar en el CRM se revisa el lead: presupuesto, plazos, decision-maker, encaje de producto. Algunos caen como no cualificados — es normal, no un «fallo de marketing».",
        "Marketing puede pasar MQLs; ventas aceptan SQLs. Sin un diccionario compartido los informes mienten.",
        "La velocidad de primera respuesta en un lead caliente a menudo gana a un script perfecto: el interés tibio se enfría.",
      ],
      notes: [
        {
          title: "Calidad por encima del volumen",
          text: "100 leads a CPL 50 con cero deals es peor que 15 leads a CPL 800 con cinco pagos. Cuenta el embudo hasta el revenue.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Métricas: CPL, conversión, ROMI",
      level: 2,
      paras: [
        "CPL = gasto del canal / leads según tu definición. Compara canales solo con la misma definición de lead.",
        "La conversión lead → deal y el ticket medio muestran calidad. Sin CRM es adivinanza.",
        "El ROI / ROMI de marketing mira el dinero, no solicitudes «bonitas». Los KPIs de proceso (leads, velocidad de respuesta) y el payback en cash son niveles distintos.",
      ],
      links: [
        {
          label: "ROI de marketing",
          href: "/es/blog/roi-marketinga/",
        },
        {
          label: "Analítica de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "Cómo encontrar leads en la práctica",
      level: 2,
      paras: [
        "Primero oferta y landing: si hay visitas pero no solicitudes — arregla sentido y CTA, no solo el presupuesto.",
        "Elige 1–2 canales para unit economics, monta el handoff al CRM, asigna un dueño de la velocidad de respuesta.",
        "Mejora la cualificación con campos del formulario y un script — no con volumen de spam. Escala lo que produce deals cualificados.",
      ],
      lists: [
        {
          intro: "Orden mini de lanzamiento:",
          items: [
            "definición de lead en una página",
            "formulario/llamada con consentimiento",
            "CRM + dueño",
            "CPL y cuota cualificada en el informe",
            "sin comprar listas ajenas",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Un lead es interés + contacto (u otra acción objetivo), no una «audiencia» abstracta ni un pago.",
        "Temperatura, canal y calidad ganan a la carrera por un CPL barato.",
        "Construyes tu propia lista vía consentimiento; contactos ajenos «a granel» es mala estrategia.",
      ],
    },
  ],
  closing: [
    "Escribe la definición de lead de tu empresa, comprueba que las solicitudes aterrizan en el CRM con dueño y compara dos canales no por «cantidad» sino por deals — entonces el término deja de ser buzzword de slide.",
  ],
  related: [
    "trafik-bez-lidov",
    "formy-zahvata",
    "obratnyy-zvonok",
    "roi-marketinga",
    "skvoznaya-analitika",
    "kviz-sayt",
  ],
};

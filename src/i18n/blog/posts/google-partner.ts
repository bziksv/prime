import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-partner — same structure as RU JSON. */
export const googlePartnerEn: BlogPost = {
  slug: "google-partner",
  title: "Google Partner: how to get partner status",
  date: "2020-02-07",
  category: "Paid search",
  cover: "/images/blog/google-partner/cover-en.webp",
  excerpt:
    "What Google Partner and Premier Partner status give agencies: Skillshop certification, account spend and performance, why the badge matters — without outdated dollar thresholds as law.",
  lead: [
    "Google Partner is a program for agencies and specialists who run Google Ads through an MCC (manager account). Status signals expertise to clients and opens training, support, and sometimes bonuses — the exact set depends on level and market.",
    "Below: levels, certification, spend, and performance. Spend thresholds and certificate counts have changed; current numbers and rules live only in official Google Partners / Skillshop materials — not in 2017–2020 guides.",
  ],
  faq: [
    {
      q: "Are Partner and Premier Partner the same?",
      a: "No. Premier is higher: usually stricter on certified staff count, spend volume, and market requirements. Exact thresholds are in the partner console.",
    },
    {
      q: "Does a solo freelancer need the status?",
      a: "A Skillshop certificate helps a specialist too. Full Partner is more about an agency with MCC and client accounts.",
    },
    {
      q: "Where do you take the exam?",
      a: "In Skillshop (formerly Google Academy / similar training platforms). Courses and exams update; downloading answer dumps wastes the attempt.",
    },
    {
      q: "Is the badge on the website required?",
      a: "No, but under program rules it builds trust. Badge specializations (Search, Shopping, Display, and so on) must match reality.",
    },
    {
      q: "Is Google Partner status forever?",
      a: "No. You must keep meeting criteria and renew certification — or the level drops.",
    },
    {
      q: "Does it replace quality Ads management?",
      a: "No. Partnership is a signal and access to resources. Clients care more about CPA and ROMI than the badge alone.",
    },
    {
      q: "How much spend do you need?",
      a: "There are spend thresholds over a period across MCC accounts — they depend on level and region and change. Don’t copy someone else’s “$10k / 90 days” from old articles.",
    },
  ],
  sections: [
    {
      title: "Who needs the status and which levels exist",
      level: 2,
      paras: [
        "The program is for people who manage others’ or multiple Ads accounts via a manager account. For “one own store” a partner badge is usually overkill — solid account management and optional personal certification are enough.",
        "Historically there were Partner and Premier Partner: premium has a higher bar on team, spend, and sometimes manager access and early features. Names and privilege grids — check the current console; Google periodically rebuilds the program.",
      ],
      lists: [
        {
          intro: "Typical status pillars (meaning, not numbers):",
          items: [
            "staff certification on Ads products",
            "enough spend across managed accounts",
            "management quality/performance (not only “spend the budget”)",
            "stable MCC work and client base",
          ],
        },
      ],
    },
    {
      title: "Certification in Skillshop",
      level: 2,
      paras: [
        "Staff take exams on Google Ads and related products (Search, Display, analytics, and more — the course list changes). The learning profile must link to the agency work account, or the certificate doesn’t count for partnership.",
        "There are prep modules before the exam; you can go straight in if practice is strong. Don’t switch tabs and search for answers mid-test — the system flags violations, and questions update.",
        "A certificate helps a résumé and tender. For an agency, closing the required number of live certificates with profile access matters more than downloading a PDF for the showcase.",
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Don’t rely on third-party ready answers and outdated dumps: the exam changes, and a cheat sheet burns the attempt.",
        },
      ],
    },
    {
      title: "Account spend and performance",
      level: 2,
      paras: [
        "Partnership looks at total spend across managed accounts in the reporting period. The threshold depends on level and market; figures from 2017–2020 articles (including fixed dollar minima) are not a norm.",
        "Performance isn’t only spend. The system and managers look at whether client value grows: conversions, retention, optimization quality. Spending for the threshold without results hits reputation harder than missing a badge.",
        "Keep a clear MCC picture: active clients, correct staff access, current certificates. Dead accounts and checkbox theater don’t impress the program for long.",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "What participation gives you",
      level: 2,
      paras: [
        "Training and community: courses, newsletters, sometimes leadership tracks at higher levels. Support: from help center and contact channels to a personal manager on premium — if your tier includes it.",
        "Promotion: badge rights (where rules allow), guidance on new products, events and reward programs (promo codes, rewards) — the set depends on country and period.",
        "A website badge marks specialization — not a client KPI guarantee. In agency sales it removes some objections; in delivery, reports and campaign economics still decide.",
      ],
      lists: [
        {
          intro: "Realistic benefits:",
          items: [
            "trust when a client picks a vendor",
            "access to training and product updates",
            "an escalation path for hard cases",
            "sometimes early tool access",
            "motivation for the team to keep certification live",
          ],
        },
      ],
    },
    {
      title: "Practical order without outdated numbers",
      level: 2,
      paras: [
        "Set up MCC and access → train and certify key people in Skillshop → bring spend and management quality to current console thresholds → apply / confirm status and watch retake dates.",
        "Don’t promise a client “we’re Partner = cheap leads for you.” Promise process, transparent KPIs, and skills the badge only confirms.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "thresholds only from current Google Help",
            "a certificate ≠ automatic Partner",
            "Premier is a separate bar",
            "status must be maintained",
            "client economics beat the showcase",
          ],
        },
      ],
    },
  ],
  closing: [
    "Check current criteria in the partner console, close team certification, and only then chase the badge — or you’ll spend a month on a badge that gets revoked tomorrow for an expired exam.",
  ],
  related: [
    "analiz-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "prognoz-trafika-google-ads",
    "strategii-google-ads",
    "klyuchi-google-ads",
    "metriki-reklamy",
  ],
};

/** ES overlay for google-partner — same structure as RU JSON / EN. */
export const googlePartnerEs: BlogPost = {
  slug: "google-partner",
  title: "Google Partner: cómo obtener el estatus de partner",
  date: "2020-02-07",
  category: "Búsqueda de pago",
  cover: "/images/blog/google-partner/cover.webp",
  excerpt:
    "Qué dan a las agencias los estatus Google Partner y Premier Partner: certificación Skillshop, spend y rendimiento de cuentas, por qué importa el badge — sin umbrales en dólares obsoletos como ley.",
  lead: [
    "Google Partner es un programa para agencias y especialistas que gestionan Google Ads a través de un MCC (cuenta manager). El estatus señala expertise a los clientes y abre formación, soporte y a veces bonuses — el set exacto depende del nivel y del mercado.",
    "Abajo: niveles, certificación, spend y rendimiento. Los umbrales de spend y el número de certificados han cambiado; cifras y reglas actuales viven solo en materiales oficiales de Google Partners / Skillshop — no en guías de 2017–2020.",
  ],
  faq: [
    {
      q: "¿Partner y Premier Partner son lo mismo?",
      a: "No. Premier es más alto: suele ser más estricto en número de staff certificado, volumen de spend y requisitos del mercado. Los umbrales exactos están en la consola de partners.",
    },
    {
      q: "¿Un freelance solo necesita el estatus?",
      a: "Un certificado Skillshop también ayuda a un especialista. El Partner completo va más de una agencia con MCC y cuentas de clientes.",
    },
    {
      q: "¿Dónde se hace el examen?",
      a: "En Skillshop (antes Google Academy / plataformas de formación similares). Cursos y exámenes se actualizan; descargar dumps de respuestas desperdicia el intento.",
    },
    {
      q: "¿El badge en el sitio es obligatorio?",
      a: "No, pero según las reglas del programa genera confianza. Las especializaciones del badge (Search, Shopping, Display, etc.) deben coincidir con la realidad.",
    },
    {
      q: "¿El estatus Google Partner es para siempre?",
      a: "No. Hay que seguir cumpliendo criterios y renovar la certificación — o el nivel cae.",
    },
    {
      q: "¿Sustituye a una buena gestión de Ads?",
      a: "No. El partnership es una señal y acceso a recursos. A los clientes les importan más CPA y ROMI que el badge solo.",
    },
    {
      q: "¿Cuánto spend hace falta?",
      a: "Hay umbrales de spend en un periodo a lo largo de las cuentas del MCC — dependen del nivel y la región y cambian. No copies el «$10k / 90 días» de artículos viejos.",
    },
  ],
  sections: [
    {
      title: "Quién necesita el estatus y qué niveles existen",
      level: 2,
      paras: [
        "El programa es para quien gestiona cuentas Ads ajenas o múltiples vía una cuenta manager. Para «una sola tienda propia» el badge de partner suele ser overkill — basta una gestión sólida de la cuenta y, opcional, certificación personal.",
        "Históricamente había Partner y Premier Partner: el premium tiene un listón más alto en equipo, spend y a veces acceso a managers y features tempranas. Nombres y rejillas de privilegios — revisa la consola actual; Google reconstruye el programa periódicamente.",
      ],
      lists: [
        {
          intro: "Pilares típicos del estatus (significado, no cifras):",
          items: [
            "certificación del staff en productos Ads",
            "spend suficiente en cuentas gestionadas",
            "calidad/rendimiento de la gestión (no solo «gastar el presupuesto»)",
            "trabajo estable del MCC y base de clientes",
          ],
        },
      ],
    },
    {
      title: "Certificación en Skillshop",
      level: 2,
      paras: [
        "El staff hace exámenes de Google Ads y productos relacionados (Search, Display, analytics y más — la lista de cursos cambia). El perfil de aprendizaje debe vincularse a la cuenta de trabajo de la agencia, o el certificado no cuenta para el partnership.",
        "Hay módulos de prep antes del examen; puedes entrar directo si la práctica es fuerte. No cambies de pestaña ni busques respuestas a mitad del test — el sistema marca violaciones, y las preguntas se actualizan.",
        "Un certificado ayuda al CV y a un tender. Para una agencia, cerrar el número requerido de certificados vivos con acceso de perfil importa más que descargar un PDF para el escaparate.",
      ],
      notes: [
        {
          title: "Consejo",
          kind: "tip",
          text: "No te fíes de respuestas listas de terceros ni dumps obsoletos: el examen cambia, y una chuleta quema el intento.",
        },
      ],
    },
    {
      title: "Spend de cuentas y rendimiento",
      level: 2,
      paras: [
        "El partnership mira el spend total en cuentas gestionadas en el periodo de reporting. El umbral depende del nivel y del mercado; las cifras de artículos 2017–2020 (incluido mínimos fijos en dólares) no son norma.",
        "El rendimiento no es solo spend. El sistema y los managers miran si crece el valor para el cliente: conversiones, retención, calidad de la optimización. Gastar por el umbral sin resultados golpea la reputación más que perder un badge.",
        "Mantén una foto clara del MCC: clientes activos, acceso correcto del staff, certificados al día. Cuentas muertas y teatro de checkbox no impresionan al programa mucho tiempo.",
      ],
      links: [
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Qué te da la participación",
      level: 2,
      paras: [
        "Formación y comunidad: cursos, newsletters, a veces tracks de liderazgo en niveles altos. Soporte: del help center y canales de contacto a un manager personal en premium — si tu tier lo incluye.",
        "Promoción: derechos de badge (donde las reglas lo permiten), guía sobre productos nuevos, eventos y programas de rewards (códigos promo, recompensas) — el set depende del país y del periodo.",
        "Un badge en el sitio marca especialización — no una garantía de KPI al cliente. En ventas de agencia quita objeciones; en delivery, siguen decidiendo informes y economía de campaña.",
      ],
      lists: [
        {
          intro: "Beneficios realistas:",
          items: [
            "confianza cuando un cliente elige vendor",
            "acceso a formación y updates de producto",
            "una vía de escalado para casos duros",
            "a veces acceso temprano a herramientas",
            "motivación del equipo para mantener la certificación viva",
          ],
        },
      ],
    },
    {
      title: "Orden práctico sin cifras obsoletas",
      level: 2,
      paras: [
        "Monta MCC y accesos → forma y certifica a la gente clave en Skillshop → lleva spend y calidad de gestión a los umbrales actuales de la consola → solicita / confirma el estatus y vigila las fechas de retake.",
        "No prometas a un cliente «somos Partner = leads baratos para ti». Promete proceso, KPIs transparentes y skills que el badge solo confirma.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "umbrales solo del Google Help actual",
            "un certificado ≠ Partner automático",
            "Premier es un listón aparte",
            "el estatus hay que mantenerlo",
            "la economía del cliente gana al escaparate",
          ],
        },
      ],
    },
  ],
  closing: [
    "Revisa los criterios actuales en la consola de partners, cierra la certificación del equipo y solo entonces persigue el badge — o te gastarás un mes en un badge que te revocan mañana por un examen caducado.",
  ],
  related: [
    "analiz-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "klyuchi-google-ads",
    "metriki-reklamy",
    "prognoz-trafika-google-ads",
    "strategii-google-ads",
  ],
};

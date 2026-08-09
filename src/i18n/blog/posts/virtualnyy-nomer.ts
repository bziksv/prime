import type { BlogPost } from "../../../data/blog";

/** EN overlay for virtualnyy-nomer — same structure as RU JSON. */
export const virtualnyyNomerEn: BlogPost = {
  slug: "virtualnyy-nomer",
  title: "Virtual phone numbers: why business needs them and where the limits are",
  date: "2020-07-21",
  category: "Digital marketing",
  cover: "/images/blog/virtualnyy-nomer/cover-en.webp",
  excerpt:
    "What a virtual number is: receiving SMS and calls over the internet, business use cases (call tracking, toll-free, IVR), and risks of free “numbers for sign-ups.” No guides to bypassing platform rules.",
  lead: [
    "A virtual number is a phone number in a carrier or service cloud: calls and SMS arrive in an app or via forwarding, without a physical line in the office.",
    "Below: legitimate business jobs and caution with mass “SMS numbers.” We don’t copy 2020 review prices or brand lists; pick the setup for the job and the contract, not “the cheapest code receiver.”",
  ],
  faq: [
    {
      q: "How is it different from a regular SIM?",
      a: "There’s no physical card in your pocket: the number lives with the provider, and you manage it through an account or API. For business, scaling lines is often easier.",
    },
    {
      q: "Can I use it for call tracking?",
      a: "Yes — a classic scenario: different numbers on ads show where the call came from. You need a link to analytics and CRM.",
    },
    {
      q: "Can you create social accounts with it?",
      a: "Bypassing platform rules and running multi-accounts via disposable numbers risks bans and legal claims. We don’t cover that as a how-to.",
    },
    {
      q: "Are free public SMS numbers safe?",
      a: "Often no: the number is visible to everyone, outsiders can read codes, and the account is easy to hijack. A bad choice for important services.",
    },
    {
      q: "Do I need internet access all the time?",
      a: "For apps and web accounts — yes. Forwarding to a mobile may work differently; check with the provider.",
    },
  ],
  sections: [
    {
      title: "Who needs it and which jobs it covers",
      level: 2,
      paras: [
        "Business use: a separate line for ads, toll-free numbers, IVR (“press 1…”), voice alerts, SMS to clients with consent, several staff on one cloud PBX.",
        "A number’s area code (e.g., a city code) doesn’t legally make the company “from that city.” Don’t use a number to fake location — reputation and legal risk follow. An honest offer and service beat a “pretty area code.”",
        "A private “don’t show my personal number on a one-off form” case is sometimes solved with a work SIM or a corporate line. Public web numbers where anyone can see SMS are dangerous for banking and email.",
        "Broadcasts and notifications — only under telecom rules and with list consent. A virtual number doesn’t exempt you from advertising and personal-data law.",
      ],
      lists: [
        {
          intro: "Solid use cases:",
          items: [
            "ad call tracking",
            "one number with forwarding to mobiles",
            "IVR and call queues",
            "SMS codes to staff or clients within a service",
            "a separate support line",
          ],
        },
      ],
      links: [
        {
          label: "SMS marketing",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "How to choose and what to check",
      level: 2,
      paras: [
        "For business, check: contract, jurisdiction, call quality, API, call recording (with notice), CRM integration, toll-free and local codes. Large cloud telephony and CPaaS providers (Twilio and similar) are infrastructure — not “one more social account.”",
        "Free “receive SMS online” showcases and one-time activators are fine for experiments but weak for money and data: numbers get reused, codes leak, support is zero. Don’t build email, bank, or ad-account access on them.",
        "Typical setup: register with a provider → pick number and plan → app or SIP/forwarding → test a call and SMS. Office hardware isn’t required; you need stable internet for a softphone.",
        "Prices like “pennies per number” from old articles aren’t a guide. Count per-minute, SMS, monthly number cost, and contract terms.",
        "Bottom line: a virtual number is a telephony and analytics tool. Use it for a business process under contract — don’t confuse it with gray multi-account schemes.",
      ],
      lists: [
        {
          intro: "Provider checklist:",
          items: [
            "clear contract and invoices",
            "needed country and city codes",
            "forwarding and/or SIP",
            "logs and recording within the rules",
            "CRM and analytics integration",
            "no public “shared” SMS numbers for anything important",
          ],
        },
      ],
      links: [
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "sms-rassylka",
    "skvoznaya-analitika",
    "reklamnyy-kabinet",
    "didzhital-agentstvo",
    "metriki-reklamy",
  ],
};

/** ES overlay for virtualnyy-nomer — same structure as RU JSON / EN. */
export const virtualnyyNomerEs: BlogPost = {
  slug: "virtualnyy-nomer",
  title: "Números de teléfono virtuales: por qué los necesita el negocio y dónde están los límites",
  date: "2020-07-21",
  category: "Digital marketing",
  cover: "/images/blog/virtualnyy-nomer/cover.webp",
  excerpt:
    "Qué es un número virtual: recibir SMS y llamadas por internet, casos de uso de negocio (call tracking, toll-free, IVR) y riesgos de «números gratis para registros». Sin guías para saltar reglas de plataforma.",
  lead: [
    "Un número virtual es un teléfono en la nube de un operador o servicio: llamadas y SMS llegan a una app o vía desvío, sin una línea física en la oficina.",
    "Abajo: trabajos de negocio legítimos y cautela con «números SMS» masivos. No copiamos precios de reviews de 2020 ni listas de marcas; elige el setup por el trabajo y el contrato, no «el receptor de códigos más barato».",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de una SIM habitual?",
      a: "No hay tarjeta física en el bolsillo: el número vive con el proveedor y lo gestionas por cuenta o API. Para el negocio, escalar líneas suele ser más fácil.",
    },
    {
      q: "¿Se puede usar para call tracking?",
      a: "Sí — un escenario clásico: números distintos en ads muestran de dónde vino la llamada. Hace falta vínculo con analytics y CRM.",
    },
    {
      q: "¿Se pueden crear cuentas social con él?",
      a: "Saltar reglas de plataforma y correr multi-cuentas vía números desechables arriesga bans y reclamaciones legales. No lo cubrimos como how-to.",
    },
    {
      q: "¿Son seguros los números SMS públicos gratis?",
      a: "A menudo no: el número lo ve todo el mundo, terceros pueden leer códigos y la cuenta es fácil de hijackear. Mala elección para servicios importantes.",
    },
    {
      q: "¿Hace falta internet todo el tiempo?",
      a: "Para apps y cuentas web — sí. El desvío a un móvil puede funcionar distinto; comprueba con el proveedor.",
    },
  ],
  sections: [
    {
      title: "Quién lo necesita y qué trabajos cubre",
      level: 2,
      paras: [
        "Uso de negocio: una línea aparte para ads, números toll-free, IVR («pulse 1…»), alertas de voz, SMS a clientes con consentimiento, varios staff en una PBX en la nube.",
        "El código de área de un número (p. ej. un código de ciudad) no hace legalmente a la empresa «de esa ciudad». No uses un número para fingir ubicación — siguen riesgo de reputación y legal. Una oferta y un servicio honestos ganan a un «código de área bonito».",
        "Un caso privado de «no mostrar mi número personal en un formulario puntual» a veces se resuelve con una SIM de trabajo o una línea corporativa. Los números web públicos donde cualquiera ve SMS son peligrosos para banca y email.",
        "Broadcasts y notificaciones — solo bajo reglas de telecom y con consentimiento de lista. Un número virtual no te exime de la ley de publicidad y datos personales.",
      ],
      lists: [
        {
          intro: "Casos de uso sólidos:",
          items: [
            "call tracking de ads",
            "un número con desvío a móviles",
            "IVR y colas de llamada",
            "códigos SMS a staff o clientes dentro de un servicio",
            "una línea de soporte aparte",
          ],
        },
      ],
      links: [
        {
          label: "Marketing por SMS",
          href: "/es/blog/sms-rassylka/",
        },
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "Cómo elegir y qué comprobar",
      level: 2,
      paras: [
        "Para el negocio, comprueba: contrato, jurisdicción, calidad de llamada, API, grabación de llamadas (con aviso), integración CRM, códigos toll-free y locales. Los grandes proveedores de telefonía en la nube y CPaaS (Twilio y similares) son infraestructura — no «una cuenta social más».",
        "Los showcases gratis de «recibir SMS online» y activadores de un solo uso valen para experimentos pero son débiles para dinero y datos: los números se reutilizan, los códigos se filtran, el soporte es cero. No armes sobre ellos el acceso a email, banco o cuenta de ads.",
        "Setup típico: registrarte con un proveedor → elegir número y plan → app o SIP/desvío → probar una llamada y un SMS. No hace falta hardware de oficina; hace falta internet estable para un softphone.",
        "Precios como «céntimos por número» de artículos viejos no son una guía. Cuenta por minuto, SMS, coste mensual del número y términos del contrato.",
        "En resumen: un número virtual es una tool de telefonía y analytics. Úsalo para un proceso de negocio bajo contrato — no lo confundas con esquemas grises de multi-cuenta.",
      ],
      lists: [
        {
          intro: "Checklist del proveedor:",
          items: [
            "contrato y facturas claros",
            "códigos de país y ciudad necesarios",
            "desvío y/o SIP",
            "logs y grabación dentro de las reglas",
            "integración CRM y analytics",
            "sin números SMS «compartidos» públicos para nada importante",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
        {
          label: "Agencia digital",
          href: "/es/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "sms-rassylka",
    "skvoznaya-analitika",
    "reklamnyy-kabinet",
    "didzhital-agentstvo",
    "metriki-reklamy",
  ],
};

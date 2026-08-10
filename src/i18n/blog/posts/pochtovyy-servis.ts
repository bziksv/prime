import type { BlogPost } from "../../../data/blog";

/** EN overlay for pochtovyy-servis — same structure as RU JSON. */
export const pochtovyyServisEn: BlogPost = {
  slug: "pochtovyy-servis",
  title: "How to choose an email service: permanent inbox and temporary mail",
  date: "2021-07-06",
  category: "Digital marketing",
  cover: "/images/blog/pochtovyy-servis/cover-en.webp",
  excerpt:
    "How a permanent email differs from a disposable one, what to check in Gmail, Yandex, Mail, and Outlook, how to harden security, and when temporary mail makes sense.",
  lead: [
    "An email service is an inbox for messages: account recovery, correspondence, receipts, and newsletters. Life and business need a stable address; for a one-off signup on a dubious site, a temporary one can be enough.",
    "Below: selection criteria, permanent services, and the role of disposable mail. Interfaces and limits change; security and habit matter more than “users in 2018” stats.",
  ],
  faq: [
    {
      q: "Which email service is the best?",
      a: "The one that’s convenient for you and has 2FA, filters, and recovery enabled. For a Google stack people often pick Gmail; in Russia Yandex and Mail are common — choose by task.",
    },
    {
      q: "When do I need temporary mail?",
      a: "So you don’t expose your main address on one-off landings. Not for banks, government services, or important accounts: a password-reset email won’t arrive once the inbox is gone.",
    },
    {
      q: "Is a phone required at signup?",
      a: "For many services — yes or almost yes. It fights mass bots; keep the number under control.",
    },
    {
      q: "How is corporate mail on a domain different?",
      a: "An address like `name@yourfirm.com` on your domain via hosting, Workspace, Yandex 360, or similar. For a brand it’s better than a free `@mail…` on a business card.",
    },
    {
      q: "How do I avoid losing access?",
      a: "Two-factor auth, backup email or phone, a unique password, and session checks. Don’t keep the password only in the browser without a manager.",
    },
  ],
  sections: [
    {
      title: "Permanent or temporary inbox",
      level: 2,
      paras: [
        "A permanent email is the base of digital identity: site logins, receipts, support. A temporary (disposable) one lives minutes to days and cuts spam after a test signup.",
        "Filters often block temporary mail: a site may reject the address. We don’t cover fraud or ban-evasion — only the everyday “don’t want spam on my main” case.",
      ],
      lists: [
        {
          intro: "Permanent — if:",
          items: [
            "you need password recovery",
            "correspondence and attachments matter",
            "work, clients, or finances",
          ],
        },
        {
          intro: "Temporary — if:",
          items: [
            "a one-off signup with no lasting value",
            "you don’t want to expose the main address",
            "you’re ready to lose access to that account",
          ],
        },
      ],
    },
    {
      title: "Criteria for a permanent service",
      level: 2,
      paras: [
        "Look past “pretty themes” at security, anti-spam, search, the mobile app, attachment and cloud limits, and which other services are tied to the account.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "2FA and login alerts",
            "a backup recovery channel",
            "spam-filter quality (without false positives on important mail)",
            "handy search and labels/folders",
            "a phone client",
            "a clear data and privacy policy",
          ],
        },
      ],
    },
    {
      title: "Popular permanent services",
      level: 2,
      paras: [
        "Yandex Mail and Mail.ru are a familiar stack in Russia: signup, filters, cloud, ecosystem ties. Interfaces have updated; 2018 screenshots aren’t a guide.",
        "Gmail — strong filters and Google service ties; handy if you already live in that ecosystem. Outlook — logical when you work with Microsoft 365 / Office.",
        "Aging “legacy” products with abandoned UI are a poor pick for a new primary inbox: move what matters and enable forwarding during migration.",
      ],
      tables: [
        {
          caption: "Guidelines (not a ranking)",
          headers: ["Task", "Where people often look"],
          rows: [
            ["Everyday mail in Russia", "Yandex / Mail"],
            ["Google stack", "Gmail"],
            ["Microsoft office", "Outlook"],
            ["Brand on your domain", "Corporate mail / Workspace"],
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Don’t publish your main work inbox in random open forms. For newsletter signups you can keep a second permanent address.",
        },
      ],
    },
    {
      title: "Temporary mail and security",
      level: 2,
      paras: [
        "Disposable-address services differ: lifetime, whether you can reply, forwarding, attachment limits. Pick a clear UI and don’t use them for anything valuable.",
        "For any inbox: unique password, 2FA, device checks, and caution with attachments and phishing “logins.” A mail hack = access to every linked service.",
      ],
      lists: [
        {
          intro: "Protection minimum:",
          items: [
            "turn on two-factor auth",
            "set a backup email or phone",
            "don’t open suspicious “confirm your account” links",
            "revoke unused apps with mailbox access",
            "once a quarter check filters and Spam for false positives",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for pochtovyy-servis — same structure as RU JSON / EN. */
export const pochtovyyServisEs: BlogPost = {
  slug: "pochtovyy-servis",
  title: "Cómo elegir un servicio de email: bandeja permanente y correo temporal",
  date: "2021-07-06",
  category: "Digital marketing",
  cover: "/images/blog/pochtovyy-servis/cover-es.webp",
  excerpt:
    "En qué se diferencia un email permanente de uno desechable, qué revisar en Gmail, Yandex, Mail y Outlook, cómo endurecer la seguridad y cuándo tiene sentido el correo temporal.",
  lead: [
    "Un servicio de email es una bandeja para mensajes: recuperación de cuentas, correspondencia, recibos y newsletters. La vida y el negocio necesitan una dirección estable; para un alta puntual en un sitio dudoso, una temporal puede bastar.",
    "Abajo: criterios de selección, servicios permanentes y el papel del correo desechable. Interfaces y límites cambian; la seguridad y el hábito importan más que stats de «usuarios en 2018».",
  ],
  faq: [
    {
      q: "¿Cuál es el mejor servicio de email?",
      a: "El que te resulte cómodo y tenga 2FA, filtros y recuperación activados. Para un stack Google a menudo eligen Gmail; en Rusia son habituales Yandex y Mail — elige por tarea.",
    },
    {
      q: "¿Cuándo hace falta correo temporal?",
      a: "Para no exponer tu dirección principal en landings puntuales. No para bancos, servicios del Estado ni cuentas importantes: un email de reset de contraseña no llegará cuando la bandeja haya desaparecido.",
    },
    {
      q: "¿Hace falta un teléfono al registrarse?",
      a: "En muchos servicios — sí o casi sí. Combate bots masivos; mantén el número bajo control.",
    },
    {
      q: "¿En qué se diferencia el correo corporativo en un dominio?",
      a: "Una dirección tipo `name@yourfirm.com` en tu dominio vía hosting, Workspace, Yandex 360 o similar. Para una marca es mejor que un `@mail…` gratis en una tarjeta de visita.",
    },
    {
      q: "¿Cómo no perder el acceso?",
      a: "Auth en dos factores, email o teléfono de respaldo, contraseña única y revisión de sesiones. No guardes la contraseña solo en el navegador sin un gestor.",
    },
  ],
  sections: [
    {
      title: "Bandeja permanente o temporal",
      level: 2,
      paras: [
        "Un email permanente es la base de la identidad digital: logins en sitios, recibos, soporte. Uno temporal (desechable) vive minutos a días y corta el spam tras un alta de prueba.",
        "Los filtros a menudo bloquean el correo temporal: un sitio puede rechazar la dirección. No cubrimos fraude ni evasión de bans — solo el caso cotidiano «no quiero spam en la mía principal».",
      ],
      lists: [
        {
          intro: "Permanente — si:",
          items: [
            "necesitas recuperación de contraseña",
            "importan la correspondencia y los adjuntos",
            "trabajo, clientes o finanzas",
          ],
        },
        {
          intro: "Temporal — si:",
          items: [
            "un alta puntual sin valor duradero",
            "no quieres exponer la dirección principal",
            "estás listo para perder el acceso a esa cuenta",
          ],
        },
      ],
    },
    {
      title: "Criterios para un servicio permanente",
      level: 2,
      paras: [
        "Mira más allá de «temas bonitos»: seguridad, anti-spam, búsqueda, la app móvil, límites de adjuntos y nube, y qué otros servicios están atados a la cuenta.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "2FA y alertas de login",
            "un canal de recuperación de respaldo",
            "calidad del filtro de spam (sin falsos positivos en correo importante)",
            "búsqueda y etiquetas/carpetas cómodas",
            "un cliente de teléfono",
            "una política clara de datos y privacidad",
          ],
        },
      ],
    },
    {
      title: "Servicios permanentes populares",
      level: 2,
      paras: [
        "Yandex Mail y Mail.ru son un stack familiar en Rusia: registro, filtros, nube, lazos de ecosistema. Las interfaces se han actualizado; las capturas de 2018 no son guía.",
        "Gmail — filtros fuertes y lazos con servicios Google; práctico si ya vives en ese ecosistema. Outlook — lógico cuando trabajas con Microsoft 365 / Office.",
        "Productos «legacy» envejecidos con UI abandonada son mala elección para una bandeja primaria nueva: mueve lo que importa y activa el reenvío durante la migración.",
      ],
      tables: [
        {
          caption: "Pautas (no un ranking)",
          headers: ["Tarea", "Dónde se suele mirar"],
          rows: [
            ["Correo cotidiano en Rusia", "Yandex / Mail"],
            ["Stack Google", "Gmail"],
            ["Oficina Microsoft", "Outlook"],
            ["Marca en tu dominio", "Correo corporativo / Workspace"],
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "No publiques tu bandeja principal de trabajo en formularios abiertos al azar. Para altas a newsletters puedes mantener una segunda dirección permanente.",
        },
      ],
    },
    {
      title: "Correo temporal y seguridad",
      level: 2,
      paras: [
        "Los servicios de direcciones desechables difieren: vida útil, si puedes responder, reenvío, límites de adjuntos. Elige una UI clara y no los uses para nada valioso.",
        "Para cualquier bandeja: contraseña única, 2FA, revisión de dispositivos y cuidado con adjuntos y «logins» de phishing. Un hack del mail = acceso a cada servicio vinculado.",
      ],
      lists: [
        {
          intro: "Mínimo de protección:",
          items: [
            "activar autenticación en dos factores",
            "fijar un email o teléfono de respaldo",
            "no abrir enlaces sospechosos de «confirma tu cuenta»",
            "revocar apps sin uso con acceso al buzón",
            "una vez al trimestre revisar filtros y Spam por falsos positivos",
          ],
        },
      ],
    },
  ],
};

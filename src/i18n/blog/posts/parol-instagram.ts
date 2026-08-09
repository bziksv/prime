import type { BlogPost } from "../../../data/blog";

/** EN overlay for parol-instagram — same structure as RU JSON. */
export const parolInstagramEn: BlogPost = {
  slug: "parol-instagram",
  title: "Instagram password reset and change: how to regain access",
  date: "2021-11-09",
  category: "SMM",
  cover: "/images/blog/parol-instagram/cover-en.webp",
  excerpt:
    "When to change an Instagram password, how to recover login via email, SMS, and support, what to do if you’re hacked, and how to harden account security.",
  lead: [
    "Can’t sign into Instagram — most often a forgotten password, a username typo, or a hack. Reset is available via email, SMS, and official recovery flows; menu labels change over time.",
    "Below: when to reset, typical steps, and what to do if you suspect a hack. This is a security checklist — not an endorsement of the platform.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where is the “Forgot password” button?",
      a: "On the app or website login screen — next to the login form. Wording varies: “Forgot?”, “Get help,” and similar.",
    },
    {
      q: "What matters more — email or phone?",
      a: "Whichever contact is linked and that you can still access. Keep both up to date ahead of time.",
    },
    {
      q: "Did “via Facebook” used to help?",
      a: "If accounts were linked, login/reset via Facebook sometimes worked. Availability depends on region and settings — follow today’s login screens and help docs.",
    },
    {
      q: "What should you do if you’re hacked?",
      a: "Change the password as soon as you can, sign out other sessions, report the hack to support, check email and linked services, turn on two-factor authentication.",
    },
    {
      q: "Why didn’t I get a reset email?",
      a: "Spam, wrong email in the profile, delivery delay, or blocked mail. Check the address and spam folder, then try SMS.",
    },
  ],
  sections: [
    {
      title: "When to change the password",
      level: 2,
      paras: [
        "Change the password if you forgot it, see a login error even with what you believe is the right password, suspect a hack, or reused a password that leaked elsewhere.",
      ],
      lists: [
        {
          intro: "Typical reset reasons:",
          items: [
            "forgot it or mistyped characters",
            "the account behaves oddly (posts, name, messages that aren’t yours)",
            "you entered the password on a third-party “service” — change it on email too",
            "a planned rotation after contractors finished",
          ],
        },
      ],
    },
    {
      title: "Recovery via email or SMS",
      level: 2,
      paras: [
        "On the login screen choose account recovery, enter username, email, or phone — the system offers available channels.",
        "The email or SMS will have a code or link. Set a new password and check login right away. Don’t open reset links from suspicious emails on unfamiliar domains.",
      ],
      lists: [
        {
          intro: "Before resetting:",
          items: [
            "confirm you’re on the official app or site",
            "you have access to the email or number",
            "the new password is long and unique",
            "after login, review active sessions",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "A strong password is useless if it matches your email password. Your email and Instagram passwords must be different.",
        },
      ],
    },
    {
      title: "Facebook link and web login",
      level: 2,
      paras: [
        "Historically accounts could be linked to Facebook and share a login flow. Today the available buttons depend on region, account type, and Meta updates.",
        "On desktop the flow matches the app: login screen → password help → email/SMS → new code. You don’t need a separate Windows app — a browser is enough.",
      ],
    },
    {
      title: "If the account was hacked",
      level: 2,
      paras: [
        "Warning signs: name or password changed, content gone, weird Direct messages, unknown logins. Move fast.",
      ],
      lists: [
        {
          intro: "Action order:",
          items: [
            "try a password reset through contacts you control",
            "report the hack through official support",
            "change passwords on email and linked services",
            "turn on two-factor authentication",
            "warn clients if scammers messaged them under your name",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Handing your login to a “fake engagement” helper or shady service. After that, recovery is already in someone else’s hands.",
        },
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to lower the risk of losing access",
      level: 2,
      paras: [
        "Keep email and phone current, use a unique password and 2FA, be careful with third-party apps, and keep recovery backup codes if the platform issues them.",
      ],
      lists: [
        {
          intro: "Basic hygiene:",
          items: [
            "store the password only in a password manager",
            "don’t stay signed in on shared devices",
            "don’t confirm suspicious “security checks”",
            "for a brand account, limit access to a small circle",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for parol-instagram — same structure as RU JSON / EN. */
export const parolInstagramEs: BlogPost = {
  slug: "parol-instagram",
  title: "Restablecer y cambiar la contraseña de Instagram: cómo recuperar el acceso",
  date: "2021-11-09",
  category: "SMM",
  cover: "/images/blog/parol-instagram/cover.webp",
  excerpt:
    "Cuándo cambiar la contraseña de Instagram, cómo recuperar el login vía email, SMS y soporte, qué hacer si te hackean y cómo endurecer la seguridad de la cuenta.",
  lead: [
    "No puedes entrar en Instagram — lo más habitual es una contraseña olvidada, un typo en el username o un hack. El reset está disponible vía email, SMS y flujos oficiales de recuperación; las etiquetas del menú cambian con el tiempo.",
    "Abajo: cuándo resetear, pasos típicos y qué hacer si sospechas un hack. Esto es un checklist de seguridad — no un respaldo de la plataforma.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Dónde está el botón «Forgot password»?",
      a: "En la pantalla de login de la app o del sitio — junto al formulario de login. El wording varía: «¿Olvidaste?», «Get help» y similares.",
    },
    {
      q: "¿Qué importa más — email o teléfono?",
      a: "El contacto que esté vinculado y al que aún puedas acceder. Mantén ambos al día de antemano.",
    },
    {
      q: "¿Antes ayudaba «vía Facebook»?",
      a: "Si las cuentas estaban vinculadas, a veces funcionaba el login/reset vía Facebook. La disponibilidad depende de la región y los ajustes — sigue las pantallas de login y la help de hoy.",
    },
    {
      q: "¿Qué hacer si te hackean?",
      a: "Cambia la contraseña en cuanto puedas, cierra otras sesiones, reporta el hack al soporte, revisa el email y los servicios vinculados, activa la autenticación en dos factores.",
    },
    {
      q: "¿Por qué no me llegó el email de reset?",
      a: "Spam, email equivocado en el perfil, retraso de entrega o correo bloqueado. Revisa la dirección y la carpeta de spam, luego prueba SMS.",
    },
  ],
  sections: [
    {
      title: "Cuándo cambiar la contraseña",
      level: 2,
      paras: [
        "Cambia la contraseña si la olvidaste, ves un error de login incluso con lo que crees que es la contraseña correcta, sospechas un hack o reutilizaste una contraseña que se filtró en otro sitio.",
      ],
      lists: [
        {
          intro: "Razones típicas de reset:",
          items: [
            "la olvidaste o tecleaste mal caracteres",
            "la cuenta se comporta raro (posts, nombre, mensajes que no son tuyos)",
            "introdujiste la contraseña en un «servicio» de terceros — cámbiala también en el email",
            "una rotación planificada tras terminar contratistas",
          ],
        },
      ],
    },
    {
      title: "Recuperación vía email o SMS",
      level: 2,
      paras: [
        "En la pantalla de login elige recuperación de cuenta, introduce username, email o teléfono — el sistema ofrece los canales disponibles.",
        "El email o SMS tendrá un código o enlace. Fija una contraseña nueva y comprueba el login al momento. No abras enlaces de reset de emails sospechosos en dominios desconocidos.",
      ],
      lists: [
        {
          intro: "Antes de resetear:",
          items: [
            "confirma que estás en la app o sitio oficiales",
            "tienes acceso al email o al número",
            "la nueva contraseña es larga y única",
            "tras el login, revisa las sesiones activas",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Una contraseña fuerte no sirve si coincide con la del email. Las contraseñas de email e Instagram deben ser distintas.",
        },
      ],
    },
    {
      title: "Enlace a Facebook y login web",
      level: 2,
      paras: [
        "Históricamente las cuentas podían vincularse a Facebook y compartir un flujo de login. Hoy los botones disponibles dependen de la región, el tipo de cuenta y las updates de Meta.",
        "En escritorio el flujo encaja con la app: pantalla de login → ayuda de contraseña → email/SMS → código nuevo. No hace falta una app aparte de Windows — basta un navegador.",
      ],
    },
    {
      title: "Si la cuenta fue hackeada",
      level: 2,
      paras: [
        "Señales de aviso: nombre o contraseña cambiados, contenido desaparecido, mensajes raros en Direct, logins desconocidos. Muévete rápido.",
      ],
      lists: [
        {
          intro: "Orden de acción:",
          items: [
            "probar un reset de contraseña por contactos que controlas",
            "reportar el hack por el soporte oficial",
            "cambiar contraseñas del email y servicios vinculados",
            "activar autenticación en dos factores",
            "avisar a clientes si estafadores les escribieron con tu nombre",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Entregar tu login a un «ayudante de engagement falso» o a un servicio dudoso. Después, la recuperación ya está en manos de otro.",
        },
      ],
      links: [
        {
          label: "Likes falsos: riesgos",
          href: "/es/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Cómo bajar el riesgo de perder el acceso",
      level: 2,
      paras: [
        "Mantén email y teléfono al día, usa una contraseña única y 2FA, ten cuidado con apps de terceros y guarda códigos de recuperación de respaldo si la plataforma los emite.",
      ],
      lists: [
        {
          intro: "Higiene básica:",
          items: [
            "guardar la contraseña solo en un gestor de contraseñas",
            "no quedarte con sesión abierta en dispositivos compartidos",
            "no confirmar «chequeos de seguridad» sospechosos",
            "en una cuenta de marca, limitar el acceso a un círculo pequeño",
          ],
        },
      ],
    },
  ],
};

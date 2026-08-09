import type { BlogPost } from "../../../data/blog";

/** EN overlay for menedzher-paroley — same structure as RU JSON. */
export const menedzherParoleyEn: BlogPost = {
  slug: "menedzher-paroley",
  title: "Password manager: why you need one and how to choose",
  date: "2018-04-06",
  category: "Digital marketing",
  cover: "/images/blog/menedzher-paroley/cover-en.webp",
  excerpt:
    "Why a password manager matters personally and for a team: unique passwords, 2FA, selection criteria — without an outdated “best of three” listicle and 2018 prices.",
  lead: [
    "Dozens of accounts won’t fit in your head or a passwords.txt file. A password manager stores unique strong passwords in an encrypted vault, fills forms, and helps share access by rules — instead of sending a password in a chat.",
    "Below: why you need one, how personal mode differs from team mode, and what to watch when choosing. Specific prices, “best of three” lists, and a dozen-tool roundup from 2018 are stale: some products left the market; others changed pricing and reputation after incidents. Check the vendor’s current site.",
  ],
  faq: [
    {
      q: "Isn’t one memorized password safer than a manager?",
      a: "Reusing the same password on many sites is worse: a leak on one service opens the rest. Manager, unique passwords, and 2FA is the baseline.",
    },
    {
      q: "What if the password manager itself is breached?",
      a: "Risk exists for any software. Reduce it: strong master password, 2FA on the manager account, updates, a clear company policy. Don’t store the master password in the same cloud nearby.",
    },
    {
      q: "Is the built-in browser manager enough?",
      a: "For a personal minimum, often yes. For cross-browser use, teams, and audit, a dedicated manager is more convenient.",
    },
    {
      q: "Can I share a client password in the agency chat?",
      a: "Better via a manager with access rights and revoke. Chat and email leave copies and make revoke harder.",
    },
    {
      q: "Do I need a manager if everything has 2FA?",
      a: "Yes. 2FA doesn’t replace unique passwords; together they’re stronger.",
    },
  ],
  sections: [
    {
      title: "Why a password manager",
      level: 2,
      paras: [
        "The job isn’t “remember everything” — it’s stop repeating weak passwords and storing them in notes. The manager generates long random passwords, keeps them in a vault, and fills login fields.",
        "For marketers and SEO it’s especially visible: ad accounts, analytics, client CMS, email. One reused password is a risk chain across several projects.",
      ],
      lists: [
        {
          intro: "What this class of tools usually gives:",
          items: [
            "strong password generation",
            "autofill in browsers and apps",
            "sync across devices",
            "cards or notes vault (by product)",
            "secure sharing (personal or team)",
          ],
        },
      ],
    },
    {
      title: "Personal and team use",
      level: 2,
      paras: [
        "A personal manager is your safe: sites, banks, socials, work accounts. A team one adds roles, groups, audit of who had access to what, and revoke on offboarding.",
        "In an agency or product team without a shared vault, passwords sprawl across chats. That’s worse than any “inconvenient” corporate manager.",
      ],
      tables: [
        {
          caption: "Personal vs team",
          headers: ["Mode", "Focus"],
          rows: [
            ["Personal", "Unique passwords, 2FA, your devices"],
            ["Family/pair", "Shared folders with minimal extras"],
            ["Team", "Roles, audit, revoke, SSO when mature"],
            ["Client accounts", "Separate records, no shared “admin123”"],
          ],
        },
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
        {
          label: "Chrome extensions for marketing",
          href: "/en/blog/chrome-rasshireniya-marketing/",
        },
      ],
    },
    {
      title: "What to watch when choosing",
      level: 2,
      paras: [
        "Don’t chase a 2018 “best of three” ranking. Check platforms (Windows, macOS, iOS, Android, Linux), extensions for your browsers, encryption model, 2FA, export/import for migration, company policy, and incident history.",
        "Don’t copy prices from old reviews into a contract: plans and free limits changed. Cost per person per year and who administers it matter.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "needed OS and browsers",
            "master password + 2FA",
            "convenient sharing without revealing the password in chat",
            "export if you switch vendors",
            "transparent company and updates",
            "for teams — roles and audit",
          ],
        },
      ],
      notes: [
        {
          title: "About “old stars” on the list",
          kind: "tip",
          text: "The original roundup included products like Splikity and niche utilities — some are no longer relevant. LastPass, 1Password, Bitwarden, KeePass/KeePassXC, OS/browser keychains, and team vaults (Passwork-class and similar) are category landmarks, not ads. Verify product status yourself.",
        },
      ],
    },
    {
      title: "Solution classes, not brand cult",
      level: 2,
      paras: [
        "Cloud managers are convenient for sync. Local or self-hosted tools (KeePass and similar) give file control but need backup discipline. Built-in browser and OS managers are a good start if you live in one ecosystem.",
        "For business the process matters more: who grants access, how it’s revoked, whether shared “department” passwords are banned.",
      ],
    },
    {
      title: "Habits beat the app",
      level: 2,
      paras: [
        "Once the manager is installed, drop `qwerty` and one password for everything. Enable 2FA on email and critical accounts. Don’t store the master password in the same browser vault unprotected.",
        "Phishing bypasses the manager if you type the password on a fake site yourself. Check the address; don’t rush “urgent” lockout emails.",
      ],
      lists: [
        {
          intro: "Minimum discipline:",
          items: [
            "unique password per important service",
            "2FA where available",
            "revoke access when an employee leaves",
            "don’t send passwords in open chat",
            "keep the manager app updated",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A password manager is basic hygiene for personal and work account networks. Choose by platforms, 2FA, and team model — not an outdated listicle with 2018 dollar prices.",
        "After you install one, trust the generator and stop repeating weak passwords.",
      ],
    },
  ],
  closing: [
    "Pick a manager for your devices and mode (personal or team), move critical accounts, enable 2FA on the vault and email — and stop keeping client passwords in chat history.",
  ],
  related: [
    "chrome-rasshireniya-marketing",
    "chrome-rasshireniya-seo",
    "udalennaya-rabota",
    "parol-instagram",
    "pochtovyy-servis",
    "pochta-dlya-domena",
  ],
};

/** ES overlay for menedzher-paroley — same structure as RU JSON / EN. */
export const menedzherParoleyEs: BlogPost = {
  slug: "menedzher-paroley",
  title: "Gestor de contraseñas: por qué lo necesitas y cómo elegir",
  date: "2018-04-06",
  category: "Digital marketing",
  cover: "/images/blog/menedzher-paroley/cover.webp",
  excerpt:
    "Por qué importa un gestor de contraseñas en lo personal y en el equipo: contraseñas únicas, 2FA, criterios de selección — sin un listicle desfasado de «los tres mejores» ni precios de 2018.",
  lead: [
    "Docenas de cuentas no caben en la cabeza ni en un passwords.txt. Un gestor guarda contraseñas únicas y fuertes en una bóveda cifrada, rellena formularios y ayuda a compartir acceso con reglas — en lugar de mandar la contraseña por el chat.",
    "Abajo: por qué lo necesitas, en qué se diferencia el modo personal del de equipo y qué mirar al elegir. Precios concretos, listas de «los tres mejores» y un roundup de una docena de tools de 2018 están muertos: algunos productos salieron del mercado; otros cambiaron pricing y reputación tras incidentes. Revisa el sitio actual del vendor.",
  ],
  faq: [
    {
      q: "¿No es más seguro una contraseña memorizada que un gestor?",
      a: "Reutilizar la misma en muchos sitios es peor: una filtración en un servicio abre el resto. Gestor, contraseñas únicas y 2FA es la línea base.",
    },
    {
      q: "¿Y si el propio gestor de contraseñas es vulnerado?",
      a: "El riesgo existe en cualquier software. Redúcelo: master password fuerte, 2FA en la cuenta del gestor, updates, política clara de empresa. No guardes la master password en la misma nube al lado.",
    },
    {
      q: "¿Basta el gestor integrado del navegador?",
      a: "Para un mínimo personal, a menudo sí. Para uso multi-navegador, equipos y auditoría, un gestor dedicado es más cómodo.",
    },
    {
      q: "¿Puedo pasar la contraseña de un cliente en el chat de la agencia?",
      a: "Mejor vía gestor con derechos de acceso y revoke. Chat y email dejan copias y dificultan revocar.",
    },
    {
      q: "¿Hace falta un gestor si todo tiene 2FA?",
      a: "Sí. El 2FA no sustituye contraseñas únicas; juntos son más fuertes.",
    },
  ],
  sections: [
    {
      title: "Por qué un gestor de contraseñas",
      level: 2,
      paras: [
        "El trabajo no es «acordarse de todo» — es dejar de repetir contraseñas débiles y guardarlas en notas. El gestor genera passwords largas y aleatorias, las guarda en la bóveda y rellena los campos de login.",
        "Para marketers y SEO se ve especialmente: cuentas de ads, analytics, CMS de clientes, email. Una contraseña reutilizada es una cadena de riesgo entre varios proyectos.",
      ],
      lists: [
        {
          intro: "Qué suele dar esta clase de tools:",
          items: [
            "generación de contraseñas fuertes",
            "autofill en navegadores y apps",
            "sync entre dispositivos",
            "bóveda de tarjetas o notas (según producto)",
            "sharing seguro (personal o equipo)",
          ],
        },
      ],
    },
    {
      title: "Uso personal y de equipo",
      level: 2,
      paras: [
        "Un gestor personal es tu caja fuerte: sitios, bancos, redes, cuentas de trabajo. Uno de equipo añade roles, grupos, auditoría de quién tuvo acceso a qué, y revoke al offboarding.",
        "En una agencia o equipo de producto sin bóveda compartida, las contraseñas se desparraman por los chats. Eso es peor que cualquier gestor corporativo «incómodo».",
      ],
      tables: [
        {
          caption: "Personal vs equipo",
          headers: ["Modo", "Foco"],
          rows: [
            ["Personal", "Contraseñas únicas, 2FA, tus dispositivos"],
            ["Familia/pareja", "Carpetas compartidas con extras mínimos"],
            ["Equipo", "Roles, auditoría, revoke, SSO cuando madure"],
            ["Cuentas de cliente", "Registros separados, sin «admin123» compartido"],
          ],
        },
      ],
      links: [
        {
          label: "Trabajo remoto",
          href: "/blog/udalennaya-rabota/",
        },
        {
          label: "Extensiones de Chrome para marketing",
          href: "/blog/chrome-rasshireniya-marketing/",
        },
      ],
    },
    {
      title: "Qué mirar al elegir",
      level: 2,
      paras: [
        "No persigas un ranking de «los tres mejores» de 2018. Revisa plataformas (Windows, macOS, iOS, Android, Linux), extensiones para tus navegadores, modelo de cifrado, 2FA, export/import para migrar, política de la empresa e historial de incidentes.",
        "No copies precios de reviews viejas a un contrato: planes y límites free cambiaron. Importan el coste por persona/año y quién lo administra.",
      ],
      lists: [
        {
          intro: "Checklist de selección:",
          items: [
            "SO y navegadores necesarios",
            "master password + 2FA",
            "sharing cómodo sin revelar la contraseña en el chat",
            "export si cambias de vendor",
            "empresa transparente y updates",
            "para equipos — roles y auditoría",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre «estrellas viejas» de la lista",
          kind: "tip",
          text: "El roundup original incluía productos como Splikity y utilidades de nicho — algunos ya no son relevantes. LastPass, 1Password, Bitwarden, KeePass/KeePassXC, keychains de SO/navegador y bóvedas de equipo (clase Passwork y similares) son hitos de categoría, no anuncios. Verifica tú el estado del producto.",
        },
      ],
    },
    {
      title: "Clases de solución, no culto a la marca",
      level: 2,
      paras: [
        "Los gestores cloud son cómodos para sync. Tools locales o self-hosted (KeePass y similares) dan control del archivo pero piden disciplina de backup. Los gestores integrados de navegador y SO son un buen arranque si vives en un ecosistema.",
        "Para el negocio importa más el proceso: quién da acceso, cómo se revoca, si están prohibidas las contraseñas compartidas de «departamento».",
      ],
    },
    {
      title: "Los hábitos ganan a la app",
      level: 2,
      paras: [
        "Una vez instalado el gestor, deja el `qwerty` y una sola contraseña para todo. Activa 2FA en email y cuentas críticas. No guardes la master password en la misma bóveda del navegador sin protección.",
        "El phishing salta el gestor si tú mismo escribes la contraseña en un sitio falso. Revisa la dirección; no corras con emails de «bloqueo urgente».",
      ],
      lists: [
        {
          intro: "Disciplina mínima:",
          items: [
            "contraseña única por servicio importante",
            "2FA donde exista",
            "revoke de acceso cuando un empleado se va",
            "no enviar contraseñas en chat abierto",
            "mantener actualizada la app del gestor",
          ],
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Un gestor de contraseñas es higiene básica para redes de cuentas personales y de trabajo. Elige por plataformas, 2FA y modelo de equipo — no por un listicle desfasado con precios en dólares de 2018.",
        "Tras instalarlo, confía en el generador y deja de repetir contraseñas débiles.",
      ],
    },
  ],
  closing: [
    "Elige un gestor para tus dispositivos y modo (personal o equipo), mueve las cuentas críticas, activa 2FA en la bóveda y el email — y deja de guardar contraseñas de clientes en el historial del chat.",
  ],
  related: [
    "chrome-rasshireniya-marketing",
    "chrome-rasshireniya-seo",
    "udalennaya-rabota",
    "parol-instagram",
    "pochtovyy-servis",
    "pochta-dlya-domena",
  ],
};

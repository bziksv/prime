import type { BlogPost } from "../../../data/blog";

/** EN overlay for blokirovka-instagram — same structure as RU JSON. */
export const blokirovkaInstagramEn: BlogPost = {
  slug: "blokirovka-instagram",
  title: "Instagram lockout: how to regain access and what to avoid",
  date: "2021-07-13",
  category: "SMM",
  cover: "/images/blog/blokirovka-instagram/cover-en.webp",
  excerpt:
    "Why Instagram restricts accounts, how a full ban differs from “action blocked,” how to appeal via official forms, and how to lower risk — without grey schemes.",
  lead: [
    "Instagram restrictions vary: a temporary action limit, content removal, partial feature bans, or a fully unavailable profile. Causes include reports, copyright, suspected automation, and hacks.",
    "Below: how to read the notice, where to write support, and how to lower risk. Response times and menu labels change — follow current screens and Help. This is an informational memo, not an unlock guarantee.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a lockout different from a forgotten password?",
      a: "With a forgotten password the login form works — you need a reset. With a lockout the system clearly says there’s a restriction / violation. Password reset is in a separate article.",
    },
    {
      q: "How long does support take to reply?",
      a: "From hours to several days; weekends are slower. There is no fixed “always 3–5 hours” — don’t plan a campaign around an instant reply.",
    },
    {
      q: "Does claiming “the account was hacked” help if it’s a rules ban?",
      a: "The hack flow is for account takeover. Using it instead of a normal violation appeal is risky and can confuse the case. Write to the point: what happened and why you think the decision is wrong.",
    },
    {
      q: "What does “Action blocked” mean?",
      a: "Often a temporary limit on likes, Direct, follows, or posts after an activity spike. It usually lifts on its own; slow down and don’t run bots.",
    },
    {
      q: "Are there official “60 likes per hour” limits?",
      a: "There are no public hard tables for everyone. Numbers from old guides are folklore. Aim for live behavior without mass-liking and autoposting.",
    },
  ],
  sections: [
    {
      title: "What kinds of restrictions exist",
      level: 2,
      paras: [
        "After login you may see a screen with a (vague) reason and “Learn more” / appeal buttons. Sometimes only ads, Direct, or publishing are cut while viewing stays.",
        "Temporary anti-spam (“action blocked”) ≠ account deletion. First read the notice text and save a screenshot — useful for follow-up.",
      ],
      lists: [
        {
          intro: "Typical reasons:",
          items: [
            "reports and content moderation",
            "copyright on others’ photos/video/music",
            "suspicion of bots and mass-liking",
            "a hack and spam under your name",
            "repeat violations after warnings",
          ],
        },
      ],
      links: [
        {
          label: "Password and login recovery",
          href: "/en/blog/parol-instagram/",
        },
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
    {
      title: "How to appeal via official forms",
      level: 2,
      paras: [
        "Follow the buttons in the notice or Help / support in the app and linked accounts in Accounts Center. Give your name, @username, reply email, country, and a short summary.",
        "The reply often comes by email: what to delete, what to confirm, whether extra ID is needed. For a business profile they sometimes ask for brand proof — prepare ahead, without dumping personal data in open chats.",
        "Write to the point, without aggression. If they ask to remove disputed content — do it and confirm. Fake “I was hacked” narratives when it’s a rules case make review harder.",
      ],
      lists: [
        {
          intro: "Useful in the request:",
          items: [
            "exact @username and restriction date",
            "what you see on screen (describe it)",
            "what you already did (changed password, revoked sessions)",
            "a contact email you can access",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t buy a “guaranteed unlock” from middlemen: fraud and re-hack risk. Official support channels only.",
        },
      ],
      links: [
        {
          label: "Linking Instagram and Facebook",
          href: "/en/blog/svyazka-instagram-facebook/",
        },
      ],
    },
    {
      title: "Temporary action limit",
      level: 2,
      paras: [
        "A message like “action blocked, try later” often follows a burst of similar actions: likes, follows, Direct, frequent posts. Duration — from minutes to a day or longer.",
        "Lower activity, wait, don’t switch VPN/proxies in batches, and don’t plug in grey autoposters. After the limit lifts, return to a normal pace.",
      ],
    },
    {
      title: "How to lower lockout risk",
      level: 2,
      paras: [
        "Your own materials or licensed content, moderate manual activity, two-factor auth, current email and phone, no fake engagement or mass-following.",
        "Run a new account calmer in the first days. Ads and integrations — by platform rules, without dodging moderation.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "unique password + 2FA",
            "check active sessions",
            "don’t give access to shady “SMM services”",
            "don’t publish others’ content without rights",
            "don’t run bots for likes and follows",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for blokirovka-instagram — same structure as RU JSON / EN. */
export const blokirovkaInstagramEs: BlogPost = {
  slug: "blokirovka-instagram",
  title: "Bloqueo en Instagram: cómo recuperar el acceso y qué evitar",
  date: "2021-07-13",
  category: "SMM",
  cover: "/images/blog/blokirovka-instagram/cover-es.webp",
  excerpt:
    "Por qué Instagram restringe cuentas, en qué se diferencia un ban completo de «action blocked», cómo apelar por formularios oficiales y cómo bajar el riesgo — sin esquemas grises.",
  lead: [
    "Las restricciones de Instagram varían: un límite temporal de acciones, retirada de contenido, bans parciales de funciones o un perfil totalmente inaccesible. Causas: reports, copyright, sospecha de automatización y hacks.",
    "Abajo: cómo leer el aviso, dónde escribir al soporte y cómo bajar el riesgo. Tiempos de respuesta y etiquetas del menú cambian — sigue pantallas y Help actuales. Esto es un memo informativo, no una garantía de desbloqueo.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia un bloqueo de una contraseña olvidada?",
      a: "Con contraseña olvidada el formulario de login funciona — hace falta un reset. Con un bloqueo el sistema dice con claridad que hay una restricción / infracción. El reset de contraseña está en un artículo aparte.",
    },
    {
      q: "¿Cuánto tarda el soporte en responder?",
      a: "De horas a varios días; los fines de semana van más lentos. No hay un «siempre 3–5 horas» fijo — no planifiques una campaña alrededor de una respuesta instantánea.",
    },
    {
      q: "¿Ayuda alegar «la cuenta fue hackeada» si es un ban por reglas?",
      a: "El flujo de hack es para toma de la cuenta. Usarlo en lugar de un appeal normal por infracción es arriesgado y puede confundir el caso. Escribe al grano: qué pasó y por qué crees que la decisión es errónea.",
    },
    {
      q: "¿Qué significa «Action blocked»?",
      a: "A menudo un límite temporal de likes, Direct, follows o posts tras un pico de actividad. Suele levantarse solo; baja el ritmo y no uses bots.",
    },
    {
      q: "¿Hay límites oficiales de «60 likes por hora»?",
      a: "No hay tablas públicas duras para todos. Las cifras de guías antiguas son folklore. Apunta a comportamiento vivo sin mass-liking ni autoposting.",
    },
  ],
  sections: [
    {
      title: "Qué tipos de restricciones existen",
      level: 2,
      paras: [
        "Tras el login puedes ver una pantalla con un motivo (vago) y botones «Learn more» / appeal. A veces solo se cortan ads, Direct o publicación mientras la vista sigue.",
        "El anti-spam temporal («action blocked») ≠ borrado de cuenta. Primero lee el texto del aviso y guarda una captura — útil para el seguimiento.",
      ],
      lists: [
        {
          intro: "Motivos típicos:",
          items: [
            "reports y moderación de contenido",
            "copyright sobre fotos/vídeo/música ajenos",
            "sospecha de bots y mass-liking",
            "un hack y spam con tu nombre",
            "infracciones repetidas tras avisos",
          ],
        },
      ],
      links: [
        {
          label: "Recuperación de contraseña y login",
          href: "/es/blog/parol-instagram/",
        },
        {
          label: "Likes falsos: riesgos",
          href: "/es/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
    {
      title: "Cómo apelar por formularios oficiales",
      level: 2,
      paras: [
        "Sigue los botones del aviso o Help / soporte en la app y cuentas vinculadas en Accounts Center. Da tu nombre, @username, email de respuesta, país y un resumen corto.",
        "La respuesta suele llegar por email: qué borrar, qué confirmar, si hace falta ID extra. Para un perfil business a veces piden prueba de marca — prepárala de antemano, sin volcar datos personales en chats abiertos.",
        "Escribe al grano, sin agresividad. Si piden quitar contenido en disputa — hazlo y confirma. Narrativas falsas de «me hackearon» cuando es un caso de reglas dificultan la revisión.",
      ],
      lists: [
        {
          intro: "Útil en la solicitud:",
          items: [
            "@username exacto y fecha de la restricción",
            "qué ves en pantalla (descríbelo)",
            "qué ya hiciste (cambiaste contraseña, revocaste sesiones)",
            "un email de contacto al que puedas acceder",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "No compres un «desbloqueo garantizado» a intermediarios: fraude y riesgo de re-hack. Solo canales oficiales de soporte.",
        },
      ],
      links: [
        {
          label: "Vincular Instagram y Facebook",
          href: "/es/blog/svyazka-instagram-facebook/",
        },
      ],
    },
    {
      title: "Límite temporal de acciones",
      level: 2,
      paras: [
        "Un mensaje tipo «action blocked, try later» suele seguir a un pico de acciones similares: likes, follows, Direct, posts frecuentes. Duración — de minutos a un día o más.",
        "Baja la actividad, espera, no cambies VPN/proxies en lotes y no enchufes autoposters grises. Tras levantarse el límite, vuelve a un ritmo normal.",
      ],
    },
    {
      title: "Cómo bajar el riesgo de bloqueo",
      level: 2,
      paras: [
        "Materiales propios o con licencia, actividad manual moderada, autenticación en dos factores, email y teléfono al día, sin engagement falso ni mass-following.",
        "Lleva una cuenta nueva con más calma los primeros días. Ads e integraciones — según las reglas de la plataforma, sin esquivar la moderación.",
      ],
      lists: [
        {
          intro: "Higiene mínima:",
          items: [
            "contraseña única + 2FA",
            "revisar sesiones activas",
            "no dar acceso a «servicios SMM» dudosos",
            "no publicar contenido ajeno sin derechos",
            "no correr bots de likes y follows",
          ],
        },
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for udalenie-akkaunta-instagram — same structure as RU JSON. */
export const udalenieAkkauntaInstagramEn: BlogPost = {
  slug: "udalenie-akkaunta-instagram",
  title: "Deleting an Instagram account: personal, business, and a temporary pause",
  date: "2020-10-06",
  category: "SMM",
  cover: "/images/blog/udalenie-akkaunta-instagram/cover-en.webp",
  excerpt:
    "How temporary deactivation, switching a business profile to personal, and permanently deleting an Instagram account differ — and what you usually can’t undo.",
  lead: [
    "You can leave Instagram in different ways: temporarily hide the profile, switch a business account to personal, or delete the profile forever. These are different scenarios with different effects on content, stats, and the handle.",
    "Meta menu labels change; check the exact path in Accounts Center or Instagram Help. Below: the choice logic and the risks — not outdated button screenshots. See the Meta note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you delete an account from the app only?",
      a: "Full deletion used to often require a browser. Now the path may be in-app via Accounts Center — check current steps in Meta Help.",
    },
    {
      q: "How is deactivation different from deletion?",
      a: "A temporary pause usually hides the profile and lets you return by signing in. Full deletion removes content and followers; restoring the same account is generally impossible.",
    },
    {
      q: "Is switching to a personal account the same as deletion?",
      a: "No. It’s a profile-type change. Business or professional stats may become unavailable, but the feed usually stays.",
    },
    {
      q: "Will the username free up after deletion?",
      a: "Don’t count on quickly reclaiming the same username. Meta policy has shifted; the name often stays unavailable or is taken another way.",
    },
    {
      q: "What should I do before deleting a business account?",
      a: "Export important media, turn off ads and payments, and check linked Facebook/WhatsApp plus staff access in Accounts Center.",
    },
  ],
  sections: [
    {
      title: "Three scenarios: pause, type change, deletion",
      level: 2,
      paras: [
        "Temporary deactivation (or a “pause”) is for when you need a break without losing history: the profile is hidden; signing in usually restores access.",
        "Switching business or professional to personal is for when stats and contact buttons are no longer needed. That’s not closing the account.",
        "Full deletion is irreversible: posts, archived Stories, followers, and account chats go with it.",
      ],
      notes: [
        {
          title: "Important",
          text: "Before any scenario, save the files you need and check linked Meta accounts — or you may lose ads access or messaging.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Temporary deactivation",
      level: 2,
      paras: [
        "It works when you’re tired of the feed or want to hide for a while but aren’t ready to lose content. Usually you pick a reason, confirm with a password, and hide the profile.",
        "Coming back is most often just signing in again. Exact wording (“temporarily disable,” “deactivate”) depends on the UI version.",
      ],
      lists: [
        {
          intro: "Before a pause:",
          items: [
            "warn the team if it’s a work account",
            "turn off or pause ads",
            "make sure you know the password and backup email/phone",
          ],
        },
      ],
    },
    {
      title: "Business → personal profile",
      level: 2,
      paras: [
        "Business or professional mode gives insights, header contacts, and an easier ads link. Switching back to personal usually turns those off.",
        "Closing a business profile “for select people” like a private personal account often isn’t possible in the same sense: a commercial storefront is built for openness. You can limit Stories and parts of the audience with other privacy settings — don’t confuse that with deletion.",
        "Account-type setup in detail lives in the business-profile article.",
      ],
    },
    {
      title: "Full account deletion",
      level: 2,
      paras: [
        "Deletion usually goes through Accounts Center or the Instagram deletion page in a browser: pick the account, a reason, and confirm.",
        "After confirm, Meta’s policy on timing and a short cancel window (if your version has one) applies — don’t rely on rumors from old 2020 guides.",
        "Re-registering with the same email is sometimes possible, but the same handle and the same feed are not. You can’t bring followers back with a button.",
      ],
      lists: [
        {
          intro: "Checklist before deletion:",
          items: [
            "export or manually save key photos and videos",
            "unlink ads accounts and payments",
            "revoke staff access",
            "confirm you’re deleting the right profile, not a neighbor in Accounts Center",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Confusing “switch to personal” with “delete forever.” The first keeps the account; the second doesn’t.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Recovery and alternatives",
      level: 2,
      paras: [
        "After full deletion you generally can’t restore the same account. A new profile means a new name, audience, and warm-up.",
        "If the goal is quiet, not burning bridges, try temporary deactivation or simply staying silent without deleting.",
        "If the account was hacked or blocked — that’s another process (report, access recovery), not “delete and recreate” as the only path. See articles on blocks and passwords.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A pause keeps content; a type change removes business tools; deletion is irreversible for the feed and followers.",
        "The current button path lives only in Meta Help; the meaning of the scenarios is more stable than menu labels.",
      ],
    },
  ],
  closing: [
    "Decide the goal (pause, drop stats, or full close), save what matters, and only then confirm deletion — fewer surprises with the handle and ads.",
  ],
  related: [
    "biznes-akkaunt-instagram",
    "blokirovka-instagram",
    "razblokirovka-instagram",
    "parol-instagram",
    "svyazka-instagram-facebook",
    "tenevoy-ban-instagram",
  ],
};

/** ES overlay for udalenie-akkaunta-instagram — same structure as RU JSON / EN. */
export const udalenieAkkauntaInstagramEs: BlogPost = {
  slug: "udalenie-akkaunta-instagram",
  title:
    "Borrar una cuenta de Instagram: personal, business y una pausa temporal",
  date: "2020-10-06",
  category: "SMM",
  cover: "/images/blog/udalenie-akkaunta-instagram/cover.webp",
  excerpt:
    "En qué se diferencian la desactivación temporal, pasar un perfil business a personal y borrar para siempre una cuenta de Instagram — y qué normalmente no se puede deshacer.",
  lead: [
    "Puedes dejar Instagram de distintas formas: ocultar el perfil un tiempo, pasar una cuenta business a personal o borrar el perfil para siempre. Son escenarios distintos con efectos distintos sobre contenido, stats y el handle.",
    "Las etiquetas de menú de Meta cambian; revisa la ruta exacta en Accounts Center o Instagram Help. Abajo: la lógica de la elección y los riesgos — no capturas obsoletas de botones. Ver la nota de Meta en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Se puede borrar una cuenta solo desde la app?",
      a: "La eliminación completa a menudo exigía un navegador. Ahora la ruta puede estar in-app vía Accounts Center — revisa los pasos actuales en Meta Help.",
    },
    {
      q: "¿En qué se diferencia la desactivación del borrado?",
      a: "Una pausa temporal suele ocultar el perfil y permite volver iniciando sesión. El borrado completo elimina contenido y followers; restaurar la misma cuenta en general es imposible.",
    },
    {
      q: "¿Pasar a cuenta personal es lo mismo que borrar?",
      a: "No. Es un cambio de tipo de perfil. Las stats business o professional pueden dejar de estar disponibles, pero el feed suele quedarse.",
    },
    {
      q: "¿Se libera el username tras el borrado?",
      a: "No cuentes con recuperar rápido el mismo username. La política de Meta ha cambiado; el nombre a menudo sigue no disponible o se toma de otra forma.",
    },
    {
      q: "¿Qué debería hacer antes de borrar una cuenta business?",
      a: "Exporta media importante, apaga ads y pagos, y revisa Facebook/WhatsApp vinculados más el acceso del staff en Accounts Center.",
    },
  ],
  sections: [
    {
      title: "Tres escenarios: pausa, cambio de tipo, borrado",
      level: 2,
      paras: [
        "La desactivación temporal (o una «pausa») es para cuando necesitas un break sin perder historial: el perfil se oculta; iniciar sesión suele restaurar el acceso.",
        "Pasar de business o professional a personal es para cuando ya no hacen falta stats ni botones de contacto. Eso no es cerrar la cuenta.",
        "El borrado completo es irreversible: posts, Stories archivadas, followers y chats de la cuenta se van con ella.",
      ],
      notes: [
        {
          title: "Importante",
          text: "Antes de cualquier escenario, guarda los archivos que necesitas y revisa cuentas Meta vinculadas — o puedes perder acceso a ads o mensajería.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Desactivación temporal",
      level: 2,
      paras: [
        "Funciona cuando estás cansado del feed o quieres ocultarte un tiempo pero no estás listo para perder contenido. Suele pedirse un motivo, confirmar con contraseña y ocultar el perfil.",
        "Volver suele ser solo iniciar sesión otra vez. La redacción exacta («temporarily disable», «deactivate») depende de la versión de UI.",
      ],
      lists: [
        {
          intro: "Antes de una pausa:",
          items: [
            "avisa al equipo si es una cuenta de trabajo",
            "apaga o pausa ads",
            "asegúrate de conocer la contraseña y el email/teléfono de backup",
          ],
        },
      ],
    },
    {
      title: "Perfil business → personal",
      level: 2,
      paras: [
        "El modo business o professional da insights, contactos en el header y un enlace a ads más fácil. Volver a personal suele apagar eso.",
        "Cerrar un perfil business «para gente selecta» como una cuenta personal privada a menudo no es posible en el mismo sentido: un escaparate comercial se construye para la apertura. Puedes limitar Stories y partes de la audiencia con otros settings de privacy — no lo confundas con el borrado.",
        "El setup de tipo de cuenta en detalle vive en el artículo del perfil business.",
      ],
    },
    {
      title: "Borrado completo de la cuenta",
      level: 2,
      paras: [
        "El borrado suele ir por Accounts Center o la página de eliminación de Instagram en el navegador: elige la cuenta, un motivo y confirma.",
        "Tras confirmar, aplica la política de Meta sobre plazos y una ventana corta de cancelación (si tu versión la tiene) — no te fíes de rumores de guías viejas de 2020.",
        "Volver a registrarte con el mismo email a veces es posible, pero el mismo handle y el mismo feed no. No puedes traer de vuelta a los followers con un botón.",
      ],
      lists: [
        {
          intro: "Checklist antes del borrado:",
          items: [
            "exporta o guarda a mano fotos y vídeos clave",
            "desvincula cuentas de ads y pagos",
            "revoca acceso del staff",
            "confirma que borras el perfil correcto, no un vecino en Accounts Center",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Confundir «pasar a personal» con «borrar para siempre». Lo primero mantiene la cuenta; lo segundo no.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Recuperación y alternativas",
      level: 2,
      paras: [
        "Tras el borrado completo en general no puedes restaurar la misma cuenta. Un perfil nuevo significa nombre nuevo, audiencia nueva y warm-up.",
        "Si el objetivo es silencio, no quemar puentes, prueba la desactivación temporal o simplemente quedarte en silencio sin borrar.",
        "Si la cuenta fue hackeada o bloqueada — es otro proceso (report, recuperación de acceso), no «borrar y recrear» como único camino. Ver artículos sobre bloqueos y contraseñas.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Una pausa conserva el contenido; un cambio de tipo quita herramientas business; el borrado es irreversible para el feed y los followers.",
        "La ruta actual de botones vive solo en Meta Help; el sentido de los escenarios es más estable que las etiquetas de menú.",
      ],
    },
  ],
  closing: [
    "Decide el objetivo (pausa, soltar stats o cierre completo), guarda lo que importa y solo entonces confirma el borrado — menos sorpresas con el handle y los ads.",
  ],
  related: [
    "biznes-akkaunt-instagram",
    "blokirovka-instagram",
    "razblokirovka-instagram",
    "parol-instagram",
    "svyazka-instagram-facebook",
    "tenevoy-ban-instagram",
  ],
};

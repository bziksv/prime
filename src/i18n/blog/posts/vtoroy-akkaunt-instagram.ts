import type { BlogPost } from "../../../data/blog";

/** EN overlay for vtoroy-akkaunt-instagram — same structure as RU JSON. */
export const vtoroyAkkauntInstagramEn: BlogPost = {
  slug: "vtoroy-akkaunt-instagram",
  title: "A second Instagram account: why you need one and how to add it",
  date: "2020-07-29",
  category: "SMM",
  cover: "/images/blog/vtoroy-akkaunt-instagram/cover-en.webp",
  excerpt:
    "Why create a second Instagram profile, how to add an account in the app, how personal and work accounts differ, and typical signup glitches — without outdated screenshots.",
  lead: [
    "A second Instagram account helps when one feed mixes personal life and sales, different niches, or a temporary project. In the app you can switch profiles without signing out every time.",
    "Below: why to split, how to add a profile, what to watch with email and phone, and how to end a session. Limits and menu labels change — check Meta Help. See the note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How many accounts can you keep?",
      a: "The app makes it easy to switch between several. Check the exact limit and rules in current Help — the “exactly 5” figure from old guides isn’t gospel.",
    },
    {
      q: "Do you need a new email?",
      a: "Usually yes: each profile has its own login, email, or phone per signup rules. Don’t use someone else’s credentials.",
    },
    {
      q: "Are two SIM cards required?",
      a: "Not always. Email plus verification often suffice. A phone helps for 2FA; two SIMs are one option, not a requirement.",
    },
    {
      q: "How is this different from switching personal to business?",
      a: "Changing account type is one profile’s mode. A second account is a separate identity or brand with its own feed and audience.",
    },
    {
      q: "Can you run both from one phone?",
      a: "Yes, via account switching in the app. For a team, role-based access in a professional account is better where available.",
    },
  ],
  sections: [
    {
      title: "Why a second profile",
      level: 2,
      paras: [
        "Separate personal and commercial content: selfies don’t clutter the product storefront.",
        "Different niches: music, travel, shop — different audiences and visuals.",
        "Temporary projects: contest, event, offer test — then close or archive activity.",
        "Branches and brands: separate storefronts instead of one messy grid.",
      ],
      notes: [
        {
          title: "Important",
          text: "More accounts means more content and moderation. An empty second profile is worse than one strong one.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to add an account in the app",
      level: 2,
      paras: [
        "Open your profile → menu or name switcher → “Add account” (wording depends on version).",
        "Choose signup for a new profile or login to an existing one. For a new account — email or phone, name, password per the wizard.",
        "After creation, switch by tapping the profile name in the header — the list of saved logins.",
      ],
      lists: [
        {
          intro: "Before signup:",
          items: [
            "a free handle and backup email",
            "clear profile role (personal / brand)",
            "updated official app",
            "no gray “multi-account clients”",
          ],
        },
      ],
    },
    {
      title: "From a computer",
      level: 2,
      paras: [
        "In a browser you more often sign out of the current profile and register a new one, or sign in under another login.",
        "For business, official Meta business tools are better where several pages and profiles live in one ecosystem — not Android emulators.",
      ],
    },
    {
      title: "Links and publishing",
      level: 2,
      paras: [
        "Cross-posting to other social networks used to be offered actively from settings. The set of “linked accounts” has changed; current options are in settings and Accounts Center.",
        "Cross-posting doesn’t replace format adaptation: what works in the Instagram feed may be excess on another network.",
      ],
    },
    {
      title: "Signing out vs deleting",
      level: 2,
      paras: [
        "“End session” or remove account clears the profile from quick switching on the device — that’s not account deletion.",
        "Full profile deletion is a separate scenario (see the deletion article).",
      ],
      links: [
        {
          label: "Deleting an Instagram account",
          href: "/en/blog/udalenie-akkaunta-instagram/",
        },
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "If it won’t let you create one",
      level: 2,
      paras: [
        "Update the app, restart the phone, check whether email or phone are already taken.",
        "Temporary Meta glitches happen — wait or finish signup on another device, then add the login.",
        "Mass fake growth and automation on new profiles hit limits faster — don’t “warm up” with bots.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A second account is about a clear role and audience, not “another thousand followers at any cost.”",
        "Add it through the official client and plan content for each profile separately.",
      ],
    },
  ],
  closing: [
    "Define the second profile’s role, register it on a separate email, and switch in the app — it’s easier to keep personal and sales content in separate feeds.",
  ],
  related: [
    "biznes-akkaunt-instagram",
    "udalenie-akkaunta-instagram",
    "oformlenie-stranicy-instagram",
    "blog-instagram",
    "svyazka-instagram-facebook",
    "parol-instagram",
  ],
};

/** ES overlay for vtoroy-akkaunt-instagram — same structure as RU JSON / EN. */
export const vtoroyAkkauntInstagramEs: BlogPost = {
  slug: "vtoroy-akkaunt-instagram",
  title: "Una segunda cuenta de Instagram: por qué la necesitas y cómo añadirla",
  date: "2020-07-29",
  category: "SMM",
  cover: "/images/blog/vtoroy-akkaunt-instagram/cover.webp",
  excerpt:
    "Por qué crear un segundo perfil de Instagram, cómo añadir una cuenta en la app, en qué se diferencian personal y trabajo, y glitches típicos de signup — sin capturas obsoletas.",
  lead: [
    "Una segunda cuenta de Instagram ayuda cuando un feed mezcla vida personal y ventas, nichos distintos o un proyecto temporal. En la app puedes cambiar de perfil sin cerrar sesión cada vez.",
    "Abajo: por qué separar, cómo añadir un perfil, qué vigilar con email y teléfono y cómo terminar una sesión. Límites y etiquetas de menú cambian — consulta Meta Help. Ver la nota en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Cuántas cuentas puedes mantener?",
      a: "La app facilita cambiar entre varias. Revisa el límite exacto y las reglas en Help actual — la cifra de «exactamente 5» de guías viejas no es evangelio.",
    },
    {
      q: "¿Hace falta un email nuevo?",
      a: "Suele ser que sí: cada perfil tiene su propio login, email o teléfono según las reglas de signup. No uses credenciales ajenas.",
    },
    {
      q: "¿Hacen falta dos SIMs?",
      a: "No siempre. Email más verificación a menudo bastan. Un teléfono ayuda para 2FA; dos SIMs son una opción, no un requisito.",
    },
    {
      q: "¿En qué se diferencia de pasar de personal a business?",
      a: "Cambiar el tipo de cuenta es el modo de un solo perfil. Una segunda cuenta es una identidad o marca aparte con su propio feed y audiencia.",
    },
    {
      q: "¿Se pueden llevar las dos desde un solo teléfono?",
      a: "Sí, vía cambio de cuenta en la app. Para un equipo, el acceso por roles en una cuenta profesional es mejor donde esté disponible.",
    },
  ],
  sections: [
    {
      title: "Por qué un segundo perfil",
      level: 2,
      paras: [
        "Separar contenido personal y comercial: los selfies no ensucian el escaparate de producto.",
        "Nichos distintos: música, viajes, tienda — audiencias y visuales distintos.",
        "Proyectos temporales: contest, evento, test de oferta — luego cierras o archivas la actividad.",
        "Sucursales y marcas: escaparates separados en lugar de una grid mezclada.",
      ],
      notes: [
        {
          title: "Importante",
          text: "Más cuentas significan más contenido y moderación. Un segundo perfil vacío es peor que uno fuerte.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cómo añadir una cuenta en la app",
      level: 2,
      paras: [
        "Abre tu perfil → menú o switcher de nombre → «Add account» (la redacción depende de la versión).",
        "Elige signup para un perfil nuevo o login a uno existente. Para una cuenta nueva — email o teléfono, nombre, contraseña según el wizard.",
        "Tras crearla, cambia tocando el nombre del perfil en el header — la lista de logins guardados.",
      ],
      lists: [
        {
          intro: "Antes del signup:",
          items: [
            "un handle libre y email de backup",
            "rol claro del perfil (personal / marca)",
            "app oficial actualizada",
            "sin «multi-account clients» grises",
          ],
        },
      ],
    },
    {
      title: "Desde el ordenador",
      level: 2,
      paras: [
        "En el navegador más a menudo cierras sesión del perfil actual y registras uno nuevo, o inicias sesión con otro login.",
        "Para negocio, las herramientas business oficiales de Meta son mejores donde varias pages y perfiles viven en un ecosistema — no emuladores Android.",
      ],
    },
    {
      title: "Enlaces y publicación",
      level: 2,
      paras: [
        "El cross-posting a otras redes solía ofrecerse activamente desde settings. El set de «cuentas vinculadas» ha cambiado; las opciones actuales están en settings y Accounts Center.",
        "El cross-posting no sustituye adaptar el formato: lo que funciona en el feed de Instagram puede ser exceso en otra red.",
      ],
    },
    {
      title: "Cerrar sesión vs borrar",
      level: 2,
      paras: [
        "«End session» o quitar cuenta limpia el perfil del cambio rápido en el dispositivo — eso no es borrado de la cuenta.",
        "El borrado completo del perfil es un escenario aparte (ver el artículo de eliminación).",
      ],
      links: [
        {
          label: "Borrar una cuenta de Instagram",
          href: "/es/blog/udalenie-akkaunta-instagram/",
        },
        {
          label: "Cuenta business",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Si no te deja crear una",
      level: 2,
      paras: [
        "Actualiza la app, reinicia el teléfono, comprueba si el email o el teléfono ya están cogidos.",
        "Hay glitches temporales de Meta — espera o termina el signup en otro dispositivo y luego añade el login.",
        "El crecimiento falso masivo y la automatización en perfiles nuevos chocan con límites más rápido — no «calientes» con bots.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Una segunda cuenta va de un rol y una audiencia claros, no de «otro millar de followers a cualquier precio».",
        "Añádela por el cliente oficial y planifica contenido para cada perfil por separado.",
      ],
    },
  ],
  closing: [
    "Define el rol del segundo perfil, regístralo en un email aparte y cambia en la app — es más fácil mantener lo personal y las ventas en feeds separados.",
  ],
  related: [
    "biznes-akkaunt-instagram",
    "udalenie-akkaunta-instagram",
    "oformlenie-stranicy-instagram",
    "blog-instagram",
    "svyazka-instagram-facebook",
    "parol-instagram",
  ],
};

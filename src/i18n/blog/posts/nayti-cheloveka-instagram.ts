import type { BlogPost } from "../../../data/blog";

/** EN overlay for nayti-cheloveka-instagram — same structure as RU JSON. */
export const naytiChelovekaInstagramEn: BlogPost = {
  slug: "nayti-cheloveka-instagram",
  title: "How to find someone on Instagram: username, search, and contacts",
  date: "2020-10-29",
  category: "SMM",
  cover: "/images/blog/nayti-cheloveka-instagram/cover-en.webp",
  excerpt:
    "How to find an Instagram profile by username, name, hashtag, place, or contacts — without outdated screenshots or the myth that every action works without an account.",
  lead: [
    "Finding someone on Instagram is easiest by username or name in search. If you don’t have a handle — mutual friends, geotags, hashtags, and contact sync help.",
    "Below: working scenarios. App menus change; check the exact icons in your version. Without signing in, some profiles don’t open or are view-only. Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you view a profile without registering?",
      a: "Sometimes the public URL `instagram.com/username` opens in a browser. Full features and many profiles need a login. Commenting without an account usually isn’t possible.",
    },
    {
      q: "I can’t find them by name — what’s wrong?",
      a: "Display name isn’t the same as username. Check spelling, language, possible dots or digits in the handle. The profile may be private, deleted, or blocked.",
    },
    {
      q: "Does searching by phone number help?",
      a: "Via contact sync Instagram may suggest people you know. It’s optional and tied to privacy — turn it on deliberately.",
    },
    {
      q: "How is this different from the profile-link article?",
      a: "That one covers copying and building a URL. This one is finding a person when you don’t have a link yet.",
    },
    {
      q: "Can you search via VK?",
      a: "Sometimes people list Instagram on a VK profile or site. That’s a workaround, not official Instagram search.",
    },
  ],
  sections: [
    {
      title: "If you know the username",
      level: 2,
      paras: [
        "Open `https://www.instagram.com/username/` in a browser or paste the handle into the app search. That’s the fastest path.",
        "For actions (follow, message, comments) you need your own account. Public view without login is limited and unstable.",
      ],
      links: [
        {
          label: "Instagram profile link",
          href: "/en/blog/ssylka-instagram/",
        },
      ],
    },
    {
      title: "Search in the app",
      level: 2,
      paras: [
        "Search icon → Accounts tab: look by username or the name in the header. Tabs like popular, tags, and places help when there’s no handle but name or location are known.",
        "Hashtags and geotags narrow the circle, but popular tags take longer. Exact tab names have shifted — follow the meaning.",
      ],
      lists: [
        {
          intro: "What to try:",
          items: [
            "exact username",
            "first and last name / brand",
            "a related hashtag",
            "geo if you know the place",
            "mutual friends / photo tags",
          ],
        },
      ],
    },
    {
      title: "If the profile won’t show up",
      level: 2,
      paras: [
        "Check typos and alternate spellings. The person may have changed the handle, gone private, or deleted the account — then search can’t help.",
        "Don’t use shady “deanonymizer” services: phishing risk and leaking your own data.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Finding someone isn’t stalking. Respect private accounts.",
        },
      ],
    },
    {
      title: "Phone contacts and other networks",
      level: 2,
      paras: [
        "Instagram settings include options to link contacts and see people you may know. The list depends on who’s already on the network and who allows being found.",
        "Sometimes Instagram is listed on VK, a site, or a business card — check those sources if in-app search is quiet.",
      ],
      links: [
        {
          label: "Username generators",
          href: "/en/blog/generator-nikov/",
        },
        {
          label: "Instagram password",
          href: "/en/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Username and Accounts search are the base. Without a handle, name, geo, hashtags, and contacts work — worse and slower.",
        "A private or deleted profile can’t be “opened” with official tools.",
      ],
    },
  ],
  closing: [
    "Start with the URL or username search; if there’s no handle — name, mutual connections, and contacts. You’ll find people faster that way than through shady third-party services.",
  ],
  related: [
    "ssylka-instagram",
    "generator-nikov",
    "parol-instagram",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "stories-instagram-inkognito",
  ],
};

/** ES overlay for nayti-cheloveka-instagram — same structure as RU JSON / EN. */
export const naytiChelovekaInstagramEs: BlogPost = {
  slug: "nayti-cheloveka-instagram",
  title: "Cómo encontrar a alguien en Instagram: username, búsqueda y contactos",
  date: "2020-10-29",
  category: "SMM",
  cover: "/images/blog/nayti-cheloveka-instagram/cover-es.webp",
  excerpt:
    "Cómo encontrar un perfil de Instagram por username, nombre, hashtag, lugar o contactos — sin capturas obsoletas ni el mito de que cada acción funciona sin cuenta.",
  lead: [
    "Encontrar a alguien en Instagram es más fácil por username o nombre en la búsqueda. Si no tienes handle — ayudan amigos en común, geotags, hashtags y la sync de contactos.",
    "Abajo: escenarios que funcionan. Los menús de la app cambian; revisa los iconos exactos en tu versión. Sin iniciar sesión, algunos perfiles no se abren o son solo de vista. El disclaimer de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Se puede ver un perfil sin registrarse?",
      a: "A veces la URL pública `instagram.com/username` se abre en el navegador. Las funciones completas y muchos perfiles necesitan login. Comentar sin cuenta normalmente no es posible.",
    },
    {
      q: "No los encuentro por nombre — ¿qué falla?",
      a: "El display name no es lo mismo que el username. Revisa ortografía, idioma, posibles puntos o dígitos en el handle. El perfil puede ser privado, borrado o bloqueado.",
    },
    {
      q: "¿Ayuda buscar por número de teléfono?",
      a: "Vía sync de contactos Instagram puede sugerir gente que conoces. Es opcional y ligado a privacy — actívalo a propósito.",
    },
    {
      q: "¿En qué se diferencia del artículo del enlace de perfil?",
      a: "Ese cubre copiar y construir una URL. Este es encontrar a una persona cuando aún no tienes enlace.",
    },
    {
      q: "¿Se puede buscar vía VK?",
      a: "A veces la gente pone Instagram en un perfil de VK o en un sitio. Es un workaround, no la búsqueda oficial de Instagram.",
    },
  ],
  sections: [
    {
      title: "Si conoces el username",
      level: 2,
      paras: [
        "Abre `https://www.instagram.com/username/` en el navegador o pega el handle en la búsqueda de la app. Es el camino más rápido.",
        "Para acciones (follow, message, comentarios) necesitas tu propia cuenta. La vista pública sin login es limitada e inestable.",
      ],
      links: [
        {
          label: "Enlace de perfil de Instagram",
          href: "/es/blog/ssylka-instagram/",
        },
      ],
    },
    {
      title: "Búsqueda en la app",
      level: 2,
      paras: [
        "Icono de search → pestaña Accounts: busca por username o por el nombre del header. Pestañas como popular, tags y places ayudan cuando no hay handle pero se conoce el nombre o la ubicación.",
        "Hashtags y geotags estrechan el círculo, pero los tags populares tardan más. Los nombres exactos de pestañas han cambiado — sigue el sentido.",
      ],
      lists: [
        {
          intro: "Qué probar:",
          items: [
            "username exacto",
            "nombre y apellido / marca",
            "un hashtag relacionado",
            "geo si conoces el lugar",
            "amigos en común / tags en fotos",
          ],
        },
      ],
    },
    {
      title: "Si el perfil no aparece",
      level: 2,
      paras: [
        "Revisa typos y ortografías alternativas. La persona puede haber cambiado el handle, pasado a privado o borrado la cuenta — entonces la búsqueda no ayuda.",
        "No uses servicios dudosos de «deanonymizer»: riesgo de phishing y filtrar tus propios datos.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Encontrar a alguien no es stalking. Respeta las cuentas privadas.",
        },
      ],
    },
    {
      title: "Contactos del teléfono y otras redes",
      level: 2,
      paras: [
        "Los settings de Instagram incluyen opciones para vincular contactos y ver gente que quizá conoces. La lista depende de quién ya está en la red y quién permite ser encontrado.",
        "A veces Instagram aparece en VK, un sitio o una tarjeta de visita — revisa esas fuentes si la búsqueda in-app está en silencio.",
      ],
      links: [
        {
          label: "Generadores de username",
          href: "/es/blog/generator-nikov/",
        },
        {
          label: "Contraseña de Instagram",
          href: "/es/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Username y búsqueda en Accounts son la base. Sin handle, funcionan nombre, geo, hashtags y contactos — peor y más lento.",
        "Un perfil privado o borrado no se «abre» con herramientas oficiales.",
      ],
    },
  ],
  closing: [
    "Empieza por la URL o la búsqueda por username; si no hay handle — nombre, conexiones mutuas y contactos. Así encontrarás gente más rápido que con servicios dudosos de terceros.",
  ],
  related: [
    "ssylka-instagram",
    "generator-nikov",
    "parol-instagram",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "stories-instagram-inkognito",
  ],
};

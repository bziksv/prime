import type { BlogPost } from "../../../data/blog";

/** EN overlay for istoriya-poiska-instagram — same structure as RU JSON. */
export const istoriyaPoiskaInstagramEn: BlogPost = {
  slug: "istoriya-poiska-instagram",
  title: "Instagram search history: how to view and clear it",
  date: "2021-07-07",
  category: "SMM",
  cover: "/images/blog/istoriya-poiska-instagram/cover-en.webp",
  excerpt:
    "What Instagram saves in search history, why clear it, how to remove recent queries, and what clearing does not delete — without outdated button screenshots.",
  lead: [
    "Instagram* search remembers recent profiles, hashtags, and places — so you can return faster. The same list is visible to anyone who picks up an unlocked phone.",
    "Below: why clear history, how to do it in broad strokes, and what clearing doesn’t do. Menu labels change; follow the app’s current Help. The Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where do I see recent queries?",
      a: "Usually the search / magnifier tab → the Find or Search field: suggestions and recent accounts appear first. Labels depend on the app version.",
    },
    {
      q: "Does clearing history delete follows?",
      a: "No. Records of what you searched disappear — not follows, likes, saved items, or Direct.",
    },
    {
      q: "Will it speed up the phone?",
      a: "Barely. Search history is tiny. Slowness is more often app cache, memory, and network — not a handle list.",
    },
    {
      q: "Can someone see my history on their account?",
      a: "No. It’s data for your login on the device. The risk is someone using your unlocked phone or a shared session.",
    },
    {
      q: "Can I hide one profile from suggestions?",
      a: "Often yes: long-press / swipe a recent item → remove or hide. Check the exact gesture in the current UI.",
    },
    {
      q: "Does clearing affect recommendations?",
      a: "Slightly. Recommendations lean on follows, views, and interactions — not only the search bar.",
    },
    {
      q: "Should I clear after every session?",
      a: "No. It makes sense after someone else used the phone, before handing over a device, or if you don’t want recent queries visible at home/work.",
    },
    {
      q: "Is this the same as clearing Android/iOS app cache?",
      a: "No. System app-cache clear is separate. Search history is cleared inside Instagram*.",
    },
  ],
  sections: [
    {
      title: "What search saves",
      level: 2,
      paras: [
        "Recent queries are a handy shortcut: accounts, hashtags, and places you opened via search. The list appears when the search field is focused.",
        "It’s not a full log of everything in the app and not a substitute for account activity. For security, password, 2FA, and device sessions matter more.",
        "Explore suggestions and feed recommendations live separately: clearing recents doesn’t reset the algorithm entirely.",
      ],
      links: [
        {
          label: "How to find someone on Instagram",
          href: "/en/blog/nayti-cheloveka-instagram/",
        },
      ],
    },
    {
      title: "Why clear it",
      level: 2,
      paras: [
        "Privacy on a shared or work phone: a colleague or relative won’t see who you searched recently.",
        "Order in suggestions: old handles don’t get in the way of typing the current query.",
        "After you lent the phone for a minute or signed in on someone else’s device — sensible hygiene together with a password change if you suspect access.",
      ],
      lists: [
        {
          intro: "When clearing is especially useful:",
          items: [
            "you’re handing over or selling a smartphone",
            "you used someone else’s phone",
            "you don’t want work/personal queries visible at home",
            "you’re about to screen-record search",
          ],
        },
      ],
    },
    {
      title: "How to clear history (step logic)",
      level: 2,
      paras: [
        "Open your profile → settings (gear / menu). Find something like Search history and confirm clear. Meta changes wording and menu nesting.",
        "Alternative: in search itself, some items may offer clear all or one-by-one delete — if your version has it.",
        "After clearing, open the search field again: the recent list should be empty or much shorter. New queries will start accumulating again.",
      ],
      notes: [
        {
          title: "Don’t memorize the UI",
          kind: "tip",
          text: "2021 screenshots often lie. Search for history / recent / Search history by intent in settings or Instagram* Help — not “the third button on the right.”",
        },
      ],
    },
    {
      title: "Remove one query or hide a suggestion",
      level: 2,
      paras: [
        "Sometimes it’s enough to swipe or long-press a specific recent profile and choose remove from the list — without a full clear.",
        "Hiding recommendations (“not interested” / hide) in Explore blocks is a different function: it trains the suggestion feed, and doesn’t necessarily erase your search log.",
        "If the goal is not to show a specific nick, check both places: recents and recommendations.",
      ],
    },
    {
      title: "What clearing doesn’t do",
      level: 2,
      paras: [
        "It doesn’t sign you out on other devices — for that, check active sessions / Login activity.",
        "It doesn’t delete chats, ad orders, saved posts, or follows.",
        "It doesn’t guarantee someone won’t know you visited their profile: it could open via link, Direct, or recommendation, and that isn’t always written in your search history.",
      ],
      links: [
        {
          label: "Instagram password and access",
          href: "/en/blog/parol-instagram/",
        },
        {
          label: "Account lockout",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "Privacy is wider than one button",
      level: 2,
      paras: [
        "A lock screen, a separate iOS/Android profile, and signing out on others’ devices matter more than ritual search clearing every evening.",
        "For business on a shared tablet, use a separate staff account or a clear rule: who is logged in and when they sign out.",
        "Don’t install Instagram cleaners that ask for your password — that’s account-theft risk, not a faster search.",
      ],
      lists: [
        {
          intro: "Account hygiene minimum:",
          items: [
            "strong password + 2FA",
            "check active sessions",
            "clear search when handing over the phone",
            "refuse third-party apps that ask for login",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Search history is convenience and a risk on a shared screen; clear it in settings or per list item.",
        "Follows and content don’t disappear; the recommendation algorithm doesn’t fully reset.",
        "Security rests on password, sessions, and common sense — not the myth “cleared search = sped up the phone.”",
      ],
    },
  ],
  closing: [
    "Open settings → search history, clear the list, and check the search field — faster than installing a shady Instagram* optimizer.",
  ],
  related: [
    "nayti-cheloveka-instagram",
    "parol-instagram",
    "blokirovka-instagram",
    "zakrytyy-akkaunt-instagram",
    "stories-instagram-inkognito",
    "udalenie-akkaunta-instagram",
  ],
};

/** ES overlay for istoriya-poiska-instagram — same structure as RU JSON / EN. */
export const istoriyaPoiskaInstagramEs: BlogPost = {
  slug: "istoriya-poiska-instagram",
  title: "Historial de búsqueda de Instagram: cómo verlo y borrarlo",
  date: "2021-07-07",
  category: "SMM",
  cover: "/images/blog/istoriya-poiska-instagram/cover-es.webp",
  excerpt:
    "Qué guarda Instagram en el historial de búsqueda, por qué borrarlo, cómo quitar queries recientes y qué no borra el clear — sin capturas de botones obsoletas.",
  lead: [
    "La búsqueda de Instagram* recuerda perfiles, hashtags y lugares recientes — para volver más rápido. La misma lista la ve quien coja un teléfono desbloqueado.",
    "Abajo: por qué borrar el historial, cómo hacerlo a grandes rasgos y qué no hace el clear. Las etiquetas del menú cambian; sigue la Help actual de la app. El disclaimer de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Dónde veo las queries recientes?",
      a: "Suele ser la pestaña de búsqueda / lupa → el campo Find o Search: primero aparecen sugerencias y cuentas recientes. Las etiquetas dependen de la versión de la app.",
    },
    {
      q: "¿Borrar el historial elimina follows?",
      a: "No. Desaparecen los registros de lo que buscaste — no follows, likes, guardados ni Direct.",
    },
    {
      q: "¿Acelerará el teléfono?",
      a: "Casi nada. El historial de búsqueda es mínimo. La lentitud suele ser caché de la app, memoria y red — no una lista de handles.",
    },
    {
      q: "¿Alguien puede ver mi historial en su cuenta?",
      a: "No. Son datos de tu login en el dispositivo. El riesgo es que alguien use tu teléfono desbloqueado o una sesión compartida.",
    },
    {
      q: "¿Puedo ocultar un perfil de las sugerencias?",
      a: "A menudo sí: long-press / swipe en un ítem reciente → quitar u ocultar. Revisa el gesto exacto en la UI actual.",
    },
    {
      q: "¿El clear afecta a las recomendaciones?",
      a: "Poco. Las recomendaciones se apoyan en follows, vistas e interacciones — no solo en la barra de búsqueda.",
    },
    {
      q: "¿Debo borrar tras cada sesión?",
      a: "No. Tiene sentido tras que otra persona usó el teléfono, antes de entregar un dispositivo, o si no quieres queries recientes visibles en casa/trabajo.",
    },
    {
      q: "¿Es lo mismo que borrar la caché de la app en Android/iOS?",
      a: "No. El clear de caché del sistema es aparte. El historial de búsqueda se borra dentro de Instagram*.",
    },
  ],
  sections: [
    {
      title: "Qué guarda la búsqueda",
      level: 2,
      paras: [
        "Las queries recientes son un atajo práctico: cuentas, hashtags y lugares que abriste vía búsqueda. La lista aparece al enfocar el campo de búsqueda.",
        "No es un log completo de todo en la app ni un sustituto de la actividad de la cuenta. Para seguridad importan más contraseña, 2FA y sesiones del dispositivo.",
        "Las sugerencias de Explore y las recomendaciones del feed viven aparte: borrar recents no resetea el algoritmo por completo.",
      ],
      links: [
        {
          label: "Cómo encontrar a alguien en Instagram",
          href: "/blog/nayti-cheloveka-instagram/",
        },
      ],
    },
    {
      title: "Por qué borrarlo",
      level: 2,
      paras: [
        "Privacidad en un teléfono compartido o de trabajo: un colega o familiar no verá a quién buscaste hace poco.",
        "Orden en las sugerencias: handles viejos no estorban al teclear la query actual.",
        "Tras prestar el teléfono un minuto o iniciar sesión en el dispositivo de otro — higiene sensata junto con un cambio de contraseña si sospechas acceso.",
      ],
      lists: [
        {
          intro: "Cuándo el clear es especialmente útil:",
          items: [
            "entregas o vendes un smartphone",
            "usaste el teléfono de otra persona",
            "no quieres queries de trabajo/personales visibles en casa",
            "vas a grabar la pantalla de búsqueda",
          ],
        },
      ],
    },
    {
      title: "Cómo borrar el historial (lógica de pasos)",
      level: 2,
      paras: [
        "Abre tu perfil → ajustes (engranaje / menú). Busca algo tipo Search history y confirma el clear. Meta cambia el wording y el anidado del menú.",
        "Alternativa: en la búsqueda misma, algunos ítems pueden ofrecer clear all o borrar uno a uno — si tu versión lo tiene.",
        "Tras borrar, abre de nuevo el campo de búsqueda: la lista reciente debería estar vacía o mucho más corta. Las queries nuevas volverán a acumularse.",
      ],
      notes: [
        {
          title: "No memorices la UI",
          kind: "tip",
          text: "Las capturas de 2021 a menudo mienten. Busca history / recent / Search history por intención en ajustes o en la Help de Instagram* — no «el tercer botón a la derecha».",
        },
      ],
    },
    {
      title: "Quitar una query u ocultar una sugerencia",
      level: 2,
      paras: [
        "A veces basta con swipe o long-press en un perfil reciente concreto y elegir quitar de la lista — sin un clear completo.",
        "Ocultar recomendaciones («not interested» / hide) en bloques de Explore es otra función: entrena el feed de sugerencias y no necesariamente borra tu log de búsqueda.",
        "Si el objetivo es no mostrar un nick concreto, revisa ambos sitios: recents y recomendaciones.",
      ],
    },
    {
      title: "Qué no hace el clear",
      level: 2,
      paras: [
        "No cierra sesión en otros dispositivos — para eso revisa sesiones activas / Login activity.",
        "No borra chats, pedidos de ads, posts guardados ni follows.",
        "No garantiza que nadie sepa que visitaste su perfil: pudo abrirse por enlace, Direct o recomendación, y eso no siempre queda escrito en tu historial de búsqueda.",
      ],
      links: [
        {
          label: "Contraseña y acceso en Instagram",
          href: "/es/blog/parol-instagram/",
        },
        {
          label: "Bloqueo de cuenta",
          href: "/es/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "La privacidad es más que un botón",
      level: 2,
      paras: [
        "La pantalla de bloqueo, un perfil aparte de iOS/Android y cerrar sesión en dispositivos ajenos importan más que un ritual de borrar búsqueda cada noche.",
        "Para negocio en una tablet compartida, usa una cuenta de staff aparte o una regla clara: quién está logueado y cuándo cierra sesión.",
        "No instales «limpiadores» de Instagram que pidan tu contraseña — es riesgo de robo de cuenta, no una búsqueda más rápida.",
      ],
      lists: [
        {
          intro: "Higiene mínima de la cuenta:",
          items: [
            "contraseña fuerte + 2FA",
            "revisar sesiones activas",
            "borrar búsqueda al entregar el teléfono",
            "rechazar apps de terceros que pidan login",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "El historial de búsqueda es comodidad y un riesgo en una pantalla compartida; bórralo en ajustes o por ítem de la lista.",
        "Follows y contenido no desaparecen; el algoritmo de recomendaciones no se resetea del todo.",
        "La seguridad se apoya en contraseña, sesiones y sentido común — no en el mito «borré búsqueda = aceleré el teléfono».",
      ],
    },
  ],
  closing: [
    "Abre ajustes → search history, borra la lista y revisa el campo de búsqueda — más rápido que instalar un «optimizador» dudoso de Instagram*.",
  ],
  related: [
    "nayti-cheloveka-instagram",
    "parol-instagram",
    "blokirovka-instagram",
    "zakrytyy-akkaunt-instagram",
    "stories-instagram-inkognito",
    "udalenie-akkaunta-instagram",
  ],
};

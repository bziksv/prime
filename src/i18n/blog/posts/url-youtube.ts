import type { BlogPost } from "../../../data/blog";

/** EN overlay for url-youtube — same structure as RU JSON. */
export const urlYoutubeEn: BlogPost = {
  slug: "url-youtube",
  title: "YouTube channel URL: how to make a readable link",
  date: "2020-11-18",
  category: "SMM",
  cover: "/images/blog/url-youtube/cover-en.webp",
  excerpt:
    "How a short channel address differs from an ID, what conditions YouTube usually sets, and how to change the link without outdated screenshots — with a note on @handles and change limits.",
  lead: [
    "Instead of a long channel ID, a short readable link is easier: simpler to dictate, put on a card, and in social headers. On YouTube this was historically a “custom URL”; today the @handle format is more common.",
    "Below: why a short link helps, typical access conditions, and the logic of changing it. Studio menus and thresholds (subscribers, channel age) have shifted — check YouTube Help. We don’t copy old “gear → Advanced” screenshots as a 1:1 guide.",
  ],
  faq: [
    {
      q: "Is it the same as an @handle in the about section?",
      a: "Related: the short channel address and public handle are part of identity. Exact field names live in current Studio.",
    },
    {
      q: "How many times can you change it?",
      a: "Limits existed and still do: people often mentioned a few changes per period. Don’t plan a monthly URL rebrand.",
    },
    {
      q: "Will the old link break?",
      a: "Usually former channel URLs keep opening the channel. Still better to update key surfaces to the new address.",
    },
    {
      q: "Why is there no change-URL item?",
      a: "Conditions aren’t met, the UI moved, or the feature sits elsewhere (profile / channel settings). Check Studio and Help.",
    },
    {
      q: "Can you pick any handle?",
      a: "No: availability, brand rules, and allowed characters. Sometimes the system suggests options from profile data.",
    },
  ],
  sections: [
    {
      title: "Why a short URL",
      level: 2,
      paras: [
        "A readable address strengthens the brand: `youtube.com/@brand` is easier than a `channel/UC…` string. It doesn’t replace content or video SEO, but it cuts friction when sharing.",
        "For business keep one canonical address everywhere: site, card, email signature, ads.",
      ],
      links: [
        {
          label: "YouTube channel description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Typical access conditions",
      level: 2,
      paras: [
        "Historically YouTube opened a custom URL after basic channel “maturity”: subscriber count, account age, set avatar/banner and description. Exact thresholds changed — the old “100 subscribers / 30 days” guide may no longer apply.",
        "If the item is missing, finish channel branding and activity first, then check current requirements in Help.",
      ],
      lists: [
        {
          intro: "Before changing, check:",
          items: [
            "avatar and banner follow the rules",
            "channel description exists",
            "account is in good standing (no hard strikes or limits)",
            "desired handle is free and pronounceable",
            "you’ve planned for repeat-change limits",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t promise yourself “any handle in a minute.” Often you get suggested options or a handle with constraints.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to change: logic, not a 2020 screenshot",
      level: 2,
      paras: [
        "Open YouTube Studio → channel settings / profile and find the block for URL, custom name, or @handle. Pick an available option, confirm the rules.",
        "Spreading the new address can take from a few minutes to a noticeable pause. While you update external links, the old address usually still works.",
      ],
      links: [
        {
          label: "YouTube avatar",
          href: "/en/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "If options are few or odd",
      level: 2,
      paras: [
        "Sometimes the system suggests combos of name, brand, or suffixes. Updating the channel name, site in the profile, and key data may later unlock other options — with no guaranteed day-or-week timeline.",
        "Don’t drop working external links until the new canon is locked. If the feature is unavailable despite meeting conditions — contacting support is fair.",
      ],
    },
    {
      title: "Nuances after the change",
      level: 2,
      paras: [
        "Old URLs often stay valid — good for link history, bad if you want to forget the old name. Finish the rebrand by updating the site, cards, and ad creatives.",
        "A short address doesn’t boost algorithms by itself. Growth comes from videos, retention, and topic/keyword fit — see related pieces.",
      ],
      links: [
        {
          label: "Keywords for YouTube",
          href: "/en/blog/kluchi-youtube/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A short URL or @handle is about convenience and brand. Conditions and menus change; change limits are real.",
        "Check YouTube Help, pick a pronounceable option, and sync it everywhere the channel link lives.",
      ],
    },
  ],
  closing: [
    "Check current requirements in Studio, pick a readable address, and update it on the site and social profiles — so the link stops being an ID cipher.",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "kluchi-youtube",
    "avatar-youtube",
    "montazh-youtube",
    "strayk-youtube",
  ],
};

/** ES overlay for url-youtube — same structure as RU JSON / EN. */
export const urlYoutubeEs: BlogPost = {
  slug: "url-youtube",
  title: "URL del canal de YouTube: cómo hacer un enlace legible",
  date: "2020-11-18",
  category: "SMM",
  cover: "/images/blog/url-youtube/cover-es.webp",
  excerpt:
    "En qué se diferencia una dirección corta del canal de un ID, qué condiciones suele poner YouTube y cómo cambiar el enlace sin capturas obsoletas — con una nota sobre @handles y límites de cambio.",
  lead: [
    "En lugar de un ID largo de canal, un enlace corto y legible es más fácil: más simple de dictar, poner en una tarjeta y en headers de redes. En YouTube esto fue históricamente una «custom URL»; hoy es más habitual el formato @handle.",
    "Abajo: por qué ayuda un enlace corto, condiciones típicas de acceso y la lógica de cambiarlo. Los menús de Studio y los umbrales (subscribers, antigüedad del canal) han cambiado — consulta YouTube Help. No copiamos capturas viejas de «gear → Advanced» como guía 1:1.",
  ],
  faq: [
    {
      q: "¿Es lo mismo que un @handle en la sección about?",
      a: "Relacionado: la dirección corta del canal y el handle público forman parte de la identidad. Los nombres exactos de campos viven en el Studio actual.",
    },
    {
      q: "¿Cuántas veces se puede cambiar?",
      a: "Hubo y hay límites: a menudo se hablaba de unos pocos cambios por periodo. No planifiques un rebrand mensual de URL.",
    },
    {
      q: "¿Se romperá el enlace antiguo?",
      a: "Suele ser que las URLs anteriores del canal siguen abriendo el canal. Aun así conviene actualizar las superficies clave a la nueva dirección.",
    },
    {
      q: "¿Por qué no aparece el ítem de cambiar URL?",
      a: "No se cumplen las condiciones, la UI se movió o la función está en otro sitio (profile / channel settings). Revisa Studio y Help.",
    },
    {
      q: "¿Puedes elegir cualquier handle?",
      a: "No: disponibilidad, reglas de marca y caracteres permitidos. A veces el sistema sugiere opciones a partir de datos del perfil.",
    },
  ],
  sections: [
    {
      title: "Por qué una URL corta",
      level: 2,
      paras: [
        "Una dirección legible refuerza la marca: `youtube.com/@brand` es más fácil que una cadena `channel/UC…`. No sustituye el contenido ni el SEO de vídeo, pero baja la fricción al compartir.",
        "Para negocio mantén una dirección canónica en todas partes: sitio, tarjeta, firma de email, ads.",
      ],
      links: [
        {
          label: "Descripción del canal de YouTube",
          href: "/es/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Promoción en YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Condiciones típicas de acceso",
      level: 2,
      paras: [
        "Históricamente YouTube abría una custom URL tras una «madurez» básica del canal: número de subscribers, antigüedad de la cuenta, avatar/banner y descripción puestos. Los umbrales exactos cambiaron — la guía vieja de «100 subscribers / 30 days» puede ya no aplicar.",
        "Si el ítem falta, termina primero el branding y la actividad del canal, luego revisa los requisitos actuales en Help.",
      ],
      lists: [
        {
          intro: "Antes de cambiar, revisa:",
          items: [
            "avatar y banner siguen las reglas",
            "existe descripción del canal",
            "la cuenta está en buen estado (sin hard strikes ni límites duros)",
            "el handle deseado está libre y es pronunciable",
            "has planificado los límites de cambios repetidos",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          text: "No te prometas «cualquier handle en un minuto». A menudo te dan opciones sugeridas o un handle con restricciones.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cómo cambiar: lógica, no una captura de 2020",
      level: 2,
      paras: [
        "Abre YouTube Studio → channel settings / profile y busca el bloque de URL, custom name o @handle. Elige una opción disponible y confirma las reglas.",
        "Difundir la nueva dirección puede tardar desde unos minutos hasta una pausa notable. Mientras actualizas enlaces externos, la dirección antigua suele seguir funcionando.",
      ],
      links: [
        {
          label: "Avatar de YouTube",
          href: "/es/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "Si las opciones son pocas o raras",
      level: 2,
      paras: [
        "A veces el sistema sugiere combos de nombre, marca o sufijos. Actualizar el nombre del canal, el sitio en el perfil y datos clave puede más tarde desbloquear otras opciones — sin timeline garantizado de día o semana.",
        "No tires enlaces externos que funcionan hasta que el nuevo canon esté fijado. Si la función no está disponible pese a cumplir condiciones — contactar a support es razonable.",
      ],
    },
    {
      title: "Matices tras el cambio",
      level: 2,
      paras: [
        "Las URLs antiguas a menudo siguen válidas — bien para el historial de enlaces, mal si quieres olvidar el nombre viejo. Cierra el rebrand actualizando sitio, tarjetas y creatividades de ads.",
        "Una dirección corta no sube algoritmos por sí sola. El crecimiento viene de vídeos, retention y encaje de tema/keywords — ver piezas relacionadas.",
      ],
      links: [
        {
          label: "Keywords para YouTube",
          href: "/es/blog/kluchi-youtube/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Una URL corta o @handle es sobre comodidad y marca. Condiciones y menús cambian; los límites de cambio son reales.",
        "Consulta YouTube Help, elige una opción pronunciable y sincronízala en todas partes donde viva el enlace del canal.",
      ],
    },
  ],
  closing: [
    "Revisa los requisitos actuales en Studio, elige una dirección legible y actualízala en el sitio y perfiles sociales — para que el enlace deje de ser un cifrado de ID.",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "kluchi-youtube",
    "avatar-youtube",
    "montazh-youtube",
    "strayk-youtube",
  ],
};

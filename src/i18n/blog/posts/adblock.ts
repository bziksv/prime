import type { BlogPost } from "../../../data/blog";

/** EN overlay for adblock — same structure as RU JSON. */
export const adblockEn: BlogPost = {
  slug: "adblock",
  title: "What AdBlock is and how to use it without surprises",
  date: "2020-09-29",
  category: "Digital marketing",
  cover: "/images/blog/adblock/cover-en.webp",
  excerpt:
    "AdBlock and similar tools hide ads in the browser. Why people install them, how to pause one site, and why blockers also cut widgets and analytics.",
  lead: [
    "AdBlock — and peers like AdBlock Plus, uBlock Origin, and others — are browser extensions that hide ads, trackers, and some pop-ups using filter lists.",
    "Below: why people turn them on, how to allow ads on a site you care about, and what that means for site owners. Button labels differ by browser and version — trust the idea (“pause on this site”), not an old screenshot.",
  ],
  faq: [
    {
      q: "Are AdBlock and AdBlock Plus the same thing?",
      a: "Different products, same job category. Other blockers exist too. Shared logic: filters plus per-site exceptions.",
    },
    {
      q: "Why is the site empty or the video won’t play?",
      a: "Players, “acceptable ads,” checkout, and chat scripts often get blocked too. Add the site to exceptions or turn the extension off on that domain.",
    },
    {
      q: "Does it affect Yandex Metrica or Analytics?",
      a: "Yes — some visits and goals never reach the counter. When debugging, open the site without a blocker. See also the piece on Metrica going silent.",
    },
    {
      q: "How do I disable it on one site only?",
      a: "Use the extension icon: pause / “don’t run on this site” (wording varies). Full uninstall is rarely needed — an exception is usually enough.",
    },
    {
      q: "Is using an ad blocker legal?",
      a: "Users may install extensions. Sites may limit access when a blocker is on. Paywall bypass and piracy are a separate ethical and legal story — not covered here.",
    },
  ],
  sections: [
    {
      title: "Why people install it and how it works",
      level: 2,
      paras: [
        "The job is simple: fewer distractions — banners, autoplay video, trackers. Plenty of people enable blockers for heavy pages and privacy, not just to be difficult.",
        "The extension subscribes to filter lists and hides matching elements. You can add custom filters and allowlists. Products differ on “acceptable ads” policy and fine-grained settings.",
        "Side effect: feedback widgets, A/B tests, ad pixels, and analytics counters get cut along with banners. For the user it’s “the site broke”; for marketing it’s a hole in the data.",
      ],
      lists: [
        {
          intro: "Typical upsides for the user:",
          items: [
            "less visual noise",
            "pages often feel lighter",
            "some trackers never fire",
            "you can allow favorite sites one by one",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Types of advertising",
          href: "/en/blog/vidy-reklamy/",
        },
      ],
    },
    {
      title: "Pause, exceptions, and the site owner’s view",
      level: 2,
      paras: [
        "Install from your browser’s extension store, then manage pause and exceptions from the toolbar icon.",
        "Disable on the current page or the whole domain via the icon menu (“don’t run on this site” / pause). Full removal lives under browser extensions; pause is usually enough. Edit exception lists in the extension settings.",
        "If a video host or publisher asks you to turn the blocker off, that’s their rule for access. Add the domain to the allowlist if you’re fine seeing ads in exchange for the material.",
        "For site owners: aggressive ads raise AdBlock share. Lighten pages, don’t bury content under stacked popups, and remember part of the audience is invisible in analytics. Don’t build a business on grey-zone blocker bypass — better value and cleaner monetization beat cat-and-mouse scripts.",
        "Bottom line: AdBlock is a comfort tool. Know how to pause it for sites you need; in marketing, bake blockers into how you read the numbers.",
      ],
      lists: [
        {
          intro: "If a site you need “broke”:",
          items: [
            "pause the extension on the domain",
            "reload the page",
            "try another browser without a blocker",
            "don’t confuse it with antivirus or VPN filters",
            "for counter debugging — incognito with extensions off",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics (behavior)",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Ad banners",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
  ],
  related: [
    "metrika-ne-rabotaet",
    "vidy-reklamy",
    "google-analytics",
    "ga4",
    "reklamnyy-banner",
  ],
};

/** ES overlay for adblock — same structure as RU JSON / EN. */
export const adblockEs: BlogPost = {
  slug: "adblock",
  title: "Qué es AdBlock y cómo usarlo sin sorpresas",
  date: "2020-09-29",
  category: "Digital marketing",
  cover: "/images/blog/adblock/cover-es.webp",
  excerpt:
    "AdBlock y tools parecidas ocultan ads en el navegador. Por qué la gente las instala, cómo pausar un sitio y por qué los blockers también cortan widgets y analytics.",
  lead: [
    "AdBlock — y pares como AdBlock Plus, uBlock Origin y otros — son extensiones del navegador que ocultan ads, trackers y algunos pop-ups con listas de filtros.",
    "Abajo: por qué la gente las enciende, cómo permitir ads en un sitio que te importa y qué significa eso para dueños de sitios. Las etiquetas de botones difieren por navegador y versión — confía en la idea («pausar en este sitio»), no en un screenshot viejo.",
  ],
  faq: [
    {
      q: "¿AdBlock y AdBlock Plus son lo mismo?",
      a: "Productos distintos, misma categoría de trabajo. Hay otros blockers también. Lógica compartida: filtros más excepciones por sitio.",
    },
    {
      q: "¿Por qué el sitio está vacío o el vídeo no reproduce?",
      a: "Players, «acceptable ads», checkout y scripts de chat a menudo también se bloquean. Añade el sitio a excepciones o apaga la extensión en ese dominio.",
    },
    {
      q: "¿Afecta a Yandex Metrica o Analytics?",
      a: "Sí — algunas visitas y metas nunca llegan al contador. Al depurar, abre el sitio sin blocker. Ver también la pieza sobre Metrica en silencio.",
    },
    {
      q: "¿Cómo lo desactivo solo en un sitio?",
      a: "Usa el icono de la extensión: pausar / «no ejecutar en este sitio» (el wording varía). Desinstalar del todo rara vez hace falta — una excepción suele bastar.",
    },
    {
      q: "¿Es legal usar un ad blocker?",
      a: "Los usuarios pueden instalar extensiones. Los sitios pueden limitar el acceso cuando hay un blocker. Bypass de paywall y piratería son otra historia ética y legal — no se cubre aquí.",
    },
  ],
  sections: [
    {
      title: "Por qué se instala y cómo funciona",
      level: 2,
      paras: [
        "El trabajo es simple: menos distracciones — banners, vídeo autoplay, trackers. Bastante gente activa blockers por páginas pesadas y privacidad, no solo para ser difíciles.",
        "La extensión se suscribe a listas de filtros y oculta elementos que coinciden. Puedes añadir filtros custom y allowlists. Los productos diferencian en política de «acceptable ads» y ajustes finos.",
        "Efecto colateral: widgets de feedback, A/B tests, píxeles de ads y contadores de analytics se cortan junto con los banners. Para el usuario es «el sitio se rompió»; para marketing es un agujero en los datos.",
      ],
      lists: [
        {
          intro: "Upsides típicos para el usuario:",
          items: [
            "menos ruido visual",
            "las páginas a menudo se sienten más ligeras",
            "algunos trackers no disparan",
            "puedes permitir sitios favoritos uno a uno",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Tipos de publicidad",
          href: "/es/blog/vidy-reklamy/",
        },
      ],
    },
    {
      title: "Pausa, excepciones y la mirada del dueño del sitio",
      level: 2,
      paras: [
        "Instala desde la tienda de extensiones de tu navegador y gestiona pausa y excepciones desde el icono de la barra.",
        "Desactiva en la página actual o en todo el dominio vía el menú del icono («no ejecutar en este sitio» / pausa). La retirada completa está en extensiones del navegador; la pausa suele bastar. Edita listas de excepciones en los ajustes de la extensión.",
        "Si un host de vídeo o un publisher te pide apagar el blocker, es su regla de acceso. Añade el dominio a la allowlist si te vale ver ads a cambio del material.",
        "Para dueños de sitios: ads agresivos suben la cuota de AdBlock. Aligera páginas, no entierres el contenido bajo popups apilados y recuerda que parte de la audiencia es invisible en analytics. No armes un negocio sobre bypass grey-zone del blocker — mejor valor y monetización más limpia ganan a scripts de gato y ratón.",
        "En resumen: AdBlock es una tool de comodidad. Sabe pausarlo en sitios que necesitas; en marketing, mete blockers en cómo lees las cifras.",
      ],
      lists: [
        {
          intro: "Si un sitio que necesitas «se rompió»:",
          items: [
            "pausa la extensión en el dominio",
            "recarga la página",
            "prueba otro navegador sin blocker",
            "no lo confundas con filtros de antivirus o VPN",
            "para depurar contadores — incógnito con extensiones apagadas",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics (comportamiento)",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Banners publicitarios",
          href: "/es/blog/reklamnyy-banner/",
        },
      ],
    },
  ],
  related: [
    "metrika-ne-rabotaet",
    "vidy-reklamy",
    "google-analytics",
    "ga4",
    "reklamnyy-banner",
  ],
};

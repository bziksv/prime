import type { BlogPost } from "../../../data/blog";

/** EN overlay for minusinsk — same structure as RU JSON. */
export const minusinskEn: BlogPost = {
  slug: "minusinsk",
  title: "Yandex Minusinsk: the filter for bought links",
  date: "2017-04-25",
  category: "SEO",
  cover: "/images/blog/minusinsk/cover-en.webp",
  excerpt:
    "What the Minusinsk algorithm is: sanctions for low-quality link spam, how to suspect a problem, what to do with junk backlinks, and how it differs from text filters like Baden-Baden.",
  lead: [
    "Minusinsk was a Yandex wave against manipulative link spam: cheap submissions and “links for rankings” packs hurt positions more than they helped. The announcement is tied to 2015; donor-quality logic hasn’t disappeared since.",
    "Below: what was punished, how to tell a link hit from seasonality, and what to do without gray-hat “removal schemes.” Broader drop diagnosis is in the filters piece; buying links is a separate risk article.",
  ],
  faq: [
    {
      q: "Does Minusinsk still turn on in batches?",
      a: "The name is historical. Yandex weighs link spam continuously. Don’t wait for a wave calendar as the only lever.",
    },
    {
      q: "How is it different from Baden-Baden?",
      a: "Minusinsk is about links. Baden-Baden is about over-optimized text.",
    },
    {
      q: "Are sanctions based on link count alone?",
      a: "More for quality and unnatural mass — not for “few/many” by itself.",
    },
    {
      q: "Am I banned forever?",
      a: "Usually not: after cleaning the profile and a recrawl, rankings can return. Timeline — months, not days. Don’t promise a page-one date.",
    },
    {
      q: "Will buying even more links help?",
      a: "Often makes it worse. First remove controllable junk and strengthen content/tech.",
    },
    {
      q: "Is a Disavow file required?",
      a: "Selectively and deliberately if there’s clear spam outside your control. Mass disavow “just in case” hurts.",
    },
    {
      q: "How do I check the backlink profile?",
      a: "Webmaster plus Ahrefs/Serpstat/analog exports: donors, anchors, dynamics. See the backlink profile article.",
    },
  ],
  sections: [
    {
      title: "Why Minusinsk existed",
      level: 2,
      paras: [
        "While links stayed a strong signal, the market flooded with exchanges and submission runs. Yandex answered harder on sold and irrelevant mass.",
        "Not only small sites got hit: large projects with aggressive buying suffered too. A count of “trusted” links didn’t save weak quality.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "How to suspect a problem",
      level: 2,
      paras: [
        "A sharp drop in the commercial keyword set with stable demand, Webmaster messages, a spike of toxic donors in reports — reasons to audit links.",
        "Separate season, a site rebuild, and a technical failure. Not every ranking drop is Minusinsk.",
      ],
      lists: [
        {
          intro: "Quick diagnosis:",
          items: [
            "drop date vs buying/submission history",
            "demand in Wordstat year over year",
            "Webmaster: security and quality",
            "a slice of donors and anchors",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "What to do",
      level: 2,
      paras: [
        "Stop growing junk. Remove what you control: your own networks, exchange packs, contractual placements on drops.",
        "Next — a natural profile: relevant donors, moderate anchors, content and PR instead of “N links a day.”",
        "Wait for recrawl for months; monitor the keyword set. “Remove the filter in a week” is gray-service marketing, not a method.",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
        {
          label: "Baden-Baden and copy",
          href: "/en/blog/baden-baden/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Minusinsk 2015+ is a historical name for link sanctions. Check current rules in Yandex Help. Don’t use this piece as a guide to manipulation or a bypass.",
  },
  closing: [
    "If you recently bought packs or ran submissions — first clean controllable junk and check the profile in Webmaster; that sits closer to Minusinsk logic than another cheap link batch.",
  ],
  related: [
    "filtry-poiskovikov",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "tipy-ssylok",
    "baden-baden",
    "negativnoe-seo",
  ],
};

/** ES overlay for minusinsk — same structure as RU JSON / EN. */
export const minusinskEs: BlogPost = {
  slug: "minusinsk",
  title: "Minusinsk de Yandex: el filtro por enlaces comprados",
  date: "2017-04-25",
  category: "SEO",
  cover: "/images/blog/minusinsk/cover-es.webp",
  excerpt:
    "Qué es el algoritmo Minusinsk: sanciones por spam de enlaces de baja calidad, cómo sospechar un problema, qué hacer con backlinks basura, y en qué se diferencia de filtros de texto como Baden-Baden.",
  lead: [
    "Minusinsk fue una ola de Yandex contra el spam de enlaces manipulativo: submissions baratos y packs de «enlaces por rankings» dañaban más las posiciones de lo que ayudaban. El anuncio se liga a 2015; la lógica de calidad del donor no ha desaparecido desde entonces.",
    "Abajo: qué se castigó, cómo distinguir un golpe de enlaces de la estacionalidad, y qué hacer sin «esquemas de quitar» gray-hat. El diagnóstico más amplio de caídas está en la pieza de filtros; comprar enlaces es un artículo de riesgo aparte.",
  ],
  faq: [
    {
      q: "¿Minusinsk sigue activándose por lotes?",
      a: "El nombre es histórico. Yandex pesa el spam de enlaces de continuo. No esperes un calendario de olas como única palanca.",
    },
    {
      q: "¿En qué se diferencia de Baden-Baden?",
      a: "Minusinsk va de enlaces. Baden-Baden va de texto sobre-optimizado.",
    },
    {
      q: "¿Las sanciones se basan solo en el conteo de enlaces?",
      a: "Más por calidad y masa antinatural — no por «pocos/muchos» por sí solo.",
    },
    {
      q: "¿Estoy baneado para siempre?",
      a: "Normalmente no: tras limpiar el perfil y un recrawl, los rankings pueden volver. Plazo — meses, no días. No prometas una fecha de primera página.",
    },
    {
      q: "¿Ayuda comprar aún más enlaces?",
      a: "A menudo empeora. Primero quita la basura controlable y refuerza contenido/técnica.",
    },
    {
      q: "¿Hace falta un archivo Disavow?",
      a: "De forma selectiva y deliberada si hay spam claro fuera de tu control. Un disavow masivo «por si acaso» perjudica.",
    },
    {
      q: "¿Cómo reviso el perfil de backlinks?",
      a: "Webmaster más exports de Ahrefs/Serpstat/análogos: donors, anclas, dinámica. Mira el artículo del perfil de backlinks.",
    },
  ],
  sections: [
    {
      title: "Por qué existió Minusinsk",
      level: 2,
      paras: [
        "Mientras los enlaces seguían siendo una señal fuerte, el mercado se inundó de exchanges y corridas de submissions. Yandex respondió más duro a la masa vendida e irrelevante.",
        "No solo cayeron sitios pequeños: también proyectos grandes con compra agresiva. Un conteo de enlaces «de confianza» no salvaba la calidad floja.",
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Comprar enlaces: riesgos",
          href: "/es/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Cómo sospechar un problema",
      level: 2,
      paras: [
        "Una caída brusca del set comercial de keywords con demanda estable, mensajes de Webmaster, un pico de donors tóxicos en informes — motivos para auditar enlaces.",
        "Separa temporada, un rebuild del sitio y un fallo técnico. No toda caída de rankings es Minusinsk.",
      ],
      lists: [
        {
          intro: "Diagnóstico rápido:",
          items: [
            "fecha de la caída vs historial de compra/submissions",
            "demanda en Wordstat año a año",
            "Webmaster: seguridad y calidad",
            "un corte de donors y anclas",
          ],
        },
      ],
      links: [
        {
          label: "Análisis del perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Qué hacer",
      level: 2,
      paras: [
        "Deja de crecer basura. Quita lo que controlas: tus propias redes, packs de exchanges, placements contractuales en drops.",
        "Después — un perfil natural: donors relevantes, anclas moderadas, contenido y PR en vez de «N enlaces al día».",
        "Espera el recrawl durante meses; monitorea el set de keywords. «Quitar el filtro en una semana» es marketing de servicios grises, no un método.",
      ],
      links: [
        {
          label: "Tipos de enlaces",
          href: "/es/blog/tipy-ssylok/",
        },
        {
          label: "Baden-Baden y copy",
          href: "/es/blog/baden-baden/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Minusinsk 2015+ es un nombre histórico de sanciones por enlaces. Revisa las reglas actuales en la Ayuda de Yandex. No uses esta pieza como guía de manipulación ni de bypass.",
  },
  closing: [
    "Si hace poco compraste packs o corriste submissions — primero limpia la basura controlable y revisa el perfil en Webmaster; eso se acerca más a la lógica de Minusinsk que otro lote barato de enlaces.",
  ],
  related: [
    "filtry-poiskovikov",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "tipy-ssylok",
    "baden-baden",
    "negativnoe-seo",
  ],
};

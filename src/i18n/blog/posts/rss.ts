import type { BlogPost } from "../../../data/blog";

/** EN overlay for rss — same structure as RU JSON. */
export const rssEn: BlogPost = {
  slug: "rss",
  title: "Site RSS: why you need it and how to enable it",
  date: "2020-06-30",
  category: "Content marketing",
  cover: "/images/blog/rss/cover-en.webp",
  excerpt:
    "What an RSS feed is, who still benefits from it, benefits and risks for a site, how to enable a feed on a CMS — without a Feedburner cult or “link mass” promises.",
  lead: [
    "RSS is an XML feed of article teasers and links to full pages. Readers gather several sites in one reader; the site publishes new posts without forcing a homepage visit every time.",
    "The format is less visible than in the 2010s — social and push notifications pulled attention away. For blogs, media, and docs, the feed is still useful. Below: why keep RSS, which risks to watch, and how to enable it on a typical CMS. Reader and generator lists change — check current services.",
  ],
  faq: [
    {
      q: "Is RSS still alive?",
      a: "Yes, but the audience is smaller. Useful for reader subscribers, aggregators, integrations, and as a technical feed for your own channels.",
    },
    {
      q: "Is it an SEO ranking factor?",
      a: "Directly — almost never. Indirectly — repeat visits from loyal readers and distribution. Don’t confuse it with “pumping link mass.”",
    },
    {
      q: "Should I publish full text in the feed or a teaser?",
      a: "More often a teaser/lead: it motivates a site visit and lowers the risk of aggregators copying the whole piece.",
    },
    {
      q: "What’s the difference between Atom and RSS 2.0?",
      a: "Both are feed formats. In practice whatever the CMS outputs is enough; a stable URL and correct items matter more.",
    },
    {
      q: "Do I need Feedburner?",
      a: "Not required. Many CMS apps already expose `/feed/` or `/rss.xml`. Third-party “burners” are optional, not a standard.",
    },
    {
      q: "Can other sites steal from RSS?",
      a: "Yes — parsers love XML. Absolute protection is hard; teasers instead of full text plus copy monitoring reduce damage.",
    },
    {
      q: "Does this connect to auto-filling a site?",
      a: "Someone else’s RSS as grabber fuel for “uniquifying” is bad SEO practice. Your RSS is for subscribers — not doorway farms.",
    },
    {
      q: "How do I check the feed?",
      a: "Open the feed URL in a browser/validator, subscribe in a reader, and confirm new posts appear.",
    },
  ],
  sections: [
    {
      title: "Why RSS helps the site and the reader",
      level: 2,
      paras: [
        "For the reader: one feed instead of ten bookmarks, read markers, sometimes offline cache in an app.",
        "For the site: a return channel for blog/news audiences, a handy feed for partners and internal integrations, a familiar “subscribe” button for people who aren’t on social.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "you publish regularly (blog, media)",
            "docs publish a changelog",
            "you need a machine-readable update list",
          ],
        },
      ],
    },
    {
      title: "Structure and formats",
      level: 2,
      paras: [
        "A feed usually has a channel (title, description, site link) and items: title, short text, URL, date, sometimes category and image.",
        "You’ll meet RSS 2.0 and Atom. For a publisher, validity and a stable address matter more than version debates.",
      ],
    },
    {
      title: "Benefits and risks",
      level: 2,
      paras: [
        "Benefits: subscriber convenience, fast “new post” signals, fewer empty “is there a post?” visits.",
        "Risks: feed overload for the user; aggregators copying teasers/text; mess if the feed dumps full HTML with utility blocks.",
        "Don’t expect RSS to “raise link mass by itself”: it’s a distribution channel, not a substitute for SEO and content.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Teaser vs full text",
          text: "For a commercial blog a short description + link to the article usually beats dumping the whole piece into XML.",
        },
      ],
      links: [
        {
          label: "Auto-filling a site",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
        {
          label: "News site and SEO",
          href: "/en/blog/novostnoy-sayt/",
        },
      ],
    },
    {
      title: "How to add RSS",
      level: 2,
      paras: [
        "On WordPress and many CMS apps the feed already exists (often `/feed/`). Theme/settings turn on the icon and autodiscovery.",
        "You can also publish XML by hand or via a plugin/service. After enabling, check the URL in a reader.",
        "App lists from 2020 age fast: pick a current reader for your OS — don’t copy old catalogs blind.",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "RSS is a handy update feed — not ranking magic.",
        "For a site the built-in CMS feed and teasers are usually enough.",
        "Someone else’s RSS as grabber fuel is a bad idea.",
      ],
    },
  ],
  closing: [
    "Open `/feed/` or your CMS equivalent in a browser: if XML with fresh posts is there — basic RSS already works.",
  ],
  related: [
    "avtonapolnenie-sayta",
    "novostnoy-sayt",
    "korporativnyy-blog",
    "kak-napisat-statyu",
    "proverka-unikalnosti",
    "obnovlenie-kontenta",
  ],
};

/** ES overlay for rss — same structure as RU JSON / EN. */
export const rssEs: BlogPost = {
  slug: "rss",
  title: "RSS del sitio: por qué lo necesitas y cómo activarlo",
  date: "2020-06-30",
  category: "Content marketing",
  cover: "/images/blog/rss/cover-es.webp",
  excerpt:
    "Qué es un feed RSS, a quién sigue beneficiando, ventajas y riesgos para un sitio, cómo activar un feed en un CMS — sin culto a Feedburner ni promesas de «masa de enlaces».",
  lead: [
    "RSS es un feed XML de teasers de artículos y enlaces a páginas completas. Los lectores reúnen varios sitios en un reader; el sitio publica posts nuevos sin forzar una visita a la homepage cada vez.",
    "El formato es menos visible que en los 2010 — redes y push se llevaron la atención. Para blogs, media y docs, el feed sigue siendo útil. Abajo: por qué mantener RSS, qué riesgos vigilar y cómo activarlo en un CMS típico. Las listas de readers y generadores cambian — revisa servicios actuales.",
  ],
  faq: [
    {
      q: "¿El RSS sigue vivo?",
      a: "Sí, pero la audiencia es menor. Útil para suscriptores de reader, agregadores, integraciones y como feed técnico para tus propios canales.",
    },
    {
      q: "¿Es un factor de ranking SEO?",
      a: "De forma directa — casi nunca. De forma indirecta — visitas repetidas de lectores leales y distribución. No lo confundas con «inflar masa de enlaces».",
    },
    {
      q: "¿Publico el texto completo en el feed o un teaser?",
      a: "Más a menudo un teaser/lead: motiva una visita al sitio y baja el riesgo de que agregadores copien toda la pieza.",
    },
    {
      q: "¿Cuál es la diferencia entre Atom y RSS 2.0?",
      a: "Ambos son formatos de feed. En la práctica basta con lo que el CMS emite; importan más una URL estable e items correctos.",
    },
    {
      q: "¿Hace falta Feedburner?",
      a: "No es obligatorio. Muchas apps CMS ya exponen `/feed/` o `/rss.xml`. Los «burners» de terceros son opcionales, no un estándar.",
    },
    {
      q: "¿Pueden otros sitios robar desde el RSS?",
      a: "Sí — a los parsers les encanta el XML. La protección absoluta es difícil; teasers en lugar de texto completo más monitoreo de copias reducen el daño.",
    },
    {
      q: "¿Esto se conecta con el auto-relleno de un sitio?",
      a: "El RSS ajeno como combustible de grabber para «uniquificar» es mala práctica SEO. Tu RSS es para suscriptores — no para farms de doorways.",
    },
    {
      q: "¿Cómo compruebo el feed?",
      a: "Abre la URL del feed en un navegador/validador, suscríbete en un reader y confirma que aparecen los posts nuevos.",
    },
  ],
  sections: [
    {
      title: "Por qué el RSS ayuda al sitio y al lector",
      level: 2,
      paras: [
        "Para el lector: un feed en lugar de diez favoritos, marcadores de lectura, a veces caché offline en una app.",
        "Para el sitio: un canal de retorno para audiencias de blog/noticias, un feed práctico para partners e integraciones internas, un botón familiar de «suscribirse» para quien no está en redes.",
      ],
      lists: [
        {
          intro: "Especialmente útil cuando:",
          items: [
            "publicas con regularidad (blog, media)",
            "la documentación publica un changelog",
            "necesitas una lista de updates legible por máquina",
          ],
        },
      ],
    },
    {
      title: "Estructura y formatos",
      level: 2,
      paras: [
        "Un feed suele tener un canal (título, descripción, enlace al sitio) e items: título, texto corto, URL, fecha, a veces categoría e imagen.",
        "Te encontrarás RSS 2.0 y Atom. Para un publisher, la validez y una dirección estable importan más que debates de versión.",
      ],
    },
    {
      title: "Ventajas y riesgos",
      level: 2,
      paras: [
        "Ventajas: comodidad del suscriptor, señales rápidas de «post nuevo», menos visitas vacías de «¿hay post?».",
        "Riesgos: sobrecarga del feed para el usuario; agregadores que copian teasers/texto; lío si el feed vuelca HTML completo con bloques de utilidad.",
        "No esperes que el RSS «suba la masa de enlaces solo»: es un canal de distribución, no un sustituto de SEO y contenido.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Teaser vs texto completo",
          text: "Para un blog comercial una descripción corta + enlace al artículo suele ganar a volcar toda la pieza en XML.",
        },
      ],
      links: [
        {
          label: "Auto-relleno de un sitio",
          href: "/es/blog/avtonapolnenie-sayta/",
        },
        {
          label: "Sitio de noticias y SEO",
          href: "/es/blog/novostnoy-sayt/",
        },
      ],
    },
    {
      title: "Cómo añadir RSS",
      level: 2,
      paras: [
        "En WordPress y muchas apps CMS el feed ya existe (a menudo `/feed/`). Tema/ajustes activan el icono y autodiscovery.",
        "También puedes publicar XML a mano o vía plugin/servicio. Tras activarlo, comprueba la URL en un reader.",
        "Las listas de apps de 2020 envejecen rápido: elige un reader actual para tu SO — no copies catálogos antiguos a ciegas.",
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "RSS es un feed de updates práctico — no magia de ranking.",
        "Para un sitio suelen bastar el feed integrado del CMS y los teasers.",
        "El RSS ajeno como combustible de grabber es mala idea.",
      ],
    },
  ],
  closing: [
    "Abre `/feed/` o el equivalente de tu CMS en el navegador: si hay XML con posts frescos — el RSS básico ya funciona.",
  ],
  related: [
    "avtonapolnenie-sayta",
    "novostnoy-sayt",
    "kak-napisat-statyu",
    "proverka-unikalnosti",
    "obnovlenie-kontenta",
    "kontent-plan",
  ],
};

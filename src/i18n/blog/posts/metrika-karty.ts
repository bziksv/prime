import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-karty — same structure as RU JSON. */
export const metrikaKartyEn: BlogPost = {
  slug: "metrika-karty",
  title: "Heatmaps and maps in Yandex Metrica",
  date: "2017-05-10",
  category: "Analytics",
  cover: "/images/blog/metrika-karty/cover-en.webp",
  excerpt:
    "Click, link, and scroll maps plus form analytics in Yandex Metrica: why look, how to read density, and what not to confuse with Session Replay — without outdated 2017 UI modes and limits.",
  lead: [
    "In Yandex Metrica the maps section shows where people click, how they scroll, and where they abandon forms. It is an aggregate picture across many visits, not a recording of one session.",
    "Below: what heatmaps, link maps, and form analytics are for. Mode UIs and tab names change — use current Metrica Help. Visitor session recording lives in a separate Session Replay article.",
  ],
  faq: [
    {
      q: "Are the click map and Session Replay the same?",
      a: "No. A map aggregates clicks and scroll. Session Replay records a specific session. Use both by task.",
    },
    {
      q: "Do maps need a separate code snippet?",
      a: "Usually the counter with maps/forms options enabled in settings is enough. If you turned them on later — update the code or the GTM container.",
    },
    {
      q: "Why is the map empty?",
      a: "Too little data for the period, a different URL (tags, www, hash), counter missing on the template, blocker/CSP, or the page layout changed a lot vs the collection period.",
    },
    {
      q: "Will a map raise conversion by itself?",
      a: "No. It suggests hypotheses: move the CTA, simplify the form, remove fake clicks. Proof is measuring goals.",
    },
    {
      q: "Can I view maps without Metrica?",
      a: "Other heatmap services exist. In the RU stack Metrica is often already installed — start there if the counter is correct.",
    },
  ],
  sections: [
    {
      title: "What Metrica maps give you",
      level: 2,
      paras: [
        "Numbers say “few leads.” A map shows where people actually tap: the logo instead of the button, a non-clickable image, past a thin mobile link.",
        "Useful on ad landings, product cards, cart, and long pages. For media — on pages with odd bounce or depth.",
      ],
      lists: [
        {
          intro: "Basic set:",
          items: [
            "click map (heat / density)",
            "link map",
            "scroll map",
            "form analytics",
            "alongside — Session Replay on problem segments",
          ],
        },
      ],
      links: [
        {
          label: "Session Replay",
          href: "/en/blog/vebvizor/",
        },
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Click map",
      level: 2,
      paras: [
        "A heatmap highlights frequent click zones. Cold areas mean little interaction. Display modes (monochrome, “fog,” link emphasis) depend on the account UI — the point is density and fake clicks.",
        "Don’t chase a pretty picture — chase mismatch with intent: main CTA with no clicks, decorative block with many.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "menu and logo vs action button",
            "banners people click as links but aren’t",
            "mobile layout separate from desktop",
            "pages after a redesign — before/after periods",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Drawing conclusions from one day with ten visits. A map needs a sample; otherwise noise.",
        },
      ],
    },
    {
      title: "Link map",
      level: 2,
      paras: [
        "Shows transitions via links and buttons: click count and share vs others. Handy to see if people go to cart, catalog, or “nowhere” — footer and socials.",
        "If an important URL barely gets clicks, check visibility, anchor text, and competition from neighbors.",
      ],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Form analytics",
      level: 2,
      paras: [
        "Forms are where conversion breaks: extra fields, phone masks, captcha, validation errors without clear copy. Form analytics shows how far people get and where they drop.",
        "Simplify step by step and measure the “submit” goal. Placeholders help but do not replace proper labels and error messages.",
      ],
      links: [
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Conditions and limits",
      level: 2,
      paras: [
        "Maps build from counter data. You need correct code, enough period, and an understanding of how Metrica normalizes URLs (campaign tags, www, # fragment).",
        "Old guides about Internet Explorer 8 and hard page-pixel limits are history. If the map draws wrong, check Yandex Help and code freshness first — don’t copy 2017 settings.",
      ],
      lists: [
        {
          intro: "Before panicking check:",
          items: [
            "counter on all needed templates",
            "maps/forms enabled in settings",
            "no “native + GTM” conflict",
            "correct URL and period selected",
            "CSP/blocker not cutting the script",
          ],
        },
      ],
      links: [
        {
          label: "If Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Session Replay beside, not instead",
      level: 2,
      paras: [
        "The map said “few button clicks” — Session Replay shows how people scroll past or miss with a finger. For ad bounce and abandoned forms, a session recording beats one heat picture.",
        "Storage and volume limits changed; don’t rely on “120k per day” from old announcements. Current quotas are in the account and Help.",
      ],
      links: [
        {
          label: "How to use Session Replay",
          href: "/en/blog/vebvizor/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Metrica maps are about action density on the page. Session Replay is about a specific session. With goals they close the loop number → hypothesis → fix → measure.",
        "Don’t expect a heatmap to lift conversion by itself: it is an observation tool.",
      ],
    },
  ],
  closing: [
    "Enable maps on the counter, gather a sample on key URLs, find fake clicks and form drop-offs — then verify fixes with goals. For session review open Session Replay.",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "navigatsiya-sayta",
  ],
};

/** ES overlay for metrika-karty — same structure as RU JSON / EN. */
export const metrikaKartyEs: BlogPost = {
  slug: "metrika-karty",
  title: "Mapas de calor y mapas en Yandex Metrica",
  date: "2017-05-10",
  category: "Analytics",
  cover: "/images/blog/metrika-karty/cover-es.webp",
  excerpt:
    "Mapas de clics, enlaces y scroll más analítica de formularios en Yandex Metrica: por qué mirar, cómo leer la densidad y qué no confundir con Session Replay — sin modos y límites de UI obsoletos de 2017.",
  lead: [
    "En Yandex Metrica la sección de mapas muestra dónde hacen clic las personas, cómo hacen scroll y dónde abandonan formularios. Es una foto agregada de muchas visitas, no la grabación de una sesión.",
    "Abajo: para qué sirven heatmaps, mapas de enlaces y analítica de formularios. Las UIs de modo y los nombres de pestaña cambian — usa la Ayuda actual de Metrica. La grabación de sesión del visitante vive en un artículo aparte de Session Replay.",
  ],
  faq: [
    {
      q: "¿El mapa de clics y Session Replay son lo mismo?",
      a: "No. Un mapa agrega clics y scroll. Session Replay graba una sesión concreta. Usa ambos según la tarea.",
    },
    {
      q: "¿Los mapas necesitan un snippet de código aparte?",
      a: "Suele bastar el contador con opciones de mapas/formularios activadas en ajustes. Si las encendiste después — actualiza el código o el contenedor GTM.",
    },
    {
      q: "¿Por qué el mapa está vacío?",
      a: "Poco dato para el periodo, otra URL (tags, www, hash), contador ausente en la plantilla, blocker/CSP, o el layout de la página cambió mucho frente al periodo de recolección.",
    },
    {
      q: "¿Un mapa sube la conversión solo?",
      a: "No. Sugiere hipótesis: mover el CTA, simplificar el formulario, quitar clics falsos. La prueba es medir goals.",
    },
    {
      q: "¿Puedo ver mapas sin Metrica?",
      a: "Existen otros servicios de heatmap. En el stack RU Metrica a menudo ya está instalada — empieza ahí si el contador es correcto.",
    },
  ],
  sections: [
    {
      title: "Qué te dan los mapas de Metrica",
      level: 2,
      paras: [
        "Los números dicen «pocos leads». Un mapa muestra dónde tocan de verdad: el logo en vez del botón, una imagen no clicable, más allá de un enlace móvil fino.",
        "Útil en landings de ads, fichas de producto, carrito y páginas largas. En media — en páginas con bounce o profundidad raros.",
      ],
      lists: [
        {
          intro: "Set básico:",
          items: [
            "mapa de clics (calor / densidad)",
            "mapa de enlaces",
            "mapa de scroll",
            "analítica de formularios",
            "junto a ello — Session Replay en segmentos problemáticos",
          ],
        },
      ],
      links: [
        {
          label: "Session Replay",
          href: "/es/blog/vebvizor/",
        },
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Mapa de clics",
      level: 2,
      paras: [
        "Un heatmap resalta zonas de clic frecuentes. Las áreas frías significan poca interacción. Los modos de visualización (monocromo, «niebla», énfasis en enlaces) dependen de la UI de la cuenta — el punto es densidad y clics falsos.",
        "No persigas una foto bonita — persigue el desajuste con la intención: CTA principal sin clics, bloque decorativo con muchos.",
      ],
      lists: [
        {
          intro: "Qué mirar:",
          items: [
            "menú y logo vs botón de acción",
            "banners que la gente clic como enlaces pero no lo son",
            "layout móvil aparte del desktop",
            "páginas tras un rediseño — periodos antes/después",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Sacar conclusiones de un día con diez visitas. Un mapa necesita muestra; si no, es ruido.",
        },
      ],
    },
    {
      title: "Mapa de enlaces",
      level: 2,
      paras: [
        "Muestra transiciones vía enlaces y botones: conteo de clics y cuota frente a otros. Práctico para ver si la gente va al carrito, al catálogo o a «ningún lado» — footer y redes.",
        "Si una URL importante casi no recibe clics, revisa visibilidad, texto ancla y competencia de vecinos.",
      ],
      links: [
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Analítica de formularios",
      level: 2,
      paras: [
        "Los formularios son donde se rompe la conversión: campos de más, máscaras de teléfono, captcha, errores de validación sin copy claro. La analítica de formularios muestra hasta dónde llegan y dónde se caen.",
        "Simplifica paso a paso y mide el goal «enviar». Los placeholders ayudan pero no sustituyen labels y mensajes de error adecuados.",
      ],
      links: [
        {
          label: "Goals en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Condiciones y límites",
      level: 2,
      paras: [
        "Los mapas se arman con datos del contador. Necesitas código correcto, periodo suficiente y entender cómo Metrica normaliza URLs (tags de campaña, www, fragmento #).",
        "Las guías viejas sobre Internet Explorer 8 y límites duros de píxeles de página son historia. Si el mapa dibuja mal, revisa primero la Ayuda de Yandex y la frescura del código — no copies ajustes de 2017.",
      ],
      lists: [
        {
          intro: "Antes de entrar en pánico revisa:",
          items: [
            "contador en todas las plantillas necesarias",
            "mapas/formularios activados en ajustes",
            "sin conflicto «nativo + GTM»",
            "URL y periodo correctos seleccionados",
            "CSP/blocker no cortando el script",
          ],
        },
      ],
      links: [
        {
          label: "Si Metrica no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Session Replay al lado, no en su lugar",
      level: 2,
      paras: [
        "El mapa dijo «pocos clics en el botón» — Session Replay muestra cómo la gente hace scroll de largo o falla con el dedo. Para bounce de ads y formularios abandonados, una grabación de sesión gana a una sola foto de calor.",
        "Los límites de almacenamiento y volumen cambiaron; no te fíes de «120k al día» de anuncios viejos. Las cuotas actuales están en la cuenta y la Ayuda.",
      ],
      links: [
        {
          label: "Cómo usar Session Replay",
          href: "/es/blog/vebvizor/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Los mapas de Metrica hablan de densidad de acción en la página. Session Replay habla de una sesión concreta. Con goals cierran el ciclo número → hipótesis → arreglo → medida.",
        "No esperes que un heatmap suba la conversión solo: es una herramienta de observación.",
      ],
    },
  ],
  closing: [
    "Activa mapas en el contador, reúne muestra en URLs clave, encuentra clics falsos y abandonos de formulario — luego verifica los arreglos con goals. Para revisar sesiones abre Session Replay.",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "navigatsiya-sayta",
  ],
};

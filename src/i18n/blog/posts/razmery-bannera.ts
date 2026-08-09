import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmery-bannera — same structure as RU JSON. */
export const razmeryBanneraEn: BlogPost = {
  slug: "razmery-bannera",
  title: "Banner sizes in pixels: how to check on someone else’s site",
  date: "2021-03-01",
  category: "Digital marketing",
  cover: "/images/blog/razmery-bannera/cover-en.webp",
  excerpt:
    "What web banners look like, why sizes are often arbitrary, and how to learn a competitor creative’s width/height in a minute with developer tools.",
  lead: [
    "A banner is an image or interactive block that promotes an offer, section, or partner. Before making “the same as a competitor”, it helps to know the real size in pixels — otherwise the creative breaks layout or bloats page weight.",
    "Below: banner types, why IAB standards aren’t always followed, and how to check sizes with DevTools. Clickable images live in a neighboring piece.",
  ],
  faq: [
    {
      q: "Where in DevTools do I see size?",
      a: "Right-click the banner → Inspect. On the selected node check width/height on img or the computed size in Styles/Computed and the hover tooltip over the node.",
    },
    {
      q: "Does HTML width equal the real file?",
      a: "Not always. Attributes and CSS can scale the image. For the source, check Network → resource size or open the image URL in a new tab.",
    },
    {
      q: "Are there mandatory banner sizes?",
      a: "Ad networks and social platforms have their own specs. On regular sites webmasters often use arbitrary formats for the layout.",
    },
    {
      q: "What’s the difference between static, GIF, and HTML5 banners?",
      a: "JPEG/PNG are lighter and simpler. GIF is animation but heavy. HTML5/JS is interactive, more load, harder to measure as “one image”.",
    },
    {
      q: "Why copy a competitor’s size?",
      a: "So the creative fits a similar slot without cropping. Idea and offer should still be yours; don’t copy others’ assets without rights.",
    },
    {
      q: "How do I avoid killing page speed?",
      a: "Don’t inflate pixels “just in case”: needed display size + compression (WebP/AVIF), width/height in markup, lazy below the fold.",
    },
    {
      q: "Is a banner an image link?",
      a: "Often yes: img inside a. Same rules — clear alt, your own file, sane weight. See the image-link post.",
    },
  ],
  sections: [
    {
      title: "What kinds of banners exist",
      level: 2,
      paras: [
        "By delivery form you most often see three types: static files, animation, and interactive.",
        "Choice depends on the job and the speed budget: the more complex the creative, the higher the risk of LCP delay and user annoyance.",
      ],
      lists: [
        {
          intro: "Types:",
          items: [
            "static JPEG/PNG/WebP — simpler and lighter",
            "animation (GIF or video preview) — clearer, heavier",
            "interactive (HTML/JS) — clicks, forms, motion; harder to maintain",
          ],
        },
      ],
    },
    {
      title: "Sizes: standards and reality",
      level: 2,
      paras: [
        "Ad associations and networks publish typical formats (e.g. IAB ranges), and social platforms set their own pixels for feed and stories.",
        "On regular sites sizes are often arbitrary: for the layout grid, a mobile breakpoint, or a “hole” in the sidebar. There’s no universal “centimeter” web classification — you count CSS pixels and the file source.",
      ],
      lists: [
        {
          intro: "What to watch for your own creative:",
          items: [
            "slot in the layout (column width / max-width)",
            "retina: sometimes prepare 2× but serve a compressed file",
            "mobile — a separate size or responsive",
            "placement specs if it’s external ads",
          ],
        },
      ],
      links: [
        {
          label: "Image link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "How to find a banner’s size on someone else’s site",
      level: 2,
      paras: [
        "If you need to match slot dimensions (not copy someone else’s file), open the page in Chrome/Firefox/Safari and use developer tools.",
      ],
      lists: [
        {
          intro: "Short algorithm:",
          items: [
            "right-click the banner → Inspect",
            "in the DOM find the `img` or banner container",
            "check width/height in attributes or computed size",
            "if unsure, open the image URL and verify the natural file size",
          ],
        },
        {
          intro: "Nuances:",
          items: [
            "CSS may shrink the image — display ≠ intrinsic",
            "background via `background-image` — look in Styles, not img attributes",
            "iframe/ad network — size may sit on the container, not the file",
          ],
        },
      ],
    },
    {
      title: "Why arbitrary sizes are normal",
      level: 2,
      paras: [
        "Sites adapt blocks for different screens and grids. A rigid “728×90 everywhere” hasn’t been the only option for a long time.",
        "What matters is the banner doesn’t break reading, doesn’t cover CTAs, and doesn’t weigh like a separate page. If the creative is useful (a clear offer, a diagram), people tolerate it more than an empty screaming GIF.",
      ],
      links: [
        {
          label: "Selling traffic and placements",
          href: "/en/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  closing: [
    "Banner size takes a minute via Inspect: check display and the file source separately. Then — your creative, compression, and a correct link, not a copy-paste of someone else’s asset.",
  ],
};

/** ES overlay for razmery-bannera — same structure as RU JSON / EN. */
export const razmeryBanneraEs: BlogPost = {
  slug: "razmery-bannera",
  title: "Tamaños de banner en píxeles: cómo mirarlos en el sitio de otro",
  date: "2021-03-01",
  category: "Digital marketing",
  cover: "/images/blog/razmery-bannera/cover.webp",
  excerpt:
    "Qué aspecto tienen los banners web, por qué los tamaños suelen ser arbitrarios y cómo saber en un minuto el ancho/alto de un creativo de la competencia con las herramientas de desarrollador.",
  lead: [
    "Un banner es una imagen o un bloque interactivo que promociona una oferta, una sección o un partner. Antes de hacer «lo mismo que el competidor», conviene saber el tamaño real en píxeles — si no, el creativo rompe el layout o hincha el peso de la página.",
    "Abajo: tipos de banner, por qué los estándares IAB no siempre se siguen y cómo comprobar tamaños con DevTools. Las imágenes clicables viven en un artículo vecino.",
  ],
  faq: [
    {
      q: "¿Dónde en DevTools veo el tamaño?",
      a: "Clic derecho en el banner → Inspeccionar. En el nodo seleccionado mira width/height en img o el tamaño computed en Styles/Computed y el tooltip al pasar el ratón sobre el nodo.",
    },
    {
      q: "¿El width HTML es igual al archivo real?",
      a: "No siempre. Atributos y CSS pueden escalar la imagen. Para el origen, mira Network → tamaño del recurso o abre la URL de la imagen en una pestaña nueva.",
    },
    {
      q: "¿Hay tamaños de banner obligatorios?",
      a: "Las redes de ads y las plataformas social tienen sus propias specs. En sitios normales los webmasters a menudo usan formatos arbitrarios para el layout.",
    },
    {
      q: "¿En qué se diferencian banners estáticos, GIF y HTML5?",
      a: "JPEG/PNG son más ligeros y simples. GIF es animación pero pesa. HTML5/JS es interactivo, más carga, más difícil de medir como «una sola imagen».",
    },
    {
      q: "¿Por qué copiar el tamaño del competidor?",
      a: "Para que el creativo quepa en un hueco parecido sin recortes. La idea y la oferta deben ser tuyas; no copies assets ajenos sin derechos.",
    },
    {
      q: "¿Cómo no matar la velocidad de la página?",
      a: "No hinches píxeles «por si acaso»: tamaño de display necesario + compresión (WebP/AVIF), width/height en el markup, lazy bajo el fold.",
    },
    {
      q: "¿Un banner es un enlace-imagen?",
      a: "A menudo sí: img dentro de a. Mismas reglas — alt claro, archivo propio, peso sensato. Ver el post de imagen-enlace.",
    },
  ],
  sections: [
    {
      title: "Qué tipos de banners hay",
      level: 2,
      paras: [
        "Por forma de entrega suelen verse tres tipos: archivos estáticos, animación e interactivos.",
        "La elección depende del trabajo y del presupuesto de velocidad: cuanto más complejo el creativo, mayor el riesgo de retrasar el LCP y molestar al usuario.",
      ],
      lists: [
        {
          intro: "Tipos:",
          items: [
            "estático JPEG/PNG/WebP — más simple y ligero",
            "animación (GIF o preview de vídeo) — más claro, más pesado",
            "interactivo (HTML/JS) — clics, formularios, motion; más duro de mantener",
          ],
        },
      ],
    },
    {
      title: "Tamaños: estándares y realidad",
      level: 2,
      paras: [
        "Asociaciones y redes de ads publican formatos típicos (p. ej. rangos IAB), y las plataformas social fijan sus propios píxeles para feed y stories.",
        "En sitios normales los tamaños suelen ser arbitrarios: para la rejilla del layout, un breakpoint móvil o un «hueco» en la sidebar. No hay una clasificación web universal «en centímetros» — cuentas píxeles CSS y el archivo origen.",
      ],
      lists: [
        {
          intro: "Qué vigilar en tu propio creativo:",
          items: [
            "hueco en el layout (ancho de columna / max-width)",
            "retina: a veces preparas 2× pero sirves un archivo comprimido",
            "móvil — tamaño aparte o responsive",
            "specs de emplazamiento si son ads externos",
          ],
        },
      ],
      links: [
        {
          label: "Imagen-enlace",
          href: "/es/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Cómo saber el tamaño de un banner en el sitio de otro",
      level: 2,
      paras: [
        "Si necesitas igualar las dimensiones del hueco (no copiar el archivo ajeno), abre la página en Chrome/Firefox/Safari y usa las herramientas de desarrollador.",
      ],
      lists: [
        {
          intro: "Algoritmo corto:",
          items: [
            "clic derecho en el banner → Inspeccionar",
            "en el DOM encuentra el `img` o el contenedor del banner",
            "mira width/height en atributos o el tamaño computed",
            "si dudas, abre la URL de la imagen y verifica el tamaño natural del archivo",
          ],
        },
        {
          intro: "Matices:",
          items: [
            "CSS puede encoger la imagen — display ≠ intrínseco",
            "fondo vía `background-image` — mira en Styles, no en atributos de img",
            "iframe/red de ads — el tamaño puede estar en el contenedor, no en el archivo",
          ],
        },
      ],
    },
    {
      title: "Por qué los tamaños arbitrarios son normales",
      level: 2,
      paras: [
        "Los sitios adaptan bloques a pantallas y rejillas distintas. Un rígido «728×90 en todas partes» hace tiempo que no es la única opción.",
        "Lo que importa es que el banner no rompa la lectura, no tape CTAs y no pese como una página aparte. Si el creativo es útil (oferta clara, un diagrama), la gente lo tolera más que un GIF vacío que grita.",
      ],
      links: [
        {
          label: "Venta de tráfico y emplazamientos",
          href: "/es/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  closing: [
    "El tamaño del banner se resuelve en un minuto con Inspect: mira display y el archivo origen por separado. Luego — tu creativo, compresión y un enlace correcto, no un copy-paste del asset ajeno.",
  ],
};

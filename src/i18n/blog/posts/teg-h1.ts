import type { BlogPost } from "../../../data/blog";

/** EN overlay for teg-h1 — same structure as RU JSON. */
export const tegH1En: BlogPost = {
  slug: "teg-h1",
  title: "The HTML H1 tag: styling, hierarchy, and SEO",
  date: "2020-12-28",
  category: "SEO",
  cover: "/images/blog/teg-h1/cover-en.webp",
  excerpt:
    "Why H1 matters, how it differs from the title tag, how to build an H1–H6 hierarchy, where keywords fit, and how to check headings without stuffing.",
  lead: [
    "H1 is the main visible page heading: it sets the topic for people and helps search understand the document. It is not a magic ranking switch — it is part of a clear structure with the title tag, subheads, and body copy.",
    "Below: how to style H1, how it differs from Title, how to build an H2–H6 hierarchy, typical CMS mistakes, and a quick check. Broader on-page work lives in the page-optimization article; here the focus is headings.",
  ],
  faq: [
    {
      q: "How many H1s should a page have?",
      a: "Aim for one meaningful H1 on the main content. Multiple H1s in the template (logo, widgets) are better removed — they confuse people and markup.",
    },
    {
      q: "Must Title and H1 match word for word?",
      a: "No. Shared meaning, different wording is better: Title for the snippet, H1 for the on-page screen.",
    },
    {
      q: "Is a keyword required in H1?",
      a: "A clear sense of the query or service helps — not exact-match at any cost. Readability beats density.",
    },
    {
      q: "Can you style a div like a heading without H1?",
      a: "Visually yes; for SEO and accessibility it is worse. A heading should be a real HTML heading by meaning.",
    },
    {
      q: "Are H2–H6 always needed?",
      a: "On a short landing, H1 plus paragraphs may suffice. On long copy and catalogs, an H2–H3 hierarchy helps scanning a lot.",
    },
    {
      q: "Does H1 rank harder than Title?",
      a: "Both help topic understanding. For clicks from the results, Title and the snippet matter more; for understanding the page on-site — H1 and structure.",
    },
    {
      q: "How do you check H1?",
      a: "View source, an extension, or a crawler: look for `<h1>`. In DevTools it is easy to see if the heading is hidden or duplicated.",
    },
    {
      q: "Can H1 be an image?",
      a: "Bad idea: text in an image is worse for search and accessibility. If the logo is in the header, do not replace the content H1 with it.",
    },
  ],
  sections: [
    {
      title: "Why you need H1",
      level: 2,
      paras: [
        "H1 answers “what is this page?” above the fold. Users see the topic immediately; the bot gets a strong structural signal next to Title, lead, and main copy.",
        "A perfect H1 alone will not save thin or stolen content. It works as a chain: one intent → clear heading → text that delivers the promise.",
      ],
      lists: [
        {
          intro: "A good H1:",
          items: [
            "one per main-content page",
            "reads as a heading, not a keyword sheet",
            "aligned with Title and URL in meaning",
            "visible without hunting through template blocks",
          ],
        },
      ],
      links: [
        {
          label: "Optimizing a page for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "H1 and Title: the difference",
      level: 2,
      paras: [
        "Title lives in `<head>` and usually becomes the snippet headline. H1 is in `<body>` — people see it on the page. Matching wording one-to-one is not required and often hurts CTR: the results and the page need different accents.",
        "Example: Title — “Water delivery in Kazan — order from 1 bottle”; H1 on the page — “Drinking water delivery across Kazan.” Shared meaning, not clones.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "Title shorter and written for the click",
            "H1 more natural for reading on the page",
            "do not cram five commercial tails into both",
            "brand in Title where it helps; in H1 if it is part of the offer",
          ],
        },
      ],
      links: [
        {
          label: "SERP snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to add and style H1",
      level: 2,
      paras: [
        "In HTML it is `<h1>…</h1>`. In a CMS the “post title” field often already outputs as H1 — check the theme: sometimes the post title is H2 while H1 is the logo or hidden utility text.",
        "Style via CSS, not font size on a random `<div>` and not `<b>` instead of hierarchy. For accessibility, heading order matters — not only “big text.”",
      ],
      lists: [
        {
          intro: "Styling:",
          items: [
            "short and to the point (often about 70–90 characters, no hard cap)",
            "no ALL CAPS and “!!!!!”",
            "no nested “just in case” links inside H1",
            "do not hide H1 with `display:none` for SEO — pointless and risky",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Making H1 from the header logo on every URL. Then hundreds of pages share one “main” heading — and page meaning is lost.",
        },
      ],
    },
    {
      title: "Keywords in H1 without stuffing",
      level: 2,
      paras: [
        "State the main topic the way a person would: service, product category, article question. Secondary wording goes to H2–H3 and body copy.",
        "Stuffing (“buy cheap wholesale price moscow”) hurts trust and often the snippet. One clear H1 beats three keywords separated by commas.",
      ],
      lists: [
        {
          intro: "Wording checklist:",
          items: [
            "reflects page intent",
            "does not clone Title verbatim",
            "no city × service × “cheap” × “24/7” in one line without need",
            "aligned with the first paragraph",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "H1–H6 hierarchy",
      level: 2,
      paras: [
        "Think table of contents: H1 is the document topic, H2 large blocks, H3 subsections under H2. Skipping levels “because the type size looks nice” hurts scanning and accessibility.",
        "H4–H6 are rarer on marketing sites; if you use them, keep nesting logic. On a product card often: H1 = name, H2 = description / specs / reviews.",
      ],
      lists: [
        {
          intro: "Anti-patterns:",
          items: [
            "five H1s in the template",
            "an H2 higher in meaning than a “lost” H1",
            "all subheads one style with no heading tags",
            "the same H1 on pagination “page 2” with no clarification",
          ],
        },
      ],
      links: [
        {
          label: "Website layout basics",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "How to check H1 on the site",
      level: 2,
      paras: [
        "Spot checks: View Source or inspector — search `h1`. In bulk: a crawler (Screaming Frog and peers) — H1 column, duplicates, empties. In webmaster panels, spot-check problem URLs after a template change.",
        "After a CMS theme swap, recheck home, product card, category, and a blog post — templates often differ.",
      ],
      lists: [
        {
          intro: "What to log in the audit:",
          items: [
            "pages with no H1",
            "pages with two or more H1s",
            "duplicate H1s across URLs",
            "H1 = Title word for word sitewide (template-spam signal)",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "optimizatsiya-stranitsy",
    "snippet",
    "verstka-saytov",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
  ],
};

/** ES overlay for teg-h1 — same structure as RU JSON / EN. */
export const tegH1Es: BlogPost = {
  slug: "teg-h1",
  title: "La etiqueta HTML H1: estilo, jerarquía y SEO",
  date: "2020-12-28",
  category: "SEO",
  cover: "/images/blog/teg-h1/cover-es.webp",
  excerpt:
    "Por qué importa el H1, en qué se diferencia del title tag, cómo montar una jerarquía H1–H6, dónde encajan las keywords y cómo revisar headings sin stuffing.",
  lead: [
    "H1 es el heading visible principal de la página: fija el tema para la gente y ayuda a la búsqueda a entender el documento. No es un interruptor mágico de ranking — es parte de una estructura clara con el title tag, subtítulos y el cuerpo del texto.",
    "Abajo: cómo estilizar el H1, en qué se diferencia del Title, cómo montar una jerarquía H2–H6, errores típicos de CMS y un chequeo rápido. El trabajo on-page más amplio vive en el artículo de optimización de página; aquí el foco son los headings.",
  ],
  faq: [
    {
      q: "¿Cuántos H1 debe tener una página?",
      a: "Apunta a un H1 con sentido en el contenido principal. Varios H1s en la plantilla (logo, widgets) mejor quitarlos — confunden a la gente y al markup.",
    },
    {
      q: "¿Title y H1 deben coincidir palabra por palabra?",
      a: "No. Sentido compartido, redacción distinta es mejor: Title para el snippet, H1 para la pantalla on-page.",
    },
    {
      q: "¿Hace falta una keyword en el H1?",
      a: "Un sentido claro de la query o del servicio ayuda — no exact-match a cualquier coste. La legibilidad gana a la densidad.",
    },
    {
      q: "¿Se puede estilizar un div como heading sin H1?",
      a: "Visualmente sí; para SEO y accesibilidad es peor. Un heading debe ser un heading HTML real por sentido.",
    },
    {
      q: "¿Siempre hacen falta H2–H6?",
      a: "En un landing corto, H1 más párrafos puede bastar. En copy largo y catálogos, una jerarquía H2–H3 ayuda mucho al escaneo.",
    },
    {
      q: "¿El H1 rankea más duro que el Title?",
      a: "Ambos ayudan a entender el tema. Para clics desde resultados, pesan más Title y el snippet; para entender la página on-site — H1 y estructura.",
    },
    {
      q: "¿Cómo compruebas el H1?",
      a: "Ver código fuente, una extensión o un crawler: busca `<h1>`. En DevTools es fácil ver si el heading está oculto o duplicado.",
    },
    {
      q: "¿El H1 puede ser una imagen?",
      a: "Mala idea: texto en imagen es peor para búsqueda y accesibilidad. Si el logo va en el header, no sustituyas el H1 de contenido con él.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas el H1",
      level: 2,
      paras: [
        "El H1 responde «¿qué es esta página?» above the fold. Los usuarios ven el tema al instante; el bot recibe una señal estructural fuerte junto a Title, lead y el copy principal.",
        "Un H1 perfecto solo no salva contenido fino o robado. Funciona como cadena: un intent → heading claro → texto que cumple la promesa.",
      ],
      lists: [
        {
          intro: "Un buen H1:",
          items: [
            "uno por página de contenido principal",
            "se lee como heading, no como hoja de keywords",
            "alineado con Title y URL en sentido",
            "visible sin cazar por bloques de plantilla",
          ],
        },
      ],
      links: [
        {
          label: "Optimizar una página para una query",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "H1 y Title: la diferencia",
      level: 2,
      paras: [
        "Title vive en `<head>` y suele convertirse en el titular del snippet. H1 está en `<body>` — la gente lo ve en la página. Coincidir redacción uno a uno no es obligatorio y a menudo resta CTR: resultados y página necesitan acentos distintos.",
        "Ejemplo: Title — «Entrega de agua en Madrid — pedido desde 1 garrafa»; H1 en la página — «Entrega de agua potable por Madrid». Sentido compartido, no clones.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "Title más corto y escrito para el clic",
            "H1 más natural para leer en la página",
            "no metas cinco colas comerciales en ambos",
            "marca en Title donde ayude; en H1 si forma parte de la oferta",
          ],
        },
      ],
      links: [
        {
          label: "Snippet de la SERP",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Cómo añadir y estilizar el H1",
      level: 2,
      paras: [
        "En HTML es `<h1>…</h1>`. En un CMS el campo «título del post» a menudo ya sale como H1 — revisa el tema: a veces el título del post es H2 mientras el H1 es el logo o texto utilitario oculto.",
        "Estiliza vía CSS, no con tamaño de fuente en un `<div>` al azar ni con `<b>` en lugar de jerarquía. Para accesibilidad, el orden de headings importa — no solo «texto grande».",
      ],
      lists: [
        {
          intro: "Estilo:",
          items: [
            "corto y al punto (a menudo unos 70–90 caracteres, sin tope duro)",
            "sin MAYÚSCULAS ni «!!!!!»",
            "sin enlaces anidados «por si acaso» dentro del H1",
            "no ocultes el H1 con `display:none` por SEO — inútil y arriesgado",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Hacer el H1 del logo del header en cada URL. Entonces cientos de páginas comparten un solo heading «principal» — y se pierde el sentido de la página.",
        },
      ],
    },
    {
      title: "Keywords en el H1 sin stuffing",
      level: 2,
      paras: [
        "Di el tema principal como lo diría una persona: servicio, categoría de producto, pregunta del artículo. La redacción secundaria va a H2–H3 y al cuerpo.",
        "El stuffing («comprar barato mayorista precio madrid») duele a la confianza y a menudo al snippet. Un H1 claro gana a tres keywords separadas por comas.",
      ],
      lists: [
        {
          intro: "Checklist de redacción:",
          items: [
            "refleja el intent de la página",
            "no clona el Title verbatim",
            "sin ciudad × servicio × «barato» × «24/7» en una línea sin necesidad",
            "alineado con el primer párrafo",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Jerarquía H1–H6",
      level: 2,
      paras: [
        "Piensa en tabla de contenidos: H1 es el tema del documento, H2 bloques grandes, H3 subsecciones bajo H2. Saltar niveles «porque el tamaño de tipo se ve bonito» duele al escaneo y a la accesibilidad.",
        "H4–H6 son más raros en sitios de marketing; si los usas, mantén la lógica de anidamiento. En una ficha de producto a menudo: H1 = nombre, H2 = descripción / specs / reviews.",
      ],
      lists: [
        {
          intro: "Anti-patrones:",
          items: [
            "cinco H1s en la plantilla",
            "un H2 más alto en sentido que un H1 «perdido»",
            "todos los subtítulos un estilo sin tags de heading",
            "el mismo H1 en paginación «página 2» sin aclarar",
          ],
        },
      ],
      links: [
        {
          label: "Bases de maquetación de sitios",
          href: "/es/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Cómo comprobar el H1 en el sitio",
      level: 2,
      paras: [
        "Comprobaciones puntuales: Ver código fuente o inspector — busca `h1`. En masa: un crawler (Screaming Frog y pares) — columna H1, duplicados, vacíos. En paneles de webmaster, revisa URLs problemáticas tras un cambio de plantilla.",
        "Tras cambiar el tema del CMS, rechequea home, ficha, categoría y un post del blog — las plantillas a menudo difieren.",
      ],
      lists: [
        {
          intro: "Qué anotar en la auditoría:",
          items: [
            "páginas sin H1",
            "páginas con dos o más H1s",
            "H1s duplicados entre URLs",
            "H1 = Title palabra por palabra en todo el sitio (señal de spam de plantilla)",
          ],
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "optimizatsiya-stranitsy",
    "snippet",
    "verstka-saytov",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
  ],
};

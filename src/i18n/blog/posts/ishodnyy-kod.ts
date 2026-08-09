import type { BlogPost } from "../../../data/blog";

/** EN overlay for ishodnyy-kod — same structure as RU JSON. */
export const ishodnyyKodEn: BlogPost = {
  slug: "ishodnyy-kod",
  title: "Page source code: why open it and what to check",
  date: "2021-07-09",
  category: "SEO",
  cover: "/images/blog/ishodnyy-kod/cover-en.webp",
  excerpt:
    "What page source is, how View Source differs from DevTools, and how to check meta, styles, and scripts — without a full front-end course.",
  lead: [
    "Page source is the HTML (and related CSS/JS) the browser gets from the server and turns into what you see. For SEO and debugging it helps to open it and find title, meta, markup, and console errors.",
    "Below: why marketers and site owners look at source, how to open it in the browser, and what to check first. A full layout course is a separate article; this is a practical walkthrough.",
  ],
  faq: [
    {
      q: "How does View Source differ from DevTools?",
      a: "“View Page Source” shows the response HTML (often before heavy script changes). Developer tools show the live tree after JS runs, plus styles, network, and the console.",
    },
    {
      q: "Do you need to know front-end to read code?",
      a: "Basic tags (title, h1, a, img, meta) are enough for SEO hygiene. Building layouts from scratch is a developer’s job.",
    },
    {
      q: "Is CSS-hidden content still in the code?",
      a: "Often yes — text can sit in HTML and be hidden by styles. Crawlers and people see things differently; don’t use hiding as an SEO trick.",
    },
    {
      q: "Where do I find meta description and robots?",
      a: "In `<head>`: `meta name=\"description\"`, `meta name=\"robots\"`, and `link rel=\"canonical\"`. Search with Ctrl+F / Cmd+F.",
    },
    {
      q: "Can I edit someone else’s site via Inspect?",
      a: "DevTools changes stay local. Nothing hits the server until you deploy edits in the CMS or repo yourself.",
    },
  ],
  sections: [
    {
      title: "What page source is",
      level: 2,
      paras: [
        "On a URL request the server returns a document: HTML markup, CSS links, and scripts. The browser parses the tags and draws the UI. Users see the result; the code is the score.",
        "Even PHP, Python, or builder sites send HTML to the browser. So you inspect a page the same way — via source and DevTools.",
      ],
      lists: [
        {
          intro: "The code usually includes:",
          items: [
            "HTML structure",
            "linked CSS",
            "JavaScript",
            "meta tags and canonical",
            "analytics tags and pixels",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Why look at the code",
      level: 2,
      paras: [
        "To see what search engines and browsers actually get: title, description, h1, noindex, link markup, script weight, broken image paths.",
        "It’s also handy to see how a competitor styled a block (color, font, class) — for a designer brief, not for copying their content.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "audit meta and headings",
            "find analytics tags and pixels",
            "check canonical / robots",
            "debug JS errors in Console",
            "save CSS or fonts for analysis",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "How to open code in the browser",
      level: 2,
      paras: [
        "Chrome / Edge / Firefox: right-click the page → “View Page Source” — a separate tab with the text. Or right-click an element → Inspect — DevTools with that block highlighted.",
        "Menu → More tools → Developer tools. Tabs: Elements/Inspector, Sources, Console, Network, Security (certificate). Move the panel if it gets in the way.",
      ],
      lists: [
        {
          intro: "Quick tricks:",
          items: [
            "Ctrl+F / Cmd+F for `title`, `canonical`, `noindex`",
            "click a node in Elements — highlight on the page",
            "Sources — script and style files, Save as",
            "Console — JS errors",
            "right-click a block on the site → Inspect — jump to the node",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Menu labels depend on browser language and version. Look for the meaning: Source, Inspect, DevTools.",
          kind: "tip",
        },
      ],
    },
    {
      title: "What to check in HTML",
      level: 2,
      paras: [
        "`<head>` holds the utility layer: title, meta, CSS links, and canonical. `<body>` is what users see: h1–h6 headings, paragraphs, lists, links, images.",
        "Semantic tags (`article`, `section`, `nav`) help structure. `div`/`span` are generic blocks with little meaning. For SEO, a clear h1, meaningful anchors, and image alt matter.",
      ],
      tables: [
        {
          caption: "Common tags when inspecting",
          headers: ["Tag", "Why check"],
          rows: [
            ["`title`", "Tab title and topic signal"],
            ["`meta description`", "Snippet draft"],
            ["`link rel=canonical`", "Canonical URL"],
            ["`h1`", "Main on-page heading"],
            ["`a href`", "Where links go"],
            ["`img alt`", "Text for the image"],
          ],
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};

/** ES overlay for ishodnyy-kod — same structure as RU JSON / EN. */
export const ishodnyyKodEs: BlogPost = {
  slug: "ishodnyy-kod",
  title: "Código fuente de la página: por qué abrirlo y qué revisar",
  date: "2021-07-09",
  category: "SEO",
  cover: "/images/blog/ishodnyy-kod/cover.webp",
  excerpt:
    "Qué es el código fuente de una página, en qué se diferencia View Source de DevTools, y cómo revisar meta, estilos y scripts — sin un curso completo de front-end.",
  lead: [
    "El código fuente de la página es el HTML (y el CSS/JS relacionado) que el navegador recibe del servidor y convierte en lo que ves. Para SEO y depuración ayuda abrirlo y encontrar title, meta, markup y errores de consola.",
    "Abajo: por qué marketers y dueños de sitio miran el código, cómo abrirlo en el navegador y qué revisar primero. Un curso completo de layout es un artículo aparte; esto es un recorrido práctico.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia View Source de DevTools?",
      a: "«Ver código fuente de la página» muestra el HTML de la respuesta (a menudo antes de cambios pesados de scripts). Las herramientas de desarrollador muestran el árbol en vivo tras correr el JS, más estilos, red y la consola.",
    },
    {
      q: "¿Hace falta saber front-end para leer el código?",
      a: "Tags básicas (title, h1, a, img, meta) bastan para higiene SEO. Montar layouts desde cero es trabajo de desarrollador.",
    },
    {
      q: "¿El contenido oculto con CSS sigue en el código?",
      a: "A menudo sí — el texto puede estar en el HTML y ocultarse con estilos. Crawlers y personas ven cosas distintas; no uses el ocultamiento como truco SEO.",
    },
    {
      q: "¿Dónde encuentro meta description y robots?",
      a: "En `<head>`: `meta name=\"description\"`, `meta name=\"robots\"` y `link rel=\"canonical\"`. Busca con Ctrl+F / Cmd+F.",
    },
    {
      q: "¿Puedo editar el sitio de otro vía Inspect?",
      a: "Los cambios de DevTools se quedan en local. Nada llega al servidor hasta que tú despliegues ediciones en el CMS o el repo.",
    },
  ],
  sections: [
    {
      title: "Qué es el código fuente de la página",
      level: 2,
      paras: [
        "Ante una petición de URL el servidor devuelve un documento: markup HTML, enlaces CSS y scripts. El navegador parsea las tags y dibuja la UI. Los usuarios ven el resultado; el código es la partitura.",
        "Incluso sitios en PHP, Python o builders envían HTML al navegador. Así que inspeccionas una página igual — vía source y DevTools.",
      ],
      lists: [
        {
          intro: "El código suele incluir:",
          items: [
            "estructura HTML",
            "CSS enlazado",
            "JavaScript",
            "meta tags y canonical",
            "tags de analytics y pixels",
          ],
        },
      ],
      links: [
        {
          label: "Maquetación de sitios",
          href: "/es/blog/verstka-saytov/",
        },
        {
          label: "Hipertexto",
          href: "/es/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Por qué mirar el código",
      level: 2,
      paras: [
        "Para ver qué reciben de verdad buscadores y navegadores: title, description, h1, noindex, markup de enlaces, peso de scripts, paths de imagen rotos.",
        "También es útil ver cómo un competidor estilizó un bloque (color, fuente, clase) — para un brief de diseño, no para copiar su contenido.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "auditar meta y headings",
            "encontrar tags de analytics y pixels",
            "comprobar canonical / robots",
            "depurar errores JS en Console",
            "guardar CSS o fuentes para análisis",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de página para una query",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Cómo abrir el código en el navegador",
      level: 2,
      paras: [
        "Chrome / Edge / Firefox: clic derecho en la página → «Ver código fuente de la página» — una pestaña aparte con el texto. O clic derecho en un elemento → Inspeccionar — DevTools con ese bloque resaltado.",
        "Menú → Más herramientas → Herramientas para desarrolladores. Pestañas: Elements/Inspector, Sources, Console, Network, Security (certificado). Mueve el panel si estorba.",
      ],
      lists: [
        {
          intro: "Trucos rápidos:",
          items: [
            "Ctrl+F / Cmd+F para `title`, `canonical`, `noindex`",
            "clic en un nodo en Elements — resaltado en la página",
            "Sources — archivos de script y estilo, Guardar como",
            "Console — errores JS",
            "clic derecho en un bloque del sitio → Inspeccionar — saltar al nodo",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "Las etiquetas del menú dependen del idioma y la versión del navegador. Busca el sentido: Source, Inspect, DevTools.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Qué revisar en el HTML",
      level: 2,
      paras: [
        "`<head>` lleva la capa utilitaria: title, meta, enlaces CSS y canonical. `<body>` es lo que ven los usuarios: headings h1–h6, párrafos, listas, enlaces, imágenes.",
        "Las tags semánticas (`article`, `section`, `nav`) ayudan a la estructura. `div`/`span` son bloques genéricos con poco sentido. Para SEO importan un h1 claro, anclas con sentido y alt de imagen.",
      ],
      tables: [
        {
          caption: "Tags habituales al inspeccionar",
          headers: ["Tag", "Por qué revisar"],
          rows: [
            ["`title`", "Título de pestaña y señal de tema"],
            ["`meta description`", "Borrador del snippet"],
            ["`link rel=canonical`", "URL canónica"],
            ["`h1`", "Heading principal on-page"],
            ["`a href`", "A dónde van los enlaces"],
            ["`img alt`", "Texto de la imagen"],
          ],
        },
      ],
      links: [
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};

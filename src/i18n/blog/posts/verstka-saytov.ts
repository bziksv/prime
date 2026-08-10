import type { BlogPost } from "../../../data/blog";

/** EN overlay for verstka-saytov — same structure as RU JSON. */
export const verstkaSaytovEn: BlogPost = {
  slug: "verstka-saytov",
  title: "Website front-end layout: what it is, stages, and quality bars",
  date: "2022-01-17",
  category: "SEO",
  cover: "/images/blog/verstka-saytov/cover-en.webp",
  excerpt:
    "What a front-end layout engineer does: from mockup to live page. Stages, HTML/CSS, responsive design, QA, and the SEO connection.",
  lead: [
    "Layout turns a design mockup into a working web page: HTML sets structure, CSS sets appearance, and JS adds behavior when you need it.",
    "Below: the layout engineer’s role in the copy → design → code chain, a modern process, and an acceptance checklist. Full-page table layouts as the default are history.",
  ],
  faq: [
    {
      q: "How is layout different from design?",
      a: "Design is how it should look and feel. Layout is how it opens reliably in browsers, on phones, and for crawlers.",
    },
    {
      q: "Is JavaScript always required?",
      a: "No. Start with semantics and CSS. Add JS when you can’t do without it (complex behavior) — and keep content available without it when you can.",
    },
    {
      q: "Should you use tables or CSS blocks for page layout?",
      a: "For page layouts today — CSS (flex/grid) and semantic blocks. Tables are for tabular data, not the whole site grid.",
    },
    {
      q: "How does layout affect SEO?",
      a: "Through headings, lists, text accessibility, speed, mobile usability, and avoiding critical markup errors.",
    },
    {
      q: "What should you check before handoff?",
      a: "Cross-browser rendering, responsive behavior, validity/console, images and fonts, clickability, and basic accessibility.",
    },
  ],
  sections: [
    {
      title: "What layout is",
      level: 2,
      paras: [
        "Simply: the designer builds a mockup; the layout engineer builds the page the browser opens. Think of a magazine: copy → page layout → print; on the web, print becomes an HTML page.",
        "In practice you need: working with graphics from the mockup, HTML, CSS, basic JS, and a feel for browser and mobile-screen limits.",
      ],
      lists: [
        {
          intro: "What the business gets:",
          items: [
            "pages that match the approved design",
            "responsive behavior on phone and desktop",
            "code you can maintain",
            "a base for CMS and SEO structure",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext: structure and links",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Work stages",
      level: 2,
      paras: [
        "Start by studying the mockup: grid, fonts, button states, mobile screens. Then slice graphics, build base markup, styles, behavior, and tests.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "break down the mockup and guideline",
            "export images and icons",
            "build HTML structure (semantics)",
            "add CSS from general to specific",
            "add necessary JS",
            "check in browsers and on devices",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Laying out “as you go” without a mobile mockup. Most traffic is phones; bake responsive in from the start.",
        },
      ],
    },
    {
      title: "HTML and CSS today",
      level: 2,
      paras: [
        "HTML describes what blocks mean: headings, lists, navigation, forms. CSS handles look and layout. Flexbox and Grid cover grids without table hacks.",
        "Keep styles separate from markup. Repeating values are easier as variables and a shared design system.",
      ],
      lists: [
        {
          intro: "Good habits:",
          items: [
            "one H1 per page by meaning",
            "lists via ul/ol, not “paragraphs with bullet images”",
            "meaningful image alt text",
            "buttons and links that are easy to tell apart",
            "don’t duplicate huge inline styles",
          ],
        },
      ],
    },
    {
      title: "Quality criteria",
      level: 2,
      paras: [
        "Looking good in one browser isn’t enough. You need stability and maintainability.",
      ],
      lists: [
        {
          intro: "Acceptance:",
          items: [
            "match the mockup within tolerance",
            "correct look in current browsers",
            "mobile version without pointless horizontal scroll",
            "no critical console errors",
            "indexable text, not trapped in an image",
            "images with sizes and optimization",
            "clear code structure for the next developer",
          ],
        },
      ],
      tables: [
        {
          caption: "Quick layout quality filter",
          headers: ["Area", "OK", "Risk"],
          rows: [
            ["Semantics", "H1–H3 by meaning", "Everything via divs, no headings"],
            ["Responsive", "Key breakpoints", "Desktop only"],
            ["Speed", "Compressed assets", "Multi-megabyte PNGs"],
            ["Accessibility", "Focus, contrast, alt", "Mouse-only clicks"],
          ],
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Code editor, browser DevTools, a graphics editor or Figma for mockups, validators and cross-browser check services — pick by task. Tool names change; skill matters more than a 2015 IDE cult.",
      ],
      lists: [
        {
          intro: "Minimum to start:",
          items: [
            "a solid editor with highlighting",
            "Chrome/Firefox DevTools",
            "checks on a real phone",
            "control over image weight",
          ],
        },
      ],
    },
    {
      title: "Link to SEO and support",
      level: 2,
      paras: [
        "Bad layout slows indexing and frustrates users even with strong copy. Good layout speeds up fixes and lowers the cost of owning the site.",
      ],
      lists: [
        {
          intro: "Useful for a layout engineer to understand:",
          items: [
            "where key CTAs lead",
            "how URL structure and templates work",
            "what not to break in header/footer for analytics",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

/** ES overlay for verstka-saytov — same structure as RU JSON / EN. */
export const verstkaSaytovEs: BlogPost = {
  slug: "verstka-saytov",
  title: "Maquetación front-end de sitios: qué es, etapas y barras de calidad",
  date: "2022-01-17",
  category: "SEO",
  cover: "/images/blog/verstka-saytov/cover-es.webp",
  excerpt:
    "Qué hace un ingeniero de maquetación front-end: del mockup a la página viva. Etapas, HTML/CSS, diseño responsive, QA y el vínculo con el SEO.",
  lead: [
    "La maquetación convierte un mockup de diseño en una página web que funciona: HTML fija la estructura, CSS la apariencia y JS añade comportamiento cuando hace falta.",
    "Abajo: el rol del maquetador en la cadena copy → diseño → código, un proceso moderno y un checklist de aceptación. Los layouts de página enteros en tablas como default son historia.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia la maquetación del diseño?",
      a: "El diseño es cómo debe verse y sentirse. La maquetación es cómo se abre con fiabilidad en navegadores, en móviles y para crawlers.",
    },
    {
      q: "¿JavaScript siempre es obligatorio?",
      a: "No. Empieza con semántica y CSS. Añade JS cuando no puedas prescindir (comportamiento complejo) — y mantén el contenido disponible sin él cuando puedas.",
    },
    {
      q: "¿Debes usar tablas o bloques CSS para el layout de página?",
      a: "Para layouts de página hoy — CSS (flex/grid) y bloques semánticos. Las tablas son para datos tabulares, no para la grilla entera del sitio.",
    },
    {
      q: "¿Cómo afecta la maquetación al SEO?",
      a: "Vía headings, listas, accesibilidad del texto, velocidad, usabilidad móvil y evitar errores críticos de markup.",
    },
    {
      q: "¿Qué revisar antes del handoff?",
      a: "Render cross-browser, comportamiento responsive, validez/consola, imágenes y fuentes, clicabilidad y accesibilidad básica.",
    },
  ],
  sections: [
    {
      title: "Qué es la maquetación",
      level: 2,
      paras: [
        "En simple: el diseñador arma un mockup; el maquetador arma la página que abre el navegador. Piensa en una revista: copy → maquetación de página → impresión; en la web, la impresión se vuelve una página HTML.",
        "En la práctica necesitas: trabajar gráficos del mockup, HTML, CSS, JS básico y un sentido de los límites del navegador y de las pantallas móviles.",
      ],
      lists: [
        {
          intro: "Qué obtiene el negocio:",
          items: [
            "páginas que coinciden con el diseño aprobado",
            "comportamiento responsive en teléfono y desktop",
            "código que se puede mantener",
            "una base para CMS y estructura SEO",
          ],
        },
      ],
      links: [
        {
          label: "Hipertexto: estructura y enlaces",
          href: "/es/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Etapas del trabajo",
      level: 2,
      paras: [
        "Empieza estudiando el mockup: grilla, fuentes, estados de botones, pantallas móviles. Luego corta gráficos, arma markup base, estilos, comportamiento y tests.",
      ],
      lists: [
        {
          intro: "Orden típico:",
          items: [
            "desglosar el mockup y la guideline",
            "exportar imágenes e iconos",
            "armar estructura HTML (semántica)",
            "añadir CSS de lo general a lo específico",
            "añadir el JS necesario",
            "revisar en navegadores y dispositivos",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Maquetar «sobre la marcha» sin mockup móvil. La mayor parte del tráfico es teléfono; mete responsive desde el inicio.",
        },
      ],
    },
    {
      title: "HTML y CSS hoy",
      level: 2,
      paras: [
        "HTML describe qué significan los bloques: headings, listas, navegación, formularios. CSS maneja look y layout. Flexbox y Grid cubren grillas sin hacks de tablas.",
        "Mantén estilos separados del markup. Los valores que se repiten son más fáciles como variables y un design system compartido.",
      ],
      lists: [
        {
          intro: "Buenos hábitos:",
          items: [
            "un H1 por página por significado",
            "listas vía ul/ol, no «párrafos con imágenes de viñeta»",
            "alt text de imagen con sentido",
            "botones y enlaces fáciles de distinguir",
            "no duplicar estilos inline enormes",
          ],
        },
      ],
    },
    {
      title: "Criterios de calidad",
      level: 2,
      paras: [
        "Verse bien en un navegador no basta. Necesitas estabilidad y mantenibilidad.",
      ],
      lists: [
        {
          intro: "Aceptación:",
          items: [
            "match con el mockup dentro de la tolerancia",
            "look correcto en navegadores actuales",
            "versión móvil sin scroll horizontal inútil",
            "sin errores críticos en consola",
            "texto indexable, no atrapado en una imagen",
            "imágenes con tamaños y optimización",
            "estructura de código clara para el siguiente developer",
          ],
        },
      ],
      tables: [
        {
          caption: "Filtro rápido de calidad de maquetación",
          headers: ["Área", "OK", "Riesgo"],
          rows: [
            ["Semántica", "H1–H3 por significado", "Todo vía divs, sin headings"],
            ["Responsive", "Breakpoints clave", "Solo desktop"],
            ["Velocidad", "Assets comprimidos", "PNGs de varios megas"],
            ["Accesibilidad", "Focus, contraste, alt", "Clics solo con ratón"],
          ],
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Editor de código, DevTools del navegador, editor gráfico o Figma para mockups, validadores y servicios de check cross-browser — elige por tarea. Los nombres de tools cambian; la skill importa más que un culto a un IDE de 2015.",
      ],
      lists: [
        {
          intro: "Mínimo para empezar:",
          items: [
            "un editor sólido con highlighting",
            "DevTools de Chrome/Firefox",
            "checks en un teléfono real",
            "control del peso de las imágenes",
          ],
        },
      ],
    },
    {
      title: "Vínculo con SEO y soporte",
      level: 2,
      paras: [
        "Una mala maquetación ralentiza la indexación y frustra a los usuarios aunque el copy sea fuerte. Una buena maquetación acelera los arreglos y baja el coste de poseer el sitio.",
      ],
      lists: [
        {
          intro: "Útil que un maquetador entienda:",
          items: [
            "adónde llevan los CTAs clave",
            "cómo funcionan la estructura de URL y las plantillas",
            "qué no romper en header/footer para analítica",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};

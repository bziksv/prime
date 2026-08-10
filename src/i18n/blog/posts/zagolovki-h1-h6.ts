import type { BlogPost } from "../../../data/blog";

/** EN overlay for zagolovki-h1-h6 — same structure as RU JSON. */
export const zagolovkiH1H6En: BlogPost = {
  slug: "zagolovki-h1-h6",
  title: "H1–H6 headings: structure and meaning for SEO",
  date: "2018-08-03",
  category: "SEO",
  cover: "/images/blog/zagolovki-h1-h6/cover-en.webp",
  excerpt:
    "How to use H1–H6 on a page: one main heading, a clear hierarchy, keywords without stuffing, and readable structure — not 4U ad copy and not HTTP headers.",
  lead: [
    "HTML headings are the page’s meaning frame — for people and for search. This is not a catchy 4U ad line and not HTTP server headers; it is H1–H6 in the markup.",
    "Below: how to tie keywords to levels, how many levels you really need, and typical mistakes like cramming every keyword into one H1. Heading weight is one on-page signal, not a ranking guarantee.",
  ],
  faq: [
    {
      q: "Is this about 4U headlines?",
      a: "No. 4U is a formula for selling copy. This piece covers the HTML H1–H6 hierarchy for SEO and readability.",
    },
    {
      q: "How many H1s per page?",
      a: "Usually one main heading. Several H1s are formally possible in HTML5, but for clarity and the snippet one strong H1 is better.",
    },
    {
      q: "Is H1 more important than title?",
      a: "Title has a stronger effect on the results snippet. H1 is the main visible heading on the page. Both should agree in meaning.",
    },
    {
      q: "Do I need every level down to H6?",
      a: "No. A typical article needs H1 + H2, sometimes H3. Deep nesting just for keywords is not useful.",
    },
    {
      q: "Can I pack keywords into every H?",
      a: "Don’t: stuffing and poor readability. Put the keyword where it fits; the rest should be clear language.",
    },
    {
      q: "Should styles and colors go inside H tags?",
      a: "Style via CSS classes — don’t inflate heading markup with inline noise. A clean structure is easier to maintain.",
    },
    {
      q: "Will headings alone lift conversion?",
      a: "They improve scanning and relevance. Conversion still depends on the offer, UX, and trust.",
    },
  ],
  sections: [
    {
      title: "Keywords and user expectation",
      level: 2,
      paras: [
        "Page semantics set what the H1 and subheads are about. On the homepage — broader themes; on a product or service page — a specific model or offer, not the whole catalog in one line.",
        "Avoid telegraphic spam like “buy X city” without normal language. Search engines understand word forms; people do too — and they leave awkwardly worded pages.",
        "Don’t dump every page keyword into one heading. Part of the meaning belongs in H2/H3 and body copy.",
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
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
        "H1 is the page topic as a whole. H2s are major blocks. H3s are subsections inside a block. Skipping levels “for looks” confuses structure; jumping two levels without need is not worth it.",
        "Example logic: H1 “Temporary registration in Moscow” → H2 “Documents” → H3 “Application.” Details go in paragraphs, not an endless H1.",
        "A long H1 listing everything (“cars, bikes, trucks, tractors…”) reads worse and focuses intent more weakly than a short H1 plus clarification in the text.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "one clear H1 per URL",
            "H2s read as the page outline",
            "keywords naturally, without a keyword sheet",
            "levels match meaning — not “for SEO”",
          ],
        },
      ],
    },
    {
      title: "Tie-in with title, CTA, and mistakes",
      level: 2,
      paras: [
        "Title and H1 should talk about the same offer — in different words when needed — without full copy-paste if it hurts the snippet.",
        "CTAs and emphasis (strong) help people; they don’t replace heading hierarchy. Don’t hide the whole offer only in bold text with no H1.",
        "Common misses: several competing H1s from a template, H2 before H1, button-like headings with no body below, keywords in all six levels “just in case.”",
      ],
      links: [
        {
          label: "4U headlines (copywriting)",
          href: "/en/blog/zagolovki-4u/",
        },
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "HTTP headers",
          href: "/en/blog/http-zagolovki/",
        },
      ],
    },
  ],
  closing: [
    "Open one commercial page: is there one H1, does it match intent and title, and does the outline read via H2s — in ten minutes you often see what to fix before “more keywords.”",
  ],
  related: [
    "optimizatsiya-stranitsy",
    "zagolovki-4u",
    "vnutrennie-faktory",
    "snippet",
    "semanticheskoe-yadro",
    "http-zagolovki",
  ],
};

/** ES overlay for zagolovki-h1-h6 — same structure as RU JSON / EN. */
export const zagolovkiH1H6Es: BlogPost = {
  slug: "zagolovki-h1-h6",
  title: "Encabezados H1–H6: estructura y sentido para SEO",
  date: "2018-08-03",
  category: "SEO",
  cover: "/images/blog/zagolovki-h1-h6/cover-es.webp",
  excerpt:
    "Cómo usar H1–H6 en una página: un encabezado principal, jerarquía clara, keywords sin stuffing y estructura legible — no copy publicitario 4U ni cabeceras HTTP.",
  lead: [
    "Los encabezados HTML son el marco de sentido de la página — para personas y para la búsqueda. Esto no es una línea publicitaria catchy 4U ni cabeceras HTTP del servidor; son H1–H6 en el markup.",
    "Abajo: cómo atar keywords a los niveles, cuántos niveles hacen falta de verdad y errores típicos como meter todas las keywords en un solo H1. El peso del encabezado es una señal on-page, no una garantía de ranking.",
  ],
  faq: [
    {
      q: "¿Esto va de titulares 4U?",
      a: "No. 4U es una fórmula de copy de venta. Esta pieza cubre la jerarquía HTML H1–H6 para SEO y legibilidad.",
    },
    {
      q: "¿Cuántos H1 por página?",
      a: "Por lo general un encabezado principal. Varios H1 son formalmente posibles en HTML5, pero para claridad y el snippet es mejor un H1 fuerte.",
    },
    {
      q: "¿El H1 importa más que el title?",
      a: "El title pesa más en el snippet de resultados. El H1 es el encabezado visible principal en la página. Ambos deben coincidir en sentido.",
    },
    {
      q: "¿Hace falta llegar a H6?",
      a: "No. Un artículo típico necesita H1 + H2, a veces H3. Anidar profundo solo por keywords no aporta.",
    },
    {
      q: "¿Puedo meter keywords en cada H?",
      a: "No: stuffing y mala legibilidad. Pon la keyword donde encaje; el resto, lenguaje claro.",
    },
    {
      q: "¿Deben ir estilos y colores dentro de las etiquetas H?",
      a: "Estiliza con clases CSS — no infles el markup de encabezados con ruido inline. Una estructura limpia es más fácil de mantener.",
    },
    {
      q: "¿Los encabezados solos suben la conversión?",
      a: "Mejoran el escaneo y la relevancia. La conversión sigue dependiendo de la oferta, la UX y la confianza.",
    },
  ],
  sections: [
    {
      title: "Keywords y expectativa del usuario",
      level: 2,
      paras: [
        "La semántica de la página fija de qué van el H1 y los subtítulos. En la homepage — temas más amplios; en una página de producto o servicio — un modelo u oferta concreta, no todo el catálogo en una línea.",
        "Evita spam telegráfico tipo «comprar X ciudad» sin lenguaje normal. Los buscadores entienden formas de palabra; las personas también — y abandonan páginas con wording torpe.",
        "No vuelques todas las keywords de la página en un solo encabezado. Parte del sentido pertenece a H2/H3 y al cuerpo.",
      ],
      links: [
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
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
        "H1 es el tema de la página en conjunto. Los H2 son bloques mayores. Los H3 son subsecciones dentro de un bloque. Saltar niveles «por estética» confunde la estructura; saltar dos niveles sin necesidad no vale la pena.",
        "Lógica de ejemplo: H1 «Registro temporal en Moscú» → H2 «Documentos» → H3 «Solicitud». Los detalles van en párrafos, no en un H1 interminable.",
        "Un H1 largo que lista todo («coches, motos, camiones, tractores…») se lee peor y enfoca la intención con menos fuerza que un H1 corto más aclaración en el texto.",
      ],
      lists: [
        {
          intro: "Reglas básicas:",
          items: [
            "un H1 claro por URL",
            "los H2 se leen como el outline de la página",
            "keywords con naturalidad, sin hoja de keywords",
            "los niveles encajan con el sentido — no «por SEO»",
          ],
        },
      ],
    },
    {
      title: "Encaje con title, CTA y errores",
      level: 2,
      paras: [
        "Title y H1 deben hablar de la misma oferta — con otras palabras cuando haga falta — sin copy-paste completo si perjudica el snippet.",
        "Los CTA y el énfasis (strong) ayudan a las personas; no sustituyen la jerarquía de encabezados. No escondas toda la oferta solo en negrita sin H1.",
        "Fallos habituales: varios H1 en competencia por la plantilla, H2 antes del H1, encabezados tipo botón sin cuerpo debajo, keywords en los seis niveles «por si acaso».",
      ],
      links: [
        {
          label: "Titulares 4U (copywriting)",
          href: "/blog/zagolovki-4u/",
        },
        {
          label: "Factores on-page",
          href: "/blog/vnutrennie-faktory/",
        },
        {
          label: "Cabeceras HTTP",
          href: "/es/blog/http-zagolovki/",
        },
      ],
    },
  ],
  closing: [
    "Abre una página comercial: ¿hay un solo H1, encaja con la intención y el title, y el outline se lee vía H2s? En diez minutos a menudo ves qué arreglar antes de «más keywords».",
  ],
  related: [
    "optimizatsiya-stranitsy",
    "zagolovki-4u",
    "vnutrennie-faktory",
    "snippet",
    "semanticheskoe-yadro",
    "http-zagolovki",
  ],
};

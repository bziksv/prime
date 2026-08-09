import type { BlogPost } from "../../../data/blog";

/** EN overlay for infografika — same structure as RU JSON. */
export const infografikaEn: BlogPost = {
  slug: "infografika",
  title: "Infographics: types, why they matter, and how to keep them clear",
  date: "2021-08-31",
  category: "Content marketing",
  cover: "/images/blog/infografika/cover-en.webp",
  excerpt:
    "What an infographic is, which types exist, how to start a layout, and which mistakes kill readability. Principles beat a list of outdated tools.",
  lead: [
    "An infographic is a visual take on facts, processes, and numbers: a diagram, chart, timeline, map. The job is to grasp something complex faster than from a wall of text.",
    "Below: types, build principles, and typical fails. Layout tools change; meaning and hierarchy first, then a template in Canva, Figma, or another editor.",
  ],
  faq: [
    {
      q: "How is an infographic different from a plain image?",
      a: "It has data structure and a takeaway: the viewer reads relationships (share, steps, comparison), not only atmosphere.",
    },
    {
      q: "When is an infographic better than text?",
      a: "Processes, comparisons, stats, “how it works.” For nuance and caveats you still need text nearby or in a caption.",
    },
    {
      q: "Do you need a designer?",
      a: "For a simple timeline — often no. For a brand report and complex analytics — yes: otherwise you get colorful noise.",
    },
    {
      q: "Which tools should I use?",
      a: "Whatever fits: Figma, Canva, PowerPoint/Keynote, specialized builders. Check export (PNG/SVG/PDF) and template rights.",
    },
    {
      q: "Do infographics help SEO?",
      a: "Indirectly: if people link, save, embed. An image alone without text and alt is weak in search; you need explaining content beside it.",
    },
  ],
  sections: [
    {
      title: "Why infographics help",
      level: 2,
      paras: [
        "They lower the entry bar: a “what’s in the pizza” diagram beats a paragraph of grams. Works in education, journalism, decks, landings, and reports.",
      ],
      lists: [
        {
          intro: "Where they fit:",
          items: [
            "step-by-step processes",
            "comparing plans/options",
            "stats and shares",
            "geography and routes",
            "product inner logic",
          ],
        },
      ],
    },
    {
      title: "Types",
      level: 2,
      paras: [
        "Pick the format for the job — not “what looks prettier in the template.”",
      ],
      tables: [
        {
          caption: "Common formats",
          headers: ["Type", "When"],
          rows: [
            ["Chart / diagram", "Trends and shares"],
            ["Table", "Exact values side by side"],
            ["Diagram / flowchart", "Process and branches"],
            ["Timeline", "Stages over time"],
            ["Map", "Geo and coverage"],
            ["Icons + numbers", "Key facts in a row"],
          ],
        },
      ],
    },
    {
      title: "How to start a layout",
      level: 2,
      paras: [
        "Plan → verified data → one main takeaway → visual hierarchy → color and type. Without a plan a template only speeds up chaos.",
      ],
      lists: [
        {
          intro: "Quality checklist:",
          items: [
            "one focus (not five topics on one banner)",
            "number sources stated",
            "text readable on a phone",
            "icons don’t fight the meaning",
            "brand marks don’t cover the data",
            "alt and caption on the site",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Pretty gradients and tiny type: nothing readable on a phone. Contrast and size first, then decoration.",
        },
      ],
    },
    {
      title: "Tools without chasing trends",
      level: 2,
      paras: [
        "Old guides listed dozens of builders — half changed name or pricing. A practical stack: data table → viz in a familiar editor → export.",
        "Canva and similar tools speed templates; Figma — grid control in a team; Excel/Google Sheets + chart paste — for reports. Video infographics are a separate genre with a storyboard.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "verify the facts",
            "export Retina/2x when needed",
            "compress without mushing the numbers",
            "add a text retelling for SEO and accessibility",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "An infographic works when there’s a clear takeaway and honest data. Pick the type for the job, build hierarchy, check phone readability. The tool is secondary; noise for “wow” kills understanding.",
      ],
    },
  ],
};

/** ES overlay for infografika — same structure as RU JSON / EN. */
export const infografikaEs: BlogPost = {
  slug: "infografika",
  title: "Infografías: tipos, por qué importan y cómo mantenerlas claras",
  date: "2021-08-31",
  category: "Content marketing",
  cover: "/images/blog/infografika/cover.webp",
  excerpt:
    "Qué es una infografía, qué tipos existen, cómo empezar un layout y qué errores matan la legibilidad. Los principios ganan a una lista de herramientas obsoletas.",
  lead: [
    "Una infografía es una lectura visual de hechos, procesos y números: un diagrama, un gráfico, una timeline, un mapa. El trabajo es entender algo complejo más rápido que en un muro de texto.",
    "Abajo: tipos, principios de construcción y fallos típicos. Las herramientas de layout cambian; primero sentido y jerarquía, luego una plantilla en Canva, Figma u otro editor.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una infografía de una imagen normal?",
      a: "Tiene estructura de datos y un takeaway: el viewer lee relaciones (cuota, pasos, comparación), no solo atmósfera.",
    },
    {
      q: "¿Cuándo una infografía es mejor que texto?",
      a: "Procesos, comparaciones, stats, «cómo funciona». Para matices y salvedades aún hace falta texto cerca o en un pie.",
    },
    {
      q: "¿Hace falta un diseñador?",
      a: "Para una timeline simple — a menudo no. Para un informe de marca y analítica compleja — sí: si no, acabas con ruido de colores.",
    },
    {
      q: "¿Qué herramientas usar?",
      a: "Las que encajen: Figma, Canva, PowerPoint/Keynote, builders especializados. Revisa el export (PNG/SVG/PDF) y los derechos de las plantillas.",
    },
    {
      q: "¿Las infografías ayudan al SEO?",
      a: "De forma indirecta: si la gente enlaza, guarda, embebe. Una imagen sola sin texto y alt es débil en búsqueda; hace falta contenido que la explique al lado.",
    },
  ],
  sections: [
    {
      title: "Por qué ayudan las infografías",
      level: 2,
      paras: [
        "Bajan la barrera de entrada: un diagrama de «qué hay en la pizza» gana a un párrafo de gramos. Funciona en educación, periodismo, decks, landings e informes.",
      ],
      lists: [
        {
          intro: "Dónde encajan:",
          items: [
            "procesos paso a paso",
            "comparar planes/opciones",
            "stats y cuotas",
            "geografía y rutas",
            "lógica interna del producto",
          ],
        },
      ],
    },
    {
      title: "Tipos",
      level: 2,
      paras: [
        "Elige el formato por el trabajo — no por «qué se ve más bonito en la plantilla».",
      ],
      tables: [
        {
          caption: "Formatos habituales",
          headers: ["Tipo", "Cuándo"],
          rows: [
            ["Gráfico / diagrama", "Tendencias y cuotas"],
            ["Tabla", "Valores exactos lado a lado"],
            ["Diagrama / flowchart", "Proceso y ramas"],
            ["Timeline", "Etapas en el tiempo"],
            ["Mapa", "Geo y cobertura"],
            ["Iconos + números", "Hechos clave en fila"],
          ],
        },
      ],
    },
    {
      title: "Cómo empezar un layout",
      level: 2,
      paras: [
        "Plan → datos verificados → un takeaway principal → jerarquía visual → color y tipografía. Sin plan, una plantilla solo acelera el caos.",
      ],
      lists: [
        {
          intro: "Checklist de calidad:",
          items: [
            "un foco (no cinco temas en un banner)",
            "fuentes de los números declaradas",
            "texto legible en el móvil",
            "los iconos no pelean con el sentido",
            "el logo de marca no tapa los datos",
            "alt y pie en el sitio",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Gradientes bonitos y tipografía diminuta: nada legible en el móvil. Primero contraste y tamaño, luego decoración.",
        },
      ],
    },
    {
      title: "Herramientas sin perseguir tendencias",
      level: 2,
      paras: [
        "Las guías antiguas listaban docenas de builders — la mitad cambió de nombre o de precio. Stack práctico: tabla de datos → viz en un editor familiar → export.",
        "Canva y similares aceleran plantillas; Figma — control de grid en equipo; Excel/Google Sheets + pegar gráfico — para informes. Las infografías en vídeo son un género aparte con storyboard.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "verificar los hechos",
            "exportar Retina/2x cuando haga falta",
            "comprimir sin emborronar los números",
            "añadir un relato en texto para SEO y accesibilidad",
          ],
        },
      ],
    },
    {
      title: "Cierre breve",
      level: 2,
      paras: [
        "Una infografía funciona cuando hay un takeaway claro y datos honestos. Elige el tipo por el trabajo, construye jerarquía, revisa la legibilidad en el móvil. La herramienta es secundaria; el ruido por «wow» mata la comprensión.",
      ],
    },
  ],
};

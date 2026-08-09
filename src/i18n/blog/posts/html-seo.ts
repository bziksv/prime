import type { BlogPost } from "../../../data/blog";

/** EN overlay for html-seo — same structure as RU JSON. */
export const htmlSeoEn: BlogPost = {
  slug: "html-seo",
  title: "HTML and SEO: why hypertext markup still matters",
  date: "2020-09-28",
  category: "SEO",
  cover: "/images/blog/html-seo/cover-en.webp",
  excerpt:
    "How HTML helps SEO: document structure, title and meta, headings, links, and code validity — without the myth that “broken HTML = a ban,” plus links to related guides.",
  lead: [
    "HTML is the page markup language: tags tell browsers and bots where the heading, text, link, and image are. CSS handles presentation. For SEO, clear structure matters — not a “secret ranking tag.”",
    "Below: why an SEO specialist needs basic HTML, which nodes to check in `<head>` and `<body>`, and how validity actually helps. We don’t copy the hard line “one code error = deindexed”: bots are tolerant, but messy markup hurts people and parsing.",
  ],
  faq: [
    {
      q: "Must an SEO learn HTML from scratch?",
      a: "The basics — yes: head/body, title, meta, h1–h3, a, img, lists. Deep frontend isn’t required if you have a developer.",
    },
    {
      q: "Does CSS affect rankings?",
      a: "Indirectly: readability, CLS, mobile UX. Pretty gradients alone aren’t a ranking factor. Don’t hide key text only in an image with no alternative.",
    },
    {
      q: "Does invalid HTML mean a filter?",
      a: "Not an automatic sentence. But broken layout breaks snippets, accessibility, and sometimes indexable text. Fix what’s critical.",
    },
    {
      q: "How is HTML different from meta tags?",
      a: "Meta tags are part of HTML in the head. HTML is broader: the whole page structure, not only description.",
    },
    {
      q: "Is a no-code builder enough?",
      a: "Often yes at the start. When you hit duplicate titles, broken H1s, or noindex — you need a look at the code.",
    },
    {
      q: "Is Schema / JSON-LD HTML?",
      a: "Structured data usually lives as JSON-LD or microdata inside HTML. Separate topic; HTML is the host page.",
    },
    {
      q: "Is lang on html required?",
      a: "Desirable: helps the browser and accessibility. Not an SEO magic button, but good hygiene.",
    },
    {
      q: "Where do I start checking a page?",
      a: "View source / DevTools: one H1, title, description, canonical, text in the DOM — not only on an image.",
    },
  ],
  sections: [
    {
      title: "HTML + CSS in an SEO context",
      level: 2,
      paras: [
        "Bots and browsers read the DOM. If the heading is in `<h1>`, the link in `<a href>`, the copy in a paragraph — meaning is easier to extract than from nameless `<div>`s with text painted on a canvas.",
        "CSS doesn’t rank pages, but it affects UX and Core Web Vitals. Hiding whole blocks with `display:none` for keywords is a bad idea and an outdated spam trick.",
        "Validity is about predictability: closed tags, correct nesting, one clear heading hierarchy.",
      ],
    },
    {
      title: "Page skeleton",
      level: 2,
      paras: [
        "`<html>` is the document root, often with `lang`. `<head>` is machine-facing: title, meta, link, scripts. `<body>` is what the user sees.",
        "SEO jobs in head: unique title, description, canonical, robots when needed. In body — H1, content, internal links, image alt text.",
      ],
      lists: [
        {
          intro: "Minimum for a money page:",
          items: [
            "one meaningful H1",
            "a unique title",
            "description that matches the URL",
            "text in HTML, not only on a banner",
            "working internal links",
          ],
        },
      ],
      links: [
        {
          label: "Meta tags",
          href: "/en/blog/metategi/",
        },
        {
          label: "The H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "SEO-relevant nodes",
      level: 2,
      paras: [
        "Title and description shape the snippet and click expectations. H1–H3 help structure and scanning. `<a>` carries anchor meaning. `<img alt>` covers accessibility and image understanding.",
        "Lists, tables, `strong`/`em` improve readability; keyword bold spam isn’t needed.",
        "Technical neighbors: canonical, pagination, noindex — see separate materials; don’t copy outdated “required” meta keywords sets.",
      ],
      links: [
        {
          label: "Meta description",
          href: "/en/blog/meta-description/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Practice: tying SEO and HTML together",
      level: 2,
      paras: [
        "Before a brief to developers, describe the URL intent and required elements in code — not only “make it pretty.”",
        "After layout, check the DOM: is text only in JS without SSR/prerender when the bot should see it?",
        "Don’t fix micro-typos in code comments instead of duplicate titles and thin filters — prioritize impact on index and clicks.",
      ],
      notes: [
        {
          title: "A validator ≠ rankings",
          kind: "tip",
          text: "An HTML validator run is useful hygiene. A green check doesn’t guarantee positions; critical red structure errors are worth fixing.",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "HTML sets meaning and structure for people and bots.",
        "For SEO what matters is head meta, headings, links, and accessible text — not “secret tags.”",
        "Go deeper in separate guides on title, H1, and canonical; this piece is a map.",
      ],
    },
  ],
  closing: [
    "Open three money URLs in page source and check title, H1, and whether text exists in the DOM — faster than arguing whether “search validates every bracket.”",
  ],
  related: [
    "metategi",
    "teg-h1",
    "meta-description",
    "dlina-title",
    "kanonicheskiy-teg",
    "snippet",
  ],
};

/** ES overlay for html-seo — same structure as RU JSON / EN. */
export const htmlSeoEs: BlogPost = {
  slug: "html-seo",
  title: "HTML y SEO: por qué el marcado hipertextual sigue importando",
  date: "2020-09-28",
  category: "SEO",
  cover: "/images/blog/html-seo/cover.webp",
  excerpt:
    "Cómo el HTML ayuda al SEO: estructura del documento, title y meta, headings, enlaces y validez del código — sin el mito de que «HTML roto = ban», más enlaces a guías relacionadas.",
  lead: [
    "HTML es el lenguaje de marcado de la página: los tags dicen a navegadores y bots dónde están el heading, el texto, el enlace y la imagen. CSS se ocupa de la presentación. Para SEO importa una estructura clara — no un «tag secreto de ranking».",
    "Abajo: por qué un especialista SEO necesita HTML básico, qué nodos revisar en `<head>` y `<body>`, y cómo ayuda de verdad la validez. No copiamos la línea dura «un error de código = desindexado»: los bots son tolerantes, pero el marcado desordenado perjudica a personas y al parsing.",
  ],
  faq: [
    {
      q: "¿Debe un SEO aprender HTML desde cero?",
      a: "Lo básico — sí: head/body, title, meta, h1–h3, a, img, listas. Frontend profundo no hace falta si tienes un developer.",
    },
    {
      q: "¿El CSS afecta a los rankings?",
      a: "Indirectamente: legibilidad, CLS, UX móvil. Gradientes bonitos solos no son un factor de ranking. No escondas texto clave solo en una imagen sin alternativa.",
    },
    {
      q: "¿HTML inválido significa un filtro?",
      a: "No es una sentencia automática. Pero un layout roto rompe snippets, accesibilidad y a veces el texto indexable. Arregla lo crítico.",
    },
    {
      q: "¿En qué se diferencia HTML de los meta tags?",
      a: "Los meta tags son parte del HTML en el head. HTML es más amplio: toda la estructura de la página, no solo la description.",
    },
    {
      q: "¿Basta un builder no-code?",
      a: "A menudo sí al inicio. Cuando chocan titles duplicados, H1 rotos o noindex — hace falta mirar el código.",
    },
    {
      q: "¿Schema / JSON-LD es HTML?",
      a: "Los datos estructurados suelen vivir como JSON-LD o microdata dentro del HTML. Tema aparte; el HTML es la página anfitriona.",
    },
    {
      q: "¿Hace falta lang en html?",
      a: "Deseable: ayuda al navegador y a la accesibilidad. No es un botón mágico de SEO, pero sí buena higiene.",
    },
    {
      q: "¿Por dónde empiezo a revisar una página?",
      a: "View source / DevTools: un H1, title, description, canonical, texto en el DOM — no solo en una imagen.",
    },
  ],
  sections: [
    {
      title: "HTML + CSS en un contexto SEO",
      level: 2,
      paras: [
        "Bots y navegadores leen el DOM. Si el heading está en `<h1>`, el enlace en `<a href>`, el copy en un párrafo — el sentido se extrae más fácil que de `<div>`s sin nombre con texto pintado en un canvas.",
        "CSS no rankea páginas, pero afecta UX y Core Web Vitals. Esconder bloques enteros con `display:none` por keywords es una mala idea y un truco de spam obsoleto.",
        "La validez va de predictibilidad: tags cerrados, nesting correcto, una jerarquía de headings clara.",
      ],
    },
    {
      title: "Esqueleto de la página",
      level: 2,
      paras: [
        "`<html>` es la raíz del documento, a menudo con `lang`. `<head>` mira a la máquina: title, meta, link, scripts. `<body>` es lo que ve el usuario.",
        "Trabajos SEO en head: title único, description, canonical, robots cuando hace falta. En body — H1, contenido, enlaces internos, alt de imágenes.",
      ],
      lists: [
        {
          intro: "Mínimo para una página de dinero:",
          items: [
            "un H1 con sentido",
            "un title único",
            "description que encaje con la URL",
            "texto en HTML, no solo en un banner",
            "enlaces internos que funcionen",
          ],
        },
      ],
      links: [
        {
          label: "Meta tags",
          href: "/es/blog/metategi/",
        },
        {
          label: "El tag H1",
          href: "/es/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Nodos relevantes para SEO",
      level: 2,
      paras: [
        "Title y description dan forma al snippet y a las expectativas de clic. H1–H3 ayudan a la estructura y al escaneo. `<a>` lleva el sentido del ancla. `<img alt>` cubre accesibilidad y comprensión de imágenes.",
        "Listas, tablas, `strong`/`em` mejoran la legibilidad; no hace falta spam de negrita de keywords.",
        "Vecinos técnicos: canonical, paginación, noindex — mira materiales aparte; no copies sets obsoletos de meta keywords «obligatorias».",
      ],
      links: [
        {
          label: "Meta description",
          href: "/es/blog/meta-description/",
        },
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
        {
          label: "Tag canonical",
          href: "/es/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Práctica: atar SEO y HTML",
      level: 2,
      paras: [
        "Antes de un brief a developers, describe la intención de la URL y los elementos requeridos en código — no solo «hazlo bonito».",
        "Tras el layout, revisa el DOM: ¿el texto está solo en JS sin SSR/prerender cuando el bot debería verlo?",
        "No arregles micro-typos en comentarios del código en vez de titles duplicados y filtros finos — prioriza el impacto en índice y clics.",
      ],
      notes: [
        {
          title: "Un validador ≠ rankings",
          kind: "tip",
          text: "Pasar un validador HTML es higiene útil. Un check verde no garantiza posiciones; los errores rojos críticos de estructura sí merecen arreglo.",
        },
      ],
    },
    {
      title: "Takeaways clave",
      level: 2,
      paras: [
        "HTML fija sentido y estructura para personas y bots.",
        "Para SEO importa el meta del head, headings, enlaces y texto accesible — no «tags secretos».",
        "Profundiza en guías aparte de title, H1 y canonical; esta pieza es un mapa.",
      ],
    },
  ],
  closing: [
    "Abre tres URLs de dinero en el page source y revisa title, H1 y si el texto existe en el DOM — más rápido que discutir si «el buscador valida cada corchete».",
  ],
  related: [
    "metategi",
    "teg-h1",
    "meta-description",
    "dlina-title",
    "kanonicheskiy-teg",
    "snippet",
  ],
};

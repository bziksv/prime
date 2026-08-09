import type { BlogPost } from "../../../data/blog";

/** EN overlay for alt-img — same structure as RU JSON. */
export const altImgEn: BlogPost = {
  slug: "alt-img",
  title: "Image alt and title attributes: how to write them well",
  date: "2020-08-27",
  category: "SEO",
  cover: "/images/blog/alt-img/cover-en.webp",
  excerpt:
    "How alt differs from title on an img tag, why alt matters for accessibility and image search, when title is almost unnecessary, and which mistakes hurt SEO and UX.",
  lead: [
    "`alt` describes the image if the file fails to load or a screen reader reads it. `title` on `img` is a hover tip in some browsers; it barely affects SEO and accessibility.",
    "Below: how to write alt, when to use empty `alt=\"\"`, whether you need title, and what to avoid (keyword stuffing, “image1”). Clickable banners are in the image-as-link article.",
  ],
  faq: [
    {
      q: "Is alt required?",
      a: "For informative images — yes, meaningful text. For purely decorative ones — empty `alt=\"\"` so the screen reader doesn’t read junk.",
    },
    {
      q: "Is img title required for SEO?",
      a: "No. Don’t count on title as a ranking factor. Focus on alt, page context, and file quality.",
    },
    {
      q: "How many characters should alt have?",
      a: "As many as needed to describe meaning briefly. A short phrase often suffices; a keyword dump doesn’t.",
    },
    {
      q: "Do keywords in alt help?",
      a: "Moderate and on-point — fine. Stuffing “buy X cheap photo” into every alt hurts accessibility.",
    },
    {
      q: "Is alt the same as a caption?",
      a: "Not necessarily. A caption is visible to everyone; alt is alternative text. You can share meaning, but they needn’t match word for word.",
    },
    {
      q: "Do button icons need alt?",
      a: "If visible button text is next to them — often `alt=\"\"`. If the icon is the only meaning — alt should name the action.",
    },
    {
      q: "Can I use the filename instead of alt?",
      a: "No. The filename helps organization, but it doesn’t replace alt.",
    },
    {
      q: "Russian or English alt?",
      a: "In the language of the page and audience.",
    },
  ],
  sections: [
    {
      title: "Why img attributes exist",
      level: 2,
      paras: [
        "Bots and assistive tech don’t see pixels like a person. `alt` gives a text equivalent. For people, alt appears if the image is broken; for SEO — a signal about the image and page topic next to content.",
        "`title` was historically treated as another keyword field. Today it’s a weak optional layer; on touch devices there’s often no hover.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "`src` — the file",
            "`alt` — meaning / empty for decoration",
            "`width`/`height` — layout space",
            "`title` — optional tip, not an alt replacement",
          ],
        },
      ],
    },
    {
      title: "How to write alt",
      level: 2,
      paras: [
        "Describe what’s in the image and why it’s there — without “image shows…”. For a product — model/type; for a diagram — what it explains; for an office photo — short and honest.",
        "If the image carries text (screenshot, meme with a line), alt should convey the text’s essence or decision — or screen-reader meaning is lost.",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "bad: `photo`, `img_4521`, `buy fridge cheap sale`",
            "better: `White side-by-side fridge, open shelves`",
            "for a decorative line: `alt=\"\"`",
            "for a search icon button: `alt=\"Search\"` or visible text + empty alt",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "The same commercial keyword in every gallery alt. Noise for people, spam for search.",
        },
      ],
    },
    {
      title: "Alt and SEO: realistically",
      level: 2,
      paras: [
        "Alt helps convey the image topic and sometimes appear in image search. It’s not faster indexing for the whole site and not a page-one guarantee. More important: a relevant page, a light file, clear context around it.",
        "Don’t duplicate the page Title into every alt. Don’t hide the main offer only in an image without HTML text.",
      ],
      lists: [
        {
          intro: "Stronger than alt:",
          items: [
            "quality page content",
            "compression and modern formats",
            "meaningful captions",
            "internal links in text",
          ],
        },
      ],
      links: [
        {
          label: "Images and attention",
          href: "/en/blog/kartinki-vnimanie/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Title on an image",
      level: 2,
      paras: [
        "You can give a short hover tip on desktop. Don’t dump a keyword sheet there. Many users never see title.",
        "Don’t confuse `title` on `img` with the document `<title>` or a `<figcaption>` caption.",
      ],
      lists: [
        {
          intro: "When title fits:",
          items: [
            "extra clarification without critical meaning",
            "not as the only description source",
            "not instead of accessible link text",
          ],
        },
      ],
    },
    {
      title: "Image links and decoration",
      level: 2,
      paras: [
        "If `img` is inside a link with no nearby text, alt should describe the destination (“Pump catalog”), not only “blue button.”",
        "CSS background images have no alt — don’t put the only important meaning there.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "informative — meaningful alt",
            "decor — empty alt",
            "image link — alt = action/destination",
            "no keyword bulk",
          ],
        },
      ],
      links: [
        {
          label: "Image as a link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "In the CMS make alt required for content photos. Crawl for empty and template alts. On accessibility audits check decorative icons.",
        "Example: `<img src=\"/images/pump.webp\" alt=\"Centrifugal well pump, stainless housing\" width=\"800\" height=\"600\">`.",
      ],
      lists: [
        {
          intro: "Editorial playbook:",
          items: [
            "write alt on upload, not “later”",
            "ban `image`, `photo`, `banner`",
            "review commercial galleries",
            "don’t use title as a keyword dump",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One precise alt beats ten “optimized” clones.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "kartinki-vnimanie",
    "razmer-stranitsy",
    "ishodnyy-kod",
    "optimizatsiya-stranitsy",
  ],
};

/** ES overlay for alt-img — same structure as RU JSON / EN. */
export const altImgEs: BlogPost = {
  slug: "alt-img",
  title: "Atributos alt y title de imagen: cómo escribirlos bien",
  date: "2020-08-27",
  category: "SEO",
  cover: "/images/blog/alt-img/cover.webp",
  excerpt:
    "En qué se diferencia alt de title en una etiqueta img, por qué alt importa para accesibilidad y búsqueda de imágenes, cuándo title casi no hace falta y qué errores duelen al SEO y a la UX.",
  lead: [
    "`alt` describe la imagen si el archivo no carga o un lector de pantalla la lee. `title` en `img` es una pista al hover en algunos navegadores; apenas afecta al SEO y a la accesibilidad.",
    "Abajo: cómo escribir alt, cuándo usar `alt=\"\"` vacío, si hace falta title y qué evitar (keyword stuffing, «image1»). Los banners clicables están en el artículo de imagen como enlace.",
  ],
  faq: [
    {
      q: "¿El alt es obligatorio?",
      a: "Para imágenes informativas — sí, texto con sentido. Para las puramente decorativas — `alt=\"\"` vacío para que el lector de pantalla no lea basura.",
    },
    {
      q: "¿El title de img es obligatorio para SEO?",
      a: "No. No cuentes con title como factor de ranking. Céntrate en alt, contexto de la página y calidad del archivo.",
    },
    {
      q: "¿Cuántos caracteres debe tener el alt?",
      a: "Los que hagan falta para describir el sentido con brevedad. Suele bastar una frase corta; un vertedero de keywords no.",
    },
    {
      q: "¿Ayudan las keywords en el alt?",
      a: "Moderadas y al punto — bien. Meter «comprar X barato foto» en cada alt duele a la accesibilidad.",
    },
    {
      q: "¿El alt es lo mismo que un pie de foto?",
      a: "No necesariamente. El pie es visible para todos; el alt es texto alternativo. Pueden compartir sentido, pero no hace falta que coincidan palabra por palabra.",
    },
    {
      q: "¿Los iconos de botón necesitan alt?",
      a: "Si hay texto visible del botón al lado — a menudo `alt=\"\"`. Si el icono es el único sentido — el alt debe nombrar la acción.",
    },
    {
      q: "¿Puedo usar el nombre de archivo en lugar del alt?",
      a: "No. El nombre de archivo ayuda a la organización, pero no sustituye al alt.",
    },
    {
      q: "¿Alt en español o en inglés?",
      a: "En el idioma de la página y de la audiencia.",
    },
  ],
  sections: [
    {
      title: "Por qué existen los atributos de img",
      level: 2,
      paras: [
        "Los bots y la tecnología asistiva no ven píxeles como una persona. `alt` da un equivalente de texto. Para la gente, el alt aparece si la imagen se rompe; para SEO — una señal sobre la imagen y el tema de la página junto al contenido.",
        "`title` históricamente se trató como otro campo de keywords. Hoy es una capa opcional floja; en dispositivos touch a menudo no hay hover.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "`src` — el archivo",
            "`alt` — sentido / vacío para decoración",
            "`width`/`height` — espacio en el layout",
            "`title` — tip opcional, no un reemplazo del alt",
          ],
        },
      ],
    },
    {
      title: "Cómo escribir alt",
      level: 2,
      paras: [
        "Describe qué hay en la imagen y por qué está ahí — sin «la imagen muestra…». Para un producto — modelo/tipo; para un diagrama — qué explica; para una foto de oficina — corto y honesto.",
        "Si la imagen lleva texto (screenshot, meme con una línea), el alt debe transmitir la esencia o la decisión del texto — o se pierde el sentido para el lector de pantalla.",
      ],
      lists: [
        {
          intro: "Ejemplos:",
          items: [
            "malo: `photo`, `img_4521`, `comprar nevera barata oferta`",
            "mejor: `Nevera americana blanca, estantes abiertos`",
            "para una línea decorativa: `alt=\"\"`",
            "para un botón icono de búsqueda: `alt=\"Buscar\"` o texto visible + alt vacío",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "La misma keyword comercial en cada alt de la galería. Ruido para la gente, spam para la búsqueda.",
        },
      ],
    },
    {
      title: "Alt y SEO: con realismo",
      level: 2,
      paras: [
        "El alt ayuda a transmitir el tema de la imagen y a veces a aparecer en la búsqueda de imágenes. No es indexación más rápida de todo el sitio ni una garantía de primera página. Más importa: una página relevante, un archivo ligero, contexto claro alrededor.",
        "No dupliques el Title de la página en cada alt. No escondas la oferta principal solo en una imagen sin texto HTML.",
      ],
      lists: [
        {
          intro: "Más fuerte que el alt:",
          items: [
            "contenido de calidad en la página",
            "compresión y formatos modernos",
            "pies de foto con sentido",
            "enlaces internos en el texto",
          ],
        },
      ],
      links: [
        {
          label: "Imágenes y atención",
          href: "/es/blog/kartinki-vnimanie/",
        },
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Title en una imagen",
      level: 2,
      paras: [
        "Puedes dar una tip corta al hover en desktop. No tires ahí una hoja de keywords. Muchos usuarios nunca ven el title.",
        "No confundas `title` en `img` con el `<title>` del documento ni con un pie `<figcaption>`.",
      ],
      lists: [
        {
          intro: "Cuándo encaja el title:",
          items: [
            "aclaración extra sin sentido crítico",
            "no como única fuente de descripción",
            "no en lugar del texto accesible del enlace",
          ],
        },
      ],
    },
    {
      title: "Enlaces de imagen y decoración",
      level: 2,
      paras: [
        "Si `img` va dentro de un enlace sin texto cerca, el alt debe describir el destino («Catálogo de bombas»), no solo «botón azul».",
        "Las imágenes de fondo en CSS no tienen alt — no pongas ahí el único sentido importante.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "informativa — alt con sentido",
            "decor — alt vacío",
            "enlace de imagen — alt = acción/destino",
            "sin bulk de keywords",
          ],
        },
      ],
      links: [
        {
          label: "Imagen como enlace",
          href: "/es/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Práctica de despliegue",
      level: 2,
      paras: [
        "En el CMS haz el alt obligatorio para fotos de contenido. Crawl de alts vacíos y de plantilla. En auditorías de accesibilidad revisa iconos decorativos.",
        "Ejemplo: `<img src=\"/images/pump.webp\" alt=\"Bomba centrífuga de pozo, carcasa de acero inoxidable\" width=\"800\" height=\"600\">`.",
      ],
      lists: [
        {
          intro: "Playbook editorial:",
          items: [
            "escribe el alt al subir, no «luego»",
            "prohíbe `image`, `photo`, `banner`",
            "revisa galerías comerciales",
            "no uses title como vertedero de keywords",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Un alt preciso gana a diez clones «optimizados».",
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "kartinki-vnimanie",
    "razmer-stranitsy",
    "ishodnyy-kod",
    "optimizatsiya-stranitsy",
  ],
};

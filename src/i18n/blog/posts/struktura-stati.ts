import type { BlogPost } from "../../../data/blog";

/** EN overlay for struktura-stati — same structure as RU JSON. */
export const strukturaStatiEn: BlogPost = {
  slug: "struktura-stati",
  title: "How to structure an article so people (and search) can follow it",
  date: "2019-11-20",
  category: "Content marketing",
  cover: "/images/blog/struktura-stati/cover-en.webp",
  excerpt:
    "Build article logic with H1–H3, blocks, and lists — and know when a short piece can skip subheads. No “keywords in H2 = rankings” promises.",
  lead: [
    "Article structure is the logical frame: block order, headings, and how paragraphs lead to a takeaway. There’s no universal template for every brief — you fit the frame to the goal, length, and page format.",
    "Here’s why structure matters for readers and search, how heading levels work, when you can skip H2s, and how not to clone the same skeleton everywhere. Writing the full article is a separate process; site IA (sections, URLs) lives in the SEO site structure guide.",
  ],
  faq: [
    {
      q: "Is article structure the same as a table of contents?",
      a: "Almost. The pre-writing outline becomes the TOC after you write. The TOC is the finished structure.",
    },
    {
      q: "Are H2s required in short copy?",
      a: "Not always. Up to about 1–1.5k characters, paragraphs, lists, and emphasis often suffice — if the idea is already clear.",
    },
    {
      q: "How many heading levels do I need?",
      a: "Usually H1 + H2, plus H3 when needed. H4–H6 on landings and blogs are rarely justified — they confuse the eye.",
    },
    {
      q: "Do keywords in headings help rankings?",
      a: "Headings should match the block’s meaning and intent. Stuffing SEO phrases without usefulness doesn’t replace a good answer.",
    },
    {
      q: "Who decides hierarchy — SEO or the writer?",
      a: "Together. The writer owns reading logic; SEO owns intent and sensible markup. Don’t break meaning for a schema.",
    },
    {
      q: "How is this different from site structure?",
      a: "Here — the frame of one text. Site structure is sections, URL hierarchy, and internal links.",
    },
    {
      q: "Do I need one template for the whole blog?",
      a: "A reference frame helps; cloning every article doesn’t. Readers tire of identical blocks.",
    },
  ],
  sections: [
    {
      title: "What text structure means",
      level: 2,
      paras: [
        "Structure is the logical base of the piece: internal order and how paragraphs connect. You usually sketch it before typing and revise while writing; in the end it looks like a table of contents.",
        "There’s no perfect specimen. A good frame helps the brief, but blind-copying someone else’s outline for another job hurts. Stay creative: logic and usefulness first — not schema alone.",
      ],
      notes: [
        {
          title: "TOC = finished structure",
          text: "If the headings don’t show the line of thought, the frame is still raw.",
        },
      ],
    },
    {
      title: "Who it’s for — and why it matters",
      level: 2,
      paras: [
        "A wall of text without anchors is harder for readers: finding a fragment and seeing where the article goes is tougher. Headed blocks let people scan and read selectively.",
        "Search cares about clarity and headings that match the content. H1–H6 markup separates headings from paragraphs. That isn’t a ranking guarantee — ranking is broader than “put an H2 with a keyword.”",
      ],
      links: [
        {
          label: "How to write an article",
          href: "/en/blog/kak-napisat-statyu/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Heading levels",
      level: 2,
      paras: [
        "H1 is the title of the whole piece (usually one per page). H2s are major meaning chunks. H3s refine inside an H2 and keep subsections clear.",
        "How many levels you need depends on length and topic. Big guides and roundups tolerate a deeper grid; short posts don’t.",
        "H4–H6 are rare in practice: visually noisy, confusing for readers, and often excess for SEO.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "one H1 with the page’s essence",
            "H2s for the reader’s big questions",
            "H3 only if a block truly splits",
            "heading = content — no clickbait that fights the text",
          ],
        },
      ],
      links: [
        {
          label: "4U headlines",
          href: "/en/blog/zagolovki-4u/",
        },
      ],
    },
    {
      title: "When a lighter structure works",
      level: 2,
      paras: [
        "Not every text needs a full H2/H3 grid. The call depends on length, purpose, and page template (layout sometimes limits splitting).",
        "Short descriptions, teasers, cards, and mini-tips often live on paragraphs, lists, and emphasis without subheads — if the main idea stays clear.",
        "In chaos without anchors you can lose the point. Then at least lists and a clear CTA beat a wall of sentences.",
      ],
      notes: [
        {
          title: "Don’t mix this up with site structure",
          text: "Section and URL hierarchy is a separate job. An article can be perfectly marked up and still sit in a crooked catalog section.",
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Recommendations",
      level: 2,
      paras: [
        "Build the frame before the draft — easier to highlight what matters and not wander off topic.",
        "Don’t clone one template across every piece: sameness tires readers. Keep the logic; change delivery for the format (how-to, review, opinion, case).",
        "Tied to the writing process: outline → draft → revise structure if the line of thought changed.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "structure is for reading and clarity — not an SEO checkbox",
            "H1–H3 is usually enough",
            "short texts can live without H2",
            "a heading must match its block",
            "site and article are different structure levels",
          ],
        },
      ],
      links: [
        {
          label: "Longreads",
          href: "/en/blog/longrid/",
        },
        {
          label: "Copywriter brief",
          href: "/en/blog/tz-kopiraytera/",
        },
      ],
    },
  ],
  closing: [
    "Before the next article, sketch 4–7 H2s as the reader’s questions and check that each has an answer — not fluff under a keyword. That often beats a universal template.",
  ],
  related: [
    "longrid",
    "kak-napisat-statyu",
    "zagolovki-4u",
    "seo-kopirayting",
    "tz-kopiraytera",
    "seo-struktura-sayta",
  ],
};

/** ES overlay for struktura-stati — same structure as RU JSON. */
export const strukturaStatiEs: BlogPost = {
  slug: "struktura-stati",
  title:
    "Cómo estructurar un artículo para que la gente (y la búsqueda) lo sigan",
  date: "2019-11-20",
  category: "Content marketing",
  cover: "/images/blog/struktura-stati/cover.webp",
  excerpt:
    "Arma la lógica del artículo con H1–H3, bloques y listas — y sabe cuándo una pieza corta puede saltarse subtítulos. Sin promesas de «keywords en H2 = rankings».",
  lead: [
    "La estructura de un artículo es el marco lógico: orden de bloques, headings y cómo los párrafos llevan a una conclusión. No hay plantilla universal para cada brief — encajas el marco al objetivo, la longitud y el formato de página.",
    "Aquí: por qué importa la estructura para lectores y búsqueda, cómo funcionan los niveles de heading, cuándo puedes saltarte los H2 y cómo no clonar el mismo esqueleto en todas partes. Escribir el artículo completo es otro proceso; la arquitectura de información del sitio (secciones, URLs) vive en la guía de estructura SEO del sitio.",
  ],
  faq: [
    {
      q: "¿La estructura del artículo es lo mismo que una tabla de contenidos?",
      a: "Casi. El outline previo a escribir se convierte en TOC al terminar. El TOC es la estructura acabada.",
    },
    {
      q: "¿Hacen falta H2s en copy corto?",
      a: "No siempre. Hasta unos 1–1,5k caracteres, párrafos, listas y énfasis suelen bastar — si la idea ya está clara.",
    },
    {
      q: "¿Cuántos niveles de heading hacen falta?",
      a: "Suele bastar H1 + H2, más H3 cuando haga falta. H4–H6 en landings y blogs rara vez se justifican — confunden la vista.",
    },
    {
      q: "¿Las keywords en headings ayudan al ranking?",
      a: "Los headings deben encajar con el sentido del bloque y el intent. Meter frases SEO sin utilidad no sustituye una buena respuesta.",
    },
    {
      q: "¿Quién decide la jerarquía — SEO o el escritor?",
      a: "Juntos. El escritor lleva la lógica de lectura; el SEO, el intent y el markup sensato. No rompas el sentido por un esquema.",
    },
    {
      q: "¿En qué se diferencia de la estructura del sitio?",
      a: "Aquí — el marco de un texto. La estructura del sitio son secciones, jerarquía de URLs y enlaces internos.",
    },
    {
      q: "¿Hace falta una plantilla para todo el blog?",
      a: "Un marco de referencia ayuda; clonar cada artículo no. El lector se cansa de bloques idénticos.",
    },
  ],
  sections: [
    {
      title: "Qué significa estructura de texto",
      level: 2,
      paras: [
        "La estructura es la base lógica de la pieza: orden interno y cómo se conectan los párrafos. Suele bocetarse antes de tipear y revisarse al escribir; al final se parece a una tabla de contenidos.",
        "No hay un ejemplar perfecto. Un buen marco ayuda al brief, pero copiar a ciegas el outline de otro para otro trabajo hace daño. Mantén creatividad: primero lógica y utilidad — no el esquema solo.",
      ],
      notes: [
        {
          title: "TOC = estructura terminada",
          text: "Si los headings no muestran la línea de pensamiento, el marco sigue crudo.",
        },
      ],
    },
    {
      title: "Para quién es — y por qué importa",
      level: 2,
      paras: [
        "Un muro de texto sin anclas es más duro para el lector: encontrar un fragmento y ver adónde va el artículo cuesta más. Los bloques con heading permiten escanear y leer selectivo.",
        "La búsqueda cuida la claridad y headings que encajen con el contenido. El markup H1–H6 separa headings de párrafos. Eso no es garantía de ranking — el ranking es más amplio que «pon un H2 con una keyword».",
      ],
      links: [
        {
          label: "Cómo escribir un artículo",
          href: "/es/blog/kak-napisat-statyu/",
        },
        {
          label: "Copywriting SEO",
          href: "/es/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Niveles de heading",
      level: 2,
      paras: [
        "H1 es el título de toda la pieza (suele haber uno por página). Los H2s son trozos grandes de sentido. Los H3s afinan dentro de un H2 y mantienen claras las subsecciones.",
        "Cuántos niveles hacen falta depende de longitud y tema. Guías grandes y roundups toleran una rejilla más profunda; posts cortos no.",
        "H4–H6 son raros en la práctica: ruido visual, confusión para el lector y a menudo exceso para SEO.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "un H1 con la esencia de la página",
            "H2s para las grandes preguntas del lector",
            "H3 solo si un bloque se parte de verdad",
            "heading = contenido — sin clickbait que pelee con el texto",
          ],
        },
      ],
      links: [
        {
          label: "Headlines 4U",
          href: "/es/blog/zagolovki-4u/",
        },
      ],
    },
    {
      title: "Cuándo funciona una estructura más ligera",
      level: 2,
      paras: [
        "No todo texto necesita una rejilla completa de H2/H3. La llamada depende de longitud, propósito y plantilla de página (el layout a veces limita el split).",
        "Descripciones cortas, teasers, cards y mini-tips a menudo viven con párrafos, listas y énfasis sin subtítulos — si la idea principal sigue clara.",
        "En el caos sin anclas puedes perder el punto. Entonces al menos listas y un CTA claro ganan a un muro de frases.",
      ],
      notes: [
        {
          title: "No lo mezcles con la estructura del sitio",
          text: "La jerarquía de secciones y URLs es otro trabajo. Un artículo puede estar perfectamente marcado y aún así vivir en una sección torcida del catálogo.",
        },
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Recomendaciones",
      level: 2,
      paras: [
        "Arma el marco antes del borrador — más fácil subrayar lo que importa y no salirte del tema.",
        "No clones una plantilla en cada pieza: la monotonía cansa. Mantén la lógica; cambia la entrega según el formato (how-to, review, opinión, caso).",
        "Atado al proceso de escritura: outline → borrador → revisa la estructura si cambió la línea de pensamiento.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "la estructura es para leer y claridad — no un checkbox SEO",
            "H1–H3 suele bastar",
            "textos cortos pueden vivir sin H2",
            "un heading debe encajar con su bloque",
            "sitio y artículo son niveles distintos de estructura",
          ],
        },
      ],
      links: [
        {
          label: "Longreads",
          href: "/es/blog/longrid/",
        },
        {
          label: "Brief para copywriter",
          href: "/es/blog/tz-kopiraytera/",
        },
      ],
    },
  ],
  closing: [
    "Antes del próximo artículo, boceta 4–7 H2s como preguntas del lector y comprueba que cada uno tiene respuesta — no fluff bajo una keyword. Eso a menudo gana a una plantilla universal.",
  ],
  related: [
    "longrid",
    "kak-napisat-statyu",
    "zagolovki-4u",
    "seo-kopirayting",
    "tz-kopiraytera",
    "seo-struktura-sayta",
  ],
};

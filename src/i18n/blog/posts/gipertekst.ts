import type { BlogPost } from "../../../data/blog";

/** EN overlay for gipertekst — same structure as RU JSON. */
export const gipertekstEn: BlogPost = {
  slug: "gipertekst",
  title: "Hypertext: what it is, structure, and why your site needs it",
  date: "2022-01-25",
  category: "SEO",
  cover: "/images/blog/gipertekst/cover-en.webp",
  excerpt:
    "What hypertext is: links, HTML markup, document structure. Why cross-links help a site, an encyclopedia, and an online store.",
  lead: [
    "Hypertext is text with links: you can jump to another fragment, page, or media. The whole web rests on this — from articles to catalogs.",
    "Below: how the idea works, how HTML differs from “plain text”, and what solid internal linking gives a site.",
  ],
  faq: [
    {
      q: "Is hypertext only links?",
      a: "Links are the core. Plus document structure (headings, lists, media) that markup defines — easier to read and index.",
    },
    {
      q: "How is HTML related to hypertext?",
      a: "HTML is the markup language for hypertext documents on the web: tags tell the browser where a paragraph, heading, image, and link are.",
    },
    {
      q: "Why does hypertext matter for SEO?",
      a: "Internal links help crawling and pass weight/meaning between pages. External links guide users and sometimes build trust when relevant.",
    },
    {
      q: "How is it different from a regular PDF?",
      a: "PDFs can have links too, but web hypertext is built for a network of documents, updates, and navigation between URLs.",
    },
    {
      q: "Does a site owner need to know HTML?",
      a: "At a basic level — yes: understand headings, links, and anchors. Deep layout can be delegated, but you should own the structure meaning yourself.",
    },
  ],
  sections: [
    {
      title: "What hypertext is",
      level: 2,
      paras: [
        "A classic example is an encyclopedia: a term leads to another article. On the web it’s the same: menus, product cards, “related materials”, footnotes to sources.",
        "Ted Nelson coined the term: text with branching, not one linear strip read start to finish.",
      ],
      lists: [
        {
          intro: "Where you meet it:",
          items: [
            "sites and web apps",
            "wikis and help centers",
            "electronic catalogs and stores",
            "product documentation",
          ],
        },
      ],
    },
    {
      title: "Structure: content and markup",
      level: 2,
      paras: [
        "A hypertext document has two sides. Content — meanings, copy, images. Markup — tags and attributes that explain block roles to the browser.",
        "Tags are usually paired: opening and closing. Paragraph example: `<p>…</p>`. Some are single (e.g. an image). A link is a separate element with a destination address.",
      ],
      lists: [
        {
          intro: "Minimum worth knowing on a site:",
          items: [
            "H1–H3 headings — topic hierarchy",
            "paragraphs and lists — readability",
            "`<a href=\"…\">` links — navigation",
            "anchors — jump to a block on the same page",
            "image alt — meaning for people and bots",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Link anchor text should promise the page content (“shipping and payment”), not “here” or “more” with no context.",
        },
      ],
    },
    {
      title: "How it appeared and why it helps",
      level: 2,
      paras: [
        "The link idea is older than the mass internet: books and encyclopedias pointed to other works. The network made the jump instant.",
        "For the user the benefit is simple: less manual search, clear navigation, go deeper only where needed.",
      ],
      lists: [
        {
          intro: "Advantages:",
          items: [
            "logic — a complex topic split into linked nodes",
            "intuition — predictable jumps",
            "interactivity — text + media + actions",
            "time saved — no collecting everything by hand via search",
          ],
        },
      ],
    },
    {
      title: "Hypertext on a commercial site",
      level: 2,
      paras: [
        "In a store and on a corporate site, links are routes to revenue: from article to service, from category to filter, from product card to shipping and payment.",
        "Weak internal linking leaves the user in a dead end. Strong linking shortens the path to a lead and helps search engines understand structure.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "the menu mirrors real sections",
            "in copy — links to related services/products",
            "breadcrumbs and related blocks",
            "don’t spam dozens of identical anchors to one URL",
          ],
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
      title: "Common mistakes",
      level: 2,
      paras: [
        "Meaningless links, broken URLs, clicks only from an image with no text, a wall of copy with no headings — all of that breaks hypertext as a system.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "all important pages reachable in 2–3 clicks",
            "no mass 404s on old links",
            "mobile links easy to tap",
            "PDFs and external files labeled if you link to them",
          ],
        },
      ],
      notes: [
        {
          title: "Next on the topic",
          kind: "tip",
          text: "Separate blog pieces cover clickable links and HTML in an SEO context in more depth — here we lock the concept frame.",
        },
      ],
    },
  ],
};

/** ES overlay for gipertekst — same structure as RU JSON / EN. */
export const gipertekstEs: BlogPost = {
  slug: "gipertekst",
  title: "Hipertexto: qué es, estructura y por qué lo necesita tu sitio",
  date: "2022-01-25",
  category: "SEO",
  cover: "/images/blog/gipertekst/cover-es.webp",
  excerpt:
    "Qué es el hipertexto: enlaces, markup HTML, estructura del documento. Por qué los cross-links ayudan a un sitio, una enciclopedia y una tienda online.",
  lead: [
    "El hipertexto es texto con enlaces: puedes saltar a otro fragmento, página o media. Toda la web se apoya en esto — de artículos a catálogos.",
    "Abajo: cómo funciona la idea, en qué se diferencia HTML de «texto plano» y qué da un enlazado interno sólido a un sitio.",
  ],
  faq: [
    {
      q: "¿El hipertexto son solo enlaces?",
      a: "Los enlaces son el núcleo. Más la estructura del documento (headings, listas, media) que define el markup — más fácil de leer e indexar.",
    },
    {
      q: "¿Cómo se relaciona HTML con el hipertexto?",
      a: "HTML es el lenguaje de markup de documentos hipertexto en la web: las etiquetas dicen al navegador dónde está un párrafo, un heading, una imagen y un enlace.",
    },
    {
      q: "¿Por qué importa el hipertexto para el SEO?",
      a: "Los enlaces internos ayudan al crawling y pasan peso/sentido entre páginas. Los enlaces externos guían al usuario y a veces construyen confianza cuando son relevantes.",
    },
    {
      q: "¿En qué se diferencia de un PDF normal?",
      a: "Los PDF también pueden tener enlaces, pero el hipertexto web está pensado para una red de documentos, updates y navegación entre URLs.",
    },
    {
      q: "¿Un dueño de sitio necesita saber HTML?",
      a: "A nivel básico — sí: entender headings, enlaces y anclas. El layout profundo se puede delegar, pero el sentido de la estructura deberías dominarlo tú.",
    },
  ],
  sections: [
    {
      title: "Qué es el hipertexto",
      level: 2,
      paras: [
        "Un ejemplo clásico es una enciclopedia: un término lleva a otro artículo. En la web es lo mismo: menús, fichas de producto, «materiales relacionados», notas a pie hacia fuentes.",
        "Ted Nelson acuñó el término: texto con ramificaciones, no una sola franja lineal leída de principio a fin.",
      ],
      lists: [
        {
          intro: "Dónde te lo encuentras:",
          items: [
            "sitios y apps web",
            "wikis y centros de ayuda",
            "catálogos electrónicos y tiendas",
            "documentación de producto",
          ],
        },
      ],
    },
    {
      title: "Estructura: contenido y markup",
      level: 2,
      paras: [
        "Un documento hipertexto tiene dos caras. Contenido — sentidos, copy, imágenes. Markup — etiquetas y atributos que explican al navegador el rol de los bloques.",
        "Las etiquetas suelen ir en pares: apertura y cierre. Ejemplo de párrafo: `<p>…</p>`. Algunas son simples (p. ej. una imagen). Un enlace es un elemento aparte con dirección de destino.",
      ],
      lists: [
        {
          intro: "Mínimo que conviene saber en un sitio:",
          items: [
            "headings H1–H3 — jerarquía del tema",
            "párrafos y listas — legibilidad",
            "enlaces `<a href=\"…\">` — navegación",
            "anclas — salto a un bloque en la misma página",
            "alt de imagen — sentido para personas y bots",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "El texto ancla del enlace debe prometer el contenido de la página («envío y pago»), no «aquí» o «más» sin contexto.",
        },
      ],
    },
    {
      title: "Cómo apareció y por qué ayuda",
      level: 2,
      paras: [
        "La idea del enlace es anterior a internet de masas: libros y enciclopedias apuntaban a otras obras. La red hizo el salto instantáneo.",
        "Para el usuario el beneficio es simple: menos búsqueda manual, navegación clara, profundizar solo donde hace falta.",
      ],
      lists: [
        {
          intro: "Ventajas:",
          items: [
            "lógica — un tema complejo partido en nodos enlazados",
            "intuición — saltos predecibles",
            "interactividad — texto + media + acciones",
            "tiempo ahorrado — sin recolectar todo a mano vía búsqueda",
          ],
        },
      ],
    },
    {
      title: "Hipertexto en un sitio comercial",
      level: 2,
      paras: [
        "En una tienda y en un sitio corporativo, los enlaces son rutas al ingreso: de artículo a servicio, de categoría a filtro, de ficha de producto a envío y pago.",
        "Un enlazado interno flojo deja al usuario en un callejón sin salida. Uno fuerte acorta el camino al lead y ayuda a los buscadores a entender la estructura.",
      ],
      lists: [
        {
          intro: "Reglas básicas:",
          items: [
            "el menú refleja secciones reales",
            "en el copy — enlaces a servicios/productos afines",
            "breadcrumbs y bloques relacionados",
            "no spamees docenas de anclas idénticas a una URL",
          ],
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
      title: "Errores habituales",
      level: 2,
      paras: [
        "Enlaces sin sentido, URLs rotas, clics solo desde una imagen sin texto, un muro de copy sin headings — todo eso rompe el hipertexto como sistema.",
      ],
      lists: [
        {
          intro: "Comprueba:",
          items: [
            "todas las páginas importantes alcanzables en 2–3 clics",
            "sin 404 masivos en enlaces viejos",
            "enlaces fáciles de tocar en móvil",
            "PDFs y archivos externos etiquetados si enlazas a ellos",
          ],
        },
      ],
      notes: [
        {
          title: "Siguiente sobre el tema",
          kind: "tip",
          text: "Piezas aparte del blog cubren enlaces clicables y HTML en contexto SEO con más profundidad — aquí fijamos el marco del concepto.",
        },
      ],
    },
  ],
};

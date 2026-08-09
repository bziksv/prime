import type { BlogPost } from "../../../data/blog";

/** EN overlay for chto-takoe-ssylka — same structure as RU JSON. */
export const chtoTakoeSsylkaEn: BlogPost = {
  slug: "chto-takoe-ssylka",
  title: "What a link is: types, anchors, and the role in SEO",
  date: "2021-09-21",
  category: "SEO",
  cover: "/images/blog/chto-takoe-ssylka/cover-en.webp",
  excerpt:
    "Hyperlinks in HTML: internal and external, absolute and relative, anchors and bare URLs, nofollow. How links help navigation and site crawl.",
  lead: [
    "A link (hyperlink) is a page element that leads to another URL: an article, a file, an on-page anchor, or an external site. In HTML that’s the `<a href=\"…\">` tag.",
    "Below: what a link looks like, which types exist, why anchors matter, and how links tie into crawling and SEO. How to make text clickable is a separate piece; here it’s a concept map.",
  ],
  faq: [
    {
      q: "How is a link different from a URL?",
      a: "A URL is an address. A link is how you go to that address (usually an `<a>` tag with text or an image).",
    },
    {
      q: "What is an anchor?",
      a: "The text (or text substitute) between `<a>` and `</a>` that people click. “Buy a pump” is an anchor; a bare `https://…` is often called a bare or unanchored link.",
    },
    {
      q: "Is nofollow required on every external link?",
      a: "No. Use `nofollow` / `sponsored` / `ugc` by meaning (ads, UGC, untrusted URLs). Useful editorial links to sources are normal practice.",
    },
    {
      q: "Why does internal linking matter?",
      a: "Navigation for users and hints for robots about which URLs matter. Without internal links, deep pages are harder to find.",
    },
    {
      q: "What is a broken link?",
      a: "It points to a missing or wrong address (often 404). It hurts UX and crawl — find them with a crawler and fix them.",
    },
  ],
  sections: [
    {
      title: "How a link works in HTML",
      level: 2,
      paras: [
        "Basic form: `<a href=\"https://example.com/page/\">Link text</a>`. The `href` attribute is required for the jump; between the tags is the anchor. Inside can be an image instead of text.",
        "Robots follow links like a map: discover URLs, queue crawl, index on success. Without links (and a sitemap) new pages are found more slowly.",
      ],
      lists: [
        {
          intro: "A link can lead to:",
          items: [
            "a site page",
            "a file (PDF, image)",
            "an `#section` anchor on the same page",
            "`mailto:` / `tel:` (watch spam)",
            "an external resource",
          ],
        },
      ],
      links: [
        {
          label: "Clickable link: how to make one",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Link classification",
      level: 2,
      paras: [
        "One URL is described from several angles at once: where it goes, how the path is written, whether there’s an anchor, whether the target is alive.",
      ],
      tables: [
        {
          caption: "Main types",
          headers: ["Slice", "Variants", "Note"],
          rows: [
            ["Direction", "Internal / external", "Inside the site vs another domain"],
            ["URL form", "Absolute / relative", "`https://…` vs `/page/`"],
            ["Site profile", "Inbound / outbound", "To you / from you"],
            ["Coverage", "Regular / sitewide", "Sitewide — header, menu, footer"],
            ["State", "Live / broken", "Broken → 404 and trust loss"],
            ["Params", "Static / with query `?`", "Filters and sessions often spawn duplicates"],
          ],
        },
      ],
      lists: [
        {
          intro: "More SEO slang:",
          items: [
            "“natural” inbound — no pay for placement",
            "bought / grey — filter risk zone",
            "redirect — server or script moves to another URL (equity and meaning depend on 301/302)",
          ],
        },
      ],
    },
    {
      title: "Anchors and bare links",
      level: 2,
      paras: [
        "An anchor helps people see where the click goes and gives robots context. Stuffing the exact keyword into every anchor looks unnatural.",
        "Bare links — “here,” “more,” a naked URL, a logo. They help navigation and a natural profile; you don’t lift a page with keyword anchors alone.",
      ],
      lists: [
        {
          intro: "Anchor rules:",
          items: [
            "readable language, no “buy buy moscow cheap”",
            "match the destination page",
            "dilution: brand, URL, conversational wording",
            "don’t mask ads as ordinary links without required labeling",
          ],
        },
      ],
    },
    {
      title: "nofollow and placement",
      level: 2,
      paras: [
        "`rel=\"nofollow\"` (and `sponsored`, `ugc`) tell search not to treat the link as an editorial endorsement. It isn’t a forever PageRank off-switch, but an important signal for ads and user content.",
        "Internal linking usually stays follow: you define the structure. Outbound to sources and partners — by meaning; mass “nofollow everything” isn’t required.",
      ],
      lists: [
        {
          intro: "Working hygiene:",
          items: [
            "internal links to important services and articles",
            "outbound — on purpose, without link spam",
            "inbound — donor quality over quantity",
            "check broken links after migrations",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Chasing bought anchor links and ignoring usable internal linking on your own site. Internal URL map first — then the external layer.",
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
      title: "Short takeaway",
      level: 2,
      paras: [
        "A link is a basic web and crawl element. Tell apart internal/external, absolute/relative, anchored/bare. For SEO you need live internal linking, sane anchors, and caution with bought links. How to make a URL clickable — in the clickable-link article.",
      ],
    },
  ],
};

/** ES overlay for chto-takoe-ssylka — same structure as RU JSON / EN. */
export const chtoTakoeSsylkaEs: BlogPost = {
  slug: "chto-takoe-ssylka",
  title: "Qué es un enlace: tipos, anclas y el papel en SEO",
  date: "2021-09-21",
  category: "SEO",
  cover: "/images/blog/chto-takoe-ssylka/cover.webp",
  excerpt:
    "Hiperenlaces en HTML: internos y externos, absolutos y relativos, anclas y URLs peladas, nofollow. Cómo los enlaces ayudan a la navegación y al crawl del sitio.",
  lead: [
    "Un enlace (hiperenlace) es un elemento de página que lleva a otra URL: un artículo, un archivo, un ancla en la página o un sitio externo. En HTML es la etiqueta `<a href=\"…\">`.",
    "Abajo: cómo se ve un enlace, qué tipos hay, por qué importan las anclas y cómo los enlaces se atan al crawl y al SEO. Cómo hacer texto clicable es una pieza aparte; aquí es un mapa de conceptos.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un enlace de una URL?",
      a: "Una URL es una dirección. Un enlace es cómo vas a esa dirección (suele ser una etiqueta `<a>` con texto o una imagen).",
    },
    {
      q: "¿Qué es un ancla?",
      a: "El texto (o sustituto de texto) entre `<a>` y `</a>` en el que la gente hace clic. «Comprar una bomba» es un ancla; un `https://…` pelado a menudo se llama enlace bare o sin ancla.",
    },
    {
      q: "¿Hace falta nofollow en cada enlace externo?",
      a: "No. Usa `nofollow` / `sponsored` / `ugc` según el sentido (ads, UGC, URLs poco fiables). Los enlaces editoriales útiles a fuentes son práctica normal.",
    },
    {
      q: "¿Por qué importa el enlazado interno?",
      a: "Navegación para usuarios y pistas para robots sobre qué URLs importan. Sin enlaces internos, las páginas profundas cuestan más de encontrar.",
    },
    {
      q: "¿Qué es un enlace roto?",
      a: "Apunta a una dirección que falta o está mal (a menudo 404). Duele a la UX y al crawl — encuéntralos con un crawler y arréglalos.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona un enlace en HTML",
      level: 2,
      paras: [
        "Forma básica: `<a href=\"https://example.com/page/\">Texto del enlace</a>`. El atributo `href` hace falta para el salto; entre las etiquetas va el ancla. Dentro puede ir una imagen en lugar de texto.",
        "Los robots siguen enlaces como un mapa: descubren URLs, encolan crawl, indexan si va bien. Sin enlaces (y un sitemap) las páginas nuevas se encuentran más despacio.",
      ],
      lists: [
        {
          intro: "Un enlace puede llevar a:",
          items: [
            "una página del sitio",
            "un archivo (PDF, imagen)",
            "un ancla `#section` en la misma página",
            "`mailto:` / `tel:` (ojo al spam)",
            "un recurso externo",
          ],
        },
      ],
      links: [
        {
          label: "Enlace clicable: cómo hacerlo",
          href: "/es/blog/klikabelnaya-ssylka/",
        },
        {
          label: "Hipertexto",
          href: "/es/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Clasificación de enlaces",
      level: 2,
      paras: [
        "Una URL se describe desde varios ángulos a la vez: a dónde va, cómo se escribe el path, si hay ancla, si el destino está vivo.",
      ],
      tables: [
        {
          caption: "Tipos principales",
          headers: ["Corte", "Variantes", "Nota"],
          rows: [
            ["Dirección", "Interno / externo", "Dentro del sitio vs otro dominio"],
            ["Forma de URL", "Absoluta / relativa", "`https://…` vs `/page/`"],
            ["Perfil del sitio", "Entrante / saliente", "Hacia ti / desde ti"],
            ["Cobertura", "Normal / sitewide", "Sitewide — header, menú, footer"],
            ["Estado", "Vivo / roto", "Roto → 404 y pérdida de confianza"],
            ["Params", "Estática / con query `?`", "Filtros y sesiones a menudo generan duplicados"],
          ],
        },
      ],
      lists: [
        {
          intro: "Más jerga SEO:",
          items: [
            "entrante «natural» — sin pagar por la colocación",
            "comprado / gris — zona de riesgo de filtros",
            "redirect — el servidor o un script mueve a otra URL (equity y sentido dependen de 301/302)",
          ],
        },
      ],
    },
    {
      title: "Anclas y enlaces bare",
      level: 2,
      paras: [
        "El ancla ayuda a la gente a ver a dónde va el clic y da contexto a los robots. Meter la keyword exacta en cada ancla se ve antinatural.",
        "Enlaces bare — «aquí», «más», una URL desnuda, un logo. Ayudan a la navegación y a un perfil natural; no subes una página solo con anclas de keyword.",
      ],
      lists: [
        {
          intro: "Reglas de ancla:",
          items: [
            "lenguaje legible, sin «comprar comprar barato»",
            "que coincida con la página destino",
            "dilución: marca, URL, redacción conversacional",
            "no enmascares ads como enlaces ordinarios sin el etiquetado obligatorio",
          ],
        },
      ],
    },
    {
      title: "nofollow y colocación",
      level: 2,
      paras: [
        "`rel=\"nofollow\"` (y `sponsored`, `ugc`) dicen a la búsqueda que no trate el enlace como un respaldo editorial. No es un interruptor eterno de PageRank, pero sí una señal importante para ads y contenido de usuarios.",
        "El enlazado interno suele quedarse follow: tú defines la estructura. Salientes a fuentes y partners — por sentido; el «nofollow a todo» masivo no hace falta.",
      ],
      lists: [
        {
          intro: "Higiene de trabajo:",
          items: [
            "enlaces internos a servicios y artículos importantes",
            "salientes — a propósito, sin spam de enlaces",
            "entrantes — calidad del donante por encima de cantidad",
            "revisa enlaces rotos tras migraciones",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Perseguir enlaces comprados con ancla e ignorar un enlazado interno usable en tu propio sitio. Primero el mapa de URLs internas — luego la capa externa.",
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
      title: "Resumen corto",
      level: 2,
      paras: [
        "Un enlace es un elemento básico de la web y del crawl. Distingue interno/externo, absoluto/relativo, con ancla/bare. Para SEO hace falta enlazado interno vivo, anclas sensatas y cautela con enlaces comprados. Cómo hacer una URL clicable — en el artículo de enlace clicable.",
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for snippet — same structure as RU JSON. */
export const snippetEn: BlogPost = {
  slug: "snippet",
  title: "Search snippets: Title, description, and rich results",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/snippet/cover-en.webp",
  excerpt:
    "How a SERP snippet is built: title, description, breadcrumbs, and rich results. What schema.org / JSON-LD gives you — and why it’s about CTR, not ranking magic.",
  lead: [
    "A snippet is the page block in search results: title, URL/breadcrumbs, description, and sometimes extensions (rating, price, FAQ). It decides whether people click your position.",
    "Below: the basic anatomy, rich results, and schema.org markup. A strong snippet lifts CTR; rankings grow from content, tech, and links — not from one structured-data block alone.",
  ],
  faq: [
    {
      q: "Does the meta description guarantee the snippet text?",
      a: "No. The search engine may take another page fragment if it answers the query better. Description is a strong hint, not an order.",
    },
    {
      q: "Does the snippet affect rankings?",
      a: "There’s no direct “points” factor for a pretty snippet. Indirectly — via CTR and behavior. The main thing is a relevant page.",
    },
    {
      q: "What are rich results?",
      a: "SERP extensions: stars, price, FAQ, recipe, and so on. They appear with valid structured markup and when the result type’s rules are met.",
    },
    {
      q: "JSON-LD or microdata in HTML?",
      a: 'Both are understood. JSON-LD in `<script type="application/ld+json">` is usually easier to maintain. Check with a rich results validator.',
    },
    {
      q: "Do I need breadcrumbs?",
      a: "Yes for on-site navigation; in the SERP a path also helps show the section. Add BreadcrumbList markup if you want, following the spec.",
    },
  ],
  sections: [
    {
      title: "What a regular snippet includes",
      level: 2,
      paras: [
        "Classics: Title (often from `<title>`), URL or breadcrumbs, description from meta description or page text. Display lengths drift — keep the meaning early.",
        "Write title and description for humans: benefit, difference, no keyword sheet. Stuffing the description kills the click.",
      ],
      lists: [
        {
          intro: "Basic checklist:",
          items: [
            "unique Title for the intent",
            "description with value and a CTA",
            "readable URL / breadcrumbs",
            "snippet promise matches page content",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Website URL",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Rich results (extended snippets)",
      level: 2,
      paras: [
        "Extensions depend on type: product (price, availability), reviews, FAQ, how-to, organization. Not every site gets every type — there are content and policy requirements.",
        "An extension helps you stand out and answer before the click. Don’t promise in markup what’s not on the page: that leads to manual actions and lost rich results.",
      ],
      lists: [
        {
          intro: "Why bother:",
          items: [
            "more visibility at the same position",
            "clearer offer (price, rating)",
            "fewer empty clicks past the intent",
          ],
        },
      ],
    },
    {
      title: "Breadcrumbs and the path in results",
      level: 2,
      paras: [
        "On the site, breadcrumbs are navigation “Home → Section → Page.” In results the search engine may show a similar path.",
        "BreadcrumbList markup (JSON-LD or microdata) helps machines understand hierarchy. First put real breadcrumbs in HTML, then markup — not the other way around.",
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Schema.org and JSON-LD",
      level: 2,
      paras: [
        "Schema.org defines entity types: Product, Article, Organization, FAQPage, and others. You mark fields (name, price, author); the search engine decides whether to show an extension.",
        "JSON-LD is convenient: one script block, less layout mess. Microdata sits in tags — also valid, harder to maintain. After rollout, run the URL through the official rich results test and Search Console / webmaster reports.",
      ],
      lists: [
        {
          intro: "Rollout practice:",
          items: [
            "pick a type that matches real content",
            "don’t mark up invented reviews/prices",
            "align with visible page text",
            "validate",
            "watch whether the type appears in reports (it can take time)",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Markup is part of technical snippet prep. Ranking for commercial queries is a separate months-long process — often 2–6 months of work after prep — not the result of one JSON-LD block.",
        },
      ],
    },
  ],
};

/** ES overlay for snippet — same structure as RU JSON / EN. */
export const snippetEs: BlogPost = {
  slug: "snippet",
  title: "Snippets de búsqueda: Title, description y rich results",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/snippet/cover.webp",
  excerpt:
    "Cómo se arma un snippet de la SERP: title, description, breadcrumbs y rich results. Qué te da schema.org / JSON-LD — y por qué va de CTR, no de magia de rankings.",
  lead: [
    "Un snippet es el bloque de la página en los resultados de búsqueda: title, URL/breadcrumbs, description y a veces extensiones (rating, precio, FAQ). Decide si la gente hace clic en tu posición.",
    "Abajo: la anatomía básica, rich results y markup schema.org. Un snippet fuerte sube el CTR; los rankings crecen con contenido, técnica y enlaces — no con un solo bloque de datos estructurados.",
  ],
  faq: [
    {
      q: "¿La meta description garantiza el texto del snippet?",
      a: "No. El buscador puede tomar otro fragmento de la página si responde mejor a la query. La description es una pista fuerte, no una orden.",
    },
    {
      q: "¿El snippet afecta a los rankings?",
      a: "No hay un factor directo de «puntos» por un snippet bonito. De forma indirecta — vía CTR y comportamiento. Lo principal es una página relevante.",
    },
    {
      q: "¿Qué son los rich results?",
      a: "Extensiones de la SERP: estrellas, precio, FAQ, receta, etc. Aparecen con markup estructurado válido y cuando se cumplen las reglas del tipo de resultado.",
    },
    {
      q: "¿JSON-LD o microdata en HTML?",
      a: 'Ambos se entienden. JSON-LD en `<script type="application/ld+json">` suele ser más fácil de mantener. Comprueba con un validador de rich results.',
    },
    {
      q: "¿Hacen falta breadcrumbs?",
      a: "Sí para la navegación on-site; en la SERP un camino también ayuda a mostrar la sección. Añade markup BreadcrumbList si quieres, siguiendo la spec.",
    },
  ],
  sections: [
    {
      title: "Qué incluye un snippet habitual",
      level: 2,
      paras: [
        "Clásicos: Title (a menudo de `<title>`), URL o breadcrumbs, description de la meta description o del texto de la página. Las longitudes de display se mueven — pon el sentido pronto.",
        "Escribe title y description para humanos: beneficio, diferencia, sin hoja de keywords. Atiborrar la description mata el clic.",
      ],
      lists: [
        {
          intro: "Checklist básico:",
          items: [
            "Title único para el intent",
            "description con valor y un CTA",
            "URL / breadcrumbs legibles",
            "la promesa del snippet cuadra con el contenido de la página",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de página para una query",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "URL del sitio",
          href: "/es/blog/url-adres/",
        },
      ],
    },
    {
      title: "Rich results (snippets ampliados)",
      level: 2,
      paras: [
        "Las extensiones dependen del tipo: producto (precio, disponibilidad), reviews, FAQ, how-to, organización. No todo sitio recibe todo tipo — hay requisitos de contenido y de política.",
        "Una extensión ayuda a destacar y a responder antes del clic. No prometas en el markup lo que no está en la página: eso lleva a acciones manuales y a perder rich results.",
      ],
      lists: [
        {
          intro: "Por qué molestarse:",
          items: [
            "más visibilidad en la misma posición",
            "oferta más clara (precio, rating)",
            "menos clics vacíos fuera del intent",
          ],
        },
      ],
    },
    {
      title: "Breadcrumbs y el camino en resultados",
      level: 2,
      paras: [
        "En el sitio, los breadcrumbs son navegación «Inicio → Sección → Página». En resultados el buscador puede mostrar un camino similar.",
        "El markup BreadcrumbList (JSON-LD o microdata) ayuda a las máquinas a entender la jerarquía. Primero pon breadcrumbs reales en HTML, luego markup — no al revés.",
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Schema.org y JSON-LD",
      level: 2,
      paras: [
        "Schema.org define tipos de entidad: Product, Article, Organization, FAQPage y otros. Marcas campos (name, price, author); el buscador decide si muestra una extensión.",
        "JSON-LD es cómodo: un bloque de script, menos lío en el layout. Microdata va en las etiquetas — también válido, más duro de mantener. Tras el rollout, pasa la URL por el test oficial de rich results y los informes de Search Console / webmaster.",
      ],
      lists: [
        {
          intro: "Práctica de despliegue:",
          items: [
            "elige un tipo que cuadre con el contenido real",
            "no marques reviews/precios inventados",
            "alinea con el texto visible de la página",
            "valida",
            "mira si el tipo aparece en los informes (puede llevar tiempo)",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "El markup forma parte de la prep técnica del snippet. Rankear por queries comerciales es un proceso aparte de meses — a menudo 2–6 meses de trabajo tras la prep — no el resultado de un solo bloque JSON-LD.",
        },
      ],
    },
  ],
};

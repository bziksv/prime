import type { BlogPost } from "../../../data/blog";

/** EN overlay for kategorii-internet-magazina — same structure as RU JSON. */
export const kategoriiInternetMagazinaEn: BlogPost = {
  slug: "kategorii-internet-magazina",
  title: "Online store categories: SEO and when to create new ones",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/kategorii-internet-magazina/cover-en.webp",
  excerpt:
    "Why categories capture demand, when to create a new section, how to check demand and competitors, what content to write, and how to avoid cannibalization and crawl gaps.",
  lead: [
    "Category pages often drive a large share of store organic: people search for a “product type,” not a SKU. A section links the homepage to product cards and gains from internal links.",
    "Below: when to open a new category, how to check demand, what to write in the description, and the risks (cannibalization, thin assortment, crawl). The overall e-com promotion loop is a separate article; structure prep is not instant page one.",
  ],
  faq: [
    {
      q: "How many products should a category have?",
      a: "No hard rule. Match niche and competitor expectations: an empty section with 2–3 SKUs is weak for people and search. A filter or tag is better than an “empty” landing.",
    },
    {
      q: "Should you hide category copy under an “for SEO” spoiler?",
      a: "Bad practice. If the text is useful — show it. Hidden stuffing is not a substitute for assortment and filters.",
    },
    {
      q: "Is the category or the product card more important?",
      a: "Different intents: a product group vs a specific model. You need both layers and links between them.",
    },
    {
      q: "What is cannibalization?",
      a: "Several URLs fight for one query (two similar categories, category and tag). Rankings and analytics suffer — merge or split intents.",
    },
    {
      q: "When should you delete a category?",
      a: "If the assortment is gone, there is no demand, or the section duplicates another. Use a 301 to the parent or related section — do not leave a 404 without a redirect.",
    },
  ],
  sections: [
    {
      title: "Why categories matter for SEO",
      level: 2,
      paras: [
        "Broad queries (“sneakers,” “skinny jeans”) go to a listing, not one card. A category shows choice, filters, and a path to purchase.",
        "In store architecture, sections bridge homepage and products: they get many internal links and crawlers reach them more often with solid linking.",
      ],
      lists: [
        {
          intro: "A category’s role:",
          items: [
            "a landing for a demand cluster",
            "catalog navigation and UX",
            "a link-equity donor to product cards",
            "often a target for paid search",
          ],
        },
      ],
      links: [
        {
          label: "E-commerce SEO",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "When to create a new category",
      level: 2,
      paras: [
        "You need steady demand and enough assortment. A seasonal trend, a new line, a stable long-tail (“skinny jeans” under general “jeans”) — reasons to test a separate URL.",
        "Do not spawn sections “for a keyword” if products are few: better an attribute or filter. The catalog is alive — sections appear and close with the assortment.",
      ],
      lists: [
        {
          intro: "Signals for a new category:",
          items: [
            "analytics or webmaster show a refined query, but people land in a general section and bounce",
            "competitors have a strong listing for that cluster",
            "there are enough products to choose from",
            "intent does not match an existing URL one-to-one",
          ],
        },
      ],
    },
    {
      title: "Demand, competitors, and priority",
      level: 2,
      paras: [
        "Gather keywords (Wordstat, planners, SEO tools), estimate volume and the SERP. Look at niche leaders’ listings: depth, filters, Title.",
        "Check the current tree: does the new section duplicate a neighbor? Priority — sections with demand and margin where you are competitive on assortment.",
      ],
      lists: [
        {
          intro: "Mini-audit before launch:",
          items: [
            "query cluster and intent",
            "SKU count now and the plan",
            "URL, Title, H1",
            "filters without a duplicate explosion",
            "links from parent and product cards",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Category content and risks",
      level: 2,
      paras: [
        "A useful unique block (how to choose, series differences, delivery or size chart) fits above or near the listing. A keyword sheet in the footer with no meaning is a weak signal.",
        "Risks: cannibalization with a similar section or tag; thin pages; filters spawning thousands of indexed URLs; weak linking so the crawler rarely reaches the section.",
      ],
      lists: [
        {
          intro: "After launching a category:",
          items: [
            "add to menu/breadcrumbs and sitemap",
            "link from homepage or parent",
            "close filter duplicates with indexing rules",
            "watch positions and cannibalization in webmaster tools",
            "do not expect page one “next week” — growth is planned",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "New structure and copy are prep. Growing commercial categories for a query core is planned over roughly 2–6 months of work after promotion starts — not a launch-week checkbox.",
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
};

/** ES overlay for kategorii-internet-magazina — same structure as RU JSON / EN. */
export const kategoriiInternetMagazinaEs: BlogPost = {
  slug: "kategorii-internet-magazina",
  title: "Categorías de tienda online: SEO y cuándo crear nuevas",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/kategorii-internet-magazina/cover-es.webp",
  excerpt:
    "Por qué las categorías capturan demanda, cuándo crear una sección nueva, cómo revisar demanda y competidores, qué contenido escribir y cómo evitar canibalización y huecos de crawl.",
  lead: [
    "Las páginas de categoría a menudo impulsan una gran parte del orgánico de la tienda: la gente busca un «tipo de producto», no un SKU. Una sección une la homepage con las fichas de producto y gana con enlaces internos.",
    "Abajo: cuándo abrir una categoría nueva, cómo revisar demanda, qué escribir en la descripción y los riesgos (canibalización, surtido fino, crawl). El loop general de promoción e-com es un artículo aparte; la preparación de estructura no es primera página al instante.",
  ],
  faq: [
    {
      q: "¿Cuántos productos debe tener una categoría?",
      a: "No hay regla dura. Encaja con las expectativas del nicho y de los competidores: una sección vacía con 2–3 SKUs es floja para personas y búsqueda. Un filtro o tag es mejor que un landing «vacío».",
    },
    {
      q: "¿Hay que esconder el copy de categoría bajo un spoiler «para SEO»?",
      a: "Mala práctica. Si el texto es útil — muéstralo. El stuffing oculto no sustituye surtido y filtros.",
    },
    {
      q: "¿Importa más la categoría o la ficha de producto?",
      a: "Intenciones distintas: un grupo de productos vs un modelo concreto. Hacen falta ambas capas y enlaces entre ellas.",
    },
    {
      q: "¿Qué es la canibalización?",
      a: "Varias URLs pelean por una consulta (dos categorías parecidas, categoría y tag). Sufren rankings y analítica — fusiona o parte intenciones.",
    },
    {
      q: "¿Cuándo borrar una categoría?",
      a: "Si el surtido se fue, no hay demanda o la sección duplica otra. Usa un 301 al padre o a la sección relacionada — no dejes un 404 sin redirect.",
    },
  ],
  sections: [
    {
      title: "Por qué las categorías importan para SEO",
      level: 2,
      paras: [
        "Las consultas amplias («zapatillas», «vaqueros skinny») van a un listing, no a una ficha. Una categoría muestra elección, filtros y un camino a la compra.",
        "En la arquitectura de la tienda, las secciones puentean homepage y productos: reciben muchos enlaces internos y los crawlers las alcanzan más a menudo con un linking sólido.",
      ],
      lists: [
        {
          intro: "Rol de una categoría:",
          items: [
            "un landing para un cluster de demanda",
            "navegación del catálogo y UX",
            "un donor de link-equity a las fichas",
            "a menudo un target para paid search",
          ],
        },
      ],
      links: [
        {
          label: "SEO de e-commerce",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Cuándo crear una categoría nueva",
      level: 2,
      paras: [
        "Hacen falta demanda estable y surtido suficiente. Una tendencia estacional, una línea nueva, una long-tail estable («vaqueros skinny» bajo «vaqueros» general) — motivos para probar una URL aparte.",
        "No spawnees secciones «por una keyword» si hay pocos productos: mejor un atributo o filtro. El catálogo está vivo — las secciones aparecen y se cierran con el surtido.",
      ],
      lists: [
        {
          intro: "Señales para una categoría nueva:",
          items: [
            "analítica o webmaster muestran una consulta refinada, pero la gente aterriza en una sección general y rebota",
            "los competidores tienen un listing fuerte para ese cluster",
            "hay productos suficientes para elegir",
            "la intención no casa 1:1 con una URL existente",
          ],
        },
      ],
    },
    {
      title: "Demanda, competidores y prioridad",
      level: 2,
      paras: [
        "Reúne keywords (Wordstat, planners, herramientas SEO), estima volumen y la SERP. Mira los listings de líderes del nicho: profundidad, filtros, Title.",
        "Revisa el árbol actual: ¿la sección nueva duplica a un vecino? Prioridad — secciones con demanda y margen donde eres competitivo en surtido.",
      ],
      lists: [
        {
          intro: "Mini-auditoría antes del lanzamiento:",
          items: [
            "cluster de consultas e intención",
            "conteo de SKU ahora y el plan",
            "URL, Title, H1",
            "filtros sin explosión de duplicados",
            "enlaces desde el padre y las fichas",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Contenido de categoría y riesgos",
      level: 2,
      paras: [
        "Un bloque útil y único (cómo elegir, diferencias de series, envío o guía de tallas) encaja encima o cerca del listing. Una hoja de keywords en el footer sin sentido es una señal floja.",
        "Riesgos: canibalización con una sección o tag parecido; páginas finas; filtros que spawnean miles de URLs indexadas; linking flojo para que el crawler rara vez llegue a la sección.",
      ],
      lists: [
        {
          intro: "Tras lanzar una categoría:",
          items: [
            "añadir a menú/breadcrumbs y sitemap",
            "enlazar desde homepage o padre",
            "cerrar duplicados de filtros con reglas de indexación",
            "mirar posiciones y canibalización en herramientas de webmaster",
            "no esperes primera página «la próxima semana» — el crecimiento se planifica",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Estructura nueva y copy son preparación. Crecer categorías comerciales de un núcleo de consultas se planifica a unos 2–6 meses de trabajo tras el arranque de la promoción — no un checkbox de la semana de lanzamiento.",
        },
      ],
      links: [
        {
          label: "Cerrar a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
};

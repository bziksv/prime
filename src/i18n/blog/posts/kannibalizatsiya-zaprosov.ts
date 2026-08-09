import type { BlogPost } from "../../../data/blog";

/** EN overlay for kannibalizatsiya-zaprosov — same structure as RU JSON. */
export const kannibalizatsiyaZaprosovEn: BlogPost = {
  slug: "kannibalizatsiya-zaprosov",
  title: "Keyword cannibalization: how to find and fix it",
  date: "2019-08-08",
  category: "SEO",
  cover: "/images/blog/kannibalizatsiya-zaprosov/cover-en.webp",
  excerpt:
    "When several site pages fight for one query, why it hurts, how to spot the conflict, and what to do: merge, separate intents, or strengthen one URL.",
  lead: [
    "Keyword cannibalization is when several URLs on one site are optimized for the same (or nearly the same) phrase and block each other in the SERP. The engine can’t tell which document is primary; link equity and clicks get smeared.",
    "Below: the fallout, prevention during keyword research, how to find conflicts, and how to fix them. Page duplicates are a related topic; cannibalization is more about competing intents than copy-pasted HTML alone.",
  ],
  faq: [
    {
      q: "How does cannibalization differ from duplicates?",
      a: "Duplicates — nearly identical content on different URLs. Cannibalization — different (or similar) pages fight for one query. They often overlap, but treatments differ.",
    },
    {
      q: "Are two pages with one keyword always bad?",
      a: "Not always. Sometimes intents differ (informational vs commercial). The problem is when meaning and snippets compete without separation.",
    },
    {
      q: "Does search always keep one page?",
      a: "It often shows one, but the pick may be the wrong one. Sometimes both are weaker than competitors without cannibalization. Check Webmaster/GSC and the SERP.",
    },
    {
      q: "Does a 301 to the homepage help?",
      a: "Only if the extra URLs truly aren’t needed. Blindly merging everything to home breaks structure. Merge onto the strong relevant cluster URL.",
    },
    {
      q: "What about an online store?",
      a: "Category vs product cards vs tags: different roles. Don’t push ten lookalike listings with one head term. SKU/attributes in title help tell cards apart, but don’t replace clustering.",
    },
    {
      q: "Can I use canonical instead of deletion?",
      a: "If both URLs are needed for users but only one should index: canonical + indexing settings. If the URL is obsolete — 301.",
    },
    {
      q: "How do I avoid creating the problem upfront?",
      a: "Core clustering: one main intent — one landing. Unique title/description. Strong internal linking to the cluster canon.",
    },
    {
      q: "Is it a quick fix?",
      a: "Diagnosis — days. Merges and reindexing — weeks. In parallel you prepare the site for promotion; page-one share for the core is planned over 2–6 months of work — not “after one redirect.”",
    },
  ],
  sections: [
    {
      title: "What keyword cannibalization is",
      level: 2,
      paras: [
        "You optimize several pages for one phrase: matching titles, overlapping copy, similar anchors. For the bot that’s several candidates without a clear leader.",
        "Search scenarios: show one (sometimes weak) or split attention so none builds resilience against sites with one strong URL.",
      ],
      lists: [
        {
          intro: "Typical sources:",
          items: [
            "a blog post + a commercial service under one head term",
            "two categories/tags with one meaning",
            "filters and sorts in the index",
            "landing copies “for every keyword” without unique value",
          ],
        },
      ],
      links: [
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Why it hurts",
      level: 2,
      paras: [
        "Relevance blurs: the SERP may show the wrong landing (lower conversion, higher bounce). Internal and external links split equity among in-site competitors instead of strengthening one URL.",
        "In analytics, goals are smeared across pages — harder to measure content and link effect. Users see lookalike snippets from one domain and trust the structure less.",
      ],
      lists: [
        {
          intro: "Effects:",
          items: [
            "jumping URLs near the top for one phrase",
            "weaker total click than one leader",
            "wasted spend on links that go nowhere",
            "confusion in the content plan and writer briefs",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Cannibalization isn’t a separate everyday “penalty filter” — it’s your own documents competing. Fix structure, not fake engagement.",
        },
      ],
    },
    {
      title: "How to prevent it at the start",
      level: 2,
      paras: [
        "Keyword research and clustering before mass publish: one landing — one main intent. Title and description unique. Section and blog map aligned.",
        "Don’t spawn almost identical landings for every keyword variation. Better one strong URL with a natural long-tail than ten thin copies.",
      ],
      lists: [
        {
          intro: "Content-plan rules:",
          items: [
            "cluster → one canon URL",
            "adjacent phrases — in the canon’s H2/FAQ, not new URLs without need",
            "commercial and info — different URLs if intent differs",
            "before publish — search “do we already have a page on this”",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Entry points",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
    },
    {
      title: "How to find cannibalization",
      level: 2,
      paras: [
        "Small site: a URL × main keyword × title table. Hunt repeats. In the SERP: `site:` + phrase; Webmaster/GSC — which URLs get impressions for the query.",
        "A crawler and rank reports show several URLs with overlapping queries. Audit tools sometimes highlight “keyword cannibalization” — treat as a hypothesis and verify intent by hand.",
      ],
      lists: [
        {
          intro: "Diagnosis:",
          items: [
            "two+ URLs in the top 20 for one phrase",
            "frequent URL swaps in the SERP",
            "nearly identical titles",
            "internal linking with one anchor to different targets",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "How to resolve the conflict",
      level: 2,
      paras: [
        "Pick the cluster winner (traffic, conversion, links, completeness). The rest: 301 to the canon, or change intent/keywords, or noindex/canonical — by URL role.",
        "Strengthen the canon: content, linking, external links to it. For a store: clearly separate category, card, and filter; don’t index endless parameter combos.",
      ],
      lists: [
        {
          intro: "Treatment options:",
          items: [
            "301 the extra onto the strong URL",
            "canonical if both URLs are needed in the UI",
            "separate topics (rewrite for another intent)",
            "merge texts into one piece",
            "fix internal-link anchors",
          ],
        },
      ],
      tables: [
        {
          caption: "Quick action choice",
          headers: ["Situation", "Action"],
          rows: [
            ["Copy / obsolete landing", "301 to the canon"],
            ["Both URLs needed in the UI", "canonical + clear intent"],
            ["Info and commercial overlapped", "Separate copy and keywords"],
            ["Thin “for every keyword” pages", "Merge into one strong URL"],
          ],
        },
      ],
      links: [
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Control after fixes",
      level: 2,
      paras: [
        "Request recrawl of the canon and merged URLs. Watch whether the URL stabilized in the SERP and whether total cluster visibility grew. Don’t expect an instant page-one jump: first the address swap fades, then the rank builds.",
        "Return to the content plan: ban spawning duplicate clusters without review. Once a quarter — selective head-term checks for multiple URLs.",
      ],
      lists: [
        {
          intro: "Case-close checklist:",
          items: [
            "canon chosen and strengthened",
            "redirects/canonical work",
            "sitemap without extra URLs",
            "linking points to the canon",
            "in GSC/Webmaster impressions converge on one URL",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "dubli-stranits",
    "semanticheskoe-yadro",
    "kanonicheskiy-teg",
    "vnutrennyaya-perelinkovka",
    "htaccess-301",
    "tochki-vhoda",
  ],
};

/** ES overlay for kannibalizatsiya-zaprosov — same structure as RU JSON / EN. */
export const kannibalizatsiyaZaprosovEs: BlogPost = {
  slug: "kannibalizatsiya-zaprosov",
  title: "Canibalización de keywords: cómo encontrarla y arreglarla",
  date: "2019-08-08",
  category: "SEO",
  cover: "/images/blog/kannibalizatsiya-zaprosov/cover.webp",
  excerpt:
    "Cuando varias páginas del sitio pelean por una consulta, por qué duele, cómo detectar el conflicto y qué hacer: fusionar, separar intents o reforzar una URL.",
  lead: [
    "La canibalización de keywords es cuando varias URLs de un mismo sitio están optimizadas para la misma (o casi la misma) frase y se bloquean entre sí en la SERP. El motor no sabe qué documento es primario; el equity de enlaces y los clics se diluyen.",
    "Abajo: las consecuencias, la prevención en la investigación de keywords, cómo encontrar conflictos y cómo arreglarlos. Los duplicados de página son un tema relacionado; la canibalización va más de intents que compiten que de HTML copiado solo.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia la canibalización de los duplicados?",
      a: "Duplicados — contenido casi idéntico en URLs distintas. Canibalización — páginas distintas (o parecidas) pelean por una consulta. A menudo se solapan, pero el tratamiento difiere.",
    },
    {
      q: "¿Dos páginas con una keyword siempre son malas?",
      a: "No siempre. A veces los intents difieren (informativo vs comercial). El problema es cuando sentido y snippets compiten sin separación.",
    },
    {
      q: "¿La búsqueda siempre conserva una página?",
      a: "A menudo muestra una, pero la elegida puede ser la incorrecta. A veces ambas quedan más débiles que competidores sin canibalización. Revisa Webmaster/GSC y la SERP.",
    },
    {
      q: "¿Ayuda un 301 a la homepage?",
      a: "Solo si las URLs extra de verdad no hacen falta. Fusionar a ciegas todo a home rompe la estructura. Fusiona hacia la URL fuerte y relevante del cluster.",
    },
    {
      q: "¿Y en una tienda online?",
      a: "Categoría vs fichas de producto vs tags: roles distintos. No empujes diez listings parecidos con un mismo head term. SKU/atributos en el title ayudan a distinguir fichas, pero no sustituyen el clustering.",
    },
    {
      q: "¿Puedo usar canonical en vez de borrar?",
      a: "Si ambas URLs hacen falta para usuarios pero solo una debería indexarse: canonical + ajustes de indexación. Si la URL está obsoleta — 301.",
    },
    {
      q: "¿Cómo evitar crear el problema de antemano?",
      a: "Clustering del núcleo: un intent principal — una landing. Title/description únicos. Enlazado interno fuerte hacia el canónico del cluster.",
    },
    {
      q: "¿Es un arreglo rápido?",
      a: "Diagnóstico — días. Fusiones y reindexación — semanas. En paralelo preparas el sitio para la promoción; la cuota de primera página del núcleo se planifica a 2–6 meses de trabajo — no «tras un redirect».",
    },
  ],
  sections: [
    {
      title: "Qué es la canibalización de keywords",
      level: 2,
      paras: [
        "Optimizas varias páginas para una frase: titles coincidentes, copy solapado, anclas parecidas. Para el bot son varios candidatos sin un líder claro.",
        "Escenarios de búsqueda: mostrar una (a veces floja) o repartir la atención de modo que ninguna construya resiliencia frente a sitios con una URL fuerte.",
      ],
      lists: [
        {
          intro: "Fuentes típicas:",
          items: [
            "un post de blog + un servicio comercial bajo el mismo head term",
            "dos categorías/tags con un mismo sentido",
            "filtros y ordenaciones en el índice",
            "copias de landing «para cada keyword» sin valor único",
          ],
        },
      ],
      links: [
        {
          label: "Duplicados de página",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Por qué duele",
      level: 2,
      paras: [
        "La relevancia se difumina: la SERP puede mostrar la landing incorrecta (menos conversión, más rebote). Enlaces internos y externos parten el equity entre competidores del mismo sitio en vez de reforzar una URL.",
        "En analítica, los goals se diluyen entre páginas — más difícil medir el efecto de contenido y enlaces. Los usuarios ven snippets parecidos de un dominio y confían menos en la estructura.",
      ],
      lists: [
        {
          intro: "Efectos:",
          items: [
            "URLs que saltan cerca de los primeros puestos por una frase",
            "menos clic total que con un líder",
            "gasto desperdiciado en enlaces que no van a ninguna parte",
            "confusión en el plan de contenidos y briefs de redactores",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La canibalización no es un «filtro de sanción» cotidiano aparte — son tus propios documentos compitiendo. Arregla estructura, no engagement falso.",
        },
      ],
    },
    {
      title: "Cómo prevenirla al inicio",
      level: 2,
      paras: [
        "Investigación de keywords y clustering antes de publicar en masa: una landing — un intent principal. Title y description únicos. Mapa de secciones y blog alineado.",
        "No generes landings casi idénticas por cada variación de keyword. Mejor una URL fuerte con long-tail natural que diez copias finas.",
      ],
      lists: [
        {
          intro: "Reglas del plan de contenidos:",
          items: [
            "cluster → una URL canónica",
            "frases adyacentes — en H2/FAQ del canónico, no URLs nuevas sin necesidad",
            "comercial e info — URLs distintas si el intent difiere",
            "antes de publicar — busca «¿ya tenemos una página de esto?»",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Puntos de entrada",
          href: "/es/blog/tochki-vhoda/",
        },
      ],
    },
    {
      title: "Cómo encontrar canibalización",
      level: 2,
      paras: [
        "Sitio pequeño: tabla URL × keyword principal × title. Busca repeticiones. En la SERP: `site:` + frase; Webmaster/GSC — qué URLs reciben impresiones por la consulta.",
        "Un crawler e informes de rankings muestran varias URLs con consultas solapadas. Las herramientas de auditoría a veces destacan «keyword cannibalization» — trátalo como hipótesis y verifica el intent a mano.",
      ],
      lists: [
        {
          intro: "Diagnóstico:",
          items: [
            "dos o más URLs en los 20 primeros por una frase",
            "cambios frecuentes de URL en la SERP",
            "titles casi idénticos",
            "enlazado interno con una ancla hacia destinos distintos",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Cómo resolver el conflicto",
      level: 2,
      paras: [
        "Elige el ganador del cluster (tráfico, conversión, enlaces, completitud). El resto: 301 al canónico, o cambiar intent/keywords, o noindex/canonical — según el rol de la URL.",
        "Refuerza el canónico: contenido, enlazado, enlaces externos hacia él. En una tienda: separa con claridad categoría, ficha y filtro; no indexes combos infinitos de parámetros.",
      ],
      lists: [
        {
          intro: "Opciones de tratamiento:",
          items: [
            "301 de la extra hacia la URL fuerte",
            "canonical si ambas URLs hacen falta en la UI",
            "separar temas (rewrite para otro intent)",
            "fusionar textos en una sola pieza",
            "arreglar anclas del enlazado interno",
          ],
        },
      ],
      tables: [
        {
          caption: "Elección rápida de acción",
          headers: ["Situación", "Acción"],
          rows: [
            ["Copia / landing obsoleta", "301 al canónico"],
            ["Ambas URLs hacen falta en la UI", "canonical + intent claro"],
            ["Info y comercial solapados", "Separar copy y keywords"],
            ["Páginas finas «para cada keyword»", "Fusionar en una URL fuerte"],
          ],
        },
      ],
      links: [
        {
          label: "301 en .htaccess",
          href: "/es/blog/htaccess-301/",
        },
        {
          label: "Etiqueta canonical",
          href: "/es/blog/kanonicheskiy-teg/",
        },
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Control tras los fixes",
      level: 2,
      paras: [
        "Pide recrawl del canónico y de las URLs fusionadas. Mira si la URL se estabilizó en la SERP y si creció la visibilidad total del cluster. No esperes un salto instantáneo a la primera página: primero se apaga el swap de dirección, luego se construye el ranking.",
        "Vuelve al plan de contenidos: prohíbe generar clusters duplicados sin revisión. Una vez al trimestre — chequeos selectivos de head terms con varias URLs.",
      ],
      lists: [
        {
          intro: "Checklist de cierre del caso:",
          items: [
            "canónico elegido y reforzado",
            "redirects/canonical funcionan",
            "sitemap sin URLs extra",
            "el enlazado apunta al canónico",
            "en GSC/Webmaster las impresiones convergen en una URL",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "dubli-stranits",
    "semanticheskoe-yadro",
    "kanonicheskiy-teg",
    "vnutrennyaya-perelinkovka",
    "htaccess-301",
    "tochki-vhoda",
  ],
};

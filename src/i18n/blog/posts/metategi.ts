import type { BlogPost } from "../../../data/blog";

/** EN overlay for metategi — same structure as RU JSON. */
export const metategiEn: BlogPost = {
  slug: "metategi",
  title: "Meta tags and SEO: title, description, robots, and keywords",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/metategi/cover-en.webp",
  excerpt:
    "What HTML meta tags are: why title and description matter, how robots control indexing, why keywords barely help — without ranking “secrets” or outdated character limits.",
  lead: [
    "Meta tags are machine-facing fields in the page `<head>`: they don’t draw a block on screen, but help the browser and search engine understand the document. For SEO people usually mean title, description, and robots directives; keywords have long been secondary.",
    "Below: a map of the tags, what actually affects SERPs and snippets, and what to leave alone. We don’t copy hard “exactly N characters = page one” rules or 2021 CMS screenshots: truncation length floats, plugin UIs change.",
  ],
  faq: [
    {
      q: "Do meta tags alone put a page on page one?",
      a: "No. Title and content help relevance and snippet clicks; ranking is broader — the page, links, tech, behavior.",
    },
    {
      q: "How is title different from H1?",
      a: "Title is the tab and snippet headline. H1 is the heading on the page. Align them by meaning; they don’t have to match word for word.",
    },
    {
      q: "Do I need meta keywords?",
      a: "As a ranking factor for Google and Yandex — no. Spend time on title, description, and body copy instead.",
    },
    {
      q: "Are meta robots and robots.txt the same?",
      a: "Related but different levels: robots.txt hints paths to the crawler; meta robots are directives for a specific HTML page (and sometimes X-Robots-Tag in HTTP).",
    },
    {
      q: "Does description always appear in the snippet?",
      a: "Not always: the engine may pull a page fragment. A good description raises the chance your own text shows in results.",
    },
    {
      q: "Where do I edit meta tags?",
      a: "In the theme template, an SEO plugin, or CMS fields. Button paths depend on the system — check current Help, not a 2021 screenshot.",
    },
    {
      q: "Should one title cover the whole site?",
      a: "No: commercial URLs need unique wording for each page’s intent.",
    },
    {
      q: "What should I read next?",
      a: "Separate pieces: title length, meta description, excluding pages from the index, snippets, and Open Graph.",
    },
  ],
  sections: [
    {
      title: "What counts as meta tags",
      level: 2,
      paras: [
        "Broadly — `<head>` elements that describe the document: charset, viewport, title, meta name/property, link rel, and more. In SEO slang “meta tags” often narrow to title + description + robots + outdated keywords.",
        "They don’t replace content and URL structure. An empty page with a perfect title still isn’t a landing page.",
      ],
      lists: [
        {
          intro: "Basic indexing minimum:",
          items: [
            "a unique title",
            "a meaningful description",
            "a clear H1 and body text",
            "correct robots directives if the page shouldn’t rank",
          ],
        },
      ],
    },
    {
      title: "Title",
      level: 2,
      paras: [
        "Title shows in the browser tab and as the blue (or other) headline in results. It’s one of the strongest “meta” signals for what the URL is about.",
        "Write for people and the query: brand, gist, sometimes geo or a USP — not a keyword dump. The old “under 80 characters” guide is a truncation hint, not a law.",
        "Use competitors in the SERP as a tone reference, not a copy-paste template.",
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "The H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Description",
      level: 2,
      paras: [
        "Meta description is a candidate for the text under the headline in the snippet. It usually isn’t a direct ranking score; it works indirectly via CTR and click expectations.",
        "State the benefit and match the page. Clickbait the URL doesn’t deliver hurts trust.",
      ],
      links: [
        {
          label: "Meta description in depth",
          href: "/en/blog/meta-description/",
        },
        {
          label: "Snippets in search results",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Robots: meta and neighboring tools",
      level: 2,
      paras: [
        "Meta robots (and the HTTP header) set whether to index the page and follow links: `noindex`, `nofollow`, combinations, `all`/`none` in older cheat sheets.",
        "Don’t confuse with Disallow in robots.txt: blocking a path in txt may keep the crawler away; putting noindex on HTML means the page may still be crawled but shouldn’t enter the index (when handled correctly).",
        "Utility pages, duplicates, carts, thin filters — typical candidates to noindex. Don’t noindex commercial landings just in case.",
      ],
      notes: [
        {
          title: "Check in the panels",
          kind: "tip",
          text: "After changing directives, look in Search Console / Webmaster and Inspect URL / crawl-as-bot tools — not only the source in your IDE.",
        },
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Keywords and other myths",
      level: 2,
      paras: [
        "Meta keywords once tried to feed engines a keyword list. Today for major systems they barely affect rankings; stuffing keywords achieves nothing.",
        "Same for “secret” meta that supposedly boost PageRank: ignore it. Put your effort into content, internal links, speed, and the snippet.",
        "For social sharing, look at Open Graph / Twitter Cards separately from the search description.",
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "How to add them on a site",
      level: 2,
      paras: [
        "By hand in the `<head>` template, via a CMS SEO module, or “SEO title / description” fields on the item. On site builders — the page settings block.",
        "Watch that the plugin doesn’t duplicate titles or stamp one template across a thousand cards without uniqueness.",
        "After edits — spot-check page source and the live snippet over days/weeks (not instantly).",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Meta tags are a machine layer in `<head>`; for SEO the core is title, description, and sensible robots.",
        "Keywords don’t save rankings; don’t copy “secrets” from 2010s posts.",
        "Go deeper in separate guides on title, description, and closing from index — this piece is a map, not a substitute.",
      ],
    },
  ],
  closing: [
    "Walk five commercial URLs: unique title, honest description, no accidental noindex — faster than hunting a “secret” meta keywords tag.",
  ],
  related: [
    "meta-description",
    "dlina-title",
    "zakrytie-ot-indeksatsii",
    "snippet",
    "teg-h1",
    "open-graph",
  ],
};

/** ES overlay for metategi — same structure as RU JSON / EN. */
export const metategiEs: BlogPost = {
  slug: "metategi",
  title: "Meta tags y SEO: title, description, robots y keywords",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/metategi/cover-es.webp",
  excerpt:
    "Qué son los meta tags HTML: por qué importan title y description, cómo robots controlan la indexación, por qué keywords casi no ayudan — sin «secretos» de ranking ni límites de caracteres desfasados.",
  lead: [
    "Los meta tags son campos orientados a máquinas en el `<head>` de la página: no dibujan un bloque en pantalla, pero ayudan al navegador y al buscador a entender el documento. En SEO la gente suele referirse a title, description y directivas robots; keywords llevan tiempo en segundo plano.",
    "Abajo: un mapa de los tags, qué afecta de verdad a SERPs y snippets, y qué dejar en paz. No copiamos reglas duras de «exactamente N caracteres = primera página» ni capturas de CMS de 2021: la longitud de truncado flota, las UIs de plugins cambian.",
  ],
  faq: [
    {
      q: "¿Los meta tags solos ponen una página en primera página?",
      a: "No. Title y contenido ayudan a relevancia y clics en el snippet; el ranking es más amplio — la página, enlaces, técnica, comportamiento.",
    },
    {
      q: "¿En qué se diferencia title de H1?",
      a: "Title es la pestaña y el titular del snippet. H1 es el heading en la página. Alínealos por sentido; no tienen que coincidir palabra por palabra.",
    },
    {
      q: "¿Hacen falta meta keywords?",
      a: "Como factor de ranking en Google y Yandex — no. Invierte tiempo en title, description y el cuerpo del copy.",
    },
    {
      q: "¿Son lo mismo meta robots y robots.txt?",
      a: "Relacionados pero a niveles distintos: robots.txt sugiere paths al crawler; meta robots son directivas para una página HTML concreta (y a veces X-Robots-Tag en HTTP).",
    },
    {
      q: "¿La description aparece siempre en el snippet?",
      a: "No siempre: el motor puede tirar de un fragmento de la página. Una buena description sube la chance de que se muestre tu propio texto en resultados.",
    },
    {
      q: "¿Dónde edito los meta tags?",
      a: "En la plantilla del tema, un plugin SEO o campos del CMS. Las rutas de botones dependen del sistema — mira la Help actual, no una captura de 2021.",
    },
    {
      q: "¿Debe un solo title cubrir todo el sitio?",
      a: "No: las URLs comerciales necesitan wording único para el intent de cada página.",
    },
    {
      q: "¿Qué leer a continuación?",
      a: "Piezas aparte: longitud de title, meta description, sacar páginas del índice, snippets y Open Graph.",
    },
  ],
  sections: [
    {
      title: "Qué cuenta como meta tags",
      level: 2,
      paras: [
        "En amplio — elementos del `<head>` que describen el documento: charset, viewport, title, meta name/property, link rel y más. En jerga SEO «meta tags» a menudo se estrecha a title + description + robots + keywords desfasados.",
        "No sustituyen contenido ni estructura de URLs. Una página vacía con un title perfecto sigue sin ser una landing.",
      ],
      lists: [
        {
          intro: "Mínimo básico de indexación:",
          items: [
            "un title único",
            "una description con sentido",
            "un H1 claro y texto de cuerpo",
            "directivas robots correctas si la página no debe rankear",
          ],
        },
      ],
    },
    {
      title: "Title",
      level: 2,
      paras: [
        "Title se muestra en la pestaña del navegador y como titular azul (u otro) en resultados. Es una de las señales «meta» más fuertes de de qué va la URL.",
        "Escribe para personas y la query: marca, esencia, a veces geo o un USP — no un dump de keywords. La vieja guía «menos de 80 caracteres» es una pista de truncado, no una ley.",
        "Usa a los competidores en el SERP como referencia de tono, no como plantilla copy-paste.",
      ],
      links: [
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
        {
          label: "El tag H1",
          href: "/es/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Description",
      level: 2,
      paras: [
        "Meta description es candidata al texto bajo el titular en el snippet. Suele no ser score directo de ranking; trabaja de forma indirecta vía CTR y expectativas del clic.",
        "Di el beneficio y encaja con la página. Un clickbait que la URL no cumple duele a la confianza.",
      ],
      links: [
        {
          label: "Meta description a fondo",
          href: "/es/blog/meta-description/",
        },
        {
          label: "Snippets en resultados de búsqueda",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Robots: meta y tools vecinas",
      level: 2,
      paras: [
        "Meta robots (y el header HTTP) fijan si indexar la página y seguir enlaces: `noindex`, `nofollow`, combinaciones, `all`/`none` en chuletas viejas.",
        "No lo confundas con Disallow en robots.txt: bloquear un path en txt puede mantener al crawler lejos; poner noindex en HTML significa que la página aún puede rastrearse pero no debería entrar al índice (cuando se gestiona bien).",
        "Páginas de utilidad, duplicados, carritos, filtros finos — candidatos típicos a noindex. No pongas noindex en landings comerciales «por si acaso».",
      ],
      notes: [
        {
          title: "Revisa en los paneles",
          kind: "tip",
          text: "Tras cambiar directivas, mira en Search Console / Webmaster e Inspect URL / tools de crawl-as-bot — no solo el source en tu IDE.",
        },
      ],
      links: [
        {
          label: "Cerrar páginas a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Keywords y otros mitos",
      level: 2,
      paras: [
        "Meta keywords intentaba alimentar a los motores con una lista de keywords. Hoy en sistemas grandes casi no afectan al ranking; stuffing de keywords no logra nada.",
        "Igual con meta «secretos» que supuestamente suben PageRank: ignóralo. Pon el esfuerzo en contenido, enlaces internos, velocidad y el snippet.",
        "Para compartir en redes, mira Open Graph / Twitter Cards aparte de la description de búsqueda.",
      ],
      links: [
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
    {
      title: "Cómo añadirlos en un sitio",
      level: 2,
      paras: [
        "A mano en la plantilla `<head>`, vía módulo SEO del CMS o campos «SEO title / description» del ítem. En site builders — el bloque de ajustes de página.",
        "Vigila que el plugin no duplique titles ni estampe una plantilla en mil fichas sin unicidad.",
        "Tras editar — spot-check del source de la página y del snippet en vivo a lo largo de días/semanas (no al instante).",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Los meta tags son una capa de máquina en `<head>`; para SEO el núcleo es title, description y robots con sentido.",
        "Keywords no salvan rankings; no copies «secretos» de posts de los 2010.",
        "Profundiza en guías aparte de title, description y cierre al índice — esta pieza es un mapa, no un sustituto.",
      ],
    },
  ],
  closing: [
    "Recorre cinco URLs comerciales: title único, description honesta, sin noindex accidental — más rápido que cazar un tag «secreto» de meta keywords.",
  ],
  related: [
    "meta-description",
    "dlina-title",
    "zakrytie-ot-indeksatsii",
    "snippet",
    "teg-h1",
    "open-graph",
  ],
};

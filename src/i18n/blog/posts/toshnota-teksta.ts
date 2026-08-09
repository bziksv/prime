import type { BlogPost } from "../../../data/blog";

/** EN overlay for toshnota-teksta — same structure as RU JSON. */
export const toshnotaTekstaEn: BlogPost = {
  slug: "toshnota-teksta",
  title: "Text nausea and keyword density",
  date: "2020-07-30",
  category: "SEO",
  cover: "/images/blog/toshnota-teksta/cover-en.webp",
  excerpt:
    "What classic and academic text nausea mean, how keyword density is counted, which tools check it, and why a “normal %” is a brief guide — not a ranking law.",
  lead: [
    "Text nausea is a metric from SEO editors and copywriting exchanges: how often the same words repeat in a piece. It is often confused with text.ru “spamminess,” though the formulas differ. Keyword density is the share of query (or word) occurrences relative to text volume.",
    "Below: how classic nausea differs from academic scores, how to check density online, what ranges briefs use, and how not to turn editing into a race for a percentage. Cutting overstuffing as practice is in the spamminess article; here the focus is density and nausea metrics.",
  ],
  faq: [
    {
      q: "Is nausea the same as spamminess?",
      a: "Related ideas, different scales. Advego counts classic and academic nausea; text.ru has its own “spamminess.” Figures do not convert one-to-one across tools.",
    },
    {
      q: "What keyword density is “normal”?",
      a: "A common brief guide is a moderate zone of a few percent for the main key — without fanaticism. It depends on length and niche. There is no single search-engine secret.",
    },
    {
      q: "What is classic nausea?",
      a: "Usually √N, where N is the repeat count of the most frequent (meaningful) word. The more one word dominates, the higher the score.",
    },
    {
      q: "What is academic nausea?",
      a: "The share of the most frequent words or phrases relative to text volume (in percent). It rises when many different but still pushy repeats pile up.",
    },
    {
      q: "Does high nausea mean a filter?",
      a: "Not a direct ban formula. It is an editor signal: the text may be overstuffed. The search engine’s decision is broader — meaning, behavior, page quality.",
    },
    {
      q: "What tools should you check with?",
      a: "Advego (nausea), text.ru (spamminess), Turgenev, Istio and peers. Lock the tool and threshold in the brief.",
    },
    {
      q: "Should you add keywords if density is low?",
      a: "Only if the topic is not really covered. Do not insert a key for the percentage — clarify structure and value first.",
    },
    {
      q: "Do synonyms fix nausea?",
      a: "Partly. Natural speech, pronouns, and cutting useless repeats beat mechanical synonymizing.",
    },
  ],
  sections: [
    {
      title: "Keyword density in plain words",
      level: 2,
      paras: [
        "Density is the ratio of keyword or phrase occurrences to total words (or content words — depends on the tool’s method). Textbook example: in a three-word phrase one “dancing” yields a huge share — meaningless on a real article without volume.",
        "Search engines do not plug “% from Advego” into a ranking formula. They care about topic, clarity, and usefulness. The metric helps the client and author avoid overstuffing or empty text without a theme.",
      ],
      lists: [
        {
          intro: "What is usually counted:",
          items: [
            "main-key occurrences",
            "same-root and close forms",
            "most frequent words in the document",
            "stop words separately (often excluded)",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Counting density on a 20-word paragraph and demanding “the same as a 5,000-character brief.” Volume and meaning first.",
        },
      ],
    },
    {
      title: "Classic and academic nausea",
      level: 2,
      paras: [
        "Classic nausea in the familiar Advego scheme ties to the most frequent word: take the square root of its repeat count. Many identical “buy” in a row — classic rises fast.",
        "Academic nausea is closer to the share of frequent meaningful words in the text: it captures the overall repeat “background,” not only the frequency champion. High academic often means the article spins a narrow vocabulary without developing the topic.",
      ],
      lists: [
        {
          intro: "How to read the pair:",
          items: [
            "high classic — one word dominates the text",
            "high academic — lots of pushy repeats overall",
            "both low with an empty topic — the text may be spread thin",
            "cross-check by reading aloud, not only the number",
          ],
        },
      ],
      tables: [
        {
          caption: "Two nausea metrics (simplified)",
          headers: ["Metric", "Idea", "What to watch"],
          rows: [
            ["Classic", "√ of top-word repeats", "One key / champion word"],
            ["Academic", "Share of frequent words, %", "Overall vocabulary stuffing"],
            ["text.ru spamminess", "That tool’s own scale", "Don’t mix up with Advego"],
          ],
        },
      ],
      links: [
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Tools for density and nausea",
      level: 2,
      paras: [
        "Advego SEO analysis shows classic and academic nausea, water, and a frequency dictionary. text.ru is useful for uniqueness and its spamminess score. Turgenev looks at over-optimization risk, water, style — useful as a second opinion, not the sole judge.",
        "Online URL checks (if in your stack) help for a live page: you see density in the layout context. Desktop and exchange tools — for drafts before publish. Figures do not match across tools: pick one baseline in the author contract.",
      ],
      lists: [
        {
          intro: "Practical set:",
          items: [
            "Advego — nausea and frequency dictionary",
            "text.ru — spamminess and uniqueness",
            "Turgenev / peers — over-optimization risk",
            "reading aloud — mandatory finale",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Product names, SKUs, and brand in a card legitimately repeat — do not “cure” them to zero with a template.",
        },
      ],
    },
    {
      title: "Norm ranges — not a ranking law",
      level: 2,
      paras: [
        "Briefs often set soft corridors: main-key density of a few percent, academic nausea in a moderate zone, text.ru spamminess not in the red. Older guides floated higher “norms” — the market tightened toward natural writing.",
        "Narrow B2B topics sometimes must repeat a term: “pump” in a pumps text cannot become ten euphemisms. Then you lower classic via structure, lists, and covering aspects — not by losing meaning.",
      ],
      lists: [
        {
          intro: "How to set a norm in the brief:",
          items: [
            "name the tool and check version",
            "give a corridor, not one number",
            "require human readability",
            "call out required niche terms separately",
            "ban padding water for the percentage",
          ],
        },
      ],
    },
    {
      title: "How to edit without a percentage cult",
      level: 2,
      paras: [
        "Find the most frequent words in the report. Keep the key where it carries meaning (title, first screen, purposeful subheads). Elsewhere — synonyms, pronouns, rephrasing, cutting duplicates. Do not inflate volume with empty sentences: “water” hits another metric and people.",
        "If density is too low on a short text — first add value and structure (answers, comparison, steps), then strengthen the theme surgically. Racing to “add the key in every H2” brings you back to stuffing.",
      ],
      lists: [
        {
          intro: "Working edit order:",
          items: [
            "pull the frequency dictionary",
            "cut obvious stuffing",
            "replace some repeats naturally",
            "check Title/H1 without a query dump",
            "recheck in the same tool",
            "final read-aloud",
          ],
        },
      ],
      links: [
        {
          label: "Spamminess: how to lower it",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Link to SEO and timelines",
      level: 2,
      paras: [
        "Text clean of stuffing is part of page prep — not a ranking switch. After publish, core visibility grows month to month; a planned horizon for a solid page-one share is usually 2–6 months after work starts. A nausea metric in Excel does not speed up indexing.",
        "Look at the whole page: snippet, speed, intent, internal links. Perfect nausea on a useless landing gives nothing.",
      ],
      lists: [
        {
          intro: "Quality mini-checklist:",
          items: [
            "text for humans",
            "metrics inside the brief corridor",
            "key in natural places",
            "no query dump in Title",
            "page closes the intent",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Text prep is not page one. Growing the core in the results is a separate horizon after work starts.",
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
  related: [
    "zaspamlennost-teksta",
    "kopirayting",
    "proverka-unikalnosti",
    "optimizatsiya-stranitsy",
    "semanticheskoe-yadro",
    "prodayushchie-teksty",
  ],
};

/** ES overlay for toshnota-teksta — same structure as RU JSON / EN. */
export const toshnotaTekstaEs: BlogPost = {
  slug: "toshnota-teksta",
  title: "Náusea del texto y densidad de keywords",
  date: "2020-07-30",
  category: "SEO",
  cover: "/images/blog/toshnota-teksta/cover.webp",
  excerpt:
    "Qué significan la náusea clásica y la académica, cómo se cuenta la densidad de keywords, qué herramientas la revisan y por qué un «% normal» es una guía de brief — no una ley de ranking.",
  lead: [
    "La náusea del texto es una métrica de editores SEO y exchanges de copywriting: con qué frecuencia se repiten las mismas palabras en una pieza. A menudo se confunde con la «spamminess» de text.ru, aunque las fórmulas difieren. La densidad de keywords es la cuota de ocurrencias de la consulta (o palabra) respecto al volumen del texto.",
    "Abajo: en qué se diferencia la náusea clásica de las puntuaciones académicas, cómo revisar densidad online, qué rangos usan los briefs y cómo no convertir la edición en una carrera por un porcentaje. Cortar el stuffing como práctica está en el artículo de spamminess; aquí el foco son densidad y métricas de náusea.",
  ],
  faq: [
    {
      q: "¿La náusea es lo mismo que la spamminess?",
      a: "Ideas relacionadas, escalas distintas. Advego cuenta náusea clásica y académica; text.ru tiene su propia «spamminess». Las cifras no se convierten 1:1 entre herramientas.",
    },
    {
      q: "¿Qué densidad de keywords es «normal»?",
      a: "Una guía habitual de brief es una zona moderada de unos pocos por ciento para la clave principal — sin fanatismo. Depende de la longitud y del nicho. No hay un secreto único del buscador.",
    },
    {
      q: "¿Qué es la náusea clásica?",
      a: "Normalmente √N, donde N es el conteo de repeticiones de la palabra (con sentido) más frecuente. Cuanto más domina una palabra, más sube la puntuación.",
    },
    {
      q: "¿Qué es la náusea académica?",
      a: "La cuota de las palabras o frases más frecuentes respecto al volumen del texto (en por ciento). Sube cuando se acumulan muchas repeticiones distintas pero aún insistentes.",
    },
    {
      q: "¿Una náusea alta significa un filtro?",
      a: "No es una fórmula de ban directa. Es una señal de editor: el texto puede estar sobre-relleno. La decisión del buscador es más amplia — sentido, comportamiento, calidad de página.",
    },
    {
      q: "¿Con qué herramientas revisar?",
      a: "Advego (náusea), text.ru (spamminess), Turgenev, Istio y pares. Fija la herramienta y el umbral en el brief.",
    },
    {
      q: "¿Hay que añadir keywords si la densidad es baja?",
      a: "Solo si el tema no está realmente cubierto. No metas una clave por el porcentaje — aclara primero estructura y valor.",
    },
    {
      q: "¿Los sinónimos arreglan la náusea?",
      a: "En parte. El habla natural, los pronombres y cortar repeticiones inútiles ganan a sinónimos mecánicos.",
    },
  ],
  sections: [
    {
      title: "Densidad de keywords en palabras claras",
      level: 2,
      paras: [
        "La densidad es la ratio de ocurrencias de la keyword o frase respecto al total de palabras (o palabras de contenido — depende del método de la herramienta). Ejemplo de libro: en una frase de tres palabras un «bailando» da una cuota enorme — sin sentido en un artículo real sin volumen.",
        "Los buscadores no enchufan «% de Advego» en una fórmula de ranking. Les importan el tema, la claridad y la utilidad. La métrica ayuda al cliente y al autor a evitar stuffing o un texto vacío sin tema.",
      ],
      lists: [
        {
          intro: "Qué se suele contar:",
          items: [
            "ocurrencias de la clave principal",
            "formas de la misma raíz y cercanas",
            "palabras más frecuentes del documento",
            "stop words aparte (a menudo se excluyen)",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Contar densidad en un párrafo de 20 palabras y exigir «lo mismo que un brief de 5.000 caracteres». Primero volumen y sentido.",
        },
      ],
    },
    {
      title: "Náusea clásica y académica",
      level: 2,
      paras: [
        "La náusea clásica en el esquema familiar de Advego se liga a la palabra más frecuente: se toma la raíz cuadrada de su conteo de repeticiones. Muchos «comprar» idénticos seguidos — la clásica sube rápido.",
        "La náusea académica se acerca a la cuota de palabras con sentido frecuentes en el texto: captura el «fondo» general de repetición, no solo al campeón de frecuencia. Una académica alta a menudo significa que el artículo gira un vocabulario estrecho sin desarrollar el tema.",
      ],
      lists: [
        {
          intro: "Cómo leer el par:",
          items: [
            "clásica alta — una palabra domina el texto",
            "académica alta — muchas repeticiones insistentes en general",
            "ambas bajas con un tema vacío — el texto puede estar demasiado diluido",
            "cruza leyendo en voz alta, no solo el número",
          ],
        },
      ],
      tables: [
        {
          caption: "Dos métricas de náusea (simplificado)",
          headers: ["Métrica", "Idea", "Qué mirar"],
          rows: [
            ["Clásica", "√ de repeticiones de la palabra líder", "Una clave / palabra campeona"],
            ["Académica", "Cuota de palabras frecuentes, %", "Stuffing general del vocabulario"],
            ["Spamminess text.ru", "Escala propia de esa herramienta", "No mezclar con Advego"],
          ],
        },
      ],
      links: [
        {
          label: "Spamminess del texto",
          href: "/es/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Herramientas de densidad y náusea",
      level: 2,
      paras: [
        "El análisis SEO de Advego muestra náusea clásica y académica, agua y un diccionario de frecuencias. text.ru sirve para unicidad y su score de spamminess. Turgenev mira riesgo de sobre-optimización, agua, estilo — útil como segunda opinión, no como único juez.",
        "Los checks online de URL (si están en tu stack) ayudan para una página viva: ves densidad en el contexto del layout. Herramientas de escritorio y de exchange — para borradores antes de publicar. Las cifras no casan entre herramientas: elige una baseline en el contrato con el autor.",
      ],
      lists: [
        {
          intro: "Set práctico:",
          items: [
            "Advego — náusea y diccionario de frecuencias",
            "text.ru — spamminess y unicidad",
            "Turgenev / pares — riesgo de sobre-optimización",
            "lectura en voz alta — final obligatorio",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Nombres de producto, SKUs y marca en una ficha se repiten con legitimidad — no los «cures» a cero con una plantilla.",
        },
      ],
    },
    {
      title: "Rangos de norma — no una ley de ranking",
      level: 2,
      paras: [
        "Los briefs a menudo fijan corredores suaves: densidad de la clave principal de unos pocos por ciento, náusea académica en una zona moderada, spamminess de text.ru fuera del rojo. Guías más viejas flotaban «normas» más altas — el mercado apretó hacia la escritura natural.",
        "Temas B2B estrechos a veces deben repetir un término: «bomba» en un texto de bombas no puede volverse diez eufemismos. Entonces bajas la clásica vía estructura, listas y cubrir aspectos — no perdiendo sentido.",
      ],
      lists: [
        {
          intro: "Cómo fijar una norma en el brief:",
          items: [
            "nombra la herramienta y la versión de check",
            "da un corredor, no un solo número",
            "exige legibilidad humana",
            "señala aparte los términos de nicho obligatorios",
            "prohíbe relleno de agua por el porcentaje",
          ],
        },
      ],
    },
    {
      title: "Cómo editar sin culto al porcentaje",
      level: 2,
      paras: [
        "Encuentra las palabras más frecuentes en el informe. Mantén la clave donde lleva sentido (title, primera pantalla, subtítulos con propósito). En el resto — sinónimos, pronombres, reformulación, cortar duplicados. No infles volumen con oraciones vacías: el «agua» golpea otra métrica y a las personas.",
        "Si la densidad es demasiado baja en un texto corto — primero añade valor y estructura (respuestas, comparación, pasos), luego refuerza el tema con cirugía. Correr a «meter la clave en cada H2» te devuelve al stuffing.",
      ],
      lists: [
        {
          intro: "Orden de edición que funciona:",
          items: [
            "saca el diccionario de frecuencias",
            "corta stuffing obvio",
            "reemplaza algunas repeticiones de forma natural",
            "revisa Title/H1 sin un volcado de consultas",
            "vuelve a chequear en la misma herramienta",
            "lectura final en voz alta",
          ],
        },
      ],
      links: [
        {
          label: "Spamminess: cómo bajarla",
          href: "/es/blog/zaspamlennost-teksta/",
        },
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
        {
          label: "Check de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Vínculo con SEO y plazos",
      level: 2,
      paras: [
        "Un texto limpio de stuffing es parte de la preparación de la página — no un interruptor de ranking. Tras publicar, la visibilidad del núcleo crece de mes a mes; un horizonte planificado para una cuota sólida de primera página suele ser 2–6 meses tras el arranque del trabajo. Una métrica de náusea en Excel no acelera la indexación.",
        "Mira la página entera: snippet, velocidad, intención, enlaces internos. Una náusea perfecta en un landing inútil no da nada.",
      ],
      lists: [
        {
          intro: "Mini-checklist de calidad:",
          items: [
            "texto para humanos",
            "métricas dentro del corredor del brief",
            "clave en lugares naturales",
            "sin volcado de consultas en el Title",
            "la página cierra la intención",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "La preparación del texto no es primera página. Crecer el núcleo en los resultados es un horizonte aparte tras el arranque del trabajo.",
        },
      ],
      links: [
        {
          label: "Optimización on-page",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Set semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
  related: [
    "zaspamlennost-teksta",
    "kopirayting",
    "proverka-unikalnosti",
    "optimizatsiya-stranitsy",
    "semanticheskoe-yadro",
    "prodayushchie-teksty",
  ],
};

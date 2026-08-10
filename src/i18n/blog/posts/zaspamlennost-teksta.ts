import type { BlogPost } from "../../../data/blog";

/** EN overlay for zaspamlennost-teksta — same structure as RU JSON. */
export const zaspamlennostTekstaEn: BlogPost = {
  slug: "zaspamlennost-teksta",
  title: "Keyword stuffing: what it is and how to fix it",
  date: "2021-10-29",
  category: "SEO",
  cover: "/images/blog/zaspamlennost-teksta/cover-en.webp",
  excerpt:
    "What keyword stuffing and “text nausea” scores mean, how excess keywords hurt readers and SEO, which tools measure density, and how to clean the copy without padding it with fluff.",
  lead: [
    "Keyword stuffing is when target phrases and same-root repeats pile up until the page reads like it was written for a bot. Search engines dislike it. Readers bounce even faster.",
    "Below: how stuffing shows up, why teams still use Advego and text.ru, and how to lower density without turning the article into empty filler. Tool scores are a brief guideline — not a ranking law.",
  ],
  faq: [
    {
      q: "What stuffing percentage counts as “normal”?",
      a: "On text.ru the usual advice is “don’t go to extremes”; briefs often ask for a moderate zone (roughly up to ~45–50% on their scale). Always match the specific tool — the scales don’t line up.",
    },
    {
      q: "Does a high Advego “nausea” score mean a search ban?",
      a: "No direct formula. High classic or academic nausea just flags lots of repeats. Engines weigh meaning, behavior, and overall page quality — not one third-party percentage.",
    },
    {
      q: "Should I pad the text with fluff to drop the score?",
      a: "No. Use synonyms, pronouns, rephrasing, and cut spare keywords. Fluff damages the copy in a different way.",
    },
    {
      q: "Are keywords in the title tag spam?",
      a: "One natural main idea is fine. A comma chain like “buy cheap wholesale city urgent” is already stuffing.",
    },
    {
      q: "What else should I check with?",
      a: "Advego, text.ru, Istio, and similar tools — plus common sense: read it aloud. If you stumble, edit.",
    },
  ],
  sections: [
    {
      title: "What counts as stuffing",
      level: 2,
      paras: [
        "It’s how often keywords (and close forms) show up relative to the length of the text. Keywords belong in the topic — racing to plant the query in every sentence breaks the language.",
        "A classic anti-example: a product blurb where one commercial phrase repeats dozens of times with tiny swaps. Formally “optimized.” In practice — spam.",
      ],
      lists: [
        {
          intro: "Stuffing usually looks like:",
          items: [
            "the same words in every paragraph",
            "unnatural query chains",
            "keyboard-layout tricks and typos “for uniqueness”",
            "copy a human can’t finish reading",
          ],
        },
      ],
    },
    {
      title: "How it connects to rankings",
      level: 2,
      paras: [
        "Relevance matters, but search also judges usefulness, uniqueness, and on-page behavior. Stuffing erodes trust and UX — bounce goes up.",
        "Ranking uses many signals. A third-party “nausea %” is not plugged into the algorithm. Treat the tool as an editor’s helper. Cleaner copy is part of prep; ranking gains for a competitive set are still planned over months (often 2–6), not the day you lower a density score.",
      ],
    },
    {
      title: "Tools that check density",
      level: 2,
      paras: [
        "text.ru reports stuffing, uniqueness, and often spelling issues. Advego reports classic and academic “nausea” — two different density formulas.",
        "Istio, PR-CY, and desktop analyzers are alternatives. Numbers won’t match one-to-one across tools, so name the instrument and threshold in the brief.",
      ],
      lists: [
        {
          intro: "A practical brief approach:",
          items: [
            "name the tool and the threshold",
            "require human readability",
            "don’t chase a “magic” percent at the cost of meaning",
            "recheck the final text after edits",
          ],
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "If a tool screams “spam” but the copy reads fine, check whether required product or brand names flooded the report. Fix with judgment — not a blind find-and-replace.",
        },
      ],
    },
    {
      title: "How to reduce stuffing",
      level: 2,
      paras: [
        "Cut spare keyword repeats, swap some for synonyms and pronouns, and rebuild awkward sentences. Passages you can’t save — delete.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "find the top frequent words in the report",
            "keep the keyword where it still carries meaning",
            "smooth with natural speech, not fluff",
            "don’t spawn same-root forms in every paragraph",
            "read aloud and send for a final proofread",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Inflating the word count with empty phrases so the “keyword %” drops. You just get watery spam of another kind.",
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};

/** ES overlay for zaspamlennost-teksta — same structure as RU JSON / EN. */
export const zaspamlennostTekstaEs: BlogPost = {
  slug: "zaspamlennost-teksta",
  title: "Keyword stuffing: qué es y cómo arreglarlo",
  date: "2021-10-29",
  category: "SEO",
  cover: "/images/blog/zaspamlennost-teksta/cover-es.webp",
  excerpt:
    "Qué significan el keyword stuffing y las puntuaciones de «náusea» del texto, cómo el exceso de keywords duele a lectores y SEO, qué tools miden densidad y cómo limpiar el copy sin rellenarlo de fluff.",
  lead: [
    "Keyword stuffing es cuando se amontonan frases objetivo y repeticiones de misma raíz hasta que la página se lee como escrita para un bot. A los buscadores no les gusta. Los lectores rebotan aún más rápido.",
    "Abajo: cómo se ve el stuffing, por qué los equipos siguen usando Advego y text.ru, y cómo bajar densidad sin convertir el artículo en relleno vacío. Las puntuaciones de tools son una guía del brief — no una ley de ranking.",
  ],
  faq: [
    {
      q: "¿Qué porcentaje de stuffing cuenta como «normal»?",
      a: "En text.ru el consejo habitual es «no vayas a extremos»; los briefs a menudo piden una zona moderada (más o menos hasta ~45–50% en su escala). Siempre alinea con la tool concreta — las escalas no coinciden.",
    },
    {
      q: "¿Una «náusea» alta en Advego significa ban de búsqueda?",
      a: "No hay fórmula directa. Una náusea clásica o académica alta solo marca muchas repeticiones. Los motores pesan significado, comportamiento y calidad global de la página — no un porcentaje de terceros.",
    },
    {
      q: "¿Debo rellenar el texto con fluff para bajar la puntuación?",
      a: "No. Usa sinónimos, pronombres, reformulación y corta keywords de más. El fluff daña el copy de otra forma.",
    },
    {
      q: "¿Las keywords en el title tag son spam?",
      a: "Una idea principal natural está bien. Una cadena de comas tipo «comprar barato mayorista ciudad urgente» ya es stuffing.",
    },
    {
      q: "¿Con qué más debo chequear?",
      a: "Advego, text.ru, Istio y tools similares — más sentido común: léelo en voz alta. Si tropiezas, edita.",
    },
  ],
  sections: [
    {
      title: "Qué cuenta como stuffing",
      level: 2,
      paras: [
        "Es con qué frecuencia aparecen keywords (y formas cercanas) respecto a la longitud del texto. Las keywords pertenecen al tema — correr a plantar la consulta en cada frase rompe el idioma.",
        "Un anti-ejemplo clásico: un blurb de producto donde una frase comercial se repite docenas de veces con swaps mínimos. Formalmente «optimizado». En la práctica — spam.",
      ],
      lists: [
        {
          intro: "El stuffing suele verse así:",
          items: [
            "las mismas palabras en cada párrafo",
            "cadenas de consultas antinaturales",
            "trucos de layout de teclado y typos «para unicidad»",
            "copy que un humano no puede terminar de leer",
          ],
        },
      ],
    },
    {
      title: "Cómo se conecta con el ranking",
      level: 2,
      paras: [
        "La relevancia importa, pero la búsqueda también juzga utilidad, unicidad y comportamiento on-page. El stuffing erosiona confianza y UX — sube el bounce.",
        "El ranking usa muchas señales. Un «% de náusea» de terceros no está enchufado al algoritmo. Trata la tool como ayudante del editor. Un copy más limpio es parte de la prep; las ganancias de ranking de un set competitivo siguen planificadas en meses (a menudo 2–6), no el día en que bajas una puntuación de densidad.",
      ],
    },
    {
      title: "Tools que checan densidad",
      level: 2,
      paras: [
        "text.ru reporta stuffing, unicidad y a menudo issues de ortografía. Advego reporta «náusea» clásica y académica — dos fórmulas de densidad distintas.",
        "Istio, PR-CY y analyzers de escritorio son alternativas. Los números no coinciden uno a uno entre tools, así que nombra el instrumento y el umbral en el brief.",
      ],
      lists: [
        {
          intro: "Enfoque práctico de brief:",
          items: [
            "nombra la tool y el umbral",
            "exige legibilidad humana",
            "no persigas un por ciento «mágico» a costa del significado",
            "vuelve a chequear el texto final tras las ediciones",
          ],
        },
      ],
      notes: [
        {
          title: "Tip de práctica",
          text: "Si una tool grita «spam» pero el copy se lee bien, revisa si nombres de producto o marca obligatorios inundaron el informe. Arregla con criterio — no con un find-and-replace ciego.",
        },
      ],
    },
    {
      title: "Cómo reducir el stuffing",
      level: 2,
      paras: [
        "Corta repeticiones de keywords de más, cambia algunas por sinónimos y pronombres, y reconstruye frases torpes. Pasajes que no se puedan salvar — bórralos.",
      ],
      lists: [
        {
          intro: "Orden de trabajo:",
          items: [
            "encuentra las palabras más frecuentes del informe",
            "mantén la keyword donde aún lleva significado",
            "suaviza con habla natural, no fluff",
            "no generes formas de misma raíz en cada párrafo",
            "lee en voz alta y envía a una corrección final",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          text: "Inflar el conteo de palabras con frases vacías para que baje el «% de keyword». Solo obtienes spam aguado de otro tipo.",
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};

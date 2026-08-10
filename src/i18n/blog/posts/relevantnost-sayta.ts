import type { BlogPost } from "../../../data/blog";

/** EN overlay for relevantnost-sayta — same structure as RU JSON. */
export const relevantnostSaytaEn: BlogPost = {
  slug: "relevantnost-sayta",
  title:
    "Website relevance in plain words: what it is and how to strengthen it",
  date: "2017-05-10",
  category: "SEO",
  cover: "/images/blog/relevantnost-sayta/cover-en.webp",
  excerpt:
    "What page relevance to a query means, how formal keyword match differs from a useful answer, and how to check and improve fit without a 4–5% density cult.",
  lead: [
    "Relevance is how well a page matches what the person really wants from a query. It used to be reduced to keyword density; today meaning, answer completeness, behavior, and commercial adequacy matter more.",
    "Below: a plain definition, types of relevance, how to check fit, and what to fix on the site — without a magic “4–5% keywords” formula or outdated meta Keywords.",
  ],
  faq: [
    {
      q: "What is site relevance?",
      a: "How well a page (and the site overall) answers the user’s query: by meaning, completeness, and usability — not only word match.",
    },
    {
      q: "What’s the difference between formal and substantive relevance?",
      a: "Formal — what the algorithm scores from signals (text, links, behavior, etc.). Substantive — whether it’s really a good answer, including assessor input.",
    },
    {
      q: "Do I need 4–5% keyword density?",
      a: "Not as a universal norm. Keywords and synonyms should feel natural; overspam hurts. Guide yourself by intent and readability.",
    },
    {
      q: "Does the meta Keywords tag help?",
      a: "For Yandex and Google as a ranking factor — no. Don’t spend time on it.",
    },
    {
      q: "How do I check relevance?",
      a: "By hand: site:/inurl: and compare page type to strong SERP results; rank/visibility tools as an extra slice. One third-party “relevance score” isn’t a verdict.",
    },
    {
      q: "Does relevance mean page one?",
      a: "No. Relevance is a condition. Competition, links, tech, brand, and history affect ranks. Page prep — weeks; core page-one share is planned for 2–6 months.",
    },
    {
      q: "What matters more: copy or behavior?",
      a: "Both. Copy sets the answer; behavior shows if it satisfied. Empty copy with faked engagement — filter risk.",
    },
    {
      q: "Where should I start improvements?",
      a: "Match cluster intent to SERP page type, satisfy the user’s job, remove overspam, fix tech and the snippet.",
    },
  ],
  sections: [
    {
      title: "In plain words",
      level: 2,
      paras: [
        "A person types a query. Search looks for pages most likely to solve the job. A relevant page is where the answer is complete, clear, and matches intention (buy, learn, compare, find an address).",
        "In early SEO “insert the keyword” often worked. Algorithms now lean harder on meaning, structure, satisfaction, and quality signals. Exact match still helps in title and headings — not as the only criterion.",
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
    {
      title: "How systems “score” fit",
      level: 2,
      paras: [
        "Simply: text and link signals combine with quality and behavior. Exact formulas are closed; in practice you need a clear page focus, topic coverage, internal and external links, and no spam.",
        "Old checklists with “mandatory 4–5% density” and Keywords are a museum. Ask: does the page answer the job as well as or better than documents near the top of today’s SERP for that cluster.",
      ],
      lists: [
        {
          intro: "What usually strengthens relevance:",
          items: [
            "keyword/meaning in title and H1 without overspam",
            "synonyms and related questions in the body",
            "structure (subheads, lists, FAQ)",
            "internal linking on the topic",
            "commercial expectations met (price, contacts, delivery — if intent is commercial)",
          ],
        },
      ],
      notes: [
        {
          title: "Don’t confuse",
          kind: "tip",
          text: "“Page is relevant to the query” ≠ “site automatically on page one.” Relevance is the base; ranks also depend on competition and accumulated signals.",
        },
      ],
    },
    {
      title: "Formal and substantive relevance",
      level: 2,
      paras: [
        "Formal — automatic scoring from available signals. Substantive — how good the answer really is for a person; assessors and quality-evaluation learning sit in that loop.",
        "Hence the practice: a page can “score” keywords formally and still lose to a document that answers the job better and keeps the user.",
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "Manual: open the SERP for the target query and compare your URL type to winners (card, category, article, showcase). Tools like Topvisor/Megaindex and peers give ranks and audit slices — use as diagnosis, not the only “relevance score.”",
        "Yandex and Google can diverge: different algorithms and weights. Watch the system where most traffic goes.",
      ],
      lists: [
        {
          intro: "Quick manual checklist:",
          items: [
            "title/H1 match the query job",
            "first screen makes clear what the page is",
            "main question answered without filler",
            "no diversion into another topic",
            "mobile UX doesn’t block reading/ordering",
          ],
        },
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "What to do on the site",
      level: 2,
      paras: [
        "Tech: indexing, speed, broken links, correct robots — so relevant copy can enter search at all. Content: length and structure for the cluster job, readability, a snippet that honestly promises the content.",
        "Links and behavior help when the page is already useful. Growing links to an empty or over-optimized URL won’t paint relevance. Locality sharpens demand accuracy — especially for local business.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "cluster and intent",
            "page type like a strong SERP winner",
            "copy and blocks for the job",
            "tech and snippet",
            "internal linking",
            "external mentions — on purpose",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "“Korolyov” algorithm",
          href: "/en/blog/algoritm-korolyov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Preparing a relevant page usually takes weeks. Competitive-core page-one share is planned for 2–6 months — not “page one after one title tweak.”",
        },
      ],
    },
  ],
  related: [
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "algoritm-korolyov",
    "tehnicheskiy-seo-audit",
    "vnutrennyaya-perelinkovka",
  ],
};

/** ES overlay for relevantnost-sayta — same structure as RU JSON / EN. */
export const relevantnostSaytaEs: BlogPost = {
  slug: "relevantnost-sayta",
  title:
    "Relevancia de un sitio en palabras claras: qué es y cómo reforzarla",
  date: "2017-05-10",
  category: "SEO",
  cover: "/images/blog/relevantnost-sayta/cover-es.webp",
  excerpt:
    "Qué significa la relevancia de una página a una consulta, en qué se diferencia el match formal de keywords de una respuesta útil, y cómo revisar y mejorar el encaje sin el culto a la densidad del 4–5%.",
  lead: [
    "La relevancia es cuánto encaja una página con lo que la persona realmente quiere de una consulta. Antes se reducía a densidad de keywords; hoy importan más el sentido, la completitud de la respuesta, el comportamiento y la adecuación comercial.",
    "Abajo: una definición clara, tipos de relevancia, cómo revisar el encaje y qué arreglar en el sitio — sin una fórmula mágica de «4–5% de keywords» ni meta Keywords obsoletas.",
  ],
  faq: [
    {
      q: "¿Qué es la relevancia de un sitio?",
      a: "Cuánto una página (y el sitio en conjunto) responde a la consulta del usuario: por sentido, completitud y usabilidad — no solo por match de palabras.",
    },
    {
      q: "¿Cuál es la diferencia entre relevancia formal y sustantiva?",
      a: "Formal — lo que el algoritmo puntúa a partir de señales (texto, enlaces, comportamiento, etc.). Sustantiva — si de verdad es una buena respuesta, incluido el input de assessors.",
    },
    {
      q: "¿Hace falta densidad de keywords del 4–5%?",
      a: "No como norma universal. Keywords y sinónimos deben sentirse naturales; el overspam perjudica. Guíate por intención y legibilidad.",
    },
    {
      q: "¿Ayuda el tag meta Keywords?",
      a: "Para Yandex y Google como factor de ranking — no. No gastes tiempo en ello.",
    },
    {
      q: "¿Cómo reviso la relevancia?",
      a: "A mano: site:/inurl: y compara el tipo de página con resultados fuertes de la SERP; herramientas de ranks/visibilidad como corte extra. Un «score de relevancia» de terceros no es un veredicto.",
    },
    {
      q: "¿Relevancia significa primera página?",
      a: "No. La relevancia es una condición. Competencia, enlaces, técnica, marca e historia afectan a los ranks. Preparación de la página — semanas; la cuota de primera página del núcleo se planifica a 2–6 meses.",
    },
    {
      q: "¿Qué importa más: copy o comportamiento?",
      a: "Ambos. El copy fija la respuesta; el comportamiento muestra si satisfizo. Copy vacío con engagement falseado — riesgo de filtro.",
    },
    {
      q: "¿Por dónde empezar las mejoras?",
      a: "Casa la intención del cluster con el tipo de página de la SERP, cumple el trabajo del usuario, quita overspam, arregla técnica y el snippet.",
    },
  ],
  sections: [
    {
      title: "En palabras claras",
      level: 2,
      paras: [
        "Una persona escribe una consulta. La búsqueda busca páginas con más probabilidad de resolver el trabajo. Una página relevante es donde la respuesta está completa, clara y encaja con la intención (comprar, aprender, comparar, encontrar una dirección).",
        "En el SEO temprano a menudo bastaba «meter la keyword». Los algoritmos ahora se apoyan más en sentido, estructura, satisfacción y señales de calidad. El exact match sigue ayudando en title y headings — no como único criterio.",
      ],
      links: [
        {
          label: "Intención del usuario",
          href: "/es/blog/user-intent/",
        },
      ],
    },
    {
      title: "Cómo los sistemas «puntúan» el encaje",
      level: 2,
      paras: [
        "En simple: las señales de texto y enlaces se combinan con calidad y comportamiento. Las fórmulas exactas están cerradas; en la práctica hace falta un foco claro de página, cobertura del tema, enlaces internos y externos, y sin spam.",
        "Los checklists viejos con «densidad obligatoria del 4–5%» y Keywords son museo. Pregunta: ¿la página responde al trabajo tan bien o mejor que los documentos cerca del inicio de la SERP de hoy para ese cluster?",
      ],
      lists: [
        {
          intro: "Qué suele reforzar la relevancia:",
          items: [
            "keyword/sentido en title y H1 sin overspam",
            "sinónimos y preguntas relacionadas en el cuerpo",
            "estructura (subtítulos, listas, FAQ)",
            "enlazado interno del tema",
            "expectativas comerciales cubiertas (precio, contactos, entrega — si la intención es comercial)",
          ],
        },
      ],
      notes: [
        {
          title: "No confundas",
          kind: "tip",
          text: "«La página es relevante a la consulta» ≠ «el sitio entra solo en primera página». La relevancia es la base; los ranks también dependen de la competencia y de señales acumuladas.",
        },
      ],
    },
    {
      title: "Relevancia formal y sustantiva",
      level: 2,
      paras: [
        "Formal — scoring automático a partir de señales disponibles. Sustantiva — cuán buena es de verdad la respuesta para una persona; assessors y el aprendizaje de evaluación de calidad viven en ese loop.",
        "De ahí la práctica: una página puede «puntuar» keywords formalmente y aun así perder frente a un documento que responde mejor al trabajo y retiene al usuario.",
      ],
    },
    {
      title: "Cómo revisar",
      level: 2,
      paras: [
        "Manual: abre la SERP de la consulta objetivo y compara tu tipo de URL con los ganadores (ficha, categoría, artículo, escaparate). Herramientas como Topvisor/Megaindex y pares dan ranks y cortes de auditoría — úsalas como diagnóstico, no como el único «score de relevancia».",
        "Yandex y Google pueden divergir: algoritmos y pesos distintos. Mira el sistema por donde va la mayor parte del tráfico.",
      ],
      lists: [
        {
          intro: "Checklist manual rápido:",
          items: [
            "title/H1 encajan con el trabajo de la consulta",
            "la primera pantalla deja claro de qué va la página",
            "la pregunta principal se responde sin relleno",
            "sin desvío a otro tema",
            "el UX móvil no bloquea la lectura/pedido",
          ],
        },
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Qué hacer en el sitio",
      level: 2,
      paras: [
        "Técnica: indexación, velocidad, enlaces rotos, robots correctos — para que el copy relevante pueda entrar en la búsqueda. Contenido: longitud y estructura para el trabajo del cluster, legibilidad, un snippet que prometa el contenido con honestidad.",
        "Enlaces y comportamiento ayudan cuando la página ya es útil. Crecer enlaces hacia una URL vacía o sobre-optimizada no pinta relevancia. La localidad afina la precisión de la demanda — sobre todo para negocio local.",
      ],
      lists: [
        {
          intro: "Orden de trabajo:",
          items: [
            "cluster e intención",
            "tipo de página como un ganador fuerte de la SERP",
            "copy y bloques para el trabajo",
            "técnica y snippet",
            "enlazado interno",
            "menciones externas — a propósito",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
        {
          label: "Algoritmo «Korolyov»",
          href: "/es/blog/algoritm-korolyov/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Preparar una página relevante suele llevar semanas. La cuota de primera página del núcleo competitivo se planifica a 2–6 meses — no «primera página tras un retoque de title».",
        },
      ],
    },
  ],
  related: [
    "user-intent",
    "seo-kopirayting",
    "semanticheskoe-yadro",
    "algoritm-korolyov",
    "tehnicheskiy-seo-audit",
    "vnutrennyaya-perelinkovka",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordstat — same structure as RU JSON. */
export const wordstatEn: BlogPost = {
  slug: "wordstat",
  title: "Yandex Wordstat: what it is and how to use it",
  date: "2018-04-06",
  category: "SEO",
  cover: "/images/blog/wordstat/cover-en.webp",
  excerpt:
    "Wordstat is Yandex query-stats: why it matters for keyword research, how to read volume, operators, regions, and seasonality — without treating a big number as a ranking promise.",
  lead: [
    "Yandex Wordstat shows how often people search for phrasings in Yandex and which related queries appear nearby. For SEO and paid search in Russia it is the baseline demand map: keyword set, seasonality, regions.",
    "Below: what the tool is for, how to read the output, why operators matter, and how broad volume differs from exact. The UI and tab labels change — follow the live account; do not paste old screenshot figures into today’s plan as fact.",
  ],
  faq: [
    {
      q: "Does Wordstat show real customers?",
      a: "No. It estimates search interest, not leads or sales. High volume is not easy rankings and not a conversion guarantee.",
    },
    {
      q: "Do you need a Yandex account?",
      a: "Yes. The service is for signed-in users. Without login you cannot use it fully.",
    },
    {
      q: "How is this different from the high / mid / low frequency article?",
      a: "That piece covers volume types and how to read numbers. This one is Wordstat itself: UI, operators, regions, history. The materials sit next to each other.",
    },
    {
      q: "Can Wordstat replace a full keyword set?",
      a: "No. Wordstat gives volumes and phrase ideas. A keyword set is clusters, intent, and landing pages. See the semantics guide.",
    },
    {
      q: "Is a number without operators exact phrase volume?",
      a: "Usually no. The default view rolls up tails and word forms. For prioritization, use refined or exact frequency with operators.",
    },
    {
      q: "Does Wordstat replace Google Keyword Planner?",
      a: "For Yandex in Russia it is the main loop. For Google use Planner, Trends, or Search Console separately.",
    },
  ],
  sections: [
    {
      title: "Why Wordstat exists",
      level: 2,
      paras: [
        "The service estimates interest in topics from Yandex search queries: how often phrasings appeared in a period under your operators and region. That supports keyword research, niche sizing, and seasonal content or ad planning.",
        "The right-hand “similar” column and left-hand tails help expand ideas. A list is not a finished keyword set: cut junk, informational noise, and the wrong intent.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "size demand on niche markers",
            "collect word forms and tails for clusters",
            "compare regions and devices (if the UI offers them)",
            "check seasonality in query history",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "How to start",
      level: 2,
      paras: [
        "Sign into Yandex and open Wordstat. Enter a marker — product, service, or customer problem. By default you get a broad picture of words plus nearby similar phrasings.",
        "For a local business, set the region first: nationwide volume for “flower delivery” in one city barely helps. For mobile audiences, check the device split if it exists in the current UI — filter names may have changed since 2018.",
      ],
      lists: [
        {
          intro: "Mini workflow:",
          items: [
            "set region and thinking horizon (month / season)",
            "enter a marker without filler words",
            "pull broad and refined frequency",
            "export or copy tails into a sheet",
            "filter junk and group by intent",
          ],
        },
      ],
      notes: [
        {
          title: "Demand is not rankings",
          kind: "tip",
          text: "A big Wordstat number does not mean page-one visibility in a month. Keyword and site prep take their own weeks; gains across a commercial set usually need months of steady work after promotion starts — often in the 2–6 month range.",
        },
      ],
    },
    {
      title: "How to read the results",
      level: 2,
      paras: [
        "The left side usually lists phrases that contain your input (and expansions). The right side shows related searches on the topic. The number next to a row estimates frequency for the period — often a month — under your conditions.",
        "Example: the marker “buy a phone” surfaces tails like “cheap,” a city, or a model; the right may show synonyms (“smartphone,” “mobile”). Do not paste old screenshot thousands into a brief as current volume — demand drifts.",
      ],
      tables: [
        {
          caption: "What to watch in the output",
          headers: ["Element", "Why"],
          rows: [
            ["Row frequency", "Demand signal under your operators"],
            ["Left tails", "Cluster and landing ideas"],
            ["Similar on the right", "Synonyms and adjacent themes"],
            ["Region", "Local business vs nationwide"],
            ["History", "Seasonality and trends"],
          ],
        },
      ],
    },
    {
      title: "Operators: why they matter",
      level: 2,
      paras: [
        "Without operators Wordstat often sums a wide match group — your phrase inside longer queries. For keyword sets and bids you need refinements: quotes, exclamation marks, plus/minus, and other operators from current Yandex Help.",
        "A classic beginner mistake is treating the broad number as exact entries. Refined frequency is usually much lower and fairer for prioritization.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "first pull a broad demand picture",
            "then refine key markers with operators",
            "cross-check with the frequency methodology article",
            "do not plan budget on one pretty number alone",
          ],
        },
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Seasonality and regions",
      level: 2,
      paras: [
        "Query history (the monthly chart) separates stable demand from seasonal spikes — Christmas trees in December, air conditioners in summer. For content plans and media buys that beats a one-off “last month” snapshot.",
        "Regional popularity shows where a topic runs hotter than average. Above or below baseline is a signal to lean in — or not expect miracles in a weak region without offline factors.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Wordstat is a demand tool in the Yandex ecosystem, not a ranking shortcut. Collect markers, refine frequency, check season and region, then build the keyword set and landing pages.",
        "Related topics — a full semantic set and frequency types — live in separate articles. A shorter WordPress-era Wordstat overview may later redirect here.",
      ],
    },
  ],
  closing: [
    "Open Wordstat under your working region, pull markers with operators, and export tails into a sheet — then clustering and landings, not a hunt for the biggest raw number.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "seo-s-nulya",
    "nisha-sayta",
    "klyuchi-google-ads",
  ],
};

/** ES overlay for wordstat — same structure as RU JSON / EN. */
export const wordstatEs: BlogPost = {
  slug: "wordstat",
  title: "Yandex Wordstat: qué es y cómo usarlo",
  date: "2018-04-06",
  category: "SEO",
  cover: "/images/blog/wordstat/cover-es.webp",
  excerpt:
    "Wordstat es la estadística de consultas de Yandex: por qué importa para la investigación de keywords, cómo leer el volumen, operadores, regiones y estacionalidad — sin tratar un número grande como promesa de ranking.",
  lead: [
    "Yandex Wordstat muestra con qué frecuencia la gente busca frases en Yandex y qué consultas relacionadas aparecen cerca. Para SEO y paid search en Rusia es el mapa base de demanda: set de keywords, estacionalidad, regiones.",
    "Abajo: para qué sirve la herramienta, cómo leer la salida, por qué importan los operadores y en qué se diferencia el volumen amplio del exacto. La UI y las etiquetas de pestañas cambian — sigue la cuenta en vivo; no pegues cifras de screenshots viejos en el plan de hoy como hecho.",
  ],
  faq: [
    {
      q: "¿Wordstat muestra clientes reales?",
      a: "No. Estima interés de búsqueda, no leads ni ventas. Un volumen alto no es ranking fácil ni garantía de conversión.",
    },
    {
      q: "¿Hace falta una cuenta de Yandex?",
      a: "Sí. El servicio es para usuarios con sesión. Sin login no lo usas del todo.",
    },
    {
      q: "¿En qué se diferencia del artículo de frecuencia alta / media / baja?",
      a: "Esa pieza cubre tipos de volumen y cómo leer números. Esta es Wordstat en sí: UI, operadores, regiones, historial. Los materiales se complementan.",
    },
    {
      q: "¿Puede Wordstat sustituir un set completo de keywords?",
      a: "No. Wordstat da volúmenes e ideas de frases. Un set de keywords son clusters, intención y landings. Ver la guía de semántica.",
    },
    {
      q: "¿Un número sin operadores es el volumen de frase exacta?",
      a: "Por lo general no. La vista por defecto agrupa colas y formas de palabra. Para priorizar, usa frecuencia refinada o exacta con operadores.",
    },
    {
      q: "¿Wordstat sustituye a Google Keyword Planner?",
      a: "Para Yandex en Rusia es el loop principal. Para Google usa Planner, Trends o Search Console por separado.",
    },
  ],
  sections: [
    {
      title: "Para qué existe Wordstat",
      level: 2,
      paras: [
        "El servicio estima el interés en temas a partir de consultas de búsqueda de Yandex: con qué frecuencia aparecieron frases en un periodo bajo tus operadores y región. Eso apoya la investigación de keywords, el tamaño del nicho y la planificación estacional de contenido o anuncios.",
        "La columna de «similares» a la derecha y las colas a la izquierda ayudan a expandir ideas. Una lista no es un set de keywords terminado: corta basura, ruido informativo y la intención equivocada.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "dimensionar demanda en marcadores del nicho",
            "recoger formas de palabra y colas para clusters",
            "comparar regiones y dispositivos (si la UI los ofrece)",
            "revisar estacionalidad en el historial de consultas",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Cómo empezar",
      level: 2,
      paras: [
        "Entra en Yandex y abre Wordstat. Introduce un marcador — producto, servicio o problema del cliente. Por defecto obtienes un panorama amplio de palabras más frases similares cercanas.",
        "Para un negocio local, fija primero la región: el volumen nacional de «entrega de flores» en una sola ciudad apenas ayuda. Para audiencias móviles, revisa el split por dispositivo si existe en la UI actual — los nombres de filtros pueden haber cambiado desde 2018.",
      ],
      lists: [
        {
          intro: "Mini workflow:",
          items: [
            "fijar región y horizonte de pensamiento (mes / temporada)",
            "entrar un marcador sin palabras de relleno",
            "sacar frecuencia amplia y refinada",
            "exportar o copiar colas a una hoja",
            "filtrar basura y agrupar por intención",
          ],
        },
      ],
      notes: [
        {
          title: "La demanda no es ranking",
          kind: "tip",
          text: "Un número grande de Wordstat no significa visibilidad en primera página en un mes. La preparación de keywords y del sitio lleva sus propias semanas; las ganancias en un set comercial suelen necesitar meses de trabajo constante tras el arranque de la promoción — a menudo en el rango de 2–6 meses.",
        },
      ],
    },
    {
      title: "Cómo leer los resultados",
      level: 2,
      paras: [
        "La izquierda suele listar frases que contienen tu input (y expansiones). La derecha muestra búsquedas relacionadas del tema. El número junto a una fila estima la frecuencia del periodo — a menudo un mes — bajo tus condiciones.",
        "Ejemplo: el marcador «comprar un teléfono» saca colas como «barato», una ciudad o un modelo; a la derecha pueden salir sinónimos («smartphone», «móvil»). No pegues miles de un screenshot viejo en un brief como volumen actual — la demanda se mueve.",
      ],
      tables: [
        {
          caption: "Qué mirar en la salida",
          headers: ["Elemento", "Por qué"],
          rows: [
            ["Frecuencia de la fila", "Señal de demanda bajo tus operadores"],
            ["Colas a la izquierda", "Ideas de cluster y landing"],
            ["Similares a la derecha", "Sinónimos y temas adyacentes"],
            ["Región", "Negocio local vs nacional"],
            ["Historial", "Estacionalidad y tendencias"],
          ],
        },
      ],
    },
    {
      title: "Operadores: por qué importan",
      level: 2,
      paras: [
        "Sin operadores Wordstat a menudo suma un grupo de coincidencia amplia — tu frase dentro de consultas más largas. Para sets de keywords y pujas necesitas refinamientos: comillas, signos de exclamación, plus/minus y otros operadores de la Help actual de Yandex.",
        "Un error clásico de principiante es tratar el número amplio como entradas exactas. La frecuencia refinada suele ser mucho más baja y más justa para priorizar.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "primero sacar un panorama amplio de demanda",
            "luego refinar marcadores clave con operadores",
            "cruzar con el artículo de metodología de frecuencia",
            "no planificar presupuesto solo con un número bonito",
          ],
        },
      ],
      links: [
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Estacionalidad y regiones",
      level: 2,
      paras: [
        "El historial de consultas (el gráfico mensual) separa demanda estable de picos estacionales — árboles de Navidad en diciembre, aires acondicionados en verano. Para planes de contenido y compras de media eso gana a un snapshot suelto de «el mes pasado».",
        "La popularidad regional muestra dónde un tema corre más caliente que la media. Por encima o por debajo de la línea base es una señal para inclinarse — o para no esperar milagros en una región débil sin factores offline.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Wordstat es una herramienta de demanda en el ecosistema Yandex, no un atajo de ranking. Recoge marcadores, refina frecuencia, revisa temporada y región, y luego construye el set de keywords y las landings.",
        "Temas relacionados — un set semántico completo y tipos de frecuencia — viven en artículos aparte. Un overview más corto de la era WordPress puede redirigir aquí más adelante.",
      ],
    },
  ],
  closing: [
    "Abre Wordstat en tu región de trabajo, saca marcadores con operadores y exporta las colas a una hoja — luego clustering y landings, no una caza del número bruto más grande.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "seo-s-nulya",
    "nisha-sayta",
    "klyuchi-google-ads",
  ],
};

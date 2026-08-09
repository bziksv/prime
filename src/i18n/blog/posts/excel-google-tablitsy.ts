import type { BlogPost } from "../../../data/blog";

/** EN overlay for excel-google-tablitsy — same structure as RU JSON. */
export const excelGoogleTablitsyEn: BlogPost = {
  slug: "excel-google-tablitsy",
  title: "Excel and Google Sheets for SEO: keyword cleanup and formulas",
  date: "2019-05-24",
  category: "SEO",
  cover: "/images/blog/excel-google-tablitsy/cover-en.webp",
  excerpt:
    "How to process keywords in Excel and Google Sheets: strip links and plus signs, fix spaces, remove duplicates, build negatives, sort, and use useful formulas — without Key Collector.",
  lead: [
    "Building a keyword set is also spreadsheet work: Wordstat exports, competitor lists, frequencies, cluster tags. Excel and Google Sheets cover about 80% of daily cleanup if you know a few moves.",
    "Below: the operations you’ll use most often on the keyword set — from “remove hyperlinks” to finding duplicates and negatives. Formulas use Excel’s Russian locale where it matters; in Google Sheets the function names are usually English (TRIM, UNIQUE, IF).",
  ],
  faq: [
    {
      q: "Should I use Excel or Google Sheets?",
      a: "For collaboration and sharing, Sheets is easier. For heavy files and complex pivots, Excel often wins. The operation logic is the same.",
    },
    {
      q: "Do spreadsheets replace Key Collector?",
      a: "No. Key Collector and similar tools speed collection and frequency pulls. Spreadsheets are for cleanup, merges, filters, and reports on data you’ve already exported.",
    },
    {
      q: "Why are there links in cells after Wordstat?",
      a: "Browser copy-paste pulls hyperlinks. Remove them, or paste values only / use Wordstat Assistant.",
    },
    {
      q: "How do I remove duplicate queries fast?",
      a: "In Sheets, use UNIQUE. In Excel, use Remove Duplicates or conditional formatting plus a filter. Normalize case and spaces first.",
    },
    {
      q: "What does TRIM / СЖПРОБЕЛЫ do?",
      a: "It trims edge spaces and collapses repeats inside the string. In Sheets, that’s TRIM.",
    },
    {
      q: "Must I memorize every formula?",
      a: "No. Keep a cheat sheet: TRIM, FIND/REPLACE, IF, COUNTIF, VLOOKUP/XLOOKUP, UNIQUE.",
    },
    {
      q: "Is color fill for clusters OK?",
      a: "Yes as a working mark. For reports, a separate “cluster” column is better — easier to filter and pivot.",
    },
    {
      q: "Does this speed up page-one rankings?",
      a: "Spreadsheets save time preparing the keyword set. Cluster ranks build after on-site work over months (often 2–6 months) — not from a cell formula.",
    },
  ],
  sections: [
    {
      title: "Why an SEO needs spreadsheets",
      level: 2,
      paras: [
        "The keyword set, negatives, URL map, ranks, and writer briefs all live well in one filtered file. A sheet doesn’t replace a crawler or webmaster tools, but it kills copy-paste chaos.",
        "Agree on columns: query, frequency, cluster, target URL, status, comment. That makes it easier to join keywords with landings and an effectiveness report.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "cleaning a Wordstat export",
            "dedupe and normalization",
            "negatives",
            "sort by frequency",
            "merging lists and tagging clusters",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Basic cleanup: links, characters, spaces",
      level: 2,
      paras: [
        "After a Wordstat copy-paste, remove hyperlinks: right-click the range → Remove hyperlinks (in Sheets, unlink / paste without formatting). Otherwise filters and formulas behave oddly.",
        "Special characters like “+” from search operators — remove via Find and Replace (Ctrl/Cmd+H): find `+`, replace with empty. Extra spaces — `=TRIM(A2)` (Excel RU locale: `=СЖПРОБЕЛЫ(A2)`), then paste values over the formulas.",
      ],
      lists: [
        {
          intro: "Cleanup order:",
          items: [
            "paste without links",
            "replace junk characters",
            "TRIM / СЖПРОБЕЛЫ",
            "lowercase when needed",
            "only then run duplicates and negatives",
          ],
        },
      ],
    },
    {
      title: "Sorting, duplicates, and lookalike phrases",
      level: 2,
      paras: [
        "Two columns “query | frequency”: select both and sort by frequency or alphabetically by query. It’s easier to cut the long tail or find high-frequency candidates for a cluster.",
        "Duplicates: conditional formatting for duplicate values, or Remove Duplicates. In Google Sheets, `=UNIQUE(A2:A)` is handy. Normalize the string before dedupe — otherwise “Buy windows” and “buy  windows” stay different.",
      ],
      lists: [
        {
          intro: "List quality check:",
          items: [
            "no blank rows inside the range",
            "frequency as a number, not text",
            "duplicates removed after TRIM",
            "a separate column for the original phrasing if you need history",
          ],
        },
      ],
    },
    {
      title: "Negatives and filtering",
      level: 2,
      paras: [
        "Keep a “negatives” sheet and tag the keyword set: `=IF(COUNTIF(negatives!A:A,\"*\"&A2&\"*\"),\"minus\",\"ok\")` — a simplified approach; in practice substring search or a script is common. In Sheets, FILTER and REGEXMATCH help.",
        "Don’t negative brand and important modifiers blindly. Cross-check the audience anti-persona: another city, “free”, a rival brand — typical candidates.",
      ],
      lists: [
        {
          intro: "Negatives workflow:",
          items: [
            "a separate negatives dictionary",
            "tag first, don’t silently delete",
            "review disputed phrases",
            "export a clean list into clustering",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Color, clusters, and extra formulas",
      level: 2,
      paras: [
        "Color fill helps visually, but at scale a “cluster” / “intent” column is better. Excel can sort by color; in Sheets a filter on a label column is more reliable.",
        "Useful formulas: IF, CONCAT/&, VLOOKUP/XLOOKUP to pull URLs, date diffs/TODAY for task deadlines, COUNTIF to check cluster size. Don’t complicate the file until it won’t open — prefer several sheets.",
      ],
      lists: [
        {
          intro: "Cheat sheet:",
          items: [
            "TRIM — spaces",
            "UNIQUE / remove duplicates",
            "FIND+REPLACE — character cleanup",
            "IF / FILTER — negatives and slices",
            "XLOOKUP — query→URL join",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "A work rhythm without a formula cult",
      level: 2,
      paras: [
        "Make an agency or team file template and copy it per project. Document five to seven mandatory cleanup steps — a beginner shouldn’t reinvent the process every time.",
        "Spreadsheets speed keyword prep. Next come landings, tech, and content: ranking for priority phrases is planned 2–6 months after work starts — not “after UNIQUE.”",
      ],
      lists: [
        {
          intro: "End-of-session outcome:",
          items: [
            "a clean list without links and duplicates",
            "negatives agreed",
            "clusters and URLs filled",
            "file shared with the team and permissions set",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Keyword cleanup in spreadsheets takes hours or days. That’s a prep stage, not a page-one date.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "effektivnost-seo",
    "tselevaya-auditoriya",
    "programmy-seo",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for excel-google-tablitsy — same structure as RU JSON / EN. */
export const excelGoogleTablitsyEs: BlogPost = {
  slug: "excel-google-tablitsy",
  title: "Excel y Google Sheets para SEO: limpieza de keywords y fórmulas",
  date: "2019-05-24",
  category: "SEO",
  cover: "/images/blog/excel-google-tablitsy/cover.webp",
  excerpt:
    "Cómo procesar keywords en Excel y Google Sheets: quitar enlaces y signos más, arreglar espacios, eliminar duplicados, armar negativas, ordenar y usar fórmulas útiles — sin Key Collector.",
  lead: [
    "Armar el set de keywords también es trabajo de hoja: exports de Wordstat, listas de competidores, frecuencias, tags de cluster. Excel y Google Sheets cubren cerca del 80% de la limpieza diaria si sabes unos cuantos movimientos.",
    "Abajo: las operaciones que más usarás sobre el set — de «quitar hipervínculos» a encontrar duplicados y negativas. Las fórmulas usan el locale ruso de Excel donde importa; en Google Sheets los nombres de función suelen ser en inglés (TRIM, UNIQUE, IF).",
  ],
  faq: [
    {
      q: "¿Debo usar Excel o Google Sheets?",
      a: "Para colaborar y compartir, Sheets es más fácil. Para archivos pesados y pivots complejos, Excel suele ganar. La lógica de las operaciones es la misma.",
    },
    {
      q: "¿Las hojas sustituyen a Key Collector?",
      a: "No. Key Collector y herramientas similares aceleran la recolección y las frecuencias. Las hojas son para limpieza, merges, filtros e informes sobre datos que ya exportaste.",
    },
    {
      q: "¿Por qué hay enlaces en las celdas tras Wordstat?",
      a: "El copy-paste del navegador arrastra hipervínculos. Quítalos, o pega solo valores / usa Wordstat Assistant.",
    },
    {
      q: "¿Cómo quito consultas duplicadas rápido?",
      a: "En Sheets, usa UNIQUE. En Excel, Quitar duplicados o formato condicional más filtro. Normaliza mayúsculas/minúsculas y espacios primero.",
    },
    {
      q: "¿Qué hace TRIM / СЖПРОБЕЛЫ?",
      a: "Recorta espacios de los bordes y colapsa repeticiones dentro de la cadena. En Sheets, eso es TRIM.",
    },
    {
      q: "¿Debo memorizar cada fórmula?",
      a: "No. Guarda una chuleta: TRIM, FIND/REPLACE, IF, COUNTIF, VLOOKUP/XLOOKUP, UNIQUE.",
    },
    {
      q: "¿Vale rellenar con color los clusters?",
      a: "Sí como marca de trabajo. Para informes, mejor una columna «cluster» aparte — más fácil filtrar y pivotar.",
    },
    {
      q: "¿Esto acelera el ranking en primera página?",
      a: "Las hojas ahorran tiempo preparando el set de keywords. Las posiciones del cluster se construyen tras el trabajo on-site en meses (a menudo 2–6 meses) — no desde una fórmula de celda.",
    },
  ],
  sections: [
    {
      title: "Por qué un SEO necesita hojas de cálculo",
      level: 2,
      paras: [
        "El set de keywords, negativas, mapa de URLs, ranks y briefs de redacción viven bien en un archivo filtrable. La hoja no sustituye un crawler ni las herramientas de webmaster, pero mata el caos del copy-paste.",
        "Acuerda columnas: consulta, frecuencia, cluster, URL objetivo, estado, comentario. Así es más fácil unir keywords con landings y un informe de eficacia.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "limpiar un export de Wordstat",
            "dedupe y normalización",
            "negativas",
            "ordenar por frecuencia",
            "fusionar listas y etiquetar clusters",
          ],
        },
      ],
      links: [
        {
          label: "Set de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Frecuencia de consultas",
          href: "/es/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Limpieza básica: enlaces, caracteres, espacios",
      level: 2,
      paras: [
        "Tras un copy-paste de Wordstat, quita hipervínculos: clic derecho en el rango → Quitar hipervínculos (en Sheets, unlink / pegar sin formato). Si no, filtros y fórmulas se comportan raro.",
        "Caracteres especiales como «+» de operadores de búsqueda — quítalos con Buscar y reemplazar (Ctrl/Cmd+H): busca `+`, reemplaza por vacío. Espacios de más — `=TRIM(A2)` (locale RU de Excel: `=СЖПРОБЕЛЫ(A2)`), luego pega valores encima de las fórmulas.",
      ],
      lists: [
        {
          intro: "Orden de limpieza:",
          items: [
            "pegar sin enlaces",
            "reemplazar caracteres basura",
            "TRIM / СЖПРОБЕЛЫ",
            "minúsculas cuando haga falta",
            "solo entonces corre duplicados y negativas",
          ],
        },
      ],
    },
    {
      title: "Ordenar, duplicados y frases parecidas",
      level: 2,
      paras: [
        "Dos columnas «consulta | frecuencia»: selecciona ambas y ordena por frecuencia o alfabéticamente por consulta. Es más fácil cortar la long tail o encontrar candidatos de alta frecuencia para un cluster.",
        "Duplicados: formato condicional para valores duplicados, o Quitar duplicados. En Google Sheets, `=UNIQUE(A2:A)` es práctico. Normaliza la cadena antes del dedupe — si no, «Buy windows» y «buy  windows» siguen distintos.",
      ],
      lists: [
        {
          intro: "Chequeo de calidad de la lista:",
          items: [
            "sin filas en blanco dentro del rango",
            "frecuencia como número, no texto",
            "duplicados quitados tras TRIM",
            "una columna aparte para la redacción original si necesitas historial",
          ],
        },
      ],
    },
    {
      title: "Negativas y filtrado",
      level: 2,
      paras: [
        "Mantén una hoja «negativas» y etiqueta el set: `=IF(COUNTIF(negatives!A:A,\"*\"&A2&\"*\"),\"minus\",\"ok\")` — enfoque simplificado; en la práctica es común búsqueda por subcadena o un script. En Sheets ayudan FILTER y REGEXMATCH.",
        "No pongas en negativa marca y modificadores importantes a ciegas. Cruza con la anti-persona de audiencia: otra ciudad, «gratis», marca rival — candidatos típicos.",
      ],
      lists: [
        {
          intro: "Flujo de negativas:",
          items: [
            "un diccionario de negativas aparte",
            "etiqueta primero, no borres en silencio",
            "revisa frases dudosas",
            "exporta una lista limpia al clustering",
          ],
        },
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Color, clusters y fórmulas extra",
      level: 2,
      paras: [
        "El relleno de color ayuda visualmente, pero a escala es mejor una columna «cluster» / «intent». Excel puede ordenar por color; en Sheets un filtro sobre una columna de etiqueta es más fiable.",
        "Fórmulas útiles: IF, CONCAT/&, VLOOKUP/XLOOKUP para traer URLs, diffs de fecha/TODAY para plazos de tareas, COUNTIF para chequear el tamaño del cluster. No compliques el archivo hasta que no abra — preferible varias hojas.",
      ],
      lists: [
        {
          intro: "Chuleta:",
          items: [
            "TRIM — espacios",
            "UNIQUE / quitar duplicados",
            "FIND+REPLACE — limpieza de caracteres",
            "IF / FILTER — negativas y cortes",
            "XLOOKUP — join consulta→URL",
          ],
        },
      ],
      links: [
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "Ritmo de trabajo sin culto a la fórmula",
      level: 2,
      paras: [
        "Haz una plantilla de archivo de agencia o equipo y cópiala por proyecto. Documenta cinco a siete pasos de limpieza obligatorios — un principiante no debería reinventar el proceso cada vez.",
        "Las hojas aceleran la prep de keywords. Luego vienen landings, técnica y contenido: el ranking de frases prioritarias se planifica a 2–6 meses tras empezar el trabajo — no «después de UNIQUE».",
      ],
      lists: [
        {
          intro: "Resultado al cerrar la sesión:",
          items: [
            "lista limpia sin enlaces ni duplicados",
            "negativas acordadas",
            "clusters y URLs rellenados",
            "archivo compartido con el equipo y permisos puestos",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "La limpieza de keywords en hojas toma horas o días. Es una etapa de prep, no una fecha de primera página.",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "effektivnost-seo",
    "tselevaya-auditoriya",
    "programmy-seo",
    "samostoyatelnoe-seo",
  ],
};

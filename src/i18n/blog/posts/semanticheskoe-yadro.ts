import type { BlogPost } from "../../../data/blog";

/** EN overlay for semanticheskoe-yadro — same structure as RU JSON. */
export const semanticheskoeYadroEn: BlogPost = {
  slug: "semanticheskoe-yadro",
  title: "How to build a keyword set (semantic core) the right way",
  date: "2022-03-01",
  category: "SEO",
  cover: "/images/blog/semanticheskoe-yadro/cover-en.webp",
  excerpt:
    "How to pick keywords, classify queries, and build a semantic core — step by step for SEO.",
  lead: [
    "A site’s semantic core is the list of search queries that can bring people to the resource. Those queries — keywords — shape the site’s structure.",
    "The core is the foundation of organic promotion. The right keywords grow visits, leads, and audience. Below: what belongs in the set, how it shapes copy, and how to build it without bloating a useless spreadsheet.",
  ],
  faq: [
    {
      q: "What is a semantic core?",
      a: "A set of search queries that reflect the site’s topic and structure — and by which users can arrive from search.",
    },
    {
      q: "How many keywords does a core need?",
      a: "Rough guides: service landing — dozens to a couple hundred; multi-section service site — hundreds to a couple thousand; large catalog — thousands and up. Intent coverage matters more than “collect more.”",
    },
    {
      q: "How do head terms differ from long-tail?",
      a: "High-frequency queries are shorter and more competitive; low-frequency ones are longer, more numerous, and easier for early visibility and targeted traffic.",
    },
    {
      q: "Why cluster the core?",
      a: "To group queries that are close in meaning and SERP under one landing — and avoid duplicate pages.",
    },
    {
      q: "How long does building a core take?",
      a: "Marker draft — hours; a working core for a mid-size service site — from a few days to a couple of weeks. Then the core lives with the site: you add and prune.",
    },
  ],
  sections: [
    {
      title: "What a semantic core is",
      level: 2,
      paras: [
        "A semantic core is a set of words and phrases that reflect the site’s topic and structure and describe what it does. Those words are keywords. They answer: “What will the user find on this site?”",
        "Below: how many keywords usually go into the working set, how to classify queries, and a step-by-step build.",
      ],
      lists: [
        {
          intro: "A solid core typically has these traits:",
          items: [
            "keywords reflect the site structure",
            "the site answers most key queries",
            "the resource holds the information the visitor needs",
          ],
        },
      ],
    },
    {
      title: "How many keywords you need",
      level: 2,
      paras: [
        "There’s no hard “exactly N keywords” rule: volume depends on niche, region, and how many landings you can actually maintain. The ranges below are order-of-magnitude for a start, not dogma.",
      ],
      lists: [
        {
          intro: "Typical ranges (after cleanup, not a raw Wordstat dump):",
          items: [
            "single-service landing — dozens to about 150–200 keywords",
            "service site with several sections — hundreds to 1–2 thousand",
            "online store / catalog — thousands of keywords, growing with the assortment",
          ],
        },
      ],
      notes: [
        {
          title: "What to watch instead of “collect more”",
          kind: "tip",
          text: "Covering commercial and informational intents under real URLs matters more. A bloated core without landings and copy only inflates the spreadsheet.",
        },
      ],
    },
    {
      title: "Classifying search queries",
      level: 2,
      paras: [
        "Keywords split into groups by different parameters. We’ll cover those next. If you want practice first — jump to the step-by-step guide below.",
      ],
      lists: [],
    },
    {
      title: "Frequency",
      level: 3,
      paras: [
        "Promoting on high-frequency queries is hard — competition is fierce. Beginners often start with micro and low-frequency keys: there are more of them, and the long tail makes early visibility more realistic. On commercial pages, refine the offer: guarantees, timelines, delivery, meta tags.",
        "After low-frequency work, add mid-frequency terms. They often hint at section structure. You may need site and content updates. Once LF and MF are covered with landings and copy, high-frequency queries usually lift more naturally — but that is not a guarantee of #1 “by itself.”",
      ],
      lists: [
        {
          intro:
            "Rough monthly impression thresholds (a guide, not an official search-engine scale):",
          items: [
            "micro low-frequency — under 100",
            "low-frequency — 100 to 1,000",
            "mid-frequency — 1,000 to 5,000",
            "high-frequency — from 5,000",
          ],
        },
      ],
    },
    {
      title: "Business signals",
      level: 3,
      paras: [
        "Two groups matter here. Commercial keys bring visitors who want to order, buy, or use a service — anything involving money.",
        "The second group is non-commercial queries. People want information; they don’t need to order or buy yet.",
        "The first group fits service sites and online stores. Informational resources and topical blogs need the second group.",
      ],
      lists: [
        {
          intro: "Commercial queries can look like:",
          items: [
            "order a cake in Ryazan with delivery",
            "affordable wedding hairstyle",
            "buy BMW spare parts",
          ],
        },
        {
          intro: "Non-commercial examples:",
          items: [
            "anniversary gift for husband",
            "beautiful cities in Italy",
            "meat pie recipe",
          ],
        },
      ],
    },
    {
      title: "Geolocation",
      level: 3,
      paras: [
        "A query may include the user’s location — or not. For a geo-dependent query the search engine returns results based on where the user is. Results differ by region. If someone wants to order a cake in Moscow, cakes in Tver rarely help.",
        "If the query has no place cue, results tend to look the same across cities.",
        "In site promotion, geo-dependent keys are often smarter — competition stays within the named region. Phrases without location compete with results from everywhere.",
      ],
      lists: [
        {
          intro: "Geo-dependent examples:",
          items: [
            "food delivery Astrakhan",
            "restaurant Pogrebok hours",
            "buy a scooter in Perm",
          ],
        },
        {
          intro: "Geo-independent queries:",
          items: [
            "Harry Potter watch online",
            "what is marketing",
            "how to choose a laptop",
          ],
        },
      ],
    },
    {
      title: "User needs",
      level: 3,
      paras: [
        "Depending on the content the user wants, there are four query types.",
        "If your site offers that content, you can take this group. Often people prefer Google Images, streaming services, or YouTube.",
        "Transactional. Functionally close to commercial. Used to find products or services to buy. To compete, you need a catalog with product cards — photos, descriptions, prices — plus cart, payment, and delivery options.",
        "Search engines rarely put small stores on page one for broad transactional queries. Large aggregators usually hold the first rows.",
        "If the resource has useful info for such keys, you can use them in promotion. More often they enter the core when the site is also pushed with paid search.",
      ],
      lists: [
        {
          intro: "Media. Photos, audio, or video. For example:",
          items: [
            "latest BI-2 album",
            "ocean photos",
            "Channel One watch online",
          ],
        },
        {
          intro:
            "Navigational. People look for a specific place, event, or site. For example:",
          items: ["yandex", "olympics 2022", "clinic no. 2 address"],
        },
        {
          intro: "Informational key examples:",
          items: ["great patriotic war", "borscht recipe", "who was lenin"],
        },
      ],
    },
    {
      title: "Other query types",
      level: 3,
      paras: [
        "Fuzzy — no clear goal; it’s unclear what to show. Engines ask for clarification or return topical articles. Yandex has Spectrum-style tech for fuzzy queries so the SERP can cover different needs on the same topic.",
      ],
      lists: [
        {
          intro:
            "Vital — only the brand or company name. People look for specific products or the official site. For example:",
          items: ["apteka.ru", "MVideo", "Apple"],
        },
        {
          intro: "Branded — with a brand or make name:",
          items: ["audi car", "clinic cream", "lenovo tablet"],
        },
        {
          intro: "Fuzzy query examples:",
          items: [
            "crown — photos, definition, modern monarchs, TV series",
            "coffee — types, brewing methods, history, where to buy",
          ],
        },
      ],
    },
    {
      title: "Why you need a semantic core",
      level: 2,
      paras: [
        "Working with the core later helps refine site structure, track dynamics, find why rankings are weak, and show whether you need subtopics.",
      ],
      lists: [
        {
          intro:
            "To build a semantic core you collect keywords and related terms. The more synonyms, specialist terms, abbreviations, and short forms you include, the fuller the answer to the query that brought the user. The core helps:",
          items: [
            "build a visitor-friendly site structure",
            "deliver quality content",
            "use the right meta tags",
            "shape anchors with an external-link system",
          ],
        },
      ],
    },
    {
      title: "Step-by-step: building a semantic core",
      level: 2,
      paras: [
        "Creating a semantic core is several steps: markers → expand → clean → clusters → map to URLs. Download the table template and fill it as you go.",
      ],
      lists: [],
      links: [
        {
          label:
            "Download CSV template (marker, frequency, type, cluster, URL)",
          href: "/files/blog/semanticheskoe-yadro-template.csv",
        },
      ],
    },
    {
      title: "Step 1. Gather information",
      level: 3,
      paras: [
        "Put yourself in the potential client’s place. What interests them? What’s the problem? Dive into the topic and collect everything in that direction.",
        "General info often lives on the client’s site. For a full dive, use outside sources too: competitors, the client’s structure, catalogs and price lists. Wordstat and Google Keyword Planner help collect keywords.",
        "Competitor paid-search analysis also helps — how they promote a similar product or service. Manually or via tools like SpyWords / SimilarWeb (depending on access and budget).",
      ],
      lists: [
        {
          intro:
            "Brainstorming helps. Write down all data and thoughts on the topic. The list should include:",
          items: [
            "locations: region, city, district, metro stations and streets people use to find the place",
            "every category of products you offer",
            "product names including synonyms, abbreviations, specialist terms or jargon, Cyrillic and Latin spellings",
            "vital queries",
            "misspelled product names",
            "technical product params: types, material, model, etc.",
          ],
        },
      ],
    },
    {
      title: "Step 2. Expand the keyword list",
      level: 3,
      paras: [
        "Now expand the draft query list. Build a table in a separate file and add every word and phrase from the previous step. You’ll need keyword tools: Wordstat and Google Keyword Planner.",
        "Enter each word or phrase into the tools. You’ll get refined variants and associations.",
        "You can also collect keys automatically with programs such as Key Collector.",
        "Then clean the core. Remove queries that don’t fit the site’s specifics or topic — manually or with stop-word tools.",
      ],
      lists: [
        {
          intro: "Stop words / negatives include:",
          items: [
            "competitor company names",
            "typos and misspellings (unless you promote them on purpose)",
            "place names outside your sales region",
            "keys from another topic",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake at this step",
          kind: "tip",
          text: "Leaving everything “as exported” from Wordstat. Without cleanup, clusters and copy later fill with off-target wording.",
        },
      ],
    },
    {
      title: "Step 3. Group keywords. Cluster the core.",
      level: 3,
      paras: [
        "You now have a huge sheet of every possible query for the site. Split keys into groups or blocks by topic or client needs. That’s clustering.",
        "In paid search, word form matters. One ad may use “water purification,” another “water treatment,” both leading to the same site — so the keyword can appear in the SERP title and match the query. You end up with several ad groups that still send users to one URL. In Google or Yandex Ads, keys for one product are often merged instead, simplifying structure.",
        "What about SEO? More work: each cluster should lead to a specific page. If the page doesn’t exist — create it. Otherwise queries compete or hang without a landing. On a small site clustering is often manual; on large ones tools like Rush Analytics or clustering modules elsewhere help (you set the SERP URL-overlap threshold separately).",
      ],
      lists: [],
      tables: [
        {
          caption: "Mini example: PVC windows, Voronezh (fragment)",
          headers: ["Marker / query", "Type", "Cluster", "Landing"],
          rows: [
            [
              "pvc windows voronezh",
              "commercial + geo",
              "PVC windows",
              "/okna-pvh/",
            ],
            [
              "buy pvc windows voronezh",
              "commercial + geo",
              "PVC windows",
              "/okna-pvh/",
            ],
            ["pvc windows price", "commercial", "PVC windows", "/okna-pvh/"],
            [
              "window installation voronezh",
              "commercial + geo",
              "Installation",
              "/ustanovka-okon/",
            ],
            [
              "how to choose pvc windows",
              "informational",
              "Guide",
              "/blog/kak-vybrat-okna/",
            ],
            [
              "window repair voronezh",
              "commercial + geo",
              "Repair",
              "/remont-okon/",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping the whole core onto one “home” URL or cloning near-identical pages for every word form. Cluster = one intent → one landing.",
        },
      ],
    },
    {
      title: "Step 4. Map keys to structure. Refine the core.",
      level: 3,
      paras: [
        "The previous step gave you ready keyword clusters. Several groups may still share one URL. Then refine the site structure, create extra pages, and move part of the keys there.",
        "When clustering, map queries to pages so URLs don’t duplicate each other by meaning.",
      ],
      lists: [],
    },
    {
      title: "What to do after the core",
      level: 2,
      paras: [
        "The core isn’t the finish — it’s the entry to site work. Next usually: Title and H1 per cluster, copy and trust blocks on landings, internal links between sections, tech and indexing.",
      ],
      lists: [],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Mistakes when working with keywords",
      level: 2,
      paras: [
        "These gaps grow into bigger problems: the wrong competitor set, weak rankings, irrelevant meta tags, low metrics.",
      ],
      lists: [
        {
          intro: "Beginners often make these mistakes with a semantic core:",
          items: [
            "only high-frequency and the most obvious queries",
            "no geo keywords",
            "too many different keys pointing at one URL",
            "professionalisms and jargon ignored",
            "the same queries pointing at different pages",
            "core built without the client’s specifics",
          ],
        },
      ],
    },
    {
      title: "Tools for working with a semantic core",
      level: 2,
      paras: [
        "Tools teams usually use to collect and group a core. Not a ranking — pick by task and budget. Narrow or outdated panels aren’t included.",
      ],
      lists: [],
    },
    {
      title: "Yandex Wordstat",
      level: 3,
      paras: [
        "A basic free source of frequency and wording for Russian-language search. Region, seasonality, and dynamics live here. Marker expansion usually starts here.",
      ],
      lists: [],
    },
    {
      title: "Google Keyword Planner",
      level: 3,
      paras: [
        "Google Ads keyword planner: query ideas, frequency estimates, and Google forecasts. Handy as a second angle next to Wordstat, especially if you also look at Google.",
      ],
      lists: [],
    },
    {
      title: "Key Collector",
      level: 3,
      paras: [
        "A desktop suite for parsing suggestions, collecting and cleaning a core, negatives, and soft-duplicate removal. Saves time on mid and large lists.",
      ],
      lists: [],
    },
    {
      title: "SlovoEB",
      level: 3,
      paras: [
        "A free, simplified relative of Key Collector. It can’t do everything; Wordstat access needs a Yandex account — with limits and risk of blocks under aggressive parsing.",
      ],
      lists: [],
    },
    {
      title: "Titlo",
      level: 3,
      paras: [
        "A platform with modules: query collection and clustering, list comparison, relevance, rankings, meta tags, and monitoring. Modules can be used separately or in one account.",
      ],
      lists: [],
    },
    {
      title: "Rush Analytics",
      level: 3,
      paras: [
        "Cloud clustering and related SEO tasks. Handy when the core is already large and manual grouping by SERP URL overlap takes too long.",
      ],
      lists: [],
    },
    {
      title: "Keys.so / Serpstat",
      level: 3,
      paras: [
        "Paid systems with data on keys, competitors, and SERP pages. Help expand mid- and low-frequency keywords and see who already owns the niche. Choice depends on the team’s usual stack.",
      ],
      lists: [],
    },
    {
      title: "Just Magic",
      level: 3,
      paras: [
        "A tool for semantics and LSI text surroundings (including “Aquarelle”-style scenarios). Useful when the core already exists and you need to strengthen copy for a cluster.",
      ],
      lists: [],
    },
    {
      title: "Ahrefs",
      level: 3,
      paras: [
        "Stronger on backlinks and English/global markets, but also shows competitors’ organic keys. For a purely “Yandex” core it more often complements Wordstat and local suites than replaces them.",
        "Any toolset only speeds the work. How you pick wording and avoid mixing intents on one page — that comes down to practice and common sense.",
      ],
      lists: [],
    },
  ],
};

/** ES overlay for semanticheskoe-yadro — same structure as RU JSON / EN. */
export const semanticheskoeYadroEs: BlogPost = {
  slug: "semanticheskoe-yadro",
  title: "Cómo montar un set de keywords (núcleo semántico) bien",
  date: "2022-03-01",
  category: "SEO",
  cover: "/images/blog/semanticheskoe-yadro/cover.webp",
  excerpt:
    "Cómo elegir keywords, clasificar queries y montar un núcleo semántico — paso a paso para SEO.",
  lead: [
    "El núcleo semántico de un sitio es la lista de queries de búsqueda que pueden traer gente al recurso. Esas queries — keywords — dan forma a la estructura del sitio.",
    "El núcleo es la base de la promoción orgánica. Las keywords correctas crecen visitas, leads y audiencia. Abajo: qué entra en el set, cómo moldea el copy y cómo montarlo sin hinchar una hoja inútil.",
  ],
  faq: [
    {
      q: "¿Qué es un núcleo semántico?",
      a: "Un set de queries de búsqueda que reflejan el tema y la estructura del sitio — y por las que los usuarios pueden llegar desde la búsqueda.",
    },
    {
      q: "¿Cuántas keywords necesita un núcleo?",
      a: "Guías orientativas: landing de servicio — decenas a un par de cientos; sitio de servicios con varias secciones — cientos a un par de miles; catálogo grande — miles y subiendo. Cubrir intención importa más que «recolectar más».",
    },
    {
      q: "¿En qué se diferencian head terms y long-tail?",
      a: "Las queries de alta frecuencia son más cortas y competitivas; las de baja frecuencia son más largas, más numerosas y más fáciles para visibilidad temprana y tráfico dirigido.",
    },
    {
      q: "¿Por qué clusterizar el núcleo?",
      a: "Para agrupar queries cercanas en sentido y SERP bajo una landing — y evitar páginas duplicadas.",
    },
    {
      q: "¿Cuánto tarda montar un núcleo?",
      a: "Borrador de marcadores — horas; un núcleo útil para un sitio de servicios mediano — de unos días a un par de semanas. Luego el núcleo vive con el sitio: añades y podas.",
    },
  ],
  sections: [
    {
      title: "Qué es un núcleo semántico",
      level: 2,
      paras: [
        "Un núcleo semántico es un set de palabras y frases que reflejan el tema y la estructura del sitio y describen qué hace. Esas palabras son keywords. Responden: «¿Qué encontrará el usuario en este sitio?»",
        "Abajo: cuántas keywords suelen entrar en el set de trabajo, cómo clasificar queries y un montaje paso a paso.",
      ],
      lists: [
        {
          intro: "Un núcleo sólido suele tener estos rasgos:",
          items: [
            "las keywords reflejan la estructura del sitio",
            "el sitio responde a la mayoría de queries clave",
            "el recurso tiene la información que el visitante necesita",
          ],
        },
      ],
    },
    {
      title: "Cuántas keywords necesitas",
      level: 2,
      paras: [
        "No hay regla dura de «exactamente N keywords»: el volumen depende del nicho, la región y cuántas landings puedes mantener de verdad. Los rangos de abajo son orden de magnitud para empezar, no dogma.",
      ],
      lists: [
        {
          intro: "Rangos típicos (tras limpieza, no un dump crudo de Wordstat):",
          items: [
            "landing de un solo servicio — decenas a unos 150–200 keywords",
            "sitio de servicios con varias secciones — cientos a 1–2 mil",
            "tienda online / catálogo — miles de keywords, creciendo con el surtido",
          ],
        },
      ],
      notes: [
        {
          title: "Qué mirar en lugar de «recolectar más»",
          kind: "tip",
          text: "Cubrir intenciones comerciales e informativas bajo URLs reales importa más. Un núcleo hinchado sin landings ni copy solo infla la hoja.",
        },
      ],
    },
    {
      title: "Clasificar queries de búsqueda",
      level: 2,
      paras: [
        "Las keywords se parten en grupos por distintos parámetros. Los cubrimos a continuación. Si quieres práctica primero — salta a la guía paso a paso más abajo.",
      ],
      lists: [],
    },
    {
      title: "Frecuencia",
      level: 3,
      paras: [
        "Promover en queries de alta frecuencia es duro — la competencia es feroz. Los principiantes suelen empezar con micro y baja frecuencia: hay más, y la long tail hace más realista la visibilidad temprana. En páginas comerciales, afina la oferta: garantías, plazos, entrega, meta tags.",
        "Tras el trabajo de baja frecuencia, suma términos de media. A menudo insinúan la estructura de secciones. Puede hacer falta actualizar sitio y contenido. Cuando LF y MF están cubiertos con landings y copy, las de alta frecuencia suelen subir con más naturalidad — pero eso no es garantía del nº 1 «solo».",
      ],
      lists: [
        {
          intro:
            "Umbrales orientativos de impresiones mensuales (guía, no escala oficial del buscador):",
          items: [
            "micro baja frecuencia — menos de 100",
            "baja frecuencia — 100 a 1.000",
            "media frecuencia — 1.000 a 5.000",
            "alta frecuencia — desde 5.000",
          ],
        },
      ],
    },
    {
      title: "Señales de negocio",
      level: 3,
      paras: [
        "Aquí importan dos grupos. Las keys comerciales traen visitantes que quieren pedir, comprar o usar un servicio — todo lo que implica dinero.",
        "El segundo grupo son queries no comerciales. La gente quiere información; aún no necesita pedir o comprar.",
        "El primer grupo encaja en sitios de servicios y tiendas online. Recursos informativos y blogs temáticos necesitan el segundo.",
      ],
      lists: [
        {
          intro: "Las queries comerciales pueden verse así:",
          items: [
            "pedir un pastel en Ryazan con entrega",
            "peinado de boda asequible",
            "comprar recambios BMW",
          ],
        },
        {
          intro: "Ejemplos no comerciales:",
          items: [
            "regalo de aniversario para marido",
            "ciudades bonitas de Italia",
            "receta de empanada de carne",
          ],
        },
      ],
    },
    {
      title: "Geolocalización",
      level: 3,
      paras: [
        "Una query puede incluir la ubicación del usuario — o no. En una query geo-dependiente el buscador devuelve resultados según dónde está el usuario. Los resultados cambian por región. Si alguien quiere pedir un pastel en Moscú, pasteles en Tver rara vez ayudan.",
        "Si la query no tiene pista de lugar, los resultados suelen verse iguales entre ciudades.",
        "En promoción de sitios, las keys geo-dependientes suelen ser más inteligentes — la competencia se queda en la región nombrada. Frases sin ubicación compiten con resultados de todas partes.",
      ],
      lists: [
        {
          intro: "Ejemplos geo-dependientes:",
          items: [
            "entrega de comida Astracán",
            "horario restaurante Pogrebok",
            "comprar un scooter en Perm",
          ],
        },
        {
          intro: "Queries geo-independientes:",
          items: [
            "Harry Potter ver online",
            "qué es marketing",
            "cómo elegir un portátil",
          ],
        },
      ],
    },
    {
      title: "Necesidades del usuario",
      level: 3,
      paras: [
        "Según el contenido que quiere el usuario, hay cuatro tipos de query.",
        "Si tu sitio ofrece ese contenido, puedes tomar este grupo. A menudo la gente prefiere Google Images, servicios de streaming o YouTube.",
        "Transaccionales. Funcionalmente cercanas a las comerciales. Sirven para encontrar productos o servicios para comprar. Para competir, hace falta un catálogo con fichas — fotos, descripciones, precios — más carrito, pago y opciones de entrega.",
        "Los buscadores rara vez ponen tiendas pequeñas en primera página para queries transaccionales amplias. Los grandes agregadores suelen ocupar las primeras filas.",
        "Si el recurso tiene info útil para esas keys, puedes usarlas en promoción. Más a menudo entran en el núcleo cuando el sitio también se empuja con búsqueda de pago.",
      ],
      lists: [
        {
          intro: "Media. Fotos, audio o vídeo. Por ejemplo:",
          items: [
            "último álbum de BI-2",
            "fotos del océano",
            "Canal Uno ver online",
          ],
        },
        {
          intro:
            "Navegacionales. La gente busca un lugar, evento o sitio concreto. Por ejemplo:",
          items: ["yandex", "olimpiadas 2022", "dirección clínica nº 2"],
        },
        {
          intro: "Ejemplos de keys informativas:",
          items: ["gran guerra patriótica", "receta de borsch", "quién fue lenin"],
        },
      ],
    },
    {
      title: "Otros tipos de query",
      level: 3,
      paras: [
        "Difusas — sin objetivo claro; no se sabe qué mostrar. Los motores piden aclaración o devuelven artículos temáticos. Yandex tiene tech tipo Spectrum para queries difusas, para que el SERP cubra necesidades distintas del mismo tema.",
      ],
      lists: [
        {
          intro:
            "Vitales — solo el nombre de marca o empresa. La gente busca productos concretos o el sitio oficial. Por ejemplo:",
          items: ["apteka.ru", "MVideo", "Apple"],
        },
        {
          intro: "De marca — con nombre de marca o modelo:",
          items: ["coche audi", "crema clinic", "tablet lenovo"],
        },
        {
          intro: "Ejemplos de queries difusas:",
          items: [
            "corona — fotos, definición, monarcas modernos, series",
            "café — tipos, métodos de preparación, historia, dónde comprar",
          ],
        },
      ],
    },
    {
      title: "Por qué hace falta un núcleo semántico",
      level: 2,
      paras: [
        "Trabajar con el núcleo después ayuda a afinar la estructura del sitio, seguir la dinámica, ver por qué flaquean los rankings y mostrar si hacen falta subtemas.",
      ],
      lists: [
        {
          intro:
            "Para montar un núcleo semántico recoges keywords y términos afines. Cuantos más sinónimos, términos de especialista, abreviaturas y formas cortas incluyas, más completa es la respuesta a la query que trajo al usuario. El núcleo ayuda a:",
          items: [
            "montar una estructura amigable para el visitante",
            "entregar contenido de calidad",
            "usar los meta tags adecuados",
            "dar forma a anclas con un sistema de enlaces externos",
          ],
        },
      ],
    },
    {
      title: "Paso a paso: montar un núcleo semántico",
      level: 2,
      paras: [
        "Crear un núcleo semántico son varios pasos: marcadores → expandir → limpiar → clusters → mapear a URLs. Descarga la plantilla de tabla y rellénala sobre la marcha.",
      ],
      lists: [],
      links: [
        {
          label:
            "Descargar plantilla CSV (marcador, frecuencia, tipo, cluster, URL)",
          href: "/files/blog/semanticheskoe-yadro-template.csv",
        },
      ],
    },
    {
      title: "Paso 1. Reunir información",
      level: 3,
      paras: [
        "Ponte en el lugar del cliente potencial. ¿Qué le interesa? ¿Cuál es el problema? Sumérgete en el tema y recoge todo en esa dirección.",
        "La info general suele vivir en el sitio del cliente. Para un buceo completo, usa también fuentes externas: competidores, estructura del cliente, catálogos y listas de precios. Wordstat y Google Keyword Planner ayudan a recolectar keywords.",
        "El análisis de búsqueda de pago de competidores también ayuda — cómo promueven un producto o servicio similar. A mano o vía herramientas como SpyWords / SimilarWeb (según acceso y presupuesto).",
      ],
      lists: [
        {
          intro:
            "El brainstorming ayuda. Anota todos los datos y pensamientos del tema. La lista debe incluir:",
          items: [
            "ubicaciones: región, ciudad, distrito, metros y calles que usa la gente para encontrar el lugar",
            "cada categoría de productos que ofreces",
            "nombres de producto con sinónimos, abreviaturas, jerga o términos de especialista, grafías cirílicas y latinas",
            "queries vitales",
            "nombres de producto mal escritos",
            "parámetros técnicos del producto: tipos, material, modelo, etc.",
          ],
        },
      ],
    },
    {
      title: "Paso 2. Expandir la lista de keywords",
      level: 3,
      paras: [
        "Ahora expande el borrador de queries. Monta una tabla en un archivo aparte y añade cada palabra y frase del paso anterior. Necesitarás herramientas de keywords: Wordstat y Google Keyword Planner.",
        "Introduce cada palabra o frase en las herramientas. Obtendrás variantes refinadas y asociaciones.",
        "También puedes recolectar keys automáticamente con programas como Key Collector.",
        "Luego limpia el núcleo. Quita queries que no encajan con las especificidades o el tema del sitio — a mano o con herramientas de stop-words.",
      ],
      lists: [
        {
          intro: "Stop words / negativos incluyen:",
          items: [
            "nombres de empresas competidoras",
            "typos y faltas (salvo que se promocionen a propósito)",
            "topónimos fuera de tu región de venta",
            "keys de otro tema",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual en este paso",
          kind: "tip",
          text: "Dejar todo «tal cual se exportó» de Wordstat. Sin limpieza, clusters y copy después se llenan de formulaciones fuera de objetivo.",
        },
      ],
    },
    {
      title: "Paso 3. Agrupar keywords. Clusterizar el núcleo.",
      level: 3,
      paras: [
        "Ahora tienes una hoja enorme con todas las queries posibles del sitio. Parte las keys en grupos o bloques por tema o necesidades del cliente. Eso es clustering.",
        "En búsqueda de pago, la forma de la palabra importa. Un anuncio puede usar «purificación de agua», otro «tratamiento del agua», ambos llevando al mismo sitio — así la keyword puede aparecer en el título del SERP y coincidir con la query. Acabas con varios grupos de ads que aún envían usuarios a una URL. En Google o Yandex Ads, las keys de un producto a menudo se fusionan, simplificando la estructura.",
        "¿Y en SEO? Más trabajo: cada cluster debe llevar a una página concreta. Si la página no existe — créala. Si no, las queries compiten o quedan sin landing. En un sitio pequeño el clustering suele ser manual; en grandes ayudan herramientas como Rush Analytics u otros módulos de clustering (el umbral de solapamiento de URLs del SERP se fija aparte).",
      ],
      lists: [],
      tables: [
        {
          caption: "Mini ejemplo: ventanas PVC, Vorónezh (fragmento)",
          headers: ["Marcador / query", "Tipo", "Cluster", "Landing"],
          rows: [
            [
              "ventanas pvc voronezh",
              "comercial + geo",
              "Ventanas PVC",
              "/okna-pvh/",
            ],
            [
              "comprar ventanas pvc voronezh",
              "comercial + geo",
              "Ventanas PVC",
              "/okna-pvh/",
            ],
            ["precio ventanas pvc", "comercial", "Ventanas PVC", "/okna-pvh/"],
            [
              "instalación ventanas voronezh",
              "comercial + geo",
              "Instalación",
              "/ustanovka-okon/",
            ],
            [
              "cómo elegir ventanas pvc",
              "informativa",
              "Guía",
              "/blog/kak-vybrat-okna/",
            ],
            [
              "reparación ventanas voronezh",
              "comercial + geo",
              "Reparación",
              "/remont-okon/",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Tirar todo el núcleo a una sola URL «home» o clonar páginas casi idénticas por cada forma de palabra. Cluster = una intención → una landing.",
        },
      ],
    },
    {
      title: "Paso 4. Mapear keys a la estructura. Afinar el núcleo.",
      level: 3,
      paras: [
        "El paso anterior te dejó clusters de keywords listos. Varios grupos pueden seguir compartiendo una URL. Entonces afina la estructura del sitio, crea páginas extra y mueve parte de las keys allí.",
        "Al clusterizar, mapea queries a páginas para que las URLs no se dupliquen entre sí por sentido.",
      ],
      lists: [],
    },
    {
      title: "Qué hacer después del núcleo",
      level: 2,
      paras: [
        "El núcleo no es el final — es la entrada al trabajo del sitio. Luego suele venir: Title y H1 por cluster, copy y bloques de confianza en landings, enlaces internos entre secciones, técnica e indexación.",
      ],
      lists: [],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Errores al trabajar con keywords",
      level: 2,
      paras: [
        "Estos huecos crecen en problemas mayores: set de competidores equivocado, rankings flojos, meta tags irrelevantes, métricas bajas.",
      ],
      lists: [
        {
          intro: "Los principiantes suelen cometer estos errores con un núcleo semántico:",
          items: [
            "solo alta frecuencia y las queries más obvias",
            "sin keywords geo",
            "demasiadas keys distintas apuntando a una URL",
            "profesionalismos y jerga ignorados",
            "las mismas queries apuntando a páginas distintas",
            "núcleo montado sin las especificidades del cliente",
          ],
        },
      ],
    },
    {
      title: "Herramientas para trabajar con un núcleo semántico",
      level: 2,
      paras: [
        "Herramientas que los equipos suelen usar para recolectar y agrupar un núcleo. No es un ranking — elige por tarea y presupuesto. Paneles estrechos o desfasados no entran.",
      ],
      lists: [],
    },
    {
      title: "Yandex Wordstat",
      level: 3,
      paras: [
        "Fuente básica gratuita de frecuencia y formulación para búsqueda en ruso. Región, estacionalidad y dinámica viven aquí. La expansión de marcadores suele empezar aquí.",
      ],
      lists: [],
    },
    {
      title: "Google Keyword Planner",
      level: 3,
      paras: [
        "Planificador de keywords de Google Ads: ideas de queries, estimaciones de frecuencia y previsiones de Google. Útil como segundo ángulo junto a Wordstat, sobre todo si también miras Google.",
      ],
      lists: [],
    },
    {
      title: "Key Collector",
      level: 3,
      paras: [
        "Suite de escritorio para parsear sugerencias, recolectar y limpiar un núcleo, negativos y quitar soft-duplicates. Ahorra tiempo en listas medianas y grandes.",
      ],
      lists: [],
    },
    {
      title: "SlovoEB",
      level: 3,
      paras: [
        "Pariente gratuito y simplificado de Key Collector. No lo hace todo; el acceso a Wordstat necesita cuenta Yandex — con límites y riesgo de bloques bajo parsing agresivo.",
      ],
      lists: [],
    },
    {
      title: "Titlo",
      level: 3,
      paras: [
        "Plataforma con módulos: recolección y clustering de queries, comparación de listas, relevancia, rankings, meta tags y monitoreo. Los módulos se pueden usar aparte o en una cuenta.",
      ],
      lists: [],
    },
    {
      title: "Rush Analytics",
      level: 3,
      paras: [
        "Clustering en la nube y tareas SEO afines. Útil cuando el núcleo ya es grande y el agrupado manual por solapamiento de URLs del SERP tarda demasiado.",
      ],
      lists: [],
    },
    {
      title: "Keys.so / Serpstat",
      level: 3,
      paras: [
        "Sistemas de pago con datos de keys, competidores y páginas del SERP. Ayudan a expandir keywords de media y baja frecuencia y a ver quién ya posee el nicho. La elección depende del stack habitual del equipo.",
      ],
      lists: [],
    },
    {
      title: "Just Magic",
      level: 3,
      paras: [
        "Herramienta para semántica y entorno LSI del texto (incluidos escenarios tipo «Aquarelle»). Útil cuando el núcleo ya existe y hay que reforzar el copy de un cluster.",
      ],
      lists: [],
    },
    {
      title: "Ahrefs",
      level: 3,
      paras: [
        "Más fuerte en backlinks y mercados EN/globales, pero también muestra keys orgánicas de competidores. Para un núcleo puramente «Yandex» suele complementar Wordstat y suites locales más que sustituirlos.",
        "Cualquier set de herramientas solo acelera el trabajo. Cómo eliges formulaciones y evitas mezclar intenciones en una página — eso baja a práctica y sentido común.",
      ],
      lists: [],
    },
  ],
};

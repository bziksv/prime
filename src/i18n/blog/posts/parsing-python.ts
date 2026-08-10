import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing-python — same structure as RU JSON. */
export const parsingPythonEn: BlogPost = {
  slug: "parsing-python",
  title: "Scraping websites with Python: a beginner’s start",
  date: "2020-03-27",
  category: "Digital marketing",
  cover: "/images/blog/parsing-python/cover-en.webp",
  excerpt:
    "Why Python is often chosen for scraping, how Scrapy, Beautiful Soup, and Selenium differ, how to set up the environment, and where legal data collection ends.",
  lead: [
    "Python is handy for learning and writing scrapers: clear syntax, packages, and libraries for HTTP and HTML parsing. But “easy to write” ≠ “you may download any site.”",
    "Below: language upsides, tool classes, and a safe start. No guides on bypassing anti-bot, faking a User-Agent “like a browser,” or scraping closed sections — ToS, robots.txt, and official APIs come first.",
  ],
  faq: [
    {
      q: "Why Python, not PHP?",
      a: "Both can make network requests. Python has a strong data/script stack (requests, BS4, Scrapy) and a lower bar for learning code. The choice still depends on the team and infrastructure.",
    },
    {
      q: "Which library should you try first?",
      a: "For learning: requests + Beautiful Soup on static HTML. For large crawls: Scrapy. If the page is JavaScript-rendered, look at an API or a careful browser driver, not “breaking protection.”",
    },
    {
      q: "Can I scrape if the site “won’t let me”?",
      a: "A refusal, captcha, or rate limit is a signal to stop or find an official data channel. Bypassing protection and spoofing a user to harvest someone else’s database is claims-and-blocks territory.",
    },
    {
      q: "How is this different from the general scraping article?",
      a: "That piece covers meaning, scenarios, and limits. This one is a Python stack for beginners. The legality basics are the same.",
    },
    {
      q: "Do I need Selenium for everything?",
      a: "No. It’s heavier and slower. First check an API or JSON response; use a browser driver only when JS render is required and data is legally available.",
    },
  ],
  sections: [
    {
      title: "Why Python for scrapers",
      level: 2,
      paras: [
        "It’s a general-purpose language: scripts, data, simple OOP. For scraping, readable code, pip packages, and a community with examples matter.",
        "Typical pipeline: HTTP request → HTML/JSON → field extraction → CSV/DB. Analysis after that is a separate job.",
      ],
      lists: [
        {
          intro: "Pros for beginners:",
          items: [
            "clear syntax",
            "libraries for network and markup parsing",
            "handy debugging in a REPL or IDE",
            "easy to connect to tables and reports",
          ],
        },
      ],
      links: [
        {
          label: "Data scraping: meaning and limits",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Environment: install and first .py",
      level: 2,
      paras: [
        "Download current Python from python.org; on Windows, check “Add to PATH”. Check: in a terminal `python --version` and `print(\"Hello\")`.",
        "Write code in a `.py` file and run it from a terminal or IDE — don’t keep long scripts only in an interactive session. Online sandboxes fit short exercises, not a production crawler.",
      ],
      lists: [
        {
          intro: "Minimum before scraping:",
          items: [
            "Python 3 installed",
            "virtual environment (venv)",
            "pip and base packages for the task",
            "a clear target source and rights to the data",
          ],
        },
      ],
    },
    {
      title: "Scrapy, Beautiful Soup, Selenium",
      level: 2,
      paras: [
        "Scrapy is a spider framework: URL queues, pipelines, high performance at volume. It fits a stable crawl of open pages with limits and respect for site rules.",
        "Beautiful Soup parses already downloaded HTML/XML. It doesn’t fetch by itself: usually next to `requests` (or another HTTP client). Useful for learning scripts and one-off samples.",
        "Selenium and peers are browser automation. Their main job is UI tests; for data collection it’s a heavy path. Don’t use a driver to bypass captcha and anti-bot.",
      ],
      lists: [
        {
          intro: "Rough guide:",
          items: [
            "learning / one page → requests + Beautiful Soup",
            "many URLs and a pipeline → Scrapy",
            "need JS render → API first; otherwise a deliberate browser stack without bypassing protection",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "We don’t give “set User-Agent like Firefox and pass the block” examples. If the site blocks robots, lower the load, read the rules, or use an official export/API.",
        },
      ],
      links: [
        {
          label: "Protecting a site from scraping",
          href: "/en/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Legality and ethics of collection",
      level: 2,
      paras: [
        "An open storefront in a browser is not a license for a database. Check ToS, robots.txt, copyright, and personal data rules.",
        "Risky: mass limit ignoring, bypassing blocks, scraping closed content, reselling others’ databases, auto-filling a site with copies.",
      ],
      lists: [
        {
          intro: "Safer paths:",
          items: [
            "official APIs and partner feeds",
            "pauses and request limits",
            "don’t take personal data without a legal basis",
            "don’t publish someone else’s unique content as yours",
            "document the data source for the business",
          ],
        },
      ],
      links: [
        {
          label: "Auto-filling a site",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
      ],
    },
  ],
  closing: [
    "Python is a handy scraper start: set up the environment, pick a library class for the job, and keep collection ethics. For meaning and limits see the scraping overview; for protecting your own site — a separate piece.",
  ],
  related: [
    "parsing",
    "zashchita-ot-parsinga",
    "avtonapolnenie-sayta",
    "analiz-konkurentov",
    "yml-fayl",
    "json",
  ],
};

/** ES overlay for parsing-python — same structure as RU JSON / EN. */
export const parsingPythonEs: BlogPost = {
  slug: "parsing-python",
  title: "Scraping de sitios con Python: arranque para principiantes",
  date: "2020-03-27",
  category: "Marketing digital",
  cover: "/images/blog/parsing-python/cover-es.webp",
  excerpt:
    "Por qué se elige a menudo Python para scraping, en qué se diferencian Scrapy, Beautiful Soup y Selenium, cómo montar el entorno y dónde termina la recogida legal de datos.",
  lead: [
    "Python es cómodo para aprender y escribir scrapers: sintaxis clara, paquetes y librerías para HTTP y parseo de HTML. Pero «fácil de escribir» ≠ «puedes descargar cualquier sitio».",
    "Abajo: ventajas del lenguaje, clases de herramientas y un arranque seguro. Sin guías para saltar anti-bot, falsificar un User-Agent «como un navegador» o scrapear secciones cerradas — ToS, robots.txt y APIs oficiales van primero.",
  ],
  faq: [
    {
      q: "¿Por qué Python y no PHP?",
      a: "Ambos pueden hacer peticiones de red. Python tiene un stack fuerte de datos/scripts (requests, BS4, Scrapy) y un listón más bajo para aprender código. La elección sigue dependiendo del equipo y la infraestructura.",
    },
    {
      q: "¿Qué librería probar primero?",
      a: "Para aprender: requests + Beautiful Soup sobre HTML estático. Para crawls grandes: Scrapy. Si la página se renderiza con JavaScript, mira una API o un driver de navegador con cuidado, no «romper la protección».",
    },
    {
      q: "¿Puedo scrapear si el sitio «no me deja»?",
      a: "Un rechazo, captcha o rate limit es señal de parar o buscar un canal oficial de datos. Saltar la protección y suplantar a un usuario para cosechar la base de otro es territorio de reclamaciones y bloqueos.",
    },
    {
      q: "¿En qué se diferencia del artículo general de scraping?",
      a: "Esa pieza cubre significado, escenarios y límites. Esta es un stack Python para principiantes. Las bases legales son las mismas.",
    },
    {
      q: "¿Necesito Selenium para todo?",
      a: "No. Es más pesado y lento. Primero comprueba una API o respuesta JSON; usa un driver de navegador solo cuando haga falta el render JS y los datos estén disponibles legalmente.",
    },
  ],
  sections: [
    {
      title: "Por qué Python para scrapers",
      level: 2,
      paras: [
        "Es un lenguaje de propósito general: scripts, datos, OOP sencilla. Para scraping importan el código legible, los paquetes pip y una comunidad con ejemplos.",
        "Pipeline típico: petición HTTP → HTML/JSON → extracción de campos → CSV/DB. El análisis después es otro trabajo.",
      ],
      lists: [
        {
          intro: "Pros para principiantes:",
          items: [
            "sintaxis clara",
            "librerías para red y parseo de markup",
            "debug cómodo en REPL o IDE",
            "fácil conectar a tablas e informes",
          ],
        },
      ],
      links: [
        {
          label: "Scraping de datos: significado y límites",
          href: "/es/blog/parsing/",
        },
      ],
    },
    {
      title: "Entorno: instalación y el primer .py",
      level: 2,
      paras: [
        "Descarga Python actual desde python.org; en Windows marca «Add to PATH». Comprueba: en una terminal `python --version` y `print(\"Hello\")`.",
        "Escribe el código en un archivo `.py` y ejecútalo desde terminal o IDE — no dejes scripts largos solo en una sesión interactiva. Los sandboxes online valen para ejercicios cortos, no para un crawler de producción.",
      ],
      lists: [
        {
          intro: "Mínimo antes de scrapear:",
          items: [
            "Python 3 instalado",
            "entorno virtual (venv)",
            "pip y paquetes base para la tarea",
            "una fuente objetivo clara y derechos sobre los datos",
          ],
        },
      ],
    },
    {
      title: "Scrapy, Beautiful Soup, Selenium",
      level: 2,
      paras: [
        "Scrapy es un framework de spiders: colas de URL, pipelines, alto rendimiento a volumen. Encaja un crawl estable de páginas abiertas con límites y respeto a las reglas del sitio.",
        "Beautiful Soup parsea HTML/XML ya descargado. No fetch por sí solo: suele ir junto a `requests` (u otro cliente HTTP). Útil para scripts de aprendizaje y muestras puntuales.",
        "Selenium y similares son automatización de navegador. Su trabajo principal son tests de UI; para recogida de datos es un camino pesado. No uses un driver para saltar captcha y anti-bot.",
      ],
      lists: [
        {
          intro: "Guía aproximada:",
          items: [
            "aprender / una página → requests + Beautiful Soup",
            "muchas URLs y un pipeline → Scrapy",
            "hace falta render JS → API primero; si no, un stack de navegador deliberado sin saltar la protección",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No damos ejemplos de «pon el User-Agent como Firefox y pasa el bloqueo». Si el sitio bloquea robots, baja la carga, lee las reglas o usa un export/API oficial.",
        },
      ],
      links: [
        {
          label: "Proteger un sitio del scraping",
          href: "/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Legalidad y ética de la recogida",
      level: 2,
      paras: [
        "Un escaparate abierto en el navegador no es licencia para una base de datos. Revisa ToS, robots.txt, copyright y normas de datos personales.",
        "Arriesgado: ignorar límites en masa, saltar bloqueos, scrapear contenido cerrado, revender bases ajenas, auto-rellenar un sitio con copias.",
      ],
      lists: [
        {
          intro: "Caminos más seguros:",
          items: [
            "APIs oficiales y feeds de partners",
            "pausas y límites de peticiones",
            "no tomar datos personales sin base legal",
            "no publicar contenido único ajeno como tuyo",
            "documentar la fuente de datos para el negocio",
          ],
        },
      ],
      links: [
        {
          label: "Auto-relleno de un sitio",
          href: "/es/blog/avtonapolnenie-sayta/",
        },
      ],
    },
  ],
  closing: [
    "Python es un buen arranque de scraper: monta el entorno, elige la clase de librería para el trabajo y mantén la ética de la recogida. Para significado y límites ve el overview de scraping; para proteger tu propio sitio — una pieza aparte.",
  ],
  related: [
    "parsing",
    "avtonapolnenie-sayta",
    "analiz-konkurentov",
    "zashchita-ot-parsinga",
    "yml-fayl",
    "json",
  ],
};

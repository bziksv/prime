import type { BlogPost } from "../../../data/blog";

/** EN overlay for json — same structure as RU JSON. */
export const jsonEn: BlogPost = {
  slug: "json",
  title: "JSON: what it is, how to open it, and where it’s used",
  date: "2020-03-26",
  category: "Websites",
  cover: "/images/blog/json/cover-en.webp",
  excerpt:
    "What JSON is: a text format for data exchange, object and array syntax, Ajax, parse vs eval safety, and how to open a .json file.",
  lead: [
    "JSON (JavaScript Object Notation) is a text format for exchanging structured data between programs and languages. It grew out of the JavaScript world, but it doesn’t depend on JS: Python, PHP, Go, mobile apps, and APIs all read it.",
    "Below: why JSON shows up on sites, how the syntax works, how to open a file, and why you must never feed a foreign response into `eval`. Old IE version lists and outdated editors are skipped as noise.",
  ],
  faq: [
    {
      q: "Is JSON a programming language?",
      a: "No. It’s a data format: objects, arrays, strings, numbers, booleans, null. You don’t write programs in it — you exchange data with it.",
    },
    {
      q: "How is it different from XML?",
      a: "Usually more compact and simpler for JS/APIs. XML is stronger with schemas and mixed markup. For web APIs today, JSON is more common.",
    },
    {
      q: "How do I open a .json file?",
      a: "Any text editor or IDE with highlighting. In a browser — an extension/viewer or paste into an online validator. For production work, prefer an editor with a formatter.",
    },
    {
      q: "Can I parse JSON with eval?",
      a: "Not in real projects. Use `JSON.parse` or the language’s built-in parsers. `eval` executes code and opens XSS/injection risk.",
    },
    {
      q: "What is JSON5?",
      a: "An extension with comments and looser syntax. Handy in human-edited configs; for API exchange you usually stay with strict JSON.",
    },
  ],
  sections: [
    {
      title: "Where JSON is used",
      level: 2,
      paras: [
        "Web classic: the browser requests data from the server (Ajax / `fetch`), gets JSON, and updates the page without a full reload — feed, catalog, cart, dashboard.",
        "Also: REST/GraphQL responses, front-end configs, local settings storage, and exchange between microservices and a mobile client.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "site and mobile app APIs",
            "loading blocks without a full reload",
            "exports and integrations",
            "dev-tool configs",
          ],
        },
      ],
      links: [
        {
          label: "HTTP headers",
          href: "/en/blog/http-zagolovki/",
        },
      ],
    },
    {
      title: "Syntax: objects and arrays",
      level: 2,
      paras: [
        "Two building blocks: object `{ \"key\": value }` and array `[ value1, value2 ]`. Object keys are quoted strings. Values: string, number, `true`/`false`, `null`, nested object or array.",
        "Store phones and leading zeros as strings: `\"84959000000\"`, not numbers — or you lose the format. Strict JSON does not allow a trailing comma after the last element.",
        "Spaces and line breaks help humans; over the wire you often send a compact one-liner — same meaning.",
      ],
      lists: [
        {
          intro: "Common beginner mistakes:",
          items: [
            "single quotes instead of double",
            "a comma after the last field",
            "`//` comments in strict JSON",
            "numbers where a string is needed (phone, SKU)",
          ],
        },
      ],
      notes: [
        {
          title: "Example",
          text: '`{"name":"Anna","tags":["seo","content"],"active":true}` — an object with an array and a boolean. Nest another object as a key’s value and you get a tree of any depth.',
          kind: "tip",
        },
      ],
    },
    {
      title: "Ajax, APIs, and security",
      level: 2,
      paras: [
        "The client requests a URL; the server responds with a JSON body and a header like `Content-Type: application/json`. In modern JS, `fetch` + `response.json()` is enough — no `eval`.",
        "Historical same-origin workarounds (JSONP, injecting `<script>`) widened the attack surface. For new projects use CORS and plain JSON over HTTPS.",
        "Never execute foreign JSON as code. Parse with a built-in parser and validate fields on the server if data goes into a DB or affects permissions.",
      ],
      lists: [
        {
          intro: "Security rules:",
          items: [
            "only `JSON.parse` / the language equivalent",
            "don’t trust client fields without checks",
            "HTTPS for sensitive responses",
            "don’t put secrets in public front-end JSON",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "How to open and edit .json",
      level: 2,
      paras: [
        "The file is plain UTF-8 text. VS Code, Cursor, Notepad++, Sublime, or a system text editor is enough. IDEs highlight brackets and flag syntax errors.",
        "Heavy all-in-one tools like old XML editors aren’t required. For a quick check, use the editor’s formatter and online validators — don’t paste production secrets there.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "an editor with JSON highlighting",
            "pretty-print for reading",
            "validation before shipping a feed or config",
            "diff in git, not blind edits on the server",
          ],
        },
      ],
      links: [
        {
          label: "YML file for Market",
          href: "/en/blog/yml-fayl/",
        },
      ],
    },
  ],
  closing: [
    "JSON is a universal text container for objects and arrays between browser, server, and services. Learn the syntax, open files in a proper editor, and parse only with safe tools — no `eval` and no outdated JSONP tricks.",
  ],
  related: [
    "yml-fayl",
    "http-zagolovki",
    "parsing-python",
    "parsing",
    "bezopasnost-sayta",
    "protokol-http",
  ],
};

/** ES overlay for json — same structure as RU JSON / EN. */
export const jsonEs: BlogPost = {
  slug: "json",
  title: "JSON: qué es, cómo abrirlo y dónde se usa",
  date: "2020-03-26",
  category: "Sitios web",
  cover: "/images/blog/json/cover-es.webp",
  excerpt:
    "Qué es JSON: un formato de texto para intercambio de datos, sintaxis de objetos y arrays, Ajax, parse vs eval con seguridad, y cómo abrir un archivo .json.",
  lead: [
    "JSON (JavaScript Object Notation) es un formato de texto para intercambiar datos estructurados entre programas e idiomas. Nació en el mundo JavaScript, pero no depende de JS: Python, PHP, Go, apps móviles y APIs lo leen.",
    "Abajo: por qué JSON aparece en sitios, cómo funciona la sintaxis, cómo abrir un archivo y por qué nunca debes meter una respuesta ajena en `eval`. Listas de IE antiguo y editores obsoletos se saltan como ruido.",
  ],
  faq: [
    {
      q: "¿JSON es un lenguaje de programación?",
      a: "No. Es un formato de datos: objetos, arrays, strings, números, booleanos, null. No escribes programas en él — intercambias datos con él.",
    },
    {
      q: "¿En qué se diferencia de XML?",
      a: "Suele ser más compacto y simple para JS/APIs. XML es más fuerte con schemas y markup mixto. Para APIs web hoy, JSON es más habitual.",
    },
    {
      q: "¿Cómo abro un archivo .json?",
      a: "Cualquier editor de texto o IDE con resaltado. En el navegador — una extensión/visor o pegarlo en un validador online. Para trabajo de producción, preferir un editor con formatter.",
    },
    {
      q: "¿Puedo parsear JSON con eval?",
      a: "No en proyectos reales. Usa `JSON.parse` o los parsers nativos del lenguaje. `eval` ejecuta código y abre riesgo XSS/inyección.",
    },
    {
      q: "¿Qué es JSON5?",
      a: "Una extensión con comentarios y sintaxis más laxa. Cómoda en configs editadas a mano; para intercambio por API suele quedarse el JSON estricto.",
    },
  ],
  sections: [
    {
      title: "Dónde se usa JSON",
      level: 2,
      paras: [
        "Clásico web: el navegador pide datos al servidor (Ajax / `fetch`), recibe JSON y actualiza la página sin recarga completa — feed, catálogo, carrito, dashboard.",
        "También: respuestas REST/GraphQL, configs de front, almacenamiento local de settings e intercambio entre microservicios y un cliente móvil.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "APIs de sitio y app móvil",
            "cargar bloques sin recarga completa",
            "exports e integraciones",
            "configs de herramientas de desarrollo",
          ],
        },
      ],
      links: [
        {
          label: "Cabeceras HTTP",
          href: "/es/blog/http-zagolovki/",
        },
      ],
    },
    {
      title: "Sintaxis: objetos y arrays",
      level: 2,
      paras: [
        "Dos bloques: objeto `{ \"key\": value }` y array `[ value1, value2 ]`. Las claves del objeto son strings entre comillas. Valores: string, número, `true`/`false`, `null`, objeto o array anidado.",
        "Guarda teléfonos y ceros a la izquierda como strings: `\"84959000000\"`, no números — o pierdes el formato. El JSON estricto no permite coma final tras el último elemento.",
        "Espacios y saltos de línea ayudan a humanos; por el cable a menudo se envía una línea compacta — el mismo significado.",
      ],
      lists: [
        {
          intro: "Errores frecuentes de principiante:",
          items: [
            "comillas simples en lugar de dobles",
            "una coma tras el último campo",
            "comentarios `//` en JSON estricto",
            "números donde hace falta string (teléfono, SKU)",
          ],
        },
      ],
      notes: [
        {
          title: "Ejemplo",
          text: '`{"name":"Anna","tags":["seo","content"],"active":true}` — un objeto con un array y un booleano. Anida otro objeto como valor de una clave y obtienes un árbol de cualquier profundidad.',
          kind: "tip",
        },
      ],
    },
    {
      title: "Ajax, APIs y seguridad",
      level: 2,
      paras: [
        "El cliente pide una URL; el servidor responde con un body JSON y una cabecera como `Content-Type: application/json`. En JS moderno, `fetch` + `response.json()` basta — sin `eval`.",
        "Los workarounds históricos de same-origin (JSONP, inyectar `<script>`) ampliaron la superficie de ataque. En proyectos nuevos usa CORS y JSON plano sobre HTTPS.",
        "Nunca ejecutes JSON ajeno como código. Parsea con un parser nativo y valida campos en el servidor si los datos van a una DB o afectan permisos.",
      ],
      lists: [
        {
          intro: "Reglas de seguridad:",
          items: [
            "solo `JSON.parse` / el equivalente del lenguaje",
            "no confíes en campos del cliente sin checks",
            "HTTPS para respuestas sensibles",
            "no metas secretos en JSON público del front",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Cómo abrir y editar .json",
      level: 2,
      paras: [
        "El archivo es texto UTF-8 plano. Basta VS Code, Cursor, Notepad++, Sublime o un editor de sistema. Los IDEs resaltan brackets y marcan errores de sintaxis.",
        "No hacen falta herramientas todo-en-uno pesadas como viejos editores XML. Para un check rápido, usa el formatter del editor y validadores online — no pegues ahí secretos de producción.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "un editor con resaltado JSON",
            "pretty-print para leer",
            "validación antes de enviar un feed o config",
            "diff en git, no ediciones a ciegas en el servidor",
          ],
        },
      ],
      links: [
        {
          label: "Archivo YML para Market",
          href: "/blog/yml-fayl/",
        },
      ],
    },
  ],
  closing: [
    "JSON es un contenedor de texto universal para objetos y arrays entre navegador, servidor y servicios. Aprende la sintaxis, abre archivos en un editor decente y parsea solo con herramientas seguras — sin `eval` ni trucos JSONP obsoletos.",
  ],
  related: [
    "http-zagolovki",
    "parsing-python",
    "parsing",
    "bezopasnost-sayta",
    "protokol-http",
    "yml-fayl",
  ],
};

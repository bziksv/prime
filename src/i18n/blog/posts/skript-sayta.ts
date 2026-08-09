import type { BlogPost } from "../../../data/blog";

/** EN overlay for skript-sayta — same structure as RU JSON. */
export const skriptSaytaEn: BlogPost = {
  slug: "skript-sayta",
  title: "Website script: what it is and why you need it",
  date: "2020-07-16",
  category: "Digital marketing",
  cover: "/images/blog/skript-sayta/cover-en.webp",
  excerpt:
    "What people call a site script: client and server code, languages, typical jobs, and how to insert snippets without hurting speed and security.",
  lead: [
    "A website script is a program or code fragment that runs by rules: on page open, click, form submit, or on a server schedule. It isn’t “SEO magic” — it’s a way to automate UI and backend behavior.",
    "Below: how client-side scripts differ from server-side ones, where each applies, and what to watch when installing. Counter and widget install practice is covered in a separate article.",
  ],
  faq: [
    {
      q: "Are a script and a program the same thing?",
      a: "On the web “script” usually means executable code on the page or server (JS, PHP, etc.). A full app can be many scripts and modules.",
    },
    {
      q: "Is a script always JavaScript?",
      a: "In the browser JavaScript (and WebAssembly) dominate. On the server — PHP, Python, Node.js, Go, and more. Old “JScript / AngelScript” lists for a typical site are outdated.",
    },
    {
      q: "Does every site need scripts?",
      a: "Almost yes in a minimal form: analytics, forms, menus. But “more is better” breaks speed and security. Measure beats a widget pile.",
    },
    {
      q: "How does a script differ from a CMS plugin?",
      a: "A plugin is a packaged admin extension. Inside it are scripts and templates. Separately there are raw snippets in head/body.",
    },
    {
      q: "Are third-party scripts dangerous?",
      a: "Yes if the source is unknown: malware, hidden redirects, session theft. Take code only from the service account or your developer.",
    },
    {
      q: "Do scripts affect SEO?",
      a: "Indirectly: render blocking, heavy JS, content only after a script. Key text and links should be available without extra magic.",
    },
    {
      q: "Where should I paste an analytics counter?",
      a: "See the JavaScript insert article: head/body, Tag Manager, theme fields — without duplicates and stale cache.",
    },
  ],
  sections: [
    {
      title: "What a script is in plain words",
      level: 2,
      paras: [
        "It’s a set of instructions: “if the user clicked a button — show a form”, “if a request arrived — write a lead to the database”. The browser or server reads the code and runs steps in order and by conditions.",
        "A claw-machine analogy fits: coin and buttons are input; mechanics are the script; prize or empty is the result. On a site the input is an event or HTTP request; the result is a response, a DB write, a DOM change.",
      ],
      lists: [
        {
          intro: "A script usually:",
          items: [
            "reacts to an event or request",
            "changes the page, data, or server response",
            "lives in a file, bundle, or template insert",
            "depends on the environment (browser, PHP, Node)",
          ],
        },
      ],
    },
    {
      title: "Client and server scripts",
      level: 2,
      paras: [
        "Client code runs in the user’s browser: animation, form validation before submit, lazy blocks, chat widgets. Users can disable JS — don’t hide critical features behind a script only.",
        "Server code runs on hosting: auth, cart, HTML generation, API, email. The browser sees the result (page or JSON), not necessarily the business-logic source.",
      ],
      lists: [
        {
          intro: "Short version:",
          items: [
            "client — UX and interaction in the browser",
            "server — data, permissions, calculations, integrations",
            "often a pair: JS sends a request → server replies",
          ],
        },
      ],
      links: [
        {
          label: "Web application",
          href: "/en/blog/veb-prilozhenie/",
        },
        {
          label: "Web services",
          href: "/en/blog/veb-servisy/",
        },
      ],
    },
    {
      title: "Which languages are used",
      level: 2,
      paras: [
        "For the UI it’s almost always JavaScript (often with TypeScript and a build). For CMS sites PHP is common on the server; in custom work — Node.js, Python, other stacks for the job and team.",
        "Language choice is about ecosystem, load, and support — not a “coolness contest”. Outdated lists with JScript and exotica for a typical marketing site can be ignored.",
      ],
      lists: [
        {
          intro: "Practical minimum today:",
          items: [
            "JavaScript in the browser",
            "PHP / Node / Python on the backend — by project",
            "SQL and DB drivers next to server logic",
            "HTML/CSS — markup and style, not a “script”, but without them the page won’t assemble",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Where they’re used on a site",
      level: 2,
      paras: [
        "Scripts automate routine and extend the page: sliders, catalog filters, online chat, maps, A/B, ad pixels, analytics goals.",
        "On large properties you can’t avoid automation. But every third-party widget means requests, outage risk, and Core Web Vitals impact. Before install ask: what’s the job, and can it be lighter.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "stats and goals",
            "forms and calculators",
            "search and filters without reload",
            "accounts and cart",
            "CRM and payment integrations (more often server + a safe client)",
          ],
        },
      ],
    },
    {
      title: "How they’re connected and set up",
      level: 2,
      paras: [
        "A ready service snippet goes into the template, theme “scripts” fields, Tag Manager, or a plugin. A custom module is deployed to the server (CI/CD, SSH, rarely bare FTP), with permissions and config set.",
        "One-click installers from shady catalogs risk malware. For CMS, official repos and contractor code with review are safer.",
      ],
      lists: [
        {
          intro: "Basic order for a snippet:",
          items: [
            "take code from the service account",
            "paste in one place without a duplicate",
            "test on staging",
            "clear cache",
            "confirm the event/counter fires",
          ],
        },
      ],
      links: [
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Don’t copy “SEO scripts” from forums. For security that’s the same risk class as an unknown plugin.",
        },
      ],
    },
    {
      title: "Speed, SEO, and measure",
      level: 2,
      paras: [
        "Heavy and blocking scripts in head slow first paint. Content that appears only after JS is worse for some bots and for users on slow networks.",
        "Simple rule: needed scenarios — yes; a dozen widgets “just in case” — no. Regularly audit tags in Tag Manager and CMS plugins.",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "disable unused tags",
            "load heavy code deferred (defer/async as fits)",
            "don’t duplicate Metrica/Analytics",
            "watch for errors in the browser console",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "A script is an automation tool on the client or server. Understanding the code’s role helps install counters and widgets with measure — from a trusted source and without hurting speed.",
  ],
};

/** ES overlay for skript-sayta — same structure as RU JSON / EN. */
export const skriptSaytaEs: BlogPost = {
  slug: "skript-sayta",
  title: "Script del sitio: qué es y por qué lo necesitas",
  date: "2020-07-16",
  category: "Digital marketing",
  cover: "/images/blog/skript-sayta/cover.webp",
  excerpt:
    "Qué se llama script de un sitio: código cliente y servidor, lenguajes, trabajos típicos y cómo insertar snippets sin dañar velocidad y seguridad.",
  lead: [
    "Un script de sitio es un programa o fragmento de código que corre por reglas: al abrir la página, al clic, al enviar un formulario o en un schedule del servidor. No es «magia SEO» — es una forma de automatizar el comportamiento de UI y backend.",
    "Abajo: cómo difieren los scripts client-side de los server-side, dónde aplica cada uno y qué vigilar al instalar. La práctica de instalar contadores y widgets está en un artículo aparte.",
  ],
  faq: [
    {
      q: "¿Script y programa son lo mismo?",
      a: "En la web «script» suele significar código ejecutable en la página o el servidor (JS, PHP, etc.). Una app completa puede ser muchos scripts y módulos.",
    },
    {
      q: "¿Un script es siempre JavaScript?",
      a: "En el navegador dominan JavaScript (y WebAssembly). En el servidor — PHP, Python, Node.js, Go y más. Listas viejas de «JScript / AngelScript» para un sitio típico están obsoletas.",
    },
    {
      q: "¿Todo sitio necesita scripts?",
      a: "Casi sí en forma mínima: analytics, formularios, menús. Pero «más es mejor» rompe velocidad y seguridad. La medida gana a un montón de widgets.",
    },
    {
      q: "¿En qué se diferencia un script de un plugin CMS?",
      a: "Un plugin es una extensión empaquetada del admin. Dentro hay scripts y plantillas. Por separado hay snippets crudos en head/body.",
    },
    {
      q: "¿Son peligrosos los scripts de terceros?",
      a: "Sí si la fuente es desconocida: malware, redirects ocultos, robo de sesión. Toma código solo de la cuenta del servicio o de tu desarrollador.",
    },
    {
      q: "¿Los scripts afectan al SEO?",
      a: "De forma indirecta: bloqueo de render, JS pesado, contenido solo tras un script. El texto y los enlaces clave deben estar disponibles sin magia extra.",
    },
    {
      q: "¿Dónde pego un contador de analytics?",
      a: "Ver el artículo de inserción de JavaScript: head/body, Tag Manager, campos del theme — sin duplicados ni caché stale.",
    },
  ],
  sections: [
    {
      title: "Qué es un script en palabras simples",
      level: 2,
      paras: [
        "Es un set de instrucciones: «si el usuario hizo clic en un botón — muestra un formulario», «si llegó una request — escribe un lead en la base de datos». El navegador o el servidor lee el código y ejecuta pasos en orden y por condiciones.",
        "Encaja una analogía de máquina de garra: monedas y botones son el input; la mecánica es el script; premio o vacío es el resultado. En un sitio el input es un evento o una request HTTP; el resultado es una respuesta, una escritura en DB, un cambio en el DOM.",
      ],
      lists: [
        {
          intro: "Un script suele:",
          items: [
            "reaccionar a un evento o request",
            "cambiar la página, los datos o la respuesta del servidor",
            "vivir en un archivo, bundle o insert de plantilla",
            "depender del entorno (navegador, PHP, Node)",
          ],
        },
      ],
    },
    {
      title: "Scripts de cliente y de servidor",
      level: 2,
      paras: [
        "El código cliente corre en el navegador del usuario: animación, validación del formulario antes del submit, bloques lazy, widgets de chat. Los usuarios pueden desactivar JS — no escondas features críticas solo detrás de un script.",
        "El código servidor corre en el hosting: auth, carrito, generación de HTML, API, email. El navegador ve el resultado (página o JSON), no necesariamente el source de la lógica de negocio.",
      ],
      lists: [
        {
          intro: "Versión corta:",
          items: [
            "cliente — UX e interacción en el navegador",
            "servidor — datos, permisos, cálculos, integraciones",
            "a menudo un par: JS envía una request → el servidor responde",
          ],
        },
      ],
      links: [
        {
          label: "Aplicación web",
          href: "/es/blog/veb-prilozhenie/",
        },
        {
          label: "Servicios web",
          href: "/es/blog/veb-servisy/",
        },
      ],
    },
    {
      title: "Qué lenguajes se usan",
      level: 2,
      paras: [
        "Para la UI es casi siempre JavaScript (a menudo con TypeScript y un build). En sitios CMS PHP es habitual en el servidor; en trabajo custom — Node.js, Python, otros stacks según el job y el equipo.",
        "La elección de lenguaje es por ecosistema, carga y soporte — no un «concurso de lo cool». Listas obsoletas con JScript y exótica para un sitio marketing típico se pueden ignorar.",
      ],
      lists: [
        {
          intro: "Mínimo práctico hoy:",
          items: [
            "JavaScript en el navegador",
            "PHP / Node / Python en el backend — según el proyecto",
            "SQL y drivers de DB junto a la lógica de servidor",
            "HTML/CSS — markup y estilo, no un «script», pero sin ellos la página no se arma",
          ],
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Dónde se usan en un sitio",
      level: 2,
      paras: [
        "Los scripts automatizan la rutina y amplían la página: sliders, filtros de catálogo, chat online, mapas, A/B, píxeles de ads, objetivos de analytics.",
        "En propiedades grandes no puedes evitar la automatización. Pero cada widget de terceros significa requests, riesgo de outage e impacto en Core Web Vitals. Antes de instalar pregunta: ¿cuál es el trabajo, y se puede más ligero?",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "stats y objetivos",
            "formularios y calculadoras",
            "búsqueda y filtros sin reload",
            "cuentas y carrito",
            "integraciones CRM y pago (más a menudo servidor + un cliente seguro)",
          ],
        },
      ],
    },
    {
      title: "Cómo se conectan y se montan",
      level: 2,
      paras: [
        "Un snippet de servicio listo va a la plantilla, a campos «scripts» del theme, a Tag Manager o a un plugin. Un módulo custom se despliega al servidor (CI/CD, SSH, rara vez FTP a pelo), con permisos y config fijados.",
        "Los instaladores one-click de catálogos dudosos arriesgan malware. Para CMS, repos oficiales y código de contractor con review son más seguros.",
      ],
      lists: [
        {
          intro: "Orden básico para un snippet:",
          items: [
            "toma el código de la cuenta del servicio",
            "pega en un solo lugar sin duplicado",
            "prueba en staging",
            "limpia caché",
            "confirma que el evento/contador dispara",
          ],
        },
      ],
      links: [
        {
          label: "Insertar JavaScript",
          href: "/es/blog/vstavka-javascript/",
        },
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
      ],
      notes: [
        {
          title: "Error común",
          kind: "tip",
          text: "No copies «scripts SEO» de foros. Para seguridad es la misma clase de riesgo que un plugin desconocido.",
        },
      ],
    },
    {
      title: "Velocidad, SEO y medida",
      level: 2,
      paras: [
        "Scripts pesados y bloqueantes en head ralentizan el first paint. El contenido que aparece solo tras JS es peor para algunos bots y para usuarios en redes lentas.",
        "Regla simple: escenarios necesarios — sí; una docena de widgets «por si acaso» — no. Audita con regularidad tags en Tag Manager y plugins del CMS.",
      ],
      lists: [
        {
          intro: "Higiene:",
          items: [
            "desactiva tags sin uso",
            "carga código pesado diferido (defer/async según encaje)",
            "no dupliques Métrica/Analytics",
            "mira errores en la consola del navegador",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Un script es una tool de automatización en el cliente o el servidor. Entender el rol del código ayuda a instalar contadores y widgets con medida — desde una fuente de confianza y sin dañar la velocidad.",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-brauzer — same structure as RU JSON. */
export const yandeksBrauzerEn: BlogPost = {
  slug: "yandeks-brauzer",
  title: "How to install Yandex Browser safely",
  date: "2018-03-19",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-brauzer/cover-en.webp",
  excerpt:
    "Install Yandex Browser from the official site, move bookmarks and passwords, and fix common Windows errors — without third-party “free downloaders” or outdated wizard click-paths.",
  lead: [
    "Yandex Browser is a Chromium browser with Yandex services: search, translate, sync, and protection. For install you only need the official build for your OS.",
    "Below: how to download without gray sites, what to do after install, and which Windows errors show up most. Wizard buttons and download URLs change — use the official Yandex page, not 2018 screenshots.",
  ],
  faq: [
    {
      q: "Where is it safe to download?",
      a: "Only from the official Yandex site or browser download page. Third-party repacks and SMS-gated sites risk malware.",
    },
    {
      q: "Which engine does it use?",
      a: "Chromium, like several other browsers. Chrome Web Store extensions often work, but not always.",
    },
    {
      q: "Do I have to make it the default browser?",
      a: "No. It’s convenience for links from email and documents. You can keep your current browser as primary.",
    },
    {
      q: "Do I need Yandex Disk during install?",
      a: "No. Cloud storage is a separate product; the wizard may offer it — you can skip.",
    },
    {
      q: "Will passwords transfer from Chrome?",
      a: "Often yes, through the import wizard. After transfer, check the password manager and 2FA on important accounts.",
    },
  ],
  sections: [
    {
      title: "Download only the official installer",
      level: 2,
      paras: [
        "Open the official Yandex Browser download page and grab the build for Windows, macOS, or Linux — the site usually detects your OS. Skip “free software” catalogs and installers bundled with junkware.",
        "Before you run the file, confirm the download finished completely (size isn’t truncated), especially on an unstable connection.",
      ],
      lists: [
        {
          intro: "Why only the official source:",
          items: [
            "lower risk of a swapped file",
            "current version and updates",
            "no forced “optimizers”",
            "clear license and data policy",
          ],
        },
      ],
      notes: [
        {
          title: "On stats and agreements",
          text: "The install wizard may include options about usage stats and Yandex services. Read the text and uncheck extras you don’t need — normal hygiene for any software install.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Install and first launch",
      level: 2,
      paras: [
        "Run the installer and confirm the wizard steps. On a corporate PC you may need Run as administrator. After install, the browser may offer to become default — decide on purpose.",
        "Next it often offers to import from Chrome, Firefox, Edge, and others: bookmarks, history, saved passwords. Import helps when you’re switching primary browsers; if you’re unsure, skip and move data later point by point.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "download from the official page",
            "install under your OS account",
            "decide on default browser",
            "import data or skip",
            "sign into a Yandex account if you need sync",
          ],
        },
      ],
    },
    {
      title: "Sync and services",
      level: 2,
      paras: [
        "Signing into a Yandex account turns on sync for tabs, passwords, and settings across devices. Convenient — but keep a strong master password / 2FA on email and critical accounts.",
        "Offers to install Disk, set a Yandex widget start page, and similar extras are optional. You can use the browser without the full services bundle.",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/en/blog/yandeks-disk/",
        },
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Typical Windows install errors",
      level: 2,
      paras: [
        "Installer messages depend on Windows version and permissions. Below are problem classes that showed up most in older guides and still matter by meaning today.",
      ],
      tables: [
        {
          caption: "What to check on failure",
          headers: ["Situation", "What to do"],
          rows: [
            [
              "No admin rights",
              "Run the installer as administrator",
            ],
            [
              "Not a valid Win32 application",
              "Re-download and check file integrity",
            ],
            [
              "Not enough disk space",
              "Free space or use another drive",
            ],
            [
              "Blocked by antivirus or policy",
              "Allow the official installer in exceptions",
            ],
            [
              "Corporate PC",
              "Get rights via IT — not a cracked repack",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Error codes",
          text: "Specific codes like 0x80072ee7 / 0x80070070 in 2018 guides are landmarks, not the only causes. Read the error text and installer log; when in doubt, reinstall from the official file.",
          kind: "tip",
        },
      ],
    },
    {
      title: "After install: a settings minimum",
      level: 2,
      paras: [
        "Check for updates, import bookmarks if needed, and enable sync only if you trust the account. For client cabinets, a separate browser profile or password manager is cleaner.",
        "Which browser is “best” is a separate topic; here the job is installing official Yandex Browser without extra risk.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Official build, deliberate default-browser choice, optional data import, and error fixes through permissions / disk space / a fresh download.",
        "Don’t pay or send SMS for a “free browser install” on third-party sites.",
      ],
    },
  ],
  closing: [
    "Download Yandex Browser from the official page, install under your OS account, and move bookmarks only if you need them — that’s how you get a working browser without gray installers.",
  ],
  related: [
    "yandeks-disk",
    "menedzher-paroley",
    "cookies",
    "chrome-rasshireniya-marketing",
    "chrome-rasshireniya-seo",
    "https-seo",
  ],
};

/** ES overlay for yandeks-brauzer — same structure as RU JSON / EN. */
export const yandeksBrauzerEs: BlogPost = {
  slug: "yandeks-brauzer",
  title: "Cómo instalar Yandex Browser con seguridad",
  date: "2018-03-19",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-brauzer/cover-es.webp",
  excerpt:
    "Instala Yandex Browser desde el sitio oficial, mueve favoritos y contraseñas, y arregla errores habituales de Windows — sin «descargadores gratis» de terceros ni rutas de wizard obsoletas.",
  lead: [
    "Yandex Browser es un navegador Chromium con servicios Yandex: búsqueda, traducción, sync y protección. Para instalar solo necesitas el build oficial para tu SO.",
    "Abajo: cómo descargar sin sitios grises, qué hacer tras instalar y qué errores de Windows aparecen más. Los botones del wizard y las URLs de descarga cambian — usa la página oficial de Yandex, no capturas de 2018.",
  ],
  faq: [
    {
      q: "¿Dónde es seguro descargarlo?",
      a: "Solo desde el sitio oficial de Yandex o la página de descarga del navegador. Repacks de terceros y sitios con SMS arriesgan malware.",
    },
    {
      q: "¿Qué motor usa?",
      a: "Chromium, como varios otros navegadores. Las extensiones de Chrome Web Store a menudo funcionan, pero no siempre.",
    },
    {
      q: "¿Tengo que hacerlo el navegador predeterminado?",
      a: "No. Es comodidad para enlaces del correo y documentos. Puedes mantener tu navegador actual como principal.",
    },
    {
      q: "¿Necesito Yandex Disk durante la instalación?",
      a: "No. El almacenamiento en la nube es un producto aparte; el wizard puede ofrecerlo — puedes saltarlo.",
    },
    {
      q: "¿Se transferirán las contraseñas desde Chrome?",
      a: "A menudo sí, por el wizard de importación. Tras transferir, revisa el gestor de contraseñas y el 2FA en cuentas importantes.",
    },
  ],
  sections: [
    {
      title: "Descarga solo el instalador oficial",
      level: 2,
      paras: [
        "Abre la página oficial de descarga de Yandex Browser y coge el build para Windows, macOS o Linux — el sitio suele detectar tu SO. Evita catálogos de «software gratis» e instaladores empaquetados con basura.",
        "Antes de ejecutar el archivo, confirma que la descarga terminó completa (el tamaño no está truncado), sobre todo con conexión inestable.",
      ],
      lists: [
        {
          intro: "Por qué solo la fuente oficial:",
          items: [
            "menos riesgo de un archivo cambiado",
            "versión actual y actualizaciones",
            "sin «optimizadores» forzados",
            "licencia y política de datos claras",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre estadísticas y acuerdos",
          text: "El wizard de instalación puede incluir opciones sobre estadísticas de uso y servicios Yandex. Lee el texto y desmarca extras que no necesites — higiene normal al instalar cualquier software.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Instalación y primer arranque",
      level: 2,
      paras: [
        "Ejecuta el instalador y confirma los pasos del wizard. En un PC corporativo puede hacer falta Ejecutar como administrador. Tras instalar, el navegador puede ofrecerse como predeterminado — decide a propósito.",
        "Luego suele ofrecer importar desde Chrome, Firefox, Edge y otros: favoritos, historial, contraseñas guardadas. Importar ayuda al cambiar de navegador principal; si no estás seguro, sáltarlo y mueve datos después punto por punto.",
      ],
      lists: [
        {
          intro: "Orden típico:",
          items: [
            "descargar desde la página oficial",
            "instalar con tu cuenta del SO",
            "decidir el navegador predeterminado",
            "importar datos o saltar",
            "entrar en una cuenta Yandex si necesitas sync",
          ],
        },
      ],
    },
    {
      title: "Sync y servicios",
      level: 2,
      paras: [
        "Entrar en una cuenta Yandex activa sync de pestañas, contraseñas y ajustes entre dispositivos. Cómodo — pero mantén una master password fuerte / 2FA en el correo y cuentas críticas.",
        "Ofertas de instalar Disk, poner una start page con widget Yandex y extras similares son opcionales. Puedes usar el navegador sin el paquete completo de servicios.",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/blog/yandeks-disk/",
        },
        {
          label: "Gestor de contraseñas",
          href: "/es/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Errores típicos de instalación en Windows",
      level: 2,
      paras: [
        "Los mensajes del instalador dependen de la versión de Windows y de los permisos. Abajo: clases de problemas que más salían en guías viejas y siguen importando por significado hoy.",
      ],
      tables: [
        {
          caption: "Qué revisar si falla",
          headers: ["Situación", "Qué hacer"],
          rows: [
            [
              "Sin derechos de admin",
              "Ejecutar el instalador como administrador",
            ],
            [
              "Not a valid Win32 application",
              "Volver a descargar y comprobar la integridad del archivo",
            ],
            [
              "Poco espacio en disco",
              "Liberar espacio o usar otra unidad",
            ],
            [
              "Bloqueado por antivirus o política",
              "Permitir el instalador oficial en excepciones",
            ],
            [
              "PC corporativo",
              "Pedir derechos vía IT — no un repack crackeado",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Códigos de error",
          text: "Códigos concretos como 0x80072ee7 / 0x80070070 en guías de 2018 son hitos, no las únicas causas. Lee el texto del error y el log del instalador; si dudas, reinstala desde el archivo oficial.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Tras instalar: un mínimo de ajustes",
      level: 2,
      paras: [
        "Revisa actualizaciones, importa favoritos si hace falta y activa sync solo si confías en la cuenta. Para cuentas de cliente, un perfil de navegador aparte o un gestor de contraseñas es más limpio.",
        "Cuál es el «mejor» navegador es otro tema; aquí el trabajo es instalar el Yandex Browser oficial sin riesgo extra.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Build oficial, elección deliberada del navegador predeterminado, importación opcional de datos y arreglo de errores por permisos / espacio en disco / descarga fresca.",
        "No pagues ni envíes SMS por una «instalación gratis del navegador» en sitios de terceros.",
      ],
    },
  ],
  closing: [
    "Descarga Yandex Browser desde la página oficial, instálalo con tu cuenta del SO y mueve favoritos solo si los necesitas — así tienes un navegador que funciona sin instaladores grises.",
  ],
  related: [
    "yandeks-disk",
    "menedzher-paroley",
    "cookies",
    "chrome-rasshireniya-marketing",
    "chrome-rasshireniya-seo",
    "https-seo",
  ],
};

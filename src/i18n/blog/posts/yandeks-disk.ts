import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-disk — same structure as RU JSON. */
export const yandeksDiskEn: BlogPost = {
  slug: "yandeks-disk",
  title: "Yandex Disk: cloud storage for files and collaboration",
  date: "2020-08-20",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-disk/cover-en.webp",
  excerpt:
    "What Yandex Disk is: file storage and sync, public links, and a comparison with Google Drive. Skip outdated free-GB figures — check the service’s current plans.",
  lead: [
    "Yandex Disk is cloud storage: files live on the service’s servers and stay available from a computer, phone, or share link. Handy for decks, contracts, media backups, and shared edits without a USB stick in your pocket.",
    "Below: why businesses and freelancers use the cloud, everyday scenarios, and how to choose between Yandex Disk and Google Drive. Free space volumes and plan prices change — check the official page, not figures from 2020 articles.",
  ],
  faq: [
    {
      q: "How is it different from a USB stick?",
      a: "You need the internet (or pre-downloaded offline copies). Upside: you won’t lose the stick, you can share a link, and sync devices.",
    },
    {
      q: "Is it safe to store contracts there?",
      a: "For sensitive data, review the service policy, use link passwords and expiry, and enable account 2FA. Critical files are sometimes duplicated in your own storage or an encrypted archive.",
    },
    {
      q: "Can I edit a document with someone else?",
      a: "Yes, for supported formats and access rights via link or folder. Exact office features depend on Yandex’s current UI.",
    },
    {
      q: "Yandex Disk or Google Drive?",
      a: "In Russia the Yandex ecosystem is often more convenient — mail, Disk, familiar login. Google is stronger for Docs/Sheets and global teams. Choose by team habit and data jurisdiction.",
    },
    {
      q: "Does Disk replace a site backup?",
      a: "Not as your only hosting backup. Sites need scheduled database and file dumps; Disk is a handy place to keep a copy — not the whole strategy.",
    },
  ],
  sections: [
    {
      title: "Why you need it and what it can do",
      level: 2,
      paras: [
        "Typical scenario: a manager carries a deck and a price list. The laptop dies or gets left behind — files open from a phone, or the client views them via a link. Same for shoot photos, layouts, and article drafts.",
        "Basics: upload any formats within your quota, desktop and mobile apps, browser preview for some documents and media, antivirus checks on uploads (as the service states), shared folders, and public links.",
        "Access levels: a private file, a view-only link, or one with edit rights — UI wording changes, the idea stays: don’t expose the whole drive with a public link to the root.",
        "Phone auto-upload is handy for a photo archive but eats quota. For a team, agree on folder structure and file names early — otherwise the cloud becomes a dump.",
      ],
      lists: [
        {
          intro: "When Disk is especially useful:",
          items: [
            "meetings outside the office",
            "sending large files to a client",
            "laptop and phone sync",
            "drafts before publishing to the site",
            "a just-in-case copy of important documents",
          ],
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Getting started, Google comparison, and practice",
      level: 2,
      paras: [
        "Sign in with a Yandex account → web Disk or the app. Upload a project folder, check sync on a second device, create a test public link, and make sure nothing extra is exposed.",
        "Compared with Google Drive, both cover storage and sharing. The difference is ecosystem (Docs vs Yandex editors), team habit, availability in your region, and data-storage policy. Don’t treat old “10 GB vs 5 GB” comparisons as fact — quotas update.",
        "Mail.ru Cloud and other services raise the same questions: quota, speed, trust, link convenience. Businesses sometimes take a corporate plan with admin controls.",
        "Security practice: 2FA, separate links instead of one link to everything, link expiry where available, and don’t keep passwords in open text files next to contracts.",
        "Bottom line: Yandex Disk is a working tool for file access without a USB stick. Check current plans and access rights; for a site, the cloud complements hosting backups — it doesn’t replace them.",
      ],
      lists: [
        {
          intro: "Setup mini-checklist:",
          items: [
            "2FA on the account",
            "clear folder structure",
            "link permissions checked",
            "client on work devices",
            "quota and plan verified on Yandex’s site",
          ],
        },
      ],
      links: [
        {
          label: "Web archive",
          href: "/en/blog/veb-arhiv/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "udalennaya-rabota",
    "veb-arhiv",
    "didzhital-agentstvo",
    "favikon",
  ],
};

/** ES overlay for yandeks-disk — same structure as RU JSON / EN. */
export const yandeksDiskEs: BlogPost = {
  slug: "yandeks-disk",
  title: "Yandex Disk: almacenamiento en la nube para archivos y colaboración",
  date: "2020-08-20",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-disk/cover-es.webp",
  excerpt:
    "Qué es Yandex Disk: almacenamiento y sync de archivos, enlaces públicos y comparación con Google Drive. Salta cifras caducadas de GB gratis — mira los planes actuales del servicio.",
  lead: [
    "Yandex Disk es almacenamiento en la nube: los archivos viven en los servidores del servicio y siguen disponibles desde un ordenador, teléfono o enlace para compartir. Útil para decks, contratos, backups de media y ediciones compartidas sin un USB en el bolsillo.",
    "Abajo: por qué negocios y freelancers usan la nube, escenarios cotidianos y cómo elegir entre Yandex Disk y Google Drive. Volúmenes gratis y precios de planes cambian — mira la página oficial, no cifras de artículos de 2020.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de un USB?",
      a: "Necesitas internet (o copias offline descargadas antes). Upside: no pierdes el stick, puedes compartir un enlace y sincronizar dispositivos.",
    },
    {
      q: "¿Es seguro guardar contratos ahí?",
      a: "Para datos sensibles, revisa la política del servicio, usa contraseñas y caducidad en enlaces y activa 2FA en la cuenta. Los archivos críticos a veces se duplican en tu propio storage o en un archivo cifrado.",
    },
    {
      q: "¿Puedo editar un documento con alguien más?",
      a: "Sí, en formatos soportados y con derechos de acceso vía enlace o carpeta. Las features exactas de office dependen de la UI actual de Yandex.",
    },
    {
      q: "¿Yandex Disk o Google Drive?",
      a: "En Rusia el ecosistema Yandex suele ser más cómodo — mail, Disk, login familiar. Google es más fuerte en Docs/Sheets y equipos globales. Elige por hábito del equipo y jurisdicción de los datos.",
    },
    {
      q: "¿Disk sustituye el backup del sitio?",
      a: "No como único backup de hosting. Los sitios necesitan dumps programados de base de datos y archivos; Disk es un sitio práctico para guardar una copia — no toda la estrategia.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta y qué puede hacer",
      level: 2,
      paras: [
        "Escenario típico: un manager lleva un deck y una lista de precios. El portátil muere o se queda atrás — los archivos se abren desde el teléfono, o el cliente los ve vía enlace. Lo mismo para fotos de shoot, layouts y borradores de artículos.",
        "Básico: subir cualquier formato dentro de la cuota, apps desktop y móvil, preview en navegador para algunos documentos y media, chequeos antivirus en uploads (según diga el servicio), carpetas compartidas y enlaces públicos.",
        "Niveles de acceso: un archivo privado, un enlace solo lectura o uno con derechos de edición — el wording de la UI cambia, la idea se mantiene: no expongas todo el drive con un enlace público a la raíz.",
        "El auto-upload del teléfono es útil para un archivo de fotos pero come cuota. En un equipo, acuerda estructura de carpetas y nombres de archivo pronto — si no, la nube se vuelve un dump.",
      ],
      lists: [
        {
          intro: "Cuándo Disk es especialmente útil:",
          items: [
            "reuniones fuera de la oficina",
            "enviar archivos grandes a un cliente",
            "sync de portátil y teléfono",
            "borradores antes de publicar en el sitio",
            "una copia por si acaso de documentos importantes",
          ],
        },
      ],
      links: [
        {
          label: "Bases de datos del sitio",
          href: "/es/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Trabajo remoto",
          href: "/es/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Primeros pasos, comparación con Google y práctica",
      level: 2,
      paras: [
        "Entra con una cuenta Yandex → Disk web o la app. Sube una carpeta de proyecto, comprueba sync en un segundo dispositivo, crea un enlace público de prueba y asegúrate de que no se exponga nada de más.",
        "Frente a Google Drive, ambos cubren almacenamiento y sharing. La diferencia es el ecosistema (Docs vs editores Yandex), el hábito del equipo, la disponibilidad en tu región y la política de almacenamiento de datos. No tomes comparaciones viejas de «10 GB vs 5 GB» como hecho — las cuotas se actualizan.",
        "Mail.ru Cloud y otros servicios plantean las mismas preguntas: cuota, velocidad, trust, comodidad de enlaces. Los negocios a veces toman un plan corporativo con controles de admin.",
        "Práctica de seguridad: 2FA, enlaces separados en vez de uno a todo, caducidad de enlace donde exista, y no guardes contraseñas en archivos de texto abiertos junto a contratos.",
        "En resumen: Yandex Disk es una tool útil para acceder a archivos sin USB. Mira planes actuales y derechos de acceso; para un sitio, la nube complementa los backups de hosting — no los sustituye.",
      ],
      lists: [
        {
          intro: "Mini-checklist de setup:",
          items: [
            "2FA en la cuenta",
            "estructura clara de carpetas",
            "permisos de enlaces revisados",
            "cliente en dispositivos de trabajo",
            "cuota y plan verificados en el sitio de Yandex",
          ],
        },
      ],
      links: [
        {
          label: "Archivo web",
          href: "/es/blog/veb-arhiv/",
        },
        {
          label: "Agencia digital",
          href: "/es/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "udalennaya-rabota",
    "veb-arhiv",
    "didzhital-agentstvo",
    "favikon",
  ],
};

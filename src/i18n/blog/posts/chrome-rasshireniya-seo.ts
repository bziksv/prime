import type { BlogPost } from "../../../data/blog";

/** EN overlay for chrome-rasshireniya-seo — same structure as RU JSON. */
export const chromeRasshireniyaSeoEn: BlogPost = {
  slug: "chrome-rasshireniya-seo",
  title: "Chrome extensions for SEO: a useful minimum",
  date: "2019-11-14",
  category: "SEO",
  cover: "/images/blog/chrome-rasshireniya-seo/cover-en.webp",
  excerpt:
    "Which Chrome extensions actually help SEO work: page audits, keyword research, UTM tags, cookies, links, and web tooling — with the caveat that the Chrome Web Store catalog keeps changing.",
  lead: [
    "Chrome extensions speed up SEO chores: measuring layout blocks, sampling color, a quick on-page SEO snapshot, site: search, UTM tags, cookies, opening links in bulk. They are browser add-ons, not a ranking engine.",
    "Below is a working minimum by task. Names and availability in the Chrome Web Store change — check freshness, reviews, and permissions before you install. Do not pile on a dozen extensions “just in case.”",
  ],
  faq: [
    {
      q: "Do Chrome extensions raise rankings?",
      a: "No. They speed up audits and data collection. Rankings come from content, tech, links, and time.",
    },
    {
      q: "How many extensions are enough?",
      a: "About 5–8 for the jobs you actually do. Extras slow the browser and widen the risk surface.",
    },
    {
      q: "What is dangerous about shady extensions?",
      a: "Access to tabs and data, leaks, page spoofing. Install from the official store and read the permissions.",
    },
    {
      q: "Should you use a separate Chrome profile for SEO?",
      a: "Yes, it helps: work extensions stay apart from personal ones, with fewer conflicts and less ad-tracking mix-up.",
    },
    {
      q: "Does a Serpstat-style extension replace the full service?",
      a: "No. It is a quick snapshot. The full keyword set, links, and history live in the service account or peer tools.",
    },
    {
      q: "Is Wordstat Assistant still needed?",
      a: "If the extension is gone from the store, use Wordstat itself, spreadsheets, and current assistants or scripts.",
    },
    {
      q: "Is a password manager required?",
      a: "For client accounts — yes, that class of tools. Pick a maintained, secure option — not whatever a 2019 article named.",
    },
    {
      q: "Do extensions mean a fast path to page one?",
      a: "No. Site prep often takes about a month; growing a query core in the results is typically planned over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "How to build an extension stack",
      level: 2,
      paras: [
        "Group by jobs: layout and UX, on-page SEO snapshot, keyword research, analytics and UTM, links, access security. One proven tool per job.",
        "Before you install, check user count, last update, and requested permissions. Turn off anything you have not used in a month.",
      ],
      lists: [
        {
          intro: "Hygiene rules:",
          items: [
            "Chrome Web Store or a trusted source only",
            "a separate work profile",
            "minimize “read all sites” rights",
            "back up the extension list when you switch PCs",
          ],
        },
      ],
      links: [
        {
          label: "SEO tools",
          href: "/en/blog/programmy-seo/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Layout and a quick look at the page",
      level: 2,
      paras: [
        "PageRuler (and similar rulers) measure blocks — handy for design briefs and responsive checks. ColorZilla samples element color in HEX/RGB so you can match a mockup.",
        "Web Developer lets you disable CSS/JS, view heading outlines, and clear cookies selectively — useful when debugging templates and forms. It is a webmaster kit, not SEO magic.",
      ],
      lists: [
        {
          intro: "When it helps:",
          items: [
            "layout acceptance",
            "finding a broken H1–H6 outline",
            "checking the page without styles",
            "matching colors to brand guidelines",
          ],
        },
      ],
    },
    {
      title: "SEO snapshot and site search",
      level: 2,
      paras: [
        "Extensions like Serpstat Website SEO Checker surface meta, headings, alt text, media weight, CMS hints, and index signals on the page — a handy checklist for a manual pass. Full features usually sit behind a service account.",
        "“Search the current site” tools and peers build `site:domain` in Google in one click — a fast index check without typing the operator by hand.",
      ],
      lists: [
        {
          intro: "Don’t forget:",
          items: [
            "cross-check with Webmaster / Search Console",
            "do not trust a single extension number",
            "for mass crawl, use a desktop spider",
          ],
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "UTM, cookies, and links",
      level: 2,
      paras: [
        "Google Analytics URL Builder (and peers) build links with utm_source / medium / campaign — a must for ads and reporting. EditThisCookie helps view and edit cookies when debugging goals and auth (be careful on other people’s or production accounts).",
        "LinkClump opens or copies a batch of links at once — handy when reviewing SERPs. Do not confuse click speed with fake engagement: it is your work tool, not a scheme for someone else’s site.",
      ],
      lists: [
        {
          intro: "Tie-in with analytics:",
          items: [
            "one UTM template for the team",
            "check goals after tagging",
            "cookies for debugging only — not to bypass platform rules",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Cookies",
          href: "/en/blog/cookies/",
        },
      ],
    },
    {
      title: "Keyword research, passwords, and a sane minimum",
      level: 2,
      paras: [
        "Assistants for Yandex Wordstat speed collecting keywords into a buffer or sheet — if a current add-on exists. Otherwise work in Wordstat itself and Excel or Google Sheets. Keyword research matters more than a toolbar button.",
        "A password manager (Bitwarden, 1Password, and peers) is for client accounts and 2FA discipline. Pick a maintained product with a solid security policy. Do not stash client passwords in an “extension notepad for convenience” without agency rules.",
      ],
      lists: [
        {
          intro: "Final minimum:",
          items: [
            "ruler and eyedropper (as needed)",
            "page SEO snapshot",
            "site: / operators",
            "UTM builder",
            "password manager",
            "keyword assistant or a spreadsheet",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Extensions save minutes on audits. Growing a query core in the results is a separate horizon after on-site work — typically planned over 2–6 months.",
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "programmy-seo",
    "operatory-poiska",
    "screaming-frog",
    "semanticheskoe-yadro",
    "google-analytics-tseli",
    "cookies",
  ],
};

/** ES overlay for chrome-rasshireniya-seo — same structure as RU JSON / EN. */
export const chromeRasshireniyaSeoEs: BlogPost = {
  slug: "chrome-rasshireniya-seo",
  title: "Extensiones de Chrome para SEO: un mínimo útil",
  date: "2019-11-14",
  category: "SEO",
  cover: "/images/blog/chrome-rasshireniya-seo/cover.webp",
  excerpt:
    "Qué extensiones de Chrome ayudan de verdad al trabajo SEO: auditoría de página, keywords, UTM, cookies, enlaces y herramientas web — con el aviso de que el catálogo de Chrome Web Store cambia.",
  lead: [
    "Las extensiones de Chrome aceleran tareas SEO: medir bloques del layout, muestrear color, un snapshot on-page rápido, búsqueda site:, UTM, cookies, abrir enlaces en lote. Son add-ons del navegador, no un motor de rankings.",
    "Abajo: un mínimo útil por tarea. Nombres y disponibilidad en Chrome Web Store cambian — mira frescura, reviews y permisos antes de instalar. No apiles una docena «por si acaso».",
  ],
  faq: [
    {
      q: "¿Las extensiones de Chrome suben rankings?",
      a: "No. Aceleran auditorías y recogida de datos. Los rankings vienen de contenido, técnica, enlaces y tiempo.",
    },
    {
      q: "¿Cuántas extensiones bastan?",
      a: "Unas 5–8 para los trabajos que de verdad haces. El resto frena el navegador y amplía la superficie de riesgo.",
    },
    {
      q: "¿Qué tiene de peligroso una extensión dudosa?",
      a: "Acceso a pestañas y datos, fugas, spoofing de página. Instala desde la store oficial y lee los permisos.",
    },
    {
      q: "¿Conviene un perfil de Chrome aparte para SEO?",
      a: "Sí, ayuda: las extensiones de trabajo quedan separadas de las personales, con menos conflictos y menos mezcla de tracking publicitario.",
    },
    {
      q: "¿Una extensión tipo Serpstat sustituye el servicio completo?",
      a: "No. Es un snapshot rápido. El set completo de keywords, enlaces e historial vive en la cuenta del servicio o en herramientas hermanas.",
    },
    {
      q: "¿Sigue haciendo falta Wordstat Assistant?",
      a: "Si la extensión ya no está en la store, usa Wordstat en sí, hojas de cálculo y asistentes o scripts actuales.",
    },
    {
      q: "¿Hace falta un gestor de contraseñas?",
      a: "Para cuentas de cliente — sí, esa clase de herramientas. Elige una opción mantenida y segura — no lo que nombrara un artículo de 2019.",
    },
    {
      q: "¿Las extensiones son un atajo a la primera página?",
      a: "No. La prep del sitio suele llevar cerca de un mes; crecer el núcleo de consultas en resultados se planifica típicamente a 2–6 meses tras arrancar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Cómo armar el stack de extensiones",
      level: 2,
      paras: [
        "Agrupa por trabajos: layout y UX, snapshot on-page SEO, keyword research, analytics y UTM, enlaces, seguridad de acceso. Una herramienta probada por trabajo.",
        "Antes de instalar, mira número de usuarios, última actualización y permisos pedidos. Apaga lo que no hayas usado en un mes.",
      ],
      lists: [
        {
          intro: "Reglas de higiene:",
          items: [
            "solo Chrome Web Store o fuente de confianza",
            "un perfil de trabajo aparte",
            "minimizar derechos de «leer todos los sitios»",
            "respaldar la lista de extensiones al cambiar de PC",
          ],
        },
      ],
      links: [
        {
          label: "Herramientas SEO",
          href: "/es/blog/programmy-seo/",
        },
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Layout y una mirada rápida a la página",
      level: 2,
      paras: [
        "PageRuler (y reglas similares) miden bloques — útil para briefs de diseño y checks responsive. ColorZilla muestrea el color del elemento en HEX/RGB para cuadrar con el mockup.",
        "Web Developer deja desactivar CSS/JS, ver el outline de headings y limpiar cookies de forma selectiva — útil al depurar plantillas y formularios. Es un kit de webmaster, no magia SEO.",
      ],
      lists: [
        {
          intro: "Cuándo ayuda:",
          items: [
            "aceptación de layout",
            "encontrar un outline H1–H6 roto",
            "revisar la página sin estilos",
            "cuadrar colores con la guía de marca",
          ],
        },
      ],
    },
    {
      title: "Snapshot SEO y búsqueda en el sitio",
      level: 2,
      paras: [
        "Extensiones como Serpstat Website SEO Checker sacan meta, headings, alt, peso de media, pistas de CMS y señales de índice en la página — un checklist cómodo para un pase manual. Las funciones completas suelen ir detrás de una cuenta del servicio.",
        "Herramientas de «buscar en el sitio actual» y similares arman `site:domain` en Google en un clic — un check rápido de índice sin teclear el operador a mano.",
      ],
      lists: [
        {
          intro: "No olvides:",
          items: [
            "cruzar con Webmaster / Search Console",
            "no confiar en un solo número de extensión",
            "para crawl masivo, usa un spider de escritorio",
          ],
        },
      ],
      links: [
        {
          label: "Operadores de búsqueda",
          href: "/es/blog/operatory-poiska/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "UTM, cookies y enlaces",
      level: 2,
      paras: [
        "Google Analytics URL Builder (y similares) arman enlaces con utm_source / medium / campaign — imprescindible para ads e informes. EditThisCookie ayuda a ver y editar cookies al depurar goals y auth (con cuidado en cuentas ajenas o de producción).",
        "LinkClump abre o copia un lote de enlaces de una vez — útil al revisar SERPs. No confundas velocidad de clic con engagement falso: es tu herramienta de trabajo, no un esquema para el sitio de otro.",
      ],
      lists: [
        {
          intro: "Encaje con analytics:",
          items: [
            "una plantilla UTM para el equipo",
            "revisar goals tras el tagging",
            "cookies solo para depurar — no para saltarse reglas de la plataforma",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "Cookies",
          href: "/es/blog/cookies/",
        },
      ],
    },
    {
      title: "Keyword research, contraseñas y un mínimo sensato",
      level: 2,
      paras: [
        "Los asistentes de Yandex Wordstat aceleran juntar keywords en un buffer o hoja — si existe un add-on actual. Si no, trabaja en Wordstat mismo y Excel o Google Sheets. El keyword research importa más que un botón de toolbar.",
        "Un gestor de contraseñas (Bitwarden, 1Password y similares) es para cuentas de cliente y disciplina de 2FA. Elige un producto mantenido con política de seguridad sólida. No metas contraseñas de cliente en un «bloc de notas de extensión por comodidad» sin reglas de agencia.",
      ],
      lists: [
        {
          intro: "Mínimo final:",
          items: [
            "regla y cuentagotas (si hace falta)",
            "snapshot SEO de página",
            "site: / operadores",
            "constructor UTM",
            "gestor de contraseñas",
            "asistente de keywords o una hoja",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Las extensiones ahorran minutos en auditorías. Crecer el núcleo de consultas en resultados es otro horizonte tras el trabajo on-site — se planifica típicamente a 2–6 meses.",
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "programmy-seo",
    "operatory-poiska",
    "screaming-frog",
    "semanticheskoe-yadro",
    "google-analytics-tseli",
    "cookies",
  ],
};

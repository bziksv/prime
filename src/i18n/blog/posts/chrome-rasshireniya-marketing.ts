import type { BlogPost } from "../../../data/blog";

/** EN overlay for chrome-rasshireniya-marketing — same structure as RU JSON. */
export const chromeRasshireniyaMarketingEn: BlogPost = {
  slug: "chrome-rasshireniya-marketing",
  title: "Chrome extensions for digital marketing: a stack by task",
  date: "2020-01-15",
  category: "Digital marketing",
  cover: "/images/blog/chrome-rasshireniya-marketing/cover-en.webp",
  excerpt:
    "Which classes of Chrome extensions help marketers: tasks and time tracking, screenshots and fonts, UTM and short links, email and security — without a catalog of 25 outdated names.",
  lead: [
    "Chrome extensions speed up a marketer’s routine: checklists, screenshots for briefs, font checks, UTM tags, a quick look at a competitor. They’re browser add-ons — not a shortcut to breakthrough results.",
    "Below: a stack by task, not an eternal “best of 25.” Alexa Rank and some old plugins are obsolete; check the Chrome Web Store before installing. For an on-page SEO slice, see the separate piece.",
  ],
  faq: [
    {
      q: "How does this differ from the SEO extensions article?",
      a: "That one covers URL audit, meta, operators, and crawl. This piece covers productivity, creative, communication, and marketing routine. They overlap on UTM and install hygiene.",
    },
    {
      q: "How many extensions should I install?",
      a: "One per task class you actually use. Twenty-five “just in case” slow the browser and widen risk.",
    },
    {
      q: "Is Alexa Traffic Rank still useful?",
      a: "Alexa as a product shut down. For traffic estimates use current panels and your own analytics — not old extensions.",
    },
    {
      q: "Can I send bulk email from Gmail extensions?",
      a: "Only to your own list with consent and within Google/ESP rules. Cold spam from a plugin is a path to a ban — not leads.",
    },
    {
      q: "What’s dangerous about shady extensions?",
      a: "Access to all tabs, session theft, page injection. Official store only; read permissions and reviews.",
    },
  ],
  sections: [
    {
      title: "Stack hygiene",
      level: 2,
      paras: [
        "Use a separate Chrome profile for work, keep “read and change data on all websites” permissions to a minimum, and disable anything unused for a month.",
        "The store catalog changes monthly: check the update date and user count. Don’t copy lists from 2019–2020 reviews year after year.",
      ],
      lists: [
        {
          intro: "Before installing:",
          items: [
            "the task you’re solving is clear",
            "the source is the Chrome Web Store",
            "permissions match the function",
            "a current peer exists if the old name vanished",
          ],
        },
      ],
      links: [
        {
          label: "Chrome extensions for SEO",
          href: "/en/blog/chrome-rasshireniya-seo/",
        },
      ],
    },
    {
      title: "Productivity and communication",
      level: 2,
      paras: [
        "Task trackers (Todoist-class) and time tracking (TMetric-class) help freelancers and agencies with hourly reporting. Password managers are essential for client accounts.",
        "Messenger hubs are handy, but don’t store client access and personal data there without security rules. Email helpers — for open tracking on your own newsletter, not spam to strangers’ addresses.",
      ],
      lists: [
        {
          intro: "Tool classes:",
          items: [
            "tasks and projects",
            "time tracking and billing",
            "password manager",
            "email with careful tracking",
            "short links / UTM builders",
          ],
        },
      ],
      links: [
        {
          label: "UTM parameters",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Email scraping: risks",
          href: "/en/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Creative, screenshots, and quick research",
      level: 2,
      paras: [
        "WhatFont and peers pull a font from a page — handy for a designer brief. FireShot and screenshot tools capture a full page with annotations for briefs and reports.",
        "Saving to idea boards and search-result previews speeds research. Don’t let them replace your own analytics and unit economics.",
        "SEO bars and “similar sites” give a quick hint, but figures are often rough. For serious audit — Search Console, your analytics, and dedicated SEO extensions.",
      ],
      lists: [
        {
          intro: "Marketers in the browser often need:",
          items: [
            "full-page screenshot plus annotations",
            "font and color identification",
            "a UTM builder",
            "a password manager",
            "one task tracker",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Extensions with access to the clipboard, passwords, and all sites are a higher-risk zone. Don’t install an “ROI calculator from an unknown publisher” for one button.",
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
  ],
  closing: [
    "Build a Chrome marketing stack by task: productivity, creative, links, and security — and keep it short. Don’t copy outdated catalogs of twenty-five names; for an on-page SEO slice, open the dedicated piece.",
  ],
  related: [
    "chrome-rasshireniya-seo",
    "utm-metki",
    "programmy-seo",
    "aydentika-brenda",
    "parsing-email",
    "project-manager",
  ],
};

/** ES overlay for chrome-rasshireniya-marketing — same structure as RU JSON / EN. */
export const chromeRasshireniyaMarketingEs: BlogPost = {
  slug: "chrome-rasshireniya-marketing",
  title: "Extensiones de Chrome para digital marketing: un stack por tarea",
  date: "2020-01-15",
  category: "Digital marketing",
  cover: "/images/blog/chrome-rasshireniya-marketing/cover.webp",
  excerpt:
    "Qué clases de extensiones de Chrome ayudan a marketers: tareas y time tracking, screenshots y fuentes, UTM y short links, email y seguridad — sin un catálogo de 25 nombres caducados.",
  lead: [
    "Las extensiones de Chrome aceleran la rutina del marketer: checklists, screenshots para briefs, chequeo de fuentes, etiquetas UTM, un vistazo rápido a un competidor. Son add-ons del navegador — no un atajo a resultados breakthrough.",
    "Abajo: un stack por tarea, no un «mejores 25» eterno. Alexa Rank y algunos plugins viejos están obsoletos; mira Chrome Web Store antes de instalar. Para un corte SEO on-page, ver la pieza aparte.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo de extensiones SEO?",
      a: "Aquel cubre auditoría de URL, meta, operadores y crawl. Esta pieza cubre productividad, creativo, comunicación y rutina de marketing. Se solapan en UTM e higiene de instalación.",
    },
    {
      q: "¿Cuántas extensiones debo instalar?",
      a: "Una por clase de tarea que uses de verdad. Veinticinco «por si acaso» ralentizan el navegador y amplían el riesgo.",
    },
    {
      q: "¿Alexa Traffic Rank sigue siendo útil?",
      a: "Alexa como producto cerró. Para estimaciones de tráfico usa paneles actuales y tu propia analytics — no extensiones viejas.",
    },
    {
      q: "¿Puedo enviar email masivo desde extensiones de Gmail?",
      a: "Solo a tu propia lista con consentimiento y dentro de las reglas de Google/ESP. Cold spam desde un plugin es camino a un ban — no a leads.",
    },
    {
      q: "¿Qué tiene de peligroso una extensión dudosa?",
      a: "Acceso a todas las pestañas, robo de sesión, inyección en la página. Solo la tienda oficial; lee permisos y reviews.",
    },
  ],
  sections: [
    {
      title: "Higiene del stack",
      level: 2,
      paras: [
        "Usa un perfil de Chrome aparte para el trabajo, mantén al mínimo los permisos de «leer y cambiar datos en todos los sitios» y desactiva lo que no uses en un mes.",
        "El catálogo de la tienda cambia cada mes: mira la fecha de update y el conteo de usuarios. No copies listas de reviews de 2019–2020 año tras año.",
      ],
      lists: [
        {
          intro: "Antes de instalar:",
          items: [
            "la tarea que resuelves está clara",
            "la fuente es Chrome Web Store",
            "los permisos cuadran con la función",
            "existe un peer actual si el nombre viejo desapareció",
          ],
        },
      ],
      links: [
        {
          label: "Extensiones de Chrome para SEO",
          href: "/es/blog/chrome-rasshireniya-seo/",
        },
      ],
    },
    {
      title: "Productividad y comunicación",
      level: 2,
      paras: [
        "Trackers de tareas (clase Todoist) y time tracking (clase TMetric) ayudan a freelancers y agencias con reporting por horas. Los password managers son esenciales para cuentas de clientes.",
        "Los hubs de messengers son cómodos, pero no guardes ahí accesos de clientes y datos personales sin reglas de seguridad. Helpers de email — para open tracking en tu propio newsletter, no spam a direcciones ajenas.",
      ],
      lists: [
        {
          intro: "Clases de tools:",
          items: [
            "tareas y proyectos",
            "time tracking y billing",
            "password manager",
            "email con tracking cuidadoso",
            "short links / builders de UTM",
          ],
        },
      ],
      links: [
        {
          label: "Parámetros UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Scraping de email: riesgos",
          href: "/es/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Creativo, screenshots e research rápido",
      level: 2,
      paras: [
        "WhatFont y pares sacan una fuente de una página — útil para un brief de diseño. FireShot y tools de screenshot capturan una página completa con anotaciones para briefs y reports.",
        "Guardar en boards de ideas y previews de resultados de búsqueda acelera el research. No dejes que sustituyan tu propia analytics y unit economics.",
        "Barras SEO y «sitios similares» dan una pista rápida, pero las cifras suelen ser aproximadas. Para una auditoría seria — Search Console, tu analytics y extensiones SEO dedicadas.",
      ],
      lists: [
        {
          intro: "Los marketers en el navegador suelen necesitar:",
          items: [
            "screenshot de página completa más anotaciones",
            "identificación de fuente y color",
            "un builder de UTM",
            "un password manager",
            "un tracker de tareas",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Las extensiones con acceso al portapapeles, contraseñas y todos los sitios son zona de mayor riesgo. No instales una «calculadora de ROI de un publisher desconocido» por un botón.",
        },
      ],
      links: [
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
      ],
    },
  ],
  closing: [
    "Arma un stack de marketing en Chrome por tarea: productividad, creativo, enlaces y seguridad — y mantenlo corto. No copies catálogos caducados de veinticinco nombres; para un corte SEO on-page, abre la pieza dedicada.",
  ],
  related: [
    "chrome-rasshireniya-seo",
    "utm-metki",
    "programmy-seo",
    "aydentika-brenda",
    "parsing-email",
    "project-manager",
  ],
};

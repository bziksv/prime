import type { BlogPost } from "../../../data/blog";

/** EN overlay for adminka-sayta — same structure as RU JSON. */
export const adminkaSaytaEn: BlogPost = {
  slug: "adminka-sayta",
  title: "Site admin panel: why you need a CMS and a control panel",
  date: "2020-09-01",
  category: "Digital marketing",
  cover: "/images/blog/adminka-sayta/cover-en.webp",
  excerpt:
    "What an admin panel and CMS are, how a managed site differs from hand-edited HTML, and what to watch with access, roles, and security.",
  lead: [
    "The admin panel is where teams edit pages, products, menus, and settings without changing files on the server. In everyday talk it’s often called a CMS: a content management system.",
    "Below: why business needs it, why life without a CMS gets expensive over time, and how to think about access. This is not a “best CMS” roundup or a guide to breaking into other people’s panels.",
  ],
  faq: [
    {
      q: "Are an admin panel and a CMS the same thing?",
      a: "Almost: CMS is the whole system; the admin is its staff UI. There are also custom panels without a branded CMS.",
    },
    {
      q: "Can you run a site without a CMS?",
      a: "Yes for rare static pages. On a catalog, blog, and frequent edits, hand HTML/FTP quickly becomes a bottleneck and error source.",
    },
    {
      q: "How does it differ from a customer account?",
      a: "Admin is for the site team. A personal account is for the buyer or service user. Different roles and permissions.",
    },
    {
      q: "Who should get access?",
      a: "Only people who actually publish. Split roles: editor, marketer, admin. Not one shared password for everyone.",
    },
    {
      q: "What about security?",
      a: "Strong passwords, 2FA where available, CMS/plugin updates, limiting the admin URL, backups. An outdated panel is a common breach point.",
    },
    {
      q: "Does the CMS choice affect SEO?",
      a: "Indirectly: speed, clean URLs, title/H1 templates, sitemap. The engine brand itself does not grant rankings.",
    },
    {
      q: "How do you detect another site’s CMS?",
      a: "By open signs in the code — see the CMS detection article. Breaking into an admin panel is not allowed.",
    },
  ],
  sections: [
    {
      title: "Why you need an admin panel",
      level: 2,
      paras: [
        "Without a panel every change is a developer task or hand edits to files and the database. With a CMS an editor publishes an article, changes a price or banner in a clear UI.",
        "For business that’s speed: promos, news, and stock don’t wait for a sprint window.",
      ],
      lists: [
        {
          intro: "Typical admin jobs:",
          items: [
            "pages, blog, categories",
            "product cards and availability",
            "menus, forms, redirects",
            "users and permissions",
            "basic SEO fields (title, description) in the template",
          ],
        },
      ],
    },
    {
      title: "A site with a CMS and without one",
      level: 2,
      paras: [
        "With a CMS, content and media go through an editor: less risk of breaking layout with a typo in a tag. Without a CMS the path is longer — FTP, finding the spot in a template, hand markup, checking.",
        "At dozens and hundreds of materials, hand mode doesn’t scale. Exception — a purpose-built static site with rare updates and a deploy process owned by developers.",
      ],
      lists: [
        {
          intro: "Without a panel, each photo or article often needs:",
          items: [
            "upload a file to hosting",
            "write the path in code or the DB",
            "not break neighboring blocks",
            "check the page by hand",
          ],
        },
      ],
      links: [
        {
          label: "How to detect a site’s CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Access and order on the team",
      level: 2,
      paras: [
        "Panels differ in UI and modules, but the rules are the same: who can change what, how passwords are recovered, where backups live.",
        "Don’t mix admin with a customer account. An editor doesn’t need every user’s orders under one password; a customer doesn’t need access to the site theme.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "unique accounts, not a shared login",
            "a “content only” role without dangerous settings",
            "core and plugin updates",
            "backup before major edits",
            "log out of the panel on shared computers",
          ],
        },
      ],
      links: [
        {
          label: "Personal account on a site",
          href: "/en/blog/lichnyy-kabinet/",
        },
        {
          label: "Content manager",
          href: "/en/blog/kontent-menedzher/",
        },
      ],
    },
  ],
  closing: [
    "An admin panel lets the team manage content without constant code edits. A CMS saves publish time; security and roles decide whether the panel becomes a risk point.",
  ],
};

/** ES overlay for adminka-sayta — same structure as RU JSON / EN. */
export const adminkaSaytaEs: BlogPost = {
  slug: "adminka-sayta",
  title: "Panel de admin del sitio: por qué necesitas un CMS y un control panel",
  date: "2020-09-01",
  category: "Digital marketing",
  cover: "/images/blog/adminka-sayta/cover.webp",
  excerpt:
    "Qué son un panel de admin y un CMS, en qué se diferencia un sitio gestionado del HTML editado a mano, y qué vigilar con accesos, roles y seguridad.",
  lead: [
    "El panel de admin es donde el equipo edita páginas, productos, menús y ajustes sin tocar archivos en el servidor. En el habla cotidiana a menudo se llama CMS: un sistema de gestión de contenido.",
    "Abajo: por qué lo necesita el negocio, por qué la vida sin CMS se encarece con el tiempo, y cómo pensar los accesos. Esto no es un roundup de «el mejor CMS» ni una guía para entrar en paneles ajenos.",
  ],
  faq: [
    {
      q: "¿Panel de admin y CMS son lo mismo?",
      a: "Casi: CMS es el sistema entero; el admin es su UI de staff. También hay paneles custom sin un CMS de marca.",
    },
    {
      q: "¿Se puede llevar un sitio sin CMS?",
      a: "Sí para páginas estáticas raras. Con catálogo, blog y ediciones frecuentes, HTML/FTP a mano se vuelve rápido un cuello de botella y fuente de errores.",
    },
    {
      q: "¿En qué se diferencia de una cuenta de cliente?",
      a: "El admin es para el equipo del sitio. La cuenta personal es para el comprador o usuario del servicio. Roles y permisos distintos.",
    },
    {
      q: "¿Quién debe tener acceso?",
      a: "Solo quien de verdad publica. Separa roles: editor, marketer, admin. No una contraseña compartida para todos.",
    },
    {
      q: "¿Y la seguridad?",
      a: "Contraseñas fuertes, 2FA donde exista, updates de CMS/plugins, limitar la URL de admin, backups. Un panel desactualizado es un punto habitual de breach.",
    },
    {
      q: "¿La elección de CMS afecta al SEO?",
      a: "De forma indirecta: velocidad, URLs limpias, plantillas de title/H1, sitemap. La marca del motor en sí no concede rankings.",
    },
    {
      q: "¿Cómo detectar el CMS de otro sitio?",
      a: "Por señales abiertas en el código — ver el artículo de detección de CMS. Entrar en un panel de admin no está permitido.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas un panel de admin",
      level: 2,
      paras: [
        "Sin panel, cada cambio es una tarea de desarrollador o ediciones a mano de archivos y la base de datos. Con un CMS un editor publica un artículo, cambia un precio o un banner en una UI clara.",
        "Para el negocio eso es velocidad: promos, noticias y stock no esperan la ventana de un sprint.",
      ],
      lists: [
        {
          intro: "Trabajos típicos del admin:",
          items: [
            "páginas, blog, categorías",
            "fichas de producto y disponibilidad",
            "menús, formularios, redirects",
            "usuarios y permisos",
            "campos SEO básicos (title, description) en la plantilla",
          ],
        },
      ],
    },
    {
      title: "Un sitio con CMS y sin él",
      level: 2,
      paras: [
        "Con CMS, contenido y media pasan por un editor: menos riesgo de romper el layout con un typo en un tag. Sin CMS el camino es más largo — FTP, encontrar el punto en una plantilla, markup a mano, revisar.",
        "Con decenas y cientos de materiales, el modo a mano no escala. Excepción — un sitio estático a propósito con updates raros y un proceso de deploy propiedad de los desarrolladores.",
      ],
      lists: [
        {
          intro: "Sin panel, cada foto o artículo a menudo necesita:",
          items: [
            "subir un archivo al hosting",
            "escribir la ruta en código o la DB",
            "no romper bloques vecinos",
            "revisar la página a mano",
          ],
        },
      ],
      links: [
        {
          label: "Cómo detectar el CMS de un sitio",
          href: "/es/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Accesos y orden en el equipo",
      level: 2,
      paras: [
        "Los paneles difieren en UI y módulos, pero las reglas son las mismas: quién puede cambiar qué, cómo se recuperan contraseñas, dónde viven los backups.",
        "No mezcles admin con una cuenta de cliente. Un editor no necesita los pedidos de todos los usuarios bajo una contraseña; un cliente no necesita acceso al theme del sitio.",
      ],
      lists: [
        {
          intro: "Mínimo de higiene:",
          items: [
            "cuentas únicas, no un login compartido",
            "un rol «solo contenido» sin ajustes peligrosos",
            "updates del core y de plugins",
            "backup antes de ediciones mayores",
            "cerrar sesión del panel en ordenadores compartidos",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta personal en un sitio",
          href: "/es/blog/lichnyy-kabinet/",
        },
        {
          label: "Content manager",
          href: "/es/blog/kontent-menedzher/",
        },
      ],
    },
  ],
  closing: [
    "Un panel de admin deja al equipo gestionar contenido sin ediciones constantes de código. Un CMS ahorra tiempo de publicación; la seguridad y los roles deciden si el panel se vuelve un punto de riesgo.",
  ],
};

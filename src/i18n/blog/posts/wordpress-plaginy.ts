import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-plaginy — same structure as RU JSON. */
export const wordpressPlaginyEn: BlogPost = {
  slug: "wordpress-plaginy",
  title: "How to install a WordPress plugin: catalog, ZIP, and FTP",
  date: "2017-12-14",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-plaginy/cover-en.webp",
  excerpt:
    "Three ways to install a plugin on WordPress: search in the admin, ZIP upload, and copy into wp-content/plugins — without a cult of “more installs = better” or a pile of unsupported extensions.",
  lead: [
    "Plugins extend WordPress: SEO, forms, cache, store. You install them from the admin catalog, by uploading a ZIP, or via FTP into `wp-content/plugins`, then activate.",
    "Below: install order and typical failures (nested archive, host upload bans). Which SEO plugins to pick lives in a separate piece; here it’s install and basic security hygiene.",
  ],
  faq: [
    {
      q: "How is this different from the SEO plugins article?",
      a: "That one covers which tool groups you need. Here — how to technically install and activate any plugin.",
    },
    {
      q: "Is FTP required?",
      a: "No. Usually \"Plugins → Add New\" or a ZIP upload is enough. FTP is a fallback if hosting blocks admin installs.",
    },
    {
      q: "Do many installs mean you can trust it?",
      a: "A compass, not a guarantee. Check updates, compatibility with your WP version, support reviews, and the permissions the plugin asks for.",
    },
    {
      q: "What should you do after install?",
      a: "Activate, configure, check the site, and back up if needed. Remove unused plugins — don't only deactivate.",
    },
    {
      q: "Can you install everything popular?",
      a: "No. Every plugin is code and risk. Take it for a task, not \"just in case.\"",
    },
  ],
  sections: [
    {
      title: "Before installing",
      level: 2,
      paras: [
        "Back up files and DB, especially on production. Check PHP and WordPress version and plugin compatibility. Staging makes conflicts easier to catch.",
        "Install extensions only from the official WordPress.org catalog or a clear vendor. \"Nulled\" and pirate packs are a common path to a backdoor.",
      ],
      lists: [
        {
          intro: "Minimum before clicking Install:",
          items: [
            "backup",
            "clear plugin job",
            "no duplicate of a tool you already have",
            "updates in recent months",
            "access rights under control",
          ],
        },
      ],
      links: [
        {
          label: "WordPress SEO plugins",
          href: "/en/blog/wordpress-seo-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Install from the admin catalog",
      level: 2,
      paras: [
        "In the dashboard: Plugins → Add New. Find the name, open the card, click Install, then Activate. Menu labels may differ slightly by translation and version.",
        "If the archive is \"double\" (ZIP inside ZIP with docs), the installer complains — unpack to the plugin folder with PHP files and upload a correct ZIP.",
      ],
      notes: [
        {
          title: "Popularity ≠ security",
          text: "The install counter helps filter abandoned projects, but doesn't replace checking the author, changelog, and compatibility notes for your theme.",
          kind: "tip",
        },
      ],
    },
    {
      title: "ZIP upload via the admin",
      level: 2,
      paras: [
        "On the same Add New page you can upload a plugin from your computer: pick the ZIP, install, activate. Handy for premium plugins from the developer's site.",
        "If hosting blocked admin installs (permissions, open_basedir, policies), switch to FTP or ask support to enable what's needed.",
      ],
    },
    {
      title: "Install via FTP or file manager",
      level: 2,
      paras: [
        "Connect over FTP or SFTP (FileZilla, WinSCP, etc.) or the host file manager. Unpack the plugin locally into one folder named after the plugin and upload it to `wp-content/plugins/`.",
        "In the admin the plugin appears in the list — activate it. Don't dump files into the plugins root without a folder: harder to remove and update.",
      ],
      tables: [
        {
          caption: "Where to put files",
          headers: ["Path", "What should be there"],
          rows: [
            ["wp-content/plugins/plugin-name/", "Plugin files"],
            ["Not site root", "Otherwise you mix it with core"],
            ["Not inside the theme", "A theme update will wipe the plugin"],
          ],
        },
      ],
      links: [
        {
          label: "WordPress admin",
          href: "/en/blog/wordpress-admin/",
        },
      ],
    },
    {
      title: "After activation",
      level: 2,
      paras: [
        "Open plugin settings, run the wizard, check key site pages. On a white screen deactivate via FTP (rename the folder) and sort out the conflict.",
        "Keep plugins updated. Remove unused ones: deactivated code still sits on disk.",
      ],
      lists: [
        {
          intro: "Ongoing hygiene:",
          items: [
            "one tool per job",
            "don't hoard \"for later\"",
            "test cache and forms after install",
            "backup before mass updates",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Main path — catalog or ZIP in the admin; FTP is fallback. Activation and setup are required; security beats \"install everything popular.\"",
        "SEO stack choice — in a separate article; dashboard login — in the WordPress admin piece.",
      ],
    },
  ],
  closing: [
    "Pick a plugin for the job, install from the catalog or ZIP, activate and check the site — then remove extras from `wp-content/plugins` so you don't accumulate risk.",
  ],
  related: [
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "wordpress-admin",
    "uskorenie-wordpress",
    "tema-wordpress",
    "adminka-sayta",
  ],
};

/** ES overlay for wordpress-plaginy — same structure as RU JSON / EN. */
export const wordpressPlaginyEs: BlogPost = {
  slug: "wordpress-plaginy",
  title: "Cómo instalar un plugin de WordPress: catálogo, ZIP y FTP",
  date: "2017-12-14",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-plaginy/cover.webp",
  excerpt:
    "Tres formas de instalar un plugin en WordPress: búsqueda en el admin, subida ZIP y copia a wp-content/plugins — sin culto a «más installs = mejor» ni un montón de extensiones sin soporte.",
  lead: [
    "Los plugins amplían WordPress: SEO, formularios, caché, tienda. Se instalan desde el catálogo del admin, subiendo un ZIP o vía FTP a `wp-content/plugins`, y luego se activan.",
    "Abajo: orden de instalación y fallos típicos (archivo anidado, bans de subida del host). Qué plugins SEO elegir vive en una pieza aparte; aquí es instalar e higiene básica de seguridad.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo de plugins SEO?",
      a: "Aquel cubre qué grupos de herramientas necesitas. Aquí — cómo instalar y activar técnicamente cualquier plugin.",
    },
    {
      q: "¿Hace falta FTP?",
      a: "No. Suele bastar «Plugins → Añadir nuevo» o una subida ZIP. FTP es un fallback si el hosting bloquea instalaciones desde el admin.",
    },
    {
      q: "¿Muchas installs significan que puedes confiar?",
      a: "Una brújula, no una garantía. Mira updates, compatibilidad con tu versión de WP, reviews de soporte y los permisos que pide el plugin.",
    },
    {
      q: "¿Qué hacer tras instalar?",
      a: "Activar, configurar, revisar el sitio y hacer backup si hace falta. Quita plugins sin uso — no solo desactives.",
    },
    {
      q: "¿Se puede instalar todo lo popular?",
      a: "No. Cada plugin es código y riesgo. Tómalo por una tarea, no «por si acaso».",
    },
  ],
  sections: [
    {
      title: "Antes de instalar",
      level: 2,
      paras: [
        "Haz backup de archivos y BD, sobre todo en producción. Comprueba versión de PHP y WordPress y la compatibilidad del plugin. Staging hace más fácil pillar conflictos.",
        "Instala extensiones solo del catálogo oficial de WordPress.org o de un vendor claro. Packs «nulled» y piratas son un camino habitual al backdoor.",
      ],
      lists: [
        {
          intro: "Mínimo antes de clicar Instalar:",
          items: [
            "backup",
            "trabajo claro del plugin",
            "sin duplicar una herramienta que ya tienes",
            "updates en los últimos meses",
            "derechos de acceso bajo control",
          ],
        },
      ],
      links: [
        {
          label: "Plugins SEO de WordPress",
          href: "/es/blog/wordpress-seo-plaginy/",
        },
        {
          label: "Seguridad en WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Instalar desde el catálogo del admin",
      level: 2,
      paras: [
        "En el dashboard: Plugins → Añadir nuevo. Busca el nombre, abre la ficha, clic en Instalar y luego Activar. Las etiquetas del menú pueden variar un poco según traducción y versión.",
        "Si el archivo es «doble» (ZIP dentro de ZIP con docs), el instalador se queja — descomprime hasta la carpeta del plugin con archivos PHP y sube un ZIP correcto.",
      ],
      notes: [
        {
          title: "Popularidad ≠ seguridad",
          text: "El contador de installs ayuda a filtrar proyectos abandonados, pero no sustituye revisar al autor, el changelog y las notas de compatibilidad con tu tema.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Subida ZIP vía el admin",
      level: 2,
      paras: [
        "En la misma página Añadir nuevo puedes subir un plugin desde tu ordenador: elige el ZIP, instala, activa. Útil para plugins premium del sitio del desarrollador.",
        "Si el hosting bloqueó instalaciones desde el admin (permisos, open_basedir, políticas), pasa a FTP o pide al soporte que habilite lo necesario.",
      ],
    },
    {
      title: "Instalar vía FTP o gestor de archivos",
      level: 2,
      paras: [
        "Conecta por FTP o SFTP (FileZilla, WinSCP, etc.) o el gestor de archivos del host. Descomprime el plugin en local en una carpeta con el nombre del plugin y súbela a `wp-content/plugins/`.",
        "En el admin el plugin aparece en la lista — actívalo. No tires archivos a la raíz de plugins sin carpeta: más difícil de quitar y actualizar.",
      ],
      tables: [
        {
          caption: "Dónde poner los archivos",
          headers: ["Ruta", "Qué debe haber"],
          rows: [
            ["wp-content/plugins/nombre-del-plugin/", "Archivos del plugin"],
            ["No la raíz del sitio", "Si no, lo mezclas con el core"],
            ["No dentro del tema", "Una update del tema borrará el plugin"],
          ],
        },
      ],
      links: [
        {
          label: "Admin de WordPress",
          href: "/es/blog/wordpress-admin/",
        },
        {
          label: "FTP",
          href: "/es/blog/ftp/",
        },
      ],
    },
    {
      title: "Tras la activación",
      level: 2,
      paras: [
        "Abre los ajustes del plugin, corre el wizard, revisa páginas clave del sitio. En pantalla blanca desactiva vía FTP (renombra la carpeta) y desentraña el conflicto.",
        "Mantén los plugins actualizados. Quita los que no uses: el código desactivado sigue en disco.",
      ],
      lists: [
        {
          intro: "Higiene continua:",
          items: [
            "una herramienta por trabajo",
            "no acumules «para después»",
            "prueba caché y formularios tras instalar",
            "backup antes de updates masivas",
          ],
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Camino principal — catálogo o ZIP en el admin; FTP es fallback. Activación y setup son obligatorios; la seguridad gana a «instalar todo lo popular».",
        "Elección del stack SEO — en un artículo aparte; login del dashboard — en la pieza del admin de WordPress.",
      ],
    },
  ],
  closing: [
    "Elige un plugin para el trabajo, instálalo desde el catálogo o ZIP, activa y revisa el sitio — luego quita extras de `wp-content/plugins` para no acumular riesgo.",
  ],
  related: [
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "wordpress-admin",
    "uskorenie-wordpress",
    "tema-wordpress",
    "adminka-sayta",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-ustanovka — same structure as RU JSON. */
export const wordpressUstanovkaEn: BlogPost = {
  slug: "wordpress-ustanovka",
  title: "How to install WordPress on hosting",
  date: "2017-04-20",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-ustanovka/cover-en.webp",
  excerpt:
    "Installing WordPress: hosting requirements, database, file upload, the install.php wizard, and first settings — without PHP 4.3 from 2017 guides and a Total Commander cult.",
  lead: [
    "WordPress runs on hosting with PHP and MySQL or MariaDB: create a database, put files in the site root, and run the install wizard. Next — admin login, permalinks, updates.",
    "Below: the current order. One-click installers in the host panel (Softaculous and similar) often do the same in minutes; the classic path matters when auto-install is unavailable or you need full control. PHP and DB version requirements are on wordpress.org — figures like PHP 4.3 from old articles are long obsolete.",
  ],
  faq: [
    {
      q: "Must I edit wp-config by hand?",
      a: "No. The install wizard often creates the config if the directory is writable. Hand-copying from the sample is a fallback.",
    },
    {
      q: "Where do the files go?",
      a: "Into the domain document root: usually `public_html`, `www`, or the domain folder in the panel. Not a random nested folder if the site should open from the root.",
    },
    {
      q: "How is install different from admin login?",
      a: "Install creates tables and the first user. Then login is `/wp-admin/`. Login and password reset are a separate article.",
    },
    {
      q: "Do I need paid hosting?",
      a: "For a practice blog free or local sometimes works. For commerce — a paid plan with backups, SSL, and a normal PHP version.",
    },
    {
      q: "Does install put you on page one in search?",
      a: "No. The CMS is only a platform. SEO is content, tech, and months of work; site prep is not page-one rankings. Share of the core is typically planned for two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "What you’ll need",
      level: 2,
      paras: [
        "A domain with DNS pointing to hosting, panel access (or FTP/SFTP), a fresh WordPress archive from the official site. Code editor and FTP client — optional; the host file manager is often enough.",
        "Before start ask the host: PHP version, MySQL/MariaDB, limits, how to create a DB. If you’re unsure about the plan type — sort hosting first.",
      ],
      lists: [
        {
          intro: "Minimum set:",
          items: [
            "hosting with current PHP",
            "MySQL/MariaDB database and a user with rights",
            "SFTP/FTP or a file manager",
            "official WordPress archive",
            "a strong password for the WP admin",
          ],
        },
      ],
      links: [
        {
          label: "What hosting is",
          href: "/en/blog/hosting/",
        },
        {
          label: "Domain registration",
          href: "/en/blog/registratsiya-domena/",
        },
      ],
    },
    {
      title: "Database",
      level: 2,
      paras: [
        "In the host panel create a database and user, attach the user to the DB with full rights. Save: DB name, login, password, host (often `localhost`, sometimes a separate host).",
        "Charset and collation — utf8mb4 if the panel offers a choice. Host support will help if textbook fields are missing.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Mixing up the DB name and user name or setting the wrong DB_HOST — the install wizard reports a DB connection error.",
        },
      ],
    },
    {
      title: "WordPress files on the server",
      level: 2,
      paras: [
        "Unpack the archive locally and upload the contents of the `wordpress` folder to the site root — so `wp-admin`, `wp-content`, `wp-includes`, and `index.php` sit side by side. Or upload the zip and unpack on the server if the panel can.",
        "SFTP beats outdated unencrypted FTP. Client name (FileZilla, panel, any manager) doesn’t matter — host, login, port, and directory do.",
      ],
    },
    {
      title: "Install wizard",
      level: 2,
      paras: [
        "Open `https://your-domain.example/wp-admin/install.php` (or the site root — redirect to install). Set language, DB details if asked, then site title, admin login, password, and email.",
        "Don’t use login `admin` and password `123456`. After success sign in at `/wp-admin/`. If you create the config by hand from `wp-config-sample.php` — fill DB data and unique security keys (generator on wordpress.org), save as `wp-config.php`.",
      ],
      lists: [
        {
          intro: "Classic order:",
          items: [
            "DB created",
            "files in the root",
            "install.php completed",
            "admin login",
            "permalinks and updates",
          ],
        },
      ],
      links: [
        {
          label: "WordPress admin login",
          href: "/en/blog/wordpress-admin/",
        },
      ],
    },
    {
      title: "One-click install in the host panel",
      level: 2,
      paras: [
        "Many hosts offer “install WordPress in one click.” Pick the domain, admin login and password — the script creates the DB and files. After that still open the admin, change the password if needed, and check updates.",
        "Auto-install saves time but doesn’t remove responsibility for backups, SSL, and core, theme, and plugin updates.",
      ],
    },
    {
      title: "Right after install",
      level: 2,
      paras: [
        "Enable HTTPS, set permalinks, remove demo content, install only needed plugins from the official catalog. Pick a theme for the job, not “the most downloaded picture.”",
        "Discourage search indexing while the site is still a draft. Security and speed are separate tracks.",
      ],
      lists: [
        {
          intro: "Day-one checklist:",
          items: [
            "strong password and admin email",
            "core updates",
            "SSL and redirect to HTTPS",
            "permalinks",
            "backup before plugin experiments",
          ],
        },
      ],
      links: [
        {
          label: "WordPress plugins",
          href: "/en/blog/wordpress-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "Choosing a theme",
          href: "/en/blog/tema-wordpress/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Installing WordPress is DB + files + wizard. After that hygiene matters more: passwords, updates, backups, sensible plugins.",
        "The official package and current PHP on hosting beat a “PHP 4 guide” from old articles.",
      ],
    },
  ],
  closing: [
    "Create the database, put official WordPress in the root, run install.php or the panel installer — and lock basic security hygiene right away. The CMS is ready; content and promotion are next.",
  ],
  related: [
    "wordpress-admin",
    "wordpress-plaginy",
    "wordpress-bezopasnost",
    "hosting",
    "tema-wordpress",
    "uskorenie-wordpress",
  ],
};

/** ES overlay for wordpress-ustanovka — same structure as RU JSON / EN. */
export const wordpressUstanovkaEs: BlogPost = {
  slug: "wordpress-ustanovka",
  title: "Cómo instalar WordPress en hosting",
  date: "2017-04-20",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-ustanovka/cover-es.webp",
  excerpt:
    "Instalar WordPress: requisitos de hosting, base de datos, subida de archivos, el wizard install.php y primeros ajustes — sin PHP 4.3 de guías de 2017 ni culto a Total Commander.",
  lead: [
    "WordPress corre en hosting con PHP y MySQL o MariaDB: crea una base de datos, pon los archivos en la raíz del sitio y ejecuta el wizard de instalación. Luego — login al admin, permalinks, updates.",
    "Abajo: el orden actual. Los instaladores de un clic del panel del host (Softaculous y similares) a menudo hacen lo mismo en minutos; el camino clásico importa cuando el auto-install no está o necesitas control total. Los requisitos de versión de PHP y BD están en wordpress.org — cifras como PHP 4.3 de artículos viejos están hace tiempo obsoletas.",
  ],
  faq: [
    {
      q: "¿Hay que editar wp-config a mano?",
      a: "No. El wizard de instalación a menudo crea el config si el directorio es escribible. Copiar a mano desde el sample es un fallback.",
    },
    {
      q: "¿Dónde van los archivos?",
      a: "Al document root del dominio: suele ser `public_html`, `www` o la carpeta del dominio en el panel. No una carpeta anidada al azar si el sitio debe abrir desde la raíz.",
    },
    {
      q: "¿En qué se diferencia instalar del login al admin?",
      a: "La instalación crea tablas y el primer usuario. Luego el login es `/wp-admin/`. Login y reset de contraseña son un artículo aparte.",
    },
    {
      q: "¿Hace falta hosting de pago?",
      a: "Para un blog de práctica a veces basta gratis o local. Para comercio — un plan de pago con backups, SSL y una versión normal de PHP.",
    },
    {
      q: "¿Instalar te pone en primera página de búsqueda?",
      a: "No. El CMS es solo una plataforma. El SEO es contenido, técnica y meses de trabajo; la prep del sitio no son rankings en primera página. La cuota del núcleo suele planificarse en dos a seis meses tras arrancar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Qué necesitarás",
      level: 2,
      paras: [
        "Un dominio con DNS apuntando al hosting, acceso al panel (o FTP/SFTP), un archivo fresco de WordPress del sitio oficial. Editor de código y cliente FTP — opcionales; el gestor de archivos del host suele bastar.",
        "Antes de empezar pregunta al host: versión de PHP, MySQL/MariaDB, límites, cómo crear una BD. Si no tienes claro el tipo de plan — ordena el hosting primero.",
      ],
      lists: [
        {
          intro: "Set mínimo:",
          items: [
            "hosting con PHP actual",
            "base de datos MySQL/MariaDB y un usuario con derechos",
            "SFTP/FTP o un gestor de archivos",
            "archivo oficial de WordPress",
            "una contraseña fuerte para el admin de WP",
          ],
        },
      ],
      links: [
        {
          label: "Qué es el hosting",
          href: "/es/blog/hosting/",
        },
        {
          label: "Registro de dominio",
          href: "/blog/registratsiya-domena/",
        },
        {
          label: "FTP",
          href: "/es/blog/ftp/",
        },
      ],
    },
    {
      title: "Base de datos",
      level: 2,
      paras: [
        "En el panel del host crea una base de datos y un usuario, adjunta el usuario a la BD con derechos completos. Guarda: nombre de BD, login, contraseña, host (a menudo `localhost`, a veces un host aparte).",
        "Charset y collation — utf8mb4 si el panel ofrece elección. El soporte del host ayuda si faltan campos de libro de texto.",
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "warning",
          text: "Confundir el nombre de la BD y el del usuario o poner mal el DB_HOST — el wizard de instalación reporta error de conexión a la BD.",
        },
      ],
    },
    {
      title: "Archivos de WordPress en el servidor",
      level: 2,
      paras: [
        "Descomprime el archivo en local y sube el contenido de la carpeta `wordpress` a la raíz del sitio — para que `wp-admin`, `wp-content`, `wp-includes` e `index.php` queden lado a lado. O sube el zip y descomprime en el servidor si el panel puede.",
        "SFTP gana al FTP plano sin cifrar y desfasado. El nombre del cliente (FileZilla, panel, cualquier gestor) no importa — host, login, puerto y directorio sí.",
      ],
    },
    {
      title: "Wizard de instalación",
      level: 2,
      paras: [
        "Abre `https://tu-dominio.example/wp-admin/install.php` (o la raíz del sitio — redirect a install). Elige idioma, datos de BD si te los pide, luego título del sitio, login de admin, contraseña y email.",
        "No uses login `admin` y contraseña `123456`. Tras el éxito entra en `/wp-admin/`. Si creas el config a mano desde `wp-config-sample.php` — rellena datos de BD y claves de seguridad únicas (generador en wordpress.org), guarda como `wp-config.php`.",
      ],
      lists: [
        {
          intro: "Orden clásico:",
          items: [
            "BD creada",
            "archivos en la raíz",
            "install.php completado",
            "login al admin",
            "permalinks y updates",
          ],
        },
      ],
      links: [
        {
          label: "Login al admin de WordPress",
          href: "/blog/wordpress-admin/",
        },
      ],
    },
    {
      title: "Instalación de un clic en el panel del host",
      level: 2,
      paras: [
        "Muchos hosts ofrecen «instalar WordPress en un clic». Elige el dominio, login y contraseña de admin — el script crea la BD y los archivos. Después abre igual el admin, cambia la contraseña si hace falta y revisa updates.",
        "El auto-install ahorra tiempo pero no quita la responsabilidad de backups, SSL y updates de core, tema y plugins.",
      ],
    },
    {
      title: "Justo después de instalar",
      level: 2,
      paras: [
        "Activa HTTPS, configura permalinks, quita contenido demo, instala solo los plugins necesarios del catálogo oficial. Elige un tema para el trabajo, no «la imagen más descargada».",
        "Desanima la indexación de búsqueda mientras el sitio sea un borrador. Seguridad y velocidad son vías aparte.",
      ],
      lists: [
        {
          intro: "Checklist del día uno:",
          items: [
            "contraseña fuerte y email de admin",
            "updates del core",
            "SSL y redirect a HTTPS",
            "permalinks",
            "backup antes de experimentar con plugins",
          ],
        },
      ],
      links: [
        {
          label: "Plugins de WordPress",
          href: "/blog/wordpress-plaginy/",
        },
        {
          label: "Seguridad en WordPress",
          href: "/blog/wordpress-bezopasnost/",
        },
        {
          label: "Elegir un tema",
          href: "/blog/tema-wordpress/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Instalar WordPress es BD + archivos + wizard. Después importa más la higiene: contraseñas, updates, backups, plugins sensatos.",
        "El paquete oficial y PHP actual en el hosting ganan a una «guía de PHP 4» de artículos viejos.",
      ],
    },
  ],
  closing: [
    "Crea la base de datos, pon WordPress oficial en la raíz, ejecuta install.php o el instalador del panel — y cierra ya la higiene básica de seguridad. El CMS está listo; contenido y promoción son lo siguiente.",
  ],
  related: [
    "wordpress-admin",
    "wordpress-plaginy",
    "wordpress-bezopasnost",
    "hosting",
    "tema-wordpress",
    "uskorenie-wordpress",
  ],
};

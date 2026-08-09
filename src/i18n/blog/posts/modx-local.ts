import type { BlogPost } from "../../../data/blog";

/** EN overlay for modx-local — same structure as RU JSON. */
export const modxLocalEn: BlogPost = {
  slug: "modx-local",
  title: "Installing MODX Revolution on a local server",
  date: "2018-02-14",
  category: "Websites",
  cover: "/images/blog/modx-local/cover-en.webp",
  excerpt:
    "How to install MODX Revolution locally: the package, virtual host, MySQL database, and setup wizard — using OSPanel/Open Server as an example, without outdated “no more than 5000 pages” limits.",
  lead: [
    "A local MODX Revolution install lets you build the site on your computer before hosting: edit templates, chunks, and snippets without risking the live domain.",
    "Below: the general order — download the package, unpack into the local server folder, create a DB, and run `/setup`. OSPanel/Open Server clicks and MODX wizard labels change — check current docs; the steps stay the same.",
  ],
  faq: [
    {
      q: "How does Traditional differ from other packages?",
      a: "Historically Traditional was a normal site install; Advanced/SDK — special scenarios and package development. Check current names and contents on the MODX download page.",
    },
    {
      q: "Is Open Server required?",
      a: "No. OSPanel, XAMPP, Laravel Herd, Docker, etc. work. You need PHP, a web server, and MySQL/MariaDB versions matching your MODX.",
    },
    {
      q: "Where is the admin after install?",
      a: "Usually `/manager`. Delete the `setup` folder after a successful install.",
    },
    {
      q: "Is MODX limited to “no more than 5000 pages”?",
      a: "Old reviews wrote that — it’s not a hard CMS law. Limits depend on hosting, cache, and architecture. For heavy e-commerce look at the stack and load, not a myth from a 2018 guide.",
    },
    {
      q: "Is an empty root password in phpMyAdmin okay?",
      a: "Only on an isolated local stack by default in some builds. Never on production.",
    },
  ],
  sections: [
    {
      title: "Why install MODX locally",
      level: 2,
      paras: [
        "Local is a sandbox: you can err, roll back the DB, and not take down prod. Handy for learning the manager, TV fields, and packages without paying hosting for every experiment.",
        "MODX is flexible in markup and logic, but it’s not a “big store button out of the box.” For high-load e-commerce compare stack and team skills — not only the CMS brand.",
      ],
      lists: [
        {
          intro: "Benefits of this approach:",
          items: [
            "free open-source engine",
            "flexible templates and chunks",
            "easy to learn before deploy",
            "same order as on hosting: files + DB + setup",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prep: local server and files",
      level: 2,
      paras: [
        "Install a local stack (often OSPanel / Open Server successor) and make sure you can start and restart it. Download the MODX Revolution package only from the official site.",
        "Unpack the archive into the virtual-host folder — e.g. `domains/modx.local` or your panel’s equivalent. Folder name = local site name. After copying files, restart the server so the host is picked up.",
      ],
      lists: [
        {
          intro: "Before setup check:",
          items: [
            "PHP and extensions match your MODX version requirements",
            "write permissions on needed directories",
            "a stub/files open at `http://modx.local/`",
            "antivirus isn’t blocking unpack",
          ],
        },
      ],
      notes: [
        {
          title: "Official source",
          text: "Don’t install MODX from random “CMS packs.” Official download lowers swap risk and old vulnerable archives.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Database",
      level: 2,
      paras: [
        "Via phpMyAdmin or CLI create a database and a MySQL/MariaDB user with rights on that DB. Locally some panels simplify phpMyAdmin login by default — don’t do that on prod.",
        "Remember DB name, user, password, and host (`localhost` / `127.0.0.1`). Prefer a non-default table prefix — a small security and clarity win with several sites on one server.",
      ],
    },
    {
      title: "Setup wizard /setup",
      level: 2,
      paras: [
        "Open `http://your-local-host/setup`, pick language and “new install.” Enter DB settings, check the connection and UTF-8, create the manager admin account.",
        "If pre-install checks show OK — finish install. Always delete the `setup` directory (the wizard usually offers it). Admin login — `/manager`.",
      ],
      tables: [
        {
          caption: "Wizard fields (meaning)",
          headers: ["Field", "Guide"],
          rows: [
            ["DB type", "mysql / mariadb by stack"],
            ["DB server", "localhost or 127.0.0.1"],
            ["User / password", "Created at the DB step"],
            ["DB name", "The same database"],
            ["Table prefix", "Your own, not the shared default"],
            ["Manager admin", "Unique login and strong password"],
          ],
        },
      ],
    },
    {
      title: "After install",
      level: 2,
      paras: [
        "Update MODX and packages, set friendly URLs, check the site locally. Before moving to hosting match PHP/MySQL versions and back up files and DB.",
        "Protect `/manager` on production like any admin: strong password, extra access limits if possible, updates.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Local MODX = files into a virtual host + DB + `/setup` + delete setup + login at `/manager`. Check panel UI and package details in current docs.",
        "Don’t lean on “5000-page limit” myths from old comparisons — weigh the task, load, and skills.",
      ],
    },
  ],
  closing: [
    "Set up a local stack, unpack the official MODX package into the host, create a DB, and run setup — then you can calmly build templates before deploy to production.",
  ],
  related: [
    "veb-server",
    "adminka-sayta",
    "wordpress-admin",
    "bezopasnost-sayta",
    "uznat-cms",
    "tema-wordpress",
  ],
};

/** ES overlay for modx-local — same structure as RU JSON / EN. */
export const modxLocalEs: BlogPost = {
  slug: "modx-local",
  title: "Instalar MODX Revolution en un servidor local",
  date: "2018-02-14",
  category: "Websites",
  cover: "/images/blog/modx-local/cover.webp",
  excerpt:
    "Cómo instalar MODX Revolution en local: el paquete, el virtual host, la base MySQL y el asistente de setup — con OSPanel/Open Server de ejemplo, sin límites obsoletos de «no más de 5000 páginas».",
  lead: [
    "Una instalación local de MODX Revolution te deja montar el sitio en el ordenador antes del hosting: editar plantillas, chunks y snippets sin arriesgar el dominio en vivo.",
    "Abajo: el orden general — descargar el paquete, descomprimir en la carpeta del servidor local, crear una BD y ejecutar `/setup`. Los clics de OSPanel/Open Server y las etiquetas del wizard de MODX cambian — mira docs actuales; los pasos se mantienen.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia Traditional de otros paquetes?",
      a: "Históricamente Traditional era una instalación normal de sitio; Advanced/SDK — escenarios especiales y desarrollo de paquetes. Revisa nombres y contenidos actuales en la página de descarga de MODX.",
    },
    {
      q: "¿Open Server es obligatorio?",
      a: "No. OSPanel, XAMPP, Laravel Herd, Docker, etc. sirven. Necesitas PHP, un servidor web y versiones MySQL/MariaDB que encajen con tu MODX.",
    },
    {
      q: "¿Dónde está el admin tras instalar?",
      a: "Suele ser `/manager`. Borra la carpeta `setup` tras una instalación correcta.",
    },
    {
      q: "¿MODX está limitado a «no más de 5000 páginas»?",
      a: "Reviews viejos lo escribían — no es una ley dura del CMS. Los límites dependen del hosting, la caché y la arquitectura. Para e-commerce pesado mira el stack y la carga, no un mito de una guía de 2018.",
    },
    {
      q: "¿Está bien una contraseña root vacía en phpMyAdmin?",
      a: "Solo en un stack local aislado por defecto en algunos builds. Nunca en producción.",
    },
  ],
  sections: [
    {
      title: "Por qué instalar MODX en local",
      level: 2,
      paras: [
        "Local es un sandbox: puedes errar, revertir la BD y no tumbar prod. Útil para aprender el manager, campos TV y paquetes sin pagar hosting por cada experimento.",
        "MODX es flexible en markup y lógica, pero no es un «botón de tienda grande de fábrica». Para e-commerce de alta carga compara stack y skills del equipo — no solo la marca del CMS.",
      ],
      lists: [
        {
          intro: "Ventajas de este enfoque:",
          items: [
            "motor open-source gratis",
            "plantillas y chunks flexibles",
            "fácil de aprender antes del deploy",
            "mismo orden que en hosting: archivos + BD + setup",
          ],
        },
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
        {
          label: "Panel de administración del sitio",
          href: "/es/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prep: servidor local y archivos",
      level: 2,
      paras: [
        "Instala un stack local (a menudo OSPanel / sucesor de Open Server) y asegúrate de poder arrancarlo y reiniciarlo. Descarga el paquete MODX Revolution solo desde el sitio oficial.",
        "Descomprime el archivo en la carpeta del virtual host — p. ej. `domains/modx.local` o el equivalente de tu panel. Nombre de carpeta = nombre del sitio local. Tras copiar archivos, reinicia el servidor para que el host se recoja.",
      ],
      lists: [
        {
          intro: "Antes del setup comprueba:",
          items: [
            "PHP y extensiones encajan con los requisitos de tu versión de MODX",
            "permisos de escritura en los directorios necesarios",
            "un stub/archivos abren en `http://modx.local/`",
            "el antivirus no bloquea la descompresión",
          ],
        },
      ],
      notes: [
        {
          title: "Fuente oficial",
          text: "No instales MODX desde «packs de CMS» al azar. La descarga oficial baja el riesgo de swap y de archivos vulnerables viejos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Base de datos",
      level: 2,
      paras: [
        "Vía phpMyAdmin o CLI crea una base de datos y un usuario MySQL/MariaDB con derechos sobre esa BD. En local algunos paneles simplifican el login de phpMyAdmin por defecto — no lo hagas en prod.",
        "Recuerda nombre de BD, usuario, contraseña y host (`localhost` / `127.0.0.1`). Prefiere un prefijo de tablas no por defecto — una pequeña ganancia de seguridad y claridad con varios sitios en un servidor.",
      ],
    },
    {
      title: "Asistente de setup /setup",
      level: 2,
      paras: [
        "Abre `http://tu-host-local/setup`, elige idioma e «instalación nueva». Introduce settings de BD, comprueba la conexión y UTF-8, crea la cuenta admin del manager.",
        "Si los checks pre-instalación muestran OK — termina la instalación. Borra siempre el directorio `setup` (el wizard suele ofrecerlo). Login de admin — `/manager`.",
      ],
      tables: [
        {
          caption: "Campos del wizard (sentido)",
          headers: ["Campo", "Guía"],
          rows: [
            ["Tipo de BD", "mysql / mariadb según el stack"],
            ["Servidor de BD", "localhost o 127.0.0.1"],
            ["Usuario / contraseña", "Creados en el paso de BD"],
            ["Nombre de BD", "La misma base de datos"],
            ["Prefijo de tablas", "El tuyo, no el default compartido"],
            ["Admin del manager", "Login único y contraseña fuerte"],
          ],
        },
      ],
    },
    {
      title: "Tras instalar",
      level: 2,
      paras: [
        "Actualiza MODX y paquetes, configura friendly URLs, revisa el sitio en local. Antes de pasar a hosting alinea versiones PHP/MySQL y haz backup de archivos y BD.",
        "Protege `/manager` en producción como cualquier admin: contraseña fuerte, límites extra de acceso si puedes, actualizaciones.",
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "MODX local = archivos al virtual host + BD + `/setup` + borrar setup + login en `/manager`. Revisa la UI del panel y detalles del paquete en docs actuales.",
        "No te apoyes en mitos del «límite de 5000 páginas» de comparativas viejas — pesa la tarea, la carga y las skills.",
      ],
    },
  ],
  closing: [
    "Monta un stack local, descomprime el paquete oficial de MODX en el host, crea una BD y ejecuta setup — luego puedes montar plantillas con calma antes del deploy a producción.",
  ],
  related: [
    "veb-server",
    "adminka-sayta",
    "wordpress-admin",
    "bezopasnost-sayta",
    "uznat-cms",
    "tema-wordpress",
  ],
};

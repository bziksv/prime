import type { BlogPost } from "../../../data/blog";

/** EN overlay for ftp — same structure as RU JSON. */
export const ftpEn: BlogPost = {
  slug: "ftp",
  title: "FTP: what it is and how to work with site files",
  date: "2020-11-30",
  category: "Hosting",
  cover: "/images/blog/ftp/cover-en.webp",
  excerpt:
    "FTP is a protocol for moving files to hosting: why you need a client, how to connect, why FileZilla helps, and why SFTP/FTPS beat plain FTP with a password.",
  lead: [
    "FTP (File Transfer Protocol) is a way to copy files between your computer and the site server: upload a theme, download a backup, fix permissions, reach places the CMS admin can’t.",
    "Below: why you need a client, how to connect, typical jobs, and security. FileZilla and hosting-panel UIs change — use current Help. For passwords prefer SFTP or FTPS over open FTP.",
  ],
  faq: [
    {
      q: "Is FTP required if I have WordPress?",
      a: "Not always: much is done in the admin and the host’s file manager. FTP/SFTP matters when admin is down, you edit code/config, or move large folders.",
    },
    {
      q: "Why is SFTP better than FTP?",
      a: "SFTP runs over SSH with encryption. Plain FTP may send password and data in clear text — risky on untrusted networks.",
    },
    {
      q: "Where do I get host, login, and password?",
      a: "In the host’s email/panel: FTP/SFTP access. Sometimes a separate FTP account with limited rights is safer than root.",
    },
    {
      q: "Is FileZilla the only client?",
      a: "No. It’s popular and cross-platform, but there’s also WinSCP, Cyberduck, and built-in managers in IDEs/hosting panels.",
    },
    {
      q: "Can I edit wp-config over FTP?",
      a: "Yes, technically. Backup first; a config typo takes the site down. Don’t paste DB passwords into chats.",
    },
    {
      q: "What is chmod / permissions?",
      a: "Access rights for files and folders on the server. Too open — a security hole; too tight — the site can’t write cache/uploads.",
    },
    {
      q: "Should I store the password in the client?",
      a: "Carefully: on a shared PC, better not. Use a password manager and a separate FTP user with minimal rights.",
    },
    {
      q: "What if a large upload fails mid-way?",
      a: "Many clients support resume. Verify integrity after; for backups an archive via the hosting panel is sometimes safer.",
    },
  ],
  sections: [
    {
      title: "Why you need an FTP client",
      level: 2,
      paras: [
        "The client syncs your PC with folders on the server: upload, download, rename, delete, change permissions.",
        "Typical jobs: upload static files, fix a white-screen WP site, pull a copy of `wp-content`, remove malware after a breach (after a backup), rename a plugin install folder.",
        "Not every edit should go over FTP: content and media in the CMS are safer via built-in tools when they work.",
      ],
      lists: [
        {
          intro: "What people usually do:",
          items: [
            "upload/download files and folders",
            "change permissions (chmod)",
            "rename and delete",
            "access when the admin is down.",
          ],
        },
      ],
    },
    {
      title: "How to connect",
      level: 2,
      paras: [
        "You need a host (domain or IP / technical address), port (21 for FTP, often 22 for SFTP — confirm with the host), login and password or a key.",
        "Create the site in the client’s site manager; save settings without syncing the password to a cloud vault on someone else’s laptop.",
        "After login, left is local files, right is the server (classic FileZilla layout). Transfer by drag-and-drop or transfer buttons. Panel labels may change — the idea stays.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t sign in blind",
          text: "Confirm you’re connecting to your own host using the provider’s HTTPS docs. Phishing “FTP clients” from unknown builds are a separate risk.",
        },
      ],
      links: [
        {
          label: "Hosting",
          href: "/en/blog/hosting/",
        },
        {
          label: "Hosting control panel",
          href: "/en/blog/veb-interfeys/",
        },
      ],
    },
    {
      title: "FileZilla and alternatives",
      level: 2,
      paras: [
        "FileZilla is often praised for cross-platform support, a site manager, resume, and logs. It’s a handy start — not the industry’s only standard.",
        "Download the client from the official source. Third-party “builds with an accelerator” sometimes bundle adware.",
        "On Windows many pick WinSCP; on macOS — Cyberduck / Transmit. Cursor/VS Code and some hosting panels have their own file access.",
      ],
      lists: [
        {
          intro: "Benefits of a good client:",
          items: [
            "resume after a drop",
            "a file queue",
            "an error log",
            "working across several folders",
            "SFTP/FTPS support.",
          ],
        },
      ],
    },
    {
      title: "Security and practice",
      level: 2,
      paras: [
        "Prefer SFTP/FTPS. Turn off anonymous FTP if you don’t need it.",
        "Don’t put password-bearing backups in a public `httpdocs` without protection. After installing a plugin/theme, remove or lock leftover installers.",
        "Before mass-replacing theme files — backup. Live edits with no copy are a common downtime cause.",
      ],
      lists: [],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "WordPress plugins",
          href: "/en/blog/wordpress-plaginy/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "FTP/SFTP is access to site files from your computer.",
        "A client is for transfer, permissions, and emergency access — it doesn’t replace the admin for content.",
        "An encrypted channel and care with passwords beat “convenient” open FTP.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Create SFTP access in the hosting panel, connect with a client from the official site, and do a test upload into a temporary folder — calmer than editing prod blind at the first white screen.",
  ],
  related: [
    "hosting",
    "veb-interfeys",
    "wordpress-ustanovka",
    "wordpress-bezopasnost",
    "wordpress-plaginy",
    "wordpress-admin",
  ],
};

/** ES overlay for ftp — same structure as RU JSON / EN gold. */
export const ftpEs: BlogPost = {
  slug: "ftp",
  title: "FTP: qué es y cómo trabajar con los archivos del sitio",
  date: "2020-11-30",
  category: "Hosting",
  cover: "/images/blog/ftp/cover-es.webp",
  excerpt:
    "FTP es un protocolo para mover archivos al hosting: por qué hace falta un cliente, cómo conectar, por qué FileZilla ayuda y por qué SFTP/FTPS ganan al FTP plano con contraseña.",
  lead: [
    "FTP (File Transfer Protocol) es una forma de copiar archivos entre tu ordenador y el servidor del sitio: subir un tema, bajar un backup, arreglar permisos, llegar a sitios que el admin del CMS no alcanza.",
    "Abajo: por qué necesitas un cliente, cómo conectar, tareas típicas y seguridad. Las UIs de FileZilla y del panel de hosting cambian — usa la Help actual. Para contraseñas, preferir SFTP o FTPS frente a FTP abierto.",
  ],
  faq: [
    {
      q: "¿Hace falta FTP si tengo WordPress?",
      a: "No siempre: mucho se hace en el admin y en el gestor de archivos del host. FTP/SFTP importa cuando el admin cae, editas código/config o mueves carpetas grandes.",
    },
    {
      q: "¿Por qué SFTP es mejor que FTP?",
      a: "SFTP va sobre SSH con cifrado. El FTP plano puede enviar contraseña y datos en claro — arriesgado en redes no confiables.",
    },
    {
      q: "¿Dónde saco host, login y contraseña?",
      a: "En el email/panel del host: acceso FTP/SFTP. A veces un usuario FTP aparte con derechos limitados es más seguro que root.",
    },
    {
      q: "¿FileZilla es el único cliente?",
      a: "No. Es popular y multiplataforma, pero también hay WinSCP, Cyberduck y gestores integrados en IDEs/paneles de hosting.",
    },
    {
      q: "¿Puedo editar wp-config por FTP?",
      a: "Sí, técnicamente. Haz backup antes; un typo en la config tumba el sitio. No pegues contraseñas de BD en chats.",
    },
    {
      q: "¿Qué es chmod / permisos?",
      a: "Derechos de acceso a archivos y carpetas en el servidor. Demasiado abiertos — agujero de seguridad; demasiado cerrados — el sitio no puede escribir cache/uploads.",
    },
    {
      q: "¿Debo guardar la contraseña en el cliente?",
      a: "Con cuidado: en un PC compartido, mejor no. Usa un gestor de contraseñas y un usuario FTP aparte con derechos mínimos.",
    },
    {
      q: "¿Y si una subida grande falla a mitad?",
      a: "Muchos clientes soportan reanudación. Verifica integridad después; para backups a veces es más seguro un archivo vía el panel del hosting.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta un cliente FTP",
      level: 2,
      paras: [
        "El cliente sincroniza tu PC con carpetas en el servidor: subir, bajar, renombrar, borrar, cambiar permisos.",
        "Tareas típicas: subir estáticos, arreglar un WP en pantalla blanca, sacar una copia de `wp-content`, quitar malware tras un breach (después del backup), renombrar la carpeta de un plugin.",
        "No toda edición debe ir por FTP: contenido y media en el CMS son más seguros con las herramientas propias cuando funcionan.",
      ],
      lists: [
        {
          intro: "Lo que suele hacerse:",
          items: [
            "subir/bajar archivos y carpetas",
            "cambiar permisos (chmod)",
            "renombrar y borrar",
            "acceder cuando el admin está caído",
          ],
        },
      ],
    },
    {
      title: "Cómo conectar",
      level: 2,
      paras: [
        "Necesitas host (dominio o IP / dirección técnica), puerto (21 para FTP, a menudo 22 para SFTP — confirma con el host), login y contraseña o una clave.",
        "Crea el sitio en el gestor de sitios del cliente; guarda ajustes sin sincronizar la contraseña a un vault en la nube en el portátil de otro.",
        "Tras el login, izquierda son archivos locales, derecha el servidor (layout clásico de FileZilla). Transfiere con drag-and-drop o botones. Las etiquetas del panel pueden cambiar — la idea se mantiene.",
      ],
      lists: [],
      notes: [
        {
          kind: "tip",
          title: "No entres a ciegas",
          text: "Confirma que te conectas a tu propio host con la documentación HTTPS del proveedor. Clientes FTP phishing de builds desconocidos son otro riesgo.",
        },
      ],
      links: [
        {
          label: "Hosting",
          href: "/blog/hosting/",
        },
        {
          label: "Panel de control del hosting",
          href: "/blog/veb-interfeys/",
        },
      ],
    },
    {
      title: "FileZilla y alternativas",
      level: 2,
      paras: [
        "FileZilla suele destacarse por soporte multiplataforma, gestor de sitios, reanudación y logs. Es un buen inicio — no el único estándar del sector.",
        "Descarga el cliente de la fuente oficial. «Builds con acelerador» de terceros a veces meten adware.",
        "En Windows muchos eligen WinSCP; en macOS — Cyberduck / Transmit. Cursor/VS Code y algunos paneles de hosting tienen su propio acceso a archivos.",
      ],
      lists: [
        {
          intro: "Ventajas de un buen cliente:",
          items: [
            "reanudación tras un corte",
            "cola de archivos",
            "log de errores",
            "trabajo en varias carpetas",
            "soporte SFTP/FTPS",
          ],
        },
      ],
    },
    {
      title: "Seguridad y práctica",
      level: 2,
      paras: [
        "Prefiere SFTP/FTPS. Apaga FTP anónimo si no lo necesitas.",
        "No dejes backups con contraseña en un `httpdocs` público sin protección. Tras instalar un plugin/tema, quita o bloquea instaladores sobrantes.",
        "Antes de reemplazar en masa archivos del tema — backup. Editar en vivo sin copia es una causa habitual de downtime.",
      ],
      lists: [],
      links: [
        {
          label: "Seguridad en WordPress",
          href: "/blog/wordpress-bezopasnost/",
        },
        {
          label: "Plugins de WordPress",
          href: "/blog/wordpress-plaginy/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "FTP/SFTP es acceso a los archivos del sitio desde tu ordenador.",
        "Un cliente sirve para transferir, permisos y acceso de emergencia — no sustituye el admin para el contenido.",
        "Un canal cifrado y cuidado con las contraseñas ganan al FTP abierto «conveniente».",
      ],
      lists: [],
    },
  ],
  closing: [
    "Crea acceso SFTP en el panel del hosting, conecta con un cliente del sitio oficial y haz una subida de prueba a una carpeta temporal — más calmado que editar prod a ciegas en la primera pantalla blanca.",
  ],
  related: [
    "hosting",
    "veb-interfeys",
    "wordpress-ustanovka",
    "wordpress-bezopasnost",
    "wordpress-plaginy",
    "wordpress-admin",
  ],
};

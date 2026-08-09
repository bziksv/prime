import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-admin — same structure as RU JSON. */
export const wordpressAdminEn: BlogPost = {
  slug: "wordpress-admin",
  title: "How to open the WordPress admin and restore access",
  date: "2018-03-23",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-admin/cover-en.webp",
  excerpt:
    "Signing into wp-admin and wp-login.php, email password recovery, reset via hosting, and typical cache-related failures — without advice to keep the login admin.",
  lead: [
    "The WordPress admin is the panel where you publish posts, edit pages, and install plugins. Usual entry: `https://your-site.example/wp-admin/` or `/wp-login.php`.",
    "Below: how to open the login form, what to do with a forgotten password, when to touch the database on hosting, and why cookies or cache get in the way. This is not a guide to hacking other people’s sites and not a call to live with the login `admin`.",
  ],
  faq: [
    {
      q: "How does wp-admin differ from wp-login.php?",
      a: "Both lead to auth. `/wp-admin/` opens the dashboard after login; `/wp-login.php` is the login form. On some sites a security plugin changes the login URL.",
    },
    {
      q: "Why won't /wp-admin/ open?",
      a: "Different login URL, HTTPS redirect, protection plugin, cache, wrong domain (www/non-www), or the site is down. Check the address from the host or developer email.",
    },
    {
      q: "Is keeping the login admin safe?",
      a: "No — it's a common brute-force target. Set a unique admin username and strong password; enable 2FA where possible.",
    },
    {
      q: "How is this different from the site-admin article?",
      a: "That one covers why a CMS and roles exist. Here — specifically WordPress login and access recovery.",
    },
    {
      q: "Is the phpMyAdmin password still MD5?",
      a: "Old guides said MD5. Modern WordPress uses stronger hashing; host panels often have a \"reset WP password\" tool without hand MD5. Check current docs.",
    },
  ],
  sections: [
    {
      title: "How to open the admin login",
      level: 2,
      paras: [
        "In the address bar open `https://your-domain.example/wp-admin/`. If the form doesn't show, try `https://your-domain.example/wp-login.php`. Use your domain; prefer HTTPS.",
        "After WordPress install, login and password are set at the install step (or come from the developer or host). \"Remember me\" is fine on a personal device and risky on a shared one.",
      ],
      lists: [
        {
          intro: "Before typing the password check:",
          items: [
            "keyboard layout and Caps Lock",
            "correct domain (www / non-www, staging subdomain)",
            "that it's your site, not a phishing copy",
            "whether a security plugin changed the login URL",
          ],
        },
      ],
      links: [
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
      notes: [
        {
          title: "Don't keep admin",
          text: "Old instructions suggested the login `admin` \"if you didn't change anything.\" Today that's a bad habit: change the administrator username and password, limit login attempts.",
          kind: "tip",
        },
      ],
    },
    {
      title: "If you forgot the password",
      level: 2,
      paras: [
        "On the login form click \"Lost your password?\" (wording may differ). Enter the admin username or email — WordPress sends a link to the user's email.",
        "Mail sometimes lands in spam or never sends because of host mail settings. Then check the mailbox from `wp-config` or the user profile, or ask hosting or the developer to reset with their tool.",
      ],
      lists: [
        {
          intro: "Try this order:",
          items: [
            "recovery link on the login form",
            "email plus Spam folder",
            "login from a device with a live session → change password in the profile",
            "reset tool in the host panel",
            "only then — edit users in the DB",
          ],
        },
      ],
    },
    {
      title: "Reset via hosting and the database",
      level: 2,
      paras: [
        "Many hosts can reset the WordPress password from their panel — prefer that over hand edits. If you go into phpMyAdmin: back up the DB, find the users table (often `wp_users`; the prefix may differ), update the password the way current WordPress or host docs recommend.",
        "Don't blindly copy 2018 screenshots that say \"type the password and pick MD5\": the hash algorithm changed. A mistake in the users table can lock everyone out.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Cache, cookies, and other failures",
      level: 2,
      paras: [
        "If the password is right but login \"breaks,\" clear site cookies and browser cache; temporarily disable aggressive blockers. On the site side, cache plugins, firewalls, and login-attempt limits after brute force get in the way.",
        "Check you're opening the same protocol and host you installed WP on. Mixing `http`/`https` or mirrors sometimes loops redirects on the login form.",
      ],
      tables: [
        {
          caption: "What to check when login fails",
          headers: ["Symptom", "Where to look"],
          rows: [
            [
              "Wrong credentials",
              "Layout, another user, email reset",
            ],
            ["White screen / redirect", "Plugins, HTTPS, cache"],
            ["No email", "Spam, host mail, SMTP"],
            ["404 on wp-login", "Changed login URL, site move"],
            ["IP block", "Protection limits, host firewall"],
          ],
        },
      ],
    },
    {
      title: "After login: hygiene minimum",
      level: 2,
      paras: [
        "Change a weak password, check the user list and extra accounts, update WordPress, themes, and plugins. For ongoing work a password manager and 2FA help.",
        "General CMS and roles logic — in the site-admin article; WP hardening — in the security piece.",
      ],
      lists: [
        {
          intro: "Right after restoring access:",
          items: [
            "new unique password",
            "check users with the Administrator role",
            "core and plugin updates",
            "backup",
            "2FA / login-attempt limits",
          ],
        },
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Standard path — `/wp-admin/` or `/wp-login.php`, then email recovery. Touch the DB only with a backup and a current hash-reset method.",
        "Don't publish other people's logins and don't try to guess access to sites you don't manage.",
      ],
    },
  ],
  closing: [
    "Open the login form on your domain, reset the password via email or the host panel, and harden the administrator account right away — so the WordPress admin is a work tool again, not a quest.",
  ],
  related: [
    "adminka-sayta",
    "wordpress-bezopasnost",
    "menedzher-paroley",
    "uskorenie-wordpress",
    "tema-wordpress",
    "bezopasnost-sayta",
  ],
};

/** ES overlay for wordpress-admin — same structure as RU JSON / EN. */
export const wordpressAdminEs: BlogPost = {
  slug: "wordpress-admin",
  title: "Cómo abrir el admin de WordPress y recuperar el acceso",
  date: "2018-03-23",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-admin/cover.webp",
  excerpt:
    "Entrar a wp-admin y wp-login.php, recuperación de contraseña por email, reset vía hosting y fallos típicos de caché — sin consejo de quedarte con el login admin.",
  lead: [
    "El admin de WordPress es el panel donde publicas posts, editas páginas e instalas plugins. Entrada habitual: `https://tu-sitio.example/wp-admin/` o `/wp-login.php`.",
    "Abajo: cómo abrir el formulario de login, qué hacer con una contraseña olvidada, cuándo tocar la base de datos en el hosting y por qué cookies o caché estorban. Esto no es una guía para hackear sitios ajenos ni una llamada a vivir con el login `admin`.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia wp-admin de wp-login.php?",
      a: "Ambos llevan a la auth. `/wp-admin/` abre el dashboard tras el login; `/wp-login.php` es el formulario. En algunos sitios un plugin de seguridad cambia la URL de login.",
    },
    {
      q: "¿Por qué no abre /wp-admin/?",
      a: "URL de login distinta, redirect HTTPS, plugin de protección, caché, dominio equivocado (www/non-www) o el sitio caído. Comprueba la dirección del email del host o del desarrollador.",
    },
    {
      q: "¿Es seguro quedarse con el login admin?",
      a: "No — es un objetivo habitual de brute-force. Pon un username de admin único y una contraseña fuerte; activa 2FA donde puedas.",
    },
    {
      q: "¿En qué se diferencia del artículo de admin del sitio?",
      a: "Aquel cubre por qué existe un CMS y los roles. Aquí — en concreto el login de WordPress y la recuperación de acceso.",
    },
    {
      q: "¿La contraseña en phpMyAdmin sigue siendo MD5?",
      a: "Las guías viejas decían MD5. WordPress moderno usa hashing más fuerte; los paneles del host a menudo tienen una herramienta «reset WP password» sin MD5 a mano. Mira la docs actual.",
    },
  ],
  sections: [
    {
      title: "Cómo abrir el login del admin",
      level: 2,
      paras: [
        "En la barra de dirección abre `https://tu-dominio.example/wp-admin/`. Si no aparece el formulario, prueba `https://tu-dominio.example/wp-login.php`. Usa tu dominio; preferir HTTPS.",
        "Tras instalar WordPress, login y contraseña se fijan en el paso de instalación (o vienen del desarrollador o del host). «Remember me» vale en un dispositivo personal y es arriesgado en uno compartido.",
      ],
      lists: [
        {
          intro: "Antes de teclear la contraseña comprueba:",
          items: [
            "layout del teclado y Caps Lock",
            "dominio correcto (www / non-www, subdominio staging)",
            "que sea tu sitio, no una copia phishing",
            "si un plugin de seguridad cambió la URL de login",
          ],
        },
      ],
      links: [
        {
          label: "Panel de admin del sitio",
          href: "/blog/adminka-sayta/",
        },
        {
          label: "Seguridad en WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
      notes: [
        {
          title: "No te quedes con admin",
          text: "Instrucciones viejas sugerían el login `admin` «si no cambiaste nada». Hoy es un mal hábito: cambia username y contraseña de administrador, limita intentos de login.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Si olvidaste la contraseña",
      level: 2,
      paras: [
        "En el formulario de login haz clic en «¿Perdiste tu contraseña?» (el wording puede variar). Introduce el username o email de admin — WordPress envía un enlace al email del usuario.",
        "El correo a veces cae en spam o no se envía por ajustes de mail del host. Entonces revisa el buzón de `wp-config` o del perfil de usuario, o pide al hosting o al desarrollador un reset con su herramienta.",
      ],
      lists: [
        {
          intro: "Prueba este orden:",
          items: [
            "enlace de recuperación en el formulario de login",
            "email más carpeta Spam",
            "login desde un dispositivo con sesión viva → cambia la contraseña en el perfil",
            "herramienta de reset en el panel del host",
            "solo entonces — editar users en la BD",
          ],
        },
      ],
    },
    {
      title: "Reset vía hosting y la base de datos",
      level: 2,
      paras: [
        "Muchos hosts pueden resetear la contraseña de WordPress desde su panel — prefieres eso a ediciones a mano. Si entras en phpMyAdmin: haz backup de la BD, encuentra la tabla de users (a menudo `wp_users`; el prefijo puede diferir), actualiza la contraseña como recomiendan la docs actuales de WordPress o del host.",
        "No copies a ciegas capturas de 2018 que digan «escribe la contraseña y elige MD5»: el algoritmo de hash cambió. Un error en la tabla de users puede cerrar a todos.",
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/blog/bezopasnost-sayta/",
        },
        {
          label: "Instalar WordPress",
          href: "/es/blog/wordpress-ustanovka/",
        },
      ],
    },
    {
      title: "Caché, cookies y otros fallos",
      level: 2,
      paras: [
        "Si la contraseña es correcta pero el login «rompe», limpia cookies del sitio y caché del navegador; desactiva temporalmente bloqueadores agresivos. Del lado del sitio, plugins de caché, firewalls y límites de intentos de login tras brute force estorban.",
        "Comprueba que abres el mismo protocolo y host en el que instalaste WP. Mezclar `http`/`https` o mirrors a veces hace bucles de redirect en el formulario de login.",
      ],
      tables: [
        {
          caption: "Qué revisar cuando falla el login",
          headers: ["Síntoma", "Dónde mirar"],
          rows: [
            [
              "Credenciales incorrectas",
              "Layout, otro usuario, reset por email",
            ],
            ["Pantalla blanca / redirect", "Plugins, HTTPS, caché"],
            ["Sin email", "Spam, mail del host, SMTP"],
            ["404 en wp-login", "URL de login cambiada, traslado del sitio"],
            ["Bloqueo de IP", "Límites de protección, firewall del host"],
          ],
        },
      ],
    },
    {
      title: "Tras el login: higiene mínima",
      level: 2,
      paras: [
        "Cambia una contraseña floja, revisa la lista de usuarios y cuentas extra, actualiza WordPress, temas y plugins. Para el trabajo continuo ayudan un gestor de contraseñas y 2FA.",
        "La lógica general de CMS y roles — en el artículo de admin del sitio; hardening de WP — en la pieza de seguridad.",
      ],
      lists: [
        {
          intro: "Justo después de recuperar el acceso:",
          items: [
            "nueva contraseña única",
            "revisar usuarios con rol Administrator",
            "updates de core y plugins",
            "backup",
            "2FA / límites de intentos de login",
          ],
        },
      ],
      links: [
        {
          label: "Gestor de contraseñas",
          href: "/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Camino estándar — `/wp-admin/` o `/wp-login.php`, luego recuperación por email. Toca la BD solo con backup y un método actual de reset de hash.",
        "No publiques logins ajenos ni intentes adivinar el acceso a sitios que no gestionas.",
      ],
    },
  ],
  closing: [
    "Abre el formulario de login en tu dominio, resetea la contraseña por email o el panel del host y endurece ya la cuenta de administrador — para que el admin de WordPress vuelva a ser una herramienta de trabajo, no una quest.",
  ],
  related: [
    "adminka-sayta",
    "wordpress-bezopasnost",
    "menedzher-paroley",
    "uskorenie-wordpress",
    "tema-wordpress",
    "bezopasnost-sayta",
  ],
};

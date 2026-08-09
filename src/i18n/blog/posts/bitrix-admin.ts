import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-admin — same structure as RU JSON. */
export const bitrixAdminEn: BlogPost = {
  slug: "bitrix-admin",
  title: "How to open the 1C-Bitrix admin and recover access",
  date: "2017-11-09",
  category: "Digital marketing",
  cover: "/images/blog/bitrix-admin/cover-en.webp",
  excerpt:
    "Signing in at `/bitrix/admin`, resetting the password by email, and cache/cookie glitches — without keeping a weak password and without confusing it with the public-site toolbar.",
  lead: [
    "The 1C-Bitrix admin usually opens at `https://your-site.example/bitrix/admin/`. After sign-in you get infoblocks, modules, users, and settings — that is not the same as the toolbar over public pages.",
    "Below: how to open the login form, what to do if you forgot the password, and why cache and cookies get in the way. This is not a guide to breaking into other people’s sites. UI labels change — follow the current auth form.",
  ],
  faq: [
    {
      q: "How is /bitrix/admin different from the on-site toolbar?",
      a: "`/bitrix/admin` is the full backend. The public-section toolbar is on-page editing after you sign in with rights. See the separate piece on the public section.",
    },
    {
      q: "Why a 404 on /bitrix/admin?",
      a: "A different login path, the site is not on Bitrix, HTTPS/www redirects, a server-level block, or the site is down. Confirm the URL with the developer or host.",
    },
    {
      q: "Can you sign in via Bitrix24?",
      a: "Some installs offer a linked-account login. If there is no button or the link is not set up — use the site user’s normal login and password.",
    },
    {
      q: "What if the password reset email never arrives?",
      a: "Check spam, that the user’s email is correct, and that the site can send mail (SMTP/hosting). Otherwise — reset via hosting/developer with a backup.",
    },
    {
      q: "Is this like WordPress login?",
      a: "In spirit yes (form → password → console), different path: `/bitrix/admin`, not `/wp-admin/`.",
    },
  ],
  sections: [
    {
      title: "How to open the login",
      level: 2,
      paras: [
        "In the address bar open `https://your-domain.example/bitrix/admin/` (use your domain, preferably HTTPS). You should see a login and password form.",
        "Enter admin credentials or a user allowed into the admin. “Remember me” is fine on a personal device and risky on a shared one.",
      ],
      lists: [
        {
          intro: "Before typing the password:",
          items: [
            "correct domain (www / bare, live vs staging)",
            "keyboard layout and Caps Lock",
            "this is your site, not a phishing copy",
            "your role actually has access",
          ],
        },
      ],
      links: [
        {
          label: "Bitrix public section",
          href: "/en/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "WordPress admin",
          href: "/en/blog/wordpress-admin/",
        },
      ],
      notes: [
        {
          title: "Permissions",
          kind: "tip",
          text: "Even with the right password, admin access can be closed by group policy. Then you need a role from the project admin — not password guessing.",
        },
      ],
    },
    {
      title: "If you forgot the password",
      level: 2,
      paras: [
        "On the login form find a link like “Forgot password?” Enter the user’s login or email — the system sends a reset link to the profile mailbox.",
        "Mail sometimes lands in spam or never leaves because of the site’s mail settings. Then check the address in the user card (if another admin exists) or reset access via hosting/developer by process with a backup.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "recovery link on the form",
            "inbox + Spam",
            "a session on another device where you are still signed in → change password",
            "hosting/developer help",
            "after sign-in — a new strong password and a check for extra admins",
          ],
        },
      ],
    },
    {
      title: "Cache, cookies, and other glitches",
      level: 2,
      paras: [
        "If the password is right but the form breaks or loops redirects, clear the site’s cookies and browser cache or try an incognito window. On the site side Bitrix cache, CDN, and hard firewall rules get in the way.",
        "Mixing `http`/`https` and www mirrors sometimes breaks the auth session — keep one canonical mirror with 301s.",
      ],
      tables: [
        {
          caption: "What to check",
          headers: ["Symptom", "Where to look"],
          rows: [
            ["Wrong credentials", "Layout, another user, email reset"],
            ["Empty/stale form", "Browser cache, cookies, incognito"],
            ["No email", "Spam, site SMTP, email in the profile"],
            ["404 on /bitrix/admin", "Login path, CMS, server access"],
            ["Signed in but no sections", "User group permissions"],
          ],
        },
      ],
    },
    {
      title: "After sign-in: basic hygiene",
      level: 2,
      paras: [
        "Change a weak password, review users with full rights, update the product per project process. Day-to-day content edits often need only the public toolbar — don’t hand out the admin to everyone.",
        "Keep the password in a password manager and enable 2FA where your login scheme allows it.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "What not to do",
      level: 2,
      paras: [
        "Don’t post client logins in chats. Don’t leave a shared “department” password. Don’t try to guess access to other people’s sites.",
        "Resetting by editing the DB by feel without a backup is a path to downtime. Start with the normal recovery flow and support.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Standard entry is `/bitrix/admin/`, recovery is by the user’s email, glitches often come from cache/cookies and permissions. The public toolbar is a related but different surface.",
        "After recovery harden the account right away and don’t confuse the admin with the on-site toolbar.",
      ],
    },
  ],
  closing: [
    "Open `/bitrix/admin/` on your domain, reset the password by email if needed, and immediately check user rights — then the Bitrix admin is a working tool again, not a browser-cache quest.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "wordpress-admin",
    "seo-bitrix",
    "bitrix-svoystva-infoblokov",
    "menedzher-paroley",
    "adminka-sayta",
  ],
};

/** ES overlay for bitrix-admin — same structure as RU JSON / EN. */
export const bitrixAdminEs: BlogPost = {
  slug: "bitrix-admin",
  title: "Cómo abrir el admin de 1C-Bitrix y recuperar el acceso",
  date: "2017-11-09",
  category: "Digital marketing",
  cover: "/images/blog/bitrix-admin/cover.webp",
  excerpt:
    "Entrar en `/bitrix/admin`, restablecer la contraseña por email y fallos de caché/cookies — sin mantener una contraseña débil y sin confundirlo con la barra del sitio público.",
  lead: [
    "El admin de 1C-Bitrix suele abrirse en `https://tu-sitio.ejemplo/bitrix/admin/`. Tras el login tienes infoblocks, módulos, usuarios y settings — eso no es lo mismo que la barra sobre las páginas públicas.",
    "Abajo: cómo abrir el formulario de login, qué hacer si olvidaste la contraseña y por qué la caché y las cookies estorban. Esto no es una guía para entrar en sitios ajenos. Las etiquetas de UI cambian — sigue el formulario de auth actual.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia /bitrix/admin de la barra on-site?",
      a: "`/bitrix/admin` es el backend completo. La barra de sección pública es edición en página tras iniciar sesión con derechos. Ver la pieza aparte sobre la sección pública.",
    },
    {
      q: "¿Por qué un 404 en /bitrix/admin?",
      a: "Otra ruta de login, el sitio no está en Bitrix, redirects HTTPS/www, un bloqueo a nivel de servidor, o el sitio está caído. Confirma la URL con el desarrollador o el host.",
    },
    {
      q: "¿Se puede entrar vía Bitrix24?",
      a: "Algunas instalaciones ofrecen login con cuenta enlazada. Si no hay botón o el enlace no está montado — usa el login y contraseña normales del usuario del sitio.",
    },
    {
      q: "¿Y si el email de reset de contraseña nunca llega?",
      a: "Revisa spam, que el email del usuario sea correcto y que el sitio pueda enviar correo (SMTP/hosting). Si no — reset vía hosting/desarrollador con backup.",
    },
    {
      q: "¿Es como el login de WordPress?",
      a: "En espíritu sí (formulario → contraseña → consola), ruta distinta: `/bitrix/admin`, no `/wp-admin/`.",
    },
  ],
  sections: [
    {
      title: "Cómo abrir el login",
      level: 2,
      paras: [
        "En la barra de direcciones abre `https://tu-dominio.ejemplo/bitrix/admin/` (usa tu dominio, preferiblemente HTTPS). Deberías ver un formulario de login y contraseña.",
        "Introduce credenciales de admin o de un usuario con acceso al admin. «Recuérdame» está bien en un dispositivo personal y es arriesgado en uno compartido.",
      ],
      lists: [
        {
          intro: "Antes de escribir la contraseña:",
          items: [
            "dominio correcto (www / bare, live vs staging)",
            "layout del teclado y Caps Lock",
            "este es tu sitio, no una copia de phishing",
            "tu rol tiene acceso de verdad",
          ],
        },
      ],
      links: [
        {
          label: "Sección pública de Bitrix",
          href: "/es/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "Admin de WordPress",
          href: "/es/blog/wordpress-admin/",
        },
      ],
      notes: [
        {
          title: "Permisos",
          kind: "tip",
          text: "Aunque la contraseña sea correcta, el acceso al admin puede estar cerrado por política de grupo. Entonces necesitas un rol del admin del proyecto — no adivinar contraseñas.",
        },
      ],
    },
    {
      title: "Si olvidaste la contraseña",
      level: 2,
      paras: [
        "En el formulario de login busca un enlace tipo «¿Olvidaste la contraseña?». Introduce el login o email del usuario — el sistema envía un enlace de reset al buzón del perfil.",
        "El correo a veces cae en spam o nunca sale por los settings de mail del sitio. Entonces revisa la dirección en la ficha de usuario (si existe otro admin) o resetea el acceso vía hosting/desarrollador por proceso con backup.",
      ],
      lists: [
        {
          intro: "Orden:",
          items: [
            "enlace de recuperación en el formulario",
            "bandeja de entrada + Spam",
            "una sesión en otro dispositivo donde sigues logueado → cambiar contraseña",
            "ayuda de hosting/desarrollador",
            "tras el login — una contraseña fuerte nueva y revisión de admins extra",
          ],
        },
      ],
    },
    {
      title: "Caché, cookies y otros fallos",
      level: 2,
      paras: [
        "Si la contraseña es correcta pero el formulario se rompe o hace bucles de redirect, limpia cookies y caché del navegador o prueba una ventana de incógnito. Del lado del sitio estorban la caché de Bitrix, CDN y reglas duras de firewall.",
        "Mezclar espejos `http`/`https` y www a veces rompe la sesión de auth — mantén un espejo canónico con 301s.",
      ],
      tables: [
        {
          caption: "Qué revisar",
          headers: ["Síntoma", "Dónde mirar"],
          rows: [
            ["Credenciales incorrectas", "Layout, otro usuario, reset por email"],
            ["Formulario vacío/viejo", "Caché del navegador, cookies, incógnito"],
            ["Sin email", "Spam, SMTP del sitio, email en el perfil"],
            ["404 en /bitrix/admin", "Ruta de login, CMS, acceso al servidor"],
            ["Logueado pero sin secciones", "Permisos del grupo de usuario"],
          ],
        },
      ],
    },
    {
      title: "Tras el login: higiene básica",
      level: 2,
      paras: [
        "Cambia una contraseña débil, revisa usuarios con derechos plenos, actualiza el producto según el proceso del proyecto. Las ediciones de contenido del día a día a menudo solo necesitan la barra pública — no repartas el admin a todo el mundo.",
        "Guarda la contraseña en un gestor de contraseñas y activa 2FA donde tu esquema de login lo permita.",
      ],
      links: [
        {
          label: "Gestor de contraseñas",
          href: "/es/blog/menedzher-paroley/",
        },
        {
          label: "SEO en 1C-Bitrix",
          href: "/es/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Qué no hacer",
      level: 2,
      paras: [
        "No publiques logins de clientes en chats. No dejes una contraseña compartida de «departamento». No intentes adivinar el acceso a sitios ajenos.",
        "Resetear editando la BD a ojo sin backup es camino a downtime. Empieza por el flujo normal de recuperación y el soporte.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "La entrada estándar es `/bitrix/admin/`, la recuperación va por el email del usuario, los fallos a menudo vienen de caché/cookies y permisos. La barra pública es una superficie relacionada pero distinta.",
        "Tras recuperar, endurece la cuenta enseguida y no confundas el admin con la barra on-site.",
      ],
    },
  ],
  closing: [
    "Abre `/bitrix/admin/` en tu dominio, resetea la contraseña por email si hace falta y revisa de inmediato los derechos de usuario — entonces el admin de Bitrix vuelve a ser una herramienta de trabajo, no una quest de caché del navegador.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "wordpress-admin",
    "seo-bitrix",
    "bitrix-svoystva-infoblokov",
    "menedzher-paroley",
    "adminka-sayta",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-bezopasnost — same structure as RU JSON. */
export const wordpressBezopasnostEn: BlogPost = {
  slug: "wordpress-bezopasnost",
  title: "WordPress site security: a practical checklist",
  date: "2019-12-27",
  category: "SEO",
  cover: "/images/blog/wordpress-bezopasnost/cover-en.webp",
  excerpt:
    "How to lower WordPress breach risk: updates, passwords, login, plugins and themes, backups, HTTPS, 2FA, and least privilege — without attack how-tos.",
  lead: [
    "WordPress is popular — and therefore often targeted: holes in core, plugins, and themes, weak passwords, an open wp-admin. A breach hits SEO: spam, redirects, malware in the SERP, lost trust.",
    "Below: a practical WP hardening checklist. General threats (injections, XSS, brute force) live in the site security article; here — CMS specifics. Defense and recovery only — not breach scenarios.",
  ],
  faq: [
    {
      q: "Is WordPress insecure by definition?",
      a: "No. Risk grows from popularity and forgotten plugins. Timely updates and access hygiene cut the threat a lot.",
    },
    {
      q: "Is one security plugin enough?",
      a: "As a layer — yes. It doesn’t replace updates, strong passwords, backups, and a minimum of extensions.",
    },
    {
      q: "Should I change the wp_ table prefix?",
      a: "Weak obscurity. Updates, DB privileges, and backups matter more. Changing the prefix on a live site risks breakage — only with a clear plan and a copy.",
    },
    {
      q: "Is HTTPS mandatory?",
      a: "Yes for admin, forms, and trust. A certificate protects the channel; it doesn’t replace CMS patches.",
    },
    {
      q: "How many plugins is normal?",
      a: "As many as you truly need. Each extra one is attack surface and conflicts. Delete unused ones — don’t only deactivate.",
    },
    {
      q: "Are free themes dangerous?",
      a: "Not all. Themes and plugins from shady “nulled” archives with backdoors are. Take them from the official catalog or trusted authors.",
    },
    {
      q: "What should I do if I suspect a breach?",
      a: "Change all passwords and keys, restore from a clean backup, update core, plugins, and themes, check webmaster panels for malware, bring in a specialist if needed.",
    },
    {
      q: "Does hardening WordPress improve rankings?",
      a: "Not directly. But a breach drops traffic and trust. Stability first; SEO expectations over months after that — prep is not page-one rankings, and share of the core usually builds over two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why WordPress is attacked so often",
      level: 2,
      paras: [
        "WP’s share of the web is huge: scanners hunt known CVEs in core and popular plugins. Vulnerability news appears regularly — watch updates and don’t leave the site on a version “because it works.”",
        "A typical entry point isn’t hacker magic — it’s a weak password, login admin, an outdated plugin, an infected theme from a pirate archive, or FTP with one password for everything.",
      ],
      lists: [
        {
          intro: "Hardening priorities:",
          items: [
            "core, theme, and plugin updates",
            "strong unique passwords + 2FA",
            "minimum extensions",
            "backups and HTTPS",
            "restricted admin access",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "How to identify a CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Access: login, password, 2FA, IP",
      level: 2,
      paras: [
        "Don’t use predictable logins like admin. Strong password: length, case, digits, symbols, uniqueness (password manager). Turn on two-factor authentication for administrators.",
        "Change or protect the login URL (don’t rely on a “secret” address alone — it only adds friction). With a static office IP you can lock wp-admin at the server layer; with a dynamic IP that lockout easily locks you out — plan exceptions.",
      ],
      lists: [
        {
          intro: "Access minimum:",
          items: [
            "no shared password for email, hosting, and WP",
            "2FA on admins",
            "roles by least privilege",
            "close unnecessary author or login exposure",
          ],
        },
      ],
    },
    {
      title: "Updates, plugins, and themes",
      level: 2,
      paras: [
        "Apply core and extension updates after a backup. Delete unused plugins and themes entirely. Keep trusted, maintained products; “do-everything” suites often drag extra code.",
        "Themes — from the official repo or paid authors with updates. Pirated “premium free” packs are a common backdoor source. Before install, check the last update date and reviews.",
      ],
      lists: [
        {
          intro: "Extension hygiene:",
          items: [
            "inventory once a quarter",
            "remove idle plugins",
            "don’t install everything “just in case”",
            "security and backup — from trusted sources",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Backups, HTTPS, file permissions",
      level: 2,
      paras: [
        "File and DB backups — automatic (hosting or plugin) and periodically manual to independent storage. Verify the backup actually restores.",
        "SSL/TLS is mandatory. Disable theme and plugin file editing from the admin on prod (`DISALLOW_FILE_EDIT`) so a stolen session can’t easily drop a shell. File and directory permissions — per host guidance, not 777 “to make it work.”",
      ],
      lists: [
        {
          intro: "After an incident:",
          items: [
            "change all passwords and salts or keys",
            "roll back to a clean backup",
            "update everything",
            "check Webmaster / Search Console for malware",
            "rotate API and mail secrets",
          ],
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What not to treat as a silver bullet",
      level: 2,
      paras: [
        "Changing the table prefix, hiding the WP version, and a “secret” login URL alone don’t fix an outdated plugin. Updates, monitoring, a hosting or CDN WAF, and access discipline help.",
        "Hardening is continuous. For SEO you need a clean site without spam pages and browser warnings. After stabilization, return to content and tech: rankings build over months — not right after changing the password.",
      ],
      lists: [
        {
          intro: "Final checklist:",
          items: [
            "updates are a ritual",
            "passwords + 2FA",
            "few plugins, clean themes",
            "backups verified",
            "HTTPS and file-edit disabled on prod",
            "general hygiene from the site security article",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A security incident is put out first. SEO expectations — after cleanup and re-crawl, over weeks to months. Prep is not page-one rankings; share of the core usually takes two to six months after work starts.",
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Why the site isn’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "bezopasnost-sayta",
    "https-seo",
    "bazy-dannyh-sayta",
    "uznat-cms",
    "yandeks-vebmaster",
    "cookies",
  ],
};

/** ES overlay for wordpress-bezopasnost — same structure as RU JSON / EN. */
export const wordpressBezopasnostEs: BlogPost = {
  slug: "wordpress-bezopasnost",
  title: "Seguridad del sitio WordPress: checklist práctico",
  date: "2019-12-27",
  category: "SEO",
  cover: "/images/blog/wordpress-bezopasnost/cover.webp",
  excerpt:
    "Cómo bajar el riesgo de breach en WordPress: updates, contraseñas, login, plugins y temas, backups, HTTPS, 2FA y least privilege — sin how-tos de ataque.",
  lead: [
    "WordPress es popular — y por eso a menudo objetivo: agujeros en core, plugins y temas, contraseñas flojas, un wp-admin abierto. Un breach pega al SEO: spam, redirects, malware en el SERP, confianza perdida.",
    "Abajo: un checklist práctico de hardening de WP. Las amenazas generales (inyecciones, XSS, brute force) viven en el artículo de seguridad del sitio; aquí — especificidades del CMS. Solo defensa y recuperación — no escenarios de breach.",
  ],
  faq: [
    {
      q: "¿WordPress es inseguro por definición?",
      a: "No. El riesgo crece con la popularidad y los plugins olvidados. Updates a tiempo e higiene de acceso cortan mucho la amenaza.",
    },
    {
      q: "¿Basta con un plugin de seguridad?",
      a: "Como capa — sí. No sustituye updates, contraseñas fuertes, backups y un mínimo de extensiones.",
    },
    {
      q: "¿Debo cambiar el prefijo de tablas wp_?",
      a: "Oscuridad débil. Importan más updates, privilegios de BD y backups. Cambiar el prefijo en un sitio en vivo arriesga roturas — solo con plan claro y una copia.",
    },
    {
      q: "¿HTTPS es obligatorio?",
      a: "Sí para admin, formularios y confianza. Un certificado protege el canal; no sustituye parches del CMS.",
    },
    {
      q: "¿Cuántos plugins es normal?",
      a: "Los que de verdad necesitas. Cada uno extra es superficie de ataque y conflictos. Borra los que no uses — no solo desactives.",
    },
    {
      q: "¿Los temas gratis son peligrosos?",
      a: "No todos. Sí los temas y plugins de archivos «nulled» turbios con backdoors. Tómalos del catálogo oficial o de autores de confianza.",
    },
    {
      q: "¿Qué hago si sospecho un breach?",
      a: "Cambia todas las contraseñas y claves, restaura desde un backup limpio, actualiza core, plugins y temas, revisa paneles de webmaster por malware, llama a un especialista si hace falta.",
    },
    {
      q: "¿El hardening de WordPress mejora los rankings?",
      a: "No directamente. Pero un breach tira tráfico y confianza. Primero estabilidad; expectativas de SEO en meses después — la prep no es primera página, y la cuota del núcleo suele construirse en dos a seis meses tras arrancar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Por qué WordPress se ataca tanto",
      level: 2,
      paras: [
        "La cuota de WP en la web es enorme: los scanners cazan CVEs conocidos en core y plugins populares. Las noticias de vulnerabilidades salen con regularidad — vigila updates y no dejes el sitio en una versión «porque funciona».",
        "Un punto de entrada típico no es magia de hacker — es una contraseña floja, login admin, un plugin desfasado, un tema infectado de un archivo pirata o FTP con una sola contraseña para todo.",
      ],
      lists: [
        {
          intro: "Prioridades de hardening:",
          items: [
            "updates de core, tema y plugins",
            "contraseñas fuertes y únicas + 2FA",
            "mínimo de extensiones",
            "backups y HTTPS",
            "acceso de admin restringido",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/blog/bezopasnost-sayta/",
        },
        {
          label: "Cómo identificar un CMS",
          href: "/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Acceso: login, contraseña, 2FA, IP",
      level: 2,
      paras: [
        "No uses logins predecibles como admin. Contraseña fuerte: longitud, mayúsculas/minúsculas, dígitos, símbolos, unicidad (gestor de contraseñas). Activa autenticación de dos factores para administradores.",
        "Cambia o protege la URL de login (no confíes solo en una dirección «secreta» — solo añade fricción). Con IP de oficina estática puedes bloquear wp-admin a nivel de servidor; con IP dinámica ese bloqueo te cierra a ti fácilmente — planifica excepciones.",
      ],
      lists: [
        {
          intro: "Mínimo de acceso:",
          items: [
            "sin contraseña compartida para email, hosting y WP",
            "2FA en admins",
            "roles por least privilege",
            "cierra exposición innecesaria de autor o login",
          ],
        },
      ],
    },
    {
      title: "Updates, plugins y temas",
      level: 2,
      paras: [
        "Aplica updates de core y extensiones tras un backup. Borra por completo plugins y temas sin uso. Quédate con productos de confianza y mantenidos; las suites «hacen-todo» a menudo arrastran código extra.",
        "Temas — del repo oficial o autores de pago con updates. Packs piratas «premium gratis» son una fuente habitual de backdoors. Antes de instalar, mira la fecha de la última update y las reviews.",
      ],
      lists: [
        {
          intro: "Higiene de extensiones:",
          items: [
            "inventario una vez al trimestre",
            "quita plugins idle",
            "no instales todo «por si acaso»",
            "seguridad y backup — de fuentes de confianza",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/blog/https-seo/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Backups, HTTPS, permisos de archivos",
      level: 2,
      paras: [
        "Backups de archivos y BD — automáticos (hosting o plugin) y periódicamente manuales a almacenamiento independiente. Verifica que el backup realmente restaura.",
        "SSL/TLS es obligatorio. Desactiva la edición de archivos de tema y plugins desde el admin en prod (`DISALLOW_FILE_EDIT`) para que una sesión robada no pueda soltar un shell con facilidad. Permisos de archivos y directorios — según la guía del host, no 777 «para que funcione».",
      ],
      lists: [
        {
          intro: "Tras un incidente:",
          items: [
            "cambia todas las contraseñas y salts o claves",
            "vuelve a un backup limpio",
            "actualiza todo",
            "revisa Webmaster / Search Console por malware",
            "rota secretos de API y correo",
          ],
        },
      ],
      links: [
        {
          label: "Bases de datos del sitio",
          href: "/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Qué no tratar como bala de plata",
      level: 2,
      paras: [
        "Cambiar el prefijo de tablas, ocultar la versión de WP y una URL de login «secreta» solos no arreglan un plugin desfasado. Ayudan updates, monitoreo, un WAF de hosting o CDN y disciplina de acceso.",
        "El hardening es continuo. Para SEO necesitas un sitio limpio sin páginas spam ni advertencias del navegador. Tras estabilizar, vuelve a contenido y técnica: los rankings se construyen en meses — no justo después de cambiar la contraseña.",
      ],
      lists: [
        {
          intro: "Checklist final:",
          items: [
            "updates como ritual",
            "contraseñas + 2FA",
            "pocos plugins, temas limpios",
            "backups verificados",
            "HTTPS y edición de archivos desactivada en prod",
            "higiene general del artículo de seguridad del sitio",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Un incidente de seguridad se apaga primero. Expectativas de SEO — tras la limpieza y el re-crawl, en semanas a meses. Prep no es primera página; la cuota del núcleo suele llevar dos a seis meses tras arrancar el trabajo.",
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/blog/bezopasnost-sayta/",
        },
        {
          label: "Por qué el sitio no rankea",
          href: "/es/blog/sayt-ne-v-top/",
        },
        {
          label: "Instalar WordPress",
          href: "/es/blog/wordpress-ustanovka/",
        },
      ],
    },
  ],
  related: [
    "bezopasnost-sayta",
    "https-seo",
    "bazy-dannyh-sayta",
    "uznat-cms",
    "yandeks-vebmaster",
    "cookies",
  ],
};

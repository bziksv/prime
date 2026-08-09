import type { BlogPost } from "../../../data/blog";

/** EN overlay for bezopasnost-sayta — same structure as RU JSON. */
export const bezopasnostSaytaEn: BlogPost = {
  slug: "bezopasnost-sayta",
  title: "How sites get hacked and how to defend: SQL injection and other threats",
  date: "2020-11-26",
  category: "SEO",
  cover: "/images/blog/bezopasnost-sayta/cover-en.webp",
  excerpt:
    "Threats typical for sites and stores: SQL injection, XSS, brute force, vulnerable plugins. How to think about defense and what to do after compromise — without attack how-tos.",
  lead: [
    "Sites aren’t hacked for sport — it’s about data, spam, malware redirects, or ransomware. For an owner in plain terms: someone exploits a code hole, a weak password, or a forgotten plugin.",
    "Below: an overview of typical threats (including SQL injection) and practical defense. The material is about protection and recovery, not how to run attacks. DB backups and HTTPS are covered in related articles.",
  ],
  faq: [
    {
      q: "What is SQL injection in plain English?",
      a: "An attacker slips a fragment into a form field or URL so the database runs an unwanted query. Defense — parameterized queries, input validation, CMS updates.",
    },
    {
      q: "Does HTTPS stop SQL injection?",
      a: "No. HTTPS encrypts the channel. Injections and app holes are another layer: code, ORM, DB permissions.",
    },
    {
      q: "Why is a site hack bad for SEO?",
      a: "Spam pages, malicious redirects, content theft, unsafe-site lists, trust and traffic drop.",
    },
    {
      q: "Is hosting antivirus enough?",
      a: "Useful as part of a stack, not the only measure. You need updates, strong passwords, least privilege, backups, and monitoring.",
    },
    {
      q: "What should you do right after a suspected breach?",
      a: "Rotate access, put the site in maintenance if needed, restore from a clean backup, update CMS/plugins, check email and webmaster tools for malware notices.",
    },
    {
      q: "Do you need a WAF?",
      a: "For stores and public forms often yes (hosting/CDN level). It doesn’t replace fixing vulnerable code.",
    },
    {
      q: "Can you “check a site for SQL” with an online scanner?",
      a: "Surface checkers give hints, not a guarantee. A serious audit needs a specialist; aggressive scanning of others’ sites without permission is unacceptable.",
    },
    {
      q: "Are WordPress plugins the main risk?",
      a: "Often yes: forgotten and unchecked extensions. Install fewer, update, remove unused, take from trusted sources.",
    },
  ],
  sections: [
    {
      title: "What threats a site faces",
      level: 2,
      paras: [
        "Web attacks aren’t one “hacker trick” — a set of scenarios: exploiting code flaws, password guessing, admin phishing, infection via an editor’s machine, holes in the server and panels.",
        "Attacker goals: customer data, spam from your domain, SEO spam in hidden pages, miners, ransomware. For business it’s equally bad — downtime, reputation damage, and recovery cost.",
      ],
      lists: [
        {
          intro: "Typical threat set:",
          items: [
            "database injections (SQL and related)",
            "XSS and session theft",
            "CSRF on admin actions",
            "brute force and leaked passwords",
            "vulnerable plugins/themes",
            "RCE via file upload",
            "compromised hosting/FTP",
          ],
        },
      ],
    },
    {
      title: "SQL injection: the idea without “how to attack”",
      level: 2,
      paras: [
        "A site talks to the database with queries. If user input is glued into SQL as a string, an attacker can change the query meaning. Modern code uses prepared statements / ORM — data doesn’t mix with commands.",
        "Injections hurt the core: reading/corrupting tables, sometimes reaching the filesystem (depends on DB and privileges). A store with orders and accounts is a priority target.",
      ],
      lists: [
        {
          intro: "Defense at the development layer:",
          items: [
            "parameterized queries only",
            "minimal privileges for the app DB user",
            "input validation and normalization",
            "current drivers and CMS",
            "don’t expose SQL errors to users",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t hunt or run public “test payloads” on others’ sites. Security testing — only on your own staging or under contract.",
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
      ],
    },
    {
      title: "Other common vectors",
      level: 2,
      paras: [
        "XSS: a malicious script on a page others or admins see. Brute force: guessing the admin password. Outdated plugin: a ready door without advanced hacking. Phishing: an email “confirm login” with a panel clone.",
        "Stores also risk personal and payment data leaks — PCI payment scope, HTTPS, and minimal data on your side matter here.",
      ],
      lists: [
        {
          intro: "Everyday holes:",
          items: [
            "admin / one password for everything",
            "FTP with a 2019 password",
            "demo plugins on production",
            "phpMyAdmin open to the internet",
            "`.sql` backups in `public_html`",
          ],
        },
      ],
      links: [
        {
          label: "SSL and HTTPS",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "If the site is already compromised",
      level: 2,
      paras: [
        "Don’t clean one file by eye and don’t keep the same passwords. Isolate, restore from a verified pre-incident backup, update everything, rotate keys and access, check cron and unknown admins.",
        "Tell the host if needed. In Search Console / webmaster tools clear malware warnings after cleanup. Notify customers per company policy if data was affected.",
      ],
      lists: [
        {
          intro: "Action order:",
          items: [
            "change panel, CMS, DB, email, SSH passwords",
            "revoke sessions and API keys",
            "restore a clean snapshot",
            "update CMS/plugins/themes",
            "check cron jobs and unknown users",
            "enable reinfection monitoring",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Roll back to a backup and skip password changes: the attacker logs in again with the same access.",
        },
      ],
    },
    {
      title: "Basic security hygiene",
      level: 2,
      paras: [
        "Updates, strong unique passwords, 2FA where available, least privilege, regular backups with a restore test, IP-restrict the admin if possible, host WAF/antivirus as an extra layer.",
        "Fewer attack surfaces: remove unused plugins, don’t index staging, don’t put secrets in the repo.",
      ],
      lists: [
        {
          intro: "Owner checklist:",
          items: [
            "CMS and plugins updated",
            "DB+files backup off the same disk",
            "passwords different and long",
            "file permissions sensible",
            "uptime and webmaster mail monitored",
            "incident owner assigned",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Link to SEO and trust",
      level: 2,
      paras: [
        "Search engines flag unsafe sites, cut clicks, and demand confirmation. Spam injections in templates wreck snippets and index junk URLs. Ranking recovery after a long infection takes time — cleanliness and stability first.",
        "Security isn’t a separate tick after SEO — it’s the condition for content and tech to work on a live domain at all.",
      ],
      lists: [
        {
          intro: "After cleanup check:",
          items: [
            "no new spam URLs in the index",
            "warnings cleared in panels",
            "redirects and homepage correct",
            "no leftover malicious scripts in the theme",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};

/** ES overlay for bezopasnost-sayta — same structure as RU JSON / EN. */
export const bezopasnostSaytaEs: BlogPost = {
  slug: "bezopasnost-sayta",
  title: "Cómo se hackean los sitios y cómo defenderse: SQL injection y otras amenazas",
  date: "2020-11-26",
  category: "SEO",
  cover: "/images/blog/bezopasnost-sayta/cover.webp",
  excerpt:
    "Amenazas típicas de sitios y tiendas: SQL injection, XSS, brute force, plugins vulnerables. Cómo pensar la defensa y qué hacer tras un compromise — sin how-tos de ataque.",
  lead: [
    "Los sitios no se hackean por deporte — va de datos, spam, redirects de malware o ransomware. Para un dueño en claro: alguien explota un agujero de código, una contraseña floja o un plugin olvidado.",
    "Abajo: un overview de amenazas típicas (incluida SQL injection) y defensa práctica. El material es de protección y recuperación, no de cómo lanzar ataques. Backups de BD y HTTPS se cubren en artículos relacionados.",
  ],
  faq: [
    {
      q: "¿Qué es SQL injection en palabras simples?",
      a: "Un atacante mete un fragmento en un campo de formulario o URL para que la base de datos ejecute una query no deseada. Defensa — queries parametrizadas, validación de input, updates del CMS.",
    },
    {
      q: "¿HTTPS detiene SQL injection?",
      a: "No. HTTPS cifra el canal. Las inyecciones y los agujeros de la app son otra capa: código, ORM, permisos de BD.",
    },
    {
      q: "¿Por qué un hack del sitio es malo para el SEO?",
      a: "Páginas spam, redirects maliciosos, robo de contenido, listas de sitios inseguros, caída de confianza y tráfico.",
    },
    {
      q: "¿Basta el antivirus del hosting?",
      a: "Útil como parte de un stack, no como única medida. Hacen falta updates, contraseñas fuertes, least privilege, backups y monitoreo.",
    },
    {
      q: "¿Qué hacer justo tras sospechar un breach?",
      a: "Rota accesos, pon el sitio en mantenimiento si hace falta, restaura desde un backup limpio, actualiza CMS/plugins, revisa email y herramientas de webmaster por avisos de malware.",
    },
    {
      q: "¿Hace falta un WAF?",
      a: "Para tiendas y formularios públicos a menudo sí (nivel hosting/CDN). No sustituye arreglar código vulnerable.",
    },
    {
      q: "¿Se puede «chequear un sitio por SQL» con un scanner online?",
      a: "Los checkers superficiales dan pistas, no una garantía. Una auditoría seria necesita un especialista; el scanning agresivo de sitios ajenos sin permiso es inaceptable.",
    },
    {
      q: "¿Los plugins de WordPress son el riesgo principal?",
      a: "A menudo sí: extensiones olvidadas y sin revisar. Instala menos, actualiza, quita lo que no uses, toma de fuentes de confianza.",
    },
  ],
  sections: [
    {
      title: "A qué amenazas se enfrenta un sitio",
      level: 2,
      paras: [
        "Los ataques web no son un solo «truco de hacker» — un set de escenarios: explotar fallos de código, adivinar contraseñas, phishing al admin, infección vía la máquina de un editor, agujeros en el servidor y paneles.",
        "Objetivos del atacante: datos de clientes, spam desde tu dominio, spam SEO en páginas ocultas, miners, ransomware. Para el negocio es igual de malo — downtime, daño de reputación y coste de recuperación.",
      ],
      lists: [
        {
          intro: "Set típico de amenazas:",
          items: [
            "inyecciones a la base de datos (SQL y afines)",
            "XSS y robo de sesión",
            "CSRF en acciones de admin",
            "brute force y contraseñas filtradas",
            "plugins/temas vulnerables",
            "RCE vía subida de archivos",
            "hosting/FTP comprometido",
          ],
        },
      ],
    },
    {
      title: "SQL injection: la idea sin «cómo atacar»",
      level: 2,
      paras: [
        "Un sitio habla con la base de datos con queries. Si el input del usuario se pega al SQL como string, un atacante puede cambiar el sentido de la query. El código moderno usa prepared statements / ORM — los datos no se mezclan con comandos.",
        "Las inyecciones pegan al núcleo: leer/corromper tablas, a veces llegar al filesystem (depende de la BD y los privilegios). Una tienda con pedidos y cuentas es un objetivo prioritario.",
      ],
      lists: [
        {
          intro: "Defensa en la capa de desarrollo:",
          items: [
            "solo queries parametrizadas",
            "privilegios mínimos para el usuario de BD de la app",
            "validación y normalización de input",
            "drivers y CMS actuales",
            "no exponer errores SQL a los usuarios",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No caces ni ejecutes «payloads de prueba» públicos en sitios ajenos. Testing de seguridad — solo en tu staging o bajo contrato.",
        },
      ],
      links: [
        {
          label: "Bases de datos del sitio",
          href: "/blog/bazy-dannyh-sayta/",
        },
      ],
    },
    {
      title: "Otros vectores habituales",
      level: 2,
      paras: [
        "XSS: un script malicioso en una página que ven otros o admins. Brute force: adivinar la contraseña de admin. Plugin desfasado: una puerta lista sin hacking avanzado. Phishing: un email «confirma el login» con un clon del panel.",
        "Las tiendas también arriesgan fugas de datos personales y de pago — aquí importan el scope PCI, HTTPS y datos mínimos de tu lado.",
      ],
      lists: [
        {
          intro: "Agujeros de cada día:",
          items: [
            "admin / una contraseña para todo",
            "FTP con una contraseña de 2019",
            "plugins demo en producción",
            "phpMyAdmin abierto a internet",
            "backups `.sql` en `public_html`",
          ],
        },
      ],
      links: [
        {
          label: "SSL y HTTPS",
          href: "/es/blog/ssl-sertifikat/",
        },
        {
          label: "Seguridad en WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Si el sitio ya está comprometido",
      level: 2,
      paras: [
        "No limpies un archivo a ojo y no mantengas las mismas contraseñas. Aísla, restaura desde un backup verificado anterior al incidente, actualiza todo, rota claves y accesos, revisa cron y admins desconocidos.",
        "Avisa al host si hace falta. En Search Console / herramientas de webmaster limpia avisos de malware tras la limpieza. Notifica a clientes según la política de la empresa si hubo datos afectados.",
      ],
      lists: [
        {
          intro: "Orden de acción:",
          items: [
            "cambia contraseñas de panel, CMS, BD, email, SSH",
            "revoca sesiones y claves API",
            "restaura un snapshot limpio",
            "actualiza CMS/plugins/temas",
            "revisa cron jobs y usuarios desconocidos",
            "activa monitoreo de reinfección",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Volver a un backup y saltarte el cambio de contraseñas: el atacante entra otra vez con el mismo acceso.",
        },
      ],
    },
    {
      title: "Higiene básica de seguridad",
      level: 2,
      paras: [
        "Updates, contraseñas fuertes y únicas, 2FA donde haya, least privilege, backups regulares con prueba de restore, restringir el admin por IP si se puede, WAF/antivirus del host como capa extra.",
        "Menos superficies de ataque: quita plugins sin uso, no indexes staging, no pongas secretos en el repo.",
      ],
      lists: [
        {
          intro: "Checklist del dueño:",
          items: [
            "CMS y plugins actualizados",
            "backup de BD+archivos fuera del mismo disco",
            "contraseñas distintas y largas",
            "permisos de archivos sensatos",
            "uptime y correo de webmaster monitorizados",
            "dueño del incidente asignado",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "FTP",
          href: "/es/blog/ftp/",
        },
      ],
    },
    {
      title: "Vínculo con SEO y confianza",
      level: 2,
      paras: [
        "Los buscadores marcan sitios inseguros, cortan clics y piden confirmación. Inyecciones de spam en plantillas destrozan snippets e indexan URLs basura. Recuperar rankings tras una infección larga lleva tiempo — primero limpieza y estabilidad.",
        "La seguridad no es un tick aparte tras el SEO — es la condición para que contenido y técnica funcionen en un dominio vivo.",
      ],
      lists: [
        {
          intro: "Tras la limpieza comprueba:",
          items: [
            "sin URLs spam nuevas en el índice",
            "avisos limpios en los paneles",
            "redirects y homepage correctos",
            "sin scripts maliciosos residuales en el tema",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Cerrar a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};

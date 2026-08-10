import type { BlogPost } from "../../../data/blog";

/** EN overlay for bazy-dannyh-sayta — same structure as RU JSON. */
export const bazyDannyhSaytaEn: BlogPost = {
  slug: "bazy-dannyh-sayta",
  title: "Website databases: organization and backup",
  date: "2021-01-15",
  category: "SEO",
  cover: "/images/blog/bazy-dannyh-sayta/cover-en.webp",
  excerpt:
    "What a site database stores, how it differs from files on disk, why backups matter, and how not to lose orders, users, and content after a failure or hack.",
  lead: [
    "A site isn’t only HTML and images. Most live data — products, orders, users, CMS settings — sits in a database. Losing theme files hurts; losing the DB with no backup often means losing business history.",
    "Below: how the DB relates to site files, why it exists, what can go wrong, and how to approach backups without the “once a year on a USB stick” habit.",
  ],
  faq: [
    {
      q: "How does a database differ from files on hosting?",
      a: "Files are code, templates, media. The DB is structured records: posts, SKUs, orders, options. Recovery needs both layers.",
    },
    {
      q: "Which database systems do sites use most?",
      a: "Classic CMSs — often MySQL/MariaDB. PostgreSQL and others appear; follow CMS and hosting docs.",
    },
    {
      q: "Is a files-only backup enough?",
      a: "No. Without a DB dump you restore an empty or stale shell without orders and content.",
    },
    {
      q: "How often should you back up?",
      a: "Depends on change rate: a store with orders — more often (daily/hourly); a brochure site — less. Critical: a fresh copy before CMS updates and migrations.",
    },
    {
      q: "Where should you store copies?",
      a: "Not only on the same server disk. Need a second layer: another host, object storage, company policy — with a restore test.",
    },
    {
      q: "If the host backs up, can you stop thinking about it?",
      a: "Handy as insurance, but check retention, what it includes (files+DB), and whether you can restore yourself. Don’t rely blindly.",
    },
    {
      q: "Does the database affect SEO directly?",
      a: "Indirectly: slow queries and outages cut UX and crawl. Content duplicates are more about URLs and templates than table names. Tech audit and logs are sibling topics.",
    },
    {
      q: "Can you edit the database by hand in phpMyAdmin?",
      a: "Only if you understand the schema and have a fresh backup. A typo in the orders table costs more than an edit via the CMS admin.",
    },
  ],
  sections: [
    {
      title: "What a site database is",
      level: 2,
      paras: [
        "A database (DB) is structured storage: tables, rows, relations. The CMS reads and writes content and service data there; the web server returns assembled pages to the user.",
        "Analogy: a car catalog in tables (model, power, color) with filters and links. Same way a store keeps products and orders, a blog — posts and metafields, a portal — users and permissions.",
      ],
      lists: [
        {
          intro: "Usually the DB holds:",
          items: [
            "content records (pages, posts, cards)",
            "users and roles",
            "CMS and plugin settings",
            "orders, carts, forms (if not moved to external services)",
            "service queues, app logs (depends on the stack)",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Files and DB: two layers of one site",
      level: 2,
      paras: [
        "Theme code, plugins, `uploads` with images — filesystem. Product texts, prices, order status — usually the DB. Media often also has metadata in the DB (WordPress attachments and peers).",
        "When moving hosts you copy both layers and fix access (DB login, table prefix, URLs in options). One layer without the other gives a white screen or a site with no content.",
      ],
      lists: [
        {
          intro: "Before migration:",
          items: [
            "DB dump + file archive",
            "compatible PHP/MySQL versions",
            "secrets and `.env` not in a public archive",
            "a plan to check forms, payment, and account after the move",
          ],
        },
      ],
    },
    {
      title: "Why a site needs a DB in practice",
      level: 2,
      paras: [
        "Without a DB a dynamic site becomes static files: hard to edit a thousand cards, filter, track stock, manage users. The DB gives queries, relations, and point updates.",
        "The cost of convenience is responsibility: schema mistakes, full disks, SQL injection in vulnerable code hit the data. Update code and plugins; limit DB access; verify backups by restoring.",
      ],
      lists: [
        {
          intro: "Risks:",
          items: [
            "tables deleted/corrupted on a bad update",
            "hacks and ransomware",
            "host disk failure",
            "human error in phpMyAdmin",
            "revision and junk-table bloat → slowdowns",
          ],
        },
      ],
    },
    {
      title: "Organization: prefixes, permissions, performance",
      level: 2,
      paras: [
        "On shared hosting often one MySQL database per site; table prefix is set at CMS install. Don’t give the app root access: a separate DB user with rights only on the needed database.",
        "Performance: indexes, object/page cache, cleaning revisions and transients, sane limits. A heavy DB shows as timeouts and a slow admin — that’s engineering and hosting, not “one more SEO plugin.”",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "strong DB passwords, not the same as admin",
            "limit remote MySQL access",
            "monitor DB size and slow queries",
            "don’t keep production dumps in `public_html`",
          ],
        },
      ],
    },
    {
      title: "Backup: what and how",
      level: 2,
      paras: [
        "A DB backup is usually an SQL dump (or a volume snapshot from a cloud provider). A file backup is a code + uploads archive. Full restore = both + environment secrets.",
        "Take copies before CMS/plugin updates and major catalog changes. Keep several restore points (e.g. day / week), not one overwriteable “latest.”",
      ],
      lists: [
        {
          intro: "Backup checklist:",
          items: [
            "what’s included: DB + files + who owns it",
            "schedule and retention",
            "storage off the same disk",
            "restore test on staging at least quarterly",
            "encrypt sensitive dumps in transit",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An untested backup is false safety. Until you’ve restored the site from a copy, you don’t know the dump is intact.",
        },
      ],
      links: [
        {
          label: "Cloud service (storage adjacent)",
          href: "/en/blog/oblachnyy-servis/",
        },
      ],
    },
    {
      title: "Tie-in with SEO and stability",
      level: 2,
      paras: [
        "Search needs availability and predictable server responses. Outages from the DB, 5xx errors, and endless page generation hurt crawl and conversion more than a small meta tag.",
        "Duplicates, pagination, and canonicals are about URLs and templates; the DB only stores content. If the site is down or responds in minutes — stability and backups first, fine semantics later.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "live availability monitoring",
            "current backups with a test",
            "CMS updates and access control",
            "then the finer SEO layer",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "veb-server",
    "logi-servera",
    "oblachnyy-servis",
    "tehnicheskiy-seo-audit",
    "ssl-sertifikat",
  ],
};

/** ES overlay for bazy-dannyh-sayta — same structure as RU JSON / EN. */
export const bazyDannyhSaytaEs: BlogPost = {
  slug: "bazy-dannyh-sayta",
  title: "Bases de datos del sitio: organización y backup",
  date: "2021-01-15",
  category: "SEO",
  cover: "/images/blog/bazy-dannyh-sayta/cover-es.webp",
  excerpt:
    "Qué guarda la base de datos de un sitio, cómo se diferencia de los archivos en disco, por qué importan los backups y cómo no perder pedidos, usuarios y contenido tras un fallo o un hack.",
  lead: [
    "Un sitio no es solo HTML e imágenes. La mayor parte de los datos vivos — productos, pedidos, usuarios, ajustes del CMS — vive en una base de datos. Perder archivos del theme duele; perder la DB sin backup suele significar perder la historia del negocio.",
    "Abajo: cómo se relaciona la DB con los archivos del sitio, por qué existe, qué puede fallar y cómo abordar los backups sin el hábito de «una vez al año en un USB».",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una base de datos de los archivos en el hosting?",
      a: "Los archivos son código, plantillas, media. La DB son registros estructurados: posts, SKUs, pedidos, opciones. La recuperación necesita ambas capas.",
    },
    {
      q: "¿Qué sistemas de base de datos usan más los sitios?",
      a: "CMS clásicos — a menudo MySQL/MariaDB. Aparecen PostgreSQL y otros; sigue la docs del CMS y del hosting.",
    },
    {
      q: "¿Basta un backup solo de archivos?",
      a: "No. Sin un dump de la DB restauras un shell vacío o viejo sin pedidos ni contenido.",
    },
    {
      q: "¿Con qué frecuencia hacer backup?",
      a: "Depende del ritmo de cambios: una tienda con pedidos — más a menudo (diario/horario); un sitio folleto — menos. Crítico: una copia fresca antes de updates del CMS y migraciones.",
    },
    {
      q: "¿Dónde guardar las copias?",
      a: "No solo en el mismo disco del servidor. Hace falta una segunda capa: otro host, object storage, política de la empresa — con una prueba de restore.",
    },
    {
      q: "Si el host hace backup, ¿puedo dejar de pensarlo?",
      a: "Útil como seguro, pero revisa retención, qué incluye (archivos+DB) y si puedes restaurar tú. No confíes a ciegas.",
    },
    {
      q: "¿La base de datos afecta al SEO de forma directa?",
      a: "De forma indirecta: queries lentas y caídas cortan UX y crawl. Los duplicados de contenido van más de URLs y plantillas que de nombres de tablas. Audit técnico y logs son temas hermanos.",
    },
    {
      q: "¿Se puede editar la base a mano en phpMyAdmin?",
      a: "Solo si entiendes el schema y tienes un backup fresco. Un typo en la tabla de pedidos cuesta más que una edición vía el admin del CMS.",
    },
  ],
  sections: [
    {
      title: "Qué es la base de datos de un sitio",
      level: 2,
      paras: [
        "Una base de datos (DB) es almacenamiento estructurado: tablas, filas, relaciones. El CMS lee y escribe ahí contenido y datos de servicio; el servidor web devuelve páginas ensambladas al usuario.",
        "Analogía: un catálogo de coches en tablas (modelo, potencia, color) con filtros y enlaces. Igual una tienda guarda productos y pedidos, un blog — posts y metafields, un portal — usuarios y permisos.",
      ],
      lists: [
        {
          intro: "Suele guardar la DB:",
          items: [
            "registros de contenido (páginas, posts, fichas)",
            "usuarios y roles",
            "ajustes del CMS y plugins",
            "pedidos, carritos, formularios (si no se movieron a servicios externos)",
            "colas de servicio, logs de la app (depende del stack)",
          ],
        },
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Archivos y DB: dos capas de un mismo sitio",
      level: 2,
      paras: [
        "Código del theme, plugins, `uploads` con imágenes — filesystem. Textos de producto, precios, estado del pedido — suele ser la DB. La media a menudo también tiene metadata en la DB (attachments de WordPress y pares).",
        "Al cambiar de host copias ambas capas y fijas el acceso (login de DB, prefijo de tablas, URLs en options). Una capa sin la otra da pantalla blanca o un sitio sin contenido.",
      ],
      lists: [
        {
          intro: "Antes de migrar:",
          items: [
            "dump de DB + archivo de files",
            "versiones PHP/MySQL compatibles",
            "secrets y `.env` fuera de un archivo público",
            "un plan para revisar formularios, pago y cuenta tras el move",
          ],
        },
      ],
    },
    {
      title: "Por qué un sitio necesita una DB en la práctica",
      level: 2,
      paras: [
        "Sin DB un sitio dinámico se vuelve archivos estáticos: difícil editar mil fichas, filtrar, seguir stock, gestionar usuarios. La DB da queries, relaciones y updates puntuales.",
        "El precio de la comodidad es responsabilidad: errores de schema, discos llenos, SQL injection en código vulnerable pegan en los datos. Actualiza código y plugins; limita el acceso a la DB; verifica backups restaurando.",
      ],
      lists: [
        {
          intro: "Riesgos:",
          items: [
            "tablas borradas/corruptas en un update malo",
            "hacks y ransomware",
            "fallo de disco del host",
            "error humano en phpMyAdmin",
            "hinchazón de revisiones y tablas basura → ralentizaciones",
          ],
        },
      ],
    },
    {
      title: "Organización: prefijos, permisos, rendimiento",
      level: 2,
      paras: [
        "En hosting compartido a menudo una base MySQL por sitio; el prefijo de tablas se fija al instalar el CMS. No des a la app acceso root: un usuario de DB aparte con derechos solo sobre la base necesaria.",
        "Rendimiento: índices, cache de objeto/página, limpiar revisiones y transients, límites sensatos. Una DB pesada se ve como timeouts y un admin lento — eso es ingeniería y hosting, no «un plugin SEO más».",
      ],
      lists: [
        {
          intro: "Higiene:",
          items: [
            "contraseñas fuertes de DB, distintas del admin",
            "limitar acceso MySQL remoto",
            "monitorizar tamaño de DB y queries lentas",
            "no guardar dumps de producción en `public_html`",
          ],
        },
      ],
    },
    {
      title: "Backup: qué y cómo",
      level: 2,
      paras: [
        "Un backup de DB suele ser un dump SQL (o un snapshot de volumen del proveedor cloud). Un backup de archivos es un archivo de código + uploads. Restore completo = ambos + secrets del entorno.",
        "Haz copias antes de updates de CMS/plugins y cambios grandes de catálogo. Guarda varios puntos de restore (p. ej. día / semana), no un único «latest» que se sobrescribe.",
      ],
      lists: [
        {
          intro: "Checklist de backup:",
          items: [
            "qué incluye: DB + files + quién es dueño",
            "calendario y retención",
            "almacenamiento fuera del mismo disco",
            "prueba de restore en staging al menos trimestral",
            "cifrar dumps sensibles en tránsito",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Un backup sin probar es falsa seguridad. Hasta que no hayas restaurado el sitio desde una copia, no sabes que el dump está intacto.",
        },
      ],
      links: [
        {
          label: "Servicio en la nube (almacenamiento cercano)",
          href: "/es/blog/oblachnyy-servis/",
        },
      ],
    },
    {
      title: "Encaje con SEO y estabilidad",
      level: 2,
      paras: [
        "La búsqueda necesita disponibilidad y respuestas de servidor predecibles. Caídas por la DB, errores 5xx y generación infinita de páginas dañan crawl y conversión más que un meta tag pequeño.",
        "Duplicados, paginación y canonicals van de URLs y plantillas; la DB solo guarda contenido. Si el sitio cae o responde en minutos — primero estabilidad y backups, luego la semántica fina.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "monitoreo de disponibilidad en vivo",
            "backups actuales con una prueba",
            "updates del CMS y control de accesos",
            "luego la capa SEO más fina",
          ],
        },
      ],
      links: [
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
        {
          label: "Audit SEO técnico",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "veb-server",
    "logi-servera",
    "oblachnyy-servis",
    "tehnicheskiy-seo-audit",
    "ssl-sertifikat",
  ],
};

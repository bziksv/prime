import type { BlogPost } from "../../../data/blog";

/** EN overlay for hosting — same structure as RU JSON. */
export const hostingEn: BlogPost = {
  slug: "hosting",
  title: "What hosting is and how to choose a provider",
  date: "2017-08-30",
  category: "Digital marketing",
  cover: "/images/blog/hosting/cover-en.webp",
  excerpt:
    "Hosting in plain language: why a site needs a server, how shared, VPS, dedicated, and cloud differ, and what to check when choosing — without “uptime = rankings” myths or paid league tables.",
  lead: [
    "Hosting means putting the site’s files and databases on a server that answers visitors around the clock. Without it a domain is only a name — nowhere to serve the content from.",
    "Below: hosting types and how to choose for the job. Plans, panels, and SLAs change; trust the current contract and support, not 2017 screenshots.",
  ],
  faq: [
    {
      q: "Are hosting and domain the same?",
      a: "No. A domain is a name in DNS. Hosting is where the site and DB live. Buy them from different companies if you want — link them via NS.",
    },
    {
      q: "Is free hosting OK for a business?",
      a: "For a throwaway “try it” card, sometimes. For commerce — provider ads, tight limits, weak accountability, and thin support.",
    },
    {
      q: "Shared or VPS for a beginner?",
      a: "A brochure site and a small blog often live on shared. A store, CRM, or traffic spikes — closer to VPS or cloud with clear resources.",
    },
    {
      q: "Does 99.9% uptime guarantee rankings?",
      a: "No. Availability helps users and crawl, but rankings are a separate story: content, demand, competition. Prep ≠ page one in a month — ranking work is planned over 2–6 months.",
    },
    {
      q: "Where should personal data live?",
      a: "If you process personal data of Russian residents, account for localization rules and the provider contract. That’s legal/security territory — not an “obvious plan checkbox.”",
    },
  ],
  sections: [
    {
      title: "Why you need hosting",
      level: 2,
      paras: [
        "When someone opens a page, the browser asks a server for data. Hosting takes the request and returns HTML, images, API answers. Servers usually sit in data centers: power, bandwidth, cooling, physical security.",
        "Analogy: the site is the art; hosting is a 24/7 gallery. A home PC for a public site is almost always worse — unstable link, IP, noise, security.",
      ],
      links: [
        {
          label: "Domain registration",
          href: "/en/blog/registratsiya-domena/",
        },
        {
          label: "Site speed",
          href: "/en/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Free vs paid",
      level: 2,
      paras: [
        "Free platforms often cut CPU and disk, show their own ads, and barely own downtime or deletion. Fine for a practice landing; for leads and payments — reputation and downtime risk.",
        "Paid hosting is sold in packs: space, traffic, PHP/DB, mail, backups, SSL. Price rises with resource guarantees and support level.",
      ],
      lists: [
        {
          intro: "Typical free downsides:",
          items: [
            "small quotas and resource queues",
            "provider ads or redirects",
            "weak accountability for data",
            "CMS and cron limits",
            "painful migration when the project grows",
          ],
        },
      ],
    },
    {
      title: "Paid hosting types",
      level: 2,
      paras: [
        "Shared: many sites on one machine, resources split. Cheap and simple — a neighbor with a heavy script can still eat performance.",
        "VPS — a dedicated slice of CPU/RAM/disk in a virtual machine. More control (often root), more responsibility for the OS and updates.",
        "Dedicated — a whole physical machine. Colocation — your server in the provider’s rack: you pay for space, power, and bandwidth. Cloud — a pool of machines with scaling; billing is often for use, not “one disk forever.”",
      ],
      lists: [
        {
          intro: "Roughly by job:",
          items: [
            "brochure / blog — shared",
            "store, Bitrix, spikes — VPS or managed cloud",
            "high load and your own stack — dedicated / cloud",
            "your own hardware — colocation",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Buying the “cheapest VPS” with no backups or monitoring — then being surprised the DB is gone after a disk failure.",
          kind: "tip",
        },
      ],
    },
    {
      title: "What to check when choosing",
      level: 2,
      paras: [
        "Start with site type and growth: brochure, catalog, store, customer account. Then stack (PHP/Node, DB version), whether you need root, who administers.",
        "Provider age and reputation help, but league tables can be paid — read fresh support and incident reviews, not only “place on a chart.”",
      ],
      lists: [
        {
          intro: "Practical checklist:",
          items: [
            "uptime and SLA in the contract, not only in ads",
            "latency and data-center geography vs your audience",
            "backups: frequency, retention, restore test",
            "panel, SSH, mail, SSL, inode/CPU limits",
            "24/7 support and language",
            "renewal price, not only the first month",
          ],
        },
      ],
    },
    {
      title: "Speed, uptime, and search",
      level: 2,
      paras: [
        "Slow TTFB and frequent 5xx hurt conversion and crawl. “Server response under 200 ms” is a useful engineering target — not a magic ranking formula.",
        "Search engines care about availability and page experience, but hosting alone does not rank you. First a stable server response and correct HTTPS, then content and demand. Ranking work is planned over months, not a one-month flip.",
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
      ],
    },
    {
      title: "Legal and ops nuances",
      level: 2,
      paras: [
        "If the site collects personal data, policy, consent, and where data is processed matter. Rules change — check current norms and a lawyer, not one paragraph of an old guide.",
        "Separately lock access: who owns the hosting account, where invoices go, whether 2FA and a password manager are in place. A staff change should not leave the site ownerless.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Hosting is infrastructure under the site: from shared to cloud. Choose by load, stack, and who will admin.",
        "Domain, DNS, and hosting can be split. Backups and support beat a pretty first-month price.",
      ],
    },
  ],
  closing: [
    "Define the project type, compare shared / VPS / cloud on resources and SLA, check backups and renewal — then pay. Stable hosting does not replace SEO, but without it the site simply does not open.",
  ],
  related: [
    "registratsiya-domena",
    "skorost-sayta",
    "uskorenie-wordpress",
    "domen-pervogo-urovnya",
    "menedzher-paroley",
    "cms-internet-magazina",
  ],
};

/** ES overlay for hosting — same structure as RU JSON / EN. */
export const hostingEs: BlogPost = {
  slug: "hosting",
  title: "Qué es el hosting y cómo elegir proveedor",
  date: "2017-08-30",
  category: "Digital marketing",
  cover: "/images/blog/hosting/cover.webp",
  excerpt:
    "Hosting en lenguaje claro: por qué un sitio necesita servidor, en qué se diferencian shared, VPS, dedicado y cloud, y qué comprobar al elegir — sin mitos de «uptime = rankings» ni tablas de ligas de pago.",
  lead: [
    "Hosting es poner los archivos y bases de datos del sitio en un servidor que responde a visitantes las 24 horas. Sin él un dominio es solo un nombre — no hay desde dónde servir el contenido.",
    "Abajo: tipos de hosting y cómo elegir según el trabajo. Planes, paneles y SLAs cambian; confía en el contrato y el soporte actuales, no en capturas de 2017.",
  ],
  faq: [
    {
      q: "¿Hosting y dominio son lo mismo?",
      a: "No. Un dominio es un nombre en DNS. El hosting es donde viven el sitio y la BD. Puedes comprarlos en empresas distintas si quieres — enlázalos vía NS.",
    },
    {
      q: "¿Vale el hosting gratis para un negocio?",
      a: "Para una tarjeta de «probar» de usar y tirar, a veces. Para comercio — ads del proveedor, límites duros, poca responsabilidad y soporte fino.",
    },
    {
      q: "¿Shared o VPS para un principiante?",
      a: "Un sitio brochure y un blog pequeño suelen vivir en shared. Una tienda, CRM o picos de tráfico — más cerca de VPS o cloud con recursos claros.",
    },
    {
      q: "¿El uptime del 99,9% garantiza rankings?",
      a: "No. La disponibilidad ayuda a usuarios y crawl, pero los rankings son otra historia: contenido, demanda, competencia. Prep ≠ primera página en un mes — el trabajo de rankings se planifica en 2–6 meses.",
    },
    {
      q: "¿Dónde deben vivir los datos personales?",
      a: "Si procesas datos personales de residentes, ten en cuenta las reglas de localización y el contrato del proveedor. Es territorio legal/seguridad — no un «checkbox obvio del plan».",
    },
  ],
  sections: [
    {
      title: "Para qué hace falta hosting",
      level: 2,
      paras: [
        "Cuando alguien abre una página, el navegador pide datos a un servidor. El hosting toma la petición y devuelve HTML, imágenes, respuestas API. Los servidores suelen estar en data centers: energía, ancho de banda, refrigeración, seguridad física.",
        "Analogía: el sitio es el arte; el hosting es una galería 24/7. Un PC de casa para un sitio público casi siempre es peor — enlace inestable, IP, ruido, seguridad.",
      ],
      links: [
        {
          label: "Registro de dominio",
          href: "/blog/registratsiya-domena/",
        },
        {
          label: "Velocidad del sitio",
          href: "/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Gratis vs de pago",
      level: 2,
      paras: [
        "Las plataformas gratis a menudo recortan CPU y disco, muestran sus propios ads y apenas responden por downtime o borrado. Vale para una landing de práctica; para leads y pagos — riesgo de reputación y caídas.",
        "El hosting de pago se vende en packs: espacio, tráfico, PHP/BD, correo, backups, SSL. El precio sube con garantías de recursos y nivel de soporte.",
      ],
      lists: [
        {
          intro: "Desventajas típicas de lo gratis:",
          items: [
            "cuotas pequeñas y colas de recursos",
            "ads o redirects del proveedor",
            "poca responsabilidad sobre los datos",
            "límites de CMS y cron",
            "migración dolorosa cuando el proyecto crece",
          ],
        },
      ],
    },
    {
      title: "Tipos de hosting de pago",
      level: 2,
      paras: [
        "Shared: muchos sitios en una máquina, recursos repartidos. Barato y simple — un vecino con un script pesado aún puede comerse el rendimiento.",
        "VPS — una porción dedicada de CPU/RAM/disco en una máquina virtual. Más control (a menudo root), más responsabilidad sobre el SO y las updates.",
        "Dedicated — una máquina física entera. Colocation — tu servidor en el rack del proveedor: pagas espacio, energía y ancho de banda. Cloud — un pool de máquinas con escalado; la facturación suele ser por uso, no «un disco para siempre».",
      ],
      lists: [
        {
          intro: "A ojo, por trabajo:",
          items: [
            "brochure / blog — shared",
            "tienda, Bitrix, picos — VPS o cloud gestionado",
            "alta carga y stack propio — dedicated / cloud",
            "hardware propio — colocation",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Comprar el «VPS más barato» sin backups ni monitoreo — y luego sorprenderse de que la BD desapareció tras un fallo de disco.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Qué comprobar al elegir",
      level: 2,
      paras: [
        "Empieza por tipo de sitio y crecimiento: brochure, catálogo, tienda, cuenta de cliente. Luego stack (PHP/Node, versión de BD), si necesitas root, quién administra.",
        "Edad y reputación del proveedor ayudan, pero las tablas de ligas pueden ser de pago — lee reviews frescas de soporte e incidentes, no solo «puesto en un chart».",
      ],
      lists: [
        {
          intro: "Checklist práctico:",
          items: [
            "uptime y SLA en el contrato, no solo en los ads",
            "latencia y geografía del data center vs tu audiencia",
            "backups: frecuencia, retención, prueba de restore",
            "panel, SSH, correo, SSL, límites de inodes/CPU",
            "soporte 24/7 e idioma",
            "precio de renovación, no solo el primer mes",
          ],
        },
      ],
    },
    {
      title: "Velocidad, uptime y búsqueda",
      level: 2,
      paras: [
        "TTFB lento y 5xx frecuentes perjudican conversión y crawl. «Respuesta del servidor bajo 200 ms» es un objetivo de ingeniería útil — no una fórmula mágica de rankings.",
        "A los buscadores les importa la disponibilidad y la experiencia de página, pero el hosting solo no te posiciona. Primero respuesta estable del servidor y HTTPS correcto, luego contenido y demanda. El trabajo de rankings se planifica en meses, no con un flip de un mes.",
      ],
      links: [
        {
          label: "Acelerar WordPress",
          href: "/blog/uskorenie-wordpress/",
        },
      ],
    },
    {
      title: "Matices legales y de ops",
      level: 2,
      paras: [
        "Si el sitio recoge datos personales, importan política, consentimiento y dónde se procesan. Las reglas cambian — comprueba normas actuales y un abogado, no un párrafo de una guía vieja.",
        "Por separado cierra el acceso: quién es dueño de la cuenta de hosting, dónde van las facturas, si hay 2FA y un gestor de contraseñas. Un cambio de personal no debería dejar el sitio sin dueño.",
      ],
      links: [
        {
          label: "Gestor de contraseñas",
          href: "/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "El hosting es infraestructura bajo el sitio: de shared a cloud. Elige por carga, stack y quién administre.",
        "Dominio, DNS y hosting se pueden separar. Backups y soporte ganan a un precio bonito del primer mes.",
      ],
    },
  ],
  closing: [
    "Define el tipo de proyecto, compara shared / VPS / cloud en recursos y SLA, revisa backups y renovación — luego paga. Un hosting estable no sustituye el SEO, pero sin él el sitio simplemente no abre.",
  ],
  related: [
    "registratsiya-domena",
    "skorost-sayta",
    "uskorenie-wordpress",
    "domen-pervogo-urovnya",
    "menedzher-paroley",
    "cms-internet-magazina",
  ],
};

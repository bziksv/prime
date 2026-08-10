import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-server — same structure as RU JSON. */
export const vebServerEn: BlogPost = {
  slug: "veb-server",
  title: "Web server: what it is, how it works, and Apache vs Nginx vs IIS",
  date: "2021-12-30",
  category: "Hosting",
  cover: "/images/blog/veb-server/cover-en.webp",
  excerpt:
    "What a web server is in plain words: browser request, page response, hosting role, HTTPS, Apache/Nginx/IIS, and local stacks for development.",
  lead: [
    "A web server takes a browser request and returns a page, file, or error. It’s both software (Apache, Nginx, IIS) and the machine or cloud where it runs.",
    "Below: how it works, what makes up the “domain → server → site” chain, and what to watch when picking a stack — without nostalgia for outdated local packages.",
  ],
  faq: [
    {
      q: "Is a web server a computer or a program?",
      a: "Both meanings are alive: software that answers HTTP(S) requests, and the server environment (VPS/dedicated/cloud) where that software runs.",
    },
    {
      q: "How does Apache differ from Nginx?",
      a: "Both serve sites. Nginx is often a fast front (static, proxy); Apache is flexible and familiar on many shared hosts. In practice they’re often combined.",
    },
    {
      q: "Why HTTPS?",
      a: "It encrypts traffic between browser and server. Today it’s a baseline standard, plus a requirement of many browsers and search engines.",
    },
    {
      q: "Does a small site need its own server?",
      a: "Usually no: hosting/VPS from a provider is enough. Your own hardware makes sense for special loads and admin competence.",
    },
    {
      q: "What is a local server for development?",
      a: "An environment on your PC (Docker, OpenServer, XAMPP and analogues) to run the site without deploying to production.",
    },
  ],
  sections: [
    {
      title: "In plain words",
      level: 2,
      paras: [
        "Library analogy: the reader (browser) asks for a book (URL); the librarian (web server) finds the material in storage and hands it over. Unlike one book checked out, a site can be “read” by thousands at once.",
        "A sysadmin will say “hardware and network”; a developer — “software that serves HTTP.” Both are right.",
      ],
    },
    {
      title: "Jobs and functions",
      level: 2,
      paras: [
        "The server accepts requests, may run a backend (PHP, Node, Python…), returns HTML/files, writes logs, can restrict access, and serve related roles (static delivery, proxy).",
      ],
      lists: [
        {
          intro: "Typical loop:",
          items: [
            "accept the request",
            "find the resource or build a response via the app",
            "return status and response body",
            "log the hit",
            "with HTTPS — keep an encrypted channel",
          ],
        },
      ],
    },
    {
      title: "How a request flows",
      level: 2,
      paras: [
        "The user types an address or clicks a link. DNS turns the name into an IP. The browser sends an HTTPS request. The server handles it and returns a page or an error code (404, 500…).",
      ],
      lists: [
        {
          intro: "For a site to open you need:",
          items: [
            "hosting or a server with enough resources",
            "web server software",
            "a domain and DNS record",
            "site files / an application",
            "an HTTPS certificate (usually via Let’s Encrypt or the hosting panel)",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Apache, Nginx, IIS",
      level: 2,
      paras: [
        "Apache — shared-hosting classic, modularity, familiar .htaccess. Nginx — strong on static and as a reverse proxy. IIS — Windows Server ecosystem.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "small site on hosting — often Apache or Nginx out of the box from the panel",
            "high load / microservices — Nginx (or analogue) in front of the app",
            "corporate Windows stack — IIS",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "The shell choice is secondary to update security, backups, and monitoring. A trendy server with leaky PHP is worse than a boring but cared-for one.",
        },
      ],
      tables: [
        {
          caption: "Rough cheat sheet",
          headers: ["Software", "Strengths", "Where you often see it"],
          rows: [
            ["Apache", "Flexibility, .htaccess", "Shared hosting, CMS"],
            ["Nginx", "Static, proxy, load", "Prod, CDN setups"],
            ["IIS", "Windows integration", "Corporate .NET environments"],
          ],
        },
      ],
    },
    {
      title: "Local stacks for development",
      level: 2,
      paras: [
        "OpenServer, XAMPP and similar packs suit beginners. Denver is long outdated — don’t aim at it in the 2020s. Teams more often use Docker or built-in framework environments.",
        "Local is for breaking and fixing the site safely — not to replace production hosting.",
      ],
      lists: [
        {
          intro: "Minimum to start:",
          items: [
            "PHP/Node + DB per project needs",
            "HTTPS in prod (locally — as needed)",
            "matching major versions with prod when possible",
          ],
        },
      ],
    },
    {
      title: "Link to SEO and site availability",
      level: 2,
      paras: [
        "If the server returns 5xx, blocks bots, or slows TTFB, both people and indexing suffer. After a host change check response codes, redirects, and HTTPS.",
      ],
      lists: [
        {
          intro: "After a move:",
          items: [
            "home and key URLs return 200",
            "www/non-www and http→https are consistent",
            "sitemap and robots are reachable",
            "no mass 404s on old paths",
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
  ],
};

/** ES overlay for veb-server — same structure as RU JSON / EN. */
export const vebServerEs: BlogPost = {
  slug: "veb-server",
  title: "Servidor web: qué es, cómo funciona y Apache vs Nginx vs IIS",
  date: "2021-12-30",
  category: "Hosting",
  cover: "/images/blog/veb-server/cover-es.webp",
  excerpt:
    "Qué es un servidor web en palabras claras: petición del navegador, respuesta de página, rol del hosting, HTTPS, Apache/Nginx/IIS y stacks locales para desarrollo.",
  lead: [
    "Un servidor web toma una petición del navegador y devuelve una página, un archivo o un error. Es tanto software (Apache, Nginx, IIS) como la máquina o cloud donde corre.",
    "Abajo: cómo funciona, qué forma la cadena «dominio → servidor → sitio» y qué mirar al elegir stack — sin nostalgia por packs locales desfasados.",
  ],
  faq: [
    {
      q: "¿Un servidor web es un ordenador o un programa?",
      a: "Ambos sentidos viven: el software que responde peticiones HTTP(S) y el entorno de servidor (VPS/dedicated/cloud) donde corre ese software.",
    },
    {
      q: "¿En qué se diferencia Apache de Nginx?",
      a: "Ambos sirven sitios. Nginx suele ser un front rápido (estáticos, proxy); Apache es flexible y familiar en muchos shared hosts. En la práctica a menudo se combinan.",
    },
    {
      q: "¿Por qué HTTPS?",
      a: "Cifra el tráfico entre navegador y servidor. Hoy es un estándar base, más un requisito de muchos navegadores y buscadores.",
    },
    {
      q: "¿Un sitio pequeño necesita servidor propio?",
      a: "Normalmente no: basta hosting/VPS de un proveedor. Hardware propio tiene sentido con cargas especiales y competencia de admin.",
    },
    {
      q: "¿Qué es un servidor local para desarrollo?",
      a: "Un entorno en tu PC (Docker, OpenServer, XAMPP y análogos) para correr el sitio sin desplegar a producción.",
    },
  ],
  sections: [
    {
      title: "En palabras claras",
      level: 2,
      paras: [
        "Analogía de biblioteca: el lector (navegador) pide un libro (URL); el bibliotecario (servidor web) encuentra el material en el depósito y lo entrega. A diferencia de un libro prestado, un sitio puede «leerse» por miles a la vez.",
        "Un sysadmin dirá «hardware y red»; un desarrollador — «software que sirve HTTP». Ambos tienen razón.",
      ],
    },
    {
      title: "Trabajos y funciones",
      level: 2,
      paras: [
        "El servidor acepta peticiones, puede ejecutar un backend (PHP, Node, Python…), devuelve HTML/archivos, escribe logs, puede restringir acceso y servir roles afines (entrega de estáticos, proxy).",
      ],
      lists: [
        {
          intro: "Bucle típico:",
          items: [
            "aceptar la petición",
            "encontrar el recurso o construir una respuesta vía la app",
            "devolver status y cuerpo de respuesta",
            "registrar el hit",
            "con HTTPS — mantener un canal cifrado",
          ],
        },
      ],
    },
    {
      title: "Cómo fluye una petición",
      level: 2,
      paras: [
        "El usuario escribe una dirección o hace clic en un enlace. DNS convierte el nombre en IP. El navegador envía una petición HTTPS. El servidor la gestiona y devuelve una página o un código de error (404, 500…).",
      ],
      lists: [
        {
          intro: "Para que un sitio abra hace falta:",
          items: [
            "hosting o un servidor con recursos suficientes",
            "software de servidor web",
            "un dominio y registro DNS",
            "archivos del sitio / una aplicación",
            "un certificado HTTPS (suele ser vía Let’s Encrypt o el panel de hosting)",
          ],
        },
      ],
      links: [
        {
          label: "Hipertexto",
          href: "/blog/gipertekst/",
        },
        {
          label: "Hosting",
          href: "/es/blog/hosting/",
        },
      ],
    },
    {
      title: "Apache, Nginx, IIS",
      level: 2,
      paras: [
        "Apache — clásico de shared hosting, modularidad, .htaccess familiar. Nginx — fuerte en estáticos y como reverse proxy. IIS — ecosistema Windows Server.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "sitio pequeño en hosting — a menudo Apache o Nginx de serie del panel",
            "alta carga / microservicios — Nginx (o análogo) delante de la app",
            "stack corporativo Windows — IIS",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La elección de shell es secundaria frente a seguridad de updates, backups y monitoreo. Un servidor de moda con PHP agujereado es peor que uno aburrido pero cuidado.",
        },
      ],
      tables: [
        {
          caption: "Chuleta orientativa",
          headers: ["Software", "Fortalezas", "Dónde se ve a menudo"],
          rows: [
            ["Apache", "Flexibilidad, .htaccess", "Shared hosting, CMS"],
            ["Nginx", "Estáticos, proxy, carga", "Prod, setups CDN"],
            ["IIS", "Integración Windows", "Entornos corporativos .NET"],
          ],
        },
      ],
    },
    {
      title: "Stacks locales para desarrollo",
      level: 2,
      paras: [
        "OpenServer, XAMPP y packs similares sirven a principiantes. Denver lleva tiempo desfasado — no apuntes a él en los 2020. Los equipos usan más Docker o entornos integrados del framework.",
        "Lo local es para romper y arreglar el sitio con seguridad — no para sustituir el hosting de producción.",
      ],
      lists: [
        {
          intro: "Mínimo para arrancar:",
          items: [
            "PHP/Node + BD según necesidades del proyecto",
            "HTTPS en prod (en local — según haga falta)",
            "coincidir versiones mayores con prod cuando sea posible",
          ],
        },
      ],
    },
    {
      title: "Vínculo con SEO y disponibilidad del sitio",
      level: 2,
      paras: [
        "Si el servidor devuelve 5xx, bloquea bots o ralentiza el TTFB, sufren personas e indexación. Tras un cambio de host comprueba códigos de respuesta, redirects y HTTPS.",
      ],
      lists: [
        {
          intro: "Tras un traslado:",
          items: [
            "home y URLs clave devuelven 200",
            "www/non-www y http→https son coherentes",
            "sitemap y robots son alcanzables",
            "no hay 404 masivos en rutas viejas",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};

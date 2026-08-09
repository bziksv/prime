import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-interfeys — same structure as RU JSON. */
export const vebInterfeysEn: BlogPost = {
  slug: "veb-interfeys",
  title: "Web interface: what it is and where you meet it",
  date: "2021-03-11",
  category: "Blog",
  cover: "/images/blog/veb-interfeys/cover-en.webp",
  excerpt:
    "What a web interface is: using a service in the browser instead of a local app — mail, hosting panel, router, cloud. Why teams build it that way, and why it isn’t “just a website.”",
  lead: [
    "A web interface is the set of browser pages through which a person controls a service or a device on a server: buttons, forms, menus, status. It isn’t necessarily a company’s public site — it’s an access shell.",
    "Below: what the term means and typical examples — webmail, router panel, hosting, cloud. Commercial-site usability and a store account are related; here the focus is the idea of web UI itself.",
  ],
  faq: [
    {
      q: "Is a web interface the same as a website?",
      a: "A site is a special case. Web UI is broader: hosting admin, billing account, router settings page are web UI too.",
    },
    {
      q: "How does it differ from a desktop app?",
      a: "Logic and data live on the server (or in firmware with HTTP access); the client needs a browser and a network, not a thick install — though desktop clients haven’t disappeared.",
    },
    {
      q: "Is it the same as an API or web service?",
      a: "No. An API is a contract for programs. A web interface is for people. Many products offer both.",
    },
    {
      q: "Is opening a router panel safe?",
      a: "Only on a trusted network, after changing the factory password, and without exposing admin to the open internet unprotected.",
    },
    {
      q: "Are Plesk and cPanel web interfaces?",
      a: "Yes: graphical hosting control panels in the browser.",
    },
    {
      q: "Does every product need a web interface?",
      a: "Not always. Sometimes an app or CLI is enough. The browser shines for rare settings and access from someone else’s PC.",
    },
    {
      q: "How does this relate to a site account?",
      a: "A customer account is a typical web UI. A separate article covers account jobs in marketing and product.",
    },
    {
      q: "Does it affect SEO?",
      a: "Public pages — yes, under the usual rules. Closed dashboards are usually noindex; SEO is secondary there.",
    },
  ],
  sections: [
    {
      title: "What the term means",
      level: 2,
      paras: [
        "Web is a network-reachable environment. An interface is how you interact: fields, buttons, tables, setup wizards. Together you control a service without installing a thick client.",
        "Not every site is a “service web interface”: a landing page may only tell a story. An interface appears when the browser does actions — sign in, configure, send, pay, upload a file.",
      ],
      links: [
        {
          label: "Web services and APIs",
          href: "/en/blog/veb-servisy/",
        },
        {
          label: "Customer account",
          href: "/en/blog/lichnyy-kabinet/",
        },
      ],
    },
    {
      title: "Webmail",
      level: 2,
      paras: [
        "Classic example: Gmail, Yandex Mail, Mail — read and send mail in the browser. People used to install Outlook or The Bat more often; a web client covers most everyday tasks now.",
        "The UI has the same entities as an app: inbox, spam, filters, search. Plus — access from any device with a browser.",
      ],
      links: [
        {
          label: "Email service",
          href: "/en/blog/pochtovyy-servis/",
        },
      ],
    },
    {
      title: "Network gear",
      level: 2,
      paras: [
        "Routers and some cameras expose settings over HTTP(S): open a LAN gateway address, sign in, change Wi‑Fi and DHCP.",
        "People used to edit via Telnet/CLI more often. A web shell lowers the bar but doesn’t remove caution: factory passwords and “admin on the open internet” are a bad idea.",
        "Exact URL and login are on the sticker or model manual — don’t copy someone else’s screenshots.",
      ],
    },
    {
      title: "Hosting panel",
      level: 2,
      paras: [
        "Hosts give a panel (ISPmanager, Plesk, cPanel, and others): domains, DNS, mail, SSL, backups, databases. That’s a web UI for administering server resources.",
        "Menu names drift across versions and brands. Find the action by meaning (“SSL,” “databases,” “cron”), not by a 2021 article screenshot.",
      ],
      links: [
        {
          label: "Hosting",
          href: "/en/blog/hosting/",
        },
      ],
    },
    {
      title: "Cloud storage and dashboards",
      level: 2,
      paras: [
        "A drive in the browser, cloud billing, a SaaS console — again web UI: files, permissions, quotas without installing a client (the client is optional).",
        "For business, role separation and action audit matter — those are interface requirements, not “pretty buttons.”",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/en/blog/yandeks-disk/",
        },
        {
          label: "Website usability",
          href: "/en/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A web interface means controlling a service or device through the browser.",
        "Examples: mail, router, hosting panel, cloud, account area.",
        "Don’t mix it up with an API for programs or a public marketing site with no actions.",
      ],
    },
  ],
  closing: [
    "Next time you open a hosting panel or webmail, notice: that’s a web interface — a service in the browser, not “just another blog page.”",
  ],
  related: [
    "lichnyy-kabinet",
    "veb-servisy",
    "hosting",
    "yuzabiliti",
    "pochtovyy-servis",
    "yandeks-disk",
  ],
};

/** ES overlay for veb-interfeys — same structure as RU JSON / EN. */
export const vebInterfeysEs: BlogPost = {
  slug: "veb-interfeys",
  title: "Interfaz web: qué es y dónde la encuentras",
  date: "2021-03-11",
  category: "Blog",
  cover: "/images/blog/veb-interfeys/cover.webp",
  excerpt:
    "Qué es una interfaz web: usar un servicio en el navegador en lugar de una app local — correo, panel de hosting, router, cloud. Por qué los equipos la construyen así y por qué no es «solo un sitio web».",
  lead: [
    "Una interfaz web es el conjunto de páginas del navegador con las que una persona controla un servicio o un dispositivo en un servidor: botones, formularios, menús, estado. No es necesariamente el sitio público de una empresa — es una capa de acceso.",
    "Abajo: qué significa el término y ejemplos típicos — webmail, panel del router, hosting, cloud. La usabilidad de un sitio comercial y la cuenta de una tienda están relacionados; aquí el foco es la idea misma de UI web.",
  ],
  faq: [
    {
      q: "¿Una interfaz web es lo mismo que un sitio web?",
      a: "Un sitio es un caso especial. La UI web es más amplia: admin de hosting, cuenta de facturación, página de ajustes del router también son UI web.",
    },
    {
      q: "¿En qué se diferencia de una app de escritorio?",
      a: "La lógica y los datos viven en el servidor (o en firmware con acceso HTTP); el cliente necesita un navegador y red, no una instalación pesada — aunque los clientes de escritorio no han desaparecido.",
    },
    {
      q: "¿Es lo mismo que una API o un servicio web?",
      a: "No. Una API es un contrato para programas. Una interfaz web es para personas. Muchos productos ofrecen ambas.",
    },
    {
      q: "¿Es seguro abrir el panel de un router?",
      a: "Solo en una red de confianza, tras cambiar la contraseña de fábrica y sin exponer el admin a internet abierto sin protección.",
    },
    {
      q: "¿Plesk y cPanel son interfaces web?",
      a: "Sí: paneles gráficos de control de hosting en el navegador.",
    },
    {
      q: "¿Todo producto necesita una interfaz web?",
      a: "No siempre. A veces basta una app o CLI. El navegador brilla para ajustes poco frecuentes y acceso desde el PC de otro.",
    },
    {
      q: "¿Cómo se relaciona con la cuenta de un sitio?",
      a: "La cuenta de cliente es una UI web típica. Un artículo aparte cubre los trabajos de la cuenta en marketing y producto.",
    },
    {
      q: "¿Afecta al SEO?",
      a: "Las páginas públicas — sí, bajo las reglas habituales. Los dashboards cerrados suelen ser noindex; el SEO ahí es secundario.",
    },
  ],
  sections: [
    {
      title: "Qué significa el término",
      level: 2,
      paras: [
        "Web es un entorno alcanzable por red. Una interfaz es cómo interactúas: campos, botones, tablas, asistentes de setup. Juntos controlas un servicio sin instalar un cliente pesado.",
        "No todo sitio es una «interfaz web de servicio»: un landing puede solo contar una historia. La interfaz aparece cuando el navegador hace acciones — iniciar sesión, configurar, enviar, pagar, subir un archivo.",
      ],
      links: [
        {
          label: "Servicios web y APIs",
          href: "/blog/veb-servisy/",
        },
        {
          label: "Cuenta de cliente",
          href: "/blog/lichnyy-kabinet/",
        },
      ],
    },
    {
      title: "Webmail",
      level: 2,
      paras: [
        "Ejemplo clásico: Gmail, Yandex Mail, Mail — leer y enviar correo en el navegador. Antes se instalaba Outlook o The Bat con más frecuencia; un cliente web cubre la mayoría de tareas cotidianas ahora.",
        "La UI tiene las mismas entidades que una app: bandeja, spam, filtros, búsqueda. Plus — acceso desde cualquier dispositivo con navegador.",
      ],
      links: [
        {
          label: "Servicio de email",
          href: "/es/blog/pochtovyy-servis/",
        },
      ],
    },
    {
      title: "Equipos de red",
      level: 2,
      paras: [
        "Routers y algunas cámaras exponen ajustes por HTTP(S): abre la dirección del gateway en la LAN, inicia sesión, cambia Wi‑Fi y DHCP.",
        "Antes se editaba más a menudo vía Telnet/CLI. Una capa web baja la barra pero no quita la cautela: contraseñas de fábrica y «admin en internet abierto» son mala idea.",
        "La URL y el login exactos están en la pegatina o el manual del modelo — no copies capturas ajenas.",
      ],
    },
    {
      title: "Panel de hosting",
      level: 2,
      paras: [
        "Los hosts dan un panel (ISPmanager, Plesk, cPanel y otros): dominios, DNS, correo, SSL, backups, bases de datos. Eso es una UI web para administrar recursos del servidor.",
        "Los nombres de menú varían entre versiones y marcas. Busca la acción por sentido («SSL», «bases de datos», «cron»), no por una captura de un artículo de 2021.",
      ],
      links: [
        {
          label: "Hosting",
          href: "/es/blog/hosting/",
        },
      ],
    },
    {
      title: "Almacenamiento en la nube y dashboards",
      level: 2,
      paras: [
        "Un drive en el navegador, facturación cloud, una consola SaaS — otra vez UI web: archivos, permisos, cuotas sin instalar un cliente (el cliente es opcional).",
        "Para negocio importan la separación de roles y la auditoría de acciones — esos son requisitos de interfaz, no «botones bonitos».",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/blog/yandeks-disk/",
        },
        {
          label: "Usabilidad de un sitio",
          href: "/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Una interfaz web significa controlar un servicio o dispositivo a través del navegador.",
        "Ejemplos: correo, router, panel de hosting, cloud, área de cuenta.",
        "No la mezcles con una API para programas ni con un sitio de marketing público sin acciones.",
      ],
    },
  ],
  closing: [
    "La próxima vez que abras un panel de hosting o webmail, fíjate: eso es una interfaz web — un servicio en el navegador, no «otra página de blog».",
  ],
  related: [
    "hosting",
    "pochtovyy-servis",
    "chto-takoe-veb-sayt",
    "lichnyy-kabinet",
    "veb-servisy",
    "yuzabiliti",
  ],
};

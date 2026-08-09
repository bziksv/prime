import type { BlogPost } from "../../../data/blog";

/** EN overlay for proksi-server — same structure as RU JSON. */
export const proksiServerEn: BlogPost = {
  slug: "proksi-server",
  title: "Proxy server: what it is and why you need it",
  date: "2018-04-25",
  category: "Digital marketing",
  cover: "/images/blog/proksi-server/cover-en.webp",
  excerpt:
    "What a proxy server is in plain words: how the middleman between client and site works, forward vs reverse, cache and corporate gateway — without ban-bypass guides or shady IP lists.",
  lead: [
    "A proxy server is an intermediate node between your device (or internal network) and a target resource on the internet. The request goes to the proxy first, then to the site; the response returns the same way. Sometimes the parties don’t even know about the middleman.",
    "Below: how the connection works, why providers and companies deploy proxies, how forward differs from reverse on a site, and the risks of “free” public proxies. We don’t cover bypassing forum bans or other people’s ToS as practice.",
  ],
  faq: [
    {
      q: "Is a proxy the same as a VPN?",
      a: "Related ideas (traffic via someone else’s node), different model. A VPN usually encrypts a full tunnel; a proxy more often works at the app/HTTP layer and doesn’t replace a VPN one-to-one.",
    },
    {
      q: "Why does a company need a proxy?",
      a: "Control internet access from the LAN, cache, filtering, logs, bandwidth savings — typical corporate scenarios.",
    },
    {
      q: "What is a reverse proxy used for?",
      a: "A proxy “in front of” your site (often nginx): takes user requests, serves static files, balances to the backend, terminates HTTPS.",
    },
    {
      q: "Is grabbing a free proxy from a list safe?",
      a: "Often no: interception, tampering, malicious JS, credential leaks. For work pick a clear provider and policy.",
    },
    {
      q: "Does a proxy hide me completely?",
      a: "No. Anonymity depends on type, headers, DNS, and behavior. Full invisibility doesn’t exist.",
    },
  ],
  sections: [
    {
      title: "What a proxy is in plain words",
      level: 2,
      paras: [
        "From English proxy — “representative.” The client connects to the proxy and asks for a resource on another server. The proxy opens a connection to the target, gets the response, and returns it to the client. With cache on, a repeat request may be served from a copy.",
        "Every node on the network has an IP. The destination site via a proxy more often sees the middleman’s address, not the user’s home IP — hence the “anonymity” confusion.",
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "How the connection works",
      level: 2,
      paras: [
        "Path: browser → proxy → target server → back. The proxy can change the request (add headers, compress the response, filter URLs) or serve a page from cache without going to the internet.",
        "Providers sometimes transparently enable their proxy for subscribers: cache popular resources, compression, access policies. The user may not configure it by hand.",
      ],
      tables: [
        {
          caption: "Two “proxy” directions",
          headers: ["Type", "Who is the client", "Why"],
          rows: [
            ["Forward", "User / office", "Internet exit via a gateway"],
            ["Reverse", "Site visitors", "Front in front of the app/servers"],
            ["Caching", "Both scenarios", "Cut load and traffic"],
          ],
        },
      ],
    },
    {
      title: "Why people use proxies",
      level: 2,
      paras: [
        "LAN → internet through one controlled gateway. Cache and compression on thin links. Filtering malware and unwanted URLs by company policy. Logging outbound requests for security.",
        "On the site side a reverse proxy (nginx and peers) terminates SSL, serves static files, balances load, and hides internal app ports — a related but different “middleman” role.",
      ],
      lists: [
        {
          intro: "Legitimate scenarios:",
          items: [
            "corporate internet gateway",
            "speeding repeat loads with cache",
            "reverse proxy / CDN edge in front of the site",
            "isolating internal services from direct access",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "About “getting on a forum after a ban”",
          text: "Changing IP via a proxy to bypass an account block or platform rules breaks ToS and is often useless: they ban devices, cookies, behavior. We don’t recommend those schemes.",
        },
      ],
      links: [
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Anonymity and limits",
      level: 2,
      paras: [
        "There are different “transparency” degrees: some proxies pass the real IP in headers, others try to hide it. Even an “anonymous” node doesn’t make you invulnerable: proxy-provider logs, WebRTC/DNS leaks, a malicious middleman.",
        "Geo content restrictions are a separate legal and contractual topic. Don’t confuse technical ability with rights-holder or legal permission.",
      ],
    },
    {
      title: "Risks of free and “gray” lists",
      level: 2,
      paras: [
        "Public proxy lists often include other people’s compromised machines, honeypots, and nodes that read traffic. Don’t enter passwords or pay through an unknown proxy.",
        "For scraping and automation, mass proxies hit rate limits and site defenses — APIs and data-owner consent are more legitimate than an “IP farm.”",
      ],
      links: [
        {
          label: "Protection from scraping",
          href: "/en/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A proxy is a network middleman: forward for clients, reverse for sites, plus cache and policies. It’s infrastructure — not “magic anonymity.”",
        "Pick a clear operator; free lists and bypassing other people’s rules are a bad idea for business and security.",
      ],
    },
  ],
  closing: [
    "If you need office internet control — look at a corporate forward proxy; if you’re speeding a site — reverse proxy/CDN. Don’t confuse infrastructure with gray IP-swap schemes.",
  ],
  related: [
    "veb-server",
    "oshibka-502",
    "url-adres",
    "zashchita-ot-parsinga",
    "https-seo",
    "ssl-sertifikat",
  ],
};

/** ES overlay for proksi-server — same structure as RU JSON / EN. */
export const proksiServerEs: BlogPost = {
  slug: "proksi-server",
  title: "Servidor proxy: qué es y para qué hace falta",
  date: "2018-04-25",
  category: "Digital marketing",
  cover: "/images/blog/proksi-server/cover.webp",
  excerpt:
    "Qué es un servidor proxy en palabras simples: cómo funciona el intermediario entre cliente y sitio, forward vs reverse, caché y gateway corporativo — sin guías de saltar bans ni listas dudosas de IP.",
  lead: [
    "Un servidor proxy es un nodo intermedio entre tu dispositivo (o red interna) y un recurso objetivo en internet. La petición va primero al proxy, luego al sitio; la respuesta vuelve por el mismo camino. A veces las partes ni saben del intermediario.",
    "Abajo: cómo funciona la conexión, por qué providers y empresas despliegan proxies, en qué se diferencia forward de reverse en un sitio, y los riesgos de proxies públicos «gratis». No cubrimos saltar bans de foros u otros ToS ajenos como práctica.",
  ],
  faq: [
    {
      q: "¿Un proxy es lo mismo que una VPN?",
      a: "Ideas relacionadas (tráfico vía un nodo ajeno), modelo distinto. Una VPN suele cifrar un túnel completo; un proxy trabaja más a menudo en la capa app/HTTP y no sustituye a una VPN uno a uno.",
    },
    {
      q: "¿Por qué una empresa necesita un proxy?",
      a: "Controlar el acceso a internet desde la LAN, caché, filtrado, logs, ahorro de ancho de banda — escenarios corporativos típicos.",
    },
    {
      q: "¿Para qué sirve un reverse proxy?",
      a: "Un proxy «delante» de tu sitio (a menudo nginx): toma peticiones de usuarios, sirve estáticos, balancea al backend, termina HTTPS.",
    },
    {
      q: "¿Es seguro pillar un proxy gratis de una lista?",
      a: "A menudo no: interceptación, manipulación, JS malicioso, fugas de credenciales. Para trabajo elige un provider claro y una política.",
    },
    {
      q: "¿Un proxy me oculta por completo?",
      a: "No. La anonimidad depende del tipo, headers, DNS y comportamiento. La invisibilidad total no existe.",
    },
  ],
  sections: [
    {
      title: "Qué es un proxy en palabras simples",
      level: 2,
      paras: [
        "Del inglés proxy — «representante». El cliente se conecta al proxy y pide un recurso en otro servidor. El proxy abre una conexión al objetivo, obtiene la respuesta y la devuelve al cliente. Con caché, una petición repetida puede servirse desde una copia.",
        "Cada nodo de la red tiene una IP. El sitio de destino vía proxy suele ver más a menudo la dirección del intermediario, no la IP de casa del usuario — de ahí la confusión de «anonimidad».",
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
      ],
    },
    {
      title: "Cómo funciona la conexión",
      level: 2,
      paras: [
        "Camino: navegador → proxy → servidor objetivo → vuelta. El proxy puede cambiar la petición (añadir headers, comprimir la respuesta, filtrar URLs) o servir una página desde caché sin salir a internet.",
        "Los providers a veces habilitan de forma transparente su proxy para suscriptores: caché de recursos populares, compresión, políticas de acceso. El usuario puede no configurarlo a mano.",
      ],
      tables: [
        {
          caption: "Dos direcciones de «proxy»",
          headers: ["Tipo", "Quién es el cliente", "Para qué"],
          rows: [
            ["Forward", "Usuario / oficina", "Salida a internet vía un gateway"],
            ["Reverse", "Visitantes del sitio", "Front delante de la app/servidores"],
            ["Caching", "Ambos escenarios", "Bajar carga y tráfico"],
          ],
        },
      ],
    },
    {
      title: "Por qué la gente usa proxies",
      level: 2,
      paras: [
        "LAN → internet a través de un gateway controlado. Caché y compresión en enlaces finos. Filtrar malware y URLs no deseadas por política de empresa. Loguear peticiones salientes por seguridad.",
        "Del lado del sitio un reverse proxy (nginx y pares) termina SSL, sirve estáticos, balancea carga y oculta puertos internos de la app — un rol de «intermediario» relacionado pero distinto.",
      ],
      lists: [
        {
          intro: "Escenarios legítimos:",
          items: [
            "gateway de internet corporativo",
            "acelerar cargas repetidas con caché",
            "reverse proxy / borde CDN delante del sitio",
            "aislar servicios internos del acceso directo",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Sobre «entrar a un foro tras un ban»",
          text: "Cambiar IP vía proxy para saltar un bloqueo de cuenta o reglas de plataforma rompe el ToS y a menudo no sirve: banean dispositivos, cookies, comportamiento. No recomendamos esos esquemas.",
        },
      ],
      links: [
        {
          label: "Error 502",
          href: "/es/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Anonimidad y límites",
      level: 2,
      paras: [
        "Hay distintos grados de «transparencia»: algunos proxies pasan la IP real en headers, otros intentan ocultarla. Incluso un nodo «anónimo» no te hace invulnerable: logs del provider del proxy, fugas WebRTC/DNS, un intermediario malicioso.",
        "Las restricciones de contenido por geo son un tema legal y contractual aparte. No confundas capacidad técnica con permiso del titular de derechos o legal.",
      ],
    },
    {
      title: "Riesgos de listas gratis y «grises»",
      level: 2,
      paras: [
        "Las listas públicas de proxies a menudo incluyen máquinas ajenas comprometidas, honeypots y nodos que leen tráfico. No introduzcas contraseñas ni pagues a través de un proxy desconocido.",
        "Para scraping y automatización, los proxies masivos chocan con rate limits y defensas del sitio — APIs y consentimiento del dueño de los datos son más legítimos que una «granja de IP».",
      ],
      links: [
        {
          label: "Protección frente al scraping",
          href: "/es/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Un proxy es un intermediario de red: forward para clientes, reverse para sitios, más caché y políticas. Es infraestructura — no «anonimidad mágica».",
        "Elige un operador claro; las listas gratis y saltar reglas ajenas son mala idea para negocio y seguridad.",
      ],
    },
  ],
  closing: [
    "Si necesitas control de internet en la oficina — mira un forward proxy corporativo; si estás acelerando un sitio — reverse proxy/CDN. No confundas infraestructura con esquemas grises de cambio de IP.",
  ],
  related: [
    "veb-server",
    "oshibka-502",
    "url-adres",
    "zashchita-ot-parsinga",
    "https-seo",
    "ssl-sertifikat",
  ],
};

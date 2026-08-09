import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-stranitsa — same structure as RU JSON. */
export const vebStranitsaEn: BlogPost = {
  slug: "veb-stranitsa",
  title: "Webpage: what it is and common browser messages",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/veb-stranitsa/cover-en.webp",
  excerpt:
    "What a webpage is, why it needs its own URL, how to save a local copy, and what “outdated,” “slowing down the browser,” “unavailable,” and “moved” usually mean.",
  lead: [
    "A webpage is a document with its own address (URL): HTML plus related assets — images, styles, scripts — that the browser assembles into what you see.",
    "Below: why pages matter for a site, how to save a copy on your machine, and how to read typical browser messages. Useful both for everyday browsing and for anyone watching SEO and availability.",
    "A site is a set of linked pages. Status, speed, and clarity on each URL add up to user experience — and to how crawlers move through the project.",
  ],
  faq: [
    {
      q: "How is a page different from a site?",
      a: "A page is one document and URL. A site is the collection of pages, templates, and navigation under one project.",
    },
    {
      q: "Does every page need its own URL?",
      a: "Yes for indexable content. Uncontrolled duplicates and parameter variants multiply copies.",
    },
    {
      q: "How do you save a page to a computer?",
      a: "In the browser: Save as… (complete HTML or HTML only). That is an offline snapshot — not a site backup.",
    },
    {
      q: "What does “page is outdated” mean?",
      a: "Usually form cache after back/forward. Refresh, or resubmit carefully — especially around payment.",
    },
    {
      q: "Why does the browser say the page is slowing it down?",
      a: "Heavy scripts, memory leaks, too many tabs, extensions. On the site side: tighten JS and media.",
    },
    {
      q: "Is “page unavailable” always a 404?",
      a: "Not always. It can be DNS, network, 5xx, or a block. Read the exact message and status code.",
    },
    {
      q: "If the page moved, what about SEO?",
      a: "Use a proper 301 to the new URL, or you lose links and crawl continuity.",
    },
  ],
  sections: [
    {
      title: "Why webpages matter",
      level: 2,
      paras: [
        "A page carries meaning: a service, product, article, or form. The browser requests the URL, receives HTML, and loads resources.",
        "For business, a page is an entry from search, ads, and social. Without a clear offer and a 200 response it does not work as a channel.",
        "For SEO, each indexable page should answer a clear intent and avoid needless overlap with neighboring URLs.",
      ],
      lists: [
        {
          intro: "What it usually includes:",
          items: [
            "HTML markup",
            "CSS styles",
            "scripts",
            "media files",
            "metadata (title, description, and similar)",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
        {
          label: "HTTP 200",
          href: "/en/blog/kod-200/",
        },
      ],
    },
    {
      title: "How to save a page",
      level: 2,
      paras: [
        "From the browser menu you get an HTML file and a resources folder. Handy for a draft or archive, but scripts and auth often break offline.",
        "For a team, server backups and git matter more than Save as from a laptop.",
        "Print to PDF freezes the look — still not a CMS and database backup.",
      ],
      lists: [
        {
          intro: "When a local copy helps:",
          items: [
            "compare layout before and after",
            "hand an example to a contractor",
            "read reference text offline",
          ],
        },
      ],
    },
    {
      title: "“Webpage is outdated”",
      level: 2,
      paras: [
        "Common when you go back to a POST form result: the browser will not silently resubmit.",
        "Refresh the page. On payment or order flows, do not hit retry blindly — you can double the action.",
      ],
      lists: [
        {
          intro: "For developers:",
          items: [
            "PRG pattern (redirect after post)",
            "idempotent critical actions",
            "clear messages for the user",
          ],
        },
      ],
    },
    {
      title: "Why a page “slows the browser”",
      level: 2,
      paras: [
        "Heavy JS, endless timers, huge DOMs, autoplay media, extension conflicts. Weak machines show it first.",
        "In DevTools Performance/Memory, look for long tasks. On the site: code-split, defer load, compress images.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "incognito without extensions",
            "another browser",
            "disable heavy widgets",
            "check the mobile view",
          ],
        },
      ],
    },
    {
      title: "“Page unavailable” and the network",
      level: 2,
      paras: [
        "Causes include no internet, DNS failure, server down (5xx), firewall, or a wrong URL. Chrome and Firefox word it differently — check the response code if anything comes back.",
        "For the owner: uptime monitoring, logs, correct DNS and SSL.",
      ],
      lists: [
        {
          intro: "User checklist:",
          items: [
            "check the network",
            "refresh or try another network",
            "verify the address",
            "wait, then tell the owner if it is your site",
          ],
        },
      ],
      links: [
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "“Page moved”",
      level: 2,
      paras: [
        "The browser follows a redirect or shows that the address changed. For SEO the type matters: a permanent 301 passes equity; a temporary 302 behaves differently.",
        "Do not leave a “move” as client-side JS while the old URL still returns 200 — weaker for crawlers than an explicit 301.",
      ],
      lists: [
        {
          intro: "After a URL change:",
          items: [
            "301 from old addresses",
            "update internal links",
            "sitemap and Webmaster tools",
            "check redirect chains",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
      notes: [
        {
          title: "Link to SEO",
          kind: "tip",
          text: "Stable, useful pages with clear URLs are the foundation. Gains on a commercial keyword set are a separate process — often months after technical prep, not overnight.",
        },
      ],
    },
  ],
};

/** ES overlay for veb-stranitsa — same structure as RU JSON / EN. */
export const vebStranitsaEs: BlogPost = {
  slug: "veb-stranitsa",
  title: "Página web: qué es y mensajes habituales del navegador",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/veb-stranitsa/cover.webp",
  excerpt:
    "Qué es una página web, por qué necesita su propia URL, cómo guardar una copia local y qué suelen significar «desactualizada», «ralentiza el navegador», «no disponible» y «se ha movido».",
  lead: [
    "Una página web es un documento con su propia dirección (URL): HTML más assets relacionados — imágenes, estilos, scripts — que el navegador ensambla en lo que ves.",
    "Abajo: por qué importan las páginas para un sitio, cómo guardar una copia en tu máquina y cómo leer mensajes típicos del navegador. Útil tanto para navegar a diario como para quien vigila SEO y disponibilidad.",
    "Un sitio es un conjunto de páginas enlazadas. Status, velocidad y claridad en cada URL suman experiencia de usuario — y cómo los crawlers se mueven por el proyecto.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una página de un sitio?",
      a: "Una página es un documento y una URL. Un sitio es la colección de páginas, plantillas y navegación bajo un proyecto.",
    },
    {
      q: "¿Toda página necesita su propia URL?",
      a: "Sí para contenido indexable. Duplicados sin control y variantes de parámetros multiplican copias.",
    },
    {
      q: "¿Cómo se guarda una página en el ordenador?",
      a: "En el navegador: Guardar como… (HTML completo o solo HTML). Es un snapshot offline — no un backup del sitio.",
    },
    {
      q: "¿Qué significa «la página está desactualizada»?",
      a: "Suele ser caché de formulario tras ir atrás/adelante. Actualiza, o reenvía con cuidado — sobre todo en pagos.",
    },
    {
      q: "¿Por qué el navegador dice que la página lo ralentiza?",
      a: "Scripts pesados, memory leaks, demasiadas pestañas, extensiones. Del lado del sitio: aprieta JS y media.",
    },
    {
      q: "¿«Página no disponible» es siempre un 404?",
      a: "No siempre. Puede ser DNS, red, 5xx o un bloqueo. Lee el mensaje exacto y el código de estado.",
    },
    {
      q: "Si la página se movió, ¿qué pasa con el SEO?",
      a: "Usa un 301 correcto a la URL nueva, o pierdes enlaces y continuidad de crawl.",
    },
  ],
  sections: [
    {
      title: "Por qué importan las páginas web",
      level: 2,
      paras: [
        "Una página lleva sentido: un servicio, producto, artículo o formulario. El navegador pide la URL, recibe HTML y carga recursos.",
        "Para el negocio, una página es una entrada desde búsqueda, ads y redes. Sin oferta clara y respuesta 200 no funciona como canal.",
        "Para SEO, cada página indexable debería responder a un intent claro y evitar solapamiento innecesario con URLs vecinas.",
      ],
      lists: [
        {
          intro: "Qué suele incluir:",
          items: [
            "markup HTML",
            "estilos CSS",
            "scripts",
            "archivos media",
            "metadata (title, description y similares)",
          ],
        },
      ],
      links: [
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
        {
          label: "HTTP 200",
          href: "/es/blog/kod-200/",
        },
      ],
    },
    {
      title: "Cómo guardar una página",
      level: 2,
      paras: [
        "Desde el menú del navegador obtienes un archivo HTML y una carpeta de recursos. Cómodo para un borrador o archivo, pero scripts y auth a menudo se rompen offline.",
        "Para un equipo, backups del servidor y git importan más que Guardar como desde un portátil.",
        "Imprimir a PDF congela el aspecto — sigue sin ser backup del CMS y la base de datos.",
      ],
      lists: [
        {
          intro: "Cuándo ayuda una copia local:",
          items: [
            "comparar layout antes y después",
            "pasar un ejemplo a un contratista",
            "leer texto de referencia offline",
          ],
        },
      ],
    },
    {
      title: "«La página web está desactualizada»",
      level: 2,
      paras: [
        "Habitual al volver al resultado de un formulario POST: el navegador no reenviará en silencio.",
        "Actualiza la página. En flujos de pago o pedido, no pulses reintentar a ciegas — puedes duplicar la acción.",
      ],
      lists: [
        {
          intro: "Para developers:",
          items: [
            "patrón PRG (redirect after post)",
            "acciones críticas idempotentes",
            "mensajes claros para el usuario",
          ],
        },
      ],
    },
    {
      title: "Por qué una página «ralentiza el navegador»",
      level: 2,
      paras: [
        "JS pesado, timers eternos, DOMs enormes, media en autoplay, conflictos de extensiones. Las máquinas flojas lo muestran primero.",
        "En DevTools Performance/Memory, busca long tasks. En el sitio: code-split, carga diferida, comprime imágenes.",
      ],
      lists: [
        {
          intro: "Checks rápidos:",
          items: [
            "incógnito sin extensiones",
            "otro navegador",
            "desactivar widgets pesados",
            "revisar la vista móvil",
          ],
        },
      ],
    },
    {
      title: "«Página no disponible» y la red",
      level: 2,
      paras: [
        "Las causas incluyen sin internet, fallo DNS, servidor caído (5xx), firewall o una URL incorrecta. Chrome y Firefox lo redactan distinto — revisa el código de respuesta si algo vuelve.",
        "Para el dueño: monitor de uptime, logs, DNS y SSL correctos.",
      ],
      lists: [
        {
          intro: "Checklist del usuario:",
          items: [
            "revisar la red",
            "actualizar o probar otra red",
            "verificar la dirección",
            "esperar y avisar al dueño si es tu sitio",
          ],
        },
      ],
      links: [
        {
          label: "Error 502",
          href: "/es/blog/oshibka-502/",
        },
        {
          label: "Códigos de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "«La página se ha movido»",
      level: 2,
      paras: [
        "El navegador sigue un redirect o muestra que la dirección cambió. Para SEO importa el tipo: un 301 permanente pasa equity; un 302 temporal se comporta distinto.",
        "No dejes un «move» como JS del cliente mientras la URL vieja sigue devolviendo 200 — más débil para crawlers que un 301 explícito.",
      ],
      lists: [
        {
          intro: "Tras un cambio de URL:",
          items: [
            "301 desde las direcciones viejas",
            "actualizar enlaces internos",
            "sitemap y tools de Webmaster",
            "revisar cadenas de redirects",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
      notes: [
        {
          title: "Vínculo con el SEO",
          kind: "tip",
          text: "Páginas estables y útiles con URLs claras son la base. Los avances en un set comercial de keywords son un proceso aparte — a menudo meses tras la prep técnica, no de la noche a la mañana.",
        },
      ],
    },
  ],
};

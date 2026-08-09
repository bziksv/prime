import type { BlogPost } from "../../../data/blog";

/** EN overlay for klikabelnaya-ssylka — same structure as RU JSON. */
export const klikabelnayaSsylkaEn: BlogPost = {
  slug: "klikabelnaya-ssylka",
  title: "Clickable links: how to make an active URL",
  date: "2021-11-02",
  category: "SEO",
  cover: "/images/blog/klikabelnaya-ssylka/cover-en.webp",
  excerpt:
    "How an active link differs from plain text, how to create one in HTML and an editor, nuances in social apps and Word — plus anchor text, target, and common mistakes.",
  lead: [
    "A clickable (active) link opens another URL on click. An inactive one is just an address string you copy by hand. On the web you almost always want real active links.",
    "Below: HTML markup, visual editors, and a short note on social apps and documents. Hypertext theory is a separate article; this is the practical how-to.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why is an active link better than a bare URL?",
      a: "One click instead of copy-paste into the address bar. More convenient and fewer typos.",
    },
    {
      q: "What’s the minimum HTML?",
      a: "`<a href=\"https://example.com/\">Link text</a>`. For a new tab add `target=\"_blank\"` and preferably `rel=\"noopener\"`.",
    },
    {
      q: "What should the anchor say?",
      a: "The destination’s meaning: “shipping terms”, not “here” or “click”. Clearer for people and more useful for SEO.",
    },
    {
      q: "Why isn’t a link always clickable on Instagram?",
      a: "Format limits: the profile header URL is usually active; in a regular post caption — often not. Check the app’s current help.",
    },
    {
      q: "Is a Word link the same as on a site?",
      a: "Similar idea (click → go), but it’s a document, not an HTML page. For a site you still need markup or a CMS editor.",
    },
  ],
  sections: [
    {
      title: "Active vs inactive links",
      level: 2,
      paras: [
        "Active: click — a page, file, or in-page anchor opens. Inactive: a `https://…` string that isn’t a link — the user copies it themselves.",
        "Active links improve UX and help get people to the right section, product, or form.",
      ],
      lists: [
        {
          intro: "A link can look like:",
          items: [
            "anchor text",
            "a button",
            "an image map",
            "a URL the editor auto-linked",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext: the theory",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Creating in HTML",
      level: 2,
      paras: [
        "Basic tag: `<a href=\"URL\">anchor</a>`. The `href` is where it goes. The text between tags is what the user sees.",
      ],
      lists: [
        {
          intro: "Common attributes:",
          items: [
            "`target=\"_blank\"` — new tab",
            "`rel=\"noopener noreferrer\"` — safer with `_blank`",
            "`title` — hover hint (optional)",
            "anchor `href=\"#block\"` — jump inside the page",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Check that the URL is complete and uses https for external sites. A typo in href = a dead link.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Visual editors and CMS",
      level: 2,
      paras: [
        "In WordPress and most builders: select text → Insert link → paste URL → save. The editor writes the HTML.",
        "Visually an active link is usually underlined or colored — the theme sets the style.",
      ],
      lists: [
        {
          intro: "Steps are almost always the same:",
          items: [
            "select a word, phrase, or image",
            "open the link tool",
            "paste the destination URL",
            "save and test with a click",
          ],
        },
      ],
    },
    {
      title: "Social apps and messengers",
      level: 2,
      paras: [
        "Clickability rules differ. On VKontakte a URL in a post often becomes active by itself; communities use short and full page addresses.",
        "On Instagram clickability is format-limited: a profile-header link or official Stories/ads fields are more reliable — not a “magic code in comments” from old guides.",
      ],
      notes: [
        {
          title: "Info",
          text: "Social UIs change. Follow the platform’s current help, not 2020 screenshots.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Links in Word and documents",
      level: 2,
      paras: [
        "In Word: select text → Insert → Link → set an address or file. After Enter on a URL the editor sometimes auto-activates it.",
        "For the web that’s a side skill: the site still gets HTML from the CMS or layout.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "anchors like “here” / “more” with no meaning",
            "broken or http URLs when https exists",
            "links to a “work in progress” utility page",
            "too many useless outbound links",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for klikabelnaya-ssylka — same structure as RU JSON / EN. */
export const klikabelnayaSsylkaEs: BlogPost = {
  slug: "klikabelnaya-ssylka",
  title: "Enlaces clicables: cómo hacer una URL activa",
  date: "2021-11-02",
  category: "SEO",
  cover: "/images/blog/klikabelnaya-ssylka/cover.webp",
  excerpt:
    "En qué se diferencia un enlace activo del texto plano, cómo crearlo en HTML y en un editor, matices en apps sociales y Word — más texto ancla, target y errores habituales.",
  lead: [
    "Un enlace clicable (activo) abre otra URL al hacer clic. Uno inactivo es solo una cadena de dirección que copias a mano. En la web casi siempre quieres enlaces activos de verdad.",
    "Abajo: markup HTML, editores visuales y una nota corta sobre apps sociales y documentos. La teoría del hipertexto es un artículo aparte; esto es el how-to práctico.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por qué un enlace activo es mejor que una URL pelada?",
      a: "Un clic en lugar de copiar-pegar en la barra de direcciones. Más cómodo y menos typos.",
    },
    {
      q: "¿Cuál es el HTML mínimo?",
      a: "`<a href=\"https://example.com/\">Texto del enlace</a>`. Para una pestaña nueva añade `target=\"_blank\"` y preferiblemente `rel=\"noopener\"`.",
    },
    {
      q: "¿Qué debe decir el ancla?",
      a: "El sentido del destino: «condiciones de envío», no «aquí» o «clic». Más claro para la gente y más útil para SEO.",
    },
    {
      q: "¿Por qué un enlace no siempre es clicable en Instagram?",
      a: "Límites de formato: la URL del header del perfil suele ser activa; en el caption de un post normal — a menudo no. Consulta la ayuda actual de la app.",
    },
    {
      q: "¿Un enlace de Word es lo mismo que en un sitio?",
      a: "Idea similar (clic → ir), pero es un documento, no una página HTML. Para un sitio sigues necesitando markup o un editor de CMS.",
    },
  ],
  sections: [
    {
      title: "Enlaces activos vs inactivos",
      level: 2,
      paras: [
        "Activo: clic — se abre una página, un archivo o un ancla en la página. Inactivo: una cadena `https://…` que no es un enlace — el usuario la copia él mismo.",
        "Los enlaces activos mejoran la UX y ayudan a llevar a la gente a la sección, producto o formulario correctos.",
      ],
      lists: [
        {
          intro: "Un enlace puede verse como:",
          items: [
            "texto ancla",
            "un botón",
            "un mapa de imagen",
            "una URL que el editor autoenlazó",
          ],
        },
      ],
      links: [
        {
          label: "Hipertexto: la teoría",
          href: "/es/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Crearlo en HTML",
      level: 2,
      paras: [
        "Tag básico: `<a href=\"URL\">ancla</a>`. El `href` es a dónde va. El texto entre tags es lo que ve el usuario.",
      ],
      lists: [
        {
          intro: "Atributos habituales:",
          items: [
            "`target=\"_blank\"` — pestaña nueva",
            "`rel=\"noopener noreferrer\"` — más seguro con `_blank`",
            "`title` — pista al hover (opcional)",
            "ancla `href=\"#block\"` — salto dentro de la página",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "Comprueba que la URL esté completa y use https en sitios externos. Un typo en href = un enlace muerto.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Editores visuales y CMS",
      level: 2,
      paras: [
        "En WordPress y la mayoría de builders: selecciona texto → Insertar enlace → pega URL → guarda. El editor escribe el HTML.",
        "Visualmente un enlace activo suele ir subrayado o de color — el tema fija el estilo.",
      ],
      lists: [
        {
          intro: "Los pasos son casi siempre los mismos:",
          items: [
            "seleccionar una palabra, frase o imagen",
            "abrir la herramienta de enlace",
            "pegar la URL de destino",
            "guardar y probar con un clic",
          ],
        },
      ],
    },
    {
      title: "Apps sociales y mensajeros",
      level: 2,
      paras: [
        "Las reglas de clicabilidad difieren. En VKontakte una URL en un post a menudo se vuelve activa sola; las comunidades usan direcciones cortas y completas de página.",
        "En Instagram la clicabilidad está limitada por formato: un enlace en el header del perfil o campos oficiales de Stories/ads son más fiables — no un «código mágico en comentarios» de guías viejas.",
      ],
      notes: [
        {
          title: "Info",
          text: "Las UIs sociales cambian. Sigue la ayuda actual de la plataforma, no capturas de 2020.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Enlaces en Word y documentos",
      level: 2,
      paras: [
        "En Word: selecciona texto → Insertar → Enlace → fija una dirección o archivo. Tras Enter en una URL el editor a veces la autoactiva.",
        "Para la web es una skill lateral: el sitio sigue recibiendo HTML del CMS o del layout.",
      ],
      lists: [
        {
          intro: "Errores típicos:",
          items: [
            "anclas tipo «aquí» / «más» sin sentido",
            "URLs rotas o http cuando existe https",
            "enlaces a una página utilitaria «en progreso»",
            "demasiados enlaces salientes inútiles",
          ],
        },
      ],
    },
  ],
};

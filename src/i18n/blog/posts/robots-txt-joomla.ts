import type { BlogPost } from "../../../data/blog";

/** EN overlay for robots-txt-joomla — same structure as RU JSON. */
export const robotsTxtJoomlaEn: BlogPost = {
  slug: "robots-txt-joomla",
  title: "Robots.txt for Joomla: rules and a careful template",
  date: "2018-02-26",
  category: "SEO",
  cover: "/images/blog/robots-txt-joomla/cover-en.webp",
  excerpt:
    "How robots.txt works on Joomla: User-agent, Allow/Disallow, Sitemap, and system paths — without treating a Joomla 3.3 paste as gospel or leaning on an outdated Host line as your only mirror.",
  lead: [
    "`robots.txt` lives at the site root (`https://example.com/robots.txt`) and tells crawlers which paths to skip. On Joomla you usually block `/administrator/`, core system folders, and noisy URL parameters.",
    "Below: what the directives mean and sensible Joomla starting points. Do not paste a “perfect” Joomla 3.x list onto Joomla 4/5 — paths, SEF, and components differ. The file does not replace noindex, and it will not put a query core on page one in a week.",
  ],
  faq: [
    {
      q: "Does Disallow mean “don’t index”?",
      a: "No. Disallow asks bots not to crawl a URL. To keep a page out of the index, meta robots or X-Robots-Tag noindex is more reliable (and still checkable). See the deindexing article.",
    },
    {
      q: "Where does the file live on Joomla?",
      a: "In the web-server root next to `index.php`, not under `/administrator/`. After edits, open `/robots.txt` in the browser and in Webmaster Tools / Search Console.",
    },
    {
      q: "Do you still need Host?",
      a: "Host once pointed Yandex at a preferred host. Today what matters is correct 301s, HTTPS, and the preferred host in the panels. Do not rely only on a Host line from a 2018 template.",
    },
    {
      q: "Should you block /media/ and /templates/?",
      a: "It depends. Those folders sometimes hold assets used in snippets. Test; a blind ban “as in the article” can hurt.",
    },
    {
      q: "Will a robots.txt template improve rankings?",
      a: "Not directly. It is crawl hygiene. Growing a competitive query core is separate work — typically planned over 2–6 months after the technical base is sound.",
    },
  ],
  sections: [
    {
      title: "Why robots.txt on Joomla",
      level: 2,
      paras: [
        "Joomla exposes many system URLs: admin, components, print parameters, votes, language tails. Without rules, bots burn crawl budget on junk and sometimes pull duplicates into results.",
        "The file does not “rank” the site by itself. It cuts noise. A bad Disallow can hide sections you need — so after edits, check webmaster tools.",
      ],
      lists: [
        {
          intro: "Usually blocked:",
          items: [
            "admin `/administrator/`",
            "core system directories",
            "tech parameters (print, mailto, vote, and similar)",
            "obvious duplicates like `index2.php` — case by case",
          ],
        },
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Main directives",
      level: 2,
      paras: [
        "`User-agent: *` sets rules for all bots; use separate blocks for Yandex or Googlebot when you need them. `Disallow` blocks a path from crawl; `Allow` carves out exceptions. `Sitemap:` points to the XML sitemap.",
        "`Crawl-delay` was once used on weak hosting; support and meaning differ by bot — do not treat it as mandatory. `Clean-param` (Yandex) helps with noisy GET parameters when they really spawn duplicates.",
      ],
      tables: [
        {
          caption: "What to remember",
          headers: ["Directive", "Meaning"],
          rows: [
            ["User-agent", "Who the rule block is for"],
            ["Disallow / Allow", "Block or allow crawling paths"],
            ["Sitemap", "XML sitemap URL"],
            ["Crawl-delay", "Pause between requests (not always useful)"],
            ["Clean-param", "Ignore query “noise” (Yandex)"],
          ],
        },
      ],
      notes: [
        {
          title: "Syntax",
          kind: "tip",
          text: "In the real file write `User-agent: *` — no angle brackets from old posts. Comments start with `#`. After edits, confirm the file is reachable and you did not leave an accidental `Disallow: /` that blocks the whole site.",
        },
      ],
    },
    {
      title: "Path landmarks for Joomla",
      level: 2,
      paras: [
        "A common starting set: block `/administrator/`, `/cache/`, `/cli/` (if present), `/includes/`, `/language/`, `/libraries/`, `/logs/`, `/tmp/`, and typical tech parameters (`print`, `mailto`, votes). Match the exact list to your Joomla version and SEF setup.",
        "Aggressive rules like “everything with `?`” or all of `/media/` help on some sites and break needed URLs on others. Prefer iterations: close system junk → check coverage in the panels → refine.",
      ],
      lists: [
        {
          intro: "Minimum before you ship:",
          items: [
            "admin is closed from crawl",
            "sitemap is listed in `Sitemap:`",
            "important sections are not blocked by accident",
            "the main mirror is set with HTTPS/www redirects",
            "the file is served as `text/plain` from the root",
          ],
        },
      ],
    },
    {
      title: "Sample frame (not dogma)",
      level: 2,
      paras: [
        "Below is a teaching skeleton — not “copy and forget.” Put your own sitemap domain and adapt the lines to your Joomla version and real duplicates.",
      ],
      lists: [
        {
          intro: "Line ideas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /administrator/`",
            "`Disallow: /cache/`",
            "`Disallow: /tmp/`",
            "`Disallow: /*format=`",
            "`Disallow: /*print=`",
            "`Sitemap: https://example.com/sitemap.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "On Host and http://",
          kind: "tip",
          text: "Old templates wrote `Host: example.com` and `Sitemap: http://…`. Prefer HTTPS sitemap URLs and 301s to the canonical host. Host does not replace a certificate or redirects.",
        },
      ],
    },
    {
      title: "Checks after publishing",
      level: 2,
      paras: [
        "Open `/robots.txt` in a private window. Validate syntax in Yandex Webmaster and Google Search Console reports. Confirm important landings are not under Disallow.",
        "If a page must stay out of the index but still has inbound links, add noindex — do not rely on robots.txt alone.",
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "On Joomla, `robots.txt` is crawl hygiene for system paths and parameters — not a ranking lever. Adapt any template to your CMS version and verify it in webmaster panels.",
        "General deindexing principles and Disallow vs noindex live in a separate guide; WordPress-oriented templates are covered in the related robots.txt article.",
      ],
    },
  ],
  closing: [
    "Build `robots.txt` for your Joomla: block admin and clear tech junk, point Sitemap over HTTPS, check the file in the panels — and do not blindly copy a Disallow wall from a Joomla 3.3 post.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "dubli-stranits",
    "seo-bitrix",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};

/** ES overlay for robots-txt-joomla — same structure as RU JSON / EN. */
export const robotsTxtJoomlaEs: BlogPost = {
  slug: "robots-txt-joomla",
  title: "Robots.txt para Joomla: reglas y una plantilla cuidadosa",
  date: "2018-02-26",
  category: "SEO",
  cover: "/images/blog/robots-txt-joomla/cover.webp",
  excerpt:
    "Cómo funciona robots.txt en Joomla: User-agent, Allow/Disallow, Sitemap y rutas del sistema — sin tratar un paste de Joomla 3.3 como evangelio ni apoyarte solo en una línea Host desfasada como espejo.",
  lead: [
    "`robots.txt` vive en la raíz del sitio (`https://example.com/robots.txt`) e indica a los crawlers qué rutas saltar. En Joomla sueles bloquear `/administrator/`, carpetas del sistema del core y parámetros ruidosos de URL.",
    "Abajo: qué significan las directivas y puntos de partida sensatos para Joomla. No pegues una lista «perfecta» de Joomla 3.x en Joomla 4/5 — cambian rutas, SEF y componentes. El archivo no sustituye noindex y no pondrá un núcleo de queries en primera página en una semana.",
  ],
  faq: [
    {
      q: "¿Disallow significa «no indexar»?",
      a: "No. Disallow pide a los bots no rastrear una URL. Para mantener una página fuera del índice, meta robots o X-Robots-Tag noindex es más fiable (y seguible). Ver el artículo de desindexación.",
    },
    {
      q: "¿Dónde vive el archivo en Joomla?",
      a: "En la raíz del servidor web junto a `index.php`, no bajo `/administrator/`. Tras editar, abre `/robots.txt` en el navegador y en Webmaster Tools / Search Console.",
    },
    {
      q: "¿Sigue haciendo falta Host?",
      a: "Host apuntaba a Yandex un host preferido. Hoy importan 301s correctos, HTTPS y el host preferido en los paneles. No te apoyes solo en una línea Host de una plantilla de 2018.",
    },
    {
      q: "¿Debo bloquear /media/ y /templates/?",
      a: "Depende. Esas carpetas a veces tienen assets usados en snippets. Prueba; un ban a ciegas «como en el artículo» puede doler.",
    },
    {
      q: "¿Una plantilla de robots.txt mejora rankings?",
      a: "No de forma directa. Es higiene de crawl. Crecer un núcleo competitivo de queries es trabajo aparte — normalmente planificado en 2–6 meses tras una base técnica sana.",
    },
  ],
  sections: [
    {
      title: "Por qué robots.txt en Joomla",
      level: 2,
      paras: [
        "Joomla expone muchas URLs de sistema: admin, componentes, parámetros de impresión, votos, colas de idioma. Sin reglas, los bots queman crawl budget en basura y a veces meten duplicados en resultados.",
        "El archivo no «rankea» el sitio solo. Corta ruido. Un Disallow malo puede ocultar secciones que necesitas — así que tras editar, revisa las tools de webmaster.",
      ],
      lists: [
        {
          intro: "Suele bloquearse:",
          items: [
            "admin `/administrator/`",
            "directorios del sistema del core",
            "parámetros tech (print, mailto, vote y similares)",
            "duplicados obvios como `index2.php` — caso a caso",
          ],
        },
      ],
      links: [
        {
          label: "Cerrar páginas a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Directivas principales",
      level: 2,
      paras: [
        "`User-agent: *` fija reglas para todos los bots; usa bloques aparte para Yandex o Googlebot cuando haga falta. `Disallow` bloquea una ruta al crawl; `Allow` abre excepciones. `Sitemap:` apunta al sitemap XML.",
        "`Crawl-delay` se usaba en hosting flojo; soporte y sentido difieren por bot — no lo trates como obligatorio. `Clean-param` (Yandex) ayuda con parámetros GET ruidosos cuando de verdad generan duplicados.",
      ],
      tables: [
        {
          caption: "Qué recordar",
          headers: ["Directiva", "Significado"],
          rows: [
            ["User-agent", "Para quién es el bloque de reglas"],
            ["Disallow / Allow", "Bloquear o permitir rastrear rutas"],
            ["Sitemap", "URL del sitemap XML"],
            ["Crawl-delay", "Pausa entre requests (no siempre útil)"],
            ["Clean-param", "Ignorar «ruido» de query (Yandex)"],
          ],
        },
      ],
      notes: [
        {
          title: "Sintaxis",
          kind: "tip",
          text: "En el archivo real escribe `User-agent: *` — sin ángulos de posts viejos. Los comentarios empiezan con `#`. Tras editar, confirma que el archivo es alcanzable y que no dejaste un `Disallow: /` accidental que bloquee todo el sitio.",
        },
      ],
    },
    {
      title: "Hitos de rutas para Joomla",
      level: 2,
      paras: [
        "Un set de partida habitual: bloquear `/administrator/`, `/cache/`, `/cli/` (si existe), `/includes/`, `/language/`, `/libraries/`, `/logs/`, `/tmp/` y parámetros tech típicos (`print`, `mailto`, votos). Ajusta la lista exacta a tu versión de Joomla y al SEF.",
        "Reglas agresivas tipo «todo con `?`» o todo `/media/` ayudan en unos sitios y rompen URLs necesarias en otros. Mejor iterar: cerrar basura de sistema → revisar cobertura en paneles → afinar.",
      ],
      lists: [
        {
          intro: "Mínimo antes de publicar:",
          items: [
            "el admin está cerrado al crawl",
            "el sitemap figura en `Sitemap:`",
            "secciones importantes no están bloqueadas por accidente",
            "el espejo principal está fijado con redirects HTTPS/www",
            "el archivo se sirve como `text/plain` desde la raíz",
          ],
        },
      ],
    },
    {
      title: "Marco de ejemplo (no dogma)",
      level: 2,
      paras: [
        "Abajo un esqueleto didáctico — no «copiar y olvidar». Pon el dominio de tu sitemap y adapta las líneas a tu versión de Joomla y a los duplicados reales.",
      ],
      lists: [
        {
          intro: "Ideas de líneas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /administrator/`",
            "`Disallow: /cache/`",
            "`Disallow: /tmp/`",
            "`Disallow: /*format=`",
            "`Disallow: /*print=`",
            "`Sitemap: https://example.com/sitemap.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "Sobre Host y http://",
          kind: "tip",
          text: "Las plantillas viejas escribían `Host: example.com` y `Sitemap: http://…`. Prefiere URLs de sitemap HTTPS y 301s al host canónico. Host no sustituye un certificado ni redirects.",
        },
      ],
    },
    {
      title: "Comprobaciones tras publicar",
      level: 2,
      paras: [
        "Abre `/robots.txt` en una ventana privada. Valida la sintaxis en Yandex Webmaster y en los informes de Google Search Console. Confirma que landings importantes no están bajo Disallow.",
        "Si una página debe quedarse fuera del índice pero aún tiene enlaces entrantes, añade noindex — no te apoyes solo en robots.txt.",
      ],
      links: [
        {
          label: "Cerrar páginas a la indexación",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "En Joomla, `robots.txt` es higiene de crawl para rutas y parámetros de sistema — no una palanca de ranking. Adapta cualquier plantilla a tu versión de CMS y verifícala en paneles de webmaster.",
        "Principios generales de desindexación y Disallow vs noindex viven en una guía aparte; las plantillas orientadas a WordPress están en el artículo relacionado de robots.txt.",
      ],
    },
  ],
  closing: [
    "Monta `robots.txt` para tu Joomla: bloquea admin y basura tech clara, apunta Sitemap por HTTPS, revisa el archivo en los paneles — y no copies a ciegas un muro de Disallow de un post de Joomla 3.3.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "dubli-stranits",
    "seo-bitrix",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};

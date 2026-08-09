import type { BlogPost } from "../../../data/blog";

/** EN overlay for vstavka-javascript — same structure as RU JSON. */
export const vstavkaJavascriptEn: BlogPost = {
  slug: "vstavka-javascript",
  title: "How to add JavaScript to a website: CMS and site builders",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/vstavka-javascript/cover-en.webp",
  excerpt:
    "Where to place JS snippets: head and body, WordPress, sites without an admin panel, and builders. How to avoid breaking layout or installing the same script twice — with counters and widgets as examples.",
  lead: [
    "Counters, chats, pixels, and widgets almost always arrive as a JavaScript snippet. Your job is to place the code where it loads on the right pages, avoid duplicates, and make sure cached HTML still includes the script.",
    "Below: what the snippet looks like, where to put it in WordPress and builders, how to edit a template without a panel, and what to verify after insertion. Yandex Metrica installation is covered separately; this article covers the general principle.",
  ],
  faq: [
    {
      q: "Should the script go in the head or before </body>?",
      a: "Follow the vendor's recommendation. Analytics often goes as early as possible in the head; heavy widgets sometimes load lower. Don't guess against the service docs.",
    },
    {
      q: "Can I paste JS into page text through the visual editor?",
      a: "Bad idea: the editor may strip tags. Use a scripts field, a plugin, a tag manager, or a template edit.",
    },
    {
      q: "What is a tag manager?",
      a: "A container (for example GTM) where marketing tags live without constant theme edits. Handy when you have many counters and a clear publish owner.",
    },
    {
      q: "Why does nothing work after I add the script?",
      a: "Cache, code missing on some templates, a typo, a blocker, CSP, a script only on a draft theme, or a double install.",
    },
    {
      q: "Is it safe to copy any snippet from the internet?",
      a: "No. Take code only from the service account (analytics, ads, chat). Random \"speed boosters\" and \"SEO scripts\" are malware risks.",
    },
    {
      q: "Do I need FTP access?",
      a: "To edit header.php or the theme — often yes, or via the host file manager. On builders — only their panel.",
    },
    {
      q: "Are WordPress.com and WordPress.org the same?",
      a: "No. On .com, custom JS limits depend on the plan. On self-hosted .org you're freer via theme and plugins.",
    },
    {
      q: "I added a script — will that boost SEO?",
      a: "Adding JS alone doesn’t move search visibility. A counter is for analytics; growth comes from content, technical work, and demand — often a 2–6 month horizon for page-one progress after prep.",
    },
  ],
  sections: [
    {
      title: "What code people usually add",
      level: 2,
      paras: [
        "Most often it's a fragment from a service account: analytics, ad pixel, chat, A/B test, booking widget. It looks like `<script>…</script>` or an external file include.",
        "Don't confuse it with a content HTML block or CSS. JS runs logic in the browser; a bug can break a button or form on the page.",
      ],
      lists: [
        {
          intro: "Take code only from:",
          items: [
            "the official service account",
            "platform documentation",
            "a brief from your developer or agency",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don't paste a \"random SEO script\" from a forum. For site security, that's the same risk class as an unknown plugin.",
        },
      ],
      links: [
        {
          label: "Website security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "General principle: where the script should live",
      level: 2,
      paras: [
        "The code needs to land in the HTML of all or selected templates: home, categories, products, thank-you pages. Ideally in one place: theme header or footer, a \"scripts in head\" field, or a tag-manager container.",
        "After insertion, check page source and Network: did the script load? Any duplicate? Is CSP blocking it?",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "Ctrl+U / View Source — is the fragment there",
            "incognito without a blocker",
            "CMS/CDN cache flush",
            "mobile and desktop",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "WordPress (self-hosted)",
      level: 2,
      paras: [
        "Typical paths: a header/footer scripts plugin, theme settings (\"code in head\"), a child theme editing `header.php`/`footer.php`, or a tag manager. Don't edit the parent theme without a child — updates wipe changes.",
        "The post visual editor isn't for JS. On WordPress.com, custom JS may be unavailable on lower plans — check current platform limits.",
      ],
      lists: [
        {
          intro: "Order of operations:",
          items: [
            "backup",
            "paste code in one official place",
            "flush cache",
            "check 3–4 page types",
            "don't duplicate the same code in GTM and the theme at once",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Site without a handy admin: editing the template",
      level: 2,
      paras: [
        "If you only have FTP or a file manager, find the shared header/footer template (often `header.php`, `index.html`, or an engine layout). Insert the fragment per the service docs, keep UTF-8, and don't break neighboring tags.",
        "A typo in `header` can take the whole site down. Keep a file copy before editing and check the homepage right after upload.",
      ],
      lists: [
        {
          intro: "Mini safety checklist:",
          items: [
            "download file → edit locally → upload",
            "don't delete closing tags",
            "don't expose `.php.bak` backups in the webroot",
          ],
        },
      ],
    },
    {
      title: "Builders: Wix, Squarespace, Shopify and similar",
      level: 2,
      paras: [
        "Builders have their own fields: \"Custom code,\" \"Header scripts,\" theme settings, checkout scripts. Menu names change — search for \"code,\" \"scripts,\" \"pixel,\" or \"head.\"",
        "Plan limits are real: on free plans, custom JS is often locked. Shopify: theme code / additional scripts — carefully, and with a theme backup. Don't treat 2018 screenshots as gospel.",
      ],
      lists: [
        {
          intro: "General builder flow:",
          items: [
            "find the custom code field in site or theme settings",
            "paste the fragment from the service account",
            "publish",
            "check on the live page (not only preview)",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes after insertion",
      level: 2,
      paras: [
        "Two identical counters, code only on the homepage, cache serving HTML without the script, a minifier breaking JS, Content-Security-Policy cutting the service domain, pasting HTML instructions together with email boilerplate.",
        "If \"it worked yesterday,\" check the theme deploy, cache plugin, and builder update. Metrica diagnostics are in a separate article.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "one code instance",
            "needed URLs covered",
            "no console errors from your fragment",
            "event or visit visible in the service account",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Pasting the code onto every page by hand. After a redesign you'll forget half — centralize in the template or a tag manager.",
        },
      ],
      links: [
        {
          label: "Metrica isn't working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "ishodnyy-kod",
    "bezopasnost-sayta",
    "verstka-saytov",
  ],
};

/** ES overlay for vstavka-javascript — same structure as RU JSON / EN. */
export const vstavkaJavascriptEs: BlogPost = {
  slug: "vstavka-javascript",
  title: "Cómo añadir JavaScript a un sitio: CMS y constructores",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/vstavka-javascript/cover.webp",
  excerpt:
    "Dónde colocar snippets JS: head y body, WordPress, sitios sin panel de admin y builders. Cómo no romper el layout ni instalar el mismo script dos veces — con contadores y widgets como ejemplos.",
  lead: [
    "Contadores, chats, píxeles y widgets casi siempre llegan como un snippet de JavaScript. Tu trabajo es poner el código donde cargue en las páginas correctas, evitar duplicados y asegurar que el HTML cacheado siga incluyendo el script.",
    "Abajo: cómo se ve el snippet, dónde ponerlo en WordPress y builders, cómo editar una plantilla sin panel y qué verificar tras la inserción. La instalación de Yandex Metrica está aparte; este artículo cubre el principio general.",
  ],
  faq: [
    {
      q: "¿El script va en el head o antes de </body>?",
      a: "Sigue la recomendación del vendor. La analítica a menudo va lo antes posible en el head; widgets pesados a veces cargan más abajo. No adivines contra la docs del servicio.",
    },
    {
      q: "¿Puedo pegar JS en el texto de la página por el editor visual?",
      a: "Mala idea: el editor puede strippear tags. Usa un campo de scripts, un plugin, un tag manager o una edición de plantilla.",
    },
    {
      q: "¿Qué es un tag manager?",
      a: "Un contenedor (por ejemplo GTM) donde viven tags de marketing sin editar el tema a cada rato. Práctico cuando hay muchos contadores y un dueño claro de publicación.",
    },
    {
      q: "¿Por qué no funciona nada tras añadir el script?",
      a: "Caché, código ausente en algunas plantillas, un typo, un blocker, CSP, un script solo en un tema draft o una instalación doble.",
    },
    {
      q: "¿Es seguro copiar cualquier snippet de internet?",
      a: "No. Toma código solo de la cuenta del servicio (analítica, ads, chat). Los «aceleradores» y «scripts SEO» al azar son riesgo de malware.",
    },
    {
      q: "¿Necesito acceso FTP?",
      a: "Para editar header.php o el tema — a menudo sí, o vía el file manager del host. En builders — solo su panel.",
    },
    {
      q: "¿WordPress.com y WordPress.org son lo mismo?",
      a: "No. En .com, los límites de JS custom dependen del plan. En .org self-hosted eres más libre vía tema y plugins.",
    },
    {
      q: "Añadí un script — ¿eso sube el SEO?",
      a: "Añadir JS solo no mueve la visibilidad en búsqueda. Un contador es para analítica; el crecimiento viene de contenido, trabajo técnico y demanda — a menudo un horizonte de 2–6 meses de progreso hacia primera página tras la prep.",
    },
  ],
  sections: [
    {
      title: "Qué código suele añadirse",
      level: 2,
      paras: [
        "Casi siempre es un fragmento de una cuenta de servicio: analítica, píxel de ads, chat, test A/B, widget de reservas. Se ve como `<script>…</script>` o un include de archivo externo.",
        "No lo confundas con un bloque HTML de contenido o CSS. JS ejecuta lógica en el navegador; un bug puede romper un botón o un formulario en la página.",
      ],
      lists: [
        {
          intro: "Toma código solo de:",
          items: [
            "la cuenta oficial del servicio",
            "documentación de la plataforma",
            "un brief de tu developer o agencia",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No pegues un «script SEO al azar» de un foro. Para la seguridad del sitio, es la misma clase de riesgo que un plugin desconocido.",
        },
      ],
      links: [
        {
          label: "Seguridad del sitio",
          href: "/es/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Principio general: dónde debe vivir el script",
      level: 2,
      paras: [
        "El código tiene que aterrizar en el HTML de todas o de plantillas seleccionadas: home, categorías, productos, thank-you. Idealmente en un solo sitio: header o footer del tema, un campo «scripts in head» o un contenedor de tag manager.",
        "Tras insertar, revisa el source de la página y Network: ¿cargó el script? ¿Hay duplicado? ¿CSP lo bloquea?",
      ],
      lists: [
        {
          intro: "Revisa:",
          items: [
            "Ctrl+U / View Source — ¿está el fragmento?",
            "incógnito sin blocker",
            "vaciar caché CMS/CDN",
            "móvil y desktop",
          ],
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "WordPress (self-hosted)",
      level: 2,
      paras: [
        "Caminos típicos: un plugin de scripts en header/footer, ajustes del tema («código en head»), un child theme editando `header.php`/`footer.php`, o un tag manager. No edites el tema padre sin child — los updates borran los cambios.",
        "El editor visual del post no es para JS. En WordPress.com, el JS custom puede no estar disponible en planes bajos — revisa los límites actuales de la plataforma.",
      ],
      lists: [
        {
          intro: "Orden de operaciones:",
          items: [
            "backup",
            "pega el código en un solo lugar oficial",
            "vacía la caché",
            "revisa 3–4 tipos de página",
            "no dupliques el mismo código en GTM y el tema a la vez",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Sitio sin admin práctico: editar la plantilla",
      level: 2,
      paras: [
        "Si solo tienes FTP o un file manager, busca la plantilla compartida de header/footer (a menudo `header.php`, `index.html` o un layout del engine). Inserta el fragmento según la docs del servicio, mantén UTF-8 y no rompas tags vecinos.",
        "Un typo en `header` puede tumbar todo el sitio. Guarda una copia del archivo antes de editar y revisa la homepage justo tras subir.",
      ],
      lists: [
        {
          intro: "Mini checklist de seguridad:",
          items: [
            "descarga archivo → edita en local → sube",
            "no borres tags de cierre",
            "no dejes backups `.php.bak` expuestos en el webroot",
          ],
        },
      ],
    },
    {
      title: "Builders: Wix, Squarespace, Shopify y similares",
      level: 2,
      paras: [
        "Los builders tienen sus propios campos: «Custom code», «Header scripts», ajustes del tema, scripts de checkout. Los nombres de menú cambian — busca «code», «scripts», «pixel» o «head».",
        "Los límites del plan son reales: en planes gratis, el JS custom a menudo está bloqueado. Shopify: código del tema / scripts adicionales — con cuidado y con backup del tema. No tomes screenshots de 2018 como evangelio.",
      ],
      lists: [
        {
          intro: "Flujo general en builders:",
          items: [
            "encuentra el campo de custom code en ajustes del sitio o del tema",
            "pega el fragmento de la cuenta del servicio",
            "publica",
            "revisa en la página live (no solo preview)",
          ],
        },
      ],
    },
    {
      title: "Errores típicos tras la inserción",
      level: 2,
      paras: [
        "Dos contadores idénticos, código solo en la homepage, caché sirviendo HTML sin el script, un minifier rompiendo JS, Content-Security-Policy cortando el dominio del servicio, pegar instrucciones HTML junto con boilerplate de email.",
        "Si «ayer funcionaba», revisa el deploy del tema, el plugin de caché y el update del builder. El diagnóstico de Metrica está en un artículo aparte.",
      ],
      lists: [
        {
          intro: "Checklist de aceptación:",
          items: [
            "una sola instancia del código",
            "URLs necesarias cubiertas",
            "sin errores de consola de tu fragmento",
            "evento o visita visible en la cuenta del servicio",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Pegar el código a mano en cada página. Tras un rediseño olvidarás la mitad — centraliza en la plantilla o un tag manager.",
        },
      ],
      links: [
        {
          label: "Metrica no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "ishodnyy-kod",
    "bezopasnost-sayta",
    "verstka-saytov",
  ],
};

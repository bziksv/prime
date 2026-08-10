import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitye-ssylki — same structure as RU JSON. */
export const bityeSsylkiEn: BlogPost = {
  slug: "bitye-ssylki",
  title: "Broken links on a site: how to find and fix them",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/bitye-ssylki/cover-en.webp",
  excerpt:
    "What broken links are (404 and other errors), how they hurt UX and SEO, how to find them with a crawler, and what to do: edit, 301, or remove.",
  lead: [
    "A broken link points to an unavailable URL: 404, 410, timeout, a broken redirect chain. The user hits a dead end, the bot wastes crawl budget, and internal link equity leaks nowhere.",
    "Below: how to find, prioritize, and fix them. Mass-redirecting every 404 to the homepage is bad practice — it hides the problem and confuses both people and search.",
  ],
  faq: [
    {
      q: "Do broken links mean only 404?",
      a: "Most often yes, but 5xx, redirects to nowhere, and soft-404 (page returns 200 but means “not found”) also hurt. Check status code and content.",
    },
    {
      q: "Do they affect rankings?",
      a: "Indirectly: worse UX, lost internal link flow, crawl junk. One or two links won’t kill a site; systemic mess in menus and templates will.",
    },
    {
      q: "What should I use to find them?",
      a: "Crawlers (Screaming Frog and peers), Webmaster/Search Console reports, server logs, spot checks after slug changes.",
    },
    {
      q: "Should I always use a 301?",
      a: "If there’s a close-in-meaning page — yes. If the topic is gone — a correct 404/410 and fix the outbound link. Don’t redirect “just to get 200.”",
    },
    {
      q: "What about broken outbound external links?",
      a: "Fix or remove those too: they hurt trust and the reader, especially in old pieces and a “partners” footer.",
    },
    {
      q: "How often should I check?",
      a: "Right after releases and migrations. For a stable site — at least quarterly. Priority: templates, traffic URLs, and addresses with external backlinks.",
    },
    {
      q: "What is a soft-404?",
      a: "The server returns 200, but the user sees “product removed” / an empty shell. For search that’s noise: better an honest 404/410 or a 301 to a current equivalent.",
    },
    {
      q: "Is a three-hop 301 chain OK?",
      a: "It may work, but shorten to one hop to the final URL. Long chains slow and confuse crawl.",
    },
  ],
  sections: [
    {
      title: "What counts as broken — and why it hurts",
      level: 2,
      paras: [
        "A broken link is any click where the target is unavailable or meaningless: 404/410, 5xx, timeout, redirect to an error, soft-404. Internal broken links in the menu hit the whole site; in an old article — locally, but they pile up.",
        "For the user it’s a broken journey: left a card, tapped “similar product” — empty. For SEO — wasted crawl budget, diluted internal signals, and weaker behavior on affected templates. Not a separate “penalty for one link,” but hygiene without which site quality is hard to grow.",
      ],
      lists: [
        {
          intro: "Where it breaks most often:",
          items: [
            "menu, footer, breadcrumbs after a structure change",
            "cards and “similar” blocks on the storefront",
            "old blog posts with outdated URLs",
            "buttons and banners in email/account templates",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "How to find: crawler, panels, logs",
      level: 2,
      paras: [
        "Crawl the site, export 404s from Webmaster and Search Console, cross-check logs after a slug change. One source isn’t enough: the crawler sees internal links, panels show what search engines saw, logs show real hits from people and bots.",
        "Build a table right away: broken URL, status code, source page, hit count. Then the report becomes a task queue — not an endless list of red lines with no owner.",
      ],
      lists: [
        {
          intro: "Mini check set:",
          items: [
            "full crawl (or at least priority sections)",
            "pages-with-errors report in accounts",
            "log sample of 404s for a period",
            "manual click through menu/footer after a release",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Prioritization: what to fix first",
      level: 2,
      paras: [
        "Not every broken link is equally urgent. An error in the main menu, checkout, or a traffic article beats a forgotten URL with no hits for half a year.",
        "Separately handle addresses with external links and frequent log requests: people and bots already land there, so a relevant fix (edit or 301) pays off faster than archive cosmetics.",
      ],
      lists: [
        {
          intro: "First:",
          items: [
            "navigation and footer",
            "service and product pages",
            "materials with organic traffic",
            "URLs with external backlinks",
            "then — the tail of old posts",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Fixing random 404s from the long tail while a broken section link hangs in the header. Start with templates.",
        },
      ],
    },
    {
      title: "How to fix: edit, 301, 410",
      level: 2,
      paras: [
        "Fix the href to a live URL, restore the needed page, set a 301 to a close-in-meaning address, or remove the link. For a section move, prepare a redirect map ahead — not as complaints arrive.",
        "A 301 is justified when old and new pages share user intent. A redirect “just for 200,” especially to home, doesn’t help people and hides a structure hole. If the content is gone for good — honest 404/410 plus remove the outbound link.",
      ],
      lists: [
        {
          intro: "Algorithm for one URL:",
          items: [
            "find every source of the link",
            "decide whether the target page is still needed",
            "choose: edit href / 301 / 410 / remove",
            "shorten redirect chains",
            "recrawl and cross-check reports",
          ],
        },
      ],
      links: [
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Internal vs outbound external",
      level: 2,
      paras: [
        "Internal broken links matter more for SEO structure: they’re under your control and affect crawl. Outbound links to other people’s 404s hurt reader trust (“the site is abandoned”) and UX of guides with many external sources.",
        "In old articles, every half year it’s worth spot-checking external links to key services and documents. Replace with a current URL or remove the link if the resource is gone.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "internal — into the backlog after every crawl",
            "external — selectively in evergreen pieces",
            "don’t leave broken partner buttons in the footer for years",
          ],
        },
      ],
    },
    {
      title: "Prevention after releases and CMS changes",
      level: 2,
      paras: [
        "Don’t delete popular URLs without a replacement plan or a correct response. After a CMS or slug change, walk menu, cards, forms, sitemap, and top traffic articles — that’s where old paths most often fall off.",
        "Assign an owner for checks and keep a fix history. Then a repeat 404 after a release can be tied to a specific deploy — not hunted at random.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "all 404 → home",
            "ignoring broken links in a template for years",
            "redirect to irrelevance “just for 200”",
            "slug change without a 301 map",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Checking the result",
      level: 2,
      paras: [
        "After fixes, crawl again and manually check key paths. Make sure the 301 goes straight to the final relevant page — no chains through three intermediate addresses.",
        "Webmaster reports don’t update instantly — watch trends, not one day. If a URL should disappear forever, a correct 410 is more honest than a random redirect. Log old URL, source, decision, and recheck date.",
      ],
      lists: [
        {
          intro: "Closing the case:",
          items: [
            "recrawl without critical 404s in templates",
            "manual smoke of menu/footer",
            "drop in hits to old 404s in logs",
            "note in backlog/wiki what you did",
          ],
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Cleaning broken links is part of prep and hygiene. Page-one share for a commercial core is planned for two to six months after work starts — a separate horizon.",
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
  related: [
    "chto-takoe-ssylka",
    "htaccess-301",
    "kod-statusa-http",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "karta-sayta",
  ],
};

/** ES overlay for bitye-ssylki — same structure as RU JSON / EN. */
export const bityeSsylkiEs: BlogPost = {
  slug: "bitye-ssylki",
  title: "Enlaces rotos en un sitio: cómo encontrarlos y arreglarlos",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/bitye-ssylki/cover-es.webp",
  excerpt:
    "Qué son los enlaces rotos (404 y otros errores), cómo duelen a la UX y al SEO, cómo encontrarlos con un crawler y qué hacer: editar, 301 o quitar.",
  lead: [
    "Un enlace roto apunta a una URL no disponible: 404, 410, timeout, una cadena de redirects rota. El usuario choca con un callejón sin salida, el bot gasta crawl budget y el equity de enlaces internos se filtra a ningún sitio.",
    "Abajo: cómo encontrarlos, priorizarlos y arreglarlos. Redirigir en masa todos los 404 a la homepage es mala práctica — esconde el problema y confunde a personas y a la búsqueda.",
  ],
  faq: [
    {
      q: "¿Enlaces rotos significa solo 404?",
      a: "Lo más habitual sí, pero también duelen 5xx, redirects a ningún sitio y soft-404 (la página devuelve 200 pero significa «no encontrado»). Revisa código de estado y contenido.",
    },
    {
      q: "¿Afectan a los rankings?",
      a: "De forma indirecta: peor UX, pérdida de flujo de enlaces internos, basura de crawl. Uno o dos enlaces no matan un sitio; un lío sistémico en menús y plantillas sí.",
    },
    {
      q: "¿Qué uso para encontrarlos?",
      a: "Crawlers (Screaming Frog y pares), informes de Webmaster/Search Console, logs del servidor, checks puntuales tras cambios de slug.",
    },
    {
      q: "¿Debo usar siempre un 301?",
      a: "Si hay una página cercana en sentido — sí. Si el tema desapareció — un 404/410 correcto y arreglar el enlace saliente. No redirijas «solo para obtener 200».",
    },
    {
      q: "¿Y los enlaces externos salientes rotos?",
      a: "Arregla o quita esos también: duelen a la confianza y al lector, sobre todo en piezas viejas y un footer de «partners».",
    },
    {
      q: "¿Cada cuánto debo comprobar?",
      a: "Justo tras releases y migraciones. En un sitio estable — al menos trimestral. Prioridad: plantillas, URLs con tráfico y direcciones con backlinks externos.",
    },
    {
      q: "¿Qué es un soft-404?",
      a: "El servidor devuelve 200, pero el usuario ve «producto quitado» / un cascarón vacío. Para la búsqueda es ruido: mejor un 404/410 honesto o un 301 a un equivalente actual.",
    },
    {
      q: "¿Está bien una cadena de 301 de tres saltos?",
      a: "Puede funcionar, pero acorta a un salto a la URL final. Las cadenas largas ralentizan y confunden el crawl.",
    },
  ],
  sections: [
    {
      title: "Qué cuenta como roto — y por qué duele",
      level: 2,
      paras: [
        "Un enlace roto es cualquier clic donde el destino no está disponible o no tiene sentido: 404/410, 5xx, timeout, redirect a un error, soft-404. Los internos rotos en el menú pegan a todo el sitio; en un artículo viejo — en local, pero se acumulan.",
        "Para el usuario es un journey roto: salió de una ficha, pulsó «producto similar» — vacío. Para SEO — crawl budget gastado, señales internas diluidas y comportamiento más flojo en plantillas afectadas. No es una «penalización por un enlace» aparte, sino higiene sin la cual cuesta crecer la calidad del sitio.",
      ],
      lists: [
        {
          intro: "Dónde se rompe más a menudo:",
          items: [
            "menú, footer, breadcrumbs tras un cambio de estructura",
            "fichas y bloques «similares» en el escaparate",
            "posts viejos del blog con URLs desfasadas",
            "botones y banners en plantillas de email/cuenta",
          ],
        },
      ],
      links: [
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
        {
          label: "Códigos de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "Cómo encontrar: crawler, paneles, logs",
      level: 2,
      paras: [
        "Crawl del sitio, export de 404s desde Webmaster y Search Console, cruce con logs tras un cambio de slug. Una sola fuente no basta: el crawler ve enlaces internos, los paneles muestran lo que vieron los buscadores, los logs muestran hits reales de personas y bots.",
        "Arma una tabla ya: URL rota, código de estado, página origen, conteo de hits. Así el informe pasa a cola de tareas — no a una lista infinita de líneas rojas sin dueño.",
      ],
      lists: [
        {
          intro: "Mini set de checks:",
          items: [
            "crawl completo (o al menos secciones prioritarias)",
            "informe de páginas con errores en las cuentas",
            "muestra de logs de 404s de un periodo",
            "clic manual por menú/footer tras un release",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Priorización: qué arreglar primero",
      level: 2,
      paras: [
        "No todo enlace roto es igual de urgente. Un error en el menú principal, el checkout o un artículo con tráfico gana a una URL olvidada sin hits medio año.",
        "Trata aparte las direcciones con enlaces externos y peticiones frecuentes en logs: personas y bots ya aterrizan ahí, así que un arreglo relevante (editar o 301) renta más rápido que cosmética de archivo.",
      ],
      lists: [
        {
          intro: "Primero:",
          items: [
            "navegación y footer",
            "páginas de servicio y producto",
            "materiales con tráfico orgánico",
            "URLs con backlinks externos",
            "luego — la cola de posts viejos",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Arreglar 404s al azar de la cola larga mientras un enlace de sección roto cuelga en el header. Empieza por plantillas.",
        },
      ],
    },
    {
      title: "Cómo arreglar: editar, 301, 410",
      level: 2,
      paras: [
        "Corrige el href a una URL viva, restaura la página necesaria, fija un 301 a una dirección cercana en sentido, o quita el enlace. Para mudanza de sección, prepara un mapa de redirects de antemano — no cuando lleguen las quejas.",
        "Un 301 se justifica cuando página vieja y nueva comparten intent de usuario. Un redirect «solo por el 200», sobre todo a la home, no ayuda a la gente y esconde un hueco de estructura. Si el contenido se fue para siempre — 404/410 honesto más quitar el enlace saliente.",
      ],
      lists: [
        {
          intro: "Algoritmo para una URL:",
          items: [
            "encontrar cada origen del enlace",
            "decidir si la página destino aún hace falta",
            "elegir: editar href / 301 / 410 / quitar",
            "acortar cadenas de redirects",
            "recrawl y cruzar informes",
          ],
        },
      ],
      links: [
        {
          label: "301 en .htaccess",
          href: "/es/blog/htaccess-301/",
        },
        {
          label: "Redirect",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Internos vs externos salientes",
      level: 2,
      paras: [
        "Los enlaces internos rotos importan más para la estructura SEO: están bajo tu control y afectan al crawl. Los salientes a 404 ajenos duelen a la confianza del lector («el sitio está abandonado») y a la UX de guías con muchas fuentes externas.",
        "En artículos viejos, cada medio año conviene spot-check de enlaces externos a servicios y documentos clave. Sustituye por una URL actual o quita el enlace si el recurso desapareció.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "internos — al backlog tras cada crawl",
            "externos — de forma selectiva en piezas evergreen",
            "no dejes botones de partners rotos en el footer años",
          ],
        },
      ],
    },
    {
      title: "Prevención tras releases y cambios de CMS",
      level: 2,
      paras: [
        "No borres URLs populares sin un plan de reemplazo o una respuesta correcta. Tras un cambio de CMS o slug, recorre menú, fichas, formularios, sitemap y artículos con más tráfico — ahí es donde más a menudo se caen paths viejos.",
        "Asigna un dueño de los checks y guarda historial de arreglos. Así un 404 repetido tras un release se puede atar a un deploy concreto — no cazarlo al azar.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "todos los 404 → home",
            "ignorar enlaces rotos en una plantilla durante años",
            "redirect a algo irrelevante «solo por el 200»",
            "cambio de slug sin mapa de 301",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/es/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Comprobar el resultado",
      level: 2,
      paras: [
        "Tras los arreglos, vuelve a crawlear y revisa a mano los caminos clave. Asegúrate de que el 301 va directo a la página relevante final — sin cadenas por tres direcciones intermedias.",
        "Los informes de Webmaster no se actualizan al instante — mira tendencias, no un solo día. Si una URL debe desaparecer para siempre, un 410 correcto es más honesto que un redirect al azar. Anota URL vieja, origen, decisión y fecha de recheck.",
      ],
      lists: [
        {
          intro: "Cerrar el caso:",
          items: [
            "recrawl sin 404s críticos en plantillas",
            "smoke manual de menú/footer",
            "caída de hits a 404s viejos en logs",
            "nota en backlog/wiki de lo que hiciste",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos SEO",
          kind: "tip",
          text: "Limpiar enlaces rotos forma parte de la prep y la higiene. La cuota en primera página de un núcleo comercial se planifica en dos a seis meses tras arrancar el trabajo — un horizonte aparte.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "chto-takoe-ssylka",
    "htaccess-301",
    "kod-statusa-http",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "karta-sayta",
  ],
};

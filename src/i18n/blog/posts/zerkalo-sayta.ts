import type { BlogPost } from "../../../data/blog";

/** EN overlay for zerkalo-sayta — same structure as RU JSON. */
export const zerkaloSaytaEn: BlogPost = {
  slug: "zerkalo-sayta",
  title: "Site mirror: what it is, why to merge, how to check",
  date: "2018-02-01",
  category: "SEO",
  cover: "/images/blog/zerkalo-sayta/cover-en.webp",
  excerpt:
    "What people call a site mirror: www and non-www, extra domains, and copies on other servers. How to merge with 301, why it matters for SEO, and how to verify the main host.",
  lead: [
    "A “mirror” in web practice is nearly the same site — or the same content — under another URL: www and non-www, a spare domain, a copy on another host. For search that is a duplicate risk if the addresses are not merged.",
    "Below: three meanings of the term, legitimate reasons for mirrors, how to glue the main host with 301, and how to check. Example `.htaccess` rules live in a separate post; this one covers logic and order.",
  ],
  faq: [
    {
      q: "Are www and non-www mirrors?",
      a: "Yes. For the crawler they are different hosts with the same content until there is a 301 to one canon.",
    },
    {
      q: "Is Host in robots.txt enough?",
      a: "For Yandex, Host is outdated. The main fix is a 301 to the canon plus settings in Webmaster / Search Console.",
    },
    {
      q: "Redirect or canonical?",
      a: "For host mirrors (www / https / another synonym domain) — almost always 301. Canonical — for parameters and template duplicates on one host.",
    },
    {
      q: "Do I need mirrors “to escape a filter”?",
      a: "Moving to a new domain to dodge sanctions is a bad strategy. Fix the cause first; otherwise the filter follows the new name.",
    },
    {
      q: "How many mirrors are OK?",
      a: "Technically many synonyms (typo domains), but all should 301 to one main URL. Do not keep several 200 OK responses with the same content.",
    },
    {
      q: "How do I verify the merge?",
      a: "Open the non-canon with `curl -I` or DevTools: you should see 301 to the canon. In results and Webmaster — one main host.",
    },
    {
      q: "Are CDN and geo copies the same?",
      a: "Similar for availability, but SEO needs one public canonical URL. A CDN usually does not spawn separate index hosts.",
    },
    {
      q: "How does this relate to HTTPS?",
      a: "http→https merge is part of choosing the main mirror. See the HTTPS and redirects posts.",
    },
  ],
  sections: [
    {
      title: "Three meanings of “mirror”",
      level: 2,
      paras: [
        "**Variants of one site:** `example.ru` and `www.example.ru`, http and https — classic host mirrors. Without a merge the engine sees different URLs.",
        "**Synonym domain:** a second address you bought (typo, old name) with 301 to the main one. **Physical copy:** same content on another server for availability or load — SEO still needs one canonical entry for users and the index.",
      ],
      lists: [
        {
          intro: "What to remember:",
          items: [
            "a mirror is not “another site ranking separately”",
            "one content set — one main URL in the index",
            "other hosts return 301 to the canon",
          ],
        },
      ],
    },
    {
      title: "Why mirrors are made",
      level: 2,
      paras: [
        "Merging www/non-www and http/https is required hygiene. Extra domains protect against typos and similar-name capture. Geo or backup copies are for availability on outages — engineering, not “two sites in the results.”",
        "Do not confuse this with a satellite network: useful content and links to the main domain are not clones built for manipulation.",
      ],
      lists: [
        {
          intro: "Legitimate cases:",
          items: [
            "one main mirror",
            "domain move with 301",
            "typo domains → canon",
            "country domains with a clear canon / localization",
          ],
        },
      ],
      notes: [
        {
          title: "Not recommended",
          kind: "tip",
          text: "Creating a mirror “to leave a filter.” Audit and fix the cause first; otherwise the risk moves with the content.",
        },
      ],
      links: [
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How to merge the main mirror",
      level: 2,
      paras: [
        "Pick the canon: usually `https://` plus a www-or-not decision. All other host/protocol variants get a permanent 301 to the canon — including paths, and where possible without long chains.",
        "On Apache people often edit `.htaccess`; on nginx — `return 301` in the config. After the merge check Webmaster / Search Console and the sitemap for canonical URLs.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "choose the canon",
            "set 301 from all mirrors",
            "update internal links to the canon",
            "serve a sitemap with the canon",
            "check webmaster panels",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Moving to a new domain",
      level: 2,
      paras: [
        "The new address becomes the canon: the old domain fully 301s to matching new URLs — page by page, not everything to the homepage. In panels you file a move / address change.",
        "Gradually switch links in email, ads, and partnerships to the new host; keep the old one with redirects while external traffic still arrives.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "Request a non-canonical URL: headers should show `301` and `Location` to the canon. In the browser account for redirect cache — check with a clean request.",
        "In results and index reports see which host is shown. “Merge check” tools are a quick glance; truth remains response headers and webmaster dashboards.",
      ],
      lists: [
        {
          intro: "Check checklist:",
          items: [
            "http → https",
            "www ↔ non-www",
            "synonym domains → canon",
            "no chains of three or more redirects",
            "sitemap and internal links on the canon",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Merging mirrors is part of prep. Reindex and results stabilization take time; gains across a commercial keyword set usually need months of steady work after promotion starts — not overnight after one 301.",
        },
      ],
    },
  ],
  related: [
    "redirekt",
    "htaccess-301",
    "dubli-stranits",
    "https-seo",
    "kanonicheskiy-teg",
    "yandeks-vebmaster",
  ],
};

/** ES overlay for zerkalo-sayta — same structure as RU JSON / EN. */
export const zerkaloSaytaEs: BlogPost = {
  slug: "zerkalo-sayta",
  title: "Espejo del sitio: qué es, por qué unificarlo, cómo comprobarlo",
  date: "2018-02-01",
  category: "SEO",
  cover: "/images/blog/zerkalo-sayta/cover.webp",
  excerpt:
    "Qué se llama espejo del sitio: www y sin www, dominios extra y copias en otros servidores. Cómo unificar con 301, por qué importa para el SEO y cómo verificar el host principal.",
  lead: [
    "Un «espejo» en la práctica web es casi el mismo sitio — o el mismo contenido — bajo otra URL: www y sin www, un dominio de reserva, una copia en otro host. Para la búsqueda es riesgo de duplicado si las direcciones no están unificadas.",
    "Abajo: tres sentidos del término, motivos legítimos para espejos, cómo pegar el host principal con 301 y cómo comprobarlo. Las reglas de ejemplo en `.htaccess` viven en un post aparte; aquí van la lógica y el orden.",
  ],
  faq: [
    {
      q: "¿Son espejos www y sin www?",
      a: "Sí. Para el crawler son hosts distintos con el mismo contenido hasta que haya un 301 a un canónico.",
    },
    {
      q: "¿Basta el Host en robots.txt?",
      a: "Para Yandex, Host está desfasado. La corrección principal es un 301 al canónico más ajustes en Webmaster / Search Console.",
    },
    {
      q: "¿Redirect o canonical?",
      a: "Para espejos de host (www / https / otro dominio sinónimo) — casi siempre 301. Canonical — para parámetros y duplicados de plantilla en un mismo host.",
    },
    {
      q: "¿Hacen falta espejos «para escapar de un filtro»?",
      a: "Mudarse a un dominio nuevo para esquivar sanciones es mala estrategia. Primero arregla la causa; si no, el filtro sigue al nombre nuevo.",
    },
    {
      q: "¿Cuántos espejos están bien?",
      a: "Técnicamente muchos sinónimos (dominios typo), pero todos deben hacer 301 a una URL principal. No mantengas varias respuestas 200 OK con el mismo contenido.",
    },
    {
      q: "¿Cómo verifico la unificación?",
      a: "Abre el no canónico con `curl -I` o DevTools: deberías ver 301 al canónico. En resultados y Webmaster — un host principal.",
    },
    {
      q: "¿CDN y copias geo son lo mismo?",
      a: "Parecido para disponibilidad, pero el SEO necesita una URL canónica pública. Un CDN normalmente no crea hosts de índice separados.",
    },
    {
      q: "¿Cómo se relaciona con HTTPS?",
      a: "La unificación http→https forma parte de elegir el espejo principal. Ver los posts de HTTPS y redirects.",
    },
  ],
  sections: [
    {
      title: "Tres sentidos de «espejo»",
      level: 2,
      paras: [
        "**Variantes de un sitio:** `example.ru` y `www.example.ru`, http y https — espejos clásicos de host. Sin unificar, el motor ve URLs distintas.",
        "**Dominio sinónimo:** una segunda dirección que compraste (typo, nombre viejo) con 301 a la principal. **Copia física:** el mismo contenido en otro servidor por disponibilidad o carga — el SEO sigue necesitando una entrada canónica para usuarios e índice.",
      ],
      lists: [
        {
          intro: "Qué recordar:",
          items: [
            "un espejo no es «otro sitio rankeando aparte»",
            "un set de contenido — una URL principal en el índice",
            "los demás hosts devuelven 301 al canónico",
          ],
        },
      ],
    },
    {
      title: "Por qué se hacen espejos",
      level: 2,
      paras: [
        "Unificar www/sin-www y http/https es higiene obligatoria. Dominios extra protegen de typos y de que capturen un nombre parecido. Copias geo o de backup son para disponibilidad en caídas — ingeniería, no «dos sitios en resultados».",
        "No lo confundas con una red de satélites: contenido útil y enlaces al dominio principal no son clones montados para manipular.",
      ],
      lists: [
        {
          intro: "Casos legítimos:",
          items: [
            "un espejo principal",
            "mudanza de dominio con 301",
            "dominios typo → canónico",
            "dominios de país con canónico / localización claros",
          ],
        },
      ],
      notes: [
        {
          title: "No recomendado",
          kind: "tip",
          text: "Crear un espejo «para salir de un filtro». Primero audita y arregla la causa; si no, el riesgo viaja con el contenido.",
        },
      ],
      links: [
        {
          label: "Duplicados de página",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Cómo unificar el espejo principal",
      level: 2,
      paras: [
        "Elige el canónico: normalmente `https://` más decisión www o no. Todas las demás variantes de host/protocolo reciben un 301 permanente al canónico — incluidos paths, y si se puede sin cadenas largas.",
        "En Apache a menudo se edita `.htaccess`; en nginx — `return 301` en el config. Tras unificar, revisa Webmaster / Search Console y el sitemap con URLs canónicas.",
      ],
      lists: [
        {
          intro: "Orden:",
          items: [
            "elegir el canónico",
            "fijar 301 desde todos los espejos",
            "actualizar enlaces internos al canónico",
            "servir un sitemap con el canónico",
            "revisar paneles de webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
        {
          label: "301 en .htaccess",
          href: "/es/blog/htaccess-301/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
    {
      title: "Mudanza a un dominio nuevo",
      level: 2,
      paras: [
        "La dirección nueva pasa a ser el canónico: el dominio viejo hace 301 completo a las URLs nuevas equivalentes — página a página, no todo a la home. En los paneles se declara mudanza / cambio de dirección.",
        "Cambia poco a poco enlaces en email, ads y partnerships al host nuevo; mantén el viejo con redirects mientras siga llegando tráfico externo.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Cómo comprobar",
      level: 2,
      paras: [
        "Pide una URL no canónica: los headers deben mostrar `301` y `Location` al canónico. En el navegador cuenta con caché de redirects — comprueba con una petición limpia.",
        "En resultados e informes de índice mira qué host se muestra. Las tools de «chequeo de unificación» son un vistazo rápido; la verdad sigue siendo headers de respuesta y dashboards de webmaster.",
      ],
      lists: [
        {
          intro: "Checklist de comprobación:",
          items: [
            "http → https",
            "www ↔ sin www",
            "dominios sinónimo → canónico",
            "sin cadenas de tres o más redirects",
            "sitemap y enlaces internos en el canónico",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Unificar espejos forma parte de la prep. La reindexación y la estabilización de resultados llevan tiempo; los avances en un set comercial de keywords suelen necesitar meses de trabajo constante tras arrancar la promoción — no de la noche a la mañana tras un solo 301.",
        },
      ],
    },
  ],
  related: [
    "redirekt",
    "htaccess-301",
    "dubli-stranits",
    "https-seo",
    "kanonicheskiy-teg",
    "yandeks-vebmaster",
  ],
};

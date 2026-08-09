import type { BlogPost } from "../../../data/blog";

/** EN overlay for redirekt — same structure as RU JSON. */
export const redirektEn: BlogPost = {
  slug: "redirekt",
  title: "Site redirects: 301, 302, and when to use each",
  date: "2021-08-24",
  category: "SEO",
  cover: "/images/blog/redirekt/cover-en.webp",
  excerpt:
    "What redirects are, how 301 differs from 302/307, when to consolidate www and HTTPS, how to avoid chains, and when canonical beats a redirect.",
  lead: [
    "A redirect is a 3xx server response that sends the browser or crawler to another URL. That’s how you glue mirrors, move sections, and fix old links.",
    "Below: the codes that matter for SEO, everyday 301 jobs, how redirects differ from rel=canonical, and mistakes like chains or landing on the wrong page. After every change, recheck status codes in `.htaccess` or nginx.",
  ],
  faq: [
    {
      q: "Which redirect matters most for SEO?",
      a: "301 Moved Permanently — a permanent move. Search engines gradually pass signals to the new URL.",
    },
    {
      q: "When should I use 302 or 307?",
      a: "When the move is temporary (promo, test, maintenance). For a permanent domain or slug change — 301.",
    },
    {
      q: "Redirect or canonical?",
      a: "Canonical says “prefer this URL,” but the old one may stay open. A 301 moves the user and signals a move more strongly. Dead URLs after a migration → 301.",
    },
    {
      q: "Are redirect chains bad?",
      a: "Yes: A→B→C→D costs speed and sometimes signal. Aim for one hop: A→C.",
    },
    {
      q: "Do I still need Host in robots.txt?",
      a: "Mirrors and the primary host are set in webmaster tools now. Don’t lean on outdated guides that still push Host in robots.",
    },
  ],
  sections: [
    {
      title: "What a redirect is",
      level: 2,
      paras: [
        "The client requests URL A; the server answers “look at B” with a 3xx code. The browser opens B; crawlers factor the redirect type into crawl and URL consolidation.",
      ],
      lists: [
        {
          intro: "Why sites use them:",
          items: [
            "consolidating http/https and www/non-www",
            "moving a section or the whole domain",
            "changing extensions or slugs",
            "cleaning extra slashes and junk URLs",
          ],
        },
      ],
    },
    {
      title: "301, 302, 307 — which to pick",
      level: 2,
      paras: [
        "301 means “moved permanently” — the main tool for consolidations and migrations. 302 Found and 307 Temporary Redirect are temporary; ranking weight more often stays with the source URL.",
        "Other 3xx codes (300, 303, 304, 305…) rarely need hand-tuning in day-to-day SEO — cache, proxies, content negotiation. Don’t confuse them with 301.",
      ],
      tables: [
        {
          caption: "Quick overview",
          headers: ["Code", "Meaning", "Typical case"],
          rows: [
            ["301", "Permanent", "New slug, new domain, https"],
            ["302 / 307", "Temporary", "Promo, A/B, maintenance"],
            ["canonical", "Not a redirect", "Duplicates that should stay open"],
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Old claims that “link juice transfers automatically” are folklore. Watch indexing in Search Console / webmaster tools and traffic to the new URL.",
        },
      ],
    },
    {
      title: "When to use 301",
      level: 2,
      paras: [
        "Consolidate mirrors to one canonical host (HTTPS plus your chosen www variant). Otherwise search sees different URLs with the same content.",
        "For a site or section move: map old→new and avoid long chains. A CMS migration that keeps URL meaning should also 301 from the old addresses.",
      ],
      lists: [
        {
          intro: "Checklist after setup:",
          items: [
            "homepage and 5–10 key URLs resolve in one hop",
            "no redirects into a 404",
            "sitemap updated to final URLs",
            "in Search Console / webmaster tools, mark the move or primary mirror after a domain change",
          ],
        },
      ],
      links: [
        {
          label: "SSL and HTTPS",
          href: "/en/blog/ssl-sertifikat/",
        },
        {
          label: "Removing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "How to set up and verify",
      level: 2,
      paras: [
        "On Apache, rules often live in `.htaccess` (RewriteRule). On nginx, use `return 301` / `rewrite`. Generators help beginners — always verify the result yourself.",
        "After edits, walk the homepage, key service pages, old bookmarks, and external links. Check the status code in DevTools or with `curl -I`.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "chains of multiple redirects",
            "301s between pages with different intent (size/color variants in a catalog)",
            "redirects to an irrelevant or empty page",
            "temporary 302s where the move is already permanent",
          ],
        },
      ],
    },
    {
      title: "Redirect vs canonical",
      level: 2,
      paras: [
        '`rel="canonical"` marks the preferred URL among available copies. A user can still open the non-canonical address.',
        "If the old URL shouldn’t exist anymore — 301. If duplicates are needed for UX (filters, params) but only one should index — prefer canonical plus careful indexing controls.",
      ],
      lists: [],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "Redirects tidy URLs: permanent moves → 301, temporary → 302/307, no chains, no swapped page intent. Align HTTPS/www mirrors and check responses after every deploy.",
      ],
      lists: [],
    },
  ],
};

/** ES overlay for redirekt — same structure as RU JSON / EN. */
export const redirektEs: BlogPost = {
  slug: "redirekt",
  title: "Redirects del sitio: 301, 302 y cuándo usar cada uno",
  date: "2021-08-24",
  category: "SEO",
  cover: "/images/blog/redirekt/cover.webp",
  excerpt:
    "Qué son los redirects, en qué se diferencia 301 de 302/307, cuándo unificar www y HTTPS, cómo evitar cadenas y cuándo canonical gana a un redirect.",
  lead: [
    "Un redirect es una respuesta 3xx del servidor que manda al navegador o crawler a otra URL. Así se pegan espejos, se mudan secciones y se arreglan enlaces viejos.",
    "Abajo: los códigos que importan para SEO, trabajos cotidianos con 301, en qué se diferencian los redirects de rel=canonical y errores como cadenas o aterrizar en la página equivocada. Tras cada cambio, vuelve a revisar códigos de estado en `.htaccess` o nginx.",
  ],
  faq: [
    {
      q: "¿Qué redirect importa más para el SEO?",
      a: "301 Moved Permanently — mudanza permanente. Los buscadores pasan señales poco a poco a la URL nueva.",
    },
    {
      q: "¿Cuándo usar 302 o 307?",
      a: "Cuando la mudanza es temporal (promo, test, mantenimiento). Para un cambio permanente de dominio o slug — 301.",
    },
    {
      q: "¿Redirect o canonical?",
      a: "Canonical dice «prefiere esta URL», pero la vieja puede seguir abierta. Un 301 mueve al usuario y señala la mudanza con más fuerza. URLs muertas tras una migración → 301.",
    },
    {
      q: "¿Las cadenas de redirects son malas?",
      a: "Sí: A→B→C→D cuesta velocidad y a veces señal. Apunta a un solo salto: A→C.",
    },
    {
      q: "¿Sigue haciendo falta Host en robots.txt?",
      a: "Espejos y host principal se fijan ahora en las tools de webmaster. No te apoyes en guías desfasadas que aún empujan Host en robots.",
    },
  ],
  sections: [
    {
      title: "Qué es un redirect",
      level: 2,
      paras: [
        "El cliente pide la URL A; el servidor responde «mira B» con un código 3xx. El navegador abre B; los crawlers tienen en cuenta el tipo de redirect para crawl y consolidación de URLs.",
      ],
      lists: [
        {
          intro: "Por qué los usan los sitios:",
          items: [
            "unificar http/https y www/sin-www",
            "mudar una sección o todo el dominio",
            "cambiar extensiones o slugs",
            "limpiar barras extra y URLs basura",
          ],
        },
      ],
    },
    {
      title: "301, 302, 307 — cuál elegir",
      level: 2,
      paras: [
        "301 significa «moved permanently» — la herramienta principal para unificaciones y migraciones. 302 Found y 307 Temporary Redirect son temporales; el peso de ranking suele quedarse más en la URL origen.",
        "Otros códigos 3xx (300, 303, 304, 305…) rara vez piden ajuste a mano en el SEO del día a día — cache, proxies, negociación de contenido. No los confundas con 301.",
      ],
      tables: [
        {
          caption: "Vista rápida",
          headers: ["Código", "Significado", "Caso típico"],
          rows: [
            ["301", "Permanente", "Slug nuevo, dominio nuevo, https"],
            ["302 / 307", "Temporal", "Promo, A/B, mantenimiento"],
            ["canonical", "No es redirect", "Duplicados que deben seguir abiertos"],
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Las afirmaciones viejas de que «el link juice se transfiere solo» son folklore. Mira indexación en Search Console / webmaster tools y el tráfico a la URL nueva.",
        },
      ],
    },
    {
      title: "Cuándo usar 301",
      level: 2,
      paras: [
        "Unifica espejos a un host canónico (HTTPS más la variante www elegida). Si no, la búsqueda ve URLs distintas con el mismo contenido.",
        "Para mudanza de sitio o sección: mapea viejo→nuevo y evita cadenas largas. Una migración de CMS que conserve el sentido de las URLs también debe hacer 301 desde las direcciones viejas.",
      ],
      lists: [
        {
          intro: "Checklist tras configurar:",
          items: [
            "homepage y 5–10 URLs clave resuelven en un salto",
            "sin redirects hacia un 404",
            "sitemap actualizado a URLs finales",
            "en Search Console / webmaster tools, marca la mudanza o el espejo principal tras un cambio de dominio",
          ],
        },
      ],
      links: [
        {
          label: "SSL y HTTPS",
          href: "/es/blog/ssl-sertifikat/",
        },
        {
          label: "Sacar páginas del índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Cómo configurar y verificar",
      level: 2,
      paras: [
        "En Apache, las reglas suelen vivir en `.htaccess` (RewriteRule). En nginx, usa `return 301` / `rewrite`. Los generadores ayudan a principiantes — siempre verifica el resultado tú.",
        "Tras editar, recorre homepage, páginas clave de servicio, bookmarks viejos y enlaces externos. Revisa el código de estado en DevTools o con `curl -I`.",
      ],
      lists: [
        {
          intro: "Qué evitar:",
          items: [
            "cadenas de varios redirects",
            "301s entre páginas con intent distinto (variantes talla/color en un catálogo)",
            "redirects a una página irrelevante o vacía",
            "302s temporales donde la mudanza ya es permanente",
          ],
        },
      ],
    },
    {
      title: "Redirect vs canonical",
      level: 2,
      paras: [
        '`rel="canonical"` marca la URL preferida entre copias disponibles. Un usuario aún puede abrir la dirección no canónica.',
        "Si la URL vieja no debería existir ya — 301. Si hace falta duplicados por UX (filtros, params) pero solo uno debe indexar — preferible canonical más controles de indexación cuidadosos.",
      ],
      lists: [],
    },
    {
      title: "En resumen",
      level: 2,
      paras: [
        "Los redirects ordenan URLs: mudanzas permanentes → 301, temporales → 302/307, sin cadenas, sin cambiar el intent de página. Alinea espejos HTTPS/www y revisa respuestas tras cada deploy.",
      ],
      lists: [],
    },
  ],
};

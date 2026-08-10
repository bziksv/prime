import type { BlogPost } from "../../../data/blog";

/** EN overlay for pered-zapuskom-sayta — same structure as RU JSON. */
export const peredZapuskomSaytaEn: BlogPost = {
  slug: "pered-zapuskom-sayta",
  title: "Before launching a site: a technical checklist",
  date: "2018-07-20",
  category: "Hosting",
  cover: "/images/blog/pered-zapuskom-sayta/cover-en.webp",
  excerpt:
    "Status codes, speed, sitemap and robots, 404, mixed content, duplicates, Title/URL, mobile, analytics, images, internal links, and structured data — without worshipping AMP or one crawler brand.",
  lead: [
    "A perfect bug-free launch almost never happens. Pre-production’s job is to catch the critical: indexation, speed, mobile, and analytics — so you don’t open the site blind.",
    "Below: a technical checklist before release. Business elements (offer, contacts) live in a companion article. Specific crawlers and AMP from old guides aren’t required — pick any handy scanner and current standards.",
  ],
  faq: [
    {
      q: "Is AMP required?",
      a: "For most commercial sites — no. First proper responsive and speed. AMP is a separate choice for narrow cases.",
    },
    {
      q: "Which status codes should indexed pages return?",
      a: "Main documents — 200. Fix mass 404/5xx and redirect chains before promotion.",
    },
    {
      q: "Can robots.txt block the site?",
      a: "Yes — a wrong Disallow on important sections. Check robots, meta robots, and X-Robots-Tag.",
    },
    {
      q: "What about mixed content?",
      a: "After HTTPS all assets must load over https, or the browser cuts scripts/styles and UX suffers.",
    },
    {
      q: "Is structured data needed immediately?",
      a: "By page meaning (organization, product, FAQ). Not “every type at once” for a checkbox.",
    },
    {
      q: "Should analytics be ready before launch?",
      a: "Yes: counters/GTM and webmaster tools access so you see traffic and index errors from day one.",
    },
  ],
  sections: [
    {
      title: "Indexation, server responses, and speed",
      level: 2,
      paras: [
        "Crawl status codes: 200 on important URLs, no surprise 404/5xx/429. Check server response and content load before ad traffic.",
        "XML sitemap is valid and listed in robots; indexation rules don’t cut needed sections. The 404 page is useful, with a path back into the catalog.",
        "Mixed content after SSL is a common release bug. Duplicates (WWW/non-WWW, slash, parameters, template copies) close with canonical/redirects before junk gets indexed.",
      ],
      lists: [
        {
          intro: "Minimum before open:",
          items: [
            "status codes of key templates",
            "sitemap + robots aligned",
            "HTTPS without mixed content",
            "no accidental sitewide noindex",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
    {
      title: "URL, meta, mobile, and analytics",
      level: 2,
      paras: [
        "Clean URLs by section structure. Title and description unique on money pages. Responsive checked on a real phone — not only DevTools.",
        "Analytics counters and a tag container on all needed templates; webmaster tools connected. Images compressed, with meaningful alt where needed.",
        "Internal linking and link equity: important sections reachable from the menu and hubs, no “orphans.”",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "URL addresses",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Content, markup, and resilience",
      level: 2,
      paras: [
        "Heading hierarchy and text structure are readable. Structured data — by page type. Social links — by need, not a mandatory button zoo.",
        "Resilience: backups, uptime monitoring, basic security — so the release doesn’t die the first night. After launch watch Search Console / webmaster tools for coverage errors.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Tools",
          text: "Old guides often name one commercial crawler. Any scanner + PageSpeed/Lighthouse + webmaster panels works — the point is a repeatable checklist.",
        },
      ],
    },
  ],
  closing: [
    "Before launch close indexation, speed, mobile, and analytics — handle the rest in iterations. There won’t be perfection, but critical blockers are better caught before ad budget.",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "cheklist-sayta",
    "adaptivnyy-sayt",
    "seo-struktura-sayta",
    "ustarevshiy-sayt",
    "url-adres",
  ],
};

/** ES overlay for pered-zapuskom-sayta — same structure as RU JSON / EN. */
export const peredZapuskomSaytaEs: BlogPost = {
  slug: "pered-zapuskom-sayta",
  title: "Antes de lanzar un sitio: checklist técnico",
  date: "2018-07-20",
  category: "Hosting",
  cover: "/images/blog/pered-zapuskom-sayta/cover-es.webp",
  excerpt:
    "Códigos de estado, velocidad, sitemap y robots, 404, mixed content, duplicados, Title/URL, móvil, analytics, imágenes, enlaces internos y datos estructurados — sin adorar AMP ni una marca de crawler.",
  lead: [
    "Un lanzamiento perfecto sin bugs casi nunca ocurre. El trabajo de pre-producción es pillar lo crítico: indexación, velocidad, móvil y analytics — para no abrir el sitio a ciegas.",
    "Abajo: un checklist técnico antes del release. Los elementos de negocio (oferta, contactos) viven en un artículo hermano. Crawlers concretos y AMP de guías viejas no son obligatorios — elige cualquier scanner cómodo y estándares actuales.",
  ],
  faq: [
    {
      q: "¿Es obligatorio AMP?",
      a: "Para la mayoría de sitios comerciales — no. Primero responsive y velocidad en condiciones. AMP es una elección aparte para casos estrechos.",
    },
    {
      q: "¿Qué códigos de estado deben devolver las páginas indexadas?",
      a: "Documentos principales — 200. Arregla 404/5xx masivos y cadenas de redirect antes de promocionar.",
    },
    {
      q: "¿Puede robots.txt bloquear el sitio?",
      a: "Sí — un Disallow mal puesto en secciones importantes. Revisa robots, meta robots y X-Robots-Tag.",
    },
    {
      q: "¿Y el mixed content?",
      a: "Tras HTTPS todos los assets deben cargar por https, o el navegador corta scripts/estilos y la UX sufre.",
    },
    {
      q: "¿Hacen falta datos estructurados de inmediato?",
      a: "Según el sentido de la página (organización, producto, FAQ). No «todos los tipos a la vez» por checkbox.",
    },
    {
      q: "¿Debe estar lista la analytics antes del lanzamiento?",
      a: "Sí: contadores/GTM y acceso a webmaster tools para ver tráfico y errores de índice desde el día uno.",
    },
  ],
  sections: [
    {
      title: "Indexación, respuestas del servidor y velocidad",
      level: 2,
      paras: [
        "Crawl de códigos de estado: 200 en URLs importantes, sin 404/5xx/429 sorpresa. Revisa respuesta del servidor y carga de contenido antes del tráfico de ads.",
        "El sitemap XML es válido y está listado en robots; las reglas de indexación no cortan secciones necesarias. La página 404 es útil, con camino de vuelta al catálogo.",
        "Mixed content tras SSL es un bug habitual de release. Los duplicados (WWW/non-WWW, slash, parámetros, copias de plantilla) se cierran con canonical/redirects antes de que se indexe basura.",
      ],
      lists: [
        {
          intro: "Mínimo antes de abrir:",
          items: [
            "códigos de estado de plantillas clave",
            "sitemap + robots alineados",
            "HTTPS sin mixed content",
            "sin noindex accidental en todo el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Checklist del sitio",
          href: "/es/blog/cheklist-sayta/",
        },
      ],
    },
    {
      title: "URL, meta, móvil y analytics",
      level: 2,
      paras: [
        "URLs limpias según la estructura de secciones. Title y description únicos en páginas de dinero. Responsive comprobado en un teléfono real — no solo en DevTools.",
        "Contadores de analytics y un contenedor de tags en todas las plantillas necesarias; webmaster tools conectados. Imágenes comprimidas, con alt con sentido donde haga falta.",
        "Enlazado interno y equity de enlaces: secciones importantes alcanzables desde el menú y hubs, sin «huérfanas».",
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Direcciones URL",
          href: "/es/blog/url-adres/",
        },
      ],
    },
    {
      title: "Contenido, markup y resiliencia",
      level: 2,
      paras: [
        "Jerarquía de headings y estructura del texto legibles. Datos estructurados — según tipo de página. Enlaces sociales — por necesidad, no un zoo obligatorio de botones.",
        "Resiliencia: backups, monitor de uptime, seguridad básica — para que el release no muera la primera noche. Tras el lanzamiento mira Search Console / webmaster tools por errores de cobertura.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Herramientas",
          text: "Las guías viejas suelen nombrar un crawler comercial. Cualquier scanner + PageSpeed/Lighthouse + paneles de webmaster sirve — el punto es un checklist repetible.",
        },
      ],
    },
  ],
  closing: [
    "Antes del lanzamiento cierra indexación, velocidad, móvil y analytics — el resto en iteraciones. No habrá perfección, pero los blockers críticos conviene pillarlos antes del presupuesto de ads.",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "cheklist-sayta",
    "adaptivnyy-sayt",
    "seo-struktura-sayta",
    "ustarevshiy-sayt",
    "url-adres",
  ],
};

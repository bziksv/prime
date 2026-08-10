import type { BlogPost } from "../../../data/blog";

/** EN overlay for kanonicheskiy-teg — same structure as RU JSON. */
export const kanonicheskiyTegEn: BlogPost = {
  slug: "kanonicheskiy-teg",
  title: "Canonical tag rel=canonical: how it works and how to set it",
  date: "2020-10-20",
  category: "SEO",
  cover: "/images/blog/kanonicheskiy-teg/cover-en.webp",
  excerpt:
    "What rel=canonical is, how it differs from 301 and noindex, how to set the canon in HTML and HTTP, typical mistakes, and when the tag doesn’t help.",
  lead: [
    "`rel=\"canonical\"` tells search engines the preferred URL among available copies or near-variants of a page. It’s not a “delete duplicate” button — a preference signal that can be ignored when signals strongly conflict.",
    "Below: syntax, why you need it for duplicates, absolute URL rules, how it differs from redirects and noindex, and common mistakes. Treat this as the main take on rel=canonical among related posts.",
  ],
  faq: [
    {
      q: "Does canonical remove a duplicate from the SERP?",
      a: "Not always instantly and not like a 301. It states a preference. With conflicting signals the bot may choose otherwise.",
    },
    {
      q: "When should I use a 301 vs canonical?",
      a: "If the old URL shouldn’t open — 301. If both addresses are needed for people (filters, print, UTM landing) but one should be indexed — often canonical. See the redirects article.",
    },
    {
      q: "Where should I put the canonical tag?",
      a: "In HTML `<head>`: `<link rel=\"canonical\" href=\"https://example.com/page/\">`. Alternative — HTTP `Link` header with rel=canonical for non-HTML.",
    },
    {
      q: "Can the canonical href be relative?",
      a: "Prefer absolute with https and the final host. Relative paths more often break when templates are copied.",
    },
    {
      q: "Can a page have several canonical tags?",
      a: "No. One preferred. Several different ones — conflict and chaos for the bot.",
    },
    {
      q: "Do you need a self-referencing canonical?",
      a: "Often yes: it explicitly locks the page canon and helps with parameters and CMS templates.",
    },
    {
      q: "Should I use canonical instead of noindex?",
      a: "Different tools. noindex — “don’t index this document.” Canonical — “prefer that URL.” Don’t confuse with Disallow in robots.txt.",
    },
    {
      q: "Does it help with full copy-paste from another site?",
      a: "Weakly. External plagiarism is another story. Canonical mainly solves your internal URL variants.",
    },
  ],
  sections: [
    {
      title: "What the canonical tag is",
      level: 2,
      paras: [
        "The tag exists to tell search: “among these similar addresses, treat this one as primary.” Typical cases — sort parameters, sessions, https/www variants before merging, print versions, partial product-card duplicates.",
        "Canonical doesn’t replace a clean URL structure and internal links. If the whole site links to crooked addresses, one tag in head won’t carry the fix.",
      ],
      lists: [
        {
          intro: "Roles in short:",
          items: [
            "canonical — preference among available URLs",
            "301 — move; old URL shouldn’t live",
            "noindex — document not in the index",
            "robots Disallow — about crawl, not merging",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How to set it: HTML and header",
      level: 2,
      paras: [
        "Basic form in `<head>`: `<link rel=\"canonical\" href=\"https://www.example.com/catalog/item/\">`. The URL should be the one you want in the index and, where possible, in snippets.",
        "For PDFs and non-HTML responses use the HTTP header `Link: <https://...>; rel=\"canonical\"`. On a CMS an SEO plugin field is usually enough — check it doesn’t spawn a second tag.",
      ],
      lists: [
        {
          intro: "Rules of thumb:",
          items: [
            "absolute https URL",
            "same host as the site canon (www or not)",
            "one tag per document",
            "canon returns 200, not a redirect chain",
            "internal links preferably point to the canon already",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Canonical pointing to a URL that itself 301s further. The bot gets extra confusion — point to the final address.",
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
      title: "Why SEO needs it — and when the tag doesn’t save you",
      level: 2,
      paras: [
        "The goal is to gather signals (links, behavior, relevance) onto one URL and cut duplicate noise in the index. That’s hygiene — not a ranking boost overnight.",
        "If there are no duplicates and URLs are clean — a self-reference is still useful as an anchor. If content is thin or pages differ in meaning, “everything to homepage” canonical hurts: you merge unrelated pages.",
      ],
      lists: [
        {
          intro: "Good cases:",
          items: [
            "UTM and ad parameters",
            "sorts / light filters with the same content",
            "www and https before a full merge",
            "AMP / alternate templates with the same meaning",
          ],
        },
      ],
    },
    {
      title: "Practice: typical setups",
      level: 2,
      paras: [
        "Online store: product card — canon on the clean URL without `?color=` if content is the same; if color is a separate entity with unique copy — its own canon on that card.",
        "Pagination: don’t blindly fold every list page onto the first via canonical — follow current guidance and how it ties to `rel` prev/next / UI. Filters: indexing policy + canonical, or you get a thousand near-identical URLs.",
      ],
      lists: [
        {
          intro: "Before rollout:",
          items: [
            "pick one canon per entity",
            "update CMS templates",
            "check View Source / DevTools",
            "align sitemap and menu with canons",
            "monitor pages in search",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Mistakes that break canonical",
      level: 2,
      paras: [
        "Blocking a duplicate in robots.txt and expecting canonical to work: the bot may see the tag worse. Putting noindex on the canon while copies point to it. Serving 4xx/5xx on the canonical URL. Sending every filter to the homepage “just in case.”",
        "Conflict with hreflang: language versions should agree canons within a locale — not collapse all languages into one URL without a policy.",
      ],
      lists: [
        {
          intro: "Bug checklist:",
          items: [
            "several different canonicals in head",
            "broken relative paths",
            "canon to another domain without reason",
            "canon ≠ what’s in the sitemap",
            "OG / social meta pointing to another URL without need",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "First merge mirrors with 301 (http→https, www). Then set canonical for parameters and templates.",
        },
      ],
      links: [
        {
          label: "Closing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Diagnosing problems",
      level: 2,
      paras: [
        "If the SERP shows the “wrong” URL — check: which canonical is in the code, where internal links go, any redirect chains, what’s in the sitemap. In Search Console / webmaster tools compare the bot-selected canon vs the one you declared.",
        "Mass duplicates without tags, a canon pointing to a thin low-authority page, or an unavailable canon while the duplicate is open — typical reasons for “tag is there, no effect.”",
      ],
      lists: [
        {
          intro: "Tools:",
          items: [
            "crawler: canonical column",
            "spot View Source",
            "indexing reports in panels",
            "compare title/H1 across duplicate groups",
          ],
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
    "dubli-stranits",
    "redirekt",
    "zakrytie-ot-indeksatsii",
    "url-adres",
    "paginatsiya",
  ],
};

/** ES overlay for kanonicheskiy-teg — same structure as RU JSON / EN. */
export const kanonicheskiyTegEs: BlogPost = {
  slug: "kanonicheskiy-teg",
  title: "Tag canónico rel=canonical: cómo funciona y cómo configurarlo",
  date: "2020-10-20",
  category: "SEO",
  cover: "/images/blog/kanonicheskiy-teg/cover-es.webp",
  excerpt:
    "Qué es rel=canonical, en qué se diferencia de 301 y noindex, cómo fijar el canónico en HTML y HTTP, errores típicos y cuándo el tag no ayuda.",
  lead: [
    "`rel=\"canonical\"` indica a los buscadores la URL preferida entre copias o variantes cercanas de una página. No es un botón de «borrar duplicado» — es una señal de preferencia que puede ignorarse cuando las señales chocan con fuerza.",
    "Abajo: sintaxis, por qué hace falta con duplicados, reglas de URL absoluta, en qué se diferencia de redirects y noindex, y errores habituales. Trátalo como la toma principal de rel=canonical entre posts relacionados.",
  ],
  faq: [
    {
      q: "¿Canonical saca un duplicado del SERP?",
      a: "No siempre al instante y no como un 301. Declara una preferencia. Con señales en conflicto el bot puede elegir otra cosa.",
    },
    {
      q: "¿Cuándo usar 301 vs canonical?",
      a: "Si la URL vieja no debería abrirse — 301. Si ambas direcciones hacen falta para personas (filtros, print, landing UTM) pero una debe indexarse — a menudo canonical. Ver el artículo de redirects.",
    },
    {
      q: "¿Dónde pongo el tag canónico?",
      a: "En el HTML `<head>`: `<link rel=\"canonical\" href=\"https://example.com/page/\">`. Alternativa — header HTTP `Link` con rel=canonical para no-HTML.",
    },
    {
      q: "¿Puede el href canónico ser relativo?",
      a: "Prefiere absoluto con https y el host final. Los paths relativos se rompen más a menudo al copiar plantillas.",
    },
    {
      q: "¿Puede una página tener varios tags canónicos?",
      a: "No. Uno preferido. Varios distintos — conflicto y caos para el bot.",
    },
    {
      q: "¿Hace falta un canónico self-referencing?",
      a: "A menudo sí: fija el canónico de la página con claridad y ayuda con parámetros y plantillas del CMS.",
    },
    {
      q: "¿Debo usar canonical en lugar de noindex?",
      a: "Herramientas distintas. noindex — «no indexar este documento». Canonical — «prefiere esa URL». No lo confundas con Disallow en robots.txt.",
    },
    {
      q: "¿Ayuda con copy-paste completo de otro sitio?",
      a: "Poco. El plagio externo es otra historia. Canonical resuelve sobre todo tus variantes internas de URL.",
    },
  ],
  sections: [
    {
      title: "Qué es el tag canónico",
      level: 2,
      paras: [
        "El tag existe para decir a la búsqueda: «entre estas direcciones parecidas, trata esta como primaria». Casos típicos — parámetros de sort, sesiones, variantes https/www antes de unificar, versiones de impresión, duplicados parciales de fichas de producto.",
        "Canonical no sustituye una estructura limpia de URLs ni enlaces internos. Si todo el sitio enlaza a direcciones torcidas, un tag en head no lleva el arreglo.",
      ],
      lists: [
        {
          intro: "Roles en corto:",
          items: [
            "canonical — preferencia entre URLs disponibles",
            "301 — mudanza; la URL vieja no debería vivir",
            "noindex — documento fuera del índice",
            "robots Disallow — sobre crawl, no unificación",
          ],
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Cómo configurarlo: HTML y header",
      level: 2,
      paras: [
        "Forma básica en `<head>`: `<link rel=\"canonical\" href=\"https://www.example.com/catalog/item/\">`. La URL debe ser la que quieres en el índice y, si se puede, en snippets.",
        "Para PDF y respuestas no-HTML usa el header HTTP `Link: <https://...>; rel=\"canonical\"`. En un CMS suele bastar el campo del plugin SEO — comprueba que no genere un segundo tag.",
      ],
      lists: [
        {
          intro: "Reglas prácticas:",
          items: [
            "URL https absoluta",
            "mismo host que el canónico del sitio (www o no)",
            "un tag por documento",
            "el canónico devuelve 200, no una cadena de redirects",
            "los enlaces internos preferiblemente ya apuntan al canónico",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Canonical apuntando a una URL que ella misma hace 301 más lejos. El bot recibe confusión extra — apunta a la dirección final.",
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
      title: "Por qué el SEO lo necesita — y cuándo el tag no te salva",
      level: 2,
      paras: [
        "La meta es reunir señales (enlaces, comportamiento, relevancia) en una URL y cortar ruido de duplicados en el índice. Eso es higiene — no un impulso de ranking de la noche a la mañana.",
        "Si no hay duplicados y las URLs están limpias — una self-reference sigue siendo útil como ancla. Si el contenido es fino o las páginas difieren en sentido, un canonical «todo a la homepage» duele: unificas páginas no relacionadas.",
      ],
      lists: [
        {
          intro: "Buenos casos:",
          items: [
            "UTM y parámetros de ads",
            "sorts / filtros ligeros con el mismo contenido",
            "www y https antes de una unificación completa",
            "AMP / plantillas alternativas con el mismo sentido",
          ],
        },
      ],
    },
    {
      title: "Práctica: setups típicos",
      level: 2,
      paras: [
        "Tienda online: ficha de producto — canónico en la URL limpia sin `?color=` si el contenido es el mismo; si el color es una entidad aparte con copy único — su propio canónico en esa ficha.",
        "Paginación: no pliegues a ciegas cada página de lista a la primera vía canonical — sigue la guía actual y cómo se ata a `rel` prev/next / UI. Filtros: política de indexación + canonical, o tendrás mil URLs casi idénticas.",
      ],
      lists: [
        {
          intro: "Antes del rollout:",
          items: [
            "elige un canónico por entidad",
            "actualiza plantillas del CMS",
            "revisa View Source / DevTools",
            "alinea sitemap y menú con canónicos",
            "monitorea páginas en búsqueda",
          ],
        },
      ],
      links: [
        {
          label: "Paginación",
          href: "/es/blog/paginatsiya/",
        },
        {
          label: "Redirects",
          href: "/es/blog/redirekt/",
        },
      ],
    },
    {
      title: "Errores que rompen canonical",
      level: 2,
      paras: [
        "Bloquear un duplicado en robots.txt y esperar que canonical funcione: el bot puede ver peor el tag. Poner noindex en el canónico mientras las copias apuntan a él. Servir 4xx/5xx en la URL canónica. Mandar cada filtro a la homepage «por si acaso».",
        "Conflicto con hreflang: las versiones de idioma deben acordar canónicos dentro de un locale — no colapsar todos los idiomas en una URL sin política.",
      ],
      lists: [
        {
          intro: "Checklist de bugs:",
          items: [
            "varios canónicos distintos en head",
            "paths relativos rotos",
            "canónico a otro dominio sin motivo",
            "canónico ≠ lo que hay en el sitemap",
            "OG / meta social apuntando a otra URL sin necesidad",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Primero unifica espejos con 301 (http→https, www). Luego fija canonical para parámetros y plantillas.",
        },
      ],
      links: [
        {
          label: "Cerrar páginas al índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Diagnosticar problemas",
      level: 2,
      paras: [
        "Si el SERP muestra la URL «equivocada» — revisa: qué canónico hay en el código, a dónde van los enlaces internos, si hay cadenas de redirects, qué hay en el sitemap. En Search Console / webmaster tools compara el canónico elegido por el bot con el que declaraste.",
        "Duplicados masivos sin tags, un canónico a una página fina de poca autoridad, o un canónico no disponible mientras el duplicado está abierto — motivos típicos de «el tag está, no hay efecto».",
      ],
      lists: [
        {
          intro: "Herramientas:",
          items: [
            "crawler: columna canonical",
            "View Source puntual",
            "informes de indexación en paneles",
            "comparar title/H1 entre grupos de duplicados",
          ],
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
    "dubli-stranits",
    "redirekt",
    "zakrytie-ot-indeksatsii",
    "url-adres",
    "paginatsiya",
  ],
};

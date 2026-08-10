import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-oshibki — same structure as RU JSON. */
export const seoOshibkiEn: BlogPost = {
  slug: "seo-oshibki",
  title: "The most common SEO mistakes on a website",
  date: "2019-08-19",
  category: "SEO",
  cover: "/images/blog/seo-oshibki/cover-en.webp",
  excerpt:
    "Typical misses in titles and descriptions, headings, links, markup, and HTTPS — how to find them and what to fix first, without a “page one in a week” fantasy.",
  lead: [
    "Most SEO mistakes on real sites aren’t a mysterious algorithm penalty. They’re everyday tech and snippets: truncated titles, duplicate meta, broken links, messy H1s, mixed content after moving to HTTPS.",
    "Below are the risk zones that show up in audits and a practical fix order. Cleaning errors is site prep. Building rankings for the keyword set is planned over months after systematic work starts — not the week you tick a checklist green.",
  ],
  faq: [
    {
      q: "Where should an error audit start?",
      a: "Whatever blocks crawl or clicks first: status codes, indexing, HTTPS and mixed content, unique titles/H1s, broken links. Markup and cosmetics come after.",
    },
    {
      q: "Do meta keywords still matter?",
      a: "For Google and Yandex, almost no influence like the old days. Don’t spend budget on keyword lists — invest in title, description, and the page itself.",
    },
    {
      q: "Is a long title a disaster?",
      a: "Not automatically a penalty, but the snippet will truncate. Put the meaning at the start. Length guidelines live in the separate title-length article.",
    },
    {
      q: "Is it bad if the title equals the description?",
      a: "Yes. You lose the “headline vs teaser” difference and weaken CTR. Give each URL a unique pair.",
    },
    {
      q: "Are Open Graph and Schema required?",
      a: "OG/Twitter help social sharing. Schema helps rich results when the page type fits (organization, product, FAQ). Missing them doesn’t “kill” SEO — you just leave opportunities on the table.",
    },
    {
      q: "Does the H1 have to match the title tag?",
      a: "Not word for word. One clear H1 on the page; the title is for search results. Matching every character site-wide isn’t the goal.",
    },
    {
      q: "Which audit tools should I use?",
      a: "Webmaster tools / Search Console, a crawler (Screaming Frog and peers), plus selective manual checks. Paid “site audit” modules are optional.",
    },
    {
      q: "I fixed the errors — when do rankings come?",
      a: "Prep and cleanup often take weeks to about a month. Moving the keyword set toward page one is planned over 2–6 months after systematic work starts.",
    },
  ],
  sections: [
    {
      title: "Where sites mess up most often",
      level: 2,
      paras: [
        "Audit slices usually surface meta and markup first, then headings and links, then HTTPS and certificates. Status codes, speed, and thin content matter too — on some projects they just hide until you dig deeper.",
        "Don’t chase a tool’s green score. Prioritize what breaks indexing, clicks, or trust: broken URLs, mixed content, empty or duplicated snippets on money pages.",
      ],
      lists: [
        {
          intro: "Review order:",
          items: [
            "availability and status codes",
            "HTTPS and mixed content",
            "unique titles, descriptions, and H1s",
            "broken links and redirect chains",
            "markup and social snippets — as needed",
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
    {
      title: "Title, description, and outdated keywords",
      level: 2,
      paras: [
        "Title and description shape the snippet and how clearly the topic reads. Beginners stuff every keyword in: the headline truncates and the meaning dies. A title that’s too short is weak too — people can’t tell where the result leads.",
        "Classic meta keywords barely work in major engines — don’t build strategy on them. Write the description as a human teaser: benefit and difference, not a pasted copy of the title.",
      ],
      lists: [
        {
          intro: "Meta hygiene:",
          items: [
            "unique title and description on important URLs",
            "main meaning and key phrase near the start of the title",
            "no empty “best / #1” fluff for cosmetics",
            "don’t copy a competitor’s title line for line",
            "don’t reuse the title as the description",
          ],
        },
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "Links: broken, redirects, wasted equity",
      level: 2,
      paras: [
        "Broken internal and external links hurt crawl and UX. Long 301 chains dilute signals and slow crawling. Irrelevant anchors — or links to sections that vanished after a redesign — are classic post-migration damage.",
        "Check the templates: menu, footer, breadcrumbs, “related products.” A mass crawl beats clicking the site by hand.",
      ],
      lists: [
        {
          intro: "Link minimum:",
          items: [
            "no 404s on priority templates",
            "redirect chains shortened",
            "301s from old URLs after renames",
            "external “donors” not pointing at mirrors or errors",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "Markup: Open Graph, Twitter Card, Schema",
      level: 2,
      paras: [
        "Without Open Graph, social platforms often grab a random image and a scrap of text — sharing CTR suffers. Schema.org / JSON-LD helps rich results when the page type fits (not “markup for markup’s sake”).",
        "The real mistake is broken or contradictory markup in Search Console or validators. Less and correct beats more and conflicting.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "OG on key landings and articles",
            "JSON-LD that matches the actual page type",
            "validate in platform tools",
            "don’t ship conflicting microdata side by side",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
        {
          label: "Snippets and markup",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "H1 and heading hierarchy",
      level: 2,
      paras: [
        "A page with no H1 — or several competing ones — muddies the structure. The H1 should state the document topic; then use logical H2/H3 without skipping levels for design fashion.",
        "Exact H1–title match isn’t required. Both should honestly describe the page and not fight neighboring URLs for the same intent.",
      ],
      lists: [
        {
          intro: "Check the template:",
          items: [
            "one primary H1",
            "no chaotic skips (H2 → H4 with no reason)",
            "H1 not hidden in CSS as empty decor",
            "no identical H1s across dozens of product cards with no differences",
          ],
        },
      ],
      notes: [
        {
          title: "Tied to duplicates",
          text: "Identical titles/H1s on different URLs often signal duplicates or cannibalization. See the separate materials on those.",
        },
      ],
    },
    {
      title: "HTTPS and mixed content",
      level: 2,
      paras: [
        "Incomplete HTTPS migrations leave scripts, images, or forms on http:// — the browser warns, trust drops, UX suffers. After migration, check absolute URLs in content and templates, relative paths, the http→https redirect, and a canonical pointing at https.",
        "Certificate failures (expired, wrong name, broken chain) show a security warning and hit behavior. Monitor SSL expiry and correctness.",
      ],
      lists: [
        {
          intro: "After turning on HTTPS:",
          items: [
            "301 from HTTP to HTTPS",
            "no mixed content on key templates",
            "canonical and sitemap on https",
            "external mentions updated where you can",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "How to stay on top of it — without waiting for miracles",
      level: 2,
      paras: [
        "On a rhythm: Webmaster and Search Console, a crawl after major releases, selective snippet checks on money queries. One-off “audits for the checkbox” with no fix backlog are useless.",
        "Technical cleanup is the base. Then keywords, content, and links do the real work. A green tool score is not the same as ranking for your keyword set.",
      ],
      lists: [
        {
          intro: "Cadence:",
          items: [
            "after deploy — a smoke crawl",
            "once a month — review errors in the panels",
            "a backlog prioritized by business impact",
            "don’t confuse cleanup with promising ranks “next week”",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dlina-title",
    "bitye-ssylki",
    "https-seo",
    "dubli-stranits",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for seo-oshibki — same structure as RU JSON / EN. */
export const seoOshibkiEs: BlogPost = {
  slug: "seo-oshibki",
  title: "Los errores SEO más habituales en un sitio",
  date: "2019-08-19",
  category: "SEO",
  cover: "/images/blog/seo-oshibki/cover-es.webp",
  excerpt:
    "Fallos típicos en titles y descriptions, headings, enlaces, markup y HTTPS — cómo encontrarlos y qué arreglar primero, sin la fantasía de «primera página en una semana».",
  lead: [
    "La mayoría de errores SEO en sitios reales no son una penalización misteriosa del algoritmo. Son técnica y snippets de todos los días: titles truncados, meta duplicada, enlaces rotos, H1s desordenados, mixed content tras pasar a HTTPS.",
    "Abajo, las zonas de riesgo que salen en auditorías y un orden práctico de arreglo. Limpiar errores es prep del sitio. Construir rankings del set de keywords se planifica en meses tras arrancar el trabajo sistemático — no la semana en que el checklist se pone en verde.",
  ],
  faq: [
    {
      q: "¿Por dónde debe empezar una auditoría de errores?",
      a: "Lo que bloquee crawl o clics primero: códigos de estado, indexación, HTTPS y mixed content, titles/H1s únicos, enlaces rotos. Markup y cosmética después.",
    },
    {
      q: "¿Siguen importando los meta keywords?",
      a: "Para Google y Yandex, casi sin influencia como antes. No gastes presupuesto en listas de keywords — invierte en title, description y la página en sí.",
    },
    {
      q: "¿Un title largo es un desastre?",
      a: "No es una penalización automática, pero el snippet se truncará. Pon el sentido al inicio. Las guías de longitud viven en el artículo aparte de longitud del title.",
    },
    {
      q: "¿Es malo si el title es igual que la description?",
      a: "Sí. Pierdes la diferencia «titular vs teaser» y debilitas el CTR. Dale a cada URL un par único.",
    },
    {
      q: "¿Open Graph y Schema son obligatorios?",
      a: "OG/Twitter ayudan al share en redes. Schema ayuda a rich results cuando el tipo de página encaja (organización, producto, FAQ). Que falten no «mata» el SEO — solo dejas oportunidades sobre la mesa.",
    },
    {
      q: "¿El H1 tiene que coincidir con el title tag?",
      a: "No palabra por palabra. Un H1 claro en la página; el title es para los resultados de búsqueda. Coincidir carácter a carácter en todo el sitio no es el objetivo.",
    },
    {
      q: "¿Qué herramientas de auditoría uso?",
      a: "Herramientas de Webmaster / Search Console, un crawler (Screaming Frog y pares), más checks manuales selectivos. Los módulos de pago de «auditoría de sitio» son opcionales.",
    },
    {
      q: "Arreglé los errores — ¿cuándo llegan los rankings?",
      a: "La prep y la limpieza suelen llevar semanas hasta alrededor de un mes. Mover el set de keywords hacia primera página se planifica en 2–6 meses tras arrancar el trabajo sistemático.",
    },
  ],
  sections: [
    {
      title: "Dónde los sitios fallan más a menudo",
      level: 2,
      paras: [
        "Los cortes de auditoría suelen sacar primero meta y markup, luego headings y enlaces, luego HTTPS y certificados. También importan códigos de estado, velocidad y contenido fino — en algunos proyectos solo se esconden hasta que cavas más.",
        "No persigas la puntuación verde de una herramienta. Prioriza lo que rompe indexación, clics o confianza: URLs rotas, mixed content, snippets vacíos o duplicados en páginas de dinero.",
      ],
      lists: [
        {
          intro: "Orden de revisión:",
          items: [
            "disponibilidad y códigos de estado",
            "HTTPS y mixed content",
            "titles, descriptions y H1s únicos",
            "enlaces rotos y cadenas de redirects",
            "markup y snippets sociales — según haga falta",
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
    {
      title: "Title, description y keywords obsoletos",
      level: 2,
      paras: [
        "Title y description dan forma al snippet y a lo clara que se lee el tema. Los principiantes meten cada keyword: el titular se trunca y el sentido muere. Un title demasiado corto también es flojo — la gente no sabe a dónde lleva el resultado.",
        "Los meta keywords clásicos casi no sirven en los grandes buscadores — no montes estrategia sobre ellos. Escribe la description como un teaser humano: beneficio y diferencia, no un pegado del title.",
      ],
      lists: [
        {
          intro: "Higiene de meta:",
          items: [
            "title y description únicos en URLs importantes",
            "sentido principal y frase clave cerca del inicio del title",
            "sin relleno vacío de «mejor / nº 1» por cosmética",
            "no copies el title de un competidor línea a línea",
            "no reutilices el title como description",
          ],
        },
      ],
      links: [
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
      ],
    },
    {
      title: "Enlaces: rotos, redirects, equity tirado",
      level: 2,
      paras: [
        "Los enlaces internos y externos rotos duelen al crawl y a la UX. Las cadenas largas de 301 diluyen señales y ralentizan el crawl. Anclas irrelevantes — o enlaces a secciones que desaparecieron tras un rediseño — son daño clásico post-migración.",
        "Revisa las plantillas: menú, footer, breadcrumbs, «productos relacionados». Un crawl masivo gana a clicar el sitio a mano.",
      ],
      lists: [
        {
          intro: "Mínimo de enlaces:",
          items: [
            "sin 404s en plantillas prioritarias",
            "cadenas de redirects acortadas",
            "301s desde URLs viejas tras renombres",
            "«donantes» externos que no apunten a mirrors o errores",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces rotos",
          href: "/es/blog/bitye-ssylki/",
        },
        {
          label: "Códigos de estado HTTP",
          href: "/es/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "Markup: Open Graph, Twitter Card, Schema",
      level: 2,
      paras: [
        "Sin Open Graph, las plataformas sociales a menudo cogen una imagen al azar y un trozo de texto — el CTR del share se resentirá. Schema.org / JSON-LD ayuda a rich results cuando el tipo de página encaja (no «markup por markup»).",
        "El error de verdad es markup roto o contradictorio en Search Console o validadores. Menos y correcto gana a más y en conflicto.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "OG en landings y artículos clave",
            "JSON-LD que coincida con el tipo real de página",
            "validar en herramientas de plataforma",
            "no publiques microdata en conflicto lado a lado",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
        {
          label: "Snippets y markup",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "H1 y jerarquía de headings",
      level: 2,
      paras: [
        "Una página sin H1 — o con varios compitiendo — enturbia la estructura. El H1 debe decir el tema del documento; luego H2/H3 lógicos sin saltar niveles por moda de diseño.",
        "La coincidencia exacta H1–title no es obligatoria. Ambos deben describir la página con honestidad y no pelear con URLs vecinas por el mismo intent.",
      ],
      lists: [
        {
          intro: "Revisa la plantilla:",
          items: [
            "un H1 principal",
            "sin saltos caóticos (H2 → H4 sin motivo)",
            "H1 no escondido en CSS como decor vacío",
            "sin H1s idénticos en docenas de fichas de producto sin diferencias",
          ],
        },
      ],
      notes: [
        {
          title: "Ligado a duplicados",
          text: "Titles/H1s idénticos en URLs distintas a menudo señalan duplicados o canibalización. Ver los materiales aparte sobre eso.",
        },
      ],
    },
    {
      title: "HTTPS y mixed content",
      level: 2,
      paras: [
        "Migraciones HTTPS a medias dejan scripts, imágenes o formularios en http:// — el navegador avisa, cae la confianza, se resentirá la UX. Tras migrar, revisa URLs absolutas en contenido y plantillas, paths relativos, el redirect http→https y un canonical que apunte a https.",
        "Fallos de certificado (caducado, nombre incorrecto, cadena rota) muestran aviso de seguridad y pegan al comportamiento. Monitoriza caducidad y corrección del SSL.",
      ],
      lists: [
        {
          intro: "Tras activar HTTPS:",
          items: [
            "301 de HTTP a HTTPS",
            "sin mixed content en plantillas clave",
            "canonical y sitemap en https",
            "menciones externas actualizadas donde puedas",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Cómo mantenerlo bajo control — sin esperar milagros",
      level: 2,
      paras: [
        "Con ritmo: Webmaster y Search Console, un crawl tras releases grandes, checks selectivos de snippets en queries de dinero. Las «auditorías por el checkbox» de una sola vez sin backlog de arreglos no sirven.",
        "La limpieza técnica es la base. Luego keywords, contenido y enlaces hacen el trabajo de verdad. Una puntuación verde de herramienta no es lo mismo que rankear por tu set de keywords.",
      ],
      lists: [
        {
          intro: "Cadencia:",
          items: [
            "tras deploy — un smoke crawl",
            "una vez al mes — revisar errores en los paneles",
            "un backlog priorizado por impacto de negocio",
            "no confundas limpieza con prometer ranks «la semana que viene»",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Screaming Frog",
          href: "/es/blog/screaming-frog/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dlina-title",
    "bitye-ssylki",
    "https-seo",
    "dubli-stranits",
    "samostoyatelnoe-seo",
  ],
};

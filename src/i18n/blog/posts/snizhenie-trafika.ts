import type { BlogPost } from "../../../data/blog";

/** EN overlay for snizhenie-trafika — same structure as RU JSON. */
export const snizhenieTrafikaEn: BlogPost = {
  slug: "snizhenie-trafika",
  title: "Why site traffic drops: how to diagnose it and what to do",
  date: "2021-06-15",
  category: "SEO",
  cover: "/images/blog/snizhenie-trafika/cover-en.webp",
  excerpt:
    "Tell a real organic drop from a broken analytics tag, then check seasonality, technical issues, algorithm updates, and penalties — without panic or “it’ll bounce back tomorrow” promises.",
  lead: [
    "A traffic drop is a signal, not a verdict. First separate an analytics glitch from a real decline. Then narrow the source — Yandex, Google, direct — and dig into the cause.",
    "Here’s a practical check order. Recovery time depends on what’s wrong: technical fixes land faster than recovering from a filter or lost demand.",
  ],
  faq: [
    {
      q: "Where do I start if analytics looks “all red”?",
      a: "Verify the tracking code, bot filters, and period comparison on a single channel. In parallel, check Webmaster / Search Console for crawl issues, exclusions, and security alerts.",
    },
    {
      q: "Is it seasonality or a penalty?",
      a: "Seasonality shows up in year-over-year demand tools (Wordstat and similar). Penalties and filters look like a sharp collapse across the keyword set plus messages or diagnostics in the panels. Don’t mix them up.",
    },
    {
      q: "What if competitors pumped spammy links?",
      a: "Review the link profile in webmaster tools, reject clear spam with the search engine’s tools when needed, and strengthen your own content and natural links.",
    },
    {
      q: "Will deleting half the site fix the drop?",
      a: "Radical cuts without a plan often make the drop worse. Find the cause first, then make targeted fixes.",
    },
    {
      q: "Could this relate to Google’s “suspicious traffic” notices?",
      a: "Sometimes — if quality is being cut or bots are inflating hits. See the separate article on suspicious traffic messages.",
    },
  ],
  sections: [
    {
      title: "First: real decline or broken analytics",
      level: 2,
      paras: [
        "A broken or doubled tag, new goals, an IP filter, or a domain change in the account can fake the picture. Match the code on the site to the account, then compare with Search Console or Yandex Webmaster.",
        "In analytics, split sources and compare with the previous period and the same period last year.",
      ],
      lists: [
        {
          intro: "Mini-check:",
          items: [
            "Metrica / GA code is still on the pages",
            "no stray filter in the reports",
            "which channels actually dropped",
            "whether the trend matches Webmaster / Search Console",
          ],
        },
      ],
    },
    {
      title: "Common causes of a drop",
      level: 2,
      paras: [
        "Seasonal demand, technical failures (hosting, mirrors, speed), algorithm updates, penalties for manipulation, lost rankings to competitors or stale content, and toxic link noise.",
        "Don’t blame a “search engine mood” until you’ve closed the technical and content checks.",
      ],
      lists: [
        {
          intro: "Work through the blocks:",
          items: [
            "site changes right before the drop",
            "demand tools — seasonal or not",
            "availability, 301s, robots.txt, speed",
            "update news plus panel diagnostics",
            "quality and uniqueness of key URLs",
            "sharp spikes in the link profile",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "What to do after you have a diagnosis",
      level: 2,
      paras: [
        "Fix technical issues immediately. Refresh content clusters that slipped. If you’re under a filter, remove the cause and wait for a recrawl — don’t promise “page one tomorrow.” Recovery after penalties or big content work is usually measured in months, not days.",
        "Don’t freeze the roadmap: new materials and extra channels reduce dependence on one traffic source.",
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Log hypothesis → fix → date → metric. That’s how you see what actually moved the needle.",
        },
      ],
      links: [
        {
          label: "Refreshing old content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
  ],
};

/** ES overlay for snizhenie-trafika — same structure as RU JSON / EN. */
export const snizhenieTrafikaEs: BlogPost = {
  slug: "snizhenie-trafika",
  title: "Por qué cae el tráfico del sitio: cómo diagnosticarlo y qué hacer",
  date: "2021-06-15",
  category: "SEO",
  cover: "/images/blog/snizhenie-trafika/cover.webp",
  excerpt:
    "Separa una caída orgánica real de un tag de analítica roto; luego revisa estacionalidad, issues técnicos, updates de algoritmo y penalizaciones — sin pánico ni promesas de «vuelve mañana».",
  lead: [
    "Una caída de tráfico es una señal, no un veredicto. Primero separa un fallo de analítica de un declive real. Luego estrecha la fuente — Yandex, Google, directo — y cava en la causa.",
    "Aquí va un orden práctico de chequeo. El tiempo de recuperación depende de qué esté mal: los arreglos técnicos aterrizan más rápido que recuperarse de un filtro o de demanda perdida.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si la analítica se ve «toda roja»?",
      a: "Verifica el código de tracking, filtros de bots y la comparación de periodos en un solo canal. En paralelo, revisa Webmaster / Search Console por issues de crawl, exclusiones y alertas de seguridad.",
    },
    {
      q: "¿Es estacionalidad o una penalización?",
      a: "La estacionalidad aparece en tools de demanda año a año (Wordstat y similares). Las penalizaciones y filtros se ven como un colapso brusco en el set de keywords más mensajes o diagnostics en los paneles. No los mezcles.",
    },
    {
      q: "¿Y si los competidores metieron enlaces spam?",
      a: "Revisa el perfil de enlaces en tools de webmaster, rechaza spam claro con las tools del buscador cuando haga falta y refuerza tu propio contenido y enlaces naturales.",
    },
    {
      q: "¿Borrar la mitad del sitio arregla la caída?",
      a: "Cortes radicales sin plan a menudo empeoran la caída. Encuentra la causa primero, luego haz arreglos dirigidos.",
    },
    {
      q: "¿Puede relacionarse con avisos de «tráfico sospechoso» de Google?",
      a: "A veces — si se corta calidad o los bots inflan hits. Ver el artículo aparte sobre mensajes de tráfico sospechoso.",
    },
  ],
  sections: [
    {
      title: "Primero: declive real o analítica rota",
      level: 2,
      paras: [
        "Un tag roto o duplicado, goals nuevos, un filtro de IP o un cambio de dominio en la cuenta pueden falsear la foto. Cruza el código del sitio con la cuenta, luego compara con Search Console o Yandex Webmaster.",
        "En analítica, parte fuentes y compara con el periodo anterior y el mismo periodo del año pasado.",
      ],
      lists: [
        {
          intro: "Mini-chequeo:",
          items: [
            "el código de Metrika / GA sigue en las páginas",
            "sin filtro raro en los informes",
            "qué canales cayeron de verdad",
            "si la tendencia encaja con Webmaster / Search Console",
          ],
        },
      ],
    },
    {
      title: "Causas habituales de una caída",
      level: 2,
      paras: [
        "Demanda estacional, fallos técnicos (hosting, espejos, velocidad), updates de algoritmo, penalizaciones por manipulación, rankings perdidos frente a competidores o contenido obsoleto, y ruido tóxico de enlaces.",
        "No culpes al «humor del buscador» hasta cerrar los chequeos técnicos y de contenido.",
      ],
      lists: [
        {
          intro: "Trabaja por bloques:",
          items: [
            "cambios del sitio justo antes de la caída",
            "tools de demanda — ¿estacional o no?",
            "disponibilidad, 301, robots.txt, velocidad",
            "noticias de update más diagnostics del panel",
            "calidad y unicidad de URLs clave",
            "picos bruscos en el perfil de enlaces",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Logs del servidor",
          href: "/es/blog/logi-servera/",
        },
        {
          label: "Tráfico sospechoso de Google",
          href: "/es/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Qué hacer cuando ya tienes diagnóstico",
      level: 2,
      paras: [
        "Arregla issues técnicos de inmediato. Refresca clusters de contenido que resbalaron. Si estás bajo un filtro, quita la causa y espera un recrawl — no prometas «primera página mañana». La recuperación tras penalizaciones o trabajo grande de contenido suele medirse en meses, no en días.",
        "No congeles el roadmap: materiales nuevos y canales extra reducen la dependencia de una sola fuente de tráfico.",
      ],
      notes: [
        {
          title: "Tip de práctica",
          text: "Anota hipótesis → arreglo → fecha → métrica. Así ves qué movió la aguja de verdad.",
        },
      ],
      links: [
        {
          label: "Actualizar contenido viejo",
          href: "/es/blog/obnovlenie-kontenta/",
        },
        {
          label: "HTTPS y SEO",
          href: "/es/blog/https-seo/",
        },
      ],
    },
  ],
};

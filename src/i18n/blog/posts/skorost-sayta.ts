import type { BlogPost } from "../../../data/blog";

/** EN overlay for skorost-sayta — same structure as RU JSON. */
export const skorostSaytaEn: BlogPost = {
  slug: "skorost-sayta",
  title: "How to check site speed: measurements, CWV, and tools",
  date: "2018-06-15",
  category: "SEO",
  cover: "/images/blog/skorost-sayta/cover-en.webp",
  excerpt:
    "How to measure page load: lab vs field data, Core Web Vitals, PageSpeed Insights, and what to do with the report — without a cult of “100 points” or a dusty 2018 tools top-10.",
  lead: [
    "A slow page loses people and search signals. Speed checks aren’t a race to a hundred in PageSpeed — they’re figuring out what blocks (server, images, JS) and on which URLs it hurts.",
    "Below: lab vs field, which metrics matter, a lean tool set, and how to read recommendations. We don’t reprint a ten-tool price list from 2018 — some aged out, some changed products. Speeding up WordPress is a separate article.",
  ],
  faq: [
    {
      q: "Do I need 100 in PageSpeed?",
      a: "No. What matters more is LCP / INP / CLS in the green zone on mobile for key URLs — and real UX.",
    },
    {
      q: "Are lab and field the same?",
      a: "No. Lab (Lighthouse) is a controlled run. Field (CrUX) is real-user data. Watch both.",
    },
    {
      q: "Is Webmaster enough?",
      a: "Helpful for availability and some diagnostics — it doesn’t replace PSI / CWV for how load feels.",
    },
    {
      q: "Does speed equal rankings?",
      a: "Indirectly, via UX and crawl. Core positions take planned months of work — not “ran PSI, hit page one.”",
    },
    {
      q: "Which URL should I start with?",
      a: "Home, top landings from ads or organic, product or service page, checkout.",
    },
  ],
  sections: [
    {
      title: "Why measure speed",
      level: 2,
      paras: [
        "Users rarely wait forever: bounces rise and conversion falls. For SEO, page-experience signals matter — and bots and people should get content without pain.",
        "Don’t treat the myth “top sites load in 0.38 s” from old posts as a KPI. Measure your templates on mobile networks and compare competitors on substance, not someone else’s magic number.",
      ],
      links: [
        {
          label: "Mobile-First Index",
          href: "/en/blog/mobile-first-indeks/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Lab and field: two layers of truth",
      level: 2,
      paras: [
        "Lab (PageSpeed Insights / Lighthouse, WebPageTest): reproducible conditions, waterfall, “what to remove” tips. Handy for regressions after a release.",
        "Field (Chrome UX Report, Search Console reports): how it really loads for your audience. Sometimes lab is green and field is red — different geography, devices, cache.",
      ],
      tables: [
        {
          caption: "What to treat as the base",
          headers: ["Layer", "When"],
          rows: [
            ["Lab", "Debugging, before/after fix comparison"],
            ["Field", "Real UX and SEO-signal assessment"],
            ["Both", "Releases and “we’re already fast” debates"],
          ],
        },
      ],
    },
    {
      title: "Which metrics to watch",
      level: 2,
      paras: [
        "Core Web Vitals: LCP (largest content), INP (responsiveness), CLS (layout stability). Nearby — TTFB as a server/backend signal.",
        "Don’t fix everything at once. First LCP on mobile for a key URL, then INP/CLS, then score cosmetics.",
      ],
      lists: [
        {
          intro: "Common culprits:",
          items: [
            "heavy hero without dimensions",
            "blocking JS/CSS",
            "slow TTFB / hosting",
            "third-party widgets and tags",
            "fonts without font-display",
          ],
        },
      ],
    },
    {
      title: "A lean tool set",
      level: 2,
      paras: [
        "PageSpeed Insights — quick lab start plus a field summary where available. WebPageTest — deep waterfall and region comparison. Google Search Console — page experience across the site.",
        "Also: DevTools Performance/Network locally, uptime monitoring (Pingdom and peers — as alerting, not as the only SEO meter). Extra “sitespeed” checkers as a second look, not as truth.",
      ],
      notes: [
        {
          title: "About that 2018 top-10",
          text: "Don’t copy YSlow, old GTMetrix/Pingdom plans, or a “PageSpeed extension” blindly. Refresh the measurement stack yearly.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Reading the report — then acting",
      level: 2,
      paras: [
        "Lock the URL, device (mobile), date, and a screenshot or export. List the top three recommendations with effort estimates. Ship → remeasure in a day (field catches up slower).",
        "High TTFB — hosting, cache, backend. LCP — images, SSR/critical CSS, load priority. CLS — media and ad-slot dimensions.",
      ],
      lists: [
        {
          intro: "Monthly mini-ritual:",
          items: [
            "PSI on 3–5 key URLs",
            "GSC: URLs with poor experience",
            "compare with last month",
            "1–2 fixes into the sprint",
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
      title: "What to remember",
      level: 2,
      paras: [
        "Speed is measured with perception and server metrics — not a pile of ten bookmarks. Lab for debugging, field for user truth.",
        "After measuring — find the bottleneck and fix it. Racing to 100 points without better UX isn’t the job.",
      ],
    },
  ],
  closing: [
    "Run key URLs in PageSpeed on mobile, check field in Search Console, and close one main brake (TTFB or LCP) — that turns a speed check into work, not a ritual of “one more tool from the list.”",
  ],
  related: [
    "uskorenie-wordpress",
    "mobile-first-indeks",
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "adaptivnyy-sayt",
    "ustarevshiy-sayt",
  ],
};

/** ES overlay for skorost-sayta — same structure as RU JSON / EN. */
export const skorostSaytaEs: BlogPost = {
  slug: "skorost-sayta",
  title: "Cómo comprobar la velocidad del sitio: mediciones, CWV y herramientas",
  date: "2018-06-15",
  category: "SEO",
  cover: "/images/blog/skorost-sayta/cover-es.webp",
  excerpt:
    "Cómo medir la carga de página: datos de laboratorio vs de campo, Core Web Vitals, PageSpeed Insights y qué hacer con el informe — sin culto a «100 puntos» ni un ranking polvoriento de herramientas de 2018.",
  lead: [
    "Una página lenta pierde gente y señales de búsqueda. Comprobar velocidad no es una carrera al cien en PageSpeed — es averiguar qué bloquea (servidor, imágenes, JS) y en qué URLs duele.",
    "Abajo: lab vs field, qué métricas importan, un set de herramientas magro y cómo leer recomendaciones. No reimprimimos una lista de precios de diez herramientas de 2018 — unas envejecieron, otras cambiaron de producto. Acelerar WordPress es un artículo aparte.",
  ],
  faq: [
    {
      q: "¿Hace falta 100 en PageSpeed?",
      a: "No. Importa más LCP / INP / CLS en zona verde en móvil para URLs clave — y la UX real.",
    },
    {
      q: "¿Lab y field son lo mismo?",
      a: "No. Lab (Lighthouse) es una corrida controlada. Field (CrUX) son datos de usuarios reales. Mira ambos.",
    },
    {
      q: "¿Basta con Webmaster?",
      a: "Útil para disponibilidad y algo de diagnóstico — no sustituye PSI / CWV para cómo se siente la carga.",
    },
    {
      q: "¿Velocidad equivale a rankings?",
      a: "De forma indirecta, vía UX y crawl. Las posiciones del núcleo llevan meses planificados de trabajo — no «corrí PSI y entré en primera página».",
    },
    {
      q: "¿Con qué URL empiezo?",
      a: "Home, landings principales de ads u orgánico, página de producto o servicio, checkout.",
    },
  ],
  sections: [
    {
      title: "Por qué medir la velocidad",
      level: 2,
      paras: [
        "Los usuarios rara vez esperan eternamente: suben los rebotes y cae la conversión. Para SEO importan señales de page-experience — y bots y personas deben obtener contenido sin dolor.",
        "No tomes el mito «los sitios líderes cargan en 0,38 s» de posts viejos como KPI. Mide tus plantillas en redes móviles y compara competidores por sustancia, no por el número mágico de otro.",
      ],
      links: [
        {
          label: "Mobile-First Index",
          href: "/blog/mobile-first-indeks/",
        },
        {
          label: "Sitio responsive",
          href: "/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Lab y field: dos capas de verdad",
      level: 2,
      paras: [
        "Lab (PageSpeed Insights / Lighthouse, WebPageTest): condiciones reproducibles, waterfall, tips de «qué quitar». Útil para regresiones tras un release.",
        "Field (Chrome UX Report, informes de Search Console): cómo carga de verdad para tu audiencia. A veces el lab es verde y el field rojo — geografía, dispositivos y caché distintos.",
      ],
      tables: [
        {
          caption: "Qué tratar como base",
          headers: ["Capa", "Cuándo"],
          rows: [
            ["Lab", "Debugging, comparación antes/después del fix"],
            ["Field", "UX real y valoración de señales SEO"],
            ["Ambas", "Releases y debates de «ya vamos rápido»"],
          ],
        },
      ],
    },
    {
      title: "Qué métricas mirar",
      level: 2,
      paras: [
        "Core Web Vitals: LCP (contenido más grande), INP (responsividad), CLS (estabilidad del layout). Cerca — TTFB como señal de servidor/backend.",
        "No arregles todo a la vez. Primero LCP en móvil en una URL clave, luego INP/CLS, luego cosmética de la nota.",
      ],
      lists: [
        {
          intro: "Culpables habituales:",
          items: [
            "hero pesado sin dimensiones",
            "JS/CSS bloqueantes",
            "TTFB / hosting lento",
            "widgets y tags de terceros",
            "fuentes sin font-display",
          ],
        },
      ],
    },
    {
      title: "Un set de herramientas magro",
      level: 2,
      paras: [
        "PageSpeed Insights — arranque rápido de lab más un resumen de field donde haya. WebPageTest — waterfall profundo y comparación por región. Google Search Console — page experience en todo el sitio.",
        "También: DevTools Performance/Network en local, monitoreo de uptime (Pingdom y pares — como alerta, no como único medidor SEO). Checkers extra de «sitespeed» como segunda mirada, no como verdad.",
      ],
      notes: [
        {
          title: "Sobre aquella lista de 2018",
          text: "No copies a ciegas YSlow, planes viejos de GTMetrix/Pingdom ni una «extensión PageSpeed». Refresca el stack de medición cada año.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Acelerar WordPress",
          href: "/es/blog/uskorenie-wordpress/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Leer el informe — luego actuar",
      level: 2,
      paras: [
        "Fija URL, dispositivo (móvil), fecha y un screenshot o export. Lista las tres recomendaciones principales con estimación de esfuerzo. Ship → vuelve a medir en un día (el field tarda más en ponerse al día).",
        "TTFB alto — hosting, caché, backend. LCP — imágenes, SSR/critical CSS, prioridad de carga. CLS — dimensiones de media y slots de ads.",
      ],
      lists: [
        {
          intro: "Mini-ritual mensual:",
          items: [
            "PSI en 3–5 URLs clave",
            "GSC: URLs con mala experiencia",
            "comparar con el mes pasado",
            "1–2 fixes al sprint",
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
      title: "Qué recordar",
      level: 2,
      paras: [
        "La velocidad se mide con métricas de percepción y de servidor — no con un montón de diez favoritos. Lab para debugging, field para la verdad del usuario.",
        "Tras medir — encuentra el cuello de botella y arréglalo. Correr a 100 puntos sin mejor UX no es el trabajo.",
      ],
    },
  ],
  closing: [
    "Corre URLs clave en PageSpeed en móvil, revisa field en Search Console y cierra un freno principal (TTFB o LCP) — eso convierte el chequeo de velocidad en trabajo, no en un ritual de «una herramienta más de la lista».",
  ],
  related: [
    "uskorenie-wordpress",
    "mobile-first-indeks",
    "tehnicheskiy-seo-audit",
    "google-search-console",
    "adaptivnyy-sayt",
    "ustarevshiy-sayt",
  ],
};

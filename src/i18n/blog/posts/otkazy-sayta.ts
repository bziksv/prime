import type { BlogPost } from "../../../data/blog";

/** EN overlay for otkazy-sayta — same structure as RU JSON. */
export const otkazySaytaEn: BlogPost = {
  slug: "otkazy-sayta",
  title: "Bounce on a site: why people leave and how to keep them",
  date: "2020-09-17",
  category: "SEO",
  cover: "/images/blog/otkazy-sayta/cover-en.webp",
  excerpt:
    "What bounce rate means, which numbers are normal for different site types, main leave reasons, and what to fix first — speed, navigation, content.",
  lead: [
    "A bounce is when a visit gave the site almost nothing: the person left quickly or viewed one page without a goal action (definition depends on the counter). A high rate isn’t a “penalty” by itself — a signal that the snippet or ad expectation didn’t match what they saw.",
    "Below: how to read bounce, typical leave reasons, and a practical fix order. GA4 and Metrica count differently — compare like with like.",
  ],
  faq: [
    {
      q: "What’s a normal bounce rate?",
      a: "Depends on type. A one-screen landing can show a “high bounce” with a successful lead. Portals and blogs have different baselines. Watch segments and goals, not one number.",
    },
    {
      q: "Does a high bounce rate always mean a bad site?",
      a: "No. An informational “found it and left” is normal. Bad is when commercial traffic leaves with no action.",
    },
    {
      q: "Will Google Analytics and Metrica bounce rates match?",
      a: "Rarely one-to-one: different session/engagement models. Trends matter more than the absolute.",
    },
    {
      q: "Where should you start lowering bounce?",
      a: "Highest-traffic landings first: speed, title/offer match, first screen, mobile.",
    },
    {
      q: "Do pop-ups help lower bounce?",
      a: "Often they increase leave. Keep one careful scenario — don’t block content immediately.",
    },
    {
      q: "Does bounce rate affect SEO directly?",
      a: "Engines look at behavior beyond one metric. Indirectly: if the page doesn’t answer the query, rankings and CTR suffer.",
    },
    {
      q: "Is registration required before viewing content?",
      a: "For most commercial sites — no. A barrier before value sharply raises exits.",
    },
    {
      q: "How do you spot bot traffic in bounce stats?",
      a: "Counter filters, anomalous sessions, log cross-checks. Raw bounce without cleanup lies.",
    },
  ],
  sections: [
    {
      title: "How to read bounce rate",
      level: 2,
      paras: [
        "Classic: share of single-page visits. Modern models often look at engagement: was there meaningful contact (time, event, conversion). For a landing, conversion matters more than a “low bounce”.",
        "Compare the same channels and page types: organic vs ads, article vs product card. Sitewide average is almost useless.",
      ],
      lists: [
        {
          intro: "Rough cues:",
          items: [
            "portals/services with browsing — lower",
            "narrow info answer — higher can be fine",
            "commerce — watch bounce + goal",
            "sharp spike — look for a release or traffic dump",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Speed, ads, and irritants",
      level: 2,
      paras: [
        "Slow load is a common leave-before-content cause. Heavy images, widgets, autoplay video/music, full-screen pop-ups in the first seconds kill trust.",
        "Ad “chaos”: more banners than meaning. Keep what pays off and doesn’t break reading.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "weight and LCP of landings",
            "no autoplay sound",
            "pop-ups don’t cover the offer immediately",
            "mobile without horizontal scroll",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Navigation and the first screen",
      level: 2,
      paras: [
        "A confusing menu, broken breadcrumbs, no clear CTA — people don’t know where to go. The first screen should confirm the query from the snippet: headline, offer, next path.",
        "“Missed” 404 pages and redirects past meaning also cause instant leave.",
      ],
      lists: [
        {
          intro: "On a landing check:",
          items: [
            "H1 = ad/title promise",
            "visible button/form",
            "menu links work",
            "contacts found in 1–2 clicks",
          ],
        },
      ],
      links: [
        {
          label: "Website navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Content and freshness",
      level: 2,
      paras: [
        "An unformatted wall of text, outdated prices, empty sections, placeholder copy — bounce is expected. Useless volume articles don’t retain and spoil search expectations.",
        "Add orientation: TOC, lists, facts, next-step recommendations (related products, adjacent services).",
      ],
      lists: [
        {
          intro: "Content hygiene:",
          items: [
            "dates and prices current",
            "paragraphs and subheads",
            "no forced registration before value",
            "internal links by meaning",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Sending traffic to a page that doesn’t match intent. Query fit first, then “retention”.",
        },
      ],
      links: [
        {
          label: "Filling a site",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Design and trust",
      level: 2,
      paras: [
        "Bland or chaotic design cuts trust as much as broken elements. You don’t need “beauty for trends” — readability, contrast, usable forms.",
        "Social proof, guarantees, clear policy — especially in commerce. Without popup overload.",
      ],
      lists: [
        {
          intro: "Trust minimum:",
          items: [
            "real contacts",
            "a clear form",
            "relevant reviews/cases",
            "HTTPS and a tidy UI",
          ],
        },
      ],
    },
    {
      title: "Work order",
      level: 2,
      paras: [
        "Export the highest-traffic URLs with the worst engagement. For each: cause hypothesis → fix → measure. Don’t change ten things at once.",
        "Tie to goals: if bounce fell but leads didn’t — you “retained” for nothing. KPI is the action, not bounce alone.",
      ],
      lists: [
        {
          intro: "2-week sprint:",
          items: [
            "5 key landings",
            "speed + first screen",
            "remove irritants",
            "refresh facts/prices",
            "compare segments before/after",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "razmer-stranitsy",
    "navigatsiya-sayta",
    "optimizatsiya-konversii",
    "google-analytics",
    "lending",
  ],
};

/** ES overlay for otkazy-sayta — same structure as RU JSON / EN. */
export const otkazySaytaEs: BlogPost = {
  slug: "otkazy-sayta",
  title: "Rebote en un sitio: por qué la gente se va y cómo retenerla",
  date: "2020-09-17",
  category: "SEO",
  cover: "/images/blog/otkazy-sayta/cover-es.webp",
  excerpt:
    "Qué significa el bounce rate, qué números son normales según el tipo de sitio, motivos principales de salida y qué arreglar primero — velocidad, navegación, contenido.",
  lead: [
    "Un bounce es cuando una visita casi no dio nada al sitio: la persona se fue rápido o vio una sola página sin una acción objetivo (la definición depende del contador). Una tasa alta no es una «penalización» por sí sola — es una señal de que la expectativa del snippet o del anuncio no cuadró con lo que vieron.",
    "Abajo: cómo leer el bounce, motivos típicos de salida y un orden práctico de arreglo. GA4 y Metrica cuentan distinto — compara lo comparable con lo comparable.",
  ],
  faq: [
    {
      q: "¿Qué bounce rate es normal?",
      a: "Depende del tipo. Un landing de una pantalla puede mostrar un «bounce alto» con un lead exitoso. Portales y blogs tienen baselines distintos. Mira segmentos y goals, no un solo número.",
    },
    {
      q: "¿Un bounce rate alto siempre significa un sitio malo?",
      a: "No. Una respuesta informativa «lo encontré y me fui» es normal. Malo es cuando el tráfico comercial se va sin acción.",
    },
    {
      q: "¿Coincidirán el bounce de Google Analytics y Metrica?",
      a: "Rara vez uno a uno: modelos distintos de sesión/engagement. Las tendencias pesan más que el absoluto.",
    },
    {
      q: "¿Por dónde empezar a bajar el bounce?",
      a: "Primero los landings con más tráfico: velocidad, match title/oferta, primera pantalla, móvil.",
    },
    {
      q: "¿Los pop-ups ayudan a bajar el bounce?",
      a: "A menudo aumentan la salida. Mantén un escenario cuidadoso — no bloquees el contenido al instante.",
    },
    {
      q: "¿El bounce rate afecta al SEO de forma directa?",
      a: "Los motores miran comportamiento más allá de una métrica. De forma indirecta: si la página no responde a la query, sufren rankings y CTR.",
    },
    {
      q: "¿Hace falta registrarse antes de ver el contenido?",
      a: "En la mayoría de sitios comerciales — no. Una barrera antes del valor dispara las salidas.",
    },
    {
      q: "¿Cómo detectar tráfico bot en las stats de bounce?",
      a: "Filtros del contador, sesiones anómalas, cruce con logs. El bounce crudo sin limpieza miente.",
    },
  ],
  sections: [
    {
      title: "Cómo leer el bounce rate",
      level: 2,
      paras: [
        "Clásico: cuota de visitas de una sola página. Los modelos modernos a menudo miran engagement: ¿hubo contacto con sentido (tiempo, evento, conversión)? En un landing, la conversión pesa más que un «bounce bajo».",
        "Compara los mismos canales y tipos de página: orgánico vs ads, artículo vs ficha de producto. La media de todo el sitio casi no sirve.",
      ],
      lists: [
        {
          intro: "Pistas aproximadas:",
          items: [
            "portales/servicios con browsing — más bajo",
            "respuesta info estrecha — más alto puede estar bien",
            "comercio — mira bounce + goal",
            "pico brusco — busca un release o un dump de tráfico",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Velocidad, ads e irritantes",
      level: 2,
      paras: [
        "La carga lenta es una causa habitual de salida antes del contenido. Imágenes pesadas, widgets, vídeo/música autoplay, pop-ups a pantalla completa en los primeros segundos matan la confianza.",
        "«Caos» de ads: más banners que sentido. Quédate con lo que renta y no rompe la lectura.",
      ],
      lists: [
        {
          intro: "Comprobaciones rápidas:",
          items: [
            "peso y LCP de landings",
            "sin sonido autoplay",
            "los pop-ups no tapan la oferta al instante",
            "móvil sin scroll horizontal",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Navegación y primera pantalla",
      level: 2,
      paras: [
        "Un menú confuso, breadcrumbs rotos, sin CTA claro — la gente no sabe a dónde ir. La primera pantalla debe confirmar la query del snippet: titular, oferta, siguiente camino.",
        "Páginas 404 «erradas» y redirects fuera de sentido también provocan salida al instante.",
      ],
      lists: [
        {
          intro: "En un landing comprueba:",
          items: [
            "H1 = promesa del anuncio/title",
            "botón/formulario visible",
            "los enlaces del menú funcionan",
            "contactos en 1–2 clics",
          ],
        },
      ],
      links: [
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Contenido y frescura",
      level: 2,
      paras: [
        "Un muro de texto sin formato, precios desfasados, secciones vacías, copy placeholder — el bounce es esperable. Artículos de volumen inútiles no retienen y estropean las expectativas de búsqueda.",
        "Añade orientación: TOC, listas, hechos, recomendaciones de siguiente paso (productos relacionados, servicios afines).",
      ],
      lists: [
        {
          intro: "Higiene de contenido:",
          items: [
            "fechas y precios al día",
            "párrafos y subtítulos",
            "sin registro forzoso antes del valor",
            "enlaces internos por sentido",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Mandar tráfico a una página que no cuadra con el intent. Primero el fit de la query, luego la «retención».",
        },
      ],
      links: [
        {
          label: "Rellenar un sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Diseño y confianza",
      level: 2,
      paras: [
        "Un diseño soso o caótico corta la confianza tanto como elementos rotos. No hace falta «belleza por tendencias» — legibilidad, contraste, formularios usables.",
        "Prueba social, garantías, política clara — sobre todo en comercio. Sin sobrecarga de popups.",
      ],
      lists: [
        {
          intro: "Mínimo de confianza:",
          items: [
            "contactos reales",
            "un formulario claro",
            "reviews/casos relevantes",
            "HTTPS y una UI ordenada",
          ],
        },
      ],
    },
    {
      title: "Orden de trabajo",
      level: 2,
      paras: [
        "Exporta las URLs con más tráfico y peor engagement. Para cada una: hipótesis de causa → arreglo → medir. No cambies diez cosas a la vez.",
        "Átalo a goals: si el bounce bajó pero los leads no — «retuviste» para nada. El KPI es la acción, no el bounce solo.",
      ],
      lists: [
        {
          intro: "Sprint de 2 semanas:",
          items: [
            "5 landings clave",
            "velocidad + primera pantalla",
            "quitar irritantes",
            "actualizar hechos/precios",
            "comparar segmentos before/after",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de la conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "razmer-stranitsy",
    "navigatsiya-sayta",
    "optimizatsiya-konversii",
    "google-analytics",
    "lending",
  ],
};

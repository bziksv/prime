import type { BlogPost } from "../../../data/blog";

/** EN overlay for turbo-stranitsy — same structure as RU JSON. */
export const turboStranitsyEn: BlogPost = {
  slug: "turbo-stranitsy",
  title: "Yandex Turbo pages: the recommendations feed and life after shutdown",
  date: "2018-08-21",
  category: "SEO",
  cover: "/images/blog/turbo-stranitsy/cover-en.webp",
  excerpt:
    "What Turbo pages and the auto recommendations feed were, why the tech was retired, and what to rely on for mobile UX and monetization now — your own responsive site.",
  lead: [
    "Yandex Turbo pages sped up mobile results via lightweight copies in search infrastructure. The auto recommendations feed suggested similar articles and could lift depth on media and blogs.",
    "By 2025 Turbo in search and related products had shut down: mobile networks and solid responsive sites made a separate “accelerator” less necessary. Below: what the auto feed did (for history and migrations) and where to put effort now.",
  ],
  faq: [
    {
      q: "Do Turbo pages still work?",
      a: "Not as a live search channel: Turbo in the results stopped, Webmaster/Direct sections were disabled. Rely on your own mobile site.",
    },
    {
      q: "What did the recommendations feed give?",
      a: "Similar materials after finishing a read without hand-picking RSS related. Publisher tests saw depth and time grow — with enough homogeneous Turbo URLs.",
    },
    {
      q: "Who benefited most from Turbo?",
      a: "Media, content portals, and informational blogs with an article stream. Commercial service landings — weaker as a main format.",
    },
    {
      q: "Should you delete old Turbo feeds?",
      a: "Usually no urgent manual cleanup: sections were turned off centrally. Check that traffic and ads are tied to the main site.",
    },
    {
      q: "What replaces Turbo for speed?",
      a: "Responsive design, Core Web Vitals / mobile speed, light templates, CDN if needed. A separate “search format” is no longer a strategy.",
    },
    {
      q: "What about AMP?",
      a: "Not required for most commercial sites. Own mobile UX first; AMP is a narrow case, not a default Turbo substitute.",
    },
    {
      q: "Will you lose traffic without Turbo?",
      a: "Yandex indicated shutdown should not break traffic distribution to sites if the mobile version is fine. Risk is bad mobile UX, not missing Turbo.",
    },
    {
      q: "What about display ads on Turbo?",
      a: "Move monetization to your site’s mobile pages (network formats on your URLs). Do not build new blocks on dead tech.",
    },
  ],
  sections: [
    {
      title: "What Turbo and auto recommendations were",
      level: 2,
      paras: [
        "Turbo — lightweight pages from an RSS/feed that Yandex served from its servers: fast load on weak mobile networks, less load on the publisher’s hosting.",
        "The automatic recommendations feed picked similar materials via neural topic modeling. It turned on in Webmaster under Turbo settings — without a manual “related” list in the feed.",
      ],
      lists: [
        {
          intro: "Claimed pros of the Turbo era:",
          items: [
            "fast first screen on a phone",
            "depth growth via “read more”",
            "ad blocks in the Yandex ecosystem",
            "customization within the format",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Status",
          text: "Figures like “×15 faster” and “+20% revenue” from old Yandex cases are historical context, not a current KPI. Plan from your responsive site.",
        },
      ],
    },
    {
      title: "How the auto feed worked",
      level: 2,
      paras: [
        "After finishing an article, relevant materials from the same site showed. First feed appearance could take up to a day; further recalculation often ran at night on new Turbo URLs.",
        "The feed struggled if accelerated pages were few or topics too mixed: models had nothing stable to cluster as “similar.” Mixing with manual related in the feed usually gave priority to the site’s RSS settings.",
      ],
      lists: [
        {
          intro: "When the auto feed didn’t take off:",
          items: [
            "few Turbo pages in the format index",
            "chaotic topics without clusters",
            "conflict with manual related blocks",
          ],
        },
      ],
    },
    {
      title: "Why the technology was retired",
      level: 2,
      paras: [
        "By the mid-2020s mobile networks and responsive site quality rose; a separate “accelerated snapshot” in the results became less needed. Yandex announced ending Turbo support: Turbo versions stopped showing in search; products (Webmaster, Direct) phased out builders and display.",
        "For SEO that means: do not hang strategy on someone else’s results format. Visibility and conversion sit fully on your URLs again.",
      ],
      lists: [
        {
          intro: "Practical takeaway:",
          items: [
            "do not connect “new Turbo”",
            "do not build a media plan on Turbo traffic",
            "check mobile templates and speed",
            "move related / recommendations onto the site",
          ],
        },
      ],
      links: [
        {
          label: "Mobile search and SEO",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "Where to move recommendations and depth",
      level: 2,
      paras: [
        "On your site: “read also” blocks, cluster internal linking, infinite scroll or related widgets by tags/embeddings — under your design and analytics.",
        "Measure depth and revenue on main URLs in Metrica: goals, scroll, finish reading, related clicks. More controllable than depending on a search format.",
      ],
      lists: [
        {
          intro: "Minimum for media / blog:",
          items: [
            "related after the article",
            "in-text internal links",
            "useful mobile TOC / nav",
            "ad formats on your own pages",
          ],
        },
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Mobile site instead of Turbo",
      level: 2,
      paras: [
        "Priority: one canonical responsive site, fast LCP on 4G/3G, readable fonts, touch targets, no heavy entry overlays.",
        "Check key templates in DevTools and on real phones; watch Webmaster / Search Console reports on mobile usability and speed. For most businesses that is enough without AMP.",
      ],
      lists: [
        {
          intro: "Checklist after dropping Turbo:",
          items: [
            "responsive on one URL",
            "PageSpeed / Lighthouse mobile on key URLs",
            "forms and a tappable phone",
            "monetization / CTA on your pages",
            "monitor mobile traffic 2–4 weeks",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "SEO timelines",
          text: "Better mobile UX helps users right away; growing core visibility is still planned over months (often 2–6), not “page one after turning old Turbo back on.”",
        },
      ],
    },
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
    "vnutrennyaya-perelinkovka",
    "yandeks-vebmaster",
    "seo-yandex-google",
  ],
};

/** ES overlay for turbo-stranitsy — same structure as RU JSON / EN. */
export const turboStranitsyEs: BlogPost = {
  slug: "turbo-stranitsy",
  title: "Páginas Turbo de Yandex: el feed de recomendaciones y la vida tras el apagado",
  date: "2018-08-21",
  category: "SEO",
  cover: "/images/blog/turbo-stranitsy/cover.webp",
  excerpt:
    "Qué eran las páginas Turbo y el feed automático de recomendaciones, por qué se retiró la tecnología y en qué apoyarte ahora para UX móvil y monetización — tu propio sitio responsive.",
  lead: [
    "Las páginas Turbo de Yandex aceleraban los resultados móviles con copias ligeras en la infraestructura de búsqueda. El feed automático de recomendaciones sugería artículos similares y podía subir la profundidad en medios y blogs.",
    "Hacia 2025 Turbo en búsqueda y productos relacionados se apagó: las redes móviles y los sitios responsive sólidos hicieron menos necesario un «acelerador» aparte. Abajo: qué hacía el feed automático (para historia y migraciones) y dónde poner el esfuerzo ahora.",
  ],
  faq: [
    {
      q: "¿Siguen funcionando las páginas Turbo?",
      a: "No como canal vivo de búsqueda: Turbo en los resultados se detuvo; se desactivaron secciones de Webmaster/Direct. Apóyate en tu propio sitio móvil.",
    },
    {
      q: "¿Qué daba el feed de recomendaciones?",
      a: "Materiales similares al terminar de leer sin armar a mano un related en el RSS. En tests de publishers crecieron profundidad y tiempo — con suficientes URLs Turbo homogéneas.",
    },
    {
      q: "¿Quién sacaba más partido de Turbo?",
      a: "Medios, portales de contenido y blogs informativos con flujo de artículos. Landings comerciales de servicios — más débil como formato principal.",
    },
    {
      q: "¿Hay que borrar los feeds Turbo viejos?",
      a: "Por lo general no hace falta una limpieza manual urgente: las secciones se apagaron de forma central. Comprueba que tráfico y anuncios estén atados al sitio principal.",
    },
    {
      q: "¿Qué sustituye a Turbo para la velocidad?",
      a: "Diseño responsive, Core Web Vitals / velocidad móvil, plantillas ligeras, CDN si hace falta. Un «formato de búsqueda» aparte ya no es estrategia.",
    },
    {
      q: "¿Y AMP?",
      a: "No es obligatorio para la mayoría de sitios comerciales. Primero tu UX móvil; AMP es un caso estrecho, no el sustituto por defecto de Turbo.",
    },
    {
      q: "¿Perderás tráfico sin Turbo?",
      a: "Yandex indicó que el apagado no debería romper el reparto de tráfico a los sitios si la versión móvil está bien. El riesgo es una mala UX móvil, no la ausencia de Turbo.",
    },
    {
      q: "¿Y los display ads en Turbo?",
      a: "Mueve la monetización a las páginas móviles de tu sitio (formatos de red en tus URLs). No armes bloques nuevos sobre tecnología muerta.",
    },
  ],
  sections: [
    {
      title: "Qué eran Turbo y las recomendaciones automáticas",
      level: 2,
      paras: [
        "Turbo — páginas ligeras desde un RSS/feed que Yandex servía desde sus servidores: carga rápida en redes móviles débiles, menos carga en el hosting del publisher.",
        "El feed automático de recomendaciones elegía materiales similares vía modelado neural de temas. Se activaba en Webmaster bajo ajustes de Turbo — sin una lista manual de «related» en el feed.",
      ],
      lists: [
        {
          intro: "Pros que se reivindicaban en la era Turbo:",
          items: [
            "primera pantalla rápida en el teléfono",
            "crecimiento de profundidad vía «leer más»",
            "bloques de anuncios en el ecosistema Yandex",
            "personalización dentro del formato",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Estado",
          text: "Cifras como «×15 más rápido» y «+20% de ingresos» de casos viejos de Yandex son contexto histórico, no un KPI actual. Planifica desde tu sitio responsive.",
        },
      ],
    },
    {
      title: "Cómo funcionaba el feed automático",
      level: 2,
      paras: [
        "Tras terminar un artículo, aparecían materiales relevantes del mismo sitio. La primera aparición del feed podía tardar hasta un día; el recálculo posterior a menudo corría de noche sobre nuevas URLs Turbo.",
        "El feed flojeaba si había pocas páginas aceleradas o temas demasiado mezclados: los modelos no tenían nada estable que agrupar como «similar». Mezclar con related manual en el feed solía dar prioridad a los ajustes RSS del sitio.",
      ],
      lists: [
        {
          intro: "Cuando el feed automático no despegaba:",
          items: [
            "pocas páginas Turbo en el índice del formato",
            "temas caóticos sin clusters",
            "conflicto con bloques related manuales",
          ],
        },
      ],
    },
    {
      title: "Por qué se retiró la tecnología",
      level: 2,
      paras: [
        "A mediados de los 2020 subieron las redes móviles y la calidad de los sitios responsive; una «snapshot acelerada» aparte en los resultados dejó de hacer falta. Yandex anunció el fin del soporte Turbo: las versiones Turbo dejaron de mostrarse en búsqueda; los productos (Webmaster, Direct) fueron retirando builders y display.",
        "Para SEO eso significa: no cuelgues la estrategia de un formato ajeno de resultados. Visibilidad y conversión vuelven a sentarse del todo en tus URLs.",
      ],
      lists: [
        {
          intro: "Conclusión práctica:",
          items: [
            "no conectes un «Turbo nuevo»",
            "no armes un media plan sobre tráfico Turbo",
            "revisa plantillas móviles y velocidad",
            "mueve related / recomendaciones al sitio",
          ],
        },
      ],
      links: [
        {
          label: "Búsqueda móvil y SEO",
          href: "/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "Dónde mover recomendaciones y profundidad",
      level: 2,
      paras: [
        "En tu sitio: bloques «lee también», interlinking por cluster, infinite scroll o widgets related por tags/embeddings — bajo tu diseño y analítica.",
        "Mide profundidad e ingresos en las URLs principales en Metrica: goals, scroll, lectura completa, clics a related. Más controlable que depender de un formato de búsqueda.",
      ],
      lists: [
        {
          intro: "Mínimo para media / blog:",
          items: [
            "related tras el artículo",
            "enlaces internos en el texto",
            "TOC / nav móvil útil",
            "formatos de anuncios en tus propias páginas",
          ],
        },
      ],
      links: [
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Sitio móvil en lugar de Turbo",
      level: 2,
      paras: [
        "Prioridad: un sitio responsive canónico, LCP rápido en 4G/3G, fuentes legibles, targets táctiles, sin overlays pesados a la entrada.",
        "Revisa plantillas clave en DevTools y en teléfonos reales; mira informes de Webmaster / Search Console sobre usabilidad móvil y velocidad. Para la mayoría de negocios basta sin AMP.",
      ],
      lists: [
        {
          intro: "Checklist tras dejar Turbo:",
          items: [
            "responsive en una sola URL",
            "PageSpeed / Lighthouse móvil en URLs clave",
            "formularios y un teléfono tocable",
            "monetización / CTA en tus páginas",
            "monitorear tráfico móvil 2–4 semanas",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos SEO",
          text: "Una mejor UX móvil ayuda a los usuarios al momento; crecer la visibilidad del núcleo sigue planificándose a lo largo de meses (a menudo 2–6), no «primera página tras reactivar el Turbo viejo».",
        },
      ],
    },
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "razmer-stranitsy",
    "vnutrennyaya-perelinkovka",
    "yandeks-vebmaster",
    "seo-yandex-google",
  ],
};

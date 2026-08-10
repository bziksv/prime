import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobilnyy-poisk — same structure as RU JSON. */
export const mobilnyyPoiskEn: BlogPost = {
  slug: "mobilnyy-poisk",
  title: "Mobile search in SEO: SERP, responsive, and speed",
  date: "2018-08-14",
  category: "SEO",
  cover: "/images/blog/mobilnyy-poisk/cover-en.webp",
  excerpt:
    "How the mobile SERP differs from desktop, why check ranks and UX on a phone, responsive vs m-site, and what to do with speed after the Turbo/AMP hype faded.",
  lead: [
    "A large share of search traffic comes from smartphones. Mobile-first indexing and separate blocks in the mobile SERP make “desktop-only checks” a blind spot: ranks, snippets, and phone usability can diverge from desktop.",
    "Below: how the SERPs differ, how to check and adapt the site, when responsive is enough and when speed needs focus, and how not to build strategy on outdated accelerators like Turbo.",
  ],
  faq: [
    {
      q: "Are mobile and desktop SERPs the same?",
      a: "Not always. Different devices, behavior, and blocks (including quick answers, maps). Ranks for one query can differ.",
    },
    {
      q: "Is Mobile-First Index mandatory?",
      a: "For Google the mobile version has long been the indexing base. In Yandex mobility is in the formula too. Broken smartphone UX = risk.",
    },
    {
      q: "Responsive or a separate m-site?",
      a: "Default: responsive on one URL. A separate m. is legacy with duplicate and drift risks.",
    },
    {
      q: "Do I need Turbo pages?",
      a: "No: the format is off in search. Invest in speed and responsive on your own site.",
    },
    {
      q: "Does every site need AMP?",
      a: "No. Correct mobile and Core Web Vitals first; AMP only for narrow cases.",
    },
    {
      q: "How often should I pull mobile rankings?",
      a: "On the priority core — regularly (weekly / after updates). Watch cluster dynamics, not one phrase.",
    },
    {
      q: "Is a Mobile-Friendly test enough?",
      a: "That’s the base. Add speed, real phones, forms, and key templates in mobile analytics.",
    },
    {
      q: "When should I expect growth from mobile fixes?",
      a: "UX and conversion can improve fast. Competitive-core rankings are planned for months of work — not page one next week. Share of the core typically builds over two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why you can’t ignore mobile search",
      level: 2,
      paras: [
        "Mobile share in organic for most niches dominates or is near half+. Algorithms like the historical Mobilegeddon and Yandex’s “Vladivostok” formula locked in: smartphone usability is a ranking and traffic-survival factor.",
        "Google has long relied on a mobile-first index: for the bot the mobile document is the reference. If it’s pretty only on a monitor, you lose both UX and visibility.",
      ],
      lists: [
        {
          intro: "Risks of desktop-only:",
          items: [
            "different ranks and snippets",
            "high bounce on smartphone",
            "lost local and “on the go” queries",
            "weak conversion from the phone",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "How the mobile SERP differs",
      level: 2,
      paras: [
        "The mobile SERP is built on smartphone and tablet stats: different clicks, different blocks (maps, quick answers, local packs). Don’t copy the desktop top one-to-one into a “we’re ranking” report.",
        "Monitor ranks in the mobile slice of Yandex and Google on the commercial core. Otherwise you optimize a pretty PC picture while leads come from the phone.",
      ],
      lists: [
        {
          intro: "Watch separately:",
          items: [
            "mobile vs desktop ranks",
            "snippet CTR on smartphone",
            "local and “near me” queries",
            "featured/quick answers on info clusters",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to adapt the site for smartphones",
      level: 2,
      paras: [
        "Start with analytics: mobile share, devices, top landings by visits and goals. Check mobile-friendly and speed (PageSpeed/Lighthouse in mobile mode).",
        "In DevTools emulate key models, but also check two or three real phones. Remove horizontal scroll, tiny type, heavy scripts, aggressive popups, and outdated Flash-like junk.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "mobile slice in Metrica/GA",
            "audit of main templates",
            "HTTPS and a proper viewport",
            "Search Console / Webmaster — mobile errors",
            "regular mobile rank pulls on the core",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Squeezing desktop CSS without changing content and form priority. On a phone the first screen must match the job, with large touch targets.",
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Responsive or a separate mobile version",
      level: 2,
      paras: [
        "Responsive: one URL, layout by screen width. Easier to maintain, fewer duplicates, the usual path for CMS.",
        "Separate m-site: own template/subdomain, sometimes more flexible for UX, but costlier to support and riskier for SEO (redirects, content drift). New projects usually pick responsive.",
      ],
      lists: [
        {
          intro: "Why responsive more often:",
          items: [
            "one canonical URL",
            "less content drift",
            "faster to ship on an existing CMS",
            "simpler analytics and links",
          ],
        },
      ],
      links: [
        {
          label: "Site layout",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Speed: after Turbo and AMP hype",
      level: 2,
      paras: [
        "Older advice often pushed AMP and Yandex Turbo pages. Turbo is off in search; AMP isn’t required for most commercial sites. The base is fast pages of your own.",
        "Cut CSS/JS weight, optimize images, caching, fonts. Large media with extreme traffic sometimes need separate light templates — that’s site engineering, not “turn Turbo on.”",
      ],
      lists: [
        {
          intro: "Speed focus:",
          items: [
            "LCP/INP on mobile",
            "hero and above-the-fold weight",
            "defer what’s extra",
            "CDN for geography/peaks",
          ],
        },
      ],
      links: [
        {
          label: "Turbo pages (history and takeaway)",
          href: "/en/blog/turbo-stranitsy/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "How to fold mobile into the SEO process",
      level: 2,
      paras: [
        "Keep mobile ranks and mobile conversion in the monthly loop alongside tech and content. Check template edits on a phone before shipping for everyone.",
        "Design new landings mobile-first from the start: offer, tappable phone, short form. Otherwise you later fix what already earned bad behavioral signals.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "weekly: mobile errors in accounts",
            "per release: smoke key URLs on a phone",
            "monthly: mobile ranks on the core + CR",
            "quarterly: speed of top landings",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Mobile-base prep — weeks. Visibility buildup on the core is planned for two to six months. Mobile is an entry condition, not a ranking shortcut.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "turbo-stranitsy",
    "razmer-stranitsy",
    "snippet",
    "seo-yandex-google",
    "otkazy-sayta",
  ],
};

/** ES overlay for mobilnyy-poisk — same structure as RU JSON / EN. */
export const mobilnyyPoiskEs: BlogPost = {
  slug: "mobilnyy-poisk",
  title: "Búsqueda móvil en SEO: SERP, responsive y velocidad",
  date: "2018-08-14",
  category: "SEO",
  cover: "/images/blog/mobilnyy-poisk/cover-es.webp",
  excerpt:
    "Cómo difiere la SERP móvil de la desktop, por qué revisar rankings y UX en el teléfono, responsive vs m-site, y qué hacer con la velocidad tras el hype de Turbo/AMP.",
  lead: [
    "Una parte grande del tráfico de búsqueda llega desde smartphones. El mobile-first indexing y los bloques propios de la SERP móvil convierten las «checks solo desktop» en un punto ciego: rankings, snippets y usabilidad en el teléfono pueden divergir del desktop.",
    "Abajo: cómo difieren las SERP, cómo revisar y adaptar el sitio, cuándo basta responsive y cuándo hay que centrarse en velocidad, y cómo no armar estrategia sobre aceleradores obsoletos como Turbo.",
  ],
  faq: [
    {
      q: "¿Las SERP móvil y desktop son iguales?",
      a: "No siempre. Distintos dispositivos, comportamiento y bloques (incluidas respuestas rápidas, mapas). Los rankings de una query pueden diferir.",
    },
    {
      q: "¿El Mobile-First Index es obligatorio?",
      a: "Para Google la versión móvil lleva tiempo siendo la base de indexación. En Yandex la movilidad también entra en la fórmula. UX rota en smartphone = riesgo.",
    },
    {
      q: "¿Responsive o un m-site aparte?",
      a: "Por defecto: responsive en una URL. Un m. aparte es legado con riesgos de duplicados y drift.",
    },
    {
      q: "¿Necesito páginas Turbo?",
      a: "No: el formato está fuera de la búsqueda. Invierte en velocidad y responsive en tu propio sitio.",
    },
    {
      q: "¿Todo sitio necesita AMP?",
      a: "No. Primero móvil correcto y Core Web Vitals; AMP solo en casos estrechos.",
    },
    {
      q: "¿Con qué frecuencia revisar rankings móviles?",
      a: "En el núcleo prioritario — con regularidad (semanal / tras updates). Mira dinámica de clusters, no una sola frase.",
    },
    {
      q: "¿Basta un test Mobile-Friendly?",
      a: "Esa es la base. Suma velocidad, teléfonos reales, formularios y plantillas clave en analytics móvil.",
    },
    {
      q: "¿Cuándo esperar crecimiento por fixes móviles?",
      a: "UX y conversión pueden mejorar rápido. Los rankings del núcleo competitivo se planifican a meses de trabajo — no primera página la semana que viene. La cuota del núcleo suele construirse en dos a seis meses tras el arranque.",
    },
  ],
  sections: [
    {
      title: "Por qué no puedes ignorar la búsqueda móvil",
      level: 2,
      paras: [
        "La cuota móvil en orgánico para la mayoría de nichos domina o ronda la mitad+. Algoritmos como el histórico Mobilegeddon y la fórmula «Vladivostok» de Yandex fijaron: la usabilidad en smartphone es factor de ranking y de supervivencia del tráfico.",
        "Google lleva tiempo apoyándose en un índice mobile-first: para el bot el documento móvil es la referencia. Si solo queda bonito en el monitor, pierdes UX y visibilidad.",
      ],
      lists: [
        {
          intro: "Riesgos de solo-desktop:",
          items: [
            "rankings y snippets distintos",
            "bounce alto en smartphone",
            "queries locales y «en movimiento» perdidas",
            "conversión débil desde el teléfono",
          ],
        },
      ],
      links: [
        {
          label: "SEO para Yandex y Google",
          href: "/es/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Cómo difiere la SERP móvil",
      level: 2,
      paras: [
        "La SERP móvil se construye con estadísticas de smartphone y tablet: clics distintos, bloques distintos (mapas, respuestas rápidas, packs locales). No copies las posiciones desktop uno a uno a un reporte de «estamos rankeando».",
        "Monitoriza rankings en el slice móvil de Yandex y Google sobre el núcleo comercial. Si no, optimizas una foto bonita de PC mientras los leads llegan del teléfono.",
      ],
      lists: [
        {
          intro: "Mira por separado:",
          items: [
            "rankings móvil vs desktop",
            "CTR del snippet en smartphone",
            "queries locales y «cerca de mí»",
            "featured/respuestas rápidas en clusters info",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Cómo adaptar el sitio a smartphones",
      level: 2,
      paras: [
        "Empieza por analytics: cuota móvil, dispositivos, landings principales por visitas y objetivos. Revisa mobile-friendly y velocidad (PageSpeed/Lighthouse en modo móvil).",
        "En DevTools emula modelos clave, pero también revisa dos o tres teléfonos reales. Quita scroll horizontal, tipografía diminuta, scripts pesados, popups agresivos y basura tipo Flash obsoleta.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "slice móvil en Métrica/GA",
            "auditoría de plantillas principales",
            "HTTPS y un viewport correcto",
            "Search Console / Webmaster — errores móviles",
            "revisiones regulares de rankings móviles en el núcleo",
          ],
        },
      ],
      notes: [
        {
          title: "Error común",
          kind: "warning",
          text: "Apretar el CSS desktop sin cambiar contenido ni prioridad del formulario. En el teléfono la primera pantalla debe encajar con el trabajo, con targets táctiles grandes.",
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Responsive o una versión móvil aparte",
      level: 2,
      paras: [
        "Responsive: una URL, layout por ancho de pantalla. Más fácil de mantener, menos duplicados, el camino habitual en CMS.",
        "M-site aparte: plantilla/subdominio propio, a veces más flexible para UX, pero más caro de soportar y más arriesgado para SEO (redirects, drift de contenido). Los proyectos nuevos suelen elegir responsive.",
      ],
      lists: [
        {
          intro: "Por qué responsive más a menudo:",
          items: [
            "una URL canónica",
            "menos drift de contenido",
            "más rápido de desplegar en un CMS existente",
            "analytics y enlaces más simples",
          ],
        },
      ],
      links: [
        {
          label: "Maquetación del sitio",
          href: "/es/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Velocidad: tras el hype de Turbo y AMP",
      level: 2,
      paras: [
        "Consejos viejos a menudo empujaban AMP y páginas Turbo de Yandex. Turbo está fuera de la búsqueda; AMP no es obligatorio para la mayoría de sitios comerciales. La base son páginas rápidas propias.",
        "Corta peso de CSS/JS, optimiza imágenes, caché, fuentes. Media grande con tráfico extremo a veces necesita plantillas ligeras aparte — eso es ingeniería del sitio, no «activar Turbo».",
      ],
      lists: [
        {
          intro: "Foco de velocidad:",
          items: [
            "LCP/INP en móvil",
            "peso del hero y above-the-fold",
            "diferir lo extra",
            "CDN para geografía/picos",
          ],
        },
      ],
      links: [
        {
          label: "Páginas Turbo (historia y takeaway)",
          href: "/es/blog/turbo-stranitsy/",
        },
        {
          label: "Tamaño de página",
          href: "/es/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Cómo meter lo móvil en el proceso SEO",
      level: 2,
      paras: [
        "Mantén rankings móviles y conversión móvil en el loop mensual junto a técnica y contenido. Revisa ediciones de plantilla en un teléfono antes de publicar para todos.",
        "Diseña landings nuevas mobile-first desde el inicio: oferta, teléfono tappable, formulario corto. Si no, luego arreglas lo que ya ganó malas señales de comportamiento.",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "semanal: errores móviles en cuentas",
            "por release: smoke de URLs clave en un teléfono",
            "mensual: rankings móviles del núcleo + CR",
            "trimestral: velocidad de las landings principales",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Prep de la base móvil — semanas. La construcción de visibilidad del núcleo se planifica a dos a seis meses. Móvil es condición de entrada, no un atajo de ranking.",
        },
      ],
      links: [
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Tasa de rebote del sitio",
          href: "/es/blog/otkazy-sayta/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "turbo-stranitsy",
    "razmer-stranitsy",
    "snippet",
    "seo-yandex-google",
    "otkazy-sayta",
  ],
};

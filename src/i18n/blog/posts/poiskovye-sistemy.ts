import type { BlogPost } from "../../../data/blog";

/** EN overlay for poiskovye-sistemy — same structure as RU JSON. */
export const poiskovyeSistemyEn: BlogPost = {
  slug: "poiskovye-sistemy",
  title: "Search engines: not only Google and Yandex",
  date: "2020-06-26",
  category: "SEO",
  cover: "/images/blog/poiskovye-sistemy/cover-en.webp",
  excerpt:
    "Which search engines exist beyond Google and Yandex: Bing, DuckDuckGo, historic Rambler and Mail, Baidu. Why that matters for SEO in Russia-facing markets — without outdated market-share figures.",
  lead: [
    "Google and Yandex cover most search in Russia, but the search world is wider: Bing, DuckDuckGo, vertical and regional engines, historic brands like Rambler. Strategy should follow your analytics and GEO — not the myth that “only two exist.”",
    "Below: a short map of players and what marketers should take from it. We don’t treat 2020 market shares or the fate of “Sputnik”/Nigma as facts for today — check fresh measurements.",
  ],
  faq: [
    {
      q: "Do I need Bing SEO in Russia?",
      a: "Sometimes: share is small, but checking Search Console / Bing Webmaster and snippets is free. Priority is where your audience sits in Metrica or GA.",
    },
    {
      q: "Does DuckDuckGo matter for business?",
      a: "For mass e-commerce in Russia — rarely. It matters for privacy-minded audiences and as an alternate entry point.",
    },
    {
      q: "Are Rambler and Mail still search engines?",
      a: "More portals/ecosystems with a search box. As a standalone SEO channel for most niches they’re secondary.",
    },
    {
      q: "Do I need Baidu?",
      a: "No — not unless the goal is China or a Chinese-speaking audience. There’s a separate piece on Baidu.",
    },
    {
      q: "Is SEO the same for every search engine?",
      a: "The base is shared: useful pages, tech, clear intent. Accents and panels differ — see the Yandex vs Google comparison.",
    },
    {
      q: "Can site directories replace search?",
      a: "Historically directories came before full-text search. Today niche directories aren’t an SEO substitute.",
    },
    {
      q: "Should I chase exotic engines?",
      a: "First cover Yandex/Google and conversions. Exotic engines only if data shows traffic or a new market.",
    },
    {
      q: "Where do I see my search-engine share?",
      a: "In Metrica/GA: sources → search engines. Not someone else’s “2019 chart.”",
    },
  ],
  sections: [
    {
      title: "Why search engines appeared",
      level: 2,
      paras: [
        "When sites were few, bookmarks and directories were enough. Web growth made hand-built lists useless — systems appeared that crawl pages, index them, and rank an answer to a query.",
        "Early engines returned a raw URL list; modern ones weigh relevance, quality, locality, behavior, and hundreds of other signals.",
      ],
      links: [
        {
          label: "Site directories today",
          href: "/en/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Leaders for Russia: Yandex and Google",
      level: 2,
      paras: [
        "In commercial SEO for Russia you usually watch both. Share between them drifts by niche, device, and region — your analytics is the only guide, not someone else’s “50/50 from an article.”",
        "Differences in accents (locality, commercial factors, webmaster panels) live in a separate comparison.",
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
        {
          label: "Runet",
          href: "/en/blog/runet/",
        },
      ],
    },
    {
      title: "Other engines people ask about",
      level: 2,
      paras: [
        "Bing (Microsoft) — a notable player in some countries and the Windows ecosystem; in Russia share is usually modest, but Webmaster Tools is free.",
        "DuckDuckGo — privacy-first; results often draw on partner indexes. Useful for brands as a signal that there’s audience outside YA/Google.",
        "Mail.ru / Rambler — strong as media portals; search for SEO is often secondary. Historic Nigma, “Sputnik,” and 2010s roundup peers shouldn’t enter a media plan without checking they’re still a live channel.",
        "Classic Yahoo is barely relevant for Russia-facing SEO; Baidu is a separate market.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Don’t copy 2020 shares",
          text: "Figures like “Yandex +10% vs Google” and Rambler traffic from old texts go stale. Use fresh research or your own counter.",
        },
      ],
      links: [
        {
          label: "Baidu",
          href: "/en/blog/baidu/",
        },
      ],
    },
    {
      title: "Practical takeaway for a site",
      level: 2,
      paras: [
        "Cover tech, content, and the core for Yandex and Google. Add Bing Webmaster if you see visits or plan an EN/global footprint.",
        "Don’t spread budget across “promotion in ten dead search engines.”",
        "International markets need a separate map: language, hosting, payments, the local search leader.",
      ],
      lists: [
        {
          intro: "Mini checklist:",
          items: [
            "YA/Google share in Metrica",
            "Webmaster + Search Console",
            "Bing Webmaster when needed",
            "exotic engines — only with data or a new GEO",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "There are many search engines; for Russia the core is Yandex and Google.",
        "Bing and privacy search are optional, data-driven.",
        "Historic brands are useful context, not a required channel.",
      ],
    },
  ],
  closing: [
    "Open the search-engines report in Metrica for a quarter — you’ll see faster whether anything beyond Yandex and Google is worth thinking about on your site.",
  ],
  related: [
    "seo-yandex-google",
    "baidu",
    "runet",
    "wordstat",
    "katalogi-saytov",
    "poiskovye-podskazki",
  ],
};

/** ES overlay for poiskovye-sistemy — same structure as RU JSON / EN. */
export const poiskovyeSistemyEs: BlogPost = {
  slug: "poiskovye-sistemy",
  title: "Buscadores: no solo Google y Yandex",
  date: "2020-06-26",
  category: "SEO",
  cover: "/images/blog/poiskovye-sistemy/cover.webp",
  excerpt:
    "Qué buscadores existen más allá de Google y Yandex: Bing, DuckDuckGo, históricos Rambler y Mail, Baidu. Por qué importa para SEO en mercados orientados a Rusia — sin cifras de cuota de mercado obsoletas.",
  lead: [
    "Google y Yandex cubren la mayor parte de la búsqueda en Rusia, pero el mundo de la búsqueda es más amplio: Bing, DuckDuckGo, motores verticales y regionales, marcas históricas como Rambler. La estrategia debe seguir tu analítica y GEO — no el mito de que «solo existen dos».",
    "Abajo: un mapa corto de jugadores y qué deben sacar los marketers. No tratamos las cuotas de 2020 ni el destino de «Sputnik»/Nigma como hechos de hoy — revisa mediciones frescas.",
  ],
  faq: [
    {
      q: "¿Hace falta SEO de Bing en Rusia?",
      a: "A veces: la cuota es pequeña, pero revisar Search Console / Bing Webmaster y snippets es gratis. La prioridad es dónde se sienta tu audiencia en Metrica o GA.",
    },
    {
      q: "¿Importa DuckDuckGo para negocio?",
      a: "Para e-commerce masivo en Rusia — rara vez. Importa para audiencias privacy-minded y como punto de entrada alternativo.",
    },
    {
      q: "¿Rambler y Mail siguen siendo buscadores?",
      a: "Más portales/ecosistemas con caja de búsqueda. Como canal SEO autónomo para la mayoría de nichos son secundarios.",
    },
    {
      q: "¿Hace falta Baidu?",
      a: "No — salvo que el objetivo sea China o una audiencia de habla china. Hay una pieza aparte sobre Baidu.",
    },
    {
      q: "¿El SEO es igual para cada buscador?",
      a: "La base se comparte: páginas útiles, técnica, intención clara. Los acentos y paneles difieren — ver la comparación Yandex vs Google.",
    },
    {
      q: "¿Los directorios de sitios sustituyen a la búsqueda?",
      a: "Históricamente los directorios llegaron antes de la búsqueda full-text. Hoy los directorios de nicho no son un sustituto del SEO.",
    },
    {
      q: "¿Debo perseguir motores exóticos?",
      a: "Primero cubre Yandex/Google y conversiones. Motores exóticos solo si los datos muestran tráfico o un mercado nuevo.",
    },
    {
      q: "¿Dónde veo mi cuota por buscador?",
      a: "En Metrica/GA: fuentes → buscadores. No el «gráfico de 2019» de otro.",
    },
  ],
  sections: [
    {
      title: "Por qué aparecieron los buscadores",
      level: 2,
      paras: [
        "Cuando había pocos sitios, bastaban favoritos y directorios. El crecimiento de la web inutilizó las listas hechas a mano — surgieron sistemas que rastrean páginas, las indexan y rankean una respuesta a una query.",
        "Los motores tempranos devolvían una lista cruda de URLs; los modernos ponderan relevancia, calidad, localidad, comportamiento y cientos de otras señales.",
      ],
      links: [
        {
          label: "Directorios de sitios hoy",
          href: "/es/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Líderes para Rusia: Yandex y Google",
      level: 2,
      paras: [
        "En SEO comercial para Rusia suele mirarse ambos. La cuota entre ellos se mueve por nicho, dispositivo y región — tu analítica es la única guía, no el «50/50 de un artículo» de otro.",
        "Las diferencias de acentos (localidad, factores comerciales, paneles de webmaster) viven en una comparación aparte.",
      ],
      links: [
        {
          label: "SEO para Yandex y Google",
          href: "/blog/seo-yandex-google/",
        },
        {
          label: "Runet",
          href: "/es/blog/runet/",
        },
      ],
    },
    {
      title: "Otros motores por los que preguntan",
      level: 2,
      paras: [
        "Bing (Microsoft) — un jugador notable en algunos países y el ecosistema Windows; en Rusia la cuota suele ser modesta, pero Webmaster Tools es gratis.",
        "DuckDuckGo — privacy-first; los resultados a menudo se apoyan en índices de partners. Útil para marcas como señal de que hay audiencia fuera de YA/Google.",
        "Mail.ru / Rambler — fuertes como portales media; la búsqueda para SEO suele ser secundaria. Nigma histórico, «Sputnik» y pares de roundups de los 2010 no deberían entrar en un media plan sin comprobar que siguen siendo un canal vivo.",
        "El Yahoo clásico apenas es relevante para SEO orientado a Rusia; Baidu es un mercado aparte.",
      ],
      notes: [
        {
          kind: "tip",
          title: "No copies cuotas de 2020",
          text: "Cifras como «Yandex +10% vs Google» y tráfico de Rambler de textos antiguos se quedan viejas. Usa investigación fresca o tu propio contador.",
        },
      ],
      links: [
        {
          label: "Baidu",
          href: "/es/blog/baidu/",
        },
      ],
    },
    {
      title: "Takeaway práctico para un sitio",
      level: 2,
      paras: [
        "Cubre técnica, contenido y el núcleo para Yandex y Google. Añade Bing Webmaster si ves visitas o planeas una huella EN/global.",
        "No repartas presupuesto en «promoción en diez buscadores muertos».",
        "Los mercados internacionales necesitan un mapa aparte: idioma, hosting, pagos, el líder local de búsqueda.",
      ],
      lists: [
        {
          intro: "Mini checklist:",
          items: [
            "cuota YA/Google en Metrica",
            "Webmaster + Search Console",
            "Bing Webmaster cuando haga falta",
            "motores exóticos — solo con datos o un GEO nuevo",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Hay muchos buscadores; para Rusia el núcleo es Yandex y Google.",
        "Bing y la búsqueda privacy son opcionales, guiados por datos.",
        "Las marcas históricas son contexto útil, no un canal obligatorio.",
      ],
    },
  ],
  closing: [
    "Abre el informe de buscadores en Metrica de un trimestre — verás más rápido si en tu sitio vale la pena pensar en algo más allá de Yandex y Google.",
  ],
  related: [
    "runet",
    "baidu",
    "wordstat",
    "katalogi-saytov",
    "poiskovye-podskazki",
    "seo-yandex-google",
  ],
};

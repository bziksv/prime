import type { BlogPost } from "../../../data/blog";

/** EN overlay for socseti-i-seo — same structure as RU JSON. */
export const socsetiISeoEn: BlogPost = {
  slug: "socseti-i-seo",
  title: "Social media and SEO: direct effects, indirect effects, no myths",
  date: "2019-11-11",
  category: "SEO",
  cover: "/images/blog/socseti-i-seo/cover-en.webp",
  excerpt:
    "How social actually helps a website: traffic, brand, on-site behavior, and link previews — and why likes alone do not move rankings.",
  lead: [
    "“Social signals rule the results” and “social is useless for SEO” are both extremes. Search engines have not treated likes and shares as a ranking shortcut for a long time, but live traffic, brand recognition, and a clean path from post to page still matter for the business — and indirectly for search.",
    "Below: what counts as direct versus indirect impact, which metrics to watch, and what not to expect from a community alone. Outdated playbooks built around classic TIC and PageRank are not the plan.",
  ],
  faq: [
    {
      q: "Do likes and shares raise rankings?",
      a: "As a guaranteed direct ranking factor — no. As a sign of interest and a source of visits — yes, if the audience is real, not faked.",
    },
    {
      q: "Should you run social channels for SEO?",
      a: "For a checkbox among ranking factors — no. For traffic, trust, content, and branded queries — often yes, if the channel fits the niche.",
    },
    {
      q: "Do social links pass link equity?",
      a: "Do not expect classic link juice from mass social URLs. Clicks, brand recognition, and a solid snippet or preview matter more.",
    },
    {
      q: "Do social posts speed up indexing?",
      a: "They can sometimes help a new URL get noticed via mentions and visits, but they do not replace a sitemap, internal links, and page quality.",
    },
    {
      q: "Can social replace SEO?",
      a: "No. Organic search and social ads are different channels. A weak site with poor tech and content will not be rescued by a community alone.",
    },
    {
      q: "How long until search impact shows?",
      a: "Site prep is roughly a month; visibility across the keyword core is planned over 2–6 months after work starts. Social posts give fast touches, not instant page-one results.",
    },
  ],
  sections: [
    {
      title: "What changed since the “social signals” era",
      level: 2,
      paras: [
        "The industry used to debate likes, shares, and tweets as if they directly moved rankings. Today the picture is calmer: search leans on relevance, page quality, the link profile, user behavior, and many other signals. Mass-faking social activity for SEO is a bad bet.",
        "Public metrics like historic TIC-style scores and classic Google PageRank left the toolkit. Do not plan promotion around “raising TIC with shares.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Honest focus",
          paras: [
            "Social is an attention and traffic channel. SEO is search visibility. The link works when both loops are alive — not when one “feeds” the other with gray schemes.",
          ],
        },
      ],
    },
    {
      title: "Direct effects: what you can actually measure",
      level: 2,
      paras: [
        "Call “direct” what you can see in analytics without guessing about a “secret like weight.”",
        "Traffic: posts, Stories, community mailings, and social ads send people to the site. That is a separate source in reports — counted with UTM and goals, not faith in the algorithm.",
        "Mentions and discussion: when brand and materials are truly shared, direct and branded visits grow, and natural links or mentions appear off your own property.",
        "Links from posts: search sees them, but do not expect a “link boost” like editorial placements. A clickable card with a proper preview raises the chance of a visit.",
      ],
      lists: [
        {
          intro: "Watch first:",
          items: [
            "sessions and leads from social (with UTM)",
            "branded queries and direct visits",
            "engagement from a live audience, not bots",
            "landing quality after the click",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Indirect effects: behavior and brand",
      level: 2,
      paras: [
        "Someone arriving from a community is often already warm on the topic: they read longer, return more, convert better — if the post honestly promised what is on the page. That improves on-site behavior without buying fake engagement.",
        "Brand: regular social presence strengthens memory. People later search the name — one of the healthiest SEO bonuses of SMM.",
        "Content: posts and short formats can grow into site articles (and back). One strong piece feeds both the feed and organic search.",
      ],
      lists: [
        {
          intro: "Indirect loop:",
          items: [
            "better behavior on relevant landings",
            "growth in branded demand",
            "natural mentions",
            "faster feedback on the offer",
          ],
        },
      ],
      links: [
        {
          label: "Behavioral factors",
          href: "/en/blog/povedencheskie-faktory/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Don’t confuse",
          paras: [
            "Better UX and honest traffic are not the same as buying “behavioral” traffic from exchanges. Faking engagement signals is a separate risk — covered in another article.",
          ],
        },
      ],
    },
    {
      title: "Indexing and “fast bots” — without illusions",
      level: 2,
      paras: [
        "People used to argue that public platforms like Twitter help surface a new URL faster. In practice the reliable indexing path is technical readiness, a sitemap, internal links, and useful content.",
        "A social mention can speed attention to a page, but it will not save a noindex, duplicate, or empty page. Do not build SEO only on “posted — indexed.”",
      ],
    },
    {
      title: "How to connect SMM and SEO in practice",
      level: 2,
      paras: [
        "Pick one or two networks where your audience actually is — not everything at once. Send people to strong landings with a clear offer, not only the homepage.",
        "Set link previews (Open Graph), UTM, and analytics goals. Judge leads and lead quality, not post reach alone.",
        "For VK communities, packaging for search is a related but separate job.",
      ],
      lists: [
        {
          intro: "Mini checklist for the link:",
          items: [
            "landing ready before scaled posts",
            "preview and title are worth clicking",
            "UTM on all outbound links",
            "shared content plan for site and feed",
            "no fake followers “for SEO”",
          ],
        },
      ],
      links: [
        {
          label: "VK community SEO",
          href: "/en/blog/seo-vkontakte/",
        },
        {
          label: "SMM mistakes",
          href: "/en/blog/oshibki-smm/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Social helps the site with traffic, brand, and nurture — and that is measurable. A direct “ranking for likes” bet is outdated.",
        "Without a solid site and content, a community will not replace SEO. Without a clear social goal, “run Instagram for rankings” is pointless too.",
        "Watch the channel mix and leads. Keyword visibility builds over months by plan — do not confuse a viral post with steady page-one share.",
      ],
    },
  ],
  closing: [
    "Pick one strong site piece, fix the preview, and send an honest post with UTM — faster proof the link works than arguing about “share weight.”",
  ],
  related: [
    "open-graph",
    "povedencheskie-faktory",
    "istochniki-trafika",
    "seo-vkontakte",
    "brendovyy-trafik",
    "oshibki-smm",
  ],
};

/** ES overlay for socseti-i-seo — same structure as RU JSON / EN. */
export const socsetiISeoEs: BlogPost = {
  slug: "socseti-i-seo",
  title: "Redes sociales y SEO: efectos directos, indirectos, sin mitos",
  date: "2019-11-11",
  category: "SEO",
  cover: "/images/blog/socseti-i-seo/cover.webp",
  excerpt:
    "Cómo las redes ayudan de verdad a un sitio: tráfico, marca, comportamiento on-site y previews de enlaces — y por qué los likes solos no mueven rankings.",
  lead: [
    "«Las señales sociales mandan en los resultados» y «las redes no sirven para SEO» son ambos extremos. Los buscadores hace tiempo que no tratan likes y shares como un atajo de ranking, pero el tráfico vivo, el reconocimiento de marca y un camino limpio del post a la página siguen importando al negocio — e indirectamente a la búsqueda.",
    "Abajo: qué cuenta como impacto directo versus indirecto, qué métricas mirar y qué no esperar de una comunidad sola. Los playbooks obsoletos alrededor del TIC clásico y PageRank no son el plan.",
  ],
  faq: [
    {
      q: "¿Los likes y shares suben rankings?",
      a: "Como factor de ranking directo garantizado — no. Como señal de interés y fuente de visitas — sí, si la audiencia es real, no falseada.",
    },
    {
      q: "¿Hay que correr canales sociales por SEO?",
      a: "Por un checkbox entre factores de ranking — no. Por tráfico, confianza, contenido y consultas de marca — a menudo sí, si el canal encaja con el nicho.",
    },
    {
      q: "¿Los enlaces de redes pasan equity de enlaces?",
      a: "No esperes link juice clásico de URLs sociales masivas. Importan más los clics, el reconocimiento de marca y un snippet o preview sólido.",
    },
    {
      q: "¿Los posts sociales aceleran la indexación?",
      a: "A veces pueden ayudar a que una URL nueva se note vía menciones y visitas, pero no sustituyen un sitemap, enlaces internos y calidad de página.",
    },
    {
      q: "¿Pueden las redes sustituir al SEO?",
      a: "No. La búsqueda orgánica y los ads sociales son canales distintos. Un sitio flojo con técnica y contenido pobres no lo salva una comunidad sola.",
    },
    {
      q: "¿Cuánto tarda en verse el impacto en búsqueda?",
      a: "La preparación del sitio es a grandes rasgos un mes; la visibilidad del núcleo de keywords se planifica a 2–6 meses tras el arranque del trabajo. Los posts sociales dan toques rápidos, no resultados de primera página al instante.",
    },
  ],
  sections: [
    {
      title: "Qué cambió desde la era de las «señales sociales»",
      level: 2,
      paras: [
        "La industria discutía likes, shares y tweets como si movieran rankings directamente. Hoy el cuadro es más calmado: la búsqueda se apoya en relevancia, calidad de página, perfil de enlaces, comportamiento del usuario y muchas otras señales. Falsificar a masa actividad social por SEO es una mala apuesta.",
        "Métricas públicas como scores históricos estilo TIC y el PageRank clásico de Google salieron del toolkit. No planes la promoción alrededor de «subir TIC con shares».",
      ],
      notes: [
        {
          kind: "tip",
          title: "Foco honesto",
          paras: [
            "Las redes son un canal de atención y tráfico. El SEO es visibilidad en búsqueda. El vínculo funciona cuando ambos loops están vivos — no cuando uno «alimenta» al otro con esquemas grises.",
          ],
        },
      ],
    },
    {
      title: "Efectos directos: lo que sí puedes medir",
      level: 2,
      paras: [
        "Llama «directo» lo que ves en analítica sin adivinar un «peso secreto del like».",
        "Tráfico: posts, Stories, mailings de comunidad y ads sociales mandan gente al sitio. Eso es una fuente aparte en informes — se cuenta con UTM y goals, no con fe en el algoritmo.",
        "Menciones y discusión: cuando la marca y los materiales se comparten de verdad, crecen las visitas directas y de marca, y aparecen enlaces o menciones naturales fuera de tu propiedad.",
        "Enlaces desde posts: la búsqueda los ve, pero no esperes un «boost de enlace» como en placements editoriales. Una tarjeta clicable con un preview correcto sube la chance de visita.",
      ],
      lists: [
        {
          intro: "Mira primero:",
          items: [
            "sesiones y leads desde redes (con UTM)",
            "consultas de marca y visitas directas",
            "engagement de una audiencia viva, no bots",
            "calidad del landing tras el clic",
          ],
        },
      ],
      links: [
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
    {
      title: "Efectos indirectos: comportamiento y marca",
      level: 2,
      paras: [
        "Alguien que llega desde una comunidad a menudo ya está caliente en el tema: lee más, vuelve más, convierte mejor — si el post prometió con honestidad lo que hay en la página. Eso mejora el comportamiento on-site sin comprar engagement falso.",
        "Marca: la presencia social regular refuerza la memoria. La gente luego busca el nombre — uno de los bonuses SEO más sanos del SMM.",
        "Contenido: posts y formatos cortos pueden crecer a artículos del sitio (y al revés). Una pieza fuerte alimenta el feed y la búsqueda orgánica.",
      ],
      lists: [
        {
          intro: "Loop indirecto:",
          items: [
            "mejor comportamiento en landings relevantes",
            "crecimiento de demanda de marca",
            "menciones naturales",
            "feedback más rápido sobre la oferta",
          ],
        },
      ],
      links: [
        {
          label: "Factores de comportamiento",
          href: "/es/blog/povedencheskie-faktory/",
        },
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "No confundas",
          paras: [
            "Mejor UX y tráfico honesto no son lo mismo que comprar tráfico «de comportamiento» en exchanges. Falsificar señales de engagement es un riesgo aparte — cubierto en otro artículo.",
          ],
        },
      ],
    },
    {
      title: "Indexación y «bots rápidos» — sin ilusiones",
      level: 2,
      paras: [
        "Antes se discutía que plataformas públicas como Twitter ayudan a surfear una URL nueva más rápido. En la práctica el camino fiable de indexación es preparación técnica, un sitemap, enlaces internos y contenido útil.",
        "Una mención social puede acelerar la atención a una página, pero no salva un noindex, un duplicado o una página vacía. No armes SEO solo sobre «publiqué — indexado».",
      ],
    },
    {
      title: "Cómo conectar SMM y SEO en la práctica",
      level: 2,
      paras: [
        "Elige una o dos redes donde tu audiencia esté de verdad — no todo a la vez. Manda a la gente a landings fuertes con una oferta clara, no solo a la homepage.",
        "Fija previews de enlaces (Open Graph), UTM y goals de analítica. Juzga leads y calidad de leads, no solo el alcance del post.",
        "Para comunidades VK, empaquetar para búsqueda es un trabajo relacionado pero aparte.",
      ],
      lists: [
        {
          intro: "Mini checklist del enlace:",
          items: [
            "landing listo antes de posts a escala",
            "preview y title merecen el clic",
            "UTM en todos los enlaces de salida",
            "plan de contenido compartido para sitio y feed",
            "sin followers falsos «por SEO»",
          ],
        },
      ],
      links: [
        {
          label: "SEO de comunidades VK",
          href: "/es/blog/seo-vkontakte/",
        },
        {
          label: "Errores de SMM",
          href: "/blog/oshibki-smm/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Las redes ayudan al sitio con tráfico, marca y nurture — y eso se mide. Una apuesta directa de «ranking por likes» está obsoleta.",
        "Sin un sitio y contenido sólidos, una comunidad no sustituye al SEO. Sin un objetivo social claro, «correr Instagram por rankings» también es inútil.",
        "Mira el mix de canales y los leads. La visibilidad de keywords se construye a lo largo de meses según el plan — no confundas un post viral con una cuota estable de primera página.",
      ],
    },
  ],
  closing: [
    "Elige una pieza fuerte del sitio, arregla el preview y manda un post honesto con UTM — prueba más rápida de que el vínculo funciona que discutir sobre el «peso del share».",
  ],
  related: [
    "open-graph",
    "povedencheskie-faktory",
    "istochniki-trafika",
    "seo-vkontakte",
    "brendovyy-trafik",
    "oshibki-smm",
  ],
};

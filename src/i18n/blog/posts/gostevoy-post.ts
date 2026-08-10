import type { BlogPost } from "../../../data/blog";

/** EN overlay for gostevoy-post — same structure as RU JSON. */
export const gostevoyPostEn: BlogPost = {
  slug: "gostevoy-post",
  title: "Guest post: how to choose a publication site",
  date: "2019-04-11",
  category: "Content marketing",
  cover: "/images/blog/gostevoy-post/cover-en.webp",
  excerpt:
    "How to find and evaluate sites for guest articles: audience, traffic, engagement, and link profile — without free page-one promises or link spam.",
  lead: [
    "A guest post is a piece on someone else’s platform: expertise for their audience and (often) a mention/link to your site. Value sits in a relevant audience and text quality — not one more link at any cost.",
    "Below: how to find sites, what to check when shortlisting, and why a sharp link spike is risky. Crowd replies in discussions are a related topic; “guest-post” search operators often lead to junk marketplaces.",
  ],
  faq: [
    {
      q: "Is a guest post always free?",
      a: "Paid placements exist too. Check the site’s rules and ad labeling if it’s native advertising.",
    },
    {
      q: "Should the main goal be the link?",
      a: "For SEO the link is secondary: donor audience traffic and trust matter more. Posts “only for the anchor” get spotted fast by editors and algorithms.",
    },
    {
      q: "What DR or traffic do you need?",
      a: "No hard thresholds. Topic fit, a live audience, and a sane link profile beat “DR > N from a 2019 guide.”",
    },
    {
      q: "How do you find sites?",
      a: "Results for niche queries + overlapping donors of strong competitors (Ahrefs and similar tools) + manual outreach to editors.",
    },
    {
      q: "How is this different from crowd marketing?",
      a: "Crowd — answers in discussions. A guest post — a full article under the site’s editorial process.",
    },
    {
      q: "Can you buy guest posts in bulk?",
      a: "Mass link spam via guest-post farms hurts. Prefer rare strong pieces.",
    },
    {
      q: "Do you need CheckTrust or SimilarWeb?",
      a: "As an extra filter — yes. They don’t replace reading the site and common sense.",
    },
  ],
  sections: [
    {
      title: "Two ways to find sites",
      level: 2,
      paras: [
        "Niche search: queries like “[topic] blog,” “[industry] magazine,” review the results, and keep a candidate table with notes.",
        "Via competitors: in Ahrefs (or a peer) look at strong players’ referring domains, find overlaps — sites that already host niche experts. Not a magic button — hypotheses for manual checks.",
      ],
      notes: [
        {
          title: "Don’t confuse with guest-post marketplaces",
          kind: "tip",
          text: "`inurl:write-for-us` lists are often full of weak sites. Prefer topical outreach and live media.",
        },
      ],
      links: [
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "What to check on a candidate",
      level: 2,
      paras: [
        "Traffic and sources: is there a live audience from search/direct — not only bots. “From 20k” thresholds in old guides are a hint, not law: for a narrow B2B niche less can still be valuable.",
        "The site: clear structure, fresh materials, understandable sections. If the homepage is dead — nobody will see your post.",
        "Engagement: views, comments, shares on similar articles. “A thousand views” isn’t a universal bar.",
      ],
      lists: [
        {
          intro: "Minimum before emailing the editor:",
          items: [
            "topic matches your expertise",
            "guest rules / contacts exist",
            "no obvious PBN / link farm",
            "you’re ready to help their readers — not a press release",
          ],
        },
      ],
    },
    {
      title: "Link profile and pace",
      level: 2,
      paras: [
        "In link auditors check donor quality, anchors, and dynamics. Sharp spikes and junk networks are red flags for the site and for your strategy.",
        "Quick scores (CheckTrust and similar tools) speed filtering but don’t guarantee clicks or trust. A guest post’s goal is a useful article + a fitting link — not a DR checkbox.",
        "Grow mentions gradually. A sudden link-mass jump for growth is a filter and trust risk.",
      ],
      links: [
        {
          label: "Crowd marketing",
          href: "/en/blog/kraud-marketing/",
        },
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The site = audience and editorial — not metrics alone.",
        "Copy for their readers beats your anchor.",
        "Rare strong guest posts beat a spam batch.",
      ],
    },
  ],
  closing: [
    "Pick one strong niche site, pitch a topic from their content gap, and draft without a hard sell — the fastest way to see if your outreach is alive.",
  ],
  related: [
    "kraud-marketing",
    "ssylki-na-forumah",
    "operatory-poiska",
    "idei-kontent-prodvizheniya",
    "eat-kopirayting",
    "korporativnyy-blog",
  ],
};

/** ES overlay for gostevoy-post — same structure as RU JSON / EN. */
export const gostevoyPostEs: BlogPost = {
  slug: "gostevoy-post",
  title: "Guest post: cómo elegir un sitio de publicación",
  date: "2019-04-11",
  category: "Content marketing",
  cover: "/images/blog/gostevoy-post/cover-es.webp",
  excerpt:
    "Cómo encontrar y evaluar sitios para artículos guest: audiencia, tráfico, engagement y perfil de enlaces — sin promesas gratis de primera página ni spam de links.",
  lead: [
    "Un guest post es una pieza en la plataforma de otro: expertise para su audiencia y (a menudo) una mención/enlace a tu sitio. El valor está en una audiencia relevante y la calidad del texto — no en un enlace más a cualquier coste.",
    "Abajo: cómo encontrar sitios, qué revisar al armar la shortlist y por qué un pico brusco de enlaces es arriesgado. Las respuestas crowd en debates son un tema relacionado; los operadores de búsqueda «guest-post» a menudo llevan a marketplaces basura.",
  ],
  faq: [
    {
      q: "¿Un guest post siempre es gratis?",
      a: "También existen placements de pago. Revisa las reglas del sitio y el etiquetado publicitario si es native advertising.",
    },
    {
      q: "¿El objetivo principal debería ser el enlace?",
      a: "Para SEO el enlace es secundario: importan más el tráfico de la audiencia del donor y la confianza. Los posts «solo por el ancla» los pillan rápido editores y algoritmos.",
    },
    {
      q: "¿Qué DR o tráfico hace falta?",
      a: "No hay umbrales duros. Encaje temático, audiencia viva y un perfil de enlaces sensato ganan a «DR > N de una guía de 2019».",
    },
    {
      q: "¿Cómo encontrar sitios?",
      a: "Resultados para consultas de nicho + donors solapados de competidores fuertes (Ahrefs y herramientas similares) + outreach manual a editores.",
    },
    {
      q: "¿En qué se diferencia del crowd marketing?",
      a: "Crowd — respuestas en debates. Un guest post — un artículo completo bajo el proceso editorial del sitio.",
    },
    {
      q: "¿Se pueden comprar guest posts a granel?",
      a: "El spam masivo de enlaces vía granjas de guest posts perjudica. Prefiere piezas fuertes y raras.",
    },
    {
      q: "¿Hacen falta CheckTrust o SimilarWeb?",
      a: "Como filtro extra — sí. No sustituyen leer el sitio y el sentido común.",
    },
  ],
  sections: [
    {
      title: "Dos formas de encontrar sitios",
      level: 2,
      paras: [
        "Búsqueda de nicho: consultas tipo «[tema] blog», «[industria] magazine», revisa los resultados y mantén una tabla de candidatos con notas.",
        "Vía competidores: en Ahrefs (o un peer) mira referring domains de jugadores fuertes, encuentra solapes — sitios que ya hospedan expertos del nicho. No es un botón mágico — hipótesis para checks manuales.",
      ],
      notes: [
        {
          title: "No confundas con marketplaces de guest posts",
          kind: "tip",
          text: "Las listas `inurl:write-for-us` a menudo están llenas de sitios flojos. Prefiere outreach temático y medios vivos.",
        },
      ],
      links: [
        {
          label: "Operadores de búsqueda",
          href: "/es/blog/operatory-poiska/",
        },
      ],
    },
    {
      title: "Qué revisar en un candidato",
      level: 2,
      paras: [
        "Tráfico y fuentes: ¿hay audiencia viva desde búsqueda/directo — no solo bots? Umbrales «desde 20k» en guías viejas son una pista, no ley: en un nicho B2B estrecho menos aún puede valer.",
        "El sitio: estructura clara, materiales frescos, secciones comprensibles. Si la homepage está muerta — nadie verá tu post.",
        "Engagement: views, comentarios, shares en artículos similares. «Mil views» no es un listón universal.",
      ],
      lists: [
        {
          intro: "Mínimo antes de email al editor:",
          items: [
            "el tema encaja con tu expertise",
            "existen reglas guest / contactos",
            "sin PBN / granja de enlaces obvia",
            "estás listo para ayudar a sus lectores — no un press release",
          ],
        },
      ],
    },
    {
      title: "Perfil de enlaces y ritmo",
      level: 2,
      paras: [
        "En auditors de enlaces revisa calidad del donor, anclas y dinámica. Picos bruscos y redes basura son banderas rojas para el sitio y para tu estrategia.",
        "Scores rápidos (CheckTrust y similares) aceleran el filtrado pero no garantizan clics ni confianza. El objetivo de un guest post es un artículo útil + un enlace que encaje — no un checkbox de DR.",
        "Crece las menciones de forma gradual. Un salto brusco de masa de enlaces por crecimiento es riesgo de filtro y de confianza.",
      ],
      links: [
        {
          label: "Crowd marketing",
          href: "/es/blog/kraud-marketing/",
        },
        {
          label: "Enlaces en foros",
          href: "/es/blog/ssylki-na-forumah/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "El sitio = audiencia y editorial — no solo métricas.",
        "Copy para sus lectores gana a tu ancla.",
        "Guest posts fuertes y raros ganan a un batch de spam.",
      ],
    },
  ],
  closing: [
    "Elige un sitio de nicho fuerte, pitcha un tema desde su content gap y redacta sin hard sell — la forma más rápida de ver si tu outreach está vivo.",
  ],
  related: [
    "kraud-marketing",
    "ssylki-na-forumah",
    "operatory-poiska",
    "idei-kontent-prodvizheniya",
    "eat-kopirayting",
    "korporativnyy-blog",
  ],
};

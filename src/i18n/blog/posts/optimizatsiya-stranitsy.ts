import type { BlogPost } from "../../../data/blog";

/** EN overlay for optimizatsiya-stranitsy — same structure as RU JSON. */
export const optimizatsiyaStranitsyEn: BlogPost = {
  slug: "optimizatsiya-stranitsy",
  title: "On-page SEO checklist: optimize a page for one search query",
  date: "2021-08-02",
  category: "SEO",
  cover: "/images/blog/optimizatsiya-stranitsy/cover-en.webp",
  excerpt:
    "Tune a landing page for one query: copy, title and H1, meta description, internal links, click depth, URL, and images — without stuffing or the myth that every paragraph needs the keyword.",
  lead: [
    "On-page SEO means one URL clearly answers one main intent. People get the offer; search engines read the topic from the title, headings, body, and links.",
    "Use the checklist below for content and page tech. Lead with meaning and usefulness, then weave keywords in. Getting a landing ready is not the same as ranking: positions usually build over months after work starts.",
  ],
  faq: [
    {
      q: "Should I start with keywords or with the copy?",
      a: "Start with intent and how you’ll answer it. A target keyword sets the topic; write for humans and fold phrases in naturally. See the keyword research guide.",
    },
    {
      q: "Should the title tag and H1 be identical?",
      a: "No. The title tag shapes the search snippet; the H1 is the headline on the page. Same idea, preferably different wording.",
    },
    {
      q: "Must the keyword appear in the first and last paragraph?",
      a: "There’s no hard rule. The topic should be obvious from the first screen. Stuffing the phrase at the start and end “for the checklist” is how you get spammy copy.",
    },
    {
      q: "How long should the title and meta description be?",
      a: "SERP limits shift. Put the main meaning early in the title. Write the description as a useful line with a CTA — not a keyword dump. Check the preview in Search Console or your webmaster tools.",
    },
    {
      q: "How is this different from keyword stuffing?",
      a: "This article is the page framework for a query. Stuffing is about repeating phrases until the text breaks. There’s a separate piece on that.",
    },
  ],
  sections: [
    {
      title: "Write the page for one intent",
      level: 2,
      paras: [
        "One URL, one cluster: commercial (“buy / order”) or informational (“how / what”). Mixing intents on the same page is weaker for readers and for search.",
        "Make the copy unique and readable — lists and subheads help. Use key phrases where they belong in the sentence, not as density targets in every line.",
      ],
      lists: [
        {
          intro: "Copy minimum:",
          items: [
            "answer the query in the first screens",
            "include facts, prices, timelines, or terms when it’s commercial",
            "add a clear CTA without filler",
            "check for stuffing out loud and with a density tool",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing in copy",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Title tag, H1, and subheads",
      level: 2,
      paras: [
        "The title tag is the strongest on-page topic signal. Put the core meaning (and the main phrase) near the start — not a comma soup of “cheap wholesale urgent.”",
        "Use one H1, different from the title tag, written for a human. H2–H3 open subtopics and secondary phrasing; they shouldn’t parrot the same exact-match keyword.",
      ],
      lists: [
        {
          intro: "Guidelines:",
          items: [
            "title: clear benefit or topic, brand if you need it",
            "H1: one, without spam",
            "H2s: real section logic — not “keyword1 / keyword2 / keyword3”",
          ],
        },
      ],
    },
    {
      title: "Snippet and meta description",
      level: 2,
      paras: [
        "Search results usually pull from the title, the meta description, and sometimes body text. The description doesn’t “rank by itself,” but it moves CTR: promise, difference, next step.",
        "Write one or two useful sentences. A keyword is fine if the line still sounds human. Stuffing the description kills the click.",
      ],
    },
    {
      title: "Internal links and click depth",
      level: 2,
      paras: [
        "Links from related pages help people and crawling. Use anchors that describe the destination — not the same “click here” on dozens of URLs.",
        "Keep important commercial pages close to the homepage (roughly within two or three clicks). “Nobody goes deeper than three” is a simplification, but burying a service behind five menus still hurts.",
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "URLs and images",
      level: 2,
      paras: [
        "Use a short, readable path that matches the page, with hyphens and without parameter junk. A keyword in the URL is a small clarity win — not a substitute for good content.",
        "Compress images, give files meaningful names, and write `alt` that describes the scene — not a keyword sheet. Image search is a bonus, not the main bet for a commercial page.",
      ],
      lists: [
        {
          intro: "Quick checklist before you publish:",
          items: [
            "one main intent per URL",
            "title, H1, and lead aligned",
            "internal links to and from the page",
            "readable URL and HTTPS",
            "alt text on key images",
            "no stuffing or copy-paste",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "On-page work is part of prep. Ranking for a competitive query is planned over 2–6 months after promotion starts — not the result of one title tweak.",
        },
      ],
      links: [
        {
          label: "Website URLs",
          href: "/en/blog/url-adres/",
        },
      ],
    },
  ],
};

/** ES overlay for optimizatsiya-stranitsy — same structure as RU JSON / EN. */
export const optimizatsiyaStranitsyEs: BlogPost = {
  slug: "optimizatsiya-stranitsy",
  title: "Checklist SEO on-page: optimizar una página para una query de búsqueda",
  date: "2021-08-02",
  category: "SEO",
  cover: "/images/blog/optimizatsiya-stranitsy/cover-es.webp",
  excerpt:
    "Afinar un landing para una query: copy, title y H1, meta description, enlaces internos, profundidad de clic, URL e imágenes — sin stuffing ni el mito de que cada párrafo necesita la keyword.",
  lead: [
    "El SEO on-page significa que una URL responde con claridad a un intent principal. La gente recibe la oferta; los buscadores leen el tema desde el title, los headings, el cuerpo y los enlaces.",
    "Usa el checklist de abajo para contenido y técnica de página. Primero sentido y utilidad, luego teje las keywords. Tener un landing listo no es lo mismo que rankear: las posiciones suelen construirse en meses tras arrancar el trabajo.",
  ],
  faq: [
    {
      q: "¿Empiezo por keywords o por el copy?",
      a: "Empieza por el intent y cómo lo responderás. Una keyword objetivo fija el tema; escribe para humanos y mete frases con naturalidad. Ver la guía de investigación de keywords.",
    },
    {
      q: "¿El title tag y el H1 deben ser idénticos?",
      a: "No. El title tag da forma al snippet de búsqueda; el H1 es el titular en la página. Misma idea, preferiblemente redacción distinta.",
    },
    {
      q: "¿Debe aparecer la keyword en el primer y el último párrafo?",
      a: "No hay regla dura. El tema debe ser obvio desde la primera pantalla. Meter la frase al inicio y al final «por el checklist» es cómo sale copy spammy.",
    },
    {
      q: "¿Cuánto deben medir el title y la meta description?",
      a: "Los límites de la SERP se mueven. Pon el sentido principal pronto en el title. Escribe la description como una línea útil con CTA — no un vertedero de keywords. Revisa el preview en Search Console o tus herramientas de webmaster.",
    },
    {
      q: "¿En qué se diferencia del keyword stuffing?",
      a: "Este artículo es el marco de página para una query. El stuffing es repetir frases hasta que el texto se rompe. Hay una pieza aparte sobre eso.",
    },
  ],
  sections: [
    {
      title: "Escribe la página para un solo intent",
      level: 2,
      paras: [
        "Una URL, un cluster: comercial («comprar / pedir») o informativo («cómo / qué»). Mezclar intents en la misma página es más flojo para lectores y para la búsqueda.",
        "Haz el copy único y legible — listas y subtítulos ayudan. Usa frases clave donde encajen en la frase, no como objetivos de densidad en cada línea.",
      ],
      lists: [
        {
          intro: "Mínimo de copy:",
          items: [
            "responde la query en las primeras pantallas",
            "incluye hechos, precios, plazos o términos cuando sea comercial",
            "añade un CTA claro sin relleno",
            "revisa el stuffing en voz alta y con una herramienta de densidad",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing en el copy",
          href: "/es/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Title tag, H1 y subtítulos",
      level: 2,
      paras: [
        "El title tag es la señal on-page de tema más fuerte. Pon el sentido núcleo (y la frase principal) cerca del inicio — no una sopa de comas de «barato mayorista urgente».",
        "Usa un solo H1, distinto del title tag, escrito para un humano. H2–H3 abren subtemas y redacción secundaria; no deben repetir la misma keyword exact-match.",
      ],
      lists: [
        {
          intro: "Pautas:",
          items: [
            "title: beneficio o tema claro, marca si hace falta",
            "H1: uno, sin spam",
            "H2s: lógica real de sección — no «keyword1 / keyword2 / keyword3»",
          ],
        },
      ],
    },
    {
      title: "Snippet y meta description",
      level: 2,
      paras: [
        "Los resultados de búsqueda suelen tirar del title, la meta description y a veces del cuerpo. La description no «rankea sola», pero mueve el CTR: promesa, diferencia, siguiente paso.",
        "Escribe una o dos frases útiles. Una keyword está bien si la línea sigue sonando humana. Atiborrar la description mata el clic.",
      ],
    },
    {
      title: "Enlaces internos y profundidad de clic",
      level: 2,
      paras: [
        "Los enlaces desde páginas relacionadas ayudan a la gente y al crawl. Usa anclas que describan el destino — no el mismo «clic aquí» en docenas de URLs.",
        "Mantén las páginas comerciales importantes cerca de la homepage (más o menos a dos o tres clics). «Nadie va más allá de tres» es una simplificación, pero enterrar un servicio tras cinco menús sigue doliendo.",
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "URLs e imágenes",
      level: 2,
      paras: [
        "Usa un path corto y legible que cuadre con la página, con guiones y sin basura de parámetros. Una keyword en la URL es una pequeña victoria de claridad — no un sustituto de buen contenido.",
        "Comprime imágenes, da a los archivos nombres con sentido y escribe `alt` que describa la escena — no una hoja de keywords. Image Search es un bonus, no la apuesta principal de una página comercial.",
      ],
      lists: [
        {
          intro: "Checklist rápido antes de publicar:",
          items: [
            "un intent principal por URL",
            "title, H1 y lead alineados",
            "enlaces internos hacia y desde la página",
            "URL legible y HTTPS",
            "alt text en imágenes clave",
            "sin stuffing ni copy-paste",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "El trabajo on-page forma parte de la prep. Rankear por una query competitiva se planifica a 2–6 meses tras arrancar la promoción — no el resultado de un solo ajuste de title.",
        },
      ],
      links: [
        {
          label: "URLs del sitio",
          href: "/es/blog/url-adres/",
        },
      ],
    },
  ],
};

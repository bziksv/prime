import type { BlogPost } from "../../../data/blog";

/** EN overlay for ctr-faktor-google — same structure as RU JSON. */
export const ctrFaktorGoogleEn: BlogPost = {
  slug: "ctr-faktor-google",
  title: "CTR as a Google ranking factor: direct, indirect, or a myth?",
  date: "2016-10-05",
  category: "SEO",
  cover: "/images/blog/ctr-faktor-google/cover-en.webp",
  excerpt:
    "Does Google use CTR in ranking: what representatives have said, where clicks feed experiments and personalization, and why click inflation is a bad bet.",
  lead: [
    "The “is CTR a Google ranking factor?” debate has run for years: industry experiments, engineer comments, and confusion between personalization, SERP A/B tests, and a direct boost for every page.",
    "Below: a practical frame without chasing click inflation — where clicks actually show up, what to do with CTR in Search Console, and why a better snippet and stronger relevance beat buying clicks.",
  ],
  faq: [
    {
      q: "Is CTR a direct ranking factor?",
      a: "Google has repeatedly said raw CTR as a universal ranking lever is unreliable and easy to game. Clicks show up in narrower places: quality experiments, personalization, some trend scenarios — not “buy clicks → page one.”",
    },
    {
      q: "Why watch CTR in Search Console then?",
      a: "As a diagnostic for the snippet and intent: low CTR at a strong position often means a weak title or description, or a mismatch with the query.",
    },
    {
      q: "Does CTR inflation actually help?",
      a: "Not as a strategy. You risk filters and noisy data. See our post on engagement inflation.",
    },
    {
      q: "How does CTR differ from on-site behavior signals?",
      a: "CTR is click-through from the SERP (impressions → clicks). What happens next on the site — bounce, depth, time — is a different layer. Mashing them into one “magic behavior score” does more harm than good.",
    },
    {
      q: "Does CTR affect Yandex the same way?",
      a: "The formulas are closed. In practice the same rule holds: an honest snippet and a relevant page beat bot schemes. Don’t copy mid-2010s U.S. case studies one-for-one.",
    },
    {
      q: "What moves ranks more: CTR or content?",
      a: "Content, technical health, and intent fit. CTR follows a good snippet and a strong position — it doesn’t replace the SEO fundamentals.",
    },
    {
      q: "Why did Google mention clicks in presentations?",
      a: "Often in the context of evaluating algorithm changes and SERP quality in experiments — not as “inflate your site’s CTR.”",
    },
    {
      q: "When should I expect rank growth after a title fix?",
      a: "Recrawl and reaction can take days to weeks. Building competitive terms into page-one visibility is still a planned 2–6 months of steady work — not “new title = page one tomorrow.”",
    },
  ],
  sections: [
    {
      title: "Where the debate came from",
      level: 2,
      paras: [
        "In the mid-2010s the industry was deep into experiments like Rand Fishkin’s cases: can clicks move the SERP? The theory sounded logical — search should account for what people prefer.",
        "At the same time, Google representatives (including Gary Illyes) stressed that relying on CTR as a direct factor is risky because of noise and manipulation. For SEO, separate “clicks somewhere inside the system” from “click your site and rise forever.”",
      ],
      notes: [
        {
          title: "Historical context",
          kind: "tip",
          text: "2015–2016 quotes and slides are an archive of the debate. Check current wording in Google Help and Search Central; don’t build strategy on one old presentation screenshot.",
        },
      ],
    },
    {
      title: "Where CTR isn’t a ranking button",
      level: 2,
      paras: [
        "Raw CTR by query is easy to distort: brand, position, season, clickbait, bots. A universal “higher CTR → higher rank for everyone” rule scales poorly and is easy to spam.",
        "Personalization is a separate case: if you often pick one result type for an ambiguous query, the SERP may adapt to you. That is not the same as a global lift of someone else’s site for all users.",
      ],
      lists: [
        {
          intro: "Why “just click a lot” fails as SEO:",
          items: [
            "noise and spam can fake clicks easily",
            "position itself strongly drives CTR",
            "brand queries distort the picture",
            "search looks at quality beyond one metric",
          ],
        },
      ],
    },
    {
      title: "Where clicks still matter",
      level: 2,
      paras: [
        "In engineering explanations, clicks often appear as a quality metric in experiments: does an algorithm change help people find a better answer? That’s an indirect loop through system evaluation — not a manual URL boost for yesterday’s clicks.",
        "In some trend and hot-topic scenarios, short-term popularity signals (mentions, interest, sometimes behavior) can temporarily affect the SERP. That’s hard to control with SEO tricks and cools off fast.",
      ],
      lists: [
        {
          intro: "A practical model for SEOs:",
          items: [
            "a direct CTR score per page isn’t your bet",
            "Google experiments / SERP quality — an internal loop",
            "personalization — about the user, not someone else’s rankings",
            "your work — snippet, relevance, UX after the click",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and CTR",
          href: "/en/blog/snippet/",
        },
        {
          label: "Engagement inflation",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "What to do in practice",
      level: 2,
      paras: [
        "Treat CTR in Search Console (or Webmaster) as a signal: at positions 3–5 with low CTR, rewrite the title and description for intent, and drop clickbait the page doesn’t deliver.",
        "After the click, the page has to answer the query. Otherwise high CTR turns into bounces and doesn’t help the business. Click inflation and bots are a risk path, not steady growth.",
      ],
      lists: [
        {
          intro: "Checklist instead of inflation:",
          items: [
            "title reflects the job behind the query",
            "description honestly promises the content",
            "the page answers intent above the fold",
            "mobile and speed don’t kill the visit",
            "in Search Console, watch CTR by cluster — not one site-wide average",
          ],
        },
      ],
      links: [
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A snippet fix can move CTR relatively fast after recrawl. Building competitive terms into page-one visibility still takes months (often 2–6) — not “they clicked, so we’re first.” Site prep is not the same as ranking timelines.",
        },
      ],
    },
  ],
  related: [
    "snippet",
    "nakrutka-pf",
    "user-intent",
    "seo-yandex-google",
    "effektivnost-seo",
    "teg-h1",
  ],
};

/** ES overlay for ctr-faktor-google — same structure as RU JSON / EN. */
export const ctrFaktorGoogleEs: BlogPost = {
  slug: "ctr-faktor-google",
  title: "CTR como factor de ranking en Google: ¿directo, indirecto o mito?",
  date: "2016-10-05",
  category: "SEO",
  cover: "/images/blog/ctr-faktor-google/cover.webp",
  excerpt:
    "Si Google usa el CTR en el ranking: qué han dicho los representantes, dónde los clics alimentan experimentos y personalización, y por qué inflar clics es una mala apuesta.",
  lead: [
    "El debate «¿es el CTR un factor de ranking en Google?» lleva años: experimentos de la industria, comentarios de ingenieros y confusión entre personalización, tests A/B de SERP y un boost directo para cada página.",
    "Abajo: un marco práctico sin perseguir inflación de clics — dónde aparecen de verdad los clics, qué hacer con el CTR en Search Console, y por qué un mejor snippet y más relevancia ganan a comprar clics.",
  ],
  faq: [
    {
      q: "¿Es el CTR un factor de ranking directo?",
      a: "Google ha dicho repetidas veces que el CTR crudo como palanca universal de ranking es poco fiable y fácil de manipular. Los clics aparecen en sitios más estrechos: experimentos de calidad, personalización, algunos escenarios de tendencia — no «compra clics → primera página».",
    },
    {
      q: "¿Por qué mirar entonces el CTR en Search Console?",
      a: "Como diagnóstico del snippet y la intención: un CTR bajo en una posición fuerte a menudo significa title o description débiles, o un desajuste con la query.",
    },
    {
      q: "¿La inflación de CTR ayuda de verdad?",
      a: "No como estrategia. Arriesgas filtros y datos ruidosos. Ver nuestro post sobre inflación de engagement.",
    },
    {
      q: "¿En qué difiere el CTR de las señales de comportamiento on-site?",
      a: "CTR es el click-through desde la SERP (impresiones → clics). Lo que pasa después en el sitio — bounce, profundidad, tiempo — es otra capa. Meterlos en un solo «score mágico de comportamiento» hace más daño que bien.",
    },
    {
      q: "¿El CTR afecta a Yandex igual?",
      a: "Las fórmulas están cerradas. En la práctica vale la misma regla: un snippet honesto y una página relevante ganan a esquemas de bots. No copies case studies de EE. UU. de mediados de 2010 uno a uno.",
    },
    {
      q: "¿Qué mueve más los rankings: CTR o contenido?",
      a: "Contenido, salud técnica y encaje de intención. El CTR sigue a un buen snippet y una posición fuerte — no sustituye los fundamentos SEO.",
    },
    {
      q: "¿Por qué Google mencionó clics en presentaciones?",
      a: "A menudo en el contexto de evaluar cambios de algoritmo y calidad de SERP en experimentos — no como «infla el CTR de tu sitio».",
    },
    {
      q: "¿Cuándo esperar crecimiento de ranking tras arreglar el title?",
      a: "El recrawl y la reacción pueden llevar de días a semanas. Meter términos competitivos en visibilidad de primera página sigue siendo un plan de 2–6 meses de trabajo constante — no «title nuevo = primera página mañana».",
    },
  ],
  sections: [
    {
      title: "De dónde salió el debate",
      level: 2,
      paras: [
        "A mediados de 2010 la industria estaba metida en experimentos como los cases de Rand Fishkin: ¿pueden los clics mover la SERP? La teoría sonaba lógica — la búsqueda debería tener en cuenta qué prefieren las personas.",
        "Al mismo tiempo, representantes de Google (incluido Gary Illyes) subrayaron que apoyarse en el CTR como factor directo es arriesgado por el ruido y la manipulación. Para SEO, separa «clics en algún sitio dentro del sistema» de «clic en tu sitio y subes para siempre».",
      ],
      notes: [
        {
          title: "Contexto histórico",
          kind: "tip",
          text: "Citas y slides de 2015–2016 son un archivo del debate. Revisa la redacción actual en Google Help y Search Central; no armes estrategia sobre una captura vieja de una presentación.",
        },
      ],
    },
    {
      title: "Donde el CTR no es un botón de ranking",
      level: 2,
      paras: [
        "El CTR crudo por query es fácil de distorsionar: marca, posición, temporada, clickbait, bots. Una regla universal «más CTR → mejor ranking para todos» escala mal y es fácil de spamear.",
        "La personalización es otro caso: si a menudo eliges un tipo de resultado para una query ambigua, la SERP puede adaptarse a ti. Eso no es lo mismo que un lift global del sitio de otro para todos los usuarios.",
      ],
      lists: [
        {
          intro: "Por qué «solo haz muchos clics» falla como SEO:",
          items: [
            "ruido y spam pueden falsificar clics con facilidad",
            "la propia posición empuja fuerte el CTR",
            "las queries de marca distorsionan el cuadro",
            "la búsqueda mira calidad más allá de una métrica",
          ],
        },
      ],
    },
    {
      title: "Donde los clics aún importan",
      level: 2,
      paras: [
        "En explicaciones de ingeniería, los clics a menudo aparecen como métrica de calidad en experimentos: ¿un cambio de algoritmo ayuda a la gente a encontrar una mejor respuesta? Eso es un loop indirecto por evaluación del sistema — no un boost manual de URL por los clics de ayer.",
        "En algunos escenarios de tendencia y temas calientes, señales de popularidad a corto plazo (menciones, interés, a veces comportamiento) pueden afectar temporalmente la SERP. Eso es difícil de controlar con trucos SEO y se enfría rápido.",
      ],
      lists: [
        {
          intro: "Un modelo práctico para SEOs:",
          items: [
            "un score directo de CTR por página no es tu apuesta",
            "experimentos de Google / calidad de SERP — un loop interno",
            "personalización — sobre el usuario, no los rankings de otro",
            "tu trabajo — snippet, relevancia, UX tras el clic",
          ],
        },
      ],
      links: [
        {
          label: "Snippet y CTR",
          href: "/es/blog/snippet/",
        },
        {
          label: "Inflación de engagement",
          href: "/es/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "Qué hacer en la práctica",
      level: 2,
      paras: [
        "Trata el CTR en Search Console (o Webmaster) como señal: en posiciones 3–5 con CTR bajo, reescribe title y description para la intención, y deja el clickbait que la página no cumple.",
        "Tras el clic, la página tiene que responder a la query. Si no, un CTR alto se vuelve bounce y no ayuda al negocio. Inflación de clics y bots son un camino de riesgo, no crecimiento estable.",
      ],
      lists: [
        {
          intro: "Checklist en lugar de inflación:",
          items: [
            "el title refleja el trabajo detrás de la query",
            "la description promete el contenido con honestidad",
            "la página responde la intención above the fold",
            "móvil y velocidad no matan la visita",
            "en Search Console, mira CTR por cluster — no un promedio único del sitio",
          ],
        },
      ],
      links: [
        {
          label: "User intent",
          href: "/es/blog/user-intent/",
        },
        {
          label: "SEO para Yandex y Google",
          href: "/es/blog/seo-yandex-google/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Un fix de snippet puede mover el CTR relativamente rápido tras el recrawl. Meter términos competitivos en visibilidad de primera página sigue llevando meses (a menudo 2–6) — no «hicieron clic, así que somos los primeros». La prep del sitio no es lo mismo que los plazos de ranking.",
        },
      ],
    },
  ],
  related: [
    "snippet",
    "nakrutka-pf",
    "user-intent",
    "seo-yandex-google",
    "effektivnost-seo",
    "teg-h1",
  ],
};

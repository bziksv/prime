import type { BlogPost } from "../../../data/blog";

/** EN overlay for trendy-seo — same structure as RU JSON. */
export const trendySeoEn: BlogPost = {
  slug: "trendy-seo",
  title: "SEO trends: zero-click, meaning, and what to do",
  date: "2020-01-21",
  category: "SEO",
  cover: "/images/blog/trendy-seo/cover-en.webp",
  excerpt:
    "How SEO is changing: answers in the results without a click, search engines’ own services, meaning-aware text analysis — and practical moves on snippets, content, links, and analytics.",
  lead: [
    "SEO trends have not been about “more keywords in a paragraph” for a long time. Search engines close part of demand right in the results, promote their own services, and understand query meaning better. Organic search remains, but the fight is for the click and for trust in the page.",
    "Below: shifts that matter for strategy and what to do in practice — snippets, useful pages, white-hat mentions, social channels, and webmaster panels. This is not a calendar-year forecast, but durable directions; algorithm names in the press change faster than the sense of the advice.",
  ],
  faq: [
    {
      q: "Does zero-click kill SEO?",
      a: "Some informational queries close in the results. Commercial and complex intents still send people to sites. Strengthen brand, useful landings, and channels beyond one results page.",
    },
    {
      q: "Should you chase every new algorithm by name?",
      a: "No. Watch the effect: relevance, E-E-A-T signals, tech, UX. Model names in the press change; working with intent and page quality does not.",
    },
    {
      q: "Are small sites doomed because of brands and aggregators?",
      a: "It is harder to compete on broad head terms, but niches, region, expertise, and mid/long-tail with a strong answer remain. You still need to prep the site and keyword core; growing core visibility is planned over months of work.",
    },
    {
      q: "Do social networks help SEO directly?",
      a: "As a traffic and awareness channel — yes. As a “magic ranking factor” — do not count on it. Social content complements the site; it does not replace it.",
    },
    {
      q: "Should you delete “zombie” pages?",
      a: "Thin, useless URLs often hurt. Glue with 301 to useful ones or remove from the index thoughtfully. Do not wipe wholesale without an audit.",
    },
    {
      q: "Are a glossary and “Updated” required?",
      a: "Useful if terms are complex and materials are really updated. Formality for a checkbox will not replace answering the query.",
    },
    {
      q: "Can you “adapt to trends” and reach page one in a month?",
      a: "In about a month it is realistic to tighten tech, snippets, and a content plan. A lasting core share in page-one visibility is more often 2–6 months after work starts.",
    },
    {
      q: "Where should you start from these tips?",
      a: "Intent and useful pages → snippets and mobile UX → remove junk from the index → Webmaster/GSC panels → targeted mentions.",
    },
  ],
  sections: [
    {
      title: "Two big shifts",
      level: 2,
      paras: [
        "First — attention monopolized in the results: quick answers, the search engine’s own blocks (maps, marketplaces, video, news, Q&A). Users often get an answer without a click — zero-click. An organic link competes not only with other sites, but with the results page itself.",
        "Second — meaning-aware parsing of queries and text. Search engines better connect phrasing with intent. Earlier a small site with dense long-tail text optimization could steal traffic from a big brand with “thin” pages. As meaning understanding grew, large properties with broad assortment and trust more often reclaim those queries — if they actually meet the need.",
      ],
      lists: [
        {
          intro: "What that means in practice:",
          items: [
            "not every query must click through to your domain",
            "the results fragment should be honest and useful",
            "you compete with aggregators and search’s own services",
            "a keyword for the keyword’s sake is weaker than a full answer to the user’s job",
          ],
        },
      ],
      links: [
        {
          label: "Why pages aren’t ranking",
          href: "/en/blog/sayt-ne-v-top/",
        },
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Snippets and the first screen",
      level: 2,
      paras: [
        "When CTR from results falls, a clickable snippet’s value rises. Tune title and description to intent: numbers, clear benefit, no clickbait that does not match the page. A readable URL helps people and sometimes the snippet.",
        "On the page itself the first screen should quickly confirm the person landed right: subheads, answer, solid mobile layout. That affects whether they bounce back to the results in a second (a rough “click length” / satisfaction signal).",
      ],
      lists: [
        {
          intro: "Quick fixes:",
          items: [
            "title matches the query and the page promise",
            "description complements, does not duplicate title",
            "H1 and lead close intent without fluff",
            "responsive layout and mobile speed",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Pages with traffic and meaning",
      level: 2,
      paras: [
        "URL count alone is not strength. Keep and strengthen pages that get demand and solve the job; glue thin “zombies” with 301 or carefully pull them from the index. That is hygiene — not a one-shot “deleted everything — took off.”",
        "Around content, add phrasing for solving intent: search suggest, related queries, visibility of competitor URLs. Write to answer the user’s next question — not only an exact key match.",
      ],
      lists: [
        {
          intro: "Content ritual:",
          items: [
            "audit pages with no traffic and no value",
            "refresh live materials (and an “updated” signal if true)",
            "Last-Modified / current sitemap where it works",
            "a glossary — if the niche is terminology-heavy",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Mentions, social channels, and analytics",
      level: 2,
      paras: [
        "Links and mentions via useful content and careful outreach still beat marketplace spam. Social networks are an extra reach channel: articles, infographics, short video and podcasts can bring people the results “ate” with zero-click.",
        "Close the loop in panels: Yandex Webmaster and Google Search Console show queries, CTR, and errors. Trends without measurement are guessing.",
      ],
      lists: [
        {
          intro: "A white-hat growth track:",
          items: [
            "topical sites and guest pieces",
            "brand-mention monitoring",
            "content formats for the audience outside search",
            "weekly GSC / Webmaster review",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "What doesn’t change",
      level: 2,
      paras: [
        "Tech, clear structure, an honest answer to the query, measuring leads — the base. Trends suggest accents (snippet, meaning, channels), but do not cancel site prep and time to build rankings.",
        "Prep (keyword core, copy, tech) — often about a month. A noticeable share of the commercial core in page-one visibility — planned 2–6 months after work starts, growing month to month, with no date guarantee. “Adapted to a trend in a week — page one” is a harmful myth.",
      ],
      lists: [
        {
          intro: "Bottom line:",
          items: [
            "account for zero-click and search engine blocks",
            "write for intent, not density",
            "clean weak URLs, strengthen strong ones",
            "watch CTR and panels — not only rankings",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Reacting to trends is not instant page one. Page quality and measurement first, then months of visibility buildup.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
  ],
  related: [
    "sayt-ne-v-top",
    "snippet",
    "golosovoy-poisk",
    "yandeks-vebmaster",
    "autrich",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for trendy-seo — same structure as RU JSON / EN. */
export const trendySeoEs: BlogPost = {
  slug: "trendy-seo",
  title: "Tendencias SEO: zero-click, sentido y qué hacer",
  date: "2020-01-21",
  category: "SEO",
  cover: "/images/blog/trendy-seo/cover.webp",
  excerpt:
    "Cómo está cambiando el SEO: respuestas en los resultados sin clic, servicios propios de los buscadores, análisis de texto con sentido — y movimientos prácticos en snippets, contenido, enlaces y analítica.",
  lead: [
    "Las tendencias SEO hace tiempo que no van de «más keywords en un párrafo». Los buscadores cierran parte de la demanda justo en los resultados, promueven sus propios servicios y entienden mejor el sentido de la consulta. La búsqueda orgánica sigue, pero la pelea es por el clic y por la confianza en la página.",
    "Abajo: cambios que importan para la estrategia y qué hacer en la práctica — snippets, páginas útiles, menciones white-hat, canales sociales y paneles de webmaster. Esto no es un forecast de año calendario, sino direcciones durables; los nombres de algoritmos en prensa cambian más rápido que el sentido del consejo.",
  ],
  faq: [
    {
      q: "¿El zero-click mata el SEO?",
      a: "Algunas consultas informativas se cierran en los resultados. Las intenciones comerciales y complejas siguen mandando gente a sitios. Refuerza marca, landings útiles y canales más allá de una sola página de resultados.",
    },
    {
      q: "¿Hay que perseguir cada algoritmo nuevo por nombre?",
      a: "No. Mira el efecto: relevancia, señales E-E-A-T, técnica, UX. Los nombres de modelo en prensa cambian; trabajar con intención y calidad de página no.",
    },
    {
      q: "¿Los sitios pequeños están condenados por marcas y agregadores?",
      a: "Es más duro competir en head terms amplios, pero quedan nichos, región, expertise y mid/long-tail con una respuesta fuerte. Aún hay que preparar el sitio y el núcleo de keywords; crecer la visibilidad del núcleo se planifica a lo largo de meses de trabajo.",
    },
    {
      q: "¿Las redes sociales ayudan al SEO de forma directa?",
      a: "Como canal de tráfico y awareness — sí. Como «factor mágico de ranking» — no cuentes con ello. El contenido social complementa el sitio; no lo sustituye.",
    },
    {
      q: "¿Hay que borrar páginas «zombie»?",
      a: "Las URLs finas e inútiles a menudo perjudican. Pega con 301 a las útiles o sácalas del índice con criterio. No borres a granel sin una auditoría.",
    },
    {
      q: "¿Son obligatorios un glosario y «Actualizado»?",
      a: "Útiles si los términos son complejos y los materiales se actualizan de verdad. La formalidad por checkbox no sustituye responder a la consulta.",
    },
    {
      q: "¿Se puede «adaptar a tendencias» y llegar a primera página en un mes?",
      a: "En aproximadamente un mes es realista apretar técnica, snippets y un plan de contenido. Una cuota duradera del núcleo en visibilidad de primera página es más a menudo 2–6 meses tras el arranque del trabajo.",
    },
    {
      q: "¿Por dónde empezar con estos tips?",
      a: "Intención y páginas útiles → snippets y UX móvil → quitar basura del índice → paneles Webmaster/GSC → menciones dirigidas.",
    },
  ],
  sections: [
    {
      title: "Dos grandes cambios",
      level: 2,
      paras: [
        "Primero — atención monopolizada en los resultados: respuestas rápidas, bloques propios del buscador (mapas, marketplaces, vídeo, noticias, Q&A). Los usuarios a menudo obtienen una respuesta sin clic — zero-click. Un enlace orgánico compite no solo con otros sitios, sino con la propia página de resultados.",
        "Segundo — parsing de consultas y texto con sentido. Los buscadores conectan mejor el wording con la intención. Antes un sitio pequeño con optimización densa de long-tail podía robar tráfico a una gran marca con páginas «finas». Al crecer la comprensión del sentido, las propiedades grandes con surtido amplio y confianza recuperan más a menudo esas consultas — si de verdad cubren la necesidad.",
      ],
      lists: [
        {
          intro: "Qué significa eso en la práctica:",
          items: [
            "no toda consulta debe hacer clic a tu dominio",
            "el fragmento de resultados debe ser honesto y útil",
            "compites con agregadores y servicios propios de la búsqueda",
            "una keyword por la keyword es más débil que una respuesta completa al trabajo del usuario",
          ],
        },
      ],
      links: [
        {
          label: "Por qué las páginas no rankean",
          href: "/es/blog/sayt-ne-v-top/",
        },
        {
          label: "Búsqueda por voz",
          href: "/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Snippets y la primera pantalla",
      level: 2,
      paras: [
        "Cuando cae el CTR desde resultados, sube el valor de un snippet clicable. Ajusta title y description a la intención: cifras, beneficio claro, sin clickbait que no encaje con la página. Una URL legible ayuda a la gente y a veces al snippet.",
        "En la propia página la primera pantalla debe confirmar rápido que la persona aterrizó bien: subtítulos, respuesta, layout móvil sólido. Eso afecta a si vuelven a los resultados en un segundo (una señal aproximada de «longitud de clic» / satisfacción).",
      ],
      lists: [
        {
          intro: "Arreglos rápidos:",
          items: [
            "el title encaja con la consulta y la promesa de la página",
            "la description complementa, no duplica el title",
            "H1 y lead cierran la intención sin relleno",
            "layout responsive y velocidad móvil",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/es/blog/snippet/",
        },
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Páginas con tráfico y sentido",
      level: 2,
      paras: [
        "El conteo de URLs solo no es fuerza. Mantén y refuerza páginas que reciben demanda y resuelven el trabajo; pega «zombies» finos con 301 o sácalos del índice con cuidado. Eso es higiene — no un «borré todo — despegué» de un tiro.",
        "Alrededor del contenido, suma wording para resolver la intención: suggest de búsqueda, consultas relacionadas, visibilidad de URLs de competidores. Escribe para responder la siguiente pregunta del usuario — no solo un exact key match.",
      ],
      lists: [
        {
          intro: "Ritual de contenido:",
          items: [
            "auditar páginas sin tráfico y sin valor",
            "refrescar materiales vivos (y una señal «actualizado» si es verdad)",
            "Last-Modified / sitemap actual donde funcione",
            "un glosario — si el nicho es pesado en terminología",
          ],
        },
      ],
      links: [
        {
          label: "Contenido del sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
        {
          label: "Sitemap XML",
          href: "/es/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Menciones, canales sociales y analítica",
      level: 2,
      paras: [
        "Enlaces y menciones vía contenido útil y outreach cuidadoso siguen ganando al spam de marketplaces. Las redes son un canal de alcance extra: artículos, infografías, vídeo corto y podcasts pueden traer gente que los resultados «se comieron» con zero-click.",
        "Cierra el loop en paneles: Yandex Webmaster y Google Search Console muestran consultas, CTR y errores. Tendencias sin medición son adivinanzas.",
      ],
      lists: [
        {
          intro: "Una vía de crecimiento white-hat:",
          items: [
            "sitios temáticos y piezas guest",
            "monitoreo de menciones de marca",
            "formatos de contenido para la audiencia fuera de la búsqueda",
            "revisión semanal de GSC / Webmaster",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Qué no cambia",
      level: 2,
      paras: [
        "Técnica, estructura clara, una respuesta honesta a la consulta, medir leads — la base. Las tendencias sugieren acentos (snippet, sentido, canales), pero no cancelan la preparación del sitio ni el tiempo para construir rankings.",
        "Preparación (núcleo de keywords, copy, técnica) — a menudo alrededor de un mes. Una cuota notable del núcleo comercial en visibilidad de primera página — planificada a 2–6 meses tras el arranque del trabajo, creciendo de mes a mes, sin garantía de fecha. «Me adapté a una tendencia en una semana — primera página» es un mito dañino.",
      ],
      lists: [
        {
          intro: "En resumen:",
          items: [
            "cuenta con zero-click y bloques del buscador",
            "escribe para la intención, no para la densidad",
            "limpia URLs débiles, refuerza las fuertes",
            "mira CTR y paneles — no solo rankings",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "Reaccionar a tendencias no es primera página al instante. Primero calidad de página y medición, luego meses de buildup de visibilidad.",
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "SEO para pequeño negocio",
          href: "/blog/seo-malyy-biznes/",
        },
      ],
    },
  ],
  related: [
    "sayt-ne-v-top",
    "snippet",
    "golosovoy-poisk",
    "yandeks-vebmaster",
    "autrich",
    "samostoyatelnoe-seo",
  ],
};

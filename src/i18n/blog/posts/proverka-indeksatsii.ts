import type { BlogPost } from "../../../data/blog";

/** EN overlay for proverka-indeksatsii — same structure as RU JSON. */
export const proverkaIndeksatsiiEn: BlogPost = {
  slug: "proverka-indeksatsii",
  title: "Checking site indexing in Google and Yandex",
  date: "2018-11-30",
  category: "SEO",
  cover: "/images/blog/proverka-indeksatsii/cover-en.webp",
  excerpt:
    "How to check whether pages are in the Google and Yandex index: Webmaster and Search Console, the site: operator, extensions, and typical reasons a URL isn’t indexed — without confusing crawl with index.",
  lead: [
    "Indexing means a URL enters the search database used for results. A crawl is faster and doesn’t guarantee the page stays in the index.",
    "Below: how to check status in webmaster panels, via `site:`, and related tools — and what to fix when things fail. Not every URL must be indexed: utility pages are closed separately. Webmaster/GSC UI changes; report meaning matters more.",
  ],
  faq: [
    {
      q: "Are crawl and indexing the same?",
      a: "No. A robot can visit and still not put the URL in the index (quality, duplicate, noindex, unavailability).",
    },
    {
      q: "Does site: show an exact page count?",
      a: "An order-of-magnitude guide, not accounting. More accurate — Webmaster and Search Console reports.",
    },
    {
      q: "Should I panic if a new site isn’t indexed yet?",
      a: "First check availability, sitemap, robots, and recrawl requests. Timelines differ by project; “exactly two weeks” isn’t a law.",
    },
    {
      q: "What if everything is indexed but there’s no traffic?",
      a: "Index ≠ rankings and clicks. Look at demand, snippets, competition, and content. Share of the core on page one is planned over months of work — typically two to six after you start.",
    },
    {
      q: "Must everything on the site be indexed?",
      a: "No. Filters, carts, and account areas are often closed. See the piece on closing pages from the index.",
    },
  ],
  sections: [
    {
      title: "Webmaster accounts",
      level: 2,
      paras: [
        "Yandex Webmaster and Google Search Console are the owner’s main source of truth: pages in search / index coverage, exclusions, crawl errors, trends.",
        "Verify site ownership, review indexed and excluded URL lists and reasons (noindex, soft 404, duplicate, discovered — not indexed, and similar — wording drifts). Index history helps catch sudden drops.",
      ],
      lists: [
        {
          intro: "Check first:",
          items: [
            "home and key landings in the index",
            "4xx/5xx crawl errors",
            "sitemap accepted",
            "no mass noindex",
            "was → is dynamics over the period",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "The site: operator and URL spot-checks",
      level: 2,
      paras: [
        "In the search box: `site:example.com` — a rough picture of indexed URLs. A huge Yandex vs Google gap is a reason to dig into tech and quality.",
        "Check a specific page by pasting the full URL or `site:` plus path. Empty results don’t always mean “forever out of index”: delays, regionality, cache reset. For a decision — URL inspection in GSC / page check in Webmaster.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "`site:domain` in both engines",
            "exact page URL",
            "branded query for the home page",
            "cross-check with the webmaster account",
          ],
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
      title: "Extensions and monitoring tools",
      level: 2,
      paras: [
        "SEO browser extensions speed up glances at title, meta robots, canonical, and a quick `site:`. They don’t replace the webmaster panel and don’t give “secret” engine data.",
        "Crawlers and SEO platforms help mass-check: robots, sitemap, status codes, duplicates. Free “everything at once” almost doesn’t exist — pick for site size.",
      ],
      links: [
        {
          label: "Chrome extensions for SEO",
          href: "/en/blog/chrome-rasshireniya-seo/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t treat one toolbar badge or peer plugin as index truth. The search engine account beats a browser add-on.",
        },
      ],
    },
    {
      title: "Why pages index poorly",
      level: 2,
      paras: [
        "A new site or section — normal delay. Speed-ups: internal links, sitemap, quality content, recrawl requests. No “in N days” guarantees.",
        "Typical blockers: Disallow in robots.txt, meta robots noindex, CMS “close the site,” duplicates and thin content, 4xx/5xx, slow server response, broken canonicals.",
      ],
      lists: [
        {
          intro: "Cause checklist:",
          items: [
            "robots.txt and meta robots",
            "sitemap and internal links",
            "status codes of key URLs",
            "duplicates and canonical",
            "content quality and uniqueness",
            "Webmaster/GSC errors",
          ],
        },
      ],
      links: [
        {
          label: "Closing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Indexed — but no traffic",
      level: 2,
      paras: [
        "An indexed page can sit far down or miss demand. Then fix content, snippets, structure, and links — not “hit recrawl again” forever.",
        "Watch dynamics: a sharp drop in indexed URL count is an incident signal (noindex, mirror ban, mass 404s), not a reason to celebrate a “cleanup” without analysis.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Indexing check = webmaster + selective `site:` + understanding exclusion reasons. Crawl ≠ index guarantee.",
        "Fix availability and robot directives, then content and demand. Index is the base — not the SEO finish line.",
      ],
    },
  ],
  closing: [
    "Cross-check key URLs in Webmaster and Search Console, spot-check `site:`, fix robots/noindex and crawl errors — that’s how index control becomes regular hygiene, not a one-off panic.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "operatory-poiska",
    "molodoy-sayt",
    "chrome-rasshireniya-seo",
  ],
};

/** ES overlay for proverka-indeksatsii — same structure as RU JSON / EN. */
export const proverkaIndeksatsiiEs: BlogPost = {
  slug: "proverka-indeksatsii",
  title: "Cómo comprobar la indexación del sitio en Google y Yandex",
  date: "2018-11-30",
  category: "SEO",
  cover: "/images/blog/proverka-indeksatsii/cover-es.webp",
  excerpt:
    "Cómo comprobar si las páginas están en el índice de Google y Yandex: Webmaster y Search Console, el operador site:, extensiones y motivos típicos de que una URL no indexe — sin confundir crawl con índice.",
  lead: [
    "Indexar significa que una URL entra en la base de búsqueda que alimenta resultados. Un crawl es más rápido y no garantiza que la página se quede en el índice.",
    "Abajo: cómo comprobar el status en paneles de webmaster, vía `site:` y tools afines — y qué arreglar cuando falla. No toda URL debe indexarse: las de utilidad se cierran aparte. La UI de Webmaster/GSC cambia; importa más el sentido del informe.",
  ],
  faq: [
    {
      q: "¿Crawl e indexación son lo mismo?",
      a: "No. Un robot puede visitar y aun así no meter la URL en el índice (calidad, duplicado, noindex, indisponibilidad).",
    },
    {
      q: "¿site: muestra un conteo exacto de páginas?",
      a: "Una guía de orden de magnitud, no contabilidad. Más preciso — informes de Webmaster y Search Console.",
    },
    {
      q: "¿Debo entrar en pánico si un sitio nuevo aún no indexa?",
      a: "Primero revisa disponibilidad, sitemap, robots y peticiones de recrawl. Los plazos difieren por proyecto; «exactamente dos semanas» no es ley.",
    },
    {
      q: "¿Y si todo está indexado pero no hay tráfico?",
      a: "Índice ≠ rankings y clics. Mira demanda, snippets, competencia y contenido. La cuota del núcleo en primera página se planifica en meses de trabajo — típicamente de dos a seis tras arrancar.",
    },
    {
      q: "¿Debe indexarse todo el sitio?",
      a: "No. Filtros, carritos y áreas de cuenta a menudo se cierran. Ver la pieza sobre cerrar páginas al índice.",
    },
  ],
  sections: [
    {
      title: "Cuentas de webmaster",
      level: 2,
      paras: [
        "Yandex Webmaster y Google Search Console son la fuente principal de verdad del dueño: páginas en búsqueda / cobertura de índice, exclusiones, errores de crawl, tendencias.",
        "Verifica la propiedad del sitio, revisa listas de URLs indexadas y excluidas y los motivos (noindex, soft 404, duplicado, discovered — not indexed y similares — el wording deriva). El historial de índice ayuda a pillar caídas bruscas.",
      ],
      lists: [
        {
          intro: "Revisa primero:",
          items: [
            "home y landings clave en el índice",
            "errores de crawl 4xx/5xx",
            "sitemap aceptado",
            "sin noindex masivo",
            "dinámica era → es en el periodo",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "El operador site: y checks puntuales de URL",
      level: 2,
      paras: [
        "En el cuadro de búsqueda: `site:example.com` — un cuadro aproximado de URLs indexadas. Un hueco enorme Yandex vs Google es motivo para indagar en técnica y calidad.",
        "Comprueba una página concreta pegando la URL completa o `site:` más path. Resultados vacíos no siempre significan «fuera del índice para siempre»: delays, regionalidad, reset de caché. Para decidir — URL inspection en GSC / chequeo de página en Webmaster.",
      ],
      lists: [
        {
          intro: "Checks rápidos:",
          items: [
            "`site:domain` en ambos motores",
            "URL exacta de la página",
            "query de marca para la home",
            "cruce con la cuenta de webmaster",
          ],
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
      title: "Extensiones y tools de monitorización",
      level: 2,
      paras: [
        "Las extensiones SEO del navegador aceleran vistazos a title, meta robots, canonical y un `site:` rápido. No sustituyen el panel de webmaster ni dan datos «secretos» del motor.",
        "Crawlers y plataformas SEO ayudan a checks masivos: robots, sitemap, códigos de estado, duplicados. Lo gratis «todo a la vez» casi no existe — elige según el tamaño del sitio.",
      ],
      links: [
        {
          label: "Extensiones de Chrome para SEO",
          href: "/blog/chrome-rasshireniya-seo/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No trates un badge de toolbar o un plugin de terceros como verdad del índice. La cuenta del buscador gana a un add-on del navegador.",
        },
      ],
    },
    {
      title: "Por qué las páginas indexan mal",
      level: 2,
      paras: [
        "Un sitio o sección nueva — delay normal. Aceleradores: enlaces internos, sitemap, contenido de calidad, peticiones de recrawl. Sin garantías de «en N días».",
        "Bloqueadores típicos: Disallow en robots.txt, meta robots noindex, «cerrar el sitio» del CMS, duplicados y contenido fino, 4xx/5xx, respuesta lenta del servidor, canónicos rotos.",
      ],
      lists: [
        {
          intro: "Checklist de causas:",
          items: [
            "robots.txt y meta robots",
            "sitemap y enlaces internos",
            "códigos de estado de URLs clave",
            "duplicados y canonical",
            "calidad y unicidad del contenido",
            "errores de Webmaster/GSC",
          ],
        },
      ],
      links: [
        {
          label: "Cerrar páginas al índice",
          href: "/es/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Sitio joven",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Indexado — pero sin tráfico",
      level: 2,
      paras: [
        "Una página indexada puede quedar muy abajo o fallar la demanda. Entonces arregla contenido, snippets, estructura y enlaces — no «pide recrawl otra vez» para siempre.",
        "Vigila la dinámica: una caída brusca del conteo de URLs indexadas es señal de incidente (noindex, ban de espejo, 404s masivos), no motivo para celebrar una «limpieza» sin análisis.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Check de indexación = webmaster + `site:` selectivo + entender motivos de exclusión. Crawl ≠ garantía de índice.",
        "Arregla disponibilidad y directivas de robots, luego contenido y demanda. El índice es la base — no la meta final del SEO.",
      ],
    },
  ],
  closing: [
    "Cruza URLs clave en Webmaster y Search Console, haz spot-check de `site:`, arregla robots/noindex y errores de crawl — así el control del índice pasa a higiene habitual, no a un pánico puntual.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "operatory-poiska",
    "molodoy-sayt",
    "chrome-rasshireniya-seo",
  ],
};

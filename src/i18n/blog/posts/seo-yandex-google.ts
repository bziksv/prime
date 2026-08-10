import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-yandex-google — same structure as RU JSON. */
export const seoYandexGoogleEn: BlogPost = {
  slug: "seo-yandex-google",
  title: "Yandex vs Google SEO: what actually differs",
  date: "2019-01-14",
  category: "SEO",
  cover: "/images/blog/seo-yandex-google/cover-en.webp",
  excerpt:
    "What’s shared and where Yandex and Google diverge: keywords, commercial signals, local SEO, webmaster tools, links, and content — a practical map for Russia, without the myth of “one algorithm for both.”",
  lead: [
    "On the Russian-speaking web you often need both engines. Yandex vs Google share depends on niche and region. The base is the same — useful pages, solid tech, clear intent. The accents differ: Yandex often weighs locality and commercial signals harder; Google brings global practices and its own tool stack.",
    "Here’s a working comparison for a Russia-focused site. In markets where Google stands alone, strategy leans toward “Western” SEO. Prep takes weeks; ranking growth for the keyword set is planned over 2–6 months after work starts — in both engines, with no promised date.",
  ],
  faq: [
    {
      q: "Can I run “Google only” SEO in Russia?",
      a: "You can if that’s where the audience is. You’ll often leave a real slice of Yandex demand on the table. Check analytics and channel share by niche.",
    },
    {
      q: "Same keyword set for both engines?",
      a: "Yes — one shared set. Cross-check frequencies and phrasing in Wordstat and Google tools / Search Console. Clusters and landings are usually one map.",
    },
    {
      q: "Are commercial factors more important in Yandex?",
      a: "On commercial queries in Russia, Yandex is often sensitive to contacts, prices, assortment, and trust. Google cares about page quality too, but RU teams more often run the “storefront” checklist against Yandex.",
    },
    {
      q: "Is a Webmaster region setting the same as Google’s local signals?",
      a: "Different accounts, different signals. Prove locality with content, NAP, and maps — not one checkbox.",
    },
    {
      q: "Do backlinks work the same way?",
      a: "Donor quality matters everywhere. Filter history and anchor weight have differed by engine — don’t blindly paste Western link-buy playbooks into Russia.",
    },
    {
      q: "Do I need two different sites?",
      a: "Usually no: one site, two panels, one keyword map. Separate domains are for countries or languages — not for “Yandex vs Google.”",
    },
    {
      q: "Do penalties and filters match across engines?",
      a: "No. Each has its own rules and history. Watch both accounts and don’t copy a “fix” from one engine onto the other.",
    },
    {
      q: "What about voice search and mobile?",
      a: "Mobile-first and speed matter for both. Voice leans on conversational long-tail, FAQs, and local profiles — see the separate article.",
    },
  ],
  sections: [
    {
      title: "Shared foundation, different accents",
      level: 2,
      paras: [
        "Both Yandex and Google want to answer the query with a useful document. Tech (HTTPS, speed, indexing), structure, unique content, and clear snippets matter in both.",
        "The gap is signal weight, demand-research tools, and local ecosystems. Build a strong site for people, then tune panels and SERP specifics.",
      ],
      lists: [
        {
          intro: "Shared minimum:",
          items: [
            "indexing and status codes",
            "mobile and speed",
            "clusters mapped to landings",
            "Yandex Webmaster + Google Search Console",
          ],
        },
      ],
      links: [
        {
          label: "On-page / internal factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Keywords and commercial signals",
      level: 2,
      paras: [
        "In Russia, frequency and phrasing are convenient via Wordstat, topped up with Search Console and ads data. Google-first markets lean harder on Search Console, planners, and English-language suites.",
        "Commercial factors — contacts, prices, shipping, assortment, reviews — often decide money queries in Yandex as much as “one more paragraph” of copy. For Google, answer completeness and E-E-A-T-style trust matter — without copy-pasting checklists just to look busy.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "one keyword set, two frequency / impression checks",
            "commercial blocks on money URLs",
            "no thin duplicates “one per engine”",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Commercial factors",
          href: "/en/blog/kommercheskie-faktory/",
        },
      ],
    },
    {
      title: "Local SEO, maps, and regions",
      level: 2,
      paras: [
        "Yandex has long been strong in geo-dependent results and directories. Google’s track is Maps / Business Profile. Offline businesses in Russia usually run both with consistent NAP.",
        "A region setting in the account is a signal — not a substitute for city pages, contacts, and real delivery terms.",
      ],
      lists: [
        {
          intro: "Local track:",
          items: [
            "Yandex Business / Directory",
            "Google Business Profile",
            "consistent name, address, phone",
            "reviews without faking",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Panels, tech, and links",
      level: 2,
      paras: [
        "Yandex Webmaster and Google Search Console are a required duo for Russia: crawl errors, coverage, queries, security. Don’t only fix one account.",
        "Judge the backlink profile carefully: quality over volume. Schemes tied to one market transfer poorly without filter-risk analysis.",
      ],
      lists: [
        {
          intro: "Control checklist:",
          items: [
            "both accounts connected",
            "sitemap and canonical aligned",
            "links without “just in case” spam",
            "manual checks after releases",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "When “Google only” and how content strategy shifts",
      level: 2,
      paras: [
        "In markets where Google dominates, informational content, native language, and country nuances carry more weight: fewer commercial head terms, the blog often drives organic. In Russia commercial and informational clusters sit differently — don’t paste a Western content plan line for line.",
        "Voice search, rich results, and mobile UX matter everywhere, but share and formats differ. Strengthen FAQs and speed without clinging to outdated “50% of queries will be voice by 2020” stats.",
      ],
      lists: [
        {
          intro: "International track — separately:",
          items: [
            "language and country locale",
            "hreflang for multilingual sites",
            "native content, not a calque",
            "legal and payment differences of the market",
          ],
        },
      ],
      links: [
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "How to run both without splitting the site",
      level: 2,
      paras: [
        "One canonical site, shared structure, visibility reported in both engines. Prioritize fixes by traffic and money — not the team’s favorite search engine.",
        "Don’t expect a perfect Google snippet to automatically win Yandex. One horizon for both: prep, then ranking growth over months.",
      ],
      lists: [
        {
          intro: "Cadence:",
          items: [
            "monthly — both accounts",
            "keyword set and ranks on priority clusters",
            "commercial and local work that matches the real business",
            "no promises of “page one in a week in both”",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Prep — often weeks to about a month. Ranking the keyword set in Yandex and Google is planned over 2–6 months after systematic work starts.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "google-biznes",
    "yandeks-vebmaster",
    "google-search-console",
    "kommercheskie-faktory",
    "effektivnost-seo",
  ],
};

/** ES overlay for seo-yandex-google — same structure as RU JSON / EN. */
export const seoYandexGoogleEs: BlogPost = {
  slug: "seo-yandex-google",
  title: "SEO Yandex vs Google: qué difiere de verdad",
  date: "2019-01-14",
  category: "SEO",
  cover: "/images/blog/seo-yandex-google/cover-es.webp",
  excerpt:
    "Qué se comparte y dónde divergen Yandex y Google: keywords, señales comerciales, SEO local, tools de webmaster, enlaces y contenido — un mapa práctico para Rusia, sin el mito de «un algoritmo para ambos».",
  lead: [
    "En la web de habla rusa a menudo hacen falta ambos motores. La cuota Yandex vs Google depende del nicho y la región. La base es la misma — páginas útiles, tech sólida, intención clara. Los acentos difieren: Yandex a menudo pesa más localidad y señales comerciales; Google trae prácticas globales y su propio stack de tools.",
    "Aquí una comparación útil para un sitio enfocado en Rusia. En mercados donde Google va solo, la estrategia se inclina al SEO «occidental». La prep lleva semanas; el crecimiento de rankings del set de keywords se planifica a 2–6 meses tras el arranque del trabajo — en ambos motores, sin fecha prometida.",
  ],
  faq: [
    {
      q: "¿Puedo correr SEO «solo Google» en Rusia?",
      a: "Puedes si ahí está la audiencia. A menudo dejas en la mesa un trozo real de demanda de Yandex. Revisa analytics y cuota de canal por nicho.",
    },
    {
      q: "¿El mismo set de keywords para ambos motores?",
      a: "Sí — un set compartido. Cruza frecuencias y phrasing en Wordstat y tools de Google / Search Console. Clusters y landings suelen ser un solo mapa.",
    },
    {
      q: "¿Los factores comerciales importan más en Yandex?",
      a: "En queries comerciales en Rusia, Yandex suele ser sensible a contactos, precios, surtido y confianza. A Google también le importa la calidad de página, pero los equipos RU más a menudo corren el checklist de «escaparate» contra Yandex.",
    },
    {
      q: "¿Un ajuste de región en Webmaster es lo mismo que las señales locales de Google?",
      a: "Cuentas distintas, señales distintas. Prueba localidad con contenido, NAP y mapas — no con un checkbox.",
    },
    {
      q: "¿Los backlinks funcionan igual?",
      a: "La calidad del donor importa en todos lados. La historia de filtros y el peso del anchor han diferido por motor — no pegues a ciegas playbooks occidentales de compra de enlaces en Rusia.",
    },
    {
      q: "¿Necesito dos sitios distintos?",
      a: "Normalmente no: un sitio, dos paneles, un mapa de keywords. Dominios separados son para países o idiomas — no para «Yandex vs Google».",
    },
    {
      q: "¿Penalties y filtros coinciden entre motores?",
      a: "No. Cada uno tiene sus reglas e historia. Mira ambas cuentas y no copies un «fix» de un motor al otro.",
    },
    {
      q: "¿Y la búsqueda por voz y el móvil?",
      a: "Mobile-first y velocidad importan en ambos. La voz se apoya en long-tail conversacional, FAQs y perfiles locales — ver el artículo aparte.",
    },
  ],
  sections: [
    {
      title: "Base compartida, acentos distintos",
      level: 2,
      paras: [
        "Tanto Yandex como Google quieren responder a la query con un documento útil. Tech (HTTPS, velocidad, indexación), estructura, contenido único y snippets claros importan en ambos.",
        "La brecha es el peso de las señales, las tools de investigación de demanda y los ecosistemas locales. Arma un sitio fuerte para personas, luego afina paneles y especificidades del SERP.",
      ],
      lists: [
        {
          intro: "Mínimo compartido:",
          items: [
            "indexación y códigos de estado",
            "móvil y velocidad",
            "clusters mapeados a landings",
            "Yandex Webmaster + Google Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Factores on-page / internos",
          href: "/es/blog/vnutrennie-faktory/",
        },
        {
          label: "Audit SEO técnico",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Keywords y señales comerciales",
      level: 2,
      paras: [
        "En Rusia, frecuencia y phrasing son cómodos vía Wordstat, complementados con Search Console y datos de ads. Los mercados Google-first se apoyan más en Search Console, planners y suites en inglés.",
        "Los factores comerciales — contactos, precios, envío, surtido, reseñas — a menudo deciden queries de dinero en Yandex tanto como «un párrafo más» de copy. Para Google importan la completitud de la respuesta y la confianza estilo E-E-A-T — sin pegar checklists solo para parecer ocupado.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "un set de keywords, dos chequeos de frecuencia / impresiones",
            "bloques comerciales en URLs de dinero",
            "sin duplicados thin «uno por motor»",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Factores comerciales",
          href: "/es/blog/kommercheskie-faktory/",
        },
      ],
    },
    {
      title: "SEO local, mapas y regiones",
      level: 2,
      paras: [
        "Yandex lleva tiempo fuerte en resultados geo-dependientes y directorios. La vía de Google es Maps / Business Profile. Los negocios offline en Rusia suelen correr ambos con NAP coherente.",
        "Un ajuste de región en la cuenta es una señal — no sustituye páginas de ciudad, contactos y términos reales de entrega.",
      ],
      lists: [
        {
          intro: "Vía local:",
          items: [
            "Yandex Business / Directory",
            "Google Business Profile",
            "nombre, dirección y teléfono coherentes",
            "reseñas sin fake",
          ],
        },
      ],
      links: [
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Paneles, tech y enlaces",
      level: 2,
      paras: [
        "Yandex Webmaster y Google Search Console son un dúo obligatorio para Rusia: errores de crawl, cobertura, queries, seguridad. No arregles solo una cuenta.",
        "Juzga el perfil de backlinks con cuidado: calidad sobre volumen. Los esquemas ligados a un mercado se transfieren mal sin análisis de riesgo de filtros.",
      ],
      lists: [
        {
          intro: "Checklist de control:",
          items: [
            "ambas cuentas conectadas",
            "sitemap y canonical alineados",
            "enlaces sin spam «por si acaso»",
            "chequeos manuales tras releases",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Cuándo «solo Google» y cómo cambia la estrategia de contenido",
      level: 2,
      paras: [
        "En mercados donde Google domina, pesan más el contenido informativo, el idioma nativo y los matices del país: menos head comerciales, el blog a menudo impulsa el orgánico. En Rusia los clusters comerciales e informativos se sientan distinto — no pegues un plan de contenido occidental línea a línea.",
        "Búsqueda por voz, rich results y UX móvil importan en todos lados, pero cuota y formatos difieren. Refuerza FAQs y velocidad sin aferrarte a stats obsoletas de «el 50% de las queries serán de voz en 2020».",
      ],
      lists: [
        {
          intro: "Vía internacional — aparte:",
          items: [
            "locale de idioma y país",
            "hreflang para sitios multilingües",
            "contenido nativo, no un calco",
            "diferencias legales y de pago del mercado",
          ],
        },
      ],
      links: [
        {
          label: "Búsqueda por voz",
          href: "/es/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Cómo correr ambos sin partir el sitio",
      level: 2,
      paras: [
        "Un sitio canónico, estructura compartida, visibilidad reportada en ambos motores. Prioriza fixes por tráfico y dinero — no por el buscador favorito del equipo.",
        "No esperes que un snippet perfecto de Google gane automáticamente en Yandex. Un horizonte para ambos: prep, luego crecimiento de rankings a meses.",
      ],
      lists: [
        {
          intro: "Cadencia:",
          items: [
            "mensual — ambas cuentas",
            "set de keywords y rankings en clusters prioritarios",
            "trabajo comercial y local que encaje con el negocio real",
            "sin promesas de «primera página en una semana en ambos»",
          ],
        },
      ],
      links: [
        {
          label: "Efectividad SEO",
          href: "/es/blog/effektivnost-seo/",
        },
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "Prep — a menudo semanas hasta cerca de un mes. Rankear el set de keywords en Yandex y Google se planifica a 2–6 meses tras el arranque del trabajo sistemático.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "google-biznes",
    "yandeks-vebmaster",
    "google-search-console",
    "kommercheskie-faktory",
    "effektivnost-seo",
  ],
};

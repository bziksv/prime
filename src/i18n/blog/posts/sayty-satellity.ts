import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayty-satellity — same structure as RU JSON. */
export const saytySatellityEn: BlogPost = {
  slug: "sayty-satellity",
  title: "Satellite sites: the risks, and why to skip them",
  date: "2020-02-05",
  category: "SEO",
  cover: "/images/blog/sayty-satellity/cover-en.webp",
  excerpt:
    "What satellite sites meant in SEO, why people built them historically, how they endanger the main domain, and what to do instead of a private network — without PBN how-tos.",
  lead: [
    "Satellites are helper sites built for links, spillover traffic, or crowding competitors out of the results in favor of a main project. In mainstream SEO that is a high-risk scheme: algorithms and reviewers connect the network, and sanctions hit budget and the main domain’s reputation.",
    "Below: what people meant by satellites, which types showed up, why the scheme fails, and what to do instead. This is a risk overview — not a guide to building or “successfully running” a multi-site grid.",
  ],
  faq: [
    {
      q: "Is a satellite always black-hat SEO?",
      a: "If the network exists to pass link equity and manipulate rankings — yes, that is manipulation by intent. A separate useful brand property with a real audience is a different story; it is not a “satellite” in the spam sense.",
    },
    {
      q: "Can you “carefully” keep a network and never get caught?",
      a: "There is no reliable guarantee. Shared patterns — hosting, templates, anchors, owners, outbound links — surface over time. Betting on stealth is a bad business strategy.",
    },
    {
      q: "How do satellites differ from buying links?",
      a: "Buying links is one-off or packaged placements on other people’s sites. Satellites are your own (or controlled) domains built for one goal. Both get dangerous at scale and when they look the same; see the pieces on buying links and backlink profiles.",
    },
    {
      q: "What if a network already exists?",
      a: "Do not grow it. Assess risk with an SEO: which domains are indexed, how they tie to the main site, whether filters apply. Often the sane move is to unwind spam outbound ties and strengthen the main site with content and tech.",
    },
    {
      q: "Will satellites get a young site onto page one faster?",
      a: "Not as a plan. Prep and indexing are one stage; growing the core in the results is planned over months. An “accelerator” network more often brings sanctions than lasting visibility.",
    },
    {
      q: "Are doorways and redirect wrappers satellites too?",
      a: "A related class: pages or domains with no value, built only for spillover. For users and search that is junk; for business it adds legal and reputational risk plus anti-spam systems.",
    },
    {
      q: "What replaces the idea of “your own link farm”?",
      a: "Useful content on the main domain, partnerships, PR, guest pieces on live sites, normal outreach. Donor quality beats a count of controlled “mirrors.”",
    },
    {
      q: "Should old satellites be deleted at once?",
      a: "It depends on ties and the index. Blind mass deletion without a plan can be worse than carefully removing links and applying noindex or closure. Decide after an audit — not from a chat tip.",
    },
  ],
  sections: [
    {
      title: "What satellite sites are",
      level: 2,
      paras: [
        "In SEO slang a satellite is a site that exists not for standalone audience value, but to help the main one: pass links, spill traffic, or occupy results next to commercial queries. Often it is a network of several (or dozens) domains with similar topics and weak content.",
        "Historically the scheme was popular when link equity and packing “your” domains into the results looked like an easy lever. Search engines now spot related networks, template content, and unnatural link profiles more reliably — so for a legitimate business, satellites rarely justify the risk.",
      ],
      lists: [
        {
          intro: "Typical scheme goals (historically):",
          items: [
            "grow outbound links to the main domain",
            "redirect visitors from secondary URLs",
            "occupy several result slots with “your” sites",
            "fake broad brand presence without real products",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Types that showed up",
      level: 2,
      paras: [
        "Old guides sorted satellites by “quality”: throwaways on free hosting, slightly livelier sites with rare posts, redirect wrappers, and fully generated pages. The split really means one thing — how much it looks like a normal project and how expensive it is to maintain.",
        "Even “dynamic” variants with visible updates do not make the scheme safe if the main job is manipulation, not a product. For readers, what matters is this: any type built for a network leaves traces and burns budget with no result guarantee.",
      ],
      lists: [
        {
          intro: "Signs of a “network” site (for diagnosis, not copying):",
          items: [
            "thin, template, or barely updated content",
            "many outbound links to one commercial domain",
            "same CMS, templates, WHOIS, or hosting across a domain group",
            "no service, contacts, policies, or real audience",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "We do not describe how to build multi-level ties, mask owners, or “successfully” run a network. Those instructions hurt business and break search rules.",
        },
      ],
    },
    {
      title: "Why the scheme breaks",
      level: 2,
      paras: [
        "Algorithms and manual review hunt manipulation patterns: domain clusters, unnatural anchors, outbound-link bursts, doorways. When the network surfaces, it is not only the “extra” domain that suffers — the main project the whole thing was for can get hit.",
        "Economics and ops hit separately: registration, hosting, content, index monitoring. After a filter or index drop, spend burns, and recovering the main site takes months of work — with no magic “rollback in a week.”",
      ],
      lists: [
        {
          intro: "Typical consequences:",
          items: [
            "filters and drops on commercial queries",
            "index loss for part or all of the network",
            "budget to rebuild the main site and content",
            "reputational damage if the scheme goes public",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Satellites and the backlink profile",
      level: 2,
      paras: [
        "A link from your own satellite rarely looks like a recommendation from a live publication. Profiles need diverse independent donors, topical fit, and user behavior — not thousands of URLs from one “farm.”",
        "If reports show the lion’s share of referring domains are your own lookalike sites, that is a red flag: the profile looks artificial. Fewer quality mentions beat a dense network of controlled pages.",
      ],
      lists: [
        {
          intro: "What to check in the profile:",
          items: [
            "share of links from related or lookalike domains",
            "anchor list (commercial-anchor stuffing)",
            "growth dynamics (sharp spikes with no PR reasons)",
            "whether “donors” have traffic and brand queries",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
    },
    {
      title: "What to do instead of a network",
      level: 2,
      paras: [
        "Strengthen one (or several real) products: structure, copy, speed, mobile, goal analytics. For mentions — partner pieces, industry media, maps and directories where clients are, targeted outreach without spam exchanges.",
        "If you need a second site, make it a separate product or regional project with its own value — not a wrapper. Then links and mentions look natural and do not depend on network “secrecy.”",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "audit the main site (tech, content, indexes)",
            "keywords and landings by intent — no duplicates",
            "measure traffic and leads (Metrica / Analytics)",
            "targeted mentions on live sites",
            "no new satellites or doorways",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "If contractors already pitch the scheme",
      level: 2,
      paras: [
        "Promises of “our network,” “guaranteed page one in a month via links,” and an “invisible farm” are a reason to change vendors. An honest plan separates site prep from ranking buildup: prep may take about a month; a solid share of the core in page-one visibility is planned over months — usually a 2–6 month horizon after work starts, with no date guarantee.",
        "Ask for transparency: what happens on your domain, which KPIs (traffic, leads, core share), which risks. Network schemes in contracts often hide as “content sites” — clarify who owns the domains and why they exist.",
      ],
      lists: [
        {
          intro: "Questions for the vendor:",
          items: [
            "which domains are created and in whose name",
            "is there a plan without a controlled link network",
            "how they measure results beyond “we bought links”",
            "what happens on a filter — responsibility and rollback",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Site prep is not page one. Core visibility builds month to month; a typical planned horizon is 2–6 months after work starts.",
        },
      ],
    },
  ],
  related: [
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "filtry-poiskovikov",
    "autrich",
    "molodoy-sayt",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for sayty-satellity — same structure as RU JSON / EN. */
export const saytySatellityEs: BlogPost = {
  slug: "sayty-satellity",
  title: "Sitios satélite: los riesgos, y por qué saltártelos",
  date: "2020-02-05",
  category: "SEO",
  cover: "/images/blog/sayty-satellity/cover.webp",
  excerpt:
    "Qué significaban los sitios satélite en SEO, por qué la gente los armaba históricamente, cómo ponen en peligro el dominio principal y qué hacer en vez de una red privada — sin how-tos de PBN.",
  lead: [
    "Los satélites son sitios auxiliares hechos para enlaces, tráfico de spillover o apartar competidores de los resultados a favor de un proyecto principal. En el SEO mainstream eso es un esquema de alto riesgo: algoritmos y revisores conectan la red, y las sanciones golpean el presupuesto y la reputación del dominio principal.",
    "Abajo: qué se entendía por satélites, qué tipos aparecieron, por qué el esquema falla y qué hacer en su lugar. Esto es un overview de riesgo — no una guía para armar o «correr con éxito» una red multi-sitio.",
  ],
  faq: [
    {
      q: "¿Un satélite es siempre SEO black-hat?",
      a: "Si la red existe para pasar equity de enlaces y manipular rankings — sí, eso es manipulación por intención. Una propiedad de marca útil aparte con audiencia real es otra historia; no es un «satélite» en el sentido de spam.",
    },
    {
      q: "¿Se puede mantener «con cuidado» una red y no pillar nunca?",
      a: "No hay garantía fiable. Patrones compartidos — hosting, plantillas, anclas, dueños, enlaces de salida — afloran con el tiempo. Apostar a la sigilosidad es una mala estrategia de negocio.",
    },
    {
      q: "¿En qué se diferencian los satélites de comprar enlaces?",
      a: "Comprar enlaces son placements puntuales o empaquetados en sitios ajenos. Los satélites son dominios tuyos (o controlados) hechos para un solo objetivo. Ambos se vuelven peligrosos a escala y cuando se parecen; mira las piezas de comprar enlaces y perfiles de backlinks.",
    },
    {
      q: "¿Y si ya existe una red?",
      a: "No la crezcas. Evalúa el riesgo con un SEO: qué dominios están indexados, cómo se atan al sitio principal, si hay filtros. A menudo el movimiento sensato es deshacer lazos de spam de salida y reforzar el sitio principal con contenido y técnica.",
    },
    {
      q: "¿Los satélites meten un sitio joven en primera página más rápido?",
      a: "No como plan. Preparación e indexación son una etapa; crecer el núcleo en los resultados se planifica a lo largo de meses. Una red «aceleradora» trae más a menudo sanciones que visibilidad duradera.",
    },
    {
      q: "¿Doorways y wrappers de redirect también son satélites?",
      a: "Una clase relacionada: páginas o dominios sin valor, hechos solo para spillover. Para usuarios y búsqueda eso es basura; para el negocio suma riesgo legal y reputacional más sistemas anti-spam.",
    },
    {
      q: "¿Qué sustituye la idea de «tu propia granja de enlaces»?",
      a: "Contenido útil en el dominio principal, partnerships, PR, piezas guest en sitios vivos, outreach normal. La calidad del donor gana a un conteo de «espejos» controlados.",
    },
    {
      q: "¿Hay que borrar los satélites viejos de golpe?",
      a: "Depende de los lazos y del índice. Una borrada masiva a ciegas sin plan puede ser peor que quitar enlaces con cuidado y aplicar noindex o cierre. Decide tras una auditoría — no por un tip de chat.",
    },
  ],
  sections: [
    {
      title: "Qué son los sitios satélite",
      level: 2,
      paras: [
        "En la jerga SEO un satélite es un sitio que existe no por valor de audiencia standalone, sino para ayudar al principal: pasar enlaces, derramar tráfico u ocupar resultados junto a consultas comerciales. A menudo es una red de varios (o docenas) dominios con temas parecidos y contenido flojo.",
        "Históricamente el esquema era popular cuando el equity de enlaces y empaquetar «tus» dominios en los resultados parecía una palanca fácil. Los buscadores ahora detectan redes relacionadas, contenido de plantilla y perfiles de enlaces antinaturales con más fiabilidad — así que para un negocio legítimo los satélites rara vez justifican el riesgo.",
      ],
      lists: [
        {
          intro: "Objetivos típicos del esquema (históricamente):",
          items: [
            "crecer enlaces de salida al dominio principal",
            "redirigir visitantes desde URLs secundarias",
            "ocupar varios slots de resultado con «tus» sitios",
            "fingir presencia amplia de marca sin productos reales",
          ],
        },
      ],
      links: [
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Tipos que aparecieron",
      level: 2,
      paras: [
        "Guías viejas ordenaban satélites por «calidad»: desechables en hosting gratis, sitios un poco más vivos con posts raros, wrappers de redirect y páginas totalmente generadas. El split en realidad significa una cosa — cuánto parece un proyecto normal y cuánto cuesta mantenerlo.",
        "Incluso las variantes «dinámicas» con updates visibles no hacen seguro el esquema si el trabajo principal es manipulación, no un producto. Para el lector lo que importa es esto: cualquier tipo hecho para una red deja huellas y quema presupuesto sin garantía de resultado.",
      ],
      lists: [
        {
          intro: "Señales de un sitio «de red» (para diagnóstico, no para copiar):",
          items: [
            "contenido fino, de plantilla o casi sin actualizar",
            "muchos enlaces de salida a un solo dominio comercial",
            "mismo CMS, plantillas, WHOIS o hosting en un grupo de dominios",
            "sin servicio, contactos, políticas ni audiencia real",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No describimos cómo armar lazos multinivel, enmascarar dueños o «correr con éxito» una red. Esas instrucciones dañan el negocio y rompen las reglas de búsqueda.",
        },
      ],
    },
    {
      title: "Por qué el esquema se rompe",
      level: 2,
      paras: [
        "Algoritmos y revisión manual cazan patrones de manipulación: clusters de dominios, anclas antinaturales, ráfagas de enlaces de salida, doorways. Cuando la red aflora, no solo sufre el dominio «extra» — puede pillar el proyecto principal por el que se montó todo.",
        "Economía y ops golpean aparte: registro, hosting, contenido, monitoreo de índice. Tras un filtro o una caída de índice, el gasto se quema, y recuperar el sitio principal lleva meses de trabajo — sin magia de «rollback en una semana».",
      ],
      lists: [
        {
          intro: "Consecuencias típicas:",
          items: [
            "filtros y caídas en consultas comerciales",
            "pérdida de índice de parte o de toda la red",
            "presupuesto para reconstruir el sitio principal y el contenido",
            "daño reputacional si el esquema se hace público",
          ],
        },
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Comprar enlaces",
          href: "/es/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Satélites y el perfil de backlinks",
      level: 2,
      paras: [
        "Un enlace desde tu propio satélite rara vez parece una recomendación de una publicación viva. Los perfiles necesitan donors independientes diversos, encaje temático y comportamiento de usuario — no miles de URLs de una sola «granja».",
        "Si los informes muestran que la parte del león de los dominios referidos son tus propios sitios lookalike, eso es una bandera roja: el perfil se ve artificial. Menos menciones de calidad ganan a una red densa de páginas controladas.",
      ],
      lists: [
        {
          intro: "Qué revisar en el perfil:",
          items: [
            "cuota de enlaces desde dominios relacionados o lookalike",
            "lista de anclas (stuffing de anclas comerciales)",
            "dinámica de crecimiento (picos bruscos sin motivos de PR)",
            "si los «donors» tienen tráfico y consultas de marca",
          ],
        },
      ],
      links: [
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
      ],
    },
    {
      title: "Qué hacer en vez de una red",
      level: 2,
      paras: [
        "Refuerza uno (o varios reales) productos: estructura, copy, velocidad, móvil, analítica de goals. Para menciones — piezas partner, medios de industria, mapas y directorios donde están los clientes, outreach dirigido sin exchanges de spam.",
        "Si necesitas un segundo sitio, hazlo un producto aparte o un proyecto regional con valor propio — no un wrapper. Entonces enlaces y menciones se ven naturales y no dependen del «secreto» de la red.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "auditar el sitio principal (técnica, contenido, índices)",
            "keywords y landings por intención — sin duplicados",
            "medir tráfico y leads (Metrica / Analytics)",
            "menciones dirigidas en sitios vivos",
            "sin satélites ni doorways nuevos",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Sitio joven",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Si los contratistas ya pitchan el esquema",
      level: 2,
      paras: [
        "Promesas de «nuestra red», «primera página garantizada en un mes vía enlaces» y una «granja invisible» son motivo para cambiar de vendor. Un plan honesto separa la preparación del sitio del buildup de rankings: la preparación puede llevar alrededor de un mes; una cuota sólida del núcleo en visibilidad de primera página se planifica a lo largo de meses — suele ser un horizonte de 2–6 meses tras el arranque del trabajo, sin garantía de fecha.",
        "Pide transparencia: qué pasa en tu dominio, qué KPIs (tráfico, leads, cuota del núcleo), qué riesgos. Los esquemas de red en contratos a menudo se esconden como «sitios de contenido» — aclara quién posee los dominios y por qué existen.",
      ],
      lists: [
        {
          intro: "Preguntas para el vendor:",
          items: [
            "qué dominios se crean y a nombre de quién",
            "hay un plan sin una red de enlaces controlada",
            "cómo miden resultados más allá de «compramos enlaces»",
            "qué pasa con un filtro — responsabilidad y rollback",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Plazos",
          text: "La preparación del sitio no es primera página. La visibilidad del núcleo se construye de mes a mes; un horizonte planificado típico es 2–6 meses tras el arranque del trabajo.",
        },
      ],
    },
  ],
  related: [
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "filtry-poiskovikov",
    "autrich",
    "molodoy-sayt",
    "samostoyatelnoe-seo",
  ],
};

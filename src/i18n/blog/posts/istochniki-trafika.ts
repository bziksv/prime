import type { BlogPost } from "../../../data/blog";

/** EN overlay for istochniki-trafika — same structure as RU JSON. */
export const istochnikiTrafikaEn: BlogPost = {
  slug: "istochniki-trafika",
  title: "Main website traffic sources: what to test",
  date: "2019-12-26",
  category: "Digital marketing",
  cover: "/images/blog/istochniki-trafika/cover-en.webp",
  excerpt:
    "A channel overview: organic, paid search, directories and aggregators, classifieds, social, email, display and ad networks — pros, cons, and a sane test order.",
  lead: [
    "There’s no magic traffic source: channels differ in speed, cost, and control. Beginners often grab a fresh tip without a landing or lead tracking — then conclude “the channel doesn’t work.”",
    "Below: the main source families, with strengths and weaknesses. The mix depends on niche, average check, and sales cycle — there’s no universal “best channel” ranking.",
  ],
  faq: [
    {
      q: "Which channel should I start with?",
      a: "Wherever you can validate demand fastest on your budget: often paid search or niche classifieds/aggregators. Prep organic in parallel — it ramps longer.",
    },
    {
      q: "Is organic free?",
      a: "No pay-per-click — yes, but you pay with work and time. Site prep takes about a month; core rankings usually build over 2–6 months — not “tomorrow after you publish.”",
    },
    {
      q: "Does paid search always burn budget?",
      a: "With broken keywords, landing, and analytics — yes. With a normal chain it gives a fast hypothesis test and controllable volume.",
    },
    {
      q: "Are social networks free traffic?",
      a: "Organic posts rarely feed commerce alone. A community needs content; ads need budget. Don’t confuse “create a group” with “get leads.”",
    },
    {
      q: "Why email if I have ads?",
      a: "Your own list is cheaper for repeat touches: content, triggers, abandoned cart. Building the list takes months; launching mail to a ready list is fast.",
    },
    {
      q: "How do I know a channel is mine?",
      a: "Not by “everyone does it,” but by CPA/ROMI and lead quality after an honest test with a goal and UTMs.",
    },
  ],
  sections: [
    {
      title: "Organic search",
      level: 2,
      paras: [
        "Search on a keyword set: pages answer queries, the site is technically healthy, content is maintained. It’s a long game: slow ramp, then inertia if quality doesn’t slip.",
        "Don’t expect page one overnight after edits. First prep (tech, copy, structure — about a month), then ranking growth planned over 2–6 months. Without new materials and fixes, positions weaken over time.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ no pay-per-click; effect can last years",
            "− slow start; harder to turn the volume tap",
            "− needs ongoing work and SERP competition",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Paid search",
      level: 2,
      paras: [
        "Ads in search and networks by queries and audiences. You need a keyword set, copy, landings, analytics goals. Click price is an auction: competitors and ad quality move the bid.",
        "Strength — speed of demand checks. Weakness — without negatives, geo, and conversion control, budget drains for nothing.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ fast launch and money feedback",
            "+ controllable volume with a working offer",
            "− ongoing spend; setup mistakes are expensive",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Directories, listings, and aggregators",
      level: 2,
      paras: [
        "Business directories, industry catalogs, ticket/hotel/service aggregators. For B2B often useful as a contact base and presence surface; for B2C — medicine, travel, “find nearby” services.",
        "Aggregators deliver leads for a commission or package — “cheap” traffic is relative: you pay with margin share and compete on the card. Basic listing is sometimes free; promotion is paid.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ demand is already on the platform",
            "+ in some niches the main channel",
            "− competition and dependence on aggregator rules",
            "− weak funnel control outside your card",
          ],
        },
      ],
    },
    {
      title: "Classified boards",
      level: 2,
      paras: [
        "Classifieds — demand for goods and services here and now. In niches with a high check and expensive paid search they sometimes deliver a cheaper lead with a solid listing and manager reply.",
        "A free basic format hits competition fast; in-platform promotion is a separate budget. Results are less predictable than a search-ads account.",
      ],
    },
    {
      title: "Social: community and ads",
      level: 2,
      paras: [
        "Two different tracks. Community — long content and trust; creating a group alone isn’t traffic. Social ads — fast reach by interests and lookalike logic, but not for every B2B purchase with a narrow decision-maker.",
        "Count lead cost and dialogue quality, not only followers. Organic without regular posts goes to sleep even with a loyal base.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ community: low cash entry barrier",
            "+ ads: fast creative and offer tests",
            "− content and moderation take time",
            "− not every product is found via interests",
          ],
        },
      ],
      links: [
        {
          label: "Free advertising",
          href: "/en/blog/besplatnaya-reklama/",
        },
      ],
    },
    {
      title: "Email lists and newsletters",
      level: 2,
      paras: [
        "Consent-based email: content (news, usefulness) and triggers (abandoned cart, post-purchase, reactivation). It’s a repeat-touch channel, not a magic source of new people off the street.",
        "Lists take months to build (lead magnet, forms, quiz); launching a series to a ready list takes days. Unsubscribes are normal: inflow should beat outflow.",
      ],
      lists: [
        {
          intro: "Pros / cons:",
          items: [
            "+ cheap repeat touches",
            "+ flexible scenarios by funnel stage",
            "− slow list building",
            "− needs discipline and mailing rules compliance",
          ],
        },
      ],
    },
    {
      title: "Display and ad networks",
      level: 2,
      paras: [
        "Banners and articles on third-party sites, teaser and display networks, network remarketing. Direct placements are harder to measure; networks give an account and stats, but less control over the specific publisher site.",
        "Network retargeting chases people who already visited — it strengthens the funnel, it doesn’t replace first contact. Compare to search by CPA, not “pretty reach.”",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Ad banner",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "How to choose and test",
      level: 2,
      paras: [
        "Landing, offer, and lead tracking first — then channel budget. Test sequentially or with narrow parallel hypotheses; lock UTMs and test length in advance.",
        "One channel rarely covers everything: organic and the list build assets; paid channels give speed. The outcome is a mix under margin — not every channel at once on a shoestring.",
      ],
      notes: [
        {
          title: "Important",
          text: "A drop in one channel is a reason to diagnose the cause — not to shut everything off at once. See the traffic-drop article.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
  ],
  closing: [
    "Traffic sources differ in speed and cost of error. Prep measurement, test one or two niche-fit channels, and scale what delivers quality leads — without chasing “free forever.”",
  ],
  related: [
    "brendovyy-trafik",
    "snizhenie-trafika",
    "kontekst-i-seo",
    "besplatnaya-reklama",
    "retargeting",
    "utm-metki",
  ],
};

/** ES overlay for istochniki-trafika — same structure as RU JSON / EN. */
export const istochnikiTrafikaEs: BlogPost = {
  slug: "istochniki-trafika",
  title: "Principales fuentes de tráfico web: qué probar",
  date: "2019-12-26",
  category: "Digital marketing",
  cover: "/images/blog/istochniki-trafika/cover-es.webp",
  excerpt:
    "Panorama de canales: orgánico, paid search, directorios y agregadores, clasificados, social, email, display y redes de ads — pros, contras y un orden sensato de test.",
  lead: [
    "No hay una fuente mágica de tráfico: los canales difieren en velocidad, coste y control. Los principiantes a menudo agarran un tip fresco sin landing ni tracking de leads — y concluyen «el canal no funciona».",
    "Abajo: las familias principales de fuentes, con fortalezas y debilidades. El mix depende del nicho, ticket medio y ciclo de venta — no hay un «mejor canal» universal.",
  ],
  faq: [
    {
      q: "¿Con qué canal empiezo?",
      a: "Donde puedas validar demanda más rápido con tu presupuesto: a menudo paid search o clasificados/agregadores de nicho. Prepara el orgánico en paralelo — escala más lento.",
    },
    {
      q: "¿El orgánico es gratis?",
      a: "Sin pago por clic — sí, pero pagas con trabajo y tiempo. La prep del sitio lleva cerca de un mes; los rankings del núcleo suelen construirse en 2–6 meses — no «mañana tras publicar».",
    },
    {
      q: "¿El paid search siempre quema presupuesto?",
      a: "Con keywords, landing y analytics rotos — sí. Con una cadena normal da un test rápido de hipótesis y volumen controlable.",
    },
    {
      q: "¿Las redes social son tráfico gratis?",
      a: "Los posts orgánicos rara vez alimentan comercio solos. Una comunidad necesita contenido; los ads, presupuesto. No confundas «crear un grupo» con «conseguir leads».",
    },
    {
      q: "¿Para qué email si ya tengo ads?",
      a: "Tu propia lista es más barata para toques repetidos: contenido, triggers, carrito abandonado. Construir la lista lleva meses; lanzar mail a una lista lista es rápido.",
    },
    {
      q: "¿Cómo sé que un canal es mío?",
      a: "No por «todo el mundo lo hace», sino por CPA/ROMI y calidad del lead tras un test honesto con un goal y UTMs.",
    },
  ],
  sections: [
    {
      title: "Búsqueda orgánica",
      level: 2,
      paras: [
        "Búsqueda sobre un set de keywords: las páginas responden a consultas, el sitio está sano en técnica, el contenido se mantiene. Es juego largo: arranque lento, luego inercia si la calidad no se cae.",
        "No esperes primera página de un día para otro tras edits. Primero prep (técnica, copy, estructura — cerca de un mes), luego crecimiento de rankings planificado a 2–6 meses. Sin materiales nuevos y fixes, las posiciones se debilitan con el tiempo.",
      ],
      lists: [
        {
          intro: "Pros / contras:",
          items: [
            "+ sin pago por clic; el efecto puede durar años",
            "− arranque lento; más difícil abrir el grifo de volumen",
            "− necesita trabajo continuo y competencia en el SERP",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
      ],
    },
    {
      title: "Paid search",
      level: 2,
      paras: [
        "Ads en búsqueda y redes por consultas y audiencias. Hace falta set de keywords, copy, landings, goals de analytics. El precio del clic es una subasta: competidores y calidad del anuncio mueven la puja.",
        "Fuerza — velocidad para chequear demanda. Debilidad — sin negativos, geo y control de conversión, el presupuesto se va a nada.",
      ],
      lists: [
        {
          intro: "Pros / contras:",
          items: [
            "+ lanzamiento rápido y feedback en dinero",
            "+ volumen controlable con una oferta que funciona",
            "− gasto continuo; los errores de setup salen caros",
          ],
        },
      ],
      links: [
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Directorios, listings y agregadores",
      level: 2,
      paras: [
        "Directorios de negocio, catálogos de industria, agregadores de tickets/hoteles/servicios. En B2B a menudo útiles como base de contactos y superficie de presencia; en B2C — medicina, viajes, servicios «cerca de mí».",
        "Los agregadores entregan leads a comisión o paquete — el tráfico «barato» es relativo: pagas con cuota de margen y compites en la ficha. El listing básico a veces es gratis; la promoción, de pago.",
      ],
      lists: [
        {
          intro: "Pros / contras:",
          items: [
            "+ la demanda ya está en la plataforma",
            "+ en algunos nichos es el canal principal",
            "− competencia y dependencia de las reglas del agregador",
            "− poco control del funnel fuera de tu ficha",
          ],
        },
      ],
    },
    {
      title: "Tablones de clasificados",
      level: 2,
      paras: [
        "Clasificados — demanda de bienes y servicios aquí y ahora. En nichos con ticket alto y paid search caro a veces entregan un lead más barato con un anuncio sólido y respuesta del manager.",
        "Un formato básico gratis choca con la competencia rápido; la promoción dentro de la plataforma es presupuesto aparte. Los resultados son menos predecibles que una cuenta de search-ads.",
      ],
    },
    {
      title: "Social: comunidad y ads",
      level: 2,
      paras: [
        "Dos pistas distintas. Comunidad — contenido largo y confianza; crear un grupo solo no es tráfico. Ads social — alcance rápido por intereses y lógica lookalike, pero no para toda compra B2B con un decision-maker estrecho.",
        "Cuenta el coste del lead y la calidad del diálogo, no solo followers. El orgánico sin posts regulares se duerme aunque haya base leal.",
      ],
      lists: [
        {
          intro: "Pros / contras:",
          items: [
            "+ comunidad: barrera de entrada en efectivo baja",
            "+ ads: tests rápidos de creativo y oferta",
            "− contenido y moderación llevan tiempo",
            "− no todo producto se encuentra vía intereses",
          ],
        },
      ],
      links: [
        {
          label: "Publicidad gratuita",
          href: "/blog/besplatnaya-reklama/",
        },
      ],
    },
    {
      title: "Listas de email y newsletters",
      level: 2,
      paras: [
        "Email con consentimiento: contenido (noticias, utilidad) y triggers (carrito abandonado, post-compra, reactivación). Es un canal de toques repetidos, no una fuente mágica de gente nueva de la calle.",
        "Las listas tardan meses en construirse (lead magnet, formularios, quiz); lanzar una serie a una lista lista lleva días. Las bajas son normales: la entrada debe superar la salida.",
      ],
      lists: [
        {
          intro: "Pros / contras:",
          items: [
            "+ toques repetidos baratos",
            "+ escenarios flexibles por etapa del funnel",
            "− construcción lenta de la lista",
            "− necesita disciplina y cumplimiento de reglas de mailing",
          ],
        },
      ],
    },
    {
      title: "Display y redes de ads",
      level: 2,
      paras: [
        "Banners y artículos en sitios de terceros, redes teaser y display, remarketing de red. Los emplazamientos directos son más duros de medir; las redes dan cuenta y stats, pero menos control sobre el sitio publisher concreto.",
        "El retargeting de red persigue a quien ya visitó — refuerza el funnel, no sustituye el primer contacto. Compara con búsqueda por CPA, no por «alcance bonito».",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
        {
          label: "Banner publicitario",
          href: "/es/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "Cómo elegir y probar",
      level: 2,
      paras: [
        "Primero landing, oferta y tracking de leads — luego presupuesto de canal. Prueba en secuencia o con hipótesis paralelas estrechas; fija UTMs y duración del test de antemano.",
        "Un canal rara vez lo cubre todo: el orgánico y la lista construyen activos; los canales de pago dan velocidad. El resultado es un mix bajo margen — no todos los canales a la vez con cuatro duros.",
      ],
      notes: [
        {
          title: "Importante",
          text: "Una caída en un canal es motivo para diagnosticar la causa — no para apagarlo todo de golpe. Ver el artículo sobre bajada de tráfico.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Bajada de tráfico",
          href: "/es/blog/snizhenie-trafika/",
        },
      ],
    },
  ],
  closing: [
    "Las fuentes de tráfico difieren en velocidad y coste del error. Prepara medición, prueba uno o dos canales que encajen con el nicho y escala lo que entrega leads de calidad — sin perseguir «gratis para siempre».",
  ],
  related: [
    "brendovyy-trafik",
    "snizhenie-trafika",
    "kontekst-i-seo",
    "besplatnaya-reklama",
    "retargeting",
    "utm-metki",
  ],
};

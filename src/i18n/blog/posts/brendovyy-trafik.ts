import type { BlogPost } from "../../../data/blog";

/** EN overlay for brendovyy-trafik — same structure as RU JSON. */
export const brendovyyTrafikEn: BlogPost = {
  slug: "brendovyy-trafik",
  title: "Branded traffic: what it is and how to grow it",
  date: "2019-09-19",
  category: "SEO",
  cover: "/images/blog/brendovyy-trafik/cover-en.webp",
  excerpt:
    "What counts as branded traffic, why it matters for business and SEO, how to grow name awareness, and how to measure the share in Metrika and Search Console.",
  lead: [
    "Branded traffic is visits from queries with the company name, product, or a stable brand spelling (including typos and transliteration). These are people already looking for you — not “service + city” at random.",
    "Below: why it helps, how to grow it with content, maps, ads, and PR, and how to measure it in analytics. Brand doesn’t replace semantics and site tech; it’s a separate demand and resilience layer.",
  ],
  faq: [
    {
      q: "Is branded traffic the same as direct visits?",
      a: "Not only. Direct is typing a URL or using a bookmark. Brand is more often seen in search: queries with the brand name. Some direct visits are branded in meaning, but reports treat them as different cuts.",
    },
    {
      q: "Does it guarantee page one on commercial queries?",
      a: "No. A strong brand helps CTR and resilience, but non-brand ranks depend on pages, competition, and work. Prep — about a month; core page-one share planned 2–6 months.",
    },
    {
      q: "What brand traffic share is normal?",
      a: "Depends on niche and stage. A known local player’s share is higher; a new site’s is lower. Watch the trend and brand conversion — not an “average % from an article.”",
    },
    {
      q: "Do you need paid search on the brand name?",
      a: "Often yes — as protection from competitors bidding on your name. Plus control of the snippet and landing.",
    },
    {
      q: "How do you tell brand from a transactional query?",
      a: "There’s a name/trademark/stable brand product. “Buy windows Voronezh” isn’t brand; “Acme Windows Voronezh” is branded (or mixed).",
    },
    {
      q: "Is SimilarWeb required?",
      a: "No. For your own data, Metrika, Analytics, and Search Console / Webmaster are enough. SimilarWeb is a rough read of other sites.",
    },
    {
      q: "Does the founder’s personal brand count?",
      a: "Yes, if people search the person’s name for the company/services. That’s an adjacent track — see the personal brand article.",
    },
    {
      q: "Can you fake branded search queries?",
      a: "No point and high risk. Brand growth is awareness and repeat touches — not bots on a keyword.",
    },
  ],
  sections: [
    {
      title: "What branded traffic is",
      level: 2,
      paras: [
        "Brand in the user’s head is a name, logo, tone, and promised outcome. In search it’s queries where your name or unique product clearly appears.",
        "Such visits are usually warmer: a higher share of goal actions, lower random bounce. For SEO, brand is a demand and awareness signal — not a button to lift all ranks.",
      ],
      lists: [
        {
          intro: "Examples of branded phrasing:",
          items: [
            "company name",
            "name + “website” / “account” / “reviews”",
            "transliteration and common typos",
            "a product or line name searched as a brand",
          ],
        },
      ],
      links: [
        {
          label: "Personal brand",
          href: "/en/blog/lichnyy-brend/",
        },
      ],
    },
    {
      title: "Why grow branded demand",
      level: 2,
      paras: [
        "In competitive niches non-brand SERP jumps with updates and new players. Queries with your name are steadier: the person already chose “who”; what’s left is “where to click.”",
        "Higher brand SERP CTR, better conversion, more direct and return visits, natural mentions and links. Algorithms change — brand demand stays a marketing asset, not only SEO.",
      ],
      lists: [
        {
          intro: "Practical benefits:",
          items: [
            "channel resilience when non-brand dips",
            "protection from competitors intercepting demand with ads",
            "a shorter path to a deal",
            "a clear KPI for PR and offline activity",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t confuse branded visit growth with faked engagement. Search engines fight manipulation separately; brand is built by touches, not bots.",
        },
      ],
    },
    {
      title: "How to raise awareness and brand traffic",
      level: 2,
      paras: [
        "The base is a strong site: services/catalog, contacts, shipping and payment, clear copy, updates. Content that answers niche questions brings non-brand demand and sticks the name.",
        "Next — maps and directories (consistent NAP), careful presence on industry platforms without link spam, social and expert materials, offline (signage, print, events) with the same brand spelling.",
      ],
      lists: [
        {
          intro: "Working lever set:",
          items: [
            "site content and structure",
            "map profiles",
            "paid search: attack (your brand terms) and defense from others’ ads on the brand",
            "social and email with regular touchpoints",
            "PR, guest pieces, partnerships — name mention without toxic spam",
            "one naming across channels (how the brand is spelled)",
          ],
        },
      ],
      links: [
        {
          label: "Google Maps profile",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Ads, social, and “guerrilla” mentions",
      level: 2,
      paras: [
        "Paid search on the brand holds the SERP above competitors buying your name. Banners and retargeting remind people who already visited the site.",
        "On social, regularity, usefulness, and a company face work — not cross-posting empty announcements. Guerrilla mentions without links only make sense as honest expert dialogue within platform rules; native directory spam and spam comments hurt.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "faking queries and behavioral signals",
            "black PR and fake reviews",
            "changing brand spelling every six months",
            "promises of “brand = page one in a month”",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Fake engagement risks",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "How to measure branded traffic",
      level: 2,
      paras: [
        "In Yandex Metrika, look at search-phrase / source reports: a segment or filter on the name, transliteration, and common variants. Cross-check goals — brand conversion is usually higher.",
        "In Google Search Console (Performance → query filter) set a list of brand variants. In Google Analytics — Organic Search + query filter if query data is available; otherwise lean on GSC + Metrika.",
      ],
      lists: [
        {
          intro: "Mini metric set:",
          items: [
            "visits and brand share of organic",
            "CTR and ranks on brand queries in GSC/Webmaster",
            "conversion and revenue from the brand segment",
            "month-to-month dynamics vs non-brand",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Tie-in with SEO and timeline expectations",
      level: 2,
      paras: [
        "Brand and classic SEO reinforce each other: non-brand demand introduces you; brand closes the deal and brings people back. Don’t expect one video or banner to turn on brand traffic forever — you need a touch system.",
        "Awareness builds over months. In parallel the site is prepared for promotion (tech, semantics, copy — about a month as a guide), and non-brand core ranks build planned over 2–6 months after work starts.",
      ],
      lists: [
        {
          intro: "Monthly control checklist:",
          items: [
            "brand share of organic",
            "whether others run ads on the brand",
            "consistent NAP on maps",
            "no needless “brand vs commercial” cannibalization on one landing",
          ],
        },
      ],
      links: [
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "lichnyy-brend",
    "snizhenie-trafika",
    "google-biznes",
    "metrika-tseli",
    "google-search-console",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for brendovyy-trafik — same structure as RU JSON / EN. */
export const brendovyyTrafikEs: BlogPost = {
  slug: "brendovyy-trafik",
  title: "Tráfico de marca: qué es y cómo hacerlo crecer",
  date: "2019-09-19",
  category: "SEO",
  cover: "/images/blog/brendovyy-trafik/cover-es.webp",
  excerpt:
    "Qué cuenta como tráfico de marca, por qué importa para el negocio y el SEO, cómo crecer el awareness del nombre y cómo medir la cuota en Metrika y Search Console.",
  lead: [
    "El tráfico de marca son visitas desde consultas con el nombre de la empresa, el producto o una grafía estable de marca (incluidos typos y transliteración). Son personas que ya te buscan — no «servicio + ciudad» al azar.",
    "Abajo: por qué ayuda, cómo hacerlo crecer con contenido, mapas, ads y PR, y cómo medirlo en analytics. La marca no sustituye la semántica ni la técnica del sitio; es una capa aparte de demanda y resiliencia.",
  ],
  faq: [
    {
      q: "¿El tráfico de marca es lo mismo que las visitas directas?",
      a: "No solo. Directo es teclear una URL o usar un favorito. La marca se ve más a menudo en búsqueda: consultas con el nombre de marca. Parte de las visitas directas son de marca en sentido, pero los informes las tratan como cortes distintos.",
    },
    {
      q: "¿Garantiza la primera página en consultas comerciales?",
      a: "No. Una marca fuerte ayuda al CTR y a la resiliencia, pero los rankings no de marca dependen de páginas, competencia y trabajo. Prep — cerca de un mes; la cuota de núcleo en primera página se planifica a 2–6 meses.",
    },
    {
      q: "¿Qué cuota de tráfico de marca es normal?",
      a: "Depende del nicho y de la etapa. Un jugador local conocido tiene más cuota; un sitio nuevo, menos. Mira la tendencia y la conversión de marca — no un «% medio de un artículo».",
    },
    {
      q: "¿Hace falta paid search sobre el nombre de marca?",
      a: "A menudo sí — como protección frente a competidores que pujan por tu nombre. Más control del snippet y del landing.",
    },
    {
      q: "¿Cómo distinguir marca de una consulta transaccional?",
      a: "Hay un nombre/marca registrada/producto de marca estable. «Comprar ventanas Madrid» no es marca; «Ventanas Acme Madrid» es de marca (o mixta).",
    },
    {
      q: "¿Es obligatorio SimilarWeb?",
      a: "No. Para tus propios datos bastan Metrika, Analytics y Search Console / Webmaster. SimilarWeb es una lectura aproximada de otros sitios.",
    },
    {
      q: "¿Cuenta la marca personal del fundador?",
      a: "Sí, si la gente busca el nombre de la persona por la empresa/servicios. Es una pista adyacente — ver el artículo de marca personal.",
    },
    {
      q: "¿Se pueden falsificar consultas de búsqueda de marca?",
      a: "No tiene sentido y el riesgo es alto. El crecimiento de marca es awareness y toques repetidos — no bots sobre una keyword.",
    },
  ],
  sections: [
    {
      title: "Qué es el tráfico de marca",
      level: 2,
      paras: [
        "La marca en la cabeza del usuario es un nombre, logo, tono y resultado prometido. En búsqueda son consultas donde aparece con claridad tu nombre o un producto único.",
        "Esas visitas suelen ser más cálidas: mayor cuota de acciones objetivo, menos bounce al azar. Para SEO, la marca es una señal de demanda y awareness — no un botón para subir todos los rankings.",
      ],
      lists: [
        {
          intro: "Ejemplos de formulación de marca:",
          items: [
            "nombre de la empresa",
            "nombre + «sitio» / «cuenta» / «reseñas»",
            "transliteración y typos habituales",
            "nombre de producto o línea buscado como marca",
          ],
        },
      ],
      links: [
        {
          label: "Marca personal",
          href: "/es/blog/lichnyy-brend/",
        },
      ],
    },
    {
      title: "Por qué hacer crecer la demanda de marca",
      level: 2,
      paras: [
        "En nichos competitivos el SERP no de marca salta con updates y jugadores nuevos. Las consultas con tu nombre son más estables: la persona ya eligió «quién»; queda «dónde hacer clic».",
        "Mayor CTR de marca en el SERP, mejor conversión, más visitas directas y de retorno, menciones y enlaces naturales. Los algoritmos cambian — la demanda de marca sigue siendo un activo de marketing, no solo de SEO.",
      ],
      lists: [
        {
          intro: "Beneficios prácticos:",
          items: [
            "resiliencia del canal cuando baja lo no de marca",
            "protección frente a competidores que interceptan demanda con ads",
            "un camino más corto al trato",
            "un KPI claro para PR y actividad offline",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No confundas el crecimiento de visitas de marca con engagement falsificado. Los buscadores combaten la manipulación aparte; la marca se construye con toques, no con bots.",
        },
      ],
    },
    {
      title: "Cómo subir awareness y tráfico de marca",
      level: 2,
      paras: [
        "La base es un sitio fuerte: servicios/catálogo, contactos, envío y pago, copy claro, actualizaciones. El contenido que responde preguntas del nicho trae demanda no de marca y pega el nombre.",
        "Luego — mapas y directorios (NAP coherente), presencia cuidadosa en plataformas de sector sin link spam, redes y materiales de experto, offline (rótulos, print, eventos) con la misma grafía de marca.",
      ],
      lists: [
        {
          intro: "Set de palancas que funciona:",
          items: [
            "contenido y estructura del sitio",
            "perfiles en mapas",
            "paid search: ataque (tus términos de marca) y defensa frente a ads ajenos sobre la marca",
            "redes y email con toques regulares",
            "PR, piezas invitadas, partnerships — mención del nombre sin spam tóxico",
            "un naming en todos los canales (cómo se escribe la marca)",
          ],
        },
      ],
      links: [
        {
          label: "Perfil de Google Maps",
          href: "/es/blog/google-biznes/",
        },
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Ads, redes y menciones «guerrillera»",
      level: 2,
      paras: [
        "El paid search sobre la marca sostiene el SERP por encima de competidores que compran tu nombre. Banners y retargeting recuerdan a quien ya visitó el sitio.",
        "En redes funcionan la regularidad, la utilidad y una cara de la empresa — no el cross-posting de anuncios vacíos. Las menciones guerrilleras sin enlaces solo tienen sentido como diálogo experto honesto dentro de las reglas de la plataforma; el spam nativo de directorios y comentarios spam duele.",
      ],
      lists: [
        {
          intro: "Qué evitar:",
          items: [
            "falsificar consultas y señales de comportamiento",
            "PR negro y reseñas falsas",
            "cambiar la grafía de marca cada seis meses",
            "promesas de «marca = primera página en un mes»",
          ],
        },
      ],
      links: [
        {
          label: "Pujas en Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
        {
          label: "Riesgos del engagement falso",
          href: "/es/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "Cómo medir el tráfico de marca",
      level: 2,
      paras: [
        "En Yandex Metrika mira informes de frases de búsqueda / fuente: un segmento o filtro sobre el nombre, transliteración y variantes habituales. Cruza con goals — la conversión de marca suele ser más alta.",
        "En Google Search Console (Performance → filtro de consulta) fija una lista de variantes de marca. En Google Analytics — Organic Search + filtro de consulta si hay datos de queries; si no, apóyate en GSC + Metrika.",
      ],
      lists: [
        {
          intro: "Mini set de métricas:",
          items: [
            "visitas y cuota de marca del orgánico",
            "CTR y rankings en consultas de marca en GSC/Webmaster",
            "conversión y revenue del segmento de marca",
            "dinámica mes a mes vs no de marca",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Metrika",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Google Search Console",
          href: "/es/blog/google-search-console/",
        },
      ],
    },
    {
      title: "Encaje con SEO y expectativas de plazos",
      level: 2,
      paras: [
        "Marca y SEO clásico se refuerzan: la demanda no de marca te presenta; la marca cierra el trato y hace volver a la gente. No esperes que un vídeo o un banner encienda el tráfico de marca para siempre — hace falta un sistema de toques.",
        "El awareness se construye a lo largo de meses. En paralelo el sitio se prepara para la promoción (técnica, semántica, copy — cerca de un mes como guía), y los rankings del núcleo no de marca se planifican a 2–6 meses tras arrancar el trabajo.",
      ],
      lists: [
        {
          intro: "Checklist de control mensual:",
          items: [
            "cuota de marca del orgánico",
            "si otros lanzan ads sobre la marca",
            "NAP coherente en mapas",
            "sin canibalización inútil «marca vs comercial» en un landing",
          ],
        },
      ],
      links: [
        {
          label: "Caída de tráfico",
          href: "/es/blog/snizhenie-trafika/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "lichnyy-brend",
    "snizhenie-trafika",
    "google-biznes",
    "metrika-tseli",
    "google-search-console",
    "samostoyatelnoe-seo",
  ],
};

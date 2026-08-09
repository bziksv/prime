import type { BlogPost } from "../../../data/blog";

/** EN overlay for kommercheskie-faktory — same structure as RU JSON. */
export const kommercheskieFaktoryEn: BlogPost = {
  slug: "kommercheskie-faktory",
  title: "Commercial factors in SEO: what builds trust",
  date: "2019-06-20",
  category: "SEO",
  cover: "/images/blog/kommercheskie-faktory/cover-en.webp",
  excerpt:
    "Contacts, assortment, purchase terms, “about the company,” and map/directory services — a practical commercial-factors checklist without the myth that a checkbox equals page one.",
  lead: [
    "Commercial factors are on-site signals that help a person trust and buy: clear contacts, selection and prices, delivery and payment terms, company transparency, reviews, and useful services.",
    "Search engines don’t publish a full list of ranking buttons, but in practice a strong commercial setup more often matches better conversion and holds commercial SERP positions more steadily. Below — factor groups and a work order; this is part of prep, not a promise of page one in a week.",
  ],
  faq: [
    {
      q: "Are commercial factors only for stores?",
      a: "Strongest for e-commerce and lead-gen services, but landings and B2B need them too: contacts, offer, cases, terms, legal details.",
    },
    {
      q: "Is there an official Yandex checklist?",
      a: "No full public list. Aim for what removes buyer doubt and matches the strongest pages in your niche SERP.",
    },
    {
      q: "What matters more: more copy, or contacts and prices?",
      a: "On commercial queries, offer completeness and trust often decide. Copy without prices, shipping, and ways to contact loses to a clear “how to buy.”",
    },
    {
      q: "Is a corporate email required?",
      a: "Preferred: `@domain.com` looks more reliable than a free mailbox. A phone with an area code and address/map are strong signals too.",
    },
    {
      q: "Do I need a live chat?",
      a: "If you actually reply. A dead widget is worse than none. Alternatives: form, callback, messengers.",
    },
    {
      q: "Are marketplaces and directories commercial factors?",
      a: "An adjacent trust and traffic track: directory and map profiles, marketplace storefronts — by niche. They don’t replace site quality.",
    },
    {
      q: "Are turbo pages required?",
      a: "No. Check current SERP formats and usefulness for your niche; priority is a fast, honest main site.",
    },
    {
      q: "When should I expect a ranking effect?",
      a: "Improving commercial signals is part of prep. Commercial-core ranking buildup is planned for 2–6 months after systematic work starts.",
    },
  ],
  sections: [
    {
      title: "What it is and why it matters",
      level: 2,
      paras: [
        "Commercial factors are everything that answers buyer questions before payment: who you are, how to contact you, what you sell, at what price, how to get and return it, why you can be trusted.",
        "They overlap UX and conversion: what helps people often matches what sets strong commercial documents apart in the SERP. Don’t confuse that with fake engagement or cloaking.",
      ],
      lists: [
        {
          intro: "Who needs it most:",
          items: [
            "online stores",
            "services with a lead or site visit",
            "local business with a visit",
            "B2B with a long sales cycle",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Contacts and communication channels",
      level: 2,
      paras: [
        "People must easily find phone, email, address or service area, messengers, and a form. For a chain — branch contacts; for delivery — clear geography.",
        "List current numbers with an area code, corporate email on the domain, a map if there’s a location. Registration and an account — only if the purchase flow truly needs them.",
      ],
      lists: [
        {
          intro: "Contact minimum:",
          items: [
            "phone and/or callback",
            "email on the domain",
            "a form or chat with replies",
            "address/map or an honest service area",
            "links to current social profiles and messengers",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Assortment and choice",
      level: 2,
      paras: [
        "For a store, catalog breadth and depth signal scale and usefulness. Empty sections and “coming soon” lose to an honest narrow assortment with solid cards.",
        "On cards: name, price or a clear guide, stock, photos, specs, shipping. Compare with niche leaders: what you lack in selection and filters.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "no empty categories in the index",
            "filters and catalog search exist",
            "cards address objections",
            "hits and promos don’t break URL structure",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Sales terms and “about the company”",
      level: 2,
      paras: [
        "Shipping, payment, warranty, returns, timelines — blocks without which a commercial query often doesn’t convert. Place them visibly, not only in a footer PDF.",
        "Company presentation: legal details, team or brand face, licenses when needed, cases and reviews. For services — work stages and what’s in the price.",
      ],
      lists: [
        {
          intro: "Trust blocks:",
          items: [
            "prices / calculator / “from …” with honest terms",
            "payment and shipping",
            "warranty and returns",
            "legal details and policies",
            "reviews and work examples",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Data, media, and ecosystem services",
      level: 2,
      paras: [
        "Quality photos, diagrams, video reviews, and clear descriptions strengthen the card and cut bounces. Watch file weight — speed is part of commercial UX too.",
        "Yandex and Google services (maps/directories, storefronts, feeds when needed) complement the site but don’t mask holes in contacts and terms. Connect what you actually keep up to date.",
      ],
      lists: [
        {
          intro: "By niche it often makes sense:",
          items: [
            "a map/directory profile",
            "consistent NAP",
            "a feed/storefront for e-commerce",
            "current hours and location photos",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "How to implement and measure",
      level: 2,
      paras: [
        "Pull a benchmark from 3–5 money-query URLs near the top of the SERP: which blocks they have that you don’t. Roll out in packages (contacts → terms → cards → reviews); after releases watch conversion and cluster ranks.",
        "Commercial fixes are part of site prep. Commercial-core page-one share is planned over months after work starts (typically 2–6 months) — not “added a chat, #3 tomorrow.”",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "checklist vs niche leaders",
            "backlog by business impact",
            "A/B or before/after conversion rate on key URLs",
            "monthly review together with SEO KPIs",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Strengthening commercial signals can take weeks. Core ranking buildup is planned for 2–6 months after systematic promotion starts.",
        },
      ],
    },
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "optimizatsiya-konversii",
    "otzyvy-dlya-prodazh",
    "regionalnoe-seo",
    "effektivnost-seo",
    "vnutrennie-faktory",
  ],
};

/** ES overlay for kommercheskie-faktory — same structure as RU JSON / EN. */
export const kommercheskieFaktoryEs: BlogPost = {
  slug: "kommercheskie-faktory",
  title: "Factores comerciales en SEO: qué construye confianza",
  date: "2019-06-20",
  category: "SEO",
  cover: "/images/blog/kommercheskie-faktory/cover.webp",
  excerpt:
    "Contactos, surtido, condiciones de compra, «sobre la empresa» y servicios de mapas/directorios — un checklist práctico de factores comerciales sin el mito de que un checkbox equivale a primera página.",
  lead: [
    "Los factores comerciales son señales on-site que ayudan a una persona a confiar y comprar: contactos claros, selección y precios, condiciones de envío y pago, transparencia de la empresa, reseñas y servicios útiles.",
    "Los buscadores no publican una lista completa de botones de ranking, pero en la práctica un setup comercial fuerte encaja más a menudo con mejor conversión y sostiene con más estabilidad las posiciones comerciales en la SERP. Abajo — grupos de factores y un orden de trabajo; esto es parte de la preparación, no una promesa de primera página en una semana.",
  ],
  faq: [
    {
      q: "¿Los factores comerciales son solo para tiendas?",
      a: "Más fuertes en e-commerce y servicios lead-gen, pero landings y B2B también los necesitan: contactos, oferta, casos, condiciones, datos legales.",
    },
    {
      q: "¿Hay un checklist oficial de Yandex?",
      a: "No hay una lista pública completa. Apunta a lo que quita dudas del comprador y encaja con las páginas más fuertes de la SERP de tu nicho.",
    },
    {
      q: "¿Qué importa más: más copy, o contactos y precios?",
      a: "En consultas comerciales, a menudo deciden la completitud de la oferta y la confianza. El copy sin precios, envío y vías de contacto pierde frente a un «cómo comprar» claro.",
    },
    {
      q: "¿Hace falta un email corporativo?",
      a: "Preferible: `@domain.com` parece más fiable que un buzón gratuito. Un teléfono con prefijo de zona y dirección/mapa también son señales fuertes.",
    },
    {
      q: "¿Hace falta un chat en vivo?",
      a: "Si de verdad respondes. Un widget muerto es peor que ninguno. Alternativas: formulario, callback, messengers.",
    },
    {
      q: "¿Marketplaces y directorios son factores comerciales?",
      a: "Una vía adyacente de confianza y tráfico: perfiles en directorios y mapas, escaparates de marketplace — según el nicho. No sustituyen la calidad del sitio.",
    },
    {
      q: "¿Son obligatorias las turbo pages?",
      a: "No. Revisa los formatos actuales de la SERP y la utilidad para tu nicho; la prioridad es un sitio principal rápido y honesto.",
    },
    {
      q: "¿Cuándo esperar un efecto en rankings?",
      a: "Mejorar señales comerciales es parte de la preparación. El buildup de rankings del núcleo comercial se planifica a 2–6 meses tras el arranque del trabajo sistemático.",
    },
  ],
  sections: [
    {
      title: "Qué es y por qué importa",
      level: 2,
      paras: [
        "Los factores comerciales son todo lo que responde a las preguntas del comprador antes del pago: quiénes sois, cómo contactaros, qué vendéis, a qué precio, cómo recibirlo y devolverlo, por qué se puede confiar.",
        "Se solapan con UX y conversión: lo que ayuda a las personas a menudo encaja con lo que distingue documentos comerciales fuertes en la SERP. No lo confundas con engagement falso o cloaking.",
      ],
      lists: [
        {
          intro: "Quién lo necesita más:",
          items: [
            "tiendas online",
            "servicios con lead o visita al sitio",
            "negocio local con visita",
            "B2B con un ciclo de ventas largo",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de la conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Factores on-page",
          href: "/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Contactos y canales de comunicación",
      level: 2,
      paras: [
        "La gente debe encontrar fácil teléfono, email, dirección o zona de servicio, messengers y un formulario. Para una cadena — contactos de sucursales; para envío — geografía clara.",
        "Lista números actuales con prefijo de zona, email corporativo en el dominio, un mapa si hay ubicación. Registro y cuenta — solo si el flujo de compra de verdad los necesita.",
      ],
      lists: [
        {
          intro: "Mínimo de contacto:",
          items: [
            "teléfono y/o callback",
            "email en el dominio",
            "un formulario o chat con respuestas",
            "dirección/mapa o una zona de servicio honesta",
            "enlaces a perfiles sociales y messengers actuales",
          ],
        },
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Surtido y elección",
      level: 2,
      paras: [
        "Para una tienda, la amplitud y profundidad del catálogo señalan escala y utilidad. Secciones vacías y «próximamente» pierden frente a un surtido estrecho honesto con fichas sólidas.",
        "En las fichas: nombre, precio o una guía clara, stock, fotos, specs, envío. Compara con líderes del nicho: qué te falta en selección y filtros.",
      ],
      lists: [
        {
          intro: "Revisa:",
          items: [
            "sin categorías vacías en el índice",
            "existen filtros y búsqueda del catálogo",
            "las fichas responden objeciones",
            "hits y promos no rompen la estructura de URLs",
          ],
        },
      ],
      links: [
        {
          label: "Promoción de tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Condiciones de venta y «sobre la empresa»",
      level: 2,
      paras: [
        "Envío, pago, garantía, devoluciones, plazos — bloques sin los cuales una consulta comercial a menudo no convierte. Colócalos a la vista, no solo en un PDF del footer.",
        "Presentación de la empresa: datos legales, equipo o cara de marca, licencias cuando hacen falta, casos y reseñas. Para servicios — etapas de trabajo y qué entra en el precio.",
      ],
      lists: [
        {
          intro: "Bloques de confianza:",
          items: [
            "precios / calculadora / «desde …» con condiciones honestas",
            "pago y envío",
            "garantía y devoluciones",
            "datos legales y políticas",
            "reseñas y ejemplos de trabajo",
          ],
        },
      ],
      links: [
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Datos, media y servicios del ecosistema",
      level: 2,
      paras: [
        "Fotos de calidad, diagramas, vídeo-reseñas y descripciones claras refuerzan la ficha y bajan rebotes. Vigila el peso de los archivos — la velocidad también es parte del UX comercial.",
        "Servicios de Yandex y Google (mapas/directorios, escaparates, feeds cuando hace falta) complementan el sitio pero no tapan agujeros en contactos y condiciones. Conecta lo que de verdad mantienes al día.",
      ],
      lists: [
        {
          intro: "Por nicho a menudo tiene sentido:",
          items: [
            "un perfil en mapa/directorio",
            "NAP coherente",
            "un feed/escaparate para e-commerce",
            "horarios actuales y fotos de la ubicación",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Cómo implementar y medir",
      level: 2,
      paras: [
        "Saca un benchmark de 3–5 URLs de consultas de dinero cerca del inicio de la SERP: qué bloques tienen que tú no. Despliega por paquetes (contactos → condiciones → fichas → reseñas); tras los releases mira conversión y ranks por cluster.",
        "Los arreglos comerciales son parte de la preparación del sitio. La cuota de primera página del núcleo comercial se planifica a lo largo de meses tras el arranque del trabajo (típicamente 2–6 meses) — no «añadí un chat, #3 mañana».",
      ],
      lists: [
        {
          intro: "Ritmo:",
          items: [
            "checklist vs líderes del nicho",
            "backlog por impacto de negocio",
            "A/B o before/after de conversion rate en URLs clave",
            "revisión mensual junto con los KPIs de SEO",
          ],
        },
      ],
      links: [
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Reforzar señales comerciales puede llevar semanas. El buildup de rankings del núcleo se planifica a 2–6 meses tras el arranque de la promoción sistemática.",
        },
      ],
    },
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "optimizatsiya-konversii",
    "otzyvy-dlya-prodazh",
    "regionalnoe-seo",
    "effektivnost-seo",
    "vnutrennie-faktory",
  ],
};

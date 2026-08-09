import type { BlogPost } from "../../../data/blog";

/** EN overlay for otzyvy-dlya-prodazh — same structure as RU JSON. */
export const otzyvyDlyaProdazhEn: BlogPost = {
  slug: "otzyvy-dlya-prodazh",
  title: "How many reviews a company needs to sell with more confidence",
  date: "2019-09-26",
  category: "SEO",
  cover: "/images/blog/otzyvy-dlya-prodazh/cover-en.webp",
  excerpt:
    "The trust threshold for reviews, how they tie into local search and maps, how to ask for reviews and handle negatives — without fake ratings or bought five-stars.",
  lead: [
    "Before choosing a clinic, cafe, or service, people read reviews on maps, directories, and the site. An empty profile at a fair price and convenient address often loses to a competitor with a track record of real reviews.",
    "Below: quantity guides from industry research, why replies and platform diversity matter, and how to run reviews legally. The numbers are a trust threshold, not a ranking formula — map and aggregator rules change.",
  ],
  faq: [
    {
      q: "Is there a magic review number?",
      a: "No universal one. Local-market studies often cite a threshold around ~40 reviews for noticeable trust, and dozens on average for the local pack. In niches with rare purchases, fewer can suffice; in restaurants and hospitality the “norm” is higher.",
    },
    {
      q: "Does quantity or rating matter more?",
      a: "Both. A strong rating with three reviews is weaker than 4.6 with a hundred. But “all 5.0” with zero criticism also looks suspicious.",
    },
    {
      q: "Can you buy reviews?",
      a: "No. It breaks platform rules, risks sanctions, and kills trust. Ask real clients and reply to negatives.",
    },
    {
      q: "Site reviews or maps?",
      a: "Maps and aggregators influence local choice more. The site is for people who already arrived and check details. Run both tracks.",
    },
    {
      q: "Does each branch need its own profile?",
      a: "Yes — usually each physical location gets its own profile with NAP and reviews for that point only.",
    },
    {
      q: "Do reviews help regular site SEO?",
      a: "They don’t replace commercial rankings directly. Indirectly they help awareness, links from profiles and directories, trust, and conversion. Site prep and ranking buildup are separate horizons.",
    },
    {
      q: "How should you reply to a negative review?",
      a: "Calmly, with facts, without a fight. Apology, clarification, an offline channel to resolve. That often softens the impression for later readers.",
    },
    {
      q: "Are incentives for a review legal?",
      a: "A discount or bonus “for an honest review” is sometimes allowed by platform policy — check the rules. You can’t pay only for a five-star or dictate the text.",
    },
  ],
  sections: [
    {
      title: "Why businesses need reviews",
      level: 2,
      paras: [
        "Reviews are social proof: someone already checked. For services (medicine, beauty, repair, finance) one strong negative hits harder than for a mass product with hundreds of SKUs.",
        "Yandex Maps and Google, 2GIS, niche review sites, and social networks create a path from found → read → called or visited. Without reviews you look like a ghost listing even if the product is strong.",
      ],
      lists: [
        {
          intro: "What reviews improve:",
          items: [
            "trust and readiness to leave a lead",
            "clicks in the local pack / on the map",
            "a service-quality signal for new clients",
            "a reason to improve processes (complaints = diagnostics)",
          ],
        },
      ],
      links: [
        {
          label: "Google Maps business profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "How many reviews are “enough”",
      level: 2,
      paras: [
        "Industry studies (including BrightLocal local-search reviews) have shown for years: users trust a business more after dozens of reviews than after two or three. An often-cited guide is about 40 reviews as a noticeable-trust threshold — not a law of nature, an averaged picture across samples.",
        "For entering and holding the maps local pack, the same reviews cite average dozens of reviews on visible profiles. The gap between “showing up” and “among the first three map results” can be small by count but critical by clicks. Figures shift by year and country — check fresh reports and competitors near you.",
      ],
      lists: [
        {
          intro: "Practical guide:",
          items: [
            "0–5 — almost no history, high risk that people bounce",
            "dozens — a trust threshold for many niches",
            "hundreds — normal for cafes and chains where people review often",
            "look at the median of nearby competitors, not a world record",
          ],
        },
      ],
      tables: [
        {
          caption: "Rough guides (not a ranking guarantee)",
          headers: ["Situation", "What to watch"],
          rows: [
            ["Services with rare purchase", "Reply quality + 20–50 honest reviews"],
            ["Restaurants & hospitality / neighborhood retail", "Steady inflow; watch the rating"],
            ["Several branches", "Reviews per location separately"],
            ["Site only, no maps", "On-site review block + external platforms"],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Chasing “+100 five-stars in a week.” Platforms and users spot fake reviews; a rhythm of real clients and replies matters more.",
        },
      ],
    },
    {
      title: "Rating, local pack, and clicks",
      level: 2,
      paras: [
        "In local search, people often click the map block harder than the organic “tail.” The average-rating gap between places 1–3 and 8–10 may be tenths of a point, but clicks and calls go to the head of the local pack.",
        "Research links rating growth to local-business revenue — effect size depends on the niche. For you what matters more: fix systemic causes of one-stars (service, timelines, communication), not argue in comments.",
      ],
      lists: [
        {
          intro: "What else maps weigh:",
          items: [
            "fresh NAP and opening hours",
            "categories and photos",
            "business replies",
            "signals from other directories (not the only source)",
          ],
        },
      ],
    },
    {
      title: "How to build a review workflow",
      level: 2,
      paras: [
        "First claim and verify profiles on Yandex Maps / Google Business Profile (and 2GIS if relevant): one profile per branch. Then make it easy to leave a review on the site (block by service or product, or a dedicated page) and set up mention monitoring.",
        "Ask after a successful outcome: SMS or email with a map link, a QR in the venue, a soft ask from the account manager. Incentives — only if the platform allows them and they don’t buy the rating.",
      ],
      lists: [
        {
          intro: "Mini process:",
          items: [
            "map profiles created and verified",
            "an owner watches new reviews daily or every other day",
            "reply templates for typical negatives + escalation",
            "a review ask in the “client is happy” script",
            "once a quarter, review complaint themes for the product",
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
      title: "Negatives, social, and a “too perfect” feed",
      level: 2,
      paras: [
        "A feed of only five-stars with zero complaints lowers trust: it looks faked. An honest mix and visible work on complaints look stronger.",
        "On social, reviews often feel more live. A company rep joining the dialogue raises loyalty — without aggression or deleting inconvenient facts (unless it’s spam or abuse under platform rules).",
      ],
      lists: [
        {
          intro: "How to reply to negatives:",
          items: [
            "thank them for the feedback",
            "acknowledge the problem without “everything is perfect” excuses",
            "offer a channel to resolve (phone, DM)",
            "after resolution — briefly note the outcome in the thread if it fits",
            "don’t pick public fights over small issues and burn reputation",
          ],
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Reviews speed choice on maps. Site prep for promotion takes about a month. Page-one visibility for the keyword set is planned for 2–6 months after work starts — a separate track.",
        },
      ],
    },
    {
      title: "Platforms, links, and what not to do",
      level: 2,
      paras: [
        "Review sites and directories sometimes rank for “reviews + brand/service” — extra traffic to the profile. Correct profiles give consistent NAP and sometimes a site link; that’s no reason to spam directories for link volume.",
        "Don’t buy “100 reviews” packs, don’t keyword-stuff the business name, don’t clone branches. Focus on real clients, replies, and service.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "identical template texts from “different” people",
            "a review spike in a day with no promo or event",
            "banning negatives in promo rules",
            "agencies that promise “map pack in a week via reviews”",
          ],
        },
      ],
      links: [
        {
          label: "Site directories",
          href: "/en/blog/katalogi-saytov/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "google-biznes",
    "lichnyy-brend",
    "samostoyatelnoe-seo",
    "katalogi-saytov",
    "didzhital-agentstvo",
    "otchet-klientu",
  ],
};

/** ES overlay for otzyvy-dlya-prodazh — same structure as RU JSON / EN. */
export const otzyvyDlyaProdazhEs: BlogPost = {
  slug: "otzyvy-dlya-prodazh",
  title: "Cuántas reseñas necesita una empresa para vender con más confianza",
  date: "2019-09-26",
  category: "SEO",
  cover: "/images/blog/otzyvy-dlya-prodazh/cover.webp",
  excerpt:
    "El umbral de confianza de las reseñas, cómo se atan a la búsqueda local y los mapas, cómo pedir reseñas y gestionar negativos — sin valoraciones falsas ni cinco estrellas compradas.",
  lead: [
    "Antes de elegir una clínica, un café o un servicio, la gente lee reseñas en mapas, directorios y el sitio. Un perfil vacío con precio justo y dirección cómoda a menudo pierde frente a un competidor con historial de reseñas reales.",
    "Abajo: guías de cantidad de estudios de industria, por qué importan las respuestas y la diversidad de plataformas, y cómo gestionar reseñas de forma legal. Las cifras son umbral de confianza, no fórmula de ranking — las reglas de mapas y agregadores cambian.",
  ],
  faq: [
    {
      q: "¿Hay un número mágico de reseñas?",
      a: "No uno universal. Estudios de mercados locales a menudo citan un umbral de ~40 reseñas para confianza notable, y docenas de media para el local pack. En nichos con compras raras, menos puede bastar; en restaurantes y hospitality la «norma» es más alta.",
    },
    {
      q: "¿Importa más la cantidad o la valoración?",
      a: "Ambas. Una valoración fuerte con tres reseñas es más débil que 4,6 con un centenar. Pero «todo 5,0» sin ninguna crítica también parece sospechoso.",
    },
    {
      q: "¿Se pueden comprar reseñas?",
      a: "No. Rompe las reglas de la plataforma, arriesga sanciones y mata la confianza. Pide a clientes reales y responde a los negativos.",
    },
    {
      q: "¿Reseñas en el sitio o en mapas?",
      a: "Mapas y agregadores influyen más en la elección local. El sitio es para quien ya llegó y revisa detalles. Lleva ambas vías.",
    },
    {
      q: "¿Cada sucursal necesita su propio perfil?",
      a: "Sí — normalmente cada ubicación física tiene su propio perfil con NAP y reseñas solo de ese punto.",
    },
    {
      q: "¿Las reseñas ayudan al SEO normal del sitio?",
      a: "No sustituyen directamente los rankings comerciales. De forma indirecta ayudan a awareness, enlaces desde perfiles y directorios, confianza y conversión. La preparación del sitio y el crecimiento de rankings son horizontes aparte.",
    },
    {
      q: "¿Cómo responder a una reseña negativa?",
      a: "Con calma, con hechos, sin pelear. Disculpa, aclaración, un canal offline para resolver. Eso a menudo suaviza la impresión para lectores posteriores.",
    },
    {
      q: "¿Son legales los incentivos por una reseña?",
      a: "Un descuento o bonus «por una reseña honesta» a veces lo permite la política de la plataforma — revisa las reglas. No se puede pagar solo por cinco estrellas ni dictar el texto.",
    },
  ],
  sections: [
    {
      title: "Por qué los negocios necesitan reseñas",
      level: 2,
      paras: [
        "Las reseñas son prueba social: alguien ya comprobó. En servicios (medicina, belleza, reparación, finanzas) un negativo fuerte golpea más que en un producto masivo con cientos de SKUs.",
        "Yandex Maps y Google, 2GIS, sitios de reseñas de nicho y redes sociales crean un camino de encontrado → leído → llamado o visitado. Sin reseñas pareces una ficha fantasma aunque el producto sea fuerte.",
      ],
      lists: [
        {
          intro: "Qué mejoran las reseñas:",
          items: [
            "confianza y disposición a dejar un lead",
            "clics en el local pack / en el mapa",
            "una señal de calidad de servicio para clientes nuevos",
            "un motivo para mejorar procesos (quejas = diagnóstico)",
          ],
        },
      ],
      links: [
        {
          label: "Perfil de negocio en Google Maps",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Cuántas reseñas son «suficientes»",
      level: 2,
      paras: [
        "Estudios de industria (incluidas reviews de búsqueda local de BrightLocal) llevan años mostrando: los usuarios confían más en un negocio tras docenas de reseñas que tras dos o tres. Una guía citada a menudo es unas 40 reseñas como umbral de confianza notable — no ley de la naturaleza, una foto promediada de muestras.",
        "Para entrar y sostenerse en el local pack de mapas, las mismas reviews citan docenas de reseñas de media en perfiles visibles. La brecha entre «aparecer» y «estar entre los tres primeros del mapa» puede ser pequeña en conteo pero crítica en clics. Las cifras cambian por año y país — revisa informes frescos y competidores cerca de ti.",
      ],
      lists: [
        {
          intro: "Guía práctica:",
          items: [
            "0–5 — casi sin historial, alto riesgo de que la gente salte",
            "docenas — umbral de confianza para muchos nichos",
            "cientos — normal en cafés y cadenas donde la gente reseña a menudo",
            "mira la mediana de competidores cercanos, no un récord mundial",
          ],
        },
      ],
      tables: [
        {
          caption: "Guías aproximadas (no garantía de ranking)",
          headers: ["Situación", "Qué mirar"],
          rows: [
            ["Servicios con compra rara", "Calidad de respuesta + 20–50 reseñas honestas"],
            ["Restaurantes y hospitality / retail de barrio", "Flujo constante; vigila la valoración"],
            ["Varias sucursales", "Reseñas por ubicación por separado"],
            ["Solo sitio, sin mapas", "Bloque de reseñas on-site + plataformas externas"],
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Perseguir «+100 cinco estrellas en una semana». Plataformas y usuarios detectan reseñas falsas; importa más el ritmo de clientes reales y las respuestas.",
        },
      ],
    },
    {
      title: "Valoración, local pack y clics",
      level: 2,
      paras: [
        "En búsqueda local, la gente a menudo clica más fuerte el bloque del mapa que la «cola» orgánica. La brecha de valoración media entre los puestos 1–3 y 8–10 puede ser décimas de punto, pero clics y llamadas van a la cabeza del local pack.",
        "La investigación vincula el crecimiento de valoración con ingresos de negocios locales — el tamaño del efecto depende del nicho. Para ti importa más: arreglar causas sistémicas de una estrella (servicio, plazos, comunicación), no discutir en comentarios.",
      ],
      lists: [
        {
          intro: "Qué más pesan los mapas:",
          items: [
            "NAP y horario frescos",
            "categorías y fotos",
            "respuestas del negocio",
            "señales de otros directorios (no la única fuente)",
          ],
        },
      ],
    },
    {
      title: "Cómo montar un flujo de reseñas",
      level: 2,
      paras: [
        "Primero reclama y verifica perfiles en Yandex Maps / Google Business Profile (y 2GIS si aplica): un perfil por sucursal. Luego facilita dejar una reseña en el sitio (bloque por servicio o producto, o una página dedicada) y monta monitoreo de menciones.",
        "Pide tras un resultado exitoso: SMS o email con enlace al mapa, un QR en el local, una petición suave del account manager. Incentivos — solo si la plataforma los permite y no compran la valoración.",
      ],
      lists: [
        {
          intro: "Mini proceso:",
          items: [
            "perfiles de mapa creados y verificados",
            "un owner mira reseñas nuevas a diario o cada dos días",
            "plantillas de respuesta para negativos típicos + escalado",
            "una petición de reseña en el script «el cliente está contento»",
            "una vez al trimestre, revisar temas de quejas para el producto",
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
      title: "Negativos, redes y un feed «demasiado perfecto»",
      level: 2,
      paras: [
        "Un feed solo de cinco estrellas sin quejas baja la confianza: parece falseado. Una mezcla honesta y trabajo visible sobre quejas se ve más fuerte.",
        "En redes, las reseñas a menudo se sienten más vivas. Que un representante de la empresa entre en el diálogo sube la lealtad — sin agresividad ni borrar hechos incómodos (salvo spam o abuso según las reglas de la plataforma).",
      ],
      lists: [
        {
          intro: "Cómo responder a negativos:",
          items: [
            "agradecer el feedback",
            "reconocer el problema sin excusas de «todo es perfecto»",
            "ofrecer un canal para resolver (teléfono, DM)",
            "tras la resolución — anotar brevemente el resultado en el hilo si encaja",
            "no pelear en público por minucias y quemar reputación",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos SEO",
          kind: "tip",
          text: "Las reseñas aceleran la elección en mapas. La preparación del sitio para la promoción lleva alrededor de un mes. La visibilidad en primera página del set de keywords se planifica a 2–6 meses tras el inicio del trabajo — una vía aparte.",
        },
      ],
    },
    {
      title: "Plataformas, enlaces y qué no hacer",
      level: 2,
      paras: [
        "Sitios de reseñas y directorios a veces rankean por «reseñas + marca/servicio» — tráfico extra al perfil. Perfiles correctos dan NAP coherente y a veces un enlace al sitio; eso no es motivo para spamear directorios por volumen de enlaces.",
        "No compres packs de «100 reseñas», no metas keywords en el nombre del negocio, no clones sucursales. Enfócate en clientes reales, respuestas y servicio.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "textos plantilla idénticos de «personas distintas»",
            "un pico de reseñas en un día sin promo ni evento",
            "prohibir negativos en las reglas de la promo",
            "agencias que prometen «map pack en una semana vía reseñas»",
          ],
        },
      ],
      links: [
        {
          label: "Directorios de sitios",
          href: "/es/blog/katalogi-saytov/",
        },
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "google-biznes",
    "lichnyy-brend",
    "samostoyatelnoe-seo",
    "katalogi-saytov",
    "didzhital-agentstvo",
    "otchet-klientu",
  ],
};

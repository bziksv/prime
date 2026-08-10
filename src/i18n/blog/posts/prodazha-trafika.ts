import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodazha-trafika — same structure as RU JSON. */
export const prodazhaTrafikaEn: BlogPost = {
  slug: "prodazha-trafika",
  title: "Selling traffic: how to monetize site visits",
  date: "2021-11-06",
  category: "Digital marketing",
  cover: "/images/blog/prodazha-trafika/cover-en.webp",
  excerpt:
    "What selling traffic means: CPC, CPM, CPA, search/display ads, teasers, banners, and direct advertisers. How to find buyers without killing UX.",
  lead: [
    "Selling traffic means you give advertisers a share of your audience’s attention for pay: per impression, click, or conversion. It’s a revenue channel for media and sites with real visits — not a “passive million” button.",
    "Below: payment models, formats, finding buyers, and risks. Networks and exchanges change — check current rules and traffic quality.",
  ],
  faq: [
    {
      q: "Do I need my own site to sell traffic?",
      a: "Usually yes: you sell your property’s audience. Without a site you’re left with affiliate/arbitrage models — different risks.",
    },
    {
      q: "What’s the difference between CPC, CPM, and CPA?",
      a: "CPC — pay per click; CPM — per impressions (usually per 1,000); CPA — per action (lead, purchase, signup).",
    },
    {
      q: "How much can I earn selling traffic?",
      a: "Depends on niche, geo, audience quality, and format. Old “cents per click” are not a price list — run your own tests and watch eCPM.",
    },
    {
      q: "Why would an advertiser refuse?",
      a: "Low traffic, off-topic, poor UX, fake traffic, policy violations, or weak conversion on the seller’s side.",
    },
    {
      q: "Are clickunders and aggressive teasers dangerous?",
      a: "For short-term eCPM sometimes yes; for retention and brand — often no. Hard formats raise complaint and churn risk.",
    },
  ],
  sections: [
    {
      title: "How the model works",
      level: 2,
      paras: [
        "Site A has visitors. Advertiser B pays so some of them see an offer and click/buy. You sell attention; an exchange or network often takes a cut.",
        "The better the audience quality and topic fit, the higher the click or action price. “Volume at any cost” usually kills both revenue and trust.",
      ],
    },
    {
      title: "Finding a buyer",
      level: 2,
      paras: [
        "Via ad networks and affiliate platforms: register the site, pass moderation, place the code. Or direct: an advertiser reaches out to media with reach.",
      ],
      lists: [
        {
          intro: "What to check in a deal:",
          items: [
            "audience topic and geo",
            "payment model and minimum payout",
            "prohibited-content rules",
            "site speed and UX after placing blocks",
            "reporting: impressions, clicks, actions",
          ],
        },
      ],
    },
    {
      title: "Monetization formats",
      level: 2,
      paras: [
        "Search and display through major networks (e.g. Yandex and Google programs — under each property’s rules). Teasers and banners are more visible but easy to overload a page.",
        "Outbound links and native placements sit closer to editorial. CPA/affiliates pay for a lead or sale: higher payout with a strong offer, stricter on traffic quality.",
        "YouTube and other media are a separate track: viewers monetize via the platform network or integrations when rules allow.",
      ],
      lists: [
        {
          intro: "Payment schemes:",
          items: [
            "CPC — easy to count, depends on CTR",
            "CPM — income from volume and viewability",
            "CPA — closer to the advertiser’s result",
            "flat / package — direct deals",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Old exchange directories (AdLabs, Rotaban, and peers) partly age out. Pick a live network with clear stats and sane moderation.",
        },
      ],
    },
    {
      title: "Direct advertisers and without “your” site",
      level: 2,
      paras: [
        "Large blogs and channels sell packages direct: higher rate, more manual work. Without your own property you stay in affiliates/arbitrage — you need traffic skills and offer-policy compliance.",
        "Don’t promise “passive income with no effort”: both sites and arbitrage need quality upkeep and policy fit.",
      ],
    },
    {
      title: "How not to kill the property",
      level: 2,
      paras: [
        "Aggressive formats lift short-term revenue and drop return visits. Keep balance: the reader should finish the piece.",
      ],
      lists: [
        {
          intro: "Hygiene rules:",
          items: [
            "don’t cover the content entirely with ads",
            "don’t use misleading teasers",
            "don’t sell fake traffic",
            "follow network rules — or risk a site ban",
            "measure not only revenue but bounce rate and depth",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for prodazha-trafika — same structure as RU JSON / EN. */
export const prodazhaTrafikaEs: BlogPost = {
  slug: "prodazha-trafika",
  title: "Vender tráfico: cómo monetizar las visitas del sitio",
  date: "2021-11-06",
  category: "Digital marketing",
  cover: "/images/blog/prodazha-trafika/cover-es.webp",
  excerpt:
    "Qué significa vender tráfico: CPC, CPM, CPA, anuncios de búsqueda/display, teasers, banners y anunciantes directos. Cómo encontrar compradores sin matar la UX.",
  lead: [
    "Vender tráfico significa ceder a anunciantes una parte de la atención de tu audiencia a cambio de pago: por impresión, clic o conversión. Es un canal de ingresos para media y sitios con visitas reales — no un botón de «millón pasivo».",
    "Abajo: modelos de pago, formatos, búsqueda de compradores y riesgos. Redes e exchanges cambian — revisa reglas actuales y calidad del tráfico.",
  ],
  faq: [
    {
      q: "¿Necesito un sitio propio para vender tráfico?",
      a: "Normalmente sí: vendes la audiencia de tu propiedad. Sin sitio te quedan modelos de afiliados/arbitraje — otros riesgos.",
    },
    {
      q: "¿Cuál es la diferencia entre CPC, CPM y CPA?",
      a: "CPC — pago por clic; CPM — por impresiones (suele ser por 1.000); CPA — por acción (lead, compra, registro).",
    },
    {
      q: "¿Cuánto se puede ganar vendiendo tráfico?",
      a: "Depende del nicho, geo, calidad de audiencia y formato. Los viejos «céntimos por clic» no son una lista de precios — haz tus propios tests y mira el eCPM.",
    },
    {
      q: "¿Por qué un anunciante rechazaría?",
      a: "Poco tráfico, fuera de tema, UX floja, tráfico falso, infracciones de política o conversión débil del lado del vendedor.",
    },
    {
      q: "¿Son peligrosos los clickunders y teasers agresivos?",
      a: "Para el eCPM a corto plazo a veces sí; para retención y marca — a menudo no. Los formatos duros suben el riesgo de quejas y abandono.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona el modelo",
      level: 2,
      paras: [
        "El sitio A tiene visitantes. El anunciante B paga para que parte de ellos vean una oferta y hagan clic/compren. Tú vendes atención; un exchange o red a menudo se lleva una comisión.",
        "Cuanto mejor la calidad de audiencia y el encaje temático, más alto el precio del clic o la acción. El «volumen a cualquier coste» suele matar ingresos y confianza.",
      ],
    },
    {
      title: "Encontrar un comprador",
      level: 2,
      paras: [
        "Vía redes publicitarias y plataformas de afiliados: registra el sitio, pasa moderación, coloca el código. O directo: un anunciante contacta a media con alcance.",
      ],
      lists: [
        {
          intro: "Qué revisar en un trato:",
          items: [
            "tema y geo de la audiencia",
            "modelo de pago y pago mínimo",
            "reglas de contenido prohibido",
            "velocidad del sitio y UX tras colocar bloques",
            "reporting: impresiones, clics, acciones",
          ],
        },
      ],
    },
    {
      title: "Formatos de monetización",
      level: 2,
      paras: [
        "Búsqueda y display a través de redes grandes (p. ej. programas de Yandex y Google — bajo las reglas de cada propiedad). Teasers y banners se ven más, pero es fácil sobrecargar la página.",
        "Enlaces outbound y placements nativos quedan más cerca de lo editorial. CPA/afiliados pagan por lead o venta: payout más alto con una oferta fuerte, más estrictos con la calidad del tráfico.",
        "YouTube y otros media son una vía aparte: los viewers monetizan vía la red de la plataforma o integraciones cuando las reglas lo permiten.",
      ],
      lists: [
        {
          intro: "Esquemas de pago:",
          items: [
            "CPC — fácil de contar, depende del CTR",
            "CPM — ingreso por volumen y viewability",
            "CPA — más cerca del resultado del anunciante",
            "flat / paquete — tratos directos",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Los directorios viejos de exchanges (AdLabs, Rotaban y similares) en parte envejecen. Elige una red viva con stats claros y moderación sensata.",
        },
      ],
    },
    {
      title: "Anunciantes directos y sin sitio «tuyo»",
      level: 2,
      paras: [
        "Blogs y canales grandes venden paquetes en directo: tarifa más alta, más trabajo manual. Sin propiedad propia te quedas en afiliados/arbitraje — necesitas skill de tráfico y cumplimiento de políticas de oferta.",
        "No prometas «ingresos pasivos sin esfuerzo»: tanto sitios como arbitraje necesitan mantenimiento de calidad y encaje con las políticas.",
      ],
    },
    {
      title: "Cómo no matar la propiedad",
      level: 2,
      paras: [
        "Los formatos agresivos suben el ingreso a corto plazo y bajan las visitas de retorno. Mantén el equilibrio: el lector debería terminar la pieza.",
      ],
      lists: [
        {
          intro: "Reglas de higiene:",
          items: [
            "no cubras el contenido entero con anuncios",
            "no uses teasers engañosos",
            "no vendas tráfico falso",
            "sigue las reglas de la red — o arriesgas ban del sitio",
            "mide no solo ingreso sino rebote y profundidad",
          ],
        },
      ],
    },
  ],
};

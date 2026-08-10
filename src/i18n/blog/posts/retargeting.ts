import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting — same structure as RU JSON. */
export const retargetingEn: BlogPost = {
  slug: "retargeting",
  title: "Retargeting: what it is and how it differs from targeting",
  date: "2018-03-28",
  category: "Paid search",
  cover: "/images/blog/retargeting/cover-en.webp",
  excerpt:
    "Retargeting brings back people who already visited: cart, product view, visit without action. How it differs from targeting, which types exist, and how not to annoy the audience.",
  lead: [
    "Retargeting (remarketing) shows ads to people who already touched the site or app but didn’t finish the goal. Targeting finds a new audience by gender, geo, interests; retargeting works with a warm base.",
    "Below: how it works in practice, campaign types, where to set it up, and typical risks. Holiday tactics are a separate post; this is the foundation.",
  ],
  faq: [
    {
      q: "Are retargeting and remarketing the same?",
      a: "Essentially yes: return a known audience. “Retarget” is more common in Yandex talk, “remarketing” in Google — meaning is shared.",
    },
    {
      q: "How does it differ from targeting?",
      a: "Targeting selects an audience in the network. Retargeting reaches people who already were with you (site, app, list). Often a pair: attract first, then bring back.",
    },
    {
      q: "Do I need an analytics counter?",
      a: "Yes: Metrica, ad-system pixel/tag, events (cart, view). Without data, segments are empty.",
    },
    {
      q: "What is dynamic retargeting?",
      a: "Showing specific products/services the person viewed, not a generic store banner. Usually stronger than “just the logo.”",
    },
    {
      q: "Why do the ads annoy people?",
      a: "Frequent shows of one creative and no exclusion of buyers. Cap frequency, refresh the offer, exclude conversions.",
    },
    {
      q: "How long until I see an effect?",
      a: "Depends on audience size and offer. Expect weeks to gather stats; don’t wait for magic in three days.",
    },
    {
      q: "Is retargeting only for stores?",
      a: "No. Services, B2B, content — segments by key-URL visits and unfinished leads.",
    },
    {
      q: "Does it connect to SEO?",
      a: "Not directly. Indirectly: the same landings and offer affect organic and retargeting conversion rate.",
    },
  ],
  sections: [
    {
      title: "How it looks in practice",
      level: 2,
      paras: [
        "A visitor viewed a product, added to cart, and left. The “cart without purchase” segment gets ads with that product or a discount — on Yandex Advertising Network sites, search, social, or display, depending on the account.",
        "The point isn’t to chase everyone, but a relevant reminder at the funnel stage where interest already showed.",
      ],
      lists: [
        {
          intro: "Typical loop:",
          items: [
            "counter records the action",
            "segment in audiences/account",
            "separate retarget campaign",
            "offer by stage (view / cart / abandoned form)",
          ],
        },
      ],
    },
    {
      title: "Why it belongs in ads",
      level: 2,
      paras: [
        "Cold traffic is pricier to take to purchase. Some visits break on choice, delivery, distraction — retarget cheaper catches up people already warmed.",
        "Each funnel stage gets its creative: a promo for quick leavers, category value for card viewers, cart reminder for almost-buyers.",
      ],
      lists: [
        {
          intro: "Touch stages:",
          items: [
            "visit without depth",
            "product/service view",
            "cart / form not submitted",
            "purchase (exclude or upsell)",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Retargeting vs targeting",
      level: 2,
      paras: [
        "Targeting sets whom to find online: demographics, interests, geo, look-alike. Retargeting works with those who already left a digital trail with you.",
        "Shared goal — sales and leads; different entry: “find the right people” vs “bring familiars back.” Weak targeting gives little base for retarget; without retarget you pay again for the same people via cold campaigns.",
      ],
      tables: [
        {
          caption: "In short",
          headers: ["", "Targeting", "Retargeting"],
          rows: [
            ["Audience", "New by conditions", "Already on site/in CRM"],
            ["Job", "Attract", "Return / convert"],
            ["Data", "Interests, geo, look-alike", "Events, lists, pixel"],
          ],
        },
      ],
    },
    {
      title: "Types of retargeting",
      level: 2,
      paras: [
        "**Classic** — general site/brand ads to those who left without a goal action.",
        "**Dynamic** — product/service cards from a feed by view. **Search** — catch-up by search queries/audiences with paid search. **Email** — letters to those who left a contact. **In-app** — bring app users back.",
      ],
      lists: [
        {
          intro: "What to pick for a start:",
          items: [
            "Metrica/pixel segments by URL",
            "exclude buyers",
            "dynamic feed if the catalog is large",
            "separate budget and frequency cap",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Where you set it up",
      level: 2,
      paras: [
        "Yandex Direct + Metrica/Audiences, Google Ads + tag, social ad accounts with their pixel. One base: site code, goals, segments, a campaign not mixed with cold search.",
        "First gather visit volume and correct events — otherwise audiences are too small to learn.",
      ],
      lists: [
        {
          intro: "Launch minimum:",
          items: [
            "counter and goals verified",
            "were here / didn’t buy segment",
            "frequency cap",
            "UTM on ads",
            "offer not older than what’s on the site",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Risks and common sense",
      level: 2,
      paras: [
        "A pushy identical banner hurts the brand. Retarget doesn’t see an offline purchase — the person already bought from a competitor while the ad still catches up.",
        "Exclude buyers, rotate creatives, limit segment lifetime. Measure by segment CPA/ROMI, not “I feel we see our banner a lot.”",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Retarget strengthens the funnel but doesn’t replace product, pricing, and site usability. A leaky checkout won’t be saved by a perfect segment.",
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  related: [
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "utm-metki",
    "tselevaya-auditoriya",
    "mobilnaya-reklama-google",
  ],
};

/** ES overlay for retargeting — same structure as RU JSON / EN. */
export const retargetingEs: BlogPost = {
  slug: "retargeting",
  title: "Retargeting: qué es y en qué se diferencia del targeting",
  date: "2018-03-28",
  category: "Paid search",
  cover: "/images/blog/retargeting/cover-es.webp",
  excerpt:
    "El retargeting trae de vuelta a quien ya visitó: carrito, vista de producto, visita sin acción. En qué se diferencia del targeting, qué tipos existen y cómo no molestar a la audiencia.",
  lead: [
    "El retargeting (remarketing) muestra ads a gente que ya tocó el sitio o la app pero no terminó el goal. El targeting encuentra audiencia nueva por género, geo, intereses; el retargeting trabaja con una base caliente.",
    "Abajo: cómo funciona en la práctica, tipos de campaña, dónde configurarlo y riesgos típicos. Las tácticas de fiestas son otro post; esto es la base.",
  ],
  faq: [
    {
      q: "¿Retargeting y remarketing son lo mismo?",
      a: "En esencia sí: devolver una audiencia conocida. «Retarget» es más común en el habla de Yandex, «remarketing» en Google — el significado se comparte.",
    },
    {
      q: "¿En qué se diferencia del targeting?",
      a: "El targeting selecciona una audiencia en la red. El retargeting alcanza a quien ya estuvo contigo (sitio, app, lista). A menudo van en pareja: atraer primero, luego traer de vuelta.",
    },
    {
      q: "¿Hace falta un contador de analytics?",
      a: "Sí: Metrica, pixel/tag del sistema de ads, eventos (carrito, vista). Sin datos, los segmentos están vacíos.",
    },
    {
      q: "¿Qué es el retargeting dinámico?",
      a: "Mostrar productos/servicios concretos que la persona vio, no un banner genérico de la tienda. Suele ser más fuerte que «solo el logo».",
    },
    {
      q: "¿Por qué molestan los ads?",
      a: "Muchas impresiones de un mismo creativo y sin excluir compradores. Cap de frecuencia, refresca la oferta, excluye conversiones.",
    },
    {
      q: "¿Cuánto tarda en verse el efecto?",
      a: "Depende del tamaño de la audiencia y la oferta. Espera semanas para reunir stats; no esperes magia en tres días.",
    },
    {
      q: "¿El retargeting es solo para tiendas?",
      a: "No. Servicios, B2B, contenido — segmentos por visitas a URLs clave y leads a medias.",
    },
    {
      q: "¿Se conecta con el SEO?",
      a: "No de forma directa. Indirectamente: las mismas landings y la oferta afectan al orgánico y a la tasa de conversión del retargeting.",
    },
  ],
  sections: [
    {
      title: "Cómo se ve en la práctica",
      level: 2,
      paras: [
        "Un visitante vio un producto, lo añadió al carrito y se fue. El segmento «carrito sin compra» recibe ads con ese producto o un descuento — en sitios de la Red Publicitaria de Yandex, búsqueda, social o display, según la cuenta.",
        "El punto no es perseguir a todo el mundo, sino un recordatorio relevante en la etapa del funnel donde ya se vio interés.",
      ],
      lists: [
        {
          intro: "Bucle típico:",
          items: [
            "el contador registra la acción",
            "segmento en audiencias/cuenta",
            "campaña de retarget aparte",
            "oferta por etapa (vista / carrito / formulario abandonado)",
          ],
        },
      ],
    },
    {
      title: "Por qué encaja en ads",
      level: 2,
      paras: [
        "El tráfico frío es más caro de llevar a compra. Parte de las visitas se rompe en la elección, el envío, una distracción — el retarget más barato recupera a quien ya estaba caliente.",
        "Cada etapa del funnel tiene su creativo: una promo para quien se va rápido, valor de categoría para quien mira fichas, recordatorio de carrito para casi-compradores.",
      ],
      lists: [
        {
          intro: "Etapas de toque:",
          items: [
            "visita sin profundidad",
            "vista de producto/servicio",
            "carrito / formulario no enviado",
            "compra (excluir o upsell)",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Retargeting vs targeting",
      level: 2,
      paras: [
        "El targeting fija a quién encontrar online: demografía, intereses, geo, look-alike. El retargeting trabaja con quien ya dejó rastro digital contigo.",
        "Goal compartido — ventas y leads; entrada distinta: «encontrar a la gente adecuada» vs «traer de vuelta a los conocidos». Un targeting flojo da poca base para retarget; sin retarget pagas otra vez por la misma gente vía campañas frías.",
      ],
      tables: [
        {
          caption: "En corto",
          headers: ["", "Targeting", "Retargeting"],
          rows: [
            ["Audiencia", "Nueva por condiciones", "Ya en el sitio/en el CRM"],
            ["Trabajo", "Atraer", "Devolver / convertir"],
            ["Datos", "Intereses, geo, look-alike", "Eventos, listas, pixel"],
          ],
        },
      ],
    },
    {
      title: "Tipos de retargeting",
      level: 2,
      paras: [
        "**Clásico** — ads generales de sitio/marca a quien se fue sin acción goal.",
        "**Dinámico** — fichas de producto/servicio desde un feed por vista. **Search** — alcance por consultas/audiencias con paid search. **Email** — cartas a quien dejó un contacto. **In-app** — traer de vuelta a usuarios de la app.",
      ],
      lists: [
        {
          intro: "Qué elegir al empezar:",
          items: [
            "segmentos de Metrica/pixel por URL",
            "excluir compradores",
            "feed dinámico si el catálogo es grande",
            "presupuesto aparte y cap de frecuencia",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting de fiestas",
          href: "/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Dónde lo configuras",
      level: 2,
      paras: [
        "Yandex Direct + Metrica/Audiences, Google Ads + tag, cuentas de ads social con su pixel. Una base: código del sitio, goals, segmentos, una campaña no mezclada con búsqueda fría.",
        "Primero reúne volumen de visitas y eventos correctos — si no, las audiencias son demasiado pequeñas para aprender.",
      ],
      lists: [
        {
          intro: "Mínimo de lanzamiento:",
          items: [
            "contador y goals verificados",
            "segmento estuvo aquí / no compró",
            "cap de frecuencia",
            "UTM en los ads",
            "oferta no más vieja que lo que hay en el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
      ],
    },
    {
      title: "Riesgos y sentido común",
      level: 2,
      paras: [
        "Un banner idéntico y insistente daña la marca. El retarget no ve una compra offline — la persona ya compró a un competidor mientras el anuncio sigue persiguiendo.",
        "Excluye compradores, rota creativos, limita la vida del segmento. Mide por CPA/ROMI del segmento, no por «siento que vemos mucho nuestro banner».",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "El retarget refuerza el funnel pero no sustituye producto, precios y usabilidad del sitio. Un checkout que pierde no se salva con un segmento perfecto.",
        },
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
  ],
  related: [
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "utm-metki",
    "tselevaya-auditoriya",
    "mobilnaya-reklama-google",
  ],
};

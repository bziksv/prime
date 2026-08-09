import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-prilozheniy — same structure as RU JSON. */
export const prodvizheniePrilozheniyEn: BlogPost = {
  slug: "prodvizhenie-prilozheniy",
  title: "How to promote mobile apps and games",
  date: "2019-10-24",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-prilozheniy/cover-en.webp",
  excerpt:
    "App and game promotion: creatives and playables, category-interest targeting, event-based remarketing, deep links, and retention metrics — without racing only for installs.",
  lead: [
    "Stores are crowded: an install alone is not a business. You need users who stay and pay — or complete the target action inside the app.",
    "Below: working levers — interactive creatives, precise targeting, retention via remarketing, deep links to the right screen, and a metrics stack. Other people’s 2010s case numbers are order-of-magnitude cues, not your plan.",
  ],
  faq: [
    {
      q: "Where should app promotion start?",
      a: "With the product and a success event (signup, level, purchase), then the store page, a tracker, and a test budget on 1–2 channels — not “every network” at once.",
    },
    {
      q: "Are playable ads always better than video?",
      a: "They often lift engagement for games, but cost more to produce and aren’t universal. Compare CPI/CPA and user quality, not only CTR.",
    },
    {
      q: "Do installs or retention matter more?",
      a: "For business — retention and value. Cheap installs that churn on day 1 burn the budget.",
    },
    {
      q: "Why do deep links matter?",
      a: "So ads land on the right screen (promo, product), not a bare hub. Without the app — a deferred deep link via the store.",
    },
    {
      q: "Should I run remarketing after the app is deleted?",
      a: "Some MMPs/networks can work with event and ID audiences within platform rules. Follow policies and consent.",
    },
    {
      q: "Is one social network enough for app promotion?",
      a: "Sometimes for a test. Scale usually needs several sources and hard unit-economics comparison.",
    },
  ],
  sections: [
    {
      title: "Creative: video, vertical, playable",
      level: 2,
      paras: [
        "On a phone, vertical full-screen wins: a trailer or gameplay without a “letter” on screen. For games, playable ads are strong — a short demo with “play” and a path to install: the person already tried the mechanic.",
        "Other people’s cases (including playable vs square video) show conversion order of magnitude, but your genre and offer matter more. Test 2–3 creative hypotheses on one segment.",
      ],
      lists: [
        {
          intro: "What to check in the creative:",
          items: [
            "a clear hook in the first seconds",
            "vertical for mobile feed",
            "one offer / one action",
            "a link to the post-install screen",
          ],
        },
      ],
    },
    {
      title: "Targeting: find “your” category",
      level: 2,
      paras: [
        "Showing “everyone 18–45” burns budget. Demographics, geo, interests work — and for apps, critically, people who already installed apps from your category (strategy, utilities, shopping).",
        "Competitor followers on social sometimes give cheap reach, but not always installs. In practical launches a “has a genre game on device” segment often beats “liked a competitor page”. Segment by interest freshness: 90 / 180 / 360 days — and compare CPI and retention, not only volume.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Note",
          text: "Platforms and signals change (privacy, iOS, policies). Check available audiences in the current ad account; don’t blindly copy outdated “2018 interests” guides.",
        },
      ],
      links: [
        {
          label: "Google mobile ads",
          href: "/en/blog/mobilnaya-reklama-google/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Retention: event-based remarketing",
      level: 2,
      paras: [
        "New installs without return are a budget hole. Remarketing works on people who already know the app: warm inactive users, bring them back to purchase, finish an abandoned flow.",
        "A strong lever is in-app events (level, cart, product view). Different segments get different creatives: a “haven’t been in a while” discount, an abandoned-item reminder, an offer to those who viewed but didn’t add to cart. Dynamic formats help when the catalog is large.",
      ],
      lists: [
        {
          intro: "Remarketing jobs:",
          items: [
            "bring back “sleepers”",
            "finish an incomplete action",
            "raise LTV of payers",
            "don’t hammer those who bought recently",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Deep links: a short path to action",
      level: 2,
      paras: [
        "A plain store link without context leaves the user on the storefront. A deep link goes straight to a promo, product, or level. If the app isn’t installed — deferred deep link: install, then the right screen.",
        "Without deep links the funnel is longer and more people drop off. For app campaigns this is basic engineering, not a “feature later”.",
      ],
      links: [
        {
          label: "Deep links",
          href: "/en/blog/diplinking/",
        },
      ],
    },
    {
      title: "From theory to practice and metrics",
      level: 2,
      paras: [
        "Launch scheme: lock the success event → tracker/MMP → creatives and segments → deep links → weekly review of CPI, CR to event, retention D1/D7. Scale only segments with solid retention.",
        "In cases like remarketing + deep links for e-com apps, growth isn’t “network magic” — it’s segmentation: abandoned cart ≠ mere view. Other people’s CTRs and thousands of installs illustrate the approach; count your own numbers in the account.",
      ],
      lists: [
        {
          intro: "Minimum metrics:",
          items: [
            "CPI / cost of the target event",
            "retention D1 and D7",
            "CR to payment or key action",
            "organic share after a paid spike",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
      ],
    },
  ],
  closing: [
    "App promotion is creative and precise targeting at the entrance, events and deep links in the middle, retention and LTV at the exit. Count more than installs: cheap traffic without retention is the most expensive kind.",
  ],
  related: [
    "diplinking",
    "mobilnaya-reklama-google",
    "retargeting",
    "tselevaya-auditoriya",
    "istochniki-trafika",
    "veb-prilozhenie",
  ],
};

/** ES overlay for prodvizhenie-prilozheniy — same structure as RU JSON / EN. */
export const prodvizheniePrilozheniyEs: BlogPost = {
  slug: "prodvizhenie-prilozheniy",
  title: "Cómo promocionar apps móviles y juegos",
  date: "2019-10-24",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-prilozheniy/cover.webp",
  excerpt:
    "Promoción de apps y juegos: creatives y playables, targeting por interés de categoría, remarketing por eventos, deep links y métricas de retention — sin correr solo por installs.",
  lead: [
    "Las stores están saturadas: un install solo no es un negocio. Necesitas usuarios que se queden y paguen — o completen la acción objetivo dentro de la app.",
    "Abajo: palancas que funcionan — creatives interactivos, targeting preciso, retention vía remarketing, deep links a la pantalla correcta y un stack de métricas. Las cifras de cases ajenos de 2010s son pistas de orden de magnitud, no tu plan.",
  ],
  faq: [
    {
      q: "¿Por dónde debe empezar la promoción de una app?",
      a: "Por el producto y un evento de éxito (signup, nivel, compra), luego la página de la store, un tracker y un presupuesto de test en 1–2 canales — no «todas las redes» a la vez.",
    },
    {
      q: "¿Los playable ads siempre son mejores que el vídeo?",
      a: "A menudo suben el engagement en juegos, pero cuestan más de producir y no son universales. Compara CPI/CPA y calidad de usuario, no solo CTR.",
    },
    {
      q: "¿Importan más los installs o la retention?",
      a: "Para el negocio — retention y valor. Installs baratos que hacen churn el día 1 queman el presupuesto.",
    },
    {
      q: "¿Por qué importan los deep links?",
      a: "Para que los ads aterricen en la pantalla correcta (promo, producto), no en un hub pelado. Sin la app — un deferred deep link vía la store.",
    },
    {
      q: "¿Debo correr remarketing tras borrar la app?",
      a: "Algunos MMPs/redes pueden trabajar con audiencias de eventos e IDs dentro de las reglas de la plataforma. Sigue políticas y consentimiento.",
    },
    {
      q: "¿Basta una red social para promocionar la app?",
      a: "A veces para un test. Escalar suele pedir varias fuentes y una comparación dura de unit economics.",
    },
  ],
  sections: [
    {
      title: "Creative: vídeo, vertical, playable",
      level: 2,
      paras: [
        "En el teléfono gana el vertical full-screen: un trailer o gameplay sin «carta» en pantalla. Para juegos, los playable ads son fuertes — una demo corta con «jugar» y camino al install: la persona ya probó la mecánica.",
        "Cases ajenos (incluido playable vs vídeo cuadrado) muestran el orden de magnitud de conversión, pero importan más tu género y oferta. Prueba 2–3 hipótesis de creative en un segmento.",
      ],
      lists: [
        {
          intro: "Qué revisar en el creative:",
          items: [
            "un gancho claro en los primeros segundos",
            "vertical para el feed móvil",
            "una oferta / una acción",
            "un enlace a la pantalla post-install",
          ],
        },
      ],
    },
    {
      title: "Targeting: encuentra «tu» categoría",
      level: 2,
      paras: [
        "Mostrar a «todos 18–45» quema presupuesto. Funcionan demografía, geo, intereses — y para apps, de forma crítica, gente que ya instaló apps de tu categoría (estrategia, utilidades, shopping).",
        "Los followers de competidores en redes a veces dan reach barato, pero no siempre installs. En lanzamientos prácticos un segmento «tiene un juego del género en el dispositivo» a menudo gana a «le gustó la page del competidor». Segmenta por frescura de interés: 90 / 180 / 360 días — y compara CPI y retention, no solo volumen.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Nota",
          text: "Plataformas y señales cambian (privacy, iOS, políticas). Revisa audiencias disponibles en la cuenta de ads actual; no copies a ciegas guías obsoletas de «intereses de 2018».",
        },
      ],
      links: [
        {
          label: "Ads móviles de Google",
          href: "/es/blog/mobilnaya-reklama-google/",
        },
        {
          label: "Audiencia target",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Retention: remarketing por eventos",
      level: 2,
      paras: [
        "Installs nuevos sin retorno son un agujero de presupuesto. El remarketing trabaja con gente que ya conoce la app: usuarios inactivos cálidos, traerlos de vuelta a la compra, terminar un flow abandonado.",
        "Una palanca fuerte son los eventos in-app (nivel, carrito, view de producto). Distintos segmentos reciben creatives distintos: un descuento de «hace tiempo que no entras», un recordatorio de ítem abandonado, una oferta a quien vio pero no añadió al carrito. Los formatos dinámicos ayudan cuando el catálogo es grande.",
      ],
      lists: [
        {
          intro: "Trabajos del remarketing:",
          items: [
            "traer de vuelta a los «dormidos»",
            "terminar una acción incompleta",
            "subir el LTV de los pagadores",
            "no martillar a quien compró hace poco",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Deep links: un camino corto a la acción",
      level: 2,
      paras: [
        "Un enlace plano a la store sin contexto deja al usuario en el escaparate. Un deep link va directo a una promo, producto o nivel. Si la app no está instalada — deferred deep link: install, luego la pantalla correcta.",
        "Sin deep links el funnel es más largo y más gente cae. Para campañas de apps esto es ingeniería básica, no una «feature después».",
      ],
      links: [
        {
          label: "Deep links",
          href: "/es/blog/diplinking/",
        },
      ],
    },
    {
      title: "De la teoría a la práctica y las métricas",
      level: 2,
      paras: [
        "Esquema de lanzamiento: fija el evento de éxito → tracker/MMP → creatives y segmentos → deep links → review semanal de CPI, CR al evento, retention D1/D7. Escala solo segmentos con retention sólida.",
        "En cases como remarketing + deep links para apps e-com, el crecimiento no es «magia de la red» — es segmentación: carrito abandonado ≠ mera view. CTRs ajenos y miles de installs ilustran el enfoque; cuenta tus propios números en la cuenta.",
      ],
      lists: [
        {
          intro: "Métricas mínimas:",
          items: [
            "CPI / coste del evento objetivo",
            "retention D1 y D7",
            "CR a pago o acción clave",
            "cuota orgánica tras un pico de pago",
          ],
        },
      ],
      links: [
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
        {
          label: "Ticket medio",
          href: "/es/blog/sredniy-chek/",
        },
      ],
    },
  ],
  closing: [
    "La promoción de apps es creative y targeting preciso a la entrada, eventos y deep links en el medio, retention y LTV a la salida. Cuenta más que installs: tráfico barato sin retention es el más caro.",
  ],
  related: [
    "diplinking",
    "mobilnaya-reklama-google",
    "retargeting",
    "tselevaya-auditoriya",
    "istochniki-trafika",
    "veb-prilozhenie",
  ],
};

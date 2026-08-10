import type { BlogPost } from "../../../data/blog";

/** EN overlay for diplinking — same structure as RU JSON. */
export const diplinkingEn: BlogPost = {
  slug: "diplinking",
  title: "Deeplinking in ads: send the user straight to the right screen",
  date: "2019-08-20",
  category: "Digital marketing",
  cover: "/images/blog/diplinking/cover-en.webp",
  excerpt:
    "What a deeplink and deferred deeplink are, why they matter in app ads and messaging, and how not to lose conversion on the path from banner to the right screen.",
  lead: [
    "Deeplinking is a link that opens not “just the app” or the site home, but a specific screen — a product card, promo, cart, or booking section.",
    "Below: regular and deferred deeplinks, where they fit in acquisition and retention, and the mistakes that kill conversion. Platforms and SDKs change; the user-path logic matters more than a “magic sales button.”",
  ],
  faq: [
    {
      q: "How does a deeplink differ from a normal URL?",
      a: "A normal site page URL is also a “deep” link relative to the homepage. In mobile marketing, “deeplink” more often means opening a specific app screen (or web→app).",
    },
    {
      q: "What is a deferred deeplink?",
      a: "If the app isn’t installed yet: the user goes to the store first, installs, then lands on the screen the original link pointed to after the first launch.",
    },
    {
      q: "Are deeplinks only for apps?",
      a: "They’re strongest in app ads. For the website, direct landing URLs in ads and email matter: the same “straight to the offer” principle.",
    },
    {
      q: "Where are deeplinks used?",
      a: "Banners, push, SMS, email, retargeting, partner and in-app placements — anywhere a click should lead to a concrete action.",
    },
    {
      q: "Does a deeplink guarantee a purchase?",
      a: "No. It shortens the path and cuts drop-off. Conversion depends on the offer, price, screen UX, and trust.",
    },
    {
      q: "Are Universal Links / App Links the same thing?",
      a: "Those are iOS/Android mechanisms so an HTTPS link opens the app. Deeplink is the idea of “where to land”; Universal/App Links are how to wire it technically.",
    },
    {
      q: "What should I measure?",
      a: "Clicks → installs/opens → reaching the target screen → conversion and CPA/ROAS. Compare with campaigns without a deeplink.",
    },
    {
      q: "What’s a common mistake?",
      a: "Advertising a screen that’s hard to find in the menu, while the deeplink lands on home or breaks after install — the user is disappointed.",
    },
  ],
  sections: [
    {
      title: "What deeplinking is",
      level: 2,
      paras: [
        "On a website, a “deep” link is a specific page URL. In apps, a deeplink leads to an activity screen: product, category, promo, profile. The user doesn’t have to dig through the menu for what the ad already promised.",
        "A deferred deeplink is what you need when the app isn’t installed yet: link → install → first launch → promised screen. Without it, installs often dump people on onboarding and the campaign loses its point.",
      ],
      lists: [
        {
          intro: "Two modes:",
          items: [
            "app installed — straight to the target screen",
            "not installed — deferred: store → then the target screen",
            "web ads without an app — a direct landing URL with UTM",
          ],
        },
      ],
      links: [
        {
          label: "Clickable link",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Why a deeplink in an ad campaign",
      level: 2,
      paras: [
        "Every extra tap after an ad click hurts conversion. If the banner promises a flight discount and the home catalog opens, part of the audience leaves.",
        "A deeplink aligns the expectation with the screen — whether you’re acquiring new users (promo, first order) or reactivating people (forgotten feature, repurchase, abandoned cart).",
      ],
      lists: [
        {
          intro: "Channels where it matters most:",
          items: [
            "mobile and programmatic ads",
            "push and in-app messages",
            "email and SMS",
            "retargeting and CRM promos",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "A deeplink doesn’t replace the offer and doesn’t “guarantee” revenue growth. It removes friction on the path to the screen you’re advertising.",
        },
      ],
    },
    {
      title: "Acquisition: a seasonal promo example",
      level: 2,
      paras: [
        "In peak periods (holidays, seasonal sales, travel) marketers launch specials for new customers. Without a deeplink, high ad CTR often doesn’t become an order: people can’t find the promo terms.",
        "With a deeplink, the click lands on a screen with the offer and an action button. For e-commerce and travel that’s especially critical: the catalog is huge, and manual search kills impulse.",
      ],
      lists: [
        {
          intro: "Before launch, check:",
          items: [
            "the screen exists and opens on a fresh build",
            "the promo is still live at click time",
            "there’s a fallback web URL if the app isn’t available",
            "campaign UTM/tags reach analytics",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Retention and re-engagement",
      level: 2,
      paras: [
        "Budget often goes to new users, while reactivating existing ones is cheaper. A deeplink in push or email goes straight to a forgotten feature, renewal, upsell, or payment screen (after auth).",
        "Example: a discount on a rarely used feature for people who never tried it. Without a deep link, “check section X” rarely survives to the right screen.",
      ],
      lists: [
        {
          intro: "Typical retention screens:",
          items: [
            "abandoned cart / unfinished order",
            "personal promo code",
            "subscription renewal",
            "content the user didn’t finish",
          ],
        },
      ],
    },
    {
      title: "Tech: what a marketer should watch",
      level: 2,
      paras: [
        "URI schemes, Universal Links (iOS), App Links (Android), MMP attribution params (AppsFlyer, Adjust and similar tools) — engineering and mobile analytics territory. For marketers, the brief matters: which screen, which params (product id, promo id), and behavior when the app isn’t installed.",
        "Test on real devices before scaling budget: cold install, already installed app, outdated version, web fallback.",
      ],
      lists: [
        {
          intro: "Mini brief for engineering:",
          items: [
            "screen routes and required params",
            "deferred behavior after install",
            "fallback to the mobile site",
            "analytics events: open → screen → conversion",
            "handling broken or stale IDs",
          ],
        },
      ],
      tables: [
        {
          caption: "Regular vs deferred deeplink",
          headers: ["Situation", "User expectation"],
          rows: [
            ["App installed", "Straight to the target screen"],
            ["No app", "Install → then the same screen"],
            ["Broken link", "Fallback / clear error, not silence"],
            ["Site only", "Direct landing URL + UTM"],
          ],
        },
      ],
    },
    {
      title: "Mistakes and a sane minimum",
      level: 2,
      paras: [
        "Don’t advertise something that isn’t in navigation or is buried three taps deep without a deeplink. Don’t send every creative to splash/onboarding. Don’t forget retention: a deeplink helps after the first install too.",
        "The rule: the fewer steps from click to the promised screen, the better the odds of a goal action — with a live offer and decent UX.",
      ],
      lists: [
        {
          intro: "Checklist before scale:",
          items: [
            "offer = screen",
            "deferred and fallback exist",
            "A/B: with deeplink vs without on a small budget",
            "monitor open errors",
            "creative and landing/screen consistency",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "stavki-direkt",
    "optimizatsiya-konversii",
    "reklamnyy-kabinet",
    "metrika-tseli",
    "lending",
  ],
};

/** ES overlay for diplinking — same structure as RU JSON / EN. */
export const diplinkingEs: BlogPost = {
  slug: "diplinking",
  title: "Deeplinking en ads: llevar al usuario directo a la pantalla correcta",
  date: "2019-08-20",
  category: "Digital marketing",
  cover: "/images/blog/diplinking/cover-es.webp",
  excerpt:
    "Qué son un deeplink y un deferred deeplink, por qué importan en ads de apps y mensajería, y cómo no perder conversión en el camino del banner a la pantalla correcta.",
  lead: [
    "Deeplinking es un enlace que no abre «solo la app» o la home del sitio, sino una pantalla concreta — una ficha de producto, promo, carrito o sección de reserva.",
    "Abajo: deeplinks normales y deferred, dónde encajan en acquisition y retention, y los errores que matan la conversión. Plataformas y SDKs cambian; la lógica del camino del usuario importa más que un «botón mágico de ventas».",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un deeplink de una URL normal?",
      a: "Una URL de página del sitio también es un enlace «deep» respecto a la home. En marketing móvil, «deeplink» suele significar abrir una pantalla concreta de la app (o web→app).",
    },
    {
      q: "¿Qué es un deferred deeplink?",
      a: "Si la app aún no está instalada: el usuario va primero a la store, instala y tras el primer launch aterriza en la pantalla a la que apuntaba el enlace original.",
    },
    {
      q: "¿Los deeplinks son solo para apps?",
      a: "Son más fuertes en ads de apps. Para el website, importan las URLs de landing directas en ads y email: el mismo principio de «directo a la oferta».",
    },
    {
      q: "¿Dónde se usan los deeplinks?",
      a: "Banners, push, SMS, email, retargeting, placements de partners e in-app — donde un clic deba llevar a una acción concreta.",
    },
    {
      q: "¿Un deeplink garantiza una compra?",
      a: "No. Acorta el camino y corta el drop-off. La conversión depende de la oferta, el precio, el UX de la pantalla y la confianza.",
    },
    {
      q: "¿Universal Links / App Links son lo mismo?",
      a: "Son mecanismos de iOS/Android para que un enlace HTTPS abra la app. Deeplink es la idea de «dónde aterrizar»; Universal/App Links son cómo cablearlo técnicamente.",
    },
    {
      q: "¿Qué debo medir?",
      a: "Clics → installs/opens → llegar a la pantalla objetivo → conversión y CPA/ROAS. Compara con campañas sin deeplink.",
    },
    {
      q: "¿Cuál es un error habitual?",
      a: "Anunciar una pantalla difícil de encontrar en el menú, mientras el deeplink aterriza en home o se rompe tras el install — el usuario se decepciona.",
    },
  ],
  sections: [
    {
      title: "Qué es el deeplinking",
      level: 2,
      paras: [
        "En un website, un enlace «deep» es la URL de una página concreta. En apps, un deeplink lleva a una pantalla de actividad: producto, categoría, promo, perfil. El usuario no tiene que buscar en el menú lo que el ad ya prometió.",
        "Un deferred deeplink es lo que necesitas cuando la app aún no está instalada: enlace → install → primer launch → pantalla prometida. Sin él, los installs a menudo tiran a la gente al onboarding y la campaña pierde el sentido.",
      ],
      lists: [
        {
          intro: "Dos modos:",
          items: [
            "app instalada — directo a la pantalla objetivo",
            "no instalada — deferred: store → luego la pantalla objetivo",
            "ads web sin app — una URL de landing directa con UTM",
          ],
        },
      ],
      links: [
        {
          label: "Enlace clicable",
          href: "/es/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Por qué un deeplink en una campaña de ads",
      level: 2,
      paras: [
        "Cada toque extra tras el clic del ad daña la conversión. Si el banner promete un descuento de vuelo y se abre el catálogo de home, parte de la audiencia se va.",
        "Un deeplink alinea la expectativa con la pantalla — ya sea acquisition de usuarios nuevos (promo, primer pedido) o reactivación (feature olvidada, recompra, carrito abandonado).",
      ],
      lists: [
        {
          intro: "Canales donde más importa:",
          items: [
            "ads móviles y programáticos",
            "push y mensajes in-app",
            "email y SMS",
            "retargeting y promos de CRM",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Un deeplink no sustituye la oferta ni «garantiza» crecimiento de revenue. Quita fricción en el camino a la pantalla que estás anunciando.",
        },
      ],
    },
    {
      title: "Acquisition: ejemplo de promo de temporada",
      level: 2,
      paras: [
        "En periodos pico (fiestas, rebajas de temporada, viajes) los marketers lanzan especiales para clientes nuevos. Sin deeplink, un CTR alto del ad a menudo no se convierte en pedido: la gente no encuentra los términos de la promo.",
        "Con deeplink, el clic aterriza en una pantalla con la oferta y un botón de acción. Para e-commerce y travel es especialmente crítico: el catálogo es enorme y la búsqueda manual mata el impulso.",
      ],
      lists: [
        {
          intro: "Antes del lanzamiento, revisa:",
          items: [
            "la pantalla existe y abre en un build fresco",
            "la promo sigue viva en el momento del clic",
            "hay una URL web de fallback si la app no está disponible",
            "UTM/tags de campaña llegan a analytics",
          ],
        },
      ],
      links: [
        {
          label: "Pujas de Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Retention y re-engagement",
      level: 2,
      paras: [
        "El presupuesto a menudo va a usuarios nuevos, mientras reactivar a los existentes sale más barato. Un deeplink en push o email va directo a una feature olvidada, renovación, upsell o pantalla de pago (tras auth).",
        "Ejemplo: un descuento en una feature poco usada para quien nunca la probó. Sin deep link, «mira la sección X» rara vez llega a la pantalla correcta.",
      ],
      lists: [
        {
          intro: "Pantallas típicas de retention:",
          items: [
            "carrito abandonado / pedido a medias",
            "código promo personal",
            "renovación de suscripción",
            "contenido que el usuario no terminó",
          ],
        },
      ],
    },
    {
      title: "Tech: qué debe vigilar un marketer",
      level: 2,
      paras: [
        "URI schemes, Universal Links (iOS), App Links (Android), params de atribución MMP (AppsFlyer, Adjust y tools similares) — territorio de ingeniería y analytics móvil. Para marketers importa el brief: qué pantalla, qué params (product id, promo id) y el comportamiento cuando la app no está instalada.",
        "Prueba en dispositivos reales antes de escalar presupuesto: install en frío, app ya instalada, versión desactualizada, fallback web.",
      ],
      lists: [
        {
          intro: "Mini brief para ingeniería:",
          items: [
            "rutas de pantalla y params obligatorios",
            "comportamiento deferred tras el install",
            "fallback al sitio móvil",
            "eventos de analytics: open → pantalla → conversión",
            "manejo de IDs rotos o viejos",
          ],
        },
      ],
      tables: [
        {
          caption: "Deeplink normal vs deferred",
          headers: ["Situación", "Expectativa del usuario"],
          rows: [
            ["App instalada", "Directo a la pantalla objetivo"],
            ["Sin app", "Install → luego la misma pantalla"],
            ["Enlace roto", "Fallback / error claro, no silencio"],
            ["Solo sitio", "URL de landing directa + UTM"],
          ],
        },
      ],
    },
    {
      title: "Errores y un mínimo sensato",
      level: 2,
      paras: [
        "No anuncies algo que no está en la navegación o que está enterrado a tres toques sin deeplink. No mandes cada creative a splash/onboarding. No olvides retention: un deeplink también ayuda tras el primer install.",
        "La regla: cuantos menos pasos del clic a la pantalla prometida, mejores las odds de una acción objetivo — con oferta viva y UX decente.",
      ],
      lists: [
        {
          intro: "Checklist antes de escalar:",
          items: [
            "oferta = pantalla",
            "existen deferred y fallback",
            "A/B: con deeplink vs sin él en presupuesto pequeño",
            "monitorizar errores de open",
            "coherencia de creative y landing/pantalla",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "stavki-direkt",
    "optimizatsiya-konversii",
    "reklamnyy-kabinet",
    "metrika-tseli",
    "lending",
  ],
};

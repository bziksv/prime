import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayt-pered-reklamoy — same structure as RU JSON. */
export const saytPeredReklamoyEn: BlogPost = {
  slug: "sayt-pered-reklamoy",
  title: "Don’t burn the budget: check the site before launching ads",
  date: "2020-03-18",
  category: "Paid search",
  cover: "/images/blog/sayt-pered-reklamoy/cover-en.webp",
  excerpt:
    "A site checklist before Yandex Direct and Google Ads: goals and KPIs, forms and thank-you pages, analytics, first screen, trust, mobile, and lead delivery — so you don’t burn clicks on a raw landing.",
  lead: [
    "If paid search brings “zero leads,” the ad account isn’t always the only culprit: people click and hit an unclear offer, a broken form, or a site with no goals in analytics. Tweaking bids on a raw landing is the fastest way to burn budget.",
    "Below: a practical order for checking a site before you launch Direct/Ads. We don’t promise “conversion ×N in a couple of days” from old case studies; an honest checklist pass is usually cheaper than a week of blind spend. Common account mistakes are covered in related articles.",
  ],
  faq: [
    {
      q: "Where should I start if ads are already running?",
      a: "Pause or set a minimal limit + a quick audit of goals, forms, and the first screen. Otherwise you keep paying for the same bounce.",
    },
    {
      q: "Which KPI should I use?",
      a: "One tied to money: leads by cost, revenue within an ROAS ceiling. CTR and click count are secondary.",
    },
    {
      q: "Do I need a thank-you page?",
      a: "A handy way to capture a form submit as one goal. Alternative — a submit event; what matters is unambiguous lead tracking.",
    },
    {
      q: "Does every site need a quiz?",
      a: "No. A quiz is one engagement format. A clear offer and a working lead form matter more.",
    },
    {
      q: "Does a favicon lower CPC?",
      a: "It helps tab recognition; don’t count on it in the Direct auction. Priority — offer, form, mobile.",
    },
    {
      q: "Does a site check replace campaign setup?",
      a: "No. It’s a filter: “can we send traffic yet?” Keywords, negatives, and bids are separate.",
    },
    {
      q: "Are critical fixes usually done in days?",
      a: "Critical holes (forms, goals, mobile CTA) are often fixed in days, not months. Cosmetics follow KPI priority.",
    },
  ],
  sections: [
    {
      title: "Goal and KPI first, account second",
      level: 2,
      paras: [
        "Lock the business job in numbers: how many leads/sales per period and at what cost. Align the wording with the team so you don’t later argue “ads vs site.”",
        "On-site goal actions must lead to that job. A “free interior design” form when the KPI is “apartment sales” inflates contacts without revenue. Cut decorative CTAs that don’t feed the funnel.",
      ],
      lists: [
        {
          intro: "Minimum at the start:",
          items: [
            "one main business goal",
            "2–4 goal actions that lead to it",
            "KPI in money or lead cost",
            "shared understanding between marketing and sales",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Leads must be counted",
      level: 2,
      paras: [
        "Every form (or key CTA) must produce a measurable event: a thank-you page or a submit event. Otherwise you can’t tell “ads don’t work” from “leads are lost.”",
        "In Metrica and Analytics it helps to keep one shared goal for a successful lead so you don’t sum ten micro-goals with duplicates by hand. Goal value (estimated revenue per lead) helps read reports in money, not only visits — take the formula from your margin and sales conversion, not someone else’s example.",
        "Check delivery: emails aren’t in spam, leads reach CRM/messenger, a phone test submit works. Clicks that never reach a manager are pure waste.",
      ],
      lists: [
        {
          intro: "Control run:",
          items: [
            "submit a lead from desktop and mobile",
            "see thank-you / success",
            "the goal fired in analytics",
            "a manager received the lead",
            "UTM/source is visible in the report",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "First screen and offer",
      level: 2,
      paras: [
        "In 5 seconds it should be clear: what you sell, for whom, and why you’re useful. Logo, headline, region, a clear image — no “we’re a team of professionals” with no subject.",
        "The buying benefit belongs on the first screen: timeline, guarantee, price “from,” difference from the market. If someone came from an ad “windows in 3 days” and the landing says nothing about that — bounce is almost guaranteed.",
        "Lead forms — visible, short, with a clear promise. Field overload and a tiny “submit” in the footer kill conversion more than any bid.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Quiz or calculator",
          text: "A quiz or calculator helps if it simplifies choice. Don’t add one for fashion: a broken quiz is worse than a simple form.",
        },
      ],
    },
    {
      title: "Trust, navigation, prices, and service",
      level: 2,
      paras: [
        "Menus and sections must be unambiguous: a person from an ad shouldn’t have to guess the IA. Promos — large and honest (new/old price, gift terms), not tiny gray type.",
        "Openness: about the company, production, cases, certificates — what lowers “fly-by-night” fear. Prices current and in a clear currency; if “price on request” — explain why and offer a quick estimate.",
        "Product/object photos without blur and generic filler swaps. Reviews — a separate block or in the card. Delivery and payment, FAQ, contacts (clickable phone on mobile), hours — the basic service layer without which ads feed bounces.",
      ],
      lists: [
        {
          intro: "Quick trust audit:",
          items: [
            "About / facts / cases exist",
            "prices or a logical path to a quote",
            "reviews or proof of work",
            "delivery/payment/FAQ",
            "current contacts in the header and on the contacts page",
          ],
        },
      ],
    },
    {
      title: "Mobile and the small things that cost money",
      level: 2,
      paras: [
        "Responsive is mandatory: the same CTAs, forms, and phones must work from a phone. Mobile traffic share has long been high — pouring paid search onto a desktop-only landing is pointless.",
        "Favicon and a tidy tab are brand hygiene; don’t expect auction miracles from them. Load speed and no overlay banners blocking the form matter more.",
        "Score the site honestly (e.g. 1–5 by block). Fix “1–2” items before scaling budget; cosmetics can run in parallel.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Site vs account",
          text: "Don’t confuse “raw site” with “broken account.” After fixing the landing you still need negatives, relevant ads, and limits — see campaign mistakes and Direct budget pieces.",
        },
      ],
      links: [
        {
          label: "Ad campaign mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Launch order without burning budget",
      level: 2,
      paras: [
        "Build a short checklist: goals → lead tracking → first screen → forms → trust → mobile → lead test. Only after critical items are green raise the daily budget.",
        "At the start: a narrow core and a limit, daily CPA/lead control for the first days. If there are clicks but no leads — back to the site and ad relevance, not “+50% bids again.”",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "KPI in money, not CTR",
            "leads are counted and reach people",
            "offer = the ad promise",
            "mobile = a full channel",
            "landing first, budget scale second",
          ],
        },
      ],
    },
  ],
  closing: [
    "Walk the critical items once on phone and laptop, send a test lead, and only then turn on a normal limit — cheaper than “figuring it out while burning spend.”",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "metriki-reklamy",
    "audit-reklamnoy-kampanii",
    "stavki-direkt",
  ],
};

/** ES overlay for sayt-pered-reklamoy — same structure as RU JSON / EN. */
export const saytPeredReklamoyEs: BlogPost = {
  slug: "sayt-pered-reklamoy",
  title: "No quemes el presupuesto: revisa el sitio antes de lanzar ads",
  date: "2020-03-18",
  category: "Búsqueda de pago",
  cover: "/images/blog/sayt-pered-reklamoy/cover-es.webp",
  excerpt:
    "Checklist del sitio antes de Yandex Direct y Google Ads: objetivos y KPIs, formularios y thank-you, analytics, primera pantalla, confianza, móvil y entrega de leads — para no quemar clics en un landing crudo.",
  lead: [
    "Si la búsqueda de pago trae «cero leads», el account de ads no siempre es el único culpable: la gente hace clic y choca con una oferta poco clara, un formulario roto o un sitio sin goals en analytics. Ajustar pujas en un landing crudo es la forma más rápida de quemar presupuesto.",
    "Abajo: un orden práctico para revisar el sitio antes de lanzar Direct/Ads. No prometemos «conversión ×N en un par de días» de casos viejos; pasar un checklist honesto suele ser más barato que una semana de gasto a ciegas. Los errores habituales de cuenta están en artículos relacionados.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si los ads ya están en marcha?",
      a: "Pausa o pon un límite mínimo + una auditoría rápida de goals, formularios y primera pantalla. Si no, sigues pagando el mismo bounce.",
    },
    {
      q: "¿Qué KPI usar?",
      a: "Uno ligado al dinero: leads por coste, revenue dentro de un techo de ROAS. CTR y número de clics son secundarios.",
    },
    {
      q: "¿Hace falta una thank-you page?",
      a: "Una forma cómoda de capturar el envío del formulario como un goal. Alternativa — un evento de submit; lo que importa es un tracking inequívoco del lead.",
    },
    {
      q: "¿Todo sitio necesita un quiz?",
      a: "No. Un quiz es un formato de engagement. Importan más una oferta clara y un formulario de lead que funcione.",
    },
    {
      q: "¿Un favicon baja el CPC?",
      a: "Ayuda al reconocimiento en la pestaña; no cuentes con él en la subasta de Direct. Prioridad — oferta, formulario, móvil.",
    },
    {
      q: "¿La revisión del sitio sustituye el setup de campaña?",
      a: "No. Es un filtro: «¿ya podemos enviar tráfico?». Keywords, negativos y pujas van aparte.",
    },
    {
      q: "¿Las correcciones críticas suelen hacerse en días?",
      a: "Los agujeros críticos (formularios, goals, CTA móvil) a menudo se arreglan en días, no en meses. La cosmética sigue la prioridad del KPI.",
    },
  ],
  sections: [
    {
      title: "Objetivo y KPI primero, cuenta después",
      level: 2,
      paras: [
        "Fija el trabajo de negocio en números: cuántos leads/ventas por periodo y a qué coste. Alinea el wording con el equipo para no discutir luego «ads vs sitio».",
        "Las acciones-objetivo on-site deben llevar a ese trabajo. Un formulario de «diseño de interiores gratis» cuando el KPI es «ventas de pisos» infla contactos sin revenue. Corta CTAs decorativos que no alimenten el funnel.",
      ],
      lists: [
        {
          intro: "Mínimo al inicio:",
          items: [
            "un objetivo de negocio principal",
            "2–4 acciones-objetivo que lleven a él",
            "KPI en dinero o coste por lead",
            "entendimiento compartido entre marketing y ventas",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Los leads deben contarse",
      level: 2,
      paras: [
        "Cada formulario (o CTA clave) debe producir un evento medible: thank-you page o evento de submit. Si no, no distingues «los ads no funcionan» de «los leads se pierden».",
        "En Métrica y Analytics ayuda mantener un goal compartido para un lead exitoso y no sumar a mano diez micro-goals con duplicados. El valor del goal (revenue estimado por lead) ayuda a leer informes en dinero, no solo visitas — toma la fórmula de tu margen y conversión de ventas, no del ejemplo de otro.",
        "Comprueba la entrega: los emails no van a spam, los leads llegan a CRM/messenger, un submit de prueba por teléfono funciona. Clics que nunca llegan a un manager son puro desperdicio.",
      ],
      lists: [
        {
          intro: "Pasada de control:",
          items: [
            "enviar un lead desde desktop y móvil",
            "ver thank-you / éxito",
            "el goal se disparó en analytics",
            "un manager recibió el lead",
            "UTM/fuente visible en el informe",
          ],
        },
      ],
      links: [
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Primera pantalla y oferta",
      level: 2,
      paras: [
        "En 5 segundos debe quedar claro: qué vendes, para quién y por qué eres útil. Logo, titular, región, una imagen clara — sin «somos un equipo de profesionales» sin sujeto.",
        "El beneficio de compra va en la primera pantalla: plazos, garantía, precio «desde», diferencia frente al mercado. Si alguien llegó de un ad «ventanas en 3 días» y el landing no dice nada de eso — el bounce es casi seguro.",
        "Formularios de lead — visibles, cortos, con una promesa clara. Sobrecarga de campos y un «enviar» diminuto en el footer matan la conversión más que cualquier puja.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Quiz o calculadora",
          text: "Un quiz o calculadora ayuda si simplifica la elección. No lo añadas por moda: un quiz roto es peor que un formulario simple.",
        },
      ],
    },
    {
      title: "Confianza, navegación, precios y servicio",
      level: 2,
      paras: [
        "Menús y secciones deben ser inequívocos: quien viene de un ad no debería adivinar la IA. Promos — grandes y honestas (precio nuevo/viejo, condiciones del regalo), no tipografía gris diminuta.",
        "Apertura: sobre la empresa, producción, casos, certificados — lo que baja el miedo a «empresa fantasma». Precios actuales y en moneda clara; si «precio bajo petición» — explica por qué y ofrece un presupuesto rápido.",
        "Fotos de producto/objeto sin blur ni rellenos genéricos. Reseñas — bloque aparte o en la ficha. Entrega y pago, FAQ, contactos (teléfono clicable en móvil), horario — la capa básica de servicio sin la cual los ads alimentan bounces.",
      ],
      lists: [
        {
          intro: "Auditoría rápida de confianza:",
          items: [
            "existen About / hechos / casos",
            "precios o un camino lógico al presupuesto",
            "reseñas o prueba de trabajo",
            "entrega/pago/FAQ",
            "contactos actuales en el header y en la página de contactos",
          ],
        },
      ],
    },
    {
      title: "Móvil y los detalles que cuestan dinero",
      level: 2,
      paras: [
        "Responsive es obligatorio: los mismos CTAs, formularios y teléfonos deben funcionar desde el teléfono. La cuota de tráfico móvil lleva tiempo alta — verter búsqueda de pago en un landing solo desktop no tiene sentido.",
        "Favicon y una pestaña ordenada son higiene de marca; no esperes milagros de subasta. Importan más la velocidad de carga y que ningún overlay bloquee el formulario.",
        "Puntúa el sitio con honestidad (p. ej. 1–5 por bloque). Arregla los ítems «1–2» antes de escalar presupuesto; la cosmética puede ir en paralelo.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Sitio vs cuenta",
          text: "No confundas «sitio crudo» con «cuenta rota». Tras arreglar el landing sigues necesitando negativos, ads relevantes y límites — ver piezas de errores de campaña y presupuesto de Direct.",
        },
      ],
      links: [
        {
          label: "Errores de campaña publicitaria",
          href: "/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Presupuesto de Yandex Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Orden de lanzamiento sin quemar presupuesto",
      level: 2,
      paras: [
        "Arma un checklist corto: goals → tracking de leads → primera pantalla → formularios → confianza → móvil → test de lead. Solo cuando los ítems críticos estén en verde sube el presupuesto diario.",
        "Al inicio: un núcleo estrecho y un límite, control diario de CPA/lead los primeros días. Si hay clics pero no leads — vuelve al sitio y a la relevancia del ad, no a «+50% de pujas otra vez».",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "KPI en dinero, no en CTR",
            "los leads se cuentan y llegan a personas",
            "oferta = la promesa del ad",
            "móvil = un canal completo",
            "landing primero, escala de presupuesto después",
          ],
        },
      ],
    },
  ],
  closing: [
    "Pasa una vez los ítems críticos en teléfono y portátil, envía un lead de prueba y solo entonces enciende un límite normal — más barato que «averiguarlo mientras quemas spend».",
  ],
  related: [
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "metriki-reklamy",
    "audit-reklamnoy-kampanii",
    "stavki-direkt",
    "oshibki-reklamnoy-kampanii",
  ],
};

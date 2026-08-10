import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-reklamnoy-kampanii — same structure as RU JSON. */
export const analizReklamnoyKampaniiEn: BlogPost = {
  slug: "analiz-reklamnoy-kampanii",
  title: "Ad campaign analysis in Yandex Direct and Google Ads: a checklist",
  date: "2020-03-25",
  category: "Paid search",
  cover: "/images/blog/analiz-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "How to break down a paid search campaign in Yandex Metrica and Google Analytics: account linking, keywords, placements, demographics, time, devices, geo, landings, and audiences — without judging by clicks alone.",
  lead: [
    "Lots of clicks and few leads almost always means one of three things: traffic is going to the wrong places, the landing or offer can’t convert, or you’re reading the wrong slices. The checklist below is the order for reviewing a Yandex Direct or Google Ads campaign through analytics.",
    "Report names and click paths in the UIs have changed — especially after GA4. Follow the meaning of each slice, not 2020 screenshots. The broader audit process and KPI set live in related pieces.",
  ],
  faq: [
    {
      q: "Where should you start if KPIs miss?",
      a: "Check the ad account link to Metrica or Analytics and the goals. Without conversions in reports, bid optimization is guessing.",
    },
    {
      q: "Is CTR enough?",
      a: "No. You need conversions, CPA or ROAS, and lead quality. High CTR with no leads burns budget.",
    },
    {
      q: "How many clicks before cutting a placement?",
      a: "Aim for a meaningful sample — often tens to hundreds of clicks in a niche — or it’s noise. There is no universal “exactly 100.”",
    },
    {
      q: "Should you turn off mobile if conversion is low?",
      a: "More often lower the bid or fix the mobile landing — don’t cut the whole segment at once.",
    },
    {
      q: "How is this different from a full ad audit?",
      a: "This piece is an operational analytics review. An audit is wider: account tech, structure, and the client report.",
    },
    {
      q: "Do Direct and Google Ads analyze the same way?",
      a: "Slice logic is shared — keywords, devices, geo, time. Report names differ; the meaning is the same.",
    },
    {
      q: "Do you need Session Replay / Webvisor?",
      a: "Useful if you suspect landing UX. Filter ad visits and see where the path to a lead breaks.",
    },
  ],
  sections: [
    {
      title: "Linking the account to analytics",
      level: 2,
      paras: [
        "Before slices, confirm Direct sends data to Metrica (counter in campaign or account settings) and Google Ads is linked to the right Analytics property. Otherwise “keyword analysis” has no conversions.",
        "Lock goals: lead, call, purchase. Without a goal the checklist becomes traffic browsing.",
      ],
      lists: [
        {
          intro: "Minimum before the review:",
          items: [
            "counter or property on the site",
            "Direct ↔ Metrica or Ads ↔ Analytics link",
            "goals or ecommerce",
            "UTM or auto-tagging if you use segments",
            "a period with enough stats",
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
      title: "Direct + Metrica: keywords and placements",
      level: 2,
      paras: [
        "By keyword, see which phrases drive goal actions and which only clicks. Boost winners — bids, ads, a separate group; send junk to negatives at campaign or group level.",
        "For YAN and smart formats, review placements: what brings conversions versus spend only. Ban weak domains after enough data — not after one random click.",
        "Don’t mix search and networks in one conclusion: network placements and search queries are different levers.",
      ],
      lists: [
        {
          intro: "What to lock for keywords and placements:",
          items: [
            "top by conversions and by spend with no conversions",
            "negative list for junk wording",
            "ban empty placements",
            "separate view: search vs YAN",
          ],
        },
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "Audience: gender, age, time, devices, geo",
      level: 2,
      paras: [
        "Demographics and age show who actually converts — not who “clicks nicely.” Bid adjustments by gender or age make sense after a stable sample, not one day.",
        "Time of day and weekdays: boost hours and days with better economics, especially if leads are handled only in business hours. Generic “best hours from an article” lose to your report.",
        "Devices: low mobile conversion is more often fixed with bid and landing adaptivity, not a full cut. Geo: keep regions that pay back; cut or lower bids where spend has no result.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Examples like “women convert better, men order more expensively” are illustrations. Transfer the adjustment logic — not someone else’s numbers.",
        },
      ],
    },
    {
      title: "Landing pages, segments, and attribution",
      level: 2,
      paras: [
        "The landing-page report checks that the ad goes to a relevant URL, not “homepage for everyone.” Fix weak landings or change the keyword → ad → URL link.",
        "Segments — new vs returning, bounce, depth — help adjust bids and build retargeting conditions. Lookalikes and Metrica audiences are the next step after clear basic slices.",
        "Attribution models (last click, first meaningful, and others) change who gets credit. Check several models if the purchase path is long — or you’ll undervalue the top of the funnel.",
      ],
      lists: [
        {
          intro: "Optional extras:",
          items: [
            "session replay on Direct visits — landing UX",
            "ecommerce — products, cart, promo codes",
            "call tracking — if leads are phone calls",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Google Ads + Analytics: the same order",
      level: 2,
      paras: [
        "Link Ads and Analytics accounts, check goals and conversions. Then the logic mirrors Direct: keywords and search terms → exclusions; UTM/campaign segments; demographics; time; devices; geo; landing pages.",
        "In GA4 report names differ from Universal Analytics in old guides. Look for equivalents: campaign traffic, conversion events, demographics, tech, geo, entry pages.",
        "Ecommerce and attribution in the Google stack solve the same jobs: understand channel contribution and assortment — not “paint a pretty CTR.”",
      ],
      notes: [
        {
          kind: "tip",
          text: "Don’t copy 2019–2020 UA click-paths one-to-one into GA4. Check the current interface and Google Help.",
        },
      ],
    },
    {
      title: "How to close the review",
      level: 2,
      paras: [
        "The checklist outcome is an action list: what to boost, what to negative, what to fix on the site, which budget to shift. Without a change list, analysis stays “we looked at reports.”",
        "Change one or two levers per iteration and let stats accumulate. Rebuilding the whole account at once hides what worked.",
      ],
      lists: [
        {
          intro: "Output template:",
          items: [
            "problem (few leads / high CPA)",
            "slice where the cause shows",
            "action (negative / bid / landing / geo)",
            "review date",
            "expected KPI",
          ],
        },
      ],
    },
  ],
  closing: [
    "Link the account to analytics, walk keywords → placements → audience → landings, and write a week of fixes — faster than twisting bids by eye on overall CTR.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "stavki-direkt",
    "minus-slova-direkt",
    "byudzhet-yandeks-direkt",
    "utm-metki",
  ],
};

/** ES overlay for analiz-reklamnoy-kampanii — same structure as RU JSON / EN. */
export const analizReklamnoyKampaniiEs: BlogPost = {
  slug: "analiz-reklamnoy-kampanii",
  title: "Análisis de campaña de ads en Yandex Direct y Google Ads: checklist",
  date: "2020-03-25",
  category: "Paid search",
  cover: "/images/blog/analiz-reklamnoy-kampanii/cover-es.webp",
  excerpt:
    "Cómo desglosar una campaña de paid search en Yandex Metrica y Google Analytics: enlace de cuentas, keywords, emplazamientos, demografía, hora, dispositivos, geo, landings y audiencias — sin juzgar solo por clics.",
  lead: [
    "Muchos clics y pocos leads casi siempre significa una de tres cosas: el tráfico va a sitios equivocados, la landing o la oferta no convierten, o lees los cortes incorrectos. El checklist de abajo es el orden para revisar una campaña de Yandex Direct o Google Ads a través de analytics.",
    "Los nombres de informes y las rutas de clic en las UIs han cambiado — sobre todo tras GA4. Sigue el significado de cada corte, no capturas de 2020. El proceso de auditoría más amplio y el set de KPIs viven en piezas relacionadas.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar si fallan los KPIs?",
      a: "Comprueba el enlace de la cuenta de ads a Metrica o Analytics y los goals. Sin conversiones en los informes, optimizar pujas es adivinar.",
    },
    {
      q: "¿Basta el CTR?",
      a: "No. Necesitas conversiones, CPA o ROAS y calidad del lead. Un CTR alto sin leads quema presupuesto.",
    },
    {
      q: "¿Cuántos clics antes de cortar un emplazamiento?",
      a: "Apunta a una muestra con sentido — a menudo decenas o cientos de clics en un nicho — o es ruido. No hay un «exactamente 100» universal.",
    },
    {
      q: "¿Apago móvil si la conversión es baja?",
      a: "Más a menudo baja la puja o arregla la landing móvil — no cortes todo el segmento de golpe.",
    },
    {
      q: "¿En qué se diferencia de una auditoría completa de ads?",
      a: "Esta pieza es una revisión operativa de analytics. Una auditoría es más amplia: técnica de cuenta, estructura e informe al cliente.",
    },
    {
      q: "¿Direct y Google Ads se analizan igual?",
      a: "La lógica de cortes es compartida — keywords, dispositivos, geo, hora. Los nombres de informes difieren; el significado es el mismo.",
    },
    {
      q: "¿Hace falta Session Replay / Webvisor?",
      a: "Útil si sospechas UX de landing. Filtra visitas de ads y mira dónde se rompe el camino al lead.",
    },
  ],
  sections: [
    {
      title: "Enlazar la cuenta con analytics",
      level: 2,
      paras: [
        "Antes de los cortes, confirma que Direct envía datos a Metrica (contador en ajustes de campaña o cuenta) y que Google Ads está enlazado a la property correcta de Analytics. Si no, el «análisis de keywords» no tiene conversiones.",
        "Fija goals: lead, llamada, compra. Sin un goal el checklist se vuelve paseo por el tráfico.",
      ],
      lists: [
        {
          intro: "Mínimo antes de la revisión:",
          items: [
            "contador o property en el sitio",
            "enlace Direct ↔ Metrica o Ads ↔ Analytics",
            "goals o ecommerce",
            "UTM o auto-tagging si usas segmentos",
            "un periodo con stats suficientes",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de ads",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Direct + Metrica: keywords y emplazamientos",
      level: 2,
      paras: [
        "Por keyword, mira qué frases impulsan acciones de goal y cuáles solo clics. Potencia ganadores — pujas, ads, un grupo aparte; manda basura a negativos a nivel campaña o grupo.",
        "En YAN y formatos smart, revisa emplazamientos: qué trae conversiones frente a solo gasto. Prohíbe dominios flojos tras datos suficientes — no tras un clic al azar.",
        "No mezcles búsqueda y redes en una sola conclusión: emplazamientos de red y consultas de búsqueda son palancas distintas.",
      ],
      lists: [
        {
          intro: "Qué fijar para keywords y emplazamientos:",
          items: [
            "líderes por conversiones y por gasto sin conversiones",
            "lista de negativos para formulaciones basura",
            "prohibir emplazamientos vacíos",
            "vista aparte: búsqueda vs YAN",
          ],
        },
      ],
      links: [
        {
          label: "Negativos en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "Audiencia: género, edad, hora, dispositivos, geo",
      level: 2,
      paras: [
        "Demografía y edad muestran quién convierte de verdad — no quién «hace clic bonito». Los ajustes de puja por género o edad tienen sentido tras una muestra estable, no un día.",
        "Hora del día y días de la semana: potencia horas y días con mejor economía, sobre todo si los leads solo se atienden en horario laboral. Un genérico «mejores horas de un artículo» pierde frente a tu informe.",
        "Dispositivos: una conversión móvil baja más a menudo se arregla con puja y adaptividad de landing, no con un corte total. Geo: mantén regiones que se pagan solas; corta o baja pujas donde el gasto no da resultado.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Ejemplos como «las mujeres convierten mejor, los hombres piden más caro» son ilustraciones. Transfiere la lógica del ajuste — no los números ajenos.",
        },
      ],
    },
    {
      title: "Landing pages, segmentos y atribución",
      level: 2,
      paras: [
        "El informe de landing comprueba que el anuncio va a una URL relevante, no «homepage para todos». Arregla landings flojas o cambia el enlace keyword → anuncio → URL.",
        "Segmentos — nuevos vs recurrentes, bounce, profundidad — ayudan a ajustar pujas y armar condiciones de retargeting. Lookalikes y audiencias de Metrica son el siguiente paso tras cortes básicos claros.",
        "Los modelos de atribución (último clic, primer toque con sentido y otros) cambian a quién se acredita. Revisa varios modelos si el camino de compra es largo — o infravalorarás el inicio del funnel.",
      ],
      lists: [
        {
          intro: "Extras opcionales:",
          items: [
            "session replay en visitas de Direct — UX de landing",
            "ecommerce — productos, carrito, códigos promo",
            "call tracking — si los leads son llamadas",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría de campaña de ads",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Google Ads + Analytics: el mismo orden",
      level: 2,
      paras: [
        "Enlaza cuentas de Ads y Analytics, comprueba goals y conversiones. Luego la lógica espeja Direct: keywords y search terms → exclusiones; segmentos UTM/campaña; demografía; hora; dispositivos; geo; landing pages.",
        "En GA4 los nombres de informes difieren de Universal Analytics en las guías viejas. Busca equivalentes: tráfico de campaña, eventos de conversión, demografía, tech, geo, páginas de entrada.",
        "Ecommerce y atribución en el stack de Google resuelven los mismos trabajos: entender aportación del canal y surtido — no «pintar un CTR bonito».",
      ],
      notes: [
        {
          kind: "tip",
          text: "No copies rutas de clic de UA 2019–2020 uno a uno en GA4. Revisa la interfaz actual y la Ayuda de Google.",
        },
      ],
    },
    {
      title: "Cómo cerrar la revisión",
      level: 2,
      paras: [
        "El resultado del checklist es una lista de acciones: qué potenciar, qué negativizar, qué arreglar en el sitio, qué presupuesto mover. Sin lista de cambios, el análisis se queda en «miramos informes».",
        "Cambia una o dos palancas por iteración y deja acumular stats. Reconstruir toda la cuenta de golpe oculta qué funcionó.",
      ],
      lists: [
        {
          intro: "Plantilla de salida:",
          items: [
            "problema (pocos leads / CPA alto)",
            "corte donde se ve la causa",
            "acción (negativo / puja / landing / geo)",
            "fecha de revisión",
            "KPI esperado",
          ],
        },
      ],
    },
  ],
  closing: [
    "Enlaza la cuenta con analytics, recorre keywords → emplazamientos → audiencia → landings y escribe una semana de fixes — más rápido que torcer pujas a ojo por el CTR global.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "stavki-direkt",
    "minus-slova-direkt",
    "byudzhet-yandeks-direkt",
    "utm-metki",
  ],
};

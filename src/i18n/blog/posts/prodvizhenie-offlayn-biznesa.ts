import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-offlayn-biznesa — same structure as RU JSON. */
export const prodvizhenieOfflaynBiznesaEn: BlogPost = {
  slug: "prodvizhenie-offlayn-biznesa",
  title: "Promoting an offline business: maps, reviews, hyperlocal, and visit measurement",
  date: "2019-08-29",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-offlayn-biznesa/cover-en.webp",
  excerpt:
    "How to bring people to a location: map listings, reviews, hyperlocal ads and SMS, outdoor/indoor, and the online→offline link — without betting on outdated MAC radar.",
  lead: [
    "A café, clinic, salon, and neighborhood shop don’t live on the storefront alone. Maps, reviews, “nearby” ads, and clear visit/call measurement decide whether people find you on a phone and reach the door.",
    "Below: a working channel set for an offline point. Platform UIs and prices change; privacy and ID randomization weakened old MAC-collection schemes — don’t build strategy only on them.",
  ],
  faq: [
    {
      q: "Where should I start without a big budget?",
      a: "Listings on Yandex/Google/2GIS with full NAP, photos, and hours + replies to reviews. Then geo ads around the point.",
    },
    {
      q: "Does an offline business need a website?",
      a: "Preferably: services, prices, directions, form/phone. Maps bring people; the site removes doubts — both with the same address and phone.",
    },
    {
      q: "Does Wi‑Fi/MAC radar still work?",
      a: "Weaker than in the late 2010s: OSes randomize MAC, platform rules are stricter. Don’t promise a “full list of passers-by” as a growth base.",
    },
    {
      q: "How do I know ads brought someone in?",
      a: "Promo codes, call tracking, UTM to a landing, “how did you hear” surveys, and where available — store visit / offline conversions in ad accounts. Cross-check several signals.",
    },
    {
      q: "Can I use fake reviews?",
      a: "No. Platforms ban, clients spot templates. Better ask for a real review after a good visit and calmly handle negativity.",
    },
    {
      q: "Are “by district” SMS legal?",
      a: "Only via carriers/vendors and under mailing rules and consent. Spam without a basis risks blocks and complaints.",
    },
  ],
  sections: [
    {
      title: "Maps and directories",
      level: 2,
      paras: [
        "Yandex Maps / Business, Google Maps, and 2GIS are the first screen for “near me”. Fill name, exact address, phone, site, hours, category; add facade and interior photos.",
        "Paid options (showcase, promos, highlighting) make sense after a solid listing and reviews. Watch clicks, calls from the listing, and consistent NAP on the site and in ads.",
      ],
      lists: [
        {
          intro: "Listing minimum:",
          items: [
            "exact address and map pin",
            "current phone",
            "hours without “surprises”",
            "photos and a short service description",
            "replies to reviews",
          ],
        },
      ],
    },
    {
      title: "Reviews and reputation",
      level: 2,
      paras: [
        "Reviews affect location choice no less than ads. Run profiles on maps and industry platforms, reply to negativity on the merits, ask happy clients for a review without “five stars required” scripts.",
        "Mention monitoring (alerts, reputation tools) helps catch issues before they pile up in map results.",
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Hyperlocal and nearby SMS",
      level: 2,
      paras: [
        "A geopolygon/radius in Yandex Direct, Google Ads, and peers delivers the offer to people who live, work, or visit near the point. In creative — “why come here” and a clear reason (promo, slot, new item).",
        "Hyperlocal SMS via carriers is a narrow channel: short copy, offer, link/phone, send time without night spam. Check rules and consent; SMS details are in a separate piece.",
      ],
      links: [
        {
          label: "Hyperlocal targeting",
          href: "/en/blog/giperlokalnyy-targeting/",
        },
        {
          label: "SMS campaigns",
          href: "/en/blog/sms-rassylka/",
        },
      ],
    },
    {
      title: "Outdoor, indoor, and measurement",
      level: 2,
      paras: [
        "Digital out-of-home and indoor screens in malls/crowded spots work for reach and reminder. Rates and reach depend on city and network — plan a test with call tracking or a promo code, not a “magic” price from old reviews.",
        "Online→offline link: site visit, then into the point — measured with promo codes, call tracking, and where available store visit / offline conversions. Several truth sources beat one report.",
      ],
      lists: [
        {
          intro: "What to measure:",
          items: [
            "calls from maps and ads",
            "promo codes/coupons by channel",
            "UTM to a “how to get here” landing",
            "checkout survey “how did you hear”",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "MAC and Wi‑Fi: 2020s expectations",
      level: 2,
      paras: [
        "Earlier people discussed collecting MAC via hotspot or “radar” for retargeting. Today MAC randomization and platform rules narrowed the channel a lot. Your own Wi‑Fi with clear consent is fine as a service; “collect every passer-by at a competitor” — don’t bake into the plan.",
        "Stronger and calmer: listings, reviews, account geo, a clear offer, and visit measurement.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Privacy",
          text: "Any audience collection and upload — only on lawful grounds and under ad-account rules. Don’t promise clients “full MAC control” as the main growth channel.",
        },
      ],
    },
  ],
  closing: [
    "An offline point stays visible online through maps, reviews, local ads, and honest measurement. Start with NAP and reputation, add hyperlocal; don’t make outdated “MAC radar” schemes the strategy base.",
  ],
  related: [
    "giperlokalnyy-targeting",
    "sms-rassylka",
    "otzyvy-dlya-prodazh",
    "tochki-kontakta",
    "metriki-reklamy",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for prodvizhenie-offlayn-biznesa — same structure as RU JSON / EN. */
export const prodvizhenieOfflaynBiznesaEs: BlogPost = {
  slug: "prodvizhenie-offlayn-biznesa",
  title: "Promocionar un negocio offline: mapas, reseñas, hiperlocal y medición de visitas",
  date: "2019-08-29",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-offlayn-biznesa/cover.webp",
  excerpt:
    "Cómo llevar gente a un local: fichas en mapas, reseñas, ads hiperlocales y SMS, outdoor/indoor y el enlace online→offline — sin apostar por el radar MAC anticuado.",
  lead: [
    "Un café, clínica, salón y tienda de barrio no viven solo del escaparate. Mapas, reseñas, ads «cerca» y medición clara de visitas/llamadas deciden si la gente te encuentra en el teléfono y llega a la puerta.",
    "Abajo: un set de canales que funciona para un punto offline. Las UIs y precios de las plataformas cambian; la privacidad y la aleatorización de IDs debilitaron los viejos esquemas de recogida MAC — no armes la estrategia solo sobre ellos.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar sin un presupuesto grande?",
      a: "Fichas en Yandex/Google/2GIS con NAP completo, fotos y horario + respuestas a reseñas. Luego ads geo alrededor del punto.",
    },
    {
      q: "¿Un negocio offline necesita sitio web?",
      a: "Preferible: servicios, precios, cómo llegar, formulario/teléfono. Los mapas traen gente; el sitio quita dudas — ambos con la misma dirección y teléfono.",
    },
    {
      q: "¿El radar Wi‑Fi/MAC sigue funcionando?",
      a: "Más débil que a finales de los 2010: los SO aleatorizan el MAC, las reglas de las plataformas son más estrictas. No prometas una «lista completa de peatones» como base de crecimiento.",
    },
    {
      q: "¿Cómo sé que los ads trajeron a alguien?",
      a: "Códigos promo, call tracking, UTM a una landing, encuestas «cómo nos conociste» y, donde exista, store visit / conversiones offline en cuentas de ads. Cruza varias señales.",
    },
    {
      q: "¿Se pueden usar reseñas falsas?",
      a: "No. Las plataformas banean, los clientes detectan plantillas. Mejor pedir una reseña real tras una buena visita y manejar la negatividad con calma.",
    },
    {
      q: "¿Los SMS «por distrito» son legales?",
      a: "Solo vía operadores/vendors y bajo reglas de mailing y consentimiento. Spam sin base arriesga bloqueos y quejas.",
    },
  ],
  sections: [
    {
      title: "Mapas y fichas",
      level: 2,
      paras: [
        "Yandex Maps / Business, Google Maps y 2GIS son la primera pantalla de «cerca de mí». Completa nombre, dirección exacta, teléfono, sitio, horario, categoría; añade fotos de fachada e interior.",
        "Las opciones de pago (escaparate, promos, highlighting) tienen sentido tras una ficha sólida y reseñas. Vigila clics, llamadas desde la ficha y un NAP coherente en el sitio y en los ads.",
      ],
      lists: [
        {
          intro: "Mínimo de la ficha:",
          items: [
            "dirección exacta y pin en el mapa",
            "teléfono actual",
            "horario sin «sorpresas»",
            "fotos y una descripción corta del servicio",
            "respuestas a reseñas",
          ],
        },
      ],
    },
    {
      title: "Reseñas y reputación",
      level: 2,
      paras: [
        "Las reseñas afectan la elección del local no menos que los ads. Mantén perfiles en mapas y plataformas del sector, responde a la negatividad con sustancia, pide a clientes contentos una reseña sin scripts de «cinco estrellas obligatorias».",
        "Mencionar monitorización (alertas, tools de reputación) ayuda a pillar problemas antes de que se acumulen en resultados de mapas.",
      ],
      links: [
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Hiperlocal y SMS cercanos",
      level: 2,
      paras: [
        "Un geopolígono/radio en Yandex Direct, Google Ads y equivalentes lleva la oferta a quien vive, trabaja o visita cerca del punto. En el creativo — «por qué venir aquí» y un motivo claro (promo, hueco, novedad).",
        "Los SMS hiperlocales vía operadores son un canal estrecho: copy corto, oferta, link/teléfono, hora de envío sin spam nocturno. Comprueba reglas y consentimiento; el detalle de SMS está en otra pieza.",
      ],
      links: [
        {
          label: "Targeting hiperlocal",
          href: "/es/blog/giperlokalnyy-targeting/",
        },
        {
          label: "Campañas SMS",
          href: "/es/blog/sms-rassylka/",
        },
      ],
    },
    {
      title: "Outdoor, indoor y medición",
      level: 2,
      paras: [
        "Digital out-of-home y pantallas indoor en malls/sitios concurridos sirven para reach y recordatorio. Tarifas y alcance dependen de ciudad y red — planea un test con call tracking o código promo, no un precio «mágico» de reseñas viejas.",
        "Enlace online→offline: visita al sitio, luego al punto — se mide con códigos promo, call tracking y, donde exista, store visit / conversiones offline. Varias fuentes de verdad ganan a un solo informe.",
      ],
      lists: [
        {
          intro: "Qué medir:",
          items: [
            "llamadas desde mapas y ads",
            "códigos promo/cupones por canal",
            "UTM a una landing «cómo llegar»",
            "encuesta en caja «cómo nos conociste»",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "MAC y Wi‑Fi: expectativas en los 2020",
      level: 2,
      paras: [
        "Antes se hablaba de recoger MAC vía hotspot o «radar» para retargeting. Hoy la aleatorización de MAC y las reglas de las plataformas estrecharon mucho el canal. Tu propio Wi‑Fi con consentimiento claro está bien como servicio; «recoger cada peatón en un competidor» — no lo metas en el plan.",
        "Más fuerte y calmado: fichas, reseñas, geo de la cuenta, oferta clara y medición de visitas.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Privacidad",
          text: "Cualquier recogida y subida de audiencia — solo con base legal y bajo las reglas de la cuenta de ads. No prometas a clientes «control total de MAC» como canal principal de crecimiento.",
        },
      ],
    },
  ],
  closing: [
    "Un punto offline se mantiene visible online con mapas, reseñas, ads locales y medición honesta. Empieza por NAP y reputación, suma hiperlocal; no hagas de esquemas anticuados de «radar MAC» la base de la estrategia.",
  ],
  related: [
    "giperlokalnyy-targeting",
    "sms-rassylka",
    "otzyvy-dlya-prodazh",
    "tochki-kontakta",
    "metriki-reklamy",
    "skvoznaya-analitika",
  ],
};

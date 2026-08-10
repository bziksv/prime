import type { BlogPost } from "../../../data/blog";

/** EN overlay for giperlokalnyy-targeting — same structure as RU JSON. */
export const giperlokalnyyTargetingEn: BlogPost = {
  slug: "giperlokalnyy-targeting",
  title: "Hyperlocal targeting for business: who needs it and how to pick a tool",
  date: "2019-09-16",
  category: "Digital marketing",
  cover: "/images/blog/giperlokalnyy-targeting/cover-en.webp",
  excerpt:
    "Hyperlocal ads near a location: who it fits, geopolygons in ad accounts, Wi‑Fi/MAC limits and privacy — without spy schemes at competitors.",
  lead: [
    "Hyperlocal targeting shows ads to people who spend time near a specific point: home, office, mall, a route next to you. For a café, clinic, salon, and local service that’s often more precise than broad “interests 25–45.”",
    "Below: who needs the format, why, what audience sources exist, and how to choose between a geopolygon in the account and offline signal collection. Ad-account UIs change; privacy and ID randomization cut old “MAC radar” scenarios — bake that into expectations.",
  ],
  faq: [
    {
      q: "How is hyperlocal different from usual geotargeting?",
      a: "Geo in an account is often city/district. Hyperlocal is a radius or outline around an address, sometimes with “live / work / visit” segments.",
    },
    {
      q: "Who benefits most from hyperlocal targeting?",
      a: "Offline spots with foot/office traffic nearby: food service, services, neighborhood retail, B2B near business centers.",
    },
    {
      q: "Does Wi‑Fi MAC radar still work?",
      a: "Weaker than in the late 2010s: OSes randomize MAC, platform rules and data laws tightened. Don’t build strategy only on “we collected passers-by addresses.”",
    },
    {
      q: "Does a polygon in Google/Yandex replace everything?",
      a: "Handy to start without hardware. Reach depends on platform data and zone size: on a tiny outline impressions may be too few.",
    },
    {
      q: "Can I “catch” a competitor’s audience with a radar?",
      a: "Legally and ethically risky, plus the tech is often unreliable. Better: offer and geo around your own point and an honest competitive message.",
    },
    {
      q: "Do I need my own CRM?",
      a: "For remarketing “already visited you” — yes. To attract new people near the point — account geo tools + creative with a clear reason to walk in.",
    },
  ],
  sections: [
    {
      title: "Who and why",
      level: 2,
      paras: [
        "If clients are physically nearby but walk into familiar places — hyperlocal puts the offer on the phone of people who live, work, or regularly visit near your point: neighbors, offices, mall visitors, people on a typical route.",
        "Jobs: promos for “nearby now,” offers for the block’s residents, reminders for regulars, testing an offer in a tight zone without dumping budget on the whole city.",
      ],
      lists: [
        {
          intro: "It fits well when:",
          items: [
            "you have an offline point or service area",
            "the visit decision is local",
            "you can measure visits/calls/promo codes",
            "creative answers “why come here specifically”",
          ],
        },
      ],
    },
    {
      title: "Where the audience comes from",
      level: 2,
      paras: [
        "In practice you mix: geozones and polygons in ad accounts; your own lists (CRM, loyalty, Wi‑Fi hotspot with consent); partner/DMP data — with contract and provenance checks. Social and maps also run local scenarios — verify current account options.",
        "“Digital footprints” of interests help, but for “next to the door” a geo signal often beats an abstract persona.",
      ],
      notes: [
        {
          title: "Privacy",
          kind: "tip",
          text: "Collect and upload audiences only on lawful grounds and under platform rules. Don’t promise clients a “full MAC list of passers-by” — that’s an outdated and contested model.",
        },
      ],
    },
    {
      title: "Geopolygon in the ad account",
      level: 2,
      paras: [
        "In Google Ads, Yandex Direct, and similar tools you set a point/outline and conditions (radius, “visit regularly,” etc. — option names change). Plus: no hardware purchase, fast test of a district or business center. Minus: platform data doesn’t cover everyone; at “one building” granularity reach and frequency can be weak.",
        "For a wide block or several streets a polygon is often enough to start. For a “here and now” event one historical geo pin may not suffice — check data freshness and audience size in the account.",
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Offline signal collection: 2020s expectations",
      level: 2,
      paras: [
        "Earlier people discussed Wi‑Fi scanners logging MACs near a point, with filters by time and dwell. Today MAC randomization, app-store policies, and data-processing requirements have narrowed that channel a lot. If you use your own network hotspot — only with clear consent and a policy.",
        "Don’t plan an “invisible radar at a competitor” as a working scheme: ethics, access, and data quality work against you. Stronger — your zone, your offer, honest comparison.",
      ],
    },
    {
      title: "How to choose and launch",
      level: 2,
      paras: [
        "Start: polygon/radius in the account + a landing or “nearby” offer + promo code/call tracking. If the zone is tiny and impressions are few — widen the outline or strengthen creative and bid; don’t hunt gray ID collection.",
        "Your CRM clients are a separate remarketing loop. Compare visit/call CPA with a sign and flyers in the same block — fairer than reach for reach’s sake.",
      ],
      lists: [
        {
          intro: "Launch mini-checklist:",
          items: [
            "point and radius on the map",
            "segment (residents / workers / visitors)",
            "offer and promo dates",
            "UTM and measurement method",
            "account rules and personal-data compliance",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "Hyperlocal targeting works when the offer is tied to real geography and measured. Start with account geo tools and your own list; don’t bake outdated “collect every MAC at a competitor’s door” schemes into the plan.",
  ],
  related: [
    "retargeting",
    "regionalnoe-seo",
    "reklamnyy-kabinet",
    "metriki-reklamy",
    "tselevaya-auditoriya",
    "istochniki-trafika",
  ],
};

/** ES overlay for giperlokalnyy-targeting — same structure as RU JSON / EN. */
export const giperlokalnyyTargetingEs: BlogPost = {
  slug: "giperlokalnyy-targeting",
  title: "Targeting hiperlocal para negocios: a quién le sirve y cómo elegir la herramienta",
  date: "2019-09-16",
  category: "Digital marketing",
  cover: "/images/blog/giperlokalnyy-targeting/cover-es.webp",
  excerpt:
    "Ads hiperlocales cerca de una ubicación: a quién encaja, geopolígonos en cuentas de ads, límites de Wi‑Fi/MAC y privacidad — sin esquemas de espionaje a competidores.",
  lead: [
    "El targeting hiperlocal muestra anuncios a quien pasa tiempo cerca de un punto concreto: casa, oficina, centro comercial, una ruta a tu lado. Para un café, clínica, salón y servicio local a menudo es más preciso que «intereses 25–45» amplios.",
    "Abajo: quién necesita el formato, por qué, de dónde sale la audiencia y cómo elegir entre un geopolígono en la cuenta y la recogida de señales offline. Las UIs de las cuentas cambian; la privacidad y la aleatorización de IDs recortan los viejos escenarios de «radar MAC» — mételo en las expectativas.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el hiperlocal del geotargeting habitual?",
      a: "El geo en una cuenta suele ser ciudad/distrito. El hiperlocal es un radio o contorno alrededor de una dirección, a veces con segmentos «vive / trabaja / visita».",
    },
    {
      q: "¿A quién le beneficia más el targeting hiperlocal?",
      a: "Puntos offline con tráfico peatonal/de oficinas cerca: hostelería, servicios, retail de barrio, B2B cerca de centros de negocios.",
    },
    {
      q: "¿El radar Wi‑Fi por MAC sigue funcionando?",
      a: "Más débil que a finales de los 2010: los SO aleatorizan el MAC, las reglas de las plataformas y las leyes de datos se endurecieron. No armes la estrategia solo en «recogimos direcciones de peatones».",
    },
    {
      q: "¿Un polígono en Google/Yandex lo sustituye todo?",
      a: "Útil para empezar sin hardware. El reach depende de los datos de la plataforma y del tamaño de la zona: en un contorno minúsculo puede haber muy pocas impresiones.",
    },
    {
      q: "¿Puedo «cazar» la audiencia de un competidor con un radar?",
      a: "Legal y éticamente arriesgado, y además la tech a menudo no es fiable. Mejor: oferta y geo alrededor de tu propio punto y un mensaje competitivo honesto.",
    },
    {
      q: "¿Necesito un CRM propio?",
      a: "Para remarketing «ya te visitaron» — sí. Para atraer gente nueva cerca del punto — tools de geo de la cuenta + creativo con un motivo claro para entrar.",
    },
  ],
  sections: [
    {
      title: "Quién y por qué",
      level: 2,
      paras: [
        "Si los clientes están físicamente cerca pero entran en sitios conocidos — el hiperlocal pone la oferta en el teléfono de quien vive, trabaja o visita con regularidad cerca de tu punto: vecinos, oficinas, visitantes del mall, gente en una ruta habitual.",
        "Trabajos: promos de «cerca ahora», ofertas para residentes de la manzana, recordatorios a habituales, testear una oferta en una zona estrecha sin tirar presupuesto a toda la ciudad.",
      ],
      lists: [
        {
          intro: "Encaja bien cuando:",
          items: [
            "tienes un punto offline o zona de servicio",
            "la decisión de visita es local",
            "puedes medir visitas/llamadas/códigos promo",
            "el creativo responde «por qué venir aquí en concreto»",
          ],
        },
      ],
    },
    {
      title: "De dónde sale la audiencia",
      level: 2,
      paras: [
        "En la práctica mezclas: geozonas y polígonos en cuentas de ads; tus propias listas (CRM, loyalty, hotspot Wi‑Fi con consentimiento); datos de partner/DMP — con contrato y chequeo de procedencia. Social y mapas también corren escenarios locales — verifica las opciones actuales de la cuenta.",
        "Las «huellas digitales» de intereses ayudan, pero para «junto a la puerta» una señal geo a menudo gana a una persona abstracta.",
      ],
      notes: [
        {
          title: "Privacidad",
          kind: "tip",
          text: "Recoge y sube audiencias solo con base legal y bajo las reglas de la plataforma. No prometas a clientes una «lista MAC completa de peatones» — es un modelo anticuado y discutible.",
        },
      ],
    },
    {
      title: "Geopolígono en la cuenta de ads",
      level: 2,
      paras: [
        "En Google Ads, Yandex Direct y tools similares fijas un punto/contorno y condiciones (radio, «visita con regularidad», etc. — los nombres de opciones cambian). Plus: sin comprar hardware, test rápido de un distrito o centro de negocios. Minus: los datos de la plataforma no cubren a todos; a granularidad de «un edificio» el reach y la frecuencia pueden ser débiles.",
        "Para una manzana amplia o varias calles un polígono a menudo basta para empezar. Para un evento «aquí y ahora» un pin geo histórico puede no bastar — comprueba frescura de datos y tamaño de audiencia en la cuenta.",
      ],
      links: [
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
        {
          label: "Cuenta de anuncios",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Recogida de señales offline: expectativas en los 2020",
      level: 2,
      paras: [
        "Antes se hablaba de escáneres Wi‑Fi que registraban MACs cerca de un punto, con filtros por tiempo y permanencia. Hoy la aleatorización de MAC, las políticas de app stores y los requisitos de tratamiento de datos han estrechado mucho ese canal. Si usas tu propio hotspot de red — solo con consentimiento claro y una política.",
        "No planees un «radar invisible en un competidor» como esquema que funciona: ética, acceso y calidad de datos van en tu contra. Más fuerte — tu zona, tu oferta, comparación honesta.",
      ],
    },
    {
      title: "Cómo elegir y lanzar",
      level: 2,
      paras: [
        "Empieza: polígono/radio en la cuenta + una landing u oferta «cerca» + código promo/call tracking. Si la zona es minúscula y hay pocas impresiones — amplía el contorno o refuerza creativo y puja; no persigas recogida gris de IDs.",
        "Tus clientes de CRM son un loop de remarketing aparte. Compara CPA de visita/llamada con un cartel y flyers en la misma manzana — más justo que reach por el reach.",
      ],
      lists: [
        {
          intro: "Mini-checklist de lanzamiento:",
          items: [
            "punto y radio en el mapa",
            "segmento (residentes / trabajadores / visitantes)",
            "oferta y fechas de promo",
            "UTM y método de medición",
            "reglas de la cuenta y cumplimiento de datos personales",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "El targeting hiperlocal funciona cuando la oferta está ligada a geografía real y se mide. Empieza con tools de geo de la cuenta y tu propia lista; no metas en el plan esquemas anticuados de «recoger cada MAC en la puerta del competidor».",
  ],
  related: [
    "retargeting",
    "regionalnoe-seo",
    "reklamnyy-kabinet",
    "metriki-reklamy",
    "tselevaya-auditoriya",
    "istochniki-trafika",
  ],
};

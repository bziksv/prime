import type { BlogPost } from "../../../data/blog";

/** ES overlay for geotargeting-direkt — same structure as RU JSON. */
export const geotargetingDirektEs: BlogPost = {
  slug: "geotargeting-direkt",
  title: "Geotargeting en Yandex Direct: búsqueda, redes y opciones avanzadas",
  date: "2017-05-05",
  category: "Paid search",
  cover: "/images/blog/geotargeting-direkt/cover-es.webp",
  excerpt:
    "Cómo funciona el geo en Yandex Direct en búsqueda y en redes, para qué existe el geotargeting avanzado y cómo no quemar presupuesto en otras ciudades — sin capturas obsoletas de 2017.",
  lead: [
    "El geotargeting en Yandex Direct limita las impresiones a personas y consultas ligadas a las regiones que necesitas. Para un negocio local es una de las palancas principales de CTR y coste por lead: poco sentido tiene lanzar «reparación de ventanas» a todo el país si solo te mueves por la región.",
    "En 2017 Yandex reforzó el geo en redes (YAN): no solo la región en la consulta, sino el lugar habitual del usuario. Abajo: lógica search vs redes, qué significan las opciones avanzadas y práctica de setup. Contrasta los nombres exactos de toggles en la cuenta actual y en la Help de Direct.",
  ],
  faq: [
    {
      q: "¿El geo en búsqueda y en redes es el mismo?",
      a: "La idea es compartida (mostrar a «tus» regiones); la mecánica difiere: search se apoya en la consulta y la región explícita, las redes en perfil y comportamiento, incluida una ciudad «de casa».",
    },
    {
      q: "¿Qué es el geotargeting avanzado?",
      a: "Históricamente — un ajuste fino de redes: mostrar anuncios a alguien de tu región aunque esté temporalmente en otro sitio (viaje de trabajo, vacaciones), usando datos de ubicación habitual. El wording actual de la opción está en la Help de Direct.",
    },
    {
      q: "¿El geotargeting avanzado debe estar siempre on?",
      a: "No siempre. Útil si el cliente puede comprar/pedir estando fuera. Dañino si el servicio es estrictamente «visita presencial hoy en esta ciudad» sin valor para viajeros.",
    },
    {
      q: "¿El geo sustituye a negativos y semántica?",
      a: "No. La región recorta audiencia; la relevancia de anuncio y landing siguen decidiendo la calidad del clic y el precio.",
    },
    {
      q: "¿En qué se diferencia del hiperlocal?",
      a: "El geo de Direct suele ser ciudades/regiones/polígonos en la cuenta. El hiperlocal es un radio estrecho alrededor de un punto. Más sobre hiperlocal en un texto aparte.",
    },
    {
      q: "¿Y las verticales con licencia y el geo?",
      a: "Siguen aplicando límites de geo y moderación en verticales sensibles. Mira los requisitos actuales de Direct, no guías de 2017.",
    },
    {
      q: "¿Sigue haciendo falta una región del sitio?",
      a: "Para SEO y mapas — sí, otra pista. El geo de ads en Direct no sustituye la región del sitio en Webmaster ni un listing de organización.",
    },
  ],
  sections: [
    {
      title: "Para qué el geo en Direct",
      level: 2,
      paras: [
        "Una gran parte de anuncios con geo es normal: pagas por gente que puede tomar la oferta física o logísticamente. Eso sube la cuota de clics útiles y corta gasto en regiones claramente ajenas.",
        "El geo se fija a nivel de campaña o grupo (la UI cambia). Luego repartes presupuesto y anuncios por ciudades con margen y competencia distintos.",
      ],
      lists: [
        {
          intro: "Setups típicos:",
          items: [
            "una ciudad / aglomeración",
            "varias sucursales como campañas separadas",
            "una zona de entrega como polígono",
            "excluir regiones a las que no servís",
          ],
        },
      ],
    },
    {
      title: "Búsqueda: región en la consulta y en ajustes",
      level: 2,
      paras: [
        "En search los usuarios a menudo nombran la ciudad en la consulta o buscan desde la región correcta. El geo de campaña corta impresiones fuera de las áreas elegidas y evita competir donde no servís.",
        "Para tours, tickets y algunas ofertas «remotas» la lógica de geo puede diferir: la gente busca un destino estando en otra ciudad. No copies ajustes de servicio local a travel sin revisar Help y tests.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Mira informes por región: a veces se filtran impresiones por ajustes amplios, autotargeting o grupos que se solapan.",
        },
      ],
    },
    {
      title: "Redes y geotargeting avanzado",
      level: 2,
      paras: [
        "En YAN la demanda es más diferida: la gente lee artículos y mira vídeos no en el modo «comprar hoy». El geo avanzado (en la lógica del anuncio de 2017) ayuda a alcanzar a una audiencia con región «de casa» aunque ahora esté en otro sitio.",
        "Ejemplo: un residente de San Petersburgo de vacaciones en Sochi puede seguir viendo anuncios relevantes de un servicio de Petersburgo si la opción y la oferta lo permiten. Las subidas de clic en la research de aquel periodo parecían modestas (alrededor de un porcentaje) — planifica un test, no un milagro.",
        "Activa la opción a propósito: para entrega misma-día en la ciudad un viajero puede ser gasto; para reserva online, una tienda online con envío o un servicio diferido — útil.",
      ],
      lists: [
        {
          intro: "Cuándo encaja el geo avanzado:",
          items: [
            "la compra es posible en remoto",
            "el cliente volverá a la ciudad de casa",
            "la oferta no está atada a una visita «aquí y ahora»",
            "tienes analítica para comparar con la opción off",
          ],
        },
      ],
    },
    {
      title: "Cómo configurarlo sin quemar presupuesto",
      level: 2,
      paras: [
        "Empieza con una lista dura de regiones = zona de servicio. Añade frases negativas con otras ciudades si la semántica las mete. En redes comprueba aparte que el alcance por interés no sea demasiado amplio con un geo estrecho.",
        "Contrasta los nombres de opciones en la cuenta: «geotargeting avanzado», refinamientos de ubicación y polígonos evolucionaron. No te fíes de capturas de 2017 — céntrate en el sentido: quién cuenta como «tu» región.",
      ],
      lists: [
        {
          intro: "Chequeo previo al lanzamiento:",
          items: [
            "regiones = logística real",
            "la landing promete la misma ciudad/zona",
            "teléfono y dirección no engañan",
            "geo avanzado on solo si la oferta lo permite",
            "Métrica/CRM tiene un corte por región",
          ],
        },
      ],
    },
    {
      title: "Encaje con el sitio y los mapas",
      level: 2,
      paras: [
        "El geo de ads no sustituye la región SEO ni los listings de mapas. Alguien puede llegar desde Direct y luego comprobarte en mapas y en el sitio — el NAP debe coincidir.",
        "Para puntos offline cerca de una dirección mira también escenarios hiperlocales; para «servicio + ciudad» en search — SEO regional y la región del sitio.",
      ],
      links: [
        {
          label: "Targeting hiperlocal",
          href: "/es/blog/giperlokalnyy-targeting/",
        },
        {
          label: "Región del sitio",
          href: "/es/blog/region-sayta/",
        },
      ],
    },
    {
      title: "Conclusión práctica",
      level: 2,
      paras: [
        "El geotargeting en Direct es una capa obligatoria de control de presupuesto. Las opciones avanzadas de redes ayudan a audiencias «de casa» mientras están fuera, pero no son universales.",
        "Testea on/off, mira el coste por lead por región y no confundas el geo de ads con un «checkbox de región» sin servicio real en esa zona.",
      ],
      tables: [
        {
          caption: "Canal → en qué se apoya el geo",
          headers: ["Canal", "Base"],
          rows: [
            ["Search", "Consulta, región de ajustes, ubicación"],
            ["Redes (YAN)", "Perfil, comportamiento, ciudad «de casa»"],
            ["Geo avanzado", "Alcanzar viajeros de tu región"],
            ["Hiperlocal", "Radio/polígono estrecho en un punto"],
          ],
        },
      ],
    },
  ],
  related: [
    "giperlokalnyy-targeting",
    "region-sayta",
    "byudzhet-yandeks-direkt",
    "regionalnoe-seo",
  ],
};

/** EN overlay for geotargeting-direkt — same structure as RU JSON. */
export const geotargetingDirektEn: BlogPost = {
  slug: "geotargeting-direkt",
  title: "Geotargeting in Yandex Direct: search, networks, and advanced options",
  date: "2017-05-05",
  category: "Paid search",
  cover: "/images/blog/geotargeting-direkt/cover-en.webp",
  excerpt:
    "How geo works in Yandex Direct on search and in networks, why advanced geotargeting exists, and how not to burn budget on other cities — without outdated 2017 screenshots.",
  lead: [
    "Geotargeting in Yandex Direct limits impressions to people and queries tied to the regions you need. For local business it’s one of the main CTR and cost-per-lead levers: there’s little sense running “window repair” nationwide if you only travel across the region.",
    "In 2017 Yandex strengthened geo in networks (YAN): not only the region in the query, but the user’s habitual place. Below: search vs network logic, what the advanced options mean, and practical setup. Match exact toggle names in the current account and Direct Help.",
  ],
  faq: [
    {
      q: "Is geo on search and in networks the same?",
      a: "The idea is shared (show to “your” regions); the mechanics differ: search leans on the query and explicit region, networks on profile and behavior, including a “home” city.",
    },
    {
      q: "What is advanced geotargeting?",
      a: "Historically — a networks fine-tune: show ads to someone from your region even when they’re temporarily elsewhere (business trip, vacation), using habitual location data. Current option wording is in Direct Help.",
    },
    {
      q: "Should advanced geotargeting always be on?",
      a: "Not always. Useful if the client can buy/order while away. Harmful if the service is strictly “in-person visit today in this city” with no value for travelers.",
    },
    {
      q: "Does geo replace negatives and semantics?",
      a: "No. Region cuts audience; ad and landing relevance still decide click quality and price.",
    },
    {
      q: "How is this different from hyperlocal?",
      a: "Direct geo is usually cities/regions/polygons in the account. Hyperlocal is a tight radius around a point. More on hyperlocal in a separate piece.",
    },
    {
      q: "What about licensed verticals and geo?",
      a: "Geo and moderation limits for sensitive verticals still apply. Check current Direct requirements, not 2017 guides.",
    },
    {
      q: "Do I still need a site region?",
      a: "For SEO and maps — yes, a separate track. Ad geo in Direct doesn’t replace the site region in Webmaster or an organization listing.",
    },
  ],
  sections: [
    {
      title: "Why geo in Direct",
      level: 2,
      paras: [
        "A large share of ads with geo is normal: you pay for people who can physically or logistically take the offer. That raises the share of useful clicks and cuts spend on clearly foreign regions.",
        "Geo is set at campaign or group level (UI changes). Then you split budget and ads by cities with different margin and competition.",
      ],
      lists: [
        {
          intro: "Typical setups:",
          items: [
            "one city / agglomeration",
            "several branches as separate campaigns",
            "a delivery zone as a polygon",
            "excluding regions you don’t serve",
          ],
        },
      ],
    },
    {
      title: "Search: region in the query and settings",
      level: 2,
      paras: [
        "On search users often name the city in the query or search from the right region. Campaign geo cuts impressions outside selected areas and keeps you from competing where you don’t serve.",
        "For tours, tickets, and some “remote” offers geo logic can differ: people search a destination while sitting in another city. Don’t copy local-service settings onto travel without Help checks and tests.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Watch region reports: impressions sometimes leak through wide settings, autotargeting, or overlapping groups.",
        },
      ],
    },
    {
      title: "Networks and advanced geotargeting",
      level: 2,
      paras: [
        "In YAN demand is more deferred: people read articles and watch videos not at “buy today.” Advanced geo (in the 2017 announcement logic) helps reach an audience with a “home” region even if they’re elsewhere now.",
        "Example: a Petersburg resident on vacation in Sochi may still see relevant ads for a Petersburg service if the option and offer allow it. Click lifts in that period’s research looked modest (about a percent) — plan a test, not a miracle.",
        "Turn the option on deliberately: for same-day city delivery a traveler may be waste; for online booking, an online store with shipping, or a deferred service — useful.",
      ],
      lists: [
        {
          intro: "When advanced geo fits:",
          items: [
            "purchase is possible remotely",
            "the client will return to the home city",
            "the offer isn’t tied to a visit “here and now”",
            "you have analytics to compare with the option off",
          ],
        },
      ],
    },
    {
      title: "How to set it without burning budget",
      level: 2,
      paras: [
        "Start with a hard region list = service area. Add negative phrases with other cities if semantics pulls them in. For networks separately check that interest reach isn’t too wide with a narrow geo.",
        "Match option names in the account: “advanced geotargeting,” location refinements, and polygons evolved. Don’t rely on 2017 screenshots — focus on meaning: who counts as “your” region.",
      ],
      lists: [
        {
          intro: "Pre-launch check:",
          items: [
            "regions = real logistics",
            "the landing promises the same city/zone",
            "phone and address don’t mislead",
            "advanced geo on only if the offer allows",
            "Metrika/CRM has a region cut",
          ],
        },
      ],
    },
    {
      title: "Tie-in with the site and maps",
      level: 2,
      paras: [
        "Ad geo doesn’t replace the SEO region and map listings. Someone may arrive from Direct, then check you on maps and the site — NAP must match.",
        "For offline points near an address also look at hyperlocal scenarios; for “service + city” in search — regional SEO and the site region.",
      ],
      links: [
        {
          label: "Hyperlocal targeting",
          href: "/en/blog/giperlokalnyy-targeting/",
        },
        {
          label: "Site region",
          href: "/en/blog/region-sayta/",
        },
      ],
    },
    {
      title: "Practical takeaway",
      level: 2,
      paras: [
        "Geotargeting in Direct is a required budget-control layer. Advanced network options help “home” audiences while away, but aren’t universal.",
        "Test on/off, watch cost per lead by region, and don’t confuse ad geo with a “region checkbox” without a real service in that area.",
      ],
      tables: [
        {
          caption: "Channel → what geo rests on",
          headers: ["Channel", "Basis"],
          rows: [
            ["Search", "Query, settings region, location"],
            ["Networks (YAN)", "Profile, behavior, “home” city"],
            ["Advanced geo", "Reaching travelers from your region"],
            ["Hyperlocal", "Tight radius/polygon at a point"],
          ],
        },
      ],
    },
  ],
  related: [
    "giperlokalnyy-targeting",
    "region-sayta",
    "byudzhet-yandeks-direkt",
    "regionalnoe-seo",
  ],
};

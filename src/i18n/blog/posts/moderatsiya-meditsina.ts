import type { BlogPost } from "../../../data/blog";

/** ES overlay for moderatsiya-meditsina — same structure as RU JSON. */
export const moderatsiyaMeditsinaEs: BlogPost = {
  slug: "moderatsiya-meditsina",
  title: "Moderación de anuncios de salud en Yandex Direct y Google Ads",
  date: "2019-09-13",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-meditsina/cover-es.webp",
  excerpt:
    "Cómo pasar la revisión de Yandex Direct y Google Ads en salud: qué suele prohibirse y permitirse, matices de redes vs Search, copy sin banderas rojas y qué hacer si te rechazan — según las políticas actuales de las plataformas.",
  lead: [
    "Salud y pharma en búsqueda de pago se revisan más duro que nichos normales: anuncios y landings se contrastan con las políticas de Yandex y Google y con la ley del país donde muestras. Un error de redacción o del sitio significa rechazo o entrega limitada.",
    "Abajo: cómo funcionan prohibiciones y permisos, matices típicos de Direct y Ads, tips prácticos de copy y qué hacer tras un rechazo. Las listas concretas cambian — antes de lanzar, mira las reglas oficiales y un abogado, no la memoria de 2019.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por qué la salud se modera con más rigor?",
      a: "Riesgos para la salud y exigencias legales. Las plataformas limitan fármacos con receta, diagnóstico online, ciertos procedimientos y temas «sensibles».",
    },
    {
      q: "¿Se puede anunciar una clínica en Direct?",
      a: "Normalmente sí — con redacción correcta, licencias en el sitio y cumplimiento de políticas. Cortan servicios prohibidos y promesas del tipo «curamos al 100%».",
    },
    {
      q: "¿En qué se diferencia Search de las redes?",
      a: "En redes y remarketing, temas íntimos/sensibles y creatividades suelen ser más estrictos. Lo que pasa en Search puede fallar en YAN/Display.",
    },
    {
      q: "¿Ayuda suavizar el wording sin palabras prohibidas?",
      a: "Arriesgado: la revisión mira el anuncio y la landing. Un phrasing gris puede pasar una vez y caer en una re-revisión.",
    },
    {
      q: "¿Qué hacer si te rechazan?",
      a: "Lee el motivo, corrige copy/sitio, adjunta documentos vía soporte de la plataforma. «Un competidor lo tiene» no es garantía.",
    },
    {
      q: "¿Hacen falta documentos en el sitio?",
      a: "Sí: licencias, datos legales, avisos de edad/receta — lo que exijan la ley y la política publicitaria.",
    },
    {
      q: "¿Es lo mismo que la revisión de Facebook Ads?",
      a: "No. Meta es otra capa de políticas. Aquí — Yandex y Google Ads.",
    },
  ],
  sections: [
    {
      title: "Por qué la salud necesita su propio playbook",
      level: 2,
      paras: [
        "En e-commerce normal la revisión suele pillar clickbait y productos prohibidos. En salud además entran recetas, servicios médicos a distancia, promesas de resultado y diagnósticos «sensibles».",
        "Plan: entender el marco legal y de políticas → revisar el sitio → escribir anuncios en tono neutro → elegir la superficie (Search vs redes) → si rechazan — corregir y escalar con documentos.",
      ],
      links: [
        {
          label: "Moderación de Facebook Ads",
          href: "/es/blog/moderatsiya-facebook-ads/",
        },
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Marco de prohibiciones y permisos",
      level: 2,
      paras: [
        "Apóyate en las políticas publicitarias de Yandex y Google más la ley local sobre anuncios de fármacos y servicios médicos. Las listas «permitido/prohibido» de guías viejas se quedan obsoletas: mira la Help actual y el estatus legal de la oferta.",
        "Suele estar en riesgo: venta online de fármacos con receta, diagnóstico/tratamiento a distancia sin autorización, sustancias psicoactivas, aborto como oferta, promesas agresivas de cura.",
        "Más a menudo permitido (si se cumplen las reglas): clínicas y hospitales, veterinaria, farmacias como organizaciones, OTC y dispositivos médicos — si el copy y el sitio no rompen la ley ni la política de la plataforma.",
      ],
      lists: [
        {
          intro: "Antes de enviar un anuncio:",
          items: [
            "la oferta es legal en la región de impresión",
            "el sitio tiene licencias, contactos, disclaimers",
            "el copy no garantiza resultados ni lleva visuales «scary»",
            "la landing encaja con el anuncio",
          ],
        },
      ],
    },
    {
      title: "Matices de Yandex Direct",
      level: 2,
      paras: [
        "Direct revisa salud y pharma con especial dureza, sobre todo en formatos smart y redes. Temas íntimos/sensibles y ciertos diagnósticos pueden limitarse en YAN y remarketing aunque Search vaya bien.",
        "«Solo adultos» y categorías sensibles suelen ir mejor en Search con targeting temático, donde el usuario escribió la consulta. No muevas la misma creatividad a redes sin comprobar.",
        "Un wording indirecto sin nombrar el servicio prohibido no legaliza la oferta: revisión y re-checks miran el sentido y la landing.",
      ],
      links: [
        {
          label: "Anuncios adaptativos en Direct",
          href: "/es/blog/adaptivnyy-shablon-direkt/",
        },
      ],
    },
    {
      title: "Matices de Google Ads",
      level: 2,
      paras: [
        "Ads aplica políticas de Healthcare y productos/servicios restringidos. Frases como «te curamos», «garantía», «sin efectos secundarios» y creatividades de shock son motivos habituales de rechazo.",
        "Nombres neutros de clínica y servicio sin clickbait pasan más estables que promesas de tratamiento «barato». Los titulares dinámicos y DSA no saltan la política: el sistema saca keywords del sitio — limpia también las landings.",
        "Prepara documentos y certificaciones para categorías que los exigen — o la cuenta choca con límites de entrega.",
      ],
      links: [
        {
          label: "Tipos de campaña en Google Ads",
          href: "/es/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Copy, sitio y soporte",
      level: 2,
      paras: [
        "Escribe en positivo/neutro: servicio, clínica, cita — sin describir operaciones, lesiones ni before/after de shock. Fotos — sin sangre ni sintomatología fuerte.",
        "Si te rechazan: corrige el motivo del email de revisión, adjunta licencias vía soporte, no copies anuncios polémicos de competidores como prueba de que «está permitido».",
        "La re-revisión manual lleva tiempo: hasta tener respuesta, no lances el mismo texto en docenas de anuncios — multiplicas el rechazo.",
      ],
      lists: [
        {
          intro: "Checklist antes de reenviar:",
          items: [
            "motivo de rechazo desglosado punto a punto",
            "sitio y anuncio alineados",
            "documentos adjuntos",
            "test separado en Search antes de escalar a redes",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Las reglas de salud en Direct y Google Ads se actualizan. Este texto es un marco de método — no consejo legal ni una lista vigente de prohibiciones. Antes del presupuesto, mira la Help de la plataforma y un especialista en derecho publicitario.",
  },
  closing: [
    "Primero alinea el sitio y la redacción de la oferta con la ley y las políticas; después arma la campaña: la revisión en salud es más previsible así que parchear tras una racha de rechazos.",
  ],
  related: [
    "moderatsiya-facebook-ads",
    "sayt-pered-reklamoy",
    "tipy-kampaniy-google-ads",
    "adaptivnyy-shablon-direkt",
    "zabluzhdeniya-konteksta",
    "analiz-reklamnoy-kampanii",
  ],
};

/** EN overlay for moderatsiya-meditsina — same structure as RU JSON. */
export const moderatsiyaMeditsinaEn: BlogPost = {
  slug: "moderatsiya-meditsina",
  title: "Healthcare ad review in Yandex Direct and Google Ads",
  date: "2019-09-13",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-meditsina/cover-en.webp",
  excerpt:
    "How to pass Yandex Direct and Google Ads review in healthcare: what’s usually banned and allowed, network vs Search nuances, copy without red flags, and what to do when rejected — based on current platform policies.",
  lead: [
    "Healthcare and pharma in paid search are reviewed harder than ordinary niches: ads and landings are checked against Yandex and Google policies and the law of the country where you show. A wording or site mistake means rejection or limited delivery.",
    "Below: how bans and permissions work, typical Direct and Ads nuances, practical copy tips, and what to do after rejection. Concrete lists change — before launch, check official rules and counsel, not 2019 memory.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why is healthcare moderated more strictly?",
      a: "Health risks and legal requirements. Platforms limit prescription drugs, online diagnosis, certain procedures, and “sensitive” topics.",
    },
    {
      q: "Can I advertise a clinic in Direct?",
      a: "Usually yes — with correct wording, licenses on the site, and policy compliance. Banned services and “we cure 100%” promises get cut.",
    },
    {
      q: "How does Search differ from the networks?",
      a: "In networks and remarketing, intimate/sensitive topics and creatives are often stricter. What passes on Search may fail in YAN/Display.",
    },
    {
      q: "Does soft wording without banned words help?",
      a: "Risky: review looks at the ad and the landing. Gray phrasing may pass once and fail on re-check.",
    },
    {
      q: "What should I do when rejected?",
      a: "Read the reason, fix copy/site, attach documents via platform support. “A competitor runs it” isn’t a guarantee.",
    },
    {
      q: "Do I need documents on the site?",
      a: "Yes: licenses, legal details, age/prescription disclaimers — whatever law and ad policy require.",
    },
    {
      q: "Is this the same as Facebook Ads review?",
      a: "No. Meta is a separate policy layer. Here — Yandex and Google Ads.",
    },
  ],
  sections: [
    {
      title: "Why healthcare needs its own playbook",
      level: 2,
      paras: [
        "In ordinary e-commerce, review more often catches clickbait and banned goods. In healthcare you also get prescriptions, remote medical services, outcome promises, and “sensitive” diagnoses.",
        "Plan: understand the legal and policy frame → check the site → write ads in a neutral tone → pick the surface (Search vs networks) → on reject — fix and escalate with documents.",
      ],
      links: [
        {
          label: "Facebook Ads moderation",
          href: "/en/blog/moderatsiya-facebook-ads/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "The ban and permission frame",
      level: 2,
      paras: [
        "Rely on Yandex and Google advertising policies plus local law on drug and medical-service ads. “Allowed/banned” lists in old guides go stale: check current Help and the legal status of the offer.",
        "Typically at risk: online sale of prescription drugs, remote diagnosis/treatment without authorization, psychoactive substances, abortion as an offer, aggressive cure promises.",
        "More often allowed (when rules are met): clinics and hospitals, veterinary care, pharmacies as organizations, OTC products and medical devices — if copy and site don’t break law or platform policy.",
      ],
      lists: [
        {
          intro: "Before submitting an ad:",
          items: [
            "the offer is lawful in the impression region",
            "site has licenses, contacts, disclaimers",
            "copy has no outcome guarantees or “scary” visuals",
            "landing matches the ad",
          ],
        },
      ],
    },
    {
      title: "Yandex Direct nuances",
      level: 2,
      paras: [
        "Direct reviews healthcare and pharma especially hard, particularly in smart formats and networks. Intimate/sensitive topics and certain diagnoses may be limited in YAN and remarketing even when Search is fine.",
        "“Adults only” and sensitive categories often work better on Search with topical targeting, where the user typed the query. Don’t move the same creative to networks without a check.",
        "Indirect wording without naming a banned service doesn’t make the offer legal: review and re-checks look at meaning and the landing.",
      ],
      links: [
        {
          label: "Direct adaptive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
      ],
    },
    {
      title: "Google Ads nuances",
      level: 2,
      paras: [
        "Ads apply Healthcare and Restricted products/services policies. Phrases like “we’ll cure,” “guarantee,” “no side effects,” and shock creatives are common rejection reasons.",
        "Neutral clinic and service names without clickbait pass more steadily than “cheap” treatment promises. Dynamic headlines and DSA don’t skip policy: the system pulls keywords from the site — clean landings too.",
        "Prepare documents and certification for categories that require them early — or the account hits delivery limits.",
      ],
      links: [
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Copy, site, and support",
      level: 2,
      paras: [
        "Write positive/neutral: service, clinic, booking — without describing operations, injuries, or shock-style before/after. Photos — no blood or heavy symptomatology.",
        "On rejection: fix the reason from the review email, attach licenses via support, don’t copy competitors’ disputed ads as proof that “it’s allowed.”",
        "Manual re-review takes time: until you get an answer, don’t run the same text across dozens of ads — you’ll multiply the rejection.",
      ],
      lists: [
        {
          intro: "Checklist before resubmitting:",
          items: [
            "rejection reason broken down point by point",
            "site and ad aligned",
            "documents attached",
            "separate Search test before scaling to networks",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Healthcare rules in Direct and Google Ads update. This piece is a method frame — not legal advice and not a current ban list. Before budget, check platform Help and an advertising-law specialist.",
  },
  closing: [
    "First align the site and offer wording with law and policies, then build the campaign: healthcare review is more predictable that way than fixing after a string of rejections.",
  ],
  related: [
    "moderatsiya-facebook-ads",
    "sayt-pered-reklamoy",
    "tipy-kampaniy-google-ads",
    "adaptivnyy-shablon-direkt",
    "zabluzhdeniya-konteksta",
    "analiz-reklamnoy-kampanii",
  ],
};

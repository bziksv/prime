import type { BlogPost } from "../../../data/blog";

/** ES overlay for oshibki-nastroyki-konteksta — same structure as RU JSON. */
export const oshibkiNastroykiKontekstaEs: BlogPost = {
  slug: "oshibki-nastroyki-konteksta",
  title: "Errores al configurar anuncios de búsqueda de pago",
  date: "2018-07-02",
  category: "Paid search",
  cover: "/images/blog/oshibki-nastroyki-konteksta/cover.webp",
  excerpt:
    "Fallos típicos de setup en Direct y Ads: anuncios sin contactos ni extensiones, Search vs redes, geo y estructura de grupos, landing muerta, negativos, horario y remarketing — checklist antes de escalar presupuesto.",
  lead: [
    "La búsqueda de pago no es «echar keywords y esperar clientes». En el setup puedes perder clics y dinero rápido: sin extensiones, superficies mezcladas, estructura caótica, un sitio que no abre desde el anuncio.",
    "Abajo: errores habituales de auditorías de setup (no una estrategia desde cero ni una auditoría completa de KPI). Cerca — errores de gestión de campaña y el proceso de auditoría. Los interfaces cambian; la higiene sigue importando.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de «10 errores de gestión»?",
      a: "Ese texto cubre demanda, presupuesto, keywords y optimización continua. Aquí — higiene de setup: extensiones, estructura, geo, landing, negativos.",
    },
    {
      q: "¿Hacen falta contactos en el anuncio?",
      a: "Donde hay extensiones (teléfono, sitelinks, dirección) — sí. Amplían el real estate del anuncio y la confianza.",
    },
    {
      q: "¿Search y Display/redes juntos?",
      a: "Normalmente sepáralos: creatividades, pujas y KPI distintos. Redes necesitan banners/imágenes; Search, texto y relevancia.",
    },
    {
      q: "¿Por qué separar geo?",
      a: "Para ver dónde el CPA es mejor y no mezclar ciudades con márgenes y logística distintas en una campaña sin necesidad.",
    },
    {
      q: "¿Vale una landing que «casi» carga?",
      a: "No. Una landing lenta o que cae quema el clic. Revisa la URL del anuncio en móvil antes del lanzamiento.",
    },
    {
      q: "¿Negativos una vez y listo?",
      a: "No. La lista está viva: mira search terms y limpia con regularidad.",
    },
    {
      q: "¿Cuándo pedir una auditoría?",
      a: "Si el checklist de setup está cerrado y los KPI siguen fallando — mira una auditoría completa y los errores de gestión.",
    },
  ],
  sections: [
    {
      title: "El anuncio y la confianza en el SERP",
      level: 2,
      paras: [
        "Un anuncio pelado sin sitelinks, callouts, teléfono o una ruta de display limpia pierde visibilidad frente a vecinos aunque el slot sea fuerte.",
        "Un favicon y una URL de display correcta refuerzan el reconocimiento de marca en el SERP; un icono roto o un path de subdominio sin sentido hieren el CTR.",
        "La landing del anuncio debe encajar con la promesa: no mandes «ventanas de PVC» a una home con una docena de servicios.",
      ],
      links: [
        {
          label: "Anuncios adaptativos en Direct",
          href: "/es/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Search vs redes y estructura geo",
      level: 2,
      paras: [
        "Search no tiene las mismas imágenes que las redes; creatividad y copy difieren. Copiar «como en Search» uno a uno a Display/redes es un error típico de setup.",
        "Regiones con rendimiento distinto van mejor como campañas separadas — o al menos claramente segmentadas: si no, la optimización promedia geo bueno y malo.",
        "Estructura de grupos por industria (marca, modelos, servicios, promos, competidores — donde encaje) da stats legibles; un vertedero de keywords dificulta ver qué funciona.",
      ],
      links: [
        {
          label: "Errores de gestión de campaña",
          href: "/es/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Tipos de campaña en Google Ads",
          href: "/es/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Landing, tags y analítica",
      level: 2,
      paras: [
        "Clics a ningún sitio: la página no abre, 500/timeout, bucle de redirect. Revisa la URL final antes del presupuesto.",
        "UTM y objetivos en Métrica/Analytics deberían estar listos antes del lanzamiento — si no, luego no sabes «qué funcionó».",
        "Sin objetivos, la optimización de pujas se vuelve una discusión sobre clics.",
      ],
      links: [
        {
          label: "Análisis de campaña publicitaria",
          href: "/es/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Checklist de setup antes de escalar",
      level: 2,
      paras: [
        "Negativos y cross-negatives entre grupos — para no competir contigo mismo. Horario de anuncios — según capacidad real de atender leads, no «24/7 porque se puede».",
        "Remarketing en acciones abandonadas cuando hay audiencia y creatividad decente; no en lugar del setup básico de Search.",
        "Usa este checklist para controlar a un contratista: si lo básico no está cerrado, es pronto para discutir «poco presupuesto».",
      ],
      lists: [
        {
          intro: "Mínimo antes de escalar:",
          items: [
            "extensiones y URL relevantes",
            "Search y redes separados",
            "geo y grupos con sentido",
            "landing abre en móvil",
            "objetivos y UTM miden",
            "negativos y horario fijados",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Contratista de búsqueda de pago",
          href: "/es/blog/podryadchik-kontekst/",
        },
      ],
    },
  ],
  closing: [
    "Recorre el checklist en tu cuenta en media hora: si extensiones, estructura, geo y landing están sólidos — después mira economía y gestión, no «más keywords al mismo vertedero».",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "podryadchik-kontekst",
    "zabluzhdeniya-konteksta",
  ],
};

/** EN overlay for oshibki-nastroyki-konteksta — same structure as RU JSON. */
export const oshibkiNastroykiKontekstaEn: BlogPost = {
  slug: "oshibki-nastroyki-konteksta",
  title: "Mistakes when setting up paid search ads",
  date: "2018-07-02",
  category: "Paid search",
  cover: "/images/blog/oshibki-nastroyki-konteksta/cover-en.webp",
  excerpt:
    "Typical setup misses in Direct and Ads: ads without contacts and extensions, Search vs networks, geo and ad-group structure, a dead landing, negatives, ad schedule, and remarketing — a checklist before scaling budget.",
  lead: [
    "Paid search isn’t “pour in keywords and wait for clients.” At setup you can lose clicks and money fast: no extensions, mixed surfaces, messy structure, a site that doesn’t open from the ad.",
    "Below: common mistakes from setup audits (not a from-scratch strategy or a full KPI audit). Nearby — campaign management mistakes and the audit process. Interfaces change; hygiene still matters.",
  ],
  faq: [
    {
      q: "How is this different from “10 management mistakes”?",
      a: "That piece covers demand, budget, keywords, and ongoing optimization. Here — setup hygiene: extensions, structure, geo, landing, negatives.",
    },
    {
      q: "Do you need contacts in the ad?",
      a: "Where extensions are available (phone, sitelinks, address) — yes. They grow ad real estate and trust.",
    },
    {
      q: "Search and Display/networks together?",
      a: "Usually split them: different creatives, bids, and KPIs. Networks need banners/images; Search needs text and relevance.",
    },
    {
      q: "Why split geo?",
      a: "To see where CPA is better and not mix cities with different margins and logistics in one campaign without need.",
    },
    {
      q: "Is a landing that “almost” loads fine?",
      a: "No. A slow or crashing landing burns the click. Check the ad URL on mobile before launch.",
    },
    {
      q: "Negatives once and done?",
      a: "No. The list is living: watch search terms and clean regularly.",
    },
    {
      q: "When should you call for an audit?",
      a: "If the setup checklist is done and KPIs still miss — look at a full audit and management mistakes.",
    },
  ],
  sections: [
    {
      title: "The ad and trust in the SERP",
      level: 2,
      paras: [
        "A bare ad without sitelinks, callouts, phone, or a clean display path loses visibility to neighbors even with a strong slot.",
        "A favicon and a correct display URL boost brand recognition in the SERP; a broken icon or a meaningless subdomain path hurts CTR.",
        "The landing in the ad must match the promise: don’t send “PVC windows” to a homepage with a dozen services.",
      ],
      links: [
        {
          label: "Direct responsive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Search vs networks and geo structure",
      level: 2,
      paras: [
        "Search doesn’t have the same images as networks; creative and copy differ. Copying “as on Search” one-to-one into Display/networks is a common setup mistake.",
        "Regions with different performance are better as separate campaigns — or at least clearly segmented: otherwise optimization averages good and bad geo.",
        "Industry group structure (brand, models, services, promos, competitors — where it fits) gives readable stats; one keyword dump makes it hard to see what works.",
      ],
      links: [
        {
          label: "Campaign management mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Landing, tags, and analytics",
      level: 2,
      paras: [
        "Clicks to nowhere: the page doesn’t open, 500/timeout, redirect loop. Check the final URL before budget.",
        "UTMs and goals in Metrika/Analytics should be ready before launch — otherwise you can’t later tell “what worked.”",
        "Without goals, bid optimization turns into an argument about clicks.",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Setup checklist before scaling",
      level: 2,
      paras: [
        "Negatives and cross-negatives between groups — so you don’t compete with yourself. Ad schedule — by real capacity to handle leads, not “24/7 because we can.”",
        "Remarketing on abandoned actions when you have an audience and decent creative; not instead of basic Search setup.",
        "Use this checklist to control a contractor: if basics aren’t closed, it’s early to argue about “too little budget.”",
      ],
      lists: [
        {
          intro: "Minimum before scale:",
          items: [
            "extensions and relevant URLs",
            "Search and networks split",
            "geo and groups make sense",
            "landing opens on mobile",
            "goals and UTMs track",
            "negatives and schedule set",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Paid-search contractor",
          href: "/en/blog/podryadchik-kontekst/",
        },
      ],
    },
  ],
  closing: [
    "Walk the checklist on your account in half an hour: if extensions, structure, geo, and the landing are solid — next look at economics and management, not “more keywords into the same dump.”",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "podryadchik-kontekst",
    "zabluzhdeniya-konteksta",
  ],
};

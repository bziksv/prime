import type { BlogPost } from "../../../data/blog";

/** EN overlay for analiz-konkurentov-kontekst — same structure as RU JSON. */
/** ES overlay for analiz-konkurentov-kontekst — same structure as RU JSON. */
export const analizKonkurentovKontekstEs: BlogPost = {
  slug: "analiz-konkurentov-kontekst",
  title: "Análisis de competidores antes de lanzar búsqueda de pago",
  date: "2019-10-30",
  category: "Paid search",
  cover: "/images/blog/analiz-konkurentov-kontekst/cover-es.webp",
  excerpt:
    "Cómo desmontar a los competidores antes de Yandex Direct y Google Ads: quién cuenta, keywords de anuncios, creatividades, landings, USP, redes y estimaciones de tráfico — sin copiar la cuenta de otro.",
  lead: [
    "Antes de lanzar búsqueda de pago conviene ver quién anuncia de verdad en tu SERP, qué keywords y ofertas usa y adónde aterrizan los clics. Esto no es una auditoría SEO de tráfico: el foco es la capa de pago.",
    "Abajo: lista de competidores, set de keywords y anuncios, landings, USP, redes y estimaciones gruesas de tráfico. Herramientas como Serpstat / SpyWords / SimilarWeb dan estimaciones — no un export de la cuenta ajena. No puedes copiar el presupuesto del competidor uno a uno.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del análisis de competidores SEO?",
      a: "El SEO mira visibilidad y orgánico. Aquí: quién está en el bloque de pago, qué keywords/anuncios/landings y qué oferta.",
    },
    {
      q: "¿Por qué un competidor no se ve en Direct o Google Ads?",
      a: "Puede no hacer Search, usar otras keywords o geo, ser estacional o solo redes/social. Revisa varias consultas y dispositivos.",
    },
    {
      q: "¿Se puede saber el presupuesto exacto del competidor?",
      a: "No. Hay estimaciones de subasta y señales indirectas. Arma el media plan con tus objetivos de CPA — no con el mínimo de otro.",
    },
    {
      q: "¿Qué herramientas usar?",
      a: "Cualquier spy/keyword con datos de SERP de pago más revisión manual del SERP. Cambian de marca: importa el método más que el logo.",
    },
    {
      q: "¿Cuántos competidores tomar?",
      a: "Tres a siete fuertes en tus consultas prioritarias bastan para empezar. Decenas de nombres diluyen el foco.",
    },
    {
      q: "¿Hay que mirar Display y redes?",
      a: "Sí si planeas redes: creatividades y densidad difieren de Search.",
    },
    {
      q: "¿Basta analizar una vez antes del lanzamiento?",
      a: "No. Antes de temporada, promos y cuando caen los KPI, refresca el snapshot.",
    },
  ],
  sections: [
    {
      title: "Por qué analizar antes del lanzamiento",
      level: 2,
      paras: [
        "Un corte de competidores ayuda a medir densidad de subasta, orden de pujas/ofertas, canales y adónde se manda el tráfico. Así decides mejor: búsqueda de pago como canal principal o apoyo a SEO/social.",
        "El objetivo son hipótesis para tu campaña: qué clusters cubrir primero, qué USP destacar, qué negativos fijar pronto. No robarle todo el set de keywords.",
        "Planifica: lista de dominios → keywords → anuncios → landings → USP → redes/otro tráfico → conclusiones en tabla.",
      ],
      links: [
        {
          label: "Análisis de competidores (SEO/tráfico)",
          href: "/es/blog/analiz-konkurentov/",
        },
        {
          label: "Media plan",
          href: "/es/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Quién cuenta como competidor",
      level: 2,
      paras: [
        "Los vecinos offline del mercado no siempre están en la misma subasta de pago. Y al revés: en «entrega de flores [ciudad]» puedes ver agregadores y marketplaces que no contabas como competencia.",
        "Método manual: tabla de jugadores + revisión del SERP en consultas prioritarias en desktop y móvil, en incógnito y desde distintas cuentas si hace falta.",
        "Las herramientas de dominio muestran solapes de keywords de pago y sitios que anuncian cerca. Quédate con un core comercial similar — no con todos del informe.",
      ],
    },
    {
      title: "Keywords y calidad del anuncio",
      level: 2,
      paras: [
        "Exporta/recoge keywords donde el competidor aparece en Search: qué productos/servicios prioriza, qué tan amplio es el set frente al número de anuncios.",
        "Miles de keywords y una docena de anuncios suelen significar grupos amplios y poca relevancia; una estructura densa enseña a agrupar — no copies filas.",
        "En anuncios mira titulares, descripciones, extensiones (sitelinks, callouts), encaje keyword–URL. Compara SERP desktop y móvil: los acentos suelen diferir.",
      ],
      lists: [
        {
          intro: "Qué fijar en la tabla:",
          items: [
            "clusters de keywords prioritarios",
            "ejemplo de titular y USP",
            "URL de landing",
            "si hay extensiones",
            "geo/marca en el copy",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Landings y USP",
      level: 2,
      paras: [
        "Recorre el camino del clic: velocidad, primer pantallazo, oferta, formulario/carrito, envío y contactos, móvil. Un competidor puede ganar por conversión en landing — no por puja.",
        "Recoge USP: precio, plazo, garantía, entrega, horario del call center, promos. Di tu diferencia con honestidad — no clones su promesa.",
        "Si el mercado es plano en precio, ganan servicio, velocidad de respuesta y claridad de oferta en el anuncio + en la página.",
      ],
      links: [
        {
          label: "El sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Redes, social ads y tráfico",
      level: 2,
      paras: [
        "YAN y Display: por toques de keyword y remarketing puedes ver banners y densidad. Las creatividades ahí son más libres que en Search — útil para hipótesis, no para copy-paste.",
        "Social (VK y pares) es otra capa; anota presencia sin meterte en el Ads Manager ajeno.",
        "SimilarWeb y similares dan orden de canales y dispositivos. Las cifras son estimaciones: mira la cuota paid search / display / social — no visitantes exactos a la persona.",
      ],
      notes: [
        {
          kind: "tip",
          text: "El análisis no promete conversiones perfectas para siempre. Son hipótesis de entrada; después — tu test y tu CPA.",
        },
      ],
    },
    {
      title: "Briefing corto",
      level: 2,
      paras: [
        "Resume: dónde la subasta está sobrecalentada, qué USP está poco cubierta, qué clusters están más libres, si tu landing está lista. De ahí — set de keywords de arranque, negativos y presupuesto de test.",
        "Repite el snapshot antes de temporada y promos grandes: los competidores también mueven pujas y ofertas.",
      ],
      lists: [
        {
          intro: "Salida mínima:",
          items: [
            "lista de 3–7 competidores de pago",
            "clusters de keywords y ejemplos de anuncios",
            "capturas/notas de landings",
            "tabla de USP",
            "decisión Search vs redes para el arranque",
          ],
        },
      ],
    },
  ],
  closing: [
    "Arma una tabla para cinco consultas prioritarias en una tarde: quién está en el bloque de pago, qué oferta, adónde va el clic — basta para no empezar la búsqueda de pago a ciegas.",
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "mediaplan",
    "sayt-pered-reklamoy",
    "klyuchi-yandeks-direkt",
    "tipy-kampaniy-google-ads",
  ],
};

export const analizKonkurentovKontekstEn: BlogPost = {
  slug: "analiz-konkurentov-kontekst",
  title: "Competitor analysis before launching paid search ads",
  date: "2019-10-30",
  category: "Paid search",
  cover: "/images/blog/analiz-konkurentov-kontekst/cover-en.webp",
  excerpt:
    "How to break down competitors before Yandex Direct and Google Ads: who counts as a competitor, ad keywords, copy, landing pages, USPs, networks, and traffic estimates — without copying someone else’s account.",
  lead: [
    "Before launching paid search it helps to see who actually runs ads in your SERP, which keywords and offers they use, and where the ads land. This isn’t a general SEO traffic audit — the focus is the paid layer.",
    "Below: competitor list, keyword set and ads, landing pages, USPs, networks, and rough traffic estimates. Tools like Serpstat / SpyWords / SimilarWeb give estimates — not an export of someone else’s account. You can’t copy a competitor’s budget one-to-one.",
  ],
  faq: [
    {
      q: "How is this different from SEO competitor analysis?",
      a: "SEO looks at visibility and organic. Here it’s who sits in the paid block, which keywords/ads/landing pages, and which offer.",
    },
    {
      q: "Why isn’t a competitor visible in Direct or Google Ads?",
      a: "They may not run Search, use different keywords or geo, be seasonal, or only run networks/social. Check several queries and devices.",
    },
    {
      q: "Can you learn a competitor’s exact budget?",
      a: "No. There are auction estimates and indirect signals. Build your media plan from your CPA targets — not someone else’s minimum.",
    },
    {
      q: "Which tools should you use?",
      a: "Any spy/keyword tool with paid SERP data plus manual SERP review. Brand names change — method matters more than the logo.",
    },
    {
      q: "How many competitors should you take?",
      a: "Three to seven strong ones on your priority queries is enough to start. Dozens of names blur focus.",
    },
    {
      q: "Should you check Display and ad networks?",
      a: "Yes if you plan networks: creatives and density differ from Search.",
    },
    {
      q: "Is analysis once before launch enough?",
      a: "No. Before a season, promos, and when KPIs drop, refresh the snapshot.",
    },
  ],
  sections: [
    {
      title: "Why analyze before launch",
      level: 2,
      paras: [
        "A competitor cut helps gauge auction density, bid/offer order, channels, and where traffic is sent. That makes it easier to decide: paid search as the main channel or support for SEO/social.",
        "The goal is hypotheses for your campaign: which clusters to cover first, which USP to highlight, which negatives to set early. Not steal their whole keyword set.",
        "Plan ahead: domain list → keywords → ads → landing pages → USPs → networks/other traffic → conclusions in a table.",
      ],
      links: [
        {
          label: "Competitor analysis (SEO/traffic)",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Who counts as a competitor",
      level: 2,
      paras: [
        "Offline neighbors in the market aren’t always in the same paid auction. And vice versa: for “flower delivery [city]” you may see aggregators and marketplaces you didn’t count as competitors.",
        "Manual method: a player table + SERP review on priority queries on desktop and mobile, in incognito and from different accounts if needed.",
        "Domain tools show paid-keyword overlaps and sites that run nearby. Take those with a similar commercial core — not everyone in the report.",
      ],
    },
    {
      title: "Keywords and ad quality",
      level: 2,
      paras: [
        "Export/collect keywords where the competitor appears in Search: which products/services are prioritized, how wide the set is vs ad count.",
        "Thousands of keywords and a dozen ads often mean broad groups and weak relevance; a dense structure teaches grouping — don’t copy rows.",
        "In ads watch headlines, descriptions, extensions (sitelinks, callouts), keyword–URL fit. Compare desktop and mobile SERPs — accents often differ.",
      ],
      lists: [
        {
          intro: "What to lock in the table:",
          items: [
            "priority keyword clusters",
            "sample headline and USP",
            "landing URL",
            "whether extensions exist",
            "geo/brand in the copy",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Landing pages and USPs",
      level: 2,
      paras: [
        "Walk the click path: speed, first screen, offer, form/cart, shipping and contacts, mobile. A competitor may win on landing conversion — not bid.",
        "Collect USPs: price, timeline, warranty, delivery, call-center hours, promos. State your difference honestly — don’t clone their promise.",
        "If the market is flat on price, service, reply speed, and offer clarity in the ad + on the page win.",
      ],
      links: [
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Networks, social ads, and traffic",
      level: 2,
      paras: [
        "YAN and Display: via keyword and remarketing touches you can see banners and density. Creatives there are freer than Search — useful for hypotheses, not copy-paste.",
        "Social (VK and peers) is a separate layer; note presence without digging into someone else’s Ads Manager.",
        "SimilarWeb and peers give channel and device order. Figures are estimates: watch paid search / display / social share — not exact visitors to the person.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Analysis doesn’t promise perfect conversions forever. These are input hypotheses; next — your test and CPA.",
        },
      ],
    },
    {
      title: "Short briefing",
      level: 2,
      paras: [
        "Summarize: where the auction is overheated, which USP is weakly covered, which clusters are freer, whether your landing is ready. From that — starting keyword set, negatives, and test budget.",
        "Repeat the snapshot before the season and major promos: competitors move bids and offers too.",
      ],
      lists: [
        {
          intro: "Minimum output:",
          items: [
            "list of 3–7 paid competitors",
            "keyword clusters and ad examples",
            "screens/notes on landing pages",
            "USP table",
            "Search vs networks decision for the start",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build a table for five priority queries in one evening: who is in the paid block, which offer, where the click goes — enough to not start paid search blind.",
  ],
  related: [
    "analiz-konkurentov",
    "semanticheskoe-yadro",
    "mediaplan",
    "sayt-pered-reklamoy",
    "klyuchi-yandeks-direkt",
    "tipy-kampaniy-google-ads",
  ],
};

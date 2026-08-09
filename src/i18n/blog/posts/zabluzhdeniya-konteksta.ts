import type { BlogPost } from "../../../data/blog";

/** EN overlay for zabluzhdeniya-konteksta — same structure as RU JSON. */
export const zabluzhdeniyaKontekstaEn: BlogPost = {
  slug: "zabluzhdeniya-konteksta",
  title: "Contextual advertising: 15 myths it’s time to drop",
  date: "2020-01-13",
  category: "Paid search",
  cover: "/images/blog/zabluzhdeniya-konteksta/cover-en.webp",
  excerpt:
    "Persistent PPC myths: search only, position #1 only, “display always burns,” blind Google recommendations, instant sales, and “triple the budget — triple the leads” — what’s wrong with each one.",
  lead: [
    "Some client–agency fights over paid search still rest on stereotypes from the “keywords in Search only” era. Markets, auctions, and tools changed — the myth wording often didn’t.",
    "Below: fifteen typical misconceptions and why they hurt economics. Don’t copy “$200 a month” budget figures or outsider ranking stories: watch your niche, CPA, and landing pages.",
  ],
  faq: [
    {
      q: "Is contextual advertising the same as Search only?",
      a: "No. Search is part of PPC. There are networks, shopping and smart formats, remarketing, and display with different KPIs.",
    },
    {
      q: "Do I always need position #1?",
      a: "Not always. Positions 2–4 sometimes deliver better ROI at a lower CPC. Count conversions and ROAS — not height.",
    },
    {
      q: "Should I apply every Google recommendation?",
      a: "No. They’re system hints for the platform’s goals. Filter them through your economics and account structure.",
    },
    {
      q: "I don’t see my ad — is it broken?",
      a: "Not necessarily. Auction, frequency, click history, geo, and device all matter. Use the account preview — not “I Googled on my phone.”",
    },
    {
      q: "If I triple the budget, do I triple the leads?",
      a: "Rarely linear. Competition for leftover demand rises and CPA shifts. Scale in steps.",
    },
    {
      q: "Should I run ads only during call-center hours?",
      a: "Depends on the funnel. Night leads can queue; unanswered calls are wasted spend. Match the schedule to the touch type.",
    },
    {
      q: "Is site structure only for SEO?",
      a: "No. For dynamic and shopping formats, page and feed quality hit ads and learning directly.",
    },
  ],
  sections: [
    {
      title: "Search, positions, and display",
      level: 2,
      paras: [
        "The myth “contextual = only Search keywords” is outdated: networks, shopping campaigns, remarketing, and lookalikes cover other funnel stages. Search is strong on hot demand, but expensive and it doesn’t cover everything.",
        "The myth “all conversions only from positions 1–3” pushes overpaying for visibility. Mid positions are often better on ROI: fewer clicks, cheaper contact. Watch target actions and ad-spend share — not the pretty first line.",
        "The myth “display always burns” confuses a broad banner with no goal and meaningful reach, remarketing, and personalization. Display has different KPIs — awareness, return, warm-up — not a lead from the first impression like Search.",
      ],
      lists: [
        {
          intro: "Instead of the stereotype:",
          items: [
            "mix Search and networks for the job",
            "judge position via CPA / ROMI",
            "give display a goal and segment — not just a banner",
          ],
        },
      ],
      links: [
        {
          label: "Contextual ads and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "Ad campaign mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Google automation, Smart, and site structure",
      level: 2,
      paras: [
        "The myth “apply every Google recommendation at once” turns the account into a checkbox list. Some tips help; some optimize for the platform’s auction volume. Decide through your margin and a test.",
        "The myth “Search first, Smart/shopping later” delays strong e-commerce formats. Shopping and smart campaigns (historically Smart Shopping; later ecosystems moved toward Performance Max and peers — check current types) lean on feed and learning: plan them early if the catalog is ready.",
        "The myth “site structure is only for SEO” breaks DSA and shopping ads: weak titles, descriptions, and categories → weak auto-ads. Preparing landings and the feed is part of PPC — not someday for organic. Don’t confuse organic ranking timelines with launching paid search: site prep and organic growth run on different clocks.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Google campaign names have changed. Check the current list in Ads and Help — don’t cling to a 2019 label.",
        },
      ],
      links: [
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "“I don’t see the ad” and expecting sales in a day",
      level: 2,
      paras: [
        "The myth “if I or my family don’t see the ad — it’s broken” ignores the auction, frequency, ad quality, and the system cutting empty repeats. Use the account preview — it doesn’t spoil stats like endless self-clicks.",
        "The myth “launched today — sales today” only happens on impulse goods with a perfect funnel. Long deal cycles, a raw site, little learning data, and an unknown brand push results to days and weeks — that isn’t automatically “the agency is bad.”",
        "The myth “a new product doesn’t need display” leaves a niche with no Search demand starving. Sometimes display creates the queries Search later catches.",
      ],
    },
    {
      title: "Ad copy, budgets, and tests",
      level: 2,
      paras: [
        "The myth “tasty copy is everything” underplays account structure, keywords, landing pages, and tool mix. Copy matters — it doesn’t replace the system.",
        "Myths like “$200/month covers everything” and “$40 is enough to test a new tool for a month” almost always lie in competitive niches: a test must gather stats, or you’re tuning settings on noise.",
        "The myth “experiment = change every banner, target, budget, and strategy at once” kills conclusions. Change one or two levers per iteration.",
        "The myth “×3 budget = ×3 conversions” isn’t linear: leftover demand gets pricier, CPA rises. Scale in steps and watch the return curve.",
        "The myth “run only while the call center works” fits unanswered calls, but hurts if leads queue in CRM. Match the schedule to conversion type.",
      ],
      lists: [
        {
          intro: "Practical antidotes:",
          items: [
            "test budget from a target conversion count — not a round sum",
            "one hypothesis lever at a time",
            "scale after a stable CPA",
            "schedule = lead type (call vs form)",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Google Performance Planner",
          href: "/en/blog/planirovshchik-rezultatov-google/",
        },
      ],
    },
    {
      title: "A short list instead of an argument",
      level: 2,
      paras: [
        "Lock with the client: goal and KPI, acceptable CPA, learning horizon, what counts as a successful test. Then myths less often replace the report.",
        "Reread disputed claims through economics: if you can’t check the statement with a number over a period — it’s taste, not PPC law.",
      ],
      lists: [
        {
          intro: "15 myths in one line each:",
          items: [
            "contextual ≠ Search only",
            "not position #1 only",
            "display isn’t always a burn",
            "not every Google tip is an order",
            "smart/shopping formats aren’t for later",
            "the site matters for PPC too",
            "“I don’t see it” ≠ broken",
            "don’t expect sales on day X",
            "new demand may need display",
            "copy isn’t the whole system",
            "tiny budget ≠ a test",
            "micro-budget on a tool ≠ a conclusion",
            "don’t change everything at once",
            "budget doesn’t scale linearly",
            "schedule to lead type",
          ],
        },
      ],
    },
  ],
  closing: [
    "Drop two or three of the most harmful myths from the brief before launch — you’ll agree on KPIs faster than arguing after the first click invoice.",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "kontekst-i-seo",
    "sayt-pered-reklamoy",
    "byudzhet-yandeks-direkt",
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
  ],
};

/** ES overlay for zabluzhdeniya-konteksta — same structure as RU JSON. */
export const zabluzhdeniyaKontekstaEs: BlogPost = {
  slug: "zabluzhdeniya-konteksta",
  title: "Publicidad contextual: 15 mitos que ya toca soltar",
  date: "2020-01-13",
  category: "Paid search",
  cover: "/images/blog/zabluzhdeniya-konteksta/cover.webp",
  excerpt:
    "Mitos persistentes de PPC: solo búsqueda, solo posición 1, «display siempre quema», recomendaciones de Google a ciegas, ventas al instante y «triplica el presupuesto — triplicas leads» — qué falla en cada uno.",
  lead: [
    "Algunas peleas cliente–agencia sobre paid search siguen apoyadas en estereotipos de la era «solo keywords en Búsqueda». Mercados, subastas y tools cambiaron — el wording de los mitos a menudo no.",
    "Abajo: quince ideas erróneas típicas y por qué dañan la economía. No copies cifras de presupuesto de «200 $ al mes» ni historias ajenas de ranking: mira tu nicho, CPA y landings.",
  ],
  faq: [
    {
      q: "¿La publicidad contextual es lo mismo que solo Búsqueda?",
      a: "No. Búsqueda es parte del PPC. Hay redes, formatos shopping y smart, remarketing y display con KPIs distintos.",
    },
    {
      q: "¿Siempre hace falta la posición 1?",
      a: "No siempre. Las posiciones 2–4 a veces entregan mejor ROI con un CPC más bajo. Cuenta conversiones y ROAS — no la altura.",
    },
    {
      q: "¿Hay que aplicar cada recomendación de Google?",
      a: "No. Son pistas del sistema para los objetivos de la plataforma. Fíltralas con tu economía y la estructura de la cuenta.",
    },
    {
      q: "¿No veo mi anuncio — está roto?",
      a: "No necesariamente. Importan subasta, frecuencia, historial de clics, geo y dispositivo. Usa el preview de la cuenta — no «lo busqué en el móvil».",
    },
    {
      q: "¿Si triplico el presupuesto, triplico los leads?",
      a: "Rara vez es lineal. La competencia por la demanda restante sube y el CPA se mueve. Escala por pasos.",
    },
    {
      q: "¿Correr ads solo en horario del call center?",
      a: "Depende del funnel. Los leads de noche pueden encolar; las llamadas sin respuesta son gasto tirado. Encaja el schedule al tipo de toque.",
    },
    {
      q: "¿La estructura del sitio es solo para SEO?",
      a: "No. En formatos dinámicos y shopping, la calidad de página y feed pega directo a los ads y al learning.",
    },
  ],
  sections: [
    {
      title: "Búsqueda, posiciones y display",
      level: 2,
      paras: [
        "El mito «contextual = solo keywords de Búsqueda» está obsoleto: redes, campañas shopping, remarketing y lookalikes cubren otras etapas del funnel. Búsqueda es fuerte en demanda caliente, pero es cara y no lo cubre todo.",
        "El mito «todas las conversiones solo de posiciones 1–3» empuja a pagar de más por visibilidad. Posiciones medias a menudo rinden mejor en ROI: menos clics, contacto más barato. Mira acciones target y share del gasto publicitario — no la primera línea bonita.",
        "El mito «display siempre quema» confunde un banner amplio sin objetivo con reach con sentido, remarketing y personalización. Display tiene KPIs distintos — awareness, retorno, calentamiento — no un lead desde la primera impresión como Búsqueda.",
      ],
      lists: [
        {
          intro: "En vez del estereotipo:",
          items: [
            "mezcla Búsqueda y redes según el trabajo",
            "juzga la posición vía CPA / ROMI",
            "dale a display un objetivo y un segmento — no solo un banner",
          ],
        },
      ],
      links: [
        {
          label: "Ads contextuales y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
        {
          label: "Errores de campaña publicitaria",
          href: "/es/blog/oshibki-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Automatización de Google, Smart y estructura del sitio",
      level: 2,
      paras: [
        "El mito «aplica cada recomendación de Google de golpe» convierte la cuenta en una lista de checkboxes. Algunas tips ayudan; otras optimizan el volumen de subasta de la plataforma. Decide con tu margen y un test.",
        "El mito «primero Búsqueda, Smart/shopping después» retrasa formatos fuertes de e-commerce. Las campañas shopping y smart (históricamente Smart Shopping; luego el ecosistema se movió hacia Performance Max y pares — mira tipos actuales) se apoyan en feed y learning: plánealas pronto si el catálogo está listo.",
        "El mito «la estructura del sitio es solo para SEO» rompe DSA y shopping ads: titles, descriptions y categorías flojas → auto-ads flojos. Preparar landings y el feed es parte del PPC — no «algún día» para orgánico. No confundas timelines de ranking orgánico con el lanzamiento de paid search: prep del sitio y crecimiento orgánico van en relojes distintos.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Los nombres de campañas de Google han cambiado. Mira la lista actual en Ads y Help — no te aferres a una etiqueta de 2019.",
        },
      ],
      links: [
        {
          label: "Google Merchant Center",
          href: "/es/blog/google-merchant-center/",
        },
        {
          label: "Sitio antes de la publicidad",
          href: "/es/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "«No veo el anuncio» y esperar ventas en un día",
      level: 2,
      paras: [
        "El mito «si yo o mi familia no vemos el anuncio — está roto» ignora la subasta, la frecuencia, la calidad del anuncio y que el sistema corta repeticiones vacías. Usa el preview de la cuenta — no estropea las stats como clics propios sin fin.",
        "El mito «lancé hoy — ventas hoy» solo pasa en goods de impulso con un funnel perfecto. Ciclos de deal largos, un sitio crudo, poca data de learning y una marca desconocida empujan resultados a días y semanas — eso no es automáticamente «la agencia es mala».",
        "El mito «un producto nuevo no necesita display» deja un nicho sin demanda de Búsqueda a dieta. A veces display crea las queries que Búsqueda atrapa después.",
      ],
    },
    {
      title: "Copy de ads, presupuestos y tests",
      level: 2,
      paras: [
        "El mito «el copy sabroso lo es todo» infravalora la estructura de cuenta, keywords, landings y el mix de tools. El copy importa — no sustituye el sistema.",
        "Mitos tipo «200 $/mes cubre todo» y «40 $ bastan para testear una tool nueva un mes» casi siempre mienten en nichos competitivos: un test debe reunir stats, o afinas settings sobre ruido.",
        "El mito «experimento = cambiar cada banner, target, presupuesto y estrategia a la vez» mata las conclusiones. Cambia uno o dos levers por iteración.",
        "El mito «×3 presupuesto = ×3 conversiones» no es lineal: la demanda restante se encarece, el CPA sube. Escala por pasos y mira la curva de retorno.",
        "El mito «corre solo mientras el call center trabaja» encaja con llamadas sin respuesta, pero hace daño si los leads encolan en CRM. Encaja el schedule al tipo de conversión.",
      ],
      lists: [
        {
          intro: "Antídotos prácticos:",
          items: [
            "presupuesto de test desde un conteo target de conversiones — no una suma redonda",
            "un lever de hipótesis a la vez",
            "escala tras un CPA estable",
            "schedule = tipo de lead (llamada vs formulario)",
          ],
        },
      ],
      links: [
        {
          label: "Presupuesto de Yandex Direct",
          href: "/es/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Google Performance Planner",
          href: "/es/blog/planirovshchik-rezultatov-google/",
        },
      ],
    },
    {
      title: "Una lista corta en vez de una discusión",
      level: 2,
      paras: [
        "Fija con el cliente: objetivo y KPI, CPA aceptable, horizonte de learning, qué cuenta como un test exitoso. Así los mitos sustituyen menos al informe.",
        "Relee las afirmaciones en disputa a través de la economía: si no puedes chequear la frase con un número en un periodo — es gusto, no ley de PPC.",
      ],
      lists: [
        {
          intro: "15 mitos en una línea cada uno:",
          items: [
            "contextual ≠ solo Búsqueda",
            "no solo posición 1",
            "display no siempre quema",
            "no cada tip de Google es una orden",
            "formatos smart/shopping no son «para después»",
            "el sitio también importa para PPC",
            "«no lo veo» ≠ roto",
            "no esperes ventas el día X",
            "demanda nueva puede necesitar display",
            "el copy no es todo el sistema",
            "presupuesto diminuto ≠ un test",
            "micro-presupuesto en una tool ≠ una conclusión",
            "no lo cambies todo a la vez",
            "el presupuesto no escala de forma lineal",
            "schedule según tipo de lead",
          ],
        },
      ],
    },
  ],
  closing: [
    "Suelta dos o tres de los mitos más dañinos del brief antes del lanzamiento — acordaréis KPIs más rápido que discutir tras la primera factura de clics.",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "kontekst-i-seo",
    "sayt-pered-reklamoy",
    "byudzhet-yandeks-direkt",
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
  ],
};

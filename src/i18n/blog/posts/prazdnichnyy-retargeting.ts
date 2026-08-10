import type { BlogPost } from "../../../data/blog";

/** EN overlay for prazdnichnyy-retargeting — same structure as RU JSON. */
export const prazdnichnyyRetargetingEn: BlogPost = {
  slug: "prazdnichnyy-retargeting",
  title: "Pre-holiday retargeting: four campaign tactics",
  date: "2018-12-26",
  category: "Paid search",
  cover: "/images/blog/prazdnichnyy-retargeting/cover-en.webp",
  excerpt:
    "How to bring visitors back at the peak of holiday shopping: a separate retargeting campaign, a social segment, Audiences interests, display, and a cascade — without burning the budget.",
  lead: [
    "In the pre-holiday season site traffic rises while purchase share often stays low: people browsed the catalog and left. Retargeting brings back those who already know the brand — with a discount, a gift, or a shorter offer under a deadline.",
    "Below: four tactics for Yandex Direct (and related accounts) — social segment, interests, display, and a cascade. Keep retargeting in its own campaign so bids, negatives, and reporting stay clean. Informational only; when Meta* products are mentioned, the legal notice applies.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Facebook* and Instagram* ads run through Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why a separate retargeting campaign?",
      a: "Easier bids, schedule, creatives, and stats. Mixing with cold search muddies CPA and optimization.",
    },
    {
      q: "Is retargeting only for abandoned carts?",
      a: "No. Work the whole touch base: visits, buyers, social referrals — with different offers.",
    },
    {
      q: "How many contacts for Audiences?",
      a: "A rough guide is from about 1,000 list rows — check current Yandex Help limits. Smaller lists: use Metrica segments.",
    },
    {
      q: "Which holiday offer works?",
      a: "Gift sets, delivery by date, a time-limited promo code, a free option. Each segment gets its own copy — not one banner for everyone.",
    },
    {
      q: "What is cascade retargeting?",
      a: "A touch chain that tightens or changes the offer by days after the visit: reminder → benefit → last deadline.",
    },
    {
      q: "Should social belong in the segment?",
      a: "If traffic comes from there — yes: a Metrica “source = social” segment to warm a familiar audience with a holiday offer.",
    },
    {
      q: "How do you avoid burning budget?",
      a: "Cap frequency, exclude buyers when possible, separate ads by segment, stop on CPA, check promo landings.",
    },
    {
      q: "Does this help SEO?",
      a: "Not directly. Indirectly you test offers faster and build awareness. Organic is a separate track with its own timelines.",
    },
  ],
  sections: [
    {
      title: "Why retargeting matters for holidays",
      level: 2,
      paras: [
        "Demand is compressed: gifts, corporate events, delivery deadlines. People compare and postpone more — retargeting catches the warm; it does not heat cold from zero.",
        "Put retargeting in a separate campaign: own bids, schedule (evenings / weekends), budget, and goals. Otherwise the optimizer eats search-phrase stats.",
      ],
      lists: [
        {
          intro: "Base before launch:",
          items: [
            "counter and goals in Metrica",
            "current promos and landings",
            "exclude buyers (if the scenario allows)",
            "frequency cap and daily budget",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "Yandex Direct bids",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Tactic 1: audience from social",
      level: 2,
      paras: [
        "People who came from VK, Instagram*, Facebook*, and other social networks already saw the brand in the feed. Gift collections and “make it by the holiday” fit them — not a cold offer from scratch.",
        "In Metrica save a segment by source (social) and attach it in retargeting conditions. Creative and landing should match the holiday scenario — not a copy of the search ad.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "segment of social visits",
            "a separate ad group",
            "offer: set / delivery by date / promo code",
            "check UTM and promo landings",
          ],
        },
      ],
    },
    {
      title: "Tactic 2: interests and Yandex Audiences",
      level: 2,
      paras: [
        "Upload a buyers or leads list into Audiences (respecting minimum list size) and review interests with high affinity. Add a strong interest to a Metrica segment and combine: interest + was on site, interest + bought.",
        "Different interests need different copy: cooking and “beauty / health” do not live in one ad. Otherwise CTR and conversion drop.",
      ],
      lists: [
        {
          intro: "Combinations:",
          items: [
            "interest ∩ site visitors",
            "interest ∩ buyers",
            "interest ∩ abandoned cart",
            "separate creatives for each pairing",
          ],
        },
      ],
    },
    {
      title: "Tactic 3: display retargeting",
      level: 2,
      paras: [
        "Display formats remind about the brand and promo wherever people browse. On holidays that boosts warm-base reach, but watch frequency and placements — irritation instead of a purchase otherwise.",
        "Tie display to a clear next step: not only awareness, but a click to a current promo URL with stock and timelines.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "impression frequency",
            "exclude irrelevant placements",
            "one main offer per banner",
            "end-to-end goal (lead / purchase), not only reach",
          ],
        },
      ],
    },
    {
      title: "Tactic 4: cascade retargeting",
      level: 2,
      paras: [
        "A cascade changes the message by visit age. Day 0–1: soft reminder. Day 2–3: benefit or gift. Closer to the deadline: “make it by the date” / last promo day. Compress timelines by category: flowers and food decide faster than large appliances.",
        "Don’t show the same banner for two weeks. Exclude conversions from later cascade steps.",
      ],
      lists: [
        {
          intro: "Cascade frame:",
          items: [
            "step 1 — assortment reminder",
            "step 2 — discount / bonus",
            "step 3 — delivery / promo deadline",
            "exclude buyers at each step",
          ],
        },
      ],
    },
    {
      title: "Setup rules and measurement",
      level: 2,
      paras: [
        "Segment as practically as possible: each segment gets its own offer. Retargeting works the whole touch base, not only “didn’t buy.” Test tactics in turn — otherwise you won’t know what worked.",
        "Count CPA and retargeting’s share of revenue in the holiday window. After the season keep working segments and creatives — useful for the next peaks (Valentine’s, March 8, Black Friday periods).",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "separate campaign",
            "four tactics labeled in groups",
            "landings with current promo",
            "frequency and budget caps",
            "report: spend / conversions / CPA by segment",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Check the offer and delivery timelines before enabling impressions: promising “by the holiday” without logistics hits reviews and repeat sales.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "kontekst-i-seo",
    "optimizatsiya-konversii",
    "brendovyy-trafik",
    "spetsrazmeshchenie-direkt",
    "reklamnyy-kabinet",
  ],
};

/** ES overlay for prazdnichnyy-retargeting — same structure as RU JSON / EN. */
export const prazdnichnyyRetargetingEs: BlogPost = {
  slug: "prazdnichnyy-retargeting",
  title: "Retargeting pre-fiestas: cuatro tácticas de campaña",
  date: "2018-12-26",
  category: "Paid search",
  cover: "/images/blog/prazdnichnyy-retargeting/cover-es.webp",
  excerpt:
    "Cómo traer de vuelta a los visitantes en el pico de compras de fiestas: una campaña de retargeting aparte, un segmento social, intereses de Audiences, display y una cascada — sin quemar el presupuesto.",
  lead: [
    "En la temporada pre-fiestas el tráfico del sitio sube mientras la cuota de compra a menudo se queda baja: la gente miró el catálogo y se fue. El retargeting trae de vuelta a quienes ya conocen la marca — con un descuento, un regalo o una oferta más corta bajo deadline.",
    "Abajo: cuatro tácticas para Yandex Direct (y cuentas relacionadas) — segmento social, intereses, display y cascada. Mantén el retargeting en su propia campaña para que pujas, negatives y reporting se queden limpios. Solo informativo; cuando se mencionan productos Meta*, aplica la nota legal.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Los ads de Facebook* e Instagram* corren a través de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por qué una campaña de retargeting aparte?",
      a: "Más fácil pujas, horario, creatives y stats. Mezclar con search frío ensucia el CPA y la optimización.",
    },
    {
      q: "¿El retargeting es solo para carritos abandonados?",
      a: "No. Trabaja toda la base de touches: visitas, compradores, referrals de social — con ofertas distintas.",
    },
    {
      q: "¿Cuántos contactos para Audiences?",
      a: "Una guía aproximada es desde unas 1.000 filas de lista — revisa los límites actuales de Yandex Help. Listas más pequeñas: usa segmentos de Metrica.",
    },
    {
      q: "¿Qué oferta de fiestas funciona?",
      a: "Sets de regalo, entrega para una fecha, un código promo con plazo, una opción gratis. Cada segmento recibe su propio copy — no un banner para todos.",
    },
    {
      q: "¿Qué es el retargeting en cascada?",
      a: "Una cadena de touches que aprieta o cambia la oferta por días tras la visita: recordatorio → beneficio → último deadline.",
    },
    {
      q: "¿Debe social ir en el segmento?",
      a: "Si el tráfico viene de ahí — sí: un segmento de Metrica «fuente = social» para calentar una audiencia familiar con una oferta de fiestas.",
    },
    {
      q: "¿Cómo evitar quemar presupuesto?",
      a: "Tope de frecuencia, excluir compradores cuando se pueda, ads separados por segmento, parar por CPA, revisar landings de promo.",
    },
    {
      q: "¿Esto ayuda al SEO?",
      a: "No de forma directa. De forma indirecta pruebas ofertas más rápido y construyes awareness. El orgánico es una vía aparte con sus propios plazos.",
    },
  ],
  sections: [
    {
      title: "Por qué importa el retargeting en fiestas",
      level: 2,
      paras: [
        "La demanda se comprime: regalos, eventos corporativos, deadlines de entrega. La gente compara y pospone más — el retargeting atrapa lo cálido; no calienta frío desde cero.",
        "Pon el retargeting en una campaña aparte: pujas propias, horario (tardes / fines de semana), presupuesto y objetivos. Si no, el optimizer se come las stats de frases de search.",
      ],
      lists: [
        {
          intro: "Base antes del lanzamiento:",
          items: [
            "contador y objetivos en Metrica",
            "promos y landings actuales",
            "excluir compradores (si el escenario lo permite)",
            "tope de frecuencia y presupuesto diario",
          ],
        },
      ],
      links: [
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
        {
          label: "Pujas de Yandex Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Táctica 1: audiencia desde social",
      level: 2,
      paras: [
        "Quienes llegaron de VK, Instagram*, Facebook* y otras redes ya vieron la marca en el feed. Les encajan colecciones de regalos y «hazlo para la fiesta» — no una oferta fría desde cero.",
        "En Metrica guarda un segmento por fuente (social) y adjúntalo en las condiciones de retargeting. Creative y landing deben encajar con el escenario de fiestas — no una copia del ad de search.",
      ],
      lists: [
        {
          intro: "En la práctica:",
          items: [
            "segmento de visitas sociales",
            "un ad group aparte",
            "oferta: set / entrega por fecha / código promo",
            "revisar UTM y landings de promo",
          ],
        },
      ],
    },
    {
      title: "Táctica 2: intereses y Yandex Audiences",
      level: 2,
      paras: [
        "Sube una lista de compradores o leads a Audiences (respetando el tamaño mínimo de lista) y revisa intereses con alta afinidad. Añade un interés fuerte a un segmento de Metrica y combina: interés + estuvo en el sitio, interés + compró.",
        "Intereses distintos necesitan copy distinto: cocina y «belleza / salud» no viven en un mismo ad. Si no, caen CTR y conversión.",
      ],
      lists: [
        {
          intro: "Combinaciones:",
          items: [
            "interés ∩ visitantes del sitio",
            "interés ∩ compradores",
            "interés ∩ carrito abandonado",
            "creatives aparte para cada emparejamiento",
          ],
        },
      ],
    },
    {
      title: "Táctica 3: retargeting display",
      level: 2,
      paras: [
        "Los formatos display recuerdan la marca y la promo donde la gente navega. En fiestas eso sube el reach de la base cálida, pero vigila frecuencia y placements — irritación en lugar de compra si no.",
        "Liga el display a un siguiente paso claro: no solo awareness, sino un clic a una URL de promo actual con stock y plazos.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "frecuencia de impresiones",
            "excluir placements irrelevantes",
            "una oferta principal por banner",
            "objetivo de punta a punta (lead / compra), no solo reach",
          ],
        },
      ],
    },
    {
      title: "Táctica 4: retargeting en cascada",
      level: 2,
      paras: [
        "Una cascada cambia el mensaje por antigüedad de la visita. Día 0–1: recordatorio suave. Día 2–3: beneficio o regalo. Más cerca del deadline: «hazlo para la fecha» / último día de promo. Comprime plazos por categoría: flores y comida deciden más rápido que electrodomésticos grandes.",
        "No muestres el mismo banner dos semanas. Excluye conversiones de los pasos posteriores de la cascada.",
      ],
      lists: [
        {
          intro: "Marco de cascada:",
          items: [
            "paso 1 — recordatorio de surtido",
            "paso 2 — descuento / bonus",
            "paso 3 — deadline de entrega / promo",
            "excluir compradores en cada paso",
          ],
        },
      ],
    },
    {
      title: "Reglas de setup y medición",
      level: 2,
      paras: [
        "Segmenta de forma práctica: cada segmento recibe su propia oferta. El retargeting trabaja toda la base de touches, no solo «no compró». Prueba tácticas por turno — si no, no sabrás qué funcionó.",
        "Cuenta CPA y la cuota de revenue del retargeting en la ventana de fiestas. Tras la temporada, conserva segmentos y creatives que funcionen — útiles para los siguientes picos (San Valentín, 8 de marzo, periodos de Black Friday).",
      ],
      lists: [
        {
          intro: "Checklist de lanzamiento:",
          items: [
            "campaña aparte",
            "cuatro tácticas etiquetadas en grupos",
            "landings con promo actual",
            "topes de frecuencia y presupuesto",
            "reporte: spend / conversiones / CPA por segmento",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Revisa la oferta y los plazos de entrega antes de encender impresiones: prometer «para la fiesta» sin logística pega a reseñas y ventas repetidas.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "kontekst-i-seo",
    "optimizatsiya-konversii",
    "brendovyy-trafik",
    "spetsrazmeshchenie-direkt",
    "reklamnyy-kabinet",
  ],
};

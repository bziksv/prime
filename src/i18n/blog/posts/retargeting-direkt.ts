import type { BlogPost } from "../../../data/blog";

/** EN overlay for retargeting-direkt — same structure as RU JSON. */
export const retargetingDirektEn: BlogPost = {
  slug: "retargeting-direkt",
  title: "Retargeting in Yandex Direct: segments, placements, and ads",
  date: "2019-07-03",
  category: "Paid search",
  cover: "/images/blog/retargeting-direkt/cover-en.webp",
  excerpt:
    "How to optimize retargeting in Direct: Metrika goals and segments, Yandex Audiences, reading stats by display conditions and creatives — without rigid CTR and bounce thresholds from 2019 guides.",
  lead: [
    "Retargeting in Yandex Direct brings back people who already visited the site, app, or your lists: viewed a product, abandoned a cart, left a lead. The basics of what retargeting is are in a separate article; here we focus on setup and optimization in Direct and the Yandex Display Network.",
    "Account UI and report names change. Focus on meaning: segment → display condition → creative → CPA/conversions. We don’t push rigid norms like “CTR always >0.5%” and “bounce <20%” from old texts — watch your niche and dynamics.",
  ],
  faq: [
    {
      q: "How is this different from the general retargeting article?",
      a: "That one covers the concept and types. Here — Direct practice: Metrika/Audiences, display conditions, placements, and bid optimization by segment.",
    },
    {
      q: "Should I use Metrika goals or segments?",
      a: "Goals are a fast start (reached / didn’t). Segments are more flexible: behavior, sources, devices, intersections. Often start with goals and strengthen with segments.",
    },
    {
      q: "Do I need Yandex Audiences?",
      a: "Useful for CRM lists, look-alike, geo, and the display pixel — with a lawful contact base and consent. Don’t upload purchased lists.",
    },
    {
      q: "Can I promise conversion “like everyone else”?",
      a: "No. Warm audiences convert better, but results depend on offer, frequency, and excluding buyers.",
    },
    {
      q: "Is retargeting only in the Display Network?",
      a: "More often yes (networks/display), but schemes depend on campaign type. Check current Direct account capabilities.",
    },
  ],
  sections: [
    {
      title: "Why a separate retargeting campaign",
      level: 2,
      paras: [
        "A large share of visits don’t end in a first-time purchase — normal for many niches, not a “70–95% law for everyone.” Retargeting reminds people of an abandoned cart or key service after they’ve shown interest.",
        "Put retargeting in a separate campaign/condition group: otherwise it’s hard to manage bids, frequency, and creatives apart from cold traffic.",
      ],
      lists: [
        {
          intro: "When retargeting fits:",
          items: [
            "there’s stable site traffic",
            "Metrika goals/events are set",
            "there’s an offer for returners",
            "you can exclude people who already bought",
            "you’re ready to watch impression frequency",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: basics",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Three ways to build the audience",
      level: 2,
      paras: [
        "Way 1 — Metrika goal conditions: were / weren’t on a goal (lead, purchase, key page). Simple, but coarse.",
        "Way 2 — Metrika segments: behavior, depth, source, device, visits to specific URLs. More flexible and better for tests like “cart without payment” vs “viewed category.”",
        "Way 3 — Yandex Audiences: your lists (with consent), apps, geo, display pixel, similar audiences. Follow personal-data rules: emails/phones only from a lawful base.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "goals on lead/purchase",
            "cart without purchase segment",
            "exclude conversions",
            "a separate creative per stage",
            "test the retargeting window (days)",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Over-narrowing a segment kills reach and stats. Better two or three working segments than a dozen empty ones.",
        },
      ],
    },
    {
      title: "Stats: what to watch after launch",
      level: 2,
      paras: [
        "Let the campaign gather data — don’t expect magic in three days. Watch clicks, conversions, CPA/goal cost, bounce, and spend together with placements and display conditions.",
        "CTR and bounce thresholds from old guides (“always >0.5%,” “bounce under 20%”) aren’t universal. Use your past periods and compare segments to each other — not someone else’s “internet norm.”",
      ],
      lists: [
        {
          intro: "Minimum metric set:",
          items: [
            "conversions and CPA",
            "CTR as a creative signal",
            "bounce / time — landing quality",
            "reach and frequency",
            "spend without goals — a stop signal",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Segments beat “just a goal”",
      level: 2,
      paras: [
        "Segments describe the audience more precisely: not only “reached a goal,” but who they were by device, source, depth. That makes it easier to raise bids on a profitable slice and weaken an empty one.",
        "Run a couple of segments in parallel with different offers. In Direct reports, watch the slice by display condition (account naming may differ) — compare conversion, CTR, spend.",
      ],
      lists: [
        {
          intro: "When a segment is weak:",
          items: [
            "clicks and spend exist — no goals",
            "CPA is far above economics",
            "bounces are abnormally high vs other slices",
            "audience is burned by frequency",
            "landing doesn’t match the funnel stage",
          ],
        },
      ],
    },
    {
      title: "Placements and ads",
      level: 2,
      paras: [
        "In the Display Network, placements and formats affect CTR and post-click. Turn off placements with spend and no conversions once stats volume is enough; don’t cut everything after ten impressions.",
        "Creative should match the stage: abandoned cart — specific product/terms; service visit — offer and trust, not a generic “we’re the best” banner. Refresh combinations when frequency rises and conversion falls.",
      ],
      lists: [
        {
          intro: "Ad optimization:",
          items: [
            "separate texts/banners per segment",
            "UTM and landing matched to the offer",
            "frequency cap",
            "exclude buyers",
            "test headlines and offer — not only the image",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Retargeting in Direct runs on Metrika/Audiences data and discipline: a separate campaign, segments, exclusions, frequency and placement control.",
        "Optimization is a loop: stats → compare display conditions → fix bids/creatives/segments. Without an offer and a decent landing, a warm audience won’t save you.",
      ],
    },
  ],
  closing: [
    "Assemble goals and two or three segments, put retargeting aside, watch CPA and frequency — and fix placements with creatives from facts, not someone else’s 2019 CTR thresholds.",
  ],
  related: [
    "retargeting",
    "strategii-yandeks-direkt",
    "metrika-tseli",
    "prazdnichnyy-retargeting",
    "retargeting-meta",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for retargeting-direkt — same structure as RU JSON / EN. */
export const retargetingDirektEs: BlogPost = {
  slug: "retargeting-direkt",
  title: "Retargeting en Yandex Direct: segmentos, placements y ads",
  date: "2019-07-03",
  category: "Paid search",
  cover: "/images/blog/retargeting-direkt/cover-es.webp",
  excerpt:
    "Cómo optimizar el retargeting en Direct: metas y segmentos de Metrika, Yandex Audiences, lectura de stats por condiciones de display y creatividades — sin umbrales rígidos de CTR y rebote de guías de 2019.",
  lead: [
    "El retargeting en Yandex Direct trae de vuelta a quien ya visitó el sitio, la app o tus listas: vio un producto, abandonó el carrito, dejó un lead. Lo básico de qué es retargeting está en un artículo aparte; aquí el foco es setup y optimización en Direct y la Yandex Display Network.",
    "La UI de la cuenta y los nombres de reports cambian. Céntrate en el sentido: segmento → condición de display → creatividad → CPA/conversiones. No empujamos normas rígidas como «CTR siempre >0,5%» y «rebote <20%» de textos viejos — mira tu nicho y la dinámica.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia del artículo general de retargeting?",
      a: "Aquel cubre el concepto y los tipos. Aquí — práctica de Direct: Metrika/Audiences, condiciones de display, placements y optimización de pujas por segmento.",
    },
    {
      q: "¿Debo usar metas o segmentos de Metrika?",
      a: "Las metas son un arranque rápido (llegó / no). Los segmentos son más flexibles: comportamiento, fuentes, dispositivos, intersecciones. A menudo se empieza con metas y se refuerza con segmentos.",
    },
    {
      q: "¿Hace falta Yandex Audiences?",
      a: "Útil para listas CRM, look-alike, geo y el píxel display — con base de contactos lícita y consentimiento. No subas listas compradas.",
    },
    {
      q: "¿Puedo prometerme una conversión «como todo el mundo»?",
      a: "No. Las audiencias cálidas convierten mejor, pero el resultado depende de la oferta, la frecuencia y excluir compradores.",
    },
    {
      q: "¿El retargeting es solo en la Display Network?",
      a: "Más a menudo sí (networks/display), pero los esquemas dependen del tipo de campaña. Mira las capacidades actuales de la cuenta Direct.",
    },
  ],
  sections: [
    {
      title: "Por qué una campaña de retargeting aparte",
      level: 2,
      paras: [
        "Una gran parte de las visitas no termina en una compra a la primera — normal en muchos nichos, no una «ley del 70–95% para todos». El retargeting recuerda un carrito abandonado o un servicio clave tras haber mostrado interés.",
        "Pon el retargeting en una campaña/grupo de condiciones aparte: si no, es difícil gestionar pujas, frecuencia y creatividades aparte del tráfico frío.",
      ],
      lists: [
        {
          intro: "Cuándo encaja el retargeting:",
          items: [
            "hay tráfico estable al sitio",
            "metas/eventos de Metrika están puestos",
            "hay una oferta para quienes vuelven",
            "puedes excluir a quien ya compró",
            "estás listo para mirar la frecuencia de impresiones",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting: lo básico",
          href: "/es/blog/retargeting/",
        },
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Tres formas de armar la audiencia",
      level: 2,
      paras: [
        "Forma 1 — condiciones por meta de Metrika: estuvo / no estuvo en una meta (lead, compra, página clave). Simple, pero tosco.",
        "Forma 2 — segmentos de Metrika: comportamiento, profundidad, fuente, dispositivo, visitas a URLs concretas. Más flexible y mejor para tests como «carrito sin pago» vs «vio categoría».",
        "Forma 3 — Yandex Audiences: tus listas (con consentimiento), apps, geo, píxel display, audiencias similares. Sigue las reglas de datos personales: emails/teléfonos solo de una base lícita.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "metas en lead/compra",
            "segmento carrito sin compra",
            "excluir conversiones",
            "una creatividad aparte por etapa",
            "testar la ventana de retargeting (días)",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Estrechar demasiado un segmento mata el reach y las stats. Mejor dos o tres segmentos que funcionen que una docena vacíos.",
        },
      ],
    },
    {
      title: "Stats: qué mirar tras el lanzamiento",
      level: 2,
      paras: [
        "Deja que la campaña reúna datos — no esperes magia en tres días. Mira clics, conversiones, CPA/coste de meta, rebote y gasto junto con placements y condiciones de display.",
        "Umbrales de CTR y rebote de guías viejas («siempre >0,5%», «rebote bajo 20%») no son universales. Usa tus periodos pasados y compara segmentos entre sí — no la «norma de internet» de otro.",
      ],
      lists: [
        {
          intro: "Set mínimo de métricas:",
          items: [
            "conversiones y CPA",
            "CTR como señal de creatividad",
            "rebote / tiempo — calidad de landing",
            "reach y frecuencia",
            "gasto sin metas — señal de parada",
          ],
        },
      ],
      links: [
        {
          label: "Metas en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Los segmentos ganan a «solo una meta»",
      level: 2,
      paras: [
        "Los segmentos describen la audiencia con más precisión: no solo «llegó a una meta», sino quiénes eran por dispositivo, fuente, profundidad. Así es más fácil subir pujas en un slice rentable y debilitar uno vacío.",
        "Corre un par de segmentos en paralelo con ofertas distintas. En reports de Direct, mira el corte por condición de display (el naming de la cuenta puede diferir) — compara conversión, CTR, gasto.",
      ],
      lists: [
        {
          intro: "Cuando un segmento es débil:",
          items: [
            "hay clics y gasto — no metas",
            "el CPA está muy por encima de la economics",
            "los rebotes son anormalmente altos vs otros slices",
            "la audiencia está quemada por frecuencia",
            "la landing no encaja con la etapa del funnel",
          ],
        },
      ],
    },
    {
      title: "Placements y ads",
      level: 2,
      paras: [
        "En la Display Network, placements y formatos afectan CTR y post-clic. Apaga placements con gasto y sin conversiones cuando el volumen de stats baste; no cortes todo tras diez impresiones.",
        "La creatividad debe encajar con la etapa: carrito abandonado — producto/términos concretos; visita de servicio — oferta y trust, no un banner genérico de «somos los mejores». Renueva combinaciones cuando sube la frecuencia y baja la conversión.",
      ],
      lists: [
        {
          intro: "Optimización de ads:",
          items: [
            "textos/banners aparte por segmento",
            "UTM y landing alineados con la oferta",
            "tope de frecuencia",
            "excluir compradores",
            "testar titulares y oferta — no solo la imagen",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting de fiestas",
          href: "/es/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "El retargeting en Direct corre sobre datos de Metrika/Audiences y disciplina: una campaña aparte, segmentos, exclusiones, control de frecuencia y placements.",
        "La optimización es un loop: stats → comparar condiciones de display → arreglar pujas/creatividades/segmentos. Sin oferta y una landing decente, una audiencia cálida no te salva.",
      ],
    },
  ],
  closing: [
    "Arma metas y dos o tres segmentos, deja el retargeting aparte, mira CPA y frecuencia — y arregla placements con creatividades desde hechos, no umbrales de CTR ajenos de 2019.",
  ],
  related: [
    "retargeting",
    "strategii-yandeks-direkt",
    "metrika-tseli",
    "prazdnichnyy-retargeting",
    "retargeting-meta",
    "optimizatsiya-konversii",
  ],
};

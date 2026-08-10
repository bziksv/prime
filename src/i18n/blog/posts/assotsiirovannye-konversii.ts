import type { BlogPost } from "../../../data/blog";

/** EN overlay for assotsiirovannye-konversii — same structure as RU JSON. */
export const assotsiirovannyeKonversiiEn: BlogPost = {
  slug: "assotsiirovannye-konversii",
  title: "Assisted conversions: why the path to purchase matters",
  date: "2019-12-25",
  category: "Digital marketing",
  cover: "/images/blog/assotsiirovannye-konversii/cover-en.webp",
  excerpt:
    "What assisted conversions are, how they differ from first and last click, how not to kill helper channels, and how to read attribution in analytics without outdated menu screenshots.",
  lead: [
    "A purchase rarely happens from one touch. Someone saw an ad, read reviews, came back via brand search, and only then ordered. If you watch only last click, helper channels look useless — and budget gets cut in the wrong place.",
    "Assisted conversions are the credit for touches that joined the path but were not the final deal source. Below: conversion types, why attribution models matter, and how not to mis-shift budget. Analytics UIs change; report meaning beats clicks on old menu items.",
  ],
  faq: [
    {
      q: "How does an assisted conversion differ from a “regular” one?",
      a: "“Regular” in reports often means the last paid or non-direct click before the goal. Assisted means the channel was earlier in the chain and helped reach the purchase, but didn’t close it alone.",
    },
    {
      q: "Is assisted conversion the same as attribution?",
      a: "Related. Assisted conversions are the fact a channel joined the path. Attribution models are rules for splitting credit across touches.",
    },
    {
      q: "Why not look at last click only?",
      a: "Brand search and direct visits often take the sale, while discovery started with content, display, or a social post. Cut the top of the funnel — and last conversions fall too.",
    },
    {
      q: "Where should you look in Yandex Metrica and Google Analytics?",
      a: "In sections on sources, goals, and conversion models/paths (names change). The point: touch chains and model comparison — not one “conversions” column.",
    },
    {
      q: "Do assisted conversions always mean you should spend more?",
      a: "No. Check quality, cost, and role in the chain. A channel can light up in paths yet bring noisy traffic.",
    },
    {
      q: "How do assisted conversions relate to SEO?",
      a: "Organic is often first touch, assisted, and last. Cutting SEO over a weak last click is a common mistake on a long sales cycle.",
    },
  ],
  sections: [
    {
      title: "Why a purchase is a chain",
      level: 2,
      paras: [
        "A cheap impulse product is sometimes bought right after one ad. An expensive or complex choice almost always needs several touches: ad → site → compare → return → order.",
        "Marketing’s job isn’t only to close with the last click, but to see which channels built awareness and trust. Otherwise budget optimization becomes a hunt for the shortest path.",
      ],
      lists: [
        {
          intro: "Three useful views of a conversion:",
          items: [
            "first interaction — where they learned",
            "last — what finished the order",
            "assisted — what was in the middle and still influenced",
          ],
        },
      ],
    },
    {
      title: "What counts as an assisted conversion",
      level: 2,
      paras: [
        "A channel gets an assisted conversion if the user touched it on the path to the goal, but the final visit before conversion came from another source. Example: display click → later organic brand → purchase. Display is assisted credit; brand is often last click.",
        "Brand paid search and direct often look super efficient because they close already-warmed people. Without upper touches that tail thins over time.",
      ],
      links: [
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Why this matters for budget",
      level: 2,
      paras: [
        "If you keep only channels with the best last-click CPA, you may turn off what prepares demand. Weeks or months later the strong closers fall too — it looks like the brand broke, when you actually cut the funnel.",
        "Assisted conversions don’t cancel unit economics: watch touch cost, margin, and lead quality. The goal isn’t to keep everything — it’s not to cut blind.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "turning off a channel with zero last click but a strong path role",
            "treating brand paid search as the only growth driver",
            "comparing channels without sales-cycle length",
            "skipping UTMs and goals — then chains break",
          ],
        },
      ],
    },
    {
      title: "Attribution models — short version",
      level: 2,
      paras: [
        "An attribution model decides who gets conversion credit: first click, last, linear across all, mid-path emphasis, and so on. Different models show different efficiency for the same channel — that’s normal.",
        "Practice: compare two or three models on one period and see which channels stay important. Don’t hunt one correct model for every niche — hunt stable conclusions for budget decisions.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "In reports, assisted conversions across channels can sum above order count: one touch plays several roles, one path has several helpers. Watch shares and dynamics — don’t blindly add into revenue.",
        },
      ],
    },
    {
      title: "How to read it in analytics",
      level: 2,
      paras: [
        "Google Analytics historically had multi-channel funnels and model comparison; in current versions the logic is the same — paths and attribution, different section names. In Yandex Metrica look at source attribution models (last transition, first transition, and others) and goal reports.",
        "Linking ad accounts to analytics matters so campaigns don’t vanish into “(not set).” Without goals (purchase, lead), talking about assisted conversions is pointless.",
      ],
      lists: [
        {
          intro: "Minimum to work:",
          items: [
            "goals/ecommerce configured",
            "UTMs consistent",
            "analysis window ≥ sales cycle",
            "compare last click vs first / another model",
            "budget decisions locked with a date and hypothesis",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Looker Studio",
          href: "/en/blog/looker-studio/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
      ],
    },
    {
      title: "What to do in practice",
      level: 2,
      paras: [
        "List top channels by last click and top by path participation. Where the gap is large — don’t cut at once: check creatives, landing pages, and quality. Sometimes a channel helps but is expensive — then narrow, don’t kill.",
        "For SEO and content an assisted role is often normal: they warm, and the deal closes via brand or retarget. Keep a channel mix, not a war of reports.",
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "Assisted conversions show credit that last click misses. Compare models, don’t cut the top of the funnel blind, and make budget calls together with sales-cycle length and margin.",
  ],
  related: [
    "istochniki-trafika",
    "brendovyy-trafik",
    "google-analytics",
    "utm-metki",
    "looker-studio",
    "optimizatsiya-konversii",
  ],
};

/** ES overlay for assotsiirovannye-konversii — same structure as RU JSON / EN. */
export const assotsiirovannyeKonversiiEs: BlogPost = {
  slug: "assotsiirovannye-konversii",
  title: "Conversiones asistidas: por qué importa el camino a la compra",
  date: "2019-12-25",
  category: "Digital marketing",
  cover: "/images/blog/assotsiirovannye-konversii/cover-es.webp",
  excerpt:
    "Qué son las conversiones asistidas, en qué se diferencian del first y last click, cómo no matar canales helpers y cómo leer atribución en analytics sin capturas de menú obsoletas.",
  lead: [
    "Una compra rara vez nace de un solo toque. Alguien vio un anuncio, leyó reseñas, volvió por búsqueda de marca y solo entonces pidió. Si miras solo last click, los canales helpers parecen inútiles — y el presupuesto se corta en el sitio equivocado.",
    "Las conversiones asistidas son el crédito por toques que entraron en el camino pero no fueron la fuente final del trato. Abajo: tipos de conversión, por qué importan los modelos de atribución y cómo no mover el presupuesto mal. Las UIs de analytics cambian; el significado del informe gana a clics en ítems de menú viejos.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una conversión asistida de una «regular»?",
      a: "«Regular» en los informes suele significar el último clic de pago o no-directo antes del goal. Asistida significa que el canal estuvo antes en la cadena y ayudó a llegar a la compra, pero no la cerró solo.",
    },
    {
      q: "¿Conversión asistida es lo mismo que atribución?",
      a: "Relacionado. Las conversiones asistidas son el hecho de que un canal entró en el camino. Los modelos de atribución son reglas para repartir crédito entre toques.",
    },
    {
      q: "¿Por qué no mirar solo last click?",
      a: "La búsqueda de marca y las visitas directas a menudo se llevan la venta, mientras el discovery empezó con contenido, display o un post social. Corta el inicio del funnel — y también caen las conversiones finales.",
    },
    {
      q: "¿Dónde mirar en Yandex Metrica y Google Analytics?",
      a: "En secciones de fuentes, goals y modelos/caminos de conversión (los nombres cambian). El punto: cadenas de toques y comparación de modelos — no una sola columna «conversiones».",
    },
    {
      q: "¿Las conversiones asistidas siempre significan que debes gastar más?",
      a: "No. Revisa calidad, coste y rol en la cadena. Un canal puede brillar en los caminos y aun así traer tráfico ruidoso.",
    },
    {
      q: "¿Cómo se relacionan las conversiones asistidas con el SEO?",
      a: "El orgánico a menudo es first touch, asistido y last. Cortar SEO por un last click flojo es un error habitual en un ciclo de venta largo.",
    },
  ],
  sections: [
    {
      title: "Por qué una compra es una cadena",
      level: 2,
      paras: [
        "Un producto impulso barato a veces se compra justo tras un anuncio. Una elección cara o compleja casi siempre necesita varios toques: anuncio → sitio → comparar → volver → pedir.",
        "El trabajo del marketing no es solo cerrar con el last click, sino ver qué canales construyeron awareness y confianza. Si no, la optimización de presupuesto se vuelve una caza del camino más corto.",
      ],
      lists: [
        {
          intro: "Tres vistas útiles de una conversión:",
          items: [
            "primera interacción — dónde se enteraron",
            "última — qué terminó el pedido",
            "asistida — qué estuvo en el medio y aun así influyó",
          ],
        },
      ],
    },
    {
      title: "Qué cuenta como conversión asistida",
      level: 2,
      paras: [
        "Un canal recibe una conversión asistida si el usuario lo tocó en el camino al goal, pero la visita final antes de la conversión vino de otra fuente. Ejemplo: clic de display → luego orgánico de marca → compra. Display es crédito asistido; la marca suele ser last click.",
        "Paid search de marca y direct a menudo se ven súper eficientes porque cierran gente ya caliente. Sin toques tempranos esa cola se adelgaza con el tiempo.",
      ],
      links: [
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Por qué importa para el presupuesto",
      level: 2,
      paras: [
        "Si te quedas solo con canales del mejor CPA last-click, puedes apagar lo que prepara demanda. Semanas o meses después también caen los closers fuertes — parece que la marca se rompió, cuando en realidad cortaste el funnel.",
        "Las conversiones asistidas no cancelan unit economics: mira coste del toque, margen y calidad del lead. El objetivo no es mantenerlo todo — es no cortar a ciegas.",
      ],
      lists: [
        {
          intro: "Errores típicos:",
          items: [
            "apagar un canal con cero last click pero un rol fuerte en el camino",
            "tratar paid search de marca como el único motor de crecimiento",
            "comparar canales sin la duración del ciclo de venta",
            "saltar UTMs y goals — entonces las cadenas se rompen",
          ],
        },
      ],
    },
    {
      title: "Modelos de atribución — versión corta",
      level: 2,
      paras: [
        "Un modelo de atribución decide quién se lleva el crédito de la conversión: first click, last, lineal entre todos, énfasis mid-path, etc. Modelos distintos muestran eficiencia distinta para el mismo canal — eso es normal.",
        "Práctica: compara dos o tres modelos en un periodo y mira qué canales siguen siendo importantes. No persigas un modelo correcto para cada nicho — persigue conclusiones estables para decisiones de presupuesto.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "En los informes, las conversiones asistidas entre canales pueden sumar por encima del conteo de pedidos: un toque juega varios roles, un camino tiene varios helpers. Mira cuotas y dinámica — no sumes a ciegas hacia revenue.",
        },
      ],
    },
    {
      title: "Cómo leerlo en analytics",
      level: 2,
      paras: [
        "Google Analytics históricamente tenía multi-channel funnels y comparación de modelos; en las versiones actuales la lógica es la misma — caminos y atribución, nombres de sección distintos. En Yandex Metrica mira modelos de atribución de fuentes (última transición, primera transición y otros) e informes de goals.",
        "Enlazar cuentas de ads a analytics importa para que las campañas no desaparezcan en «(not set)». Sin goals (compra, lead), hablar de conversiones asistidas no tiene sentido.",
      ],
      lists: [
        {
          intro: "Mínimo para trabajar:",
          items: [
            "goals/ecommerce configurados",
            "UTMs consistentes",
            "ventana de análisis ≥ ciclo de venta",
            "comparar last click vs first / otro modelo",
            "decisiones de presupuesto fijadas con fecha e hipótesis",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Looker Studio",
          href: "/es/blog/looker-studio/",
        },
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
      ],
    },
    {
      title: "Qué hacer en la práctica",
      level: 2,
      paras: [
        "Lista los principales canales por last click y los principales por participación en el camino. Donde el gap es grande — no cortes de golpe: revisa creativos, landings y calidad. A veces un canal ayuda pero es caro — entonces estrecha, no mates.",
        "Para SEO y contenido un rol asistido es a menudo normal: calientan, y el trato se cierra vía marca o retarget. Mantén un mix de canales, no una guerra de informes.",
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
  ],
  closing: [
    "Las conversiones asistidas muestran crédito que el last click se pierde. Compara modelos, no cortes el inicio del funnel a ciegas y toma llamadas de presupuesto junto con la duración del ciclo de venta y el margen.",
  ],
  related: [
    "istochniki-trafika",
    "brendovyy-trafik",
    "google-analytics",
    "utm-metki",
    "looker-studio",
    "optimizatsiya-konversii",
  ],
};

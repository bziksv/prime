import type { BlogPost } from "../../../data/blog";

/** EN overlay for optimizatsiya-konversii — same structure as RU JSON. */
export const optimizatsiyaKonversiiEn: BlogPost = {
  slug: "optimizatsiya-konversii",
  title: "Conversion rate optimization: how to measure it and what to test",
  date: "2021-09-13",
  category: "Digital marketing",
  cover: "/images/blog/optimizatsiya-konversii/cover-en.webp",
  excerpt:
    "What conversion rate is, how to calculate it, how to work the funnel, and which hypotheses to test — forms, CTAs, speed, trust — without myths about “average internet conversion.”",
  lead: [
    "Conversion is the share of visitors who complete a target action: a lead, a purchase, a call, a signup. It’s measured in percent and improved with focused edits — not “more ad budget.”",
    "Below: the formula, the funnel, UX and content hypotheses, and A/B tests. “Average niche conversion” figures from old roundups are rough cues — not your KPI.",
  ],
  faq: [
    {
      q: "How do you calculate conversion?",
      a: "Target actions ÷ visits (or sessions) × 100%. Fix what counts as the goal and measure in one tool (analytics / GA4 / CRM).",
    },
    {
      q: "What conversion rate is “normal”?",
      a: "It depends on niche, traffic, and deal complexity. Compare yourself to yourself: week to week, channel to channel — not to someone else’s “9% on social.”",
    },
    {
      q: "Should you fix traffic first or conversion?",
      a: "With expensive traffic and a leaky funnel, fix conversion first. With tiny traffic A/B is pointless — grow volume and remove obvious barriers in parallel.",
    },
    {
      q: "Is an A/B test always needed?",
      a: "For small edits with low traffic, before/after and common sense often suffice. Run A/B when you have volume and one clear hypothesis.",
    },
    {
      q: "Do forms with many fields cut conversion?",
      a: "Yes — extra required fields. Capture the minimum for first contact; details after a manager replies.",
    },
  ],
  sections: [
    {
      title: "What conversion is",
      level: 2,
      paras: [
        "Conversion rate (CR) is target actions divided by visits over a period. You define the goal: order, lead, demo, subscribe.",
        "Also watch micro-conversions: phone tap, finishing a key block, add to cart — they show where the path breaks.",
      ],
      lists: [
        {
          intro: "Example:",
          items: [
            "3,000 landing visits",
            "150 signups",
            "CR = 150 ÷ 3,000 × 100% = 5%",
          ],
        },
      ],
    },
    {
      title: "Strategy before button tests",
      level: 2,
      paras: [
        "Without knowing the audience and offer, a CTA color change rarely saves you. First: who arrives, what the ad or search promise is, whether the landing matches.",
        "In analytics (GA4, Yandex Metrica, and similar) watch sources, devices, exit pages, goals. Sticky content should lead to a commercial step without bait-and-switch.",
      ],
      lists: [
        {
          intro: "If pages don’t hold:",
          items: [
            "refresh meaning and proof",
            "fix broken links and forms",
            "clarify the CTA",
            "cut visual noise",
          ],
        },
      ],
      links: [
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Funnel and product",
      level: 2,
      paras: [
        "Classic path: awareness → interest → comparison → action. On a site that’s the road from the first screen to a lead or payment. A weak link kills everything below.",
        "A 5% discount hasn’t been a universal lever for a long time. Stronger: clear value, a demo or estimate, guarantees, social proof, a fast reply.",
      ],
      lists: [
        {
          intro: "Align product and audience:",
          items: [
            "offer = audience pain",
            "price and timeline clear before the form",
            "a next step without “fill 12 fields”",
          ],
        },
      ],
    },
    {
      title: "Hypotheses: forms, CTAs, speed, trust",
      level: 2,
      paras: [
        "Heatmaps and session recordings show where people click and drop. Next — a hypothesis and a measurement.",
      ],
      tables: [
        {
          caption: "Typical CR levers",
          headers: ["Zone", "What to try", "Risk"],
          rows: [
            ["Form", "Fewer fields, clear reply window", "Weaker lead qualification"],
            ["CTA", "Benefit copy, contrast, repeat by the offer", "Noise if too many buttons"],
            ["Speed", "Compression, cache, mobile layout", "Needs a developer"],
            ["Trust", "Reviews, cases, guarantee, contacts", "Fake reviews worse than none"],
            ["Content", "Lists, facts, fewer junk banners", "Cutting value just to be “shorter”"],
          ],
        },
      ],
      lists: [
        {
          intro: "Form practice:",
          items: [
            "name + contact + gist",
            "hints and validation errors",
            "thank-you with a real SLA",
          ],
        },
      ],
      links: [
        {
          label: "Feedback form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Load delays of a few seconds hit CR hard. Mobile isn’t a shrunk desktop — it’s a separate finger path to the button.",
        },
      ],
    },
    {
      title: "A/B tests — and when to skip them",
      level: 2,
      paras: [
        "Split: two variants of one change, split traffic, measure the goal. Change one thing at a time. A week “by eye” with no volume isn’t a test.",
        "With low traffic, first remove obvious barriers (broken form, five-second LCP, no phone). Then scale experiments.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Conversion optimization is a loop: goal → data → hypothesis → edit → measure. Count CR honestly, fix the funnel and trust, don’t copy someone else’s percentages. Ads without a converting landing only make the click more expensive.",
      ],
    },
  ],
};

/** ES overlay for optimizatsiya-konversii — same structure as RU JSON / EN. */
export const optimizatsiyaKonversiiEs: BlogPost = {
  slug: "optimizatsiya-konversii",
  title: "Optimización de la tasa de conversión: cómo medirla y qué probar",
  date: "2021-09-13",
  category: "Digital marketing",
  cover: "/images/blog/optimizatsiya-konversii/cover-es.webp",
  excerpt:
    "Qué es la tasa de conversión, cómo calcularla, cómo trabajar el funnel y qué hipótesis probar — formularios, CTAs, velocidad, confianza — sin mitos sobre la «conversión media de internet».",
  lead: [
    "La conversión es la cuota de visitantes que completan una acción objetivo: lead, compra, llamada, alta. Se mide en porcentaje y se mejora con edits enfocados — no con «más presupuesto de ads».",
    "Abajo: la fórmula, el funnel, hipótesis de UX y contenido, y tests A/B. Las cifras de «conversión media del nicho» de roundups viejos son pistas brutas — no tu KPI.",
  ],
  faq: [
    {
      q: "¿Cómo se calcula la conversión?",
      a: "Acciones objetivo ÷ visitas (o sesiones) × 100%. Fija qué cuenta como goal y mide en una sola herramienta (analytics / GA4 / CRM).",
    },
    {
      q: "¿Qué tasa de conversión es «normal»?",
      a: "Depende del nicho, el tráfico y la complejidad del trato. Compárate contigo: semana a semana, canal a canal — no con el «9% en social» de otro.",
    },
    {
      q: "¿Arreglo primero el tráfico o la conversión?",
      a: "Con tráfico caro y un funnel con fugas, arregla primero la conversión. Con tráfico mínimo el A/B no tiene sentido — crece volumen y quita barreras obvias en paralelo.",
    },
    {
      q: "¿Siempre hace falta un test A/B?",
      a: "Para edits pequeños con poco tráfico, a menudo bastan before/after y sentido común. Lanza A/B cuando tengas volumen y una hipótesis clara.",
    },
    {
      q: "¿Los formularios con muchos campos cortan la conversión?",
      a: "Sí — campos obligatorios de más. Captura el mínimo para el primer contacto; los detalles tras la respuesta del manager.",
    },
  ],
  sections: [
    {
      title: "Qué es la conversión",
      level: 2,
      paras: [
        "La tasa de conversión (CR) son las acciones objetivo divididas por las visitas en un periodo. Tú defines el goal: pedido, lead, demo, suscripción.",
        "Mira también microconversiones: toque de teléfono, terminar un bloque clave, añadir al carrito — muestran dónde se rompe el camino.",
      ],
      lists: [
        {
          intro: "Ejemplo:",
          items: [
            "3.000 visitas al landing",
            "150 altas",
            "CR = 150 ÷ 3.000 × 100% = 5%",
          ],
        },
      ],
    },
    {
      title: "Estrategia antes de tests de botones",
      level: 2,
      paras: [
        "Sin conocer la audiencia y la oferta, un cambio de color del CTA rara vez te salva. Primero: quién llega, qué promete el anuncio o la búsqueda, si el landing encaja.",
        "En analytics (GA4, Yandex Metrika y similares) mira fuentes, dispositivos, páginas de salida, goals. El contenido pegajoso debe llevar a un paso comercial sin bait-and-switch.",
      ],
      lists: [
        {
          intro: "Si las páginas no aguantan:",
          items: [
            "refrescar sentido y prueba",
            "arreglar enlaces y formularios rotos",
            "aclarar el CTA",
            "cortar ruido visual",
          ],
        },
      ],
      links: [
        {
          label: "Textos de venta",
          href: "/es/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "Funnel y producto",
      level: 2,
      paras: [
        "Camino clásico: awareness → interés → comparación → acción. En un sitio es la ruta del primer pantallazo al lead o al pago. Un eslabón flojo mata todo lo de abajo.",
        "Un descuento del 5% hace tiempo que no es una palanca universal. Más fuerte: valor claro, demo o presupuesto, garantías, prueba social, respuesta rápida.",
      ],
      lists: [
        {
          intro: "Alinea producto y audiencia:",
          items: [
            "oferta = dolor de la audiencia",
            "precio y plazo claros antes del formulario",
            "un siguiente paso sin «rellena 12 campos»",
          ],
        },
      ],
    },
    {
      title: "Hipótesis: formularios, CTAs, velocidad, confianza",
      level: 2,
      paras: [
        "Los heatmaps y las grabaciones de sesión muestran dónde se hace clic y dónde se cae. Luego — una hipótesis y una medición.",
      ],
      tables: [
        {
          caption: "Palancas típicas de CR",
          headers: ["Zona", "Qué probar", "Riesgo"],
          rows: [
            ["Formulario", "Menos campos, ventana de respuesta clara", "Cualificación de leads más floja"],
            ["CTA", "Copy de beneficio, contraste, repetir junto a la oferta", "Ruido si hay demasiados botones"],
            ["Velocidad", "Compresión, caché, layout móvil", "Hace falta un developer"],
            ["Confianza", "Reseñas, casos, garantía, contactos", "Reseñas falsas peor que ninguna"],
            ["Contenido", "Listas, hechos, menos banners basura", "Cortar valor solo por «ser más corto»"],
          ],
        },
      ],
      lists: [
        {
          intro: "Práctica del formulario:",
          items: [
            "nombre + contacto + esencia",
            "pistas y errores de validación",
            "gracias con un SLA real",
          ],
        },
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Tip práctico",
          kind: "tip",
          text: "Retrasos de carga de unos segundos pegan fuerte al CR. Móvil no es un desktop encogido — es un camino aparte del dedo hasta el botón.",
        },
      ],
    },
    {
      title: "Tests A/B — y cuándo saltártelos",
      level: 2,
      paras: [
        "Split: dos variantes de un cambio, tráfico partido, mide el goal. Cambia una cosa a la vez. Una semana «a ojo» sin volumen no es un test.",
        "Con poco tráfico, primero quita barreras obvias (formulario roto, LCP de cinco segundos, sin teléfono). Luego escala experimentos.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "La optimización de conversión es un bucle: goal → datos → hipótesis → edit → medir. Cuenta el CR con honestidad, arregla funnel y confianza, no copies porcentajes ajenos. Ads sin un landing que convierte solo encarecen el clic.",
      ],
    },
  ],
};

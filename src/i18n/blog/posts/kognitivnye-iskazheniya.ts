import type { BlogPost } from "../../../data/blog";

/** EN overlay for kognitivnye-iskazheniya — same structure as RU JSON. */
export const kognitivnyeIskazheniyaEn: BlogPost = {
  slug: "kognitivnye-iskazheniya",
  title: "6 cognitive biases that shape buyer choice",
  date: "2019-01-30",
  category: "Digital marketing",
  cover: "/images/blog/kognitivnye-iskazheniya/cover-en.webp",
  excerpt:
    "Mere exposure, loss aversion, compromise, framing, the IKEA effect, and trust signals — how to use choice psychology in offers and UX without dark patterns.",
  lead: [
    "Buyers rarely choose in a perfectly rational way. Brand familiarity, fear of missing out, the set of prices on the shelf, and how the promise is worded all shape the decision.",
    "Below: six well-known effects and how to apply them ethically — explain value more clearly, honestly remove risk, help people compare packages. Don’t treat CTR or reach figures from old reviews as a norm; run your own tests. Fake urgency and hidden terms still wreck trust and reputation.",
  ],
  faq: [
    {
      q: "Is this about tricking the customer?",
      a: "No. The goal is to understand how people perceive the offer and cut noise. Pressure timers with no real promo are a dark pattern.",
    },
    {
      q: "What is the mere-exposure effect?",
      a: "Familiar products and brands get more trust. Repeat touches (content, retargeting) work if they don’t spam.",
    },
    {
      q: "Why is fear of loss stronger than a gain?",
      a: "Kahneman and Tversky’s research: losses feel sharper. An honest trial and a real promo deadline help; a fake countdown doesn’t.",
    },
    {
      q: "Why offer three plans instead of two?",
      a: "Compromise effect: the middle option often feels “sensible.” Don’t inflate the extremes to absurdity — people notice.",
    },
    {
      q: "What is framing?",
      a: "The same substance in different wording is perceived differently. Tell the truth, choosing a gain or risk angle — don’t distort facts.",
    },
    {
      q: "How does the IKEA effect show up online?",
      a: "People value more what they invested in: configurator, quiz, option picks. Involve them in setup — not a pointless quest.",
    },
  ],
  sections: [
    {
      title: "Familiarity and loss aversion",
      level: 2,
      paras: [
        "Mere exposure: what’s already been seen gets a softer attitude. In marketing that’s retargeting, one product in different formats (article → video → deck), and presence where the audience lives. Frequency without value turns into irritation.",
        "Loss aversion: people react more to “miss out” than to a symmetric “get.” Tactics that work — a trial period, a real limited promo, a clear bonus before the deadline. A countdown timer only fits if the promo truly ends.",
      ],
      lists: [
        {
          intro: "Ethical minimum:",
          items: [
            "retargeting with a frequency cap",
            "trial without a hidden subscription",
            "deadlines only when real",
            "promo terms readable before payment",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Promotions and offers",
          href: "/en/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Compromise, framing, and involvement",
      level: 2,
      paras: [
        "Compromise effect: with three options people often pick the middle. Classic — “basic / recommended / premium.” Price the extremes honestly for cost and value — not as decoration.",
        "Framing: wording changes choice with the same math (“save 200” vs “lose 400”). In ads: stress purchase benefit or the cost of inaction — without distorting facts or scaring people for clicks.",
        "IKEA effect: taking part in build or setup raises perceived value. Configurators, package picks, customizing a letter or report — fitting formats.",
      ],
      notes: [
        {
          title: "On “late payment penalties”",
          text: "A “discount for early payment” frame usually lands better than a “late fee,” at the same economics. Don’t dress a markup as a “penalty” if it’s just another price.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Consumer insight",
          href: "/en/blog/potrebitelskiy-insayt/",
        },
      ],
    },
    {
      title: "Trust and a “safe” purchase",
      level: 2,
      paras: [
        "A separate block — signals that make someone ready to risk money: a tidy site, speed, clear contacts, return terms, payment and security marks. Without those even a strong offer stalls.",
        "Choice psychology doesn’t cancel unit economics and product quality. Use effects to cut noise and explain value — not to push a doubter with deceit.",
      ],
      lists: [
        {
          intro: "Trust points on the site:",
          items: [
            "contacts and legal info",
            "relevant reviews and case studies",
            "return and warranty terms",
            "HTTPS and familiar payment methods",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Cognitive biases are a map of how people decide — not a license to pressure. Strengthen familiarity, honestly remove fear of loss, help compare packages, and show trust — the product does the rest.",
  ],
  related: [
    "potrebitelskiy-insayt",
    "utp",
    "promoaktsii",
    "retargeting",
    "broshennaya-korzina",
    "trafik-bez-lidov",
  ],
};

/** ES overlay for kognitivnye-iskazheniya — same structure as RU JSON / EN. */
export const kognitivnyeIskazheniyaEs: BlogPost = {
  slug: "kognitivnye-iskazheniya",
  title: "6 sesgos cognitivos que moldean la elección del comprador",
  date: "2019-01-30",
  category: "Digital marketing",
  cover: "/images/blog/kognitivnye-iskazheniya/cover-es.webp",
  excerpt:
    "Mere exposure, aversión a la pérdida, compromiso, framing, efecto IKEA y señales de trust — cómo usar la psicología de la elección en ofertas y UX sin dark patterns.",
  lead: [
    "Los compradores rara vez eligen de forma perfectamente racional. La familiaridad de marca, el miedo a perderse algo, el set de precios en el estante y cómo se formula la promesa moldean la decisión.",
    "Abajo: seis efectos conocidos y cómo aplicarlos con ética — explicar el valor con más claridad, quitar riesgo con honestidad, ayudar a comparar paquetes. No trates CTR o cifras de reach de reseñas viejas como norma; corre tus propios tests. La urgencia falsa y los términos ocultos siguen destrozando trust y reputación.",
  ],
  faq: [
    {
      q: "¿Esto va de engañar al cliente?",
      a: "No. La meta es entender cómo la gente percibe la oferta y cortar ruido. Timers de presión sin promo real son un dark pattern.",
    },
    {
      q: "¿Qué es el efecto mere-exposure?",
      a: "Los productos y marcas familiares reciben más trust. Los touches repetidos (contenido, retargeting) funcionan si no hacen spam.",
    },
    {
      q: "¿Por qué el miedo a la pérdida es más fuerte que una ganancia?",
      a: "Investigación de Kahneman y Tversky: las pérdidas se sienten más afiladas. Un trial honesto y un plazo real de promo ayudan; un countdown falso no.",
    },
    {
      q: "¿Por qué ofrecer tres planes en vez de dos?",
      a: "Efecto compromiso: la opción del medio a menudo se siente «sensata». No infles los extremos hasta el absurdo — la gente lo nota.",
    },
    {
      q: "¿Qué es framing?",
      a: "La misma sustancia con distintas palabras se percibe de forma distinta. Di la verdad, eligiendo un ángulo de ganancia o de riesgo — sin distorsionar los hechos.",
    },
    {
      q: "¿Cómo aparece el efecto IKEA online?",
      a: "La gente valora más lo en lo que invirtió: configurador, quiz, picks de opciones. Involúcralos en el setup — no un quest sin sentido.",
    },
  ],
  sections: [
    {
      title: "Familiaridad y aversión a la pérdida",
      level: 2,
      paras: [
        "Mere exposure: lo que ya se ha visto recibe una actitud más suave. En marketing eso es retargeting, un producto en formatos distintos (artículo → vídeo → deck) y presencia donde vive la audiencia. Frequency sin valor se vuelve irritación.",
        "Aversión a la pérdida: la gente reacciona más a «perderse» que a un «obtener» simétrico. Tácticas que funcionan — un periodo de trial, una promo limitada real, un bonus claro antes del deadline. Un countdown solo encaja si la promo termina de verdad.",
      ],
      lists: [
        {
          intro: "Mínimo ético:",
          items: [
            "retargeting con frequency cap",
            "trial sin suscripción oculta",
            "deadlines solo cuando son reales",
            "términos de promo legibles antes del pago",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
        {
          label: "Promociones y ofertas",
          href: "/es/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Compromiso, framing e involucración",
      level: 2,
      paras: [
        "Efecto compromiso: con tres opciones la gente suele elegir la del medio. Clásico — «básico / recomendado / premium». Precifica los extremos con honestidad por coste y valor — no como decoración.",
        "Framing: la redacción cambia la elección con la misma matemática («ahorra 200» vs «pierde 400»). En ads: acentúa el beneficio de comprar o el coste de no actuar — sin distorsionar hechos ni asustar por clics.",
        "Efecto IKEA: participar en el build o setup sube el valor percibido. Configuradores, picks de paquete, personalizar una carta o informe — formatos que encajan.",
      ],
      notes: [
        {
          title: "Sobre «penalizaciones por pago tarde»",
          text: "Un frame de «descuento por pago anticipado» suele aterrizar mejor que una «cuota por retraso», a la misma economía. No presentes un markup como «penalización» si es solo otro precio.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "USP (propuesta única de venta)",
          href: "/es/blog/utp/",
        },
        {
          label: "Consumer insight",
          href: "/es/blog/potrebitelskiy-insayt/",
        },
      ],
    },
    {
      title: "Trust y una compra «segura»",
      level: 2,
      paras: [
        "Un bloque aparte — señales que hacen a alguien listo para arriesgar dinero: un sitio ordenado, velocidad, contactos claros, condiciones de devolución, marcas de pago y seguridad. Sin eso incluso una oferta fuerte se atasca.",
        "La psicología de la elección no cancela la unit economics ni la calidad del producto. Usa los efectos para cortar ruido y explicar valor — no para empujar a un dudoso con engaño.",
      ],
      lists: [
        {
          intro: "Puntos de trust en el sitio:",
          items: [
            "contactos e info legal",
            "reseñas y casos relevantes",
            "condiciones de devolución y garantía",
            "HTTPS y métodos de pago familiares",
          ],
        },
      ],
      links: [
        {
          label: "Carrito abandonado",
          href: "/es/blog/broshennaya-korzina/",
        },
        {
          label: "Tráfico sin leads",
          href: "/es/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Los sesgos cognitivos son un mapa de cómo decide la gente — no una licencia para presionar. Refuerza la familiaridad, quita con honestidad el miedo a la pérdida, ayuda a comparar paquetes y muestra trust — el producto hace el resto.",
  ],
  related: [
    "potrebitelskiy-insayt",
    "utp",
    "promoaktsii",
    "retargeting",
    "broshennaya-korzina",
    "trafik-bez-lidov",
  ],
};

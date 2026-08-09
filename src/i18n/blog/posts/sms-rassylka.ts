import type { BlogPost } from "../../../data/blog";

/** EN overlay for sms-rassylka — same structure as RU JSON. */
export const smsRassylkaEn: BlogPost = {
  slug: "sms-rassylka",
  title: "SMS campaigns: where to start and how not to become spam",
  date: "2019-11-15",
  category: "Digital marketing",
  cover: "/images/blog/sms-rassylka/cover-en.webp",
  excerpt:
    "How to launch SMS: channel jobs, your own list and consent, picking an operator/aggregator, short copy, frequency, opt-out, and measurement — without cold spam to bought numbers.",
  lead: [
    "SMS arrives fast: one phone, and messages are often read almost immediately. That’s why the channel is strong for reminders, order statuses, and short offers — and just as easily turns into annoying spam.",
    "Below: why SMS sits next to email, which jobs it covers, how to choose a send platform, and the launch stages. Cold lists without consent aren’t a strategy — that’s a path to blocks, complaints, and reputation damage.",
  ],
  faq: [
    {
      q: "Is SMS better than email?",
      a: "Not always. SMS gets opened faster; email holds more meaning and is cheaper at volume. They often work as a pair: SMS for urgent, email for nurture and longer value.",
    },
    {
      q: "Can I message everyone from an “operator list”?",
      a: "Ads without consent are a legal and reputation risk. Safer: your own customer list with clear consent and an easy opt-out.",
    },
    {
      q: "Should I use an operator or an aggregator?",
      a: "An operator is one carrier path; an aggregator is several carriers from one dashboard. Check the contract, sender name, reports, and how numbers are stored.",
    },
    {
      q: "How do I measure effect?",
      a: "Promo codes, a dedicated number / call tracking, short links with UTM, unsubscribe and complaint share — not only “delivered”.",
    },
    {
      q: "How often should I send SMS?",
      a: "Rarely and on purpose. Frequent promo SMS annoy more than email. Respect time zones and night hours.",
    },
    {
      q: "Do I need an opt-out link?",
      a: "Yes. Give a simple way to unsubscribe and honor it immediately — that’s both law and common sense.",
    },
  ],
  sections: [
    {
      title: "Why SMS is still used",
      level: 2,
      paras: [
        "The message is short, the channel is personal, and competition for attention in SMS is often lower than in a crowded inbox. Many people read almost right after delivery — useful for time-sensitive touches.",
        "The downside: little space and a high cost of tone mistakes — one pushy message hurts brand feeling more than a dozen emails.",
      ],
      lists: [
        {
          intro: "Strengths:",
          items: [
            "high chance of being read",
            "fast reaction",
            "company name instead of a “stranger” number (when set up)",
            "strong for service triggers",
          ],
        },
      ],
    },
    {
      title: "Which jobs it covers",
      level: 2,
      paras: [
        "Not only “BUY NOW IN CAPS”. Working scenarios: remind about yourself (promo, new address), service notices (appointment, status, subscription ending), a greeting with a personal benefit, feedback request marked as free to reply.",
        "Ads to a cold audience with no brand relationship work worse and more often feel like spam. Value and reason first, then the offer.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "abandoned booking / order",
            "visit reminder",
            "personal discount tied to a date",
            "service warning",
            "short feedback after a service",
          ],
        },
      ],
      links: [
        {
          label: "Client greeting",
          href: "/en/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Who to send through",
      level: 2,
      paras: [
        "Carriers and SMS aggregators provide dashboards: alpha-name, segments, scheduled send, delivery reports, sometimes CRM integration and forwarding replies to email.",
        "An aggregator helps when you need multi-carrier reach. Downsides can be price and contract: who stores the list, how data is handled, security. Don’t hand numbers “sideways” without clear terms.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Bought lists and “blast the whole country” without consent are not a starting strategy. Build the list from your own customers and forms with a consent checkbox.",
        },
      ],
    },
    {
      title: "Launch stages",
      level: 2,
      paras: [
        "First goal and segment: who and why. Then a list only with a lawful basis. Copy — short, no images and no “all caps”, with a spelling check: in 70–160 characters a typo hits harder.",
        "Build measurement before send: promo code, UTM in a short link, a dedicated number. After — watch delivery, clicks/calls, unsubscribes and complaints. Set frequency and time of day so you don’t wake clients on weekends.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "goal and KPI",
            "segment and consent",
            "copy + sender name",
            "test on your own numbers",
            "send and review metrics",
            "opt-out button/command",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Practical recommendations",
      level: 2,
      paras: [
        "One offer — one message. Give a clear next step and a way to opt out. Don’t mix an order-status tone with aggressive promo in one voice — people confuse trust channels.",
        "If email and messengers run in parallel, align touch frequency: SMS is a rare “nail”, not daily noise.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
        {
          label: "Deeplink",
          href: "/en/blog/diplinking/",
        },
      ],
    },
  ],
  closing: [
    "SMS works when you write with consent, briefly, and on purpose. Start with your own list, a send service with a clear contract, and measurement — without racing for reach on other people’s numbers.",
  ],
  related: [
    "pozdravlenie-klienta",
    "tochki-kontakta",
    "utm-metki",
    "istochniki-trafika",
    "diplinking",
    "sem-kasaniy",
  ],
};

/** ES overlay for sms-rassylka — same structure as RU JSON / EN. */
export const smsRassylkaEs: BlogPost = {
  slug: "sms-rassylka",
  title: "Campañas SMS: por dónde empezar y cómo no volverte spam",
  date: "2019-11-15",
  category: "Digital marketing",
  cover: "/images/blog/sms-rassylka/cover.webp",
  excerpt:
    "Cómo lanzar SMS: trabajos del canal, tu propia lista y consentimiento, elegir operador/agregador, copy corto, frecuencia, opt-out y medición — sin spam frío a números comprados.",
  lead: [
    "El SMS llega rápido: un teléfono, y los mensajes a menudo se leen casi de inmediato. Por eso el canal es fuerte para recordatorios, estados de pedido y ofertas cortas — y con la misma facilidad se vuelve spam molesto.",
    "Abajo: por qué el SMS va junto al email, qué trabajos cubre, cómo elegir una plataforma de envío y las etapas de lanzamiento. Listas frías sin consentimiento no son una estrategia — son un camino a bloqueos, quejas y daño de reputación.",
  ],
  faq: [
    {
      q: "¿El SMS es mejor que el email?",
      a: "No siempre. El SMS se abre más rápido; el email aguanta más significado y es más barato a volumen. A menudo trabajan en par: SMS para lo urgente, email para nurture y valor más largo.",
    },
    {
      q: "¿Puedo escribir a todos desde una «lista del operador»?",
      a: "Ads sin consentimiento son un riesgo legal y de reputación. Más seguro: tu propia lista de clientes con consentimiento claro y un opt-out fácil.",
    },
    {
      q: "¿Usar un operador o un agregador?",
      a: "Un operador es un camino de un carrier; un agregador son varios carriers desde un dashboard. Revisa el contrato, el nombre del remitente, reportes y cómo se guardan los números.",
    },
    {
      q: "¿Cómo mido el efecto?",
      a: "Códigos promo, un número dedicado / call tracking, enlaces cortos con UTM, cuota de baja y quejas — no solo «entregado».",
    },
    {
      q: "¿Con qué frecuencia enviar SMS?",
      a: "Rara vez y a propósito. Los SMS promo frecuentes molestan más que el email. Respeta zonas horarias y horas nocturnas.",
    },
    {
      q: "¿Hace falta un enlace de opt-out?",
      a: "Sí. Da una forma simple de darse de baja y hónrala de inmediato — eso es ley y sentido común.",
    },
  ],
  sections: [
    {
      title: "Por qué aún se usa el SMS",
      level: 2,
      paras: [
        "El mensaje es corto, el canal es personal y la competencia por atención en SMS suele ser menor que en un inbox saturado. Mucha gente lee casi justo tras la entrega — útil para toques sensibles al tiempo.",
        "La contraparte: poco espacio y un alto coste de errores de tono — un mensaje pushy daña el feeling de marca más que una docena de emails.",
      ],
      lists: [
        {
          intro: "Fuerzas:",
          items: [
            "alta chance de ser leído",
            "reacción rápida",
            "nombre de empresa en lugar de un número «desconocido» (cuando está montado)",
            "fuerte para triggers de servicio",
          ],
        },
      ],
    },
    {
      title: "Qué trabajos cubre",
      level: 2,
      paras: [
        "No solo «COMPRA YA EN MAYÚSCULAS». Escenarios que funcionan: recordar de ti (promo, nueva dirección), avisos de servicio (cita, estado, fin de suscripción), una felicitación con beneficio personal, petición de feedback marcada como libre de responder.",
        "Ads a una audiencia fría sin relación de marca funcionan peor y más a menudo se sienten spam. Primero valor y motivo, luego la oferta.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "reserva / pedido abandonado",
            "recordatorio de visita",
            "descuento personal ligado a una fecha",
            "aviso de servicio",
            "feedback corto tras un servicio",
          ],
        },
      ],
      links: [
        {
          label: "Felicitación al cliente",
          href: "/es/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Por quién enviar",
      level: 2,
      paras: [
        "Carriers y agregadores SMS ofrecen dashboards: alpha-name, segmentos, envío programado, reportes de entrega, a veces integración CRM y reenvío de respuestas a email.",
        "Un agregador ayuda cuando necesitas reach multi-carrier. Las contrapartes pueden ser precio y contrato: quién guarda la lista, cómo se tratan los datos, seguridad. No entregues números «por el lado» sin términos claros.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Listas compradas y «bombardear todo el país» sin consentimiento no son una estrategia de arranque. Arma la lista desde tus propios clientes y formularios con checkbox de consentimiento.",
        },
      ],
    },
    {
      title: "Etapas de lanzamiento",
      level: 2,
      paras: [
        "Primero objetivo y segmento: quién y por qué. Luego una lista solo con base legal. Copy — corto, sin imágenes y sin «todo en mayúsculas», con check de ortografía: en 70–160 caracteres un typo golpea más fuerte.",
        "Arma la medición antes del envío: código promo, UTM en un enlace corto, un número dedicado. Después — mira entrega, clics/llamadas, bajas y quejas. Fija frecuencia y hora del día para no despertar clientes en fines de semana.",
      ],
      lists: [
        {
          intro: "Orden:",
          items: [
            "objetivo y KPI",
            "segmento y consentimiento",
            "copy + nombre del remitente",
            "test en tus propios números",
            "envío y revisión de métricas",
            "botón/comando de opt-out",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Recomendaciones prácticas",
      level: 2,
      paras: [
        "Una oferta — un mensaje. Da un siguiente paso claro y una forma de opt-out. No mezcles un tono de estado de pedido con promo agresiva en una sola voz — la gente confunde canales de confianza.",
        "Si email y mensajeros corren en paralelo, alinea la frecuencia de toques: el SMS es un «clavo» raro, no ruido diario.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/es/blog/tochki-kontakta/",
        },
        {
          label: "Deeplink",
          href: "/es/blog/diplinking/",
        },
      ],
    },
  ],
  closing: [
    "El SMS funciona cuando escribes con consentimiento, en breve y a propósito. Empieza con tu propia lista, un servicio de envío con contrato claro y medición — sin correr por reach en números ajenos.",
  ],
  related: [
    "pozdravlenie-klienta",
    "tochki-kontakta",
    "utm-metki",
    "istochniki-trafika",
    "diplinking",
    "sem-kasaniy",
  ],
};

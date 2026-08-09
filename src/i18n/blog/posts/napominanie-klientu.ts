import type { BlogPost } from "../../../data/blog";

/** EN overlay for napominanie-klientu — same structure as RU JSON. */
export const napominanieKlientuEn: BlogPost = {
  slug: "napominanie-klientu",
  title: "Gently remind clients you’re here: channels and occasions",
  date: "2020-11-12",
  category: "Digital marketing",
  cover: "/images/blog/napominanie-klientu/cover-en.webp",
  excerpt:
    "How to softly win attention back: useful push, email and triggers, abandoned cart, holidays, and review requests — with consent and without “you haven’t visited in a while” spam.",
  lead: [
    "Selling once is half the job. The emotion of a purchase fades fast: you need a fitting reason to remind people you’re here — not a stream of “come visit us.”",
    "Below: channels and informational occasions. Trigger, cart, and greeting details live in related guides; here — how not to tip into nagging. Marketing messages only with consent and a clear unsubscribe.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from trigger emails?",
      a: "Triggers are event mechanics. Here — the broader logic of a “gentle occasion” across channels, including push and the offline meaning of holidays.",
    },
    {
      q: "Push without an app?",
      a: "Classic app-push comes from an app. On the site, web-push is possible with browser permission; same rules: useful, rare, not a hard “buy now” in every ping.",
    },
    {
      q: "When should you write about an abandoned cart?",
      a: "Usually hours to a few days, in a series of 1–3 emails — not “in a month and a half.” Follow your funnel and consent to communicate.",
    },
    {
      q: "Can you take birthdays from social profiles without consent?",
      a: "You shouldn’t. A birthday is personal data: only what the client left at signup or in a form and allowed you to use.",
    },
    {
      q: "Is “you haven’t visited in a while” fine?",
      a: "It often annoys. Better: usefulness, a meaningful bonus, a service update, or a question about their experience.",
    },
    {
      q: "Do you also need retargeting?",
      a: "Yes as a complement to email, not instead of service. See retargeting materials.",
    },
    {
      q: "WhatsApp* and SMS?",
      a: "Only with consent and in a channel where the client already expects service messages. Otherwise — complaint and block risk.",
    },
    {
      q: "What matters more than the creative?",
      a: "Fit and frequency. One useful ping beats ten “cute” spam messages.",
    },
  ],
  sections: [
    {
      title: "Principle: an occasion, not pressure",
      level: 2,
      paras: [
        "A reminder should restore a good experience or give value (order status, usage tip, seasonal fact, loyalty bonus). Hard sell in every touch burns the list.",
        "Service and product beat templates. A bad experience won’t be fixed by an email.",
      ],
    },
    {
      title: "Push: short and useful",
      level: 2,
      paras: [
        "If you have an app (or web-push), the client allowed pings — that’s responsibility. The job is to improve their day: motivation, event reminder, useful niche news — not “you haven’t visited.”",
        "Keep 1–2 sentences, a calm tone when you use sound, no shouting. Frequency stays low or they’ll revoke permission.",
      ],
      lists: [
        {
          intro: "A good push:",
          items: [
            "usefulness or care, not a hard offer",
            "specifics without a wall of text",
            "tied to what the person already did in the product",
          ],
        },
      ],
    },
    {
      title: "Email: win-back, cart, surprise",
      level: 2,
      paras: [
        "After a purchase or a long pause, a win-back email with care and a bonus (shipping, promo) works — not the whole catalog.",
        "Abandoned cart: remind that items are waiting; if the price changed — say so. Launch the series relatively fast (hours to days); test tone and offer. More in the abandonment piece.",
        "Loyal clients can get exclusive bonuses — a “special status” feel without pressure.",
      ],
      links: [
        {
          label: "Trigger emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Abandoned cart emails",
          href: "/en/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Informational occasions",
      level: 2,
      paras: [
        "Holidays and birthdays are soft occasions if the date was obtained legally and the tone is warm. See the greetings guide.",
        "Service news, shipping improvements, brand events — if the segment truly cares.",
        "Asking for a review and answering the feedback strengthens the relationship better than “rate us 5 stars” with no reply.",
      ],
      links: [
        {
          label: "Greeting a client",
          href: "/en/blog/pozdravlenie-klienta/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Consent and usefulness first, offer second.",
        "Handle cart and pause with fresh-timed triggers — not “in a month and a half.”",
        "Don’t harvest birthdays from other people’s profiles against the rules.",
      ],
    },
  ],
  closing: [
    "Pick one channel and one occasion per week for the dormant segment — measure replies and complaints before scaling frequency.",
  ],
  related: [
    "triggernye-rassylki",
    "broshennaya-korzina",
    "pozdravlenie-klienta",
    "retargeting",
    "sms-rassylka",
    "crm",
  ],
};

/** ES overlay for napominanie-klientu — same structure as RU JSON / EN. */
export const napominanieKlientuEs: BlogPost = {
  slug: "napominanie-klientu",
  title: "Recordar con suavidad a los clientes que estás: canales y ocasiones",
  date: "2020-11-12",
  category: "Marketing digital",
  cover: "/images/blog/napominanie-klientu/cover.webp",
  excerpt:
    "Cómo recuperar la atención con suavidad: push útil, email y triggers, carrito abandonado, fiestas y pedidos de reseña — con consentimiento y sin spam de «hace tiempo que no nos visitas».",
  lead: [
    "Vender una vez es la mitad del trabajo. La emoción de la compra se apaga rápido: hace falta un motivo adecuado para recordar que estás — no un flujo de «ven a visitarnos».",
    "Abajo: canales y ocasiones informativas. Los detalles de triggers, carrito y saludos viven en guías relacionadas; aquí — cómo no caer en el insistir. Mensajes de marketing solo con consentimiento y un unsubscribe claro.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. WhatsApp* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia de los emails trigger?",
      a: "Los triggers son mecánicas de evento. Aquí — la lógica más amplia de una «ocasión suave» entre canales, incluido push y el sentido offline de las fiestas.",
    },
    {
      q: "¿Push sin app?",
      a: "El push clásico de app viene de una app. En el sitio, el web-push es posible con permiso del navegador; mismas reglas: útil, raro, no un «compra ya» duro en cada ping.",
    },
    {
      q: "¿Cuándo escribir sobre un carrito abandonado?",
      a: "Suele ser de horas a unos días, en una serie de 1–3 emails — no «en un mes y medio». Sigue tu embudo y el consentimiento a comunicar.",
    },
    {
      q: "¿Se pueden tomar cumpleaños de perfiles sociales sin consentimiento?",
      a: "No deberías. Un cumpleaños es dato personal: solo lo que el cliente dejó al registrarse o en un formulario y te permitió usar.",
    },
    {
      q: "¿Vale «hace tiempo que no nos visitas»?",
      a: "A menudo molesta. Mejor: utilidad, un bonus con sentido, una novedad de servicio o una pregunta sobre su experiencia.",
    },
    {
      q: "¿También hace falta retargeting?",
      a: "Sí como complemento al email, no en lugar del servicio. Ver materiales de retargeting.",
    },
    {
      q: "¿WhatsApp* y SMS?",
      a: "Solo con consentimiento y en un canal donde el cliente ya espera mensajes de servicio. Si no — riesgo de queja y bloqueo.",
    },
    {
      q: "¿Qué importa más que la creatividad?",
      a: "Encaje y frecuencia. Un ping útil gana a diez mensajes «bonitos» de spam.",
    },
  ],
  sections: [
    {
      title: "Principio: una ocasión, no presión",
      level: 2,
      paras: [
        "Un recordatorio debería restaurar una buena experiencia o dar valor (estado del pedido, tip de uso, hecho estacional, bonus de lealtad). Hard sell en cada toque quema la lista.",
        "Servicio y producto ganan a plantillas. Una mala experiencia no la arregla un email.",
      ],
    },
    {
      title: "Push: corto y útil",
      level: 2,
      paras: [
        "Si tienes una app (o web-push), el cliente permitió pings — eso es responsabilidad. El trabajo es mejorar su día: motivación, recordatorio de evento, noticia útil del nicho — no «no nos has visitado».",
        "Mantén 1–2 frases, tono calmado cuando uses sonido, sin gritar. La frecuencia se queda baja o revocarán el permiso.",
      ],
      lists: [
        {
          intro: "Un buen push:",
          items: [
            "utilidad o cuidado, no una oferta dura",
            "especificidad sin muro de texto",
            "ligado a lo que la persona ya hizo en el producto",
          ],
        },
      ],
    },
    {
      title: "Email: win-back, carrito, sorpresa",
      level: 2,
      paras: [
        "Tras una compra o una pausa larga, un email de win-back con cuidado y un bonus (envío, promo) funciona — no todo el catálogo.",
        "Carrito abandonado: recuerda que los ítems esperan; si el precio cambió — dilo. Lanza la serie relativamente rápido (horas a días); prueba tono y oferta. Más en la pieza de abandono.",
        "Los clientes leales pueden recibir bonuses exclusivos — sensación de «estatus especial» sin presión.",
      ],
      links: [
        {
          label: "Emails trigger",
          href: "/blog/triggernye-rassylki/",
        },
        {
          label: "Emails de carrito abandonado",
          href: "/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Ocasiones informativas",
      level: 2,
      paras: [
        "Fiestas y cumpleaños son ocasiones suaves si la fecha se obtuvo legalmente y el tono es cálido. Ver la guía de saludos.",
        "Novedades de servicio, mejoras de envío, eventos de marca — si al segmento de verdad le importa.",
        "Pedir una reseña y responder al feedback refuerza la relación mejor que «valóranos con 5 estrellas» sin respuesta.",
      ],
      links: [
        {
          label: "Saludar a un cliente",
          href: "/blog/pozdravlenie-klienta/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "Consentimiento y utilidad primero, oferta después.",
        "Trata carrito y pausa con triggers a tiempo fresco — no «en un mes y medio».",
        "No recojas cumpleaños de perfiles ajenos contra las reglas.",
      ],
    },
  ],
  closing: [
    "Elige un canal y una ocasión por semana para el segmento dormido — mide respuestas y quejas antes de escalar la frecuencia.",
  ],
  related: [
    "retargeting",
    "formy-zahvata",
    "triggernye-rassylki",
    "broshennaya-korzina",
    "pozdravlenie-klienta",
    "sms-rassylka",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for triggernye-rassylki — same structure as RU JSON. */
export const triggernyeRassylkiEn: BlogPost = {
  slug: "triggernye-rassylki",
  title: "Trigger emails: what they are and how to use them",
  date: "2019-02-05",
  category: "Email marketing",
  cover: "/images/blog/triggernye-rassylki/cover-en.webp",
  excerpt:
    "How trigger messages differ from a regular newsletter: welcome, abandoned cart, order, review, back-in-stock, and list win-back — with consent and without spam.",
  lead: [
    "A trigger email goes out automatically after an action or event: subscribe, order, abandoned cart, birthday, a long pause. It’s not a “every Monday” digest — it’s a response to someone’s behavior.",
    "Below: why triggers help business, which scenarios work most often, and how not to slide into spam. Build the list with consent; we don’t use scraping other people’s addresses.",
  ],
  faq: [
    {
      q: "How does a trigger differ from a regular send?",
      a: "A regular send goes by calendar to everyone or a segment. A trigger fires on an event for a specific person (or a narrow group with the same event).",
    },
    {
      q: "Is a trigger the same as a transactional email?",
      a: "They partly overlap. Transactional (receipt, order status) are often service-required; marketing triggers (cart, recommendations) are optional and need careful frequency.",
    },
    {
      q: "Where should a beginner start?",
      a: "Welcome after subscribe and an abandoned cart/lead reminder — if you have a store or form. Then post-purchase and win-back for sleepers.",
    },
    {
      q: "Do I need an ESP?",
      a: "Yes — an email service or CRM with automations is easier. Check site/CMS integrations and anti-spam rules.",
    },
    {
      q: "Can I send without consent?",
      a: "Not for marketing. You need an opt-in list and a clear unsubscribe. Otherwise complaints, blocks, and reputation risk.",
    },
  ],
  sections: [
    {
      title: "Why triggers",
      level: 2,
      paras: [
        "The message arrives when it’s relevant: just subscribed, left items in cart, received an order. Opens and conversion are usually higher than the same blast for everyone.",
        "Time saved: you set the scenario once, then the system nurtures the customer. Judge results by opens, clicks, and reorder — not how pretty the template looks.",
      ],
      lists: [
        {
          intro: "Pros:",
          items: [
            "personalization by action",
            "fast response without a manual blast",
            "clear scenario stats",
            "fewer noisy mass emails",
          ],
        },
      ],
    },
    {
      title: "Simple scenarios",
      level: 2,
      paras: [
        "Welcome: confirm subscribe, set expectations, first useful piece or promo — without an aggressive storefront in email one.",
        "By date: birthday, purchase anniversary, event/webinar reminder. Tone — help, not pressure.",
        "Did the action — got the bonus: after a target step (sign-up, paid plan) send a personal code or instructions. Tie the chain to promo activation so you don’t promise empty offers.",
      ],
      links: [
        {
          label: "Email list from social",
          href: "/en/blog/baza-email-socseti/",
        },
        {
          label: "Customer greetings",
          href: "/en/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Abandoned cart and order",
      level: 2,
      paras: [
        "A reminder after a few hours (and a soft follow-up in 1–2 days if needed) with cart contents and a clear CTA. Don’t bombard hourly.",
        "After order — status, thanks, relevant related-product suggestions. The recommendation block must fit, not a random catalog.",
        "More on why people abandon checkout — in the abandoned-cart article.",
      ],
      lists: [
        {
          intro: "How it’s built technically:",
          items: [
            "site/CRM event into the ESP",
            "transactional template with order data",
            "“cart not empty for N hours” segment for a regular pass — weaker, but sometimes a start",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Review, price, stock, win-back",
      level: 2,
      paras: [
        "Ask for a review after the customer actually received and used the product (timing depends on niche: food faster, furniture longer).",
        "Price drop / back in stock — to people who showed interest. Don’t spawn an email per SKU the same day unnecessarily; sometimes one change digest is better.",
        "Win-back: for people who haven’t visited in a while — a soft reason to return (what’s new, unread, value), not “we miss you” with no offer.",
      ],
    },
    {
      title: "Rules so you don’t burn the list",
      level: 2,
      paras: [
        "Consent, one-click unsubscribe, honest subject lines. Cap frequency per person: several triggers a day risk irritation.",
        "Sync statuses: bought — don’t send cart; unsubscribed — don’t send marketing. Test subject and timing on a small segment.",
        "SMS and messengers are separate channels with their own rules; don’t blindly copy email triggers there.",
      ],
      lists: [
        {
          intro: "Launch mini checklist:",
          items: [
            "event and delay defined",
            "template with personalization and CTA",
            "exclusions (bought / unsubscribed)",
            "scenario metrics in the report",
            "a legally clean list",
          ],
        },
      ],
      links: [
        {
          label: "SMS marketing",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "Online store sales",
          href: "/en/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A trigger is an automatic response to an action — not a replacement for content newsletters.",
        "Start with welcome and cart/lead, then grow chains.",
        "Without consent and frequency control any “smart” scenario becomes spam.",
      ],
    },
  ],
  closing: [
    "Set one welcome email for new subscribers this week and measure opens — faster than designing ten complex chains at once.",
  ],
  related: [
    "broshennaya-korzina",
    "baza-email-socseti",
    "pozdravlenie-klienta",
    "sms-rassylka",
    "prodazhi-internet-magazin",
    "pochtovyy-servis",
  ],
};

/** ES overlay for triggernye-rassylki — same structure as RU JSON. */
export const triggernyeRassylkiEs: BlogPost = {
  slug: "triggernye-rassylki",
  title: "Emails trigger: qué son y cómo usarlos",
  date: "2019-02-05",
  category: "Email marketing",
  cover: "/images/blog/triggernye-rassylki/cover.webp",
  excerpt:
    "En qué se diferencian los mensajes trigger de un newsletter habitual: welcome, carrito abandonado, pedido, review, back-in-stock y win-back de lista — con consentimiento y sin spam.",
  lead: [
    "Un email trigger sale en automático tras una acción o evento: suscripción, pedido, carrito abandonado, cumpleaños, una pausa larga. No es el digest de «cada lunes» — es una respuesta al comportamiento de alguien.",
    "Abajo: por qué los triggers ayudan al negocio, qué escenarios funcionan más a menudo y cómo no deslizarse al spam. La lista se arma con consentimiento; no usamos scraping de direcciones ajenas.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un trigger de un envío normal?",
      a: "Un envío normal va por calendario a todos o a un segmento. Un trigger dispara por un evento para una persona concreta (o un grupo estrecho con el mismo evento).",
    },
    {
      q: "¿Un trigger es lo mismo que un email transaccional?",
      a: "Se solapan en parte. Los transaccionales (recibo, estado del pedido) suelen ser de servicio; los triggers de marketing (carrito, recomendaciones) son opcionales y necesitan frecuencia cuidadosa.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Welcome tras suscribirse y un recordatorio de carrito/lead abandonado — si tienes tienda o formulario. Luego post-compra y win-back para dormidos.",
    },
    {
      q: "¿Hace falta un ESP?",
      a: "Sí — un servicio de email o CRM con automatizaciones es más fácil. Revisa integraciones con sitio/CMS y reglas anti-spam.",
    },
    {
      q: "¿Puedo enviar sin consentimiento?",
      a: "No para marketing. Necesitas lista opt-in y unsubscribe claro. Si no: quejas, bloqueos y riesgo de reputación.",
    },
  ],
  sections: [
    {
      title: "Por qué triggers",
      level: 2,
      paras: [
        "El mensaje llega cuando es relevante: acaba de suscribirse, dejó ítems en el carrito, recibió un pedido. Opens y conversión suelen ser más altos que el mismo blast para todos.",
        "Tiempo ahorrado: defines el escenario una vez y el sistema nutre al cliente. Juzga resultados por opens, clics y reorder — no por lo bonita que se vea la plantilla.",
      ],
      lists: [
        {
          intro: "Pros:",
          items: [
            "personalización por acción",
            "respuesta rápida sin blast manual",
            "stats claras del escenario",
            "menos emails masivos ruidosos",
          ],
        },
      ],
    },
    {
      title: "Escenarios simples",
      level: 2,
      paras: [
        "Welcome: confirma la suscripción, fija expectativas, primera pieza útil o promo — sin escaparate agresivo en el email uno.",
        "Por fecha: cumpleaños, aniversario de compra, recordatorio de evento/webinar. Tono — ayuda, no presión.",
        "Hizo la acción — recibió el bonus: tras un paso target (alta, plan de pago) envía un código personal o instrucciones. Ata la cadena a la activación de la promo para no prometer ofertas vacías.",
      ],
      links: [
        {
          label: "Lista de email desde redes",
          href: "/es/blog/baza-email-socseti/",
        },
        {
          label: "Felicitaciones al cliente",
          href: "/es/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Carrito abandonado y pedido",
      level: 2,
      paras: [
        "Un recordatorio tras unas horas (y un follow-up suave en 1–2 días si hace falta) con el contenido del carrito y un CTA claro. No bombardees cada hora.",
        "Tras el pedido — estado, gracias, sugerencias relacionadas relevantes. El bloque de recomendaciones debe encajar, no un catálogo al azar.",
        "Más sobre por qué la gente abandona el checkout — en el artículo de carrito abandonado.",
      ],
      lists: [
        {
          intro: "Cómo se arma técnicamente:",
          items: [
            "evento del sitio/CRM al ESP",
            "plantilla transaccional con datos del pedido",
            "segmento «carrito no vacío N horas» para un pase regular — más débil, pero a veces es un inicio",
          ],
        },
      ],
      links: [
        {
          label: "Carrito abandonado",
          href: "/es/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Review, precio, stock, win-back",
      level: 2,
      paras: [
        "Pide review cuando el cliente ya recibió y usó el producto (el timing depende del nicho: comida más rápido, muebles más largo).",
        "Baja de precio / back in stock — a quien mostró interés. No generes un email por SKU el mismo día sin necesidad; a veces un digest de cambios basta.",
        "Win-back: para quien no visita hace tiempo — una razón suave para volver (novedades, no leído, valor), no «te echamos de menos» sin oferta.",
      ],
    },
    {
      title: "Reglas para no quemar la lista",
      level: 2,
      paras: [
        "Consentimiento, unsubscribe a un clic, subjects honestos. Tope de frecuencia por persona: varios triggers al día arriesgan irritación.",
        "Sincroniza estados: compró — no envíes carrito; se dio de baja — no envíes marketing. Prueba subject y timing en un segmento pequeño.",
        "SMS y mensajeros son canales aparte con sus propias reglas; no copies a ciegas los triggers de email allí.",
      ],
      lists: [
        {
          intro: "Mini checklist de lanzamiento:",
          items: [
            "evento y delay definidos",
            "plantilla con personalización y CTA",
            "exclusiones (compró / se dio de baja)",
            "métricas del escenario en el informe",
            "lista limpia legalmente",
          ],
        },
      ],
      links: [
        {
          label: "SMS marketing",
          href: "/es/blog/sms-rassylka/",
        },
        {
          label: "Ventas en tienda online",
          href: "/es/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Un trigger es una respuesta automática a una acción — no un sustituto de newsletters de contenido.",
        "Empieza con welcome y carrito/lead, luego crece las cadenas.",
        "Sin consentimiento ni control de frecuencia, cualquier escenario «inteligente» se vuelve spam.",
      ],
    },
  ],
  closing: [
    "Monta un welcome para nuevos suscriptores esta semana y mide opens — más rápido que diseñar diez cadenas complejas de golpe.",
  ],
  related: [
    "broshennaya-korzina",
    "baza-email-socseti",
    "pozdravlenie-klienta",
    "sms-rassylka",
    "prodazhi-internet-magazin",
    "pochtovyy-servis",
  ],
};

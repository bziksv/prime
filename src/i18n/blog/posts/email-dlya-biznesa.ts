import type { BlogPost } from "../../../data/blog";

/** ES overlay for email-dlya-biznesa — same structure as RU JSON. */
export const emailDlyaBiznesaEs: BlogPost = {
  slug: "email-dlya-biznesa",
  title: "Email marketing: qué negocios lo necesitan",
  date: "2019-09-12",
  category: "Email marketing",
  cover: "/images/blog/email-dlya-biznesa/cover.webp",
  excerpt:
    "Quién necesita email: servicio vs producto, B2B y B2C, el rol en distintas etapas de crecimiento y por qué importan las buyer personas — sin una receta única para todos.",
  lead: [
    "El email no es igual para cada empresa. Para un servicio suele acercarse más al cuidado del cliente; para una marca de producto — a awareness y apoyo al retail; para B2B — a un ciclo de venta largo.",
    "Abajo: cómo saber si el canal te encaja — tipo de negocio, reglas B2B/B2C, etapa del ciclo de vida y buyer personas. Un newsletter sin consentimiento ni oferta no salva el modelo.",
  ],
  faq: [
    {
      q: "¿Es demasiado pronto el email para un negocio pequeño?",
      a: "No si hay ventas repetidas o un nurture largo. Empieza con opt-in y un welcome.",
    },
    {
      q: "¿Los emails B2B y B2C son distintos?",
      a: "Sí. B2B suele significar valor, casos y condiciones de servicio; B2C — oferta, emoción y frecuencia más cuidadosa.",
    },
    {
      q: "¿Funciona el email para un fabricante sin ventas directas?",
      a: "Puede servir para marca y nurture de demanda; el retail a menudo cierra la venta. Alinea ofertas con el canal.",
    },
    {
      q: "¿Es obligatorio el email para un servicio?",
      a: "Ayuda mucho: citas, recordatorios, reactivación, reseñas. No sustituye el producto ni el servicio.",
    },
    {
      q: "¿Tiene sentido el email en un startup en fase idea?",
      a: "Arma waitlist y nurture. Promos masivas sin producto son ruido.",
    },
    {
      q: "¿El email sustituye a la publicidad?",
      a: "No. Es tu canal hacia gente que dio opt-in. Tráfico de pago y SEO siguen siendo bucles aparte.",
    },
    {
      q: "¿Cómo decidir si necesito email?",
      a: "Si hay toques repetidos, lista con consentimiento y un objetivo medible (lead, visita, compra repetida).",
    },
  ],
  sections: [
    {
      title: "Por qué un negocio necesita un canal de email",
      level: 2,
      paras: [
        "El marketing hace reconocible la marca, trae demanda y ayuda a mantener el interés hasta la compra. El email es contacto directo con quien ya dio una dirección: más barato para un toque repetido que comprar un clic cada vez.",
        "No hay una plantilla única: el esquema depende de la oferta, del ciclo de venta y de si eres servicio o producto.",
      ],
    },
    {
      title: "Servicio, producto, B2B y B2C",
      level: 2,
      paras: [
        "Las empresas de servicios suelen acompañar al cliente por toda la cadena: cita, recordatorio, upsell, reseña. Las marcas de producto a menudo necesitan explicar valor y apoyar la distribución; el email directo al comprador final funciona si tienes lista propia o co-marketing con el retail.",
        "B2B se construye sobre relaciones largas: líneas, condiciones de servicio, paquetes, expertise. B2C — ciclo más corto, más peso de la oferta y frecuencia cuidadosa o llegan las bajas.",
        "En industria y negocios de proyecto el contacto personal es crítico; el email complementa al manager — no lo sustituye.",
      ],
      lists: [
        {
          intro: "Donde el email encaja especialmente bien:",
          items: [
            "compras repetidas y suscripción",
            "nurture B2B largo",
            "recordatorios de servicio",
            "onboarding SaaS / producto digital",
            "fidelidad y reactivación",
          ],
        },
      ],
      links: [
        {
          label: "Estrategia de email",
          href: "/es/blog/email-strategiya/",
        },
        {
          label: "Emails disparados",
          href: "/es/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Etapa del negocio y buyer personas",
      level: 2,
      paras: [
        "Al inicio — construcción de lista y chequeo de demanda. En crecimiento — segmentos y automatizaciones. En madurez — retención, upsell, despertar contactos «dormidos».",
        "Las buyer personas responden: a quién escribir, de qué, con qué tono. Sin ellas los emails se vuelven «queridos amigos» para todos y no sirven a nadie.",
      ],
      links: [
        {
          label: "Copy de newsletter",
          href: "/es/blog/tekst-email-rassylki/",
        },
        {
          label: "Correo del dominio",
          href: "/es/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Este artículo es un marco para elegir el canal — no una promesa de beneficio del newsletter. Promos agresivas sin opt-in dañan la marca y la deliverability.",
  },
  closing: [
    "Si tienes toques repetidos y consentimiento para emails — el email casi siempre cabe en el funnel; si no hay lista y los deals son puntuales sin nurture — primero producto y opt-in, no un «blast urgente».",
  ],
  related: [
    "tekst-email-rassylki",
    "email-strategiya",
    "triggernye-rassylki",
    "pochta-dlya-domena",
    "primery-email-rassylok",
    "baza-email-socseti",
  ],
};

/** EN overlay for email-dlya-biznesa — same structure as RU JSON. */
export const emailDlyaBiznesaEn: BlogPost = {
  slug: "email-dlya-biznesa",
  title: "Email marketing: which businesses need it",
  date: "2019-09-12",
  category: "Email marketing",
  cover: "/images/blog/email-dlya-biznesa/cover-en.webp",
  excerpt:
    "Who needs email: service vs product, B2B and B2C, the role at different growth stages, and why buyer personas matter — without one recipe for everyone.",
  lead: [
    "Email isn’t the same for every company. For a service it’s often closer to client care; for a product brand — to awareness and retail support; for B2B — to a long deal cycle.",
    "Below: how to tell if the channel fits you — business type, B2B/B2C rules, life-cycle stage, and buyer personas. A newsletter without consent and an offer won’t save the model.",
  ],
  faq: [
    {
      q: "Is email too early for a small business?",
      a: "No if you have repeat sales or a long nurture. Start with opt-in and a welcome.",
    },
    {
      q: "Are B2B and B2C emails different?",
      a: "Yes. B2B more often means value, cases, and service terms; B2C — offer, emotion, and more careful frequency.",
    },
    {
      q: "Does email work for a manufacturer without direct sales?",
      a: "It can work for brand and demand nurture; retail often closes the sale. Align offers with the channel.",
    },
    {
      q: "Is email required for a service?",
      a: "It helps a lot: booking, reminders, reactivation, reviews. It doesn’t replace the product and service.",
    },
    {
      q: "Does email make sense for a startup at the idea stage?",
      a: "Build a waitlist and nurture. Mass promos without a product are noise.",
    },
    {
      q: "Does email replace advertising?",
      a: "No. It’s your channel to people who opted in. Paid traffic and SEO stay separate loops.",
    },
    {
      q: "How do I decide whether I need email?",
      a: "Whether you have repeat touches, a consented list, and a measurable goal (lead, visit, repeat purchase).",
    },
  ],
  sections: [
    {
      title: "Why a business needs an email channel",
      level: 2,
      paras: [
        "Marketing makes the brand recognizable, brings demand, and helps keep interest until purchase. Email is direct contact with people who already gave an address: cheaper for a repeat touch than buying a click every time.",
        "There’s no single template: the scheme depends on the offer, deal cycle, and whether you’re a service or a product.",
      ],
    },
    {
      title: "Service, product, B2B, and B2C",
      level: 2,
      paras: [
        "Service companies more often walk the client through the full chain: booking, reminder, upsell, review. Product brands often need to explain value and support distribution; direct email to the end buyer works if you have your own list or co-marketing with retail.",
        "B2B is built on long relationships: lines, service terms, packages, expertise. B2C — shorter cycle, stronger offer role, and careful frequency or you get unsubscribes.",
        "For industry and project businesses, personal contact is critical; email complements a manager — it doesn’t replace them.",
      ],
      lists: [
        {
          intro: "Where email fits especially well:",
          items: [
            "repeat purchases and subscription",
            "long B2B nurture",
            "service reminders",
            "SaaS / digital product onboarding",
            "loyalty and reactivation",
          ],
        },
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Business stage and buyer personas",
      level: 2,
      paras: [
        "At the start — list building and demand checks. In growth — segments and automations. In maturity — retention, upsell, waking “asleep” contacts.",
        "Buyer personas answer: whom to write, about what, in which tone. Without them emails become “dear friends” for everyone and work for no one.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Domain email",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "This article is a frame for choosing the channel — not a profit promise from the newsletter. Pushy promos without opt-in hurt the brand and deliverability.",
  },
  closing: [
    "If you have repeat touches and consent for emails — email almost always belongs in the funnel; if there’s no list and deals are one-off without nurture — first product and opt-in, not an “urgent blast.”",
  ],
  related: [
    "tekst-email-rassylki",
    "email-strategiya",
    "triggernye-rassylki",
    "pochta-dlya-domena",
    "primery-email-rassylok",
    "baza-email-socseti",
  ],
};

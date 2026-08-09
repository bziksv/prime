import type { BlogPost } from "../../../data/blog";

/** ES overlay for email-strategiya — same structure as RU JSON. */
export const emailStrategiyaEs: BlogPost = {
  slug: "email-strategiya",
  title: "Estrategia de email: del research a los lanzamientos",
  date: "2019-12-13",
  category: "Email marketing",
  cover: "/images/blog/email-strategiya/cover.webp",
  excerpt:
    "Cómo armar una estrategia de email: auditoría de lista y métricas, producto y audiencia, competidores, plan de emails y segmentos, plantillas, tests y crecimiento de volumen — sin el mito de que el newsletter se vende solo.",
  lead: [
    "Una estrategia de email no es una plantilla bonita una vez a la semana — es una cadena: a quién escuchas, de qué escribes, con qué frecuencia, qué escenarios y cómo mides resultados.",
    "Abajo: un marco de research → diseño → lanzamiento → tests. Solo listas opt-in; no usamos scraping ni listas compradas.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar si aún no había emails?",
      a: "Describe el producto y la audiencia, conecta un ESP, arma el opt-in, haz un welcome y 1–2 triggers.",
    },
    {
      q: "¿Qué métricas mirar?",
      a: "Deliverability, open rate, CTR, bajas, quejas, conversiones/ingresos. El open rate sin ventas no basta.",
    },
    {
      q: "¿Cuántos emails por semana es razonable?",
      a: "Tantos como el segmento aguante sin que suban las bajas. Mejor más relevancia que más de lo mismo a todos.",
    },
    {
      q: "¿Hace falta un CRM?",
      a: "Para crecer — sí. Al inicio un ESP y una hoja pueden servir, pero el techo de segmentación es más bajo.",
    },
    {
      q: "¿Externalizar o hacerlo in-house?",
      a: "Mantén estrategia y oferta in-house; layout y rutina pueden ir a un contratista.",
    },
    {
      q: "Mito: ¿el email está muerto?",
      a: "El canal vive con opt-in y valor. El spam a listas compradas muere.",
    },
    {
      q: "¿Cuándo escalar la frecuencia?",
      a: "Tras métricas estables en un volumen pequeño y segmentos claros — no diario a todos a la vez.",
    },
  ],
  sections: [
    {
      title: "Etapa 1. Research",
      level: 2,
      paras: [
        "Desmonta el marketing actual: cómo se armó la lista, qué datos de suscriptores tienes, cómo cambió el tamaño, qué enviaste ya y con qué open rate y CTR.",
        "Describe el producto: rasgos, objeciones, cuándo compran y cuándo rechazan. Sin eso, los emails se quedan genéricos.",
        "Segmentos de audiencia y competidores: qué emails reciben tus clientes de otros (suscríbete de forma legal), dónde están tus diferencias fuertes.",
      ],
      lists: [
        {
          intro: "Datos mínimos antes de una estrategia:",
          items: [
            "fuente de la lista y consentimiento",
            "open rate, CTR, quejas de spam",
            "oferta y USP",
            "1–3 segmentos",
            "enlace a CRM / leads (si hay)",
          ],
        },
      ],
      links: [
        {
          label: "Emails disparados",
          href: "/es/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Etapa 2. Diseño de la estrategia",
      level: 2,
      paras: [
        "Tira mitos («un email a todos», «más a menudo siempre es mejor», «basta el nombre en el asunto»). Fija objetivos: reactivación, ventas, lead nurture, servicio.",
        "Describe la empresa en breve para el equipo: tono, temas prohibidos, CTA, quién aprueba layouts.",
        "Dibuja un mapa de emails: digest regular, triggers, promos. Separa avisos de servicio y de marketing.",
        "Arma plantillas y un estilo compartido: header, preheader, botón, footer con baja.",
      ],
      links: [
        {
          label: "Ejemplos de emails fuertes",
          href: "/es/blog/primery-email-rassylok/",
        },
        {
          label: "Lecciones de email de 2020",
          href: "/es/blog/email-marketing-2020/",
        },
      ],
    },
    {
      title: "Etapas 3–4. Lanzamiento, tests, crecimiento",
      level: 2,
      paras: [
        "Lanza en un segmento estrecho. Mira deliverability y quejas antes de pulir creatividades.",
        "A/B de asuntos y CTA, analiza bajas, limpia inactivos. Sube frecuencia y volumen solo tras una base estable de métricas.",
        "Las herramientas (ESP, tareas, analítica) sirven al plan — no al revés.",
      ],
      links: [
        {
          label: "Herramientas del marketer",
          href: "/es/blog/instrumenty-marketologa/",
        },
        {
          label: "Lista de email con consentimiento",
          href: "/es/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Open rate y CTR sin ingresos no prueban el éxito de la estrategia. Trata el CRM como sistema de registro de segmentos y deals — no una hoja para siempre.",
  },
  closing: [
    "Arma research → mapa de emails → piloto por segmento → tests — para que la estrategia de email sea un sistema, no otra promo caótica en el newsletter.",
  ],
  related: [
    "instrumenty-marketologa",
    "triggernye-rassylki",
    "primery-email-rassylok",
    "email-marketing-2020",
    "baza-email-socseti",
    "pochta-dlya-domena",
  ],
};

/** EN overlay for email-strategiya — same structure as RU JSON. */
export const emailStrategiyaEn: BlogPost = {
  slug: "email-strategiya",
  title: "Email strategy: from research to launches",
  date: "2019-12-13",
  category: "Email marketing",
  cover: "/images/blog/email-strategiya/cover-en.webp",
  excerpt:
    "How to build an email strategy: list and metrics audit, product and audience, competitors, email and segment plan, templates, tests, and volume growth — without the myth that the newsletter sells itself.",
  lead: [
    "An email strategy isn’t a pretty template once a week — it’s a chain: whom you listen to, what you write about, how often, which scenarios, and how you measure results.",
    "Below: a frame from research → design → launch → tests. Opt-in lists only; we don’t use scraping or bought lists.",
  ],
  faq: [
    {
      q: "Where should I start if there were no emails yet?",
      a: "Describe the product and audience, connect an ESP, build opt-in, make a welcome and 1–2 triggers.",
    },
    {
      q: "Which metrics should I watch?",
      a: "Deliverability, open rate, CTR, unsubscribes, complaints, conversions/revenue. Open rate without sales isn’t enough.",
    },
    {
      q: "How many emails per week is reasonable?",
      a: "As many as the segment can take without rising unsubscribes. Better more relevant than more of the same to everyone.",
    },
    {
      q: "Do I need a CRM?",
      a: "For growth — yes. At the start an ESP and a spreadsheet can work, but segmentation ceilings are lower.",
    },
    {
      q: "Should I outsource or keep it in-house?",
      a: "Keep strategy and offer in-house; layout and routine can go to a contractor.",
    },
    {
      q: "Myth: is email dead?",
      a: "The channel lives with opt-in and value. Spam to bought lists dies.",
    },
    {
      q: "When should I scale frequency?",
      a: "After stable metrics on a small volume and clear segments — not daily to everyone at once.",
    },
  ],
  sections: [
    {
      title: "Stage 1. Research",
      level: 2,
      paras: [
        "Break down current marketing: how the list was built, what subscriber data you have, how size changed, what you already sent and with which open rate and CTR.",
        "Describe the product: traits, objections, when people buy and when they refuse. Without that, emails stay generic.",
        "Audience segments and competitors: which emails your customers get from others (subscribe legally), where your strong differences sit.",
      ],
      lists: [
        {
          intro: "Minimum data before a strategy:",
          items: [
            "list source and consent",
            "open rate, CTR, spam complaints",
            "offer and USP",
            "1–3 segments",
            "link to CRM / leads (if any)",
          ],
        },
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Stage 2. Strategy design",
      level: 2,
      paras: [
        "Drop myths (“one email to all,” “more often is always better,” “a name in the subject is enough”). Lock goals: reactivation, sales, lead nurture, service.",
        "Describe the company briefly for the team: tone, forbidden topics, CTAs, who approves layouts.",
        "Draw an email map: regular digest, triggers, promos. Separate service and marketing notices.",
        "Build templates and a shared style: header, preheader, button, footer with unsubscribe.",
      ],
      links: [
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
        {
          label: "Email lessons from 2020",
          href: "/en/blog/email-marketing-2020/",
        },
      ],
    },
    {
      title: "Stages 3–4. Launch, tests, growth",
      level: 2,
      paras: [
        "Launch on a narrow segment. Watch deliverability and complaints before creative polish.",
        "A/B subjects and CTAs, analyze unsubscribes, clean inactives. Raise frequency and volume only after a stable metrics base.",
        "Tools (ESP, tasks, analytics) serve the plan — not the other way around.",
      ],
      links: [
        {
          label: "Marketer tools",
          href: "/en/blog/instrumenty-marketologa/",
        },
        {
          label: "Email list with consent",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Open rate and CTR without revenue don’t prove strategy success. Treat CRM as the system of record for segments and deals — not a spreadsheet forever.",
  },
  closing: [
    "Assemble research → email map → segment pilot → tests — so email strategy becomes a system, not another chaotic promo in the newsletter.",
  ],
  related: [
    "instrumenty-marketologa",
    "triggernye-rassylki",
    "primery-email-rassylok",
    "email-marketing-2020",
    "baza-email-socseti",
    "pochta-dlya-domena",
  ],
};

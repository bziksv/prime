import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtovoronka — same structure as RU JSON. */
export const avtovoronkaEn: BlogPost = {
  slug: "avtovoronka",
  title: "Automated sales funnel: what it is, types, and how to build without chaos",
  date: "2019-08-01",
  category: "Digital marketing",
  cover: "/images/blog/avtovoronka/cover-en.webp",
  excerpt:
    "An automated sales funnel: stages from first touch to purchase, simple/medium/multi-level schemes, key elements, and why automate — without the myth that “a bot replaces everyone.”",
  lead: [
    "An autofunnel is the customer path from first touch to the target action, where scenarios cover part of the steps: ads, bot, email, landing, payment. A person joins where a conversation is needed — not on every click.",
    "Below: stages, complexity types, why automate, and what to assemble. “Conversion is always 10%” from old write-ups isn’t universal — watch your own steps and tests.",
  ],
  faq: [
    {
      q: "Is an autofunnel only a messenger bot?",
      a: "A bot is a common element, not the whole funnel. There can be a landing, email, retargeting, CRM tasks for a manager. The point is a pre-described path with automation on routine.",
    },
    {
      q: "Does a simple “ads → payment” funnel work?",
      a: "Yes for hot demand and an inexpensive product. Expensive and complex decisions usually need warm-up and a lead.",
    },
    {
      q: "Does automation remove the sales team?",
      a: "It lowers load on typical questions and qualification. Complex B2B and expensive deals still need people.",
    },
    {
      q: "Where should setup start?",
      a: "Draw the current path, find breaks in the data, simplify or add a step, then test with step-conversion measurement.",
    },
    {
      q: "Do you need a lead magnet?",
      a: "Often yes on a medium cycle: checklist, consultation, demo — exchange for a contact and a reason to continue the dialogue.",
    },
    {
      q: "How do you measure success?",
      a: "Step→step conversion, CPA/CPL, share who reach payment, lead quality for the manager — not only ad reach.",
    },
  ],
  sections: [
    {
      title: "Path stages",
      level: 2,
      paras: [
        "A typical scheme: awareness (ad, post, search) → interaction (click, move to chat/site) → warm-up and answers → conversion (lead, payment, booking).",
        "Not everyone reaches the end — that’s normal. Find where people drop and fix the bottleneck — don’t “add more channels” blind.",
      ],
      lists: [
        {
          intro: "Setup cycle:",
          items: [
            "audit the current path",
            "hypothesis for the break cause",
            "fix the step (simplify or add)",
            "test on a horizon with enough traffic",
            "compare conversions before/after",
          ],
        },
      ],
    },
    {
      title: "Types by complexity",
      level: 2,
      paras: [
        "Simple: ads → catalog/landing → payment. Medium: a lead magnet and warm-up appear (email/messenger); the goal is often a contact, then a sale. Multi-level: a long cycle and many channels (typical for real estate, cars, travel) — from broad reach to segments and personal offers.",
        "An automated funnel is when scenarios run the routine (qualification, content delivery, reminders, segmentation). It fits stores, services, and info products with a clear offer; it doesn’t replace strategy.",
      ],
      notes: [
        {
          title: "B2B and B2C",
          kind: "tip",
          text: "In B2B the cycle is usually longer and more people sit in the buying decision. In B2C the path is shorter, but price, delivery, and review trust matter more.",
        },
      ],
    },
    {
      title: "Why automate",
      level: 2,
      paras: [
        "Load on typical dialogues drops, answers don’t depend on who is on shift, the scenario works at night. Time savings appear after setup — not “from day one with no effort.”",
        "Risk: a rigid bot with no path to a human annoys on complex questions. Plan manager escalation and clear stop-words.",
      ],
      links: [
        {
          label: "Capture forms",
          href: "/en/blog/formy-zahvata/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Key elements",
      level: 2,
      paras: [
        "You need: a strategy with yes/no branches, entry points, a thank-you page/message after contact, warm-up touches, selling pages, segmentation, and post-sale work (repeat, upsell, review).",
        "A product matrix helps move from a simple offer to the core one. Traffic sources — paid search, social ads, content, retargeting — with one measurement loop.",
      ],
      lists: [
        {
          intro: "Build checklist:",
          items: [
            "product matrix and offer",
            "behavior scenarios (including refusal)",
            "communication channels",
            "traffic sources + retargeting",
            "CRM/list and segments",
            "metrics by step",
          ],
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "An autofunnel is a described path with automation on routine and a human where dialogue is needed. Start with a step map and break measurement; complicate the scenario only after a simple scheme already counts money.",
  ],
  related: [
    "formy-zahvata",
    "retargeting",
    "avtovoronka-instagram",
    "avtovoronka-vk",
    "performance-marketing",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for avtovoronka — same structure as RU JSON / EN. */
export const avtovoronkaEs: BlogPost = {
  slug: "avtovoronka",
  title: "Embudo de ventas automatizado: qué es, tipos y cómo armarlo sin caos",
  date: "2019-08-01",
  category: "Digital marketing",
  cover: "/images/blog/avtovoronka/cover-es.webp",
  excerpt:
    "Un embudo de ventas automatizado: etapas del primer touch a la compra, esquemas simple/medio/multinivel, elementos clave y por qué automatizar — sin el mito de que «un bot lo sustituye todo».",
  lead: [
    "Un autoembudo es el camino del cliente del primer touch a la acción objetivo, donde los escenarios cubren parte de los pasos: ads, bot, email, landing, pago. Una persona entra donde hace falta conversación — no en cada clic.",
    "Abajo: etapas, tipos por complejidad, por qué automatizar y qué ensamblar. «La conversión siempre es 10%» de textos viejos no es universal — mira tus propios pasos y tests.",
  ],
  faq: [
    {
      q: "¿Un autoembudo es solo un bot de messenger?",
      a: "Un bot es un elemento común, no todo el embudo. Puede haber landing, email, retargeting, tareas de CRM para un manager. El punto es un camino predescrito con automatización en la rutina.",
    },
    {
      q: "¿Funciona un embudo simple «ads → pago»?",
      a: "Sí para demanda caliente y un producto barato. Decisiones caras y complejas suelen necesitar calentamiento y un lead.",
    },
    {
      q: "¿La automatización quita al equipo de ventas?",
      a: "Baja la carga en preguntas típicas y calificación. B2B complejo y deals caros siguen necesitando personas.",
    },
    {
      q: "¿Por dónde debe empezar el setup?",
      a: "Dibuja el camino actual, halla roturas en los datos, simplifica o añade un paso, luego testa con medición de conversión por paso.",
    },
    {
      q: "¿Hace falta un lead magnet?",
      a: "A menudo sí en un ciclo medio: checklist, consulta, demo — intercambio por un contacto y un motivo para seguir el diálogo.",
    },
    {
      q: "¿Cómo mides el éxito?",
      a: "Conversión paso→paso, CPA/CPL, cuota que llega al pago, calidad del lead para el manager — no solo reach de ads.",
    },
  ],
  sections: [
    {
      title: "Etapas del camino",
      level: 2,
      paras: [
        "Un esquema típico: awareness (ad, post, búsqueda) → interacción (clic, paso a chat/sitio) → calentamiento y respuestas → conversión (lead, pago, reserva).",
        "No todo el mundo llega al final — es normal. Encuentra dónde la gente se cae y arregla el cuello de botella — no «suma más canales» a ciegas.",
      ],
      lists: [
        {
          intro: "Ciclo de setup:",
          items: [
            "auditar el camino actual",
            "hipótesis de la causa de la rotura",
            "cambiar el paso (simplificar o añadir)",
            "testar en un horizonte con tráfico suficiente",
            "comparar conversiones antes/después",
          ],
        },
      ],
    },
    {
      title: "Tipos por complejidad",
      level: 2,
      paras: [
        "Simple: ads → catálogo/landing → pago. Medio: aparecen un lead magnet y calentamiento (email/messenger); la meta suele ser un contacto, luego una venta. Multinivel: ciclo largo y muchos canales (típico de inmobiliaria, coches, viajes) — de reach amplio a segmentos y ofertas personales.",
        "Un embudo automatizado es cuando los escenarios corren la rutina (calificación, entrega de contenido, recordatorios, segmentación). Encaja en tiendas, servicios e info-productos con oferta clara; no sustituye la estrategia.",
      ],
      notes: [
        {
          title: "B2B y B2C",
          kind: "tip",
          text: "En B2B el ciclo suele ser más largo y más gente se sienta en la decisión de compra. En B2C el camino es más corto, pero pesan más precio, entrega y confianza de reseñas.",
        },
      ],
    },
    {
      title: "Por qué automatizar",
      level: 2,
      paras: [
        "Baja la carga en diálogos típicos, las respuestas no dependen de quién está de turno, el escenario trabaja de noche. El ahorro de tiempo aparece tras el setup — no «desde el día uno sin esfuerzo».",
        "Riesgo: un bot rígido sin camino a un humano molesta en preguntas complejas. Planea escalado a manager y stop-words claros.",
      ],
      links: [
        {
          label: "Formularios de captura",
          href: "/es/blog/formy-zahvata/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Elementos clave",
      level: 2,
      paras: [
        "Necesitas: una estrategia con ramas sí/no, puntos de entrada, una página/mensaje de gracias tras el contacto, touches de calentamiento, páginas de venta, segmentación y trabajo post-venta (repetir, upsell, reseña).",
        "Una matriz de producto ayuda a pasar de una oferta simple a la principal. Fuentes de tráfico — paid search, ads en social, contenido, retargeting — con un solo loop de medición.",
      ],
      lists: [
        {
          intro: "Checklist de construcción:",
          items: [
            "matriz de producto y oferta",
            "escenarios de comportamiento (incluida la negativa)",
            "canales de comunicación",
            "fuentes de tráfico + retargeting",
            "CRM/lista y segmentos",
            "métricas por paso",
          ],
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/es/blog/performance-marketing/",
        },
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "Un autoembudo es un camino descrito con automatización en la rutina y un humano donde hace falta diálogo. Empieza con un mapa de pasos y medición de roturas; complica el escenario solo cuando un esquema simple ya cuenta dinero.",
  ],
  related: [
    "formy-zahvata",
    "retargeting",
    "avtovoronka-instagram",
    "avtovoronka-vk",
    "performance-marketing",
    "skvoznaya-analitika",
  ],
};

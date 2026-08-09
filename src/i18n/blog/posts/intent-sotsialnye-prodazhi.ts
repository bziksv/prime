import type { BlogPost } from "../../../data/blog";

/** EN overlay for intent-sotsialnye-prodazhi — same structure as RU JSON. */
export const intentSotsialnyeProdazhiEn: BlogPost = {
  slug: "intent-sotsialnye-prodazhi",
  title: "Purchase intent in social: reading buyer signals",
  date: "2018-09-04",
  category: "Digital marketing",
  cover: "/images/blog/intent-sotsialnye-prodazhi/cover-en.webp",
  excerpt:
    "Social selling and intent monitoring in feeds and communities: “just dreaming / comparing / ready to buy,” ethical replies, CRM, and retarget — not the same as SEO user intent.",
  lead: [
    "People ask for buying advice in communities and feeds long before they land on a site. Intent here is the intent inside a message: from “someday I want this” to “where can I order tomorrow.”",
    "Below: intent levels, how to reply without spam, and how this differs from SEO user intent (what a search query wants). Informational only. Some foreign platforms are restricted in Russia — stick to lawful channels (including VK) and each platform’s rules. Handle personal data and chats under the law.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is this the same as SEO user intent?",
      a: "No. SEO intent is what someone wants from a search query. Here it’s the intent in a social post or comment.",
    },
    {
      q: "What intent types show up?",
      a: "Roughly three: desire (“just want”), comparison (gathering reviews), purchase (ready to order). Priority and reply style differ.",
    },
    {
      q: "Should you reply to every post?",
      a: "No. Hot, relevant signals deserve a fast, useful reply. Cold wishes with no budget rarely convert.",
    },
    {
      q: "Can you DM an offer right away?",
      a: "Carefully — that slides into spam fast. Prefer a useful reply in the thread when it fits, then a soft follow-up under platform rules.",
    },
    {
      q: "Why use a CRM?",
      a: "So leads don’t vanish, status is visible, and managers don’t double-touch the same person.",
    },
    {
      q: "Should you retarget “warm” intents?",
      a: "Yes when you have a lawful audience and consent/ad rules. Don’t expect one ad touch to close the deal.",
    },
  ],
  sections: [
    {
      title: "Three levels of intent",
      level: 2,
      paras: [
        "“Just want” — a dream or deferred interest with no readiness to pay. Low value: note the topic, don’t pitch.",
        "“Already comparing” — weighing options and reading reviews. Facts, differences, cases, and a calm sales conversation fit here.",
        "“Want to buy / order” — a hot signal. Speed matters: answer directly, hand off to sales, open a CRM card.",
      ],
      lists: [
        {
          intro: "How to react to a signal:",
          items: [
            "a useful reply in the thread",
            "handoff to a colleague with the right expertise",
            "create a lead in the CRM",
            "deferred nurture (content or ads) for warm intents",
          ],
        },
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to run the workflow",
      level: 2,
      paras: [
        "Watching your communities and relevant public threads surfaces demand before a site form. Track negativity too — sometimes it’s a chance to help, not to drop a price list.",
        "Geo, categories, and excluded topics cut noise. Auto-rules cover routine replies; complex cases need a person.",
        "Ethics beat quota speed: no stalking vibe, no spam. Write a social-selling playbook — who replies, in what SLA, what you must never promise.",
      ],
      notes: [
        {
          title: "Platforms",
          text: "This piece may mention Facebook* and Instagram* (Meta* products). In Russia, Meta’s activity is recognized as extremist; use available lawful channels. The page disclaimer is required.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Account manager",
          href: "/en/blog/akkaunt-menedzher/",
        },
        {
          label: "Sales manager KPIs",
          href: "/en/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "Social intent is an early demand signal when the team replies fast, on point, and without spam. Don’t confuse it with SEO query intent: there you build a page for search; here you run dialogue and CRM.",
  ],
  related: [
    "user-intent",
    "retargeting",
    "kpi-menedzhera-prodazh",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
    "trafik-bez-lidov",
  ],
};

/** ES overlay for intent-sotsialnye-prodazhi — same structure as RU JSON / EN. */
export const intentSotsialnyeProdazhiEs: BlogPost = {
  slug: "intent-sotsialnye-prodazhi",
  title: "Intención de compra en social: leer las señales del comprador",
  date: "2018-09-04",
  category: "Digital marketing",
  cover: "/images/blog/intent-sotsialnye-prodazhi/cover.webp",
  excerpt:
    "Social selling y monitorización de intent en feeds y comunidades: «solo soñando / comparando / listo para comprar», respuestas éticas, CRM y retarget — no es lo mismo que el user intent de SEO.",
  lead: [
    "La gente pide consejo de compra en comunidades y feeds mucho antes de aterrizar en un sitio. Intent aquí es la intención dentro de un mensaje: de «algún día quiero esto» a «dónde puedo pedir mañana».",
    "Abajo: niveles de intent, cómo responder sin spam y en qué se diferencia del user intent de SEO (qué quiere una consulta de búsqueda). Solo informativo. Algunas plataformas extranjeras están restringidas en Rusia — quédate en canales lícitos (incluido VK) y en las reglas de cada plataforma. Trata datos personales y chats bajo la ley.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* e Instagram* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Es lo mismo que el user intent de SEO?",
      a: "No. El intent de SEO es lo que alguien quiere de una consulta de búsqueda. Aquí es la intención en un post o comentario de social.",
    },
    {
      q: "¿Qué tipos de intent aparecen?",
      a: "A grosso modo tres: deseo («solo quiero»), comparación (reunir reseñas), compra (listo para pedir). Prioridad y estilo de respuesta difieren.",
    },
    {
      q: "¿Hay que responder a cada post?",
      a: "No. Las señales calientes y relevantes merecen una respuesta rápida y útil. Los deseos fríos sin presupuesto rara vez convierten.",
    },
    {
      q: "¿Se puede enviar una oferta por DM de inmediato?",
      a: "Con cuidado — eso se desliza a spam rápido. Prefiere una respuesta útil en el hilo cuando encaje, luego un follow-up suave bajo las reglas de la plataforma.",
    },
    {
      q: "¿Por qué usar un CRM?",
      a: "Para que los leads no desaparezcan, el status sea visible y los managers no toquen dos veces a la misma persona.",
    },
    {
      q: "¿Hay que hacer retarget de intents «tibios»?",
      a: "Sí cuando tienes una audiencia lícita y consentimiento/reglas de ads. No esperes que un solo touch de ad cierre el deal.",
    },
  ],
  sections: [
    {
      title: "Tres niveles de intent",
      level: 2,
      paras: [
        "«Solo quiero» — un sueño o interés diferido sin disposición a pagar. Bajo valor: anota el tema, no hagas pitch.",
        "«Ya comparando» — sopesa opciones y lee reseñas. Aquí encajan hechos, diferencias, casos y una conversación de ventas calmada.",
        "«Quiero comprar / pedir» — una señal caliente. Importa la velocidad: responde directo, pasa a ventas, abre una ficha en el CRM.",
      ],
      lists: [
        {
          intro: "Cómo reaccionar a una señal:",
          items: [
            "una respuesta útil en el hilo",
            "handoff a un colega con la expertise correcta",
            "crear un lead en el CRM",
            "nurture diferido (contenido o ads) para intents tibios",
          ],
        },
      ],
      links: [
        {
          label: "User intent en SEO",
          href: "/es/blog/user-intent/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Cómo correr el workflow",
      level: 2,
      paras: [
        "Vigilar tus comunidades e hilos públicos relevantes saca demanda antes de un formulario del sitio. Trackea también la negatividad — a veces es una chance de ayudar, no de soltar una lista de precios.",
        "Geo, categorías y temas excluidos cortan ruido. Las auto-rules cubren respuestas rutinarias; los casos complejos necesitan una persona.",
        "La ética gana a la velocidad de cuota: sin vibe de stalking, sin spam. Escribe un playbook de social selling — quién responde, con qué SLA, qué nunca debes prometer.",
      ],
      notes: [
        {
          title: "Plataformas",
          text: "Esta pieza puede mencionar Facebook* e Instagram* (productos de Meta*). En Rusia, la actividad de Meta se reconoce como extremista; usa canales lícitos disponibles. El disclaimer de la página es obligatorio.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Account manager",
          href: "/es/blog/akkaunt-menedzher/",
        },
        {
          label: "KPIs del manager de ventas",
          href: "/es/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
  ],
  closing: [
    "El intent en social es una señal temprana de demanda cuando el equipo responde rápido, al grano y sin spam. No lo confundas con el intent de consultas SEO: allí armas una página para búsqueda; aquí corres diálogo y CRM.",
  ],
  related: [
    "user-intent",
    "retargeting",
    "kpi-menedzhera-prodazh",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
    "trafik-bez-lidov",
  ],
};

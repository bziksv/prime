import type { BlogPost } from "../../../data/blog";

/** EN overlay for kommercheskoe-predlozhenie — same structure as RU JSON. */
export const kommercheskoePredlozhenieEn: BlogPost = {
  slug: "kommercheskoe-predlozhenie",
  title: "How to write a commercial proposal: types, structure, offer",
  date: "2019-03-26",
  category: "Digital marketing",
  cover: "/images/blog/kommercheskoe-predlozhenie/cover-en.webp",
  excerpt:
    "A commercial proposal (sales pitch): cold, warm, and hot; a basic letter structure; headline, benefit, price, objections, and CTA — without spam clichés or pressure.",
  lead: [
    "A commercial proposal is a text where you offer a service or product and invite the next step: a call, a meeting, an invoice. Most often it goes by email; less often via messengers and social.",
    "Below: types by audience “temperature,” working structures, and how to write the headline, offer, benefits, and price. Blasts to bought lists and aggressive spam are out of bounds — write clearly and only where you were asked or have a lawful basis to contact.",
  ],
  faq: [
    {
      q: "Is a commercial proposal just any promo email?",
      a: "Basically yes if there’s an offer. But a strong proposal answers the recipient’s job and leads to a clear action — not “just warming.”",
    },
    {
      q: "How does cold differ from hot?",
      a: "Cold — little context, shorter, benefit up front. Hot — after talks: timing, scope, price, next step personalized.",
    },
    {
      q: "Do I need a price in a cold proposal?",
      a: "Often yes — at least a range or packages. Hiding price to force a lead form filters worse and annoys more.",
    },
    {
      q: "Can I write “best” or “cheapest of all”?",
      a: "Better facts and measurable differences. Vague claims convince poorly and near-spam words hurt deliverability.",
    },
    {
      q: "How long should the letter be?",
      a: "Cold — short. Warm/hot can be longer if deal details matter. The point is they read through to the CTA.",
    },
    {
      q: "Is a USP required?",
      a: "Useful to state how you differ for this audience. A USP with no link to the customer’s pain is just a slogan.",
    },
  ],
  sections: [
    {
      title: "Three proposal types",
      level: 2,
      paras: [
        "Cold — audience with no prior contact. Often a template; goal — reply and qualify. Warm — there was already a touch (lead, meeting, download): more personalization; job — keep the thread and move to a deal.",
        "Hot — after discussing terms: timing, scope, price, responsibilities. Always personal. Goal — lock agreements and close.",
      ],
      lists: [
        {
          intro: "Match tone to temperature:",
          items: [
            "cold — problem + benefit + short CTA",
            "warm — reference to the last touch",
            "hot — deal specifics and the next step",
          ],
        },
      ],
    },
    {
      title: "A structure that works",
      level: 2,
      paras: [
        "Working frame: headline → offer/attention → substance → arguments and price → objections → call to action → contacts. For cold mail you can merge benefit and headline in the first lines.",
        "Alternatives differ in details (footer, P.S., company strengths block), but the logic is the same: why read → what they get → why you → how much → what to do next.",
        "Long cold walls of text more often go to trash. Facts, numbers, and short paragraphs raise reply odds.",
      ],
      lists: [
        {
          intro: "Blocks by purpose:",
          items: [
            "headline with a fact or audience problem",
            "lead: problem → solution in 1–2 sentences",
            "service scope / product specs without fluff",
            "differences and offer (timing, package, bonus) for the customer’s pain",
            "price with reasoning",
            "CTA and contacts",
          ],
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "How to write so they finish reading",
      level: 2,
      paras: [
        "In the headline and lead — the reader’s benefit, with numbers if possible. Avoid spam clichés like “free / today only / guaranteed win” — they cut both trust and deliverability.",
        "Don’t pressure or decide for the customer. The job is clear information; the decision stays theirs. Fewer judgments (“better,” “cheaper”), more checkable differences.",
        "Price must be explained: what the money pays for. The more expensive — the more detail on scope. Close with a positive concrete CTA (call, reply, pick a package), not a vague “looking forward to cooperating.”",
      ],
      notes: [
        {
          title: "Legal note for outreach",
          text: "Mass cold blasts to bought lists risk complaints and blocks. Use lawful channels and a clear signature with company contacts.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "A strong proposal matches audience temperature, answers “why me” fast, and honestly names price and the next step. Build the structure once — then adapt blocks for cold, warm, and hot customers.",
  ],
  related: [
    "utp",
    "kopirayting",
    "kpi-menedzhera-prodazh",
    "nayti-marketologa",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
  ],
};

/** ES overlay for kommercheskoe-predlozhenie — same structure as RU JSON / EN. */
export const kommercheskoePredlozhenieEs: BlogPost = {
  slug: "kommercheskoe-predlozhenie",
  title: "Cómo escribir una propuesta comercial: tipos, estructura, oferta",
  date: "2019-03-26",
  category: "Digital marketing",
  cover: "/images/blog/kommercheskoe-predlozhenie/cover.webp",
  excerpt:
    "Una propuesta comercial (sales pitch): fría, tibia y caliente; estructura básica de la carta; titular, beneficio, precio, objeciones y CTA — sin clichés de spam ni presión.",
  lead: [
    "Una propuesta comercial es un texto donde ofreces un servicio o producto e invitas al siguiente paso: una llamada, una reunión, una factura. Casi siempre va por email; menos por messengers y social.",
    "Abajo: tipos por «temperatura» de audiencia, estructuras que funcionan y cómo escribir titular, oferta, beneficios y precio. Los blasts a listas compradas y el spam agresivo quedan fuera — escribe con claridad y solo donde te pidieron o tienes base legal para contactar.",
  ],
  faq: [
    {
      q: "¿Una propuesta comercial es cualquier email promo?",
      a: "En esencia sí si hay una oferta. Pero una propuesta fuerte responde al trabajo del destinatario y lleva a una acción clara — no «solo calentar».",
    },
    {
      q: "¿En qué se diferencia fría de caliente?",
      a: "Fría — poco contexto, más corta, beneficio al frente. Caliente — tras charlas: plazos, alcance, precio, siguiente paso personalizado.",
    },
    {
      q: "¿Hace falta precio en una propuesta fría?",
      a: "A menudo sí — al menos un rango o paquetes. Ocultar el precio para forzar un formulario de lead filtra peor y molesta más.",
    },
    {
      q: "¿Puedo escribir «el mejor» o «el más barato de todos»?",
      a: "Mejor hechos y diferencias medibles. Las afirmaciones vagas convencen mal y las palabras cercanas al spam dañan la deliverability.",
    },
    {
      q: "¿Cuánto debe durar la carta?",
      a: "Fría — corta. Tibia/caliente puede ser más larga si importan detalles del deal. El punto es que lean hasta el CTA.",
    },
    {
      q: "¿Es obligatorio un USP?",
      a: "Útil enunciar en qué te diferencias para esta audiencia. Un USP sin vínculo al dolor del cliente es solo un eslogan.",
    },
  ],
  sections: [
    {
      title: "Tres tipos de propuesta",
      level: 2,
      paras: [
        "Fría — audiencia sin contacto previo. A menudo una plantilla; meta — respuesta y calificar. Tibia — ya hubo un touch (lead, reunión, descarga): más personalización; trabajo — mantener el hilo y pasar a un deal.",
        "Caliente — tras discutir términos: plazos, alcance, precio, responsabilidades. Siempre personal. Meta — fijar acuerdos y cerrar.",
      ],
      lists: [
        {
          intro: "Ajusta el tono a la temperatura:",
          items: [
            "fría — problema + beneficio + CTA corto",
            "tibia — referencia al último touch",
            "caliente — detalles del deal y el siguiente paso",
          ],
        },
      ],
    },
    {
      title: "Una estructura que funciona",
      level: 2,
      paras: [
        "Marco que funciona: titular → oferta/atención → sustancia → argumentos y precio → objeciones → call to action → contactos. En mail frío puedes fusionar beneficio y titular en las primeras líneas.",
        "Las alternativas difieren en detalles (footer, P.S., bloque de fortalezas de la empresa), pero la lógica es la misma: por qué leer → qué obtienen → por qué tú → cuánto → qué hacer después.",
        "Los muros largos de texto frío van más a menudo a la basura. Hechos, números y párrafos cortos suben las odds de respuesta.",
      ],
      lists: [
        {
          intro: "Bloques por propósito:",
          items: [
            "titular con un hecho o problema de la audiencia",
            "lead: problema → solución en 1–2 frases",
            "alcance del servicio / specs del producto sin relleno",
            "diferencias y oferta (plazos, paquete, bonus) para el dolor del cliente",
            "precio con razonamiento",
            "CTA y contactos",
          ],
        },
      ],
      links: [
        {
          label: "USP (propuesta única de venta)",
          href: "/es/blog/utp/",
        },
        {
          label: "Copywriting",
          href: "/es/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Cómo escribir para que terminen de leer",
      level: 2,
      paras: [
        "En el titular y el lead — el beneficio del lector, con números si puedes. Evita clichés de spam como «gratis / solo hoy / victoria garantizada» — cortan trust y deliverability.",
        "No presiones ni decidas por el cliente. El trabajo es información clara; la decisión es suya. Menos juicios («mejor», «más barato»), más diferencias comprobables.",
        "El precio debe explicarse: qué paga el dinero. Cuanto más caro — más detalle del alcance. Cierra con un CTA positivo y concreto (llamar, responder, elegir un paquete), no un vago «esperamos colaborar».",
      ],
      notes: [
        {
          title: "Nota legal para outreach",
          text: "Los blasts fríos masivos a listas compradas arriesgan quejas y bloqueos. Usa canales lícitos y una firma clara con contactos de la empresa.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "Una propuesta fuerte encaja con la temperatura de la audiencia, responde «por qué yo» rápido y nombra con honestidad el precio y el siguiente paso. Arma la estructura una vez — luego adapta bloques para clientes fríos, tibios y calientes.",
  ],
  related: [
    "utp",
    "kopirayting",
    "kpi-menedzhera-prodazh",
    "nayti-marketologa",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
  ],
};

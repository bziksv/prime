import type { BlogPost } from "../../../data/blog";

/** EN overlay for rassylka-vk — same structure as RU JSON. */
export const rassylkaVkEn: BlogPost = {
  slug: "rassylka-vk",
  title: "VK message broadcasts: how to do it legally",
  date: "2021-08-17",
  category: "SMM",
  cover: "/images/blog/rassylka-vk/cover-en.webp",
  excerpt:
    "Why VK community broadcasts help, how to set up opt-in via official widgets, how to write copy, and why mass friend spam and third-party tools lead to blocks.",
  lead: [
    "A VK broadcast is messages from a community to people who agreed to receive them. News and offers get past the “smart” feed, where a wall post is easy to miss.",
    "Below: why broadcast, how to connect via the VK apps catalog, and how to write short without spam. We don’t cover unofficial “senders” for cold DMs as a how-to — that’s ban territory.",
  ],
  faq: [
    {
      q: "Can I send every friend the same promo template?",
      a: "Mass identical messages with no dialogue are often treated as spam: reports and limits. Better community opt-in broadcast or a warm personal contact.",
    },
    {
      q: "Why is a broadcast better than a wall post?",
      a: "Higher chance the message is noticed (notification). The wall still matters for reach and virality; broadcast is a channel for people who opted in.",
    },
    {
      q: "How often should I write?",
      a: "Rule of thumb: rarely and on purpose (e.g. 1–2 times a week). Frequency depends on niche; watch unsubscribes and reports in stats.",
    },
    {
      q: "Do I need third-party software?",
      a: "For legal broadcasts to community subscribers, official apps from the VK catalog usually suffice. Tools for faking DMs/invites risk a block.",
    },
    {
      q: "What should I write in the first message?",
      a: "Benefit or offer without pressure, short, with a clear button/link. A name variable is a plus if it doesn’t look like script spam.",
    },
  ],
  sections: [
    {
      title: "Why a community needs broadcasts",
      level: 2,
      paras: [
        "A wall post competes with recommendations. A message with a notification raises read chance: promo announcement, order status, a useful digest.",
        "It works with consent and value. Commerce without benefit speeds unsubscribes and reports.",
      ],
      lists: [
        {
          intro: "Benefits when set up right:",
          items: [
            "delivery past the feed",
            "segments (if the widget supports them)",
            "welcome for new subscribers",
            "open/click stats in the service account",
          ],
        },
      ],
      links: [
        {
          label: "VK group growth",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Official path: community widget",
      level: 2,
      paras: [
        "In community management open apps / catalog and add a broadcast service (Senler and peers from the VK catalog — the set changes). Connect it to the public with admin rights.",
        "Turn on community messages. Add a broadcast subscribe button and snippet on the page. Subscribe yourself — check how the message looks.",
      ],
      lists: [
        {
          intro: "Basic setup:",
          items: [
            "3–5 template types (news, promo, value)",
            "welcome for a new subscriber",
            "“site” / “catalog” buttons",
            "name variables when possible",
            "schedule and audience segment",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Unofficial exe “broadcast to everyone” tools bypass platform rules. Even if “not banned yet” — business risk beats the short-term gain.",
        },
      ],
    },
    {
      title: "Copy and frequency",
      level: 2,
      paras: [
        "Keep it short: fact → benefit → next step. Long walls in DMs don’t get read. Don’t copy the wall verbatim — give an exclusive or a more direct CTA.",
      ],
      lists: [
        {
          intro: "Working moves:",
          items: [
            "address and specifics",
            "1–2 paragraphs max",
            "one main link",
            "morning/a clear slot by stats, not “blasting 24/7”",
            "watch reports and unsubscribes after each send",
          ],
        },
      ],
    },
    {
      title: "Audience and “cold” DMs",
      level: 2,
      paras: [
        "At the start warm opt-ins with value or a broadcast-only offer. The tighter the segment, the fewer spam reports.",
        "Broadcasting templates to friends and strangers in batches is bad practice: DM/invite limits, reports, blocks. If you need personal contact — write on purpose after an intro, not via script.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "mass invites and identical “hi buy this”",
            "adult content / insults",
            "promises of “100% ban protection” from gray software",
            "fake followers just to grow a broadcast list",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Legal VK broadcast is opt-in via the community and official apps, short useful copy, and moderate frequency. Cold mass-send and gray tools aren’t a growth strategy — they’re a path to limits.",
      ],
    },
  ],
};

/** ES overlay for rassylka-vk — same structure as RU JSON / EN. */
export const rassylkaVkEs: BlogPost = {
  slug: "rassylka-vk",
  title: "Broadcasts de mensajes en VK: cómo hacerlo de forma legal",
  date: "2021-08-17",
  category: "SMM",
  cover: "/images/blog/rassylka-vk/cover.webp",
  excerpt:
    "Por qué ayudan los broadcasts de comunidad en VK, cómo montar el opt-in con widgets oficiales, cómo escribir el copy y por qué el spam masivo a amigos y las herramientas de terceros llevan a bloques.",
  lead: [
    "Un broadcast de VK son mensajes de una comunidad a personas que aceptaron recibirlos. Noticias y ofertas pasan el feed «inteligente», donde un post en el muro es fácil de perder.",
    "Abajo: por qué hacer broadcast, cómo conectar vía el catálogo de apps de VK y cómo escribir corto sin spam. No cubrimos «senders» no oficiales para DMs en frío como how-to — eso es territorio de ban.",
  ],
  faq: [
    {
      q: "¿Puedo mandar a cada amigo la misma plantilla promo?",
      a: "Mensajes idénticos en masa sin diálogo suelen tratarse como spam: reports y límites. Mejor broadcast con opt-in de la comunidad o un contacto personal tibio.",
    },
    {
      q: "¿Por qué un broadcast es mejor que un post en el muro?",
      a: "Más probabilidad de que se note el mensaje (notificación). El muro sigue importando para alcance y viralidad; el broadcast es un canal para quien optó in.",
    },
    {
      q: "¿Con qué frecuencia escribir?",
      a: "Regla práctica: poco y a propósito (p. ej. 1–2 veces por semana). La frecuencia depende del nicho; mira bajas y reports en las stats.",
    },
    {
      q: "¿Hace falta software de terceros?",
      a: "Para broadcasts legales a suscriptores de la comunidad suelen bastar apps oficiales del catálogo de VK. Herramientas para fingir DMs/invites arriesgan un bloqueo.",
    },
    {
      q: "¿Qué escribir en el primer mensaje?",
      a: "Beneficio u oferta sin presión, corto, con un botón/enlace claro. Una variable de nombre es un plus si no parece spam de script.",
    },
  ],
  sections: [
    {
      title: "Por qué una comunidad necesita broadcasts",
      level: 2,
      paras: [
        "Un post en el muro compite con recomendaciones. Un mensaje con notificación sube la chance de lectura: anuncio de promo, estado del pedido, un digest útil.",
        "Funciona con consentimiento y valor. Comercio sin beneficio acelera bajas y reports.",
      ],
      lists: [
        {
          intro: "Beneficios cuando está bien montado:",
          items: [
            "entrega más allá del feed",
            "segmentos (si el widget los soporta)",
            "welcome para nuevos suscriptores",
            "stats de apertura/clic en la cuenta del servicio",
          ],
        },
      ],
      links: [
        {
          label: "Crecimiento de un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Vía oficial: widget de la comunidad",
      level: 2,
      paras: [
        "En la gestión de la comunidad abre apps / catálogo y añade un servicio de broadcast (Senler y pares del catálogo de VK — el set cambia). Conéctalo al público con derechos de admin.",
        "Activa los mensajes de la comunidad. Añade un botón de suscripción al broadcast y un snippet en la página. Suscríbete tú — comprueba cómo se ve el mensaje.",
      ],
      lists: [
        {
          intro: "Setup básico:",
          items: [
            "3–5 tipos de plantilla (noticias, promo, valor)",
            "welcome para un suscriptor nuevo",
            "botones «sitio» / «catálogo»",
            "variables de nombre cuando sea posible",
            "horario y segmento de audiencia",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Las herramientas exe no oficiales de «broadcast a todos» saltan las reglas de la plataforma. Aunque «aún no esté baneado» — el riesgo de negocio gana a la ganancia a corto plazo.",
        },
      ],
    },
    {
      title: "Copy y frecuencia",
      level: 2,
      paras: [
        "Manténlo corto: hecho → beneficio → siguiente paso. Los muros largos en DMs no se leen. No copies el muro tal cual — da un exclusivo o un CTA más directo.",
      ],
      lists: [
        {
          intro: "Movidas que funcionan:",
          items: [
            "trato y especificidad",
            "1–2 párrafos como máximo",
            "un enlace principal",
            "mañana/un hueco claro según stats, no «bombardear 24/7»",
            "mirar reports y bajas tras cada envío",
          ],
        },
      ],
    },
    {
      title: "Audiencia y DMs «en frío»",
      level: 2,
      paras: [
        "Al inicio calienta los opt-ins con valor o una oferta solo de broadcast. Cuanto más cerrado el segmento, menos reports de spam.",
        "Mandar plantillas a amigos y desconocidos en lotes es mala práctica: límites de DM/invite, reports, bloques. Si necesitas contacto personal — escribe a propósito tras una intro, no vía script.",
      ],
      lists: [
        {
          intro: "Qué evitar:",
          items: [
            "invites masivos e idénticos «hola compra esto»",
            "contenido adulto / insultos",
            "promesas de «protección 100% contra ban» de software gris",
            "seguidores falsos solo para crecer una lista de broadcast",
          ],
        },
      ],
    },
    {
      title: "Cierre breve",
      level: 2,
      paras: [
        "Un broadcast legal en VK es opt-in vía la comunidad y apps oficiales, copy corto y útil, y frecuencia moderada. El envío masivo en frío y las herramientas grises no son estrategia de crecimiento — son camino a límites.",
      ],
    },
  ],
};

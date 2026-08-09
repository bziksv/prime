import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-plan-instagram — same structure as RU JSON. */
export const kontentPlanInstagramEn: BlogPost = {
  slug: "kontent-plan-instagram",
  title: "Instagram content plan: how to build one without burning out",
  date: "2022-01-14",
  category: "SMM",
  cover: "/images/blog/kontent-plan-instagram/cover-en.webp",
  excerpt:
    "How to build a working Instagram content plan: goal, categories, post mix, schedule, ideas, and results review.",
  lead: [
    "A content plan is a publishing calendar tied to the account goal: what, why, and when goes out. Without it you easily slip into random posts or wall-to-wall sales.",
    "Below: a plan frame, format mix, and a monthly checklist. Planner UIs change — the system matters more than a specific app.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How far ahead should I plan?",
      a: "Beginners do well with 2–4 weeks plus a backlog of ideas. A full month — once categories and production are stable.",
    },
    {
      q: "How many selling posts is normal?",
      a: "Guide: a minority of the feed. Mixes like 60% value / 20% engagement / 20% sales often work — tune to your niche.",
    },
    {
      q: "Do I need a separate Stories plan?",
      a: "Yes, at least in short blocks: announcements, behind the scenes, Q&A, CTA. Stories shouldn’t be a random afterthought.",
    },
    {
      q: "Where do content ideas come from?",
      a: "Audience questions, competitors, your cases, seasonality, archive of winning posts, related channels.",
    },
    {
      q: "What if the plan slips?",
      a: "Keep 5–7 evergreen drafts. Move slots — don’t drop the rhythm for two weeks.",
    },
  ],
  sections: [
    {
      title: "Why you need a content plan",
      level: 2,
      paras: [
        "A plan removes daily “what do I post” panic and ties posts to a goal: traffic, leads, expertise, warm-up before a launch.",
        "Even a strong account without rhythm loses reach and trust. Cadence is part of the product.",
      ],
    },
    {
      title: "How to build a plan in 5 steps",
      level: 2,
      paras: [
        "First position and goal, then categories, mix, calendar, and production.",
      ],
      lists: [
        {
          items: [
            "Topic and account role: education, blog, shop, personal brand",
            "Goal for the period: followers, leads, warm-up, reputation",
            "Categories and formats: post, carousel, Reels/short clips, Stories",
            "Mix of value / engagement / sales",
            "Slot schedule + owners + shoot deadlines",
          ],
        },
      ],
      notes: [
        {
          title: "Link to the profile",
          kind: "tip",
          text: "A plan is useless if the header has no offer. Clear profile positioning first, then the calendar.",
        },
      ],
      links: [
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Categories and mix",
      level: 2,
      paras: [
        "Categories build recognition: “mistake breakdown,” “before/after,” “Q&A,” “product news.” The mix protects from ad noise.",
      ],
      lists: [
        {
          intro: "A workable weekly mix:",
          items: [
            "value / education",
            "social proof (review, case)",
            "engagement (question, poll)",
            "sale / offer",
            "behind the scenes / brand personality",
          ],
        },
      ],
      tables: [
        {
          caption: "Sample weekly grid (template)",
          headers: ["Day", "Format", "Rubric", "CTA"],
          rows: [
            ["Mon", "Carousel", "Value", "Save"],
            ["Wed", "Short clip", "Breakdown", "Ask a question"],
            ["Fri", "Post", "Case/review", "DM us"],
            ["Sat–Sun", "Stories", "Behind the scenes + poll", "Reply"],
          ],
        },
      ],
    },
    {
      title: "Post ideas",
      level: 2,
      paras: [
        "Take ideas from customer conversations and from what already worked in insights — not only from someone else’s trends.",
      ],
      lists: [
        {
          intro: "Universal:",
          items: [
            "answer to a frequent question",
            "myth vs fact in the niche",
            "5-point checklist",
            "beginner mistake",
            "seasonal announcement",
          ],
        },
        {
          intro: "Selling (without aggression):",
          items: [
            "offer with terms and deadline",
            "plan/package comparison",
            "what’s included in the service",
            "how an order works",
            "spots left / book a slot",
          ],
        },
        {
          intro: "Informational:",
          items: [
            "product news",
            "case breakdown",
            "“how to choose” guide",
            "month wrap-up",
          ],
        },
      ],
    },
    {
      title: "Schedule and production",
      level: 2,
      paras: [
        "Tie slots to real shoot and moderation time, not a mythical “perfect hour.” Use your own activity insights.",
        "Keep a draft backlog: 5 evergreen posts and a pack of Stories scripts for when the plan slips.",
      ],
      lists: [
        {
          intro: "Useful plan-table columns:",
          items: [
            "date / time",
            "format",
            "topic and thesis",
            "status (idea → shot → ready → published)",
            "owner",
            "link to file / draft",
          ],
        },
      ],
    },
    {
      title: "Review and tools",
      level: 2,
      paras: [
        "Once a week check what people saved and commented. Drop weak categories, double down on strong ones. The plan is a living document.",
        "Spreadsheets, Notion, built-in platform schedulers — pick what you’ll actually use. 2022 tools aren’t sacred.",
      ],
      lists: [
        {
          intro: "Mini weekly review:",
          items: [
            "three strongest posts",
            "a miss and a hypothesis why",
            "how many selling slots brought leads",
            "what moves to next week",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsibilities",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
};

/** ES overlay for kontent-plan-instagram — same structure as RU JSON / EN. */
export const kontentPlanInstagramEs: BlogPost = {
  slug: "kontent-plan-instagram",
  title: "Plan de contenido de Instagram: cómo armarlo sin quemarte",
  date: "2022-01-14",
  category: "SMM",
  cover: "/images/blog/kontent-plan-instagram/cover.webp",
  excerpt:
    "Cómo armar un plan de contenido de Instagram que funcione: objetivo, categorías, mix de posts, calendario, ideas y revisión de resultados.",
  lead: [
    "Un plan de contenido es un calendario de publicación atado al objetivo de la cuenta: qué, por qué y cuándo sale. Sin él es fácil caer en posts al azar o en ventas de pared a pared.",
    "Abajo: un marco de plan, mix de formatos y un checklist mensual. Las UI de planners cambian — el sistema importa más que una app concreta.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Con cuánta antelación planifico?",
      a: "A los principiantes les va bien 2–4 semanas más un backlog de ideas. Un mes completo — cuando categorías y producción estén estables.",
    },
    {
      q: "¿Cuántos posts de venta son normales?",
      a: "Guía: una minoría del feed. Mixes tipo 60% valor / 20% engagement / 20% ventas suelen funcionar — ajústalos a tu nicho.",
    },
    {
      q: "¿Hace falta un plan aparte de Stories?",
      a: "Sí, al menos en bloques cortos: anuncios, behind the scenes, Q&A, CTA. Las Stories no deberían ser un afterthought al azar.",
    },
    {
      q: "¿De dónde salen las ideas de contenido?",
      a: "Preguntas de la audiencia, competidores, tus casos, estacionalidad, archivo de posts ganadores, canales afines.",
    },
    {
      q: "¿Qué pasa si el plan se desliza?",
      a: "Mantén 5–7 borradores evergreen. Mueve slots — no sueltes el ritmo dos semanas.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas un plan de contenido",
      level: 2,
      paras: [
        "Un plan quita el pánico diario de «qué publico» y ata los posts a un objetivo: tráfico, leads, expertise, calentamiento antes de un lanzamiento.",
        "Incluso una cuenta fuerte sin ritmo pierde alcance y confianza. La cadencia es parte del producto.",
      ],
    },
    {
      title: "Cómo armar un plan en 5 pasos",
      level: 2,
      paras: [
        "Primero posición y objetivo, luego categorías, mix, calendario y producción.",
      ],
      lists: [
        {
          items: [
            "Tema y rol de la cuenta: educación, blog, tienda, marca personal",
            "Objetivo del periodo: followers, leads, calentamiento, reputación",
            "Categorías y formatos: post, carrusel, Reels/clips cortos, Stories",
            "Mix de valor / engagement / ventas",
            "Calendario de slots + owners + plazos de rodaje",
          ],
        },
      ],
      notes: [
        {
          title: "Vínculo con el perfil",
          kind: "tip",
          text: "Un plan no sirve si la cabecera no tiene oferta. Primero posicionamiento claro del perfil, luego el calendario.",
        },
      ],
      links: [
        {
          label: "Diseño de la página de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Categorías y mix",
      level: 2,
      paras: [
        "Las categorías construyen reconocimiento: «desglose de error», «antes/después», «Q&A», «novedades de producto». El mix protege del ruido de ads.",
      ],
      lists: [
        {
          intro: "Un mix semanal workable:",
          items: [
            "valor / educación",
            "social proof (reseña, caso)",
            "engagement (pregunta, poll)",
            "venta / oferta",
            "behind the scenes / personalidad de marca",
          ],
        },
      ],
      tables: [
        {
          caption: "Grid semanal de muestra (plantilla)",
          headers: ["Día", "Formato", "Rúbrica", "CTA"],
          rows: [
            ["Lun", "Carrusel", "Valor", "Guardar"],
            ["Mié", "Clip corto", "Desglose", "Haz una pregunta"],
            ["Vie", "Post", "Caso/reseña", "Escríbenos por DM"],
            ["Sáb–Dom", "Stories", "Behind the scenes + poll", "Responder"],
          ],
        },
      ],
    },
    {
      title: "Ideas de posts",
      level: 2,
      paras: [
        "Saca ideas de conversaciones con clientes y de lo que ya funcionó en insights — no solo de tendencias ajenas.",
      ],
      lists: [
        {
          intro: "Universales:",
          items: [
            "respuesta a una pregunta frecuente",
            "mito vs hecho en el nicho",
            "checklist de 5 puntos",
            "error de principiante",
            "anuncio estacional",
          ],
        },
        {
          intro: "De venta (sin agresividad):",
          items: [
            "oferta con términos y deadline",
            "comparación de planes/paquetes",
            "qué incluye el servicio",
            "cómo funciona un pedido",
            "plazas restantes / reserva un slot",
          ],
        },
        {
          intro: "Informativos:",
          items: [
            "novedades de producto",
            "desglose de un caso",
            "guía «cómo elegir»",
            "cierre del mes",
          ],
        },
      ],
    },
    {
      title: "Calendario y producción",
      level: 2,
      paras: [
        "Ata los slots al tiempo real de rodaje y moderación, no a una «hora perfecta» mítica. Usa tus propios insights de actividad.",
        "Mantén un backlog de borradores: 5 posts evergreen y un pack de guiones de Stories para cuando el plan se deslice.",
      ],
      lists: [
        {
          intro: "Columnas útiles de la tabla del plan:",
          items: [
            "fecha / hora",
            "formato",
            "tema y tesis",
            "estado (idea → rodado → listo → publicado)",
            "owner",
            "enlace al archivo / borrador",
          ],
        },
      ],
    },
    {
      title: "Revisión y herramientas",
      level: 2,
      paras: [
        "Una vez a la semana revisa qué se guardó y comentó. Suelta categorías débiles, dobla las fuertes. El plan es un documento vivo.",
        "Hojas de cálculo, Notion, schedulers de la plataforma — elige lo que de verdad uses. Las tools de 2022 no son sagradas.",
      ],
      lists: [
        {
          intro: "Mini revisión semanal:",
          items: [
            "tres posts más fuertes",
            "un fallo y una hipótesis del porqué",
            "cuántos slots de venta trajeron leads",
            "qué pasa a la semana siguiente",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsabilidades",
          href: "/es/blog/menedzher-smm/",
        },
      ],
    },
  ],
};

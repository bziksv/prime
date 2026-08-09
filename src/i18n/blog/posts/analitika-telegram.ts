import type { BlogPost } from "../../../data/blog";

/** EN overlay for analitika-telegram — same structure as RU JSON. */
export const analitikaTelegramEn: BlogPost = {
  slug: "analitika-telegram",
  title: "Telegram channel analytics: views, reach, and what to watch",
  date: "2020-02-10",
  category: "SMM",
  cover: "/images/blog/analitika-telegram/cover-en.webp",
  excerpt:
    "How to read Telegram channel stats: how views differ from reach, which metrics to watch in Insights and third-party tools — without the outdated “Telegram has no analytics.”",
  lead: [
    "On a Telegram post the eye counter shows views, not magical ER. Mixing “reach = views = engagement” breaks how you judge channels and ad buys.",
    "Below: how the basic numbers work, what to add from official channel stats and external summaries, and why buying views is useless for business. Launching a channel is covered separately.",
  ],
  faq: [
    {
      q: "Are post views unique people?",
      a: "Not always one-to-one: reopening can increase the counter. For ads, watch dynamics and share of subscribers — not a single eye figure.",
    },
    {
      q: "Is there official Telegram analytics?",
      a: "Channels with enough subscribers get Insights (reach, growth, sources — the set depends on version). Check Telegram Help.",
    },
    {
      q: "Can you compute classic ER like on Instagram?",
      a: "Partly: reactions, comments (if enabled), forwards/shares. Fix your own formula and compare the channel to itself.",
    },
    {
      q: "Do you need TGStat and similar tools?",
      a: "Handy for comparing channels and buys. Don’t give them admin access without need; for your own channel Insights + a spreadsheet often suffice.",
    },
    {
      q: "Should you buy Telegram views?",
      a: "No: they distort metrics, wreck ad pricing, and trust. Better a strong post and honest distribution.",
    },
  ],
  sections: [
    {
      title: "Why Telegram analytics feels different",
      level: 2,
      paras: [
        "A channel is an author feed: no familiar like grid like IG 2015. You do get post views, reactions, optional comments, and forwards.",
        "Old guides said “there’s no stats” — that’s no longer true for many channels. Base: post counter + Insights + external catalogs by task.",
        "Chats and channels measure differently: in a chat, messages and active members matter; in a channel — watch-through and base growth.",
      ],
      links: [
        {
          label: "Telegram channel from scratch",
          href: "/en/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Views and reach: don’t mix them",
      level: 2,
      paras: [
        "The post counter grows from opens. One person can add several views on revisits — bake in a margin of error.",
        "Reach (when available in Insights) is closer to “how many people saw” over a period. For ads, compare post views to subscriber count: an abnormally high % on a dead base is a fake-views red flag.",
        "Average views over a week beat a one-off record after a paid placement.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Don’t blindly divide views by subscribers and call it ER: without reactions/forwards that’s a view share, not engagement.",
        },
      ],
    },
    {
      title: "What to watch regularly",
      level: 2,
      paras: [
        "Subscriber growth/churn and where they came from (if Insights shows sources).",
        "Views by post type: long breakdown vs short announcement vs creative.",
        "Reactions and forwards — a “saved / sent to a friend” signal.",
        "Link clicks — via UTM to the site or bot, otherwise the channel likes itself with no leads.",
      ],
      lists: [
        {
          intro: "Mini dashboard for the week:",
          items: [
            "subscribers start/end",
            "median post views",
            "top-3 and bottom-3 materials",
            "site/bot clicks with UTM",
          ],
        },
      ],
    },
    {
      title: "External metrics and ads",
      level: 2,
      paras: [
        "Catalogs like TGStat compute ERR, citation, mentions — handy when buying ads from channels. Check data freshness and sample.",
        "Before a placement, look at view history: a steady sawtooth after each post is healthier than a permanent ceiling on every post at once.",
        "Complex DIY KPIs from old articles can be simplified: view share of base + reactions + clicks.",
      ],
    },
    {
      title: "Typical number-reading mistakes",
      level: 2,
      paras: [
        "Treating hundreds of millions of messenger users as your audience — no; look at the channel niche.",
        "Judging a channel only by subscriber count without views and audience quality.",
        "Comparing a prime-time ad post with Friday-evening organic without adjusting for time.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The view counter is post opens; engagement is counted separately.",
        "Insights + UTM cover 80% of jobs without exotic formulas.",
        "Fake views break both analytics and ad pricing.",
      ],
    },
  ],
  closing: [
    "Once a week write down median views and two or three takeaways by column — enough to fix content faster than hunting a perfect index from someone else’s spreadsheet.",
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "telegram-boty",
    "vovlechennost-socseti",
    "analitika-kontent-marketinga",
    "oshibki-smm",
  ],
};

/** ES overlay for analitika-telegram — same structure as RU JSON / EN. */
export const analitikaTelegramEs: BlogPost = {
  slug: "analitika-telegram",
  title: "Analítica de canales Telegram: views, alcance y qué mirar",
  date: "2020-02-10",
  category: "SMM",
  cover: "/images/blog/analitika-telegram/cover.webp",
  excerpt:
    "Cómo leer las stats de un canal Telegram: en qué se diferencian views y alcance, qué métricas mirar en Insights y herramientas de terceros — sin el «Telegram no tiene analytics» obsoleto.",
  lead: [
    "En un post de Telegram el contador de ojos muestra views, no un ER mágico. Mezclar «alcance = views = engagement» rompe cómo juzgas canales y compras de ads.",
    "Abajo: cómo funcionan los números básicos, qué sumar de las stats oficiales del canal y de resúmenes externos, y por qué comprar views no sirve al negocio. El lanzamiento de un canal se cubre aparte.",
  ],
  faq: [
    {
      q: "¿Las views del post son personas únicas?",
      a: "No siempre uno a uno: reabrir puede subir el contador. Para ads, mira la dinámica y la cuota de suscriptores — no una sola cifra de ojos.",
    },
    {
      q: "¿Hay analytics oficiales de Telegram?",
      a: "Los canales con suficientes suscriptores tienen Insights (alcance, crecimiento, fuentes — el set depende de la versión). Consulta Telegram Help.",
    },
    {
      q: "¿Se puede calcular un ER clásico como en Instagram?",
      a: "En parte: reacciones, comentarios (si están activados), forwards/shares. Fija tu propia fórmula y compara el canal consigo mismo.",
    },
    {
      q: "¿Hacen falta TGStat y herramientas similares?",
      a: "Cómodas para comparar canales y compras. No les des acceso de admin sin necesidad; para tu propio canal a menudo bastan Insights + una hoja de cálculo.",
    },
    {
      q: "¿Debes comprar views de Telegram?",
      a: "No: distorsionan métricas, rompen el pricing de ads y la confianza. Mejor un post fuerte y distribución honesta.",
    },
  ],
  sections: [
    {
      title: "Por qué la analítica de Telegram se siente distinta",
      level: 2,
      paras: [
        "Un canal es un feed de autor: no hay la rejilla familiar de likes como en IG 2015. Sí hay views del post, reacciones, comentarios opcionales y forwards.",
        "Las guías antiguas decían «no hay stats» — eso ya no es cierto para muchos canales. Base: contador del post + Insights + catálogos externos según la tarea.",
        "Chats y canales se miden distinto: en un chat importan mensajes y miembros activos; en un canal — visionado y crecimiento de la base.",
      ],
      links: [
        {
          label: "Canal Telegram desde cero",
          href: "/es/blog/telegram-kanal/",
        },
      ],
    },
    {
      title: "Views y alcance: no los mezcles",
      level: 2,
      paras: [
        "El contador del post crece con las aperturas. Una persona puede sumar varias views al revisitar — mete un margen de error.",
        "El alcance (cuando está en Insights) está más cerca de «cuánta gente vio» en un periodo. Para ads, compara views del post con el número de suscriptores: un % anormalmente alto en una base muerta es bandera roja de views falsas.",
        "La media de views en una semana gana a un récord puntual tras una colocación de pago.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No dividas a ciegas views entre suscriptores y lo llames ER: sin reacciones/forwards eso es cuota de visión, no engagement.",
        },
      ],
    },
    {
      title: "Qué mirar con regularidad",
      level: 2,
      paras: [
        "Crecimiento/churn de suscriptores y de dónde vinieron (si Insights muestra fuentes).",
        "Views por tipo de post: desglose largo vs anuncio corto vs creative.",
        "Reacciones y forwards — señal de «guardado / enviado a un amigo».",
        "Clics en enlaces — vía UTM al sitio o bot; si no, el canal se gusta a sí mismo sin leads.",
      ],
      lists: [
        {
          intro: "Mini dashboard de la semana:",
          items: [
            "suscriptores inicio/fin",
            "mediana de views por post",
            "los 3 mejores y los 3 peores materiales",
            "clics a sitio/bot con UTM",
          ],
        },
      ],
    },
    {
      title: "Métricas externas y ads",
      level: 2,
      paras: [
        "Catálogos como TGStat calculan ERR, citación, menciones — cómodos al comprar ads en canales. Revisa frescura de datos y muestra.",
        "Antes de una colocación, mira el historial de views: un dientes de sierra estable tras cada post es más sano que un techo permanente en todos los posts a la vez.",
        "Los KPIs caseros complejos de artículos viejos se pueden simplificar: cuota de views de la base + reacciones + clics.",
      ],
    },
    {
      title: "Errores típicos al leer números",
      level: 2,
      paras: [
        "Tratar cientos de millones de usuarios del messenger como tu audiencia — no; mira el nicho del canal.",
        "Juzgar un canal solo por el número de suscriptores sin views ni calidad de audiencia.",
        "Comparar un post de ads en hora punta con orgánico del viernes por la noche sin ajustar por el momento.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "El contador de views son aperturas del post; el engagement se cuenta aparte.",
        "Insights + UTM cubren el 80% de los trabajos sin fórmulas exóticas.",
        "Las views falsas rompen tanto la analítica como el pricing de ads.",
      ],
    },
  ],
  closing: [
    "Una vez a la semana anota la mediana de views y dos o tres aprendizajes por columna — basta para corregir el contenido más rápido que cazar un índice perfecto de la hoja de otro.",
  ],
  related: [
    "telegram-kanal",
    "telegram",
    "oshibki-smm",
    "telegram-boty",
    "vovlechennost-socseti",
    "analitika-kontent-marketinga",
  ],
};

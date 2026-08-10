import type { BlogPost } from "../../../data/blog";

/** EN overlay for vovlechennost-instagram — same structure as RU JSON. */
export const vovlechennostInstagramEn: BlogPost = {
  slug: "vovlechennost-instagram",
  title: "Instagram engagement: ER and profile analysis",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/vovlechennost-instagram/cover-en.webp",
  excerpt:
    "What Engagement Rate means on Instagram, which formulas exist, and how to read ER with profile stats — without the “mandatory 3%” myth and without fake engagement.",
  lead: [
    "Engagement (ER) shows what share of the audience reacts to content: likes, comments, saves, replies. It’s not follower count and not a sales guarantee, but a strong signal of interest and follower quality.",
    "Below: terms, where to get the numbers, and how to grow the white way. Benchmarks like “3% at 10k” from old roundups belong to another era, not your KPI. Insights menus change; you need a professional account. The Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are ER and reach the same?",
      a: "No. Reach is how many unique people saw it. ER is reaction share vs. followers, reach, or post — depending on the formula.",
    },
    {
      q: "What ER is “good”?",
      a: "Compare yourself to yourself and your niche, not a universal percent from a 2020 article. Smaller accounts often run higher percentages.",
    },
    {
      q: "Will mass-following help?",
      a: "It often inflates a dead follower base and drops ER. Relevant growth and content work better.",
    },
    {
      q: "Where do I see the data?",
      a: "In professional-account stats: reach, interactions, saves, replies in Direct and Stories.",
    },
    {
      q: "Will buying likes raise ER?",
      a: "It briefly distorts the number and risks quality limits. Don’t buy engagement.",
    },
  ],
  sections: [
    {
      title: "What counts as engagement",
      level: 2,
      paras: [
        "ER is an interest index for content. In the feed, thousands may scroll past; a few react. Algorithms more often deliver what people respond to: comments, saves, shares, Story replies.",
        "Low ER with a big follower base often means a noisy audience, weak content, or few reasons to act — not “Instagram broke.”",
      ],
      links: [
        {
          label: "Instagram stats",
          href: "/en/blog/statistika-instagram/",
        },
        {
          label: "Instagram reach",
          href: "/en/blog/ohvat-instagram/",
        },
      ],
    },
    {
      title: "Formulas: DER, ER by reach, by post",
      level: 2,
      paras: [
        "Daily ER looks at reactions per day — handy for rhythm, but sensitive to post frequency and repeat commenters.",
        "ER by reach is closer to delivery quality: how many of those who saw it reacted. Reach swings with recommendations — compare periods honestly.",
        "ER by post — reactions to a specific publish divided by followers or that post’s reach. Helps find strong formats. ER by views and “per 100 followers” are supporting cuts, not the final truth.",
      ],
      lists: [
        {
          intro: "Practical for a report:",
          items: [
            "lock one primary formula",
            "count post ER and the period average",
            "watch saves and replies separately — often worth more than a like",
            "don’t mix ad and organic reach without a label",
            "don’t invent metrics “by eye” without a method",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Chasing someone else’s “normal percent.” Compare your strongest and weakest posts — more useful than a benchmark table.",
        },
      ],
    },
    {
      title: "Where to get numbers in the profile",
      level: 2,
      paras: [
        "Switch to a professional account and open post stats: reach, impressions, interactions. For Stories — replies and taps.",
        "Without business or creator mode, some metrics won’t show. Icon UI has changed — look for “Insights” or stats on the profile or post.",
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to raise ER without gray tactics",
      level: 2,
      paras: [
        "Rebuild the audience: who actually reacts, which topics get saves. Tweak the content plan: value plus emotion plus a question, not only a storefront.",
        "A unified visual language helps, but “pretty photos” without meaning no longer hold. Mix sales with behind-the-scenes and case studies. Hashtags — relevant, not a junk pile.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "hook in the first caption line",
            "one clear CTA (ask / save / message)",
            "reply to comments in the first hours",
            "Stories and polls as dialogue",
            "no fake engagement or mass-follow for the number",
          ],
        },
      ],
      links: [
        {
          label: "Photo caption",
          href: "/en/blog/podpis-foto-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Audience interaction",
      level: 2,
      paras: [
        "ER grows where there’s conversation: replies, mentions, “you asked — we answer” series. Ignoring comments kills delivery of later posts.",
        "Look past likes: messages, link clicks, saves — closer to business results.",
      ],
      links: [
        {
          label: "Instagram Direct",
          href: "/en/blog/instagram-direct/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Engagement is about reaction, not follower count. Pick a formula, count regularly, grow with honest content and dialogue.",
        "Universal percents from old articles aren’t law. Your trend and post comparison matter more.",
      ],
    },
  ],
  closing: [
    "Open stats for recent posts, count ER with one formula, and strengthen formats with saves and replies — so engagement becomes a manageable metric, not a scare story.",
  ],
  related: [
    "statistika-instagram",
    "ohvat-instagram",
    "biznes-akkaunt-instagram",
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "instagram-direct",
  ],
};

/** ES overlay for vovlechennost-instagram — same structure as RU JSON / EN. */
export const vovlechennostInstagramEs: BlogPost = {
  slug: "vovlechennost-instagram",
  title: "Engagement en Instagram: ER y análisis del perfil",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/vovlechennost-instagram/cover-es.webp",
  excerpt:
    "Qué significa Engagement Rate en Instagram, qué fórmulas existen y cómo leer el ER con stats del perfil — sin el mito del «3% obligatorio» y sin engagement falso.",
  lead: [
    "El engagement (ER) muestra qué parte de la audiencia reacciona al contenido: likes, comentarios, saves, replies. No es el conteo de followers ni una garantía de ventas, pero sí una señal fuerte de interés y calidad de la audiencia.",
    "Abajo: términos, de dónde sacar los números y cómo crecer en blanco. Benchmarks como «3% a 10k» de roundups viejos pertenecen a otra era, no a tu KPI. Los menús de Insights cambian; hace falta una cuenta profesional. El disclaimer de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿ER y reach son lo mismo?",
      a: "No. Reach es cuántas personas únicas lo vieron. ER es la cuota de reacción frente a followers, reach o post — según la fórmula.",
    },
    {
      q: "¿Qué ER es «bueno»?",
      a: "Compárate contigo y con tu nicho, no con un porcentaje universal de un artículo de 2020. Las cuentas más pequeñas a menudo tienen porcentajes más altos.",
    },
    {
      q: "¿Ayuda el mass-following?",
      a: "A menudo infla una base de followers muertos y baja el ER. Crecimiento relevante y contenido funcionan mejor.",
    },
    {
      q: "¿Dónde veo los datos?",
      a: "En las stats de cuenta profesional: reach, interactions, saves, replies en Direct y Stories.",
    },
    {
      q: "¿Comprar likes sube el ER?",
      a: "Distorsiona el número un rato y arriesga límites de calidad. No compres engagement.",
    },
  ],
  sections: [
    {
      title: "Qué cuenta como engagement",
      level: 2,
      paras: [
        "ER es un índice de interés por el contenido. En el feed, miles pueden pasar de largo; unos pocos reaccionan. Los algoritmos suelen entregar más lo que la gente responde: comentarios, saves, shares, replies de Stories.",
        "ER bajo con una base grande de followers a menudo significa audiencia ruidosa, contenido débil o pocas razones para actuar — no «Instagram se rompió».",
      ],
      links: [
        {
          label: "Stats de Instagram",
          href: "/es/blog/statistika-instagram/",
        },
        {
          label: "Reach en Instagram",
          href: "/es/blog/ohvat-instagram/",
        },
      ],
    },
    {
      title: "Fórmulas: DER, ER por reach, por post",
      level: 2,
      paras: [
        "El ER diario mira reacciones por día — útil para el ritmo, pero sensible a la frecuencia de posts y a comentaristas repetidos.",
        "ER por reach está más cerca de la calidad de entrega: cuántos de los que lo vieron reaccionaron. El reach oscila con recomendaciones — compara periodos con honestidad.",
        "ER por post — reacciones a una publicación concreta divididas por followers o por el reach de ese post. Ayuda a encontrar formatos fuertes. ER por views y «por 100 followers» son cortes de apoyo, no la verdad final.",
      ],
      lists: [
        {
          intro: "Práctico para un informe:",
          items: [
            "fija una fórmula primaria",
            "cuenta el ER del post y el promedio del periodo",
            "mira saves y replies aparte — a menudo valen más que un like",
            "no mezcles reach de ads y orgánico sin etiqueta",
            "no inventes métricas «a ojo» sin método",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Perseguir el «porcentaje normal» de otro. Compara tus posts más fuertes y más débiles — más útil que una tabla de benchmarks.",
        },
      ],
    },
    {
      title: "De dónde sacar números en el perfil",
      level: 2,
      paras: [
        "Pasa a una cuenta profesional y abre las stats del post: reach, impressions, interactions. En Stories — replies y taps.",
        "Sin modo business o creator, algunas métricas no se muestran. La UI de iconos ha cambiado — busca «Insights» o stats en el perfil o en el post.",
      ],
      links: [
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Cómo subir el ER sin tácticas grises",
      level: 2,
      paras: [
        "Reconstruye la audiencia: quién reacciona de verdad, qué temas generan saves. Ajusta el content plan: valor más emoción más una pregunta, no solo escaparate.",
        "Un lenguaje visual unificado ayuda, pero las «fotos bonitas» sin sentido ya no sostienen. Mezcla ventas con behind-the-scenes y case studies. Hashtags — relevantes, no un montón basura.",
      ],
      lists: [
        {
          intro: "Palancas:",
          items: [
            "hook en la primera línea del caption",
            "un CTA claro (pregunta / save / message)",
            "responde comentarios en las primeras horas",
            "Stories y polls como diálogo",
            "sin engagement falso ni mass-follow por el número",
          ],
        },
      ],
      links: [
        {
          label: "Caption de foto",
          href: "/es/blog/podpis-foto-instagram/",
        },
        {
          label: "Content plan de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Interacción con la audiencia",
      level: 2,
      paras: [
        "El ER crece donde hay conversación: replies, mentions, series «preguntaste — respondemos». Ignorar comentarios mata la entrega de posts posteriores.",
        "Mira más allá de likes: mensajes, clics en enlaces, saves — más cerca de resultados de negocio.",
      ],
      links: [
        {
          label: "Instagram Direct",
          href: "/es/blog/instagram-direct/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Engagement es sobre reacción, no sobre el conteo de followers. Elige una fórmula, cuéntala con regularidad, crece con contenido honesto y diálogo.",
        "Los porcentajes universales de artículos viejos no son ley. Tu tendencia y la comparación entre posts importan más.",
      ],
    },
  ],
  closing: [
    "Abre las stats de posts recientes, cuenta el ER con una fórmula y refuerza formatos con saves y replies — para que el engagement sea una métrica manejable, no un cuento de miedo.",
  ],
  related: [
    "statistika-instagram",
    "ohvat-instagram",
    "biznes-akkaunt-instagram",
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "instagram-direct",
  ],
};

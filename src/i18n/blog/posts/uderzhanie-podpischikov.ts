import type { BlogPost } from "../../../data/blog";

/** ES overlay for uderzhanie-podpischikov — same structure as RU JSON. */
export const uderzhaniePodpischikovEs: BlogPost = {
  slug: "uderzhanie-podpischikov",
  title: "Cómo evitar que los suscriptores de email se vayan",
  date: "2018-05-25",
  category: "Email marketing",
  cover: "/images/blog/uderzhanie-podpischikov/cover.webp",
  excerpt:
    "Por qué la gente deja una lista y cómo bajar las bajas: maquetación móvil, timing de envío, frecuencia, página de baja con encuesta y alternativas, ofertas de win-back — sin aferrarte a una base muerta.",
  lead: [
    "Una baja no siempre es un fracaso: algunos se van porque la oferta ya no encaja. Es peor cuando se van por mala UX, frecuencia spammy o emails que no se leen en el teléfono.",
    "Abajo: motivos típicos de salida y movimientos prácticos de retención — antes de la baja y en la página de opt-out. El objetivo es una lista viva e interesada — no el archivo «para siempre» más largo.",
  ],
  faq: [
    {
      q: "¿Las bajas siempre son malas?",
      a: "No. Limpiar a quien no está interesado mejora la deliverability. El problema real son las salidas masivas por mala calidad del email.",
    },
    {
      q: "¿Qué molesta más?",
      a: "Enviar demasiado a menudo, contenido irrelevante, layouts que se rompen en móvil y un flujo de baja de varios pasos.",
    },
    {
      q: "¿Hace falta una encuesta en la baja?",
      a: "Sí — una corta. Muestra el motivo; no les hagas volver a escribir el email.",
    },
    {
      q: "¿Se puede ofrecer mail menos frecuente?",
      a: "Sí: «menos a menudo» o «solo promos» en lugar de un opt-out completo es una alternativa habitual.",
    },
    {
      q: "¿Es ético un cupón de win-back?",
      a: "Si aún no han confirmado del todo el opt-out y la oferta encaja. No retengas con engaño.",
    },
    {
      q: "¿Ayuda el A/B del horario de envío?",
      a: "Sí en tu propia lista. Las reglas ajenas de «mañana vs tarde» son hipótesis, no ley.",
    },
    {
      q: "¿Qué relación tiene con la estrategia de email?",
      a: "La retención es parte de la estrategia de email: segmentos, valor, frecuencia. Ver el artículo aparte.",
    },
  ],
  sections: [
    {
      title: "Por qué se van",
      level: 2,
      paras: [
        "Sin interés en el producto, una mudanza o cambio de contexto, emails ilegibles en el teléfono, mal horario de envío, demasiado raros (marca olvidada) o demasiado a menudo (sensación de spam).",
        "Algunos motivos una oferta no puede arreglar. Otros están de lleno en marketing: layout, segmentación, calendario, valor.",
      ],
      links: [
        {
          label: "Maquetación HTML de email",
          href: "/es/blog/verstka-email/",
        },
        {
          label: "Diseño de email",
          href: "/es/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Antes de la baja: calidad del toque",
      level: 2,
      paras: [
        "Mantén una vista móvil sólida, un preheader claro y un objetivo por email. Segmenta: los nuevos y los «dormidos» reciben mail distinto.",
        "Prueba frecuencia y timing con A/B en tu lista. Los triggers útiles retienen mejor que digests vacíos «por checklist».",
      ],
      lists: [
        {
          intro: "Mínimo contra las bajas:",
          items: [
            "los emails se leen bien en el smartphone",
            "hay valor, no solo una promo",
            "la frecuencia es previsible",
            "baja en un clic",
            "segmentos en lugar de «un blast para todos»",
          ],
        },
      ],
      links: [
        {
          label: "Copy de newsletter",
          href: "/es/blog/tekst-email-rassylki/",
        },
        {
          label: "Emails disparados",
          href: "/es/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "En la página de baja y el win-back",
      level: 2,
      paras: [
        "Haz el opt-out simple. Ayudan opciones suaves: humor ligero sin burla, «¿por qué te vas?», «menos a menudo / solo lo importante», una oferta exclusiva para quien aún duda.",
        "Agradece el tiempo contigo. Guarda el opt-out al momento — sin dark patterns del tipo «confirma otra vez por tres formularios».",
        "Usa los datos de la encuesta para corregir la estrategia y atraer gente nueva: la gestión de lista es continua.",
      ],
      links: [
        {
          label: "Estrategia de email",
          href: "/es/blog/email-strategiya/",
        },
        {
          label: "Lista de email con consentimiento",
          href: "/es/blog/baza-email-socseti/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La retención no justifica ignorar un opt-out ni esconder la baja. Cumple el consentimiento y las reglas del ESP / proveedor de buzón.",
        },
      ],
    },
  ],
  closing: [
    "Primero quita causas de salida dentro de los propios emails; después arma una página de baja honesta con encuesta y la alternativa «menos a menudo» — la lista se hace más pequeña en número, más fuerte en respuesta.",
  ],
  related: [
    "email-strategiya",
    "tekst-email-rassylki",
    "triggernye-rassylki",
    "verstka-email",
    "oformlenie-email",
    "baza-email-socseti",
  ],
};

/** EN overlay for uderzhanie-podpischikov — same structure as RU JSON. */
export const uderzhaniePodpischikovEn: BlogPost = {
  slug: "uderzhanie-podpischikov",
  title: "How to keep email subscribers from leaving",
  date: "2018-05-25",
  category: "Email marketing",
  cover: "/images/blog/uderzhanie-podpischikov/cover-en.webp",
  excerpt:
    "Why people leave a list and how to cut unsubscribes: mobile layout, send timing, frequency, an unsubscribe page with a survey and alternatives, win-back offers — without clinging to a dead base.",
  lead: [
    "An unsubscribe isn’t always a failure: some people leave because the offer no longer fits. It’s worse when they leave because of bad UX, spammy frequency, or emails they can’t read on a phone.",
    "Below: typical exit reasons and practical retention moves — before unsubscribe and on the opt-out page. The goal is a live, interested list — not the longest “forever” file.",
  ],
  faq: [
    {
      q: "Are unsubscribes always bad?",
      a: "No. Clearing the uninterested improves deliverability. Mass exits from poor email quality are the real problem.",
    },
    {
      q: "What annoys people most?",
      a: "Sending too often, irrelevant content, layouts that break on mobile, and a multi-step unsubscribe flow.",
    },
    {
      q: "Do you need a survey on unsubscribe?",
      a: "Yes — a short one. It shows the reason; don’t make them re-enter the email.",
    },
    {
      q: "Can you offer less frequent mail?",
      a: "Yes: “less often” or “promos only” instead of a full opt-out is a common alternative.",
    },
    {
      q: "Is a win-back coupon ethical?",
      a: "If they haven’t fully confirmed opt-out yet and the offer fits. Don’t retain by deception.",
    },
    {
      q: "Does A/B testing send time help?",
      a: "Yes on your own list. Other people’s “morning vs evening” rules are hypotheses, not law.",
    },
    {
      q: "How does this relate to email strategy?",
      a: "Retention is part of email strategy: segments, value, frequency. See the separate article.",
    },
  ],
  sections: [
    {
      title: "Why they leave",
      level: 2,
      paras: [
        "No interest in the product, a move or context change, emails unreadable on phone, bad send time, too rare (brand forgotten) or too often (spam feel).",
        "Some reasons an offer can’t fix. Others sit squarely in marketing: layout, segmentation, schedule, value.",
      ],
      links: [
        {
          label: "HTML email layout",
          href: "/en/blog/verstka-email/",
        },
        {
          label: "Email design",
          href: "/en/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Before unsubscribe: touch quality",
      level: 2,
      paras: [
        "Keep a solid mobile view, a clear preheader, and one email goal. Segment: newcomers and “sleepers” get different mail.",
        "Test frequency and timing with A/B on your list. Useful automated triggers retain better than empty digests “for the checklist.”",
      ],
      lists: [
        {
          intro: "Minimum against unsubscribes:",
          items: [
            "emails read well on a smartphone",
            "there is value, not only a promo",
            "frequency is predictable",
            "one-click unsubscribe",
            "segments instead of “one blast for all”",
          ],
        },
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Trigger emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "On the unsubscribe page and win-back",
      level: 2,
      paras: [
        "Make opt-out simple. Soft options help: light humor without mockery, “why are you leaving?”, “less often / important only,” an exclusive offer for those still unsure.",
        "Thank them for the time with you. Save the opt-out immediately — no dark patterns like “confirm again through three forms.”",
        "Use survey data to fix strategy and attract new people: list management is continuous.",
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
        {
          label: "Consent-based email list",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Retention does not justify ignoring an opt-out or hiding unsubscribe. Follow consent and ESP / mailbox-provider rules.",
        },
      ],
    },
  ],
  closing: [
    "First remove exit causes inside the emails themselves, then build an honest unsubscribe page with a survey and a “less often” alternative — the list gets smaller by count, stronger by response.",
  ],
  related: [
    "email-strategiya",
    "tekst-email-rassylki",
    "triggernye-rassylki",
    "verstka-email",
    "oformlenie-email",
    "baza-email-socseti",
  ],
};

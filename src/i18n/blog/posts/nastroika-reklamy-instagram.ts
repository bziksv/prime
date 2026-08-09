import type { BlogPost } from "../../../data/blog";

/** EN overlay for nastroika-reklamy-instagram — same structure as RU JSON. */
export const nastroikaReklamyInstagramEn: BlogPost = {
  slug: "nastroika-reklamy-instagram",
  title: "Instagram ads via Meta Ads: how to launch a campaign",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nastroika-reklamy-instagram/cover-en.webp",
  excerpt:
    "How to run Instagram ads from Meta Ads Manager: account linking, campaign goal, Instagram-only placements, budget, and testing — without outdated 2020 bid screenshots.",
  lead: [
    "Serious Instagram targeting usually runs from a Meta ad account (historically “via Facebook”): goals, audiences, Feed/Stories/Reels placements, and optimization. That’s broader than the in-app Promote button.",
    "Below: launch logic — what to prepare, how to pick a goal and limit delivery to Instagram, what to watch in budget. Menu labels change; check Meta Help. Disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from in-app Promote?",
      a: "Promote is a quick post boost. Meta Ads offers more goals, audiences, placements, and control. For a campaign system — use Ads Manager.",
    },
    {
      q: "Is a Facebook profile required?",
      a: "You need access to Business Manager / a Meta ad account and a link to Instagram. The exact path is through Accounts Center; details in Help.",
    },
    {
      q: "Can I run ads on Instagram only?",
      a: "Yes: in placements keep Instagram (Feed, Stories, Reels — by task) and remove extra surfaces if the account allows it.",
    },
    {
      q: "How much budget should a beginner set?",
      a: "There’s no single “right” number. Set a test limit and period long enough to gather learning events — not “all money on day one.”",
    },
    {
      q: "Do I need the Meta pixel?",
      a: "For optimizing toward site leads or purchases — yes. Without events the account learns poorly; for simple DMs a “messages” goal can be enough.",
    },
  ],
  sections: [
    {
      title: "What to prepare before Ads Manager",
      level: 2,
      paras: [
        "A professional Instagram account and ads permissions for the right person.",
        "Link to Meta Business / the ad account, a payment method, a clear offer, and creatives built for vertical.",
        "If the goal is the website: a working landing page, UTM, and pixel/CAPI when possible.",
      ],
      lists: [
        {
          intro: "Minimum:",
          items: [
            "one test goal",
            "1–2 strong creatives",
            "an audience or interest hypothesis",
            "budget limit and review date",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Promote (boost) on Instagram",
          href: "/en/blog/promo-instagram/",
        },
      ],
    },
    {
      title: "Campaign: goal first, buttons second",
      level: 2,
      paras: [
        "In Ads Manager you create a campaign and choose a result: awareness, traffic, leads, sales, messages, etc. — the set depends on the account.",
        "Name the campaign and ad set so a month later it’s clear: offer · geo · goal · date.",
        "Turn on A/B and Advantage+ options when you have capacity to read results — not as “magic by default.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Old bid-strategy names (“bid cap / cost cap” from 2020 guides) have moved. Use current cost-control modes in Ads Manager, not screenshots from an article.",
        },
      ],
    },
    {
      title: "Ad set: audience and Instagram only",
      level: 2,
      paras: [
        "Set geo, age, interests, or custom audiences / lookalikes under platform rules.",
        "In placements, manually keep Instagram if you don’t need Facebook/Audience Network. Check previews: Feed, Stories, and Reels behave differently.",
        "Delivery optimization should match the goal: clicks, conversions, messages — one primary event per test.",
      ],
      links: [
        {
          label: "Naming Instagram audiences",
          href: "/en/blog/nazvanie-auditorii-instagram/",
        },
        {
          label: "Meta retargeting",
          href: "/en/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "Ad and creative",
      level: 2,
      paras: [
        "Frame and copy for the format: vertical for Stories/Reels, a readable offer without sound, a clear CTA.",
        "You can boost an existing Instagram post or build the creative in Ads Manager — depends on goal and permissions.",
        "Dynamic headline/image combinations help when you have test volume, not instead of a strong original offer.",
      ],
    },
    {
      title: "Budget, learning, review",
      level: 2,
      paras: [
        "Daily or lifetime limit — whichever keeps spend controllable. Don’t expect a stable CPA in the first hours: learning is underway.",
        "Watch cost per result and lead/dialogue quality, not only reach and likes.",
        "Ad types and creators are covered in the overview article; the Meta Ads ecosystem — in the Facebook/Meta Ads piece.",
      ],
      links: [
        {
          label: "Instagram ads: types and metrics",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Facebook / Meta Ads",
          href: "/en/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Instagram targeting means Meta Ads plus the right placements.",
        "Goal and offer first, fine bid tuning later.",
        "Promote — for a quick post test; Ads Manager — for a system.",
      ],
    },
  ],
  closing: [
    "Link Instagram to the ad account, pick one goal, keep Instagram placements, and launch a small test with a clear review date — faster than copying outdated bid screenshots.",
  ],
  related: [
    "reklama-instagram",
    "facebook-ads",
    "promo-instagram",
    "retargeting-meta",
    "nazvanie-auditorii-instagram",
    "biznes-akkaunt-instagram",
  ],
};

/** ES overlay for nastroika-reklamy-instagram — same structure as RU JSON / EN. */
export const nastroikaReklamyInstagramEs: BlogPost = {
  slug: "nastroika-reklamy-instagram",
  title: "Ads de Instagram vía Meta Ads: cómo lanzar una campaña",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nastroika-reklamy-instagram/cover.webp",
  excerpt:
    "Cómo correr ads de Instagram desde Meta Ads Manager: vínculo de cuenta, objetivo de campaña, placements solo Instagram, presupuesto y testing — sin capturas obsoletas de bids de 2020.",
  lead: [
    "El targeting serio de Instagram suele correr desde una cuenta de ads de Meta (históricamente «vía Facebook»): objetivos, audiencias, placements Feed/Stories/Reels y optimización. Es más amplio que el botón Promote in-app.",
    "Abajo: lógica de lanzamiento — qué preparar, cómo elegir un objetivo y limitar la entrega a Instagram, qué vigilar en el presupuesto. Las etiquetas de menú cambian; consulta Meta Help. El disclaimer está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia del Promote in-app?",
      a: "Promote es un boost rápido de post. Meta Ads ofrece más objetivos, audiencias, placements y control. Para un sistema de campaña — usa Ads Manager.",
    },
    {
      q: "¿Hace falta un perfil de Facebook?",
      a: "Necesitas acceso a Business Manager / una cuenta de ads de Meta y un vínculo a Instagram. La ruta exacta va por Accounts Center; detalles en Help.",
    },
    {
      q: "¿Puedo correr ads solo en Instagram?",
      a: "Sí: en placements mantén Instagram (Feed, Stories, Reels — según la tarea) y quita superficies extra si la cuenta lo permite.",
    },
    {
      q: "¿Cuánto presupuesto debería fijar un principiante?",
      a: "No hay un número «correcto» único. Fija un límite de test y un periodo lo bastante largo para reunir eventos de learning — no «todo el dinero el día uno».",
    },
    {
      q: "¿Necesito el Meta pixel?",
      a: "Para optimizar hacia leads o compras del sitio — sí. Sin events la cuenta aprende mal; para DMs simples un objetivo de «messages» puede bastar.",
    },
  ],
  sections: [
    {
      title: "Qué preparar antes de Ads Manager",
      level: 2,
      paras: [
        "Una cuenta profesional de Instagram y permisos de ads para la persona correcta.",
        "Vínculo a Meta Business / la cuenta de ads, un método de pago, una oferta clara y creativos pensados para vertical.",
        "Si el objetivo es el sitio: un landing que funcione, UTM y pixel/CAPI cuando sea posible.",
      ],
      lists: [
        {
          intro: "Mínimo:",
          items: [
            "un objetivo de test",
            "1–2 creativos fuertes",
            "una hipótesis de audiencia o intereses",
            "límite de presupuesto y fecha de review",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Promote (boost) en Instagram",
          href: "/es/blog/promo-instagram/",
        },
      ],
    },
    {
      title: "Campaña: primero el objetivo, después los botones",
      level: 2,
      paras: [
        "En Ads Manager creas una campaña y eliges un resultado: awareness, traffic, leads, sales, messages, etc. — el set depende de la cuenta.",
        "Nombra la campaña y el ad set para que un mes después quede claro: oferta · geo · objetivo · fecha.",
        "Activa A/B y opciones Advantage+ cuando tengas capacidad de leer resultados — no como «magia por defecto».",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Los nombres viejos de bid strategy («bid cap / cost cap» de guías de 2020) se han movido. Usa los modos actuales de control de coste en Ads Manager, no capturas de un artículo.",
        },
      ],
    },
    {
      title: "Ad set: audiencia y solo Instagram",
      level: 2,
      paras: [
        "Fija geo, edad, intereses o custom audiences / lookalikes bajo las reglas de la plataforma.",
        "En placements, mantén Instagram a mano si no necesitas Facebook/Audience Network. Revisa previews: Feed, Stories y Reels se comportan distinto.",
        "La optimización de entrega debería coincidir con el objetivo: clics, conversiones, mensajes — un evento primario por test.",
      ],
      links: [
        {
          label: "Nombrar audiencias de Instagram",
          href: "/es/blog/nazvanie-auditorii-instagram/",
        },
        {
          label: "Retargeting de Meta",
          href: "/es/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "Ad y creativo",
      level: 2,
      paras: [
        "Frame y copy para el formato: vertical para Stories/Reels, oferta legible sin sonido, CTA claro.",
        "Puedes boostear un post de Instagram existente o armar el creativo en Ads Manager — depende del objetivo y los permisos.",
        "Las combinaciones dinámicas de headline/imagen ayudan cuando tienes volumen de test, no en lugar de una oferta original fuerte.",
      ],
    },
    {
      title: "Presupuesto, learning, review",
      level: 2,
      paras: [
        "Límite diario o lifetime — el que mantenga el gasto controlable. No esperes un CPA estable en las primeras horas: el learning está en marcha.",
        "Mira coste por resultado y calidad de lead/diálogo, no solo reach y likes.",
        "Tipos de ads y creators se cubren en el artículo overview; el ecosistema Meta Ads — en la pieza de Facebook/Meta Ads.",
      ],
      links: [
        {
          label: "Ads de Instagram: tipos y métricas",
          href: "/es/blog/reklama-instagram/",
        },
        {
          label: "Facebook / Meta Ads",
          href: "/es/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "El targeting de Instagram significa Meta Ads más los placements correctos.",
        "Primero objetivo y oferta, después el ajuste fino de bids.",
        "Promote — para un test rápido de post; Ads Manager — para un sistema.",
      ],
    },
  ],
  closing: [
    "Vincula Instagram a la cuenta de ads, elige un objetivo, mantén placements de Instagram y lanza un test pequeño con una fecha de review clara — más rápido que copiar capturas obsoletas de bids.",
  ],
  related: [
    "reklama-instagram",
    "facebook-ads",
    "promo-instagram",
    "retargeting-meta",
    "nazvanie-auditorii-instagram",
    "biznes-akkaunt-instagram",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for promo-instagram — same structure as RU JSON. */
export const promoInstagramEn: BlogPost = {
  slug: "promo-instagram",
  title: "Instagram Promote: how to boost a post and what to watch",
  date: "2020-07-22",
  category: "SMM",
  cover: "/images/blog/promo-instagram/cover-en.webp",
  excerpt:
    "What Instagram Promote is: when to boost a post, how to set goal and budget, and how it differs from full Ads Manager — without outdated payment screenshots.",
  lead: [
    "“Promote” in Instagram is a simplified ads launch from a ready post or Stories: you pick goal, audience, and budget right in the app. It’s not the same as a retail “store promo discount.”",
    "Below: what the tool does, setup logic, payment, and typical fails. Menu items and payment methods change; check Meta Business Help. Full Ads Manager lives in the Instagram ads article. Meta note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is Promote different from Ads Manager?",
      a: "Promote is a quick boost from the app. Ads Manager gives more goals, placements, and optimizations. For tests Promote may be enough; for a system — the account.",
    },
    {
      q: "Do I need a business account?",
      a: "Usually yes: a professional/business profile and ads permissions. On a personal “just a blog” the button often doesn’t show.",
    },
    {
      q: "Can I edit the creative after launch?",
      a: "Often you can’t change the post creative “on the fly” in the same ad. Budget, duration, and audience can sometimes be edited in Ads — check current options.",
    },
    {
      q: "Is this the same as the site “promotions” article?",
      a: "No. That one covers retail discounts and mechanics. This one — paid Instagram post promotion.",
    },
    {
      q: "Why won’t my Instagram promo launch?",
      a: "No admin rights, wrong profile type, the post failed review, a payment or region issue. Check notifications and Help.",
    },
  ],
  sections: [
    {
      title: "Core idea: boost a post, not a “store discount”",
      level: 2,
      paras: [
        "You take already published content and pay for impressions/clicks/messages to a new audience under chosen parameters.",
        "Goal — leads, traffic, awareness, or audience growth — you set before launch. Without a goal the budget goes to “just reach.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Ads won’t save a weak post with a fuzzy offer. Clear frame and CTA first, then boost.",
        },
      ],
    },
    {
      title: "Before launch",
      level: 2,
      paras: [
        "Professional profile and ads access.",
        "Audience: geo, age, interests — or lookalike/retarget where available.",
        "Format: feed post and/or Stories — vertical for stories, offer readable without sound.",
        "Budget and duration: daily/total cap and a clear test (not “all money on day one”).",
      ],
      lists: [
        {
          intro: "Mini plan:",
          items: [
            "one goal for the test",
            "one strong creative",
            "UTM or promo code for measurement",
            "a stop threshold if CPL is bad",
          ],
        },
      ],
    },
    {
      title: "How to launch in the app",
      level: 2,
      paras: [
        "Open the post → “Promote” (or from insights / the profile ads center).",
        "Pick a goal (messages, visits, calls, audience — the set depends on version).",
        "Set audience and budget → preview → submit for review.",
        "Exact menu clicks change; if there’s no button — check account type and permissions.",
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Payment and review",
      level: 2,
      paras: [
        "Payment goes through a Meta billing profile: card and other methods available in the region. We don’t update old “QIWI/Sber as the only path” catalogs.",
        "Review can take time. A rejected post — fix per ads rules (copy, product, promises).",
        "Charges usually follow impressions/results within the budget; if you stop early — for what was actually delivered.",
      ],
    },
    {
      title: "Edit, pause, evaluate",
      level: 2,
      paras: [
        "In Ads / the ads center you can lower budget, change audience, or pause — as far as the UI allows.",
        "Look past ad likes: cost per result, dialogue quality, leads with UTM.",
        "A good Promote = clear offer + relevant audience + a fast landing — not “magic weekdays” from someone else’s roundups.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mix-up",
          text: "Cases of retail “Magnet × jewelry” discounts are store promos, not necessarily the Instagram Promote button. Discount mechanics — in a separate article.",
        },
      ],
      links: [
        {
          label: "Promotions (retail)",
          href: "/en/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Instagram Promote = a quick content boost when you have permissions and payment.",
        "For campaign systems use the full account; for a post test — Promote after a strong creative.",
      ],
    },
  ],
  closing: [
    "Pick one strong post with a clear CTA, set one goal and a small test budget — faster to learn whether you need simplified Promote or already Ads Manager.",
  ],
  related: [
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "promoaktsii",
    "keisy-facebook-ads",
    "facebook-ads",
    "statistika-instagram",
  ],
};

/** ES overlay for promo-instagram — same structure as RU JSON / EN. */
export const promoInstagramEs: BlogPost = {
  slug: "promo-instagram",
  title: "Instagram Promote: cómo boostear un post y qué vigilar",
  date: "2020-07-22",
  category: "SMM",
  cover: "/images/blog/promo-instagram/cover.webp",
  excerpt:
    "Qué es Instagram Promote: cuándo boostear un post, cómo fijar objetivo y presupuesto y en qué se diferencia del Ads Manager completo — sin capturas obsoletas de pago.",
  lead: [
    "«Promote» en Instagram es un lanzamiento simplificado de ads desde un post o Stories ya listo: eliges objetivo, audiencia y presupuesto en la app. No es lo mismo que un «descuento promo» de retail.",
    "Abajo: qué hace la herramienta, lógica de setup, pago y fallos típicos. Los ítems de menú y métodos de pago cambian; consulta Meta Business Help. El Ads Manager completo vive en el artículo de Instagram ads. La nota de Meta está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿En qué se diferencia Promote del Ads Manager?",
      a: "Promote es un boost rápido desde la app. Ads Manager da más objetivos, placements y optimizaciones. Para tests Promote puede bastar; para un sistema — la cuenta.",
    },
    {
      q: "¿Necesito una cuenta business?",
      a: "Suele ser que sí: un perfil professional/business y permisos de ads. En un personal «solo blog» el botón a menudo no aparece.",
    },
    {
      q: "¿Puedo editar el creativo tras el lanzamiento?",
      a: "A menudo no puedes cambiar el creativo del post «sobre la marcha» en el mismo ad. Presupuesto, duración y audiencia a veces se editan en Ads — revisa las opciones actuales.",
    },
    {
      q: "¿Es lo mismo que el artículo de «promociones» del sitio?",
      a: "No. Ese cubre descuentos y mecánicas de retail. Este — promoción de pago de un post de Instagram.",
    },
    {
      q: "¿Por qué no arranca mi promo de Instagram?",
      a: "Sin derechos de admin, tipo de perfil equivocado, el post falló la review, un problema de pago o región. Revisa notificaciones y Help.",
    },
  ],
  sections: [
    {
      title: "Idea central: boostear un post, no un «descuento de tienda»",
      level: 2,
      paras: [
        "Tomas contenido ya publicado y pagas impresiones/clics/mensajes a una audiencia nueva bajo parámetros elegidos.",
        "El objetivo — leads, tráfico, awareness o crecimiento de audiencia — lo fijas antes del lanzamiento. Sin objetivo el presupuesto va a «solo reach».",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Los ads no salvan un post débil con una oferta borrosa. Primero frame y CTA claros, luego el boost.",
        },
      ],
    },
    {
      title: "Antes del lanzamiento",
      level: 2,
      paras: [
        "Perfil profesional y acceso a ads.",
        "Audiencia: geo, edad, intereses — o lookalike/retarget donde esté disponible.",
        "Formato: post del feed y/o Stories — vertical para stories, oferta legible sin sonido.",
        "Presupuesto y duración: tope diario/total y un test claro (no «todo el dinero el día uno»).",
      ],
      lists: [
        {
          intro: "Mini plan:",
          items: [
            "un objetivo para el test",
            "un creativo fuerte",
            "UTM o código promo para medir",
            "un umbral de stop si el CPL es malo",
          ],
        },
      ],
    },
    {
      title: "Cómo lanzar en la app",
      level: 2,
      paras: [
        "Abre el post → «Promote» (o desde insights / el centro de ads del perfil).",
        "Elige un objetivo (mensajes, visitas, llamadas, audiencia — el set depende de la versión).",
        "Fija audiencia y presupuesto → preview → envía a review.",
        "Los clics exactos del menú cambian; si no hay botón — revisa tipo de cuenta y permisos.",
      ],
      links: [
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
        {
          label: "Cuenta business",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Pago y review",
      level: 2,
      paras: [
        "El pago va por un perfil de billing de Meta: tarjeta y otros métodos disponibles en la región. No actualizamos catálogos viejos de «QIWI/Sber como único camino».",
        "La review puede tardar. Un post rechazado — corrige según las reglas de ads (copy, producto, promesas).",
        "Los cargos suelen seguir impresiones/resultados dentro del presupuesto; si paras antes — por lo que se entregó de verdad.",
      ],
    },
    {
      title: "Editar, pausar, evaluar",
      level: 2,
      paras: [
        "En Ads / el centro de ads puedes bajar presupuesto, cambiar audiencia o pausar — en la medida que lo permita la UI.",
        "Mira más allá de likes del ad: coste por resultado, calidad del diálogo, leads con UTM.",
        "Un buen Promote = oferta clara + audiencia relevante + landing rápido — no «días mágicos de la semana» de roundups ajenos.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Confusión habitual",
          text: "Casos de descuentos retail «Magnet × joyería» son promos de tienda, no necesariamente el botón Promote de Instagram. Mecánicas de descuento — en un artículo aparte.",
        },
      ],
      links: [
        {
          label: "Promociones (retail)",
          href: "/es/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Instagram Promote = un boost rápido de contenido cuando tienes permisos y pago.",
        "Para sistemas de campaña usa la cuenta completa; para un test de post — Promote tras un creativo fuerte.",
      ],
    },
  ],
  closing: [
    "Elige un post fuerte con un CTA claro, fija un objetivo y un presupuesto de test pequeño — más rápido saber si te basta Promote simplificado o ya necesitas Ads Manager.",
  ],
  related: [
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "promoaktsii",
    "keisy-facebook-ads",
    "facebook-ads",
    "statistika-instagram",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for moderatsiya-facebook-ads — same structure as RU JSON. */
export const moderatsiyaFacebookAdsEn: BlogPost = {
  slug: "moderatsiya-facebook-ads",
  title: "Why Facebook rejects an ad: common reasons",
  date: "2020-01-09",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-facebook-ads/cover-en.webp",
  excerpt:
    "Common reasons ads get rejected or stay silent in Facebook / Meta Ads: prohibited content, before/after, clickbait UI, personal attributes, text on image, bids, and audience overlap.",
  lead: [
    "A rejected ad — or approval with no impressions — in Facebook / Meta Ads usually hits advertising rules or auction settings, not “the platform doesn’t like you.”",
    "Below: typical moderation issues from practice and what to check. Rules and thresholds (including text on image) change — verify current Advertising Standards. Informational only; not a call to use Meta platforms.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Approved but no impressions — is it a ban?",
      a: "Often no: low bid, narrow audience, budget cap, learning, or ad-set overlap. Check Delivery and account recommendations.",
    },
    {
      q: "Are before/after creatives allowed?",
      a: "Classic before/after and misleading body/health results are usually banned. Look for current exceptions in Help.",
    },
    {
      q: "Does text on the image still matter?",
      a: "The hard “20%” rule was softened historically, but overloaded text and clickbait still hurt delivery and review. Readability beats a percentage.",
    },
    {
      q: "Can I mention personal attributes in the copy?",
      a: "Don’t imply personal traits of the audience in the creative (“you’re overweight,” “you’re over 40”). Targeting settings are separate from ad wording.",
    },
    {
      q: "What should I do when an ad is rejected?",
      a: "Read the reason in the account, fix it, wait for re-review. On a clear error — appeal via Help with ad IDs.",
    },
    {
      q: "Does this apply to Instagram ads too?",
      a: "Often yes: one Meta account and similar policies for related surfaces, with format caveats.",
    },
    {
      q: "Where’s the channel overview?",
      a: "In the Facebook Ads / Meta Ads piece — jobs, pixel, and test logic.",
    },
  ],
  sections: [
    {
      title: "Creative rejected: content and visuals",
      level: 2,
      paras: [
        "Prohibited goods and services (weapons, some medications, tobacco, surveillance, 18+, etc.) get cut at intake — the full list lives only in current policies. “Gray” promises don’t save a pretty design.",
        "Before/after and shocking close-ups of the body with unrealistic effects are a classic rejection. Fake interactive UI on the image (phony Play button, notification) counts as clickbait: people tap “as if native” and land on a site.",
        "Overloaded text on the image hurts delivery; we don’t repeat the old hard “20%” myth as current law — aim for little text, a large offer, mobile readability.",
      ],
      lists: [
        {
          intro: "Quick visual filter:",
          items: [
            "no prohibited topics",
            "no before/after or fake UI buttons",
            "minimal text on the photo",
            "honest offer — no miracle guarantees",
          ],
        },
      ],
    },
    {
      title: "Wording, Meta branding, and links",
      level: 2,
      paras: [
        "Mentions of Facebook / Instagram follow brand rules: correct spelling, no distorted logos, no “gray” promises like “we’ll help hack an account.” Check the platform brand guidelines.",
        "Personal attributes in copy (“you’re of age — come here”) are banned even when age targeting in settings is lawful. Self-esteem attacks (“still overweight?”) and unverified income guarantees also get cut.",
        "Display URL must match the real landing: a short “pretty” link isn’t for domain spoofing.",
      ],
      notes: [
        {
          title: "Important",
          text: "Promises like “$20,000 in two days” with no basis are a straight path to rejection and reputation risk.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Approved but not running: bid and audiences",
      level: 2,
      paras: [
        "A low bid or manual ceiling below market leaves the ad without auction wins. At the start, auto strategies plus learning data often beat a hard CPA cut too early.",
        "Overlapping audiences across ad sets compete with themselves: one segment — one bid logic. Check overlaps in the account’s audience tools.",
        "Narrow targeting + tiny budget + learning = “silence.” Expand or wait for learning — don’t confuse it with a ban.",
      ],
      links: [
        {
          label: "Facebook Ads / Meta Ads",
          href: "/en/blog/facebook-ads/",
        },
        {
          label: "Meta remarketing",
          href: "/en/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "What to do when there’s a problem",
      level: 2,
      paras: [
        "Read the rejection text → fix creative or settings → wait for re-review. Account email often duplicates the status.",
        "If you’re sure you comply — appeal via Help: account and ad IDs, brief facts. Don’t create clones with the same violation.",
        "Keep a policy checklist for your niche (health, finance, before/after) — cheaper than burning creatives in rejection loops.",
      ],
      lists: [
        {
          intro: "Triage order:",
          items: [
            "status: rejected vs active with no delivery",
            "reason in Ads Manager",
            "creative vs bid/audience",
            "fix → re-review",
            "appeal only when you’re confident",
          ],
        },
      ],
    },
  ],
  closing: [
    "Check the creative against Advertising Standards before upload, remove clickbait and personal labels — you’ll pass review first time more often than after a dozen “guess” edits.",
  ],
  related: [
    "facebook-ads",
    "retargeting-meta",
    "keisy-facebook-ads",
    "nastroika-reklamy-instagram",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
  ],
};

/** ES overlay for moderatsiya-facebook-ads — same structure as RU JSON. */
export const moderatsiyaFacebookAdsEs: BlogPost = {
  slug: "moderatsiya-facebook-ads",
  title: "Por qué Facebook rechaza un anuncio: motivos habituales",
  date: "2020-01-09",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-facebook-ads/cover.webp",
  excerpt:
    "Motivos habituales de rechazo o silencio en Facebook / Meta Ads: contenido prohibido, before/after, UI clickbait, atributos personales, texto en la imagen, pujas y overlap de audiencias.",
  lead: [
    "Un anuncio rechazado — o aprobado sin impresiones — en Facebook / Meta Ads suele chocar con reglas de publicidad o settings de subasta, no con «la plataforma no te quiere».",
    "Abajo: issues típicos de moderación de la práctica y qué chequear. Reglas y umbrales (incluido texto en imagen) cambian — verifica Advertising Standards actuales. Solo informativo; no es una invitación a usar plataformas Meta.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Facebook* e Instagram* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Aprobado pero sin impresiones — es un ban?",
      a: "A menudo no: puja baja, audiencia estrecha, tope de presupuesto, learning u overlap de ad sets. Mira Delivery y las recomendaciones de la cuenta.",
    },
    {
      q: "¿Se permiten creatividades before/after?",
      a: "El before/after clásico y resultados engañosos de cuerpo/salud suelen estar prohibidos. Busca excepciones actuales en Help.",
    },
    {
      q: "¿Sigue importando el texto en la imagen?",
      a: "La regla dura del «20%» se suavizó históricamente, pero el texto sobrecargado y el clickbait siguen pegando a delivery y review. La legibilidad gana a un porcentaje.",
    },
    {
      q: "¿Puedo mencionar atributos personales en el copy?",
      a: "No impliques rasgos personales de la audiencia en la creatividad («estás con sobrepeso», «tienes más de 40»). Los settings de targeting van aparte del wording del anuncio.",
    },
    {
      q: "¿Qué hacer cuando rechazan un anuncio?",
      a: "Lee el motivo en la cuenta, corrige, espera el re-review. Ante un error claro — appeal vía Help con IDs del anuncio.",
    },
    {
      q: "¿Esto aplica también a ads de Instagram?",
      a: "A menudo sí: una cuenta Meta y políticas similares en superficies relacionadas, con matices de formato.",
    },
    {
      q: "¿Dónde está el overview del canal?",
      a: "En la pieza de Facebook Ads / Meta Ads — trabajos, pixel y lógica de test.",
    },
  ],
  sections: [
    {
      title: "Creatividad rechazada: contenido y visuals",
      level: 2,
      paras: [
        "Bienes y servicios prohibidos (armas, algunos medicamentos, tabaco, vigilancia, 18+, etc.) se cortan en el intake — la lista completa vive solo en las policies actuales. Las promesas «grises» no salvan un diseño bonito.",
        "Before/after y close-ups impactantes del cuerpo con efectos irreales son un rechazo clásico. UI interactiva falsa en la imagen (botón Play fantasma, notificación) cuenta como clickbait: la gente toca «como nativo» y aterriza en un sitio.",
        "El texto sobrecargado en la imagen pega al delivery; no repetimos el mito duro del «20%» como ley actual — apunta a poco texto, oferta grande, legibilidad móvil.",
      ],
      lists: [
        {
          intro: "Filtro visual rápido:",
          items: [
            "sin temas prohibidos",
            "sin before/after ni botones de UI falsos",
            "mínimo texto en la foto",
            "oferta honesta — sin garantías milagro",
          ],
        },
      ],
    },
    {
      title: "Wording, branding Meta y enlaces",
      level: 2,
      paras: [
        "Las menciones de Facebook / Instagram siguen reglas de marca: ortografía correcta, sin logos distorsionados, sin promesas «grises» tipo «ayudamos a hackear una cuenta». Revisa las brand guidelines de la plataforma.",
        "Atributos personales en el copy («ya eres mayor — ven aquí») están prohibidos aunque el targeting por edad en settings sea lícito. Ataques a la autoestima («¿sigues con sobrepeso?») y garantías de ingresos no verificadas también se cortan.",
        "La Display URL debe coincidir con el landing real: un enlace corto «bonito» no es para spoofing de dominio.",
      ],
      notes: [
        {
          title: "Importante",
          text: "Promesas tipo «20.000 $ en dos días» sin base son camino directo al rechazo y riesgo reputacional.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Aprobado pero no corre: puja y audiencias",
      level: 2,
      paras: [
        "Una puja baja o un techo manual por debajo del mercado deja el anuncio sin wins de subasta. Al inicio, estrategias auto más data de learning suelen ganar a un corte duro de CPA demasiado pronto.",
        "Audiencias solapadas entre ad sets compiten consigo mismas: un segmento — una lógica de puja. Chequea overlaps en las tools de audiencia de la cuenta.",
        "Targeting estrecho + presupuesto diminuto + learning = «silencio». Expande o espera el learning — no lo confundas con un ban.",
      ],
      links: [
        {
          label: "Facebook Ads / Meta Ads",
          href: "/es/blog/facebook-ads/",
        },
        {
          label: "Remarketing Meta",
          href: "/es/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "Qué hacer cuando hay un problema",
      level: 2,
      paras: [
        "Lee el texto del rechazo → corrige creatividad o settings → espera el re-review. El email de la cuenta a menudo duplica el estado.",
        "Si estás seguro de cumplir — appeal vía Help: IDs de cuenta y anuncio, hechos breves. No crees clones con la misma violación.",
        "Mantén una checklist de policy para tu nicho (salud, finanzas, before/after) — más barato que quemar creatividades en bucles de rechazo.",
      ],
      lists: [
        {
          intro: "Orden de triage:",
          items: [
            "estado: rechazado vs activo sin delivery",
            "motivo en Ads Manager",
            "creatividad vs puja/audiencia",
            "fix → re-review",
            "appeal solo cuando estés seguro",
          ],
        },
      ],
    },
  ],
  closing: [
    "Chequea la creatividad contra Advertising Standards antes de subir, quita clickbait y etiquetas personales — pasarás review a la primera más a menudo que tras una docena de edits «a ojo».",
  ],
  related: [
    "facebook-ads",
    "retargeting-meta",
    "keisy-facebook-ads",
    "nastroika-reklamy-instagram",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
  ],
};

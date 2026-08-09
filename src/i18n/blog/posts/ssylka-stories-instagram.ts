import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylka-stories-instagram — same structure as RU JSON. */
export const ssylkaStoriesInstagramEn: BlogPost = {
  slug: "ssylka-stories-instagram",
  title:
    "Links in Instagram Stories: sticker, CTA, and what happened to “swipe up”",
  date: "2020-09-11",
  category: "SMM",
  cover: "/images/blog/ssylka-stories-instagram/cover-en.webp",
  excerpt:
    "How to add a tappable link in Instagram Stories: the Link sticker, internal jumps, ads, and limits — without outdated “swipe up” as the only method.",
  lead: [
    "“Swipe up” in Stories was the old name for the gesture to an external link. Today it’s more often a Link sticker or CTA button: the follower taps and goes to a site, post, or another profile.",
    "Below: internal vs. external taps, who gets the link sticker, fallbacks without it, and when ads make sense. Follower thresholds and menu labels have changed many times — check Meta Help. Product note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Does swipe-up still work?",
      a: "As a mass gesture for everyone — no: it was replaced by a link sticker or button. The idea is the same: a fast jump from Stories.",
    },
    {
      q: "Do I need exactly 10,000 followers?",
      a: "External swipe used to often need a threshold. Access now depends on account type, region, and current Meta rules — don’t rely on a figure from 2017–2020 guides.",
    },
    {
      q: "How is a Stories link different from the profile bio link?",
      a: "Bio is a permanent URL on the profile. A Stories link lives ~24 hours (or in Highlights) and starts from a specific frame.",
    },
    {
      q: "Can I do without a link sticker?",
      a: "Yes: mention @, add a post to the story, type the URL (not always tappable), send via Direct, or put a link in bio. Effectiveness is lower than a sticker tap.",
    },
    {
      q: "Do Story ads replace an organic link?",
      a: "Ads Stories with a URL are a separate ads-account tool. The organic sticker is for your audience without paying for the impression.",
    },
  ],
  sections: [
    {
      title: "Why a link in Stories",
      level: 2,
      paras: [
        "A fast jump to a landing, product, booking, form, YouTube, or Telegram without hunting by hand.",
        "For warming up a promo, webinar, or new collection — frame + clear CTA beats “link in bio, go find it.”",
        "Internal jumps (to a post, mention, another story) are more widely available and aren’t always tied to an “external” sticker.",
      ],
    },
    {
      title: "Internal and external jumps",
      level: 2,
      paras: [
        "Internal: add your post to Stories, tag an account with a sticker or @, share a mention, send people to Reels inside the ecosystem — via current “share” buttons.",
        "External: a site or service URL via the link sticker (or an ad object with a destination URL).",
        "Don’t publish links to banned or deceptive content: moderation cuts jumps and risks the account.",
      ],
      lists: [
        {
          intro: "Typical external URL goals:",
          items: [
            "catalog / product card",
            "lead or payment landing",
            "article / guide",
            "Live registration",
            "a messenger channel",
          ],
        },
      ],
    },
    {
      title: "How to add a link sticker",
      level: 2,
      paras: [
        "Create Stories → stickers → Link (or equivalent) → paste URL → button label (short CTA: “Buy,” “Read,” “Book”).",
        "Test the jump preview yourself. Long URLs can be shortened with an official short domain or your own — don’t give your Instagram password to third-party “shorteners.”",
        "If there’s no sticker — check profile type (professional/business), app update, and Meta Help: access isn’t “unlocked” with gray apps.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Promising “swipe like 2018” and teaching follower-threshold workarounds. The working path is the current sticker plus a clear offer on the first screen.",
        },
      ],
    },
    {
      title: "If there’s no sticker: workable fallbacks",
      level: 2,
      paras: [
        "Link in the profile bio + Stories with “tap the link in bio.”",
        "A short URL in large text + QR (where it fits).",
        "Direct to people who replied to a question sticker or reaction — without mass spam.",
        "Stories ads with a destination URL in the Meta ads account — when you need reach beyond followers.",
      ],
      notes: [
        {
          title: "We don’t recommend",
          kind: "tip",
          text: "Mass Direct blasts to everyone and third-party “swipe access boosts” — risk of limits and reports.",
        },
      ],
    },
    {
      title: "Ads Stories with a link",
      level: 2,
      paras: [
        "In Ads Manager / Meta ads account you create an ad with Stories placement and a destination URL. Goals — traffic, conversions, installs, etc. by task.",
        "Creative is vertical 9:16, offer readable without sound, link goes to a fast mobile page.",
        "Ads Manager click paths change — stick to Meta Ads Help, not 2020 screenshots.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The “swipe” idea lives in the link sticker and ads CTA; the “exactly 10k” threshold from old articles isn’t dogma.",
        "Clear frame and URL first, then scale with ads — not the other way around.",
      ],
    },
  ],
  closing: [
    "Make one Stories with a sticker (or bio CTA), measure taps, and only then boost reach with ads.",
  ],
  related: [
    "ssylka-instagram",
    "video-stories-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "skachat-stories-instagram",
    "idei-storis-vk",
  ],
};

/** ES overlay for ssylka-stories-instagram — same structure as RU JSON / EN. */
export const ssylkaStoriesInstagramEs: BlogPost = {
  slug: "ssylka-stories-instagram",
  title:
    "Enlaces en Instagram Stories: sticker, CTA y qué pasó con el «swipe up»",
  date: "2020-09-11",
  category: "SMM",
  cover: "/images/blog/ssylka-stories-instagram/cover.webp",
  excerpt:
    "Cómo añadir un enlace tocable en Instagram Stories: el sticker Link, saltos internos, ads y límites — sin el «swipe up» obsoleto como único método.",
  lead: [
    "El «swipe up» en Stories era el nombre antiguo del gesto hacia un enlace externo. Hoy suele ser un sticker Link o un botón CTA: el follower toca y va a un sitio, post u otro perfil.",
    "Abajo: taps internos vs. externos, quién obtiene el sticker de enlace, fallbacks sin él y cuándo tienen sentido los ads. Umbrales de followers y etiquetas de menú han cambiado muchas veces — consulta Meta Help. La nota de producto está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Sigue funcionando el swipe-up?",
      a: "Como gesto masivo para todos — no: lo sustituyó un sticker de enlace o un botón. La idea es la misma: un salto rápido desde Stories.",
    },
    {
      q: "¿Necesito exactamente 10.000 followers?",
      a: "El swipe externo a menudo exigía un umbral. El acceso ahora depende del tipo de cuenta, la región y las reglas actuales de Meta — no te fíes de una cifra de guías de 2017–2020.",
    },
    {
      q: "¿En qué se diferencia un enlace de Stories del link del bio?",
      a: "El bio es una URL permanente en el perfil. Un enlace de Stories vive ~24 horas (o en Highlights) y parte de un frame concreto.",
    },
    {
      q: "¿Puedo prescindir del sticker de enlace?",
      a: "Sí: menciona @, añade un post a la story, escribe la URL (no siempre tocable), envía por Direct o pon un enlace en el bio. La efectividad es menor que un tap al sticker.",
    },
    {
      q: "¿Los ads de Stories sustituyen un enlace orgánico?",
      a: "Stories de ads con URL son una herramienta aparte de la cuenta de ads. El sticker orgánico es para tu audiencia sin pagar la impresión.",
    },
  ],
  sections: [
    {
      title: "Por qué un enlace en Stories",
      level: 2,
      paras: [
        "Un salto rápido a un landing, producto, reserva, formulario, YouTube o Telegram sin buscar a mano.",
        "Para calentar una promo, webinar o colección nueva — frame + CTA claro gana a «link in bio, ve a buscarlo».",
        "Los saltos internos (a un post, mención, otra story) están más ampliamente disponibles y no siempre van ligados a un sticker «externo».",
      ],
    },
    {
      title: "Saltos internos y externos",
      level: 2,
      paras: [
        "Internos: añade tu post a Stories, etiqueta una cuenta con sticker o @, comparte una mención, envía gente a Reels dentro del ecosistema — vía los botones actuales de «share».",
        "Externos: URL de un sitio o servicio vía el sticker Link (o un objeto de ad con destination URL).",
        "No publiques enlaces a contenido prohibido o engañoso: la moderación corta saltos y arriesga la cuenta.",
      ],
      lists: [
        {
          intro: "Metas típicas de URL externa:",
          items: [
            "catálogo / ficha de producto",
            "landing de lead o pago",
            "artículo / guía",
            "registro a Live",
            "un canal de messenger",
          ],
        },
      ],
    },
    {
      title: "Cómo añadir un sticker Link",
      level: 2,
      paras: [
        "Crea Stories → stickers → Link (o equivalente) → pega URL → etiqueta del botón (CTA corto: «Buy», «Read», «Book»).",
        "Prueba tú el preview del salto. Las URLs largas se pueden acortar con un dominio corto oficial o el tuyo — no des tu contraseña de Instagram a «shorteners» de terceros.",
        "Si no hay sticker — revisa tipo de perfil (professional/business), actualización de la app y Meta Help: el acceso no se «desbloquea» con apps grises.",
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Prometer «swipe como en 2018» y enseñar workarounds de umbral de followers. El camino que funciona es el sticker actual más una oferta clara en el first screen.",
        },
      ],
    },
    {
      title: "Si no hay sticker: fallbacks que funcionan",
      level: 2,
      paras: [
        "Enlace en el bio del perfil + Stories con «tap the link in bio».",
        "URL corta en texto grande + QR (donde encaje).",
        "Direct a quien respondió a un sticker de pregunta o a una reacción — sin spam masivo.",
        "Ads de Stories con destination URL en la cuenta de ads de Meta — cuando necesitas reach más allá de los followers.",
      ],
      notes: [
        {
          title: "No recomendamos",
          kind: "tip",
          text: "Blasts masivos de Direct a todos y «boosts de acceso swipe» de terceros — riesgo de límites y reports.",
        },
      ],
    },
    {
      title: "Ads Stories con enlace",
      level: 2,
      paras: [
        "En Ads Manager / cuenta de ads de Meta creas un ad con placement Stories y una destination URL. Objetivos — traffic, conversions, installs, etc. según la tarea.",
        "El creativo es vertical 9:16, oferta legible sin sonido, el enlace va a una página móvil rápida.",
        "Las rutas de clic de Ads Manager cambian — quédate con Meta Ads Help, no con capturas de 2020.",
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "La idea del «swipe» vive en el sticker Link y el CTA de ads; el umbral de «exactamente 10k» de artículos viejos no es dogma.",
        "Primero frame y URL claros, luego escala con ads — no al revés.",
      ],
    },
  ],
  closing: [
    "Haz una Stories con sticker (o CTA en bio), mide taps y solo entonces impulsa el reach con ads.",
  ],
  related: [
    "ssylka-instagram",
    "video-stories-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "skachat-stories-instagram",
    "idei-storis-vk",
  ],
};

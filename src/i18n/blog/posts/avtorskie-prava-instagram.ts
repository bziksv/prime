import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtorskie-prava-instagram — same structure as RU JSON. */
export const avtorskiePravaInstagramEn: BlogPost = {
  slug: "avtorskie-prava-instagram",
  title: "Copyright on Instagram: music, photos, and claims",
  date: "2020-08-07",
  category: "SMM",
  cover: "/images/blog/avtorskie-prava-instagram/cover-en.webp",
  excerpt:
    "How to stay clear of copyright trouble on Instagram*: music and photos, what to do after a claim, how to protect your own work — without DRM-bypass guides.",
  lead: [
    "On Instagram*, posts with someone else’s music, photos, or video often get rightsholder claims: sound muted, post removed, account restricted. The reliable path is your own or licensed content — not “bypassing” protection.",
    "Below: how violations get spotted, how to use music and photos legally, what to do after a mistaken claim, and how to protect your materials. We don’t cover DRM bypass or pirate schemes.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you use a track from the Reels library?",
      a: "If the track is available in the official library for your region and account type — usually yes under its rules. Third-party “download and overlay” — risk.",
    },
    {
      q: "Is your own photo always safe?",
      a: "Your shot — yes. But other people’s faces, brands, or someone else’s design in the frame can still draw claims. Commerce — be careful with model releases.",
    },
    {
      q: "What happens after repeat violations?",
      a: "Publishing limits, content removal, up to account blocks. Depends on platform policy and claim severity.",
    },
    {
      q: "How do you dispute a mistaken claim?",
      a: "Through the official counter-notice/appeal flow in Instagram*/Meta Help. Prepare proof of rights to the material.",
    },
    {
      q: "Are stock photos free for Reels?",
      a: "Only under that library’s license. “Found on Google” is not a license.",
    },
    {
      q: "Is someone else’s meme with music OK?",
      a: "Often no: both the image and the track may be protected. Prefer your frame and allowed sound.",
    },
    {
      q: "How do you protect your photos?",
      a: "Publish originals, watch for copies, file claims via official forms when needed. Watermarks are optional — not a silver bullet.",
    },
    {
      q: "Is bypassing a sound block legal?",
      a: "Circumventing rightsholder restrictions is a bad, risky idea. Swap to an allowed track or remove the disputed part.",
    },
  ],
  sections: [
    {
      title: "How violations get noticed",
      level: 2,
      paras: [
        "The platform and partners match audio fingerprints, take rightsholder claims, and moderate user reports. Automation isn’t perfect: false positives happen — then use the official appeal, not a grey workaround.",
        "Commercial accounts and ads are checked harder: what “worked for a creator” may get cut for a brand.",
      ],
      lists: [
        {
          intro: "Typical triggers:",
          items: [
            "a known track in full",
            "someone else’s clip/TV fragment",
            "stock without a license",
            "mass claims on one account",
          ],
        },
      ],
    },
    {
      title: "Music",
      level: 2,
      paras: [
        "Use sounds from the official library, tracks with an explicit social license, or your own original. Cutting a radio hit “to 14 seconds” often still gets caught by Content ID–like systems.",
        "For brands, clear music with legal/agency early: sync rights and region differ.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "check track availability before shooting a series",
            "keep license proof",
            "have a backup allowed track",
            "don’t download “stems” from pirate sites",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Assuming “any hit is fine for Stories.” Rules and libraries differ by format and region.",
        },
      ],
    },
    {
      title: "Photos and video",
      level: 2,
      paras: [
        "Your shoots, licensed stock, UGC with the author’s permission. A screenshot of someone else’s post with a logo “for review” is a grey zone; for commerce prefer consent or your own frame.",
        "Other people’s photos from image search without a license — a classic violation. AI images: read the generator’s terms and watch brand lookalikes.",
      ],
      lists: [
        {
          intro: "Pre-post checklist:",
          items: [
            "who authored the frame",
            "is there a license/permission",
            "no unnecessary third-party logo in focus",
            "text and fonts not copied from someone else’s creative",
          ],
        },
      ],
    },
    {
      title: "If a claim arrives or sound is muted",
      level: 2,
      paras: [
        "Read the notice: what exactly was flagged. Replace with legal material or remove the disputed part. If you’re sure of your rights — file an official dispute with proof (contract, sources, shoot date).",
        "Don’t hunt “how to bypass a track block” guides: that breaks rules and rightsholder interests. The legal path is another sound or a license.",
      ],
      lists: [
        {
          intro: "Order of actions:",
          items: [
            "keep proof of rights",
            "follow the appeal form in Help",
            "don’t spawn mirrors of the same violation",
            "update the team playbook",
          ],
        },
      ],
    },
    {
      title: "Protecting your own content",
      level: 2,
      paras: [
        "Publish originals, monitor copies (reverse image search, mentions). File claims for your rights via official platform channels. Keep dates and source files.",
        "Contract with photographer/editor: who owns the result — before the shoot starts.",
      ],
      lists: [
        {
          intro: "Brand minimum:",
          items: [
            "license registry for music/stock",
            "UGC permission template",
            "owner for claim review",
            "editorial ban on “download from Google”",
          ],
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Liability and article limits",
      level: 2,
      paras: [
        "Rights violations can bring civil claims and platform sanctions. This article is informational: Instagram* is a Meta product; in the Russian Federation Meta’s activity is recognized as extremist. We don’t encourage using the platform; if you publish — respect rights.",
        "Jurisdiction nuances — ask a lawyer: this is not legal advice.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "pirate tracks “for Reels”",
            "Content ID bypass",
            "other people’s photos without a license",
            "ignoring repeat strikes",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Buying a license or shooting your own is cheaper than cleaning up a ban and claims.",
        },
      ],
      links: [
        {
          label: "YouTube strike",
          href: "/en/blog/strayk-youtube/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan-instagram",
    "strayk-youtube",
    "foto-instagram",
    "blog-instagram",
    "menedzher-smm",
  ],
};

/** ES overlay for avtorskie-prava-instagram — same structure as RU JSON / EN. */
export const avtorskiePravaInstagramEs: BlogPost = {
  slug: "avtorskie-prava-instagram",
  title: "Copyright en Instagram: música, fotos y reclamaciones",
  date: "2020-08-07",
  category: "SMM",
  cover: "/images/blog/avtorskie-prava-instagram/cover-es.webp",
  excerpt:
    "Cómo mantenerse lejos de problemas de copyright en Instagram*: música y fotos, qué hacer tras una claim, cómo proteger tu propio trabajo — sin guías de bypass de DRM.",
  lead: [
    "En Instagram*, los posts con música, fotos o vídeo ajenos a menudo reciben claims del titular: sonido muteado, post retirado, cuenta restringida. El camino fiable es contenido propio o con licencia — no «saltar» la protección.",
    "Abajo: cómo se detectan las violaciones, cómo usar música y fotos de forma legal, qué hacer tras una claim errónea y cómo proteger tus materiales. No cubrimos bypass de DRM ni esquemas pirate.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Se puede usar un track de la biblioteca de Reels?",
      a: "Si el track está disponible en la biblioteca oficial para tu región y tipo de cuenta — suele sí según sus reglas. «Descargar y overlay» de terceros — riesgo.",
    },
    {
      q: "¿Tu propia foto siempre es segura?",
      a: "Tu toma — sí. Pero caras ajenas, marcas o el diseño de otro en el frame aún pueden atraer claims. Comercio — cuidado con model releases.",
    },
    {
      q: "¿Qué pasa tras violaciones repetidas?",
      a: "Límites de publicación, retirada de contenido, hasta bloqueos de cuenta. Depende de la política de la plataforma y de la gravedad de la claim.",
    },
    {
      q: "¿Cómo disputas una claim errónea?",
      a: "Por el flujo oficial de counter-notice/appeal en Instagram*/Meta Help. Prepara prueba de derechos sobre el material.",
    },
    {
      q: "¿Las fotos de stock son gratis para Reels?",
      a: "Solo bajo la licencia de esa biblioteca. «Encontrado en Google» no es una licencia.",
    },
    {
      q: "¿Un meme ajeno con música está bien?",
      a: "A menudo no: tanto la imagen como el track pueden estar protegidos. Prefiere tu frame y un sonido permitido.",
    },
    {
      q: "¿Cómo proteges tus fotos?",
      a: "Publica originales, vigila copias, presenta claims vía formularios oficiales cuando haga falta. Las watermarks son opcionales — no una bala de plata.",
    },
    {
      q: "¿Es legal saltarse un bloqueo de sonido?",
      a: "Eludir restricciones del titular es una idea mala y arriesgada. Cambia a un track permitido o quita la parte en disputa.",
    },
  ],
  sections: [
    {
      title: "Cómo se detectan las violaciones",
      level: 2,
      paras: [
        "La plataforma y partners cruzan fingerprints de audio, reciben claims del titular y moderan reportes de usuarios. La automatización no es perfecta: hay falsos positivos — entonces usa el appeal oficial, no un workaround gris.",
        "Las cuentas comerciales y los ads se revisan más duro: lo que «funcionó para un creator» puede cortarse para una marca.",
      ],
      lists: [
        {
          intro: "Triggers típicos:",
          items: [
            "un track conocido completo",
            "un clip/fragmento de TV ajeno",
            "stock sin licencia",
            "claims en masa sobre una cuenta",
          ],
        },
      ],
    },
    {
      title: "Música",
      level: 2,
      paras: [
        "Usa sonidos de la biblioteca oficial, tracks con licencia social explícita o tu propio original. Cortar un hit de radio «a 14 segundos» a menudo sigue cayendo en sistemas tipo Content ID.",
        "Para marcas, limpia la música con legal/agencia pronto: los derechos de sync y la región difieren.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "revisa disponibilidad del track antes de rodar una serie",
            "guarda prueba de licencia",
            "ten un track permitido de respaldo",
            "no descargues «stems» de sitios pirate",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Asumir que «cualquier hit vale para Stories». Las reglas y bibliotecas difieren por formato y región.",
        },
      ],
    },
    {
      title: "Fotos y vídeo",
      level: 2,
      paras: [
        "Tus tomas, stock con licencia, UGC con permiso del autor. Un screenshot del post de otro con logo «para reseña» es zona gris; para comercio prefiere consentimiento o tu propio frame.",
        "Fotos ajenas de búsqueda de imágenes sin licencia — una violación clásica. Imágenes IA: lee los términos del generador y vigila lookalikes de marca.",
      ],
      lists: [
        {
          intro: "Checklist pre-post:",
          items: [
            "quién es autor del frame",
            "hay licencia/permiso",
            "sin logo de terceros innecesario en foco",
            "texto y fuentes no copiados del creative de otro",
          ],
        },
      ],
    },
    {
      title: "Si llega una claim o el sonido se mutea",
      level: 2,
      paras: [
        "Lee el aviso: qué se marcó exactamente. Sustituye por material legal o quita la parte en disputa. Si estás seguro de tus derechos — presenta una disputa oficial con prueba (contrato, fuentes, fecha de toma).",
        "No busques guías de «cómo saltar un bloqueo de track»: eso rompe reglas e intereses del titular. El camino legal es otro sonido o una licencia.",
      ],
      lists: [
        {
          intro: "Orden de acciones:",
          items: [
            "guarda prueba de derechos",
            "sigue el formulario de appeal en Help",
            "no spawnees mirrors de la misma violación",
            "actualiza el playbook del equipo",
          ],
        },
      ],
    },
    {
      title: "Proteger tu propio contenido",
      level: 2,
      paras: [
        "Publica originales, monitoriza copias (búsqueda inversa de imágenes, menciones). Presenta claims por tus derechos vía canales oficiales de la plataforma. Guarda fechas y archivos fuente.",
        "Contrato con fotógrafo/editor: quién es dueño del resultado — antes de que empiece el rodaje.",
      ],
      lists: [
        {
          intro: "Mínimo de marca:",
          items: [
            "registro de licencias de música/stock",
            "plantilla de permiso UGC",
            "owner para revisar claims",
            "prohibición editorial de «descargar de Google»",
          ],
        },
      ],
      links: [
        {
          label: "Plan de contenido de Instagram",
          href: "/es/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Responsabilidad y límites del artículo",
      level: 2,
      paras: [
        "Las violaciones de derechos pueden traer claims civiles y sanciones de la plataforma. Este artículo es informativo: Instagram* es un producto de Meta; en la Federación Rusa la actividad de Meta se reconoce como extremista. No fomentamos el uso de la plataforma; si publicas — respeta los derechos.",
        "Matices de jurisdicción — pregunta a un abogado: esto no es consejo legal.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "tracks pirate «para Reels»",
            "bypass de Content ID",
            "fotos ajenas sin licencia",
            "ignorar strikes repetidos",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Comprar una licencia o rodar lo tuyo sale más barato que limpiar un ban y claims.",
        },
      ],
      links: [
        {
          label: "Strike de YouTube",
          href: "/es/blog/strayk-youtube/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan-instagram",
    "strayk-youtube",
    "foto-instagram",
    "blog-instagram",
    "menedzher-smm",
  ],
};

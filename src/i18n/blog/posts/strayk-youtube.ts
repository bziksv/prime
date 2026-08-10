import type { BlogPost } from "../../../data/blog";

/** EN overlay for strayk-youtube — same structure as RU JSON. */
export const straykYoutubeEn: BlogPost = {
  slug: "strayk-youtube",
  title: "YouTube strike: what it is, why you get one, and what to do",
  date: "2021-08-24",
  category: "SMM",
  cover: "/images/blog/strayk-youtube/cover-en.webp",
  excerpt:
    "How a Community Guidelines strike differs from a copyright complaint, which limits apply, how to check channel status, and how to appeal or avoid sanctions.",
  lead: [
    "A YouTube strike is a sanction for breaking the rules: channel feature limits up to removal. In slang, “throw a strike” means reporting a video or channel.",
    "Below: what earns a strike, how community and copyright tracks differ, how to check status, and what to do on a false claim. Studio labels change — verify against current YouTube Help.",
  ],
  faq: [
    {
      q: "Are a strike and Content ID the same?",
      a: "No. Content ID often means a claim/monetization for the rights holder without a “community strike.” A copyright strike is a separate copyright-law track. A Community Guidelines strike is for platform policy.",
    },
    {
      q: "How many strikes until the channel is deleted?",
      a: "On the classic scheme, three active Community Guidelines strikes in a time window lead to channel removal. Exact terms are in Help — don’t copy numbers from old guides unchecked.",
    },
    {
      q: "Does a strike clear on its own?",
      a: "A Community Guidelines strike usually expires after a set period if you follow the rules. A copyright strike clears via claim withdrawal, a counter-notification, or expiry — per platform process.",
    },
    {
      q: "Can I appeal a strike?",
      a: "Yes: appeal / counter-notification with proof (correspondence, rights, context). False claims can be punished too.",
    },
    {
      q: "Where do I see channel status?",
      a: "YouTube Studio → a section like Feature eligibility / Channel status: the violation scale and details.",
    },
  ],
  sections: [
    {
      title: "What a strike is",
      level: 2,
      paras: [
        "It’s an official warning/sanction on the channel account. Moderation triggers from a report, automatic filters, or the platform’s initiative.",
        "A practice example: a store review by agreement, then a “privacy” complaint — sanctions were lifted after correspondence screenshots. Takeaway: keep proof of agreements.",
      ],
      lists: [
        {
          intro: "Two common tracks:",
          items: [
            "Community Guidelines — community policy",
            "Copyright — rights to music, video, images",
          ],
        },
      ],
      links: [
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "What earns sanctions",
      level: 2,
      paras: [
        "Don’t publish others’ content without rights, pass off others’ videos as yours, or dodge Content ID with a token trim. Community rules ban violence, bullying, NSFW outside allowed context, dangerous challenges, spam, fraud, and disclosing others’ personal data without grounds.",
      ],
      lists: [
        {
          intro: "Risk zones:",
          items: [
            "music and TV/film clips without a license",
            "thumbnails that lie about the content",
            "links to malware/banned resources",
            "repeat violations after warnings",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Tip",
          text: "Rules update. Before a risky format, read the current Community Guidelines and Copyright Center.",
        },
      ],
    },
    {
      title: "Limits and channel status",
      level: 2,
      paras: [
        "After a strike, long uploads, livestreams, part of monetization, and visibility are often cut. Details depend on type and “severity.”",
        "In Studio, check feature status: green zone — clean; closer to warnings — active sanctions and a “learn more” link.",
      ],
      lists: [
        {
          intro: "Typical progression (confirm in Help):",
          items: [
            "first strike — limits for a period",
            "repeat — stricter (incl. monetization)",
            "a series of active ones — channel removal risk",
          ],
        },
      ],
    },
    {
      title: "Report, talks, appeal",
      level: 2,
      paras: [
        "The platform advises contacting the channel owner first. A rights holder can withdraw a claim — faster than a fight.",
        "Formal paths: Report under the video / Copyright removal request. For the respondent — appeal or counter-notification with proof. Review time depends on the case type.",
      ],
      lists: [
        {
          intro: "If you got a strike:",
          items: [
            "read the reason in Studio",
            "remove/fix the content on a real violation",
            "gather proof if it’s an error",
            "don’t spawn mirror channels to dodge a ban — that’s a separate violation",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "A strike is a signal to follow the rules and rights. Tell apart community policy and copyright, watch status in Studio, keep permissions for reviews and third-party material. Best defense — your own content and a check before publishing.",
      ],
    },
  ],
};

/** ES overlay for strayk-youtube — same structure as RU JSON / EN. */
export const straykYoutubeEs: BlogPost = {
  slug: "strayk-youtube",
  title: "Strike en YouTube: qué es, por qué te llega y qué hacer",
  date: "2021-08-24",
  category: "SMM",
  cover: "/images/blog/strayk-youtube/cover-es.webp",
  excerpt:
    "En qué se diferencia un strike de Community Guidelines de una reclamación de copyright, qué límites aplican, cómo revisar el estado del canal y cómo apelar o evitar sanciones.",
  lead: [
    "Un strike de YouTube es una sanción por romper las reglas: límites de funciones del canal hasta la eliminación. En la jerga, «tirar un strike» significa reportar un vídeo o un canal.",
    "Abajo: qué te gana un strike, en qué se diferencian las vías de comunidad y copyright, cómo revisar el estado y qué hacer ante una reclamación falsa. Las etiquetas de Studio cambian — verifica con la Help actual de YouTube.",
  ],
  faq: [
    {
      q: "¿Un strike y Content ID son lo mismo?",
      a: "No. Content ID suele ser un claim/monetización para el titular de derechos sin un «strike de comunidad». Un copyright strike es una vía aparte de ley de copyright. Un Community Guidelines strike es por la política de la plataforma.",
    },
    {
      q: "¿Cuántos strikes hasta que se borra el canal?",
      a: "En el esquema clásico, tres Community Guidelines strikes activos en una ventana de tiempo llevan a la eliminación del canal. Los términos exactos están en Help — no copies cifras de guías antiguas sin comprobar.",
    },
    {
      q: "¿Un strike se limpia solo?",
      a: "Un Community Guidelines strike suele caducar tras un periodo fijado si sigues las reglas. Un copyright strike se limpia por retirada del claim, una counter-notification o caducidad — según el proceso de la plataforma.",
    },
    {
      q: "¿Puedo apelar un strike?",
      a: "Sí: appeal / counter-notification con pruebas (correspondencia, derechos, contexto). Las reclamaciones falsas también pueden castigarse.",
    },
    {
      q: "¿Dónde veo el estado del canal?",
      a: "YouTube Studio → una sección tipo Feature eligibility / Channel status: la escala de infracción y los detalles.",
    },
  ],
  sections: [
    {
      title: "Qué es un strike",
      level: 2,
      paras: [
        "Es un aviso/sanción oficial en la cuenta del canal. La moderación se dispara por un report, filtros automáticos o iniciativa de la plataforma.",
        "Ejemplo de práctica: review de una tienda por acuerdo, luego una queja de «privacidad» — las sanciones se levantaron tras capturas de la correspondencia. Takeaway: guarda pruebas de los acuerdos.",
      ],
      lists: [
        {
          intro: "Dos vías habituales:",
          items: [
            "Community Guidelines — política de comunidad",
            "Copyright — derechos sobre música, vídeo, imágenes",
          ],
        },
      ],
      links: [
        {
          label: "Promoción en YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Qué te gana sanciones",
      level: 2,
      paras: [
        "No publiques contenido ajeno sin derechos, no hagas pasar vídeos ajenos por tuyos ni esquives Content ID con un recorte simbólico. Las reglas de comunidad prohíben violencia, bullying, NSFW fuera del contexto permitido, retos peligrosos, spam, fraude y revelar datos personales ajenos sin base.",
      ],
      lists: [
        {
          intro: "Zonas de riesgo:",
          items: [
            "música y clips de TV/cine sin licencia",
            "thumbnails que mienten sobre el contenido",
            "enlaces a malware/recursos prohibidos",
            "infracciones repetidas tras avisos",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Consejo",
          text: "Las reglas se actualizan. Antes de un formato arriesgado, lee las Community Guidelines y el Copyright Center actuales.",
        },
      ],
    },
    {
      title: "Límites y estado del canal",
      level: 2,
      paras: [
        "Tras un strike suelen cortarse uploads largos, livestreams, parte de la monetización y la visibilidad. Los detalles dependen del tipo y de la «gravedad».",
        "En Studio revisa el estado de funciones: zona verde — limpio; más cerca de avisos — sanciones activas y un enlace «learn more».",
      ],
      lists: [
        {
          intro: "Progresión típica (confirma en Help):",
          items: [
            "primer strike — límites por un periodo",
            "repetición — más estricto (incl. monetización)",
            "una serie de activos — riesgo de eliminación del canal",
          ],
        },
      ],
    },
    {
      title: "Report, charlas, appeal",
      level: 2,
      paras: [
        "La plataforma aconseja contactar primero al dueño del canal. Un titular de derechos puede retirar un claim — más rápido que pelear.",
        "Vías formales: Report bajo el vídeo / Copyright removal request. Para el afectado — appeal o counter-notification con pruebas. El tiempo de revisión depende del tipo de caso.",
      ],
      lists: [
        {
          intro: "Si te llegó un strike:",
          items: [
            "leer el motivo en Studio",
            "quitar/arreglar el contenido si la infracción es real",
            "reunir pruebas si es un error",
            "no crear canales espejo para esquivar un ban — eso es otra infracción",
          ],
        },
      ],
    },
    {
      title: "Cierre breve",
      level: 2,
      paras: [
        "Un strike es una señal para seguir las reglas y los derechos. Separa la política de comunidad del copyright, mira el estado en Studio, guarda permisos para reviews y material de terceros. La mejor defensa — contenido propio y una revisión antes de publicar.",
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** ES overlay for oformlenie-email — same structure as RU JSON. */
export const oformlenieEmailEs: BlogPost = {
  slug: "oformlenie-email",
  title: "Diseño de email: jerarquía y estilo",
  date: "2019-07-30",
  category: "Email marketing",
  cover: "/images/blog/oformlenie-email/cover-es.webp",
  excerpt:
    "Cómo diseñar un email: errores habituales, ancho y módulos, jerarquía visual, imágenes, estilo de marca y checklist previo al envío — junto a la maquetación HTML técnica.",
  lead: [
    "El diseño de email no es «hacerlo bonito» — es dejar claro en segundos: quién escribe, para qué existe el email y qué pulsar.",
    "Abajo: errores habituales, estructura, jerarquía, trabajo con imágenes y un estilo unificado de serie. Cómo se renderiza en clientes de correo está en el texto de maquetación HTML.",
  ],
  faq: [
    {
      q: "¿Qué ancho de email usar?",
      a: "Una guía habitual de columna desktop es unos 600px. En móvil importan más una columna y botones grandes que «meter tres».",
    },
    {
      q: "¿Cuántas columnas debe tener un email?",
      a: "En móvil una es más segura. Dos — solo con un stack responsive.",
    },
    {
      q: "¿Por qué un estilo unificado de serie?",
      a: "Reconocimiento de marca y confianza. Cada email «de otro planeta» baja el reconocimiento del remitente.",
    },
    {
      q: "¿Dónde poner la oferta principal?",
      a: "Arriba en el email: preheader, primer pantallazo, CTA antes de un scroll largo.",
    },
    {
      q: "¿Mucha decoración es buena en email?",
      a: "No. Líneas de más, fotos de relleno y texto minúsculo hieren la jerarquía.",
    },
    {
      q: "¿Usar fuentes de marca en email?",
      a: "Sí con web fonts y un fallback de sistema. La legibilidad gana a la tipografía exótica.",
    },
    {
      q: "¿En qué se diferencia el diseño de la maquetación?",
      a: "Diseño es composición y sentido. Maquetación es HTML/CSS para que no se caiga en Outlook.",
    },
  ],
  sections: [
    {
      title: "Errores típicos",
      level: 2,
      paras: [
        "El email «repela» pero no se entiende por qué; la intención del diseñador no se lee; no hay estilo de serie; el remitente es invisible; ritmo caótico de bloques; texto minúsculo; sin CTA claro.",
        "Primero corta ruido y restaura jerarquía — a menudo no hace falta «magia».",
      ],
    },
    {
      title: "Estructura, jerarquía, imágenes",
      level: 2,
      paras: [
        "Grid modular: header de marca → oferta/lead → prueba → CTA → footer con baja. Pon lo importante pronto, antes de un scroll largo.",
        "Jerarquía visual: tamaño, contraste, spacing. Agrupa elementos relacionados (proximidad), separa secciones con aire.",
        "Imágenes en una misma clave: luz, crop, pies. No pongas todo el sentido solo en la imagen — algunos clientes no la mostrarán.",
      ],
      lists: [
        {
          intro: "Checklist visual rápido:",
          items: [
            "remitente/logo reconocible",
            "una idea principal",
            "un botón principal",
            "contraste de texto suficiente",
            "el estilo encaja con emails anteriores",
          ],
        },
      ],
      links: [
        {
          label: "Maquetación HTML de email",
          href: "/es/blog/verstka-email/",
        },
        {
          label: "Ejemplos de emails fuertes",
          href: "/es/blog/primery-email-rassylok/",
        },
      ],
    },
    {
      title: "Estilo de serie y chequeo final",
      level: 2,
      paras: [
        "Fija tokens: colores, botones, fuentes, spacing de módulos. Arma emails nuevos con los mismos bloques — más rápido, y la marca se sostiene.",
        "Antes de enviar: preheader, vista móvil, alt, enlaces, baja, encaje con el copy de la oferta.",
      ],
      links: [
        {
          label: "Copy de newsletter",
          href: "/es/blog/tekst-email-rassylki/",
        },
        {
          label: "Estrategia de email",
          href: "/es/blog/email-strategiya/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "El ancho «600px» y las grids modulares son guías de trabajo, no dogma. Las plantillas responsive del ESP pueden diferir; revisa previews en tus segmentos de dispositivo.",
  },
  closing: [
    "Arma módulos con jerarquía clara y un estilo unificado de serie, y deja la estabilidad técnica a las reglas de maquetación HTML — para que el diseño ayude al CTR en lugar de pelear con el cliente de correo.",
  ],
  related: [
    "verstka-email",
    "tekst-email-rassylki",
    "primery-email-rassylok",
    "email-strategiya",
    "email-marketing-2020",
    "email-dlya-biznesa",
  ],
};

/** EN overlay for oformlenie-email — same structure as RU JSON. */
export const oformlenieEmailEn: BlogPost = {
  slug: "oformlenie-email",
  title: "Email design: hierarchy and style",
  date: "2019-07-30",
  category: "Email marketing",
  cover: "/images/blog/oformlenie-email/cover-en.webp",
  excerpt:
    "How to design an email: common mistakes, width and modules, visual hierarchy, images, brand style, and a pre-send checklist — next to technical HTML layout.",
  lead: [
    "Email design isn’t “make it pretty” — it’s making clear in seconds: who is writing, why the email exists, and what to tap.",
    "Below: common mistakes, structure, hierarchy, image work, and a unified series style. How it renders in mail clients is in the HTML layout piece.",
  ],
  faq: [
    {
      q: "What email width should you use?",
      a: "A common desktop-column guide is about 600px. On mobile one column and large buttons matter more than “squeeze three in.”",
    },
    {
      q: "How many columns should an email have?",
      a: "On mobile one is safer. Two — only with a responsive stack.",
    },
    {
      q: "Why use a unified series style?",
      a: "Brand recognition and trust. Every email “from another planet” lowers sender recognition.",
    },
    {
      q: "Where should you put the main offer?",
      a: "High in the email: preheader, first screen, CTA before a long scroll.",
    },
    {
      q: "Is lots of decoration good in email?",
      a: "No. Extra lines, filler photos, and tiny text hurt hierarchy.",
    },
    {
      q: "Should you use brand fonts in email?",
      a: "Yes with web fonts and a system fallback. Readability beats exotic type.",
    },
    {
      q: "How is design different from email layout?",
      a: "Design is composition and meaning. Layout is HTML/CSS so it doesn’t fall apart in Outlook.",
    },
  ],
  sections: [
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "The email “repels” but it’s unclear why; the designer’s intent doesn’t read; no series style; sender is invisible; chaotic block rhythm; tiny text; no clear CTA.",
        "First cut noise and restore hierarchy — often no “magic” is needed.",
      ],
    },
    {
      title: "Structure, hierarchy, images",
      level: 2,
      paras: [
        "Modular grid: branded header → offer/lead → proof → CTA → footer with unsubscribe. Put the important content early, before a long scroll.",
        "Visual hierarchy: size, contrast, spacing. Group related elements (proximity), separate sections with air.",
        "Images in one key: light, crop, captions. Don’t put all meaning only in the image — some clients won’t show it.",
      ],
      lists: [
        {
          intro: "A quick visual checklist:",
          items: [
            "recognizable sender/logo",
            "one main idea",
            "one main button",
            "enough text contrast",
            "style matches previous emails",
          ],
        },
      ],
      links: [
        {
          label: "HTML email layout",
          href: "/en/blog/verstka-email/",
        },
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
      ],
    },
    {
      title: "Series style and final check",
      level: 2,
      paras: [
        "Lock tokens: colors, buttons, fonts, module spacing. Build new emails from the same blocks — faster, and the brand holds.",
        "Before send: preheader, mobile view, alt, links, unsubscribe, match to offer copy.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "“600px” width and modular grids are working guides, not dogma. ESP responsive templates may differ; check previews on your device segments.",
  },
  closing: [
    "Assemble modules with clear hierarchy and a unified series style, and leave technical stability to HTML layout rules — so design helps CTR instead of fighting the mail client.",
  ],
  related: [
    "verstka-email",
    "tekst-email-rassylki",
    "primery-email-rassylok",
    "email-strategiya",
    "email-marketing-2020",
    "email-dlya-biznesa",
  ],
};

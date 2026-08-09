import type { BlogPost } from "../../../data/blog";

/** ES overlay for verstka-email — same structure as RU JSON. */
export const verstkaEmailEs: BlogPost = {
  slug: "verstka-email",
  title: "Maquetación HTML de email: que sea previsible",
  date: "2019-08-30",
  category: "Email marketing",
  cover: "/images/blog/verstka-email/cover.webp",
  excerpt:
    "Cómo armar emails HTML: por qué las tablas ganan a los divs, límites de CSS, responsive, imágenes, Outlook y pruebas en clientes — sin el mito de que un layout roto equivale a spam al instante.",
  lead: [
    "Un mock pulido en Figma no garantiza el mismo aspecto en Gmail, Yandex Mail, Apple Mail y Outlook. Los clientes recortan el CSS de formas distintas, así que la maquetación de email juega con sus propias reglas.",
    "Abajo: qué cuesta un layout roto, la estructura básica del código, límites de contenido y cómo testear. Trata los tips de DOCTYPE de 2019 como históricos y contrastealos con las plantillas actuales de tu ESP.",
  ],
  faq: [
    {
      q: "¿Por qué tablas en lugar de flex o grid?",
      a: "Muchos clientes (sobre todo Outlook antiguo) se atragantan con layout de bloques moderno. Las tablas siguen siendo el marco más previsible.",
    },
    {
      q: "¿Se puede usar HTML5 en email?",
      a: "Con cuidado. Los equipos suelen quedarse con un DOCTYPE transitional simple y un set estrecho de tags. Prueba experimentos en clientes reales.",
    },
    {
      q: "¿Hace falta CSS inline?",
      a: "Sí para estilos críticos: muchos clientes recortan `<style>` o ignoran shorthand.",
    },
    {
      q: "¿Un layout roto te manda a spam?",
      a: "No automáticamente. El spam depende de reputación de dominio, quejas y contenido. Pero un email roto igual mata clics.",
    },
    {
      q: "¿Hace falta un email responsive?",
      a: "Sí: media queries donde se soportan, más un fallback de una columna y tap targets grandes.",
    },
    {
      q: "¿Cómo testear emails?",
      a: "Previews del ESP, herramientas tipo Litmus/Email on Acid y envíos manuales a Gmail, Yandex, Outlook e iOS.",
    },
    {
      q: "¿Un email solo con imagen es mala idea?",
      a: "Sí — algunos clientes bloquean imágenes. Refleja el sentido en el copy y en el alt.",
    },
  ],
  sections: [
    {
      title: "Qué rompe un email",
      level: 2,
      paras: [
        "Aspectos distintos entre clientes, scroll horizontal en móvil, bloques que faltan, un render destrozado en Outlook, imágenes pesadas y carga lenta — el coste habitual de ignorar los límites del email.",
        "La interactividad y la animación compleja a menudo no llegan. Primero deja bien un marco legible y el CTA; después decora.",
      ],
    },
    {
      title: "Estructura y código",
      level: 2,
      paras: [
        "El marco son tablas con ancho fijo o fluido (a menudo ~600px para la columna desktop). Tablas anidadas para módulos ganan a floats complejos.",
        "Escribe el CSS donde los clientes se enfadan (márgenes longhand en lugar de shorthand); pon estilos críticos inline. Imágenes de fondo y propiedades raras necesitan un chequeo aparte en Outlook.",
        "Un markup válido y simple gana a CSS «bonito» moderno copiado de un sitio web.",
      ],
      lists: [
        {
          intro: "Reglas básicas:",
          items: [
            "marco de tablas",
            "inline para estilos clave",
            "fuentes web-safe o enlazadas con fallback",
            "tap targets grandes",
            "prueba en Outlook y en iOS",
          ],
        },
      ],
      links: [
        {
          label: "Diseño de email",
          href: "/es/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Contenido, imágenes, herramientas",
      level: 2,
      paras: [
        "El copy tiene que leerse con las imágenes apagadas. Comprime imágenes, fija width/height y no enterres toda la oferta en un JPG.",
        "Los editores del ESP y las plantillas listas aceleran el trabajo; HTML a medida cuando necesitas control total. Los testers externos pillan sorpresas antes que los suscriptores.",
      ],
      links: [
        {
          label: "Copy de newsletter",
          href: "/es/blog/tekst-email-rassylki/",
        },
        {
          label: "Email: lecciones de 2020",
          href: "/es/blog/email-marketing-2020/",
        },
      ],
    },
  ],
  notes: {
    title: "Nota",
    text: "Los tips sobre un DOCTYPE concreto y una lista de CSS son un snapshot de práctica ~2019. Los clientes siguen cambiando; mantén una librería de módulos probados y haz tests de regresión antes de un envío grande.",
  },
  closing: [
    "Arma un marco de tablas, mete inline los estilos críticos, deja un fallback de texto y pasa el email por varios clientes — para que la maquetación deje de ser una lotería de «se ve genial en mi Chrome».",
  ],
  related: [
    "oformlenie-email",
    "tekst-email-rassylki",
    "email-marketing-2020",
    "primery-email-rassylok",
    "email-strategiya",
    "triggernye-rassylki",
  ],
};

/** EN overlay for verstka-email — same structure as RU JSON. */
export const verstkaEmailEn: BlogPost = {
  slug: "verstka-email",
  title: "HTML email layout: keep it predictable",
  date: "2019-08-30",
  category: "Email marketing",
  cover: "/images/blog/verstka-email/cover-en.webp",
  excerpt:
    "How to build HTML emails: why tables beat divs, CSS limits, responsive design, images, Outlook, and client testing — without the myth that a broken layout equals instant spam.",
  lead: [
    "A polished Figma mock doesn’t guarantee the same look in Gmail, Yandex Mail, Apple Mail, and Outlook. Clients strip CSS differently, so email layout plays by its own rules.",
    "Below: what broken layout costs, the basic code structure, content limits, and how to test. Treat 2019 DOCTYPE tips as historical and match them against your ESP’s current templates.",
  ],
  faq: [
    {
      q: "Why use tables instead of flex or grid?",
      a: "Many clients (especially older Outlook) choke on modern block layout. Tables are still the most predictable frame.",
    },
    {
      q: "Can you use HTML5 in email?",
      a: "Carefully. Teams often stick with a simple transitional DOCTYPE and a narrow tag set. Test experiments in real clients.",
    },
    {
      q: "Is inline CSS required?",
      a: "Yes for critical styles: many clients strip `<style>` or ignore shorthand.",
    },
    {
      q: "Does a broken layout put you in spam?",
      a: "Not automatically. Spam hinges on domain reputation, complaints, and content. But a broken email still kills clicks.",
    },
    {
      q: "Do you need a responsive email?",
      a: "Yes: media queries where they’re supported, plus a single-column fallback and large tap targets.",
    },
    {
      q: "How should you test emails?",
      a: "ESP previews, Litmus/Email on Acid–class tools, and manual sends to Gmail, Yandex, Outlook, and iOS.",
    },
    {
      q: "Is an image-only email a bad idea?",
      a: "Yes — some clients block images. Mirror the meaning in copy and alt text.",
    },
  ],
  sections: [
    {
      title: "What breaks an email",
      level: 2,
      paras: [
        "Different looks across clients, horizontal scroll on mobile, missing blocks, a mangled Outlook render, heavy images and slow load — the usual cost of ignoring email limits.",
        "Interactivity and complex animation often never arrive. Get a readable frame and CTA right first, then decorate.",
      ],
    },
    {
      title: "Structure and code",
      level: 2,
      paras: [
        "The frame is tables with fixed or fluid width (often ~600px for the desktop column). Nested tables for modules beat complex floats.",
        "Spell out CSS where clients fuss (longhand margins instead of shorthand); put critical styles inline. Background images and rare properties need a separate Outlook check.",
        "Valid, simple markup beats “pretty” modern CSS copied from a website.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "table frame",
            "inline for key styles",
            "web-safe or linked fonts with a fallback",
            "large tap targets",
            "test in Outlook and on iOS",
          ],
        },
      ],
      links: [
        {
          label: "Email design",
          href: "/en/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Content, images, tools",
      level: 2,
      paras: [
        "Copy has to read with images off. Compress images, set width/height, and don’t bury the whole offer in a JPG.",
        "ESP editors and ready-made templates speed the work; custom HTML when you need full control. External testers catch surprises before subscribers do.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Email: lessons from 2020",
          href: "/en/blog/email-marketing-2020/",
        },
      ],
    },
  ],
  notes: {
    title: "Note",
    text: "Tips on a specific DOCTYPE and CSS list are a ~2019 practice snapshot. Clients keep changing; keep a library of proven modules and run regression tests before a big send.",
  },
  closing: [
    "Build a table frame, inline the critical styles, leave a text fallback, and run the email through several clients — so layout stops being a lottery of “looks great in my Chrome.”",
  ],
  related: [
    "oformlenie-email",
    "tekst-email-rassylki",
    "email-marketing-2020",
    "primery-email-rassylok",
    "email-strategiya",
    "triggernye-rassylki",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for email-marketing-2020 — same structure as RU JSON. */
export const emailMarketing2020En: BlogPost = {
  slug: "email-marketing-2020",
  title: "Email marketing: what works in practice",
  date: "2020-03-04",
  category: "Email marketing",
  cover: "/images/blog/email-marketing-2020/cover-en.webp",
  excerpt:
    "What actually pulls newsletters: mobile layout, triggers, segments, and a CRM link — without a cult of experimental interactivity or outdated “trends of the year.”",
  lead: [
    "“What’s next for email” roundups often mix durable practices with short-lived experiments. Mobile readability, triggers, and customer data stay the base. Fancy interactivity in the inbox is an option, not a strategy.",
    "Below: a practical frame — what to check in every send, and how to build the system if the list is still small. Don’t copy “traffic share” figures from other people’s roundups as your benchmark.",
  ],
  faq: [
    {
      q: "Do I need complex interactivity in emails?",
      a: "Not as a required layer. First reliable HTML, a clear CTA, and a fallback if the client won’t show the widget.",
    },
    {
      q: "Is mobile layout still important?",
      a: "Yes. Short subject, large buttons, image alt text, a phone test — the basic minimum.",
    },
    {
      q: "Is personalization just a name in the subject?",
      a: "A name is the floor. Stronger: segment, behavior, and triggers (cart, welcome, win-back).",
    },
    {
      q: "Do I need a CRM?",
      a: "For growth — yes: one customer profile and scenarios. An ESP without CRM can start, but the ceiling is lower.",
    },
    {
      q: "Should I use UGC and surveys in emails?",
      a: "Useful for dialogue and content if you don’t turn every send into a questionnaire.",
    },
    {
      q: "How long should a mobile subject be?",
      a: "Fit the meaning into the start of the line (often about 25–40 characters visible). Lead with the point.",
    },
    {
      q: "Where should I start if the list is small?",
      a: "Opt-in forms, welcome, and one or two triggers. Not scraping and not buying lists.",
    },
  ],
  sections: [
    {
      title: "Mobile emails without fanaticism",
      level: 2,
      paras: [
        "A large share of opens happens on phones. Hence: concise subject, short paragraphs, CTA near the top, tappable zones, image alt text, tests in several clients.",
        "Desktop revenue often stays significant — buying comfort on a large screen hasn’t vanished. Make the email readable everywhere, not “only for one stat.”",
      ],
      lists: [
        {
          intro: "Mobile check minimum:",
          items: [
            "subject still reads when truncated",
            "the button isn’t a micro-button",
            "images don’t break meaning if they don’t load",
            "one primary CTA",
          ],
        },
      ],
    },
    {
      title: "Interactivity, dialogue, and channels",
      level: 2,
      paras: [
        "Carousels, forms, and other widgets inside the email sound impressive. In practice, betting on one experimental stack is risky: client support is uneven. A plain HTML fallback is required.",
        "Simpler and more stable: short post-purchase surveys, service ratings, Q&A rubrics. The email reminds people of the brand and feeds improvement data.",
        "Linking email with CRM and other channels isn’t “social icons in the footer” — it’s one funnel: lead → segment → email → deal.",
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Mail for your domain",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
    {
      title: "Personalization and segments",
      level: 2,
      paras: [
        "Strong personalization boils down to the obvious: split the list by interest and behavior, send triggers, refine preferences with surveys — not one “dear friends” blast to everyone.",
        "Technically that’s ESP + site/CRM data. Legally — consent and an easy unsubscribe.",
      ],
      links: [
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
        {
          label: "Email list with consent",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Check current email-client capabilities and ESP plans. Mentions of messengers and social are about channel linking — not bypassing platform rules. Without consent and an honest unsubscribe the channel burns out fast.",
  },
  closing: [
    "Keep the base: mobile readability, triggers, and a CRM link. Experimental interactivity only on top of reliable HTML — not instead of it.",
  ],
  related: [
    "primery-email-rassylok",
    "triggernye-rassylki",
    "baza-email-socseti",
    "pochta-dlya-domena",
    "formy-zahvata",
    "parsing-email",
  ],
};

/** ES overlay for email-marketing-2020 — same structure as RU JSON / EN. */
export const emailMarketing2020Es: BlogPost = {
  slug: "email-marketing-2020",
  title: "Email marketing: qué funciona en la práctica",
  date: "2020-03-04",
  category: "Email marketing",
  cover: "/images/blog/email-marketing-2020/cover.webp",
  excerpt:
    "Qué tira de verdad de las newsletters: layout móvil, triggers, segmentos y un vínculo con CRM — sin culto a la interactividad experimental ni «tendencias del año» obsoletas.",
  lead: [
    "Los roundups de «qué viene en email» a menudo mezclan prácticas duraderas con experimentos de corta vida. La legibilidad móvil, los triggers y los datos de cliente siguen siendo la base. La interactividad fancy en la bandeja es una opción, no una estrategia.",
    "Abajo: un marco práctico — qué revisar en cada envío y cómo montar el sistema si la lista aún es pequeña. No copies cifras de «cuota de tráfico» de roundups ajenos como tu benchmark.",
  ],
  faq: [
    {
      q: "¿Necesito interactividad compleja en los emails?",
      a: "No como capa obligatoria. Primero HTML fiable, un CTA claro y un fallback si el cliente no muestra el widget.",
    },
    {
      q: "¿El layout móvil sigue siendo importante?",
      a: "Sí. Asunto corto, botones grandes, alt de imágenes, prueba en el teléfono — el mínimo básico.",
    },
    {
      q: "¿La personalización es solo un nombre en el asunto?",
      a: "El nombre es el suelo. Más fuerte: segmento, comportamiento y triggers (carrito, welcome, win-back).",
    },
    {
      q: "¿Necesito un CRM?",
      a: "Para crecer — sí: un perfil de cliente y escenarios. Un ESP sin CRM puede arrancar, pero el techo es más bajo.",
    },
    {
      q: "¿Debo usar UGC y encuestas en emails?",
      a: "Útil para el diálogo y el contenido si no conviertes cada envío en un cuestionario.",
    },
    {
      q: "¿Qué longitud debe tener un asunto móvil?",
      a: "Encaja el significado al inicio de la línea (a menudo unos 25–40 caracteres visibles). Empieza por el punto.",
    },
    {
      q: "¿Por dónde empiezo si la lista es pequeña?",
      a: "Formularios con opt-in, welcome y uno o dos triggers. Sin scraping ni comprar listas.",
    },
  ],
  sections: [
    {
      title: "Emails móviles sin fanatismo",
      level: 2,
      paras: [
        "Una gran parte de las aperturas ocurre en el teléfono. De ahí: asunto conciso, párrafos cortos, CTA cerca de arriba, zonas táctiles, alt de imágenes, tests en varios clientes.",
        "El revenue en desktop a menudo sigue siendo significativo — la comodidad de compra en pantalla grande no ha desaparecido. Haz el email legible en todas partes, no «solo para una estadística».",
      ],
      lists: [
        {
          intro: "Mínimo de chequeo móvil:",
          items: [
            "el asunto se lee aunque se trunque",
            "el botón no es un micro-botón",
            "las imágenes no rompen el significado si no cargan",
            "un CTA primario",
          ],
        },
      ],
    },
    {
      title: "Interactividad, diálogo y canales",
      level: 2,
      paras: [
        "Carruseles, formularios y otros widgets dentro del email suenan impresionantes. En la práctica, apostar a un stack experimental es arriesgado: el soporte de clientes es desigual. Un fallback HTML plano es obligatorio.",
        "Más simple y estable: encuestas cortas post-compra, valoraciones de servicio, rúbricas de Q&A. El email recuerda la marca y alimenta datos de mejora.",
        "Enlazar email con CRM y otros canales no es «iconos sociales en el footer» — es un funnel: lead → segmento → email → deal.",
      ],
      links: [
        {
          label: "Emails disparados (triggered)",
          href: "/blog/triggernye-rassylki/",
        },
        {
          label: "Correo para tu dominio",
          href: "/es/blog/pochta-dlya-domena/",
        },
      ],
    },
    {
      title: "Personalización y segmentos",
      level: 2,
      paras: [
        "La personalización fuerte se reduce a lo obvio: partir la lista por interés y comportamiento, enviar triggers, afinar preferencias con encuestas — no un blast de «queridos amigos» a todos.",
        "Técnicamente eso es ESP + datos del sitio/CRM. Legalmente — consentimiento y una baja fácil.",
      ],
      links: [
        {
          label: "Ejemplos fuertes de email",
          href: "/es/blog/primery-email-rassylok/",
        },
        {
          label: "Lista de email con consentimiento",
          href: "/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Revisa las capacidades actuales de los clientes de email y los planes del ESP. Las menciones a messengers y redes van de enlace de canales — no de saltar reglas de plataforma. Sin consentimiento y una baja honesta el canal se quema rápido.",
  },
  closing: [
    "Mantén la base: legibilidad móvil, triggers y un vínculo con CRM. La interactividad experimental solo encima de HTML fiable — no en su lugar.",
  ],
  related: [
    "primery-email-rassylok",
    "pochta-dlya-domena",
    "formy-zahvata",
    "triggernye-rassylki",
    "baza-email-socseti",
    "parsing-email",
  ],
};

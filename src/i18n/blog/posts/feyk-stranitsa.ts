import type { BlogPost } from "../../../data/blog";

/** EN overlay for feyk-stranitsa — same structure as RU JSON. */
export const feykStranitsaEn: BlogPost = {
  slug: "feyk-stranitsa",
  title: "Fake page: what it is and how to spot it",
  date: "2021-02-26",
  category: "Digital marketing",
  cover: "/images/blog/feyk-stranitsa/cover-en.webp",
  excerpt:
    "What counts as a fake page or fake account, why scammers build them, and how to verify authenticity — without how-tos for making forgeries.",
  lead: [
    "A fake page is a counterfeit site, landing, or profile that pretends to be a brand, store, or person. The goal is usually fraud, data theft, or black PR.",
    "Below: how to spot a forgery and protect a brand. We don’t cover building fakes for spam or scams — and we don’t recommend it.",
  ],
  faq: [
    {
      q: "Is a “fake” in SEO a doorway?",
      a: "They’re sometimes confused. Doorways are search spam. A fake page is more often brand/payment impersonation. Both are harmful and risky.",
    },
    {
      q: "How do I check a store site?",
      a: "Domain and WHOIS age, contacts, off-site reviews, matching company details, HTTPS, and no odd redirects to payment.",
    },
    {
      q: "What if I find a brand fake?",
      a: "Save the URL and screenshots, complain to host/registry/platform, warn customers, involve lawyers if there’s damage.",
    },
    {
      q: "What about a fake social account?",
      a: "Check creation date, avatar, chat pushing “pay off-platform,” then report to the network’s support.",
    },
    {
      q: "Do fakes help promotion?",
      a: "Not as a clean strategy. Forgeries and cloaking lead to bans and legal risk.",
    },
    {
      q: "Can I trust HTTPS on an unknown site?",
      a: "HTTPS protects the connection — it doesn’t prove the seller is honest. Check domain, company details, and independent reviews.",
    },
    {
      q: "Should I tell clients about a found clone?",
      a: "Yes. A short warning in official channels, the one correct domain — and don’t publish extra details that help attackers.",
    },
  ],
  sections: [
    {
      title: "Why forgeries get made",
      level: 2,
      paras: [
        "Phishing and login theft, selling nothing under someone else’s name, card data collection, smearing a competitor — common motives. Rarely there are “test” clones without malice, but those still mislead people.",
        "A fake can look convincing: attackers copy logo, colors, and copy. Visual similarity alone shouldn’t decide — especially before payment or a password.",
      ],
      lists: [
        {
          intro: "Typical kinds:",
          items: [
            "online-store clone",
            "fake “payment” / support",
            "counterfeit brand profile",
            "phishing “log into account” form",
          ],
        },
      ],
    },
    {
      title: "How to spot it",
      level: 2,
      paras: [
        "Check the domain character by character — especially Latin lookalike tricks — open the official URL from a bookmark, not a cold message. Review legal info, policy, and weird “today only” discounts.",
        "Compare contacts with the brand’s official surfaces and don’t pay via a link from chat. If the offer feels off, call a number from a verified site or ask through a known channel.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "typos in the domain",
            "no phone/address — or someone else’s",
            "pressure to “pay in 5 minutes”",
            "a form asking for email/bank passwords outside the bank",
          ],
        },
      ],
    },
    {
      title: "Brand protection",
      level: 2,
      paras: [
        "Register sensible domain variants, monitor mentions, keep official links in header and footer, train support to recognize clone complaints.",
        "Assign an incident owner in advance and prep a client message template. Fast, calm communication limits damage better than arguing in comments.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "consistent NAP and company details",
            "a staff email for fake reports",
            "quick replies to clients on social",
            "no homemade “fake storefronts” for SEO",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
      ],
    },
    {
      title: "What a visitor should do",
      level: 2,
      paras: [
        "If you already left data on a suspicious resource, stop and don’t send extra codes from messages. Change the password on the real service — especially if you reuse it elsewhere.",
        "If bank data may be compromised, contact the bank only via the number on the card or the official app. Keep chat, URL, and payment proofs for support and law enforcement.",
      ],
      lists: [
        {
          intro: "Safe check order:",
          items: [
            "don’t open payment from an unexpected link",
            "match domain and details to an official source",
            "look for reviews off the seller’s page",
            "report the suspicion to the real brand owner",
          ],
        },
      ],
    },
    {
      title: "How to document and push for removal",
      level: 2,
      paras: [
        "A brand rep should save evidence before the page vanishes: full URL, date and time, screenshots, copy, contacts, and payment details. Don’t hack the clone or run revenge attacks.",
        "Next: platform support, hosting, or the domain registrar by their process. For damage, trademark, or personal-data misuse — involve a lawyer and file with the competent authorities.",
      ],
      lists: [
        {
          intro: "In the report include:",
          items: [
            "what object and rights are impersonated",
            "links to the official site and accounts",
            "proof of misleading content",
            "a contact for reply from the brand owner",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for feyk-stranitsa — same structure as RU JSON / EN. */
export const feykStranitsaEs: BlogPost = {
  slug: "feyk-stranitsa",
  title: "Página falsa: qué es y cómo detectarla",
  date: "2021-02-26",
  category: "Digital marketing",
  cover: "/images/blog/feyk-stranitsa/cover-es.webp",
  excerpt:
    "Qué cuenta como página o cuenta falsa, por qué los estafadores las montan y cómo verificar autenticidad — sin how-tos para fabricar falsificaciones.",
  lead: [
    "Una página falsa es un sitio, landing o perfil falsificado que se hace pasar por una marca, tienda o persona. El objetivo suele ser fraude, robo de datos o black PR.",
    "Abajo: cómo detectar una falsificación y proteger una marca. No cubrimos cómo construir fakes para spam o estafas — y no lo recomendamos.",
  ],
  faq: [
    {
      q: "¿Un «fake» en SEO es un doorway?",
      a: "A veces se confunden. Los doorways son spam de búsqueda. Una página falsa suele ser más bien impersonación de marca/pago. Ambos son dañinos y arriesgados.",
    },
    {
      q: "¿Cómo compruebo el sitio de una tienda?",
      a: "Dominio y edad WHOIS, contactos, reseñas fuera del sitio, datos de empresa coincidentes, HTTPS y sin redirects raros al pago.",
    },
    {
      q: "¿Qué hago si encuentro un fake de la marca?",
      a: "Guarda la URL y screenshots, denuncia a host/registro/plataforma, avisa a clientes, involucra abogados si hay daño.",
    },
    {
      q: "¿Y una cuenta social falsa?",
      a: "Revisa fecha de creación, avatar, chat que empuja a «pagar fuera de la plataforma», luego reporta al soporte de la red.",
    },
    {
      q: "¿Los fakes ayudan a la promoción?",
      a: "No como estrategia limpia. Las falsificaciones y el cloaking llevan a bans y riesgo legal.",
    },
    {
      q: "¿Puedo confiar en HTTPS en un sitio desconocido?",
      a: "HTTPS protege la conexión — no prueba que el vendedor sea honesto. Revisa dominio, datos de empresa y reseñas independientes.",
    },
    {
      q: "¿Debo avisar a los clientes de un clon encontrado?",
      a: "Sí. Un aviso corto en canales oficiales, el dominio correcto único — y no publiques detalles de más que ayuden a atacantes.",
    },
  ],
  sections: [
    {
      title: "Por qué se hacen falsificaciones",
      level: 2,
      paras: [
        "Phishing y robo de login, vender nada con el nombre de otro, recolectar datos de tarjeta, manchar a un competidor — motivos habituales. Rara vez hay clones «de prueba» sin malicia, pero igual engañan a la gente.",
        "Un fake puede verse convincente: copian logo, colores y copy. La similitud visual sola no debe decidir — sobre todo antes de un pago o una contraseña.",
      ],
      lists: [
        {
          intro: "Tipos típicos:",
          items: [
            "clon de tienda online",
            "«pago» / soporte falso",
            "perfil de marca falsificado",
            "formulario phishing de «entrar a la cuenta»",
          ],
        },
      ],
    },
    {
      title: "Cómo detectarlo",
      level: 2,
      paras: [
        "Revisa el dominio carácter a carácter — sobre todo trucos de lookalike en latín — abre la URL oficial desde un marcador, no desde un mensaje frío. Mira info legal, política y descuentos raros de «solo hoy».",
        "Compara contactos con las superficies oficiales de la marca y no pagues vía un enlace del chat. Si la oferta huele mal, llama a un número de un sitio verificado o pregunta por un canal conocido.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "typos en el dominio",
            "sin teléfono/dirección — o los de otro",
            "presión a «pagar en 5 minutos»",
            "un formulario que pide contraseñas de email/banco fuera del banco",
          ],
        },
      ],
    },
    {
      title: "Protección de marca",
      level: 2,
      paras: [
        "Registra variantes sensatas de dominio, monitoriza menciones, mantén enlaces oficiales en header y footer, forma al soporte para reconocer denuncias de clones.",
        "Asigna de antemano un owner de incidente y prepara una plantilla de mensaje a clientes. Una comunicación rápida y calmada limita el daño mejor que pelear en comentarios.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "NAP y datos de empresa coherentes",
            "un email del staff para reportes de fakes",
            "respuestas rápidas a clientes en social",
            "sin «escaparates falsos» caseros para SEO",
          ],
        },
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
      ],
    },
    {
      title: "Qué debe hacer un visitante",
      level: 2,
      paras: [
        "Si ya dejaste datos en un recurso sospechoso, para y no envíes códigos extra de mensajes. Cambia la contraseña en el servicio real — sobre todo si la reutilizas en otros sitios.",
        "Si pueden estar comprometidos datos bancarios, contacta al banco solo por el número de la tarjeta o la app oficial. Guarda chat, URL y pruebas de pago para soporte y autoridades.",
      ],
      lists: [
        {
          intro: "Orden seguro de chequeo:",
          items: [
            "no abrir el pago desde un enlace inesperado",
            "cruzar dominio y datos con una fuente oficial",
            "buscar reseñas fuera de la página del vendedor",
            "reportar la sospecha al dueño real de la marca",
          ],
        },
      ],
    },
    {
      title: "Cómo documentar y pedir la retirada",
      level: 2,
      paras: [
        "Un representante de marca debe guardar evidencia antes de que la página desaparezca: URL completa, fecha y hora, screenshots, copy, contactos y detalles de pago. No hackees el clon ni montes ataques de venganza.",
        "Siguiente: soporte de la plataforma, hosting o el registrador del dominio según su proceso. Por daño, marca o mal uso de datos personales — involucra a un abogado y presenta ante las autoridades competentes.",
      ],
      lists: [
        {
          intro: "En el reporte incluye:",
          items: [
            "qué objeto y derechos se impersonan",
            "enlaces al sitio y cuentas oficiales",
            "prueba del contenido engañoso",
            "un contacto para respuesta del dueño de la marca",
          ],
        },
      ],
    },
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for whatsapp-v-instagram — same structure as RU JSON. */
export const whatsappVInstagramEn: BlogPost = {
  slug: "whatsapp-v-instagram",
  title: "WhatsApp* in an Instagram* profile: wa.me link and bio",
  date: "2021-11-02",
  category: "SMM",
  cover: "/images/blog/whatsapp-v-instagram/cover-en.webp",
  excerpt:
    "How to move a client from Instagram* to WhatsApp*: a wa.me link in the bio, greeting text, business-profile buttons, and a multi-link — without a catalog of outdated link-in-bio tools.",
  lead: [
    "A direct messenger chat often converts better than a long Direct thread: a number or ready WhatsApp* link in the Instagram* bio shortens the path from “saw the offer” to “sent a message.”",
    "Below: the `wa.me` format, prefilled greeting text, when a Call button is enough, and why you shouldn’t stack a dozen multi-link services. Menu labels change; check Meta Help. See the notice on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* and WhatsApp* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "What’s the correct link format?",
      a: "`https://wa.me/79001234567` — country code without “+”, brackets, or spaces. `api.whatsapp.com/send?phone=…` also works; for the bio a short `wa.me` is usually enough.",
    },
    {
      q: "Can you paste a number starting with 8?",
      a: "International format with a country code is more reliable (for Russia — 7…). Drop a leading 8 and separators.",
    },
    {
      q: "How do you add first-message text?",
      a: "Use the `text=` parameter with URL-encoded spaces (`%20` or `encodeURIComponent`). Example: `https://wa.me/79…?text=Hi%2C%20I%20want%20to%20ask%20about%20…`.",
    },
    {
      q: "Is the bio link clickable for everyone?",
      a: "The website or link field in the profile — yes, for guests. In a regular post caption a URL often isn’t tappable in the app — so people write “WhatsApp* in the bio” in posts explicitly.",
    },
    {
      q: "How is the Call button different?",
      a: "A business-profile button opens call, email, or address per settings. WhatsApp* chat is easier via `wa.me` in the link field or a multi-link item — if the goal is messaging.",
    },
    {
      q: "Do you need a separate service like Taplink?",
      a: "Only if you need several equal exits (site, Telegram, price list). For one WhatsApp* a direct `wa.me` in the bio is enough.",
    },
    {
      q: "Is this a broadcast to a list?",
      a: "No. Here the client comes to you on click. Mass outbound messages are a separate topic with consent and WhatsApp Business rules.",
    },
    {
      q: "What about other messengers?",
      a: "Same logic: a public link (t.me/…, viber://, etc.) in the website field or a multi-link. Don’t copy outdated Skype or ICQ schemes from old guides without checking.",
    },
  ],
  sections: [
    {
      title: "Why move the conversation out of Direct",
      level: 2,
      paras: [
        "Direct works for short clarifications. For booking, payment, files, and long support many teams keep the chat in a messenger or CRM — where WhatsApp* is easier to bring in.",
        "A bio link works 24/7: the guest doesn’t hunt a number in Stories or copy digits from the profile by hand.",
        "Don’t promise “instant reply 24/7” if you don’t cover the channel. Better an honest window (“we reply weekdays 10–19”) in the bio next to the link.",
      ],
      links: [
        {
          label: "Where to put links on Instagram*",
          href: "/en/blog/ssylki-v-instagram/",
        },
        {
          label: "WhatsApp* broadcasts (outbound)",
          href: "/en/blog/rassylka-whatsapp/",
        },
      ],
    },
    {
      title: "wa.me link in the profile bio",
      level: 2,
      paras: [
        "Open Edit profile → website or link field (UI labels change) and paste a URL like `https://wa.me/79001234567`.",
        "Use the number you actually answer on in WhatsApp*. For business, prefer a company number — not a personal one mixed with family chats.",
        "After saving, test the tap from another account or incognito: it should open a chat (or offer to open the app), not an Instagram* “invalid URL” error.",
      ],
      lists: [
        {
          intro: "Common URL mistakes:",
          items: [
            "pluses, brackets, spaces, and hyphens in the number",
            "a leading 8 instead of the country code",
            "a typo in digits — the client writes into nowhere",
            "a link to someone else’s or old number after a SIM change",
          ],
        },
      ],
      notes: [
        {
          title: "Official Help",
          kind: "tip",
          text: "Check current click-to-chat options and parameters in the WhatsApp Help Center — wording and domains are sometimes updated.",
        },
      ],
    },
    {
      title: "Greeting in the text parameter",
      level: 2,
      paras: [
        "So the client doesn’t send an empty “hi,” add `?text=` with a short stub: where they came from, which product they care about.",
        "Encode spaces and non-Latin characters (`%20`, or encode in any URL encoder). Don’t make a wall — one or two sentences are enough.",
        "Change promo text carefully: a long UTM-like tail in the bio looks technical; for measurement a site UTM or a separate multi-link is often enough.",
      ],
      lists: [
        {
          intro: "Sample stub ideas:",
          items: [
            "“I want to book a consult”",
            "“Interested in delivery to …”",
            "“Question about an order or price list”",
          ],
        },
      ],
    },
    {
      title: "Business profile and contact buttons",
      level: 2,
      paras: [
        "A professional or business account gives call, email, address, and website buttons. You can combine them with `wa.me` in the link field: call for urgent, WhatsApp* for chat.",
        "Don’t duplicate the same number three ways without need: the guest loses track of which channel is main.",
        "Profile category and bio text should match where the chat leads — otherwise you get a high share of empty “who are you?” messages.",
      ],
      links: [
        {
          label: "Instagram* business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Multi-links and third-party services",
      level: 2,
      paras: [
        "If besides WhatsApp* you need site, Telegram, and a price list — one multi-link (link-in-bio) is easier than swapping the bio URL every week.",
        "Downsides: an extra click, uptime dependence, data policy. We don’t carry over “best of” Taplink/Hipolink catalogs from old roundups — services change tariffs and names.",
        "For one messenger a direct `wa.me` is usually faster and clearer.",
      ],
      notes: [
        {
          title: "Security",
          kind: "tip",
          text: "Don’t give your Instagram* password to a multi-link service. You only need a public URL in the profile field.",
        },
      ],
    },
    {
      title: "How to phrase the CTA in content",
      level: 2,
      paras: [
        "In posts and Stories write explicitly: “message on WhatsApp* — link in the bio” or use a Story link sticker to the same `wa.me`.",
        "In the bio, one line for reply hours. A phone emoji is fine if it doesn’t bury the meaning.",
        "Check that the WhatsApp Business number (if you use it) and the link match — otherwise you undercut trust.",
      ],
      lists: [
        {
          intro: "Mini launch checklist:",
          items: [
            "the number answers and isn’t on leave without an auto-reply",
            "the link was tested from another phone",
            "bio has offer and CTA",
            "someone is assigned to answer in chat",
            "no spam to other people’s lists — only inbound on click or opt-in",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "`wa.me` plus a correct number in the bio is a simple bridge from Instagram* into chat.",
        "Prefilled `text=` saves the client’s first move; a multi-link is for when there are several exits.",
        "This doesn’t replace a content strategy and isn’t a license for cold spam on WhatsApp*.",
      ],
    },
  ],
  closing: [
    "Build `https://wa.me/…` with a short `text=`, paste it into the bio, test the tap from another device, and write “contact in the bio” in the next post — faster than picking a tenth link-in-bio tool.",
  ],
  related: [
    "ssylki-v-instagram",
    "rassylka-whatsapp",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "ssylka-stories-instagram",
    "instagram-direct",
  ],
};

/** ES overlay for whatsapp-v-instagram — same structure as RU JSON / EN. */
export const whatsappVInstagramEs: BlogPost = {
  slug: "whatsapp-v-instagram",
  title: "WhatsApp* en un perfil de Instagram*: enlace wa.me y bio",
  date: "2021-11-02",
  category: "SMM",
  cover: "/images/blog/whatsapp-v-instagram/cover-es.webp",
  excerpt:
    "Cómo pasar un cliente de Instagram* a WhatsApp*: un enlace wa.me en la bio, texto de saludo, botones del perfil business y un multi-link — sin un catálogo de tools link-in-bio obsoletas.",
  lead: [
    "Un chat directo en messenger a menudo convierte mejor que un hilo largo de Direct: un número o un enlace listo de WhatsApp* en la bio de Instagram* acorta el camino de «vi la oferta» a «envié un mensaje».",
    "Abajo: el formato `wa.me`, texto de saludo prefijado, cuándo basta un botón Call y por qué no debes apilar una docena de servicios multi-link. Las etiquetas del menú cambian; revisa Meta Help. Ver la nota en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* y WhatsApp* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Cuál es el formato correcto del enlace?",
      a: "`https://wa.me/79001234567` — código de país sin «+», paréntesis ni espacios. También funciona `api.whatsapp.com/send?phone=…`; para la bio suele bastar un `wa.me` corto.",
    },
    {
      q: "¿Se puede pegar un número que empiece por 8?",
      a: "El formato internacional con código de país es más fiable (para Rusia — 7…). Quita un 8 inicial y los separadores.",
    },
    {
      q: "¿Cómo se añade el texto del primer mensaje?",
      a: "Usa el parámetro `text=` con espacios URL-encoded (`%20` o `encodeURIComponent`). Ejemplo: `https://wa.me/79…?text=Hola%2C%20quiero%20consultar%20sobre%20…`.",
    },
    {
      q: "¿El enlace de la bio es clicable para todos?",
      a: "El campo website o link del perfil — sí, para invitados. En el caption de un post habitual una URL a menudo no es tappable en la app — por eso en los posts se escribe explícitamente «WhatsApp* en la bio».",
    },
    {
      q: "¿En qué se diferencia el botón Call?",
      a: "Un botón del perfil business abre llamada, email o dirección según settings. El chat de WhatsApp* es más fácil vía `wa.me` en el campo link o un ítem multi-link — si el objetivo es mensajería.",
    },
    {
      q: "¿Hace falta un servicio aparte tipo Taplink?",
      a: "Solo si necesitas varias salidas iguales (sitio, Telegram, lista de precios). Para un solo WhatsApp* basta un `wa.me` directo en la bio.",
    },
    {
      q: "¿Esto es un broadcast a una lista?",
      a: "No. Aquí el cliente llega a ti con un clic. Los mensajes outbound masivos son un tema aparte con consentimiento y reglas de WhatsApp Business.",
    },
    {
      q: "¿Y otros messengers?",
      a: "La misma lógica: un enlace público (t.me/…, viber://, etc.) en el campo website o un multi-link. No copies esquemas obsoletos de Skype o ICQ de guías viejas sin comprobar.",
    },
  ],
  sections: [
    {
      title: "Por qué sacar la conversación de Direct",
      level: 2,
      paras: [
        "Direct funciona para aclaraciones cortas. Para reservas, pago, archivos y soporte largo muchos equipos mantienen el chat en un messenger o CRM — donde WhatsApp* es más fácil de traer.",
        "Un enlace en la bio trabaja 24/7: el invitado no caza un número en Stories ni copia dígitos del perfil a mano.",
        "No prometas «respuesta instantánea 24/7» si no cubres el canal. Mejor una ventana honesta («respondemos entre semana 10–19») en la bio junto al enlace.",
      ],
      links: [
        {
          label: "Dónde poner enlaces en Instagram*",
          href: "/es/blog/ssylki-v-instagram/",
        },
        {
          label: "Broadcasts WhatsApp* (outbound)",
          href: "/es/blog/rassylka-whatsapp/",
        },
      ],
    },
    {
      title: "Enlace wa.me en la bio del perfil",
      level: 2,
      paras: [
        "Abre Edit profile → campo website o link (las etiquetas de UI cambian) y pega una URL como `https://wa.me/79001234567`.",
        "Usa el número en el que de verdad respondes en WhatsApp*. Para negocio, preferir un número de empresa — no uno personal mezclado con chats familiares.",
        "Tras guardar, prueba el tap desde otra cuenta o incógnito: debería abrir un chat (u ofrecer abrir la app), no un error de Instagram* de «URL inválida».",
      ],
      lists: [
        {
          intro: "Errores frecuentes de URL:",
          items: [
            "pluses, paréntesis, espacios y guiones en el número",
            "un 8 inicial en lugar del código de país",
            "un typo en dígitos — el cliente escribe a la nada",
            "un enlace al número de otro o a uno viejo tras un cambio de SIM",
          ],
        },
      ],
      notes: [
        {
          title: "Help oficial",
          kind: "tip",
          text: "Revisa las opciones click-to-chat actuales y los parámetros en el WhatsApp Help Center — el wording y los dominios a veces se actualizan.",
        },
      ],
    },
    {
      title: "Saludo en el parámetro text",
      level: 2,
      paras: [
        "Para que el cliente no envíe un «hola» vacío, suma `?text=` con un stub corto: de dónde viene, qué producto le importa.",
        "Codifica espacios y caracteres no latinos (`%20`, o encode en cualquier URL encoder). No hagas un muro — bastan una o dos frases.",
        "Cambia el texto de promo con cuidado: una cola larga tipo UTM en la bio se ve técnica; para medir a menudo basta un UTM del sitio o un multi-link aparte.",
      ],
      lists: [
        {
          intro: "Ideas de stub de ejemplo:",
          items: [
            "«Quiero reservar una consulta»",
            "«Me interesa la entrega a …»",
            "«Pregunta sobre un pedido o lista de precios»",
          ],
        },
      ],
    },
    {
      title: "Perfil business y botones de contacto",
      level: 2,
      paras: [
        "Una cuenta profesional o business da botones de llamada, email, dirección y website. Puedes combinarlos con `wa.me` en el campo link: llamada para urgente, WhatsApp* para chat.",
        "No dupliques el mismo número de tres formas sin necesidad: el invitado pierde la pista de cuál canal es el principal.",
        "La categoría del perfil y el texto de la bio deben coincidir con a dónde lleva el chat — si no, sube la cuota de mensajes vacíos de «¿quiénes sois?».",
      ],
      links: [
        {
          label: "Cuenta business de Instagram*",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Multi-links y servicios de terceros",
      level: 2,
      paras: [
        "Si además de WhatsApp* necesitas sitio, Telegram y una lista de precios — un multi-link (link-in-bio) es más fácil que cambiar la URL de la bio cada semana.",
        "Inconvenientes: un clic extra, dependencia del uptime, política de datos. No arrastramos catálogos Taplink/Hipolink de roundups viejos — los servicios cambian tarifas y nombres.",
        "Para un solo messenger un `wa.me` directo suele ser más rápido y claro.",
      ],
      notes: [
        {
          title: "Seguridad",
          kind: "tip",
          text: "No des la contraseña de Instagram* a un servicio multi-link. Solo necesitas una URL pública en el campo del perfil.",
        },
      ],
    },
    {
      title: "Cómo formular el CTA en el contenido",
      level: 2,
      paras: [
        "En posts y Stories escribe explícitamente: «escribe por WhatsApp* — enlace en la bio» o usa un sticker de enlace de Story al mismo `wa.me`.",
        "En la bio, una línea para el horario de respuesta. Un emoji de teléfono vale si no entierra el significado.",
        "Comprueba que el número de WhatsApp Business (si lo usas) y el enlace coincidan — si no, bajas la confianza.",
      ],
      lists: [
        {
          intro: "Mini checklist de lanzamiento:",
          items: [
            "el número responde y no está de baja sin auto-respuesta",
            "el enlace se probó desde otro teléfono",
            "la bio tiene oferta y CTA",
            "alguien está asignado a responder en el chat",
            "sin spam a listas ajenas — solo inbound al clic o con opt-in",
          ],
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "`wa.me` más un número correcto en la bio es un puente simple de Instagram* al chat.",
        "El `text=` prefijado ahorra el primer movimiento del cliente; un multi-link es para cuando hay varias salidas.",
        "Esto no sustituye una estrategia de contenido ni es licencia para spam frío en WhatsApp*.",
      ],
    },
  ],
  closing: [
    "Arma `https://wa.me/…` con un `text=` corto, pégalo en la bio, prueba el tap desde otro dispositivo y escribe «contacto en la bio» en el siguiente post — más rápido que elegir la décima tool link-in-bio.",
  ],
  related: [
    "ssylki-v-instagram",
    "rassylka-whatsapp",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "instagram-direct",
    "ssylka-stories-instagram",
  ],
};

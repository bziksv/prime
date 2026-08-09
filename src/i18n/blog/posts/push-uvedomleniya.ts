import type { BlogPost } from "../../../data/blog";

/** ES overlay for push-uvedomleniya — same structure as RU JSON. */
export const pushUvedomleniyaEs: BlogPost = {
  slug: "push-uvedomleniya",
  title: "Notificaciones push: qué son y cómo usarlas",
  date: "2019-06-05",
  category: "Email marketing",
  cover: "/images/blog/push-uvedomleniya/cover.webp",
  excerpt:
    "Push de navegador y móvil: en qué se diferencian del email y el SMS, a quién ayudan, cómo pedir permiso, qué escribir y cómo no cansar a los suscriptores — sin spam en pop-ups.",
  lead: [
    "Push es un aviso corto en pantalla: en el navegador tras el permiso del sitio, o en una app. Junto al email, SMS y retargeting es otra forma de recuperar a quien ya te visitó.",
    "Abajo: a quién encaja el canal, cómo funciona la suscripción en el navegador y reglas básicas de frecuencia. Las políticas de Chrome/Safari y las herramientas de envío cambian — mira la docs actual antes de lanzar.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el push del email?",
      a: "Más corto, más inmediato, sin asunto. Menos sitio para el sentido — más riesgo de irritación.",
    },
    {
      q: "¿Push de navegador y móvil son lo mismo?",
      a: "Idea similar, entrega distinta: Web Push vía navegador/service worker; push de app vía el SDK de la store.",
    },
    {
      q: "¿Se puede enviar sin permiso?",
      a: "No. El navegador pide Allow/Block. Tras Block, un prompt normal de repetición suele no estar disponible.",
    },
    {
      q: "¿Quién saca más partido de las notificaciones push?",
      a: "Media, tiendas con promos, servicios con eventos (estado, reserva, update). No es igual de útil en cada nicho.",
    },
    {
      q: "¿Con qué frecuencia enviar pushes?",
      a: "Pocas veces y a propósito. Pushes frecuentes = bajas y Block.",
    },
    {
      q: "¿Hace falta un servidor propio?",
      a: "Los equipos suelen conectar un ESP/plataforma de push. Stack propio — para equipos con ingeniería.",
    },
    {
      q: "¿El push sustituye al SMS?",
      a: "No. El SMS llega a un número; el push solo a suscriptores con permiso vivo.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona el push de navegador",
      level: 2,
      paras: [
        "En una visita el sitio puede pedir permiso de notificaciones. Allow — suscripción; Block — el diálogo normalmente no vuelve a mostrarse por la vía habitual.",
        "Luego llegan mensajes a los suscriptores: promo, noticias, carrito abandonado, estado. Los open rates suelen ser más altos que en email, pero la atención es más corta — copy y CTA deben quedar claros al instante.",
      ],
      lists: [
        {
          intro: "Pros del canal:",
          items: [
            "suscripción en un clic",
            "aparición rápida en pantalla",
            "útil para eventos urgentes",
            "complementa email y SMS",
          ],
        },
      ],
    },
    {
      title: "A quién ayuda y cómo testear",
      level: 2,
      paras: [
        "Tiene sentido si hay motivos regulares para escribir y la audiencia vuelve a menudo. En un landing puntual sin visitas de retorno el efecto es más débil.",
        "Al inicio: conecta un proveedor, pide permiso en un momento que encaje (no en el primer segundo), envíate un test, mide CTR y bajas.",
        "Compara con SMS y email: el push es un empujón corto; el valor más largo va en la carta.",
      ],
      links: [
        {
          label: "Campañas SMS",
          href: "/es/blog/sms-rassylka/",
        },
        {
          label: "Emails disparados",
          href: "/es/blog/triggernye-rassylki/",
        },
        {
          label: "Estrategia de email",
          href: "/es/blog/email-strategiya/",
        },
      ],
    },
    {
      title: "Reglas para no molestar",
      level: 2,
      paras: [
        "Escribe corto: qué pasó y por qué abrir. No empujes cada post de social.",
        "Segmenta: no todo suscriptor quiere deals «calientes» a diario. Ofrece una forma de apagar notificaciones y respeta el rechazo.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Las capturas del diálogo de permiso y el comportamiento del navegador son un corte ~2019. Web Push, HTTPS y requisitos de UX del request se han actualizado. No uses dark patterns del tipo «permitir o irte».",
        },
      ],
    },
  ],
  closing: [
    "Conecta push donde hay motivos repetidos y consentimiento en un clic, prueba la frecuencia en un segmento estrecho — y mantén email/SMS cerca en lugar de sustituir toda la comunicación con un solo pop-up.",
  ],
  related: [
    "sms-rassylka",
    "triggernye-rassylki",
    "email-strategiya",
    "tekst-email-rassylki",
    "email-dlya-biznesa",
    "retargeting",
  ],
} as BlogPost;

/** EN overlay for push-uvedomleniya — same structure as RU JSON. */
export const pushUvedomleniyaEn: BlogPost = {
  slug: "push-uvedomleniya",
  title: "Push notifications: what they are and how to use them",
  date: "2019-06-05",
  category: "Email marketing",
  cover: "/images/blog/push-uvedomleniya/cover-en.webp",
  excerpt:
    "Browser and mobile push: how they differ from email and SMS, who they help, how to get permission, what to write, and how not to tire subscribers — without spam in pop-ups.",
  lead: [
    "Push is a short on-screen alert: in the browser after the site’s permission, or in an app. Next to email, SMS, and retargeting it’s another way to bring back someone who already visited you.",
    "Below: who the channel fits, how browser subscription works, and basic frequency rules. Chrome/Safari policies and sender tools change — check current docs before launch.",
  ],
  faq: [
    {
      q: "How does push differ from email?",
      a: "Shorter, more instant, no subject line. Less room for meaning — higher irritation risk.",
    },
    {
      q: "Are browser and mobile push the same?",
      a: "Similar idea, different delivery: Web Push via browser/service worker; app push via the store SDK.",
    },
    {
      q: "Can I send without permission?",
      a: "No. The browser asks Allow/Block. After Block a normal repeat prompt is usually unavailable.",
    },
    {
      q: "Who benefits most from push notifications?",
      a: "Media, stores with promos, services with events (status, booking, update). Not equally useful in every niche.",
    },
    {
      q: "How often should I send pushes?",
      a: "Rarely and on purpose. Frequent pushes = unsubscribes and Block.",
    },
    {
      q: "Do I need my own server?",
      a: "Teams more often connect an ESP/push platform. Own stack — for teams with engineering.",
    },
    {
      q: "Does push replace SMS?",
      a: "No. SMS reaches a number; push only reaches subscribers with a live permission.",
    },
  ],
  sections: [
    {
      title: "How browser push works",
      level: 2,
      paras: [
        "On a visit the site may ask for notification permission. Allow — subscription; Block — the dialog usually won’t show again the normal way.",
        "Then messages go to subscribers: promo, news, abandoned cart, status. Open rates are often higher than email, but attention is shorter — copy and CTA must be instantly clear.",
      ],
      lists: [
        {
          intro: "Channel pros:",
          items: [
            "one-click subscribe",
            "fast on-screen show",
            "handy for urgent events",
            "complements email and SMS",
          ],
        },
      ],
    },
    {
      title: "Who it helps and how to test",
      level: 2,
      paras: [
        "It makes sense if you have regular reasons to write and the audience returns often. For a one-off landing without return visits the effect is weaker.",
        "At the start: connect a provider, ask permission at a fitting moment (not in the first second), send a test to yourself, measure CTR and opt-outs.",
        "Compare with SMS and email: push is a short nudge; longer value belongs in the letter.",
      ],
      links: [
        {
          label: "SMS campaigns",
          href: "/en/blog/sms-rassylka/",
        },
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
      ],
    },
    {
      title: "Rules so you don’t annoy",
      level: 2,
      paras: [
        "Write short: what happened and why to open. Don’t push every social post.",
        "Segment: not every subscriber wants “hot” deals daily. Offer a way to turn notifications off and respect the refusal.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Permission-dialog screenshots and browser behavior are a ~2019 slice. Web Push, HTTPS, and request UX requirements have updated. Don’t use dark patterns like “allow or leave.”",
        },
      ],
    },
  ],
  closing: [
    "Connect push where you have repeat reasons and one-click consent, test frequency on a narrow segment — and keep email/SMS nearby instead of replacing all communication with one pop-up.",
  ],
  related: [
    "sms-rassylka",
    "triggernye-rassylki",
    "email-strategiya",
    "tekst-email-rassylki",
    "email-dlya-biznesa",
    "retargeting",
  ],
} as BlogPost;

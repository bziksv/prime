import type { BlogPost } from "../../../data/blog";

/** EN overlay for spam-vk — same structure as RU JSON. */
export const spamVkEn: BlogPost = {
  slug: "spam-vk",
  title:
    "Spam on VK: what it is, how to report it, and what to do after a hack",
  date: "2020-11-24",
  category: "SMM",
  cover: "/images/blog/spam-vk/cover-en.webp",
  excerpt:
    "What counts as spam in VK messages and communities, why mass blasts are risky, how to report, and what to do if your page messages people without you — without a catalog of gray bulk-mail tools.",
  lead: [
    "Spam on VK is unwanted mass messages and pushy pitches without consent: in DMs, on the wall, in community comments. Often it’s ads, friend requests, or links with phishing risk.",
    "Below: how to spot it, report it, and protect the account. VK UI buttons change; look for “This is spam” or “Report” in the message, post, or profile menu. Legal community messaging is covered separately; we don’t catalog gray bots or bulk tools.",
  ],
  faq: [
    {
      q: "How is spam different from ads in the feed?",
      a: "Ads run through the VK ads account follow platform rules. Spam is a pushy blast without consent, often from fakes or hacked pages.",
    },
    {
      q: "Can I grow a group with mass messages?",
      a: "You risk blocks and reports. Better options: content, targeting, and legal community tools.",
    },
    {
      q: "What should I do with a friend request from a spammer?",
      a: "Don’t accept. You can leave them as a follower or report via the request or profile menu.",
    },
    {
      q: "Why are friends getting messages from my page?",
      a: "Often a hack or a malicious app with access. Change passwords, end sessions, and check connected apps.",
    },
    {
      q: "Does antivirus help after a hack?",
      a: "Yes, as part of the fix — plus email and VK passwords, sign out on all devices, and refuse suspicious links.",
    },
  ],
  sections: [
    {
      title: "What VK treats as spam",
      level: 2,
      paras: [
        "Mass same-type messages without a request: “subscribe,” “buy,” “click the link,” asks to send an SMS or code. Same pattern in comments and on the community wall.",
        "Suspicious signs: batches of friend requests, floods of identical comments, and links to third-party sites asking you to “log in with VK” outside the official domain.",
      ],
      lists: [
        {
          intro: "Typical spam goals:",
          items: [
            "inflate followers into a public",
            "sell a product or service outside the rules",
            "phish login and password",
            "send people to scam sites",
            "blast from a hacked account",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Using spam for “fast growth” leads to account limits and lost trust. It’s not a promotion channel.",
        },
      ],
    },
    {
      title: "How spam appears",
      level: 2,
      paras: [
        "Some blasts come from fake accounts and automation. Old 2020 tool and marketplace names don’t matter: the pattern is the same — mass outreach without consent.",
        "Another path is a hack: the user clicks a link, enters data on a fake form, or grants rights to a shady app. Then the page messages friends.",
      ],
      links: [
        {
          label: "Legal VK messaging",
          href: "/en/blog/rassylka-vk/",
        },
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "How to report",
      level: 2,
      paras: [
        "In DMs open the message menu (⋯ or similar) and pick report or “This is spam.” The exact button depends on the app and version.",
        "On a friend request — menu on the request or the person’s page → “Report” → spam or scam reason.",
        "In a community: post or comment menu → report. Admins benefit from filters and moderation so they don’t review everything by hand.",
      ],
      lists: [
        {
          intro: "Prevention in settings:",
          items: [
            "limit who can message you (privacy / “Contact me”)",
            "don’t accept unknown requests blindly",
            "don’t open odd short links from DMs",
            "don’t enter a VK password outside the official site or app",
          ],
        },
      ],
    },
    {
      title: "If your page is already blasting spam",
      level: 2,
      paras: [
        "Change the email password tied to the account, then the VK password. In security, end all active sessions. Check and revoke suspicious apps with access.",
        "Warn friends briefly: “if something weird was sent — it wasn’t me.” Run antivirus on the device, especially if you opened attachments or entered a password on a third-party site.",
      ],
      notes: [
        {
          title: "After recovery",
          kind: "tip",
          text: "Turn on login confirmation if available and review activity history — so you spot a repeat login faster.",
        },
      ],
    },
    {
      title: "For communities and business",
      level: 2,
      paras: [
        "Don’t reply to spam offers to “inflate followers” and don’t buy blasts to other people’s lists. Report and block.",
        "Your own messages to followers — only within VK rules and consent. Otherwise the reports land on you.",
      ],
      links: [
        {
          label: "Community greeting message",
          href: "/en/blog/privetstvie-vk/",
        },
        {
          label: "How to promote a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Spam is pushiness without consent and often access-theft risk. Reports and privacy settings cut the flow; after a hack, passwords and sessions matter.",
        "Community growth is built on content and legal tools, not bot blasts.",
      ],
    },
  ],
  closing: [
    "Saw a pushy message — mark it as spam and don’t open the link. Lead your audience through platform rules, not gray mass messaging.",
  ],
  related: [
    "rassylka-vk",
    "kommentarii-v-pablike-vk",
    "privetstvie-vk",
    "raskrutka-gruppy-vk",
    "aktivnost-vk",
    "instagram-direct",
  ],
};

/** ES overlay for spam-vk — same structure as RU JSON / EN. */
export const spamVkEs: BlogPost = {
  slug: "spam-vk",
  title:
    "Spam en VK: qué es, cómo reportarlo y qué hacer tras un hack",
  date: "2020-11-24",
  category: "SMM",
  cover: "/images/blog/spam-vk/cover.webp",
  excerpt:
    "Qué cuenta como spam en mensajes y comunidades de VK, por qué los blasts masivos son arriesgados, cómo reportar y qué hacer si tu página escribe a gente sin ti — sin un catálogo de herramientas grises de bulk-mail.",
  lead: [
    "El spam en VK son mensajes masivos no deseados y pitches insistentes sin consentimiento: en DMs, en el muro, en comentarios de comunidad. A menudo son ads, friend requests o enlaces con riesgo de phishing.",
    "Abajo: cómo detectarlo, reportarlo y proteger la cuenta. Los botones de UI de VK cambian; busca «This is spam» o «Report» en el menú del mensaje, post o perfil. La mensajería legal de comunidad se cubre aparte; no catalogamos bots grises ni herramientas de bulk.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el spam de los ads en el feed?",
      a: "Los ads que corren por la cuenta de ads de VK siguen las reglas de la plataforma. El spam es un blast insistente sin consentimiento, a menudo desde fakes o páginas hackeadas.",
    },
    {
      q: "¿Puedo crecer un grupo con mensajes masivos?",
      a: "Arriesgas bloqueos y reports. Mejores opciones: contenido, targeting y herramientas legales de comunidad.",
    },
    {
      q: "¿Qué hago con un friend request de un spammer?",
      a: "No aceptes. Puedes dejarlos como follower o reportar vía el request o el menú del perfil.",
    },
    {
      q: "¿Por qué los amigos reciben mensajes de mi página?",
      a: "A menudo un hack o una app maliciosa con acceso. Cambia contraseñas, cierra sesiones y revisa apps conectadas.",
    },
    {
      q: "¿El antivirus ayuda tras un hack?",
      a: "Sí, como parte del arreglo — más contraseñas de email y VK, cerrar sesión en todos los dispositivos y rechazar enlaces sospechosos.",
    },
  ],
  sections: [
    {
      title: "Qué trata VK como spam",
      level: 2,
      paras: [
        "Mensajes masivos del mismo tipo sin solicitud: «suscríbete», «compra», «haz clic en el enlace», pedir que envíes un SMS o código. El mismo patrón en comentarios y en el muro de la comunidad.",
        "Señales sospechosas: lotes de friend requests, floods de comentarios idénticos y enlaces a sitios de terceros que te piden «iniciar sesión con VK» fuera del dominio oficial.",
      ],
      lists: [
        {
          intro: "Metas típicas del spam:",
          items: [
            "inflar followers hacia un público",
            "vender un producto o servicio fuera de las reglas",
            "phish login y contraseña",
            "enviar gente a sitios scam",
            "blast desde una cuenta hackeada",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Usar spam para «crecimiento rápido» lleva a límites de cuenta y pérdida de confianza. No es un canal de promoción.",
        },
      ],
    },
    {
      title: "Cómo aparece el spam",
      level: 2,
      paras: [
        "Algunos blasts vienen de cuentas fake y automatización. Los nombres de tools y marketplaces de 2020 no importan: el patrón es el mismo — outreach masivo sin consentimiento.",
        "Otro camino es un hack: el usuario hace clic en un enlace, introduce datos en un formulario falso o concede derechos a una app dudosa. Luego la página escribe a los amigos.",
      ],
      links: [
        {
          label: "Mensajería legal de VK",
          href: "/es/blog/rassylka-vk/",
        },
        {
          label: "Comentarios en un público VK",
          href: "/es/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Cómo reportar",
      level: 2,
      paras: [
        "En DMs abre el menú del mensaje (⋯ o similar) y elige report o «This is spam». El botón exacto depende de la app y la versión.",
        "En un friend request — menú del request o de la página de la persona → «Report» → motivo spam o scam.",
        "En una comunidad: menú del post o comentario → report. A los admins les ayudan filtros y moderación para no revisar todo a mano.",
      ],
      lists: [
        {
          intro: "Prevención en settings:",
          items: [
            "limita quién puede escribirte (privacy / «Contact me»)",
            "no aceptes requests desconocidos a ciegas",
            "no abras short links raros desde DMs",
            "no introduzcas una contraseña de VK fuera del sitio o app oficial",
          ],
        },
      ],
    },
    {
      title: "Si tu página ya está tirando spam",
      level: 2,
      paras: [
        "Cambia la contraseña del email ligada a la cuenta, luego la de VK. En seguridad, cierra todas las sesiones activas. Revisa y revoca apps sospechosas con acceso.",
        "Avisa a los amigos en breve: «si se envió algo raro — no fui yo». Corre antivirus en el dispositivo, sobre todo si abriste adjuntos o introdujiste una contraseña en un sitio de terceros.",
      ],
      notes: [
        {
          title: "Tras recuperar",
          kind: "tip",
          text: "Activa la confirmación de login si está disponible y revisa el historial de actividad — así detectas un login repetido más rápido.",
        },
      ],
    },
    {
      title: "Para comunidades y negocio",
      level: 2,
      paras: [
        "No respondas a ofertas spam de «inflar followers» y no compres blasts a listas ajenas. Reporta y bloquea.",
        "Tus propios mensajes a followers — solo dentro de las reglas de VK y el consentimiento. Si no, los reports caen sobre ti.",
      ],
      links: [
        {
          label: "Mensaje de saludo de comunidad",
          href: "/es/blog/privetstvie-vk/",
        },
        {
          label: "Cómo promover un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "El spam es insistencia sin consentimiento y a menudo riesgo de robo de acceso. Reports y settings de privacy cortan el flujo; tras un hack, importan contraseñas y sesiones.",
        "El crecimiento de comunidad se construye con contenido y herramientas legales, no con blasts de bots.",
      ],
    },
  ],
  closing: [
    "Viste un mensaje insistente — márcalo como spam y no abras el enlace. Lleva a tu audiencia por las reglas de la plataforma, no por mensajería masiva gris.",
  ],
  related: [
    "rassylka-vk",
    "kommentarii-v-pablike-vk",
    "privetstvie-vk",
    "raskrutka-gruppy-vk",
    "aktivnost-vk",
    "instagram-direct",
  ],
};

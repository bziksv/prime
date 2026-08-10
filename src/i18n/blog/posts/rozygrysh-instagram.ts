import type { BlogPost } from "../../../data/blog";

/** EN overlay for rozygrysh-instagram — same structure as RU JSON. */
export const rozygryshInstagramEn: BlogPost = {
  slug: "rozygrysh-instagram",
  title: "Random number generator for a giveaway: fair winner selection",
  date: "2020-08-21",
  category: "SMM",
  cover: "/images/blog/rozygrysh-instagram/cover-en.webp",
  excerpt:
    "How fair random works for social giveaways: why use a generator, how to lock the result, which tools to use, and what to avoid — without “how to win” tips.",
  lead: [
    "Giveaways on Instagram and other networks often pick a winner with a random number or a giveaway tool. For the audience, transparency matters: participant list, method, and a public screenshot/recording.",
    "Below: how fair selection works, where RNG fits, and how an organizer should run a giveaway. We don’t cover spam schemes or “guaranteed wins” — that’s cheating participants and a ban risk.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why use a generator if you can just point at someone?",
      a: "So the result is reproducible and checkable: a number from the list + public random. Otherwise people suspect a fix.",
    },
    {
      q: "Is Random.org better than Excel?",
      a: "For public giveaways, tools with a log/screenshot are handy. Main point — announce the method upfront and don’t change rules after start.",
    },
    {
      q: "Can I win “by a system”?",
      a: "Fair RNG gives participants no system. “Always win” tips are usually about spam or cheating — don’t use them.",
    },
    {
      q: "Do I need a dedicated giveaway bot?",
      a: "Handy with thousands of comments: collect participants + random. Check platform rules and account access.",
    },
    {
      q: "What should I put in the terms?",
      a: "Deadline, who can enter, how comments/reposts count, how the winner is chosen, where results are posted.",
    },
    {
      q: "What if there are several winners?",
      a: "Decide upfront: without repeats or with return to the pool. Generate several unique numbers from the range.",
    },
    {
      q: "Is a screen recording required?",
      a: "It strongly builds trust. Minimum — a tool screenshot + a numbered participant table.",
    },
    {
      q: "Is this only for Instagram?",
      a: "Same logic for VK, Telegram, and a site: list → random → lock the result.",
    },
  ],
  sections: [
    {
      title: "Why fair random matters",
      level: 2,
      paras: [
        "A giveaway is marketing and trust. If the winner is “the organizer’s friend” with no process, the audience leaves, and the platform may punish engagement spam.",
        "A random number generator gives a number in 1…N, where N is participants after filtering (dupes, bots, people who didn’t meet the rules).",
      ],
      lists: [
        {
          intro: "Process benefits:",
          items: [
            "transparency",
            "fewer conflicts",
            "repeatable verification",
            "easier complaint moderation",
          ],
        },
      ],
    },
    {
      title: "How selection works",
      level: 2,
      paras: [
        "Collect the participant list (comments, forms, reposts — per rules). Clean dupes and obvious junk. Number in order. Generate an integer from 1 to N inclusive. That number = winner.",
        "Giveaway tools do collection and random in one window; the manual way is an export + Random.org / similar. Announce the method before start.",
      ],
      lists: [
        {
          intro: "Organizer steps:",
          items: [
            "rules and deadline",
            "collect and number",
            "public random",
            "lock it (video/screenshot)",
            "contact the winner per the offer",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Changing rules after start (“now only a repost”). That kills trust.",
        },
      ],
    },
    {
      title: "Activity formats",
      level: 2,
      paras: [
        "Classic giveaway: follow + comment/tag friends. “Task”: answer a question, send a Story. “Best content”: random is weaker here — you need jury criteria, or it becomes a fight.",
        "For a brand, audience quality beats bot comment records.",
      ],
      lists: [
        {
          intro: "Pick a format for the goal:",
          items: [
            "reach — easy entry",
            "leads — form/bot",
            "UGC — moderated task",
            "loyalty — for subscribers with history",
          ],
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Public RNGs (e.g. Random.org) work well for on-video demos. Spreadsheet: `RANDBETWEEN` — fine if you recorded the process. Specialized giveaway tools — for mass comments; read Instagram ToS and access rights.",
        "Don’t trust “black” generators that ask for the account password.",
      ],
      lists: [
        {
          intro: "Security minimum:",
          items: [
            "no password sharing with third parties",
            "official OAuth with revoke after",
            "participant-list backup",
            "two people to verify on a large prize",
          ],
        },
      ],
    },
    {
      title: "Transparency and locking the result",
      level: 2,
      paras: [
        "Before random, show N and where the list came from. On screen — the tool and result. After — a post with the winner and a link to the recording. That closes ~90% of “they fixed it” claims.",
        "If the winner doesn’t reply — a backup per rules (second number), also public.",
      ],
      lists: [
        {
          intro: "In the final post:",
          items: [
            "date and method",
            "N participants",
            "the drawn number",
            "winner handle",
            "reply deadline",
          ],
        },
      ],
    },
    {
      title: "What not to do",
      level: 2,
      paras: [
        "Comment spam, fake accounts, a hidden pick of “your people”, tips for participants to break the rules — hurt the brand and break platform rules.",
        "This article is informational: Instagram is a Meta product; in the Russian Federation Meta’s activity is recognized as extremist. We don’t encourage using the platform; if you run a giveaway — run it fairly.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "“guaranteed win” for money",
            "a tool that asks for the password",
            "no participant list",
            "rules changed on results day",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fair random + a screen recording is cheaper than an audience scandal.",
        },
      ],
      links: [
        {
          label: "SMM manager",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
  related: [
    "menedzher-smm",
    "pryamoy-efir-instagram",
    "blog-instagram",
    "raskrutka-gruppy-vk",
    "kontent-plan-instagram",
  ],
};

/** ES overlay for rozygrysh-instagram — same structure as RU JSON / EN. */
export const rozygryshInstagramEs: BlogPost = {
  slug: "rozygrysh-instagram",
  title: "Generador de números aleatorios para un sorteo: elección justa del ganador",
  date: "2020-08-21",
  category: "SMM",
  cover: "/images/blog/rozygrysh-instagram/cover-es.webp",
  excerpt:
    "Cómo funciona el azar justo en sorteos de redes: por qué usar un generador, cómo fijar el resultado, qué tools usar y qué evitar — sin tips de «cómo ganar».",
  lead: [
    "Los sorteos en Instagram y otras redes a menudo eligen ganador con un número aleatorio o una tool de giveaway. Para la audiencia importa la transparencia: lista de participantes, método y un screenshot/grabación públicos.",
    "Abajo: cómo funciona la selección justa, dónde encaja el RNG y cómo debe correr un sorteo el organizador. No cubrimos esquemas de spam ni «victorias garantizadas» — eso es engañar participantes y riesgo de ban.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Por qué usar un generador si puedo señalar a alguien?",
      a: "Para que el resultado sea reproducible y comprobable: un número de la lista + azar público. Si no, la gente sospecha de un amaño.",
    },
    {
      q: "¿Random.org es mejor que Excel?",
      a: "Para sorteos públicos, tools con log/screenshot son prácticas. Lo principal — anunciar el método de antemano y no cambiar las reglas tras el inicio.",
    },
    {
      q: "¿Se puede ganar «por sistema»?",
      a: "Un RNG justo no da sistema a los participantes. Los tips de «ganar siempre» suelen ser spam o trampa — no los uses.",
    },
    {
      q: "¿Hace falta un bot dedicado de sorteo?",
      a: "Práctico con miles de comentarios: recopilar participantes + azar. Revisa las reglas de la plataforma y el acceso a la cuenta.",
    },
    {
      q: "¿Qué pongo en las bases?",
      a: "Plazo, quién puede participar, cómo cuentan comentarios/reposts, cómo se elige el ganador, dónde se publican los resultados.",
    },
    {
      q: "¿Y si hay varios ganadores?",
      a: "Decide de antemano: sin repeticiones o con vuelta al pool. Genera varios números únicos del rango.",
    },
    {
      q: "¿Es obligatoria una grabación de pantalla?",
      a: "Construye mucha confianza. Mínimo — screenshot de la tool + tabla numerada de participantes.",
    },
    {
      q: "¿Esto es solo para Instagram?",
      a: "Misma lógica para VK, Telegram y un sitio: lista → azar → fijar el resultado.",
    },
  ],
  sections: [
    {
      title: "Por qué importa el azar justo",
      level: 2,
      paras: [
        "Un sorteo es marketing y confianza. Si el ganador es «el amigo del organizador» sin proceso, la audiencia se va y la plataforma puede castigar el spam de engagement.",
        "Un generador de números aleatorios da un número en 1…N, donde N son los participantes tras filtrar (duplicados, bots, quien no cumplió las reglas).",
      ],
      lists: [
        {
          intro: "Beneficios del proceso:",
          items: [
            "transparencia",
            "menos conflictos",
            "verificación repetible",
            "moderación de quejas más fácil",
          ],
        },
      ],
    },
    {
      title: "Cómo funciona la selección",
      level: 2,
      paras: [
        "Recoge la lista de participantes (comentarios, formularios, reposts — según reglas). Limpia duplicados y basura obvia. Numera en orden. Genera un entero de 1 a N inclusive. Ese número = ganador.",
        "Las tools de giveaway hacen recolección y azar en una ventana; la vía manual es un export + Random.org / similar. Anuncia el método antes de empezar.",
      ],
      lists: [
        {
          intro: "Pasos del organizador:",
          items: [
            "reglas y plazo",
            "recoger y numerar",
            "azar público",
            "fijarlo (vídeo/screenshot)",
            "contactar al ganador según la oferta",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Cambiar las reglas tras el inicio («ahora solo un repost»). Eso mata la confianza.",
        },
      ],
    },
    {
      title: "Formatos de actividad",
      level: 2,
      paras: [
        "Sorteo clásico: follow + comentario/etiquetar amigos. «Tarea»: responder una pregunta, enviar un Story. «Mejor contenido»: aquí el azar es más débil — hacen falta criterios de jurado, o se vuelve pelea.",
        "Para una marca, la calidad de audiencia gana a récords de comentarios de bots.",
      ],
      lists: [
        {
          intro: "Elige formato según el objetivo:",
          items: [
            "reach — entrada fácil",
            "leads — formulario/bot",
            "UGC — tarea moderada",
            "lealtad — para suscriptores con historial",
          ],
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "RNGs públicos (p. ej. Random.org) van bien para demos en vídeo. Hoja de cálculo: `RANDBETWEEN` — bien si grabaste el proceso. Tools especializadas de giveaway — para comentarios masivos; lee los ToS de Instagram y los derechos de acceso.",
        "No confíes en generadores «black» que piden la contraseña de la cuenta.",
      ],
      lists: [
        {
          intro: "Mínimo de seguridad:",
          items: [
            "sin compartir la contraseña con terceros",
            "OAuth oficial con revoke después",
            "backup de la lista de participantes",
            "dos personas para verificar un premio grande",
          ],
        },
      ],
    },
    {
      title: "Transparencia y fijar el resultado",
      level: 2,
      paras: [
        "Antes del azar, muestra N y de dónde salió la lista. En pantalla — la tool y el resultado. Después — un post con el ganador y un enlace a la grabación. Eso cierra ~90% de las reclamaciones de «lo amañaron».",
        "Si el ganador no responde — un backup según reglas (segundo número), también público.",
      ],
      lists: [
        {
          intro: "En el post final:",
          items: [
            "fecha y método",
            "N participantes",
            "el número sorteado",
            "handle del ganador",
            "plazo de respuesta",
          ],
        },
      ],
    },
    {
      title: "Qué no hacer",
      level: 2,
      paras: [
        "Spam de comentarios, cuentas falsas, una elección oculta de «los tuyos», tips para que los participantes rompan las reglas — dañan la marca y rompen las reglas de la plataforma.",
        "Este artículo es informativo: Instagram es un producto de Meta; en la Federación Rusa la actividad de Meta se reconoce como extremista. No fomentamos el uso de la plataforma; si corres un sorteo — córrelo con justicia.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "«victoria garantizada» a cambio de dinero",
            "una tool que pide la contraseña",
            "sin lista de participantes",
            "reglas cambiadas el día del resultado",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Azar justo + grabación de pantalla sale más barato que un escándalo de audiencia.",
        },
      ],
      links: [
        {
          label: "Manager de SMM",
          href: "/es/blog/menedzher-smm/",
        },
      ],
    },
  ],
  related: [
    "menedzher-smm",
    "pryamoy-efir-instagram",
    "blog-instagram",
    "raskrutka-gruppy-vk",
    "kontent-plan-instagram",
  ],
};

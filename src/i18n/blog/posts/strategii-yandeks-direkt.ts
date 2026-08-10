import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategii-yandeks-direkt — same structure as RU JSON. */
export const strategiiYandeksDirektEn: BlogPost = {
  slug: "strategii-yandeks-direkt",
  title: "Yandex Direct strategies: start from economics, not the button label",
  date: "2017-07-02",
  category: "Paid search",
  cover: "/images/blog/strategii-yandeks-direkt/cover-en.webp",
  excerpt:
    "Why Direct’s “easy mode for beginners” faded, why goals and CPA matter, and how to choose a strategy from unit economics — not auction anxiety.",
  lead: [
    "In July 2017 Direct retired “Show in the block at minimum price” — the mode many used to “just try ads” without a CPA target. Strategy names and screens have changed again since then.",
    "The durable lesson isn’t about one 2017 button: without a clear cost per lead or order and feedback from sales, both automation and manual bids fly blind. Here’s how to think about strategies now.",
  ],
  faq: [
    {
      q: "What disappeared in 2017?",
      a: "The “show in the block at minimum price” strategy — a beginner-friendly “stay in the block, keep the bid down” mode. That magic button is gone; auctions and auto-bidding are still here.",
    },
    {
      q: "Can I run Direct without numbers?",
      a: "You can burn budget. You can’t steer results. Floor: a goal action, cost per lead or order, and margin.",
    },
    {
      q: "Are auto-strategies better than manual bids?",
      a: "Depends on volume and goal quality. Sparse conversions and dirty goals — the algorithm learns noise. Clean conversions at scale — auto-strategies earn their keep.",
    },
    {
      q: "Where should a beginner start today?",
      a: "A tight keyword set, a matching landing, analytics goals, and a hard budget cap. Not “pick the simplest strategy and hope.”",
    },
    {
      q: "Is “we got calls / we didn’t” enough?",
      a: "As a rough signal — yes. As the only KPI — no. You need cost per inquiry, lead quality, and a line to sales.",
    },
    {
      q: "Should I chase premium placement?",
      a: "Block height isn’t the goal. Economics is. See the premium placement article.",
    },
    {
      q: "When do I need a specialist?",
      a: "When spend is material and nobody inside joins bids, analytics, and sales. Otherwise you stall at “we’re fine” or “paid search doesn’t work.”",
    },
    {
      q: "Does the right strategy guarantee leads?",
      a: "No. A strategy only allocates budget. Without demand, offer, and landing it won’t carry the campaign.",
    },
  ],
  sections: [
    {
      title: "What changed back then",
      level: 2,
      paras: [
        "“Show in the block at minimum price” felt like control for beginners: “we’re in the block, the bid isn’t crazy.” For agencies and experienced advertisers it was already too blunt — no CPA, ROI, or competitive footing.",
        "Yandex moved toward richer strategies and metrics, closer to other large ad platforms. Fewer buttons for people who don’t count; more pressure to set goals and feed clean data.",
      ],
      notes: [
        {
          title: "Historical context",
          text: "2017 strategy names and screenshots are archives. Configure campaigns from current Direct Help and your analytics goals — not old article click-paths.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why “just try it” got harder",
      level: 2,
      paras: [
        "Without an average cost per call, lead, or deal, a bid is a lottery. “There were calls — good” never answers what a lead costs or whether ads pay off.",
        "Some teams skip analytics on purpose (“no bandwidth”). Others tried “standard” strategies, saw nothing, and blamed paid search — while goals, keywords, or the landing were usually broken.",
      ],
      lists: [
        {
          intro: "The usual gap:",
          items: [
            "Direct spends on impressions and clicks",
            "the business only asks “were there calls?”",
            "nobody ties lead cost to lead quality",
            "the strategy gets swapped at random",
          ],
        },
      ],
    },
    {
      title: "What to decide before you pick a strategy",
      level: 2,
      paras: [
        "Economics and the goal first; strategy type second. You need a target action, enough conversions for learning, an acceptable CPA or ad-spend share, and budget limits.",
        "Manual bidding fits launches, tests, and thin data. Auto-strategies fit when goals are clean and volume is high enough that the algorithm isn’t guessing.",
      ],
      lists: [
        {
          intro: "Minimum before you go live:",
          items: [
            "an analytics goal that actually fires",
            "a ceiling for cost per lead",
            "a landing that matches the query cluster",
            "negatives and a check on junk traffic",
            "a budget cap and a test window",
          ],
        },
      ],
      links: [
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Feedback beats the strategy button",
      level: 2,
      paras: [
        "Even a strong media buyer is stuck if CRM only says “someone called” with no status or deal value. Cleaner lead and sales data means sharper bids and better auto-strategies.",
        "A strategy allocates budget. Campaign result = demand × offer × landing × measurement. No UI button replaces that chain.",
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t copy a strategy name from someone else’s case. Match conversion volume, sales-cycle length, and goal quality — then pick the optimization mode.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "spetsrazmeshchenie-direkt",
    "utm-metki",
    "retargeting",
    "kontekst-i-seo",
    "prazdnichnyy-retargeting",
  ],
};

/** ES overlay for strategii-yandeks-direkt — same structure as RU JSON / EN. */
export const strategiiYandeksDirektEs: BlogPost = {
  slug: "strategii-yandeks-direkt",
  title: "Estrategias de Yandex Direct: parte de la economía, no de la etiqueta del botón",
  date: "2017-07-02",
  category: "Paid search",
  cover: "/images/blog/strategii-yandeks-direkt/cover-es.webp",
  excerpt:
    "Por qué se apagó el «modo fácil para principiantes» de Direct, por qué importan goals y CPA, y cómo elegir estrategia desde unit economics — no desde la ansiedad de la subasta.",
  lead: [
    "En julio de 2017 Direct retiró «Mostrar en el bloque al precio mínimo» — el modo que muchos usaban para «probar ads» sin un objetivo de CPA. Los nombres de estrategias y las pantallas han vuelto a cambiar desde entonces.",
    "La lección durable no va de un botón de 2017: sin un coste claro por lead o pedido y feedback de ventas, tanto la automatización como las pujas manuales vuelan a ciegas. Así es como pensar las estrategias ahora.",
  ],
  faq: [
    {
      q: "¿Qué desapareció en 2017?",
      a: "La estrategia «mostrar en el bloque al precio mínimo» — un modo amigable para principiantes de «quedar en el bloque, mantener la puja baja». Ese botón mágico ya no está; las subastas y el auto-bidding siguen.",
    },
    {
      q: "¿Puedo correr Direct sin números?",
      a: "Puedes quemar presupuesto. No puedes dirigir resultados. Suelo: una acción goal, coste por lead o pedido, y margen.",
    },
    {
      q: "¿Las auto-estrategias son mejores que las pujas manuales?",
      a: "Depende del volumen y la calidad del goal. Conversiones escasas y goals sucios — el algoritmo aprende ruido. Conversiones limpias a escala — las auto-estrategias se ganan el sitio.",
    },
    {
      q: "¿Por dónde debería empezar hoy un principiante?",
      a: "Un set de keywords estrecho, una landing que encaje, goals de analytics y un tope duro de presupuesto. No «elige la estrategia más simple y espera».",
    },
    {
      q: "¿Basta «hubo llamadas / no hubo»?",
      a: "Como señal aproximada — sí. Como único KPI — no. Necesitas coste por consulta, calidad del lead y una línea hacia ventas.",
    },
    {
      q: "¿Debo perseguir el emplazamiento premium?",
      a: "La altura del bloque no es el objetivo. La economía sí. Ver el artículo de emplazamiento especial.",
    },
    {
      q: "¿Cuándo necesito un especialista?",
      a: "Cuando el gasto es material y nadie dentro une pujas, analytics y ventas. Si no, te estancas en «vamos bien» o «el paid search no funciona».",
    },
    {
      q: "¿La estrategia correcta garantiza leads?",
      a: "No. Una estrategia solo asigna presupuesto. Sin demanda, oferta y landing no carga la campaña.",
    },
  ],
  sections: [
    {
      title: "Qué cambió entonces",
      level: 2,
      paras: [
        "«Mostrar en el bloque al precio mínimo» se sentía como control para principiantes: «estamos en el bloque, la puja no está loca». Para agencias y anunciantes experimentados ya era demasiado tosco — sin CPA, ROI ni pie competitivo.",
        "Yandex avanzó hacia estrategias y métricas más ricas, más cerca de otras grandes plataformas de ads. Menos botones para quien no cuenta; más presión para fijar goals y alimentar datos limpios.",
      ],
      notes: [
        {
          title: "Contexto histórico",
          text: "Nombres de estrategias y capturas de 2017 son archivo. Configura campañas desde la Ayuda actual de Direct y tus goals de analytics — no desde rutas de clic de artículos viejos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Por qué «solo probar» se puso más difícil",
      level: 2,
      paras: [
        "Sin un coste medio por llamada, lead o trato, una puja es una lotería. «Hubo llamadas — bien» nunca responde cuánto cuesta un lead ni si los ads se pagan.",
        "Algunos equipos saltan analytics a propósito («no hay banda ancha»). Otros probaron estrategias «estándar», no vieron nada y echaron la culpa al paid search — mientras goals, keywords o la landing suelen estar rotos.",
      ],
      lists: [
        {
          intro: "El hueco habitual:",
          items: [
            "Direct gasta en impresiones y clics",
            "el negocio solo pregunta «¿hubo llamadas?»",
            "nadie ata el coste del lead a su calidad",
            "la estrategia se cambia al azar",
          ],
        },
      ],
    },
    {
      title: "Qué decidir antes de elegir estrategia",
      level: 2,
      paras: [
        "Primero economía y objetivo; segundo el tipo de estrategia. Necesitas una acción objetivo, conversiones suficientes para aprender, un CPA aceptable o cuota de gasto en ads, y límites de presupuesto.",
        "Las pujas manuales encajan en lanzamientos, tests y datos finos. Las auto-estrategias, cuando los goals están limpios y el volumen es alto para que el algoritmo no adivine.",
      ],
      lists: [
        {
          intro: "Mínimo antes de salir en vivo:",
          items: [
            "un goal de analytics que de verdad dispare",
            "un techo de coste por lead",
            "una landing que encaje con el cluster de consultas",
            "negativos y un chequeo de tráfico basura",
            "tope de presupuesto y ventana de test",
          ],
        },
      ],
      links: [
        {
          label: "Emplazamiento especial en Direct",
          href: "/es/blog/spetsrazmeshchenie-direkt/",
        },
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "El feedback gana al botón de estrategia",
      level: 2,
      paras: [
        "Incluso un buen media buyer se atasca si el CRM solo dice «alguien llamó» sin estado ni valor del trato. Datos más limpios de leads y ventas significan pujas más afiladas y mejores auto-estrategias.",
        "Una estrategia asigna presupuesto. Resultado de campaña = demanda × oferta × landing × medición. Ningún botón de UI sustituye esa cadena.",
      ],
      notes: [
        {
          title: "Práctica",
          text: "No copies el nombre de una estrategia del caso de otro. Empareja volumen de conversiones, duración del ciclo de venta y calidad del goal — luego elige el modo de optimización.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "spetsrazmeshchenie-direkt",
    "utm-metki",
    "retargeting",
    "kontekst-i-seo",
    "prazdnichnyy-retargeting",
  ],
};

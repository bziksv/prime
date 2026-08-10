import type { BlogPost } from "../../../data/blog";

/** EN overlay for tendentsii-veb-dizayna — same structure as RU JSON. */
export const tendentsiiVebDizaynaEn: BlogPost = {
  slug: "tendentsii-veb-dizayna",
  title: "Web design trends: what to ship — and what gets in the way",
  date: "2018-05-29",
  category: "Digital marketing",
  cover: "/images/blog/tendentsii-veb-dizayna/cover-en.webp",
  excerpt:
    "How to choose web design trends without chasing fashion: animation, color and type, data storytelling, AI in UI, illustrations, mobile-first, asymmetry, tools, email and e-com — focused on the user path and speed.",
  lead: [
    "Web design trends work best as a library of techniques — not a mandatory “ship everything” checklist. Some ideas are already baseline (mobile-first, micro-interactions); others stay seasonal fashion or noise for effect.",
    "Below: how to pick techniques for the business job — animation, color and type, on-screen data, AI in the interface, illustrations, grid, and tools. A risk-and-decision map, not a list of required gimmicks.",
  ],
  faq: [
    {
      q: "Should I chase trends every season?",
      a: "No. Job, audience, and speed first. A trend fits if it strengthens the path and doesn’t break mobile UX.",
    },
    {
      q: "Is animation required?",
      a: "No. Useful for hierarchy and feedback. Without a goal — and on a weak phone — it irritates and hurts Core Web Vitals.",
    },
    {
      q: "Is flat design dead?",
      a: "Classic “flat with no depth” picked up soft shadows and gradients. The point is clear hierarchy — not a ban on volume.",
    },
    {
      q: "Which design tool should I choose?",
      a: "Look at the team and process. Figma is a common collab standard; other editors depend on the stack. A shared component library beats chasing announcements.",
    },
    {
      q: "Will trendy UI sell by itself?",
      a: "Rarely. Conversion leans more on offer, trust, speed, and a clear CTA than asymmetry for its own sake.",
    },
    {
      q: "Should I put an AI chat on every page?",
      a: "Only if it closes a real path (matching, FAQ, order status). A “bot for the bot” with no operator and knowledge base lowers trust.",
    },
    {
      q: "How do I check a trend before release?",
      a: "State a hypothesis, view it on a real phone, measure speed and behavior (bounce, CTA clicks). Without a metric it’s taste, not a decision.",
    },
    {
      q: "Does asymmetry fit commercial sites?",
      a: "Sometimes for brand and landing pages. On catalogs and forms, predictable scanning usually matters more. Test — don’t copy a portfolio 1:1.",
    },
  ],
  sections: [
    {
      title: "How to pick trends without chasing fashion",
      level: 2,
      paras: [
        "The useful question isn’t “what’s trendy now” — it’s “what barrier on the path does this technique remove”. Button animation earns its place if it shows state; a neon palette works if brand and niche can carry it and text stays readable.",
        "Separate baseline from seasonal fashion. Mobile-first and clear type are the foundation. Experimental grids, heavy 3D, and decorative noise are options with a cost for speed and accessibility.",
      ],
      lists: [
        {
          intro: "Filter before shipping:",
          items: [
            "there’s a goal in the user path",
            "doesn’t break mobile UX or tap targets",
            "doesn’t kill speed and Core Web Vitals",
            "fits the brand — doesn’t fight it",
            "there’s a hypothesis and a way to measure effect",
          ],
        },
      ],
    },
    {
      title: "Animation and micro-interactions",
      level: 2,
      paras: [
        "Motion on the web works when it explains: hover, loading, a form step change, a tip appearing. SVG and CSS animation are often lighter than heavy video backgrounds; GIF fits in spots.",
        "Without a goal, animation is noise. On weak devices it steals attention and battery. Respect `prefers-reduced-motion`: offer a simplified mode for people motion bothers.",
      ],
      lists: [
        {
          intro: "Before shipping animation, ask:",
          items: [
            "what the motion explains",
            "how it behaves on a real phone",
            "whether it can be turned off or simplified via reduced-motion",
          ],
        },
      ],
    },
    {
      title: "Color, typography, and visual character",
      level: 2,
      paras: [
        "Bold palettes help you stand out if brand and niche can handle them. Color tools are fine for experiments; “neon everywhere” without contrast checks risks readability and accessibility.",
        "Typography sets the tone: sans and serif paired, custom faces, large headlines. On mobile, readability beats effect; heavy web fonts cut speed — load them on purpose and limit weights.",
        "Storefront palette and identity system are related topics; here the focus is that a trend doesn’t break hierarchy and CTA.",
      ],
      links: [
        {
          label: "Online store color",
          href: "/en/blog/tsvet-internet-magazina/",
        },
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "On-screen data and complex visuals",
      level: 2,
      paras: [
        "Data storytelling is when figures and charts lead by meaning — not just decorate a block. Readability beats wow: labels, scale, a mobile chart version.",
        "3D and AR fit niches (for example, furniture in a room), but for most commercial sites they aren’t a must-have. Clear offer and catalog first — then AR experiments.",
      ],
      notes: [
        {
          kind: "tip",
          text: "If a chart can’t be understood on a phone in a few seconds — simplify it or replace it with a table or a short takeaway.",
        },
      ],
    },
    {
      title: "AI in interfaces and illustrations",
      level: 2,
      paras: [
        "AI in UI is wider than a chatbot: search hints, recommendations, draft generation, smart filters. Trust builds on an honest path: people understand what the system does and how to reach a human.",
        "Illustrations instead of generic filler clichés help the brand sound unique — if the style is stable and doesn’t overpower content. A random set of “trendy” images is worse than a calm, consistent system.",
      ],
      lists: [
        {
          intro: "When an AI widget fits:",
          items: [
            "closes a frequent question or matching task",
            "there’s a knowledge base and escalation to a human",
            "doesn’t block the main path to a lead",
            "doesn’t promise what the service doesn’t do",
          ],
        },
      ],
    },
    {
      title: "Mobile-first, “soft flat”, and asymmetry",
      level: 2,
      paras: [
        "Mobile-first is necessity, not fashion: design the phone path before desktop decoration. Micro-interactions and simple nav beat a scatter of icons; check animation and large type on a real device.",
        "“Soft flat”: a flat base plus light shadows and gradients for hierarchy. It works until it turns into heavy effects on every block.",
        "Asymmetric grids give character but easily break scanning. On commercial pages, test: unusual alone doesn’t equal more leads.",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Tools, email, and e-com: what matters more than UI fashion",
      level: 2,
      paras: [
        "The editor and prototype market shifts. Teams need one process, a component library, and handoff to front-end more than chasing a “unifier of all tools”. Pick the stack for people and release cycle.",
        "Email interactivity (carousels, in-mail actions) depends on the client; some tricks are limited. The base is mobile email layout, a clear CTA, and lawful consent to mail.",
        "In e-commerce, marketplaces, delivery, stock availability, and order speed matter more than a “trendy storefront UI”. Design supports the purchase — it doesn’t replace assortment and service.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Signs of an outdated site",
          href: "/en/blog/ustarevshiy-sayt/",
        },
      ],
    },
  ],
  related: [
    "tsvet-internet-magazina",
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "sozdanie-internet-magazina",
    "optimizatsiya-konversii",
    "ustarevshiy-sayt",
  ],
};

/** ES overlay for tendentsii-veb-dizayna — same structure as RU JSON / EN. */
export const tendentsiiVebDizaynaEs: BlogPost = {
  slug: "tendentsii-veb-dizayna",
  title: "Tendencias de web design: qué enviar — y qué estorba",
  date: "2018-05-29",
  category: "Digital marketing",
  cover: "/images/blog/tendentsii-veb-dizayna/cover-es.webp",
  excerpt:
    "Cómo elegir tendencias de web design sin perseguir la moda: animación, color y tipografía, data storytelling, IA en la UI, ilustraciones, mobile-first, asimetría, tools, email y e-com — centrado en el camino del usuario y la velocidad.",
  lead: [
    "Las tendencias de web design funcionan mejor como una biblioteca de técnicas — no como un checklist obligatorio de «envía todo». Algunas ideas ya son baseline (mobile-first, micro-interactions); otras siguen siendo moda de temporada o ruido por el efecto.",
    "Abajo: cómo elegir técnicas para el trabajo del negocio — animación, color y tipografía, datos en pantalla, IA en la interfaz, ilustraciones, grid y tools. Un mapa de riesgos y decisiones, no una lista de gimmicks obligatorios.",
  ],
  faq: [
    {
      q: "¿Debo perseguir tendencias cada temporada?",
      a: "No. Primero trabajo, audiencia y velocidad. Una tendencia encaja si refuerza el camino y no rompe el UX móvil.",
    },
    {
      q: "¿Es obligatoria la animación?",
      a: "No. Es útil para jerarquía y feedback. Sin meta — y en un teléfono débil — irrita y pega a Core Web Vitals.",
    },
    {
      q: "¿Está muerto el flat design?",
      a: "El «flat sin profundidad» clásico sumó sombras suaves y gradientes. El punto es una jerarquía clara — no una prohibición del volumen.",
    },
    {
      q: "¿Qué tool de diseño debo elegir?",
      a: "Mira el equipo y el proceso. Figma es un estándar común de collab; otros editores dependen del stack. Una biblioteca de componentes compartida gana a perseguir anuncios.",
    },
    {
      q: "¿Una UI de moda vende sola?",
      a: "Rara vez. La conversión se apoya más en oferta, trust, velocidad y un CTA claro que en asimetría por sí misma.",
    },
    {
      q: "¿Debo poner un chat de IA en cada página?",
      a: "Solo si cierra un camino real (matching, FAQ, estado del pedido). Un «bot por el bot» sin operador ni knowledge base baja la trust.",
    },
    {
      q: "¿Cómo comprobar una tendencia antes del release?",
      a: "Enuncia una hipótesis, mírala en un teléfono real, mide velocidad y comportamiento (rebote, clics en CTA). Sin métrica es gusto, no una decisión.",
    },
    {
      q: "¿La asimetría encaja en sitios comerciales?",
      a: "A veces en brand y landings. En catálogos y formularios, el escaneo previsible suele importar más. Testa — no copies un portfolio 1:1.",
    },
  ],
  sections: [
    {
      title: "Cómo elegir tendencias sin perseguir la moda",
      level: 2,
      paras: [
        "La pregunta útil no es «qué está de moda ahora» — es «qué barrera del camino quita esta técnica». La animación de un botón se gana el sitio si muestra estado; una paleta neón funciona si marca y nicho la aguantan y el texto sigue legible.",
        "Separa baseline de moda de temporada. Mobile-first y tipografía clara son la base. Grids experimentales, 3D pesado y ruido decorativo son opciones con un coste para velocidad y accesibilidad.",
      ],
      lists: [
        {
          intro: "Filtro antes de enviar:",
          items: [
            "hay una meta en el camino del usuario",
            "no rompe UX móvil ni tap targets",
            "no mata velocidad ni Core Web Vitals",
            "encaja con la marca — no pelea con ella",
            "hay una hipótesis y una forma de medir el efecto",
          ],
        },
      ],
    },
    {
      title: "Animación y micro-interactions",
      level: 2,
      paras: [
        "El motion en la web funciona cuando explica: hover, carga, cambio de paso de formulario, aparición de un tip. SVG y animación CSS suelen ser más ligeros que fondos de vídeo pesados; GIF encaja en puntos concretos.",
        "Sin meta, la animación es ruido. En dispositivos débiles roba atención y batería. Respeta `prefers-reduced-motion`: ofrece un modo simplificado para quien el motion molesta.",
      ],
      lists: [
        {
          intro: "Antes de enviar animación, pregunta:",
          items: [
            "qué explica el motion",
            "cómo se comporta en un teléfono real",
            "si se puede apagar o simplificar vía reduced-motion",
          ],
        },
      ],
    },
    {
      title: "Color, tipografía y carácter visual",
      level: 2,
      paras: [
        "Las paletas audaces ayudan a destacar si marca y nicho las aguantan. Las tools de color valen para experimentos; «neón en todas partes» sin chequeos de contraste arriesga legibilidad y accesibilidad.",
        "La tipografía fija el tono: sans y serif emparejados, faces custom, titulares grandes. En móvil, la legibilidad gana al efecto; las web fonts pesadas cortan velocidad — cárgalas a propósito y limita pesos.",
        "Paleta de storefront y sistema de identidad son temas relacionados; aquí el foco es que una tendencia no rompa jerarquía y CTA.",
      ],
      links: [
        {
          label: "Color de tienda online",
          href: "/es/blog/tsvet-internet-magazina/",
        },
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Datos en pantalla y visuales complejos",
      level: 2,
      paras: [
        "Data storytelling es cuando cifras y charts guían por sentido — no solo decoran un bloque. La legibilidad gana al wow: etiquetas, escala, una versión móvil del chart.",
        "3D y AR encajan en nichos (por ejemplo, muebles en una habitación), pero para la mayoría de sitios comerciales no son must-have. Primero oferta clara y catálogo — luego experimentos AR.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Si un chart no se entiende en un teléfono en unos segundos — simplifícalo o sustitúyelo por una tabla o un takeaway corto.",
        },
      ],
    },
    {
      title: "IA en interfaces e ilustraciones",
      level: 2,
      paras: [
        "La IA en la UI es más amplia que un chatbot: hints de búsqueda, recomendaciones, generación de borradores, filtros smart. La trust se construye con un camino honesto: la gente entiende qué hace el sistema y cómo llegar a un humano.",
        "Las ilustraciones en vez de clichés genéricos de relleno ayudan a que la marca suene única — si el estilo es estable y no aplasta el contenido. Un set al azar de imágenes «de moda» es peor que un sistema calmado y coherente.",
      ],
      lists: [
        {
          intro: "Cuándo encaja un widget de IA:",
          items: [
            "cierra una pregunta frecuente o una tarea de matching",
            "hay knowledge base y escalado a un humano",
            "no bloquea el camino principal al lead",
            "no promete lo que el servicio no hace",
          ],
        },
      ],
    },
    {
      title: "Mobile-first, «soft flat» y asimetría",
      level: 2,
      paras: [
        "Mobile-first es necesidad, no moda: diseña el camino del teléfono antes de la decoración desktop. Micro-interactions y nav simple ganan a una dispersión de iconos; comprueba animación y tipografía grande en un dispositivo real.",
        "«Soft flat»: una base plana más sombras ligeras y gradientes para jerarquía. Funciona hasta que se vuelve efectos pesados en cada bloque.",
        "Los grids asimétricos dan carácter pero rompen el escaneo con facilidad. En páginas comerciales, testa: lo inusual solo no equivale a más leads.",
      ],
      links: [
        {
          label: "Sitio web responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Optimización de la conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Tools, email y e-com: qué importa más que la moda de UI",
      level: 2,
      paras: [
        "El mercado de editores y prototipos se mueve. Los equipos necesitan un proceso, una biblioteca de componentes y handoff a front-end más que perseguir un «unificador de todas las tools». Elige el stack por gente y ciclo de release.",
        "La interactividad de email (carruseles, acciones in-mail) depende del cliente; algunos trucos están limitados. La base es layout de email móvil, un CTA claro y consentimiento lícito al mailing.",
        "En e-commerce importan marketplaces, entrega, disponibilidad de stock y velocidad del pedido más que una «UI de storefront de moda». El diseño apoya la compra — no sustituye surtido y servicio.",
      ],
      links: [
        {
          label: "Crear una tienda online",
          href: "/es/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Señales de un sitio obsoleto",
          href: "/es/blog/ustarevshiy-sayt/",
        },
      ],
    },
  ],
  related: [
    "tsvet-internet-magazina",
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "sozdanie-internet-magazina",
    "optimizatsiya-konversii",
    "ustarevshiy-sayt",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for amp — same structure as RU JSON. */
export const ampEn: BlogPost = {
  slug: "amp",
  title: "Google AMP pages: what they were and whether you need them now",
  date: "2020-03-13",
  category: "SEO",
  cover: "/images/blog/amp/cover-en.webp",
  excerpt:
    "What AMP is: stripped-down HTML for fast mobile SERP delivery, pros and cons of Google’s cache, why the format stopped being a must-have, and where to put effort instead — your own responsive site.",
  lead: [
    "AMP (Accelerated Mobile Pages) is an open format of lightweight pages that Google pushed from 2015: limited HTML/JS, fast paint, and often delivery from the search cache.",
    "By the mid-2020s AMP is no longer a required mobile SEO layer: the carousel and SERP privileges are gone, and speed is decided by Core Web Vitals on your own site. Below: how the format worked, what helped and what hurt, and when it still makes sense. Step-by-step “install a plugin and rank” guides are outdated.",
  ],
  faq: [
    {
      q: "Is AMP still required for mobile SEO?",
      a: "No. First a fast responsive site. AMP is a narrow/historical case — not a substitute for real mobile UX.",
    },
    {
      q: "How did AMP differ from a normal page?",
      a: "A strict set of tags and components, little arbitrary JS, stripped layout. Google could serve a copy from its cache — faster on a weak connection, but part of the session wasn’t on your host.",
    },
    {
      q: "Is AMP the same as Yandex Turbo?",
      a: "The idea is similar (a light mobile copy), ecosystems differ. Turbo in search was also wound down — the bet is on your own site.",
    },
    {
      q: "Should I urgently delete old /amp URLs?",
      a: "Not always. Check that canonical and analytics point to the main version, there’s no index confusion or dead redirects. What matters is main mobile quality.",
    },
    {
      q: "Does AMP give a ranking boost?",
      a: "There’s no direct “AMP points” as a required factor. Speed and behavior matter — you cover them on regular URLs.",
    },
  ],
  sections: [
    {
      title: "How AMP worked",
      level: 2,
      paras: [
        "A page was built under AMP HTML rules: allowed components instead of arbitrary scripts, markup validation. The goal — predictable fast load on a phone.",
        "Users could open AMP on your domain (often an `/amp` suffix or `?amp`) or see a cached copy in Google’s infrastructure. In the second case some metrics and the feel of the site differed from a full visit to your host.",
      ],
      lists: [
        {
          intro: "What was usually stripped:",
          items: [
            "heavy arbitrary JavaScript",
            "complex widgets and some forms",
            "heavy graphics and effects",
            "some ad and social blocks without special components",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Turbo pages",
          href: "/en/blog/turbo-stranitsy/",
        },
      ],
    },
    {
      title: "Pros and cons of the AMP era",
      level: 2,
      paras: [
        "The upside was speed on weak mobile networks and a shared light template for media. The downsides: poorer UX, harder analytics and conversions, canonical confusion risk, dependence on platform rules and cache.",
        "We don’t reuse old PageSpeed “was 61 — became 87” benchmarks from 2019–2020 cases: tools and metric weights changed. Check current reports on your URLs.",
      ],
      lists: [
        {
          intro: "Typical rollout problems:",
          items: [
            "low conversion on the stripped page",
            "harder goals and events in analytics",
            "duplicates/canonical issues from bad setup",
            "maintaining two templates instead of one good mobile",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "If “fast AMP” converts worse than the full site, the speed win is eaten by lost leads. Count business metrics, not only load time on a demo URL.",
        },
      ],
    },
    {
      title: "Do you need AMP now",
      level: 2,
      paras: [
        "For most commercial sites in 2026 the sensible answer is no as a required layer. Invest in responsive design, compression, fonts, images, cache/CDN, and Core Web Vitals on canonical URLs.",
        "AMP only makes sense if you have a narrow content case, format support already in the stack, and clear analytics. We don’t start new projects for an AMP checkbox.",
      ],
      lists: [
        {
          intro: "Where to put the effort:",
          items: [
            "mobile layout and readability",
            "LCP/INP/CLS speed",
            "clear CTAs on the full site",
            "one template without a parallel light universe",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Mobile search",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
  ],
  closing: [
    "AMP sped up mobile content in the era of slow networks and SERP privileges. Today the bet is a fast site of your own, not a required second format. If AMP already exists — tidy canonical and metrics; if not — start with responsive.",
  ],
  related: [
    "turbo-stranitsy",
    "adaptivnyy-sayt",
    "mobilnyy-poisk",
    "pered-zapuskom-sayta",
    "verstka-saytov",
    "ishodnyy-kod",
  ],
};

/** ES overlay for amp — same structure as RU JSON / EN. */
export const ampEs: BlogPost = {
  slug: "amp",
  title: "Páginas Google AMP: qué eran y si las necesitas ahora",
  date: "2020-03-13",
  category: "SEO",
  cover: "/images/blog/amp/cover-es.webp",
  excerpt:
    "Qué es AMP: HTML reducido para entrega rápida en la SERP móvil, pros y contras de la caché de Google, por qué el formato dejó de ser obligatorio y dónde poner el esfuerzo — tu propio sitio responsive.",
  lead: [
    "AMP (Accelerated Mobile Pages) es un formato abierto de páginas ligeras que Google impulsó desde 2015: HTML/JS limitado, paint rápido y a menudo entrega desde la caché de búsqueda.",
    "A mediados de los 2020 AMP ya no es una capa obligatoria de SEO móvil: el carrusel y los privilegios en la SERP se fueron, y la velocidad la deciden los Core Web Vitals en tu propio sitio. Abajo: cómo funcionaba el formato, qué ayudaba y qué hacía daño, y cuándo aún tiene sentido. Las guías paso a paso de «instala un plugin y sube posiciones» están obsoletas.",
  ],
  faq: [
    {
      q: "¿AMP sigue siendo obligatorio para SEO móvil?",
      a: "No. Primero un sitio responsive rápido. AMP es un caso estrecho/histórico — no un sustituto de la UX móvil real.",
    },
    {
      q: "¿En qué se diferenciaba AMP de una página normal?",
      a: "Un set estricto de tags y componentes, poco JS arbitrario, layout reducido. Google podía servir una copia desde su caché — más rápido en conexión débil, pero parte de la sesión no estaba en tu host.",
    },
    {
      q: "¿AMP es lo mismo que Yandex Turbo?",
      a: "La idea es similar (una copia móvil ligera), los ecosistemas difieren. Turbo en la búsqueda también se fue apagando — la apuesta es tu propio sitio.",
    },
    {
      q: "¿Debo borrar ya las URLs /amp antiguas?",
      a: "No siempre. Comprueba que canonical y analytics apunten a la versión principal, que no haya confusión de índice ni redirects muertos. Lo que importa es la calidad móvil de la principal.",
    },
    {
      q: "¿AMP da un boost de posiciones?",
      a: "No hay «puntos AMP» directos como factor obligatorio. Importan velocidad y comportamiento — los cubres en URLs normales.",
    },
  ],
  sections: [
    {
      title: "Cómo funcionaba AMP",
      level: 2,
      paras: [
        "La página se construía bajo reglas AMP HTML: componentes permitidos en lugar de scripts arbitrarios, validación del markup. El objetivo — carga rápida predecible en el teléfono.",
        "Los usuarios podían abrir AMP en tu dominio (a menudo un sufijo `/amp` o `?amp`) o ver una copia en caché en la infraestructura de Google. En el segundo caso algunas métricas y la sensación del sitio diferían de una visita completa a tu host.",
      ],
      lists: [
        {
          intro: "Qué se solía recortar:",
          items: [
            "JavaScript arbitrario pesado",
            "widgets complejos y algunos formularios",
            "gráficos y efectos pesados",
            "algunos bloques de ads y sociales sin componentes especiales",
          ],
        },
      ],
      links: [
        {
          label: "Páginas Yandex Turbo",
          href: "/es/blog/turbo-stranitsy/",
        },
      ],
    },
    {
      title: "Pros y contras de la era AMP",
      level: 2,
      paras: [
        "La ventaja era velocidad en redes móviles débiles y una plantilla ligera compartida para medios. Los inconvenientes: UX más pobre, analytics y conversiones más difíciles, riesgo de confusión canónica, dependencia de reglas de plataforma y caché.",
        "No reutilizamos benchmarks viejos de PageSpeed «era 61 — pasó a 87» de casos 2019–2020: cambiaron las herramientas y los pesos de las métricas. Mira informes actuales en tus URLs.",
      ],
      lists: [
        {
          intro: "Problemas típicos de rollout:",
          items: [
            "baja conversión en la página reducida",
            "goals y eventos más difíciles en analytics",
            "duplicados/problemas de canonical por un setup malo",
            "mantener dos plantillas en lugar de un buen móvil",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Si el «AMP rápido» convierte peor que el sitio completo, la victoria de velocidad se la come la pérdida de leads. Cuenta métricas de negocio, no solo el tiempo de carga en una URL demo.",
        },
      ],
    },
    {
      title: "¿Necesitas AMP ahora?",
      level: 2,
      paras: [
        "Para la mayoría de sitios comerciales en 2026 la respuesta sensata es no como capa obligatoria. Invierte en diseño responsive, compresión, fuentes, imágenes, caché/CDN y Core Web Vitals en las URLs canónicas.",
        "AMP solo tiene sentido si tienes un caso de contenido estrecho, soporte del formato ya en el stack y analytics claros. No arrancamos proyectos nuevos por un checkbox AMP.",
      ],
      lists: [
        {
          intro: "Dónde poner el esfuerzo:",
          items: [
            "layout móvil y legibilidad",
            "velocidad LCP/INP/CLS",
            "CTAs claros en el sitio completo",
            "una plantilla sin un universo ligero paralelo",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Búsqueda móvil",
          href: "/blog/mobilnyy-poisk/",
        },
      ],
    },
  ],
  closing: [
    "AMP aceleró el contenido móvil en la era de redes lentas y privilegios en la SERP. Hoy la apuesta es un sitio rápido propio, no un segundo formato obligatorio. Si AMP ya existe — ordena canonical y métricas; si no — empieza por responsive.",
  ],
  related: [
    "turbo-stranitsy",
    "adaptivnyy-sayt",
    "pered-zapuskom-sayta",
    "verstka-saytov",
    "ishodnyy-kod",
    "mobilnyy-poisk",
  ],
};

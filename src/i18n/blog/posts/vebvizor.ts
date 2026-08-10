import type { BlogPost } from "../../../data/blog";

/** EN overlay for vebvizor — same structure as RU JSON. */
export const vebvizorEn: BlogPost = {
  slug: "vebvizor",
  title: "Yandex Webvisor: how to enable and watch session recordings",
  date: "2019-06-18",
  category: "Digital marketing",
  cover: "/images/blog/vebvizor/cover-en.webp",
  excerpt:
    "What Webvisor is in Yandex Metrika: how to turn on session recording, what to check on the site, how to filter visits, and why watch selectively — without outdated 1.0/2.0 versions and rigid 2019 limits.",
  lead: [
    "Webvisor records visitor behavior in Yandex Metrika: where people clicked, how they scrolled, where they stuck in a form or cart. It’s a tool for UX hypotheses — not daily “spying on everyone.”",
    "Below: what the tool is for, how to enable it on the counter, tech conditions, and how to use a sample. UI and storage/volume limits change — check Metrika Help. Click and scroll maps are related; here the focus is session recordings.",
  ],
  faq: [
    {
      q: "Are Webvisor and regular visits the same?",
      a: "No. The counter can count visits while session recording is off or broken by CSP/blockers. Diagnosing “Metrika is silent” is in a separate article.",
    },
    {
      q: "Do you need to watch every recording?",
      a: "No. First numbers and segments, then a sample: ad bounces, abandoned cart, long visits with no goal.",
    },
    {
      q: "Is it lawful for personal data?",
      a: "Behavior recording is sensitive. You need a policy, cookie/analytics consent where required, and common sense: don’t collect extra fields on forms that get recorded.",
    },
    {
      q: "Does Webvisor replace A/B tests?",
      a: "No. It suggests hypotheses. Validation is conversion measurement and tests.",
    },
    {
      q: "Do old guides about Webvisor 1.0 and 2.0 still apply?",
      a: "Product history. Today enable current Webvisor in counter settings per Yandex Help — don’t copy the “1.0 vs 2.0” fork.",
    },
  ],
  sections: [
    {
      title: "Why Webvisor",
      level: 2,
      paras: [
        "Numbers show “where it’s bad”; a recording shows “how exactly”. You see missed buttons, fear of a long form, a menu dead end, mobile behavior after a release.",
        "Especially useful on key URLs: ad landings, product page, cart, checkout, lead forms. For media and blogs — on pages with high bounce or odd depth.",
      ],
      lists: [
        {
          intro: "What you usually see on a recording:",
          items: [
            "clicks and cursor movement",
            "scroll and navigation",
            "form filling",
            "device and source (on the visit card)",
            "drop-offs before the goal",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "How to enable in Metrika",
      level: 2,
      paras: [
        "In counter settings, turn on Webvisor (often near click/scroll maps and form analytics — the option set depends on the account). Save and make sure the site has the current code for this counter.",
        "If the counter was installed long ago and Webvisor was enabled later — update the code/container (GTM), or recordings may not appear. First confirm regular visits are flowing.",
      ],
      lists: [
        {
          intro: "Launch order:",
          items: [
            "counter created and on all needed templates",
            "Webvisor enabled in settings",
            "no “native + GTM” duplicate",
            "test visit from your device",
            "after a while — recordings appear in Webvisor",
          ],
        },
      ],
      links: [
        {
          label: "If Metrika isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Looking for a “site break” when the option is simply off or the script is cut by a blocker/CSP.",
        },
      ],
    },
    {
      title: "Technical conditions on the site",
      level: 2,
      paras: [
        "Recording is sensitive to encoding, heavy markup, strict CSP, and frame embedding bans. Historically Yandex required UTF-8 and HTML size limits; current limits and exception domains are in Metrika Help.",
        "If the site forbids framing, the player may need Webvisor domains allowed per Yandex’s instructions — compatibility setup, not “bypassing protection for someone else’s site”.",
      ],
      lists: [
        {
          intro: "Check before panicking:",
          items: [
            "HTTPS without mixed content",
            "CSP doesn’t cut Metrika scripts",
            "SPA: events and URLs update correctly",
            "cookie consent doesn’t block the counter forever without a path",
            "don’t treat admin sessions as customer behavior",
          ],
        },
      ],
    },
    {
      title: "How to use: filters and sampling",
      level: 2,
      paras: [
        "In the visit list, filter by URL, goal, source, device, duration. Don’t watch random clips — watch segments with a problem: high bounce, low add_to_cart, validation errors.",
        "Retention and daily recording limits depend on plan/settings and have changed over time — don’t treat “15 days and 150 thousand” from old articles as a constant.",
      ],
      lists: [
        {
          intro: "Where to look first:",
          items: [
            "ad landings",
            "forms and registration",
            "product page and catalog search",
            "cart and payment",
            "sessions after a redesign",
          ],
        },
      ],
    },
    {
      title: "From hypothesis to fix",
      level: 2,
      paras: [
        "A recording alone doesn’t improve conversion. Capture the observation (“button below the fold on mobile”, “phone mask breaks input”), roll out a fix, measure the goal/funnel.",
        "Don’t use Webvisor to fake behavioral signals, and don’t conclude from one friend’s session.",
      ],
      lists: [
        {
          intro: "Working cycle:",
          items: [
            "metrics pointed to a problem",
            "3–10 relevant recordings",
            "hypothesis and backlog task",
            "release",
            "remeasure",
          ],
        },
      ],
      links: [
        {
          label: "Behavioral factors",
          href: "/en/blog/povedencheskie-faktory/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Webvisor is a UX magnifier alongside Metrika numbers. Enable it on the counter, check tech, watch a sample of painful URLs.",
        "Targeted review + site fixes beat hours of random session watching.",
      ],
    },
  ],
  closing: [
    "Enable Webvisor on the current counter, confirm recordings appear, and review segments with drop-offs — that’s how the tool helps improve the site instead of becoming endless video.",
  ],
  related: [
    "metrika-karty",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "povedencheskie-faktory",
    "metrika-tseli",
  ],
};

/** ES overlay for vebvizor — same structure as RU JSON / EN. */
export const vebvizorEs: BlogPost = {
  slug: "vebvizor",
  title: "Yandex Webvisor: cómo activarlo y ver grabaciones de sesión",
  date: "2019-06-18",
  category: "Digital marketing",
  cover: "/images/blog/vebvizor/cover-es.webp",
  excerpt:
    "Qué es Webvisor en Yandex Metrika: cómo activar la grabación de sesión, qué revisar en el sitio, cómo filtrar visitas y por qué mirar con criterio — sin versiones 1.0/2.0 obsoletas ni límites rígidos de 2019.",
  lead: [
    "Webvisor registra el comportamiento del visitante en Yandex Metrika: dónde hicieron clic, cómo hicieron scroll, dónde se atascaron en un formulario o carrito. Es una herramienta para hipótesis UX — no «espiar a todos» cada día.",
    "Abajo: para qué sirve, cómo activarlo en el contador, condiciones técnicas y cómo usar una muestra. La UI y los límites de almacenamiento/volumen cambian — revisa la Ayuda de Metrika. Los mapas de clics y scroll están relacionados; aquí el foco son las grabaciones de sesión.",
  ],
  faq: [
    {
      q: "¿Webvisor y las visitas normales son lo mismo?",
      a: "No. El contador puede contar visitas mientras la grabación de sesión está apagada o rota por CSP/blockers. Diagnosticar «Metrika está en silencio» está en un artículo aparte.",
    },
    {
      q: "¿Hay que mirar cada grabación?",
      a: "No. Primero números y segmentos, luego una muestra: bounces de ads, carrito abandonado, visitas largas sin goal.",
    },
    {
      q: "¿Es lícito respecto a datos personales?",
      a: "La grabación de comportamiento es sensible. Necesitas política, consentimiento de cookies/analítica donde aplique y sentido común: no recojas campos de más en formularios que se graban.",
    },
    {
      q: "¿Webvisor sustituye los tests A/B?",
      a: "No. Sugiere hipótesis. La validación es medición de conversión y tests.",
    },
    {
      q: "¿Siguen valiendo las guías viejas sobre Webvisor 1.0 y 2.0?",
      a: "Historia del producto. Hoy activa el Webvisor actual en ajustes del contador según la Ayuda de Yandex — no copies el fork «1.0 vs 2.0».",
    },
  ],
  sections: [
    {
      title: "Por qué Webvisor",
      level: 2,
      paras: [
        "Los números muestran «dónde está mal»; una grabación muestra «cómo exactamente». Ves botones fallados, miedo a un formulario largo, un callejón sin salida del menú, comportamiento móvil tras un release.",
        "Especialmente útil en URLs clave: landings de ads, ficha de producto, carrito, checkout, formularios de lead. En media y blogs — en páginas con bounce alto o profundidad rara.",
      ],
      lists: [
        {
          intro: "Qué sueles ver en una grabación:",
          items: [
            "clics y movimiento del cursor",
            "scroll y navegación",
            "relleno de formularios",
            "dispositivo y fuente (en la ficha de visita)",
            "abandonos antes del goal",
          ],
        },
      ],
      links: [
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Cómo activarlo en Metrika",
      level: 2,
      paras: [
        "En ajustes del contador, activa Webvisor (a menudo cerca de mapas de clics/scroll y analítica de formularios — el set de opciones depende de la cuenta). Guarda y asegúrate de que el sitio tenga el código actual de este contador.",
        "Si el contador se instaló hace tiempo y Webvisor se activó después — actualiza el código/contenedor (GTM), o las grabaciones pueden no aparecer. Primero confirma que fluyen visitas normales.",
      ],
      lists: [
        {
          intro: "Orden de lanzamiento:",
          items: [
            "contador creado y en todas las plantillas necesarias",
            "Webvisor activado en ajustes",
            "sin duplicado «nativo + GTM»",
            "visita de prueba desde tu dispositivo",
            "tras un rato — aparecen grabaciones en Webvisor",
          ],
        },
      ],
      links: [
        {
          label: "Si Metrika no funciona",
          href: "/es/blog/metrika-ne-rabotaet/",
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Buscar un «fallo del sitio» cuando la opción simplemente está apagada o el script lo corta un blocker/CSP.",
        },
      ],
    },
    {
      title: "Condiciones técnicas en el sitio",
      level: 2,
      paras: [
        "La grabación es sensible a encoding, markup pesado, CSP estricto y prohibiciones de embeber en frames. Históricamente Yandex pedía UTF-8 y límites de tamaño HTML; los límites actuales y dominios de excepción están en la Ayuda de Metrika.",
        "Si el sitio prohíbe framing, el player puede necesitar dominios de Webvisor permitidos según las instrucciones de Yandex — setup de compatibilidad, no «saltar protección de un sitio ajeno».",
      ],
      lists: [
        {
          intro: "Revisa antes de entrar en pánico:",
          items: [
            "HTTPS sin mixed content",
            "CSP no corta scripts de Metrika",
            "SPA: eventos y URLs se actualizan bien",
            "el consentimiento de cookies no bloquea el contador para siempre sin salida",
            "no trates sesiones de admin como comportamiento de cliente",
          ],
        },
      ],
    },
    {
      title: "Cómo usarlo: filtros y muestreo",
      level: 2,
      paras: [
        "En la lista de visitas, filtra por URL, goal, fuente, dispositivo, duración. No mires clips al azar — mira segmentos con un problema: bounce alto, poco add_to_cart, errores de validación.",
        "La retención y los límites diarios de grabación dependen del plan/ajustes y han cambiado con el tiempo — no trates «15 días y 150 mil» de artículos viejos como constante.",
      ],
      lists: [
        {
          intro: "Dónde mirar primero:",
          items: [
            "landings de ads",
            "formularios y registro",
            "ficha de producto y búsqueda del catálogo",
            "carrito y pago",
            "sesiones tras un rediseño",
          ],
        },
      ],
    },
    {
      title: "De la hipótesis al arreglo",
      level: 2,
      paras: [
        "Una grabación sola no mejora la conversión. Captura la observación («botón bajo el fold en móvil», «la máscara de teléfono rompe el input»), despliega un arreglo, mide el goal/funnel.",
        "No uses Webvisor para falsificar señales de comportamiento, y no concluyas desde la sesión de un amigo.",
      ],
      lists: [
        {
          intro: "Ciclo de trabajo:",
          items: [
            "las métricas señalaron un problema",
            "3–10 grabaciones relevantes",
            "hipótesis y tarea en el backlog",
            "release",
            "volver a medir",
          ],
        },
      ],
      links: [
        {
          label: "Factores de comportamiento",
          href: "/es/blog/povedencheskie-faktory/",
        },
        {
          label: "Navegación del sitio",
          href: "/es/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Webvisor es una lupa UX junto a los números de Metrika. Actívalo en el contador, revisa la técnica, mira una muestra de URLs dolorosas.",
        "Revisión dirigida + arreglos en el sitio ganan a horas de mirar sesiones al azar.",
      ],
    },
  ],
  closing: [
    "Activa Webvisor en el contador actual, confirma que aparecen grabaciones y revisa segmentos con abandonos — así la herramienta ayuda a mejorar el sitio en vez de volverse vídeo sin fin.",
  ],
  related: [
    "metrika-karty",
    "metrika-ne-rabotaet",
    "instrumenty-veb-analitiki",
    "optimizatsiya-konversii",
    "povedencheskie-faktory",
    "metrika-tseli",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmer-stranitsy — same structure as RU JSON. */
export const razmerStranitsyEn: BlogPost = {
  slug: "razmer-stranitsy",
  title: "Webpage size: how to check weight and speed up loading",
  date: "2020-10-12",
  category: "SEO",
  cover: "/images/blog/razmer-stranitsy/cover-en.webp",
  excerpt:
    "What page “weight” means, how to see transfer size in DevTools and tools, why heavy pages hurt UX and SEO, and what to compress first.",
  lead: [
    "Page weight is how many bytes the browser downloads to show the document: HTML, CSS, JS, images, fonts, third-party widgets. The larger the volume and the worse the compression, the longer people wait on a weak connection.",
    "Below: why to measure weight, how to see it in a minute, and what usually gives the fastest win. This is speed hygiene — not “page one thanks to fewer KB.”",
  ],
  faq: [
    {
      q: "Is page weight the HTML file size?",
      a: "No. Look at total transfer size of all document resources (and cache vs network). HTML is often tiny next to images and JS.",
    },
    {
      q: "What’s a normal page weight?",
      a: "Depends on type. For a landing on 3G, aim for reasonable hundreds of KB–a couple of MB — not tens of megabytes without a real need. LCP/INP and field data matter more than one number.",
    },
    {
      q: "Where to look in the browser?",
      a: "DevTools → Network: Size column, total at the bottom. Disable cache for a cold load. Performance/Lighthouse — extra diagnostics.",
    },
    {
      q: "Does weight affect SEO directly?",
      a: "Through speed and behavior: a heavy page hurts Core Web Vitals and bounce. Search doesn’t rank by KB, but slow UX hits visibility indirectly.",
    },
    {
      q: "Is compressing images enough?",
      a: "Often yes as a first step, but heavy JS/CSS and extra widgets matter too. Cut by Network contribution.",
    },
    {
      q: "Are Gzip/Brotli required?",
      a: "Yes for text resources in production. Without compression HTML/CSS/JS balloon several times.",
    },
    {
      q: "Does a CDN reduce weight?",
      a: "Not file weight — delivery latency. Weight is cut by asset optimization; CDN is proximity and cache.",
    },
    {
      q: "Are mobile and desktop the same?",
      a: "Often not: different images, menu, scripts. Measure both profiles and real devices/throttling.",
    },
  ],
  sections: [
    {
      title: "Why know page size",
      level: 2,
      paras: [
        "Large volume on slow LTE/3G = long LCP, blank screen, leave before content. On hosting and CDN extra traffic costs money. For SEO, field speed metrics and whether people finish the page matter.",
        "Weight is a simple “where’s the fat” signal: compare a competitor URL to yours, spot a spike after a widget, control a release.",
      ],
      lists: [
        {
          intro: "When measuring is mandatory:",
          items: [
            "after a redesign / new template",
            "before ad spend on a landing",
            "if mobile bounce grows",
            "when someone says “the site is slow”",
          ],
        },
      ],
    },
    {
      title: "How to see weight in DevTools",
      level: 2,
      paras: [
        "Open the page → F12 / DevTools → Network tab. Enable Disable cache, refresh. At the bottom you’ll see request count and transferred bytes. Sorting by Size shows the heaviest eaters.",
        "Look separately at transferred (over the network) and resource size. Cache distorts the picture — for an audit a cold load matters more.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incognito + disable cache",
            "mobile user-agent / throttling",
            "lock top-10 resources by Size",
            "repeat on a key landing and product page",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Looking only at HTML “Save as.” Real weight is the whole waterfall load.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Online tools and what they show",
      level: 2,
      paras: [
        "PageSpeed Insights, WebPageTest, GTmetrix and similar give weight estimates, request chains, and recommendations. Tool numbers diverge due to location and cache — compare relative before/after on one tool.",
        "Don’t chase a “100 score” for a screenshot. The goal is cut extra megabytes and improve perceived speed.",
      ],
      lists: [
        {
          intro: "In the report look for:",
          items: [
            "total page weight",
            "images without compression/modern formats",
            "unused CSS/JS",
            "blocking scripts in head",
            "extra redirects",
          ],
        },
      ],
    },
    {
      title: "What usually bloats a page",
      level: 2,
      paras: [
        "Unoptimized photos and backgrounds, autoplay video, too many fonts, heavy sliders, “just in case” analytics and chats, duplicate libraries, a full-home map without lazy load.",
        "On a CMS — plugins, each with its own CSS/JS. A plugin audit often saves more than tweaking JPEG quality by 5%.",
      ],
      lists: [
        {
          intro: "Typical top offenders:",
          items: [
            "images > 200–300 KB without a real need",
            "hero as PNG instead of WebP/AVIF",
            "all of jQuery UI for one button",
            "social widgets and live chat",
            "unminified bundles",
          ],
        },
      ],
    },
    {
      title: "How to speed up: work order",
      level: 2,
      paras: [
        "First cut the heaviest Network contribution. Images: compression, modern formats, srcset, lazy-load below the fold. Text: Brotli/Gzip. JS/CSS: remove unused, defer/async, code-split.",
        "Browser cache and CDN — after files are light. Otherwise you just deliver the same fat faster.",
      ],
      lists: [
        {
          intro: "Sprint checklist:",
          items: [
            "compress hero and product cards",
            "enable server compression",
            "defer non-critical JS",
            "remove 1–2 extra widgets",
            "remeasure DevTools before/after",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Production control",
      level: 2,
      paras: [
        "Set a weight budget for templates (home, category, article). In CI or the release checklist — a Network snapshot. Watch field CWV in webmaster panels.",
        "After major releases compare not only Lighthouse scores but real transfer size of key URLs.",
      ],
      lists: [
        {
          intro: "Playbook:",
          items: [
            "reference URLs and their limits",
            "an owner for assets",
            "ban uploading a 5MB photo into content without compression",
            "quarterly re-audit",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One heavy chat widget often weighs more than all your CSS. Count contribution, not vibes.",
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "optimizatsiya-stranitsy",
    "ishodnyy-kod",
    "protokol-http",
    "kod-statusa-http",
  ],
};

/** ES overlay for razmer-stranitsy — same structure as RU JSON / EN. */
export const razmerStranitsyEs: BlogPost = {
  slug: "razmer-stranitsy",
  title: "Tamaño de página web: cómo comprobar el peso y acelerar la carga",
  date: "2020-10-12",
  category: "SEO",
  cover: "/images/blog/razmer-stranitsy/cover.webp",
  excerpt:
    "Qué significa el «peso» de una página, cómo ver el transfer size en DevTools y herramientas, por qué las páginas pesadas duelen a la UX y al SEO, y qué comprimir primero.",
  lead: [
    "El peso de página es cuántos bytes descarga el navegador para mostrar el documento: HTML, CSS, JS, imágenes, fuentes, widgets de terceros. Cuanto mayor el volumen y peor la compresión, más espera la gente en una conexión floja.",
    "Abajo: por qué medir el peso, cómo verlo en un minuto y qué suele dar la victoria más rápida. Es higiene de velocidad — no «primera página gracias a menos KB».",
  ],
  faq: [
    {
      q: "¿El peso de página es el tamaño del archivo HTML?",
      a: "No. Mira el transfer size total de todos los recursos del documento (y caché vs red). El HTML suele ser minúsculo junto a imágenes y JS.",
    },
    {
      q: "¿Qué peso de página es normal?",
      a: "Depende del tipo. En un landing sobre 3G, apunta a cientos de KB–un par de MB razonables — no decenas de megabytes sin necesidad real. LCP/INP y datos de field pesan más que un solo número.",
    },
    {
      q: "¿Dónde mirar en el navegador?",
      a: "DevTools → Network: columna Size, total abajo. Desactiva caché para una carga en frío. Performance/Lighthouse — diagnóstico extra.",
    },
    {
      q: "¿El peso afecta al SEO de forma directa?",
      a: "A través de velocidad y comportamiento: una página pesada duele a Core Web Vitals y al bounce. La búsqueda no rankea por KB, pero una UX lenta pega a la visibilidad de forma indirecta.",
    },
    {
      q: "¿Basta con comprimir imágenes?",
      a: "A menudo sí como primer paso, pero también importan JS/CSS pesados y widgets de más. Corta por contribución en Network.",
    },
    {
      q: "¿Gzip/Brotli son obligatorios?",
      a: "Sí para recursos de texto en producción. Sin compresión HTML/CSS/JS se hinchan varias veces.",
    },
    {
      q: "¿Un CDN reduce el peso?",
      a: "No el peso del archivo — la latencia de entrega. El peso se corta optimizando assets; el CDN es proximidad y caché.",
    },
    {
      q: "¿Móvil y desktop son iguales?",
      a: "A menudo no: imágenes distintas, menú, scripts. Mide ambos perfiles y dispositivos reales/throttling.",
    },
  ],
  sections: [
    {
      title: "Por qué saber el tamaño de página",
      level: 2,
      paras: [
        "Mucho volumen en LTE/3G lento = LCP largo, pantalla en blanco, se van antes del contenido. En hosting y CDN el tráfico extra cuesta dinero. Para SEO importan las métricas de velocidad de field y si la gente termina la página.",
        "El peso es una señal simple de «dónde está la grasa»: compara la URL de un competidor con la tuya, detecta un pico tras un widget, controla un release.",
      ],
      lists: [
        {
          intro: "Cuando medir es obligatorio:",
          items: [
            "tras un rediseño / plantilla nueva",
            "antes de gastar ads en un landing",
            "si crece el bounce móvil",
            "cuando alguien dice «el sitio va lento»",
          ],
        },
      ],
    },
    {
      title: "Cómo ver el peso en DevTools",
      level: 2,
      paras: [
        "Abre la página → F12 / DevTools → pestaña Network. Activa Disable cache, recarga. Abajo verás conteo de requests y bytes transferidos. Ordenar por Size muestra a los que más comen.",
        "Mira aparte transferred (por la red) y resource size. La caché tuerce el cuadro — para una auditoría importa más una carga en frío.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incógnito + disable cache",
            "user-agent móvil / throttling",
            "anota los 10 recursos más pesados por Size",
            "repite en un landing clave y una ficha de producto",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Mirar solo el HTML con «Guardar como». El peso real es toda la carga del waterfall.",
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Herramientas online y qué muestran",
      level: 2,
      paras: [
        "PageSpeed Insights, WebPageTest, GTmetrix y similares dan estimaciones de peso, cadenas de requests y recomendaciones. Los números divergen por ubicación y caché — compara relativo before/after en una sola herramienta.",
        "No persigas un «score 100» para un screenshot. El objetivo es cortar megabytes de más y mejorar la velocidad percibida.",
      ],
      lists: [
        {
          intro: "En el informe busca:",
          items: [
            "peso total de la página",
            "imágenes sin compresión/formatos modernos",
            "CSS/JS sin usar",
            "scripts bloqueantes en head",
            "redirects de más",
          ],
        },
      ],
    },
    {
      title: "Qué suele hinchar una página",
      level: 2,
      paras: [
        "Fotos y fondos sin optimizar, vídeo autoplay, demasiadas fuentes, sliders pesados, analytics y chats «por si acaso», librerías duplicadas, un mapa de toda la home sin lazy load.",
        "En un CMS — plugins, cada uno con su CSS/JS. Una auditoría de plugins a menudo ahorra más que retocar la calidad JPEG un 5%.",
      ],
      lists: [
        {
          intro: "Culpables habituales:",
          items: [
            "imágenes > 200–300 KB sin necesidad real",
            "hero en PNG en lugar de WebP/AVIF",
            "todo jQuery UI por un botón",
            "widgets sociales y live chat",
            "bundles sin minificar",
          ],
        },
      ],
    },
    {
      title: "Cómo acelerar: orden de trabajo",
      level: 2,
      paras: [
        "Primero corta la contribución más pesada en Network. Imágenes: compresión, formatos modernos, srcset, lazy-load below the fold. Texto: Brotli/Gzip. JS/CSS: quita lo no usado, defer/async, code-split.",
        "Caché del navegador y CDN — después de que los archivos estén ligeros. Si no, solo entregas la misma grasa más rápido.",
      ],
      lists: [
        {
          intro: "Checklist de sprint:",
          items: [
            "comprimir hero y fichas de producto",
            "activar compresión del servidor",
            "diferir JS no crítico",
            "quitar 1–2 widgets de más",
            "volver a medir DevTools before/after",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Control en producción",
      level: 2,
      paras: [
        "Fija un presupuesto de peso por plantilla (home, categoría, artículo). En CI o el checklist de release — un snapshot de Network. Mira CWV de field en paneles de webmaster.",
        "Tras releases grandes compara no solo scores de Lighthouse sino el transfer size real de URLs clave.",
      ],
      lists: [
        {
          intro: "Playbook:",
          items: [
            "URLs de referencia y sus límites",
            "un dueño de los assets",
            "prohibir subir una foto de 5MB al contenido sin compresión",
            "re-auditoría trimestral",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Un widget de chat pesado a menudo pesa más que todo tu CSS. Cuenta contribución, no intuición.",
        },
      ],
      links: [
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "optimizatsiya-stranitsy",
    "ishodnyy-kod",
    "protokol-http",
    "kod-statusa-http",
  ],
};

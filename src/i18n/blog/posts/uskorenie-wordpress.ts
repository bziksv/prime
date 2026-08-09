import type { BlogPost } from "../../../data/blog";

/** EN overlay for uskorenie-wordpress — same structure as RU JSON. */
export const uskorenieWordpressEn: BlogPost = {
  slug: "uskorenie-wordpress",
  title: "How to speed up a WordPress site: hosting, theme, plugins",
  date: "2019-09-27",
  category: "Digital marketing",
  cover: "/images/blog/uskorenie-wordpress/cover-en.webp",
  excerpt:
    "What really slows WordPress: TTFB and hosting, a heavy theme, duplicate plugins, images, and JS/CSS. A practical work order — without worshipping one PageSpeed score or copying 2019 foreign case studies.",
  lead: [
    "A slow WordPress is usually the sum of hosting, a do-everything theme, a dozen plugins, and unoptimized images. Changing the plan without cleaning the site helps little; cleaning without decent TTFB helps little too.",
    "Below: diagnosis and speed-up order. We don’t copy other people’s Kinsta/Flywheel cases and “+N PageSpeed points” as a recipe. Measure your URL in current tools (PageSpeed Insights, Web Vitals) and fix the real bottlenecks.",
  ],
  faq: [
    {
      q: "Where should I start if everything is slow?",
      a: "Measure TTFB and LCP on mobile. If TTFB is high — look at hosting and server cache. If TTFB is fine but LCP is bad — theme, images, JS.",
    },
    {
      q: "Is a cache plugin enough?",
      a: "Cache helps, but won’t save a heavy theme and 40 plugins. Remove the excess first, then cache and CDN.",
    },
    {
      q: "Does Elementor speed up the site?",
      a: "Builders are convenient, but they aren’t a speed-up by themselves. A light theme plus fewer widgets is usually faster than a heavy builder with piles of add-ons.",
    },
    {
      q: "Do I need specialized WordPress hosting?",
      a: "Often yes: HTTP/2 or HTTP/3, SSL, server cache, decent PHP. Cheap shared hosting without cache kills TTFB.",
    },
    {
      q: "Does speed mean better rankings?",
      a: "Speed affects UX and SEO indirectly. Rankings for the core are separate work: prep about a month; page-one share of the core is typically planned for two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Diagnosis: where it actually stalls",
      level: 2,
      paras: [
        "Pull a PageSpeed / Lighthouse report for the mobile version of key URLs. Watch TTFB, LCP, INP/CLS, and the “load less” list.",
        "Separately check: how many plugins, which theme, hero image weight, whether the server sends compression and cache. Without measurement, fixes are blind.",
      ],
      lists: [
        {
          intro: "Typical WordPress bottlenecks:",
          items: [
            "slow server response (TTFB)",
            "a heavy theme with extra scripts",
            "duplicates and dead plugins",
            "large JPG/PNG without WebP",
            "blocking JS/CSS and extra fonts",
          ],
        },
      ],
      links: [
        {
          label: "Web page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Hosting and the server layer",
      level: 2,
      paras: [
        "If TTFB is 1–2+ seconds, start with hosting: current PHP, server cache, SSD, sensible geolocation. WordPress-oriented plans often include cache and CDN out of the box — check current terms, not a 2019 price list.",
        "CDN cuts static latency for distant users. SSL and modern HTTP are baseline, not optional. Changing hosts without theme optimization gives a partial effect — that’s normal.",
      ],
      lists: [
        {
          intro: "What to ask the host:",
          items: [
            "is there page cache / object cache",
            "PHP version and limits",
            "CDN and HTTP/2–3",
            "backups and staging for tests",
          ],
        },
      ],
    },
    {
      title: "Theme, plugins, and media",
      level: 2,
      paras: [
        "A premium theme for every case pulls sliders, fonts, and builders you don’t use. Take a lighter template or hard-disable modules.",
        "Plugins: remove unused ones; don’t keep two caches, two SEO plugins, or two sliders. Update what’s left. Images — compression, sensible sizes, lazy-load, WebP/AVIF where possible.",
        "JS/CSS: defer non-critical work, don’t load Google Fonts in a pack “just in case,” prefer system or local fonts when possible. “Combine everything” plugins — test on staging: they sometimes break the site.",
      ],
      lists: [
        {
          intro: "Work order:",
          items: [
            "backup and staging",
            "measure before changes",
            "clean plugins and theme",
            "optimize images",
            "cache + CDN",
            "re-measure the same URLs",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t chase 100/100 at any cost. Stable mobile LCP and unbroken cart/forms after “optimization” matter more.",
        },
      ],
      links: [
        {
          label: "WordPress theme",
          href: "/en/blog/tema-wordpress/",
        },
        {
          label: "WordPress SEO plugins",
          href: "/en/blog/wordpress-seo-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
  ],
  closing: [
    "Speeding up WordPress is measurement, hosting with decent TTFB, a light theme, fewer plugins, and compressed media. Change things on staging and check business scenarios; PageSpeed scores are an indicator — not the goal itself.",
  ],
  related: [
    "tema-wordpress",
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "razmer-stranitsy",
    "amp",
    "pered-zapuskom-sayta",
  ],
};

/** ES overlay for uskorenie-wordpress — same structure as RU JSON / EN. */
export const uskorenieWordpressEs: BlogPost = {
  slug: "uskorenie-wordpress",
  title: "Cómo acelerar un sitio WordPress: hosting, tema, plugins",
  date: "2019-09-27",
  category: "Digital marketing",
  cover: "/images/blog/uskorenie-wordpress/cover.webp",
  excerpt:
    "Qué ralentiza de verdad WordPress: TTFB y hosting, un tema pesado, plugins duplicados, imágenes y JS/CSS. Un orden de trabajo práctico — sin adorar una nota de PageSpeed ni copiar casos extranjeros de 2019.",
  lead: [
    "Un WordPress lento suele ser la suma de hosting, un tema que lo hace todo, una docena de plugins e imágenes sin optimizar. Cambiar de plan sin limpiar el sitio ayuda poco; limpiar sin un TTFB decente también.",
    "Abajo: diagnóstico y orden de aceleración. No copiamos casos ajenos de Kinsta/Flywheel ni «+N puntos PageSpeed» como receta. Mide tu URL en herramientas actuales (PageSpeed Insights, Web Vitals) y arregla los cuellos de botella reales.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si todo va lento?",
      a: "Mide TTFB y LCP en móvil. Si el TTFB es alto — mira hosting y caché de servidor. Si el TTFB está bien pero el LCP es malo — tema, imágenes, JS.",
    },
    {
      q: "¿Basta con un plugin de caché?",
      a: "La caché ayuda, pero no salva un tema pesado y 40 plugins. Primero quita el exceso, luego caché y CDN.",
    },
    {
      q: "¿Elementor acelera el sitio?",
      a: "Los builders son cómodos, pero no son una aceleración por sí solos. Un tema ligero con menos widgets suele ser más rápido que un builder pesado con montones de add-ons.",
    },
    {
      q: "¿Hace falta hosting especializado en WordPress?",
      a: "A menudo sí: HTTP/2 o HTTP/3, SSL, caché de servidor, PHP decente. Shared barato sin caché mata el TTFB.",
    },
    {
      q: "¿Velocidad significa mejores rankings?",
      a: "La velocidad afecta UX y SEO de forma indirecta. Los rankings del núcleo son otro trabajo: prep alrededor de un mes; la cuota en primera página del núcleo suele planificarse en dos a seis meses tras arrancar.",
    },
  ],
  sections: [
    {
      title: "Diagnóstico: dónde se atasca de verdad",
      level: 2,
      paras: [
        "Saca un informe PageSpeed / Lighthouse de la versión móvil de las URLs clave. Mira TTFB, LCP, INP/CLS y la lista de «cargar menos».",
        "Por separado comprueba: cuántos plugins, qué tema, peso de la imagen hero, si el servidor envía compresión y caché. Sin medición, los fixes son a ciegas.",
      ],
      lists: [
        {
          intro: "Cuellos de botella típicos de WordPress:",
          items: [
            "respuesta lenta del servidor (TTFB)",
            "un tema pesado con scripts de más",
            "duplicados y plugins muertos",
            "JPG/PNG grandes sin WebP",
            "JS/CSS bloqueantes y fuentes de más",
          ],
        },
      ],
      links: [
        {
          label: "Tamaño de la página web",
          href: "/es/blog/razmer-stranitsy/",
        },
        {
          label: "Hosting",
          href: "/es/blog/hosting/",
        },
      ],
    },
    {
      title: "Hosting y la capa de servidor",
      level: 2,
      paras: [
        "Si el TTFB es de 1–2+ segundos, empieza por el hosting: PHP actual, caché de servidor, SSD, geolocalización sensata. Los planes orientados a WordPress a menudo incluyen caché y CDN de serie — mira términos actuales, no una lista de precios de 2019.",
        "Un CDN corta la latencia de estáticos para usuarios lejanos. SSL y HTTP moderno son baseline, no opcionales. Cambiar de host sin optimizar el tema da un efecto parcial — es normal.",
      ],
      lists: [
        {
          intro: "Qué preguntar al host:",
          items: [
            "si hay page cache / object cache",
            "versión de PHP y límites",
            "CDN y HTTP/2–3",
            "backups y staging para pruebas",
          ],
        },
      ],
    },
    {
      title: "Tema, plugins y media",
      level: 2,
      paras: [
        "Un tema premium para todos los casos arrastra sliders, fuentes y builders que no usas. Toma una plantilla más ligera o desactiva módulos a fondo.",
        "Plugins: quita los que no uses; no mantengas dos cachés, dos plugins SEO o dos sliders. Actualiza lo que quede. Imágenes — compresión, tamaños sensatos, lazy-load, WebP/AVIF donde se pueda.",
        "JS/CSS: aplaza lo no crítico, no cargues Google Fonts en pack «por si acaso», preferir fuentes del sistema o locales cuando sea posible. Plugins de «combinar todo» — prueba en staging: a veces rompen el sitio.",
      ],
      lists: [
        {
          intro: "Orden de trabajo:",
          items: [
            "backup y staging",
            "medir antes de los cambios",
            "limpiar plugins y tema",
            "optimizar imágenes",
            "caché + CDN",
            "volver a medir las mismas URLs",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No persigas 100/100 a cualquier coste. Importan más un LCP móvil estable y un carrito/formularios intactos tras la «optimización».",
        },
      ],
      links: [
        {
          label: "Tema de WordPress",
          href: "/es/blog/tema-wordpress/",
        },
        {
          label: "Plugins SEO de WordPress",
          href: "/es/blog/wordpress-seo-plaginy/",
        },
        {
          label: "Seguridad en WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
        {
          label: "Plugins de WordPress",
          href: "/es/blog/wordpress-plaginy/",
        },
      ],
    },
  ],
  closing: [
    "Acelerar WordPress es medición, hosting con TTFB decente, un tema ligero, menos plugins y media comprimida. Cambia cosas en staging y revisa escenarios de negocio; las notas de PageSpeed son un indicador — no el objetivo en sí.",
  ],
  related: [
    "tema-wordpress",
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "razmer-stranitsy",
    "amp",
    "pered-zapuskom-sayta",
  ],
};

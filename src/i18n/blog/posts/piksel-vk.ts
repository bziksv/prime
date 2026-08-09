import type { BlogPost } from "../../../data/blog";

/** EN overlay for piksel-vk — same structure as RU JSON. */
export const pikselVkEn: BlogPost = {
  slug: "piksel-vk",
  title: "VK pixel: setup and retargeting audiences",
  date: "2021-06-15",
  category: "SMM",
  cover: "/images/blog/piksel-vk/cover-en.webp",
  excerpt:
    "What the VK Ads pixel is, why it matters for retargeting, how to install it on a site, and how to build action-based audiences — without outdated account click-paths.",
  lead: [
    "The VKontakte pixel is a code snippet on your site that helps build audiences for VK ads: visitors, cart, purchase, and other events.",
    "Below: what the tool is for, how install works in practice, and how to shape segments. The account UI changes often — use current labels in VK Ads / the ads account.",
  ],
  faq: [
    {
      q: "How does the pixel differ from Yandex Metrica?",
      a: "Metrica is behavior analytics. The VK pixel is mainly fuel for audiences and ad optimization inside the VK ecosystem.",
    },
    {
      q: "Is Google Tag Manager required?",
      a: "No. You can paste the code into the site template. GTM helps when you have many tags and want flexibility without code releases.",
    },
    {
      q: "How large does an audience need to be?",
      a: "Launch thresholds have changed. Aim for a base large enough for learning and delivery; check exact minima in account help.",
    },
    {
      q: "Should I exclude buyers?",
      a: "Often yes: keep a separate “purchased” segment and exclude it from “abandoned cart” offers so you don’t burn budget.",
    },
    {
      q: "Does a site pixel replace a VK community pixel?",
      a: "They serve different roles. A site pixel tracks visits to your domain; social ads may also use other audience sources.",
    },
  ],
  sections: [
    {
      title: "Why you need the pixel",
      level: 2,
      paras: [
        "Without site events it’s hard to carefully retarget people who already visited: viewed a service, added to cart, or placed an order. The pixel ties the visit to the ads account.",
        "Segments let you send different offers to warm users and skip people who already bought.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "retarget visitors of key URLs",
            "abandoned cart or lead form",
            "exclude buyers",
            "lookalike or similar audiences from a base (if available in the account)",
          ],
        },
      ],
    },
    {
      title: "Install: the general flow",
      level: 2,
      paras: [
        "Create a pixel in the retargeting section of the VK ads account, set the site and topic, then copy the code.",
        "Paste the code into `<head>` or via GTM on all needed pages. Confirm activity status after a test visit.",
      ],
      lists: [
        {
          intro: "Checks after install:",
          items: [
            "code appears once per page",
            "no unnecessary Consent or CSP blocking",
            "goal events set if you use them",
            "test visit visible in the account",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Don’t treat 2021 click-by-click scripts as gospel: look up the current “Pixels / Retargeting” section in VK Ads help.",
        },
      ],
    },
    {
      title: "Audiences and exclusions",
      level: 2,
      paras: [
        "For a landing page, two segments often suffice: were on the site / completed a goal. For a shop, split by categories and funnel stages.",
        "Set audience membership lifetime (the retargeting window), or you’ll keep serving ads to cold visits for too long.",
      ],
      lists: [
        {
          intro: "Example for a store:",
          items: [
            "viewed category A",
            "added to cart",
            "purchased (exclude from “cart”)",
            "window of 7–30 days — match your deal cycle",
          ],
        },
      ],
      links: [
        {
          label: "Ads in VK communities",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
};

/** ES overlay for piksel-vk — same structure as RU JSON / EN. */
export const pikselVkEs: BlogPost = {
  slug: "piksel-vk",
  title: "Píxel de VK: instalación y audiencias de retargeting",
  date: "2021-06-15",
  category: "SMM",
  cover: "/images/blog/piksel-vk/cover.webp",
  excerpt:
    "Qué es el píxel de VK Ads, por qué importa para retargeting, cómo instalarlo en el sitio y cómo armar audiencias por acciones — sin rutas de clics antiguas del gabinete.",
  lead: [
    "El píxel de VKontakte es un fragmento de código en tu sitio que ayuda a construir audiencias para anuncios en VK: visitas, carrito, compra y otros eventos.",
    "Abajo: para qué sirve la herramienta, cómo va la instalación en la práctica y cómo dar forma a los segmentos. La UI del gabinete cambia a menudo — usa las etiquetas actuales en VK Ads / la cuenta de anuncios.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el píxel de Yandex Metrica?",
      a: "Metrica es analítica de comportamiento. El píxel de VK es sobre todo combustible para audiencias y optimización de anuncios dentro del ecosistema VK.",
    },
    {
      q: "¿Hace falta Google Tag Manager?",
      a: "No. Puedes pegar el código en la plantilla del sitio. GTM ayuda cuando hay muchos tags y quieres flexibilidad sin releases de código.",
    },
    {
      q: "¿De qué tamaño debe ser una audiencia?",
      a: "Los umbrales de lanzamiento han cambiado. Busca una base lo bastante grande para aprendizaje y entrega; revisa los mínimos exactos en la ayuda de la cuenta.",
    },
    {
      q: "¿Debo excluir a quienes ya compraron?",
      a: "A menudo sí: mantén un segmento «comprado» aparte y exclúyelo de ofertas de «carrito abandonado» para no quemar presupuesto.",
    },
    {
      q: "¿Un píxel del sitio sustituye al de una comunidad VK?",
      a: "Cumplen roles distintos. Un píxel de sitio rastrea visitas a tu dominio; los anuncios sociales también pueden usar otras fuentes de audiencia.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas el píxel",
      level: 2,
      paras: [
        "Sin eventos del sitio es difícil retargetear con cuidado a quien ya visitó: vio un servicio, añadió al carrito o hizo un pedido. El píxel ata la visita a la cuenta de anuncios.",
        "Los segmentos permiten enviar ofertas distintas a usuarios calientes y saltar a quienes ya compraron.",
      ],
      lists: [
        {
          intro: "Escenarios típicos:",
          items: [
            "retargetear visitantes de URLs clave",
            "carrito abandonado o formulario de lead",
            "excluir compradores",
            "lookalike o audiencias similares desde una base (si el gabinete lo permite)",
          ],
        },
      ],
    },
    {
      title: "Instalación: el flujo general",
      level: 2,
      paras: [
        "Crea un píxel en la sección de retargeting de la cuenta de anuncios de VK, define el sitio y el tema, luego copia el código.",
        "Pega el código en `<head>` o vía GTM en todas las páginas necesarias. Confirma el estado de actividad tras una visita de prueba.",
      ],
      lists: [
        {
          intro: "Comprobaciones tras instalar:",
          items: [
            "el código aparece una sola vez por página",
            "no hay bloqueos innecesarios de Consent o CSP",
            "eventos de objetivo configurados si los usas",
            "visita de prueba visible en la cuenta",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "No tomes scripts clic a clic de 2021 como dogma: busca la sección actual «Píxeles / Retargeting» en la ayuda de VK Ads.",
        },
      ],
    },
    {
      title: "Audiencias y exclusiones",
      level: 2,
      paras: [
        "Para un landing suelen bastar dos segmentos: estuvieron en el sitio / completaron un objetivo. Para una tienda, parte por categorías y etapas del embudo.",
        "Define la vida útil de la membresía (la ventana de retargeting), o seguirás sirviendo anuncios a visitas frías demasiado tiempo.",
      ],
      lists: [
        {
          intro: "Ejemplo para una tienda:",
          items: [
            "vieron la categoría A",
            "añadieron al carrito",
            "compraron (excluir del «carrito»)",
            "ventana de 7–30 días — alinea con tu ciclo de venta",
          ],
        },
      ],
      links: [
        {
          label: "Anuncios en comunidades VK",
          href: "/es/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "reklama-v-pablikah-vk",
    "optimizatsiya-konversii",
    "retargeting",
    "utm-metki",
    "google-tag-manager",
    "ga4",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-otzyvy-klientov — same structure as RU JSON. */
export const googleOtzyvyKlientovEn: BlogPost = {
  slug: "google-otzyvy-klientov",
  title: "Google Customer Reviews: how the program works for stores",
  date: "2019-08-09",
  category: "E-commerce",
  cover: "/images/blog/google-otzyvy-klientov/cover-en.webp",
  excerpt:
    "What Google Customer Reviews is: a post-purchase survey, seller rating in ads, and product reviews. How to connect via Merchant Center and what to avoid — without outdated thresholds and CTR guarantees.",
  lead: [
    "Google Customer Reviews is a program for online stores: after purchase the buyer is offered a survey, reviews accumulate and can affect seller/product ratings in the Google Shopping ecosystem and related surfaces.",
    "This is not the same as reviews on a Google Business Profile Maps card. Below: how the program works and a basic setup path. Display thresholds, UI buttons, and country availability change — check current Merchant Center Help.",
  ],
  faq: [
    {
      q: "Are these the same as Google Maps reviews?",
      a: "No. Maps/Business Profile is a local card. Customer Reviews are post-order surveys in the store and ratings in Google’s shopping surfaces.",
    },
    {
      q: "Do you need Merchant Center?",
      a: "Usually yes: participation and the survey module are tied to the seller account. You can’t turn it on with a site button alone.",
    },
    {
      q: "Does it guarantee higher ad CTR?",
      a: "No guarantee. A rating can help trust in ads when display conditions are met. We don’t repeat old “+10% CTR” figures.",
    },
    {
      q: "Can you fake reviews?",
      a: "No. It breaks Google’s rules and hurts the account. Collect only real consent and answers.",
    },
    {
      q: "Why does the survey need GTIN?",
      a: "To link a review to a specific product and match catalogs across sellers. Without correct IDs, product ratings won’t build.",
    },
  ],
  sections: [
    {
      title: "How the post-purchase survey works",
      level: 2,
      paras: [
        "The buyer places an order → on the thank-you page they’re offered survey consent → if they agree, Google may email a questionnaire → some people answer, some ignore. The funnel narrows at each step — that’s normal.",
        "Reviews accumulate about the seller and, with correct product data, about products. Rating display in ads depends on volume, quality, and country rules — verify fixed “exactly 100 reviews” claims from old guides in Help.",
      ],
      lists: [
        {
          intro: "How it differs from other reviews:",
          items: [
            "tied to a completed purchase",
            "lives in Merchant / Shopping",
            "doesn’t replace Maps reviews",
            "doesn’t replace collection on your own site",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Connection: meaning of the steps",
      level: 2,
      paras: [
        "In Merchant Center you enable Customer Reviews, accept terms, place the survey module/code on the successful-order page, and pass required order parameters (and products with GTIN if you need product ratings).",
        "Survey language, opt-in style, and product list are set in code/CMS integration. We don’t copy exact 2019 menu names — the guide is Google Help and the account wizard.",
      ],
      lists: [
        {
          intro: "Before launch, check:",
          items: [
            "the store meets program guidelines",
            "thank-you page is stable and has the code",
            "email/order data pass correctly",
            "GTINs in the catalog are valid",
            "no “storefront on one domain, checkout on another” setup if rules forbid it",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t hang a “seller rating” badge before display conditions are met: an empty or “unavailable” badge is worse than no badge. Check current thresholds in Help.",
        },
      ],
    },
    {
      title: "Seller rating, products, and common mistakes",
      level: 2,
      paras: [
        "A seller rating can appear in ads after enough reviews and a minimum score — update threshold figures from Google. Product rating builds on reviews with product IDs.",
        "Common mistakes: code not on every thank-you page, duplicate orders, wrong GTINs, expecting instant stars, confusing with Google Maps reviews, trying to push only five-star answers against the rules.",
      ],
      lists: [
        {
          intro: "A working store review stack:",
          items: [
            "Customer Reviews — if you join Shopping",
            "maps/local — separately",
            "your site — for people who already bought",
            "replies to negatives — by process, without faking",
          ],
        },
      ],
      links: [
        {
          label: "Negative review",
          href: "/en/blog/negativnyy-otzyv/",
        },
      ],
    },
  ],
  closing: [
    "Google Customer Reviews is a trust tool for stores in Google’s ecosystem — not a universal CTR button. Connect the survey correctly, follow guidelines, and don’t confuse the program with Maps reviews.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "google-biznes",
    "negativnyy-otzyv",
    "kartochka-tovara",
    "google-analytics",
    "yml-fayl",
  ],
};

/** ES overlay for google-otzyvy-klientov — same structure as RU JSON / EN. */
export const googleOtzyvyKlientovEs: BlogPost = {
  slug: "google-otzyvy-klientov",
  title: "Google Customer Reviews: cómo funciona el programa para tiendas",
  date: "2019-08-09",
  category: "E-commerce",
  cover: "/images/blog/google-otzyvy-klientov/cover.webp",
  excerpt:
    "Qué es Google Customer Reviews: una encuesta post-compra, rating del vendedor en ads y reviews de producto. Cómo conectar vía Merchant Center y qué evitar — sin umbrales caducados ni garantías de CTR.",
  lead: [
    "Google Customer Reviews es un programa para tiendas online: tras la compra se ofrece al comprador una encuesta, las reviews se acumulan y pueden afectar ratings de vendedor/producto en el ecosistema Google Shopping y superficies relacionadas.",
    "No es lo mismo que las reviews de una ficha de Google Business Profile en Maps. Abajo: cómo funciona el programa y un camino básico de setup. Umbrales de display, botones de UI y disponibilidad por país cambian — mira la Help actual de Merchant Center.",
  ],
  faq: [
    {
      q: "¿Son lo mismo que las reviews de Google Maps?",
      a: "No. Maps/Business Profile es una ficha local. Customer Reviews son encuestas post-pedido en la tienda y ratings en las superficies de shopping de Google.",
    },
    {
      q: "¿Hace falta Merchant Center?",
      a: "Suele sí: la participación y el módulo de encuesta van ligados a la cuenta de vendedor. No se enciende solo con un botón del sitio.",
    },
    {
      q: "¿Garantiza un CTR de ads más alto?",
      a: "Sin garantía. Un rating puede ayudar a la trust en ads cuando se cumplen las condiciones de display. No repetimos cifras viejas de «+10% CTR».",
    },
    {
      q: "¿Se pueden falsificar reviews?",
      a: "No. Rompe las reglas de Google y pega a la cuenta. Recoge solo consentimiento y respuestas reales.",
    },
    {
      q: "¿Por qué la encuesta necesita GTIN?",
      a: "Para vincular una review a un producto concreto y emparejar catálogos entre vendedores. Sin IDs correctos, los ratings de producto no se construyen.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona la encuesta post-compra",
      level: 2,
      paras: [
        "El comprador hace un pedido → en la thank-you page se le ofrece consentimiento a la encuesta → si acepta, Google puede enviar un cuestionario por email → algunos responden, otros ignoran. El funnel se estrecha en cada paso — es normal.",
        "Las reviews se acumulan sobre el vendedor y, con datos de producto correctos, sobre productos. El display del rating en ads depende de volumen, calidad y reglas del país — verifica en Help afirmaciones fijas de «exactamente 100 reviews» de guías viejas.",
      ],
      lists: [
        {
          intro: "Cómo difiere de otras reviews:",
          items: [
            "ligada a una compra completada",
            "vive en Merchant / Shopping",
            "no sustituye reviews de Maps",
            "no sustituye la recogida en tu propio sitio",
          ],
        },
      ],
      links: [
        {
          label: "Reviews para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Conexión: sentido de los pasos",
      level: 2,
      paras: [
        "En Merchant Center activas Customer Reviews, aceptas términos, colocas el módulo/código de encuesta en la página de pedido exitoso y pasas los parámetros de pedido requeridos (y productos con GTIN si necesitas ratings de producto).",
        "Idioma de encuesta, estilo de opt-in y lista de productos se fijan en la integración de código/CMS. No copiamos nombres exactos de menú de 2019 — la guía es Google Help y el wizard de la cuenta.",
      ],
      lists: [
        {
          intro: "Antes del lanzamiento, comprueba:",
          items: [
            "la tienda cumple las guidelines del programa",
            "la thank-you page es estable y tiene el código",
            "email/datos de pedido pasan bien",
            "los GTIN del catálogo son válidos",
            "no hay un setup «storefront en un dominio, checkout en otro» si las reglas lo prohíben",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No cuelgues un badge de «rating del vendedor» antes de cumplir las condiciones de display: un badge vacío o «no disponible» es peor que ningún badge. Mira umbrales actuales en Help.",
        },
      ],
    },
    {
      title: "Rating del vendedor, productos y errores habituales",
      level: 2,
      paras: [
        "Un rating de vendedor puede aparecer en ads tras suficientes reviews y una puntuación mínima — actualiza las cifras de umbral desde Google. El rating de producto se construye sobre reviews con IDs de producto.",
        "Errores habituales: código no en cada thank-you page, pedidos duplicados, GTIN incorrectos, esperar estrellas al instante, confundir con reviews de Google Maps, intentar empujar solo respuestas de cinco estrellas contra las reglas.",
      ],
      lists: [
        {
          intro: "Un stack de reviews que funciona en la tienda:",
          items: [
            "Customer Reviews — si entras en Shopping",
            "maps/local — aparte",
            "tu sitio — para quien ya compró",
            "respuestas a negativos — por proceso, sin falsificar",
          ],
        },
      ],
      links: [
        {
          label: "Review negativa",
          href: "/es/blog/negativnyy-otzyv/",
        },
      ],
    },
  ],
  closing: [
    "Google Customer Reviews es una tool de trust para tiendas en el ecosistema de Google — no un botón universal de CTR. Conecta la encuesta bien, sigue las guidelines y no confundas el programa con reviews de Maps.",
  ],
  related: [
    "otzyvy-dlya-prodazh",
    "google-biznes",
    "negativnyy-otzyv",
    "kartochka-tovara",
    "google-analytics",
    "yml-fayl",
  ],
};

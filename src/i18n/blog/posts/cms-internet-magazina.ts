import type { BlogPost } from "../../../data/blog";

/** EN overlay for cms-internet-magazina — same structure as RU JSON. */
export const cmsInternetMagazinaEn: BlogPost = {
  slug: "cms-internet-magazina",
  title:
    "CMS for an online store: downsides of Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart",
  date: "2019-03-15",
  category: "Digital marketing",
  cover: "/images/blog/cms-internet-magazina/cover-en.webp",
  excerpt:
    "How to pick a CMS for an online store with typical downsides in mind: 1C-Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart — without 2019 price lists and the myth that the engine alone ranks you.",
  lead: [
    "A store CMS is the admin for catalog, orders, payments, and content. Every popular platform has strengths and a cost trade-off: license, hosting, SEO hygiene, customization, team.",
    "Below: typical downsides of the five platforms teams ask about most on RU projects. We don’t copy 2019 license figures or “module for $N” — check current vendor pricing. The engine doesn’t replace SEO and UX; page-one share for the core is planned over months of work, not “installed OpenCart = rankings.”",
  ],
  faq: [
    {
      q: "Is there a CMS without drawbacks?",
      a: "No. Choose for catalog, integrations (1C, payments, shipping), build budget, and who will maintain it.",
    },
    {
      q: "Is a free CMS always cheaper?",
      a: "Entry is often cheaper; finish work costs more: modules, hosting, security, a developer. Count TCO over one to two years.",
    },
    {
      q: "What matters more for SEO — CMS or content?",
      a: "Content, tech, and links beat the engine brand. The CMS must not get in the way: clean URLs, speed, indexing, structured data.",
    },
    {
      q: "How do I detect a competitor’s CMS?",
      a: "From open HTML and path clues — covered in a separate article. Not by hacking the admin.",
    },
    {
      q: "Should I change CMS after launch?",
      a: "Expensive and risky for SEO and URLs. Better to choose closer to requirements at the start than migrate in a year.",
    },
  ],
  sections: [
    {
      title: "How to read CMS downsides",
      level: 2,
      paras: [
        "One platform’s minus is another’s plus. Bitrix is heavy for a 30-SKU storefront; OpenCart may not cover complex B2B logic out of the box.",
        "Judge: catalog size, need for 1C, multilingual, team (in-house vs agency), speed and security needs. A demo and pilot on a data copy beat marketing “best of five” lists.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "SKU count and filters",
            "payment / shipping / 1C integrations",
            "who edits the catalog daily",
            "budget for licenses, build, and hosting",
            "SEO plan: clean URLs, canonicals, speed",
          ],
        },
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "How to detect a CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "1C-Bitrix: where it usually hurts",
      level: 2,
      paras: [
        "Strength — ecosystem for RU business and a 1C link. Downsides: cost of a suitable edition, hosting needs, hard customization of “ready” solutions, and a steep admin learning curve for beginners.",
        "Modules and tweaks often need a developer: a “small” template change can cost more than it looks. For a tiny storefront, TCO sometimes exceeds the benefit.",
      ],
      lists: [
        {
          intro: "Typical risks:",
          items: [
            "license and updates",
            "heavy hosting without optimization",
            "dependency on an integrator",
            "paying for features you never use",
          ],
        },
      ],
      links: [
        {
          label: "SEO on Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Magento / Adobe Commerce",
      level: 2,
      paras: [
        "A powerful class for large catalogs and complex commerce. Downsides: expensive build and support, high server needs, complex admin and docs for beginners.",
        "The line evolved (open source / commercial editions under Adobe) — verify current names and licenses. Out-of-the-box 1C integration usually isn’t a surprise gift: budget modules separately.",
      ],
      lists: [
        {
          intro: "When downsides bite:",
          items: [
            "small catalog and small budget",
            "no strong development team",
            "need a fast MVP without enterprise architecture",
          ],
        },
      ],
    },
    {
      title: "OpenCart",
      level: 2,
      paras: [
        "Entry pluses: easy start and a large community. Downsides: SEO hygiene (duplicates, canonicals, clean URLs) often needs modules and careful setup; free themes vary in quality; on large catalogs performance hits hosting and code limits.",
        "“Doesn’t work with search” as an absolute is overstated. It works if you handle the tech; without that you easily get junk URLs and duplicates.",
      ],
      lists: [
        {
          intro: "Where to budget effort:",
          items: [
            "canonicals and duplicates",
            "clean URLs and redirects after modules",
            "security updates",
            "catalog size and load limits",
          ],
        },
      ],
    },
    {
      title: "WooCommerce",
      level: 2,
      paras: [
        "A store as a WordPress plugin: familiar ecosystem and lots of extensions. Downsides: “free” quickly sprouts paid modules; plugin conflicts; hosting load with a heavy theme and cache set up ad hoc.",
        "Payments and local RU flows need a separate check — don’t copy a Western box without testing. An old “third of the market” share isn’t an argument for your case.",
      ],
      lists: [
        {
          intro: "Typical pains:",
          items: [
            "plugin zoo",
            "speed on shared hosting",
            "WP plus plugins security",
            "hard checkout customization",
          ],
        },
      ],
    },
    {
      title: "CS-Cart",
      level: 2,
      paras: [
        "A commercial CMS with strong store features in the base package. Downsides: license and option price, support and update model (terms change — read the contract), some paid modules.",
        "Checkout UX and required order fields affect conversion more than the CMS brand: budget funnel testing, not only price comparison.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t use fixed “$375 / $550 / support credits” from a 2019 article as a price list. Check current editions on the vendor site.",
        },
      ],
    },
    {
      title: "How to choose without fanaticism",
      level: 2,
      paras: [
        "Gather requirements → cut platforms that clearly can’t do the integrations → compare TCO and developer availability → prototype catalog and checkout.",
        "For SEO, clean URLs, speed, index, and content beat “which CMS is trendy.” Changing the engine later is almost always more expensive than choosing well now.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "Bitrix, Magento, OpenCart, WooCommerce, and CS-Cart have different entry costs and different pitfalls. Choose for catalog, 1C, and the support team — and budget SEO and speed into the project instead of hoping the “right engine” alone brings rankings.",
  ],
  related: [
    "start-internet-magazina",
    "sozdanie-internet-magazina",
    "seo-bitrix",
    "uznat-cms",
    "prodvizhenie-internet-magazina",
    "oshibki-internet-magazina",
  ],
};

/** ES overlay for cms-internet-magazina — same structure as RU JSON / EN. */
export const cmsInternetMagazinaEs: BlogPost = {
  slug: "cms-internet-magazina",
  title:
    "CMS para tienda online: contras de Bitrix, Magento, OpenCart, WooCommerce y CS-Cart",
  date: "2019-03-15",
  category: "Digital marketing",
  cover: "/images/blog/cms-internet-magazina/cover.webp",
  excerpt:
    "Cómo elegir una CMS para tienda online con contras típicos en mente: 1C-Bitrix, Magento, OpenCart, WooCommerce y CS-Cart — sin listas de precios de 2019 ni el mito de que el motor solo te rankea.",
  lead: [
    "Una CMS de tienda es el admin de catálogo, pedidos, pagos y contenido. Cada plataforma popular tiene fortalezas y un trade-off de coste: licencia, hosting, higiene SEO, customización, equipo.",
    "Abajo: contras típicas de las cinco plataformas que más preguntan los equipos en proyectos RU. No copiamos cifras de licencia de 2019 ni «módulo por $N» — mira precios actuales del vendor. El motor no sustituye SEO y UX; la cuota en primera página del core se planifica a lo largo de meses de trabajo, no «instalé OpenCart = rankings».",
  ],
  faq: [
    {
      q: "¿Hay una CMS sin inconvenientes?",
      a: "No. Elige por catálogo, integraciones (1C, pagos, envío), presupuesto de build y quién la mantendrá.",
    },
    {
      q: "¿Una CMS gratis siempre sale más barata?",
      a: "La entrada suele ser más barata; el acabado cuesta más: módulos, hosting, seguridad, un desarrollador. Cuenta TCO a uno o dos años.",
    },
    {
      q: "¿Qué importa más para SEO — CMS o contenido?",
      a: "Contenido, técnica y enlaces ganan a la marca del motor. La CMS no debe estorbar: URLs limpias, velocidad, indexación, datos estructurados.",
    },
    {
      q: "¿Cómo detectar la CMS de un competidor?",
      a: "Por pistas abiertas de HTML y paths — cubierto en un artículo aparte. No hackeando el admin.",
    },
    {
      q: "¿Debo cambiar de CMS tras el lanzamiento?",
      a: "Caro y arriesgado para SEO y URLs. Mejor elegir más cerca de los requisitos al inicio que migrar en un año.",
    },
  ],
  sections: [
    {
      title: "Cómo leer las contras de una CMS",
      level: 2,
      paras: [
        "El menos de una plataforma es el plus de otra. Bitrix es pesada para un storefront de 30 SKU; OpenCart puede no cubrir lógica B2B compleja out of the box.",
        "Juzga: tamaño de catálogo, necesidad de 1C, multilingüe, equipo (in-house vs agencia), necesidades de velocidad y seguridad. Una demo y un piloto sobre una copia de datos ganan a listas de marketing de «mejores cinco».",
      ],
      lists: [
        {
          intro: "Checklist de selección:",
          items: [
            "conteo de SKU y filtros",
            "integraciones de pago / envío / 1C",
            "quién edita el catálogo a diario",
            "presupuesto de licencias, build y hosting",
            "plan SEO: URLs limpias, canonicals, velocidad",
          ],
        },
      ],
      links: [
        {
          label: "Arrancar una tienda online",
          href: "/es/blog/start-internet-magazina/",
        },
        {
          label: "Cómo detectar una CMS",
          href: "/es/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "1C-Bitrix: dónde suele doler",
      level: 2,
      paras: [
        "Fortaleza — ecosistema para negocio RU y vínculo con 1C. Contras: coste de una edición adecuada, necesidades de hosting, customización dura de soluciones «listas» y una curva de aprendizaje de admin empinada para principiantes.",
        "Módulos y tweaks a menudo necesitan un desarrollador: un cambio «pequeño» de plantilla puede costar más de lo que parece. Para un storefront diminuto, el TCO a veces supera el beneficio.",
      ],
      lists: [
        {
          intro: "Riesgos típicos:",
          items: [
            "licencia y updates",
            "hosting pesado sin optimización",
            "dependencia de un integrador",
            "pagar features que nunca usas",
          ],
        },
      ],
      links: [
        {
          label: "SEO en Bitrix",
          href: "/es/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Magento / Adobe Commerce",
      level: 2,
      paras: [
        "Una clase potente para catálogos grandes y commerce complejo. Contras: build y soporte caros, altas necesidades de servidor, admin y docs complejos para principiantes.",
        "La línea evolucionó (open source / ediciones comerciales bajo Adobe) — verifica nombres y licencias actuales. La integración 1C out-of-the-box suele no ser un regalo sorpresa: presupuesta módulos aparte.",
      ],
      lists: [
        {
          intro: "Cuándo muerden las contras:",
          items: [
            "catálogo pequeño y presupuesto pequeño",
            "sin equipo fuerte de desarrollo",
            "necesitas un MVP rápido sin arquitectura enterprise",
          ],
        },
      ],
    },
    {
      title: "OpenCart",
      level: 2,
      paras: [
        "Pluses de entrada: arranque fácil y una comunidad grande. Contras: la higiene SEO (duplicados, canonicals, URLs limpias) a menudo necesita módulos y setup cuidadoso; los themes gratis varían en calidad; en catálogos grandes el rendimiento choca con límites de hosting y código.",
        "«No funciona con la búsqueda» como absoluto está sobredimensionado. Funciona si cuidas la técnica; sin eso obtienes fácil URLs basura y duplicados.",
      ],
      lists: [
        {
          intro: "Dónde presupuestar esfuerzo:",
          items: [
            "canonicals y duplicados",
            "URLs limpias y redirects tras módulos",
            "updates de seguridad",
            "límites de tamaño de catálogo y carga",
          ],
        },
      ],
    },
    {
      title: "WooCommerce",
      level: 2,
      paras: [
        "Una tienda como plugin de WordPress: ecosistema familiar y muchas extensiones. Contras: lo «gratis» brota rápido en módulos de pago; conflictos de plugins; carga de hosting con un theme pesado y cache montado a ad hoc.",
        "Pagos y flujos locales RU necesitan un chequeo aparte — no copies una caja occidental sin testar. Una cuota vieja de «un tercio del mercado» no es un argumento para tu caso.",
      ],
      lists: [
        {
          intro: "Dolores típicos:",
          items: [
            "zoo de plugins",
            "velocidad en shared hosting",
            "seguridad de WP más plugins",
            "customización dura del checkout",
          ],
        },
      ],
    },
    {
      title: "CS-Cart",
      level: 2,
      paras: [
        "Una CMS comercial con features fuertes de tienda en el paquete base. Contras: precio de licencia y opciones, modelo de soporte y update (los términos cambian — lee el contrato), algunos módulos de pago.",
        "El UX de checkout y los campos obligatorios del pedido afectan la conversión más que la marca de la CMS: presupuesta testing del funnel, no solo comparación de precios.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No uses «$375 / $550 / créditos de soporte» fijos de un artículo de 2019 como lista de precios. Mira las ediciones actuales en el sitio del vendor.",
        },
      ],
    },
    {
      title: "Cómo elegir sin fanatismo",
      level: 2,
      paras: [
        "Recoge requisitos → corta plataformas que claramente no hacen las integraciones → compara TCO y disponibilidad de desarrolladores → prototipa catálogo y checkout.",
        "Para SEO, URLs limpias, velocidad, índice y contenido ganan a «qué CMS está de moda». Cambiar el motor después casi siempre sale más caro que elegir bien ahora.",
      ],
      links: [
        {
          label: "Crear una tienda online",
          href: "/es/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Promover una tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "Bitrix, Magento, OpenCart, WooCommerce y CS-Cart tienen costes de entrada distintos y trampas distintas. Elige por catálogo, 1C y el equipo de soporte — y presupuesta SEO y velocidad en el proyecto en vez de esperar que el «motor correcto» solo traiga rankings.",
  ],
  related: [
    "start-internet-magazina",
    "sozdanie-internet-magazina",
    "seo-bitrix",
    "uznat-cms",
    "prodvizhenie-internet-magazina",
    "oshibki-internet-magazina",
  ],
};

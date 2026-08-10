import type { BlogPost } from "../../../data/blog";

/** EN overlay for zapusk-internet-magazina — same structure as RU JSON. */
export const zapuskInternetMagazinaEn: BlogPost = {
  slug: "zapusk-internet-magazina",
  title: "Launching an online store end to end: the real stages",
  date: "2020-11-20",
  category: "E-commerce",
  cover: "/images/blog/zapusk-internet-magazina/cover-en.webp",
  excerpt:
    "Online store launch stages: business plan, warehouse or dropshipping, platform, storefront, legal form and receipts, payments, team, and ads — without “store in one evening” promises or outdated 2020 price lists.",
  lead: [
    "On paper the scheme looks simple: site, products, sales. In practice the plan, supply, payments, service, and unit economics break first. There’s no universal playbook for every niche — there is a shared stage frame.",
    "Storefront checklists and “what to study first” live in neighboring pieces; this one covers the operational path from idea to acquiring customers. We don’t copy old state fees, SaaS tariffs, or “cost-per-click budgets” from vintage guides — check current rules and your own math.",
  ],
  faq: [
    {
      q: "How is this different from “10 points when creating a store”?",
      a: "That piece is storefront quality (design, responsive layout, photos, SSL). This one is business stages: plan, logistics, platform, legal form, payments, people, marketing.",
    },
    {
      q: "How does it differ from “starting an online store”?",
      a: "Start covers what to learn before launch. This material is the work sequence from plan to ads.",
    },
    {
      q: "Can I run without a warehouse?",
      a: "Yes: dropshipping or fulfillment. Downsides — margin, quality control, and lead times. Calculate unit economics, not only “convenient.”",
    },
    {
      q: "Which platform should I pick?",
      a: "Match catalog, integrations, and who will support it: CMS, plugin (WooCommerce), SaaS, builder, or custom. See the CMS downsides breakdown.",
    },
    {
      q: "Sole trader or limited company?",
      a: "Depends on partners, VAT, investors, and risk. Not legal advice — check current tax rules and your accountant.",
    },
    {
      q: "How much does a launch cost?",
      a: "The range is huge: niche, warehouse, build, ads. Don’t use old finger-in-the-air 2020 estimates as a budget.",
    },
    {
      q: "When does SEO start?",
      a: "After catalog structure, product cards, and tech. Prep is weeks to about a month; ranking for the keyword set is planned over 2–6 months after work starts.",
    },
    {
      q: "Do I need a team on day one?",
      a: "On a micro start the founder plus contractors often suffice. Grow roles (content, support, warehouse, IT) with load.",
    },
  ],
  sections: [
    {
      title: "Business plan before the domain",
      level: 2,
      paras: [
        "Describe the product and why it sells, supplier and delivery, regional competitors, storefront format (landing vs catalog), marketing, launch budget, people, and risks.",
        "The clearer margin, returns, and CAC numbers are, the lower the chance of “we have a site, no orders.”",
      ],
      lists: [
        {
          intro: "Plan minimum:",
          items: [
            "assortment and USP",
            "buying / storage / delivery",
            "unit economics and a working-capital buffer",
            "demand channels and a test budget",
            "risks (logistics, payments, staff)",
          ],
        },
      ],
      links: [
        {
          label: "Start: what to study",
          href: "/en/blog/start-internet-magazina/",
        },
      ],
    },
    {
      title: "Supply: warehouse, dropshipping, fulfillment",
      level: 2,
      paras: [
        "Your own warehouse — control of stock and packing, but rent and people. Dropshipping — no warehouse, lower margin, reputation depends on the partner. Fulfillment — outsourced intake, storage, and shipping when integrated with the store.",
        "“The fulfillment market is just starting” from 2020 texts is outdated: more offers exist. The criterion is the same — SLA, warehouse geography, cost per operation.",
      ],
    },
    {
      title: "Platform: CMS, SaaS, builder, or custom",
      level: 2,
      paras: [
        "A ready-made “turnkey” store from someone else is rarely transparent: you buy unknown SEO debt and ops. More often you build from scratch.",
        "Options: boxed CMS on your hosting; a shop plugin (e.g. WooCommerce); SaaS; a builder with a storefront; a heavy enterprise CMS; custom development.",
        "Look past entry price: catalog import, admin roles, payments/shipping, analytics, SEO hygiene, who will fix things. Popular CMS downsides are covered separately.",
      ],
      links: [
        {
          label: "CMS for an online store",
          href: "/en/blog/cms-internet-magazina/",
        },
        {
          label: "Tilda",
          href: "/en/blog/tilda/",
        },
      ],
    },
    {
      title: "Storefront and content",
      level: 2,
      paras: [
        "You need clear sections: about, shipping/payment/returns, catalog, cart, contacts, FAQ. Large assortment — categories and strong product cards.",
        "Memorable domain, HTTPS, forms and contact channels. Storefront quality lives in the “10 points” checklist.",
      ],
      links: [
        {
          label: "Online store creation checklist",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online payments",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Legal form, receipts, and payments",
      level: 2,
      paras: [
        "A sole trader is simpler at the start; a company fits partners, investment, and a different liability model. Business codes, tax regime, and online receipts follow current requirements — not 2019 screenshots.",
        "Payment methods: cards (acquiring), bank transfer, e-wallets where appropriate, cash on delivery, cash with courier/pickup, aggregators. The more familiar options without checkout surprises, the fewer abandoned carts.",
      ],
      notes: [
        {
          title: "Not legal advice",
          text: "Registration, receipts, and taxes change. Before launch check the tax authority / fiscal operator and your accountant; fees and timelines from old articles may no longer apply.",
        },
      ],
    },
    {
      title: "People and marketing after launch",
      level: 2,
      paras: [
        "Roles: storefront admin, content, support, warehouse/courier, accounting, IT. At the start people combine jobs; outsourcing is normal.",
        "Demand: SMM, SEO (months-long horizon), paid search, content, partners. Don’t bet everything on one channel. Count ROMI (return on marketing investment), not “reach for reach’s sake.”",
        "After go-live — analytics, reviews, conversion improvements. A “store in a few hours” with no economics is a myth.",
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online store manager",
          href: "/en/blog/menedzher-internet-magazina/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Plan and supply first, then platform and storefront, then legal form/payments and demand.",
        "A platform doesn’t replace service and margin.",
        "SEO comes after structure; ranking for the keyword set is planned over 2–6 months after launch prep.",
      ],
    },
  ],
  closing: [
    "Put the stage frame into a table with dates and owners — and don’t run ads on empty economics and dead stock.",
  ],
  related: [
    "start-internet-magazina",
    "sozdanie-internet-magazina",
    "cms-internet-magazina",
    "kartochka-tovara",
    "prodvizhenie-internet-magazina",
    "onlayn-oplata",
  ],
};

/** ES overlay for zapusk-internet-magazina — same structure as RU JSON / EN. */
export const zapuskInternetMagazinaEs: BlogPost = {
  slug: "zapusk-internet-magazina",
  title: "Lanzar una tienda online de punta a punta: las etapas reales",
  date: "2020-11-20",
  category: "E-commerce",
  cover: "/images/blog/zapusk-internet-magazina/cover-es.webp",
  excerpt:
    "Etapas del lanzamiento de una tienda online: plan de negocio, almacén o dropshipping, plataforma, escaparate, forma jurídica y recibos, pagos, equipo y ads — sin promesas de «tienda en una tarde» ni listas de precios obsoletas de 2020.",
  lead: [
    "En el papel el esquema parece simple: sitio, productos, ventas. En la práctica primero se rompen el plan, el suministro, los pagos, el servicio y la unit economics. No hay un playbook universal para cada nicho — hay un marco compartido de etapas.",
    "Los checklists de escaparate y «qué estudiar primero» viven en piezas vecinas; aquí cubrimos el camino operativo de la idea a captar clientes. No copiamos tasas estatales antiguas, tarifas SaaS ni «presupuestos por clic» de guías vintage — revisa reglas actuales y tu propia matemática.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de «10 puntos al crear una tienda»?",
      a: "Esa pieza es calidad de escaparate (diseño, layout responsive, fotos, SSL). Esta son etapas de negocio: plan, logística, plataforma, forma jurídica, pagos, gente, marketing.",
    },
    {
      q: "¿En qué se diferencia de «empezar una tienda online»?",
      a: "Start cubre qué aprender antes del lanzamiento. Este material es la secuencia de trabajo del plan a los ads.",
    },
    {
      q: "¿Se puede operar sin almacén?",
      a: "Sí: dropshipping o fulfillment. Contras — margen, control de calidad y plazos. Calcula unit economics, no solo «conveniente».",
    },
    {
      q: "¿Qué plataforma elijo?",
      a: "Cuadra catálogo, integraciones y quién lo soportará: CMS, plugin (WooCommerce), SaaS, builder o custom. Ver el desglose de contras de CMS.",
    },
    {
      q: "¿Autónomo o sociedad limitada?",
      a: "Depende de partners, IVA, inversores y riesgo. No es consejo legal — revisa las reglas fiscales actuales y tu contable.",
    },
    {
      q: "¿Cuánto cuesta un lanzamiento?",
      a: "El rango es enorme: nicho, almacén, build, ads. No uses estimaciones al aire de 2020 como presupuesto.",
    },
    {
      q: "¿Cuándo empieza el SEO?",
      a: "Tras la estructura del catálogo, fichas de producto y técnica. La prep son semanas hasta alrededor de un mes; el ranking del set de keywords se planifica a 2–6 meses tras el inicio de trabajos.",
    },
    {
      q: "¿Hace falta un equipo el día uno?",
      a: "En un micro arranque suelen bastar el fundador más contratistas. Crece roles (contenido, soporte, almacén, IT) con la carga.",
    },
  ],
  sections: [
    {
      title: "Plan de negocio antes del dominio",
      level: 2,
      paras: [
        "Describe el producto y por qué se vende, proveedor y entrega, competidores regionales, formato de escaparate (landing vs catálogo), marketing, presupuesto de lanzamiento, gente y riesgos.",
        "Cuanto más claros sean margen, devoluciones y cifras de CAC, menor la probabilidad de «tenemos sitio, no hay pedidos».",
      ],
      lists: [
        {
          intro: "Mínimo del plan:",
          items: [
            "surtido y USP",
            "compra / almacenamiento / entrega",
            "unit economics y un buffer de capital de trabajo",
            "canales de demanda y un presupuesto de test",
            "riesgos (logística, pagos, personal)",
          ],
        },
      ],
      links: [
        {
          label: "Start: qué estudiar",
          href: "/es/blog/start-internet-magazina/",
        },
      ],
    },
    {
      title: "Suministro: almacén, dropshipping, fulfillment",
      level: 2,
      paras: [
        "Tu propio almacén — control de stock y packing, pero alquiler y gente. Dropshipping — sin almacén, menos margen, la reputación depende del partner. Fulfillment — recepción, almacenamiento y envío externalizados cuando está integrado con la tienda.",
        "«El mercado de fulfillment apenas arranca» de textos de 2020 está obsoleto: hay más ofertas. El criterio es el mismo — SLA, geografía del almacén, coste por operación.",
      ],
    },
    {
      title: "Plataforma: CMS, SaaS, builder o custom",
      level: 2,
      paras: [
        "Una tienda «llave en mano» lista de otro rara vez es transparente: compras deuda SEO desconocida y ops. Más a menudo se construye desde cero.",
        "Opciones: CMS empaquetado en tu hosting; un plugin de tienda (p. ej. WooCommerce); SaaS; un builder con escaparate; un CMS enterprise pesado; desarrollo custom.",
        "Mira más allá del precio de entrada: import del catálogo, roles de admin, pagos/envío, analítica, higiene SEO, quién arreglará las cosas. Las contras de CMS populares se cubren aparte.",
      ],
      links: [
        {
          label: "CMS para una tienda online",
          href: "/blog/cms-internet-magazina/",
        },
        {
          label: "Tilda",
          href: "/blog/tilda/",
        },
      ],
    },
    {
      title: "Escaparate y contenido",
      level: 2,
      paras: [
        "Hacen falta secciones claras: about, envío/pago/devoluciones, catálogo, carrito, contactos, FAQ. Surtido grande — categorías y fichas de producto fuertes.",
        "Dominio memorable, HTTPS, formularios y canales de contacto. La calidad del escaparate vive en el checklist de «10 puntos».",
      ],
      links: [
        {
          label: "Checklist de creación de tienda online",
          href: "/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Ficha de producto",
          href: "/blog/kartochka-tovara/",
        },
        {
          label: "Pagos online",
          href: "/es/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Forma jurídica, recibos y pagos",
      level: 2,
      paras: [
        "Un autónomo es más simple al inicio; una sociedad encaja con partners, inversión y otro modelo de responsabilidad. Códigos de actividad, régimen fiscal y recibos online siguen requisitos actuales — no capturas de 2019.",
        "Métodos de pago: tarjetas (acquiring), transferencia, e-wallets donde encaje, contra reembolso, efectivo con courier/pickup, agregadores. Cuantas más opciones familiares sin sorpresas en el checkout, menos carritos abandonados.",
      ],
      notes: [
        {
          title: "No es consejo legal",
          text: "Registro, recibos e impuestos cambian. Antes del lanzamiento revisa la autoridad fiscal / operador fiscal y tu contable; tasas y plazos de artículos antiguos pueden ya no aplicar.",
        },
      ],
    },
    {
      title: "Gente y marketing tras el lanzamiento",
      level: 2,
      paras: [
        "Roles: admin del escaparate, contenido, soporte, almacén/courier, contabilidad, IT. Al inicio la gente combina puestos; el outsourcing es normal.",
        "Demanda: SMM, SEO (horizonte de meses), paid search, contenido, partners. No apuestes todo a un canal. Cuenta ROMI (retorno de la inversión en marketing), no «alcance por el alcance».",
        "Tras el go-live — analítica, reseñas, mejoras de conversión. Una «tienda en unas horas» sin economics es un mito.",
      ],
      links: [
        {
          label: "Promover una tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Manager de tienda online",
          href: "/es/blog/menedzher-internet-magazina/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Plan y suministro primero, luego plataforma y escaparate, luego forma jurídica/pagos y demanda.",
        "Una plataforma no sustituye servicio y margen.",
        "El SEO llega tras la estructura; el ranking del set de keywords se planifica a 2–6 meses tras la prep de lanzamiento.",
      ],
    },
  ],
  closing: [
    "Pasa el marco de etapas a una tabla con fechas y responsables — y no lances ads sobre economics vacías y stock muerto.",
  ],
  related: [
    "start-internet-magazina",
    "prodvizhenie-internet-magazina",
    "onlayn-oplata",
    "menedzher-internet-magazina",
    "sozdanie-internet-magazina",
    "cms-internet-magazina",
  ],
};

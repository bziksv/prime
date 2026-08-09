import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmeshchenie-lendinga — same structure as RU JSON. */
export const razmeshchenieLendingaEn: BlogPost = {
  slug: "razmeshchenie-lendinga",
  title: "Where to host a landing page: domain, subdomain, or inside the site",
  date: "2019-10-21",
  category: "Digital marketing",
  cover: "/images/blog/razmeshchenie-lendinga/cover-en.webp",
  excerpt:
    "Three ways to place a landing page: a separate domain, a subdomain, or a URL on the main site — pros, cons, SEO, and when to pick which for the offer and audience.",
  lead: [
    "You can put a landing on a new domain, on a subdomain, or as a page inside the main site. There is no universal “always do this”: the choice depends on the offer, closeness to the current brand, and the traffic channel.",
    "Below: a comparison of three schemes — without surveys for surveys’ sake. How to build blocks and copy lives in the landing and landing-copy articles; here it’s only the URL and infrastructure question.",
  ],
  faq: [
    {
      q: "What do people pick most often for paid traffic?",
      a: "Any of the three works if speed and the offer are solid. For SEO, a page on the main domain with history is usually more convenient.",
    },
    {
      q: "Is a separate domain always better?",
      a: "No. You need it when the offer/brand is strongly different or the main site has a bad reputation. Otherwise you pay for age and links again from zero.",
    },
    {
      q: "Does a subdomain inherit the main site’s SEO?",
      a: "Search engines often treat a subdomain as close, but not “the same” site. It feeds the main domain’s behavior and link weight less than an internal page.",
    },
    {
      q: "Is there affiliate-filter risk on a new domain?",
      a: "If you copy contacts, template, and assortment from the main site, risk is higher. A new domain is for a different project/audience — not a clone “for a keyword in the URL.”",
    },
    {
      q: "Should an online store use a separate domain per product?",
      a: "Usually no: the product card/category on one domain is the landing. A separate domain is for another business or a test outside the catalog.",
    },
    {
      q: "What should I choose for a hypothesis test?",
      a: "A fast URL on the main site, or a light separate domain if you can’t touch prod. What matters is measuring conversion — not a pretty address.",
    },
  ],
  sections: [
    {
      title: "Three placement schemes",
      level: 2,
      paras: [
        "Separate domain: `promo.example` → its own site. Subdomain: `lp.site.com`. Inside the site: `site.com/landing/` or a service/promo landing in the structure.",
        "“What’s more popular” surveys rarely help: an agency and a local service have different constraints. Look at how the offer ties to the brand and the channel (SEO vs paid search).",
      ],
      lists: [
        {
          intro: "Options:",
          items: [
            "a new domain",
            "a subdomain",
            "a page on the main site",
          ],
        },
      ],
      links: [
        {
          label: "Landing page: what it is",
          href: "/en/blog/lending/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Separate domain",
      level: 2,
      paras: [
        "Plus — freedom of USP and design unbound from the main site; handy for a new direction or a clean test without risk of breaking prod. You can hand development to a contractor in isolation.",
        "Minuses: zero age and links, almost always paid ads at the start, domain/hosting cost, and affiliate-filter risk if the page is a clone of the main business with the same contacts.",
      ],
      notes: [
        {
          title: "When it fits",
          kind: "tip",
          text: "A new product for a different audience, a strong topic break from the main site, or a bad reputation of the current domain in search/ads.",
        },
      ],
    },
    {
      title: "Subdomain",
      level: 2,
      paras: [
        "Often chosen as a compromise: tied to the brand, but visually and technically separate. Handy to keep several promos (`promo1.`, `event.`) without buying a pile of domains — within DNS/hosting limits.",
        "Minuses: SEO is usually weaker than an internal page; visits barely feed the main site’s metrics; you need setup on the same hosting/access. For close products a section on the main domain is often enough.",
      ],
    },
    {
      title: "Inside the main site",
      level: 2,
      paras: [
        "Pluses: domain age and trust, internal links from catalog and blog, one counter and CRM, cheaper upkeep. Time on page and conversions work in one loop. For SEO this is usually the most practical path.",
        "Constraint — topic and UX must align with the site. A car dealer shouldn’t sell stationery from the same homepage as-is; either a separate section with an honest structure, or another domain.",
      ],
      lists: [
        {
          intro: "It fits well when:",
          items: [
            "the offer is close to the current catalog/services",
            "you need organic and internal linking",
            "unified analytics and brand in the URL matter",
          ],
        },
      ],
    },
    {
      title: "How to choose in practice",
      level: 2,
      paras: [
        "Close offer and a working site → page on the main domain. Branch/line nearby by topic but needs a separate “world” → subdomain. New business or a different audience → separate domain. For a store, product landings almost always live in one domain’s catalog.",
        "A keyword in the domain name alone rarely decides rankings. Speed, offer, traffic, and not cloning contacts matter more. If the main site is under sanctions or burned in ad accounts — a new domain is justified as isolation, not as SEO magic.",
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
  ],
  closing: [
    "Landing placement is an infrastructure choice for the offer and channel. By default strengthen the main domain; take a subdomain or a new address when topic, risks, or development isolation justify it.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "istochniki-trafika",
    "url-adres",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};

/** ES overlay for razmeshchenie-lendinga — same structure as RU JSON / EN. */
export const razmeshchenieLendingaEs: BlogPost = {
  slug: "razmeshchenie-lendinga",
  title: "Dónde alojar una landing: dominio, subdominio o dentro del sitio",
  date: "2019-10-21",
  category: "Digital marketing",
  cover: "/images/blog/razmeshchenie-lendinga/cover.webp",
  excerpt:
    "Tres formas de colocar una landing: un dominio aparte, un subdominio o una URL en el sitio principal — pros, contras, SEO y cuándo elegir cada una según oferta y audiencia.",
  lead: [
    "Puedes poner una landing en un dominio nuevo, en un subdominio o como página dentro del sitio principal. No hay un «haz siempre esto» universal: la elección depende de la oferta, la cercanía a la marca actual y el canal de tráfico.",
    "Abajo: una comparación de tres esquemas — sin encuestas por las encuestas. Cómo armar bloques y copy vive en los artículos de landing y copy de landing; aquí es solo la pregunta de URL e infraestructura.",
  ],
  faq: [
    {
      q: "¿Qué elige la gente más a menudo para tráfico de pago?",
      a: "Cualquiera de los tres funciona si la velocidad y la oferta están sólidas. Para SEO, una página en el dominio principal con historial suele ser más conveniente.",
    },
    {
      q: "¿Un dominio aparte siempre es mejor?",
      a: "No. Lo necesitas cuando la oferta/marca es muy distinta o el sitio principal tiene mala reputación. Si no, pagas edad y enlaces otra vez desde cero.",
    },
    {
      q: "¿Un subdominio hereda el SEO del sitio principal?",
      a: "Los buscadores a menudo tratan un subdominio como cercano, pero no como «el mismo» sitio. Alimenta menos el comportamiento y el peso de enlaces del dominio principal que una página interna.",
    },
    {
      q: "¿Hay riesgo de filtro de afiliados en un dominio nuevo?",
      a: "Si copias contactos, plantilla y surtido del sitio principal, el riesgo es mayor. Un dominio nuevo es para otro proyecto/audiencia — no un clon «por una keyword en la URL».",
    },
    {
      q: "¿Una tienda online debe usar un dominio aparte por producto?",
      a: "Suele no: la ficha/categoría en un dominio es la landing. Un dominio aparte es para otro negocio o un test fuera del catálogo.",
    },
    {
      q: "¿Qué elegir para un test de hipótesis?",
      a: "Una URL rápida en el sitio principal, o un dominio aparte ligero si no puedes tocar prod. Lo que importa es medir la conversión — no una dirección bonita.",
    },
  ],
  sections: [
    {
      title: "Tres esquemas de colocación",
      level: 2,
      paras: [
        "Dominio aparte: `promo.example` → su propio sitio. Subdominio: `lp.site.com`. Dentro del sitio: `site.com/landing/` o una landing de servicio/promo en la estructura.",
        "Las encuestas de «qué es más popular» rara vez ayudan: una agencia y un servicio local tienen restricciones distintas. Mira cómo la oferta se liga a la marca y al canal (SEO vs paid search).",
      ],
      lists: [
        {
          intro: "Opciones:",
          items: [
            "un dominio nuevo",
            "un subdominio",
            "una página en el sitio principal",
          ],
        },
      ],
      links: [
        {
          label: "Landing page: qué es",
          href: "/es/blog/lending/",
        },
        {
          label: "Copy de landing page",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Dominio aparte",
      level: 2,
      paras: [
        "Plus — libertad de USP y diseño sin atarse al sitio principal; útil para una nueva dirección o un test limpio sin riesgo de romper prod. Puedes entregar el desarrollo a un contractor de forma aislada.",
        "Minus: edad y enlaces a cero, casi siempre ads de pago al inicio, coste de dominio/hosting y riesgo de filtro de afiliados si la página es un clon del negocio principal con los mismos contactos.",
      ],
      notes: [
        {
          title: "Cuándo encaja",
          kind: "tip",
          text: "Un producto nuevo para otra audiencia, un corte fuerte de tema respecto al sitio principal, o una mala reputación del dominio actual en búsqueda/ads.",
        },
      ],
    },
    {
      title: "Subdominio",
      level: 2,
      paras: [
        "A menudo se elige como compromiso: ligado a la marca, pero visual y técnicamente aparte. Útil para mantener varias promos (`promo1.`, `event.`) sin comprar un montón de dominios — dentro de límites de DNS/hosting.",
        "Minus: el SEO suele ser más débil que una página interna; las visitas apenas alimentan las métricas del sitio principal; hace falta setup en el mismo hosting/acceso. Para productos cercanos a menudo basta una sección en el dominio principal.",
      ],
    },
    {
      title: "Dentro del sitio principal",
      level: 2,
      paras: [
        "Pluses: edad y trust del dominio, enlaces internos desde catálogo y blog, un contador y CRM, mantenimiento más barato. Tiempo en página y conversiones trabajan en un solo loop. Para SEO suele ser el camino más práctico.",
        "Restricción — el tema y el UX deben alinearse con el sitio. Un concesionario no debería vender papelería desde la misma homepage tal cual; o una sección aparte con estructura honesta, u otro dominio.",
      ],
      lists: [
        {
          intro: "Encaja bien cuando:",
          items: [
            "la oferta es cercana al catálogo/servicios actuales",
            "necesitas orgánico y linking interno",
            "importan analytics unificados y marca en la URL",
          ],
        },
      ],
    },
    {
      title: "Cómo elegir en la práctica",
      level: 2,
      paras: [
        "Oferta cercana y un sitio que funciona → página en el dominio principal. Rama/línea cercana por tema pero necesita un «mundo» aparte → subdominio. Negocio nuevo u otra audiencia → dominio aparte. Para una tienda, las landings de producto casi siempre viven en el catálogo de un solo dominio.",
        "Una keyword en el nombre del dominio sola rara vez decide rankings. Importan más velocidad, oferta, tráfico y no clonar contactos. Si el sitio principal está bajo sanciones o quemado en cuentas de ads — un dominio nuevo se justifica como aislamiento, no como magia SEO.",
      ],
      links: [
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
        {
          label: "Dirección URL",
          href: "/es/blog/url-adres/",
        },
      ],
    },
  ],
  closing: [
    "Colocar una landing es una elección de infraestructura según oferta y canal. Por defecto refuerza el dominio principal; toma un subdominio o una dirección nueva cuando el tema, los riesgos o el aislamiento del desarrollo lo justifiquen.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "istochniki-trafika",
    "url-adres",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};

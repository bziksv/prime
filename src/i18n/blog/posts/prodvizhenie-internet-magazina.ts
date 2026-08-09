import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-internet-magazina — same structure as RU JSON. */
export const prodvizhenieInternetMagazinaEn: BlogPost = {
  slug: "prodvizhenie-internet-magazina",
  title: "How to promote an online store: tech, catalog structure, SEO",
  date: "2021-11-08",
  category: "SEO",
  cover: "/images/blog/prodvizhenie-internet-magazina/cover-en.webp",
  excerpt:
    "Online-store SEO: technical audit, catalog structure, internal links, keywords, title tags, product copy, and commercial trust signals.",
  lead: [
    "A site builder and filled product cards are only the start. A store grows in search when tech is solid, the catalog is clear, keywords map to real pages, and commercial trust signals are visible.",
    "Here’s a basic SEO outline for e-commerce. Getting the site ready and ranking for the keyword set are different stages: positions usually build over months after work starts — not a week after a few fixes.",
  ],
  faq: [
    {
      q: "Where do I start if the store is already live?",
      a: "With a technical audit and the keyword set: speed, indexing, duplicates — then category structure and title/description templates.",
    },
    {
      q: "How long until we rank on page one?",
      a: "Prep (tech, copy, structure) often takes weeks. Ranking for the keyword set is planned over 2–6 months of work — with no guaranteed date.",
    },
    {
      q: "Do categories need long SEO texts?",
      a: "A useful unique block is fine, especially near the top of the section. Stuffing and a wall of text for its own sake hurt more than they help.",
    },
    {
      q: "What matters more — product page or category?",
      a: "Both layers. Categories collect demand by groups; product pages by models and brands. Without internal links between them, the site is weaker.",
    },
    {
      q: "Is SEO enough on its own?",
      a: "For sales growth you usually also need ads, service, price, and stock. SEO is a demand channel — not a substitute for the offer.",
    },
  ],
  sections: [
    {
      title: "Technical audit",
      level: 2,
      paras: [
        "Start with what breaks indexing and UX: speed, mobile layout, status codes, redirects, HTTPS, sitemap, robots, filter duplicates, and pagination.",
      ],
      lists: [
        {
          intro: "Minimum check:",
          items: [
            "main templates load fast on mobile",
            "no mass 404s or redirect chains",
            "filters don’t spawn thousands of junk URLs in the index",
            "cart and checkout are stable",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Catalog structure",
      level: 2,
      paras: [
        "Classic path: home → categories → subcategories → product pages, plus utility pages (shipping, payment, contacts, about). Navigation should be straight: cart and catalog within one or two clicks.",
        "Look at competitors in the same niche — not global marketplaces as the only benchmark: how sections are named, brands, filters, stock.",
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Internal linking",
      level: 2,
      paras: [
        "Internal links help users and search: from a category to strong products, between related items, to brands and collections.",
        "Keep outbound links meaningful. Don’t push utility junk into the index.",
      ],
      lists: [
        {
          intro: "Useful blocks:",
          items: [
            "related products (3–5)",
            "recommended / bestsellers",
            "breadcrumbs and category menus",
            "brand and filter pages — under clear indexing rules",
          ],
        },
      ],
    },
    {
      title: "Keywords, titles, and copy",
      level: 2,
      paras: [
        "A store’s keyword set is clusters for categories, filters (where they fit), brands, and commercial phrasing like “buy / price / in stock.”",
        "Titles are unique per template: product + type + brand or attribute — no copy-paste. On product pages: photos, video, specs, careful keywords. On categories: a short useful text, not a wall of fluff.",
      ],
      lists: [
        {
          intro: "Practice for products and sections:",
          items: [
            "unique title per page",
            "brand and key attributes in the visible area",
            "category copy near the top — not a “SEO footer”",
            "keywords without stuffing",
            "media that help people choose the product",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "You can assemble the keyword set and templates in weeks. Share of phrases near page one and steady organic traffic take longer — plan on 2–6 months of active work, not “launch = rankings.”",
        },
      ],
    },
    {
      title: "Commercial and behavioral signals",
      level: 2,
      paras: [
        "Search looks beyond copy: contacts, payment and shipping options, stock, price, reviews, and checkout ease affect trust and conversion — and conversion feeds behavioral signals.",
      ],
      lists: [
        {
          intro: "What to strengthen on the site:",
          items: [
            "clear contacts and company details",
            "shipping, payment, and returns without fine print",
            "FAQ / Q&A on products",
            "snippets: title and description with benefit and keyword",
            "map / geo if pickup and local demand matter",
          ],
        },
      ],
    },
    {
      title: "Extras",
      level: 2,
      paras: [
        "Alongside SEO, feeds for ads, email/CRM, and comparison services can help — but the base is still tech + catalog + product pages.",
        "Don’t copy marketplace descriptions: uniqueness and help choosing the product beat keyword density.",
      ],
    },
  ],
};

/** ES overlay for prodvizhenie-internet-magazina — same structure as RU JSON / EN. */
export const prodvizhenieInternetMagazinaEs: BlogPost = {
  slug: "prodvizhenie-internet-magazina",
  title: "Cómo promover una tienda online: técnica, estructura de catálogo, SEO",
  date: "2021-11-08",
  category: "SEO",
  cover: "/images/blog/prodvizhenie-internet-magazina/cover.webp",
  excerpt:
    "SEO de tienda online: auditoría técnica, estructura de catálogo, linking interno, keywords, title tags, copy de producto y señales comerciales de confianza.",
  lead: [
    "Un constructor de sitios y fichas de producto rellenadas son solo el inicio. Una tienda crece en búsqueda cuando la técnica es sólida, el catálogo es claro, las keywords mapean a páginas reales y las señales comerciales de confianza se ven.",
    "Aquí va un esquema SEO básico para e-commerce. Preparar el sitio y rankear el set de keywords son etapas distintas: las posiciones suelen construirse en meses tras empezar el trabajo — no una semana después de unos cuantos arreglos.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si la tienda ya está en vivo?",
      a: "Con una auditoría técnica y el set de keywords: velocidad, indexación, duplicados — luego estructura de categorías y plantillas de title/description.",
    },
    {
      q: "¿Cuánto hasta rankear en primera página?",
      a: "La prep (técnica, copy, estructura) a menudo toma semanas. El ranking del set se planifica a 2–6 meses de trabajo — sin fecha garantizada.",
    },
    {
      q: "¿Las categorías necesitan textos SEO largos?",
      a: "Un bloque útil y único está bien, sobre todo cerca del inicio de la sección. El stuffing y un muro de texto por sí mismo duelen más de lo que ayudan.",
    },
    {
      q: "¿Qué importa más — ficha de producto o categoría?",
      a: "Ambas capas. Las categorías recolectan demanda por grupos; las fichas por modelos y marcas. Sin linking interno entre ellas, el sitio queda más flojo.",
    },
    {
      q: "¿Basta el SEO solo?",
      a: "Para crecer en ventas suele hacer falta también ads, servicio, precio y stock. El SEO es un canal de demanda — no un sustituto de la oferta.",
    },
  ],
  sections: [
    {
      title: "Auditoría técnica",
      level: 2,
      paras: [
        "Empieza por lo que rompe indexación y UX: velocidad, layout móvil, códigos de estado, redirects, HTTPS, sitemap, robots, duplicados de filtros y paginación.",
      ],
      lists: [
        {
          intro: "Chequeo mínimo:",
          items: [
            "las plantillas principales cargan rápido en móvil",
            "sin 404 masivos ni cadenas de redirect",
            "los filtros no generan miles de URLs basura en el índice",
            "carrito y checkout son estables",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Certificado SSL",
          href: "/es/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Estructura del catálogo",
      level: 2,
      paras: [
        "Camino clásico: home → categorías → subcategorías → fichas de producto, más páginas de utilidad (envío, pago, contactos, sobre nosotros). La navegación debe ser directa: carrito y catálogo en uno o dos clics.",
        "Mira competidores del mismo nicho — no marketplaces globales como único benchmark: cómo se nombran las secciones, marcas, filtros, stock.",
      ],
      links: [
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Linking interno",
      level: 2,
      paras: [
        "Los enlaces internos ayudan a usuarios y búsqueda: de una categoría a productos fuertes, entre ítems relacionados, a marcas y colecciones.",
        "Mantén los outbound con sentido. No empujes basura de utilidad al índice.",
      ],
      lists: [
        {
          intro: "Bloques útiles:",
          items: [
            "productos relacionados (3–5)",
            "recomendados / bestsellers",
            "breadcrumbs y menús de categoría",
            "páginas de marca y filtro — bajo reglas claras de indexación",
          ],
        },
      ],
    },
    {
      title: "Keywords, titles y copy",
      level: 2,
      paras: [
        "El set de keywords de una tienda son clusters para categorías, filtros (donde encajan), marcas y redacciones comerciales como «comprar / precio / en stock».",
        "Los titles son únicos por plantilla: producto + tipo + marca o atributo — sin copy-paste. En fichas: fotos, vídeo, specs, keywords con cuidado. En categorías: un texto útil corto, no un muro de relleno.",
      ],
      lists: [
        {
          intro: "Práctica para productos y secciones:",
          items: [
            "title único por página",
            "marca y atributos clave en el área visible",
            "copy de categoría cerca del inicio — no un «footer SEO»",
            "keywords sin stuffing",
            "media que ayude a elegir el producto",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "Puedes armar el set de keywords y las plantillas en semanas. La cuota de frases cerca de primera página y el tráfico orgánico estable tardan más — planifica 2–6 meses de trabajo activo, no «lanzamiento = rankings».",
        },
      ],
    },
    {
      title: "Señales comerciales y de comportamiento",
      level: 2,
      paras: [
        "La búsqueda mira más allá del copy: contactos, opciones de pago y envío, stock, precio, reseñas y facilidad de checkout afectan confianza y conversión — y la conversión alimenta señales de comportamiento.",
      ],
      lists: [
        {
          intro: "Qué reforzar en el sitio:",
          items: [
            "contactos claros y datos de la empresa",
            "envío, pago y devoluciones sin letra pequeña",
            "FAQ / Q&A en productos",
            "snippets: title y description con beneficio y keyword",
            "mapa / geo si importan pickup y demanda local",
          ],
        },
      ],
    },
    {
      title: "Extras",
      level: 2,
      paras: [
        "Junto al SEO, feeds para ads, email/CRM y servicios de comparación pueden ayudar — pero la base sigue siendo técnica + catálogo + fichas de producto.",
        "No copies descripciones de marketplaces: unicidad y ayuda para elegir el producto ganan a la densidad de keywords.",
      ],
    },
  ],
};

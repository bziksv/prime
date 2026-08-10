import type { BlogPost } from "../../../data/blog";

/** EN overlay for affiliat-filtr — same structure as RU JSON. */
export const affiliatFiltrEn: BlogPost = {
  slug: "affiliat-filtr",
  title: "Affiliate sites and the affiliate filter: how to spot it and stay clear",
  date: "2018-01-24",
  category: "SEO",
  cover: "/images/blog/affiliat-filtr/cover-en.webp",
  excerpt:
    "What affiliate sites mean in SEO, why search engines use an affiliate filter, which signals link domains, and how to run several projects safely without clones for the same queries.",
  lead: [
    "Affiliates in search terms are several sites of one owner (or tightly linked) fighting the same queries and looking like duplicate offers. Search may keep one in the SERP and cut or demote the rest of the group.",
    "Below: linkage signals, how to check competitors, and how not to trigger the filter. The goal isn’t “trick search with different names” but not spawning clones: either one strong site, or truly different brands and offers.",
  ],
  faq: [
    {
      q: "Is an affiliate site the same as a satellite?",
      a: "Related, not synonyms. Satellites more often push links or traffic to a main site. Affiliates are your own domains competing in one SERP.",
    },
    {
      q: "Are partner stores always treated as affiliates?",
      a: "Not always. Risk rises with shared contacts, template, and the same commercial queries. An honest partner network with different legal entities and assortments is another case.",
    },
    {
      q: "How does the affiliate filter show up?",
      a: "Often one site from the group stays in results for target queries; others drop or leave page one. Exact logic differs between Yandex and Google and changes over time.",
    },
    {
      q: "Will changing hosting fix an affiliate filter?",
      a: "One IP alone isn’t enough. Engines look at contacts, content, templates, webmaster accounts, behavior. Fix the bundle of signals — not one trait.",
    },
    {
      q: "What if a competitor copied the site?",
      a: "Document the copy, file webmaster/platform complaints, strengthen your original. Don’t answer with a clone network of your own.",
    },
  ],
  sections: [
    {
      title: "What affiliates are and why the filter exists",
      level: 2,
      paras: [
        "Classic scheme: several domains for one company and the same keywords to fill multiple page-one slots. For the user it’s the same offer — search limits that monopoly.",
        "Linkage signals (incomplete list): same phones, addresses, and details; copy-paste or weak rewrite; shared hosting/IP/NS; one design template; shared webmaster accounts. Some checks are automatic, some follow complaints.",
        "Yandex has historically cut group duplicates harder in the SERP; Google also fights lookalike grids, with different symptoms. Figures and exceptions from 2007–2010 aren’t current policy.",
        "The affiliate filter differs from “you’re spammy” or link sanctions: it hits competition among your own sites in results — it doesn’t always kill a domain entirely.",
      ],
      links: [
        {
          label: "Satellite sites",
          href: "/en/blog/sayty-satellity/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "How to stay clear and how to check",
      level: 2,
      paras: [
        "Best defense — don’t build a clone grid. Grow one main site. If business needs several domains (different brands, regions, lines) — make them distinct in offer, content, contacts, and keywords — not the same text on another URL.",
        "“Register domains under different people” as the main trick is a bad focus: it looks like hiding linkage, not a useful product. Legal separation of entities and brands must be real — not a paper mask.",
        "If you’re already hit: remove duplicates (contacts, texts, templates), split keyword targeting, then you can contact search support with fix facts. No removal guarantee; recovery often takes weeks to months.",
        "Checking competitors/clones: search unique text fragments (`intext`), matching phones and addresses, whois/NS where public, manual template review. SEO tools help but don’t replace eyes. Don’t treat “search has access to any private data” as an instruction.",
      ],
      lists: [
        {
          intro: "Checklist before a second site:",
          items: [
            "different offer/audience — not a clone",
            "unique texts and visuals",
            "contacts and legal data aren’t copy-paste",
            "keywords don’t fully match the main site",
            "no goal to take five slots in one SERP",
          ],
        },
      ],
      links: [
        {
          label: "Placing a landing page",
          href: "/en/blog/razmeshchenie-lendinga/",
        },
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
  ],
  related: [
    "sayty-satellity",
    "analiz-konkurentov",
    "razmeshchenie-lendinga",
    "operatory-poiska",
    "serm",
  ],
};

/** ES overlay for affiliat-filtr — same structure as RU JSON / EN. */
export const affiliatFiltrEs: BlogPost = {
  slug: "affiliat-filtr",
  title: "Sitios afiliados y el filtro de afiliados: cómo detectarlo y mantenerse fuera",
  date: "2018-01-24",
  category: "SEO",
  cover: "/images/blog/affiliat-filtr/cover-es.webp",
  excerpt:
    "Qué significan los sitios afiliados en SEO, por qué los buscadores usan un filtro de afiliados, qué señales vinculan dominios y cómo llevar varios proyectos con seguridad sin clones para las mismas queries.",
  lead: [
    "En términos de búsqueda, los afiliados son varios sitios de un mismo dueño (o muy ligados) que pelean las mismas queries y parecen ofertas duplicadas. La búsqueda puede dejar uno en la SERP y cortar o degradar al resto del grupo.",
    "Abajo: señales de vínculo, cómo revisar competidores y cómo no disparar el filtro. La meta no es «engañar a la búsqueda con nombres distintos» sino no generar clones: o un sitio fuerte, o marcas y ofertas de verdad distintas.",
  ],
  faq: [
    {
      q: "¿Un sitio afiliado es lo mismo que un satélite?",
      a: "Relacionados, no sinónimos. Los satélites suelen empujar enlaces o tráfico a un sitio principal. Los afiliados son tus propios dominios compitiendo en una misma SERP.",
    },
    {
      q: "¿Las tiendas partner siempre se tratan como afiliados?",
      a: "No siempre. El riesgo sube con contactos compartidos, plantilla y las mismas queries comerciales. Una red partner honesta con entidades legales y surtidos distintos es otro caso.",
    },
    {
      q: "¿Cómo se nota el filtro de afiliados?",
      a: "A menudo un sitio del grupo se queda en resultados para queries objetivo; otros caen o salen de la primera página. La lógica exacta difiere entre Yandex y Google y cambia con el tiempo.",
    },
    {
      q: "¿Cambiar el hosting arregla un filtro de afiliados?",
      a: "Una IP sola no basta. Los motores miran contactos, contenido, plantillas, cuentas de webmaster, comportamiento. Arregla el paquete de señales — no un solo rasgo.",
    },
    {
      q: "¿Y si un competidor copió el sitio?",
      a: "Documenta la copia, presenta quejas en webmaster/plataforma, refuerza tu original. No respondas con una red de clones propia.",
    },
  ],
  sections: [
    {
      title: "Qué son los afiliados y por qué existe el filtro",
      level: 2,
      paras: [
        "Esquema clásico: varios dominios para una empresa y las mismas keywords para llenar varios slots de primera página. Para el usuario es la misma oferta — la búsqueda limita ese monopolio.",
        "Señales de vínculo (lista incompleta): mismos teléfonos, direcciones y datos; copy-paste o rewrite débil; hosting/IP/NS compartidos; una plantilla de diseño; cuentas de webmaster compartidas. Algunos chequeos son automáticos, otros siguen quejas.",
        "Yandex históricamente ha cortado más duro los duplicados de grupo en la SERP; Google también pelea grids parecidas, con síntomas distintos. Cifras y excepciones de 2007–2010 no son la política actual.",
        "El filtro de afiliados difiere de «eres spam» o sanciones de enlaces: pega a la competencia entre tus propios sitios en resultados — no siempre mata un dominio por completo.",
      ],
      links: [
        {
          label: "Sitios satélite",
          href: "/es/blog/sayty-satellity/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Cómo mantenerse fuera y cómo comprobar",
      level: 2,
      paras: [
        "La mejor defensa — no montar una grid de clones. Crece un sitio principal. Si el negocio necesita varios dominios (marcas, regiones, líneas distintas) — hazlos distintos en oferta, contenido, contactos y keywords — no el mismo texto en otra URL.",
        "«Registrar dominios a nombre de distintas personas» como truco principal es un mal foco: parece ocultar el vínculo, no un producto útil. La separación legal de entidades y marcas debe ser real — no una máscara de papel.",
        "Si ya te pega: quita duplicados (contactos, textos, plantillas), separa el targeting de keywords y luego puedes contactar al soporte de búsqueda con hechos del arreglo. Sin garantía de retirada; la recuperación a menudo lleva de semanas a meses.",
        "Revisar competidores/clones: busca fragmentos únicos de texto (`intext`), teléfonos y direcciones coincidentes, whois/NS donde sea público, revisión manual de plantilla. Las tools SEO ayudan pero no sustituyen los ojos. No tomes «la búsqueda tiene acceso a cualquier dato privado» como instrucción.",
      ],
      lists: [
        {
          intro: "Checklist antes de un segundo sitio:",
          items: [
            "oferta/audiencia distinta — no un clon",
            "textos y visuales únicos",
            "contactos y datos legales no son copy-paste",
            "las keywords no coinciden del todo con el sitio principal",
            "sin meta de ocupar cinco slots en una SERP",
          ],
        },
      ],
      links: [
        {
          label: "Colocar una landing",
          href: "/es/blog/razmeshchenie-lendinga/",
        },
        {
          label: "Operadores de búsqueda",
          href: "/es/blog/operatory-poiska/",
        },
      ],
    },
  ],
  related: [
    "sayty-satellity",
    "analiz-konkurentov",
    "razmeshchenie-lendinga",
    "operatory-poiska",
    "serm",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-malyy-biznes — same structure as RU JSON. */
export const seoMalyyBiznesEn: BlogPost = {
  slug: "seo-malyy-biznes",
  title: "SEO for small business: where to start and what to skip",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/seo-malyy-biznes/cover-en.webp",
  excerpt:
    "Practical SEO priorities for a small business: local demand, speed, clear pages, keywords without empire-building — no “page one in a week” myth and no enterprise budget.",
  lead: [
    "A small business doesn’t need marketplace-scale SEO. It needs a clear site for real customer searches, decent speed, local visibility, and an honest timeline: prep in weeks; ranking growth planned over months (often 2–6 after work starts).",
    "Here’s what to prioritize on a modest budget — and what not to do. A DIY owner checklist lives in the self-SEO article; this piece is specifically about small-business priorities.",
  ],
  faq: [
    {
      q: "Where should I start if the budget is tiny?",
      a: "Tech and clarity first: mobile, speed, contacts, 5–15 priority landings for real demand, Google/Yandex business listings. Then content and links as capacity allows.",
    },
    {
      q: "How soon will we rank on page one?",
      a: "You can get the site ready in weeks. Sustained ranking for the commercial keyword set is planned over 2–6 months of systematic work — not “we launched, so we’re ranked.”",
    },
    {
      q: "Do I need thousands of keywords?",
      a: "No. A small project needs real intent coverage and strong pages more than a spreadsheet of long-tails with no demand in your area.",
    },
    {
      q: "Can social media replace SEO?",
      a: "Social is another channel. Search catches people who already intend to find a service or product. You usually need both, each for its job.",
    },
    {
      q: "Is schema markup required?",
      a: "It helps the snippet (organization, product, FAQ — by page type), but it doesn’t replace copy and links. Get the page right first, then add schema.",
    },
    {
      q: "Should I buy links in bulk?",
      a: "Mass buying for “volume” is risky. Prefer local mentions, partners, maps, and useful content.",
    },
    {
      q: "How is this different from “SEO from scratch”?",
      a: "That article is an entry to the craft. This one is owner priorities: what to do first with limited hands and budget.",
    },
    {
      q: "Is a blog mandatory?",
      a: "Not always. If landings and local demand cover your services, the blog is secondary. Write when you have expertise and the capacity to keep it up.",
    },
  ],
  sections: [
    {
      title: "Realistic expectations for a small business",
      level: 2,
      paras: [
        "SEO is cumulative: tech and structure → demand-led content → authority and real user behavior. “Pick keywords overnight and wake up on page one” doesn’t happen.",
        "Plan in stages: get the site in order (weeks), then regularly strengthen priority URLs. Rankings and calls grow unevenly — watch clusters, not one phrase.",
      ],
      lists: [
        {
          intro: "What counts as early success:",
          items: [
            "the site loads fast on a phone",
            "pages exist for main services and areas",
            "map listings are filled in",
            "search leads start to accumulate",
            "keyword visibility grows month to month",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Speed and mobile — a cheap foundation",
      level: 2,
      paras: [
        "Small-business customers often arrive on a phone “here and now.” Heavy sliders, uncompressed photos, and pop-ups cut both SEO and leads.",
        "Check mobile views of key pages, compress images, remove extra plugins. Use a CDN if you need it — not as a fetish. Start with simple hosting and a light template.",
      ],
      lists: [
        {
          intro: "Quick wins:",
          items: [
            "responsive layout and readable type",
            "compressed images",
            "a clickable phone number in the header",
            "a form without friction",
            "HTTPS without errors",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Local demand and trust",
      level: 2,
      paras: [
        "For “nearby” services, city/area queries and maps are strong. A business listing, consistent NAP on the site and directories, and real reviews often bring leads faster than chasing head terms without a landing.",
        "On the site: address, map, service area, photos of the place or team. Don’t hide contacts just to force a form fill.",
      ],
      lists: [
        {
          intro: "Local essentials:",
          items: [
            "service pages plus geo if you truly work there",
            "Google Business / Yandex Business",
            "reviews without fake ratings",
            "the same name, address, and phone everywhere",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Keywords without empire-building",
      level: 2,
      paras: [
        "Collect demand markers: how clients name the service, plus the city. Cluster into real pages — don’t spawn thin URLs for every long-tail.",
        "How people speak matters more than bureaucratic wording. Check suggestions, keyword tools, on-site search, and questions your sales team hears.",
      ],
      lists: [
        {
          intro: "SMB practice:",
          items: [
            "15–50 priority phrases to start is fine",
            "one page — one main intent",
            "services with margin and demand first",
            "a blog only if you can keep a cadence",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Content, expertise, and the snippet",
      level: 2,
      paras: [
        "A small business’s edge is live expertise: cases, FAQ answers, clear prices and terms. Quotes and links to real norms (laws, standards, vendors) fit when relevant — not as an SEO checkbox.",
        "Organization/service schema helps the snippet but doesn’t replace copy. Write titles and descriptions for a human click.",
      ],
      lists: [
        {
          intro: "Content that pays off:",
          items: [
            "FAQ with real objections",
            "before/after photos of the work",
            "warranty and payment terms",
            "updating old pages beats a pile of new thin ones",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "What to postpone — and what to avoid",
      level: 2,
      paras: [
        "Postpone: endless audits for their own sake, buying “1000 links,” copying a niche giant’s structure, a blog with no plan. Avoid fake engagement schemes and guarantees of page one “by Friday.”",
        "If hands are few, outsource surgically: tech + 10 landings + maps. A stable minimum beats a failed “full cycle like a ten-person agency.”",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "“#1 in 7 days” in the contract",
            "secret link exchanges with no report",
            "edits only for keyword density",
            "ignoring mobile and click-to-call",
          ],
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Once a month check search leads, keyword visibility, speed, and map reviews. Average position alone, without leads, is a weak compass.",
        },
      ],
      links: [
        {
          label: "Young sites",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "seo-s-nulya",
    "regionalnoe-seo",
    "google-biznes",
    "molodoy-sayt",
  ],
};

/** ES overlay for seo-malyy-biznes — same structure as RU JSON / EN. */
export const seoMalyyBiznesEs: BlogPost = {
  slug: "seo-malyy-biznes",
  title: "SEO para pequeño negocio: por dónde empezar y qué saltar",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/seo-malyy-biznes/cover-es.webp",
  excerpt:
    "Prioridades SEO prácticas para un pequeño negocio: demanda local, velocidad, páginas claras, keywords sin construir un imperio — sin el mito de «primera página en una semana» y sin presupuesto enterprise.",
  lead: [
    "Un pequeño negocio no necesita SEO a escala de marketplace. Necesita un sitio claro para búsquedas reales de clientes, velocidad decente, visibilidad local y un plazo honesto: prep en semanas; crecimiento de rankings planificado a meses (a menudo 2–6 tras el arranque del trabajo).",
    "Aquí qué priorizar con presupuesto modesto — y qué no hacer. Un checklist DIY del dueño vive en el artículo de SEO por cuenta propia; esta pieza es específicamente sobre prioridades de pequeño negocio.",
  ],
  faq: [
    {
      q: "¿Por dónde empiezo si el presupuesto es mínimo?",
      a: "Primero tech y claridad: móvil, velocidad, contactos, 5–15 landings prioritarias para demanda real, fichas de negocio en Google/Yandex. Luego contenido y enlaces según capacidad.",
    },
    {
      q: "¿Cuánto tardamos en rankear en primera página?",
      a: "Puedes dejar el sitio listo en semanas. Ranking sostenido del set comercial de keywords se planifica a 2–6 meses de trabajo sistemático — no «lanzamos, luego ya rankeamos».",
    },
    {
      q: "¿Necesito miles de keywords?",
      a: "No. Un proyecto pequeño necesita cobertura de intención real y páginas fuertes más que una hoja de long-tails sin demanda en tu zona.",
    },
    {
      q: "¿Pueden las redes sustituir al SEO?",
      a: "Social es otro canal. La búsqueda atrapa a quien ya tiene intención de encontrar un servicio o producto. Suele hacer falta ambos, cada uno por su trabajo.",
    },
    {
      q: "¿Es obligatorio el schema markup?",
      a: "Ayuda al snippet (organización, producto, FAQ — según tipo de página), pero no sustituye copy ni enlaces. Deja la página bien primero, luego añade schema.",
    },
    {
      q: "¿Debo comprar enlaces a granel?",
      a: "La compra masiva por «volumen» es arriesgada. Prefiere menciones locales, partners, mapas y contenido útil.",
    },
    {
      q: "¿En qué se diferencia de «SEO desde cero»?",
      a: "Ese artículo es una entrada al oficio. Este son prioridades del dueño: qué hacer primero con pocas manos y poco presupuesto.",
    },
    {
      q: "¿Es obligatorio un blog?",
      a: "No siempre. Si landings y demanda local cubren tus servicios, el blog es secundario. Escribe cuando tengas expertise y capacidad de mantenerlo.",
    },
  ],
  sections: [
    {
      title: "Expectativas realistas para un pequeño negocio",
      level: 2,
      paras: [
        "El SEO es acumulativo: tech y estructura → contenido guiado por demanda → autoridad y comportamiento real del usuario. «Elegir keywords de un día para otro y despertar en primera página» no pasa.",
        "Planifica por etapas: ordena el sitio (semanas), luego refuerza con regularidad las URLs prioritarias. Rankings y llamadas crecen de forma irregular — mira clusters, no una sola frase.",
      ],
      lists: [
        {
          intro: "Qué cuenta como éxito temprano:",
          items: [
            "el sitio carga rápido en un teléfono",
            "existen páginas para servicios y zonas principales",
            "las fichas de mapa están rellenas",
            "empiezan a acumularse leads de búsqueda",
            "la visibilidad de keywords crece mes a mes",
          ],
        },
      ],
      links: [
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Velocidad y móvil — una base barata",
      level: 2,
      paras: [
        "Los clientes de pequeño negocio a menudo llegan en el teléfono «aquí y ahora». Sliders pesados, fotos sin comprimir y pop-ups cortan SEO y leads.",
        "Revisa vistas móviles de páginas clave, comprime imágenes, quita plugins de más. Usa CDN si hace falta — no como fetiche. Empieza con hosting simple y una plantilla ligera.",
      ],
      lists: [
        {
          intro: "Ganancias rápidas:",
          items: [
            "layout responsive y tipografía legible",
            "imágenes comprimidas",
            "un teléfono clicable en el header",
            "un formulario sin fricción",
            "HTTPS sin errores",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Demanda local y confianza",
      level: 2,
      paras: [
        "Para servicios «cerca», las queries de ciudad/zona y los mapas son fuertes. Una ficha de negocio, NAP coherente en el sitio y directorios, y reseñas reales a menudo traen leads más rápido que perseguir términos head sin landing.",
        "En el sitio: dirección, mapa, área de servicio, fotos del lugar o del equipo. No escondas contactos solo para forzar un formulario.",
      ],
      lists: [
        {
          intro: "Esenciales locales:",
          items: [
            "páginas de servicio más geo si de verdad trabajas ahí",
            "Google Business / Yandex Business",
            "reseñas sin ratings falsos",
            "el mismo nombre, dirección y teléfono en todas partes",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
        {
          label: "SEO regional",
          href: "/es/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Keywords sin construir un imperio",
      level: 2,
      paras: [
        "Recoge marcadores de demanda: cómo nombran el servicio los clientes, más la ciudad. Agrupa en páginas reales — no spawnees URLs thin por cada long-tail.",
        "Cómo habla la gente importa más que la redacción burocrática. Revisa sugerencias, tools de keywords, búsqueda on-site y preguntas que oye el equipo comercial.",
      ],
      lists: [
        {
          intro: "Práctica SMB:",
          items: [
            "15–50 frases prioritarias para empezar está bien",
            "una página — una intención principal",
            "primero servicios con margen y demanda",
            "un blog solo si puedes mantener el ritmo",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Contenido, expertise y el snippet",
      level: 2,
      paras: [
        "La ventaja de un pequeño negocio es expertise viva: casos, respuestas FAQ, precios y términos claros. Citas y enlaces a normas reales (leyes, estándares, vendors) encajan cuando son relevantes — no como checkbox SEO.",
        "El schema de organización/servicio ayuda al snippet pero no sustituye el copy. Escribe titles y descriptions para un clic humano.",
      ],
      lists: [
        {
          intro: "Contenido que compensa:",
          items: [
            "FAQ con objeciones reales",
            "fotos before/after del trabajo",
            "garantía y términos de pago",
            "actualizar páginas viejas gana a un montón de thin nuevas",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/es/blog/snippet/",
        },
        {
          label: "Longitud del title",
          href: "/es/blog/dlina-title/",
        },
      ],
    },
    {
      title: "Qué posponer — y qué evitar",
      level: 2,
      paras: [
        "Posponer: audits infinitos por sí mismos, comprar «1000 enlaces», copiar la estructura de un gigante del nicho, un blog sin plan. Evita esquemas de engagement falso y garantías de primera página «para el viernes».",
        "Si hay pocas manos, externaliza con cirugía: tech + 10 landings + mapas. Un mínimo estable gana a un «ciclo completo como una agencia de diez» fallido.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "«n.º 1 en 7 días» en el contrato",
            "intercambios secretos de enlaces sin reporte",
            "edits solo por densidad de keywords",
            "ignorar móvil y click-to-call",
          ],
        },
      ],
      notes: [
        {
          title: "Tip práctico",
          text: "Una vez al mes revisa leads de búsqueda, visibilidad de keywords, velocidad y reseñas de mapa. La posición media sola, sin leads, es una brújula débil.",
        },
      ],
      links: [
        {
          label: "Sitios jóvenes",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "seo-s-nulya",
    "regionalnoe-seo",
    "google-biznes",
    "molodoy-sayt",
  ],
};

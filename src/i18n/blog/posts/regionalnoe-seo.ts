import type { BlogPost } from "../../../data/blog";

/** EN overlay for regionalnoe-seo — same structure as RU JSON. */
export const regionalnoeSeoEn: BlogPost = {
  slug: "regionalnoe-seo",
  title: "Regional SEO: how to promote a site in local markets",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/regionalnoe-seo/cover-en.webp",
  excerpt:
    "How regional SEO differs from nationwide work, how to set region signals in Webmaster and on the site, and how to run two or three cities without confusion.",
  lead: [
    "Regional SEO targets search in specific cities and areas: local queries, maps, contacts, and landings for branches or service zones.",
    "Below: how it differs from nationwide promotion, setup, city pages, maps, and typical mistakes. Local page-one share is planned over months of work — not a region checkbox in a panel.",
  ],
  faq: [
    {
      q: "Is setting a region in Webmaster enough?",
      a: "No. You need content, contacts, commercial factors, and often separate landings. The panel is one signal among many.",
    },
    {
      q: "How do I promote two or three cities?",
      a: "Separate pages (or another agreed scheme), unique copy and NAP — not copy-paste with city-name find/replace.",
    },
    {
      q: "Is Google regional too?",
      a: "Yes — location and local signals matter. Tools and maps differ; the locality + relevance logic is the same.",
    },
    {
      q: "Do I need reviews and map listings?",
      a: "For local business — often critical: maps, directories, consistent NAP, replies to reviews.",
    },
    {
      q: "Can one text cover every city?",
      a: "Poor idea. Reflect real services, cases, addresses, timelines, and delivery terms — don’t only swap the city name.",
    },
    {
      q: "Subdomains (city.site.com) or folders (/city/)?",
      a: "Both exist. Uniqueness, ties to the main site, and avoiding thin templates matter more than a magic URL scheme.",
    },
    {
      q: "What about services with no office (travel or delivery)?",
      a: "State the service area honestly; city pages only where you really work. A fake address hurts more than an honest zone.",
    },
    {
      q: "When should I expect results?",
      a: "Page prep — about a month as a guide. City-core page-one share is planned for 2–6 months after work starts — with no date guarantee.",
    },
  ],
  sections: [
    {
      title: "Region vs nationwide",
      level: 2,
      paras: [
        "A nationwide query is broader and more competitive. A regional one brings a nearby audience, so it often converts to a visit or call — and needs different keywords: “service + city,” districts, metro, delivery across the area.",
        "Locality isn’t a word in the title; it’s a bundle of signals: real presence or service area, a branch page, contacts, maps, reviews, and clear terms for that city.",
      ],
      lists: [
        {
          intro: "What strengthens the region:",
          items: [
            "address and phone on the site",
            "contacts / branch page",
            "local cases and delivery terms",
            "presence in maps and directories",
            "reviews with owner replies",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Keywords and commercial factors",
      level: 2,
      paras: [
        "Build a location-based keyword set: not only “service + city,” but districts, “near me,” and local brand wording. Cluster so one landing maps to one main city/service intent — without cannibalization between branches.",
        "For local SERPs, commercial factors often beat one more paragraph: price cues, payment options, guarantees, venue photos, hours, and who takes the order.",
      ],
      lists: [
        {
          intro: "Into the core and onto the page:",
          items: [
            "service + city / district",
            "delivery and lead times by zone",
            "branch differences (if any)",
            "no fake “we serve every city in the country” on one page",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
      ],
    },
    {
      title: "How to set region and site",
      level: 2,
      paras: [
        "Set the region in Yandex Webmaster where it applies, and align it with the real business — not “Moscow” if you only serve the region. Build landings, check commercial blocks, and break analytics out by city when needed.",
        "Prep — tech, structure, contacts, copy, and CTAs — usually takes about a month. That’s starting the work, not a promise of instant rankings.",
      ],
      lists: [
        {
          intro: "Setup checklist:",
          items: [
            "NAP identical on site, maps, and directories",
            "Webmaster region matches reality",
            "unique city copy",
            "local snippets without keyword stuffing",
            "goals / calls separable by city",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep of regional pages — weeks. City-core page-one share is planned for 2–6 months after promotion starts.",
        },
      ],
    },
    {
      title: "City and branch pages",
      level: 2,
      paras: [
        "A separate page makes sense when the city has a real difference: office, team, delivery zone, assortment, cases, or prices. The user should find more than an auto-replaced place name.",
        "Put NAP in a consistent form, directions, hours, and a clear CTA. Those details should match maps. Don’t create dozens of thin URLs for every village you never visit.",
      ],
      lists: [
        {
          intro: "What belongs on the landing:",
          items: [
            "real contacts",
            "services and terms for the city",
            "local cases or reviews",
            "photo / map",
            "form or clickable phone",
          ],
        },
      ],
      tables: [
        {
          caption: "When a separate page is needed",
          headers: ["Situation", "Decision"],
          rows: [
            ["Office / warehouse in the city", "Separate page + map"],
            ["Regular delivery / on-site visits", "Zone page with terms"],
            [
              "One-off order from a nearby area",
              "Don’t create a URL for the keyword",
            ],
            ["Network of 2–3 branches", "A page each + shared NAP control"],
          ],
        },
      ],
    },
    {
      title: "Maps, directories, and reviews",
      level: 2,
      paras: [
        "In many niches, clicks from the local pack and map cards matter as much as classic organic results. Create and verify profiles; keep hours, photos, and review replies current.",
        "Consistent NAP beats one more directory. Address and phone mismatches between site and map erode trust and hurt local visibility.",
      ],
      lists: [
        {
          intro: "Local essentials:",
          items: [
            "Yandex Maps / Google Business Profile (by audience)",
            "2GIS and niche directories — by vertical",
            "ask for a review after a successful deal",
            "reply to negatives without escalating",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Avoid fake addresses, doorway “city1…city50” pages, hidden city-list text, and thin templates. Local SERPs reward usefulness — not a simulated office.",
        "Don’t promise page one in every region after a panel toggle. Rankings grow month by month; the planned horizon for a core is 2–6 months after promotion starts.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "checkbox address with no office",
            "copy-paste with city swap",
            "page-one promises in all regions at once",
            "indexing thousands of filter URLs as “districts”",
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
      title: "Measuring local demand",
      level: 2,
      paras: [
        "Track not only rankings but calls, leads, map directions, and lead quality. Assign goals and tagging per city so demand isn’t one blob of “organic.”",
        "Check SERPs with location and device in mind. Compare clusters and inquiries over time — not one phrase on one day.",
      ],
      lists: [
        {
          intro: "City report metrics:",
          items: [
            "core visibility",
            "landing traffic",
            "leads and calls",
            "page conversion",
            "map-card dynamics",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "google-biznes",
    "otzyvy-dlya-prodazh",
    "samostoyatelnoe-seo",
    "kannibalizatsiya-zaprosov",
    "yandeks-vebmaster",
  ],
};

/** ES overlay for regionalnoe-seo — same structure as RU JSON / EN. */
export const regionalnoeSeoEs: BlogPost = {
  slug: "regionalnoe-seo",
  title: "SEO regional: cómo promover un sitio en mercados locales",
  date: "2021-03-18",
  category: "SEO",
  cover: "/images/blog/regionalnoe-seo/cover-es.webp",
  excerpt:
    "En qué se diferencia el SEO regional del trabajo a escala nacional, cómo fijar señales de región en Webmaster y en el sitio, y cómo llevar dos o tres ciudades sin confusión.",
  lead: [
    "El SEO regional apunta a la búsqueda en ciudades y zonas concretas: consultas locales, mapas, contactos y landings de sucursales o zonas de servicio.",
    "Abajo: en qué se diferencia de la promoción nacional, setup, páginas de ciudad, mapas y errores típicos. La cuota de núcleo en primera página se planifica en meses de trabajo — no con un checkbox de región en un panel.",
  ],
  faq: [
    {
      q: "¿Basta con fijar la región en Webmaster?",
      a: "No. Hacen falta contenido, contactos, factores comerciales y a menudo landings aparte. El panel es una señal entre muchas.",
    },
    {
      q: "¿Cómo promover dos o tres ciudades?",
      a: "Páginas separadas (u otro esquema acordado), copy único y NAP — no copy-paste con buscar/reemplazar el nombre de la ciudad.",
    },
    {
      q: "¿Google también es regional?",
      a: "Sí — importan la ubicación y las señales locales. Herramientas y mapas difieren; la lógica de localidad + relevancia es la misma.",
    },
    {
      q: "¿Hacen falta reseñas y fichas en mapas?",
      a: "Para negocio local — a menudo crítico: mapas, directorios, NAP consistente, respuestas a reseñas.",
    },
    {
      q: "¿Un solo texto puede cubrir todas las ciudades?",
      a: "Mala idea. Refleja servicios reales, casos, direcciones, plazos y condiciones de entrega — no solo cambies el nombre de la ciudad.",
    },
    {
      q: "¿Subdominios (ciudad.sitio.com) o carpetas (/ciudad/)?",
      a: "Existen ambos. Importan más la unicidad, el vínculo con el sitio principal y evitar plantillas finas que un esquema mágico de URL.",
    },
    {
      q: "¿Y los servicios sin oficina (desplazamiento o delivery)?",
      a: "Declara la zona de servicio con honestidad; páginas de ciudad solo donde trabajas de verdad. Una dirección falsa duele más que una zona honesta.",
    },
    {
      q: "¿Cuándo esperar resultados?",
      a: "Preparación de páginas — alrededor de un mes como guía. La cuota de núcleo local en primera página se planifica a 2–6 meses tras el inicio del trabajo — sin garantía de fecha.",
    },
  ],
  sections: [
    {
      title: "Región vs escala nacional",
      level: 2,
      paras: [
        "Una consulta nacional es más amplia y competitiva. Una regional trae audiencia cercana, así que a menudo convierte en visita o llamada — y pide keywords distintas: «servicio + ciudad», distritos, metro, delivery en la zona.",
        "La localidad no es una palabra en el title; es un paquete de señales: presencia real o zona de servicio, página de sucursal, contactos, mapas, reseñas y condiciones claras para esa ciudad.",
      ],
      lists: [
        {
          intro: "Qué refuerza la región:",
          items: [
            "dirección y teléfono en el sitio",
            "página de contactos / sucursal",
            "casos locales y condiciones de entrega",
            "presencia en mapas y directorios",
            "reseñas con respuesta del dueño",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/es/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Keywords y factores comerciales",
      level: 2,
      paras: [
        "Arma un set de keywords por ubicación: no solo «servicio + ciudad», también distritos, «cerca de mí» y wording de marca local. Agrupa para que una landing mapee a una intención principal ciudad/servicio — sin canibalización entre sucursales.",
        "En SERPs locales, los factores comerciales a menudo ganan a un párrafo más: señales de precio, opciones de pago, garantías, fotos del local, horario y quién toma el pedido.",
      ],
      lists: [
        {
          intro: "Al núcleo y a la página:",
          items: [
            "servicio + ciudad / distrito",
            "entrega y plazos por zona",
            "diferencias entre sucursales (si las hay)",
            "nada de «atendemos todas las ciudades del país» falso en una página",
          ],
        },
      ],
      links: [
        {
          label: "Investigación de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Canibalización de keywords",
          href: "/es/blog/kannibalizatsiya-zaprosov/",
        },
      ],
    },
    {
      title: "Cómo fijar región y sitio",
      level: 2,
      paras: [
        "Fija la región en Yandex Webmaster donde aplique y alíneala con el negocio real — no «Moscú» si solo sirves la región. Construye landings, revisa bloques comerciales y separa la analítica por ciudad cuando haga falta.",
        "La preparación — técnica, estructura, contactos, copy y CTAs — suele llevar alrededor de un mes. Eso es arrancar el trabajo, no una promesa de rankings al instante.",
      ],
      lists: [
        {
          intro: "Checklist de setup:",
          items: [
            "NAP idéntico en sitio, mapas y directorios",
            "región en Webmaster alineada con la realidad",
            "copy de ciudad único",
            "snippets locales sin keyword stuffing",
            "goals / llamadas separables por ciudad",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Preparación de páginas regionales — semanas. La cuota de núcleo de ciudad en primera página se planifica a 2–6 meses tras el inicio de la promoción.",
        },
      ],
    },
    {
      title: "Páginas de ciudad y sucursal",
      level: 2,
      paras: [
        "Una página aparte tiene sentido cuando la ciudad tiene una diferencia real: oficina, equipo, zona de entrega, surtido, casos o precios. El usuario debería encontrar más que un topónimo auto-reemplazado.",
        "Pon NAP en forma consistente, cómo llegar, horario y un CTA claro. Esos detalles deben coincidir con los mapas. No crees docenas de URLs finas para cada pueblo que nunca visitas.",
      ],
      lists: [
        {
          intro: "Qué va en la landing:",
          items: [
            "contactos reales",
            "servicios y condiciones para la ciudad",
            "casos o reseñas locales",
            "foto / mapa",
            "formulario o teléfono clicable",
          ],
        },
      ],
      tables: [
        {
          caption: "Cuándo hace falta una página aparte",
          headers: ["Situación", "Decisión"],
          rows: [
            ["Oficina / almacén en la ciudad", "Página aparte + mapa"],
            ["Entrega / visitas in situ regulares", "Página de zona con condiciones"],
            [
              "Pedido puntual desde una zona cercana",
              "No crees una URL por la keyword",
            ],
            ["Red de 2–3 sucursales", "Una página cada una + control NAP compartido"],
          ],
        },
      ],
    },
    {
      title: "Mapas, directorios y reseñas",
      level: 2,
      paras: [
        "En muchos nichos, los clics del local pack y las fichas de mapa importan tanto como los resultados orgánicos clásicos. Crea y verifica perfiles; mantén horario, fotos y respuestas a reseñas al día.",
        "Un NAP consistente gana a un directorio más. Desajustes de dirección y teléfono entre sitio y mapa erosionan confianza y dañan la visibilidad local.",
      ],
      lists: [
        {
          intro: "Esenciales locales:",
          items: [
            "Yandex Maps / Google Business Profile (según audiencia)",
            "2GIS y directorios de nicho — por vertical",
            "pide una reseña tras un trato exitoso",
            "responde a negativos sin escalar",
          ],
        },
      ],
      links: [
        {
          label: "Reseñas para ventas",
          href: "/es/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Qué evitar",
      level: 2,
      paras: [
        "Evita direcciones falsas, páginas doorway «ciudad1…ciudad50», texto oculto con listas de ciudades y plantillas finas. Las SERPs locales premian utilidad — no una oficina simulada.",
        "No prometas primera página en cada región tras un toggle del panel. Los rankings crecen mes a mes; el horizonte planificado para un núcleo es 2–6 meses tras el inicio de la promoción.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "dirección de checkbox sin oficina",
            "copy-paste con cambio de ciudad",
            "promesas de primera página en todas las regiones a la vez",
            "indexar miles de URLs de filtro como «distritos»",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Medir la demanda local",
      level: 2,
      paras: [
        "Sigue no solo rankings sino llamadas, leads, indicaciones en el mapa y calidad del lead. Asigna goals y tagging por ciudad para que la demanda no sea un blob de «orgánico».",
        "Revisa SERPs con ubicación y dispositivo en mente. Compara clusters e inquiries en el tiempo — no una frase en un día.",
      ],
      lists: [
        {
          intro: "Métricas del informe por ciudad:",
          items: [
            "visibilidad del núcleo",
            "tráfico de la landing",
            "leads y llamadas",
            "conversión de la página",
            "dinámica de la ficha en mapas",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "google-biznes",
    "otzyvy-dlya-prodazh",
    "samostoyatelnoe-seo",
    "kannibalizatsiya-zaprosov",
    "yandeks-vebmaster",
  ],
};

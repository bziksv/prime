import type { BlogPost } from "../../../data/blog";

/** EN overlay for region-sayta — same structure as RU JSON. */
export const regionSaytaEn: BlogPost = {
  slug: "region-sayta",
  title: "How to set a site’s region in Yandex",
  date: "2017-07-04",
  category: "SEO",
  cover: "/images/blog/region-sayta/cover-en.webp",
  excerpt:
    "How Yandex reads a site’s region: on-site signals, Webmaster, and a Business/Maps listing — without Yandex.Catalog or fake addresses.",
  lead: [
    "A site’s region affects where you show up for location-based queries. Assigning a region isn’t a magic page-one checkbox — it’s aligning contacts, maps, content, and webmaster settings so they tell one honest story.",
    "Below: what still works today — signals from the site itself, Yandex Webmaster, and a business listing. Yandex.Catalog is closed — don’t chase it for regions. Multi-city strategy belongs in the regional SEO guide.",
  ],
  faq: [
    {
      q: "Is setting a region in Webmaster enough?",
      a: "No. You need real contacts, consistent NAP, often a map/business listing, and city content. The panel is one signal.",
    },
    {
      q: "Can a toll-free number make me “nationwide”?",
      a: "A toll-free number alone doesn’t equal ranking in every city. For local demand, address, service area, and landings for real cities matter more.",
    },
    {
      q: "Does Yandex.Catalog still help with regions?",
      a: "No. The Catalog is closed. Don’t buy “YACA registration for regions.”",
    },
    {
      q: "How long until the region applies?",
      a: "From days to a few weeks — depends on data checks and crawl. That isn’t page-one timing: city-core rankings are planned over months.",
    },
    {
      q: "What if I list someone else’s address?",
      a: "Risk of rejection, directory removal, and lost trust. You need real grounds and verifiable data.",
    },
    {
      q: "Do I need to set Google as well?",
      a: "Yes, as a separate track: Search Console / Business Profile. Locality logic is similar; consoles differ.",
    },
    {
      q: "Where can I learn more about multi-city SEO?",
      a: "In the regional SEO article: keywords, landings, maps, and multi-city mistakes.",
    },
  ],
  sections: [
    {
      title: "Why a site needs a region",
      level: 2,
      paras: [
        "For queries with local intent (“service + city,” “nearby”), Yandex weighs where the business operates. If signals are blurry or conflict, you lose ground to sites with aligned address, map, and contacts.",
        "A panel region setting doesn’t replace content and commercial factors. It amplifies honest locality — it isn’t a substitute for an SEO strategy.",
      ],
      lists: [
        {
          intro: "Locality signals:",
          items: [
            "address and phone on the site (NAP)",
            "contacts / branch page",
            "Yandex Business / Maps listing",
            "local content and operating terms",
            "Webmaster settings and data",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Preparing contacts and listings — days to weeks as a guide. Regional-core page-one share is planned for 2–6 months after work starts, with no date guarantee.",
        },
      ],
    },
    {
      title: "Automatic detection",
      level: 2,
      paras: [
        "Even without a manual setting, the bot may infer region from phone codes, addresses on Contacts, city mentions in copy, and other traces. That’s why an empty site without an address reads poorly as a local business.",
        "Listing a dozen cities on one page without real presence won’t make you the leader everywhere. Several cities need an honest branch or service-area setup — see regional SEO.",
      ],
      lists: [
        {
          intro: "What helps auto-detection:",
          items: [
            "a single address and hours",
            "a city or clear contact phone",
            "directions / a map on the site",
            "data matching the organization listing",
          ],
        },
      ],
    },
    {
      title: "Region via Yandex Webmaster",
      level: 2,
      paras: [
        "Confirm site ownership in Yandex Webmaster. In the current UI find settings tied to region / representation (labels change — check help and the site sections in the panel).",
        "Set a region that matches the business and link a page with real contacts. A made-up address raises the risk of rejection. After saving, wait for checks and recrawl — this won’t deliver instant page one.",
      ],
      lists: [
        {
          intro: "Before you submit:",
          items: [
            "site ownership confirmed",
            "contacts page open and indexable",
            "address/phone match the listing",
            "region no wider than the real service area without grounds",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster — panel overview",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Listing in Yandex Business and Directory",
      level: 2,
      paras: [
        "Local results and the contacts block often rest on an organization listing (Yandex Business / Maps / Directory-era logic). Phone confirmation and address checks make fakes harder than just typing a city in Webmaster.",
        "Tie site, phone, and address in the listing to what’s on the site. After approval, keep hours, photos, and reviews — a dead listing is weaker than a live one.",
      ],
      links: [
        {
          label: "Yandex Directory / business listing",
          href: "/en/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Why not Yandex.Catalog",
      level: 2,
      paras: [
        "Older guides listed Yandex.Catalog as a fourth way: paid add and several regions. The service is closed; site intake stopped.",
        "Don’t pay for “regions via YACA.” The current replacement is Webmaster + map listings + honest landings. The shutdown story is separate.",
      ],
      links: [
        {
          label: "Yandex.Catalog shutdown",
          href: "/en/blog/yandeks-katalog/",
        },
      ],
    },
    {
      title: "Checklist: region aligned",
      level: 2,
      paras: [
        "Keep one consistent story: where you actually work, which contacts you show, and what Yandex sees in Webmaster and on the map.",
        "If there are several cities — don’t try to cover the country with one contacts paragraph. Split branches or zones across pages and listings.",
      ],
      tables: [
        {
          caption: "Method → role today",
          headers: ["Method", "Role"],
          rows: [
            ["Automation from the site", "Base: NAP, contacts, copy"],
            ["Yandex Webmaster", "Explicit signal + diagnostics"],
            ["Business/Maps listing", "Local results and trust"],
            ["Yandex.Catalog", "Not used (closed)"],
          ],
        },
      ],
      notes: [
        {
          title: "Related guide",
          kind: "tip",
          text: "Region strategy, keywords, and multi-city: /en/blog/regionalnoe-seo/.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "yandeks-katalog",
  ],
};

/** ES overlay for region-sayta — same structure as RU JSON / EN. */
export const regionSaytaEs: BlogPost = {
  slug: "region-sayta",
  title: "Cómo fijar la región de un sitio en Yandex",
  date: "2017-07-04",
  category: "SEO",
  cover: "/images/blog/region-sayta/cover.webp",
  excerpt:
    "Cómo Yandex lee la región de un sitio: señales on-site, Webmaster y un listing de Business/Maps — sin Yandex.Catalog ni direcciones falsas.",
  lead: [
    "La región de un sitio afecta dónde apareces en consultas con localización. Asignar una región no es un checkbox mágico de primera página — es alinear contactos, mapas, contenido y ajustes de webmaster para que cuenten una historia honesta.",
    "Abajo: qué sigue funcionando hoy — señales del propio sitio, Yandex Webmaster y un listing de negocio. Yandex.Catalog está cerrado — no lo persigas por regiones. La estrategia multi-ciudad pertenece a la guía de SEO regional.",
  ],
  faq: [
    {
      q: "¿Basta con fijar la región en Webmaster?",
      a: "No. Hacen falta contactos reales, NAP coherente, a menudo un listing de mapa/negocio y contenido de ciudad. El panel es una señal.",
    },
    {
      q: "¿Un número gratuito me hace «nacional»?",
      a: "Un número gratuito solo no equivale a rankear en cada ciudad. Para demanda local importan más dirección, zona de servicio y landings para ciudades reales.",
    },
    {
      q: "¿Yandex.Catalog sigue ayudando con regiones?",
      a: "No. El Catálogo está cerrado. No compres «registro YACA para regiones».",
    },
    {
      q: "¿Cuánto tarda en aplicarse la región?",
      a: "De días a unas pocas semanas — depende de checks de datos y crawl. Eso no es el timing de primera página: los rankings del núcleo de ciudad se planifican a lo largo de meses.",
    },
    {
      q: "¿Y si pongo la dirección de otro?",
      a: "Riesgo de rechazo, baja del directorio y pérdida de confianza. Hacen falta motivos reales y datos verificables.",
    },
    {
      q: "¿También hay que configurar Google?",
      a: "Sí, como vía aparte: Search Console / Business Profile. La lógica de localidad es parecida; las consolas difieren.",
    },
    {
      q: "¿Dónde aprender más de SEO multi-ciudad?",
      a: "En el artículo de SEO regional: keywords, landings, mapas y errores multi-ciudad.",
    },
  ],
  sections: [
    {
      title: "Por qué un sitio necesita una región",
      level: 2,
      paras: [
        "Para consultas con intención local («servicio + ciudad», «cerca»), Yandex pesa dónde opera el negocio. Si las señales son borrosas o chocan, pierdes terreno frente a sitios con dirección, mapa y contactos alineados.",
        "Un ajuste de región en el panel no sustituye contenido y factores comerciales. Amplifica una localidad honesta — no es un sustituto de una estrategia SEO.",
      ],
      lists: [
        {
          intro: "Señales de localidad:",
          items: [
            "dirección y teléfono en el sitio (NAP)",
            "página de contactos / sucursales",
            "listing de Yandex Business / Maps",
            "contenido local y condiciones de operación",
            "ajustes y datos de Webmaster",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Preparar contactos y listings — días a semanas como guía. La cuota de primera página del núcleo regional se planifica a 2–6 meses tras el arranque del trabajo, sin garantía de fecha.",
        },
      ],
    },
    {
      title: "Detección automática",
      level: 2,
      paras: [
        "Incluso sin un ajuste manual, el bot puede inferir la región desde códigos telefónicos, direcciones en Contactos, menciones de ciudad en el copy y otras huellas. Por eso un sitio vacío sin dirección se lee mal como negocio local.",
        "Listar una docena de ciudades en una página sin presencia real no te hace líder en todas. Varias ciudades piden un setup honesto de sucursales o zona de servicio — mira SEO regional.",
      ],
      lists: [
        {
          intro: "Qué ayuda a la auto-detección:",
          items: [
            "una sola dirección y horarios",
            "un teléfono de ciudad o de contacto claro",
            "indicaciones / un mapa en el sitio",
            "datos que casan con el listing de la organización",
          ],
        },
      ],
    },
    {
      title: "Región vía Yandex Webmaster",
      level: 2,
      paras: [
        "Confirma la propiedad del sitio en Yandex Webmaster. En la UI actual busca ajustes ligados a región / representación (las etiquetas cambian — revisa la ayuda y las secciones del sitio en el panel).",
        "Fija una región que encaje con el negocio y vincula una página con contactos reales. Una dirección inventada sube el riesgo de rechazo. Tras guardar, espera checks y recrawl — esto no entrega primera página al instante.",
      ],
      lists: [
        {
          intro: "Antes de enviar:",
          items: [
            "propiedad del sitio confirmada",
            "página de contactos abierta e indexable",
            "dirección/teléfono casan con el listing",
            "región no más amplia que la zona de servicio real sin motivos",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster — overview del panel",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Listing en Yandex Business y Directory",
      level: 2,
      paras: [
        "Los resultados locales y el bloque de contactos a menudo se apoyan en un listing de organización (lógica de Yandex Business / Maps / era Directory). La confirmación por teléfono y los checks de dirección hacen más difíciles las fakes que solo escribir una ciudad en Webmaster.",
        "Ata sitio, teléfono y dirección en el listing a lo que hay en el sitio. Tras la aprobación, mantén horarios, fotos y reseñas — un listing muerto es más débil que uno vivo.",
      ],
      links: [
        {
          label: "Yandex Directory / listing de negocio",
          href: "/es/blog/yandeks-spravochnik/",
        },
      ],
    },
    {
      title: "Por qué no Yandex.Catalog",
      level: 2,
      paras: [
        "Guías antiguas listaban Yandex.Catalog como una cuarta vía: alta de pago y varias regiones. El servicio está cerrado; el intake de sitios paró.",
        "No pagues por «regiones vía YACA». El reemplazo actual es Webmaster + listings de mapa + landings honestas. La historia del cierre es aparte.",
      ],
      links: [
        {
          label: "Cierre de Yandex.Catalog",
          href: "/es/blog/yandeks-katalog/",
        },
      ],
    },
    {
      title: "Checklist: región alineada",
      level: 2,
      paras: [
        "Mantén una historia coherente: dónde trabajáis de verdad, qué contactos mostráis y qué ve Yandex en Webmaster y en el mapa.",
        "Si hay varias ciudades — no intentes cubrir el país con un párrafo de contactos. Parte sucursales o zonas en páginas y listings.",
      ],
      tables: [
        {
          caption: "Método → rol hoy",
          headers: ["Método", "Rol"],
          rows: [
            ["Automatización desde el sitio", "Base: NAP, contactos, copy"],
            ["Yandex Webmaster", "Señal explícita + diagnóstico"],
            ["Listing Business/Maps", "Resultados locales y confianza"],
            ["Yandex.Catalog", "No se usa (cerrado)"],
          ],
        },
      ],
      notes: [
        {
          title: "Guía relacionada",
          kind: "tip",
          text: "Estrategia de región, keywords y multi-ciudad: /es/blog/regionalnoe-seo/.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "yandeks-vebmaster",
    "yandeks-spravochnik",
    "yandeks-katalog",
  ],
};

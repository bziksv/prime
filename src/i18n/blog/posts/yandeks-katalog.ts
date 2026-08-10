import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-katalog — same structure as RU JSON. */
export const yandeksKatalogEn: BlogPost = {
  slug: "yandeks-katalog",
  title: "Yandex.Catalog shutdown: what it was and what replaces it",
  date: "2018-03-13",
  category: "SEO",
  cover: "/images/blog/yandeks-katalog/cover-en.webp",
  excerpt:
    "Why Yandex.Catalog closed, what happened to TIC and regions, and where local presence lives now: Webmaster, Business/Maps, and live directories.",
  lead: [
    "Yandex.Catalog (YACA) stopped accepting sites: submissions closed on 20 December 2017, and the service faded from webmaster practice. For many it was a “must-pay” promotion step — tied to hopes for TIC and multi-region presence “through the catalog.”",
    "Nostalgia for YACA matters less than the current setup: regions and site quality in Webmaster, listings in Yandex Business / Maps, and selective live directories. Below: what closed, which myths linger, and what replaces the old registration ritual.",
  ],
  faq: [
    {
      q: "Does Yandex.Catalog still work?",
      a: "As a site-submission platform — no. The historical project is closed; registration like before is unavailable.",
    },
    {
      q: "Will TIC come back?",
      a: "TIC as a public Catalog-era metric effectively left. Other signals matter: site quality, demand, behavior, links and mentions, local listings. For weight, use current Webmaster and analytics metrics — not archive TIC.",
    },
    {
      q: "Where did Catalog regions go?",
      a: "Locality is set via real business, content, contacts, Yandex Business/Directory, and Webmaster tools — not by buying a catalog line.",
    },
    {
      q: "Will paid registration be refunded?",
      a: "Yandex’s stance was that payment sped up application processing, not forever placement. 2018 disputes do not change today’s SEO practice.",
    },
    {
      q: "Do site directories still matter in the 2020s?",
      a: "Mass farms — no. Live maps, industry registries, and local directories — yes, selectively. More in the site-directories piece.",
    },
    {
      q: "Is one Yandex Business listing enough?",
      a: "For local demand it is a base layer, not a substitute for the site and SEO. Often you also need 2GIS and Google Business Profile for different audiences.",
    },
    {
      q: "Can I register in another region with a fake address?",
      a: "No — and enforcement tightened earlier. You need real grounds and consistent NAP.",
    },
  ],
  sections: [
    {
      title: "What Yandex.Catalog was and why it mattered",
      level: 2,
      paras: [
        "Yandex.Catalog was a site directory: application, moderation, description, category. Listing brought visibility in catalog results and felt like a passed-review signal. Commerce often paid for faster processing.",
        "Separately, the Catalog was tied to locality and TIC: owners believed a YACA line was almost required for growth. By 2017 habit outlived real value for search users.",
      ],
      lists: [
        {
          intro: "What acceleration historically paid for:",
          items: [
            "accepting and processing the application",
            "classification",
            "description",
            "publication in the Catalog database",
          ],
        },
      ],
    },
    {
      title: "Why the Catalog closed",
      level: 2,
      paras: [
        "Official logic: falling interest in a catalog as a separate product — search answers “find by topic” better than a rubricator. Applications stopped on 20 December 2017; Yandex then pointed webmasters to current tools.",
        "For the market it removed the “Catalog first, then life” ritual. Anyone whose link and local profile rested only on YACA learned: one closed service must not be the only pillar.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Yandex and Google retire outdated products routinely. SEO strategy should rest on the site, demand, and several live channels — not one branded service.",
        },
      ],
    },
    {
      title: "TIC, money, and webmaster expectations",
      level: 2,
      paras: [
        "After the shutdown news, three pains dominated: where did regions go, what about paid registration, and will TIC die. On money, Yandex explained: you paid for processing, not an eternal shelf. TIC left daily practice — like public PageRank once did at Google.",
        "Chasing archive TIC is pointless. Indexation, useful content, technical quality, local listings, and measurable traffic and leads matter more.",
      ],
    },
    {
      title: "Regions after the Catalog",
      level: 2,
      paras: [
        "Multi-region via the catalog without a real footprint is gone. Today region for search and maps rests on actual address or service area, contact pages, branches, city content, and an organization listing.",
        "Several cities need an honest setup: separate landings or branches with real presence, consistent NAP, directory listings. A fake address for rankings in another city leads to filters and lost trust.",
      ],
      lists: [
        {
          intro: "Where to look instead of YACA:",
          items: [
            "Yandex Webmaster — crawl quality, regional settings per current help",
            "Yandex Business / Maps — organization listing",
            "the site: contacts, directions, local content",
            "when needed — 2GIS and Google Business Profile",
          ],
        },
      ],
    },
    {
      title: "What replaces Catalog registration today",
      level: 2,
      paras: [
        "“People find us nearby and trust us” is a bundle: a solid site plus map/business profile plus selective industry platforms. Mass registration in dead site directories does not replace YACA and often hurts.",
        "A whitelist makes sense: maps, major directories, niche registries with audience. A fuller breakdown is in the directories-and-listings article.",
      ],
      lists: [
        {
          intro: "Minimum for local business:",
          items: [
            "an up-to-date site with NAP",
            "a Yandex Business listing",
            "a 2GIS listing (if geo matters)",
            "Google Business Profile when demand is in Google",
            "an industry directory only if clients search there",
          ],
        },
      ],
      notes: [
        {
          title: "Related canon",
          kind: "tip",
          text: "Selective registration practice: /en/blog/katalogi-saytov/. Yandex listing: /en/blog/yandeks-spravochnik/. Google Maps: /en/blog/google-biznes/.",
        },
      ],
    },
    {
      title: "Practical takeaway for SEO",
      level: 2,
      paras: [
        "Yandex.Catalog is a closed chapter. Do not hunt how to register in YACA again and do not buy services that promise it.",
        "Invest in what you still control: site speed and index, demand-led content, local listings, reviews, analytics. The 2010s catalog ritual is no longer a search entry ticket.",
      ],
      tables: [
        {
          caption: "YACA logic then → now",
          headers: ["Then", "Now"],
          rows: [
            ["Catalog application", "Map listings / Yandex Business"],
            ["TIC as fetish", "Webmaster and business metrics"],
            ["Region from the catalog", "Real address, branches, local content"],
            [
              "Paid application speed-up",
              "Site quality and presence on live platforms",
            ],
          ],
        },
      ],
    },
  ],
  related: [
    "katalogi-saytov",
    "yandeks-spravochnik",
    "google-biznes",
    "yandeks-iks",
  ],
};

/** ES overlay for yandeks-katalog — same structure as RU JSON / EN. */
export const yandeksKatalogEs: BlogPost = {
  slug: "yandeks-katalog",
  title: "Cierre de Yandex.Catalog: qué era y qué lo sustituye",
  date: "2018-03-13",
  category: "SEO",
  cover: "/images/blog/yandeks-katalog/cover-es.webp",
  excerpt:
    "Por qué cerró Yandex.Catalog, qué pasó con el TIC y las regiones, y dónde vive ahora la presencia local: Webmaster, Business/Maps y directorios vivos.",
  lead: [
    "Yandex.Catalog (YACA) dejó de aceptar sitios: las solicitudes se cerraron el 20 de diciembre de 2017 y el servicio se desvaneció de la práctica de webmasters. Para muchos era un paso de promoción «de pago obligatorio» — atado a esperanzas de TIC y presencia multi-región «vía el catálogo».",
    "La nostalgia por YACA importa menos que el setup actual: regiones y calidad del sitio en Webmaster, fichas en Yandex Business / Maps y directorios vivos selectivos. Abajo: qué se cerró, qué mitos persisten y qué sustituye al viejo ritual de registro.",
  ],
  faq: [
    {
      q: "¿Sigue funcionando Yandex.Catalog?",
      a: "Como plataforma de envío de sitios — no. El proyecto histórico está cerrado; el registro como antes no está disponible.",
    },
    {
      q: "¿Volverá el TIC?",
      a: "El TIC como métrica pública de la era Catalog, en la práctica, se fue. Importan otras señales: calidad del sitio, demanda, comportamiento, enlaces y menciones, fichas locales. Para peso, usa métricas actuales de Webmaster y analítica — no el TIC de archivo.",
    },
    {
      q: "¿Adónde fueron las regiones del Catalog?",
      a: "La localidad se fija vía negocio real, contenido, contactos, Yandex Business/Directory y herramientas de Webmaster — no comprando una línea en el catálogo.",
    },
    {
      q: "¿Se reembolsa el registro de pago?",
      a: "La postura de Yandex fue que el pago aceleraba el procesamiento de la solicitud, no la colocación eterna. Las disputas de 2018 no cambian la práctica SEO de hoy.",
    },
    {
      q: "¿Los directorios de sitios siguen importando en los 2020?",
      a: "Las granjas masivas — no. Mapas vivos, registros de industria y directorios locales — sí, de forma selectiva. Más en la pieza de directorios de sitios.",
    },
    {
      q: "¿Basta una ficha de Yandex Business?",
      a: "Para demanda local es una capa base, no un sustituto del sitio y el SEO. A menudo también hacen falta 2GIS y Google Business Profile para audiencias distintas.",
    },
    {
      q: "¿Puedo registrarme en otra región con una dirección falsa?",
      a: "No — y la aplicación se endureció antes. Hacen falta motivos reales y un NAP coherente.",
    },
  ],
  sections: [
    {
      title: "Qué era Yandex.Catalog y por qué importaba",
      level: 2,
      paras: [
        "Yandex.Catalog era un directorio de sitios: solicitud, moderación, descripción, categoría. Estar listado daba visibilidad en resultados del catálogo y se sentía como una señal de revisión pasada. El comercio a menudo pagaba por un procesamiento más rápido.",
        "Por separado, el Catalog se ataba a localidad y TIC: los dueños creían que una línea en YACA era casi obligatoria para crecer. En 2017 el hábito sobrevivió al valor real para los usuarios de búsqueda.",
      ],
      lists: [
        {
          intro: "Por qué se pagaba históricamente la aceleración:",
          items: [
            "aceptar y procesar la solicitud",
            "clasificación",
            "descripción",
            "publicación en la base del Catalog",
          ],
        },
      ],
    },
    {
      title: "Por qué cerró el Catalog",
      level: 2,
      paras: [
        "Lógica oficial: caída del interés en un catálogo como producto aparte — la búsqueda responde «encontrar por tema» mejor que un rubricador. Las solicitudes se detuvieron el 20 de diciembre de 2017; Yandex luego apuntó a los webmasters hacia las herramientas actuales.",
        "Para el mercado eliminó el ritual «primero el Catalog, luego la vida». Quien apoyaba el perfil de enlaces y local solo en YACA aprendió: un servicio cerrado no debe ser el único pilar.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Yandex y Google retiran productos obsoletos con rutina. La estrategia SEO debe apoyarse en el sitio, la demanda y varios canales vivos — no en un solo servicio de marca.",
        },
      ],
    },
    {
      title: "TIC, dinero y expectativas de webmasters",
      level: 2,
      paras: [
        "Tras la noticia del cierre dominaron tres dolores: adónde fueron las regiones, qué pasa con el registro de pago y si morirá el TIC. Sobre el dinero, Yandex explicó: pagabas por el procesamiento, no por un estante eterno. El TIC salió de la práctica diaria — como el PageRank público en su día en Google.",
        "Perseguir el TIC de archivo no tiene sentido. Importan más indexación, contenido útil, calidad técnica, fichas locales y tráfico y leads medibles.",
      ],
    },
    {
      title: "Regiones después del Catalog",
      level: 2,
      paras: [
        "La multi-región vía catálogo sin huella real se acabó. Hoy la región para búsqueda y mapas se apoya en la dirección o área de servicio real, páginas de contacto, sucursales, contenido de ciudad y una ficha de organización.",
        "Varias ciudades necesitan un setup honesto: landings o sucursales separadas con presencia real, NAP coherente, listados en directorios. Una dirección falsa para rankings en otra ciudad lleva a filtros y pérdida de confianza.",
      ],
      lists: [
        {
          intro: "Dónde mirar en lugar de YACA:",
          items: [
            "Yandex Webmaster — calidad de crawl, ajustes regionales según la help actual",
            "Yandex Business / Maps — ficha de organización",
            "el sitio: contactos, cómo llegar, contenido local",
            "cuando haga falta — 2GIS y Google Business Profile",
          ],
        },
      ],
    },
    {
      title: "Qué sustituye hoy al registro en el Catalog",
      level: 2,
      paras: [
        "«La gente nos encuentra cerca y confía» es un paquete: un sitio sólido más perfil en mapas/negocio más plataformas de industria selectivas. El registro masivo en directorios de sitios muertos no sustituye a YACA y a menudo perjudica.",
        "Una whitelist tiene sentido: mapas, directorios grandes, registros de nicho con audiencia. Un desglose más completo está en el artículo de directorios y listados.",
      ],
      lists: [
        {
          intro: "Mínimo para negocio local:",
          items: [
            "un sitio al día con NAP",
            "una ficha de Yandex Business",
            "una ficha en 2GIS (si el geo importa)",
            "Google Business Profile cuando la demanda está en Google",
            "un directorio de industria solo si ahí buscan los clientes",
          ],
        },
      ],
      notes: [
        {
          title: "Canon relacionado",
          kind: "tip",
          text: "Práctica de registro selectivo: /es/blog/katalogi-saytov/. Ficha Yandex: /es/blog/yandeks-spravochnik/. Google Maps: /es/blog/google-biznes/.",
        },
      ],
    },
    {
      title: "Conclusión práctica para SEO",
      level: 2,
      paras: [
        "Yandex.Catalog es un capítulo cerrado. No caces cómo registrarte otra vez en YACA y no compres servicios que lo prometan.",
        "Invierte en lo que aún controlas: velocidad e índice del sitio, contenido guiado por demanda, fichas locales, reseñas, analítica. El ritual de catálogo de los 2010 ya no es el ticket de entrada a la búsqueda.",
      ],
      tables: [
        {
          caption: "Lógica YACA entonces → ahora",
          headers: ["Entonces", "Ahora"],
          rows: [
            ["Solicitud al Catalog", "Fichas en mapas / Yandex Business"],
            ["TIC como fetiche", "Métricas de Webmaster y de negocio"],
            ["Región desde el catálogo", "Dirección real, sucursales, contenido local"],
            [
              "Aceleración de pago de la solicitud",
              "Calidad del sitio y presencia en plataformas vivas",
            ],
          ],
        },
      ],
    },
  ],
  related: [
    "katalogi-saytov",
    "yandeks-spravochnik",
    "google-biznes",
    "yandeks-iks",
  ],
};

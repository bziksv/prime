import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-xml — same structure as RU JSON. */
export const yandeksXmlEn: BlogPost = {
  slug: "yandeks-xml",
  title: "Yandex.XML and Search API: what it was and what to use now",
  date: "2020-09-15",
  category: "SEO",
  cover: "/images/blog/yandeks-xml/cover-en.webp",
  excerpt:
    "What Yandex.XML was, why it shut down, what Yandex Search API replaces it with, which jobs official quotas cover, and why scraping the results page is the wrong path.",
  lead: [
    "Yandex.XML was a historic free interface: you sent a search query and got results as XML for a site or automation. In autumn 2023 the service was turned off; the official line is Yandex Search API in Yandex Cloud.",
    "Below: why XML mattered, how to think about limits and legal scenarios today — without step-by-step HTML results scrapers or limit bypasses. Data-collection boundaries are in the parsing article.",
  ],
  faq: [
    {
      q: "Does Yandex.XML still work?",
      a: "No. Classic XML for webmasters is retired. See the current Yandex Search API and Yandex docs.",
    },
    {
      q: "What replaces it for site search?",
      a: "Built-in CMS search, your own indexes, or the official Search API under the plan terms — not homemade scraping of yandex.ru.",
    },
    {
      q: "Can I still pull rankings via XML like before?",
      a: "The old Webmaster-quota scheme is dead. For monitoring use the official API, licensed tools, or manual / contract exports — within the ToS.",
    },
    {
      q: "What were XML limits?",
      a: "Request counts were capped and depended on Webmaster site metrics. Exceeding them led to refusals and blocks.",
    },
    {
      q: "Is Search API the same free thing?",
      a: "A cloud product with billing (PAYG and plans). Check current prices and quotas in the Yandex console.",
    },
    {
      q: "Why not just scrape the results page?",
      a: "It breaks service rules, risks blocks, breaks when markup changes, and carries legal and ethical risk. The official API exists for machine access.",
    },
    {
      q: "Can API responses still be XML?",
      a: "In the Search API ecosystem response formats may vary (including XML, HTML, JSON — per current docs). That is not the old Yandex.XML.",
    },
    {
      q: "Does a normal SEO site need XML?",
      a: "Often no. Webmaster, analytics, and content matter more. API is for products with search or monitoring at scale.",
    },
  ],
  sections: [
    {
      title: "What Yandex.XML was",
      level: 2,
      paras: [
        "The service accepted Yandex search queries and returned structured XML — handy to embed search on a site or fetch results programmatically without scraping the HTML results page.",
        "For SEO tools XML became a familiar ranking-check source. But it was always an official channel with rules and limits — not a hole for infinite harvesting.",
      ],
      lists: [
        {
          intro: "Typical jobs then:",
          items: [
            "search on your own site or catalog",
            "demos and search-widget prototypes",
            "results monitoring within quotas",
            "learning to work with API responses",
          ],
        },
      ],
    },
    {
      title: "Limits and why they existed",
      level: 2,
      paras: [
        "Limits protected infrastructure and cut aggressive harvesting. Quota depended on account and site pairing; the XML UI showed remaining requests.",
        "The lesson still applies to Search API: design cache, request dedupe, queues — do not hammer the API for nothing. Exceeding quota means errors and a stop, not one more retry in a loop.",
      ],
      lists: [
        {
          intro: "Request hygiene:",
          items: [
            "cache repeats",
            "batch with purpose",
            "log quota spend",
            "do not pull the whole keyword set every minute",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Building a business process on an unofficial HTML scraper. It breaks on the first markup update.",
        },
      ],
    },
    {
      title: "What to use instead of XML",
      level: 2,
      paras: [
        "Yandex Search API in Yandex Cloud is the official replacement for machine search access. Connection, keys, IP, billing, and formats — only per current vendor docs.",
        "For a small project’s ranking checks, Webmaster, manual samples, and licensed SEO tools often suffice. API makes sense when you need your own product or high volume.",
      ],
      lists: [
        {
          intro: "Before rollout:",
          items: [
            "read ToS and quotas",
            "estimate cost at your query volume",
            "plan cache and error monitoring",
            "do not store extra personal data from results",
          ],
        },
      ],
      links: [
        {
          label: "Data parsing",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Legal scenarios vs the grey zone",
      level: 2,
      paras: [
        "Normal: official API, search over your own data, licensed monitors. Grey and risky: mass captcha bypass, client spoofing, ignoring robots or ToS, publishing others’ snippets as content.",
        "Do not take old “five steps to connect an XML scraper” guides from 2020 into production — endpoints are dead, and the habit of bypassing limits is harmful.",
      ],
      lists: [
        {
          intro: "Do this:",
          items: [
            "official data channel",
            "minimum requests for the job",
            "transparent logs for audit",
            "alternative — manual spot-checks of rankings",
          ],
        },
      ],
    },
    {
      title: "Link to SEO processes",
      level: 2,
      paras: [
        "Pulling results is a support loop. Growth comes from pages, tech, keyword structure, and links. API does not replace Webmaster, analytics, and a content plan.",
        "If you monitor positions: lock region, device, and date; do not compare an API snapshot to what you see in a personalized browser session.",
      ],
      lists: [
        {
          intro: "Practical stack:",
          items: [
            "Webmaster — index and errors",
            "Metrika — behavior",
            "Search API or tool — positions for the keyword set",
            "hypothesis table — what you change on the site",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Migrating from old integrations",
      level: 2,
      paras: [
        "If the site still has a widget or script for dead XML — disable it, replace with current search or API. Check agency cron jobs: they can spam errors and burn Cloud budget on a broken migration.",
        "Document: who owns the key, which plan, what SLA for monitoring.",
      ],
      lists: [
        {
          intro: "Migration checklist:",
          items: [
            "find all xmlsearch or old URL calls",
            "turn off or rewrite",
            "connect Search API per docs",
            "test quotas and alerts",
            "update the SEO playbook",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Do not keep open API keys in the repo. Rotation and least privilege are baseline.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "parsing",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "google-analytics",
  ],
};

/** ES overlay for yandeks-xml — same structure as RU JSON / EN. */
export const yandeksXmlEs: BlogPost = {
  slug: "yandeks-xml",
  title: "Yandex.XML y Search API: qué era y qué usar ahora",
  date: "2020-09-15",
  category: "SEO",
  cover: "/images/blog/yandeks-xml/cover-es.webp",
  excerpt:
    "Qué era Yandex.XML, por qué se apagó, con qué lo sustituye Yandex Search API, qué trabajos cubren las cuotas oficiales y por qué scrapear la página de resultados es el camino equivocado.",
  lead: [
    "Yandex.XML fue una interfaz histórica gratuita: enviabas una consulta de búsqueda y recibías resultados en XML para un sitio o automatización. En el otoño de 2023 el servicio se apagó; la línea oficial es Yandex Search API en Yandex Cloud.",
    "Abajo: por qué importaba XML, cómo pensar límites y escenarios legales hoy — sin scrapers paso a paso del HTML de resultados ni bypasses de límites. Los límites de recolección de datos están en el artículo de parsing.",
  ],
  faq: [
    {
      q: "¿Sigue funcionando Yandex.XML?",
      a: "No. El XML clásico para webmasters está retirado. Consulta el Yandex Search API actual y la documentación de Yandex.",
    },
    {
      q: "¿Qué lo sustituye para la búsqueda del sitio?",
      a: "Búsqueda integrada del CMS, tus propios índices, o el Search API oficial bajo los términos del plan — no un scraping casero de yandex.ru.",
    },
    {
      q: "¿Aún puedo sacar rankings vía XML como antes?",
      a: "El viejo esquema de cuotas de Webmaster está muerto. Para monitoreo usa la API oficial, herramientas licenciadas o exportaciones manuales / por contrato — dentro del ToS.",
    },
    {
      q: "¿Cuáles eran los límites de XML?",
      a: "Los conteos de requests estaban topeados y dependían de métricas del sitio en Webmaster. Superarlos llevaba a rechazos y bloqueos.",
    },
    {
      q: "¿Search API es lo mismo gratis?",
      a: "Un producto cloud con billing (PAYG y planes). Revisa precios y cuotas actuales en la consola de Yandex.",
    },
    {
      q: "¿Por qué no scrapear simplemente la página de resultados?",
      a: "Rompe las reglas del servicio, arriesga bloqueos, se rompe cuando cambia el markup y conlleva riesgo legal y ético. La API oficial existe para el acceso máquina.",
    },
    {
      q: "¿Las respuestas de la API pueden seguir siendo XML?",
      a: "En el ecosistema Search API los formatos de respuesta pueden variar (incluido XML, HTML, JSON — según la docs actual). Eso no es el viejo Yandex.XML.",
    },
    {
      q: "¿Un sitio SEO normal necesita XML?",
      a: "A menudo no. Importan más Webmaster, analítica y contenido. La API es para productos con búsqueda o monitoreo a escala.",
    },
  ],
  sections: [
    {
      title: "Qué era Yandex.XML",
      level: 2,
      paras: [
        "El servicio aceptaba consultas de búsqueda de Yandex y devolvía XML estructurado — útil para embeber búsqueda en un sitio o traer resultados por programa sin scrapear el HTML de la página de resultados.",
        "Para herramientas SEO el XML se volvió una fuente familiar de chequeo de rankings. Pero siempre fue un canal oficial con reglas y límites — no un agujero para cosecha infinita.",
      ],
      lists: [
        {
          intro: "Trabajos típicos entonces:",
          items: [
            "búsqueda en tu propio sitio o catálogo",
            "demos y prototipos de widgets de búsqueda",
            "monitoreo de resultados dentro de cuotas",
            "aprender a trabajar con respuestas de API",
          ],
        },
      ],
    },
    {
      title: "Límites y por qué existían",
      level: 2,
      paras: [
        "Los límites protegían la infraestructura y cortaban la cosecha agresiva. La cuota dependía del emparejamiento de cuenta y sitio; la UI de XML mostraba los requests restantes.",
        "La lección sigue aplicando a Search API: diseña cache, dedupe de requests, colas — no martillees la API por nada. Superar la cuota significa errores y un stop, no un retry más en un loop.",
      ],
      lists: [
        {
          intro: "Higiene de requests:",
          items: [
            "cachear repeticiones",
            "batch con propósito",
            "loguear el gasto de cuota",
            "no tirar de todo el set de keywords cada minuto",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Construir un proceso de negocio sobre un scraper HTML no oficial. Se rompe en la primera update del markup.",
        },
      ],
    },
    {
      title: "Qué usar en lugar de XML",
      level: 2,
      paras: [
        "Yandex Search API en Yandex Cloud es el reemplazo oficial del acceso máquina a la búsqueda. Conexión, keys, IP, billing y formatos — solo según la docs actual del vendor.",
        "Para chequeos de ranking de un proyecto pequeño, a menudo bastan Webmaster, muestras manuales y herramientas SEO licenciadas. La API tiene sentido cuando necesitas tu propio producto o alto volumen.",
      ],
      lists: [
        {
          intro: "Antes del rollout:",
          items: [
            "leer ToS y cuotas",
            "estimar el coste a tu volumen de consultas",
            "planificar cache y monitoreo de errores",
            "no guardar datos personales de más desde los resultados",
          ],
        },
      ],
      links: [
        {
          label: "Parsing de datos",
          href: "/es/blog/parsing/",
        },
      ],
    },
    {
      title: "Escenarios legales vs la zona gris",
      level: 2,
      paras: [
        "Normal: API oficial, búsqueda sobre tus propios datos, monitores licenciados. Gris y arriesgado: bypass masivo de captcha, spoofing de cliente, ignorar robots o ToS, publicar snippets ajenos como contenido.",
        "No lleves a producción guías viejas de «cinco pasos para conectar un scraper XML» de 2020 — los endpoints están muertos, y el hábito de saltarse límites es dañino.",
      ],
      lists: [
        {
          intro: "Haz esto:",
          items: [
            "canal de datos oficial",
            "mínimo de requests para el trabajo",
            "logs transparentes para auditoría",
            "alternativa — spot-checks manuales de rankings",
          ],
        },
      ],
    },
    {
      title: "Vínculo con los procesos SEO",
      level: 2,
      paras: [
        "Tirar de resultados es un loop de soporte. El crecimiento viene de páginas, técnica, estructura de keywords y enlaces. La API no sustituye Webmaster, analítica y un plan de contenido.",
        "Si monitoreas posiciones: fija región, dispositivo y fecha; no compares un snapshot de API con lo que ves en una sesión de navegador personalizada.",
      ],
      lists: [
        {
          intro: "Stack práctico:",
          items: [
            "Webmaster — índice y errores",
            "Metrica — comportamiento",
            "Search API o herramienta — posiciones del set de keywords",
            "tabla de hipótesis — qué cambias en el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Migrar desde integraciones viejas",
      level: 2,
      paras: [
        "Si el sitio aún tiene un widget o script para el XML muerto — desactívalo, sustitúyelo por búsqueda actual o API. Revisa los cron jobs de la agencia: pueden spamear errores y quemar presupuesto de Cloud en una migración rota.",
        "Documenta: quién posee la key, qué plan, qué SLA de monitoreo.",
      ],
      lists: [
        {
          intro: "Checklist de migración:",
          items: [
            "encontrar todas las llamadas xmlsearch o URLs viejas",
            "apagar o reescribir",
            "conectar Search API según la docs",
            "probar cuotas y alertas",
            "actualizar el playbook SEO",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "No dejes API keys abiertas en el repo. Rotación y least privilege son la base.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "parsing",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "google-analytics",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for zashchita-ot-parsinga — same structure as RU JSON. */
export const zashchitaOtParsingaEn: BlogPost = {
  slug: "zashchita-ot-parsinga",
  title: "How to protect a site from scraping: captcha, limits, honeypot, and common sense",
  date: "2019-07-22",
  category: "Digital marketing",
  cover: "/images/blog/zashchita-ot-parsinga/cover-en.webp",
  excerpt:
    "Protecting a site from aggressive scraping: bot behavior, honeypots, IP analysis and limits, WAF/CDN — and why you mustn’t cut search crawlers together with the bad actors.",
  lead: [
    "Scrapers harvest prices, copy, reviews, and catalogs. You can’t fully “close” a site against a motivated collector, but you can make collection much costlier and cut damage to the server and SEO.",
    "Below: practical defense layers and common mistakes. What scraping is and where ethical collection ends live in a neighboring piece; here — the site owner’s side. No instructions on defeating protection.",
  ],
  faq: [
    {
      q: "Is captcha on every page a good plan?",
      a: "Usually no: it hits UX and conversion. Better risk scoring and a challenge only on suspicious behavior.",
    },
    {
      q: "Can I block all bots?",
      a: "No. You need “good” search crawlers and preview services. Cut anomalous traffic, not all robotic traffic.",
    },
    {
      q: "Does robots.txt help?",
      a: "For well-behaved robots — yes. A malicious scraper ignores it; it’s not the only defense.",
    },
    {
      q: "What is a honeypot?",
      a: "A hidden bait (link/field) a human doesn’t see but a dumb bot touches. Helps detect — not a silver bullet.",
    },
    {
      q: "Are CDN and WAF required?",
      a: "For high load and frequent attacks — useful (limits, bot management). A small site often needs rate limit + log monitoring.",
    },
    {
      q: "Does 100% protection exist?",
      a: "No. The goal is to lower damage and cost for the attacker, plus legal and contractual measures for content.",
    },
  ],
  sections: [
    {
      title: "Why protect",
      level: 2,
      paras: [
        "Aggressive scraping copies content, pulls prices for dumping, floods forms, and loads the server. Sometimes the goal is competitor analytics (prices), sometimes auto-filling clones.",
        "Priority: site availability for people and search engines, data integrity, less theft of unique content.",
      ],
      links: [
        {
          label: "Scraping: what it is and the boundaries",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Captcha and behavioral scoring",
      level: 2,
      paras: [
        "Classic captcha on every step annoys. More modern — risk scoring (bot/human) and a challenge only when suspicious. Cookies/session reduce repeated checks for returning users.",
        "Remember: paid captcha-solving services exist — one captcha alone won’t stop a determined collector. Combine with request limits.",
      ],
    },
    {
      title: "Honeypot, IP, and limits",
      level: 2,
      paras: [
        "Honeypot: a hidden element a bot clicks or fills. The event is a log signal and a reason to tighten rules for that IP or session.",
        "IP signals (hosting vs consumer ISP, PTR for known crawlers) help but break with proxies. Rate limit is more reliable: many URLs/sec from one address → throttle or a temporary ban. Separately tell a traffic spike from a DDoS.",
      ],
      lists: [
        {
          intro: "When to cut access:",
          items: [
            "anomalous RPS from one IP/subnet",
            "traffic that skips typical human patterns",
            "mass catalog crawl with no referrer / odd UA",
            "attacks on forms and the admin area",
          ],
        },
      ],
      notes: [
        {
          title: "White robots",
          text: "Don’t blanket-block all bots: indexing and link previews will suffer. Keep an allowlist of known crawlers and verify them per platform docs (reverse DNS, etc.).",
          kind: "tip",
        },
      ],
    },
    {
      title: "Services and the legal layer",
      level: 2,
      paras: [
        "CDN/WAF with bot management (Cloudflare and peers) take part of the load: limits, JS challenge, geo/ASN rules. Paid antibot tools make scraping costlier but don’t give absolute guarantees — names and plans change; pick for traffic and budget.",
        "In the terms of use, ban automated collection. That doesn’t replace tech, but supports claims when content is copied. Also protect unique copy and photos with clone monitoring.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "rate limit on catalog and API",
            "monitoring 5xx and log anomalies",
            "honeypot on forms",
            "captcha/challenge by risk",
            "don’t cut search crawlers",
            "backups and catalog integrity checks",
          ],
        },
      ],
    },
  ],
  closing: [
    "Scraping protection is about making collection expensive and keeping UX/SEO — not an “invisible site.” Start with limits and monitoring, add risk-based captcha, and don’t block white crawlers together with the bad actors.",
  ],
  related: [
    "zashchita-kontenta",
    "parsing",
    "avtonapolnenie-sayta",
    "feyk-stranitsa",
    "ssl-sertifikat",
    "analiz-konkurentov",
  ],
};

/** ES overlay for zashchita-ot-parsinga — same structure as RU JSON / EN. */
export const zashchitaOtParsingaEs: BlogPost = {
  slug: "zashchita-ot-parsinga",
  title: "Cómo proteger un sitio del scraping: captcha, límites, honeypot y sentido común",
  date: "2019-07-22",
  category: "Digital marketing",
  cover: "/images/blog/zashchita-ot-parsinga/cover-es.webp",
  excerpt:
    "Proteger un sitio del scraping agresivo: comportamiento de bots, honeypots, análisis de IP y límites, WAF/CDN — y por qué no debes cortar crawlers de búsqueda junto con los malos actores.",
  lead: [
    "Los scrapers cosechan precios, copy, reseñas y catálogos. No puedes «cerrar» del todo un sitio ante un recolector motivado, pero puedes hacer la recogida mucho más cara y recortar daño al servidor y al SEO.",
    "Abajo: capas prácticas de defensa y errores habituales. Qué es el scraping y dónde termina la recogida ética viven en una pieza vecina; aquí — el lado del dueño del sitio. Sin instrucciones para derrotar la protección.",
  ],
  faq: [
    {
      q: "¿Captcha en cada página es un buen plan?",
      a: "Suele no: pega al UX y a la conversión. Mejor scoring de riesgo y un challenge solo ante comportamiento sospechoso.",
    },
    {
      q: "¿Puedo bloquear todos los bots?",
      a: "No. Necesitas crawlers de búsqueda «buenos» y servicios de preview. Corta tráfico anómalo, no todo el tráfico robótico.",
    },
    {
      q: "¿Ayuda robots.txt?",
      a: "Para robots bien educados — sí. Un scraper malicioso lo ignora; no es la única defensa.",
    },
    {
      q: "¿Qué es un honeypot?",
      a: "Un cebo oculto (link/campo) que un humano no ve pero un bot tonto toca. Ayuda a detectar — no es bala de plata.",
    },
    {
      q: "¿CDN y WAF son obligatorios?",
      a: "Con alta carga y ataques frecuentes — útiles (límites, bot management). Un sitio pequeño a menudo necesita rate limit + monitorización de logs.",
    },
    {
      q: "¿Existe protección al 100%?",
      a: "No. La meta es bajar el daño y el coste para el atacante, más medidas legales y contractuales sobre el contenido.",
    },
  ],
  sections: [
    {
      title: "Por qué proteger",
      level: 2,
      paras: [
        "El scraping agresivo copia contenido, saca precios para dumping, inunda formularios y carga el servidor. A veces la meta es analytics de competidores (precios), a veces rellenar clones a automático.",
        "Prioridad: disponibilidad del sitio para personas y buscadores, integridad de datos, menos robo de contenido único.",
      ],
      links: [
        {
          label: "Scraping: qué es y los límites",
          href: "/es/blog/parsing/",
        },
      ],
    },
    {
      title: "Captcha y scoring conductual",
      level: 2,
      paras: [
        "El captcha clásico en cada paso molesta. Más moderno — scoring de riesgo (bot/humano) y un challenge solo cuando hay sospecha. Cookies/sesión reducen chequeos repetidos para usuarios que vuelven.",
        "Recuerda: existen servicios de pago que resuelven captchas — un captcha solo no detiene a un recolector decidido. Combínalo con límites de requests.",
      ],
    },
    {
      title: "Honeypot, IP y límites",
      level: 2,
      paras: [
        "Honeypot: un elemento oculto que un bot clica o rellena. El evento es una señal de log y un motivo para endurecer reglas para esa IP o sesión.",
        "Señales de IP (hosting vs ISP de consumo, PTR de crawlers conocidos) ayudan pero se rompen con proxies. Rate limit es más fiable: muchas URLs/s desde una dirección → throttle o ban temporal. Aparte distingue un pico de tráfico de un DDoS.",
      ],
      lists: [
        {
          intro: "Cuándo cortar el acceso:",
          items: [
            "RPS anómalo desde una IP/subred",
            "tráfico que salta patrones humanos típicos",
            "crawl masivo del catálogo sin referrer / UA raro",
            "ataques a formularios y al área de admin",
          ],
        },
      ],
      notes: [
        {
          title: "Robots blancos",
          text: "No bloquees en bloque a todos los bots: la indexación y los previews de links sufrirán. Mantén una allowlist de crawlers conocidos y verifícalos según la documentación de cada plataforma (reverse DNS, etc.).",
          kind: "tip",
        },
      ],
    },
    {
      title: "Servicios y la capa legal",
      level: 2,
      paras: [
        "CDN/WAF con bot management (Cloudflare y equivalentes) asumen parte de la carga: límites, JS challenge, reglas geo/ASN. Tools antibot de pago encarecen el scraping pero no dan garantías absolutas — nombres y planes cambian; elige según tráfico y presupuesto.",
        "En los términos de uso, prohíbe la recogida automatizada. Eso no sustituye la tech, pero apoya reclamaciones cuando se copia contenido. También protege copy y fotos únicas con monitorización de clones.",
      ],
      lists: [
        {
          intro: "Mínimo práctico:",
          items: [
            "rate limit en catálogo y API",
            "monitorización de 5xx y anomalías en logs",
            "honeypot en formularios",
            "captcha/challenge por riesgo",
            "no cortar crawlers de búsqueda",
            "backups y chequeos de integridad del catálogo",
          ],
        },
      ],
    },
  ],
  closing: [
    "Proteger del scraping es hacer la recogida cara y conservar UX/SEO — no un «sitio invisible». Empieza por límites y monitorización, suma captcha por riesgo y no bloquees crawlers blancos junto con los malos actores.",
  ],
  related: [
    "zashchita-kontenta",
    "parsing",
    "avtonapolnenie-sayta",
    "feyk-stranitsa",
    "ssl-sertifikat",
    "analiz-konkurentov",
  ],
};

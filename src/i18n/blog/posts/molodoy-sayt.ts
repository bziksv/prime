import type { BlogPost } from "../../../data/blog";

/** EN overlay for molodoy-sayt — same structure as RU JSON. */
export const molodoySaytEn: BlogPost = {
  slug: "molodoy-sayt",
  title: "How to promote a young website",
  date: "2021-03-04",
  category: "SEO",
  cover: "/images/blog/molodoy-sayt/cover-en.webp",
  excerpt:
    "Where to start SEO for a new site: tech, content, commercial factors, and realistic timelines — without behavioral gaming or “bypass competitor” secrets.",
  lead: [
    "A young site rarely outranks strong competitors in a week. First: index, tech, clear service pages, and trust — then demand growth.",
    "Below: work order, commercial signals, trust, and common traps. We don’t cover gaming behavioral signals or gray-hat schemes — and we don’t recommend them.",
  ],
  faq: [
    {
      q: "Is there a young-site “sandbox”?",
      a: "There’s no endless “young = don’t rank” filter as a button. A new domain still needs time for crawl, trust, and useful signals.",
    },
    {
      q: "What should I do in month one?",
      a: "Indexing, Metrika/Webmaster, tech, a keyword set, 5–15 strong landings, contacts, and commercial blocks.",
    },
    {
      q: "Should I game behavioral metrics?",
      a: "No. Sanction risk. Improve UX and attract real traffic: content, ads, PR.",
    },
    {
      q: "When should I expect page one?",
      a: "Prep — weeks (~a month as a guide). Noticeable ranking gains for the core — planned 2–6 months after work starts.",
    },
    {
      q: "Should I buy links right away?",
      a: "Not first. Your own content and site hygiene first; links — selective and quality.",
    },
    {
      q: "How many pages should I start with?",
      a: "No universal number. Priority services/categories and answers to frequent questions, then expand by demand.",
    },
    {
      q: "Do I need paid search?",
      a: "It can bring first leads and demand data if economics work. It doesn’t replace SEO, but it tests offer and landings.",
    },
    {
      q: "New domain or aged with history?",
      a: "A clean aged domain can speed the start; a dirty one is worse than new. Check sanctions and link profile before buying.",
    },
  ],
  sections: [
    {
      title: "Where to start optimization",
      level: 2,
      paras: [
        "Close critical tech, open the site to bots, build a core, make a structure. Without that, content and links run idle.",
        "Every important page should answer a concrete query and be a few clicks away. Don’t create dozens of similar URLs for volume — they cannibalize each other and complicate crawl.",
      ],
      lists: [
        {
          intro: "Start:",
          items: [
            "https, speed, mobile",
            "sitemap and indexing",
            "semantics and priorities",
            "Title/H1 templates without clones",
            "Webmaster and Metrika",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Technical audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Content and commercial signals",
      level: 2,
      paras: [
        "Write useful pages for demand; refresh what’s stale. For commerce, prices/cues, terms, contacts, delivery, and trust are critical.",
        "Show who delivers the service and how the deal works: details, team, guarantees, work samples, objection answers. That helps people and site-quality assessment.",
      ],
      lists: [
        {
          intro: "Stronger than “behavioral secrets”:",
          items: [
            "a clear offer",
            "cases and facts",
            "fast forms",
            "honest reviews and company details",
            "a contacts page without a quest",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep for promotion is often ~a month. Commercial-core page-one share is a separate stage of 2–6 months.",
        },
      ],
    },
    {
      title: "Analytics from day one",
      level: 2,
      paras: [
        "Without counters and goals you can’t tell “site isn’t moving” from “we don’t see leads.” Set Metrika/Analytics, goals, Webmaster, and Search Console before heavy publishing.",
        "Watch indexing of priority URLs, bounce on landings, where first inquiries come from. Even modest traffic yields edit hypotheses.",
      ],
      lists: [
        {
          intro: "Analytics minimum:",
          items: [
            "counter and lead/call goals",
            "Webmaster + sitemap",
            "a priority URL list to monitor",
            "a weekly look at crawl errors",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Work plan and real timelines",
      level: 2,
      paras: [
        "Prep usually takes about a month: audit, critical fixes, semantics, priority pages, analytics. On a complex project stages run longer.",
        "Page one ≠ the date you start work. For a commercial core, rankings grow planned over 2–6 months: a noticeable chunk nearer month 2–3, the rest by competition and site quality.",
      ],
      lists: [
        {
          intro: "To see progress:",
          items: [
            "indexing of priority pages",
            "share of target queries in visibility",
            "organic and inquiries by channel",
            "pages with growing impressions but weak conversion",
          ],
        },
      ],
      tables: [
        {
          caption: "Don’t confuse stages",
          headers: ["Stage", "Guide"],
          rows: [
            ["Prep / start of work", "~weeks–a month"],
            ["Building rankings for the core", "planned 2–6 mo."],
            ["“Page one in a week via behavioral gaming”", "not a goal — a risk"],
          ],
        },
      ],
    },
    {
      title: "How to grow trust without gray schemes",
      level: 2,
      paras: [
        "Trust is site usefulness plus external proof: cases, maps, honest reviews, expert pieces.",
        "External mentions — via partnerships and industry media their audiences care about. Mass buys and artificial signals don’t stick.",
      ],
      lists: [
        {
          intro: "Clean early signals:",
          items: [
            "profiles on maps and directories",
            "cases with client consent",
            "expert comments",
            "content worth linking to",
          ],
        },
      ],
      links: [
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
        {
          label: "Behavioral gaming: risks",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "Traps of a young project",
      level: 2,
      paras: [
        "Competitor copy-paste, doorways, behavioral gaming, and expecting miracles from one article — classics. Study competitors for structure ideas, not cloning.",
        "Don’t hide weak commerce behind ranking reports. If leads aren’t handled or the form fails on phone, visibility won’t become revenue.",
      ],
      lists: [
        {
          intro: "Do:",
          items: [
            "competitor analysis by meaning",
            "regular analytics",
            "improve pages with bounce",
            "patience and iterations",
            "an explicit no to gray “accelerators”",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "When to add ads and PR",
      level: 2,
      paras: [
        "Search and social ads help test demand and collect first leads while organic builds. Don’t mix “bought clicks” with “hit SEO page one” in your head.",
        "PR and partnerships grow brand queries and mentions. That’s a long game beside SEO — not a substitute for tech and content.",
      ],
      lists: [
        {
          intro: "Alongside SEO it fits to:",
          items: [
            "test the offer in Direct/Ads at a sane CPA",
            "map cards",
            "selective expert publishes",
            "not — link packs “for page one”",
          ],
        },
      ],
      links: [
        {
          label: "Brand traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "nakrutka-pf",
    "pokupka-ssylok",
    "analiz-konkurentov",
    "brendovyy-trafik",
  ],
};

/** ES overlay for molodoy-sayt — same structure as RU JSON / EN. */
export const molodoySaytEs: BlogPost = {
  slug: "molodoy-sayt",
  title: "Cómo promover un sitio joven",
  date: "2021-03-04",
  category: "SEO",
  cover: "/images/blog/molodoy-sayt/cover.webp",
  excerpt:
    "Por dónde empezar el SEO de un sitio nuevo: técnica, contenido, factores comerciales y plazos realistas — sin gaming de comportamiento ni secretos para «saltarse al competidor».",
  lead: [
    "Un sitio joven rara vez supera a competidores fuertes en una semana. Primero: índice, técnica, páginas de servicio claras y confianza — luego crecimiento de demanda.",
    "Abajo: orden de trabajo, señales comerciales, confianza y trampas habituales. No cubrimos gaming de señales de comportamiento ni esquemas gray-hat — y no los recomendamos.",
  ],
  faq: [
    {
      q: "¿Existe un «sandbox» de sitio joven?",
      a: "No hay un filtro eterno «joven = no rankea» como botón. Un dominio nuevo aún necesita tiempo para crawl, confianza y señales útiles.",
    },
    {
      q: "¿Qué hago en el mes uno?",
      a: "Indexación, Metrika/Webmaster, técnica, un set de keywords, 5–15 landings fuertes, contactos y bloques comerciales.",
    },
    {
      q: "¿Debo trucar métricas de comportamiento?",
      a: "No. Riesgo de sanción. Mejora UX y atrae tráfico real: contenido, ads, PR.",
    },
    {
      q: "¿Cuándo esperar primera página?",
      a: "Prep — semanas (~un mes como guía). Ganancias notables de ranking del núcleo — planificadas a 2–6 meses tras empezar el trabajo.",
    },
    {
      q: "¿Debo comprar enlaces ya?",
      a: "No primero. Primero tu contenido e higiene del sitio; enlaces — selectivos y de calidad.",
    },
    {
      q: "¿Con cuántas páginas empiezo?",
      a: "No hay número universal. Servicios/categorías prioritarios y respuestas a preguntas frecuentes, luego expandes por demanda.",
    },
    {
      q: "¿Necesito paid search?",
      a: "Puede traer primeros leads y datos de demanda si la economía cuadra. No sustituye el SEO, pero prueba oferta y landings.",
    },
    {
      q: "¿Dominio nuevo o aged con historia?",
      a: "Un dominio aged limpio puede acelerar el arranque; uno sucio es peor que uno nuevo. Revisa sanciones y perfil de enlaces antes de comprar.",
    },
  ],
  sections: [
    {
      title: "Por dónde empezar la optimización",
      level: 2,
      paras: [
        "Cierra la técnica crítica, abre el sitio a bots, arma un núcleo, haz una estructura. Sin eso, contenido y enlaces corren en vacío.",
        "Cada página importante debe responder a una consulta concreta y estar a pocos clics. No crees docenas de URLs parecidas por volumen — se canibalizan y complican el crawl.",
      ],
      lists: [
        {
          intro: "Arranque:",
          items: [
            "https, velocidad, móvil",
            "sitemap e indexación",
            "semántica y prioridades",
            "plantillas Title/H1 sin clones",
            "Webmaster y Metrika",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Auditoría técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Contenido y señales comerciales",
      level: 2,
      paras: [
        "Escribe páginas útiles para la demanda; refresca lo que está obsoleto. En commerce, precios/señales, términos, contactos, envío y confianza son críticos.",
        "Muestra quién entrega el servicio y cómo funciona el trato: detalles, equipo, garantías, muestras de trabajo, respuestas a objeciones. Eso ayuda a la gente y a la evaluación de calidad del sitio.",
      ],
      lists: [
        {
          intro: "Más fuerte que «secretos de comportamiento»:",
          items: [
            "una oferta clara",
            "casos y hechos",
            "formularios rápidos",
            "reseñas honestas y datos de la empresa",
            "una página de contactos sin quest",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "La prep para la promoción suele ser ~un mes. La cuota del núcleo comercial en primera página es una etapa aparte de 2–6 meses.",
        },
      ],
    },
    {
      title: "Analítica desde el día uno",
      level: 2,
      paras: [
        "Sin contadores y goals no puedes separar «el sitio no se mueve» de «no vemos leads». Pon Metrika/Analytics, goals, Webmaster y Search Console antes de publicar a lo grande.",
        "Mira indexación de URLs prioritarias, bounce en landings, de dónde llegan las primeras inquiries. Incluso un tráfico modesto da hipótesis de edición.",
      ],
      lists: [
        {
          intro: "Mínimo de analítica:",
          items: [
            "contador y goals de lead/llamada",
            "Webmaster + sitemap",
            "una lista de URLs prioritarias a monitorear",
            "una mirada semanal a errores de crawl",
          ],
        },
      ],
      links: [
        {
          label: "Goals en Metrika",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Yandex Webmaster",
          href: "/es/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Plan de trabajo y plazos reales",
      level: 2,
      paras: [
        "La prep suele tomar cerca de un mes: auditoría, arreglos críticos, semántica, páginas prioritarias, analítica. En un proyecto complejo las etapas duran más.",
        "Primera página ≠ la fecha en que empiezas el trabajo. Para un núcleo comercial, los rankings crecen planificados a 2–6 meses: un trozo notable más cerca del mes 2–3, el resto según competencia y calidad del sitio.",
      ],
      lists: [
        {
          intro: "Para ver progreso:",
          items: [
            "indexación de páginas prioritarias",
            "cuota de consultas objetivo en visibilidad",
            "orgánico e inquiries por canal",
            "páginas con impresiones crecientes pero conversión floja",
          ],
        },
      ],
      tables: [
        {
          caption: "No confundas etapas",
          headers: ["Etapa", "Guía"],
          rows: [
            ["Prep / inicio del trabajo", "~semanas–un mes"],
            ["Construcción de rankings del núcleo", "planificado 2–6 meses"],
            ["«Primera página en una semana vía gaming de comportamiento»", "no es un goal — es un riesgo"],
          ],
        },
      ],
    },
    {
      title: "Cómo crecer en confianza sin esquemas grises",
      level: 2,
      paras: [
        "La confianza es utilidad del sitio más prueba externa: casos, mapas, reseñas honestas, piezas expertas.",
        "Menciones externas — vía partnerships y media de industria que importen a su audiencia. Las compras masivas y las señales artificiales no se sostienen.",
      ],
      lists: [
        {
          intro: "Señales tempranas limpias:",
          items: [
            "perfiles en mapas y directorios",
            "casos con consentimiento del cliente",
            "comentarios de expertos",
            "contenido que valga la pena linkear",
          ],
        },
      ],
      links: [
        {
          label: "Comprar enlaces: riesgos",
          href: "/es/blog/pokupka-ssylok/",
        },
        {
          label: "Gaming de comportamiento: riesgos",
          href: "/es/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "Trampas de un proyecto joven",
      level: 2,
      paras: [
        "Copy-paste de competidores, doorways, gaming de comportamiento y esperar milagros de un artículo — clásicos. Estudia competidores por ideas de estructura, no por clonación.",
        "No escondas un commerce flojo detrás de informes de ranking. Si no se atienden leads o el formulario falla en el teléfono, la visibilidad no se vuelve ingreso.",
      ],
      lists: [
        {
          intro: "Haz:",
          items: [
            "análisis de competidores por significado",
            "analítica regular",
            "mejorar páginas con bounce",
            "paciencia e iteraciones",
            "un no explícito a «aceleradores» grises",
          ],
        },
      ],
      links: [
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Cuándo sumar ads y PR",
      level: 2,
      paras: [
        "Ads de búsqueda y social ayudan a probar demanda y recolectar primeros leads mientras crece el orgánico. No mezcles en la cabeza «clics comprados» con «llegamos a primera página SEO».",
        "PR y partnerships crecen consultas de marca y menciones. Eso es un juego largo junto al SEO — no un sustituto de técnica y contenido.",
      ],
      lists: [
        {
          intro: "Junto al SEO encaja:",
          items: [
            "probar la oferta en Direct/Ads a un CPA sensato",
            "fichas en mapas",
            "publicaciones expertas selectivas",
            "no — packs de enlaces «para primera página»",
          ],
        },
      ],
      links: [
        {
          label: "Tráfico de marca",
          href: "/es/blog/brendovyy-trafik/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "nakrutka-pf",
    "pokupka-ssylok",
    "analiz-konkurentov",
    "brendovyy-trafik",
  ],
};

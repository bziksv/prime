import type { BlogPost } from "../../../data/blog";

/** EN overlay for autrich — same structure as RU JSON. */
export const autrichEn: BlogPost = {
  slug: "autrich",
  title: "Outreach: how to find sites for articles and mentions",
  date: "2020-03-06",
  category: "SEO",
  cover: "/images/blog/autrich/cover-en.webp",
  excerpt:
    "What outreach means in SEO: manually finding topical sites, donor criteria, pitching editors, and checking the post — without link-exchange spam or Wikipedia rule-bypass schemes.",
  lead: [
    "Outreach is hands-on work with publishers: find media or blogs in your topic, offer useful material or expertise, and get a post with a mention or link. It is an alternative and complement to link marketplaces — not a magic profile of thousands of links.",
    "Below: when outreach fits, how to pick donors, where lists come from, how to write editors, and what to check after publish. Related: guest posts, link-buying risks, backlink-profile analysis. A batch of emails does not put a query core on page one — visibility builds over months of systematic work.",
  ],
  faq: [
    {
      q: "How does outreach differ from a link marketplace?",
      a: "A marketplace is a catalog of paid slots. Outreach is direct contact with the editor or owner. Quality and price are often better; speed and volume are lower.",
    },
    {
      q: "Do you need “bad links” for a natural profile?",
      a: "No. Do not dilute the profile with junk on purpose. Fewer strong topical mentions beat a mix of marketplace spam.",
    },
    {
      q: "Can you parse competitors’ SERPs for outreach?",
      a: "Reviewing public mentions and backlink-tool reports is fine. Do not run aggressive scraping of others’ sites or bypass blocks.",
    },
    {
      q: "Should you treat Wikipedia as a link source?",
      a: "Not an outreach goal. Edits for a link break the rules and get cleaned. Use Wikipedia as a reader or fact source — not a donor.",
    },
    {
      q: "How many outreach emails per week?",
      a: "As many as you can personalize well. Mass template spam kills replies and reputation.",
    },
    {
      q: "Is a dofollow link required?",
      a: "Audience and brand traffic matter more. A link is a bonus under the site’s rules; sometimes a mention and UTM are enough.",
    },
    {
      q: "Should paid placements be labeled as ads?",
      a: "Yes if it is paid placement under law and the site’s rules. Do not disguise payment as a “neutral review.”",
    },
    {
      q: "Does outreach mean page one in a month?",
      a: "No. It is a mentions channel. Prep and published pieces take weeks; growing a query core is planned over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "When outreach makes sense",
      level: 2,
      paras: [
        "It fits when the niche is competitive, marketplaces give lookalike donors, or you want a live audience — not only a “row in Ahrefs.” You need time, strong expert content, and tolerance for rejections.",
        "Do not start outreach while the site itself is raw: thin pages and broken tech will not hold visits. Foundation first, then external mentions.",
      ],
      lists: [
        {
          intro: "Outreach helps if:",
          items: [
            "you have expertise and cases",
            "the topic interests editors",
            "you are ready to personalize emails",
            "you have budget for quality copy (yours or guest)",
          ],
        },
      ],
      links: [
        {
          label: "Free article placement",
          href: "/en/blog/besplatnoe-razmeshchenie-statey/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Pushing email volume with a “please publish our article with a link” template and no value for the site’s readers.",
        },
      ],
    },
    {
      title: "Site criteria",
      level: 2,
      paras: [
        "Main filter — topical fit and a live audience, not an abstract “trust 30.” Check whether people read posts, whether comments or shares look real, and whether the site looks like a link farm.",
        "Tools like Semrush, Ahrefs, or Serpstat help cut obvious spam and review backlinks, but DR/trust thresholds are a guide, not law. Sharp metric drops and a showcase of marketplace articles are red flags.",
      ],
      lists: [
        {
          intro: "What to check on a donor:",
          items: [
            "topic close to yours",
            "real visits or engagement",
            "quality of recent placements",
            "no feed of “articles with a link”",
            "clear editor contacts",
            "terms and ad labeling",
          ],
        },
      ],
      tables: [
        {
          caption: "Quality signals",
          headers: ["Good", "Bad"],
          rows: [
            ["Topical longreads", "Copy-paste and thin walls of text"],
            ["Editor replies on substance", "Only a “footer link” price list"],
            ["Audience in your niche", "Fake traffic or teasers"],
            ["Transparent rules", "Hidden sales without labeling"],
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Where to get site lists",
      level: 2,
      paras: [
        "Four practical sources: industry tops and media, catalogs or rankings with caution, backlinks of strong competitors (public reports), manual search on informational niche queries.",
        "Old “top” catalogs are idea starters, not truth. Live donors more often come from “best blogs + topic,” expert roundups, and sites that already cite competitors well.",
      ],
      lists: [
        {
          intro: "Collection practice:",
          items: [
            "table: URL, topic, contact, status",
            "dedupe domains",
            "spam filter",
            "priority: high fit + live audience",
            "do not copy sites where every competitor already sits",
          ],
        },
      ],
      links: [
        {
          label: "Site directories",
          href: "/en/blog/katalogi-saytov/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Pitch, agreements, content",
      level: 2,
      paras: [
        "Write short: who you are, why it helps the site, 2–3 topic options, writing samples. Do not paste a ready SEO dump with anchors. Offer exclusivity or an adaptation to the editorial style.",
        "If placement is paid — lock volume, links, live period, ad labeling, edits. After publish, check the URL, index status, that the mention or link is there, and that the page is not “noindex for show.”",
      ],
      lists: [
        {
          intro: "Rhythm without spam:",
          items: [
            "personalize per site",
            "one follow-up, not daily pings",
            "copy quality over frequency",
            "log replies in CRM or a sheet",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "The best hook is data, a case, or a guide the site does not have yet — not “an article with a link to us.”",
        },
      ],
    },
    {
      title: "Tools are helpers, not autopilot",
      level: 2,
      paras: [
        "SERP crawlers, Ahrefs/Semrush-class tools, sheets, and email speed up routine. Automation must not turn outreach into spam blasts: personalization stays manual.",
        "Do not use “magic” schemes around hidden links, fake engagement, or bypassing site rules. That burns donors and raises filter risk.",
      ],
      lists: [
        {
          intro: "Minimal stack:",
          items: [
            "donor table",
            "backlink or visibility tool",
            "index check after publish",
            "email templates with personalization fields",
          ],
        },
      ],
    },
    {
      title: "How to fold it into the SEO plan",
      level: 2,
      paras: [
        "Outreach is one channel next to on-site content, PR, and careful paid placements. Set KPIs: replies, placements, visits, leads — not only “link count.”",
        "Material prep and the first touch wave take weeks. Effect on core visibility grows month to month; the planned ranking horizon is often 2–6 months after the full workstream starts.",
      ],
      lists: [
        {
          intro: "Cycle checklist:",
          items: [
            "donor shortlist",
            "topics for the site’s audience",
            "send and track statuses",
            "publish and verify",
            "report: traffic, leads, mentions",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Outreach is not instant page one. Quality mentions first, then the effect accumulates — typically over 2–6 months alongside broader SEO work.",
        },
      ],
    },
  ],
  related: [
    "besplatnoe-razmeshchenie-statey",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "katalogi-saytov",
    "analiz-konkurentov",
    "samostoyatelnoe-seo",
  ],
};

/** ES overlay for autrich — same structure as RU JSON / EN. */
export const autrichEs: BlogPost = {
  slug: "autrich",
  title: "Outreach: cómo encontrar sitios para artículos y menciones",
  date: "2020-03-06",
  category: "SEO",
  cover: "/images/blog/autrich/cover-es.webp",
  excerpt:
    "Qué significa outreach en SEO: encontrar a mano sitios temáticos, criterios de donor, pitch a editores y comprobar el post — sin spam de exchanges de enlaces ni esquemas para saltar reglas de Wikipedia.",
  lead: [
    "Outreach es trabajo manual con publishers: encontrar medios o blogs de tu tema, ofrecer material útil o expertise y conseguir un post con mención o enlace. Es alternativa y complemento a los marketplaces de enlaces — no un perfil mágico de miles de links.",
    "Abajo: cuándo encaja el outreach, cómo elegir donors, de dónde salen las listas, cómo escribir a editores y qué revisar tras publicar. Relacionado: guest posts, riesgos de comprar enlaces, análisis del perfil de backlinks. Un lote de emails no pone un núcleo de consultas en primera página — la visibilidad se construye en meses de trabajo sistemático.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el outreach de un marketplace de enlaces?",
      a: "Un marketplace es un catálogo de slots de pago. Outreach es contacto directo con el editor o el dueño. Calidad y precio a menudo mejoran; velocidad y volumen bajan.",
    },
    {
      q: "¿Hacen falta «enlaces malos» para un perfil natural?",
      a: "No. No diluyas el perfil con basura a propósito. Menos menciones temáticas fuertes ganan a una mezcla de spam de marketplace.",
    },
    {
      q: "¿Se pueden parsear las SERPs de competidores para outreach?",
      a: "Revisar menciones públicas e informes de herramientas de backlinks está bien. No hagas scraping agresivo de sitios ajenos ni saltes bloqueos.",
    },
    {
      q: "¿Tratar Wikipedia como fuente de enlaces?",
      a: "No es un objetivo de outreach. Edits por un enlace rompen las reglas y se limpian. Usa Wikipedia como lector o fuente de hechos — no como donor.",
    },
    {
      q: "¿Cuántos emails de outreach por semana?",
      a: "Tantos como puedas personalizar bien. El spam masivo de plantillas mata respuestas y reputación.",
    },
    {
      q: "¿Hace falta un enlace dofollow?",
      a: "Importan más la audiencia y el tráfico de marca. El enlace es un bonus bajo las reglas del sitio; a veces basta una mención y UTM.",
    },
    {
      q: "¿Los placements de pago deben etiquetarse como anuncios?",
      a: "Sí si es placement de pago según la ley y las reglas del sitio. No disfraces el pago como una «reseña neutra».",
    },
    {
      q: "¿Outreach significa primera página en un mes?",
      a: "No. Es un canal de menciones. Preparación y piezas publicadas llevan semanas; crecer un núcleo de consultas se planifica a 2–6 meses tras el inicio del trabajo.",
    },
  ],
  sections: [
    {
      title: "Cuándo tiene sentido el outreach",
      level: 2,
      paras: [
        "Encaja cuando el nicho es competitivo, los marketplaces dan donors parecidos o quieres audiencia viva — no solo una «fila en Ahrefs». Hace falta tiempo, contenido experto fuerte y tolerancia a rechazos.",
        "No empieces outreach mientras el sitio esté crudo: páginas finas y técnica rota no sostienen visitas. Primero base, luego menciones externas.",
      ],
      lists: [
        {
          intro: "El outreach ayuda si:",
          items: [
            "tienes expertise y casos",
            "el tema interesa a editores",
            "estás listo para personalizar emails",
            "tienes presupuesto para copy de calidad (tuyo o guest)",
          ],
        },
      ],
      links: [
        {
          label: "Colocación gratuita de artículos",
          href: "/es/blog/besplatnoe-razmeshchenie-statey/",
        },
        {
          label: "Comprar enlaces: riesgos",
          href: "/es/blog/pokupka-ssylok/",
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Empujar volumen de email con una plantilla «por favor publicad nuestro artículo con un enlace» y sin valor para los lectores del sitio.",
        },
      ],
    },
    {
      title: "Criterios del sitio",
      level: 2,
      paras: [
        "Filtro principal — encaje temático y audiencia viva, no un «trust 30» abstracto. Comprueba si la gente lee posts, si comentarios o shares parecen reales y si el sitio parece una granja de enlaces.",
        "Herramientas como Semrush, Ahrefs o Serpstat ayudan a cortar spam obvio y revisar backlinks, pero umbrales de DR/trust son guía, no ley. Caídas bruscas de métricas y un escaparate de artículos de marketplace son banderas rojas.",
      ],
      lists: [
        {
          intro: "Qué revisar en un donor:",
          items: [
            "tema cercano al tuyo",
            "visitas reales o engagement",
            "calidad de placements recientes",
            "sin feed de «artículos con un enlace»",
            "contactos claros de editorial",
            "términos y etiquetado publicitario",
          ],
        },
      ],
      tables: [
        {
          caption: "Señales de calidad",
          headers: ["Bien", "Mal"],
          rows: [
            ["Longreads temáticos", "Copy-paste y muros de texto finos"],
            ["Respuestas del editor con sustancia", "Solo una lista de precios de «enlace en footer»"],
            ["Audiencia en tu nicho", "Tráfico falso o teasers"],
            ["Reglas transparentes", "Ventas ocultas sin etiquetado"],
          ],
        },
      ],
      links: [
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "De dónde sacar listas de sitios",
      level: 2,
      paras: [
        "Cuatro fuentes prácticas: medios e industria destacados, catálogos o rankings con cautela, backlinks de competidores fuertes (informes públicos), búsqueda manual en consultas informativas del nicho.",
        "Los catálogos viejos de «mejores sitios» son starters de ideas, no verdad. Los donors vivos suelen salir de «mejores blogs + tema», roundups de expertos y sitios que ya citan bien a competidores.",
      ],
      lists: [
        {
          intro: "Práctica de recogida:",
          items: [
            "tabla: URL, tema, contacto, estado",
            "dedupe de dominios",
            "filtro de spam",
            "prioridad: alto encaje + audiencia viva",
            "no copies sitios donde ya está cada competidor",
          ],
        },
      ],
      links: [
        {
          label: "Directorios de sitios",
          href: "/es/blog/katalogi-saytov/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Pitch, acuerdos, contenido",
      level: 2,
      paras: [
        "Escribe corto: quién eres, por qué ayuda al sitio, 2–3 opciones de tema, samples de escritura. No pegues un dump SEO listo con anclas. Ofrece exclusividad o una adaptación al estilo editorial.",
        "Si el placement es de pago — fija volumen, enlaces, periodo en vivo, etiquetado publicitario, edits. Tras publicar, revisa la URL, estado de indexación, que la mención o enlace esté y que la página no sea «noindex de escaparate».",
      ],
      lists: [
        {
          intro: "Ritmo sin spam:",
          items: [
            "personalizar por sitio",
            "un follow-up, no pings diarios",
            "calidad del copy por encima de la frecuencia",
            "registrar respuestas en CRM o una hoja",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "El mejor gancho son datos, un caso o una guía que el sitio aún no tiene — no «un artículo con un enlace a nosotros».",
        },
      ],
    },
    {
      title: "Las herramientas ayudan, no son piloto automático",
      level: 2,
      paras: [
        "Crawlers de SERP, herramientas tipo Ahrefs/Semrush, hojas y email aceleran la rutina. La automatización no debe convertir el outreach en blasts de spam: la personalización sigue siendo manual.",
        "No uses esquemas «mágicos» de enlaces ocultos, engagement falso o saltar reglas del sitio. Eso quema donors y sube el riesgo de filtros.",
      ],
      lists: [
        {
          intro: "Stack mínimo:",
          items: [
            "tabla de donors",
            "herramienta de backlinks o visibilidad",
            "check de índice tras publicar",
            "plantillas de email con campos de personalización",
          ],
        },
      ],
    },
    {
      title: "Cómo encajarlo en el plan SEO",
      level: 2,
      paras: [
        "Outreach es un canal junto a contenido on-site, PR y placements de pago cuidadosos. Fija KPIs: respuestas, placements, visitas, leads — no solo «conteo de enlaces».",
        "La preparación de materiales y la primera ola de contactos llevan semanas. El efecto en la visibilidad del núcleo crece mes a mes; el horizonte planificado de rankings suele ser 2–6 meses tras el inicio del trabajo completo.",
      ],
      lists: [
        {
          intro: "Checklist del ciclo:",
          items: [
            "shortlist de donors",
            "temas para la audiencia del sitio",
            "enviar y seguir estados",
            "publicar y verificar",
            "informe: tráfico, leads, menciones",
          ],
        },
      ],
      links: [
        {
          label: "SEO por tu cuenta",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Outreach no es primera página al instante. Primero menciones de calidad, luego el efecto se acumula — típicamente a 2–6 meses junto a un trabajo SEO más amplio.",
        },
      ],
    },
  ],
  related: [
    "besplatnoe-razmeshchenie-statey",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "katalogi-saytov",
    "analiz-konkurentov",
    "samostoyatelnoe-seo",
  ],
};

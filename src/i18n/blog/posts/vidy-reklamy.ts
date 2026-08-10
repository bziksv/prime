import type { BlogPost } from "../../../data/blog";

/** EN overlay for vidy-reklamy — same structure as RU JSON. */
export const vidyReklamyEn: BlogPost = {
  slug: "vidy-reklamy",
  title: "Types of online advertising: what actually brings in clients",
  date: "2016-08-23",
  category: "Digital marketing",
  cover: "/images/blog/vidy-reklamy/cover-en.webp",
  excerpt:
    "Channel overview: SEO, paid search, social targeting, teasers, and banners — pros, cons, and when to choose what. No page-one guarantees and no advice for shady offers.",
  lead: [
    "Online advertising isn’t just “banner or post.” By reach, it can be narrow (people already searching for your product), broad (segment by age, gender, interests), or mass (brand, FMCG).",
    "Below: five working types and how to combine them. Figures like “1000% ROI” and “pay only for page one” from old materials aren’t worth copying — look at unit economics in your niche.",
  ],
  faq: [
    {
      q: "Is SEO advertising?",
      a: "It’s more of an organic acquisition channel. Overviews often group it with ads because it competes for the same people in search.",
    },
    {
      q: "What brings leads faster?",
      a: "Usually paid search and social targeting with a ready landing page. SEO is a long game: prep takes a few weeks to about a month; a meaningful share of the core set on page one is typically planned for 2–6 months after work starts.",
    },
    {
      q: "Can I get by with only SEO and paid search?",
      a: "For many local and service niches, yes — as a base. Targeting, banners, and content marketing add value when you have budget and a clear audience outside search.",
    },
    {
      q: "Do teasers suit a brand?",
      a: "Rarely. Shock ads on low-quality sites hurt your image. For a legitimate business, mainstream ad networks and clear creative are the better bet.",
    },
    {
      q: "Does anyone guarantee first-page rankings?",
      a: "An honest contractor doesn’t guarantee SERP positions. “Pay only for page one” sounds appealing, but algorithms change. Lock in scope of work, metrics, and reporting transparency instead.",
    },
  ],
  sections: [
    {
      title: "SEO and paid search",
      level: 2,
      paras: [
        "SEO is visibility in organic search results for demand-driven queries. Pros: users trust a non-ad click, scalable keyword coverage, relatively low CPA over time. Cons: not instant, no position guarantee, and you need technical work, content, and patience. Early movement often shows after a few months; a stable share of the core set on page one is typically planned for 2–6 months after work starts — not from payment day.",
        "Paid search (search plus display networks) shows ads by query or interest. Pros: fast launch, precise intent on search, handy for promos. Cons: you pay per click continuously; without a strong landing page you burn budget. Display retargeting follows people who visited your site — it’s a reminder, not magic.",
        "The classic pair: paid search covers demand now, SEO builds organic. As rankings strengthen, you can shift paid budget — not as a rule, but as a hypothesis backed by your numbers. There’s no direct “paid for search ads → bought SEO positions.”",
      ],
      lists: [
        {
          intro: "When to start with this pair:",
          items: [
            "you have a site and an offer",
            "people search for what you sell",
            "you need both quick leads and a long-term channel",
            "you’re ready to count leads — not just clicks",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
    {
      title: "Targeting, teasers, banners — and choosing",
      level: 2,
      paras: [
        "Targeted ads show creatives to a segment in social and platform ecosystems — interests, demographics, lookalikes. Good for broad and mid-funnel demand; ultra-niche audiences are hard to build. Platforms and rules change — plan creative and offer tests, not a permanent 2016 ad account setup.",
        "Teaser networks run clickbait blocks, often on low-quality traffic. For reputation-conscious businesses, they’re usually harmful. If an offer fails mainstream platform moderation, the problem is more often the product or promises than “we need teasers.”",
        "Display banners on websites — reach and brand, weaker point performance. Paid CPM or a flat period fee; segmentation is weaker than search. Makes sense for awareness with clear creative — not as your only lead channel.",
        "In practice: for most commercial services, SEO plus paid search form the frame; add targeting if your audience lives on social; banners for brand with budget; skip teasers by default. Count cost per lead and lead quality — not “which type is trendier.”",
      ],
      lists: [
        {
          intro: "Quick guide:",
          items: [
            "need leads fast — paid search or targeting",
            "need a long search channel — SEO",
            "need awareness — banners plus content",
            "care about reputation — no shock teasers",
            "measure CPL/CPA and share of qualified leads",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Ad banner",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
  ],
  related: [
    "kontekst-i-seo",
    "seo-malyy-biznes",
    "retargeting",
    "reklamnyy-banner",
    "besplatnaya-reklama",
  ],
};

/** ES overlay for vidy-reklamy — same structure as RU JSON / EN. */
export const vidyReklamyEs: BlogPost = {
  slug: "vidy-reklamy",
  title: "Tipos de publicidad online: qué trae clientes de verdad",
  date: "2016-08-23",
  category: "Digital marketing",
  cover: "/images/blog/vidy-reklamy/cover-es.webp",
  excerpt:
    "Overview de canales: SEO, paid search, targeting social, teasers y banners — pros, contras y cuándo elegir qué. Sin garantías de primera página ni consejos para ofertas dudosas.",
  lead: [
    "La publicidad online no es solo «banner o post». Por alcance puede ser estrecha (gente que ya busca tu producto), amplia (segmento por edad, género, intereses) o masiva (marca, FMCG).",
    "Abajo: cinco tipos que funcionan y cómo combinarlos. Cifras como «ROI del 1000%» y «paga solo por primera página» de materiales viejos no merecen copiarse — mira la unit economics de tu nicho.",
  ],
  faq: [
    {
      q: "¿El SEO es publicidad?",
      a: "Es más un canal de adquisición orgánica. Los overviews a menudo lo agrupan con ads porque compite por la misma gente en búsqueda.",
    },
    {
      q: "¿Qué trae leads más rápido?",
      a: "Suele ser paid search y targeting social con una landing lista. El SEO es juego largo: la prep lleva unas semanas a cerca de un mes; una cuota notable del core en primera página se planifica típicamente a 2–6 meses tras el inicio del trabajo.",
    },
    {
      q: "¿Puedo apañarme solo con SEO y paid search?",
      a: "En muchos nichos locales y de servicios, sí — como base. Targeting, banners y content marketing aportan cuando hay presupuesto y una audiencia clara fuera de la búsqueda.",
    },
    {
      q: "¿Los teasers encajan con una marca?",
      a: "Rara vez. Ads de shock en sitios de baja calidad pegan a la imagen. Para un negocio legítimo, redes mainstream y creatividades claras son mejor apuesta.",
    },
    {
      q: "¿Alguien garantiza rankings de primera página?",
      a: "Un contratista honesto no garantiza posiciones en la SERP. «Paga solo por primera página» suena atractivo, pero los algoritmos cambian. Fija alcance del trabajo, métricas y transparencia de reporting.",
    },
  ],
  sections: [
    {
      title: "SEO y paid search",
      level: 2,
      paras: [
        "SEO es visibilidad en resultados orgánicos para queries de demanda. Pros: la gente confía en un clic no-ad, cobertura de keywords escalable, CPA relativamente bajo con el tiempo. Contras: no es instantáneo, sin garantía de posición, y hace falta trabajo técnico, contenido y paciencia. El movimiento temprano a menudo se ve tras unos meses; una cuota estable del core en primera página se planifica típicamente a 2–6 meses tras el inicio del trabajo — no desde el día del pago.",
        "Paid search (búsqueda más redes display) muestra ads por query o interés. Pros: lanzamiento rápido, intent preciso en búsqueda, útil para promos. Contras: pagas por clic de continuo; sin una landing fuerte quemas presupuesto. El retargeting display sigue a quien visitó tu sitio — es un recordatorio, no magia.",
        "El par clásico: paid search cubre la demanda ahora, SEO construye lo orgánico. Al fortalecer rankings puedes mover presupuesto de paid — no como regla, sino como hipótesis respaldada por tus números. No hay un «pagué ads de búsqueda → compré posiciones SEO» directo.",
      ],
      lists: [
        {
          intro: "Cuándo empezar con este par:",
          items: [
            "tienes un sitio y una oferta",
            "la gente busca lo que vendes",
            "necesitas leads rápidos y un canal a largo plazo",
            "estás listo para contar leads — no solo clics",
          ],
        },
      ],
      links: [
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
        {
          label: "SEO para pequeño negocio",
          href: "/es/blog/seo-malyy-biznes/",
        },
      ],
    },
    {
      title: "Targeting, teasers, banners — y elegir",
      level: 2,
      paras: [
        "Los ads targeted muestran creatividades a un segmento en ecosistemas social y de plataforma — intereses, demografía, lookalikes. Bien para demanda amplia y mid-funnel; las audiencias ultra-nicho son difíciles de construir. Plataformas y reglas cambian — planifica tests de creatividad y oferta, no un setup eterno de cuenta de ads de 2016.",
        "Las redes de teasers corren bloques clickbait, a menudo en tráfico de baja calidad. Para negocios que cuidan la reputación suelen ser dañinos. Si una oferta falla la moderación mainstream, el problema suele ser el producto o las promesas más que «necesitamos teasers».",
        "Banners display en websites — reach y marca, rendimiento de punto más débil. CPM de pago o fee plano por periodo; la segmentación es más débil que la búsqueda. Tiene sentido para awareness con creatividad clara — no como único canal de leads.",
        "En la práctica: para la mayoría de servicios comerciales, SEO más paid search forman el marco; añade targeting si tu audiencia vive en social; banners para marca con presupuesto; salta teasers por defecto. Cuenta coste por lead y calidad del lead — no «qué tipo está más de moda».",
      ],
      lists: [
        {
          intro: "Guía rápida:",
          items: [
            "necesitas leads ya — paid search o targeting",
            "necesitas un canal largo de búsqueda — SEO",
            "necesitas awareness — banners más contenido",
            "te importa la reputación — sin teasers de shock",
            "mide CPL/CPA y cuota de leads cualificados",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
        {
          label: "Banner publicitario",
          href: "/es/blog/reklamnyy-banner/",
        },
      ],
    },
  ],
  related: [
    "kontekst-i-seo",
    "seo-malyy-biznes",
    "retargeting",
    "reklamnyy-banner",
    "besplatnaya-reklama",
  ],
};

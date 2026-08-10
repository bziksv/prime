import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoreklama-youtube — same structure as RU JSON. */
export const videoreklamaYoutubeEn: BlogPost = {
  slug: "videoreklama-youtube",
  title: "YouTube video ads: when they’re worth running",
  date: "2021-01-28",
  category: "Paid search",
  cover: "/images/blog/videoreklama-youtube/cover-en.webp",
  excerpt:
    "When YouTube video ads pay off, which formats exist, and how to judge audience fit and budget — without “most effective on the internet” hype or stale price quotes.",
  lead: [
    "Pre-roll and in-stream ads annoy some viewers, but they can deliver reach, awareness, and sometimes leads — if the offer, creative, and landing page work as one funnel.",
    "Below: format pros, audience work, the path to sales, and how to think about budget. CPM and CPC figures from old guides go stale — run your own test and check current Google Ads Help.",
    "For Russia, account for ads-account availability and platform policy at launch time.",
  ],
  faq: [
    {
      q: "Are YouTube Ads the same as channel monetization?",
      a: "No. Monetization is what creators earn from ads on their videos. YouTube Ads is what you pay to show your own ads.",
    },
    {
      q: "Do viewers have to watch 30 seconds?",
      a: "It depends on the format. Skippable in-stream ads can be skipped after a few seconds; other types work differently. Check current formats in your account.",
    },
    {
      q: "Will ads drive sales?",
      a: "Yes — if you have a strong offer and landing page. A clip running before someone else’s video doesn’t sell anything by itself.",
    },
    {
      q: "Is there an SEO bonus from YouTube Ads?",
      a: "No direct “Ads = page-one organic.” Indirectly, ads can lift brand demand and site traffic. Organic growth still comes from content and SEO work.",
    },
    {
      q: "What budget should I start with?",
      a: "Enough to gather meaningful stats over a one- to two-week test, with a daily cap — not a vague “industry average.”",
    },
    {
      q: "Do I need my own channel?",
      a: "Ideally yes: trust, retargeting, and content all help. For an ads test, a showcase channel works too.",
    },
    {
      q: "What if YouTube Ads isn’t available in my market?",
      a: "Look at other video and performance platforms, organic content on your channel, and paid campaigns in accounts you can access.",
    },
  ],
  sections: [
    {
      title: "Pros and cons of the format",
      level: 2,
      paras: [
        "Video carries emotion, shows the product in action, and puts a face on the brand. Reach is large; targeting is flexible — interests, keywords, audiences.",
        "The downsides: creative costs more than a banner, some viewers skip, and without conversion tracking it’s easy to burn budget on views alone.",
        "Don’t compare “YouTube vs. the whole internet.” Compare YouTube to other channels in your funnel — where can you get a target action at comparable lead quality?",
      ],
      lists: [
        {
          intro: "When video ads shine:",
          items: [
            "a complex product needs to be shown",
            "brand and trust matter",
            "you have a landing page ready for the action",
            "you’re willing to test two or three creatives",
            "you have bandwidth for editing and iteration",
          ],
        },
      ],
    },
    {
      title: "Audience and message",
      level: 2,
      paras: [
        "Targeting without an offer is wasted spend. Define who you’re reaching, what pain you solve, and what you want them to do — then set up the account.",
        "The first seconds decide everything: hook, product in frame, subtitles (many people watch without sound).",
        "Split segments by intent: cold audience, site-visitor retargeting, lookalikes from leads — each needs its own creative and CPA target.",
      ],
      lists: [
        {
          intro: "Before you shoot:",
          items: [
            "one primary CTA",
            "proof (numbers, case study, demo)",
            "customer language, not agency jargon",
            "a 15–30s version and a shorter hook cut",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Sales and the funnel",
      level: 2,
      paras: [
        "Clip → click or visit → lead or purchase. Without a pixel and conversion goals, you optimize for views, not revenue.",
        "For cold audiences, reach plus retargeting of people who finished the video or visited the site often beats a single blast.",
      ],
      lists: [
        {
          intro: "The chain you need:",
          items: [
            "UTM or campaign tagging",
            "a landing page that matches the clip’s offer",
            "a goal: lead, purchase, or call",
            "irrelevant placements excluded",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Budget and price expectations",
      level: 2,
      paras: [
        "Click and view costs swing by niche, ad quality, and competition. Don’t treat old “from $N” figures in 2021 articles as current fact.",
        "Plan a test: hypothesis → daily cap → review in 7–14 days → scale or stop.",
      ],
      lists: [
        {
          intro: "What to watch in the report:",
          items: [
            "frequency and completion rate",
            "CTR and cost per target action",
            "site traffic quality (bounce rate, pages per session)",
            "which creatives drive conversions",
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "“The most effective advertising on the internet” is a slogan. What’s effective is what fits your unit economics.",
        },
      ],
    },
    {
      title: "How this ties to SEO and your channel",
      level: 2,
      paras: [
        "Ads don’t replace SEO and don’t buy organic rankings directly. They can lift brand demand and show which offers resonate.",
        "Your own channel with useful videos plays the long game: organic discovery, retargeting, and trust.",
      ],
      lists: [
        {
          intro: "Run ads alongside:",
          items: [
            "channel branding",
            "videos that answer audience questions",
            "landing pages for demand clusters",
            "realistic SEO timelines (months, not days)",
          ],
        },
      ],
      links: [
        {
          label: "Growing a YouTube channel",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube monetization",
          href: "/en/blog/youtube-monetizaciya/",
        },
      ],
    },
    {
      title: "Should you launch?",
      level: 2,
      paras: [
        "Yes — if the product is visual, you have budget for a measured test, and the landing page is ready. Wait — if there’s no offer, site, or analytics. Build the foundation first.",
        "Bottom line: video ads are a performance and brand tool, not a magic button.",
      ],
      lists: [
        {
          intro: "Quick decision checklist:",
          items: [
            "goal and CPA/ROAS targets are set",
            "at least two creatives ready for testing",
            "daily cap and review deadline defined",
            "a stop-or-scale plan written down",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for videoreklama-youtube — same structure as RU JSON / EN. */
export const videoreklamaYoutubeEs: BlogPost = {
  slug: "videoreklama-youtube",
  title: "Ads de vídeo en YouTube: cuándo merece la pena",
  date: "2021-01-28",
  category: "Paid search",
  cover: "/images/blog/videoreklama-youtube/cover-es.webp",
  excerpt:
    "Cuándo compensan los ads de vídeo en YouTube, qué formatos existen y cómo juzgar encaje de audiencia y presupuesto — sin hype de «lo más efectivo de internet» ni cotizaciones de precio obsoletas.",
  lead: [
    "Los ads pre-roll e in-stream molestan a parte de los viewers, pero pueden dar reach, awareness y a veces leads — si la oferta, el creative y la landing funcionan como un funnel.",
    "Abajo: pros del formato, trabajo de audiencia, el camino a ventas y cómo pensar el presupuesto. Las cifras de CPM y CPC de guías viejas se quedan obsoletas — corre tu propio test y revisa el Google Ads Help actual.",
    "En Rusia, ten en cuenta la disponibilidad de la cuenta de ads y la política de la plataforma al lanzar.",
  ],
  faq: [
    {
      q: "¿YouTube Ads es lo mismo que la monetización del canal?",
      a: "No. Monetización es lo que ganan los creators por ads en sus vídeos. YouTube Ads es lo que pagas tú por mostrar tus propios ads.",
    },
    {
      q: "¿Los viewers tienen que ver 30 segundos?",
      a: "Depende del formato. Los ads in-stream saltables se pueden saltar tras unos segundos; otros tipos funcionan distinto. Revisa los formatos actuales en tu cuenta.",
    },
    {
      q: "¿Los ads impulsan ventas?",
      a: "Sí — si tienes oferta fuerte y landing. Un clip delante del vídeo de otro no vende nada solo.",
    },
    {
      q: "¿Hay bonus SEO por YouTube Ads?",
      a: "No hay un «Ads = primera página orgánica» directo. De forma indirecta, los ads pueden subir demanda de marca y tráfico al sitio. El crecimiento orgánico sigue viniendo de contenido y trabajo SEO.",
    },
    {
      q: "¿Con qué presupuesto empiezo?",
      a: "El suficiente para reunir stats significativas en un test de una a dos semanas, con tope diario — no un vago «promedio del sector».",
    },
    {
      q: "¿Necesito un canal propio?",
      a: "Idealmente sí: confianza, retargeting y contenido ayudan. Para un test de ads, un canal showcase también vale.",
    },
    {
      q: "¿Y si YouTube Ads no está disponible en mi mercado?",
      a: "Mira otras plataformas de vídeo y performance, contenido orgánico en tu canal y campañas de pago en cuentas a las que sí tengas acceso.",
    },
  ],
  sections: [
    {
      title: "Pros y contras del formato",
      level: 2,
      paras: [
        "El vídeo lleva emoción, muestra el producto en acción y pone cara a la marca. El reach es grande; el targeting es flexible — intereses, keywords, audiencias.",
        "Los contras: el creative cuesta más que un banner, parte de los viewers saltan, y sin tracking de conversión es fácil quemar presupuesto solo en views.",
        "No compares «YouTube vs. todo internet». Compara YouTube con otros canales de tu funnel — ¿dónde puedes conseguir una acción objetivo con calidad de lead comparable?",
      ],
      lists: [
        {
          intro: "Cuando brillan los ads de vídeo:",
          items: [
            "un producto complejo necesita verse",
            "importan marca y confianza",
            "tienes una landing lista para la acción",
            "estás dispuesto a probar dos o tres creatives",
            "tienes ancho de banda para edición e iteración",
          ],
        },
      ],
    },
    {
      title: "Audiencia y mensaje",
      level: 2,
      paras: [
        "Targeting sin oferta es gasto tirado. Define a quién llegas, qué dolor resuelves y qué quieres que hagan — luego monta la cuenta.",
        "Los primeros segundos lo deciden todo: gancho, producto en frame, subtítulos (mucha gente ve sin sonido).",
        "Parte segmentos por intención: audiencia fría, retargeting de visitantes del sitio, lookalikes de leads — cada uno necesita su creative y su objetivo de CPA.",
      ],
      lists: [
        {
          intro: "Antes de rodar:",
          items: [
            "un CTA principal",
            "prueba (números, caso, demo)",
            "lenguaje del cliente, no jerga de agencia",
            "una versión de 15–30s y un corte de gancho más corto",
          ],
        },
      ],
      links: [
        {
          label: "Básicos de la cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Ventas y el funnel",
      level: 2,
      paras: [
        "Clip → clic o visita → lead o compra. Sin pixel y objetivos de conversión, optimizas views, no revenue.",
        "Para audiencias frías, reach más retargeting de quien terminó el vídeo o visitó el sitio suele ganar a un solo blast.",
      ],
      lists: [
        {
          intro: "La cadena que necesitas:",
          items: [
            "UTM o tagging de campaña",
            "una landing que encaje con la oferta del clip",
            "un objetivo: lead, compra o llamada",
            "placements irrelevantes excluidos",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Presupuesto y expectativas de precio",
      level: 2,
      paras: [
        "Los costes de clic y view oscilan por nicho, calidad del ad y competencia. No trates cifras viejas de «desde $N» en artículos de 2021 como hecho actual.",
        "Planifica un test: hipótesis → tope diario → revisión en 7–14 días → escalar o parar.",
      ],
      lists: [
        {
          intro: "Qué mirar en el reporte:",
          items: [
            "frecuencia y completion rate",
            "CTR y coste por acción objetivo",
            "calidad del tráfico al sitio (bounce rate, páginas por sesión)",
            "qué creatives impulsan conversiones",
          ],
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "«La publicidad más efectiva de internet» es un slogan. Lo efectivo es lo que encaja con tu unit economics.",
        },
      ],
    },
    {
      title: "Cómo se liga al SEO y a tu canal",
      level: 2,
      paras: [
        "Los ads no sustituyen el SEO ni compran rankings orgánicos de forma directa. Pueden subir demanda de marca y mostrar qué ofertas resonan.",
        "Tu propio canal con vídeos útiles juega a largo plazo: discovery orgánico, retargeting y confianza.",
      ],
      lists: [
        {
          intro: "Corre ads junto a:",
          items: [
            "branding del canal",
            "vídeos que responden preguntas de la audiencia",
            "landings para clusters de demanda",
            "plazos SEO realistas (meses, no días)",
          ],
        },
      ],
      links: [
        {
          label: "Crecer un canal de YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
        {
          label: "Monetización de YouTube",
          href: "/es/blog/youtube-monetizaciya/",
        },
      ],
    },
    {
      title: "¿Deberías lanzar?",
      level: 2,
      paras: [
        "Sí — si el producto es visual, tienes presupuesto para un test medido y la landing está lista. Espera — si no hay oferta, sitio o analytics. Primero la base.",
        "En resumen: los ads de vídeo son una herramienta de performance y marca, no un botón mágico.",
      ],
      lists: [
        {
          intro: "Checklist rápido de decisión:",
          items: [
            "objetivo y targets de CPA/ROAS fijados",
            "al menos dos creatives listos para probar",
            "tope diario y fecha de revisión definidos",
            "un plan de parar o escalar por escrito",
          ],
        },
      ],
    },
  ],
};

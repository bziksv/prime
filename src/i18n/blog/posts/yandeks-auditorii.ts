import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-auditorii — same structure as RU JSON. */
export const yandeksAuditoriiEn: BlogPost = {
  slug: "yandeks-auditorii",
  title: "Audience targeting in Yandex: Crypta, segments, and Direct",
  date: "2017-01-31",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-auditorii/cover-en.webp",
  excerpt:
    "How Yandex segments users for ads: Crypta signals, demographics, interests, remarketing, and look-alike — without outdated “+35% conversion” claims or guides for uploading other people’s contact lists.",
  lead: [
    "In Yandex ads you build audiences with more than keywords: interests and behavior, geo, demographics, Metrica segments, CRM lists, and lookalikes. Behind the “who is this” estimate sits profile tech (historically Crypta and models on ecosystem behavior).",
    "Below: what those signals mean and how to use them in Direct. Audience-condition UI labels and report names have shifted — check current Direct Help. How to describe a product audience is a separate article; account-level remarketing practice is separate too.",
  ],
  faq: [
    {
      q: "Is this the same as “how to find a target audience”?",
      a: "No. That piece is a product or content portrait. This one covers how Yandex’s ad system narrows impressions by signals and segments.",
    },
    {
      q: "Is Crypta still called that?",
      a: "Names and Help wording have evolved. The idea is the same: a probabilistic profile from ecosystem behavior, not a “passport from a cookie.”",
    },
    {
      q: "Do cookies store passwords?",
      a: "Not as a rule. Cookies are identifiers and session or consent settings. Don’t confuse them with storing logins in the clear “in every cookie.”",
    },
    {
      q: "Can you upload other people’s emails and phones?",
      a: "Only with a lawful basis and consent. Bought lists risk blocks and claims. Skip gray uploads.",
    },
    {
      q: "Does remarketing always raise conversion by 35%?",
      a: "No. Warm audiences often convert better than cold, but percentages from old cases aren’t a norm. Watch your own CPA and frequency.",
    },
  ],
  sections: [
    {
      title: "Why ads need segments",
      level: 2,
      paras: [
        "Search catches demand by query. Networks and campaign refinements let you narrow or widen the circle: not show an ad to everyone who ever said “napoleon,” but tell cake from biography — via interests, history, and context.",
        "Segmentation saves budget on clearly off-target traffic and strengthens a relevant offer. It does not replace the offer or the landing page.",
      ],
      lists: [
        {
          intro: "Typical axes:",
          items: [
            "interests and behavior",
            "geography",
            "gender and age (probabilistic)",
            "devices and time",
            "your Metrica segments / lists",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "How Yandex estimates interests",
      level: 2,
      paras: [
        "The system leans on activity signals in its services and partner network: queries, visits, clicks, UI language, long-term habits. Machine-learning models build a probabilistic profile — not an exact dossier, an estimate for ad serving.",
        "Cookies and similar IDs help tie visits within user consent and browser settings. Blockers, incognito, and ID lifetime cut completeness — build in error.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Treating demographics in the ads account as absolute truth. It’s an estimate; bid adjustments by gender or age need conversion proof.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Demographics and adjustments",
      level: 2,
      paras: [
        "Gender and age for some users come from ecosystem profiles or accounts, for others from behavior. In Direct you use them for bid adjustments up or down, or for turning segments off.",
        "If the product is narrow (for example B2B only 30+), an adjustment can fit. If the audience is wide — don’t cut reach “just in case” without data.",
      ],
    },
    {
      title: "Remarketing and warm visits",
      level: 2,
      paras: [
        "Ads “follow” people who already visited the site or app: browsed the catalog, abandoned a cart, didn’t submit a lead. In Direct these are conditions on Metrica goals and segments — UI names have changed.",
        "It makes sense with sane frequency, excluding buyers, and a relevant creative. Setup and optimization practice live in the Direct remarketing article.",
      ],
      links: [
        {
          label: "Remarketing in Direct",
          href: "/en/blog/retargeting-direkt/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Lists, look-alike, and Metrica",
      level: 2,
      paras: [
        "Your audiences: CRM clients, subscribers, app IDs — with lawful data processing. Look-alike expands “similar” from a seed; seed quality beats file size.",
        "Metrica segments (goals, behavior, sources) can plug into Direct serving conditions. Then ads lean on your events, not only ecosystem-wide interests.",
      ],
      lists: [
        {
          intro: "Before uploading a list:",
          items: [
            "lawful basis and consent exist",
            "data is current and hashed per account rules",
            "opt-outs excluded",
            "frequency and creative plan exist",
            "goals measured, not only clicks",
          ],
        },
      ],
    },
    {
      title: "What not to promise yourself",
      level: 2,
      paras: [
        "Segmentation does not fix a weak offer or a slow landing page. “Correct Crypta” does not replace search keywords and ad tests.",
        "Don’t copy other people’s conversion-gain numbers from 2017 articles: your CPA and bounce rate are your own.",
      ],
      links: [
        {
          label: "Parsing audiences",
          href: "/en/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Yandex gives probabilistic segments plus your data (Metrica, lists). Use them to refine impressions, not as a strategy substitute.",
        "Product audience → account segments → measurement. Remarketing and look-alike are tools, not a magic button.",
      ],
    },
  ],
  closing: [
    "Build the target-audience portrait, enable Metrica goals, set audience conditions in Direct, and check results by conversions — that way Yandex audience targeting serves economics, not “pretty checkboxes” in the ads account.",
  ],
  related: [
    "tselevaya-auditoriya",
    "retargeting-direkt",
    "metrika-tseli",
    "parsing-auditorii",
    "instrumenty-veb-analitiki",
    "strategii-yandeks-direkt",
  ],
};

/** ES overlay for yandeks-auditorii — same structure as RU JSON / EN. */
export const yandeksAuditoriiEs: BlogPost = {
  slug: "yandeks-auditorii",
  title: "Targeting de audiencias en Yandex: Crypta, segmentos y Direct",
  date: "2017-01-31",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-auditorii/cover.webp",
  excerpt:
    "Cómo Yandex segmenta usuarios para ads: señales Crypta, demografía, intereses, remarketing y look-alike — sin claims obsoletos de «+35% de conversión» ni guías para subir listas de contactos ajenas.",
  lead: [
    "En los ads de Yandex armas audiencias con más que keywords: intereses y comportamiento, geo, demografía, segmentos de Metrica, listas CRM y lookalikes. Detrás de la estimación de «quién es» está la tech de perfil (históricamente Crypta y modelos sobre comportamiento del ecosistema).",
    "Abajo: qué significan esas señales y cómo usarlas en Direct. Las etiquetas de UI de condiciones de audiencia y los nombres de informes se han movido — mira Direct Help actual. Cómo describir la audiencia de un producto es un artículo aparte; la práctica de remarketing a nivel de cuenta también.",
  ],
  faq: [
    {
      q: "¿Es lo mismo que «cómo encontrar la audiencia objetivo»?",
      a: "No. Aquella pieza es un retrato de producto o contenido. Esta cubre cómo el sistema de ads de Yandex estrecha las impresiones por señales y segmentos.",
    },
    {
      q: "¿Crypta sigue llamándose así?",
      a: "Los nombres y el wording de Help han evolucionado. La idea es la misma: un perfil probabilístico a partir del comportamiento en el ecosistema, no un «pasaporte desde una cookie».",
    },
    {
      q: "¿Las cookies guardan contraseñas?",
      a: "No como regla. Las cookies son identificadores y settings de sesión o consentimiento. No las confundas con guardar logins en claro «en cada cookie».",
    },
    {
      q: "¿Se pueden subir emails y teléfonos ajenos?",
      a: "Solo con base legal y consentimiento. Las listas compradas arriesgan bloqueos y reclamaciones. Evita uploads grises.",
    },
    {
      q: "¿El remarketing siempre sube la conversión un 35%?",
      a: "No. Las audiencias cálidas a menudo convierten mejor que las frías, pero los porcentajes de casos viejos no son norma. Mira tu propio CPA y frecuencia.",
    },
  ],
  sections: [
    {
      title: "Por qué los ads necesitan segmentos",
      level: 2,
      paras: [
        "La búsqueda captura demanda por query. Las redes y los refinamientos de campaña dejan estrechar o ampliar el círculo: no mostrar un anuncio a quien alguna vez dijo «napoleón», sino separar pastel de biografía — vía intereses, historial y contexto.",
        "La segmentación ahorra presupuesto en tráfico claramente off-target y refuerza una oferta relevante. No sustituye la oferta ni la landing.",
      ],
      lists: [
        {
          intro: "Ejes típicos:",
          items: [
            "intereses y comportamiento",
            "geografía",
            "género y edad (probabilístico)",
            "dispositivos y hora",
            "tus segmentos / listas de Metrica",
          ],
        },
      ],
      links: [
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Cómo Yandex estima intereses",
      level: 2,
      paras: [
        "El sistema se apoya en señales de actividad en sus servicios y red partner: queries, visitas, clics, idioma de UI, hábitos a largo plazo. Modelos de machine learning arman un perfil probabilístico — no un dossier exacto, una estimación para servir ads.",
        "Las cookies e IDs similares ayudan a amarrar visitas dentro del consentimiento del usuario y los settings del navegador. Blockers, incógnito y la vida del ID recortan la completitud — asume error.",
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Tratar la demografía en la cuenta de ads como verdad absoluta. Es una estimación; los ajustes de puja por género o edad necesitan prueba de conversión.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Demografía y ajustes",
      level: 2,
      paras: [
        "Género y edad para algunos usuarios vienen de perfiles o cuentas del ecosistema, para otros del comportamiento. En Direct los usas para ajustes de puja arriba o abajo, o para apagar segmentos.",
        "Si el producto es estrecho (por ejemplo B2B solo 30+), un ajuste puede encajar. Si la audiencia es amplia — no cortes alcance «por si acaso» sin datos.",
      ],
    },
    {
      title: "Remarketing y visitas cálidas",
      level: 2,
      paras: [
        "Los ads «siguen» a quienes ya visitaron el sitio o la app: miraron el catálogo, abandonaron el carrito, no enviaron un lead. En Direct son condiciones sobre metas y segmentos de Metrica — los nombres de UI han cambiado.",
        "Tiene sentido con frecuencia sensata, exclusión de compradores y creativo relevante. Setup y práctica de optimización viven en el artículo de remarketing de Direct.",
      ],
      links: [
        {
          label: "Remarketing en Direct",
          href: "/es/blog/retargeting-direkt/",
        },
        {
          label: "Metas en Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Listas, look-alike y Metrica",
      level: 2,
      paras: [
        "Tus audiencias: clientes CRM, suscriptores, IDs de app — con procesamiento lícito de datos. Look-alike amplía «similares» desde un seed; la calidad del seed gana al tamaño del archivo.",
        "Los segmentos de Metrica (metas, comportamiento, fuentes) pueden enchufarse a las condiciones de serving de Direct. Entonces los ads se apoyan en tus eventos, no solo en intereses a escala de ecosistema.",
      ],
      lists: [
        {
          intro: "Antes de subir una lista:",
          items: [
            "existen base legal y consentimiento",
            "los datos están actuales y hasheados según las reglas de la cuenta",
            "opt-outs excluidos",
            "hay plan de frecuencia y creativo",
            "se miden metas, no solo clics",
          ],
        },
      ],
    },
    {
      title: "Qué no prometerte",
      level: 2,
      paras: [
        "La segmentación no arregla una oferta floja ni una landing lenta. «Crypta correcta» no sustituye keywords de búsqueda ni tests de anuncios.",
        "No copies cifras ajenas de ganancia de conversión de artículos de 2017: tu CPA y bounce rate son tuyos.",
      ],
      links: [
        {
          label: "Parsing de audiencias",
          href: "/es/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Yandex da segmentos probabilísticos más tus datos (Metrica, listas). Úsalos para afinar impresiones, no como sustituto de estrategia.",
        "Audiencia de producto → segmentos de cuenta → medición. Remarketing y look-alike son herramientas, no un botón mágico.",
      ],
    },
  ],
  closing: [
    "Arma el retrato de audiencia objetivo, activa metas de Metrica, fija condiciones de audiencia en Direct y revisa resultados por conversiones — así el targeting de audiencias de Yandex sirve a la economics, no a «checkboxes bonitos» en la cuenta de ads.",
  ],
  related: [
    "tselevaya-auditoriya",
    "retargeting-direkt",
    "metrika-tseli",
    "parsing-auditorii",
    "instrumenty-veb-analitiki",
    "strategii-yandeks-direkt",
  ],
};

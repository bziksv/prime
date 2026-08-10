import type { BlogPost } from "../../../data/blog";

/** EN overlay for target-vk — same structure as RU JSON. */
export const targetVkEn: BlogPost = {
  slug: "target-vk",
  title: "VK targeted ads: a step-by-step setup",
  date: "2019-12-24",
  category: "SMM",
  cover: "/images/blog/target-vk/cover-en.webp",
  excerpt:
    "How to launch VK Ads targeting: formats, audience, remarketing and pixel, schedule, CPC/CPM, and reading the stats — without outdated 2019 ad-account click paths.",
  lead: [
    "VK targeting runs ads to segments in the ad account (often under the VK Ads brand today). That isn’t the same as promoting a post in someone else’s community: here you set audience, bids, and format yourself.",
    "Below: launch order — account and rules, formats, audience, remarketing, schedule, billing, and result control. Menu labels and creative sizes change — check the current UI; the ads account has shifted more than once since 2019.",
  ],
  faq: [
    {
      q: "How is targeting different from community ads?",
      a: "A community placement reaches that community’s audience. Targeting is an auction by segments (geo, interests, remarketing). They’re often combined.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a goal (traffic, leads, community), one format, a narrow audience, and a daily cap. Don’t turn on every interest “just in case.”",
    },
    {
      q: "Do I need the pixel?",
      a: "For site remarketing and event optimization — yes. More in the VK pixel article.",
    },
    {
      q: "Should I use CPC or CPM?",
      a: "Depends on goal and stage. At the start, use the account forecast and your lead economics; the model often can’t change after ad creation — check before launch.",
    },
    {
      q: "Should I run ads 24/7?",
      a: "Not always. For calls — business hours; for CRM forms — wider is fine. Watch your own time-of-day stats.",
    },
    {
      q: "What if my ad is rejected?",
      a: "Check VK ad policies, remove prohibited content, fix the creative. Bypassing review risks the account and budget.",
    },
    {
      q: "Where do I see results?",
      a: "In account stats plus goals on the site or in the community. Without lead tracking, bid optimization is blind.",
    },
  ],
  sections: [
    {
      title: "Account, rules, and community ads vs targeting",
      level: 2,
      paras: [
        "Create or open a VK ad account; pick a client or agency account if needed. Before launch, read the rules: prohibited topics and creatives get cut in review; repeated violations hit the account.",
        "Paid posts in communities work when that community’s audience already matches yours. If you need leads, sales, and a precise segment — targeting is usually required. Don’t paste “millions of VK reach” from old roundups as your own forecast.",
      ],
      links: [
        {
          label: "Ads in VK communities",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Ad formats",
      level: 2,
      paras: [
        "In the feed you’ll typically see carousel, a post with a button, universal post, lead forms, Stories, site ads. Separately: community promotion blocks, text+image banners, apps.",
        "Format sets and file limits (weight, JPG/PNG, etc.) have changed — take current requirements from account Help. For a test pick one format for the goal: lead without a site → lead form; traffic to a landing → post/site; brand awareness → reach formats.",
        "You can promote an existing community post or build a creative from scratch. The offer on the image and in the copy must match the landing.",
      ],
      lists: [
        {
          intro: "Before Create:",
          items: [
            "campaign goal is clear",
            "one primary format for the test",
            "creative reads on mobile",
            "link, community, or form works",
          ],
        },
      ],
    },
    {
      title: "Audience, remarketing, and schedule",
      level: 2,
      paras: [
        "Build the segment for the offer: geo, gender/age, interests, devices. A narrow relevant audience beats “everyone 18–65 in the city.” Treat the account’s reach forecast as order of magnitude.",
        "Remarketing — warm users: site visitors (pixel), lists, QR and other audience sources available in the account. Exclude buyers from chase offers if the job is new sales.",
        "Schedule: match lead handling. Night calls with no operator waste budget; CRM forms can run wider.",
      ],
      links: [
        {
          label: "VK pixel",
          href: "/en/blog/piksel-vk/",
        },
      ],
    },
    {
      title: "Bids, billing, and review",
      level: 2,
      paras: [
        "Billing models are usually CPC and CPM; some goals also use optimized models — names and availability live in the UI. Account bid hints are a market compass, not your economics.",
        "Pick placements (mobile/desktop, network) deliberately. After save, some fields (billing model, format, sometimes URL) can’t change — easier to create a new ad.",
        "Top up the balance for an individual or company, wait for review, and start with a daily cap.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Don’t copy outsider “minimum bids” from 2019 guides. Calculate from acceptable CPA and conversion.",
        },
      ],
    },
    {
      title: "Analysis and iterations",
      level: 2,
      paras: [
        "In the account watch impressions, clicks, CTR, spend, target actions. Cross-check with analytics/CRM: clicks with no leads — fix the offer or audience, not only the bid.",
        "Pause weak combinations, boost working ones, don’t change everything at once. Run remarketing and cold targeting separately by creative and bid.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "targeting ≠ a paid post in a community",
            "narrow audience + one hypothesis per test",
            "pixel for site remarketing",
            "schedule matched to lead handling",
            "current UI — in VK Ads Help",
          ],
        },
      ],
    },
  ],
  closing: [
    "Run a narrow test: one format, one audience, a daily cap, and lead tracking — after a few days expand only what hits your CPA target.",
  ],
  related: [
    "reklama-v-pablikah-vk",
    "piksel-vk",
    "raskrutka-gruppy-vk",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
    "metriki-reklamy",
  ],
};

/** ES overlay for target-vk — same structure as RU JSON. */
export const targetVkEs: BlogPost = {
  slug: "target-vk",
  title: "Ads dirigidos en VK: setup paso a paso",
  date: "2019-12-24",
  category: "SMM",
  cover: "/images/blog/target-vk/cover-es.webp",
  excerpt:
    "Cómo lanzar targeting en VK Ads: formatos, audiencia, remarketing y pixel, schedule, CPC/CPM y lectura de stats — sin click paths obsoletos de cuentas de 2019.",
  lead: [
    "El targeting de VK corre ads a segmentos en la cuenta publicitaria (hoy a menudo bajo la marca VK Ads). Eso no es lo mismo que promocionar un post en la comunidad de otro: aquí fijas audiencia, pujas y formato tú mismo.",
    "Abajo: orden de lanzamiento — cuenta y reglas, formatos, audiencia, remarketing, schedule, billing y control de resultados. Las etiquetas de menú y tamaños creativos cambian — mira la UI actual; la cuenta de ads se ha movido más de una vez desde 2019.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia el targeting de los ads en comunidades?",
      a: "Una placement en comunidad llega a la audiencia de esa comunidad. El targeting es una subasta por segmentos (geo, intereses, remarketing). A menudo se combinan.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Con un objetivo (tráfico, leads, comunidad), un formato, una audiencia estrecha y un tope diario. No enciendas todos los intereses «por si acaso».",
    },
    {
      q: "¿Hace falta el pixel?",
      a: "Para remarketing del sitio y optimización por eventos — sí. Más en el artículo del pixel de VK.",
    },
    {
      q: "¿Usar CPC o CPM?",
      a: "Depende del objetivo y de la etapa. Al inicio, usa el forecast de la cuenta y tu economía de lead; el modelo a menudo no se puede cambiar tras crear el anuncio — chequea antes del lanzamiento.",
    },
    {
      q: "¿Correr ads 24/7?",
      a: "No siempre. Para llamadas — horario laboral; para formularios CRM — más amplio está bien. Mira tus propias stats por hora del día.",
    },
    {
      q: "¿Y si rechazan mi anuncio?",
      a: "Revisa las policies de ads de VK, quita contenido prohibido, corrige la creatividad. Saltarse el review arriesga la cuenta y el presupuesto.",
    },
    {
      q: "¿Dónde veo resultados?",
      a: "En las stats de la cuenta más objetivos en el sitio o en la comunidad. Sin tracking de leads, la optimización de puja va a ciegas.",
    },
  ],
  sections: [
    {
      title: "Cuenta, reglas y ads en comunidad vs targeting",
      level: 2,
      paras: [
        "Crea o abre una cuenta publicitaria de VK; elige cuenta de cliente o agencia si hace falta. Antes del lanzamiento, lee las reglas: temas y creatividades prohibidas se cortan en review; violaciones repetidas pegan a la cuenta.",
        "Los posts de pago en comunidades funcionan cuando la audiencia de esa comunidad ya encaja con la tuya. Si necesitas leads, ventas y un segmento preciso — suele hacer falta targeting. No pegues «millones de reach en VK» de roundups viejos como tu propio forecast.",
      ],
      links: [
        {
          label: "Ads en comunidades VK",
          href: "/es/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Cuenta publicitaria",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Formatos de anuncio",
      level: 2,
      paras: [
        "En el feed suelen verse carrusel, post con botón, post universal, lead forms, Stories, ads al sitio. Aparte: bloques de promoción de comunidad, banners texto+imagen, apps.",
        "Los sets de formato y límites de archivo (peso, JPG/PNG, etc.) han cambiado — toma requisitos actuales de la Help de la cuenta. Para un test elige un formato según el objetivo: lead sin sitio → lead form; tráfico a un landing → post/sitio; brand awareness → formatos de reach.",
        "Puedes promocionar un post existente de la comunidad o armar una creatividad desde cero. La oferta en la imagen y en el copy debe encajar con el landing.",
      ],
      lists: [
        {
          intro: "Antes de Create:",
          items: [
            "objetivo de campaña claro",
            "un formato primario para el test",
            "creatividad legible en móvil",
            "enlace, comunidad o formulario funcionan",
          ],
        },
      ],
    },
    {
      title: "Audiencia, remarketing y schedule",
      level: 2,
      paras: [
        "Arma el segmento para la oferta: geo, género/edad, intereses, dispositivos. Una audiencia estrecha y relevante gana a «todos 18–65 en la ciudad». Trata el forecast de reach de la cuenta como orden de magnitud.",
        "Remarketing — usuarios calientes: visitantes del sitio (pixel), listas, QR y otras fuentes de audiencia disponibles en la cuenta. Excluye compradores de ofertas de chase si el trabajo es ventas nuevas.",
        "Schedule: encaja con el manejo de leads. Llamadas de noche sin operador tiran presupuesto; formularios CRM pueden correr más amplio.",
      ],
      links: [
        {
          label: "Pixel de VK",
          href: "/es/blog/piksel-vk/",
        },
      ],
    },
    {
      title: "Pujas, billing y review",
      level: 2,
      paras: [
        "Los modelos de billing suelen ser CPC y CPM; algunos objetivos también usan modelos optimizados — nombres y disponibilidad viven en la UI. Las pistas de puja de la cuenta son brújula de mercado, no tu economía.",
        "Elige placements (móvil/desktop, red) a propósito. Tras guardar, algunos campos (modelo de billing, formato, a veces URL) no se pueden cambiar — más fácil crear un anuncio nuevo.",
        "Recarga el balance para persona o empresa, espera el review y arranca con un tope diario.",
      ],
      notes: [
        {
          kind: "tip",
          text: "No copies «pujas mínimas» ajenas de guías de 2019. Calcula desde un CPA aceptable y la conversión.",
        },
      ],
    },
    {
      title: "Análisis e iteraciones",
      level: 2,
      paras: [
        "En la cuenta mira impresiones, clics, CTR, gasto, acciones target. Cruza con analytics/CRM: clics sin leads — arregla la oferta o la audiencia, no solo la puja.",
        "Pausa combinaciones flojas, potencia las que funcionan, no lo cambies todo a la vez. Corre remarketing y targeting frío por separado en creatividad y puja.",
      ],
      lists: [
        {
          intro: "Recuerda:",
          items: [
            "targeting ≠ un post de pago en una comunidad",
            "audiencia estrecha + una hipótesis por test",
            "pixel para remarketing del sitio",
            "schedule alineado al manejo de leads",
            "UI actual — en la Help de VK Ads",
          ],
        },
      ],
    },
  ],
  closing: [
    "Corre un test estrecho: un formato, una audiencia, un tope diario y tracking de leads — tras unos días expande solo lo que pegue a tu CPA target.",
  ],
  related: [
    "reklama-v-pablikah-vk",
    "piksel-vk",
    "raskrutka-gruppy-vk",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
    "metriki-reklamy",
  ],
};

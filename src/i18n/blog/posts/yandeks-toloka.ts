import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-toloka — same structure as RU JSON. */
export const yandeksTolokaEn: BlogPost = {
  slug: "yandeks-toloka",
  title: "Toloka (formerly Yandex.Toloka): tasks, roles, and realistic earnings",
  date: "2021-09-28",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-toloka/cover-en.webp",
  excerpt:
    "What Toloka is: crowdsourced data labeling for AI and search. Requester and worker roles, task types, rating, and why earnings-per-day figures from old guides are outdated.",
  lead: [
    "Toloka launched in 2014 as a Yandex project: people do short tasks judging content and data, and companies get labels for search, ads, and AI models.",
    "Since then the platform grew and split by market: the international track is Toloka.ai; for users in Russia the focus shifted to local Yandex task services. Below: how crowdsourcing works, what tasks look like, and what to expect from pay in 2026 — without “easy thousands” promises.",
  ],
  faq: [
    {
      q: "Are Toloka and Yandex.Toloka the same?",
      a: "Historically yes. Now brand and infrastructure are split: international Toloka.ai (data for AI) and local task products for the RU audience. Check current domains and terms on the live service sites.",
    },
    {
      q: "Can I be both a worker and a requester?",
      a: "On the classic setup roles were usually split: either you post tasks or you complete them. Confirm in the current rules of the platform you pick.",
    },
    {
      q: "How much do people really earn?",
      a: "It depends on task availability, rating, region, and payout currency. Old “$5 a day” cues from 2020–2021 guides are often inflated or irrelevant: the feed is uneven, simple tasks pay pennies.",
    },
    {
      q: "Why do businesses and developers use it?",
      a: "Human labeling and judgment: search relevance, moderation, UI and copy comparisons, data to train and evaluate models — faster and cheaper than a huge in-house labeling team at peak load.",
    },
    {
      q: "Do I need special training?",
      a: "Often onboarding and practice tasks are enough. Hard projects (expert domains, model evaluation) need careful reading of instructions; mistakes cut rating and access.",
    },
  ],
  sections: [
    {
      title: "What Toloka is",
      level: 2,
      paras: [
        "It’s a microtask crowdsourcing platform (human-in-the-loop): workers label and judge data; requesters get volume with quality control.",
        "At first most tasks came from the Yandex ecosystem (search, maps, services). Later the platform opened to external companies and research. International Toloka now focuses on data and evaluation for AI and LLMs; in Russia, access and branding should be checked separately.",
      ],
      lists: [
        {
          intro: "Typical requester goals:",
          items: [
            "search and ad relevance scoring",
            "content moderation and classification",
            "collecting and verifying reference data",
            "comparing design, names, interfaces",
            "labeling and judging model answers",
          ],
        },
      ],
    },
    {
      title: "Sign-up and roles",
      level: 2,
      paras: [
        "You usually need a service account (historically a Yandex ID), phone confirmation, and age 18+ because some content is adult. After login you get a cabinet with stats and balance.",
        "Workers pick tasks from a feed. Requesters set instructions, quality control, and budget. Combining both roles on one account is often not allowed.",
      ],
      lists: [
        {
          intro: "Before a worker starts:",
          items: [
            "complete training or practice tasks",
            "read the full instruction — or rejection rates spike",
            "watch accepted vs rejected work stats",
            "don’t chase speed at the cost of quality",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Payout terms, fees, and tax status (including self-employment on local services) change. Follow the platform help pages, not screenshots from old articles.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Task types",
      level: 2,
      paras: [
        "Most jobs are online and take minutes: watch a clip, mark relevance, compare two options, check contacts. There are also field tasks: photo an object at an address — pay is modest, travel can erase the upside.",
      ],
      lists: [
        {
          intro: "Common formats:",
          items: [
            "video or page match to a query",
            "search results review",
            "ad and banner quality",
            "business data freshness checks",
            "usability and mini-surveys",
            "expert AI judgments (harder and rarer for beginners)",
          ],
        },
      ],
      tables: [
        {
          caption: "Online vs field tasks",
          headers: ["Type", "Pros", "Cons"],
          rows: [
            ["Online", "Fast, can do in batches", "Low pay per item"],
            ["Field", "Sometimes higher rate", "Time and travel, risk of going negative"],
          ],
        },
      ],
    },
    {
      title: "Rating and access to jobs",
      level: 2,
      paras: [
        "Quality drives access: skills after tests, relative and absolute rating historically unlocked better-paid tasks. Rejected work hits the metrics.",
        "The feed is uneven: more jobs on weekdays, fewer on weekends. There’s no guaranteed daily income — it depends on the requester pool and your rating.",
      ],
    },
    {
      title: "Pay: expectations without rose-tinted glasses",
      level: 2,
      paras: [
        "Old guides wrote about fractions of a cent for simple tasks and a few dollars a day with active work. That’s not a salary or a forecast: currency, payout fees, and task availability changed with the platform.",
        "Payouts historically went to e-wallets (YuMoney and others) with a fee. The live list of methods and minimums is only in the cabinet of the service you use.",
      ],
      lists: [
        {
          intro: "A realistic frame:",
          items: [
            "this is micro side work, not a main job",
            "training time and rejections cost too",
            "high rating beats chaotic clicking",
            "check regional rules (Toloka.ai access vs local tasks)",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Copying earnings figures from 2019–2021 articles. After brand and market reorgs those cues are stale — watch the live feed and your accepted tasks.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Toloka is a tool for human data labeling and judgment, useful for AI and search requesters. For workers it’s optional micro side work with a rating and an uneven feed. Check the current service for your region and don’t treat old “dollars a day” figures as a guarantee.",
      ],
    },
  ],
};

/** ES overlay for yandeks-toloka — same structure as RU JSON / EN. */
export const yandeksTolokaEs: BlogPost = {
  slug: "yandeks-toloka",
  title: "Toloka (antes Yandex.Toloka): tareas, roles y ganancias realistas",
  date: "2021-09-28",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-toloka/cover-es.webp",
  excerpt:
    "Qué es Toloka: etiquetado crowdsourced de datos para IA y búsqueda. Roles de requester y worker, tipos de tareas, rating y por qué las cifras de ganancias al día de guías antiguas están obsoletas.",
  lead: [
    "Toloka nació en 2014 como proyecto de Yandex: la gente hace tareas cortas juzgando contenido y datos, y las empresas obtienen etiquetas para búsqueda, ads y modelos de IA.",
    "Desde entonces la plataforma creció y se partió por mercado: la vía internacional es Toloka.ai; para usuarios en Rusia el foco pasó a servicios locales de tareas de Yandex. Abajo: cómo funciona el crowdsourcing, cómo se ven las tareas y qué esperar del pago en 2026 — sin promesas de «miles fáciles».",
  ],
  faq: [
    {
      q: "¿Toloka y Yandex.Toloka son lo mismo?",
      a: "Históricamente sí. Ahora marca e infraestructura están separadas: Toloka.ai internacional (datos para IA) y productos locales de tareas para la audiencia RU. Revisa dominios y términos actuales en los sitios vivos del servicio.",
    },
    {
      q: "¿Puedo ser worker y requester a la vez?",
      a: "En el esquema clásico los roles solían estar separados: o publicas tareas o las completas. Confírmalo en las reglas actuales de la plataforma que elijas.",
    },
    {
      q: "¿Cuánto se gana de verdad?",
      a: "Depende de la disponibilidad de tareas, el rating, la región y la moneda de payout. Las pistas antiguas de «$5 al día» de guías 2020–2021 suelen estar infladas o irrelevantes: el feed es irregular, las tareas simples pagan céntimos.",
    },
    {
      q: "¿Por qué lo usan negocios y developers?",
      a: "Etiquetado y juicio humano: relevancia de búsqueda, moderación, comparaciones de UI y copy, datos para entrenar y evaluar modelos — más rápido y barato que un equipo enorme de labeling interno en picos de carga.",
    },
    {
      q: "¿Hace falta formación especial?",
      a: "A menudo bastan onboarding y tareas de práctica. Los proyectos duros (dominios expert, evaluación de modelos) piden leer bien las instrucciones; los errores bajan el rating y el acceso.",
    },
  ],
  sections: [
    {
      title: "Qué es Toloka",
      level: 2,
      paras: [
        "Es una plataforma de crowdsourcing de microtareas (human-in-the-loop): los workers etiquetan y juzgan datos; los requesters obtienen volumen con control de calidad.",
        "Al principio la mayoría de tareas venían del ecosistema Yandex (búsqueda, mapas, servicios). Luego la plataforma se abrió a empresas externas e investigación. La Toloka internacional ahora se centra en datos y evaluación para IA y LLMs; en Rusia, acceso y marca hay que revisarlos aparte.",
      ],
      lists: [
        {
          intro: "Objetivos típicos del requester:",
          items: [
            "scoring de relevancia de búsqueda y ads",
            "moderación y clasificación de contenido",
            "recoger y verificar datos de referencia",
            "comparar diseño, nombres, interfaces",
            "etiquetar y juzgar respuestas de modelos",
          ],
        },
      ],
    },
    {
      title: "Registro y roles",
      level: 2,
      paras: [
        "Suele hacer falta una cuenta del servicio (históricamente un Yandex ID), confirmación de teléfono y edad 18+ porque parte del contenido es adulto. Tras el login tienes un panel con stats y balance.",
        "Los workers eligen tareas de un feed. Los requesters fijan instrucciones, control de calidad y presupuesto. Combinar ambos roles en una cuenta a menudo no está permitido.",
      ],
      lists: [
        {
          intro: "Antes de que un worker empiece:",
          items: [
            "completar formación o tareas de práctica",
            "leer la instrucción completa — o suben los rechazos",
            "mirar stats de trabajo aceptado vs rechazado",
            "no perseguir velocidad a costa de la calidad",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          text: "Términos de payout, comisiones y estatus fiscal (incluido el autoempleo en servicios locales) cambian. Sigue las páginas de ayuda de la plataforma, no capturas de artículos viejos.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Tipos de tareas",
      level: 2,
      paras: [
        "La mayoría de jobs son online y duran minutos: ver un clip, marcar relevancia, comparar dos opciones, revisar contactos. También hay tareas de campo: fotografiar un objeto en una dirección — el pago es modesto, el desplazamiento puede borrar la ventaja.",
      ],
      lists: [
        {
          intro: "Formatos habituales:",
          items: [
            "encaje de vídeo o página a una query",
            "revisión de resultados de búsqueda",
            "calidad de ads y banners",
            "chequeos de frescura de datos de negocios",
            "usabilidad y mini-encuestas",
            "juicios expert de IA (más duros y raros para principiantes)",
          ],
        },
      ],
      tables: [
        {
          caption: "Tareas online vs de campo",
          headers: ["Tipo", "Pros", "Contras"],
          rows: [
            ["Online", "Rápidas, se pueden hacer en lotes", "Pago bajo por ítem"],
            ["Campo", "A veces tarifa más alta", "Tiempo y desplazamiento, riesgo de salir en negativo"],
          ],
        },
      ],
    },
    {
      title: "Rating y acceso a jobs",
      level: 2,
      paras: [
        "La calidad abre el acceso: skills tras tests, rating relativo y absoluto históricamente desbloqueaban tareas mejor pagadas. El trabajo rechazado golpea las métricas.",
        "El feed es irregular: más jobs entre semana, menos el fin de semana. No hay ingreso diario garantizado — depende del pool de requesters y de tu rating.",
      ],
    },
    {
      title: "Pago: expectativas sin gafas de color",
      level: 2,
      paras: [
        "Las guías antiguas hablaban de fracciones de céntimo por tareas simples y unos dólares al día con trabajo activo. Eso no es un salario ni un forecast: moneda, comisiones de payout y disponibilidad de tareas cambiaron con la plataforma.",
        "Los payouts históricamente iban a e-wallets (YuMoney y otros) con comisión. La lista viva de métodos y mínimos solo está en el panel del servicio que uses.",
      ],
      lists: [
        {
          intro: "Un marco realista:",
          items: [
            "es micro trabajo extra, no el empleo principal",
            "el tiempo de formación y los rechazos también cuestan",
            "un rating alto gana al clic caótico",
            "revisa reglas regionales (acceso a Toloka.ai vs tareas locales)",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Copiar cifras de ganancias de artículos 2019–2021. Tras reorgs de marca y mercado esas pistas están viejas — mira el feed vivo y tus tareas aceptadas.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cierre breve",
      level: 2,
      paras: [
        "Toloka es una herramienta de etiquetado y juicio humano de datos, útil para requesters de IA y búsqueda. Para workers es micro trabajo extra opcional con rating y un feed irregular. Revisa el servicio actual de tu región y no trates las cifras antiguas de «dólares al día» como garantía.",
      ],
    },
  ],
};

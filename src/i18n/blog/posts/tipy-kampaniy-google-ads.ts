import type { BlogPost } from "../../../data/blog";

/** EN overlay for tipy-kampaniy-google-ads — same structure as RU JSON. */
export const tipyKampaniyGoogleAdsEn: BlogPost = {
  slug: "tipy-kampaniy-google-ads",
  title: "Google Ads campaign types: which format fits which job",
  date: "2019-12-19",
  category: "Paid search",
  cover: "/images/blog/tipy-kampaniy-google-ads/cover-en.webp",
  excerpt:
    "Search, Display, YouTube, Shopping, remarketing, Performance Max, audiences — how to pick a Google Ads campaign type by role, not by a 2019 button catalog.",
  lead: [
    "A campaign type in Google Ads isn’t just a wizard radio button. It ties surface, ad format, and the signal the system optimizes for. People mix it up with bid strategy: strategy answers “how you pay,” type answers “where and in what form you show.”",
    "Below is a format map: Search, display, video, shopping, remarketing, and automated / mixed campaigns. Labels moved (Smart Shopping → Performance Max and more) — confirm the live list in Ads and Google Help.",
  ],
  faq: [
    {
      q: "Is campaign type the same as bid strategy?",
      a: "No. Type sets channel and format. Strategy (clicks, CPA, ROAS) sets how bids are assigned inside the campaign.",
    },
    {
      q: "Where should a beginner start?",
      a: "Search for hot demand, or Shopping if the product feed is ready. Display and video wait until you know their funnel job.",
    },
    {
      q: "Do I need brand Search if organic already ranks?",
      a: "Often yes — it blocks competitors on your name and captures ready demand. Measure it apart from the rest of the keyword set.",
    },
    {
      q: "Should I bid on competitor names?",
      a: "You can, but clicks cost more and quality is uneven. Price CPA and legal/reputation risk on their own line.",
    },
    {
      q: "What is Performance Max?",
      a: "A heavily automated campaign across several Google surfaces when you supply assets and goals. It grew out of “smart shopping” ideas but runs wider — see current Help for details.",
    },
    {
      q: "Does remarketing find new customers?",
      a: "Mostly it brings back people who already know you. New users need cold formats and real demand.",
    },
    {
      q: "Where are bid strategies covered?",
      a: "In the separate article on Google Ads automated strategies.",
    },
  ],
  sections: [
    {
      title: "Why types come before launch",
      level: 2,
      paras: [
        "Google Ads covers Search, partner sites (Display), YouTube, and shopping units. You usually pay per click or another outcome tied to the campaign model — not for a permanent slot.",
        "The auction weighs bid and quality/relevance. An expensive click on a weak ad still loses to a more relevant competitor. Campaign type doesn’t cancel that.",
        "Picking a type means picking a funnel job: capture demand, reach, win-back, or catalog. Without a job, budget leaks across every surface at once.",
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Search: brand, generic, and competitor queries",
      level: 2,
      paras: [
        "Search ads are text (plus extensions) above or below the results; shopping cards can sit nearby when you have a feed. The user already typed a query — that’s hot demand.",
        "Brand queries (people looking for you) are usually cheaper and convert better. Generic and mid-volume terms cost more and need a sharp USP. Competitor queries are a separate economy and ethics call — don’t dump them into the brand campaign.",
        "Dynamic Search Ads lean on site content: weak page structure means weak auto headlines.",
      ],
      lists: [
        {
          intro: "Search habits that pay off:",
          items: [
            "brand split from the rest of the set",
            "negatives are non-negotiable",
            "extensions lift visibility",
            "landing page matches query intent",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads keywords",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Display, YouTube, and shopping",
      level: 2,
      paras: [
        "The Display Network places banners and responsive ads on partner sites by interest, topic, placement, and audience. KPIs differ from Search — don’t expect a first-banner lead like a commercial query.",
        "YouTube spans TrueView, Shorts, and other video formats (the menu keeps changing): views, traffic, leads. Non-skippable inserts aren’t the only or always best option — match type to goal in the current UI.",
        "Shopping ads show a card with price and photo from Merchant Center. Treat branded and non-branded shopping demand as different economics: CPC and margin won’t match.",
      ],
      links: [
        {
          label: "Responsive display ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Remarketing, audiences, and automated campaigns",
      level: 2,
      paras: [
        "Remarketing brings back site or app visitors and customer lists. Similar audiences (lookalike-style expansion) grow reach from warm signals — quality tracks the seed list.",
        "Intent-based Display and hand-picked placements trade off control: broader learning vs a manual site list.",
        "“Smart Shopping” in old guides is the ancestor of wider auto campaigns like Performance Max: the system allocates impressions given your assets and goals. Easy setup ≠ guaranteed ROI. You still need feed or creatives, clean goals, and a check that Search isn’t being cannibalized.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Customer lists and Customer Match follow consent rules and Google policies — don’t upload databases casually.",
        },
      ],
    },
    {
      title: "How to choose without thinning the budget",
      level: 2,
      paras: [
        "Goal and KPI first, then one or two campaign types for a test. A media plan and Performance Planner help size spend — you still pick the type.",
        "Don’t paste someone else’s “14 types” checklist or an old Spotify-style guide. The product UI moved on. Refresh the map each season from Ads Help.",
      ],
      lists: [
        {
          intro: "Keep in mind:",
          items: [
            "type ≠ bid strategy",
            "Search = demand; Display/video = different KPIs",
            "brand and competitors = separate economics",
            "PMax and smart formats need data and oversight",
            "live names live only in the account",
          ],
        },
      ],
      links: [
        {
          label: "Google Performance Planner",
          href: "/en/blog/planirovshchik-rezultatov-google/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
  ],
  closing: [
    "Name the job (Search / shopping / win-back / reach), run a narrow test with goals, then add surfaces — clearer than flipping on “all of Google at once.”",
  ],
  related: [
    "strategii-google-ads",
    "klyuchi-google-ads",
    "prognoz-trafika-google-ads",
    "adaptivnye-mediynye-obyavleniya",
    "google-merchant-center",
    "planirovshchik-rezultatov-google",
  ],
};

/** ES overlay for tipy-kampaniy-google-ads — same structure as RU JSON. */
export const tipyKampaniyGoogleAdsEs: BlogPost = {
  slug: "tipy-kampaniy-google-ads",
  title: "Tipos de campaña en Google Ads: qué formato encaja con cada trabajo",
  date: "2019-12-19",
  category: "Paid search",
  cover: "/images/blog/tipy-kampaniy-google-ads/cover.webp",
  excerpt:
    "Search, Display, YouTube, Shopping, remarketing, Performance Max, audiencias — cómo elegir un tipo de campaña de Google Ads por rol, no por un catálogo de botones de 2019.",
  lead: [
    "Un tipo de campaña en Google Ads no es solo un radio del wizard. Ata superficie, formato de anuncio y la señal que el sistema optimiza. La gente lo mezcla con la estrategia de puja: la estrategia responde «cómo pagas», el tipo responde «dónde y en qué forma muestras».",
    "Abajo hay un mapa de formatos: Search, display, vídeo, shopping, remarketing y campañas automatizadas / mixtas. Las etiquetas se movieron (Smart Shopping → Performance Max y más) — confirma la lista viva en Ads y en Google Help.",
  ],
  faq: [
    {
      q: "¿Tipo de campaña es lo mismo que estrategia de puja?",
      a: "No. El tipo fija canal y formato. La estrategia (clics, CPA, ROAS) fija cómo se asignan las pujas dentro de la campaña.",
    },
    {
      q: "¿Por dónde empieza un principiante?",
      a: "Search para demanda caliente, o Shopping si el feed de producto está listo. Display y vídeo esperan hasta que sepas su trabajo en el funnel.",
    },
    {
      q: "¿Hace falta Search de marca si el orgánico ya rankea?",
      a: "A menudo sí — bloquea competidores en tu nombre y captura demanda lista. Mídelo aparte del resto del set de keywords.",
    },
    {
      q: "¿Pujar por nombres de competidores?",
      a: "Se puede, pero los clics cuestan más y la calidad es irregular. Precia el CPA y el riesgo legal/reputacional en su propia línea.",
    },
    {
      q: "¿Qué es Performance Max?",
      a: "Una campaña muy automatizada en varias superficies de Google cuando aportas assets y objetivos. Creció de ideas de «smart shopping» pero corre más amplio — mira la Help actual para detalles.",
    },
    {
      q: "¿El remarketing encuentra clientes nuevos?",
      a: "Sobre todo trae de vuelta a quien ya te conoce. Usuarios nuevos necesitan formatos fríos y demanda real.",
    },
    {
      q: "¿Dónde se cubren las estrategias de puja?",
      a: "En el artículo aparte de estrategias automatizadas de Google Ads.",
    },
  ],
  sections: [
    {
      title: "Por qué los tipos van antes del lanzamiento",
      level: 2,
      paras: [
        "Google Ads cubre Search, sitios partner (Display), YouTube y unidades shopping. Suele pagarse por clic u otro outcome atado al modelo de campaña — no por un slot permanente.",
        "La subasta pondera puja y calidad/relevancia. Un clic caro en un anuncio flojo sigue perdiendo frente a un competidor más relevante. El tipo de campaña no cancela eso.",
        "Elegir un tipo es elegir un trabajo del funnel: capturar demanda, reach, win-back o catálogo. Sin trabajo, el presupuesto se filtra por todas las superficies a la vez.",
      ],
      links: [
        {
          label: "Estrategias de Google Ads",
          href: "/es/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Search: queries de marca, genéricas y de competidor",
      level: 2,
      paras: [
        "Los ads de Search son texto (más extensions) encima o debajo de los resultados; las cards shopping pueden ir cerca cuando hay feed. El usuario ya escribió una query — es demanda caliente.",
        "Las queries de marca (gente que te busca) suelen ser más baratas y convertir mejor. Términos genéricos y de volumen medio cuestan más y necesitan una USP afilada. Las queries de competidor son una economía y una ética aparte — no las tires a la campaña de marca.",
        "Dynamic Search Ads se apoyan en el contenido del sitio: estructura de página floja significa headlines auto flojos.",
      ],
      lists: [
        {
          intro: "Hábitos de Search que pagan:",
          items: [
            "marca separada del resto del set",
            "negatives no negociables",
            "extensions suben visibilidad",
            "landing alineado al intent de la query",
          ],
        },
      ],
      links: [
        {
          label: "Keywords de Google Ads",
          href: "/es/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Display, YouTube y shopping",
      level: 2,
      paras: [
        "La Display Network coloca banners y ads responsive en sitios partner por interés, tema, placement y audiencia. Los KPIs difieren de Search — no esperes un lead del primer banner como de una query comercial.",
        "YouTube abarca TrueView, Shorts y otros formatos de vídeo (el menú sigue cambiando): views, tráfico, leads. Los inserts no skippables no son la única ni siempre la mejor opción — encaja el tipo al objetivo en la UI actual.",
        "Los shopping ads muestran una card con precio y foto desde Merchant Center. Trata la demanda shopping branded y non-branded como economías distintas: CPC y margen no coincidirán.",
      ],
      links: [
        {
          label: "Ads display responsive",
          href: "/es/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Google Merchant Center",
          href: "/es/blog/google-merchant-center/",
        },
        {
          label: "Videoreclama en YouTube",
          href: "/es/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Remarketing, audiencias y campañas automatizadas",
      level: 2,
      paras: [
        "El remarketing trae de vuelta visitantes del sitio o app y listas de clientes. Audiencias similares (expansión tipo lookalike) crecen el reach desde señales calientes — la calidad sigue a la seed list.",
        "Display basado en intent y placements elegidos a mano intercambian control: learning más amplio vs una lista manual de sitios.",
        "«Smart Shopping» en guías viejas es el ancestro de campañas auto más amplias como Performance Max: el sistema asigna impresiones dados tus assets y objetivos. Setup fácil ≠ ROI garantizado. Sigues necesitando feed o creatividades, objetivos limpios y un check de que Search no se canibaliza.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Las listas de clientes y Customer Match siguen reglas de consentimiento y policies de Google — no subas bases de datos a la ligera.",
        },
      ],
    },
    {
      title: "Cómo elegir sin adelgazar el presupuesto",
      level: 2,
      paras: [
        "Primero objetivo y KPI, luego uno o dos tipos de campaña para un test. Un media plan y Performance Planner ayudan a dimensionar el gasto — tú sigues eligiendo el tipo.",
        "No pegues la checklist ajena de «14 tipos» ni una guía estilo Spotify vieja. La UI del producto avanzó. Refresca el mapa cada temporada desde Ads Help.",
      ],
      lists: [
        {
          intro: "Ten en cuenta:",
          items: [
            "tipo ≠ estrategia de puja",
            "Search = demanda; Display/vídeo = KPIs distintos",
            "marca y competidores = economías separadas",
            "PMax y formatos smart necesitan data y supervisión",
            "los nombres vivos viven solo en la cuenta",
          ],
        },
      ],
      links: [
        {
          label: "Google Performance Planner",
          href: "/es/blog/planirovshchik-rezultatov-google/",
        },
        {
          label: "Media plan",
          href: "/es/blog/mediaplan/",
        },
      ],
    },
  ],
  closing: [
    "Nombra el trabajo (Search / shopping / win-back / reach), corre un test estrecho con objetivos y luego suma superficies — más claro que encender «todo Google de golpe».",
  ],
  related: [
    "strategii-google-ads",
    "klyuchi-google-ads",
    "prognoz-trafika-google-ads",
    "adaptivnye-mediynye-obyavleniya",
    "google-merchant-center",
    "planirovshchik-rezultatov-google",
  ],
};

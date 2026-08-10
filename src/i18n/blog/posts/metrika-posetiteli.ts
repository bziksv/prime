import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-posetiteli — same structure as RU JSON. */
export const metrikaPosetiteliEn: BlogPost = {
  slug: "metrika-posetiteli",
  title: "Yandex Metrica “Visitors” report: profiles and lifecycle",
  date: "2018-07-17",
  category: "Analytics",
  cover: "/images/blog/metrika-posetiteli/cover-en.webp",
  excerpt:
    "How to read the visitors report in Yandex Metrica: anonymous profiles, lifecycle metrics, quick segments, and jumping into Session Replay — without confusing it with the Audience section.",
  lead: [
    "Most Metrica reports answer “what happens with visits.” The visitors report looks at people (anonymous profiles): how often they came, where first, how many goals they hit, and what the path to purchase looks like on a long cycle.",
    "Below: how it differs from source groupings, which lifecycle metrics to watch, and how to link a profile to Session Replay. Section names in the account change (“Visitors” / user profiles) — go by meaning: a client card, not a visit row. Session Replay has its own article; here the focus is the profiles report.",
  ],
  faq: [
    {
      q: "Is this the same as Audience?",
      a: "No. Audience is slices by demographics and interests. The visitors report is a list/cards of individual profiles with history.",
    },
    {
      q: "Can I see a person’s full name?",
      a: "No — these are anonymous counter IDs. Personal data in forms is a separate consent and policy scope.",
    },
    {
      q: "Why bother if traffic sources already exist?",
      a: "Sources show the channel. A profile shows how many touches are needed to a goal and how behavior changes visit to visit.",
    },
    {
      q: "Is there a period calendar?",
      a: "Historically the report built across the counter’s full life; the needed slice comes from segments (visits in a period, purchases, and similar). Check current UI in Help.",
    },
    {
      q: "Is ecommerce required?",
      a: "Not mandatory, but with purchase data you get order count and revenue per profile — handy for a store.",
    },
  ],
  sections: [
    {
      title: "Why watch visitors, not only visits",
      level: 2,
      paras: [
        "Visits are fine for daily channel control. For long deals (B2B, expensive goods, multi-touch services) the person’s path matters more: first source, visits before a lead, goals along the way.",
        "A profile card helps test ideas: “paid search converts on the second visit,” “organic warms, brand closes,” “many visits with no goal — weak landing.”",
      ],
      lists: [
        {
          intro: "Typical questions for the report:",
          items: [
            "how many visits before the first goal",
            "what the first channel was",
            "whether they return after a bounce",
            "which URLs repeat before a lead",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Installing Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "How the report differs from other sections",
      level: 2,
      paras: [
        "In Sources, Content, and similar reports a row is a group of visits with a shared trait. In the visitors report a row is a profile: accumulated interaction history with the counter.",
        "The demographics/interests section that could also be called “Visitors” earlier usually lives as “Audience” now. Don’t look for lifecycle there — those are aggregates, not dossiers.",
      ],
      notes: [
        {
          title: "On personal data",
          kind: "tip",
          text: "Don’t try to enrich a profile with CRM full names in public reports without a legal basis. ClientID ↔ CRM linking is a separate careful scope.",
        },
      ],
    },
    {
      title: "Lifecycle metrics",
      level: 2,
      paras: [
        "On a card you usually watch: visit count, total time, goals reached, first source (and sometimes current). With ecommerce — orders and revenue per client.",
        "Compare medians and typical paths, not one “champion” with 40 visits — outliers warp conclusions. For ads it’s useful to separately view those whose first visit was paid.",
      ],
      tables: [
        {
          caption: "What to read on a profile",
          headers: ["Metric", "Why"],
          rows: [
            ["First source", "Who brought them into the funnel"],
            ["Visit count", "Decision-cycle length"],
            ["Goals", "Micro and macro conversions"],
            ["Ecommerce (if any)", "Client value"],
            ["Visit list", "Which URLs and when"],
          ],
        },
      ],
    },
    {
      title: "Quick segments and hypotheses",
      level: 2,
      paras: [
        "State the hypothesis first, then slice the audience: new in 7 days, long sessions, at least one paid visit, bought / didn’t finish checkout (if ecommerce exists).",
        "From a segment open several profiles — look for a repeating pattern, not a one-off case. Pattern → offer, content, or retargeting edit.",
      ],
      lists: [
        {
          intro: "Examples of useful slices:",
          items: [
            "first visit from Direct, goal not reached",
            "≥3 visits with no lead",
            "purchase after organic",
            "abandoned cart (with ecommerce)",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing in Metrica",
          href: "/en/blog/kontent-marketing-metrika/",
        },
      ],
    },
    {
      title: "Linking to Session Replay",
      level: 2,
      paras: [
        "From a visitor card it’s convenient to jump to a session recording if Session Replay is on and the visit entered the sample. Numbers say “what”; the recording says “how they stumbled.”",
        "Don’t watch every recording: segment first, then 5–10 illustrative visits. Setup and limits — in the Session Replay article.",
      ],
      links: [
        {
          label: "Yandex Session Replay",
          href: "/en/blog/vebvizor/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "The visitors report is about an anonymous profile’s lifecycle — not a replacement for traffic sources.",
        "Segment → several cards → hypothesis → site/ads edit. Without goals and (for a store) ecommerce the report’s value drops.",
      ],
    },
  ],
  closing: [
    "Open the visitor profiles report, filter a segment for your hypothesis, and review 5–10 cards with goals and first source — that’s how Metrica shows the path to a lead, not only “visits yesterday.”",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-marketing-metrika",
    "optimizatsiya-konversii",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for metrika-posetiteli — same structure as RU JSON / EN. */
export const metrikaPosetiteliEs: BlogPost = {
  slug: "metrika-posetiteli",
  title: "Informe «Visitantes» de Yandex Metrica: perfiles y ciclo de vida",
  date: "2018-07-17",
  category: "Analytics",
  cover: "/images/blog/metrika-posetiteli/cover-es.webp",
  excerpt:
    "Cómo leer el informe de visitantes en Yandex Metrica: perfiles anónimos, métricas de ciclo de vida, segmentos rápidos y salto a Session Replay — sin confundirlo con la sección Audience.",
  lead: [
    "La mayoría de informes de Metrica responden «qué pasa con las visitas». El informe de visitantes mira a personas (perfiles anónimos): con qué frecuencia vinieron, de dónde la primera vez, cuántas metas cumplieron y cómo se ve el camino a la compra en un ciclo largo.",
    "Abajo: en qué se diferencia de los agrupados por fuente, qué métricas de ciclo de vida mirar y cómo enlazar un perfil con Session Replay. Los nombres de sección en la cuenta cambian («Visitantes» / perfiles de usuario) — ve por el sentido: una ficha de cliente, no una fila de visita. Session Replay tiene artículo propio; aquí el foco es el informe de perfiles.",
  ],
  faq: [
    {
      q: "¿Es lo mismo que Audience?",
      a: "No. Audience son cortes por demografía e intereses. El informe de visitantes es una lista/fichas de perfiles individuales con historial.",
    },
    {
      q: "¿Puedo ver el nombre completo de una persona?",
      a: "No — son IDs anónimos del contador. Los datos personales en formularios son un ámbito aparte de consentimiento y política.",
    },
    {
      q: "¿Para qué molestarse si ya existen fuentes de tráfico?",
      a: "Las fuentes muestran el canal. Un perfil muestra cuántos toques hacen falta hasta una meta y cómo cambia el comportamiento de visita a visita.",
    },
    {
      q: "¿Hay calendario de periodo?",
      a: "Históricamente el informe se construía a lo largo de toda la vida del contador; el corte necesario viene de segmentos (visitas en un periodo, compras y similares). Revisa la UI actual en Help.",
    },
    {
      q: "¿Hace falta ecommerce?",
      a: "No es obligatorio, pero con datos de compra obtienes número de pedidos e ingresos por perfil — útil para una tienda.",
    },
  ],
  sections: [
    {
      title: "Por qué mirar visitantes, no solo visitas",
      level: 2,
      paras: [
        "Las visitas van bien para el control diario de canales. En deals largos (B2B, bienes caros, servicios multi-touch) importa más el camino de la persona: primera fuente, visitas antes de un lead, metas por el camino.",
        "Una ficha de perfil ayuda a probar ideas: «paid search convierte en la segunda visita», «orgánico calienta, marca cierra», «muchas visitas sin meta — landing floja».",
      ],
      lists: [
        {
          intro: "Preguntas típicas para el informe:",
          items: [
            "cuántas visitas antes de la primera meta",
            "cuál fue el primer canal",
            "si vuelven tras un bounce",
            "qué URLs se repiten antes de un lead",
          ],
        },
      ],
      links: [
        {
          label: "Metas en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
        {
          label: "Instalar Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Cómo se diferencia el informe de otras secciones",
      level: 2,
      paras: [
        "En Fuentes, Contenido e informes similares una fila es un grupo de visitas con un rasgo compartido. En el informe de visitantes una fila es un perfil: historial acumulado de interacción con el contador.",
        "La sección demografía/intereses que antes también podía llamarse «Visitantes» suele vivir ahora como «Audience». No busques ciclo de vida ahí — son agregados, no dossiers.",
      ],
      notes: [
        {
          title: "Sobre datos personales",
          kind: "tip",
          text: "No intentes enriquecer un perfil con nombres completos de CRM en informes públicos sin base legal. El enlace ClientID ↔ CRM es un ámbito aparte y cuidadoso.",
        },
      ],
    },
    {
      title: "Métricas de ciclo de vida",
      level: 2,
      paras: [
        "En una ficha sueles mirar: número de visitas, tiempo total, metas alcanzadas, primera fuente (y a veces la actual). Con ecommerce — pedidos e ingresos por cliente.",
        "Compara medianas y caminos típicos, no un «campeón» con 40 visitas — los outliers tuercen conclusiones. Para ads es útil ver aparte a quienes tuvieron la primera visita de pago.",
      ],
      tables: [
        {
          caption: "Qué leer en un perfil",
          headers: ["Métrica", "Por qué"],
          rows: [
            ["Primera fuente", "Quién los trajo al embudo"],
            ["Número de visitas", "Longitud del ciclo de decisión"],
            ["Metas", "Micro y macro conversiones"],
            ["Ecommerce (si hay)", "Valor del cliente"],
            ["Lista de visitas", "Qué URLs y cuándo"],
          ],
        },
      ],
    },
    {
      title: "Segmentos rápidos e hipótesis",
      level: 2,
      paras: [
        "Enuncia la hipótesis primero, luego corta la audiencia: nuevos en 7 días, sesiones largas, al menos una visita de pago, compró / no terminó el checkout (si hay ecommerce).",
        "Desde un segmento abre varios perfiles — busca un patrón que se repite, no un caso suelto. Patrón → edición de oferta, contenido o retargeting.",
      ],
      lists: [
        {
          intro: "Ejemplos de cortes útiles:",
          items: [
            "primera visita desde Direct, meta no alcanzada",
            "≥3 visitas sin lead",
            "compra tras orgánico",
            "carrito abandonado (con ecommerce)",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing en Metrica",
          href: "/es/blog/kontent-marketing-metrika/",
        },
      ],
    },
    {
      title: "Enlace con Session Replay",
      level: 2,
      paras: [
        "Desde una ficha de visitante es cómodo saltar a una grabación de sesión si Session Replay está encendido y la visita entró en la muestra. Los números dicen «qué»; la grabación dice «cómo tropezaron».",
        "No mires cada grabación: segmenta primero, luego 5–10 visitas ilustrativas. Setup y límites — en el artículo de Session Replay.",
      ],
      links: [
        {
          label: "Yandex Session Replay",
          href: "/es/blog/vebvizor/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "El informe de visitantes va del ciclo de vida de un perfil anónimo — no es un sustituto de las fuentes de tráfico.",
        "Segmento → varias fichas → hipótesis → edición de sitio/ads. Sin metas y (para una tienda) ecommerce el valor del informe cae.",
      ],
    },
  ],
  closing: [
    "Abre el informe de perfiles de visitantes, filtra un segmento para tu hipótesis y revisa 5–10 fichas con metas y primera fuente — así Metrica muestra el camino a un lead, no solo «visitas de ayer».",
  ],
  related: [
    "vebvizor",
    "metrika-tseli",
    "metrika-ustanovka",
    "kontent-marketing-metrika",
    "optimizatsiya-konversii",
    "skvoznaya-analitika",
  ],
};

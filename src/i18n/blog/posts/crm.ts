import type { BlogPost } from "../../../data/blog";

/** EN overlay for crm — same structure as RU JSON. */
export const crmEn: BlogPost = {
  slug: "crm",
  title: "CRM systems: how to choose without chasing a scorecard",
  date: "2020-02-26",
  category: "Digital marketing",
  cover: "/images/blog/crm/cover-en.webp",
  excerpt:
    "What a CRM is, how self-hosted, cloud, and “portal with CRM” options differ, and how to compare Bitrix24, amoCRM, and similar tools — without treating a 2020 best-of list or magic quadrant as gospel.",
  lead: [
    "CRM (Customer Relationship Management) tracks customers, deals, and touchpoints: who the lead is, which stage of the funnel, what was promised, and how it ended. Without one, sales live in chats and inside managers’ heads.",
    "“Best CRM” scorecards age fast: pricing, modules, and market leaders shift. Below: solution types and selection criteria for your process. We don’t treat 2019 Gartner placements or old price lists as forever truth.",
  ],
  faq: [
    {
      q: "Does a small business need a CRM?",
      a: "If you have more than one manager or lead channel — almost always yes. Otherwise requests and repeat sales get lost. Early on, a simple cloud funnel is enough.",
    },
    {
      q: "Should I choose Bitrix24 or amoCRM?",
      a: "It depends on the job. amoCRM is often chosen for sales and funnel focus. Bitrix24 makes sense when you also need a portal: tasks, chat, drive, sometimes 1C. Compare against your process, not ad slogans.",
    },
    {
      q: "Should I pick self-hosted or cloud?",
      a: "Cloud means a faster start and less of your own infrastructure. On-prem / self-hosted means more data control and custom work, but it’s costlier to run. Seat-based SaaS is the most common path for SMBs.",
    },
    {
      q: "Is Excel enough instead of a CRM?",
      a: "For one person and a few dozen deals — sometimes. Once you hit duplicate leads, stages, and reporting, Excel breaks down.",
    },
    {
      q: "Where should implementation start?",
      a: "Map the funnel and required fields, connect the site, phone, and email, and train managers to run deals only in the CRM. Without that discipline, the software is useless.",
    },
  ],
  sections: [
    {
      title: "Why a business needs a CRM",
      level: 2,
      paras: [
        "One customer card holds call history, emails, invoices, and the next step. Leadership sees the funnel and bottlenecks; marketing sees lead quality by channel.",
        "Tied to the site and ads, you get a full-funnel picture: which channel closed the deal — not only which one earned the click. Without consistent data entry, reports lie.",
      ],
      lists: [
        {
          intro: "Minimum value from a rollout:",
          items: [
            "leads don’t get lost between managers",
            "deal stages stay visible",
            "tasks and reminders aren’t trapped in private chats",
            "you can report on revenue and lost deals",
          ],
        },
      ],
      links: [
        {
          label: "Full-funnel analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Sales manager KPIs",
          href: "/en/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
    {
      title: "Solution types: don’t confuse a portal with a funnel",
      level: 2,
      paras: [
        "Modular and custom platforms are built for large holdings — expensive and slow. Boxed or off-the-shelf options go live faster, but a non-standard process still needs extra setup.",
        "SaaS (“CRM as a service”) means you pay for features and seats: amoCRM, Pipedrive, and similar tools. Separate from that are corporate portals like Bitrix24, where CRM is one block next to tasks and messaging.",
        "Heavy international stacks (Salesforce and other enterprise suites) scale well and have deep ecosystems, but they need budget for rollout and admins. For SMBs they’re often overkill at the start.",
      ],
      lists: [
        {
          intro: "What to compare:",
          items: [
            "a funnel and deal card that fit your cycle",
            "integrations: site, telephony, email, messengers, 1C/warehouse",
            "a mobile app for field teams",
            "access rights and an action audit trail",
            "reports and an API that don’t require “only via an integrator”",
            "cost as your user count grows",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Brand lists from 2020 reviews (Creatio/bpm’online, Megaplan, and so on) mark a product class — not a forever scorecard. Before you buy, check current pricing, data localization, and niche reviews.",
        },
      ],
    },
    {
      title: "How to choose without a magic scorecard",
      level: 2,
      paras: [
        "Put the process on paper first: stages, required fields, who assigns tasks, what counts as a won deal. Then demo two or three systems on your scenarios — not someone else’s screenshot.",
        "Count total cost of ownership: licenses + rollout + integrations + training. A cheap plan with expensive custom work often costs more than a mid-tier product that works out of the box.",
        "A pilot with one team beats a big “launch everything tomorrow.” Success means deals live in the system every day — not a polished dashboard once a month.",
      ],
      lists: [
        {
          intro: "Checklist before you pay:",
          items: [
            "funnel described and agreed with sales",
            "someone owns the CRM playbook",
            "key integrations verified",
            "a clear path to migrate old contacts",
            "a training and data-entry control plan",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Project manager",
          href: "/en/blog/project-manager/",
        },
      ],
    },
  ],
  closing: [
    "A CRM wins not by first place in someone else’s scorecard, but by fitting your deal cycle and the team’s discipline. Pick the system class for your scale, run demos on your scenarios, and roll out the process — software only records it.",
  ],
  related: [
    "skvoznaya-analitika",
    "kpi-menedzhera-prodazh",
    "dashboard",
    "project-manager",
    "formy-zahvata",
    "virtualnyy-nomer",
  ],
};

/** ES overlay for crm — same structure as RU JSON / EN. */
export const crmEs: BlogPost = {
  slug: "crm",
  title: "Sistemas CRM: cómo elegir sin perseguir un ranking ajeno",
  date: "2020-02-26",
  category: "Marketing digital",
  cover: "/images/blog/crm/cover.webp",
  excerpt:
    "Qué es un CRM, en qué se diferencian self-hosted, cloud y «portal con CRM», y cómo comparar Bitrix24, amoCRM y herramientas similares — sin tomar una lista de 2020 o un magic quadrant como evangelio.",
  lead: [
    "CRM (Customer Relationship Management) sigue a clientes, deals y touchpoints: quién es el lead, en qué etapa del funnel, qué se prometió y cómo terminó. Sin uno, las ventas viven en chats y en la cabeza de los managers.",
    "Los scorecards de «mejor CRM» envejecen rápido: precios, módulos y líderes del mercado cambian. Abajo: tipos de solución y criterios de selección para tu proceso. No tratamos colocaciones Gartner de 2019 ni listas de precios viejas como verdad eterna.",
  ],
  faq: [
    {
      q: "¿Una pyme necesita un CRM?",
      a: "Si hay más de un manager o canal de leads — casi siempre sí. Si no, se pierden solicitudes y ventas repetidas. Al inicio basta un funnel cloud simple.",
    },
    {
      q: "¿Debo elegir Bitrix24 o amoCRM?",
      a: "Depende del trabajo. amoCRM se elige a menudo por foco en ventas y funnel. Bitrix24 tiene sentido cuando también necesitas un portal: tareas, chat, drive, a veces 1C. Compara contra tu proceso, no contra slogans de ads.",
    },
    {
      q: "¿Self-hosted o cloud?",
      a: "Cloud significa arranque más rápido y menos infraestructura propia. On-prem / self-hosted significa más control de datos y custom, pero es más caro de operar. El SaaS por asientos es el camino más habitual para pymes.",
    },
    {
      q: "¿Basta Excel en lugar de un CRM?",
      a: "Para una persona y unas docenas de deals — a veces. Cuando llegan leads duplicados, etapas e informes, Excel se rompe.",
    },
    {
      q: "¿Por dónde debe empezar la implementación?",
      a: "Mapea el funnel y los campos obligatorios, conecta sitio, teléfono y email, y entrena a los managers a llevar deals solo en el CRM. Sin esa disciplina, el software no sirve.",
    },
  ],
  sections: [
    {
      title: "Por qué un negocio necesita un CRM",
      level: 2,
      paras: [
        "Una ficha de cliente reúne historial de llamadas, emails, facturas y el siguiente paso. La dirección ve el funnel y los cuellos de botella; marketing ve la calidad de leads por canal.",
        "Ligado al sitio y a los ads, obtienes una foto full-funnel: qué canal cerró el deal — no solo cuál ganó el clic. Sin entrada de datos consistente, los informes mienten.",
      ],
      lists: [
        {
          intro: "Valor mínimo de un rollout:",
          items: [
            "los leads no se pierden entre managers",
            "las etapas del deal se ven",
            "tareas y recordatorios no quedan atrapados en chats privados",
            "puedes informar sobre revenue y deals perdidos",
          ],
        },
      ],
      links: [
        {
          label: "Analítica full-funnel",
          href: "/es/blog/skvoznaya-analitika/",
        },
        {
          label: "KPIs del manager de ventas",
          href: "/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
    {
      title: "Tipos de solución: no confundas un portal con un funnel",
      level: 2,
      paras: [
        "Las plataformas modulares y a medida se construyen para grandes holdings — caras y lentas. Las opciones boxed o listas van al aire más rápido, pero un proceso no estándar sigue necesitando setup extra.",
        "SaaS («CRM as a service») significa que pagas por features y asientos: amoCRM, Pipedrive y similares. Aparte están los portales corporativos como Bitrix24, donde el CRM es un bloque junto a tareas y mensajería.",
        "Los stacks internacionales pesados (Salesforce y otras suites enterprise) escalan bien y tienen ecosistemas profundos, pero necesitan presupuesto de rollout y admins. Para pymes suelen ser overkill al inicio.",
      ],
      lists: [
        {
          intro: "Qué comparar:",
          items: [
            "un funnel y una ficha de deal que encajen con tu ciclo",
            "integraciones: sitio, telefonía, email, messengers, 1C/almacén",
            "una app móvil para equipos de campo",
            "derechos de acceso y auditoría de acciones",
            "informes y una API que no exijan «solo vía un integrador»",
            "coste conforme crece el número de usuarios",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Las listas de marcas de reseñas de 2020 (Creatio/bpm’online, Megaplan y demás) marcan una clase de producto — no un scorecard eterno. Antes de comprar, revisa precios actuales, localización de datos y reseñas del nicho.",
        },
      ],
    },
    {
      title: "Cómo elegir sin un scorecard mágico",
      level: 2,
      paras: [
        "Pon el proceso en papel primero: etapas, campos obligatorios, quién asigna tareas, qué cuenta como deal ganado. Luego demo dos o tres sistemas en tus escenarios — no en el screenshot de otro.",
        "Cuenta el coste total de propiedad: licencias + rollout + integraciones + formación. Un plan barato con custom caro a menudo cuesta más que un producto mid-tier que funciona de serie.",
        "Un piloto con un equipo gana a un gran «lanzarlo todo mañana». El éxito significa que los deals viven en el sistema cada día — no un dashboard pulido una vez al mes.",
      ],
      lists: [
        {
          intro: "Checklist antes de pagar:",
          items: [
            "funnel descrito y acordado con ventas",
            "alguien es dueño del playbook del CRM",
            "integraciones clave verificadas",
            "un camino claro para migrar contactos viejos",
            "un plan de formación y control de entrada de datos",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Project manager",
          href: "/blog/project-manager/",
        },
      ],
    },
  ],
  closing: [
    "Un CRM gana no por el primer puesto en el scorecard de otro, sino por encajar con tu ciclo de deal y la disciplina del equipo. Elige la clase de sistema para tu escala, haz demos en tus escenarios y despliega el proceso — el software solo lo registra.",
  ],
  related: [
    "skvoznaya-analitika",
    "dashboard",
    "formy-zahvata",
    "kpi-menedzhera-prodazh",
    "project-manager",
    "virtualnyy-nomer",
  ],
};

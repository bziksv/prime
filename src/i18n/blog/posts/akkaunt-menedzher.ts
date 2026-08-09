import type { BlogPost } from "../../../data/blog";

/** EN overlay for akkaunt-menedzher — same structure as RU JSON. */
export const akkauntMenedzherEn: BlogPost = {
  slug: "akkaunt-menedzher",
  title: "What an account manager is — and what the job actually looks like",
  date: "2019-05-30",
  category: "Digital marketing",
  cover: "/images/blog/akkaunt-menedzher/cover-en.webp",
  excerpt:
    "An agency account manager: how they differ from sales and a PM, day-to-day project work, client communication, upsell, and stress — without the “easy MacBook job” myth.",
  lead: [
    "An account manager is the link between the client and the agency team: goals, deadlines, reports, complaints, and growing the relationship after the first deal. In digital they’re most often hired by web studios, ad and branding agencies, and online schools.",
    "Below: how the role differs from sales and project management, what sits on a live project, what people underestimate, and who fits. Salaries and grade titles float — check current vacancies; here it’s the substance of the work.",
  ],
  faq: [
    {
      q: "Is an account manager the same as sales?",
      a: "No. Sales more often closes a cold audience and the first deal. Account runs an existing client: loyalty, repeat work, smooth processes, and growing average ticket.",
    },
    {
      q: "How is account different from a project manager?",
      a: "PM owns deadlines, the team, and delivering scope. Account owns the client relationship, expectations, money, and growing the account. In small agencies the roles often blend.",
    },
    {
      q: "Do you need marketing and SEO knowledge?",
      a: "Yes at meaning level: understand tools, read reports, brief specialists, and explain “why” to the client. Deep hands-on isn’t required; pure “I just forward emails” isn’t enough.",
    },
    {
      q: "How many projects can you realistically run?",
      a: "Depends on complexity and process maturity. Older write-ups cited up to ~20 — burnout risk without playbooks and support. Fewer accounts with depth beat a queue with no control.",
    },
    {
      q: "What’s the core skill?",
      a: "Communication and calm under pressure: calls, approvals, complaints, translating client language into team language and back. If you can’t live on the phone and in threads, the role is hard.",
    },
    {
      q: "Is upsell mandatory?",
      a: "Often in KPIs: offer adjacent services when they truly help the client’s business. Pushing “sell everything” with no value kills trust — upsell from need, not quota at any cost.",
    },
  ],
  sections: [
    {
      title: "Why an agency needs an account manager",
      level: 2,
      paras: [
        "Digital runs many projects in parallel: site, ads, content, analytics. Without someone holding client context and stitching departments, deadlines, expectations, and payments suffer.",
        "Leaders often call the account “the face of the company”; skeptics reduce the role to “accept work and chase the invoice.” Reality sits in the middle: money control matters, but without client engagement and clear goals the project falls apart.",
      ],
      notes: [
        {
          title: "Don’t confuse with the first sale",
          kind: "tip",
          text: "Sales brings the client in. Account makes the collaboration continue and deliver for both sides.",
        },
      ],
    },
    {
      title: "Core responsibilities",
      level: 2,
      paras: [
        "Focus — keep the client in the decisions, keep goals clear, keep reports honest. The account knows where each active project is going, aligns client asks with team capacity, and handles complaints without an “us vs them” war.",
        "On money: watch payments, don’t let debt go “forgotten,” run meetings, and propose add-ons when they fit.",
      ],
      lists: [
        {
          intro: "Typical project cycle (e.g. traffic to a site):",
          items: [
            "brief and help framing marketing goals",
            "work plan with the team",
            "pick relevant tools",
            "control and adjust the plan",
            "handle objections and complaints",
            "follow up after a stage handover",
            "upsell adjacent solutions for the business need",
          ],
        },
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
        {
          label: "Project manager in IT",
          href: "/en/blog/project-manager/",
        },
      ],
    },
    {
      title: "What people usually underestimate",
      level: 2,
      paras: [
        "Beyond the official list — dozens of counterparts: the client, their staff, colleagues across agency departments. You need industry context (from tire shops to construction) and calm in fights over details like an extra pop-up.",
        "Standups, calls, and threads eat the calendar. Without time management and a task tracker the role becomes endless firefighting. Practice rule: if you haven’t spoken to the client in a while, surprise risk rises.",
      ],
      lists: [
        {
          intro: "Who the role fits:",
          items: [
            "comfortable talking a lot by voice and in writing",
            "can turn expectations into tasks",
            "handle stress and the client’s mood swings",
            "willing to learn the substance of services — not only pass statuses",
          ],
        },
      ],
      links: [
        {
          label: "Employee burnout",
          href: "/en/blog/vygoranie-sotrudnikov/",
        },
        {
          label: "How to find a marketer",
          href: "/en/blog/nayti-marketologa/",
        },
      ],
    },
  ],
  closing: [
    "An account manager isn’t “just chasing invoices” — it’s long-term relationships, clear goals, and stitching the client to the team. If your company blends PM and sales into one seat — write down ownership zones, or both deadlines and trust suffer.",
  ],
  related: [
    "project-manager",
    "otchet-klientu",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "kpi-menedzhera-prodazh",
    "korporativnoe-obuchenie",
  ],
};

/** ES overlay for akkaunt-menedzher — same structure as RU JSON / EN. */
export const akkauntMenedzherEs: BlogPost = {
  slug: "akkaunt-menedzher",
  title: "Qué es un account manager — y cómo es el trabajo de verdad",
  date: "2019-05-30",
  category: "Digital marketing",
  cover: "/images/blog/akkaunt-menedzher/cover.webp",
  excerpt:
    "Un account manager de agencia: en qué se diferencia de sales y de un PM, el día a día del proyecto, comunicación con el cliente, upsell y estrés — sin el mito del «trabajo fácil con MacBook».",
  lead: [
    "Un account manager es el vínculo entre el cliente y el equipo de la agencia: metas, plazos, informes, quejas y crecer la relación tras el primer deal. En digital los contratan sobre todo estudios web, agencias de ads y branding, y escuelas online.",
    "Abajo: en qué se diferencia el rol de sales y de project management, qué hay en un proyecto vivo, qué se infravalora y a quién encaja. Sueldos y títulos de grade flotan — mira vacantes actuales; aquí es la sustancia del trabajo.",
  ],
  faq: [
    {
      q: "¿Un account manager es lo mismo que sales?",
      a: "No. Sales cierra más a menudo una audiencia fría y el primer deal. Account lleva un cliente existente: lealtad, trabajo repetido, procesos fluidos y crecimiento del ticket medio.",
    },
    {
      q: "¿En qué se diferencia account de un project manager?",
      a: "El PM posee plazos, equipo y entregar el scope. Account posee la relación con el cliente, expectativas, dinero y crecer la cuenta. En agencias pequeñas los roles a menudo se mezclan.",
    },
    {
      q: "¿Hace falta conocimiento de marketing y SEO?",
      a: "Sí a nivel de sentido: entender tools, leer informes, briefear especialistas y explicar el «por qué» al cliente. Hands-on profundo no es obligatorio; un puro «solo reenvío emails» no basta.",
    },
    {
      q: "¿Cuántos proyectos se pueden llevar de forma realista?",
      a: "Depende de la complejidad y la madurez del proceso. Textos viejos citaban hasta ~20 — riesgo de burnout sin playbooks y soporte. Menos cuentas con profundidad ganan a una cola sin control.",
    },
    {
      q: "¿Cuál es la skill central?",
      a: "Comunicación y calma bajo presión: calls, aprobaciones, quejas, traducir el lenguaje del cliente al del equipo y al revés. Si no puedes vivir al teléfono y en hilos, el rol es duro.",
    },
    {
      q: "¿El upsell es obligatorio?",
      a: "A menudo en KPIs: ofrecer servicios adyacentes cuando de verdad ayudan al negocio del cliente. Empujar «vende todo» sin valor mata la confianza — upsell desde la necesidad, no cuota a cualquier coste.",
    },
  ],
  sections: [
    {
      title: "Por qué una agencia necesita un account manager",
      level: 2,
      paras: [
        "Digital corre muchos proyectos en paralelo: sitio, ads, contenido, analytics. Sin alguien que sostenga el contexto del cliente y cosa departamentos, sufren plazos, expectativas y pagos.",
        "Los líderes a menudo llaman al account «la cara de la empresa»; los escépticos reducen el rol a «aceptar trabajo y perseguir la factura». La realidad está en el medio: el control del dinero importa, pero sin engagement del cliente y metas claras el proyecto se deshace.",
      ],
      notes: [
        {
          title: "No confundir con la primera venta",
          kind: "tip",
          text: "Sales trae al cliente. Account hace que la colaboración continúe y entregue para ambos lados.",
        },
      ],
    },
    {
      title: "Responsabilidades centrales",
      level: 2,
      paras: [
        "Foco — mantener al cliente en las decisiones, metas claras, informes honestos. El account sabe adónde va cada proyecto activo, alinea pedidos del cliente con la capacidad del equipo y maneja quejas sin una guerra de «nosotros vs ellos».",
        "En dinero: vigilar pagos, no dejar que la deuda se «olvide», correr meetings y proponer add-ons cuando encajan.",
      ],
      lists: [
        {
          intro: "Ciclo típico de proyecto (p. ej. tráfico a un sitio):",
          items: [
            "brief y ayudar a enmarcar metas de marketing",
            "plan de trabajo con el equipo",
            "elegir tools relevantes",
            "controlar y ajustar el plan",
            "manejar objeciones y quejas",
            "hacer follow-up tras el handoff de una etapa",
            "upsell de soluciones adyacentes para la necesidad del negocio",
          ],
        },
      ],
      links: [
        {
          label: "Informe al cliente",
          href: "/es/blog/otchet-klientu/",
        },
        {
          label: "Project manager en IT",
          href: "/es/blog/project-manager/",
        },
      ],
    },
    {
      title: "Qué suele infravalorarse",
      level: 2,
      paras: [
        "Más allá de la lista oficial — decenas de contrapartes: el cliente, su staff, colegas de departamentos de la agencia. Hace falta contexto de industria (desde talleres de neumáticos a construcción) y calma en peleas por detalles como un pop-up extra.",
        "Standups, calls e hilos se comen el calendario. Sin time management y un task tracker el rol se vuelve apagar fuegos sin fin. Regla práctica: si llevas tiempo sin hablar con el cliente, sube el riesgo de sorpresa.",
      ],
      lists: [
        {
          intro: "A quién encaja el rol:",
          items: [
            "cómodo hablando mucho por voz y por escrito",
            "puede convertir expectativas en tareas",
            "manejar estrés y cambios de humor del cliente",
            "dispuesto a aprender la sustancia de los servicios — no solo pasar statuses",
          ],
        },
      ],
      links: [
        {
          label: "Burnout de empleados",
          href: "/es/blog/vygoranie-sotrudnikov/",
        },
        {
          label: "Cómo encontrar un marketer",
          href: "/es/blog/nayti-marketologa/",
        },
      ],
    },
  ],
  closing: [
    "Un account manager no es «solo perseguir facturas» — son relaciones a largo plazo, metas claras y coser al cliente con el equipo. Si tu empresa mezcla PM y sales en un solo asiento — escribe las zonas de ownership, o sufren plazos y confianza.",
  ],
  related: [
    "project-manager",
    "otchet-klientu",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "kpi-menedzhera-prodazh",
    "korporativnoe-obuchenie",
  ],
};

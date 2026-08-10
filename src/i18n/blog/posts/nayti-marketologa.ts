import type { BlogPost } from "../../../data/blog";

/** EN overlay for nayti-marketologa — same structure as RU JSON. */
export const naytiMarketologaEn: BlogPost = {
  slug: "nayti-marketologa",
  title: "How to find a marketer: agency, in-house, and what to check",
  date: "2019-07-29",
  category: "Digital marketing",
  cover: "/images/blog/nayti-marketologa/cover-en.webp",
  excerpt:
    "Where to look for a digital marketer: agency or hiring in-house, pros and cons, which skills to check, and how to agree on KPIs — without the “10,000 hours” myth.",
  lead: [
    "You need a marketer not for show, but to link channels to sales: traffic, offer, analytics, experiments. Without a clear brief any candidate or agency will work into the void.",
    "Below: where to look, how an agency differs from in-house/freelance, what to check in interviews, and how to talk about money and KPIs. What a digital agency covers is in a separate piece.",
  ],
  faq: [
    {
      q: "Should you hire an agency or your own marketer?",
      a: "An agency covers the stack and load peaks faster. In-house knows the product deeper. Often a hybrid: strategy/channels outside, product and approvals inside.",
    },
    {
      q: "Is “knows paid search” enough as a hiring criterion?",
      a: "For a narrow job — yes. For business growth you also need landings, analytics, offer, and funnel understanding. Clarify ownership in the brief.",
    },
    {
      q: "How do you verify experience?",
      a: "Cases with numbers and the person’s role, questions “what broke and how you fixed it,” a paid test on your data. “10,000 hours” is a metaphor, not a filter.",
    },
    {
      q: "Should you pay per lead or a fixed fee?",
      a: "Depends on tracking maturity. Fixed plus KPI/bonus is clearer than “leads only” with no quality control. In the contract — lead definitions and exclusions.",
    },
    {
      q: "How much creative freedom do they need?",
      a: "Yes in experiments, but within budget, brand, and KPIs. “Spend as much as you want” isn’t freedom — it’s risk.",
    },
    {
      q: "Where should a client start the search?",
      a: "Describe the goal, budget, current channels, and what you’ve already tried. The clearer the brief, the easier to find the right specialist.",
    },
  ],
  sections: [
    {
      title: "Agency: pros and cons",
      level: 2,
      paras: [
        "Pros: faster to find an executor, a team with different roles, a fresh outside view. Cons: longer immersion into the brand’s language, risk of a formal relationship without KPIs and regular calls.",
        "Look not only at a famous name, but who will run the account, how they count results, and how they hand knowledge to in-house.",
      ],
      links: [
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "Searching on your own",
      level: 2,
      paras: [
        "Job boards, referrals, communities, former colleagues — longer selection, but you can know the person deeper before a contract. Hiring and onboarding decisions sit fully on you.",
        "Look for someone who can create and measure commercial traffic for your goal — not only “run socials for mood.”",
      ],
      lists: [
        {
          intro: "What a candidate should show:",
          items: [
            "basics in the needed channel (paid search, SEO, SMM — by task)",
            "cases with role and numbers",
            "understanding of the market and limits",
            "readiness to work with analytics and reporting",
          ],
        },
      ],
    },
    {
      title: "Money, KPIs, and the team",
      level: 2,
      paras: [
        "Rate grows with level and ownership area. First lock tasks and expected effect — then find people for that vector. In the budget put not only salary/retainer, but media spend and narrow vendors (design, build, call tracking).",
        "A good marketer often brings a network of specialists. Agree in advance: whose contacts, who pays, who approves estimates. KPIs (bonus added to base pay) usually motivate better than pay “for any lead” without quality.",
      ],
      notes: [
        {
          title: "Budget for experiments",
          kind: "tip",
          text: "A marketer spends company money. Give a frame and the right to test — with a ceiling and stop-rules, not “unlimited cash freedom.”",
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Finding a marketer is easier when goal, budget, and KPIs are clear. Pick the format (agency / in-house / hybrid) for the job and check cases and reporting — not loud promises and not mythical hours of experience.",
  ],
  related: [
    "didzhital-agentstvo",
    "performance-marketing",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "metriki-reklamy",
    "uchastie-v-tenderah",
  ],
};

/** ES overlay for nayti-marketologa — same structure as RU JSON / EN. */
export const naytiMarketologaEs: BlogPost = {
  slug: "nayti-marketologa",
  title: "Cómo encontrar un marketer: agencia, in-house y qué revisar",
  date: "2019-07-29",
  category: "Digital marketing",
  cover: "/images/blog/nayti-marketologa/cover-es.webp",
  excerpt:
    "Dónde buscar un marketer digital: agencia o contratar in-house, pros y contras, qué skills revisar y cómo acordar KPIs — sin el mito de las «10.000 horas».",
  lead: [
    "Necesitas un marketer no de escaparate, sino para ligar canales a ventas: tráfico, oferta, analytics, experimentos. Sin un brief claro cualquier candidato o agencia trabajará al vacío.",
    "Abajo: dónde mirar, en qué se diferencia una agencia de in-house/freelance, qué revisar en entrevistas y cómo hablar de dinero y KPIs. Qué cubre una agencia digital está en otra pieza.",
  ],
  faq: [
    {
      q: "¿Contratar una agencia o tu propio marketer?",
      a: "Una agencia cubre el stack y los picos de carga más rápido. In-house conoce el producto más a fondo. A menudo un híbrido: estrategia/canales fuera, producto y aprobaciones dentro.",
    },
    {
      q: "¿Basta «sabe paid search» como criterio de hiring?",
      a: "Para un trabajo estrecho — sí. Para crecimiento del negocio también hacen falta landings, analytics, oferta y entendimiento del embudo. Aclara ownership en el brief.",
    },
    {
      q: "¿Cómo verificas la experiencia?",
      a: "Casos con números y el rol de la persona, preguntas «qué se rompió y cómo lo arreglaste», un test de pago sobre tus datos. «10.000 horas» es una metáfora, no un filtro.",
    },
    {
      q: "¿Pagar por lead o fee fijo?",
      a: "Depende de la madurez del tracking. Fijo más KPI/bonus es más claro que «solo leads» sin control de calidad. En el contrato — definiciones de lead y exclusiones.",
    },
    {
      q: "¿Cuánta libertad creativa necesitan?",
      a: "Sí en experimentos, pero dentro de presupuesto, marca y KPIs. «Gasta lo que quieras» no es libertad — es riesgo.",
    },
    {
      q: "¿Por dónde debe empezar la búsqueda un cliente?",
      a: "Describe la meta, el presupuesto, los canales actuales y qué ya probaste. Cuanto más claro el brief, más fácil hallar al especialista correcto.",
    },
  ],
  sections: [
    {
      title: "Agencia: pros y contras",
      level: 2,
      paras: [
        "Pros: más rápido hallar un ejecutor, un equipo con roles distintos, una mirada externa fresca. Contras: inmersión más larga en el lenguaje de la marca, riesgo de una relación formal sin KPIs y calls regulares.",
        "Mira no solo un nombre famoso, sino quién llevará la cuenta, cómo cuentan resultados y cómo entregan conocimiento a in-house.",
      ],
      links: [
        {
          label: "Agencia digital",
          href: "/es/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "Buscar por tu cuenta",
      level: 2,
      paras: [
        "Job boards, referidos, comunidades, excolegas — selección más larga, pero puedes conocer a la persona más a fondo antes del contrato. Las decisiones de hiring y onboarding recaen del todo en ti.",
        "Busca a alguien que pueda crear y medir tráfico comercial para tu meta — no solo «llevar redes por mood».",
      ],
      lists: [
        {
          intro: "Qué debe mostrar un candidato:",
          items: [
            "bases en el canal necesario (paid search, SEO, SMM — según la tarea)",
            "casos con rol y números",
            "entendimiento del mercado y límites",
            "disposición a trabajar con analytics y reporting",
          ],
        },
      ],
    },
    {
      title: "Dinero, KPIs y el equipo",
      level: 2,
      paras: [
        "La tarifa crece con el nivel y el área de ownership. Primero fija tareas y efecto esperado — luego halla gente para ese vector. En el presupuesto mete no solo salario/retainer, sino media spend y vendors estrechos (diseño, build, call tracking).",
        "Un buen marketer a menudo trae una red de especialistas. Acuerda de antemano: de quién son los contactos, quién paga, quién aprueba presupuestos. Los KPIs (bonus sobre la base) suelen motivar mejor que pagar «por cualquier lead» sin calidad.",
      ],
      notes: [
        {
          title: "Presupuesto para experimentos",
          kind: "tip",
          text: "Un marketer gasta dinero de la empresa. Da un marco y el derecho a testar — con techo y stop-rules, no «libertad de caja ilimitada».",
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/es/blog/performance-marketing/",
        },
        {
          label: "Informe al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Encontrar un marketer es más fácil cuando meta, presupuesto y KPIs están claros. Elige el formato (agencia / in-house / híbrido) según el trabajo y revisa casos y reporting — no promesas ruidosas ni horas míticas de experiencia.",
  ],
  related: [
    "didzhital-agentstvo",
    "performance-marketing",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "metriki-reklamy",
    "uchastie-v-tenderah",
  ],
};

import type { BlogPost } from "../../../data/blog";

/** EN overlay for kpi-menedzhera-prodazh — same structure as RU JSON. */
export const kpiMenedzheraProdazhEn: BlogPost = {
  slug: "kpi-menedzhera-prodazh",
  title: "Sales manager KPIs: how to set and control them",
  date: "2019-06-04",
  category: "Digital marketing",
  cover: "/images/blog/kpi-menedzhera-prodazh/cover-en.webp",
  excerpt:
    "Seller KPIs: why introduce them, which metrics to pick, how to pay bonuses, where the system breaks (fake clients, salary ceilings), and how to control in CRM.",
  lead: [
    "KPIs (key performance indicators) for a sales manager link pay to company results: revenue, margin, deal quality — not only “number of calls.”",
    "Below: why the system is needed, example metrics and pay structures, rules (no more than 10–15 indicators), typical gaming of the metrics, and control. There’s no universal formula — fit it to your deal cycle and margin.",
  ],
  faq: [
    {
      q: "How many KPIs should I set?",
      a: "Few and purposeful. More than 10–15 turns the job into filling reports.",
    },
    {
      q: "Are calls and emails the main KPI?",
      a: "Only supporting. The main thing is closed deals and economics. Activity without sales isn’t a result.",
    },
    {
      q: "Do I need a salary ceiling for sellers?",
      a: "Often harmful: strong performers lose drive, juniors see a glass ceiling. Better a model where sales growth pays both employee and company.",
    },
    {
      q: "Is fixed pay with no variable OK?",
      a: "Possible at start/training. Long-term, no link to results makes sales pace harder to keep — but “pure commission” with no base also breaks service.",
    },
    {
      q: "How do I catch KPI gaming?",
      a: "Reconcile with CRM, contract, payment; ban “friends as clients” for volume; one discount rulebook.",
    },
    {
      q: "What if the plan fails two months in a row?",
      a: "Root-cause with the manager and HR: market, product, skill, unrealistic plan. Not only a fine — sometimes goals or training need a reset.",
    },
  ],
  sections: [
    {
      title: "Why introduce KPIs",
      level: 2,
      paras: [
        "The goal is to motivate sales growth and give leadership a clear picture per seller. Manager pay should logically track the profit/revenue they bring.",
        "Activity (calls, emails) helps diagnose the funnel, but not as the only criterion: closed and margin-positive deals matter — not “hours on the phone.”",
      ],
    },
    {
      title: "Example schemes and metrics",
      level: 2,
      paras: [
        "Bonus schemes: tiers from volume; two-stage payout (part now, part after retention); percent of first-period margin; non-cash rewards for hitting plan (gear owned after delivery).",
        "Metric groups: effectiveness (deal time, touch count with upper/lower bounds, win-rate, inbound reply speed); quality (repeat buys, ticket growth, complaints); outcome (average ticket, margin/revenue, receivables).",
      ],
      lists: [
        {
          intro: "Build rules:",
          items: [
            "company profit above a “pretty” bonus",
            "goals concrete and measurable in CRM",
            "few indicators",
            "no ceiling that kills strong ambition",
          ],
        },
      ],
      notes: [
        {
          title: "Sudden plan jumps",
          kind: "tip",
          text: "Sharp goal inflation often drops revenue and pushes sellers to leave. Raise the bar on history and market — not wishful thinking.",
        },
      ],
    },
    {
      title: "How the system breaks — and how to control",
      level: 2,
      paras: [
        "Typical schemes: impossible promises to close a deal; “clients” from friends to hit volume. Fix — one contract/discount standard and proof the deal is real (payment, delivery).",
        "Control: CRM with live reporting, deal-entry rules, selective anomaly review. Spreadsheets and monthly reports are cheaper but easier to distort — reconcile with money.",
      ],
      lists: [
        {
          intro: "When KPIs are missed:",
          items: [
            "find causes and month history",
            "talk with the manager",
            "adjust goals or ownership area",
            "train / reprioritize the funnel",
            "if skill isn’t there — decide the people question honestly",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Seller KPIs work when metrics are few, pay ties to margin/revenue, and gaming is blocked. Build the scheme for the deal cycle, control in CRM, and don’t confuse activity with results.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "menedzher-internet-magazina",
  ],
};

/** ES overlay for kpi-menedzhera-prodazh — same structure as RU JSON / EN. */
export const kpiMenedzheraProdazhEs: BlogPost = {
  slug: "kpi-menedzhera-prodazh",
  title: "KPIs del manager de ventas: cómo fijarlos y controlarlos",
  date: "2019-06-04",
  category: "Digital marketing",
  cover: "/images/blog/kpi-menedzhera-prodazh/cover-es.webp",
  excerpt:
    "KPIs del vendedor: por qué introducirlos, qué métricas elegir, cómo pagar bonos, dónde se rompe el sistema (clientes falsos, techos de sueldo) y cómo controlar en el CRM.",
  lead: [
    "Los KPIs (key performance indicators) de un manager de ventas ligan el sueldo a resultados de la empresa: revenue, margen, calidad del deal — no solo «número de llamadas».",
    "Abajo: por qué hace falta el sistema, ejemplos de métricas y estructuras de pago, reglas (no más de 10–15 indicadores), gaming típico de las métricas y control. No hay fórmula universal — ajústalo a tu ciclo de deal y margen.",
  ],
  faq: [
    {
      q: "¿Cuántos KPIs debo fijar?",
      a: "Pocos y con propósito. Más de 10–15 convierte el trabajo en rellenar informes.",
    },
    {
      q: "¿Son las llamadas y emails el KPI principal?",
      a: "Solo de apoyo. Lo principal son deals cerrados y economía. Actividad sin ventas no es un resultado.",
    },
    {
      q: "¿Hace falta un techo de sueldo para vendedores?",
      a: "A menudo es dañino: los performers fuertes pierden drive, los juniors ven un techo de cristal. Mejor un modelo donde el crecimiento de ventas pague a empleado y empresa.",
    },
    {
      q: "¿Vale un fijo sin variable?",
      a: "Posible al inicio/formación. A largo plazo, sin vínculo a resultados cuesta mantener el ritmo de ventas — pero «pura comisión» sin base también rompe el servicio.",
    },
    {
      q: "¿Cómo pillar el gaming de KPIs?",
      a: "Cuadra con CRM, contrato, pago; prohíbe «amigos como clientes» por volumen; un solo rulebook de descuentos.",
    },
    {
      q: "¿Qué si el plan falla dos meses seguidos?",
      a: "Causa raíz con el manager y HR: mercado, producto, skill, plan irrealista. No solo una multa — a veces hay que resetear metas o formación.",
    },
  ],
  sections: [
    {
      title: "Por qué introducir KPIs",
      level: 2,
      paras: [
        "La meta es motivar el crecimiento de ventas y dar a liderazgo un cuadro claro por vendedor. El sueldo del manager debería seguir lógicamente el beneficio/revenue que trae.",
        "La actividad (llamadas, emails) ayuda a diagnosticar el embudo, pero no como único criterio: importan deals cerrados y con margen positivo — no «horas al teléfono».",
      ],
    },
    {
      title: "Esquemas y métricas de ejemplo",
      level: 2,
      paras: [
        "Esquemas de bonus: tramos por volumen; pago en dos etapas (parte ahora, parte tras retención); porcentaje del margen del primer periodo; recompensas no cash por cumplir el plan (equipo propio tras la entrega).",
        "Grupos de métricas: eficacia (tiempo de deal, número de touches con techos/suelos, win-rate, velocidad de respuesta inbound); calidad (compras repetidas, crecimiento de ticket, quejas); outcome (ticket medio, margen/revenue, receivables).",
      ],
      lists: [
        {
          intro: "Reglas de construcción:",
          items: [
            "beneficio de la empresa por encima de un bonus «bonito»",
            "metas concretas y medibles en el CRM",
            "pocos indicadores",
            "sin techo que mate la ambición fuerte",
          ],
        },
      ],
      notes: [
        {
          title: "Saltos bruscos del plan",
          kind: "tip",
          text: "Una inflación brusca de metas a menudo baja el revenue y empuja a los vendedores a irse. Sube el listón con historial y mercado — no con wishful thinking.",
        },
      ],
    },
    {
      title: "Cómo se rompe el sistema — y cómo controlar",
      level: 2,
      paras: [
        "Esquemas típicos: promesas imposibles para cerrar un deal; «clientes» de amigos para hit de volumen. Fix — un estándar de contrato/descuento y prueba de que el deal es real (pago, entrega).",
        "Control: CRM con reporting en vivo, reglas de entrada de deals, revisión selectiva de anomalías. Hojas y informes mensuales son más baratos pero más fáciles de distorsionar — cuadra con el dinero.",
      ],
      lists: [
        {
          intro: "Cuando se fallan los KPIs:",
          items: [
            "hallar causas e historial del mes",
            "hablar con el manager",
            "ajustar metas o área de ownership",
            "formar / reordenar prioridades del embudo",
            "si no hay skill — decidir la cuestión de gente con honestidad",
          ],
        },
      ],
      links: [
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
        {
          label: "Analytics de extremo a extremo",
          href: "/es/blog/skvoznaya-analitika/",
        },
        {
          label: "Informe al cliente",
          href: "/es/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Los KPIs del vendedor funcionan cuando hay pocas métricas, el sueldo se liga a margen/revenue y se bloquea el gaming. Arma el esquema para el ciclo de deal, controla en el CRM y no confundas actividad con resultados.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "menedzher-internet-magazina",
  ],
};

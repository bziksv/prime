import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategiya-prodvizheniya — same structure as RU JSON. */
export const strategiyaProdvizheniyaEn: BlogPost = {
  slug: "strategiya-prodvizheniya",
  title: "SEO strategy: match the plan to the state of your site",
  date: "2018-10-02",
  category: "SEO",
  cover: "/images/blog/strategiya-prodvizheniya/cover-en.webp",
  excerpt:
    "An SEO strategy isn’t copied from someone else’s checklist. It depends on site type, age, content, backlinks, and tech. How to set a goal and choose a work plan.",
  lead: [
    "The right strategy moves rankings, traffic, and leads — but “right” doesn’t mean universal. A plan for a young store and for an old corporate site with someone else’s link history will look different.",
    "Here’s how to state a goal, what to check before work starts, and how typical scenarios (new site, long-tail growth, “already promoted”) differ. A DIY work order lives in the DIY SEO post; this piece is about choosing the course.",
  ],
  faq: [
    {
      q: "How many SEO strategies exist?",
      a: "Not “exactly three forever.” There are typical scenarios by age and site state. The concrete plan is always individual.",
    },
    {
      q: "Where does a strategy start?",
      a: "With a measurable goal (leads, revenue, cluster visibility) and a diagnosis: content, tech, links, competition. Not with lucky link buys.",
    },
    {
      q: "When should I expect page-one rankings?",
      a: "Prep often takes weeks to about a month. Ranking growth for the keyword set is planned over 2–6 months after work starts. Strategy doesn’t rewrite how search works.",
    },
    {
      q: "How is this different from DIY SEO?",
      a: "That post is the owner’s work order. This one is how to choose the accent — new site, long-tail, or rehab — from the inputs.",
    },
    {
      q: "Do I need separate strategies for Yandex and Google?",
      a: "The base is shared; accents (locality, commercial signals, tools) may differ. Often both channels run as one program with nuances.",
    },
    {
      q: "Can I copy a competitor’s strategy?",
      a: "Study the results and structure — yes. Copy texts and spam links — no. You have a different domain age and resources.",
    },
    {
      q: "What matters more — content or links?",
      a: "Meet intent and tech first; links after base relevance. On a spammy profile, more links can hurt.",
    },
    {
      q: "Is strategy SEO only?",
      a: "Often no: organic + ads + landing conversion. The channel plan has to serve the business goal.",
    },
  ],
  sections: [
    {
      title: "Goal before tactics",
      level: 2,
      paras: [
        "Strategy starts with a goal you can check in 3–6 months: not “get to page one,” but “+N organic leads while keeping or growing conversion” or “share of the commercial keyword set near page one.”",
        "A “+10,000 visits” goal without a target-action filter is risky — non-target traffic shows up. Lock region, priority services, and KPIs in analytics before you pick tactics.",
      ],
      lists: [
        {
          intro: "Goal model:",
          items: [
            "business result (leads, sales)",
            "horizon (months, not days)",
            "constraints (budget, team, CMS)",
            "channels (Yandex / Google / both)",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Getting a site ready for promotion often takes weeks to about a month. Ranking the keyword set is planned over 2–6 months. Strategy sets priorities — not a guaranteed date.",
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "What shapes the strategy choice",
      level: 2,
      paras: [
        "Resource type (store, services, media), age and promotion history, niche and region, current base (traffic, content, links), and competition set a realistic plan.",
        "A young site without indexation and trust can’t run the same program as a site with five years of organic. Wide geography without branches costs more than a local niche.",
      ],
      lists: [
        {
          intro: "Factors:",
          items: [
            "site type and jobs",
            "age and past SEO experiments",
            "niche and UX expectations",
            "region coverage",
            "content and tech quality",
            "backlink profile",
            "Yandex / Google / both focus",
          ],
        },
      ],
      links: [
        {
          label: "Yandex vs Google SEO",
          href: "/en/blog/seo-yandex-google/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Typical scenarios",
      level: 2,
      paras: [
        "The informal “three strategies” from practice are scenarios, not rigid packages. You combine them after an audit.",
        "From scratch: bake SEO into structure and CMS before launch — cheaper than fixing later. First noticeable moves on the keyword set take months, not “page one a week after release.”",
        "Long tail: grow from narrow multi-word queries toward shorter commercial ones — nested like a matryoshka. When reputation and a base already exist, strengthen long- and mid-tail first, then compete for short head terms.",
        "Rehab: the site was “already promoted” and the result disappoints. Unpack past strategy, content, and link mistakes first — then write a new plan, or you’ll repeat someone else’s failures.",
      ],
      lists: [
        {
          intro: "Scenarios in short:",
          items: [
            "new site — structure and keyword map before content",
            "long-tail — grow from long-tail toward head terms",
            "after someone else’s SEO — audit and clear the debts first",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Content as the strategy entry",
      level: 2,
      paras: [
        "Owners often rate copy as “fine.” In practice check uniqueness, intent fit, over-optimization, and real behavior in analytics — not only a density score in an online tool.",
        "Internal/external duplicates, template cards with no value, and pages that miss the query break any link strategy. Landings for clusters first, then growth.",
      ],
      lists: [
        {
          intro: "Signals to rework:",
          items: [
            "duplicates and copy-paste",
            "keywords without answering intent",
            "high bounce on target traffic",
            "no H1–H2 structure for the queries",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing a uniqueness % in a checker and ignoring whether the page closes search demand. Uniqueness is a base — not a ticket to page one.",
        },
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "SEO text length",
          href: "/en/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Backlink profile",
      level: 2,
      paras: [
        "A profile can be relatively clean, spammy, or critical. That decides whether you can grow links or must clean and neutralize risks first.",
        "Mass buying “for the strategy” is a bad strategy. Relevance and natural mentions first; links — on purpose and in a volume the site can bear.",
      ],
      lists: [
        {
          intro: "Before link activity:",
          items: [
            "anchor and donor audit",
            "toxic / mass patterns",
            "growth dynamics",
            "niche fit",
          ],
        },
      ],
      links: [
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Tech and keywords",
      level: 2,
      paras: [
        "Mirror duplicates, weak indexing, slow mobile load, and a keyword set that doesn’t map to landings burn content budget. Strategy without tech is a plan on sand.",
        "Build or check the keyword set, map clusters to URLs, remove cannibalization. Optimizing “one phrase in the title” without query structure is under-strategy.",
      ],
      lists: [
        {
          intro: "Minimum before scaling:",
          items: [
            "canonical and mirrors",
            "keyword set and landing map",
            "speed and mobile UX",
            "critical errors in Webmaster / Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to assemble a quarter plan",
      level: 2,
      paras: [
        "After diagnosis, pick a scenario, lock one or two main levers for the quarter (e.g. commercial landings + tech), and backlog the rest. Don’t try “everything at once” — scatter kills strategy.",
        "Monthly, check KPIs and results by cluster: strategy is alive. If content is done and growth hits trust — strengthen external factors surgically. If the opposite — don’t pour links onto empty URLs.",
      ],
      lists: [
        {
          intro: "Strategy start checklist:",
          items: [
            "goal and KPIs in analytics",
            "scenario by age / history",
            "content / tech / link debts",
            "90-day priorities",
            "reporting rhythm",
          ],
        },
      ],
      links: [
        {
          label: "SEO after page one",
          href: "/en/blog/seo-posle-topa/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
    "ssylochnyy-profil",
    "effektivnost-seo",
    "seo-posle-topa",
  ],
};

/** ES overlay for strategiya-prodvizheniya — same structure as RU JSON / EN. */
export const strategiyaProdvizheniyaEs: BlogPost = {
  slug: "strategiya-prodvizheniya",
  title: "Estrategia SEO: alinea el plan al estado de tu sitio",
  date: "2018-10-02",
  category: "SEO",
  cover: "/images/blog/strategiya-prodvizheniya/cover.webp",
  excerpt:
    "Una estrategia SEO no se copia del checklist de otro. Depende del tipo de sitio, edad, contenido, backlinks y técnica. Cómo fijar un objetivo y elegir un plan de trabajo.",
  lead: [
    "La estrategia correcta mueve rankings, tráfico y leads — pero «correcta» no significa universal. El plan para una tienda joven y para un sitio corporativo viejo con historial de enlaces de otro se verá distinto.",
    "Aquí: cómo formular un objetivo, qué revisar antes de empezar y cómo difieren escenarios típicos (sitio nuevo, crecimiento long-tail, «ya promocionado»). El orden de trabajo DIY vive en el post de SEO DIY; esta pieza es sobre elegir el rumbo.",
  ],
  faq: [
    {
      q: "¿Cuántas estrategias SEO existen?",
      a: "No «exactamente tres para siempre». Hay escenarios típicos por edad y estado del sitio. El plan concreto siempre es individual.",
    },
    {
      q: "¿Dónde empieza una estrategia?",
      a: "Con un objetivo medible (leads, ingresos, visibilidad de cluster) y un diagnóstico: contenido, técnica, enlaces, competencia. No con compras de enlaces a suerte.",
    },
    {
      q: "¿Cuándo esperar rankings en primera página?",
      a: "La prep suele llevar de semanas a ~un mes. El crecimiento de rankings del set de keywords se planifica a 2–6 meses tras el arranque. La estrategia no reescribe cómo funciona la búsqueda.",
    },
    {
      q: "¿En qué se diferencia del SEO DIY?",
      a: "Ese post es la orden de trabajo del dueño. Este es cómo elegir el acento — sitio nuevo, long-tail o rehab — a partir de los inputs.",
    },
    {
      q: "¿Hacen falta estrategias aparte para Yandex y Google?",
      a: "La base es compartida; los acentos (localidad, señales comerciales, tools) pueden diferir. A menudo ambos canales van como un programa con matices.",
    },
    {
      q: "¿Puedo copiar la estrategia de un competidor?",
      a: "Estudiar resultados y estructura — sí. Copiar textos y spam de enlaces — no. Tienes otra edad de dominio y otros recursos.",
    },
    {
      q: "¿Qué importa más — contenido o enlaces?",
      a: "Primero intención y técnica; enlaces después de la relevancia base. En un perfil spam, más enlaces pueden hacer daño.",
    },
    {
      q: "¿La estrategia es solo SEO?",
      a: "A menudo no: orgánico + ads + conversión de landing. El plan de canales tiene que servir al objetivo de negocio.",
    },
  ],
  sections: [
    {
      title: "Objetivo antes que tácticas",
      level: 2,
      paras: [
        "La estrategia empieza con un objetivo que puedas chequear en 3–6 meses: no «llegar a primera página», sino «+N leads orgánicos manteniendo o creciendo la conversión» o «cuota del set comercial de keywords cerca de primera página».",
        "Un objetivo de «+10.000 visitas» sin filtro de acción objetivo es arriesgado — aparece tráfico no target. Fija región, servicios prioritarios y KPIs en analytics antes de elegir tácticas.",
      ],
      lists: [
        {
          intro: "Modelo de objetivo:",
          items: [
            "resultado de negocio (leads, ventas)",
            "horizonte (meses, no días)",
            "restricciones (presupuesto, equipo, CMS)",
            "canales (Yandex / Google / ambos)",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          text: "Preparar un sitio para promoción suele llevar de semanas a ~un mes. Rankear el set de keywords se planifica a 2–6 meses. La estrategia fija prioridades — no una fecha garantizada.",
        },
      ],
      links: [
        {
          label: "Eficacia del SEO",
          href: "/es/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "Qué moldea la elección de estrategia",
      level: 2,
      paras: [
        "Tipo de recurso (tienda, servicios, media), edad e historial de promoción, nicho y región, base actual (tráfico, contenido, enlaces) y competencia fijan un plan realista.",
        "Un sitio joven sin indexación ni trust no puede correr el mismo programa que uno con cinco años de orgánico. Geografía amplia sin sucursales cuesta más que un nicho local.",
      ],
      lists: [
        {
          intro: "Factores:",
          items: [
            "tipo de sitio y trabajos",
            "edad y experimentos SEO pasados",
            "nicho y expectativas de UX",
            "cobertura de región",
            "calidad de contenido y técnica",
            "perfil de backlinks",
            "foco Yandex / Google / ambos",
          ],
        },
      ],
      links: [
        {
          label: "SEO Yandex vs Google",
          href: "/es/blog/seo-yandex-google/",
        },
        {
          label: "Análisis de competidores",
          href: "/es/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Escenarios típicos",
      level: 2,
      paras: [
        "Las «tres estrategias» informales de la práctica son escenarios, no paquetes rígidos. Los combinas tras una auditoría.",
        "Desde cero: mete SEO en estructura y CMS antes del lanzamiento — más barato que arreglar después. Los primeros movimientos notables del set de keywords llevan meses, no «primera página una semana tras el release».",
        "Long tail: crece desde queries estrechas de varias palabras hacia las comerciales más cortas — anidadas como una matrioska. Cuando ya hay reputación y base, refuerza primero long- y mid-tail, luego compite por head terms cortos.",
        "Rehab: el sitio «ya estaba promocionado» y el resultado decepciona. Primero desmonta la estrategia pasada, contenido y errores de enlaces — luego escribe un plan nuevo, o repetirás los fallos de otro.",
      ],
      lists: [
        {
          intro: "Escenarios en breve:",
          items: [
            "sitio nuevo — estructura y mapa de keywords antes del contenido",
            "long-tail — crece del long-tail hacia head terms",
            "tras el SEO de otro — primero auditoría y limpiar deudas",
          ],
        },
      ],
      links: [
        {
          label: "SEO DIY",
          href: "/es/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Contenido como entrada de la estrategia",
      level: 2,
      paras: [
        "Los dueños a menudo valoran el copy como «bien». En la práctica revisa unicidad, encaje de intención, sobre-optimización y comportamiento real en analytics — no solo un score de densidad en un tool online.",
        "Duplicados internos/externos, fichas plantilla sin valor y páginas que fallan la query rompen cualquier estrategia de enlaces. Primero landings para clusters, luego crecimiento.",
      ],
      lists: [
        {
          intro: "Señales para rehacer:",
          items: [
            "duplicados y copy-paste",
            "keywords sin responder la intención",
            "bounce alto en tráfico target",
            "sin estructura H1–H2 para las queries",
          ],
        },
      ],
      notes: [
        {
          title: "Error común",
          text: "Perseguir un % de unicidad en un checker e ignorar si la página cierra la demanda de búsqueda. La unicidad es base — no un ticket a primera página.",
        },
      ],
      links: [
        {
          label: "Copywriting SEO",
          href: "/es/blog/seo-kopirayting/",
        },
        {
          label: "Longitud del texto SEO",
          href: "/es/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Perfil de backlinks",
      level: 2,
      paras: [
        "Un perfil puede ser relativamente limpio, spam o crítico. Eso decide si puedes crecer enlaces o debes limpiar y neutralizar riesgos primero.",
        "Compra masiva «por la estrategia» es mala estrategia. Primero relevancia y menciones naturales; enlaces — a propósito y en un volumen que el sitio aguante.",
      ],
      lists: [
        {
          intro: "Antes de actividad de enlaces:",
          items: [
            "auditoría de anchors y donors",
            "patrones tóxicos / masivos",
            "dinámica de crecimiento",
            "encaje de nicho",
          ],
        },
      ],
      links: [
        {
          label: "Perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Técnica y keywords",
      level: 2,
      paras: [
        "Duplicados de mirror, indexación débil, carga móvil lenta y un set de keywords que no mapea a landings queman presupuesto de contenido. Estrategia sin técnica es un plan sobre arena.",
        "Arma o revisa el set de keywords, mapea clusters a URLs, quita canibalización. Optimizar «una frase en el title» sin estructura de queries es infra-estrategia.",
      ],
      lists: [
        {
          intro: "Mínimo antes de escalar:",
          items: [
            "canonical y mirrors",
            "set de keywords y mapa de landings",
            "velocidad y UX móvil",
            "errores críticos en Webmaster / Search Console",
          ],
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Keyword research",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Cómo armar un plan de trimestre",
      level: 2,
      paras: [
        "Tras el diagnóstico, elige un escenario, fija una o dos palancas principales del trimestre (p. ej. landings comerciales + técnica) y deja el resto en backlog. No intentes «todo a la vez» — la dispersión mata la estrategia.",
        "Cada mes, revisa KPIs y resultados por cluster: la estrategia está viva. Si el contenido está hecho y el crecimiento choca con trust — refuerza factores externos con cirugía. Si es al revés — no viertas enlaces sobre URLs vacías.",
      ],
      lists: [
        {
          intro: "Checklist de arranque de estrategia:",
          items: [
            "objetivo y KPIs en analytics",
            "escenario por edad / historial",
            "deudas de contenido / técnica / enlaces",
            "prioridades a 90 días",
            "ritmo de reporting",
          ],
        },
      ],
      links: [
        {
          label: "SEO tras la primera página",
          href: "/es/blog/seo-posle-topa/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "semanticheskoe-yadro",
    "ssylochnyy-profil",
    "effektivnost-seo",
    "seo-posle-topa",
  ],
};

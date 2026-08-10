import type { BlogPost } from "../../../data/blog";

/** EN overlay for lestnitsa-hanta — same structure as RU JSON. */
export const lestnitsaHantaEn: BlogPost = {
  slug: "lestnitsa-hanta",
  title: "Hunt awareness ladder: 5 levels of customer awareness",
  date: "2020-01-24",
  category: "Digital marketing",
  cover: "/images/blog/lestnitsa-hanta/cover-en.webp",
  excerpt:
    "How the awareness ladder works: from “doesn’t know the problem” to ready to buy — and what to say at each step in ads and on the landing page.",
  lead: [
    "The awareness ladder is a five-level model: how clearly someone sees the problem, solution classes, and your product. In RU marketing it’s often called Hunt’s ladder; the classic audience-awareness levels were described by Eugene Schwartz.",
    "The idea is simple: you can’t hard-sell someone who doesn’t see the need yet. Below: the steps and what to do on each in copy, ads, and scripts.",
  ],
  faq: [
    {
      q: "Is this Hunt’s ladder or Schwartz’s?",
      a: "The five awareness levels come from Schwartz’s tradition. RU materials locked in the name “Hunt’s ladder”; the steps matter more than the naming fight.",
    },
    {
      q: "How many steps are there?",
      a: "Five: unaware → problem-aware → solution-aware → product/vendor compare → ready to buy from you (or nearly).",
    },
    {
      q: "Can I skip steps?",
      a: "Hard skips are a bad idea: lead cold traffic through the problem and value. Sometimes steps compress into one piece, but you don’t drop the “why do I need this” logic.",
    },
    {
      q: "Where can I apply it?",
      a: "Landings, ads, email, scripts, content plans: different entry for different traffic temperature.",
    },
    {
      q: "Does only the fifth step buy?",
      a: "Purchase is more common where trust in you already exists. But you build the path to the fifth with content and offer from the lower steps.",
    },
    {
      q: "How does it tie to USP (unique selling proposition)?",
      a: "On lower steps, problem and outcome matter more. USP and competitor comparison are stronger on product- and brand-choice steps.",
    },
    {
      q: "Does it fit banners?",
      a: "Yes: outdoor/display banners more often target people already seeking a solution — benefits and difference, not a long pain lecture.",
    },
  ],
  sections: [
    {
      title: "Five awareness steps",
      level: 2,
      paras: [
        "People in one niche stand on different steps. Anti-aging care is early for a schoolgirl; an adult segment already knows the topic. Ads should speak the language of the step someone is on now.",
        "For any niche, the most aware audience was once on step one. Marketing’s job is to walk them up the ladder — not demand a purchase on first touch.",
      ],
      lists: [
        {
          intro: "The steps:",
          items: [
            "1 — doesn’t see the problem",
            "2 — knows the problem, not the solutions",
            "3 — knows solution types, picking an approach",
            "4 — compares products/vendors",
            "5 — knows you and is close to buying",
          ],
        },
      ],
      notes: [
        {
          title: "Worth remembering",
          kind: "tip",
          text: "Jumping from “I don’t know I have a problem” straight to “buy Premium” almost always gets a no. Meaning first, offer second.",
        },
      ],
    },
    {
      title: "How to apply it in practice",
      level: 2,
      paras: [
        "The model is universal: creatives, traffic, scripts, landing structure. First decide where the person comes from and what they already understand.",
        "Example: a landing for “cold” traffic — first screen shows inaction costs and the problem; benefits and pricing lower. A banner for people already picking a vendor — your benefits right away, no pain lecture.",
      ],
      lists: [
        {
          intro: "Before a creative ask:",
          items: [
            "where is the traffic from (search, ads, email)?",
            "what query/intent?",
            "what has the person already tried?",
            "what next action is realistic?",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Ad banner",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "What to do on each step",
      level: 2,
      paras: [
        "Steps 1–2: convince the job exists and its cost is rising. Content, before/after cases, simple explanations without brand jargon.",
        "Step 3: show the problem is solvable in different ways — articles, approach comparisons, video, infographics. Step 4: compare solution options and choice criteria. Step 5: prove you’re the best choice — USP, guarantees, reviews, offer.",
      ],
      lists: [
        {
          intro: "Message focus:",
          items: [
            "1–2 — problem and cost of inaction",
            "3 — solution classes",
            "4 — criteria and comparison",
            "5 — your brand, risks, CTA",
          ],
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "One piece — several steps",
      level: 2,
      paras: [
        "A strong long-form piece or landing can walk several steps in a row: pain → options → why this approach → why you → action. The main thing — don’t open with price for people who don’t get the job yet.",
        "In ad accounts, segment: different creatives for lookalikes/interests vs retargeting “already on the site.” One ad for every step talks past part of the audience.",
      ],
    },
    {
      title: "Tie-in with funnel and channels",
      level: 2,
      paras: [
        "Content and SEO often feed the lower steps. Paid search on commercial queries — middle and upper. Retargeting and email — people who already know you.",
        "Measure more than the click: read-through, lead, lead quality. If hot queries convert but reach doesn’t — check whether you’re selling step five to a step-one audience.",
      ],
      lists: [
        {
          intro: "Mini audit:",
          items: [
            "first screen matches traffic temperature",
            "there’s content for “problem” and for “choice”",
            "USP doesn’t appear before context is clear",
            "retargeting doesn’t hammer a cold offer for a month straight",
          ],
        },
      ],
      links: [
        {
          label: "Marketing anti-trends",
          href: "/en/blog/antitrendy-marketinga/",
        },
      ],
    },
  ],
  closing: [
    "The awareness ladder reminds you: purchase is the end of a path through understanding. Speak to the person on their step — then ads and landings stop being a shout into the void.",
  ],
};

/** ES overlay for lestnitsa-hanta — same structure as RU JSON / EN. */
export const lestnitsaHantaEs: BlogPost = {
  slug: "lestnitsa-hanta",
  title: "Escalera de awareness de Hunt: 5 niveles de conciencia del cliente",
  date: "2020-01-24",
  category: "Digital marketing",
  cover: "/images/blog/lestnitsa-hanta/cover-es.webp",
  excerpt:
    "Cómo funciona la escalera de awareness: de «no conoce el problema» a listo para comprar — y qué decir en cada paso en ads y en el landing.",
  lead: [
    "La escalera de awareness es un modelo de cinco niveles: qué tan claro ve alguien el problema, las clases de solución y tu producto. En el marketing RU a menudo se llama escalera de Hunt; los niveles clásicos de conciencia de audiencia los describió Eugene Schwartz.",
    "La idea es simple: no puedes hard-sell a quien aún no ve la necesidad. Abajo: los peldaños y qué hacer en cada uno en copy, ads y scripts.",
  ],
  faq: [
    {
      q: "¿Es la escalera de Hunt o de Schwartz?",
      a: "Los cinco niveles de awareness vienen de la tradición de Schwartz. Los materiales RU fijaron el nombre «escalera de Hunt»; importan más los pasos que la pelea de nombres.",
    },
    {
      q: "¿Cuántos pasos hay?",
      a: "Cinco: unaware → problem-aware → solution-aware → comparar producto/vendor → listo para comprar contigo (o casi).",
    },
    {
      q: "¿Puedo saltarme pasos?",
      a: "Los saltos duros son mala idea: lleva el tráfico frío por el problema y el valor. A veces los pasos se comprimen en una pieza, pero no sueltas la lógica de «¿para qué me hace falta esto?».",
    },
    {
      q: "¿Dónde la aplico?",
      a: "Landings, ads, email, scripts, planes de contenido: entrada distinta según la temperatura del tráfico.",
    },
    {
      q: "¿Solo compra el quinto paso?",
      a: "La compra es más habitual donde ya existe confianza en ti. Pero construyes el camino al quinto con contenido y oferta desde los peldaños inferiores.",
    },
    {
      q: "¿Cómo se liga a la USP (propuesta de venta única)?",
      a: "En peldaños bajos importan más el problema y el resultado. USP y comparación con competidores pesan más en los pasos de elección de producto y marca.",
    },
    {
      q: "¿Encaja con banners?",
      a: "Sí: banners outdoor/display suelen apuntar a gente que ya busca solución — beneficios y diferencia, no una lección larga de dolor.",
    },
  ],
  sections: [
    {
      title: "Cinco peldaños de awareness",
      level: 2,
      paras: [
        "La gente de un mismo nicho está en peldaños distintos. El cuidado anti-edad es temprano para una escolar; un segmento adulto ya conoce el tema. Los ads deben hablar el lenguaje del peldaño en el que alguien está ahora.",
        "Para cualquier nicho, la audiencia más consciente estuvo alguna vez en el peldaño uno. El trabajo del marketing es subirla por la escalera — no exigir una compra en el primer toque.",
      ],
      lists: [
        {
          intro: "Los peldaños:",
          items: [
            "1 — no ve el problema",
            "2 — conoce el problema, no las soluciones",
            "3 — conoce tipos de solución, elige enfoque",
            "4 — compara productos/vendors",
            "5 — te conoce y está cerca de comprar",
          ],
        },
      ],
      notes: [
        {
          title: "Conviene recordar",
          kind: "tip",
          text: "Saltar de «no sé que tengo un problema» directo a «compra Premium» casi siempre recibe un no. Primero sentido, luego oferta.",
        },
      ],
    },
    {
      title: "Cómo aplicarla en la práctica",
      level: 2,
      paras: [
        "El modelo es universal: creatividades, tráfico, scripts, estructura de landing. Primero decide de dónde viene la persona y qué ya entiende.",
        "Ejemplo: un landing para tráfico «frío» — el primer pantallazo muestra el coste de no actuar y el problema; beneficios y precios más abajo. Un banner para quien ya elige vendor — tus beneficios de entrada, sin lección de dolor.",
      ],
      lists: [
        {
          intro: "Antes de una creatividad pregunta:",
          items: [
            "¿de dónde viene el tráfico (búsqueda, ads, email)?",
            "¿qué consulta/intent?",
            "¿qué ha probado ya la persona?",
            "¿qué siguiente acción es realista?",
          ],
        },
      ],
      links: [
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
        {
          label: "Banner publicitario",
          href: "/es/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "Qué hacer en cada peldaño",
      level: 2,
      paras: [
        "Peldaños 1–2: convence de que el job existe y su coste sube. Contenido, casos before/after, explicaciones simples sin jerga de marca.",
        "Peldaño 3: muestra que el problema se resuelve de distintas formas — artículos, comparaciones de enfoque, vídeo, infografías. Peldaño 4: compara opciones de solución y criterios de elección. Peldaño 5: prueba que eres la mejor opción — USP, garantías, reseñas, oferta.",
      ],
      lists: [
        {
          intro: "Foco del mensaje:",
          items: [
            "1–2 — problema y coste de no actuar",
            "3 — clases de solución",
            "4 — criterios y comparación",
            "5 — tu marca, riesgos, CTA",
          ],
        },
      ],
      links: [
        {
          label: "USP (propuesta de venta única)",
          href: "/es/blog/utp/",
        },
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Una pieza — varios peldaños",
      level: 2,
      paras: [
        "Una pieza long-form fuerte o un landing puede recorrer varios peldaños seguidos: dolor → opciones → por qué este enfoque → por qué tú → acción. Lo principal — no abrir con el precio para quien aún no entiende el job.",
        "En las cuentas de ads, segmenta: creatividades distintas para lookalikes/intereses vs retargeting «ya estuvo en el sitio». Un anuncio para todos los peldaños habla al lado de parte de la audiencia.",
      ],
    },
    {
      title: "Encaje con funnel y canales",
      level: 2,
      paras: [
        "Contenido y SEO suelen alimentar los peldaños bajos. Paid search en consultas comerciales — medios y altos. Retargeting y email — gente que ya te conoce.",
        "Mide más que el clic: lectura, lead, calidad del lead. Si las consultas calientes convierten pero el reach no — revisa si estás vendiendo el peldaño cinco a una audiencia del uno.",
      ],
      lists: [
        {
          intro: "Mini auditoría:",
          items: [
            "el primer pantallazo encaja con la temperatura del tráfico",
            "hay contenido para «problema» y para «elección»",
            "la USP no aparece antes de que el contexto esté claro",
            "el retargeting no machaca una oferta fría durante un mes seguido",
          ],
        },
      ],
      links: [
        {
          label: "Antitendencias de marketing",
          href: "/blog/antitrendy-marketinga/",
        },
      ],
    },
  ],
  closing: [
    "La escalera de awareness recuerda: la compra es el final de un camino por la comprensión. Habla a la persona en su peldaño — entonces ads y landings dejan de ser un grito al vacío.",
  ],
};

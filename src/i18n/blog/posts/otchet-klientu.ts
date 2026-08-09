import type { BlogPost } from "../../../data/blog";

/** EN overlay for otchet-klientu — same structure as RU JSON. */
export const otchetKlientuEn: BlogPost = {
  slug: "otchet-klientu",
  title: "Client ad campaign report: 9 rules",
  date: "2021-07-12",
  category: "Digital marketing",
  cover: "/images/blog/otchet-klientu/cover-en.webp",
  excerpt:
    "How to deliver an ad report so the client understands the result: goals and ROI first, shared KPIs, a dashboard summary, a glossary, and details in an appendix — without “elf” jargon.",
  lead: [
    "A campaign report isn’t only numbers from the ad account — it’s a way to agree on the picture: what worked, what didn’t, and what to do next. Bad presentation breaks trust even with decent results.",
    "Below: nine rules for mutual understanding — from transparency and structure to a glossary and “non-ad” business metrics. Account tools change; report logic beats the BI brand.",
  ],
  faq: [
    {
      q: "Should you start with CTR or with money?",
      a: "With business goals and money outcomes (leads, sales, ROI/ROAS — whatever the brief locked). CTR and clicks explain; they don’t replace.",
    },
    {
      q: "Do you need a dashboard?",
      a: "A one-screen summary — yes: vs the previous period and an answer to “are we on goal?” A full dashboard — by agreement; see the separate article.",
    },
    {
      q: "How often should you report?",
      a: "As in the contract: weekly / biweekly / monthly. What matters is the same structure and metric definitions from report to report.",
    },
    {
      q: "What if results are weak?",
      a: "Show the facts, cause hypotheses, and a fix plan. Hiding a miss is worse than an honest breakdown.",
    },
    {
      q: "Do examples have to be from Google Ads?",
      a: "No. The same rules for Yandex Direct and other accounts: summary → blocks → details; calls and offline as a separate line if the platform doesn’t see them.",
    },
  ],
  sections: [
    {
      title: "1–3. Honesty, structure, and goals",
      level: 2,
      paras: [
        "Transparency: numbers don’t “paint” success. If the campaign dips — say why and what you’re changing. Consistency: the same KPIs every reporting period.",
        "Main first, then details: summary → stats blocks → keyword/creative breakdowns. Start with brief goals and money impact, then impressions, clicks, CTR, CPA.",
      ],
      lists: [
        {
          intro: "In the report header:",
          items: [
            "period and channels",
            "goal (leads / sales / traffic)",
            "actual vs plan",
            "1–3 main takeaways",
            "what we do next period",
          ],
        },
      ],
    },
    {
      title: "4–5. Summary and the client’s language",
      level: 2,
      paras: [
        "A dashboard or one-page summary helps the client report “upward.” Answer: does advertising help the goal, what’s the strategy, how the media plan is going, what changed vs the last report.",
        "Explain terms in a footnote or short glossary. Don’t over-explain the obvious, but don’t leave ROAS/attribution undefined.",
      ],
      links: [
        {
          label: "Business dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "6–7. KPIs by segment and data completeness",
      level: 2,
      paras: [
        "Split interaction types: search / networks / retargeting, new / returning, funnel stages. Attribution affects “whose” conversion — name the model.",
        "Merge data from all accounts into one fact table. Spot-check exports for anomalies. Calls, messengers, offline sales — a separate block if the platform doesn’t count them.",
      ],
      lists: [
        {
          intro: "Handy KPI classification:",
          items: [
            "reach and cost per contact",
            "clicks and traffic quality",
            "conversions and CPA/CPL",
            "revenue and ROI/ROAS",
            "supporting: ER, bounce, depth",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "“AdWords” in old texts = Google Ads. Report names in Direct and Google change — for the client, column meaning beats a button screenshot.",
        },
      ],
      links: [
        {
          label: "Click fraud",
          href: "/en/blog/sklikivanie/",
        },
      ],
    },
    {
      title: "8–9. Details and business context",
      level: 2,
      paras: [
        "Ask the client about format: slides, PDF, spreadsheet. Full exports and keyword lists go in an appendix so they don’t drown the summary.",
        "Add adjacent context: site lead growth, seasonality, competitor promos, analytics outages — anything that changes how numbers read, even if it’s “not from the ad account.”",
      ],
      lists: [
        {
          intro: "Before sending:",
          items: [
            "read it with the client’s eyes",
            "check period and currency",
            "confirm conclusions follow from the numbers",
            "there are next steps, not only “see the Excel”",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for otchet-klientu — same structure as RU JSON / EN. */
export const otchetKlientuEs: BlogPost = {
  slug: "otchet-klientu",
  title: "Informe de campaña publicitaria al cliente: 9 reglas",
  date: "2021-07-12",
  category: "Digital marketing",
  cover: "/images/blog/otchet-klientu/cover.webp",
  excerpt:
    "Cómo entregar un informe de ads para que el cliente entienda el resultado: primero goals y ROI, KPIs compartidos, un resumen en dashboard, glosario y detalles en anexo — sin jerga de «elfos».",
  lead: [
    "Un informe de campaña no son solo números de la cuenta de ads — es una forma de acordar la foto: qué funcionó, qué no y qué hacer después. Una mala presentación rompe la confianza aunque los resultados sean decentes.",
    "Abajo: nueve reglas para el entendimiento mutuo — de transparencia y estructura a glosario y métricas de negocio «no-ads». Las tools de la cuenta cambian; la lógica del informe gana a la marca de BI.",
  ],
  faq: [
    {
      q: "¿Empiezas por el CTR o por el dinero?",
      a: "Por goals de negocio y resultados en dinero (leads, ventas, ROI/ROAS — lo que fijó el brief). CTR y clics explican; no sustituyen.",
    },
    {
      q: "¿Hace falta un dashboard?",
      a: "Un resumen de una pantalla — sí: vs el periodo anterior y una respuesta a «¿vamos al goal?». Un dashboard completo — por acuerdo; ver el artículo aparte.",
    },
    {
      q: "¿Con qué frecuencia informar?",
      a: "Como diga el contrato: semanal / quincenal / mensual. Lo que importa es la misma estructura y las mismas definiciones de métrica de informe a informe.",
    },
    {
      q: "¿Y si los resultados son flojos?",
      a: "Muestra los hechos, hipótesis de causa y un plan de arreglo. Ocultar un fallo es peor que un desglose honesto.",
    },
    {
      q: "¿Los ejemplos tienen que ser de Google Ads?",
      a: "No. Las mismas reglas para Yandex Direct y otras cuentas: resumen → bloques → detalles; llamadas y offline como línea aparte si la plataforma no las ve.",
    },
  ],
  sections: [
    {
      title: "1–3. Honestidad, estructura y goals",
      level: 2,
      paras: [
        "Transparencia: los números no «pintan» el éxito. Si la campaña baja — di por qué y qué estás cambiando. Consistencia: los mismos KPIs cada periodo de informe.",
        "Lo principal primero, luego los detalles: resumen → bloques de stats → desgloses de keywords/creatives. Empieza por goals del brief e impacto en dinero, luego impresiones, clics, CTR, CPA.",
      ],
      lists: [
        {
          intro: "En la cabecera del informe:",
          items: [
            "periodo y canales",
            "goal (leads / ventas / tráfico)",
            "real vs plan",
            "1–3 takeaways principales",
            "qué hacemos el próximo periodo",
          ],
        },
      ],
    },
    {
      title: "4–5. Resumen y el lenguaje del cliente",
      level: 2,
      paras: [
        "Un dashboard o un resumen de una página ayuda al cliente a informar «hacia arriba». Responde: ¿la publicidad ayuda al goal, cuál es la estrategia, cómo va el media plan, qué cambió vs el último informe?",
        "Explica términos en una nota al pie o un glosario corto. No sobreexpliques lo obvio, pero no dejes ROAS/atribución sin definir.",
      ],
      links: [
        {
          label: "Dashboard de negocio",
          href: "/es/blog/dashboard/",
        },
      ],
    },
    {
      title: "6–7. KPIs por segmento y completitud de datos",
      level: 2,
      paras: [
        "Separa tipos de interacción: search / networks / retargeting, nuevos / recurrentes, etapas del funnel. La atribución afecta de «quién» es la conversión — nombra el modelo.",
        "Fusiona datos de todas las cuentas en una sola tabla de hechos. Chequea exports al azar por anomalías. Llamadas, mensajeros, ventas offline — un bloque aparte si la plataforma no los cuenta.",
      ],
      lists: [
        {
          intro: "Clasificación útil de KPIs:",
          items: [
            "alcance y coste por contacto",
            "clics y calidad del tráfico",
            "conversiones y CPA/CPL",
            "ingresos y ROI/ROAS",
            "de apoyo: ER, bounce, profundidad",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "«AdWords» en textos viejos = Google Ads. Los nombres de informe en Direct y Google cambian — para el cliente, el significado de la columna gana a un screenshot de botón.",
        },
      ],
      links: [
        {
          label: "Click fraud",
          href: "/es/blog/sklikivanie/",
        },
      ],
    },
    {
      title: "8–9. Detalles y contexto de negocio",
      level: 2,
      paras: [
        "Pregunta al cliente el formato: slides, PDF, hoja. Exports completos y listas de keywords van en un anexo para que no ahoguen el resumen.",
        "Añade contexto adyacente: crecimiento de leads del sitio, estacionalidad, promos de competidores, caídas de analítica — todo lo que cambie cómo se leen los números, aunque «no venga de la cuenta de ads».",
      ],
      lists: [
        {
          intro: "Antes de enviar:",
          items: [
            "léelo con los ojos del cliente",
            "revisa periodo y moneda",
            "confirma que las conclusiones salen de los números",
            "hay próximos pasos, no solo «mira el Excel»",
          ],
        },
      ],
    },
  ],
};

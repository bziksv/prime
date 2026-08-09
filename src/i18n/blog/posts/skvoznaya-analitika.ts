import type { BlogPost } from "../../../data/blog";

/** EN overlay for skvoznaya-analitika — same structure as RU JSON. */
export const skvoznayaAnalitikaEn: BlogPost = {
  slug: "skvoznaya-analitika",
  title: "End-to-end analytics: rollout problems and how to dodge them",
  date: "2019-11-12",
  category: "Digital marketing",
  cover: "/images/blog/skvoznaya-analitika/cover-en.webp",
  excerpt:
    "Why end-to-end analytics matters, when it pays off, and which mistakes break ROMI: CRM without discipline, incomplete channels, borrowed attribution, and rushing setup.",
  lead: [
    "End-to-end analytics answers not “how many clicks,” but “which ad ruble returned profit.” That means ad accounts, the site, call tracking, and CRM meet in one loop — not five “eyeball” spreadsheets.",
    "Below: what you connect, when rollout is still early, and typical traps: messy CRM, missing channels, one-size-fits-all settings, and overweighting early touches. A dashboard without deals isn’t end-to-end analytics.",
  ],
  faq: [
    {
      q: "How is it different from web analytics (GA / counters)?",
      a: "Web analytics sees visits and on-site goals. End-to-end adds spend, calls/chats, and deal amounts from CRM — to ROMI and LTV, not only to a lead.",
    },
    {
      q: "Is Looker Studio enough?",
      a: "As a front-end view — yes. As the only “end-to-end” layer — no: without CRM join and correct UTM the report stays site analytics.",
    },
    {
      q: "When is rollout too early?",
      a: "With a tiny budget and a couple of campaigns, careful UTM, goals, and a manual weekly rollup are cheaper than an expensive loop “for show.” Payback threshold is individual.",
    },
    {
      q: "Why does nothing work without CRM?",
      a: "Revenue and deal status live in CRM. If managers don’t create leads and don’t write amounts, the system honestly shows garbage.",
    },
    {
      q: "Which attribution model is the “right” one?",
      a: "The one that matches your deal cycle and campaign goal. Brand awareness and a promo spike weight channels differently.",
    },
    {
      q: "How long does setup take?",
      a: "Not “connected in a day.” You need a brief, access, a metrics dictionary, join tests, and acceptance. Plan a calendar — or numbers will look pretty and be wrong.",
    },
  ],
  sections: [
    {
      title: "Why connect ads, site, and CRM",
      level: 2,
      paras: [
        "Business cares about promotion payback. Form conversion without deal amount doesn’t say whether a channel was worth money. Without an end-to-end picture teams often live by “it works — don’t touch” or, worse, cut channels on one KPI (few calls) while those channels brought margin.",
        "A working loop usually includes ad systems and web analytics, call tracking / inquiry accounting, and CRM / deal accounting. The goal is to see spend next to revenue and count ROMI by campaign — and at maturity by keyword/creative too.",
      ],
      lists: [
        {
          intro: "Minimum data:",
          items: [
            "spend and clicks from ad accounts",
            "UTM and goals on the site",
            "calls/chats tied to source",
            "leads, amounts, and statuses in CRM",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
      ],
    },
    {
      title: "When rollout still doesn’t pay off",
      level: 2,
      paras: [
        "An end-to-end loop costs money and time. If ad spend is small and campaigns are few, tag discipline, goals, and a weekly rollup often suffice. The “time to” threshold depends on niche: a practical cue is when data volume and cost of error already exceed the system’s cost.",
        "Without UTM even an expensive service won’t join an ad to revenue. Tags are hygiene before picking a vendor.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Order in sources and CRM first, then complex ETL. A pretty dashboard on crooked data speeds up bad decisions.",
        },
      ],
      links: [
        {
          label: "Looker Studio",
          href: "/en/blog/looker-studio/",
        },
      ],
    },
    {
      title: "Three ways to build the loop",
      level: 2,
      paras: [
        "By hand: exports from ad accounts, call tracking, and CRM into spreadsheets. Cheap at the start, expensive in people and error risk. Fine as a pilot, scales poorly.",
        "Through a warehouse (e.g. BigQuery) and BI: streams/exports → ROMI/LTV calcs → dashboard in Looker Studio or Power BI. Flexible at volume; needs skills and pipeline care.",
        "A ready call-tracking / marketing platform: faster start, less flexibility. Check CRM integrations and needed attribution models before the contract.",
      ],
      lists: [
        {
          intro: "Before choosing, ask:",
          items: [
            "which CRM and ad accounts you already have",
            "whether you need offline and long deals",
            "who will maintain the joins",
            "which reports are mandatory in a month",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Mistake: CRM filled “when someone remembers”",
      level: 2,
      paras: [
        "End-to-end analytics takes revenue from CRM. A missed lead, empty amount, deal without tasks — and a channel “slumps” or, conversely, looks like a hero. Telephony and call tracking help create inquiries automatically, but sales-desk rules still matter.",
        "On probation a short CRM exam helps: create a lead, log amount, move stages, attach correspondence. Otherwise marketing optimizes a myth.",
      ],
      lists: [
        {
          intro: "Minimum discipline:",
          items: [
            "a lead for every inquiry",
            "amount and stage kept current",
            "calls and tasks tied to the deal",
            "no “deals in someone’s head” outside the system",
          ],
        },
      ],
    },
    {
      title: "Mistake: missing channels and “borrowed” attribution",
      level: 2,
      paras: [
        "Clients write to email and chat, not only call. If email and messengers stay outside tracking, ad value is undercounted. Email tracking and chat accounting are part of the loop — not “later.”",
        "A default attribution model rarely matches your funnel. A startup may care more about first brand touch; a promo campaign — fresh interactions near the offer date. Models differ across GA and other systems — pick for the goal, not “like everyone else.”",
        "Old touches are often overvalued: a call a month ago is weaker than yesterday’s. It helps to account for value half-life and deal cycle — otherwise budget goes to the meet channel, not the close channel.",
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Mistake: too little time for setup",
      level: 2,
      paras: [
        "Buying a service ≠ getting ROMI tomorrow. You need access, a metrics dictionary, tests of “click → lead → payment” joins, spend reconciliation. A ready product speeds things up but doesn’t cancel acceptance.",
        "Budget a specialist and a calendar. Ask the vendor for an acceptance checklist: do deal amounts match, is there double counting, is source visible on a call from paid search.",
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "The first two to four weeks after launch are reconciliation mode, not “cut budget by the chart” mode. While data stabilizes, keep decisions conservative.",
        },
      ],
    },
  ],
  closing: [
    "End-to-end analytics pays off when you have ad volume, clean CRM, and time to join the pieces. Start with UTM and deal discipline, pick a loop for the job — and don’t confuse a pretty report with profit.",
  ],
  related: [
    "looker-studio",
    "roi-marketinga",
    "utm-metki",
    "assotsiirovannye-konversii",
    "instrumenty-veb-analitiki",
    "dashboard",
  ],
};

/** ES overlay for skvoznaya-analitika — same structure as RU JSON / EN. */
export const skvoznayaAnalitikaEs: BlogPost = {
  slug: "skvoznaya-analitika",
  title: "Analytics end-to-end: problemas de rollout y cómo esquivarlos",
  date: "2019-11-12",
  category: "Digital marketing",
  cover: "/images/blog/skvoznaya-analitika/cover.webp",
  excerpt:
    "Por qué importa la analytics end-to-end, cuándo renta y qué errores rompen el ROMI: CRM sin disciplina, canales incompletos, atribución prestada y setup a la carrera.",
  lead: [
    "La analytics end-to-end responde no a «cuántos clics», sino a «qué gasto en ads devolvió beneficio». Eso significa que cuentas de ads, el sitio, call tracking y CRM se encuentran en un solo bucle — no cinco hojas «a ojo».",
    "Abajo: qué conectas, cuándo el rollout aún es pronto y trampas típicas: CRM desordenado, canales que faltan, ajustes one-size-fits-all y sobrevalorar toques tempranos. Un dashboard sin tratos no es analytics end-to-end.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de la web analytics (GA / contadores)?",
      a: "La web analytics ve visitas y goals on-site. La end-to-end suma gasto, llamadas/chats e importes de tratos del CRM — hasta ROMI y LTV, no solo hasta un lead.",
    },
    {
      q: "¿Basta Looker Studio?",
      a: "Como vista front-end — sí. Como única capa «end-to-end» — no: sin join con CRM y UTM correctos el informe se queda en analytics del sitio.",
    },
    {
      q: "¿Cuándo el rollout es demasiado pronto?",
      a: "Con presupuesto mínimo y un par de campañas, UTM cuidadoso, goals y un rollup semanal a mano salen más baratos que un bucle caro «de escaparate». El umbral de payback es individual.",
    },
    {
      q: "¿Por qué no funciona nada sin CRM?",
      a: "El revenue y el estado del trato viven en el CRM. Si los managers no crean leads y no escriben importes, el sistema muestra basura con honestidad.",
    },
    {
      q: "¿Qué modelo de atribución es el «correcto»?",
      a: "El que encaja con tu ciclo de trato y el objetivo de campaña. Brand awareness y un pico de promo pesan los canales de forma distinta.",
    },
    {
      q: "¿Cuánto tarda el setup?",
      a: "No «conectado en un día». Hace falta brief, accesos, diccionario de métricas, tests de join y aceptación. Planifica un calendario — o los números se verán bonitos y estarán mal.",
    },
  ],
  sections: [
    {
      title: "Por qué conectar ads, sitio y CRM",
      level: 2,
      paras: [
        "Al negocio le importa el payback de la promoción. La conversión del formulario sin importe del trato no dice si un canal valió el dinero. Sin una foto end-to-end los equipos a menudo viven de «funciona — no toques» o, peor, cortan canales por un solo KPI (pocas llamadas) mientras esos canales traían margen.",
        "Un bucle que funciona suele incluir sistemas de ads y web analytics, call tracking / contabilidad de consultas, y CRM / contabilidad de tratos. El objetivo es ver el gasto junto al revenue y contar ROMI por campaña — y en madurez también por keyword/creative.",
      ],
      lists: [
        {
          intro: "Datos mínimos:",
          items: [
            "gasto y clics de las cuentas de ads",
            "UTM y goals en el sitio",
            "llamadas/chats ligados a la fuente",
            "leads, importes y estados en CRM",
          ],
        },
      ],
      links: [
        {
          label: "ROI y ROMI",
          href: "/es/blog/roi-marketinga/",
        },
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
      ],
    },
    {
      title: "Cuándo el rollout aún no renta",
      level: 2,
      paras: [
        "Un bucle end-to-end cuesta dinero y tiempo. Si el gasto en ads es pequeño y hay pocas campañas, a menudo bastan disciplina de tags, goals y un rollup semanal. El umbral de «ya toca» depende del nicho: una pista práctica es cuando el volumen de datos y el coste del error ya superan el coste del sistema.",
        "Sin UTM, ni siquiera un servicio caro une un anuncio al revenue. Los tags son higiene antes de elegir vendor.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Orden en fuentes y CRM primero, luego ETL complejo. Un dashboard bonito sobre datos torcidos acelera las malas decisiones.",
        },
      ],
      links: [
        {
          label: "Looker Studio",
          href: "/es/blog/looker-studio/",
        },
      ],
    },
    {
      title: "Tres formas de armar el bucle",
      level: 2,
      paras: [
        "A mano: exports de cuentas de ads, call tracking y CRM a hojas. Barato al inicio, caro en gente y riesgo de error. Vale como piloto, escala mal.",
        "Por un warehouse (p. ej. BigQuery) y BI: streams/exports → cálculos ROMI/LTV → dashboard en Looker Studio o Power BI. Flexible con volumen; hace falta skill y cuidado del pipeline.",
        "Una plataforma lista de call-tracking / marketing: arranque más rápido, menos flexibilidad. Revisa integraciones CRM y modelos de atribución necesarios antes del contrato.",
      ],
      lists: [
        {
          intro: "Antes de elegir, pregunta:",
          items: [
            "qué CRM y cuentas de ads ya tienes",
            "si necesitas offline y tratos largos",
            "quién mantendrá los joins",
            "qué informes son obligatorios en un mes",
          ],
        },
      ],
      links: [
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
      ],
    },
    {
      title: "Error: CRM rellenado «cuando alguien se acuerda»",
      level: 2,
      paras: [
        "La analytics end-to-end toma el revenue del CRM. Un lead perdido, un importe vacío, un trato sin tareas — y un canal «se hunde» o, al contrario, parece un héroe. Telefonía y call tracking ayudan a crear consultas automáticamente, pero las reglas del desk de ventas siguen importando.",
        "En prueba ayuda un examen corto de CRM: crear un lead, registrar importe, mover etapas, adjuntar correspondencia. Si no, el marketing optimiza un mito.",
      ],
      lists: [
        {
          intro: "Disciplina mínima:",
          items: [
            "un lead por cada consulta",
            "importe y etapa al día",
            "llamadas y tareas ligadas al trato",
            "sin «tratos en la cabeza de alguien» fuera del sistema",
          ],
        },
      ],
    },
    {
      title: "Error: canales que faltan y atribución «prestada»",
      level: 2,
      paras: [
        "Los clientes escriben a email y chat, no solo llaman. Si email y messengers quedan fuera del tracking, el valor de los ads se infraestima. El tracking de email y la contabilidad de chats son parte del bucle — no «luego».",
        "Un modelo de atribución por defecto rara vez encaja con tu funnel. A un startup le puede importar más el primer toque de marca; a una campaña de promo — interacciones frescas cerca de la fecha de la oferta. Los modelos difieren entre GA y otros sistemas — elige por el objetivo, no «como todo el mundo».",
        "Los toques viejos a menudo se sobrevaloran: una llamada de hace un mes pesa menos que la de ayer. Ayuda contar con la vida media del valor y el ciclo del trato — si no, el presupuesto va al canal del encuentro, no al del cierre.",
      ],
      links: [
        {
          label: "Conversiones asistidas",
          href: "/es/blog/assotsiirovannye-konversii/",
        },
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Error: demasiado poco tiempo para el setup",
      level: 2,
      paras: [
        "Comprar un servicio ≠ tener ROMI mañana. Hacen falta accesos, un diccionario de métricas, tests de joins «clic → lead → pago», conciliación de gasto. Un producto listo acelera pero no cancela la aceptación.",
        "Presupuesta un especialista y un calendario. Pide al vendor un checklist de aceptación: ¿cuadran los importes de trato?, ¿hay doble conteo?, ¿se ve la fuente en una llamada de paid search?",
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Las primeras dos a cuatro semanas tras el lanzamiento son modo conciliación, no modo «corta presupuesto por el gráfico». Mientras los datos se estabilizan, mantén decisiones conservadoras.",
        },
      ],
    },
  ],
  closing: [
    "La analytics end-to-end renta cuando hay volumen de ads, CRM limpio y tiempo para unir las piezas. Empieza por UTM y disciplina de tratos, elige un bucle para el job — y no confundas un informe bonito con beneficio.",
  ],
  related: [
    "looker-studio",
    "roi-marketinga",
    "utm-metki",
    "assotsiirovannye-konversii",
    "instrumenty-veb-analitiki",
    "dashboard",
  ],
};

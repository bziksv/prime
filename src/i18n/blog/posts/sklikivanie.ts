import type { BlogPost } from "../../../data/blog";

/** EN overlay for sklikivanie — same structure as RU JSON. */
export const sklikivanieEn: BlogPost = {
  slug: "sklikivanie",
  title: "Ad click fraud: signs, protection in Yandex Direct and Google Ads",
  date: "2021-09-17",
  category: "Paid search",
  cover: "/images/blog/sklikivanie/cover-en.webp",
  excerpt:
    "What click fraud is, how to tell it from a weak campaign, which defenses exist in Yandex Direct and Google Ads, and what to do if you suspect fraud.",
  lead: [
    "Click fraud is artificial clicks on ads that burn budget without target actions. It’s done by hand, scripts, or botnets; sometimes against a competitor, sometimes to inflate a publisher.",
    "Below: click-fraud signs, first steps, built-in Direct and Google Ads protections, and how to tell fraud apart from a weak offer. Loss figures from old roundups show scale — not your forecast.",
  ],
  faq: [
    {
      q: "Do I pay for invalid clicks?",
      a: "Platforms filter some clicks automatically and don’t charge for them. Disputed cases are reviewed on request; if confirmed, they adjust. There’s no 100% “before click” protection.",
    },
    {
      q: "Is low conversion always click fraud?",
      a: "No. More often the offer, landing, season, broad keywords, or irrelevant traffic are to blame. Look at 1–3 weeks of data and the funnel — not one day.",
    },
    {
      q: "What’s the first move when I see a click spike?",
      a: "Pause or hard-limit the campaign, check geo/devices/placements against settings, save report screenshots, and contact support when anomalies are clear.",
    },
    {
      q: "Does an IP blacklist help against click fraud?",
      a: "As a supplement — yes, against repeats from known addresses. Against a distributed botnet IP blocks are limited. Platform filters, placement exclusions, and campaign quality matter more.",
    },
    {
      q: "Does session replay prove click fraud?",
      a: "It shows on-site behavior after the click. A short visit also happens with a live accidental click. For fraud look at the combo: account anomaly + odd geo/IP + bounce pattern.",
    },
  ],
  sections: [
    {
      title: "What click fraud is",
      level: 2,
      paras: [
        "The advertiser pays per click. A fraudster or bot hits the ad repeatedly to burn budget and leave no leads. After the click the page is often closed at once.",
        "Motives: weaken a competitor, inflate publisher/partner revenue, “pay back” a former client. Automated attacks scale harder than manual ones.",
      ],
      lists: [
        {
          intro: "Types:",
          items: [
            "manual click fraud (slow, IP changes)",
            "scripts and emulators",
            "botnets on infected devices — the most mass scenario",
          ],
        },
      ],
    },
    {
      title: "Click-fraud signs",
      level: 2,
      paras: [
        "One metric isn’t enough. Look for a cluster of anomalies with no seasonality, news, or campaign-edit explanation.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a sharp jump in clicks and CTR with no ad changes",
            "many clicks with near-zero time on site / instant bounces",
            "geo and devices outside targeting",
            "repeats from the same IPs/networks",
            "a spike on specific display-network placements",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Cross-check the ads account with Analytics via UTM. A gap “clicks exist — almost no sessions” is a reason to dig deeper, but first verify tagging and reporting lag.",
        },
      ],
      links: [
        {
          label: "Suspicious Google traffic",
          href: "/en/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "First measures",
      level: 2,
      paras: [
        "Stop the budget bleed, then investigate. In parallel gather evidence for support.",
      ],
      lists: [
        {
          intro: "Reaction checklist:",
          items: [
            "pause or a hard daily cap",
            "reports by placement, region, device, hour",
            "exclude suspicious placements / IPs (within account limits)",
            "contact Direct / Google Ads support with facts",
            "after the review — restart with tighter keywords and bids",
          ],
        },
      ],
    },
    {
      title: "Protection in Yandex Direct and Google Ads",
      level: 2,
      paras: [
        "Both systems run automatic invalid-click filters: repeats, bot-like patterns, anomalies. Some clicks are cut before charging; some are adjusted later — check invalid-click reports.",
        "Google Ads (formerly AdWords) combines prevention and complaint review. Direct also shows filtered stats and placement-limit tools. Exact blacklist limits and report names change — follow the account help.",
      ],
      lists: [
        {
          intro: "What the platform does:",
          items: [
            "cuts some fraud automatically",
            "doesn’t treat such clicks like “live” ones for keyword quality",
            "may adjust charges on a confirmed complaint",
            "punishes network-side violators (you don’t always see it)",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Waiting for support to “refund everything after three days of bounces.” First prove the anomaly; in parallel fix relevance — or honest but junk traffic keeps eating the budget.",
        },
      ],
    },
    {
      title: "When it isn’t fraud",
      level: 2,
      paras: [
        "Many clicks without orders happen with broad match, a weak ad, a slow or irrelevant landing, or a season of “interest without purchase.”",
        "A store conversion of 1–2% in the niche can be normal. Judge by the funnel over weeks, not one evening of “fast spend” after raising bids.",
      ],
      lists: [
        {
          intro: "Natural reasons for “empty after click”:",
          items: [
            "offer and price didn’t match ad expectations",
            "the site is slow or awkward on mobile",
            "season / news warmed interest without readiness to buy",
            "wrong geo or missing negative keywords",
          ],
        },
      ],
    },
    {
      title: "How to lower the risk again",
      level: 2,
      paras: [
        "Daily watch spend, CTR, bounces, and the busiest placements. Keep semantics tight, landings honest, UTM and goals working. After an incident update the core and bid strategies — don’t just “turn it back on as before.”",
      ],
      lists: [
        {
          intro: "Prevention:",
          items: [
            "anomaly monitoring by hour and placement",
            "regular exclusion of junk display placements",
            "ad → page consistency",
            "budget caps and alerts in the account/analytics",
          ],
        },
      ],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "Click fraud is real, but not every ROAS drop is an attack. Watch the signal combo, use Direct and Google Ads filters, cut budget fast on anomalies, and check campaign quality in parallel. Support tickets — with facts, not emotions.",
      ],
    },
  ],
};

/** ES overlay for sklikivanie — same structure as RU JSON / EN. */
export const sklikivanieEs: BlogPost = {
  slug: "sklikivanie",
  title: "Fraude de clics en ads: señales, protección en Yandex Direct y Google Ads",
  date: "2021-09-17",
  category: "Paid search",
  cover: "/images/blog/sklikivanie/cover-es.webp",
  excerpt:
    "Qué es el fraude de clics, cómo distinguirlo de una campaña floja, qué defensas hay en Yandex Direct y Google Ads, y qué hacer si sospechas fraude.",
  lead: [
    "El fraude de clics son clics artificiales en anuncios que queman presupuesto sin acciones objetivo. Se hace a mano, con scripts o botnets; a veces contra un competidor, a veces para inflar a un publisher.",
    "Abajo: señales de fraude de clics, primeros pasos, protecciones integradas de Direct y Google Ads, y cómo separar el fraude de una oferta floja. Las cifras de pérdidas de recopilatorios viejos muestran escala — no tu previsión.",
  ],
  faq: [
    {
      q: "¿Pago por clics inválidos?",
      a: "Las plataformas filtran parte de los clics automáticamente y no los cobran. Los casos en disputa se revisan bajo petición; si se confirman, ajustan. No hay protección al 100% «antes del clic».",
    },
    {
      q: "¿Una conversión baja es siempre fraude de clics?",
      a: "No. Más a menudo fallan la oferta, el landing, la temporada, keywords amplias o tráfico irrelevante. Mira 1–3 semanas de datos y el funnel — no un solo día.",
    },
    {
      q: "¿Cuál es el primer movimiento ante un pico de clics?",
      a: "Pausa o limita a tope la campaña, cruza geo/dispositivos/placements con los ajustes, guarda capturas de informes y contacta soporte cuando las anomalías estén claras.",
    },
    {
      q: "¿Ayuda una blacklist de IP contra el fraude de clics?",
      a: "Como complemento — sí, contra repeticiones desde direcciones conocidas. Contra un botnet distribuido los bloques de IP son limitados. Pesan más los filtros de la plataforma, exclusiones de placements y la calidad de la campaña.",
    },
    {
      q: "¿El session replay demuestra fraude de clics?",
      a: "Muestra el comportamiento en el sitio tras el clic. Una visita corta también pasa con un clic accidental real. Para fraude mira el combo: anomalía en la cuenta + geo/IP raro + patrón de bounce.",
    },
  ],
  sections: [
    {
      title: "Qué es el fraude de clics",
      level: 2,
      paras: [
        "El anunciante paga por clic. Un fraudster o un bot pega al anuncio una y otra vez para quemar presupuesto y no dejar leads. Tras el clic la página a menudo se cierra al momento.",
        "Motivos: debilitar a un competidor, inflar ingresos de publisher/partner, «devolver» a un cliente antiguo. Los ataques automatizados escalan más duro que los manuales.",
      ],
      lists: [
        {
          intro: "Tipos:",
          items: [
            "fraude de clics manual (lento, cambios de IP)",
            "scripts y emuladores",
            "botnets en dispositivos infectados — el escenario más masivo",
          ],
        },
      ],
    },
    {
      title: "Señales de fraude de clics",
      level: 2,
      paras: [
        "Una sola métrica no basta. Busca un cluster de anomalías sin explicación de estacionalidad, noticias o ediciones de campaña.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "un salto brusco de clics y CTR sin cambios en el anuncio",
            "muchos clics con tiempo casi cero en el sitio / bounces al instante",
            "geo y dispositivos fuera del targeting",
            "repeticiones desde las mismas IPs/redes",
            "un pico en placements concretos de la red de display",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Cruza la cuenta de ads con Analytics vía UTM. Un hueco «hay clics — casi no hay sesiones» es motivo para cavar, pero primero verifica el tagging y el lag de reporting.",
        },
      ],
      links: [
        {
          label: "Tráfico sospechoso de Google",
          href: "/es/blog/podozritelnyy-trafik-google/",
        },
      ],
    },
    {
      title: "Primeras medidas",
      level: 2,
      paras: [
        "Para la hemorragia de presupuesto, luego investiga. En paralelo reúne pruebas para soporte.",
      ],
      lists: [
        {
          intro: "Checklist de reacción:",
          items: [
            "pausa o un tope diario duro",
            "informes por placement, región, dispositivo, hora",
            "excluir placements / IPs sospechosos (dentro de los límites de la cuenta)",
            "contactar soporte de Direct / Google Ads con hechos",
            "tras la revisión — reiniciar con keywords y pujas más ajustadas",
          ],
        },
      ],
    },
    {
      title: "Protección en Yandex Direct y Google Ads",
      level: 2,
      paras: [
        "Ambos sistemas llevan filtros automáticos de clics inválidos: repeticiones, patrones bot-like, anomalías. Parte de los clics se corta antes de cobrar; parte se ajusta después — mira los informes de clics inválidos.",
        "Google Ads (antes AdWords) combina prevención y revisión de quejas. Direct también muestra stats filtradas y herramientas de límite de placements. Los límites exactos de blacklist y los nombres de informes cambian — sigue la ayuda de la cuenta.",
      ],
      lists: [
        {
          intro: "Qué hace la plataforma:",
          items: [
            "corta parte del fraude automáticamente",
            "no trata esos clics como «vivos» para la calidad de keywords",
            "puede ajustar cargos ante una queja confirmada",
            "castiga a violadores del lado de la red (tú no siempre lo ves)",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Esperar a que soporte «devuelva todo tras tres días de bounces». Primero prueba la anomalía; en paralelo arregla la relevancia — o el tráfico honesto pero basura sigue comiendo el presupuesto.",
        },
      ],
    },
    {
      title: "Cuando no es fraude",
      level: 2,
      paras: [
        "Muchos clics sin pedidos pasan con broad match, un anuncio flojo, un landing lento o irrelevante, o una temporada de «interés sin compra».",
        "Una conversión de tienda del 1–2% en el nicho puede ser normal. Juzga por el funnel en semanas, no por una tarde de «gasto rápido» tras subir pujas.",
      ],
      lists: [
        {
          intro: "Motivos naturales de «vacío tras el clic»:",
          items: [
            "oferta y precio no cuadraron con lo que prometía el anuncio",
            "el sitio es lento o torpe en móvil",
            "temporada / noticias calentaron interés sin disposición a comprar",
            "geo incorrecto o negative keywords ausentes",
          ],
        },
      ],
    },
    {
      title: "Cómo bajar el riesgo otra vez",
      level: 2,
      paras: [
        "Mira a diario spend, CTR, bounces y los placements más cargados. Mantén la semántica ajustada, landings honestos, UTM y goals funcionando. Tras un incidente actualiza el núcleo y las estrategias de puja — no solo «vuelve a encenderlo como antes».",
      ],
      lists: [
        {
          intro: "Prevención:",
          items: [
            "monitor de anomalías por hora y placement",
            "exclusión regular de placements basura de display",
            "consistencia anuncio → página",
            "topes de presupuesto y alertas en la cuenta/analytics",
          ],
        },
      ],
    },
    {
      title: "En resumen",
      level: 2,
      paras: [
        "El fraude de clics es real, pero no toda caída de ROAS es un ataque. Mira el combo de señales, usa los filtros de Direct y Google Ads, corta presupuesto rápido ante anomalías y revisa en paralelo la calidad de la campaña. Tickets a soporte — con hechos, no con emociones.",
      ],
    },
  ],
};

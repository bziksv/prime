import type { BlogPost } from "../../../data/blog";

/** EN overlay for istoriya-domena — same structure as RU JSON. */
export const istoriyaDomenaEn: BlogPost = {
  slug: "istoriya-domena",
  title: "Checking domain history before you buy",
  date: "2019-05-27",
  category: "SEO",
  cover: "/images/blog/istoriya-domena/cover-en.webp",
  excerpt:
    "How to vet a drop or used domain before purchase: Wayback Machine, past topics, backlink profile, filters, and search visibility — without the myth that an old domain means a fast climb in results.",
  lead: [
    "When you buy someone else’s domain or a drop, you inherit more than a nice name: past topics, links, possible sanctions, and a reputation tail.",
    "Below is what to check before you pay. The web archive (Wayback) is covered separately; this piece is a buying checklist. Age alone does not put you on page one — rankings and traffic come from work on the site, typically planned over months, not “bought a drop, instant top ten.”",
  ],
  faq: [
    {
      q: "Is a new domain always safer?",
      a: "Often simpler: no someone else’s baggage. A solid, checked drop can still help. Decide by verification — not fear or greed.",
    },
    {
      q: "Does Wayback show everything?",
      a: "No. There are gaps, removals on complaints, sites with no snapshots. No archive ≠ a clean domain.",
    },
    {
      q: "What if the past topic was different?",
      a: "Higher risk: search may take longer to relearn what the domain means. For a strong topic shift, a new name is often calmer.",
    },
    {
      q: "Are lots of “buy cheap” anchors bad?",
      a: "That looks like a spammy profile. Take such names only if you accept the risk and a long cleanup — more often, walk away.",
    },
    {
      q: "Does site: in results mean all is fine?",
      a: "Only that something is still indexed or once was. It does not cancel filters, toxic links, or a topic change.",
    },
  ],
  sections: [
    {
      title: "Why check before buying",
      level: 2,
      paras: [
        "Age and a catchy string do not cancel a ban, spammy links, or past adult or pharma content. Problems tend to surface after you have already invested in the site and content.",
        "What to verify: content history, backlink profile, sanction or deindex signals, visibility, and brand reputation in search.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "sharp topic flips in the archive",
            "spammy or doorway snapshots",
            "toxic donors and anchors",
            "long visibility drops without explanation",
            "legal or brand conflicts in the name",
          ],
        },
      ],
    },
    {
      title: "History in the Wayback Machine",
      level: 2,
      paras: [
        "Open web.archive.org, enter the domain, and review the snapshot calendar: when the site appeared, what it was, how it changed. Judge how close the past topic is to yours.",
        "Do not stop at one frame — look across years. Empty stretches, placeholders, and sudden storefronts are reasons to dig deeper or walk away.",
      ],
      lists: [
        {
          intro: "What to note:",
          items: [
            "date of first snapshots",
            "main topic by year",
            "whether there were storefronts or doorways",
            "language and geo",
            "whether the brand matches your plan",
          ],
        },
      ],
      links: [
        {
          label: "Web archive",
          href: "/en/blog/veb-arhiv/",
        },
      ],
    },
    {
      title: "Backlink profile",
      level: 2,
      paras: [
        "Link count alone says nothing. Look at donor quality, spam share, growth dynamics, and anchors. Sudden links-from-nowhere spikes are a typical risk.",
        "Paid SEO tools (Ahrefs and peers) help review backlinks; free signals are enough for a rough filter. No single tool is “the truth forever” — cross-check sources.",
      ],
      lists: [
        {
          intro: "What to watch:",
          items: [
            "share of brand or naked vs commercial anchors",
            "donors with dubious topics",
            "broken and mass networks",
            "history of link-mass spikes",
            "donor language match with your niche",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Buying a domain for someone else’s links without content and strategy often disappoints. Links are one factor — not a ticket to page one.",
        },
      ],
    },
    {
      title: "Visibility and index",
      level: 2,
      paras: [
        "Check `site:domain` in Yandex and Google, a branded query on the name, mirrors, and odd subdomains. An empty SERP with a lively archive past is suspicious.",
        "Historical visibility in Serpstat/Similarweb-class tools (names and data windows change) helps spot traffic drops. Interpret carefully: ownership change, seasonality, a filter, or just a dead project.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "`site:` in both search engines",
            "branded query",
            "cache or saved copies when available",
            "domain mentions in news or reviews",
            "WHOIS / registrar history where available",
          ],
        },
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Drops and SEO expectations",
      level: 2,
      paras: [
        "A fresh drop sometimes keeps part of the signals — sometimes not. Idle time and myths like “60 days without an owner = rankings as before” are not law: algorithms and index cleanup have changed.",
        "Even a clean aged domain does not cancel site prep and planned ranking work over months. Cutting promotion spend because the domain is old is a risky bet.",
      ],
      lists: [
        {
          intro: "When a drop makes sense:",
          items: [
            "past topic is close",
            "links and mentions look sane",
            "no clear sanctions or spam",
            "the name strengthens the brand, does not confuse",
            "budget covers content and tech — not only the domain",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A vetted aged domain can help. It still is not a shortcut: after prep, growing a query core in the results is typically planned over 2–6 months of work.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Before buying, go archive → links → visibility. When in doubt, pick a new name — cheaper than a year undoing someone else’s spam.",
        "A good domain reputation helps, but it does not replace work on the site.",
      ],
    },
  ],
  closing: [
    "Check Wayback, backlinks, and the index before you pay — fewer chances to buy a ban and spam with a pretty name. An old domain is an option after verification, not a magic ranking button.",
  ],
  related: [
    "veb-arhiv",
    "domen-rf",
    "domen-pervogo-urovnya",
    "filtry-poiskovikov",
    "molodoy-sayt",
    "affiliat-filtr",
  ],
};

/** ES overlay for istoriya-domena — same structure as RU JSON / EN. */
export const istoriyaDomenaEs: BlogPost = {
  slug: "istoriya-domena",
  title: "Cómo revisar el historial de un dominio antes de comprarlo",
  date: "2019-05-27",
  category: "SEO",
  cover: "/images/blog/istoriya-domena/cover.webp",
  excerpt:
    "Cómo vetar un drop o dominio usado antes de comprar: Wayback Machine, temas pasados, perfil de backlinks, filtros y visibilidad en búsqueda — sin el mito de que un dominio viejo = subida rápida en resultados.",
  lead: [
    "Cuando compras el dominio de otro o un drop, heredas más que un nombre bonito: temas pasados, enlaces, posibles sanciones y una cola de reputación.",
    "Abajo: qué revisar antes de pagar. El archivo web (Wayback) se cubre aparte; aquí es un checklist de compra. La edad sola no te pone en primera página — rankings y tráfico vienen del trabajo en el sitio, normalmente planificado en meses, no «compré un drop y ya estoy arriba».",
  ],
  faq: [
    {
      q: "¿Un dominio nuevo es siempre más seguro?",
      a: "A menudo más simple: sin el equipaje de otro. Un drop sólido y revisado aún puede ayudar. Decide por verificación — no por miedo ni avaricia.",
    },
    {
      q: "¿Wayback muestra todo?",
      a: "No. Hay huecos, borrados por denuncias, sitios sin snapshots. Sin archivo ≠ dominio limpio.",
    },
    {
      q: "¿Y si el tema pasado era otro?",
      a: "Más riesgo: la búsqueda puede tardar más en reaprender qué significa el dominio. Con un cambio fuerte de tema, un nombre nuevo suele ser más tranquilo.",
    },
    {
      q: "¿Muchos anclas tipo «compra barato» son malos?",
      a: "Parece un perfil spammy. Toma esos nombres solo si aceptas el riesgo y una limpieza larga — más a menudo, pasa de largo.",
    },
    {
      q: "¿Un `site:` en resultados significa que todo va bien?",
      a: "Solo que algo sigue indexado o lo estuvo. No cancela filtros, enlaces tóxicos ni un cambio de tema.",
    },
  ],
  sections: [
    {
      title: "Por qué revisar antes de comprar",
      level: 2,
      paras: [
        "La edad y un string pegadizo no cancelan un ban, enlaces spam ni contenido adult/pharma pasado. Los problemas suelen salir cuando ya invertiste en sitio y contenido.",
        "Qué verificar: historial de contenido, perfil de backlinks, señales de sanción o desindexación, visibilidad y reputación de marca en búsqueda.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "giros bruscos de tema en el archivo",
            "snapshots spammy o doorway",
            "donantes y anclas tóxicos",
            "caídas largas de visibilidad sin explicación",
            "conflictos legales o de marca en el nombre",
          ],
        },
      ],
    },
    {
      title: "Historial en Wayback Machine",
      level: 2,
      paras: [
        "Abre web.archive.org, mete el dominio y revisa el calendario de snapshots: cuándo apareció el sitio, qué era, cómo cambió. Juzga qué tan cerca está el tema pasado del tuyo.",
        "No te quedes en un fotograma — mira a lo largo de años. Tramos vacíos, placeholders y escaparates repentinos son motivo para indagar o marcharte.",
      ],
      lists: [
        {
          intro: "Qué anotar:",
          items: [
            "fecha de los primeros snapshots",
            "tema principal por año",
            "si hubo escaparates o doorways",
            "idioma y geo",
            "si la marca encaja con tu plan",
          ],
        },
      ],
      links: [
        {
          label: "Archivo web",
          href: "/blog/veb-arhiv/",
        },
      ],
    },
    {
      title: "Perfil de backlinks",
      level: 2,
      paras: [
        "La cantidad de enlaces sola no dice nada. Mira calidad de donantes, cuota de spam, dinámica de crecimiento y anclas. Picos repentinos de enlaces-de-la-nada son un riesgo típico.",
        "Herramientas SEO de pago (Ahrefs y similares) ayudan a revisar backlinks; señales gratuitas bastan para un filtro grosero. Ninguna herramienta es «la verdad para siempre» — cruza fuentes.",
      ],
      lists: [
        {
          intro: "Qué vigilar:",
          items: [
            "cuota de anclas de marca o naked vs comerciales",
            "donantes con temas dudosos",
            "redes rotas y masivas",
            "historial de picos de masa de enlaces",
            "match de idioma del donante con tu nicho",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Comprar un dominio por los enlaces de otro sin contenido ni estrategia suele decepcionar. Los enlaces son un factor — no un billete a la primera página.",
        },
      ],
    },
    {
      title: "Visibilidad e índice",
      level: 2,
      paras: [
        "Revisa `site:dominio` en Yandex y Google, una query de marca sobre el nombre, espejos y subdominios raros. Un SERP vacío con un pasado vivo en el archivo es sospechoso.",
        "La visibilidad histórica en herramientas tipo Serpstat/Similarweb (nombres y ventanas de datos cambian) ayuda a ver caídas de tráfico. Interpreta con cuidado: cambio de dueño, estacionalidad, un filtro o simplemente un proyecto muerto.",
      ],
      lists: [
        {
          intro: "Checks rápidos:",
          items: [
            "`site:` en ambos buscadores",
            "query de marca",
            "caché o copias guardadas cuando haya",
            "menciones del dominio en noticias o reviews",
            "WHOIS / historial del registrador donde exista",
          ],
        },
      ],
      links: [
        {
          label: "Filtros de buscadores",
          href: "/es/blog/filtry-poiskovikov/",
        },
        {
          label: "Sitio joven",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Drops y expectativas SEO",
      level: 2,
      paras: [
        "Un drop fresco a veces conserva parte de las señales — a veces no. El tiempo en idle y mitos tipo «60 días sin dueño = rankings como antes» no son ley: algoritmos y limpieza del índice han cambiado.",
        "Aunque un dominio aged limpio no cancela la prep del sitio ni el trabajo de ranking planificado en meses. Recortar el presupuesto de promoción porque el dominio es viejo es una apuesta arriesgada.",
      ],
      lists: [
        {
          intro: "Cuándo un drop tiene sentido:",
          items: [
            "el tema pasado está cerca",
            "enlaces y menciones se ven sanos",
            "sin sanciones ni spam claros",
            "el nombre refuerza la marca, no confunde",
            "el presupuesto cubre contenido y técnica — no solo el dominio",
          ],
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Un dominio aged y vetado puede ayudar. Sigue sin ser un atajo: tras la prep, crecer un núcleo de queries en resultados suele planificarse en 2–6 meses de trabajo.",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Antes de comprar: archivo → enlaces → visibilidad. Si dudas, elige un nombre nuevo — más barato que un año deshaciendo el spam de otro.",
        "Una buena reputación de dominio ayuda, pero no sustituye el trabajo en el sitio.",
      ],
    },
  ],
  closing: [
    "Revisa Wayback, backlinks e índice antes de pagar — menos chances de comprar un ban y spam con un nombre bonito. Un dominio viejo es una opción tras verificación, no un botón mágico de ranking.",
  ],
  related: [
    "veb-arhiv",
    "domen-rf",
    "domen-pervogo-urovnya",
    "filtry-poiskovikov",
    "molodoy-sayt",
    "affiliat-filtr",
  ],
};

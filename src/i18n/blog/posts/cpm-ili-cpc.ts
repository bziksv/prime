import type { BlogPost } from "../../../data/blog";

/** EN overlay for cpm-ili-cpc — same structure as RU JSON. */
export const cpmIliCpcEn: BlogPost = {
  slug: "cpm-ili-cpc",
  title: "CPM or CPC: when to pay for impressions vs. clicks",
  date: "2021-06-29",
  category: "Digital marketing",
  cover: "/images/blog/cpm-ili-cpc/cover-en.webp",
  excerpt:
    "How cost-per-impression (CPM) differs from cost-per-click (CPC), which model fits which goal, how targeting shapes campaign economics, and why “which is better” always depends on the outcome you want.",
  lead: [
    "Digital ads usually boil down to two payment models: impressions (CPM, typically priced per 1,000) and clicks (CPC). CPM is built for reach and awareness; CPC is built for site traffic and a clearer cost per visit.",
    "Below: who each model serves, where targeting and the landing page matter, and why you can’t crown a forever winner without a goal and real numbers. Old “clicks for pennies” rate cards are not a playbook — run your own tests.",
  ],
  faq: [
    {
      q: "What is CPC?",
      a: "Cost Per Click — you pay when someone clicks the ad. An impression with no click usually doesn’t spend CPC budget (aside from a few platform-specific quirks).",
    },
    {
      q: "What is CPM?",
      a: "Cost Per Mille — you pay per 1,000 impressions. A click isn’t required: you’re paying for the ad to be shown.",
    },
    {
      q: "What’s more effective — impressions or clicks?",
      a: "It depends on the goal. Brand awareness and image work lean toward CPM (and related reach formats). Leads and sales from the site lean toward CPC/CPA plus a solid landing page.",
    },
    {
      q: "Can I combine them?",
      a: "Yes: run reach higher in the funnel and click- or goal-based campaigns lower down. Linking them with remarketing is a common setup.",
    },
    {
      q: "Is CPC always cheaper for sales?",
      a: "Not always. An expensive click that converts beats a cheap click that never becomes a lead. Track CPA and lead quality.",
    },
    {
      q: "Where does CPM make sense?",
      a: "Anywhere audience and frequency matter: niche sites, display, social for a reach job — with creative that’s actually worth showing.",
    },
    {
      q: "How does this tie to UTM tags?",
      a: "On click campaigns, tags help split sources in analytics. On reach, watch brand searches, direct visits, and post-campaign slices.",
    },
    {
      q: "What about CPA?",
      a: "You pay per action (lead, purchase). It’s closer to the business outcome, but you need clean goals and enough data. Often it’s the next step after CPC.",
    },
  ],
  sections: [
    {
      title: "Clicks and impressions in plain English",
      level: 2,
      paras: [
        "An impression means the ad showed up in front of someone. A click means they followed it. CPC pays for the visit; CPM pays for a block of impressions even when clicks are scarce.",
        "Both models are legitimate. The mistake is buying reach while expecting instant leads — or chasing cheap clicks with a weak offer and landing page.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "CPM — they saw me",
            "CPC — they came to the site",
            "CPA — they took the action you wanted",
          ],
        },
      ],
    },
    {
      title: "When CPM fits",
      level: 2,
      paras: [
        "Use it when the job is to put the brand and offer in front of the right people: a launch, brand lift, a reminder, or a warm-up before a promo. Creative and frequency matter as much as the bid.",
        "Placements: large niche media, relevant sites, communities where your audience actually hangs out. After a reach flight, remarketing to people who already saw the ad is a natural next step.",
      ],
      lists: [
        {
          intro: "CPM works well when:",
          items: [
            "you need awareness, not only clicks",
            "you have a strong visual or message",
            "you’re willing to measure impact beyond yesterday’s leads",
            "the audience is narrow and well defined",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "When CPC fits",
      level: 2,
      paras: [
        "Use it when you need site traffic and want to pay closer to interest: they clicked, you paid. It’s easier to control visit spend and tie cost to conversions in analytics.",
        "Without targeting and a decent landing page, CPC is just paying for curiosity. Competition drives click prices up — that’s the market, not a broken model.",
      ],
      lists: [
        {
          intro: "CPC makes sense when:",
          items: [
            "you have a site or landing page for the offer",
            "you need leads, sales, or sign-ups",
            "UTMs and full-funnel analytics matter",
            "you’re ready to rotate ads and refine negatives or audiences",
          ],
        },
        {
          intro: "Limits of the click model:",
          items: [
            "CPC climbs in competitive niches",
            "weak offers produce clicks with no purchases",
            "low-quality traffic risk — watch conversions, not CTR alone",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Click fraud",
          href: "/en/blog/sklikivanie/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "How to choose",
      level: 2,
      paras: [
        "Start with the goal: get on people’s radar, or bring buyers in now. Reach points toward CPM (and reach strategies). Site sales point toward CPC/CPA.",
        "Then check the economics: acceptable cost per lead, margin, sales-cycle length. Test both models on a small budget and compare leads and revenue — not a pretty CTR.",
      ],
      notes: [
        {
          title: "Takeaway",
          kind: "tip",
          text: "There’s no universal answer to “impressions or clicks?” without a goal. Impressions build awareness; clicks bring potential customers. They often work as a pair, not rivals.",
        },
      ],
      links: [
        {
          label: "Selling traffic (publisher side)",
          href: "/en/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  related: [
    "utm-metki",
    "retargeting",
    "strategii-yandeks-direkt",
    "sklikivanie",
    "prodazha-trafika",
    "spetsrazmeshchenie-direkt",
  ],
};

/** ES overlay for cpm-ili-cpc — same structure as RU JSON / EN. */
export const cpmIliCpcEs: BlogPost = {
  slug: "cpm-ili-cpc",
  title: "CPM o CPC: cuándo pagar por impresiones vs. clics",
  date: "2021-06-29",
  category: "Digital marketing",
  cover: "/images/blog/cpm-ili-cpc/cover-es.webp",
  excerpt:
    "En qué se diferencia el coste por impresión (CPM) del coste por clic (CPC), qué modelo encaja con cada objetivo, cómo el targeting moldea la economía de la campaña y por qué «cuál es mejor» siempre depende del resultado que buscas.",
  lead: [
    "Los ads digitales suelen reducirse a dos modelos de pago: impresiones (CPM, normalmente por 1.000) y clics (CPC). El CPM está pensado para alcance y awareness; el CPC, para tráfico al sitio y un coste por visita más claro.",
    "Abajo: a quién sirve cada modelo, dónde importan el targeting y la landing, y por qué no puedes coronar un ganador eterno sin un objetivo y números reales. Las tarifas viejas de «clics a céntimos» no son un playbook — corre tus propios tests.",
  ],
  faq: [
    {
      q: "¿Qué es CPC?",
      a: "Cost Per Click — pagas cuando alguien hace clic en el anuncio. Una impresión sin clic normalmente no gasta presupuesto CPC (salvo algunos matices de plataforma).",
    },
    {
      q: "¿Qué es CPM?",
      a: "Cost Per Mille — pagas por 1.000 impresiones. No hace falta un clic: pagas porque el anuncio se muestre.",
    },
    {
      q: "¿Qué es más efectivo — impresiones o clics?",
      a: "Depende del objetivo. Awareness de marca e imagen se inclinan al CPM (y formatos de alcance afines). Leads y ventas desde el sitio se inclinan a CPC/CPA más una landing sólida.",
    },
    {
      q: "¿Puedo combinarlos?",
      a: "Sí: corre alcance más arriba en el funnel y campañas de clic o por goal más abajo. Enlazarlos con remarketing es un setup habitual.",
    },
    {
      q: "¿El CPC siempre es más barato para ventas?",
      a: "No siempre. Un clic caro que convierte gana a un clic barato que nunca se vuelve lead. Trackea CPA y calidad del lead.",
    },
    {
      q: "¿Dónde tiene sentido el CPM?",
      a: "Donde importan audiencia y frecuencia: sitios de nicho, display, social para un trabajo de alcance — con un creativo que merezca mostrarse.",
    },
    {
      q: "¿Cómo se liga esto a las etiquetas UTM?",
      a: "En campañas de clic, las etiquetas ayudan a partir fuentes en analytics. En alcance, mira búsquedas de marca, visitas directas y cortes post-campaña.",
    },
    {
      q: "¿Y el CPA?",
      a: "Pagas por acción (lead, compra). Está más cerca del resultado de negocio, pero necesitas goals limpios y datos suficientes. A menudo es el siguiente paso tras el CPC.",
    },
  ],
  sections: [
    {
      title: "Clics e impresiones en claro",
      level: 2,
      paras: [
        "Una impresión significa que el anuncio se mostró delante de alguien. Un clic, que lo siguieron. El CPC paga la visita; el CPM paga un bloque de impresiones aunque los clics escaseen.",
        "Ambos modelos son legítimos. El error es comprar alcance esperando leads al instante — o perseguir clics baratos con una oferta y landing flojas.",
      ],
      lists: [
        {
          intro: "En corto:",
          items: [
            "CPM — me vieron",
            "CPC — llegaron al sitio",
            "CPA — hicieron la acción que querías",
          ],
        },
      ],
    },
    {
      title: "Cuándo encaja el CPM",
      level: 2,
      paras: [
        "Úsalo cuando el trabajo es poner la marca y la oferta delante de la gente adecuada: un lanzamiento, brand lift, un recordatorio o un calentamiento antes de una promo. Creativo y frecuencia importan tanto como la puja.",
        "Emplazamientos: medios de nicho grandes, sitios relevantes, comunidades donde tu audiencia de verdad pasa el rato. Tras un vuelo de alcance, el remarketing a quien ya vio el anuncio es el siguiente paso natural.",
      ],
      lists: [
        {
          intro: "El CPM funciona bien cuando:",
          items: [
            "necesitas awareness, no solo clics",
            "tienes un visual o mensaje fuerte",
            "aceptas medir el impacto más allá de los leads de ayer",
            "la audiencia es estrecha y bien definida",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/es/blog/retargeting/",
        },
      ],
    },
    {
      title: "Cuándo encaja el CPC",
      level: 2,
      paras: [
        "Úsalo cuando necesitas tráfico al sitio y quieres pagar más cerca del interés: hicieron clic, pagaste. Es más fácil controlar el gasto por visita y atar el coste a conversiones en analytics.",
        "Sin targeting y una landing decente, el CPC es solo pagar curiosidad. La competencia sube el precio del clic — eso es el mercado, no un modelo roto.",
      ],
      lists: [
        {
          intro: "El CPC tiene sentido cuando:",
          items: [
            "tienes un sitio o landing para la oferta",
            "necesitas leads, ventas o altas",
            "importan las UTM y la analytics end-to-end",
            "estás listo para rotar ads y afinar negativos o audiencias",
          ],
        },
        {
          intro: "Límites del modelo de clic:",
          items: [
            "el CPC sube en nichos competitivos",
            "ofertas flojas producen clics sin compras",
            "riesgo de tráfico de baja calidad — mira conversiones, no solo el CTR",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Fraude de clics",
          href: "/es/blog/sklikivanie/",
        },
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Cómo elegir",
      level: 2,
      paras: [
        "Empieza por el objetivo: entrar en el radar de la gente, o traer compradores ya. El alcance apunta a CPM (y estrategias de reach). Las ventas desde el sitio apuntan a CPC/CPA.",
        "Luego revisa la economía: coste aceptable por lead, margen, duración del ciclo de venta. Prueba ambos modelos con poco presupuesto y compara leads e ingresos — no un CTR bonito.",
      ],
      notes: [
        {
          title: "Conclusión",
          kind: "tip",
          text: "No hay respuesta universal a «¿impresiones o clics?» sin un objetivo. Las impresiones construyen awareness; los clics traen clientes potenciales. A menudo funcionan en pareja, no como rivales.",
        },
      ],
      links: [
        {
          label: "Venta de tráfico (lado publisher)",
          href: "/es/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  related: [
    "utm-metki",
    "retargeting",
    "strategii-yandeks-direkt",
    "sklikivanie",
    "prodazha-trafika",
    "spetsrazmeshchenie-direkt",
  ],
};

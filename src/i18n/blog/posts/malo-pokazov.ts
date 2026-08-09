import type { BlogPost } from "../../../data/blog";

/** ES overlay for malo-pokazov — same structure as RU JSON. */
export const maloPokazovEs: BlogPost = {
  slug: "malo-pokazov",
  title: "Estado «Pocas impresiones» en Yandex Direct",
  date: "2017-05-17",
  category: "Paid search",
  cover: "/images/blog/malo-pokazov/cover.webp",
  excerpt:
    "Por qué Direct marca grupos de baja frecuencia como «Pocas impresiones», qué afecta al estado y cómo recuperar impresiones: fusionar keywords LF, plantillas, negativos — sin el dogma obsoleto de «exactamente 10 en 30 días».",
  lead: [
    "«Pocas impresiones» apaga o limita grupos y frases con un pronóstico de demanda demasiado débil: Yandex no quiere servir anuncios que casi nadie verá.",
    "Abajo: por qué aparece el estado, cómo encontrar frases problemáticas y vías prácticas para restaurar impresiones. Umbrales y nombres de UI pueden haber cambiado desde 2017 — mira la Help de Direct; la idea sigue: acumular bastante frecuencia en el grupo o cortar la cola muerta.",
  ],
  faq: [
    {
      q: "¿Es un ban de la cuenta?",
      a: "No. Un estado local en frases/grupos con baja frecuencia esperada de impresiones.",
    },
    {
      q: "¿El estado es permanente?",
      a: "No. Se recalcula periódicamente. Tras editar estructura y keywords puede levantarse.",
    },
    {
      q: "¿Las keywords raras son la única causa?",
      a: "A menudo sí, pero negativos, operadores de coincidencia estrictos, geo estrecho y límites de dispositivo/audiencia lo empeoran.",
    },
    {
      q: "¿Debo borrar todas las keywords de baja frecuencia?",
      a: "Puedes, pero pierdes el long tail. Mejor agrupa términos LF relacionados para que sumen impresiones suficientes.",
    },
    {
      q: "¿Son obligatorias las plantillas de titular?",
      a: "No obligatorias, pero ayudan a mantener relevancia al fusionar frases. La sintaxis actual está en Help.",
    },
    {
      q: "¿Ayudan Commander o un export XLSX?",
      a: "Sí: fácil ver frases con el estado y puja a cero. La ruta UI a la columna puede haber cambiado.",
    },
    {
      q: "¿Qué relación tiene con la calidad del anuncio?",
      a: "Demanda débil ≠ CTR bajo. Arregla primero la frecuencia del grupo; mejora la calidad en paralelo.",
    },
  ],
  sections: [
    {
      title: "Qué significa el estado",
      level: 2,
      paras: [
        "Direct acumula stats de demanda y para pares cuya expectativa de impresiones es demasiado pequeña. Así limpia cuentas de miles de términos LF «muertos».",
        "El recálculo va por lotes (del orden de unos días — guía, no temporizador). Mientras cuelga el estado, esas frases no reciben tráfico.",
      ],
      links: [
        {
          label: "Keywords en Yandex Direct",
          href: "/es/blog/klyuchi-yandeks-direkt/",
        },
        {
          label: "Negativos en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "Qué corta las impresiones",
      level: 2,
      paras: [
        "Negativos agresivos y cross-negatives recortan audiencia — a veces hasta «pocas impresiones» en grupos enteros.",
        "Operadores de coincidencia y comillas estrechan la audiencia: útiles para precisión, dañinos mezclados con términos ultra-LF.",
        "Geo estrecho, pocos dispositivos, audiencias muy cerradas — recortan aún más una demanda ya rara.",
      ],
      lists: [
        {
          intro: "Antes de entrar en pánico, revisa:",
          items: [
            "negativos en frase/grupo/campaña",
            "operadores de coincidencia",
            "geo y horario",
            "si hay demanda en Wordstat/pronóstico",
          ],
        },
      ],
    },
    {
      title: "Cómo restaurar impresiones",
      level: 2,
      paras: [
        "Fusiona términos LF temáticamente cercanos en menos grupos para que la frecuencia total cruce el umbral. Añade máscaras de media/alta frecuencia si el intent lo permite.",
        "Con una «máscara» y colas distintas — packs de varias frases por grupo con un anuncio donde la keyword se lea en el titular (plantillas de Direct — según Help actual).",
        "El atajo perezoso es borrar LF. Vale para basura; para una cola valiosa reagrupa primero y revisa cross-negatives.",
        "En una tienda, mira inserts dinámicos de URL/parámetros solo si las landings existen de verdad.",
      ],
      links: [
        {
          label: "Anuncios adaptativos en Direct",
          href: "/es/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "Pujas en Direct",
          href: "/es/blog/stavki-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Importante",
    text: "Cifras como «hasta 10 impresiones en 30 días» de materiales de 2017 son una guía histórica. Comprueba el umbral actual y los nombres del estado en la Help de Yandex Direct.",
  },
  closing: [
    "Exporta frases con el estado, agrupa colas LF relacionadas y corta negativos de más — a menudo basta para levantar el estado sin borrar todo el set de keywords.",
  ],
  related: [
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "adaptivnyy-shablon-direkt",
    "stavki-direkt",
    "oshibki-nastroyki-konteksta",
    "chastotnost-zaprosov",
  ],
};

/** EN overlay for malo-pokazov — same structure as RU JSON. */
export const maloPokazovEn: BlogPost = {
  slug: "malo-pokazov",
  title: "“Low impressions” status in Yandex Direct",
  date: "2017-05-17",
  category: "Paid search",
  cover: "/images/blog/malo-pokazov/cover-en.webp",
  excerpt:
    "Why Direct marks low-frequency groups as “Low impressions,” what affects the status, and how to get impressions back: merging LF keywords, templates, negatives — without outdated “exactly 10 in 30 days” dogma.",
  lead: [
    "“Low impressions” turns off or limits groups and phrases with too weak a demand forecast: Yandex doesn’t want to run ads almost nobody will see.",
    "Below: why the status appears, how to find problem phrases, and practical ways to restore impressions. Thresholds and UI names may have changed since 2017 — check Direct Help; the idea stays the same: build enough frequency in the group or cut the dead tail.",
  ],
  faq: [
    {
      q: "Is this an account ban?",
      a: "No. A local status on phrases/groups with low expected impression frequency.",
    },
    {
      q: "Is the status permanent?",
      a: "No. It recalculates periodically. After structure and keyword edits it can lift.",
    },
    {
      q: "Are rare keywords the only cause?",
      a: "Often yes, but negatives, strict match operators, narrow geo, and device/audience limits make it worse.",
    },
    {
      q: "Should I delete all low-frequency keywords?",
      a: "You can, but you lose the long tail. Better group related LF terms so they add up to enough impressions.",
    },
    {
      q: "Are headline templates required?",
      a: "Not required, but they help keep relevance when merging phrases. Current syntax is in Help.",
    },
    {
      q: "Will Commander or an XLSX export help?",
      a: "Yes: easy to see phrases with the status and a zero bid. The UI path to the column may have changed.",
    },
    {
      q: "How does this relate to ad quality?",
      a: "Weak demand ≠ low CTR. Fix group frequency first; improve quality in parallel.",
    },
  ],
  sections: [
    {
      title: "What the status means",
      level: 2,
      paras: [
        "Direct accumulates demand stats and stops pairs whose expected impressions are too small. That cleans accounts of thousands of “dead” low-frequency terms.",
        "Recalculation runs in batches (on the order of a few days — a guide, not a timer). While the status hangs, those phrases get no traffic.",
      ],
      links: [
        {
          label: "Keywords in Yandex Direct",
          href: "/en/blog/klyuchi-yandeks-direkt/",
        },
        {
          label: "Negative keywords in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "What cuts impressions",
      level: 2,
      paras: [
        "Aggressive negatives and cross-negatives cut audience — sometimes to “low impressions” on whole groups.",
        "Match operators and quotes narrow the audience: useful for precision, harmful mixed with ultra-LF terms.",
        "Narrow geo, few devices, tight audiences — further cut already rare demand.",
      ],
      lists: [
        {
          intro: "Before panicking, check:",
          items: [
            "negatives on phrase/group/campaign",
            "match operators",
            "geo and schedule",
            "whether demand exists in Wordstat/forecast",
          ],
        },
      ],
    },
    {
      title: "How to restore impressions",
      level: 2,
      paras: [
        "Merge thematically close LF terms into fewer groups so total frequency crosses the threshold. Add mid/high-frequency masks if intent allows.",
        "With one “mask” and different tails — packs of several phrases per group with an ad where the keyword reads in the headline (Direct templates — per current Help).",
        "The lazy path is delete LF. Fine for junk; for a valuable tail regroup first and review cross-negatives.",
        "For a store, look at dynamic URL/parameter inserts only if the landings actually exist.",
      ],
      links: [
        {
          label: "Direct responsive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Figures like “up to 10 impressions in 30 days” from 2017 materials are a historical guide. Check the current threshold and status names in Yandex Direct Help.",
  },
  closing: [
    "Export phrases with the status, group related LF tails, and cut excess negatives — often enough to lift the status without deleting the whole keyword set.",
  ],
  related: [
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "adaptivnyy-shablon-direkt",
    "stavki-direkt",
    "oshibki-nastroyki-konteksta",
    "chastotnost-zaprosov",
  ],
};

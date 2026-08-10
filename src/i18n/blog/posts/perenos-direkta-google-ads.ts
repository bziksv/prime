import type { BlogPost } from "../../../data/blog";

/** EN overlay for perenos-direkta-google-ads — same structure as RU JSON. */
export const perenosDirektaGoogleAdsEn: BlogPost = {
  slug: "perenos-direkta-google-ads",
  title: "Moving campaigns from Yandex Direct to Google Ads",
  date: "2018-09-12",
  category: "Paid search",
  cover: "/images/blog/perenos-direkta-google-ads/cover-en.webp",
  excerpt:
    "How to move search campaigns from Yandex Direct into Google Ads: match types, negatives, ad limits, and geo — without blind Excel dumps or outdated 2018 “teleporter” tools.",
  lead: [
    "Moving from Yandex Direct to Google Ads is not a one-to-one file copy. Match types, negatives, geo, character limits, and ad policies all differ. A blind dump creates broad impressions, “Low search volume,” and wasted spend.",
    "Below: when a move makes sense, the manual or spreadsheet path, and what to check after import. Converter tools from 2018 reviews may be gone or renamed — confirm the tool is current. Google Ads availability in your region depends on the facts at launch time.",
  ],
  faq: [
    {
      q: "Can I export Direct and upload straight into Ads?",
      a: "Almost never without processing: columns, match types, and negatives don’t line up. You need a bridge sheet or an editor.",
    },
    {
      q: "Do Yandex Network ads move automatically into Display?",
      a: "A reliable one-click path usually doesn’t exist. Networks and creatives are rebuilt separately for Google’s logic.",
    },
    {
      q: "What about phrase-level negatives?",
      a: "In Google Ads, negatives live on the campaign or ad group (and on shared lists), not on every keyword the way they often do in Direct. Move the intent to the right level.",
    },
    {
      q: "Why touch match types?",
      a: "Broad match in Google without modifiers behaves differently from Direct’s familiar operators. Skip the mapping and you’ll pull in irrelevant demand.",
    },
    {
      q: "Do I need Editor?",
      a: "For mid-size and large structures, Google Ads Editor or a careful CSV helps. Small campaigns are often cleaner when you build them by hand.",
    },
  ],
  sections: [
    {
      title: "When a move helps — and when a rebuild is better",
      level: 2,
      paras: [
        "A move makes sense if Direct already has working keyword sets, ads, and ad-group structure, and you’re opening a second channel. Don’t confuse this with moving between Yandex accounts or exporting into a bidder — those are different jobs.",
        "If the structure is outdated, full of junk long-tails, and the ads are weak, it’s faster to build Google Ads from scratch by cluster and take only live keywords and winning copy from Direct.",
      ],
      lists: [
        {
          intro: "Three “move” scenarios:",
          items: [
            "inside Yandex (another login) — Direct’s native tools",
            "into a bidder or agency account — follow that service’s rules",
            "Direct → Google Ads — this article’s topic",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Why Excel “as is” breaks",
      level: 2,
      paras: [
        "Direct and Google Ads exports use different schemas: campaign and ad-group names, ad types, budgets, statuses. Without column mapping, the import fails or creates junk.",
        "On small structures, a hand move in the UI or Editor is easier. On mid size, use a bridge table: keywords, negatives, headlines, URLs, bid guides. Old “35 vs 30 characters” comparison tables go stale — check limits in the current Ads editor.",
      ],
      notes: [
        {
          kind: "tip",
          title: "About “teleporters”",
          text: "Converters like those praised in 2018 save time but don’t remove responsibility: after import, always hand-check match types, negatives, and policies.",
        },
      ],
    },
    {
      title: "Keywords and match types",
      level: 2,
      paras: [
        "In Google Ads, broad, phrase, and exact match — plus smart matching — differ from Direct operators. The old “plus instead of spaces” trick from early guides may refer to the retired broad match modifier — check current syntax in Google Help.",
        "In practice, don’t drag every long-tail: in Ads it’s easy to hit limited delivery on rare phrases. Keep the core and strong mid-tails; grow tails from search terms already inside Google.",
      ],
      lists: [
        {
          intro: "Before importing keywords:",
          items: [
            "clear obvious junk and duplicates",
            "set match types deliberately — not “everything broad”",
            "check landing URLs",
            "budget for Google auction learning",
          ],
        },
      ],
      links: [
        {
          label: "Keywords in Google Ads",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Negatives, geo, and ad copy",
      level: 2,
      paras: [
        "Move Direct keyword-level negatives to the ad group, campaign, or a shared negative list. Account for word forms where Google doesn’t cover them the way you’re used to in Yandex. Cross-negatives between groups stay useful.",
        "Geo in Ads is more often set at campaign level; in Direct it’s often more flexible by group — rebuild structure for that. In copy, Google policies are stricter on “click here” CTAs and “!” in headlines — edit before review.",
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "After import: mandatory checks",
      level: 2,
      paras: [
        "Open campaigns in the UI or Editor: ad statuses, policy errors, keyword match types, negative lists, geo, language, budget, bid strategy, UTM or tracking template, and the analytics link.",
        "Don’t mix networks blindly (Search vs Display). Moving a Yandex Network structure into Display or Performance Max is usually a rebuild: different creatives and signals.",
      ],
      lists: [
        {
          intro: "Launch-day checklist:",
          items: [
            "no accidental broad match across all keywords",
            "negatives in place",
            "ads passed policy review",
            "conversion import working",
            "daily budget and caps fit a test",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A move means adapting structure to Google’s rules, not “file → upload.” Keywords, negatives, geo, and copy always need hand polish.",
        "An auto-converter speeds things up, but final responsibility is the Ads check. Rebuild network campaigns separately from Search.",
      ],
    },
  ],
  closing: [
    "Export working groups from Direct, align match types and negatives to Google Ads logic, cut weak long-tails, and only then import — a day of Editor review costs less than a week of waste on broad impressions.",
  ],
  related: [
    "strategii-google-ads",
    "strategii-yandeks-direkt",
    "klyuchi-google-ads",
    "minus-slova-direkt",
    "audit-reklamnoy-kampanii",
    "oshibki-reklamnoy-kampanii",
  ],
};

/** ES overlay for perenos-direkta-google-ads — same structure as RU JSON / EN. */
export const perenosDirektaGoogleAdsEs: BlogPost = {
  slug: "perenos-direkta-google-ads",
  title: "Pasar campañas de Yandex Direct a Google Ads",
  date: "2018-09-12",
  category: "Paid search",
  cover: "/images/blog/perenos-direkta-google-ads/cover-es.webp",
  excerpt:
    "Cómo pasar campañas de búsqueda de Yandex Direct a Google Ads: match types, negativos, límites de anuncios y geo — sin volcados ciegos de Excel ni herramientas «teleporter» obsoletas de 2018.",
  lead: [
    "Pasar de Yandex Direct a Google Ads no es copiar un archivo uno a uno. Match types, negativos, geo, límites de caracteres y políticas de anuncios difieren. Un volcado ciego crea impresiones amplias, «Low search volume» y gasto tirado.",
    "Abajo: cuándo tiene sentido el traslado, la vía manual o por hoja de cálculo, y qué revisar tras el import. Las herramientas convertidoras de reviews de 2018 pueden haber desaparecido o cambiado de nombre — confirma que la herramienta esté actual. La disponibilidad de Google Ads en tu región depende de los hechos al momento del lanzamiento.",
  ],
  faq: [
    {
      q: "¿Puedo exportar Direct y subir directo a Ads?",
      a: "Casi nunca sin procesar: columnas, match types y negativos no alinean. Hace falta una hoja puente o un editor.",
    },
    {
      q: "¿Los anuncios de la Red de Yandex pasan solos a Display?",
      a: "Un camino fiable de un clic suele no existir. Redes y creatividades se reconstruyen aparte para la lógica de Google.",
    },
    {
      q: "¿Y los negativos a nivel de frase?",
      a: "En Google Ads los negativos viven en la campaña o el ad group (y en listas compartidas), no en cada keyword como a menudo en Direct. Lleva la intención al nivel correcto.",
    },
    {
      q: "¿Por qué tocar los match types?",
      a: "Broad match en Google sin modificadores se comporta distinto de los operadores familiares de Direct. Si saltas el mapeo, metes demanda irrelevante.",
    },
    {
      q: "¿Hace falta Editor?",
      a: "Para estructuras medianas y grandes, Google Ads Editor o un CSV cuidadoso ayudan. Las campañas pequeñas suelen quedar más limpias si las montas a mano.",
    },
  ],
  sections: [
    {
      title: "Cuándo ayuda el traslado — y cuándo conviene reconstruir",
      level: 2,
      paras: [
        "El traslado tiene sentido si Direct ya tiene sets de keywords, anuncios y estructura de ad groups que funcionan, y abres un segundo canal. No lo confundas con mover entre cuentas de Yandex o exportar a un bidder — son trabajos distintos.",
        "Si la estructura está obsoleta, llena de long-tails basura y los anuncios son flojos, es más rápido montar Google Ads desde cero por cluster y llevar de Direct solo keywords vivas y copy ganador.",
      ],
      lists: [
        {
          intro: "Tres escenarios de «traslado»:",
          items: [
            "dentro de Yandex (otro login) — herramientas nativas de Direct",
            "a un bidder o cuenta de agencia — sigue las reglas de ese servicio",
            "Direct → Google Ads — el tema de este artículo",
          ],
        },
      ],
      links: [
        {
          label: "Estrategias de Google Ads",
          href: "/es/blog/strategii-google-ads/",
        },
        {
          label: "Estrategias de Yandex Direct",
          href: "/es/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Por qué Excel «tal cual» se rompe",
      level: 2,
      paras: [
        "Los exports de Direct y Google Ads usan esquemas distintos: nombres de campaña y ad group, tipos de anuncio, presupuestos, estados. Sin mapeo de columnas, el import falla o crea basura.",
        "En estructuras pequeñas, un traslado a mano en la UI o Editor es más fácil. En medianas, usa una tabla puente: keywords, negativos, titulares, URLs, guías de puja. Las tablas viejas de comparación «35 vs 30 caracteres» se quedan obsoletas — mira los límites en el editor actual de Ads.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Sobre los «teleporters»",
          text: "Los convertidores elogiados en 2018 ahorran tiempo pero no quitan responsabilidad: tras el import, siempre revisa a mano match types, negativos y políticas.",
        },
      ],
    },
    {
      title: "Keywords y match types",
      level: 2,
      paras: [
        "En Google Ads, broad, phrase y exact match — más smart matching — difieren de los operadores de Direct. El truco viejo de «plus en vez de espacios» de guías tempranas puede referirse al broad match modifier retirado — mira la sintaxis actual en Google Help.",
        "En la práctica, no arrastres cada long-tail: en Ads es fácil chocar con limited delivery en frases raras. Quédate con el núcleo y mid-tails fuertes; crece las colas desde search terms ya dentro de Google.",
      ],
      lists: [
        {
          intro: "Antes de importar keywords:",
          items: [
            "limpia basura obvia y duplicados",
            "fija match types a propósito — no «todo broad»",
            "revisa URLs de landing",
            "presupuesto para el learning de la subasta de Google",
          ],
        },
      ],
      links: [
        {
          label: "Keywords en Google Ads",
          href: "/es/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Negativos, geo y copy de anuncios",
      level: 2,
      paras: [
        "Lleva los negativos a nivel de keyword de Direct al ad group, la campaña o una lista compartida de negativos. Ten en cuenta formas de palabra donde Google no las cubre como estás acostumbrado en Yandex. Los cross-negatives entre grupos siguen siendo útiles.",
        "El geo en Ads se fija más a menudo a nivel de campaña; en Direct suele ser más flexible por grupo — reconstruye la estructura para eso. En copy, las políticas de Google son más estrictas con CTAs de «haz clic aquí» y «!» en titulares — edita antes de la revisión.",
      ],
      links: [
        {
          label: "Negativos en Direct",
          href: "/es/blog/minus-slova-direkt/",
        },
        {
          label: "Auditoría de campaña publicitaria",
          href: "/es/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Tras el import: revisiones obligatorias",
      level: 2,
      paras: [
        "Abre las campañas en la UI o Editor: estados de anuncios, errores de política, match types de keywords, listas de negativos, geo, idioma, presupuesto, estrategia de puja, UTM o tracking template, y el enlace a analytics.",
        "No mezcles redes a ciegas (Search vs Display). Pasar una estructura de la Red de Yandex a Display o Performance Max suele ser una reconstrucción: creatividades y señales distintas.",
      ],
      lists: [
        {
          intro: "Checklist del día de lanzamiento:",
          items: [
            "sin broad match accidental en todas las keywords",
            "negativos en su sitio",
            "anuncios que pasaron la revisión de política",
            "import de conversiones funcionando",
            "presupuesto diario y techos encajan con un test",
          ],
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Un traslado significa adaptar la estructura a las reglas de Google, no «archivo → upload». Keywords, negativos, geo y copy siempre necesitan pulido a mano.",
        "Un auto-convertidor acelera, pero la responsabilidad final es la revisión en Ads. Reconstruye las campañas de red aparte de Search.",
      ],
    },
  ],
  closing: [
    "Exporta grupos que funcionan desde Direct, alinea match types y negativos a la lógica de Google Ads, corta long-tails flojos y solo entonces importa — un día de revisión en Editor cuesta menos que una semana de desperdicio en impresiones amplias.",
  ],
  related: [
    "strategii-google-ads",
    "strategii-yandeks-direkt",
    "klyuchi-google-ads",
    "minus-slova-direkt",
    "audit-reklamnoy-kampanii",
    "oshibki-reklamnoy-kampanii",
  ],
};

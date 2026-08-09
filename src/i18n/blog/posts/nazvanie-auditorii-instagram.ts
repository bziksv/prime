import type { BlogPost } from "../../../data/blog";

/** EN overlay for nazvanie-auditorii-instagram — same structure as RU JSON. */
export const nazvanieAuditoriiInstagramEn: BlogPost = {
  slug: "nazvanie-auditorii-instagram",
  title: "Audience name in Instagram Ads: how to label segments",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nazvanie-auditorii-instagram/cover-en.webp",
  excerpt:
    "Why the internal audience name in Instagram/Meta promotion matters, how to name segments for tests, and how it differs from the public profile name.",
  lead: [
    "The Audience name field in Promote or Ads Manager is visible only to the account team: it’s a label for a saved segment (geo, age, interests, custom lists), not the page name followers see.",
    "Below: why to name audiences systematically, which parameters sit next to the name, and what not to expect from “creative” slogan labels. Menu items change; check Meta Help. Disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Who can see the audience name?",
      a: "Usually only you and colleagues with ad account access. Followers don’t see it in the feed.",
    },
    {
      q: "Can you name an audience with a brand slogan?",
      a: "You can, but it’s useless for tracking: better a scheme like “geo · interest · goal · date” so you know a month later what you tested.",
    },
    {
      q: "Is this the same as the Instagram profile name?",
      a: "No. Name/@handle are public. Audience name is an internal ads label.",
    },
    {
      q: "Do you need a separate business account?",
      a: "For steady ads — a professional profile and access to ads / Accounts Center. Exact path — in Meta Help.",
    },
    {
      q: "Will mass-liking grow a real audience?",
      a: "Not as a strategy: risk of limits. Ad audiences are built with interests, retargeting, and custom lists under account rules.",
    },
  ],
  sections: [
    {
      title: "What this field is",
      level: 2,
      paras: [
        "When setting up post promotion or an ad, you save a set of filters: geography, age, gender, interests, sometimes a radius around an address or a site for retargeting.",
        "“Audience name” labels that set so you don’t mix “Moscow 25–34 interest A” with “NYC lookalike customers.”",
        "Slogans like “Let’s connect” for a phone store are cute, but reports a month later won’t say how the segment differed.",
      ],
      links: [
        {
          label: "Promote / boost on Instagram",
          href: "/en/blog/promo-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "How to name: a working scheme",
      level: 2,
      paras: [
        "Keep a short template: product or offer · geo · age · interest/source · campaign goal · date or test number.",
        "Example: `Sneakers · NYC+NJ · 25-40 · running · traffic · 2026-04`. In the saved-audiences list you see the hypothesis at a glance.",
        "One segment — one name. Don’t reuse a label after changing interests: analytics will lie.",
      ],
      lists: [
        {
          intro: "Useful tags in the name:",
          items: [
            "cold / warm / retarget",
            "interests vs lookalike vs CRM customers",
            "A/B creative variant if the audience is shared",
            "exclusions (minus buyers) — short at the end",
          ],
        },
      ],
    },
    {
      title: "What you fill next to the name",
      level: 2,
      paras: [
        "Locations: cities and regions for delivery. For offline, sometimes a radius around a point — if the option exists.",
        "Interests and behavior: pick close to the offer, not “everything for reach.”",
        "Age and gender — by real audience, not “18–65 just in case” if the product is narrow.",
        "The action button (call, directions, website) belongs to the ad/promo, not the audience name — but it should match the segment goal.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          text: "In the app the path is often shorter (Promote); in Ads Manager there are more fields and saved audiences. Naming logic is the same.",
        },
      ],
    },
    {
      title: "Link to campaign goal",
      level: 2,
      paras: [
        "The name should reflect the job: messages, visits, sales, reach. Otherwise the team optimizes the wrong audience.",
        "For a test keep budget and duration separate; in the name a hypothesis number (`H1`, `H2`) is enough.",
        "After the test archive or mark `paused` / `winner` in the name — easier than remembering “that blue one.”",
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Mass-like / mass-follow automation “for the ad account” is not a way to build an audience and risks the account.",
        "Bought “competitor audience” lists instead of official consented lists — ToS and privacy territory; see the audience-parsing piece.",
        "Outdated “likes-per-hour limits” from old guides don’t replace Meta ads policy — follow current advertising rules.",
      ],
      links: [
        {
          label: "Audience parsing: risks",
          href: "/en/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Audience name is an internal segment label, not a storefront brand.",
        "Name so that a month later geo, source, and goal are obvious.",
        "Segment and offer quality beat a creative slogan in the Name field.",
      ],
    },
  ],
  closing: [
    "Before the next Promote, write the naming template in team notes and save 2–3 clean segments for different hypotheses — reports then read without decoding.",
  ],
  related: [
    "promo-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "parsing-auditorii",
    "tselevaya-auditoriya",
    "retargeting-meta",
  ],
};

/** ES overlay for nazvanie-auditorii-instagram — same structure as RU JSON / EN. */
export const nazvanieAuditoriiInstagramEs: BlogPost = {
  slug: "nazvanie-auditorii-instagram",
  title: "Nombre de audiencia en Instagram Ads: cómo etiquetar segmentos",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nazvanie-auditorii-instagram/cover.webp",
  excerpt:
    "Por qué importa el nombre interno de audiencia en la promoción de Instagram/Meta, cómo nombrar segmentos para tests y en qué se diferencia del nombre público del perfil.",
  lead: [
    "El campo Audience name en Promote o Ads Manager solo lo ve el equipo de la cuenta: es una etiqueta para un segmento guardado (geo, edad, intereses, listas custom), no el nombre de página que ven los followers.",
    "Abajo: por qué nombrar audiencias con sistema, qué parámetros van junto al nombre y qué no esperar de etiquetas «creativas» tipo slogan. Los ítems de menú cambian; consulta Meta Help. El disclaimer está en la página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Quién puede ver el nombre de la audiencia?",
      a: "Suele ser solo tú y colegas con acceso a la cuenta de ads. Los followers no lo ven en el feed.",
    },
    {
      q: "¿Se puede nombrar una audiencia con un slogan de marca?",
      a: "Se puede, pero no sirve para tracking: mejor un esquema tipo «geo · interés · objetivo · fecha» para saber un mes después qué testeaste.",
    },
    {
      q: "¿Es lo mismo que el nombre del perfil de Instagram?",
      a: "No. Name/@handle son públicos. Audience name es una etiqueta interna de ads.",
    },
    {
      q: "¿Hace falta una cuenta business aparte?",
      a: "Para ads estables — un perfil profesional y acceso a ads / Accounts Center. La ruta exacta — en Meta Help.",
    },
    {
      q: "¿El mass-liking crecerá una audiencia real?",
      a: "No como estrategia: riesgo de límites. Las audiencias de ads se construyen con intereses, retargeting y listas custom bajo las reglas de la cuenta.",
    },
  ],
  sections: [
    {
      title: "Qué es este campo",
      level: 2,
      paras: [
        "Al configurar la promoción de un post o un ad, guardas un set de filtros: geografía, edad, género, intereses, a veces un radio alrededor de una dirección o un sitio para retargeting.",
        "«Audience name» etiqueta ese set para no mezclar «Madrid 25–34 interés A» con «lookalike de clientes NYC».",
        "Slogans tipo «Let’s connect» para una tienda de móviles son simpáticos, pero los informes un mes después no dirán en qué se diferenciaba el segmento.",
      ],
      links: [
        {
          label: "Promote / boost en Instagram",
          href: "/es/blog/promo-instagram/",
        },
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Cómo nombrar: un esquema que funciona",
      level: 2,
      paras: [
        "Mantén una plantilla corta: producto u oferta · geo · edad · interés/fuente · objetivo de campaña · fecha o número de test.",
        "Ejemplo: `Zapatillas · Madrid+BCN · 25-40 · running · traffic · 2026-04`. En la lista de saved audiences ves la hipótesis de un vistazo.",
        "Un segmento — un nombre. No reutilices una etiqueta tras cambiar intereses: la analytics mentirá.",
      ],
      lists: [
        {
          intro: "Tags útiles en el nombre:",
          items: [
            "cold / warm / retarget",
            "intereses vs lookalike vs clientes CRM",
            "variante creativa A/B si la audiencia es compartida",
            "exclusiones (minus buyers) — corto al final",
          ],
        },
      ],
    },
    {
      title: "Qué rellenas junto al nombre",
      level: 2,
      paras: [
        "Locations: ciudades y regiones de entrega. Para offline, a veces un radio alrededor de un punto — si la opción existe.",
        "Intereses y comportamiento: elige cerca de la oferta, no «todo por reach».",
        "Edad y género — según la audiencia real, no «18–65 por si acaso» si el producto es estrecho.",
        "El botón de acción (call, directions, website) pertenece al ad/promo, no al nombre de audiencia — pero debería coincidir con el objetivo del segmento.",
      ],
      notes: [
        {
          kind: "tip",
          title: "UI",
          text: "En la app el camino suele ser más corto (Promote); en Ads Manager hay más campos y saved audiences. La lógica de naming es la misma.",
        },
      ],
    },
    {
      title: "Vínculo con el objetivo de campaña",
      level: 2,
      paras: [
        "El nombre debería reflejar el trabajo: mensajes, visitas, ventas, reach. Si no, el equipo optimiza la audiencia equivocada.",
        "Para un test mantén presupuesto y duración aparte; en el nombre basta un número de hipótesis (`H1`, `H2`).",
        "Tras el test archiva o marca `paused` / `winner` en el nombre — más fácil que recordar «esa azul».",
      ],
    },
    {
      title: "Qué evitar",
      level: 2,
      paras: [
        "Automatización mass-like / mass-follow «para la cuenta de ads» no es una forma de construir audiencia y arriesga la cuenta.",
        "Listas compradas de «audiencia del competidor» en lugar de listas oficiales con consentimiento — territorio de ToS y privacy; ver la pieza de parsing de audiencia.",
        "Límites obsoletos de «likes por hora» de guías viejas no sustituyen la policy de ads de Meta — sigue las reglas publicitarias actuales.",
      ],
      links: [
        {
          label: "Parsing de audiencia: riesgos",
          href: "/es/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Audience name es una etiqueta interna de segmento, no una marca de escaparate.",
        "Nombra para que un mes después sean obvios geo, fuente y objetivo.",
        "La calidad del segmento y de la oferta gana a un slogan creativo en el campo Name.",
      ],
    },
  ],
  closing: [
    "Antes del próximo Promote, escribe la plantilla de naming en las notas del equipo y guarda 2–3 segmentos limpios para hipótesis distintas — los informes se leen entonces sin descifrar.",
  ],
  related: [
    "promo-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "parsing-auditorii",
    "tselevaya-auditoriya",
    "retargeting-meta",
  ],
};

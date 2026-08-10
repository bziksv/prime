import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-assessory — same structure as RU JSON. */
export const googleAssessoryEn: BlogPost = {
  slug: "google-assessory",
  title: "How Google quality raters score sites: quality, E-E-A-T, and YMYL",
  date: "2018-08-27",
  category: "SEO",
  cover: "/images/blog/google-assessory/cover-en.webp",
  excerpt:
    "Quality Rater Guidelines: why quality raters exist, why their score isn’t a ranking, page purpose, E-E-A-T, YMYL, author reputation, and what breaks trust — without the myth that a rater personally boosted your rankings.",
  lead: [
    "Quality raters manually score pages against Google’s Search Quality Rater Guidelines. Their ratings help improve algorithms — they don’t place your URL in search results by hand.",
    "Below: scoring logic — page purpose, experience/expertise/authoritativeness/trust (E-E-A-T), YMYL topics, author reputation, and typical reasons for a low score. The guide updates — check the current version; old page-count trivia doesn’t matter.",
  ],
  faq: [
    {
      q: "Does a rater rank my site?",
      a: "No. The score indirectly trains systems. There’s no direct “rater gave a 5 → a ranking boost”.",
    },
    {
      q: "What is E-E-A-T?",
      a: "Experience, Expertise, Authoritativeness, Trustworthiness — quality signals for content and source. Not a “Search Console button”, but a frame for useful, honest materials.",
    },
    {
      q: "What is YMYL?",
      a: "Your Money or Your Life: topics where a mistake hits health, money, or safety. Expertise requirements are higher there.",
    },
    {
      q: "Do I need an author page?",
      a: "For expert and news pieces it’s useful: who wrote it, what qualification, how to reach the editors. Empty “Admin” barely helps.",
    },
    {
      q: "Does clickbait hurt the score?",
      a: "Yes if the title promises one thing and the content delivers another. Expectation mismatch is a quality minus.",
    },
    {
      q: "Is advertising always bad?",
      a: "No. It’s bad when it blocks the main content or masquerades as editorial.",
    },
  ],
  sections: [
    {
      title: "Why quality raters exist and what they look at",
      level: 2,
      paras: [
        "A rater has instructions and a job: understand why the page exists, whether it’s useful, whether it matches the query (when scoring relevance), and whether the source can be trusted.",
        "The link to ranking is indirect: accumulated ratings help train and check algorithms. Knowing the criteria is useful as a quality checklist — not a “secret ranking lever”.",
        "The main anchor is purpose and usefulness. A page with no value, with deceit, or with harm gets the lowest score regardless of word count.",
      ],
      lists: [
        {
          intro: "Base scoring axes:",
          items: [
            "purpose and usefulness",
            "E-E-A-T of the main content",
            "amount and quality of content for the job",
            "information about the site and authors",
            "reputation of the site and creators",
          ],
        },
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Site relevance",
          href: "/en/blog/relevantnost-sayta/",
        },
      ],
    },
    {
      title: "E-E-A-T, YMYL, and reputation",
      level: 2,
      paras: [
        "For medicine, finance, law, safety, and related topics, author qualification, fact updates, and a clear editorial policy matter. User comments alone don’t make a piece expert.",
        "Author reputation shapes how the site is perceived: a weak or toxic content creator pulls trust down even on a strong domain. Show real profiles and editorial responsibility.",
        "Video and sharing: watchability and an easy share option add to page usefulness — they don’t replace the meaning of the clip.",
      ],
      notes: [
        {
          title: "Don’t confuse with gaming",
          kind: "tip",
          text: "Buying “rater scores” or faking reviews is a path to lost trust. Work on real quality and transparency.",
        },
      ],
    },
    {
      title: "What tanks the score",
      level: 2,
      paras: [
        "Deceiving the user: others’ brands/faces, fake contacts, ads dressed as articles, manipulations. Conspiracy and harmful content sit in the worst score zone.",
        "Distracting ads that cover the page’s meaning. An undeveloped topic with low author expertise — even if “intentions were good”.",
        "Account for intent: a commercial product page doesn’t always answer an informational query. See what dominates the SERP for that query.",
      ],
      links: [
        {
          label: "Fake page",
          href: "/en/blog/feyk-stranitsa/",
        },
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Google quality raters score usefulness, trust, and fit to page purpose — they don’t “sell” rankings. Lean on E-E-A-T and honest content, especially in YMYL, and remember: the algorithm learns from ratings, but it doesn’t rank by hand.",
  ],
  related: [
    "eat-kopirayting",
    "user-intent",
    "relevantnost-sayta",
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "feyk-stranitsa",
  ],
};

/** ES overlay for google-assessory — same structure as RU JSON / EN. */
export const googleAssessoryEs: BlogPost = {
  slug: "google-assessory",
  title: "Cómo puntúan los quality raters de Google: calidad, E-E-A-T e YMYL",
  date: "2018-08-27",
  category: "SEO",
  cover: "/images/blog/google-assessory/cover-es.webp",
  excerpt:
    "Quality Rater Guidelines: por qué existen los quality raters, por qué su score no es un ranking, propósito de la página, E-E-A-T, YMYL, reputación del autor y qué rompe la trust — sin el mito de que un rater te impulsó personalmente en los resultados.",
  lead: [
    "Los quality raters puntúan páginas a mano según las Search Quality Rater Guidelines de Google. Sus ratings ayudan a mejorar algoritmos — no colocan tu URL en los resultados de búsqueda a mano.",
    "Abajo: lógica de scoring — propósito de la página, experience/expertise/authoritativeness/trust (E-E-A-T), temas YMYL, reputación del autor y motivos típicos de un score bajo. La guía se actualiza — mira la versión vigente; las antiguas trivialidades de conteo de páginas no importan.",
  ],
  faq: [
    {
      q: "¿Un rater rankea mi sitio?",
      a: "No. El score entrena sistemas de forma indirecta. No hay un «el rater dio un 5 → impulso de ranking» directo.",
    },
    {
      q: "¿Qué es E-E-A-T?",
      a: "Experience, Expertise, Authoritativeness, Trustworthiness — señales de calidad del contenido y la fuente. No un «botón de Search Console», sino un marco para materiales útiles y honestos.",
    },
    {
      q: "¿Qué es YMYL?",
      a: "Your Money or Your Life: temas donde un error pega a salud, dinero o seguridad. Ahí los requisitos de expertise son más altos.",
    },
    {
      q: "¿Hace falta una página de autor?",
      a: "Para piezas expertas y de noticias es útil: quién lo escribió, qué cualificación, cómo contactar a la redacción. Un «Admin» vacío apenas ayuda.",
    },
    {
      q: "¿El clickbait daña el score?",
      a: "Sí si el título promete una cosa y el contenido entrega otra. El desajuste de expectativas es un minus de calidad.",
    },
    {
      q: "¿La publicidad siempre es mala?",
      a: "No. Es mala cuando bloquea el contenido principal o se hace pasar por editorial.",
    },
  ],
  sections: [
    {
      title: "Por qué existen los quality raters y qué miran",
      level: 2,
      paras: [
        "Un rater tiene instrucciones y un trabajo: entender por qué existe la página, si es útil, si encaja con la consulta (al puntuar relevancia) y si se puede confiar en la fuente.",
        "El vínculo con el ranking es indirecto: los ratings acumulados ayudan a entrenar y chequear algoritmos. Conocer los criterios sirve como checklist de calidad — no como «palanca secreta de ranking».",
        "El ancla principal es propósito y utilidad. Una página sin valor, con engaño o con daño recibe el score más bajo sin importar el conteo de palabras.",
      ],
      lists: [
        {
          intro: "Ejes base de scoring:",
          items: [
            "propósito y utilidad",
            "E-E-A-T del contenido principal",
            "cantidad y calidad de contenido para el trabajo",
            "información sobre el sitio y los autores",
            "reputación del sitio y de los creadores",
          ],
        },
      ],
      links: [
        {
          label: "User intent en SEO",
          href: "/es/blog/user-intent/",
        },
        {
          label: "Relevancia del sitio",
          href: "/es/blog/relevantnost-sayta/",
        },
      ],
    },
    {
      title: "E-E-A-T, YMYL y reputación",
      level: 2,
      paras: [
        "En medicina, finanzas, derecho, seguridad y temas afines importan la cualificación del autor, la actualización de hechos y una política editorial clara. Solo los comentarios de usuarios no hacen experta una pieza.",
        "La reputación del autor moldea cómo se percibe el sitio: un creador de contenido débil o tóxico baja la trust incluso en un dominio fuerte. Muestra perfiles reales y responsabilidad editorial.",
        "Vídeo y sharing: la watchability y una opción fácil de compartir suman a la utilidad de la página — no sustituyen el sentido del clip.",
      ],
      notes: [
        {
          title: "No confundir con gaming",
          kind: "tip",
          text: "Comprar «scores de rater» o falsificar reseñas es camino a perder trust. Trabaja en calidad real y transparencia.",
        },
      ],
    },
    {
      title: "Qué hunde el score",
      level: 2,
      paras: [
        "Engañar al usuario: marcas/caras ajenas, contactos falsos, ads vestidos de artículos, manipulaciones. Conspiración y contenido dañino viven en la zona de peor score.",
        "Ads que distraen y tapan el sentido de la página. Un tema poco desarrollado con baja expertise del autor — aunque «las intenciones fueran buenas».",
        "Cuenta el intent: una ficha comercial no siempre responde a una consulta informativa. Mira qué domina la SERP para esa consulta.",
      ],
      links: [
        {
          label: "Página falsa",
          href: "/es/blog/feyk-stranitsa/",
        },
        {
          label: "Tráfico sin leads",
          href: "/es/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Los quality raters de Google puntúan utilidad, trust y encaje con el propósito de la página — no «venden» rankings. Apóyate en E-E-A-T y contenido honesto, sobre todo en YMYL, y recuerda: el algoritmo aprende de los ratings, pero no rankea a mano.",
  ],
  related: [
    "eat-kopirayting",
    "user-intent",
    "relevantnost-sayta",
    "tehnicheskiy-seo-audit",
    "seo-oshibki",
    "feyk-stranitsa",
  ],
};

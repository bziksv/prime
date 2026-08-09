import type { BlogPost } from "../../../data/blog";

/** EN overlay for kviz-sayt — same structure as RU JSON. */
export const kvizSaytEn: BlogPost = {
  slug: "kviz-sayt",
  title: "Quiz site: when you need one and how to make it work",
  date: "2020-01-14",
  category: "Digital marketing",
  cover: "/images/blog/kviz-sayt/cover-en.webp",
  excerpt:
    "What a quiz site and a landing quiz are: gamification, when a multi-step survey beats a long page, a build algorithm, and builder vs agency.",
  lead: [
    "A quiz site (or a quiz block on a landing) is a step-by-step survey in game form: the user answers questions, gets a personal result or calculation, and the business gets a segment and a contact.",
    "It isn’t a “newest replacement for every landing” — it’s a format for a job: warm up colder traffic and collect a lead without a wall of copy. Below: when it works, how to build it, and what to watch.",
  ],
  faq: [
    {
      q: "Does a quiz replace a normal landing?",
      a: "Not always. For hot demand with a clear offer, classics often suffice. A quiz is stronger when you need to clarify the job and lower the lead barrier.",
    },
    {
      q: "How does it differ from a regular form?",
      a: "Several steps, a sense of progress, a personal outcome. A form is fields right away; a quiz is a dialogue with a result.",
    },
    {
      q: "Which step of Hunt’s awareness ladder does it fit?",
      a: "Often for people still choosing a solution (middle steps). On steps 4–5 a short offer without a long survey is sometimes enough.",
    },
    {
      q: "How many questions is normal?",
      a: "Usually 4–8 that earn their place. Ten “for looks” raise drop-off. Every question should affect the offer or qualification.",
    },
    {
      q: "Builder or agency?",
      a: "A simple test — a builder. Complex calculation, brand design, CRM integrations — more often a contractor. Stake and cost of error decide.",
    },
    {
      q: "Where do leads go?",
      a: "Into CRM or a sheet with quiz answers. Without passing the segment to sales, the survey loses its point.",
    },
    {
      q: "Is this manipulation?",
      a: "Progress and personalization boost engagement. The line is an honest result and consent to contact — no fake “you won” tricks.",
    },
  ],
  sections: [
    {
      title: "What a quiz site is",
      level: 2,
      paras: [
        "It’s a landing (separate URL or block) where instead of a long text the user runs a mini scenario: questions → branching logic → outcome (selection, calculation, recommendation) → contact form.",
        "Landings didn’t disappear: a quiz adapts to “learn the need and give an answer.” Poor classic-page conversion is a reason to test a quiz hypothesis — not to blindly copy someone else’s template.",
      ],
      lists: [
        {
          intro: "Why business uses it:",
          items: [
            "lead qualification",
            "a personal offer",
            "a lower barrier than “leave a request into the void”",
            "data for the sales script",
          ],
        },
      ],
      links: [
        {
          label: "Awareness ladder (Hunt’s ladder)",
          href: "/en/blog/lestnitsa-hanta/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Gamification: why progress matters",
      level: 2,
      paras: [
        "Steps, a progress bar, and “2 questions left” raise completion: an unfinished scenario wants closing. Use that on purpose — not to deceive, but to guide a choice.",
        "It works when questions are short, options are clear, and the outcome is truly useful. Otherwise the user feels an empty game for a phone number.",
      ],
    },
    {
      title: "When a quiz is needed — and when not",
      level: 2,
      paras: [
        "It makes sense: a complex product with branches (renovation, training, service match), cold/warm traffic, segmentation needed before a call. Weaker: impulse buy at one price, audience already on-site with a ready “buy X” intent.",
        "Tied to awareness: a long multi-page often waits for hot visitors. A quiz helps those who still need to name the job — and leads to a request more gently.",
      ],
      lists: [
        {
          intro: "Signals it’s worth testing:",
          items: [
            "customers have many types of jobs",
            "managers spend time on first-line qualification",
            "drop-offs on a long form",
            "ads bring mixed-temperature traffic",
          ],
        },
      ],
    },
    {
      title: "Build algorithm",
      level: 2,
      paras: [
        "Goal first: a personal offer for mature demand, or choice help for colder traffic. Goal drives questions and the finale (price/package vs guide/selection).",
        "Then: audience and branches → question map → copy and visuals → form and consent → integration → ad traffic → fixes from step drop-offs.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "goal and metric (lead, qualification)",
            "4–8 questions without fluff",
            "a clear outcome before or right after asking for contact",
            "answers passed into CRM",
            "A/B of length and wording",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Asking for a phone on the first screen before any value. Scenario usefulness first — then contact, if the funnel logic allows it.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
      ],
    },
    {
      title: "Builder or agency",
      level: 2,
      paras: [
        "A builder speeds up a hypothesis: a day or two for a draft with a clear audience. An agency or custom build — when you need brand, complex logic, calculations, integrations, and ownership of ad conversion.",
        "There’s no absolute “always DIY / always contractor.” With a high media budget, a bad quiz costs more than saving on a template.",
      ],
    },
    {
      title: "What to watch in an effective quiz",
      level: 2,
      paras: [
        "Mobile layout, speed, honest outcome, clear CTA, data policy. Answers should change the manager’s next step — otherwise it’s a decorative survey.",
        "You can embed it in an existing site or make a separate URL for ads. Don’t spawn conflicting offers between the quiz and the main site.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "questions affect the offer",
            "few mid-funnel drop-offs",
            "leads tagged with a segment",
            "consent to contact",
            "the promised outcome matches reality",
          ],
        },
      ],
    },
  ],
  closing: [
    "A quiz site strengthens the funnel when questions and outcome tie to the customer’s job. Build short logic, measure steps, and hand answers to sales — or it stays a “pretty game.”",
  ],
};

/** ES overlay for kviz-sayt — same structure as RU JSON / EN. */
export const kvizSaytEs: BlogPost = {
  slug: "kviz-sayt",
  title: "Sitio quiz: cuándo lo necesitas y cómo hacerlo funcionar",
  date: "2020-01-14",
  category: "Digital marketing",
  cover: "/images/blog/kviz-sayt/cover.webp",
  excerpt:
    "Qué son un sitio quiz y un quiz en landing: gamificación, cuándo una encuesta multi-paso gana a una página larga, algoritmo de build, y builder vs agencia.",
  lead: [
    "Un sitio quiz (o un bloque quiz en una landing) es una encuesta paso a paso en forma de juego: el usuario responde preguntas, obtiene un resultado o cálculo personal, y el negocio obtiene un segmento y un contacto.",
    "No es un «reemplazo nuevo de toda landing» — es un formato para un trabajo: calentar tráfico más frío y recoger un lead sin un muro de copy. Abajo: cuándo funciona, cómo armarlo y qué vigilar.",
  ],
  faq: [
    {
      q: "¿Un quiz sustituye una landing normal?",
      a: "No siempre. Para demanda caliente con oferta clara, a menudo basta lo clásico. Un quiz es más fuerte cuando hay que aclarar el trabajo y bajar la barrera del lead.",
    },
    {
      q: "¿En qué se diferencia de un formulario habitual?",
      a: "Varios pasos, sensación de progreso, un outcome personal. Un formulario son campos de golpe; un quiz es un diálogo con resultado.",
    },
    {
      q: "¿En qué peldaño de la escalera de awareness de Hunt encaja?",
      a: "A menudo para quien aún elige solución (peldaños medios). En los peldaños 4–5 a veces basta una oferta corta sin encuesta larga.",
    },
    {
      q: "¿Cuántas preguntas es normal?",
      a: "Suele ser 4–8 que se ganan su sitio. Diez «para quedar bien» suben el drop-off. Cada pregunta debe afectar la oferta o la cualificación.",
    },
    {
      q: "¿Builder o agencia?",
      a: "Un test simple — un builder. Cálculo complejo, diseño de marca, integraciones CRM — más a menudo un contractor. Deciden el stake y el coste del error.",
    },
    {
      q: "¿Adónde van los leads?",
      a: "A CRM o a una hoja con respuestas del quiz. Sin pasar el segmento a ventas, la encuesta pierde el sentido.",
    },
    {
      q: "¿Es manipulación?",
      a: "Progreso y personalización suben el engagement. La línea es un resultado honesto y consentimiento de contacto — sin trucos falsos de «has ganado».",
    },
  ],
  sections: [
    {
      title: "Qué es un sitio quiz",
      level: 2,
      paras: [
        "Es una landing (URL aparte o bloque) donde, en lugar de un texto largo, el usuario corre un mini escenario: preguntas → lógica de branching → outcome (selección, cálculo, recomendación) → formulario de contacto.",
        "Las landings no desaparecieron: un quiz se adapta a «conocer la necesidad y dar una respuesta». Una conversión pobre de página clásica es motivo para testear una hipótesis quiz — no para copiar a ciegas la plantilla de otro.",
      ],
      lists: [
        {
          intro: "Por qué lo usa el negocio:",
          items: [
            "cualificación del lead",
            "una oferta personal",
            "una barrera más baja que «dejar una solicitud al vacío»",
            "datos para el script de ventas",
          ],
        },
      ],
      links: [
        {
          label: "Escalera de awareness (escalera de Hunt)",
          href: "/es/blog/lestnitsa-hanta/",
        },
        {
          label: "Copy de landing page",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Gamificación: por qué importa el progreso",
      level: 2,
      paras: [
        "Pasos, barra de progreso y «quedan 2 preguntas» suben la completion: un escenario a medias pide cerrarse. Úsalo a propósito — no para engañar, sino para guiar una elección.",
        "Funciona cuando las preguntas son cortas, las opciones claras y el outcome es de verdad útil. Si no, el usuario siente un juego vacío por un número de teléfono.",
      ],
    },
    {
      title: "Cuándo hace falta un quiz — y cuándo no",
      level: 2,
      paras: [
        "Tiene sentido: producto complejo con ramas (reforma, formación, match de servicio), tráfico frío/tibio, segmentación necesaria antes de una llamada. Más débil: compra impulsiva a un precio, audiencia ya en el sitio con intención lista de «comprar X».",
        "Ligado al awareness: una multi-página larga a menudo espera visitantes calientes. Un quiz ayuda a quien aún necesita nombrar el trabajo — y lleva a una solicitud con más suavidad.",
      ],
      lists: [
        {
          intro: "Señales de que vale la pena testear:",
          items: [
            "los clientes tienen muchos tipos de trabajos",
            "los managers gastan tiempo en cualificación de primera línea",
            "drop-offs en un formulario largo",
            "los ads traen tráfico de temperatura mixta",
          ],
        },
      ],
    },
    {
      title: "Algoritmo de build",
      level: 2,
      paras: [
        "Primero el objetivo: oferta personal para demanda madura, o ayuda a elegir para tráfico más frío. El objetivo mueve las preguntas y el finale (precio/paquete vs guía/selección).",
        "Luego: audiencia y ramas → mapa de preguntas → copy y visuales → formulario y consentimiento → integración → tráfico de ads → fixes desde drop-offs por paso.",
      ],
      lists: [
        {
          intro: "Orden práctico:",
          items: [
            "objetivo y métrica (lead, cualificación)",
            "4–8 preguntas sin fluff",
            "un outcome claro antes o justo después de pedir contacto",
            "respuestas pasadas a CRM",
            "A/B de longitud y wording",
          ],
        },
      ],
      notes: [
        {
          title: "Error común",
          text: "Pedir el teléfono en la primera pantalla antes de cualquier valor. Primero utilidad del escenario — luego contacto, si la lógica del funnel lo permite.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Audiencia target",
          href: "/es/blog/tselevaya-auditoriya/",
        },
        {
          label: "USP (propuesta única de venta)",
          href: "/es/blog/utp/",
        },
      ],
    },
    {
      title: "Builder o agencia",
      level: 2,
      paras: [
        "Un builder acelera una hipótesis: un día o dos para un borrador con audiencia clara. Una agencia o build custom — cuando hace falta marca, lógica compleja, cálculos, integraciones y ownership de la conversión de ads.",
        "No hay un absoluto «siempre DIY / siempre contractor». Con un presupuesto de media alto, un quiz malo cuesta más que ahorrar en una plantilla.",
      ],
    },
    {
      title: "Qué vigilar en un quiz efectivo",
      level: 2,
      paras: [
        "Layout móvil, velocidad, outcome honesto, CTA claro, política de datos. Las respuestas deben cambiar el siguiente paso del manager — si no, es una encuesta decorativa.",
        "Puedes embeberlo en un sitio existente o hacer una URL aparte para ads. No generes ofertas conflictivas entre el quiz y el sitio principal.",
      ],
      lists: [
        {
          intro: "Criterios de calidad:",
          items: [
            "las preguntas afectan la oferta",
            "pocos drop-offs a mitad de funnel",
            "leads etiquetados con un segmento",
            "consentimiento de contacto",
            "el outcome prometido encaja con la realidad",
          ],
        },
      ],
    },
  ],
  closing: [
    "Un sitio quiz refuerza el funnel cuando preguntas y outcome se ligan al trabajo del cliente. Arma lógica corta, mide pasos y entrega respuestas a ventas — o se queda en un «juego bonito».",
  ],
};

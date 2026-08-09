import type { BlogPost } from "../../../data/blog";

/** EN overlay for povedencheskie-faktory — same structure as RU JSON. */
export const povedencheskieFaktoryEn: BlogPost = {
  slug: "povedencheskie-faktory",
  title: "Behavioral signals: what to improve without gaming",
  date: "2018-08-23",
  category: "Digital marketing",
  cover: "/images/blog/povedencheskie-faktory/cover-en.webp",
  excerpt:
    "On-site and off-site behavioral signals: bounce, depth, time, snippet CTR; structure, mobile, speed, content, and session replay — without gaming schemes or ranking guarantees.",
  lead: [
    "Behavioral signals show how useful and usable the site and SERP experience are: bounce, pages per session, time, snippet CTR, returns to search.",
    "Below: practical levers for UX and the snippet. Exact weights in algorithms are closed; improve the user experience — don’t buy “behavioral traffic.” Gaming is risky — see a separate piece. Rank growth is planned and isn’t “fixed speed → page one tomorrow.”",
  ],
  faq: [
    {
      q: "Which signals are on-site vs off-site?",
      a: "On-site: bounce, pages/session, time. Off-site: SERP CTR, returns to the SERP. The list is approximate — engines don’t publish a full set.",
    },
    {
      q: "Can I game behavioral signals?",
      a: "Gray schemes exist technically, but they risk filters and lost trust. We don’t give how-tos — only lawful UX.",
    },
    {
      q: "Does speed really matter?",
      a: "Yes for bounce and conversion. For SEO it’s one page-quality signal — not the only one.",
    },
    {
      q: "Why should I use session replay?",
      a: "To see mis-clicks, broken forms, and walls of text. Hypotheses for fixes — not ranking magic.",
    },
    {
      q: "Is snippet CTR a behavioral signal?",
      a: "Often treated as off-site. Title/description and rich results affect the click; a click without a useful page won’t hold.",
    },
    {
      q: "Is a responsive site required?",
      a: "Practically yes: mobile traffic and mobile-first indexing make an awkward phone an expensive fail.",
    },
  ],
  sections: [
    {
      title: "What is measured and where data comes from",
      level: 2,
      paras: [
        "Owners see behavior in analytics tools. Search engines rely on their own interaction signals with the SERP and products — they don’t share details. Don’t build strategy on rumors that “Google bought your analytics.”",
        "Improving behavioral signals usually lifts conversion too: people find the answer and next step easier. That’s worth more than chasing one “time on site” metric.",
      ],
      links: [
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
        {
          label: "Behavioral gaming risks",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "On-site UX: structure, mobile, speed",
      level: 2,
      paras: [
        "Structure and nav: reach what’s needed in few clicks; search and filters on large catalogs. Otherwise bounce rises before the offer.",
        "Responsive and speed are the base. Heavy images, no cache, and broken scripts on mobile kill the session.",
        "Interactive bits (calculators, quizzes) and live contact raise engagement if they don’t block the job. Content — with lists, subheads, readable type, and fitting media, not a wall of text.",
      ],
      lists: [
        {
          intro: "Quick behavioral audit:",
          items: [
            "mobile path on a key page",
            "LCP/bounce on landings",
            "session replay of forms and menus",
            "title relevance to the query and page copy",
          ],
        },
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Snippet, tech, and relevance",
      level: 2,
      paras: [
        "SERP CTR grows from a clear title/description, intent match, and (where it fits) rich results — not from clickbait that disappoints on the page.",
        "Tech errors (broken links, 404s, mixed content) hurt both behavior and trust. Visual design should support reading, not distract.",
        "Page relevance to the keyword set: someone from search should see the answer to the query immediately. Otherwise — back to the SERP, weak off-site signal.",
      ],
      notes: [
        {
          title: "No gaming",
          kind: "tip",
          text: "Any “behavioral boost” services are outside recommendations. Fix UX and the snippet; rankings grow from real usefulness — not from bought signals.",
        },
      ],
      links: [
        {
          label: "Search snippet",
          href: "/en/blog/snippet/",
        },
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
  ],
  closing: [
    "Improve behavioral signals through ease and a clear answer to the query — structure, mobile, speed, snippet, and tech. Don’t buy signals: that’s risk; grow the user experience and measure bounce with conversion together.",
  ],
  related: [
    "otkazy-sayta",
    "nakrutka-pf",
    "snippet",
    "adaptivnyy-sayt",
    "user-intent",
    "seo-struktura-sayta",
  ],
};

/** ES overlay for povedencheskie-faktory — same structure as RU JSON / EN. */
export const povedencheskieFaktoryEs: BlogPost = {
  slug: "povedencheskie-faktory",
  title: "Señales de comportamiento: qué mejorar sin trucos",
  date: "2018-08-23",
  category: "Digital marketing",
  cover: "/images/blog/povedencheskie-faktory/cover.webp",
  excerpt:
    "Señales de comportamiento on-site y off-site: bounce, profundidad, tiempo, CTR del snippet; estructura, móvil, velocidad, contenido y session replay — sin esquemas de gaming ni garantías de ranking.",
  lead: [
    "Las señales de comportamiento muestran cuán útil y usable son el sitio y la experiencia en el SERP: bounce, páginas por sesión, tiempo, CTR del snippet, vueltas a la búsqueda.",
    "Abajo: palancas prácticas para UX y el snippet. Los pesos exactos en los algoritmos están cerrados; mejora la experiencia del usuario — no compres «tráfico de comportamiento». El gaming es riesgoso — ver una pieza aparte. El crecimiento de ranking se planifica y no es «arreglé velocidad → primera página mañana».",
  ],
  faq: [
    {
      q: "¿Qué señales son on-site vs off-site?",
      a: "On-site: bounce, páginas/sesión, tiempo. Off-site: CTR del SERP, vueltas al SERP. La lista es aproximada — los motores no publican el set completo.",
    },
    {
      q: "¿Puedo trucar las señales de comportamiento?",
      a: "Existen esquemas grises en lo técnico, pero arriesgan filtros y pérdida de confianza. No damos how-tos — solo UX lícito.",
    },
    {
      q: "¿La velocidad importa de verdad?",
      a: "Sí para bounce y conversión. Para SEO es una señal de calidad de página — no la única.",
    },
    {
      q: "¿Por qué usar session replay?",
      a: "Para ver mis-clicks, formularios rotos y muros de texto. Hipótesis de arreglo — no magia de ranking.",
    },
    {
      q: "¿El CTR del snippet es una señal de comportamiento?",
      a: "A menudo se trata como off-site. Title/description y rich results afectan el clic; un clic sin página útil no se sostiene.",
    },
    {
      q: "¿Hace falta un sitio responsive?",
      a: "En la práctica sí: el tráfico móvil y la indexación mobile-first hacen de un teléfono torpe un fallo caro.",
    },
  ],
  sections: [
    {
      title: "Qué se mide y de dónde salen los datos",
      level: 2,
      paras: [
        "Los dueños ven el comportamiento en tools de analítica. Los buscadores se apoyan en sus propias señales de interacción con el SERP y productos — no comparten detalles. No armes estrategia sobre rumores de que «Google compró tu analítica».",
        "Mejorar las señales de comportamiento suele subir también la conversión: la gente encuentra la respuesta y el siguiente paso más fácil. Eso vale más que perseguir una sola métrica de «tiempo en el sitio».",
      ],
      links: [
        {
          label: "Tasa de rebote del sitio",
          href: "/es/blog/otkazy-sayta/",
        },
        {
          label: "Riesgos del gaming de comportamiento",
          href: "/es/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "UX on-site: estructura, móvil, velocidad",
      level: 2,
      paras: [
        "Estructura y nav: llega a lo necesario en pocos clics; búsqueda y filtros en catálogos grandes. Si no, el bounce sube antes de la oferta.",
        "Responsive y velocidad son la base. Imágenes pesadas, sin caché y scripts rotos en móvil matan la sesión.",
        "Piezas interactivas (calculadoras, quizzes) y contacto vivo suben el engagement si no bloquean el trabajo. Contenido — con listas, subtítulos, tipografía legible y media que encaje, no un muro de texto.",
      ],
      lists: [
        {
          intro: "Auditoría rápida de comportamiento:",
          items: [
            "camino móvil en una página clave",
            "LCP/bounce en landings",
            "session replay de formularios y menús",
            "relevancia del title a la consulta y al copy de la página",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Estructura SEO del sitio",
          href: "/es/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Snippet, técnica y relevancia",
      level: 2,
      paras: [
        "El CTR del SERP crece con un title/description claros, match de intención y (donde encaje) rich results — no con clickbait que decepciona en la página.",
        "Errores técnicos (enlaces rotos, 404, mixed content) duelen al comportamiento y a la confianza. El diseño visual debe apoyar la lectura, no distraer.",
        "Relevancia de la página al set de keywords: quien llega desde búsqueda debe ver la respuesta a la consulta de inmediato. Si no — vuelta al SERP, señal off-site floja.",
      ],
      notes: [
        {
          title: "Sin gaming",
          kind: "tip",
          text: "Cualquier servicio de «boost de comportamiento» queda fuera de las recomendaciones. Arregla UX y el snippet; el ranking crece desde utilidad real — no desde señales compradas.",
        },
      ],
      links: [
        {
          label: "Snippet de búsqueda",
          href: "/es/blog/snippet/",
        },
        {
          label: "Intención del usuario",
          href: "/es/blog/user-intent/",
        },
      ],
    },
  ],
  closing: [
    "Mejora las señales de comportamiento con facilidad y una respuesta clara a la consulta — estructura, móvil, velocidad, snippet y técnica. No compres señales: eso es riesgo; crece la experiencia del usuario y mide bounce junto con conversión.",
  ],
  related: [
    "otkazy-sayta",
    "nakrutka-pf",
    "snippet",
    "adaptivnyy-sayt",
    "user-intent",
    "seo-struktura-sayta",
  ],
};

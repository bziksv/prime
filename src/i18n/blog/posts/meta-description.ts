import type { BlogPost } from "../../../data/blog";

/** EN overlay for meta-description — same structure as RU JSON. */
export const metaDescriptionEn: BlogPost = {
  slug: "meta-description",
  title: "Meta description tag: why it matters and how it affects SEO",
  date: "2020-02-26",
  category: "SEO",
  cover: "/images/blog/meta-description/cover-en.webp",
  excerpt:
    "What a meta description is, whether it directly affects rankings, how it ties to the snippet and CTR, and how to write it without keyword stuffing or clickbait.",
  lead: [
    "`<meta name=\"description\" content=\"…\">` is a short page summary for search engines and sometimes social. It’s not a secret #1 ranking lever — it’s a candidate for the snippet under the title in results.",
    "Below: direct vs indirect impact, how search picks snippet text, and rules for a good description. We don’t treat old micro-keyword lab tests or a rigid “exactly 240 characters” as law.",
  ],
  faq: [
    {
      q: "Does the meta description directly raise rankings?",
      a: "As a separate scoring factor — there’s no solid case. Content, links, tech, and intent match matter more. Description works via the snippet and clicks.",
    },
    {
      q: "Does search always use my description?",
      a: "No. It may pull a page fragment if that answers the query better. A precise description raises the odds — it doesn’t guarantee.",
    },
    {
      q: "Do I still need meta keywords?",
      a: "For Google and Yandex as a ranking factor — no. Put the effort into title, description, and page text.",
    },
    {
      q: "How long should it be?",
      a: "Aim to fit a typical snippet: meaning in the first ~150–160 characters, no wall of text. Exact truncation varies by device and SERP.",
    },
    {
      q: "How is it different from Open Graph?",
      a: "OG sets social previews separately. Description is mainly for search; some platforms may fall back to it if their own tags are missing.",
    },
  ],
  sections: [
    {
      title: "Direct SEO impact and myths",
      level: 2,
      paras: [
        "Ranking formulas are closed. In practice a keyword stuffed only into description with a weak page won’t move positions. Page content and relevance beat meta fields.",
        "Historical description spam (keyword sheets, text not about the page) taught engines not to trust the tag blindly. Hence the feeling that “description no longer matters” — it matters differently: via the snippet.",
      ],
      lists: [
        {
          intro: "What doesn’t work:",
          items: [
            "keywords only in description with no page text",
            "one description for the whole site",
            "clickbait the page doesn’t deliver",
            "betting on outdated meta keywords",
          ],
        },
      ],
      links: [
        {
          label: "Search snippet",
          href: "/en/blog/snippet/",
        },
        {
          label: "SEO mistakes",
          href: "/en/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Snippet, CTR, and an honest promise",
      level: 2,
      paras: [
        "Under the blue title in results you often see a description. If it’s clear and useful, click chance (CTR) rises at the same position. That’s an indirect effect — not a “raise N spots” button.",
        "A misleading description raises bounce: people click and leave. The snippet promise must match the H1 and first screen.",
        "For social, set Open Graph / Twitter Cards; don’t rely on description as a fallback.",
      ],
      lists: [
        {
          intro: "A good description:",
          items: [
            "unique per URL",
            "reflects intent and page value",
            "keeps meaning at the start of the line",
            "no stuffing or ALL CAPS",
            "a soft CTA when it fits",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t inflate CTR with “shock result” clickbait. A short click plus high bounce hurts more than a dull but honest description.",
        },
      ],
      links: [
        {
          label: "CTR as a factor",
          href: "/en/blog/ctr-faktor-google/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "How to write and where to check",
      level: 2,
      paras: [
        "In the CMS — a separate SEO description field on templates and key landings. Templates with product/city placeholders are fine if the line reads naturally — not “Buy {name} {name} price.”",
        "In Search Console / Webmaster, check how the snippet actually looks for queries. If search substitutes its own fragment — strengthen the relevant paragraph on the page and tighten the description.",
      ],
      lists: [
        {
          intro: "Mini release checklist:",
          items: [
            "unique description exists",
            "not a 1:1 duplicate of the title",
            "no keyword sheet",
            "snippet preview reviewed",
            "the page confirms the text’s promise",
          ],
        },
      ],
    },
  ],
  closing: [
    "Meta description is a snippet and click tool — not a content substitute. Write unique honest descriptions tied to title and page; for rich results and markup — see the snippet piece.",
  ],
  related: [
    "snippet",
    "seo-oshibki",
    "ctr-faktor-google",
    "open-graph",
    "teg-h1",
    "vnutrennie-faktory",
  ],
};

/** ES overlay for meta-description — same structure as RU JSON / EN. */
export const metaDescriptionEs: BlogPost = {
  slug: "meta-description",
  title: "Meta description: por qué importa y cómo afecta al SEO",
  date: "2020-02-26",
  category: "SEO",
  cover: "/images/blog/meta-description/cover-es.webp",
  excerpt:
    "Qué es una meta description, si afecta directamente a los rankings, cómo se liga al snippet y al CTR, y cómo escribirla sin stuffing de keywords ni clickbait.",
  lead: [
    "`<meta name=\"description\" content=\"…\">` es un resumen corto de la página para buscadores y a veces redes. No es una palanca secreta de ranking #1 — es un candidato al snippet bajo el título en resultados.",
    "Abajo: impacto directo vs indirecto, cómo el buscador elige el texto del snippet y reglas para una buena description. No tratamos como ley viejos lab tests de micro-keywords ni un rígido «exactamente 240 caracteres».",
  ],
  faq: [
    {
      q: "¿La meta description sube rankings directamente?",
      a: "Como factor de scoring aparte — no hay un caso sólido. Importan más contenido, enlaces, técnica y encaje con la intención. La description trabaja vía el snippet y los clics.",
    },
    {
      q: "¿El buscador siempre usa mi description?",
      a: "No. Puede sacar un fragmento de la página si eso responde mejor a la consulta. Una description precisa sube las odds — no garantiza.",
    },
    {
      q: "¿Sigo necesitando meta keywords?",
      a: "Para Google y Yandex como factor de ranking — no. Pon el esfuerzo en title, description y texto de la página.",
    },
    {
      q: "¿De qué longitud debería ser?",
      a: "Apunta a caber en un snippet típico: sentido en los primeros ~150–160 caracteres, sin muro de texto. El corte exacto varía por dispositivo y SERP.",
    },
    {
      q: "¿En qué se diferencia de Open Graph?",
      a: "OG fija previews sociales por separado. La description es sobre todo para búsqueda; algunas plataformas pueden caer a ella si faltan sus propios tags.",
    },
  ],
  sections: [
    {
      title: "Impacto SEO directo y mitos",
      level: 2,
      paras: [
        "Las fórmulas de ranking están cerradas. En la práctica una keyword metida solo en la description con una página floja no mueve posiciones. El contenido y la relevancia de la página ganan a los campos meta.",
        "El spam histórico de descriptions (hojas de keywords, texto que no habla de la página) enseñó a los motores a no confiar ciegamente en el tag. De ahí la sensación de que «la description ya no importa» — importa de otra forma: vía el snippet.",
      ],
      lists: [
        {
          intro: "Qué no funciona:",
          items: [
            "keywords solo en la description sin texto en la página",
            "una description para todo el sitio",
            "clickbait que la página no cumple",
            "apostar a meta keywords obsoletas",
          ],
        },
      ],
      links: [
        {
          label: "Snippet de búsqueda",
          href: "/es/blog/snippet/",
        },
        {
          label: "Errores de SEO",
          href: "/es/blog/seo-oshibki/",
        },
      ],
    },
    {
      title: "Snippet, CTR y una promesa honesta",
      level: 2,
      paras: [
        "Bajo el título azul en resultados a menudo ves una description. Si es clara y útil, sube la chance de clic (CTR) en la misma posición. Eso es un efecto indirecto — no un botón de «sube N puestos».",
        "Una description engañosa sube el rebote: la gente hace clic y se va. La promesa del snippet debe casar con el H1 y la primera pantalla.",
        "Para redes, fija Open Graph / Twitter Cards; no cuentes con la description como fallback.",
      ],
      lists: [
        {
          intro: "Una buena description:",
          items: [
            "única por URL",
            "refleja la intención y el valor de la página",
            "mantiene el sentido al inicio de la línea",
            "sin stuffing ni TODO EN MAYÚSCULAS",
            "un CTA suave cuando encaja",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No infles el CTR con clickbait de «resultado shock». Un clic corto más rebote alto perjudica más que una description sosa pero honesta.",
        },
      ],
      links: [
        {
          label: "CTR como factor",
          href: "/blog/ctr-faktor-google/",
        },
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
    {
      title: "Cómo escribirla y dónde revisar",
      level: 2,
      paras: [
        "En el CMS — un campo SEO de description aparte en plantillas y landings clave. Plantillas con placeholders de producto/ciudad están bien si la línea se lee natural — no «Compra {name} {name} precio».",
        "En Search Console / Webmaster, revisa cómo se ve de verdad el snippet para las consultas. Si el buscador sustituye su propio fragmento — refuerza el párrafo relevante en la página y aprieta la description.",
      ],
      lists: [
        {
          intro: "Mini checklist de release:",
          items: [
            "existe description única",
            "no es un duplicado 1:1 del title",
            "sin hoja de keywords",
            "preview del snippet revisado",
            "la página confirma la promesa del texto",
          ],
        },
      ],
    },
  ],
  closing: [
    "La meta description es una herramienta de snippet y clic — no un sustituto del contenido. Escribe descriptions únicas y honestas atadas al title y a la página; para rich results y markup — mira la pieza del snippet.",
  ],
  related: [
    "snippet",
    "seo-oshibki",
    "ctr-faktor-google",
    "open-graph",
    "teg-h1",
    "vnutrennie-faktory",
  ],
};

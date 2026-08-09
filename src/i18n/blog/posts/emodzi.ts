import type { BlogPost } from "../../../data/blog";

/** EN overlay for emodzi — same structure as RU JSON. */
export const emodziEn: BlogPost = {
  slug: "emodzi",
  title: "Emoji in marketing: when they help and when they annoy",
  date: "2020-08-25",
  category: "Content marketing",
  cover: "/images/blog/emodzi/cover-en.webp",
  excerpt:
    "What emoji are and how to use them in posts, chat, and snippets: tone for the audience, measure, and risks — without CTR guarantees or the “Apple only” myth.",
  lead: [
    "Emoji are pictograms in text: emotions, objects, gestures. They speed up reading mood and save words, but they easily turn an offer into visual noise.",
    "Below: why marketing uses them, how to test tone for the audience, and where they fit in social and snippets. We don’t copy other people’s “millions of shares” cases as a guarantee. If you work with Instagram/Facebook, follow Meta’s notice on the page.",
  ],
  faq: [
    {
      q: "Are emoji the same as colon smileys?",
      a: "Smileys like `:-)` are text. Emoji are standardized Unicode symbols; they look a bit different across OSes.",
    },
    {
      q: "Are emoji required in B2B?",
      a: "No. In conservative niches, 0–1 symbol next to a list is enough. Overload annoys a “serious” audience faster than it helps.",
    },
    {
      q: "Do emoji raise search rankings?",
      a: "Not as a ranking factor. Sometimes they affect snippet CTR — and even then not always, not everywhere. Title/Description meaning matters more.",
    },
    {
      q: "How many emoji are normal in one post?",
      a: "Cue: they strengthen structure (list, CTA), not sit after every word. Better A/B on your own audience.",
    },
    {
      q: "Why does someone see a square instead of an icon?",
      a: "An old OS/font doesn’t know the symbol. For critical meanings, duplicate in text.",
    },
  ],
  sections: [
    {
      title: "What they are and where they came from",
      level: 2,
      paras: [
        "Emoji came from Japanese mobile cultures in the 1990s and then entered Unicode — so they don’t live only in one smartphone brand.",
        "References like Emojipedia help check meaning and render variants. For marketing, collecting every glyph matters less than hitting audience tone.",
      ],
    },
    {
      title: "Why marketing uses them",
      level: 2,
      paras: [
        "Scanning: the eye catches list markers and CTAs.",
        "Tone: a softer ask, warmer support reply, clearer status (“ok,” “attention”).",
        "International: some meanings read without translation — but cultural differences remain (gestures, colors).",
      ],
      notes: [
        {
          title: "Measure",
          kind: "tip",
          text: "Emoji don’t replace the offer, facts, and proof. If you remove every symbol and the text falls apart — fix the copy first.",
        },
      ],
    },
    {
      title: "How to start without failing",
      level: 2,
      paras: [
        "Ask: will the audience read the symbol the same way you do? Will the point get lost behind decoration?",
        "Match brand tone: a bank and a kids’ brand tolerate different emoji density.",
        "Check rendering on iOS and Android — especially rare symbols.",
        "Ad accounts and landings sometimes strip emoji or render them oddly — check the preview.",
      ],
      lists: [
        {
          intro: "Mini test before publish:",
          items: [
            "emoji removed — meaning still holds",
            "no more than 1–2 accents per paragraph",
            "no contested gestures or double meanings",
            "CTA reads without the icon",
          ],
        },
      ],
    },
    {
      title: "Where they fit",
      level: 2,
      paras: [
        "Social and Stories: list markers, reactions, a light service tone.",
        "Email and messengers: subject line and first screen — carefully; spam filters and corporate style matter.",
        "Search snippets: a rare CTR experiment. Don’t spam Title with emoji for a click — trust and page match beat a short spike.",
      ],
      notes: [
        {
          title: "No illusions",
          kind: "tip",
          text: "Cases like “they replied with a pizza emoji — and ordered” show a mechanic idea, not a template of “add emoji — grow 10x.”",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Emoji strengthen tone and scanning when the audience accepts them.",
        "Not a ranking factor and not a substitute for strong copy; overload is worse than none.",
      ],
    },
  ],
  closing: [
    "Add one fitting emoji to the CTA or list in the next post and compare replies/saves with a version without it — faster than copying someone else’s “viral” numbers.",
  ],
  related: [
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "seo-kopirayting",
    "nativnaya-reklama",
    "viralnyy-kontent",
    "geymifikatsiya-socseti",
  ],
};

/** ES overlay for emodzi — same structure as RU JSON / EN. */
export const emodziEs: BlogPost = {
  slug: "emodzi",
  title: "Emoji en marketing: cuándo ayudan y cuándo molestan",
  date: "2020-08-25",
  category: "Content marketing",
  cover: "/images/blog/emodzi/cover.webp",
  excerpt:
    "Qué son los emoji y cómo usarlos en posts, chat y snippets: tono para la audiencia, medida y riesgos — sin garantías de CTR ni el mito de «solo Apple».",
  lead: [
    "Los emoji son pictogramas en el texto: emociones, objetos, gestos. Aceleran la lectura del mood y ahorran palabras, pero con facilidad convierten una oferta en ruido visual.",
    "Abajo: por qué el marketing los usa, cómo testear el tono para la audiencia y dónde encajan en redes y snippets. No copiamos casos ajenos de «millones de shares» como garantía. Si trabajas con Instagram/Facebook, sigue el aviso de Meta en la página.",
  ],
  faq: [
    {
      q: "¿Los emoji son lo mismo que los smileys con dos puntos?",
      a: "Smileys como `:-)` son texto. Los emoji son símbolos Unicode estandarizados; se ven un poco distintos entre SO.",
    },
    {
      q: "¿Los emoji son obligatorios en B2B?",
      a: "No. En nichos conservadores basta con 0–1 símbolo junto a una lista. La sobrecarga molesta a una audiencia «seria» más rápido de lo que ayuda.",
    },
    {
      q: "¿Los emoji suben el ranking en búsqueda?",
      a: "No como factor de ranking. A veces afectan el CTR del snippet — y aun así no siempre, no en todas partes. El sentido de Title/Description importa más.",
    },
    {
      q: "¿Cuántos emoji son normales en un post?",
      a: "Pista: refuerzan la estructura (lista, CTA), no van tras cada palabra. Mejor A/B con tu propia audiencia.",
    },
    {
      q: "¿Por qué alguien ve un cuadrado en lugar del icono?",
      a: "Un SO/fuente antiguo no conoce el símbolo. Para significados críticos, duplica en texto.",
    },
  ],
  sections: [
    {
      title: "Qué son y de dónde vienen",
      level: 2,
      paras: [
        "Los emoji vinieron de las culturas móviles japonesas en los 90 y luego entraron en Unicode — así que no viven solo en una marca de smartphone.",
        "Referencias como Emojipedia ayudan a comprobar significado y variantes de render. Para marketing, coleccionar cada glifo importa menos que acertar el tono de la audiencia.",
      ],
    },
    {
      title: "Por qué el marketing los usa",
      level: 2,
      paras: [
        "Escaneo: el ojo captura marcadores de lista y CTAs.",
        "Tono: una petición más suave, una respuesta de soporte más cálida, un status más claro («ok», «attention»).",
        "Internacional: algunos significados se leen sin traducción — pero quedan diferencias culturales (gestos, colores).",
      ],
      notes: [
        {
          title: "Medida",
          kind: "tip",
          text: "Los emoji no sustituyen la oferta, los hechos y la prueba. Si quitas cada símbolo y el texto se cae — arregla el copy primero.",
        },
      ],
    },
    {
      title: "Cómo empezar sin fallar",
      level: 2,
      paras: [
        "Pregunta: ¿la audiencia leerá el símbolo igual que tú? ¿Se perderá el punto detrás de la decoración?",
        "Encaja el tono de marca: un banco y una marca kids toleran distinta densidad de emoji.",
        "Revisa el render en iOS y Android — sobre todo símbolos raros.",
        "Las cuentas de ads y los landings a veces quitan emoji o los renderizan raro — revisa el preview.",
      ],
      lists: [
        {
          intro: "Mini test antes de publicar:",
          items: [
            "emoji quitados — el sentido se sostiene",
            "no más de 1–2 acentos por párrafo",
            "sin gestos controvertidos ni dobles sentidos",
            "el CTA se lee sin el icono",
          ],
        },
      ],
    },
    {
      title: "Dónde encajan",
      level: 2,
      paras: [
        "Redes y Stories: marcadores de lista, reacciones, un tono de servicio ligero.",
        "Email y messengers: subject line y first screen — con cuidado; importan spam filters y estilo corporativo.",
        "Snippets de búsqueda: un experimento raro de CTR. No spamees el Title con emoji por un clic — la confianza y el encaje con la página ganan a un pico corto.",
      ],
      notes: [
        {
          title: "Sin ilusiones",
          kind: "tip",
          text: "Casos como «respondieron con un emoji de pizza — y pidieron» muestran una idea de mecánica, no una plantilla de «añade emoji — crece 10x».",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Los emoji refuerzan tono y escaneo cuando la audiencia los acepta.",
        "No son factor de ranking ni sustituto de un copy fuerte; la sobrecarga es peor que ninguno.",
      ],
    },
  ],
  closing: [
    "Añade un emoji que encaje al CTA o a la lista en el próximo post y compara replies/saves con una versión sin él — más rápido que copiar los números «virales» de otro.",
  ],
  related: [
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "seo-kopirayting",
    "nativnaya-reklama",
    "viralnyy-kontent",
    "geymifikatsiya-socseti",
  ],
};

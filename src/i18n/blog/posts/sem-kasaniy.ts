import type { BlogPost } from "../../../data/blog";

/** EN overlay for sem-kasaniy — same structure as RU JSON. */
export const semKasaniyEn: BlogPost = {
  slug: "sem-kasaniy",
  title: "The 7-touch theory: where and how to reach the audience",
  date: "2019-12-17",
  category: "Digital marketing",
  cover: "/images/blog/sem-kasaniy/cover-en.webp",
  excerpt:
    "Why one channel isn’t enough: a user’s digital day, the 7-touch hypothesis, and how to build a chain of display, search, social, and retarget to a lead — without a magical “exactly seven”.",
  lead: [
    "In a day a person touches dozens of screens: messengers, email, search, video, social, niche sites. Pure search takes a small share of online time — one “perfect” ad is often not enough for an unknown brand to be bought on the first click.",
    "The 7-touch hypothesis says several meaningful interactions are needed before the goal action. It’s a guide, not a law of physics. Below: where to catch attention through the day and how to link channels. Who your audience is belongs in a separate article; here we focus on how to reach them.",
  ],
  faq: [
    {
      q: "Is exactly 7 touches required?",
      a: "No. The number depends on check size, niche, and brand familiarity. What matters is several touches in different contexts — not a ritual of “seven banners”.",
    },
    {
      q: "How does this differ from touchpoints?",
      a: "Touchpoints map every brand contact. The 7-touch theory is the idea that a deal needs repeat contact. They work together.",
    },
    {
      q: "Is search a weak channel?",
      a: "No. Time share in search is small, but intent is high. Search often closes the deal after warming in other channels.",
    },
    {
      q: "Where should I start the channel mix?",
      a: "With offer and tracking: UTMs, goals, retarget segments. Then 2–3 channels for the audience — not “every platform at once”.",
    },
    {
      q: "Do lookalikes work?",
      a: "As an expansion of a warm source audience — yes. As the only channel without offer and landing — rarely.",
    },
    {
      q: "How do I measure synergy?",
      a: "Look at assisted conversions, paths, and CPA before/after the channel mix — not only last click in one account.",
    },
  ],
  sections: [
    {
      title: "Digital day: where people actually are",
      level: 2,
      paras: [
        "Morning — messengers, news, weather on the way. Day — email, work tabs, searching for answers. Evening — social, video, entertainment, niche sites. The picture is averaged: your audience may live differently, but the principle holds — attention is spread thin.",
        "If the brand “lives” in only one channel, you compete for a tiny window. It makes sense to show up where the audience really spends time — with a different message per context, not one banner copy-pasted everywhere.",
      ],
      lists: [
        {
          intro: "Day slices (a guide):",
          items: [
            "morning — short touches, reminder, usefulness",
            "day — search, email, solving a task",
            "evening — content, video, social, comparing options",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Why one touch isn’t enough",
      level: 2,
      paras: [
        "On an unknown site from a cold ad, conversion is usually low: people need to learn the brand, compare, come back. Exceptions — cheap impulse goods and already-formed demand.",
        "Display and content raise awareness; search and retarget more often “close”. Cutting early-funnel spend over a weak last click is a common mistake — see assisted conversions.",
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "The 7-touch hypothesis",
      level: 2,
      paras: [
        "The idea is simple: remind of yourself several times in different environments so that by choice time the brand already feels familiar. Culture likes to illustrate this with movie influence scenes — in marketing, message repetition matters more than theatrics.",
        "A touch isn’t any banner impression in stats — it’s a moment the person noticed the offer or brand: click, video view, save, visit, email. Seven “empty” impressions without attention ≠ seven funnel steps.",
      ],
      lists: [
        {
          intro: "What counts as a touch:",
          items: [
            "display/video impression or click",
            "a social post or ad",
            "email or push with consent",
            "a visit from search / to the site",
            "retarget with a new message",
            "offline: signage, call, store visit",
          ],
        },
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
        {
          label: "Hunt’s hierarchy",
          href: "/en/blog/lestnitsa-hanta/",
        },
      ],
    },
    {
      title: "How to build the chain in practice",
      level: 2,
      paras: [
        "Example logic (not a “copy the budget” template): display/niche sites introduce → social and content deepen interest → near-topic and brand search catch demand → retarget brings back those who left without a lead.",
        "Channel synergy often cuts CPA more than “more money in one account”: queries grow, display gets cheaper on a warmer audience, people start searching the brand themselves. Count the mix, not channels in isolation.",
      ],
      lists: [
        {
          intro: "Launch order:",
          items: [
            "audience portrait and one clear promise",
            "a landing matched to traffic temperature",
            "2–3 channels + retarget",
            "consistent UTMs and goals",
            "test length ≥ decision cycle",
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "We mention social and messengers as channel types. Choosing a specific platform depends on rules and legal limits in your jurisdiction; this material is informational.",
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
      title: "Common mistakes",
      level: 2,
      paras: [
        "The same creative on every step: cold traffic sees “buy now”, warm traffic sees the same again. No buyer exclusions. No bridge to the product after viral reach.",
        "Another mistake — counting any cookie in a segment as a touch. Watch engagement and next steps: visit, lead, repeated brand search.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "the message changes by stage",
            "retarget doesn’t annoy with frequency",
            "people search the brand after campaigns",
            "you don’t cut early-funnel channels on last click alone",
          ],
        },
      ],
    },
  ],
  closing: [
    "7 touches is a useful frame, not dogma. Find where your audience spends the day, build a short channel chain with different messages, and measure synergy — or you’re left hoping for one “magic” click.",
  ],
  related: [
    "tselevaya-auditoriya",
    "tochki-kontakta",
    "lestnitsa-hanta",
    "assotsiirovannye-konversii",
    "istochniki-trafika",
    "retargeting",
  ],
};

/** ES overlay for sem-kasaniy — same structure as RU JSON / EN. */
export const semKasaniyEs: BlogPost = {
  slug: "sem-kasaniy",
  title: "La teoría de los 7 toques: dónde y cómo alcanzar a la audiencia",
  date: "2019-12-17",
  category: "Digital marketing",
  cover: "/images/blog/sem-kasaniy/cover-es.webp",
  excerpt:
    "Por qué un canal no basta: el día digital del usuario, la hipótesis de los 7 toques y cómo armar una cadena de display, búsqueda, social y retarget hacia un lead — sin un mágico «exactamente siete».",
  lead: [
    "En un día una persona toca docenas de pantallas: mensajeros, email, búsqueda, vídeo, redes, sitios de nicho. La búsqueda pura se lleva una cuota pequeña del tiempo online — un ad «perfecto» a menudo no basta para que una marca desconocida se compre al primer clic.",
    "La hipótesis de los 7 toques dice que hacen falta varias interacciones con sentido antes de la acción objetivo. Es una guía, no una ley de la física. Abajo: dónde captar atención a lo largo del día y cómo ligar canales. Quién es tu audiencia pertenece a un artículo aparte; aquí nos centramos en cómo alcanzarla.",
  ],
  faq: [
    {
      q: "¿Hacen falta exactamente 7 toques?",
      a: "No. El número depende del ticket, el nicho y la familiaridad de marca. Lo que importa son varios toques en contextos distintos — no un ritual de «siete banners».",
    },
    {
      q: "¿En qué se diferencia de los touchpoints?",
      a: "Los touchpoints mapean cada contacto de marca. La teoría de los 7 toques es la idea de que un trato necesita contacto repetido. Trabajan juntas.",
    },
    {
      q: "¿La búsqueda es un canal débil?",
      a: "No. La cuota de tiempo en búsqueda es pequeña, pero la intención es alta. La búsqueda a menudo cierra el trato tras el calentamiento en otros canales.",
    },
    {
      q: "¿Por dónde empezar el mix de canales?",
      a: "Por oferta y tracking: UTMs, objetivos, segmentos de retarget. Luego 2–3 canales para la audiencia — no «todas las plataformas a la vez».",
    },
    {
      q: "¿Funcionan los lookalikes?",
      a: "Como expansión de una audiencia fuente cálida — sí. Como único canal sin oferta y landing — rara vez.",
    },
    {
      q: "¿Cómo medir la sinergia?",
      a: "Mira conversiones asistidas, paths y CPA antes/después del mix de canales — no solo last click en una cuenta.",
    },
  ],
  sections: [
    {
      title: "Día digital: dónde está la gente de verdad",
      level: 2,
      paras: [
        "Mañana — mensajeros, noticias, el tiempo de camino. Día — email, tabs de trabajo, buscar respuestas. Tarde — redes, vídeo, entretenimiento, sitios de nicho. El cuadro está promediado: tu audiencia puede vivir distinto, pero el principio se mantiene — la atención está muy repartida.",
        "Si la marca «vive» solo en un canal, compites por una ventana minúscula. Tiene sentido aparecer donde la audiencia de verdad pasa tiempo — con un mensaje distinto por contexto, no un banner copy-pasteado en todas partes.",
      ],
      lists: [
        {
          intro: "Slices del día (una guía):",
          items: [
            "mañana — toques cortos, recordatorio, utilidad",
            "día — búsqueda, email, resolver una tarea",
            "tarde — contenido, vídeo, social, comparar opciones",
          ],
        },
      ],
      links: [
        {
          label: "Audiencia target",
          href: "/es/blog/tselevaya-auditoriya/",
        },
        {
          label: "Fuentes de tráfico",
          href: "/es/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Por qué un toque no basta",
      level: 2,
      paras: [
        "En un sitio desconocido desde un ad frío, la conversión suele ser baja: la gente necesita conocer la marca, comparar, volver. Excepciones — bienes impulsivos baratos y demanda ya formada.",
        "Display y contenido suben awareness; búsqueda y retarget más a menudo «cierran». Cortar el gasto early-funnel por un last click débil es un error habitual — ver conversiones asistidas.",
      ],
      links: [
        {
          label: "Conversiones asistidas",
          href: "/es/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "La hipótesis de los 7 toques",
      level: 2,
      paras: [
        "La idea es simple: recuerda de ti varias veces en entornos distintos para que, a la hora de elegir, la marca ya se sienta familiar. La cultura suele ilustrarlo con escenas de influencia en películas — en marketing, la repetición del mensaje importa más que la teatralidad.",
        "Un toque no es cualquier impresión de banner en stats — es un momento en que la persona notó la oferta o la marca: clic, view de vídeo, save, visita, email. Siete impresiones «vacías» sin atención ≠ siete pasos de funnel.",
      ],
      lists: [
        {
          intro: "Qué cuenta como toque:",
          items: [
            "impresión o clic de display/vídeo",
            "un post o ad social",
            "email o push con consentimiento",
            "una visita desde búsqueda / al sitio",
            "retarget con un mensaje nuevo",
            "offline: señalética, llamada, visita a tienda",
          ],
        },
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/es/blog/tochki-kontakta/",
        },
        {
          label: "Jerarquía de Hunt",
          href: "/es/blog/lestnitsa-hanta/",
        },
      ],
    },
    {
      title: "Cómo armar la cadena en la práctica",
      level: 2,
      paras: [
        "Lógica de ejemplo (no una plantilla de «copia el presupuesto»): display/sitios de nicho introducen → social y contenido profundizan el interés → búsqueda near-topic y de marca captan demanda → retarget trae de vuelta a quien se fue sin lead.",
        "La sinergia de canales a menudo corta el CPA más que «más dinero en una cuenta»: crecen las queries, el display se abarata con audiencia más cálida, la gente empieza a buscar la marca sola. Cuenta el mix, no los canales aislados.",
      ],
      lists: [
        {
          intro: "Orden de lanzamiento:",
          items: [
            "retrato de audiencia y una promesa clara",
            "una landing alineada a la temperatura del tráfico",
            "2–3 canales + retarget",
            "UTMs y objetivos consistentes",
            "duración del test ≥ ciclo de decisión",
          ],
        },
      ],
      notes: [
        {
          title: "Nota",
          kind: "tip",
          text: "Mencionamos redes y mensajeros como tipos de canal. Elegir una plataforma concreta depende de reglas y límites legales en tu jurisdicción; este material es informativo.",
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
      title: "Errores habituales",
      level: 2,
      paras: [
        "El mismo creative en cada paso: el tráfico frío ve «compra ya», el cálido ve lo mismo otra vez. Sin exclusiones de compradores. Sin puente al producto tras un reach viral.",
        "Otro error — contar cualquier cookie en un segmento como toque. Mira engagement y siguientes pasos: visita, lead, búsqueda repetida de marca.",
      ],
      lists: [
        {
          intro: "Revisa:",
          items: [
            "el mensaje cambia por etapa",
            "el retarget no molesta con la frecuencia",
            "la gente busca la marca tras las campañas",
            "no cortas canales early-funnel solo por last click",
          ],
        },
      ],
    },
  ],
  closing: [
    "7 toques es un marco útil, no un dogma. Encuentra dónde tu audiencia pasa el día, arma una cadena corta de canales con mensajes distintos y mide la sinergia — o te quedas esperando un solo clic «mágico».",
  ],
  related: [
    "tselevaya-auditoriya",
    "tochki-kontakta",
    "lestnitsa-hanta",
    "assotsiirovannye-konversii",
    "istochniki-trafika",
    "retargeting",
  ],
};

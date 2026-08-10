import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklama-odnoklassniki — same structure as RU JSON. */
export const reklamaOdnoklassnikiEn: BlogPost = {
  slug: "reklama-odnoklassniki",
  title: "Odnoklassniki ads: audience, formats, and response",
  date: "2020-12-16",
  category: "SMM",
  cover: "/images/blog/reklama-odnoklassniki/cover-en.webp",
  excerpt:
    "Who OK ads fit, what ad tone works, how to think about formats and audience, and how to measure response — without outdated pixels and ad-account screenshots.",
  lead: [
    "Odnoklassniki is its own environment: a different feed mood, different audience habits, and a different response to an offer. Copying creatives “as from VK” one-to-one often fails.",
    "Below: when the channel fits, how to write ads, what to watch in formats and setup, and how to read stats. Account UI and creative rules change — confirm sizes and buttons in current VK Ads / ads-account help.",
  ],
  faq: [
    {
      q: "Who should consider OK ads?",
      a: "More often local and “clear” offers: services, delivery, windows, loans, seasonal goods, events. A complex niche product with no benefit explained usually underperforms.",
    },
    {
      q: "What’s the typical audience age?",
      a: "Older segments are stronger, but it is not “40+ only”. Use your own stats and tests — not meme myths.",
    },
    {
      q: "What should the ad say?",
      a: "Concrete details: price, deadline, geo, promo. Abstract lifestyle with no offer gets fewer qualified responses.",
    },
    {
      q: "Which account should I run ads from?",
      a: "OK ads usually go through the VK Ads ecosystem (historically myTarget and related accounts). Section names change — follow the current UI.",
    },
    {
      q: "Do giveaways work on OK?",
      a: "Reposts and “Class” reactions for a prize drive reach, but often noisy audiences. For sales, offer and landing matter more than virality alone.",
    },
    {
      q: "Which metrics should I track?",
      a: "Impressions, clicks, CTR, visits, leads/purchases, CPA. Likes (“Class”) are secondary when the goal is sales.",
    },
    {
      q: "Can I send traffic to a site?",
      a: "Yes, if platform policy and moderation allow it. For a community, join / message goals are also valid scenarios.",
    },
  ],
  sections: [
    {
      title: "Audience and offer tone",
      level: 2,
      paras: [
        "OK responds well to clear everyday and local offers: discount, delivery, booking, fixed terms. A “conceptual” product with no benefit explained usually loses.",
        "Respect the platform culture: visuals and copy closer to a clear benefit than to trendy performance art. Giveaways create activity — filter whether that audience is the one you need.",
      ],
      lists: [
        {
          intro: "What improves response:",
          items: [
            "a concrete benefit and promo deadline",
            "geo and a clear next step",
            "a readable creative without tiny text",
            "a landing that matches the ad promise",
          ],
        },
      ],
    },
    {
      title: "Ad formats",
      level: 2,
      paras: [
        "In the feed, blocks with headline, text, and image usually work; there are also placements from a community and other account formats. Exact character and pixel limits change — take current specs from help before design.",
        "Build the creative against the account preview: how it looks in the feed, shortened, and on mobile. Don’t rely on sizes from old 2020 guides.",
      ],
      lists: [
        {
          intro: "Before uploading a creative:",
          items: [
            "the offer is readable on a phone",
            "no overload of tiny text on the banner",
            "the link goes where the headline promises",
            "platform rules are followed (including external links and other social networks)",
          ],
        },
      ],
      links: [
        {
          label: "Banner sizes",
          href: "/en/blog/razmery-bannera/",
        },
      ],
    },
    {
      title: "Setup: audience and bid",
      level: 2,
      paras: [
        "After the creative, set audience: geo, age, interests/topics where available. At the start don’t split the target into dozens of narrow intersections without budget to test.",
        "Billing model and bid advice depend on the goal (impressions, clicks, conversions). Move budget after enough stats — not after the first few hours.",
      ],
      lists: [
        {
          intro: "Launch order:",
          items: [
            "goal and landing",
            "ad with a concrete offer",
            "audience and exclusions",
            "budget and cap",
            "pixel/analytics goals if you send traffic to a site",
          ],
        },
      ],
      links: [
        {
          label: "Ad account setup",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "How to read response",
      level: 2,
      paras: [
        "In account stats watch impressions, clicks, CTR, actions (visit, join, comments) — and above all leads/sales from site analytics or CRM.",
        "“Class” reactions and comments are useful interest signals, but for business the cost of a qualified action and lead quality decide.",
      ],
    },
  ],
  closing: [
    "Odnoklassniki ads work on concrete offers and a clear audience. Check formats in the current account; measure success by CPA and leads — not only by “Class” reactions.",
  ],
};

/** ES overlay for reklama-odnoklassniki — same structure as RU JSON / EN. */
export const reklamaOdnoklassnikiEs: BlogPost = {
  slug: "reklama-odnoklassniki",
  title: "Ads en Odnoklassniki: audiencia, formatos y respuesta",
  date: "2020-12-16",
  category: "SMM",
  cover: "/images/blog/reklama-odnoklassniki/cover-es.webp",
  excerpt:
    "A quién encajan los ads de OK, qué tono de anuncio funciona, cómo pensar formatos y audiencia, y cómo medir la respuesta — sin píxeles obsoletos ni capturas del ad account.",
  lead: [
    "Odnoklassniki es un entorno propio: otro ánimo del feed, otros hábitos de audiencia y otra respuesta a la oferta. Copiar creatives «como de VK» uno a uno a menudo falla.",
    "Abajo: cuándo encaja el canal, cómo escribir ads, qué mirar en formatos y setup, y cómo leer stats. La UI de la cuenta y las reglas de creatives cambian — confirma tamaños y botones en la ayuda actual de VK Ads / ad account.",
  ],
  faq: [
    {
      q: "¿Quién debería considerar ads en OK?",
      a: "Más a menudo ofertas locales y «claras»: servicios, delivery, ventanas, préstamos, bienes de temporada, eventos. Un producto de nicho complejo sin beneficio explicado suele rendir peor.",
    },
    {
      q: "¿Cuál es la edad típica de la audiencia?",
      a: "Los segmentos mayores son más fuertes, pero no es «solo 40+». Usa tus propias stats y tests — no mitos de memes.",
    },
    {
      q: "¿Qué debe decir el ad?",
      a: "Detalles concretos: precio, plazo, geo, promo. Lifestyle abstracto sin oferta saca menos respuestas cualificadas.",
    },
    {
      q: "¿Desde qué cuenta lanzo ads?",
      a: "Los ads de OK suelen ir por el ecosistema VK Ads (históricamente myTarget y cuentas relacionadas). Los nombres de secciones cambian — sigue la UI actual.",
    },
    {
      q: "¿Funcionan los sorteos en OK?",
      a: "Reposts y reacciones «Class» por un premio impulsan reach, pero a menudo audiencias ruidosas. Para ventas, oferta y landing importan más que la viralidad sola.",
    },
    {
      q: "¿Qué métricas trackear?",
      a: "Impresiones, clics, CTR, visitas, leads/compras, CPA. Los likes («Class») son secundarios cuando el objetivo son ventas.",
    },
    {
      q: "¿Puedo enviar tráfico a un sitio?",
      a: "Sí, si la política de la plataforma y la moderación lo permiten. Para una comunidad, objetivos de join / mensaje también son escenarios válidos.",
    },
  ],
  sections: [
    {
      title: "Audiencia y tono de la oferta",
      level: 2,
      paras: [
        "OK responde bien a ofertas cotidianas y locales claras: descuento, delivery, reserva, términos fijos. Un producto «conceptual» sin beneficio explicado suele perder.",
        "Respeta la cultura de la plataforma: visual y copy más cerca de un beneficio claro que de performance art de moda. Los sorteos crean actividad — filtra si esa audiencia es la que necesitas.",
      ],
      lists: [
        {
          intro: "Qué mejora la respuesta:",
          items: [
            "un beneficio concreto y plazo de promo",
            "geo y un siguiente paso claro",
            "un creative legible sin texto diminuto",
            "una landing que cumple la promesa del ad",
          ],
        },
      ],
    },
    {
      title: "Formatos de ad",
      level: 2,
      paras: [
        "En el feed suelen funcionar bloques con headline, texto e imagen; también hay placements desde una comunidad y otros formatos de cuenta. Los límites exactos de caracteres y píxeles cambian — toma specs actuales de la ayuda antes de diseñar.",
        "Arma el creative contra el preview de la cuenta: cómo se ve en el feed, acortado y en móvil. No te apoyes en tamaños de guías viejas de 2020.",
      ],
      lists: [
        {
          intro: "Antes de subir un creative:",
          items: [
            "la oferta se lee en un teléfono",
            "sin sobrecarga de texto diminuto en el banner",
            "el enlace va donde promete el headline",
            "se cumplen las reglas de la plataforma (incluidos enlaces externos y otras redes)",
          ],
        },
      ],
      links: [
        {
          label: "Tamaños de banner",
          href: "/es/blog/razmery-bannera/",
        },
      ],
    },
    {
      title: "Setup: audiencia y puja",
      level: 2,
      paras: [
        "Tras el creative, define audiencia: geo, edad, intereses/temas donde existan. Al inicio no partas el target en docenas de intersecciones estrechas sin presupuesto para testear.",
        "El modelo de facturación y el consejo de puja dependen del objetivo (impresiones, clics, conversiones). Mueve presupuesto tras stats suficientes — no tras las primeras horas.",
      ],
      lists: [
        {
          intro: "Orden de lanzamiento:",
          items: [
            "objetivo y landing",
            "ad con oferta concreta",
            "audiencia y exclusiones",
            "presupuesto y tope",
            "objetivos de píxel/analytics si envías tráfico a un sitio",
          ],
        },
      ],
      links: [
        {
          label: "Setup del ad account",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Cómo leer la respuesta",
      level: 2,
      paras: [
        "En las stats de la cuenta mira impresiones, clics, CTR, acciones (visita, join, comentarios) — y sobre todo leads/ventas desde analytics del sitio o CRM.",
        "Las reacciones «Class» y los comentarios son señales útiles de interés, pero para el negocio deciden el coste de una acción cualificada y la calidad del lead.",
      ],
    },
  ],
  closing: [
    "Los ads en Odnoklassniki funcionan con ofertas concretas y una audiencia clara. Revisa formatos en la cuenta actual; mide el éxito por CPA y leads — no solo por reacciones «Class».",
  ],
};

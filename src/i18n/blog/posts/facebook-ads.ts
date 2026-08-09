import type { BlogPost } from "../../../data/blog";

/** EN overlay for facebook-ads — same structure as RU JSON. */
export const facebookAdsEn: BlogPost = {
  slug: "facebook-ads",
  title: "Facebook Ads: how advertising works in the Meta ecosystem",
  date: "2019-02-18",
  category: "Digital marketing",
  cover: "/images/blog/facebook-ads/cover-en.webp",
  excerpt:
    "How Facebook Ads / Meta Ads work: goals, audiences, pixel, and tests. An informational breakdown without “start right now” FOMO and without 2018 reach figures.",
  lead: [
    "Facebook Ads is the historical name for Ads Manager in the Meta ecosystem: ads may show in Facebook, Instagram, and related surfaces (placement set and availability depend on the account, region, and policies).",
    "Below: channel logic — goals, targeting, pixel, formats, and a test checklist. The article is informational and does not urge you to use Meta platforms. We don’t repeat 2017–2018 MAU/DAU figures or “cheap Instagram reach” claims as forever truth: the auction and availability change.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Are Facebook Ads and Meta Ads the same?",
      a: "Essentially an evolution of the product name. Meaning: ad account, campaigns, ad sets, ads, and pixel/events.",
    },
    {
      q: "How is this different from Meta retargeting?",
      a: "This piece is the general channel overview. A separate article covers custom audiences and bringing warm segments back.",
    },
    {
      q: "Do I need a website?",
      a: "For performance with purchase/lead — usually yes. Lead forms and messenger flows exist, but you still need to measure attribution and lead quality.",
    },
    {
      q: "Does it replace search ads?",
      a: "No. Search covers demand that already searches; social ads more often create and warm demand. Compare by CPA/ROI, not habit.",
    },
    {
      q: "Is the pixel mandatory?",
      a: "For optimizing on site events and retargeting visitors — yes. Without it the account learns worse and segments empty out.",
    },
  ],
  sections: [
    {
      title: "What jobs the channel covers",
      level: 2,
      paras: [
        "Typical range: awareness, traffic to site/landing, leads, sales, app installs, community engagement. Campaign objective should match what you can actually process.",
        "Format flexibility doesn’t replace offer and landing. “A beginner can launch” ≠ “you get stable ROI without tests.”",
      ],
      lists: [
        {
          intro: "When it’s worth testing the channel:",
          items: [
            "clear offer and creatives",
            "events/pixel or lead form set up",
            "you can measure CPA/ROI",
            "resource for creative iterations",
            "legal platform limits in your jurisdiction accounted for",
          ],
        },
      ],
      links: [
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Audiences: interests, look-alike, retargeting",
      level: 2,
      paras: [
        "Cold audiences — interests, behavior, demographics (signal set depends on account availability). Look-alike — expansion from a source group: buyers, leads, engaged users.",
        "Warm audiences — retargeting: site, list, engagement. Split segments and exclude overlaps so one bid and one creative don’t hit everyone at once.",
      ],
      lists: [
        {
          intro: "Basic start test:",
          items: [
            "cold: 1–2 interest / look-alike hypotheses",
            "retarget visitors/cart",
            "exclude converters from chase ads",
            "separate creative sets per funnel stage",
          ],
        },
      ],
      links: [
        {
          label: "Meta retargeting",
          href: "/en/blog/retargeting-meta/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Pixel, events, and optimization",
      level: 2,
      paras: [
        "The pixel/events container sends views, leads, purchases. Without correct events, “optimize for conversions” learns on noise — or doesn’t learn at all.",
        "Install the tag once (site or GTM), verify events, align cookie consent where needed. A duplicate pixel breaks stats.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t promise “the system will find conversions by itself” if the event is broken or leads are scarce. Data quality first, then budget.",
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "Creatives and placements",
      level: 2,
      paras: [
        "Creative is the main lever in the attention auction. Test visual + copy + offer bundles; dynamic variants help but don’t replace a strong hypothesis.",
        "Placements (feed, stories, and others) are better started from account recommendations or a narrow set matching creative format. Old 2018 “Stories vs feed” CPM comparisons aren’t law.",
      ],
      lists: [
        {
          intro: "Creative hygiene:",
          items: [
            "promise matches the landing",
            "readable on mobile",
            "frequency cap on warm audiences",
            "refresh when creatives fatigue",
            "UTM for full-funnel analytics",
          ],
        },
      ],
    },
    {
      title: "First-test checklist",
      level: 2,
      paras: [
        "The goal isn’t “learn Ads Manager” — it’s comparable numbers: CPL/CPA, lead quality, payback. Test budget must cover learning and several creatives, or conclusions are random.",
        "In parallel keep control in other channels (search, SEO): one source rarely covers the whole funnel.",
      ],
      lists: [
        {
          intro: "Minimum before launch:",
          items: [
            "pixel/events verified",
            "3 audience types with exclusions",
            "several creatives",
            "landing and offer ready",
            "report on CPA/ROI, not CTR alone",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Full-funnel analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The channel is strong on audience and creative flexibility, weak without events and test discipline. Ignore old “claim the niche before 2020” FOMO.",
        "Measure economics and follow current rules and restrictions — marketing logic doesn’t replace the legal context.",
      ],
    },
  ],
  closing: [
    "If you test ads in the Meta ecosystem — start with the pixel, three audience layers, and several creatives, measure CPA/ROI, and don’t lean on 2018 reach stats.",
  ],
  related: [
    "retargeting-meta",
    "reklama-instagram",
    "reklamnyy-kabinet",
    "tselevaya-auditoriya",
    "utm-metki",
    "skvoznaya-analitika",
  ],
};

/** ES overlay for facebook-ads — same structure as RU JSON / EN. */
export const facebookAdsEs: BlogPost = {
  slug: "facebook-ads",
  title: "Facebook Ads: cómo funciona la publicidad en el ecosistema Meta",
  date: "2019-02-18",
  category: "Digital marketing",
  cover: "/images/blog/facebook-ads/cover.webp",
  excerpt:
    "Cómo funcionan Facebook Ads / Meta Ads: metas, audiencias, píxel y tests. Un desglose informativo sin FOMO de «empieza ya» y sin cifras de reach de 2018.",
  lead: [
    "Facebook Ads es el nombre histórico de Ads Manager en el ecosistema Meta: los ads pueden mostrarse en Facebook, Instagram y superficies relacionadas (el set de placements y la disponibilidad dependen de la cuenta, la región y las políticas).",
    "Abajo: lógica del canal — metas, targeting, píxel, formatos y un checklist de test. El artículo es informativo y no te urge a usar plataformas Meta. No repetimos cifras MAU/DAU de 2017–2018 ni afirmaciones de «reach barato en Instagram» como verdad eterna: la subasta y la disponibilidad cambian.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de las plataformas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Facebook Ads y Meta Ads son lo mismo?",
      a: "En esencia una evolución del nombre del producto. Sentido: cuenta de ads, campañas, ad sets, ads y píxel/eventos.",
    },
    {
      q: "¿En qué se diferencia del retargeting Meta?",
      a: "Esta pieza es el overview general del canal. Un artículo aparte cubre custom audiences y traer de vuelta segmentos cálidos.",
    },
    {
      q: "¿Hace falta un sitio web?",
      a: "Para performance con compra/lead — suele sí. Existen lead forms y flujos de messenger, pero aún hay que medir attribution y calidad del lead.",
    },
    {
      q: "¿Sustituye a los ads de búsqueda?",
      a: "No. La búsqueda cubre demanda que ya busca; los ads social más a menudo crean y calientan demanda. Compara por CPA/ROI, no por hábito.",
    },
    {
      q: "¿El píxel es obligatorio?",
      a: "Para optimizar en eventos del sitio y retargetear visitantes — sí. Sin él la cuenta aprende peor y los segmentos se vacían.",
    },
  ],
  sections: [
    {
      title: "Qué trabajos cubre el canal",
      level: 2,
      paras: [
        "Rango típico: awareness, tráfico a sitio/landing, leads, ventas, installs de app, engagement de comunidad. El objetivo de campaña debe cuadrar con lo que de verdad puedes procesar.",
        "La flexibilidad de formatos no sustituye oferta y landing. «Un principiante puede lanzar» ≠ «obtienes ROI estable sin tests».",
      ],
      lists: [
        {
          intro: "Cuándo vale testar el canal:",
          items: [
            "oferta y creatividades claras",
            "eventos/píxel o lead form montados",
            "puedes medir CPA/ROI",
            "recurso para iteraciones creativas",
            "límites legales de plataforma en tu jurisdicción contabilizados",
          ],
        },
      ],
      links: [
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
        {
          label: "Cuenta de ads",
          href: "/es/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Audiencias: intereses, look-alike, retargeting",
      level: 2,
      paras: [
        "Audiencias frías — intereses, comportamiento, demografía (el set de señales depende de la disponibilidad de la cuenta). Look-alike — expansión desde un grupo fuente: compradores, leads, usuarios engaged.",
        "Audiencias cálidas — retargeting: sitio, lista, engagement. Separa segmentos y excluye overlaps para que una puja y una creatividad no peguen a todos a la vez.",
      ],
      lists: [
        {
          intro: "Test básico de arranque:",
          items: [
            "frío: 1–2 hipótesis de interés / look-alike",
            "retarget visitantes/carrito",
            "excluir converters de ads de chase",
            "sets de creatividades aparte por etapa del funnel",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting Meta",
          href: "/es/blog/retargeting-meta/",
        },
        {
          label: "Audiencia objetivo",
          href: "/es/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Píxel, eventos y optimización",
      level: 2,
      paras: [
        "El contenedor de píxel/eventos envía vistas, leads, compras. Sin eventos correctos, «optimizar por conversiones» aprende sobre ruido — o no aprende en absoluto.",
        "Instala el tag una vez (sitio o GTM), verifica eventos, alinea el consentimiento de cookies donde haga falta. Un píxel duplicado rompe las stats.",
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "No prometas «el sistema hallará conversiones solo» si el evento está roto o los leads escasean. Primero calidad de datos, luego presupuesto.",
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "Creatividades y placements",
      level: 2,
      paras: [
        "La creatividad es la palanca principal en la subasta de atención. Testa bundles de visual + copy + oferta; las variantes dinámicas ayudan pero no sustituyen una hipótesis fuerte.",
        "Los placements (feed, stories y otros) conviene empezar desde recomendaciones de la cuenta o un set estrecho que encaje con el formato creativo. Comparaciones viejas de CPM «Stories vs feed» de 2018 no son ley.",
      ],
      lists: [
        {
          intro: "Higiene creativa:",
          items: [
            "la promesa encaja con la landing",
            "legible en móvil",
            "tope de frecuencia en audiencias cálidas",
            "renovar cuando las creatividades fatigan",
            "UTM para analytics de funnel completo",
          ],
        },
      ],
    },
    {
      title: "Checklist del primer test",
      level: 2,
      paras: [
        "La meta no es «aprender Ads Manager» — son cifras comparables: CPL/CPA, calidad del lead, payback. El presupuesto de test debe cubrir learning y varias creatividades, o las conclusiones son al azar.",
        "En paralelo mantén control en otros canales (búsqueda, SEO): una sola fuente rara vez cubre todo el funnel.",
      ],
      lists: [
        {
          intro: "Mínimo antes del lanzamiento:",
          items: [
            "píxel/eventos verificados",
            "3 tipos de audiencia con exclusiones",
            "varias creatividades",
            "landing y oferta listas",
            "report sobre CPA/ROI, no solo CTR",
          ],
        },
      ],
      links: [
        {
          label: "Etiquetas UTM",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Analytics de funnel completo",
          href: "/es/blog/skvoznaya-analitika/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "El canal es fuerte en flexibilidad de audiencia y creatividad, débil sin eventos y disciplina de test. Ignora el FOMO viejo de «reclama el nicho antes de 2020».",
        "Mide economics y sigue reglas y restricciones actuales — la lógica de marketing no sustituye el contexto legal.",
      ],
    },
  ],
  closing: [
    "Si testas ads en el ecosistema Meta — empieza con el píxel, tres capas de audiencia y varias creatividades, mide CPA/ROI y no te apoyes en stats de reach de 2018.",
  ],
  related: [
    "retargeting-meta",
    "reklama-instagram",
    "reklamnyy-kabinet",
    "tselevaya-auditoriya",
    "utm-metki",
    "skvoznaya-analitika",
  ],
};

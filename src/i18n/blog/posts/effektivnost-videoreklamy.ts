import type { BlogPost } from "../../../data/blog";

/** EN overlay for effektivnost-videoreklamy — same structure as RU JSON. */
export const effektivnostVideoreklamyEn: BlogPost = {
  slug: "effektivnost-videoreklamy",
  title: "How to measure video ad effectiveness: media, brand, and business metrics",
  date: "2019-05-06",
  category: "Digital marketing",
  cover: "/images/blog/effektivnost-videoreklamy/cover-en.webp",
  excerpt:
    "Video ad metrics by layer: impressions and viewability, VTR/CPV, reach and frequency; Brand Lift and surveys; conversions, promo codes, and assisted paths — without worshipping a single CTR.",
  lead: [
    "You can’t honestly judge a video campaign by CTR alone: an impression ≠ a view, a view ≠ brand interest, interest ≠ a sale. The creative’s job (awareness or performance) sets which metrics matter.",
    "Three layers below: media (delivery and attention), marketing (brand perception), business (conversions and sales contribution). CPM figures, Brand Lift thresholds, and survey prices from old guides go stale — check current platform terms; in Russia also factor in which ad accounts are available at launch.",
  ],
  faq: [
    {
      q: "Is CPV enough on its own?",
      a: "No. CPV says what a contact costs — not whether the viewer remembered the brand or bought.",
    },
    {
      q: "What is viewability for video?",
      a: "Roughly: the ad in an active tab, a meaningful share of the player in view, and a minimum play time. Exact thresholds come from the platform — check the account help.",
    },
    {
      q: "Is Brand Lift required?",
      a: "Useful on large brand buys. On small budgets it’s often unavailable or pointless — then watch brand search, direct visits, surveys, and downstream conversions.",
    },
    {
      q: "How do I link video to sales?",
      a: "Conversion tracking in the ad account, UTM + analytics, promo codes in the creative, assisted conversions and (where available) an end-to-end model. Last-click alone often undervalues video.",
    },
    {
      q: "Does a high VTR mean a good campaign?",
      a: "Completion matters, but the viewer may have stayed distracted without skipping. Tie it to brand and the business goal.",
    },
    {
      q: "Can I compare YouTube and Yandex Video Network head-to-head?",
      a: "Carefully: different auctions, formats, and attribution. Compare contribution to your funnel — not “which platform is better in the abstract.”",
    },
  ],
  sections: [
    {
      title: "Media metrics: delivery and attention",
      level: 2,
      paras: [
        "Impressions are the base of billing and scale — not proof the ad was seen. Viewability separates a “counted impression” from a real in-view contact.",
        "VTR (views as a share of impressions) and CPV (cost per view) are solid operational metrics. They don’t replace judging impact on behavior.",
        "Reach and frequency (including unique reach) show how many unique users saw the message and how often. Without enough volume, reach models are unreliable; cookies and cross-device are approximations, not final truth.",
      ],
      lists: [
        {
          intro: "Minimum at the start:",
          items: [
            "campaign goal: brand / traffic / conversion",
            "frequency caps so you don’t burn the audience",
            "reporting on viewability and completions, not clicks only",
            "creative with early brand appearance",
          ],
        },
      ],
      links: [
        {
          label: "Video ads on YouTube",
          href: "/en/blog/videoreklama-youtube/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Marketing metrics: brand and perception",
      level: 2,
      paras: [
        "Brand Lift and similar studies compare awareness, preference, and intent among exposed vs unexposed. Useful on large budgets; launch thresholds and stats windows are set by the platform — confirm what’s current.",
        "“No Lift” often means weak creative: brand late or invisible, little identity, heavy noise from TV or other channels. Fix — earlier logo and message, then frequency and targeting tweaks.",
        "DIY surveys (panel-style tools and peers) cost less than lift studies but separate “exposed” worse. Handy before launch or for hypotheses — not as the campaign’s only KPI.",
      ],
      notes: [
        {
          title: "Tool availability",
          kind: "tip",
          text: "Service names, budget thresholds, and survey prices change. Don’t copy figures from 2019 articles — check account help and the platform manager.",
        },
      ],
    },
    {
      title: "Business metrics: sales contribution",
      level: 2,
      paras: [
        "Conversion tracking in the ad account (click / view / view-through — per platform rules) links video to leads and purchases. Set goals consistently and account for cross-device limits.",
        "A promo code in the creative is a simple way to see direct sales from the spot. Assisted conversions and paths in analytics show where video was a touch — not last-click.",
        "Bottom line: effectiveness = help for the goal. For brand, watch lift and brand search; for performance — CPA/ROAS and lead quality, not a pretty VTR in a vacuum.",
      ],
      lists: [
        {
          intro: "Put in one table:",
          items: [
            "media: reach, frequency, viewability, VTR, CPV",
            "brand: lift / surveys / brand search (if available)",
            "business: conversions, promo codes, assisted paths, ROAS/CPA",
          ],
        },
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
        {
          label: "ROAS",
          href: "/en/blog/roas/",
        },
      ],
    },
  ],
  closing: [
    "Judge video ads in layers: first delivery and attention, then brand, then money. One metric won’t tell the campaign story — build a panel for the creative’s job and keep platform metrics current.",
  ],
  related: [
    "videoreklama-youtube",
    "metriki-reklamy",
    "assotsiirovannye-konversii",
    "roas",
    "audit-reklamnoy-kampanii",
    "aydentika-brenda",
  ],
};

/** ES overlay for effektivnost-videoreklamy — same structure as RU JSON / EN. */
export const effektivnostVideoreklamyEs: BlogPost = {
  slug: "effektivnost-videoreklamy",
  title: "Cómo medir la eficacia de la publicidad en vídeo: métricas de media, marca y negocio",
  date: "2019-05-06",
  category: "Digital marketing",
  cover: "/images/blog/effektivnost-videoreklamy/cover.webp",
  excerpt:
    "Métricas de ads en vídeo por capa: impresiones y viewability, VTR/CPV, reach y frequency; Brand Lift y encuestas; conversiones, códigos promo y caminos asistidos — sin adorar un solo CTR.",
  lead: [
    "No se puede juzgar con honestidad una campaña de vídeo solo por CTR: una impresión ≠ una view, una view ≠ interés de marca, el interés ≠ una venta. El trabajo del creativo (awareness o performance) fija qué métricas importan.",
    "Tres capas abajo: media (entrega y atención), marketing (percepción de marca), negocio (conversiones y aportación a ventas). Las cifras de CPM, umbrales de Brand Lift y precios de encuestas de guías viejas se quedan obsoletas — comprueba términos actuales de la plataforma; en Rusia también cuenta qué cuentas de ads están disponibles al lanzar.",
  ],
  faq: [
    {
      q: "¿Basta el CPV solo?",
      a: "No. El CPV dice cuánto cuesta un contacto — no si el viewer recordó la marca o compró.",
    },
    {
      q: "¿Qué es viewability en vídeo?",
      a: "A grosso modo: el ad en una pestaña activa, una cuota significativa del player a la vista y un tiempo mínimo de play. Los umbrales exactos vienen de la plataforma — mira la ayuda de la cuenta.",
    },
    {
      q: "¿Es obligatorio Brand Lift?",
      a: "Útil en compras grandes de marca. En presupuestos pequeños a menudo no está disponible o no tiene sentido — entonces mira búsqueda de marca, visitas directas, encuestas y conversiones downstream.",
    },
    {
      q: "¿Cómo ligo el vídeo a las ventas?",
      a: "Tracking de conversión en la cuenta de ads, UTM + analytics, códigos promo en el creativo, conversiones asistidas y (donde exista) un modelo de extremo a extremo. Solo last-click a menudo infravalora el vídeo.",
    },
    {
      q: "¿Un VTR alto significa una buena campaña?",
      a: "El completion importa, pero el viewer pudo quedarse distraído sin saltar. Lígala a la marca y a la meta de negocio.",
    },
    {
      q: "¿Puedo comparar YouTube y la red de vídeo de Yandex cara a cara?",
      a: "Con cuidado: subastas, formatos y atribución distintas. Compara la aportación a tu embudo — no «qué plataforma es mejor en abstracto».",
    },
  ],
  sections: [
    {
      title: "Métricas de media: entrega y atención",
      level: 2,
      paras: [
        "Las impresiones son la base de facturación y escala — no prueba de que el ad se vio. La viewability separa una «impresión contada» de un contacto real a la vista.",
        "VTR (views como cuota de impresiones) y CPV (coste por view) son métricas operativas sólidas. No sustituyen juzgar el impacto en el comportamiento.",
        "Reach y frequency (incluido unique reach) muestran cuántos usuarios únicos vieron el mensaje y con qué frecuencia. Sin volumen suficiente, los modelos de reach son poco fiables; cookies y cross-device son aproximaciones, no la verdad final.",
      ],
      lists: [
        {
          intro: "Mínimo al inicio:",
          items: [
            "meta de campaña: marca / tráfico / conversión",
            "caps de frequency para no quemar la audiencia",
            "reporting de viewability y completions, no solo clics",
            "creativo con aparición temprana de marca",
          ],
        },
      ],
      links: [
        {
          label: "Ads en vídeo en YouTube",
          href: "/es/blog/videoreklama-youtube/",
        },
        {
          label: "Métricas de publicidad",
          href: "/es/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Métricas de marketing: marca y percepción",
      level: 2,
      paras: [
        "Brand Lift y estudios similares comparan awareness, preferencia e intent entre expuestos vs no expuestos. Útil en presupuestos grandes; umbrales de lanzamiento y ventanas de stats los fija la plataforma — confirma qué está vigente.",
        "«Sin Lift» a menudo significa creativo débil: marca tarde o invisible, poca identidad, mucho ruido de TV u otros canales. Fix — logo y mensaje más tempranos, luego tweaks de frequency y targeting.",
        "Encuestas DIY (tools tipo panel y pares) cuestan menos que estudios de lift pero separan peor a los «expuestos». Útiles antes del lanzamiento o para hipótesis — no como único KPI de la campaña.",
      ],
      notes: [
        {
          title: "Disponibilidad de tools",
          kind: "tip",
          text: "Nombres de servicios, umbrales de presupuesto y precios de encuestas cambian. No copies cifras de artículos de 2019 — mira la ayuda de la cuenta y al manager de la plataforma.",
        },
      ],
    },
    {
      title: "Métricas de negocio: aportación a ventas",
      level: 2,
      paras: [
        "El tracking de conversión en la cuenta de ads (click / view / view-through — según reglas de la plataforma) liga el vídeo a leads y compras. Fija metas de forma coherente y cuenta los límites cross-device.",
        "Un código promo en el creativo es una forma simple de ver ventas directas del spot. Las conversiones asistidas y los caminos en analytics muestran dónde el vídeo fue un touch — no last-click.",
        "En resumen: eficacia = ayuda a la meta. Para marca, mira lift y búsqueda de marca; para performance — CPA/ROAS y calidad de leads, no un VTR bonito en el vacío.",
      ],
      lists: [
        {
          intro: "Pon en una tabla:",
          items: [
            "media: reach, frequency, viewability, VTR, CPV",
            "marca: lift / encuestas / búsqueda de marca (si hay)",
            "negocio: conversiones, códigos promo, caminos asistidos, ROAS/CPA",
          ],
        },
      ],
      links: [
        {
          label: "Conversiones asistidas",
          href: "/es/blog/assotsiirovannye-konversii/",
        },
        {
          label: "ROAS",
          href: "/es/blog/roas/",
        },
      ],
    },
  ],
  closing: [
    "Juzga los ads en vídeo por capas: primero entrega y atención, luego marca, luego dinero. Una sola métrica no cuenta la historia de la campaña — arma un panel para el trabajo del creativo y mantén al día las métricas de la plataforma.",
  ],
  related: [
    "videoreklama-youtube",
    "metriki-reklamy",
    "assotsiirovannye-konversii",
    "roas",
    "audit-reklamnoy-kampanii",
    "aydentika-brenda",
  ],
};

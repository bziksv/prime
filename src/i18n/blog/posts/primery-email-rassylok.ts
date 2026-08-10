import type { BlogPost } from "../../../data/blog";

/** EN overlay for primery-email-rassylok — same structure as RU JSON. */
export const primeryEmailRassylokEn: BlogPost = {
  slug: "primery-email-rassylok",
  title: "Email newsletter examples: techniques from global brands",
  date: "2020-03-20",
  category: "Email marketing",
  cover: "/images/blog/primery-email-rassylok/cover-en.webp",
  excerpt:
    "What to learn from strong emails: two offers in one letter, a warm welcome, a progress bar, a survey, a reminder, and an honest tone — without copying someone else’s layouts one-to-one.",
  lead: [
    "Subscribers see dozens of emails a week. What stands out isn’t “the prettiest templates,” but clear offers, the right tone, and a clear next step.",
    "Below: techniques from well-known global campaigns (Adobe, 1Password, Carnival, and others) as ideas for your list. Copying another brand’s layout is pointless; transfer the logic to your product and subscriber consent.",
  ],
  faq: [
    {
      q: "Should I repeat other people’s emails?",
      a: "No. Take the principle: structure, tone, CTA. Visuals and offer — yours.",
    },
    {
      q: "Are two offers in one email OK?",
      a: "Yes if the segment isn’t defined yet: compare plans/options and give a choice. Don’t turn the email into a shop window of ten buttons.",
    },
    {
      q: "Can a welcome email use humor?",
      a: "If the brand tone allows it. The main job is to explain account status and what to do next.",
    },
    {
      q: "Does a progress bar in email work?",
      a: "For donations and fundraising goals — yes: it shows “how much is left.” For a regular store, order status is usually a better fit.",
    },
    {
      q: "Is a post-purchase survey required?",
      a: "Not required, but useful: short feedback + a brand reminder. Don’t spam surveys every week.",
    },
    {
      q: "Where can I get ideas legally?",
      a: "Your own A/B tests, competitor emails from public opt-ins, ESP roundups — without scraping someone else’s lists.",
    },
    {
      q: "Is this tied to triggered emails?",
      a: "Many strong emails are triggered: welcome, reminder, survey after an event. See the separate piece.",
    },
  ],
  sections: [
    {
      title: "Choice and comparison in one email",
      level: 2,
      paras: [
        "In one email Adobe put two plans side by side so the user could choose. The technique helps when the segment is still rough or the offer is ambiguous.",
        "Practice: two clear cards, brief differences, one primary CTA per option. No wall of tiny text.",
      ],
    },
    {
      title: "Welcome tone and waiting",
      level: 2,
      paras: [
        "1Password’s welcome set a “homey” tone and explained the pause for account confirmation. The email lowers the anxiety of “why can’t I get in yet.”",
        "Match tone to the brand: irony sounds different at a bank vs a coffee shop. Always say how long to wait and where to write support.",
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Offer creative, progress, and feedback",
      level: 2,
      paras: [
        "Strong emails play with an offer metaphor (like “prices hit rock bottom” for cruises), show a goal meter (fundraising), or ask for a short review after a product experience.",
        "“Open later” reminders and mini-quizzes work if they don’t block the email’s main job and don’t feel like spam games.",
        "Transfer the technique: one clear hook + value + button. Don’t paste someone else’s screenshots into your list as a “ready email.”",
      ],
      lists: [
        {
          intro: "What to put in an email checklist:",
          items: [
            "one main idea in the subject",
            "a clear CTA above the fold",
            "tone = brand",
            "mobile readability",
            "unsubscribe and consent in order",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Brand examples illustrate techniques as of the 2020 publication. Campaigns age; don’t promise the same metrics. Build the list with opt-in only.",
        },
      ],
      links: [
        {
          label: "Emails from social with consent",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  closing: [
    "Break down 2–3 strong third-party emails into a technique (choice, tone, progress, feedback) and run one A/B on your segmented list — so inspiration becomes a result, not a layout copy.",
  ],
  related: [
    "triggernye-rassylki",
    "baza-email-socseti",
    "email-marketing-2020",
    "pochta-dlya-domena",
    "formy-zahvata",
  ],
} as BlogPost;

/** ES overlay for primery-email-rassylok — same structure as RU JSON / EN. */
export const primeryEmailRassylokEs: BlogPost = {
  slug: "primery-email-rassylok",
  title: "Ejemplos de newsletters: técnicas de marcas globales",
  date: "2020-03-20",
  category: "Email marketing",
  cover: "/images/blog/primery-email-rassylok/cover-es.webp",
  excerpt:
    "Qué aprender de emails fuertes: dos ofertas en una carta, un welcome cálido, una barra de progreso, una encuesta, un recordatorio y un tono honesto — sin copiar layouts ajenos uno a uno.",
  lead: [
    "Los suscriptores ven docenas de emails a la semana. Lo que destaca no son «las plantillas más bonitas», sino ofertas claras, el tono adecuado y un siguiente paso claro.",
    "Abajo: técnicas de campañas globales conocidas (Adobe, 1Password, Carnival y otras) como ideas para tu lista. Copiar el layout de otra marca no tiene sentido; traslada la lógica a tu producto y al consentimiento del suscriptor.",
  ],
  faq: [
    {
      q: "¿Debo repetir emails ajenos?",
      a: "No. Quédate con el principio: estructura, tono, CTA. Visuales y oferta — tuyos.",
    },
    {
      q: "¿Dos ofertas en un email están bien?",
      a: "Sí si el segmento aún no está definido: compara planes/opciones y da a elegir. No conviertas el email en un escaparate de diez botones.",
    },
    {
      q: "¿Puede un welcome usar humor?",
      a: "Si el tono de marca lo permite. El trabajo principal es explicar el estado de la cuenta y qué hacer después.",
    },
    {
      q: "¿Funciona una barra de progreso en el email?",
      a: "Para donaciones y metas de fundraising — sí: muestra «cuánto falta». Para una tienda habitual, el estado del pedido suele encajar mejor.",
    },
    {
      q: "¿Hace falta una encuesta post-compra?",
      a: "No es obligatoria, pero útil: feedback corto + recordatorio de marca. No spamees encuestas cada semana.",
    },
    {
      q: "¿Dónde sacar ideas de forma legal?",
      a: "Tus propios A/B, emails de competidores vía opt-ins públicos, roundups de ESP — sin scrapear listas ajenas.",
    },
    {
      q: "¿Esto va ligado a emails disparados?",
      a: "Muchos emails fuertes son triggered: welcome, recordatorio, encuesta tras un evento. Ver la pieza aparte.",
    },
  ],
  sections: [
    {
      title: "Elección y comparación en un email",
      level: 2,
      paras: [
        "En un email Adobe puso dos planes lado a lado para que el usuario eligiera. La técnica ayuda cuando el segmento aún es tosco o la oferta es ambigua.",
        "Práctica: dos cards claras, diferencias breves, un CTA primario por opción. Sin muro de texto diminuto.",
      ],
    },
    {
      title: "Tono de bienvenida y espera",
      level: 2,
      paras: [
        "El welcome de 1Password marcó un tono «de casa» y explicó la pausa por la confirmación de cuenta. El email baja la ansiedad de «por qué aún no puedo entrar».",
        "Ajusta el tono a la marca: la ironía suena distinto en un banco que en una cafetería. Di siempre cuánto esperar y dónde escribir a soporte.",
      ],
      links: [
        {
          label: "Emails disparados (triggered)",
          href: "/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Creatividad de oferta, progreso y feedback",
      level: 2,
      paras: [
        "Los emails fuertes juegan con una metáfora de oferta (como «precios por los suelos» en cruceros), muestran un medidor de meta (fundraising) o piden una reseña corta tras la experiencia con el producto.",
        "Los recordatorios «abre más tarde» y los mini-quizzes funcionan si no bloquean el trabajo principal del email y no parecen juegos de spam.",
        "Traslada la técnica: un gancho claro + valor + botón. No pegues capturas ajenas en tu lista como «email listo».",
      ],
      lists: [
        {
          intro: "Qué poner en el checklist del email:",
          items: [
            "una idea principal en el asunto",
            "un CTA claro above the fold",
            "tono = marca",
            "legibilidad en móvil",
            "baja y consentimiento en orden",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Los ejemplos de marca ilustran técnicas a fecha de la publicación 2020. Las campañas envejecen; no prometas las mismas métricas. Construye la lista solo con opt-in.",
        },
      ],
      links: [
        {
          label: "Emails desde redes con consentimiento",
          href: "/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  closing: [
    "Descompón 2–3 emails ajenos fuertes en una técnica (elección, tono, progreso, feedback) y lanza un A/B en tu lista segmentada — así la inspiración se vuelve resultado, no copia de layout.",
  ],
  related: [
    "pochta-dlya-domena",
    "formy-zahvata",
    "triggernye-rassylki",
    "baza-email-socseti",
    "email-marketing-2020",
  ],
} as BlogPost;

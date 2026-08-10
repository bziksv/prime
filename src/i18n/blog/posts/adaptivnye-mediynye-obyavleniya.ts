import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnye-mediynye-obyavleniya — same structure as RU JSON. */
export const adaptivnyeMediynyeObyavleniyaEn: BlogPost = {
  slug: "adaptivnye-mediynye-obyavleniya",
  title: "Responsive Display Ads in Google Ads: six practices that hold up",
  date: "2018-12-17",
  category: "Paid search",
  cover: "/images/blog/adaptivnye-mediynye-obyavleniya/cover-en.webp",
  excerpt:
    "How to build Responsive Display Ads (RDA) that don’t fall apart: asset ratios, crops, logos, copy, previews, and brand safety — without a fossil CTR table or “upload and forget.”",
  lead: [
    "Responsive Display Ads pull banners and native layouts from your images, logos, headlines, and descriptions. Google Ads mixes those assets to fit Display Network slots.",
    "The product isn’t new, but asset quality still decides whether you look sharp or cropped into nonsense. Below: six practices. Ignore old banner-vs-RDA CTR folklore — measure your account. Current file specs live in Google Ads Help.",
  ],
  faq: [
    {
      q: "Do Responsive Display Ads replace every banner?",
      a: "They often cover most Display reach. Keep fixed banners when brand safety or layout control is non-negotiable.",
    },
    {
      q: "Do you need a designer?",
      a: "For strong frames and logos — yes. Without a real asset set and copy, a perfect one-size PSD still won’t unlock the format.",
    },
    {
      q: "Why does the image look broken on some placements?",
      a: "Different aspect ratios crop differently. Keep the main subject in a safe zone and upload landscape, square, and portrait variants.",
    },
    {
      q: "Is one logo enough?",
      a: "Upload more than one: square and horizontal. Otherwise the mark gets clipped or shrinks into noise on some layouts.",
    },
    {
      q: "Are RDA and Performance Max the same?",
      a: "No. Performance Max spans more channels. RDA is Display creative built from assets; what’s available in the UI keeps evolving.",
    },
  ],
  sections: [
    {
      title: "What the format actually does",
      level: 2,
      paras: [
        "You feed an asset pool; the system combines and scales for placements. More valid assets mean more slots filled without hand-cutting every size.",
        "You still run the show: review previews, pause weak combos, refresh creatives. Dumping a folder of random photos and walking away is how you get weird crops and weak quality scores.",
      ],
      lists: [
        {
          intro: "Minimum kit:",
          items: [
            "several images in different ratios",
            "logos",
            "headlines and long headlines",
            "descriptions",
            "video — when the account allows it and the brief needs it",
          ],
        },
      ],
    },
    {
      title: "1. Framing and scale",
      level: 2,
      paras: [
        "Preview can look bold while the live placement looks tiny or cuts the story. Choose photos where the subject still reads in a thin strip and in a square.",
        "A “safari” shot with ants on the horizon loses to a frame where the animal and the offer sit dead center. Prep two or three meaning variants, not one file.",
      ],
    },
    {
      title: "2. Cover the aspect ratios you care about",
      level: 2,
      paras: [
        "One landscape banner isn’t enough. Add square and portrait within current asset rules — or you’ll leave inventory empty or badly cropped.",
        "Pixel specs change. Check Google Ads Help before upload, not a 2018 screenshot.",
      ],
    },
    {
      title: "3. More than one logo",
      level: 2,
      paras: [
        "Square mark for compact layouts, horizontal lockup for wide ones. Check contrast on light and dark backgrounds.",
        "If the brand guide is strict, stress-test previews: adaptive shouldn’t quietly break protected clear space.",
      ],
    },
    {
      title: "4–5. Copy and previews",
      level: 2,
      paras: [
        "Write several headlines and descriptions at different lengths so the system has something that fits. USP and offer should make sense without the image.",
        "Review combination previews and share the link with the team or client. Catch clipped lines and bad photo–copy pairs before the budget ramps.",
      ],
      lists: [
        {
          intro: "Copy hygiene:",
          items: [
            "no clickbait that lies on the landing page",
            "put the core benefit in the short headline",
            "legal marks when the topic requires them",
            "A/B on meaning, not synonym swaps",
          ],
        },
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "6. Brand safety and topic rules",
      level: 2,
      paras: [
        "When neighborhood and exact layout matter, fixed banners can beat full auto-compose. Use placement exclusions and brand-safety controls on purpose, not as an afterthought.",
        "In regulated niches, required disclaimers eat space — check the layouts. When unsure, don’t chase reach at any cost.",
      ],
      notes: [
        {
          title: "Worth remembering",
          kind: "tip",
          text: "Strong assets + previews + combo monitoring. Skip that, and adaptive only saves designer hours so you can spend them fixing reputation.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "RDA makes Display easier when you feed good frames, logos, and copy — and you actually watch the previews. “RDA always beats banners on CTR” is folklore, not law.",
        "Build the asset set, check combinations, respect brand safety. Then the format accelerates production instead of gambling on crops.",
      ],
    },
  ],
  closing: [
    "Assemble several image ratios, a couple of logos, and copy at different lengths, run previews, then scale spend — Responsive Display Ads surprise you less when the kit is ready first.",
  ],
  related: [
    "strategii-google-ads",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
    "retargeting",
    "videoreklama-youtube",
    "reklamnyy-kabinet",
  ],
};

/** ES overlay for adaptivnye-mediynye-obyavleniya — same structure as RU JSON / EN. */
export const adaptivnyeMediynyeObyavleniyaEs: BlogPost = {
  slug: "adaptivnye-mediynye-obyavleniya",
  title: "Responsive Display Ads en Google Ads: seis prácticas que aguantan",
  date: "2018-12-17",
  category: "Paid search",
  cover: "/images/blog/adaptivnye-mediynye-obyavleniya/cover-es.webp",
  excerpt:
    "Cómo montar Responsive Display Ads (RDA) que no se desarmen: ratios de assets, crops, logos, copy, previews y brand safety — sin una tabla fósil de CTR ni «sube y olvida».",
  lead: [
    "Los Responsive Display Ads arman banners y layouts nativos a partir de tus imágenes, logos, titulares y descripciones. Google Ads mezcla esos assets para encajar en slots de la Display Network.",
    "El producto no es nuevo, pero la calidad de los assets sigue decidiendo si se ve nítido o recortado en absurdo. Abajo: seis prácticas. Ignora el folklore viejo de CTR banner-vs-RDA — mide tu cuenta. Las specs actuales de archivos viven en Google Ads Help.",
  ],
  faq: [
    {
      q: "¿Los Responsive Display Ads sustituyen todos los banners?",
      a: "A menudo cubren la mayor parte del alcance Display. Mantén banners fijos cuando brand safety o el control de layout no son negociables.",
    },
    {
      q: "¿Hace falta diseñador?",
      a: "Para frames y logos fuertes — sí. Sin un set real de assets y copy, un PSD perfecto de un solo tamaño tampoco desbloquea el formato.",
    },
    {
      q: "¿Por qué la imagen se ve rota en algunos placements?",
      a: "Distintos aspect ratios recortan distinto. Mantén el sujeto principal en una zona segura y sube variantes landscape, square y portrait.",
    },
    {
      q: "¿Basta con un logo?",
      a: "Sube más de uno: square y horizontal. Si no, la marca se recorta o se encoge en ruido en algunos layouts.",
    },
    {
      q: "¿RDA y Performance Max son lo mismo?",
      a: "No. Performance Max abarca más canales. RDA es creativo Display armado desde assets; lo disponible en la UI sigue evolucionando.",
    },
  ],
  sections: [
    {
      title: "Qué hace de verdad el formato",
      level: 2,
      paras: [
        "Alimentas un pool de assets; el sistema combina y escala para los placements. Más assets válidos significan más slots llenos sin cortar a mano cada tamaño.",
        "Sigues al mando: revisa previews, pausa combos débiles, refresca creatividades. Tirar una carpeta de fotos al azar y marcharte es cómo salen crops raros y quality scores flojos.",
      ],
      lists: [
        {
          intro: "Kit mínimo:",
          items: [
            "varias imágenes en ratios distintos",
            "logos",
            "titulares y titulares largos",
            "descripciones",
            "vídeo — cuando la cuenta lo permite y el brief lo pide",
          ],
        },
      ],
    },
    {
      title: "1. Encuadre y escala",
      level: 2,
      paras: [
        "El preview puede verse potente mientras el placement en vivo se ve diminuto o corta la historia. Elige fotos donde el sujeto aún se lea en una franja fina y en un square.",
        "Un plano «safari» con hormigas en el horizonte pierde frente a un frame donde el animal y la oferta van al centro. Prepara dos o tres variantes de sentido, no un solo archivo.",
      ],
    },
    {
      title: "2. Cubre los aspect ratios que te importan",
      level: 2,
      paras: [
        "Un banner landscape no basta. Añade square y portrait dentro de las reglas actuales de assets — o dejarás inventario vacío o mal recortado.",
        "Las specs de píxeles cambian. Mira Google Ads Help antes de subir, no un screenshot de 2018.",
      ],
    },
    {
      title: "3. Más de un logo",
      level: 2,
      paras: [
        "Marca square para layouts compactos, lockup horizontal para los anchos. Revisa contraste en fondos claros y oscuros.",
        "Si la guía de marca es estricta, stress-testea los previews: lo adaptativo no debería romper en silencio el clear space protegido.",
      ],
    },
    {
      title: "4–5. Copy y previews",
      level: 2,
      paras: [
        "Escribe varios titulares y descripciones a distintas longitudes para que el sistema tenga algo que encaje. USP y oferta deben tener sentido sin la imagen.",
        "Revisa previews de combinaciones y comparte el enlace con el equipo o el cliente. Caza líneas cortadas y pares foto–copy malos antes de que el presupuesto suba.",
      ],
      lists: [
        {
          intro: "Higiene de copy:",
          items: [
            "nada de clickbait que mienta en la landing",
            "pon el beneficio central en el titular corto",
            "marcas legales cuando el tema lo exija",
            "A/B por sentido, no por sinónimos",
          ],
        },
      ],
      links: [
        {
          label: "Tests A/B de anuncios",
          href: "/es/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "6. Brand safety y reglas de tema",
      level: 2,
      paras: [
        "Cuando el vecindario y el layout exacto importan, los banners fijos pueden ganar al auto-compose pleno. Usa exclusiones de placement y controles de brand safety a propósito, no como ocurrencia.",
        "En nichos regulados, los disclaimers obligatorios comen espacio — revisa los layouts. Si dudas, no persigas alcance a cualquier precio.",
      ],
      notes: [
        {
          title: "Conviene recordar",
          kind: "tip",
          text: "Assets fuertes + previews + monitoreo de combos. Si te lo saltas, lo adaptativo solo ahorra horas de diseñador para gastarlas arreglando reputación.",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "RDA facilita Display cuando alimentas buenos frames, logos y copy — y de verdad miras los previews. «RDA siempre gana a banners en CTR» es folklore, no ley.",
        "Arma el set de assets, revisa combinaciones, respeta brand safety. Entonces el formato acelera producción en vez de apostar a crops.",
      ],
    },
  ],
  closing: [
    "Junta varios ratios de imagen, un par de logos y copy a distintas longitudes, pasa previews y luego escala el gasto — Responsive Display Ads sorprende menos cuando el kit está listo primero.",
  ],
  related: [
    "strategii-google-ads",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
    "retargeting",
    "videoreklama-youtube",
    "reklamnyy-kabinet",
  ],
};

import type { CaseCategoryId } from "../../data/cases";
import type { Locale } from "../locales";

export type CasesCategoryUi = {
  kicker: string;
  casesInSection: string;
  panelTitle: (short: string) => string;
  panelLead: string;
  ctaTitle: (short: string) => string;
  ctaText: string;
  ctaSubmit: string;
  allCases: string;
  pageTitle: (title: string) => string;
  pageDescription: (lead: string, title: string) => string;
  themes: {
    seo: {
      query: string;
      go: string;
      rows: { title: string; sub: string; rank: string }[];
      visibility: string;
      chips: string[];
    };
    ads: {
      badge: string;
      live: string;
      hotLabel: string;
      hotTitle: string;
      hotText: string;
      hotUrl: string;
      netLabel: string;
      netTitle: string;
      netText: string;
      netUrl: string;
      metrics: { value: string; label: string }[];
      chips: string[];
    };
    web: {
      url: string;
      brand: string;
      launch: string;
      hours: string;
      formats: string;
      chips: string[];
    };
    bots: {
      botName: string;
      online: string;
      welcome: string;
      menu: string[];
      out: string;
      ok: string;
      metrics: { value: string; label: string }[];
      chips: string[];
    };
  };
};

const ru: CasesCategoryUi = {
  kicker: "Направление · актуальные кейсы",
  casesInSection: "кейсов в разделе",
  panelTitle: (short) => `Кейсы · ${short}`,
  panelLead: "Свежие результаты по проектам в этом направлении — не архив",
  ctaTitle: (short) => `Обсудим задачу по «${short}»`,
  ctaText:
    "Более 10 лет в интернет-маркетинге — короткий разбор ниши и прогноз по срокам и экономике канала.",
  ctaSubmit: "Оставить заявку",
  allCases: "Все кейсы",
  pageTitle: (title) => `${title} — кейсы ПРАЙМ`,
  pageDescription: (lead, title) =>
    `${lead} Кейсы агентства ПРАЙМ по направлению «${title}».`,
  themes: {
    seo: {
      query: "купить · услуга · город",
      go: "Найти",
      rows: [
        {
          title: "Ваш сайт — в выдаче",
          sub: "prime-client.ru · органика",
          rank: "ТОП-1",
        },
        {
          title: "Коммерческий запрос",
          sub: "рост видимости · +трафик",
          rank: "ТОП-3",
        },
        {
          title: "Информационный кластер",
          sub: "сниппеты · CTR",
          rank: "ТОП-5",
        },
        {
          title: "Локальная выдача",
          sub: "карты · отзывы",
          rank: "ТОП-10",
        },
      ],
      visibility: "Видимость",
      chips: ["оплата за ТОП-10", "позиции", "заявки"],
    },
    ads: {
      badge: "Яндекс Директ",
      live: "в эфире",
      hotLabel: "Реклама",
      hotTitle: "Услуга в вашем городе — запись сегодня",
      hotText:
        "Фикс. цена · выезд · гарантия. Оставьте заявку — перезвоним за 5 минут.",
      hotUrl: "client.ru",
      netLabel: "РСЯ",
      netTitle: "Акция: −20% на первый заказ",
      netText: "Баннер в сетях · ретаргет · смотрим конверсии, не клики.",
      netUrl: "client.ru/promo",
      metrics: [
        { value: "−38%", label: "CPL" },
        { value: "×2.1", label: "звонки" },
        { value: "CRM", label: "связка" },
      ],
      chips: ["поиск", "РСЯ", "коллтрекинг"],
    },
    web: {
      url: "https://ваш-сайт.ru",
      brand: "Brand",
      launch: "мес. запуск",
      hours: "часов разработки",
      formats: "формата сайта",
      chips: ["лендинг", "магазин", "mobile-first"],
    },
    bots: {
      botName: "Ваш бот",
      online: "в сети",
      welcome: "Добро пожаловать — выберите действие",
      menu: ["Запись", "Статус", "Поддержка"],
      out: "Запись на завтра, 18:00",
      ok: "Готово · напоминание придёт сюда",
      metrics: [
        { value: "24/7", label: "в мессенджере" },
        { value: "0", label: "отдельных приложений" },
        { value: "CRM", label: "связка" },
      ],
      chips: ["Telegram", "уведомления", "записи"],
    },
  },
};

const en: CasesCategoryUi = {
  kicker: "Service line · current work",
  casesInSection: "cases in this section",
  panelTitle: (short) => `Work · ${short}`,
  panelLead: "Fresh project results in this line — not an archive",
  ctaTitle: (short) => `Let’s talk about ${short}`,
  ctaText:
    "Over 10 years in digital marketing — a short niche review and a forecast on timelines and channel economics.",
  ctaSubmit: "Talk to us",
  allCases: "All work",
  pageTitle: (title) => `${title} — PRIME case studies`,
  pageDescription: (lead, title) =>
    `${lead} PRIME case studies in ${title}.`,
  themes: {
    seo: {
      query: "buy · service · city",
      go: "Search",
      rows: [
        {
          title: "Your site — in Google",
          sub: "prime-client.com · organic",
          rank: "#1",
        },
        {
          title: "Commercial query",
          sub: "visibility up · +traffic",
          rank: "#3",
        },
        {
          title: "Informational cluster",
          sub: "snippets · CTR",
          rank: "#5",
        },
        {
          title: "Local pack",
          sub: "Maps · reviews",
          rank: "P1",
        },
      ],
      visibility: "Visibility",
      chips: ["pay for page one", "rankings", "leads"],
    },
    ads: {
      badge: "Google Ads",
      live: "live",
      hotLabel: "Ad",
      hotTitle: "Service in your city — book today",
      hotText:
        "Fixed price · on-site · warranty. Leave a request — we’ll call back in 5 minutes.",
      hotUrl: "client.com",
      netLabel: "Display",
      netTitle: "Offer: −20% on the first order",
      netText: "Network banner · retargeting · we watch conversions, not clicks.",
      netUrl: "client.com/promo",
      metrics: [
        { value: "−38%", label: "CPL" },
        { value: "×2.1", label: "calls" },
        { value: "CRM", label: "tied in" },
      ],
      chips: ["search", "display", "call tracking"],
    },
    web: {
      url: "https://your-site.com",
      brand: "Brand",
      launch: "mo. to launch",
      hours: "dev hours",
      formats: "site formats",
      chips: ["landing", "store", "mobile-first"],
    },
    bots: {
      botName: "Your bot",
      online: "online",
      welcome: "Welcome — choose an action",
      menu: ["Book", "Status", "Support"],
      out: "Book for tomorrow, 6:00 pm",
      ok: "Done · a reminder will arrive here",
      metrics: [
        { value: "24/7", label: "in messenger" },
        { value: "0", label: "separate apps" },
        { value: "CRM", label: "tied in" },
      ],
      chips: ["Telegram", "alerts", "bookings"],
    },
  },
};

const es: CasesCategoryUi = {
  kicker: "Línea de servicio · casos actuales",
  casesInSection: "casos en este apartado",
  panelTitle: (short) => `Casos · ${short}`,
  panelLead: "Resultados recientes de proyectos en este apartado — no es un archivo",
  ctaTitle: (short) => `Hablemos de ${short}`,
  ctaText:
    "Más de 10 años en marketing digital — una revisión breve de tu nicho y una previsión de plazos y economía del canal.",
  ctaSubmit: "Escríbenos",
  allCases: "Ver todos los casos",
  pageTitle: (title) => `${title} — casos de éxito de PRIME`,
  pageDescription: (lead, title) =>
    `${lead} Casos de éxito de la agencia PRIME en ${title}.`,
  themes: {
    seo: {
      query: "comprar · servicio · ciudad",
      go: "Buscar",
      rows: [
        {
          title: "Tu sitio — en Google",
          sub: "prime-client.com · orgánico",
          rank: "#1",
        },
        {
          title: "Búsqueda comercial",
          sub: "más visibilidad · +tráfico",
          rank: "#3",
        },
        {
          title: "Clúster informativo",
          sub: "snippets · CTR",
          rank: "#5",
        },
        {
          title: "Paquete local",
          sub: "Maps · reseñas",
          rank: "P1",
        },
      ],
      visibility: "Visibilidad",
      chips: ["pago por primera página", "posiciones", "leads"],
    },
    ads: {
      badge: "Google Ads",
      live: "en directo",
      hotLabel: "Anuncio",
      hotTitle: "Servicio en tu ciudad — reserva hoy",
      hotText:
        "Precio fijo · a domicilio · garantía. Deja tu solicitud — te llamamos en 5 minutos.",
      hotUrl: "client.com",
      netLabel: "Display",
      netTitle: "Oferta: −20% en el primer pedido",
      netText: "Banner en la red de display · retargeting · miramos conversiones, no clics.",
      netUrl: "client.com/promo",
      metrics: [
        { value: "−38%", label: "CPL" },
        { value: "×2.1", label: "llamadas" },
        { value: "CRM", label: "integrado" },
      ],
      chips: ["búsqueda", "display", "seguimiento de llamadas"],
    },
    web: {
      url: "https://tu-sitio.com",
      brand: "Marca",
      launch: "meses de lanzamiento",
      hours: "horas de desarrollo",
      formats: "formatos de sitio",
      chips: ["landing", "tienda", "mobile-first"],
    },
    bots: {
      botName: "Tu bot",
      online: "en línea",
      welcome: "Bienvenido — elige una opción",
      menu: ["Reservar", "Estado", "Soporte"],
      out: "Reserva para mañana, 18:00",
      ok: "Listo · aquí llegará un recordatorio",
      metrics: [
        { value: "24/7", label: "en el mensajero" },
        { value: "0", label: "apps aparte" },
        { value: "CRM", label: "integrado" },
      ],
      chips: ["Telegram", "avisos", "reservas"],
    },
  },
};

export function getCasesCategoryUi(locale: Locale): CasesCategoryUi {
  if (locale === "en") return en;
  if (locale === "es") return es;
  return ru;
}

export function isCaseCategoryId(id: string): id is CaseCategoryId {
  return id === "seo" || id === "ads" || id === "web" || id === "bots";
}

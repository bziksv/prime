/** Кейсы ПРАЙМ: категории + детальные карточки */

export type CaseCategoryId = "seo" | "ads" | "web";

export type CaseCategory = {
  id: CaseCategoryId;
  slug: CaseCategoryId;
  title: string;
  short: string;
  lead: string;
  accent: string;
};

export type CaseStudy = {
  slug: string;
  category: CaseCategoryId;
  title: string;
  client: string;
  industry: string;
  location: string;
  period: string;
  metric: string;
  metricLabel: string;
  summary: string;
  cover: string;
  coverAlt: string;
  services: string[];
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  featured?: boolean;
  /** Развёрнутый кейс (с боевого сайта) */
  intro?: string;
  siteUrl?: string;
  pains?: { title: string; text: string }[];
  gallery?: { src: string; alt: string; caption?: string }[];
  sections?: { title: string; body: string; image?: string }[];
  highlights?: string[];
  ctaTitle?: string;
  ctaText?: string;
};

export const caseCategories: CaseCategory[] = [
  {
    id: "seo",
    slug: "seo",
    title: "SEO продвижение",
    short: "SEO",
    lead: "Позиции, трафик и заявки с оплатой по факту ТОП-10.",
    accent: "#20b8d0",
  },
  {
    id: "ads",
    slug: "ads",
    title: "Контекстная реклама",
    short: "Директ",
    lead: "Директ и сети: ниже CPL, выше звонки, связка с CRM.",
    accent: "#f09830",
  },
  {
    id: "web",
    slug: "web",
    title: "Разработка сайтов",
    short: "Сайты",
    lead: "Коммерческие сайты и магазины под заявки и продажи.",
    accent: "#b8d050",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "proizvodstvo-seo",
    category: "seo",
    title: "Производство: SEO с оплатой по факту",
    client: "Промышленный поставщик",
    industry: "Производство",
    location: "Россия",
    period: "5 месяцев",
    metric: "+42%",
    metricLabel: "заявок из поиска",
    summary:
      "Вывели коммерческие запросы в ТОП-10 и связали отчётность с CRM — рост заявок без абонентской «воды».",
    cover:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Производственный цех",
    services: ["SEO", "Аналитика", "Контент"],
    challenge:
      "Сайт был в индексе, но коммерция почти не давала лидов: размытое семантическое ядро, слабые посадочные и отчёты без связи с заявками.",
    approach: [
      "Аудит и фиксация KPI: список фраз под оплату по факту ТОП-10",
      "Пересборка структуры и коммерческих лендингов под интент",
      "Технический SEO + контент под кластеры",
      "Сквозная аналитика: позиция → сессия → заявка в CRM",
    ],
    results: [
      { label: "Заявки", value: "+42%" },
      { label: "Фразы в ТОП-10", value: "80+" },
      { label: "CPL", value: "−19%" },
      { label: "Срок", value: "5 мес." },
    ],
    quote: {
      text: "Платим только за фразы в ТОП-10 — отчёты совпадают с заявками.",
      author: "Алексей К.",
      role: "Директор",
    },
    featured: true,
  },
  {
    slug: "kabelmontazh",
    category: "seo",
    title: "КабельМонтаж — рост видимости B2B",
    client: "КабельМонтаж",
    industry: "Строительство / поставки",
    location: "Воронеж",
    period: "4 месяца",
    metric: "×2.1",
    metricLabel: "органика",
    summary:
      "Собрали ядро под B2B-запросы, усилили карточки услуг и вывели региональные коммерческие фразы.",
    cover:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Строительная площадка",
    services: ["SEO", "Контент"],
    challenge:
      "Узкая B2B-ниша: мало частотных запросов, сильные федеральные конкуренты, слабая перелинковка услуг.",
    approach: [
      "Кластеризация низкочастотных коммерческих запросов",
      "Шаблоны посадочных под направления монтажа",
      "Региональные посадочные и сниппеты",
      "Ежемесячный отчёт по фразам и лидам",
    ],
    results: [
      { label: "Органика", value: "×2.1" },
      { label: "ТОП-10", value: "+34 фразы" },
      { label: "Лиды", value: "+27%" },
      { label: "Срок", value: "4 мес." },
    ],
  },
  {
    slug: "motorland-kuzov",
    category: "seo",
    title: "Кузовной цех Мотор Ленд",
    client: "Мотор Ленд",
    industry: "Автосервис",
    location: "Воронеж",
    period: "6 месяцев",
    metric: "+58%",
    metricLabel: "звонков",
    summary:
      "Локальное SEO и посадочные под кузовной ремонт — рост звонков с карты и поиска.",
    cover:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Автомобиль",
    services: ["SEO", "Локальное продвижение"],
    challenge:
      "Сильная конкуренция автосервисов в городе, разрозненные страницы услуг и слабые карточки на картах.",
    approach: [
      "Отдельные посадочные под кузовные услуги",
      "Оптимизация Яндекс/Google Карт и отзывов",
      "Локальные сниппеты и микроразметка",
      "Связка звонков с отчётом по фразам",
    ],
    results: [
      { label: "Звонки", value: "+58%" },
      { label: "Карты", value: "ТОП локально" },
      { label: "Видимость", value: "+41%" },
      { label: "Срок", value: "6 мес." },
    ],
  },
  {
    slug: "b2c-direct-crm",
    category: "ads",
    title: "Услуги B2C: Директ + CRM",
    client: "Сеть услуг",
    industry: "Услуги B2C",
    location: "Россия",
    period: "3 месяца",
    metric: "−28%",
    metricLabel: "CPL",
    summary:
      "Пересобрали кампании и минус-слова, подключили цену звонка в CRM — CPL вниз при том же бюджете.",
    cover:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Аналитика рекламы",
    services: ["Директ", "CRM", "Аналитика"],
    challenge:
      "Бюджет сжигался на широких запросах, цена лида росла, а в CRM не было понятной экономики канала.",
    approach: [
      "Реструктура кампаний по интенту и гео",
      "Жёсткая минусация и чистка площадок",
      "Сквозная связка: клик → звонок → CRM",
      "Еженедельная оптимизация по CPL и качеству лидов",
    ],
    results: [
      { label: "CPL", value: "−28%" },
      { label: "Звонки", value: "+16%" },
      { label: "Бюджет", value: "тот же" },
      { label: "Срок", value: "3 мес." },
    ],
    quote: {
      text: "Снизили CPL без сокращения бюджета. Видим цену звонка в CRM.",
      author: "Марина С.",
      role: "Маркетинг",
    },
    featured: true,
  },
  {
    slug: "fortuna-avto",
    category: "ads",
    title: "Фортуна-авто — контекст для автосервиса",
    client: "Фортуна-авто",
    industry: "Автосервис",
    location: "Белгород",
    period: "2 месяца",
    metric: "−34%",
    metricLabel: "цена звонка",
    summary:
      "Запустили Директ под ремонт и ТО: быстрые звонки и контроль цены обращения.",
    cover:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Автосервис",
    services: ["Директ", "Коллтрекинг"],
    challenge:
      "Нужен был поток звонков в сезон без раздувания бюджета на нецелевые клики.",
    approach: [
      "Кампании по услугам: ТО, ремонт, диагностика",
      "Расписания показов и георадиус",
      "Коллтрекинг и отсев нецелевых",
      "Креативы под срочный ремонт",
    ],
    results: [
      { label: "Цена звонка", value: "−34%" },
      { label: "Звонки / нед.", value: "+22" },
      { label: "CTR", value: "+1.8 п.п." },
      { label: "Срок", value: "2 мес." },
    ],
  },
  {
    slug: "ecom-feeds",
    category: "ads",
    title: "E-commerce: фиды и ретаргет",
    client: "Интернет-магазин",
    industry: "E-commerce",
    location: "Россия",
    period: "1 квартал",
    metric: "+18%",
    metricLabel: "ROI",
    summary:
      "Настроили товарные кампании, фиды и ретаргет — рост ROI к прошлому кварталу.",
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Интернет-магазин",
    services: ["Директ", "Фиды", "Ретаргет"],
    challenge:
      "Товарка давала трафик, но ROI падал из‑за слабых фидов и широкого ретаргета.",
    approach: [
      "Чистка и обогащение фидов",
      "Сегменты ретаргета по воронке",
      "Минус нерентабельных SKU",
      "Отчёт ROI по категориям",
    ],
    results: [
      { label: "ROI", value: "+18%" },
      { label: "ДРР", value: "−12%" },
      { label: "Заказы", value: "+9%" },
      { label: "Срок", value: "1 кв." },
    ],
  },
  {
    slug: "insortex",
    category: "web",
    title: "Разработка сайта insortex.ru",
    client: "Инсортекс",
    industry: "Сортировочное оборудование",
    location: "Россия",
    period: "1,5 месяца",
    metric: "1,5 мес.",
    metricLabel: "от нуля до запуска",
    summary:
      "Сайт с нуля для поставщика сортировочного оборудования: B2B-структура, каталог, кастомные блоки и задел под SEO.",
    cover: "https://prime-ltd.su/wp-content/uploads/2026/06/main-1.jpg",
    coverAlt: "Главная страница insortex.ru",
    services: ["Разработка", "UX", "SEO"],
    siteUrl: "https://insortex.ru",
    intro:
      "Инсортекс — молодая компания, которая поставляет современное сортировочное оборудование для промышленности. Клиент обратился за созданием и продвижением сайта с нуля: нужно было быстро получить лицо бренда в сети и канал заявок.",
    challenge:
      "Не было макета дизайнера, мало исходной информации о продуктах, а возможностей конструктора не хватало для уникальных блоков.",
    pains: [
      {
        title: "Отсутствие макета",
        text: "Сайт собирали с нуля без готового дизайна: проанализировали конкурентов и собрали уникальный визуальный язык на фирменных цветах.",
      },
      {
        title: "Минимум информации",
        text: "На старте почти не было текстов и описаний оборудования — главную собирали с заглушками и наполняли после утверждения структуры.",
      },
      {
        title: "Лимиты конструктора",
        text: "Ranx Creator закрывал базовые задачи, но сложные блоки — видео-плитка, кастомные секции — делали на чистом HTML/CSS/JS.",
      },
    ],
    approach: [
      "Сборка на Ranx Creator с кастомизацией под брендбук",
      "B2B-структура: каталог, лид-магниты, FAQ, экспертный контент",
      "Карточки товаров с гибкими характеристиками",
      "Страница оформления заказа вместо стандартной корзины",
      "Мультирегиональность и блок доверия",
    ],
    sections: [
      {
        title: "Главная как лицо бренда",
        body: "На главную ушло больше всего времени: нужно было выделиться среди конкурентов. Фирменные цвета, продуманная B2B-структура, лид-магниты, блок доверия и масштабирования, мультирегиональность, FAQ и экспертный контент.",
        image: "https://prime-ltd.su/wp-content/uploads/2026/06/main-2.jpg",
      },
      {
        title: "Видео и контент",
        body: "Встроенного полноэкранного видео не хватало — сделали аккуратную плитку на fancybox с обложками и play. Новости разделили на новости компании и полезные материалы: у поставщика оборудования есть чем делиться с рынком.",
        image: "https://prime-ltd.su/wp-content/uploads/2026/06/video.jpg",
      },
      {
        title: "Каталог и портфолио",
        body: "Каталог и портфолио собрали так, чтобы B2B-клиент быстро находил оборудование и кейсы применения — без лишних кликов до заявки.",
        image: "https://prime-ltd.su/wp-content/uploads/2026/06/catalog.jpg",
      },
    ],
    gallery: [
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/main-3.jpg",
        alt: "Экран главной Insortex",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/main-4.jpg",
        alt: "Блок доверия",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/main-5.jpg",
        alt: "Секция услуг",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/news.jpg",
        alt: "Раздел новостей",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/portfolio.jpg",
        alt: "Портфолио",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2026/06/catalog.jpg",
        alt: "Каталог",
      },
    ],
    highlights: [
      "Сайт с нуля запущен за 1,5 месяца",
      "Дизайн кастомизирован под брендбук",
      "Гибкие карточки товаров с характеристиками",
      "Отдельная страница оформления заказа",
      "Кастомные HTML/CSS-блоки там, где конструктора не хватило",
      "Соответствие требованиям законодательства",
      "Дальнейшее SEO и техподдержка в пакете",
    ],
    results: [
      { label: "Срок запуска", value: "1,5 мес." },
      { label: "Стек", value: "Ranx +" },
      { label: "Канал", value: "B2B" },
      { label: "Дальше", value: "SEO" },
    ],
    ctaTitle: "Нужен сайт?",
    ctaText: "Доверьте создание нашим специалистам — от лендинга до каталога с заявками.",
    featured: true,
  },
  {
    slug: "almamed",
    category: "web",
    title: "Доработка интернет-магазина «Альмамед»",
    client: "Альмамед",
    industry: "Медицинская техника",
    location: "Россия",
    period: "по сей день",
    metric: "UX+",
    metricLabel: "магазин медтехники",
    summary:
      "Переработали шаблон Webasyst: карточки, поиск, меню, доставка, фильтры и бекенд — чтобы покупатель быстрее находил технику и оформлял заказ.",
    cover: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_-1.png",
    coverAlt: "Интернет-магазин Альмамед",
    services: ["Доработка", "E-commerce", "UX"],
    siteUrl: "https://almamed.su",
    intro:
      "Альмамед — поставщик медицинской техники от разных производителей по всей России. Компания зарекомендовала себя как надёжный бизнес-партнёр: прямые контракты с производителями и широкий ассортимент. Сайт изначально собрали на шаблоне Webasyst «Выгодная покупка» — база хорошая, но UX мешал продажам.",
    challenge:
      "Неинформативные карточки, неудобный поиск и хаотичное расположение элементов шаблона — пользователь терялся до заказа.",
    pains: [
      {
        title: "Неинформативные карточки",
        text: "В карточке не хватало артикула, понятных характеристик и быстрых действий — сложно сравнивать позиции медтехники.",
      },
      {
        title: "Неудобный поиск",
        text: "Поиск и навигация по категориям не закрывали сценарии B2B и розницы: долгий путь до нужного прибора.",
      },
      {
        title: "Хаос в интерфейсе",
        text: "Элементы шаблона были расположены неудобно: телефон, корзина, доставка и фильтры «прятались» от покупателя.",
      },
    ],
    approach: [
      "Переработка структуры и внешнего вида меню",
      "Плавающая шапка: телефон, кабинет, корзина, поиск, доставка",
      "Lazy Load для ускорения и снижения отказов",
      "Новые карточки с артикулом, стикерами и видами вывода",
      "Фильтры в категориях и блок «Распродажа»",
      "Страница доставки с расчётом стоимости по регионам",
      "Бекенд-фильтры: без бренда / категории / описания",
    ],
    sections: [
      {
        title: "Структура и плавающее меню",
        body: "Сразу переработали структуру: расположение пунктов меню и их вид. Сделали плавающую шапку с телефоном, личным кабинетом, корзиной, поиском и информацией о доставке — всё важное всегда под рукой.",
        image: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_-2.png",
      },
      {
        title: "Скорость и Lazy Load",
        body: "Картинки грузятся по мере прокрутки. Это ускорило страницы и снизило процент отказов — критично для каталога с тяжёлыми фото товаров.",
        image: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_iPad-1.png",
      },
      {
        title: "Доставка и распродажа",
        body: "Страницу доставки сделали максимально информативной и интегрировали расчёт стоимости по регионам. В блоке «Распродажа» собрали все товары со скидкой.",
        image:
          "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_dostavka_i_oplata_.png",
      },
      {
        title: "Карточки и категории",
        body: "Карточки стали информативнее: артикул, стикеры, несколько вариантов вывода. В категориях — удобный фильтр. Под товаром — ответственный менеджер с фото и контактами.",
        image:
          "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_product_termometr-beskontaktnyy-infrakrasnyy-nc-9900_iPad.png",
      },
      {
        title: "Изменения в бекенде",
        body: "Добавили фильтры для сортировки товаров без бренда, категории и описания. К каждой позиции можно привязать несколько групп рекомендуемых товаров — плиткой, списком или простым списком. Работы по улучшению магазина ведутся до сих пор.",
        image: "https://prime-ltd.su/wp-content/uploads/2021/02/1-2.png",
      },
    ],
    gallery: [
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/377b9da69b.jpg",
        alt: "Шаблон до доработки",
        caption: "Как выглядел шаблон",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_-1.png",
        alt: "Сайт после доработки — десктоп",
        caption: "Итог на компьютере",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_iPhone-6_7_8-1.png",
        alt: "Мобильная версия",
        caption: "С мобильных",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_category_lor-oborudovanie-instrumenty_iPhone-6_7_8.png",
        alt: "Категория на мобильном",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_category_rasprodazha_.png",
        alt: "Блок распродажи",
      },
      {
        src: "https://prime-ltd.su/wp-content/uploads/2021/02/almamed.su_product_pulsoksimetr-md300m-choicemmed-kitay_.png",
        alt: "Карточка товара",
      },
    ],
    highlights: [
      "Плавающее меню с ключевыми действиями",
      "Информативные карточки с артикулом и стикерами",
      "Фильтры в каталоге и умный бекенд",
      "Расчёт доставки по регионам",
      "Lazy Load и быстрее загрузка",
      "Постоянные доработки по сей день",
    ],
    results: [
      { label: "Платформа", value: "Webasyst" },
      { label: "Фокус", value: "UX" },
      { label: "Каталог", value: "фильтры" },
      { label: "Статус", value: "support" },
    ],
    ctaTitle: "Нужен интернет-магазин или доработка?",
    ctaText: "Пересоберём каталог, карточки и путь к заказу — под вашу нишу и CRM.",
  },
  {
    slug: "b2b-landing-seo",
    category: "web",
    title: "B2B: лендинг и SEO с нуля",
    client: "B2B-услуги",
    industry: "Бизнес / B2B",
    location: "Россия",
    period: "3 месяца",
    metric: "3 мес.",
    metricLabel: "до первых лидов",
    summary:
      "Запустили лендинг и SEO с нуля — первые лиды на третий месяц.",
    cover:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Команда за работой",
    services: ["Разработка", "SEO"],
    challenge:
      "Новый бренд без сайта и истории в поиске — нужен быстрый старт лидогенерации.",
    approach: [
      "Лендинг под офер и заявку",
      "Базовый технический SEO и семантика",
      "Контент под 2–3 кластера",
      "Отчёт по первым лидам и качеству",
    ],
    results: [
      { label: "Первые лиды", value: "3-й мес." },
      { label: "Заявки / мес.", value: "12+" },
      { label: "Индекс", value: "100%" },
      { label: "Срок", value: "3 мес." },
    ],
    quote: {
      text: "Запустили сайт и SEO с нуля — лиды пошли на третий месяц.",
      author: "Игорь В.",
      role: "Владелец",
    },
  },
];

export function getCategory(id: string) {
  return caseCategories.find((c) => c.id === id || c.slug === id);
}

export function getCasesByCategory(id: CaseCategoryId) {
  return caseStudies.filter((c) => c.category === id);
}

export function getCase(category: string, slug: string) {
  return caseStudies.find((c) => c.category === category && c.slug === slug);
}

export function getRelatedCases(current: CaseStudy, limit = 3) {
  const same = caseStudies.filter(
    (c) => c.category === current.category && c.slug !== current.slug,
  );
  const rest = caseStudies.filter(
    (c) => c.category !== current.category && c.slug !== current.slug,
  );
  return [...same, ...rest].slice(0, limit);
}

export function casePath(c: CaseStudy) {
  return `/keysy/${c.category}/${c.slug}/`;
}

export function categoryPath(id: CaseCategoryId) {
  return `/keysy/${id}/`;
}

/** Совместимость с превью на главной */
export function casesForHome() {
  return caseStudies.filter((c) => c.featured).slice(0, 4);
}

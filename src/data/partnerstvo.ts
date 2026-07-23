/** Контент страницы партнёрства — на базе prime-ltd.su/partnerstvo */
export const partnerBenefits = [
  {
    title: "Любим своё дело",
    text: "Не «ещё одно агентство», а команда, которая живёт интернет-маркетингом и показывает это в цифрах.",
    tone: "p",
  },
  {
    title: "Ответственность за проект",
    text: "Берём клиента в работу полностью: от первого созвона до ежемесячных отчётов и выплат.",
    tone: "r",
  },
  {
    title: "Гордимся результатами",
    text: "Кейсы не прячем. Позиции, заявки, CPL — всё на виду, чтобы вам было легко рекомендовать нас.",
    tone: "m",
  },
  {
    title: "Делимся экспертизой",
    text: "Новости и практика SEO, рекламы и аналитики — чтобы вы всегда были в курсе рынка.",
    tone: "e",
  },
  {
    title: "Прозрачная оплата",
    text: "Работаем по факту. Каждый месяц — детальный отчёт. Вы понимаете, за что платит клиент и что получаете вы.",
    tone: "e",
  },
] as const;

export const partnerSteps = [
  {
    n: "01",
    title: "Заявка",
    text: "Напишите на info@prime-ltd.su или позвоните +7 (473) 203-01-24.",
  },
  {
    n: "02",
    title: "Разбор",
    text: "Обсудим нишу, формат сотрудничества и все вопросы по процессу.",
  },
  {
    n: "03",
    title: "Договор",
    text: "Официально. Работаем с юрлицами и физлицами. Выплаты — раз в месяц.",
  },
  {
    n: "04",
    title: "Старт",
    text: "Передаёте контакты (клиент предупреждён о звонке) — и мы начинаем работу.",
  },
] as const;

export const partnerStats = [
  {
    value: 36,
    suffix: "+",
    label: "месяцев",
    desc: "Минимальный горизонт сотрудничества клиента с нами",
  },
  {
    value: 1.2,
    suffix: " млн ₽",
    label: "выплат",
    desc: "Столько мы выплатили за год лучшему партнёру",
    decimals: 1,
  },
  {
    value: 40,
    suffix: "+",
    label: "партнёров",
    desc: "На столько выросла партнёрская сеть за активные годы",
  },
] as const;

export const partnerCases = [
  {
    name: "Кузовной",
    tag: "Автосервис",
    image: "/images/v6/partner-cases/kuzovnoy.jpg",
    href: "/keysy/seo/motorland-kuzov/",
  },
  {
    name: "Вторма",
    tag: "Вторсырьё",
    image: "/images/v6/partner-cases/vtorma.jpg",
    href: "/keysy/seo/vtorma/",
  },
  {
    name: "Кабельмонтаж",
    tag: "Электромонтаж",
    image: "/images/v6/partner-cases/kabelmontazh.jpg",
    href: "/keysy/seo/kabelmontazh/",
  },
  {
    name: "Фортуна",
    tag: "Автосервис",
    image: "/images/v6/partner-cases/fortuna.jpg",
    href: "/keysy/ads/fortuna-avto/",
  },
  {
    name: "Светлячок",
    tag: "Детский центр",
    image: "/images/v6/partner-cases/svetlyachok.jpg",
    href: "/keysy/seo/det-zentr/",
  },
  {
    name: "Химоптторг",
    tag: "Химия",
    image: "/images/v6/partner-cases/himopttorg.jpg",
    href: "/keysy/seo/himopttorg/",
  },
  {
    name: "Аргумент",
    tag: "Юристы",
    image: "/images/v6/partner-cases/argument.jpg",
    href: "/keysy/web/argument/",
  },
  {
    name: "Сказка",
    tag: "Кондитерская",
    image: "/images/v6/partner-cases/skazka.jpg",
    href: "/keysy/seo/skazka/",
  },
  {
    name: "Барокко",
    tag: "Шторы",
    image: "/images/v6/partner-cases/barokko.jpg",
    href: "/keysy/seo/barokko/",
  },
  {
    name: "Моторленд",
    tag: "Автосалон",
    image: "/images/v6/partner-cases/motorland.jpg",
    href: "/keysy/seo/motorland-kuzov/",
  },
] as const;

export const partnerWhy = [
  "Рекомендуете ПРАЙМ — получаете процент с оплат клиента",
  "Мы сами ведём проект: вам не нужно быть SEO-специалистом",
  "Прозрачные отчёты каждый месяц — удобно контролировать",
  "Официальный договор и регулярные выплаты",
] as const;

/** Контакты ПРАЙМ — с боевого сайта */

export const contacts = {
  phone: "+7 (473) 203-01-24",
  phoneHref: "tel:+74732030124",
  email: "info@prime-ltd.su",
  emailHref: "mailto:info@prime-ltd.su",
  address: "394036 Воронеж, Московский проспект 19, пом. 15",
  addressShort: "Московский проспект 19, пом. 15",
  city: "Воронеж",
  postal: "394036",
  mapTitle: "Офис ПРАЙМ на карте",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?um=constructor%3Abf70895a37409468935a1b6feb83662b2498a354670c55e9cbd1b25cf0d4b066&source=constructor",
  socials: [
    { label: "VK", href: "https://vk.com/primeltd" },
    { label: "Telegram", href: "https://t.me/bziksv" },
  ],
  points: [
    "Ответ в рабочий день",
    "Разбор ниши за 30 минут — без обязательств",
    "Можно начать с аудита или консультации",
  ],
} as const;

export const contactServices = [
  "Продвижение сайта",
  "Контекстная реклама",
  "Разработка сайтов",
  "Управление репутацией",
  "Аудит сайта",
  "Баннерная реклама",
  "Техподдержка сайта",
  "Сквозная аналитика",
  "Продвижение по трафику",
  "Другое / консультация",
] as const;

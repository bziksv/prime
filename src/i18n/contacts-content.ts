import type { Locale } from "./locales";
import { contactServices, contacts } from "../data/contacts";

export type ContactsContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  menuLabel: string;
  ctaTop: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  infoTitle: string;
  infoLead: string;
  showAddress: boolean;
  showPhone: boolean;
  showMap: boolean;
  addressLabel: string;
  address: string;
  phoneLabel: string;
  emailLabel: string;
  socialsLabel: string;
  coverageLabel: string;
  coverageText: string;
  points: string[];
  formTitle: string;
  formLead: string;
  formName: string;
  formPhone: string;
  formEmail: string;
  formService: string;
  formServiceOptions: string[];
  formMessage: string;
  formAgreeBefore: string;
  formAgreePolicy: string;
  formSubmit: string;
  formSuccess: string;
  formSource: string;
  mapTitle: string;
  mapSubtitle: string;
  footerBrand: string;
  footerTagline: string;
};

const contactsRu: ContactsContent = {
  path: "/kontakty/",
  metaTitle: "Контакты — ПРАЙМ",
  metaDescription: `Контакты ПРАЙМ: ${contacts.address}, ${contacts.phone}, ${contacts.email}`,
  breadcrumbHome: "Главная",
  breadcrumbCurrent: "Контакты",
  menuLabel: "Меню",
  ctaTop: "Оставить заявку",
  heroKicker: "Связаться с нами",
  heroTitle: "Контакты",
  heroLead:
    "Офис в Воронеже. Ответим на звонок или письмо — разберём задачу и предложим формат работы.",
  infoTitle: "Наш адрес и телефон",
  infoLead: "Офис в Воронеже · звонок, почта или форма",
  showAddress: true,
  showPhone: true,
  showMap: true,
  addressLabel: "Адрес",
  address: contacts.address,
  phoneLabel: "Телефон",
  emailLabel: "Эл. почта",
  socialsLabel: "Соцсети",
  coverageLabel: "География",
  coverageText: "Работаем с клиентами по всей России.",
  points: [...contacts.points],
  formTitle: "Остались вопросы или предложения?",
  formLead: "Коротко опишите задачу — перезвоним в рабочий день",
  formName: "Ваше имя",
  formPhone: "Телефон",
  formEmail: "Email (необязательно)",
  formService: "Выберите услугу",
  formServiceOptions: [...contactServices],
  formMessage: "Сообщение (необязательно)",
  formAgreeBefore: "Согласен на обработку персональных данных в соответствии с нашей",
  formAgreePolicy: "политикой",
  formSubmit: "Отправить",
  formSuccess: "Спасибо! Заявка принята — свяжемся с вами.",
  formSource: "kontakty",
  mapTitle: contacts.mapTitle,
  mapSubtitle: `${contacts.addressShort}, ${contacts.city}`,
  footerBrand: "ПРАЙМ",
  footerTagline: "Интернет-маркетинг · контакты",
};

const contactsEn: ContactsContent = {
  path: "/en/contacts/",
  metaTitle: "Contacts — PRIME",
  metaDescription:
    "Contact PRIME worldwide: email and a short request form. We work across the world — your location and language don’t matter.",
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Contacts",
  menuLabel: "Menu",
  ctaTop: "Submit a request",
  heroKicker: "Get in touch",
  heroTitle: "Contacts",
  heroLead:
    "We work worldwide. Doesn’t matter where you are or what language you speak — write us and we’ll pick up the conversation.",
  infoTitle: "How to reach us",
  infoLead: "Email, Telegram or the form — no office visit required",
  showAddress: false,
  showPhone: false,
  showMap: false,
  addressLabel: "Address",
  address: "",
  phoneLabel: "Phone",
  emailLabel: "Email",
  socialsLabel: "Social",
  coverageLabel: "Coverage",
  coverageText:
    "We work worldwide. Your city, country and language don’t matter — leave a request and we’ll reply.",
  points: [
    "Reply on a business day",
    "30-minute niche review — no obligation",
    "Start with an audit or a consult",
  ],
  formTitle: "Questions or a project in mind?",
  formLead: "Briefly describe the task — we’ll get back on a business day",
  formName: "Your name",
  formPhone: "Phone",
  formEmail: "Email (optional)",
  formService: "Choose a service",
  formServiceOptions: [
    "Website SEO",
    "Paid search (Google Ads)",
    "Website development",
    "Reputation management",
    "Website audit",
    "Display ads",
    "Website support",
    "End-to-end analytics",
    "Traffic-based SEO",
    "Other / consultation",
  ],
  formMessage: "Message (optional)",
  formAgreeBefore: "I agree to personal data processing under our",
  formAgreePolicy: "privacy policy",
  formSubmit: "Submit request",
  formSuccess: "Thanks! Your request is in — we’ll get back to you.",
  formSource: "en-contacts",
  mapTitle: "",
  mapSubtitle: "",
  footerBrand: "PRIME",
  footerTagline: "Digital marketing · contacts",
};

export function getContactsContent(locale: Locale): ContactsContent {
  if (locale === "en") return contactsEn;
  return contactsRu;
}

export function contactsPath(locale: Locale): string {
  return getContactsContent(locale).path;
}

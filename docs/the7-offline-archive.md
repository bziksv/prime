# Офлайн-архив The7 (если сайт исчезнет)

Чеклист того, что стоит сохранить **локально** в репозитории.  
Папка: `docs/archive/` (создайте при сохранении файлов).

---

## Уже есть (не требует the7.io)

| Что | Где |
|-----|-----|
| Каталог блоков и ID | `the7-premade-demos-ui-kit.md` |
| Глоссарий | `the7-glossary.md` |
| Чертежи страниц | `the7-page-blueprints.md` |
| Токены | `the7-design-tokens.md` |
| Спека prime-ltd | `prime-ltd-site-spec-from-the7.md` |
| URL-индекс | `the7-demos-url-catalog.json` |
| Реестр ID | `the7-element-registry.json` |

---

## Рекомендуется сохранить вручную

### Приоритет P0 (скрины)

| Файл | Что снять | Источник [REF-URL] |
|------|-----------|-------------------|
| `archive/home-fse-business.png` | Полная главная | the7.io/fse-business/ |
| `archive/home-fse-company.png` | Альтернатива главной | the7.io/fse-company/ |
| `archive/case-detail-case06.png` | Кейс с KPI | fse-marketing/case/case06/ |
| `archive/service-service01.png` | Страница услуги | fse-marketing/services/service01/ |
| `archive/contact-marketing.png` | Контакты | fse-marketing/contact/ |
| `archive/layouts-cta-banners.png` | Варианты CTA | fse-corporate/layouts/cta-banners/ |
| `archive/layouts-testimonials.png` | Варианты отзывов | fse-marketing/layouts/testimonials/ |

### Приоритет P1 (layout-каталоги)

Сохранить **full-page screenshot** или PDF Print каждой:

- `fse-marketing/layouts/` (вся страница со скроллом)
- `fse-business/blocks/process/`
- `fse-company/layouts/pricing-table/`
- `fse-nutrition/layouts/steps/`

### Приоритет P2 (Elementor)

| Файл | Источник |
|------|----------|
| `archive/elementor-2025-home.png` | elementor-2025/ |
| `archive/elementor-elements-index.png` | elementor-main/elements/ |

---

## Как сохранять

1. Браузер → full page screenshot (Firefox/Chrome extension) или Cmd+P → Save as PDF.
2. Имя файла: `{demo}-{page}-{date}.png`.
3. Положить в `docs/archive/`.
4. Добавить строку в таблицу ниже.

---

## Журнал архива

| Дата | Файл | Кто | Примечание |
|------|------|-----|------------|
| | | | _пусто — заполнить при сохранении_ |

---

## PDF / HTML snapshot (опционально)

```bash
# Пример: сохранить главную (если сайт доступен)
mkdir -p docs/archive/html
# wget --mirror не рекомендуется (ломает WP); лучше SingleFile extension
```

SingleFile (браузер) → `docs/archive/html/fse-business.html`

---

## [AGENT] Правило

Если в задаче нужен визуал, а `docs/archive/` пуст:

1. Использовать `the7-design-tokens.md` + `the7-page-blueprints.md`.
2. Не выдумывать скриншоты.
3. Сообщить пользователю: «нужен скрин в archive/».

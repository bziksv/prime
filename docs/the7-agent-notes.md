# [AGENT] Заметки для AI и разработчиков

> **Читать этот файл первым** при любой задаче по обновлению prime-ltd.su на основе The7.

---

## [AGENT] Контекст проекта

- **Цель:** обновить сайт **prime-ltd.su** по паттернам The7 pre-made demos (не копия 1:1).
- **Источник паттернов:** демо на `https://the7.io/{demo-slug}/`, **не** блок Featured websites на чужих доменах.
- **Офлайн-истина:** папка `docs/` в репозитории `prime-ltd.su`. Живой the7.io — только справочник.

---

## [AGENT] Порядок чтения файлов

1. `the7-agent-notes.md` (этот файл)
2. `prime-ltd-site-spec-from-the7.md` — какие страницы и блоки нужны
3. `the7-page-blueprints.md` — порядок секций на странице
4. `the7-glossary.md` — расшифровка кодов
5. `the7-element-registry.json` — если нужен парсинг / автогенерация
6. `the7-premade-demos-ui-kit.md` — детали вариантов блоков
7. `the7-demos-url-catalog.json` — только если нужен живой URL (может быть 404)

---

## [AGENT] Соглашения об ID

| Префикс | Значение | Пример |
|---------|----------|--------|
| `G-` | Global (header, footer, nav) | G-01 header |
| `H-` | Hero | H-02 split corporate |
| `NUM-` | Числа, KPI, счётчики | NUM-02 KPI row |
| `SVC-` | Услуги, сервисные карточки | SVC-01 icon grid |
| `CASE-` | Кейсы, портфолио | CASE-03 full case page |
| `TST-` | Отзывы | TST-01 card |
| `CTA-` | Призывы к действию | CTA-01 full band |
| `FORM-` | Формы | FORM-03 with service select |
| `BLOG-` | Блог | BLOG-04 post meta |
| `PROC-` | Процесс, шаги, timeline | PROC-01 numbered steps |
| `LIST-` | Списки, сегменты | LIST-03 client segments |
| `LOGO-` | Логотипы партнёров | LOGO-01 strip |
| `PRICE-` | Тарифы | PRICE-03 compare table |
| `EL-` | Elementor widget (elementor-main) | EL-022 The7 Button |
| `PAGE-` | Тип целой страницы | PAGE-HOME |
| `LINE-` | Визуальная линейка (токены) | LINE-BUSINESS |

**В коде / компонентах prime-ltd** можно использовать те же ID в комментариях: `<!-- BLOCK: CTA-01 -->`.

---

## [AGENT] Что НЕ переносить на production

| ID / элемент | Причина |
|--------------|---------|
| G-10 | «78 DEMOS / All Demos» — переключатель демо The7 |
| Lorem ipsum заглушки | Заменить контентом prime-ltd |
| Dream-Theme / Seven * вымышленные бренды | Заменить на Прайм |
| Демо-телефоны +1 001… | Реальные контакты клиента |

---

## [AGENT] Рекомендуемая линейка для prime-ltd (B2B)

По умолчанию брать **LINE-BUSINESS** + элементы из демо:

- `fse-business` — главная, услуги, about, finance tone
- `fse-company` — кейсы, pricing, consulting
- `fse-marketing` — case study detail, filters, blog

Не смешивать в одной странице **LINE-MARKETING** (красный gradient) и **LINE-BUSINESS** (navy) без явного запроса.

---

## [AGENT] Структура layout-страниц The7

На URL вида `/layouts/accordion/` показаны **все варианты** одного типа блока (10–40 штук).  
Slug = тип блока, не готовая страница.

**Маппинг slug → ID:** см. `the7-element-registry.json` → поле `layout_slug`.

---

## [AGENT] Если the7.io недоступен

1. Использовать только `docs/*.md` и `*.json`.
2. Визуал восстанавливать по `the7-design-tokens.md` + скрины в `docs/archive/` (если есть).
3. Не угадывать URL — смотреть `the7-demos-url-catalog.json` (поле `url` может быть битым).

---

## [AGENT] Маркеры в других файлах

- `[AGENT]` — инструкция для ИИ
- `[ПРАЙМ]` — решение принято для prime-ltd
- `[OPTIONAL]` — фаза 2/3
- `[REF-URL]` — ссылка на эталон (может устареть)
- `[VARIANT]` — один из нескольких визуальных вариантов блока

---

## [AGENT] Чеклист перед началом вёрстки страницы

- [ ] Определён `PAGE-*` в `the7-page-blueprints.md`
- [ ] Список ID блоков согласован с `prime-ltd-site-spec-from-the7.md`
- [ ] Выбрана `LINE-*` в `the7-design-tokens.md`
- [ ] Контент (тексты, KPI, логотипы) — от заказчика, не из демо
- [ ] G-10 и демо-мусор исключены

---

## [AGENT] История изменений agent-notes

| Дата | Изменение |
|------|-----------|
| 2026-05-22 | doc-pack-1.0 создан |

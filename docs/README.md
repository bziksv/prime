# Документация The7 → prime-ltd.su

Офлайн-спецификация UI на основе pre-made demos [The7.io](https://the7.io/#demos).  
**Не зависит от того, что демо-сайты когда-нибудь исчезнут** — вся логика и ID зафиксированы здесь.

---

## Превью главной в браузере

Концепт свёрстан как Astro-превью (не продакшен).

```bash
cd /Users/stanislav/Documents/projects/prime-ltd.su
npm install
npm run dev
```

| URL | Концепт |
|-----|---------|
| http://localhost:3004/ | **v1** «Рост под ключ» — светлый B2B |
| http://localhost:3004/v2/ | **v2** «Импульс» — тёмный, motion, particles |
| http://localhost:3004/v6/ | **v6** «Портал» — **боковое меню** как на prime-ltd.su |

Порт **3004** в `package.json` и `astro.config.mjs`.

Спеки: [v1](./prime-homepage-concept-v1.md) · [v2](./prime-homepage-concept-v2.md) · [v6](./prime-homepage-concept-v6.md).

---

## С чего начать

| Кто | Первый файл |
|-----|-------------|
| Заказчик / менеджер | [prime-homepage-concept-v1.md](./prime-homepage-concept-v1.md) — **новая главная** · [prime-ltd-site-spec-from-the7.md](./prime-ltd-site-spec-from-the7.md) — карта сайта |
| Дизайнер | [the7-design-tokens.md](./the7-design-tokens.md) + [the7-page-blueprints.md](./the7-page-blueprints.md) |
| Вёрстчик / разработчик | [the7-glossary.md](./the7-glossary.md) + [the7-element-registry.json](./the7-element-registry.json) |
| AI-агент (Cursor) | [the7-agent-notes.md](./the7-agent-notes.md) — **читать первым** |

---

## Карта файлов

| Файл | Назначение |
|------|------------|
| **README.md** | Этот индекс |
| **ASSETS-LICENSES.md** | Лицензии 3D/stock: NEXBOT CC0, Matter = inspiration only |
| **BLOG-MIGRATION-CHECKLIST.md** | Чеклист всех статей блога из old WP → `/blog/` |
| **CASES-MIGRATION-CHECKLIST.md** | Чеклист миграции кейсов |
| **EFFECTS-INSPIRATION-CHECKLIST.md** | Каталог эффектов с референсов для `/razrabotka-saytov/` |
| **the7-agent-notes.md** | Порядок чтения, маркеры `[AGENT]`, правила для ИИ |
| **prime-homepage-concept-v1.md** | Концепт главной v1 (спокойный B2B) |
| **prime-homepage-concept-v2.md** | Концепт главной v2 (immersive / motion) |
| **prime-ltd-site-spec-from-the7.md** | Состав страниц prime-ltd и привязка блоков (ID) |
| **the7-page-blueprints.md** | Чертежи страниц: секции сверху вниз |
| **the7-glossary.md** | Словарь кодов `G-01`, `H-02`, `CASE-03`… |
| **the7-design-tokens.md** | Цвета, типографика, кнопки (по линейкам демо) |
| **the7-premade-demos-ui-kit.md** | Полный каталог блоков и вариантов (v2, детально) |
| **the7-demos-url-catalog.json** | URL эталонов (если сайт ещё жив) |
| **the7-element-registry.json** | Машинный реестр ID → категория → варианты |
| **the7-offline-archive.md** | Что сохранить в `archive/` (скрины, PDF) |

---

## Как ссылаться в задачах

Вместо «как на The7» пишите:

```text
Блок: CASE-03 (см. the7-glossary.md)
Чертёж страницы: PAGE-SERVICE (the7-page-blueprints.md)
Стиль: LINE-BUSINESS (the7-design-tokens.md)
```

---

## Версия пакета документации

| Версия | Дата | Содержание |
|--------|------|------------|
| **doc-pack-1.0** | 2026-05-22 | Полный пакет: индекс, глоссарий, чертежи, токены, agent notes, registry JSON |

Исходный аудит UI: `the7-premade-demos-ui-kit.md` v2.

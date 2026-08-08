# Нативный текст на не-RU: структура из источника, голос носителя

**Принцип:** исходный текст (обычно RU) — **каркас и факты**. Итоговый EN (и другие локали) — **не перевод**, а текст копирайтера-носителя: те же смыслы, другая синтаксис, заголовки и FAQ.

Эталон голоса блога: `src/i18n/blog/posts/start-internet-magazina.ts`, `src/i18n/blog/posts/ftp.ts` (не переписывать без нужды — gold).

Смежное:
- страницы сайта (не блог) → ещё и [`.cursor/rules/i18n-google-first.mdc`](../.cursor/rules/i18n-google-first.mdc) (Google / worldwide);
- SEO-сроки → [`.cursor/rules/seo-case-timelines.mdc`](../.cursor/rules/seo-case-timelines.mdc);
- обложки / картинки → [`.cursor/rules/image-assets.mdc`](../.cursor/rules/image-assets.mdc);
- сборка RU-статей → [`BLOG-ARTICLE-STANDARD.md`](./BLOG-ARTICLE-STANDARD.md).

Очередь нативного EN блога (рабочая): `tmp/blog-en-native/` (`PLAN.md`, `progress.json`, `queue-tier-*.txt`).

---

## 1. Что берём из источника, что пишем заново

| Берём как структуру | Пишем заново (native) |
|---------------------|------------------------|
| slug, date, число секций / FAQ, смысл блоков | title, excerpt, lead, H2, paras, FAQ q/a |
| факты, шаги, KPI, предупреждения | формулировки, ритм, глаголы |
| `related` slugs, смысл ссылок | label ссылок на языке локали |
| наличие note / table / list | текст внутри; см. формат ниже |
| cover path (с суффиксом локали) | не менять slug картинки без задачи |

**Не делать:** sentence-by-sentence calque; «аккуратный перевод» с русской грамматикой в EN.

**Делать:**
1. Одной фразой понять задачу статьи/страницы.
2. Отбросить пофразовый перевод.
3. Написать свежий текст, который учит тем же пунктам.
4. FAQ — вопросы, которые задал бы читатель локали, не кальки с RU.
5. H2 — естественные заголовки блога/лендинга на языке локали.

Тон: практик, коротко + один развёрнутый абзац где нужно; hedges вроде «often», «in strong cases», «planned over months».

---

## 2. Область применения

### Блог EN

| | |
|--|--|
| Факты | `src/data/blog-posts/<slug>.json` |
| Вывод | **только** `src/i18n/blog/posts/<slug>.ts` |
| Не трогать | RU JSON, gold (`start-internet-magazina`, `ftp`) без явной просьбы |
| Smoke | `http://127.0.0.1:3004/en/blog/<slug>/` |
| Обложка | `/images/blog/<slug>/cover-en.webp` |
| Ссылки | `href` с префиксом `/en/…` |

### Страницы / маркетинг (не блог)

Тот же принцип «структура → native copy». Плюс правило Google-first / worldwide для локалей ≠ `ru` (см. `i18n-google-first.mdc`). Блог при этом **может** сохранять Яндекс, VK и локальный контекст статьи.

---

## 3. Сохраняем каркас поста

- Тот же `slug`, `date`, число секций и FAQ (если в RU нет блока — не выдумывать).
- Категория — смысловой EN-маппинг (не транслит):

| RU (примерно) | EN |
|---------------|-----|
| SEO / поисковое | SEO |
| Интернет-маркетинг | Digital marketing |
| SMM | SMM |
| Контент-маркетинг | Content marketing |
| Контекст / Директ / Ads | Paid search |
| Интернет-магазин / e-com | E-commerce |
| Email / рассылки | Email marketing |
| Сайты / разработка | Websites |
| Хостинг / облако | Hosting |
| Аналитика | Analytics |

- Не добавлять пустые `lists: []`, если в RU списков не было.
- `notes`: поле `text` (не `paras`); `kind: "tip"` (RU `warn` → `tip`, если нет отдельного legal).
- Порядок полей note: удобно `kind` → `title` → `text`.

### Пункты списков

Без хвостовых `;` и точек в конце пунктов (EN-оверлеи).

### Meta / Instagram / Facebook / WhatsApp

- Блок `legalNotice` обязателен, если тема про эти продукты (как в RU).
- EN title: **`Note`** (не «Dear readers!» / не «Уважаемые…»).
- Текст — информационный, без призыва пользоваться платформой; статус Meta в РФ сохранить по смыслу.
- Звёздочки `*` — обычно только в `legalNotice`, не по всему телу.

---

## 4. Запрещённые кальки (instant fail)

Проверка после правки:

```bash
rg -n -i '\bTOP\b|seeding|pull up' src/i18n/blog/posts/<slug>.ts
```

| Запрет | Почему / чем заменить |
|--------|------------------------|
| `\bTOP\b` (TOP, TOP-10 как существительное) | page one / rankings / «high visibility» по контексту; по возможности избегать слова *top* вообще |
| `seeding` (промо контента) | promote / distribute / share |
| `pull up` (про страницы/позиции) | improve / refresh / rewrite / strengthen |
| `close to success` | striking distance / near page one |
| телеграм-списки «impressions exist, but…» | живой EN |
| `methodology's example` | case study / one team’s result |
| универсальные обещания «×2 за 3 месяца всем» | честные hedges |

Осторожно: SMM «ТОП» в RU ≠ SEO page one — не подменять «огромный охват» формулировкой про rankings.

### SEO-сроки (обязательно)

- Подготовка / пакет работ ≈ недели–месяц ≠ выход в выдачу.
- Рост позиций / трафика — **планово 2–6 месяцев**, от месяца к месяцу.
- Не писать так, будто «запуск за месяц» = page one.

### Картинки и «сток»

- В EN не писать *stock* про стоковые фото → *licensed assets* / *filler* / свои съёмки.
- Музыка → *licensed music libraries*, не серые парсеры.

### Скрейпинг / парсинг / холодный outreach

- Без инструкций обхода защит и атак.
- *start URL*, не *seed URL* (чтобы не путать с banned `seeding`).
- Не поощрять массовый холодный outreach и купленные базы.

---

## 5. Процесс (блог EN, текущий режим)

Режим: **одна статья за ход** (`one_article_native`), пока пользователь не скажет иначе.

| Команда | Действие |
|---------|----------|
| «дальше» / next | следующий slug из очереди Tier |
| «стоп» | остановиться |
| правка / fail | доработать **тот же** slug, не перескакивать |

Шаги на slug:

1. Прочитать RU JSON + текущий EN `.ts`.
2. Целиком переписать оверлей (native).
3. `rg` на banned markers.
4. Обновить `tmp/blog-en-native/progress.json`: `done`, `current`, `next`.
5. В ответе — smoke URL: `http://127.0.0.1:3004/en/blog/<slug>/`.
6. **Не коммитить и не деплоить**, пока не попросят.

Очереди: Tier A–E закрыты; активный хвост — `queue-tier-f.txt`.  
Вне очередей без EN (держать в уме): `oformlenie-stranicy-instagram`, `pryamoy-efir-instagram`.

Прогресс смотреть так: всего RU JSON ≈ 570+; `done` в `progress.json` — уже прошедшие native; «осталось» = не в `done` и не в `skipped_gold`, не только длина одного tier-файла.

---

## 6. Acceptance (fail → переписать тот же slug)

- Lead + 2 ответа FAQ вслух: нет русской схемы предложения.
- Нет banned calques.
- SEO-сроки: prep ≠ rankings; 2–6 months где уместно.
- Звучит как практик, не как глоссарий.
- Списки без `;` / точек в хвосте; notes с `kind` + `text`.
- Meta-темы: `legalNotice` + title `Note`.

---

## 7. Чего не делать

- Full-corpus «Pass N» по всему блогу вместо одной статьи.
- Полировать кальки вместо переписывания голоса.
- Править RU JSON «чтобы EN легче читался».
- Менять slug / ломать число смысловых блоков без причины.
- Коммит / push / deploy без явной просьбы.

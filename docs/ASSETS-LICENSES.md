# Лицензии сторонних ассетов

Дата фиксации: **2026-07-23**  
Контекст: hero 3D-робот на `/razrabotka-saytov/`.

---

## Текущий прод-ассет: NEXBOT

| Поле | Значение |
|------|----------|
| Название | **NEXBOT** — robot character concept |
| Источник | [Spline Community](https://community.spline.design/file/615b9422-9985-43f6-8593-d7d7bc3b0be1) |
| Лицензия | **[CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)** (public domain dedication) |
| Локальный файл | `public/spline/nexbot.splinecode` |
| Загрузка | `@splinetool/runtime` → `src/scripts/web-robot.ts` |
| Использование | Self-host: сцена грузится с нашего `/spline/…`, не с CDN демо-шаблона |

**Что даёт CC0:** можно свободно копировать, менять, коммерчески использовать на сайте агентства без атрибуции (атрибуция желательна как хорошая практика, но не обязательна).

**Что мы меняем сами:** программный tint мешей в `#1a5c68` (бренд-adjacent teal) в `web-robot.ts` — это наша модификация сцены, не часть исходного файла Community.

**Публичный embed, с которого снимали bytes сцены (для воспроизводимости):**  
`https://my.spline.design/nexbotcopy-6c3c748185249fe23fdcd89d03ed8752/`

---

## Не использовать в проде: робот из Matter-демо

| Поле | Значение |
|------|----------|
| Референс UI | [Matter landing](https://shadcn-astro-matter-landing-page.vercel.app/) (Shadcn Studio / Astro Matter) |
| Роль | **Только inspiration** композиции: giant wordmark + idle-фигура (см. [EFFECTS-INSPIRATION-CHECKLIST.md](./EFFECTS-INSPIRATION-CHECKLIST.md) §A10) |
| 3D-сцена Matter | Демо-ассет шаблона / превью — **не CC0**, права неясны для коммерческого продакшена |
| Решение | Сцену Matter **не** класть в `public/`, **не** деплоить на prime-ltd.su. Файл `matter-robot.splinecode` удалён |

Итог: layout и идею «слово + робот» берём с Matter; **меш/сцену** — только из Community с явной свободной лицензией (сейчас NEXBOT / CC0).

---

## Правило на будущее

1. Перед self-host любого Spline / 3D / stock-ассета — проверить страницу Community (или аналог) на **лицензию**.
2. Предпочитать **CC0 / CC-BY** (с атрибуцией) / собственный заказ.
3. Демо шаблонов (Matter, Swipe, Grow и т.д.) = **референс эффектов**, не источник бинарников для прода.
4. Факт лицензии + URL источника + путь в репо фиксировать в этом файле.

---

## Связанные файлы

- `src/scripts/web-robot.ts` — комментарий с URL Community + CC0
- `public/spline/nexbot.splinecode` — бинарь сцены
- `docs/EFFECTS-INSPIRATION-CHECKLIST.md` — референс Matter (inspiration only)

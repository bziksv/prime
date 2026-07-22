# Design tokens (по линейкам The7)

Приблизительные значения с демо (для макета prime-ltd).  
**Не pixel-perfect** — уточнять по брендбуку Прайм.

---

## LINE-BUSINESS [ПРАЙМ] — fse-business

Использовать для **prime-ltd.su** по умолчанию.

| Token | Значение | Примечание |
|-------|----------|------------|
| `--color-primary` | `#1a365d` – `#1e3a5f` | Navy |
| `--color-primary-hover` | `#2c5282` | |
| `--color-accent` | `#3182ce` | Ссылки, иконки |
| `--color-bg` | `#ffffff` | |
| `--color-bg-alt` | `#f7fafc` | Секции через одну |
| `--color-text` | `#1a202c` | |
| `--color-text-muted` | `#718096` | |
| `--font-heading` | Sans-serif (Inter, DM Sans, system) | Bold 600–700 |
| `--font-body` | Sans-serif | Regular 400 |
| `--h1-size` | 48–64px desktop | 2–3 строки допустимо |
| `--h2-size` | 32–40px | Секции |
| `--h3-size` | 20–24px | Карточки |
| `--section-padding-y` | 80–120px | |
| `--container-max` | 1200–1280px | |
| `--radius-button` | 4–8px | Скорее сдержанный |
| `--radius-card` | 8–12px | |
| `--shadow-card` | soft `0 4px 24px rgba(0,0,0,.08)` | |

### Кнопки LINE-BUSINESS

| Вариант | Фон | Текст | Border |
|---------|-----|-------|--------|
| Primary | navy | white | none |
| Secondary | transparent | navy | 1px navy |
| Text link | — | accent | underline on hover |

### Hero H-02

- Левая колонка ~45%: navy overlay или solid panel
- Правая: фото 55%, object-fit cover
- 2 CTA: primary filled + secondary outline

---

## LINE-MARKETING — fse-marketing

| Token | Значение |
|-------|----------|
| `--color-primary` | `#e85d4c` – `#d64545` |
| `--gradient-hero` | red/coral → white vertical |
| `--radius-button` | 24px (pill) | |
| Нумерация секций | `01.` `02.` с ведущим нулём |

Не смешивать с LINE-BUSINESS на одной странице.

---

## LINE-CORPORATE — fse-corporate

| Token | Значение |
|-------|----------|
| `--color-primary` | `#2c5282` |
| KPI в hero | 3 числа в ряд (25+, $6.5M, 98.5%) |
| Dividers | `---` между секциями case study |

CTA: много вариантов «free consultation» — см. CTA-06, CTA-07.

---

## LINE-ELEMENTOR — elementor-2025

| Token | Значение |
|-------|----------|
| `--color-primary` | `#00a8e8` – `#0099d6` |
| Hero | Dark photo + white text |
| Logo strip | Grayscale 100%, opacity 0.6 |

---

## LINE-NUTRITION — fse-nutrition

| Token | Значение |
|-------|----------|
| `--color-primary` | `#4caf50` |
| `--color-accent` | `#ff9800` |
| Display | Serif на акцентном символе «&» |
| Steps | Green circles 1-2-3 |

---

## LINE-COMPANY — fse-company

| Token | Значение |
|-------|----------|
| Стиль | Светлый, нейтральный consulting |
| Pricing | $50 / $75 / $125 cards |
| CTA header | «Let's talk» |

---

## Общие паттерны типографики The7

| Элемент | Паттерн |
|---------|---------|
| Section label | `#####` маленький caps или muted H3 над H2 |
| Quote | Крупный текст + em dash + имя + должность |
| KPI number | 48–72px bold, label 14–16px под числом |
| Case metric in title | «+62% conversion» в H1 |
| Meta blog | `Mar 24, 2026` · `2–3 min read` |

---

## Spacing scale (рекомендация для prime-ltd)

| Token | px |
|-------|-----|
| `--space-xs` | 8 |
| `--space-sm` | 16 |
| `--space-md` | 24 |
| `--space-lg` | 32 |
| `--space-xl` | 48 |
| `--space-2xl` | 64 |
| `--space-section` | 96 |

---

## Breakpoints

| Name | Min width |
|------|-----------|
| mobile | 0 |
| tablet | 768px |
| desktop | 1024px |
| wide | 1280px |

На mobile: hero split → stack (текст сверху), KPI 2×2, services 1 col.

---

## [AGENT] Применение в CSS

```css
/* Пример: data-line="business" на <html> */
[data-line="business"] {
  --color-primary: #1e3a5f;
  --color-accent: #3182ce;
}
```

Компоненты prime-ltd должны читать CSS variables, не хардкодить цвета The7.

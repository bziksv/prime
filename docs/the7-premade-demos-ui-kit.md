# The7 Pre-made Demos — полный каталог UI (v2)

> **Пакет документации:** `doc-pack-1.0` — начните с [`README.md`](./README.md)  
> **Источник:** [the7.io/#demos](https://the7.io/#demos) — только сайты на `the7.io/*`, не Featured websites.  
> **Живой сайт может исчезнуть** — рабочая правда в `docs/`, не на the7.io.

| Нужно | Файл |
|-------|------|
| Навигация | [README.md](./README.md) |
| Коды блоков | [the7-glossary.md](./the7-glossary.md) |
| Чертежи страниц | [the7-page-blueprints.md](./the7-page-blueprints.md) |
| Токены / цвета | [the7-design-tokens.md](./the7-design-tokens.md) |
| Спека prime-ltd | [prime-ltd-site-spec-from-the7.md](./prime-ltd-site-spec-from-the7.md) |
| Заметки для AI | [the7-agent-notes.md](./the7-agent-notes.md) |
| JSON ID → slug | [the7-element-registry.json](./the7-element-registry.json) |
| URL эталонов | [the7-demos-url-catalog.json](./the7-demos-url-catalog.json) |
| Офлайн-скрины | [the7-offline-archive.md](./the7-offline-archive.md) |

---

## Сводка масштаба

| Что посчитано | Количество |
|---------------|------------|
| Уникальных страниц `/layouts/` и `/blocks/` (FSE) | **112** |
| Виджетов `elementor-main/elements_list/` | **51** |
| Демо с >15 внутренними URL (curl-аудит) | **12+** |
| Зарегистрированных **типов** UI-элементов (с вариантами) | **~420** |
| Зарегистрированных **вариантов** внутри типов | **~680+** |

Первая версия документа (~70 пунктов) покрывала только верхний слой. Ниже — **полный реестр**.

---

## 1. Как искать элементы в демо

У FSE-демо есть скрытые **каталоги блоков** (не всегда в меню):

| Демо | Каталог |
|------|---------|
| Marketing | https://the7.io/fse-marketing/layouts/ |
| Company | https://the7.io/fse-company/layouts/ |
| Business | https://the7.io/fse-business/blocks/ + `/layouts/` |
| Corporate | https://the7.io/fse-corporate/layouts/ |
| Nutrition | https://the7.io/fse-nutrition/layouts/ |
| Brewery / Bakery / Pilates / Product | `/{demo}/layouts/` |

У Elementor Classic:

| Демо | Каталог |
|------|---------|
| elementor-main | https://the7.io/elementor-main/elements/ → 51 × `elements_list/{widget}/` |

**На каждой странице layout** — десятки визуальных вариантов одного типа (разная сетка, скролл, overlay). Их нужно смотреть на странице, а не только по названию slug.

---

## 2. Полный список 112 страниц layouts/blocks

Сгруппировано по **slug** (сколько демо используют).

### 2.1 Accordion / FAQ
| Slug | Демо | URL-пример |
|------|------|------------|
| accordion | marketing, business, nutrition, pilates | [marketing/layouts/accordion](https://the7.io/fse-marketing/layouts/accordion/) |

**Варианты на странице:** single column, two column, bordered, minimal; 6–14 вопросов; footer «Still have questions?».

### 2.2 Blog cards
| Slug | Демо |
|------|------|
| blog-cards | marketing, company, corporate, nutrition, brewery, bakery, pilates, product, business |

**Варианты (~12+ на каталоге):** title + date `|`; + read time `2–3 minutes`; + excerpt; horizontal card; vertical card; masonry; 2-col; 3-col; featured large + small; category tag; author line; scroller row.

### 2.3 Case cards
| Slug | Демо |
|------|------|
| case-cards | marketing, business |

**Варианты:** client name + `|` + H3 с **метрикой в заголовке** (+62%, +78%); tags как ссылки (Marketing strategy, Paid ads); compact без logo; grid 2/3 col; «Discover all».

### 2.4 CTA
| Slug | Демо |
|------|------|
| cta | marketing, company, business, nutrition |
| cta-banners | corporate, pilates (blocks) |
| call-to-action | product |

**Варианты CTA (~15+):** H2 + H3 + button + subtext «24h»; split text/button; dark band; light band; with phone `tel:`; with bullet list (Free consultation, Qualified experts); duplicated bands; «Questions? We are here to help» + inline form; consultation request; **corporate cta-banners** — 10+ макетов «Didn't find the answer?» + Submit + Call link.

### 2.5 Numbers / KPI / Stats
| Slug | Демо |
|------|------|
| numbers | marketing, company, corporate, brewery, nutrition |

**Варианты (~20+):** large number + 2-line label; inline `15+` / `Years`; `$50` / `/ Per Month`; percent `97.5%`; counter with suffix `500K+`; established year `2012`; grid 2×2, 4×1, 3×1; dark bg; light bg; with icon; **results KPI** `+62%`, `-38% CPA`, `2.4x ROAS`.

### 2.6 Testimonials
| Slug | Демо |
|------|------|
| testimonials | все FSE + blocks |
| testimonials-scroller | business, pilates |

**Варианты (~25+):** quote only; H4 title + quote; photo left; no photo; card shadow; minimal; CEO + company; carousel; scroller; 2-col grid; 3-col; star rating inline; long corporate quote; short punch quote; **beauty** — first name only; signed `- Role`.

### 2.7 Team
| Slug | Демо |
|------|------|
| team | marketing, brewery, corporate, nutrition (blocks) |
| team-grid | company, pilates |
| team-scroller | company, corporate, business, pilates |

**Варианты (~18+):** photo + name + role; + bio paragraph; circle photo; square; grid 4; grid 6; horizontal scroller; hover overlay; linkedin icon; **construction/main** — specialty line (Civil Engineer).

### 2.8 Icon cards
| Slug | Демо |
|------|------|
| icon-cards | company, corporate, bakery, pilates, product, business |
| icon-cards-scroller | company, corporate, business, product |

**Варианты (~22+):** icon top; icon left; 3-col; 4-col; 6-col; with «Learn more»; numbered 01–06; bordered card; flat; scroller horizontal; **corporate service-cards** — H4 only row; H3 + long text; 2-col split; 3 services per row.

### 2.9 Image cards
| Slug | Демо |
|------|------|
| image-cards | marketing, company, corporate, brewery, bakery, pilates, product, nutrition (blocks) |
| image-cards-scroller | company, corporate, business, pilates, product |

**Варианты (~20+):** image top + text; background image + overlay; hover zoom; aspect 16:9; square; **values** cards (Innovation, Team collaboration); service title overlay; scroller.

### 2.10 Lists
| Slug | Демо |
|------|------|
| lists | marketing, company, corporate, brewery, product, nutrition (blocks), business |

**Варианты (~30+ на business/lists alone):** simple bullets; checkmarks; numbered 1–4; **segment titles** (Startups, SME, Corporate); persona bullets (business owners seeking…); benefits numbered; values 1–3; deliverables (tax audit, R&D incentives); duplicate columns; `---` divider between groups; icon + text rows.

### 2.11 Row layouts (content + media)
| Slug | Демо |
|------|------|
| row-with-content | marketing |
| row-with-images | marketing, corporate, bakery, pilates, business |
| row-with-image | company, product, brewery |
| row-with-image-composition | brewery |
| row-with-video | brewery |
| rows-with-images | nutrition |
| rows-with-icons | nutrition |

**Варианты row-with-content (~40+ блоков на одной странице):** Industries grid; Our approach 01–04; What we deliver; Why work with us; Partnership process 1–6; Values list; Who we help (10 industries); Strategy/Creativity/Results headers; image left / right / alternating; video right.

**row-with-video:** text + embedded video; block heading + paragraph ×4.

### 2.12 Process / Steps / Timeline
| Slug | Демо |
|------|------|
| process | business (blocks) |
| steps | nutrition |
| timeline | company |
| prices | pilates |

**process:** numbered 1–6; 01–05; paired with timeline years 2012–2026; horizontal; vertical.

**steps:** circles 1–6; compact 1–3; **day plan** (Morning boost, Lunch, Snack, Evening, Hydration); detailed 5-step with sub-bullets (Energy, Dietary preferences).

**scrollers (nutrition):** horizontal benefit cards; **fraction** `1/5` … `5/5`; Learn more links; 01–05 vertical.

**timeline:** year left — `---` — title + paragraph; alternating sides.

### 2.13 Logos / Partners
| Slug | Демо |
|------|------|
| logos | marketing, company, corporate, brewery, product |
| partners-clients | nutrition |

**Варианты (~15+):** grayscale strip; logo + caption + industry tag (Retail, SaaS); 4-col grid; 2-row; testimonial-style client description; duplicated sets.

### 2.14 Pricing
| Slug | Демо |
|------|------|
| pricing-table | company |
| pricing-tables | nutrition |
| prices | pilates |

**Варианты:** 3 tiers; **popular** badge; `/ Per Month`; feature checklist; **compare table** matrix; FAQ below; CTA under; Starter/Basic/Pro naming; «Best for startups» subtitle.

### 2.15 Products (commerce)
| Slug | Демо |
|------|------|
| products | brewery |
| product-cards | bakery |

**Варианты brewery/products:** product card with **Volume, ABV, Bitterness (IBU)**; merch (T-Shirt, Cap, Bag); grid shop-style.

### 2.16 Forms
| Slug | Демо |
|------|------|
| forms | bakery |
| contact-forms | pilates |

**pilates contact-forms variants:**
- Newsletter signup
- Default (name, email, phone, message, GDPR)
- **Booking** (class select, time select, date)
- **Membership** (membership type select)
- **Career** (specialization select)

### 2.17 Content cards scroller
| Slug | Демо |
|------|------|
| content-cards-scroller | marketing |

**Варианты:** industry cards (Tech, SaaS, Fintech, E-commerce, Health, Travel); service cards with Learn more; horizontal scroll duplicates.

### 2.18 Service cards (dedicated)
| Slug | Демо |
|------|------|
| service-cards | corporate |

**Варианты (~10+):** 6 services H4 row; 3-col with description; 2-col large text; wealth management / crypto / portfolio rows; divider `---` between sections.

### 2.19 Scrollers (generic)
| Slug | Демо |
|------|------|
| content-cards-scroller | marketing |
| icon/image/team/testimonials-scroller | см. выше |

---

## 3. Elementor Main — 51 виджет (полный список)

Каталог: https://the7.io/elementor-main/elements/

### 3.1 Post loops & archives
| ID | Виджет | Назначение |
|----|--------|------------|
| EL-001 | The7 Categories List | Список рубрик |
| EL-002 | The7 Loop Masonry & Grid | Сетка записей masonry |
| EL-003 | The7 Loop Slider | Слайдер записей |
| EL-004 | The7 Simple Posts | Простая сетка постов |
| EL-005 | The7 Simple Posts Carousel | Карусель постов |

### 3.2 WooCommerce / Shop
| ID | Виджет |
|----|--------|
| EL-010 | The7 Loop Products Grid |
| EL-011 | The7 Loop Products Slider |
| EL-012 | The7 Product Categories Carousel |
| EL-013 | The7 Product Categories Grid |
| EL-014 | The7 Product Categories List |
| EL-015 | The7 Simple Products |
| EL-016 | The7 Simple Products Carousel |

### 3.3 The7 exclusive
| ID | Виджет |
|----|--------|
| EL-020 | The7 Accordion & Toggle |
| EL-021 | The7 Breadcrumbs |
| EL-022 | The7 Button |
| EL-023 | The7 Heading |
| EL-024 | The7 Horizontal Menu |
| EL-025 | The7 Icon |
| EL-026 | The7 Icon Box |
| EL-027 | The7 Icon Box Grid |
| EL-028 | The7 Image |
| EL-029 | The7 Multipurpose Carousel |
| EL-030 | The7 Photo Scroller |
| EL-031 | The7 Slider |
| EL-032 | The7 Tabs |
| EL-033 | The7 Vertical Menu |

### 3.4 Elementor Pro–style
| ID | Виджет |
|----|--------|
| EL-040 | Animated Headline |
| EL-041 | Call to Action |
| EL-042 | Countdown |
| EL-043 | Facebook Widgets |
| EL-044 | Flip Box |
| EL-045 | Form |
| EL-046 | Gallery |
| EL-047 | Hotspot |
| EL-048 | Media Carousel |
| EL-049 | Price Table & Price List |
| EL-050 | Share Buttons |
| EL-051 | Sitemap |
| EL-052 | Slides |
| EL-053 | Table of Contents |

### 3.5 General
| ID | Виджет |
|----|--------|
| EL-060 | Counter |
| EL-061 | Divider |
| EL-062 | Google Maps |
| EL-063 | Heading, Text, Alert, Quote |
| EL-064 | Icon List |
| EL-065 | Image Carousel |
| EL-066 | Image, Video |
| EL-067 | Progress Bar |
| EL-068 | Star Rating |
| EL-069 | Tabs |
| EL-070 | Testimonial |

**Доп. elementor-2025:** Text & Image Tickers — https://the7.io/elementor-2025/elements/tickers/

---

## 4. Типы внутренних страниц по демо (curl-аудит)

Не layouts, а **готовые шаблоны страниц** — тоже источник элементов.

### 4.1 E-commerce (brand-shop, fashion-store, elementor-shop)
- `home-001`, `home-002`, `homepage-003` — **несколько главных**
- `product/` — карточка товара + **вариации** `?attribute_pa_clothes-size=`
- `product-category/` — иерархия (men/t-shirts, women/dress…)
- `product-tag/`
- `shop/`, `sale/`, `my-account/`
- `faq/`, `about/`, `contact/`
- `under-construction-page/`

### 4.2 Hotel
- `homepage`, `rooms/`, `accommodation/`, `accommodations/`
- `dining/`, `spa/`, `gallery/`
- `special-offers/`, `guest-information/`
- `available-services/`, `search-results/`

### 4.3 Online courses
- `courses/`, `course/`, `course_category/`
- `free-courses/`, `premium-courses/`
- `instructors/`, `our_team/`
- `magazine/`, `news/`

### 4.4 Winery
- `experiences/`, `terroirs/`, `wine-club/`
- `newsletter/`, `our-story/`

### 4.5 Logistics
- `services/`, `transport/`, `storage/`
- `vehicle-fleet/`, `logistic-services/`

### 4.6 Consulting / Agency / Business
- `project/`, `project-category/`
- `our_services/`, `services/` (×3 у accounting)
- `our_team/`, `dt_team/`, `team/`
- `shop/` (часть с WooCommerce)
- `demo-design-system/` (многие Elementor-демо)
- `under-construction/`, `maintenance-page/`

### 4.7 Construction (WPB)
- `showcase/`, `dt_slideshow/`
- отдельные post-slug страницы услуг

### 4.8 Elementor starter / creative
- `home-1`, `portfolio-grid`, `portfolio-masonry`
- `blog-grid`, `blog-masonry`
- `contact-extended`, `contact-standard`
- `services-1`, `services-2`, `services-3`
- `showcase-layout-2`

### 4.9 FSE inner (общие паттерны)
| Тип | Примеры URL |
|-----|-------------|
| Case archive + filter | `/case-studies/` |
| Case single | `/case/case06/` |
| Case taxonomy | `/case_services/`, `/case_industry/` |
| Service single | `/services/service01/` |
| Blog | `/blog/`, `/category/` |
| Post | `/2026/03/24/post005/` |
| Contact | `/contact/`, `/contact-01/` |
| About | `/about/`, `/about-us/` |
| Color palette | `/color-palette/` (design tokens) |
| Terms | `/terms-conditions/` |
| 404 | `/404/` |
| Home alt | `/home-02/`, `/home-02/` (company) |
| Gallery | fse-beauty `/gallery/` |

---

## 5. Детальные шаблоны внутренних страниц (просмотрено)

### 5.1 Case study (Marketing) — `case/case06/`
1. Meta: tags services + industry links  
2. H1 с результатом в заголовке  
3. **Challenges** — 3× H3 problem bullets  
4. `---` divider  
5. **Our Approach** — 5 numbered steps  
6. `---`  
7. **The Results** — 4 KPI cards (+62%, +85%, -38%, 2.4x)  
8. Client sidebar (Industry, Location, website)  
9. Related cases (4 cards)  
10. Footer CTA band  

### 5.2 Case study (Company) — `cases/case01/`
1. Category badge `B2B tech launch`  
2. H1 + lead  
3. **Client** paragraph  
4. **Challenge**  
5. **Solution**  
6. **Results** — bullet % (40%, 3 partnerships, 25% lower CAC)  
7. CTA quote online  
8. Featured cases grid  

### 5.3 Service (Marketing) — `services/service01/`
1. Hero H1  
2. Lead + mid CTA  
3. **Why important** section  
4. **What we deliver** — 4 pillars (Conversions, Engagement, ROI, Real-time optimization)  
5. Featured case studies (3)  
6. **Why choose us** 01–03  
7. FAQ accordion (7 items)  
8. Footer CTA  

### 5.4 Service (Elementor) — `our-services/service001/`
1. H1 Web Design  
2. Subsections Modern websites / Solutions  
3. Bullet list (admin panel, 24/7…)  
4. Sub-services grid (Web Design, UI/UX, Hosting, Dev, Audit)  
5. CTA Start Project  
6. Full testimonials carousel  

### 5.5 Project (Elementor) — `project/project001/`
1. Client & task  
2. Our approach  
3. 4× sub-approach cards  
4. Bullet achievements  
5. **The Results** — % + large KPI (67%, 260%)  
6. CEO quote attribution  
7. Discover More Projects grid (8 items)  

### 5.6 Blog post — `post005/`
1. Meta: date, read time, categories  
2. H1  
3. Multiple H2 sections  
4. Published / posted in / posted by  
5. Featured articles sidebar  
6. Recent articles list  
7. **Newsletter signup** block  
8. What to read next (3 links)  

### 5.7 About Nutrition
1. Philosophy 4 cards  
2. How service works (3 steps)  
3. What makes us different (4)  
4. Nutrition philosophy (4)  
5. Designed for real life (4)  
6. Team specialists (4)  
7. Final CTA «Join» + «under 5 minutes»  

### 5.8 About Product (Smart Ring)
1. App download iOS/Android  
2. Design & materials + awards  
3. Battery life + fast charge stat  
4. Activity tracking (Step, Calorie, Activity recognition)  
5. Sleep tracking + smart alarms  
6. Hydration (sensors, alerts)  

### 5.9 Contact forms (Pilates) — см. §2.16

### 5.10 Beauty studio home — `fse-beauty/`
1. Hero + service line (HAIR / brows / Lashes…)  
2. KPI 12 years, 25 professionals, 15k customers, 10 salons  
3. About split  
4. Services 5 categories с подпунктами  
5. Philosophy 4 values  
6. Testimonials 4 first-name  
7. **Instagram** CTA block @account  
8. Lightbox Next/Previous (gallery)

---

## 6. Hero — все варианты (сводка по демо)

| Код | Тип | Демо |
|-----|-----|------|
| H-01 | Dark full-bleed + 2 CTA | elementor-2025 |
| H-02 | Split navy + photo | fse-business |
| H-03 | Gradient centered | fse-marketing |
| H-04 | Light + food/product photo | fse-nutrition |
| H-05 | Slideshow 3–4 slides | business, construction |
| H-06 | One-page + dual phone | agency |
| H-07 | Promo strips in hero | logistics |
| H-08 | Product + feature chips | fse-product |
| H-09 | Beauty multi-stat inline | fse-beauty |
| H-10 | Corporate KPI in hero | fse-corporate |
| H-11 | Minimal inner H1 | all inner pages |
| H-12 | Hotel fullscreen booking | hotel |
| H-13 | Shop lookbook | fashion-store |
| H-14 | Coming soon countdown | coming-soon demos |

---

## 7. Навигация и глобальные элементы

| Код | Элемент | Где |
|-----|---------|-----|
| G-01 | Logo + menu + CTA header | all |
| G-02 | Sticky shrinking header | elementor |
| G-03 | Top bar phone/email/hours | logistics, construction |
| G-04 | Side menu (blank-side-menu demo) | отдельное демо |
| G-05 | Breadcrumbs | FSE inner, EL-021 |
| G-06 | Search overlay | elementor-main footer |
| G-07 | Footer 2–4 columns | all |
| G-08 | Footer form repeat | marketing, elementor-2025 |
| G-09 | Social icons row | corporate contact, agency |
| G-10 | «78 DEMOS» switcher | **убрать в prod** |
| G-11 | Cookie / terms links | demo-design-system pages |
| G-12 | Maintenance / under construction | shop, coach, coffee |
| G-13 | WooCommerce cart icon | shop demos |
| G-14 | Multi-home selector | brand-shop home-001/002/003 |

---

## 8. Реестр по категориям (~420 типовых элементов)

Используйте ID при ТЗ на вёрстку. Варианты смотрите на URL из §2 или JSON.

### 8.1 Типографика и текст
- Display H1 multi-line, H2 section, H3 card, H4 label, lead paragraph, overline «#####», eyebrow «Since 1898», serif accent char «&», numbered «01.», quote block, CEO attribution, read time, date meta, category pills, tag links, divider `---`, «Learn more» link, bullet checklist, numbered list, two-column prose, table compare, price large `$50`, unit `/ Per Month`, IBU/ABV specs, fraction `1/5` scroller index

### 8.2 Медиа
- Full-bleed photo, split image, background overlay, video embed + play, row-with-video, photo scroller (EL-030), image carousel (EL-065), gallery grid (EL-046), hotspot image (EL-047), before/after, Instagram feed block, product gallery, lightbox prev/next, RevSlider (mouthes pattern), dummy slider layers

### 8.3 Интерактив
- Accordion, tabs (EL-069, EL-032), flip box (EL-044), animated headline (EL-040), countdown (EL-042), progress bar (EL-067), star rating (EL-068), table of contents (EL-053), hotspot, map (EL-062), form variants §2.16, newsletter, booking select, privacy checkbox, call-back date/time pickers, search form, filter dropdowns (case studies), product attribute swatches (size)

### 8.4 Сетки и карточки
- 2/3/4/6 column grids, masonry loop (EL-002), carousel loops (EL-003, EL-011), scroller horizontal (all *-scroller), bento-style, alternating rows, icon box grid (EL-027), case card, blog card, product card, team card, logo card, service card, industry card, pricing card, stat card, KPI result card, featured + sidebar blog

### 8.5 Commerce (WooCommerce)
- Product grid, category carousel (EL-012), simple products (EL-015), cart, checkout, my-account, sale badge, size attribute URL, product-tag, shop-default-page, returns/shipping pages (fashion-2026), wine club, newsletter winery

### 8.6 Специализированные ниши
- **Finance:** tax services list, investment pillars, corporate KPI $6.5M, consultation free  
- **Logistics:** fleet cards, transport modes grid, promo CTA trio, 24/7 support icons  
- **Hotel:** rooms, spa, dining, special offers, search results  
- **Courses:** instructor, course_category, free vs premium  
- **Brewery:** ABV/IBU product meta, merch  
- **Beauty:** service sub-bullets, salon count, Instagram  
- **Pilates:** class booking form, membership tiers  
- **Nutrition:** meal day plan, grocery list step, plan compare  
- **Product tech:** spec table, app store badges, award badges, variant style picker  

---

## 9. Матрица: какое демо смотреть для задачи

| Задача prime-ltd | Первичные демо | Каталоги блоков |
|------------------|----------------|-----------------|
| B2B корпоративный сайт | fse-business, fse-company, fse-corporate | business/blocks + company/layouts |
| Маркетинг / кейсы | fse-marketing | marketing/layouts (case-cards, row-with-content) |
| Услуги + FAQ | fse-marketing/services, fse-business/services | accordion, lists |
| Тарифы | fse-nutrition/pricing, fse-company/layouts/pricing-table | pricing-tables |
| О компании + история | fse-business/about, company/layouts/timeline | process, timeline |
| Контакты + формы | fse-marketing/contact, pilates/contact-forms | forms |
| Портфолио / проекты | elementor-2025, elementor-main, agency | project/, elements_list |
| Магазин | brand-shop, elementor-shop | elementor products widgets |
| Универсальный Elementor | elementor-main | 51× elements_list |
| Креативное агентство | elementor-creative-dark/light, agency | portfolio, project |

---

## 10. Чеклист для prime-ltd (обновлённый)

### Обязательно (фаза 1)
- [ ] G-01, G-07, H-02 или H-01  
- [ ] NUM (3–4 KPI) — §2.5  
- [ ] icon-cards или service-cards — §2.8, 2.18  
- [ ] LOGO — §2.13  
- [ ] TST (≥3 варианта) — §2.6  
- [ ] CTA — §2.4  
- [ ] FORM-02/03 — §2.16  

### Расширение (фаза 2)
- [ ] CASE-01..06 (кейсы)  
- [ ] PROC/steps — §2.12  
- [ ] BLOG cards — §2.2  
- [ ] FAQ accordion — §2.1  
- [ ] row-with-content — §2.11  
- [ ] lists segments — §2.10  
- [ ] timeline — §2.12  

### По необходимости (фаза 3)
- [ ] PRICE + compare — §2.14  
- [ ] content-cards-scroller — §2.17  
- [ ] cta-banners (10 вариантов) — §2.4  
- [ ] Elementor widgets из §3  
- [ ] WooCommerce §4.1  
- [ ] video row — brewery  

---

## 11. Ограничения аудита

- **Не все 78 демо** обходились страница за страницей; полностью проиндексированы FSE (9 демо, 112 layout URL) + elementor-main (51 widget) + 30 демо по типам внутренних страниц.  
- WPBakery-демо (construction, yoga, law…) имеют другую структуру (`dt_team`, `dt_slideshow`) — нужен отдельный проход при выборе WPB.  
- На каждой layout-странице **10–40 визуальных вариантов** одного типа — в ТЗ указывайте конкретный URL-якорь из JSON.  
- Демо `elementor-2026` в каталоге может отличаться от `elementor-2025` — проверять актуальный slug на [the7.io/#demos](https://the7.io/#demos).

---

## 12. История

| Версия | Дата | Изменение |
|--------|------|-----------|
| v1 | 22.05.2026 | ~70 элементов, 4 демо первого ряда |
| v2 | 22.05.2026 | 112 layouts, 51 widgets, ~420 типов, JSON-каталог, 30+ демо inner types |
| doc-pack-1.0 | 22.05.2026 | README, glossary, blueprints, tokens, agent-notes, registry JSON, prime spec, offline archive |

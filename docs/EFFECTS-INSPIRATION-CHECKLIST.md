# Чеклист демо и каталог эффектов (для `/razrabotka-saytov/`)

Дата: 2026-07-23  
Статусы обхода: `[ ]` не смотрели · `[~]` частично · `[x]` разобрано · `[!]` must-have · `🔒` preview locked/paywall · `🖼️` только iframe host

---

## Как пользоваться

1. Сначала закрыть все `[ ]` в §A (прямые ссылки пользователя).
2. По каталогам (§B): открыть Live preview каждой темы → дописать эффекты в строку.
3. Сводный словарь эффектов — §C. Приоритет внедрения — §D.

---

## A. Прямые референсы (пользователь)

| # | Сайт | URL | Обход | Приоритет |
|---|------|-----|-------|-----------|
| A00 | Локально: Разработка | http://localhost:3004/razrabotka-saytov/ | [x] | база |
| A01 | Meridian | https://meridian-astro-template.vercel.app/ | [x] | высокий |
| A02 | Kinto | https://kinto-astro-template.vercel.app/ | [x] | средний |
| A03 | Hive | https://hive-astro-template.vercel.app/ | [x] | средний |
| A04 | Plasma | https://plasma-astro-template.vercel.app/ | [x] | средний |
| A05 | Aspect | https://aspect-astro-template.vercel.app/ | [x] | средний |
| A06 | Sonic | https://sonic-astro-template.vercel.app/ | [x] | высокий (слайдер) |
| A07 | Ink | https://shadcn-astro-ink-landing-page.vercel.app/ (host: shadcnstudio preview) | [x] | кнопки |
| A08 | Bistro | https://shadcn-astro-bistro-landing-page.vercel.app/ | [x] | средний |
| A09 | Grow | https://shadcn-astro-grow-landing-page.vercel.app/ | [x] | **[!]** плавающий элемент |
| A10 | Matter | https://shadcn-astro-matter-landing-page.vercel.app/ | [x] | **[!]** робот |
| A11 | Craft | https://shadcn-astro-craft-landing-page.vercel.app/ | [x] | высокий |
| A12 | Flow | https://shadcn-astro-flow-landing-page.vercel.app/ | [x] | высокий |
| A13 | Swipe | https://shadcn-astro-swipe-landing-page.vercel.app/ | [x] | **[!]** телефон + сайт |
| A14 | Neural | https://shadcn-astro-neural-landing-page.vercel.app/ | [x] | высокий |
| A15 | Brandly | https://shadcn-nextjs-brandly-full-template.vercel.app/ | [x] | средний |
| A16 | Kinetic Studio | https://kinetic-studio-ag4.pages.dev/ | [x] | высокий |
| A17 | Fortify | https://fortify-astro.vercel.app/ | [x] | средний |
| A18 | Looka | https://looka-astro.pages.dev/ | [x] | средний |
| A19 | Stella | https://stella-astro.pages.dev/ | [x] | средний |

---

## B. Каталоги (каждый live preview = отдельная строка)

| # | Каталог | URL | Список тем | Обход эффектов |
|---|---------|-----|------------|----------------|
| B01 | AstroCommerce | https://headless.hasthemes.com/ | [x] 10 + preview URLs | [x] 10/10 |
| B02 | Lexington | https://lexingtonthemes.com/ | [x] 44 templates | [x] 43/44 (+Streamer 🔒) |
| B03 | xoco | https://xocothemes.com/ | [x] 15 + preview URLs | [x] 15/15 |
| B04 | AstroVault | https://astro.hasthemes.com/ | [x] 36 + pages.dev | [x] 36/36 CSS |
| B05 | Getastrothemes | https://getastrothemes.com/astro-themes/ | [x] 12 + demos | [x] 12/12 |
| B06 | Cosmic Themes | https://cosmicthemes.com/ | [x] 21 demos | [x] ~20/20 |
| B07 | Themefisher Bundle | https://themefisher.com/bundles/astro-bundle | [x] 41 demos | [x] 41/41 CSS |
| B08 | Kinetic | https://kinetic-studio-ag4.pages.dev/ | — | [x] = A16 |

---

## A00 — База: `/razrabotka-saytov/`

### Уже есть
- Spectrum: строгий ACME-B2B vs живой блок
- Cursor parallax (mesh / orbs / floats / 3D tilt)
- Idle breath, growing chart, count-up
- Scroll reveal, hero photo parallax
- Стек: Bitrix, Webasyst, Мультилендинг, Next.js, Astro

### Взять с референсов
- [x] Device-as-viewport + подмена сайта (Swipe) **[!]** — `#products` на `/razrabotka-saytov/`
- [x] Giant wordmark + animated figure (Matter) **[!]** — outlined «ПРАЙМ» + NEXBOT CC0
- [x] Floating cards state-swap (Grow) **[!]** — spectrum live float cards
- [x] Before/after drag (Kinetic) — `#spectrum` compare slider
- [x] Rotating headline word (Flow / Brandly) — hero H1 chip + proof skeleton boot
- [x] Product dots slider (Sonic) — `#products` dots under phone
- [x] Phone mock gallery (Kinto / Swipe) — 3 телефона в `#products`
- [x] Orbiting icons + ripples (Brandly) — орбита + pulse rings
- [x] Button expressive click (Ink) — `data-ink-btn` ripple
- [x] Horizontal feature rail (Plasma) — стек платформ со стрелками
- [x] Energy beam atmosphere (Neural) — вертикальный beam в hero

---

## Детальный каталог эффектов (A)

### A01 Meridian — [x]
https://meridian-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Faux analytics console | Hero | Tabs/sidebar меняют state дашборда |
| Tilted product reveal | Hero | Диагональный вход макета |
| Pulsing live dots | Incident UI | Пульс статуса |
| Before/after metrics | Alerts section | 217 → 2 alerts |
| Staged on-call workflow | Six minutes… | Page→Detect→Draft→Resolve |
| Dynamic Island switcher | Island | Cycle/tap live activities |
| Logo-hover → quote | Trusted | Hover логотипа |
| Invoice/ledger pricing | Pricing | Планы как счета |
| Theme toggle | Header | Light/dark |
| Testimonial carousel | Quotes | Dots + arrows |

---

### A02 Kinto — [x]
https://kinto-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Auto-rotating insight cards | Hero | Journal cards по таймеру |
| Layered paper depth | Hero | Offset sheets |
| Dot storytelling | After hero | Точки = главы |
| Floating phone mockups | See it in action | Write/Reflect/Discover |
| Stats + comparative bars | Inner world | Data storytelling |
| Theme toggle | Header | |

---

### A03 Hive — [x]
https://hive-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Oversized wordmark | Hero | Brand-first |
| Project gallery strip | Under hero | 3 visual columns |
| Case carousels | Projects | Arrows + dots |
| Dark→light scroll | Page | Editorial reveal |
| Theme toggle + clock | Header | |

---

### A04 Plasma — [x]
https://plasma-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Gradient bloom | Hero | Purple–pink atmosphere |
| Workflow canvas mock | Hero | Nodes + grid + logs |
| Horizontal feature rail | Features | Arrow-controlled track |
| Product slider | Hero | Prev/next |
| Tabbed explainer | Mid-page | Content swap |
| AI staged generation | AI section | «Generating step N» |
| Dark glass + neon | Mockups | |

---

### A05 Aspect — [x]
https://aspect-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Infinite logo marquee | Trusted | ~25s loop |
| Feature tabs → UI swap | Features | Dashboard mock меняется |
| FAQ accordion | FAQ | |
| Billing toggle | Pricing | |
| Theme toggle | Header | |

---

### A06 Sonic — [x] `[!]` слайдер
https://sonic-astro-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Centered product hero | Hero | Large product shot |
| **Circular media selector** | Product | 5 dots → смена кадра |
| FAQ accordion | FAQ | |
| Page transition overlay | Global | Brief flash |
| CTA micro-interactions | Buttons | Hover/focus |

---

### A07 Ink — [x] 🖼️ `[!]` кнопки
https://shadcnstudio.com/preview/templates/shadcn-astro-ink-landing-page

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Host theme recolor | Shell | Select Theme |
| Image reveal on cards | Articles | Image fills after text |
| Theme toggle | Header | Compact |
| Arrow icon buttons | Cards | Hover targets |
| Filter tabs + search | Content | |
| Expressive click/ripple | Subscribe | **не подтверждено** |

---

### A08 Bistro — [x] 🖼️
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Dish selector / testimonial rotator | Hero | Thumbnails |
| Image carousel | Below hero | Prev/next |
| Sticky nav | Global | |
| Card hover CTA overlays | Menu | |
| Wave/diagonal section edges | Page | Rhythm |

---

### A09 Grow — [x] 🖼️ `[!]`
**Прямой URL:** https://shadcn-astro-grow-landing-page.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Tilted floating metric cards | Hero flanks | Impression/Order charts, CCW/CW |
| Central tilted floating tile | Hero | «Grow» парит |
| Opposed off-canvas cards | Hero | Tilted stacks |
| **State-swap datasets** | Hero | Карточки обмениваются ролями |
| Logo marquee | Trust | Horizontal ~20s |
| Ripple rings | Decoration | CSS `ripple` ~3s, scale 1↔0.9 |
| Scroll-linked 3D dashboard panels | Product preview | `perspective-distant` + tab swap |
| Scroll count-up stats | Results | Start at `0 K` |
| Card hover tilt | Portfolio | `group-hover:rotate-±3` |

---

### A10 Matter — [x] 🖼️ `[!]` робот
**Прямой URL:** https://shadcn-astro-matter-landing-page.vercel.app/

> **Лицензия / прод:** композиция Matter = **inspiration only**. 3D-робота из демо шаблона в прод **не** берём (права демо-ассета неясны). На `/razrabotka-saytov/` стоит **NEXBOT** (Spline Community, **CC0 1.0**) — см. [ASSETS-LICENSES.md](./ASSETS-LICENSES.md).

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Giant wordmark behind figure | Hero | Outlined «ROBO» |
| **WebGL 3D robot** | Hero | Canvas ~full viewport; Connectivity/CPU chips |
| Feature hotspots | On model | 4 glowing dots + connector line cards |
| Spec counters from zero | `#features` | Scroll-triggered → `5'8`, `48KG`, … |
| Vertical testimonial marquee | Mid | CSS `marquee-vertical` ~70s, pause on hover |
| Scroll affordance | Corner | Circular “scroll down” cue |
| Use-case / blog carousels | Mid page | Prev/Next |
| Theme switch keep figure | Theme | Dark↔light |

---

### A11 Craft — [x] 🖼️
**Прямой URL:** https://shadcn-astro-craft-landing-page.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Availability ping | Hero badge | Green CSS `ping` ~1s |
| Blur→sharp / appear fade | Hero | WAAPI opacity ~400ms |
| Perspective browser stack | Hero | 3 tilted windows |
| Logo / social marquee | Trust | Horizontal ~20s |
| Trust row | Hero | Avatars+rating+logos |
| Side dot-grid | Edges | Blueprint feel |
| Experience accordions | Mid | Jobs & projects |

---

### A12 Flow — [x] 🖼️
**Прямой URL:** https://shadcn-astro-flow-landing-page.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Skeleton→live boot | Dashboard | Pulse placeholders + welcome toast spinner |
| Rotating headline word | H1 chip | Growth→Revenue→Sales (~0.8s samples) |
| Product-as-UI | Under CTA | |
| Logo marquee | Trust | ~20s |
| Scroll counters | Features | Reach / users / queries from `0` |
| Grid/radial atmosphere | BG | + diagonal side stripes |

---

### A13 Swipe — [x] `[!]` телефон
**Прямой URL:** https://shadcn-astro-swipe-landing-page.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Soft sky/cloud atmosphere | Hero BG | Blurred gradient sky |
| Floating pill glass nav | Header | backdrop-blur + soft shadow |
| Gradient glow CTA | Header/Hero | Teal gradient + outer glow |
| **Phone as viewport** | Hero | Smartphone frame cropped mid-viewport |
| **Floating breakout cards** | Around phone | Amazon $800, expense graph, $13k, tips |
| In-phone dashboard UI | Screen | Chart + Hi user + tabs |
| **Category orbit ring** | Around phone | ~18 chips, CSS `orbiting` **54s** (Personal, Food…) |
| Spinner / status ping | Chips | `spin` 2s · `ping` 1s |
| Horizontal marquees | Logos/testimonials | 35–50s loops, pause on hover |
| Theme toggle / pricing tabs / FAQ | Header, Pricing, FAQ | |

**P0 для разработки:** телефон-макет, внутри ротация лендинг/визитка/корп/магазин + floating badges метрик + orbit category chips.

---

### A14 Neural — [x] 🖼️
**Прямой URL:** https://shadcn-astro-neural-landing-page.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Vertical luminous beam | Hero | Bloom + 2 canvases FX |
| Orbiting UI chips | Hero | CSS `orbit` ~20s |
| Horizontal marquee | Logos | ~40s |
| Cloud/noise atmosphere | BG | Cyan accent |
| AI chat panel | Below | Online status |
| Glass nav | Header | |

---

### A15 Brandly — [x]
https://shadcn-nextjs-brandly-full-template.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Orbiting brand icons | Hero | 15–30s |
| Ripple rings | Center | Expanding |
| Pulse CTA | Edge | Heartbeat |
| Headline word swap | H1 | ~500ms |
| Testimonial carousel | Clients | |
| FAQ accordion | FAQ | |
| Floating Buy widget | Viewport | |

---

### A16 Kinetic — [x]
https://kinetic-studio-ag4.pages.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Stagger line reveal | Hero | Upward |
| Tilted art-card stack | Hero | Depth |
| **Before/after drag slider** | Blueprint | Wireframe↔polish |
| Case galleries / showreel | Work | Video |
| Scroll storytelling | Page | |
| Marquee collaborations | Mid | |
| Count-up stats | Expertise | |
| Process steps carousel | Process | |
| Back-to-top | Footer | |

---

### A17 Fortify — [x]
https://fortify-astro.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Layered dashboard mocks | Hero | |
| Scroll data storytelling | Features | |
| Pricing switcher | Pricing | Monthly/yearly |
| Testimonial strip | Reviews | |
| Pill CTAs + arrow chips | Global | |

---

### A18 Looka — [x]
https://looka-astro.pages.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Hero image slider | Hero | Cross-slide фото |
| Ken Burns | Active hero photo | Slow 20s pan/zoom |
| Logo/partner marquees | Mid | Continuous scroll |
| Pulse waves on play | Video controls | Pulsing rings |
| Carousel nav | Sections | |
| Hover-scale play buttons | Media | Scale on hover |

### A19 Stella — [x]
https://stella-astro.pages.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Word-by-word headline reveal | Hero | ~0.6s per word |
| Rotating gradient accent | Hero | 10s loop |
| Infinite logo marquee | Partners | |
| Banner image entrance | Hero/media | Short transition |

---

## B01 AstroCommerce — https://headless.hasthemes.com/

| # | Тема | Preview | Статус | Эффекты (кратко) |
|---|------|---------|--------|------------------|
| 1 | Omnix | https://omnix.hastech.workers.dev/ | [x] | carousel, marquees, cart/wishlist/compare/QV, pulse |
| 2 | Aurelis | https://aurelis.hastech.workers.dev/ | [x] | carousel, accordion, drawers, marquee |
| 3 | Asmaz | https://asmaz.hastech.workers.dev/ | [x] | drawers, marquee, reveal |
| 4 | Curio | https://curio.hastech.workers.dev/ | [x] | carousel, drawers |
| 5 | Tailored | https://tailored.hastech.workers.dev/ | [x] | hero marquee+spin, hover scale, cart-ship-glow |
| 6 | Dojeen | https://dojeen.hastech.workers.dev/ | [x] | drawers, marquee, **parallax**, reveal, video |
| 7 | Edition | https://edition.hastech.workers.dev/ | [x] | carousel, drawers, marquee, reveal, video |
| 8 | Marvexa | https://marvexa.hastech.workers.dev/ | [x] | drawers, marquee |
| 9 | Velvet | https://velvet.hastech.workers.dev/ | [x] | carousel, drawers, marquee, reveal, video |
| 10 | Glowvi | https://glowvi.hastech.workers.dev/ | [x] | ed-marquee, fadeInUp/reveal, cart-bump, drawers |

### Omnix — [x]
https://omnix.hastech.workers.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Hero / announce carousel | Hero | Слайды + `slideIn` |
| Brand logo marquee | Trust | `brandScroll` infinite |
| Product marquee tracks | Mid | `marqueeScroll` + thumbs |
| Testimonial vertical scroll | Reviews | `testScrollUp` / `testScrollDown` + `testPulse` |
| Search spinner | Search | `search-spin` |
| Live pulse accents | Deals / status | `lk-pulse`, `pulse` |
| Cart / wishlist / compare drawers | Global | Overlay open/close |
| Quick view | Product cards | Modal preview |
| Sticky header + back-to-top | Global | Fixed chrome |

### Tailored — [x]
https://tailored.hastech.workers.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Hero marquee | Hero | `hero-marq` continuous |
| Hero spin accent | Hero | `hero-spin` |
| Product image scale | Cards | `group-hover:scale-[1.04…1.07]` |
| Lift on hover | CTAs / cards | `hover:-translate-y-*` |
| Cart ship glow | Cart | `cart-ship-glow` |
| Wishlist / add-to-cart | Products | Instant feedback |
| Backdrop blur panels | Drawers | `backdrop-blur-[2…20px]` |
| Currency switcher | Header | Dropdown |

### Glowvi — [x]
https://glowvi.hastech.workers.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Editorial marquee | Strips | `ed-marquee` / `e-marquee` ~32s |
| Fade-in-up reveal | Sections | `fadeInUp` + `.reveal` |
| Cart bump | Cart badge | `cart-bump` |
| Drawer item enter | Cart drawer | `drawerItemIn` |
| Dropdown in | Menus | `ddIn` |
| Wishlist / search pulse | UI | `wl-pulse`, `skel-pulse`, `search-spin` |
| Discount spin | Promo | `discountSpin` |
| Video pause | Media | Play/pause |

---

## B02 Lexington — https://lexingtonthemes.com/

Паттерн: detail → **Live Demo** → `/viewports/<slug>` (🖼️ host) → direct `https://<slug>-astro.pages.dev/`.

| Тема | Demo | Статус | Эффекты (кратко) |
|------|------|--------|------------------|
| Astromax SP | https://astromaxsp-astro.pages.dev/ | [x] | marquee 50s, keen-slider work, sticky, search blur |
| Aubergine | https://aubergine-astro.pages.dev/ | [x] | hover-spin, pricing MQY tabs, blur overlays |
| Kotei | https://kotei-astro.pages.dev/ | [x] | marquee, theme toggle, CTA stacked-label reveal |
| Outkast | https://outkast-astro.pages.dev/ | [x] | multi-speed marquees, keen-slider, pricing hovers |
| Studiomax | https://studiomax-astro.pages.dev/ | [x] | geometric hero, mono type, section reveals |
| Flabbergasted | https://flabbergasted-astro.pages.dev/ | [x] | marquee, pulse, grayscale→color logos, keen-slider |
| Spazio Bianco | https://spaziobianco-astro.pages.dev/ | [x] | multi-speed marquees, hover:scale-120, shadow lift |
| Alfred | https://alfred-astro.pages.dev/ | [x] | marquee, keen-slider, group-hover color packs |
| Brightlight | https://brightlight-astro.pages.dev/ | [x] | marquee, card tilt/nudge, shadow lift |
| Aelen | https://aelen-astro.pages.dev/ | [x] | AOS, keen-slider, marquee, kf:upMarqueeFast |
| Bastion | https://bastion-astro.pages.dev/ | [x] | keen-slider |
| Buio | https://buio-astro.pages.dev/ | [x] | AOS, animate-pulse, keen-slider, reveal, kf:pulse |
| Carbon | https://carbon-astro.pages.dev/ | [x] | quiet |
| Carriera | https://carriera-astro.pages.dev/ | [x] | quiet |
| Carrington | https://carrington-astro.pages.dev/ | [x] | quiet |
| Copperlane | https://copperlane-astro.pages.dev/ | [x] | quiet |
| Dusk | https://dusk-astro.pages.dev/ | [x] | quiet |
| Ella Mae | https://ellamae-astro.pages.dev/ | [x] | AOS, animate-marquee, keen-slider, marquee, kf:marquee |
| Enlightr | https://enlightr-astro.pages.dev/ | [x] | AOS, keen-slider |
| Flaco | https://flaco-astro.pages.dev/ | [x] | animate-marquee, marquee, kf:marquee |
| Hemingway | https://hemingway-astro.pages.dev/ | [x] | quiet |
| Hirewise | https://hirewise-astro.pages.dev/ | [x] | quiet |
| Matterhaus | https://matterhaus-astro.pages.dev/ | [x] | quiet |
| Molle | https://molle-astro.pages.dev/ | [x] | keen-slider |
| Mulberry | https://mulberry-astro.pages.dev/ | [x] | quiet |
| Navy | https://navy-astro.pages.dev/ | [x] | keen-slider |
| Newport | https://newport-astro.pages.dev/ | [x] | quiet |
| Northbound | https://northbound-astro.pages.dev/ | [x] | keen-slider |
| Phanatik | https://phanatik-astro.pages.dev/ | [x] | animate-marquee, keen-slider, marquee, kf:marquee |
| Prima Persona | https://primapersona-astro.pages.dev/ | [x] | quiet |
| Profoliox | https://profoliox-astro.pages.dev/ | [x] | AOS, animate-marquee, marquee, kf:marquee |
| Quartiere | https://quartiere-astro.pages.dev/ | [x] | AOS, keen-slider |
| Riflesso | https://riflesso-astro.pages.dev/ | [x] | reveal |
| Rosewood | https://rosewood-astro.pages.dev/ | [x] | keen-slider |
| Sandstone | https://sandstone-astro.pages.dev/ | [x] | animate-marquee, keen-slider, marquee, kf:marquee |
| Semplice | https://semplice-astro.pages.dev/ | [x] | animate-ping, animate-pulse, animate-spin, keen-slider, view-transition, kf:pulse, kf:spin |
| Simplexity | https://simplexity-astro.pages.dev/ | [x] | AOS |
| Snowpeak | https://snowpeak-astro.pages.dev/ | [x] | animate-marquee, keen-slider, marquee, kf:marquee |
| Streamer | — | 🔒 | demo URL не найден / недоступен |
| Trendspotter | https://trendspotter-astro.pages.dev/ | [x] | Carousel, drawer |
| Vanta | https://vanta-astro.pages.dev/ | [x] | keen-slider, reveal |
| Westend | https://westend-astro.pages.dev/ | [x] | Carousel, keen-slider |
| Williamsburg | https://williamsburg-astro.pages.dev/ | [x] | drawer, keen-slider |
| Zero Index | https://zeroindex-astro.pages.dev/ | [x] | accordion, animate-spin, kf:spin |

**Паттерн Lexington:** keen-slider + marquees на agency/SaaS; много editorial (`quiet` = почти без loop CSS). Streamer — demo недоступен.

### Astromax SP — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Horizontal text marquee | Under hero | `animate-marquee` 50s infinite ticker |
| Keen-slider work carousel | Portfolio | Prev/next arrows |
| Sticky dark header | Global | `sticky top-0` |
| Search overlay | Global | Backdrop-blur modal |
| Hover color / fill swaps | Nav, CTAs | `hover:text-accent-*`, `hover:rounded-none` |
| Brutalist oversized type + grid | Hero | High-impact static grid |

### Aubergine — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Hover spin | Interactive | `hover:animate-spin` |
| Pricing plan tabs | Membership | Monthly / Quarterly / Yearly |
| Backdrop-blur overlays | Search / menus | `backdrop-blur` / `xl` |
| Fixed search FAB | Corner | Floating control |
| Hover gradient / text | Cards | `hover:to-accent-400` |

### Kotei — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Marquee | Mid | `animate-marquee` |
| Theme toggle | Header | Dark/light |
| Stacked CTA label reveal | Buttons | `group-hover:-translate-y-[150%]` → `translate-y-0` |
| Sticky + blur | Header | |

### Outkast — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Multi-speed marquees | Strips | `marquee` / `rightMarquee` / `slowMarquee` (+ vertical kf) |
| Keen-slider projects | Portfolio | Prev/next |
| Pricing + accent hovers | Mid | pink/accent pops |
| Sticky header | Global | |

### Flabbergasted — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Marquee | Trust | `animate-marquee` |
| Pulse accents | AI / live UI | `animate-pulse` |
| Keen-slider | Features | Prev/next |
| Grayscale→color | Logo grid | `group-hover:grayscale-0` |
| Heavy blur | Atmosphere | `backdrop-blur-3xl` |
| Pricing tiers | Pricing | |

### Spazio Bianco — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Multi-speed marquees | Strips | `marquee` / `quickMarquee` / `slowMarquee` |
| Hover scale | Cards | `hover:scale-120` |
| Shadow lift | Cards | `hover:shadow-2xl` |
| Arrow nudge | Links | `group-hover:translate-x-2` |

### Alfred — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Marquee | Trust / tools | `animate-marquee` |
| Keen-slider | Product demos | Keyboard-key themed UI |
| Group-hover color packs | Feature cards | green/rose/teal swaps |
| Sticky nav + pricing | Global | |

### Brightlight — [x]
| Эффект | Где | Поведение |
|--------|-----|-----------|
| Marquee | Logos | `animate-marquee` |
| Card tilt / nudge | Features | `group-hover:-rotate-12`, `-translate-*` |
| Shadow lift | Cards | `hover:shadow-2xl` |
| Sticky + pricing | Global | |

---

## B03 xoco — https://xocothemes.com/

| Тема | Preview | Статус | Эффекты (кратко) |
|------|---------|--------|------------------|
| Forma | https://forma.xocoweb.workers.dev/ | [x] | View Transitions, pillar slider, hover-zoom |
| Respawn | https://respawn.xocoweb.workers.dev/ | [x] | pulse, hover:scale, reveal |
| Vector | https://vector.xocoweb.workers.dev/ | [x] | quiet changelog, reveal/dialog |
| Politica | https://politica.xocoweb.workers.dev/ | [x] | quiet editorial |
| Monarque | https://monarque.xocoweb.workers.dev/ | [x] | drawer, hover:scale, reveal |
| Gazeta | https://gazeta.xocoweb.workers.dev/ | [x] | quiet magazine |
| POPCURRENT | https://popcurrent.xocoweb.workers.dev/ | [x] | marquee, pulse, reveal |
| Cucinetta | https://cucinetta.xocoweb.workers.dev/ | [x] | quiet recipes |
| Passporto | https://passporto.xocoweb.workers.dev/ | [x] | drawer, hover:scale |
| Semnal | https://semnal.xocoweb.workers.dev/ | [x] | marquee, **orbit**, pulse, reveal |
| Maria | https://maria-lake.vercel.app/ | [x] | theme toggle, quiet editorial (почти без loop-anim) |
| Compass | https://compass-lilac-tau.vercel.app/ | [x] | docs accordion/tabs |
| Atelier Kō | https://atelier-ko-topaz.vercel.app/ | [x] | `atelier-fade-in`, hover:scale |
| QuietPages | https://quietpages-eta.vercel.app/ | [x] | quiet editorial |
| Ombra | https://ombra-lemon.vercel.app/ | [x] | marquee, `ember-pulse` |

### Maria (free) — [x]
https://maria-lake.vercel.app/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Theme toggle | Header | Light ↔ dark |
| Nav dropdown | «Other» | Collapse/expand |
| Case-study cards | Work | Link cards (minimal motion) |
| Cookie consent sheet | Overlay | Preferences open/close |
| Mobile nav | Header | Toggle |

### Forma (premium) — [x]
https://forma.xocoweb.workers.dev/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Astro View Transitions | Global | `astroFade*` + `astroSlideFrom/To*` |
| Pillar slider | Six pillars | Prev/next (`slider-track` / `fill` / `arrow`) |
| Image hover-zoom | Article cards | `.hover-zoom` |
| Color/border hovers | Links | `hover:text-accent`, `hover:border-accent` |
| Sticky / quick nav | Header | |

---

## B04 AstroVault — https://astro.hasthemes.com/

| Тема | Preview | Эффекты |
|------|---------|---------|
| Cyberix | https://cyberix-19f.pages.dev/ | [x] | marquee, reveal, swiper, kf:swiper-preloader-spin, kf:ticker-marquee |
| Exporta Global | https://exporta-global.pages.dev/ | [x] | marquee, reveal, kf:pulse, kf:scroll |
| Folio | https://folio-b4h.pages.dev/ | [x] | drawer, kf:folio-fade |
| Zarex | https://zarex-3rf.pages.dev/ | [x] | drawer, gsap, lenis, lottie, marquee, kf:partner-marquee |
| Axiona | https://axiona.pages.dev/ | [x] | kf:fadeIn, kf:fadeOut |
| OrbiTask | https://orbitask.pages.dev/ | [x] | AOS, marquee, orbit, kf:marquee |
| Travlo | https://travlo.pages.dev/ | [x] | Carousel, accordion, marquee, reveal, view-transition, kf:gallery-marquee, kf:marquee, kf:spin |
| Seavia | https://seavia.pages.dev/ | [x] | marquee, view-transition |
| SaaXent | https://saaxent.pages.dev/ | [x] | reveal, kf:cta-bg-card-float, kf:cta-expenses-float, kf:featured-chart-float, kf:fsc-v1-chart-float |
| TechZen | https://techzen-4p6.pages.dev/ | [x] | quiet |
| SaaSez | https://saasez.pages.dev/ | [x] | marquee, kf:feature-float-1, kf:feature-float-2, kf:float, kf:float-gentle |
| Taskbes | https://taskbes.pages.dev/ | [x] | accordion, animate-spin, marquee, reveal |
| SaaSonic | https://saasonic.pages.dev/ | [x] | accordion, drawer, marquee, reveal, kf:float, kf:glow-pulse, kf:hero-card-float, kf:hero-float-side |
| Buildo | https://buildo.pages.dev/ | [x] | marquee, parallax, reveal, kf:float, kf:float-reverse-sm, kf:float-rotate, kf:float-sm |
| Unio | https://unio-eni.pages.dev/ | [x] | accordion, kf:logo-scroll, kf:spin |
| Diagonsy | https://diagonsy.pages.dev/ | [x] | accordion, kf:hero-pulse, kf:hero-scroll-bounce |
| Boative | https://boative.pages.dev/ | [x] | marquee, view-transition, kf:backdropFadeIn, kf:fadeSlide, kf:headerSlideDown, kf:marquee |
| Rolixy | https://rolixy.pages.dev/ | [x] | quiet |
| Arcbes | https://arcbes.pages.dev/ | [x] | ripple, kf:ripple, kf:scrollLinePulse |
| Dorbar | https://dorbar.pages.dev/ | [x] | accordion, gsap, swiper |
| Donarix | https://donarix.pages.dev/ | [x] | accordion, marquee, reveal, kf:companyLogoMarquee, kf:heroSlideUp, kf:howItWorksSpin, kf:lightboxPulse1 |
| Candid | https://candid-cv6.pages.dev/ | [x] | AOS, reveal, kf:donation-pulse, kf:spin |
| Nextvex | https://nextvex.pages.dev/ | [x] | gsap, lenis, marquee, parallax, reveal |
| Trevane | https://trevane.pages.dev/ | [x] | swiper, kf:fadeIn, kf:fadeUp, kf:logoScroll, kf:pulseDot |
| Voynara | https://voynara.pages.dev/ | [x] | accordion, reveal |
| Enonix | https://enonix.pages.dev/ | [x] | AOS, marquee, kf:fadeInUp, kf:float1, kf:float2, kf:float3 |
| Asuric | https://asuric.pages.dev/ | [x] | gsap, marquee, reveal, kf:marquee |
| Drolix | https://drolix.pages.dev/ | [x] | Carousel, drawer, marquee, kf:marquee-scroll |
| Transio | https://transio-cdu.pages.dev/ | [x] | marquee, view-transition, kf:contact-icon-pulse, kf:destination-pulse-one, kf:destination-pulse-two, kf:lightbox-circle-pulse |
| Influvo | https://influvo.pages.dev/ | [x] | accordion, marquee, kf:marquee |
| Luxorefi | https://luxorefi.pages.dev/ | [x] | marquee, view-transition, kf:marquee, kf:scroll-thumbnails |
| Illuspro | https://illuspro.pages.dev/ | [x] | animate-marquee, lenis, marquee, reveal, kf:ix-spin, kf:marquee, kf:marquee-reverse |
| Legality | https://legality.pages.dev/ | [x] | marquee, reveal, kf:marqueeLeft |
| Saasto | https://saasto.pages.dev/ | [x] | AOS, marquee, reveal, kf:keyBenefitsMobileScroll |
| Realsto | https://realasto.pages.dev/ | [x] | marquee |
| Forken | https://forken.pages.dev/ | [x] | marquee, reveal, kf:about-scroll-pulse, kf:heroScrollBounce, kf:interior-scroll, kf:marquee |

**Standouts (для разработки):**
- Zarex: drawer, gsap, lenis, lottie, marquee, kf:partner-marquee
- OrbiTask: AOS, marquee, orbit, kf:marquee
- SaaXent: reveal, kf:cta-bg-card-float, kf:cta-expenses-float, kf:featured-chart-float, kf:fsc-v1-chart-float
- SaaSez: marquee, kf:feature-float-1, kf:feature-float-2, kf:float, kf:float-gentle
- SaaSonic: accordion, drawer, marquee, reveal, kf:float, kf:glow-pulse, kf:hero-card-float, kf:hero-float-side
- Buildo: marquee, parallax, reveal, kf:float, kf:float-reverse-sm, kf:float-rotate, kf:float-sm
- Dorbar: accordion, gsap, swiper
- Nextvex: gsap, lenis, marquee, parallax, reveal
- Enonix: AOS, marquee, kf:fadeInUp, kf:float1, kf:float2, kf:float3
- Asuric: gsap, marquee, reveal, kf:marquee
- Illuspro: animate-marquee, lenis, marquee, reveal, kf:ix-spin, kf:marquee, kf:marquee-reverse

---

## B05 Getastrothemes

Прямые демо: `https://<slug>-astro.pages.dev/` (host `/demo/<slug>/` = iframe).

| Тема | Demo | Эффекты |
|------|------|---------|
| Looka | https://looka-astro.pages.dev/ | [x] см. A18 |
| Stella | https://stella-astro.pages.dev/ | [x] см. A19 |
| Techbyte | https://techbyte-astro.pages.dev/ | [x] | Carousel, accordion, animate-ping, animate-pulse, animate-spin, lenis, marquee, reveal, swiper, kf:marquee, kf:pulse, kf:spin |
| Techlo | https://techlo-astro.pages.dev/ | [x] | accordion, animate-spin, lenis, marquee, reveal, kf:banner-one-image-float, kf:banner-two-frame-float, kf:banner-two-frame-float-reverse, kf:banner-two-hero-float, kf:marquee |
| Taxo | https://taxo-astro.pages.dev/ | [x] | AOS, accordion, animate-ping, animate-pulse, animate-spin, marquee, reveal, swiper, kf:marquee, kf:pulse, kf:spin |
| Lumio | https://lumio-astro.pages.dev/ | [x] | AOS, accordion, animate-pulse, animate-spin, marquee, reveal, kf:marquee, kf:pulse, kf:spin |
| Finzo | https://finzo-astro.pages.dev/ | [x] | AOS, accordion, animate-spin, marquee, reveal, swiper, kf:marquee, kf:spin, kf:swiper-preloader-spin |
| Folex | https://folex-astro.pages.dev/ | [x] | AOS, accordion, animate-spin, marquee, reveal, swiper, kf:marquee, kf:spin, kf:swiper-preloader-spin |
| Upstart | https://upstart-astro.pages.dev/ | [x] | AOS, accordion, animate-spin, marquee, reveal, kf:marquee, kf:spin, kf:spin-banner-image-border, kf:spin-icon, kf:spin-integration |
| Techlo Lite | https://techlo-lite-astro.pages.dev/ | [x] | accordion, animate-spin, lenis, marquee, reveal, kf:banner-one-image-float, kf:banner-two-frame-float, kf:banner-two-frame-float-reverse, kf:banner-two-hero-float, kf:marquee |
| Lumio Lite | https://lumio-lite-astro.pages.dev/ | [x] | AOS, accordion, animate-pulse, animate-spin, marquee, reveal, kf:marquee, kf:pulse, kf:spin |
| Folex Lite | https://folex-lite-astro.pages.dev/ | [x] | AOS, accordion, reveal, swiper |

---

## B06 Cosmic Themes — https://cosmicthemes.com/

| Тема | Demo | Эффекты |
|------|------|---------|
| Galaxy | https://galaxy.cosmicthemes.com/ | [x] glow orbs, logo marquee 50s, ping CTA, code tabs, accordion, VT confirmed |
| Atlas | https://atlas.cosmicthemes.com/ | [x] staged reveal, theme, scroll anim / View Transitions (заявлено) |
| Voyager | https://voyager.cosmicthemes.com/ | [x] ambient glow, delayed reveal, theme, cards |
| Zenith | https://zenith.cosmicthemes.com/ | [x] contour waves, tabs walkthrough, testimonials, billing |
| The Starter | https://starter.cosmicthemes.com/ | [x] Motion/Swiper заявлены, rich preview tiles |
| Northstar | https://northstar.cosmicthemes.com/ | [x] swiper/carousel, hover:scale, reveal, VT |
| Constellation | https://constellation.cosmicthemes.com/ | [x] quiet overview, VT/fade |
| Solstice | https://solstice.cosmicthemes.com/ | [x] canvas accent, tabs, dialog, VT |
| Space Coast | https://space-coast.cosmicthemes.com/ | [x] swiper, accordion, pulse/spin, VT fades |
| Pathfinder | https://pathfinder.cosmicthemes.com/ | [x] accordion, drawer, tabs, VT |
| Nova | https://nova.cosmicthemes.com/ | [x] testimonial marquee **120s**, ping/pulse/spin, pricing switch, FAQ, VT |
| Stellar | https://stellar.cosmicthemes.com/ | [x] marquee, swiper, accordion, VT |
| Amplify | https://amplify.cosmicthemes.com/ | [x] marquee, accordion, tabs, video, VT |
| Quantum | https://quantum.cosmicthemes.com/ | [x] quiet portfolio, VT/fade |
| Dawnlight | https://dawnlight.cosmicthemes.com/ | [x] affiliate/blog, dialog, hover:scale, VT |
| The Void | https://the-void.cosmicthemes.com/ | [x] blog, dialog, hover:scale, VT |
| Orion | https://orion.cosmicthemes.com/ | [x] `float` + `orion-marquee`, pulse/spin, accordion |
| Blogsmith Pro | https://blogsmith-pro.cosmicthemes.com/ | [x] quiet blog, VT (free slug DNS 404) |
| Horizon | https://horizon.cosmicthemes.com/ | [x] photography, VT |
| Landing Pad | https://landingpad.cosmicthemes.com/ | [x] link-in-bio, VT/blur |

#### Nova — spot-check [x]
https://nova.cosmicthemes.com/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Testimonial marquee | Mid | CSS `marquee-testimonials` **120s**, 4 tracks running |
| Pricing monthly/yearly | Pricing | Switch |
| FAQ accordion | FAQ | Expand/collapse |
| i18n EN/FR | Header | Language |
| View Transitions | Global | astroFade* keyframes |

#### Galaxy — детально [x]
https://galaxy.cosmicthemes.com/

| Эффект | Где | Поведение |
|--------|-----|-----------|
| Purple radial glow orbs | Hero / sections | `blur-[100px]` / `blur-3xl` primary orbs (atmosphere) |
| Fine grid pattern | BG | Atmosphere |
| Logo marquee | Under hero | `animate-marquee2` **50s** infinite (`logo-marquee`) |
| Play-button ping glow | Video CTA | `motion-safe:animate-ping` + `group-hover:animate-ping` |
| Theme color toggle | Header | Light/dark |
| i18n language switch | Header | EN/FR dropdown animate-in/out |
| Pages dropdown / mobile sheet | Nav | fade/slide enter-exit (`animate-in` / `animate-out`) |
| Video play control | Features | Play overlay |
| Feature gradient frames | Cards | Primary→base gradient borders |
| Code language tabs | Code section | React/Python/JS/PHP + `fade-in` 0.5s content swap |
| Pricing monthly/yearly switch | Pricing | Switch + plan gradient cards |
| FAQ accordion | FAQ | `accordion-down` / `accordion-up` |
| Link arrow nudge | Links | `group-hover:translate-x-1` |
| Astro View Transitions | Global | **confirmed** (`astroFade*` / `astroSlide*` keyframes + `hasVT`) |
| scroll-smooth | `html` | Smooth scroll |

> Примечание для ПРАЙМ: glow/purple — только как референс паттерна атмосферы; на наших страницах не копировать фиолетовую тему.

---

## B07 Themefisher — live `https://<slug>-astro.vercel.app/`

Preview host: `https://themefisher.com/demo?theme=<slug>-astro` (iframe). Для эффектов — прямой Vercel.

| Тема | Live | Эффекты (CSS audit) |
|------|------|---------------------|
| Novai | https://novai-astro.vercel.app/ | [x] AOS, lenis, swiper/carousel, accordion, counter |
| Fortify | https://fortify-astro.vercel.app/ | [x] = A17; AOS, accordion, counter, VT |
| Bexer | https://bexer-astro.vercel.app/ | [x] swiper, ripple, accordion, counter, VT |
| Optimize | https://optimize-astro.vercel.app/ | [x] AOS, carousel/swiper, accordion, counter, VT |
| Cleaner | https://cleaner-astro.vercel.app/ | [x] AOS, swiper, reveal, accordion, VT |
| Hyperbit | https://hyperbit-astro.vercel.app/ | [x] **marquee**, lenis, spin, accordion, counter |
| Optivus | https://optivus-astro.vercel.app/ | [x] AOS, carousel/swiper, accordion, VT |
| Cloudpeak | https://cloudpeak-astro.vercel.app/ | [x] AOS, swiper, reveal, accordion |
| Glasto | https://glasto-astro.vercel.app/ | [x] AOS, marquee, accordion, VT |
| Cuisine | https://cuisine-astro.vercel.app/ | [x] AOS, swiper, ripple, reveal |
| Nextspace | https://nextspace-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Clarity | https://clarity-astro.vercel.app/ | [x] AOS, marquee, swiper, accordion, VT |
| Bigspring | https://bigspring-astro.vercel.app/ | [x] swiper, accordion, counter, VT |
| Docbox | https://docbox-astro.vercel.app/ | [x] quiet docs; accordion, VT |
| Andromeda | https://andromeda-astro.vercel.app/ | [x] AOS, swiper, counter |
| Relux | https://relux-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| FinProX | https://finprox-astro.vercel.app/ | [x] AOS, swiper, reveal, accordion, VT |
| Roofer | https://roofer-astro.vercel.app/ | [x] AOS, **parallax**, swiper, reveal |
| Neonspark | https://neonspark-astro.vercel.app/ | [x] marquee, swiper, accordion, VT |
| Devgent | https://devgent-astro.vercel.app/ | [x] carousel, lenis, swiper, VT |
| Kindora | https://kindora-astro.vercel.app/ | [x] AOS, swiper, reveal, accordion, VT |
| SyncMaster | https://syncmaster-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| TellDesk | https://telldesk-astro.vercel.app/ | [x] AOS, carousel/swiper, accordion, VT |
| Sapick | https://sapick-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Mobit | https://mobit-astro.vercel.app/ | [x] AOS, carousel/swiper, reveal |
| SafeShield | https://safeshield-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| BlazeX | https://blazex-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| AutomatePro | https://automatepro-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Odfense | https://odfense-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Secury | https://secury-astro.vercel.app/ | [x] AOS, carousel/swiper, accordion, VT |
| Darkrise | https://darkrise-astro.vercel.app/ | [x] AOS, marquee, accordion, VT |
| Neptune | https://neptune-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Logbook | https://logbook-astro.vercel.app/ | [x] swiper, accordion, VT |
| Atemp | https://atemp-astro.vercel.app/ | [x] AOS, marquee, pulse, swiper, VT |
| Saaspro | https://saaspro-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Sirius | https://sirius-astro.vercel.app/ | [x] AOS, swiper, accordion, VT |
| Biztrox | https://biztrox-astro.vercel.app/ | [x] swiper, accordion, counter |
| Visionex | https://visionex-astro.vercel.app/ | [x] swiper, accordion, VT |
| Copper | https://copper-astro.vercel.app/ | [x] AOS, carousel/swiper, accordion, VT |
| Dexler | https://dexler-astro.vercel.app/ | [x] carousel/swiper, accordion, VT |
| Spydea | https://spydea-astro.vercel.app/ | [x] AOS, accordion, counter |

**Паттерн Themefisher:** почти везде AOS + Swiper + counters + accordion; выделяются Hyperbit/Glasto/Clarity/Neonspark/Darkrise/Atemp (marquee), Roofer (parallax), Bexer/Cuisine (ripple), Novai/Hyperbit/Devgent (lenis smooth scroll).

---

## C. Словарь эффектов (агрегат)

| ID | Эффект | Источники | В разработку? |
|----|--------|-----------|---------------|
| E01 | Device viewport / phone site swap | Swipe **[!]** | P0 |
| E02 | Giant type + animated figure | Matter **[!]** | P0 |
| E03 | Floating cards state-swap | Grow **[!]** | P0 |
| E04 | Skeleton → live UI | Flow | P1 |
| E05 | Rotating headline word | Flow, Brandly | P1 |
| E06 | Before/after drag | Kinetic | P1 |
| E07 | Product dots slider | Sonic | P1 |
| E08 | Energy beam atmosphere | Neural | P1 |
| E09 | Orbit + ripples | Brandly | P2 |
| E10 | Logo marquee | Aspect | P2 |
| E11 | Horizontal feature rail | Plasma | P2 |
| E12 | Stagger reveal | Kinetic, many | есть |
| E13 | Button ripple/click feedback | Ink, Grow | P2 |
| E14 | Theme/state as product demo | Aspect, Meridian | P2 |
| E15 | Scroll-staged narrative | Meridian, Kinetic | P1 |
| E16 | Phone mock gallery | Kinto, Swipe | P1 |
| E17 | Invoice/ledger pricing | Meridian | P2 |
| E18 | AI staged generation UI | Plasma, Neural | P2 |
| E19 | Dynamic Island activities | Meridian | P2 |
| E20 | Cursor parallax layers | localhost разраб | есть |
| E21 | Growing charts + count-up | localhost, many | есть |
| E22 | Glow / bloom atmosphere | Galaxy, Neural | P2 |
| E23 | View Transitions (Astro) | Galaxy **confirmed**, Forma, Cosmic | P2 |
| E24 | Multi-speed logo/text marquees | Lexington (Outkast/Spazio), Omnix, Glowvi, Themefisher (Hyperbit…) | P2 |
| E25 | Keen-slider / product carousels | Astromax, Outkast, Alfred, Omnix | P2 |
| E26 | E-com drawers (cart/wishlist/QV) | Omnix, Tailored, Glowvi | P2 |
| E27 | CTA stacked-label reveal | Kotei | P2 |
| E28 | Grayscale→color logo hover | Flabbergasted | P2 |
| E29 | AOS + Swiper + counters (SaaS pack) | Themefisher bundle | P2 |
| E30 | Lenis smooth scroll | Novai, Hyperbit, Devgent | P2 |
| E31 | Button/click ripple | Bexer, Cuisine, Ink | P2 |
| E32 | GSAP + Lenis scroll | Zarex, Nextvex, Dorbar, Asuric | P2 |
| E33 | Lottie accents | Zarex | P2 |
| E34 | Floating SaaS UI cards | SaaXent, SaaSonic, SaaSez, Techlo | P1 |
| E35 | Orbit decoration | OrbiTask, Brandly, Swipe | P2 |

---

## D. Приоритет внедрения на `/razrabotka-saytov/`

1. ~~**Swipe:** телефон, внутри подмена лендинг → визитка → корп → магазин~~ ✅  
2. ~~**Matter (layout only):** giant outlined «ПРАЙМ» + idle-фигура; **меш = NEXBOT CC0**~~ ✅  
3. ~~**Grow:** floating cards с обменом метрик в spectrum~~ ✅  
4. ~~**Kinetic:** drag strict ↔ live~~ ✅  
5. ~~**Sonic:** dots-слайдер форматов~~ ✅  
6. ~~**Flow/Brandly:** rotating word в H1 + skeleton boot~~ ✅  
7. ~~**Ink:** expressive button click на CTA~~ ✅  

Очередь «Взять с референсов» для `/razrabotka-saytov/` — **закрыта**.

---

## E. Заметки по обходу

- Shadcn Studio preview = **cross-origin iframe** → полный скролл/клик внутри часто недоступен автоматизации; фиксируем hero-stage + то, что видно.
- AstroVault / часть Getastrothemes = **Locked** без лицензии.
- Lexington / xoco / Cosmic / Themefisher = нужно открывать **каждую** demo URL отдельно (чеклист выше).
- Этот файл — living doc: после каждого preview обновлять статус и таблицу эффектов.

**Следующий проход:** каталог эффектов закрыт по CSS; точечный visual spot-check стендаутов (Zarex/SaaSonic/OrbiTask/Techlo) — по желанию. Дальше — внедрение P0 на `/razrabotka-saytov/`.

### Прогресс обхода (2026-07-23)

| Группа | Сделано | Осталось |
|--------|---------|----------|
| A прямые ссылки | **19/19** детально | — |
| B01 AstroCommerce | **10/10** | — |
| B02 Lexington | **43/44** (+Streamer 🔒) | — |
| B03 xoco | **15/15** | — |
| B04 AstroVault | **36/36** CSS | — |
| B05 Getastrothemes | **12/12** | — |
| B06 Cosmic | **~20/20** | — |
| B07 Themefisher | **41/41** | — |
| Kinetic | [x] | — |

**Табы:** один рабочий tab на демо (`navigate` reuse), localhost отдельно; demo-tab закрывать после пачки. Массовый разбор — через CSS/HTML fetch без вкладок.

Агенты обхода: [Meridian/Hive/Sonic](7e090361-2ae0-47f0-8841-31bdd062d050), [Matter/Swipe/Grow](14689192-497d-4268-b98e-bb96dd035dc9), [directories](32a6195e-6cb4-4d46-8d18-902d012421e9), [direct shadcn](2a3c2b54-9fdb-4bea-9d42-c6daebe49008), [detailed A-series](2a5d473a-a09a-41e2-8be1-49ef1e91a8c0), [Lexington/Cosmic](d87c22fc-969c-4459-a374-b0d9c78f73cf).

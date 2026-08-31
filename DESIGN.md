---
name: Archway Connect Landing Pages
description: Brand-register landing pages for insurance-agency IT, security, AI, and marketing services.
colors:
  orange: "#f48021"
  orange-text: "#a84e08"
  orange-on-dark: "#ff9440"
  orange-deep: "#d96d10"
  navy: "#293f50"
  navy-deep: "#1e3350"
  hero-bg: "#293f50"
  charcoal: "#32373c"
  text: "#333333"
  text-light: "#5a5f66"
  white: "#ffffff"
  surface: "#f5f5f5"
  border: "#e2e5ea"
  success: "#22c55e"
typography:
  # Enumerated px ramp, as shipped. The detector reads `typography.scale` as the
  # discrete ramp; the named roles below carry the fluid clamp endpoints, which
  # do not enumerate steps. Keep both in sync when a step is added.
  scale:
    xs: "13px"
    sm: "15px"
    base: "17px"
    md: "19px"
    lg: "22px"
    xl: "27px"
    xxl: "34px"
    display-sm: "46px"
    display: "52px"
  display:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  h2:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  h3:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-large:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  caption:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "1px"
rounded:
  sm: "6px"
  md: "8px"
  md-lg: "10px"
  lg: "12px"
  lg-xl: "14px"
  xl: "16px"
  pill: "50px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "18px 40px"
    typography: "{typography.body-large}"
  button-primary-hover:
    backgroundColor: "{colors.orange-on-dark}"
    textColor: "{colors.charcoal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "18px 40px"
    typography: "{typography.body-large}"
  button-secondary-hover:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.charcoal}"
  nav-cta:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
    height: "44px"
    typography: "{typography.caption}"
  card-surface:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "32px"
  card-tinted:
    backgroundColor: "rgba(244, 128, 33, 0.06)"
    rounded: "{rounded.xl}"
    padding: "40px"
  badge-on-dark:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "rgba(255, 255, 255, 0.8)"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    typography: "{typography.caption}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    typography: "{typography.body}"
    height: "48px"
---

## Overview

Archway Connect is a system of conversion-driven landing pages for insurance-agency owners. Visual posture is **calm authority**: dark navy hero, white form card carrying the conversion weight, orange used only for the conversion accent. One dark token (`#293f50`, the brand navy) is used everywhere — hero, footer, dark CTA bands — so the page reads as a unified system. The hero is text-only: no stock photos, no abstract patterns.

Pages follow one of four templates: **lead magnet** (gated PDF), **booking** (direct meeting), **tool** (gated interactive result), **re-engagement** (low friction). All four share the navigation, footer, hero scaffolding, and form posture defined here.

## Colors

**Strategy: Restrained.** Tinted neutrals with one accent. Orange must stay below ~10% of any given page; it is the conversion color, not a decoration.

| Token | Hex | Role |
| --- | --- | --- |
| `orange` | `#f48021` | **Fill and decoration only.** Button fills, accent dashes, form focus ring, icon glyphs on navy. Never as text ink. |
| `orange-text` | `#a84e08` | Orange **text** on white or on `surface` `#f5f5f5`. Section eyebrows, orange links on light cards. |
| `orange-on-dark` | `#ff9440` | Orange **text** on navy `#293f50`, and the fill for CTA hover. |
| `orange-deep` | `#d96d10` | Legacy. Still defined, no longer the CTA hover fill (see below). |
| `navy` / `hero-bg` | `#293f50` | Single dark token: hero, footer, utility bar, dark CTA bands. `--hero-bg` is an alias for `--navy`. |
| `navy-deep` | `#1e3350` | Deep secondary navy if needed |
| `charcoal` | `#32373c` | Headings on light surfaces |
| `text` | `#333333` | Body copy on light surfaces |
| `text-light` | `#5a5f66` | Secondary body, sub-labels |
| `white` | `#ffffff` | Light surfaces, form fields |
| `surface` | `#f5f5f5` | Alternate section background |
| `border` | `#e2e5ea` | Card and input borders |
| `success` | `#22c55e` | Confirmation state only |

### The three orange tokens

The brand orange is a fill, not an ink. Measured against the surfaces this system actually uses:

| Pair | Ratio | Verdict |
| --- | --- | --- |
| White on `orange` | 2.64:1 | **Fails.** Never put white text on an orange fill. |
| `charcoal` on `orange` | 4.55:1 | Passes AA. The button label. |
| `charcoal` on `orange-on-dark` | 5.47:1 | Passes AA. The button hover label. |
| `charcoal` on `orange-deep` | 3.52:1 | **Fails.** Why `orange-deep` is no longer the hover fill. |
| `orange` as text on white | 2.64:1 | **Fails.** Use `orange-text`. |
| `orange` as text on `surface` | 2.42:1 | **Fails.** Use `orange-text`. |
| `orange-text` on white | 5.59:1 | Passes AA. |
| `orange-text` on `surface` `#f5f5f5` | 5.13:1 | Passes AA. |
| `orange` as text on navy | 4.14:1 | Passes AA large only. Use `orange-on-dark` for body-size text. |
| `orange-on-dark` on navy | 4.98:1 | Passes AA at any size. |

Pick the token by **what the colour is doing**, not by how it looks in isolation:

- Filling a shape, drawing a rule, tinting an icon on navy → `orange`, unchanged.
- Text sitting on white or `#f5f5f5` → `orange-text`.
- Text sitting on navy → `orange-on-dark`.

**On-dark text contrast minimums.** White text on navy (`#293f50`):
- Headlines: full white (`#ffffff`).
- Body copy on dark hero: `rgba(255,255,255,0.78)` minimum.
- Footer body and secondary copy: `rgba(255,255,255,0.70)` minimum. Never below — WCAG AA fails fast on dark surfaces.

**Never use** `#000` or `#fff` as semantic ink. Always the tokens above.

## Typography

Single typeface: **Inter** (400 / 500 / 600 / 700 / 800). Loaded from Google Fonts with `preconnect`.

| Style | Used for |
| --- | --- |
| `display` | Hero H1. Max one per page. Orange highlight via `<span class="hl">` on the emphasis word. |
| `h2` | Section headings. `text-wrap: balance` where supported. |
| `h3` | Card titles, sub-section heads. Never `<h4>` for visible heading flow. |
| `body-large` | Hero sub-copy, lead paragraphs. |
| `body` | All paragraph copy. Cap line length at 65–75 characters. |
| `label` | Section eyebrows. Uppercase, letter-spaced, orange. |
| `caption` | Form helper text, micro-copy, trust line, badge text. Never below 13px. |

### Type ramp as shipped

The named styles above are the intent. The sizes actually in the CSS are nine steps:

**13 / 15 / 17 / 19 / 22 / 27 / 34 / 46 / 52 px**

| Size | Where it lands |
| --- | --- |
| 13px | Eyebrows, captions, trust and privacy lines, footer copy, badges. The floor. Never go below. |
| 15px | Dense secondary copy, form helper text. |
| 17px | Body copy at the mobile step-down. |
| 19px | Hero sub-copy, lead paragraphs. |
| 22px | Hero form-card heading, large card titles. |
| 27px | Section H2 at the mobile step-down. |
| 34px | Section H2, bottom-CTA H2. |
| 46px | Hero H1 at intermediate widths. |
| 52px | Hero H1, desktop. One per page. |

This is a record of the real ramp, not a migration target. Do not restyle existing pages to snap to it. New work should pick the nearest existing step rather than introducing a tenth size.

### Radii as shipped

**6 / 8 / 10 / 12 / 14 / 16 / 50 px**

6px skip link and nav CTA, 8px buttons and inputs, 10px small cards, 12px content cards, 14px hero form card, 16px large form card, 50px pill badges. Same rule: pick an existing step, do not add an eighth.

**Voice rules in copy** (from PRODUCT.md):
- No em dashes. Use commas, colons, semicolons, periods, or parentheses.
- No "unlock," "transform," "grow your business," or other generic B2B verbs.
- Name AMS platforms by name (Applied Epic, AMS360, HawkSoft, EZLynx, Vertafore, Sagitta, TAM).
- Trust line is non-optional next to lead-magnet form: "No spam. No sales call unless you want one. Just the guide."

## Elevation

Three depths, no more:

- **Flat (0):** Inline content on a section background. Most page real estate.
- **Card (1):** `box-shadow: 0 2px 8px rgba(0,0,0,0.06)` with `1px` `border` solid. Used for tinted callouts and content cards.
- **Floating (2):** `box-shadow: 0 8px 32px rgba(0,0,0,0.15)` — reserved for the hero form card, which sits on the dark hero and needs visible separation.

**Banned:** glassmorphism (`backdrop-filter: blur` decoratively), neumorphism, oversized colored shadows (`box-shadow` with brand color at >0.15 alpha). The form-focus shadow is the one exception — a 3px `rgba(244,128,33,0.25)` ring.

## Components

### Hero

Two-column grid: 60fr text / 40fr form card. Stacks at `768px`. Hero H1 uses `display` type in white; sub-copy uses `body-large` at 78% white. The form card sits as a white block on the dark hero, carrying the conversion weight by polarity contrast.

The hero surface is `#293f50` — the same navy used on the footer and any dark CTA band. One dark color across the page. Text-only: no stock photo, no abstract pattern. The original network-pattern PNG (`/images/dark-bg.png`) was removed in audit cleanup.

### Buttons

**The rule: charcoal on orange.** Every orange-filled button carries a `charcoal` `#32373c` label, not white. White on the brand orange is 2.64:1 and fails AA outright. Charcoal is 4.55:1.

**Hover lightens, it does not darken.** Hover swaps the fill to `orange-on-dark` `#ff9440`, where charcoal reads 5.47:1. The instinct is to darken to `orange-deep`, but that drops the charcoal label to 3.52:1 and re-breaks the button. The lighter hover is deliberate and load-bearing; keep the accompanying lift or shadow so the state change still reads.

Three variants, all `button-primary` token base unless noted:

- **Primary CTA** (`button-primary`): orange fill, charcoal label. Form submits, hero CTAs, bottom-band CTAs. Icons inside use `currentColor` so they track the label.
- **Secondary CTA** (`button-secondary`): outline-on-dark with a white label at rest. Its hover fills with orange, so the label flips to charcoal at the same moment. Used only when paired with a primary on the same band.
- **Nav CTA** (`nav-cta`): 44px min-height, the touch-target floor for the entire system. Same charcoal-on-orange rule.

All CTAs carry `:focus-visible` with a 2px orange outline at 3px offset.

### Form card (lead-magnet hero variant)

Floating elevation, 16px radius, 36px padding. Header centered. Inputs full-width, 14×16 padding, 8px radius. Focus state: orange border + 3px `rgba(244,128,33,0.25)` ring. Submit button is full-width primary.

Trust line below submit: 13px, `text-light`, centered. Non-negotiable.

### Cards (problem / coverage / credibility)

Avoid the three-identical-icon-card grid pattern except where genuinely the best fit. When using card grids, mix asymmetric layouts, numbered lists, or pure-typography variants across the page so no single page contains more than two identical card grids.

Card depth: 1px border + tiny shadow + 12–16px radius. Tinted callout variant uses a 6% orange wash with a 18% orange border — never a `border-left: 4px` side stripe (banned).

### Section eyebrows

13px, 600 weight, uppercase, 1px letter-spacing. Preceded by a 24×2 dash (`::before`). Marks the start of a content section before the H2.

The eyebrow appears on both light sections and navy bands, so it has two inks. `.section-label` alone is `orange-text`, correct on white and on `surface`. On a navy band add `.section-label-on-dark`, which swaps the text and the dash to `orange-on-dark`. At 13px this is body-size text, so the large-text exemption does not apply and plain `orange` fails on every surface the eyebrow sits on.

### Sticky nav

White background, 60px logo, sticky top, 100px z-index. Single CTA on the right (`nav-cta`). Skip-link target — `<a class="skip-link" href="#main">` — must exist on every page; visible only on `:focus`.

## Do's and Don'ts

**Do**

- Lead with the agency's operational problem in its first sentence. Solution comes second.
- Use `<span class="hl">` for the orange emphasis word in headlines, never `<em>`. `<em>` is reserved for semantic emphasis (screen readers will stress it).
- Cap body line length at 65–75 characters via `max-width`.
- Respect `prefers-reduced-motion`: kill scroll-smooth, keyframe animation, and entrance or movement transitions. Do **not** blanket-kill `transition-duration`. That takes hover and focus feedback down with the decorative motion. The global rule narrows `transition-property` to colour, background, border, outline, shadow, fill, and stroke instead.
- Ship every page with WCAG 2.1 AA contrast minimums measured on actual computed colors.
- Use real names (Brad, SueAnn, Hannah, Sam) in social-proof and author bylines.

**Don't**

- Don't use the network-nodes / connection-dots / glowing-locks hero background. First-order cybersecurity SaaS reflex.
- Don't use em dashes (` — ` or `&mdash;`) in copy.
- Don't ship gradient text (`background-clip: text`), glassmorphism cards, side-stripe `border-left: 4px` callouts, or three-identical-icon-card grids stacked back-to-back.
- Don't put white text on an orange fill, and don't use `orange` itself as text ink on any surface in this system.
- Don't drop touch targets below 44 × 44 px (nav, footer, social, CTAs). Where padding would loosen a dense row, absorb it with a negative margin so the hit area grows and the layout holds. Watch the negative margin: pulled too far, neighbouring 44px areas start to overlap and taps land on the wrong link.
- Don't write "unlock," "transform," "grow your business," "future-proof," or any phrase that could apply to a generic SMB.
- Don't hide content behind `opacity: 0` without a no-JS fallback.
- Don't put PII or financial inputs into URL parameters.

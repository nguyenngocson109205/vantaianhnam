---
name: Kiln & Haul
colors:
  surface: '#f6f9ff'
  surface-dim: '#d4dbe2'
  surface-bright: '#f6f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4fc'
  surface-container: '#e8eef6'
  surface-container-high: '#e3e9f1'
  surface-container-highest: '#dde3eb'
  on-surface: '#161c22'
  on-surface-variant: '#58413b'
  inverse-surface: '#2b3137'
  inverse-on-surface: '#ebf1f9'
  outline: '#8c716a'
  outline-variant: '#e0bfb7'
  surface-tint: '#aa3612'
  primary: '#a6330f'
  on-primary: '#ffffff'
  primary-container: '#c84b26'
  on-primary-container: '#fffaff'
  inverse-primary: '#ffb5a0'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#815100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a36700'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872100'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f6f9ff'
  on-background: '#161c22'
  surface-variant: '#dde3eb'
typography:
  display-hero:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-data-dim:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-badge:
    fontFamily: Barlow Condensed
    fontSize: 13px
    fontWeight: '800'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an unapologetically industrial, architectural aesthetic engineered for commercial masonry, bulk brick logistics, and job-site procurement. It bridges heavy-duty raw construction materials with exact technical procurement tools.

### Design Movement: Engineered Brutalism & Technical Structuralism
The visual identity draws from job-site signage, blueprint schematics, and heavy machinery interfaces:
- **Structural Integrity:** Hard edges, 1px and 2px technical grid wirelines, exposed mortar lines, and modular bounding boxes replace decorative fluff.
- **Physical Utility:** High visual affordance with high-contrast surfaces, solid color blocks, hazard-striped tags, and prominent dimensional stamps.
- **Target Audience:** General contractors, masons, architects, site managers, and commercial procurement leads who demand speed, dimensional precision, and immediate logistics transparency.
- **Tone:** Authoritative, unshakeable, reliable, utilitarian, and architecturally exact.

## Colors

The palette is rooted in kiln-fired masonry, wet cured concrete, and site safety hardware:

- **Primary (`#C84B26` / `#D9532F`):** Fired Terracotta. Used for primary calls-to-action, bulk load status markers, critical unit price highlights, and active operational focal points.
- **Secondary (`#1E293B` / `#334155`):** Deep Structural Slate. Used for high-impact industrial headlines, persistent navigation frames, load manifest tables, and dense data labels.
- **Tertiary (`#F59E0B`):** Hazard Amber. Strictly reserved for site hazard advisories, delivery crane warnings, load limit constraints, and live GPS transit alerts.
- **Neutral Surface & Concrete (`#F1F5F9`, `#E2E8F0`):** Concrete Stone Grey. Provides an authentic screed-and-mortar substrate for component cards, tabular dividing lines, and technical data backgrounds.
- **Architectural White (`#FFFFFF`):** High-contrast base background ensuring maximum readability under direct outdoor sunlight on job-site tablets.
- **Structural Borders (`#334155` / `#CBD5E1`):** Precise framing lines simulating architectural drafting schematics.

## Typography

The typographic hierarchy implements an intentional three-tiered system:

1. **Headers (Barlow Condensed):** Uppercase-led, structural, condensed geometric weight that mirrors industrial stamped metal, freight crates, and construction drawings. It economizes horizontal space for dense material specifications.
2. **Body & Interface (Inter):** Highly legible, neutral workhorse engineered for dense manifest readings, dispatch timelines, and contractual documentation.
3. **Specifications & Telemetry (JetBrains Mono):** Monospaced, tabular numbers with zero-ambiguity characters for pallet counts, imperial/metric brick dimensions, tonnages, GPS coordinates, and truck tare weights.

## Layout & Spacing

The layout is structured around an architectural drafting grid that emphasizes modularity, column rhythm, and exposed structural boundaries.

### Grid & Alignment Rules
- **Desktop (12-Column Grid):** 1.5rem (`24px`) gutters with a max canvas of 1440px. Panels snap to 3, 4, 6, or 12 columns with exposed 1px Slate dividers (`#E2E8F0`).
- **Tablet (8-Column Grid):** 1rem (`16px`) gutters. Side-by-side ordering: product spec sheet pinned beside delivery logistics matrix.
- **Mobile (4-Column Grid):** 1rem gutters and margins. Full-width stacked modules with prominent touch boundaries (minimum touch targets of 48px).
- **Rhythm:** Spacing follows a strict 4px/8px industrial cadence. Padding inside technical data modules remains compact (`space-sm` to `space-md`) to optimize data density for job-site visibility.

## Elevation & Depth

This system intentionally rejects soft diffuse blurs, frosted glassmorphism, and floaty multi-layer dropshadows. In its place, physical depth is expressed via **Structural Borders and Mechanical Layering**:

- **Borders over Shadows:** Depth is defined by crisp, 1px and 2px borders using `#1E293B` (for heavy structural dividers) and `#CBD5E1` (for secondary component compartments).
- **Hard Technical Cast Shadows:** When elevation is required for floating quick-quotes, flyout filters, or drag handles, elements utilize flat, unblurred offset cast shadows:
  - *Resting Card:* 0px blur, no offset (`box-shadow: none`, 1px solid `#CBD5E1`).
  - *Active / Hover:* `3px 3px 0px 0px #1E293B`.
  - *Floating Modal / Drag Component:* `6px 6px 0px 0px #1E293B`.
- **Tonal Concrete Stratification:** Primary content rests on `#FFFFFF`. Secondary utility trays and sidebars use `#F1F5F9`. Data headers and column bars use `#E2E8F0`.

## Shapes

The shape system is strictly **Sharp (`roundedness: 0`)**. 

- Every corner across all inputs, cards, dialogs, badges, and image containers features a 0px radius.
- Corners simulate cut masonry, stamped steel, and architectural drafting borders.
- Select interactive elements (such as priority status indicators or safety tags) may feature a 45-degree chamfered corner cutout (`clip-path: polygon(...)`) to denote industrial spec tags and pallet routing chits.

## Components

### Buttons
- **Primary Industrial CTA:** Background `#C84B26`, text `#FFFFFF`, 0px border radius, uppercase `Barlow Condensed` (`font-weight: 700`, `letter-spacing: 0.05em`). Hover transitions to `#D9532F` with a `2px 2px 0px #1E293B` hard offset shadow. Pressed state: `translate(2px, 2px)` with shadow reset.
- **Secondary Contractor Action:** Background `#1E293B`, text `#FFFFFF`, sharp corners. Hover shifts to `#334155`.
- **Utility / Outline Button:** Transparent background, 2px solid `#1E293B`, text `#1E293B`.

### Heavy-Duty Trust Badges & Certifications
- High-visibility structural badges indicating ASTM specs, compressive strength (PSI), and boom-truck unloading availability.
- Encased in a 1.5px solid `#1E293B` boundary with a top hazard bar (diagonal black and amber micro-stripes or solid `#F59E0B`). Text set in uppercase `label-badge` with monospaced certification numbers below.

### Cards & Spec Sheets
- Solid `#FFFFFF` fill with a 1px `#CBD5E1` outline.
- Header row is partitioned with a bottom border and colored `#F1F5F9` containing product batch number, quarry/kiln origin, and live inventory status in `JetBrains Mono`.
- Dimensional specs (Length x Depth x Height, weight per thousand, pallet quantity) are organized in a tight, bordered grid with alternating row fills.

### Input Fields & Selectors
- Background `#FFFFFF` encased in a 1.5px `#334155` border with sharp 90-degree corners.
- Fixed unit labels (e.g., `TONS`, `SQ FT`, `PALLETS`) affixed to the right edge within a `#E2E8F0` solid block using `label-technical`.
- Focus state: Outline switches to 2px solid `#C84B26` with no blur or glow.

### Lists & Delivery Manifest Tables
- Monospaced numeric alignment (`tabular-nums`).
- Alternating rows using `#FFFFFF` and `#F8FAFC`.
- Grid dividing lines clearly demarcate columns: Quantity, SKU, Dimension, Net Weight, Job-Site Zone, and Offload Method.

### Checkboxes & Radios
- Hard square geometry (0px radius).
- Unchecked: 2px solid `#334155`, white fill.
- Checked: Solid `#C84B26` fill with an architectural bold tick or solid interior square block.

### Additional System Component: Job-Site Transit & Offload Indicator
- A specialized telemetry banner featuring a split layout: left side displays offload type (`BOOM CRANE`, `MOFFETT PIGGYBACK`, or `FLATBED DUMP`) in bold uppercase; right side shows site accessibility rating and real-time load weight in `#F59E0B` against a `#1E293B` slate container.
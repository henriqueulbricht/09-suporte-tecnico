---
name: Technical Support System
colors:
  surface: '#fbf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fbf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e3'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45474c'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#fbf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system focuses on precision, clarity, and reliability, essential for a technical support environment. It adopts a **Corporate / Modern** aesthetic, prioritizing data density without compromising legibility. The UI is designed to reduce cognitive load for support agents through a systematic hierarchy and a clean, utilitarian interface.

The brand personality is professional and composed. It avoids decorative elements in favor of functional clarity. The target audience—technical support specialists and system administrators—requires a workspace that feels like a powerful, dependable tool. The emotional response is one of control and efficiency, achieved through a structured layout and a disciplined color application.

## Colors
The palette is rooted in a deep navy blue (#1e293b), used primarily for structural elements like the sidebar and primary navigation to anchor the interface. The background utilizes a very light cool gray (#f8fafc) to provide a clean canvas that minimizes eye strain during long shifts.

Semantic colors are strictly reserved for status communication:
- **Critical (Red):** Used only for urgent tickets, system failures, or high-priority alerts.
- **Warning (Amber):** Used for approaching SLAs or pending actions.
- **Success (Emerald):** Indicates resolved tickets or healthy system status.
- **Information (Blue):** General updates or neutral notifications.

Neutral grays are used for borders, secondary text, and icons to maintain a sophisticated, low-distraction environment.

## Typography
This design system utilizes **Inter** as the sole typeface. Inter’s tall x-height and exceptional legibility make it ideal for data-heavy support dashboards. 

- **Hierarchy:** Use `display-lg` for dashboard overviews and `headline-md` for page titles.
- **Body Text:** Use `body-md` for ticket descriptions and general content. `body-sm` is reserved for metadata and secondary information.
- **Labels:** `label-sm` is used for table headers and badge text, often in uppercase to provide contrast against body text.
- **Language Support:** All typography scales and line-heights are optimized for Portuguese (Brazil) text lengths, which can be 15-20% longer than English.

## Layout & Spacing
The system uses a **Fluid Grid** model with fixed-width constraints for content readability. 
- **Grid:** A 12-column grid is used for desktop layouts.
- **Gutters:** Standard 24px gutters provide breathing room between data cards.
- **Sidebar:** A fixed 280px sidebar on desktop, collapsing to a 64px icon-only bar or a hamburger menu on mobile.
- **Alignment:** All elements follow a 4px baseline grid to ensure vertical rhythm in dense data tables.

On mobile, the 12-column grid collapses to 1 column, and horizontal margins are reduced to 16px to maximize screen real estate.

## Elevation & Depth
This design system uses **Low-contrast outlines** and **Tonal layers** rather than heavy shadows to maintain a "flat-plus" professional look. 

- **Level 0 (Background):** #f8fafc (Light Gray).
- **Level 1 (Cards/Surface):** #ffffff (White) with a 1px border of #e2e8f0. No shadow or a very subtle 2px blur with 5% opacity.
- **Level 2 (Modals/Popovers):** #ffffff with a medium ambient shadow (10px blur, 10% opacity) to indicate clear separation from the workspace.

Interactions (hover) on cards should be indicated by a subtle border color shift to the primary navy blue at a low opacity, rather than increasing elevation.

## Shapes
The shape language is **Soft** and professional. 
- **Standard elements:** (Buttons, Inputs, Cards) use a 0.25rem (4px) corner radius. This conveys a modern feel while remaining structured and precise.
- **Large elements:** (Large containers, Modals) use 0.5rem (8px).
- **Badges/Status Tags:** Use a fully rounded pill-shape (999px) to distinguish them from interactive buttons.

## Components
- **Buttons:** Primary buttons use the navy blue (#1e293b) with white text. Secondary buttons use a white background with a gray-300 border. High-priority "Delete" or "Urgent" actions use the Critical Red (#ef4444).
- **High-Contrast Cards:** White background, 1px border (#e2e8f0). For critical alerts, the card may feature a 4px left-border accent in the corresponding semantic color.
- **Badges:** Small, pill-shaped tags. For statuses (e.g., "Aberto", "Em Progresso", "Concluído"), use a light tinted background of the semantic color with high-contrast text.
- **Tables:** Rows must have a height of 48px or 56px. Use a subtle hover state (#f1f5f9) and 1px horizontal dividers. Columns should be clearly aligned: text to the left, numbers to the right.
- **Input Fields:** 1px border (#cbd5e1). Focus state uses a 2px ring of navy blue with a light offset.
- **Search Bar:** Always visible in the top header, featuring a 20px magnifying glass icon and "Pesquisar chamados..." placeholder.
---
name: Venvm Line
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#bfc7d5'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#89919e'
  outline-variant: '#3f4753'
  surface-tint: '#a1c9ff'
  primary: '#a1c9ff'
  on-primary: '#00325a'
  primary-container: '#0096ff'
  on-primary-container: '#002d52'
  inverse-primary: '#0061a7'
  secondary: '#ffb2be'
  on-secondary: '#660025'
  secondary-container: '#ff4e7c'
  on-secondary-container: '#5a0020'
  tertiary: '#c4c7ca'
  on-tertiary: '#2d3133'
  tertiary-container: '#909396'
  on-tertiary-container: '#292c2e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a1c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#00487f'
  secondary-fixed: '#ffd9de'
  secondary-fixed-dim: '#ffb2be'
  on-secondary-fixed: '#400014'
  on-secondary-fixed-variant: '#900038'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#111317'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
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
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies a high-performance, technical aesthetic tailored for the intersection of developer tools and luxury automotive interfaces. The personality is aggressive yet precise—evoking a sense of controlled power and elite engineering.

The visual style is a fusion of **Minimalism** and **Glassmorphism**, set against a deep, void-like backdrop. It prioritizes extreme legibility, high-contrast functional elements, and a sophisticated layering system that suggests depth through material properties rather than traditional shadows. The emotional response should be one of intense focus, prestige, and unwavering reliability.

## Colors
The palette is anchored by a matte black foundation, creating a "true dark" environment that allows functional colors to pierce through the UI.

- **Primary (#0096FF):** A brilliant Azure Blue used for critical actions, active states, and focus indicators. It provides a more professional, high-fidelity technical feel than standard cyan.
- **Secondary (#FF186B):** A high-octane Vivid Pink/Magenta used for accentuation, alerts, and branding moments that require high energy and visibility.
- **Tertiary (#EDEFF2):** A cool white used primarily for high-emphasis typography and iconography to ensure maximum readability against the dark substrate.
- **Neutral (#0B0D10):** A matte black that serves as the universal background color, providing a premium, low-light experience that reduces eye strain in technical environments.

## Typography
The typography system uses a tri-font approach to balance technicality with readability. **Geist** provides a sharp, geometric presence for headlines. **Inter** handles the bulk of the content with its neutral and highly legible character. **JetBrains Mono** is reserved for metadata, labels, and technical readouts to reinforce the "engineered" narrative.

Type scales are tight and purposeful. Contrast is achieved through weight shifts and the use of the Cool White (#EDEFF2) for primary text versus muted grays for secondary information.

## Layout & Spacing
The layout follows a strict **Fixed Grid** logic for desktop to maintain a cinematic, dashboard-like feel, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a maximum width of 1440px. 20px gutters. 48px outer margins.
- **Mobile:** 4-column fluid grid. 16px gutters. 16px outer margins.

The spacing rhythm is based on a 4px baseline grid. Internal component spacing should use the `sm` (8px) and `md` (16px) tokens to maintain a compact, information-dense environment typical of high-end software.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows.

1.  **Base Layer:** The Matte Black (#0B0D10) background.
2.  **Surface Layer:** A slightly lighter neutral (e.g., #16181D) with a subtle 1px border of Cool White at 10% opacity.
3.  **Overlay Layer:** Semi-transparent panels using Backdrop Blur (20px) to simulate frosted glass. This layer is used for modals, navigation bars, and floating menus.
4.  **Interactive States:** Primary-colored "glows" (inner or outer) are used sparingly to indicate focus, replacing the need for elevation-based shadows.

## Shapes
The shape language is **Soft (0.25rem)**. This slight rounding takes the edge off the brutalist matte black environment without making it feel "bubbly" or overly consumer-facing. 

- **Buttons & Inputs:** 4px (0.25rem) radius.
- **Cards & Modals:** 8px (0.5rem) radius for `rounded-lg`.
- **System Tags:** 12px (0.75rem) radius for `rounded-xl` to provide a subtle visual distinction for status chips.

## Components
- **Buttons:** High-contrast Primary color fills with white or black text for main actions. Ghost buttons with 1px Cool White borders for secondary actions.
- **Input Fields:** Darker-than-surface backgrounds with bottom-only 2px Primary (#0096FF) borders when focused.
- **Cards:** Defined by 1px borders (#EDEFF2 at 10% opacity) rather than fills. They should feel like transparent containers etched into the dark interface.
- **Chips:** Monospaced labels (JetBrains Mono) inside small containers with 1px borders, using the Primary or Secondary color for status indicators.
- **Lists:** Separated by thin, subtle horizontal rules (1px, #EDEFF2 at 5% opacity). Hover states should trigger a slight background highlight (Matte Black + 5% White).
- **Navigation:** Top-level glassmorphic bar with backdrop blur and a persistent 1px bottom border.
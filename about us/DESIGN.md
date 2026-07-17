---
name: Modern Professional Driving School
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fd8b00'
  on-secondary-container: '#603100'
  tertiary: '#11171d'
  on-tertiary: '#ffffff'
  tertiary-container: '#262c32'
  on-tertiary-container: '#8d939a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The brand personality of the design system is anchored in **Confidence, Safety, and Progression**. It is designed to bridge the gap between the anxiety of a new learner and the professional authority of an established institution. The target audience includes both young adults seeking independence and parents looking for a reliable, safe environment for their children.

The chosen design style is **Corporate / Modern** with a focus on **High-Contrast Minimalism**. By utilizing heavy whitespace and a restricted color palette, the UI directs focus toward critical milestones in the learning journey. Visuals are grounded by professional photography—crisp shots of modern vehicles and approachable instructors—to humanize the digital experience while maintaining an uncompromising standard of professionalism.

## Colors

The color strategy for this design system is built on a "Trust-Action" dichotomy. 

- **Primary Navy (#1A2B48):** Used for structural elements, navigation, and primary headings to establish immediate credibility and depth.
- **Safety Orange (#FF8C00):** Reserved exclusively for energetic call-to-action accents, alerts, and progress indicators. This high-visibility hue ensures that the "path to conversion" is never missed.
- **Neutral Palette:** Employs a range of cool greys and off-whites to maintain a clean, airy feel. Backgrounds should primarily be white (#FFFFFF) or very light grey (#F8FAFC) to maximize the impact of the high-contrast primary colors.

## Typography

This design system utilizes **Inter** as the sole typeface to ensure maximum legibility and a sturdy, utilitarian aesthetic. 

- **Headlines:** Set with tight letter spacing and heavy weights to convey authority. 
- **Body Text:** Leverages a generous line height (1.6) to improve readability for educational content and instructions.
- **Labels:** Use uppercase styling with increased tracking to differentiate functional UI elements from narrative content.
- **Hierarchy:** Maintain a clear distinction between levels; H1 and H2 should exclusively use the Primary Navy color to anchor the page.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop views, centered with a maximum width of 1200px to prevent excessive line lengths and maintain a professional, organized structure. 

- **Grid:** A 12-column system is used for page layouts, with 24px gutters to provide breathing room between content modules.
- **Rhythm:** An 8px base unit dictates all padding and margins. Vertical rhythm is emphasized through "generous whitespace," particularly between sections (using `xl` spacing) to reduce cognitive load during the booking and learning process.
- **Alignment:** Content is primarily left-aligned to mirror standard reading patterns, reinforcing a logical and straightforward user experience.

## Elevation & Depth

To maintain a "Professional" and "Sturdy" feel, the design system avoids trendy, overly soft depth effects. Instead, it utilizes:

- **Tonal Layers:** Subtle shifts in background color (e.g., White to #F8FAFC) to separate content sections without adding visual noise.
- **Ambient Shadows:** Only used on interactive elements like cards and modals. Shadows are tight, with low opacity (10-15% Alpha of Navy Blue), creating a "lifted" effect rather than a floating one.
- **Hairline Borders:** Use 1px borders in Tertiary Grey (#E2E8F0) to define input fields and list items, ensuring clarity in high-contrast environments.

## Shapes

The design system uses **Level 2 (Rounded)** corners to balance approachability with institutional structure.

- **Primary Elements:** Buttons, cards, and input fields utilize a 0.5rem (8px) radius. This provides a "friendly" feel that softens the high-contrast color palette.
- **Large Containers:** Modals and feature sections may use a 1rem (16px) radius to emphasize a modern, mobile-friendly aesthetic.
- **Icons:** Should follow a similar geometry—avoiding sharp points in favor of slightly rounded terminals and corners.

## Components

### Buttons
- **Primary:** Navy Blue background with White text. Bold and authoritative.
- **CTA:** Safety Orange background with White text. Used exclusively for "Book Now" or "Start Lesson."
- **Ghost:** Navy Blue 1px border with transparent background. Used for secondary actions like "View Curriculum."

### Cards
Cards are the primary vehicle for course packages and instructor profiles. They feature a white background, a 1px #E2E8F0 border, and a subtle ambient shadow on hover. Images within cards must maintain the 8px corner radius.

### Input Fields
Clean, sturdy inputs with 1px borders. The border-color shifts to Navy Blue on focus, with an Orange accent for error states.

### Progress Indicators
Linear bars or circular trackers using Safety Orange to represent completed lessons. This provides a visual "reward" and energetic feedback.

### Trust Badges
Standardized small-scale components used to display certifications (e.g., "State Certified," "Top Rated"). These should use Navy Blue icons for a "seal of approval" look.
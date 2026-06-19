---
name: Organic Gourmet Narrative
colors:
  surface: '#fef9f2'
  surface-dim: '#ded9d3'
  surface-bright: '#fef9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ec'
  surface-container: '#f2ede6'
  surface-container-high: '#ece7e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1d1c18'
  on-surface-variant: '#434843'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f5f0e9'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#904c29'
  on-secondary: '#ffffff'
  secondary-container: '#ffa67c'
  on-secondary-container: '#783918'
  tertiary: '#211500'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a2800'
  on-tertiary-container: '#b18d48'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb694'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#733514'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fef9f2'
  on-background: '#1d1c18'
  surface-variant: '#e6e2db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is crafted for a high-end culinary experience that bridges the raw power of the grill with the sophisticated serenity of nature. The brand personality is **elevated yet grounded**, evoking the warmth of a crackling fire and the lush depth of a forest at dusk. 

The visual style follows a **Modern Tactile** approach. It prioritizes generous whitespace to create an editorial feel, reminiscent of a luxury cookbook or a high-end lifestyle magazine. Elements are organized with rhythmic precision, but softened by organic shapes and subtle textures that prevent the UI from feeling sterile. The emotional goal is to make the guest feel invited into a sanctuary of "author’s cuisine"—where craft, origin, and fire meet.

## Colors

The palette is rooted in the natural landscape of the Colombian plains. 
- **Deep Forest Green** serves as the anchor for sophistication, used primarily for immersive backgrounds and high-contrast hero sections.
- **Earthy Terracotta** is the "fire" of the palette, used for primary calls to action and interactive states, providing warmth without sacrificing elegance.
- **Soft Cream** acts as the primary canvas for content, offering a more breathable and organic alternative to pure white.
- **Matte Gold** is reserved for subtle highlights, borders, and iconography to denote "premium" status.
- **Charcoal Black** provides the weight and legibility required for high-end typography.

## Typography

The typography system relies on a high-contrast pairing that reflects the "author" nature of the restaurant. 

**Playfair Display** provides the character and authority needed for headlines. Use it with generous line heights and tight letter-spacing for large display titles to emphasize the "gourmet" aspect.

**DM Sans** provides a clean, modern, and highly legible counterpoint for descriptions and functional text. Labels and smaller UI elements should often utilize uppercase styling with increased letter spacing to maintain a structured, organized appearance within the organic layout.

## Layout & Spacing

This design system employs a **Fixed Grid** model to ensure an editorial and curated look on larger screens, centering content for a focused experience. 

- **Desktop:** 12-column grid with wide 64px margins to allow the layout to "breathe."
- **Mobile:** 4-column grid with 20px margins.
- **Vertical Spacing:** Use a strict 8px baseline. Section transitions should be drastic (120px+) to separate different culinary narratives (e.g., separating the "Fire" section from the "Origin" section).

Whitespace is not just empty space; it is a luxury material in this system. Avoid cluttering the screen; allow each image and block of text to stand alone.

## Elevation & Depth

Depth is achieved through a combination of **Tonal Layers** and **Ambient Shadows**. 

Instead of heavy drop shadows, use extremely diffused, low-opacity shadows (e.g., 4% opacity) that make elements like cards appear to float gently above the Soft Cream surface. 

To enhance the "Author" feel, incorporate subtle paper-like grain textures or wood-fiber patterns in the Deep Forest Green backgrounds. Use Matte Gold for "ghost" borders (0.5px thickness) to separate content tiers without introducing heavy visual weight. Layering should be minimal: Surface (Cream) > Card (White) > Detail (Gold).

## Shapes

The shape language is defined as **Rounded (Level 2)**. 

While the concept is gourmet and serious, sharp corners are avoided to maintain an "organic" and "approachable" feel. Standard containers and cards should use a 0.5rem radius. Interactive elements like buttons should feel soft to the touch, reflecting the comfort of the dining environment. Large image containers may occasionally use asymmetrical rounding (e.g., top-left and bottom-right only) to mimic organic leaf shapes or artisanal ceramics.

## Components

### Buttons
Primary buttons use the **Earthy Terracotta** background with Soft Cream text. They should have a subtle hover transition that deepens the color. Secondary buttons should use a **Matte Gold** outline with Charcoal text.

### Cards (Menu & Gallery)
Cards should feature high-quality photography as the primary focus. Information is placed on a Soft Cream base with a 1px Matte Gold border. Text should be center-aligned to enhance the boutique feel.

### Input Fields
Inputs are minimalist, using a bottom-border only approach or a very light Matte Gold stroke. Focus states should transition the border to Deep Forest Green.

### Chips & Tags
Used for dietary labels (e.g., "Fire-Grilled," "Local Origin"). These should be small, uppercase **DM Sans** text inside a Deep Forest Green pill with 10% opacity, keeping them subtle and integrated into the layout.

### Special Component: The Signature Divider
Instead of standard horizontal rules, use a 1px Matte Gold line that terminates in a small diamond or a stylized "AV" leaf icon to reinforce brand identity in editorial sections.
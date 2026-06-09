# Tora Constructions — Design System & Style Guide
**Single Source of Truth (SSOT)**

Welcome to the official design system for the **Tora Constructions** web platform. This document defines the brand identity, visual language, component library, motion guidelines, and layout structures. All development and design iterations must adhere strictly to the rules, tokens, and specs defined herein.

---

## 1. Brand Identity & Positioning

Tora Constructions represents the pinnacle of premium construction, architecture, interior design, and real estate development in Upper Assam. The digital presence must project luxury, architectural precision, reliability, and modern minimalism.

*   **Company Name:** Tora Constructions
*   **Founder:** Ashok Neog
*   **Tagline:** *Building Dreams, Creating Futures*
*   **Brand Positioning:** Assam’s trusted premium construction, architecture, interior, and real estate development brand.
*   **Design Ethos:** Apple-inspired luxury minimalism, structural confidence, clean geometries, glassmorphism, and large intentional whitespace.

---

## 2. Color Palette (Design Tokens)

The brand color palette uses deep, commanding structural tones paired with elegant gold, high-contrast off-whites, and a vibrant lime accent reserved exclusively for interactions and highlights.

```css
:root {
  /* Core Brand Colors */
  --color-midnight-navy: #0B1F33;   /* Main background & dominant brand brand color */
  --color-gold: #D89B0D;            /* Secondary premium brand color (heritage & quality) */
  --color-lime: #D7F04A;            /* Interactive accent (used sparingly for callouts/hovers) */
  --color-off-white: #F7F7F5;       /* Premium background contrast / primary text color on dark */
  --color-charcoal: #111827;        /* Alternative dark neutral for depth and text */

  /* Glassmorphism Tones */
  --glass-white: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-blur: 20px;
  
  /* Text Contrast System */
  --text-primary: #F7F7F5;          /* Off-white for high contrast on Navy */
  --text-secondary: rgba(247, 247, 245, 0.7); /* Muted off-white for secondary hierarchy */
  --text-dark: #111827;             /* Dark charcoal for high contrast on light backgrounds */
  
  /* Shadows & Depth */
  --shadow-premium: 0 20px 40px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 30px 60px rgba(0, 0, 0, 0.45);
}
```

### Color Usage Matrix
*   **Midnight Navy (`#0B1F33`):** Used as the primary canvas. The entire website is designed with a dark, premium, immersive mode by default.
*   **Construction Gold (`#D89B0D`):** Applied to secondary branding elements, highlights, high-end titles, and decorative structural accents.
*   **Lime Accent (`#D7F04A`):** *Strict Rule:* Never use as a background color for large sections or text blocks. Only use for high-priority interactive states (hovers, active states), tiny badges, focus rings, or micro-interaction dots.
*   **Off White (`#F7F7F5`):** Text elements, section subtitles, and background blocks where stark contrast is needed.
*   **Glass White (`rgba(255,255,255,0.08)`):** Floating cards, navigation panels, interactive cards, and overlays.

---

## 3. Typography & Type Scale

We use Google Fonts to establish an elegant, architectural, and highly readable type hierarchy.

*   **Headings Font:** `Plus Jakarta Sans`, sans-serif (Architectural, geometric, clean, modern)
*   **Body Font:** `Inter`, sans-serif (Neutral, highly readable, clean Swiss design aesthetic)

### Type Scale Specification

| Class / Role | Font Family | Size (px / rem) | Line Height | Weight | Letter Spacing | Case |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Heading** | Plus Jakarta Sans | `72px` / `4.5rem` | 1.05 | 700 (Bold) | -0.03em | Sentence |
| **H1 (Section)** | Plus Jakarta Sans | `56px` / `3.5rem` | 1.1 | 700 (Bold) | -0.02em | Sentence |
| **H2 (Card/Sub)**| Plus Jakarta Sans | `42px` / `2.625rem` | 1.15 | 700 (Bold) | -0.01em | Sentence |
| **H3 (Widget)**  | Plus Jakarta Sans | `28px` / `1.75rem` | 1.2 | 600 (SemiBold) | 0 | Sentence |
| **Body (Default)**| Inter | `16px` / `1.0rem` | 1.7 | 400 (Regular) | 0 | Sentence |
| **Small Text**   | Inter | `14px` / `0.875rem`| 1.5 | 400 (Regular) | 0.02em | Sentence |
| **Eyebrow Text** | Plus Jakarta Sans | `14px` / `0.875rem`| 1.2 | 700 (Bold) | 0.1em | UPPERCASE |

---

## 4. Visual & Structural Design Style

The design vocabulary is inspired by Apple's clean design system, high-end architecture, and physical glass materials.

*   **Luxury Minimalism:** Negative space is a design feature. Keep margins wide and paddings tall. A typical section should have `120px` to `160px` of vertical padding.
*   **Glassmorphism:** Use translucent cards floating over dark, deep architectural backgrounds.
    *   *Backdrop Blur:* `backdrop-filter: blur(20px) saturate(180%)`
    *   *Border:* Thin, light border (`rgba(255, 255, 255, 0.12)`) simulating physical glass edges.
*   **Rounded Corners:** Very soft, generous radii:
    *   Cards / Panels: `24px` to `36px`
    *   Buttons / Badges: `100px` (Pill-shaped) or `16px`
*   **Architectural Imagery:** Use high-contrast photography of real-world structural frames, concrete textures, premium materials, and warm-lit interior architectural renders.
*   **Highlights & Accents:** Subtle gradients of Navy to Charcoal for section transitions, with gold outlines and rare, sharp lime green focal points.

---

## 5. Hero Section Specifications & Layout

The hero section must establish the brand's luxury positioning instantly. It must be immersive, dynamic, and clean.

### Hero Copy
*   **Main Headline:** "Building Assam’s Next Landmarks"
*   **Subheading:** "Premium residential, commercial, architecture, and interior solutions trusted across Upper Assam."
*   **Call to Actions (CTAs):**
    *   *Primary:* "Explore Projects" (Link to projects/services)
    *   *Secondary:* "Schedule Consultation" (Link to contact/calendar)

### Layout Rules
*   **Fullscreen Canvas (`100vh`):** A dark navy canvas containing a rich architectural visual backdrop (subtly masked or styled with parallax movement).
*   **Floating Hero Card:** An asymmetrical floating glassmorphic card that presents key company statistics cleanly.
*   **Hero Stats (Grid Layout):**
    *   `6+ Years` — Experience in Premium Build
    *   `10+ Projects` — Delivered & Occupied
    *   `Residential & Commercial` — Complete Architectural Solutions

### Visual Assets
*   A high-end architectural render or physical construction image serving as the main background layer.
*   Gentle dark vignetting to ensure copy remains highly readable.

---

## 6. UI Components Spec

### Navbar
*   **Design:** Floating glassmorphic header pinned to the top of the viewport with a blur backdrop.
*   **Behavior:** Shrinks on scroll, shifting transparency from translucent to slightly more opaque Navy glass.
*   **Elements:** Brand Logo (Bold geometric typography), Navigation Links (Home, Services, Portfolio, Process, Founder, Contact), and a CTA Button ("Get in Touch").
*   **Interactive states:** Links underline animate from center out in Gold.

### Primary Button
*   **Styling:** Solid Construction Gold (`#D89B0D`) background, dark text (`#111827`), `12px 28px` padding, font weight 600, rounded border-radius `100px`.
*   **Hover State:** Transition background-color to Lime Accent (`#D7F04A`) with a subtle scale-up (`scale(1.03)`) and soft glow shadow matching the hover color.

### Secondary Button
*   **Styling:** Translucent glass background (`rgba(255,255,255,0.06)`), border `1px solid rgba(255,255,255,0.15)`, text color Off-White (`#F7F7F5`), same sizing as primary.
*   **Hover State:** Border transitions to solid Construction Gold (`#D89B0D`), background turns to a solid dark navy tint, text changes to Construction Gold.

### Glass Cards
*   **Styling:**
    ```css
    background: var(--glass-white);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    padding: 40px;
    box-shadow: var(--shadow-premium);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
    ```
*   **Hover State:** Lifts up (`transform: translateY(-8px)`), border shifts to `rgba(216, 155, 13, 0.3)` (Gold border glow), shadow deepens to `var(--shadow-card-hover)`.

### Service Cards
*   **Styling:** Dark background card with structured grid layout. Contains a large category index number in muted Gold (e.g., `01`, `02`), service name, descriptive list of services, and an interactive chevron arrow.
*   **Hover State:** Card backgrounds scale slightly; chevron shifts to the right and changes color to Lime (`#D7F04A`).

### Stats Cards
*   **Styling:** Minimalist layout highlighting a giant numerical statistic (e.g., `10+`) in gold typography, and a brief description below it in body text color.

### Contact CTA Panel
*   **Styling:** Full-width container using a deep Navy-to-Charcoal gradient, framed by a delicate gold border. An asymmetric glass card forms the contact input container.
*   **Input Fields:** Translucent dark borders with focus rings that glow with a Lime accent color.

---

## 7. Motion & Animation Guidelines

Smooth, fluid animations are essential for conveying luxury and mimicking native OS smoothness. Avoid abrupt, high-frequency, or bouncy spring motions.

*   **Scroll Trigger Transitions (Fade-Up):**
    *   Elements must slide up and fade in as they enter the viewport.
    *   *Settings:* `translateY(40px)` to `translateY(0)`, opacity `0` to `1`. Duration: `0.8s` to `1.2s` with easing `cubic-bezier(0.16, 1, 0.3, 1)`.
*   **Parallax Effect:**
    *   The background architecture visual in the Hero must slide at 30% of the scroll speed to create structural depth.
*   **Magnetic CTA Hovers:**
    *   Primary buttons should feel "magnetic" when the cursor draws close, pulling slightly towards the cursor using standard mouse-move math.
*   **Hover Lift Dynamics:**
    *   Cards must lift smoothly when hovered. Transitions should use `cubic-bezier(0.16, 1, 0.3, 1)` rather than standard `ease` or `linear` transitions.

---

## 8. Web Page Structure & Hierarchy

The single-page website will flow through the following semantic sections:

1.  **Hero Section:** Brand introduction, core values, floating stats, background visuals, CTAs.
2.  **About Tora:** Story of Tora Constructions, Ashok Neog's vision, commitment to Assam's infrastructure.
3.  **Services:** Grid showing Core Offerings (Construction, Architectural Design, Interior Design, Real Estate Development).
4.  **Why Choose Us:** Brand pillars (Precision engineering, premium materials, transparent billing, local trust).
5.  **Locations:** Upper Assam region focus map/visual (Jorhat, Dibrugarh, Sivasagar, Tinsukia).
6.  **Process:** Step-by-step design-to-build timeline (Consultation & Concept $\rightarrow$ Architecture & Approval $\rightarrow$ Quality Construction $\rightarrow$ Handover).
7.  **Founder's Message:** Spotlight on Ashok Neog, his background, philosophy, and personal commitment to building landmark projects.
8.  **Contact & Booking:** Interactive inquiry form, address, map location, direct call CTA.
9.  **Footer:** Corporate information, navigation mapping, social linkages, legal details.

---
*End of Design System Document.*

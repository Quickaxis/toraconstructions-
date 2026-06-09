# Implementation Plan — Tora Constructions Premium Web Platform

This plan outlines the implementation of a world-class luxury web presence for **Tora Constructions** in the root workspace directory. It adheres strictly to the rules, styling tokens, and layout guidelines established in the brand's [design_system.md](file:///c:/Users/chitr/Downloads/my%20websites/Tora%20constructions/design.md/design_system.md).

---

## Proposed Changes

We will create a lightweight, blazing-fast, and visually breathtaking single-page website using semantic HTML5, custom vanilla CSS (incorporating modern styling paradigms like glassmorphism and custom property animations), and high-performance vanilla JavaScript for rich, micro-interactions and scroll-based triggers.

We will create the following files in the project root:
*   [NEW] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/Tora%20constructions/index.html)
*   [NEW] [style.css](file:///c:/Users/chitr/Downloads/my%20websites/Tora%20constructions/style.css)
*   [NEW] [main.js](file:///c:/Users/chitr/Downloads/my%20websites/Tora%20constructions/main.js)
*   [NEW] Visual assets directory: `assets/` (containing generated premium images for architecture and the founder, avoiding low-fidelity placeholders).

---

## 1. Architectural File Structure & Assets

### A. Directory Tree
```
Tora constructions/
├── design.md/
│   ├── README.md
│   └── design_system.md
├── assets/
│   ├── hero_render.jpg (AI generated modern building)
│   ├── founder_ashok_neog.jpg (AI generated executive portrait)
│   ├── residential_project.jpg (AI generated residential project)
│   └── commercial_project.jpg (AI generated commercial project)
├── index.html
├── style.css
├── main.js
└── implementation_plan.md
```

### B. Image Asset Plan
Using the `generate_image` tool, we will create high-fidelity, customized assets:
1.  `assets/hero_render.jpg`: A luxurious, modern multi-tiered residential and commercial glass/concrete architectural landmark set in an elegant warm-lit environment.
2.  `assets/founder_ashok_neog.jpg`: A premium professional portrait of Ashok Neog, depicting a confident and distinguished Indian builder/architect in a modern office or design studio background.
3.  `assets/residential_project.jpg`: Close-up of a high-end luxury villa.
4.  `assets/commercial_project.jpg`: A modern, glass-facade commercial complex showing architectural planning quality.

---

## 2. Core Section Content & Wireframes

### Section 1: Sticky Navigation Bar
*   **Aesthetics:** Frosted glassmorphism background (`backdrop-filter: blur(20px)`), floating at the top of the page with margin, rounding (`16px`), and narrow width on desktop to feel premium.
*   **Elements:** Brand monogram + "TORA CONSTRUCTIONS", menu links (Home, About, Services, Locations, Contact), and a solid Gold CTA button: "Get a Quote".

### Section 2: Immersive Hero Section (`100vh`)
*   **Left Column (60%):** Large, structural headline with absolute-size scaling.
    *   *Headline:* "Building Assam’s Next Landmarks"
    *   *Subheading:* "Premium residential, commercial, architecture, and interior solutions trusted across Upper Assam."
    *   *CTAs:* Primary magnetic button ("Get Free Consultation") + Secondary outline button ("Explore Services").
*   **Right Column (40%):**
    *   A rich layered card stack. The background layer features the architectural building visual.
    *   Superimposed over the visual are **two floating glass cards**:
        1.  *Experience Card:* "6+ Years of Crafting Luxury"
        2.  *Performance Card:* "10+ Landmarks Delivered" (with micro-charts or indicators).

### Section 3: Trust & Stats Count-up
*   A clean structural grid dividing the screen into four elegant columns with vertical dividers:
    1.  `6+` Years of Construction Excellence
    2.  `10+` Premium Projects Delivered
    3.  `5+` Major Cities & Service Hubs
    4.  `100%` Quality & Client Satisfaction
*   As the section enters the viewport, a custom JavaScript trigger will count up the numbers from `0` with custom ease timing.

### Section 4: About Us (Tora & Ashok Neog)
*   **Grid layout:** Left column holds high-contrast, professional text detailing the vision of Ashok Neog and the brand's principles: *Transparency, Timely Delivery, and Premium Craftsmanship*.
*   **Right Column:** A dual-image collage using rounded borders (`24px`) and a floating gold frame detail.

### Section 5: Interactive Services Grid
*   **Grid Structure:** 3 columns, 2 rows of high-contrast Service Cards:
    1.  *Residential Construction* (Luxury villas, premium duplex apartments)
    2.  *Commercial Construction* (Sleek retail spaces, institutional builds, offices)
    3.  *Architecture & Planning* (Blueprints, structural engineering, structural approvals)
    4.  *Interior Design* (Bespoke modern kitchens, luxury fittings, warm lighting)
    5.  *Turnkey Construction* (End-to-end design, purchase, engineering, hand-over)
    6.  *Renovation & Remodeling* (Premium restoration, modern material integration)
*   **Interactive behavior:** Hovering lifts the card and changes the icon color to the Lime Accent (`#D7F04A`).

### Section 6: Why Choose Us
*   A luxury carousel or grid representing brand promises. Uses bold geometric layouts and subtle border gradients to outline features:
    *   *Premium Materials Only* (Sourcing only elite marble, structural steel, and high-performance fittings)
    *   *Strict Timelines* (Automated daily reporting and guaranteed delivery schedules)
    *   *Absolute Financial Transparency* (Itemized, audit-ready billing with zero hidden costs)
    *   *Local Trust* (Bespoke design custom-tailored to Assam's climatic and seismic requirements)

### Section 7: Interactive Assam Service Area Map
*   **Design:** A customized SVG map overlay or high-end geographic graphic of Upper Assam.
*   **Service Nodes:** Active radar-pulsing dots for Dibrugarh, Chabua, Sivasagar, Borboruah, and Tinsukia. Hovering over a dot displays a glassmorphic card containing local projects or specific coordinates.

### Section 8: Premium Horizontal Process Timeline
*   An elegant, continuous horizontal line connecting 6 distinct steps:
    1.  `Consultation` (Understanding constraints and site goals)
    2.  `Design & Planning` (Plus Jakarta Sans sketches, 3D interior renders)
    3.  `Approval & Estimation` (Government approvals and strict cost locking)
    4.  `Construction` (Precision engineering, premium concrete casting)
    5.  `Interior & Finishing` (Bespoke lighting, premium carpentry, painting)
    6.  `Project Handover` (Key delivery with comprehensive documentation)
*   Each step lights up sequentially as the user scrolls.

### Section 9: Founder Spotlight (Ashok Neog)
*   A premium biography grid.
*   **Left Column:** Large portrait of Ashok Neog in a custom glass frame with a clean metallic gold background highlight.
*   **Right Column:** A personal letter from the founder highlighting his ethos:
    > "Our goal at Tora Constructions is not simply to build walls, but to craft structural legacies that stand the test of time, weather, and changing tastes."
*   Signature signature graphic in Gold.

### Section 10: Luxury Testimonials Slider
*   A set of three rotating glass cards displaying real-estate client stories, showcasing reviews from villa owners and corporate clients in Dibrugarh and Sivasagar.

### Section 11: Call to Action (Inquiry Form)
*   **Design:** A large asymmetric container split in half:
    *   *Left:* Contact details, telephone link `+91 96781 17192`, address `Udaipur, Dibrugarh, Assam`.
    *   *Right:* A form with floating inputs, glass styling, and a magnetic gold submit button.

### Section 12: Footer
*   A clean, dark navy background showing site links, social icons (LinkedIn, Instagram, Facebook), licensing information, and a disclaimer regarding Upper Assam's structural safety standards.

---

## 3. Motion & Animation Implementation Details

We will implement high-fidelity motion using lightweight custom JavaScript.

### A. Scroll Reveal
Using an `IntersectionObserver`, elements with a `.reveal-up` class will transition from:
```css
transform: translateY(50px);
opacity: 0;
```
to a fully visible state when entering the viewport, using `cubic-bezier(0.16, 1, 0.3, 1)` easing over `1.0s`.

### B. Magnetic Buttons
For the main CTAs, we will add a mouse-move event listener to calculate the delta between the cursor and the button center. If within a 100px radius, the button will translate slightly towards the mouse:
```javascript
let dx = mouseX - buttonCenterX;
let dy = mouseY - buttonCenterY;
button.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px) scale(1.05)`;
```

### C. Parallax Elements
We will bind a passive scroll event listener to calculate `window.scrollY` and apply a slow translation offset (`translateY(scrollY * 0.15)`) to the background architectural visuals, ensuring visual depth without layout thrashing.

### D. Counter Animations
Stats elements will trigger a counting function once visible.

---

## 4. Verification Plan

### Automated Checks
*   **Linting/Validations:** Ensure valid W3C HTML5 structures.
*   **Responsive Testing:** Programmatic verification of layout flex grids at breakpoints: `320px`, `768px`, `1024px`, and `1440px`.

### Manual Testing Points
*   Verify visual blur effects (`backdrop-filter`) across multiple browsers (Chrome, Edge, Firefox, Safari).
*   Verify smooth navigation links scrolling behaviors.
*   Verify the touch-responsiveness of cards and buttons on mobile devices.
*   Review visual alignment, whitespace proportions, and color contrast ratios against the brand tokens.

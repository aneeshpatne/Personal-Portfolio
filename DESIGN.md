# Design System Document: The Cinematic Portfolio

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Monolith"**

This design system is built to evoke the feeling of a high-end architectural installation. It moves away from the "web-as-a-document" approach and toward "web-as-an-experience." We achieve this through **Organic Brutalism**: a philosophy that marries the aggressive, sharp-edged geometry of futuristic monoliths with the sophisticated, airy layering of modern luxury.

To break the "template" look, we lean into **Intentional Asymmetry**. We do not center everything; we use extreme typographic scales and overlapping layers to create a sense of motion. This is an editorial-first system where negative space is as important as the content itself.

---

## 2. Colors & Surface Philosophy

The palette is rooted in a deep, monochromatic charcoal environment, punctuated by high-energy "Electric Indigo" accents.

### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. Traditional borders "trap" content and feel cheap. Instead:

- **Tonal Transitions:** Use background shifts (e.g., transitioning from `surface` to `surface-container-low`) to define section boundaries.
- **Negative Space:** Use generous vertical padding (64px–128px) to let sections breathe without needing a structural line.

### Surface Hierarchy & Nesting

Treat the UI as a series of stacked, physical layers of dark obsidian.

- **Base Level:** `surface` (#131313) is your infinite canvas.
- **Elevated Contexts:** Use `surface-container-low` for large content blocks and `surface-container-highest` for high-interaction components like cards or navigation bars.
- **Nesting:** To create a "recessed" look, place a `surface-container-lowest` card inside a `surface-container` section.

### The "Glass & Gradient" Rule

To achieve a "futuristic" polish:

- **Floating Elements:** Navigation bars and tooltips must use `surface-variant` with a `backdrop-blur` (12px–20px) at 60% opacity.
- **Signature Accents:** Main CTAs should never be flat indigo. Use a linear gradient from `primary` (#c0c1ff) to `primary-container` (#8083ff) at a 135-degree angle to provide "soul" and luminosity.

---

## 3. Typography

The typography is a dialogue between the "Epic" and the "Functional."

- **The Display Scale (Lexend):** Used for Headlines and Display styles. Lexend provides a wide, geometric, and authoritative presence. Use tight letter-spacing (-0.02em) for larger headers to create a "locked-in" editorial feel.
- **The Functional Scale (Inter):** Used for Body and Labels. Inter offers maximum readability against dark backgrounds. Its neutrality allows the display headings to take center stage without visual competition.

**The Brand Identity through Scale:**
We use a high-contrast ratio. A `display-lg` (3.5rem) header next to a `body-md` (0.875rem) sub-header creates an "Epic" hierarchy that feels curated and professional.

---

## 4. Elevation & Depth

We reject traditional drop shadows in favor of **Tonal Layering** and **Ambient Glows.**

- **The Layering Principle:** Depth is achieved by "stacking." A card does not need a shadow if its background color is two steps higher (`surface-container-high`) than the section it sits on (`surface-container-low`).
- **Ambient Shadows:** If a floating effect is required (e.g., a modal), use a wide-spread shadow (blur: 40px) with 6% opacity using the `primary` color (#c0c1ff) rather than black. This creates a "backlit" effect common in high-end electronics.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` (#464554) at **15% opacity**. This creates a suggestion of an edge rather than a hard boundary.
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` on all floating containers. This allows the primary accent colors to "bleed" through the dark surfaces, softening the overall aesthetic.

---

## 5. Components

### Buttons

- **Primary:** Sharp edges (0px radius). Gradient background (`primary` to `primary-container`). Text in `on-primary-fixed` (#07006c).
- **Secondary:** Transparent background with a "Ghost Border" (15% opacity `outline-variant`). On hover, the border opacity increases to 40%.
- **Tertiary:** Pure text with an underline that expands from the center on hover.

### Cards & Lists

- **Rule:** **No Divider Lines.** Use vertical white space or a subtle shift to `surface-container-lowest` to separate items.
- **Interaction:** On hover, a card should shift from `surface-container` to `surface-bright`, creating a "lit from within" effect.

### Input Fields

- **Style:** Underline only. No box. The label uses `label-md` and sits above the input. The underline uses `outline-variant` (#464554) and transforms into a `primary` color gradient upon focus.

### Interactive "Monolith" Chips

- Use `surface-container-highest` with `label-sm` text. Sharp corners. These should feel like small, cut stones.

---

## 6. Do’s and Don’ts

### Do:

- **Do** use sharp 0px corners for everything. The elegance comes from the precision of the angles.
- **Do** use "Electric Indigo" (`primary`) sparingly. It is a laser beam, not a floodlight.
- **Do** embrace extreme white space. If a section feels "busy," double the padding.
- **Do** overlap elements. Let a `display-lg` heading partially hang over a `surface-container` card to create depth.

### Don't:

- **Don't** use rounded corners. Even a 2px radius breaks the "Epic/Futuristic" personality.
- **Don't** use standard 100% opaque borders. They clutter the dark theme and reduce the premium feel.
- **Don't** use pure black (#000000). Always use the charcoal `surface` (#131313) to allow for depth and "low" layering.
- **Don't** use generic icons. Use thin-stroke (1px or 1.5px) geometric icons to match the sharp aesthetic of the system.

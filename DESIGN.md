# THE CELESTIAL ARCHIVE

## Master Design System & Interactive Architecture Blueprint

A unified specification for a personal portfolio website inspired by **Cinematic Chinese Xianxia, Celestial Mythology, and Oriental Luxury**.

---

## I. CORE BRAND & VISUAL IDENTITY

### 1. Brand Philosophy & Aesthetic Identity
- **Core Concept**: The Celestial Archive (An immortal scholar's digital vault).
- **Guiding Principle**: *"Minimal in structure, infinite in atmosphere."*
- **Atmosphere**: Immersive, mysterious, disciplined, elegant, and timeless.
- **Visual Direction**: Avoid generic modern SaaS templates, loud neon colors, or corporate clutter. Merge ancient celestial mythology with modern, high-performance web craftsmanship.
- **Language Standard**: Strict pure English typography. No foreign scripts or emojis in interface copy.

---

### 2. Color Palette & Proportions

Follow this distribution ratio across all viewports:
- **65%** Obsidian Black and dark structural surfaces.
- **20%** Supporting dark neutrals (charcoal and gunmetal).
- **10%** Champagne Gold accents (interactive states, borders, titles).
- **5%** Red Wine accents (ambient lighting, spiritual aura, hover glow).

#### Primary Colors
- **Obsidian Black** (`#111318`): Primary canvas background, deep surfaces, viewport container.
- **Champagne Gold** (`#C6A66B`): Primary interactive accent, active progress nodes, borders, key headings.
- **Red Wine** (`#722F3D`): Secondary atmospheric accent, crimson moon lighting, aura glows, ambient halos.

#### Supporting Neutrals & Typography Colors
- **Deep Charcoal** (`#1B1D23`): Card surfaces, secondary containers, inactive tablets.
- **Gunmetal** (`#292C34`): Subtle 1px borders, architectural dividers.
- **Slate Gray** (`#777982`): Metadata, dates, secondary descriptions.
- **Ivory** (`#F1EBDD`): High-contrast, glare-free primary body copy.
- **Silver Mist** (`#B7B7B7`): Subdued labels, inactive button borders.
- **Burgundy** (`#4B1F2B`): Deeper ambient lighting layers.
- **Antique Gold** (`#967548`): Secondary metallic accents, muted borders.

---

### 3. Gradient System

Use sparingly for ambient backdrops, subtle card borders, and hero glows:

- **Midnight Wine**: `linear-gradient(135deg, #111318, #351C28, #722F3D)`
- **Royal Burgundy**: `linear-gradient(135deg, #4B1F2B, #722F3D, #A66B76)`
- **Champagne Glow**: `linear-gradient(135deg, #967548, #C6A66B, #E5D4B2)`
- **Obsidian Depth**: `linear-gradient(135deg, #111318, #1B1D23, #292C34)`

---

### 4. Typography System

Two high-performance Google Fonts loaded via `next/font/google`:

#### Display Font: Cormorant Garamond
- **Usage**: Hero titles, chapter headings, monumental statements.
- **Weights**: 500 (Medium), 600 (Semi-bold), 700 (Bold).
- **Tone**: Classical, literary, majestic, timeless.

#### Body & Interface Font: Manrope
- **Usage**: Body text, technical pills, button labels, navigation indicators, metadata.
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold).
- **Tone**: Geometric, modern, highly legible at small sizes.

#### Scale & Hierarchy
- **Hero Title**: Cormorant Garamond, 64–96px desktop (mobile: 40–56px).
- **Section Title**: Cormorant Garamond, 42–64px desktop (mobile: 32–42px).
- **Subheading**: Manrope, 18–24px.
- **Body Text**: Manrope, 15–17px (mobile: 14–16px), color Ivory (`#F1EBDD`).
- **Interface Labels**: Manrope, 11–13px, uppercase with generous letter spacing (`tracking-wider`).

---

## II. INTERACTIVE SCREEN BLUEPRINT

```text
┌────────────────────────────────────────────────────────────────────────┐
│  01 ORIGIN ────── 02 ARTIFACT ────── 03 JOURNEY ────── 04 ALLIANCE     │
└────────────────────────────────────────────────────────────────────────┘
```

### 5. Opening Screen: The Celestial Gateway (Title Screen)
- **Atmosphere & Visual Art**:
  - Layered Shan Shui / Sumi-e ink landscape depicting mist-shrouded Obsidian mountain peaks (`#111318`).
  - Silhouette of an ancient pagoda perched on an ethereal cliff.
  - Dramatic glowing Crimson / Red Wine moon (`#722F3D`) hanging in the night sky.
  - Floating subtle golden embers (`#C6A66B`) and drifting horizontal mist.
- **Interface Elements (Pure English, Zero Emojis)**:
  - Grand Title: `THE CELESTIAL ARCHIVE` in Cormorant Garamond.
  - Interactive Mode Selector:
    - `01 -- CINEMATIC JOURNEY` (Active state with glowing gold pointer and underline).
    - `02 -- QUICK RESUME` (Understated Ivory text).
  - Corner HUD: `[AVAILABLE FOR WORK]` (bottom-left) and `[CLICK TO EXPLORE]` (bottom-right).
- **Transition On Selection (The Cloud Traverse)**:
  - Selection lock-in pulse on the chosen mode.
  - The camera pushes in through the mist with a smooth zoom-in scale effect (`scale: 1 -> 1.15`).
  - Crossfades seamlessly into Section 1.

---

### 6. Section 1: 01 ORIGIN (Character Profile)
- **Environment & Backdrop**:
  - Open mountain summit overlooking an ethereal celestial sea of rolling clouds under the crimson moon.
  - Barrier-free, open horizon (no man-made balconies or railings).
  - Subtle depth-of-field blur on distant peaks to ensure 100% text readability.
- **Layout & Composition**:
  - **Left Side**: Vertical 3:4 portrait photo frame adorned with Champagne Gold corner accents and a soft Red Wine ambient backlight aura.
  - **Right Side**:
    - Role label: `FRONTEND & INTERFACE ARCHITECT` (uppercase, letter-spaced).
    - Name: Grand Cormorant Garamond headline in Ivory.
    - Short Bio: 2–3 concise sentences detailing core focus, technology mastery, and current engineering initiatives.
- **Navigation HUD**:
  - Top Stepper: `01 ORIGIN` active in glowing Champagne Gold.
  - Bottom Right: Sleek button `[ NEXT: 02 ARTIFACT -> ]`.

---

### 7. Section 2: 02 ARTIFACT (The Celestial Constellation)
- **Environment & Backdrop**:
  - Deep obsidian void with subtle crimson nebula clouds and floating stardust.
- **Layout: Constellation Star Map + Floating Celestial Dossier**:
  - **Left Side (The Constellation)**:
    - 4 luminous star nodes positioned across a celestial pattern, connected by razor-thin glowing Champagne Gold lines.
    - **Each node is directly labeled with its Project Title** (e.g. `AETHERIA PROTOCOL`, `NEBULA STUDIO`).
    - Selecting a node illuminates it with a circular golden aura and pulses energy along the connecting lines.
  - **Right Side (The Celestial Dossier)**:
    - An ethereal glassmorphic dossier panel connected via energy beam from the active star node.
    - High-resolution web app mockup display at the top.
    - Project title, category, and in-depth description (problem, architecture, and impact).
    - Tech stack pill tags (`Next.js`, `TypeScript`, `Tailwind`).
    - Action CTAs: `[ Live Demo ↗ ]` and `[ GitHub Repo ⎇ ]`.
- **Navigation HUD**:
  - Top Stepper: `01 ORIGIN` (unlocked) -- `02 ARTIFACT` (active).
  - Bottom Controls: `[ <- PREV: ORIGIN ]` and `[ NEXT: 03 JOURNEY -> ]`.

---

### 8. Section 3: 03 JOURNEY (The Dual Ancient Stelae)
- **Environment & Backdrop**:
  - Two monumental ancient carved obsidian stone monoliths standing side-by-side in the celestial mist.
- **Layout & Composition**:
  - **Left Stela (Chronicle I - Foundation)**:
    - Records past role, company name, employment period, key accomplishments, and foundational tech stack runes.
  - **Right Stela (Chronicle II - Ascendant / Latest)**:
    - Records current/latest role, company name, employment period, advanced scale/leadership achievements, and modern tech stack.
    - Framed with an active glowing Champagne Gold bevel and subtle Red Wine aura.
- **Interactive Mechanics**:
  - Hovering a stela triggers an ethereal golden vein tracing effect along the stone contours and illuminates the engraved text and tech pills.
- **Navigation HUD**:
  - Top Stepper: `01 ORIGIN` -- `02 ARTIFACT` (unlocked) -- `03 JOURNEY` (active).
  - Bottom Controls: `[ <- PREV: ARTIFACT ]` and `[ NEXT: 04 ALLIANCE -> ]`.

---

### 9. Section 4: 04 ALLIANCE (The Four Relays & The Grand Unlock)
- **Environment & Backdrop**:
  - Center-focused call to forge new partnerships and projects.
  - Headline: `INITIATE TRANSMISSION` / `FORGE AN ALLIANCE`.
- **The Four Relays**:
  - 4 interactive celestial artifact cards:
    1. **WhatsApp** — Direct Instant Messaging
    2. **GitHub** — Code Vault & Open Source Repositories
    3. **Email** — Formal Inquiries & Correspondence
    4. **LinkedIn** — Professional Network & Credentials
  - Hover interaction: Champagne Gold border illumination, subtle light sweep across the card, and icon highlight.
- **The Grand Unlock (Completion Flow)**:
  - The standard `[ NEXT ]` button disappears.
  - A prominent completion button appears: `[ UNLOCK ARCHIVE & EXPLORE FREELY ]`.
  - **On Click Sequence**:
    1. Visual confirmation notice: *"The Archive is now fully unlocked"*.
    2. Viewport scroll lock (`overflow: hidden`) is permanently removed.
    3. Smooth auto-scroll glides back up to `01 ORIGIN`.
    4. Transition mode switches permanently to standard, fluid natural document scrolling.

---

### 10. Quick Resume Mode Specifications (The Recruiter Experience)
When entering `02 -- QUICK RESUME` or unlocking full explore mode:

1. **Sticky Header**:
   - Minimalist top bar appears with logo `THE CELESTIAL ARCHIVE`.
   - Direct section jump links: `Origin` • `Artifact` • `Journey` • `Alliance`.
   - Primary action button: `[ DOWNLOAD CV (PDF) ]` in Champagne Gold for recruiters.
   - Mode switcher button: `[ Cinematic Mode ]` to toggle guided presentation.
2. **Document Flow**:
   - Natural vertical scrolling with generous breathing room (`py-24` spacing between chapters).
   - ATS and recruiter-friendly structure with full text accessibility.

---

## III. MOTION, PERFORMANCE & STATE ARCHITECTURE

### 11. State Machine & Navigation Constraints
A dedicated custom hook (`usePortfolioMode.ts`) governs all navigation logic:

- `mode`: `'gateway' | 'cinematic' | 'quick_resume'`
- `activeSection`: `0 | 1 | 2 | 3` (corresponds to Origin, Artifact, Journey, Alliance)
- `maxVisitedSection`: `number` (stepper constraint: `targetIndex <= maxVisitedSection`)
- `isUnlocked`: `boolean` (toggled true upon completing Alliance, enabling full free scroll)

#### Keyboard Navigation
- Navigation traversal via Arrow keys (`[<-]` and `[->]`) and `[Space]`.
- Focus indicators: Clean, high-contrast gold outline for keyboard `[Tab]` traversal without requiring numeric shortcuts.

---

### 12. Motion Timing & Performance Rules

To ensure an ultra-luxury feel without causing visitor fatigue or latency:

1. **Strict Animation Timing Budget**:
   - **Inter-section transitions**: Kept strictly within **400ms – 600ms**. Never exceed 700ms to prevent the interface from feeling sluggish.
   - **Stagger delays**: Child elements enter with an 80ms – 100ms offset.
   - **Easing Curve**: Luxury deceleration `[0.22, 1, 0.36, 1]` (cubic-bezier).
2. **GPU Acceleration Only**:
   - All animations must strictly animate `transform` (`translateX`, `translateY`, `scale`) and `opacity`.
   - Avoid animating layout properties (`width`, `height`, `top`, `margin`, `padding`) to eliminate reflow and guarantee 60 FPS across all devices.
3. **Asset & Loading Optimization**:
   - Images formatted in modern WebP / AVIF via Next.js `<Image />`.
   - Hero background artwork and profile portrait use `priority={true}` for instant Largest Contentful Paint (target: LCP < 1.2s).
   - Instant deep Obsidian blur placeholder eliminates white flashes or layout shifts during load.
4. **Prefers-Reduced-Motion Support**:
   - When the user's OS specifies reduced motion:
     - Camera zoom-in (`scale`) and horizontal slide transforms are disabled.
     - Transitions gracefully fall back to simple, gentle opacity crossfades.

---

### 13. Responsive Mobile Adaptation

All elements adapt gracefully to viewport widths under 768px:

1. **Section 1 (Origin)**: Stacks vertically. The portrait photo frame appears on top (3:4 ratio with gold border), followed by Role, Name, and Bio directly underneath.
2. **Section 2 (Artifact)**: The split layout adapts into a vertical structure:
   - Top track: Horizontal scrollable star selector chips (`Aetheria`, `Nebula`, `Chrono`, `Zenith`).
   - Bottom panel: The full detail dossier for the currently selected project.
3. **Section 3 (Journey)**: The two stelae stack vertically (Chronicle II on top, Chronicle I below) with full width and clear readability.
4. **Section 4 (Alliance)**: The 4 contact cards are arranged in an accessible 2x2 grid with comfortable touch targets (minimum 48px height).
5. **Mobile Gestures**: Cinematic Mode supports native touch swipe gestures: **Swipe Left** for Next section, **Swipe Right** for Previous section.

---

## IV. CODE & DATA SPECIFICATIONS

### 14. Technology Stack & Directory Structure
- **Framework**: Next.js 15+ (App Router architecture)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS (custom tokens mapped to exact palette)
- **Motion**: Framer Motion (`framer-motion`)

```text
src/
├── app/
│   ├── layout.tsx             # Root layout, Google Fonts, OpenGraph metadata
│   ├── page.tsx               # Primary controller (Gateway vs Cinematic vs Quick Resume)
│   └── globals.css            # Custom utility classes, theme variables, scrollbar styling
│
├── data/
│   └── portfolioData.ts       # SINGLE SOURCE OF TRUTH (All content isolated here)
│
├── types/
│   └── portfolio.ts           # Strict TypeScript contracts
│
├── hooks/
│   └── usePortfolioMode.ts    # State machine (mode, activeSection, maxVisited, isUnlocked)
│
└── components/
    ├── gateway/
    │   └── CelestialGateway.tsx   # Title screen with mode selection
    ├── navigation/
    │   ├── TopStepper.tsx         # Progress bar with visited-only unlock
    │   ├── NavigationControls.tsx # Next/Prev buttons & keyboard hints
    │   └── QuickResumeHeader.tsx  # Sticky header with PDF CV download
    └── sections/
        ├── OriginSection.tsx      # Section 1
        ├── ArtifactSection.tsx    # Section 2 (Constellation + Dossier)
        ├── JourneySection.tsx     # Section 3 (Dual Stelae)
        └── AllianceSection.tsx    # Section 4 (Relays + Unlock trigger)
```

---

### 15. Scalable Data Contract (Single Source of Truth)

All portfolio contents are isolated inside `src/data/portfolioData.ts`. Modifying, adding, or removing items never requires altering layout or animation components:

```typescript
export interface PortfolioData {
  identity: {
    name: string;
    role: string;
    photoUrl: string;
    bio: string;
    statusBadge: string;
  };
  artifacts: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    techStack: string[];
    mockupUrl: string;
    demoUrl: string;
    githubUrl: string;
  }>;
  journey: Array<{
    id: string;
    chronicleLabel: string;
    role: string;
    company: string;
    period: string;
    achievements: string[];
    techStack: string[];
    isCurrent: boolean;
  }>;
  alliance: {
    headline: string;
    subheadline: string;
    links: {
      whatsapp: string;
      github: string;
      email: string;
      linkedin: string;
    };
  };
}
```

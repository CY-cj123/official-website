# Changyuan Chengjian (长垣诚建) Official Website - Project Documentation

> **CRITICAL INSTRUCTION FOR AI AGENTS:**
> This document is the **single source of truth** for the project.
> 1. **READ THIS FIRST** before starting any task.
> 2. **UPDATE THIS DOCUMENT** after every significant change (architecture, tech stack, feature logic).
> 3. **PUSH TO GITHUB** immediately after every session.
> 4. **MAINTAIN I18N SYNCHRONIZATION**: Never update text in one language without updating ALL others in `src/lib/i18n.ts`.

## 1. Project Overview
**Changyuan Chengjian Municipal Construction Engineering Co., Ltd.**
A modern, international corporate website designed to benchmark against global engineering giants (AECOM, Bechtel).
- **Style**: International Industrial (Deep Blue #003366, White, Cool Gray).
- **Goal**: High trust, professional, getting rid of traditional SOE (State-Owned Enterprise) "outdated" feel.

## 2. Tech Stack (Non-Negotiable)
- **Framework**: Next.js 16 (App Router).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS 4.0 (using `@tailwindcss/postcss`).
- **Animation**: Framer Motion (page transitions, scroll reveals).
- **Icons**: Lucide React.
- **Maps**: React Leaflet (OpenStreetMap) + Custom Map Provider Links (Gaode/Baidu/Google).
- **Internationalization**: Custom React Context (`LanguageContext`) + Dictionary (`src/lib/i18n.ts`).
  - **NOT** using `next-intl` middleware. State is client-side managed via Context.

## 3. Core Architecture & Features

### 3.1 Internationalization (i18n)
- **Supported Languages**: 
  - English (`en`)
  - Simplified Chinese (`zh-CN`)
  - Traditional Chinese (`zh-TW`)
  - French (`fr`)
  - Russian (`ru`)
- **Data Source**: `src/lib/i18n.ts`
- **Rule**: All UI text MUST be pulled from `translations[lang]`. Never hardcode text in components.
- **Font Handling**: 
  - `Inter` for English/European languages.
  - `Ma Shan Zheng` (Google Font) for artistic Chinese titles in Hero section.

### 3.2 Page Specifics

#### **Home (`/`)**
1.  **Hero Section**: 
    - Full-screen background.
    - Animated text with `Ma Shan Zheng` font for Chinese.
    - Dual CTA (Contact / Projects).
2.  **Stats**: Animated counters (Years, Projects, Team).
3.  **Services**: Grid layout.
4.  **Featured Projects**: 
    - **Implementation**: Native CSS Scroll Snap (Horizontal Scroll).
    - **Note**: Swiper.js was removed due to compatibility issues. Do NOT re-introduce Swiper without thorough testing.
5.  **ESG**: Safety & Sustainability section.

#### **Contact (`/contact`)**
1.  **Map Logic**:
    - **Map Display**: Leaflet (OpenStreetMap) for visual representation.
    - **Navigation Links**: 
        - **Default**: Gaode Map (高德地图).
        - **Switcher**: User can toggle between Gaode, Baidu, and Google Maps.
        - **Address Link**: The text address links directly to the selected map provider.
2.  **Contact Form**:
    - Fields: Name (怎么称呼), Company (所属单位), Phone, Email, Message.
    - Logic: Client-side validation.
    - **i18n**: Placeholders must be localized (or empty if preferred by design).

### 3.3 SEO & Metadata
- **Global Metadata**: Defined in `src/app/layout.tsx`.
- **Structured Data**: JSON-LD for "ConstructionBusiness" included in `layout.tsx`.
- **Verification**:
    - Baidu: `codeva-wPLgIMaDkT` (HTML tag).
    - Google: Placeholder ready in `layout.tsx`.
- **Sitemap**: Standard Next.js sitemap generation (if implemented).

## 4. Development Workflow & Rules (STRICT)

### Rule #1: GitHub Synchronization
- **Action**: `git add . && git commit -m "Description" && git push`
- **Frequency**: After EVERY logical task completion.
- **Why**: To prevent data loss and ensure continuity between AI sessions.

### Rule #2: Documentation Updates
- **Action**: Update `docs/Multi-Page Corporate Site.md` (this file).
- **When**: Whenever you add a feature, change a library, or modify core logic.
- **Content**: Reflect the *current* reality, not the *planned* state.

### Rule #3: i18n Integrity
- **Action**: When adding new text (e.g., a new button):
  1. Open `src/lib/i18n.ts`.
  2. Add the key to `en`, `zh-CN`, `zh-TW`, `fr`, and `ru`.
  3. Use Google Translate if you don't know the language, but **NEVER** leave a key missing in any language.
- **Why**: Missing keys crash the UI or show ugly fallbacks.

### Rule #4: Verification
- **Action**: Check `http://localhost:3000` before confirming a task.
- **Focus**: 
  - Does the language switch work?
  - Do images load? (Check `public/images` path).
  - Is the layout responsive (Mobile vs Desktop)?

## 5. Directory Structure
```
/src
  /app          # App Router pages
  /components   # React Components
    /content    # Text-heavy sections (About, Contact info)
    /home       # Homepage specific widgets (Hero, Showcase)
    /layout     # Navbar, Footer
    /ui         # Generic UI (Buttons, Cards - shadcn/ui style)
  /context      # React Context (LanguageContext)
  /lib          # Utilities (utils.ts, i18n.ts)
  /public       # Static assets (images, fonts)
```

## 6. Current "Watchlist" (Known Issues/Notes)
1.  **Project Showcase**: 
    - **Current Implementation (2025-12-23)**: Using Swiper.js Coverflow Effect for center-focused carousel.
    - **Features**: Auto-play (3s interval), pause on hover, active slide is brightest/largest, side slides are dimmed.
    - **Technical Details**: Swiper modules enabled: `EffectCoverflow`, `Autoplay`, `Pagination`.
    - **Previous Attempt**: CSS Scroll Snap was used but lacked the visual impact of center-mode carousel.
2.  **Map Links**: Ensure the address link in the Footer and Contact page always points to the correct map URL based on the user's preference (or default Gaode).
3.  **Fonts**: `Ma Shan Zheng` is a variable font but sometimes needs explicit weight definition.

---
*Last Updated: 2025-12-23*

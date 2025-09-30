# Project Structure

This document outlines the clean, modular architecture of the Nahida website.

## 📁 Directory Structure

```
nahida/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with fonts & metadata
│   │   ├── page.tsx           # Main page composition
│   │   └── globals.css        # Global styles
│   │
│   ├── components/            # React components
│   │   ├── index.ts          # Barrel export for all components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero/Intro section
│   │   ├── Profile.tsx       # Character profile section
│   │   ├── History.tsx       # Character history section
│   │   ├── Skills.tsx        # Skills section container
│   │   ├── SkillCard.tsx     # Individual skill card
│   │   ├── ElementalBurst.tsx # Elemental burst special card
│   │   └── Footer.tsx        # Footer with credits
│   │
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts          # Type definitions for skills, etc.
│   │
│   ├── data/                  # Static data & constants
│   │   ├── index.ts          # Barrel export
│   │   └── skills.ts         # Skills data & constants
│   │
│   └── hooks/                 # Custom React hooks
│       └── useScrollAnimation.ts  # Scroll & fade animations
│
├── public/
│   └── assets/               # Images, SVGs, etc.
│
└── Configuration files...
```

## 🧩 Component Architecture

### Page Composition
The main `page.tsx` is extremely simple and clean:
```tsx
<Header />
<Hero />
<Profile />
<History />
<Skills />
<Footer />
```

### Component Organization
- **Presentational Components**: Each section is a self-contained component
- **Reusable Components**: `SkillCard` and `ElementalBurst` are reusable
- **Data Separation**: All data lives in `/data`, not in components
- **Type Safety**: Strong typing with TypeScript interfaces
- **Custom Hooks**: Shared logic extracted to hooks

## 🎯 Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **DRY (Don't Repeat Yourself)**: Shared logic in hooks, data in constants
3. **Type Safety**: TypeScript interfaces for all data structures
4. **Barrel Exports**: Clean imports using index files
5. **Separation of Concerns**: Data, types, components, and logic are separate

## 📦 Import Patterns

All imports use path aliases for cleanliness:
```tsx
import { Header, Hero, Profile } from '@/components';
import { skills, elementalBurst } from '@/data';
import { SkillData } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
```

## 🔄 Data Flow

1. **Data** is defined in `/src/data/skills.ts`
2. **Types** are defined in `/src/types/index.ts`
3. **Components** consume data and render UI
4. **Hooks** handle side effects and shared logic
5. **Main page** composes everything together

## 🎨 Styling Strategy

- Global styles in `globals.css`
- Class names follow BEM-like conventions
- Responsive design with mobile-first approach
- CSS variables for fonts (set in layout.tsx)

## 🚀 Adding New Features

### Adding a New Section
1. Create component in `/src/components/NewSection.tsx`
2. Export it from `/src/components/index.ts`
3. Import and use in `/src/app/page.tsx`

### Adding New Data
1. Define types in `/src/types/index.ts`
2. Add data in `/src/data/`
3. Export from `/src/data/index.ts`
4. Consume in components

### Adding New Hooks
1. Create hook in `/src/hooks/useHookName.ts`
2. Import and use in components

This architecture ensures the codebase remains clean, maintainable, and scalable.

# Nahida - The Dendro Archon

A beautifully designed, production-ready Next.js website showcasing Nahida from Genshin Impact. Built with modern best practices and clean architecture.

## ✨ Features

- **Clean Component Architecture** - Modular, reusable components
- **TypeScript** - Fully typed for reliability
- **Custom Hooks** - Shared logic extraction
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Intersection Observer animations
- **Path Aliases** - Clean imports with `@/` prefix

## 🏗️ Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components (8 total)
├── types/           # TypeScript interfaces
├── data/            # Static data & constants
└── hooks/           # Custom React hooks
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed architecture documentation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Google Fonts** - Baloo 2, Fredoka, Petrona
- **Turbopack** - Fast bundler

## 🧩 Component Overview

| Component | Purpose |
|-----------|---------|
| `Header` | Navigation menu |
| `Hero` | Hero section with character art |
| `Profile` | Character introduction |
| `History` | Lore and background |
| `Skills` | Skills section container |
| `SkillCard` | Individual skill display |
| `ElementalBurst` | Special burst skill card |
| `Footer` | Credits and links |

## 📝 Code Quality

- ✅ Zero linter errors
- ✅ Full TypeScript coverage
- ✅ Modular component structure
- ✅ Separated concerns (data/types/components/logic)
- ✅ Reusable components
- ✅ Custom hooks for shared logic

## 👤 Author

**Dev Jindal**
- GitHub: [@devjindal-me](https://github.com/devjindal-me)
- Portfolio: [devjindal.me](https://devjindal.me)

## 🎮 Credits

Game and character by [Genshin Impact - HoYoverse](https://genshin.hoyoverse.com/)
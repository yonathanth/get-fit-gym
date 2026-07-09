# Project Structure Documentation

## 📂 Directory Overview

```
get-fit-gym/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                 # Home page (main entry point)
│   ├── globals.css              # Global styles + Tailwind config
│   └── favicon.ico              # Site favicon
│
├── components/                   # React Components
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx           # Main navigation component
│   │   └── Footer.tsx           # Footer component
│   │
│   ├── sections/                # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── PerformanceTrackingSection.tsx
│   │   ├── CoachingSection.tsx
│   │   ├── MembershipBenefitsSection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── ui/                      # Reusable UI components (future)
│   │   └── (buttons, cards, etc.)
│   │
│   └── index.ts                 # Component exports
│
├── lib/                         # Utility functions
│   └── (helper functions, constants, etc.)
│
├── types/                       # TypeScript type definitions
│   └── (interfaces, types, etc.)
│
├── public/                      # Static assets
│   └── (images, fonts, etc.)
│
└── Configuration Files
    ├── next.config.ts           # Next.js configuration
    ├── tailwind.config.ts       # Tailwind CSS v4 config (not used in v4)
    ├── postcss.config.mjs       # PostCSS with Tailwind v4
    ├── tsconfig.json            # TypeScript configuration
    ├── eslint.config.mjs        # ESLint configuration
    ├── package.json             # Dependencies and scripts
    └── README.md                # Project documentation
```

## 🎯 Component Architecture

### Layout Components (`components/layout/`)
**Purpose:** Structural components that wrap page content

- **Navbar.tsx**
  - Sticky navigation bar
  - Mobile responsive menu
  - Active link highlighting
  - CTA button

- **Footer.tsx**
  - Footer links
  - Copyright notice
  - Brand watermark

### Section Components (`components/sections/`)
**Purpose:** Self-contained page sections

- **HeroSection.tsx**
  - Main headline
  - Hero image with video play button
  - Intro paragraph

- **PerformanceTrackingSection.tsx**
  - Split layout (2/5 content, 3/5 image)
  - Expandable feature cards
  - Icon integration

- **CoachingSection.tsx**
  - Reversed split layout
  - Interactive hover states
  - Professional imagery

- **MembershipBenefitsSection.tsx**
  - Responsive grid (4 columns → 2 → 1)
  - Icon-based cards
  - Hover animations

- **CTASection.tsx**
  - Full-width call-to-action
  - Background image with overlay
  - Primary action button

## 🎨 Styling Approach

### Tailwind CSS v4
- Uses `@import "tailwindcss"` in globals.css
- Custom theme via `@theme inline` directive
- No separate tailwind.config.ts needed

### Color System
```css
Primary:       #D9972B (Gold)
Background:    #0A0A0A (Deep Black)
Surface:       #141313 (Elevated Black)
Secondary:     #A1A1A1 (Gray)
On-Primary:    #000000 (Black text on gold)
On-Surface:    #e5e2e1 (Light text on dark)
```

### Typography
- **Body Text:** Inter (400-900 weights)
- **Headlines:** Bebas Neue (bold, impact style)
- Font loading via Next.js font optimization

## 🔄 Data Flow

```
layout.tsx (Root)
    ↓
  Navbar (Global)
    ↓
  page.tsx (Home)
    ↓
    ├── HeroSection
    ├── PerformanceTrackingSection
    ├── CoachingSection
    ├── MembershipBenefitsSection
    └── CTASection
    ↓
  Footer (Global)
```

## 🚀 Development Workflow

1. **Start Development**
   ```bash
   npm run dev
   ```

2. **Component Development**
   - Create component in appropriate folder
   - Export from `components/index.ts`
   - Import in page or layout

3. **Styling**
   - Use Tailwind utility classes
   - Add custom CSS to `globals.css` if needed
   - Follow existing color/spacing variables

4. **Build & Deploy**
   ```bash
   npm run build
   npm start
   ```

## 📋 Best Practices

### Component Organization
- ✅ One component per file
- ✅ Group related components in folders
- ✅ Use barrel exports (index.ts)
- ✅ Keep components small and focused

### File Naming
- ✅ PascalCase for components: `HeroSection.tsx`
- ✅ camelCase for utilities: `formatDate.ts`
- ✅ kebab-case for routes: `membership-plans/`

### Code Style
- ✅ Use TypeScript for type safety
- ✅ Destructure props
- ✅ Use const for components
- ✅ Add JSDoc comments for complex logic

### Responsive Design
- ✅ Mobile-first approach
- ✅ Use Tailwind breakpoints (md:, lg:, xl:)
- ✅ Test on multiple screen sizes

## 🔮 Future Extensions

### Planned Additions
- [ ] `/memberships` - Pricing page
- [ ] `/classes` - Class schedule
- [ ] `/trainers` - Trainer profiles
- [ ] `/contact` - Contact form
- [ ] `/blog` - News/articles

### Recommended Components to Create
- `Button` - Reusable button variants
- `Card` - Generic card component
- `Input` - Form input component
- `Modal` - Modal/dialog component
- `Accordion` - Expandable content

### Utilities to Add
- `lib/utils.ts` - Common helper functions
- `lib/constants.ts` - App-wide constants
- `lib/api.ts` - API calls (if needed)

### Types to Define
- `types/index.ts` - Shared type definitions
- `types/api.ts` - API response types
- `types/components.ts` - Component prop types

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

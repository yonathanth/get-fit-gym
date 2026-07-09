# Get Fit Gym - Next.js Website

A modern, high-performance gym website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter & Bebas Neue (Google Fonts)
- **Icons:** Material Symbols Outlined

## 📁 Project Structure

```
get-fit-gym/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Sticky navigation with mobile menu
│   │   └── Footer.tsx      # Footer with links & branding
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── PerformanceTrackingSection.tsx
│   │   ├── CoachingSection.tsx
│   │   ├── MembershipBenefitsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                 # Reusable UI components (future)
├── lib/                    # Utility functions (future)
└── types/                  # TypeScript type definitions (future)
```

## 🎨 Design Features

- **Dark Theme:** Sophisticated black background with gold accents
- **Custom Colors:** 
  - Primary: `#D9972B` (Gold)
  - Background: `#0A0A0A` (Deep Black)
  - Surface: `#141313`
  - Secondary: `#A1A1A1` (Gray)
- **Typography:**
  - Body: Inter (clean, modern sans-serif)
  - Headers: Bebas Neue (bold, impact font)
- **Animations:**
  - Smooth hover effects
  - Image zoom on hover
  - Expandable accordion items
  - Text glow effects

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project:**
   ```bash
   cd get-fit-gym
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile menu
- Sticky positioning
- Multiple nav links with active states
- CTA button for registrations

### Hero Section
- Large headline with custom typography
- Featured image with play button overlay
- Introductory text

### Performance Tracking Section
- Split layout (content + image)
- Expandable feature items
- Icon integration with Material Symbols

### Coaching Section
- Reversed split layout
- Interactive hover states
- Professional imagery

### Membership Benefits
- 4-column grid (responsive)
- Icon-based features
- Hover animations

### CTA Section
- Full-width hero image
- Overlay with call-to-action
- Prominent button

### Footer
- Large typography branding
- Multiple footer links
- Copyright information

## 🎨 Customization

### Colors
Edit the color variables in `app/globals.css`:
```css
--color-primary: #D9972B;
--color-background: #0A0A0A;
```

### Fonts
Change fonts in `app/layout.tsx`:
```typescript
const inter = Inter({ ... });
const bebasNeue = Bebas_Neue({ ... });
```

### Content
Update content in individual section components in `components/sections/`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

## 🔧 Future Enhancements

- [ ] Add contact form
- [ ] Implement membership pricing page
- [ ] Create trainer profiles
- [ ] Add class schedule
- [ ] Integrate booking system
- [ ] Add blog/news section
- [ ] Implement user authentication
- [ ] Add image optimization with Next.js Image component
- [ ] Create reusable button components
- [ ] Add form validation
- [ ] Implement animations with Framer Motion

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own projects!

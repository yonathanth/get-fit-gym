# 🚀 Quick Start Guide

Get your Get Fit Gym website up and running in minutes!

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Installation & Setup

### 1. Navigate to Project Directory
```bash
cd get-fit-gym
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

🎉 **You're all set!** The site should be running locally.

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Check code for issues |

---

## 🎨 Quick Customization

### Change Colors
Edit `app/globals.css`:
```css
--color-primary: #D9972B;        /* Gold accent color */
--color-background: #0A0A0A;     /* Main background */
```

### Update Navigation Links
Edit `components/layout/Navbar.tsx`:
```typescript
const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#memberships", label: "Memberships" },
  // Add more links...
];
```

### Modify Hero Text
Edit `components/sections/HeroSection.tsx`:
```tsx
<span className="text-primary text-6xl md:text-8xl">
  Stronger Life.  {/* Change this text */}
</span>
```

### Replace Images
Update the `src` attributes in section components:
```tsx
<img 
  src="your-image-url-here.jpg"
  alt="Your description"
/>
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page (imports all sections) |
| `app/layout.tsx` | Global layout (Navbar + Footer) |
| `app/globals.css` | Global styles & theme colors |
| `components/sections/*` | Individual page sections |
| `components/layout/*` | Navbar and Footer |

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run build

# Fix linting issues
npm run lint -- --fix
```

### Styles Not Applying
1. Check if `globals.css` is imported in `layout.tsx`
2. Verify Tailwind classes are spelled correctly
3. Clear `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run dev
   ```

---

## 🎯 Next Steps

1. **Customize Content**
   - Update text in section components
   - Replace placeholder images
   - Add your gym's branding

2. **Add New Pages**
   - Create `app/memberships/page.tsx`
   - Create `app/classes/page.tsx`
   - Create `app/contact/page.tsx`

3. **Enhance Functionality**
   - Add contact form
   - Implement booking system
   - Connect to CMS or database

4. **Deploy**
   - Deploy to Vercel (recommended)
   - Deploy to Netlify
   - Deploy to your own hosting

---

## 🚢 Deployment

### Deploy to Vercel (Easiest)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts!

### Build for Production

```bash
npm run build
npm start
```

The production-ready site will be in the `.next` folder.

---

## 📚 Learn More

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **React:** https://react.dev

---

## 💡 Tips

✅ Use TypeScript for better type safety  
✅ Keep components small and reusable  
✅ Follow the existing file structure  
✅ Test on mobile devices regularly  
✅ Optimize images before adding them  
✅ Use semantic HTML for better SEO  

---

## 🤝 Need Help?

- Check the `README.md` for detailed documentation
- Review `STRUCTURE.md` for architecture overview
- Examine existing components for patterns
- Read Next.js documentation for advanced features

**Happy coding! 🎉**

# 🛠️ Command Reference

Quick reference for all commands you'll need while working on the Get Fit Gym project.

---

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Add a New Package
```bash
npm install package-name
```

### Add Dev Dependency
```bash
npm install --save-dev package-name
```

### Remove a Package
```bash
npm uninstall package-name
```

### Update All Packages
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
- Runs on: `http://localhost:3000`
- Hot reload enabled
- Shows errors in browser

### Start on Different Port
```bash
npm run dev -- -p 3001
```

### Open in Browser Automatically
```bash
npm run dev -- -o
```

---

## 🏗️ Building

### Create Production Build
```bash
npm run build
```
- Creates optimized build
- Checks for errors
- Generates static files

### Start Production Server
```bash
npm start
```
- Runs production build
- Must run `npm run build` first

---

## 🧹 Code Quality

### Run ESLint
```bash
npm run lint
```

### Fix ESLint Issues Automatically
```bash
npm run lint -- --fix
```

### Type Check (TypeScript)
```bash
npx tsc --noEmit
```

---

## 🧪 Testing

### Run Tests (if configured)
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

---

## 📁 File Operations

### Create New Component File
```bash
# Windows CMD
type nul > components\ui\Button.tsx

# Windows PowerShell
New-Item -Path components\ui\Button.tsx -ItemType File
```

### Create New Directory
```bash
# Windows CMD
mkdir components\forms

# Windows PowerShell
mkdir components\forms
```

---

## 🔧 Next.js Specific

### Clear Next.js Cache
```bash
# Windows CMD
rmdir /s /q .next

# Windows PowerShell
Remove-Item -Recurse -Force .next

# Then restart dev server
npm run dev
```

### Analyze Bundle Size
```bash
npm run build
```
Look for the size breakdown in the output.

---

## 📦 Git Commands

### Initialize Git (already done)
```bash
git init
```

### Check Status
```bash
git status
```

### Stage All Changes
```bash
git add .
```

### Stage Specific Files
```bash
git add components/ui/Button.tsx
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### View Commit History
```bash
git log --oneline
```

### Create New Branch
```bash
git checkout -b feature/new-feature
```

### Switch Branch
```bash
git checkout main
```

### Push to Remote
```bash
git push origin main
```

---

## 🎨 Tailwind CSS

### View Tailwind Config
The configuration is in `app/globals.css` using the `@theme` directive.

### Purge Unused Styles (automatic in build)
```bash
npm run build
```

---

## 🔍 Debugging

### View All npm Scripts
```bash
npm run
```

### Check Node Version
```bash
node -v
```

### Check npm Version
```bash
npm -v
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall Everything
```bash
# Windows CMD
rmdir /s /q node_modules
del package-lock.json
npm install

# Windows PowerShell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 🌐 Network & Ports

### Kill Process on Port 3000 (Windows)
```bash
# Find process
netstat -ano | findstr :3000

# Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### Check if Port is Available
```bash
netstat -ano | findstr :3000
```

---

## 📊 Project Info

### View Package Info
```bash
npm list
```

### View Specific Package Version
```bash
npm list next
```

### View Project Details
```bash
npm info
```

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm run build
npm start
```

### Deploy to Vercel (recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🔥 Quick Workflows

### Full Clean & Restart
```bash
# Clean everything
rmdir /s /q node_modules .next
del package-lock.json

# Reinstall & start
npm install
npm run dev
```

### Quick Production Test
```bash
npm run build && npm start
```

### Lint & Build
```bash
npm run lint && npm run build
```

---

## 📝 Component Generation

### Create New Page
```bash
# Create directory
mkdir app\memberships

# Create page file
New-Item -Path app\memberships\page.tsx -ItemType File
```

### Create New Component
```bash
New-Item -Path components\ui\Card.tsx -ItemType File
```

### Create New Section
```bash
New-Item -Path components\sections\PricingSection.tsx -ItemType File
```

---

## 🎯 Common Tasks

### Add New Route
1. Create folder in `app/`
2. Add `page.tsx` file
3. Export default component

### Add New Component
1. Create file in `components/`
2. Export component
3. Import where needed

### Update Styling
1. Edit component classes
2. Or update `app/globals.css`
3. Changes auto-reload in dev

---

## 🆘 Troubleshooting Commands

### Reset Everything
```bash
Remove-Item -Recurse -Force node_modules, .next
Remove-Item package-lock.json
npm install
npm run dev
```

### Fix Permission Issues (Windows)
```bash
# Run as Administrator
Set-ExecutionPolicy RemoteSigned
```

### Check for Errors
```bash
npm run build
```
This will show any TypeScript or build errors.

---

## 💡 Pro Tips

### Use npm Shortcuts
- `npm i` = `npm install`
- `npm run dev` = `npm dev` (works for dev, start, build)
- `npm t` = `npm test`

### Chain Commands
```bash
npm run lint && npm run build && npm start
```

### Background Process (Windows)
```bash
start /B npm run dev
```

---

## 📚 Help Commands

### npm Help
```bash
npm help
```

### Command-Specific Help
```bash
npm help install
npm help run
```

### Next.js Help
```bash
npx next -h
```

---

**Quick Reference Card:**

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Production | `npm start` |
| Lint | `npm run lint` |
| Clean | `Remove-Item -Recurse -Force .next` |

---

**Need more help?** Check the official documentation:
- npm: https://docs.npmjs.com
- Next.js: https://nextjs.org/docs
- PowerShell: https://learn.microsoft.com/powershell

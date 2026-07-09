# Component Templates

Use these templates when creating new components for consistency.

---

## Basic Component Template

```tsx
// components/YourComponent.tsx

export default function YourComponent() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

---

## Component with Props

```tsx
// components/YourComponent.tsx

interface YourComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export default function YourComponent({ 
  title, 
  description,
  className = ""
}: YourComponentProps) {
  return (
    <section className={`px-8 py-24 ${className}`}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-impact text-white uppercase">
          {title}
        </h2>
        {description && (
          <p className="text-secondary mt-4">{description}</p>
        )}
      </div>
    </section>
  );
}
```

---

## Client Component (with State)

```tsx
// components/YourComponent.tsx
"use client";

import { useState } from "react";

interface YourComponentProps {
  initialValue?: string;
}

export default function YourComponent({ 
  initialValue = "" 
}: YourComponentProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="p-8">
      {/* Your interactive content here */}
    </div>
  );
}
```

---

## Section Component Template

```tsx
// components/sections/YourSection.tsx

export default function YourSection() {
  return (
    <>
      {/* Section Header */}
      <section className="px-8 pt-32 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <span className="text-xs font-black text-primary tracking-[0.3em] uppercase font-sans">
              Section Label
            </span>
            <h2 className="text-4xl md:text-6xl font-impact text-white mt-6 leading-none tracking-tighter uppercase">
              Your Section Title
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Your content here */}
        </div>
      </section>
    </>
  );
}
```

---

## Card Component Template

```tsx
// components/ui/Card.tsx

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function Card({ 
  title, 
  description, 
  icon,
  className = "" 
}: CardProps) {
  return (
    <div className={`p-6 rounded-lg bg-surface border border-white/5 hover:border-primary transition-colors ${className}`}>
      {icon && (
        <span className="material-symbols-outlined text-primary text-4xl mb-4">
          {icon}
        </span>
      )}
      <h3 className="text-xl font-impact text-white mb-2 uppercase">
        {title}
      </h3>
      <p className="text-sm text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

---

## Button Component Template

```tsx
// components/ui/Button.tsx

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({ 
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-black uppercase tracking-widest rounded-full transition-all";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-white",
    secondary: "bg-secondary text-white hover:bg-white hover:text-black",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-lg px-12 py-5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

## Form Component Template

```tsx
// components/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission
      console.log("Form data:", formData);
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-surface border border-white/10 rounded text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-surface border border-white/10 rounded text-white focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-surface border border-white/10 rounded text-white focus:border-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-on-primary text-sm font-black px-6 py-3 rounded-full hover:bg-white transition-all uppercase tracking-widest disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </button>
    </form>
  );
}
```

---

## Layout Component Template

```tsx
// components/layout/YourLayout.tsx

interface YourLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function YourLayout({ children, className = "" }: YourLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
```

---

## 🎨 Styling Guidelines

### Common Classes to Use

**Containers:**
```tsx
className="max-w-[1200px] mx-auto px-8"
```

**Sections:**
```tsx
className="px-8 py-24"
className="px-8 pt-32 pb-12"
```

**Typography:**
```tsx
// Headings
className="text-4xl md:text-6xl font-impact text-white uppercase"

// Body text
className="text-secondary leading-relaxed font-medium"

// Small labels
className="text-xs font-black text-primary tracking-[0.3em] uppercase"
```

**Buttons:**
```tsx
className="bg-primary text-on-primary px-6 py-2.5 rounded-full hover:bg-white transition-all"
```

**Cards:**
```tsx
className="bg-surface border border-white/5 rounded-[32px] p-8"
```

---

## 📝 Component Checklist

When creating a new component:

- [ ] Use descriptive component name (PascalCase)
- [ ] Add TypeScript interfaces for props
- [ ] Include accessibility attributes (aria-*, alt, etc.)
- [ ] Use semantic HTML elements
- [ ] Follow existing color scheme
- [ ] Make it responsive (mobile-first)
- [ ] Add hover states for interactive elements
- [ ] Export from `components/index.ts` if reusable
- [ ] Test on different screen sizes
- [ ] Add comments for complex logic

---

## 🚀 Quick Tips

1. **Always use `max-w-[1200px] mx-auto`** for content containers
2. **Use `px-8`** for consistent horizontal padding
3. **Use `py-24`** for section vertical spacing
4. **Use `font-impact`** for headlines
5. **Use `text-primary`** for accent colors
6. **Use `uppercase tracking-wider`** for buttons and labels
7. **Always add hover states** to interactive elements
8. **Use `transition-all`** for smooth animations

---

Happy component building! 🎉

// Common Types

export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  active?: boolean;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface FooterLink {
  href: string;
  label: string;
}

// Component Props Types

export interface SectionProps {
  className?: string;
  id?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

// Add more types as needed

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Visit, call or message Get Fit Gym in Addis Ababa. Find our location, opening hours and contact details.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

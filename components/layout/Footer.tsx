import Link from "next/link";
import type { GymSettingsMap } from "@/lib/settings-shared";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer({ settings }: { settings: GymSettingsMap }) {
  return (
    <footer className="relative w-full bg-background pt-14 sm:pt-20 pb-8 sm:pb-10">
      {/* Gold-tinted hairline instead of a flat border */}
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-center md:text-left">
            <img src="/logo.png" alt="Get Fit" width={64} height={64} className="h-14 w-14 sm:h-16 sm:w-16" />
            <h3 className="font-impact uppercase tracking-tight leading-[1.05] text-[clamp(1.9rem,4.5vw,3rem)]">
              <span className="text-fade">Embrace the </span>
              <span className="text-shimmer">strength.</span>
            </h3>
          </div>

            {/* Links and Social */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              {/* Navigation Links */}
              <div className="flex gap-x-5 gap-y-2 sm:gap-x-7 flex-wrap justify-center md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative py-1 text-[13px] sm:text-sm font-inter font-medium text-white/70 tracking-wide hover:text-white transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="flex gap-3 justify-center md:justify-end">
                <a
                  href={settings.tiktok_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[9999px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/75 hover:text-black hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href={settings.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[9999px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/75 hover:text-black hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74V9.92H5.06v8.58h2.8z"/>
                  </svg>
                </a>
                <a
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[9999px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/75 hover:text-black hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={settings.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-[9999px] border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/75 hover:text-black hover:bg-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 font-inter text-xs text-white/35 tracking-wide text-center">
          <span>© {new Date().getFullYear()} {settings.gym_name}. All rights reserved.</span>
          <span>{settings.location_address}</span>
        </div>
      </div>
    </footer>
  );
}

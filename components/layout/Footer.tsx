import Link from "next/link";

const footerLinks = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#contact", label: "Contact" },
  { href: "#about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/5 mt-24 pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-between min-h-[400px]">
          {/* Top Content */}
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-5xl font-impact text-white mb-6 uppercase tracking-wider">
              Embrace the strength.
            </h3>
            <p className="text-secondary text-lg leading-relaxed font-medium">
              Focus on your evolution. Our space strips away the unnecessary,
              allowing you to master your performance in an elite environment.
            </p>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-end w-full gap-12 mt-12">
            {/* Large Brand Mark */}
            <div className="text-7xl md:text-[10rem] font-impact tracking-tighter text-primary/20 leading-none select-none">
              Get Fit Gym
            </div>

            {/* Links and Copyright */}
            <div className="flex flex-col items-end gap-8 mb-4">
              <div className="flex gap-8 flex-wrap justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-bold text-secondary tracking-widest hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="text-xs text-white/30 font-bold tracking-widest text-right">
                © 2024 Get Fit Gym. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

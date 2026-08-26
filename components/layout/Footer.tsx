import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/5 mt-16 sm:mt-24 pt-12 sm:pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col justify-between min-h-[200px] gap-8">
          {/* Top Content */}
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-impact text-white mb-4 sm:mb-8 tracking-tight leading-[1.2] uppercase">
              Embrace the strength.
            </h3>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8 md:gap-12">
            {/* Large Brand Mark */}
            <div className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-impact tracking-tighter text-primary/20 leading-none select-none uppercase text-center md:text-left">
              Get Fit Gym
            </div>

            {/* Links and Social */}
            <div className="flex flex-col items-center md:items-end gap-3 mb-2 w-full md:w-auto">
              {/* Navigation Links */}
              <div className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs sm:text-sm font-inter font-medium text-white tracking-wide hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <a
                  href="https://www.tiktok.com/@getfit.gym?_r=1&_d=emlg250de76mf3&sec_uid=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&share_author_id=7617383060232930322&sharer_language=en&source=h5_m&u_code=f2df05jabaidcj&item_author_type=1&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=862AD9C8-C905-4DF5-AC6A-089F06537298&user_id=7617383060232930322&sec_user_id=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/30 transition-all"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/getfit-gym-6538333b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74V9.92H5.06v8.58h2.8z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/18TRbLvNPQ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/30 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@getfit-gym?si=Y5pWSp_Nz3bveXRo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary/30 transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-xs text-white/30 font-inter font-medium tracking-wide text-center md:text-right mt-2">
                © 2026 Get Fit Gym. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

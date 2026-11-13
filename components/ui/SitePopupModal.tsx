"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";
import { useSettings } from "@/components/SettingsProvider";
import type { PublicPopup } from "@/lib/popup";

const DISMISS_KEY = "getfit_popup_dismissed";

const TYPE_LABEL: Record<PublicPopup["type"], { label: string; icon: string }> = {
  EVENT: { label: "Upcoming event", icon: "event" },
  DISCOUNT: { label: "Special offer", icon: "sell" },
  ANNOUNCEMENT: { label: "Announcement", icon: "campaign" },
};

const primaryBtn =
  "group flex-1 inline-flex items-center justify-center gap-2 rounded-[9999px] bg-primary px-5 py-3 font-inter text-[13px] font-semibold text-black shadow-[0_8px_24px_-8px_rgba(217,151,43,0.6)] transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_10px_30px_-8px_rgba(217,151,43,0.8)] active:scale-[0.98] cursor-pointer";
const secondaryBtn =
  "rounded-[9999px] border border-white/15 px-5 py-3 font-inter text-[13px] font-medium text-white/80 transition-colors duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white";

/**
 * Site-wide popup managed in admin → Website Popups: an event promo, a discount
 * or an announcement. Each popup is shown once per browser session; editing it
 * in the admin gives it a new key, so visitors see the updated version.
 */
export default function SitePopupModal() {
  const [popup, setPopup] = useState<PublicPopup | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // Delay is set in the admin (Settings → popup delay); falls back to 10s
  const delaySeconds = Math.max(0, Number(useSettings().popup_delay_seconds) || 10);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("/api/popup");
        if (!res.ok) return;
        const data: { popup: PublicPopup | null } = await res.json();
        if (!data.popup) return;
        let dismissed: string | null = null;
        try {
          dismissed = sessionStorage.getItem(DISMISS_KEY);
        } catch {}
        if (dismissed === data.popup.key) return;
        setPopup(data.popup);
        setIsOpen(true);
      } catch (err) {
        console.error("Failed to load site popup:", err);
      }
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      if (popup) sessionStorage.setItem(DISMISS_KEY, popup.key);
    } catch {}
  };

  const copyCode = async () => {
    if (!popup?.promoCode) return;
    try {
      await navigator.clipboard.writeText(popup.promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  if (!popup) return null;

  const { type, event } = popup;
  const meta = TYPE_LABEL[type];
  const endsText = popup.endsAt
    ? new Date(popup.endsAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })
    : null;
  const ctaHref = popup.ctaUrl || (type === "DISCOUNT" ? "/register" : null);
  const ctaLabel = popup.ctaLabel || (type === "DISCOUNT" ? "Claim offer" : "Learn more");
  const isExternal = !!ctaHref && /^https?:\/\//.test(ctaHref);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} maxWidth="max-w-[440px]" ariaLabel={popup.title}>
        {/* Banner: image if there is one, otherwise a gold-on-black brand header */}
        <div className="relative h-[180px] sm:h-[210px] w-full overflow-hidden">
          {popup.imageUrl ? (
            <img
              src={popup.imageUrl}
              alt={popup.title}
              className="h-full w-full object-cover animate-[popupZoom_8s_ease-out_forwards]"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,151,43,0.45),transparent_60%),linear-gradient(135deg,#1a1408,#0b0b0b)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/20 to-black/30" />

          <img
            src="/logo.png"
            alt="Get Fit"
            className="absolute top-3.5 left-4 h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          />

          {popup.badge && (
            <span className="absolute top-4 right-14 rotate-[-4deg] rounded-lg bg-primary px-3 py-1.5 font-impact text-xl sm:text-2xl uppercase leading-none tracking-tight text-black shadow-[0_8px_24px_-6px_rgba(217,151,43,0.8)]">
              {popup.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 sm:px-7 sm:pb-7 -mt-6 relative">
          <span className="inline-flex items-center gap-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="material-symbols-outlined text-[15px]">{meta.icon}</span>
            {meta.label}
          </span>

          <h3 className="mt-1.5 font-impact text-[28px] sm:text-[32px] uppercase leading-[1.02] tracking-tight text-white text-balance">
            {popup.title}
          </h3>

          {event && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-inter text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
                {event.dateString || "Upcoming"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                {event.timeString}
              </span>
              {event.location && (
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  {event.location}
                </span>
              )}
            </div>
          )}

          <p className="mt-4 font-inter text-sm leading-relaxed text-white/65 line-clamp-4 whitespace-pre-line">
            {popup.message}
          </p>

          {popup.promoCode && (
            <button
              type="button"
              onClick={copyCode}
              className="mt-5 flex w-full items-center justify-between gap-3 rounded-2xl border border-dashed border-primary/60 bg-primary/[0.07] px-4 py-3 text-left transition-colors hover:bg-primary/[0.12] cursor-pointer"
              aria-label={`Copy promo code ${popup.promoCode}`}
            >
              <span>
                <span className="block font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  Promo code
                </span>
                <span className="block font-mono text-lg font-bold tracking-[0.18em] text-primary">{popup.promoCode}</span>
              </span>
              <span className="inline-flex items-center gap-1 font-inter text-xs font-semibold text-white/70">
                <span className="material-symbols-outlined text-[18px]">{copied ? "check" : "content_copy"}</span>
                {copied ? "Copied" : "Copy"}
              </span>
            </button>
          )}

          {/* Actions */}
          {event ? (
            <>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => {
                    handleClose();
                    setIsRegisterModalOpen(true);
                  }}
                  className={primaryBtn}
                >
                  Reserve my spot
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                    arrow_forward
                  </span>
                </button>
                <Link href={`/events/${event.slug}`} onClick={handleClose} className={secondaryBtn}>
                  Details
                </Link>
              </div>
              <p className="mt-3 text-center font-inter text-[11px] text-white/45">
                <span className="text-primary font-semibold">{event.remainingSpots}</span> spots remaining
              </p>
            </>
          ) : (
            <>
              <div className="mt-6 flex items-center gap-3">
                {ctaHref ? (
                  isExternal ? (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer" onClick={handleClose} className={primaryBtn}>
                      {ctaLabel}
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                        arrow_forward
                      </span>
                    </a>
                  ) : (
                    <Link href={ctaHref} onClick={handleClose} className={primaryBtn}>
                      {ctaLabel}
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                        arrow_forward
                      </span>
                    </Link>
                  )
                ) : null}
                <button type="button" onClick={handleClose} className={ctaHref ? secondaryBtn : `${primaryBtn}`}>
                  {ctaHref ? "Later" : "Got it"}
                </button>
              </div>
              {endsText && (
                <p className="mt-3 text-center font-inter text-[11px] text-white/45">
                  {type === "DISCOUNT" ? "Offer ends" : "Until"} <span className="text-primary font-semibold">{endsText}</span>
                </p>
              )}
            </>
          )}
        </div>
      </Modal>

      {event && (
        <EventRegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          eventTitle={event.title}
          eventDate={`${event.dateString || ""} • ${event.timeString}`}
        />
      )}
    </>
  );
}

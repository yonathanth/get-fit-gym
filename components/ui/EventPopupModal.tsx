"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";
import { useSettings } from "@/components/SettingsProvider";

interface PopupEventData {
  id: string;
  title: string;
  slug: string;
  dateString?: string;
  timeString: string;
  location: string;
  description: string;
  imageUrl: string;
  remainingSpots: number;
}

export default function EventPopupModal() {
  const [event, setEvent] = useState<PopupEventData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  // Delay is set in the admin (Settings → popup delay); falls back to 10s
  const delaySeconds = Math.max(0, Number(useSettings().popup_delay_seconds) || 10);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem("getfit_event_popup_dismissed");
    if (isDismissed) return;

    // Fetch featured event from database API
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("/api/popup-event");
        if (res.ok) {
          const data = await res.json();
          if (data.event) {
            setEvent(data.event);
            setIsOpen(true);
          }
        }
      } catch (err) {
        console.error("Failed to load featured event popup:", err);
      }
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("getfit_event_popup_dismissed", "true");
  };

  if (!event) return null;

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} maxWidth="max-w-[440px]" ariaLabel={event.title}>
        {/* Image banner */}
        <div className="relative h-[180px] sm:h-[210px] w-full overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="h-full w-full object-cover animate-[popupZoom_8s_ease-out_forwards]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/20 to-black/30" />

          <img
            src="/logo.png"
            alt="Get Fit"
            className="absolute top-3.5 left-4 h-10 w-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 sm:px-7 sm:pb-7 -mt-6 relative">
          <h3 className="font-impact text-[28px] sm:text-[32px] uppercase leading-[1.02] tracking-tight text-white text-balance">
            {event.title}
          </h3>

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

          <p className="mt-4 font-inter text-sm leading-relaxed text-white/65 line-clamp-3">
            {event.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsRegisterModalOpen(true);
              }}
              className="group flex-1 inline-flex items-center justify-center gap-2 rounded-[9999px] bg-primary px-5 py-3 font-inter text-[13px] font-semibold text-black shadow-[0_8px_24px_-8px_rgba(217,151,43,0.6)] transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_10px_30px_-8px_rgba(217,151,43,0.8)] active:scale-[0.98] cursor-pointer"
            >
              Reserve my spot
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </button>

            <Link
              href={`/events/${event.slug}`}
              onClick={handleClose}
              className="rounded-[9999px] border border-white/15 px-5 py-3 font-inter text-[13px] font-medium text-white/80 transition-colors duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Details
            </Link>
          </div>

          <p className="mt-3 text-center font-inter text-[11px] text-white/45">
            <span className="text-primary font-semibold">{event.remainingSpots}</span> spots remaining
          </p>
        </div>
      </Modal>

      <EventRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        eventTitle={event.title}
        eventDate={`${event.dateString || ""} • ${event.timeString}`}
      />
    </>
  );
}

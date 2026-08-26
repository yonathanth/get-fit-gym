"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import EventRegistrationModal from "@/components/ui/EventRegistrationModal";

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
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("getfit_event_popup_dismissed", "true");
  };

  if (!isOpen || !event) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
        <div className="relative w-full max-w-lg bg-[#121212] border border-primary/40 rounded-[28px] overflow-hidden shadow-[0_0_50px_rgba(217,151,43,0.25)]">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white/80 hover:text-white flex items-center justify-center border border-white/10 transition-all cursor-pointer"
            aria-label="Close Popup"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {/* Top Image Banner */}
          <div className="relative h-[200px] w-full overflow-hidden bg-black">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40" />

            <div className="absolute top-4 left-4">
              <span className="bg-primary text-black font-impact text-xs uppercase tracking-wider px-3.5 py-1 rounded-full font-bold shadow-md">
                Featured Event
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7 space-y-4">
            <div>
              <div className="flex items-center gap-3 text-xs text-primary font-inter font-medium mb-1.5">
                <span>{event.dateString || "Upcoming Event"}</span>
                <span>•</span>
                <span>{event.timeString}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-impact text-white uppercase tracking-tight leading-tight">
                {event.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/70 font-inter mt-2 line-clamp-3 leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsRegisterModalOpen(true);
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-black font-inter font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                Register Now ({event.remainingSpots} spots)
              </button>

              <Link
                href={`/events/${event.slug}`}
                onClick={handleClose}
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-inter font-semibold text-xs uppercase tracking-wider transition-all border border-white/10"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isRegisterModalOpen && (
        <EventRegistrationModal
          isOpen={true}
          onClose={() => setIsRegisterModalOpen(false)}
          eventTitle={event.title}
          eventDate={`${event.dateString || ""} • ${event.timeString}`}
        />
      )}
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useSettings } from "@/components/SettingsProvider";
import { muxPlaybackId } from "@/lib/settings-shared";

/** Mux playback ID for the tour video, from the admin "Video tour" setting. */
export function useTourPlaybackId(): string {
  return muxPlaybackId(useSettings().video_tour_url);
}

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full-screen video tour. Opens in browser full screen where supported (the
 * fixed overlay covers the viewport everywhere else, e.g. iPhone Safari).
 * Exiting full screen, closing or pressing Esc unmounts the player, which
 * stops it and rewinds to the start for next time.
 */
export default function VideoTourModal({ isOpen, onClose }: VideoTourModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const MUX_PLAYBACK_ID = useTourPlaybackId();
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    let wasFullscreen = false;

    const onFsChange = () => {
      if (document.fullscreenElement) wasFullscreen = true;
      else if (wasFullscreen) onCloseRef.current(); // user left full screen
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("fullscreenchange", onFsChange);
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Runs right after the opening click, so the browser allows full screen.
    overlayRef.current?.requestFullscreen?.().catch(() => {});

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Get Fit video tour"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black"
    >
      {/* Vertical video: centred over a blurred, darkened frame of itself */}
      <img
        aria-hidden
        alt=""
        src={`https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?width=640&time=3`}
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl brightness-[0.3]"
      />
      <iframe
        src={`https://player.mux.com/${MUX_PLAYBACK_ID}?autoplay=true`}
        title="Get Fit video tour"
        className="relative h-full max-h-[100svh] max-w-full aspect-[9/16] border-0"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-[9999px] border border-white/20 bg-black/55 text-white/85 backdrop-blur-md transition-all duration-300 hover:bg-black/80 hover:text-white cursor-pointer"
      >
        <span className="material-symbols-outlined text-[22px]">close</span>
      </button>
    </div>
  );
}

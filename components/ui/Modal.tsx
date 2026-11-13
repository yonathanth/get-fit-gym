"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Tailwind max-width class for the panel, e.g. "max-w-lg". */
  maxWidth?: string;
  /** Accessible label when the content has no visible heading. */
  ariaLabel?: string;
  /** Extra classes for the panel surface (padding, overflow, etc.). */
  panelClassName?: string;
  /** Hide the built-in floating close button (when content draws its own). */
  hideCloseButton?: boolean;
  /** Close when the backdrop is clicked. */
  closeOnBackdrop?: boolean;
}

/**
 * Shared popup shell: blurred backdrop, spring-in panel with a gold hairline
 * border, Escape to close, body scroll lock, and a round floating close button.
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "max-w-lg",
  ariaLabel,
  panelClassName = "",
  hideCloseButton = false,
  closeOnBackdrop = true,
}: ModalProps) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={closeOnBackdrop ? onClose : undefined}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 320, damping: 30 } }}
            exit={{ opacity: 0, y: 12, scale: 0.97, transition: { duration: 0.2, ease: EASE } }}
            className={`relative w-full ${maxWidth}`}
          >
            <div className="gradient-border rounded-[28px] p-px shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_60px_-25px_rgba(217,151,43,0.35)]">
              <div
                className={`relative rounded-[27px] bg-[#101010] max-h-[calc(100svh-2rem)] sm:max-h-[calc(100svh-3rem)] overflow-y-auto overscroll-contain ${panelClassName}`}
              >
                {children}
              </div>
            </div>

            {!hideCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="group absolute top-3.5 right-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-[9999px] border border-white/15 bg-black/50 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-black/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-90">
                  close
                </span>
              </button>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/ui/Modal";

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm text-white placeholder:text-white/30 transition-all duration-200 hover:border-white/20 focus:outline-none focus:border-primary/70 focus:bg-white/[0.05] focus:ring-4 focus:ring-primary/10";

const labelClass = "mb-1.5 block font-inter text-xs font-medium text-white/70";

export default function EventRegistrationModal({
  isOpen,
  onClose,
  eventTitle,
  eventDate,
}: EventRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventTitle: `${eventTitle} (${formData.participants} attendees)`,
          membershipType: "Event Registration",
        }),
      });

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      setErrorMessage(err instanceof Error && err.message ? err.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md" ariaLabel="Event registration" panelClassName="p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[9999px] border border-primary/40 bg-primary/15 text-primary shadow-[0_0_40px_rgba(217,151,43,0.35)]"
            >
              <span className="material-symbols-outlined text-3xl">check</span>
            </motion.div>
            <h3 className="font-impact text-3xl uppercase text-white">You&apos;re in!</h3>
            <p className="mx-auto mt-2 max-w-xs font-inter text-sm text-white/65">
              Your spot for <span className="text-white">{eventTitle}</span> is reserved. See you there.
            </p>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.2 }}>
            {/* Header */}
            <div className="mb-6 pr-10">
              <img src="/logo.png" alt="Get Fit" className="mb-4 h-11 w-11" />
              <h3 className="font-impact text-3xl sm:text-[34px] uppercase leading-none text-white">
                Reserve your spot
              </h3>
              <p className="mt-2 font-inter text-xs leading-relaxed text-white/55">
                <span className="text-white/80">{eventTitle}</span>
                <span className="mx-1.5 text-white/25">|</span>
                <span className="text-primary">{eventDate}</span>
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 font-inter text-xs text-red-400">
                <span className="material-symbols-outlined text-[16px]">error</span>
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="er-name" className={labelClass}>Full name</label>
                <input
                  id="er-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="er-email" className={labelClass}>Email</label>
                  <input
                    id="er-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="er-phone" className={labelClass}>Phone</label>
                  <input
                    id="er-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+251 900 000 000"
                  />
                </div>
              </div>

              <div>
                <span className={labelClass}>Attendees</span>
                <div className="grid grid-cols-5 gap-2" role="radiogroup" aria-label="Number of attendees">
                  {["1", "2", "3", "4", "5"].map((n) => {
                    const selected = formData.participants === n;
                    return (
                      <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => setFormData({ ...formData, participants: n })}
                        className={`rounded-xl border py-2.5 font-inter text-sm font-medium transition-all duration-200 cursor-pointer ${
                          selected
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white"
                        }`}
                      >
                        {n === "5" ? "5+" : n}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-[9999px] bg-primary py-3.5 font-inter text-sm font-semibold text-black shadow-[0_8px_24px_-8px_rgba(217,151,43,0.6)] transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_10px_30px_-8px_rgba(217,151,43,0.8)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-[9999px] border-2 border-black/30 border-t-black" />
                    Reserving…
                  </>
                ) : (
                  <>
                    Confirm reservation
                    <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

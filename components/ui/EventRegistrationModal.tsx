"use client";

import { useState } from "react";

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
}

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

  if (!isOpen) return null;

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
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-[28px] p-7 sm:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
              <span className="material-symbols-outlined text-2xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-impact text-white uppercase italic">Registration Confirmed!</h3>
            <p className="text-xs sm:text-sm text-white/70 font-inter">
              You are reserved for <strong>{eventTitle}</strong>. We look forward to seeing you there!
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <span className="bg-primary/20 text-primary font-inter text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                Event Pass
              </span>
              <h3 className="text-2xl sm:text-3xl font-impact text-white leading-tight uppercase">
                Register Now
              </h3>
              <p className="text-xs text-white/70 font-inter mt-1">
                {eventTitle} • <span className="text-primary">{eventDate}</span>
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-inter">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-inter font-semibold text-white/80 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-xs font-inter font-semibold text-white/80 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-inter font-semibold text-white/80 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+251 900 000 000"
                />
              </div>

              <div>
                <label className="block text-xs font-inter font-semibold text-white/80 mb-1.5">
                  Number of Attendees *
                </label>
                <select
                  required
                  value={formData.participants}
                  onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-2.5 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black text-xs font-inter font-bold py-3.5 rounded-xl hover:bg-primary-hover transition-all tracking-wider uppercase mt-4 cursor-pointer disabled:opacity-50 shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Confirm Reservation"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

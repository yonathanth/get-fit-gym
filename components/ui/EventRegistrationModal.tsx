"use client";

import { useState } from "react";

interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
}

export default function EventRegistrationModal({ isOpen, onClose, eventTitle, eventDate }: EventRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "1"
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Registration submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-md bg-surface border border-white/10 rounded-[24px] md:rounded-[32px] p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-white/50 hover:text-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-2">
            Register Now
          </h3>
          <p className="text-sm text-white/70 font-inter">
            {eventTitle}<br />
            <span className="text-primary">{eventDate}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-inter font-semibold text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-semibold text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-semibold text-white mb-2">
              Phone *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="+251 900 000 000"
            />
          </div>

          <div>
            <label className="block text-sm font-inter font-semibold text-white mb-2">
              Number of Participants *
            </label>
            <select
              required
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
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
            className="w-full bg-primary text-on-primary text-sm font-inter font-bold px-6 py-4 rounded-full hover:bg-white transition-all tracking-widest mt-6"
          >
            CONFIRM REGISTRATION
          </button>
        </form>
      </div>
    </div>
  );
}

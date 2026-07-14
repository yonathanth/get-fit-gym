"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface EventPopupModalProps {
  onClose: () => void;
}

export default function EventPopupModal({ onClose }: EventPopupModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Featured event to display
  const featuredEvent = {
    id: "health-fitness-nutrition-seminar",
    title: "Health, Fitness & Nutrition Seminar",
    date: "March 15, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Main Studio",
    description: "Join us for an in-depth seminar covering the essential pillars of health, fitness, and nutrition. Learn from certified experts about creating sustainable healthy habits, understanding nutrition fundamentals, and optimizing your workout routine for maximum results.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80",
    spots: 45
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Fade in animation
    setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); // Wait for fade out animation
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div 
        className={`relative bg-surface border border-white/10 rounded-[32px] max-w-2xl w-full overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-primary border border-white/20 hover:border-primary flex items-center justify-center transition-all group"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-white group-hover:text-on-primary transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={featuredEvent.image}
            alt={featuredEvent.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-full">
            <p className="text-xs font-inter font-bold uppercase tracking-wider">
              Featured Event
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-3">
            {featuredEvent.title}
          </h2>

          {/* Description */}
          <p className="text-base text-white/80 font-inter leading-relaxed mb-6">
            {featuredEvent.description}
          </p>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Date */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 font-inter uppercase tracking-wider mb-1">Date</p>
                <p className="text-sm text-white font-inter font-semibold">{featuredEvent.date}</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 font-inter uppercase tracking-wider mb-1">Time</p>
                <p className="text-sm text-white font-inter font-semibold">{featuredEvent.time}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 font-inter uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm text-white font-inter font-semibold">{featuredEvent.location}</p>
              </div>
            </div>

            {/* Spots */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-black/20">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/50 font-inter uppercase tracking-wider mb-1">Availability</p>
                <p className="text-sm text-primary font-inter font-bold">{featuredEvent.spots} spots left</p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <Link
            href={`/events/${featuredEvent.id}`}
            onClick={handleClose}
            className="block w-full bg-primary hover:bg-white text-on-primary text-sm font-inter font-bold px-8 py-4 rounded-full transition-all text-center tracking-widest"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

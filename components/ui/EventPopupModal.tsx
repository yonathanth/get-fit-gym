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
    description: "Join us for an in-depth seminar covering health, fitness, and nutrition. Learn from certified experts!",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&q=80"
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
    setTimeout(() => onClose(), 300);
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

      {/* Modal - Card Style with Image */}
      <div 
        className={`relative max-w-lg w-full transform transition-all duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 flex items-center justify-center transition-all"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-white"
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

        {/* Card */}
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-surface h-[500px] shadow-2xl">
          {/* Image Background */}
          <div className="absolute inset-0">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col justify-end">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-impact text-primary leading-tight tracking-tight uppercase mb-2">
              {featuredEvent.title}
            </h2>

            {/* Date */}
            <p className="text-sm text-white font-inter font-semibold mb-4">
              {featuredEvent.date}
            </p>

            {/* Description */}
            <p className="text-base text-white/90 font-inter leading-relaxed mb-6">
              {featuredEvent.description}
            </p>

            {/* Learn More Button */}
            <Link
              href={`/events/${featuredEvent.id}`}
              onClick={handleClose}
              className="inline-block bg-primary hover:bg-white text-on-primary text-sm font-inter font-bold px-8 py-3 rounded-full transition-all text-center tracking-widest self-start"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

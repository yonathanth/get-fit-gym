"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface TrainerOption {
  id: string;
  slug: string;
  name: string;
  role: string;
  image: string;
  imageUrl?: string;
  specialty?: string;
  bio?: string;
  fullBio?: string | null;
  experience?: string;
  experienceText?: string | null;
  certifications?: string[];
  specializations?: string[];
}

interface RegisterFormClientProps {
  trainers: TrainerOption[];
}

export default function RegisterFormClient({ trainers }: RegisterFormClientProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    
    // Membership
    membershipType: "gym-spa-regular",
    
    // Trainer (optional)
    selectedTrainer: "",
    
    // Classes (optional)
    selectedClasses: [] as string[],
    
    // Health Information
    medicalConditions: ""
  });

  const [activeTrainerModal, setActiveTrainerModal] = useState<TrainerOption | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClassToggle = (className: string) => {
    setFormData(prev => ({
      ...prev,
      selectedClasses: prev.selectedClasses.includes(className)
        ? prev.selectedClasses.filter(id => id !== className)
        : [...prev.selectedClasses, className]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit registration");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="max-w-[650px] mx-auto px-4 sm:px-6 my-12">
        <div className="rounded-[28px] border border-primary/40 bg-surface/90 p-8 sm:p-12 text-center shadow-2xl space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-impact text-white uppercase italic">
            Registration Received!
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-inter leading-relaxed">
            Thank you, <strong className="text-primary">{formData.firstName}</strong>. Your registration is saved in our system. Our onboarding team will contact you at <strong className="text-white">{formData.phone}</strong> within 24 hours to finalize your welcome pass.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-8 py-3 rounded-full bg-primary text-black font-impact text-base tracking-wider uppercase hover:bg-primary-hover transition-all cursor-pointer"
          >
            Submit Another Registration
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="max-w-[900px] mx-auto px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-14">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-inter">
              {errorMessage}
            </div>
          )}

          {/* 1. Personal Information */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
              <div className="text-center sm:text-left border-b border-white/5 pb-4">
                <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                  Personal <span className="text-primary">Information</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
                  Your primary membership contact details
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="e.g. Abebe"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="e.g. Bikila"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="+251 900 000 000"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left [&::-webkit-datetime-edit]:justify-center sm:[&::-webkit-datetime-edit]:justify-start [&::-webkit-datetime-edit]:flex sm:[&::-webkit-datetime-edit]:inline-flex"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Gender *
                  </label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer text-center sm:text-left"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Emergency Contact */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
              <div className="text-center sm:text-left border-b border-white/5 pb-4">
                <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                  Emergency <span className="text-primary">Contact</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
                  Contact person in case of medical emergency
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.emergencyName}
                    onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="Emergency contact full name"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-inter font-semibold text-white/90 mb-2 text-center sm:text-left">
                    Emergency Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
                    placeholder="+251 900 000 000"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Membership Tier Selection */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
              <div className="text-center sm:text-left border-b border-white/5 pb-4">
                <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                  Select <span className="text-primary">Membership Tier</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
                  Choose the plan that fits your lifestyle
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { id: "gym-spa-regular", name: "Gym With Spa (Any Time)", price: "27,495 ETB / Mo", desc: "All-inclusive gym, 750 m² spa, Moroccan bath & classes" },
                  { id: "gym-only-regular", name: "Gym Only (Any Time)", price: "19,500 ETB / Mo", desc: "Full 1,050 m² Life Fitness floor & 14 group classes" },
                  { id: "happy-hour-pass", name: "Happy Hour Pass (20% Off)", price: "22,000 ETB / Mo", desc: "Off-peak access with full spa & class benefits" },
                  { id: "couple-package", name: "Couple Package (10% Off)", price: "49,530 ETB / Mo", desc: "2-person all-inclusive Gym & Spa membership" }
                ].map((membership) => {
                  const isSelected = formData.membershipType === membership.id;
                  return (
                    <label
                      key={membership.id}
                      className={`block relative overflow-hidden rounded-[20px] border p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-lg"
                          : "border-white/10 bg-[#0A0A0A] hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="membership"
                          value={membership.id}
                          checked={isSelected}
                          onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                          className="mt-1 w-4 h-4 accent-primary cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-base sm:text-lg font-impact text-white uppercase tracking-tight">
                              {membership.name}
                            </h3>
                            <span className="text-xs font-bold text-primary whitespace-nowrap">
                              {membership.price}
                            </span>
                          </div>
                          <p className="text-xs text-white/60 font-inter mt-1">
                            {membership.desc}
                          </p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 4. Compact Trainer Selection from DB */}
          {trainers && trainers.length > 0 && (
            <ScrollReveal direction="up" delay={0.25}>
              <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/5 pb-4 text-center sm:text-left">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                      Dedicated <span className="text-primary">Trainer</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-white/60 font-inter mt-0.5">
                      Optional: Select your coach or click info for credentials
                    </p>
                  </div>

                  {formData.selectedTrainer && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedTrainer: "" })}
                      className="text-xs text-primary hover:underline font-inter font-semibold cursor-pointer"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {trainers.map((trainer) => {
                    const isSelected = formData.selectedTrainer === trainer.name;
                    return (
                      <div
                        key={trainer.id}
                        onClick={() => setFormData({ ...formData, selectedTrainer: isSelected ? "" : trainer.name })}
                        className={`relative rounded-[20px] border p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-lg"
                            : "border-white/10 bg-[#0A0A0A] hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={trainer.imageUrl || trainer.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80"}
                            alt={trainer.name}
                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 flex-shrink-0 ${
                              isSelected ? "border-primary" : "border-white/20"
                            }`}
                          />
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-impact text-white uppercase tracking-tight truncate leading-tight">
                              {trainer.name}
                            </h3>
                            <p className="text-xs text-primary font-inter font-semibold truncate">
                              {trainer.role}
                            </p>
                            <p className="text-[11px] text-white/50 font-inter truncate hidden xs:block">
                              {trainer.experienceText || `${trainer.experience || "5+ Years"}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => setActiveTrainerModal(trainer)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-primary/20 text-white/70 hover:text-primary transition-colors cursor-pointer"
                            title="View Trainer Bio & Credentials"
                          >
                            <span className="material-symbols-outlined text-lg">info</span>
                          </button>

                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                            isSelected ? "bg-primary border-primary text-black font-bold" : "border-white/20 bg-black/40 text-transparent"
                          }`}>
                            <span className="material-symbols-outlined text-sm">check</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* 5. Classes Selection */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
              <div className="text-center sm:text-left border-b border-white/5 pb-4">
                <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                  Interested <span className="text-primary">Classes</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
                  Optional: Select group routines you want included
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 font-inter">
                {[
                  "HIIT & Metabolic Training",
                  "Zumba Kick Boxing",
                  "Aerobics & Body Toning",
                  "Circuit & Sweat Cardio",
                  "Tae Bo Combat",
                  "World of Dance Fitness",
                  "Senior Circuit & Toning",
                  "Get Fit Combo"
                ].map((className) => {
                  const isChecked = formData.selectedClasses.includes(className);
                  return (
                    <label
                      key={className}
                      className={`block rounded-xl border p-3 cursor-pointer transition-all duration-200 text-center ${
                        isChecked
                          ? "border-primary bg-primary/10 text-white font-semibold shadow-md"
                          : "border-white/10 bg-[#0A0A0A] text-white/70 hover:border-white/20"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleClassToggle(className)}
                        className="sr-only"
                      />
                      <span className="text-xs font-inter block truncate">
                        {className}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 6. Health & Medical Notes */}
          <ScrollReveal direction="up" delay={0.35}>
            <div className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm space-y-6">
              <div className="text-center sm:text-left border-b border-white/5 pb-4">
                <h2 className="text-2xl sm:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase">
                  Health & <span className="text-primary">Safety Notes</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/60 font-inter mt-1">
                  Optional: Any prior injuries or wellness objectives we should account for
                </p>
              </div>
              
              <div>
                <textarea
                  value={formData.medicalConditions}
                  onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
                  rows={3}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl p-4 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors resize-none text-center sm:text-left"
                  placeholder="List any medical history, previous injuries, or specific coaching preferences..."
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Submit Button */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-col items-center justify-center pt-4 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-4 rounded-full bg-primary hover:bg-primary-hover text-black font-impact text-lg tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Complete Registration"}
              </button>
              <p className="text-xs text-white/50 font-inter mt-3">
                No payment required today. Our team will verify your membership upon arrival.
              </p>
            </div>
          </ScrollReveal>
        </form>
      </section>

      {/* Trainer Profile Details Pop-up Modal */}
      {activeTrainerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-surface border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <img
                  src={activeTrainerModal.imageUrl || activeTrainerModal.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&q=80"}
                  alt={activeTrainerModal.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h3 className="text-2xl font-impact text-white uppercase italic">{activeTrainerModal.name}</h3>
                  <p className="text-xs text-primary font-inter font-semibold">{activeTrainerModal.role}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTrainerModal(null)}
                className="p-1 rounded-lg text-white/60 hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="space-y-5 text-xs font-inter">
              <div>
                <span className="text-white/50 uppercase tracking-wider block font-semibold mb-1">About Coach</span>
                <p className="text-sm text-white/80 leading-relaxed">{activeTrainerModal.fullBio || activeTrainerModal.bio}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#0A0A0A] border border-white/5">
                <div>
                  <span className="text-white/50 block mb-1">Experience</span>
                  <span className="text-primary font-impact text-lg">{activeTrainerModal.experienceText || `${activeTrainerModal.experience || "5+ Years"}`}</span>
                </div>
                <div>
                  <span className="text-white/50 block mb-1">Role</span>
                  <span className="text-white font-medium text-xs">{activeTrainerModal.role}</span>
                </div>
              </div>

              {activeTrainerModal.certifications && activeTrainerModal.certifications.length > 0 && (
                <div>
                  <span className="text-white/50 uppercase tracking-wider block font-semibold mb-2">Certifications & Credentials</span>
                  <ul className="space-y-1.5">
                    {activeTrainerModal.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <span className="material-symbols-outlined text-primary text-sm">verified</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveTrainerModal(null)}
                  className="px-4 py-2 rounded-xl text-white/60 hover:text-white cursor-pointer"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, selectedTrainer: activeTrainerModal.name });
                    setActiveTrainerModal(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-black font-impact text-base uppercase tracking-wider cursor-pointer"
                >
                  Select This Coach
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";

export default function RegisterPage() {
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
    membershipType: "",
    
    // Trainer (optional)
    selectedTrainer: "",
    
    // Classes (optional)
    selectedClasses: [] as string[],
    
    // Health Information
    medicalConditions: ""
  });

  const trainers = [
    {
      id: "teshome-bekele",
      name: "Teshome",
      role: "Head Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
      specialty: "Elite Training & Performance"
    },
    {
      id: "gabriel-haile",
      name: "Gabriel",
      role: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
      specialty: "Athletic Performance"
    },
    {
      id: "sara-bekele",
      name: "Sara",
      role: "Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
      specialty: "Nutrition & Wellness"
    }
  ];

  const handleClassToggle = (classId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedClasses: prev.selectedClasses.includes(classId)
        ? prev.selectedClasses.filter(id => id !== classId)
        : [...prev.selectedClasses, classId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    // Handle form submission
  };

  return (
    <main className="w-full min-h-screen bg-background py-20">
      {/* Simple Header */}
      <div className="max-w-[900px] mx-auto px-4 md:px-6 mb-12">
        <h1 className="text-5xl md:text-7xl font-impact text-primary leading-[1.1] tracking-tight uppercase mb-4 italic text-center">
          Register Now
        </h1>
        <p className="text-lg text-white/70 font-inter text-center max-w-2xl mx-auto">
          Start your fitness journey today. Complete the form below to become a member of the Get Fit community.
        </p>
      </div>

      {/* Registration Form */}
      <section className="max-w-[900px] mx-auto px-4 md:px-6">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Personal Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              Personal <span className="text-primary">Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter last name"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+251 900 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Gender *
                </label>
                <select
                  required
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              Emergency <span className="text-primary">Contact</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.emergencyName}
                  onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter emergency contact name"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-semibold text-white mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.emergencyPhone}
                  onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                  className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="+251 900 000 000"
                />
              </div>
            </div>
          </div>

          {/* Membership Selection */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              Select <span className="text-primary">Membership</span>
            </h2>
            
            <div className="space-y-4">
              {[
                { id: "kids-teens", name: "Kids & Teens Programs", price: "Starting at 1,500 ETB/month" },
                { id: "adult-basic", name: "Adult Basic", price: "1,800 ETB/month" },
                { id: "adult-premium", name: "Adult Premium", price: "2,500 ETB/month" },
                { id: "adult-elite", name: "Adult Elite (Unlimited)", price: "3,500 ETB/month" }
              ].map((membership) => (
                <label
                  key={membership.id}
                  className={`block relative overflow-hidden rounded-[24px] border cursor-pointer transition-all ${
                    formData.membershipType === membership.id
                      ? "border-primary bg-primary/5"
                      : "border-white/10 bg-surface hover:border-primary/30"
                  }`}
                >
                  <div className="p-6 flex items-center gap-4">
                    <input
                      type="radio"
                      name="membership"
                      value={membership.id}
                      checked={formData.membershipType === membership.id}
                      onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                      className="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-impact text-white uppercase tracking-tight">
                        {membership.name}
                      </h3>
                      <p className="text-sm text-white/70 font-inter mt-1">
                        {membership.price}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Trainer Selection */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
              Choose Your <span className="text-primary">Trainer</span>
            </h2>
            <p className="text-sm text-white/70 font-inter mb-6">
              Optional: Select a preferred trainer for personalized coaching
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainers.map((trainer) => (
                <label
                  key={trainer.id}
                  className={`block relative overflow-hidden rounded-[24px] border cursor-pointer transition-all ${
                    formData.selectedTrainer === trainer.id
                      ? "border-primary"
                      : "border-white/10 hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="trainer"
                    value={trainer.id}
                    checked={formData.selectedTrainer === trainer.id}
                    onChange={(e) => setFormData({ ...formData, selectedTrainer: e.target.value })}
                    className="sr-only"
                  />
                  
                  <div className="relative">
                    {/* Trainer Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Selected Indicator */}
                      {formData.selectedTrainer === trainer.id && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <svg className="w-5 h-5 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Trainer Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-impact text-primary leading-[1.1] tracking-tight uppercase mb-1">
                        {trainer.name}
                      </h3>
                      <p className="text-xs text-white/80 font-inter font-semibold mb-1">
                        {trainer.role}
                      </p>
                      <p className="text-xs text-white/60 font-inter">
                        {trainer.specialty}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {/* Clear Selection */}
            {formData.selectedTrainer && (
              <button
                type="button"
                onClick={() => setFormData({ ...formData, selectedTrainer: "" })}
                className="mt-4 text-sm text-white/70 hover:text-primary font-inter transition-colors"
              >
                Clear trainer selection
              </button>
            )}
          </div>

          {/* Classes Selection */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-3">
              Select <span className="text-primary">Classes</span>
            </h2>
            <p className="text-sm text-white/70 font-inter mb-6">
              Optional: Choose specific classes you're interested in
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Zumba Dance",
                "Circuit Training",
                "Metabolic Training",
                "Get Fit Toning",
                "Kickboxing",
                "Gymnastics",
                "Taekwondo",
                "Outdoor Training"
              ].map((className) => (
                <label
                  key={className}
                  className={`block relative overflow-hidden rounded-xl border cursor-pointer transition-all ${
                    formData.selectedClasses.includes(className)
                      ? "border-primary bg-primary/5"
                      : "border-white/10 bg-surface hover:border-primary/30"
                  }`}
                >
                  <div className="p-4 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.selectedClasses.includes(className)}
                      onChange={() => handleClassToggle(className)}
                      className="w-4 h-4 text-primary focus:ring-primary rounded"
                    />
                    <span className="text-sm font-inter text-white">
                      {className}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Health Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-impact text-white leading-[1.1] tracking-tight uppercase mb-6">
              Health <span className="text-primary">Information</span>
            </h2>
            
            <div>
              <label className="block text-sm font-inter font-semibold text-white mb-2">
                Medical Conditions or Injuries (Optional)
              </label>
              <textarea
                value={formData.medicalConditions}
                onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
                rows={4}
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Please list any medical conditions, injuries, or health concerns we should be aware of..."
              />
              <p className="text-xs text-white/50 font-inter mt-2">
                This information helps us provide you with safe and effective training guidance.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-primary text-on-primary text-sm font-inter font-bold px-12 py-4 rounded-full hover:bg-white transition-all tracking-widest"
            >
              COMPLETE REGISTRATION
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

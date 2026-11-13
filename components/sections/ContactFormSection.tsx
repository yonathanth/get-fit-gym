"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui/Section";

const SUBJECTS = ["Membership", "Personal training", "Facility tour", "Events", "Other"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-inter text-sm text-white placeholder:text-white/30 transition-all duration-200 hover:border-white/20 focus:outline-none focus:border-primary/70 focus:bg-white/[0.05] focus:ring-4 focus:ring-primary/10";
const labelClass = "mb-1.5 block font-inter text-xs font-medium text-white/70";

/** Contact form → /api/inquiries → shows up in the admin's Inquiries inbox. */
export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <Section id="message">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeading title="Send Us a" accent="Message" className="mb-3" />
          <p className="mx-auto mb-8 sm:mb-10 max-w-xl text-center font-inter text-sm sm:text-base leading-relaxed text-white/65 text-pretty">
            Questions about memberships, training or a visit? Leave a message and our team will get back to you.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="gradient-border rounded-[28px] p-px">
            <div className="rounded-[27px] bg-[#101010] p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                {status === "sent" ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[9999px] border border-primary/40 bg-primary/15 text-primary shadow-[0_0_40px_rgba(217,151,43,0.35)]">
                      <span className="material-symbols-outlined text-3xl">check</span>
                    </div>
                    <h3 className="font-impact text-3xl uppercase text-white">Message sent</h3>
                    <p className="mx-auto mt-2 max-w-sm font-inter text-sm text-white/65">
                      Thanks for reaching out. We&apos;ll reply as soon as we can.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 rounded-[9999px] border border-white/15 px-5 py-2.5 font-inter text-[13px] font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit} exit={{ opacity: 0 }} className="space-y-4">
                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 font-inter text-xs text-red-400">
                        <span className="material-symbols-outlined text-[16px]">error</span>
                        {error}
                      </div>
                    )}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cf-name" className={labelClass}>Full name</label>
                        <input id="cf-name" required autoComplete="name" value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass} placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="cf-email" className={labelClass}>Email</label>
                        <input id="cf-email" type="email" required autoComplete="email" value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass} placeholder="your@email.com" />
                      </div>
                      <div>
                        <label htmlFor="cf-phone" className={labelClass}>Phone <span className="text-white/35">(optional)</span></label>
                        <input id="cf-phone" type="tel" autoComplete="tel" value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass} placeholder="+251 900 000 000" />
                      </div>
                      <div>
                        <label htmlFor="cf-subject" className={labelClass}>Subject</label>
                        <select id="cf-subject" value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className={`${inputClass} cursor-pointer`}>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s} className="bg-[#101010]">{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cf-message" className={labelClass}>Message</label>
                      <textarea id="cf-message" required rows={5} value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-y min-h-[120px]`} placeholder="How can we help?" />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-[9999px] bg-gradient-to-b from-[#E6A847] to-primary py-3.5 font-inter text-sm font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_30px_-10px_rgba(217,151,43,0.7)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-[9999px] border-2 border-black/30 border-t-black" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

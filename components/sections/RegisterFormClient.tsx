"use client";

import { useMemo, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export type Period = "1-month" | "3-months" | "6-months" | "1-year";

export interface RegisterPlan {
  slug: string;
  name: string;
  category: string; // "REGULAR" | "HAPPY_HOUR"
  tier: string; // "SINGLE" | "COUPLE"
  subtitle: string;
  isPopular: boolean;
  prices: Record<Period, string>;
}

export interface RegisterClass {
  name: string;
  schedule: string;
}

interface RegisterFormClientProps {
  plans: RegisterPlan[];
  classes: RegisterClass[];
  initialPlan?: string;
  initialPeriod?: string;
}

const PERIODS: { id: Period; label: string; months: number }[] = [
  { id: "1-month", label: "1 Month", months: 1 },
  { id: "3-months", label: "3 Months", months: 3 },
  { id: "6-months", label: "6 Months", months: 6 },
  { id: "1-year", label: "1 Year", months: 12 },
];

const ACCESS_LABEL: Record<string, { label: string; hint: string }> = {
  REGULAR: { label: "Any time", hint: "Full opening hours" },
  HAPPY_HOUR: { label: "Happy hour", hint: "Off-peak, lower price" },
};
const TIER_LABEL: Record<string, { label: string; hint: string }> = {
  SINGLE: { label: "Just me", hint: "1 person" },
  COUPLE: { label: "Couple", hint: "2 people" },
};

/** "Gym With Spa (Couple - 10% Off)" → "Gym With Spa" */
const serviceOf = (p: RegisterPlan) => p.name.split("(")[0].trim();
const amount = (price: string) => Number(price.replace(/[^\d.]/g, "")) || 0;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

type Choice = { service: string; access: string; tier: string };
const fieldOf = (p: RegisterPlan): Choice => ({ service: serviceOf(p), access: p.category, tier: p.tier });

const inputCls =
  "w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-white/30";

export default function RegisterFormClient({ plans, classes, initialPlan, initialPeriod }: RegisterFormClientProps) {
  const startPlan =
    plans.find((p) => p.slug === initialPlan) ??
    plans.find((p) => p.isPopular && p.category === "REGULAR" && p.tier === "SINGLE") ??
    plans[0];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [choice, setChoice] = useState<Choice | null>(startPlan ? fieldOf(startPlan) : null);
  const [period, setPeriod] = useState<Period>(
    PERIODS.some((p) => p.id === initialPeriod) ? (initialPeriod as Period) : "1-month"
  );
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const services = useMemo(() => [...new Set(plans.map(serviceOf))], [plans]);
  const accesses = useMemo(() => [...new Set(plans.map((p) => p.category))], [plans]);
  const tiers = useMemo(() => [...new Set(plans.map((p) => p.tier))], [plans]);

  const plan = choice
    ? plans.find((p) => serviceOf(p) === choice.service && p.category === choice.access && p.tier === choice.tier)
    : undefined;

  /** Pick a value; if that exact combination doesn't exist, jump to the closest plan that has it. */
  const choose = (field: keyof Choice, value: string) => {
    if (!choice) return;
    const next = { ...choice, [field]: value };
    const candidates = plans.filter((p) => fieldOf(p)[field] === value);
    const score = (p: RegisterPlan) =>
      (Object.keys(next) as (keyof Choice)[]).filter((k) => fieldOf(p)[k] === next[k]).length;
    const best = candidates.sort((a, b) => score(b) - score(a))[0];
    setChoice(best ? fieldOf(best) : next);
  };

  const available = (field: keyof Choice, value: string) =>
    !!choice && plans.some((p) => {
      const f = fieldOf(p);
      return f[field] === value && (Object.keys(f) as (keyof Choice)[]).every((k) => k === field || f[k] === choice[k]);
    });

  const toggleClass = (className: string) =>
    setSelectedClasses((prev) => (prev.includes(className) ? prev.filter((c) => c !== className) : [...prev, className]));

  const periodMeta = PERIODS.find((p) => p.id === period)!;
  const price = plan?.prices[period] ?? "";
  const monthly = plan ? amount(plan.prices["1-month"]) : 0;
  const total = amount(price);
  const savings = monthly && total ? monthly * periodMeta.months - total : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          planSlug: plan?.slug,
          period,
          membershipType: plan ? `${plan.name} · ${periodMeta.label} · ${price}` : undefined,
          selectedClasses,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to submit registration");
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="max-w-[640px] mx-auto px-4 sm:px-6 my-12">
        <div className="rounded-[28px] border border-primary/40 bg-surface/90 p-8 sm:p-12 text-center shadow-2xl space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto text-primary">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-impact text-white uppercase italic">You&apos;re in!</h2>
          <p className="text-sm sm:text-base text-white/80 font-inter leading-relaxed">
            Thanks, <strong className="text-primary">{name.split(" ")[0]}</strong>. We&apos;ll call you at{" "}
            <strong className="text-white">{phone}</strong> within 24 hours to confirm your membership.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setSelectedClasses([]);
            }}
            className="mt-6 px-8 py-3 rounded-full bg-primary text-black font-impact text-base tracking-wider uppercase hover:bg-primary-hover transition-all cursor-pointer"
          >
            Register someone else
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[640px] mx-auto px-4 sm:px-6">
      <ScrollReveal direction="up" delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-surface/70 backdrop-blur-sm p-5 sm:p-8 space-y-8 font-inter"
        >
          {/* 1. Details */}
          <fieldset className="space-y-3">
            <Step n={1} title="Your details" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
                placeholder="Full name"
                aria-label="Full name"
              />
              <input
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputCls}
                placeholder="Phone (09… or +251…)"
                aria-label="Phone number"
              />
            </div>
          </fieldset>

          {/* 2. Membership */}
          {plans.length > 0 && choice && (
            <fieldset className="space-y-4">
              <Step n={2} title="Membership" />

              <Segment label="Service">
                {services.map((s) => (
                  <Option
                    key={s}
                    active={choice.service === s}
                    dim={!available("service", s)}
                    onClick={() => choose("service", s)}
                    label={s}
                    hint={/spa/i.test(s) ? "Gym + spa & recovery" : "Training floor & classes"}
                  />
                ))}
              </Segment>

              {accesses.length > 1 && (
                <Segment label="Access">
                  {accesses.map((a) => (
                    <Option
                      key={a}
                      active={choice.access === a}
                      dim={!available("access", a)}
                      onClick={() => choose("access", a)}
                      label={ACCESS_LABEL[a]?.label ?? a}
                      hint={ACCESS_LABEL[a]?.hint}
                    />
                  ))}
                </Segment>
              )}

              {tiers.length > 1 && (
                <Segment label="For">
                  {tiers.map((t) => (
                    <Option
                      key={t}
                      active={choice.tier === t}
                      dim={!available("tier", t)}
                      onClick={() => choose("tier", t)}
                      label={TIER_LABEL[t]?.label ?? t}
                      hint={TIER_LABEL[t]?.hint}
                    />
                  ))}
                </Segment>
              )}

              {plan && (
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">Duration</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PERIODS.map((p) => {
                      const active = period === p.id;
                      const save = monthly ? monthly * p.months - amount(plan.prices[p.id]) : 0;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPeriod(p.id)}
                          aria-pressed={active}
                          className={`relative rounded-xl border px-3 py-3 text-left transition-all cursor-pointer ${
                            active
                              ? "border-primary bg-primary/10"
                              : "border-white/10 bg-[#0A0A0A] hover:border-white/25"
                          }`}
                        >
                          <span className={`block text-xs font-semibold ${active ? "text-white" : "text-white/70"}`}>
                            {p.label}
                          </span>
                          <span className={`block font-impact text-lg leading-tight ${active ? "text-primary" : "text-white"}`}>
                            {plan.prices[p.id].replace(/\s*ETB/i, "")}
                          </span>
                          {save > 0 && (
                            <span className="absolute -top-2 right-2 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold uppercase text-black">
                              Save {Math.round((save / (monthly * p.months)) * 100)}%
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Summary */}
              {plan && (
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/[0.06] px-4 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{plan.name}</p>
                    <p className="text-xs text-white/55">
                      {periodMeta.label}
                      {periodMeta.months > 1 && total ? ` · ≈ ${fmt(total / periodMeta.months)} ETB / month` : ""}
                      {savings > 0 ? ` · save ${fmt(savings)} ETB` : ""}
                    </p>
                  </div>
                  <p className="shrink-0 font-impact text-2xl text-primary leading-none">{price}</p>
                </div>
              )}
            </fieldset>
          )}

          {/* 3. Classes (optional) */}
          {classes.length > 0 && (
            <fieldset className="space-y-3">
              <Step n={plans.length > 0 ? 3 : 2} title="Classes" optional />
              <div className="flex flex-wrap gap-2">
                {classes.map((c) => {
                  const on = selectedClasses.includes(c.name);
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => toggleClass(c.name)}
                      aria-pressed={on}
                      title={c.schedule}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-all cursor-pointer ${
                        on
                          ? "border-primary bg-primary/15 text-white font-semibold"
                          : "border-white/10 bg-[#0A0A0A] text-white/70 hover:border-white/25"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[16px] ${on ? "text-primary" : "text-white/30"}`}>
                        {on ? "check_circle" : "add_circle"}
                      </span>
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">{errorMessage}</div>
          )}

          <div className="space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-inter text-sm font-bold uppercase tracking-wider text-black shadow-[0_10px_30px_-10px_rgba(217,151,43,0.7)] transition-all hover:bg-primary-hover active:scale-[0.99] disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? "Sending…" : "Register"}
              {!isSubmitting && (
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              )}
            </button>
            <p className="text-center text-[11px] text-white/45">
              No payment now. We&apos;ll call you to confirm and answer any questions.
            </p>
          </div>
        </form>
      </ScrollReveal>
    </section>
  );
}

function Step({ n, title, optional }: { n: number; title: string; optional?: boolean }) {
  return (
    <legend className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-black">{n}</span>
      <span className="font-impact text-xl sm:text-2xl uppercase tracking-tight text-white">{title}</span>
      {optional && <span className="text-[11px] text-white/40">optional</span>}
    </legend>
  );
}

function Segment({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">{label}</p>
      <div className="grid grid-cols-2 gap-2">{children}</div>
    </div>
  );
}

function Option({
  active,
  dim,
  onClick,
  label,
  hint,
}: {
  active: boolean;
  dim?: boolean;
  onClick: () => void;
  label: string;
  hint?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl border px-3.5 py-3 text-left transition-all cursor-pointer ${
        active
          ? "border-primary bg-primary/10"
          : `border-white/10 bg-[#0A0A0A] hover:border-white/25 ${dim ? "opacity-50" : ""}`
      }`}
    >
      <span className={`block text-sm font-semibold ${active ? "text-white" : "text-white/80"}`}>{label}</span>
      {hint && <span className="block text-[11px] text-white/45">{hint}</span>}
    </button>
  );
}

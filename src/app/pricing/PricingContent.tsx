"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function PricingHero() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          Simple, <span className="text-teal">Transparent</span> Pricing
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          One platform that replaces 5 apps. Save 50&ndash;90% while getting
          more capability. Every plan includes a 14-day free trial.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING TIERS                                                     */
/* ------------------------------------------------------------------ */
const tiers = [
  {
    name: "Essential", price: 149, monthly: 15, audience: "Young families", popular: false,
    features: ["Document vault", "AI auto-filing", "Basic portfolio tracking", "Smart reminders", "5 shared members", "10 GB storage", "Email support"],
  },
  {
    name: "Premium", price: 249, monthly: 26, audience: "Mass affluent families", popular: true,
    features: ["Everything in Essential", "Full AI insights suite", "Unlimited sharing", "Cross-pillar intelligence", "Document audit", "Priority support", "50 GB storage"],
  },
  {
    name: "Family Pro", price: 399, monthly: 42, audience: "HNW / multi-generational", popular: false,
    features: ["Everything in Premium", "White-glove onboarding", "Advanced estate tools", "API access", "Dedicated success manager", "Unlimited storage", "Custom integrations"],
  },
];

function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center bg-gray-bg rounded-full p-1 border border-gray-border shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-navy text-white shadow-sm" : "text-slate-500 hover:text-navy"}`}
            >Monthly</button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${annual ? "bg-navy text-white shadow-sm" : "text-slate-500 hover:text-navy"}`}
            >Annual <span className="text-teal text-xs font-bold">Save 20%</span></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 flex flex-col transition-shadow ${
                tier.popular ? "border-2 border-teal shadow-xl shadow-teal/10 scale-[1.03]" : "border border-gray-border shadow-sm hover:shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              )}
              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{tier.audience}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-navy">${annual ? tier.price : tier.monthly}</span>
                <span className="text-slate-400 text-lg">/{annual ? "yr" : "mo"}</span>
              </div>
              {annual && (
                <p className="mt-1 text-sm text-slate-400">${Math.round(tier.price / 12)}/mo billed annually</p>
              )}
              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`mt-8 block text-center font-semibold py-3.5 rounded-lg transition-all ${
                  tier.popular ? "bg-teal text-white hover:bg-teal-hover shadow-lg shadow-teal/20" : "bg-navy text-white hover:bg-navy-light"
                }`}
              >Start Free Trial</a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-light text-teal text-sm font-medium px-5 py-2.5 rounded-full border border-teal/20">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            30-day money-back guarantee &mdash; no questions asked
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPARISON TABLE                                                  */
/* ------------------------------------------------------------------ */
const comparisonRows = [
  { feature: "Document vault", essential: true, premium: true, pro: true },
  { feature: "AI auto-filing", essential: true, premium: true, pro: true },
  { feature: "Smart reminders", essential: true, premium: true, pro: true },
  { feature: "Basic portfolio tracking", essential: true, premium: true, pro: true },
  { feature: "Full AI insights suite", essential: false, premium: true, pro: true },
  { feature: "Unlimited sharing", essential: false, premium: true, pro: true },
  { feature: "Cross-pillar intelligence", essential: false, premium: true, pro: true },
  { feature: "Document audit", essential: false, premium: true, pro: true },
  { feature: "Priority support", essential: false, premium: true, pro: true },
  { feature: "White-glove onboarding", essential: false, premium: false, pro: true },
  { feature: "Advanced estate tools", essential: false, premium: false, pro: true },
  { feature: "API access", essential: false, premium: false, pro: true },
  { feature: "Dedicated success manager", essential: false, premium: false, pro: true },
  { feature: "Custom integrations", essential: false, premium: false, pro: true },
  { feature: "Storage", essential: "10 GB", premium: "50 GB", pro: "Unlimited" },
  { feature: "Shared members", essential: "5", premium: "Unlimited", pro: "Unlimited" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-sm font-medium text-navy">{value}</span>;
  return value ? (
    <svg className="w-5 h-5 text-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
  ) : (
    <svg className="w-5 h-5 text-slate-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
  );
}

function ComparisonTable() {
  return (
    <section className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">Compare Plans</h2>
          <p className="mt-4 text-lg text-slate-500">See exactly what&apos;s included in each tier.</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-border overflow-hidden shadow-sm">
          <div className="grid grid-cols-4 border-b border-gray-border bg-gray-bg/60">
            <div className="p-4 sm:p-6 font-semibold text-sm text-slate-500">Feature</div>
            <div className="p-4 sm:p-6 text-center font-bold text-navy text-sm">Essential</div>
            <div className="p-4 sm:p-6 text-center font-bold text-teal text-sm">Premium</div>
            <div className="p-4 sm:p-6 text-center font-bold text-navy text-sm">Family Pro</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div key={row.feature} className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? "border-b border-gray-border/50" : ""}`}>
              <div className="p-4 sm:p-6 text-sm text-slate-600 font-medium">{row.feature}</div>
              <div className="p-4 sm:p-6 flex items-center justify-center"><CellValue value={row.essential} /></div>
              <div className="p-4 sm:p-6 flex items-center justify-center bg-teal/[0.02]"><CellValue value={row.premium} /></div>
              <div className="p-4 sm:p-6 flex items-center justify-center"><CellValue value={row.pro} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING FAQ                                                       */
/* ------------------------------------------------------------------ */
function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the credit will be applied to your next billing cycle." },
    { q: "Is there a free trial?", a: "Yes! Every plan comes with a 14-day free trial. No credit card required to start. You'll have full access to all features in your chosen plan during the trial period." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, American Express), as well as ACH bank transfers for annual plans. Enterprise customers can also pay by invoice." },
    { q: "What's the money-back guarantee?", a: "If you're not satisfied within 30 days of your first paid subscription, we'll refund your payment in full — no questions asked. We want you to feel completely confident in your decision." },
    { q: "Do you offer discounts for larger families?", a: "The Family Pro plan includes unlimited members and storage, making it ideal for multi-generational families. For organizations or family offices managing multiple families, contact us for custom enterprise pricing." },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">Pricing Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-border rounded-xl overflow-hidden bg-gray-bg/50">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-bg transition-colors"
              >
                <span className="font-semibold text-navy">{faq.q}</span>
                <svg className={`w-5 h-5 text-slate-400 shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && <div className="px-6 pb-5 text-slate-500 leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                               */
/* ------------------------------------------------------------------ */
function PricingCTA() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Ready to simplify your family&apos;s life?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Start your free trial today. No credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={APP_URL} className="bg-teal text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-teal-hover transition-all shadow-lg shadow-teal/20 w-full sm:w-auto">
            Start Free Trial
          </a>
          <Link href="/features" className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-white/5 transition-all w-full sm:w-auto">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EXPORTED CONTENT                                                  */
/* ------------------------------------------------------------------ */
export default function PricingContent() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}

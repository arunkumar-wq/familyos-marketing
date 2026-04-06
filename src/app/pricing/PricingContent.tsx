"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function PricingHero() {
  return (
    <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
          Simple, <span className="text-teal">Transparent</span> Pricing
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          One platform that replaces 5 apps. Save 50&ndash;90% while getting
          more capability. Every plan includes a 14-day free trial.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TIERS                                                             */
/* ------------------------------------------------------------------ */
const tiers = [
  { name: "Essential", price: 149, monthly: 15, audience: "Young families", popular: false, features: ["Document vault", "AI auto-filing", "Basic portfolio tracking", "Smart reminders", "5 shared members", "10 GB storage", "Email support"] },
  { name: "Premium", price: 249, monthly: 26, audience: "Mass affluent families", popular: true, features: ["Everything in Essential", "Full AI insights suite", "Unlimited sharing", "Cross-pillar intelligence", "Document audit", "Priority support", "50 GB storage"] },
  { name: "Family Pro", price: 399, monthly: 42, audience: "HNW / multi-generational", popular: false, features: ["Everything in Premium", "White-glove onboarding", "Advanced estate tools", "API access", "Dedicated success manager", "Unlimited storage", "Custom integrations"] },
];

function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-bg rounded-full p-1 border border-gray-border shadow-[var(--shadow-card)]">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${!annual ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${annual ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>Annual <span className="text-teal text-[11px] font-bold">Save 20%</span></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative bg-white rounded-xl p-6 sm:p-7 flex flex-col transition-shadow ${tier.popular ? "border-2 border-teal shadow-[var(--shadow-elevated)] md:scale-[1.03]" : "border border-gray-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"}`}>
              {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full">MOST POPULAR</div>}
              <h3 className="text-lg font-bold text-navy">{tier.name}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{tier.audience}</p>
              <div className="mt-5">
                <span className="text-3xl sm:text-4xl font-bold text-navy">${annual ? tier.price : tier.monthly}</span>
                <span className="text-slate-400 text-sm">/{annual ? "yr" : "mo"}</span>
              </div>
              {annual && <p className="mt-1 text-xs text-slate-400">${Math.round(tier.price / 12)}/mo billed annually</p>}
              <ul className="mt-6 space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={APP_URL} className={`mt-6 block text-center font-semibold py-2.5 rounded-lg text-sm transition-all ${tier.popular ? "bg-teal text-white hover:bg-teal-hover" : "bg-navy text-white hover:bg-navy-light"}`}>
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-light text-teal text-[13px] font-medium px-4 py-2 rounded-full border border-teal/15">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            30-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPARISON TABLE — mobile-responsive with horizontal scroll       */
/* ------------------------------------------------------------------ */
const comparisonRows: { feature: string; essential: boolean | string; premium: boolean | string; pro: boolean | string }[] = [
  { feature: "Document vault", essential: true, premium: true, pro: true },
  { feature: "AI auto-filing", essential: true, premium: true, pro: true },
  { feature: "Smart reminders", essential: true, premium: true, pro: true },
  { feature: "Portfolio tracking", essential: true, premium: true, pro: true },
  { feature: "Full AI insights", essential: false, premium: true, pro: true },
  { feature: "Unlimited sharing", essential: false, premium: true, pro: true },
  { feature: "Cross-pillar intelligence", essential: false, premium: true, pro: true },
  { feature: "Document audit", essential: false, premium: true, pro: true },
  { feature: "Priority support", essential: false, premium: true, pro: true },
  { feature: "White-glove onboarding", essential: false, premium: false, pro: true },
  { feature: "Estate tools", essential: false, premium: false, pro: true },
  { feature: "API access", essential: false, premium: false, pro: true },
  { feature: "Success manager", essential: false, premium: false, pro: true },
  { feature: "Storage", essential: "10 GB", premium: "50 GB", pro: "Unlimited" },
  { feature: "Members", essential: "5", premium: "Unlimited", pro: "Unlimited" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-xs font-semibold text-navy">{value}</span>;
  return value ? (
    <svg className="w-4 h-4 text-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
  ) : (
    <span className="block w-4 h-px bg-slate-200 mx-auto" />
  );
}

function ComparisonTable() {
  return (
    <section className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight text-center">Compare Plans</h2>
        <p className="mt-3 text-base text-slate-500 text-center">See exactly what&apos;s included in each tier.</p>

        {/* Scrollable wrapper for mobile */}
        <div className="mt-10 -mx-5 sm:mx-0 overflow-x-auto">
          <div className="min-w-[480px] sm:min-w-0 mx-5 sm:mx-0">
            <div className="bg-white rounded-xl border border-gray-border shadow-[var(--shadow-card)] overflow-hidden">
              <div className="grid grid-cols-4 border-b border-gray-border bg-gray-bg/60">
                <div className="px-4 py-3 text-xs font-semibold text-slate-500">Feature</div>
                <div className="px-4 py-3 text-center text-xs font-bold text-navy">Essential</div>
                <div className="px-4 py-3 text-center text-xs font-bold text-teal">Premium</div>
                <div className="px-4 py-3 text-center text-xs font-bold text-navy">Family Pro</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? "border-b border-gray-border/50" : ""}`}>
                  <div className="px-4 py-2.5 text-xs text-slate-600 font-medium">{row.feature}</div>
                  <div className="px-4 py-2.5 flex items-center justify-center"><CellValue value={row.essential} /></div>
                  <div className="px-4 py-2.5 flex items-center justify-center bg-teal/[0.02]"><CellValue value={row.premium} /></div>
                  <div className="px-4 py-2.5 flex items-center justify-center"><CellValue value={row.pro} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time. When upgrading, you\u2019ll be charged the prorated difference. When downgrading, the credit applies to your next billing cycle." },
    { q: "Is there a free trial?", a: "Yes! Every plan comes with a 14-day free trial. No credit card required. Full access to all features in your chosen plan." },
    { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex), ACH bank transfers for annual plans, and invoicing for enterprise customers." },
    { q: "What\u2019s the money-back guarantee?", a: "If you\u2019re not satisfied within 30 days of your first paid subscription, we\u2019ll refund your payment in full \u2014 no questions asked." },
    { q: "Do you offer discounts for larger families?", a: "The Family Pro plan includes unlimited members and storage. For family offices managing multiple families, contact us for custom enterprise pricing." },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight text-center">Pricing Questions</h2>
        <div className="mt-10 space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-border rounded-xl overflow-hidden bg-gray-bg/40">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-bg transition-colors">
                <span className="font-semibold text-navy text-sm">{faq.q}</span>
                <svg className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openIndex === i && <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</div>}
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
    <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to simplify your family&apos;s life?</h2>
        <p className="mt-3 text-base text-slate-300">Start your free trial today. No credit card required.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={APP_URL} className="bg-teal text-white font-semibold px-7 py-3 rounded-lg hover:bg-teal-hover transition-all shadow-[var(--shadow-elevated)] w-full sm:w-auto text-[15px]">Start Free Trial</a>
          <Link href="/features" className="border border-white/20 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto text-[15px]">Explore Features</Link>
        </div>
      </div>
    </section>
  );
}

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

"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ================================================================== */
/*  HERO                                                              */
/* ================================================================== */
function PricingHero() {
  return (
    <section className="bg-white pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center">
        <div className="eyebrow mb-4">Pricing</div>
        <h1 className="font-display text-[28px] sm:text-[48px] lg:text-[56px] leading-[1.2] sm:leading-[1.15] text-[var(--color-text-1)] font-normal mb-5 max-w-3xl mx-auto">
          Simple pricing.{" "}
          <em className="italic text-[var(--color-teal-dark)]">No surprises.</em>
        </h1>
        <p className="text-[17px] text-[var(--color-text-2)] leading-[1.65] max-w-[560px] mx-auto">
          Start free. Upgrade when your family is ready. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  TIERS                                                             */
/* ================================================================== */
const tiers = [
  {
    name: "Free",
    desc: "For getting started",
    annualAmount: "$0",
    monthlyAmount: "$0",
    period: "/month",
    features: ["Up to 10 documents", "1 linked account", "Basic AI queries", "1 family member"],
    featured: false,
    cta: "Get started",
  },
  {
    name: "Premium",
    desc: "For families who want full control",
    annualAmount: "$15",
    monthlyAmount: "$19",
    period: "/month",
    features: [
      "Unlimited documents",
      "Unlimited accounts",
      "Full AI copilot",
      "Up to 6 family members",
      "Emergency protocols",
      "Portfolio tracking",
    ],
    featured: true,
    cta: "Start free trial",
  },
  {
    name: "Family Office",
    desc: "For complex estates",
    annualAmount: "Custom",
    monthlyAmount: "Custom",
    period: "",
    features: [
      "Everything in Premium",
      "Dedicated advisor",
      "Custom integrations",
      "Estate planning tools",
      "SLA guarantee",
    ],
    featured: false,
    cta: "Contact us",
  },
];

function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="flex justify-center mb-10">
          <div
            className="inline-flex items-center bg-[var(--color-surface)] rounded-full p-1 border border-[var(--color-border)]"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              className="px-5 py-2 rounded-full text-[13px] font-semibold transition-colors"
              style={{
                background: !annual ? "var(--color-navy)" : "transparent",
                color: !annual ? "#fff" : "var(--color-text-2)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-5 py-2 rounded-full text-[13px] font-semibold transition-colors"
              style={{
                background: annual ? "var(--color-navy)" : "transparent",
                color: annual ? "#fff" : "var(--color-text-2)",
              }}
            >
              Annual <span className="text-[var(--color-teal)] text-[11px] font-bold ml-1">Save 20%</span>
            </button>
          </div>
        </FadeIn>

        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto items-stretch">
          {tiers.map((tier) => {
            const amount = annual ? tier.annualAmount : tier.monthlyAmount;
            return (
              <div
                key={tier.name}
                className={`animate-on-scroll card-hover relative bg-white rounded-[20px] py-9 px-7 flex flex-col ${
                  tier.featured ? "border-2 border-teal" : "border border-[var(--color-border)]"
                }`}
                style={{ boxShadow: tier.featured ? "var(--shadow-lg)" : undefined }}
              >
                {tier.featured && (
                  <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-teal text-white text-[12px] font-semibold py-1 px-4 rounded-[20px] whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="text-lg font-semibold text-[var(--color-text-1)] mb-1">{tier.name}</div>
                <div className="text-[13px] text-[var(--color-text-3)] mb-5">{tier.desc}</div>
                <div className="mb-6">
                  <span
                    className={`font-bold text-[var(--color-text-1)] tracking-[-0.03em] leading-none ${
                      amount === "Custom" ? "text-[40px]" : "text-[48px]"
                    }`}
                  >
                    {amount}
                  </span>
                  {tier.period && amount !== "Custom" && (
                    <span className="text-[15px] font-normal text-[var(--color-text-3)]">{tier.period}</span>
                  )}
                </div>
                <ul className="list-none mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-[var(--color-text-2)] py-2 border-b border-[var(--color-border-light)] last:border-b-0"
                    >
                      <span
                        className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: tier.featured ? "var(--color-teal-light)" : "var(--color-surface-2)",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={tier.featured ? "#0F6E56" : "var(--color-text-3)"}
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className={`btn-press w-full text-center inline-flex items-center justify-center gap-2 font-semibold text-sm py-2.5 px-6 rounded-[8px] transition-all ${
                    tier.featured
                      ? "bg-teal text-white hover:bg-teal-dark"
                      : "bg-transparent text-[var(--color-text-1)] border-[1.5px] border-[var(--color-border)] hover:border-[var(--color-text-3)] hover:bg-[var(--color-surface)]"
                  }`}
                  style={tier.featured ? { boxShadow: "0 2px 8px rgba(46,196,182,0.25)" } : undefined}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </AnimateOnScroll>

        <p className="text-center text-[13px] text-[var(--color-text-3)] mt-6">
          14-day free trial on Premium · Cancel anytime · No credit card required
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  COMPARISON TABLE                                                  */
/* ================================================================== */
const comparisonRows: { feature: string; free: boolean | string; premium: boolean | string; office: boolean | string }[] = [
  { feature: "Documents", free: "10", premium: "Unlimited", office: "Unlimited" },
  { feature: "Linked accounts", free: "1", premium: "Unlimited", office: "Unlimited" },
  { feature: "Family members", free: "1", premium: "6", office: "Unlimited" },
  { feature: "AI copilot", free: "Basic", premium: "Full", office: "Full" },
  { feature: "Portfolio tracking", free: false, premium: true, office: true },
  { feature: "Smart reminders", free: true, premium: true, office: true },
  { feature: "Emergency protocols", free: false, premium: true, office: true },
  { feature: "Estate planning tools", free: false, premium: false, office: true },
  { feature: "Custom integrations", free: false, premium: false, office: true },
  { feature: "Dedicated advisor", free: false, premium: false, office: true },
  { feature: "SLA guarantee", free: false, premium: false, office: true },
];

function CellValue({ value, accent }: { value: boolean | string; accent?: boolean }) {
  if (typeof value === "string") {
    return <span className="text-[13px] font-semibold text-[var(--color-text-1)]">{value}</span>;
  }
  return value ? (
    <svg className="w-4 h-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke={accent ? "#0F6E56" : "var(--color-text-2)"} strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ) : (
    <span className="block w-4 h-px bg-[var(--color-border)] mx-auto" />
  );
}

function ComparisonTable() {
  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-12">
          <div className="eyebrow mb-3">Plans</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-3">
            Compare every feature.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)]">See exactly what&apos;s included in each plan.</p>
        </FadeIn>

        <FadeIn>
          <div className="-mx-5 sm:mx-0 overflow-x-auto">
            <div className="min-w-[560px] sm:min-w-0 mx-5 sm:mx-0">
              <div className="bg-white rounded-[20px] border border-[var(--color-border)] overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div className="grid grid-cols-4 border-b border-[var(--color-border-light)] bg-[var(--color-surface)]">
                  <div className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-3)]">
                    Feature
                  </div>
                  <div className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-text-1)]">Free</div>
                  <div className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-teal-deep)]">Premium</div>
                  <div className="px-5 py-4 text-center text-sm font-semibold text-[var(--color-text-1)]">Family Office</div>
                </div>
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-4 ${i < comparisonRows.length - 1 ? "border-b border-[var(--color-border-light)]" : ""}`}
                  >
                    <div className="px-5 py-3.5 text-sm text-[var(--color-text-2)]">{row.feature}</div>
                    <div className="px-5 py-3.5 flex items-center justify-center">
                      <CellValue value={row.free} />
                    </div>
                    <div className="px-5 py-3.5 flex items-center justify-center" style={{ background: "rgba(46,196,182,0.03)" }}>
                      <CellValue value={row.premium} accent />
                    </div>
                    <div className="px-5 py-3.5 flex items-center justify-center">
                      <CellValue value={row.office} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FAQ                                                               */
/* ================================================================== */
function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time. When upgrading, you\u2019ll be charged the prorated difference. When downgrading, the credit applies to your next billing cycle." },
    { q: "Is there a free trial?", a: "Yes! Premium comes with a 14-day free trial. No credit card required. Full access to all features in your chosen plan." },
    { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex), ACH bank transfers for annual plans, and invoicing for enterprise customers." },
    { q: "What\u2019s the money-back guarantee?", a: "If you\u2019re not satisfied within 30 days of your first paid subscription, we\u2019ll refund your payment in full \u2014 no questions asked." },
    { q: "Do you offer discounts for larger families?", a: "Family Office includes unlimited members and storage. For family offices managing multiple families, contact us for custom enterprise pricing." },
  ];

  return (
    <section className="py-14 sm:py-24 bg-white">
      <div className="max-w-[680px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center mb-10">
          <div className="eyebrow mb-3">FAQ</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)]">
            Pricing questions.
          </h2>
        </FadeIn>
        <AnimateOnScroll stagger className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll border border-[var(--color-border)] rounded-[12px] overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--color-surface)] transition-colors"
              >
                <span className="font-semibold text-[var(--color-text-1)] text-sm">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-[var(--color-text-3)] shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-[14px] text-[var(--color-text-2)] leading-[1.65]">{faq.a}</div>
              )}
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CTA                                                               */
/* ================================================================== */
function PricingCTA() {
  return (
    <section className="py-14 sm:py-24 bg-navy text-center">
      <div className="max-w-[640px] mx-auto px-5 sm:px-6">
        <h2 className="font-display text-[26px] sm:text-[40px] font-normal text-white leading-[1.2] mb-4">
          Ready to simplify your family&apos;s life?
        </h2>
        <p className="text-[17px] mb-9 leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Start your free trial today. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={APP_URL}
            className="btn-press inline-flex items-center justify-center gap-2 bg-white text-[var(--color-navy)] font-semibold text-base py-3.5 px-8 rounded-[10px] hover:bg-[var(--color-surface)] transition-all w-full sm:w-auto"
          >
            Start free trial
          </a>
          <Link
            href="/features"
            className="btn-press inline-flex items-center justify-center gap-2 font-semibold text-base py-3.5 px-8 rounded-[10px] transition-all w-full sm:w-auto"
            style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.2)" }}
          >
            Explore features
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
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

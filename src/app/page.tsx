"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="home" className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Stop Paying the
          <br />
          <span className="text-orange">Fragmentation Tax</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          One intelligent platform for every family&apos;s documents, finances,
          and future. AI-powered. Bank-grade secure. Starting at $149/yr.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-orange text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-orange-hover transition-colors w-full sm:w-auto"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-white/60 transition-colors w-full sm:w-auto"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROBLEM                                                           */
/* ------------------------------------------------------------------ */
function Problem() {
  const stats = [
    {
      value: "55%",
      label: "of Americans have NO estate planning documents",
      source: "Caring.com 2025",
    },
    {
      value: "$84.4T",
      label: "wealth transfer coming this generation",
      source: "Industry estimate",
    },
    {
      value: "$727–$3,459/yr",
      label: "cost of disconnected tools today",
      source: "Market analysis",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Families Are Flying Blind
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Critical documents scattered. Financial portfolios fragmented. The
            cost is devastating.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-gray-bg rounded-2xl p-8 text-center border border-gray-100"
            >
              <div className="text-4xl sm:text-[2.75rem] font-bold text-orange whitespace-nowrap">
                {s.value}
              </div>
              <p className="mt-4 text-gray-700 font-medium">{s.label}</p>
              <p className="mt-2 text-sm text-gray-400">{s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SOLUTION                                                          */
/* ------------------------------------------------------------------ */
function Solution() {
  const docFeatures = [
    { icon: "📄", text: "AI Auto-Filing" },
    { icon: "🔔", text: "Smart Reminders" },
    { icon: "🔍", text: "Family Profile Audit" },
    { icon: "👥", text: "Role-Based Sharing" },
    { icon: "🚨", text: "Emergency Access" },
  ];

  const finFeatures = [
    { icon: "📊", text: "Net Worth Dashboard" },
    { icon: "🤖", text: "AI Portfolio Insights" },
    { icon: "⚡", text: "Proactive Alerts" },
    { icon: "🌍", text: "Multi-Currency" },
    { icon: "👨\u200d👩\u200d👧\u200d👦", text: "Family Planning" },
  ];

  const connections = [
    { from: "Insurance", to: "Coverage Analysis" },
    { from: "Deeds", to: "Valuations" },
    { from: "Estate Docs", to: "Beneficiary Tracking" },
  ];

  return (
    <section id="about" className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Two Pillars, One Intelligent Platform
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Document Vault */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center text-xl">
                🔒
              </span>
              <h3 className="text-xl font-bold text-navy">
                Intelligent Document Vault
              </h3>
            </div>
            <ul className="space-y-3">
              {docFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg">{f.icon}</span>
                  <span className="font-medium">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Intelligence */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center text-xl">
                💰
              </span>
              <h3 className="text-xl font-bold text-navy">
                Financial Portfolio Intelligence
              </h3>
            </div>
            <ul className="space-y-3">
              {finFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3 text-gray-700">
                  <span className="text-lg">{f.icon}</span>
                  <span className="font-medium">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connected Intelligence */}
        <div className="mt-10 bg-navy rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold text-center mb-6">
            Connected Intelligence
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {connections.map((c) => (
              <div key={c.from} className="flex flex-col items-center gap-1">
                <span className="font-semibold text-orange">{c.from}</span>
                <span className="text-gray-400">&darr;</span>
                <span className="text-gray-300">{c.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURES                                                          */
/* ------------------------------------------------------------------ */
function Features() {
  const features = [
    {
      icon: "📥",
      title: "AI Auto-Filing",
      desc: "Upload any doc — AI classifies, extracts data, and files it automatically.",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      desc: "Proactive alerts for renewals, expirations, and critical deadlines.",
    },
    {
      icon: "🔍",
      title: "Document Audit",
      desc: "AI scans your family profile and surfaces gaps and outdated items.",
    },
    {
      icon: "👥",
      title: "Role-Based Sharing",
      desc: "Share with family, attorneys, advisors — full audit-log control.",
    },
    {
      icon: "📈",
      title: "Portfolio AI",
      desc: "Plain-English analysis of allocation, risk, and opportunities.",
    },
    {
      icon: "✅",
      title: "Shared To-Dos",
      desc: "Combined document + financial action items for the whole family.",
    },
    {
      icon: "🛡️",
      title: "Bank-Grade Security",
      desc: "End-to-end encryption with zero-knowledge architecture.",
    },
    {
      icon: "🚨",
      title: "Emergency Access",
      desc: "Configurable dead-man's-switch so the right people get access.",
    },
    {
      icon: "🌐",
      title: "Multi-Currency",
      desc: "Track global assets in any currency, across any institution.",
    },
  ];

  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Everything Your Family Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nine powerful features. One unified platform.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-bg rounded-2xl p-6 border border-gray-100 hover:border-navy/20 transition-colors"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                      */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Upload",
      desc: "AI classifies and files your documents instantly.",
      icon: "📤",
    },
    {
      num: "2",
      title: "Connect",
      desc: "Link financial accounts for a unified net worth view.",
      icon: "🔗",
    },
    {
      num: "3",
      title: "Relax",
      desc: "AI monitors, alerts, and connects everything for you.",
      icon: "☕",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three simple steps to your family command center.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {s.num}
              </div>
              <span className="mt-4 block text-3xl">{s.icon}</span>
              <h3 className="mt-3 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  REPLACES SECTION                                                  */
/* ------------------------------------------------------------------ */
function Replaces() {
  const apps = [
    { name: "Dropbox / GDrive", cost: "$120–240/yr" },
    { name: "Trustworthy", cost: "$240–480/yr" },
    { name: "Kubera", cost: "$199–2,499/yr" },
    { name: "Magnifi", cost: "$132–168/yr" },
    { name: "Password Manager", cost: "$36–72/yr" },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Replace 5 Apps With One
          </h2>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Replaced apps */}
          <div className="space-y-3">
            {apps.map((app) => (
              <div
                key={app.name}
                className="flex items-center justify-between bg-red-50 rounded-xl px-6 py-4 border border-red-100"
              >
                <span className="font-medium text-gray-700">{app.name}</span>
                <span className="text-red-500 font-semibold line-through">
                  {app.cost}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-gray-400 font-bold text-2xl">
            = $727–$3,459/yr
          </div>

          {/* VS FamilyOS */}
          <div className="mt-6 bg-navy rounded-2xl p-8 text-center text-white">
            <div className="text-sm font-semibold text-orange uppercase tracking-wide">
              VS
            </div>
            <div className="mt-2 text-3xl sm:text-4xl font-bold">
              FamilyOS{" "}
              <span className="text-orange">$149–$399/yr</span>
            </div>
            <div className="mt-2 text-lg text-gray-300">Save 50–90%</div>
            <a
              href="#pricing"
              className="mt-6 inline-block bg-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-hover transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PRICING                                                           */
/* ------------------------------------------------------------------ */
function Pricing() {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Essential",
      price: 149,
      monthly: 15,
      audience: "Young families",
      popular: false,
      features: [
        "Document vault",
        "Basic portfolio tracking",
        "AI auto-filing",
        "5 shared members",
        "10 GB storage",
      ],
    },
    {
      name: "Premium",
      price: 249,
      monthly: 26,
      audience: "Mass affluent families",
      popular: true,
      features: [
        "Full AI insights suite",
        "Unlimited sharing",
        "Cross-pillar intelligence",
        "Priority support",
        "50 GB storage",
      ],
    },
    {
      name: "Family Pro",
      price: 399,
      monthly: 42,
      audience: "HNW / multi-generational",
      popular: false,
      features: [
        "White-glove onboarding",
        "Advanced estate tools",
        "API access",
        "Dedicated success manager",
        "Unlimited storage",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            14-day free trial on every plan. No credit card required.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-200">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                !annual
                  ? "bg-navy text-white"
                  : "text-gray-600 hover:text-navy"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                annual
                  ? "bg-navy text-white"
                  : "text-gray-600 hover:text-navy"
              }`}
            >
              Annual{" "}
              <span className="text-orange text-xs font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl p-8 border-2 flex flex-col ${
                tier.popular
                  ? "border-orange shadow-lg scale-105"
                  : "border-gray-100"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{tier.audience}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-navy">
                  ${annual ? tier.price : tier.monthly}
                </span>
                <span className="text-gray-500">/{annual ? "yr" : "mo"}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`mt-8 block text-center font-semibold py-3 rounded-lg transition-colors ${
                  tier.popular
                    ? "bg-orange text-white hover:bg-orange-hover"
                    : "bg-navy text-white hover:bg-navy-light"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is my data secure?",
      a: "Absolutely. FamilyOS uses 256-bit AES encryption for all data at rest and TLS 1.3 for data in transit. Our zero-knowledge architecture means we never see your unencrypted data. We undergo regular third-party security audits and comply with SOC 2 Type II standards.",
    },
    {
      q: "What types of documents can I store?",
      a: "You can store any document your family needs: passports, driver's licenses, birth certificates, insurance policies, wills, trusts, tax returns, property deeds, medical records, financial statements, and more. Our AI automatically classifies and organizes them into 12 categories.",
    },
    {
      q: "How does portfolio tracking work?",
      a: "Connect your financial accounts through our secure bank-level integrations. FamilyOS aggregates all assets and liabilities into a unified net worth dashboard with real-time updates, AI-powered insights, and allocation analysis across any currency or institution.",
    },
    {
      q: "Can I share with my spouse, attorney, or advisor?",
      a: "Yes. FamilyOS offers granular role-based sharing with full audit logs. You can give family members, attorneys, financial advisors, or accountants specific access levels — from view-only to full edit — and revoke access at any time.",
    },
    {
      q: "What happens in an emergency?",
      a: "FamilyOS includes a configurable emergency access protocol — a \"dead-man's-switch\" that automatically grants designated family members or trusted contacts access to critical documents and financial information if you're unable to respond for a set period.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Replaces />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

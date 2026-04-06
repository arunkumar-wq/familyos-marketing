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
    <section id="home" className="relative bg-gradient-to-b from-navy to-navy-dark text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-[13px] font-medium px-4 py-1.5 rounded-full mb-8 border border-white/10">
          <span className="w-1.5 h-1.5 bg-teal rounded-full animate-pulse" />
          AI-Powered Family Management
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
          Stop Paying the
          <br />
          <span className="text-teal">Fragmentation Tax</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          One intelligent platform for every family&apos;s documents, finances,
          and future. AI-powered. Bank-grade secure. Starting at $149/yr.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="bg-teal text-white font-semibold px-7 py-3 rounded-lg hover:bg-teal-hover transition-all shadow-[var(--shadow-elevated)] w-full sm:w-auto text-[15px]"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="border border-white/20 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto text-[15px]"
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
    { value: "55%", label: "of Americans have NO estate planning documents", source: "Caring.com 2025" },
    { value: "$84.4T", label: "wealth transfer coming this generation", source: "Industry estimate" },
    { value: "$727\u2013$3,459/yr", label: "cost of disconnected tools today", source: "Market analysis" },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Families Are Flying Blind
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Critical documents scattered. Financial portfolios fragmented.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-gray-bg rounded-xl p-6 sm:p-8 text-center border border-gray-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold text-navy whitespace-nowrap">
                {s.value}
              </div>
              <p className="mt-3 text-sm text-slate-600 font-medium leading-snug">{s.label}</p>
              <p className="mt-2 text-[11px] text-slate-400 uppercase tracking-wider">{s.source}</p>
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
    { from: "Insurance", to: "Coverage Analysis", icon: "🏥" },
    { from: "Deeds", to: "Valuations", icon: "🏠" },
    { from: "Estate Docs", to: "Beneficiary Tracking", icon: "📜" },
  ];

  return (
    <section id="about" className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight text-center">
          Two Pillars, One Intelligent Platform
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[{ title: "Intelligent Document Vault", icon: "🔒", items: docFeatures },
            { title: "Financial Portfolio Intelligence", icon: "💰", items: finFeatures }].map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-xl p-6 sm:p-8 border border-gray-border shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center text-lg">{pillar.icon}</span>
                <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {pillar.items.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-slate-600 text-sm">
                    <span>{f.icon}</span>
                    <span className="font-medium">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-gradient-to-br from-navy to-navy-dark rounded-xl p-6 sm:p-8 text-white shadow-[var(--shadow-elevated)]">
          <h3 className="text-lg font-bold text-center mb-5">Connected Intelligence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {connections.map((c) => (
              <div key={c.from} className="flex flex-col items-center gap-1.5">
                <span className="text-xl">{c.icon}</span>
                <span className="font-semibold text-teal text-sm">{c.from}</span>
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                <span className="text-slate-300 text-sm">{c.to}</span>
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
    { icon: "📥", title: "AI Auto-Filing", desc: "Upload any doc \u2014 AI classifies, extracts data, and files it automatically." },
    { icon: "🔔", title: "Smart Reminders", desc: "Proactive alerts for renewals, expirations, and critical deadlines." },
    { icon: "🔍", title: "Document Audit", desc: "AI scans your family profile and surfaces gaps and outdated items." },
    { icon: "👥", title: "Role-Based Sharing", desc: "Share with family, attorneys, advisors \u2014 full audit-log control." },
    { icon: "📈", title: "Portfolio AI", desc: "Plain-English analysis of allocation, risk, and opportunities." },
    { icon: "✅", title: "Shared To-Dos", desc: "Combined document + financial action items for the whole family." },
    { icon: "🛡️", title: "Bank-Grade Security", desc: "End-to-end encryption with zero-knowledge architecture." },
    { icon: "🚨", title: "Emergency Access", desc: "Configurable dead-man\u2019s-switch so the right people get access." },
    { icon: "🌐", title: "Multi-Currency", desc: "Track global assets in any currency, across any institution." },
  ];

  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Everything Your Family Needs
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Nine powerful features. One unified platform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-bg rounded-xl p-5 sm:p-6 border border-gray-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-teal/20 transition-all"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-[15px] font-bold text-navy">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
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
    { num: "1", title: "Upload", desc: "AI classifies and files your documents instantly.", icon: "📤" },
    { num: "2", title: "Connect", desc: "Link financial accounts for a unified net worth view.", icon: "🔗" },
    { num: "3", title: "Relax", desc: "AI monitors, alerts, and connects everything for you.", icon: "☕" },
  ];

  return (
    <section id="how-it-works" className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">How It Works</h2>
          <p className="mt-3 text-base text-slate-500">Three simple steps to your family command center.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto w-14 h-14 bg-teal rounded-xl flex items-center justify-center text-white text-xl font-bold">
                {s.num}
              </div>
              <span className="mt-4 block text-2xl">{s.icon}</span>
              <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500 max-w-[240px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  REPLACES                                                          */
/* ------------------------------------------------------------------ */
function Replaces() {
  const apps = [
    { name: "Dropbox / GDrive", cost: "$120\u2013240/yr" },
    { name: "Trustworthy", cost: "$240\u2013480/yr" },
    { name: "Kubera", cost: "$199\u20132,499/yr" },
    { name: "Magnifi", cost: "$132\u2013168/yr" },
    { name: "Password Manager", cost: "$36\u201372/yr" },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight text-center">
          Replace 5 Apps With One
        </h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            {apps.map((app) => (
              <div key={app.name} className="flex items-center justify-between bg-slate-50 rounded-lg px-5 py-3 border border-gray-border">
                <span className="text-sm font-medium text-slate-600">{app.name}</span>
                <span className="text-sm text-slate-400 line-through">{app.cost}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-slate-400 font-bold text-lg">= $727\u2013$3,459/yr</div>

          <div className="mt-5 bg-gradient-to-br from-navy to-navy-dark rounded-xl p-7 sm:p-8 text-center text-white shadow-[var(--shadow-elevated)]">
            <div className="text-[11px] font-bold text-teal uppercase tracking-widest">VS</div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold">
              FamilyOS <span className="text-teal">$149\u2013$399/yr</span>
            </div>
            <div className="mt-1.5 text-sm text-slate-300">Save 50\u201390%</div>
            <a href="#pricing" className="mt-5 inline-block bg-teal text-white font-semibold px-7 py-2.5 rounded-lg hover:bg-teal-hover transition-all text-sm">
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
    { name: "Essential", price: 149, monthly: 15, audience: "Young families", popular: false, features: ["Document vault", "Basic portfolio tracking", "AI auto-filing", "5 shared members", "10 GB storage"] },
    { name: "Premium", price: 249, monthly: 26, audience: "Mass affluent families", popular: true, features: ["Full AI insights suite", "Unlimited sharing", "Cross-pillar intelligence", "Priority support", "50 GB storage"] },
    { name: "Family Pro", price: 399, monthly: 42, audience: "HNW / multi-generational", popular: false, features: ["White-glove onboarding", "Advanced estate tools", "API access", "Dedicated success manager", "Unlimited storage"] },
  ];

  return (
    <section id="pricing" className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-base text-slate-500">14-day free trial on every plan. No credit card required.</p>

          <div className="mt-7 inline-flex items-center bg-white rounded-full p-1 border border-gray-border shadow-[var(--shadow-card)]">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${!annual ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${annual ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>Annual <span className="text-teal text-[11px] font-bold">Save 20%</span></button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative bg-white rounded-xl p-6 sm:p-7 flex flex-col transition-shadow ${tier.popular ? "border-2 border-teal shadow-[var(--shadow-elevated)] md:scale-[1.03]" : "border border-gray-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"}`}>
              {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] font-bold px-3.5 py-0.5 rounded-full">MOST POPULAR</div>}
              <h3 className="text-lg font-bold text-navy">{tier.name}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{tier.audience}</p>
              <div className="mt-5">
                <span className="text-3xl sm:text-4xl font-bold text-navy">${annual ? tier.price : tier.monthly}</span>
                <span className="text-slate-400 text-sm">/{annual ? "yr" : "mo"}</span>
              </div>
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
    { q: "Is my data secure?", a: "Absolutely. FamilyOS uses 256-bit AES encryption for all data at rest and TLS 1.3 for data in transit. Our zero-knowledge architecture means we never see your unencrypted data. We undergo regular third-party security audits and comply with SOC 2 Type II standards." },
    { q: "What types of documents can I store?", a: "You can store any document your family needs: passports, driver\u2019s licenses, birth certificates, insurance policies, wills, trusts, tax returns, property deeds, medical records, financial statements, and more. Our AI automatically classifies and organizes them into 12 categories." },
    { q: "How does portfolio tracking work?", a: "Connect your financial accounts through our secure bank-level integrations. FamilyOS aggregates all assets and liabilities into a unified net worth dashboard with real-time updates, AI-powered insights, and allocation analysis across any currency or institution." },
    { q: "Can I share with my spouse, attorney, or advisor?", a: "Yes. FamilyOS offers granular role-based sharing with full audit logs. You can give family members, attorneys, financial advisors, or accountants specific access levels \u2014 from view-only to full edit \u2014 and revoke access at any time." },
    { q: "What happens in an emergency?", a: "FamilyOS includes a configurable emergency access protocol \u2014 a \"dead-man\u2019s-switch\" that automatically grants designated family members or trusted contacts access to critical documents and financial information if you\u2019re unable to respond for a set period." },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-border rounded-xl overflow-hidden bg-gray-bg/40">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-bg transition-colors"
              >
                <span className="font-semibold text-navy text-sm">{faq.q}</span>
                <svg className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
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

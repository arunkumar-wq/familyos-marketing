"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-20 sm:pt-28 pb-0 text-center hero-animate">
        <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur text-[13px] font-medium px-4 py-1.5 rounded-full mb-8 border border-white/[0.08] text-slate-300">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          AI-Powered Family Management
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.08]">
          One platform for your
          <br />
          family&apos;s <span className="text-teal">entire life</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-md mx-auto leading-relaxed">
          Documents. Finances. Estate plans. AI-powered, bank-grade secure, and built for families. Starting at $149/yr.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={APP_URL} className="btn-press bg-teal text-white font-medium px-6 py-2.5 rounded-full hover:bg-teal-hover transition-all w-full sm:w-auto text-[15px]">
            Start free trial
          </a>
          <a href="#how-it-works" className="btn-press border border-slate-700 text-slate-300 font-medium px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all w-full sm:w-auto text-[15px]">
            How it works
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            14-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            256-bit encryption
          </span>
        </div>

        {/* Product screenshot */}
        <div className="mt-12 sm:mt-14 relative mx-auto max-w-4xl animate-float">
          <div className="rounded-t-xl overflow-hidden border border-white/[0.08] border-b-0 shadow-2xl shadow-black/40">
            <div className="bg-slate-800/80 px-4 py-2 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <span className="ml-3 text-[10px] text-slate-500 bg-slate-700/60 rounded px-2.5 py-0.5">app.familyos.com</span>
            </div>
            <Image src="/images/hero-dashboard.jpg" alt="FamilyOS Dashboard" width={1200} height={675} className="w-full h-auto block" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SOCIAL PROOF BAR                                                  */
/* ------------------------------------------------------------------ */
function SocialProof() {
  return (
    <section className="bg-white border-b border-slate-100 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-5">Trusted by 1,000+ families managing $2.8B+ in assets</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-300">
          {["256-bit AES", "SOC 2 Type II", "Zero-Knowledge", "GDPR Ready", "Bank-Grade Security"].map((badge) => (
            <span key={badge} className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {badge}
            </span>
          ))}
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
    { value: "55%", label: "of Americans have no estate planning documents", source: "Caring.com 2025" },
    { value: "$84.4T", label: "in wealth transferring across generations", source: "Industry estimate" },
    { value: "$727+/yr", label: "wasted on disconnected tools", source: "Market analysis" },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">The problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Families are flying blind</h2>
          <p className="mt-4 text-slate-500 text-balance">Critical documents scattered. Financial portfolios fragmented. The cost is devastating.</p>
        </FadeIn>
        <AnimateOnScroll stagger className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.value} className="animate-on-scroll card-hover bg-slate-50 rounded-2xl p-7 text-center border border-slate-100">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 whitespace-nowrap tracking-tight">{s.value}</div>
              <p className="mt-3 text-sm text-slate-600 leading-snug">{s.label}</p>
              <p className="mt-2 text-[11px] text-slate-400 uppercase tracking-wider">{s.source}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SOLUTION                                                          */
/* ------------------------------------------------------------------ */
function Solution() {
  const pillars = [
    {
      title: "Intelligent Document Vault", icon: "🔒",
      items: [
        { icon: "📄", text: "AI Auto-Filing" }, { icon: "🔔", text: "Smart Reminders" },
        { icon: "🔍", text: "Family Profile Audit" }, { icon: "👥", text: "Role-Based Sharing" },
        { icon: "🚨", text: "Emergency Access" },
      ],
    },
    {
      title: "Financial Portfolio Intelligence", icon: "💰",
      items: [
        { icon: "📊", text: "Net Worth Dashboard" }, { icon: "🤖", text: "AI Portfolio Insights" },
        { icon: "⚡", text: "Proactive Alerts" }, { icon: "🌍", text: "Multi-Currency" },
        { icon: "👨\u200d👩\u200d👧\u200d👦", text: "Family Planning" },
      ],
    },
  ];

  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">The solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Two pillars. One platform.</h2>
        </FadeIn>

        <AnimateOnScroll stagger className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="animate-on-scroll card-hover bg-white rounded-2xl p-7 border border-slate-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center text-lg">{pillar.icon}</span>
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {pillar.items.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-slate-600 text-sm">
                    <span>{f.icon}</span><span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </AnimateOnScroll>

        <FadeIn className="mt-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-7 text-white">
            <h3 className="text-lg font-semibold text-center mb-5">Connected Intelligence</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
              {[{ from: "Insurance", to: "Coverage Analysis", icon: "🏥" },
                { from: "Deeds", to: "Valuations", icon: "🏠" },
                { from: "Estate Docs", to: "Beneficiary Tracking", icon: "📜" }].map((c) => (
                <div key={c.from} className="flex flex-col items-center gap-1.5">
                  <span className="text-xl">{c.icon}</span>
                  <span className="font-medium text-teal text-sm">{c.from}</span>
                  <svg className="w-3.5 h-3.5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  <span className="text-slate-400 text-sm">{c.to}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
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
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Everything your family needs</h2>
          <p className="mt-4 text-slate-500">Nine powerful features. One unified platform.</p>
        </FadeIn>
        <AnimateOnScroll stagger className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="animate-on-scroll card-hover bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-teal/20">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-[15px] font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                      */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Upload", desc: "AI classifies and files your documents instantly.", icon: "📤" },
    { num: "02", title: "Connect", desc: "Link financial accounts for a unified net worth view.", icon: "🔗" },
    { num: "03", title: "Relax", desc: "AI monitors, alerts, and connects everything for you.", icon: "☕" },
  ];

  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Three simple steps</h2>
        </FadeIn>
        <AnimateOnScroll stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
          {steps.map((s) => (
            <div key={s.num} className="animate-on-scroll text-center">
              <span className="text-xs font-bold text-teal tracking-widest">{s.num}</span>
              <span className="mt-3 block text-3xl">{s.icon}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500 max-w-[220px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </AnimateOnScroll>
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
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">Save money</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Replace 5 apps with one</h2>
        </FadeIn>

        <div className="mt-14 max-w-2xl mx-auto">
          <AnimateOnScroll stagger className="space-y-2">
            {apps.map((app) => (
              <div key={app.name} className="animate-on-scroll flex items-center justify-between bg-slate-50 rounded-lg px-5 py-3 border border-slate-100">
                <span className="text-sm text-slate-600">{app.name}</span>
                <span className="text-sm text-slate-400 line-through">{app.cost}</span>
              </div>
            ))}
          </AnimateOnScroll>
          <FadeIn className="mt-3 text-center text-slate-400 font-semibold">
            <span>= $727\u2013$3,459/yr</span>
          </FadeIn>

          <FadeIn className="mt-5">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8 text-center text-white">
              <p className="text-[11px] font-semibold text-teal uppercase tracking-widest">Instead</p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold">FamilyOS <span className="text-teal">$149\u2013$399/yr</span></p>
              <p className="mt-1.5 text-sm text-slate-400">Save 50\u201390% every year</p>
              <a href="#pricing" className="btn-press mt-5 inline-block bg-teal text-white font-medium px-6 py-2.5 rounded-full hover:bg-teal-hover transition-all text-sm">
                See pricing
              </a>
            </div>
          </FadeIn>
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
    { name: "Premium", price: 249, monthly: 26, audience: "Growing families", popular: true, features: ["Full AI insights suite", "Unlimited sharing", "Cross-pillar intelligence", "Priority support", "50 GB storage"] },
    { name: "Family Pro", price: 399, monthly: 42, audience: "Multi-generational", popular: false, features: ["White-glove onboarding", "Advanced estate tools", "API access", "Dedicated manager", "Unlimited storage"] },
  ];

  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-500">14-day free trial on every plan. No credit card required.</p>
          <div className="mt-7 inline-flex items-center bg-white rounded-full p-1 border border-slate-200 shadow-sm">
            <button onClick={() => setAnnual(false)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}>Annual <span className="text-teal text-[11px] font-semibold">-20%</span></button>
          </div>
        </FadeIn>

        <AnimateOnScroll stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`animate-on-scroll card-hover relative bg-white rounded-2xl p-7 flex flex-col ${tier.popular ? "border-2 border-teal shadow-[var(--shadow-elevated)] md:scale-[1.03]" : "border border-slate-200"}`}>
              {tier.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-[11px] font-semibold px-3 py-0.5 rounded-full">Most popular</div>}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{tier.audience}</p>
              <div className="mt-5">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">${annual ? tier.price : tier.monthly}</span>
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
              <a href={APP_URL} className={`btn-press mt-7 block text-center font-medium py-2.5 rounded-full text-sm transition-all ${tier.popular ? "bg-teal text-white hover:bg-teal-hover" : "bg-slate-900 text-white hover:bg-slate-800"}`}>
                Start free trial
              </a>
            </div>
          ))}
        </AnimateOnScroll>
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
    { q: "Is my data secure?", a: "Absolutely. FamilyOS uses 256-bit AES encryption for all data at rest and TLS 1.3 for data in transit. Our zero-knowledge architecture means we never see your unencrypted data. We comply with SOC 2 Type II standards." },
    { q: "What documents can I store?", a: "Passports, driver\u2019s licenses, birth certificates, insurance policies, wills, trusts, tax returns, property deeds, medical records, financial statements, and more. Our AI organizes them into 12 categories." },
    { q: "How does portfolio tracking work?", a: "Connect your financial accounts through secure bank-level integrations. FamilyOS aggregates all assets and liabilities into a unified dashboard with real-time updates and AI-powered insights." },
    { q: "Can I share with my spouse or advisor?", a: "Yes. FamilyOS offers granular role-based sharing with full audit logs. Give family members, attorneys, or financial advisors specific access levels and revoke anytime." },
    { q: "What happens in an emergency?", a: "FamilyOS includes a configurable emergency access protocol that automatically grants designated contacts access to critical documents and financial information if you\u2019re unable to respond." },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <FadeIn className="text-center">
          <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Common questions</h2>
        </FadeIn>
        <AnimateOnScroll stagger className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="animate-on-scroll border border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors">
                <span className="font-medium text-slate-900 text-sm">{faq.q}</span>
                <svg className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  BOTTOM CTA                                                        */
/* ------------------------------------------------------------------ */
function BottomCTA() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-20 sm:py-28">
      <FadeIn className="max-w-xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Ready to organize your family&apos;s future?
        </h2>
        <p className="mt-4 text-slate-400">
          Join 1,000+ families who replaced 5 apps with one. Start your free trial today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={APP_URL} className="btn-press bg-teal text-white font-medium px-7 py-3 rounded-full hover:bg-teal-hover transition-all w-full sm:w-auto text-[15px]">
            Start free trial
          </a>
          <a href="/pricing" className="btn-press border border-slate-700 text-slate-300 font-medium px-7 py-3 rounded-full hover:bg-slate-800 transition-all w-full sm:w-auto text-[15px]">
            View pricing
          </a>
        </div>
      </FadeIn>
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
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Replaces />
        <Pricing />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}

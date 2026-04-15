"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ================================================================== */
/*  REUSABLE                                                          */
/* ================================================================== */
function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`eyebrow mb-4 ${className}`}>{children}</div>;
}

/* ================================================================== */
/*  1. HERO                                                           */
/* ================================================================== */
function Hero() {
  return (
    <section className="bg-white pt-14 pb-14 sm:pt-16 sm:pb-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center hero-animate">
          {/* Text */}
          <div>
            <Eyebrow className="mb-5">AI-Powered Family Management</Eyebrow>
            <h1 className="font-display text-[28px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[1.15] text-[var(--color-text-1)] font-normal mb-5">
              Your family&apos;s finances and documents —{" "}
              <em className="italic text-[var(--color-teal-dark)]">in one calm place.</em>
            </h1>
            <p className="text-[16px] sm:text-[17px] text-[var(--color-text-2)] leading-[1.65] max-w-[440px] mb-8">
              The intelligent system that organizes every document, tracks every asset, and acts before
              you even ask. Built for families who take their future seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <a
                href={APP_URL}
                className="btn-press inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold text-base px-8 py-3.5 rounded-[10px] hover:bg-teal-dark transition-all w-full sm:w-auto"
                style={{ boxShadow: "0 2px 8px rgba(46,196,182,0.25)" }}
              >
                Start for free
              </a>
              <a
                href="#showcase"
                className="btn-press inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-text-1)] font-semibold text-base px-8 py-3.5 rounded-[10px] border-[1.5px] border-[var(--color-border)] hover:border-[var(--color-text-3)] hover:bg-[var(--color-surface)] transition-all w-full sm:w-auto"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-text-2)]">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch demo
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-[var(--color-text-3)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Bank-level encryption
              <span style={{ color: "var(--color-border)" }}>·</span>
              No data selling
              <span style={{ color: "var(--color-border)" }}>·</span>
              SOC 2 Type II
            </div>
          </div>

          {/* Visual: dashboard mockup with floating cards — visible on all sizes */}
          <div className="relative mockup-reveal">
            {/* Floating card top right */}
            <div
              className="hero-float-card top-[-8px] right-[-4px] sm:top-[-12px] sm:right-[-16px] max-w-[220px] sm:max-w-none"
              style={{ borderLeft: "3px solid var(--color-amber)" }}
            >
              <div className="text-[11px] sm:text-[12px] font-semibold text-[var(--color-text-1)] mb-0.5">
                Passport expires in 34 days
              </div>
              <div className="text-[10px] sm:text-[11px] text-[var(--color-text-3)]">
                Sarah Miller — Renewal recommended
              </div>
            </div>
            {/* Floating card bottom left */}
            <div
              className="hero-float-card bottom-[16px] left-[-4px] sm:bottom-[24px] sm:left-[-24px] max-w-[200px] sm:max-w-none"
              style={{ borderLeft: "3px solid var(--color-teal)", animationDelay: "-1.5s" }}
            >
              <div className="text-[11px] sm:text-[12px] font-semibold mb-0.5" style={{ color: "#0F6E56" }}>
                AI: Review home insurance
              </div>
              <div className="text-[10px] sm:text-[11px] text-[var(--color-text-3)]">
                Coverage may need updating
              </div>
            </div>

            <div className="dashboard-mockup">
              <div className="dashboard-titlebar">
                <div className="dot dot-red" />
                <div className="dot dot-yellow" />
                <div className="dot dot-green" />
                <div
                  className="flex-1 text-center text-[12px] text-[var(--color-text-3)] py-1 px-4 rounded-md mx-8"
                  style={{ background: "var(--color-surface)" }}
                >
                  app.linio.com
                </div>
              </div>
              <div
                className="p-3 sm:p-5 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 min-h-[320px] sm:min-h-[340px]"
                style={{ background: "var(--color-surface)" }}
              >
                {/* Sidebar — hidden on mobile */}
                <div className="hidden md:block bg-white rounded-[12px] p-4 border border-[var(--color-border-light)]">
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Documents", active: false },
                    { label: "Portfolio", active: false },
                    { label: "Family", active: false },
                    { label: "AI Copilot", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-[8px] text-[13px] font-medium mb-0.5"
                      style={{
                        background: item.active ? "var(--color-teal-light)" : "transparent",
                        color: item.active ? "#0F6E56" : "var(--color-text-2)",
                      }}
                    >
                      <span className="w-4 h-4 rounded-[3px] opacity-50" style={{ background: "currentColor" }} />
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="flex flex-col gap-3">
                  <div className="bg-white rounded-[12px] p-4 px-5 border border-[var(--color-border-light)]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-[12px] font-medium text-[var(--color-text-3)] mb-1">
                          Net Worth
                        </div>
                        <div className="text-[22px] sm:text-[28px] font-bold text-[var(--color-text-1)] tracking-[-0.02em] leading-none">
                          $2,437,850
                        </div>
                      </div>
                      <div
                        className="inline-flex items-center gap-1 text-[12px] font-semibold px-2 py-0.5 rounded-md"
                        style={{ background: "var(--color-green-light)", color: "var(--color-green)" }}
                      >
                        ↑ 12.3%
                      </div>
                    </div>
                    <svg width="100%" height="56" viewBox="0 0 400 56" fill="none" preserveAspectRatio="none">
                      <path
                        d="M0 48 Q40 42,70 38 T140 30 T210 26 T280 18 T350 14 T400 8"
                        stroke="#2EC4B6"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M0 48 Q40 42,70 38 T140 30 T210 26 T280 18 T350 14 T400 8 V56 H0Z"
                        fill="#2EC4B6"
                        opacity="0.06"
                      />
                    </svg>
                    <div className="flex rounded-[4px] overflow-hidden h-[6px] mt-2.5">
                      <div style={{ width: "35%", background: "var(--color-navy)", opacity: 0.75 }} />
                      <div style={{ width: "28%", background: "var(--color-teal)" }} />
                      <div style={{ width: "18%", background: "var(--color-amber)" }} />
                      <div style={{ width: "12%", background: "#7F77DD" }} />
                      <div style={{ width: "7%", background: "var(--color-border)" }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: "Documents", val: "47" },
                      { label: "Accounts", val: "7" },
                      { label: "Family", val: "4" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="bg-white border border-[var(--color-border-light)] rounded-[8px] py-3 px-3.5"
                      >
                        <div className="text-[11px] text-[var(--color-text-3)] mb-1">{s.label}</div>
                        <div className="text-[18px] font-bold text-[var(--color-text-1)]">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  2. PROBLEM                                                        */
/* ================================================================== */
function Problem() {
  const stats = [
    {
      iconBg: "var(--color-red-light)",
      iconColor: "#E74C3C",
      stat: "68%",
      label: "of families have no centralized system for important documents",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      iconBg: "var(--color-amber-light)",
      iconColor: "#D4872E",
      stat: "$2.3M",
      label: "in assets go unclaimed every year due to poor organization",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      iconBg: "#E6F1FB",
      iconColor: "#2E6BAC",
      stat: "4.7 hrs",
      label: "per month wasted searching for documents and financial details",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>The Reality</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Most families are one emergency away from chaos.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Important information is scattered across apps, emails, filing cabinets, and sticky notes.
            Nobody has the full picture.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div
              key={s.stat}
              className="animate-on-scroll card-hover bg-white border border-[var(--color-border)] rounded-[16px] p-9 px-7 text-center"
            >
              <div
                className="w-12 h-12 mx-auto mb-5 rounded-[12px] flex items-center justify-center"
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                {s.icon}
              </div>
              <div className="text-[36px] font-bold text-[var(--color-text-1)] tracking-[-0.02em] leading-none mb-2">
                {s.stat}
              </div>
              <div className="text-[15px] text-[var(--color-text-2)] leading-[1.5]">{s.label}</div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  3. SOLUTION                                                       */
/* ================================================================== */
function Solution() {
  return (
    <section className="py-14 sm:py-24 bg-white" id="about">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>The LINIO Way</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Everything organized. Everyone protected.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Two powerful systems &mdash; a smart document vault and a live financial portfolio &mdash;
            working together in one intelligent platform.
          </p>
        </FadeIn>

        {/* Row 1 */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 sm:mb-20">
          {/* Visual */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[20px] p-6" style={{ boxShadow: "var(--shadow-md)" }}>
            <div className="text-[13px] font-semibold text-[var(--color-text-1)] mb-3.5">
              Smart Document Vault
            </div>
            {[
              {
                bg: "var(--color-amber-light)",
                stroke: "#D4872E",
                name: "Home Insurance — State Farm",
                meta: "Uploaded Jan 12 · Insurance",
                badgeBg: "var(--color-amber-light)",
                badgeColor: "#8B5E14",
                badge: "Expires soon",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                bg: "#E6F1FB",
                stroke: "#2E6BAC",
                name: "Last Will and Testament",
                meta: "Uploaded Mar 3 · Legal",
                badgeBg: "var(--color-green-light)",
                badgeColor: "#1E7B3E",
                badge: "Current",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                ),
              },
              {
                bg: "var(--color-teal-light)",
                stroke: "#0F6E56",
                name: "Passport — Sarah Miller",
                meta: "Uploaded Dec 8 · Identity",
                badgeBg: "var(--color-green-light)",
                badgeColor: "#1E7B3E",
                badge: "Current",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                ),
              },
              {
                bg: "#EEEDFE",
                stroke: "#534AB7",
                name: "Brokerage Statement Q4",
                meta: "Uploaded Apr 1 · Financial",
                badgeBg: "var(--color-green-light)",
                badgeColor: "#1E7B3E",
                badge: "Current",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  </svg>
                ),
              },
            ].map((d) => (
              <div
                key={d.name}
                className="flex items-center gap-3 p-3 px-4 bg-white border border-[var(--color-border-light)] rounded-[12px] mb-2 last:mb-0"
              >
                <div
                  className="w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0"
                  style={{ background: d.bg, color: d.stroke }}
                >
                  {d.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-[var(--color-text-1)] truncate">{d.name}</div>
                  <div className="text-[11px] text-[var(--color-text-3)] mt-px">{d.meta}</div>
                </div>
                <span
                  className="text-[10px] font-semibold py-[3px] px-2 rounded-md whitespace-nowrap"
                  style={{ background: d.badgeBg, color: d.badgeColor }}
                >
                  {d.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <Eyebrow className="mb-3">Smart Vault</Eyebrow>
            <h3 className="font-display text-[26px] sm:text-[32px] font-normal leading-[1.2] mb-4 text-[var(--color-text-1)]">
              Every document, found in seconds.
            </h3>
            <p className="text-base text-[var(--color-text-2)] leading-[1.65] mb-5">
              Upload, scan, or let AI pull documents from your email. Everything is auto-categorized,
              tagged, and instantly searchable &mdash; with expiration tracking built in.
            </p>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                "AI auto-categorization",
                "Email sync & document rescue",
                "Expiration & renewal alerts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text-1)]">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-teal-light)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Row 2 (reverse) */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text on left for desktop, stays in source order on mobile */}
          <div className="md:order-2 order-1">
            <Eyebrow className="mb-3">Portfolio View</Eyebrow>
            <h3 className="font-display text-[26px] sm:text-[32px] font-normal leading-[1.2] mb-4 text-[var(--color-text-1)]">
              Your complete financial picture.
            </h3>
            <p className="text-base text-[var(--color-text-2)] leading-[1.65] mb-5">
              Banks, brokerages, crypto, real estate &mdash; all connected in one live view. Real-time
              valuations and allocation tracking so you always know where you stand.
            </p>
            <ul className="flex flex-col gap-2.5 list-none">
              {[
                "Multi-account sync via Plaid",
                "Real-time market valuations",
                "Asset allocation visualization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text-1)]">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-teal-light)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual on right for desktop, but order-2 on mobile */}
          <div className="md:order-1 order-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[20px] p-6" style={{ boxShadow: "var(--shadow-md)" }}>
            <div className="text-[13px] font-semibold text-[var(--color-text-1)] mb-3.5">
              Financial Portfolio
            </div>
            {[
              { name: "Primary Residence", change: "↑ 3.2% this year", changeColor: "var(--color-green)", val: "$850,000" },
              { name: "Vanguard S&P 500 ETF", change: "↑ 18.7% this year", changeColor: "var(--color-green)", val: "$412,300" },
              { name: "Chase Savings", change: "— 4.2% APY", changeColor: "var(--color-text-3)", val: "$185,000" },
              { name: "Bitcoin", change: "↓ 8.1% this month", changeColor: "var(--color-red)", val: "$142,500" },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white border border-[var(--color-border-light)] rounded-[12px] p-4 mb-2.5 last:mb-0"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-[var(--color-text-1)]">{p.name}</div>
                    <div className="text-[11px] font-semibold mt-0.5" style={{ color: p.changeColor }}>
                      {p.change}
                    </div>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-text-1)] tabular-nums">{p.val}</div>
                </div>
              </div>
            ))}
            <div className="mt-3.5">
              <div className="flex rounded-[4px] overflow-hidden h-2">
                <div style={{ width: "35%", background: "var(--color-navy)", opacity: 0.75, borderRadius: "4px 0 0 4px" }} />
                <div style={{ width: "28%", background: "var(--color-teal)" }} />
                <div style={{ width: "18%", background: "var(--color-amber)" }} />
                <div style={{ width: "12%", background: "#7F77DD" }} />
                <div style={{ width: "7%", background: "var(--color-border)", borderRadius: "0 4px 4px 0" }} />
              </div>
              <div className="flex gap-3.5 mt-2 flex-wrap">
                {[
                  { label: "Real Estate 35%", color: "var(--color-navy)", opacity: 0.75 },
                  { label: "Stocks 28%", color: "var(--color-teal)" },
                  { label: "Cash 18%", color: "var(--color-amber)" },
                  { label: "Crypto 12%", color: "#7F77DD" },
                ].map((l) => (
                  <span
                    key={l.label}
                    className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-3)]"
                  >
                    <span
                      className="w-2 h-2 rounded-sm inline-block"
                      style={{ background: l.color, opacity: l.opacity ?? 1 }}
                    />
                    {l.label}
                  </span>
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
/*  4. MAGIC                                                          */
/* ================================================================== */
function Magic() {
  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>The Magic</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Documents and finances, finally connected.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            LINIO doesn&apos;t just store things &mdash; it understands the relationship between your
            documents and your money.
          </p>
        </FadeIn>

        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div className="animate-on-scroll card-hover bg-white border border-[var(--color-border)] rounded-[20px] p-10 px-8 relative overflow-hidden">
            <Eyebrow className="mb-3">Documents → Insights</Eyebrow>
            <h3 className="font-display text-[24px] sm:text-[26px] font-normal leading-[1.25] mb-3 text-[var(--color-text-1)]">
              Your insurance policy knows your portfolio.
            </h3>
            <p className="text-[15px] text-[var(--color-text-2)] leading-[1.6] mb-6 max-w-[320px]">
              When your home value rises, LINIO flags that your coverage may need updating.
              Connections that used to require an advisor happen automatically.
            </p>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-[12px] p-4">
              <div className="flex items-center gap-3 my-4">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "var(--color-amber-light)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4872E" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="flex-1 h-0.5 rounded-[1px]" style={{ background: "linear-gradient(90deg, var(--color-teal), var(--color-border))" }} />
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "var(--color-teal-light)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2">
                    <path d="M12 2L14 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="flex-1 h-0.5 rounded-[1px]" style={{ background: "linear-gradient(90deg, var(--color-teal), var(--color-border))" }} />
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0" style={{ background: "var(--color-green-light)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between px-1">
                <span className="text-[11px] font-semibold text-[var(--color-text-3)]">Insurance doc</span>
                <span className="text-[11px] font-semibold text-[var(--color-text-3)]">AI analysis</span>
                <span className="text-[11px] font-semibold text-[var(--color-text-3)]">Action</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="animate-on-scroll card-hover bg-white border border-[var(--color-border)] rounded-[20px] p-10 px-8 relative overflow-hidden">
            <Eyebrow className="mb-3">AI Copilot</Eyebrow>
            <h3 className="font-display text-[24px] sm:text-[26px] font-normal leading-[1.25] mb-3 text-[var(--color-text-1)]">
              Ask anything. Get answers instantly.
            </h3>
            <p className="text-[15px] text-[var(--color-text-2)] leading-[1.6] mb-6 max-w-[320px]">
              A copilot that knows your family&apos;s full context &mdash; every document, every account,
              every deadline. No more searching. Just ask.
            </p>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-[12px] p-4">
              <div
                className="rounded-[8px] py-2.5 px-3.5 text-[13px] text-[var(--color-text-2)] mb-2"
                style={{ background: "var(--color-surface-2)" }}
              >
                When does our home insurance renew?
              </div>
              <div
                className="rounded-[8px] py-2.5 px-3.5 text-[13px] mb-2.5"
                style={{ background: "var(--color-teal-light)", color: "#085041" }}
              >
                Your State Farm policy renews Feb 14, 2026. Current premium: $2,400/yr. Based on your
                home&apos;s appreciation, consider increasing liability coverage.
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {["Review policy", "Compare rates"].map((label) => (
                  <span
                    key={label}
                    className="text-[11px] py-1 px-2.5 border border-[var(--color-border)] rounded-md text-[var(--color-text-3)] cursor-pointer"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  5. PRODUCT SHOWCASE                                               */
/* ================================================================== */
function Showcase() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const tabs = ["Dashboard", "Documents", "Portfolio", "Family", "AI Copilot"];

  return (
    <section className="py-14 sm:py-24 bg-white" id="showcase">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>Product</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            See what control looks like.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            A dashboard designed for clarity. Every screen answers your most important question in
            under two seconds.
          </p>
        </FadeIn>

        <FadeIn>
          <div
            className="max-w-[1040px] mx-auto bg-white border border-[var(--color-border)] rounded-[20px] overflow-hidden"
            style={{ boxShadow: "var(--shadow-xl)" }}
          >
            {/* Tabs */}
            <div className="flex justify-start sm:justify-center border-b border-[var(--color-border-light)] px-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="py-3.5 px-5 text-sm font-medium border-b-2 cursor-pointer transition-all whitespace-nowrap"
                  style={{
                    color: activeTab === tab ? "var(--color-text-1)" : "var(--color-text-3)",
                    borderBottomColor: activeTab === tab ? "var(--color-teal)" : "transparent",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Body */}
            <div className="p-6 min-h-[400px]" style={{ background: "var(--color-surface)" }}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_260px] gap-4 min-h-[380px]">
                {/* Sidebar — hidden on mobile */}
                <div className="hidden md:block bg-white rounded-[12px] py-5 px-4 border border-[var(--color-border-light)]">
                  <div className="font-bold text-base text-[var(--color-navy)] mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-[5px] inline-block" style={{ background: "var(--color-navy)" }} />
                    LINIO
                  </div>
                  {[
                    "Dashboard",
                    "Documents",
                    "Portfolio",
                    "Family",
                    "AI Copilot",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 py-2.5 px-3 rounded-[8px] text-sm font-medium mb-0.5 cursor-pointer"
                      style={{
                        background: i === 0 ? "var(--color-teal-light)" : "transparent",
                        color: i === 0 ? "#0F6E56" : "var(--color-text-2)",
                      }}
                    >
                      <span className="w-4.5 h-4.5 opacity-50 inline-block" style={{ width: 18, height: 18, background: "currentColor", borderRadius: 3 }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Center: net worth + stats */}
                <div className="flex flex-col gap-3.5">
                  <div className="bg-white rounded-[12px] p-4 px-5 border border-[var(--color-border-light)]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-[12px] font-medium text-[var(--color-text-3)] mb-1">Total Net Worth</div>
                        <div className="text-[22px] sm:text-[28px] font-bold text-[var(--color-text-1)] tracking-[-0.02em] leading-none">
                          $2,437,850
                        </div>
                      </div>
                      <div
                        className="inline-flex items-center gap-1 text-[12px] font-semibold py-0.5 px-2 rounded-md"
                        style={{ background: "var(--color-green-light)", color: "var(--color-green)" }}
                      >
                        ↑ 12.3% YoY
                      </div>
                    </div>
                    <svg width="100%" height="80" viewBox="0 0 500 80" fill="none" preserveAspectRatio="none" className="mt-2">
                      <path d="M0 68 Q50 60,90 55 T180 44 T270 38 T360 24 T450 18 T500 10" stroke="#2EC4B6" strokeWidth="2" />
                      <path d="M0 68 Q50 60,90 55 T180 44 T270 38 T360 24 T450 18 T500 10 V80 H0Z" fill="#2EC4B6" opacity="0.05" />
                    </svg>
                    <div className="flex rounded-[4px] overflow-hidden h-2 mt-3">
                      <div style={{ width: "35%", background: "var(--color-navy)", opacity: 0.75, borderRadius: "4px 0 0 4px" }} />
                      <div style={{ width: "28%", background: "var(--color-teal)" }} />
                      <div style={{ width: "18%", background: "var(--color-amber)" }} />
                      <div style={{ width: "12%", background: "#7F77DD" }} />
                      <div style={{ width: "7%", background: "var(--color-border)", borderRadius: "0 4px 4px 0" }} />
                    </div>
                    <div className="flex gap-3.5 mt-2 flex-wrap">
                      {[
                        { label: "Real Estate", color: "var(--color-navy)", opacity: 0.75 },
                        { label: "Stocks", color: "var(--color-teal)" },
                        { label: "Cash", color: "var(--color-amber)" },
                        { label: "Crypto", color: "#7F77DD" },
                      ].map((l) => (
                        <span key={l.label} className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-3)]">
                          <span className="w-2 h-2 rounded-sm inline-block" style={{ background: l.color, opacity: l.opacity ?? 1 }} />
                          {l.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: "Documents", val: "47" },
                      { label: "Linked Accounts", val: "7" },
                      { label: "Family Members", val: "4" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white border border-[var(--color-border-light)] rounded-[8px] py-3 px-3.5">
                        <div className="text-[11px] text-[var(--color-text-3)] mb-1">{s.label}</div>
                        <div className="text-[18px] font-bold text-[var(--color-text-1)]">{s.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: insights — hidden on mobile */}
                <div className="hidden md:flex flex-col gap-3">
                  <div
                    className="bg-white border border-[var(--color-border-light)] rounded-[12px] py-3.5 px-4"
                    style={{ borderLeft: "3px solid var(--color-teal)" }}
                  >
                    <div className="flex items-center gap-1 text-[11px] font-semibold mb-1.5" style={{ color: "var(--color-teal)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L14 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
                      </svg>
                      AI Insight
                    </div>
                    <div className="text-[13px] text-[var(--color-text-2)] leading-[1.5]">
                      Your stock allocation has drifted to 72%. Consider rebalancing to your 60% target to reduce concentration risk.
                    </div>
                  </div>
                  <div
                    className="bg-white border border-[var(--color-border-light)] rounded-[12px] py-3.5 px-4"
                    style={{ borderLeft: "3px solid var(--color-amber)" }}
                  >
                    <div className="flex items-center gap-1 text-[11px] font-semibold mb-1.5" style={{ color: "var(--color-amber)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      Reminder
                    </div>
                    <div className="text-[13px] text-[var(--color-text-2)] leading-[1.5]">
                      Home insurance renews in 18 days. Premium: $2,400/yr. Review coverage before auto-renewal.
                    </div>
                  </div>

                  <div className="text-[12px] font-semibold text-[var(--color-text-3)] mb-2 mt-1">Upcoming</div>
                  {[
                    { dot: "var(--color-amber)", text: "Passport renewal — Sarah", time: "34 days" },
                    { dot: "var(--color-teal)", text: "Tax documents due", time: "62 days" },
                    { dot: "var(--color-border)", text: "Will review — annual", time: "90 days" },
                  ].map((r) => (
                    <div
                      key={r.text}
                      className="bg-white border border-[var(--color-border-light)] rounded-[12px] py-3 px-4 flex items-center gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: r.dot }} />
                      <div className="text-[12px] text-[var(--color-text-2)] flex-1">{r.text}</div>
                      <div className="text-[11px] text-[var(--color-text-3)] whitespace-nowrap">{r.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  6. FEATURES                                                       */
/* ================================================================== */
function Features() {
  const features = [
    {
      bg: "var(--color-teal-light)",
      stroke: "#0F6E56",
      title: "Smart Document Vault",
      desc: "Upload, scan, or auto-import from email. AI categorizes and tags everything instantly.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      bg: "#EEEDFE",
      stroke: "#534AB7",
      title: "Portfolio Tracking",
      desc: "Connect all accounts. See real-time net worth, allocation, and performance in one view.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      bg: "var(--color-amber-light)",
      stroke: "#D4872E",
      title: "AI Copilot",
      desc: "Ask questions in plain English. Get answers grounded in your family's actual data.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2L14 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
        </svg>
      ),
    },
    {
      bg: "#E6F1FB",
      stroke: "#2E6BAC",
      title: "Smart Reminders",
      desc: "Never miss a renewal, expiration, or deadline. Proactive alerts before things go wrong.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      bg: "var(--color-green-light)",
      stroke: "#1E7B3E",
      title: "Family Sharing",
      desc: "Invite members with role-based access. In an emergency, the right people get the right info.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      bg: "var(--color-red-light)",
      stroke: "#C0392B",
      title: "Bank-Level Security",
      desc: "AES-256 encryption, MFA, SOC 2 Type II certified. Your data is never sold or shared.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }} id="features">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>Features</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Built for families who want clarity without complexity.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="animate-on-scroll card-hover bg-white border border-[var(--color-border)] rounded-[16px] py-8 px-6"
            >
              <div
                className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-5"
                style={{ background: f.bg, color: f.stroke }}
              >
                {f.icon}
              </div>
              <div className="text-base font-semibold text-[var(--color-text-1)] mb-2">{f.title}</div>
              <div className="text-sm text-[var(--color-text-2)] leading-[1.55]">{f.desc}</div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  7. PRICING                                                        */
/* ================================================================== */
function Pricing() {
  const tiers = [
    {
      name: "Free",
      desc: "For getting started",
      amount: "$0",
      period: "/month",
      features: ["Up to 10 documents", "1 linked account", "Basic AI queries", "1 family member"],
      featured: false,
      cta: "Get started",
    },
    {
      name: "Premium",
      desc: "For families who want full control",
      amount: "$19",
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
      amount: "Custom",
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

  return (
    <section className="py-14 sm:py-24 bg-white" id="pricing">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Start free. Upgrade when your family is ready.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`animate-on-scroll card-hover relative bg-white rounded-[20px] py-9 px-7 flex flex-col ${
                tier.featured
                  ? "border-2 border-teal"
                  : "border border-[var(--color-border)]"
              }`}
              style={{
                boxShadow: tier.featured ? "var(--shadow-lg)" : undefined,
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-teal text-white text-[12px] font-semibold py-1 px-4 rounded-[20px] whitespace-nowrap"
                >
                  Most Popular
                </div>
              )}
              <div className="text-lg font-semibold text-[var(--color-text-1)] mb-1">{tier.name}</div>
              <div className="text-[13px] text-[var(--color-text-3)] mb-5">{tier.desc}</div>
              <div className="mb-6">
                <span
                  className={`font-bold text-[var(--color-text-1)] tracking-[-0.03em] leading-none ${
                    tier.amount === "Custom" ? "text-[40px]" : "text-[48px]"
                  }`}
                >
                  {tier.amount}
                </span>
                {tier.period && (
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
          ))}
        </AnimateOnScroll>
        <p className="text-center text-[13px] text-[var(--color-text-3)] mt-6">
          14-day free trial on Premium · Cancel anytime · No credit card required
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  8. FINAL CTA                                                      */
/* ================================================================== */
function FinalCTA() {
  return (
    <section className="py-14 sm:py-24 text-center bg-navy">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-[32px] sm:text-[44px] font-normal text-white leading-[1.2] max-w-[580px] mx-auto mb-4">
            Your family&apos;s future deserves better than a folder.
          </h2>
          <p
            className="text-[17px] max-w-[480px] mx-auto mb-9 leading-[1.6]"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Join thousands of families who finally have their most important things in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <a
              href={APP_URL}
              className="btn-press inline-flex items-center justify-center gap-2 bg-white text-[var(--color-navy)] font-semibold text-base py-3.5 px-8 rounded-[10px] hover:bg-[var(--color-surface)] transition-all w-full sm:w-auto"
            >
              Get started free
            </a>
            <a
              href="#"
              className="btn-press inline-flex items-center justify-center gap-2 font-semibold text-base py-3.5 px-8 rounded-[10px] transition-all w-full sm:w-auto"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
            >
              Talk to us
            </a>
          </div>
          <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            No credit card required · Setup in 2 minutes
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PAGE                                                              */
/* ================================================================== */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Magic />
        <Showcase />
        <Features />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

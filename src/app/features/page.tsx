import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore LINIO features: AI auto-filing document vault, net worth dashboard, portfolio insights, smart reminders, role-based sharing, and cross-pillar intelligence that connects documents to finances.",
};

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ================================================================== */
/*  HERO                                                              */
/* ================================================================== */
function FeaturesHero() {
  return (
    <section className="bg-white pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center">
        <div className="eyebrow mb-4">Features</div>
        <h1 className="font-display text-[28px] sm:text-[48px] lg:text-[56px] leading-[1.2] sm:leading-[1.15] text-[var(--color-text-1)] font-normal mb-5 max-w-3xl mx-auto">
          Powerful tools for{" "}
          <em className="italic text-[var(--color-teal-dark)]">every family.</em>
        </h1>
        <p className="text-[17px] text-[var(--color-text-2)] leading-[1.65] max-w-[560px] mx-auto">
          Two intelligent pillars working together to organize, protect, and grow everything your
          family has built.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FEATURE ROW                                                       */
/* ================================================================== */
function FeatureRow({
  icon, iconBg, iconColor, title, description, reverse,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-5 md:gap-8 items-start">
      <div
        className={`w-16 h-16 rounded-[16px] flex items-center justify-center shrink-0 ${reverse ? "md:order-2" : ""}`}
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <h3 className="font-display text-[22px] sm:text-[26px] font-normal text-[var(--color-text-1)] leading-[1.25] mb-3">
          {title}
        </h3>
        <p className="text-[15px] sm:text-base text-[var(--color-text-2)] leading-[1.65]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PILLAR 1 — DOCUMENT VAULT                                         */
/* ================================================================== */
function DocumentVault() {
  const features = [
    {
      iconBg: "var(--color-teal-light)", iconColor: "#0F6E56",
      title: "AI Auto-Filing",
      description: "Upload any document and our AI instantly classifies it, extracts key data points like dates, names, and policy numbers, then files it into the correct category automatically.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    },
    {
      iconBg: "#E6F1FB", iconColor: "#2E6BAC",
      title: "Smart Reminders",
      description: "Never miss a renewal or expiration again. LINIO proactively alerts you about passport expirations, insurance renewals, and other critical dates.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
    },
    {
      iconBg: "var(--color-amber-light)", iconColor: "#D4872E",
      title: "Family Profile Audit",
      description: "Our AI continuously scans your family\u2019s document profile and surfaces gaps \u2014 missing wills, outdated beneficiaries, expired insurance policies.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    },
    {
      iconBg: "#EEEDFE", iconColor: "#534AB7",
      title: "Role-Based Sharing",
      description: "Share documents with family members, attorneys, financial advisors, or accountants with granular access controls and full audit trail.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      iconBg: "var(--color-red-light)", iconColor: "#E74C3C",
      title: "Emergency Access",
      description: "Configure a dead-man\u2019s-switch that automatically grants designated family members access to critical documents if you\u2019re unable to respond.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
  ];

  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <div className="eyebrow mb-3">Pillar 1 · Documents</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Intelligent Document Vault
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            AI-powered storage that doesn&apos;t just hold your documents &mdash; it understands them.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="space-y-12">
          {features.map((f) => (
            <div key={f.title} className="animate-on-scroll bg-white border border-[var(--color-border)] rounded-[16px] p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
              <FeatureRow icon={f.icon} iconBg={f.iconBg} iconColor={f.iconColor} title={f.title} description={f.description} />
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PILLAR 2 — FINANCIAL                                              */
/* ================================================================== */
function FinancialIntelligence() {
  const features = [
    {
      iconBg: "var(--color-teal-light)", iconColor: "#0F6E56",
      title: "Net Worth Dashboard",
      description: "See every asset and liability in one unified, real-time view. Investment accounts, real estate, crypto, savings \u2014 all aggregated across any institution.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
    {
      iconBg: "var(--color-amber-light)", iconColor: "#D4872E",
      title: "AI Portfolio Insights",
      description: "Get plain-English analysis of your portfolio allocation, risk exposure, and opportunities. Complex financial data made actionable.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L14 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"/></svg>,
    },
    {
      iconBg: "#FEF0EF", iconColor: "#E74C3C",
      title: "Proactive Alerts",
      description: "Stay ahead of market events, rebalancing opportunities, and fee optimization. LINIO monitors your portfolio 24/7.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    },
    {
      iconBg: "#E6F1FB", iconColor: "#2E6BAC",
      title: "Multi-Currency Support",
      description: "Track global assets in any currency, across any institution worldwide. Property in London, investments in Tokyo \u2014 LINIO unifies it all.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
    {
      iconBg: "var(--color-green-light)", iconColor: "#1E7B3E",
      title: "Family Planning Views",
      description: "Shared financial dashboards with built-in privacy controls. See the complete family picture while keeping individual accounts private.",
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-white">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <div className="eyebrow mb-3">Pillar 2 · Finances</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Financial Portfolio Intelligence
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Your family&apos;s complete financial picture, powered by AI that speaks plain English.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="space-y-12">
          {features.map((f) => (
            <div key={f.title} className="animate-on-scroll bg-white border border-[var(--color-border)] rounded-[16px] p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
              <FeatureRow icon={f.icon} iconBg={f.iconBg} iconColor={f.iconColor} title={f.title} description={f.description} />
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  CONNECTED INTELLIGENCE                                            */
/* ================================================================== */
function ConnectedIntelligence() {
  const connections = [
    { iconBg: "var(--color-amber-light)", iconColor: "#D4872E", from: "Insurance policies", to: "Coverage analysis", desc: "AI reads your insurance docs and cross-references them with your assets to identify coverage gaps.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
    { iconBg: "var(--color-teal-light)", iconColor: "#0F6E56", from: "Property deeds", to: "Real-time valuations", desc: "Your property documents are linked to live market data for always-current home valuations.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { iconBg: "#EEEDFE", iconColor: "#534AB7", from: "Estate documents", to: "Beneficiary tracking", desc: "Wills, trusts, and beneficiary designations are cross-checked against your financial accounts.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
    { iconBg: "var(--color-green-light)", iconColor: "#1E7B3E", from: "Tax records", to: "Financial accounts", desc: "Tax documents are automatically connected to the accounts and assets they reference.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  ];

  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center max-w-[640px] mx-auto mb-14">
          <div className="eyebrow mb-3">The Connective Tissue</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-4">
            Where documents meet finances.
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.6]">
            Cross-pillar intelligence that no fragmented tool stack can match.
          </p>
        </FadeIn>
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {connections.map((c) => (
            <div
              key={c.from}
              className="animate-on-scroll card-hover bg-white border border-[var(--color-border)] rounded-[16px] p-6"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div
                className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
                style={{ background: c.iconBg, color: c.iconColor }}
              >
                {c.icon}
              </div>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="font-semibold text-[var(--color-teal-deep)]">{c.from}</span>
                <svg className="w-4 h-4 text-[var(--color-text-3)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="text-[var(--color-text-2)]">{c.to}</span>
              </div>
              <p className="text-[14px] text-[var(--color-text-2)] leading-[1.5]">{c.desc}</p>
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
function CTA() {
  return (
    <section className="py-14 sm:py-24 bg-navy text-center">
      <div className="max-w-[640px] mx-auto px-5 sm:px-6">
        <h2 className="font-display text-[26px] sm:text-[40px] font-normal text-white leading-[1.2] mb-4">
          Ready to organize your family&apos;s future?
        </h2>
        <p className="text-[17px] mb-9 leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Join thousands of families who replaced 5 apps with one intelligent platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={APP_URL}
            className="btn-press inline-flex items-center justify-center gap-2 bg-white text-[var(--color-navy)] font-semibold text-base py-3.5 px-8 rounded-[10px] hover:bg-[var(--color-surface)] transition-all w-full sm:w-auto"
          >
            Start free trial
          </a>
          <Link
            href="/pricing"
            className="btn-press inline-flex items-center justify-center gap-2 font-semibold text-base py-3.5 px-8 rounded-[10px] transition-all w-full sm:w-auto"
            style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.2)" }}
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <DocumentVault />
        <FinancialIntelligence />
        <ConnectedIntelligence />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

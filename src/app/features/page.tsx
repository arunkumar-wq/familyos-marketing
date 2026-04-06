import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore FamilyOS features: AI auto-filing document vault, net worth dashboard, portfolio insights, smart reminders, role-based sharing, and cross-pillar intelligence that connects documents to finances.",
};

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function FeaturesHero() {
  return (
    <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 sm:pt-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]">
          Powerful Features for
          <br />
          <span className="text-teal">Every Family</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Two intelligent pillars working together to organize, protect, and
          grow everything your family has built.
        </p>

        {/* Documents screenshot */}
        <div className="mt-12 sm:mt-14 relative mx-auto max-w-4xl">
          <div className="rounded-t-xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 text-[11px] text-slate-400 bg-slate-700/60 rounded px-3 py-0.5">app.familyos.com/documents</span>
            </div>
            <Image
              src="/images/hero-documents.jpg"
              alt="FamilyOS Document Vault — AI-powered document management with auto-filing and smart categories"
              width={1200}
              height={675}
              className="w-full h-auto block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURE ROW                                                       */
/* ------------------------------------------------------------------ */
function FeatureRow({
  icon, title, description, reverse,
}: {
  icon: string; title: string; description: string; reverse?: boolean;
}) {
  return (
    <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div className="flex-1 max-w-xl">
        <h3 className="text-lg sm:text-xl font-bold text-navy">{title}</h3>
        <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 w-16 h-16 bg-teal/5 border border-teal/10 rounded-xl flex items-center justify-center text-3xl">
        {icon}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PILLAR 1                                                          */
/* ------------------------------------------------------------------ */
function DocumentVault() {
  const features = [
    { icon: "📥", title: "AI Auto-Filing", description: "Upload any document and our AI instantly classifies it, extracts key data points like dates, names, and policy numbers, then files it into the correct category automatically." },
    { icon: "🔔", title: "Smart Reminders", description: "Never miss a renewal or expiration again. FamilyOS proactively alerts you about passport expirations, insurance renewals, and other critical dates." },
    { icon: "🔍", title: "Family Profile Audit", description: "Our AI continuously scans your family\u2019s document profile and surfaces gaps \u2014 missing wills, outdated beneficiaries, expired insurance policies." },
    { icon: "👥", title: "Role-Based Sharing", description: "Share documents with family members, attorneys, financial advisors, or accountants with granular access controls and full audit trail." },
    { icon: "🚨", title: "Emergency Access", description: "Configure a dead-man\u2019s-switch that automatically grants designated family members access to critical documents if you\u2019re unable to respond." },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-teal/5 text-teal border border-teal/10 text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">
            <span>🔒</span> Pillar 1
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Intelligent Document Vault
          </h2>
          <p className="mt-3 text-base text-slate-500">
            AI-powered storage that doesn&apos;t just hold your documents &mdash; it understands them.
          </p>
        </div>
        <div className="space-y-12">
          {features.map((f, i) => (
            <FeatureRow key={f.title} icon={f.icon} title={f.title} description={f.description} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PILLAR 2                                                          */
/* ------------------------------------------------------------------ */
function FinancialIntelligence() {
  const features = [
    { icon: "📊", title: "Net Worth Dashboard", description: "See every asset and liability in one unified, real-time view. Investment accounts, real estate, crypto, savings \u2014 all aggregated across any institution." },
    { icon: "🤖", title: "AI Portfolio Insights", description: "Get plain-English analysis of your portfolio allocation, risk exposure, and opportunities. Complex financial data made actionable." },
    { icon: "⚡", title: "Proactive Alerts", description: "Stay ahead of market events, rebalancing opportunities, and fee optimization. FamilyOS monitors your portfolio 24/7." },
    { icon: "🌍", title: "Multi-Currency Support", description: "Track global assets in any currency, across any institution worldwide. Property in London, investments in Tokyo \u2014 FamilyOS unifies it all." },
    { icon: "👨\u200d👩\u200d👧\u200d👦", title: "Family Planning Views", description: "Shared financial dashboards with built-in privacy controls. See the complete family picture while keeping individual accounts private." },
  ];

  return (
    <section className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-teal/5 text-teal border border-teal/10 text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">
            <span>💰</span> Pillar 2
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
            Financial Portfolio Intelligence
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Your family&apos;s complete financial picture, powered by AI that speaks plain English.
          </p>
        </div>
        <div className="space-y-12">
          {features.map((f, i) => (
            <FeatureRow key={f.title} icon={f.icon} title={f.title} description={f.description} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONNECTED INTELLIGENCE                                            */
/* ------------------------------------------------------------------ */
function ConnectedIntelligence() {
  const connections = [
    { icon: "🏥", from: "Insurance policies", to: "Coverage analysis", desc: "AI reads your insurance docs and cross-references them with your assets to identify coverage gaps." },
    { icon: "🏠", from: "Property deeds", to: "Real-time valuations", desc: "Your property documents are linked to live market data for always-current home valuations." },
    { icon: "📜", from: "Estate documents", to: "Beneficiary tracking", desc: "Wills, trusts, and beneficiary designations are cross-checked against your financial accounts." },
    { icon: "🧾", from: "Tax records", to: "Financial accounts", desc: "Tax documents are automatically connected to the accounts and assets they reference." },
  ];

  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5 border border-white/10">
            <span>🔗</span> The Connective Tissue
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Where Documents Meet Finances</h2>
          <p className="mt-3 text-base text-slate-300">Cross-pillar intelligence that no fragmented tool stack can match.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {connections.map((c) => (
            <div key={c.from} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
              <span className="text-2xl">{c.icon}</span>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="font-semibold text-teal">{c.from}</span>
                <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                <span className="text-slate-300">{c.to}</span>
              </div>
              <p className="mt-2 text-[13px] text-slate-400 leading-relaxed">{c.desc}</p>
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
function CTA() {
  return (
    <section className="bg-gray-bg py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
          Ready to organize your family&apos;s future?
        </h2>
        <p className="mt-3 text-base text-slate-500">
          Join families who have replaced 5 apps with one intelligent platform.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/pricing" className="bg-teal text-white font-semibold px-7 py-3 rounded-lg hover:bg-teal-hover transition-all shadow-[var(--shadow-elevated)] w-full sm:w-auto text-[15px]">
            Start Free Trial
          </Link>
          <Link href="/pricing" className="border border-navy/20 text-navy font-semibold px-7 py-3 rounded-lg hover:border-navy/40 transition-colors w-full sm:w-auto text-[15px]">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
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

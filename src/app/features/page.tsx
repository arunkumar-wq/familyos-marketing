import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Stop paying the Fragmentation Tax. One intelligent platform for family documents, portfolio tracking, and estate planning.",
};

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function FeaturesHero() {
  return (
    <section className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Powerful Features for
          <br />
          <span className="text-orange">Every Family</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Two intelligent pillars working together to organize, protect, and
          grow everything your family has built.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURE ROW                                                       */
/* ------------------------------------------------------------------ */
function FeatureRow({
  icon,
  title,
  description,
  reverse,
}: {
  icon: string;
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-navy">{title}</h3>
        <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 w-20 h-20 bg-navy/5 rounded-2xl flex items-center justify-center text-4xl">
        {icon}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PILLAR 1 — DOCUMENT VAULT                                         */
/* ------------------------------------------------------------------ */
function DocumentVault() {
  const features = [
    {
      icon: "📥",
      title: "AI Auto-Filing",
      description:
        "Upload any document and our AI instantly classifies it, extracts key data points like dates, names, and policy numbers, then files it into the correct category automatically. No manual sorting ever again.",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description:
        "Never miss a renewal or expiration again. FamilyOS proactively alerts you about passport expirations, insurance renewals, license deadlines, and other critical dates before they sneak up on you.",
    },
    {
      icon: "🔍",
      title: "Family Profile Audit",
      description:
        "Our AI continuously scans your family's document profile and surfaces gaps — missing wills, outdated beneficiaries, expired insurance policies — so you can take action before it's too late.",
    },
    {
      icon: "👥",
      title: "Role-Based Sharing",
      description:
        "Share documents with family members, attorneys, financial advisors, or accountants with granular access controls. Every action is logged in a full audit trail you can review anytime.",
    },
    {
      icon: "🚨",
      title: "Emergency Access",
      description:
        "Configure a dead-man's-switch that automatically grants designated family members or trusted contacts access to critical documents if you're unable to respond for a configurable period.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span>🔒</span> Pillar 1
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Intelligent Document Vault
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            AI-powered storage that doesn&apos;t just hold your documents — it
            understands them.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PILLAR 2 — FINANCIAL INTELLIGENCE                                 */
/* ------------------------------------------------------------------ */
function FinancialIntelligence() {
  const features = [
    {
      icon: "📊",
      title: "Net Worth Dashboard",
      description:
        "See every asset and liability in one unified, real-time view. Investment accounts, real estate, crypto, savings, 401(k)s, 529 plans — all aggregated with automatic updates across any institution.",
    },
    {
      icon: "🤖",
      title: "AI Portfolio Insights",
      description:
        "Get plain-English analysis of your portfolio allocation, risk exposure, and opportunities. Our AI translates complex financial data into actionable recommendations you can actually understand.",
    },
    {
      icon: "⚡",
      title: "Proactive Alerts",
      description:
        "Stay ahead of market events, rebalancing opportunities, and fee optimization. FamilyOS monitors your portfolio 24/7 and alerts you when action is needed — not after it's too late.",
    },
    {
      icon: "🌍",
      title: "Multi-Currency Support",
      description:
        "Track global assets in any currency, across any institution worldwide. Whether you hold property in London, investments in Tokyo, or crypto everywhere — FamilyOS unifies it all.",
    },
    {
      icon: "👨\u200d👩\u200d👧\u200d👦",
      title: "Family Planning Views",
      description:
        "Shared financial dashboards with built-in privacy controls. See the family's complete financial picture while keeping individual accounts private when needed.",
    },
  ];

  return (
    <section className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span>💰</span> Pillar 2
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Financial Portfolio Intelligence
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your family&apos;s complete financial picture, powered by AI that
            speaks plain English.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              reverse={i % 2 === 1}
            />
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
    {
      icon: "🏥",
      from: "Insurance policies",
      to: "Automated coverage analysis",
      desc: "AI reads your insurance docs and cross-references them with your assets to identify coverage gaps.",
    },
    {
      icon: "🏠",
      from: "Property deeds",
      to: "Real-time valuations",
      desc: "Your property documents are linked to live market data for always-current home valuations.",
    },
    {
      icon: "📜",
      from: "Estate documents",
      to: "Beneficiary tracking",
      desc: "Wills, trusts, and beneficiary designations are cross-checked against your financial accounts.",
    },
    {
      icon: "🧾",
      from: "Tax records",
      to: "Linked financial accounts",
      desc: "Tax documents are automatically connected to the accounts and assets they reference.",
    },
  ];

  return (
    <section className="bg-navy text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span>🔗</span> The Connective Tissue
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Where Documents Meet Finances
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Cross-pillar intelligence that no fragmented tool stack can match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {connections.map((c) => (
            <div
              key={c.from}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <span className="text-3xl">{c.icon}</span>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-semibold text-orange">{c.from}</span>
                <svg
                  className="w-5 h-5 text-gray-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                <span className="text-gray-300">{c.to}</span>
              </div>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {c.desc}
              </p>
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
    <section className="bg-gray-bg py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy">
          Ready to organize your family&apos;s future?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join families who have replaced 5 apps with one intelligent platform.
          Start your 14-day free trial today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-orange text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-orange-hover transition-colors w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
          <Link
            href="/pricing"
            className="border-2 border-navy/20 text-navy font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-navy/40 transition-colors w-full sm:w-auto"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
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

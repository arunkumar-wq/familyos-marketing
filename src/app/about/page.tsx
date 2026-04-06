import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Gurmail Singh, founder of FamilyOS. A serial entrepreneur with 20+ years of experience who built FamilyOS to solve his own family's document and financial management challenges.",
};

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.08]">
          Built by a Family,
          <br />
          <span className="text-teal">for Families</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
          FamilyOS was born from real-world frustration &mdash; and a conviction
          that every family deserves one intelligent platform to protect what
          matters most.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOUNDER                                                           */
/* ------------------------------------------------------------------ */
function Founder() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <div className="animate-on-scroll flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] border border-slate-200">
                <Image
                  src="/images/gurmail-singh.jpg"
                  alt="Gurmail Singh — Founder and CEO of FamilyOS"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-teal text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                20+ Years
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-teal/5 text-teal border border-teal/10 text-[13px] font-semibold px-4 py-1.5 rounded-full mb-5">
              Founder &amp; CEO
            </div>
            <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">Founder</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Gurmail Singh
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Gurmail is a serial entrepreneur with over two decades of
              experience building and scaling digital businesses. He founded and
              grew a successful digital marketing agency from the ground up,
              delivering engaging digital experiences, accelerating product
              development, and driving automation for clients before
              ultimately exiting the business.
            </p>
            <p className="mt-3 text-slate-500 leading-relaxed">
              FamilyOS was born from a problem Gurmail couldn&apos;t solve with
              any existing tool. After years of building wealth, managing a
              growing family, and dealing with scattered documents and
              fragmented financial dashboards, he realized no single platform
              existed to bring it all together. So he built one.
            </p>
            <p className="mt-5 text-slate-900 font-semibold italic border-l-4 border-teal pl-4 text-[15px]">
              &ldquo;I built FamilyOS because I needed it. Every feature
              started as a personal frustration.&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MISSION                                                           */
/* ------------------------------------------------------------------ */
function Mission() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-[13px] font-semibold px-4 py-1.5 rounded-full mb-7 border border-white/10">
          Our Mission
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight tracking-tight">
          Eliminate the{" "}
          <span className="text-teal">Fragmentation Tax</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed">
          One intelligent platform for every family&apos;s documents, finances,
          and future. We believe no family should need 5 disconnected apps to
          manage what matters most.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STATS                                                             */
/* ------------------------------------------------------------------ */
function CompanyStats() {
  const stats = [
    { value: "2026", label: "Founded" },
    { value: "1,000+", label: "Beta families" },
    { value: "247K+", label: "Documents managed" },
    { value: "$2.8B+", label: "Wealth tracked" },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3 text-center">Traction</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">
          FamilyOS by the Numbers
        </h2>
        <AnimateOnScroll stagger className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="animate-on-scroll card-hover bg-slate-50 rounded-xl p-6 text-center border border-slate-200 shadow-[var(--shadow-card)]">
              <div className="text-2xl sm:text-3xl font-bold text-teal">{s.value}</div>
              <p className="mt-1.5 text-sm text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                               */
/* ------------------------------------------------------------------ */
function CTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-sm font-medium text-teal uppercase tracking-widest mb-3">Get Started</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Join the FamilyOS mission
        </h2>
        <p className="mt-3 text-base text-slate-500">
          Be part of the movement to give every family a unified command center
          for what matters most.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/pricing" className="bg-teal text-white font-medium px-7 py-3 rounded-full hover:bg-teal-hover transition-all shadow-[var(--shadow-elevated)] w-full sm:w-auto text-[15px]">
            Start Free Trial
          </Link>
          <Link href="/features" className="border border-slate-700 text-slate-900 font-medium px-7 py-3 rounded-full hover:bg-slate-100 transition-colors w-full sm:w-auto text-[15px]">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <Founder />
        <Mission />
        <CompanyStats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

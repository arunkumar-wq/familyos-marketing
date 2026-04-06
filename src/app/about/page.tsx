import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <section className="relative bg-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          Built by a Family,
          <br />
          <span className="text-teal">for Families</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 sm:w-[22rem] sm:h-[22rem] rounded-2xl overflow-hidden shadow-xl border border-gray-border">
                <Image
                  src="/images/gurmail-singh.jpg"
                  alt="Gurmail Singh — Founder and CEO of FamilyOS"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg">
                20+ Years Experience
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal/5 text-teal border border-teal/10 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Founder &amp; CEO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
              Gurmail Singh
            </h2>
            <p className="mt-6 text-slate-500 leading-relaxed text-lg">
              Gurmail is a serial entrepreneur with over two decades of
              experience building and scaling digital businesses. He founded and
              grew a successful digital marketing agency from the ground up,
              delivering engaging digital experiences, accelerating product
              development, and driving automation for clients before
              ultimately exiting the business.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed text-lg">
              FamilyOS was born from a problem Gurmail couldn&apos;t solve with
              any existing tool. After years of building wealth, managing a
              growing family, and dealing with scattered documents and
              fragmented financial dashboards, he realized no single platform
              existed to bring it all together. So he built one.
            </p>
            <p className="mt-6 text-navy font-semibold text-lg italic border-l-4 border-teal pl-4">
              &ldquo;I built FamilyOS because I needed it. Every feature
              started as a personal frustration.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MISSION                                                           */
/* ------------------------------------------------------------------ */
function Mission() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-white/10">
          Our Mission
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          Eliminate the{" "}
          <span className="text-teal">Fragmentation Tax</span>
        </h2>
        <p className="mt-6 text-xl text-slate-300 leading-relaxed">
          One intelligent platform for every family&apos;s documents, finances,
          and future. We believe no family should need 5 disconnected apps to
          manage what matters most.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPANY STATS                                                     */
/* ------------------------------------------------------------------ */
function CompanyStats() {
  const stats = [
    { value: "2026", label: "Founded" },
    { value: "1,000+", label: "Beta families" },
    { value: "247K+", label: "Documents managed" },
    { value: "$2.8B+", label: "Family wealth tracked" },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            FamilyOS by the Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-gray-bg rounded-2xl p-8 text-center border border-gray-border hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal">
                {s.value}
              </div>
              <p className="mt-2 text-slate-600 font-medium">{s.label}</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
          Join the FamilyOS mission
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          Be part of the movement to give every family a unified command center
          for what matters most.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-teal text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-teal-hover transition-all shadow-lg shadow-teal/20 w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
          <Link
            href="/features"
            className="border border-navy/20 text-navy font-semibold px-8 py-3.5 rounded-lg text-lg hover:border-navy/40 transition-colors w-full sm:w-auto"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
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

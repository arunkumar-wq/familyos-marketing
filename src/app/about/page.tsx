import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll, { FadeIn } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Gurmail Singh, founder of LINIO. A serial entrepreneur with 20+ years of experience who built LINIO to solve his own family's document and financial management challenges.",
};

const APP_URL = "https://familyos-staging-production.up.railway.app";

/* ================================================================== */
/*  HERO                                                              */
/* ================================================================== */
function AboutHero() {
  return (
    <section className="bg-white pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 text-center">
        <div className="eyebrow mb-4">About</div>
        <h1 className="font-display text-[28px] sm:text-[48px] lg:text-[56px] leading-[1.2] sm:leading-[1.15] text-[var(--color-text-1)] font-normal mb-5 max-w-3xl mx-auto">
          Built by a family,{" "}
          <em className="italic text-[var(--color-teal-dark)]">for families.</em>
        </h1>
        <p className="text-[17px] text-[var(--color-text-2)] leading-[1.65] max-w-[560px] mx-auto">
          LINIO was born from real-world frustration &mdash; and a conviction that every family
          deserves one intelligent platform to protect what matters most.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  FOUNDER                                                           */
/* ================================================================== */
function Founder() {
  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <AnimateOnScroll stagger className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 lg:gap-14 items-center">
          <div className="animate-on-scroll flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[20px] overflow-hidden border border-[var(--color-border)]"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <Image
                  src="/images/gurmail-singh.jpg"
                  alt="Gurmail Singh — Founder and CEO of LINIO"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-3 -right-3 bg-teal text-white text-xs font-semibold px-4 py-2 rounded-[10px]"
                style={{ boxShadow: "0 2px 8px rgba(46,196,182,0.25)" }}
              >
                20+ Years
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="eyebrow mb-3">Founder &amp; CEO</div>
            <h2 className="font-display text-[24px] sm:text-[36px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-5">
              Gurmail Singh
            </h2>
            <p className="text-[var(--color-text-2)] leading-[1.7] mb-3">
              Gurmail is a serial entrepreneur with over two decades of experience building and
              scaling digital businesses. He founded and grew a successful digital marketing agency
              from the ground up &mdash; delivering engaging digital experiences, accelerating product
              development, and driving automation for clients before ultimately exiting the business.
            </p>
            <p className="text-[var(--color-text-2)] leading-[1.7] mb-5">
              LINIO was born from a problem Gurmail couldn&apos;t solve with any existing tool.
              After years of building wealth, managing a growing family, and dealing with scattered
              documents and fragmented financial dashboards, he realized no single platform existed
              to bring it all together. So he built one.
            </p>
            <p
              className="text-[var(--color-text-1)] font-medium italic pl-4 text-[15px]"
              style={{ borderLeft: "3px solid var(--color-teal)" }}
            >
              &ldquo;I built LINIO because I needed it. Every feature started as a personal
              frustration.&rdquo;
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  MISSION                                                           */
/* ================================================================== */
function Mission() {
  return (
    <section className="py-14 sm:py-24 bg-white text-center">
      <div className="max-w-[720px] mx-auto px-5 sm:px-6">
        <FadeIn>
          <div className="eyebrow mb-3">Our Mission</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)] mb-5">
            Eliminate the{" "}
            <em className="italic text-[var(--color-teal-dark)]">Fragmentation Tax.</em>
          </h2>
          <p className="text-[17px] text-[var(--color-text-2)] leading-[1.65]">
            One intelligent platform for every family&apos;s documents, finances, and future. We
            believe no family should need 5 disconnected apps to manage what matters most.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  STATS                                                             */
/* ================================================================== */
function CompanyStats() {
  const stats = [
    { value: "2026", label: "Founded" },
    { value: "1,000+", label: "Beta families" },
    { value: "247K+", label: "Documents managed" },
    { value: "$2.8B+", label: "Wealth tracked" },
  ];

  return (
    <section className="py-14 sm:py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-[1040px] mx-auto px-5 sm:px-6">
        <FadeIn className="text-center mb-10">
          <div className="eyebrow mb-3">Traction</div>
          <h2 className="font-display text-[24px] sm:text-[40px] font-normal leading-[1.2] text-[var(--color-text-1)]">
            LINIO by the numbers.
          </h2>
        </FadeIn>
        <AnimateOnScroll stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="animate-on-scroll card-hover bg-white rounded-[16px] p-7 text-center border border-[var(--color-border)]"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="font-display text-[28px] sm:text-[36px] text-[var(--color-text-1)] tracking-[-0.02em] leading-none mb-2">
                {s.value}
              </div>
              <p className="text-sm text-[var(--color-text-2)]">{s.label}</p>
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
          Join the LINIO mission.
        </h2>
        <p className="text-[17px] mb-9 leading-[1.6]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Be part of the movement to give every family a unified command center for what matters
          most.
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

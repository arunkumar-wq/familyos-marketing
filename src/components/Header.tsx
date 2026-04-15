"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_URL = "https://familyos-staging-production.up.railway.app";

type IconProps = { className?: string };
const Icons = {
  Features: ({ className = "" }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  Pricing: ({ className = "" }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  About: ({ className = "" }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Sparkles: ({ className = "" }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L14 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
    </svg>
  ),
  ArrowRight: ({ className = "" }: IconProps) => (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

const primaryLinks: { label: string; href: string; icon: keyof typeof Icons }[] = [
  { label: "Home", href: "/", icon: "Features" },
  { label: "Features", href: "/features", icon: "Sparkles" },
  { label: "Pricing", href: "/pricing", icon: "Pricing" },
  { label: "About", href: "/about", icon: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const desktopLinks = primaryLinks.slice(1); // exclude Home on desktop nav

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-[var(--color-border-light)]"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-navy font-bold text-[20px]">
            <span className="w-8 h-8 bg-navy rounded-[8px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            LINIO
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {desktopLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-[var(--color-text-2)] hover:text-[var(--color-text-1)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={APP_URL}
                className="btn-press inline-flex items-center justify-center gap-2 bg-teal text-white text-sm font-semibold px-6 py-2.5 rounded-[8px] hover:bg-teal-dark transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(46,196,182,0.25)" }}
              >
                Get started
              </a>
            </li>
          </ul>

          {/* Mobile hamburger — 44px tap target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-[var(--color-text-2)] hover:bg-[var(--color-surface)] transition-colors relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu panel — light off-white, full height, half width, top-right */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 right-0 bottom-0 z-50 w-[55%] min-w-[240px] shadow-2xl flex flex-col menu-panel-slide"
          style={{ background: "#F9F9F9" }}
        >
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1 list-none">
              {primaryLinks.map((l) => {
                const Icon = Icons[l.icon];
                const isActive = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 text-left text-[15px] font-semibold rounded-[10px] px-3.5 py-3 transition-colors ${
                        isActive
                          ? "bg-[var(--color-teal-light)] text-[var(--color-teal-deep)]"
                          : "text-[var(--color-text-1)] hover:bg-black/[0.04]"
                      }`}
                    >
                      <Icon className="shrink-0" />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Separator */}
            <div className="my-4 border-t border-[var(--color-border-light)]" />

            {/* Secondary: Get started as primary CTA */}
            <a
              href={APP_URL}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-left text-[15px] font-semibold rounded-[10px] px-3.5 py-3 bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] transition-colors"
              style={{ boxShadow: "0 2px 8px rgba(46,196,182,0.25)" }}
            >
              <Icons.ArrowRight className="shrink-0" />
              <span>Get started</span>
            </a>
          </nav>
        </div>
      )}

      {/* Backdrop — light blur; nav bar (z-50) sits on top so it isn't blurred */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

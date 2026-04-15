"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link
            href="/"
            className="flex items-center gap-2 text-navy font-bold text-[20px]"
          >
            <span className="w-8 h-8 bg-navy rounded-[8px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            LINIO
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
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

        {/* Mobile menu panel — half width, top-right, z-50 sits above backdrop */}
        {menuOpen && (
          <div className="md:hidden fixed top-16 right-0 z-50 w-1/2 min-w-[200px] bg-white border-l border-b border-[var(--color-border-light)] rounded-bl-lg shadow-lg px-5 pb-5 pt-3">
            <nav className="flex flex-col items-start space-y-1 text-left">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block w-full text-left text-base font-medium text-[var(--color-text-2)] hover:text-[var(--color-text-1)] hover:bg-[var(--color-surface)] rounded-lg px-3 py-2.5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={APP_URL}
                className="block w-full text-left text-base font-medium text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] px-3 py-2.5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop — blurs page body; nav bar (z-50) sits on top so it isn't blurred */}
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

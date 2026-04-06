"use client";

import { useState } from "react";
import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-navy font-bold text-lg tracking-tight">
          <span className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-sm font-bold">
            F
          </span>
          FamilyOS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-slate-500 hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={APP_URL}
            className="text-[13px] font-medium text-slate-500 hover:text-navy transition-colors"
          >
            Login
          </a>
          <Link
            href="/pricing"
            className="bg-teal text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-teal-hover transition-colors"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger — 44px tap target */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-slate-500 hover:bg-gray-bg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-border px-5 pb-5 pt-2">
          <nav className="space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm font-medium text-slate-600 hover:text-navy hover:bg-gray-bg rounded-lg px-3 py-2.5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-gray-border space-y-2">
            <a
              href={APP_URL}
              className="block text-sm font-medium text-slate-600 px-3 py-2.5"
            >
              Login
            </a>
            <Link
              href="/pricing"
              className="block bg-teal text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-teal-hover transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

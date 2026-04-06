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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-slate-900 font-semibold text-[15px] tracking-tight">
          <span className="w-7 h-7 bg-teal rounded-md flex items-center justify-center text-white text-xs font-bold">
            F
          </span>
          FamilyOS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={APP_URL}
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Log in
          </a>
          <Link
            href="/pricing"
            className="btn-press bg-slate-900 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-slate-800 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger — 44px tap target */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-slate-100 px-5 pb-4 pt-2">
          <nav className="space-y-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg px-3 py-2.5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-2">
            <a href={APP_URL} className="block text-sm text-slate-600 px-3 py-2.5">
              Log in
            </a>
            <Link
              href="/pricing"
              className="block bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-full text-center hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
              <span className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-sm font-bold">
                F
              </span>
              FamilyOS
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              The operating system every family needs to protect what matters
              most.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/features" className="text-slate-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><a href={APP_URL} className="text-slate-300 hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-400 mb-3">Get product updates</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full min-w-0 bg-white/5 border border-white/10 rounded-l-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-teal px-4 py-2.5 rounded-r-lg text-sm font-semibold hover:bg-teal-hover transition-colors shrink-0"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="bg-white/5 border border-white/10 text-[11px] px-3 py-1 rounded-full text-slate-300">
              256-bit Encryption
            </span>
            <span className="bg-white/5 border border-white/10 text-[11px] px-3 py-1 rounded-full text-slate-300">
              Zero-Knowledge
            </span>
            <span className="bg-white/5 border border-white/10 text-[11px] px-3 py-1 rounded-full text-slate-300">
              SOC 2 Compliant
            </span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; 2026 FamilyOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

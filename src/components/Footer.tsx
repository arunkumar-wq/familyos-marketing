"use client";

import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center text-white text-sm font-bold">
                F
              </span>
              FamilyOS
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              The operating system every family needs to protect what matters
              most.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><a href={APP_URL} className="text-gray-300 hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400">
              Connect
            </h4>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-footer" className="text-sm text-gray-400">
                Get updates
              </label>
              <div className="mt-2 flex">
                <input
                  id="email-footer"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <button
                  type="submit"
                  className="bg-orange px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-orange-hover transition-colors shrink-0"
                >
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-white/10 text-xs px-3 py-1.5 rounded-full font-medium">
              🔒 256-bit Encryption
            </span>
            <span className="bg-white/10 text-xs px-3 py-1.5 rounded-full font-medium">
              🛡️ Zero-Knowledge Architecture
            </span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; 2026 FamilyOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

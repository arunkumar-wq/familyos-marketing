"use client";

import Link from "next/link";

const APP_URL = "https://familyos-staging-production.up.railway.app";

export default function Footer() {
  return (
    <footer className="bg-navy" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-[20px]"
            >
              <span className="w-8 h-8 bg-navy-800 rounded-[8px] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              LINIO
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              The intelligent system for families who take their future seriously.
              Organize, protect, and act &mdash; automatically.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.06em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Product
            </h4>
            <ul className="space-y-2.5 text-sm list-none">
              <li><Link href="/features" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Features</Link></li>
              <li><Link href="/pricing" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Pricing</Link></li>
              <li><a href="#security" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Security</a></li>
              <li><a href={APP_URL} style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Log in</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.06em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Company
            </h4>
            <ul className="space-y-2.5 text-sm list-none">
              <li><Link href="/about" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">About</Link></li>
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Blog</a></li>
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Careers</a></li>
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.06em] mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm list-none">
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Terms of Service</a></li>
              <li><a href="#" style={{ color: "rgba(255,255,255,0.55)" }} className="hover:!text-[rgba(255,255,255,0.9)] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-center sm:text-left"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          <span>&copy; 2026 LINIO Inc. All rights reserved.</span>
          <span>Made with care for families everywhere.</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/testimonials", label: t.nav.testimonials },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-light/30">
      <div className="flex justify-between items-center w-full px-5 md:px-8 lg:px-20 py-4 max-w-[1280px] mx-auto gap-3 md:gap-4">
        <Link
          href="/"
          className="font-display text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-primary whitespace-nowrap"
        >
          Chandu Homely Interiors
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-muted hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right group — kept clearly apart from the menu links */}
        <div className="flex items-center gap-3 lg:gap-4 md:ml-8 lg:ml-10">
          {/* Language switcher — both languages always visible */}
          <div
            className="flex items-center border border-outline-light rounded-full overflow-hidden"
            role="group"
            aria-label="Language"
          >
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${
                lang === "en"
                  ? "bg-primary text-white"
                  : "text-secondary hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("te")}
              aria-pressed={lang === "te"}
              className={`px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs font-semibold transition-colors duration-300 ${
                lang === "te"
                  ? "bg-primary text-white"
                  : "text-secondary hover:text-primary"
              }`}
            >
              తెలుగు
            </button>
          </div>

          <Link
            href="/contact"
            className="hidden lg:block bg-primary text-white px-5 lg:px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            {t.nav.consultation}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-primary p-1"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-light/30 px-5 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-semibold uppercase tracking-[0.1em] border-b border-outline-light/20 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center bg-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em]"
          >
            {t.nav.bookConsultation}
          </Link>
        </div>
      )}
    </nav>
  );
}

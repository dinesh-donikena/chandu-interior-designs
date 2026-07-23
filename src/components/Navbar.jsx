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

  function toggleLang() {
    setLang(lang === "en" ? "te" : "en");
  }

  return (
    <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-light/30">
      <div className="flex justify-between items-center w-full px-5 md:px-20 py-4 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-tight text-primary"
        >
          Chandu Homely Interiors
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-muted hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Language toggle — shows the language you'd switch TO */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 border border-outline-light rounded-full px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
            aria-label={
              lang === "en" ? "Switch to Telugu" : "Switch to English"
            }
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m-9 9h18"
              />
            </svg>
            {t.nav.toggleLabel}
          </button>

          <Link
            href="/contact"
            className="hidden md:block bg-primary text-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity"
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

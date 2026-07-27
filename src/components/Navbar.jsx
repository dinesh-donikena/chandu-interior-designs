"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/testimonials", label: t.nav.testimonials },
    { href: "/contact", label: t.nav.contact },
  ];

  // Close the drawer on navigation, and lock scrolling while it is open.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const langSwitch = (size = "sm") => (
    <div
      className="flex items-center border border-outline-light rounded-full overflow-hidden"
      role="group"
      aria-label="Language"
    >
      {[
        { key: "en", label: "EN" },
        { key: "te", label: "తెలుగు" },
      ].map((opt) => (
        <button
          key={opt.key}
          onClick={() => setLang(opt.key)}
          aria-pressed={lang === opt.key}
          className={`${
            size === "lg"
              ? "px-4 py-2 text-sm"
              : "px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs"
          } font-semibold transition-colors duration-300 ${
            lang === opt.key
              ? "bg-primary text-white"
              : "text-secondary hover:text-primary"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-light/50">
        <div className="flex justify-between items-center w-full px-5 md:px-8 lg:px-20 py-4 max-w-[1280px] mx-auto gap-3 md:gap-4">
          <Link
            href="/"
            className="font-display text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-primary whitespace-nowrap"
          >
            Chandu Homely Interiors
          </Link>

          {/* Laptop nav — links stay visible from lg up */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary font-bold border-b-2 border-accent pb-1"
                    : "text-on-surface-muted hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right group — kept clearly apart from the menu links */}
          <div className="flex items-center gap-3 lg:gap-4 lg:ml-10">
            {langSwitch()}

            <Link
              href="/contact"
              className="hidden lg:block bg-accent text-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap hover:bg-accent-dark transition-colors"
            >
              {t.nav.consultation}
            </Link>

            {/* Drawer trigger — tablet and below */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-primary p-1"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in drawer — rendered outside <nav> because the navbar's
          backdrop-blur would otherwise trap position:fixed inside it. */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="drawer-backdrop absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="drawer-panel absolute top-0 right-0 h-full w-[82%] max-w-sm bg-surface shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-outline-light/60">
              <span className="font-display text-lg text-primary">
                Chandu Homely Interiors
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-primary p-1"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.1em] border-b border-outline-light/40 transition-colors ${
                    pathname === link.href
                      ? "text-accent"
                      : "text-on-surface-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                  <svg
                    className="w-4 h-4 opacity-40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}

              <div className="mt-8">{langSwitch("lg")}</div>
            </div>

            <div className="px-6 py-6 border-t border-outline-light/60">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-accent text-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-accent-dark transition-colors"
              >
                {t.nav.bookConsultation}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

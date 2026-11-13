"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { Chevron, Close, Menu } from "@/components/icons";
import { localePath, stripLocale } from "@/lib/i18n";

const PAGES = [
  ["/", "home"],
  ["/services", "services"],
  ["/portfolio", "portfolio"],
  ["/testimonials", "testimonials"],
  ["/contact", "contact"],
];

export default function Navbar({ lang, nav }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = PAGES.map(([to, key]) => ({ href: localePath(lang, to), label: nav[key] }));

  // The same page in the other language. Plain links (not a button that
  // swaps text in place), so each language is a real address that can be
  // shared and found on Google. The choice is remembered for next time —
  // see REMEMBER_TELUGU in SiteDocument.
  const page = stripLocale(pathname);
  const rememberLang = (key) => {
    try {
      localStorage.setItem("lang", key);
    } catch {}
  };

  // Close the drawer on navigation (incl. browser back/forward) — adjusted
  // during render rather than in an effect, per React's guidance.
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenuOpen(false);
  }

  // At the very top the bar melts into the page; once you scroll, a hairline
  // separates it from what passes beneath.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scrolling while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // `w-fit` in the bar keeps the pill hugging its buttons; in the drawer both
  // halves flex so the whole control is tappable — a stretched container with
  // narrow buttons left a dead zone that looked clickable but wasn't.
  const langSwitch = (variant = "bar") => (
    <div
      className={`flex items-center border border-outline-light rounded-full overflow-hidden ${
        variant === "drawer" ? "w-full" : "w-fit"
      }`}
      role="group"
      aria-label={nav.language}
    >
      {[
        { key: "en", label: "English" },
        { key: "te", label: "తెలుగు" },
      ].map((opt) => (
        <a
          key={opt.key}
          href={localePath(opt.key, page)}
          hrefLang={opt.key}
          lang={opt.key}
          onClick={() => rememberLang(opt.key)}
          aria-current={lang === opt.key ? "true" : undefined}
          className={`${
            variant === "drawer"
              ? "flex-1 min-h-11 py-2.5 text-sm text-center"
              : "inline-flex items-center min-h-11 px-2.5 max-[360px]:px-2 lg:px-3 text-[11px] lg:text-xs"
          } font-semibold transition-colors duration-300 ${
            lang === opt.key ? "bg-primary text-white" : "text-secondary hover:text-primary"
          }`}
        >
          {opt.key === "en" ? (
            variant === "drawer" ? opt.label : "EN"
          ) : (
            // The phone's own Telugu font, not the site's: this one word is
            // the only Telugu on most English pages, and it should not cost
            // them a 120 KB font download.
            <span className="[font-family:sans-serif]">{opt.label}</span>
          )}
        </a>
      ))}
    </div>
  );

  return (
    <>
      <nav
        className={`bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled || menuOpen ? "border-outline-light/70" : "border-transparent"
        }`}
      >
        {/* The max-[360px] adjustments squeeze the bar onto the smallest
            phones (320px wide) without anything running off the edge. */}
        <div className="flex justify-between items-center w-full h-[72px] px-5 max-[360px]:px-4 md:px-8 lg:px-20 max-w-[1280px] mx-auto gap-3 max-[360px]:gap-2 md:gap-4">
          <Link href={localePath(lang, "/")} className="min-w-0">
            <Logo lang={lang} />
          </Link>

          {/* Laptop nav — links stay visible from lg up. Spacing tightens
              below xl so the bar fits at 1024px, Telugu labels included. */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => {
              const current = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`nav-link text-xs font-semibold uppercase tracking-[0.1em] whitespace-nowrap py-1 transition-colors duration-300 ${
                    current ? "text-primary" : "text-on-surface-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right group — kept clearly apart from the menu links */}
          <div className="flex shrink-0 items-center gap-3 max-[360px]:gap-2 lg:gap-4 lg:ml-6 xl:ml-10">
            {langSwitch()}

            {/* Same destination as the Contact link, so it only joins the
                bar once there is room for both (xl). */}
            <Link
              href={localePath(lang, "/contact")}
              className="nav-talk btn btn-primary"
            >
              {nav.talk}
            </Link>

            {/* Drawer trigger — tablet and below */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden btn btn-secondary btn-icon"
              aria-label={nav.openMenu}
              aria-expanded={menuOpen}
            >
              <Menu />
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
          <div className="drawer-panel absolute top-0 right-0 h-full w-[84%] max-w-sm bg-surface grain shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-outline-light/60">
              <Logo lang={lang} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="btn btn-secondary btn-icon"
                aria-label={nav.closeMenu}
              >
                <Close />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="pb-4">{langSwitch("drawer")}</div>

              {links.map((link) => {
                const current = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className={`flex items-center justify-between py-4 type-h3 border-b border-outline-light/50 transition-colors ${
                      current ? "text-accent" : "text-primary hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <Chevron className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="px-6 py-6 border-t border-outline-light/60">
              <Link
                href={localePath(lang, "/contact")}
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full"
              >
                {nav.talk}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Menu, X, GraduationCap } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a full-bleed media hero behind the header.
  const overHero = pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          overHero
            ? "bg-gradient-to-b from-deep/70 via-deep/35 to-transparent"
            : "bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80 border-b border-black/10 shadow-sticker-sm"
        }`}
      >
        {/* full-width bar with comfortable side padding */}
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — white over the dark hero, blue on the solid header */}
            <Link href="/" className="group flex items-center" aria-label="Mind Mantra Abacus — home">
              <img
                src={overHero ? "/brand-logo-white.png" : "/brand-logo-blue.png"}
                alt="Mind Mantra Abacus"
                className="h-10 w-auto transition-transform group-hover:-rotate-3 md:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              {navigationData.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors ${
                      overHero
                        ? active
                          ? "text-paper"
                          : "text-paper/80 hover:text-paper"
                        : active
                          ? "text-ink"
                          : "text-muted-foreground hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-saffron transition-all duration-300 ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/contact"
                className="btn-bold btn-saffron hidden md:inline-flex !px-5 !py-2.5 text-sm"
              >
                <GraduationCap className="h-4 w-4" />
                Free Demo Class
              </Link>

              {/* Mobile Menu Button */}
              <button
                className={`xl:hidden grid h-10 w-10 place-items-center rounded-lg border-2 ${
                  overHero
                    ? "border-paper/50 text-paper"
                    : "border-black/10 text-ink"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Mobile slide-in drawer (right side) ---------- */}
      {/* Rendered OUTSIDE the header so the header's backdrop-blur doesn't trap
        this fixed element inside the 64px-tall bar. */}
      <div
        className={`xl:hidden fixed inset-0 z-[60] ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-deep/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-xs flex-col bg-paper shadow-soft-lg transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <span className="leading-none">
              <span className="block font-extrabold text-ink">Mind Mantra</span>
              <span className="mt-0.5 block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-cobalt">
                Abacus
              </span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5">
            <div className="grid gap-1">
              {navigationData.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-deep text-paper"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-black/10 p-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-bold btn-saffron w-full"
            >
              <GraduationCap className="h-5 w-5" />
              Free Demo Class
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

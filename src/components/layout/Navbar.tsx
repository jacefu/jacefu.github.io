"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Globe } from "lucide-react";
import { useI18n } from "@/i18n";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#architecture", label: t.nav.architecture },
    { href: "#quickstart", label: t.nav.quickStart },
    { href: "https://github.com/hiclaw/hiclaw", label: t.nav.docs, external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-lg font-bold text-white">H</span>
            </div>
            <span className="text-xl font-bold text-text-primary">HiClaw</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-primary-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-text-secondary transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
              title={locale === "en" ? "切换到中文" : "Switch to English"}
            >
              <Globe className="h-4 w-4" />
              <span>{locale === "en" ? "中文" : "EN"}</span>
            </button>

            <Link
              href="https://github.com/hiclaw/hiclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary transition-all hover:border-primary-300 hover:bg-primary-50"
            >
              <Github className="h-4 w-4" />
              <span>{t.nav.github}</span>
            </Link>
            <Link
              href="#quickstart"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-700"
            >
              {t.nav.getStarted}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 px-3">
                {/* Mobile Language Toggle */}
                <button
                  onClick={toggleLocale}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-secondary"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === "en" ? "切换到中文" : "Switch to English"}</span>
                </button>
                <Link
                  href="https://github.com/hiclaw/hiclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-text-primary"
                >
                  <Github className="h-4 w-4" />
                  <span>{t.nav.github}</span>
                </Link>
                <Link
                  href="#quickstart"
                  className="rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-medium text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav.getStarted}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

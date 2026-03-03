"use client";

import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    product: [
      { label: t.footer.features, href: "#features" },
      { label: t.footer.architecture, href: "#architecture" },
      { label: t.footer.quickStart, href: "#quickstart" },
      { label: t.footer.roadmap, href: "#" },
    ],
    community: [
      { label: t.footer.discord, href: "#", external: true },
      { label: t.footer.twitter, href: "#", external: true },
      { label: "GitHub", href: "https://github.com/hiclaw/hiclaw", external: true },
    ],
    resources: [
      { label: t.footer.documentation, href: "#", external: true },
      { label: t.footer.blog, href: "#" },
      { label: t.footer.changelog, href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/hiclaw/hiclaw", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-surface-muted">
      <div className="section-container py-12 md:py-16">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-lg font-bold text-white">H</span>
              </div>
              <span className="text-xl font-bold text-text-primary">
                HiClaw
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-text-secondary">
              {t.footer.description}
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-text-secondary transition-all hover:border-primary-300 hover:text-primary-600"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {t.footer.product}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {t.footer.community}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">
              {t.footer.resources}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

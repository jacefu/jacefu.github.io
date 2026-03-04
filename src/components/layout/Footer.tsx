"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, X } from "lucide-react";
import { useI18n } from "@/i18n";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function DingTalkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 10.8l-3.12 2.88c-.08.08-.12.16-.16.28l-.52 1.84c-.04.12-.2.16-.28.04l-1.2-1.4c-.08-.08-.16-.12-.28-.12l-1.56.04c-.12 0-.2-.12-.12-.24l1.44-2.04c.04-.08.04-.16 0-.24L8.6 10.72c-.08-.12 0-.28.16-.24l2.32.52c.08.04.2 0 .24-.08l1.6-2.68c.08-.12.24-.08.28.04l.28 2.72c0 .08.08.16.16.2l2.76.88c.16.04.16.24.04.32l-.36.24c-.08.04-.12.12-.08.2l.68 1.6c.04.12-.04.24-.16.2l-1.96-.44c-.08 0-.16 0-.2.08l-.72.84" />
    </svg>
  );
}

export default function Footer() {
  const { t, locale } = useI18n();
  const [showQR, setShowQR] = useState(false);
  const [dingHover, setDingHover] = useState(false);

  const footerLinks = {
    product: [
      { label: t.footer.features, href: "#features" },
      { label: t.footer.architecture, href: "#architecture" },
      { label: t.footer.quickStart, href: "#quickstart" },
      { label: t.footer.roadmap, href: "#" },
    ],
    community: [
      { label: t.footer.discord, href: "https://discord.gg/n6mV8xEYUF", external: true },
      { label: "X", href: "#", external: true },
      { label: "GitHub", href: "https://github.com/higress-group/hiclaw", external: true },
      { label: "DingTalk", href: "#dingtalk-qr", external: false },
    ],
    resources: [
      { label: t.footer.documentation, href: "https://github.com/higress-group/hiclaw/tree/main/docs", external: true },
      { label: t.footer.blog, href: "https://github.com/higress-group/hiclaw/tree/main/blog", external: true },
      { label: t.footer.changelog, href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/higress-group/hiclaw", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: DiscordIcon, href: "https://discord.gg/n6mV8xEYUF", label: "Discord" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-surface-muted">
      <div className="section-container py-12 md:py-16">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-full.png"
                alt="HiClaw"
                width={120}
                height={40}
                className="h-6 w-auto"
              />
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
              {/* DingTalk button with QR popup */}
              <button
                onClick={() => setShowQR(true)}
                onMouseEnter={() => setDingHover(true)}
                onMouseLeave={() => setDingHover(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 transition-all hover:border-primary-300"
                aria-label="DingTalk"
              >
                <div className="relative h-5 w-5">
                  <Image
                    src="/dingtalk-icon.jpg"
                    alt="DingTalk"
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-full"
                  />
                  <div
                    className="absolute inset-0 rounded-full transition-opacity"
                    style={{
                      backgroundColor: "#4F47DC",
                      mixBlendMode: "color",
                      opacity: dingHover ? 1 : 0,
                    }}
                  />
                </div>
              </button>
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
                  {link.label === "DingTalk" ? (
                    <button
                      onClick={() => setShowQR(true)}
                      className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-secondary transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  )}
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

      {/* DingTalk QR Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="mb-4 text-center font-semibold text-text-primary">
              {locale === "zh" ? "钉钉扫码加入群聊" : "Scan to join DingTalk group"}
            </p>
            <Image
              src="/dingtalk-qr.png"
              alt="DingTalk QR Code"
              width={240}
              height={240}
              className="h-60 w-60"
            />
          </div>
        </div>
      )}
    </footer>
  );
}

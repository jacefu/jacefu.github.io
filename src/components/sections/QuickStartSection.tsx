"use client";

import { useState } from "react";
import { Monitor, Terminal, CheckCircle, Info } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";
import { useI18n } from "@/i18n";

type OSTab = "unix" | "windows";

export default function QuickStartSection() {
  const { t } = useI18n();
  const [activeOS, setActiveOS] = useState<OSTab>("unix");

  const installCommands: Record<OSTab, string> = {
    unix: "bash <(curl -sSL https://higress.ai/hiclaw/install.sh)",
    windows:
      "Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://higress.ai/hiclaw/install.ps1'))",
  };

  return (
    <section id="quickstart" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            {t.quickstart.title}
          </h2>
          <p className="text-lg text-text-secondary">
            {t.quickstart.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* OS Tabs */}
          <div className="mb-6 flex gap-2">
            <button
              onClick={() => setActiveOS("unix")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeOS === "unix"
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-text-secondary hover:bg-slate-200"
              }`}
            >
              <Terminal className="h-4 w-4" />
              {t.quickstart.tabMacLinux}
            </button>
            <button
              onClick={() => setActiveOS("windows")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeOS === "windows"
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-text-secondary hover:bg-slate-200"
              }`}
            >
              <Monitor className="h-4 w-4" />
              {t.quickstart.tabWindows}
            </button>
          </div>

          {/* Install Command */}
          <CodeBlock
            code={installCommands[activeOS]}
            language={activeOS === "unix" ? "bash" : "powershell"}
          />

          {/* Output Preview */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-surface-muted p-6">
            <h3 className="mb-3 font-semibold text-text-primary">
              {t.quickstart.outputTitle}
            </h3>
            <div className="rounded-lg bg-[#1a1f2e] px-5 py-4 font-mono text-sm leading-relaxed">
              {t.quickstart.outputLines.map((line, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-300"
                  }
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-text-primary">
              <Info className="h-5 w-5 text-blue-500" />
              {t.quickstart.prerequisite}
            </h3>
            <p className="mb-3 text-sm text-text-secondary">
              {t.quickstart.prerequisiteDesc}
            </p>
            <ul className="mb-3 space-y-1.5">
              {t.quickstart.dockerItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-tertiary">{t.quickstart.resourceNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

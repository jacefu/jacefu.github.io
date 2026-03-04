"use client";

import { Github, ArrowRight, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useI18n } from "@/i18n";
import { useEffect, useState, useCallback } from "react";

type OSType = "unix" | "windows";

export default function HeroSection() {
  const { t, locale } = useI18n();
  const [displayedText, setDisplayedText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [selectedOS, setSelectedOS] = useState<OSType>("unix");

  // OS-specific commands
  const commandsByOS: Record<OSType, string[]> = {
    unix: [
      "# Quick install (interactive)",
      "$ bash <(curl -sSL https://higress.ai/hiclaw/install.sh)",
      "",
      "# Or clone and install",
      "$ git clone https://github.com/higress-group/hiclaw.git && cd hiclaw",
      '$ HICLAW_LLM_API_KEY="sk-xxx" make install',
    ],
    windows: [
      "PS> Set-ExecutionPolicy Bypass -Scope Process -Force",
      "PS> Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://higress.ai/hiclaw/install.ps1'))",
      locale === "zh"
        ? 'PS> make replay TASK="分析这份季度报告"'
        : 'PS> make replay TASK="Analyze the quarterly report"',
    ],
  };

  const terminalCommands = commandsByOS[selectedOS];

  const resetAnimation = useCallback(() => {
    setDisplayedText("");
    setCommandIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    resetAnimation();
  }, [locale, selectedOS, resetAnimation]);

  const handleOSChange = (os: OSType) => {
    setSelectedOS(os);
  };

  useEffect(() => {
    if (!isTyping) return;

    if (commandIndex >= terminalCommands.length) {
      setIsTyping(false);
      const timeout = setTimeout(() => {
        resetAnimation();
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentCommand = terminalCommands[commandIndex];

    // Handle empty lines quickly
    if (currentCommand === "") {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setCommandIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }

    if (charIndex < currentCommand.length) {
      // Faster typing for comments
      const isComment = currentCommand.startsWith("#");
      const delay = isComment ? 25 : 40;
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentCommand[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setCommandIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [commandIndex, charIndex, terminalCommands, isTyping, resetAnimation]);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-100/50 blur-3xl" />
      </div>

      <div className="section-container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge className="mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge.openSource}</span>
            <span className="text-primary-400">|</span>
            <span>{t.hero.badge.poweredBy}</span>
          </Badge>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title.line1}{" "}
            <span className="text-gradient">{t.hero.title.highlight}</span>{" "}
            {t.hero.title.line2}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-4 max-w-3xl text-base text-text-secondary md:text-lg">
            {t.hero.subtitle} {t.hero.subtitleLine2}
          </p>
          <p className="mx-auto mb-8 max-w-3xl text-base font-semibold md:text-lg">
            <span className="text-gradient">{t.hero.subtitleLine3}</span>
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#quickstart" size="lg">
              <span>{t.hero.quickStart}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="https://github.com/higress-group/hiclaw"
              variant="secondary"
              size="lg"
              external
            >
              <Github className="h-5 w-5" />
              <span>{t.hero.viewOnGithub}</span>
            </Button>
          </div>

          {/* Terminal Demo - Larger and cleaner like reference */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-[#1a1f2e] shadow-2xl">
            {/* Terminal Header with OS Tabs */}
            <div className="flex items-center justify-between border-b border-slate-700/50 bg-[#252a3a] px-5 py-3">
              <div className="flex items-center gap-2.5">
                <div className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                <div className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                <div className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-sm text-slate-400">
                  {t.hero.terminal}
                </span>
              </div>
              {/* OS Selection Tabs */}
              <div className="flex gap-1 rounded-lg bg-slate-800/50 p-1">
                <button
                  onClick={() => handleOSChange("unix")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedOS === "unix"
                      ? "bg-primary-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  macOS / Linux
                </button>
                <button
                  onClick={() => handleOSChange("windows")}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedOS === "windows"
                      ? "bg-primary-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Windows
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="min-h-[220px] px-6 py-5 text-left font-mono">
              <pre className="whitespace-pre-wrap text-base leading-relaxed text-slate-100 md:text-lg">
                {displayedText.split("\n").map((line, i) => {
                  // Determine line type
                  const isComment = line.startsWith("#");
                  const isPS = line.startsWith("PS>");
                  const isUnixPrompt = line.startsWith("$");
                  
                  if (isComment) {
                    return (
                      <div key={i} className="flex">
                        <span className="text-slate-500">{line}</span>
                      </div>
                    );
                  }
                  
                  const promptLength = isPS ? 3 : isUnixPrompt ? 1 : 0;
                  return (
                    <div key={i} className="flex">
                      {line && promptLength > 0 ? (
                        <>
                          <span className="text-emerald-400 select-none">
                            {line.substring(0, promptLength)}
                          </span>
                          <span className="text-slate-100">
                            {line.substring(promptLength)}
                          </span>
                        </>
                      ) : (
                        <span className="text-slate-100">{line}</span>
                      )}
                    </div>
                  );
                })}
                <span className="inline-block w-2.5 h-5 bg-slate-400 animate-pulse ml-0.5 align-middle" />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

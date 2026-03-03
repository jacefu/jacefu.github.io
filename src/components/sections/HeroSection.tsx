"use client";

import { Github, ArrowRight, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useI18n } from "@/i18n";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { t, locale } = useI18n();
  const [displayedText, setDisplayedText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const terminalCommands = [
    "$ pip install hiclaw",
    "$ hiclaw init",
    locale === "zh"
      ? '$ hiclaw run --task "分析这份季度报告"'
      : '$ hiclaw run --task "Analyze the quarterly report"',
  ];

  useEffect(() => {
    setDisplayedText("");
    setCommandIndex(0);
    setCharIndex(0);
  }, [locale]);

  useEffect(() => {
    if (commandIndex >= terminalCommands.length) {
      const timeout = setTimeout(() => {
        setCommandIndex(0);
        setCharIndex(0);
        setDisplayedText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const currentCommand = terminalCommands[commandIndex];

    if (charIndex < currentCommand.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentCommand[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + "\n");
        setCommandIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [commandIndex, charIndex, terminalCommands]);

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
          <p className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary md:text-xl">
            {t.hero.subtitle}
            <br className="hidden sm:block" />
            {t.hero.subtitleLine2}
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#quickstart" size="lg">
              <span>{t.hero.quickStart}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="https://github.com/hiclaw/hiclaw"
              variant="secondary"
              size="lg"
              external
            >
              <Github className="h-5 w-5" />
              <span>{t.hero.viewOnGithub}</span>
            </Button>
          </div>

          {/* Terminal Demo */}
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-slate-400">
                {t.hero.terminal}
              </span>
            </div>

            {/* Terminal Content */}
            <div className="min-h-[140px] p-4 text-left font-mono text-sm">
              <pre className="whitespace-pre-wrap text-slate-100">
                {displayedText}
                <span className="animate-pulse text-primary-400">|</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

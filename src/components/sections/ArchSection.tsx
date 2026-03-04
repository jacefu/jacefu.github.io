"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function ArchSection() {
  const { t } = useI18n();

  return (
    <section id="architecture" className="section-padding bg-surface-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            {t.arch.title}
          </h2>
          <p className="text-lg text-text-secondary">{t.arch.subtitle}</p>
        </div>

        {/* Architecture Diagram */}
        <div className="mx-auto mb-12 max-w-6xl md:mb-16">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:p-8">
            <Image
              src="/architecture.png"
              alt="HiClaw System Architecture"
              width={1200}
              height={675}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        {/* Architecture Points */}
        <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-3">
          {t.arch.points.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-text-primary whitespace-nowrap">
                  {point.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import FeatureCard from "@/components/ui/FeatureCard";
import { useI18n } from "@/i18n";
import {
  ShieldCheck,
  Users,
  MessageSquare,
  Eye,
  Layers,
  Unlock,
} from "lucide-react";

const featureIcons = [ShieldCheck, Users, MessageSquare, Eye, Layers, Unlock];

export default function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section id="features" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            {t.features.title}
          </h2>
          <p className="text-lg text-text-secondary">{t.features.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={featureIcons[index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";
import { useI18n } from "@/i18n";

export default function QuickStartSection() {
  const { t, locale } = useI18n();
  const [activeStep, setActiveStep] = useState(0);

  const stepCodes = [
    `$ pip install hiclaw`,
    `$ hiclaw init
${locale === "zh" ? "# 按提示配置 Matrix Homeserver 地址" : "# Follow prompts to configure Matrix Homeserver address"}
${locale === "zh" ? "# 输入访问令牌或创建新账户" : "# Enter access token or create new account"}`,
    `$ hiclaw run --task "${locale === "zh" ? "分析这份季度报告并生成摘要" : "Analyze the quarterly report and generate summary"}"
${locale === "zh" ? "# Manager Agent 将自动分解任务" : "# Manager Agent will automatically decompose the task"}
${locale === "zh" ? "# Worker Agents 并行执行" : "# Worker Agents execute in parallel"}
${locale === "zh" ? "# 你可以在 Matrix 客户端实时观察" : "# You can observe in real-time via Matrix client"}`,
  ];

  const completeCode = `${t.quickstart.comments.install}
$ pip install hiclaw

${t.quickstart.comments.init}
$ hiclaw init

${t.quickstart.comments.run}
$ hiclaw run --task "${locale === "zh" ? "研究最新 AI 趋势并创建摘要报告" : "Research the latest AI trends and create a summary report"}"

${t.quickstart.comments.output}
${t.quickstart.comments.manager1}
${t.quickstart.comments.manager2}
${t.quickstart.comments.worker1}
${t.quickstart.comments.worker2}
${t.quickstart.comments.worker3}
# 
${t.quickstart.comments.observe}`;

  return (
    <section id="quickstart" className="section-padding bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
            {t.quickstart.title}
          </h2>
          <p className="text-lg text-text-secondary">{t.quickstart.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-3xl">
          {/* Step Tabs */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {t.quickstart.steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeStep === index
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-text-secondary hover:bg-slate-200"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                    activeStep === index
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {index + 1}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Step Content */}
          <div className="space-y-4">
            <p className="text-text-secondary">
              {t.quickstart.steps[activeStep].description}
            </p>
            <CodeBlock code={stepCodes[activeStep]} language="bash" />
          </div>

          {/* All Steps Preview */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-surface-muted p-6">
            <h3 className="mb-4 font-semibold text-text-primary">
              {t.quickstart.completeExample}
            </h3>
            <CodeBlock code={completeCode} language="bash" showLineNumbers />
          </div>
        </div>
      </div>
    </section>
  );
}

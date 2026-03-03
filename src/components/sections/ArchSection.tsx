"use client";

import { CheckCircle } from "lucide-react";
import { useI18n } from "@/i18n";

export default function ArchSection() {
  const { t } = useI18n();

  return (
    <section id="architecture" className="section-padding bg-surface-muted">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-text-primary md:text-4xl">
              {t.arch.title}
            </h2>
            <p className="mb-8 text-lg text-text-secondary">{t.arch.subtitle}</p>

            <div className="space-y-6">
              {t.arch.points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-text-primary">
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

          {/* Right: Architecture Diagram */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <svg
                viewBox="0 0 400 300"
                className="h-auto w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Matrix Homeserver Box */}
                <rect
                  x="80"
                  y="40"
                  width="240"
                  height="220"
                  rx="12"
                  fill="#f8fafc"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="65"
                  textAnchor="middle"
                  className="fill-slate-600"
                  style={{ fontSize: "11px", fontWeight: 500 }}
                >
                  {t.arch.diagram.homeserver}
                </text>

                {/* Human User */}
                <circle cx="30" cy="120" r="20" fill="#10b981" />
                <text
                  x="30"
                  y="125"
                  textAnchor="middle"
                  className="fill-white"
                  style={{ fontSize: "12px", fontWeight: 700 }}
                >
                  H
                </text>
                <text
                  x="30"
                  y="155"
                  textAnchor="middle"
                  className="fill-slate-500"
                  style={{ fontSize: "10px" }}
                >
                  {t.arch.diagram.human}
                </text>

                {/* Arrow from Human to Main Room */}
                <path
                  d="M55 120 L95 120"
                  stroke="#10b981"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />

                {/* Main Room */}
                <rect
                  x="100"
                  y="90"
                  width="100"
                  height="60"
                  rx="8"
                  fill="#eef2ff"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
                <text
                  x="150"
                  y="115"
                  textAnchor="middle"
                  className="fill-primary-700"
                  style={{ fontSize: "10px", fontWeight: 500 }}
                >
                  {t.arch.diagram.main}
                </text>
                <text
                  x="150"
                  y="135"
                  textAnchor="middle"
                  className="fill-slate-500"
                  style={{ fontSize: "9px" }}
                >
                  {t.arch.diagram.managerAgent}
                </text>

                {/* Manager Agent Icon */}
                <circle cx="250" cy="120" r="16" fill="#6366f1" />
                <text
                  x="250"
                  y="124"
                  textAnchor="middle"
                  className="fill-white"
                  style={{ fontSize: "10px", fontWeight: 700 }}
                >
                  M
                </text>

                {/* Arrow from Main Room to Manager */}
                <path
                  d="M200 120 L230 120"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeDasharray="4"
                />

                {/* Task Rooms */}
                {[
                  { y: 175, label: "#task-1", worker: "W1" },
                  { y: 215, label: "#task-2", worker: "W2" },
                  { y: 255, label: "#task-3", worker: "W3" },
                ].map((task, index) => (
                  <g key={index}>
                    <rect
                      x="100"
                      y={task.y - 15}
                      width="80"
                      height="30"
                      rx="6"
                      fill="#f0fdf4"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    />
                    <text
                      x="140"
                      y={task.y + 4}
                      textAnchor="middle"
                      className="fill-emerald-700"
                      style={{ fontSize: "9px", fontWeight: 500 }}
                    >
                      {task.label}
                    </text>

                    {/* Worker */}
                    <circle cx="230" cy={task.y} r="12" fill="#22c55e" />
                    <text
                      x="230"
                      y={task.y + 4}
                      textAnchor="middle"
                      className="fill-white"
                      style={{ fontSize: "8px", fontWeight: 700 }}
                    >
                      {task.worker}
                    </text>

                    {/* Arrow */}
                    <path
                      d={`M180 ${task.y} L215 ${task.y}`}
                      stroke="#22c55e"
                      strokeWidth="1.5"
                      strokeDasharray="3"
                    />
                  </g>
                ))}

                {/* Vertical connection from Manager to tasks */}
                <path
                  d="M250 136 L250 175"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                  strokeDasharray="4"
                />
                <path
                  d="M250 175 L245 175"
                  stroke="#6366f1"
                  strokeWidth="1.5"
                />

                {/* Human supervision arrows */}
                <path
                  d="M30 145 L30 215 L95 215"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeDasharray="4"
                  fill="none"
                />

                {/* Legend */}
                <text
                  x="280"
                  y="185"
                  className="fill-slate-400"
                  style={{ fontSize: "8px" }}
                >
                  {t.arch.diagram.legend[0]}
                </text>
                <text
                  x="280"
                  y="195"
                  className="fill-slate-400"
                  style={{ fontSize: "8px" }}
                >
                  {t.arch.diagram.legend[1]}
                </text>
                <text
                  x="280"
                  y="205"
                  className="fill-slate-400"
                  style={{ fontSize: "8px" }}
                >
                  {t.arch.diagram.legend[2]}
                </text>

                {/* Arrow marker definition */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

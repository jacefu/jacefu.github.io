"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "bash",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="group relative overflow-hidden rounded-lg bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2">
        <span className="text-xs font-medium text-slate-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="mr-4 select-none text-slate-500">
                  {(index + 1).toString().padStart(2, " ")}
                </span>
              )}
              <code className="text-slate-100">
                {line.startsWith("$") ? (
                  <>
                    <span className="text-emerald-400">$</span>
                    <span className="text-slate-100">{line.slice(1)}</span>
                  </>
                ) : line.startsWith("#") ? (
                  <span className="text-slate-500">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

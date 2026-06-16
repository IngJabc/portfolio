"use client";

import { personalInfo } from "@/lib/cv-data";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { useEffect, useState, useRef } from "react";

const coreTech = ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker"];

export default function QuickMetrics() {
  const t = useT("metrics");
  const { locale } = useLocaleContext();

  const rows = [
    { key: "Name", val: personalInfo.name },
    { key: "Title", val: personalInfo.title },
    { key: "Uptime", val: `${personalInfo.yearsOfExperience}+ years` },
    { key: "Engine", val: "Next.js / NestJS" },
    { key: "Domains", val: personalInfo.domains.join(" · ") },
  ];

  const [visible, setVisible] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setVisible(0);
    const interval = setInterval(() => {
      setVisible((p) => (p >= rows.length ? p : p + 1));
    }, 100);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, locale]);

  return (
    <div ref={ref} className="glass-panel p-6 h-full border-t-2 border-[var(--accent)]/40">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--accent)]">$</span>
          <span className="text-xs font-mono text-[var(--text-secondary)]">neofetch</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-[10px] font-mono text-[var(--success)]">ACTIVE</span>
        </div>
      </div>

      <div className="space-y-1">
        {rows.map((row, i) => (
          <div
            key={row.key}
            className={`flex items-baseline gap-2 transition-all duration-500 ${
              i <= visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
          >
            <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0 w-14">
              {row.key}
              <span className="text-[var(--accent)]"> │</span>
            </span>
            <span className="text-xs font-mono text-[var(--text-primary)] truncate">
              {i === visible && visible < rows.length ? (
                <span>
                  {row.val}
                  <span className="inline-block w-1.5 h-3 bg-[var(--accent)] ml-0.5 animate-pulse" />
                </span>
              ) : (
                row.val
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-[var(--border)]">
        <div className="flex flex-wrap gap-1">
          {coreTech.map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

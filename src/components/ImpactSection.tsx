"use client";

import { useT } from "@/components/LocaleProvider";

const stats = [
  { value: "4+", key: "stats.projects" },
  { value: "3+", key: "stats.experience" },
  { value: "8+", key: "stats.technologies" },
  { value: "100%", key: "stats.remote" },
] as const;

const highlights = [
  {
    icon: "🏗️",
    titleKey: "highlights.saas.title",
    descKey: "highlights.saas.desc",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    icon: "⚡",
    titleKey: "highlights.ai.title",
    descKey: "highlights.ai.desc",
    tags: ["AI-Driven", "Vibe Coding"],
  },
  {
    icon: "🌐",
    titleKey: "highlights.web.title",
    descKey: "highlights.web.desc",
    tags: ["Next.js", "Strapi", "TypeScript"],
  },
] as const;

const timeline = [
  { year: "2022", name: "Develsoft SAS", resultKey: "timeline.develsoft" },
  { year: "2023", name: "LUPEA", resultKey: "timeline.lupea" },
  { year: "2024", name: "Chau Deudas", resultKey: "timeline.chaudeudas" },
  { year: "2024", name: "Algira", resultKey: "timeline.algira" },
] as const;

export default function ImpactSection() {
  const t = useT("dashboard");

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-[var(--accent)]">$</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">
          {t("impact.label")}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.key} className="glass-panel p-5 text-center">
            <span className="text-3xl font-bold text-[var(--accent)] block font-mono">
              {s.value}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-mono mt-1 block">
              {t(`impact.${s.key}`)}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-6">
        {highlights.map((h) => (
          <div key={h.titleKey} className="glass-panel p-5 flex flex-col">
            <span className="text-2xl mb-3 block">{h.icon}</span>
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              {t(`impact.${h.titleKey}`)}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
              {t(`impact.${h.descKey}`)}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
              {h.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-[var(--accent)]">$</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">
          {t("impact.timeline.label")}
        </span>
      </div>
      <div className="glass-panel p-5 mt-4">
        <div className="relative">
          <div className="absolute top-[22px] left-[8%] right-[8%] h-px bg-[var(--accent)]/20" />
          <div className="flex justify-between relative">
            {timeline.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center flex-1 min-w-0"
              >
                <span className="text-[10px] font-mono text-[var(--text-muted)] whitespace-nowrap">
                  {item.year}
                </span>
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg-primary)] shrink-0 relative z-10 mt-1" />
                <p className="text-xs font-semibold text-[var(--text-primary)] font-mono text-center mt-3 truncate w-full px-1">
                  {item.name}
                </p>
                <p className="text-[10px] text-[var(--text-muted)] text-center mt-1 leading-relaxed px-1">
                  {t(`impact.${item.resultKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

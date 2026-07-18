"use client";

import { useT } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";

const stats = [
  { value: "7+", key: "stats.projects", route: "projects" },
  { value: "3+", key: "stats.experience", route: "experience" },
  { value: "13+", key: "stats.technologies", route: "skills" },
  { value: "100%", key: "stats.remote", route: "contact" },
] as const;

const highlights = [
  {
    icon: "🏗️",
    titleKey: "highlights.saas.title",
    descKey: "highlights.saas.desc",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
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
    tags: ["Next.js", "Strapi", "TypeScript", "Supabase"],
  },
] as const;

const timeline = [
  { year: "2026", name: "Nómadas Tours", resultKey: "timeline.nomadastour" },
  { year: "2026", name: "LUPEA", resultKey: "timeline.lupea" },
  { year: "2025", name: "Algira", resultKey: "timeline.algira" },
  { year: "2024", name: "Chau Deudas", resultKey: "timeline.chaudeudas" },
  { year: "2023", name: "Develsoft SAS", resultKey: "timeline.develsoft" },
] as const;

export default function ImpactSection() {
  const t = useT("dashboard");
  const router = useRouter();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  const handleTechClick = (tech: string) => {
    router.push(`/${urlLocale}/skills?highlight=${encodeURIComponent(tech)}`);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-[var(--accent)]">$</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">{t("impact.label")}</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <button
            key={s.key}
            onClick={() => router.push(`/${urlLocale}/${s.route}`)}
            className="glass-panel p-5 text-center cursor-pointer transition-opacity hover:opacity-80"
          >
            <span className="text-3xl font-bold text-[var(--accent)] block font-mono">
              {s.value}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-mono mt-1 block">
              {t(`impact.${s.key}`)}
            </span>
          </button>
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
                <button
                  key={tag}
                  onClick={() => handleTechClick(tag)}
                  className="badge"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-[var(--accent)]">$</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">{t("impact.timeline.label")}</span>
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

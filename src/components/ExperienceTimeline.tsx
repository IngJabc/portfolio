"use client";

import type { Experience } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/translations";

export default function ExperienceTimeline({ experience: exp, index }: { experience: Experience; index: number }) {
  const { locale } = useLocaleContext();
  const localizedHighlights = (dictionary[locale]?.experience?.highlights as unknown as Record<string, string[]> | undefined)?.[exp.company];
  const highlights = localizedHighlights ?? exp.highlights;

  return (
    <div className="glass-panel p-5">
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-[var(--accent)]" style={{ boxShadow: '0 0 8px color-mix(in srgb, var(--accent) 40%, transparent)' }} />
          {index > 0 && <div className="w-px h-full bg-[var(--border)]" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{exp.company}</h3>
              <p className="text-sm text-[var(--accent)]">{exp.role}</p>
            </div>
            <div className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">
              {exp.period} | {exp.location}
            </div>
          </div>
          <ul className="space-y-1.5 mt-3">
            {highlights.map((h, i) => (
              <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1">▹</span>
                {h}
              </li>
            ))}
          </ul>
          {exp.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-[var(--border)] text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

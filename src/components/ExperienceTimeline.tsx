"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Experience } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";
import { dictionary } from "@/lib/translations";

export default function ExperienceTimeline({ experience: exp, index }: { experience: Experience; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { locale } = useLocaleContext();
  const router = useRouter();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";
  const localizedHighlights = (dictionary[locale]?.experience?.highlights as unknown as Record<string, string[]> | undefined)?.[exp.company];

  const handleTechClick = (tech: string) => {
    router.push(`/${urlLocale}/skills?highlight=${encodeURIComponent(tech)}`);
  };
  const highlights = localizedHighlights ?? exp.highlights;

  const nonDevRoles = ["Copikon Venezuela C.A.", "Zifeng International Language School C.A."];
  const isSecondary = nonDevRoles.includes(exp.company);

  if (isSecondary) {
    return (
      <div className="glass-panel overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="w-full text-left p-3 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <span className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
              {locale === "en" ? "Other experience" : "Otra experiencia"} — {exp.company} ({exp.period})
            </span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              className="text-[var(--accent)] text-2xl ml-4 shrink-0"
            >
              ▾
            </motion.span>
          </div>
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-3 px-3 border-t border-[var(--border)] pt-3">
                <div className="mb-1">
                  <p className="text-xs font-medium text-[var(--text-secondary)]">{exp.role}</p>
                  <p className="text-[10px] text-[var(--text-muted)] font-mono">{exp.period} | {exp.location}</p>
                </div>
                <ul className="space-y-1 mt-2">
                  {highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-2">
                      <span className="text-[var(--text-muted)] mt-1">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

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
                <button
                  key={tech}
                  onClick={() => handleTechClick(tech)}
                  className="badge"
                >
                  {tech}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

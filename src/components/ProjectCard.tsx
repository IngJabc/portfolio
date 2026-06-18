"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/cv-data";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";
import { dictionary } from "@/lib/translations";

export default function ProjectCard({ project }: { project: Project }) {
  const t = useT("projects");
  const { locale } = useLocaleContext();
  const router = useRouter();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";
  const [expanded, setExpanded] = useState(false);

  const handleTechClick = (tech: string) => {
    router.push(`/${urlLocale}/skills?highlight=${encodeURIComponent(tech)}`);
  };

  const localizedContent = (dictionary[locale]?.projects?.content as unknown as Record<string, Record<string, string>> | undefined)?.[project.id];
  const shortDesc = localizedContent?.short;
  const dict = dictionary[locale].projects;

  const sections = [
    { key: "problem", label: t("problem"), content: localizedContent?.problem ?? project.problem },
    { key: "challenges", label: t("challenges"), content: localizedContent?.challenges ?? project.challenges },
    { key: "solution", label: t("solution"), content: localizedContent?.solution ?? project.solution },
    { key: "result", label: t("result"), content: localizedContent?.result ?? project.result },
  ];

  return (
    <div className="glass-panel overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={`project-details-${project.id}`}
        className="w-full text-left p-5 cursor-pointer"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{project.title}</h3>
              <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                {project.type}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.stack.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechClick(tech)}
                  className="badge"
                >
                  {tech}
                </button>
              ))}
            </div>
            {shortDesc && (
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2 line-clamp-2">
                {shortDesc}
              </p>
            )}
          </div>
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
            id={`project-details-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4 border-t border-[var(--border)] pt-4">
              {sections.map((section) => (
                <div key={section.key}>
                  <p className="text-xs font-mono text-[var(--accent)] mb-1">
                    {">"} {section.label}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
              <div className="pt-4 flex flex-wrap gap-3 border-t border-[var(--border)]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/20 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  {t("liveDemo")}
                </a>
                {project.sourceUrl ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={dict.sourceAria}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--text-secondary)]/30 hover:text-[var(--text-primary)] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    {t("source")}
                  </a>
                ) : project.ndaProtected ? (
                  <span
                    role="status"
                    aria-label={dict.enterpriseAria}
                    title={dict.enterpriseTooltip}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[var(--bg-elevated)]/50 text-[var(--text-muted)] border border-[var(--border)]/50"
                  >
                    {dict.enterpriseBadge}
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

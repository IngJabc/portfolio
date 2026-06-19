"use client";

import { personalInfo } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";

export default function DeveloperLicense() {
  const { locale } = useLocaleContext();
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
        <span className="text-xs font-mono text-[var(--text-secondary)]">cat ~/credentials/developer_id --render</span>
      </div>

      <div className="glass-panel p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-lg font-bold text-[var(--accent)] font-mono">
                JB
              </div>
              <div>
                <p className="text-[10px] font-mono text-[var(--text-muted)] tracking-widest">
                  {locale === "en" ? "DEVELOPER LICENSE" : "LICENCIA DE DESARROLLADOR"}
                </p>
                <p className="text-[10px] font-mono text-[var(--accent)]">FS-2023-001</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-[var(--text-primary)]">{personalInfo.name}</h3>
            <p className="text-sm text-[var(--accent)] mb-3">{personalInfo.title}</p>

            <div className="space-y-1 text-xs font-mono">
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)] w-16 shrink-0 text-right">
                  {locale === "en" ? "Class" : "Clase"}
                </span>
                <span className="text-[var(--accent)]">│</span>
                <span className="text-[var(--text-primary)]">A — Web Application Engineer</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)] w-16 shrink-0 text-right">
                  {locale === "en" ? "Valid" : "Válido"}
                </span>
                <span className="text-[var(--accent)]">│</span>
                <span className="text-[var(--text-primary)]">2023 — Present</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--text-muted)] w-16 shrink-0 text-right">
                  {locale === "en" ? "Status" : "Estado"}
                </span>
                <span className="text-[var(--accent)]">│</span>
                <span className="text-[var(--success)]">ACTIVE</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)]">
              <p className="text-[10px] text-[var(--text-muted)] font-mono mb-1">
                {locale === "en" ? "Specialties" : "Especialidades"}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {personalInfo.domains.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[var(--border)]">
          <p className="text-[10px] text-[var(--text-muted)] font-mono mb-3">
            {locale === "en" ? "TECHNOLOGY EXPERIENCE" : "EXPERIENCIA EN TECNOLOGÍAS"}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "TypeScript", years: 3 },
              { name: "Next.js", years: 3 },
              { name: "React", years: 3 },
              { name: "Node.js", years: 3 },
              { name: "NestJS", years: 2 },
              { name: "Strapi", years: 2 },
              { name: "PostgreSQL", years: 3 },
              { name: "Docker", years: 2 },
              { name: "JavaScript", years: 4 },
            ].map((tech) => (
              <button
                key={tech.name}
                onClick={() => handleTechClick(tech.name)}
                className="badge"
              >
                {tech.name}
                <span className="text-[var(--text-muted)]">
                  {tech.years}{locale === "en" ? "y" : "a"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

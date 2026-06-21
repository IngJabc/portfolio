"use client";

import { personalInfo } from "@/lib/cv-data";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const allTech = ["Next.js", "NestJS", "TypeScript", "JavaScript", "PostgreSQL", "Supabase", "Docker", "React", "Node.js", "Strapi", "Tailwind CSS", "JWT", "WebSockets"];

export default function QuickMetrics() {
  const t = useT("metrics");
  const { locale, tRaw } = useLocaleContext();
  const router = useRouter();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  const handleTechClick = (tech: string) => {
    router.push(`/${urlLocale}/skills?highlight=${encodeURIComponent(tech)}`);
  };

  const specsSkillMap: Record<string, string> = {
    "SaaS Platforms": "React & Next.js",
    "Web Applications": "TypeScript",
    "Real-Time Systems": "WebSockets & Real-Time",
    "API Architecture": "REST API Design",
    "Headless CMS": "Strapi (Headless CMS)",
    "Plataformas SaaS": "React & Next.js",
    "Aplicaciones Web": "TypeScript",
    "Sistemas Tiempo Real": "WebSockets & Real-Time",
    "Arquitectura API": "REST API Design",
    "CMS Headless": "Strapi (Headless CMS)",
  };

  const rows = [
    { label: t("nameLabel"), val: personalInfo.name },
    { label: t("titleLabel"), val: personalInfo.title },
    { label: t("uptimeLabel"), val: `${personalInfo.yearsOfExperience}+ ${locale === "en" ? "years" : "años"}` },
    { label: t("domainsLabel"), val: personalInfo.domains.join(" · ") },
    { label: t("locationLabel"), val: "Venezuela" },
    { label: t("languageLabel"), val: "EN / ES" },
  ];

  const specs = (tRaw("metrics", "specializationList") || []) as string[];

  const extras = 5;
  const total = rows.length + extras;

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
      setVisible((p) => (p >= total ? p : p + 1));
    }, 100);
    return () => clearInterval(interval);
  }, [mounted, locale]);

  const show = (idx: number) => idx <= visible;

  return (
    <div ref={ref} className="glass-panel p-6 h-full border-t-2 border-[var(--accent)]/40">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[var(--accent)]">$</span>
          <span className="text-xs font-mono text-[var(--text-secondary)]">cat ~/quick-metrics --profile</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] animate-pulse" />
          <span className="text-[10px] font-mono text-[var(--success)]">ACTIVE</span>
        </div>
      </div>

      <div className="space-y-1">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-baseline gap-2 transition-all duration-500 ${
              show(i) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
          >
            <span className="text-[11px] font-mono text-[var(--text-muted)] shrink-0 w-28 text-right mr-2">
              {row.label}
            </span>
            <span className="text-[var(--accent)] text-[11px] mr-2">│</span>
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

      <div
        className={`mt-3 transition-all duration-500 ${
          show(rows.length) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <p className="text-[11px] font-mono text-[var(--text-secondary)] leading-relaxed">
          {t("summary")}
        </p>
      </div>

      <div
        className={`border-t border-[var(--border)] my-4 transition-all duration-500 ${
          show(rows.length + 1) ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`mb-4 transition-all duration-500 ${
          show(rows.length + 2) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        <p className="text-[10px] font-mono text-[var(--text-muted)] mb-2 tracking-widest">
          {t("specializations")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {specs.map((s) => (
            <button
              key={s}
              onClick={() => handleTechClick(specsSkillMap[s] || "TypeScript")}
              className="badge"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`border-t border-[var(--border)] my-4 transition-all duration-500 ${
          show(rows.length + 3) ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`flex flex-wrap gap-1 transition-all duration-500 ${
          show(rows.length + 4) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        {allTech.map((tech) => (
          <button
            key={tech}
            onClick={() => handleTechClick(tech)}
            className="badge"
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}

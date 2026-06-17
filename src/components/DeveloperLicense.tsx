"use client";

import { personalInfo } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";

interface Category {
  label: string;
  items: string;
  level: number;
}

function radarPoints(values: number[], n: number, cx: number, cy: number, r: number): string {
  return values
    .map((v, i) => {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
      const x = cx + v * r * Math.cos(angle);
      const y = cy + v * r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");
}

function axisPoints(
  cats: Category[],
  cx: number,
  cy: number,
  r: number
): { x: number; y: number; label: string }[] {
  return cats.map((cat, i) => {
    const angle = (i * 2 * Math.PI) / cats.length - Math.PI / 2;
    return {
      x: cx + (r + 18) * Math.cos(angle),
      y: cy + (r + 18) * Math.sin(angle),
      label: cat.label,
    };
  });
}

const gridLevels = [0.25, 0.5, 0.75, 1];

export default function DeveloperLicense() {
  const { locale, tRaw } = useLocaleContext();
  const axisLabels = (tRaw("developerLicense", "axisLabels") || {}) as Record<string, string>;

  const categories: Category[] = [
    { label: axisLabels.frontendEng || "Frontend Engineering", items: "React, Next.js", level: 0.85 },
    { label: axisLabels.backendSys || "Backend Systems", items: "NestJS, Node.js, Strapi", level: 0.8 },
    { label: axisLabels.apiArch || "API Architecture", items: "TypeScript, JavaScript, C#, Java, SQL", level: 0.75 },
    { label: axisLabels.databases || "Databases", items: "PostgreSQL, MySQL, MongoDB", level: 0.7 },
    { label: axisLabels.cloudDevOps || "Cloud & DevOps", items: "Docker, Git, Azure", level: 0.5 },
    { label: axisLabels.security || "Security", items: "JWT, bcrypt, Swagger", level: 0.65 },
  ];

  const N = categories.length;
  const cx = 80;
  const cy = 80;
  const r = 65;

  const data = categories.map((c) => c.level);
  const axes = axisPoints(categories, cx, cy, r);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-mono text-[var(--accent)]">$</span>
        <span className="text-xs font-mono text-[var(--text-secondary)]">cat ~/credentials/developer_id --render</span>
      </div>

      <div className="glass-panel p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
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
                  <span className="text-[var(--text-muted)] w-16 shrink-0">
                    {locale === "en" ? "Class" : "Clase"}
                    <span className="text-[var(--accent)]"> │</span>
                  </span>
                  <span className="text-[var(--text-primary)]">A — Fullstack</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--text-muted)] w-16 shrink-0">
                    {locale === "en" ? "Valid" : "Válido"}
                    <span className="text-[var(--accent)]"> │</span>
                  </span>
                  <span className="text-[var(--text-primary)]">2023 — Present</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[var(--text-muted)] w-16 shrink-0">
                    {locale === "en" ? "Status" : "Estado"}
                    <span className="text-[var(--accent)]"> │</span>
                  </span>
                  <span className="text-[var(--success)]">ACTIVE</span>
                </div>
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

          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative">
              <svg width="180" height="180" viewBox="0 0 160 160" className="overflow-visible">
                {gridLevels.map((level) => (
                  <polygon
                    key={level}
                    points={radarPoints(categories.map(() => level), N, cx, cy, r)}
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth={0.5}
                    opacity={0.4}
                  />
                ))}

                {Array.from({ length: N }).map((_, i) => {
                  const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
                  const x2 = cx + r * Math.cos(angle);
                  const y2 = cy + r * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={x2}
                      y2={y2}
                      stroke="var(--border)"
                      strokeWidth={0.5}
                      opacity={0.3}
                    />
                  );
                })}

                <polygon
                  points={radarPoints(data, N, cx, cy, r)}
                  fill="var(--accent)"
                  fillOpacity={0.15}
                  stroke="var(--accent)"
                  strokeWidth={1.5}
                  className="drop-shadow-[0_0_6px_var(--accent)]"
                />

                {data.map((v, i) => {
                  const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
                  const x = cx + v * r * Math.cos(angle);
                  const y = cy + v * r * Math.sin(angle);
                  return <circle key={i} cx={x} cy={y} r={2.5} fill="var(--accent)" />;
                })}

                {axes.map((a, i) => (
                  <text
                    key={i}
                    x={a.x}
                    y={a.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="var(--text-muted)"
                    fontSize={8}
                    fontFamily="monospace"
                  >
                    {a.label}
                  </text>
                ))}
              </svg>
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
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
              >
                {tech.name}
                <span className="text-[var(--text-muted)]">
                  {tech.years}{locale === "en" ? "y" : "a"}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

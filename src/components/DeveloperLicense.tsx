"use client";

import { personalInfo } from "@/lib/cv-data";
import { useLocaleContext } from "@/components/LocaleProvider";

interface Category {
  label: string;
  items: string;
  level: number;
}

const categories: Category[] = [
  { label: "Frontend", items: "React, Next.js", level: 0.85 },
  { label: "Backend", items: "NestJS, Node.js, Strapi", level: 0.8 },
  { label: "Languages", items: "TypeScript, JavaScript, C#, Java, SQL", level: 0.75 },
  { label: "Databases", items: "PostgreSQL, MySQL, MongoDB", level: 0.7 },
  { label: "DevOps", items: "Docker, Git, Azure", level: 0.5 },
  { label: "Security", items: "JWT, bcrypt, Swagger", level: 0.65 },
];

const N = categories.length;
const cx = 80;
const cy = 80;
const r = 65;

function radarPoints(values: number[]): string {
  return values
    .map((v, i) => {
      const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
      const x = cx + v * r * Math.cos(angle);
      const y = cy + v * r * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");
}

function axisPoints(): { x: number; y: number; label: string }[] {
  return categories.map((cat, i) => {
    const angle = (i * 2 * Math.PI) / N - Math.PI / 2;
    return {
      x: cx + (r + 18) * Math.cos(angle),
      y: cy + (r + 18) * Math.sin(angle),
      label: cat.label,
    };
  });
}

const gridLevels = [0.25, 0.5, 0.75, 1];

export default function DeveloperLicense() {
  const { locale } = useLocaleContext();

  const data = categories.map((c) => c.level);
  const axes = axisPoints();

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
                    points={radarPoints(categories.map(() => level))}
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
                  points={radarPoints(data)}
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

        <div className="mt-6 pt-4 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-mono text-[var(--text-muted)]">{cat.label}</span>
                <span className="text-[10px] font-mono text-[var(--accent)]">{Math.round(cat.level * 100)}%</span>
              </div>
              <div className="h-1 rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[var(--accent)] transition-all duration-1000"
                  style={{ width: `${cat.level * 100}%` }}
                />
              </div>
              <p className="text-[9px] text-[var(--text-secondary)] mt-0.5 truncate">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

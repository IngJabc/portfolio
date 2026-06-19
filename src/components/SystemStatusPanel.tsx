"use client";

import { useT } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const systemKeys = [
  { key: "frontend", labelKey: "frontend" },
  { key: "backend", labelKey: "backend" },
  { key: "database", labelKey: "database" },
  { key: "auth", labelKey: "auth" },
  { key: "realtime", labelKey: "realtime" },
  { key: "ai", labelKey: "ai" },
] as const;

const systemLevels: Record<string, string> = {
  frontend: "Production",
  backend: "Production",
  database: "Advanced",
  auth: "Advanced",
  realtime: "Production",
  ai: "Advanced",
};

const levelColors: Record<string, string> = {
  Production: "#10B981",
  Advanced: "#3B82F6",
  Intermediate: "#F59E0B",
  Basic: "#6B7280",
};

const skillsMap: Record<string, string> = {
  frontend: "React & Next.js",
  backend: "NestJS",
  database: "PostgreSQL",
  auth: "JWT",
  realtime: "WebSockets",
  ai: "TypeScript",
};

export default function SystemStatusPanel() {
  const t = useT("status");
  const tSkills = useT("skills");
  const router = useRouter();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  const handleClick = (key: string) => {
    const tech = skillsMap[key];
    if (tech) {
      router.push(`/${urlLocale}/skills?highlight=${encodeURIComponent(tech)}`);
    }
  };

  return (
    <div className="glass-panel p-6">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4 font-mono">
        {">"} {t("title")}
      </h2>
      <div className="space-y-3">
        {systemKeys.map((item, i) => {
          const level = systemLevels[item.key];
          const color = levelColors[level];
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleClick(item.key)}
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border)] cursor-pointer hover:border-[var(--accent)]/30 transition-colors"
            >
              <span className="text-sm text-[var(--text-secondary)] font-mono">
                {t(item.labelKey)}
              </span>
              <span
                className="inline-flex items-center px-2 py-0.5 text-xs rounded-full font-mono whitespace-nowrap"
                style={{
                  backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                  color,
                  border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
                }}
              >
                {tSkills(`level.${level}`)}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

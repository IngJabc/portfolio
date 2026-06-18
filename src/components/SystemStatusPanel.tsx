"use client";

import { useT } from "@/components/LocaleProvider";
import { useRouter, usePathname } from "next/navigation";
import { systemStatus, statusColors } from "@/lib/cv-data";
import { motion } from "framer-motion";

const systemKeys = [
  { key: "frontend", labelKey: "frontend" },
  { key: "backend", labelKey: "backend" },
  { key: "database", labelKey: "database" },
  { key: "auth", labelKey: "auth" },
  { key: "realtime", labelKey: "realtime" },
  { key: "ai", labelKey: "ai" },
] as const;

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
          const status = systemStatus[item.key as keyof typeof systemStatus];
          const color = statusColors[status];
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
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
                />
                <span
                  className="text-sm font-mono font-semibold"
                  style={{ color }}
                >
                  {status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

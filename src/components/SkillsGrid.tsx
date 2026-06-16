"use client";

import { skills } from "@/lib/cv-data";
import { motion } from "framer-motion";
import { useT } from "@/components/LocaleProvider";

const categoryIcons: Record<string, string> = {
  Frameworks: "⚙️",
  Languages: "💻",
  Databases: "🗄️",
  DevOps: "🚀",
  "Security & Testing": "🔒",
};

export default function SkillsGrid() {
  const t = useT("skills");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {skills.map((skillGroup, i) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">{categoryIcons[skillGroup.category] || "📦"}</span>
            <h3 className="font-semibold text-[var(--text-primary)]">
              {t(`categories.${skillGroup.category}`)}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item, j) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + j * 0.05 }}
                className="px-3 py-1 text-xs font-mono rounded-full border border-[var(--accent)]/30 text-[var(--accent)] bg-[var(--accent-10)]"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div className="mt-4 h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--accent)]"
              style={{ width: `${Math.min(100, skillGroup.items.length * 20)}%` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import { useT } from "@/components/LocaleProvider";
import SkillsGrid from "@/components/SkillsGrid";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const t = useT("skills");

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-5 mb-8"
        >
          <p className="text-xs font-mono text-[var(--accent)] mb-2">
            $ {t("pitchLabel")}
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {t("pitch")}
          </p>
        </motion.div>

        <SkillsGrid />
      </div>
    </div>
  );
}

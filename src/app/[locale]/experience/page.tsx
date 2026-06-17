"use client";

import { useT } from "@/components/LocaleProvider";
import { experience } from "@/lib/cv-data";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const t = useT("experience");

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ExperienceTimeline experience={exp} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

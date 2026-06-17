"use client";

import { motion } from "framer-motion";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { skillsData, type SkillCategory } from "@/lib/skills-data";
import styles from "./SkillsGrid.module.css";

const levelClassMap: Record<string, string> = {
  Production: styles.levelProduction,
  Advanced: styles.levelAdvanced,
  Intermediate: styles.levelIntermediate,
  Basic: styles.levelBasic,
};

const stagger = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function SkillsGrid() {
  const t = useT("skills");
  const { locale, tRaw } = useLocaleContext();
  const categories: SkillCategory[] = skillsData[locale === "es" ? "es" : "en"];

  const whatBuiltList = (tRaw("skills", "whatBuiltList") || []) as string[];

  return (
    <div className={styles.container}>
      {/* TypeScript Hero Card */}
      <motion.div
        className={styles.heroCard}
        initial="hidden"
        animate="show"
        custom={0}
        variants={stagger}
      >
        <p className={styles.heroLabel}>{t("primaryLanguage")}</p>
        <h2 className={styles.heroTitle}>TypeScript</h2>
        <p className={styles.heroDesc}>{t("primaryLanguageDesc")}</p>
      </motion.div>

      {/* Category Cards */}
      <div className={styles.categoryGrid}>
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            className={styles.categoryCard}
            initial="hidden"
            animate="show"
            custom={catIdx + 1}
            variants={stagger}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <h3 className={styles.categoryTitle}>{cat.id}</h3>
            </div>

            {cat.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={`${styles.levelBadge} ${levelClassMap[skill.level] || ""}`}>
                    {t(`level.${skill.level}`)}
                  </span>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.skillContext}>
                  {skill.context.split(", ").map((ctx) => (
                    <span key={ctx} className={styles.contextTag}>
                      {ctx}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* What I've built */}
      <motion.div
        className={styles.whatBuiltSection}
        initial="hidden"
        animate="show"
        custom={categories.length + 2}
        variants={stagger}
      >
        <p className={styles.whatBuiltTitle}>{t("whatBuilt")}</p>
        <div className={styles.whatBuiltList}>
          {whatBuiltList.map((item, i) => (
            <div key={i} className={styles.whatBuiltItem}>
              <span className={styles.whatBuiltBullet}>▸</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

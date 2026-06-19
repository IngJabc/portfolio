"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { skillsData, type SkillCategory, type SkillWithContext } from "@/lib/skills-data";
import styles from "./SkillsGrid.module.css";
import { useState, useEffect, useRef, Suspense } from "react";

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

const BADGE_TO_SKILL_FRAGMENT: Record<string, string> = {
  "next.js": "next.js",
  "react": "next.js",
  "strapi v5": "strapi",
  "strapi": "strapi",
  "websockets": "websockets",
  "jwt": "auth",
  "recaptcha": "auth",
  "auth": "auth",
  "security": "auth",
  "javascript": "javascript",
  "tailwind css": "tailwind",
  "tailwind": "tailwind",
  "git": "git",
  "github": "git",
  "azure": "azure",
  "cloud": "azure",
  "rest api": "rest",
  "rest": "rest",
};

function findSkill(
  categories: SkillCategory[],
  query: string
): { category: SkillCategory; skill: SkillWithContext } | null {
  const q = query.toLowerCase();
  for (const cat of categories) {
    let match = cat.skills.find((s) => s.name.toLowerCase() === q);
    if (!match) {
      const fragment = BADGE_TO_SKILL_FRAGMENT[q];
      if (fragment) {
        match = cat.skills.find((s) => s.name.toLowerCase().includes(fragment));
      }
    }
    if (match) return { category: cat, skill: match };
  }
  return null;
}

function SkillsGridInner() {
  const t = useT("skills");
  const { locale, tRaw } = useLocaleContext();
  const categories: SkillCategory[] = skillsData[locale === "es" ? "es" : "en"];
  const searchParams = useSearchParams();
  const highlightTech = searchParams?.get("highlight");

  const [highlighted, setHighlighted] = useState<string | null>(null);
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const whatBuiltList = (tRaw("skills", "whatBuiltList") || []) as string[];

  // Handle highlight from URL
  useEffect(() => {
    if (!highlightTech) return;

    const result = findSkill(categories, highlightTech);
    if (result) {
      setHighlighted(result.category.id);
      setHighlightedSkill(result.skill.name);
      setTimeout(() => {
        cardRefs.current[result.category.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      setTimeout(() => {
        setHighlighted(null);
        setHighlightedSkill(null);
      }, 2500);
    }
  }, [highlightTech, categories]);

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
            ref={(el) => { cardRefs.current[cat.id] = el; }}
            className={`${styles.categoryCard} ${highlighted === cat.id ? styles.highlightGlow : ""}`}
            initial="hidden"
            animate="show"
            custom={catIdx + 1}
            variants={stagger}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <h3 className={styles.categoryTitle}>{cat.id}</h3>
            </div>

            <div>
              {cat.skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span
                      className={`${styles.skillName} ${highlightedSkill === skill.name ? styles.skillHighlight : ""}`}
                    >
                      {skill.name}
                    </span>
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
            </div>
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

export default function SkillsGrid() {
  return (
    <Suspense fallback={null}>
      <SkillsGridInner />
    </Suspense>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import SystemStatusPanel from "@/components/SystemStatusPanel";
import QuickMetrics from "@/components/QuickMetrics";
import ImpactSection from "@/components/ImpactSection";
import DeveloperLicense from "@/components/DeveloperLicense";
import { useState, useEffect, useRef, useCallback } from "react";

const KONAMI_SEQ = ["w", "w", "a", "a", "s", "s", "d", "d", "b", "a"];
const SWIPE_SEQ = ["up", "up", "left", "left", "down", "down", "right", "right", "tap", "tap"];
const SWIPE_THRESHOLD = 30;

export default function DashboardPage() {
  const t = useT("dashboard");
  const { locale } = useLocaleContext();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  const [showAchievement, setShowAchievement] = useState(false);
  const [showSecretPrompt, setShowSecretPrompt] = useState(false);
  const [dollarClicks, setDollarClicks] = useState(0);
  const seqRef = useRef<string[]>([]);
  const swipeSeqRef = useRef<string[]>([]);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    seqRef.current.push(e.key.toLowerCase());
    if (seqRef.current.length > KONAMI_SEQ.length) {
      seqRef.current.shift();
    }
    if (seqRef.current.join("") === KONAMI_SEQ.join("")) {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 4000);
      seqRef.current = [];
    }
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY, time: Date.now() };
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartRef.current) return;
    const start = touchStartRef.current;
    const t = e.changedTouches[0];
    const dx = start.x - t.clientX;
    const dy = start.y - t.clientY;
    const elapsed = Date.now() - start.time;
    let gesture = "";

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && elapsed < 300) {
      gesture = "tap";
    } else if (Math.abs(dx) > SWIPE_THRESHOLD || Math.abs(dy) > SWIPE_THRESHOLD) {
      if (Math.abs(dx) > Math.abs(dy)) {
        gesture = dx > 0 ? "left" : "right";
      } else {
        gesture = dy > 0 ? "up" : "down";
      }
    }

    if (gesture) {
      swipeSeqRef.current.push(gesture);
      if (swipeSeqRef.current.length > SWIPE_SEQ.length) {
        swipeSeqRef.current.shift();
      }
      if (swipeSeqRef.current.join("") === SWIPE_SEQ.join("")) {
        setShowAchievement(true);
        setTimeout(() => setShowAchievement(false), 4000);
        swipeSeqRef.current = [];
      }
    }
    touchStartRef.current = null;
  }, []);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleDollarClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.textContent?.includes("$") ||
      target.closest('[class*="font-mono"]')?.textContent?.includes("$")
    ) {
      setDollarClicks((prev) => {
        const next = prev + 1;
        if (next >= 5) {
          setShowSecretPrompt(true);
          setTimeout(() => setShowSecretPrompt(false), 5000);
          return 0;
        }
        return next;
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDollarClick);
    return () => document.removeEventListener("click", handleDollarClick);
  }, [handleDollarClick]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            key="achievement"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-primary)]/80 backdrop-blur-sm"
          >
            <motion.div
              className="text-center"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                🏆
              </motion.div>
              <p className="text-xs font-mono text-[var(--accent)] mb-2 tracking-widest">
                {locale === "es" ? "LOGRO DESBLOQUEADO" : "ACHIEVEMENT UNLOCKED"}
              </p>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] font-mono mb-2">
                {locale === "es" ? "Modo Senior Dev" : "Senior Dev Mode"}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] font-mono">
                $ echo &quot;{locale === "es" ? "Encontraste el Konami Code" : "You found the Konami Code!"}&quot;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSecretPrompt && (
          <motion.div
            key="secret-prompt"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-6 left-6 z-50 glass-panel p-4 border-l-2 border-[var(--accent)]"
          >
            <p className="text-xs font-mono text-[var(--accent)] mb-1">
              {">"} {locale === "es" ? "Acceso concedido." : "Access granted."}
            </p>
            <p className="text-sm font-mono text-[var(--text-primary)]">
              {locale === "es" ? "Bienvenido de vuelta, " : "Welcome back, "}<span className="text-[var(--accent)]">0xJABC</span>.
            </p>
            <p className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
              {locale === "es" ? "// Encontraste el prompt secreto. +5 puntos geek." : "// You found the secret prompt. +5 geek points."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            {t("title")}
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1 font-mono">
            /{">"} {t("subtitle")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <SystemStatusPanel />
            </div>
            <div>
              <QuickMetrics />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ImpactSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mt-8 flex justify-center gap-4 flex-wrap items-center">
            <Link
              href={`/${urlLocale}/projects`}
              className="glass-panel px-8 py-4 inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-all rounded-lg"
            >
              {t("cta")}
            </Link>
            <a
              href="/CV-Jose-Bonilla-Web-Engineer.pdf"
              download
              className="glass-panel px-8 py-4 inline-flex items-center gap-3 text-sm font-semibold text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all rounded-lg"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {locale === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DeveloperLicense />
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import AIChat from "@/components/AIChat";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/translations";

export default function JabcBot() {
  const [open, setOpen] = useState(false);
  const { locale } = useLocaleContext();
  const t = useT("");
  const dict = dictionary[locale].jabcbot;
  const router = useRouter();

  // close panel on route change
  useEffect(() => {
    return () => {};
  }, []);

  const handleNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <div
      className="fixed bottom-0 right-0 pointer-events-none"
      aria-live="polite"
    >
      {/* Floating button */}
      <button
        aria-expanded={open}
        aria-controls="jabcbot-panel"
        onClick={() => setOpen((s) => !s)}
        className="pointer-events-auto fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-3 py-2 rounded-lg font-mono bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)] shadow-lg hover:scale-105 transition-transform cursor-pointer"
        title={open ? dict.buttonClose : dict.buttonOpen}
      >
        {/* <span className="text-xs font-mono">&gt;</span> */}
        <span className="font-semibold text-sm">{dict.open}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="jabcbot-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto fixed bottom-20 right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] h-[92vh] sm:h-[600px]"
          >
            <div className="flex flex-col h-full glass-panel border border-[var(--border)]">
              <div className="flex-1 overflow-hidden">
                <AIChat fullHeight onClose={() => setOpen(false)} />
              </div>

              <div className="p-2 border-t border-[var(--border)] bg-[var(--bg-primary)] flex gap-2 items-center">
                <button
                  onClick={() => handleNavigate("/projects")}
                  className="flex-1 text-xs font-mono px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--accent)]/5"
                >
                  {dict.footerProjects}
                </button>
                <button
                  onClick={() => handleNavigate("/skills")}
                  className="flex-1 text-xs font-mono px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--accent)]/5"
                >
                  {dict.footerSkills}
                </button>
                <button
                  onClick={() => handleNavigate("/contact")}
                  className="text-xs font-mono px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--accent)]/5"
                >
                  {dict.footerContact}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

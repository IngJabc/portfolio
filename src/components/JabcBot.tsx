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

  // lock body scroll when panel is open (mobile)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  const handleNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <div className="fixed bottom-0 right-0 pointer-events-none" aria-live="polite">
      {/* Floating button */}
      <button
        aria-expanded={open}
        aria-controls="jabcbot-panel"
        onClick={() => setOpen((s) => !s)}
        className="pointer-events-auto fixed bottom-8 right-8 z-50 inline-flex items-center justify-center w-16 h-16 rounded-full font-mono bg-[var(--bg-elevated)] text-[var(--accent)] border-2 border-[var(--accent)]/50 shadow-lg hover:scale-110 hover:border-[var(--accent)] hover:shadow-[0_0_30px_var(--accent-30)] transition-all duration-200 cursor-pointer animate-float"
        title={open ? dict.buttonClose : dict.buttonOpen}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="jabcbot-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto fixed bottom-20 right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] top-[80px]"
          >
            <div className="flex flex-col h-full glass-panel border border-[var(--border)]">
              <div className="flex-1 overflow-hidden">
                <AIChat fullHeight onClose={() => setOpen(false)} />
              </div>

              <div className="p-2 border-t border-[var(--border)] bg-[var(--bg-primary)] flex gap-2 items-center">
                <button
                  onClick={() => handleNavigate('/projects')}
                  className="flex-1 text-xs font-mono px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--accent)]/5"
                >
                  {dict.footerProjects}
                </button>
                <button
                  onClick={() => handleNavigate('/skills')}
                  className="flex-1 text-xs font-mono px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border)] hover:bg-[var(--accent)]/5"
                >
                  {dict.footerSkills}
                </button>
                <button
                  onClick={() => handleNavigate('/contact')}
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

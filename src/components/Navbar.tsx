"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLocaleContext, useT } from "./LocaleProvider";

export default function Navbar() {
  const fullPath = usePathname();
  const { locale, setLocale } = useLocaleContext();
  const t = useT("nav");
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const urlLocale = fullPath.split("/")[1] || "en";

  const links = [
    { href: "/dashboard", label: t("dashboard") },
    { href: "/skills", label: t("skills") },
    { href: "/projects", label: t("projects") },
    { href: "/experience", label: t("experience") },
    // AI assistant is now a global floating widget (JabcBot)
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel rounded-none border-x-0 border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${urlLocale}/dashboard`} className="flex items-baseline gap-2 group">
            <span className="text-lg font-bold text-[var(--accent)] tracking-tight">José Bonilla</span>
            <span className="hidden sm:inline text-[10px] font-mono text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors">
              {t("subtitle")}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={`/${urlLocale}${link.href}`}
                className={`text-sm transition-colors hover:text-[var(--accent)] ${
                  fullPath === `/${urlLocale}${link.href}` ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLocale(otherLocale)}
              className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <a
              href="/CV-Jose-Bonilla-Web-Engineer.pdf"
              download
              className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              title={locale === "en" ? "Download CV" : "Descargar CV"}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title={theme === "dark" ? t("switchToLight") : t("switchToDark")}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-1.5">
            <a
              href="/CV-Jose-Bonilla-Web-Engineer.pdf"
              download
              className="px-2 py-1 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              title={locale === "en" ? "Download CV" : "Descargar CV"}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
            <button
              onClick={() => setLocale(otherLocale)}
              className="px-2 py-1 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={toggleTheme}
              className="px-2 py-1 text-xs rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title={theme === "dark" ? t("switchToLight") : t("switchToDark")}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-7 h-6 text-[var(--text-secondary)] hover:text-white"
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-1">
                <span
                  className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={`/${urlLocale}${link.href}`}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-md ${
                        fullPath === `/${urlLocale}${link.href}`
                          ? "text-[var(--accent)] bg-[var(--bg-elevated)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { useT, useLocaleContext } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/translations";

export default function ContactPage() {
  const t = useT("contact");
  const { locale } = useLocaleContext();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";
  const dict = dictionary[locale].contact;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <div className="glass-panel p-6 mb-6">
            <div className="space-y-4">
              <ContactItem
                label={dict.email}
                value="ingjosebonilla@gmail.com"
                copyable
                copiedText={dict.copied}
                copyLabel={dict.copyLabel}
              />
              <ContactItem
                label={dict.linkedin}
                value="linkedin.com/in/ing-jabc"
                link="https://www.linkedin.com/in/ing-jabc"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="glass-panel p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{dict.schedule}</p>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">{dict.scheduleDesc}</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
                style={{
                  backgroundColor: "var(--accent-10)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-30)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-20)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-10)";
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {dict.schedule}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-panel p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs text-[var(--text-muted)] font-mono mb-1">{locale === "en" ? "Resume" : "Currículum"}</p>
                <p className="text-sm text-[var(--text-primary)]">{locale === "en" ? "Download my full CV" : "Descargar mi CV completo"}</p>
              </div>
              <a
                href="/CV%20Jos%C3%A9%20%20Web%20Application%20Engineer.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
                style={{
                  backgroundColor: "var(--accent-10)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-30)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-20)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-10)";
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                {locale === "en" ? "Download CV" : "Descargar CV"}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass-panel p-6 mb-6" role="status" aria-live="polite">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[var(--success)]" aria-hidden="true">$</span>
              <span className="text-xs font-mono text-[var(--text-secondary)]">
                {dict.availability}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-panel p-6">
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2 leading-relaxed">
              {dict.orAskAI}
            </h3>
            <Link
              href={`/${urlLocale}/ai`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors mt-3"
              style={{
                backgroundColor: "var(--accent-10)",
                color: "var(--accent)",
                border: "1px solid var(--accent-30)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-10)";
              }}
            >
              <span aria-hidden="true">🤖</span> {dict.aiAssistant}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ContactItem({
  label,
  value,
  link,
  clickToReveal,
  copyable,
  copiedText,
  copyLabel,
}: {
  label: string;
  value: string;
  link?: string;
  clickToReveal?: string;
  copyable?: boolean;
  copiedText?: string;
  copyLabel?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silent fallback */
    }
  };

  return (
    <div className="py-3 border-b border-[var(--border)] last:border-0">
      <p className="text-xs text-[var(--text-muted)] font-mono mb-1">{label}</p>
      <div className="flex items-center gap-2 justify-end">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            {value}
          </a>
        ) : clickToReveal && !copyable ? (
          <button
            onClick={() => setRevealed(true)}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            {revealed ? value : clickToReveal}
          </button>
        ) : (
          <>
            <span className="text-sm text-[var(--accent)]">{value}</span>
            <button
              onClick={handleCopy}
              title={copyLabel}
              aria-label={copied ? copiedText : copyLabel}
              className="px-2 py-1 text-[10px] rounded font-mono transition-colors whitespace-nowrap"
              style={{
                backgroundColor: copied
                  ? "color-mix(in srgb, var(--success) 20%, transparent)"
                  : "var(--bg-elevated)",
                color: copied ? "var(--success)" : "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {copied ? copiedText : copyLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

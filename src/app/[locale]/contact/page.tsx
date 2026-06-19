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
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ingjosebonilla@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      /* silent */
    }
  };

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
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-[var(--text-primary)]">{dict.email}</p>
                <p className="text-xs text-[var(--text-muted)] font-mono">ingjosebonilla@gmail.com</p>
              </div>
              <div className="inline-flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--accent-30)" }}>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=ingjosebonilla@gmail.com&su=${encodeURIComponent(dict.emailSubject)}&body=${encodeURIComponent(dict.emailBody)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors shrink-0"
                  style={{
                    backgroundColor: "var(--accent-10)",
                    color: "var(--accent)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-20)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-10)"; }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {dict.email}
                </a>
                <div className="w-px self-stretch" style={{ backgroundColor: "var(--accent-30)" }} />
                <button
                  onClick={handleCopyEmail}
                  title={emailCopied ? dict.copied : dict.copyLabel}
                  aria-label={emailCopied ? dict.copied : dict.copyLabel}
                  className="inline-flex items-center justify-center w-[38px] text-sm font-medium transition-colors shrink-0 relative px-2"
                  style={{
                    backgroundColor: "var(--accent-10)",
                    color: emailCopied ? "var(--success)" : "var(--accent)",
                  }}
                  onMouseEnter={(e) => {
                    if (!emailCopied) e.currentTarget.style.backgroundColor = "var(--accent-20)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--accent-10)";
                  }}
                >
                  {emailCopied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--success) 90%, transparent)",
                          color: "#fff",
                        }}
                      >
                        {dict.copied}
                      </span>
                    </>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div className="glass-panel p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-[var(--text-primary)]">{dict.linkedin}</p>
                {/* <p className="text-xs text-[var(--text-muted)] font-mono">linkedin.com/in/ing-jabc</p> */}
              </div>
              <a
                href="https://www.linkedin.com/in/ing-jabc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
                style={{
                  backgroundColor: "var(--accent-10)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-30)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-20)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--accent-10)"; }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                {dict.linkedin}
              </a>
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
                <p className="text-sm text-[var(--text-primary)]">{dict.schedule}</p>
                {/* <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">{dict.scheduleDesc}</p> */}
              </div>
              <a
                href={`https://wa.me/584245552793?text=${encodeURIComponent(dict.whatsappMessage)}`}
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
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
                <p className="text-sm text-[var(--text-primary)]">{locale === "en" ? "Resume" : "Currículum"}</p>
                {/* <p className="text-xs text-[var(--text-muted)] font-mono">{locale === "en" ? "Download my full CV" : "Descargar mi CV completo"}</p> */}
              </div>
              <a
                href="/CV-Jose-Bonilla-Web-Engineer.pdf"
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

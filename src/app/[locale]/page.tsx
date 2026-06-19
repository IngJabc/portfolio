"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { personalInfo } from "@/lib/cv-data";
import { dictionary } from "@/lib/translations";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[var(--bg-primary)]" />,
});

export default function BootPage() {
  const router = useRouter();
  const urlLocale =
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "en";
  const lang = urlLocale === "es" ? "es" : "en";
  const [progress, setProgress] = useState(0);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const dict = dictionary[lang].boot;
  const bootMessages = [
    dict.kernel,
    dict.systemModules,
    dict.mounting,
    dict.networkServices,
    dict.databaseConn,
    dict.loadingEngine,
    dict.systemReady,
  ];

  useEffect(() => {
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < bootMessages.length) {
        setBootLines((prev) => [...prev, bootMessages[lineIndex]]);
        setProgress(((lineIndex + 1) / bootMessages.length) * 100);
        lineIndex++;
      } else {
        clearInterval(lineInterval);
        setDone(true);
        setTimeout(() => {
          if (!skipped) router.push(`/${urlLocale}/dashboard`);
        }, 500);
      }
    }, 130);

    return () => clearInterval(lineInterval);
  }, [router, urlLocale, skipped]);

  const handleSkip = () => {
    setSkipped(true);
    router.push(`/${urlLocale}/dashboard`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-6 text-center">
          <div className="w-20 h-20 rounded-full bg-[var(--accent)]/20 border-2 border-[var(--accent)]/40 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-[var(--accent)] font-mono shadow-[0_0_20px_var(--accent-30)]">
            JB
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] font-mono mb-1">
            {personalInfo.name}
          </h1>
          <p className="text-sm text-[var(--accent)] font-mono">{dict.title}</p>
          <p className="text-xs text-[var(--text-secondary)] font-mono mt-3 leading-relaxed">
            {dict.valueProp}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
            <Link
              href={`/${urlLocale}/projects`}
              aria-label={`${dict.viewProjects} — navigate to projects`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/20 transition-colors font-mono"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              {dict.viewProjects}
            </Link>
            <a
              href={`/${urlLocale}/contact`}
              aria-label={`${dict.contact} — navigate to contact`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/20 transition-colors font-mono"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {dict.contact}
            </a>

            <a
              href="/CV-Jose-Bonilla-Web-Engineer.pdf"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/20 transition-colors font-mono"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </div>

        <div className="glass-panel p-6 mb-4 font-mono text-sm">
          <div className="space-y-1.5">
            {bootLines.map((line, i) => (
              <p
                key={i}
                className={`${
                  i === bootLines.length - 1
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)]"
                } animate-fade-slide-up`}
              >
                <span className="text-[var(--success)]">$</span> {line}
              </p>
            ))}
            {!done && (
              <span className="text-[var(--accent)] animate-boot-pulse">_</span>
            )}
            {done && (
              <p className="text-[var(--success)] animate-fade-slide-up">
                <span className="text-[var(--success)]">$</span>{" "}
                {dict.systemReady}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[var(--border)] rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            onClick={handleSkip}
            className="shrink-0 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            {dict.skip}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { dictionary } from "@/lib/translations";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[var(--bg-primary)]" />,
});

export default function BootPage() {
  const router = useRouter();
  const urlLocale = typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "en";
  const lang = urlLocale === "es" ? "es" : "en";
  const [progress, setProgress] = useState(0);
  const [bootLines, setBootLines] = useState<string[]>([]);

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
        setTimeout(() => {
          router.push(`/${urlLocale}/dashboard`);
        }, 800);
      }
    }, 200);

    return () => clearInterval(lineInterval);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>
      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[var(--accent)] font-mono mb-2">
            {dict.title}
          </h1>
          <p className="text-[var(--text-secondary)] font-mono text-sm">{dict.loading}</p>
        </div>

        <div className="glass-panel p-6 mb-6 font-mono text-sm">
          <div className="space-y-1.5">
            {bootLines.map((line, i) => (
              <p
                key={i}
                className={`${i === bootLines.length - 1 ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"} animate-fade-slide-up`}
              >
                <span className="text-[var(--success)]">$</span> {line}
              </p>
            ))}
            {bootLines.length < bootMessages.length && (
              <span className="text-[var(--accent)] animate-boot-pulse">_</span>
            )}
          </div>
        </div>

        <div className="w-full bg-[var(--border)] rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

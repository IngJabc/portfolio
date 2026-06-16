"use client";

import { useT } from "@/components/LocaleProvider";
import AIChat from "@/components/AIChat";

export default function AIPage() {
  const t = useT("ai");

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <AIChat />
      </div>
    </div>
  );
}

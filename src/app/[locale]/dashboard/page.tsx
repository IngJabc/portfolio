"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/LocaleProvider";
import SystemStatusPanel from "@/components/SystemStatusPanel";
import QuickMetrics from "@/components/QuickMetrics";
import NavigationActions from "@/components/NavigationActions";
import DeveloperLicense from "@/components/DeveloperLicense";

export default function DashboardPage() {
  const t = useT("dashboard");
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SystemStatusPanel />
          </div>
          <div>
            <QuickMetrics />
          </div>
        </div>

        <NavigationActions />

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${urlLocale}/projects`}
            className="glass-panel px-8 py-4 inline-flex items-center gap-3 text-sm font-semibold text-[var(--accent)] border border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-all rounded-lg"
          >
            {t("cta")}
          </Link>
        </div>

        <DeveloperLicense />
      </div>
    </div>
  );
}

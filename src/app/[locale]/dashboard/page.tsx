"use client";

import { useT } from "@/components/LocaleProvider";
import SystemStatusPanel from "@/components/SystemStatusPanel";
import QuickMetrics from "@/components/QuickMetrics";
import ImpactSection from "@/components/ImpactSection";
import DeveloperLicense from "@/components/DeveloperLicense";

export default function DashboardPage() {
  const t = useT("dashboard");

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

        <ImpactSection />

        <DeveloperLicense />
      </div>
    </div>
  );
}

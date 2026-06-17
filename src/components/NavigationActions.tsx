"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/LocaleProvider";

const actions = [
  { href: "/skills", labelKey: "viewSkills", icon: "🧰", descKey: "descSkills" },
  { href: "/projects", labelKey: "viewProjects", icon: "📁", descKey: "descProjects" },
  { href: "/experience", labelKey: "viewExperience", icon: "📈", descKey: "descExperience" },
  // AI assistant moved to global floating widget (JabcBot)
  { href: "/contact", labelKey: "contact", icon: "📬", descKey: "descContact" },
];

export default function NavigationActions() {
  const t = useT("dashboard");
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";

  return (
    <div>
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4 font-mono">
        {">"} {t("navigation")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link key={action.href} href={`/${urlLocale}${action.href}`} className="flex">
            <div className="glass-panel p-5 cursor-pointer transition-all duration-200 hover:border-[var(--accent)] group h-full flex flex-col w-full">
              <span className="text-2xl mb-2 block">{action.icon}</span>
              <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {t(action.labelKey)}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{t(action.descKey)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

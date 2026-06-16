"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useT } from "@/components/LocaleProvider";
import { useLocaleContext } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/translations";

export default function ContactPage() {
  const t = useT("contact");
  const { locale } = useLocaleContext();
  const fullPath = usePathname();
  const urlLocale = fullPath.split("/")[1] || "en";
  const dict = dictionary[locale].contact;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">{t("title")}</h1>
          <p className="text-[var(--text-secondary)] text-sm mt-1">/{">"} {t("subtitle")}</p>
        </div>

        <div className="glass-panel p-6 mb-6">
          <div className="space-y-4">
            <ContactItem label={dict.email} value="jose@example.com" clickToReveal={dict.clickToReveal} />
            <ContactItem label={dict.linkedin} value="linkedin.com/in/ing-jabc" link="https://www.linkedin.com/in/ing-jabc" />
            <ContactItem label={dict.github} value="github.com/jose" link="#" clickToReveal={dict.clickToReveal} />
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t("orAskAI")}</h3>
          <Link
            href={`/${urlLocale}/ai`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors"
            style={{
              backgroundColor: 'var(--accent-10)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-30)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-20)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-10)'; }}
          >
            <span>🤖</span> {dict.aiAssistant}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ label, value, link, clickToReveal }: { label: string; value: string; link?: string; clickToReveal?: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0">
      <span className="text-sm text-[var(--text-secondary)] font-mono">{label}</span>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--accent)] hover:underline"
        >
          {value}
        </a>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="text-sm text-[var(--accent)] hover:underline"
        >
          {revealed ? value : (clickToReveal || "[Click to reveal]")}
        </button>
      )}
    </div>
  );
}

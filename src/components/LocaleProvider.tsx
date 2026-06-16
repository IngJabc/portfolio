"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { dictionary, type Locale } from "@/lib/translations";

type TFunction = (key: string) => string;

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TFunction;
  tRaw: (namespace: string, key: string) => unknown;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ initialLocale, children }: { initialLocale: string; children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale === "es" ? "es" : "en");

  const t: TFunction = (key: string) => {
    const parts = key.split(".");
    let value: any = dictionary[locale];
    for (const part of parts) {
      if (value == null) return key;
      value = value[part as keyof typeof value];
    }
    if (typeof value === "string") return value;
    if (Array.isArray(value)) return value.join(", ");
    return key;
  };

  const tRaw = (namespace: string, key: string): unknown => {
    const ns = (dictionary[locale] as Record<string, any>)[namespace];
    return ns?.[key];
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tRaw }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocaleContext must be used within LocaleProvider");
  return ctx;
}

export function useT(namespace: string): TFunction {
  const { t } = useLocaleContext();
  return (key: string) => t(`${namespace}.${key}`);
}

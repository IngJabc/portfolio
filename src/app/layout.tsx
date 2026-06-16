import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import ParticleFieldWrapper from "@/components/ParticleFieldWrapper";
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Bonilla | Fullstack Web Developer",
  description: "Fullstack Web Developer specializing in Next.js, NestJS, TypeScript and system architecture.",
  icons: {},
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="/tailwind.css" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
        <ThemeProvider>
          <LocaleProvider initialLocale={locale}>
            <ParticleFieldWrapper />
            <div className="relative z-10 flex flex-col min-h-full">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

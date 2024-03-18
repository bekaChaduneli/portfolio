import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import i18nConfig from "../i18nConfig";
import { ReactNode } from "react";
import { dir } from "i18next";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beka Chaduneli",
  description: "portfolio",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: any) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body id="root" className={inter.className}>
        <Providers>
          <Navbar locale={locale} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

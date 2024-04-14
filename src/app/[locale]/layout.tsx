import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import i18nConfig from "../i18nConfig";
import { ReactNode } from "react";
import { dir } from "i18next";
import { Providers } from "./providers";
import CanvasComponent from "@/components/CanvasComponent";
import { Noto_Sans_Georgian } from "next/font/google";
import CursorAnimations from "@/components/Cursor/CursorAnimations";

export const metadata: Metadata = {
  title: "Beka Chaduneli",
  description: "portfolio",
};

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale: string) => ({ locale }));
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
      <body
        id="root"
        className={`overflow-hidden 
        ${locale === "en" ? "font-graphik" : notoSansGeorgian.className}
        `}
      >
        <Providers>
          <CanvasComponent />
          <CursorAnimations />
          <div className="">
            <Navbar locale={locale} />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

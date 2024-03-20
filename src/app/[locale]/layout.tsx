import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import i18nConfig from "../i18nConfig";
import { ReactNode } from "react";
import { dir } from "i18next";
import { Providers } from "./providers";
import CanvasComponent from "@/components/CanvasComponent";
import localFont from "next/font/local";

const graphik = localFont({
  src: "./static-fonts/Graphik-Regular.woff2",
  display: "swap",
});

const daecon = localFont({
  src: "./static-fonts/Deacon-Black.woff2",
  display: "swap",
});

const beatrice = localFont({
  src: "./static-fonts/Beatrice-Medium.woff2",
  display: "swap",
});

const acorn = localFont({
  src: "./static-fonts/Beatrice-Medium.woff2",
  display: "swap",
});

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
      <body id="root" className={"graphik"}>
        <Providers>
          <CanvasComponent />
          <div className="z-[4]">
            <Navbar locale={locale} />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

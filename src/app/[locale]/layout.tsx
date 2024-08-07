import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import CanvasComponent from "@/components/CanvasComponent";
import { Noto_Sans_Georgian } from "next/font/google";
import CursorAnimations from "@/components/Cursor/CursorAnimations";
import PopUp from "@/components/shared/PopUp";
import Footer from "@/components/Footer";
import { locales } from "@/config";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Metadata } from "next";
import { ApolloWrapper } from "./ApolloWrapper";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children"> & { pageTitle: string }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        id="root"
        className={`overflow-hidden
        ${locale === "en" ? "font-graphik" : notoSansGeorgian?.className || ""}
        `}
      >
        <ApolloWrapper>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <PopUp />
              <CanvasComponent />
              <CursorAnimations />
              <div className="">
                <Navbar locale={locale} />
                {children}
                <Footer />
              </div>
            </Providers>
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}

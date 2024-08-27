import { ReactNode } from "react";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { Noto_Sans_Georgian } from "next/font/google";

import { locales } from "@/config";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Metadata } from "next";
import { ApolloWrapper } from "./ApolloWrapper";
import PopUp from "@/components/shared/PopUp";
import CanvasComponent from "@/components/CanvasComponent";
import CursorAnimations from "@/components/Cursor/CursorAnimations";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

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
  const messages = await getMessages();
  return (
    <html
      className="transition-all duration-300 blue-scrollbar "
      lang={locale}
      suppressHydrationWarning
    >
      <body
        id="root"
        className={`overflow-hidden transition-all duration-300
        ${locale === "en" ? "font-graphik" : "font-firago" }
        `}
      >
        <ApolloWrapper>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <PopUp />
              <CanvasComponent />
              <CursorAnimations />
              <div className="transition-all duration-300">
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

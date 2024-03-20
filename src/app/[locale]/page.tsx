"use client";
import Header from "@/components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useEffect, useState } from "react";

const i18nNamespaces = ["home"];

export default function Home({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      const { t, resources } = await initTranslations(locale, i18nNamespaces);
      setTranslations({ t, resources });
    };

    fetchTranslations();
  }, [locale]);

  if (!translations) {
    return <div className="w-full h-full bg-black"></div>;
  }

  const { t, resources } = translations;

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="z-[22]">
        <Header />
      </main>
    </TranslationsProvider>
  );
}

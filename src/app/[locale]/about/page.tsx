"use client";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useEffect, useState } from "react";

const i18nNamespaces = ["about"];

export default function About({
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
      <main>
        <h1>{t("headline")}</h1>
      </main>
    </TranslationsProvider>
  );
}

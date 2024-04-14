"use client";
import Header from "@/components/Header/Header";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useTranslations } from "@/hooks/useTransitions";

const i18nNamespaces = ["home"];

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const translations = useTranslations(locale, i18nNamespaces);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const { t, resources } = translations;
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="mb-[2000px]">
        <Header />
      </main>
    </TranslationsProvider>
  );
}

"use client";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useTranslations } from "@/hooks/useTransitions";

const i18nNamespaces = ["blog"];

export default function Blog({
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
      <main>
        <h1>{t("headline")}</h1>
      </main>
    </TranslationsProvider>
  );
}

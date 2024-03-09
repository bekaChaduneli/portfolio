import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["contact"];

export default async function Contacts({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

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

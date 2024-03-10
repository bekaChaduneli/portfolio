import Header from "@/components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Calendly from "@/components/Calendly";

const i18nNamespaces = ["home"];

export default async function Home({
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
        <Header />
      </main>
    </TranslationsProvider>
  );
}

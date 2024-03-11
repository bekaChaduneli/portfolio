import Header from "@/components/Header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

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
        <div id="aura-hero" className="canvas svelte-firmm6">
          <div className="mask svelte-firmm6"></div>
          <div className="canvas-holder svelte-firmm6">
            <canvas
              id="canvas"
              width="32"
              height="32"
              className="svelte-firmm6"
            ></canvas>
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
